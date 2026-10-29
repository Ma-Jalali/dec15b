/* Course guide pages (DEC10): #/calendar and #/assessments. Data: window.DEC15_GUIDE (dec10/lessons/guide.js).
   app.js calls createDEC15Guide(ctx) only when the course has a guide; DEC15 has none, so nothing here shows there.
   The page remembers the open week / tab while the student is on it; the readiness checklist is kept on the device. */
window.createDEC15Guide = function ({ esc, icon, days, toast }) {
  const G = window.DEC15_GUIDE;
  if (!G) return null;
  const DAY = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (dt, n) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + n);
  const fmt = dt => `${dt.getDate()} ${MON[dt.getMonth()]}`;
  const today = (() => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); })();
  const same = (a, b) => a.getTime() === b.getTime();
  const weeks = G.weeks;
  const span = w => [parse(w.start), w.end ? parse(w.end) : addDays(parse(w.start), 4)];
  const nowIdx = (() => { const i = weeks.findIndex(w => { const [a, b] = span(w); return today >= a && today <= addDays(b, 2); }); return i >= 0 ? i : today < parse(weeks[0].start) ? 0 : weeks.length - 1; })();
  let calSel = nowIdx, asTab = 'lrw', filter = 'all';
  const openPast = new Set();   // past days a phone user opened (they start folded on small screens)
  const store = { get(k) { try { return JSON.parse(localStorage.getItem('dec10-guide') || '{}')[k]; } catch (e) { return undefined; } },
    set(k, v) { try { const o = JSON.parse(localStorage.getItem('dec10-guide') || '{}'); o[k] = v; localStorage.setItem('dec10-guide', JSON.stringify(o)); } catch (e) { /* storage blocked */ } } };
  const ready = new Set(days.filter(d => d.status === 'ready').map(d => d.id));
  const lessonId = code => { const m = String(code).match(/^W(\d+) D(\d+)$/); return m ? `d10w${m[1]}d${m[2]}` : null; };
  const type = t => G.eventTypes[t] || ['Event', '#5d6a74'];
  const head = (eyebrow, title, text, art) => `<header class="gd-hero"><div class="gd-hero-copy"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${text}</p></div>${art}</header>`;

  /* ───────── the next assessed task, for the countdown card ───────── */
  function upcoming() {
    for (const w of weeks) { if (w.brk) continue;
      for (let i = 0; i < w.days.length; i++) for (const e of w.days[i].events || []) {
        if (e.type !== 'assess') continue; const dt = addDays(parse(w.start), i);
        if (dt >= today) return { e, dt, w, i, n: Math.round((dt - today) / 864e5) };
      } }
    return null;
  }

  /* ───────── Course calendar ───────── */
  const CAL_ART = `<svg class="gd-hero-art" viewBox="0 0 240 180" aria-hidden="true"><defs><filter id="gds" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#14293a" flood-opacity=".18"/></filter></defs>
    <circle cx="120" cy="92" r="78" fill="#fbe6dc"/><g filter="url(#gds)"><rect x="52" y="40" width="136" height="112" rx="16" fill="#fff"/><rect x="52" y="40" width="136" height="30" rx="16" fill="#e64626"/><rect x="52" y="56" width="136" height="14" fill="#e64626"/></g>
    <g fill="#14293a"><rect x="80" y="30" width="8" height="20" rx="4"/><rect x="152" y="30" width="8" height="20" rx="4"/></g>
    <g fill="#f3ede4">${[0, 1, 2, 3, 4].map(c => [0, 1, 2].map(r => `<rect x="${64 + c * 24}" y="${80 + r * 22}" width="18" height="16" rx="4"/>`).join('')).join('')}</g>
    <rect class="gd-pulse" x="112" y="102" width="18" height="16" rx="4" fill="#e64626"/><rect x="160" y="124" width="18" height="16" rx="4" fill="#4f68b8"/><rect x="88" y="80" width="18" height="16" rx="4" fill="#2f9a63"/>
    <path class="gd-tw" d="M200 46l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#e3a843"/></svg>`;
  function eventHTML(e) {
    const [label, col] = type(e.type);
    const times = e.times ? `<ul class="gd-times">${e.times.map(([k, t]) => `<li><span>${esc(G.shifts[k] || k)}</span><b>${esc(t)}</b></li>`).join('')}</ul>` : e.time ? `<p class="gd-time">${icon('clock')}${esc(e.time)}</p>` : '';
    return `<li class="gd-ev${e.type === 'assess' ? ' is-assess' : ''}${e.counts ? ' is-counts' : ''}" style="--ec:${col}">
      <span class="gd-ev-type">${esc(label)}${e.must ? '<em>Must attend</em>' : ''}${e.counts ? '<em>Counts</em>' : ''}</span>
      <b class="gd-ev-title">${esc(e.title)}</b>${times}
      ${e.where ? `<p class="gd-where">${icon('map')}${esc(e.where)}</p>` : ''}
      ${e.note ? `<p class="gd-note">${esc(e.note)}</p>` : ''}
      ${e.reg ? `<p class="gd-reg">${icon('pen')}${esc(e.reg === true ? 'Register on CET Connect' : e.reg)}</p>` : ''}</li>`;
  }
  function lessonList(items, hw) {
    return `<ul class="gd-lessons${hw ? ' is-hw' : ''}">${items.map(([code, title]) => { const id = lessonId(code), on = id && ready.has(id);
      return `<li>${on ? `<a href="#/${id}" title="Open this lesson">` : '<span>'}${esc(title)}${on ? `<i class="gd-go">${icon('arrow')}</i></a>` : '</span>'}</li>`; }).join('')}</ul>`;
  }
  /* small dots in a day's header: one per kind of event, so the week can be read at a glance */
  function dayDots(d) {
    const kinds = [...new Set((d.events || []).map(e => e.type))]; if (!kinds.length && !d.class) return '';
    const n = (d.class || []).length + (d.hw || []).length;
    return `<span class="gd-ddots" aria-hidden="true">${n ? `<small>${n} lesson${n === 1 ? '' : 's'}</small>` : ''}${kinds.map(k => `<i style="--ec:${type(k)[1]}" title="${esc(type(k)[0])}"></i>`).join('')}</span>`;
  }
  function dayCard(w, d, i) {
    const dt = addDays(parse(w.start), i), isToday = same(dt, today), assess = (d.events || []).some(e => e.type === 'assess');
    const showC = filter !== 'events', showE = filter !== 'classes';
    const ev = (d.events || []);
    const body = d.off ? `<p class="gd-off">${esc(d.off)}</p>` : `
      ${showC && d.class ? `<section><h4>${icon('users')}In class</h4>${lessonList(d.class)}</section>` : ''}
      ${showC && d.hw ? `<section><h4>${icon('home')}After class</h4>${lessonList(d.hw, true)}</section>` : ''}
      ${showE && ev.length ? `<section><h4>${icon('flag')}${filter === 'events' ? 'Events' : 'Also on today'}</h4><ul class="gd-evs">${ev.map(eventHTML).join('')}</ul></section>` : ''}
      ${filter === 'events' && !ev.length ? '<p class="gd-empty">No extra events.</p>' : ''}`;
    const past = dt < today, key = `${calSel}-${i}`;
    return `<article class="gd-day${isToday ? ' is-today' : ''}${assess ? ' has-assess' : ''}${d.off ? ' is-off' : ''}${past ? ' is-past' : ''}${openPast.has(key) ? ' is-open' : ''}" style="--i:${i}">
      <header><span class="gd-dname">${DAYS[i]}</span><span class="gd-ddate">${fmt(dt)}</span>${dayDots(d)}${isToday ? '<em class="gd-today">Today</em>' : ''}${past ? `<button type="button" class="gd-past-btn" data-gd-day="${key}" aria-expanded="${openPast.has(key)}">${openPast.has(key) ? 'Hide' : 'Show'}</button>` : ''}</header>${body}</article>`;
  }
  /* previous / this week / next, shown beside the week title and under a break */
  function weekNav() {
    return `<span class="gd-wnav" role="group" aria-label="Change week"><button type="button" data-gd-week="${calSel - 1}"${calSel ? '' : ' disabled'} aria-label="Previous week">${icon('left')}</button>${calSel === nowIdx ? '' : `<button type="button" class="gd-wnav-now" data-gd-week="${nowIdx}">This week</button>`}<button type="button" data-gd-week="${calSel + 1}"${calSel < weeks.length - 1 ? '' : ' disabled'} aria-label="Next week">${icon('arrow')}</button></span>`;
  }
  function weekPanel(w) {
    if (w.brk) return `<div class="gd-break"><div class="gd-break-art" aria-hidden="true">${icon('sprout')}</div><div><span class="eyebrow">${esc(w.dates)}</span><h2>${esc(w.title)}</h2><p>${esc(w.text)}</p>
      ${w.events ? `<ul class="gd-evs gd-evs-row">${w.events.map(eventHTML).join('')}</ul>` : ''}<div class="gd-week-tools">${weekNav()}</div></div></div>`;
    const counts = w.days.some(d => (d.events || []).some(e => e.counts));
    return `<div class="gd-week-head"><div><span class="eyebrow">Week ${w.n} · ${esc(w.dates)}</span><h2>${esc(w.theme)}</h2>${w.sub ? `<p>${esc(w.sub)}</p>` : ''}</div>
      <div class="gd-week-tools">${counts ? `<span class="gd-flag">${icon('alert')}Assessment week</span>` : ''}${weekNav()}</div></div>
      <div class="gd-seg" role="group" aria-label="Show">${[['all', 'Everything'], ['classes', 'Classes & homework'], ['events', 'Workshops & events']].map(([k, l]) => `<button type="button" data-gd-filter="${k}" aria-pressed="${filter === k}">${l}</button>`).join('')}</div>
      <div class="gd-days">${w.days.map((d, i) => dayCard(w, d, i)).join('')}</div>`;
  }
  function calendarHTML() {
    const w = weeks[calSel], nx = upcoming();
    return `${head('DEC10 · 26 Oct 2026 – 22 Jan 2027', 'Course calendar', 'Every week on one page: your classes, your homework, and the workshops and events you can join. Pick a week, then read it day by day.', CAL_ART)}
    <div class="gd-top">
      ${nx ? `<div class="gd-next"><span class="gd-next-n"><b>${nx.n === 0 ? 'Today' : nx.n}</b>${nx.n === 0 ? '' : `<small>day${nx.n === 1 ? '' : 's'}</small>`}</span><div><span class="eyebrow">Next assessment</span><b>${esc(nx.e.title)}</b><small>${DAYS[nx.i]} ${fmt(nx.dt)} · Week ${nx.w.n}${nx.e.counts ? ' · counts towards your score' : ''}</small></div>
        <a class="btn-quiet btn-sm" href="#/assessments">${icon('flag')}Assessments</a></div>` : ''}
      <details class="gd-terms"><summary><span>${icon('clock')}<b>Term dates and breaks</b></span><i class="lg-fold-chev" aria-hidden="true"></i></summary>
        <dl>${G.terms.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl><p class="gd-warn">${icon('alert')}${esc(G.resit)}</p></details>
    </div>
    <nav class="gd-rail" aria-label="Weeks">${weeks.map((x, i) => { const cnt = !x.brk && x.days.some(d => (d.events || []).some(e => e.counts));
      return `<button type="button" class="${x.brk ? 'is-brk' : ''}${i === nowIdx ? ' is-now' : ''}" data-gd-week="${i}" aria-pressed="${i === calSel}">${x.brk ? `<b>${icon('sprout')}</b><small>Break</small>` : `<b>${x.n}</b><small>${esc(x.dates)}</small>`}${cnt ? '<i class="gd-dot" title="Assessment this week"></i>' : ''}${i === nowIdx ? '<em>Now</em>' : ''}</button>`; }).join('')}</nav>
    <section class="gd-week" aria-live="polite">${weekPanel(w)}</section>
    <div class="gd-legend">${Object.values(G.eventTypes).map(([l, c]) => `<span style="--ec:${c}"><i></i>${esc(l)}</span>`).join('')}</div>
    <p class="gd-foot">${icon('bulb')}<span>Rooms and sign-up links are on <a href="${esc(G.canvas)}" target="_blank" rel="noopener">Canvas › Course Calendar</a>. Workshops for <b>afternoon-class</b> students are in the morning, and for <b>morning-class</b> students in the afternoon. Questions? <a href="mailto:${esc(G.contact)}">${esc(G.contact)}</a></span></p>`;
  }

  /* ───────── Assessments ───────── */
  const AS_ART = `<svg class="gd-hero-art" viewBox="0 0 240 180" aria-hidden="true"><defs><filter id="gda" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#14293a" flood-opacity=".18"/></filter></defs>
    <circle cx="120" cy="92" r="78" fill="#e9edf8"/><g filter="url(#gda)" transform="rotate(-4 120 96)"><rect x="66" y="34" width="108" height="130" rx="12" fill="#fff"/><rect x="98" y="26" width="44" height="18" rx="8" fill="#4f68b8"/></g>
    <g transform="rotate(-4 120 96)" stroke-linecap="round" stroke-width="5"><path class="gd-tick" d="M82 70l7 7 12-13M82 100l7 7 12-13M82 130l7 7 12-13" stroke="#2f9a63" fill="none" stroke-linejoin="round"/>
    <path d="M112 71h46M112 101h38M112 131h44" stroke="#d6dbe6"/></g><path class="gd-tw" d="M196 52l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#e3a843"/></svg>`;
  const L = G.links, a = (href, text) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(text)} ${icon('open')}</a>`;
  const facts = rows => `<dl class="gd-facts">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
  const FOLD_ICON = { 'The rules on the day': 'lock', 'Sick, an emergency, or a technical problem?': 'alert', 'Think your mark is wrong?': 'target', 'Disability, health condition or learning difficulty': 'users', 'Contacts': 'chat' };
  const fold = (title, sub, body, open, ic = FOLD_ICON[title]) => `<details class="gd-fold"${open ? ' open' : ''}><summary>${ic ? `<span class="gd-fold-ic">${icon(ic)}</span>` : ''}<span><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span><i class="lg-fold-chev" aria-hidden="true"></i></summary><div class="gd-fold-body">${body}</div></details>`;
  const steps = items => `<ol class="gd-steps">${items.map(t => `<li>${t}</li>`).join('')}</ol>`;
  const TABS = [['lrw', 'Listening, Reading & Writing', 'Weeks 5 & 9 · 70%'], ['seminar', 'Seminar + Portfolio', 'Weeks 2–7 · 3%'], ['ip', 'Interactive Presentation', 'Week 7 · 12%'], ['id', 'Interactive Discussion', 'Week 10 · 15%']];
  function tabBody(k) {
    if (k === 'lrw') return `<p class="gd-lead">Three tests, one after the other, with <b>no break</b>: listening → reading → writing. Your writing uses ideas from the listening and reading. You do it <b>twice</b>: Week 5 and Week 9 (Week 9 counts a little more).</p>
      ${facts([['When', 'Friday of Week 5 and Week 9'], ['Where', 'In class, on Canvas, in LockDown Browser'], ['You need', 'A laptop (not a phone or tablet)'], ['Paper', '6 blank sheets for notes — collected at the end'], ['Practice', 'Week 3 (listening & reading) · Week 4 (writing)']])}
      <div class="gd-cards3">
        <article class="gd-card" style="--ec:#4f68b8"><span class="gd-card-k">1 · Listening</span><b>About 35 minutes</b><ul><li><b>Section 1:</b> two short conversations · 10 questions</li><li><b>Section 2:</b> one lecture (10–12 min) in 3 parts · 20 questions</li><li>You hear it <b>once only</b>. No headphones.</li><li>Time to read the questions first, and 8 minutes to check at the end</li></ul></article>
        <article class="gd-card" style="--ec:#2f9a63"><span class="gd-card-k">2 · Reading</span><b>50 minutes</b><ul><li><b>Part 1:</b> three academic texts (500–700 words each) · 20–21 questions</li><li><b>Part 2:</b> up to 10 questions that need <b>all three</b> texts — find common ideas and draw conclusions</li></ul></article>
        <article class="gd-card" style="--ec:#d9902a"><span class="gd-card-k">3 · Integrated writing</span><b>90 minutes · 450–600 words</b><ul><li>Plan ~30 min, write ~60 min</li><li>Use <b>four sources</b>: the lecture + Texts A, B and C</li><li>You can see the reading texts. The lecture is played <b>again</b> 10 minutes after you get the question — take notes (no transcript)</li><li>Cite <b>all</b> sources in APA 7 (in-text only, no reference list) and show how they connect</li></ul></article>
      </div>
      <p class="gd-links">${icon('book')}${a(L.writingRubric, 'Integrated writing rubric')}</p>
      <p class="gd-tip">${icon('bulb')}<span>Question types include multiple choice, short answer, gap-fill and matching. Practise them in each week’s <b>Listening assessment preparation</b> homework.</span></p>`;
    if (k === 'seminar') return `<p class="gd-lead">A group task over several weeks. Your group gives <b>two presentations</b> about a sustainability question in a country you choose, then reflects on the feedback. You also give feedback to the other groups.</p>
      ${(G.seminarFigures || []).map(f => `<figure class="gd-fig"><a href="${esc(f.src)}" target="_blank" rel="noopener"><img src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy"></a><figcaption>${esc(f.caption)}</figcaption></figure>`).join('')}
      ${facts([['Group', '4–5 students · 4 groups in each class'], ['Country', 'Your choice — but <b>not Australia</b> and <b>not your own country</b>'], ['Framework', 'Use one from Week 1 (triple bottom line, IPAT or DTM) in the Opening Remarks <b>or</b> the Seminar. Quality matters, not how often you mention it'], ['Sources', 'Reliable academic sources, cited in APA 7'], ['Weight', '3% of your total score (10% of speaking)']])}
      <h3 class="gd-h3">When does my group present?</h3>
      <div class="gd-table-wrap"><table class="gd-table"><thead><tr><th>Group</th><th>Topic</th><th>Opening Remarks</th><th>Seminar</th></tr></thead><tbody>${G.seminarGroups.map(g => `<tr><td><b>${g.g}</b></td><td>${esc(g.topic)}</td><td>Week ${g.opening}</td><td>Week ${g.seminar}</td></tr>`).join('')}</tbody></table></div>
      <h3 class="gd-h3">Your two jobs</h3>
      <div class="gd-two">
        <article class="gd-card" style="--ec:#e64626"><span class="gd-card-k">When you present</span>
          <b>1 · Opening Remarks · 5–7 min</b><p>Introduce your country and why you chose it, and describe its sustainability problems (causes and effects). Everyone speaks.</p>
          <b>2 · Seminar · one week later</b><p><b>Part 1</b> (10–12 min): the class’s reactions and your research focus (2–3 min), then your research (8–10 min).<br><b>Part 2</b> (10 min): give the class two thought-provoking questions to discuss in groups — listen and take notes.<br><b>Part 3:</b> each member gives a 1-minute summary of one group’s discussion.</p></article>
        <article class="gd-card" style="--ec:#4f68b8"><span class="gd-card-k">When you are the audience</span>
          <b>After each Opening Remarks</b><p>Complete the Peer &amp; Teacher Feedback Tool, post 1–2 questions on the discussion board, and upload a 150–200-word feedback summary to the group’s Portfolio — <b>the same day</b>.</p>
          <b>After each Seminar</b><p>Complete the Feedback Tool and upload a 150–200-word feedback summary — <b>the same day</b>.</p></article>
      </div>
      <h3 class="gd-h3">Your Portfolio: 3 submissions after you present</h3>
      <ol class="gd-port"><li><b>Summary + reflection</b><span>on the feedback for your Opening Remarks · 150–200 words · due the Monday after</span></li><li><b>Summary + reflection</b><span>on the feedback for your Seminar · 150–200 words · due the Monday after</span></li><li><b>Video response</b><span>max 8 minutes · respond to all your feedback using <b>two</b> AST skills: Feedback literacy + one more · due within one week of your Seminar</span></li></ol>
      <p class="gd-tip">${icon('bulb')}<span>In your summaries, group the feedback by idea (e.g. content, pronunciation, cohesion) — not by who said it. Every task must be done on time to get a score.</span></p>
      <p class="gd-links">${icon('book')}${a(L.videoRubric, 'Video task rubric')} ${a(L.feedbackTool, 'Peer & Teacher Feedback Tool')} ${a(L.portfolioSchedule, 'Portfolio schedule')}</p>`;
    if (k === 'ip') return `<p class="gd-lead">You present <b>alone</b> for 3 minutes about <b>one strategy for Australia</b>, then answer questions. Your topic is your Seminar topic — but about Australia — and each person in your group chooses a <b>different</b> strategy.</p>
      ${facts([['When', 'Week 7 · Thursday or Friday'], ['Who', 'With your seminar group · two teachers mark'], ['Part 1', 'Your presentation · 3 minutes · you may look at notes'], ['Part 2', 'Individual questions on your content and the AST · <b>no notes</b>'], ['Bring', 'Printed texts, notes, a pen — <b>no</b> phone or tablet'], ['Weight', '12% of your total score (40% of speaking)']])}
      <h3 class="gd-h3">Say these three things</h3>
      <div class="gd-cards3"><article class="gd-card" style="--ec:#4f68b8"><span class="gd-card-k">1</span><b>The strategy</b><p>Details of an existing or possible strategy.</p></article><article class="gd-card" style="--ec:#d9902a"><span class="gd-card-k">2</span><b>Constraints</b><p>What could limit it or make it hard.</p></article><article class="gd-card" style="--ec:#2f9a63"><span class="gd-card-k">3</span><b>A brief evaluation</b><p>How effective is it, and why?</p></article></div>
      <h3 class="gd-h3">Choose your strategy</h3>
      ${G.seminarGroups.map(g => fold(`Group ${g.g} · ${esc(g.topic)}`, esc(g.ipQuestion), `<ul class="gd-strats">${g.strategies.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`)).join('')}
      <h3 class="gd-h3">Before the day</h3>
      ${steps(['Cite all evidence on your slides and add a reference list.', 'You may use AI to prepare — but you must say how you used it.', `Upload your slides on Canvas (${a(L.ipSlides, 'slides upload')}) and bring the same slides on a USB.`, 'If a group member is absent, you still present — and you do not cover their part.'])}
      <p class="gd-links">${icon('book')}${a(L.ipRubric, 'Interactive Presentation rubric')} ${a(L.feedbackTool, 'Peer & Teacher Feedback Tool')}</p>`;
    return `<p class="gd-lead">A small-group discussion about two reading texts you get <b>before</b> the assessment. First you answer your own questions, then you discuss together.</p>
      ${facts([['When', 'Week 10 · Thursday or Friday (practice on Tuesday)'], ['Group', '3–4 students, usually from <b>different</b> DEC10 classes'], ['Bring', 'The two texts printed, your notes, a pen — <b>no</b> phone or tablet'], ['Marked by', 'Two teachers'], ['Weight', '15% of your total score (50% of speaking)']])}
      <div class="gd-two">
        <article class="gd-card" style="--ec:#8a4f9e"><span class="gd-card-k">Part 1</span><b>Individual questions</b><p>You answer questions about a section of one of the reading texts.</p></article>
        <article class="gd-card" style="--ec:#2f9a63"><span class="gd-card-k">Part 2 · 12–15 min</span><b>Group discussion</b><p>Discuss a question about a <b>quote</b> from one text, and <b>evaluate three options</b> for an issue. There is no break between the parts.</p></article>
      </div>
      <p class="gd-tip">${icon('bulb')}<span>You practise the discussion moves from Week 3 onwards (“Interactive Discussion: discussion skills”). Bring short notes of the key ideas — not a script.</span></p>
      <p class="gd-links">${icon('book')}${a(L.idRubric, 'Interactive Discussion rubric')}</p>`;
  }
  const READY = [['laptop', 'I have a laptop that works (Windows 8+ or macOS, 4 GB RAM or more). Phones and tablets are not allowed.'], ['battery', 'My laptop runs for 3 hours — or I have a power bank. (You cannot plug into the wall.)'],
    ['ldb', 'I installed LockDown Browser.'], ['quiz', 'I did the LockDown Browser practice quiz.'], ['lang', 'I read “Language for online assessments”.'], ['soft', 'I removed language software (e.g. Sogou, Youdao) and turned off predictive text.'], ['news', 'I checked the Canvas announcements for this assessment.']];
  /* the ten weeks as one strip: a dot for each assessment, a bar for the Seminar + Portfolio weeks, and where we are now */
  function stripHTML() {
    const ws = weeks.filter(w => !w.brk), KC = { real: '#e64626', practice: '#3a58a0', check: '#2f7a52' };
    const cur = (() => { const w = weeks[nowIdx]; return w?.brk ? null : w?.n; })();
    const cells = ws.map(w => { const items = G.timeline.filter(t => { const m = String(t.week).match(/^(\d+)(?:–(\d+))?$/); if (!m) return false; const a = +m[1], b = m[2] ? +m[2] : a; return w.n >= a && w.n <= b; });
      const range = items.find(t => /–/.test(String(t.week)));
      return `<li class="${w.n === cur ? 'is-now' : ''}${range ? ' in-range' : ''}"><b>${w.n}</b>${items.filter(t => !/–/.test(String(t.week))).map(t => `<i style="--k:${KC[t.kind] || '#5d6a74'}" title="${esc(t.title)}"></i>`).join('')}${range ? `<span class="gd-sc-bar" style="--k:${KC[range.kind]}"></span>` : ''}</li>`; }).join('');
    return `<ol class="gd-strip" aria-label="The ten weeks">${cells}</ol><p class="gd-strip-key"><span style="--k:#e64626">Counts</span><span style="--k:#3a58a0">Practice</span><span style="--k:#2f7a52">Check-in</span>${cur ? `<span class="is-now">Week ${cur} · now</span>` : ''}</p>`;
  }
  function assessmentsHTML() {
    const tick = store.get('ready') || {}, n = READY.filter(([k]) => tick[k]).length;
    const total = G.weights.reduce((t, w) => t + w.total, 0);
    return `${head('DEC10 · How you are assessed', 'Assessments', 'What you do, when, and how much it counts — in plain English. Start with the big picture, then open the assessment you need.', AS_ART)}
    <nav class="gd-jump" aria-label="On this page">${[['gd-s-score', 'Your score'], ['gd-s-year', 'When'], ['gd-s-four', 'The four assessments'], ['gd-s-ready', 'Get ready'], ['gd-s-help', 'Rules & help']].map(([id, l]) => `<button type="button" data-gd-jump="${id}">${l}</button>`).join('')}</nav>
    <section class="gd-score" id="gd-s-score"><h2 class="gd-h2">Where your score comes from</h2>
      <div class="gd-bar" role="img" aria-label="${G.weights.map(w => `${w.skill} ${w.total}%`).join(', ')}">${G.weights.map(w => `<span style="--w:${w.total / total};--ec:${w.color}"><b>${w.total}%</b>${esc(w.skill)}</span>`).join('')}</div>
      <div class="gd-skills">${G.weights.map(w => `<div class="gd-skill" style="--ec:${w.color}"><b>${esc(w.skill)} <em>${w.total}%</em></b><ul>${w.parts.map(([p, v]) => `<li><span>${esc(p)}</span><i style="--p:${v / 16.5}"></i><b>${v}%</b></li>`).join('')}</ul></div>`).join('')}</div>
    </section>
    <section id="gd-s-year"><h2 class="gd-h2">When are my assessments?</h2>
      ${stripHTML()}
      <ol class="gd-tl">${G.timeline.map((t, i) => `<li class="is-${t.kind}" style="--i:${i}"><span class="gd-tl-w">Week ${esc(String(t.week))}</span><b>${esc(t.title)}</b><small>${esc(t.text)}</small><em>${t.kind === 'real' ? 'Counts' : t.kind === 'practice' ? 'Practice' : 'Check-in'}</em></li>`).join('')}</ol>
    </section>
    <section class="gd-tabs-wrap" id="gd-s-four"><h2 class="gd-h2">The four assessments</h2>
      <div class="gd-tabs" role="tablist">${TABS.map(([k, l, s]) => `<button type="button" role="tab" data-gd-tab="${k}" aria-selected="${asTab === k}"><b>${l}</b><small>${s}</small></button>`).join('')}</div>
      <div class="gd-tab" role="tabpanel">${tabBody(asTab)}</div>
    </section>
    <section id="gd-s-ready"><h2 class="gd-h2">Before every assessment</h2>
      <div class="gd-ready"><div class="gd-ready-meter" style="--p:${n / READY.length}"><b>${n}/${READY.length}</b><small>${n === READY.length ? 'Ready!' : 'ready'}</small></div>
        <ul>${READY.map(([k, t]) => `<li><label><input type="checkbox" data-gd-ready="${k}"${tick[k] ? ' checked' : ''}><span>${esc(t)}</span></label></li>`).join('')}</ul></div>
      <p class="gd-links">${icon('book')}${a(L.lockdownInstall, 'Install LockDown Browser')} ${a(L.lockdownQuiz, 'Practice quiz')} ${a(L.language, 'Language for online assessments')} ${a(L.removeSoftware, 'Removing language software')}</p>
      <p class="gd-tip">${icon('flag')}<span>In Week 1 you <b>must</b> attend the “Preparing for DEC10 assessments” session (Thursday). Your teacher also helps you set up in class.</span></p>
    </section>
    <section id="gd-s-help"><h2 class="gd-h2">Rules and help</h2>
      ${fold('The rules on the day', 'What you must and must not do', `<div class="gd-two"><div class="gd-do"><b>${icon('check')}You must</b><ul><li>follow every assessment rule</li><li>work honestly — the work must be all yours</li></ul></div>
        <div class="gd-dont"><b>${icon('alert')}You must not</b><ul><li>talk to or message anyone (except the supervisor)</li><li>use a phone or other device, unless the supervisor says so</li><li>use anything not allowed: sample answers, class writing, course readings, translation or language apps, predictive text</li><li>leave your seat without permission</li><li>type in any language except English</li></ul></div></div>
        <p class="gd-warn">${icon('alert')}Not knowing a rule is not an excuse. If you are unsure, ask the DEC Team — not other students. Breaking a rule can mean a new assessment or, in serious cases, cancelled enrolment.</p>`)}
      ${fold('Sick, an emergency, or a technical problem?', 'Special consideration', `<div class="gd-two"><div class="gd-do"><b>${icon('check')}These count</b><ul><li>serious illness or injury</li><li>an accident or a traumatic experience</li><li>a death in your family</li><li>a technical problem you could not prevent</li></ul></div><div class="gd-dont"><b>${icon('alert')}These do not count</b><ul><li>a cold or a headache</li><li>late trains or buses</li><li>a technical problem you could have avoided by checking first</li></ul></div></div>
        ${steps(['Tell the DEC Team <b>before</b> the assessment if you can — or within <b>48 hours</b> after.', 'Collect evidence: a medical certificate, a police report, or a photo/screenshot of the problem showing the time and date.', `Apply with the ${a(L.specialConsideration, 'Special Consideration form')} and upload your evidence.`, 'Technical problem during the test? Tell the supervisor straight away.'])}`)}
      ${fold('Think your mark is wrong?', 'Reviews and appeals', `<p>You can ask for a <b>review</b> of one assessment only if there was an <b>admin mistake</b> (e.g. a wrong number was entered) or your mark is <b>clearly inconsistent</b>. For a group task, every member must apply. You get an answer within 10 working days.</p>
        <p class="gd-warn">${icon('alert')}The new mark is final, and it can go <b>down</b> as well as up.</p>
        <p>To <b>appeal</b> your final DEC result you need evidence of an admin mistake, a reason for special consideration you did not already get, or serious circumstances outside your control. Apply as early as possible, using the form only — extra emails slow it down.</p>
        <p class="gd-links">${icon('book')}${a(L.assurance, 'How DEC10 marking is checked')}</p>`)}
      ${fold('Disability, health condition or learning difficulty', 'Disability and inclusion', `<p>If a disability or health condition (permanent or temporary, visible or not) makes study or assessments harder, CET can make adjustments — for example extra time, other formats or timetable changes. Telling CET is your choice, and your diagnosis is <b>not</b> shared with your teacher or classmates without your permission.</p>
        ${steps([`Fill in the ${a(L.disabilityForm, 'Disability and Inclusion Registration form')}.`, 'Add your evidence (e.g. a doctor’s letter and how it affects your study).', 'CET meets you and makes a personal plan of adjustments.'])}`)}
      ${fold('Contacts', 'Who to ask', `<dl class="gd-facts"><div><dt>Assessments, rules, forms</dt><dd><a href="mailto:${esc(G.contact)}">${esc(G.contact)}</a></dd></div><div><dt>Laptop or app problems</dt><dd>ICT: 02 8627 1444 (option 3) · <a href="mailto:ict.support@sydney.edu.au">ict.support@sydney.edu.au</a> · ${a(L.learningHubs, 'a Learning Hub')}</dd></div><div><dt>Stress and wellbeing</dt><dd><a href="mailto:cet.counsellors@sydney.edu.au">cet.counsellors@sydney.edu.au</a></dd></div></dl>`)}
    </section>`;
  }

  /* ───────── events ───────── */
  /* the "On this page" pills follow the reader: the section nearest the top is marked */
  let spyTick = false;
  document.addEventListener('scroll', () => { if (spyTick) return; spyTick = true; requestAnimationFrame(() => { spyTick = false;
    const nav = document.querySelector('.gd-jump'); if (!nav) return;
    const btns = [...nav.querySelectorAll('[data-gd-jump]')]; let cur = btns[0];
    for (const b of btns) { const el = document.getElementById(b.dataset.gdJump); if (el && el.getBoundingClientRect().top <= 230) cur = b; }
    btns.forEach(b => b.setAttribute('aria-current', b === cur ? 'true' : 'false')); }); }, { capture: true, passive: true });
  function onClick(t, d, rerender) {
    if (d.gdWeek != null) { calSel = Number(d.gdWeek); rerender(); document.querySelector(`[data-gd-week="${calSel}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return true; }
    if (d.gdJump) { document.getElementById(d.gdJump)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); return true; }
    if (d.gdDay) { openPast.has(d.gdDay) ? openPast.delete(d.gdDay) : openPast.add(d.gdDay); rerender(); return true; }
    if (d.gdFilter) { filter = d.gdFilter; rerender(); return true; }
    if (d.gdTab) { asTab = d.gdTab; rerender(); document.querySelector(`[data-gd-tab="${asTab}"]`)?.focus({ preventScroll: true }); return true; }
    return false;
  }
  function onChange(t, rerender) {
    if (!t.dataset.gdReady) return false;
    const o = store.get('ready') || {}; o[t.dataset.gdReady] = t.checked; store.set('ready', o); rerender();
    if (READY.every(([k]) => o[k])) toast('All set — you are ready for your assessments!');
    return true;
  }
  function centerNow() { const el = document.querySelector('.gd-rail [aria-pressed="true"]'), rail = el?.parentElement; if (rail && rail.scrollWidth > rail.clientWidth) rail.scrollLeft = el.offsetLeft - rail.clientWidth / 2 + el.offsetWidth / 2; }
  return { calendarHTML, assessmentsHTML, onClick, onChange, centerNow };
};
