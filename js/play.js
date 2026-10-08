/* DEC15 · interactive blocks — small games that make practice active, not mechanical.
   app.js calls createDEC15Play(ctx) and adds these block types to the lesson renderer:

     flash          { type: 'flash', id, title?, text, seconds?: 5, writer?: 'Student A', reader?: 'Student B' }
                    a memory game: the text appears for a few seconds, then disappears; students type it
                    from memory and check word by word.
     sort           { type: 'sort', id, title?, hint?, buckets: [{ label, text?, letter? }],
                      items: [{ text, answer: bucket index | [indexes], why? }], single?: true }
                    drag (or tap) cards into boxes, then check. single: one card per box (matching).
     flip           { type: 'flip', title?, hint?, items: [{ front, back, tag?, art? }] }
                    cards that turn over to show the back.
     spinner        { type: 'spinner', id, title?, text?, reels: [{ label, items: [..] }] }
                    a speaking game: spin the reels to get a random statement / role / task.
     chat           { type: 'chat', title?, right?: 'speaker shown on the right', lines: [[speaker, text], ...] }
                    a conversation as chat bubbles (use <mark> to highlight useful language).
     promptbuilder  { type: 'promptbuilder', id, title?, parts: [{ key, id?, label, lead, placeholder, chips: [..] }] }
                    build an AI prompt part by part; a live preview, a strength meter and a copy button.
     contract       { type: 'contract', id, title, intro?, fields: [{ id, label, placeholder, rows? }], signers?: 3 }
                    a group agreement that looks like a real document, with signatures and a date.

   Every answer is saved in the normal lesson state (state.values / state.checked), so it syncs online,
   appears in My notebook and is included in exports. */
