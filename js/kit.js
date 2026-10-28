/* DEC10 · learning kit — interactive blocks built for test-focused practice (DEC10 Week 1 onwards; any course can use them).
   app.js calls createDEC10Kit(ctx) and adds these block types to the lesson renderer:

     match    { type: 'match', id, title?, hint?, left: [..], right: [..] }
              tap a card on the left, then its partner on the right. right[i] is the partner of left[i];
              the right column is shown mixed (always in the same order for the same id).
     spot     { type: 'spot', id, title?, hint?, paras: ['text with [[a phrase]] and [[*the right phrase]]', ...], label? }
              tap the phrases that do a job (signposts, evidence, voices …). [[* … ]] marks a right one.
     outline  { type: 'outline', id, title?, hint?, items: [[level 0|1|2, 'text'], ...] }
              notes in the right order but all on the left: indent each line to build an outline.
     limit    { type: 'limit', id, title?, rule?: 'NO MORE THAN THREE WORDS', max: 3,
                items: [{ q, accept: ['71%', '71 per cent'] | { need: 2, any: ['customer', 'employee', 'communit'] }, model, why? }] }
              short answers with a live word counter — over the limit scores zero, as in the test.
     bet      { type: 'bet', id, title?, proof?, coins?: 10, items: [{ q, options, answer, why? }] }
              multiple choice with a confidence bet (1–3 coins per answer): win the coins if right, lose them if wrong.
     bingo    { type: 'bingo', id, title?, hint?, squares: [{ text, ask? }] }   16 squares (4 × 4)
              find-someone-who: write a classmate's name in a square; four in a row is BINGO.
     squeeze  { type: 'squeeze', id, title?, hint?, items: [{ text, max, model }] }
              turn a sentence into notes in a few characters (symbols, abbreviations), then compare with a model.
     sticky   { type: 'sticky', title?, text, color? }   a pinned note for one key idea
     pairs    { type: 'pairs', items: [{ from, to, tag?, note? }] }   before → after examples, [[changed words]] highlighted
     hotspot  { type: 'hotspot', src, alt, caption?, title?, hint?, size?, spots: [{ x, y, label?, title, text, color? }] }
              a picture with numbered markers (x, y in % of the picture); tapping one opens a pop-up with more detail
     para     { type: 'para', id, title?, hint?, label?, placeholder?, items: [{ text, strategy?, keep?: ['IPAT'], sentences?: 3, model }] }
              paraphrase a sentence; a live “copy meter” shows how many of the original’s content words you reused,
              and warns if a technical term that must stay (keep) is missing. Then compare with a model.

   Every answer is saved in the normal lesson state (state.values / state.checked), so it syncs online,
   appears in My notebook and is included in exports. */
