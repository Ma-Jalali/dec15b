/* DEC15 class timer — the teacher starts a countdown and everyone in the class sees it at the top of every page.
   Calm by design: the ring drains slowly, colours move from teal to a warm gold near the end (never red), and the
   words are encouraging ("Plenty of time", "Start wrapping up"). Students can make it small; it never blinks.
   Stored in class_settings under the key "class_timer" (everyone reads it, only the teacher writes it), so it reaches
   every open page through the same live channel as the answers switch. Value:
     { state: 'running' | 'paused' | 'done' | 'off', total: seconds, endsAt: ISO time (running), left: seconds (paused), label }
   The column cannot be empty, so a stopped timer is saved as { state: 'off' }. A finished timer hides itself for
   everyone 3 minutes after the end, so it can never stay on screen. */
window.createDEC15Timer = function ({ getDb, isTeacher, esc, toast }) {
  let t = null, dock = null, timerId = 0, popEl = null, lastPhase = '', doneSeen = '', hideT = 0;
  const LIVE = ['running', 'paused', 'done'], DONE_FOR = 3 * 60 * 1000;
  const norm = v => (v && LIVE.includes(v.state) ? v : null);   // 'off', null or anything unknown = no timer
  const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
  let mini = LS('dec15-timer-mini') === '1';
  const R = 26, C = 2 * Math.PI * R;
  const PRESETS = [1, 2, 3, 5, 8, 10, 15, 20, 30, 45];
  const LABELS = ['Reading', 'Pair discussion', 'Group task', 'Writing', 'Listening', 'Break'];
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  const left = () => !t ? 0 : t.state === 'running' ? Math.max(0, (Date.parse(t.endsAt) - Date.now()) / 1000) : t.state === 'paused' ? Math.max(0, t.left || 0) : 0;
  const fmt = s => { s = Math.ceil(s); const m = Math.floor(s / 60), x = s % 60; return m >= 60 ? `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}:${String(x).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(x).padStart(2, '0')}`; };
  const phaseOf = (s, total) => (t?.state === 'done' || s <= 0 ? 'done' : s <= Math.min(120, total * 0.2) ? 'end' : s <= total * 0.5 ? 'half' : 'calm');
  const WORDS = { calm: 'Plenty of time', half: 'Halfway there', end: 'Start wrapping up', done: 'Time’s up — finish your sentence' };
  const endClock = () => t?.state === 'running' ? new Date(Date.parse(t.endsAt)).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' }) : '';

  /* ───────── saving (teacher only) ───────── */
  async function save(v) {
    const c = getDb(); if (!c || !isTeacher()) return false;
    const before = t; t = norm(v); render();
    const { error } = await c.from('class_settings').upsert({ key: 'class_timer', value: v, updated_at: new Date().toISOString() });
    if (error) { t = before; render(); toast('The timer could not be shared. Check your internet.'); return false; }
    return true;
  }
  const start = (mins, label) => { const total = Math.round(mins * 60); closePop(); return save({ state: 'running', total, endsAt: new Date(Date.now() + total * 1000).toISOString(), label: (label || '').trim().slice(0, 60) }).then(ok => ok && toast(`Timer started for everyone: ${mins} min.`)); };
  const pause = () => t && save({ ...t, state: 'paused', left: left(), endsAt: null });
  const resume = () => t && save({ ...t, state: 'running', endsAt: new Date(Date.now() + left() * 1000).toISOString(), left: null });
  const add = secs => { if (!t) return; const s = left() + secs, total = (t.total || 0) + secs;
    return save(t.state === 'paused' ? { ...t, left: s, total } : { ...t, state: 'running', total: t.state === 'done' ? secs : total, endsAt: new Date(Date.now() + s * 1000).toISOString() }); };
  const stop = () => save({ state: 'off' });

  /* ───────── the card at the top of the page ───────── */
  function ensureDock() {
    if (dock) return dock;
    dock = document.createElement('div'); dock.className = 'ct-dock'; dock.id = 'class-timer';
    const top = document.querySelector('.topbar'); (top?.parentNode || document.body).insertBefore(dock, top ? top.nextSibling : null);
    dock.addEventListener('click', onClick);
    return dock;
  }
  function render() {
    const d = ensureDock(); clearInterval(timerId); timerId = 0; clearTimeout(hideT);
    const doneAgo = t?.state === 'done' ? Date.now() - (Date.parse(t.endsAt) || 0) : 0;
    if (!t || doneAgo > DONE_FOR) { d.innerHTML = ''; d.hidden = true; paintButton(); return; }
    if (t.state === 'done') hideT = setTimeout(render, DONE_FOR - doneAgo + 500);
    if (t.state === 'done' && !isTeacher() && doneSeen === t.endsAt + t.total) { d.innerHTML = ''; d.hidden = true; paintButton(); return; }
    d.hidden = false; const teach = isTeacher();
    d.innerHTML = `<section class="ct${mini ? ' mini' : ''}" role="timer" aria-live="off" aria-label="Class timer">
      <span class="ct-ring" aria-hidden="true"><svg viewBox="0 0 64 64"><defs><linearGradient id="ct-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" class="ct-g1"/><stop offset="1" class="ct-g2"/></linearGradient></defs>
        <circle class="ct-track" cx="32" cy="32" r="${R}"/><circle class="ct-arc" cx="32" cy="32" r="${R}" style="stroke-dasharray:${C.toFixed(2)}"/><circle class="ct-tip" cx="32" cy="${32 - R}" r="3.4"/></svg>
        <span class="ct-glyph">${GLYPH}${DONE}</span></span>
      <span class="ct-body"><span class="ct-eyebrow">${esc(t.label || 'Class timer')}</span><b class="ct-time" aria-hidden="true">--:--</b><span class="ct-words"></span><span class="sr-only ct-sr" aria-live="polite"></span></span>
      <span class="ct-ctrl">${teach ? `${t.state === 'running' ? `<button type="button" data-ct="pause" title="Pause for everyone" aria-label="Pause">${I.pause}</button>` : t.state === 'paused' ? `<button type="button" data-ct="resume" title="Continue" aria-label="Continue">${I.play}</button>` : ''}
          <button type="button" data-ct="add" title="Add 1 minute" aria-label="Add 1 minute">+1 min</button><button type="button" data-ct="stop" title="Stop and hide the timer for everyone" aria-label="Stop the timer">${I.x}</button>`
        : t.state === 'done' ? `<button type="button" data-ct="hide" title="Hide" aria-label="Hide the timer">${I.x}</button>` : ''}
        <button type="button" data-ct="mini" class="ct-min" title="${mini ? 'Make it bigger' : 'Make it smaller'}" aria-label="${mini ? 'Make the timer bigger' : 'Make the timer smaller'}">${mini ? I.grow : I.shrink}</button></span>
      <i class="ct-bar" aria-hidden="true"><i></i></i></section>`;
    tickNow(true);
    if (t.state === 'running') timerId = setInterval(tickNow, 250);
    paintButton();
  }
  function tickNow(first) {
    const card = dock?.querySelector('.ct'); if (!card || !t) return;
    const s = left(), total = Math.max(1, t.total || 1), ph = phaseOf(s, total), p = ph === 'done' ? 1 : Math.min(1, Math.max(0, s / total));   // a finished timer shows a full, quiet ring
    if (t.state === 'running' && s <= 0) { clearInterval(timerId); timerId = 0; if (isTeacher()) save({ ...t, state: 'done', endsAt: t.endsAt }); else { t = { ...t, state: 'done' }; render(); } return; }
    card.dataset.phase = ph; card.classList.toggle('paused', t.state === 'paused');
    card.querySelector('.ct-time').textContent = ph === 'done' ? '00:00' : fmt(s);
    card.querySelector('.ct-arc').style.strokeDashoffset = (C * (1 - p)).toFixed(2);
    const a = -Math.PI / 2 + 2 * Math.PI * p, tip = card.querySelector('.ct-tip'); tip.setAttribute('cx', (32 + R * Math.cos(a)).toFixed(2)); tip.setAttribute('cy', (32 + R * Math.sin(a)).toFixed(2));
    card.querySelector('.ct-bar > i').style.transform = `scaleX(${p})`;
    card.querySelector('.ct-words').textContent = t.state === 'paused' ? 'Paused' : ph === 'done' ? WORDS.done : `${WORDS[ph]}${endClock() ? ' · ends ' + endClock() : ''}`;
    if (ph !== lastPhase || first) { const sr = card.querySelector('.ct-sr'); if (sr && !first) sr.textContent = t.state === 'paused' ? 'Timer paused' : ph === 'done' ? 'Time is up' : `${WORDS[ph]}. ${Math.ceil(s / 60)} minutes left.`;
      if (ph === 'done' && lastPhase && lastPhase !== 'done' && !reduce()) { card.classList.add('ct-cheer'); setTimeout(() => card.classList.remove('ct-cheer'), 1600); }
      lastPhase = ph; }
    const btn = document.getElementById('timer-btn'); if (btn && t.state !== 'done') btn.querySelector('.tb-left') && (btn.querySelector('.tb-left').textContent = fmt(s));
  }
  function onClick(e) {
    const b = e.target.closest('[data-ct]'); if (!b) return; const a = b.dataset.ct;
    if (a === 'mini') { mini = !mini; LS('dec15-timer-mini', mini ? '1' : '0'); render(); return; }
    if (a === 'hide') { doneSeen = t.endsAt + t.total; render(); return; }
    if (!isTeacher()) return;
    if (a === 'pause') pause(); if (a === 'resume') resume(); if (a === 'add') add(60); if (a === 'stop') stop();
  }

  /* ───────── the teacher's "Timer" button and its start panel ───────── */
  function paintButton() {
    const btn = document.getElementById('timer-btn'); if (!btn) return;
    btn.hidden = !isTeacher() || !getDb(); if (btn.hidden) return;
    const on = t && (t.state === 'running' || t.state === 'paused');
    btn.classList.toggle('on', !!on);
    btn.innerHTML = `${I.watch}<span class="tb-tx">${on ? `<span class="tb-left">${fmt(left())}</span>` : 'Timer'}</span>`;
    btn.setAttribute('aria-label', on ? 'Class timer running. Start a new one' : 'Start a class timer');
  }
  function closePop() { popEl?.remove(); popEl = null; document.getElementById('timer-btn')?.setAttribute('aria-expanded', 'false'); }
  function openPop(btn) {
    if (popEl) { closePop(); return; }
    popEl = document.createElement('div'); popEl.className = 'ct-pop'; popEl.setAttribute('role', 'dialog'); popEl.setAttribute('aria-label', 'Start a class timer');
    let mins = +(LS('dec15-timer-last') || 10);
    popEl.innerHTML = `<form novalidate>
      <div class="ct-pop-head">${I.watch}<div><b>Class timer</b><small>Everyone in the class sees it at the top of their page.</small></div></div>
      <p class="ct-pop-l">How long?</p>
      <div class="ct-chips" role="radiogroup" aria-label="Minutes">${PRESETS.map(m => `<button type="button" role="radio" data-min="${m}" aria-checked="${m === mins}">${m}<small>min</small></button>`).join('')}</div>
      <label class="ct-own">Or type minutes <input name="m" type="number" min="0.5" max="180" step="0.5" inputmode="decimal" value="${mins}"></label>
      <p class="ct-pop-l">What is it for? <small>(optional)</small></p>
      <input class="ct-label" name="l" maxlength="60" placeholder="e.g. Pair discussion" list="ct-labels" value="${esc(LS('dec15-timer-label') || '')}"><datalist id="ct-labels">${LABELS.map(l => `<option value="${l}">`).join('')}</datalist>
      <div class="ct-pop-act">${t ? '<button type="button" class="btn-quiet btn-sm" data-pop="stop">Stop timer</button>' : '<span></span>'}<button class="btn btn-sm" type="submit">${I.play}Start for everyone</button></div></form>`;
    document.body.append(popEl);
    const r = btn.getBoundingClientRect(); popEl.style.top = (r.bottom + 8) + 'px'; popEl.style.left = Math.max(8, Math.min(r.left + r.width / 2 - popEl.offsetWidth / 2, innerWidth - popEl.offsetWidth - 8)) + 'px';
    btn.setAttribute('aria-expanded', 'true');
    const f = popEl.querySelector('form'), inp = f.querySelector('[name=m]');
    f.addEventListener('click', e => { const c = e.target.closest('[data-min]'); if (c) { mins = +c.dataset.min; inp.value = mins; f.querySelectorAll('[data-min]').forEach(x => x.setAttribute('aria-checked', String(x === c))); }
      if (e.target.closest('[data-pop=stop]')) { closePop(); stop(); } });
    inp.addEventListener('input', () => f.querySelectorAll('[data-min]').forEach(x => x.setAttribute('aria-checked', String(+x.dataset.min === +inp.value))));
    f.addEventListener('submit', e => { e.preventDefault(); const m = Math.min(180, Math.max(0.5, +inp.value || 0)); if (!m) { inp.focus(); return; }
      const l = f.querySelector('[name=l]').value; LS('dec15-timer-last', String(m)); LS('dec15-timer-label', l); start(m, l); });
    setTimeout(() => f.querySelector('[aria-checked=true]')?.focus() || inp.focus(), 0);
  }
  document.addEventListener('click', e => { const b = e.target.closest('#timer-btn'); if (b) { openPop(b); return; } if (popEl && !popEl.contains(e.target)) closePop(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && popEl) { closePop(); document.getElementById('timer-btn')?.focus(); } });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && t) tickNow(); });

  const SV = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = { pause: SV('<path d="M9 6v12M15 6v12"/>'), play: SV('<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke-width="1.2"/>'), x: SV('<path d="M7 7l10 10M17 7 7 17"/>'),
    shrink: SV('<path d="M9 4v5H4M15 20v-5h5"/>'), grow: SV('<path d="M4 9V4h5M20 15v5h-5"/>'),
    watch: SV('<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.6 1.8M9.5 2.8h5M12 2.8V6M18.6 6.9l1.2-1.2"/>') };
  const GLYPH = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h10M7 20.5h10M8 3.5c0 4.2 4 5.3 4 8.5s-4 4.3-4 8.5M16 3.5c0 4.2-4 5.3-4 8.5s4 4.3 4 8.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path class="ct-sand" d="M9.6 19.2c.7-1.8 1.7-2.6 2.4-2.6s1.7.8 2.4 2.6z" fill="currentColor"/></svg>`;

  const DONE = `<svg class="ct-check" viewBox="0 0 24 24" aria-hidden="true"><path d="m6.5 12.5 3.6 3.6 7.4-8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return { set(v) { const was = t; t = norm(v); if (!was || !t || was.endsAt !== t.endsAt || was.state !== t.state || was.total !== t.total || was.label !== t.label) { if (t && (!was || was.endsAt !== t.endsAt)) lastPhase = ''; render(); } },
    paintButton, get value() { return t; } };
};
