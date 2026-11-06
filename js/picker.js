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
  const colorAt = (i, n) => PAL[(i === n - 1 && n > 1 && n % PAL.length === 1 ? i + 3 : i) % PAL.length];   // the last slice never matches the first
  const pt = (r, deg) => [C + r * Math.cos(deg * Math.PI / 180), C + r * Math.sin(deg * Math.PI / 180)];
  function wheelSVG(list) {
    const n = list.length;
    if (!n) return `<g class="pk-empty">${Array.from({ length: 12 }, (_, i) => seg(i, 12, i % 2 ? '#f6f1e6' : '#ece4d3')).join('')}<text x="${C}" y="${C - 82}" text-anchor="middle" class="pk-empty-tx">Add names on the right</text></g>`;
    const fs = n <= 6 ? 27 : n <= 10 ? 23 : n <= 16 ? 19 : n <= 24 ? 15.5 : 12.5;
    const slices = list.map((name, i) => {
      const mid = (i + .5) / n * 360, col = colorAt(i, n), light = LIGHT.has(col);
      const label = name.length > 20 ? name.slice(0, 19) + '…' : name;
      return `<g class="pk-seg" data-i="${i}">${seg(i, n, col)}<text transform="rotate(${mid} ${C} ${C})" x="${C + R - 30}" y="${C}" dy=".35em" text-anchor="end" font-size="${fs}" fill="${light ? '#14293a' : '#fff'}" stroke="${light ? 'rgba(255,255,255,.35)' : 'rgba(10,20,30,.28)'}" stroke-width="${light ? 2 : 3}" class="pk-name">${esc(label)}</text></g>`;
    }).join('');
    const lines = n > 1 ? Array.from({ length: n }, (_, i) => { const [x, y] = pt(R, i / n * 360); return `<path d="M${C} ${C}L${x.toFixed(1)} ${y.toFixed(1)}" stroke="url(#pk-gold)" stroke-width="2.2" stroke-opacity=".85"/>`; }).join('') : '';
    const pegs = Array.from({ length: n > 1 ? n : 0 }, (_, i) => { const [x, y] = pt(R - 9, i / n * 360); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.2" fill="url(#pk-peg)" stroke="#8a5a12" stroke-width=".8"/>`; }).join('');
    return slices + lines + pegs;
  }
  function seg(i, n, fill) {
    if (n === 1) return `<circle cx="${C}" cy="${C}" r="${R}" fill="${fill}"/>`;
    const a0 = (i / n) * 360, a1 = ((i + 1) / n) * 360, [x0, y0] = pt(R, a0), [x1, y1] = pt(R, a1);
    return `<path d="M${C} ${C}L${x0.toFixed(2)} ${y0.toFixed(2)}A${R} ${R} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}Z" fill="${fill}"/>`;
  }
  const bulbs = () => Array.from({ length: 32 }, (_, i) => { const [x, y] = pt(R + 17, i * 360 / 32); return `<g class="pk-bulb ${i % 2 ? 'b2' : 'b1'}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" class="pk-glow"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.6" class="pk-lamp"/></g>`; }).join('');
  const WHEEL_DEFS = `<defs>
      <radialGradient id="pk-depth" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset=".3" stop-color="#000" stop-opacity="0"/><stop offset=".78" stop-color="#fff" stop-opacity=".06"/><stop offset=".94" stop-color="#000" stop-opacity=".05"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></radialGradient>
      <linearGradient id="pk-gloss" x1="0" y1="0" x2=".55" y2=".9"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".45" stop-color="#fff" stop-opacity=".06"/><stop offset=".46" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <linearGradient id="pk-rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b4d68"/><stop offset=".5" stop-color="#14293a"/><stop offset="1" stop-color="#0a1824"/></linearGradient>
      <linearGradient id="pk-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff1c2"/><stop offset=".35" stop-color="#f0c35a"/><stop offset=".7" stop-color="#c88a1e"/><stop offset="1" stop-color="#f6d27a"/></linearGradient>
      <radialGradient id="pk-peg" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff7d6"/><stop offset=".5" stop-color="#f0c35a"/><stop offset="1" stop-color="#a86f14"/></radialGradient>
      <filter id="pk-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="16"/></filter>
      <filter id="pk-tight" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="3.5"/></filter>
      <radialGradient id="pk-floor" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#14293a" stop-opacity=".34"/><stop offset=".6" stop-color="#14293a" stop-opacity=".12"/><stop offset="1" stop-color="#14293a" stop-opacity="0"/></radialGradient>
      <linearGradient id="pk-post" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0c1c29"/><stop offset=".35" stop-color="#2c4d68"/><stop offset=".55" stop-color="#1b3549"/><stop offset="1" stop-color="#0a1824"/></linearGradient>
      <linearGradient id="pk-base" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b4d68"/><stop offset="1" stop-color="#0d1f2d"/></linearGradient>
      <linearGradient id="pk-spec" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <filter id="pk-blur" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0" class="pk-mb"/></filter>
    </defs>`;

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
          <div class="pk-rays" aria-hidden="true"></div>
          <div class="pk-wheel-wrap">
            <svg class="pk-wheel" viewBox="0 0 500 600" role="img" aria-label="${list.length ? 'A wheel with ' + list.length + ' names' : 'An empty wheel'}">
              ${WHEEL_DEFS}
              <ellipse cx="${C}" cy="${C + R + 96}" rx="${R * .8}" ry="20" fill="url(#pk-floor)"/>
              <ellipse cx="${C}" cy="${C + R + 91}" rx="${R * .52}" ry="6" fill="#0a1824" opacity=".28" filter="url(#pk-tight)"/>
              <g class="pk-stand">
                <path d="M${C - 15} ${C}h30l18 ${R + 58}h-66z" fill="url(#pk-post)"/>
                <path d="M${C - 3} ${C}h4l6 ${R + 58}h-6z" fill="#fff" opacity=".12"/>
                <rect x="${C - 122}" y="${C + R + 70}" width="244" height="20" rx="10" fill="#0a1824"/>
                <rect x="${C - 122}" y="${C + R + 70}" width="244" height="8" rx="4" fill="#fff" opacity=".07"/>
                <rect x="${C - 108}" y="${C + R + 56}" width="216" height="26" rx="13" fill="url(#pk-base)"/>
                <rect x="${C - 108}" y="${C + R + 56}" width="216" height="26" rx="13" fill="none" stroke="url(#pk-gold)" stroke-width="2"/>
                <path d="M${C - 94} ${C + R + 62}h188" stroke="#fff" stroke-opacity=".22" stroke-width="2" stroke-linecap="round"/>
                <circle cx="${C - 80}" cy="${C + R + 69}" r="3.4" fill="url(#pk-peg)"/><circle cx="${C + 80}" cy="${C + R + 69}" r="3.4" fill="url(#pk-peg)"/>
              </g>
              <circle cx="${C}" cy="${C + 26}" r="${R + 30}" fill="#0a1824" opacity=".26" filter="url(#pk-soft)"/>
              <circle cx="${C}" cy="${C + 6}" r="${R + 30}" fill="#0a1824" opacity=".32" filter="url(#pk-tight)"/>
              <circle cx="${C}" cy="${C}" r="${R + 30}" fill="url(#pk-rim)"/>
              <circle cx="${C}" cy="${C}" r="${R + 29}" fill="none" stroke="url(#pk-gold)" stroke-width="2.5"/>
              <circle cx="${C}" cy="${C}" r="${R + 23.5}" fill="none" stroke="#000" stroke-opacity=".25" stroke-width="1"/>
              <circle cx="${C}" cy="${C}" r="${R + 10.5}" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="1"/>
              <path d="M${C - R - 22} ${C - 40}A${R + 24} ${R + 24} 0 0 1 ${C + 40} ${C - R - 22}" fill="none" stroke="url(#pk-spec)" stroke-width="6" stroke-linecap="round" opacity=".55"/>
              <circle cx="${C}" cy="${C}" r="${R + 5}" fill="none" stroke="url(#pk-gold)" stroke-width="5"/>
              <g class="pk-bulbs">${bulbs()}</g>
              <g class="pk-rot" style="transform:rotate(${rot}deg)" filter="url(#pk-blur)">${wheelSVG(list)}</g>
              <circle cx="${C}" cy="${C}" r="${R}" fill="url(#pk-depth)" pointer-events="none"/>
              <path d="M${C - R + 8} ${C}A${R - 8} ${R - 8} 0 0 1 ${C + R - 8} ${C}C${C + R * .55} ${C - R * .18} ${C - R * .55} ${C - R * .05} ${C - R + 8} ${C}z" fill="url(#pk-gloss)" pointer-events="none"/>
            </svg>
            <div class="pk-pointer" aria-hidden="true"><svg viewBox="0 0 74 60"><defs><linearGradient id="pk-pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7d47e"/><stop offset=".55" stop-color="#e3a843"/><stop offset="1" stop-color="#b9781a"/></linearGradient></defs>
              <path d="M3 30 50 8c8-3.6 16 2 16 10.5v23c0 8.5-8 14-16 10.5z" fill="#14293a"/>
              <path d="M9 30 49 12.5c5.5-2.4 11 1.5 11 7.3v20.4c0 5.8-5.5 9.7-11 7.3z" fill="url(#pk-pg)"/>
              <path d="M9 30 49 12.5c5.5-2.4 11 1.5 11 7.3V27z" fill="#fff" opacity=".28"/>
              <circle cx="51" cy="30" r="6" fill="#14293a"/><circle cx="51" cy="30" r="2.6" fill="#f7d47e"/></svg></div>
            <button type="button" class="pk-hub" data-pk="spin"${list.length < 2 ? ' disabled' : ''} aria-label="Spin the wheel"><span class="pk-hub-ring"></span><b>SPIN</b><small>${list.length} ${S.tab === 'groups' ? (list.length === 1 ? 'group' : 'groups') : (list.length === 1 ? 'name' : 'names')}</small></button>
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

  /* ───────── sound: made on the fly with Web Audio (no files) ─────────
     • a whoosh while it turns: filtered noise that gets quieter and lower as the wheel slows
     • a click each time a peg passes the pointer: bright and light when fast, louder and deeper as it slows
     • a soft thunk when it stops, then a little fanfare */
  let ac = null, noise = null, whir = null;
  function ctx() {
    if (!S.sound) return null;
    try {
      ac ??= new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume();
      if (!noise) { noise = ac.createBuffer(1, ac.sampleRate, ac.sampleRate); const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
      return ac;
    } catch (e) { return null; }
  }
  function whirStart() {
    const a = ctx(); if (!a) return;
    const src = a.createBufferSource(), lp = a.createBiquadFilter(), bp = a.createBiquadFilter(), g = a.createGain();
    src.buffer = noise; src.loop = true; lp.type = 'lowpass'; lp.frequency.value = 1800; bp.type = 'peaking'; bp.frequency.value = 600; bp.gain.value = 6;
    g.gain.setValueAtTime(0, a.currentTime); g.gain.linearRampToValueAtTime(.09, a.currentTime + .25);
    src.connect(lp).connect(bp).connect(g).connect(a.destination); src.start();
    whir = { src, lp, g };
  }
  function whirSet(v) {   // v: speed 0..1
    if (!whir || !ac) return; const t = ac.currentTime;
    whir.g.gain.setTargetAtTime(.012 + .09 * v * v, t, .06); whir.lp.frequency.setTargetAtTime(260 + 2400 * v, t, .06);
  }
  function whirStop() { if (!whir || !ac) return; const w = whir; whir = null; w.g.gain.setTargetAtTime(0, ac.currentTime, .08); setTimeout(() => { try { w.src.stop(); } catch (e) { /* stopped */ } }, 600); }
  let lastClick = 0;
  function click(v) {   // v: speed 0..1
    const a = ctx(); if (!a) return; const t = a.currentTime;
    if (t - lastClick < .028) return; lastClick = t;
    const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    src.buffer = noise; f.type = 'bandpass'; f.frequency.value = 1700 + 2600 * v; f.Q.value = 4;
    const vol = .1 + .32 * (1 - v);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0005, t + .035 + .03 * (1 - v));
    src.connect(f).connect(g).connect(a.destination); src.start(t, Math.random() * .5, .08);
    const o = a.createOscillator(), og = a.createGain();   // a little woody "tock" under the click, stronger when slow
    o.type = 'triangle'; o.frequency.setValueAtTime(420 + 500 * v, t); o.frequency.exponentialRampToValueAtTime(180, t + .05);
    og.gain.setValueAtTime(.12 * (1 - v) + .02, t); og.gain.exponentialRampToValueAtTime(.0005, t + .06);
    o.connect(og).connect(a.destination); o.start(t); o.stop(t + .07);
  }
  function thunk() {
    const a = ctx(); if (!a) return; const t = a.currentTime, o = a.createOscillator(), g = a.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(60, t + .18);
    g.gain.setValueAtTime(.3, t); g.gain.exponentialRampToValueAtTime(.001, t + .25); o.connect(g).connect(a.destination); o.start(t); o.stop(t + .3);
  }
  function fanfare() {
    const a = ctx(); if (!a) return; const t = a.currentTime + .12;
    [[523.25, 0], [659.25, .1], [783.99, .2], [1046.5, .32], [1318.5, .32]].forEach(([f, d]) => {
      const o = a.createOscillator(), o2 = a.createOscillator(), g = a.createGain(); o.type = 'triangle'; o2.type = 'sine'; o.frequency.value = f; o2.frequency.value = f * 2;
      g.gain.setValueAtTime(0, t + d); g.gain.linearRampToValueAtTime(.12, t + d + .015); g.gain.exponentialRampToValueAtTime(.001, t + d + (d > .3 ? 1.2 : .5));
      o.connect(g); o2.connect(g); g.connect(a.destination); o.start(t + d); o2.start(t + d); o.stop(t + d + 1.3); o2.stop(t + d + 1.3);
    });
    for (let i = 0; i < 10; i++) { const o = a.createOscillator(), g = a.createGain(), d = .4 + i * .045; o.type = 'sine'; o.frequency.value = 2000 + Math.random() * 2600;   // sparkle
      g.gain.setValueAtTime(0, t + d); g.gain.linearRampToValueAtTime(.03, t + d + .01); g.gain.exponentialRampToValueAtTime(.0005, t + d + .25); o.connect(g).connect(a.destination); o.start(t + d); o.stop(t + d + .3); }
  }
  const chime = fanfare;

  /* ───────── spinning: a quick wind-up, a fast spin that slows down (ease-out), a tiny settle back onto the peg ───────── */
  function spin() {
    const list = live(); if (spinning || list.length < 2 || !root) return; root.querySelector('.pk-rot').classList.remove('has-win'); root.querySelectorAll('.pk-seg.is-win').forEach(x => x.classList.remove('is-win'));
    spinning = true; root.querySelector('.pk-win').hidden = true; root.classList.add('is-spinning');
    const n = list.length, a = 360 / n, w = Math.floor(Math.random() * n), u = .2 + Math.random() * .6;
    const theta = (w + u) * a, start = rot, turns = 6 + Math.floor(Math.random() * 3);
    const settle = Math.min(1.6, a * .12);
    const end = start + turns * 360 + (((-theta - start) % 360) + 360) % 360 + settle;   // overshoot a little, then settle back
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, dur = reduce ? 700 : 6200 + Math.random() * 1600;
    const g = root.querySelector('.pk-rot'), ptr = root.querySelector('.pk-pointer'), mb = root.querySelector('.pk-mb'), stage = root.querySelector('.pk-stage');
    const wind = reduce ? 0 : 260, back = reduce ? 0 : 7;
    const ease = t => 1 - Math.pow(1 - t, 3.2);
    const segAt = r => Math.floor((((-r % 360) + 360) % 360) / a);
    let last = segAt(start), prev = start, prevT = performance.now(); const t0 = prevT, vmax = (end - start) * 3.2 / dur;
    whirStart();
    const frame = now => {
      const el = now - t0;
      if (el < wind) { rot = start - back * Math.sin(el / wind * Math.PI / 2); }   // wind up: pull back a little
      else { const t = Math.min(1, (el - wind) / dur); rot = start - back + (end - start + back) * ease(t); }
      g.style.transform = `rotate(${rot}deg)`;
      const dt = Math.max(1, now - prevT), v = Math.min(1, Math.abs(rot - prev) / dt / vmax); prev = rot; prevT = now;
      if (mb) mb.setAttribute('stdDeviation', (v > .35 ? (v - .35) * 4.5 : 0).toFixed(2));
      stage.style.setProperty('--spd', v.toFixed(3)); whirSet(v);
      const s = segAt(rot); if (s !== last) { last = s; click(v); ptr.style.setProperty('--kick', (-10 - 16 * (1 - v)) + 'deg'); ptr.classList.remove('flick'); void ptr.offsetWidth; ptr.classList.add('flick'); }
      if (el < wind + dur) requestAnimationFrame(frame);
      else {   // settle back onto the slice, like the pointer catching on a peg
        whirStop(); if (mb) mb.setAttribute('stdDeviation', 0); stage.style.setProperty('--spd', 0);
        const from = rot, s0 = performance.now(), sd = reduce ? 1 : 420;
        const back2 = t2 => { const k = Math.min(1, (t2 - s0) / sd); rot = from - settle * (1 - Math.pow(1 - k, 2)); g.style.transform = `rotate(${rot}deg)`;
          if (k < 1) requestAnimationFrame(back2); else { thunk(); g.classList.add('has-win'); g.querySelector(`.pk-seg[data-i="${w}"]`)?.classList.add('is-win'); done(list[w], colorAt(w, n)); } };
        requestAnimationFrame(back2);
      }
    };
    requestAnimationFrame(frame);
  }
  function done(name, col = '#e3a843') {
    spinning = false; root.classList.remove('is-spinning'); rot %= 360;
    S.history.unshift(name); S.history = S.history.slice(0, 30); store(); chime();
    const box = root.querySelector('.pk-win');
    box.style.setProperty('--wc', col); box.innerHTML = `<span class="pk-win-badge" aria-hidden="true">${esc([...name][0] || '?').toUpperCase()}</span><span class="pk-win-kick">${S.tab === 'groups' ? 'The group is' : 'It’s your turn'}</span><b>${esc(name)}</b><div class="pk-win-row">${S.removeAfter ? `<button type="button" class="pk-btn" data-pk="next" data-name="${esc(name)}">Remove &amp; spin again</button><button type="button" class="pk-btn pk-soft" data-pk="keep" data-name="${esc(name)}">Keep on the wheel</button>` : `<button type="button" class="pk-btn" data-pk="again">Spin again</button><button type="button" class="pk-btn pk-soft" data-pk="close">Close</button>`}</div>`;
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
