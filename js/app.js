/* DEC15 learning app — renders lesson data (lessons/*.js) into pages.
   Saving: work is written to this device (localStorage) on every change and,
   when the student is signed in, copied to Supabase (js/cloud.js).
   IMPORTANT for updates: keep KEY and field ids stable so saved work survives
   new versions of the app. Never rename an existing id in lessons/*.js. */
(() => {
'use strict';
const lesson = window.DEC15_LESSON, sources = window.DEC15_SOURCES || [], cfg = window.DEC15_CONFIG;
const course = window.DEC15_COURSE, days = window.DEC15_DAYS || [];
const KEY = 'dec15-' + lesson.id + '-v2';
lesson.extras = lesson.extras || []; lesson.glossary = lesson.glossary || [];
/* Colour + illustration for each stage. A lesson can set tone: 'amber' | 'teal' | 'blue' | 'clay' | 'plum' | 'green'
   and art: 'ai' | 'feedback' | 'critical' | 'writing' | 'reading' | 'listening' | 'discussion' | 'research' | 'assessment' | 'group'. */
const TONES = { amber: ['#ad6a12', '#fbf3e4'], teal: ['#2b776e', '#e9f4f2'], blue: ['#3a58a0', '#edf1fa'], clay: ['#b0512a', '#fbefe8'], plum: ['#7a4a8c', '#f6eff8'], green: ['#3f7a3a', '#eef6ea'] };
const LEGACY = { ai: 'amber', feedback: 'teal', critical: 'blue', writing: 'clay' };
lesson.sections.forEach((s, i) => {
  if (!TONES[s.tone]) s.tone = LEGACY[s.id] || Object.keys(TONES)[i % 6];
  s.color = TONES[s.tone][0];
  s.art = s.art || (LEGACY[s.id] ? s.id : 'reading');
});
const tone = s => `--accent:${TONES[s.tone][0]};--accent-bg:${TONES[s.tone][1]}`;
const artSrc = name => `assets/art/stage-${name}.svg`;
/* Addresses inside this lesson: L('ai') → #/w2d5/ai */
const L = p => '#/' + lesson.id + (p && p !== 'overview' ? '/' + p : '');
const coreActivities = lesson.sections.flatMap(s => s.activities);
const allActivities = [...coreActivities, ...lesson.extras];

/* ───────── state ───────── */
let state = { values: {}, done: {}, revealed: {}, checked: {}, rows: {}, active: {}, teacher: cfg.teacherView === true, marks: {}, markDocuments: {} };
let storageOK = true;
try { const old = JSON.parse(localStorage.getItem(KEY)); if (old && old.values) state = { ...state, ...old }; } catch (e) { storageOK = false; }
function save(touch = true) {
  if (touch) state.updatedAt = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(state)); storageOK = true; } catch (e) { storageOK = false; }
  remember();
  paintStatus();
  if (touch && cloud) cloud.queue();
}
let cloud = null, cloudInfo = { status: 'local' };
function paintStatus() {
  const el = $('#save-status'); if (!el) return;
  const map = { local: ['ok', 'Saved on this device'], 'signed-out': ['warn', 'Saved on this device only'], pending: ['busy', 'Saving online…'], syncing: ['busy', 'Saving online…'], saved: ['ok', 'Saved online'], offline: ['warn', 'Offline — saved on this device'], error: ['bad', 'Online save failed — retrying'] };
  const [tone, label] = !storageOK && cloudInfo.status !== 'saved' ? ['bad', 'Not saved — download your notebook'] : map[cloudInfo.status] || map.local;
  el.dataset.tone = tone; el.textContent = label;
  const btn = $('#account-btn'); if (!btn) return;
  btn.hidden = !cloud?.enabled;
  const name = cloudInfo.profile?.full_name || cloudInfo.user?.email || '';
  btn.innerHTML = cloudInfo.user ? `<span class="avatar">${esc((name || '?').trim().slice(0, 1).toUpperCase())}</span><span class="acct-name">${esc(name.split(' ')[0] || 'Account')}</span>` : 'Sign in to save online';
  btn.classList.toggle('signed-in', !!cloudInfo.user);
}

/* A small summary of every lesson's progress, used on the course home page. */
function summaries() { try { return JSON.parse(localStorage.getItem('dec15-summary')) || {}; } catch (e) { return {}; } }
function remember() {
  try {
    const all = summaries();
    all[lesson.id] = { done: coreActivities.filter(a => state.done[a.id]).length, total: coreActivities.length, updatedAt: state.updatedAt || 0 };
    localStorage.setItem('dec15-summary', JSON.stringify(all));
  } catch (e) { /* storage blocked: the home page simply shows no progress */ }
}

/* ───────── helpers ───────── */
const $ = s => document.querySelector(s);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const strip = h => String(h ?? '').replace(/<[^>]+>/g, '');
const val = k => state.values[k] ?? '';
const pad = n => String(n).padStart(2, '0');
function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 3800); }
const reader = window.createDEC15Reader({ getState: () => state, save, esc, lesson, sources, toast });

const ICON = {
  book: '<path d="M3 4c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2zM12 6v15"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  left: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9m-3 3 3 3m-6 0 2 2"/>',
  chat: '<path d="M4 5h11v8H9l-5 4z"/><path d="M18 9h2v10l-4-3h-5v-2"/>',
  phrase: '<path d="M4 6h16M4 12h10M4 18h7"/>',
  model: '<path d="M5 3h10l4 4v14H5z"/><path d="M14 3v5h5M8 13h8M8 17h5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3z"/>',
  teacher: '<path d="M3 5h18v11H3z"/><path d="M8 21l4-5 4 5"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
  alert: '<path d="M12 3 2 20h20z"/><path d="M12 10v4m0 3h.01"/>',
  play: '<path d="M7 4v16l13-8z"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
  open: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
  pen: '<path d="m15 4 5 5L9 20H4v-5z"/><path d="m13 6 5 5"/>',
  home: '<path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10M10 20v-5h4v5"/>',
  map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14m6-12v14"/>',
  flag: '<path d="M5 21V4m0 1h11l-2 4 2 4H5"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  sprout: '<path d="M12 20v-8m0 0c0-4-3-6-7-6 0 4 3 6 7 6zm0-2c0-4 3-6 7-6 0 4-3 6-7 6z"/>'
};
const icon = (n, c = '') => `<svg class="icon ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n] || ICON.book}</svg>`;

/* People icons for interaction patterns */
const WHO = {
  alone: { label: 'Alone', dots: 1 }, pair: { label: 'Pair', dots: 2 },
  group: { label: 'Group', dots: 3 }, class: { label: 'Whole class', dots: 4 }
};
function whoBadge(w) {
  const d = WHO[w] || WHO.alone;
  const people = Array.from({ length: Math.min(d.dots, 3) }, (_, i) => `<circle cx="${6 + i * 6}" cy="7" r="2.4"/><path d="M${2 + i * 6} 17c0-3 2-5 4-5s4 2 4 5"/>`).join('');
  return `<span class="who who-${w}"><svg viewBox="0 0 ${Math.min(d.dots, 3) * 6 + 6} 19" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6">${people}</svg>${d.label}</span>`;
}

/* ───────── label registry (for notebook + export) ───────── */
const labels = {}, owner = {};
const planParts = [
  ['Introduction', [['topic', 'Topic / problem'], ['issue', 'Issue'], ['thesis', 'Thesis statement (my position)'], ['preview1', 'Preview point 1'], ['preview2', 'Preview point 2']]],
  ['Body paragraph 1', [['b1topic', 'Topic sentence (reason 1)'], ['b1ev1', 'Explanation / evidence / examples'], ['b1ev2', 'Explanation / evidence / examples'], ['b1close', 'Concluding statement']]],
  ['Body paragraph 2', [['b2topic', 'Topic sentence (reason 2)'], ['b2ev1', 'Explanation / evidence / examples'], ['b2ev2', 'Explanation / evidence / examples'], ['b2close', 'Concluding statement']]],
  ['Conclusion', [['restate', 'Restatement of thesis'], ['summary', 'Summarise main points'], ['implication', 'Implication / recommendation']]]
];
function register(a) {
  const reg = (k, l) => { labels[k] = l; owner[k] = a.id; };
  for (const b of a.blocks) {
    if (b.type === 'fields') b.fields.forEach(f => reg(f.id, f.label));
    if (b.type === 'quiz') b.items.forEach((q, i) => reg(b.id + '-' + i, strip(q.q)));
    if (b.type === 'choose') reg(b.id, b.title);
    if (b.type === 'checklist') b.items.forEach((c, i) => reg(b.id + '-' + i, c));
    if (b.type === 'plan') planParts.forEach(([p, fs]) => fs.forEach(([k, l]) => reg('plan-' + k, p + ' · ' + l)));
    if (b.type === 'table') { a._tables = a._tables || []; a._tables.push(b); }
    if (b.type === 'order') reg(b.id, b.title || 'Put in order');
    if (b.type === 'grid') b.rows.forEach((r, ri) => b.columns.forEach((c, ci) => reg(`${b.id}-${ri}-${ci}`, `${strip(r)} · ${strip(c)}`)));
  }
}
allActivities.forEach(register);
function tableRows(b) { return b.fixed ? b.fixed.length + (state.rows[b.id] || 0) : (b.rows || 3) + (state.rows[b.id] || 0); }
function tableLabel(b, r, c) { return `${b.title || 'Table'} · ${b.fixed?.[r] ? strip(b.fixed[r]) : 'Row ' + (r + 1)} · ${b.columns[c]}`; }

