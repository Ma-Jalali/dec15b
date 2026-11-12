/* DEC10 · Week 3 · Day 4 — Present, question, think again.
   Built from the Week 3 Teacher's Book, ordered by the revised weekly map: each Day page holds the parts TAUGHT that weekday.
   Taught on THURSDAY: 15A Group research summary presentations (#1–3, 120 min) · 16A STAR© moment (30) ·
   19A Interactive Presentation Assessment: Check in (30, moved from Day 5) · 22A AST: Criticality: Showing flexibility (60, moved from Day 5) ·
   17A Citing sources Homework. Day 5 continues 15A with presentations #4–5.
   Activity ids are the keys of saved work — never rename them.
   22A redesign (v8.2): Lead-in → Review → Presentation A stance (rules 1–5, spoken | written), B challenge (6–9, someone says | you ask),
   C flexibility (10–12, someone says | you answer) → Practice dp (parts 1–3) → Production d7–d9 with reference folds. TB texts and tasks kept.
   22A quality pass (v7.3, dec10/design/LESSON-DESIGN.md): TB questions shown directly (no spinners); one opinion line-up
   (lead-in) and one four corners (final position); stance language practised once, in the pitch; no expert huddle,
   duplicate scenario picture, devil's advocate, self-rating scale or extra writing box. TB texts, questions and tasks unchanged. */
