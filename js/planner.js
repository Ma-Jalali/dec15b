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
  const toMin = s => { if (!s) return null; const [h, m] = s.split(':').map(Number); return h * 60 + (m || 0); };
  const fromMin = n => `${pad(Math.floor(n / 60))}:${pad(n % 60)}`;
  const timeRange = x => (x.data.time ? x.data.time + (x.data.end && toMin(x.data.end) > toMin(x.data.time) ? '–' + x.data.end : '') : '');
  const mondayOf = s => addDays(s, -((parseYmd(s).getDay() + 6) % 7));
  const isoWeek = s => { const d = parseYmd(s); d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7)); const w1 = new Date(d.getFullYear(), 0, 4); return 1 + Math.round(((d - w1) / 864e5 - 3 + ((w1.getDay() + 6) % 7)) / 7); };
  const longDay = s => parseYmd(s).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
  const hourLabel = h => (h === 0 ? '12 am' : h < 12 ? `${h} am` : h === 12 ? '12 pm' : `${h - 12} pm`);
  /* small line icons (16px) for group headings, stats and empty states */
  const G = p => `<svg class="pl-g" viewBox="0 0 16 16" aria-hidden="true">${p}</svg>`;
  const GI = {
    late: G('<path d="M4 14.2V2.4M4 2.8h7.6l-1.7 2.9 1.7 2.9H4"/>'),
    today: G('<circle cx="8" cy="8" r="2.9"/><path d="M8 1.6v1.6M8 12.8v1.6M1.6 8h1.6M12.8 8h1.6M3.5 3.5l1.1 1.1M11.4 11.4l1.1 1.1M3.5 12.5l1.1-1.1M11.4 4.6l1.1-1.1"/>'),
    week: G('<rect x="2" y="3" width="12" height="11" rx="2"/><path d="M2 6.5h12M5.2 1.8v2.4M10.8 1.8v2.4M5 9.3h1.4M7.3 9.3h1.4M9.6 9.3h1.4M5 11.6h1.4"/>'),
    get soon() { return this.week; },
    later: G('<circle cx="8" cy="8" r="6.2"/><path d="M8 4.6V8l2.4 1.6"/>'),
    nodate: G('<path d="M2 9.2 3.8 3.4c.2-.5.6-.8 1.1-.8h6.2c.5 0 .9.3 1.1.8L14 9.2v3.4c0 .5-.4.9-.9.9H2.9c-.5 0-.9-.4-.9-.9z"/><path d="M2 9.2h3.3l.9 1.7h3.6l.9-1.7H14"/>'),
    done: G('<circle cx="8" cy="8" r="6.2"/><path d="m5.3 8.2 1.8 1.8 3.6-3.8"/>'),
    words: G('<path d="M2.5 4h11M2.5 7.3h11M2.5 10.6h7"/>'),
    folder: G('<path d="M1.8 4.3c0-.8.6-1.4 1.4-1.4h3l1.6 1.6h5c.8 0 1.4.6 1.4 1.4v5.8c0 .8-.6 1.4-1.4 1.4H3.2c-.8 0-1.4-.6-1.4-1.4z"/>'),
    sep: '<svg class="pl-sep" viewBox="0 0 8 8" aria-hidden="true"><path d="M3 1.5 5.5 4 3 6.5"/></svg>',
    smile: G('<circle cx="8" cy="8" r="6.2"/><path d="M5.6 9.6c.6.9 1.4 1.3 2.4 1.3s1.8-.4 2.4-1.3"/><circle cx="6" cy="6.6" r=".6" fill="currentColor"/><circle cx="10" cy="6.6" r=".6" fill="currentColor"/>'),
    image: G('<rect x="1.8" y="2.8" width="12.4" height="10.4" rx="2"/><circle cx="5.6" cy="6.4" r="1.2"/><path d="m2.2 12 3.6-3.4 2.6 2.2 2.4-2.4 3.2 3"/>'),
    pin: G('<path d="M9.8 1.8 14.2 6.2l-2.1.7-2.6 2.6.3 3.2-1.2 1.2-2.6-2.6-3.3 3.3M6.7 11.3 4.1 8.7l1.2-1.2 3.2.3 2.6-2.6z"/>'),
    print: G('<path d="M4.4 6V2.4h7.2V6M4.4 11.6H2.8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10.4a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-1.6"/><rect x="4.4" y="9.4" width="7.2" height="4.2" rx=".6"/>'),
  };
  /* a small progress ring: done / total */
  const ring = (done, total, size = 18) => { const r = (size - 4) / 2, c = 2 * Math.PI * r, f = total ? done / total : 0;
    return `<svg class="pl-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}"/><circle class="v" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-dasharray="${(c * f).toFixed(2)} ${c.toFixed(2)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>`; };

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
  const ui = { tab: 'notes', openNoteId: null, month: null, calView: 'month', week: null, wkScroll: null, openFolders: {}, renaming: null, renameDraft: null, fresh: null, search: '', showTree: false };
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
            if (t?.data.date) { chip.textContent = niceDate(t.data.date) + (t.data.time ? ' · ' + timeRange(t) : ''); chip.dataset.has = '1'; chip.classList.toggle('late', !done && t.data.date < todayStr()); }
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
      T.StarterKit.configure({ heading: { levels: [1, 2, 3] } }), ...window.DEC15Blocks.extensions(T),
      T.Underline, T.TextStyle, T.Color, T.Highlight.configure({ multicolor: true }),
      T.TextAlign.configure({ types: ['heading', 'paragraph'] }),
      T.TaskList, PlannerTask.configure({ nested: true }),
      T.Placeholder.configure({ includeChildren: true, placeholder: ({ node, pos, editor: ed }) => {
        if (node.type.name === 'heading') return `Heading ${node.attrs.level}`;
        const up = pos > 0 ? ed.state.doc.resolve(pos).parent.type.name : '';
        return up === 'taskItem' ? 'To-do' : up === 'toggle' ? 'Toggle' : up === 'tableCell' || up === 'tableHeader' ? '' : 'Write, or type “/” for blocks'; } }),
    ];
  }
  function openEditor(noteId) {
    destroyEditor();
    const note = get(noteId), el = root.querySelector('#pl-editor');
    if (!note || !el) return;
    editor = new window.Tiptap.Editor({
      element: el, extensions: makeExtensions(), content: window.DEC15Blocks.withTrailingLine(note.data.content) || '',
      editorProps: { attributes: { class: 'pl-doc', spellcheck: 'true', 'aria-label': 'Note text', role: 'textbox', 'aria-multiline': 'true' },
        handleKeyDown: (v, e) => !!blocks?.keydown(v, e) || linkKey(e) },
      onUpdate: () => { clearTimeout(saveTimer); setStatus(uid ? 'saving' : 'local'); saveTimer = setTimeout(saveNote, 500); clearTimeout(reconcileTimer); reconcileTimer = setTimeout(reconcileNow, 600); },
      onSelectionUpdate: paintToolbar, onTransaction: paintToolbar,
    });
    editor.__noteId = noteId;
    blocks = window.DEC15Blocks.attach(editor, root.querySelector('.pl-page'), { esc, popover, closePop });
    reconcileNow(); paintToolbar();
  }
  let blocks = null;
  function destroyEditor() { if (!editor) return; saveNote(); reconcileNow(); blocks?.destroy(); blocks = null; editor.destroy(); editor = null; }
  const linkKey = e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); linkPop(root.querySelector('[data-cmd=link]')); return true; } return false; };
  function linkPop(anchor) {
    if (!editor || !anchor) return; const had = editor.getAttributes('link').href || '';
    popover(anchor, `<form class="pl-task-pop pl-linkpop" novalidate><b>${had ? 'Edit link' : 'Add a link'}</b><label>Web address<input name="href" type="url" inputmode="url" value="${esc(had)}" placeholder="https://…" autofocus></label>
      <div class="pl-pop-actions">${had ? '<button type="button" class="pl-link danger" data-unlink>Remove link</button>' : '<span></span>'}<button class="pl-btn" type="submit">${had ? 'Save' : 'Add link'}</button></div></form>`, p => {
      const f = p.querySelector('form');
      f.addEventListener('submit', e => { e.preventDefault(); let v = String(new FormData(f).get('href') || '').trim(); closePop();
        if (!v) { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
        if (!/^(https?:|mailto:)/i.test(v)) v = 'https://' + v.replace(/^\/+/, '');
        if (editor.state.selection.empty && !had) editor.chain().focus().insertContent({ type: 'text', text: v, marks: [{ type: 'link', attrs: { href: v } }] }).run();
        else editor.chain().focus().extendMarkRange('link').setLink({ href: v }).run(); });
      p.querySelector('[data-unlink]')?.addEventListener('click', () => { closePop(); editor.chain().focus().extendMarkRange('link').unsetLink().run(); });
    });
  }
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
    plus: '<path d="M12 5v14M5 12h14"/>', quote: '<path d="M5 5v14"/><path d="M9.5 8h9.5M9.5 12h9.5M9.5 16h6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2"/>',
    rowAdd: '<rect x="3" y="4" width="18" height="10" rx="2"/><path d="M3 9h18M12 17v4M10 19h4"/>', colAdd: '<rect x="3" y="3" width="10" height="18" rx="2"/><path d="M8 3v18M17 12h4M19 10v4"/>',
    rowDel: '<rect x="3" y="4" width="18" height="10" rx="2"/><path d="M3 9h18M9.5 18.5l5 0"/>', colDel: '<rect x="3" y="3" width="10" height="18" rx="2"/><path d="M8 3v18M17 12h4"/>',
    tableDel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 4v16M14.5 12.5l4 4M18.5 12.5l-4 4"/>',
  };
  const svg = (p, cls = '') => `<svg class="pl-i ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  function toolbarHTML() {
    const b = (cmd, label, inner, extra = '') => `<button type="button" class="pl-tb" data-cmd="${cmd}" aria-label="${label}" title="${label}" aria-pressed="false"${extra}>${inner}</button>`;
    return `<div class="pl-toolbar" role="toolbar" aria-label="Formatting">
      <div class="pl-grp"><button type="button" class="pl-tb pl-insert" data-cmd="insert" title="Insert a block (or type /)" aria-label="Insert a block">${svg(ic.plus)}<span>Insert</span></button></div>
      <div class="pl-grp">${b('undo', 'Undo (Ctrl+Z)', svg(ic.undo))}${b('redo', 'Redo (Ctrl+Y)', svg(ic.redo))}</div>
      <div class="pl-grp"><label class="sr-only" for="pl-style">Style</label><select id="pl-style" class="pl-style" data-cmd="style" title="Style"><option value="p">Normal text</option><option value="1">Heading 1</option><option value="2">Heading 2</option><option value="3">Heading 3</option></select></div>
      <div class="pl-grp">${b('bold', 'Bold (Ctrl+B)', '<b>B</b>')}${b('italic', 'Italic (Ctrl+I)', '<i class="pl-it">I</i>')}${b('underline', 'Underline (Ctrl+U)', '<u>U</u>')}${b('strike', 'Strikethrough', '<s>S</s>')}</div>
      <div class="pl-grp">${b('color', 'Font colour', '<span class="pl-a">A</span><i class="pl-bar" data-bar="color"></i>', ' aria-haspopup="true"')}${b('highlight', 'Text highlight colour', svg(ic.pen) + '<i class="pl-bar" data-bar="highlight"></i>', ' aria-haspopup="true"')}</div>
      <div class="pl-grp pl-fold">${b('left', 'Align left', svg(ic.left))}${b('center', 'Centre', svg(ic.center))}${b('right', 'Align right', svg(ic.right))}</div>
      <div class="pl-grp">${b('bullets', 'Bulleted list', svg(ic.bullets))}${b('numbers', 'Numbered list', svg(ic.numbers))}${b('tasks', 'To-do list', svg(ic.tasks))}</div>
      <div class="pl-grp">${b('quote', 'Quote', svg(ic.quote))}${b('link', 'Link (Ctrl+K)', svg(ic.link))}</div>
      <div class="pl-grp pl-tablegrp" hidden>${b('rowAfter', 'Add a row below', svg(ic.rowAdd))}${b('colAfter', 'Add a column to the right', svg(ic.colAdd))}${b('rowDel', 'Delete this row', svg(ic.rowDel))}${b('colDel', 'Delete this column', svg(ic.colDel))}${b('tableDel', 'Delete the table', svg(ic.tableDel))}</div>
    </div>`;
  }
  let lastColor = '#b0512a', lastHl = '#fff59d';
  function runCmd(cmd, el) {
    if (!editor) return; const c = editor.chain().focus();
    ({ undo: () => c.undo().run(), redo: () => c.redo().run(), bold: () => c.toggleBold().run(), italic: () => c.toggleItalic().run(),
      underline: () => c.toggleUnderline().run(), strike: () => c.toggleStrike().run(),
      left: () => c.setTextAlign('left').run(), center: () => c.setTextAlign('center').run(), right: () => c.setTextAlign('right').run(),
      bullets: () => c.toggleBulletList().run(), numbers: () => c.toggleOrderedList().run(), tasks: () => c.toggleTaskList().run(),
      quote: () => c.toggleBlockquote().run(), link: () => linkPop(el), insert: () => blocks?.openInsert(),
      rowAfter: () => c.addRowAfter().run(), colAfter: () => c.addColumnAfter().run(), rowDel: () => c.deleteRow().run(), colDel: () => c.deleteColumn().run(), tableDel: () => c.deleteTable().run(),
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
      bullets: editor.isActive('bulletList'), numbers: editor.isActive('orderedList'), tasks: editor.isActive('taskList'), quote: editor.isActive('blockquote'), link: editor.isActive('link') };
    const tg = tb.querySelector('.pl-tablegrp'); if (tg) tg.hidden = !editor.isActive('table');
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
      <label>Date<input type="date" name="date" value="${esc(t.data.date || '')}" ${!fresh && inNote ? 'autofocus' : ''}></label>
      <div class="pl-row2 even"><label>Starts <small>(optional)</small><input type="time" name="time" step="900" value="${esc(t.data.time || '')}"></label><label>Ends <small>(optional)</small><input type="time" name="end" step="900" value="${esc(t.data.end || '')}"></label></div>
      <label>Calendar<select name="cal"><option value="">No calendar</option>${cals.map(c => `<option value="${c.id}"${c.id === t.data.calendarId ? ' selected' : ''}>${esc(c.data.name)}</option>`).join('')}</select></label>
      <div class="pl-pop-actions">${!inNote ? `<button type="button" class="pl-link danger" data-del-task>Delete</button>` : (t.data.date ? '<button type="button" class="pl-link" data-clear-date>Remove date</button>' : '<span></span>')}<button class="pl-btn" type="submit">${fresh ? 'Add' : 'Done'}</button></div>
    </form>`, p => {
      const f = p.querySelector('form');
      const apply = final => { const fd = new FormData(f), patch = { date: fd.get('date') || null, time: fd.get('time') || null, calendarId: fd.get('cal') || null };
        patch.end = patch.time && fd.get('end') && toMin(fd.get('end')) > toMin(patch.time) ? fd.get('end') : null;
        if (!inNote) patch.title = String(fd.get('title') || '').trim();
        if (!inNote && !patch.title) { if (final && fresh) remove(id); else if (!final) put(id, 'task', patch, { quiet: true }); return; }
        put(id, 'task', patch); };
      f.addEventListener('submit', e => { e.preventDefault(); const fd = new FormData(f);
        if (!inNote && !String(fd.get('title') || '').trim()) { f.querySelector('[name=title]').focus(); return; }
        apply(true); closePop(); });
      f.addEventListener('change', e => { if (e.target.name !== 'title') apply(false); });
      p.querySelector('[data-del-task]')?.addEventListener('click', () => { remove(id); closePop(); ctx.toast('To-do deleted.'); });
      p.querySelector('[data-clear-date]')?.addEventListener('click', () => { put(id, 'task', { date: null, time: null, end: null }); closePop(); });
      f.querySelector('[name=time]')?.addEventListener('change', e => { const en = f.querySelector('[name=end]'), st = toMin(e.target.value); if (st != null && (!en.value || toMin(en.value) <= st)) en.value = fromMin(Math.min(st + 60, 23 * 60 + 45)); });
      p.querySelector('[data-open-note]')?.addEventListener('click', e => { closePop(); openNote(e.target.dataset.openNote, id); });
      if (fresh) pop.dataset.fresh = id;
    });
  }
  function newTask(date, anchor, time = null) { const id = uuid(); put(id, 'task', { title: '', noteId: null, date: date || null, time: time || null, end: time ? fromMin(Math.min(toMin(time) + 60, 23 * 60 + 45)) : null, calendarId: list('calendar')[0]?.id || null, done: false, pos: 0 }, { quiet: true }); taskPopover(id, anchor, true); }
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
    root.addEventListener('mousedown', onResizeStart);
    root.addEventListener('dragstart', onDragStart); root.addEventListener('dragover', onDragOver); root.addEventListener('drop', onDrop); root.addEventListener('dragend', () => { dragging = null; root.querySelectorAll('.pl-over,.pl-dragging').forEach(x => x.classList.remove('pl-over', 'pl-dragging')); });
    offStore = subscribe(onStore);
    paint();
    setUser(ctx.getCloud?.()?.user?.id || null).then(() => { const was = ui.openNoteId; if (!ui.openNoteId || !get(ui.openNoteId)) ui.openNoteId = firstNote();
      /* keep the open editor (and the caret) when the same note is still open */
      if (ui.tab === 'notes' && editor && editor.__noteId === ui.openNoteId && was === ui.openNoteId) { paintTree(); paintRail(); paintNoteMeta(); } else paint(); });
  }
  let offStore = null;
  function unmount() { if (!mounted) return; destroyEditor(); persistNow(); push(); closePop(); offStore?.(); mounted = false; root = null; }
  function onStore(id) {
    if (!mounted) return;
    const it = id !== '*' && items[id];
    if (ui.tab === 'notes') { if (!it || it.kind !== 'note' || id !== editor?.__noteId) { paintTree(); paintRail(); } else { paintTree(); paintNoteMeta(); } if (!it || it.kind === 'folder') paintNoteMeta(); if (id === '*' && editor && !get(editor.__noteId)) paint(); }
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
  function paintPanel() { const p = root?.querySelector('#pl-panel'); if (!p) return; if (ui.tab === 'calendar') p.innerHTML = calendarHTML(); else if (ui.tab === 'todos') p.innerHTML = todosHTML();
    const sc = p.querySelector('.pl-wk-scroll'); if (!sc) return;
    if (ui.wkScroll == null) { const hr = sc.querySelector('.pl-wk-slot')?.offsetHeight || 46, first = Math.min(...[...sc.querySelectorAll('.pl-wev')].map(e => e.offsetTop), 8 * hr); ui.wkScroll = Math.max(0, Math.min(first, new Date().getHours() * hr) - hr / 2); }
    sc.scrollTop = ui.wkScroll; sc.addEventListener('scroll', () => { ui.wkScroll = sc.scrollTop; }, { passive: true }); }
  setInterval(() => { const n = root?.querySelector('.pl-now'); if (n) { const d = new Date(); n.style.setProperty('--t', d.getHours() * 60 + d.getMinutes()); } }, 60000);

  /* ───────── notes view ───────── */
  function paintNotes() {
    const p = root.querySelector('#pl-panel');
    if (!ui.openNoteId || !get(ui.openNoteId)) ui.openNoteId = firstNote();
    p.innerHTML = `<div class="pl-notes${ui.showTree ? ' tree-open' : ''}">
      <aside class="pl-tree" aria-label="Your notes"></aside>
      <section class="pl-main">${ui.openNoteId ? `<div class="pl-cover" hidden></div><div class="pl-note-head"><button type="button" class="pl-tree-toggle" data-tree-toggle aria-label="Show my notes">☰ Notes</button>
          <div class="pl-crumbs"></div><div class="pl-titlerow"><button type="button" class="pl-nicon" data-note-icon hidden></button><input class="pl-note-title" id="pl-note-title" aria-label="Note title" maxlength="120" value="${esc(get(ui.openNoteId).data.title || '')}" placeholder="Untitled"></div>
          <div class="pl-note-meta"></div></div>
        ${toolbarHTML()}<div class="pl-page"><div id="pl-editor"></div></div>`
        : `<div class="pl-empty"><button type="button" class="pl-tree-toggle" data-tree-toggle>☰ Notes</button>${ART.notes}<p><b>A blank page.</b> Notes you write here are only for you.</p><button type="button" class="pl-btn" data-new-note>＋ New note</button></div>`}</section>
      <aside class="pl-rail" aria-label="Coming up"></aside></div>`;
    paintTree(); paintRail(); paintNoteMeta();
    if (ui.openNoteId) openEditor(ui.openNoteId);
  }
  function paintNoteMeta() {
    const m = root?.querySelector('.pl-note-meta'), n = get(ui.openNoteId); if (!m || !n) return;
    const folders = list('folder').map(f => [folderPath(f.id), f]).sort((a, b) => a[0].localeCompare(b[0]));
    const t = new Date(n.updatedAt || Date.now()), words = ((editor && editor.__noteId === n.id ? editor.getText() : n.data.text || '').match(/[\p{L}\p{N}'’-]+/gu) || []).length;
    const tasks = list('task').filter(x => x.data.noteId === n.id && (x.data.title || '').trim()), doneN = tasks.filter(x => x.data.done).length;
    m.innerHTML = `<label class="pl-mini-sel"><span class="sr-only">Folder</span><select data-move-note aria-label="Folder"><option value="">No folder</option>${folders.map(([path, f]) => `<option value="${f.id}"${f.id === n.data.folderId ? ' selected' : ''}>${esc(path)}</option>`).join('')}</select></label>
      <span class="pl-stat" title="Words">${GI.words}${words.toLocaleString('en-AU')} word${words === 1 ? '' : 's'}</span>
      ${tasks.length ? `<span class="pl-stat" title="To-dos in this note">${ring(doneN, tasks.length, 16)}${doneN} of ${tasks.length} done</span>` : ''}
      <span class="pl-stat">Edited ${t.toLocaleString('en-AU', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })}</span>
      <button type="button" class="pl-link danger" data-del-note>Delete note</button>`;
    const cr = root.querySelector('.pl-crumbs'), fid = noteFolder(n);
    if (cr) { const trail = []; for (let x = fid, k = 0; x && k < 64; x = parentOf(x), k++) trail.unshift(get(x));
      cr.innerHTML = `<span class="pl-trail">${GI.folder}<span>My notes</span>${trail.map(f => `${GI.sep}<span>${esc(f.data.name)}</span>`).join('')}</span>
        <span class="pl-pageacts">${n.data.icon ? '' : `<button type="button" data-note-icon>${GI.smile}Add icon</button>`}<button type="button" data-note-cover>${GI.image}${n.data.cover ? 'Change cover' : 'Add cover'}</button>
        <button type="button" data-note-pin aria-pressed="${!!n.data.pinned}">${GI.pin}${n.data.pinned ? 'Pinned' : 'Pin'}</button><button type="button" data-note-print title="Print, or save as PDF">${GI.print}Print</button></span>`; }
    const ib = root.querySelector('.pl-nicon'); if (ib) { ib.hidden = !n.data.icon; ib.textContent = n.data.icon || ''; ib.setAttribute('aria-label', 'Change the page icon'); ib.title = 'Change icon'; }
    const cv = root.querySelector('.pl-cover'); if (cv) { cv.hidden = !n.data.cover; cv.dataset.cover = n.data.cover || ''; cv.innerHTML = n.data.cover ? `<button type="button" data-note-cover>${GI.image}Change cover</button>` : ''; }
    root.querySelector('.pl-main')?.classList.toggle('has-cover', !!n.data.cover);
  }
  const NOTE_ICONS = ['📘', '📗', '📙', '📕', '📓', '📒', '📝', '✏️', '🖊️', '📌', '📎', '🗂️', '📅', '⏰', '⭐', '✨', '💡', '🔥', '✅', '🎯', '🧠', '📚', '🎓', '🌏', '🌱', '🍎', '☕', '🎧', '🔬', '🧪', '📊', '📈', '💬', '🗣️', '✍️', '🔖', '🏷️', '❤️', '🙂', '🚀'];
  const COVERS = ['sand', 'sky', 'mint', 'blush', 'lilac', 'gold', 'slate', 'ink', 'sky-dots', 'mint-grid', 'sand-lines', 'ink-stars'];
  /* the notes tree: folders inside folders, like a file explorer */
  const ICON = {
    car: '<svg class="pl-car" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4l4 4-4 4"/></svg>',
    folder: '<svg class="pl-ico pl-ico-f" viewBox="0 0 16 16" aria-hidden="true"><path d="M1.8 4.3c0-.8.6-1.4 1.4-1.4h3l1.6 1.6h5c.8 0 1.4.6 1.4 1.4v5.8c0 .8-.6 1.4-1.4 1.4H3.2c-.8 0-1.4-.6-1.4-1.4z"/></svg>',
    folderOpen: '<svg class="pl-ico pl-ico-f" viewBox="0 0 16 16" aria-hidden="true"><path d="M1.8 11.6V4.3c0-.8.6-1.4 1.4-1.4h3l1.6 1.6h4.4c.8 0 1.4.6 1.4 1.4v.9"/><path class="pl-ico-lid" d="M1.9 12.4l1.7-4.6c.2-.5.6-.8 1.1-.8h9c.6 0 1 .6.8 1.1l-1.5 4.1c-.2.5-.6.8-1.1.8H2.4c-.4 0-.6-.3-.5-.6z"/></svg>',
    note: '<svg class="pl-ico pl-ico-n" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.2 1.8h5l3.3 3.3v8.3c0 .5-.4.8-.8.8H4.2c-.5 0-.8-.3-.8-.8V2.6c0-.5.3-.8.8-.8z"/><path d="M9 1.9v3.4h3.4M5.7 8.2h4.6M5.7 10.7h3.2"/></svg>',
    newNote: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8.5 14.2H4.2c-.5 0-.8-.3-.8-.8V2.6c0-.5.3-.8.8-.8h5l3.3 3.3v3"/><path d="M9 1.9v3.4h3.4M12 10.5v4M10 12.5h4"/></svg>',
    newFolder: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8.6 13.1H3.2c-.8 0-1.4-.6-1.4-1.4V4.3c0-.8.6-1.4 1.4-1.4h3l1.6 1.6h5c.8 0 1.4.6 1.4 1.4v2.2"/><path d="M12 9.5v4.5M9.8 11.8h4.4"/></svg>',
    collapse: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.8 8h10.4M5.4 2.4 8 5l2.6-2.6M5.4 13.6 8 11l2.6 2.6"/></svg>',
  };
  /* a folder's parent, ignoring missing parents and loops (two devices can make one) */
  function parentOf(fid) {
    const p = get(fid)?.data.parentId; if (!p || get(p)?.kind !== 'folder') return null;
    for (let x = p, n = 0; x && n < 64; x = get(x)?.data.parentId, n++) if (x === fid) return null;
    return p;
  }
  const noteFolder = n => (get(n.data.folderId)?.kind === 'folder' ? n.data.folderId : null);
  function isInside(fid, ancestor) { for (let x = fid, n = 0; x && n < 64; x = parentOf(x), n++) if (x === ancestor) return true; return false; }
  function folderPath(fid) { const out = []; for (let x = fid, n = 0; x && n < 64; x = parentOf(x), n++) out.unshift(get(x).data.name); return out.join(' / '); }
  function paintTree() {
    const tree = root?.querySelector('.pl-tree'); if (!tree) return;
    const q = ui.search.trim().toLowerCase(), byName = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base', numeric: true });
    const notes = list('note').filter(n => !q || (n.data.title + ' ' + (n.data.text || '')).toLowerCase().includes(q)), folders = list('folder');
    const kids = pid => folders.filter(f => parentOf(f.id) === pid).sort((a, b) => byName(a.data.name, b.data.name));
    const notesIn = pid => notes.filter(n => noteFolder(n) === pid).sort((a, b) => byName(a.data.title || 'Untitled', b.data.title || 'Untitled'));
    const count = fid => notesIn(fid).length + kids(fid).reduce((s, f) => s + count(f.id), 0);
    const noteRow = (n, d) => `<button type="button" class="pl-nrow${n.id === ui.openNoteId ? ' on' : ''}${n.id === ui.fresh ? ' fresh' : ''}${n.data.icon ? ' emo' : ''}" style="--d:${d}" data-open-note="${n.id}" draggable="true" data-drag-note="${n.id}"${n.id === ui.openNoteId ? ' aria-current="true"' : ''}>${n.data.icon ? `<i class="pl-emo" aria-hidden="true">${n.data.icon}</i>` : ICON.note}<span>${esc(n.data.title || 'Untitled')}</span>${countOpen(n.id) ? `<small title="Open to-dos">${countOpen(n.id)}</small>` : ''}</button>`;
    const folderRow = (f, d) => {
      const c = count(f.id); if (q && !c) return '';
      const open = !!q || ui.openFolders[f.id] !== false, name = esc(f.data.name);
      const head = ui.renaming === f.id
        ? `<div class="pl-fbtn editing">${ICON.car}${open ? ICON.folderOpen : ICON.folder}<input class="pl-rename" id="pl-rename" maxlength="60" value="${esc(ui.renameDraft ?? f.data.name)}" aria-label="Folder name"></div>`
        : `<button type="button" class="pl-fbtn" data-toggle-folder="${f.id}" aria-expanded="${open}" draggable="true" data-drag-folder="${f.id}">${ICON.car}${open ? ICON.folderOpen : ICON.folder}<span class="pl-fname">${name}</span>${c ? `<small>${c}</small>` : ''}</button><button type="button" class="pl-more" data-folder-menu="${f.id}" aria-label="Folder options for ${name}">⋯</button>`;
      return `<div class="pl-folder${open ? ' open' : ''}" data-drop-folder="${f.id}" style="--d:${d}"><div class="pl-frow" style="--d:${d}">${head}</div>
        ${open ? `<div class="pl-fkids">${branch(f.id, d + 1) || `<p class="pl-hint" style="--d:${d + 1}">Empty. Drag notes or folders here.</p>`}</div>` : ''}</div>`;
    };
    const branch = (pid, d) => kids(pid).map(f => folderRow(f, d)).join('') + notesIn(pid).map(n => noteRow(n, d)).join('');
    tree.innerHTML = `<div class="pl-tree-top"><div class="pl-tree-head"><b>Notes</b><span class="pl-tree-btns">
        <button type="button" class="pl-ibtn" data-new-note title="New note" aria-label="New note">${ICON.newNote}</button>
        <button type="button" class="pl-ibtn" data-new-folder title="New folder" aria-label="New folder">${ICON.newFolder}</button>
        <button type="button" class="pl-ibtn" data-collapse-all title="Collapse all folders" aria-label="Collapse all folders">${ICON.collapse}</button></span></div>
      <input type="search" id="pl-search" placeholder="Search notes" aria-label="Search notes" value="${esc(ui.search)}"></div>
      ${!q && notes.some(n => n.data.pinned) ? `<div class="pl-pinned"><p class="pl-tree-sub">${GI.pin}Pinned</p>${notes.filter(n => n.data.pinned).sort((a, b) => byName(a.data.title || 'Untitled', b.data.title || 'Untitled')).map(n => noteRow(n, 0)).join('')}</div>` : ''}
      <div class="pl-tree-list" data-drop-folder="">${branch(null, 0)}
        ${q && !notes.length ? `<p class="pl-hint">No note matches “${esc(ui.search)}”.</p>` : ''}</div>
      <p class="pl-tree-foot">${list('note').length} note${list('note').length === 1 ? '' : 's'} · ${folders.length} folder${folders.length === 1 ? '' : 's'}</p>`;
    const inp = tree.querySelector('#pl-rename');
    if (inp) {
      const id = ui.renaming, f = get(id); inp.focus(); ui.renameDraft == null ? inp.select() : inp.setSelectionRange(inp.value.length, inp.value.length);
      let gone = false;
      const done = keep => { if (gone) return; gone = true; const v = inp.value.trim().slice(0, 60); ui.renaming = null; ui.renameDraft = null; if (f && get(id)) put(id, 'folder', { name: keep && v ? v : f.data.name }); paintTree(); };
      inp.addEventListener('input', () => { ui.renameDraft = inp.value; });
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); done(true); } if (e.key === 'Escape') { e.preventDefault(); done(false); } });
      inp.addEventListener('blur', () => setTimeout(() => { if (ui.renaming === id && document.activeElement !== tree.querySelector('#pl-rename')) done(true); }, 0));
    }
    if (ui.fresh) setTimeout(() => { ui.fresh = null; }, 900);
  }
  const countOpen = noteId => list('task').filter(t => t.data.noteId === noteId && !t.data.done).length;
  function paintRail() {
    const rail = root?.querySelector('.pl-rail'); if (!rail) return;
    const t = todayStr(), now = new Date(), open = list('task').filter(x => !x.data.done && (x.data.title || '').trim());
    const dated = open.filter(x => x.data.date).sort((a, b) => (a.data.date + (a.data.time || '')).localeCompare(b.data.date + (b.data.time || ''))).slice(0, 7);
    const todayAll = list('task').filter(x => x.data.date === t && (x.data.title || '').trim()), todayDone = todayAll.filter(x => x.data.done).length;
    const m = ui.month || t.slice(0, 7); let last = '';
    rail.innerHTML = `<div class="pl-today"><span class="pl-today-tile" aria-hidden="true"><small>${now.toLocaleDateString('en-AU', { weekday: 'short' })}</small><b>${now.getDate()}</b></span>
        <div><b>${now.toLocaleDateString('en-AU', { weekday: 'long' })}</b><span>${now.getDate()} ${MONTHS[now.getMonth()]} · Week ${isoWeek(t)}</span>
        <em>${todayAll.length ? `${ring(todayDone, todayAll.length, 14)} ${todayDone} of ${todayAll.length} done today` : 'Nothing due today'}</em></div></div>
      <h2 class="pl-h">${MONTHS[+m.slice(5) - 1]} ${m.slice(0, 4)}</h2>${miniMonth(m, true)}
      <h2 class="pl-h">Coming up</h2>
      <div class="pl-up">${dated.map(x => { const day = x.data.date < t ? 'Late' : niceDate(x.data.date), head = day !== last ? `<p class="pl-upday${x.data.date < t ? ' late' : ''}">${esc(day)}</p>` : ''; last = day;
        return `${head}<div class="pl-uprow${x.data.date < t ? ' late' : ''}" style="--c:${calColor(x)}">${checkbox(x)}<button type="button" class="pl-uptitle" data-task-open="${x.id}" title="${esc(x.data.title)}">${esc(x.data.title)}</button>${x.data.time ? `<small>${esc(timeRange(x))}</small>` : ''}</div>`; }).join('')
        || `<div class="pl-upempty">${ART.calm}<p class="pl-hint">No dated to-dos. Give a to-do a date and it shows here and on the calendar.</p></div>`}</div>
      ${open.filter(x => !x.data.date).length ? `<button type="button" class="pl-link" data-tab="todos">${open.filter(x => !x.data.date).length} to-do${open.filter(x => !x.data.date).length > 1 ? 's' : ''} without a date ›</button>` : ''}`;
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
  const evHTML = (x, cls = 'pl-ev', style = '', extra = '') => `<div class="${cls}${x.data.done ? ' done' : ''}" draggable="true" data-drag-task="${x.id}" style="--c:${calColor(x)};${style}">${checkbox(x)}<button type="button" data-task-open="${x.id}" title="${esc(x.data.title)}${x.data.time ? ' · ' + esc(timeRange(x)) : ''}">${x.data.time ? `<b>${esc(timeRange(x))}</b> ` : ''}<span>${esc(x.data.title)}</span>${extra}</button>${cls === 'pl-wev' ? `<i class="pl-rz" data-resize="${x.id}" title="Drag to change the end time" aria-hidden="true"></i>` : ''}</div>`;
  /* place timed to-dos on a day: start, end (1 hour when no end), and side-by-side lanes when they overlap */
  function placeDay(day) {
    const all = tasksOn(day), untimed = all.filter(x => !x.data.time), timed = all.filter(x => x.data.time).map(x => { const st = toMin(x.data.time), en = toMin(x.data.end); return { x, st, en: en > st ? en : st + 60 }; }).sort((a, b) => a.st - b.st || b.en - a.en);
    const lanes = []; let group = [], groupEnd = -1;
    const flush = () => { const n = Math.max(...group.map(g => g.lane)) + 1; group.forEach(g => { g.n = n; }); group = []; lanes.length = 0; };
    timed.forEach(g => { if (group.length && g.st >= groupEnd) flush();
      let lane = lanes.findIndex(end => end <= g.st); if (lane < 0) { lane = lanes.length; lanes.push(0); } lanes[lane] = g.en; groupEnd = Math.max(groupEnd, g.en); g.lane = lane; group.push(g); });
    if (group.length) flush();
    return { untimed, placed: timed };
  }
  const nowMin = () => { const n = new Date(); return n.getHours() * 60 + n.getMinutes(); };
  const hoursCol = () => `<div class="pl-wk-hours" aria-hidden="true">${Array.from({ length: 24 }, (_, h) => `<span>${h ? hourLabel(h) : ''}</span>`).join('')}</div>`;
  function dayColumn(day, placed, cls, wide) {
    const t = todayStr();
    return `<div class="pl-wk-col ${cls}${day === t ? ' today' : ''}" role="group" aria-label="${longDay(day)}${placed.length ? `, ${placed.length} timed to-do${placed.length > 1 ? 's' : ''}` : ''}" data-drop-day="${day}">
      ${Array.from({ length: 24 }, (_, h) => `<div class="pl-wk-slot" data-add-at="${day}" data-time="${pad(h)}:00" data-drop-day="${day}" data-drop-time="${pad(h)}:00"></div>`).join('')}
      ${placed.map(g => { const short = g.en - g.st <= 45, cal = g.x.data.calendarId && get(g.x.data.calendarId), note = g.x.data.noteId && get(g.x.data.noteId);
        const off = wide ? `left:calc(${g.lane} * (100% - 8px) / ${g.n});width:calc((100% - 8px) / ${g.n} - 4px)` : `left:${g.lane * 16}px;width:calc(100% - ${g.lane * 16 + 4}px)`;
        return evHTML(g.x, 'pl-wev' + (short ? ' short' : ''), `top:calc(var(--hr) * ${(g.st / 60).toFixed(3)});height:calc(var(--hr) * ${((g.en - g.st) / 60).toFixed(3)} - 3px);${off};z-index:${1 + g.lane}`,
          wide && !short ? `<em>${cal ? esc(cal.data.name) : ''}${cal && note ? ' · ' : ''}${note ? esc(note.data.title || 'Untitled') : ''}</em>` : ''); }).join('')}
      ${day === t ? `<div class="pl-now" style="--t:${nowMin()}" aria-hidden="true"><b>${fromMin(nowMin())}</b></div>` : ''}</div>`;
  }
  function weekStart() { if (!ui.week) ui.week = mondayOf(todayStr()); return ui.week; }
  function calendarHTML() {
    const t = todayStr(), m = ui.month || t.slice(0, 7), y = +m.slice(0, 4), mo = +m.slice(5) - 1, view = ui.calView;
    const cals = list('calendar').sort((a, b) => (a.data.sort || 0) - (b.data.sort || 0));
    const openOn = cid => list('task').filter(x => !x.data.done && (x.data.title || '').trim() && (x.data.calendarId || 'none') === cid).length;
    const side = `<aside class="pl-calside" aria-label="Calendars"><h2 class="pl-h pl-sidemonth">${MONTHS[mo]} <span>${y}</span></h2>${miniMonth(m, true)}
      <h2 class="pl-h">My calendars</h2>
      <div class="pl-cals">${cals.map(c => `<div class="pl-calrow"><label><input type="checkbox" data-cal-show="${c.id}"${hidden[c.id] ? '' : ' checked'} style="--c:${COLORS[c.data.color]}"><span class="sr-only">Show </span></label>
          <input class="pl-calname" data-cal-name="${c.id}" value="${esc(c.data.name)}" maxlength="40" aria-label="Calendar name">
          ${openOn(c.id) ? `<small class="pl-calcount" title="Open to-dos">${openOn(c.id)}</small>` : ''}
          <button type="button" class="pl-swatch" data-cal-color="${c.id}" style="--c:${COLORS[c.data.color]}" aria-label="Change colour of ${esc(c.data.name)}"></button>
          <button type="button" class="pl-more" data-cal-del="${c.id}" aria-label="Delete calendar ${esc(c.data.name)}">×</button></div>`).join('')}
        <div class="pl-calrow none"><label><input type="checkbox" data-cal-show="none"${hidden.none ? '' : ' checked'} style="--c:var(--pl-muted)"><span class="sr-only">Show </span></label><span>No calendar</span>${openOn('none') ? `<small class="pl-calcount">${openOn('none')}</small>` : ''}</div></div>
      ${cals.length < MAX_CAL ? `<button type="button" class="pl-btn ghost" data-new-cal>＋ New calendar <small>${cals.length} of ${MAX_CAL}</small></button>` : `<p class="pl-limit">${MAX_CAL} of ${MAX_CAL} calendars. Rename or delete one to make a different one.</p>`}</aside>`;
    let body, title;
    if (view === 'year') {
      title = `${y}`;
      body = `<div class="pl-year">${MONTHS.map((n, i) => { const mm = `${y}-${pad(i + 1)}`, cnt = list('task').filter(x => !x.data.done && (x.data.date || '').startsWith(mm) && !hiddenCal(x)).length;
        return `<button type="button" class="pl-ym${mm === t.slice(0, 7) ? ' now' : ''}" data-goto-month="${mm}"><b>${n}${cnt ? `<small>${cnt}</small>` : ''}</b>${miniMonth(mm, false, true)}</button>`; }).join('')}</div>`;
    } else if (view === 'week') {
      const ws = weekStart(), days = [0, 1, 2, 3, 4, 5, 6].map(i => addDays(ws, i)), d0 = parseYmd(ws), d6 = parseYmd(days[6]);
      title = d0.getMonth() === d6.getMonth() ? `${d0.getDate()} – ${d6.getDate()} ${MONTHS[d6.getMonth()]} <span>${d6.getFullYear()}</span>`
        : `${d0.getDate()} ${MONTHS[d0.getMonth()].slice(0, 3)} – ${d6.getDate()} ${MONTHS[d6.getMonth()].slice(0, 3)} <span>${d6.getFullYear()}</span>`;
      const cols = days.map((s, i) => ({ s, ...placeDay(s), wk: i > 4 }));
      body = `<div class="pl-week" style="--hr:46px">
        <div class="pl-wk-head"><span class="pl-wk-gut" title="Week of the year">W${isoWeek(ws)}</span>${cols.map(c => { const d = parseYmd(c.s);
          return `<div class="pl-wk-day${c.s === t ? ' today' : ''}${c.wk ? ' wk' : ''}"><button type="button" class="pl-wk-dow" data-open-day="${c.s}" aria-label="Open ${longDay(c.s)}" title="Open this day">${DOW[(d.getDay() + 6) % 7]}</button><button type="button" class="pl-wk-num" data-add-on="${c.s}" aria-label="Add a to-do on ${longDay(c.s)}">${d.getDate()}</button></div>`; }).join('')}</div>
        <div class="pl-wk-all"><span class="pl-wk-gut">all-day</span>${cols.map(c => `<div class="pl-wk-allcell${c.wk ? ' wk' : ''}${c.s === t ? ' today' : ''}" role="group" aria-label="${longDay(c.s)}, no time" data-drop-day="${c.s}" data-drop-time="">${c.untimed.map(x => evHTML(x)).join('')}</div>`).join('')}</div>
        <div class="pl-wk-scroll" tabindex="0" aria-label="Hours"><div class="pl-wk-grid">${hoursCol()}${cols.map(c => dayColumn(c.s, c.placed, c.wk ? 'wk' : '', false)).join('')}</div></div></div>`;
    } else if (view === 'day') {
      const ds = ui.day || t, d = parseYmd(ds), { untimed, placed } = placeDay(ds), all = list('task').filter(x => x.data.date === ds && (x.data.title || '').trim()), doneN = all.filter(x => x.data.done).length;
      const free = list('task').filter(x => !x.data.done && !x.data.date && (x.data.title || '').trim()).slice(0, 12), late = list('task').filter(x => !x.data.done && x.data.date && x.data.date < t && (x.data.title || '').trim()).slice(0, 6);
      const busy = placed.reduce((a, g) => a + (g.en - g.st), 0);
      title = `${d.toLocaleDateString('en-AU', { weekday: 'long' })} <span>${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}</span>`;
      const chip = x => `<div class="pl-dchip" draggable="true" data-drag-task="${x.id}" style="--c:${calColor(x)}">${checkbox(x)}<button type="button" data-task-open="${x.id}">${esc(x.data.title)}</button>${x.data.date ? `<small>${esc(niceDate(x.data.date))}</small>` : ''}<span class="pl-grip" aria-hidden="true">⋮⋮</span></div>`;
      body = `<div class="pl-dayv">
        <div class="pl-day-main pl-week" style="--hr:56px">
          <div class="pl-wk-all pl-day-all"><span class="pl-wk-gut">all-day</span><div class="pl-wk-allcell${ds === t ? ' today' : ''}" role="group" aria-label="${longDay(ds)}, no time" data-drop-day="${ds}" data-drop-time="">${untimed.map(x => evHTML(x)).join('') || '<span class="pl-day-hint">Drop a to-do here to give it this day with no time</span>'}</div></div>
          <div class="pl-wk-scroll" tabindex="0" aria-label="Hours"><div class="pl-wk-grid pl-day-grid">${hoursCol()}${dayColumn(ds, placed, '', true)}</div></div></div>
        <aside class="pl-day-side" aria-label="This day">
          <div class="pl-day-card"><span class="pl-today-tile big" aria-hidden="true"><small>${d.toLocaleDateString('en-AU', { weekday: 'short' })}</small><b>${d.getDate()}</b></span>
            <div><b>${ds === t ? 'Today' : esc(niceDate(ds))}</b><span>Week ${isoWeek(ds)} · ${MONTHS[d.getMonth()]}</span></div></div>
          <div class="pl-day-stats"><div>${ring(doneN, all.length, 40)}<b>${doneN}<small>/${all.length}</small></b><span>done</span></div><div><b>${Math.floor(busy / 60)}<small>h</small> ${pad(busy % 60)}<small>m</small></b><span>planned</span></div><div><b>${untimed.length}</b><span>no time</span></div></div>
          <h2 class="pl-h">Plan your day</h2>
          <p class="pl-day-tip">Drag a to-do onto the hours to block out time for it. Drag the bottom edge of a block to make it longer.</p>
          ${late.length ? `<h3 class="pl-h late">${GI.late}Late <small>${late.length}</small></h3><div class="pl-dchips">${late.map(chip).join('')}</div>` : ''}
          <h3 class="pl-h">${GI.nodate}No date <small>${free.length}</small></h3>
          <div class="pl-dchips">${free.map(chip).join('') || '<p class="pl-hint">Every to-do has a date.</p>'}</div>
          <button type="button" class="pl-btn ghost" data-add-on="${ds}">＋ To-do on this day</button>
        </aside></div>`;
    } else {
      title = `${MONTHS[mo]} <span>${y}</span>`;
      const first = new Date(y, mo, 1), start = new Date(first); start.setDate(1 - ((first.getDay() + 6) % 7));
      const cells = []; for (let i = 0; i < 42; i++) { const d = new Date(start); d.setDate(start.getDate() + i); cells.push(d); }
      const todayDow = cells.some(d => ymd(d) === t) ? (new Date().getDay() + 6) % 7 : -1;
      body = `<div class="pl-dows" aria-hidden="true">${DOW.map((d, i) => `<span${i === todayDow ? ' class="now"' : ''}>${d}</span>`).join('')}</div>
        <div class="pl-grid">${cells.map((d, i) => { const s = ymd(d), ts = tasksOn(s), out = d.getMonth() !== mo, wk = d.getDay() === 0 || d.getDay() === 6;
          return `<div class="pl-cell${out ? ' out' : ''}${wk ? ' wk' : ''}${s === t ? ' today' : ''}" role="group" data-day="${s}" data-drop-day="${s}" aria-label="${d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })}${ts.length ? `, ${ts.length} to-do${ts.length > 1 ? 's' : ''}` : ''}">
            <div class="pl-cellhead">${i % 7 === 0 ? `<button type="button" class="pl-wkno" data-goto-week="${s}" aria-label="Open week ${isoWeek(s)}" title="Open this week">W${isoWeek(s)}</button>` : ''}<button type="button" class="pl-daynum" data-add-on="${s}" aria-label="Add a to-do on ${d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long' })}">${d.getDate() === 1 ? `<i>${MONTHS[d.getMonth()].slice(0, 3)}</i> ` : ''}${d.getDate()}</button></div>
            ${ts.slice(0, 3).map(x => evHTML(x)).join('')}
            ${ts.length > 3 ? `<button type="button" class="pl-more-ev" data-day-list="${s}">+${ts.length - 3} more</button>` : ''}</div>`; }).join('')}</div>`;
    }
    return `<div class="pl-cal" data-view="${view}">${side}<section class="pl-calmain">
      <div class="pl-calhead"><h2>${title}</h2>
        <div class="pl-calnav"><button type="button" class="pl-btn ghost pl-arrow" data-cal-step="-1" aria-label="Previous ${view}">‹</button><button type="button" class="pl-btn ghost" data-cal-today>Today</button><button type="button" class="pl-btn ghost pl-arrow" data-cal-step="1" aria-label="Next ${view}">›</button>
          <div class="pl-seg" role="group" aria-label="View"><button type="button" data-cal-view="day" aria-pressed="${view === 'day'}" title="Day (D)">Day</button><button type="button" data-cal-view="week" aria-pressed="${view === 'week'}" title="Week (W)">Week</button><button type="button" data-cal-view="month" aria-pressed="${view === 'month'}" title="Month (M)">Month</button><button type="button" data-cal-view="year" aria-pressed="${view === 'year'}" title="Year (Y)">Year</button></div>
          <button type="button" class="pl-btn" data-new-task>＋ To-do</button></div></div>${body}</section></div>`;
  }
  function miniMonth(m, linked, tiny) {
    const y = +m.slice(0, 4), mo = +m.slice(5) - 1, first = new Date(y, mo, 1), off = (first.getDay() + 6) % 7, days = new Date(y, mo + 1, 0).getDate(), t = todayStr();
    const has = new Set(list('task').filter(x => x.data.date && !x.data.done && x.data.date.startsWith(m)).map(x => x.data.date));
    let h = `<div class="pl-minim${tiny ? ' tiny' : ''}">${tiny ? '' : DOW.map(d => `<b aria-hidden="true">${d[0]}</b>`).join('')}${'<span></span>'.repeat(off)}`;
    const wk = ui.tab === 'calendar' && !tiny && ui.calView === 'week' ? weekStart() : null, dv = ui.tab === 'calendar' && !tiny && ui.calView === 'day' ? (ui.day || t) : null;
    for (let d = 1; d <= days; d++) { const s = `${m}-${pad(d)}`, cls = `${s === t ? 'today' : ''}${has.has(s) ? ' has' : ''}${wk && s >= wk && s <= addDays(wk, 6) ? ' inweek' : ''}${s === dv ? ' inweek theday' : ''}${(off + d - 1) % 7 > 4 ? ' we' : ''}`;
      h += linked ? `<button type="button" class="${cls}" data-goto-day="${s}" aria-label="${d} ${MONTHS[mo]}">${d}</button>` : `<span class="${cls}">${d}</span>`; }
    return h + '</div>';
  }

  /* ───────── to-dos view ───────── */
  function todosHTML() {
    const t = todayStr(), all = list('task').filter(x => (x.data.title || '').trim());
    const open = all.filter(x => !x.data.done), by = (a, b) => ((a.data.date || '') + (a.data.time || '')).localeCompare((b.data.date || '') + (b.data.time || ''));
    const groups = [['Late', open.filter(x => x.data.date && x.data.date < t).sort(by), 'late'], ['Today', open.filter(x => x.data.date === t).sort(by), 'today'], ['Next 7 days', open.filter(x => x.data.date > t && x.data.date <= addDays(t, 7)).sort(by), 'soon'],
      ['Later', open.filter(x => x.data.date > addDays(t, 7)).sort(by), 'later'], ['No date', open.filter(x => !x.data.date), 'nodate'], ['Done', all.filter(x => x.data.done).sort((a, b) => (b.data.doneAt || '').localeCompare(a.data.doneAt || '')).slice(0, 30), 'done']];
    const cals = list('calendar'), ws = mondayOf(t), wkAll = all.filter(x => x.data.date >= ws && x.data.date <= addDays(ws, 6)), wkDone = wkAll.filter(x => x.data.done).length;
    const stat = (n, label, cls) => `<div class="pl-tstat ${cls}"><b>${n}</b><span>${label}</span></div>`;
    return `<div class="pl-todos">
      ${all.length ? `<div class="pl-tsum"><div class="pl-tsum-ring">${ring(wkDone, wkAll.length, 54)}<b>${wkAll.length ? Math.round(wkDone / wkAll.length * 100) : 0}<small>%</small></b></div>
        <div class="pl-tsum-txt"><b>This week</b><span>${wkDone} of ${wkAll.length} dated to-do${wkAll.length === 1 ? '' : 's'} done · Week ${isoWeek(t)}</span></div>
        <div class="pl-tstats">${stat(groups[0][1].length, 'late', 'late')}${stat(groups[1][1].length, 'today', 'today')}${stat(groups[2][1].length, 'next 7 days', 'soon')}${stat(groups[4][1].length, 'no date', 'nodate')}</div></div>` : ''}
      <form class="pl-add" data-add-form><span class="pl-add-ico" aria-hidden="true">＋</span><label class="sr-only" for="pl-add-title">New to-do</label><input id="pl-add-title" name="title" maxlength="300" placeholder="Add a to-do…" autocomplete="off">
        <label class="sr-only" for="pl-add-date">Date</label><input type="date" id="pl-add-date" name="date">
        <label class="sr-only" for="pl-add-cal">Calendar</label><select id="pl-add-cal" name="cal"><option value="">No calendar</option>${cals.map(c => `<option value="${c.id}">${esc(c.data.name)}</option>`).join('')}</select>
        <button class="pl-btn" type="submit">Add</button></form>
      ${groups.filter(g => g[1].length).map(([name, ts, cls]) => `<section class="pl-tgroup ${cls}"><h2 class="pl-h">${GI[cls]}${name} <small>${ts.length}</small></h2>
        <div class="pl-tlist">${ts.map(x => { const note = x.data.noteId && get(x.data.noteId); return `<div class="pl-trow${x.data.done ? ' done' : ''}" style="--c:${calColor(x)}">${checkbox(x)}
          <button type="button" class="pl-ttitle" data-task-open="${x.id}">${esc(x.data.title)}</button>
          ${note ? `<button type="button" class="pl-tnote" data-open-note="${note.id}" data-focus-task="${x.id}">${ICON.note}${esc(note.data.title || 'Untitled')}</button>` : ''}
          <button type="button" class="pl-tdate${x.data.date && x.data.date < t && !x.data.done ? ' late' : ''}${x.data.date ? '' : ' nodate'}" data-task-open="${x.id}" style="--c:${calColor(x)}">${x.data.date ? esc(niceDate(x.data.date)) + (x.data.time ? ' · ' + esc(timeRange(x)) : '') : '＋ Date'}</button></div>`; }).join('')}</div></section>`).join('')
      || `<div class="pl-empty">${ART.todos}<p><b>All clear.</b> Add a to-do above, or make a to-do list in a note.</p></div>`}</div>`;
  }

  /* small flat illustrations for empty states */
  const ART = {
    notes: `<svg class="pl-art" viewBox="0 0 160 110" aria-hidden="true"><rect x="38" y="14" width="74" height="88" rx="8" fill="#fff" stroke="#c9d3da" stroke-width="1.5"/><rect x="48" y="8" width="74" height="88" rx="8" fill="#fff" stroke="#14293a" stroke-width="1.6"/><path d="M60 30h40M60 42h50M60 54h34" stroke="#c9d3da" stroke-width="3" stroke-linecap="round"/><rect x="58" y="64" width="9" height="9" rx="2.5" fill="none" stroke="#2b776e" stroke-width="1.6"/><path d="M73 68.5h28" stroke="#c9d3da" stroke-width="3" stroke-linecap="round"/><path d="m118 70 14-14 6 6-14 14-8 2z" fill="#e3a843" stroke="#14293a" stroke-width="1.5" stroke-linejoin="round"/><circle cx="30" cy="30" r="3" fill="#e3a843"/><circle cx="138" cy="24" r="2" fill="#2b776e"/></svg>`,
    todos: `<svg class="pl-art" viewBox="0 0 160 110" aria-hidden="true"><rect x="34" y="16" width="92" height="82" rx="10" fill="#fff" stroke="#14293a" stroke-width="1.6"/><rect x="48" y="32" width="11" height="11" rx="3" fill="#2b776e"/><path d="m50.5 37.6 2.2 2.2 4-4.3" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M66 37.5h44" stroke="#c9d3da" stroke-width="3" stroke-linecap="round"/><rect x="48" y="52" width="11" height="11" rx="3" fill="#2b776e"/><path d="m50.5 57.6 2.2 2.2 4-4.3" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M66 57.5h34" stroke="#c9d3da" stroke-width="3" stroke-linecap="round"/><rect x="48" y="72" width="11" height="11" rx="3" fill="none" stroke="#c9d3da" stroke-width="1.6"/><path d="M66 77.5h38" stroke="#e8edf0" stroke-width="3" stroke-linecap="round"/><circle cx="128" cy="20" r="11" fill="#e3a843"/><path d="M128 14.5v11M122.5 20h11" stroke="#14293a" stroke-width="1.6" stroke-linecap="round"/><circle cx="24" cy="70" r="3" fill="#e3a843"/></svg>`,
    calm: `<svg class="pl-art sm" viewBox="0 0 120 64" aria-hidden="true"><rect x="34" y="10" width="52" height="46" rx="8" fill="#fff" stroke="#14293a" stroke-width="1.5"/><path d="M34 22h52" stroke="#14293a" stroke-width="1.5"/><path d="M46 6v8M74 6v8" stroke="#14293a" stroke-width="1.5" stroke-linecap="round"/><circle cx="60" cy="39" r="7" fill="#e3a843"/><circle cx="20" cy="40" r="2.5" fill="#2b776e"/><circle cx="100" cy="22" r="2" fill="#e3a843"/></svg>`,
  };

  /* ───────── events ───────── */
  function onClick(e) {
    const slot = e.target.closest('[data-add-at]'); if (slot && !e.target.closest('button, input')) { const r = slot.getBoundingClientRect(), q = Math.min(3, Math.floor((e.clientY - r.top) / r.height * 4));
      newTask(slot.dataset.addAt, slot, fromMin(toMin(slot.dataset.time) + q * 15)); return; }
    const t = e.target.closest('button, [data-tab]'); if (!t || t.disabled) return; const d = t.dataset;
    if (d.tab && t.getAttribute('role') === 'tab' || (d.tab && t.classList.contains('pl-link'))) { ui.tab = d.tab; closePop(); paint(); return; }
    if (d.cmd) { runCmd(d.cmd, t); return; }
    if (d.treeToggle !== undefined) { ui.showTree = !ui.showTree; root.querySelector('.pl-notes')?.classList.toggle('tree-open', ui.showTree); return; }
    if (d.openNote) { openNote(d.openNote, d.focusTask); return; }
    if (d.newNote !== undefined) { saveNote(); const id = uuid(), cur = get(ui.openNoteId), folder = d.newNote || (cur ? noteFolder(cur) : null); if (folder) ui.openFolders[folder] = true; ui.fresh = id; put(id, 'note', { title: '', folderId: folder, content: { type: 'doc', content: [{ type: 'paragraph' }] }, text: '' }); ui.openNoteId = id; ui.search = ''; ui.showTree = false; paint(); root.querySelector('#pl-note-title')?.focus(); return; }
    if (d.newFolder !== undefined) { newFolder(d.newFolder || null); return; }
    if (d.collapseAll !== undefined) { list('folder').forEach(f => { ui.openFolders[f.id] = false; }); paintTree(); return; }
    if (d.toggleFolder) { ui.openFolders[d.toggleFolder] = ui.openFolders[d.toggleFolder] === false; paintTree(); return; }
    if (d.folderMenu) { const f = get(d.folderMenu); if (!f) return;
      popover(t, `<div class="pl-menu" role="menu"><button type="button" role="menuitem" data-m="note">New note here</button><button type="button" role="menuitem" data-m="sub">New folder inside</button><button type="button" role="menuitem" data-m="rename">Rename</button>${parentOf(f.id) ? '<button type="button" role="menuitem" data-m="top">Move to top level</button>' : ''}<button type="button" role="menuitem" class="danger" data-m="delete">Delete folder</button><small>Deleting keeps what is inside.</small></div>`, p => p.addEventListener('click', ev => {
      const m = ev.target.closest('[data-m]')?.dataset.m; if (!m) return; closePop();
      if (m === 'note') { const b = document.createElement('button'); b.type = 'button'; b.hidden = true; b.dataset.newNote = f.id; root.append(b); b.click(); b.remove(); }
      if (m === 'sub') newFolder(f.id);
      if (m === 'rename') { ui.renaming = f.id; ui.renameDraft = null; paintTree(); }
      if (m === 'top') put(f.id, 'folder', { parentId: null });
      if (m === 'delete') { const up = parentOf(f.id);
        list('note').filter(n => noteFolder(n) === f.id).forEach(n => put(n.id, 'note', { folderId: up }, { quiet: true }));
        list('folder').filter(x => parentOf(x.id) === f.id).forEach(x => put(x.id, 'folder', { parentId: up }, { quiet: true }));
        remove(f.id); paintNoteMeta(); ctx.toast(`Folder “${f.data.name}” deleted. What was inside moved up one level.`); } })); return; }
    if (d.noteIcon !== undefined) { const n = get(ui.openNoteId); if (!n) return;
      popover(t, `<div class="pl-pal pl-emojis" role="menu" aria-label="Page icon"><b>Page icon</b><div class="pl-emo-grid">${NOTE_ICONS.map(x => `<button type="button" role="menuitem" data-emo="${x}" aria-label="${x}"${x === n.data.icon ? ' aria-pressed="true"' : ''}>${x}</button>`).join('')}</div>${n.data.icon ? '<button type="button" class="pl-link" data-emo="">Remove icon</button>' : ''}</div>`,
        p => p.addEventListener('click', ev => { const b = ev.target.closest('[data-emo]'); if (!b) return; put(n.id, 'note', { icon: b.dataset.emo || null }); closePop(); })); return; }
    if (d.noteCover !== undefined) { const n = get(ui.openNoteId); if (!n) return;
      popover(t, `<div class="pl-pal" role="menu" aria-label="Cover"><b>Cover</b><div class="pl-covers">${COVERS.map(c => `<button type="button" role="menuitem" class="pl-cover-sw" data-cover-pick="${c}" data-cover="${c}" aria-label="${c.replace('-', ' ')}"${c === n.data.cover ? ' aria-pressed="true"' : ''}></button>`).join('')}</div>${n.data.cover ? '<button type="button" class="pl-link" data-cover-pick="">Remove cover</button>' : ''}</div>`,
        p => p.addEventListener('click', ev => { const b = ev.target.closest('[data-cover-pick]'); if (!b) return; put(n.id, 'note', { cover: b.dataset.coverPick || null }); closePop(); })); return; }
    if (d.notePin !== undefined) { const n = get(ui.openNoteId); if (n) { const on = !n.data.pinned; put(n.id, 'note', { pinned: on }); ctx.toast(on ? 'Pinned to the top of your notes.' : 'Unpinned.'); } return; }
    if (d.notePrint !== undefined) { saveNote(); window.print(); return; }
    if (d.delNote !== undefined) { const id = ui.openNoteId, n = get(id); if (!n) return;
      popover(t, `<div class="pl-menu"><p>Delete “${esc(n.data.title || 'Untitled')}”? Its to-dos leave the calendar too.</p><button type="button" class="pl-btn danger" data-m="yes">Delete note</button></div>`, p => p.querySelector('[data-m]').addEventListener('click', () => {
        closePop(); destroyEditor(); const tasks = list('task').filter(x => x.data.noteId === id); tasks.forEach(x => remove(x.id)); remove(id); ui.openNoteId = firstNote(); paint();
        undoToast('Note deleted.', () => { restore(id); tasks.forEach(x => restore(x.id)); ui.openNoteId = id; paint(); }); })); return; }
    if (d.taskOpen) { taskPopover(d.taskOpen, t); return; }
    if (d.gotoDay) { ui.month = d.gotoDay.slice(0, 7); if (ui.tab === 'calendar' && ui.calView === 'week') ui.week = mondayOf(d.gotoDay); else if (ui.tab === 'calendar' && ui.calView === 'day') ui.day = d.gotoDay; else ui.calView = 'month'; ui.tab = 'calendar'; paint(); return; }
    if (d.openDay) { ui.day = d.openDay; ui.month = d.openDay.slice(0, 7); ui.calView = 'day'; ui.tab = 'calendar'; ui.wkScroll = null; paint(); return; }
    if (d.gotoWeek) { ui.week = mondayOf(d.gotoWeek); ui.calView = 'week'; ui.month = addDays(ui.week, 3).slice(0, 7); ui.wkScroll = null; paintPanel(); return; }
    if (d.gotoMonth) { ui.month = d.gotoMonth; ui.calView = 'month'; paintPanel(); return; }
    if (d.calStep && ui.calView === 'day') { ui.day = addDays(ui.day || todayStr(), +d.calStep); ui.month = ui.day.slice(0, 7); paintPanel(); return; }
    if (d.calStep && ui.calView === 'week') { ui.week = addDays(weekStart(), 7 * +d.calStep); ui.month = addDays(ui.week, 3).slice(0, 7); paintPanel(); return; }
    if (d.calStep) { const m = ui.month || todayStr().slice(0, 7), dt = new Date(+m.slice(0, 4), +m.slice(5) - 1, 1);
      if (ui.calView === 'year') dt.setFullYear(dt.getFullYear() + +d.calStep); else dt.setMonth(dt.getMonth() + +d.calStep);
      ui.month = `${dt.getFullYear()}-${pad(dt.getMonth() + 1)}`; paintPanel(); return; }
    if (d.calToday !== undefined) { ui.month = todayStr().slice(0, 7); ui.week = mondayOf(todayStr()); ui.day = todayStr(); ui.wkScroll = null; paintPanel(); return; }
    if (d.calView) { if (d.calView === 'day' && ui.calView !== 'day') { const t = todayStr(), m = ui.month || t.slice(0, 7);
        ui.day = ui.calView === 'week' ? (t >= weekStart() && t <= addDays(weekStart(), 6) ? t : weekStart()) : t.startsWith(m) ? t : `${m}-01`; ui.wkScroll = null; }
      if (d.calView === 'week' && ui.calView === 'day' && ui.day) ui.week = mondayOf(ui.day);
      else if (d.calView === 'week' && ui.calView !== 'week') { const t = todayStr(), m = ui.month || t.slice(0, 7); ui.week = t.startsWith(m) ? mondayOf(t) : mondayOf(`${m}-01`); ui.wkScroll = null; }
      ui.calView = d.calView; paintPanel(); return; }
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
  function newFolder(parentId) {
    const id = uuid(); if (parentId) ui.openFolders[parentId] = true; ui.openFolders[id] = true; ui.renaming = id; ui.renameDraft = null; ui.search = '';
    put(id, 'folder', { name: 'Untitled folder', parentId }); paintTree();
  }
  function undoToast(msg, undo) {
    const el = document.createElement('div'); el.className = 'pl-undo'; el.setAttribute('role', 'status');
    el.innerHTML = `<span>${esc(msg)}</span><button type="button">Undo</button>`; document.body.append(el);
    const kill = setTimeout(() => el.remove(), 7000); el.querySelector('button').onclick = () => { clearTimeout(kill); el.remove(); undo(); };
  }
  /* drag the bottom edge of a time block to change when it ends (15-minute steps) */
  function onResizeStart(e) {
    const h = e.target.closest('[data-resize]'); if (!h || e.button !== 0) return; e.preventDefault(); e.stopPropagation();
    const id = h.dataset.resize, x = get(id), blk = h.closest('.pl-wev'), slot = blk?.parentElement.querySelector('.pl-wk-slot'); if (!x || !blk || !slot) return;
    const hr = slot.getBoundingClientRect().height, st = toMin(x.data.time), en0 = toMin(x.data.end) > st ? toMin(x.data.end) : st + 60, y0 = e.clientY;
    let en = en0; blk.classList.add('resizing'); document.body.classList.add('pl-resizing');
    const label = blk.querySelector('button b');
    const move = ev => { en = Math.max(st + 15, Math.min(24 * 60 - 1, Math.round((en0 + (ev.clientY - y0) / hr * 60) / 15) * 15));
      blk.style.height = `calc(var(--hr) * ${((en - st) / 60).toFixed(3)} - 3px)`; if (label) label.textContent = `${x.data.time}–${fromMin(Math.min(en, 23 * 60 + 59))}`; };
    const up = () => { removeEventListener('mousemove', move); removeEventListener('mouseup', up); document.body.classList.remove('pl-resizing'); blk.classList.remove('resizing');
      if (en !== en0) put(id, 'task', { end: fromMin(Math.min(en, 23 * 60 + 59)) }); };
    addEventListener('mousemove', move); addEventListener('mouseup', up);
  }
  /* calendar keys: D W M Y switch view, T today, ← → move */
  document.addEventListener('keydown', e => onCalKey(e));
  function onCalKey(e) {
    if (!mounted || !root || ui.tab !== 'calendar' || document.querySelector('dialog[open]') || e.ctrlKey || e.metaKey || e.altKey || e.target.closest('input, select, textarea, [contenteditable="true"], .pl-pop')) return;
    const k = e.key.toLowerCase(), v = { d: 'day', w: 'week', m: 'month', y: 'year' }[k];
    const click = sel => { const b = root.querySelector(sel); if (b) { e.preventDefault(); b.click(); } };
    if (v) click(`[data-cal-view="${v}"]`); else if (k === 't') click('[data-cal-today]'); else if (e.key === 'ArrowLeft') click('[data-cal-step="-1"]'); else if (e.key === 'ArrowRight') click('[data-cal-step="1"]');
  }
  /* drag notes and folders into folders (or back to the top), or a to-do onto another day */
  let dragging = null, hoverOpen = null;
  function onDragStart(e) { if (document.body.classList.contains('pl-resizing')) { e.preventDefault(); return; } const n = e.target.closest('[data-drag-note],[data-drag-folder],[data-drag-task]'); if (!n) return;
    dragging = n.dataset.dragNote ? ['note', n.dataset.dragNote] : n.dataset.dragFolder ? ['folder', n.dataset.dragFolder] : ['task', n.dataset.dragTask];
    e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', dragging[1]); setTimeout(() => n.classList.add('pl-dragging'), 0); }
  function dropZone(e) {
    if (dragging[0] === 'task') return e.target.closest('[data-drop-day]');
    const z = e.target.closest('[data-drop-folder]'); if (!z) return null;
    if (dragging[0] === 'folder' && z.dataset.dropFolder && isInside(z.dataset.dropFolder, dragging[1])) return null;
    return z;
  }
  function onDragOver(e) { if (!dragging) return; const z = dropZone(e); root.querySelectorAll('.pl-over').forEach(x => x !== z && x.classList.remove('pl-over')); if (!z) return; e.preventDefault(); z.classList.add('pl-over');
    const fid = z.dataset.dropFolder; /* hovering a closed folder opens it, like a file explorer */
    if (fid && ui.openFolders[fid] === false && hoverOpen?.[0] !== fid) { clearTimeout(hoverOpen?.[1]); hoverOpen = [fid, setTimeout(() => { if (dragging) { ui.openFolders[fid] = true; paintTree(); } }, 650)]; } }
  function onDrop(e) { if (!dragging) return; const [kind, id] = dragging, z = dropZone(e); dragging = null; clearTimeout(hoverOpen?.[1]); hoverOpen = null; root.querySelectorAll('.pl-over').forEach(x => x.classList.remove('pl-over'));
    if (!z) return; e.preventDefault();
    if (kind === 'task') { const patch = { date: z.dataset.dropDay }, x = get(id);
      if ('dropTime' in z.dataset) {
        if (!z.dataset.dropTime) { patch.time = null; patch.end = null; }
        else { const r = z.getBoundingClientRect(), q = Math.max(0, Math.min(3, Math.floor((e.clientY - r.top) / r.height * 4))), st = toMin(z.dataset.dropTime) + q * 15;
          const len = x?.data.time && x.data.end && toMin(x.data.end) > toMin(x.data.time) ? toMin(x.data.end) - toMin(x.data.time) : 60;
          patch.time = fromMin(st); patch.end = fromMin(Math.min(st + len, 23 * 60 + 59)); } }
      put(id, 'task', patch); return; }
    const to = z.dataset.dropFolder || null; if (to) ui.openFolders[to] = true;
    if (kind === 'note') { if (get(id) && noteFolder(get(id)) !== to) put(id, 'note', { folderId: to }); paintTree(); paintNoteMeta(); }
    else if (to !== id && parentOf(id) !== to) { put(id, 'folder', { parentId: to }); paintNoteMeta(); } else paintTree(); }

  document.addEventListener('visibilitychange', () => { if (!mounted) return; if (document.visibilityState === 'hidden') { saveNote(); persistNow(); push(); } else if (uid) pull(); });
  addEventListener('online', () => mounted && uid && push());

  return {
    mount, unmount, get mounted() { return mounted; },
    onAuth: info => { if (mounted) setUser(info?.user?.id || null).then(() => { if (!get(ui.openNoteId)) ui.openNoteId = firstNote(); paint(); }); },
    _debug: { get items() { return items; }, put, reconcileNow, get editor() { return editor; } },
  };
})();
