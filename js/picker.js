/* DEC10 · Name wheel (side panel → Class & tools). Spin a wheel to pick a student or a group at random.
   Two lists (Students, Groups) kept on this device; "remove after pick" so nobody is picked twice; a ticking
   pointer, a winner card with confetti, a picks history, sound on/off and full screen for the projector. */
window.DEC15Picker = (() => {
  const KEY = 'dec10-picker';
  const PAL = ['#1f8a7a', '#e3a843', '#2f6db5', '#e0674b', '#7a4a8c', '#4f9a5b', '#c2562f', '#3aa6c9', '#a3416a', '#b07d12'];
  const LIGHT = new Set(['#e3a843', '#3aa6c9']);   // dark text on these
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  let S = Object.assign({ tab: 'names', names: '', groups: 'Group 1\nGroup 2\nGroup 3\nGroup 4\nGroup 5', out: { names: [], groups: [] }, removeAfter: true, sound: true, history: [] }, load());
  const store = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private window */ } };
  const all = () => (S[S.tab] || '').split('\n').map(x => x.trim()).filter(Boolean);
  const live = () => { const out = new Set(S.out[S.tab] || []); return all().filter(n => !out.has(n)); };
  let rot = 0, spinning = false, root = null, audio = null;

  /* ───────── the wheel ───────── */
  const R = 230, C = 250;
  function wheelSVG(list) {
    const n = list.length;
    if (!n) return `<g class="pk-empty"><circle cx="${C}" cy="${C}" r="${R}" fill="#f4efe4"/>${Array.from({ length: 8 }, (_, i) => seg(i, 8, '#ece5d6', i % 2 ? '#f4efe4' : '#ece5d6')).join('')}<text x="${C}" y="${C - 74}" text-anchor="middle" class="pk-empty-tx">Add names on the right</text></g>`;
    const fs = n <= 6 ? 26 : n <= 10 ? 22 : n <= 16 ? 18 : n <= 24 ? 15 : 12;
    return list.map((name, i) => {
      const a0 = (i / n) * 360, mid = a0 + 180 / n, col = PAL[(i === n - 1 && n > 1 && n % PAL.length === 1 ? i + 3 : i) % PAL.length];   // the last slice never matches the first
      const label = name.length > 20 ? name.slice(0, 19) + '…' : name;
      return `<g class="pk-seg" data-i="${i}">${seg(i, n, col)}<text transform="rotate(${mid} ${C} ${C})" x="${C + R - 24}" y="${C}" dy=".35em" text-anchor="end" font-size="${fs}" fill="${LIGHT.has(col) ? '#14293a' : '#fff'}" class="pk-name">${esc(label)}</text></g>`;
    }).join('');
  }
  function seg(i, n, fill, alt) {
    if (n === 1) return `<circle cx="${C}" cy="${C}" r="${R}" fill="${fill}"/>`;
    const p = a => [C + R * Math.cos(a * Math.PI / 180), C + R * Math.sin(a * Math.PI / 180)];
    const a0 = (i / n) * 360, a1 = ((i + 1) / n) * 360, [x0, y0] = p(a0), [x1, y1] = p(a1);
    return `<path d="M${C} ${C}L${x0.toFixed(2)} ${y0.toFixed(2)}A${R} ${R} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}Z" fill="${alt || fill}" stroke="#fff" stroke-opacity=".55" stroke-width="1.5"/>`;
  }
  const bulbs = () => Array.from({ length: 24 }, (_, i) => { const a = i * 15 * Math.PI / 180; return `<circle class="pk-bulb" style="animation-delay:${(i % 2) * .6}s" cx="${(C + (R + 11) * Math.cos(a)).toFixed(1)}" cy="${(C + (R + 11) * Math.sin(a)).toFixed(1)}" r="3.4"/>`; }).join('');

  /* ───────── the page ───────── */
  function html() {
    const list = live(), n = all().length, out = S.out[S.tab] || [];
    return `<div class="pk-page">
      <header class="pk-hero">
        <div><span class="pk-kicker">Class &amp; tools</span><h1>Name wheel</h1><p>Spin to choose a student or a group at random. Press <kbd>Space</kbd> to spin.</p></div>
        <div class="pk-hero-tools">
          <button type="button" class="pk-ghost" data-pk="sound" aria-pressed="${S.sound}" title="Sound on/off">${S.sound ? ICON.sound : ICON.mute}<span>${S.sound ? 'Sound on' : 'Sound off'}</span></button>
          <button type="button" class="pk-ghost" data-pk="full" title="Full screen for the projector">${ICON.full}<span>Full screen</span></button>
        </div>
      </header>
      <div class="pk-grid">
        <section class="pk-stage" aria-label="The wheel">
          <div class="pk-wheel-wrap">
            <svg class="pk-wheel" viewBox="0 0 500 500" role="img" aria-label="${list.length ? 'A wheel with ' + list.length + ' names' : 'An empty wheel'}">
              <defs><radialGradient id="pk-shine" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></radialGradient>
                <filter id="pk-sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#14293a" flood-opacity=".28"/></filter></defs>
              <circle cx="${C}" cy="${C}" r="${R + 20}" fill="#14293a" filter="url(#pk-sh)"/>
              <circle cx="${C}" cy="${C}" r="${R + 20}" fill="none" stroke="#e3a843" stroke-width="3" stroke-opacity=".9"/>
              <g class="pk-bulbs">${bulbs()}</g>
              <g class="pk-rot" style="transform:rotate(${rot}deg)">${wheelSVG(list)}</g>
              <circle cx="${C}" cy="${C}" r="${R}" fill="url(#pk-shine)" pointer-events="none"/>
            </svg>
            <div class="pk-pointer" aria-hidden="true"><svg viewBox="0 0 60 50"><path d="M4 25 52 6c4-1.5 7 2 5 6L50 25l7 13c2 4-1 7.5-5 6z" fill="#14293a"/><path d="M10 25 50 10 44 25z" fill="#e3a843"/></svg></div>
            <button type="button" class="pk-hub" data-pk="spin"${list.length < 2 ? ' disabled' : ''} aria-label="Spin the wheel"><b>SPIN</b><small>${list.length} ${S.tab === 'groups' ? (list.length === 1 ? 'group' : 'groups') : (list.length === 1 ? 'name' : 'names')}</small></button>
            <div class="pk-win" hidden role="status" aria-live="assertive"></div>
          </div>
          ${S.history.length ? `<div class="pk-history"><span>Picked</span>${S.history.slice(0, 12).map((h, i) => `<em${i === 0 ? ' class="is-new"' : ''}>${esc(h)}</em>`).join('')}<button type="button" class="pk-link" data-pk="clearhist">Clear</button></div>` : ''}
        </section>
        <aside class="pk-panel">
          <div class="pk-tabs" role="tablist">
            <button type="button" role="tab" data-pk-tab="names" aria-selected="${S.tab === 'names'}">${ICON.person}Students</button>
            <button type="button" role="tab" data-pk-tab="groups" aria-selected="${S.tab === 'groups'}">${ICON.group}Groups</button>
          </div>
          <label class="pk-label" for="pk-list">${S.tab === 'groups' ? 'One group per line' : 'One name per line'} <span>${n}</span></label>
          <textarea id="pk-list" class="pk-list" rows="11" spellcheck="false" placeholder="${S.tab === 'groups' ? 'Group 1\nGroup 2\nGroup 3' : 'Sara\nAli\nMing\nPriya'}">${esc(S[S.tab])}</textarea>
          <div class="pk-row">
            <button type="button" class="pk-chip" data-pk="shuffle">${ICON.shuffle}Shuffle</button>
            <button type="button" class="pk-chip" data-pk="sort">${ICON.sort}A–Z</button>
            ${S.tab === 'groups' ? `<span class="pk-make"><label for="pk-n">Make</label><input id="pk-n" type="number" min="2" max="30" value="${Math.max(2, n || 5)}"><button type="button" class="pk-chip" data-pk="makegroups">groups</button></span>` : ''}
            <button type="button" class="pk-chip pk-danger" data-pk="clear">Clear</button>
          </div>
          <label class="pk-switch"><input type="checkbox" data-pk="removeAfter"${S.removeAfter ? ' checked' : ''}><i></i><span><b>Remove after a pick</b><small>Nobody is picked twice until you put them back.</small></span></label>
          ${out.length ? `<div class="pk-out"><div class="pk-out-head"><b>Already picked · ${out.length}</b><button type="button" class="pk-link" data-pk="reset">Put everyone back</button></div><div class="pk-out-list">${out.map(x => `<button type="button" class="pk-out-chip" data-pk-back="${esc(x)}" title="Put ${esc(x)} back on the wheel">${esc(x)}<span aria-hidden="true">↺</span></button>`).join('')}</div></div>` : ''}
          <p class="pk-note">${ICON.lock}Saved on this device only. Names are not sent anywhere.</p>
        </aside>
      </div>
    </div>`;
  }
  const ICON = {
    sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="m16 9.5 5 5m0-5-5 5"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
    group: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="8.5" r="3"/><circle cx="16.5" cy="9.5" r="2.4"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M14.5 15.2a4.5 4.5 0 0 1 6 3.8"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h3c5 0 5 10 10 10h3M4 17h3c1.6 0 2.6-1 3.4-2.4M13.6 9.4C14.4 8 15.4 7 17 7h3M17.5 4.5 20 7l-2.5 2.5M17.5 14.5 20 17l-2.5 2.5"/></svg>',
    sort: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16M4 17l3 3 3-3M13 6h7M13 11h5M13 16h3"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',
  };

  /* ───────── spinning ───────── */
  function tick() {
    if (!S.sound) return;
    try { audio ??= new (window.AudioContext || window.webkitAudioContext)();
      const o = audio.createOscillator(), g = audio.createGain(), t = audio.currentTime;
      o.type = 'triangle'; o.frequency.setValueAtTime(1500, t); o.frequency.exponentialRampToValueAtTime(700, t + .04);
      g.gain.setValueAtTime(.18, t); g.gain.exponentialRampToValueAtTime(.001, t + .05); o.connect(g).connect(audio.destination); o.start(t); o.stop(t + .06);
    } catch (e) { /* no audio */ }
  }
  function chime() {
    if (!S.sound) return;
    try { audio ??= new (window.AudioContext || window.webkitAudioContext)(); const t = audio.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => { const o = audio.createOscillator(), g = audio.createGain(); o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0, t + i * .09); g.gain.linearRampToValueAtTime(.16, t + i * .09 + .02); g.gain.exponentialRampToValueAtTime(.001, t + i * .09 + .6); o.connect(g).connect(audio.destination); o.start(t + i * .09); o.stop(t + i * .09 + .7); });
    } catch (e) { /* no audio */ }
  }
  function spin() {
    const list = live(); if (spinning || list.length < 2 || !root) return; root.querySelector('.pk-rot').classList.remove('has-win'); root.querySelectorAll('.pk-seg.is-win').forEach(x => x.classList.remove('is-win'));
    spinning = true; root.querySelector('.pk-win').hidden = true; root.classList.add('is-spinning');
    const n = list.length, a = 360 / n, w = Math.floor(Math.random() * n), u = .15 + Math.random() * .7;
    const theta = (w + u) * a, start = rot, turns = 5 + Math.floor(Math.random() * 3);
    const end = start + turns * 360 + (((-theta - start) % 360) + 360) % 360;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, dur = reduce ? 600 : 5200 + Math.random() * 1200;
    const g = root.querySelector('.pk-rot'), ptr = root.querySelector('.pk-pointer');
    const ease = t => 1 - Math.pow(1 - t, 4);
    const segAt = r => Math.floor((((-r % 360) + 360) % 360) / a);
    let last = segAt(start), t0 = performance.now();
    const frame = now => {
      const t = Math.min(1, (now - t0) / dur); rot = start + (end - start) * ease(t);
      g.style.transform = `rotate(${rot}deg)`;
      const s = segAt(rot); if (s !== last) { last = s; tick(); ptr.classList.remove('flick'); void ptr.offsetWidth; ptr.classList.add('flick'); }
      if (t < 1) requestAnimationFrame(frame); else { g.classList.add('has-win'); g.querySelector(`.pk-seg[data-i="${w}"]`)?.classList.add('is-win'); done(list[w]); }
    };
    requestAnimationFrame(frame);
  }
  function done(name) {
    spinning = false; root.classList.remove('is-spinning'); rot %= 360;
    S.history.unshift(name); S.history = S.history.slice(0, 30); store(); chime();
    const box = root.querySelector('.pk-win');
    box.innerHTML = `<span class="pk-win-kick">${S.tab === 'groups' ? 'The group is' : 'It’s your turn'}</span><b>${esc(name)}</b><div class="pk-win-row">${S.removeAfter ? `<button type="button" class="pk-btn" data-pk="next" data-name="${esc(name)}">Remove &amp; spin again</button><button type="button" class="pk-btn pk-soft" data-pk="keep" data-name="${esc(name)}">Keep on the wheel</button>` : `<button type="button" class="pk-btn" data-pk="again">Spin again</button><button type="button" class="pk-btn pk-soft" data-pk="close">Close</button>`}</div>`;
    box.hidden = false;
    if (S.removeAfter) { (S.out[S.tab] ||= []).push(name); store(); }
    document.dispatchEvent(new CustomEvent('dec15:celebrate', { detail: box }));
    box.querySelector('button')?.focus({ preventScroll: true });
  }

  function paint() { if (!root) return; const f = document.activeElement?.id, pos = f === 'pk-list' ? root.querySelector('#pk-list').selectionStart : null; root.innerHTML = html(); if (f === 'pk-list') { const t = root.querySelector('#pk-list'); t.focus(); t.setSelectionRange(pos, pos); } }
  function refreshWheel() {   // typing in the list: redraw only the wheel and the counts, so the textarea keeps its cursor
    if (!root) return; const list = live(), n = all().length;
    root.querySelector('.pk-rot').innerHTML = wheelSVG(list);
    const hub = root.querySelector('.pk-hub'); hub.disabled = list.length < 2;
    hub.querySelector('small').textContent = `${list.length} ${S.tab === 'groups' ? (list.length === 1 ? 'group' : 'groups') : (list.length === 1 ? 'name' : 'names')}`;
    root.querySelector('.pk-label span').textContent = n;
  }
  function mount(el) {
    root = el; paint();
    el.addEventListener('click', e => {
      const t = e.target.closest('[data-pk], [data-pk-tab], [data-pk-back]'); if (!t) return;
      if (t.dataset.pkTab) { S.tab = t.dataset.pkTab; store(); paint(); return; }
      if (t.dataset.pkBack) { S.out[S.tab] = (S.out[S.tab] || []).filter(x => x !== t.dataset.pkBack); store(); paint(); return; }
      const k = t.dataset.pk, lines = all();
      if (k === 'spin' || k === 'again') { if (k === 'again') root.querySelector('.pk-win').hidden = true; spin(); }
      if (k === 'next') { paint(); setTimeout(spin, 120); }
      if (k === 'keep') { S.out[S.tab] = (S.out[S.tab] || []).filter((x, i, arr) => !(x === t.dataset.name && i === arr.lastIndexOf(x))); store(); root.querySelector('.pk-win').hidden = true; }
      if (k === 'close' || k === 'keep') { root.querySelector('.pk-win').hidden = true; root.querySelector('.pk-rot').classList.remove('has-win'); }
      if (k === 'shuffle') { for (let i = lines.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [lines[i], lines[j]] = [lines[j], lines[i]]; } S[S.tab] = lines.join('\n'); store(); paint(); }
      if (k === 'sort') { S[S.tab] = lines.sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).join('\n'); store(); paint(); }
      if (k === 'makegroups') { const n = Math.max(2, Math.min(30, Number(root.querySelector('#pk-n').value) || 5)); S.groups = Array.from({ length: n }, (_, i) => `Group ${i + 1}`).join('\n'); S.out.groups = []; store(); paint(); }
      if (k === 'clear') { if (!lines.length || confirm('Clear the whole list?')) { S[S.tab] = ''; S.out[S.tab] = []; store(); paint(); } }
      if (k === 'reset') { S.out[S.tab] = []; store(); paint(); }
      if (k === 'clearhist') { S.history = []; store(); paint(); }
      if (k === 'sound') { S.sound = !S.sound; store(); paint(); }
      if (k === 'full') { const st = root.querySelector('.pk-page'); if (document.fullscreenElement) document.exitFullscreen(); else st.requestFullscreen?.().catch(() => {}); }
    });
    el.addEventListener('change', e => { if (e.target.dataset.pk === 'removeAfter') { S.removeAfter = e.target.checked; store(); } });
    el.addEventListener('input', e => { if (e.target.id !== 'pk-list') return; S[S.tab] = e.target.value; const names = new Set(all()); S.out[S.tab] = (S.out[S.tab] || []).filter(x => names.has(x)); store(); refreshWheel(); });
    el.addEventListener('focusout', e => { if (e.target.id === 'pk-list') paint(); });
  }
  document.addEventListener('keydown', e => {
    if (!root || !root.isConnected || e.repeat) return;
    if ((e.key === ' ' || e.key === 'Enter') && !e.target.closest('textarea, input, button, a, [contenteditable]')) { e.preventDefault(); spin(); }
    if (e.key === 'Escape') { const w = root.querySelector('.pk-win'); if (w && !w.hidden) w.hidden = true; }
  });
  return { html, mount };
})();
