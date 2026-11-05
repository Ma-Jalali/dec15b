/* DEC15 · notes on the readings (like the margin comments in PDF Expert or Google Docs).
   Select words in a reading → "Add note" (in the little bar that appears over the selection, or in the toolbar).
   The words get a soft highlight and a note card appears in a column on the right, level with the words.
   Hover the words → their card lights up; hover a card → its words light up; click the words → write in the card.
   A note can be handwritten (Excalifont, as on the whiteboard) or plain (sans-serif), bold / italic / underlined,
   smaller or larger, in one of five colours. Notes are saved with the rest of the student's work (state.readNotes);
   the words they belong to are a 'note' range in state.marks, so they move with the reader's other marks. */
window.createDEC15Notes = function ({ getState, save, esc, toast, reader }) {
  const COLORS = [['yellow', 'Yellow'], ['green', 'Green'], ['blue', 'Blue'], ['pink', 'Pink'], ['purple', 'Purple']];
  const SIZES = ['s', 'm', 'l'];
  const st = () => getState(), notes = () => (st().readNotes ??= {});
  let active = null, layoutT = 0, bubble = null, ro = null;

  /* only simple formatting survives: bold, italic, underline and line breaks */
  const ALLOWED = new Set(['B', 'STRONG', 'I', 'EM', 'U', 'BR', 'DIV', 'P']);
  function clean(html) {
    const t = document.createElement('template'); t.innerHTML = String(html || '');
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) return;
      if (n.nodeType !== 1 || !ALLOWED.has(n.tagName)) { if (n.nodeType === 1) { walk(n); n.replaceWith(...n.childNodes); } else n.remove(); return; }
      [...n.attributes].forEach(a => n.removeAttribute(a.name)); walk(n);
    });
    walk(t.content); return t.innerHTML;
  }
  const plain = html => { const d = document.createElement('div'); d.innerHTML = html || ''; return (d.textContent || '').trim(); };
  const when = t => { try { return new Date(t).toLocaleDateString(undefined, { day: 'numeric', month: 'short' }); } catch (e) { return ''; } };
  const layoutEl = () => document.querySelector('#resource-body .rd-layout');
  const rail = () => document.querySelector('#resource-body .rd-notes');
  const srcId = () => layoutEl()?.dataset.src || '';
  const mine = () => Object.values(notes()).filter(n => n && n.src === srcId()).sort((a, b) => a.at - b.at);

  function card(n) {
    const short = n.quote.length > 90 ? n.quote.slice(0, 88).trim() + '…' : n.quote;
    return `<article class="rn-card c-${n.color}${n.id === active ? ' is-active' : ''}" data-nid="${n.id}" style="--nc:var(--rn-${n.color})">
      <button type="button" class="rn-quote" data-rn-go="${n.id}" title="Show these words in the text">“${esc(short)}”</button>
      <div class="rn-body f-${n.font} s-${n.size}" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Your note on: ${esc(short)}" data-rn-body="${n.id}" data-placeholder="Write your note…">${clean(n.html)}</div>
      <div class="rn-tools" role="toolbar" aria-label="Note style">
        <span class="rn-seg" role="group" aria-label="Font"><button type="button" data-rn-font="hand" aria-pressed="${n.font === 'hand'}" title="Handwriting"><span class="f-hand">Aa</span></button><button type="button" data-rn-font="sans" aria-pressed="${n.font === 'sans'}" title="Plain font"><span class="f-sans">Aa</span></button></span>
        <span class="rn-seg" role="group" aria-label="Style"><button type="button" data-rn-cmd="bold" title="Bold"><b>B</b></button><button type="button" data-rn-cmd="italic" title="Italic"><i>I</i></button><button type="button" data-rn-cmd="underline" title="Underline"><u>U</u></button></span>
        <span class="rn-seg" role="group" aria-label="Size"><button type="button" data-rn-size="-1" title="Smaller" aria-label="Smaller text"${n.size === 's' ? ' disabled' : ''}>A<small>−</small></button><button type="button" data-rn-size="1" title="Larger" aria-label="Larger text"${n.size === 'l' ? ' disabled' : ''}>A<small>+</small></button></span>
        <span class="rn-dots" role="radiogroup" aria-label="Colour">${COLORS.map(([c, name]) => `<button type="button" role="radio" class="rn-dot" style="--d:var(--rn-${c})" data-rn-color="${c}" aria-checked="${n.color === c}" title="${name}" aria-label="${name}"></button>`).join('')}</span>
        <button type="button" class="rn-del" data-rn-del title="Delete this note" aria-label="Delete this note"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4.5h4V6m-6.5 0 .8 10h7.4l.8-10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      </div>
      <span class="rn-when">${when(n.at)}</span>
    </article>`;
  }

  /* the column: cards line up with their words; if two would overlap, the later one moves down (the active one stays put) */
  function layout() {
    const L = layoutEl(), R = rail(); if (!L || !R) return;
    const list = mine(); L.classList.toggle('has-notes', list.length > 0);
    if (!list.length) { R.innerHTML = ''; R.style.minHeight = ''; return; }
    if (getComputedStyle(R).position === 'static' || matchMedia('(max-width: 860px)').matches) { R.querySelectorAll('.rn-card').forEach(c => { c.style.top = ''; }); R.style.minHeight = ''; return; }
    const top0 = R.getBoundingClientRect().top, items = [];
    R.querySelectorAll('.rn-card').forEach(c => { const a = document.querySelector(`.note-anchor[data-note="${c.dataset.nid}"]`); items.push({ c, want: a ? a.getBoundingClientRect().top - top0 - 6 : 0, h: c.offsetHeight }); });
    items.sort((a, b) => a.want - b.want);
    const k = Math.max(0, items.findIndex(i => i.c.dataset.nid === active)), gap = 10;
    if (items.length) { items[k].y = Math.max(0, items[k].want);
      for (let i = k + 1; i < items.length; i++) items[i].y = Math.max(items[i].want, items[i - 1].y + items[i - 1].h + gap);
      for (let i = k - 1; i >= 0; i--) items[i].y = Math.max(0, Math.min(items[i].want, items[i + 1].y - items[i].h - gap)); }
    let fix = 0; items.forEach(i => { if (i.y < fix) i.y = fix; fix = i.y + i.h + gap; });   // never overlap at the top either
    items.forEach(i => { i.c.style.top = Math.round(i.y) + 'px'; });
    R.style.minHeight = Math.round(fix) + 'px';
  }
  const relayout = () => { cancelAnimationFrame(layoutT); layoutT = requestAnimationFrame(layout); };

  function paint() {
    const R = rail(); if (!R) return;
    const list = mine();
    R.innerHTML = list.length ? `<h4 class="rn-title">My notes <span>${list.length}</span></h4>${list.map(card).join('')}` : '';
    layout(); relayout();
  }

  /* called by the reading window each time a reading is shown */
  function mount() {
    if (!layoutEl()) return;
    paint();
    ro?.disconnect(); ro = 'ResizeObserver' in window ? new ResizeObserver(relayout) : null;
    ro?.observe(layoutEl()); document.fonts?.ready?.then(relayout);
  }

  function add() {
    const sel = reader.pick();
    if (!sel) { toast('Select some words in the reading first. Then choose Add note.'); return; }
    if ((st().marks?.[sel.id] || []).some(r => r.type === 'note' && r.start < sel.end && r.end > sel.start)) { toast('These words already have a note. Click them to open it.'); return; }
    const id = 'nt' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    const prev = Object.values(notes()).sort((a, b) => b.at - a.at)[0];
    notes()[id] = { id, src: srcId(), doc: sel.id, quote: sel.value.slice(sel.start, sel.end).replace(/\s+/g, ' ').trim(), html: '', font: prev?.font || 'hand', size: prev?.size || 'm', color: prev?.color || 'yellow', at: Date.now() };
    reader.addNoteRange(sel.id, sel.start, sel.end, id);
    window.getSelection()?.removeAllRanges(); hideBubble();
    active = id; save(); paint(); focusBody(id);
  }
  function focusBody(id) {
    const b = document.querySelector(`[data-rn-body="${id}"]`); if (!b) return;
    b.closest('.rn-card').scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    b.focus({ preventScroll: true });
    const r = document.createRange(); r.selectNodeContents(b); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
  }
  function remove(id, quiet) {
    if (!notes()[id]) return;
    delete notes()[id]; reader.dropNoteRange(id); if (active === id) active = null; save(); paint();
    if (!quiet) toast('Note deleted.');
  }
  function setActive(id) {
    if (active === id) return; active = id;
    document.querySelectorAll('.rn-card').forEach(c => c.classList.toggle('is-active', c.dataset.nid === id));
    document.querySelectorAll('.note-anchor[data-note]').forEach(a => a.classList.toggle('is-active', a.dataset.note === id));
    relayout();
  }
  function hot(id, on) {
    document.querySelectorAll(`.note-anchor[data-note="${id}"]`).forEach(a => a.classList.toggle('is-hot', on));
    document.querySelector(`.rn-card[data-nid="${id}"]`)?.classList.toggle('is-hot', on);
  }
  function update(id, patch) {
    const n = notes()[id]; if (!n) return; Object.assign(n, patch); save();
    const c = document.querySelector(`.rn-card[data-nid="${id}"]`); if (!c) return;
    if (patch.color) { c.style.setProperty('--nc', `var(--rn-${n.color})`); c.className = c.className.replace(/c-\w+/, 'c-' + n.color); c.querySelectorAll('[data-rn-color]').forEach(b => b.setAttribute('aria-checked', b.dataset.rnColor === n.color)); reader.refresh(n.doc); }
    const b = c.querySelector('.rn-body'); b.className = `rn-body f-${n.font} s-${n.size}`;
    c.querySelectorAll('[data-rn-font]').forEach(x => x.setAttribute('aria-pressed', x.dataset.rnFont === n.font));
    c.querySelector('[data-rn-size="-1"]').disabled = n.size === 's'; c.querySelector('[data-rn-size="1"]').disabled = n.size === 'l';
    relayout();
  }

  /* the little bar over a selection in a reading: highlight, blue, underline or note */
  function showBubble() {
    const s = getSelection(); if (!s || s.isCollapsed || !s.rangeCount) return hideBubble();
    const r = s.getRangeAt(0), host = (r.commonAncestorContainer.nodeType === 1 ? r.commonAncestorContainer : r.commonAncestorContainer.parentElement)?.closest('.rd-layout .source-text');
    if (!host || !r.toString().trim()) return hideBubble();
    const box = r.getBoundingClientRect(), dlg = document.querySelector('#resource-dialog'); if (!dlg) return;
    if (!bubble) {
      bubble = document.createElement('div'); bubble.className = 'rn-bubble mark-tools'; bubble.dataset.markScope = 'reading'; bubble.setAttribute('role', 'toolbar'); bubble.setAttribute('aria-label', 'Mark the selected words');
      bubble.innerHTML = '<button type="button" data-mark-action="yellow" title="Highlight"><i class="swatch yellow"></i></button><button type="button" data-mark-action="blue" title="Blue highlight"><i class="swatch blue"></i></button><button type="button" data-mark-action="underline" title="Underline"><span class="underline-icon">U</span></button><span class="rn-sep"></span><button type="button" class="rn-bubble-note" data-note-add title="Add a note"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 3.5h12a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3v-3H4A1.5 1.5 0 0 1 2.5 13V5A1.5 1.5 0 0 1 4 3.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 6.5v5M7.5 9h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>Note</button>';
    }
    if (bubble.parentElement !== dlg) dlg.append(bubble);
    bubble.hidden = false;
    const d = dlg.getBoundingClientRect(), w = bubble.offsetWidth, h = bubble.offsetHeight;
    let x = box.left + box.width / 2 - w / 2 - d.left, y = box.top - h - 10 - d.top;
    if (y < 64) y = box.bottom + 10 - d.top;
    bubble.style.left = Math.max(8, Math.min(x, d.width - w - 8)) + 'px'; bubble.style.top = y + 'px';
  }
  function hideBubble() { if (bubble) bubble.hidden = true; }

  document.addEventListener('mousedown', e => { if (e.target.closest('[data-note-add], .rn-tools button, .rn-bubble button')) e.preventDefault(); }, true);
  document.addEventListener('mouseup', e => { if (e.target.closest('.rn-bubble')) return; setTimeout(showBubble, 0); });
  document.addEventListener('keyup', e => { if (e.shiftKey || e.key === 'Shift') setTimeout(showBubble, 0); });
  let selT = 0;   // touch screens: show the bar once a selection has settled
  document.addEventListener('selectionchange', () => { const s = getSelection(); clearTimeout(selT); if (!s || s.isCollapsed) { if (bubble && !bubble.hidden) hideBubble(); return; } selT = setTimeout(showBubble, 450); });
  document.addEventListener('click', e => {
    const t = e.target;
    if (t.closest('[data-note-add]')) { add(); return; }
    if (t.closest('.rn-bubble [data-mark-action]')) { setTimeout(hideBubble, 0); return; }
    const a = t.closest('.note-anchor[data-note]');
    if (a && !getSelection()?.toString()) { setActive(a.dataset.note); focusBody(a.dataset.note); return; }
    const c = t.closest('.rn-card'); if (!c) { if (active && t.closest('#resource-body')) setActive(null); return; }
    const id = c.dataset.nid; setActive(id);
    const b = t.closest('button'); if (!b) return;
    if (b.dataset.rnGo) { document.querySelector(`.note-anchor[data-note="${id}"]`)?.scrollIntoView({ block: 'center', behavior: 'smooth' }); hot(id, true); setTimeout(() => hot(id, false), 1200); return; }
    if (b.dataset.rnFont) update(id, { font: b.dataset.rnFont });
    if (b.dataset.rnSize) { const n = notes()[id], i = SIZES.indexOf(n.size) + Number(b.dataset.rnSize); update(id, { size: SIZES[Math.max(0, Math.min(2, i))] }); }
    if (b.dataset.rnColor) update(id, { color: b.dataset.rnColor });
    if (b.dataset.rnCmd) { const body = c.querySelector('.rn-body'); if (document.activeElement !== body) body.focus(); document.execCommand(b.dataset.rnCmd); update(id, { html: clean(body.innerHTML) }); }
    if (b.hasAttribute('data-rn-del')) { const n = notes()[id]; if (!plain(n?.html) || confirm('Delete this note?')) remove(id); }
  });
  document.addEventListener('input', e => { const b = e.target.closest?.('[data-rn-body]'); if (!b) return; const n = notes()[b.dataset.rnBody]; if (!n) return; n.html = clean(b.innerHTML); clearTimeout(b._t); b._t = setTimeout(save, 400); relayout(); });
  document.addEventListener('focusin', e => { const c = e.target.closest?.('.rn-card'); if (c) setActive(c.dataset.nid); });
  document.addEventListener('focusout', e => {   // a note left empty is removed when you leave it
    const b = e.target.closest?.('[data-rn-body]'); if (!b) return; const card = b.closest('.rn-card');
    setTimeout(() => { if (card.contains(document.activeElement)) return; const n = notes()[b.dataset.rnBody]; if (n && !plain(n.html)) remove(n.id, true); else save(); }, 150);
  });
  document.addEventListener('keydown', e => { const b = e.target.closest?.('[data-rn-body]'); if (!b) return;
    if ((e.metaKey || e.ctrlKey) && ['b', 'i', 'u'].includes(e.key.toLowerCase())) { e.preventDefault(); document.execCommand({ b: 'bold', i: 'italic', u: 'underline' }[e.key.toLowerCase()]); notes()[b.dataset.rnBody].html = clean(b.innerHTML); save(); }
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); b.blur(); }
  }, true);
  document.addEventListener('paste', e => { const b = e.target.closest?.('[data-rn-body]'); if (!b) return; e.preventDefault(); document.execCommand('insertText', false, e.clipboardData.getData('text/plain')); });
  document.addEventListener('mouseover', e => { const a = e.target.closest?.('.note-anchor[data-note], .rn-card'); const id = a?.dataset.note || a?.dataset.nid; if (id) hot(id, true); });
  document.addEventListener('mouseout', e => { const a = e.target.closest?.('.note-anchor[data-note], .rn-card'); const id = a?.dataset.note || a?.dataset.nid; if (id && !a.contains(e.relatedTarget)) hot(id, false); });
  addEventListener('resize', relayout);
  document.addEventListener('scroll', hideBubble, true);

  return { mount, layout: relayout, count: () => Object.keys(notes()).length };
};
