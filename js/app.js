/* DEC15 learning app — renders lesson data (lessons/*.js) into pages.
   Presentation only. Saved work lives in localStorage under one key per lesson;
   a later Supabase layer can replace load()/save() without touching rendering. */
(() => {
'use strict';
const lesson = window.DEC15_LESSON, sources = window.DEC15_SOURCES, cfg = window.DEC15_CONFIG;
const KEY = 'dec15-' + lesson.id + '-v2';
const coreActivities = lesson.sections.flatMap(s => s.activities);
const allActivities = [...coreActivities, ...lesson.extras];

/* ───────── state ───────── */
let state = { values: {}, done: {}, revealed: {}, checked: {}, rows: {}, active: {}, teacher: cfg.teacherView === true, marks: {}, markDocuments: {} };
let storageOK = true;
try { const old = JSON.parse(localStorage.getItem(KEY)); if (old && old.values) state = { ...state, ...old }; } catch (e) { storageOK = false; }
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); storageOK = true; $('#save-status').textContent = 'Saved on this device'; }
  catch (e) { storageOK = false; $('#save-status').textContent = 'Not saved — download your notes'; }
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
  open: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>'
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
  <span class="essay-q-label">The essay question · ${esc(lesson.wordTarget)}</span>
  <blockquote>${reader.text('q-' + a.id, lesson.question, 'Essay question')}</blockquote>
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
B.listening = b => `<section class="block media">
  <div class="block-label">${icon('play')}Listening · Our Changing Climate (2020)</div>
  <div class="video-wrap"><button class="video-cover" data-video aria-label="Play the video">${icon('play', 'play-big')}<span><b>Food waste causes climate change</b><small>YouTube · play 0:09–9:05 · internet needed</small></span></button></div>
  <div class="media-links"><button class="btn-quiet" data-source="listening">${icon('book')}Course transcript (adapted)</button><button class="btn-quiet" data-source="video-script">${icon('book')}Original video script</button>${b.mode === 'video' ? '' : `<a class="btn-quiet" href="https://www.youtube.com/watch?v=${esc(cfg.supplementalVideoId)}" target="_blank" rel="noopener">${icon('open')}Open on YouTube</a>`}</div>
  ${cfg.coreAudioUrl ? `<audio controls preload="none" src="${esc(cfg.coreAudioUrl)}"></audio>` : ''}
  <p class="media-note">Listen first, take notes, <b>then</b> read the transcript to check.</p>
</section>`;

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
function nextStageLink(section) {
  const n = lesson.sections.indexOf(section), next = lesson.sections[n + 1];
  return next ? `<a class="btn" href="#${next.id}">Next stage: ${esc(next.title)} ${icon('arrow')}</a>` : `<a class="btn" href="#notebook">Review my notebook ${icon('arrow')}</a>`;
}

