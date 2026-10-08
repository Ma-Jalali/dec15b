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
/* The Teacher’s Book code of a stage (e.g. 15A) — shown everywhere so students can find the same lesson in the book. */
const code = s => s.code || pad(Number(s.number));
/* In the side panel the badge shows the lesson number only (7A → 7). */
const navCode = c => String(c).replace(/^(\d+)A$/, '$1');
const stageName = s => `${s.code ? s.code + ' ' : ''}${s.title}`;
/* A day's part from course.js, e.g. '15A Discussion skills' → { code: '15A', name: 'Discussion skills', tone } */
const dayPart = (d, k) => { const m = String(d.parts[k]).match(/^(\d+[A-Z])\s+(.*)$/); return { code: m ? m[1] : String(k + 1), name: m ? m[2] : d.parts[k], tone: TONES[d.tones?.[k]] ? d.tones[k] : null }; };
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
  const map = { local: ['ok', 'Saved on this device'], 'signed-out': ['warn', 'Saved on this device<span class="hide-sm"> only</span>'], pending: ['busy', 'Saving online…'], syncing: ['busy', 'Saving online…'], saved: ['ok', 'Saved online'], offline: ['warn', 'Offline — saved on this device'], error: ['bad', 'Online save failed — retrying'] };
  const [tone, label] = !storageOK && cloudInfo.status !== 'saved' ? ['bad', 'Not saved — download your notebook'] : map[cloudInfo.status] || map.local;
  el.dataset.tone = tone; el.innerHTML = `<span>${label}</span>`;
  const btn = $('#account-btn'); if (!btn) return;
  btn.hidden = !cloud?.enabled;
  const name = cloudInfo.profile?.full_name || cloudInfo.user?.email || '';
  btn.innerHTML = cloudInfo.user ? `<span class="avatar">${esc((name || '?').trim().slice(0, 1).toUpperCase())}</span><span class="acct-name">${esc(name.split(' ')[0] || 'Account')}</span>` : '<span>Sign in<span class="hide-sm"> to save online</span></span>';
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
/* Class wall under each activity (needs online saving). Turn it off for a lesson with wall: false,
   or for one activity with wall: false. */
const wall = window.createDEC15Wall ? window.createDEC15Wall({ getCloud: () => cloud, lessonId: lesson.id, esc, toast, icon: (n, c) => icon(n, c), signIn: () => accountDialog('signin') }) : null;
const wallOn = a => !!(wall && wall.enabled && lesson.wall !== false && a && a.wall !== false);

