/* DEC15 · My planner — each student's private notes, to-dos and calendar.
   Separate from the lesson notebook (highlights, answers): nothing here is shared with teachers or classmates.
   - Saved on the device first (localStorage), copied online when signed in (Supabase table planner_items,
     owner-only row-level security). Each item merges on its own: the newer copy wins.
   - To-dos live in ONE place (a "task" item). A to-do line inside a note only keeps the task's id, so ticking it
     in the note, the calendar or the to-do list always changes the same task.
   Needs js/vendor/tiptap.bundle.js (window.Tiptap). Loaded only on #/planner. */
window.DEC15Planner = (() => {
  let ctx = null, root = null, editor = null, mounted = false;
  const esc = s => ctx.esc(s), icon = (n, c) => ctx.icon(n, c);
  const uuid = () => (crypto.randomUUID ? crypto.randomUUID() : 'id-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
  const nowIso = () => new Date().toISOString();
  const pad = n => String(n).padStart(2, '0');
  const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseYmd = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const todayStr = () => ymd(new Date());
  const addDays = (s, n) => { const d = parseYmd(s); d.setDate(d.getDate() + n); return ymd(d); };
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const niceDate = s => { if (!s) return ''; const d = parseYmd(s), t = todayStr();
    if (s === t) return 'Today'; if (s === addDays(t, 1)) return 'Tomorrow'; if (s === addDays(t, -1)) return 'Yesterday';
    return d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', ...(d.getFullYear() !== new Date().getFullYear() ? { year: 'numeric' } : {}) }); };
  const COLORS = { teal: '#2b776e', clay: '#b0512a', plum: '#7a4a8c', blue: '#3a58a0', gold: '#985c0e', green: '#3f7a3a' };
  const MAX_CAL = 3;

  /* ───────── store: notes, folders, calendars and tasks, all as items ───────── */
  let uid = null, items = {}, dirty = new Set(), subs = new Set(), status = 'local', persistTimer = 0;
  const KEY = u => 'dec15-planner:' + (u || 'device');
  function loadLocal(u) { try { const raw = JSON.parse(localStorage.getItem(KEY(u)) || 'null'); return raw && raw.items ? raw : { items: {}, dirty: [] }; } catch (e) { return { items: {}, dirty: [] }; } }
  function persistNow() { clearTimeout(persistTimer); try { localStorage.setItem(KEY(uid), JSON.stringify({ items, dirty: [...dirty] })); } catch (e) { setStatus('full'); } }
  function persist() { clearTimeout(persistTimer); persistTimer = setTimeout(persistNow, 250); }
  const get = id => items[id] && !items[id].deleted ? items[id] : null;
  const list = kind => Object.values(items).filter(i => i.kind === kind && !i.deleted);
  const subscribe = fn => (subs.add(fn), () => subs.delete(fn));
  const emit = id => subs.forEach(fn => { try { fn(id); } catch (e) { console.error(e); } });
  function put(id, kind, patch, opts = {}) {
    const it = items[id] || { id, kind, data: {}, deleted: false };
    it.data = { ...it.data, ...patch }; if ('deleted' in opts) it.deleted = opts.deleted;
    it.updatedAt = nowIso(); items[id] = it; dirty.add(id); persist(); queuePush(); if (!opts.quiet) emit(id); return it;
  }
  function remove(id) { const it = items[id]; if (!it || it.deleted) return; it.deleted = true; it.updatedAt = nowIso(); dirty.add(id); persist(); queuePush(); emit(id); }
  function restore(id) { const it = items[id]; if (!it) return; it.deleted = false; it.updatedAt = nowIso(); dirty.add(id); persist(); queuePush(); emit(id); }

  /* ───────── online copy (Supabase) ───────── */
  const client = () => ctx?.getCloud?.()?.client || null;
  let pushTimer = 0, pushing = false;
  function setStatus(s) { status = s; const el = root?.querySelector('.pl-status'); if (el) { el.dataset.s = s; el.textContent = STATUS[s] || ''; } }
  const STATUS = { local: 'Saved on this device', saving: 'Saving…', saved: 'Saved', offline: 'Offline · saved on this device', error: 'Not saved online yet · will try again', full: 'This device is full · sign in to save online' };
  function queuePush() { clearTimeout(pushTimer); if (!uid) { setStatus('local'); return; } setStatus('saving'); pushTimer = setTimeout(push, 1200); }
  async function push() {
    const c = client(); if (!c || !uid) { setStatus('local'); return; }
    if (!navigator.onLine) { setStatus('offline'); return; }
    if (pushing) { queuePush(); return; }
    const ids = [...dirty]; if (!ids.length) { setStatus('saved'); return; }
    pushing = true; dirty.clear();
    const rows = ids.map(id => items[id]).filter(Boolean).map(it => ({ id: it.id, kind: it.kind, data: it.data, deleted: !!it.deleted, updated_at: it.updatedAt }));
    const { error } = await c.from('planner_items').upsert(rows, { onConflict: 'user_id,id' });
    pushing = false;
    if (error) { ids.forEach(id => dirty.add(id)); persistNow(); setStatus(navigator.onLine ? 'error' : 'offline'); console.warn('planner', error.message); setTimeout(() => dirty.size && queuePush(), 20000); return; }
    persistNow(); setStatus(dirty.size ? 'saving' : 'saved'); if (dirty.size) queuePush();
  }
  async function pull() {
    const c = client(); if (!c || !uid || !navigator.onLine) return false;
    const { data, error } = await c.from('planner_items').select('id, kind, data, deleted, updated_at').limit(5000);
    if (error) { setStatus('error'); return false; }
    for (const r of data || []) {
      const local = items[r.id], remoteAt = new Date(r.updated_at).getTime();
      if (!local || remoteAt > new Date(local.updatedAt || 0).getTime()) { items[r.id] = { id: r.id, kind: r.kind, data: r.data || {}, deleted: !!r.deleted, updatedAt: new Date(remoteAt).toISOString() }; dirty.delete(r.id); }
      else if (remoteAt < new Date(local.updatedAt).getTime()) dirty.add(r.id);
    }
    persistNow(); emit('*'); if (dirty.size) queuePush(); else setStatus('saved');
    return true;
  }
  /* Signing in adopts what was written on this device; signing out removes the private copy from a shared computer. */
  let loaded = false;
  async function setUser(next) {
    if (loaded && (next || null) === uid) return;
    if (!loaded) { loaded = true; uid = next || null; const saved = loadLocal(uid); items = saved.items; dirty = new Set(saved.dirty || []);
      if (uid) { setStatus('saving'); await pull(); } else setStatus('local'); seedIfEmpty(); emit('*'); return; }
    if (uid && !next) { if (dirty.size) await push(); try { if (!dirty.size) localStorage.removeItem(KEY(uid)); } catch (e) { /* ignore */ } }
    const device = !uid && next ? loadLocal(null) : null;
    uid = next || null;
    const saved = loadLocal(uid); items = saved.items; dirty = new Set(saved.dirty || []);
    if (device && Object.keys(device.items).length) {
      for (const it of Object.values(device.items)) if (!items[it.id] || new Date(it.updatedAt) > new Date(items[it.id].updatedAt)) { items[it.id] = it; dirty.add(it.id); }
      try { localStorage.removeItem(KEY(null)); } catch (e) { /* ignore */ }
    }
    persistNow();
    if (uid) { setStatus('saving'); await pull(); } else setStatus('local');
    seedIfEmpty(); emit('*');
  }
  /* A first visit gets one calendar and a short "Start here" note, so nothing is empty. */
  function seedIfEmpty() {
    if (Object.keys(items).length) return;
    const cal = uuid(); put(cal, 'calendar', { name: 'Study', color: 'teal', sort: 0 }, { quiet: true });
    const note = uuid(), t1 = uuid(), t2 = uuid();
    put(t1, 'task', { title: 'Try ticking this to-do — it ticks on the calendar too', noteId: note, date: todayStr(), time: null, calendarId: cal, done: false, pos: 0 }, { quiet: true });
    put(t2, 'task', { title: 'Give this to-do a date with the small date button', noteId: note, date: null, time: null, calendarId: null, done: false, pos: 1 }, { quiet: true });
    const p = t => ({ type: 'paragraph', content: t ? [{ type: 'text', text: t }] : [] });
    const tk = (id, t) => ({ type: 'taskItem', attrs: { checked: false, taskId: id }, content: [p(t)] });
    put(note, 'note', { title: 'Start here', folderId: null, text: '', content: { type: 'doc', content: [
      { type: 'heading', attrs: { level: 2, textAlign: null }, content: [{ type: 'text', text: 'Your private planner' }] },
      { type: 'paragraph', content: [{ type: 'text', text: 'Only you can see this page. Use the toolbar like in Word: ' }, { type: 'text', marks: [{ type: 'bold' }], text: 'bold' }, { type: 'text', text: ', ' }, { type: 'text', marks: [{ type: 'highlight', attrs: { color: '#fff59d' } }], text: 'highlight' }, { type: 'text', text: ', headings, lists and to-dos.' }] },
      { type: 'taskList', content: [tk(t1, 'Try ticking this to-do — it ticks on the calendar too'), tk(t2, 'Give this to-do a date with the small date button')] },
    ] } }, { quiet: true });
    ui.openNoteId = note;
  }

  /* ───────── the editor (TipTap) ───────── */
  const ui = { tab: 'notes', openNoteId: null, month: null, calView: 'month', openFolders: {}, search: '', showTree: false };
  let saveTimer = 0, reconcileTimer = 0;
  function makeExtensions() {
    const T = window.Tiptap;
    const idKey = new T.PluginKey('dec15TaskIds');
    const idPlugin = new T.Plugin({ key: idKey, appendTransaction: (trs, _o, state) => {   // every to-do line gets its own id
      if (!trs.some(t => t.docChanged)) return null;
      const seen = new Set(); let tr = null;
      state.doc.descendants((node, pos) => {
        if (node.type.name !== 'taskItem') return;
        const id = node.attrs.taskId;
        if (!id || seen.has(id)) { tr = tr || state.tr; const nid = uuid(); tr.setNodeMarkup(pos, undefined, { ...node.attrs, taskId: nid }); seen.add(nid); }
        else seen.add(id);
      });
      return tr;
    } });
    const PlannerTask = T.TaskItem.extend({
      addAttributes() { return { ...this.parent?.(), taskId: { default: null, keepOnSplit: false, parseHTML: el => el.getAttribute('data-task-id'), renderHTML: a => a.taskId ? { 'data-task-id': a.taskId } : {} } }; },
      addProseMirrorPlugins() { return [...(this.parent?.() || []), idPlugin]; },
      addNodeView() {
        return ({ node, getPos }) => {
          const li = document.createElement('li'); li.dataset.type = 'taskItem'; li.className = 'pl-ti';
          const box = document.createElement('label'); box.contentEditable = 'false'; box.className = 'pl-ti-box';
          const cb = document.createElement('input'); cb.type = 'checkbox'; cb.setAttribute('aria-label', 'Done'); box.append(cb);
          const content = document.createElement('div'); content.className = 'pl-ti-text';
          const chip = document.createElement('button'); chip.type = 'button'; chip.contentEditable = 'false'; chip.className = 'pl-chip';
          li.append(box, content, chip);
          let cur = node;
          const paint = () => {
            const t = get(cur.attrs.taskId), done = t ? !!t.data.done : !!cur.attrs.checked;
            cb.checked = done; li.dataset.checked = String(done); li.dataset.taskId = cur.attrs.taskId || '';
            const cal = t?.data.calendarId && get(t.data.calendarId);
            if (t?.data.date) { chip.textContent = niceDate(t.data.date) + (t.data.time ? ' · ' + t.data.time : ''); chip.dataset.has = '1'; chip.classList.toggle('late', !done && t.data.date < todayStr()); }
            else { chip.textContent = '＋ Date'; chip.dataset.has = ''; chip.classList.remove('late'); }
            chip.style.setProperty('--c', cal ? COLORS[cal.data.color] : '');
            chip.setAttribute('aria-label', t?.data.date ? `Date: ${chip.textContent}. Change` : 'Add a date');
          };
          cb.addEventListener('change', () => { const id = cur.attrs.taskId; if (id && items[id]) put(id, 'task', { done: cb.checked, doneAt: cb.checked ? nowIso() : null }); else paint(); });
          chip.addEventListener('click', e => { e.preventDefault(); reconcileNow(); if (cur.attrs.taskId) taskPopover(cur.attrs.taskId, chip); });
          const off = subscribe(id => {
            if (id !== '*' && id !== cur.attrs.taskId) return;
            paint();
            const t = get(cur.attrs.taskId);   // keep the note's copy of "done" in step (for export), without an undo step
            if (t && !!t.data.done !== !!cur.attrs.checked && editor && typeof getPos === 'function') {
              const pos = getPos(); if (pos == null) return;
              editor.view.dispatch(editor.state.tr.setNodeMarkup(pos, undefined, { ...cur.attrs, checked: !!t.data.done }).setMeta('addToHistory', false));
            }
          });
          paint();
          return { dom: li, contentDOM: content,
            update: n => { if (n.type.name !== 'taskItem') return false; cur = n; paint(); return true; },
            stopEvent: e => box.contains(e.target) || chip.contains(e.target),
            ignoreMutation: m => !content.contains(m.target),
            destroy: off };
        };
      },
    });
    return [
      T.StarterKit.configure({ heading: { levels: [1, 2, 3] }, codeBlock: false, code: false, blockquote: false, horizontalRule: false }),
      T.Underline, T.TextStyle, T.Color, T.Highlight.configure({ multicolor: true }),
      T.TextAlign.configure({ types: ['heading', 'paragraph'] }),
      T.TaskList, PlannerTask.configure({ nested: true }),
      T.Placeholder.configure({ placeholder: 'Start writing… Use the ☑ button for a to-do.' }),
    ];
  }
  function openEditor(noteId) {
    destroyEditor();
    const note = get(noteId), el = root.querySelector('#pl-editor');
    if (!note || !el) return;
    editor = new window.Tiptap.Editor({
      element: el, extensions: makeExtensions(), content: note.data.content || '',
      editorProps: { attributes: { class: 'pl-doc', spellcheck: 'true', 'aria-label': 'Note text', role: 'textbox', 'aria-multiline': 'true' } },
      onUpdate: () => { clearTimeout(saveTimer); setStatus(uid ? 'saving' : 'local'); saveTimer = setTimeout(saveNote, 500); clearTimeout(reconcileTimer); reconcileTimer = setTimeout(reconcileNow, 600); },
      onSelectionUpdate: paintToolbar, onTransaction: paintToolbar,
    });
    editor.__noteId = noteId;
    reconcileNow(); paintToolbar();
  }
  function destroyEditor() { if (!editor) return; saveNote(); reconcileNow(); editor.destroy(); editor = null; }
  function saveNote() {
    clearTimeout(saveTimer); if (!editor) return;
    const id = editor.__noteId, n = get(id); if (!n) return;
    const content = editor.getJSON(), text = editor.getText({ blockSeparator: '\n' }).slice(0, 20000);
    if (JSON.stringify(content) === JSON.stringify(n.data.content)) return;
    put(id, 'note', { content, text }, { quiet: true }); paintTree(); paintNoteMeta();
  }
  /* Compare the to-do lines in the open note with the task items: new lines become tasks, removed lines leave the calendar. */
  function reconcileNow() {
    clearTimeout(reconcileTimer); if (!editor) return;
    const noteId = editor.__noteId, seen = new Set(), fixes = []; let pos = 0;
    editor.state.doc.descendants((n, p) => {
      if (n.type.name !== 'taskItem' || !n.attrs.taskId) return;
      let id = n.attrs.taskId; const title = (n.firstChild?.textContent || '').trim().slice(0, 300), t = items[id];
      const elsewhere = t && t.data.noteId && t.data.noteId !== noteId && get(t.data.noteId) && JSON.stringify(get(t.data.noteId).data.content || '').includes(id);
      if (elsewhere) { const nid = uuid(); fixes.push([p, n, nid]); put(nid, 'task', { ...t.data, title, noteId, done: false, doneAt: null, pos }, { deleted: false, quiet: true }); seen.add(nid); pos++; return; }
      seen.add(id);
      if (!t) put(id, 'task', { title, noteId, date: null, time: null, calendarId: null, done: !!n.attrs.checked, pos }, { deleted: false });
      else if (t.deleted || t.data.title !== title || t.data.noteId !== noteId || t.data.pos !== pos) put(id, 'task', { title, noteId, pos }, { deleted: false });
      pos++;
    });
    list('task').filter(t => t.data.noteId === noteId && !seen.has(t.id)).forEach(t => remove(t.id));
    if (fixes.length) { const tr = editor.state.tr; fixes.forEach(([p, n, nid]) => tr.setNodeMarkup(p, undefined, { ...n.attrs, taskId: nid, checked: false })); editor.view.dispatch(tr.setMeta('addToHistory', false)); }
  }

  /* ───────── toolbar (Word "Home" tab) ───────── */
  const FONT_COLORS = ['#14293a', '#3d505e', '#7a868e', '#b0512a', '#c0392b', '#985c0e', '#3f7a3a', '#2b776e', '#3a58a0', '#7a4a8c'];
  const HIGHLIGHTS = [['#fff59d', 'Yellow'], ['#c8f0c0', 'Green'], ['#b9f3f0', 'Turquoise'], ['#ffd0e6', 'Pink'], ['#cfe6ff', 'Blue'], ['#ffd9b0', 'Orange'], ['#e4d4f4', 'Violet'], ['#e3e3e3', 'Grey']];
  const ic = {
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>', redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',
    left: '<path d="M4 6h16M4 10h10M4 14h16M4 18h10"/>', center: '<path d="M4 6h16M7 10h10M4 14h16M7 18h10"/>', right: '<path d="M4 6h16M10 10h10M4 14h16M10 18h10"/>',
    bullets: '<circle cx="5" cy="7" r="1.2" fill="currentColor"/><circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="5" cy="17" r="1.2" fill="currentColor"/><path d="M9 7h11M9 12h11M9 17h11"/>',
    numbers: '<path d="M4 5h2v4M4 9h3M4 14.5c0-1 2.5-1.5 2.5 0S4 17 4 18.5h3"/><path d="M10 7h10M10 12h10M10 17h10"/>',
    tasks: '<rect x="3.5" y="4.5" width="6" height="6" rx="1.5"/><path d="m5 7.5 1.3 1.3L8.6 6.4"/><rect x="3.5" y="13.5" width="6" height="6" rx="1.5"/><path d="M13 7.5h7M13 16.5h7"/>',
    pen: '<path d="m14 4 6 6-9 9H5v-6z"/><path d="M4 21h16" stroke-width="3"/>',
  };
  const svg = (p, cls = '') => `<svg class="pl-i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  function toolbarHTML() {
    const b = (cmd, label, inner, extra = '') => `<button type="button" class="pl-tb" data-cmd="${cmd}" aria-label="${label}" title="${label}" aria-pressed="false"${extra}>${inner}</button>`;
    return `<div class="pl-toolbar" role="toolbar" aria-label="Formatting">
      <div class="pl-grp">${b('undo', 'Undo (Ctrl+Z)', svg(ic.undo))}${b('redo', 'Redo (Ctrl+Y)', svg(ic.redo))}</div>
      <div class="pl-grp"><label class="sr-only" for="pl-style">Style</label><select id="pl-style" class="pl-style" data-cmd="style" title="Style"><option value="p">Normal text</option><option value="1">Heading 1</option><option value="2">Heading 2</option><option value="3">Heading 3</option></select></div>
      <div class="pl-grp">${b('bold', 'Bold (Ctrl+B)', '<b>B</b>')}${b('italic', 'Italic (Ctrl+I)', '<i class="pl-it">I</i>')}${b('underline', 'Underline (Ctrl+U)', '<u>U</u>')}${b('strike', 'Strikethrough', '<s>S</s>')}</div>
      <div class="pl-grp">${b('color', 'Font colour', '<span class="pl-a">A</span><i class="pl-bar" data-bar="color"></i>', ' aria-haspopup="true"')}${b('highlight', 'Text highlight colour', svg(ic.pen) + '<i class="pl-bar" data-bar="highlight"></i>', ' aria-haspopup="true"')}</div>
      <div class="pl-grp pl-fold">${b('left', 'Align left', svg(ic.left))}${b('center', 'Centre', svg(ic.center))}${b('right', 'Align right', svg(ic.right))}</div>
      <div class="pl-grp">${b('bullets', 'Bulleted list', svg(ic.bullets))}${b('numbers', 'Numbered list', svg(ic.numbers))}${b('tasks', 'To-do list', svg(ic.tasks))}</div>
    </div>`;
  }
  let lastColor = '#b0512a', lastHl = '#fff59d';
  function runCmd(cmd, el) {
    if (!editor) return; const c = editor.chain().focus();
    ({ undo: () => c.undo().run(), redo: () => c.redo().run(), bold: () => c.toggleBold().run(), italic: () => c.toggleItalic().run(),
      underline: () => c.toggleUnderline().run(), strike: () => c.toggleStrike().run(),
      left: () => c.setTextAlign('left').run(), center: () => c.setTextAlign('center').run(), right: () => c.setTextAlign('right').run(),
      bullets: () => c.toggleBulletList().run(), numbers: () => c.toggleOrderedList().run(), tasks: () => c.toggleTaskList().run(),
      color: () => palette(el, 'color'), highlight: () => palette(el, 'highlight') })[cmd]?.();
  }
  function palette(anchor, kind) {
    const cols = kind === 'color' ? FONT_COLORS.map(c => [c, c]) : HIGHLIGHTS;
    popover(anchor, `<div class="pl-pal" role="menu" aria-label="${kind === 'color' ? 'Font colour' : 'Highlight colour'}">
      <b>${kind === 'color' ? 'Font colour' : 'Highlight'}</b>
      <div class="pl-sw ${kind}">${cols.map(([c, n]) => `<button type="button" role="menuitem" style="--sw:${c}" data-pick="${c}" title="${esc(n)}" aria-label="${esc(n)}"></button>`).join('')}</div>
      <button type="button" class="pl-link" data-pick="">${kind === 'color' ? 'Automatic' : 'No colour'}</button></div>`, pop => {
      pop.addEventListener('click', e => { const t = e.target.closest('[data-pick]'); if (!t) return; const v = t.dataset.pick;
        const c = editor.chain().focus();
        if (kind === 'color') { if (v) { lastColor = v; c.setColor(v).run(); } else c.unsetColor().run(); }
        else { if (v) { lastHl = v; c.setHighlight({ color: v }).run(); } else c.unsetHighlight().run(); }
        closePop(); paintToolbar(); });
    });
  }
  function paintToolbar() {
    const tb = root?.querySelector('.pl-toolbar'); if (!tb || !editor) return;
    const on = { bold: editor.isActive('bold'), italic: editor.isActive('italic'), underline: editor.isActive('underline'), strike: editor.isActive('strike'),
      left: editor.isActive({ textAlign: 'left' }), center: editor.isActive({ textAlign: 'center' }), right: editor.isActive({ textAlign: 'right' }),
      bullets: editor.isActive('bulletList'), numbers: editor.isActive('orderedList'), tasks: editor.isActive('taskList') };
    tb.querySelectorAll('button[data-cmd]').forEach(b => { if (b.dataset.cmd in on) { b.setAttribute('aria-pressed', String(on[b.dataset.cmd])); b.classList.toggle('on', on[b.dataset.cmd]); } });
    const st = tb.querySelector('#pl-style'); st.value = [1, 2, 3].find(l => editor.isActive('heading', { level: l })) || 'p';
    tb.querySelector('[data-bar=color]').style.background = editor.getAttributes('textStyle').color || lastColor;
    tb.querySelector('[data-bar=highlight]').style.background = editor.getAttributes('highlight').color || lastHl;
    tb.querySelector('[data-cmd=undo]').disabled = !editor.can().undo(); tb.querySelector('[data-cmd=redo]').disabled = !editor.can().redo();
  }

  /* ───────── popover (one at a time) ───────── */
  let pop = null;
  function closePop() { pop?.remove(); pop = null; }
  function popover(anchor, html, wire) {
    closePop(); pop = document.createElement('div'); pop.className = 'pl-pop'; pop.innerHTML = html; document.body.append(pop);
    const r = anchor.getBoundingClientRect(), w = pop.offsetWidth, h = pop.offsetHeight;
    let x = Math.min(Math.max(8, r.left), innerWidth - w - 8), y = r.bottom + 6; if (y + h > innerHeight - 8) y = Math.max(8, r.top - h - 6);
    pop.style.left = x + 'px'; pop.style.top = y + 'px';
    wire?.(pop); setTimeout(() => (pop?.querySelector('[autofocus]') || pop?.querySelector('input,button,select'))?.focus(), 0);
  }
  document.addEventListener('mousedown', e => { if (pop && !pop.contains(e.target) && !e.target.closest('[data-cmd=color],[data-cmd=highlight],.pl-chip,[data-task-open]')) closePop(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && pop) { closePop(); e.stopPropagation(); } }, true);

  /* A to-do's details: date, time, calendar (and words, for to-dos that are not in a note). */
  function taskPopover(id, anchor, fresh = false) {
    const t = items[id]; if (!t) return;
    const inNote = !!t.data.noteId && get(t.data.noteId), cals = list('calendar').sort((a, b) => (a.data.sort || 0) - (b.data.sort || 0));
    popover(anchor, `<form class="pl-task-pop" novalidate>
      <b>${fresh ? 'New to-do' : 'To-do'}</b>
      ${inNote ? `<p class="pl-from">${esc(t.data.title || 'To-do')}<small>in <button type="button" class="pl-link" data-open-note="${esc(t.data.noteId)}">${esc(get(t.data.noteId).data.title || 'Untitled')}</button></small></p>`
        : `<label>To-do<input name="title" maxlength="300" value="${esc(t.data.title || '')}" placeholder="What do you need to do?" ${fresh ? 'autofocus' : ''}></label>`}
      <div class="pl-row2"><label>Date<input type="date" name="date" value="${esc(t.data.date || '')}" ${!fresh && inNote ? 'autofocus' : ''}></label><label>Time <small>(optional)</small><input type="time" name="time" value="${esc(t.data.time || '')}"></label></div>
      <label>Calendar<select name="cal"><option value="">No calendar</option>${cals.map(c => `<option value="${c.id}"${c.id === t.data.calendarId ? ' selected' : ''}>${esc(c.data.name)}</option>`).join('')}</select></label>
      <div class="pl-pop-actions">${!inNote ? `<button type="button" class="pl-link danger" data-del-task>Delete</button>` : (t.data.date ? '<button type="button" class="pl-link" data-clear-date>Remove date</button>' : '<span></span>')}<button class="pl-btn" type="submit">${fresh ? 'Add' : 'Done'}</button></div>
    </form>`, p => {
      const f = p.querySelector('form');
      const apply = final => { const fd = new FormData(f), patch = { date: fd.get('date') || null, time: fd.get('time') || null, calendarId: fd.get('cal') || null };
        if (!inNote) patch.title = String(fd.get('title') || '').trim();
        if (!inNote && !patch.title) { if (final && fresh) remove(id); else if (!final) put(id, 'task', patch, { quiet: true }); return; }
        put(id, 'task', patch); };
      f.addEventListener('submit', e => { e.preventDefault(); const fd = new FormData(f);
        if (!inNote && !String(fd.get('title') || '').trim()) { f.querySelector('[name=title]').focus(); return; }
        apply(true); closePop(); });
      f.addEventListener('change', e => { if (e.target.name !== 'title') apply(false); });
      p.querySelector('[data-del-task]')?.addEventListener('click', () => { remove(id); closePop(); ctx.toast('To-do deleted.'); });
      p.querySelector('[data-clear-date]')?.addEventListener('click', () => { put(id, 'task', { date: null, time: null }); closePop(); });
      p.querySelector('[data-open-note]')?.addEventListener('click', e => { closePop(); openNote(e.target.dataset.openNote, id); });
      if (fresh) pop.dataset.fresh = id;
    });
  }
  function newTask(date, anchor) { const id = uuid(); put(id, 'task', { title: '', noteId: null, date: date || null, time: null, calendarId: list('calendar')[0]?.id || null, done: false, pos: 0 }, { quiet: true }); taskPopover(id, anchor, true); }
  // a new to-do closed without words is not kept
  new MutationObserver(() => { document.querySelectorAll('.pl-pop').length || Object.values(items).forEach(it => { if (it.kind === 'task' && !it.deleted && !it.data.noteId && !(it.data.title || '').trim()) remove(it.id); }); }).observe(document.body, { childList: true });

  /* ───────── page ───────── */
  function mount(el, context) {
    ctx = context; root = el; mounted = true; root.className = "";
    root.innerHTML = `<div class="pl" data-tab="${ui.tab}">
      <header class="pl-head">
        <div class="pl-title"><h1>My planner</h1><span class="pl-private">${ctx.icon('lock')}Only you can see this</span></div>
        <div class="pl-tabs" role="tablist" aria-label="Planner">
          ${['notes', 'calendar', 'todos'].map(t => `<button type="button" role="tab" id="pl-tab-${t}" aria-controls="pl-panel" data-tab="${t}" aria-selected="${ui.tab === t}">${{ notes: 'Notes', calendar: 'Calendar', todos: 'To-dos' }[t]}</button>`).join('')}
        </div>
        <span class="pl-status" data-s="${status}" role="status">${STATUS[status]}</span>
      </header>
      <div id="pl-panel" class="pl-panel" role="tabpanel"></div></div>`;
    root.addEventListener('click', onClick); root.addEventListener('input', onInput); root.addEventListener('change', onChange);
    root.addEventListener('dragstart', onDragStart); root.addEventListener('dragover', onDragOver); root.addEventListener('drop', onDrop); root.addEventListener('dragend', () => root.querySelectorAll('.pl-over').forEach(x => x.classList.remove('pl-over')));
    offStore = subscribe(onStore);
    setUser(ctx.getCloud?.()?.user?.id || null).then(() => { if (!ui.openNoteId || !get(ui.openNoteId)) ui.openNoteId = firstNote(); paint(); });
    paint();
  }
  let offStore = null;
  function unmount() { if (!mounted) return; destroyEditor(); persistNow(); push(); closePop(); offStore?.(); mounted = false; root = null; }
  function onStore(id) {
    if (!mounted) return;
    const it = id !== '*' && items[id];
    if (ui.tab === 'notes') { if (!it || it.kind !== 'note' || id !== editor?.__noteId) { paintTree(); paintRail(); } if (id === '*' && editor && !get(editor.__noteId)) paint(); }
    else paintPanel();
  }
  const firstNote = () => list('note').sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''))[0]?.id || null;
  function paint() {
    if (!root) return;
    root.querySelector('.pl').dataset.tab = ui.tab;
    root.querySelectorAll('[data-tab][role=tab]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.tab === ui.tab)));
    root.querySelector('#pl-panel').setAttribute('aria-labelledby', 'pl-tab-' + ui.tab);
    if (ui.tab === 'notes') paintNotes(); else { destroyEditor(); paintPanel(); }
  }
  function paintPanel() { const p = root?.querySelector('#pl-panel'); if (!p) return; if (ui.tab === 'calendar') p.innerHTML = calendarHTML(); else if (ui.tab === 'todos') p.innerHTML = todosHTML(); }

  /* ───────── notes view ───────── */
  function paintNotes() {
    const p = root.querySelector('#pl-panel');
    if (!ui.openNoteId || !get(ui.openNoteId)) ui.openNoteId = firstNote();
    p.innerHTML = `<div class="pl-notes${ui.showTree ? ' tree-open' : ''}">
      <aside class="pl-tree" aria-label="Your notes"></aside>
      <section class="pl-main">${ui.openNoteId ? `<div class="pl-note-head"><button type="button" class="pl-tree-toggle" data-tree-toggle aria-label="Show my notes">☰ Notes</button>
          <input class="pl-note-title" id="pl-note-title" aria-label="Note title" maxlength="120" value="${esc(get(ui.openNoteId).data.title || '')}" placeholder="Untitled">
          <div class="pl-note-meta"></div></div>
        ${toolbarHTML()}<div class="pl-page"><div id="pl-editor"></div></div>`
        : `<div class="pl-empty"><button type="button" class="pl-tree-toggle" data-tree-toggle>☰ Notes</button><p>No notes yet.</p><button type="button" class="pl-btn" data-new-note>＋ New note</button></div>`}</section>
      <aside class="pl-rail" aria-label="Coming up"></aside></div>`;
    paintTree(); paintRail(); paintNoteMeta();
    if (ui.openNoteId) openEditor(ui.openNoteId);
  }
  function paintNoteMeta() {
    const m = root?.querySelector('.pl-note-meta'), n = get(ui.openNoteId); if (!m || !n) return;
    const folders = list('folder').sort((a, b) => a.data.name.localeCompare(b.data.name));
    const t = new Date(n.updatedAt || Date.now());
    m.innerHTML = `<label class="pl-mini-sel"><span class="sr-only">Folder</span><select data-move-note aria-label="Folder"><option value="">No folder</option>${folders.map(f => `<option value="${f.id}"${f.id === n.data.folderId ? ' selected' : ''}>${esc(f.data.name)}</option>`).join('')}</select></label>
      <span>Edited ${t.toLocaleString('en-AU', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })}</span>
      <button type="button" class="pl-link danger" data-del-note>Delete note</button>`;
  }
  function paintTree() {
    const tree = root?.querySelector('.pl-tree'); if (!tree) return;
    const q = ui.search.trim().toLowerCase(), notes = list('note').filter(n => !q || (n.data.title + ' ' + (n.data.text || '')).toLowerCase().includes(q))
      .sort((a, b) => (a.data.title || 'Untitled').localeCompare(b.data.title || 'Untitled'));
    const folders = list('folder').sort((a, b) => a.data.name.localeCompare(b.data.name));
    const row = n => `<button type="button" class="pl-nrow${n.id === ui.openNoteId ? ' on' : ''}" data-open-note="${n.id}" draggable="true" data-drag-note="${n.id}"${n.id === ui.openNoteId ? ' aria-current="true"' : ''}><span>${esc(n.data.title || 'Untitled')}</span>${countOpen(n.id) ? `<small title="Open to-dos">${countOpen(n.id)}</small>` : ''}</button>`;
    tree.innerHTML = `<div class="pl-tree-top"><input type="search" id="pl-search" placeholder="Search notes" aria-label="Search notes" value="${esc(ui.search)}">
      <div class="pl-tree-btns"><button type="button" class="pl-btn" data-new-note>＋ Note</button><button type="button" class="pl-btn ghost" data-new-folder>＋ Folder</button></div></div>
      <div class="pl-tree-list">${folders.map(f => { const fn = notes.filter(n => n.data.folderId === f.id), open = q || ui.openFolders[f.id] !== false;
        return `<div class="pl-folder" data-drop-folder="${f.id}"><div class="pl-frow"><button type="button" class="pl-fbtn" data-toggle-folder="${f.id}" aria-expanded="${open}"><span class="pl-car">${open ? '▾' : '▸'}</span><span class="pl-fname">${esc(f.data.name)}</span><small>${fn.length}</small></button><button type="button" class="pl-more" data-folder-menu="${f.id}" aria-label="Folder options for ${esc(f.data.name)}">⋯</button></div>
          ${open ? `<div class="pl-fnotes">${fn.map(row).join('') || '<p class="pl-hint">Drag a note here</p>'}</div>` : ''}</div>`; }).join('')}
        <div class="pl-loose" data-drop-folder="">${notes.filter(n => !n.data.folderId || !get(n.data.folderId)).map(row).join('')}</div>
        ${q && !notes.length ? `<p class="pl-hint">No note matches “${esc(ui.search)}”.</p>` : ''}</div>`;
  }
  const countOpen = noteId => list('task').filter(t => t.data.noteId === noteId && !t.data.done).length;
  function paintRail() {
    const rail = root?.querySelector('.pl-rail'); if (!rail) return;
    const t = todayStr(), open = list('task').filter(x => !x.data.done && (x.data.title || '').trim());
    const dated = open.filter(x => x.data.date).sort((a, b) => (a.data.date + (a.data.time || '')).localeCompare(b.data.date + (b.data.time || ''))).slice(0, 7);
    const m = ui.month || t.slice(0, 7);
    rail.innerHTML = `<h2 class="pl-h">${MONTHS[+m.slice(5) - 1]} ${m.slice(0, 4)}</h2>${miniMonth(m, true)}
      <h2 class="pl-h">Coming up</h2>
      <div class="pl-up">${dated.map(x => `<div class="pl-uprow${x.data.date < t ? ' late' : ''}">${checkbox(x)}<button type="button" class="pl-uptitle" data-task-open="${x.id}" title="${esc(x.data.title)}">${esc(x.data.title)}</button><small>${esc(niceDate(x.data.date))}</small></div>`).join('') || '<p class="pl-hint">No dated to-dos. Add a date to a to-do and it appears here and on the calendar.</p>'}</div>
      ${open.filter(x => !x.data.date).length ? `<button type="button" class="pl-link" data-tab="todos">${open.filter(x => !x.data.date).length} to-dos without a date ›</button>` : ''}`;
  }
  const checkbox = t => `<input type="checkbox" class="pl-cb" data-toggle-task="${t.id}"${t.data.done ? ' checked' : ''} aria-label="Done: ${esc(t.data.title || 'to-do')}" style="--c:${calColor(t)}">`;
  const calColor = t => { const c = t.data.calendarId && get(t.data.calendarId); return c ? COLORS[c.data.color] : 'var(--pl-muted)'; };
  function openNote(id, focusTask) {
    ui.tab = 'notes'; ui.openNoteId = id; ui.showTree = false; paint();
    if (focusTask && editor) setTimeout(() => { const el = root.querySelector(`.pl-ti[data-task-id="${CSS.escape(focusTask)}"]`);
      if (el) { el.scrollIntoView({ block: 'center' }); el.classList.add('pl-flash'); setTimeout(() => el.classList.remove('pl-flash'), 1600); } }, 80);
  }

  /* ───────── calendar view ───────── */
  const tasksOn = day => list('task').filter(t => t.data.date === day && (t.data.title || '').trim() && !hiddenCal(t))
    .sort((a, b) => (a.data.done - b.data.done) || (a.data.time || '99').localeCompare(b.data.time || '99'));
  const hidden = (() => { try { return JSON.parse(localStorage.getItem('dec15-planner-hidden') || '{}'); } catch (e) { return {}; } })();
  const hiddenCal = t => hidden[t.data.calendarId || 'none'];
  function calendarHTML() {
    const t = todayStr(), m = ui.month || t.slice(0, 7), y = +m.slice(0, 4), mo = +m.slice(5) - 1;
    const cals = list('calendar').sort((a, b) => (a.data.sort || 0) - (b.data.sort || 0));
    const side = `<aside class="pl-calside" aria-label="Calendars">${miniMonth(m, false)}
      <h2 class="pl-h">My calendars</h2>
      <div class="pl-cals">${cals.map(c => `<div class="pl-calrow"><label><input type="checkbox" data-cal-show="${c.id}"${hidden[c.id] ? '' : ' checked'} style="--c:${COLORS[c.data.color]}"><span class="sr-only">Show </span></label>
          <input class="pl-calname" data-cal-name="${c.id}" value="${esc(c.data.name)}" maxlength="40" aria-label="Calendar name">
          <button type="button" class="pl-swatch" data-cal-color="${c.id}" style="--c:${COLORS[c.data.color]}" aria-label="Change colour of ${esc(c.data.name)}"></button>
          <button type="button" class="pl-more" data-cal-del="${c.id}" aria-label="Delete calendar ${esc(c.data.name)}">×</button></div>`).join('')}
        <div class="pl-calrow none"><label><input type="checkbox" data-cal-show="none"${hidden.none ? '' : ' checked'} style="--c:var(--pl-muted)"><span class="sr-only">Show </span></label><span>No calendar</span></div></div>
      ${cals.length < MAX_CAL ? `<button type="button" class="pl-btn ghost" data-new-cal>＋ New calendar <small>${cals.length} of ${MAX_CAL}</small></button>` : `<p class="pl-limit">${MAX_CAL} of ${MAX_CAL} calendars. Rename or delete one to make a different one.</p>`}</aside>`;
    let body;
    if (ui.calView === 'year') body = `<div class="pl-year">${MONTHS.map((n, i) => `<button type="button" class="pl-ym" data-goto-month="${y}-${pad(i + 1)}"><b>${n}</b>${miniMonth(`${y}-${pad(i + 1)}`, false, true)}</button>`).join('')}</div>`;
    else {
      const first = new Date(y, mo, 1), start = new Date(first); start.setDate(1 - ((first.getDay() + 6) % 7));
      const cells = []; for (let i = 0; i < 42; i++) { const d = new Date(start); d.setDate(start.getDate() + i); cells.push(d); }
      body = `<div class="pl-dows" aria-hidden="true">${DOW.map(d => `<span>${d}</span>`).join('')}</div>
        <div class="pl-grid">${cells.map(d => { const s = ymd(d), ts = tasksOn(s), out = d.getMonth() !== mo, wk = d.getDay() === 0 || d.getDay() === 6;
          return `<div class="pl-cell${out ? ' out' : ''}${wk ? ' wk' : ''}${s === t ? ' today' : ''}" role="group" data-day="${s}" data-drop-day="${s}" aria-label="${d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })}${ts.length ? `, ${ts.length} to-do${ts.length > 1 ? 's' : ''}` : ''}">
            <button type="button" class="pl-daynum" data-add-on="${s}" aria-label="Add a to-do on ${d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long' })}">${d.getDate()}</button>
            ${ts.slice(0, 3).map(x => `<div class="pl-ev${x.data.done ? ' done' : ''}" draggable="true" data-drag-task="${x.id}" style="--c:${calColor(x)}">${checkbox(x)}<button type="button" data-task-open="${x.id}" title="${esc(x.data.title)}">${x.data.time ? `<b>${esc(x.data.time)}</b> ` : ''}${esc(x.data.title)}</button></div>`).join('')}
            ${ts.length > 3 ? `<button type="button" class="pl-more-ev" data-day-list="${s}">+${ts.length - 3} more</button>` : ''}</div>`; }).join('')}</div>`;
    }
    return `<div class="pl-cal">${side}<section class="pl-calmain">
      <div class="pl-calhead"><h2>${ui.calView === 'year' ? y : `${MONTHS[mo]} <span>${y}</span>`}</h2>
        <div class="pl-calnav"><button type="button" class="pl-btn ghost" data-cal-step="-1" aria-label="Previous ${ui.calView}">‹</button><button type="button" class="pl-btn ghost" data-cal-today>Today</button><button type="button" class="pl-btn ghost" data-cal-step="1" aria-label="Next ${ui.calView}">›</button>
          <div class="pl-seg" role="group" aria-label="View"><button type="button" data-cal-view="month" aria-pressed="${ui.calView === 'month'}">Month</button><button type="button" data-cal-view="year" aria-pressed="${ui.calView === 'year'}">Year</button></div>
          <button type="button" class="pl-btn" data-new-task>＋ To-do</button></div></div>${body}</section></div>`;
  }
  function miniMonth(m, linked, tiny) {
    const y = +m.slice(0, 4), mo = +m.slice(5) - 1, first = new Date(y, mo, 1), off = (first.getDay() + 6) % 7, days = new Date(y, mo + 1, 0).getDate(), t = todayStr();
    const has = new Set(list('task').filter(x => x.data.date && !x.data.done && x.data.date.startsWith(m)).map(x => x.data.date));
    let h = `<div class="pl-minim${tiny ? ' tiny' : ''}">${tiny ? '' : DOW.map(d => `<b aria-hidden="true">${d[0]}</b>`).join('')}${'<span></span>'.repeat(off)}`;
    for (let d = 1; d <= days; d++) { const s = `${m}-${pad(d)}`, cls = `${s === t ? 'today' : ''}${has.has(s) ? ' has' : ''}`;
      h += linked ? `<button type="button" class="${cls}" data-goto-day="${s}" aria-label="${d} ${MONTHS[mo]}">${d}</button>` : `<span class="${cls}">${d}</span>`; }
    return h + '</div>';
  }

  /* ───────── to-dos view ───────── */
  function todosHTML() {
    const t = todayStr(), all = list('task').filter(x => (x.data.title || '').trim());
    const open = all.filter(x => !x.data.done), by = (a, b) => ((a.data.date || '') + (a.data.time || '')).localeCompare((b.data.date || '') + (b.data.time || ''));
    const groups = [['Late', open.filter(x => x.data.date && x.data.date < t).sort(by), 'late'], ['Today', open.filter(x => x.data.date === t).sort(by)], ['Next 7 days', open.filter(x => x.data.date > t && x.data.date <= addDays(t, 7)).sort(by)],
      ['Later', open.filter(x => x.data.date > addDays(t, 7)).sort(by)], ['No date', open.filter(x => !x.data.date)], ['Done', all.filter(x => x.data.done).sort((a, b) => (b.data.doneAt || '').localeCompare(a.data.doneAt || '')).slice(0, 30), 'done']];
    const cals = list('calendar');
    return `<div class="pl-todos"><form class="pl-add" data-add-form><label class="sr-only" for="pl-add-title">New to-do</label><input id="pl-add-title" name="title" maxlength="300" placeholder="Add a to-do…" autocomplete="off">
        <label class="sr-only" for="pl-add-date">Date</label><input type="date" id="pl-add-date" name="date">
        <label class="sr-only" for="pl-add-cal">Calendar</label><select id="pl-add-cal" name="cal"><option value="">No calendar</option>${cals.map(c => `<option value="${c.id}">${esc(c.data.name)}</option>`).join('')}</select>
        <button class="pl-btn" type="submit">Add</button></form>
      ${groups.filter(g => g[1].length).map(([name, ts, cls]) => `<section class="pl-tgroup ${cls || ''}"><h2 class="pl-h">${name} <small>${ts.length}</small></h2>
        ${ts.map(x => { const note = x.data.noteId && get(x.data.noteId); return `<div class="pl-trow${x.data.done ? ' done' : ''}">${checkbox(x)}
          <button type="button" class="pl-ttitle" data-task-open="${x.id}">${esc(x.data.title)}</button>
          ${note ? `<button type="button" class="pl-tnote" data-open-note="${note.id}" data-focus-task="${x.id}">${esc(note.data.title || 'Untitled')}</button>` : ''}
          <button type="button" class="pl-tdate${x.data.date && x.data.date < t && !x.data.done ? ' late' : ''}" data-task-open="${x.id}" style="--c:${calColor(x)}">${x.data.date ? esc(niceDate(x.data.date)) + (x.data.time ? ' · ' + esc(x.data.time) : '') : '＋ Date'}</button></div>`; }).join('')}</section>`).join('')
      || '<div class="pl-empty"><p>No to-dos yet. Add one above, or make a to-do list in a note.</p></div>'}</div>`;
  }

  /* ───────── events ───────── */
  function onClick(e) {
    const t = e.target.closest('button, [data-tab]'); if (!t || t.disabled) return; const d = t.dataset;
    if (d.tab && t.getAttribute('role') === 'tab' || (d.tab && t.classList.contains('pl-link'))) { ui.tab = d.tab; closePop(); paint(); return; }
    if (d.cmd) { runCmd(d.cmd, t); return; }
    if (d.treeToggle !== undefined) { ui.showTree = !ui.showTree; root.querySelector('.pl-notes')?.classList.toggle('tree-open', ui.showTree); return; }
    if (d.openNote) { openNote(d.openNote, d.focusTask); return; }
    if (d.newNote !== undefined) { saveNote(); const id = uuid(), folder = get(ui.openNoteId)?.data.folderId || null; put(id, 'note', { title: '', folderId: folder, content: { type: 'doc', content: [{ type: 'paragraph' }] }, text: '' }); ui.openNoteId = id; ui.search = ''; ui.showTree = false; paint(); root.querySelector('#pl-note-title')?.focus(); return; }
    if (d.newFolder !== undefined) { const id = uuid(); put(id, 'folder', { name: 'New folder' }); ui.openFolders[id] = true; paintTree(); renameFolder(id); return; }
    if (d.toggleFolder) { ui.openFolders[d.toggleFolder] = ui.openFolders[d.toggleFolder] === false; paintTree(); return; }
    if (d.folderMenu) { const f = get(d.folderMenu); popover(t, `<div class="pl-menu" role="menu"><button type="button" role="menuitem" data-m="rename">Rename</button><button type="button" role="menuitem" class="danger" data-m="delete">Delete folder</button><small>Notes in it are kept.</small></div>`, p => p.addEventListener('click', ev => {
      const m = ev.target.closest('[data-m]')?.dataset.m; if (!m) return; closePop();
      if (m === 'rename') renameFolder(f.id);
      if (m === 'delete') { list('note').filter(n => n.data.folderId === f.id).forEach(n => put(n.id, 'note', { folderId: null }, { quiet: true })); remove(f.id); ctx.toast(`Folder “${f.data.name}” deleted. Its notes are in your notes list.`); } })); return; }
    if (d.delNote !== undefined) { const id = ui.openNoteId, n = get(id); if (!n) return;
      popover(t, `<div class="pl-menu"><p>Delete “${esc(n.data.title || 'Untitled')}”? Its to-dos leave the calendar too.</p><button type="button" class="pl-btn danger" data-m="yes">Delete note</button></div>`, p => p.querySelector('[data-m]').addEventListener('click', () => {
        closePop(); destroyEditor(); const tasks = list('task').filter(x => x.data.noteId === id); tasks.forEach(x => remove(x.id)); remove(id); ui.openNoteId = firstNote(); paint();
        undoToast('Note deleted.', () => { restore(id); tasks.forEach(x => restore(x.id)); ui.openNoteId = id; paint(); }); })); return; }
    if (d.taskOpen) { taskPopover(d.taskOpen, t); return; }
    if (d.gotoDay) { ui.month = d.gotoDay.slice(0, 7); ui.calView = 'month'; ui.tab = 'calendar'; paint(); return; }
    if (d.gotoMonth) { ui.month = d.gotoMonth; ui.calView = 'month'; paintPanel(); return; }
    if (d.calStep) { const m = ui.month || todayStr().slice(0, 7), dt = new Date(+m.slice(0, 4), +m.slice(5) - 1, 1);
      if (ui.calView === 'year') dt.setFullYear(dt.getFullYear() + +d.calStep); else dt.setMonth(dt.getMonth() + +d.calStep);
      ui.month = `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}`; paintPanel(); return; }
    if (d.calToday !== undefined) { ui.month = todayStr().slice(0, 7); paintPanel(); return; }
    if (d.calView) { ui.calView = d.calView; paintPanel(); return; }
    if (d.newTask !== undefined) { newTask(todayStr(), t); return; }
    if (d.addOn) { newTask(d.addOn, t); return; }
    if (d.dayList) { const ts = tasksOn(d.dayList); popover(t, `<div class="pl-menu daylist"><b>${esc(niceDate(d.dayList))}</b>${ts.map(x => `<div class="pl-ev${x.data.done ? ' done' : ''}" style="--c:${calColor(x)}">${checkbox(x)}<button type="button" data-task-open="${x.id}">${x.data.time ? `<b>${esc(x.data.time)}</b> ` : ''}${esc(x.data.title)}</button></div>`).join('')}</div>`, p => {
      p.addEventListener('click', ev => { const b = ev.target.closest('[data-task-open]'); if (b) taskPopover(b.dataset.taskOpen, b); });
      p.addEventListener('change', ev => { const c = ev.target.closest('[data-toggle-task]'); if (c) put(c.dataset.toggleTask, 'task', { done: c.checked, doneAt: c.checked ? nowIso() : null }); }); }); return; }
    if (d.newCal !== undefined) { const cals = list('calendar'); if (cals.length >= MAX_CAL) { ctx.toast(`You can have ${MAX_CAL} calendars.`); return; }
      const color = Object.keys(COLORS).find(c => !cals.some(x => x.data.color === c)) || 'teal', id = uuid();
      put(id, 'calendar', { name: ['Lectures', 'Exams', 'Personal'].find(n => !cals.some(x => x.data.name === n)) || 'Calendar', color, sort: cals.length });
      setTimeout(() => root.querySelector(`[data-cal-name="${id}"]`)?.select(), 30); return; }
    if (d.calColor) { const c = get(d.calColor); popover(t, `<div class="pl-pal"><b>Colour</b><div class="pl-sw color">${Object.entries(COLORS).map(([k, v]) => `<button type="button" data-pick="${k}" style="--sw:${v}" aria-label="${k}"${k === c.data.color ? ' aria-pressed="true"' : ''}></button>`).join('')}</div></div>`, p => p.addEventListener('click', ev => { const k = ev.target.closest('[data-pick]')?.dataset.pick; if (k) { put(c.id, 'calendar', { color: k }); closePop(); } })); return; }
    if (d.calDel) { const c = get(d.calDel); popover(t, `<div class="pl-menu"><p>Delete the calendar “${esc(c.data.name)}”? Its to-dos are kept, without a calendar.</p><button type="button" class="pl-btn danger" data-m="yes">Delete calendar</button></div>`, p => p.querySelector('[data-m]').addEventListener('click', () => {
      closePop(); list('task').filter(x => x.data.calendarId === c.id).forEach(x => put(x.id, 'task', { calendarId: null }, { quiet: true })); remove(c.id); })); return; }
  }
  function onInput(e) {
    const t = e.target;
    if (t.id === 'pl-note-title') { put(ui.openNoteId, 'note', { title: t.value.slice(0, 120) }, { quiet: true }); clearTimeout(onInput.tt); onInput.tt = setTimeout(paintTree, 300); }
    if (t.id === 'pl-search') { ui.search = t.value; paintTree(); const s = root.querySelector('#pl-search'); s.focus(); s.setSelectionRange(s.value.length, s.value.length); }
  }
  function onChange(e) {
    const t = e.target, d = t.dataset;
    if (d.toggleTask) { put(d.toggleTask, 'task', { done: t.checked, doneAt: t.checked ? nowIso() : null }); if (t.checked) ctx.toast('Done — nice work.'); return; }
    if (t.id === 'pl-style' && editor) { const v = t.value, c = editor.chain().focus(); v === 'p' ? c.setParagraph().run() : c.toggleHeading({ level: +v }).run(); return; }
    if (d.moveNote !== undefined) { put(ui.openNoteId, 'note', { folderId: t.value || null }); return; }
    if (d.calShow) { hidden[d.calShow] = !t.checked; try { localStorage.setItem('dec15-planner-hidden', JSON.stringify(hidden)); } catch (e2) { /* ignore */ } paintPanel(); return; }
    if (d.calName) { const v = t.value.trim().slice(0, 40); if (v) put(d.calName, 'calendar', { name: v }); else paintPanel(); return; }
  }
  document.addEventListener('submit', e => {
    const f = e.target.closest?.('[data-add-form]'); if (!f || !root?.contains(f)) return; e.preventDefault();
    const fd = new FormData(f), title = String(fd.get('title') || '').trim(); if (!title) { f.querySelector('input')?.focus(); return; }
    put(uuid(), 'task', { title, noteId: null, date: fd.get('date') || null, time: null, calendarId: fd.get('cal') || null, done: false, pos: 0 });
    setTimeout(() => root.querySelector('#pl-add-title')?.focus(), 0);
  });
  function renameFolder(id) {
    const btn = root.querySelector(`[data-toggle-folder="${id}"] .pl-fname`), f = get(id); if (!btn || !f) return;
    const inp = document.createElement('input'); inp.className = 'pl-rename'; inp.value = f.data.name; inp.maxLength = 60; inp.setAttribute('aria-label', 'Folder name');
    btn.closest('.pl-frow').replaceChildren(inp); inp.select();
    const done = () => { const v = inp.value.trim(); put(id, 'folder', { name: v || f.data.name }); paintTree(); };
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') inp.blur(); if (e.key === 'Escape') { inp.value = f.data.name; inp.blur(); } });
    inp.addEventListener('blur', done, { once: true });
  }
  function undoToast(msg, undo) {
    const el = document.createElement('div'); el.className = 'pl-undo'; el.setAttribute('role', 'status');
    el.innerHTML = `<span>${esc(msg)}</span><button type="button">Undo</button>`; document.body.append(el);
    const kill = setTimeout(() => el.remove(), 7000); el.querySelector('button').onclick = () => { clearTimeout(kill); el.remove(); undo(); };
  }
  /* drag a note onto a folder, or a to-do onto another day */
  let dragging = null;
  function onDragStart(e) { const n = e.target.closest('[data-drag-note],[data-drag-task]'); if (!n) return; dragging = n.dataset.dragNote ? ['note', n.dataset.dragNote] : ['task', n.dataset.dragTask]; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', dragging[1]); }
  function onDragOver(e) { if (!dragging) return; const z = e.target.closest(dragging[0] === 'note' ? '[data-drop-folder]' : '[data-drop-day]'); if (!z) return; e.preventDefault(); root.querySelectorAll('.pl-over').forEach(x => x !== z && x.classList.remove('pl-over')); z.classList.add('pl-over'); }
  function onDrop(e) { if (!dragging) return; const [kind, id] = dragging; dragging = null; root.querySelectorAll('.pl-over').forEach(x => x.classList.remove('pl-over'));
    if (kind === 'note') { const z = e.target.closest('[data-drop-folder]'); if (z) { e.preventDefault(); put(id, 'note', { folderId: z.dataset.dropFolder || null }); paintNoteMeta(); } }
    else { const z = e.target.closest('[data-drop-day]'); if (z) { e.preventDefault(); put(id, 'task', { date: z.dataset.dropDay }); } } }

  document.addEventListener('visibilitychange', () => { if (!mounted) return; if (document.visibilityState === 'hidden') { saveNote(); persistNow(); push(); } else if (uid) pull(); });
  addEventListener('online', () => mounted && uid && push());

  return {
    mount, unmount, get mounted() { return mounted; },
    onAuth: info => { if (mounted) setUser(info?.user?.id || null).then(() => { if (!get(ui.openNoteId)) ui.openNoteId = firstNote(); paint(); }); },
    _debug: { get items() { return items; }, put, reconcileNow, get editor() { return editor; } },
  };
})();