/* ───────── pages ───────── */
function stagePage(s) {
  const activeId = state.active[s.id] && s.activities.some(a => a.id === state.active[s.id]) ? state.active[s.id] : s.activities[0].id;
  const idx = s.activities.findIndex(a => a.id === activeId);
  const doneCount = s.activities.filter(a => state.done[a.id]).length;
  return `<header class="stage-head stage-${s.id}">
      <span class="stage-numeral" aria-hidden="true">${s.number}</span>
      <div class="stage-copy">
        <span class="eyebrow">Stage ${Number(s.number)} of ${lesson.sections.length}<span class="sep"></span>${esc(s.subtitle)}</span>
        <h1>${esc(s.title)}</h1>
        <p class="stage-outcome" data-help>${esc(s.outcome)}</p>
        <div class="stage-meta">
          <span class="chip">${icon('clock')}${s.minutes} min</span>
          <span class="chip">${icon('list')}${s.activities.length} activities</span>
          <span class="chip chip-quiet">Teacher’s Book ${s.code}</span>
        </div>
      </div>
      <img class="stage-art" src="assets/chapter-${s.id}.svg" alt="" width="220" height="170">
    </header>
    <nav class="act-tabs" aria-label="Activities in this stage" style="--done:${doneCount / s.activities.length};--n:${s.activities.length}">${s.activities.map((a, i) => `<button data-jump="${a.id}" class="${a.id === activeId ? 'current' : ''}${state.done[a.id] ? ' is-done' : ''}" aria-current="${a.id === activeId ? 'step' : 'false'}"><span class="tab-num">${state.done[a.id] ? icon('check') : i + 1}</span><span class="tab-text">${esc(a.short)}<small>${a.minutes} min</small></span></button>`).join('')}</nav>
    ${activity(s.activities[idx], idx, s.activities, s)}`;
}
function overview() {
  return `<section class="hero">
    <div class="hero-copy">
      <span class="eyebrow">Week 2 · Day 5 · About 4 hours</span>
      <h1>${esc(lesson.title)}</h1>
      <p class="hero-lead">${esc(lesson.journey)}</p>
      <a class="btn btn-big" href="#${lesson.sections[0].id}">Start Stage 1 ${icon('arrow')}</a>
    </div>
    <figure class="hero-img"><img src="assets/food-editorial.png" alt="An imperfect tomato, a carrot, a cut orange and grains on a plate — edible food that is often thrown away."></figure>
  </section>
  <section class="essay-q essay-q-hero">
    <span class="essay-q-label">This week’s essay question · you write it on Monday</span>
    <blockquote>${esc(lesson.question)}</blockquote>
  </section>
  <h2 class="section-title">Today’s four stages</h2>
  <ol class="journey">${lesson.sections.map(s => `<li><a class="journey-card stage-${s.id}" href="#${s.id}">
      <span class="journey-num">${s.number}</span>
      <span class="journey-text"><b>${esc(s.title)}</b><span>${esc(s.outcome)}</span></span>
      <span class="journey-time">${s.minutes} min ${icon('arrow')}</span></a></li>`).join('')}</ol>
  <h2 class="section-title">How to read each page</h2>
  <p class="section-sub">Each kind of information always looks the same. The <b>dark box</b> is the most important.</p>
  <div class="legend">
    <div class="legend-item"><span class="sw sw-key">${icon('key')}</span><b>Key point</b><span>The idea to learn and remember.</span></div>
    <div class="legend-item"><span class="sw sw-steps">${icon('list')}</span><b>What to do</b><span>Steps. The badge shows alone / pair / group.</span></div>
    <div class="legend-item"><span class="sw sw-talk">${icon('chat')}</span><b>Speak</b><span>Questions to discuss out loud.</span></div>
    <div class="legend-item"><span class="sw sw-lang">${icon('phrase')}</span><b>Language bank</b><span>Phrases to use when you speak or write.</span></div>
    <div class="legend-item"><span class="sw sw-model">${icon('model')}</span><b>Model</b><span>An example to study and copy the structure of.</span></div>
    <div class="legend-item"><span class="sw sw-ans">${icon('check')}</span><b>Suggested answers</b><span>Open them after you try.</span></div>
  </div>`;
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
function entries() {
  registerTables();
  return allActivities.map(a => ({ a, entries: Object.entries(state.values).filter(([k, v]) => v && owner[k] === a.id).map(([k, v]) => [labels[k] || k, v === true ? '✓' : v]) })).filter(x => x.entries.length);
}
function notebook() {
  const es = entries();
  return `<header class="page-head"><span class="eyebrow">Your work</span><h1>My notebook</h1><p>Everything you wrote today, in one place. Download it and bring your plan on Monday.</p></header>
  <div class="nb-actions"><button class="btn" data-export>${icon('download')}Download notes (.txt)</button><button class="btn-quiet" data-export-marked>Download with highlights (.html)</button><button class="btn-quiet" data-print>Print</button><button class="btn-quiet danger" data-clear>Clear this device</button></div>
  ${es.length ? es.map(({ a, entries: e }) => `<section class="nb-entry"><h2>${esc(a.title)}</h2><dl>${e.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></section>`).join('') : '<p class="empty">Your answers will appear here as you work.</p>'}
  ${reader.notebookMarks()}`;
}

/* ───────── render ───────── */
const routes = ['overview', 'sources', 'extra', 'notebook', ...lesson.sections.map(s => s.id)];
function render() {
  let route = location.hash.slice(1) || 'overview'; if (!routes.includes(route)) route = 'overview';
  const done = coreActivities.filter(a => state.done[a.id]).length;
  $('#nav').innerHTML = `<a href="#overview" class="${route === 'overview' ? 'active' : ''}"><span class="nav-num">${icon('book')}</span><span>Overview</span></a>
    <span class="nav-label">Core lesson · 4 hours</span>
    ${lesson.sections.map(s => { const d = s.activities.filter(a => state.done[a.id]).length; return `<a href="#${s.id}" class="stage-${s.id}${route === s.id ? ' active' : ''}"${route === s.id ? ' aria-current="page"' : ''}><span class="nav-num">${s.number}</span><span class="nav-text">${esc(s.title)}<small>${s.minutes} min<i class="nav-bar" style="--p:${d / s.activities.length}" aria-label="${d} of ${s.activities.length} done"></i></small></span></a>`; }).join('')}
    <span class="nav-label">More</span>
    ${[['sources', 'book', 'Source library'], ['extra', 'list', 'Extra activities'], ['notebook', 'model', 'My notebook']].map(([id, ic, t]) => `<a href="#${id}" class="${route === id ? 'active' : ''}"><span class="nav-num">${icon(ic)}</span><span>${t}</span></a>`).join('')}`;
  $('#progress').value = done; $('#progress').max = coreActivities.length;
  $('#progress-label').textContent = `${done} of ${coreActivities.length} activities finished`;
  const s = lesson.sections.find(x => x.id === route);
  $('#main').innerHTML = s ? stagePage(s) : route === 'sources' ? sourcesPage() : route === 'extra' ? extrasPage() : route === 'notebook' ? notebook() : overview();
  document.body.dataset.stage = s ? s.id : route;
  const pageName = s ? s.title : { overview: 'Overview', sources: 'Source library', extra: 'Extra activities', notebook: 'My notebook' }[route];
  $('#crumb').innerHTML = `<span>DEC15</span><i>/</i><span>Week ${lesson.week} · Day ${lesson.day}</span><i>/</i><b>${esc(pageName)}</b>`;
  $('#teacher-toggle').setAttribute('aria-pressed', String(state.teacher));
  $('#teacher-toggle').textContent = state.teacher ? 'Teacher view: on' : 'Teacher view: off';
  if (!storageOK) $('#save-status').textContent = 'Not saved — download your notes';
  const tabs = $('.act-tabs'), cur = $('.act-tabs .current'); if (tabs && cur) tabs.scrollLeft = cur.offsetLeft - tabs.offsetLeft - 12;
  reader.mount();
}
function rerender() { const y = window.scrollY; render(); window.scrollTo(0, y); }

/* ───────── sources dialog / glossary ───────── */
const srcName = id => ({ reading1: 'Reading 1', reading2: 'Reading 2', listening: 'Listening transcript', 'video-script': 'Video script' }[id] || id);
function openSource(id = 'reading1') {
  reader.closeWord();
  const s = sources.find(x => x.id === id) || sources[0];
  $('#resource-title').textContent = 'Read and highlight';
  $('#resource-body').innerHTML = `<div class="source-tabs">${sources.map(x => `<button class="${x.id === s.id ? 'active' : ''}" data-source="${x.id}">${srcName(x.id)}</button>`).join('')}</div>
    ${reader.toolbar('reading')}
    <article class="source-text" data-help><span class="eyebrow">${esc(s.cite)} · ${esc(s.kind)}</span><h3>${esc(s.title)}</h3>${s.note ? `<p class="script-note">${esc(s.note)}</p>` : ''}
    <p class="source-ref">${esc(s.reference)}</p>
    ${s.paragraphs.map((p, i) => `<p>${reader.text('s-' + s.id + '-' + i, p, s.cite + ' · ' + (s.id === 'video-script' ? p.slice(0, 10) : 'paragraph ' + p.slice(0, 1)))}</p>`).join('')}
    ${s.figure ? `<figure><img src="${s.figure}" alt="Bar chart. Estimated household food waste, million tonnes per year: Eastern Asia 106.36; North America 22.3; North Africa 22.11; Eastern Europe 15.16; Western Europe 14.24; Southern Europe 11.97; Northern Europe 7.56; Central Asia 6.35."><figcaption>Figure 1. ${esc(s.figureCaption || '')} ${esc(s.figureCredit || '')}</figcaption></figure>` : ''}</article>`;
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

/* ───────── export ───────── */
function exportNotes() {
  const lines = [`DEC15 — Week ${lesson.week}, Day ${lesson.day}: ${lesson.title}`, 'Essay question: ' + lesson.question + ' (' + lesson.wordTarget + ')', ''];
  for (const { a, entries: es } of entries()) { lines.push('■ ' + a.title.toUpperCase()); for (const [k, v] of es) lines.push(k + ':\n' + v + '\n'); lines.push(''); }
  lines.push('HIGHLIGHTS', ...reader.exportLines());
  const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })), link = document.createElement('a');
  link.href = url; link.download = `DEC15-${lesson.id.toUpperCase()}-my-notes.txt`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Your notes have been downloaded.');
}

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
  if (t.dataset.done) { state.done[t.dataset.done] = t.checked; save(); rerender(); if (t.checked) toast('Activity marked as finished.'); }
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
  if (d.quizReset) { delete state.checked[d.quizReset]; save(); rerender(); return; }
  if (d.choose) { state.values[d.choose] = d.opt; save(); rerender(); return; }
  if (d.reveal) {
    const a = allActivities.find(x => x.id === d.reveal);
    if (!hasAttempt(a) && !state.teacher) { toast('Write or choose something first. Then compare with the suggested answers.'); return; }
    state.revealed[a.id] = true; save(); rerender(); return;
  }
  if (d.hideAnswers) { delete state.revealed[d.hideAnswers]; save(); rerender(); return; }
  if (d.addRow) { state.rows[d.addRow] = (state.rows[d.addRow] || 0) + 1; save(); rerender(); return; }
  if (d.jump) {
    const s = lesson.sections.find(x => x.activities.some(a => a.id === d.jump));
    state.active[s.id] = d.jump; save(); render();
    const el = $('.act-tabs'); el?.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    $('#' + d.jump)?.focus({ preventScroll: true }); return;
  }
  if (d.source) { openSource(d.source); return; }
  if (t.hasAttribute('data-video')) { t.closest('.video-wrap').innerHTML = `<iframe title="Our Changing Climate: Food waste causes climate change" src="https://www.youtube-nocookie.com/embed/${esc(cfg.supplementalVideoId)}?start=9" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`; return; }
  if (d.timer) { startTimer(Number(d.timer)); return; }
  if (t.hasAttribute('data-pause')) { paused = !paused; if (!paused) deadline = Date.now() + remaining * 1000; t.textContent = paused ? 'Resume' : 'Pause'; return; }
  if (t.hasAttribute('data-close-timer')) { clearInterval(timer); $('#active-timer')?.remove(); return; }
  if (t.hasAttribute('data-export') || t.id === 'export-side') { exportNotes(); return; }
  if (t.hasAttribute('data-export-marked')) { reader.exportHtml(entries()); return; }
  if (t.hasAttribute('data-print')) { window.print(); return; }
  if (t.hasAttribute('data-clear') && confirm('Clear all your answers on this device? Download your notes first if you need them.')) {
    state = { ...state, values: {}, done: {}, revealed: {}, checked: {}, rows: {}, marks: {}, markDocuments: {} }; save(); render(); toast('Cleared.');
  }
});
$('#teacher-toggle').onclick = () => { state.teacher = !state.teacher; save(); rerender(); toast(state.teacher ? 'Teacher view: answers and teacher notes are shown.' : 'Student view: answers open after students try.'); };
$('#glossary-open').onclick = glossary;
$('#source-open').onclick = () => openSource();
$('#dialog-close').onclick = () => { reader.closeWord(); $('#resource-dialog').close(); };
$('#text-toggle').onclick = e => { const on = document.body.classList.toggle('large-text'); e.currentTarget.setAttribute('aria-pressed', String(on)); };
window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); $('#main').focus({ preventScroll: true }); });
render(); save();
})();