const ICON = {
  book: '<path d="M3 4c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2zM12 6v15"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  up: '<path d="M12 19V5m-6 6 6-6 6 6"/>',
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
  sprout: '<path d="M12 20v-8m0 0c0-4-3-6-7-6 0 4 3 6 7 6zm0-2c0-4 3-6 7-6 0 4-3 6-7 6z"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2M9 9.5h.01M15 9.5h.01"/>',
  share: '<path d="M12 15V4m-4 4 4-4 4 4M5 13v6h14v-6"/>',
  grip: '<circle cx="9" cy="6" r="1.3"/><circle cx="15" cy="6" r="1.3"/><circle cx="9" cy="12" r="1.3"/><circle cx="15" cy="12" r="1.3"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.3"/>',
  undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M16 14.2c2.8.3 5 2.6 5 5.8"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 13h18"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
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

const findBlock = id => allActivities.flatMap(a => a.blocks).find(x => x.id === id);
const play = window.createDEC15Play ? window.createDEC15Play({ getState: () => state, save, rerender: () => rerender(), esc, strip, icon, toast, findBlock }) : null;

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
    play?.register(b, reg);
    if (b.type === 'fields') b.fields.forEach(f => reg(f.id, f.label));
    if (b.type === 'quiz') b.items.forEach((q, i) => reg(b.id + '-' + i, strip(q.q)));
    if (b.type === 'choose') reg(b.id, b.title);
    if (b.type === 'cards' && b.pick) reg(b.pick, strip(b.title || 'My choice'));
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
/* Long banks (4+ groups) become tabs: one group at a time, so the page stays calm. */
let langSeq = 0;
B.language = b => { const tabs = b.groups.length >= 4 && b.tabs !== false, uid = 'lg' + (++langSeq);
  return `<section class="block language${tabs ? ' lang-tabbed' : ''}">
  <div class="block-label">${icon('phrase')}Language bank</div>
  ${b.title ? `<h3>${b.title}</h3>` : ''}
  ${tabs ? `<div class="lang-tabs" role="tablist" aria-label="${esc(strip(b.title || 'Language bank'))}">${b.groups.map((g, i) => `<button type="button" role="tab" id="${uid}-t${i}" aria-controls="${uid}-p${i}" aria-selected="${!i}" tabindex="${i ? -1 : 0}" data-lang-tab="${uid}" data-i="${i}">${strip(g.label)}</button>`).join('')}</div>` : ''}
  <div class="lang-grid">${b.groups.map((g, i) => `<div class="lang-group"${tabs ? ` role="tabpanel" id="${uid}-p${i}" aria-labelledby="${uid}-t${i}"${i ? ' hidden' : ''}` : ''}>${tabs ? '' : `<h4>${g.label}</h4>`}<ul>${g.phrases.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>`).join('')}</div>
</section>`; };
B.model = b => `<section class="block model" data-help>
  <div class="block-label">${icon('model')}Model</div>
  <h3>${b.title || 'Example'}</h3>
  ${b.before ? `<p class="model-before"><span>${b.rows ? 'Claim' : 'Weak'}</span>${b.before}</p>` : ''}
  ${b.text ? `<p class="model-text">${b.before && !b.rows ? '<span>Stronger</span>' : ''}${b.text}</p>` : ''}
  ${b.rows ? `<dl class="model-rows">${b.rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>` : ''}
  ${b.list ? `<ol class="model-list">${b.list.map(x => `<li>${x}</li>`).join('')}</ol>` : ''}
  ${b.note ? `<p class="model-note">${b.note}</p>` : ''}
</section>`;
/* cards: { items: [{ label?, text, icon? }], pick?: 'id' } — with pick, students choose one card (saved) */
B.cards = b => `<section class="block cards-block${b.pick ? ' cards-pick' : ''}" data-help>
  ${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
  <div class="cards${b.items.length === 4 ? ' cards-4' : ''}"${b.pick ? ` role="radiogroup" aria-label="${esc(strip(b.title || 'Choose one'))}"` : ''}>${b.items.map((c, i) => { const inner = `${c.icon ? `<span class="card-ico">${icon(c.icon)}</span>` : ''}${b.numbered ? `<span class="card-num">${i + 1}</span>` : ''}${c.label ? `<span class="card-label">${c.label}</span>` : ''}<p>${c.text}</p>`;
    if (!b.pick) return `<div class="card">${inner}</div>`;
    const opt = strip(c.label || c.text), on = val(b.pick) === opt;
    return `<button type="button" role="radio" aria-checked="${on}" class="card${on ? ' selected' : ''}" data-choose="${b.pick}" data-opt="${esc(opt)}"><span class="card-pick-mark">${icon('check')}</span>${inner}</button>`; }).join('')}</div>
</section>`;
/* games and interactive blocks (js/play.js): flash, sort, flip, spinner, chat, promptbuilder, contract */
if (play) Object.assign(B, play.B);
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
B.fields = (b, a) => `<section class="block fields">${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}${b.fields.map(f => `<div class="field"><label for="f-${f.id}">${esc(f.label)}</label><textarea id="f-${f.id}" data-save="${f.id}" rows="${f.rows || 3}" placeholder="${esc(f.placeholder || '')}">${esc(val(f.id))}</textarea>${wallOn(a) && f.share !== false && b.share !== false ? `<button type="button" class="share-btn" data-wall-share="${f.id}" data-thread="${a.id}" data-label="${esc(f.label)}">${icon('share')}Share with class</button>` : ''}</div>`).join('')}</section>`;
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
      if (ci === 0 && b.fixed?.[r]) { const [head, ...rest] = String(b.fixed[r]).split(/<br\s*\/?>/); return `<th scope="row"><span class="th-title">${head}</span>${rest.length ? '<br>' + rest.join('<br>') : ''}</th>`; }
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
B.checklist = b => `<section class="block checklist"><h3 class="block-heading">${b.title}</h3>${b.meter ? (() => { const n = b.items.filter((_, i) => val(b.id + '-' + i)).length; return `<div class="check-meter" style="--p:${n / b.items.length}"><span><i></i></span>${n === b.items.length ? esc(b.meter[1] || 'Ready!') : `${n} of ${b.items.length} ${esc(b.meter[0] || 'ticked')}`}</div>`; })() : ''}${b.items.map((c, i) => `<label class="check"><input type="checkbox" data-save="${b.id}-${i}"${val(b.id + '-' + i) ? ' checked' : ''}><span>${esc(c)}</span></label>`).join('')}</section>`;
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
  const o = orderOf(b), n = o.length, checked = state.checked[b.id], right = o.filter((x, i) => x === i).length, perfect = checked && right === n;
  const label = strip(b.title || 'Put in order');
  return `<section class="block order${checked ? ' is-checked' : ''}${perfect ? ' is-perfect' : ''}" id="order-${b.id}">
  ${b.title ? `<h3 class="block-heading">${icon('list')}${b.title}</h3>` : ''}
  <p class="order-hint">${icon('grip')}<span><b>Drag</b> a card up or down<span class="order-touch"> by its dotted grip</span> to change the order. You can also use the arrows<span class="order-kbd">, or select a card and press <kbd>Space</kbd> then <kbd>↑</kbd> <kbd>↓</kbd></span>.</span></p>
  ${b.ends ? `<p class="order-end order-top">${icon('arrow')}${esc(b.ends[0])}</p>` : ''}
  <ol class="order-list" data-order-list="${b.id}" aria-label="${esc(label)}">${o.map((x, i) => `<li class="order-item${checked ? (x === i ? ' is-right' : ' is-wrong') : ''}" data-x="${x}" style="--i:${i}" tabindex="0" aria-roledescription="movable card" aria-label="Position ${i + 1} of ${n}: ${esc(strip(b.items[x]))}${checked ? (x === i ? '. Correct.' : `. Should be position ${x + 1}.`) : ''}">
    <span class="order-grip" aria-hidden="true">${icon('grip')}</span>
    <span class="order-pos">${checked && x === i ? icon('check') : i + 1}</span>
    <span class="order-text">${b.items[x]}${checked && x !== i ? `<small class="order-should">Belongs in position ${x + 1}</small>` : ''}</span>
    <span class="order-move"><button type="button" data-order="${b.id}" data-from="${i}" data-dir="-1" aria-label="Move up" tabindex="-1"${i ? '' : ' disabled'}>${icon('arrow')}</button><button type="button" data-order="${b.id}" data-from="${i}" data-dir="1" aria-label="Move down" tabindex="-1"${i < n - 1 ? '' : ' disabled'}>${icon('arrow')}</button></span>
  </li>`).join('')}</ol>
  ${b.ends ? `<p class="order-end order-bottom">${icon('arrow')}${esc(b.ends[1])}</p>` : ''}
  <div class="quiz-bar">${checked
    ? `<span class="quiz-score${perfect ? ' is-perfect' : ''}">${perfect ? `${icon('check')}Perfect order!` : `${right} of ${n} in the right place`}</span>${perfect ? '' : `<button class="btn-quiet" data-order-reset="${b.id}">${icon('undo')}Try again</button><button class="btn-quiet" data-order-solve="${b.id}">Show the correct order</button>`}`
    : `<button class="btn" data-order-check="${b.id}">Check my order ${icon('arrow')}</button>`}</div>
  <p class="sr-only" aria-live="polite" data-order-live="${b.id}"></p>
  ${checked && b.why ? `<p class="quiz-why">${b.why}</p>` : ''}
</section>`;
};
/* Moving cards: drag (mouse, pen, or the grip on touch screens), arrow buttons, or the keyboard.
   Every move animates: the other cards slide out of the way, and button/keyboard moves glide (FLIP). */
const orderBlock = id => allActivities.flatMap(a => a.blocks).find(x => x.id === id);
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
function orderCards(id) { return [...document.querySelectorAll(`[data-order-list="${CSS.escape(id)}"] > .order-item`)]; }
function commitOrder(id, from, to, opts = {}) {
  const b = orderBlock(id), o = orderOf(b); if (from === to || to < 0 || to >= o.length) return;
  const before = new Map(orderCards(id).map(el => [el.dataset.x, el.getBoundingClientRect().top]));
  const [x] = o.splice(from, 1); o.splice(to, 0, x);
  state.values[id] = o.join(','); delete state.checked[id]; save(); rerender();
  if (!opts.noFlip && !reduceMotion()) orderCards(id).forEach(el => { const t = before.get(el.dataset.x); const dy = t - el.getBoundingClientRect().top;
    if (dy) el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }], { duration: 280, easing: 'cubic-bezier(.2,.7,.2,1)' }); });
  const moved = orderCards(id).find(el => el.dataset.x === String(x));
  if (opts.focus) { moved?.focus({ preventScroll: true }); if (opts.grabbed) moved?.classList.add('is-grabbed'); }
  moved?.classList.add('just-moved'); setTimeout(() => moved?.classList.remove('just-moved'), 700);
  const live = document.querySelector(`[data-order-live="${CSS.escape(id)}"]`); if (live) live.textContent = `${strip(b.items[x])} — now in position ${to + 1} of ${o.length}.`;
}
let drag = null;
document.addEventListener('pointerdown', e => {
  const item = e.target.closest('.order-item'); if (!item || e.button > 0 || e.target.closest('button')) return;
  if (e.pointerType === 'touch' && !e.target.closest('.order-grip')) return;   // on phones, drag by the grip so the page still scrolls
  const list = item.parentElement, cards = [...list.children], rects = cards.map(el => el.getBoundingClientRect());
  drag = { id: list.dataset.orderList, list, item, cards, rects, from: cards.indexOf(item), to: cards.indexOf(item), y0: e.clientY, s0: window.scrollY, moved: false, pid: e.pointerId };
  item.setPointerCapture?.(e.pointerId);
});
function dragMove(clientY) {
  const g = drag, dy = clientY - g.y0 + (window.scrollY - g.s0);
  if (!g.moved) { if (Math.abs(dy) < 5) return; g.moved = true; g.list.classList.add('is-sorting'); g.item.classList.add('is-dragging'); document.body.classList.add('is-dragging-card'); }
  const top = g.rects[0].top, bottom = g.rects[g.rects.length - 1].bottom, r = g.rects[g.from];
  const clamped = Math.max(top - r.top - 12, Math.min(bottom - r.bottom + 12, dy));
  g.item.style.transform = `translateY(${clamped}px) scale(1.02)`;
  const mid = r.top + r.height / 2 + clamped;
  let to = g.from;
  g.rects.forEach((q, k) => { if (k < g.from && mid < q.top + q.height / 2) to = Math.min(to, k); if (k > g.from && mid > q.top + q.height / 2) to = Math.max(to, k); });
  g.to = to;
  const gap = g.rects.length > 1 ? g.rects[1].top - g.rects[0].bottom : 8, h = r.height + gap;
  g.cards.forEach((el, k) => { if (k === g.from) return; const shift = g.from < to && k > g.from && k <= to ? -h : g.from > to && k < g.from && k >= to ? h : 0; el.style.transform = shift ? `translateY(${shift}px)` : ''; });
}
document.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.pid) return;
  dragMove(e.clientY);
  if (drag.moved) { e.preventDefault(); const edge = 70; if (e.clientY < edge) window.scrollBy(0, -12); else if (e.clientY > innerHeight - edge) window.scrollBy(0, 12); }
});
function endDrag(cancel) {
  const g = drag; drag = null; if (!g) return;
  document.body.classList.remove('is-dragging-card');
  if (!g.moved) return;
  const finish = () => { g.cards.forEach(el => { el.style.transform = ''; }); g.list.classList.remove('is-sorting'); g.item.classList.remove('is-dragging'); };
  if (cancel || g.to === g.from) { g.item.classList.add('settling'); finish(); setTimeout(() => g.item.classList.remove('settling'), 260); return; }
  const r = g.rects, slot = g.to > g.from ? r[g.to].bottom - r[g.from].bottom : r[g.to].top - r[g.from].top;
  g.item.classList.add('settling'); g.item.style.transform = `translateY(${slot}px)`;
  setTimeout(() => { finish(); commitOrder(g.id, g.from, g.to, { noFlip: true }); }, reduceMotion() ? 0 : 200);
}
document.addEventListener('pointerup', e => { if (drag && e.pointerId === drag.pid) endDrag(false); });
document.addEventListener('pointercancel', () => endDrag(true));
document.addEventListener('keydown', e => {
  const item = e.target.closest?.('.order-item'); if (!item || e.target !== item) return;
  const id = item.parentElement.dataset.orderList, from = orderCards(id).indexOf(item);
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); const on = !item.classList.contains('is-grabbed'); item.classList.toggle('is-grabbed', on);
    const live = document.querySelector(`[data-order-live="${CSS.escape(id)}"]`); if (live) live.textContent = on ? 'Card picked up. Use the up and down arrows to move it, then press Space to drop it.' : 'Card dropped.'; return; }
  if (e.key === 'Escape') { item.classList.remove('is-grabbed'); return; }
  if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && (item.classList.contains('is-grabbed') || e.altKey)) {
    e.preventDefault(); commitOrder(id, from, from + (e.key === 'ArrowUp' ? -1 : 1), { focus: true, grabbed: item.classList.contains('is-grabbed') }); }
});
document.addEventListener('focusout', e => { if (e.target.classList?.contains('order-item')) e.target.classList.remove('is-grabbed'); });