/* ───────── blocks ───────── */
const B = {};
B.key = b => `<aside class="block key${b.tone === 'warn' ? ' key-warn' : ''}" data-help>
  <div class="block-label">${icon(b.tone === 'warn' ? 'alert' : 'key')}${b.tone === 'warn' ? 'Remember' : 'Key point'}</div>
  <h3>${b.title}</h3>
  ${b.compare ? `<div class="compare">${b.compare.map(c => `<div><span class="compare-label">${c.label}</span><p>${c.text}</p>${c.eg ? `<p class="compare-eg">e.g. ${c.eg}</p>` : ''}</div>`).join('')}</div>` : ''}
  ${b.points ? `<${b.numbered ? 'ol' : 'ul'} class="key-points">${b.points.map(p => `<li>${p}</li>`).join('')}</${b.numbered ? 'ol' : 'ul'}>` : ''}
  ${b.policy ? `<p class="key-source">Source: <a href="${esc(cfg.policyUrl)}" target="_blank" rel="noopener">University of Sydney — responsible AI use ${icon('open')}</a></p>` : ''}
</aside>`;
B.steps = b => `<section class="block steps-block" data-help>
  <h3 class="block-heading">${icon('list')}${b.title || 'What to do'}</h3>
  <ol class="steps">${b.items.map(s => `<li><span class="step-who">${whoBadge(s.who)}</span><p>${s.text}</p></li>`).join('')}</ol>
</section>`;
B.talk = b => `<section class="block talk" data-help>
  <div class="block-label">${icon('chat')}Speak</div>
  <h3>${b.title || 'Talk together'}</h3>
  <ul class="talk-prompts">${b.prompts.map(p => `<li>${p}</li>`).join('')}</ul>
</section>`;
B.language = b => `<section class="block language">
  <div class="block-label">${icon('phrase')}Language bank</div>
  ${b.title ? `<h3>${b.title}</h3>` : ''}
  <div class="lang-grid">${b.groups.map(g => `<div class="lang-group"><h4>${g.label}</h4><ul>${g.phrases.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>`).join('')}</div>
</section>`;
B.model = b => `<section class="block model" data-help>
  <div class="block-label">${icon('model')}Model</div>
  <h3>${b.title || 'Example'}</h3>
  ${b.before ? `<p class="model-before"><span>${b.rows ? 'Claim' : 'Weak'}</span>${b.before}</p>` : ''}
  ${b.text ? `<p class="model-text">${b.before && !b.rows ? '<span>Stronger</span>' : ''}${b.text}</p>` : ''}
  ${b.rows ? `<dl class="model-rows">${b.rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>` : ''}
  ${b.list ? `<ol class="model-list">${b.list.map(x => `<li>${x}</li>`).join('')}</ol>` : ''}
  ${b.note ? `<p class="model-note">${b.note}</p>` : ''}
</section>`;
B.cards = b => `<section class="block cards-block" data-help>
  ${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
  <div class="cards${b.items.length === 4 ? ' cards-4' : ''}">${b.items.map((c, i) => `<div class="card">${b.numbered ? `<span class="card-num">${i + 1}</span>` : ''}${c.label ? `<span class="card-label">${c.label}</span>` : ''}<p>${c.text}</p></div>`).join('')}</div>
</section>`;
B.tip = b => `<p class="block tip" data-help>${icon('bulb')}<span>${b.text}</span></p>`;
B.teacher = b => state.teacher ? `<aside class="block teacher"><div class="block-label">${icon('teacher')}Teacher note</div><p>${b.text}</p></aside>` : '';
B.sources = b => `<div class="block source-buttons">${b.ids.map(id => { const s = sources.find(x => x.id === id); return `<button class="source-btn" data-source="${id}">${icon('book')}<span><b>${esc(s.cite)}</b><small>${esc(s.title)}</small></span></button>`; }).join('')}</div>`;
B.question = (b, a) => `<section class="block essay-q">
  <span class="essay-q-label">${esc(b.label || (lesson.questionKind ? lesson.questionKind : 'The essay question'))}${lesson.wordTarget ? ' · ' + esc(lesson.wordTarget) : ''}</span>
  <blockquote>${reader.text('q-' + a.id, b.text || lesson.question, 'Essay question')}</blockquote>
  ${reader.toolbar('activity')}
</section>`;
B.passage = b => `<section class="block passage">
  <h3 class="block-heading">${b.title}</h3>
  ${reader.toolbar('activity')}
  <blockquote class="passage-text" data-help>${reader.text('c-' + b.id, b.text, b.title)}</blockquote>
</section>`;
B.fields = b => `<section class="block fields">${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}${b.fields.map(f => `<div class="field"><label for="f-${f.id}">${esc(f.label)}</label><textarea id="f-${f.id}" data-save="${f.id}" rows="${f.rows || 3}" placeholder="${esc(f.placeholder || '')}">${esc(val(f.id))}</textarea></div>`).join('')}</section>`;
B.quiz = b => {
  const checked = state.checked[b.id];
  return `<section class="block quiz" id="quiz-${b.id}">
  ${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
  <ol class="quiz-items">${b.items.map((q, i) => {
    const opts = q.options || b.shared, chosen = val(b.id + '-' + i), ok = chosen === q.answer, long = opts.some(o => o.length > 60);
    const compact = !long && opts.every(o => o.length <= 14) && opts.length <= 3;
    return `<li class="quiz-item${compact ? ' compact' : ''}${checked ? (ok ? ' is-right' : ' is-wrong') : ''}">
      <p class="quiz-q" data-help>${q.q}</p>
      <div class="options${long ? ' options-long' : ''}" role="radiogroup" aria-label="${esc(strip(q.q))}">${opts.map(o => `<button type="button" role="radio" class="option${chosen === o ? ' selected' : ''}${checked && o === q.answer ? ' correct' : ''}" aria-checked="${chosen === o}" data-quiz="${b.id}" data-i="${i}" data-opt="${esc(o)}">${esc(o)}</button>`).join('')}</div>
      ${checked ? `<p class="quiz-why">${ok ? icon('check') + '<b>Correct.</b> ' : `<b>Answer: ${esc(q.answer)}.</b> `}${esc(q.why || '')}</p>` : ''}
    </li>`; }).join('')}</ol>
  <div class="quiz-bar">${checked ? `<span class="quiz-score">${b.items.filter((q, i) => val(b.id + '-' + i) === q.answer).length} / ${b.items.length} correct</span><button class="btn-quiet" data-quiz-reset="${b.id}">Try again</button>` : `<button class="btn" data-quiz-check="${b.id}">Check my answers ${icon('arrow')}</button>`}</div>
</section>`;
};
B.choose = b => `<section class="block choose">
  <h3 class="block-heading">${b.title}</h3>
  <div class="choose-options" role="radiogroup" aria-label="${esc(b.title)}">${b.options.map((o, i) => `<button type="button" role="radio" class="choose-option${val(b.id) === o ? ' selected' : ''}" aria-checked="${val(b.id) === o}" data-choose="${b.id}" data-opt="${esc(o)}"><span class="choose-letter">${'ABC'[i]}</span>${esc(o)}</button>`).join('')}</div>
</section>`;
B.table = b => {
  const n = tableRows(b);
  let rows = '';
  for (let r = 0; r < n; r++) {
    rows += '<tr>' + b.columns.map((c, ci) => {
      if (ci === 0 && b.fixed?.[r]) return `<th scope="row">${b.fixed[r]}</th>`;
      const k = `${b.id}-${r}-${ci}`; labels[k] = tableLabel(b, r, ci);
      return `<td><textarea data-save="${k}" aria-label="${esc(labels[k])}" rows="3">${esc(val(k))}</textarea></td>`;
    }).join('') + '</tr>';
  }
  return `<section class="block table-block">${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
  <div class="table-scroll" tabindex="0" role="region" aria-label="${esc(b.title || 'Table')}"><table class="work-table cols-${b.columns.length}"><thead><tr>${b.columns.map(c => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>
  ${b.extraRows || !b.fixed ? `<button class="btn-quiet" data-add-row="${b.id}">+ Add a row</button>` : ''}</section>`;
};
B.plan = () => `<section class="block plan">
  <h3 class="block-heading">Essay outline</h3>
  <div class="plan-question"><b>Question:</b> ${esc(lesson.question)}</div>
  ${planParts.map(([p, fs], i) => `<div class="plan-part plan-${i}"><h4><span>${pad(i + 1)}</span>${p}</h4>${fs.map(([k, l]) => `<div class="field"><label for="f-plan-${k}">${l}</label><textarea id="f-plan-${k}" data-save="plan-${k}" rows="2" placeholder="Notes, not full sentences">${esc(val('plan-' + k))}</textarea></div>`).join('')}</div>`).join('')}
</section>`;
B.checklist = b => `<section class="block checklist"><h3 class="block-heading">${b.title}</h3>${b.items.map((c, i) => `<label class="check"><input type="checkbox" data-save="${b.id}-${i}"${val(b.id + '-' + i) ? ' checked' : ''}><span>${esc(c)}</span></label>`).join('')}</section>`;
/* order: put items in the right order (ranking, sequencing). items are listed in the CORRECT order;
   students see them mixed. { type: 'order', id, title, items: [..], ends?: ['Best', 'Worst'], why? } */
const gcd = (a, b) => b ? gcd(b, a % b) : a;
function orderOf(b) {
  const n = b.items.length, v = val(b.id);
  if (v) { const o = v.split(',').map(Number); if (o.length === n && new Set(o).size === n && o.every(x => x >= 0 && x < n)) return o; }
  if (b.start) return b.start.slice();
  let k = 2; while (n > 2 && gcd(k, n) !== 1) k++;
  return Array.from({ length: n }, (_, i) => n < 3 ? n - 1 - i : (i * k + 1) % n);   // a fixed mix, never the answer
}
B.order = b => {
  const o = orderOf(b), checked = state.checked[b.id], right = o.filter((x, i) => x === i).length;
  return `<section class="block order" id="order-${b.id}">
  ${b.title ? `<h3 class="block-heading">${icon('list')}${b.title}</h3>` : ''}
  ${b.ends ? `<p class="order-end order-top">${icon('arrow')}${esc(b.ends[0])}</p>` : ''}
  <ol class="order-list">${o.map((x, i) => `<li class="order-item${checked ? (x === i ? ' is-right' : ' is-wrong') : ''}"><span class="order-pos">${i + 1}</span><span class="order-text">${b.items[x]}</span>
    <span class="order-move"><button type="button" data-order="${b.id}" data-from="${i}" data-dir="-1" aria-label="Move up"${i ? '' : ' disabled'}>${icon('arrow')}</button><button type="button" data-order="${b.id}" data-from="${i}" data-dir="1" aria-label="Move down"${i < o.length - 1 ? '' : ' disabled'}>${icon('arrow')}</button></span>
    ${checked && x !== i ? `<span class="order-should">Should be ${x + 1}</span>` : ''}</li>`).join('')}</ol>
  ${b.ends ? `<p class="order-end order-bottom">${icon('arrow')}${esc(b.ends[1])}</p>` : ''}
  <div class="quiz-bar">${checked ? `<span class="quiz-score">${right} / ${o.length} in the right place</span><button class="btn-quiet" data-order-reset="${b.id}">Try again</button>` : `<button class="btn" data-order-check="${b.id}">Check my order ${icon('arrow')}</button>`}</div>
  ${checked && b.why ? `<p class="quiz-why">${b.why}</p>` : ''}
</section>`;
};
/* grid: a table of choices, e.g. Does the text agree? { type: 'grid', id, title, rows: [..], columns: [..], options: [..], answers?: [[row1 answers], ...], given?: { 'r-c': value } } */
B.grid = b => {
  const checked = state.checked[b.id];
  const cell = (r, c) => { const k = `${b.id}-${r}-${c}`, given = b.given?.[`${r}-${c}`], ans = b.answers?.[r]?.[c], v = given ?? val(k);
    if (given) return `<td class="grid-given">${esc(given)}</td>`;
    const ok = checked && ans !== undefined ? (v === ans ? ' is-right' : ' is-wrong') : '';
    return `<td class="grid-cell${ok}"><select data-save="${k}" aria-label="${esc(strip(b.rows[r]) + ' — ' + strip(b.columns[c]))}"><option value="">Choose…</option>${b.options.map(o => `<option${v === o ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>${ok === ' is-wrong' ? `<small>${esc(ans)}</small>` : ''}</td>`; };
  const score = checked && b.answers ? b.rows.reduce((n, _, r) => n + b.columns.filter((_, c) => !b.given?.[`${r}-${c}`] && val(`${b.id}-${r}-${c}`) === b.answers[r][c]).length, 0) : 0;
  const total = b.rows.length * b.columns.length - Object.keys(b.given || {}).length;
  return `<section class="block grid-block">${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
  <div class="table-scroll" tabindex="0" role="region" aria-label="${esc(b.title || 'Table')}"><table class="work-table grid-table"><thead><tr><th scope="col"></th>${b.columns.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead>
  <tbody>${b.rows.map((r, ri) => `<tr><th scope="row">${r}</th>${b.columns.map((_, ci) => cell(ri, ci)).join('')}</tr>`).join('')}</tbody></table></div>
  ${b.answers ? `<div class="quiz-bar">${checked ? `<span class="quiz-score">${score} / ${total} correct</span><button class="btn-quiet" data-grid-reset="${b.id}">Try again</button>` : `<button class="btn" data-grid-check="${b.id}">Check my answers ${icon('arrow')}</button>`}</div>` : ''}
</section>`;
};
/* figure: a picture or diagram. { type: 'figure', src, alt, caption?, credit?, size?: 'small' | 'wide' } */
B.figure = b => `<figure class="block figure${b.size ? ' figure-' + b.size : ''}"><img src="${esc(b.src)}" alt="${esc(b.alt || '')}" loading="lazy">${b.caption || b.credit ? `<figcaption>${b.caption ? `<b>${b.caption}</b>` : ''}${b.credit ? ` <span>${esc(b.credit)}</span>` : ''}</figcaption>` : ''}</figure>`;

/* listening: by default the Week 2 video. A new lesson can set
   { type: 'listening', source, title, videoId, start, clip, transcripts: [[sourceId, label], ...], audio } */
B.listening = b => {
  const vid = b.videoId ?? cfg.supplementalVideoId, title = b.title || 'Food waste causes climate change';
  const tr = b.transcripts || [['listening', 'Course transcript (adapted)'], ['video-script', 'Original video script']];
  const audio = b.audio ?? cfg.coreAudioUrl;
  return `<section class="block media">
  <div class="block-label">${icon('play')}Listening · ${esc(b.source || 'Our Changing Climate (2020)')}</div>
  ${vid ? `<div class="video-wrap"><button class="video-cover" data-video="${esc(vid)}" data-start="${b.start ?? 9}" data-title="${esc(title)}" aria-label="Play the video">${icon('play', 'play-big')}<span><b>${esc(title)}</b><small>YouTube · ${esc(b.clip || 'play 0:09–9:05')} · internet needed</small></span></button></div>` : ''}
  <div class="media-links">${tr.filter(([id]) => sources.some(x => x.id === id)).map(([id, l]) => `<button class="btn-quiet" data-source="${id}">${icon('book')}${esc(l)}</button>`).join('')}${b.mode === 'video' || !vid ? '' : `<a class="btn-quiet" href="https://www.youtube.com/watch?v=${esc(vid)}" target="_blank" rel="noopener">${icon('open')}Open on YouTube</a>`}</div>
  ${audio ? `<audio controls preload="none" src="${esc(audio)}"></audio>` : ''}
  <p class="media-note">Listen first, take notes, <b>then</b> read the transcript to check.</p>
</section>`;
};

/* ───────── activity ───────── */
function hasAttempt(a) { registerTables(); return Object.keys(state.values).some(k => owner[k] === a.id && state.values[k]); }
function answersPanel(a) {
  if (!a.answers) return '';
  const open = state.teacher || state.revealed[a.id];
  return `<section class="answers${open ? ' open' : ''}" id="ans-${a.id}">
    <div class="answers-head"><div class="block-label">${icon('check')}${esc(a.answers.title || 'Suggested answers')}</div>
    ${open ? (state.teacher ? '<span class="answers-hint">Shown in Teacher view</span>' : `<button class="btn-quiet" data-hide-answers="${a.id}">Hide</button>`) : `<button class="btn" data-reveal="${a.id}">Show suggested answers</button>`}</div>
    ${open ? `<dl data-help>${a.answers.items.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl><p class="answers-hint">Other answers can be correct. Compare the reasons, then improve your own work.</p>` : '<p class="answers-hint">Try the activity first. Then compare your work with the suggested answers.</p>'}
  </section>`;
}
function groupIcon(g) {
  const t = String(g).toLowerCase(), last = t.split('→').pop();
  const w = /class/.test(last) ? 'class' : /group|research|discussion/.test(last) ? 'group' : /pair/.test(last) ? 'pair' : 'alone';
  const n = { alone: 1, pair: 2, group: 3, class: 3 }[w];
  return `<svg class="ppl" viewBox="0 0 ${n * 6 + 6} 19" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6">${Array.from({ length: n }, (_, k) => `<circle cx="${6 + k * 6}" cy="7" r="2.4"/><path d="M${2 + k * 6} 17c0-3 2-5 4-5s4 2 4 5"/>`).join('')}</svg>`;
}
function activity(a, i, list, section) {
  return `<article class="activity" id="${a.id}" tabindex="-1" aria-labelledby="h-${a.id}">
    <header class="act-head">
      <div class="act-meta"><span class="act-count">Activity ${i + 1}<span> / ${list.length}</span></span><span class="chip chip-soft">${groupIcon(a.grouping)}${esc(a.grouping)}</span>${a.category ? `<span class="chip chip-soft">${esc(a.category)}</span>` : ''}<button class="timer-btn" data-timer="${a.minutes}" aria-label="Start a ${a.minutes}-minute timer">${icon('clock')}<span>${a.minutes} min</span><small>Start timer</small></button></div>
      <h2 id="h-${a.id}">${esc(a.title)}</h2>
      <p class="act-goal">${icon('target')}<span><b>Goal:</b> ${esc(a.goal)}</span></p>
    </header>
    <div class="act-body">${a.blocks.map(b => (B[b.type] || (() => ''))(b, a)).join('')}</div>
    ${answersPanel(a)}
    <footer class="act-foot">
      <label class="done-toggle"><input type="checkbox" data-done="${a.id}"${state.done[a.id] ? ' checked' : ''}><span>I have finished this activity</span></label>
      ${section ? `<div class="pager">${i ? `<button class="btn-quiet" data-jump="${list[i - 1].id}">${icon('left')}Previous</button>` : ''}${i < list.length - 1 ? `<button class="btn" data-jump="${list[i + 1].id}">Next: ${esc(list[i + 1].short)} ${icon('arrow')}</button>` : nextStageLink(section)}</div>` : ''}
    </footer>
  </article>`;
}
/* The next lesson in the course, if it is ready. */
function nextLesson() { const i = days.findIndex(d => d.id === lesson.id), nx = days[i + 1]; return nx && nx.status === 'ready' ? nx : null; }
function nextStageLink(section) {
  const n = lesson.sections.indexOf(section), next = lesson.sections[n + 1];
  if (next) return `<a class="btn" href="${L(next.id)}">Next stage: ${esc(next.title)} ${icon('arrow')}</a>`;
  const nx = nextLesson();
  return nx ? `<a class="btn-quiet" href="${L('notebook')}">Review my notebook</a><a class="btn" href="#/${nx.id}">Next lesson: Week ${nx.week}, Day ${nx.day} ${icon('arrow')}</a>` : `<a class="btn" href="${L('notebook')}">Review my notebook ${icon('arrow')}</a>`;
}

/* ───────── pages ───────── */
function stagePage(s) {
  const activeId = state.active[s.id] && s.activities.some(a => a.id === state.active[s.id]) ? state.active[s.id] : s.activities[0].id;
  const idx = s.activities.findIndex(a => a.id === activeId);
  const doneCount = s.activities.filter(a => state.done[a.id]).length;
  const complete = doneCount === s.activities.length;
  return `<header class="stage-head${complete ? ' is-complete' : ''}">
      <span class="stage-numeral" aria-hidden="true">${s.number}</span>
      <div class="stage-copy">
        <span class="eyebrow">Stage ${Number(s.number)} of ${lesson.sections.length}<span class="sep"></span>${esc(s.subtitle)}</span>
        <h1>${esc(s.title)}</h1>
        <p class="stage-outcome" data-help>${esc(s.outcome)}</p>
        <div class="stage-meta">
          <span class="chip">${icon('clock')}${s.minutes} min</span>
          <span class="chip">${icon('list')}${s.activities.length} activities</span>
          <span class="chip chip-quiet">Teacher’s Book ${s.code}</span>
          ${complete ? `<span class="chip chip-done">${icon('check')}Stage complete</span>` : ''}
        </div>
      </div>
      <div class="stage-art-wrap"><img class="stage-art" src="${artSrc(s.art)}" alt="" width="220" height="170">${complete ? '<img class="stage-medal" src="assets/art/complete.svg" alt="" width="60" height="70">' : ''}</div>
    </header>
    <nav class="act-tabs" aria-label="Activities in this stage" style="--done:${doneCount / s.activities.length};--n:${s.activities.length}">${s.activities.map((a, i) => `<button data-jump="${a.id}" class="${a.id === activeId ? 'current' : ''}${state.done[a.id] ? ' is-done' : ''}" aria-current="${a.id === activeId ? 'step' : 'false'}"><span class="tab-num">${state.done[a.id] ? icon('check') : i + 1}</span><span class="tab-text">${esc(a.short)}<small>${a.minutes} min</small></span></button>`).join('')}</nav>
    ${activity(s.activities[idx], idx, s.activities, s)}`;
}
/* The first activity not yet finished (for "Continue" buttons). */
function nextUp() {
  for (const s of lesson.sections) for (const a of s.activities) if (!state.done[a.id]) return { s, a };
  return null;
}
function continueButton(big) {
  const n = nextUp(), started = coreActivities.some(a => state.done[a.id]) || Object.keys(state.values).length;
  if (!n) return `<a class="btn${big ? ' btn-big' : ''}" href="${L('notebook')}">${icon('check')}Review my notebook</a>`;
  const label = started ? `Continue: ${esc(n.a.short)}` : `Start Stage ${Number(n.s.number)}`;
  return `<a class="btn${big ? ' btn-big' : ''}" href="${L(n.s.id)}" data-go="${n.a.id}">${label} ${icon('arrow')}</a>`;
}
function overview() {
  const n = nextUp(), done = coreActivities.filter(a => state.done[a.id]).length;
  return `<section class="hero">
    <div class="hero-copy">
      <span class="eyebrow">Week ${lesson.week} · Day ${lesson.day} · ${esc(lesson.duration || 'About 4 hours')}</span>
      <h1>${esc(lesson.title)}</h1>
      <p class="hero-lead">${esc(lesson.journey)}</p>
      <div class="hero-actions">${continueButton(true)}${done && n ? `<span class="hero-progress"><b>${done} of ${coreActivities.length}</b> activities finished · next in Stage ${Number(n.s.number)}</span>` : ''}</div>
    </div>
    <figure class="hero-img"><img src="${esc(lesson.image || 'assets/food-editorial.webp')}" width="1400" height="933" alt="${esc(lesson.imageAlt || 'An imperfect tomato, a carrot, a cut orange and grains on a plate — edible food that is often thrown away.')}"></figure>
  </section>
  <section class="essay-q essay-q-hero">
    <span class="essay-q-label">${esc(lesson.questionLabel || 'This week’s essay question · you write it on Monday')}</span>
    <blockquote>${esc(lesson.question)}</blockquote>
  </section>
  <h2 class="section-title">Your day at a glance</h2>
  <p class="section-sub">${['Two', 'Three', 'Four', 'Five', 'Six'][lesson.sections.length - 2] || lesson.sections.length} stages${lesson.duration ? '' : ', about four hours'}. Each one prepares you for ${esc(lesson.goalShort || 'Monday’s essay')}.</p>
  <div class="dayline" role="img" aria-label="${lesson.sections.map(s => `Stage ${Number(s.number)}, ${s.title}, ${s.minutes} minutes`).join('; ')}; then: ${esc(lesson.finish?.title || 'Monday')}.">
    ${lesson.sections.map(s => { const d = s.activities.filter(a => state.done[a.id]).length; return `<a class="dayline-seg${d === s.activities.length ? ' complete' : ''}" style="${tone(s)};flex:${s.minutes}" href="${L(s.id)}"><span class="dayline-bar"><i style="width:${Math.round(100 * d / s.activities.length)}%"></i></span><span class="dayline-num">${s.number}</span><span class="dayline-title">${esc(s.title)}</span><span class="dayline-min">${s.minutes} min</span></a>`; }).join('')}
    ${(() => { const nx = nextLesson(), inner = `<span class="dayline-bar"></span><span class="dayline-num">${icon(nx ? 'arrow' : 'pen')}</span><span class="dayline-title">${esc(lesson.finish?.title || 'Monday')}</span><span class="dayline-min">${esc(lesson.finish?.text || 'Write the essay')}</span>`;
      return nx ? `<a class="dayline-flag" href="#/${nx.id}" title="Open Week ${nx.week}, Day ${nx.day}">${inner}</a>` : `<div class="dayline-flag">${inner}</div>`; })()}
  </div>
  <ol class="journey">${lesson.sections.map(s => { const d = s.activities.filter(a => state.done[a.id]).length; return `<li><a class="journey-card${d === s.activities.length ? ' complete' : ''}" style="${tone(s)}" href="${L(s.id)}">
      <span class="journey-art-wrap"><img class="journey-art" src="${artSrc(s.art)}" alt="" width="220" height="170" loading="lazy"></span>
      <span class="journey-body">
        <span class="journey-top"><span class="journey-num">${s.number}</span><span class="journey-sub">${esc(s.subtitle || '')}</span></span>
        <b class="journey-title">${esc(s.title)}</b>
        <span class="journey-text">${esc(s.outcome)}</span>
        <span class="journey-foot"><span class="journey-time">${icon('clock')}${s.minutes} min · ${s.activities.length} activities</span>${d === s.activities.length ? `<span class="journey-done">${icon('check')}Complete</span>` : d ? `<span class="journey-part">${d}/${s.activities.length} done</span>` : ''}<span class="journey-go">${icon('arrow')}</span></span>
        <span class="journey-meter" aria-hidden="true"><i style="width:${Math.round(100 * d / s.activities.length)}%"></i></span>
      </span></a></li>`; }).join('')}</ol>
  <details class="legend-wrap"${done ? '' : ' open'}>
    <summary><span><b>How to read each page</b><small>Each kind of information always looks the same. The dark box is the most important.</small></span>${icon('arrow')}</summary>
    <div class="legend">
      <div class="legend-item"><span class="sw sw-key">${icon('key')}</span><b>Key point</b><span>The idea to learn and remember.</span></div>
      <div class="legend-item"><span class="sw sw-steps">${icon('list')}</span><b>What to do</b><span>Steps. The badge shows alone / pair / group.</span></div>
      <div class="legend-item"><span class="sw sw-talk">${icon('chat')}</span><b>Speak</b><span>Questions to discuss out loud.</span></div>
      <div class="legend-item"><span class="sw sw-lang">${icon('phrase')}</span><b>Language bank</b><span>Phrases to use when you speak or write.</span></div>
      <div class="legend-item"><span class="sw sw-model">${icon('model')}</span><b>Model</b><span>An example to study and copy the structure of.</span></div>
      <div class="legend-item"><span class="sw sw-ans">${icon('check')}</span><b>Suggested answers</b><span>Open them after you try.</span></div>
    </div>
  </details>`;
}

/* ───────── course home: all weeks ───────── */
function courseMap(current) {
  const pts = [[120, 168], [320, 116], [530, 136], [740, 96], [900, 76]];
  const road = 'M-10 190C60 186 80 168 120 168S250 116 320 116 470 138 530 136 670 96 740 96 850 78 900 76';
  const tree = (x, y, k = 1) => `<g transform="translate(${x} ${y}) scale(${k})"><rect x="-1.6" y="-4" width="3.2" height="12" rx="1" fill="#8a6f4e"/><circle cy="-12" r="10" fill="#8fb47a"/><circle cx="5" cy="-8" r="7" fill="#6f9d5c"/></g>`;
  return `<svg class="course-map-svg" viewBox="0 0 1000 262" role="img" aria-label="Course map: ${course.map.map(w => `Week ${w.n}, ${w.label}`).join('; ')}. You are in Week ${current}.">
    <defs><linearGradient id="cm-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf6ea"/><stop offset="1" stop-color="#f3ecdc"/></linearGradient></defs>
    <rect width="1000" height="290" fill="url(#cm-sky)"/>
    <circle cx="620" cy="52" r="26" fill="#f6dfae"/><circle cx="620" cy="52" r="40" fill="#f6dfae" opacity=".35"/>
    <path d="M120 52q6-6 12 0q6-6 12 0M168 74q4-4 8 0q4-4 8 0M560 40q5-5 10 0q5-5 10 0" stroke="#7d8b95" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M0 150C120 108 230 130 340 116S560 72 700 92 880 52 1000 66V290H0Z" fill="#ece3cf"/>
    <path d="M0 200C150 176 300 208 470 188S760 158 1000 172V290H0Z" fill="#e2ebd8"/>
    <path d="M40 262c90-10 190-6 300-14m140 22c120-12 260-18 420-30M600 252c90-6 180-14 300-18" stroke="#cfdcc2" stroke-width="2" fill="none" stroke-linecap="round"/>
    ${tree(200, 132)}${tree(220, 138, .8)}${tree(420, 120, .9)}${tree(640, 100)}${tree(662, 106, .75)}${tree(964, 214, .9)}${tree(40, 160, .8)}${tree(984, 220, .7)}
    <path d="${road}" stroke="#fffdf5" stroke-width="16" fill="none" stroke-linecap="round"/>
    <path d="${road}" stroke="#14293a" stroke-opacity=".35" stroke-width="2.4" stroke-dasharray="2 9" fill="none" stroke-linecap="round"/>
    ${course.map.map((w, i) => { const [x, y] = pts[i] || pts[pts.length - 1], st = w.n < current ? 'past' : w.n === current ? 'now' : 'next', last = i === course.map.length - 1;
      return `<g class="cm-stop cm-${st}" transform="translate(${x} ${y})">
        ${st === 'now' ? `<circle r="30" fill="#e3a843" opacity=".22"/><g transform="translate(0 -52)"><rect x="-50" y="-15" width="100" height="26" rx="13" fill="#14293a"/><path d="M-6 11h12l-6 8z" fill="#14293a"/><text y="3" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" font-family="Manrope, sans-serif">You are here</text></g>` : ''}
        ${last ? '<path d="M0 -20V-62" stroke="#14293a" stroke-width="3" stroke-linecap="round"/><path d="M0 -62h30l-7 9 7 9H0z" fill="#e64626"/>' : ''}
        <circle r="19" fill="${st === 'past' ? '#14293a' : st === 'now' ? '#e3a843' : '#fffdf5'}" stroke="${st === 'next' ? '#c9bfae' : '#fffdf5'}" stroke-width="3"/>
        ${st === 'past' ? '<path d="m-7 0 5 5 9-10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' : `<text y="5" text-anchor="middle" font-size="15" font-weight="700" font-family="Manrope, sans-serif" fill="${st === 'now' ? '#14293a' : '#8b969e'}">${w.n}</text>`}
        <text y="42" text-anchor="middle" font-size="13" font-weight="700" font-family="Manrope, sans-serif" fill="#14293a">Week ${w.n} · ${esc(w.label)}</text>
        <text y="60" text-anchor="middle" font-size="12" font-family="Manrope, sans-serif" fill="#6b7882">${esc(w.sub)}</text>
      </g>`; }).join('')}
  </svg>`;
}
function dayCard(d) {
  const sum = summaries()[d.id] || {}, here = d.id === lesson.id;
  const done = here ? coreActivities.filter(a => state.done[a.id]).length : sum.done || 0, total = here ? coreActivities.length : sum.total || 0;
  if (d.status !== 'ready') return `<li class="day-card is-soon">
      <span class="day-art day-art-soon"><img src="assets/art/soon.svg" alt="" width="120" height="100" loading="lazy"></span>
      <span class="day-label">Day ${d.day}<span class="day-soon">${icon('sprout')}Coming soon</span></span>
      <b class="day-title">${esc(d.title)}</b>
      ${d.parts ? `<ul class="day-parts">${d.parts.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
    </li>`;
  const pct = total ? Math.round(100 * done / total) : 0;
  return `<li class="day-card is-ready${pct === 100 ? ' complete' : ''}"><a href="#/${d.id}">
      <span class="day-art"><img src="${artSrc(d.art || 'writing')}" alt="" width="220" height="170" loading="lazy"></span>
      <span class="day-label">Day ${d.day}${pct === 100 ? `<span class="day-done">${icon('check')}Complete</span>` : done ? `<span class="day-now">In progress</span>` : '<span class="day-open">Open</span>'}</span>
      <b class="day-title">${esc(d.title)}</b>
      ${d.parts ? `<ul class="day-parts">${d.parts.map(p => `<li>${esc(p)}</li>`).join('')}</ul>` : ''}
      <span class="day-meter" aria-label="${done} of ${total} activities finished"><i style="width:${pct}%"></i></span>
      <span class="day-foot"><span>${total ? `${done} / ${total} activities` : 'Not started'}</span><span class="day-go">${done && pct < 100 ? 'Continue' : pct === 100 ? 'Review' : 'Start'} ${icon('arrow')}</span></span>
    </a></li>`;
}
function courseHome() {
  const n = nextUp(), done = coreActivities.filter(a => state.done[a.id]).length, pct = Math.round(100 * done / coreActivities.length);
  return `<header class="home-head">
      <span class="eyebrow">${esc(course.code)} · ${esc(course.topic)}</span>
      <h1>Your course map</h1>
      <p>Five weeks, one big question: how can the world feed everyone? Pick up where you left off, or open any lesson below.</p>
    </header>
    <section class="course-map" aria-label="Course map">${courseMap(lesson.week)}</section>
    <section class="resume" style="${tone(n ? n.s : lesson.sections[lesson.sections.length - 1])}">
      <img class="resume-art" src="${artSrc(n ? n.s.art : 'writing')}" alt="" width="220" height="170">
      <div class="resume-copy">
        <span class="eyebrow">${done ? 'Continue where you left off' : 'Start here'} · Week ${lesson.week}, Day ${lesson.day}</span>
        <h2>${esc(lesson.title)}</h2>
        <p>${n ? `Next: <b>Stage ${Number(n.s.number)} · ${esc(n.s.title)}</b> — ${esc(n.a.title)}` : 'You finished every activity. Review your notebook before you write.'}</p>
        <div class="resume-bar"><span class="resume-meter"><i style="width:${pct}%"></i></span><span>${done} of ${coreActivities.length} activities</span></div>
      </div>
      <div class="resume-actions">${continueButton(true)}<a class="btn-quiet" href="${L('overview')}">Lesson overview</a></div>
    </section>
    ${course.weeks.map(w => `<section class="week" id="week-${w.n}">
      <header class="week-head"><span class="week-num"><small>Week</small>${w.n}</span><div><h2>${esc(w.theme)}</h2><p>${esc(w.summary || '')}</p></div></header>
      <ol class="day-grid${w.days.length > 3 ? ' many' : ''}">${w.days.map(dayCard).join('')}</ol>
    </section>`).join('')}`;
}
function sourcesPage() {
  return `<header class="page-head"><span class="eyebrow">Course texts</span><h1>Source library</h1><p>The protected course texts for this week. Open a text to read, highlight and underline.</p></header>
  <div class="library">${sources.map(s => `<article class="lib-card"><span class="pill">${esc(s.kind)}</span><h2>${esc(s.title)}</h2><p>${esc(s.cite)}</p><button class="btn" data-source="${s.id}">Open and read ${icon('arrow')}</button></article>`).join('')}</div>`;
}
function extrasPage() {
  return `<header class="page-head"><span class="eyebrow">Optional · independent practice</span><h1>Extra activities</h1><p>Practice at home. These are <b>not</b> part of the four-hour lesson.</p></header>
  ${lesson.extras.map((a, i) => activity(a, i, lesson.extras, null)).join('')}`;
}
function registerTables() {
  allActivities.forEach(a => (a._tables || []).forEach(b => { for (let r = 0; r < tableRows(b); r++) b.columns.forEach((c, ci) => { const k = `${b.id}-${r}-${ci}`; labels[k] = tableLabel(b, r, ci); owner[k] = a.id; }); }));
}
function notebook() {
  return `${nb.pageHTML()}<div class="nb-foot"><button class="btn-quiet danger" data-clear>Clear my work on this device</button></div>`;
}

/* ───────── render ───────── */
const routes = ['overview', 'sources', 'extra', 'notebook', ...lesson.sections.map(s => s.id)];
const pageNames = { overview: 'Overview', sources: 'Source library', extra: 'Extra activities', notebook: 'My notebook' };
function parseRoute() {
  const h = location.hash.slice(1);
  if (!h || h === '/' || h === '/home') return { home: true };
  if (routes.includes(h)) { history.replaceState(null, '', L(h)); return { page: h }; } // old links such as #ai
  const m = h.match(/^\/([\w-]+)(?:\/([\w-]+))?/);
  if (!m) return { page: 'overview' };
  if (m[1] !== lesson.id) return { other: m[1] };
  return { page: routes.includes(m[2]) ? m[2] : 'overview' };
}
function render() {
  const r = parseRoute();
  if (r.other) {
    const d = days.find(x => x.id === r.other);
    if (d && d.status === 'ready') { location.reload(); return; }
    if (d) toast(`Week ${d.week}, Day ${d.day} is coming soon.`);
    history.replaceState(null, '', '#/'); return render();
  }
  const route = r.home ? 'home' : r.page;
  if (!r.home) try { localStorage.setItem('dec15-last-lesson', lesson.id); } catch (e) { /* ignore */ }
  const done = coreActivities.filter(a => state.done[a.id]).length;
  $('#side-home').classList.toggle('active', route === 'home');
  if (route === 'home') $('#side-home').setAttribute('aria-current', 'page'); else $('#side-home').removeAttribute('aria-current');
  $('#course-card').innerHTML = `<span class="course-week">Week ${lesson.week} · Day ${lesson.day}</span><b>${esc(lesson.title)}</b>`;
  $('#course-card').href = L('overview');
  $('#nav').innerHTML = `<a href="${L('overview')}" class="${route === 'overview' ? 'active' : ''}"${route === 'overview' ? ' aria-current="page"' : ''}><span class="nav-num">${icon('map')}</span><span>Overview</span></a>
    <span class="nav-label">Core lesson · ${esc(lesson.duration || '4 hours')}</span>
    ${lesson.sections.map(s => { const d = s.activities.filter(a => state.done[a.id]).length; return `<a href="${L(s.id)}" class="is-stage${route === s.id ? ' active' : ''}${d === s.activities.length ? ' complete' : ''}" style="${tone(s)}"${route === s.id ? ' aria-current="page"' : ''}><span class="nav-num">${d === s.activities.length ? icon('check') : s.number}</span><span class="nav-text">${esc(s.title)}<small>${s.minutes} min<i class="nav-bar" style="--p:${d / s.activities.length}" aria-label="${d} of ${s.activities.length} done"></i></small></span></a>`; }).join('')}
    <span class="nav-label">More</span>
    ${[['sources', 'book', 'Source library'], ['extra', 'list', 'Extra activities'], ['notebook', 'model', 'My notebook']].map(([id, ic, t]) => `<a href="${L(id)}" class="${route === id ? 'active' : ''}"${route === id ? ' aria-current="page"' : ''}><span class="nav-num">${icon(ic)}</span><span>${t}</span></a>`).join('')}`;
  $('#progress').value = done; $('#progress').max = coreActivities.length;
  $('#progress-label').innerHTML = `<b>${done}</b> of ${coreActivities.length} activities finished`;
  $('#side-notebook').href = L('notebook');
  const s = lesson.sections.find(x => x.id === route);
  $('#main').innerHTML = route === 'home' ? courseHome() : s ? stagePage(s) : route === 'sources' ? sourcesPage() : route === 'extra' ? extrasPage() : route === 'notebook' ? notebook() : overview();
  document.body.dataset.page = s ? 'stage' : route;
  if (s) { document.body.style.setProperty('--accent', TONES[s.tone][0]); document.body.style.setProperty('--accent-bg', TONES[s.tone][1]); }
  else { document.body.style.removeProperty('--accent'); document.body.style.removeProperty('--accent-bg'); }
  const pageName = route === 'home' ? '' : s ? s.title : pageNames[route];
  $('#crumb').innerHTML = route === 'home' ? `<a href="#/" aria-label="${esc(course.code)} course map" title="Course map">${icon('home')}</a><i>/</i><b>Course map</b>`
    : `<a href="#/" aria-label="${esc(course.code)} course map" title="Course map">${icon('home')}</a><i>/</i>${route === 'overview' ? `<b>Week ${lesson.week} · Day ${lesson.day}</b>` : `<a href="${L('overview')}">Week ${lesson.week} · Day ${lesson.day}</a><i>/</i><b>${esc(pageName)}</b>`}`;
  document.title = `${course.code} · ${route === 'home' ? 'Course map' : `Week ${lesson.week}, Day ${lesson.day}${route === 'overview' ? '' : ' · ' + pageName}`}`;
  $('#teacher-toggle').setAttribute('aria-pressed', String(state.teacher));
  $('#teacher-toggle .tt-state').textContent = state.teacher ? 'On' : 'Off';
  paintStatus();
  const tabs = $('.act-tabs'), cur = $('.act-tabs .current'); if (tabs && cur) tabs.scrollLeft = cur.offsetLeft - tabs.offsetLeft - 12;
  reader.mount();
}
function rerender() { const y = window.scrollY; render(); window.scrollTo(0, y); }

/* ───────── sources dialog / glossary ───────── */
const srcName = id => sources.find(x => x.id === id)?.short || ({ reading1: 'Reading 1', reading2: 'Reading 2', reading3: 'Reading 3', listening: 'Listening transcript', 'video-script': 'Video script' }[id] || id);
function openSource(id = 'reading1') {
  reader.closeWord();
  if (!sources.length) { toast('This lesson has no course texts.'); return; }
  const s = sources.find(x => x.id === id) || sources[0];
  $('#resource-title').textContent = 'Read and highlight';
  $('#resource-body').innerHTML = `<div class="source-tabs">${sources.map(x => `<button class="${x.id === s.id ? 'active' : ''}" data-source="${x.id}">${srcName(x.id)}</button>`).join('')}</div>
    ${reader.toolbar('reading')}
    <article class="source-text" data-help><span class="eyebrow">${esc(s.cite)} · ${esc(s.kind)}</span><h3>${esc(s.title)}</h3>${s.note ? `<p class="script-note">${esc(s.note)}</p>` : ''}
    <p class="source-ref">${esc(s.reference)}</p>
    ${s.citeAs ? `<p class="source-cite">${esc(s.citeAs)}</p>` : ''}
    ${s.paragraphs.map((p, i) => p.startsWith('## ') ? `<h4 class="source-h">${esc(p.slice(3))}</h4>` : `<p>${reader.text('s-' + s.id + '-' + i, p, s.cite + ' · ' + (s.id === 'video-script' ? p.slice(0, 10) : /^[A-Z]\. /.test(p) ? 'paragraph ' + p.slice(0, 1) : p.split(':')[0].slice(0, 20)))}</p>`).join('')}
    ${s.figure ? `<figure><img src="${s.figure}" alt="${esc(s.figureAlt || '')}"><figcaption>Figure 1. ${esc(s.figureCaption || '')} ${esc(s.figureCredit || '')}</figcaption></figure>` : ''}</article>`;
  if (!$('#resource-dialog').open) $('#resource-dialog').showModal();
  $('#resource-body').scrollTop = 0;
  reader.mount();
}
function glossary() {
  reader.closeWord();
  $('#resource-title').textContent = 'Word meanings';
  $('#resource-body').innerHTML = `<div class="glossary-top"><p>Click a <span class="word-help">dotted word</span> on any page for its meaning — or find it here.</p><button class="btn" data-word-game>Play the word game</button></div>
    <div class="glossary-grid">${[...lesson.glossary].sort((a, b) => a[0].localeCompare(b[0])).map(([w, d, c]) => `<div class="glossary-word"><b>${esc(w)}</b><p>${esc(d)}</p><small>${esc(c)}</small></div>`).join('')}</div>`;
  $('#resource-dialog').showModal();
}

/* ───────── notebook exports ───────── */
const nb = window.createDEC15Notebook({ lesson, getState: () => state, planParts, tableRows, reader, esc, strip, toast, person: () => cloudInfo.profile?.full_name || '' });
async function runExport(kind, btn) {
  if (kind === 'gdocs') {
    const copied = await nb.gdocs();
    const win = copied ? window.open('https://docs.new', '_blank') : null;
    if (copied) showGdocsHelp(!!win);
    else { await nb.docx(); toast('Upload the downloaded Word file to Google Drive, then open it with Google Docs.'); }
    return;
  }
  if (kind === 'print') { nb.print(); return; }
  btn?.classList.add('busy'); btn?.setAttribute('aria-busy', 'true');
  try { kind === 'pdf' ? await nb.pdf() : (await nb.docx(), toast('Your Word file has been downloaded.')); }
  catch (e) { toast('Sorry — the file could not be created. Try Print instead.'); console.error(e); }
  finally { btn?.classList.remove('busy'); btn?.removeAttribute('aria-busy'); }
}
function showGdocsHelp(opened) {
  $('#resource-title').textContent = 'Open in Google Docs';
  $('#resource-body').innerHTML = `<div class="gdocs-help">
    <div class="gdocs-steps">
      <div><span>1</span><p><b>Your notebook is copied.</b> Tables and headings are included.</p></div>
      <div><span>2</span><p>${opened ? 'A new Google Doc has opened in another tab.' : `<a href="https://docs.new" target="_blank" rel="noopener">Open a new Google Doc</a> (sign in with your Google account).`}</p></div>
      <div><span>3</span><p>Click inside the document and press <kbd>Ctrl</kbd> + <kbd>V</kbd> &nbsp;(Mac: <kbd>⌘</kbd> + <kbd>V</kbd>).</p></div>
    </div>
    <p class="gdocs-alt">Paste not working? <button class="text-link" data-export="docx">Download a Word file</button> and upload it to Google Drive — it opens in Google Docs.</p></div>`;
  if (!$('#resource-dialog').open) $('#resource-dialog').showModal();
}

/* ───────── account (Supabase) ───────── */
function accountDialog(mode = cloudInfo.user ? 'account' : 'signin', msg = '') {
  $('#resource-title').textContent = mode === 'account' ? 'Your account' : 'Save your work online';
  const p = cloudInfo.profile || {};
  $('#resource-body').innerHTML = mode === 'account' ? `<div class="acct">
      <div class="acct-card"><span class="avatar avatar-lg">${esc((p.full_name || cloudInfo.user?.email || '?').slice(0, 1).toUpperCase())}</span><div><b>${esc(p.full_name || 'Student')}</b><span>${esc(cloudInfo.user?.email || '')}${p.student_id ? ' · ' + esc(p.student_id) : ''}</span></div></div>
      <p class="acct-note">${icon('check')} Your answers, tables, plan and highlights are saved online. Sign in on any computer to continue where you stopped.</p>
      <button class="btn-quiet" data-signout>Sign out</button></div>`
    : `<form class="acct-form" data-auth="${mode}" novalidate>
      ${mode !== 'reset' ? '<img class="acct-art" src="assets/art/sync.svg" alt="" width="360" height="200">' : ''}
      <p class="acct-intro">${mode === 'signup' ? 'Create an account once. Then your work is saved online and appears on any device where you sign in.' : mode === 'reset' ? 'Enter your email. We will send you a link to choose a new password.' : 'Sign in so your work is saved online — not only on this device.'}</p>
      ${mode === 'signup' ? `<label>Full name<input name="name" autocomplete="name" required></label><label>Student ID <small>(optional)</small><input name="sid" inputmode="numeric" autocomplete="off"></label>` : ''}
      <label>Email<input name="email" type="email" autocomplete="email" required></label>
      ${mode !== 'reset' ? `<label>Password<input name="password" type="password" autocomplete="${mode === 'signup' ? 'new-password' : 'current-password'}" minlength="6" required></label>` : ''}
      ${msg ? `<p class="acct-msg" role="alert">${msg}</p>` : ''}
      <button class="btn" type="submit">${mode === 'signup' ? 'Create account' : mode === 'reset' ? 'Send reset link' : 'Sign in'}</button>
      <p class="acct-switch">${mode === 'signin' ? `New here? <button type="button" class="text-link" data-auth-mode="signup">Create an account</button> · <button type="button" class="text-link" data-auth-mode="reset">Forgot password?</button>` : `Already have an account? <button type="button" class="text-link" data-auth-mode="signin">Sign in</button>`}</p>
    </form>`;
  if (!$('#resource-dialog').open) $('#resource-dialog').showModal();
  $('#resource-body input')?.focus();
}
document.addEventListener('submit', async e => {
  const f = e.target.closest('[data-auth]'); if (!f) return;
  e.preventDefault();
  const fd = new FormData(f), mode = f.dataset.auth, btn = f.querySelector('[type=submit]');
  btn.disabled = true; btn.textContent = 'Please wait…';
  let err;
  if (mode === 'signin') err = await cloud.signIn(fd.get('email').trim(), fd.get('password'));
  if (mode === 'signup') err = !String(fd.get('name')).trim() ? 'Please write your full name.' : await cloud.signUp(fd.get('email').trim(), fd.get('password'), String(fd.get('name')).trim(), String(fd.get('sid') || '').trim());
  if (mode === 'reset') err = (await cloud.resetPassword(fd.get('email').trim())) || 'SENT';
  if (err === 'CHECK_EMAIL') return accountDialog('signin', 'Account created. Open the email we sent you to confirm it, then sign in here.');
  if (err === 'SENT') return accountDialog('signin', 'If that email has an account, a reset link is on its way.');
  if (err) return accountDialog(mode, esc(err));
  $('#resource-dialog').close(); toast('You are signed in. Your work is now saved online.');
});

/* ───────── timer ───────── */
let timer = null, remaining = 0, deadline = 0, paused = false;
function paintTimer() { const el = $('#timer-display'); if (el) el.textContent = Math.floor(remaining / 60) + ':' + pad(remaining % 60); }
function startTimer(min) {
  clearInterval(timer); $('#active-timer')?.remove(); remaining = min * 60; paused = false; deadline = Date.now() + remaining * 1000;
  document.body.insertAdjacentHTML('beforeend', `<div class="timer-pop" id="active-timer" role="timer" aria-label="Activity timer"><span>${min}-minute activity</span><strong id="timer-display"></strong><button data-pause>Pause</button><button data-close-timer aria-label="Close timer">×</button></div>`);
  paintTimer();
  timer = setInterval(() => { if (paused) return; remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000)); paintTimer(); if (!remaining) { clearInterval(timer); toast('Time is up. Finish your sentence and compare.'); } }, 250);
}

/* ───────── events ───────── */
document.addEventListener('input', e => {
  const t = e.target; if (!t.dataset.save) return;
  state.values[t.dataset.save] = t.type === 'checkbox' ? t.checked : t.value; save();
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.done) {
    state.done[t.dataset.done] = t.checked; save(); rerender();
    if (t.checked) {
      const s = lesson.sections.find(x => x.activities.some(a => a.id === t.dataset.done));
      const all = s && s.activities.every(a => state.done[a.id]);
      document.querySelector(`[data-done="${t.dataset.done}"]`)?.closest('.done-toggle')?.classList.add('pop');
      toast(all ? `Stage ${Number(s.number)} complete — well done!` : 'Activity finished. Nice work.');
    }
  }
});
document.addEventListener('click', e => {
  const t = e.target.closest('button,a'); if (!t) return;
  const d = t.dataset;
  if (d.quiz) { const k = d.quiz + '-' + d.i; state.values[k] = d.opt; delete state.checked[d.quiz]; save(); rerender(); return; }
  if (d.quizCheck) {
    const b = allActivities.flatMap(a => a.blocks).find(x => x.id === d.quizCheck);
    const missing = b.items.filter((_, i) => !val(b.id + '-' + i)).length;
    if (missing && !state.teacher) { toast(`Answer all the questions first (${missing} left).`); return; }
    state.checked[b.id] = true; save(); rerender(); return;
  }
  if (d.order) {
    const b = allActivities.flatMap(a => a.blocks).find(x => x.id === d.order), o = orderOf(b), i = Number(d.from), j = i + Number(d.dir);
    if (j < 0 || j >= o.length) return;
    [o[i], o[j]] = [o[j], o[i]]; state.values[b.id] = o.join(','); delete state.checked[b.id]; save(); rerender();
    document.querySelector(`[data-order="${b.id}"][data-from="${j}"][data-dir="${d.dir}"]`)?.focus(); return;
  }
  if (d.orderCheck) { const b = allActivities.flatMap(a => a.blocks).find(x => x.id === d.orderCheck); state.values[b.id] = orderOf(b).join(','); state.checked[b.id] = true; save(); rerender(); return; }
  if (d.orderReset) { delete state.checked[d.orderReset]; save(); rerender(); return; }
  if (d.gridCheck) {
    const b = allActivities.flatMap(a => a.blocks).find(x => x.id === d.gridCheck);
    const missing = b.rows.reduce((n, _, r) => n + b.columns.filter((_, c) => !b.given?.[`${r}-${c}`] && !val(`${b.id}-${r}-${c}`)).length, 0);
    if (missing && !state.teacher) { toast(`Complete every box first (${missing} left).`); return; }
    state.checked[b.id] = true; save(); rerender(); return;
  }
  if (d.gridReset) { delete state.checked[d.gridReset]; save(); rerender(); return; }
  if (d.quizReset) { delete state.checked[d.quizReset]; save(); rerender(); return; }
  if (d.choose) { state.values[d.choose] = d.opt; save(); rerender(); return; }
  if (d.reveal) {
    const a = allActivities.find(x => x.id === d.reveal);
    if (!hasAttempt(a) && !state.teacher) { toast('Write or choose something first. Then compare with the suggested answers.'); return; }
    state.revealed[a.id] = true; save(); rerender(); return;
  }
  if (d.hideAnswers) { delete state.revealed[d.hideAnswers]; save(); rerender(); return; }
  if (d.addRow) { state.rows[d.addRow] = (state.rows[d.addRow] || 0) + 1; save(); rerender(); return; }
  if (d.go) { const sec = lesson.sections.find(x => x.activities.some(a => a.id === d.go)); if (sec) { state.active[sec.id] = d.go; save(false); } return; }
  if (t.classList.contains('skip')) { e.preventDefault(); $('#main').focus(); return; }
  if (d.jump) {
    const s = lesson.sections.find(x => x.activities.some(a => a.id === d.jump));
    state.active[s.id] = d.jump; save(); render();
    const el = $('.act-tabs'); el?.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    $('#' + d.jump)?.focus({ preventScroll: true }); return;
  }
  if (d.source) { openSource(d.source); return; }
  if (t.hasAttribute('data-video')) { t.closest('.video-wrap').innerHTML = `<iframe title="${esc(d.title)}" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(d.video)}?start=${Number(d.start) || 0}" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`; return; }
  if (d.timer) { startTimer(Number(d.timer)); return; }
  if (t.hasAttribute('data-pause')) { paused = !paused; if (!paused) deadline = Date.now() + remaining * 1000; t.textContent = paused ? 'Resume' : 'Pause'; return; }
  if (t.hasAttribute('data-close-timer')) { clearInterval(timer); $('#active-timer')?.remove(); return; }
  if (d.export) { runExport(d.export, t); return; }
  if (d.authMode) { accountDialog(d.authMode); return; }
  if (t.hasAttribute('data-signout')) { cloud.signOut().then(() => { $('#resource-dialog').close(); toast('Signed out. Work on this device is still saved here.'); }); return; }
  if (t.hasAttribute('data-clear') && confirm('Clear all your answers on this device? Download your notes first if you need them.')) {
    state = { ...state, values: {}, done: {}, revealed: {}, checked: {}, rows: {}, marks: {}, markDocuments: {} }; save(); render(); toast('Cleared.');
  }
});
$('#account-btn').onclick = () => accountDialog();
$('#teacher-toggle').onclick = () => { state.teacher = !state.teacher; save(); rerender(); toast(state.teacher ? 'Teacher view: answers and teacher notes are shown.' : 'Student view: answers open after students try.'); };
$('#glossary-open').onclick = glossary;
$('#source-open').onclick = () => openSource();
$('#dialog-close').onclick = () => { reader.closeWord(); $('#resource-dialog').close(); };
$('#text-toggle').onclick = e => { const on = document.body.classList.toggle('large-text'); e.currentTarget.setAttribute('aria-pressed', String(on)); };
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); $('#main').focus({ preventScroll: true }); });
render(); save(false);
cloud = window.createDEC15Cloud({
  cfg, lessonId: lesson.id, getState: () => state,
  applyState: next => { state = { ...state, ...next, teacher: state.teacher }; save(false); rerender(); },
  onChange: info => { cloudInfo = info; paintStatus(); if (parseRoute().page === 'notebook' && info.status === 'saved' && info.profile && !paintStatus.named) { paintStatus.named = true; rerender(); } }
});
cloud.init().catch(e => { console.error(e); cloudInfo = { status: 'error' }; paintStatus(); });
})();
