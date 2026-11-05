/* DEC10 · Readings and listening scripts (#/…/sources): the page and its pictures.
   Each text gets its own vector picture, drawn from the text itself: a reading is a printed article with its
   own headline, publisher and paragraph letters; a listening transcript has an audio bar, timestamps and
   headphones; a report has its year, a chart and a globe. Used by sourcesPage() in js/app.js. */
window.DEC15Library = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const TONE = { reading: ['#c27a14', '#fbf1dd'], listening: ['#1f8a7a', '#e3f4ef'], report: ['#2f6db5', '#e8f0fb'], discussion: ['#7a4a8c', '#f2e9f6'] };
  const kindOf = s => { const k = String(s.kind || '').toLowerCase(); return k.includes('listening') ? 'listening' : k.includes('discussion') ? 'discussion' : k.includes('mediation') || /report/i.test(s.title + s.short) ? 'report' : 'reading'; };
  const words = s => (s.paragraphs || []).join(' ').split(/\s+/).filter(Boolean).length;
  const publisher = s => String(s.short || '').split('·').slice(1).join('·').trim() || String(s.cite || '').replace(/\s*\(\d{4}\)\s*$/, '');
  const year = s => (String(s.cite || '').match(/(\d{4})/) || [])[1] || '';
  /* split a title into short lines for the picture */
  function wrap(t, max = 22, lines = 2) {
    const out = []; let cur = '';
    for (const w of String(t).split(/\s+/)) { if ((cur + ' ' + w).trim().length > max && cur) { out.push(cur); cur = w; if (out.length === lines) break; } else cur = (cur + ' ' + w).trim(); }
    if (out.length < lines && cur) out.push(cur);
    if (out.length === lines && out.join(' ').length < String(t).length) out[lines - 1] = out[lines - 1].replace(/\s*\S*$/, '') + '…';
    return out;
  }
  const letters = s => (s.paragraphs || []).map(p => (p.match(/^([A-Z])\. /) || [])[1]).filter(Boolean).slice(0, 5);
  const DEFS = (id, c) => `<defs>
    <filter id="${id}-sh" x="-25%" y="-25%" width="150%" height="170%"><feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="#14293a" flood-opacity=".16"/><feDropShadow dx="0" dy="1" stdDeviation=".8" flood-color="#14293a" flood-opacity=".1"/></filter>
    <linearGradient id="${id}-c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".85"/><stop offset="1" stop-color="${c}"/></linearGradient>
    <linearGradient id="${id}-p" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fbf8f1"/></linearGradient>
    <radialGradient id="${id}-g" cx=".5" cy=".55" r=".55"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>`;
  const spark = (x, y, c, k = 1, d = 0) => `<path class="rl-tw" style="animation-delay:${d}s" d="M${x} ${y - 5 * k}l${1.4 * k} ${3.6 * k} ${3.6 * k} ${1.4 * k}-${3.6 * k} ${1.4 * k}-${1.4 * k} ${3.6 * k}-${1.4 * k}-${3.6 * k}-${3.6 * k}-${1.4 * k} ${3.6 * k}-${1.4 * k}z" fill="${c}"/>`;
  const lines = (x, y, w, n, gap = 9, col = '#cfc6b4', vary = [1, .86, .94, .7, .9, .8]) => Array.from({ length: n }, (_, i) => `<path d="M${x} ${y + i * gap}h${Math.round(w * vary[i % vary.length])}" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`).join('');

  function reading(s, id, c) {
    const head = wrap(s.title, 20, 2), L = letters(s), pub = publisher(s).toUpperCase().slice(0, 26);
    return `${DEFS(id, c)}
      <ellipse cx="180" cy="104" rx="150" ry="96" fill="url(#${id}-g)"/>
      <ellipse cx="184" cy="196" rx="96" ry="7" fill="#14293a" opacity=".08"/>
      <g transform="rotate(5 196 110)"><rect x="122" y="30" width="150" height="160" rx="7" fill="#f3ecdd" stroke="#e2d6bf"/></g>
      <g class="rl-pg" transform="rotate(-3 180 110)" filter="url(#${id}-sh)">
        <rect x="104" y="20" width="156" height="172" rx="8" fill="url(#${id}-p)"/>
        <rect x="104" y="20" width="156" height="20" rx="8" fill="url(#${id}-c)"/><rect x="104" y="32" width="156" height="8" fill="url(#${id}-c)"/>
        <text x="116" y="34" font-family="Manrope, sans-serif" font-size="7.2" font-weight="800" letter-spacing=".1em" fill="#fff">${esc(pub)}</text>
        <circle cx="248" cy="30" r="3" fill="#fff" opacity=".7"/>
        ${head.map((t, i) => `<text x="116" y="${58 + i * 13}" font-family="Fraunces, Georgia, serif" font-size="11.5" font-weight="600" fill="#14293a">${esc(t)}</text>`).join('')}
        <text x="116" y="${58 + head.length * 13 + 1}" font-family="Manrope, sans-serif" font-size="6.6" font-weight="700" fill="#8b969e">${esc(s.cite || '')}</text>
        <path d="M116 ${64 + head.length * 13}h132" stroke="#ece4d4"/>
        <rect class="rl-hl" x="${L.length ? 129 : 116}" y="${87 + head.length * 13}" width="74" height="8" rx="3" fill="#ffd96a" opacity=".8"/>
        ${lines(L.length ? 130 : 116, 82 + head.length * 13, L.length ? 116 : 130, 6, 10)}
        ${L.map((l, i) => `<circle cx="120" cy="${82 + head.length * 13 + i * 20}" r="5.5" fill="${c}" opacity=".14"/><text x="120" y="${84.4 + head.length * 13 + i * 20}" text-anchor="middle" font-family="Manrope, sans-serif" font-size="6.5" font-weight="800" fill="${c}">${l}</text>`).slice(0, 3).join('')}
      </g>
      <path d="M226 14c0-6 10-6 10 0v24c0 4-6 4-6 0V18" stroke="#9aa6af" stroke-width="2" stroke-linecap="round" transform="rotate(-3 180 110)"/>
      <g class="rl-fl" transform="rotate(-24 276 170)"><rect x="236" y="164" width="78" height="12" rx="6" fill="#ffd24d"/><rect x="236" y="164" width="78" height="4" rx="2" fill="#fff" opacity=".4"/><rect x="290" y="164" width="24" height="12" rx="3" fill="#14293a"/><path d="M314 166.5l9 3.5-9 3.5z" fill="#e3a843"/></g>
      <g class="rl-fl rl-f2"><rect x="46" y="58" width="44" height="40" rx="10" fill="#fff" filter="url(#${id}-sh)"/><text x="68" y="84" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="16" font-weight="600" fill="#14293a">Aa</text><circle cx="83" cy="65" r="3" fill="${c}"/></g>
      ${spark(304, 44, c, 1)}${spark(66, 150, '#e3a843', .8, -1.4)}<circle class="rl-tw" style="animation-delay:-.7s" cx="300" cy="96" r="2.2" fill="#e64626"/>`;
  }
  function listening(s, id, c) {
    const head = wrap(s.title, 22, 2), pub = publisher(s).slice(0, 30);
    const mins = Math.max(1, Math.round(words(s) / 150)), ts = [0, .3, .62].map(f => { const t = Math.round(mins * 60 * f); return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`; });
    return `${DEFS(id, c)}
      <ellipse cx="180" cy="106" rx="150" ry="96" fill="url(#${id}-g)"/>
      <ellipse cx="180" cy="196" rx="96" ry="7" fill="#14293a" opacity=".08"/>
      <path d="M70 150c0-40 22-62 52-66" stroke="#14293a" stroke-width="6" stroke-linecap="round"/><rect x="58" y="140" width="22" height="36" rx="10" fill="url(#${id}-c)"/><rect x="62" y="145" width="6" height="22" rx="3" fill="#fff" opacity=".3"/>
      <path d="M290 150c0-40-22-62-52-66" stroke="#14293a" stroke-width="6" stroke-linecap="round"/><rect x="280" y="140" width="22" height="36" rx="10" fill="url(#${id}-c)"/><rect x="284" y="145" width="6" height="22" rx="3" fill="#fff" opacity=".3"/>
      <g filter="url(#${id}-sh)" class="rl-pg">
        <rect x="96" y="56" width="168" height="134" rx="12" fill="url(#${id}-p)"/>
        <text x="110" y="74" font-family="Manrope, sans-serif" font-size="6.8" font-weight="800" letter-spacing=".1em" fill="${c}">TRANSCRIPT</text>
        <text x="250" y="74" text-anchor="end" font-family="Manrope, sans-serif" font-size="6.4" font-weight="700" fill="#8b969e">${esc(pub)}</text>
        ${head.map((t, i) => `<text x="110" y="${91 + i * 12}" font-family="Fraunces, Georgia, serif" font-size="10.5" font-weight="600" fill="#14293a">${esc(t)}</text>`).join('')}
        ${ts.map((t, i) => { const y = 118 + i * 20 + (head.length - 1) * 4; return `<text x="110" y="${y + 3}" font-family="Manrope, sans-serif" font-size="6.2" font-weight="800" fill="#9aa6af">${t}</text>${lines(138, y, 112, 2, 7, i === 1 ? c : '#d3dbe0', i === 1 ? [.9, .55] : [1, .7])}`; }).join('')}
      </g>
      <g class="rl-fl"><rect x="112" y="18" width="136" height="30" rx="15" fill="#14293a" filter="url(#${id}-sh)"/><circle cx="128" cy="33" r="9" fill="${c}"/><path d="M125.5 29v8l6.5-4z" fill="#fff"/>
        <g class="rl-wv" fill="#fff" opacity=".9">${[10, 16, 8, 14, 18, 9, 13, 7, 15, 11].map((h, i) => `<rect x="${145 + i * 6}" y="${33 - h / 2}" width="3" height="${h}" rx="1.5" style="animation-delay:${-i * .12}s"/>`).join('')}</g>
        <text x="236" y="36" text-anchor="end" font-family="Manrope, sans-serif" font-size="7" font-weight="700" fill="#cfd8df">${mins}:00</text></g>
      <path class="rl-sw" d="M310 150c5 4 5 12 0 16" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/><path class="rl-sw rl-s2" d="M316 144c9 8 9 20 0 28" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
      ${spark(318, 40, '#e3a843', 1)}${spark(44, 70, c, .8, -1.2)}<circle class="rl-tw" style="animation-delay:-.6s" cx="60" cy="112" r="2.2" fill="#e64626"/>`;
  }
  function report(s, id, c) {
    const pub = publisher(s), y = year(s), head = wrap(s.title.replace(/^\d{4}\s*/, ''), 18, 2);
    const bars = [34, 52, 44, 66, 58, 78];
    return `${DEFS(id, c)}
      <ellipse cx="180" cy="104" rx="150" ry="96" fill="url(#${id}-g)"/>
      <ellipse cx="182" cy="196" rx="96" ry="7" fill="#14293a" opacity=".08"/>
      <rect x="132" y="30" width="138" height="164" rx="8" fill="#e6ecf4" transform="rotate(4 200 112)"/>
      <rect x="126" y="26" width="138" height="164" rx="8" fill="#f2f5f9" transform="rotate(2 196 108)"/>
      <g class="rl-pg" filter="url(#${id}-sh)">
        <rect x="112" y="20" width="140" height="170" rx="8" fill="url(#${id}-p)"/>
        <path d="M112 28a8 8 0 0 1 8-8h124a8 8 0 0 1 8 8v52H112z" fill="#14293a"/>
        <path d="M112 72h140v8H112z" fill="url(#${id}-c)"/>
        <text x="124" y="40" font-family="Manrope, sans-serif" font-size="6.4" font-weight="800" letter-spacing=".12em" fill="#9fb8d6">${esc(pub.toUpperCase().slice(0, 30))}</text>
        <text x="124" y="64" font-family="Fraunces, Georgia, serif" font-size="22" font-weight="600" fill="#fff">${esc(y || 'Report')}</text>
        <circle cx="230" cy="52" r="14" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.4"/><path d="M216 52h28M230 38c6 6 6 22 0 28M230 38c-6 6-6 22 0 28" stroke="#fff" stroke-opacity=".4" stroke-width="1"/>
        ${head.map((t, i) => `<text x="124" y="${98 + i * 12}" font-family="Fraunces, Georgia, serif" font-size="10.5" font-weight="600" fill="#14293a">${esc(t)}</text>`).join('')}
        <path d="M124 172h116" stroke="#d9e1ea"/>
        ${bars.map((h, i) => `<rect class="rl-bar" style="animation-delay:${-i * .2}s" x="${128 + i * 18}" y="${172 - h * .62}" width="11" height="${h * .62}" rx="2.5" fill="${i === 5 ? '#e3a843' : c}" opacity="${.45 + i * .1}"/>`).join('')}
      </g>
      <g class="rl-fl"><circle cx="270" cy="138" r="20" fill="#fff" fill-opacity=".55" stroke="#14293a" stroke-width="4" filter="url(#${id}-sh)"/><path d="M262 130a11 11 0 0 1 8-4" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M284 152l14 14" stroke="#14293a" stroke-width="7" stroke-linecap="round"/><path d="M285 153l12 12" stroke="#e3a843" stroke-width="3" stroke-linecap="round"/></g>
      <g class="rl-fl rl-f2"><rect x="50" y="62" width="48" height="30" rx="9" fill="#fff" filter="url(#${id}-sh)"/><text x="74" y="82" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="14" font-weight="600" fill="${c}">AI</text></g>
      <g class="rl-fl rl-f3"><rect x="60" y="130" width="44" height="26" rx="8" fill="#14293a" filter="url(#${id}-sh)"/><text x="82" y="147" text-anchor="middle" font-family="Manrope, sans-serif" font-size="9" font-weight="800" fill="#e3a843">↑ %</text></g>
      ${spark(306, 40, '#e3a843', 1)}<circle class="rl-tw" style="animation-delay:-.6s" cx="44" cy="118" r="2.2" fill="#e64626"/>`;
  }
  let seq = 0;
  function art(s) {
    const k = kindOf(s), [c] = TONE[k], id = 'rl' + (++seq);
    const body = k === 'listening' || k === 'discussion' ? listening(s, id, c) : k === 'report' ? report(s, id, c) : reading(s, id, c);
    return `<svg class="rl-art" viewBox="0 0 360 210" fill="none" aria-hidden="true">${body}</svg>`;
  }
  const ICON = {
    reading: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5c2.6-1 5.3-1 8 1 2.7-2 5.4-2 8-1v13c-2.6-1-5.3-1-8 1-2.7-2-5.4-2-8-1z"/><path d="M12 6.5v13"/></svg>',
    listening: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4.5" height="6.5" rx="2"/><rect x="16.5" y="14" width="4.5" height="6.5" rx="2"/></svg>',
    report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="3.5" width="15" height="17" rx="2"/><path d="M8.5 16v-3M12 16V9.5M15.5 16v-5"/></svg>',
  };
  ICON.discussion = ICON.listening;
  return { art, kindOf, words, TONE, ICON };
})();