/* grid: a table of choices, e.g. Does the text agree? { type: 'grid', id, title, rows: [..], columns: [..], options: [..], answers?: [[row1 answers], ...], given?: { 'r-c': value } } */
B.grid = b => {
  const checked = state.checked[b.id];
  const cell = (r, c) => { const k = `${b.id}-${r}-${c}`, given = b.given?.[`${r}-${c}`], ans = b.answers?.[r]?.[c], v = given ?? val(k);
    if (given) return `<td class="grid-given"><span class="tag tag-${esc(String(given).toLowerCase().replace(/[^a-z]+/g, '-'))}">${esc(given)}</span></td>`;
    const ok = checked && ans !== undefined ? (v === ans ? ' is-right' : ' is-wrong') : '';
    return `<td class="grid-cell${ok}"><select data-save="${k}" aria-label="${esc(strip(b.rows[r]) + ' — ' + strip(b.columns[c]))}"><option value="">Choose…</option>${b.options.map(o => `<option${v === o ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>${ok === ' is-wrong' ? `<small>${esc(ans)}</small>` : ''}</td>`; };
  const score = checked && b.answers ? b.rows.reduce((n, _, r) => n + b.columns.filter((_, c) => !b.given?.[`${r}-${c}`] && val(`${b.id}-${r}-${c}`) === b.answers[r][c]).length, 0) : 0;
  const total = b.rows.length * b.columns.length - Object.keys(b.given || {}).length;
  return `<section class="block grid-block">${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
  <div class="table-scroll" tabindex="0" role="region" aria-label="${esc(b.title || 'Table')}"><table class="work-table grid-table grid-cols-${b.columns.length}"><thead><tr><th scope="col"></th>${b.columns.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead>
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
/* A block with gate: 'text' (e.g. a sample essay) stays hidden — with everything after it in the
   activity — until the student confirms they have done their own attempt. Teacher view shows all. */
function blocksHTML(a) {
  let out = '';
  for (const b of a.blocks) {
    if (b.gate && !state.teacher && !state.revealed['gate-' + b.id]) {
      out += `<section class="block gate"><span class="gate-icon">${icon('lock')}</span><div><h3>${esc(b.title || 'Sample')}</h3><p>${b.gate}</p></div><button class="btn" data-unlock="${b.id}">I have written mine — show it ${icon('arrow')}</button></section>`;
      break;
    }
    out += (B[b.type] || (() => ''))(b, a);
  }
  return out;
}
function activity(a, i, list, section) {
  return `<article class="activity" id="${a.id}" tabindex="-1" aria-labelledby="h-${a.id}">
    <header class="act-head">
      <div class="act-meta"><span class="act-count">Activity ${i + 1}<span> / ${list.length}</span></span><span class="chip chip-soft">${groupIcon(a.grouping)}${esc(a.grouping)}</span>${a.category ? `<span class="chip chip-soft">${esc(a.category)}</span>` : ''}<button class="timer-btn" data-timer="${a.minutes}" aria-label="Start a ${a.minutes}-minute timer">${icon('clock')}<span>${a.minutes} min</span><small>Start timer</small></button></div>
      <h2 id="h-${a.id}">${esc(a.title)}</h2>
      <p class="act-goal">${icon('target')}<span><b>Goal:</b> ${esc(a.goal)}</span></p>
    </header>
    <div class="act-body">${blocksHTML(a)}</div>
    ${answersPanel(a)}
    ${wallOn(a) ? wall.sectionHTML(a) : ''}
    ${section && i === list.length - 1 && list.every(x => state.done[x.id]) ? `<div class="stage-done"><img src="assets/art/complete.svg" alt="" width="120" height="140"><div><b>Stage complete!</b><span>You finished all ${list.length} activities in ${esc(stageName(section))}.</span></div></div>` : ''}
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
      <span class="stage-numeral${code(s).length > 2 ? ' is-code' : ''}" aria-hidden="true">${esc(code(s))}</span>
      <div class="stage-copy">
        <span class="eyebrow">${s.code ? `Teacher’s Book ${esc(s.code)}<span class="sep"></span>` : ''}Stage ${Number(s.number)} of ${lesson.sections.length}<span class="sep"></span>${esc(s.subtitle)}</span>
        <h1>${esc(s.title)}</h1>
        <p class="stage-outcome" data-help>${esc(s.outcome)}</p>
        <div class="stage-meta">
          <span class="chip">${icon('clock')}${s.minutes} min</span>
          <span class="chip">${icon('list')}${s.activities.length} ${s.activities.length === 1 ? 'activity' : 'activities'}</span>
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
  const label = started ? `Continue: ${esc(n.a.short)}` : `Start ${esc(stageName(n.s))}`;
  return `<a class="btn${big ? ' btn-big' : ''}" href="${L(n.s.id)}" data-go="${n.a.id}">${label} ${icon('arrow')}</a>`;
}
function overview() {
  const n = nextUp(), done = coreActivities.filter(a => state.done[a.id]).length;
  return `<section class="hero">
    <div class="hero-copy">
      <span class="eyebrow">Week ${lesson.week} · Day ${lesson.day} · ${esc(lesson.duration || 'About 4 hours')}</span>
      <h1>${esc(lesson.title)}</h1>
      <p class="hero-lead">${esc(lesson.journey)}</p>
      <div class="hero-actions">${continueButton(true)}${done && n ? `<span class="hero-progress"><b>${done} of ${coreActivities.length}</b> activities finished · next: ${esc(stageName(n.s))}</span>` : ''}</div>
    </div>
    ${(() => { const wk = course.weeks.find(w => w.n === lesson.week) || {}; return `<figure class="hero-img"><img src="${esc(lesson.image || wk.image || 'assets/food-editorial.webp')}" width="1400" height="933" alt="${esc(lesson.imageAlt || wk.imageAlt || 'An imperfect tomato, a carrot, a cut orange and grains on a plate — edible food that is often thrown away.')}"></figure>`; })()}
  </section>
  <section class="essay-q essay-q-hero">
    <span class="essay-q-label">${esc(lesson.questionLabel || 'This week’s essay question · you write it on Monday')}</span>
    <blockquote>${esc(lesson.question)}</blockquote>
  </section>
  <h2 class="section-title">Your day at a glance</h2>
  <p class="section-sub">${['Two', 'Three', 'Four', 'Five', 'Six'][lesson.sections.length - 2] || lesson.sections.length} stages${lesson.duration ? '' : ', about four hours'}. ${lesson.goalShort ? `Each one prepares you for ${esc(lesson.goalShort)}.` : lesson.id === 'w2d5' ? 'Each one prepares you for Monday’s essay.' : 'Each stage builds on the one before.'}</p>
  <div class="dayline" role="img" aria-label="${lesson.sections.map(s => `${stageName(s)}, ${s.minutes} minutes`).join('; ')}; then: ${esc(lesson.finish?.title || 'Monday')}.">
    ${lesson.sections.map(s => { const d = s.activities.filter(a => state.done[a.id]).length; return `<a class="dayline-seg${d === s.activities.length ? ' complete' : ''}" style="${tone(s)};flex:${s.minutes}" href="${L(s.id)}"><span class="dayline-bar"><i style="width:${Math.round(100 * d / s.activities.length)}%"></i></span><span class="dayline-num">${esc(code(s))}</span><span class="dayline-title">${esc(s.title)}</span><span class="dayline-min">${s.minutes} min</span></a>`; }).join('')}
    ${(() => { const nx = nextLesson(), inner = `<span class="dayline-bar"></span><span class="dayline-num">${icon(nx ? 'arrow' : 'pen')}</span><span class="dayline-title">${esc(lesson.finish?.title || 'Monday')}</span><span class="dayline-min">${esc(lesson.finish?.text || 'Write the essay')}</span>`;
      return nx ? `<a class="dayline-flag" href="#/${nx.id}" title="Open Week ${nx.week}, Day ${nx.day}">${inner}</a>` : `<div class="dayline-flag">${inner}</div>`; })()}
  </div>
  <ol class="journey">${lesson.sections.map(s => { const d = s.activities.filter(a => state.done[a.id]).length; return `<li><a class="journey-card${d === s.activities.length ? ' complete' : ''}" style="${tone(s)}" href="${L(s.id)}">
      <span class="journey-art-wrap"><img class="journey-art" src="${artSrc(s.art)}" alt="" width="220" height="170" loading="lazy"></span>
      <span class="journey-body">
        <span class="journey-top"><span class="journey-num">${esc(code(s))}</span><span class="journey-sub">${esc(s.subtitle || '')}</span></span>
        <b class="journey-title">${esc(s.title)}</b>
        <span class="journey-text">${esc(s.outcome)}</span>
        <span class="journey-foot"><span class="journey-time">${icon('clock')}${s.minutes} min · ${s.activities.length} ${s.activities.length === 1 ? 'activity' : 'activities'}</span>${d === s.activities.length ? `<span class="journey-done">${icon('check')}Complete</span>` : d ? `<span class="journey-part">${d}/${s.activities.length} done</span>` : ''}<span class="journey-go">${icon('arrow')}</span></span>
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
    
    <rect width="1000" height="290" fill="#f7f1e3"/>
    <circle cx="620" cy="52" r="26" fill="#f6dfae"/><circle cx="620" cy="52" r="40" fill="#f6dfae" opacity=".35"/>
    <path d="M120 52q6-6 12 0q6-6 12 0M168 74q4-4 8 0q4-4 8 0M560 40q5-5 10 0q5-5 10 0" stroke="#7d8b95" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M0 150C120 108 230 130 340 116S560 72 700 92 880 52 1000 66V290H0Z" fill="#ece3cf"/>
    <path d="M0 200C150 176 300 208 470 188S760 158 1000 172V290H0Z" fill="#e2ebd8"/>
    <path d="M40 262c90-10 190-6 300-14m140 22c120-12 260-18 420-30M600 252c90-6 180-14 300-18" stroke="#cfdcc2" stroke-width="2" fill="none" stroke-linecap="round"/>
    ${tree(200, 132)}${tree(220, 138, .8)}${tree(420, 120, .9)}${tree(640, 100)}${tree(662, 106, .75)}${tree(964, 214, .9)}${tree(40, 160, .8)}${tree(984, 220, .7)}
    <path d="${road}" stroke="#fffdf5" stroke-width="16" fill="none" stroke-linecap="round"/>
    <path d="${road}" stroke="#14293a" stroke-opacity=".35" stroke-width="2.4" stroke-dasharray="2 9" fill="none" stroke-linecap="round"/>
    ${course.map.map((w, i) => { const [x, y] = pts[i] || pts[pts.length - 1], st = w.n < current ? 'past' : w.n === current ? 'now' : 'next', last = i === course.map.length - 1;
      const has = course.weeks.some(cw => cw.n === w.n);
      return `<g class="cm-stop cm-${st}${has ? ' cm-link' : ''}" transform="translate(${x} ${y})"${has ? ` data-week-tab="${w.n}" role="button" tabindex="0" aria-label="Show Week ${w.n} lessons"` : ''}>
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
      ${d.parts ? `<ul class="day-parts">${d.parts.map((_, k) => { const p = dayPart(d, k); return `<li${p.tone ? ` class="has-code" style="${tone(p)}"` : ''}>${p.tone ? `<span class="part-code">${esc(p.code)}</span>` : ''}${esc(p.tone ? p.name : d.parts[k])}</li>`; }).join('')}</ul>` : ''}
    </li>`;
  const pct = total ? Math.round(100 * done / total) : 0;
  return `<li class="day-card is-ready${pct === 100 ? ' complete' : ''}"><a href="#/${d.id}">
      <span class="day-art"><img src="${artSrc(d.art || 'writing')}" alt="" width="220" height="170" loading="lazy"></span>
      <span class="day-label">Day ${d.day}${pct === 100 ? `<span class="day-done">${icon('check')}Complete</span>` : done ? `<span class="day-now">In progress</span>` : '<span class="day-open">Open</span>'}</span>
      <b class="day-title">${esc(d.title)}</b>
      ${d.parts ? `<ul class="day-parts">${d.parts.map((_, k) => { const p = dayPart(d, k); return `<li${p.tone ? ` class="has-code" style="${tone(p)}"` : ''}>${p.tone ? `<span class="part-code">${esc(p.code)}</span>` : ''}${esc(p.tone ? p.name : d.parts[k])}</li>`; }).join('')}</ul>` : ''}
      <span class="day-meter" aria-label="${done} of ${total} activities finished"><i style="width:${pct}%"></i></span>
      <span class="day-foot"><span>${total ? `${done} / ${total} activities` : 'Not started'}</span><span class="day-go">${done && pct < 100 ? 'Continue' : pct === 100 ? 'Review' : 'Start'} ${icon('arrow')}</span></span>
    </a></li>`;
}
/* One week at a time on the course map: with 5 weeks × 5 days the page would be very long.
   The open week is remembered for this visit; the "You are here" week opens first. */
let homeWeek = null;
function weekTabs() {
  const ws = course.weeks;
  if (!ws.some(w => w.n === homeWeek)) homeWeek = (ws.find(w => w.n === lesson.week) || ws[ws.length - 1]).n;
  const w = ws.find(x => x.n === homeWeek);
  const tabs = ws.length > 1 ? `<div class="week-tabs" role="tablist" aria-label="Weeks">${ws.map(x => { const st = x.days.filter(d => d.status === 'ready').length, done = x.days.filter(d => { const [a, b] = dayProgress(d); return b && a === b; }).length;
    return `<button type="button" role="tab" id="tab-week-${x.n}" aria-controls="panel-week" aria-selected="${x.n === homeWeek}" tabindex="${x.n === homeWeek ? 0 : -1}" class="week-tab" data-week-tab="${x.n}"><span class="week-tab-num">${x.n}</span><span class="week-tab-text"><b>Week ${x.n}</b><small>${esc(x.theme)}</small></span><span class="week-tab-meta">${done ? `${done}/${st} done` : `${st} lesson${st === 1 ? '' : 's'}`}</span></button>`; }).join('')}</div>` : '';
  return `<section class="week" aria-label="Lessons by week">${tabs}
    <div class="week-panel" id="panel-week" role="tabpanel" aria-labelledby="tab-week-${w.n}">
      <header class="week-head"><span class="week-num"><small>Week</small>${w.n}</span><div><h2>${esc(w.theme)}</h2><p>${esc(w.summary || '')}</p></div></header>
      <ol class="day-grid${w.days.length > 3 ? ' many' : ''}">${w.days.map(dayCard).join('')}</ol>
    </div></section>`;
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
        <p>${n ? `Next: <b>${esc(stageName(n.s))}</b> — ${esc(n.a.title)}` : 'You finished every activity. Review your notebook before you write.'}</p>
        <div class="resume-bar"><span class="resume-meter"><i style="width:${pct}%"></i></span><span>${done} of ${coreActivities.length} activities</span></div>
      </div>
      <div class="resume-actions">${continueButton(true)}<a class="btn-quiet" href="${L('overview')}">Lesson overview</a></div>
    </section>
    ${weekTabs()}`;
}
/* page header with a small vector picture on the right (Source library, Extra activities) */
const pageHero = (eyebrow, title, text, art, extra = '') => `<header class="page-head page-hero"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${text}</p>${extra}</div><img class="page-hero-art" src="assets/art/${art}.svg" alt="" width="440" height="340"></header>`;
function srcLook(s) {   // the picture, colour and reading time of a course text
  const k = s.kind.toLowerCase(), words = s.paragraphs.join(' ').split(/\s+/).length;
  const [art, tone, verb, rate] = k.includes('listening') ? ['listening', 'teal', 'listen', 150] : k.includes('discussion') ? ['discussion', 'plum', 'listen', 150] : ['reading', k.includes('mediation') ? 'blue' : 'amber', 'read', 200];
  const marks = Object.entries(state.marks || {}).filter(([id, rs]) => id.startsWith('s-' + s.id + '-') && rs?.length).reduce((n, [, rs]) => n + rs.length, 0);
  return { art, tone, time: `About ${Math.max(1, Math.round(words / rate))} min read`, marks };
}
function sourcesPage() {
  return `${pageHero('Course texts', 'Source library', 'The protected course texts for this week. Open a text to read it, then highlight and underline the ideas you need.', 'library',
    `<p class="page-hero-tip">${icon('bulb')}<span>Your highlights are saved and also appear in <a href="${L('notebook')}">My notebook</a>.</span></p>`)}
  <div class="library">${sources.map((s, i) => { const l = srcLook(s); return `<article class="lib-card" style="${tone({ tone: l.tone })};--i:${i}">
    <button class="lib-art" data-source="${s.id}" aria-label="Open ${esc(s.title)}" tabindex="-1"><img src="${artSrc(l.art)}" alt="" width="440" height="340" loading="lazy"></button>
    <div class="lib-body"><span class="pill">${esc(s.kind)}</span><h2>${esc(s.title)}</h2><p>${esc(s.cite)}</p>
    <div class="lib-meta"><span>${icon('clock')}${l.time}</span>${l.marks ? `<span class="lib-marks">${icon('pen')}${l.marks} mark${l.marks > 1 ? 's' : ''}</span>` : ''}</div>
    <button class="btn" data-source="${s.id}">Open and read ${icon('arrow')}</button></div></article>`; }).join('')}</div>`;
}
function extrasPage() {
  const n = lesson.extras.length, mins = lesson.extras.reduce((t, a) => t + (a.minutes || 0), 0), dn = lesson.extras.filter(a => state.done[a.id]).length;
  return `${pageHero('Optional · independent practice', 'Extra activities', 'Practice at home, at your own pace. These are <b>not</b> part of the four-hour lesson.', 'practice',
    n ? `<div class="page-hero-stats"><span><b>${n}</b> activit${n > 1 ? 'ies' : 'y'}</span>${mins ? `<span><b>${mins}</b> min in total</span>` : ''}<span><b>${dn}</b> finished</span></div>` : '')}
  ${n ? `<nav class="extra-jump" aria-label="Extra activities">${lesson.extras.map((a, i) => `<button type="button" data-scroll="${esc(a.id)}" class="${state.done[a.id] ? 'is-done' : ''}"><i>${state.done[a.id] ? icon('check') : i + 1}</i>${esc(a.short || a.title)}</button>`).join('')}</nav>` : ''}
  ${lesson.extras.map((a, i) => activity(a, i, lesson.extras, null)).join('')}`;
}
function registerTables() {
  allActivities.forEach(a => (a._tables || []).forEach(b => { for (let r = 0; r < tableRows(b); r++) b.columns.forEach((c, ci) => { const k = `${b.id}-${r}-${ci}`; labels[k] = tableLabel(b, r, ci); owner[k] = a.id; }); }));
}
function notebook() {
  return `${nb.pageHTML()}<div class="nb-foot"><button class="btn-quiet danger" data-clear>Clear my work on this device</button></div>`;
}

/* ───────── side panel: the whole course; the open lesson is expanded ─────────
   Weeks fold open and closed (remembered on this device). The search box finds lessons, parts
   of lessons, and the stages and activities of the open lesson. */
const navOpen = (() => { try { return JSON.parse(localStorage.getItem('dec15-nav-weeks')) || {}; } catch (e) { return {}; } })();
let navRoute = 'home';
/* Progress ring around a day number. */
function ring(p, n, done) {
  const c = 2 * Math.PI * 16;
  return `<span class="nav-ring${done ? ' is-done' : ''}" aria-hidden="true"><svg viewBox="0 0 38 38"><circle cx="19" cy="19" r="16"/><circle cx="19" cy="19" r="16" style="stroke-dasharray:${c.toFixed(1)};stroke-dashoffset:${(c * (1 - p)).toFixed(1)}"/></svg>${done ? icon('check') : `<b>${n}</b>`}</span>`;
}
function dayProgress(d) {
  if (d.id === lesson.id) return [coreActivities.filter(a => state.done[a.id]).length, coreActivities.length];
  const x = summaries()[d.id] || {}; return [x.done || 0, x.total || 0];
}
/* What slides open under a day: its start page, its stages (with progress for the open lesson),
   and — for the open lesson — Readings, Extra and Notebook. */
function dayContents(d, route) {
  const here = d.id === lesson.id, cur = r => here && route === r ? ' active" aria-current="page' : '';
  let i = 0; const stagger = () => ` style="--i:${i++}"`;
  const start = `<li${stagger()}><a href="${here ? L('overview') : '#/' + d.id}" class="nav-part nav-start${cur('overview')}"><span class="nav-pnum">${icon('map')}</span><span class="nav-ptext">${here ? 'Overview' : 'Open Day ' + d.day}<small>${here ? 'Start of the day' : 'Start of the day'}</small></span></a></li>`;
  const stages = here
    ? lesson.sections.map(s => { const dn = s.activities.filter(a => state.done[a.id]).length, all = dn === s.activities.length;
        return `<li${stagger()}><a href="${L(s.id)}" class="nav-part is-stage${all ? ' complete' : ''}${cur(s.id)}" style="${tone(s)}"><span class="nav-pnum">${all ? icon('check') : esc(navCode(code(s)))}</span><span class="nav-ptext"><span class="nav-pname" title="${esc(s.title)}">${esc(s.title)}</span><small>${s.minutes} min<i class="nav-bar" style="--p:${dn / s.activities.length}" aria-label="${dn} of ${s.activities.length} done"></i></small></span></a></li>`; }).join('')
    : (d.parts || []).map((pt, k) => { const p = dayPart(d, k); return `<li${stagger()}><a href="#/${d.id}${d.stages?.[k] ? '/' + d.stages[k] : ''}" class="nav-part${p.tone ? ' is-stage' : ''}"${p.tone ? ` style="${tone(p)}"` : ''}><span class="nav-pnum">${esc(navCode(p.code))}</span><span class="nav-ptext"><span class="nav-pname" title="${esc(p.name)}">${esc(p.name)}</span></span></a></li>`; }).join('');
  const tools = here ? `<li class="nav-tools"${stagger()}>${[['sources', 'book', 'Readings'], ['extra', 'list', 'Extra'], ['notebook', 'model', 'Notebook']].map(([id, ic, t]) => `<a href="${L(id)}" class="nav-tool${cur(id)}">${icon(ic)}<span>${t}</span></a>`).join('')}</li>` : '';
  return `<ol class="nav-parts">${start}${stages}${tools}</ol>`;
}
const navDayOpen = {};   // which days are slid open in this visit (the open lesson starts open)
const foldAttrs = open => open ? '' : ' inert';
function paintNav(route = navRoute) {
  navRoute = route;
  $('#side-home').classList.toggle('active', route === 'home');
  if (route === 'home') $('#side-home').setAttribute('aria-current', 'page'); else $('#side-home').removeAttribute('aria-current');
  $('#nav').innerHTML = course.weeks.map(w => {
    const open = navOpen[w.n] ?? (w.n === lesson.week), started = w.days.filter(d => dayProgress(d)[0]).length;
    return `<section class="nav-week${open ? ' open' : ''}">
      <button type="button" class="nav-week-head" data-nav-week="${w.n}" aria-expanded="${open}" aria-controls="nav-w${w.n}">
        <span class="nav-week-num"><small>Week</small>${w.n}</span>
        <span class="nav-week-text">Week ${w.n}<small>${esc(w.theme)}</small></span>
        ${started ? `<span class="nav-week-count" title="${started} of ${w.days.length} lessons started">${started}/${w.days.length}</span>` : ''}
        <span class="nav-chev" aria-hidden="true"></span></button>
      <div class="fold" id="nav-w${w.n}"><div class="fold-inner"${foldAttrs(open)}>
      <ol class="nav-days">${w.days.map(d => {
        if (d.status !== 'ready') return `<li class="nav-dayitem is-soon"><div class="nav-day">${ring(0, d.day)}<span class="nav-day-text"><span class="nav-day-eyebrow">Day ${d.day} · Coming soon</span><b>${esc(d.title)}</b></span></div></li>`;
        const here = d.id === lesson.id, [dn, tot] = dayProgress(d), p = tot ? dn / tot : 0, dopen = navDayOpen[d.id] ?? here;
        return `<li class="nav-dayitem${here ? ' here' : ''}${dopen ? ' open' : ''}">
          <button type="button" class="nav-day" data-nav-day="${d.id}" aria-expanded="${dopen}" aria-controls="nav-${d.id}">
            ${ring(p, d.day, tot && p === 1)}
            <span class="nav-day-text"><span class="nav-day-eyebrow">Day ${d.day}${here ? '<em>You are here</em>' : ''}</span><b>${esc(d.title)}</b><small>${tot ? `${dn} of ${tot} activities done` : 'Not started yet'}</small></span>
            <span class="nav-chev" aria-hidden="true"></span></button>
          <div class="fold" id="nav-${d.id}"><div class="fold-inner"${foldAttrs(dopen)}>${dayContents(d, route)}</div></div>
        </li>`;
      }).join('')}</ol></div></div></section>`;
  }).join('');
}
/* Slide a fold open or closed (CSS animates the height). */
function setFold(item, btn, open) {
  item.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open));
  const inner = item.querySelector(':scope > .fold > .fold-inner'); if (open) inner.removeAttribute('inert'); else inner.setAttribute('inert', '');
}
/* search */
const plainCache = new Map();
function plainText(a) {   // all the words inside an activity, without code, for search
  if (!plainCache.has(a.id)) { const out = []; const walk = v => { if (typeof v === 'string') out.push(v); else if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object' && v.type !== 'teacher') Object.entries(v).forEach(([k, x]) => { if (!/^(id|type|tone|icon|src|size|who|answer|answers|back|backTitle|why|art|alt|correct|solution)$/.test(k)) walk(x); }); };
    walk(a.blocks || []); walk(a.goal || ''); plainCache.set(a.id, out.join(' ').replace(/<[^>]+>/g, '').replace(/\{\{\d+\}\}/g, '…').replace(/\s+/g, ' ')); }
  return plainCache.get(a.id);
}
let searchCache = null;
function searchIndex() {
  if (searchCache) return searchCache;
  const items = [];
  for (const w of course.weeks) for (const d of w.days) {
    const where = `Week ${w.n} · Day ${d.day}`, href = d.status === 'ready' ? '#/' + d.id : '';
    items.push({ kind: 'Lesson', ic: 'map', title: d.title, sub: where + (href ? '' : ' · coming soon'), href, text: d.title });
    if (d.id !== lesson.id) (d.parts || []).forEach(pt => items.push({ kind: 'Part', ic: 'list', title: pt, sub: where + ' · ' + d.title, href, text: pt }));
  }
  lesson.sections.forEach(s => {
    items.push({ kind: 'Stage', ic: 'flag', title: stageName(s), sub: `This lesson · Teacher’s Book ${code(s)}`, href: L(s.id), text: stageName(s) + ' ' + (s.subtitle || '') });
    s.activities.forEach(a => items.push({ kind: 'Activity', ic: 'pen', title: a.title, sub: `This lesson · ${s.title}`, href: L(s.id), go: a.id, text: a.title + ' ' + a.short, body: plainText(a) }));
  });
  [['sources', 'book', 'Readings and source library'], ['extra', 'list', 'Extra activities'], ['notebook', 'model', 'My notebook']].forEach(([id, ic, t]) => items.push({ kind: 'Page', ic, title: t, sub: 'This lesson', href: L(id), text: t }));
  items.push({ kind: 'Page', ic: 'home', title: 'Course map', sub: 'All weeks', href: '#/', text: 'course map home all weeks' });
  lesson.glossary.forEach(([w, d]) => items.push({ kind: 'Word meaning', ic: 'book', title: w, sub: d, gloss: w, text: w }));
  return (searchCache = items);
}
const reEsc = w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function searchResults(q) {
  const words = q.toLowerCase().split(/\s+/).filter(Boolean), has = t => words.every(w => t.toLowerCase().includes(w));
  const hits = searchIndex().map(it => ({ it, rank: has(it.title) ? 3 : has(it.text + ' ' + it.sub) ? 2 : it.body && has(it.body) ? 1 : 0 })).filter(h => h.rank)
    .sort((x, y) => y.rank - x.rank).slice(0, 16);
  const mark = t => { let h = esc(t); words.forEach(w => { h = h.replace(new RegExp('(' + reEsc(esc(w)) + ')', 'gi'), '<mark>$1</mark>'); }); return h; };
  const snip = t => { const i = t.toLowerCase().indexOf(words[0]); const a = Math.max(0, i - 34); return (a ? '…' : '') + t.slice(a, i + 70).trim() + '…'; };
  if (!hits.length) return `<p class="search-none">Nothing matches “${esc(q)}”. Try one word, for example <i>essay</i>, <i>listening</i> or <i>food banks</i>.</p>`;
  return `<ul class="search-list" aria-label="Search results">${hits.map(({ it, rank }, i) => {
    const sub = rank === 1 ? `<small class="search-snip">${mark(snip(it.body))}</small><small>${esc(it.kind)} · ${esc(it.title)}</small>` : `<small>${esc(it.kind)} · ${esc(it.gloss ? it.sub.slice(0, 70) + (it.sub.length > 70 ? '…' : '') : it.sub)}</small>`;
    const inner = `<span class="search-ic">${icon(it.ic)}</span><span class="search-text"><b>${mark(rank === 1 ? it.title : it.title)}</b>${sub}</span>`;
    return `<li>${it.gloss ? `<button type="button" class="search-hit${i ? '' : ' first'}" data-gloss="${esc(it.gloss)}">${inner}</button>` : it.href ? `<a class="search-hit${i ? '' : ' first'}" href="${it.href}"${it.go ? ` data-go="${it.go}"` : ''}>${inner}</a>` : `<span class="search-hit is-soon">${inner}</span>`}</li>`; }).join('')}</ul>`;
}
function runSearch() {
  const q = $('#side-search').value.trim(), box = $('#side-results');
  box.hidden = !q; $('#nav').hidden = !!q; $('#side-home').hidden = !!q;
  box.innerHTML = q ? searchResults(q) : '';
}
function setSide(open) {
  document.body.classList.toggle('side-open', open);
  $('#menu-btn')?.setAttribute('aria-expanded', String(open));
  if (open) setTimeout(() => $('#side-search')?.focus({ preventScroll: true }), 220);
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
  paintNav(route);
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
  const cm = $('.course-map'), here = $('.cm-now');
  if (cm && here && cm.scrollWidth > cm.clientWidth) { const r = here.getBoundingClientRect(), c = cm.getBoundingClientRect(); cm.scrollLeft += r.left - c.left - c.width / 2 + r.width / 2; }
  const tabs = $('.act-tabs'), cur = $('.act-tabs .current'); if (tabs && cur) tabs.scrollLeft = cur.offsetLeft - tabs.offsetLeft - 12;
  reader.mount();
  requestAnimationFrame(revealBlocks);
}
function rerender() { const y = window.scrollY; render(); window.scrollTo(0, y); }
/* Blocks fade up gently the first time they scroll into view (once per visit; never on re-render). */
const seenBlocks = new Set();
const revealIO = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); seenBlocks.add(e.target.dataset.rk); revealIO.unobserve(e.target); } }), { rootMargin: '0px 0px -40px 0px' }) : null;
// safety net: a fast jump (End key, a link) can skip blocks without the observer seeing them
let revealTick = 0;
addEventListener('scroll', () => { if (revealTick) return; revealTick = requestAnimationFrame(() => { revealTick = 0;
  document.querySelectorAll('.reveal:not(.in)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) { el.classList.add('in'); seenBlocks.add(el.dataset.rk); revealIO?.unobserve(el); } }); }); }, { passive: true });
function revealBlocks() {
  if (!revealIO || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.activity').forEach(act => [...act.querySelectorAll(':scope > .act-body > *, :scope > .answers, :scope > .wall')].forEach((el, i) => {
    const k = act.id + ':' + i; el.dataset.rk = k; if (seenBlocks.has(k)) return;
    const r = el.getBoundingClientRect(); if (r.top < innerHeight - 40) { seenBlocks.add(k); return; }
    el.classList.add('reveal'); revealIO.observe(el); }));
}

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
function filterGlossary(q) {
  q = String(q || '').trim().toLowerCase(); let n = 0;
  document.querySelectorAll('.glossary-word').forEach(el => { const on = !q || el.dataset.g.includes(q); el.hidden = !on; n += on; });
  const none = $('.gloss-none'); if (none) none.hidden = n > 0;
}
document.addEventListener('input', e => { if (e.target.matches('[data-gloss-find]')) filterGlossary(e.target.value); });
function glossary(find = '') {
  reader.closeWord();
  $('#resource-title').textContent = 'Word meanings';
  $('#resource-body').innerHTML = `<div class="glossary-top"><label class="gloss-find">${icon('search')}<input type="search" placeholder="Find a word (${lesson.glossary.length} words)" aria-label="Find a word" data-gloss-find value="${esc(find)}"></label><button class="btn" data-word-game>Play the word game</button></div>
    <div class="glossary-grid">${[...lesson.glossary].sort((a, b) => a[0].localeCompare(b[0])).map(([w, d, c]) => `<div class="glossary-word" data-g="${esc((w + ' ' + d).toLowerCase())}"><b>${esc(w)}</b><p>${esc(d)}</p>${c ? `<small>${esc(c)}</small>` : ''}</div>`).join('')}</div>
    <p class="gloss-none" hidden>No word matches. Try the first letters of the word.</p>`;
  filterGlossary(find);
  if (!$('#resource-dialog').open) $('#resource-dialog').showModal();
}

/* ───────── notebook exports ───────── */
const nb = window.createDEC15Notebook({ lesson, getState: () => state, planParts, tableRows, reader, esc, strip, toast, person: () => cloudInfo.profile?.full_name || '', extraItems: b => play ? play.notebookItems(b) : [] });
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
function accountDialog(mode = cloudInfo.user ? 'account' : 'signin', msg = '', keep = {}) {
  const val = k => keep[k] ? ` value="${esc(keep[k])}"` : '';
  $('#resource-title').textContent = mode === 'account' ? 'Your account' : 'Save your work online';
  const p = cloudInfo.profile || {};
  $('#resource-body').innerHTML = mode === 'account' ? `<div class="acct">
      <div class="acct-card"><span class="avatar avatar-lg">${esc((p.full_name || cloudInfo.user?.email || '?').slice(0, 1).toUpperCase())}</span><div><b>${esc(p.full_name || 'Student')}</b><span>${esc(cloudInfo.user?.email || '')}${p.student_id ? ' · ' + esc(p.student_id) : ''}</span></div></div>
      <p class="acct-note">${icon('check')} Your answers, tables, plan and highlights are saved online. Sign in on any computer to continue where you stopped.</p>
      <button class="btn-quiet" data-signout>Sign out</button></div>`
    : `<form class="acct-form" data-auth="${mode}" novalidate>
      ${mode !== 'reset' ? '<img class="acct-art" src="assets/art/sync.svg" alt="" width="360" height="200">' : ''}
      <p class="acct-intro">${mode === 'signup' ? 'Create an account once. Then your work is saved online and appears on any device where you sign in.' : mode === 'reset' ? 'Enter your email. We will send you a link to choose a new password.' : 'Sign in so your work is saved online — not only on this device.'}</p>
      ${mode === 'signup' ? `<label>Full name<input name="name" autocomplete="name" required${val('name')}></label><label>Student ID <small>(optional)</small><input name="sid" inputmode="numeric" autocomplete="off"${val('sid')}></label>` : ''}
      <label>Email<input name="email" type="email" autocomplete="email" autocapitalize="off" spellcheck="false" required${val('email')}></label>
      ${mode !== 'reset' ? `<label>Password${mode === 'signup' ? ' <small>(at least 6 characters)</small>' : ''}<span class="pw-wrap"><input name="password" type="password" autocomplete="${mode === 'signup' ? 'new-password' : 'current-password'}" minlength="6" required${val('password')}><button type="button" class="pw-show" data-pw-show aria-pressed="false">Show</button></span></label>` : ''}
      ${msg ? `<p class="acct-msg" role="alert">${msg}</p>` : ''}
      <button class="btn" type="submit">${mode === 'signup' ? 'Create account' : mode === 'reset' ? 'Send reset link' : 'Sign in'}</button>
      <p class="acct-switch">${mode === 'signin' ? `New here? <button type="button" class="text-link" data-auth-mode="signup">Create an account</button> · <button type="button" class="text-link" data-auth-mode="reset">Forgot password?</button>` : `Already have an account? <button type="button" class="text-link" data-auth-mode="signin">Sign in</button>`}</p>
    </form>`;
  if (!$('#resource-dialog').open) $('#resource-dialog').showModal();
  const first = keep.email ? $('#resource-body input[name=password]') : $('#resource-body input'); first?.focus();
}
const EMAIL_LIMIT_MSG = 'Your account was <b>not</b> created yet: the sign-up email service is busy because many students joined at the same time. This is not your mistake. Please tell your teacher, or try again later. You can keep working — your answers are saved on this device.';
/* Check the form before asking the server, so a typing mistake never uses up an attempt. */
function checkAuthForm(mode, v) {
  if (mode === 'signup' && !v.name) return 'Please write your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) return 'Please check your email address — it should look like name@example.com.';
  if (mode !== 'reset' && v.password.length < 6) return mode === 'signup' ? 'Choose a password with at least 6 characters.' : 'Please type your password.';
  return '';
}
/* Toggles slide open and closed instead of jumping: the box grows from its old height to its new one. */
const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
function slideHeight(el, from, to, done) {
  if (calm() || !el.animate || Math.abs(to - from) < 2) { done?.(); return; }
  el.style.overflow = 'hidden';
  const an = el.animate([{ height: from + 'px' }, { height: to + 'px' }], { duration: Math.min(520, 240 + Math.abs(to - from) * .35), easing: 'cubic-bezier(.22, .8, .24, 1)' });
  an.onfinish = an.oncancel = () => { el.style.overflow = ''; done?.(); };
}
function morph(id, change) {   // re-draw the page, then let the box with this id slide to its new size
  const before = document.getElementById(id)?.offsetHeight; change();
  const el = document.getElementById(id); if (el && before) slideHeight(el, before, el.offsetHeight);
}
document.addEventListener('click', e => {   // every <details> (page guide, notebook sections) slides
  const sum = e.target.closest('summary'); const det = sum?.parentElement;
  if (!det || det.tagName !== 'DETAILS' || calm() || det.dataset.sliding) return;
  e.preventDefault(); det.dataset.sliding = '1';
  const from = det.offsetHeight;
  if (!det.open) { det.open = true; det.classList.add('is-opening'); slideHeight(det, from, det.offsetHeight, () => { det.classList.remove('is-opening'); delete det.dataset.sliding; }); }
  else { det.open = false; const to = det.offsetHeight; det.open = true; det.classList.add('is-closing'); slideHeight(det, from, to, () => { det.open = false; det.classList.remove('is-closing'); delete det.dataset.sliding; }); }
});
document.addEventListener('dec15:celebrate', e => { if (e.detail && !calm()) play?.confetti?.(e.detail); });
/* a quiet "back to top" button on long pages */
const topBtn = document.createElement('button');
topBtn.type = 'button'; topBtn.className = 'to-top'; topBtn.setAttribute('aria-label', 'Back to the top of the page'); topBtn.innerHTML = icon('up');
topBtn.onclick = () => { window.scrollTo({ top: 0, behavior: calm() ? 'auto' : 'smooth' }); $('#main')?.focus({ preventScroll: true }); };
document.body.append(topBtn);
let topTick = 0;
addEventListener('scroll', () => { if (topTick) return; topTick = requestAnimationFrame(() => { topTick = 0; topBtn.classList.toggle('show', scrollY > innerHeight * 1.4);
  const h = document.documentElement.scrollHeight - innerHeight; document.body.style.setProperty('--read', h > 0 ? Math.min(1, scrollY / h).toFixed(3) : 0); }); }, { passive: true });
/* side panel: a long lesson name glides sideways on hover or focus, so it can be read in full */
function glide(e, on) {
  const n = e.target.closest?.('#nav .nav-part')?.querySelector('.nav-pname'); if (!n) return;
  const over = n.scrollWidth - n.clientWidth;
  if (on && over > 2) { n.style.setProperty('--shift', -(over + 6) + 'px'); n.style.setProperty('--dur', Math.min(2.6, .5 + over / 60) + 's'); n.classList.add('gliding'); }
  else if (!on) n.classList.remove('gliding');
}
['mouseover', 'focusin'].forEach(t => document.addEventListener(t, e => glide(e, true)));
['mouseout', 'focusout'].forEach(t => document.addEventListener(t, e => { if (!e.relatedTarget || !e.target.closest?.('.nav-part')?.contains(e.relatedTarget)) glide(e, false); }));
/* tap a diagram to see it full size — useful on phones, where wide diagrams are small */
function closeZoom() { const z = document.querySelector('.zoom'); if (z) z.remove(); }
document.addEventListener('click', e => {
  if (e.target.closest('.zoom')) { closeZoom(); return; }
  const img = e.target.closest('figure.figure img'); if (!img) return;
  const z = document.createElement('div');
  z.className = 'zoom'; z.setAttribute('role', 'dialog'); z.setAttribute('aria-label', 'Enlarged picture. Tap to close.');
  z.innerHTML = `<button class="zoom-x" type="button" aria-label="Close">×</button><div class="zoom-in"><img src="${esc(img.getAttribute('src'))}" alt="${esc(img.alt)}"></div>`;
  document.body.append(z); z.querySelector('.zoom-x').focus();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeZoom(); });
window.addEventListener('hashchange', closeZoom);
document.addEventListener('click', e => {
  const b = e.target.closest('[data-pw-show]'); if (!b) return;
  const inp = b.previousElementSibling, show = inp.type === 'password';
  inp.type = show ? 'text' : 'password'; b.textContent = show ? 'Hide' : 'Show'; b.setAttribute('aria-pressed', String(show)); inp.focus();
});
document.addEventListener('submit', async e => {
  const f = e.target.closest('[data-auth]'); if (!f) return;
  e.preventDefault();
  const fd = new FormData(f), mode = f.dataset.auth, btn = f.querySelector('[type=submit]');
  if (btn.disabled) return;   // one request at a time — double clicks used to send two
  const v = { email: String(fd.get('email') || '').trim().toLowerCase(), password: String(fd.get('password') || ''), name: String(fd.get('name') || '').trim(), sid: String(fd.get('sid') || '').trim() };
  const keep = { ...v, password: mode === 'signin' ? '' : v.password };
  const bad = checkAuthForm(mode, v); if (bad) return accountDialog(mode, esc(bad), keep);
  btn.disabled = true; btn.textContent = 'Please wait…';
  let err;
  if (mode === 'signin') err = await cloud.signIn(v.email, v.password);
  if (mode === 'signup') err = await cloud.signUp(v.email, v.password, v.name, v.sid);
  if (mode === 'reset') err = (await cloud.resetPassword(v.email)) || 'SENT';
  if (err === 'CHECK_EMAIL') return accountDialog('signin', 'Account created. Open the email we sent you (check Junk/Spam too) to confirm it, then sign in here.', { email: v.email });
  if (err === 'SENT') return accountDialog('signin', 'If that email has an account, a reset link is on its way.', { email: v.email });
  if (err === 'EMAIL_LIMIT') return accountDialog(mode, EMAIL_LIMIT_MSG, keep);
  if (err && /already has an account/.test(err)) return accountDialog('signin', esc(err), { email: v.email });
  if (err) return accountDialog(mode, esc(err), keep);
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
  play?.onInput(t);
  if (t.type === 'checkbox' && t.closest('.checklist')?.querySelector('.check-meter')) rerender();
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.done) {
    state.done[t.dataset.done] = t.checked; save(); rerender();
    if (t.checked) {
      const s = lesson.sections.find(x => x.activities.some(a => a.id === t.dataset.done));
      const all = s && s.activities.every(a => state.done[a.id]);
      document.querySelector(`[data-done="${t.dataset.done}"]`)?.closest('.done-toggle')?.classList.add('pop');
      toast(all ? `${stageName(s)} complete — well done!` : 'Activity finished. Nice work.');
    }
  }
});
document.addEventListener('click', e => {
  const t = e.target.closest('button,a,[data-week-tab]'); if (!t) return;
  const d = t.dataset;
  if (play && play.onClick(t, d)) return;
  if (d.langTab) { const box = t.closest('.language'); box.querySelectorAll('[role=tab]').forEach((x, i) => { const on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; box.querySelectorAll('[role=tabpanel]')[i].hidden = !on; }); return; }
  if (d.quiz) { const k = d.quiz + '-' + d.i; state.values[k] = d.opt; delete state.checked[d.quiz]; save(); rerender(); return; }
  if (d.quizCheck) {
    const b = allActivities.flatMap(a => a.blocks).find(x => x.id === d.quizCheck);
    const missing = b.items.filter((_, i) => !val(b.id + '-' + i)).length;
    if (missing && !state.teacher) { toast(`Answer all the questions first (${missing} left).`); return; }
    state.checked[b.id] = true; save(); rerender();
    if (b.items.every((q, i) => val(b.id + '-' + i) === q.answer)) { toast('All correct — well done!'); play?.confetti(document.getElementById('quiz-' + b.id)); }
    return;
  }
  if (d.order) { const i = Number(d.from); commitOrder(d.order, i, i + Number(d.dir)); return; }
  if (d.orderCheck) { const b = orderBlock(d.orderCheck), o = orderOf(b); state.values[b.id] = o.join(','); state.checked[b.id] = true; save(); rerender();
    if (o.every((x, i) => x === i)) { toast('Perfect order — well done!'); play?.confetti(document.getElementById('order-' + b.id)); } return; }
  if (d.orderSolve) { const b = orderBlock(d.orderSolve), before = new Map(orderCards(b.id).map(el => [el.dataset.x, el.getBoundingClientRect().top]));
    state.values[b.id] = b.items.map((_, i) => i).join(','); state.checked[b.id] = true; save(); rerender();
    if (!reduceMotion()) orderCards(b.id).forEach(el => { const dy = before.get(el.dataset.x) - el.getBoundingClientRect().top; if (dy) el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.2,.7,.2,1)', delay: Number(el.dataset.x) * 40, fill: 'backwards' }); });
    return; }
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
    state.revealed[a.id] = true; save(); morph('ans-' + a.id, rerender); document.getElementById('ans-' + a.id)?.classList.add('just-opened'); return;
  }
  if (d.unlock) { state.revealed['gate-' + d.unlock] = true; save(); rerender(); return; }
  if (d.hideAnswers) { delete state.revealed[d.hideAnswers]; save(); morph('ans-' + d.hideAnswers, rerender); return; }
  if (d.addRow) { state.rows[d.addRow] = (state.rows[d.addRow] || 0) + 1; save(); rerender(); return; }
  if (d.weekTab) { homeWeek = Number(d.weekTab); rerender(); $(`#tab-week-${homeWeek}`)?.focus({ preventScroll: !t.classList.contains('week-tab') }); if (!t.classList.contains('week-tab')) $('.week')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  if (d.navWeek) { const w = Number(d.navWeek), wk = t.closest('.nav-week'), open = !wk.classList.contains('open'); navOpen[w] = open;
    try { localStorage.setItem('dec15-nav-weeks', JSON.stringify(navOpen)); } catch (e) { /* ignore */ }
    setFold(wk, t, open); return; }
  if (d.navDay) {   // one day open at a time: opening a day slides the others closed
    const item = t.closest('.nav-dayitem'), open = !item.classList.contains('open');
    if (open) document.querySelectorAll('.nav-dayitem.open').forEach(o => { if (o !== item) { navDayOpen[o.querySelector('[data-nav-day]').dataset.navDay] = false; setFold(o, o.querySelector('[data-nav-day]'), false); } });
    navDayOpen[d.navDay] = open; setFold(item, t, open);
    if (open) setTimeout(() => item.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }), 340);
    return; }
  if (t.id === 'menu-btn') { setSide(!document.body.classList.contains('side-open')); return; }
  if (t.tagName === 'A' && t.closest('.sidebar')) { setSide(false); if ($('#side-search').value) { $('#side-search').value = ''; setTimeout(runSearch); } }
  if (d.go) { const sec = lesson.sections.find(x => x.activities.some(a => a.id === d.go)); if (sec) { state.active[sec.id] = d.go; save(false); } return; }
  if (t.classList.contains('skip')) { e.preventDefault(); $('#main').focus(); return; }
  if (d.gloss) { glossary(d.gloss); return; }
  if (d.scroll) { const el = document.getElementById(d.scroll); el?.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'start' }); el?.focus({ preventScroll: true }); return; }
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
$('#side-search').addEventListener('input', runSearch);
document.addEventListener('keydown', e => {   // arrow keys move between week tabs; Enter on a map stop opens its week
  const t = e.target;
  if (t.classList?.contains('week-tab') && /^Arrow(Left|Right)$/.test(e.key)) {
    const all = [...document.querySelectorAll('.week-tab')], i = all.indexOf(t), n = all[(i + (e.key === 'ArrowRight' ? 1 : -1) + all.length) % all.length];
    n.click(); e.preventDefault();
  }
  if (t.classList?.contains('cm-link') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); t.dispatchEvent(new MouseEvent('click', { bubbles: true })); }
});
$('#side-search').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); $('#side-results .search-hit.first')?.click(); }
  if (e.key === 'Escape') { e.target.value = ''; runSearch(); }
});
$('#scrim').onclick = () => setSide(false);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.body.classList.contains('side-open')) setSide(false);
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || '') || document.activeElement?.isContentEditable;
  if (e.key === '/' && !e.ctrlKey && !e.metaKey && !typing && !$('#resource-dialog').open) {
    e.preventDefault(); if (matchMedia('(max-width: 900px)').matches) setSide(true); else $('#side-search').focus();
  }
});
$('#teacher-toggle').onclick = () => { state.teacher = !state.teacher; save(); rerender(); toast(state.teacher ? 'Teacher view: answers and teacher notes are shown.' : 'Student view: answers open after students try.'); };
$('#glossary-open').onclick = () => glossary();
$('#source-open').onclick = () => openSource();
$('#dialog-close').onclick = () => { reader.closeWord(); $('#resource-dialog').close(); };
$('#text-toggle').onclick = e => { const on = document.body.classList.toggle('large-text'); e.currentTarget.setAttribute('aria-pressed', String(on)); };
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); $('#main').focus({ preventScroll: true }); });
render(); save(false);
cloud = window.createDEC15Cloud({
  cfg, lessonId: lesson.id, getState: () => state,
  applyState: next => { state = { ...state, ...next, teacher: state.teacher }; save(false); rerender(); },
  onChange: info => { const was = cloudInfo.user?.id; cloudInfo = info; paintStatus();
    if (wall && info.user?.id !== was) { wall.connect(); rerender(); } if (parseRoute().page === 'notebook' && info.status === 'saved' && info.profile && !paintStatus.named) { paintStatus.named = true; rerender(); } }
});
if (wall && cloud.enabled) rerender();   // show the class walls
cloud.init().catch(e => { console.error(e); cloudInfo = { status: 'error' }; paintStatus(); });
})();
