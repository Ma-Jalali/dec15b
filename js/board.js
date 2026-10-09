/* DEC15 class board — the teacher's whiteboard, live for the whole class.
   The teacher types (with the same blocks as My planner: headings, lists, callouts, tables…) and draws with
   coloured pens. Students see every change a moment later, read-only. Boards are kept, so students can look
   back at earlier ones. Data: table boards (teachers write, the class reads) and class_settings.board_live
   (the board the teacher is showing now). Loaded only on #/board. Needs window.Tiptap and window.DEC15Blocks. */
window.DEC15Board = (() => {
  let ctx = null, root = null, mounted = false, editor = null, blocks = null, ch = null;
  let boards = [], cur = null, live = null, mode = 'write', pen = { c: '#14293a', w: 4 }, saveT = 0, dirty = false, follow = true, wb = null, wbFor = null, myView = {};
  const PENS = [['#14293a', 'Ink'], ['#c0392b', 'Red'], ['#2a8a7d', 'Teal'], ['#3a58a0', 'Blue'], ['#e9a23b', 'Gold'], ['#7a4a8c', 'Plum']];
  const esc = s => ctx.esc(s), icon = (n, c) => ctx.icon(n, c);
  const cloud = () => ctx.getCloud(), db = () => (cloud()?.user && cloud().client) || null, teacher = () => cloud()?.profile?.role === 'teacher';
  const ago = iso => { const s = (Date.now() - Date.parse(iso)) / 1000; return s < 60 ? 'just now' : s < 3600 ? Math.round(s / 60) + ' min ago' : s < 86400 ? Math.round(s / 3600) + ' h ago' : new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }); };

  async function load() {
    const c = db(); if (!c) return paint();
    const [{ data: b }, { data: s }] = await Promise.all([
      c.from('boards').select('id, title, content, sketch, wb_open, view, created_at, updated_at').order('updated_at', { ascending: false }).limit(60),
      c.from('class_settings').select('key, value').eq('key', 'board_live')]);
    boards = b || []; live = s?.[0]?.value || null;
    if (!cur || !boards.some(x => x.id === cur)) cur = (live && boards.some(x => x.id === live) ? live : boards[0]?.id) || null;
    paint();
  }
  function watch() {
    const c = db(); if (!c || ch) return;
    ch = c.channel('dec15-boards').on('postgres_changes', { event: '*', schema: 'public', table: 'boards' }, p => {
      if (p.eventType === 'DELETE') { boards = boards.filter(x => x.id !== p.old?.id); if (cur === p.old?.id) cur = boards[0]?.id || null; paint(); return; }
      const row = p.new; if (!row?.id) return; const i = boards.findIndex(x => x.id === row.id), prev = i >= 0 ? { ...boards[i] } : null;
      if (i >= 0) boards[i] = { ...boards[i], ...row }; else boards.unshift(row);
      boards.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at));
      if (!teacher() && follow && row.id === live) cur = row.id;
      if (row.id === cur && !teacher()) refresh(prev); else paintList();
    }).on('postgres_changes', { event: '*', schema: 'public', table: 'class_settings' }, p => {
      if (p.new?.key !== 'board_live') return; live = p.new.value;
      if (!teacher() && follow && live && boards.some(x => x.id === live)) { const had = cur; cur = live; paint(); if (had !== live) ctx.toast(had ? 'Your teacher is showing a different board.' : 'Your teacher started a new board.'); } else paintList();
    }).subscribe();
  }

  /* ───────── page ───────── */
  const viewOf = b => (b ? (teacher() ? b.view || 'notes' : myView[b.id] || b.view || 'notes') : 'notes');
  function paint() {
    if (!root) return; destroyEditor();
    const b = boards.find(x => x.id === cur), t = teacher(), v = viewOf(b);
    if (!db()) { root.innerHTML = `<div class="bd-empty">${art()}<h1>Class board</h1><p>Sign in to see what your teacher writes on the board.</p><button class="btn" type="button" data-bd-signin>Sign in</button></div>`; return; }
    root.innerHTML = `<div class="bd">
      <div class="bd-head"><div class="bd-title">${t && b ? `<input class="bd-name" data-bd-title value="${esc(b.title)}" maxlength="120" aria-label="Board title">` : `<h1>${esc(b?.title || 'Class board')}</h1>`}
          <span class="bd-live${b && b.id === live ? ' on' : ''}">${b && b.id === live ? '<i></i>Live now' : b ? 'Saved board' : ''}${b ? ` · updated <span data-bd-ago>${esc(ago(b.updated_at))}</span>` : ''}</span></div>
        <div class="bd-actions">${t ? `${b && b.id !== live ? `<button type="button" class="btn btn-sm" data-bd-show>${icon('flag')}Show to the class</button>` : ''}<button type="button" class="btn-quiet btn-sm" data-bd-new>＋ New board</button>${b ? `<button type="button" class="btn-quiet btn-sm danger" data-bd-del>Delete</button>` : ''}`
          : `${b && live && b.id !== live ? `<button type="button" class="btn btn-sm" data-bd-live>Back to the live board</button>` : ''}${b && v === 'notes' ? `<button type="button" class="btn-quiet btn-sm" data-bd-copy>${icon('model')}Copy text</button>` : ''}`}${b && v === 'notes' ? '<button type="button" class="btn-quiet btn-sm" data-bd-print>Print</button>' : ''}</div></div>
      ${b ? `<div class="bd-views" role="tablist" aria-label="Board view"><button type="button" role="tab" data-bd-view="notes" aria-selected="${v === 'notes'}">${icon('model')}Notes</button><button type="button" role="tab" data-bd-view="whiteboard" aria-selected="${v === 'whiteboard'}">${WB_ICON}Whiteboard${b.wb_open ? '<i class="bd-open-dot" title="Students can add"></i>' : ''}</button></div>` : ''}
      ${b && v === 'whiteboard' ? wbBarHTML(b) : ''}
      ${t && b && v === 'notes' ? `<div class="bd-tools" role="toolbar" aria-label="Board tools">
          <div class="bd-seg"><button type="button" data-bd-mode="write" aria-pressed="${mode === 'write'}">${icon('model')}Write</button><button type="button" data-bd-mode="draw" aria-pressed="${mode === 'draw'}">${icon('pen')}Draw</button></div>
          <div class="bd-pens"${mode === 'draw' ? '' : ' hidden'}>${PENS.map(([c, n]) => `<button type="button" class="bd-pen" style="--pc:${c}" data-bd-pen="${c}" aria-label="${n} pen" aria-pressed="${pen.c === c}"></button>`).join('')}
            <span class="bd-sep"></span>${[2, 4, 8].map(w => `<button type="button" class="bd-w" data-bd-w="${w}" aria-label="${w === 2 ? 'Thin' : w === 4 ? 'Medium' : 'Thick'} line" aria-pressed="${pen.w === w}"><i style="--w:${w}px"></i></button>`).join('')}
            <span class="bd-sep"></span><button type="button" class="bd-tool" data-bd-eraser aria-pressed="${pen.c === 'erase'}">Eraser</button><button type="button" class="bd-tool" data-bd-undo>Undo</button><button type="button" class="bd-tool" data-bd-clear>Clear drawing</button></div>
          <span class="bd-hint">${mode === 'write' ? 'Type “/” for blocks: headings, lists, callouts, tables…' : 'Draw with the mouse, a pen or your finger.'}</span></div>` : ''}
      ${b && v === 'whiteboard' ? `<div class="bd-wb" id="bd-wb"><p class="bd-wb-loading">Opening the whiteboard…</p></div>`
        : b ? `<div class="bd-board${mode === 'draw' && t ? ' drawing' : ''}"><div class="bd-paper"><div id="bd-editor"></div><svg class="bd-ink" aria-hidden="true"></svg></div></div>`
        : `<div class="bd-empty">${art()}<h2>${t ? 'Your first board' : 'Nothing on the board yet'}</h2><p>${t ? 'Write notes and draw for the whole class. Everyone signed in sees them live.' : 'When your teacher writes on the board, it appears here straight away.'}</p>${t ? '<button class="btn" type="button" data-bd-new>＋ New board</button>' : ''}</div>`}
      ${boards.length > 1 ? `<section class="bd-list" aria-label="All boards"><h2 class="pl-h">All boards</h2><div class="bd-cards"></div></section>` : ''}
    </div>`;
    paintList(); if (b && v === 'whiteboard') mountWB(b); else if (b) { openEditor(b); drawInk(b.sketch || []); }
  }
  function paintList() {
    const box = root?.querySelector('.bd-cards'); if (!box) return;
    box.innerHTML = boards.map(x => `<button type="button" class="bd-card${x.id === cur ? ' on' : ''}" data-bd-open="${x.id}"><b>${esc(x.title)}</b><small>${x.id === live ? '<i></i>Live · ' : ''}${esc(ago(x.updated_at))}</small></button>`).join('');
    const a = root.querySelector('[data-bd-ago]'), b = boards.find(x => x.id === cur); if (a && b) a.textContent = ago(b.updated_at);
  }
  const art = () => `<svg class="bd-art" viewBox="0 0 220 150" aria-hidden="true"><rect x="22" y="14" width="176" height="104" rx="10" fill="#fff" stroke="#14293a" stroke-width="2"/><path d="M44 40h70M44 58h104M44 76h56" stroke="#c9d3da" stroke-width="5" stroke-linecap="round"/><path d="M128 92c14-18 30-18 44 0" fill="none" stroke="#e0674b" stroke-width="3" stroke-linecap="round"/><path d="M70 118l-14 24M150 118l14 24" stroke="#14293a" stroke-width="2.4" stroke-linecap="round"/><rect x="150" y="30" width="34" height="9" rx="4.5" transform="rotate(-30 167 34)" fill="#e9a23b"/><circle cx="36" cy="132" r="4" fill="#2a8a7d"/></svg>`;

  /* ───────── whiteboard (js/whiteboard.js, Excalidraw) ───────── */
  const WB_ICON = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 12.5c1.5-2.5 3-3.5 4.5-1.5s3 1 5-2.5"/></svg>';
  function wbBarHTML(b) {
    const t = teacher(), can = t || b.wb_open;
    return `<div class="bd-wbbar" role="toolbar" aria-label="Whiteboard">
      ${can ? `<button type="button" class="bd-chip sticky" data-wb="sticky"><i aria-hidden="true"></i>Sticky note</button><button type="button" class="bd-chip" data-wb="mind">${MM_ICON}Mind map</button><button type="button" class="bd-chip" data-wb="brain">${BS_ICON}Brainstorm</button>` : ''}
      <button type="button" class="bd-chip" data-wb="fit">Fit to screen</button>
      <span class="bd-sp"></span>
      ${t ? `<button type="button" class="bd-open${b.wb_open ? ' on' : ''}" data-wb="open" aria-pressed="${!!b.wb_open}"><span class="ap-sw" aria-hidden="true"><i></i></span>Students can add</button>`
        : `<span class="bd-wbnote">${b.wb_open ? '<i class="bd-open-dot"></i>You can add to this whiteboard' : 'Your teacher is drawing. They can let you add.'}</span>`}
    </div>`;
  }
  const MM_ICON = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><rect x="9" y="10" width="6" height="4" rx="1.5"/><rect x="2" y="3" width="5" height="3" rx="1"/><rect x="17" y="3" width="5" height="3" rx="1"/><rect x="2" y="18" width="5" height="3" rx="1"/><rect x="17" y="18" width="5" height="3" rx="1"/><path d="M9 11c-2 0-2-6.5-2-6.5M15 11c2 0 2-6.5 2-6.5M9 13c-2 0-2 6.5-2 6.5M15 13c2 0 2 6.5 2 6.5"/></svg>';
  const BS_ICON = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/></svg>';
  async function mountWB(b) {
    const host = root.querySelector('#bd-wb'); if (!host || wbFor === b.id) return;
    wbFor = b.id;
    try {
      if (!window.DEC15Whiteboard) await new Promise((ok, bad) => { const sc = Object.assign(document.createElement('script'), { src: 'js/whiteboard.js?v=' + (ctx.version || '') }); sc.onload = ok; sc.onerror = bad; document.head.append(sc); });
      const p = cloud()?.profile || {}, made = await window.DEC15Whiteboard.mount(host, { board: b, client: db(), uid: cloud()?.user?.id, name: p.full_name || 'Student', teacher: teacher(),
        canEdit: () => teacher() || !!boards.find(x => x.id === b.id)?.wb_open, toast: ctx.toast, esc, version: ctx.version || '' });
      if (wbFor !== b.id || !root?.contains(host)) { made.destroy(); return; }
      wb = made;
    } catch (e) { console.error(e); wbFor = null; host.innerHTML = '<p class="bd-wb-loading">The whiteboard could not open. Check your internet connection and try again.</p>'; }
  }
  function mindPop(anchor) {
    popover(anchor, `<form class="pl-task-pop bd-mindpop" novalidate><b>${MM_ICON}Make a mind map</b>
      <label>Type the main idea first. Indent with two spaces (or Tab) for each level.<textarea name="o" rows="9" spellcheck="true" autofocus placeholder="Food waste\n  Causes\n    Buying too much\n    Poor storage\n  Effects\n    Greenhouse gases\n  Solutions\n    Plan meals\n    Share leftovers"></textarea></label>
      <div class="pl-pop-actions"><span class="bd-hint">Tip: select a box and press Ctrl/⌘ + → to grow a new branch.</span><button class="pl-btn" type="submit">Draw it</button></div></form>`, p => {
      const f = p.querySelector('form'), ta = f.querySelector('textarea');
      ta.addEventListener('keydown', e => { if (e.key === 'Tab') { e.preventDefault(); const { selectionStart: a, selectionEnd: z } = ta; ta.setRangeText('  ', a, z, 'end'); } });
      f.addEventListener('submit', e => { e.preventDefault(); if (!wb) return; if (wb.mindMap(ta.value || ta.placeholder)) closePop(); });
    });
  }

  /* ───────── text (TipTap) ───────── */
  function openEditor(b) {
    const el = root.querySelector('#bd-editor'), T = window.Tiptap; if (!el || !T) return;
    const t = teacher();
    editor = new T.Editor({ element: el, editable: t, content: window.DEC15Blocks.withTrailingLine(b.content && b.content.type ? b.content : { type: 'doc', content: [{ type: 'paragraph' }] }),
      extensions: [T.StarterKit.configure({ heading: { levels: [1, 2, 3] } }), ...window.DEC15Blocks.extensions(T), T.Underline, T.TextStyle, T.Color, T.Highlight.configure({ multicolor: true }), T.TextAlign.configure({ types: ['heading', 'paragraph'] }), T.TaskList, T.TaskItem.configure({ nested: true }),
        T.Placeholder.configure({ placeholder: t ? 'Write on the board… type “/” for headings, lists, callouts and tables' : '' })],
      editorProps: { attributes: { class: 'pl-doc bd-doc', 'aria-label': 'Class board', role: 'textbox', 'aria-multiline': 'true', 'aria-readonly': String(!t) }, handleKeyDown: (v, e) => !!blocks?.keydown(v, e) },
      onUpdate: () => { if (t) queueSave(); } });
    if (t) blocks = window.DEC15Blocks.attach(editor, root.querySelector('.bd-paper'), { esc, popover, closePop });
    if (t && mode === 'write' && !b.content?.content?.some(n => n.content?.length)) setTimeout(() => editor?.commands.focus('end'), 50);
  }
  function destroyEditor() { blocks?.destroy(); blocks = null; editor?.destroy(); editor = null; if (wb) { wb.destroy(); wb = null; wbFor = null; } }
  function refresh(prev) {   // a student's board follows the teacher's changes
    const b = boards.find(x => x.id === cur); if (!b) { paint(); return; }
    if (prev && (prev.view !== b.view || prev.wb_open !== b.wb_open)) {
      if (prev.view !== b.view) { delete myView[b.id]; paint(); if (b.view === 'whiteboard') ctx.toast('Your teacher opened the whiteboard.'); return; }
      wb?.setEditable(!!b.wb_open); const bar = root.querySelector('.bd-wbbar'); if (bar) bar.outerHTML = wbBarHTML(b);
      const tab = root.querySelector('[data-bd-view="whiteboard"]'); if (tab) tab.innerHTML = `${WB_ICON}Whiteboard${b.wb_open ? '<i class="bd-open-dot" title="Students can add"></i>' : ''}`;
      ctx.toast(b.wb_open ? 'You can add to the whiteboard now.' : 'Your teacher closed the whiteboard for adding.'); return; }
    if (viewOf(b) === 'whiteboard') { paintList(); return; }
    if (!root?.querySelector('.bd-paper')) { paint(); return; }
    if (editor && b.content?.type) editor.commands.setContent(b.content, false);
    drawInk(b.sketch || []); paintList();
    const live_ = root.querySelector('.bd-live'); live_?.classList.add('pulse'); setTimeout(() => live_?.classList.remove('pulse'), 900);
  }

  /* ───────── drawing ───────── */
  let strokes = [], drawingNow = null;
  const svgNS = 'http://www.w3.org/2000/svg';
  function pathD(p) { if (!p.length) return ''; let d = `M${p[0][0]} ${p[0][1]}`; for (let i = 1; i < p.length; i++) { const [x0, y0] = p[i - 1], [x1, y1] = p[i]; d += ` Q${x0} ${y0} ${(x0 + x1) / 2} ${(y0 + y1) / 2}`; } return d + (p.length === 1 ? ` l0.01 0` : ''); }
  function drawInk(list) {
    strokes = Array.isArray(list) ? list.map(s => ({ ...s, p: [...s.p] })) : [];
    const svg = root?.querySelector('.bd-ink'), paper = root?.querySelector('.bd-paper'); if (!svg || !paper) return;
    const w = paper.clientWidth || 1000, h = Math.max(paper.scrollHeight, paper.clientHeight), k = w / 1000;
    svg.setAttribute('viewBox', `0 0 1000 ${Math.round(h / k)}`); svg.style.height = h + 'px';
    svg.innerHTML = strokes.map(s => `<path d="${pathD(s.p)}" stroke="${esc(s.c)}" stroke-width="${s.w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`).join('');
  }
  function point(e) { const svg = root.querySelector('.bd-ink'), r = svg.getBoundingClientRect(), k = 1000 / r.width; return [Math.round((e.clientX - r.left) * k * 10) / 10, Math.round((e.clientY - r.top) * k * 10) / 10]; }
  function onDown(e) {
    if (!teacher() || mode !== 'draw' || !e.target.closest('.bd-ink')) return; e.preventDefault();
    const svg = root.querySelector('.bd-ink'); svg.setPointerCapture?.(e.pointerId);
    if (pen.c === 'erase') { eraseAt(point(e)); drawingNow = { erase: true }; return; }
    drawingNow = { c: pen.c, w: pen.w, p: [point(e)] };
    const el = document.createElementNS(svgNS, 'path'); el.setAttribute('stroke', pen.c); el.setAttribute('stroke-width', pen.w); el.setAttribute('fill', 'none'); el.setAttribute('stroke-linecap', 'round'); el.setAttribute('stroke-linejoin', 'round');
    svg.append(el); drawingNow.el = el; el.setAttribute('d', pathD(drawingNow.p));
  }
  function onMove(e) {
    if (!drawingNow) return;
    if (drawingNow.erase) { eraseAt(point(e)); return; }
    const p = point(e), last = drawingNow.p[drawingNow.p.length - 1]; if (Math.hypot(p[0] - last[0], p[1] - last[1]) < 1.6) return;
    drawingNow.p.push(p); drawingNow.el.setAttribute('d', pathD(drawingNow.p));
  }
  function onUp() { if (!drawingNow) return; if (!drawingNow.erase && drawingNow.p.length) strokes.push({ c: drawingNow.c, w: drawingNow.w, p: drawingNow.p }); drawingNow = null; queueSave(); }
  function eraseAt([x, y]) { const before = strokes.length; strokes = strokes.filter(s => !s.p.some(([a, b]) => Math.hypot(a - x, b - y) < 10 + s.w)); if (strokes.length !== before) drawInk(strokes); }

  /* ───────── saving (teacher) ───────── */
  function queueSave() { dirty = true; clearTimeout(saveT); saveT = setTimeout(save, 500); }
  async function save() {
    clearTimeout(saveT); if (!dirty || !teacher()) return; dirty = false;
    const b = boards.find(x => x.id === cur); if (!b) return;
    const content = editor ? editor.getJSON() : b.content, now = new Date().toISOString(), sketch = strokes.slice(-600);
    Object.assign(b, { content, sketch, updated_at: now });
    const { error } = await db().from('boards').update({ content, sketch, updated_at: now }).eq('id', b.id);
    if (error) { dirty = true; ctx.toast('The board could not be saved. Check your internet.'); }
    paintList();
  }
  async function newBoard() {
    const c = db(); if (!c || !teacher()) return;
    const n = boards.length + 1, title = `Board ${n} · ${new Date().toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' })}`;
    const { data, error } = await c.from('boards').insert({ title, content: { type: 'doc', content: [{ type: 'paragraph' }] }, sketch: [] }).select().single();
    if (error) { ctx.toast('A new board could not be made.'); return; }
    boards.unshift(data); cur = data.id; mode = 'write'; await showLive(data.id); paint();
  }
  async function showLive(id) {
    live = id; const { error } = await db().from('class_settings').upsert({ key: 'board_live', value: id, updated_at: new Date().toISOString() });
    if (error) ctx.toast('Could not show this board to the class.'); else ctx.toast('The class now sees this board.');
  }

  /* ───────── a small popover for the "/" menu's questions ───────── */
  let pop = null;
  function closePop() { pop?.remove(); pop = null; }
  function popover(anchor, html, wire) {
    closePop(); pop = document.createElement('div'); pop.className = 'pl-pop'; pop.innerHTML = html; document.body.append(pop);
    const r = anchor.getBoundingClientRect(); pop.style.left = Math.min(Math.max(8, r.left), innerWidth - pop.offsetWidth - 8) + 'px'; pop.style.top = Math.min(r.bottom + 6, innerHeight - pop.offsetHeight - 8) + 'px';
    wire?.(pop); setTimeout(() => (pop?.querySelector('[autofocus]') || pop?.querySelector('input,button'))?.focus(), 0);
  }
  document.addEventListener('mousedown', e => { if (pop && !pop.contains(e.target)) closePop(); });

  /* ───────── events ───────── */
  function onClick(e) {
    const t = e.target.closest('button'); if (!t) return; const d = t.dataset;
    if (d.bdSignin !== undefined) { ctx.signIn(); return; }
    if (d.bdView) { const b = boards.find(x => x.id === cur); if (!b) return; save();
      if (teacher()) { b.view = d.bdView; db()?.from('boards').update({ view: d.bdView }).eq('id', b.id).then(({ error }) => error && ctx.toast('Could not switch the class view.')); } else myView[b.id] = d.bdView;
      paint(); return; }
    if (d.wb) { const b = boards.find(x => x.id === cur); if (!b) return;
      if (d.wb === 'open' && teacher()) { b.wb_open = !b.wb_open; wb?.setEditable(true); db().from('boards').update({ wb_open: b.wb_open }).eq('id', b.id).then(({ error }) => { if (error) ctx.toast('Could not change it. Check your internet.'); });
        const bar = root.querySelector('.bd-wbbar'); if (bar) bar.outerHTML = wbBarHTML(b); ctx.toast(b.wb_open ? 'Students can now add to the whiteboard.' : 'Only you can change the whiteboard now.'); return; }
      if (!wb) return;
      if (d.wb === 'sticky') wb.sticky(); if (d.wb === 'brain') wb.brainstorm(b.title?.split(' · ')[0]); if (d.wb === 'fit') wb.fit(); if (d.wb === 'mind') mindPop(t);
      return; }
    if (d.bdNew !== undefined) { save(); newBoard(); return; }
    if (d.bdOpen) { save(); cur = d.bdOpen; follow = d.bdOpen === live; paint(); return; }
    if (d.bdLive !== undefined) { cur = live; follow = true; paint(); return; }
    if (d.bdShow !== undefined) { save(); showLive(cur).then(paint); return; }
    if (d.bdMode) { save(); mode = d.bdMode; paint(); return; }
    if (d.bdPen) { pen.c = d.bdPen; root.querySelectorAll('[data-bd-pen],[data-bd-eraser]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.bdPen === pen.c))); return; }
    if (d.bdW) { pen.w = +d.bdW; if (pen.c === 'erase') pen.c = '#14293a'; root.querySelectorAll('[data-bd-w]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.bdW === pen.w))); return; }
    if (d.bdEraser !== undefined) { pen.c = 'erase'; root.querySelectorAll('[data-bd-pen]').forEach(b => b.setAttribute('aria-pressed', 'false')); t.setAttribute('aria-pressed', 'true'); return; }
    if (d.bdUndo !== undefined) { strokes.pop(); drawInk(strokes); queueSave(); return; }
    if (d.bdClear !== undefined) { if (!confirm('Clear the whole drawing on this board?')) return; strokes = []; drawInk(strokes); queueSave(); return; }
    if (d.bdDel !== undefined) { if (!confirm('Delete this board for everyone?')) return; db().from('boards').delete().eq('id', cur).then(({ error }) => { if (error) ctx.toast('Could not delete.'); else { boards = boards.filter(x => x.id !== cur); cur = boards[0]?.id || null; paint(); } }); return; }
    if (d.bdCopy !== undefined) { navigator.clipboard?.writeText(editor?.getText({ blockSeparator: '\n' }) || '').then(() => ctx.toast('Copied. Paste it into My planner or your notes.')); return; }
    if (d.bdPrint !== undefined) { window.print(); return; }
  }
  function onInput(e) { if (e.target.matches('[data-bd-title]')) { const b = boards.find(x => x.id === cur); if (!b) return; b.title = e.target.value.slice(0, 120); clearTimeout(onInput.t); onInput.t = setTimeout(() => db()?.from('boards').update({ title: b.title || 'Board' }).eq('id', b.id).then(paintList), 500); } }
  const onResize = () => { const b = boards.find(x => x.id === cur); if (b && root) drawInk(strokes); };

  function mount(el, context) {
    ctx = context; root = el; mounted = true; root.className = 'bd-root';
    root.addEventListener('click', onClick); root.addEventListener('input', onInput);
    root.addEventListener('pointerdown', onDown); root.addEventListener('pointermove', onMove); root.addEventListener('pointerup', onUp); root.addEventListener('pointercancel', onUp);
    addEventListener('resize', onResize);
    root.innerHTML = '<p class="planner-loading">Opening the class board…</p>';
    load().then(watch);
  }
  function unmount() {
    if (!mounted) return; save(); destroyEditor(); closePop(); mounted = false;
    try { if (ch) cloud()?.client?.removeChannel(ch); } catch (e) { /* ignore */ } ch = null;
    removeEventListener('resize', onResize); root = null;
  }
  return { mount, unmount, get mounted() { return mounted; }, reload: () => { if (mounted) { try { if (ch) cloud()?.client?.removeChannel(ch); } catch (e) { /* ignore */ } ch = null; load().then(watch); } } };
})();