window.createDEC10Kit = function ({ getState, save, rerender, esc, strip, icon, toast, findBlock, confetti }) {
  const st = () => getState();
  const val = k => st().values[k] ?? '';
  const set = (k, v) => { st().values[k] = v; save(); };
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const B = {};
  const seen = new Set();
  const fresh = key => { const f = !seen.has(key); seen.add(key); return f ? ' anim' : ''; };
  const LET = 'ABCDEFGHIJKLMNOPQRST';
  const HUES = ['#2f7d6b', '#c4562f', '#3a58a0', '#8a4f9e', '#b07d12', '#2d7a9a', '#a3416a', '#4c7a2e', '#6a5acd', '#946b3d'];
  const hash = s => [...String(s)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  function mixed(n, seed) {   // the same mixed order every time for the same id, never the identity order
    const a = Array.from({ length: n }, (_, i) => i); let h = hash(seed);
    for (let i = n - 1; i > 0; i--) { h = (h * 1103515245 + 12345) >>> 0; const j = h % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
    if (n > 1 && a.every((x, i) => x === i)) a.push(a.shift());
    return a;
  }
  const list = k => String(val(k) || '').split(',').filter(x => x !== '').map(Number);
  const bar = (inner) => `<div class="quiz-bar kit-bar">${inner}</div>`;
  const words = s => String(s || '').trim().split(/\s+/).filter(Boolean);
  const norm = s => String(s || '').toLowerCase().replace(/[“”"‘’'.,!?;:()…]/g, '').replace(/\s+/g, ' ').trim();

  /* ───────── match ───────── */
  const pairsOf = b => { const p = String(val(b.id) || '').split(','); return b.left.map((_, i) => p[i] === '' || p[i] == null ? -1 : Number(p[i])); };
  let pick = null;   // { id, side: 'l' | 'r', i }
  B.match = b => {
    const pairs = pairsOf(b), checked = st().checked[b.id], order = mixed(b.right.length, b.id);
    const owner = r => pairs.indexOf(r), n = pairs.filter(x => x >= 0).length;
    const right = checked ? pairs.filter((r, i) => r === i).length : 0;
    const cls = (side, i) => { const r = side === 'l' ? pairs[i] : i, l = side === 'l' ? i : owner(i);
      let c = pick && pick.id === b.id && pick.side === side && pick.i === i ? ' is-picked' : '';
      if (r >= 0 && l >= 0) c += ' is-paired' + (checked ? (r === l ? ' is-right' : ' is-wrong') : '');
      return c; };
    const tag = (side, i) => { const l = side === 'l' ? i : owner(i); return l >= 0 && (side === 'r' || pairs[i] >= 0) ? `<span class="mt-tag" style="--h:${HUES[l % HUES.length]}">${LET[l]}</span>` : `<span class="mt-tag mt-empty">${side === 'l' ? LET[i] : '?'}</span>`; };
    return `<section class="block kit match${fresh('mt-' + b.id)}" id="match-${b.id}">
      <div class="block-label">${icon('link')}Match up</div>
      ${b.title ? `<h3>${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}
      <div class="mt-meter" aria-hidden="true"><i style="width:${Math.round(100 * n / b.left.length)}%"></i><span>${n} / ${b.left.length} matched</span></div>
      <div class="mt-cols">
        <ol class="mt-col mt-left">${b.left.map((t, i) => `<li><button type="button" class="mt-card${cls('l', i)}" data-mt="${b.id}" data-side="l" data-i="${i}" style="--h:${HUES[i % HUES.length]}" aria-pressed="${!!(pick && pick.id === b.id && pick.side === 'l' && pick.i === i)}">${tag('l', i)}<span>${t}</span></button></li>`).join('')}</ol>
        <ol class="mt-col mt-right">${order.map(i => { const l = owner(i); return `<li><button type="button" class="mt-card${cls('r', i)}" data-mt="${b.id}" data-side="r" data-i="${i}" style="--h:${HUES[(l >= 0 ? l : 0) % HUES.length]}">${tag('r', i)}<span>${b.right[i]}</span></button></li>`; }).join('')}</ol>
      </div>
      ${checked ? `<p class="kit-score${right === b.left.length ? ' is-perfect' : ''}">${right === b.left.length ? icon('check') + '<b>All matched correctly!</b>' : `<b>${right} of ${b.left.length}</b> correct. Red pairs are wrong — tap a card to unpair it and try again.`}</p>` : ''}
      ${bar(checked ? `<button class="btn-quiet" data-mt-reset="${b.id}">${icon('undo')}Start again</button><button class="btn-quiet" data-mt-solve="${b.id}">Show the answers</button>` : `<button class="btn" data-mt-check="${b.id}">Check my matches ${icon('arrow')}</button><span class="kit-small">Tap a card, then its partner.</span>`)}
    </section>`;
  };
  function mtTap(id, side, i) {
    const b = findBlock(id), pairs = pairsOf(b);
    delete st().checked[id];
    const isPaired = side === 'l' ? pairs[i] >= 0 : pairs.indexOf(i) >= 0;
    if (isPaired && !(pick && pick.id === id && pick.side !== side)) {   // tap a pair: undo it
      if (side === 'l') pairs[i] = -1; else pairs[pairs.indexOf(i)] = -1;
      set(id, pairs.join(',')); pick = null; rerender(); return;
    }
    if (pick && pick.id === id && pick.side !== side) {
      const l = side === 'l' ? i : pick.i, r = side === 'r' ? i : pick.i;
      const prev = pairs.indexOf(r); if (prev >= 0) pairs[prev] = -1;
      pairs[l] = r; set(id, pairs.map(x => x < 0 ? '' : x).join(',')); pick = null; rerender();
      if (pairs.every(x => x >= 0)) toast('All matched — press “Check my matches”.');
      return;
    }
    pick = pick && pick.id === id && pick.side === side && pick.i === i ? null : { id, side, i };
    rerender();
    document.querySelector(`[data-mt="${CSS.escape(id)}"][data-side="${side}"][data-i="${i}"]`)?.focus({ preventScroll: true });
  }

  /* ───────── spot ───────── */
  const spotParts = b => { let k = 0; return b.paras.map(p => p.split(/(\[\[\*?[^\]]+\]\])/).map(s => { const m = s.match(/^\[\[(\*?)([^\]]+)\]\]$/); return m ? { k: k++, ok: !!m[1], t: m[2] } : { t: s }; })); };
  B.spot = b => {
    const parts = spotParts(b), on = new Set(list(b.id)), checked = st().checked[b.id];
    const all = parts.flat().filter(p => p.k != null), good = all.filter(p => p.ok);
    const hits = good.filter(p => on.has(p.k)).length, wrong = all.filter(p => !p.ok && on.has(p.k)).length;
    return `<section class="block kit spot${fresh('sp-' + b.id)}" id="spot-${b.id}">
      <div class="block-label">${icon('search')}${esc(b.label || 'Spot it')}</div>
      ${b.title ? `<h3>${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}
      <div class="sp-text">${parts.map((para, pi) => `<p><span class="sp-para">${String.fromCharCode(65 + pi)}</span>${para.map(p => p.k == null ? esc(p.t) : `<button type="button" class="sp-phr${on.has(p.k) ? ' is-on' : ''}${checked ? (p.ok ? (on.has(p.k) ? ' is-right' : ' is-missed') : (on.has(p.k) ? ' is-wrong' : '')) : ''}" data-spot="${b.id}" data-k="${p.k}" aria-pressed="${on.has(p.k)}">${esc(p.t)}</button>`).join('')}</p>`).join('')}</div>
      ${checked ? `<p class="kit-score${hits === good.length && !wrong ? ' is-perfect' : ''}">${hits === good.length && !wrong ? icon('check') + `<b>Perfect!</b> You found all ${good.length}.` : `<b>${hits} of ${good.length}</b> found${wrong ? ` · <b>${wrong}</b> not needed (red)` : ''}. Dashed phrases are the ones you missed.`}</p>` : `<p class="kit-small sp-count">${on.size} selected · find ${good.length}</p>`}
      ${bar(checked ? `<button class="btn-quiet" data-spot-reset="${b.id}">${icon('undo')}Try again</button>` : `<button class="btn" data-spot-check="${b.id}">Check ${icon('arrow')}</button>`)}
    </section>`;
  };

  /* ───────── outline ───────── */
  const levelsOf = b => { const v = String(val(b.id) || ''); return v ? v.split(',').map(Number) : b.items.map(() => 0); };
  const MARK = [i => i, () => 'a', () => '•'];
  B.outline = b => {
    const lv = levelsOf(b), checked = st().checked[b.id];
    let n0 = 0, n1 = 0;
    const marks = lv.map(l => { if (l === 0) { n0++; n1 = 0; return n0 + '.'; } if (l === 1) { n1++; return 'abcdefghij'[n1 - 1] + '.'; } return '•'; });
    const right = b.items.filter((it, i) => it[0] === lv[i]).length;
    return `<section class="block kit outline${fresh('ol-' + b.id)}" id="outline-${b.id}">
      <div class="block-label">${icon('layers')}Outline builder</div>
      ${b.title ? `<h3>${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}
      <div class="ol-legend" aria-hidden="true"><span><i class="l0"></i>Main idea</span><span><i class="l1"></i>Supporting detail</span><span><i class="l2"></i>Extra detail</span></div>
      <ol class="ol-list">${b.items.map((it, i) => `<li class="ol-row l${lv[i]}${checked ? (it[0] === lv[i] ? ' is-right' : ' is-wrong') : ''}" style="--lv:${lv[i]}">
        <span class="ol-guide" aria-hidden="true"></span>
        <span class="ol-mark">${marks[i]}</span><span class="ol-text">${esc(it[1])}</span>
        <span class="ol-btns"><button type="button" class="ol-btn" data-ol="${b.id}" data-i="${i}" data-dir="-1" ${lv[i] === 0 ? 'disabled' : ''} aria-label="Move left: ${esc(it[1])}">${icon('left')}</button><button type="button" class="ol-btn" data-ol="${b.id}" data-i="${i}" data-dir="1" ${lv[i] === 2 ? 'disabled' : ''} aria-label="Move right: ${esc(it[1])}">${icon('arrow')}</button></span>
      </li>`).join('')}</ol>
      ${checked ? `<p class="kit-score${right === b.items.length ? ' is-perfect' : ''}">${right === b.items.length ? icon('check') + '<b>Beautiful outline!</b> Every line is at the right level.' : `<b>${right} of ${b.items.length}</b> lines at the right level. Move the red lines and check again.`}</p>` : ''}
      ${bar(checked ? `<button class="btn-quiet" data-ol-reset="${b.id}">${icon('undo')}Try again</button><button class="btn-quiet" data-ol-solve="${b.id}">Show the model</button>` : `<button class="btn" data-ol-check="${b.id}">Check my outline ${icon('arrow')}</button>`)}
    </section>`;
  };

  /* ───────── limit (word-limit short answers) ───────── */
  function limitOk(it, v, max) {
    if (!String(v).trim() || words(v).length > max) return false;
    const n = norm(v);
    if (Array.isArray(it.accept)) return it.accept.some(a => n === norm(a));
    const hit = it.accept.any.filter(a => n.includes(a.toLowerCase())).length;
    return hit >= (it.accept.need || 1);
  }
  B.limit = b => {
    const checked = st().checked[b.id], max = b.max || 3;
    const right = b.items.filter((it, i) => limitOk(it, val(`${b.id}-${i}`), max)).length;
    return `<section class="block kit limit${fresh('lm-' + b.id)}" id="limit-${b.id}">
      <div class="block-label">${icon('pen')}Test-style short answers</div>
      ${b.title ? `<h3>${b.title}</h3>` : ''}
      <p class="lm-rule"><span>Rule</span>${esc(b.rule || 'Write NO MORE THAN THREE WORDS')}</p>
      <ol class="lm-items">${b.items.map((it, i) => { const k = `${b.id}-${i}`, v = val(k), n = words(v).length, ok = limitOk(it, v, max);
        return `<li class="lm-item${checked ? (ok ? ' is-right' : ' is-wrong') : ''}">
          <label for="lm-${k}" class="lm-q">${it.q}</label>
          <div class="lm-field"><input id="lm-${k}" type="text" autocomplete="off" spellcheck="false" data-save="${k}" data-limit="${b.id}" data-max="${max}" value="${esc(v)}" placeholder="Your answer…">
            <span class="lm-count${n > max ? ' is-over' : n ? ' is-in' : ''}" data-lm-count="${k}">${n} / ${max}</span></div>
          ${checked ? `<p class="quiz-why">${ok ? icon('check') + '<b>Correct.</b> ' : n > max ? `<b>Too many words — this scores zero in the test.</b> ` : `<b>Model answer: ${esc(it.model)}.</b> `}${esc(it.why || '')}</p>` : ''}
        </li>`; }).join('')}</ol>
      ${bar(checked ? `<span class="quiz-score">${right} / ${b.items.length} correct</span><button class="btn-quiet" data-lm-reset="${b.id}">Try again</button>` : `<button class="btn" data-lm-check="${b.id}">Check my answers ${icon('arrow')}</button>`)}
    </section>`;
  };

  /* ───────── bet (confidence betting) ───────── */
  const COIN = '<svg class="coin" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8.5" fill="#f2c14e" stroke="#b07d12" stroke-width="1.5"/><circle cx="10" cy="10" r="5.2" fill="none" stroke="#b07d12" stroke-width="1.1" opacity=".6"/></svg>';
  B.bet = b => {
    const checked = st().checked[b.id], start = b.coins || 10;
    const res = b.items.map((q, i) => { const ch = val(`${b.id}-${i}`), s = Number(val(`${b.id}-${i}-s`) || 0); return { ch, s, ok: ch === q.answer }; });
    const bank = start + (checked ? res.reduce((t, r) => t + (r.ok ? r.s : -r.s), 0) : 0);
    return `<section class="block kit bet${fresh('bt-' + b.id)}" id="bet-${b.id}">
      <div class="bt-head"><div><div class="block-label">${icon('target')}Confidence bet</div>${b.title ? `<h3>${b.title}</h3>` : ''}
        <p class="kit-hint">Choose an answer, then bet <b>1</b>, <b>2</b> or <b>3</b> coins on it. Right: win the coins. Wrong: lose them. ${b.proof || 'Bet big only when the recording gives you proof.'}</p></div>
        <div class="bt-bank${checked ? (bank >= start ? ' is-up' : ' is-down') : ''}" aria-live="polite">${COIN}<b>${bank}</b><small>${checked ? (bank >= start ? `+${bank - start} coins` : `${bank - start} coins`) : 'coins to start'}</small></div></div>
      <ol class="quiz-items">${b.items.map((q, i) => { const r = res[i];
        return `<li class="quiz-item${checked ? (r.ok ? ' is-right' : ' is-wrong') : ''}">
          <p class="quiz-q" data-help>${q.q}</p>
          <div class="options options-long" role="radiogroup" aria-label="${esc(strip(q.q))}">${q.options.map(o => `<button type="button" role="radio" class="option${r.ch === o ? ' selected' : ''}${checked && o === q.answer ? ' correct' : ''}" aria-checked="${r.ch === o}" data-bet="${b.id}" data-i="${i}" data-opt="${esc(o)}">${esc(o)}</button>`).join('')}</div>
          <div class="bt-stake" role="radiogroup" aria-label="How many coins?"><span>My bet</span>${[1, 2, 3].map(s => `<button type="button" role="radio" class="bt-chip${r.s === s ? ' selected' : ''}" aria-checked="${r.s === s}" data-bet-stake="${b.id}" data-i="${i}" data-s="${s}">${COIN.repeat(s)}<b>${s}</b></button>`).join('')}
            ${checked ? `<em class="bt-result ${r.ok ? 'win' : 'lose'}">${r.ok ? '+' : '−'}${r.s}</em>` : ''}</div>
          ${checked ? `<p class="quiz-why">${r.ok ? icon('check') + '<b>Correct.</b> ' : `<b>Answer: ${esc(q.answer)}.</b> `}${esc(q.why || '')}</p>` : ''}
        </li>`; }).join('')}</ol>
      ${bar(checked ? `<span class="quiz-score">${res.filter(r => r.ok).length} / ${b.items.length} correct · ${bank} coins</span><button class="btn-quiet" data-bet-reset="${b.id}">Play again</button>` : `<button class="btn" data-bet-check="${b.id}">Lock in my bets ${icon('arrow')}</button>`)}
    </section>`;
  };

  /* ───────── bingo (find someone who) ───────── */
  const LINES = (() => { const L = []; for (let r = 0; r < 4; r++) L.push([0, 1, 2, 3].map(c => r * 4 + c)); for (let c = 0; c < 4; c++) L.push([0, 1, 2, 3].map(r => r * 4 + c)); L.push([0, 5, 10, 15], [3, 6, 9, 12]); return L; })();
  const bingoLines = b => LINES.filter(l => l.every(i => String(val(`${b.id}-${i}`)).trim()));
  B.bingo = b => {
    const done = b.squares.map((_, i) => !!String(val(`${b.id}-${i}`)).trim()), lines = bingoLines(b), inLine = new Set(lines.flat());
    return `<section class="block kit bingo${fresh('bg-' + b.id)}${lines.length ? ' has-bingo' : ''}" id="bingo-${b.id}">
      <div class="bg-head"><div><div class="block-label">${icon('users')}Find someone who…</div>${b.title ? `<h3>${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}</div>
        <div class="bg-score" data-bg-score="${b.id}"><b>${done.filter(Boolean).length}</b><small>of 16</small><span class="bg-flag"${lines.length ? '' : ' hidden'}>BINGO!</span></div></div>
      <div class="bg-grid">${b.squares.map((s, i) => `<div class="bg-sq${done[i] ? ' is-done' : ''}${inLine.has(i) ? ' in-line' : ''}" data-bg-sq="${b.id}-${i}" style="--d:${(i % 4 + Math.floor(i / 4)) * 40}ms">
        <p class="bg-text">${s.text}</p>${s.ask ? `<p class="bg-ask">${icon('chat')}${s.ask}</p>` : ''}
        <label class="bg-name"><span class="sr-only">Classmate’s name for: ${esc(strip(s.text))}</span><input type="text" autocomplete="off" data-save="${b.id}-${i}" data-bingo="${b.id}" value="${esc(val(`${b.id}-${i}`))}" placeholder="Name…"></label>
        <span class="bg-stamp" aria-hidden="true">${icon('check')}</span>
      </div>`).join('')}</div>
    </section>`;
  };
  function bingoRefresh(id) {
    const b = findBlock(id), lines = bingoLines(b), inLine = new Set(lines.flat()), box = document.getElementById('bingo-' + id); if (!box) return;
    let n = 0;
    b.squares.forEach((_, i) => { const on = !!String(val(`${id}-${i}`)).trim(); n += on; const sq = box.querySelector(`[data-bg-sq="${id}-${i}"]`);
      if (sq) { sq.classList.toggle('is-done', on); sq.classList.toggle('in-line', inLine.has(i)); } });
    box.querySelector('[data-bg-score] b').textContent = n;
    const had = box.classList.contains('has-bingo');
    box.classList.toggle('has-bingo', !!lines.length); box.querySelector('.bg-flag').hidden = !lines.length;
    if (lines.length && !had) { toast('BINGO! Four in a row — shout it out!'); confetti(box.querySelector('.bg-score')); }
  }

  /* ───────── squeeze (sentence → notes) ───────── */
  B.squeeze = b => `<section class="block kit squeeze${fresh('sq-' + b.id)}" id="squeeze-${b.id}">
    <div class="block-label">${icon('pen')}Squeeze it</div>
    ${b.title ? `<h3>${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}
    <ol class="sq-items">${b.items.map((it, i) => { const k = `${b.id}-${i}`, v = String(val(k)), n = v.length, shown = st().checked[k];
      return `<li class="sq-item">
        <p class="sq-src"><span>${it.text.length} characters</span>${esc(it.text)}</p>
        <div class="sq-field"><textarea rows="2" data-save="${k}" data-squeeze="${it.max}" spellcheck="false" placeholder="Your notes — symbols and short forms…">${esc(v)}</textarea>
          <span class="sq-gauge${n > it.max ? ' is-over' : n ? ' is-in' : ''}" data-sq-gauge="${k}" style="--p:${Math.min(1, n / it.max)}"><b>${n}</b>/${it.max}</span></div>
        ${shown ? `<p class="sq-model"><span>A model</span><code>${esc(it.model)}</code></p>` : `<button class="btn-quiet btn-sm" data-sq-show="${k}">${icon('check')}Compare with a model</button>`}
      </li>`; }).join('')}</ol>
  </section>`;

  /* ───────── para (paraphrase with a copy meter) ───────── */
  const STOP = new Set('the a an and or but of to in on for with by from at as is are was were be been being that this these those it its their there they them can could may might will would should has have had do does did not no than then so such into about also more most some any all both each other which who whom whose what when where while because'.split(' '));
  const content = s => norm(s).split(' ').filter(w => w.length > 2 && !STOP.has(w));
  function overlap(src, mine) {
    const a = content(src), b = new Set(content(mine)); if (!a.length || !b.size) return 0;
    return Math.round(100 * a.filter(w => b.has(w)).length / a.length);
  }
  function paraMeter(it, v) {
    const p = overlap(it.text, v), n = words(v).length, miss = (it.keep || []).filter(k => !norm(v).includes(norm(k)));
    const level = !n ? '' : p > 60 ? 'is-high' : p > 35 ? 'is-mid' : 'is-low';
    const say = !n ? 'Start writing — the meter shows how much of the original you reused.' : p > 60 ? 'Too close to the original — change more words and the structure.' : p > 35 ? 'Getting there — try another strategy.' : 'Good distance from the original. Now check the meaning is the same.';
    return `<span class="pa-bar ${level}" style="--p:${p / 100}"><i></i></span><span class="pa-txt"><b>${n ? p + '%' : '—'}</b> of the original’s key words reused · ${say}</span>${miss.length && n ? `<span class="pa-keep">${icon('alert')}Keep the term${miss.length > 1 ? 's' : ''}: <b>${miss.map(esc).join(', ')}</b></span>` : ''}${it.sentences && n ? sentCount(it.sentences, v) : ''}`;
  }
  /* sentence counter for summaries: a sentence ends in . ! or ? (a final unfinished sentence counts too) */
  function sentCount(max, v) {
    const k = (String(v).replace(/\b(e\.g|i\.e)\.?/gi, 'eg').replace(/\b(et al|etc)\./gi, '$1').match(/[^.!?]*[A-Za-z][^.!?]*([.!?]+|$)/g) || []).filter(x => /[A-Za-z]/.test(x)).length;
    return `<span class="pa-keep${k > max ? '' : ' is-ok'}">${icon(k > max ? 'alert' : 'check')}<b>${k}</b> / ${max} sentences${k > max ? ' — too long: cut a detail or combine two ideas' : ''}</span>`;
  }
  B.para = b => `<section class="block kit para${fresh('pa-' + b.id)}" id="para-${b.id}">
    <div class="block-label">${icon('pen')}${b.label || 'Paraphrase it'}</div>
    ${b.title ? `<h3>${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}
    <ol class="pa-items">${b.items.map((it, i) => { const k = `${b.id}-${i}`, v = String(val(k)), shown = st().checked[k];
      return `<li class="pa-item">
        <p class="pa-src"><span class="pa-num">${i + 1}</span>${esc(it.text)}${it.strategy ? `<em class="pa-strat">${esc(it.strategy)}</em>` : ''}</p>
        <textarea rows="3" data-save="${k}" data-para="${b.id}" data-i="${i}" placeholder="${esc(b.placeholder || 'Your paraphrase…')}">${esc(v)}</textarea>
        <div class="pa-meter" data-pa-meter="${k}">${paraMeter(it, v)}</div>
        ${shown ? `<p class="pa-model"><span>A possible answer</span>${esc(it.model)}</p>` : `<button class="btn-quiet btn-sm" data-pa-show="${k}">${icon('check')}Compare with a possible answer</button>`}
      </li>`; }).join('')}</ol>
  </section>`;

  /* ───────── detect: a writing box whose "function lights" turn on as the student uses each function's language ─────────
     { type: 'detect', id, title?, hint?, label?, checks: [{ label, color?, any: ['phrase', '/regex/'] }],
       avoid?: [{ label, any: [...] }], items: [{ task, placeholder?, rows?, model? }] }
     Matching is case-insensitive; a string written as /…/ is a regular expression. */
  const dtHit = (any, v) => any.some(a => a.startsWith('/') ? new RegExp(a.slice(1, a.lastIndexOf('/')), 'i').test(v) : norm(v).includes(norm(a)));
  function dtLights(b, v) {
    const on = b.checks.filter(c => dtHit(c.any, v)).length, bad = (b.avoid || []).filter(a => dtHit(a.any, v));
    return `<span class="dt-score"><b>${on}</b>/${b.checks.length}</span>${b.checks.map(c => `<span class="dt-chip${dtHit(c.any, v) ? ' is-on' : ''}" style="--c:${c.color || '#2f7d6b'}"><i aria-hidden="true"></i>${c.label}</span>`).join('')}${bad.map(a => `<span class="dt-chip is-bad"><i aria-hidden="true"></i>${a.label}</span>`).join('')}`;
  }
  B.detect = b => `<section class="block kit detect${fresh('dt-' + b.id)}" id="detect-${b.id}">
    <div class="block-label">${icon('pen')}${b.label || 'Writing studio'}</div>
    ${b.title ? `<h3>${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}
    <ol class="dt-items">${b.items.map((it, i) => { const k = `${b.id}-${i}`, v = String(val(k)), shown = st().checked[k];
      return `<li class="dt-item">
        ${it.task ? `<p class="dt-task">${b.items.length > 1 ? `<span class="pa-num">${i + 1}</span>` : ''}${it.task}</p>` : ''}
        <textarea rows="${it.rows || 3}" data-save="${k}" data-detect="${b.id}" data-i="${i}" placeholder="${esc(it.placeholder || 'Write here…')}">${esc(v)}</textarea>
        <div class="dt-lights" data-dt-lights="${k}" aria-live="polite">${dtLights(b, v)}</div>
        ${it.model ? (shown ? `<p class="pa-model"><span>A possible answer</span>${it.model}</p>` : `<button class="btn-quiet btn-sm" data-dt-show="${k}">${icon('check')}Compare with a possible answer</button>`) : ''}
      </li>`; }).join('')}</ol>
  </section>`;

  /* ───────── sticky: a pinned note for one key idea ─────────
     { type: 'sticky', title?, text, color?: 'yellow' | 'pink' | 'green' | 'blue', tilt?: number } */
  B.sticky = b => `<aside class="block kit sticky sticky-${b.color || 'yellow'}" style="--tilt:${b.tilt ?? -1.5}deg"><i class="sticky-pin" aria-hidden="true"></i>
    ${b.title ? `<h3>${b.title}</h3>` : ''}<div class="sticky-text">${b.text}</div></aside>`;

  /* ───────── pairs: before → after examples; [[words]] are highlighted; the tag opens on tap ─────────
     { type: 'pairs', title?, hint?, items: [{ from, to, tag?, note? }], ask?: 'What changed?' } */
  const mk = t => esc(t).replace(/\[\[(.+?)\]\]/g, '<mark>$1</mark>');
  B.pairs = b => `<section class="block kit pairs">
    ${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}${b.hint ? `<p class="kit-hint">${b.hint}</p>` : ''}
    <ol class="pr-list">${b.items.map((it, i) => `<li class="pr-item"><span class="pr-num">${i + 1}</span>
      <p class="pr-from"><small>Original</small>${mk(it.from)}</p><span class="pr-arrow" aria-hidden="true">${icon('arrow')}</span><p class="pr-to"><small>New version</small>${mk(it.to)}</p>
      ${it.tag ? `<details class="pr-tag"><summary>${b.ask || 'What changed?'}</summary><b>${it.tag}</b>${it.note ? ` <span>${it.note}</span>` : ''}</details>` : ''}</li>`).join('')}</ol>
  </section>`;

  /* ───────── hotspot: a picture you can tap for more detail ───────── */
  let hsSeq = 0;
  B.hotspot = b => { const uid = 'hs' + (++hsSeq);
    return `<section class="block kit hotspot figure${b.size ? ' figure-' + b.size : ''}" data-hs="${uid}">
    ${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}<p class="kit-hint hs-hint">${icon('tap')}${b.hint || 'Tap a marker on the picture for more detail.'}</p>
    <div class="hs-stage"><img src="${esc(b.src)}" alt="${esc(b.alt || '')}" loading="lazy">
      ${b.spots.map((sp, i) => `<button type="button" class="hs-pin" style="left:${sp.x}%;top:${sp.y}%${sp.color ? `;--c:${sp.color}` : ''}" data-hs-pin="${uid}" data-i="${i}" data-x="${sp.x}" data-y="${sp.y}" aria-expanded="false" aria-label="${esc(strip(sp.title))}"><i></i><span>${sp.label || i + 1}</span></button>`).join('')}
      <div class="hs-pop" hidden>${b.spots.map((sp, i) => `<div class="hs-card" data-card="${i}" hidden${sp.color ? ` style="--c:${sp.color}"` : ''}><em>${sp.label || i + 1}</em><b>${sp.title}</b><div class="hs-text">${sp.text}</div><button type="button" class="hs-close" data-hs-close aria-label="Close">×</button></div>`).join('')}</div>
    </div>
    ${b.caption || b.credit ? `<figcaption>${b.caption ? `<b>${b.caption}</b>` : ''}${b.credit ? ` <span>${esc(b.credit)}</span>` : ''}</figcaption>` : ''}
  </section>`; };
  function hsOpen(pin) {
    const sec = pin.closest('.hotspot'), pop = sec.querySelector('.hs-pop'), i = pin.dataset.i, x = +pin.dataset.x, y = +pin.dataset.y, open = pin.getAttribute('aria-expanded') === 'true';
    sec.querySelectorAll('.hs-pin').forEach(p => p.setAttribute('aria-expanded', 'false'));
    sec.querySelectorAll('.hs-card').forEach(c => { c.hidden = true; });
    if (open) { pop.hidden = true; return; }
    pin.setAttribute('aria-expanded', 'true'); pop.querySelector(`[data-card="${i}"]`).hidden = false; pop.hidden = false;
    pop.style.left = x + '%'; pop.style.top = y + '%';
    pop.style.setProperty('--tx', x > 62 ? 'calc(-100% + 20px)' : x < 38 ? '-20px' : '-50%');
    pop.style.setProperty('--ty', y > 58 ? 'calc(-100% - 26px)' : '26px');
    pop.querySelector(`[data-card="${i}"] b`).setAttribute('tabindex', '-1');
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.hotspot .hs-pop:not([hidden])').forEach(p => { p.hidden = true; p.closest('.hotspot').querySelectorAll('.hs-pin').forEach(x => x.setAttribute('aria-expanded', 'false')); }); });

  /* ───────── registry ───────── */
  function register(b, reg) {
    if (b.type === 'match') reg(b.id, strip(b.title || 'Match up'));
    if (b.type === 'spot') reg(b.id, strip(b.title || 'Spot it'));
    if (b.type === 'outline') reg(b.id, strip(b.title || 'Outline'));
    if (b.type === 'limit') b.items.forEach((it, i) => reg(`${b.id}-${i}`, strip(it.q)));
    if (b.type === 'bet') b.items.forEach((it, i) => { reg(`${b.id}-${i}`, strip(it.q)); reg(`${b.id}-${i}-s`, 'Bet'); });
    if (b.type === 'bingo') b.squares.forEach((s, i) => reg(`${b.id}-${i}`, 'Find someone who: ' + strip(s.text)));
    if (b.type === 'squeeze') b.items.forEach((it, i) => reg(`${b.id}-${i}`, 'Notes: ' + it.text));
    if (b.type === 'para') b.items.forEach((it, i) => reg(`${b.id}-${i}`, 'Paraphrase: ' + it.text));
    if (b.type === 'detect') b.items.forEach((it, i) => reg(`${b.id}-${i}`, strip(it.task || b.title || 'Writing')));
  }
  function notebookItems(b) {
    const filled = v => String(v ?? '').trim() !== '', out = [];
    if (b.type === 'match' && filled(val(b.id))) {
      const p = pairsOf(b), ok = st().checked[b.id];
      const rows = b.left.map((l, i) => [strip(l), p[i] >= 0 ? strip(b.right[p[i]]) : '—', ok && p[i] >= 0 ? (p[i] === i ? 'Correct' : 'Answer: ' + strip(b.right[i])) : '']);
      out.push({ t: 'table', title: strip(b.title || 'Match up'), head: ok ? ['Item', 'My match', 'Check'] : ['Item', 'My match'], rows: ok ? rows : rows.map(r => r.slice(0, 2)), widths: ok ? [30, 40, 30] : [40, 60] });
    }
    if (b.type === 'spot' && filled(val(b.id))) { const on = new Set(list(b.id)); out.push({ t: 'qa', label: strip(b.title || 'Spot it') + ' — my choices', value: spotParts(b).flat().filter(p => p.k != null && on.has(p.k)).map(p => p.t).join(' · ') }); }
    if (b.type === 'outline' && filled(val(b.id))) { const lv = levelsOf(b); out.push({ t: 'qa', label: strip(b.title || 'Outline'), value: b.items.map((it, i) => '    '.repeat(lv[i]) + (lv[i] ? '– ' : '') + it[1]).join('\n') }); }
    if (b.type === 'limit') b.items.forEach((it, i) => filled(val(`${b.id}-${i}`)) && out.push({ t: 'qa', label: strip(it.q), value: val(`${b.id}-${i}`) }));
    if (b.type === 'bet') b.items.forEach((it, i) => filled(val(`${b.id}-${i}`)) && out.push({ t: 'qa', label: strip(it.q), value: `${val(`${b.id}-${i}`)}${val(`${b.id}-${i}-s`) ? ` (bet ${val(`${b.id}-${i}-s`)})` : ''}` }));
    if (b.type === 'bingo') { const rows = b.squares.map((s, i) => [strip(s.text), String(val(`${b.id}-${i}`))]).filter(r => r[1].trim()); if (rows.length) out.push({ t: 'table', title: strip(b.title || 'Find someone who'), head: ['Find someone who…', 'Classmate'], rows, widths: [65, 35] }); }
    if (b.type === 'squeeze') b.items.forEach((it, i) => filled(val(`${b.id}-${i}`)) && out.push({ t: 'qa', label: 'Notes for: ' + it.text, value: val(`${b.id}-${i}`) }));
    if (b.type === 'para') b.items.forEach((it, i) => filled(val(`${b.id}-${i}`)) && out.push({ t: 'qa', label: 'Paraphrase of: ' + it.text, value: val(`${b.id}-${i}`) }));
    if (b.type === 'detect') b.items.forEach((it, i) => filled(val(`${b.id}-${i}`)) && out.push({ t: 'qa', label: strip(it.task || b.title || 'Writing'), value: val(`${b.id}-${i}`) }));
    return out;
  }

  /* ───────── events ───────── */
  function celebrate(id, prefix, msg) { toast(msg); confetti(document.getElementById(prefix + id)); }
  function onClick(t, d) {
    if (d.hsPin) { hsOpen(t); return true; }
    if (d.hsClose !== undefined) { const sec = t.closest('.hotspot'); sec.querySelector('.hs-pop').hidden = true; sec.querySelectorAll('.hs-pin').forEach(x => x.setAttribute('aria-expanded', 'false')); return true; }
    if (d.mt) { mtTap(d.mt, d.side, Number(d.i)); return true; }
    if (d.mtCheck) { const b = findBlock(d.mtCheck), p = pairsOf(b), left = p.filter(x => x < 0).length;
      if (left && !st().teacher) { toast(`Match every card first (${left} left).`); return true; }
      st().checked[b.id] = true; save(); rerender(); if (p.every((r, i) => r === i)) celebrate(b.id, 'match-', 'All matched — brilliant!'); return true; }
    if (d.mtReset) { delete st().checked[d.mtReset]; set(d.mtReset, ''); pick = null; rerender(); return true; }
    if (d.mtSolve) { const b = findBlock(d.mtSolve); set(b.id, b.left.map((_, i) => i).join(',')); st().checked[b.id] = true; save(); rerender(); return true; }

    if (d.spot) { const on = new Set(list(d.spot)), k = Number(d.k); on.has(k) ? on.delete(k) : on.add(k); delete st().checked[d.spot]; set(d.spot, [...on].join(',')); rerender(); return true; }
    if (d.spotCheck) { const b = findBlock(d.spotCheck); if (!list(b.id).length && !st().teacher) { toast('Tap at least one phrase first.'); return true; }
      st().checked[b.id] = true; save(); rerender();
      const all = spotParts(b).flat().filter(p => p.k != null), on = new Set(list(b.id));
      if (all.every(p => p.ok === on.has(p.k))) celebrate(b.id, 'spot-', 'Spot on — every one found!'); return true; }
    if (d.spotReset) { delete st().checked[d.spotReset]; set(d.spotReset, ''); rerender(); return true; }

    if (d.ol) { const b = findBlock(d.ol), lv = levelsOf(b), i = Number(d.i); lv[i] = Math.max(0, Math.min(2, lv[i] + Number(d.dir))); delete st().checked[b.id]; set(b.id, lv.join(',')); rerender();
      document.querySelector(`[data-ol="${CSS.escape(b.id)}"][data-i="${i}"][data-dir="${d.dir}"]:not([disabled])`)?.focus({ preventScroll: true }); return true; }
    if (d.olCheck) { const b = findBlock(d.olCheck); st().checked[b.id] = true; save(); rerender(); if (b.items.every((it, i) => it[0] === levelsOf(b)[i])) celebrate(b.id, 'outline-', 'A perfect outline!'); return true; }
    if (d.olReset) { delete st().checked[d.olReset]; set(d.olReset, ''); rerender(); return true; }
    if (d.olSolve) { const b = findBlock(d.olSolve); set(b.id, b.items.map(it => it[0]).join(',')); st().checked[b.id] = true; save(); rerender(); return true; }

    if (d.lmCheck) { const b = findBlock(d.lmCheck), left = b.items.filter((_, i) => !String(val(`${b.id}-${i}`)).trim()).length;
      if (left && !st().teacher) { toast(`Answer every question first (${left} left).`); return true; }
      st().checked[b.id] = true; save(); rerender(); if (b.items.every((it, i) => limitOk(it, val(`${b.id}-${i}`), b.max || 3))) celebrate(b.id, 'limit-', 'All correct — and inside the word limit!'); return true; }
    if (d.lmReset) { delete st().checked[d.lmReset]; save(); rerender(); return true; }

    if (d.bet) { set(`${d.bet}-${d.i}`, d.opt); delete st().checked[d.bet]; rerender(); return true; }
    if (d.betStake) { set(`${d.betStake}-${d.i}-s`, d.s); delete st().checked[d.betStake]; rerender(); return true; }
    if (d.betCheck) { const b = findBlock(d.betCheck), left = b.items.filter((_, i) => !val(`${b.id}-${i}`) || !val(`${b.id}-${i}-s`)).length;
      if (left && !st().teacher) { toast(`Choose an answer and a bet for every question (${left} left).`); return true; }
      st().checked[b.id] = true; save(); rerender();
      const box = document.getElementById('bet-' + b.id); if (box && !reduce()) box.querySelector('.bt-bank')?.animate([{ transform: 'scale(1.18)' }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.2,.7,.2,1)' });
      if (b.items.every((q, i) => val(`${b.id}-${i}`) === q.answer)) celebrate(b.id, 'bet-', 'Every bet won — a perfect round!'); return true; }
    if (d.betReset) { const b = findBlock(d.betReset); delete st().checked[b.id]; b.items.forEach((_, i) => { delete st().values[`${b.id}-${i}`]; delete st().values[`${b.id}-${i}-s`]; }); save(); rerender(); return true; }

    if (d.paShow) { if (!String(val(d.paShow)).trim()) { toast('Write your paraphrase first, then compare.'); return true; } st().checked[d.paShow] = true; save(); rerender(); return true; }
    if (d.dtShow) { if (!String(val(d.dtShow)).trim()) { toast('Write your answer first, then compare.'); return true; } st().checked[d.dtShow] = true; save(); rerender(); return true; }
    if (d.sqShow) { if (!String(val(d.sqShow)).trim()) { toast('Write your notes first, then compare.'); return true; } st().checked[d.sqShow] = true; save(); rerender(); return true; }
    return false;
  }
  function onInput(t) {
    if (t.dataset.limit) { const n = words(t.value).length, max = Number(t.dataset.max), c = document.querySelector(`[data-lm-count="${CSS.escape(t.dataset.save)}"]`);
      if (c) { c.textContent = `${n} / ${max}`; c.className = 'lm-count' + (n > max ? ' is-over' : n ? ' is-in' : ''); }
      if (st().checked[t.dataset.limit]) { delete st().checked[t.dataset.limit]; save(); } }
    if (t.dataset.bingo) bingoRefresh(t.dataset.bingo);
    if (t.dataset.para) { const b = findBlock(t.dataset.para), m = document.querySelector(`[data-pa-meter="${CSS.escape(t.dataset.save)}"]`); if (b && m) m.innerHTML = paraMeter(b.items[Number(t.dataset.i)], t.value); }
    if (t.dataset.detect) { const b = findBlock(t.dataset.detect), m = document.querySelector(`[data-dt-lights="${CSS.escape(t.dataset.save)}"]`); if (b && m) m.innerHTML = dtLights(b, t.value); }
    if (t.dataset.squeeze) { const n = t.value.length, max = Number(t.dataset.squeeze), g = document.querySelector(`[data-sq-gauge="${CSS.escape(t.dataset.save)}"]`);
      if (g) { g.innerHTML = `<b>${n}</b>/${max}`; g.style.setProperty('--p', Math.min(1, n / max)); g.className = 'sq-gauge' + (n > max ? ' is-over' : n ? ' is-in' : ''); } }
  }
  return { B, register, notebookItems, onClick, onInput };
};
