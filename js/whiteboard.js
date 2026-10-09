/* DEC15 · the class whiteboard (inside the Class board) — like Microsoft Whiteboard, shared live.
   Built on Excalidraw (js/vendor/excalidraw, loaded only when a whiteboard is opened): pens, shapes, arrows,
   text in three fonts (handwriting, normal, code), sticky notes, and a mind-map maker for brainstorming.
   - Every shape is a row in table board_elements (one per shape, with a version number: the newer version wins).
   - Changes and cursors travel live over the private Realtime channel "dec15:wb:<board id>".
   - The teacher always edits. Students can add to the whiteboard only while the teacher has
     "Students can add" switched on (boards.wb_open); the database enforces this too. */
window.DEC15Whiteboard = (() => {
  let lib = null;
  const COLORS = ['#2b776e', '#b0512a', '#7a4a8c', '#3a58a0', '#985c0e', '#3f7a3a', '#a3305a', '#1f6f8b'];
  const colorOf = id => COLORS[Math.abs([...String(id)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7)) % COLORS.length];
  async function load(version) {
    if (lib) return lib;
    const base = location.href.split('#')[0].replace(/[^/]*$/, '');
    window.EXCALIDRAW_ASSET_PATH = base + 'assets/excalidraw/';
    if (!document.querySelector('link[data-excalidraw]')) {
      await new Promise(ok => { const l = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: base + 'js/vendor/excalidraw/excalidraw.css?v=' + version }); l.dataset.excalidraw = '1'; l.onload = l.onerror = ok; document.head.append(l); });
    }
    lib = await import(base + 'js/vendor/excalidraw/excalidraw.js?v=' + version);
    return lib;
  }

  /* ───────── mind maps: an outline becomes a tree of rounded boxes joined by lines (MindNode style) ───────── */
  const BRANCH = [['#e2ecea', '#2b776e'], ['#f6e4d9', '#b0512a'], ['#ece3f1', '#7a4a8c'], ['#e3e9f6', '#3a58a0'], ['#fbf1dc', '#985c0e'], ['#e4efe2', '#3f7a3a']];
  function parseOutline(text) {
    const lines = String(text || '').split('\n').map(l => l.replace(/\t/g, '  ')).filter(l => l.trim());
    if (!lines.length) return null;
    const depthOf = l => Math.floor(l.match(/^ */)[0].length / 2);
    const clean = l => l.trim().replace(/^[-*•]\s+/, '').slice(0, 80);
    const root = { text: clean(lines[0]), kids: [] }, stack = [{ node: root, d: -1 }];
    for (const l of lines.slice(1)) {
      const d = depthOf(l), node = { text: clean(l), kids: [] };
      while (stack.length > 1 && stack[stack.length - 1].d >= d) stack.pop();
      stack[stack.length - 1].node.kids.push(node); stack.push({ node, d });
    }
    return root;
  }
  function mindMapSkeleton(root) {
    const out = [], H = 46, GAPX = 76, GAPY = 20, uid = () => 'mm-' + Math.random().toString(36).slice(2, 11);
    const W = (n, depth) => Math.max(depth ? 110 : 170, Math.min(320, n.text.length * (depth ? 9.5 : 12.5) + 44));
    const leaves = n => n.kids.length ? n.kids.reduce((s, k) => s + leaves(k), 0) : 1;
    const box = (n, left, cy, depth, colors) => {   // n.left / n.right / n.cy describe where the box sits
      n.id = uid(); n.w = W(n, depth); const h = depth ? H : H + 16;
      n.left = left; n.right = left + n.w; n.cy = cy;
      out.push({ type: 'rectangle', id: n.id, x: left, y: cy - h / 2, width: n.w, height: h, roundness: { type: 3 },
        backgroundColor: depth ? colors[0] : '#14293a', strokeColor: depth ? colors[1] : '#14293a', fillStyle: 'solid', strokeWidth: depth === 1 ? 2 : 1, roughness: 1,
        label: { text: n.text, fontSize: depth ? (depth === 1 ? 20 : 17) : 26, fontFamily: 5, strokeColor: depth ? '#14293a' : '#ffffff' } });
    };
    const link = (a, b, side, colors, width) => {   // a curved line from the parent's outer edge to the child's inner edge
      const x0 = side > 0 ? a.right : a.left, y0 = a.cy, x1 = side > 0 ? b.left : b.right, y1 = b.cy, dx = x1 - x0, dy = y1 - y0;
      out.push({ type: 'arrow', x: x0, y: y0, width: Math.abs(dx), height: Math.abs(dy), points: dy ? [[0, 0], [dx * .4, dy * .92], [dx, dy]] : [[0, 0], [dx, 0]],
        start: { id: a.id }, end: { id: b.id }, strokeColor: colors[1], strokeWidth: width, endArrowhead: null, startArrowhead: null, roundness: { type: 2 }, roughness: 1 });
    };
    const place = (n, edge, yTop, depth, side, colors) => {   // one branch, growing right (side 1) or left (side -1)
      const span = leaves(n) * (H + GAPY), w = W(n, depth);
      box(n, side > 0 ? edge : edge - w, yTop + span / 2, depth, colors);
      let y = yTop; const next = side > 0 ? n.right + GAPX : n.left - GAPX;
      for (const k of n.kids) { place(k, next, y, depth + 1, side, colors); y += leaves(k) * (H + GAPY); link(n, k, side, colors, 1.5); }
    };
    const rw = W(root, 0); box(root, -rw / 2, 0, 0, BRANCH[0]);
    const right = root.kids.filter((_, i) => i % 2 === 0), left = root.kids.filter((_, i) => i % 2 === 1);
    for (const [list, side] of [[right, 1], [left, -1]]) {
      let y = -list.reduce((s, k) => s + leaves(k) * (H + GAPY), 0) / 2;
      list.forEach(k => { const colors = BRANCH[(root.kids.indexOf(k) % (BRANCH.length - 1)) + 1];
        place(k, side > 0 ? root.right + GAPX : root.left - GAPX, y, 1, side, colors); y += leaves(k) * (H + GAPY); link(root, k, side, colors, 2.5); });
    }
    return out;
  }

  /* ───────── one whiteboard on the page ───────── */
  async function mount(host, o) {
    /* o: { board, client, uid, name, teacher, canEdit(), toast, esc, version, onToolbar } */
    const L = await load(o.version), { React, createRoot, Excalidraw, CaptureUpdateAction, restoreElements, reconcileElements, convertToExcalidrawElements } = L;
    const c = o.client, boardId = o.board.id, known = new Map(), queue = new Map(), peers = new Map();
    let api = null, editable = !!o.canEdit(), ch = null, ready = false, early = [], persistT = 0, ptrAt = 0, warned = false, destroyed = false;
    const send = (event, payload) => { if (ch && !destroyed) ch.send({ type: 'broadcast', event, payload }).catch?.(() => {}); };
    function merge(remote) {
      if (!api || !remote.length) return;
      const restored = restoreElements(remote, null);
      const next = reconcileElements(api.getSceneElementsIncludingDeleted(), restored, api.getAppState());
      restored.forEach(e => known.set(e.id, Math.max(known.get(e.id) ?? -1, e.version)));
      api.updateScene({ elements: next, captureUpdate: CaptureUpdateAction.NEVER });
    }
    async function persist() {
      clearTimeout(persistT); if (!queue.size) return;
      const rows = [...queue.values()].map(e => ({ board_id: boardId, id: e.id, version: e.version, data: e })); queue.clear();
      const { error } = await c.from('board_elements').upsert(rows, { onConflict: 'board_id,id' });
      if (error && !warned) { warned = true; o.toast(o.teacher ? 'The whiteboard could not be saved. Check your internet.' : 'Your teacher has closed the whiteboard for adding.'); }
    }
    function onChange(elements) {
      if (!ready || !editable) return;
      const changed = elements.filter(e => (known.get(e.id) ?? -1) < e.version);
      if (!changed.length) return;
      changed.forEach(e => { known.set(e.id, e.version); queue.set(e.id, e); });
      send('el', { els: changed });
      clearTimeout(persistT); persistT = setTimeout(persist, 400);
    }
    function onPointer({ pointer, button }) {
      const now = Date.now(); if (now - ptrAt < 45) return; ptrAt = now;
      send('ptr', { id: o.uid, name: o.name, pointer, button });
    }
    const paintPeers = () => { if (!api) return; const now = Date.now(), m = new Map();
      for (const [id, p] of peers) if (now - p.at < 12000) m.set(id, { username: p.name, color: { background: colorOf(id), stroke: colorOf(id) }, pointer: p.pointer, button: p.button, id });
      api.updateScene({ collaborators: m }); };
    const sweep = setInterval(paintPeers, 4000);

    /* live channel first, then the saved shapes, so nothing drawn in between is lost */
    try { await c.realtime.setAuth?.(); } catch (e) { /* older client */ }
    ch = c.channel('dec15:wb:' + boardId, { config: { private: true, broadcast: { self: false } } })
      .on('broadcast', { event: 'el' }, ({ payload }) => { const els = Array.isArray(payload?.els) ? payload.els : []; ready ? merge(els) : early.push(...els); })
      .on('broadcast', { event: 'ptr' }, ({ payload }) => { if (!payload?.id) return; peers.set(payload.id, { ...payload, at: Date.now() }); paintPeers(); })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'board_elements', filter: 'board_id=eq.' + boardId }, p => { if (p.new?.data) (ready ? merge([p.new.data]) : early.push(p.new.data)); });
    await new Promise(res => { let done = false; const t = setTimeout(() => { if (!done) { done = true; res(); } }, 5000);
      ch.subscribe(st => { if (!done && (st === 'SUBSCRIBED' || st === 'CHANNEL_ERROR' || st === 'TIMED_OUT')) { done = true; clearTimeout(t); res(); } }); });
    const { data } = await c.from('board_elements').select('data').eq('board_id', boardId).limit(5000);
    const initial = restoreElements((data || []).map(r => r.data), null);
    initial.forEach(e => known.set(e.id, e.version));

    host.innerHTML = '';
    const root = createRoot(host);
    const render = () => root.render(React.createElement(Excalidraw, {
      excalidrawAPI: a => { api = a; },
      initialData: { elements: initial, scrollToContent: true, appState: { viewBackgroundColor: '#fffdf8', currentItemFontFamily: 5, currentItemStrokeColor: '#14293a', currentItemRoughness: 1, currentItemRoundness: 'round' } },
      viewModeEnabled: !editable, isCollaborating: true, zenModeEnabled: false, gridModeEnabled: false, theme: 'light', name: o.board.title || 'Class whiteboard',
      onChange, onPointerUpdate: onPointer, autoFocus: false, handleKeyboardGlobally: false,
      UIOptions: { canvasActions: { loadScene: false, saveToActiveFile: false, toggleTheme: false, changeViewBackgroundColor: !!o.teacher, clearCanvas: !!o.teacher, export: { saveFileToDisk: true }, saveAsImage: true }, tools: { image: false } },
    }));
    render();
    await new Promise(r => { const t0 = Date.now(); (function wait() { if (api || Date.now() - t0 > 4000) r(); else setTimeout(wait, 30); })(); });
    ready = true; if (early.length) { merge(early); early = []; }

    /* things the page's own toolbar can add */
    const centre = () => { const s = api.getAppState(); return { x: -s.scrollX + s.width / 2 / s.zoom.value, y: -s.scrollY + s.height / 2 / s.zoom.value }; };
    function add(skeleton, select = true, beside = false) {
      if (!api || !editable) return;
      let p = centre(); const have = api.getSceneElements();
      if (beside && have.length) {   // a new diagram goes to the right of what is already on the board
        const [x1, y1, x2, y2] = L.getCommonBounds(have), minX = Math.min(...skeleton.map(e => e.x)), y0 = (y1 + y2) / 2;
        p = { x: x2 + 180 - minX, y: y0 };
      }
      const made = convertToExcalidrawElements(skeleton.map(e => ({ ...e, x: e.x + p.x, y: e.y + p.y })), { regenerateIds: false });
      api.updateScene({ elements: [...api.getSceneElementsIncludingDeleted(), ...made], captureUpdate: CaptureUpdateAction.IMMEDIATELY });
      if (select) api.scrollToContent(made, { fitToContent: made.length > 2, animate: true });
      return made;
    }
    const STICKY = ['#fff3a8', '#ffd6e0', '#d4f1d4', '#d6e6ff', '#ffe0c2'];
    let stickyN = 0;
    const api2 = {
      sticky() { const col = STICKY[stickyN++ % STICKY.length], off = (stickyN % 5) * 18;
        add([{ type: 'rectangle', x: -90 + off, y: -70 + off, width: 180, height: 140, backgroundColor: col, strokeColor: '#c9b458', fillStyle: 'solid', roundness: { type: 3 }, strokeWidth: 1,
          label: { text: o.name ? o.name.split(' ')[0] + ': ' : 'Idea', fontSize: 20, fontFamily: 5, verticalAlign: 'top', textAlign: 'left' } }], false); },
      mindMap(outline) { const tree = parseOutline(outline); if (!tree) return false; add(mindMapSkeleton(tree), true, true); return true; },
      brainstorm(topic) {
        const sk = [{ type: 'ellipse', x: -120, y: -55, width: 240, height: 110, backgroundColor: '#14293a', strokeColor: '#14293a', fillStyle: 'solid', label: { text: topic || 'Our question', fontSize: 24, fontFamily: 5, strokeColor: '#ffffff' } }];
        for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 - Math.PI / 2, x = Math.cos(a) * 330 - 85, y = Math.sin(a) * 230 - 60;
          sk.push({ type: 'rectangle', x, y, width: 170, height: 120, backgroundColor: STICKY[i % STICKY.length], strokeColor: '#c9b458', fillStyle: 'solid', roundness: { type: 3 }, strokeWidth: 1, label: { text: 'Idea ' + (i + 1), fontSize: 20, fontFamily: 5 } }); }
        add(sk, true, true);
      },
      setEditable(on) { if (on === editable) return; editable = on; render(); },
      fit() { api?.scrollToContent(undefined, { fitToContent: true, animate: true }); },
      async destroy() { destroyed = true; clearInterval(sweep); await persist(); try { c.removeChannel(ch); } catch (e) { /* ignore */ } ch = null; root.unmount(); },
      get count() { return api ? api.getSceneElements().length : 0; },
    };
    return api2;
  }
  return { mount, load, parseOutline };
})();
