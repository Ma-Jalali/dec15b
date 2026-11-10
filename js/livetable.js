/* DEC15 · Shared table — one table that a group fills in together, live (v6.8).
   A table block with `live: true` (or live: 'names': the first column becomes a "Name" column) gets
   "Work on one table together". The student who starts it chooses classmates; each of them finds it in
   "Shared with me" (and in the lesson), and everyone types in the same table at the same time.
   - The table is a Yjs document, merged in the browser, saved and sent like "Write together"
     (DEC15Collab.provider: table shared_doc_updates + a private Realtime channel "dec15:doc:<id>").
   - Select some words → a small toolbar pops up: bold, italic, underline, colour, highlight, smaller / larger text.
   - Drag the edge of a column to make it wider. "Full screen" gives the table the whole window.
   - The column titles (and the row titles the task gives) are protected: nobody can change or delete them.
   Loaded with js/collab.js and the editor bundle (js/vendor/tiptap.bundle.js). */
window.DEC15LiveTable = (() => {
  const live = new Map();   // docId → instance (kept while it is on the page; moved, not rebuilt, when the page re-draws)
  const COLORS = ['#2b776e', '#b0512a', '#7a4a8c', '#3a58a0', '#985c0e', '#3f7a3a', '#a3305a', '#1f6f8b'];
  const TEXT = [['', 'Default', '#14293a'], ['#b0322b', 'Red'], ['#c26412', 'Orange'], ['#2f7a52', 'Green'], ['#2f55b0', 'Blue'], ['#7a4a8c', 'Purple'], ['#6b7680', 'Grey']];
  const MARK = [['', 'No highlight'], ['#fff1a8', 'Yellow'], ['#c9f0d4', 'Green'], ['#cde6fb', 'Blue'], ['#f9d3e2', 'Pink'], ['#ffe0c2', 'Orange']];
  const SIZES = ['0.8em', '0.9em', null, '1.15em', '1.3em', '1.5em', '1.75em', '2em'];   // null = normal
  const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    bold: '<path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" stroke-width="2.4"/>',
    italic: '<path d="M14 5h-4M14 19h-4M14 5l-4 14"/>',
    underline: '<path d="M7 4v7a5 5 0 0 0 10 0V4M5 20h14"/>',
    strike: '<path d="M4 12h16M16.5 7.5C16 5.6 14.2 4.5 12 4.5c-2.6 0-4.5 1.4-4.5 3.4 0 1.6 1.1 2.6 3 3.1M8 16c.4 2.1 2.3 3.5 4.4 3.5 2.6 0 4.6-1.4 4.6-3.6 0-1-.4-1.8-1.1-2.4"/>',
    color: '<path d="m6 17 6-13 6 13M8.3 12.5h7.4"/>',
    marker: '<path d="m15 4 5 5-8.5 8.5H7v-4.5z"/><path d="m12.5 6.5 5 5"/>',
    clear: '<path d="M6 5h12M12 5l-3 14M15.5 14.5l5 5M20.5 14.5l-5 5"/>',
    full: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>', shrink: '<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>', row: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M3.5 12h17M9.5 5v14"/>',
  };
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ───────── the table: what a new one looks like ───────── */
  const plain = h => String(h ?? '').replace(/<br\s*\/?>/gi, ' — ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  const para = (text, bold) => ({ type: 'paragraph', content: text ? [{ type: 'text', text, ...(bold ? { marks: [{ type: 'bold' }] } : {}) }] : [] });
  /* b: the lesson's table block. names: the first column is for names (live: 'names') */
  function seedOf(b) {
    const names = b.live === 'names', cols = b.columns.map(plain);
    if (names) cols[0] = 'Name';
    const head = { type: 'tableRow', content: cols.map(c => ({ type: 'tableHeader', attrs: { locked: true }, content: [para(c)] })) };
    const n = b.fixed ? b.fixed.length : (b.rows || 3), rows = [];
    for (let r = 0; r < n; r++) {
      const label = !names && b.fixed?.[r] ? plain(b.fixed[r]) : '';
      rows.push({ type: 'tableRow', content: cols.map((_, ci) => ci === 0 && label ? { type: 'tableHeader', attrs: { locked: true }, content: [para(label)] } : { type: 'tableCell', content: [para('')] }) });
    }
    return { type: 'doc', content: [{ type: 'table', content: [head, ...rows] }] };
  }

  /* ───────── the editor's pieces ───────── */
  function extensions(T, ydoc, awareness, me, onCaret) {
    const Doc = T.Node.create({ name: 'doc', topNode: true, content: 'table' });   // the document is exactly one table
    const locked = { locked: { default: false, parseHTML: el => el.hasAttribute('data-locked'), renderHTML: a => a.locked ? { 'data-locked': '', contenteditable: 'false' } : {} } };
    const Cell = T.TableCell.extend({ content: 'paragraph+', addAttributes() { return { ...this.parent?.(), ...locked }; } });
    const Head = T.TableHeader.extend({ content: 'paragraph+', addAttributes() { return { ...this.parent?.(), ...locked }; } });
    const FontSize = T.Extension.create({ name: 'fontSize',
      addGlobalAttributes() { return [{ types: ['textStyle'], attributes: { fontSize: { default: null, parseHTML: el => el.style.fontSize || null, renderHTML: a => a.fontSize ? { style: `font-size:${a.fontSize}` } : {} } } }]; } });
    /* the column titles and the task's row titles cannot be changed or removed (changes from others always pass) */
    const lockedText = doc => { const out = []; doc.descendants(n => { if (n.attrs?.locked) { out.push(n.textContent); return false; } }); return out.join('\u0001') + '\u0002' + (doc.firstChild?.firstChild?.childCount || 0); };
    const Guard = T.Extension.create({ name: 'ltGuard',
      addProseMirrorPlugins() { return [new T.Plugin({ key: new T.PluginKey('ltGuard'), filterTransaction: (tr, state) => {
        if (!tr.docChanged || tr.getMeta('y-sync$') || tr.getMeta('lt-seed')) return true;
        const ok = lockedText(tr.doc) === lockedText(state.doc); if (!ok) onCaret?.('locked'); return ok; } })]; } });
    const caret = user => {
      const c = document.createElement('span'); c.className = 'collaboration-cursor__caret lt-caret'; c.style.borderColor = user.color;
      const l = document.createElement('span'); l.className = 'collaboration-cursor__label'; l.style.backgroundColor = user.color; l.textContent = (user.name || '').split(' ')[0];
      c.append(l); return c;
    };
    return [T.StarterKit.configure({ document: false, history: false, heading: false, bulletList: false, orderedList: false, listItem: false, blockquote: false, codeBlock: false, code: false, horizontalRule: false }),
      Doc, T.Underline, T.TextStyle, FontSize, T.Color, T.Highlight.configure({ multicolor: true }),
      T.Table.configure({ resizable: true, cellMinWidth: 70, handleWidth: 6, lastColumnResizable: false, allowTableNodeSelection: false }), T.TableRow, Head, Cell,
      T.Placeholder.configure({ placeholder: ({ node, pos, editor }) => { if (node.type.name !== 'paragraph') return ''; const $p = editor.state.doc.resolve(pos); const cell = $p.parent; return cell?.type.name === 'tableCell' && $p.index(-1) === 0 && $p.node(-1)?.firstChild === cell && editor.storage.lt?.names ? 'Name' : ''; }, showOnlyCurrent: false, includeChildren: true }),
      T.Extension.create({ name: 'lt', addStorage: () => ({ names: false }) }),
      Guard,
      T.Collaboration.configure({ document: ydoc }), T.CollaborationCursor.configure({ provider: { awareness }, user: me, render: caret })];
  }

  /* ───────── one shared table ───────── */
  function create(o) {
    /* o: { docId, lessonId, seed (doc JSON) | null, names, cloud, toast, title } */
    const T = window.Tiptap, Y = T.Y, cloud = o.cloud, c = cloud.client;
    const me = { name: (cloud.profile?.full_name || cloud.user.email?.split('@')[0] || 'Student').trim().split(' ').slice(0, 2).join(' '), color: COLORS[Math.abs([...cloud.user.id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) | 0, 7)) % COLORS.length] };
    const root = document.createElement('div'); root.className = 'lt'; root.dataset.ltDoc = o.docId;
    root.innerHTML = `<div class="lt-top"><span class="lt-live"><i></i>Live</span><span class="lt-faces" aria-live="polite"></span>
        <span class="lt-sp"></span><span class="lt-status" role="status">Connecting…</span>
        <button type="button" class="lt-tool" data-lt="full" title="Full screen" aria-label="Full screen">${svg(I.full)}</button></div>
      <div class="lt-scroll"><div class="lt-ed" aria-label="${esc(o.title || 'Shared table')}"></div><p class="lt-wait">Loading the table…</p></div>
      <div class="lt-foot"><button type="button" class="lt-btn" data-lt="row">${svg(I.plus)}Add a row</button><button type="button" class="lt-btn" data-lt="del">${svg(I.minus)}Delete this row</button>
        <span class="lt-hint">Select words to style them · drag a column edge to make it wider · everything saves by itself</span></div>
      <div class="lt-bubble" role="toolbar" aria-label="Text style" hidden>
        <div class="lt-b-row"><button type="button" data-lb="bold" title="Bold (Ctrl+B)" aria-label="Bold">${svg(I.bold)}</button><button type="button" data-lb="italic" title="Italic (Ctrl+I)" aria-label="Italic">${svg(I.italic)}</button><button type="button" data-lb="underline" title="Underline (Ctrl+U)" aria-label="Underline">${svg(I.underline)}</button><button type="button" data-lb="strike" title="Strikethrough" aria-label="Strikethrough">${svg(I.strike)}</button>
          <i class="lt-b-sep"></i><button type="button" data-lb-pane="color" title="Text colour" aria-label="Text colour" class="lt-b-sw">${svg(I.color)}<b data-lb-cbar></b></button><button type="button" data-lb-pane="mark" title="Highlight" aria-label="Highlight" class="lt-b-sw">${svg(I.marker)}<b data-lb-mbar></b></button>
          <i class="lt-b-sep"></i><button type="button" data-lb="smaller" title="Smaller text" aria-label="Smaller text" class="lt-b-a">A<small>−</small></button><button type="button" data-lb="larger" title="Larger text" aria-label="Larger text" class="lt-b-a lt-b-al">A<small>+</small></button>
          <i class="lt-b-sep"></i><button type="button" data-lb="clear" title="Clear formatting" aria-label="Clear formatting">${svg(I.clear)}</button></div>
        <div class="lt-b-pane" data-pane="color" hidden>${TEXT.map(([v, l, d]) => `<button type="button" data-lb-color="${v}" title="${l}" aria-label="${l}" style="--c:${v || d}"></button>`).join('')}</div>
        <div class="lt-b-pane" data-pane="mark" hidden>${MARK.map(([v, l]) => `<button type="button" data-lb-mark="${v}" title="${l}" aria-label="${l}" class="${v ? '' : 'none'}" style="--c:${v || '#fff'}"></button>`).join('')}</div>
      </div>`;
    const $ = s => root.querySelector(s);
    const ydoc = new Y.Doc(), awareness = new T.Awareness(ydoc);
    let editor = null, warned = 0;
    const status = s => { const el = $('.lt-status'); el.textContent = { connecting: 'Connecting…', saving: 'Saving…', saved: 'Saved', error: 'Not saved yet · trying again' }[s] || ''; el.dataset.s = s; };
    const prov = window.DEC15Collab.provider(c, o.docId, o.lessonId, ydoc, awareness, status, () => {});
    const inst = { docId: o.docId, root, prov, get editor() { return editor; }, ready: null, gone: 0 };
    inst.ready = (async () => {
      const ok = await prov.start(); if (!ok) { $('.lt-wait').textContent = 'The table could not load. Check your internet connection, then reload the page.'; return false; }
      const empty = ydoc.getXmlFragment('default').length === 0;   // nothing saved yet: a brand-new table
      editor = new T.Editor({ element: $('.lt-ed'), extensions: extensions(T, ydoc, awareness, me, why => { if (why === 'locked' && Date.now() - warned > 4000) { warned = Date.now(); o.toast?.('The titles of the table are part of the task, so they stay as they are.'); } }),
        editorProps: { attributes: { class: 'lt-pm', spellcheck: 'true' } } });
      editor.storage.lt.names = !!o.names;
      if (o.seed && empty) {   // a new table: write the columns and rows the task gives
        const doc = editor.schema.nodeFromJSON(o.seed), tr = editor.state.tr.replaceWith(0, editor.state.doc.content.size, doc.content);
        tr.setMeta('lt-seed', true);
        let first = 0; tr.doc.descendants((n, pos) => { if (!first && n.type.name === 'tableCell') first = pos + 2; return !first; });   // the cursor goes into the first empty cell
        if (first) tr.setSelection(T.TextSelection.near(tr.doc.resolve(first)));
        editor.view.dispatch(tr); await prov.flush();
      }
      $('.lt-wait').hidden = true; root.classList.add('is-ready');
      editor.on('selectionUpdate', bubble); editor.on('blur', () => setTimeout(() => { if (!root.contains(document.activeElement)) hideBubble(); }, 120));
      editor.on('transaction', () => { if (!$('.lt-bubble').hidden) bubble(); });
      awareness.on('change', faces); faces();
      return true;
    })();

    /* who is here */
    function faces() {
      const seen = new Map(); awareness.getStates().forEach(s => { if (s.user?.name && !seen.has(s.user.name)) seen.set(s.user.name, s.user.color); });
      $('.lt-faces').innerHTML = [...seen].map(([n, col]) => `<span class="lt-face" style="--c:${col}" title="${esc(n)}${n === me.name ? ' (you)' : ''}">${esc(n.split(' ')[0])}</span>`).join('');
    }

    /* the pop-up toolbar over selected words */
    const bub = () => $('.lt-bubble');
    function hideBubble() { bub().hidden = true; bub().querySelectorAll('[data-pane]').forEach(p => p.hidden = true); }
    function bubble() {
      if (!editor) return; const { from, to, empty } = editor.state.selection;
      if (empty || !editor.isFocused && !root.contains(document.activeElement)) { hideBubble(); return; }
      const b = bub(); b.hidden = false;
      ['bold', 'italic', 'underline', 'strike'].forEach(k => b.querySelector(`[data-lb="${k}"]`).classList.toggle('on', editor.isActive(k)));
      const ts = editor.getAttributes('textStyle'), hl = editor.getAttributes('highlight');
      b.querySelector('[data-lb-cbar]').style.background = ts.color || '#14293a'; b.querySelector('[data-lb-mbar]').style.background = hl.color || 'transparent';
      const a = editor.view.coordsAtPos(from), z = editor.view.coordsAtPos(to), r = root.getBoundingClientRect(), w = b.offsetWidth, h = b.offsetHeight;
      const mid = (Math.min(a.left, z.left) + Math.max(a.right, z.right)) / 2;
      let x = mid - r.left - w / 2, y = Math.min(a.top, z.top) - r.top - h - 10;
      x = Math.max(4, Math.min(x, root.clientWidth - w - 4));
      if (Math.min(a.top, z.top) - h - 10 < 8) y = Math.max(a.bottom, z.bottom) - r.top + 10;   // no room above: show it under the words
      b.style.left = x + 'px'; b.style.top = y + 'px';
    }
    const size = dir => {
      const cur = editor.getAttributes('textStyle').fontSize || null; let i = SIZES.indexOf(cur); if (i < 0) i = 2;
      const next = SIZES[Math.max(0, Math.min(SIZES.length - 1, i + dir))];
      editor.chain().focus().setMark('textStyle', { fontSize: next }).run();
    };
    root.addEventListener('mousedown', e => { if (e.target.closest('.lt-bubble')) e.preventDefault(); });   // keep the words selected
    root.addEventListener('click', e => {
      const t = e.target.closest('button'); if (!t || !editor) return; const d = t.dataset, ch = editor.chain().focus();
      if (d.lb === 'bold') ch.toggleBold().run(); if (d.lb === 'italic') ch.toggleItalic().run(); if (d.lb === 'underline') ch.toggleUnderline().run(); if (d.lb === 'strike') ch.toggleStrike().run();
      if (d.lb === 'smaller') size(-1); if (d.lb === 'larger') size(1);
      if (d.lb === 'clear') ch.unsetAllMarks().run();
      if (d.lbPane) { const p = bub().querySelector(`[data-pane="${d.lbPane}"]`), open = p.hidden; bub().querySelectorAll('[data-pane]').forEach(x => x.hidden = true); p.hidden = !open; bubble(); }
      if (d.lbColor !== undefined) { (d.lbColor ? ch.setColor(d.lbColor) : ch.unsetColor()).run(); bub().querySelector('[data-pane="color"]').hidden = true; }
      if (d.lbMark !== undefined) { (d.lbMark ? ch.setHighlight({ color: d.lbMark }) : ch.unsetHighlight()).run(); bub().querySelector('[data-pane="mark"]').hidden = true; }
      if (d.lt === 'row') {
        const st = editor.state, inTable = st.selection.$from.depth > 2;
        if (!inTable) { const end = st.doc.content.size - 4; editor.chain().focus().setTextSelection(Math.max(1, end)).addRowAfter().run(); } else editor.chain().focus().addRowAfter().run();
      }
      if (d.lt === 'del') {
        const $f = editor.state.selection.$from; let row = null; for (let dp = $f.depth; dp > 0; dp--) if ($f.node(dp).type.name === 'tableRow') { row = $f.node(dp); break; }
        if (!row) { o.toast?.('Click in a row first, then delete it.'); return; }
        let lockedRow = false; row.forEach(cell => { if (cell.attrs.locked) lockedRow = true; });
        if (lockedRow) { o.toast?.('This row is part of the task, so it stays. You can delete rows you added.'); return; }
        if (row.textContent.trim() && !confirm('Delete this row for everyone? What is written in it will be lost.')) return;
        editor.chain().focus().deleteRow().run();
      }
      if (d.lt === 'full') {
        const on = !root.classList.contains('lt-full'); root.classList.toggle('lt-full', on); document.body.classList.toggle('lt-full-open', on);
        t.innerHTML = svg(on ? I.shrink : I.full); t.title = on ? 'Back to the page' : 'Full screen'; t.setAttribute('aria-label', t.title); hideBubble();
      }
    });
    root.addEventListener('keydown', e => { if (e.key === 'Escape') { if (!bub().hidden) { hideBubble(); return; } if (root.classList.contains('lt-full')) root.querySelector('[data-lt="full"]').click(); } });
    const onScroll = () => { if (!bub().hidden) bubble(); };
    root.querySelector('.lt-scroll').addEventListener('scroll', onScroll, { passive: true }); addEventListener('scroll', onScroll, { passive: true, capture: true });
    inst.destroy = async () => { removeEventListener('scroll', onScroll, { capture: true }); document.body.classList.remove('lt-full-open'); try { await prov.stop(); } catch (e) { /* ignore */ } editor?.destroy(); live.delete(o.docId); };
    return inst;
  }

  /* tables that have left the page are closed after a while (their changes are saved first) */
  setInterval(() => { const now = Date.now(); live.forEach(inst => { if (inst.root.isConnected) { inst.gone = 0; return; } if (!inst.gone) inst.gone = now; else if (now - inst.gone > 30000) inst.destroy(); }); }, 5000);

  /* put the shared table into a place on the page (the same live table is moved there if it is already open) */
  function mount(el, o) {
    let inst = live.get(o.docId);
    if (!inst) { inst = create(o); live.set(o.docId, inst); }
    inst.gone = 0; el.replaceChildren(inst.root); el.classList.add('lt-ready');
    return inst;
  }
  /* before sharing: make sure the new table exists and is saved */
  async function prepare(o) { const inst = live.get(o.docId) || create(o); live.set(o.docId, inst); const ok = await inst.ready; if (ok) await inst.prov.flush(); return ok; }
  /* the words in the table now (for a PDF): { head: [...], rows: [[...]] } */
  function snapshot(docId) {
    const ed = live.get(docId)?.editor; if (!ed) return null; const table = ed.state.doc.firstChild; if (!table) return null;
    const rows = []; table.forEach(r => { const cells = []; r.forEach(cl => cells.push(cl.textContent)); rows.push(cells); });
    return { head: rows[0] || [], rows: rows.slice(1) };
  }
  return { mount, prepare, snapshot, seedOf, isOpen: id => live.has(id) };
})();