window.createDEC15Play = function ({ getState, save, rerender, esc, strip, icon, toast, findBlock }) {
  const st = () => getState();
  const val = k => st().values[k] ?? '';
  const set = (k, v) => { st().values[k] = v; save(); };
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LETTERS = 'ABCDEFGHIJKLMNOP';
  const PALETTE = ['#2b776e', '#b0512a', '#3a58a0', '#7a4a8c', '#985c0e', '#3f7a3a'];
  const seen = new Set();   // entrance animations play once per visit, not after every re-render
  const fresh = key => { const f = !seen.has(key); seen.add(key); return f ? ' anim' : ''; };
  const B = {};
  /* a short burst of confetti for a perfect answer */
  function confetti(from) {
    if (reduce()) return;
    const r = (from?.querySelector?.('.quiz-bar') || from)?.getBoundingClientRect?.() || { left: innerWidth / 2, top: innerHeight / 3, width: 0 }, box = document.createElement('div');
    box.className = 'confetti'; box.setAttribute('aria-hidden', 'true');
    const colors = ['#e3a843', '#2b776e', '#b0512a', '#3a58a0', '#7a4a8c', '#6fbf8b'];
    for (let k = 0; k < 46; k++) { const i = document.createElement('i'); i.style.cssText = `left:${r.left + r.width / 2}px;top:${Math.max(40, r.top)}px;background:${colors[k % 6]};--dx:${(Math.random() - .5) * 520}px;--dy:${-140 - Math.random() * 260}px;--r:${Math.random() * 720 - 360}deg;animation-delay:${Math.random() * 90}ms`; box.appendChild(i); }
    document.body.appendChild(box); setTimeout(() => box.remove(), 1700);
  }

  /* ───────── flash: remember it, then write it ───────── */
  const words = s => strip(String(s)).toLowerCase().replace(/[“”"‘’'.,!?;:()…–—-]/g, ' ').split(/\s+/).filter(Boolean);
  function lcsHits(target, typed) {   // which target words appear, in order, in what the student typed
    const n = target.length, m = typed.length, L = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = target[i] === typed[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const hit = new Array(n).fill(false); let i = 0, j = 0;
    while (i < n && j < m) { if (target[i] === typed[j]) { hit[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    return hit;
  }
  B.flash = b => {
    const checked = st().checked[b.id], secs = b.seconds || 5;
    let result = '';
    if (checked) {
      const shown = strip(b.text).split(/\s+/), hit = lcsHits(words(b.text), words(val(b.id)));
      const n = hit.filter(Boolean).length, all = n === hit.length;
      result = `<div class="flash-result${all ? ' is-perfect' : ''}"><p class="flash-diff">${shown.map((w, i) => `<span class="${hit[i] ? 'w-ok' : 'w-miss'}">${esc(w)}</span>`).join(' ')}</p>
        <p class="flash-score">${all ? `${icon('check')}<b>Perfect memory!</b> Every word is right.` : `<b>${n} of ${hit.length} words</b> remembered. The red words were missing or different.`}</p></div>`;
    }
    return `<section class="block play flash${fresh('fl-' + b.id)}" id="flash-${b.id}" style="--secs:${secs}s">
      <div class="block-label">${icon('bulb')}Memory game</div>
      <h3>${b.title || 'Remember it exactly'}</h3>
      <div class="flash-stage" data-flash-stage="${b.id}">
        <div class="flash-card" aria-live="polite"><p class="flash-text">${b.text}</p><span class="flash-timer" aria-hidden="true"><i></i></span></div>
        <div class="flash-cover">
          <span class="flash-eyes" aria-hidden="true"><i></i><i></i></span>
          <p><b>${esc(b.reader || 'Student B')}</b>: you will see a sentence for <b>${secs} seconds</b>. Remember it — don’t write it!<br><span>${esc(b.writer || 'Student A')}: close your eyes.</span></p>
          <button type="button" class="btn" data-flash-show="${b.id}">${icon('play')}Show it for ${secs} seconds</button>
        </div>
        <div class="flash-gone"><b>Gone!</b><p>${esc(b.reader || 'Student B')}: say it to your partner. ${esc(b.writer || 'Student A')}: type it below.</p></div>
      </div>
      <div class="field"><label for="f-${b.id}">${esc(b.writer || 'Student A')}: write the sentence exactly</label><textarea id="f-${b.id}" data-save="${b.id}" rows="2" placeholder="Type what your partner says…">${esc(val(b.id))}</textarea></div>
      ${result}
      <div class="quiz-bar">${checked ? `<button class="btn-quiet" data-flash-reset="${b.id}">${icon('undo')}Try again</button>` : `<button class="btn" data-flash-check="${b.id}">Check word by word ${icon('arrow')}</button>`}</div>
    </section>`;
  };
  function flashShow(id) {
    const stage = document.querySelector(`[data-flash-stage="${CSS.escape(id)}"]`), b = findBlock(id); if (!stage) return;
    stage.classList.remove('is-gone'); stage.classList.add('is-showing');
    clearTimeout(stage._t); stage._t = setTimeout(() => { stage.classList.remove('is-showing'); stage.classList.add('is-gone'); }, (b.seconds || 5) * 1000);
  }

  /* ───────── sort: cards into boxes ───────── */
  const placeOf = b => { const v = String(val(b.id) || ''), a = v ? v.split(',').map(Number) : []; return b.items.map((_, i) => Number.isInteger(a[i]) && a[i] < b.buckets.length ? a[i] : -1); };
  const isRight = (it, z) => (Array.isArray(it.answer) ? it.answer : [it.answer]).includes(z);
  let sel = null;   // { id, i } — the card the student tapped
  let justPlaced = null;
  B.sort = b => {
    const place = placeOf(b), checked = st().checked[b.id], single = !!b.single;
    const score = place.filter((z, i) => z >= 0 && isRight(b.items[i], z)).length;
    const card = i => { const it = b.items[i], z = place[i], ok = checked && z >= 0 ? isRight(it, z) : null;
      const right = (Array.isArray(it.answer) ? it.answer : [it.answer]).map(k => b.buckets[k].letter || LETTERS[k]).join(' or ');
      return `<button type="button" class="sort-card${sel && sel.id === b.id && sel.i === i ? ' is-sel' : ''}${ok === true ? ' is-right' : ok === false ? ' is-wrong' : ''}${justPlaced && justPlaced.id === b.id && justPlaced.i === i ? ' just-placed' : ''}" draggable="true" data-sort-card="${b.id}" data-i="${i}" aria-pressed="${!!(sel && sel.id === b.id && sel.i === i)}">
        ${ok === true ? `<span class="sort-mark">${icon('check')}</span>` : ''}<span class="sort-text">${it.text}</span>${ok === false ? `<small class="sort-fix">Belongs in ${esc(right)}</small>` : ''}${checked && it.why ? `<small class="sort-why">${it.why}</small>` : ''}</button>`; };
    const pool = b.items.map((_, i) => i).filter(i => place[i] < 0);
    return `<section class="block play sort${single ? ' sort-match' : ''}${checked ? ' is-checked' : ''}${checked && score === b.items.length ? ' is-perfect' : ''}${fresh('so-' + b.id)}" id="sort-${b.id}">
      ${b.title ? `<h3 class="block-heading">${icon('grip')}${b.title}</h3>` : ''}
      <p class="sort-hint">${b.hint || `<b>Drag</b> each card into the right box — or <b>tap</b> a card, then tap a box.`}</p>
      <div class="sort-pool${pool.length ? '' : ' is-empty'}" data-sort-zone="${b.id}" data-z="-1" aria-label="Cards to sort">${pool.length ? pool.map(card).join('') : `<span class="sort-done">${icon('check')}All cards placed${checked ? '' : ' — now check your answers'}</span>`}</div>
      <div class="sort-buckets cols-${Math.min(b.buckets.length, single ? 2 : 3)}">${b.buckets.map((bk, k) => { const here = b.items.map((_, i) => i).filter(i => place[i] === k);
        return `<div class="sort-bucket${single && here.length ? ' is-full' : ''}" data-sort-zone="${b.id}" data-z="${k}" style="--c:${PALETTE[k % PALETTE.length]}" role="group" aria-label="${esc(strip(bk.label))}">
          <header><span class="sort-letter">${esc(bk.letter || LETTERS[k])}</span><span class="sort-head"><b>${bk.label}</b>${bk.text ? `<small>${bk.text}</small>` : ''}</span></header>
          <div class="sort-slot">${here.map(card).join('') || `<span class="sort-empty">${single ? 'Drop the heading here' : 'Drop cards here'}</span>`}</div></div>`; }).join('')}</div>
      <div class="quiz-bar">${checked ? `<span class="quiz-score${score === b.items.length ? ' is-perfect' : ''}">${score === b.items.length ? `${icon('check')}All correct!` : `${score} of ${b.items.length} correct`}</span>${score === b.items.length ? '' : `<button class="btn-quiet" data-sort-reset="${b.id}">${icon('undo')}Try again</button><button class="btn-quiet" data-sort-solve="${b.id}">Show the answers</button>`}`
        : `<button class="btn" data-sort-check="${b.id}">Check my answers ${icon('arrow')}</button>`}</div>
    </section>`;
  };
  function sortMove(id, i, z) {
    const b = findBlock(id), place = placeOf(b);
    if (b.single && z >= 0) { const other = place.findIndex((p, k) => p === z && k !== i); if (other >= 0) place[other] = place[i]; }
    place[i] = z; set(id, place.join(',')); delete st().checked[id]; sel = null; justPlaced = { id, i }; rerender(); setTimeout(() => { justPlaced = null; }, 600);
  }

  /* ───────── flip cards ───────── */
  B.flip = b => `<section class="block play flips${fresh('fp-' + (b.title || b.items[0].front))}">
    ${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}${b.hint ? `<p class="sort-hint">${b.hint}</p>` : ''}
    <div class="flip-grid">${b.items.map((c, i) => `<button type="button" class="flip" data-flip aria-pressed="false" style="--i:${i}">
      <span class="flip-inner"><span class="flip-face flip-front">${c.art ? `<img src="${esc(c.art)}" alt="" width="160" height="110">` : ''}${c.tag ? `<em>${c.tag}</em>` : ''}<b>${c.front}</b><small>${icon('undo')}Tap to turn over</small></span>
      <span class="flip-face flip-back">${c.tag ? `<em>${c.tag}</em>` : ''}<b>${c.backTitle || c.front}</b><p>${c.back}</p></span></span></button>`).join('')}</div>
  </section>`;

  /* ───────── spinner: a speaking game ───────── */
  B.spinner = b => `<section class="block play spinner${fresh('sp-' + b.id)}" id="spin-${b.id}">
    <div class="block-label">${icon('chat')}Speaking game</div>
    <h3>${b.title || 'Spin and speak'}</h3>${b.text ? `<p class="spin-text">${b.text}</p>` : ''}
    <div class="reels" style="--n:${b.reels.length}">${b.reels.map((r, k) => `<div class="reel" style="--c:${PALETTE[(k + 1) % PALETTE.length]}"><span class="reel-label">${esc(r.label)}</span><div class="reel-window" aria-live="polite"><div class="reel-strip" data-reel="${b.id}" data-k="${k}"><span>${r.start ?? 'Spin!'}</span></div></div></div>`).join('')}</div>
    <div class="spin-bar"><button type="button" class="btn spin-btn" data-spin="${b.id}"><span class="spin-ico" aria-hidden="true">${icon('undo')}</span>Spin</button><span class="spin-note">Spin, speak for 1 minute, then pass the turn.</span></div>
  </section>`;
  function spin(id) {
    const b = findBlock(id), dur = reduce() ? 0 : 1;
    document.querySelectorAll(`[data-reel="${CSS.escape(id)}"]`).forEach(strip => {
      const r = b.reels[Number(strip.dataset.k)], n = 14 + Number(strip.dataset.k) * 5;
      const seq = Array.from({ length: n }, () => r.items[Math.floor(Math.random() * r.items.length)]);
      strip.innerHTML = seq.map(t => `<span>${t}</span>`).join('');
      const h = strip.firstElementChild.offsetHeight;
      strip.style.transition = 'none'; strip.style.transform = 'translateY(0)'; strip.offsetHeight;
      strip.style.transition = `transform ${dur ? 900 + Number(strip.dataset.k) * 450 : 0}ms cubic-bezier(.15,.75,.2,1)`;
      strip.style.transform = `translateY(${-(n - 1) * h}px)`;
    });
  }

  /* ───────── chat bubbles ───────── */
  B.chat = b => {
    const people = [...new Set(b.lines.map(l => l[0]))], color = w => /^AI\b/.test(w) ? '#3a58a0' : PALETTE[people.indexOf(w) % PALETTE.length];
    const initials = w => /^AI\b/.test(w) ? 'AI' : (w.match(/\d+/) ? 'S' + w.match(/\d+/)[0] : w.split(/\s+/).map(x => x[0]).join('').slice(0, 2).toUpperCase());
    return `<section class="block play chat${b.ai ? ' chat-ai' : ''}${fresh('ch-' + (b.title || b.lines[0][1].slice(0, 20)))}">
      ${b.title ? `<h3 class="block-heading">${icon('chat')}${b.title}</h3>` : ''}
      <div class="chat-log">${b.lines.map(([w, t], k) => `<div class="msg${w === b.right ? ' msg-right' : ''}${/^AI\b/.test(w) ? ' msg-ai' : ''}${w === 'You' ? ' msg-you' : ''}" style="--c:${color(w)};--k:${k}"><span class="msg-av" aria-hidden="true">${initials(w)}</span><div class="msg-body"><span class="msg-who">${esc(w)}</span><p>${t}</p></div></div>`).join('')}</div>
    </section>`;
  };

  /* ───────── prompt builder ───────── */
  const pid = (b, p) => p.id || `${b.id}-${p.key}`;
  function promptText(b) { return b.parts.map(p => { const v = String(val(pid(b, p))).trim(); return v ? `${p.lead} ${v.replace(/^(act as|provide|focus on|include)\s+/i, '')}`.replace(/\s*\.?$/, '.') : ''; }).filter(Boolean).join(' '); }
  function strength(b) {
    const filled = b.parts.filter(p => String(val(pid(b, p))).trim().length > 2).length, t = promptText(b), w = t.split(/\s+/).filter(Boolean).length;
    let s = filled * 20; if (/\d|\b(three|four|five|six|seven)\b/i.test(t)) s += 10; if (w >= 25) s += 10;
    s = Math.min(100, s);
    return [s, s >= 90 ? 'Strong' : s >= 70 ? 'Clear' : s >= 40 ? 'Getting there' : s ? 'Too vague' : 'Start building'];
  }
  const preview = b => { const t = promptText(b); return t ? b.parts.map(p => { const v = String(val(pid(b, p))).trim(); return v ? `<span class="pp pp-${p.key}">${esc(p.lead)} ${esc(v.replace(/^(act as|provide|focus on|include)\s+/i, '').replace(/\s*\.?$/, '.'))}</span>` : ''; }).join(' ') : '<span class="pp-empty">Your prompt appears here as you build it…</span>'; };
  B.promptbuilder = b => {
    const [s, label] = strength(b);
    return `<section class="block play pbuild${fresh('pb-' + b.id)}" id="pb-${b.id}">
      <div class="block-label">${icon('pen')}Prompt builder</div>
      <h3>${b.title || 'Build your prompt'}</h3>
      <div class="pb-grid">
        <div class="pb-parts">${b.parts.map((p, k) => `<div class="pb-part pb-${p.key}">
          <label for="f-${pid(b, p)}"><span class="pb-num">${k + 1}</span><b>${esc(p.label)}</b><i>${esc(p.lead)} …</i></label>
          <textarea id="f-${pid(b, p)}" data-save="${pid(b, p)}" data-pb="${b.id}" rows="2" placeholder="${esc(p.placeholder || '')}">${esc(val(pid(b, p)))}</textarea>
          ${p.chips ? `<div class="pb-chips" aria-label="Ideas">${p.chips.map(c => `<button type="button" class="chip-btn" data-pb-chip="${b.id}" data-field="${pid(b, p)}" data-text="${esc(c)}">+ ${esc(c)}</button>`).join('')}</div>` : ''}
        </div>`).join('')}</div>
        <div class="pb-preview" aria-live="polite">
          <div class="pb-screen"><span class="pb-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="pb-title">Your prompt</span></div>
          <p class="pb-text" data-pb-text="${b.id}">${preview(b)}</p>
          <div class="pb-meter" data-pb-meter="${b.id}" style="--s:${s}"><span class="pb-bar"><i></i></span><b>${label}</b></div>
          <div class="pb-actions"><button type="button" class="btn" data-pb-copy="${b.id}">${icon('model')}Copy prompt</button>${b.tryUrl ? `<a class="btn-quiet" href="${esc(b.tryUrl)}" target="_blank" rel="noopener">${icon('open')}${esc(b.tryLabel || 'Try it')}</a>` : ''}</div>
        </div>
      </div>
    </section>`;
  };
  function pbRefresh(id) {
    const b = findBlock(id), t = document.querySelector(`[data-pb-text="${CSS.escape(id)}"]`), m = document.querySelector(`[data-pb-meter="${CSS.escape(id)}"]`);
    if (t) t.innerHTML = preview(b);
    if (m) { const [s, l] = strength(b); m.style.setProperty('--s', s); m.querySelector('b').textContent = l; }
  }

  /* ───────── contract ───────── */
  B.contract = b => {
    const n = b.signers || 3, sigs = Array.from({ length: n }, (_, k) => String(val(`${b.id}-sig-${k}`)).trim()), signed = sigs.every(Boolean) && val(`${b.id}-date`);
    return `<section class="block play contract${signed ? ' is-signed' : ''}${fresh('ct-' + b.id)}" id="contract-${b.id}">
      <div class="contract-paper">
        <header class="contract-head"><span class="contract-seal" aria-hidden="true">${icon('flag')}</span><div><small>${esc(b.kicker || 'Our agreement')}</small><h3>${b.title}</h3>${b.intro ? `<p>${b.intro}</p>` : ''}</div></header>
        <ol class="contract-terms">${b.fields.map(f => `<li class="field"><label for="f-${f.id}">${esc(f.label)}</label><textarea id="f-${f.id}" data-save="${f.id}" rows="${f.rows || 2}" placeholder="${esc(f.placeholder || '')}">${esc(val(f.id))}</textarea></li>`).join('')}</ol>
        <div class="contract-sign">
          ${sigs.map((v, k) => `<label class="sig"><input data-save="${b.id}-sig-${k}" data-contract="${b.id}" value="${esc(v)}" placeholder="Type your name" aria-label="Signature ${k + 1}" autocomplete="off"><span>Member ${k + 1}</span></label>`).join('')}
          <label class="sig sig-date"><input type="date" data-save="${b.id}-date" data-contract="${b.id}" value="${esc(val(`${b.id}-date`))}" aria-label="Date"><span>Date</span></label>
        </div>
        <span class="contract-stamp" aria-hidden="true"><b>AGREED</b><small>${esc(b.stamp || 'Research group')}</small></span>
      </div>
    </section>`;
  };

  /* ───────── cloze: a paragraph with a drop-down in each gap ─────────
     { type: 'cloze', id, title?, text: 'words {{1}} more words {{2}} …', options: [..], answers: [..], why?: [..] }
     Gap n is saved as `${id}-${n-1}` (the same keys as a quiz, so a quiz can become a cloze without losing work). */
  const gapWidth = v => `width:calc(${Math.max(10, String(v || 'Choose…').length) * 0.6}em + 36px)`;   // fit the chosen answer
  B.cloze = b => {
    const checked = st().checked[b.id], n = b.answers.length;
    const score = b.answers.filter((a, i) => val(`${b.id}-${i}`) === a).length;
    const optsFor = i => Array.isArray(b.options[0]) ? b.options[i] : b.options;   // one shared list, or a list per gap
    const fill = t => t.replace(/\{\{(\d+)\}\}/g, (_, d) => { const i = Number(d) - 1, v = val(`${b.id}-${i}`), ok = checked ? (v === b.answers[i] ? ' is-right' : ' is-wrong') : '';
      return `<span class="gap${ok}${v ? ' is-filled' : ''}"><span class="gap-num">${i + 1}</span><select data-save="${b.id}-${i}" data-cloze="${b.id}" aria-label="Gap ${i + 1}" style="${gapWidth(v)}"><option value="">Choose…</option>${optsFor(i).map(o => `<option${v === o ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>${checked && ok === ' is-wrong' ? `<span class="gap-fix">${esc(b.answers[i])}</span>` : ''}</span>`; });
    return `<section class="block play cloze${checked ? ' is-checked' : ''}${checked && score === n ? ' is-perfect' : ''}" id="cloze-${b.id}">
      ${b.title ? `<h3 class="block-heading">${icon('pen')}${b.title}</h3>` : ''}
      ${b.list ? `<ol class="cloze-text cloze-list">${b.text.split('\n').map(l => `<li>${fill(l)}</li>`).join('')}</ol>` : `<p class="cloze-text">${fill(b.text)}</p>`}
      ${checked && b.why ? `<ol class="cloze-why">${b.why.map((w, i) => `<li class="${val(`${b.id}-${i}`) === b.answers[i] ? 'ok' : 'no'}"><b>${i + 1}</b>${w}</li>`).join('')}</ol>` : ''}
      <div class="quiz-bar">${checked ? `<span class="quiz-score${score === n ? ' is-perfect' : ''}">${score === n ? `${icon('check')}All correct!` : `${score} of ${n} correct`}</span>${score === n ? '' : `<button class="btn-quiet" data-cloze-reset="${b.id}">${icon('undo')}Try again</button>`}` : `<button class="btn" data-cloze-check="${b.id}">Check my answers ${icon('arrow')}</button>`}</div>
    </section>`;
  };

  /* ───────── registry (labels for notebook and the answers button) ───────── */
  function register(b, reg) {
    if (b.type === 'flash') reg(b.id, b.title || 'Memory game');
    if (b.type === 'cloze') b.answers.forEach((_, i) => reg(`${b.id}-${i}`, `${strip(b.title || 'Gap fill')} · gap ${i + 1}`));
    if (b.type === 'sort') reg(b.id, b.title || 'Sort the cards');
    if (b.type === 'promptbuilder') b.parts.forEach(p => reg(pid(b, p), `${p.label}: ${p.lead}…`));
    if (b.type === 'contract') { b.fields.forEach(f => reg(f.id, f.label)); for (let k = 0; k < (b.signers || 3); k++) reg(`${b.id}-sig-${k}`, 'Signature'); reg(`${b.id}-date`, 'Date'); }
  }
  function notebookItems(b) {
    const filled = v => String(v ?? '').trim() !== '', out = [];
    if (b.type === 'cloze') {
      const ok = st().checked[b.id], rows = b.answers.map((a, i) => [String(i + 1), String(val(`${b.id}-${i}`) || '—'), ok ? (val(`${b.id}-${i}`) === a ? 'Correct' : 'Answer: ' + a) : '']).filter(r => r[1] !== '—');
      if (rows.length) out.push({ t: 'table', title: strip(b.title || 'Gap fill'), head: ok ? ['Gap', 'My answer', 'Check'] : ['Gap', 'My answer'], rows: ok ? rows : rows.map(r => r.slice(0, 2)), widths: ok ? [10, 50, 40] : [12, 88] });
    }
    if (b.type === 'flash' && filled(val(b.id))) out.push({ t: 'qa', label: (b.title || 'Memory game') + ' — what I wrote', value: val(b.id) });
    if (b.type === 'sort' && filled(val(b.id))) {
      const place = placeOf(b), ok = st().checked[b.id];
      const rows = b.items.map((it, i) => [strip(it.text), place[i] >= 0 ? strip(b.buckets[place[i]].label) : '—', ok && place[i] >= 0 ? (isRight(it, place[i]) ? 'Correct' : 'Answer: ' + (Array.isArray(it.answer) ? it.answer : [it.answer]).map(k => strip(b.buckets[k].label)).join(' / ')) : '']).filter(r => r[1] !== '—');
      if (rows.length) out.push({ t: 'table', title: strip(b.title || 'Sort'), head: ok ? ['Card', 'My box', 'Check'] : ['Card', 'My box'], rows: ok ? rows : rows.map(r => r.slice(0, 2)), widths: ok ? [50, 25, 25] : [60, 40] });
    }
    if (b.type === 'promptbuilder') { b.parts.forEach(p => filled(val(pid(b, p))) && out.push({ t: 'qa', label: `${p.label}: ${p.lead}…`, value: val(pid(b, p)) })); const t = promptText(b); if (t) out.push({ t: 'qa', label: 'My full prompt', value: t }); }
    if (b.type === 'contract') {
      b.fields.forEach(f => filled(val(f.id)) && out.push({ t: 'qa', label: f.label, value: val(f.id) }));
      const names = Array.from({ length: b.signers || 3 }, (_, k) => val(`${b.id}-sig-${k}`)).filter(filled);
      if (names.length) out.push({ t: 'qa', label: 'Signed', value: names.join(', ') + (val(`${b.id}-date`) ? ' · ' + val(`${b.id}-date`) : '') });
    }
    return out;
  }

  /* ───────── events ───────── */
  function onClick(t, d) {
    if (d.flashShow) { flashShow(d.flashShow); return true; }
    if (d.flashCheck) { if (!String(val(d.flashCheck)).trim()) { toast('Write the sentence first.'); return true; } st().checked[d.flashCheck] = true; save(); rerender();
      const b = findBlock(d.flashCheck), hit = lcsHits(words(b.text), words(val(b.id))); if (hit.every(Boolean)) { toast('Perfect memory — well done!'); confetti(document.getElementById('flash-' + b.id)); } return true; }
    if (d.clozeCheck) { const b = findBlock(d.clozeCheck), left = b.answers.filter((_, i) => !val(`${b.id}-${i}`)).length;
      if (left && !st().teacher) { toast(`Fill every gap first (${left} left).`); return true; }
      st().checked[b.id] = true; save(); rerender(); if (b.answers.every((a, i) => val(`${b.id}-${i}`) === a)) { toast('All correct — brilliant!'); confetti(document.getElementById('cloze-' + b.id)); } return true; }
    if (d.clozeReset) { delete st().checked[d.clozeReset]; save(); rerender(); return true; }
    if (d.flashReset) { delete st().checked[d.flashReset]; save(); rerender(); return true; }
    if (d.sortCard) { const i = Number(d.i), id = d.sortCard, zone = Number(t.closest('[data-sort-zone]')?.dataset.z ?? -1);
      // a card is selected and the student taps a card in another box: move the selected card to that box
      if (sel && sel.id === id && sel.i !== i && placeOf(findBlock(id))[sel.i] !== zone) { sortMove(id, sel.i, zone); return true; }
      if (sel && sel.id === id && sel.i === i) sel = null; else sel = { id, i };
      rerender(); document.querySelector(`[data-sort-card="${CSS.escape(id)}"][data-i="${i}"]`)?.focus({ preventScroll: true }); return true; }
    if (d.sortCheck) { const b = findBlock(d.sortCheck), left = placeOf(b).filter(z => z < 0).length;
      if (left && !st().teacher) { toast(`Place every card first (${left} left).`); return true; }
      st().checked[b.id] = true; save(); rerender(); if (placeOf(b).every((z, i) => isRight(b.items[i], z))) { toast('All correct — brilliant!'); confetti(document.getElementById('sort-' + b.id)); } return true; }
    if (d.sortReset) { delete st().checked[d.sortReset]; set(d.sortReset, ''); rerender(); return true; }
    if (d.sortSolve) { const b = findBlock(d.sortSolve); set(b.id, b.items.map(it => Array.isArray(it.answer) ? it.answer[0] : it.answer).join(',')); st().checked[b.id] = true; save(); rerender(); return true; }
    if (t.hasAttribute('data-flip')) { const on = !t.classList.contains('is-flipped'); t.classList.toggle('is-flipped', on); t.setAttribute('aria-pressed', String(on)); return true; }
    if (d.spin) { spin(d.spin); t.classList.remove('is-spinning'); t.offsetWidth; t.classList.add('is-spinning'); return true; }
    if (d.pbChip) { const cur = String(val(d.field)).trim(), add = d.text; set(d.field, cur ? (cur.includes(add) ? cur : `${cur.replace(/[.,]$/, '')}, ${add}`) : add);
      const ta = document.querySelector(`[data-save="${CSS.escape(d.field)}"]`); if (ta) ta.value = val(d.field); pbRefresh(d.pbChip); return true; }
    if (d.pbCopy) { const txt = promptText(findBlock(d.pbCopy)); if (!txt) { toast('Build your prompt first.'); return true; }
      (navigator.clipboard?.writeText(txt) || Promise.reject()).then(() => toast('Prompt copied. Paste it into the AI tool.'), () => toast('Select the prompt text and copy it.')); return true; }
    if (d.sortZone && sel && sel.id === d.sortZone) { sortMove(sel.id, sel.i, Number(d.z)); return true; }
    return false;
  }
  function onInput(t) {
    if (t.dataset.cloze) { t.closest('.gap')?.classList.toggle('is-filled', !!t.value); t.style.cssText = gapWidth(t.value); if (st().checked[t.dataset.cloze]) { delete st().checked[t.dataset.cloze]; save(); rerender(); } }
    if (t.dataset.pb) pbRefresh(t.dataset.pb);
    if (t.dataset.contract) { const b = findBlock(t.dataset.contract), n = b.signers || 3; const signed = Array.from({ length: n }, (_, k) => String(val(`${b.id}-sig-${k}`)).trim()).every(Boolean) && val(`${b.id}-date`);
      const el = document.getElementById('contract-' + b.id); if (el && el.classList.contains('is-signed') !== !!signed) { el.classList.toggle('is-signed', !!signed); if (signed) toast('Contract signed by everyone!'); } }
  }
  // tapping an empty part of a box places the selected card (boxes are <div>, so app.js passes them here)
  document.addEventListener('click', e => {
    if (e.target.closest('button,a,input,textarea,select')) return;
    const z = e.target.closest('[data-sort-zone]'); if (z && sel && sel.id === z.dataset.sortZone) sortMove(sel.id, sel.i, Number(z.dataset.z));
  });
  // drag and drop (mouse / pen); touch screens use tap-then-tap
  let dragCard = null;
  document.addEventListener('dragstart', e => { const c = e.target.closest?.('[data-sort-card]'); if (!c) return; dragCard = { id: c.dataset.sortCard, i: Number(c.dataset.i) }; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', c.dataset.i); c.classList.add('is-dragging'); });
  document.addEventListener('dragend', e => { e.target.closest?.('[data-sort-card]')?.classList.remove('is-dragging'); document.querySelectorAll('.drop-hover').forEach(x => x.classList.remove('drop-hover')); dragCard = null; });
  document.addEventListener('dragover', e => { const z = e.target.closest?.('[data-sort-zone]'); if (!z || !dragCard || z.dataset.sortZone !== dragCard.id) return; e.preventDefault(); document.querySelectorAll('.drop-hover').forEach(x => x !== z && x.classList.remove('drop-hover')); z.classList.add('drop-hover'); });
  document.addEventListener('drop', e => { const z = e.target.closest?.('[data-sort-zone]'); if (!z || !dragCard || z.dataset.sortZone !== dragCard.id) return; e.preventDefault(); const c = dragCard; dragCard = null; sortMove(c.id, c.i, Number(z.dataset.z)); });

  return { B, register, notebookItems, onClick, onInput, confetti };
};