(function () {
  const A = 'dec10/assets/week3/';
  const V = id => A + 'v/v-d10w3d4-' + id + '.svg';

  /* the Peer and Teacher Presentation Feedback Tool — same criteria as Week 2 */
  const TOOL = [
    { label: 'CONTENT DELIVERY', items: ['The problem was clearly stated.', 'The cause/s were clearly stated.', 'Evidence for the cause/s was given.', 'The effect/s were clearly stated.', 'Evidence for the effect/s was given.', 'A solution was clearly stated.', 'Solution was evaluated.'] },
    { label: 'Structure & Coherence', items: ['We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.'] },
    { label: 'Engagement', items: ['Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
    { label: 'FLUENCY and PRONUNCIATION', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
    { label: 'LANGUAGE USE', items: ['The grammar used was largely accurate and we could understand the meaning.', 'The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)'] },
    { label: 'QUESTION & ANSWER', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
  ];
  const tool = (id, n) => ({
    type: 'form', id, title: 'Peer and Teacher Feedback Tool · Group ' + n,
    intro: 'Choose Yes, Mostly or Needs work. Skip a line if it does not apply (N/A). Add a short comment where you can.',
    observe: 'Which presenter are you giving feedback to?',
    sections: TOOL,
    fields: [{ id: id + '-action', label: 'Action point (at least one)', rows: 2, placeholder: 'Next time, try … so that …' }],
    send: true, sendLabel: 'Send to the presenter',
    sendHint: 'Send your completed form to the presenter you gave feedback to, so they can save it in their Research & Seminar Presentations – Feedback & Action Plans folder.'
  });
  /* the audience is never passive: four jobs, rotated after every presentation (the presentation format itself does not change) */
  const JOBS = [
    { label: 'Question master', text: 'Collect your group’s questions. Lead the vote. Hold up the C / P / AST card.', icon: 'chat' },
    { label: 'Evidence detective', text: 'Write every source you hear aloud: name + year. Was one missing?', icon: 'search' },
    { label: 'Cause → effect tracker', text: 'Note one cause → effect chain for each speaker.', icon: 'link' },
    { label: 'Language spotter', text: 'Listen for useful phrases: hand-overs, cause and effect, sources.', icon: 'pen' }
  ];
  const jobPick = (id, n) => ({ type: 'cards', title: 'My audience job for Group ' + n + ' (tap one)', pick: id, items: JOBS });
  const groupSteps = n => ({
    type: 'steps', title: 'Group ' + n + ' · what everyone does', items: [
      { who: 'class', text: '<b>Before:</b> sit with your feedback group. Take a <b>new</b> audience job (pass your old job to the left). Have your three cards ready: <b>C</b>, <b>P</b>, <b>AST</b>.' },
      { who: 'group', text: '<b>Step 1 (8–10 min):</b> Group ' + n + ' presents. Listen AND fill in the feedback tool for <b>your allocated presenter</b>. Do your audience job too. Start thinking of a question.' },
      { who: 'alone', text: '<b>Step 2 (10 min):</b> write ONE question: <b>clarification</b>, <b>probing</b> or <b>AST</b>. The presenters reflect. In your group, read your questions aloud and <b>vote</b>: on “3”, point at the best one. Your teacher chooses 3–5 students to ask — <b>hold up your C, P or AST card</b> to show what kind of question you have.' },
      { who: 'group', text: '<b>Step 3 (5–7 min):</b> share your feedback in your group. The detective, tracker and spotter report first (30 seconds each). Agree on <b>at least one action point</b>. (Your teacher gives feedback to the presenters.)' },
      { who: 'group', text: '<b>Step 4 (5 min):</b> your presenter sits with your group. Give the feedback face to face. Then <b>send</b> the form.' }
    ]
  });

  window.DEC15_LESSON = {
    id: 'd10w3d4',
    week: 3,
    day: 4,
    title: 'Present, question, think again',
    duration: 'About 4 hours + homework',
    question: 'How do you show you are open-minded — when you present, when you ask, and when you change your mind?',
    questionKind: 'Big question',
    questionLabel: 'Today’s big question',
    journey: 'Groups 1, 2 and 3 give their Research Summary presentations on the workforce of the future — and this time you ask AST questions too. Tell your teacher what you need in a STAR moment, check in on your Interactive Presentation, then learn the language of keeping and changing your position and try it in a laptop debate. Tonight: in-text citations and reporting verbs.',
    image: A + 'hero-d10w3d4.svg',
    imageAlt: 'Illustration: a group of three students presents “The workforce of the future” on a big screen. In the audience, students hold feedback forms and question bubbles marked C, P and AST. On the right, four laptops sit on a table, and a thought bubble turns from one opinion into another.',
    finish: { title: 'Day 5', text: 'Presentations #4 and #5, your feedback action plan and the Interactive Discussion' },
    goalShort: 'your presentations, your Interactive Presentation and your Interactive Discussion',
    sections: [
      /* ─────────────────────────── 15A ─────────────────────────── */
      {
        id: 'rspres3',
        number: '01',
        code: '15A',
        minutes: 120,
        tone: 'plum',
        art: A + 's-d4-rspres3.svg',
        title: 'Group research summary presentations',
        subtitle: 'Presentations #1–3 · peer & teacher feedback',
        outcome: 'You have delivered a structured presentation to an audience, practised answering audience questions spontaneously, and made judgments about your own and your peers’ presentations.',
        activities: [
          {
            id: 'a1',
            short: 'Where we are',
            minutes: 5,
            grouping: 'Class',
            art: V('a1'),
            title: 'Group Research Summary Presentations',
            goal: 'Know where today fits, what is new this week — and get your audience job.',
            blocks: [
              {
                type: 'figure',
                src: A + 'd4-rs-week.svg',
                size: 'wide',
                alt: 'Four steps across the week. Monday: individuals research and prepare a summary of research. Tuesday (1): individuals form groups and share their summaries. Tuesday (2): group presentation preparation. Thursday and Friday: groups deliver their Research Summary Group Presentations. Today, Thursday, is marked: presentations 1, 2 and 3. Friday: presentations 4 and 5. Topic: The workforce of the future. Rhetorical functions: cause and effect.',
                caption: 'Today: Presentations #1, #2 and #3. Tomorrow: #4 and #5.'
              },
              {
                type: 'key',
                title: 'Today in four facts',
                points: [
                  '<b>Topic:</b> The workforce of the future · <b>Rhetorical Functions:</b> Cause and Effect',
                  'Each group presents for <b>8–10 minutes</b> + <b>5 minutes</b> for follow-up questions.',
                  '<b>New this week:</b> as well as <b>probing</b> and <b>clarification</b> questions, you ask <b>AST</b> questions (about the Academic Success Toolkit).',
                  'No mark — just peer and teacher feedback with the <b>Peer and Teacher Presentation Feedback Tool</b>.'
                ]
              },
              {
                type: 'figure',
                src: A + 'd4-audience-jobs.svg',
                size: 'wide',
                alt: 'An audience group of four sits in front of a presenter. Each audience member has a job badge: Question master with C, P and AST cards; Evidence detective with a magnifying glass writing name and year; Cause and effect tracker with an arrow chain; Language spotter with a phrase card. A circular arrow shows that the jobs rotate after every presentation.',
                caption: 'Nobody just sits and watches: four audience jobs, a new job for every group.'
              },
              {
                type: 'steps',
                title: 'Do it now',
                items: [
                  { who: 'class', text: '<b>Stand up.</b> Go to your <b>feedback group</b>. Your teacher tells you which presenter your group gives feedback to.' },
                  { who: 'group', text: 'Give out the four audience jobs. You keep the job for one presentation, then pass it to the left.' },
                  { who: 'alone', text: 'Make three small cards: <b>C</b>, <b>P</b> and <b>AST</b> (three colours if you can). You will hold one up when you want to ask.' }
                ]
              },
              { type: 'tip', text: 'Your teacher may give your group <b>paper job cards</b> and <b>C / P / AST cards</b>. No cards? Choose your job on the screen in each presentation, and make your three cards from paper.' },
              {
                type: 'bet',
                id: 'a1-bet',
                title: 'Quick check — bet your coins',
                items: [
                  { q: 'How long does each group present?', options: ['3–5 minutes', '8–10 minutes', '15–20 minutes'], answer: '8–10 minutes' },
                  { q: 'Which questions can you ask this week?', options: ['Clarification and probing only', 'Clarification, probing and AST', 'AST only'], answer: 'Clarification, probing and AST', why: 'AST questions are new in Week 3. They ask how the presenters used their academic skills.' },
                  { q: 'Who is your feedback for?', options: ['The whole group', 'One presenter your teacher gives you'], answer: 'One presenter your teacher gives you', why: 'The feedback is for individual speakers. Your teacher allocates one presenter to each group in the audience.' }
                ]
              }
            ]
          },
          {
            id: 'a2',
            short: 'Get ready',
            minutes: 10,
            grouping: 'Presentation groups',
            art: V('a2'),
            title: 'Last-minute practice and preparation',
            goal: 'Rehearse once more — and get your feedback tool ready.',
            blocks: [
              {
                type: 'checklist',
                id: 'a2-ready',
                title: 'Before we start',
                meter: ['ready', 'Ready to go!'],
                items: [
                  'I am sitting with my presentation group.',
                  'Our slides are open and ready (no hold-ups).',
                  'I know my part, and who speaks before and after me.',
                  'The Peer and Teacher Presentation Feedback Tool is open, ready to fill out.',
                  'I can say my main source aloud (name + year).'
                ]
              },
              { type: 'download', id: 'feedback-tool', note: 'One form for each group you watch today: Groups 1, 2 and 3. Tick <b>Research Summary Presentation</b> at the top and save each form with the group’s name.' },
              { type: 'do', n: 1, who: 'group', text: '<b>Presenters: stand up</b> in your speaking order, like on the day. Each speaker says your <b>first sentence</b> and your <b>hand-over</b> aloud, then steps back — don’t read! <b>Audience groups:</b> write one question starter on the back of each C / P / AST card.' },
              {
                type: 'language',
                title: 'Language for your group presentation',
                groups: [
                  { label: 'Open', phrases: ['Good morning, everyone. <b>Today we’re going to look at</b> how … is changing the workforce.', 'Our talk <b>is divided into</b> three parts: the causes, the effects and <b>our take-away</b>.'] },
                  { label: 'Cause → effect', phrases: ['<b>One of the main drivers of</b> this change is …', 'Automation <b>is likely to lead to</b> …', '<b>As a result</b>, many workers will need to <b>upskill</b>.', 'This shift <b>is largely due to</b> …', '<b>The more</b> companies go green, <b>the greater</b> the demand for green skills.'] },
                  { label: 'Sources aloud', phrases: ['<b>According to</b> Bowen and colleagues (2018), …', '<b>A report by</b> … <b>found that</b> …', '<b>As</b> … <b>points out</b>, …'] },
                  { label: 'Hand over', phrases: ['<b>Now I’ll hand over to</b> Lin, who will explain the effects.', '<b>Thanks</b>, Lin. <b>Building on</b> that point, …', '<b>That covers</b> the causes. <b>Next</b>, Omar will look at …'] },
                  { label: 'Close + take-away', phrases: ['<b>To sum up</b>, our research shows that …', '<b>The key take-away is</b> …', '<b>One thing we would like to research further is</b> …', '<b>Thank you for listening.</b> We’re happy to take your questions.'] }
                ]
              },
              { type: 'do', n: 2, who: 'group', text: '<b>Hot seat.</b> The speaker <b>stands</b>. One person spins and asks. The speaker answers in 30 seconds <b>without notes</b>, using a starter. Then swap. (Audience groups play too: it is good practice for your own talk tomorrow.)' },
              {
                type: 'spinner',
                id: 'a2-spin',
                title: 'Answer on the spot',
                reels: [
                  { label: 'Question', items: ['Could you explain what you mean by “green skills”?', 'Why do you think automation affects some jobs more than others?', 'Where did that figure come from?', 'How did your group decide who does what?', 'How did you check that your sources were reliable?', 'Did your research change your view of the topic?', 'How did you manage your time when preparing?'] },
                  { label: 'Start your answer with', items: ['That’s a good question. …', 'What I meant was …', 'According to my source, …', 'To be honest, at first … but then …', 'We decided to … because …', 'I’m not completely sure, but I think …'] }
                ]
              }
            ]
          },
          {
            id: 'a3',
            short: 'Question toolkit',
            minutes: 5,
            grouping: 'Groups',
            art: V('a3'),
            title: 'Clarification, probing and AST questions',
            goal: 'Know the three kinds of question you can ask today.',
            blocks: [
              { type: 'download', id: 'ip-questions', note: 'Open it now and keep it open during the presentations. This week you can use the <b>AST questions</b> on it too.' },
              {
                type: 'hotspot',
                src: A + 'd4-q-types.svg',
                alt: 'Three question doors. C: Clarification — I did not understand; for example, What do you mean by …? P: Probing — tell me more, go deeper; for example, Why did you choose to focus on …? AST: Academic Success Toolkit — how did you use your academic skills; for example, How did your group decide who does what?',
                title: 'Three kinds of follow-up question',
                hint: 'Tap each door.',
                size: 'wide',
                spots: [
                  { x: 18, y: 42, label: 'C', title: 'Clarification', text: 'You didn’t understand something, or you want the exact meaning.<br><i>What did you mean by …? · Could you clarify how/when/where/why …?</i>', color: '#3a58a0' },
                  { x: 50, y: 42, label: 'P', title: 'Probing', text: 'You want the speaker to explain more or go deeper.<br><i>Why do you think … is important for your point? · How did you come to that conclusion?</i>', color: '#7a4a8c' },
                  { x: 82, y: 42, label: 'AST', title: 'AST — Academic Success Toolkit', text: 'You ask how the speaker used an academic skill: group work, research, self-regulation, feedback literacy, digital literacy and AI, criticality.<br><i>How did you make sure everyone’s ideas were considered?</i>', color: '#2b776e' }
                ]
              },
              { type: 'do', n: 1, who: 'class', text: '<b>Three corners.</b> Corner 1 = C, corner 2 = P, corner 3 = AST. Your teacher reads a question from the list below. <b>Walk</b> to its corner. Wrong corner? Someone in the right corner explains why.' },
              { type: 'do', n: 2, who: 'group', text: 'Back in your seat: sort the questions to check. Then each person reads one aloud with good intonation (voice <b>up</b> on yes/no questions, <b>down</b> on wh- questions).' },
              {
                type: 'sort',
                id: 'a3-sort',
                title: 'Which kind of question?',
                buckets: [
                  { label: 'Clarification', letter: 'C' },
                  { label: 'Probing', letter: 'P' },
                  { label: 'AST', letter: 'AST' }
                ],
                items: [
                  { text: 'What does “reskilling” mean in your presentation?', answer: 0 },
                  { text: 'Sorry, did you say 50% or 15% of jobs?', answer: 0 },
                  { text: 'Why do you think green jobs will grow so fast?', answer: 1 },
                  { text: 'How did you come to that conclusion?', answer: 1 },
                  { text: 'How did you decide who does what in preparing this presentation?', answer: 2 },
                  { text: 'Which AI tools did you use in your research, and how did you use them?', answer: 2 },
                  { text: 'Did your research change your perspective on this topic? How?', answer: 2, why: 'This asks about criticality — one of the AST skills.' }
                ]
              },
              {
                type: 'language',
                title: 'Ask politely — and answer AST questions well',
                tabs: false,
                groups: [
                  { label: 'Soften your question', phrases: ['<b>I was wondering</b> how you …', '<b>Could you tell us a bit more about</b> …?', '<b>You mentioned</b> … . <b>Why did you</b> …?'] },
                  { label: 'Answer an AST question', phrases: ['<b>To manage our time, we</b> set a deadline for each part.', '<b>We used</b> a shared document <b>so that</b> everyone could add ideas.', '<b>I checked</b> my sources <b>using</b> the CRAAP test.', '<b>At first I thought</b> …, <b>but my research showed</b> …'] }
                ]
              },
              { type: 'sticky', title: 'Say it like an academic · phrase of the stage', text: '“<b>I was wondering</b> how you decided to focus on … ?” — soft, polite, and it works for C, P and AST questions.' }
            ]
          },
          {
            id: 'a4',
            short: 'Group 1',
            minutes: 30,
            grouping: 'Groups',
            art: V('a4'),
            title: 'Presentation 1 · Group 1',
            goal: 'Listen, rate, ask — and give useful feedback to one presenter.',
            blocks: [
              {
                type: 'figure',
                src: A + 'd4-rs-cycle.svg',
                size: 'wide',
                alt: 'Summary of procedure per group presentation, 30 minutes in total. Step 1, 8–10 minutes: the group presents; everyone else listens and completes the feedback tool. Step 2, 10 minutes: the audience writes one clarification, probing or AST question; the presenters reflect; 3–5 students ask. Step 3, 5–7 minutes: groups prepare feedback with at least one action point; the teacher gives feedback to the presenters. Step 4, 5 minutes: each presenter sits with their feedback group, hears the feedback, and the forms are sent.',
                caption: 'Summary of procedure per group presentation — about 30 minutes for each group.'
              },
              groupSteps(1),
              jobPick('a4-job', 1),
              { type: 'tip', text: 'Your teacher may give you a <b>paper bingo sheet</b>. No sheet? Play on this page: tap a square and write the speaker’s name or initial.' },
              {
                type: 'bingo',
                id: 'a4-bingo', label: 'Who said it?',
                title: 'Live task · Presentation bingo: who said it?',
                hint: 'Everyone plays (the Language spotter leads). When you hear or see it, write the speaker’s name or initial in the square. Four in a row? Don’t shout — raise your hand silently and wait for the end of the talk.',
                squares: [
                  { text: 'A source said aloud: <b>name + year</b>' },
                  { text: '“<b>One of the main drivers of</b> …”' },
                  { text: '“<b>As a result</b>, …”' },
                  { text: 'A number or a percentage' },
                  { text: 'A smooth hand-over to the next speaker' },
                  { text: '“… <b>is likely to lead to</b> …”' },
                  { text: 'Eye contact with the back of the room' },
                  { text: 'A clear problem statement' },
                  { text: '“… <b>due to</b> …”' },
                  { text: 'A solution' },
                  { text: 'The solution is evaluated (pros / cons)' },
                  { text: 'A pause before a key point' },
                  { text: '“<b>To sum up</b>, …”' },
                  { text: 'The key take-away' },
                  { text: 'A cause → effect chain with evidence' },
                  { text: '“<b>Thank you for listening.</b>”' }
                ]
              },
              {
                type: 'fields',
                fields: [{ id: 'a4-q', label: 'My question for Group 1 (write C, P or AST first)', rows: 2, placeholder: 'AST: How did you make sure everyone’s ideas were considered?' }]
              },
              tool('a4-tool', 1),
              {
                type: 'language',
                title: 'Language for giving peer feedback · W1 D3 AST Feedback Literacy',
                groups: [
                  { label: 'Praise (be specific)', phrases: ['<b>… was really clear because</b> …', '<b>I liked the way you</b> linked the cause to the effect.', '<b>Your example of</b> … <b>made the point easy to follow.</b>'] },
                  { label: 'Suggest', phrases: ['To make it clearer that …, <b>you could</b> …', 'To strengthen …, <b>it might help</b> …', '<b>Perhaps consider</b> …-ing … rather than …', 'For better …, <b>I suggest you</b> …', '<b>It might be beneficial to</b> …'] },
                  { label: 'Remind', phrases: ['<b>Don’t forget to</b> …', '<b>Remember to</b> …', '<b>Be mindful of</b> …', '<b>Try</b> … <b>to</b> …, <b>so</b> …'] },
                  { label: 'Action point', phrases: ['<b>Next time, try</b> … <b>so that</b> …', '<b>One thing to work on is</b> …', '<b>For your Interactive Presentation, you could</b> …'] }
                ]
              }
            ]
          },
          {
            id: 'a5',
            short: 'Group 2',
            minutes: 30,
            grouping: 'Groups',
            art: V('a5'),
            title: 'Presentation 2 · Group 2',
            goal: 'Same steps — this time, try a different kind of question.',
            blocks: [
              groupSteps(2),
              jobPick('a5-job', 2),
              {
                type: 'table',
                id: 'a5-track', live: 'names',
                title: 'Live task · Cause → effect + evidence tracker (everyone; the detective and the tracker lead)',
                columns: ['Speaker', 'Cause', '→ Effect', 'Source said aloud? (name + year)'],
                fixed: ['Speaker 1', 'Speaker 2', 'Speaker 3'],
                extraRows: true
              },
              { type: 'choose', id: 'a5-kind', title: 'Challenge: this time I will ask a …', options: ['Clarification question', 'Probing question', 'AST question'] },
              { type: 'fields', fields: [{ id: 'a5-q', label: 'My question for Group 2', rows: 2, placeholder: 'Probing: Why did you choose to focus on …?' }] },
              tool('a5-tool', 2),
              { type: 'do', n: 1, who: 'class', text: '<b>Class vote</b> (after Step 2): your teacher reads the options. <b>Hands up</b> for one. The winner is Group 2’s “star feature” — say it to them in Step 4.' },
              { type: 'choose', id: 'a5-vote', title: 'Group 2’s strongest feature was …', options: ['Clear causes and effects', 'Sources said aloud', 'Smooth hand-overs', 'Clear visuals', 'Spontaneous answers to questions'] },
              {
                type: 'toggle',
                title: 'Want more? A model of giving feedback',
                hint: 'Read it before Step 4 if you are not sure what to say.',
                blocks: [
              { type: 'do', n: 2, who: 'group', text: 'Read how one group gives feedback. Notice the <mark>highlighted</mark> moves: praise, suggest, action point, check.' },
              {
                type: 'chat',
                title: 'Giving feedback to your presenter — a model',
                right: 'Presenter',
                lines: [
                  ['Feedback group', 'Hi Sara, thanks for joining us. <mark>Your part on automation was really clear because</mark> you gave a cause and then an effect with a number.'],
                  ['Presenter', 'Thank you! Was my evidence OK?'],
                  ['Feedback group', 'Yes, mostly. <mark>To make it even stronger, you could</mark> say the source aloud — we didn’t hear the name and year.'],
                  ['Presenter', 'Oh, I see. I had it on the slide but I didn’t say it.'],
                  ['Feedback group', 'Exactly. And when you answered the AST question, you read from your notes. <mark>Next time, try</mark> keeping just three key words in your hand, <mark>so that</mark> you can look at the audience.'],
                  ['Presenter', 'That makes sense. <mark>So my action point is</mark> to say my sources aloud and use fewer notes?'],
                  ['Feedback group', 'Yes! <mark>We’ll send you the form now</mark> so you can save it.']
                ]
              }
                ]
              }
            ]
          },
          {
            id: 'a6',
            short: 'Group 3',
            minutes: 30,
            grouping: 'Groups',
            art: V('a6'),
            title: 'Presentation 3 · Group 3',
            goal: 'Same steps — and make your feedback really useful.',
            blocks: [
              groupSteps(3),
              jobPick('a6-job', 3),
              {
                type: 'fields',
                title: 'Live task · Catch the take-away',
                fields: [{ id: 'a6-take', label: 'Group 3’s message in ONE sentence (use a cause → effect phrase)', rows: 2, placeholder: 'Group 3 argued that … is likely to lead to … , so …' }]
              },
              { type: 'fields', fields: [{ id: 'a6-q', label: 'My question for Group 3', rows: 2, placeholder: 'Clarification: Could you clarify how …?' }] },
              tool('a6-tool', 3),
              { type: 'do', n: 1, who: 'class', text: '<b>Card vote</b> (after Step 2): which question got the most useful answer? On “3”, everyone holds up the card — <b>C</b>, <b>P</b> or <b>AST</b>. The question master counts for your group.' },
              { type: 'choose', id: 'a6-award', title: 'Best-answer award goes to the …', options: ['Clarification question', 'Probing question', 'AST question'] },
              { type: 'do', n: 2, who: 'group', text: 'Before you give your feedback: which comments help a presenter, and which don’t? Sort them.' },
              {
                type: 'sort',
                id: 'a6-sort',
                title: 'Useful feedback or not?',
                buckets: [
                  { label: 'Useful: specific + action', letter: '✓' },
                  { label: 'Not useful: vague or personal', letter: '✗' }
                ],
                items: [
                  { text: 'Good job!', answer: 1, why: 'Nice, but what exactly was good? The presenter can’t use it.' },
                  { text: 'Your hand-over to Ali was smooth because you summed up your point first.', answer: 0 },
                  { text: 'I didn’t like it.', answer: 1 },
                  { text: 'Try pausing after each key number, so the audience has time to take it in.', answer: 0 },
                  { text: 'Your voice is weird.', answer: 1, why: 'Personal and unkind. Talk about the speaking (e.g. intonation), not the person.' },
                  { text: 'Perhaps consider using one example from Australia rather than three general ones.', answer: 0 }
                ]
              },
              { type: 'tip', text: '<b>Important:</b> by the end of the lesson, all feedback tool forms must be sent to the presenters — even if you gave the feedback aloud in class. Teachers send theirs too.' }
            ]
          },
          {
            id: 'a7',
            short: 'Reflect',
            minutes: 10,
            grouping: 'Alone → Group',
            art: V('a7'),
            title: 'Reflection',
            goal: 'Learn from today — as a presenter or as the audience.',
            blocks: [
              {
                type: 'tabs',
                title: 'Choose your tab',
                tabs: [
                  {
                    label: 'I presented today',
                    blocks: [
                      {
                        type: 'fields',
                        fields: [
                          { id: 'a7-well', label: '1. What did you do well (individually and as a group)?', rows: 3 },
                          { id: 'a7-better', label: '2. What do you want to do better in your next presentation (individually and as a group)?', rows: 3 }
                        ]
                      },
                      { type: 'checklist', id: 'a7-saved', title: '3. Save your feedback', items: ['I saved the feedback tool forms from my teacher and peers in my Research & Seminar Presentations – Feedback & Action Plans folder.'] }
                    ]
                  },
                  {
                    label: 'I present tomorrow',
                    blocks: [
                      {
                        type: 'fields',
                        fields: [
                          { id: 'a7-copy', label: 'What will you copy from today’s presenters?', rows: 3 },
                          { id: 'a7-change', label: 'What will you change in your own talk tonight?', rows: 3 }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: 'do', n: 1, who: 'class', text: '<b>Opinion line-up.</b> Stand up. One wall = “Not yet”, the other wall = “Yes, easily”. Stand on the line: <i>I answered (or asked) questions spontaneously, without reading.</i> Tell the person next to you why you are standing there. Then sit down and rate yourself.' },
              { type: 'tip', text: 'Your teacher may put two signs on the walls: <b>Not yet</b> and <b>Yes, easily</b>. No signs? Your teacher points to the two walls.' },
              { type: 'scale', id: 'a7-ans', title: 'Rate yourself', statement: 'I answered (or asked) questions spontaneously, without reading.', ends: ['Not yet', 'Yes, easily'] },
              { type: 'do', n: 2, who: 'pair', text: '<b>Walk and talk.</b> Find someone from a <b>different</b> feedback group. Walk to the window and back while you talk. Use the starters below.' },
              { type: 'talk', title: 'Walk and talk', prompts: ['The best question I heard today was … because …', 'In my audience job, I noticed that …', 'One thing I will copy from today’s presenters is …', 'One thing I will avoid is …'] },
              {
                type: 'fields',
                title: 'Exit ticket',
                fields: [{ id: 'a7-exit', label: 'One phrase I will use in my next presentation or Q&A', rows: 1, placeholder: 'That’s a good question. What I meant was …' }]
              },
              {
                type: 'key',
                title: 'After class',
                points: ['Remember to continue your research for your group’s seminar topic and final Interactive Presentation Assessment.']
              }
            ]
          }
        ]
      },

      /* ─────────────────────────── 16A ─────────────────────────── */
      {
        id: 'star',
        number: '02',
        code: '16A',
        minutes: 30,
        tone: 'amber',
        art: A + 's-d4-star.svg',
        title: 'STAR© moment',
        subtitle: 'Your questions, your language needs',
        outcome: 'You have reflected on your learning needs this week and talked to your teacher about them.',
        activities: [
          {
            id: 'b1',
            short: 'What is it?',
            minutes: 5,
            grouping: 'Class',
            art: V('b1'),
            title: 'What are Teachable STAR Moments?',
            goal: 'This time is for you.',
            blocks: [
              {
                type: 'cards',
                title: 'In a STAR moment, your teacher might …',
                items: [
                  { label: 'Your questions', text: 'address specific questions you might have.', icon: 'search' },
                  { label: 'Your language', text: 'address your specific language needs.', icon: 'pen' },
                  { label: 'Your feedback', text: 'adapt the lesson to your needs — so tell your teacher what you need!', icon: 'chat' }
                ]
              },
              {
                type: 'key',
                title: 'How to take part',
                points: ['Teachable STAR moments are about responsive, adaptive teaching — lessons tailored to <b>your</b> needs.', 'The best way to take part: <b>reflect on your learning needs</b> and <b>talk to your teacher</b> about them. Your feedback matters!']
              },
              {
                type: 'steps',
                title: 'Stand up, sit down',
                items: [
                  { who: 'class', text: 'Everyone stands. Your teacher reads a sentence. <b>Sit down</b> if it is <b>not</b> true for you. Stand up again for the next one.' },
                  { who: 'class', text: '“I have a question about AST questions.” · “I want more practice with cause and effect.” · “I’m not sure how to cite a source.” · “I find it hard to answer questions on the spot.”' },
                  { who: 'class', text: 'Look around: who is still standing? Those are your helpers — or your partners — in the next activity.' }
                ]
              },
              { type: 'sticky', title: 'Say it like an academic · phrase of the stage', text: '“Could we <b>go over</b> … again, please? I <b>understand</b> …, <b>but not</b> … .”' }
            ]
          },
          {
            id: 'b2',
            short: 'My needs',
            minutes: 10,
            grouping: 'Alone → Pair',
            art: V('b2'),
            title: 'Reflect on your learning needs',
            goal: 'What has gone well this week? What do you still need help with?',
            blocks: [
              {
                type: 'grid',
                id: 'b2-grid',
                title: 'Week 3 so far',
                rows: [
                  'Supporting my group (group work skills)',
                  'Reading and talking about green jobs and green skills',
                  'Listening and taking notes from a podcast',
                  'Mediation: explaining a source to others',
                  'Writing emails and messages to lecturers and classmates',
                  'Academic style in my writing',
                  'Seminar: opening remarks and discussion',
                  'Presenting and answering questions on the spot'
                ],
                columns: ['How do I feel?'],
                options: ['I’m confident', 'Getting there', 'I need help']
              },
              {
                type: 'fields',
                fields: [
                  { id: 'b2-needs', label: 'My top two learning needs', placeholder: '1. … 2. …', rows: 2 },
                  { id: 'b2-q', label: 'A question I want to ask my teacher', placeholder: 'I’m still not sure how to …', rows: 2 }
                ]
              },
              { type: 'do', n: 1, who: 'class', text: '<b>Need mingle.</b> Stand up with your notebook. Walk and ask: “What’s your top need?” Find someone with the <b>same</b> need (or one you can help with). Sit together.' },
              { type: 'do', n: 2, who: 'pair', text: 'Can you help each other right now? Try for two minutes. What is still not clear goes into your question for the teacher.' }
            ]
          },
          {
            id: 'b3',
            short: 'Ask',
            minutes: 15,
            grouping: 'Pair → Class',
            art: V('b3'),
            title: 'Talk to your teacher',
            goal: 'Ask clearly — and get the help you need.',
            blocks: [
              {
                type: 'language',
                title: 'Ask your teacher for help',
                groups: [
                  { label: 'Ask to explain', phrases: ['Could you <b>explain</b> … <b>again</b>, please?', 'What’s the <b>difference between</b> … and …?', 'Could you give us <b>an example of</b> …?'] },
                  { label: 'Say what is hard', phrases: ['I’m <b>not sure how to</b> …', 'I <b>get confused when</b> …', 'I <b>understand</b> …, <b>but not</b> …'] },
                  { label: 'Ask for practice', phrases: ['Could we have <b>more practice with</b> …?', 'Could you <b>check</b> my …?', 'Is it OK if we <b>go over</b> …?'] }
                ]
              },
              {
                type: 'chat',
                title: 'A good request',
                right: 'Student',
                lines: [
                  ['Teacher', 'So, what would you like to work on?'],
                  ['Student', 'I <mark>understand</mark> clarification questions, <mark>but not</mark> AST questions. I don’t know how to answer them.'],
                  ['Teacher', 'Good question. Which AST question was hard today?'],
                  ['Student', '“How did you manage your time?” I just said “Good.”'],
                  ['Teacher', 'Try this: say <b>what you did</b>, <b>a tool</b>, and <b>a result</b>. “We set a deadline for each slide in a shared calendar, so we finished a day early.”'],
                  ['Student', 'Oh, I see. <mark>Could we have more practice with</mark> that?']
                ]
              },
              { type: 'do', n: 1, who: 'pair', text: 'Practise your question with a partner. Make it <b>specific</b>: say what you understand and what you don’t.' },
              {
                type: 'cards',
                title: 'Class vote: what should we practise now?',
                pick: 'b3-vote',
                items: [
                  { label: 'AST questions', text: 'asking and answering them', icon: 'search' },
                  { label: 'Cause & effect', text: 'leads to, due to, as a result…', icon: 'link' },
                  { label: 'Seminar skills', text: 'opening remarks, joining in', icon: 'chat' },
                  { label: 'Academic style', text: 'formal words, no contractions', icon: 'pen' }
                ]
              },
              { type: 'do', n: 2, who: 'class', text: '<b>Sticky-note board.</b> Write your question on a sticky note. Stick it on the board under one of the four topics above. Then walk past the board and put a tick (✓) on <b>two</b> other questions you also want answered.' },
              { type: 'do', n: 3, who: 'class', text: 'The topic with the most notes and ticks wins. Your teacher answers the top questions in the rest of the STAR moment. Listen and take one note.' },
              {
                type: 'fields',
                title: 'Exit ticket',
                fields: [{ id: 'b3-exit', label: 'After the STAR moment: one thing I understand better now', rows: 2, placeholder: 'Now I understand that … / I can now …' }]
              }
            ]
          }
        ]
      },

      /* ─────────────────────────── 19A ─────────────────────────── */
      {
        id: 'ipcheck',
        number: '03',
        code: '19A',
        minutes: 30,
        tone: 'teal',
        art: A + 's-d4-ipcheck.svg',
        title: 'Interactive Presentation Assessment: Check in',
        subtitle: 'Where is your group now?',
        outcome: 'You have engaged in criticality and research skills, managed and monitored your progress in preparing for the Interactive Presentation Assessment, and managed working with your group.',
        activities: [
          {
            id: 'c1',
            short: 'The task',
            minutes: 6,
            grouping: 'Pair',
            art: V('c1'),
            title: 'Description',
            goal: 'Remind yourself what the Interactive Presentation is.',
            blocks: [
              {
                type: 'key',
                title: 'The Interactive Presentation Assessment',
                points: [
                  'It assesses your ability to work collaboratively to research, plan and present research findings in an appropriate academic context, and to further discuss your research.',
                  'You work with your <b>Seminar group</b> to research, plan and present your research findings on your allocated topic.',
                  'You help each other with research and planning <b>BUT</b> you give an <b>INDIVIDUAL</b> presentation, <b>NOT a group</b> presentation.',
                  'After your individual presentation, you answer <b>4–6 follow-up questions</b> about your presentation content and about how you applied your academic skills.'
                ]
              },
              { type: 'do', n: 1, who: 'pair', text: 'Close the box above. Explain the task to your partner in <b>three sentences</b>.' },
              { type: 'do', n: 2, who: 'class', text: '<b>Stand up for true.</b> Your teacher reads each sentence below. True? Stand up. False? Stay seated. Then bet your coins on the screen.' },
              {
                type: 'bet',
                id: 'c1-bet',
                title: 'True or false? Bet on it.',
                items: [
                  { q: 'You give one presentation together as a group.', options: ['True', 'False'], answer: 'False', why: 'You prepare together, but you give an INDIVIDUAL presentation.' },
                  { q: 'Your Seminar group helps each other with research and planning.', options: ['True', 'False'], answer: 'True' },
                  { q: 'After your presentation, you answer 4–6 questions.', options: ['True', 'False'], answer: 'True', why: 'Questions on your content and on how you applied your academic skills (AST).' },
                  { q: 'Today’s AST questions are good practice for the assessment.', options: ['True', 'False'], answer: 'True', why: 'The follow-up questions in the assessment include questions about your academic skills.' }
                ]
              }
            ]
          },
          {
            id: 'c2',
            short: 'Timeline',
            minutes: 6,
            grouping: 'Class',
            art: V('c2'),
            title: 'Timeline: check-in',
            goal: 'Where are we on the road to Week 7?',
            blocks: [
              { type: 'do', n: 1, who: 'class', text: '<b>Human timeline.</b> The front wall is the road: Week 1 on the left, Week 7 on the right. Stand where <b>your own research</b> is now — not where the calendar is. Say to your neighbour: “I’m here because …”.' },
              {
                type: 'hotspot',
                src: A + 'd4-ip-road.svg',
                alt: 'A winding road from Week 1 to Week 7. Week 1: set up. Weeks 2 to 6: research, plan and prepare together. A pin says You are here at Week 3. Week 7: practise, then the Interactive Presentation assessment on Thursday and Friday, with a flag.',
                title: 'The road to the Interactive Presentation',
                hint: 'Tap each week.',
                size: 'wide',
                spots: [
                  { x: 9, y: 70, label: '1', title: 'Week 1', text: 'Set up task. Allocate groups and topics. Each group member chooses a <b>different strategy</b> to do research on.', color: '#7a4a8c' },
                  { x: 22, y: 38, label: '2', title: 'Week 2', text: 'All group members collaborate to: do required research; plan and prepare your presentations.', color: '#3a58a0' },
                  { x: 36, y: 66, label: '3', title: 'Week 3 · You are here', text: 'All group members collaborate to: do required research; plan and prepare your presentations.', color: '#b0512a' },
                  { x: 50, y: 36, label: '4', title: 'Week 4', text: 'Keep collaborating: research, plan and prepare.', color: '#3a58a0' },
                  { x: 63, y: 66, label: '5', title: 'Week 5', text: 'Keep collaborating: research, plan and prepare.', color: '#3a58a0' },
                  { x: 76, y: 38, label: '6', title: 'Week 6', text: 'Keep collaborating: research, plan and prepare.', color: '#3a58a0' },
                  { x: 90, y: 62, label: '7', title: 'Week 7', text: 'Practise your presentations. <b>Thursday & Friday: Interactive Presentation assessment.</b>', color: '#2b776e' }
                ]
              },
              {
                type: 'quiz',
                id: 'c2-q',
                items: [
                  { q: 'How many weeks are left before the assessment week?', options: ['Two', 'Four', 'Six'], answer: 'Four', why: 'Weeks 4, 5, 6 and 7 — the assessment is on Thursday and Friday of Week 7.' },
                  { q: 'What should your group be doing in Week 3?', options: ['Practising the final talk', 'Collaborating to research, plan and prepare', 'Nothing yet'], answer: 'Collaborating to research, plan and prepare' }
                ]
              }
            ]
          },
          {
            id: 'c3',
            short: 'Check in',
            minutes: 14,
            grouping: 'Seminar group',
            art: V('c3'),
            title: 'Group check-in',
            goal: 'Report your progress, solve problems and ask your teacher.',
            blocks: [
              {
                type: 'cards',
                title: 'Group jobs for this check-in (one each)',
                items: [
                  { label: 'Chair', text: 'Calls each speaker. Keeps the talk on progress, problems and next steps.', icon: 'users' },
                  { label: 'Timekeeper', text: 'One minute per person. Says “30 seconds left”.', icon: 'clock' },
                  { label: 'Language monitor', text: 'Ticks the progress-update phrases you hear.', icon: 'pen' },
                  { label: 'Note-taker', text: 'Writes everyone’s next step for the group agreement.', icon: 'list' }
                ]
              },
              { type: 'do', n: 1, who: 'alone', text: 'Rate your progress honestly.' },
              {
                type: 'grid',
                id: 'c3-grid',
                title: 'My research so far',
                rows: [
                  'I know my group’s topic and my research strategy.',
                  'I have found at least three useful sources.',
                  'I have checked my sources (CRAAP test).',
                  'I have notes and the references (author, year, title).',
                  'I know the main point of my individual presentation.',
                  'Our group meets or messages every week.'
                ],
                columns: ['Me'],
                options: ['Done', 'Started', 'Not yet']
              },
              { type: 'do', n: 2, who: 'group', text: 'Each person speaks for <b>one minute</b>: what you have done, what you are stuck on and your next step. The group gives one idea to help.' },
              {
                type: 'language',
                title: 'Give a progress update',
                groups: [
                  { label: 'Done', phrases: ['<b>So far, I have</b> found …', '<b>I’ve managed to</b> …', '<b>I’ve narrowed my focus down to</b> …'] },
                  { label: 'In progress', phrases: ['<b>I’m still working on</b> …', '<b>I’m stuck on</b> … — any ideas?', '<b>I’m having trouble finding</b> data on …'] },
                  { label: 'Help + next', phrases: ['<b>Why don’t you</b> try …?', '<b>Have you thought about</b> …?', '<b>By next week, I will</b> …', '<b>Could you send me</b> that link?'] }
                ]
              },
              {
                type: 'checklist',
                id: 'c3-monitor',
                title: 'Language monitor: tick the phrases you hear',
                meter: ['heard', 'Great updates!'],
                items: ['So far, I have …', 'I’ve managed to …', 'I’m still working on …', 'I’m stuck on … — any ideas?', 'Why don’t you try …?', 'Have you thought about …?', 'By next week, I will …']
              },
              {
                type: 'spinner',
                id: 'c3-spin',
                title: 'Group problem-solver',
                text: 'Spin a problem. Your group has one minute to suggest a solution.',
                reels: [
                  { label: 'Problem', items: ['My source is a blog — is it OK?', 'Two sources disagree.', 'Our topics overlap too much.', 'One member hasn’t shared anything.', 'I can only find old data (2015).', 'I don’t know how to cite a podcast.', 'I have too many ideas for 5 minutes.'] }
                ],
                note: 'Use: “Why don’t you…?” · “Have you tried…?” · “Maybe we could…”'
              },
              {
                type: 'fields',
                fields: [
                  { id: 'c3-next', label: 'My next step (and when)', placeholder: 'By Monday, I will …', rows: 2 },
                  { id: 'c3-ask', label: 'My question for the teacher', placeholder: 'Could you help me with …?', rows: 2 }
                ]
              }
            ]
          },
          {
            id: 'c4',
            short: 'Our plan',
            minutes: 4,
            grouping: 'Seminar group',
            art: V('c4'),
            title: 'Our group plan for next week',
            goal: 'Agree on who does what — and sign it.',
            blocks: [
              {
                type: 'contract',
                id: 'c4-plan',
                title: 'Interactive Presentation · group agreement (Week 3)',
                intro: 'Fill this in together. Each member signs.',
                fields: [
                  { id: 'c4-who', label: 'Who researches what next week', placeholder: 'Mina: data on AI in hospitals · Leo: …', rows: 2 },
                  { id: 'c4-when', label: 'When and how we will meet or share', placeholder: 'Tuesday 4 pm on Teams · shared folder', rows: 2 },
                  { id: 'c4-if', label: 'If someone is stuck, we will …', placeholder: 'message the group by Wednesday', rows: 1 }
                ],
                signers: 4
              },
              { type: 'do', n: 1, who: 'group', text: '<b>Stand up and say it.</b> Each person stands and says their promise in one sentence: “<b>By next week, I will</b> … .” The group says “Deal!”' }
            ]
          }
        ]
      },

      /* ─────────────────────────── 22A ─────────────────────────── */
      {
       "id": "flex",
       "number": "04",
       "code": "22A",
       "minutes": 60,
       "tone": "blue",
       "art": "dec10/assets/week3/s-d4-flex.svg",
       "title": "AST: Criticality: Showing flexibility",
       "subtitle": "Lead-in → Review → Presentation (stance · challenge · flexibility) → Practice → Production",
       "outcome": "You can use language for presenting your original position, question your position by exploring a topic with an open mind, and use language for changing your position.",
       "activities": [
        {
         "id": "d1",
         "short": "Lead-in",
         "minutes": 5,
         "grouping": "Group → Class",
         "art": "dec10/assets/week3/v/v-d10w3d4-d1.svg",
         "title": "Lead-in",
         "goal": "Talk about a time someone persuaded you to try something new.",
         "blocks": [
          {
           "type": "key",
           "title": "Why this matters",
           "points": [
            "Showing flexibility is part of <b>criticality</b>. You will be expected to show it in your <b>Interactive Discussion</b> assessment."
           ]
          },
          {
           "type": "do",
           "n": 1,
           "who": "group",
           "text": "Have you ever been persuaded to try something new? e.g. go to the theatre to see a live performance instead of seeing a movie at a cinema? Tell your group. Everyone speaks once."
          },
          {
           "type": "model",
           "title": "Questions to answer",
           "list": [
            "What was it? (food, a sport or hobby, an app, a place to study, a habit …)",
            "How were you persuaded?",
            "How did you make the decision whether you would or wouldn’t try it?"
           ]
          },
          {
           "type": "language",
           "title": "Tell your story",
           "tabs": false,
           "groups": [
            {
             "label": "Before",
             "phrases": [
              "<b>At first, I wasn’t keen on</b> … because …",
              "<b>I was convinced that</b> …"
             ]
            },
            {
             "label": "Persuaded",
             "phrases": [
              "<b>My friend kept telling me</b> …",
              "<b>What really convinced me was</b> …",
              "<b>In the end, I decided to give it a try.</b>"
             ]
            },
            {
             "label": "Opinion",
             "phrases": [
              "<b>I think it’s fine to change your mind if</b> you get new information.",
              "<b>Changing your mind isn’t a weakness — it shows</b> …"
             ]
            }
           ]
          },
          {
           "type": "figure",
           "src": "dec10/assets/week3/d4-opinion-line.svg",
           "size": "wide",
           "alt": "An opinion line across the classroom from Strongly disagree to Strongly agree. Students stand at different points on the line. Above them the statement: It is OK to change your mind after making a decision. One student walks from the disagree side towards the middle, with a speech bubble: That’s a fair point.",
           "caption": "Opinion line-up: stand where you stand — and move if you are persuaded."
          },
          {
           "type": "steps",
           "title": "Opinion line-up (3 minutes)",
           "items": [
            {
             "who": "class",
             "text": "<b>Last question: do you think it is okay to change your mind after making a decision?</b> Stand up. One end of the room = <b>strongly disagree</b>, the other end = <b>strongly agree</b>. Stand on the line."
            },
            {
             "who": "pair",
             "text": "Talk to the person next to you, then to someone from the <b>other end</b>. Give one reason each."
            },
            {
             "who": "class",
             "text": "Persuaded? <b>Move</b> along the line. Anyone who moved says why: “<b>That’s a fair point.</b> I hadn’t considered … .” This is today’s skill: showing flexibility."
            }
           ]
          },
          {
           "type": "key",
           "title": "Today’s goal",
           "points": [
            "In the <b>Interactive Discussion</b> you need three skills: <b>state your position</b>, <b>challenge</b> other positions with good questions, and <b>show flexibility</b>: keep, almost change or change your position, and say why.",
            "Today’s steps: <b>Lead-in</b> → <b>Review</b> → <b>Presentation</b> (A stance · B challenge · C flexibility) → <b>Practice</b> → <b>Production</b> (a real discussion: which laptop should a student buy?)"
           ]
          }
         ],
         "category": "1 · Lead-in"
        },
        {
         "id": "d2",
         "short": "Review",
         "minutes": 3,
         "grouping": "Pair",
         "art": "dec10/assets/week3/v/v-d10w3d4-d2.svg",
         "title": "Review critical thinking skills",
         "goal": "Remember the definition and five questions from Week 2.",
         "blocks": [
          {
           "type": "do",
           "n": 1,
           "who": "pair",
           "text": "Remember Week 2? One word in this definition is a trap. Tap it."
          },
          {
           "type": "spot",
           "id": "d2-spot",
           "label": "Find the trap",
           "title": "Critical thinking is …",
           "hint": "Tap one word.",
           "paras": [
            "Critical thinking is the process of carefully [[analysing]] information to make [[judgments]] and solve problems. This involves: [[*accepting]] information provided; [[separating]] facts from opinions and relevant information from irrelevant information; [[noticing]] errors in arguments; using logic and evidence to make decisions; being [[flexible]] in our thinking; reaching conclusions by using arguments from sources; identifying and explaining limitations and bias in arguments."
           ]
          },
          {
           "type": "hotspot",
           "src": "dec10/assets/week3/d4-ct-steps.svg",
           "alt": "Five stepping stones across a river to a flag. 1 Focus your thoughts. 2 Question what is being read or said. 3 Analyse the different perspectives. 4 Evaluate the information. 5 Reach your own position.",
           "title": "Questions to stimulate critical thinking",
           "hint": "Tap each stone.",
           "size": "wide",
           "spots": [
            {
             "x": 12,
             "y": 58,
             "label": "1",
             "title": "Focus your thoughts",
             "text": "What is the topic? What am I trying to find out? What are the possible viewpoints for this topic? What research still needs to be done so I can make an informed decision?",
             "color": "#3a58a0"
            },
            {
             "x": 31,
             "y": 44,
             "label": "2",
             "title": "Question what is being read/said",
             "text": "Distinguish between fact and opinion. Identify any bias.",
             "color": "#2b776e"
            },
            {
             "x": 50,
             "y": 58,
             "label": "3",
             "title": "Analyse the different perspectives",
             "text": "What other points were not presented that were identified in Focus? What evidence has been omitted?",
             "color": "#7a4a8c"
            },
            {
             "x": 69,
             "y": 44,
             "label": "4",
             "title": "Evaluate the information",
             "text": "What are the pros and cons for each perspective?",
             "color": "#b0512a"
            },
            {
             "x": 88,
             "y": 50,
             "label": "5",
             "title": "Reach your own position",
             "text": "Which point of view do you agree with? Why? How did it persuade you to change your position?",
             "color": "#985c0e"
            }
           ]
          }
         ],
         "answers": {
          "items": [
           [
            "The trap",
            "“accepting” — a critical thinker <b>questions</b> information provided, they do not just accept it."
           ]
          ]
         },
         "category": "2 · Review"
        },
        {
         "id": "d3",
         "short": "Critical thinker?",
         "minutes": 3,
         "grouping": "Pair",
         "art": "dec10/assets/week3/v/v-d10w3d4-d3.svg",
         "title": "Activity A critical thinker",
         "goal": "Which quotes come from a critical thinker?",
         "blocks": [
          {
           "type": "do",
           "n": 1,
           "who": "pair",
           "text": "Which quotes come from a critical thinker? Sort the cards with your partner, then check."
          },
          {
           "type": "sort",
           "id": "d3-sort",
           "title": "Who is speaking?",
           "hint": "Source: Exercise 1, Developing critical thinking skills — The University of Sydney.",
           "buckets": [
            {
             "label": "A critical thinker",
             "letter": "✓"
            },
            {
             "label": "Not a critical thinker",
             "letter": "✗"
            }
           ],
           "items": [
            {
             "text": "“I hate talk shows where people just state their opinions but never give any reasons at all”",
             "answer": 0,
             "why": "They want reasons, not only opinions."
            },
            {
             "text": "“No matter how complex a problem, you can bet there will be a simple solution”",
             "answer": 1,
             "why": "Complex problems rarely have simple solutions."
            },
            {
             "text": "“Just because information is in a textbook, doesn’t necessarily mean it can be trusted”",
             "answer": 0
            },
            {
             "text": "“My views are probably shaped by the social and economic groups I belong to”",
             "answer": 0,
             "why": "They notice their own possible bias."
            },
            {
             "text": "“I hate it when teachers discuss problems instead of just giving the information”",
             "answer": 1,
             "why": "They want to be told, not to think."
            },
            {
             "text": "“Selling an idea is like selling cars, you say whatever works”",
             "answer": 1,
             "why": "Truth and evidence don’t matter to this speaker."
            },
            {
             "text": "“I like to think about whether someone’s views reflect the experience of all groups of people”",
             "answer": 0
            },
            {
             "text": "“I question the authority of evidence before I accept it”",
             "answer": 0
            }
           ]
          }
         ],
         "category": "2 · Review"
        },
        {
         "id": "d4",
         "short": "A · Stance",
         "minutes": 7,
         "grouping": "Alone → Pair",
         "art": "dec10/assets/week3/v/v-d10w3d4-d4.svg",
         "title": "A · State your position",
         "goal": "Learn the five parts of a clear position, in speaking and in writing.",
         "blocks": [
          {
           "type": "group",
           "tone": "blue",
           "label": "Part A · Rules 1–5",
           "title": "State your position",
           "goal": "Five parts, each shown in speaking and in writing"
          },
          {
           "type": "do",
           "n": 1,
           "who": "alone",
           "text": "Read each part. Compare the <b>spoken</b> version (for a discussion) with the <b>written</b> version (for an essay). What changes?"
          },
          {
           "type": "rule",
           "n": 1,
           "tone": "blue",
           "title": "Introduce your stance",
           "explain": "Say your position at the start. In speaking, use an opinion phrase. In writing, state it directly, without <i>I</i>.",
           "cols": [
            "Spoken (discussion)",
            "Written (essay)"
           ],
           "compare": true,
           "pairs": [
            [
             "<b>In my opinion,</b> green skills are essential for future workers.",
             "Green skills <b>are essential</b> for the future workforce."
            ],
            [
             "<b>I believe that</b> universities should teach green skills.",
             "Universities <b>should</b> teach green skills."
            ],
            [
             "<b>From my perspective,</b> online classes are useful.",
             "Online classes <b>are</b> a useful option for many students."
            ]
           ]
          },
          {
           "type": "rule",
           "n": 2,
           "tone": "blue",
           "title": "Give your reasons",
           "explain": "Give one or two clear reasons. Introduce each one with a signal phrase.",
           "cols": [
            "Spoken (discussion)",
            "Written (essay)"
           ],
           "compare": true,
           "pairs": [
            [
             "<b>One key reason is that</b> these skills are in demand.",
             "<b>A key reason is that</b> these skills are increasingly in demand."
            ],
            [
             "<b>Another thing is</b> that they help the planet.",
             "<b>Another significant factor is</b> their positive impact on the environment."
            ],
            [
             "<b>Also,</b> they create new jobs.",
             "<b>Additionally,</b> they create new employment opportunities."
            ]
           ]
          },
          {
           "type": "rule",
           "n": 3,
           "tone": "blue",
           "title": "Support it with evidence",
           "explain": "Show where your idea comes from. In writing, always give the author and year.",
           "cols": [
            "Spoken (discussion)",
            "Written (essay)"
           ],
           "compare": true,
           "pairs": [
            [
             "<b>According to</b> a report I read, green jobs are growing.",
             "<b>According to</b> Bowen et al. (2018), green jobs are growing."
            ],
            [
             "<b>Research shows that</b> students need these skills.",
             "<b>Research indicates that</b> students need these skills."
            ],
            [
             "<b>Data from</b> the ILO <b>suggests</b> that …",
             "<b>Data from</b> the ILO (2023) <b>suggests</b> that …"
            ]
           ]
          },
          {
           "type": "rule",
           "n": 4,
           "tone": "blue",
           "title": "Deal with a counterargument",
           "explain": "Show that you know the other side, then explain why your position is still stronger.",
           "cols": [
            "Spoken (discussion)",
            "Written (essay)"
           ],
           "compare": true,
           "pairs": [
            [
             "The training <b>might</b> be expensive, <b>but</b> it pays off later.",
             "<b>While it is true that</b> the training is expensive, the long-term benefits are greater."
            ],
            [
             "Some people <b>might</b> say it is too hard, <b>but</b> …",
             "<b>It may be argued that</b> it is too difficult; <b>however,</b> …"
            ]
           ]
          },
          {
           "type": "rule",
           "n": 5,
           "tone": "blue",
           "title": "Conclude",
           "explain": "Finish by repeating your position in one sentence.",
           "cols": [
            "Spoken (discussion)",
            "Written (essay)"
           ],
           "compare": true,
           "pairs": [
            [
             "<b>So,</b> green skills are worth learning.",
             "<b>Therefore, it can be concluded that</b> green skills are worth developing."
            ],
            [
             "<b>So</b> I think it is a good idea.",
             "<b>In conclusion,</b> it is a beneficial approach."
            ]
           ]
          },
          {
           "type": "toggle",
           "title": "The two samples (from the booklet)",
           "hint": "The same idea, spoken and written",
           "ref": true,
           "blocks": [
            {
             "type": "text",
             "title": "Sample 1: Spoken",
             "text": "<b>In my opinion</b>, developing green skills is essential for the workforce of the future. <b>One key reason is</b> that these skills help employees to implement sustainable practices, which are increasingly demanded by industries worldwide. <b>According to</b> a report by Surname in YEAR, green jobs are expected to grow significantly. This highlights the importance of this skill set. The transition to green skills <b>might</b> require substantial investment, <b>but</b> the long-term benefits far outweigh the initial costs. <b>So</b> fostering green skills not only supports environmental sustainability, but also drives economic growth and innovation."
            },
            {
             "type": "text",
             "title": "Sample 2: Written",
             "text": "The development of green skills is <b>imperative</b> for the future workforce. <b>A key reason</b> is that these skills enable employees to implement sustainable practices, which are increasingly demanded by industries globally. <b>According to</b> (source), the growth of green jobs is projected to be significant, underscoring the importance of this skill set. While <b>it may be argued that</b> the transition to green skills is a costly move, the long-term benefits far outweigh the initial costs. <b>Therefore, it can be concluded that</b> fostering green skills not only supports environmental sustainability but also drives economic growth and innovation."
            }
           ]
          },
          {
           "type": "toggle",
           "title": "The full language bank (from the booklet)",
           "hint": "Language for presenting / keeping your original stance",
           "ref": true,
           "blocks": [
            {
             "type": "language",
             "title": "Language for presenting / keeping your original stance",
             "groups": [
              {
               "label": "Introduction of your stance",
               "phrases": [
                "<b>Verbal:</b> “In my opinion, …”",
                "“I believe that …”",
                "“From my perspective, …”",
                "<b>Written:</b> [no opinion marker – straight statement]"
               ]
              },
              {
               "label": "Presenting arguments",
               "phrases": [
                "One key reason is that …",
                "Firstly, it is important to note that …",
                "Another significant factor is …",
                "Additionally, …"
               ]
              },
              {
               "label": "Providing evidence",
               "phrases": [
                "According to (source), …",
                "Research indicates that …",
                "Studies have shown that …",
                "Data from [source] suggests …"
               ]
              },
              {
               "label": "Counterarguments",
               "phrases": [
                "It may be argued that …, however, …",
                "While it is true that …, it is also important to consider …",
                "... might ..., ... but ..."
               ]
              },
              {
               "label": "Conclusion",
               "phrases": [
                "In conclusion, …",
                "To summarize, …",
                "Therefore, it can be concluded that …",
                "So, ... (verbal)"
               ]
              }
             ]
            }
           ]
          }
         ],
         "category": "3 · Presentation"
        },
        {
         "id": "d5",
         "short": "B · Challenge",
         "minutes": 5,
         "grouping": "Alone → Pair",
         "art": "dec10/assets/week3/v/v-d10w3d4-d5.svg",
         "title": "B · Challenge a position",
         "goal": "Learn four kinds of question that test a position: someone else’s, or your own.",
         "blocks": [
          {
           "type": "sticky",
           "title": "A good critical thinker …",
           "text": "… questions their position by critically exploring the topic with an open mind to the possibility of their position changing."
          },
          {
           "type": "group",
           "tone": "plum",
           "label": "Part B · Rules 6–9",
           "title": "Challenge a position",
           "goal": "Four kinds of question, each with an example"
          },
          {
           "type": "rule",
           "n": 6,
           "tone": "plum",
           "title": "Ask open-ended questions",
           "explain": "Open questions make the speaker think more deeply. Use them when an idea sounds too simple.",
           "cols": [
            "Someone says …",
            "You ask …"
           ],
           "compare": true,
           "pairs": [
            [
             "Online classes are better than face-to-face classes.",
             "<b>Is there a situation where</b> this might not apply?"
            ],
            [
             "Electric cars solve the pollution problem.",
             "<b>What are the potential benefits and drawbacks</b> of this approach?"
            ]
           ]
          },
          {
           "type": "rule",
           "n": 7,
           "tone": "plum",
           "title": "Challenge assumptions",
           "explain": "Find the idea that the speaker takes for granted, and ask about it.",
           "cols": [
            "Someone says …",
            "You ask …"
           ],
           "compare": true,
           "pairs": [
            [
             "Everyone wants to work from home.",
             "<b>What assumptions are being made</b> here? Are they justified?"
            ],
            [
             "Young people do not care about the environment.",
             "<b>How might someone with a different perspective</b> view this?"
            ]
           ]
          },
          {
           "type": "rule",
           "n": 8,
           "tone": "plum",
           "title": "Explore consequences",
           "explain": "Ask what will happen, to whom, and in the short and long term.",
           "cols": [
            "Someone says …",
            "You ask …"
           ],
           "compare": true,
           "pairs": [
            [
             "The city should ban all cars from the centre.",
             "<b>How might this idea impact different groups</b> of people?"
            ],
            [
             "Companies should replace staff with AI.",
             "<b>What are the ethical implications</b> of this action?"
            ]
           ]
          },
          {
           "type": "rule",
           "n": 9,
           "tone": "plum",
           "title": "Stay curious",
           "explain": "Ask what we still do not know, and what could change the answer.",
           "cols": [
            "Someone says …",
            "You ask …"
           ],
           "compare": true,
           "pairs": [
            [
             "Green jobs will grow quickly.",
             "<b>What new information could change</b> this view?"
            ],
            [
             "Plastic bags should be banned.",
             "<b>How can we further investigate</b> this issue?"
            ]
           ]
          }
         ],
         "category": "3 · Presentation"
        },
        {
         "id": "d6",
         "short": "C · Flexibility",
         "minutes": 6,
         "grouping": "Alone → Pair",
         "art": "dec10/assets/week3/v/v-d10w3d4-d6.svg",
         "title": "C · Show flexibility",
         "goal": "Say clearly and politely where you stand after hearing new information.",
         "blocks": [
          {
           "type": "figure",
           "src": "dec10/assets/week3/d4-flex-loop.svg",
           "size": "wide",
           "alt": "Three steps of showing flexibility. 1 Present your stance. 2 Challenge it: listen and ask open questions. 3 Final position: it did not change, it almost changed, or it changed — and say why.",
           "caption": "Flexibility = state it, test it, then say where you stand now — and why."
          },
          {
           "type": "group",
           "tone": "teal",
           "label": "Part C · Rules 10–12",
           "title": "Show flexibility",
           "goal": "Three possible outcomes, each with a model answer"
          },
          {
           "type": "rule",
           "n": 10,
           "tone": "teal",
           "title": "My position did not change",
           "explain": "Thank the speaker for the point, then explain why your view is still the same.",
           "cols": [
            "Someone says …",
            "You answer …"
           ],
           "compare": true,
           "pairs": [
            [
             "Laptops with a long battery life are expensive.",
             "<b>I take your point about</b> the price, <b>but I still believe</b> battery life matters most <b>because</b> many rooms have no power points."
            ],
            [
             "Online classes save time.",
             "<b>I see what you mean, but I still think</b> face-to-face classes are better <b>because</b> we can ask questions easily."
            ]
           ]
          },
          {
           "type": "rule",
           "n": 11,
           "tone": "teal",
           "title": "My position almost changed",
           "explain": "Show that the point made you think, even if you have not changed your mind yet.",
           "cols": [
            "Someone says …",
            "You answer …"
           ],
           "compare": true,
           "pairs": [
            [
             "The Surface has better security.",
             "<b>I’m still not fully convinced, but</b> your point about security <b>made me think again</b>."
            ]
           ]
          },
          {
           "type": "rule",
           "n": 12,
           "tone": "teal",
           "title": "My position changed",
           "explain": "Accept the point, then say what you think now and why.",
           "cols": [
            "Someone says …",
            "You answer …"
           ],
           "compare": true,
           "pairs": [
            [
             "The HP is half the price and still light.",
             "<b>That’s a fair point. I hadn’t considered</b> the price, <b>so I would now say</b> the HP is the better choice."
            ],
            [
             "Research shows students learn more face-to-face.",
             "<b>My earlier position was based on</b> convenience, <b>but after</b> hearing this, <b>I can see that</b> face-to-face classes have real benefits."
            ]
           ],
           "note": "In the Interactive Discussion, changing your mind is not a weakness: saying clearly <b>why</b> your view changed shows criticality."
          },
          {
           "type": "toggle",
           "title": "Language for changing your position (from the booklet)",
           "hint": "With the booklet examples",
           "ref": true,
           "blocks": [
            {
             "type": "language",
             "title": "Language for changing your position",
             "tabs": false,
             "groups": [
              {
               "label": "From the booklet",
               "phrases": [
                "After reading (source), the topic of (topic) is not as clear as originally thought.",
                "The strength of (author) argument on (topic) has challenged my position by…",
                "Although the perspectives presented differ, the underlying them is the same, which is…. Because of this, further consideration should be explored before making a final decision.",
                "My earlier position was based on …. but after further research, I can see that it is possible…"
               ]
              },
              {
               "label": "Spoken extras",
               "phrases": [
                "<b>You’ve made me think again about</b> …",
                "<b>That’s a fair point. I hadn’t considered</b> …",
                "<b>I’m still not fully convinced, but</b> …",
                "<b>I take your point, and I’d now say</b> …"
               ]
              }
             ]
            },
            {
             "type": "model",
             "title": "Examples",
             "list": [
              "Despite differing perspectives in the readings and the listening, all sources agree that companies are rapidly adopting green practices. Therefore, it’s important to carefully consider the implications before deciding to upskill with green skills.",
              "The strength of Smith’s (2024) argument on why company’s need to go “green” has challenged my thinking on whether I should include subjects at university that include green skills."
             ]
            }
           ]
          }
         ],
         "category": "3 · Presentation"
        },
        {
         "id": "dp",
         "art": "dec10/assets/week3/v/v-d10w3d4-d5.svg",
         "short": "Practise",
         "minutes": 8,
         "grouping": "Alone → Group",
         "category": "4 · Practice",
         "title": "Controlled practice: stance, challenge, flexibility",
         "goal": "Practise the three parts in order: first recognise, then use.",
         "blocks": [
          {
           "type": "group",
           "tone": "blue",
           "label": "Part 1 · Rules 1–5",
           "title": "State your position",
           "goal": "Spoken or written? Then correct."
          },
          {
           "type": "toggle",
           "title": "The two samples (spoken and written)",
           "hint": "The spoken and the written sample",
           "ref": true,
           "blocks": [
            {
             "type": "text",
             "title": "Sample 1: Spoken",
             "text": "<b>In my opinion</b>, developing green skills is essential for the workforce of the future. <b>One key reason is</b> that these skills help employees to implement sustainable practices, which are increasingly demanded by industries worldwide. <b>According to</b> a report by Surname in YEAR, green jobs are expected to grow significantly. This highlights the importance of this skill set. The transition to green skills <b>might</b> require substantial investment, <b>but</b> the long-term benefits far outweigh the initial costs. <b>So</b> fostering green skills not only supports environmental sustainability, but also drives economic growth and innovation."
            },
            {
             "type": "text",
             "title": "Sample 2: Written",
             "text": "The development of green skills is <b>imperative</b> for the future workforce. <b>A key reason</b> is that these skills enable employees to implement sustainable practices, which are increasingly demanded by industries globally. <b>According to</b> (source), the growth of green jobs is projected to be significant, underscoring the importance of this skill set. While <b>it may be argued that</b> the transition to green skills is a costly move, the long-term benefits far outweigh the initial costs. <b>Therefore, it can be concluded that</b> fostering green skills not only supports environmental sustainability but also drives economic growth and innovation."
            }
           ]
          },
          {
           "type": "do",
           "n": 1,
           "who": "pair",
           "text": "Compare the samples. Where does each one put its stance, and how? Then sort the phrases."
          },
          {
           "type": "sort",
           "id": "d4-sort",
           "title": "Spoken or written?",
           "buckets": [
            {
             "label": "Spoken (Sample 1)",
             "letter": "S"
            },
            {
             "label": "Written (Sample 2)",
             "letter": "W"
            }
           ],
           "items": [
            {
             "text": "In my opinion, …",
             "answer": 0
            },
            {
             "text": "The development of green skills is imperative …",
             "answer": 1,
             "why": "A straight statement — no opinion marker."
            },
            {
             "text": "… might …, but …",
             "answer": 0
            },
            {
             "text": "While it may be argued that …",
             "answer": 1
            },
            {
             "text": "So …",
             "answer": 0
            },
            {
             "text": "Therefore, it can be concluded that …",
             "answer": 1
            }
           ]
          },
          {
           "type": "rewrite",
           "id": "dp-r1",
           "title": "Make it written style",
           "hint": "Change only the spoken part.",
           "items": [
            {
             "q": "In my opinion, universities should teach green skills.",
             "accept": [
              "Universities should teach green skills."
             ],
             "model": "Universities should teach green skills.",
             "why": "Rule 1: in writing, state the position directly."
            },
            {
             "q": "So, green skills are worth learning.",
             "accept": [
              "Therefore, green skills are worth learning.",
              "In conclusion, green skills are worth learning.",
              "Therefore, it can be concluded that green skills are worth learning."
             ],
             "model": "Therefore, green skills are worth learning.",
             "why": "Rule 5: <i>So</i> is spoken; use <i>Therefore</i> or <i>In conclusion</i>."
            }
           ]
          },
          {
           "type": "group",
           "tone": "plum",
           "label": "Part 2 · Rules 6–9",
           "title": "Challenge a position",
           "goal": "Sort the question cards."
          },
          {
           "type": "do",
           "n": 1,
           "who": "group",
           "text": "<b>Beat the clock (4 minutes).</b> Each question belongs under one heading. Take turns: one person places a card and says <b>why</b>. Keep the questions: you will ask them in the discussion."
          },
          {
           "type": "tip",
           "text": "Your teacher may give your group <b>paper cards</b> to sort on the table (4 headings + 13 questions). No cards? Sort the cards on this page together."
          },
          {
           "type": "sort",
           "id": "d5-sort",
           "title": "Four ways to challenge your viewpoint",
           "buckets": [
            {
             "label": "Asking open-ended questions that encourage deeper reflection",
             "letter": "1"
            },
            {
             "label": "Challenging assumptions and preconceived notions",
             "letter": "2"
            },
            {
             "label": "Exploring the implications and consequences of ideas",
             "letter": "3"
            },
            {
             "label": "Fostering intellectual curiosity and continuous inquiry",
             "letter": "4"
            }
           ],
           "items": [
            {
             "text": "What are the underlying reasons the author researched this topic?",
             "answer": 0
            },
            {
             "text": "Is there a situation where this idea might not apply?",
             "answer": 0
            },
            {
             "text": "What are the potential benefits and drawbacks of this approach?",
             "answer": 0
            },
            {
             "text": "What assumptions are being made about this topic? Are they justified?",
             "answer": 1
            },
            {
             "text": "How might someone with a different perspective view this situation?",
             "answer": 1
            },
            {
             "text": "Are there any alternative viewpoints that haven’t been considered?",
             "answer": 1
            },
            {
             "text": "What are the short-term and long-term consequences of this decision?",
             "answer": 2
            },
            {
             "text": "How might this idea impact different groups of people?",
             "answer": 2
            },
            {
             "text": "What are the ethical implications of this action?",
             "answer": 2
            },
            {
             "text": "If this idea were implemented, what changes might we expect to see in society?",
             "answer": 2
            },
            {
             "text": "What questions remain unanswered about this topic?",
             "answer": 3
            },
            {
             "text": "How can we further investigate this issue to gain a deeper understanding?",
             "answer": 3
            },
            {
             "text": "What new information or research could change my perspective on this matter?",
             "answer": 3
            }
           ]
          },
          {
           "type": "group",
           "tone": "teal",
           "label": "Part 3 · Rules 10–12",
           "title": "Show flexibility",
           "goal": "Recognise the outcome, then complete a dialogue."
          },
          {
           "type": "quiz",
           "id": "dp-q3",
           "shared": [
            "My position did not change",
            "My position almost changed",
            "My position changed"
           ],
           "items": [
            {
             "q": "1. “I take your point, but I still believe battery life matters most.”",
             "answer": "My position did not change",
             "why": "<i>but I still believe</i> keeps the position."
            },
            {
             "q": "2. “That’s a fair point. I hadn’t considered the weight, so I would now choose the Surface.”",
             "answer": "My position changed",
             "why": "<i>I would now choose</i> shows a new position."
            },
            {
             "q": "3. “I’m still not fully convinced, but your point about the price made me think again.”",
             "answer": "My position almost changed",
             "why": "<i>made me think again</i>: the view is moving, but not yet changed."
            }
           ]
          },
          {
           "type": "cloze",
           "id": "dp-gap",
           "title": "Complete the discussion",
           "options": [
            "take your point",
            "fair point",
            "earlier position",
            "I can see that",
            "you are wrong",
            "totally agree"
           ],
           "text": "A: The MacBook has the longest battery life. B: I {{1}} about the battery, but I still believe the price matters more. A: True, but you will use it for many years. B: That’s a {{2}}. I hadn’t considered that. My {{3}} was based on price, but now {{4}} battery life is more important.",
           "answers": [
            "take your point",
            "fair point",
            "earlier position",
            "I can see that"
           ],
           "why": [
            "<i>I take your point about …, but …</i> (Rule 10)",
            "<i>That’s a fair point.</i> (Rule 12)",
            "<i>My earlier position was based on …</i> (Rule 12)",
            "<i>… I can see that …</i> (Rule 12)"
           ]
          }
         ],
         "answers": {
          "title": "Answers",
          "items": [
           [
            "Part 1 · Correct",
            "1 Universities should teach green skills. · 2 Therefore, green skills are worth learning."
           ],
           [
            "Part 3 · Choose",
            "1 did not change · 2 changed · 3 almost changed"
           ],
           [
            "Part 3 · Complete",
            "1 take your point · 2 fair point · 3 earlier position · 4 I can see that (not polite: you are wrong; too strong: totally agree)"
           ]
          ]
         }
        },
        {
         "id": "d7",
         "short": "Prepare",
         "minutes": 5,
         "grouping": "Alone",
         "art": "dec10/assets/week3/v/v-d10w3d4-d7.svg",
         "title": "Activity 2 Putting it into practice: Prepare",
         "goal": "Read the specs for YOUR laptop and prepare to persuade your group.",
         "blocks": [
          {
           "type": "toggle",
           "title": "Language for presenting your stance",
           "hint": "Open to check the five parts",
           "ref": true,
           "blocks": [
            {
             "type": "text",
             "title": "Present your stance in five parts",
             "list": [
              "<b>Stance</b> · Spoken: <i>In my opinion, … / I believe that …</i> · Written: a straight statement (<i>Green skills are essential …</i>)",
              "<b>Reason</b> · <i>One key reason is that … · Another significant factor is … · Additionally, …</i>",
              "<b>Evidence</b> · <i>According to (source), … · Research indicates that … · Data from … suggests …</i>",
              "<b>Counterargument</b> · Spoken: <i>… might …, but …</i> · Written: <i>While it is true that …, … / It may be argued that …; however, …</i>",
              "<b>Conclusion</b> · Spoken: <i>So, …</i> · Written: <i>Therefore, it can be concluded that … / In conclusion, …</i>"
             ]
            }
           ]
          },
          {
           "type": "key",
           "title": "Look at the following scenario",
           "points": [
            "Your laptop broke. It is important that you have one for university studies. For the last 10 years, you have bought the same brand, but your university friends say there are better options available.",
            "The key features you are looking for are: <b>long battery life</b> as not all lecture rooms have power points for students to charge their devices · <b>lightweight</b> as it needs to be carried from class to class · <b>security</b> as you also use the laptop for personal use.",
            "Other features will be taken into consideration."
           ]
          },
          {
           "type": "do",
           "n": 1,
           "who": "group",
           "text": "Groups of up to four. Each person takes a <b>different</b> laptop. Open <b>only your tab</b> — the others are your group’s secret!"
          },
          {
           "type": "tip",
           "text": "Your teacher may give you a <b>paper laptop card</b> (A–D). No cards? Open only your tab below."
          },
          {
           "type": "tabs",
           "title": "Activity specs — open your allocated laptop only",
           "tabs": [
            {
             "label": "MacBook Pro",
             "blocks": [
              {
               "type": "model",
               "title": "MacBook Pro",
               "rows": [
                [
                 "Price",
                 "$2,699"
                ],
                [
                 "Battery life",
                 "22hrs"
                ],
                [
                 "Size",
                 "14”"
                ],
                [
                 "Ports",
                 "2x Thunderbolt/USB 4 or 3x Thunderbolt 4, HDMI, SDXC, headphone jack, MagSafe"
                ],
                [
                 "Security",
                 "Touch ID"
                ],
                [
                 "Camera",
                 "1080p"
                ],
                [
                 "Audio",
                 "Studio-quality three-mic array · 6 speaker sound system"
                ],
                [
                 "Weight",
                 "1.55kg"
                ],
                [
                 "Special feature",
                 "Most advanced computer chip for personal computer"
                ]
               ]
              }
             ]
            },
            {
             "label": "Microsoft Surface",
             "blocks": [
              {
               "type": "model",
               "title": "Microsoft Surface Laptop",
               "rows": [
                [
                 "Price",
                 "$2799"
                ],
                [
                 "Battery life",
                 "20hrs"
                ],
                [
                 "Size",
                 "13.8”"
                ],
                [
                 "Ports",
                 "2 x USB-C · 1 x USB-A"
                ],
                [
                 "Security",
                 "Facial Recognition"
                ],
                [
                 "Camera",
                 "1080p"
                ],
                [
                 "Audio",
                 "Dolby Digital"
                ],
                [
                 "Weight",
                 "1.34kg"
                ],
                [
                 "Special feature",
                 "Includes Co-pilot AI"
                ]
               ]
              }
             ]
            },
            {
             "label": "Dell XPS 14",
             "blocks": [
              {
               "type": "model",
               "title": "Dell XPS 14 Laptop",
               "rows": [
                [
                 "Price",
                 "$2497"
                ],
                [
                 "Battery life",
                 "19hrs"
                ],
                [
                 "Size",
                 "14.5”"
                ],
                [
                 "Ports",
                 "3 Thunderbolt™ 4 (USB Type-C™) with Power Delivery and DisplayPort · 1 headset (headphone and microphone combo) port"
                ],
                [
                 "Security",
                 "Self-locking"
                ],
                [
                 "Camera",
                 "1080p"
                ],
                [
                 "Audio",
                 "Stereo speakers with Waves MaxxAudio Quad-speaker design"
                ],
                [
                 "Weight",
                 "1.68kg"
                ],
                [
                 "Special feature",
                 "–"
                ]
               ]
              }
             ]
            },
            {
             "label": "HP Pavilion Plus",
             "blocks": [
              {
               "type": "model",
               "title": "HP Pavilion Plus",
               "rows": [
                [
                 "Price",
                 "$1199"
                ],
                [
                 "Battery life",
                 "11hrs"
                ],
                [
                 "Size",
                 "14”"
                ],
                [
                 "Ports",
                 "1x HDMI 2.1, 2x USB 3.0 ports, 1x USB 3.1 port, 1x Thunderbolt 4, 1 x 3.5mm combo headphone/microphone"
                ],
                [
                 "Security",
                 "–"
                ],
                [
                 "Camera",
                 "5MP IR Camera"
                ],
                [
                 "Audio",
                 "Audio by B&O, Dual speakers, HP Audio Boost"
                ],
                [
                 "Weight",
                 "1.4kg"
                ],
                [
                 "Special feature",
                 "Good for media consumption"
                ]
               ]
              }
             ]
            }
           ]
          },
          {
           "type": "do",
           "n": 2,
           "who": "alone",
           "text": "<b>Prepare for a discussion.</b> This is the laptop you are trying to persuade your group members to buy. Write your pitch with the sentence starters from <b>Language for presenting / keeping your original stance</b>. Link each point to the scenario: battery life, weight and security. Notes are fine: you will <b>say</b> it, not read it."
          },
          {
           "type": "detect",
           "id": "d7-pitch",
           "title": "My pitch",
           "label": "Function lights",
           "checks": [
            {
             "label": "Stance",
             "color": "#3a58a0",
             "any": [
              "in my opinion",
              "i believe",
              "from my perspective"
             ]
            },
            {
             "label": "Argument",
             "color": "#2b776e",
             "any": [
              "one key reason",
              "firstly",
              "another significant factor",
              "additionally"
             ]
            },
            {
             "label": "Evidence",
             "color": "#7a4a8c",
             "any": [
              "according to",
              "research indicates",
              "studies have shown",
              "data from"
             ]
            },
            {
             "label": "Counterargument",
             "color": "#b0512a",
             "any": [
              "may be argued",
              "while it is true",
              "/might .* but/"
             ]
            },
            {
             "label": "Conclusion",
             "color": "#985c0e",
             "any": [
              "in conclusion",
              "to summarize",
              "to summarise",
              "therefore",
              "/(^|[.!?] )So, /u"
             ]
            }
           ],
           "items": [
            {
             "task": "Persuade your group to buy your laptop (about 60 seconds when you say it).",
             "placeholder": "In my opinion, the … is the best choice for students. One key reason is that …",
             "rows": 6
            }
           ]
          }
         ],
         "category": "5 · Production"
        },
        {
         "id": "d8",
         "short": "Discussion 1",
         "minutes": 14,
         "grouping": "Groups of 4",
         "art": "dec10/assets/week3/v/v-d10w3d4-d8.svg",
         "title": "Activity 2 Putting it into practice: Discussion 1",
         "goal": "Present your laptop, listen actively and be open to changing your opinion.",
         "blocks": [
          {
           "type": "toggle",
           "title": "Four ways to challenge a position",
           "hint": "Open to choose your questions",
           "ref": true,
           "blocks": [
            {
             "type": "text",
             "title": "Question types",
             "list": [
              "<b>1 · Open-ended questions</b> (deeper reflection): <i>Is there a situation where this might not apply? · What are the potential benefits and drawbacks?</i>",
              "<b>2 · Challenging assumptions</b>: <i>What assumptions are being made? · How might someone with a different perspective view this?</i>",
              "<b>3 · Implications and consequences</b>: <i>What are the short- and long-term consequences? · How might this impact different groups of people?</i>",
              "<b>4 · Curiosity and further inquiry</b>: <i>What questions remain unanswered? · What new information could change my perspective?</i>"
             ]
            }
           ]
          },
          {
           "type": "toggle",
           "title": "Keep, almost change or change your position",
           "hint": "Open to choose your phrase",
           "ref": true,
           "blocks": [
            {
             "type": "text",
             "title": "Say where you stand now",
             "list": [
              "<b>Did not change</b>: <i>I take your point about …, but I still believe … because …</i>",
              "<b>Almost changed</b>: <i>I’m still not fully convinced, but …’s point about … made me think again.</i>",
              "<b>Changed</b>: <i>That’s a fair point. I hadn’t considered … · My earlier position was based on …, but after hearing …, I can see that …</i>"
             ]
            }
           ]
          },
          {
           "type": "toggle",
           "title": "Language for presenting your stance",
           "hint": "Open to check the five parts",
           "ref": true,
           "blocks": [
            {
             "type": "text",
             "title": "Present your stance in five parts",
             "list": [
              "<b>Stance</b> · Spoken: <i>In my opinion, … / I believe that …</i> · Written: a straight statement (<i>Green skills are essential …</i>)",
              "<b>Reason</b> · <i>One key reason is that … · Another significant factor is … · Additionally, …</i>",
              "<b>Evidence</b> · <i>According to (source), … · Research indicates that … · Data from … suggests …</i>",
              "<b>Counterargument</b> · Spoken: <i>… might …, but …</i> · Written: <i>While it is true that …, … / It may be argued that …; however, …</i>",
              "<b>Conclusion</b> · Spoken: <i>So, …</i> · Written: <i>Therefore, it can be concluded that … / In conclusion, …</i>"
             ]
            }
           ]
          },
          {
           "type": "cards",
           "title": "Group jobs (everyone still presents a laptop)",
           "items": [
            {
             "label": "Timekeeper",
             "text": "One minute per pitch. Holds up a hand at 10 seconds.",
             "icon": "clock"
            },
            {
             "label": "Language monitor",
             "text": "Ticks the moves below and reports at the end: which moves did the group use, and which were missing?",
             "icon": "pen"
            }
           ]
          },
          {
           "type": "steps",
           "items": [
            {
             "who": "group",
             "text": "Take turns. Each person presents their laptop in about one minute."
            },
            {
             "who": "group",
             "text": "Actively listen to your group members present their device. Be open to changing your opinion on what is the best laptop for students."
            },
            {
             "who": "group",
             "text": "After each pitch, ask at least <b>two questions</b>. Use the questions from <b>Activity 1 Challenging your viewpoint</b> as a guide. Make sure battery life, weight and security are discussed for every laptop."
            },
            {
             "who": "alone",
             "text": "Take notes on the other laptops in the table."
            }
           ]
          },
          {
           "type": "table",
           "id": "d8-notes",
           "live": true,
           "title": "Notes on my group’s laptops",
           "columns": [
            "Laptop",
            "Battery life",
            "Weight",
            "Security",
            "Other features",
            "Strong point?"
           ],
           "fixed": [
            "MacBook Pro",
            "Microsoft Surface",
            "Dell XPS 14",
            "HP Pavilion Plus"
           ]
          },
          {
           "type": "language",
           "title": "Ask, challenge and respond",
           "groups": [
            {
             "label": "Ask for information",
             "phrases": [
              "<b>How does</b> its battery life <b>compare with</b> …?",
              "<b>What exactly do you mean by</b> “self-locking”?",
              "<b>Is there a situation where</b> this laptop <b>might not</b> work well?"
             ]
            },
            {
             "label": "Challenge politely",
             "phrases": [
              "<b>I see your point, but</b> isn’t it quite expensive?",
              "<b>What are the potential drawbacks</b> of …?",
              "<b>Are you assuming that</b> all students need …?",
              "<b>How might</b> a student on a small budget <b>view</b> this?"
             ]
            },
            {
             "label": "Defend your stance",
             "phrases": [
              "<b>That’s true, however</b> …",
              "<b>While it is true that</b> it costs more, <b>it is also important to consider</b> …",
              "<b>Let me put it another way</b> …"
             ]
            },
            {
             "label": "Concede",
             "phrases": [
              "<b>That’s a fair point.</b>",
              "<b>I hadn’t thought of that.</b>",
              "<b>You’re right that</b> … , <b>but</b> …"
             ]
            }
           ]
          },
          {
           "type": "checklist",
           "id": "d8-monitor",
           "title": "Language monitor: tick each move you hear (one team point each)",
           "meter": [
            "moves",
            "Full score!"
           ],
           "items": [
            "A stance phrase (In my opinion … / I believe …)",
            "Evidence (According to … / Data from …)",
            "A counterargument (While it is true that …)",
            "An open-ended question (Is there a situation where …?)",
            "An assumption question (Are you assuming that …?)",
            "A consequence question (What happens in the long term if …?)",
            "A polite challenge (I see your point, but …)",
            "A concession (That’s a fair point. / I hadn’t thought of that.)"
           ]
          }
         ],
         "category": "5 · Production"
        },
        {
         "id": "d9",
         "short": "Discussion 2",
         "minutes": 4,
         "grouping": "Groups of 4",
         "art": "dec10/assets/week3/v/v-d10w3d4-d9.svg",
         "title": "Activity 2 Putting it into practice: Discussion 2",
         "goal": "Conclude with your final position — and say who or what persuaded you.",
         "blocks": [
          {
           "type": "toggle",
           "title": "Keep, almost change or change your position",
           "hint": "Open to choose your phrase",
           "ref": true,
           "blocks": [
            {
             "type": "text",
             "title": "Say where you stand now",
             "list": [
              "<b>Did not change</b>: <i>I take your point about …, but I still believe … because …</i>",
              "<b>Almost changed</b>: <i>I’m still not fully convinced, but …’s point about … made me think again.</i>",
              "<b>Changed</b>: <i>That’s a fair point. I hadn’t considered … · My earlier position was based on …, but after hearing …, I can see that …</i>"
             ]
            }
           ]
          },
          {
           "type": "figure",
           "src": "dec10/assets/week3/d4-four-corners.svg",
           "size": "wide",
           "alt": "A classroom seen from above with four corners, one for each laptop: MacBook Pro, Microsoft Surface, Dell XPS 14 and HP Pavilion Plus. Students walk from their seats to the corner of the laptop they would buy now. Footprints show one student who moved from the HP corner to the Surface corner, with a bubble: My position changed.",
           "caption": "Four corners: walk to the laptop you would buy now."
          },
          {
           "type": "do",
           "n": 1,
           "who": "class",
           "text": "<b>Four corners.</b> Each corner of the room is one laptop. Stand up and walk to the corner of the laptop you would buy <b>now</b>. Did you leave your own laptop? Say who persuaded you, and why."
          },
          {
           "type": "do",
           "n": 2,
           "who": "group",
           "text": "At the end of the discussion, conclude with your final position. Let your group know if:"
          },
          {
           "type": "choose",
           "id": "d9-pos",
           "title": "My final position",
           "options": [
            "My position did not change.",
            "My position almost changed.",
            "My position changed."
           ]
          },
          {
           "type": "talk",
           "title": "Say it to your group",
           "prompts": [
            "Use one phrase from <b>Language for changing your position</b>.",
            "Name the person and the information that persuaded you."
           ]
          },
          {
           "type": "tip",
           "text": "In the <b>Interactive Discussion</b> assessment, showing flexibility — and saying clearly why your view changed — is a sign of criticality."
          },
          {
           "type": "fields",
           "title": "Exit ticket",
           "fields": [
            {
             "id": "d9-exit",
             "label": "Write one sentence you could say in the Interactive Discussion to show flexibility",
             "rows": 2,
             "placeholder": "That’s a fair point. I hadn’t considered … , so I would now say …"
            }
           ]
          }
         ],
         "category": "5 · Production"
        }
       ]
      },

      /* ─────────────────────────── 17A HW ─────────────────────────── */
      {
        id: 'citing',
        number: '05',
        code: '17A',
        minutes: 45,
        tone: 'green',
        art: A + 's-d4-citing.svg',
        title: 'Citing sources Homework',
        subtitle: 'Referencing, in-text citations and reporting verbs',
        outcome: 'You can explain the difference between referencing system and style, recognise accurate in-text citation, identify internal and external citations, and list a few different reporting verbs.',
        activities: [
          {
            id: 'e1',
            short: 'Lead-in',
            minutes: 3,
            grouping: 'Homework',
            art: V('e1'),
            title: 'Lead-in',
            goal: 'How much referencing does DEC10 need?',
            blocks: [
              {
                type: 'flip',
                title: 'Consider each question — then turn the card',
                items: [
                  { front: 'How many of your writing and speaking assessments in DEC 10 require referencing?', tag: '1', back: 'All of them' },
                  { front: 'How many of these assessments require in-text references?', tag: '2', back: 'All of them' },
                  { front: 'Which of these assessments require a reference list?', tag: '3', back: 'Interactive Presentation only' }
                ]
              }
            ]
          },
          {
            id: 'e2',
            short: 'Referencing',
            minutes: 12,
            grouping: 'Homework',
            art: V('e2'),
            title: 'Introduction to referencing sources',
            goal: 'Know what APA is — and the difference between a system and a style.',
            blocks: [
              {
                type: 'figure',
                src: A + 'd4-ref-system.svg',
                size: 'wide',
                alt: 'APA Style 7th edition, used at CET. It has two linked parts: author-date in-text citations in your text, for example (Adeney, 2018), and a reference list at the end with the full details. A line links each citation to its entry in the list.',
                caption: 'APA 7th: author-date in-text citations + a reference list.'
              },
              { type: 'key', title: 'At CET', points: ['We use the <b>American Psychological Association (APA) style 7th edition</b> to reference sources that we use in our assessments and exams.', 'APA Style uses <b>author-date in-text citations</b> and <b>a reference list</b> to acknowledge sources.'] },
              { type: 'do', n: 1, who: 'alone', text: 'Watch the video on Canvas, then answer the questions.' },
              { type: 'listening', source: 'Olston (n.d.) · Coursera', title: '4.2 Referencing and attributing resources', videoId: '', audio: '', start: 0, transcripts: [] },
              { type: 'tip', text: 'Source: Olston, K. (n.d.). 4.2 Referencing and attributing resources [MOOC lecture]. In K. Olston, <i>Information &amp; Digital Literacy for University Success</i>. Coursera.' },
              {
                type: 'cloze',
                id: 'e2-cloze',
                title: 'Questions 1 and 2 · Complete the sentences',
                text: 'A set of rules and guidelines for referencing is called referencing {{1}}. This differs from referencing {{2}} which refers to specific conventions, rules and guidelines for referencing.',
                options: ['system', 'style'],
                answers: ['system', 'style'],
                why: ['See the video from 1:22.', 'See the video from 1:28.']
              },
              {
                type: 'quiz',
                id: 'e2-q',
                items: [
                  { q: 'Question 3. Choose the underlying principle of referencing.', options: ['reference clearly, accurately and, consistently', 'reference name and year of publication only', 'reference secondary citations as well as the one you are reading'], answer: 'reference clearly, accurately and, consistently', why: 'Watch the video from 1:55.' },
                  { q: 'Question 4. Which sentence is NOT correct?', options: ['In-text citations are not as important as the end reference list.', 'In-text citations in the body of the text should be linked to a reference list at the end of the text.', 'All references listed at the end of the text can be found in in-text citations in the body of the text.'], answer: 'In-text citations are not as important as the end reference list.', why: 'The reference you put in the body of the text is as important as the end reference list.' }
                ]
              },
              { type: 'talk', title: 'Explain it (to a classmate tomorrow, or aloud to yourself now)', prompts: ['“A referencing <b>system</b> is …, <b>whereas</b> a referencing <b>style</b> is …. <b>For example</b>, APA 7th …”'] }
            ]
          },
          {
            id: 'e3',
            short: 'In-text',
            minutes: 7,
            grouping: 'Homework',
            art: V('e3'),
            title: 'Introduction to in-text citations',
            goal: 'Why we incorporate sources — and two ways to do it.',
            blocks: [
              { type: 'do', n: 1, who: 'alone', text: 'Watch the video on Canvas, then answer the questions.' },
              { type: 'listening', source: 'Norman (n.d.) · Coursera', title: '4.3a Incorporating sources', videoId: '', audio: '', start: 0, transcripts: [] },
              { type: 'tip', text: 'Source: Norman, P. (n.d.). 4.3a Incorporating sources [MOOC lecture]. In K. Olston, <i>Information &amp; Digital Literacy for University Success</i>. Coursera.' },
              {
                type: 'quiz',
                id: 'e3-q',
                items: [
                  { q: '1. Why do we need to incorporate sources into assignments?', options: ['To avoid plagiarism', 'Give credit to the original author', 'To show the marker you have done the research', 'All the above'], answer: 'All the above', why: 'Each of the other answers is only partially correct.' },
                  { q: '2. By referencing anything you paraphrased or directly quoted from another source, …', options: ['you use up more word count', 'you acknowledge that these are someone else’s ideas', 'you will get bonus marks', 'your assignment will look more academic'], answer: 'you acknowledge that these are someone else’s ideas', why: 'Watch the video from 0:55.' }
                ]
              },
              {
                type: 'match',
                id: 'e3-m',
                title: 'Match the different ways you can incorporate sources in your assignments',
                left: ['Direct quote', 'Paraphrase'],
                right: ['When you can’t express the original author’s idea better than they have, you must use “...”. You still provide a reference.', 'When you take the author’s words and put them into your own words. You still provide a reference.']
              }
            ]
          },
          {
            id: 'e4',
            short: 'Internal / external',
            minutes: 10,
            grouping: 'Homework',
            art: V('e4'),
            title: 'Internal and external citations',
            goal: 'Put the author inside or outside your sentence — correctly.',
            blocks: [
              {
                type: 'figure',
                src: A + 'd4-int-ext.svg',
                size: 'wide',
                alt: 'Two sentences compared. Internal: “Adeney (2018) reports a significant increase over that period.” The author is inside the grammar of the sentence, at the start. External: “That period saw a significant increase (Adeney, 2018).” The information comes first and the author and year are in brackets at the end, outside the grammar.',
                caption: 'Internal = the author is inside the sentence. External = the author is in brackets at the end.'
              },
              {
                type: 'tabs',
                title: 'Format (APA 7th edition)',
                tabs: [
                  { label: 'Internal', blocks: [{ type: 'model', title: 'Internal citations', rows: [['Webpage – with individual author', 'Surname (Year) e.g. Adeney (2018)'], ['Webpage – no individual author', 'Organisation name (Year) e.g. World Health Organization (2018)'], ['Book or Journal Article – one author', 'Surname (Year) e.g. Strangfeld (2019)'], ['Book or Journal Article – two authors', 'Surname1 and Surname 2 (Year) e.g. Vezzani and Gonzaga (2017)'], ['Book or Journal Article – three or more authors', 'Surname 1 et al. (year) e.g. Nielsen et al. (2017)'], ['Figures, Images, Tables, Graphs, Maps or Charts', 'Cite each of these as you would for a book.'], ['Data or Statistics', 'Cite these as you would for a website.']] }] },
                  { label: 'External', blocks: [{ type: 'model', title: 'External citations', rows: [['Webpage – with individual author', '(Surname, Year) e.g. (Adeney, 2018)'], ['Webpage – no individual author', '(Organisation name, Year) e.g. (World Health Organization, 2018)'], ['Book or Journal Article – one author', '(Surname, Year) e.g. (Strangfeld, 2019)'], ['Book or Journal Article – two authors', '(Surname1 & Surname 2, Year) e.g. (Vezzani & Gonzaga, 2017)'], ['Book or Journal Article – three or more authors', '(Surname 1 et al., year) e.g. (Nielsen et al., 2017)'], ['Figures, Images, Tables, Graphs, Maps or Charts', 'Cite each of these as you would for a book.'], ['Data or Statistics', 'Cite these as you would for a website.']] }] }
                ]
              },
              { type: 'tip', text: 'Two authors: <b>and</b> inside the sentence (Vezzani and Gonzaga, 2017) → <b>&amp;</b> inside brackets (Vezzani &amp; Gonzaga, 2017).' },
              {
                type: 'sort',
                id: 'e4-sort',
                title: 'Internal or external citation?',
                buckets: [{ label: 'Internal', letter: 'I' }, { label: 'External', letter: 'E' }],
                items: [
                  { text: 'According to Williams (2021), the digital carbon footprint refers to the greenhouse gas emissions resulting from the use of digital devices and internet services.', answer: 0 },
                  { text: 'The digital carbon footprint refers to the greenhouse gas emissions resulting from the use of digital devices and internet services (Williams, 2021).', answer: 1 },
                  { text: 'Green and Smith (2022) highlight that streaming videos online can significantly contribute to one’s digital carbon footprint.', answer: 0 },
                  { text: 'Streaming videos online can significantly contribute to one’s digital carbon footprint (Green & Smith, 2022).', answer: 1 },
                  { text: 'Reducing unnecessary emails can help lower your digital carbon footprint (Brown et al., 2020)', answer: 1 }
                ]
              },
              {
                type: 'rewrite',
                id: 'e4-rw',
                label: 'Change it',
                title: 'Extra practice: make each internal citation external',
                hint: 'Keep the information. Move the author and year into brackets at the end.',
                items: [
                  { q: 'Green and Smith (2022) highlight that streaming videos online can significantly contribute to one’s digital carbon footprint.', accept: ['Streaming videos online can significantly contribute to one’s digital carbon footprint (Green & Smith, 2022).', 'Streaming videos online can significantly contribute to one’s digital carbon footprint (Green & Smith, 2022)'], model: 'Streaming videos online can significantly contribute to one’s digital carbon footprint (Green & Smith, 2022).', why: 'Inside brackets, “and” becomes “&”, and a comma goes before the year.' },
                  { q: 'Nielsen et al. (2017) found that remote work increased productivity.', accept: ['Remote work increased productivity (Nielsen et al., 2017).'], model: 'Remote work increased productivity (Nielsen et al., 2017).' }
                ]
              }
            ]
          },
          {
            id: 'e5',
            short: 'Secondary',
            minutes: 5,
            grouping: 'Homework',
            art: V('e5'),
            title: 'Secondary citations',
            goal: 'Cite a source inside the source you are reading — only when you must.',
            blocks: [
              {
                type: 'figure',
                src: A + 'd4-secondary.svg',
                size: 'wide',
                alt: 'You read an article by Smith (2023). Inside it, Smith refers to an expert, Jones (2021), but you cannot access Jones’s article. You write: (Jones, 2021, as cited in Smith, 2023). The original author and date come first, then “as cited in”, then the text you actually read.',
                caption: 'The original author first — “as cited in” — the text you actually read.'
              },
              {
                type: 'rule',
                n: '★',
                title: 'Secondary citation',
                explain: 'When you want to use a source within the source you are reading, it is called a <b>secondary citation</b>. Use it only rarely: try to find for yourself all the material that you want to cite. (Remember the CRAAP test: <i>accuracy</i> — does the writer reference other sources?)',
                form: '[The original author and date acknowledged first] <b>as cited in</b> [the author and date of the text you are actually reading]',
                examples: [
                  ['ok', 'If everyone is made aware of their carbon digital footprint, we can collectively make a difference in mitigating global warming (Jones, 2021, as cited in Smith, 2023).', 'Jones = original idea · Smith = what you read'],
                  ['no', '… in mitigating global warming (Smith, 2023, as cited in Jones, 2021).', 'Wrong order: the original author comes first.']
                ],
                check: { q: 'You read Lee (2024). Lee quotes Park (2019). You cannot find Park. How do you cite it?', a: '(Park, 2019, as cited in Lee, 2024)' }
              }
            ]
          },
          {
            id: 'e6',
            short: 'Reporting verbs',
            minutes: 8,
            grouping: 'Homework',
            art: V('e6'),
            title: 'Reporting Verbs',
            goal: 'Choose a reporting verb that shows your judgment of the source.',
            blocks: [
              {
                type: 'figure',
                src: A + 'd4-verb-groups.svg',
                size: 'wide',
                alt: 'Three groups of reporting verbs. 1 Research verbs: study, investigate, research, explore — usually simple past, e.g. Dalton (2004) studied changes in urban water usage. 2 Discourse verbs: state, mention, suggest, conclude — what the source does with the information. 3 Evaluative verbs: contend, assume, assert, allege — your judgment of the source.',
                caption: 'Adapted from Brick, J. (2006). Academic culture: A student’s guide to studying at university. NCELTR, Macquarie University.'
              },
              { type: 'key', title: 'Reporting verbs', points: ['They express the action of the author speaking. A careful choice shows <b>your assessment</b> of the idea — your writer’s voice flows through, even when you refer to sources. They are used with <b>internal</b> citations.', 'Normally <b>present simple</b> (Brown argues …). Use the <b>past</b> to present the results of past research (Bowtch (2002) investigated …).', 'Be careful: <i>Brown (1997) mentions …</i> means Brown says very little about it.'] },
              { type: 'tip', text: '<b>Table 1</b> (discourse verbs) and <b>Table 2</b> (evaluative verbs) are in your booklet: <b>W3 D4. 17D Citing sources homework</b> (Language Reference). Look at them first.' },
              {
                type: 'match',
                id: 'e6-m',
                title: '1. Match the reporting verbs to their definitions',
                left: ['suggest', 'mention', 'confirm', 'claim', 'explain', 'inform', 'report', 'conclude'],
                right: ['make a proposal, declare a plan for something', 'a remark that calls attention to something or someone', 'strengthen or make more firm', 'an assertion that something is true or factual', 'define and make understandable by expanding on details', 'impart knowledge of some fact or event to someone', 'to give an account of something', 'a judgement made based on reasoning']
              },
              { type: 'do', n: 1, who: 'alone', text: '2. Scan the text ‘2024 Digital economy report’ (United Nations Conference on Trade and Development, 2024) — see <b>W2 D2. 6A Mediation</b> in the Reading section of your student booklet. Which of the reporting verbs from Q1 can you find? More than one answer is possible.' },
              { type: 'checklist', id: 'e6-scan', title: 'I found …', items: ['suggest', 'mention', 'confirm', 'claim', 'explain', 'inform', 'report', 'conclude'] },
              {
                type: 'quiz',
                id: 'e6-q',
                title: '3. Which reporting verb could you use to cite each sentence?',
                shared: ['suggest', 'explain', 'inform', 'claim', 'conclude'],
                items: [
                  { q: 'Climate change implications of AI and machine learning are significant but highly uncertain (Cowls et al., 2021; Kaack et al., 2022; Rolnick et al., 2023).', answer: 'suggest' },
                  { q: 'There is limited data and no clarity on how to define what is included or excluded, and no established methodology for measuring energy use (Kaack et al., 2022).', answer: 'explain' },
                  { q: 'Machine learning systems require computing resources and hardware, primarily in large data centres, that use energy, water and materials.', answer: 'inform' },
                  { q: 'This will make measuring and reducing the energy, carbon and water footprint of AI even more critical.', answer: 'claim' },
                  { q: 'Policymakers and companies should also pay attention to the indirect effects of AI on climate change, given the potentially large impacts of such applications on GHG emissions.', answer: 'conclude' }
                ]
              },
              {
                type: 'detect',
                id: 'e6-write',
                title: 'Write two citations about the workforce of the future',
                label: 'Function lights',
                hint: 'Use any source from this week. One internal citation with a reporting verb, one external citation.',
                checks: [
                  { label: 'Reporting verb', color: '#2b776e', any: ['/\\b(states?|argues?|claims?|points? out|found|compares?|reports?|lists?|refers?|discuss(es)?|mentions?|notes?|evaluates?|concludes?|suggests?|emphasi[sz]es?|contends?|assumes?|implies|alleges?|reveals?|investigated|studied|explored)\\b/i'] },
                  { label: 'Internal (Surname (Year))', color: '#3a58a0', any: ['/[A-Z][a-z]+( et al\\.)? \\(\\d{4}\\)/u'] },
                  { label: 'External ((Surname, Year))', color: '#7a4a8c', any: ['/\\([A-Z][^()]*, \\d{4}\\)/u'] }
                ],
                items: [{ task: 'Two sentences.', placeholder: 'Bowen et al. (2018) argue that … · Green jobs are … (Hyman & Smith, 2023).', rows: 4 }]
              },
              {
                type: 'checklist',
                id: 'e6-save',
                title: 'Download and save for future reference',
                items: [
                  'The University of Sydney Library guide to APA 7th Referencing (University of Sydney Library, n.d.).',
                  'The table of common reporting verbs adapted from Brick, J. (2006). Academic culture: A student’s guide to studying at university. NCELTR, Macquarie University. (Included in your student booklet.)'
                ]
              },
              { type: 'sticky', title: 'Use it tomorrow', text: 'In your Day 5 presentation or Q&amp;A, say one source aloud with a reporting verb: “<b>Bowen et al. (2018) argue that</b> …”. Your classmates’ evidence detectives will be listening!' }
            ],
            answers: { title: 'Suggested answers', items: [['2. Verbs in the 2024 Digital economy report', '<b>suggest</b> (“Recent data from Google and Meta suggest …”), <b>report</b> (“Google reports that …”) and <b>conclude</b> (“Ludvigsen (2023a, 2023b) concluded that …”). “inform” only appears inside “information”, so it is not a reporting verb there.']] }
          }
        ]
      }
    ],
    extras: [],
    glossary: [
      ['workforce', 'all the people who work in a country, industry or company', 'The workforce of the future will need new digital skills.'],
      ['green skills', 'the knowledge and abilities needed for jobs that protect the environment', 'Engineers with green skills are in high demand.'],
      ['upskill', 'to learn new skills for your current job', 'Many workers will need to upskill as AI spreads.'],
      ['reskill', 'to learn new skills so you can do a different job', 'The company paid for staff to reskill as data analysts.'],
      ['automation', 'using machines or computers to do work that people did before', 'Automation is changing jobs in factories and offices.'],
      ['AST question', 'a follow-up question about how you used an Academic Success Toolkit skill', 'How did your group decide who does what?'],
      ['action point', 'one clear thing to do next time', 'My action point: say my sources aloud.'],
      ['stance', 'your position or opinion on an issue', 'State your stance clearly at the start.'],
      ['counterargument', 'an argument against your own position', 'It may be argued that green skills are costly; however, …'],
      ['flexibility', 'being open to changing your view when you hear good reasons or evidence', 'She showed flexibility when she changed her mind about the laptop.'],
      ['assumption', 'something people believe is true without proof', 'Are they justified in that assumption?'],
      ['implication', 'a possible effect or result of an idea or action', 'What are the ethical implications of this action?'],
      ['persuade', 'to make someone agree or do something by giving reasons', 'Her evidence persuaded me to change my position.'],
      ['referencing style', 'the specific conventions and rules for referencing, e.g. APA 7th', 'At CET we use APA style 7th edition.'],
      ['in-text citation', 'the short author-date reference in your text', 'Add an in-text citation after every paraphrase: (Adeney, 2018).'],
      ['reference list', 'the full details of all your sources at the end of your work', 'Every in-text citation must link to the reference list.'],
      ['secondary citation', 'citing a source that you read about in another source', '(Jones, 2021, as cited in Smith, 2023)'],
      ['reporting verb', 'a verb that reports what a source says or does, e.g. argue, suggest', 'Choose the reporting verb that shows your judgment.']
    ]
  };
})();
