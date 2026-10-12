/* DEC15 · My planner — blocks, like Notion or Craft.
   - Type "/" anywhere in a note to insert a block: text, headings, to-dos, lists, toggle, quote, callout,
     divider, code, table, today's date.
   - Hover a block: "+" adds a block below, "⋮⋮" drags the block to a new place (click it for block options:
     turn into, duplicate, move up/down, delete). Alt+Shift+↑/↓ moves the block with the keyboard.
   - New block types: callout (note / tip / warning / important) and toggle (a line that opens and closes).
   Needs window.Tiptap. Used by js/planner.js. */
window.DEC15Blocks = (() => {
  const I = p => `<svg viewBox="0 0 20 20" aria-hidden="true">${p}</svg>`;
  const ICONS = {
    text: I('<path d="M5 5h10M10 5v10"/>'),
    h1: I('<path d="M3.5 5v10M10 5v10M3.5 10H10"/><path d="M13.5 7.5 15.5 6v9"/>'),
    h2: I('<path d="M3 5v10M9 5v10M3 10h6"/><path d="M12 8c.2-1.3 1.2-2 2.4-2 1.3 0 2.3.9 2.3 2.1 0 2-4.6 3.8-4.6 6.9h4.7"/>'),
    h3: I('<path d="M3 5v10M9 5v10M3 10h6"/><path d="M12.2 6.4c.5-.3 1.2-.5 1.9-.5 1.3 0 2.3.8 2.3 2s-1 2-2.3 2c1.5 0 2.5.8 2.5 2.2s-1.1 2.3-2.5 2.3c-.8 0-1.5-.2-2-.6"/>'),
    todo: I('<rect x="3.5" y="3.5" width="13" height="13" rx="3"/><path d="m7 10.2 2.1 2.1L13.2 8"/>'),
    bullet: I('<circle cx="5" cy="6" r="1.1" fill="currentColor"/><circle cx="5" cy="10" r="1.1" fill="currentColor"/><circle cx="5" cy="14" r="1.1" fill="currentColor"/><path d="M8.5 6h8M8.5 10h8M8.5 14h8"/>'),
    number: I('<path d="M3.6 4.6h1.3v3.6M3.6 8.2h2.6M3.5 12.4c0-.9 2.4-1.2 2.4 0 0 1.2-2.4 1.9-2.4 3.1h2.6"/><path d="M9 6.3h7.5M9 13.7h7.5"/>'),
    toggle: I('<path d="m4.5 6 3 3-3 3"/><path d="M10 9h6.5M10 13.5h5"/>'),
    quote: I('<path d="M4 4.5v11"/><path d="M8 7h8M8 10.5h8M8 14h5"/>'),
    callout: I('<rect x="2.5" y="3.5" width="15" height="13" rx="3"/><circle cx="6.5" cy="8" r="1.4"/><path d="M10 8h4.5M6 12.5h8.5"/>'),
    divider: I('<path d="M3 10h14"/><path d="M6 5.5h8M6 14.5h8" opacity=".35"/>'),
    divThick: I('<path d="M3 10h14" stroke-width="3.2"/>'),
    divDouble: I('<path d="M3 8.3h14M3 11.7h14"/>'),
    divDotted: I('<path d="M3 10h14" stroke-dasharray="0.1 3" stroke-width="2.2"/>'),
    divWavy: I('<path d="M2.5 10c1.6-2.4 3.1-2.4 4.7 0s3.1 2.4 4.7 0 3.1-2.4 4.7 0"/>'),
    divDots: I('<circle cx="5.5" cy="10" r="1.1" fill="currentColor"/><circle cx="10" cy="10" r="1.1" fill="currentColor"/><circle cx="14.5" cy="10" r="1.1" fill="currentColor"/>'),
    code: I('<path d="m7 6-4 4 4 4M13 6l4 4-4 4M11.2 4.5 8.8 15.5"/>'),
    table: I('<rect x="3" y="4" width="14" height="12" rx="2"/><path d="M3 8h14M3 12h14M8 4v12"/>'),
    image: I('<rect x="2.5" y="4" width="15" height="12" rx="2.5"/><circle cx="7" cy="8.5" r="1.6"/><path d="m3 15 4.5-4.2 3.2 2.8 2.8-2.6L17 14.5"/>'),
    cols2: I('<rect x="2.5" y="4" width="6.5" height="12" rx="1.8"/><rect x="11" y="4" width="6.5" height="12" rx="1.8"/>'),
    cols3: I('<rect x="2" y="4" width="4.4" height="12" rx="1.4"/><rect x="7.8" y="4" width="4.4" height="12" rx="1.4"/><rect x="13.6" y="4" width="4.4" height="12" rx="1.4"/>'),
    bookmark: I('<rect x="2.5" y="4.5" width="15" height="11" rx="2.5"/><path d="M8.3 10.7a2 2 0 0 0 2.9 0l1.6-1.6a2 2 0 0 0-2.9-2.9l-.6.6M11.7 9.3a2 2 0 0 0-2.9 0l-1.6 1.6a2 2 0 0 0 2.9 2.9l.6-.6"/>'),
    date: I('<rect x="3.5" y="4.5" width="13" height="12" rx="2.5"/><path d="M3.5 8.5h13M7 3v3M13 3v3"/><circle cx="10" cy="12.5" r="1.2" fill="currentColor"/>'),
    grip: '<svg viewBox="0 0 10 16" aria-hidden="true"><circle cx="3" cy="3" r="1.3"/><circle cx="7" cy="3" r="1.3"/><circle cx="3" cy="8" r="1.3"/><circle cx="7" cy="8" r="1.3"/><circle cx="3" cy="13" r="1.3"/><circle cx="7" cy="13" r="1.3"/></svg>',
    plus: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>',
    up: I('<path d="M10 16V4M5 9l5-5 5 5"/>'), down: I('<path d="M10 4v12M5 11l5 5 5-5"/>'),
    copy: I('<rect x="6.5" y="6.5" width="10" height="10" rx="2"/><path d="M13.5 6.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v7A1.5 1.5 0 0 0 5 13.5h1.5"/>'),
    trash: I('<path d="M4 6h12M8 6V4.5h4V6M5.5 6l.8 10h7.4l.8-10"/>'),
  };
  const TONES = {
    note: { label: 'Note', icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M10 9v5"/><circle cx="10" cy="6.3" r=".9" fill="currentColor" stroke="none"/></svg>' },
    tip: { label: 'Tip', icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7.2 13.5c0-1.6-2.2-2.7-2.2-5.4a5 5 0 0 1 10 0c0 2.7-2.2 3.8-2.2 5.4z"/><path d="M7.6 16h4.8M8.6 18.2h2.8"/></svg>' },
    warning: { label: 'Warning', icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.8 18 16.6H2z"/><path d="M10 8v4"/><circle cx="10" cy="14.4" r=".9" fill="currentColor" stroke="none"/></svg>' },
    important: { label: 'Important', icon: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m10 2.5 2.3 4.8 5.2.7-3.8 3.7.9 5.2L10 14.4l-4.6 2.5.9-5.2L2.5 8l5.2-.7z"/></svg>' },
  };
  const TONE_ORDER = Object.keys(TONES);

  /* Enter on an empty last line leaves a callout or toggle; Backspace at the start of a callout unwraps it */
  function exitKeys(name) {
    return function () { return {
      Enter: ({ editor }) => { const { state } = editor, { $from, empty } = state.selection; if (!empty || $from.depth < 2) return false;
        const box = $from.node(-1); if (box.type.name !== name || $from.parent.type.name !== 'paragraph' || $from.parent.content.size || $from.index(-1) !== box.childCount - 1 || box.childCount < 2) return false;
        const boxEnd = $from.after(-1), tr = state.tr.delete($from.before(), $from.after()), at = tr.mapping.map(boxEnd), next = tr.doc.nodeAt(at);
        if (!(next && next.type.name === 'paragraph' && !next.content.size)) tr.insert(at, state.schema.nodes.paragraph.create());
        tr.setSelection(window.Tiptap.TextSelection.create(tr.doc, at + 1)); editor.view.dispatch(tr.scrollIntoView()); return true; },
      Backspace: ({ editor }) => { const { $from, empty } = editor.state.selection; if (!empty || $from.parentOffset || $from.depth < 2) return false;
        const box = $from.node(-1); if (box.type.name !== name || $from.index(-1) !== 0) return false;
        return name === 'callout' ? editor.commands.lift(name) : false; },
    }; };
  }
  /* ── new block types ── */
  function extensions(T) {
    const Callout = T.Node.create({
      name: 'callout', group: 'block', content: 'block+', defining: true,
      addAttributes() { return { tone: { default: 'note', parseHTML: el => el.getAttribute('data-tone') || 'note', renderHTML: a => ({ 'data-tone': a.tone }) } }; },
      parseHTML() { return [{ tag: 'div[data-type="callout"]' }]; },
      addKeyboardShortcuts: exitKeys('callout'),
      renderHTML({ HTMLAttributes }) { return ['div', T.mergeAttributes(HTMLAttributes, { 'data-type': 'callout', class: 'pl-callout' }), 0]; },
      addNodeView() {
        return ({ node, getPos, editor }) => {
          let cur = node;
          const dom = document.createElement('div'); dom.className = 'pl-callout'; dom.dataset.type = 'callout';
          const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'pl-callout-ico'; btn.contentEditable = 'false';
          const body = document.createElement('div'); body.className = 'pl-callout-body';
          dom.append(btn, body);
          const paint = () => { const t = TONES[cur.attrs.tone] ? cur.attrs.tone : 'note'; dom.dataset.tone = t; btn.innerHTML = TONES[t].icon;
            btn.title = `${TONES[t].label} — click to change`; btn.setAttribute('aria-label', `${TONES[t].label} callout. Change type`); };
          btn.addEventListener('mousedown', e => e.preventDefault());
          btn.addEventListener('click', () => { if (typeof getPos !== 'function' || !editor.isEditable) return; const next = TONE_ORDER[(TONE_ORDER.indexOf(cur.attrs.tone) + 1) % TONE_ORDER.length];
            editor.view.dispatch(editor.state.tr.setNodeMarkup(getPos(), undefined, { ...cur.attrs, tone: next })); });
          paint();
          return { dom, contentDOM: body, update: n => { if (n.type !== cur.type) return false; cur = n; paint(); return true; },
            stopEvent: e => btn.contains(e.target), ignoreMutation: m => !body.contains(m.target) };
        };
      },
    });
    const Toggle = T.Node.create({
      name: 'toggle', group: 'block', content: 'paragraph block*', defining: true,
      addAttributes() { return { open: { default: true, parseHTML: el => el.getAttribute('data-open') !== 'false', renderHTML: a => ({ 'data-open': String(a.open) }) } }; },
      parseHTML() { return [{ tag: 'div[data-type="toggle"]' }]; },
      addKeyboardShortcuts: exitKeys('toggle'),
      renderHTML({ HTMLAttributes }) { return ['div', T.mergeAttributes(HTMLAttributes, { 'data-type': 'toggle', class: 'pl-toggle' }), 0]; },
      addNodeView() {
        return ({ node, getPos, editor }) => {
          let cur = node;
          const dom = document.createElement('div'); dom.className = 'pl-toggle'; dom.dataset.type = 'toggle';
          const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'pl-toggle-btn'; btn.contentEditable = 'false';
          btn.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 4 4 4-4 4"/></svg>';
          const body = document.createElement('div'); body.className = 'pl-toggle-body';
          dom.append(btn, body);
          const paint = () => { dom.dataset.open = String(!!cur.attrs.open); btn.setAttribute('aria-expanded', String(!!cur.attrs.open)); btn.setAttribute('aria-label', cur.attrs.open ? 'Close toggle' : 'Open toggle');
            dom.classList.toggle('empty', cur.childCount < 2); };
          btn.addEventListener('mousedown', e => e.preventDefault());
          btn.addEventListener('click', () => { if (typeof getPos !== 'function') return; editor.view.dispatch(editor.state.tr.setNodeMarkup(getPos(), undefined, { ...cur.attrs, open: !cur.attrs.open })); });
          paint();
          return { dom, contentDOM: body, update: n => { if (n.type !== cur.type) return false; cur = n; paint(); return true; },
            stopEvent: e => btn.contains(e.target), ignoreMutation: m => !body.contains(m.target) };
        };
      },
    });
    /* a note always ends with an empty line, so there is somewhere to type after a table, toggle or callout */
    const Trailing = T.Extension.create({ name: 'trailingLine', addProseMirrorPlugins() { return [new T.Plugin({ key: new T.PluginKey('trailingLine'),
      appendTransaction: (trs, _o, state) => { if (!trs.some(t => t.docChanged)) return null; const last = state.doc.lastChild; if (!last || last.type.name === 'paragraph') return null;
        return state.tr.insert(state.doc.content.size, state.schema.nodes.paragraph.create()).setMeta('addToHistory', false); } })]; } });
    /* columns: two or three side by side */
    const Column = T.Node.create({ name: 'column', content: 'block+', isolating: true,
      parseHTML() { return [{ tag: 'div[data-type="column"]' }]; }, renderHTML({ HTMLAttributes }) { return ['div', T.mergeAttributes(HTMLAttributes, { 'data-type': 'column', class: 'pl-col' }), 0]; } });
    const Columns = T.Node.create({ name: 'columns', group: 'block', content: 'column{2,3}', defining: true, isolating: true,
      parseHTML() { return [{ tag: 'div[data-type="columns"]' }]; }, renderHTML({ HTMLAttributes }) { return ['div', T.mergeAttributes(HTMLAttributes, { 'data-type': 'columns', class: 'pl-cols' }), 0]; } });
    /* a picture from a web address (http/https only) */
    const Picture = T.Node.create({ name: 'picture', group: 'block', atom: true, draggable: true,
      addAttributes() { return { src: { default: null }, alt: { default: '' } }; },
      parseHTML() { return [{ tag: 'figure[data-type="picture"] img', getAttrs: el => (safeUrl(el.getAttribute('src')) ? { src: el.getAttribute('src'), alt: el.getAttribute('alt') || '' } : false) }]; },
      renderHTML({ node }) { return ['figure', { 'data-type': 'picture', class: 'pl-pic' }, ['img', { src: safeUrl(node.attrs.src) || '', alt: node.attrs.alt || '', loading: 'lazy' }]]; } });
    /* a link card */
    const Bookmark = T.Node.create({ name: 'bookmark', group: 'block', atom: true, draggable: true,
      addAttributes() { return { href: { default: null }, title: { default: '' } }; },
      parseHTML() { return [{ tag: 'div[data-type="bookmark"]', getAttrs: el => { const a = el.querySelector('a'); return a && safeUrl(a.getAttribute('href')) ? { href: a.getAttribute('href'), title: a.textContent || '' } : false; } }]; },
      renderHTML({ node }) { const href = safeUrl(node.attrs.href) || '#', host = hostOf(href);
        return ['div', { 'data-type': 'bookmark', class: 'pl-bm' }, ['span', { class: 'pl-bm-ico', 'aria-hidden': 'true' }, host.slice(0, 1).toUpperCase()],
          ['span', { class: 'pl-bm-tx' }, ['a', { href, target: '_blank', rel: 'noopener noreferrer' }, node.attrs.title || host], ['small', {}, href]]]; } });
    // indent for normal text and headings (lists indent by nesting instead): Tab / Shift+Tab or the toolbar
    const Indent = T.Extension.create({ name: 'indent', addGlobalAttributes() { return [{ types: ['paragraph', 'heading'], attributes: { indent: { default: 0,
      parseHTML: el => Math.min(MAX_INDENT, Math.max(0, parseInt(el.getAttribute('data-indent'), 10) || 0)),
      renderHTML: a => (a.indent ? { 'data-indent': a.indent, style: `margin-left:${a.indent * 2}em` } : {}) } } }]; } });
    // divider styles, like Word: --- line, ___ thick, === double, *** dotted, ~~~ wavy; older dividers keep their dots
    const DividerStyle = T.Extension.create({ name: 'dividerStyle', addGlobalAttributes() { return [{ types: ['horizontalRule'], attributes: { variant: { default: 'dots',
      parseHTML: el => (DIVIDERS[el.getAttribute('data-variant')] ? el.getAttribute('data-variant') : 'dots'), renderHTML: a => ({ 'data-variant': a.variant || 'dots' }) } } }]; } });
    // text size (Small … Huge) as part of the text style, like Word's font size box
    const FontSize = T.Extension.create({ name: 'fontSize',
      addGlobalAttributes() { return [{ types: ['textStyle'], attributes: { fontSize: { default: null,
        parseHTML: el => (SIZES.some(([v]) => v && v === el.style.fontSize) ? el.style.fontSize : null),
        renderHTML: a => (a.fontSize ? { style: `font-size:${a.fontSize}` } : {}) } } }]; },
      addCommands() { return {
        setFontSize: size => ({ chain }) => chain().setMark('textStyle', { fontSize: size }).run(),
        unsetFontSize: () => ({ chain }) => chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run() }; } });
    return [Callout, Toggle, Trailing, Column, Columns, Picture, Bookmark, Indent, DividerStyle, FontSize,
      T.Table.configure({ resizable: false, HTMLAttributes: { class: 'pl-table' } }), T.TableRow, T.TableHeader, T.TableCell,
      T.Link.configure({ openOnClick: false, autolink: true, linkOnPaste: true, HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' } })];
  }


  /* ── the formatting toolbar (Word "Home" tab), used by My planner and the class board ── */
  const SIZES = [['.85em', 'Small'], ['', 'Normal'], ['1.25em', 'Large'], ['1.6em', 'Extra large'], ['2.2em', 'Huge']];
  const FONT_COLORS = ['#14293a', '#3d505e', '#7a868e', '#b0512a', '#c0392b', '#985c0e', '#3f7a3a', '#2b776e', '#3a58a0', '#7a4a8c'];
  const HIGHLIGHTS = [['#fff59d', 'Yellow'], ['#c8f0c0', 'Green'], ['#b9f3f0', 'Turquoise'], ['#ffd0e6', 'Pink'], ['#cfe6ff', 'Blue'], ['#ffd9b0', 'Orange'], ['#e4d4f4', 'Violet'], ['#e3e3e3', 'Grey']];
  const TI = {
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>', redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',
    left: '<path d="M4 6h16M4 10h10M4 14h16M4 18h10"/>', center: '<path d="M4 6h16M7 10h10M4 14h16M7 18h10"/>', right: '<path d="M4 6h16M10 10h10M4 14h16M10 18h10"/>',
    indent: '<path d="M4 6h16M11 10h9M11 14h9M4 18h16"/><path d="m4 9.5 3 2.5-3 2.5"/>', outdent: '<path d="M4 6h16M11 10h9M11 14h9M4 18h16"/><path d="m7 9.5-3 2.5 3 2.5"/>',
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
  const tsvg = p => `<svg class="pl-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  function toolbar({ getEditor, popover, closePop, esc, openInsert, id = 'pl' }) {
    let lastColor = '#b0512a', lastHl = '#fff59d';
    const ed = () => getEditor();
    const b = (cmd, label, inner, extra = '') => `<button type="button" class="pl-tb" data-cmd="${cmd}" aria-label="${label}" title="${label}" aria-pressed="false"${extra}>${inner}</button>`;
    const html = () => `<div class="pl-toolbar" role="toolbar" aria-label="Formatting">
      <div class="pl-grp"><button type="button" class="pl-tb pl-insert" data-cmd="insert" title="Insert a block (or type / at the start of a line)" aria-label="Insert a block">${tsvg(TI.plus)}<span>Insert</span></button></div>
      <div class="pl-grp">${b('undo', 'Undo (Ctrl+Z)', tsvg(TI.undo))}${b('redo', 'Redo (Ctrl+Y)', tsvg(TI.redo))}</div>
      <div class="pl-grp"><label class="sr-only" for="${id}-style">Style</label><select id="${id}-style" class="pl-style" data-tb="style" title="Style"><option value="p">Normal text</option><option value="1">Heading 1</option><option value="2">Heading 2</option><option value="3">Heading 3</option></select>
        <label class="sr-only" for="${id}-size">Text size</label><select id="${id}-size" class="pl-style pl-size" data-tb="size" title="Text size">${SIZES.map(([v, n]) => `<option value="${v}">${n}</option>`).join('')}</select></div>
      <div class="pl-grp">${b('bold', 'Bold (Ctrl+B)', '<b>B</b>')}${b('italic', 'Italic (Ctrl+I)', '<i class="pl-it">I</i>')}${b('underline', 'Underline (Ctrl+U)', '<u>U</u>')}${b('strike', 'Strikethrough', '<s>S</s>')}</div>
      <div class="pl-grp">${b('color', 'Font colour', '<span class="pl-a">A</span><i class="pl-bar" data-bar="color"></i>', ' aria-haspopup="true"')}${b('highlight', 'Text highlight colour', tsvg(TI.pen) + '<i class="pl-bar" data-bar="highlight"></i>', ' aria-haspopup="true"')}</div>
      <div class="pl-grp pl-fold">${b('left', 'Align left', tsvg(TI.left))}${b('center', 'Centre', tsvg(TI.center))}${b('right', 'Align right', tsvg(TI.right))}</div>
      <div class="pl-grp">${b('bullets', 'Bulleted list', tsvg(TI.bullets))}${b('numbers', 'Numbered list', tsvg(TI.numbers))}${b('tasks', 'To-do list', tsvg(TI.tasks))}${b('outdent', 'Decrease indent (Shift+Tab)', tsvg(TI.outdent))}${b('indent', 'Increase indent (Tab)', tsvg(TI.indent))}</div>
      <div class="pl-grp">${b('quote', 'Quote', tsvg(TI.quote))}${b('link', 'Link (Ctrl+K)', tsvg(TI.link))}</div>
      <div class="pl-grp pl-tablegrp" hidden>${b('rowAfter', 'Add a row below', tsvg(TI.rowAdd))}${b('colAfter', 'Add a column to the right', tsvg(TI.colAdd))}${b('rowDel', 'Delete this row', tsvg(TI.rowDel))}${b('colDel', 'Delete this column', tsvg(TI.colDel))}${b('tableDel', 'Delete the table', tsvg(TI.tableDel))}</div>
    </div>`;
    function linkPop(anchor) {
      const e = ed(); if (!e || !anchor) return; const had = e.getAttributes('link').href || '';
      popover(anchor, `<form class="pl-task-pop pl-linkpop" novalidate><b>${had ? 'Edit link' : 'Add a link'}</b><label>Web address<input name="href" type="url" inputmode="url" value="${esc(had)}" placeholder="https://…" autofocus></label>
        <div class="pl-pop-actions">${had ? '<button type="button" class="pl-link danger" data-unlink>Remove link</button>' : '<span></span>'}<button class="pl-btn" type="submit">${had ? 'Save' : 'Add link'}</button></div></form>`, p => {
        const f = p.querySelector('form');
        f.addEventListener('submit', ev => { ev.preventDefault(); let v = String(new FormData(f).get('href') || '').trim(); closePop();
          if (!v) { e.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
          if (!/^(https?:|mailto:)/i.test(v)) v = 'https://' + v.replace(/^\/+/, '');
          if (e.state.selection.empty && !had) e.chain().focus().insertContent({ type: 'text', text: v, marks: [{ type: 'link', attrs: { href: v } }] }).run();
          else e.chain().focus().extendMarkRange('link').setLink({ href: v }).run(); });
        p.querySelector('[data-unlink]')?.addEventListener('click', () => { closePop(); e.chain().focus().extendMarkRange('link').unsetLink().run(); });
      });
    }
    function palette(anchor, kind, tbEl) {
      const cols = kind === 'color' ? FONT_COLORS.map(c => [c, c]) : HIGHLIGHTS;
      popover(anchor, `<div class="pl-pal" role="menu" aria-label="${kind === 'color' ? 'Font colour' : 'Highlight colour'}">
        <b>${kind === 'color' ? 'Font colour' : 'Highlight'}</b>
        <div class="pl-sw ${kind}">${cols.map(([c, n]) => `<button type="button" role="menuitem" style="--sw:${c}" data-pick="${c}" title="${esc(n)}" aria-label="${esc(n)}"></button>`).join('')}</div>
        <button type="button" class="pl-link" data-pick="">${kind === 'color' ? 'Automatic' : 'No colour'}</button></div>`, pop => {
        pop.addEventListener('click', ev => { const t = ev.target.closest('[data-pick]'); if (!t) return; const v = t.dataset.pick, c = ed().chain().focus();
          if (kind === 'color') { if (v) { lastColor = v; c.setColor(v).run(); } else c.unsetColor().run(); }
          else { if (v) { lastHl = v; c.setHighlight({ color: v }).run(); } else c.unsetHighlight().run(); }
          closePop(); paint(tbEl || anchor.closest('.pl-toolbar')); });
      });
    }
    function run(cmd, el) {
      const e = ed(); if (!e) return; const c = e.chain().focus();
      ({ undo: () => c.undo().run(), redo: () => c.redo().run(), bold: () => c.toggleBold().run(), italic: () => c.toggleItalic().run(),
        underline: () => c.toggleUnderline().run(), strike: () => c.toggleStrike().run(),
        left: () => c.setTextAlign('left').run(), center: () => c.setTextAlign('center').run(), right: () => c.setTextAlign('right').run(),
        bullets: () => c.toggleBulletList().run(), numbers: () => c.toggleOrderedList().run(), tasks: () => c.toggleTaskList().run(),
        indent: () => indent(e, 1), outdent: () => indent(e, -1),
        quote: () => c.toggleBlockquote().run(), link: () => linkPop(el), insert: () => openInsert?.(),
        rowAfter: () => c.addRowAfter().run(), colAfter: () => c.addColumnAfter().run(), rowDel: () => c.deleteRow().run(), colDel: () => c.deleteColumn().run(), tableDel: () => c.deleteTable().run(),
        color: () => palette(el, 'color'), highlight: () => palette(el, 'highlight') })[cmd]?.();
    }
    function change(t) {   // the two drop-downs; returns true when it handled the event
      const e = ed(); if (!e || !t?.dataset?.tb) return false; const v = t.value, c = e.chain().focus();
      if (t.dataset.tb === 'style') { if (v === 'p') c.setParagraph().run(); else c.toggleHeading({ level: +v }).run(); return true; }
      if (t.dataset.tb === 'size') { if (v) c.setFontSize(v).run(); else c.unsetFontSize().run(); return true; }
      return false;
    }
    function paint(tb) {
      const e = ed(); if (!tb || !e) return;
      const on = { bold: e.isActive('bold'), italic: e.isActive('italic'), underline: e.isActive('underline'), strike: e.isActive('strike'),
        left: e.isActive({ textAlign: 'left' }), center: e.isActive({ textAlign: 'center' }), right: e.isActive({ textAlign: 'right' }),
        bullets: e.isActive('bulletList'), numbers: e.isActive('orderedList'), tasks: e.isActive('taskList'), quote: e.isActive('blockquote'), link: e.isActive('link') };
      const tg = tb.querySelector('.pl-tablegrp'); if (tg) tg.hidden = !e.isActive('table');
      tb.querySelectorAll('button[data-cmd]').forEach(x => { if (x.dataset.cmd in on) { x.setAttribute('aria-pressed', String(on[x.dataset.cmd])); x.classList.toggle('on', on[x.dataset.cmd]); } });
      const st = tb.querySelector('[data-tb=style]'); if (st) st.value = [1, 2, 3].find(l => e.isActive('heading', { level: l })) || 'p';
      const sz = tb.querySelector('[data-tb=size]'); if (sz) { const f = e.getAttributes('textStyle').fontSize || ''; sz.value = SIZES.some(([v]) => v === f) ? f : ''; }
      tb.querySelector('[data-bar=color]').style.background = e.getAttributes('textStyle').color || lastColor;
      tb.querySelector('[data-bar=highlight]').style.background = e.getAttributes('highlight').color || lastHl;
      tb.querySelector('[data-cmd=undo]').disabled = !e.can().undo(); tb.querySelector('[data-cmd=redo]').disabled = !e.can().redo();
    }
    return { html, run, change, paint, linkPop };
  }
  const MAX_INDENT = 8;
  /* dividers: style → [name, what to type at the start of an empty line] */
  const DIVIDERS = { line: ['Line', '---'], thick: ['Thick line', '___'], double: ['Double line', '==='], dotted: ['Dotted line', '***'], wavy: ['Wavy line', '~~~'], dots: ['Decorative dots', ''] };
  const DIVIDER_KEYS = Object.fromEntries(Object.entries(DIVIDERS).filter(([, v]) => v[1]).map(([k, v]) => [v[1], k]));
  function insertDivider(editor, variant) {
    editor.chain().focus().setHorizontalRule().run();
    const { state } = editor, $f = state.selection.$from, pos = $f.depth ? $f.before($f.depth) : $f.pos, n = state.doc.resolve(pos).nodeBefore;
    if (n && n.type.name === 'horizontalRule') editor.view.dispatch(state.tr.setNodeMarkup(pos - n.nodeSize, undefined, { ...n.attrs, variant }));
    return true;
  }
  /* typing ---, ___, ===, *** or ~~~ on an empty line turns it into that divider */
  function dividerInput(editor, from, to, text) {
    const { state } = editor, $f = state.doc.resolve(from);
    if (from !== to || $f.parent.type.name !== 'paragraph' || $f.parentOffset !== $f.parent.content.size) return false;
    for (let d = $f.depth - 1; d > 0; d--) if (/^(listItem|taskItem|tableCell|tableHeader)$/.test($f.node(d).type.name)) return false;
    const variant = DIVIDER_KEYS[$f.parent.textContent + text]; if (!variant) return false;
    editor.chain().deleteRange({ from: $f.start(), to: from }).run();
    return insertDivider(editor, variant);
  }
  /* Increase (dir 1) or decrease (dir -1) the indent, like Word: list items nest one level deeper
     (or come out one level); other text moves 2em per step. Returns false inside tables and code. */
  function indent(editor, dir) {
    const { state } = editor, $f = state.selection.$from;
    for (let d = $f.depth; d > 0; d--) {
      const n = $f.node(d).type.name;
      if (n === 'tableCell' || n === 'tableHeader' || n === 'codeBlock') return false;
      if (n === 'listItem' || n === 'taskItem') { if (dir > 0) editor.chain().focus().sinkListItem(n).run(); else editor.chain().focus().liftListItem(n).run(); return true; }
    }
    if ($f.parent.type.spec.code) return false;
    const tr = state.tr; let hit = false;
    state.doc.nodesBetween(state.selection.from, state.selection.to, (node, pos) => {
      if (node.type.name !== 'paragraph' && node.type.name !== 'heading') return;
      hit = true; const v = Math.min(MAX_INDENT, Math.max(0, (node.attrs.indent || 0) + dir));
      if (v !== (node.attrs.indent || 0)) tr.setNodeMarkup(pos, undefined, { ...node.attrs, indent: v });
    });
    if (tr.docChanged) editor.view.dispatch(tr);
    editor.commands.focus(); return hit;
  }
  /* Lists with sub-items, like Word:
     Enter at the end of an item that has sub-items → a new first sub-item (it does not take the sub-items away);
     Backspace in an empty item that has sub-items → the item goes, its sub-items move up under the item above
     (or take its place), so no empty line is left behind. */
  function listKey(editor, e) {
    if (e.key !== 'Enter' && e.key !== 'Backspace' || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return false;
    const { state } = editor, sel = state.selection, $f = sel.$from;
    if (!sel.empty || $f.depth < 3 || $f.parent.type.name !== 'paragraph') return false;
    const d = $f.depth - 1, item = $f.node(d);
    if (!/^(listItem|taskItem)$/.test(item.type.name) || $f.index(d) !== 0) return false;
    const para = $f.parent, itemPos = $f.before(d), tr = state.tr;
    if (item.childCount < 2) {   // an empty first sub-item: delete it and go back to the end of the line above
      if (e.key !== 'Backspace' || para.content.size || $f.index(d - 1) !== 0 || d < 3 || !/^(listItem|taskItem)$/.test($f.node(d - 2).type.name)) return false;
      const list = $f.node(d - 1), from = list.childCount === 1 ? $f.before(d - 1) : itemPos, to = list.childCount === 1 ? $f.after(d - 1) : itemPos + item.nodeSize;
      tr.delete(from, to);
      tr.setSelection(T().TextSelection.create(tr.doc, $f.before(d - 2) + 1 + $f.node(d - 2).child(0).nodeSize - 1));
      editor.view.dispatch(tr.scrollIntoView()); return true;
    }
    if (e.key === 'Enter') {
      if ($f.parentOffset !== para.content.size || !para.content.size) return false;
      const sub = item.child(1); if (!/List$/.test(sub.type.name)) return false;
      const at = itemPos + 1 + para.nodeSize + 1, fresh = sub.child(0).type.create(null, state.schema.nodes.paragraph.create());
      tr.insert(at, fresh).setSelection(T().TextSelection.create(tr.doc, at + 2));
      editor.view.dispatch(tr.scrollIntoView()); return true;
    }
    if ($f.parentOffset !== 0 || para.content.size) return false;
    const list = $f.node(d - 1), idx = $f.index(d - 1), rest = [];
    for (let i = 1; i < item.childCount; i++) rest.push(item.child(i));
    if (idx > 0) {
      const prev = list.child(idx - 1), prevPos = itemPos - prev.nodeSize;
      let kids = []; for (let i = 0; i < prev.childCount; i++) kids.push(prev.child(i));
      rest.forEach(n => { const last = kids[kids.length - 1]; if (last && last.type === n.type && /List$/.test(n.type.name)) { const all = []; last.forEach(c => all.push(c)); n.forEach(c => all.push(c)); kids[kids.length - 1] = last.type.create(last.attrs, all); } else kids.push(n); });
      tr.replaceWith(prevPos, itemPos + item.nodeSize, prev.type.create(prev.attrs, kids));
      const end = prevPos + 1 + prev.child(0).nodeSize - 1;
      tr.setSelection(T().TextSelection.create(tr.doc, end));
    } else {
      const lifted = []; rest.forEach(n => { if (/List$/.test(n.type.name)) n.forEach(c => lifted.push(c)); else lifted.push(item.type.create(null, n)); });
      tr.replaceWith(itemPos, itemPos + item.nodeSize, lifted);
      tr.setSelection(T().TextSelection.near(tr.doc.resolve(itemPos + 2)));
    }
    editor.view.dispatch(tr.scrollIntoView()); return true;
  }
  const T = () => window.Tiptap;
  const safeUrl = u => (typeof u === 'string' && /^https?:\/\/[^\s"'<>]+$/i.test(u.trim()) ? u.trim() : null);
  const hostOf = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return 'link'; } };
  const col = () => ({ type: 'column', content: [{ type: 'paragraph' }] });
  async function askUrl(e, ask, what) {
    let v = await ask(what); if (!v) return; v = v.trim(); if (!/^https?:\/\//i.test(v)) v = 'https://' + v.replace(/^\/+/, '');
    return safeUrl(v);
  }
  /* ── the block catalogue (used by "/" and "Turn into") ── */
  const todayText = d => d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  function blockNode(state, json) { return state.schema.nodeFromJSON(json); }
  function replaceEmptyBlock(editor, json, inner = 1) {   // put a whole new block where the cursor's empty line is
    for (let k = 0; k < 4; k++) { const $p = editor.state.selection.$from, li = $p.depth > 1 && $p.node(-1).type.name; if (li !== 'listItem' && li !== 'taskItem' || $p.parent.content.size) break; if (!editor.commands.liftListItem(li)) break; }
    const { state } = editor, $f = state.selection.$from, d = $f.depth;
    const empty = $f.parent.isTextblock && $f.parent.content.size === 0 && $f.parent.type.name === 'paragraph';
    const node = blockNode(state, json);
    if (empty && d >= 1) { const from = $f.before(d), tr = state.tr.replaceWith(from, $f.after(d), node);
      tr.setSelection(window.Tiptap.TextSelection.near(tr.doc.resolve(from + inner))); editor.view.dispatch(tr.scrollIntoView()); }
    else { const at = $f.after(Math.max(1, d)), tr = state.tr.insert(at, node); tr.setSelection(window.Tiptap.TextSelection.near(tr.doc.resolve(at + inner))); editor.view.dispatch(tr.scrollIntoView()); }
    editor.commands.focus();
  }
  const CATALOGUE = [
    { id: 'text', group: 'Basic', title: 'Text', hint: 'Plain writing', keys: 'paragraph normal plain', run: e => e.chain().focus().setParagraph().run(), active: e => e.isActive('paragraph') },
    { id: 'h1', group: 'Basic', title: 'Heading 1', short: 'Big', hint: 'Big section title', md: '#', keys: 'title h1 heading large', run: e => e.chain().focus().setHeading({ level: 1 }).run(), active: e => e.isActive('heading', { level: 1 }) },
    { id: 'h2', group: 'Basic', title: 'Heading 2', short: 'Medium', hint: 'Medium heading', md: '##', keys: 'subtitle h2 heading', run: e => e.chain().focus().setHeading({ level: 2 }).run(), active: e => e.isActive('heading', { level: 2 }) },
    { id: 'h3', group: 'Basic', title: 'Heading 3', short: 'Small', hint: 'Small heading', md: '###', keys: 'h3 heading small', run: e => e.chain().focus().setHeading({ level: 3 }).run(), active: e => e.isActive('heading', { level: 3 }) },
    { id: 'todo', group: 'Lists', title: 'To-do list', short: 'To-do', hint: 'Ticks on the calendar too', md: '[ ]', keys: 'task checkbox check todo to-do', run: e => (e.isActive('taskList') ? true : e.chain().focus().toggleTaskList().run()), active: e => e.isActive('taskList') },
    { id: 'bullet', group: 'Lists', title: 'Bulleted list', short: 'Bullets', hint: 'A simple list', md: '-', keys: 'bullet unordered ul list', run: e => (e.isActive('bulletList') ? true : e.chain().focus().toggleBulletList().run()), active: e => e.isActive('bulletList') },
    { id: 'number', group: 'Lists', title: 'Numbered list', short: 'Numbers', hint: '1, 2, 3…', md: '1.', keys: 'ordered numbered ol list', run: e => (e.isActive('orderedList') ? true : e.chain().focus().toggleOrderedList().run()), active: e => e.isActive('orderedList') },
    { id: 'toggle', group: 'Lists', title: 'Toggle', hint: 'Hide details under a line', keys: 'collapse fold details expand toggle', run: e => replaceEmptyBlock(e, { type: 'toggle', attrs: { open: true }, content: [{ type: 'paragraph' }, { type: 'paragraph' }] }, 2), active: e => e.isActive('toggle') },
    { id: 'quote', group: 'Blocks', title: 'Quote', hint: 'A quotation from a source', md: '>', keys: 'quote blockquote citation', run: e => (e.isActive('blockquote') ? true : e.chain().focus().toggleBlockquote().run()), active: e => e.isActive('blockquote') },
    { id: 'callout', group: 'Blocks', title: 'Callout', hint: 'A coloured box that stands out', keys: 'callout note info box', run: e => wrapCallout(e, 'note'), active: e => e.isActive('callout') },
    { id: 'tip', group: 'Blocks', title: 'Tip', hint: 'Green callout', icon: 'callout', tone: 'tip', keys: 'tip idea callout green', run: e => wrapCallout(e, 'tip') },
    { id: 'warning', group: 'Blocks', title: 'Warning', hint: 'Amber callout', icon: 'callout', tone: 'warning', keys: 'warning caution callout amber', run: e => wrapCallout(e, 'warning') },
    { id: 'important', group: 'Blocks', title: 'Important', hint: 'Red callout', icon: 'callout', tone: 'important', keys: 'important key callout red exam', run: e => wrapCallout(e, 'important') },
    { id: 'code', group: 'Blocks', title: 'Code', hint: 'Plain text in a box', md: '```', keys: 'code monospace pre', run: e => e.chain().focus().toggleCodeBlock().run(), active: e => e.isActive('codeBlock') },
    { id: 'table', group: 'Blocks', title: 'Table', hint: '3 × 3, with a header row', keys: 'table grid columns rows', run: e => e.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run() },
    { id: 'divider', group: 'Dividers', title: 'Divider · line', hint: 'A thin line between parts', md: '---', keys: 'divider line hr separator rule thin', run: e => insertDivider(e, 'line') },
    { id: 'divThick', group: 'Dividers', icon: 'divThick', title: 'Divider · thick line', hint: 'A strong line between sections', md: '___', keys: 'divider thick bold heavy line hr separator rule', run: e => insertDivider(e, 'thick') },
    { id: 'divDouble', group: 'Dividers', icon: 'divDouble', title: 'Divider · double line', hint: 'Two thin lines', md: '===', keys: 'divider double line hr separator rule equals', run: e => insertDivider(e, 'double') },
    { id: 'divDotted', group: 'Dividers', icon: 'divDotted', title: 'Divider · dotted line', hint: 'A light, dotted break', md: '***', keys: 'divider dotted dashed line hr separator rule', run: e => insertDivider(e, 'dotted') },
    { id: 'divWavy', group: 'Dividers', icon: 'divWavy', title: 'Divider · wavy line', hint: 'A playful wave', md: '~~~', keys: 'divider wavy wave squiggle line hr separator rule', run: e => insertDivider(e, 'wavy') },
    { id: 'divDots', group: 'Dividers', icon: 'divDots', title: 'Divider · decorative dots', hint: 'Three gold dots', keys: 'divider dots ornament decorative hr separator', run: e => insertDivider(e, 'dots') },
    { id: 'image', group: 'Media & layout', title: 'Image', hint: 'A picture from a web address', keys: 'image picture photo img', run: async (e, x) => { const src = await askUrl(e, x.ask, 'image'); if (src) replaceEmptyBlock(e, { type: 'picture', attrs: { src, alt: '' } }, 1); } },
    { id: 'bookmark', group: 'Media & layout', title: 'Link card', hint: 'A web page as a card', keys: 'bookmark link card url web', run: async (e, x) => { const href = await askUrl(e, x.ask, 'link'); if (href) replaceEmptyBlock(e, { type: 'bookmark', attrs: { href, title: hostOf(href) } }, 1); } },
    { id: 'cols2', group: 'Media & layout', title: '2 columns', hint: 'Two blocks side by side', keys: 'columns two side layout grid', run: e => replaceEmptyBlock(e, { type: 'columns', content: [col(), col()] }, 3) },
    { id: 'cols3', group: 'Media & layout', title: '3 columns', hint: 'Three blocks side by side', keys: 'columns three side layout grid', run: e => replaceEmptyBlock(e, { type: 'columns', content: [col(), col(), col()] }, 3) },
    { id: 'today', group: 'Insert', title: 'Today’s date', hint: todayText(new Date()), icon: 'date', keys: 'date today now', run: e => e.chain().focus().insertContent(todayText(new Date()) + ' ').run() },
    { id: 'tomorrow', group: 'Insert', title: 'Tomorrow’s date', hint: (() => { const d = new Date(); d.setDate(d.getDate() + 1); return todayText(d); })(), icon: 'date', keys: 'date tomorrow', run: e => { const d = new Date(); d.setDate(d.getDate() + 1); return e.chain().focus().insertContent(todayText(d) + ' ').run(); } },
  ];
  function wrapCallout(e, tone) {
    if (e.isActive('callout')) { const { $from } = e.state.selection; for (let d = $from.depth; d > 0; d--) if ($from.node(d).type.name === 'callout') { e.view.dispatch(e.state.tr.setNodeMarkup($from.before(d), undefined, { tone })); return true; } }
    return e.chain().focus().wrapIn('callout', { tone }).run();
  }
  const TURN_INTO = ['text', 'h1', 'h2', 'h3', 'todo', 'bullet', 'number', 'quote', 'callout', 'code'];
  const iconFor = it => `<span class="pl-bk-ico${it.tone ? ' tone-' + it.tone : ''}">${ICONS[it.icon || it.id] || ICONS.text}</span>`;

  /* ── attach the "/" menu and block handles to one editor ── */
  function attach(editor, host, api) {
    const T = window.Tiptap, view = editor.view, esc = api.esc;
    /* "/" menu */
    const menu = document.createElement('div'); menu.className = 'pl-slash'; menu.setAttribute('role', 'listbox'); menu.setAttribute('aria-label', 'Insert a block'); menu.hidden = true; document.body.append(menu);
    let st = null, dismissed = -1;
    const match = q => { const s = q.trim().toLowerCase(); if (!s) return CATALOGUE; return CATALOGUE.filter(it => (it.title + ' ' + it.keys).toLowerCase().split(/\s+/).some(w => w.startsWith(s)) || it.title.toLowerCase().includes(s)); };
    function paintMenu() {
      const list = st.items; let g = '';
      menu.innerHTML = list.length ? list.map((it, i) => { const head = it.group !== g ? `<p class="pl-slash-g">${it.group}</p>` : ''; g = it.group;
        return `${head}<button type="button" role="option" class="pl-slash-it${i === st.i ? ' on' : ''}" data-i="${i}" aria-selected="${i === st.i}">${iconFor(it)}<span><b>${esc(it.title)}</b><small>${esc(it.hint)}</small></span>${it.md ? `<kbd>${esc(it.md)}</kbd>` : ''}</button>`; }).join('')
        : '<p class="pl-slash-none">No block called that. Keep typing, or press Esc.</p>';
      const c = view.coordsAtPos(st.from), mh = Math.min(360, menu.scrollHeight || 360), below = c.bottom + 6 + mh < innerHeight;
      menu.style.left = Math.max(8, Math.min(c.left - 6, innerWidth - 300)) + 'px';
      menu.style.top = (below ? c.bottom + 6 : Math.max(8, c.top - mh - 6)) + 'px';
      menu.querySelector('.on')?.scrollIntoView({ block: 'nearest' });
    }
    function check() {
      const s = editor.state.selection;
      if (!editor.isFocused || !s.empty || s.$from.parent.type.spec.code) return close();
      const $f = s.$from, before = $f.parent.textBetween(0, $f.parentOffset, null, '￼');
      const m = /^\s*\/([\p{L}\p{N}’' -]{0,24})$/u.exec(before);   // only at the start of a line, not in the middle of a sentence
      if (!m) return close();
      const from = $f.pos - m[1].length - 1; if (from === dismissed) return;
      const items = match(m[1]);
      if (!items.length && m[1].length > 12) return close();
      const keep = st && st.from === from ? Math.min(st.i, Math.max(0, items.length - 1)) : 0;
      if (menu.hidden) lastXY = '';
      st = { from, q: m[1], items, i: m[1] !== st?.q ? 0 : keep }; menu.hidden = false; paintMenu();
    }
    function close() { if (!st) return; st = null; menu.hidden = true; }
    function ask(what) {   // a small box under the caret asking for a web address
      return new Promise(done => {
        const c = view.coordsAtPos(editor.state.selection.from), anchor = { getBoundingClientRect: () => ({ left: c.left, right: c.left, top: c.top, bottom: c.bottom, width: 0, height: c.bottom - c.top }) };
        let answered = false; const finish = v => { if (answered) return; answered = true; done(v); };
        api.popover(anchor, `<form class="pl-task-pop pl-linkpop" novalidate><b>${what === 'image' ? 'Add an image' : 'Add a link card'}</b>
          <label>${what === 'image' ? 'Image address (ends in .jpg, .png…)' : 'Web address'}<input name="u" type="url" inputmode="url" placeholder="https://…" autofocus></label>
          <div class="pl-pop-actions"><span></span><button class="pl-btn" type="submit">Add</button></div></form>`, p => {
          const f = p.querySelector('form'); f.addEventListener('submit', ev => { ev.preventDefault(); const v = String(new FormData(f).get('u') || ''); api.closePop(); finish(v); editor.commands.focus(); });
          new MutationObserver((_, o) => { if (!p.isConnected) { o.disconnect(); finish(null); } }).observe(document.body, { childList: true });
        });
      });
    }
    function choose(i) {
      const it = st?.items[i]; if (!it) return; const from = st.from, to = editor.state.selection.from; close(); dismissed = -1;
      editor.chain().focus().deleteRange({ from, to }).run(); it.run(editor, { ask });
    }
    menu.addEventListener('mousedown', e => e.preventDefault());
    menu.addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) choose(+b.dataset.i); });
    let lastXY = '';   // a menu that opens under a still mouse must not change the choice
    menu.addEventListener('mousemove', e => { const xy = e.screenX + ',' + e.screenY, moved = lastXY && xy !== lastXY; lastXY = xy; if (!moved) return; const b = e.target.closest('[data-i]'); if (b && st && +b.dataset.i !== st.i) { st.i = +b.dataset.i; menu.querySelectorAll('.pl-slash-it').forEach(x => { const on = +x.dataset.i === st.i; x.classList.toggle('on', on); x.setAttribute('aria-selected', String(on)); }); } });
    const onTr = () => requestAnimationFrame(check);
    editor.on('transaction', onTr); editor.on('blur', () => setTimeout(() => { if (!editor.isFocused) close(); }, 120));

    /* block handle */
    host.classList.add('pl-has-handle');
    const h = document.createElement('div'); h.className = 'pl-bh'; h.hidden = true;
    h.innerHTML = `<button type="button" class="pl-bh-add" title="Add a block below" aria-label="Add a block below">${ICONS.plus}</button><button type="button" class="pl-bh-grip" draggable="true" title="Drag to move · click for options" aria-label="Block options (drag to move)">${ICONS.grip}</button>`;
    host.append(h);
    let cur = null, hideT = 0;
    const blockDom = el => { for (let x = el; x && x !== view.dom && x !== host; x = x.parentElement) {
      if (x.tagName === 'LI' && x.parentElement?.parentElement === view.dom) return x;
      if (x.parentElement === view.dom) return x; } return null; };
    const blockAt = dom => { const d = dom?.pmViewDesc; if (!d || !d.node) return null; const start = d.posBefore; return { dom, start, node: editor.state.doc.nodeAt(start) }; };
    function place(dom) {
      const b = blockAt(dom); if (!b || !b.node) return;
      cur = b; const r = dom.getBoundingClientRect(), hr = host.getBoundingClientRect(), cs = getComputedStyle(dom);
      const lh = parseFloat(cs.lineHeight) || 26, first = Math.min(r.height, lh + parseFloat(cs.paddingTop || 0) * 2);
      h.style.top = (r.top - hr.top + first / 2 - 13 + (dom.tagName === 'HR' ? 0 : parseFloat(cs.paddingTop || 0) / 2)) + 'px';
      h.style.left = (r.left - hr.left - 50) + 'px'; h.hidden = false;
    }
    const onMove = e => { if (!editor.isEditable || matchMedia('(hover: none)').matches) return; if (h.contains(e.target)) { clearTimeout(hideT); return; }
      const d = blockDom(e.target); if (d) { clearTimeout(hideT); place(d); } };
    const onLeave = () => { clearTimeout(hideT); hideT = setTimeout(() => { h.hidden = true; cur = null; }, 350); };
    host.addEventListener('mousemove', onMove); host.addEventListener('mouseleave', onLeave);
    h.querySelector('.pl-bh-add').addEventListener('click', () => {
      if (!cur) return; const { start, node } = cur, at = start + node.nodeSize, li = /^(listItem|taskItem)$/.test(node.type.name);
      const json = li ? { type: node.type.name, content: [{ type: 'paragraph' }] } : { type: 'paragraph' };
      editor.chain().focus().insertContentAt(at, json).setTextSelection(at + (li ? 2 : 1)).insertContent('/').run();
    });
    const grip = h.querySelector('.pl-bh-grip');
    grip.addEventListener('dragstart', e => {
      if (!cur) return; const sel = T.NodeSelection.create(editor.state.doc, cur.start);
      view.dispatch(editor.state.tr.setSelection(sel)); const slice = view.state.selection.content();
      e.dataTransfer.effectAllowed = 'copyMove'; e.dataTransfer.setData('text/plain', cur.node.textContent || ' ');
      try { e.dataTransfer.setDragImage(cur.dom, 8, 10); } catch (x) { /* ignore */ }
      view.dragging = { slice, move: true }; host.classList.add('pl-dragging-block');
    });
    grip.addEventListener('dragend', () => { host.classList.remove('pl-dragging-block'); h.hidden = true; });
    grip.addEventListener('click', () => { if (cur) blockMenu(cur, grip); });

    function moveBlock(b, dir) {
      const { state } = editor, $ = state.doc.resolve(b.start), idx = $.index(), parent = $.parent, node = b.node;
      if (dir < 0 && idx === 0 || dir > 0 && idx >= parent.childCount - 1) return false;
      const tr = state.tr.delete(b.start, b.start + node.nodeSize);
      const at = dir < 0 ? b.start - parent.child(idx - 1).nodeSize : b.start + parent.child(idx + 1).nodeSize;
      tr.insert(at, node); tr.setSelection(T.TextSelection.near(tr.doc.resolve(at + 1))); view.dispatch(tr.scrollIntoView()); editor.commands.focus(); return true;
    }
    function selectedBlock() {
      const $f = editor.state.selection.$from; if ($f.depth < 1) return null;
      for (let d = $f.depth; d >= 1; d--) { const n = $f.node(d); if (/^(listItem|taskItem)$/.test(n.type.name) && d === 2) return { start: $f.before(d), node: n }; }
      return { start: $f.before(1), node: $f.node(1) };
    }
    function blockMenu(b, anchor) {
      const name = b.node.type.name, canTurn = !/^(table|horizontalRule|toggle)$/.test(name);
      api.popover(anchor, `<div class="pl-bmenu" role="menu" aria-label="Block options">
        ${canTurn ? `<p class="pl-slash-g">Turn into</p><div class="pl-bturn">${TURN_INTO.map(id => { const it = CATALOGUE.find(c => c.id === id); return `<button type="button" role="menuitem" data-turn="${id}" title="${esc(it.title)}" aria-label="${esc(it.title)}">${iconFor(it)}<span>${esc(it.short || it.title)}</span></button>`; }).join('')}</div>` : ''}
        <p class="pl-slash-g">Block</p>
        <button type="button" role="menuitem" data-act="dup">${ICONS.copy}<span>Duplicate</span><kbd>Ctrl D</kbd></button>
        <button type="button" role="menuitem" data-act="up">${ICONS.up}<span>Move up</span><kbd>Alt ⇧ ↑</kbd></button>
        <button type="button" role="menuitem" data-act="down">${ICONS.down}<span>Move down</span><kbd>Alt ⇧ ↓</kbd></button>
        <button type="button" role="menuitem" class="danger" data-act="del">${ICONS.trash}<span>Delete</span><kbd>Del</kbd></button></div>`, p => p.addEventListener('click', ev => {
        const t = ev.target.closest('[data-turn],[data-act]'); if (!t) return; api.closePop();
        const fresh = blockAt(b.dom) || b; if (!fresh.node) return;
        if (t.dataset.turn) { editor.chain().focus().setTextSelection(fresh.start + (/^(listItem|taskItem)$/.test(fresh.node.type.name) ? 2 : 1)).run();
          const it = CATALOGUE.find(c => c.id === t.dataset.turn);
          if (editor.isActive('callout') && it.id !== 'callout') editor.chain().focus().lift('callout').run();
          if (it.id === 'text') { ['bulletList', 'orderedList', 'taskList'].forEach(l => { if (editor.isActive(l)) editor.chain().focus().liftListItem(editor.isActive('taskList') ? 'taskItem' : 'listItem').run(); }); if (editor.isActive('blockquote')) editor.chain().focus().lift('blockquote').run(); }
          it.run(editor); return; }
        const a = t.dataset.act;
        if (a === 'dup') { const tr = editor.state.tr.insert(fresh.start + fresh.node.nodeSize, fresh.node.copy(fresh.node.content)); view.dispatch(tr); }
        if (a === 'up') moveBlock(fresh, -1);
        if (a === 'down') moveBlock(fresh, 1);
        if (a === 'del') editor.chain().focus().setNodeSelection(fresh.start).deleteSelection().run();
      }));
    }

    /* keys: the "/" menu first, then block shortcuts */
    function keydown(_v, e) {
      if (/^(Enter|Tab|ArrowUp|ArrowDown|Escape)$/.test(e.key)) { try { view.domObserver?.flush(); } catch (x) { /* ignore */ } check(); }
      if (st && !menu.hidden) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = st.items.length; if (n) { st.i = (st.i + (e.key === 'ArrowDown' ? 1 : n - 1)) % n; paintMenu(); } return true; }
        if ((e.key === 'Enter' || e.key === 'Tab') && st.items.length) { e.preventDefault(); choose(st.i); return true; }
        if (e.key === 'Escape') { e.preventDefault(); dismissed = st.from; close(); return true; }
      }
      if (listKey(editor, e)) { e.preventDefault(); return true; }
      if (e.key === 'Tab' && !e.ctrlKey && !e.metaKey && !e.altKey) { if (indent(editor, e.shiftKey ? -1 : 1) !== false) { e.preventDefault(); return true; } return false; }
      if (e.altKey && e.shiftKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) { const b = selectedBlock(); if (b) { e.preventDefault(); moveBlock(b, e.key === 'ArrowUp' ? -1 : 1); return true; } }
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'd') { const b = selectedBlock(); if (b) { e.preventDefault(); view.dispatch(editor.state.tr.insert(b.start + b.node.nodeSize, b.node.copy(b.node.content))); return true; } }
      return false;
    }
    function openInsert() {   // toolbar "Insert" button: a new line with "/"
      const $f = editor.state.selection.$from, empty = $f.parent.isTextblock && !$f.parent.content.size;
      if (empty) editor.chain().focus().insertContent('/').run();
      else { const b = selectedBlock(); if (!b) return; const at = b.start + b.node.nodeSize, li = /^(listItem|taskItem)$/.test(b.node.type.name);
        editor.chain().focus().insertContentAt(at, li ? { type: b.node.type.name, content: [{ type: 'paragraph' }] } : { type: 'paragraph' }).setTextSelection(at + (li ? 2 : 1)).insertContent('/').run(); }
    }
    return { keydown, openInsert, close,
      destroy() { editor.off('transaction', onTr); menu.remove(); h.remove(); host.removeEventListener('mousemove', onMove); host.removeEventListener('mouseleave', onLeave); host.classList.remove('pl-has-handle'); } };
  }
  /* a note opens with an empty last line already there (no edit needed to add it) */
  function withTrailingLine(content) {
    if (!content || content.type !== 'doc' || !Array.isArray(content.content) || !content.content.length) return content;
    const last = content.content[content.content.length - 1];
    return last.type === 'paragraph' ? content : { ...content, content: [...content.content, { type: 'paragraph' }] };
  }
  return { extensions, attach, withTrailingLine, indent, dividerInput, toolbar, ICONS };
})();
