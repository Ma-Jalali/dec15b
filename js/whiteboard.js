/* DEC15 · the class whiteboard (inside the Class board) — like Microsoft Whiteboard, shared live.
   Built on Excalidraw (js/vendor/excalidraw, loaded only when a whiteboard is opened): pens, shapes, arrows,
   text in three fonts (handwriting, normal, code), sticky notes (Freeform style: flat colour, no outline, corners that
   lift off the board) and mind maps you grow like in Miro: select an idea, Tab = new idea to the right, Enter = new idea
   below, Delete = remove the idea and its branch. The "+" handles beside a selected idea do the same with the mouse.
   Mind maps arrange themselves (no branch overlaps another); drag an idea and its whole branch comes with it.
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

  /* ───────── sticky notes: flat Freeform colours, square corners, no outline ─────────
     The shadow is one soft picture (drawn once in a canvas, kept under the note as a locked image that follows it):
     a faint haze down the sides, and under the bottom edge a shadow that is deepest at the two corners and almost
     gone in the middle, as if the corners of the paper lift a little off the board. */
  const STICKIES = [['Yellow', '#fddf6d'], ['Coral', '#ff7a6e'], ['Violet', '#e58bf7'], ['Orange', '#fdae36'], ['Green', '#86dc95'], ['Sky', '#66d6fb']];
  const uid = p => p + '-' + Math.random().toString(36).slice(2, 11);
  const INK = '#1d2730';
  const SHADOW_FILE = 'dec15-sticky-shadow-3', SH = { base: 400, l: 44, t: 30, r: 44, b: 70 };   // the picture: a 400px note plus room round it
  let shadowURL = '';
  function shadowPicture() {
    if (shadowURL) return shadowURL;
    const { base: B, l, t, r, b } = SH, cv = document.createElement('canvas'), k = 2;
    cv.width = (B + l + r) * k; cv.height = (B + t + b) * k;
    const g = cv.getContext('2d'); g.scale(k, k); g.translate(l, t);
    const FAR = 4000, cast = (blur, color, dy, draw) => {   // draw a shape far off the canvas so only its blurred shadow lands here
      g.save(); g.shadowColor = color; g.shadowBlur = blur * k; g.shadowOffsetX = FAR * k; g.shadowOffsetY = dy * k;
      g.translate(-FAR, 0); g.beginPath(); draw(); g.fillStyle = '#000'; g.fill(); g.restore(); };
    cast(34, 'rgba(46, 36, 14, .22)', 10, () => g.rect(4, 36, B - 8, B - 40));                 // the soft haze down both sides
    cast(3, 'rgba(46, 36, 14, .10)', 1, () => g.rect(0, 2, B, B - 2));                           // a crisp contact line close to the edges
    cast(14, 'rgba(38, 28, 8, .38)', 0, () => {                                                // the lifted corners: deep at each corner, thin in the middle
      g.moveTo(10, B - 30); g.lineTo(2, B + 19); g.quadraticCurveTo(B / 2, B - 12, B - 2, B + 19); g.lineTo(B - 10, B - 30); g.closePath(); });
    return (shadowURL = cv.toDataURL('image/png'));
  }
  const shadowFile = () => ({ id: SHADOW_FILE, dataURL: shadowPicture(), mimeType: 'image/png', created: 1 });
  const shadowBox = n => { const sx = n.width / SH.base, sy = n.height / SH.base;
    return { x: n.x - SH.l * sx, y: n.y - SH.t * sy, width: n.width + (SH.l + SH.r) * sx, height: n.height + (SH.t + SH.b) * sy }; };
  const shadowSkeleton = n => ({ type: 'image', id: 'shd-' + n.id, fileId: SHADOW_FILE, status: 'saved', ...shadowBox(n), locked: true, customData: { shadowOf: n.id, shadow: 'soft' } });
  function stickySkeleton(x, y, color, text, size = 200) {
    const id = uid('st');
    return [shadowSkeleton({ id, x, y, width: size, height: size }),
      { type: 'rectangle', id, x, y, width: size, height: size, backgroundColor: color, strokeColor: 'transparent', fillStyle: 'solid', strokeWidth: 1, roughness: 0, roundness: null,
        customData: { sticky: 1 }, label: { text: text || ' ', fontSize: 22, fontFamily: 6, textAlign: 'center', verticalAlign: 'middle', strokeColor: INK } }];
  }

  /* ───────── mind maps: an outline becomes a tree of rounded boxes joined by lines (MindNode style) ───────── */
  const BRANCH = [['#e2ecea', '#2b776e'], ['#ffe9c7', '#d98a12'], ['#f3dcf8', '#a046b8'], ['#d9f2fd', '#1f8fbf'], ['#ffe0dc', '#d9473b'], ['#dcf5e1', '#2f9a4e']];
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
  function nodeSkeleton({ id, x, y, width, height, depth, colors, text, mm }) {   // one idea: a clean rounded box (no hand-drawn wobble)
    return { type: 'rectangle', id, x, y, width, height, roundness: { type: 3 }, customData: { mm },
      backgroundColor: depth ? colors[0] : '#14293a', strokeColor: depth ? colors[1] : '#14293a', fillStyle: 'solid', strokeWidth: depth === 1 ? 2 : 1.5, roughness: 0,
      label: { text: text || ' ', fontSize: depth ? (depth === 1 ? 20 : 17) : 26, fontFamily: 6, strokeColor: depth ? INK : '#ffffff' } };
  }
  function linkSkeleton(a, b, side, colors, width) {   // a curved line from the parent's outer edge to the child's inner edge
    const x0 = side > 0 ? a.right : a.left, y0 = a.cy, x1 = side > 0 ? b.left : b.right, y1 = b.cy, dx = x1 - x0, dy = y1 - y0;
    return { type: 'arrow', x: x0, y: y0, width: Math.abs(dx), height: Math.abs(dy), points: dy ? [[0, 0], [dx * .4, dy * .92], [dx, dy]] : [[0, 0], [dx, 0]],
      start: { id: a.id }, end: { id: b.id }, strokeColor: colors[1], strokeWidth: width, endArrowhead: null, startArrowhead: null, roundness: { type: 2 }, roughness: 0, customData: { mmLink: 1 } };
  }
  function mindMapSkeleton(root) {
    const out = [], H = 46, GAPX = 76, GAPY = 20;
    const W = (n, depth) => Math.max(depth ? 110 : 170, Math.min(320, n.text.length * (depth ? 9.5 : 12.5) + 44));
    const leaves = n => n.kids.length ? n.kids.reduce((s, k) => s + leaves(k), 0) : 1;
    let rootId = null;
    const box = (n, left, cy, depth, colors, meta) => {   // n.left / n.right / n.cy describe where the box sits
      n.id = uid('mm'); n.w = W(n, depth); const h = depth ? H : H + 16;
      n.left = left; n.right = left + n.w; n.cy = cy; if (!depth) rootId = n.id;
      out.push(nodeSkeleton({ id: n.id, x: left, y: cy - h / 2, width: n.w, height: h, depth, colors, text: n.text,
        mm: { root: rootId, parent: meta.parent || null, side: meta.side || 0, branch: meta.branch || 0, depth, ord: meta.ord ?? 0 } }));
    };
    const link = (a, b, side, colors, width) => { out.push(linkSkeleton(a, b, side, colors, width)); };
    const place = (n, edge, yTop, depth, side, colors, parent, branch) => {   // one branch, growing right (side 1) or left (side -1)
      const span = leaves(n) * (H + GAPY), w = W(n, depth);
      box(n, side > 0 ? edge : edge - w, yTop + span / 2, depth, colors, { parent: parent.id, side, branch, ord: parent.kids.indexOf(n) });
      let y = yTop; const next = side > 0 ? n.right + GAPX : n.left - GAPX;
      for (const k of n.kids) { place(k, next, y, depth + 1, side, colors, n, branch); y += leaves(k) * (H + GAPY); link(n, k, side, colors, 2); }
    };
    const rw = W(root, 0); box(root, -rw / 2, 0, 0, BRANCH[0], {});
    const right = root.kids.filter((_, i) => i % 2 === 0), left = root.kids.filter((_, i) => i % 2 === 1);
    for (const [list, side] of [[right, 1], [left, -1]]) {
      let y = -list.reduce((s, k) => s + leaves(k) * (H + GAPY), 0) / 2;
      list.forEach(k => { const b = (root.kids.indexOf(k) % (BRANCH.length - 1)) + 1, colors = BRANCH[b];
        place(k, side > 0 ? root.right + GAPX : root.left - GAPX, y, 1, side, colors, root, b); y += leaves(k) * (H + GAPY); link(root, k, side, colors, 3); });
    }
    return out;
  }

  /* ───────── one whiteboard on the page ───────── */
  async function mount(host, o) {
    /* o: { board, client, uid, name, teacher, canEdit(), toast, esc, version, stickyColor(), stickyName(), onSelect(node|null) } */
    const L = await load(o.version), { React, createRoot, Excalidraw, CaptureUpdateAction, restoreElements, reconcileElements, convertToExcalidrawElements, newElementWith, sceneCoordsToViewportCoords } = L;
    const c = o.client, boardId = o.board.id, known = new Map(), queue = new Map(), peers = new Map();
    let api = null, editable = !!o.canEdit(), ch = null, ready = false, early = [], persistT = 0, ptrAt = 0, warned = false, destroyed = false, lastTyping = 0;
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
    function onChange(elements, appState) {
      if (appState?.editingTextElement) lastTyping = Date.now();
      if (ready && api) { paintHandles(appState); syncShadows(); tidy(); }
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
      initialData: { elements: initial, files: { [SHADOW_FILE]: shadowFile() }, scrollToContent: true, appState: { viewBackgroundColor: '#fffdf8', currentItemFontFamily: 6, currentItemStrokeColor: '#14293a', currentItemRoughness: 0, currentItemRoundness: 'round' } },
      viewModeEnabled: !editable, isCollaborating: true, zenModeEnabled: false, gridModeEnabled: false, theme: 'light', name: o.board.title || 'Class whiteboard',
      onChange, onPointerUpdate: onPointer, autoFocus: false, handleKeyboardGlobally: false,
      UIOptions: { canvasActions: { loadScene: false, saveToActiveFile: false, toggleTheme: false, changeViewBackgroundColor: !!o.teacher, clearCanvas: !!o.teacher, export: { saveFileToDisk: true }, saveAsImage: true }, tools: { image: false } },
    }));
    render();
    await new Promise(r => { const t0 = Date.now(); (function wait() { if (api || Date.now() - t0 > 4000) r(); else setTimeout(wait, 30); })(); });
    api?.addFiles([shadowFile()]);


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
    const byId = id => api.getSceneElements().find(e => e.id === id);
    const replace = (changed, added = [], select) => {   // put new versions of some shapes (and new shapes) on the board in one step
      const map = new Map(changed.map(e => [e.id, e]));
      api.updateScene({ elements: [...api.getSceneElementsIncludingDeleted().map(e => map.get(e.id) || e), ...added], captureUpdate: CaptureUpdateAction.IMMEDIATELY,
        ...(select ? { appState: { selectedElementIds: { [select]: true }, selectedGroupIds: {}, editingGroupId: null } } : {}) });
    };

    /* sticky notes keep their shadows: the locked shadow picture follows its note when it moves, grows or is deleted.
       Notes made before v3.7 (two flat shadow shapes) are given the new shadow the first time the board opens. */
    let syncing = false;
    function syncShadows() {
      if (syncing || !editable) return;
      const all = api.getSceneElementsIncludingDeleted(), byIdAll = new Map(all.map(e => [e.id, e])), fix = [], need = new Map();
      for (const sh of all) {
        const of = sh.customData?.shadowOf; if (!of) continue;
        const n = byIdAll.get(of);
        if (!n || n.isDeleted || sh.customData.shadow !== 'soft') { if (!sh.isDeleted) fix.push(newElementWith(sh, { isDeleted: true })); continue; }
        const w = shadowBox(n);
        if (Math.abs(sh.x - w.x) > .5 || Math.abs(sh.y - w.y) > .5 || Math.abs(sh.width - w.width) > .5 || Math.abs(sh.height - w.height) > .5 || sh.angle !== n.angle || sh.isDeleted)
          fix.push(newElementWith(sh, { ...w, angle: n.angle, isDeleted: false }));
      }
      for (const n of all) if (n.customData?.sticky && !n.isDeleted && !byIdAll.has('shd-' + n.id))
        need.set(n.id, convertToExcalidrawElements([shadowSkeleton(n)], { regenerateIds: false })[0]);
      if (!fix.length && !need.size) return;
      syncing = true; const map = new Map(fix.map(e => [e.id, e])), next = [];
      for (const e of all) { if (need.has(e.id)) next.push(need.get(e.id)); next.push(map.get(e.id) || e); }   // a new shadow goes just under its note
      api.updateScene({ elements: next, captureUpdate: CaptureUpdateAction.NEVER });
      syncing = false;
    }

    /* ───────── mind maps you grow on the board ───────── */
    const isNode = e => !!e && !e.isDeleted && !!e.customData?.mm;
    function selectedNode(appState = api.getAppState()) {
      const ids = Object.keys(appState.selectedElementIds || {}).filter(k => appState.selectedElementIds[k]);
      if (ids.length !== 1 && ids.length !== 2) return null;
      let e = byId(ids[0]); if (e?.type === 'text' && e.containerId) e = byId(e.containerId);
      if (ids.length === 2) { const o2 = byId(ids[1]); if (!(o2?.type === 'text' && o2.containerId === e?.id) && !(e?.type === 'text')) return null; }
      return isNode(e) ? e : null;
    }
    const kidsOf = id => api.getSceneElements().filter(e => isNode(e) && e.customData.mm.parent === id);
    const boxOf = e => ({ id: e.id, left: e.x, right: e.x + e.width, cy: e.y + e.height / 2 });

    /* Automatic layout, like Miro: each idea sits to the side of its parent, and the ideas under one parent are stacked
       so that no branch ever overlaps another. When an idea is moved by hand, that move is kept as its own nudge
       (mm.ox / mm.oy) and everything growing from it moves with it, live while dragging.
       mm.lx / mm.ly remember where the layout last put an idea, so a hand move can be told apart from a layout move. */
    const GX = 72, GX0 = 84, GY = 18;
    let tidying = false, ptrDown = false;
    const near = (a, b) => a != null && Math.abs(a - b) < .5;
    function tidy(live = ptrDown) {
      if (!api || !editable || tidying) return;
      const st = api.getAppState(); if (st.editingTextElement || st.newElement || st.multiElement || st.resizingElement) return;
      const all = api.getSceneElementsIncludingDeleted(), live_ = all.filter(e => !e.isDeleted), byIdM = new Map(live_.map(e => [e.id, e]));
      const nodes = live_.filter(isNode); if (!nodes.length) return;
      const kids = new Map(), roots = [];
      for (const n of nodes) { const p = n.customData.mm.parent; if (p && isNode(byIdM.get(p))) { if (!kids.has(p)) kids.set(p, []); kids.get(p).push(n); } else roots.push(n); }
      const ordered = list => list.slice().sort((a, b) => (a.customData.mm.ord ?? 1e9) - (b.customData.mm.ord ?? 1e9) || a.y - b.y);
      const spans = new Map(), span = n => {
        if (spans.has(n.id)) return spans.get(n.id);
        const ks = kids.get(n.id) || [], s = Math.max(n.height, ks.reduce((t, k) => t + span(k), 0) + GY * Math.max(0, ks.length - 1));
        spans.set(n.id, s); return s; };
      const out = new Map(), pos = new Map();   // out: id -> new version · pos: id -> where each idea ends up
      const put = (n, x, y, mm) => {
        pos.set(n.id, { x, y, width: n.width, height: n.height, side: mm.side });
        const moved = !near(n.x, x) || !near(n.y, y), m0 = n.customData.mm, mmChanged = Object.keys(mm).some(k => typeof mm[k] === 'number' ? !near(m0[k], mm[k]) : m0[k] !== mm[k]);
        if (!moved && (live || !mmChanged)) return;
        out.set(n.id, newElementWith(n, { x, y, customData: { ...n.customData, mm: { ...m0, ...mm } } }));
        if (moved) for (const b of n.boundElements || []) { const t = b.type === 'text' && byIdM.get(b.id);   // the idea's words travel with it
          if (t) out.set(t.id, newElementWith(t, { x: t.x + x - n.x, y: t.y + y - n.y })); }
      };
      const lay = (n, ax, ay, side, extra) => {   // ax, ay: where the layout wants this idea
        const m = n.customData.mm; let ox = m.ox || 0, oy = m.oy || 0;
        if (m.lx != null && (!near(n.x, m.lx) || !near(n.y, m.ly))) { ox += n.x - m.lx; oy += n.y - m.ly; }   // moved by hand: keep it as a nudge
        if (Math.abs(ox) < .5 && Math.abs(oy) < .5) ox = oy = 0;
        const x = ax + ox, y = ay + oy;
        put(n, x, y, { ox, oy, lx: x, ly: y, side, ...extra });
        layKids(n, x, y, side);
      };
      const layKids = (n, x, y, side) => {
        const ks = ordered(kids.get(n.id) || []); if (!ks.length) return;
        const needOrd = ks.some(k => k.customData.mm.ord == null);
        const groups = side ? [[side, ks]] : [[1, ks.filter(k => (k.customData.mm.side || 1) > 0)], [-1, ks.filter(k => k.customData.mm.side < 0)]];
        for (const [s, list] of groups) {
          if (!list.length) continue;
          let top = y + n.height / 2 - (list.reduce((t, k) => t + span(k), 0) + GY * (list.length - 1)) / 2;
          for (const k of list) {
            const sp = span(k), gap = side ? GX : GX0, kx = s > 0 ? x + n.width + gap : x - gap - k.width;
            lay(k, kx, top + sp / 2 - k.height / 2, s, needOrd ? { ord: ks.indexOf(k) } : {});
            top += sp + GY;
          }
        }
      };
      for (const r of roots) { pos.set(r.id, { x: r.x, y: r.y, width: r.width, height: r.height, side: 0 }); layKids(r, r.x, r.y, 0); }
      /* the joining lines: from the parent's outer edge to the child's inner edge, a gentle curve */
      for (const e of live_) {
        if (e.type !== 'arrow' || !e.customData?.mmLink) continue;
        const a = pos.get(e.startBinding?.elementId), b = pos.get(e.endBinding?.elementId); if (!a || !b) continue;
        const sd = b.side || (b.x >= a.x ? 1 : -1), x0 = sd > 0 ? a.x + a.width : a.x, y0 = a.y + a.height / 2, x1 = sd > 0 ? b.x : b.x + b.width, y1 = b.y + b.height / 2, dx = x1 - x0, dy = y1 - y0;
        const pts = Math.abs(dy) > .5 ? [[0, 0], [dx * .4, dy * .92], [dx, dy]] : [[0, 0], [dx, 0]], last = e.points[e.points.length - 1];
        if (near(e.x, x0) && near(e.y, y0) && e.points.length === pts.length && near(last[0], dx) && near(last[1], dy)) continue;
        out.set(e.id, newElementWith(e, { x: x0, y: y0, width: Math.abs(dx), height: Math.abs(dy), points: pts }));
      }
      if (!out.size) return;
      tidying = true;
      try { api.updateScene({ elements: all.map(e => out.get(e.id) || e), captureUpdate: CaptureUpdateAction.NEVER }); } finally { tidying = false; }
    }
    host.addEventListener('pointerdown', () => { ptrDown = true; }, true);
    const ptrUp = () => { if (!ptrDown) return; ptrDown = false; setTimeout(() => tidy(false), 0); };
    window.addEventListener('pointerup', ptrUp, true); window.addEventListener('pointercancel', ptrUp, true);

    function growMind(node, kind) {   // kind: 'child' (Tab) or 'sibling' (Enter) — the layout then finds it a free place
      if (!api || !editable || !node) return;
      tidy(false); node = byId(node.id); if (!isNode(node)) return;
      const m = node.customData.mm, parent = kind === 'sibling' && m.parent ? byId(m.parent) : node;
      if (!isNode(parent)) return;
      const pm = parent.customData.mm, depth = (pm.depth || 0) + 1, sibs = kidsOf(parent.id);
      let side = pm.side, branch = pm.branch, ord;
      if (!pm.parent) {   // a new main branch: the side with fewer ideas, the next colour
        const r = sibs.filter(k => (k.customData.mm.side || 1) > 0).length, l = sibs.length - r;
        side = kind === 'sibling' ? m.side || 1 : (r <= l ? 1 : -1);
        branch = (sibs.length % (BRANCH.length - 1)) + 1;
      }
      if (kind === 'sibling' && m.parent) {   // straight after this idea, before the next one
        const after = sibs.map(k => k.customData.mm.ord ?? 0).filter(o => o > (m.ord ?? 0));
        ord = after.length ? ((m.ord ?? 0) + Math.min(...after)) / 2 : (m.ord ?? 0) + 1;
      } else ord = sibs.length ? Math.max(...sibs.map(k => k.customData.mm.ord ?? 0)) + 1 : 0;
      const colors = BRANCH[branch] || BRANCH[1], w = 150, h = 46;
      const x = side > 0 ? parent.x + parent.width + GX : parent.x - GX - w, y = kind === 'sibling' ? node.y + node.height + GY : parent.y + parent.height / 2 - h / 2, cy = y + h / 2;
      const id = uid('mm');
      const made = convertToExcalidrawElements([nodeSkeleton({ id, x, y, width: w, height: h, depth, colors, text: '', mm: { root: pm.root || parent.id, parent: parent.id, side, branch, depth, ord } })], { regenerateIds: false });
      const child = made.find(e => e.id === id);
      const [line] = convertToExcalidrawElements([linkSkeleton(boxOf(parent), { left: x, right: x + w, cy }, side, colors, depth === 1 ? 3 : 2)].map(e => { const { start, end, ...rest } = e; return rest; }));
      const bind = elId => ({ elementId: elId, focus: 0, gap: 1 });
      const link = newElementWith(line, { startBinding: bind(parent.id), endBinding: bind(id) });
      const childB = newElementWith(child, { boundElements: [...(child.boundElements || []), { id: link.id, type: 'arrow' }] });
      const parentB = newElementWith(parent, { boundElements: [...(parent.boundElements || []), { id: link.id, type: 'arrow' }] });
      replace([parentB], [link, childB, ...made.filter(e => e.id !== id)], id);
      tidy(false);   // make room: the branches below move down, nothing lands on top of anything
      startEditing(id);
    }
    function removeMind(node) {   // the idea, everything that grows from it, and its lines
      const gone = new Set(), walk = id => { gone.add(id); kidsOf(id).forEach(k => walk(k.id)); }; walk(node.id);
      const all = api.getSceneElements(), out = [];
      for (const e of all) {
        if (gone.has(e.id) || (e.type === 'text' && gone.has(e.containerId)) || (e.type === 'arrow' && (gone.has(e.startBinding?.elementId) || gone.has(e.endBinding?.elementId)))) out.push(newElementWith(e, { isDeleted: true }));
      }
      const parent = node.customData.mm.parent && byId(node.customData.mm.parent);
      replace(out, [], parent?.id); tidy(false);
    }
    function startEditing(id) {   // open the new idea for typing (Excalidraw edits a selected box's text on Enter)
      setTimeout(() => { const box = host.querySelector('.excalidraw'); if (!box) return;
        const ev = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true, cancelable: true }); ev.__wbPass = true;
        (host.querySelector('.excalidraw-container') || box).dispatchEvent(ev); }, 60);
    }
    function newMind(topic) {   // one central topic in the middle of the screen, ready to grow
      if (!api || !editable) return;
      const id = uid('mm'), w = 220, h = 62, p = centre();
      const made = convertToExcalidrawElements([nodeSkeleton({ id, x: p.x - w / 2, y: p.y - h / 2, width: w, height: h, depth: 0, colors: BRANCH[0], text: topic || 'Main idea', mm: { root: id, parent: null, side: 0, branch: 0, depth: 0 } })], { regenerateIds: false });
      replace([], made, id); startEditing(id);
    }
    host.addEventListener('keydown', e => {   // Tab = new idea to the right · Enter = new idea below · Delete = remove the branch
      if (e.__wbPass || !api || !editable || e.isComposing) return;
      const st = api.getAppState(); if (st.editingTextElement || st.newElement || st.multiElement) return;
      if (!['Tab', 'Enter', 'Delete', 'Backspace'].includes(e.key) || e.metaKey || e.ctrlKey || e.altKey) return;
      const n = selectedNode(st); if (!n) return;
      e.preventDefault(); e.stopPropagation();
      if (e.key === 'Tab') growMind(n, 'child');
      else if (e.key === 'Enter') growMind(n, n.customData.mm.parent ? 'sibling' : 'child');
      else removeMind(n);
    }, true);

    /* two round "+" handles beside a selected idea (right: new idea · below: new idea under it) */
    const handles = document.createElement('div'); handles.className = 'wb-mm-handles'; handles.hidden = true;
    handles.innerHTML = '<button type="button" class="wb-mm-h is-child" data-mm="child" title="New idea (Tab)" aria-label="Add a new idea to the right">+</button><button type="button" class="wb-mm-h is-sib" data-mm="sibling" title="New idea below (Enter)" aria-label="Add a new idea below">+</button>';
    handles.addEventListener('pointerdown', e => e.stopPropagation());
    handles.addEventListener('click', e => { const b = e.target.closest('[data-mm]'); const n = selectedNode(); if (!b || !n) return;
      growMind(n, b.dataset.mm === 'sibling' && n.customData.mm.parent ? 'sibling' : 'child'); });
    let lastSel = undefined;
    /* a toolbar click while a note is being typed in: Excalidraw finishes that edit a moment later and would undo our new shapes,
       so wait until it has settled before adding anything */
    const settled = fn => (...a) => { const st = api?.getAppState(); if (!(st?.editingTextElement || Date.now() - lastTyping < 400)) return fn(...a);
      host.querySelector('textarea.excalidraw-wysiwyg')?.blur(); setTimeout(() => fn(...a), 220); };
    function paintHandles(st) {
      const n = editable ? selectedNode(st) : null;
      if ((n?.id || null) !== lastSel) { lastSel = n?.id || null; o.onSelect?.(n ? { id: n.id, root: !n.customData.mm.parent } : null); }
      if (!n || st.editingTextElement) { handles.hidden = true; return; }
      const hr = host.getBoundingClientRect(), side = n.customData.mm.side < 0 ? -1 : 1;
      const at = (sx, sy) => { const v = sceneCoordsToViewportCoords({ sceneX: sx, sceneY: sy }, st); return [v.x - hr.left, v.y - hr.top]; };
      const [cx, cy] = at(side > 0 ? n.x + n.width : n.x, n.y + n.height / 2), [bx, by] = at(n.x + n.width / 2, n.y + n.height);
      handles.hidden = false;
      const [hc, hs] = handles.children;
      hc.style.transform = `translate(${cx + (side > 0 ? 14 : -40)}px, ${cy - 13}px)`;
      hs.style.transform = `translate(${bx - 13}px, ${by + 12}px)`; hs.hidden = !n.customData.mm.parent;
    }

    host.append(handles);
    ready = true; if (early.length) { merge(early); early = []; }

    const api2 = {
      sticky: settled(function () {
        const color = o.stickyColor?.() || STICKIES[0][1], name = o.stickyName?.() || '';
        const n = api.getSceneElements().filter(e => e.customData?.sticky).length, col = n % 4, row = Math.floor(n / 4) % 3;   // a tidy grid around the centre of the screen
        const sk = stickySkeleton(-100 + (col - 1.5) * 230, -100 + (row - 0.5) * 230, color, name ? name + ': ' : '');
        if (!api || !editable) return; const p = centre();
        const made = convertToExcalidrawElements(sk.map(e => ({ ...e, x: e.x + p.x, y: e.y + p.y })), { regenerateIds: false });
        const note = made.find(e => e.customData?.sticky); if (!note) return;
        replace([], made, note.id); startEditing(note.id);   // same path as a new mind-map idea: selected, then opened for typing
      }),
      mindMap(outline) { const tree = parseOutline(outline); if (!tree) return false; add(mindMapSkeleton(tree), true, true); return true; },
      newMind: settled(newMind),
      addIdea(kind) { const n = selectedNode(); if (n) growMind(n, kind === 'sibling' && n.customData.mm.parent ? 'sibling' : 'child'); else o.toast?.('Select an idea in a mind map first.'); },
      brainstorm(topic) {
        const sk = [{ type: 'rectangle', x: -130, y: -45, width: 260, height: 90, roundness: { type: 3 }, backgroundColor: '#14293a', strokeColor: '#14293a', fillStyle: 'solid', roughness: 0,
          label: { text: topic || 'Our question', fontSize: 24, fontFamily: 6, strokeColor: '#ffffff' } }];
        for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 - Math.PI / 2, x = Math.cos(a) * 360 - 90, y = Math.sin(a) * 250 - 90;
          sk.push(...stickySkeleton(x, y, STICKIES[i % STICKIES.length][1], '', 180)); }
        add(sk, true, true);
      },
      setEditable(on) { if (on === editable) return; editable = on; render(); },
      fit() { api?.scrollToContent(undefined, { fitToContent: true, animate: true }); },
      async destroy() { destroyed = true; clearInterval(sweep); window.removeEventListener('pointerup', ptrUp, true); window.removeEventListener('pointercancel', ptrUp, true); await persist(); try { c.removeChannel(ch); } catch (e) { /* ignore */ } ch = null; root.unmount(); },
      get count() { return api ? api.getSceneElements().length : 0; },
      STICKIES,
    };
    api2.brainstorm = settled(api2.brainstorm);
    return api2;
  }
  return { mount, load, parseOutline, STICKIES };
})();
