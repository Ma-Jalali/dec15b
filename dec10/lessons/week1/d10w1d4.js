/* DEC10 · Week 1 Day 4 — rhetorical functions (support, previous research, evaluation, voices), the responding-to-feedback video,
   the Seminar opening-remarks check-in, and AST research skills.
   Teacher's Book lessons 14A, 15A, 16A, 17A. The Teacher's Book paragraphs, extracts, links and answer keys are kept;
   the activities around them are redesigned. Language banks are cut to the phrases students will really write.
   Keep the id 'd10w1d4' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d4',
  week: 1, day: 4,
  title: 'Voices, video and research',
  duration: 'About 4 hours',
  question: 'Whose voice is in your paragraph — and can your reader trust it?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question',
  journey: 'Learn to support a claim, bring in other writers and judge them (without saying “I think”), plan your group’s Portfolio video, check in for next week’s Opening Remarks, and find sources that pass the CRAAP test.',
  image: 'dec10/assets/week1/hero-d10w1d4.svg',
  imageAlt: 'Illustration: a paragraph made of coloured speech bubbles for the writer and three authors, a video camera recording a group, and a magnifying glass over five CRAAP cards.',
  finish: { title: 'Day 5', text: 'Diagnostic and summarising' },
  goalShort: 'your integrated writing, your Seminar Portfolio and your research',

  sections: [
    /* ───────────────────────── 14A · Rhetorical functions ─────────────────────────
       Rebuilt as "The Sydney Question": a lecturer asks four questions about one claim, and each question unlocks a tool.
       Every tool follows the same path: notice it in a model → learn its language by category → controlled practice →
       write with the function lights. All Teacher's Book paragraphs, extracts, tasks and answer keys are kept. */
    {
      id: 'voices', number: '01', code: '14A', minutes: 90,
      tone: 'plum', art: 'dec10/assets/week1/s-voices.svg',
      title: 'Academic writing skills: rhetorical functions',
      subtitle: 'The Sydney Question: four tools for a university reader',
      outcome: 'You can support a claim, use previous research, evaluate points of view and show your own voice. You can then use all four in one paragraph.',
      activities: [
        {
          id: 'rf1', short: 'Lead-in', minutes: 8, grouping: 'Pair → Class',
          art: 'dec10/assets/week1/v/v-d10w1d4-v1.svg',
          title: 'The Sydney Question',
          goal: 'Find out what a university reader wants from your writing.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Your cousin at home asks you: “Should I come and study in Sydney?” Answer in 1–2 minutes. Your partner keeps your score: every phrase below wins points.' },
            { type: 'cards', title: 'Phrase points', items: [
              { label: '1 point', text: 'So… · Because…' },
              { label: '2 points', text: 'Therefore… · This is significant because…' },
              { label: '3 points', text: 'It is important not to assume that… · … is needed.' }
            ] },
            { type: 'talk', title: 'Take turns. Then swap.', prompts: [
              'How has your experience of life in Sydney been so far?',
              'Would you recommend Sydney to other international students? Why / why not?'
            ] },
            { type: 'fields', fields: [
              { id: 'rf1-score', label: 'My score', rows: 1, placeholder: 'e.g. 9 points' },
              { id: 'rf1-best', label: 'My best 3-point sentence', rows: 2, placeholder: 'It is important not to assume that …' }
            ] },
            { type: 'do', n: 2, who: 'class', text: 'Now the reader changes. You give a lecturer one sentence: “Sydney is the best city for international students.” Tap each speech bubble. What does the lecturer want?' },
            { type: 'hotspot', src: 'dec10/assets/week1/four-questions.svg', size: 'wide', alt: 'A first draft says only: Sydney is the best city for international students. A lecturer asks four questions: How do you know? Who else says so? Is that view right? Whose idea is this?', caption: 'One claim, four questions, four tools.', spots: [
              { x: 97, y: 16.3, label: '1', color: '#2f9a63', title: 'Tool 1 · Providing support', text: 'A claim alone proves nothing. Your reader wants <b>details</b>, an <b>example</b> and <b>evidence</b>. A personal story is not enough.' },
              { x: 97, y: 36.3, label: '2', color: '#3a58a0', title: 'Tool 2 · Using previous research', text: 'Your reader wants to know what <b>other writers</b> found or think. You can present their findings, present their opinions, compare them or evaluate them.' },
              { x: 97, y: 56.3, label: '3', color: '#c4562f', title: 'Tool 3 · Evaluating points of view', text: 'Not every source is right. Accept the good part of a view, then show its <b>weakness</b>. This is where your argument is.' },
              { x: 97, y: 76.3, label: '4', color: '#7a4a8c', title: 'Tool 4 · Working with different voices', text: 'Your reader must see which ideas are <b>yours</b> and which belong to <b>sources</b>. You do this without writing “I think”.' }
            ] },
            { type: 'sticky', color: 'green', title: 'Today’s mission', text: '<p>The <b>International Student Guide</b> wants one paragraph from you:</p><p><b>Is Sydney a good city for international students?</b></p><p>Collect the four tools today. At the end, use all four in one paragraph.</p>' }
          ]
        },
        {
          id: 'rf2', short: 'Toolbox', minutes: 4, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-v2.svg',
          title: 'The tools you already have',
          goal: 'Revise four rhetorical functions from DEC10.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'A rhetorical function is the job a sentence does for the reader. You already know four. Match each one with its job and its language.' },
            { type: 'match', id: 'rf2-m', title: 'Four functions you know', hint: 'Tap a function, then its explanation.',
              left: ['Explaining cause and effect', 'Arguing and persuading', 'Evaluating', 'Problem-solving'],
              right: [
                'Discussing the reasons why something happened and the outcomes — “Therefore, …” · “Because …”',
                'Presenting evidence and reasoning to convince the reader — “The first thing to be considered is …” · “This approach will …”',
                'Making judgements about value, significance or quality — “This finding is significant …” · “This may not always be appropriate …”',
                'Identifying issues and proposing solutions — “One issue with X is …” · “One way to address this issue is …”'
              ] },
            { type: 'tip', text: 'Today you add four new jobs. Each one answers one of the lecturer’s questions.' }
          ]
        },
        {
          id: 'rf3', short: 'Tool 1', minutes: 12, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v3.svg',
          title: 'Tool 1 · Providing support',
          goal: 'Answer “How do you know?” with details, examples and evidence.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Mia wrote a first draft, then rewrote it. Read both versions. Which one would a lecturer believe? Then tap “What changed?”' },
            { type: 'pairs', items: [
              { from: 'Sydney is a popular destination for many international students. [[My friend studied there and loved it.]]',
                to: 'Sydney is a popular destination for many international students. [[There are many features of the city which]] make it a desirable place for young people to study and live. [[For instance,]] it is quite safe, clean and has beautiful beaches and natural surroundings. [[A recent survey of]] international students around the world [[found that]] Sydney was ranked within the top 5% of ideal locations to seek an education [[(Smith & Anderson, 2024)]].',
                tag: 'A personal story became details, an example and evidence.', note: 'One friend’s experience proves nothing to a lecturer. Details, examples and evidence from a source do.' }
            ] },
            { type: 'do', n: 2, who: 'alone', text: 'Check the rule.' },
            { type: 'quiz', id: 'rf3-q', items: [
              { q: 'Which ONE is NOT a good way to support a claim in academic writing?', options: ['providing details', 'giving examples', 'giving a personal story', 'providing evidence'], answer: 'giving a personal story', why: 'A personal story is one person’s experience. Your reader needs details, examples and evidence from sources.' }
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Now label Mia’s four sentences. What job does each one do?' },
            { type: 'sort', id: 'rf3-sort', title: 'Claim, details, example or evidence?', hint: 'The four sentences make one paragraph, in this order.', buckets: [
              { label: 'Claim', letter: 'C' }, { label: 'Details', letter: 'D' }, { label: 'Example', letter: 'Ex' }, { label: 'Evidence', letter: 'Ev' }
            ], items: [
              { text: 'Sydney is a popular destination for many international students.', answer: 0 },
              { text: 'There are many features of the city which make it a desirable place for young people to study and live.', answer: 1 },
              { text: 'For instance, it is quite safe, clean and has beautiful beaches and natural surroundings.', answer: 2, why: '“For instance” introduces the examples.' },
              { text: 'A recent survey of international students around the world found that Sydney was ranked within the top 5% of ideal locations to seek an education (Smith & Anderson, 2024).', answer: 3, why: '“A recent survey … found that” + a citation introduces the evidence.' }
            ] },
            { type: 'do', n: 4, who: 'alone', text: 'Here is the language for Tool 1, in three groups. Read one group at a time.' },
            { type: 'language', title: 'Tool 1 · Language for support', groups: [
              { label: 'Adding details', phrases: ['There are many features of X which …', '… because …'] },
              { label: 'Giving an example', phrases: ['For instance, + a full sentence', 'For example, + a full sentence', '… such as X and Y'] },
              { label: 'Giving evidence', phrases: ['A recent survey of … found that … (Author, year).', 'Author (year) found that …', 'According to Author (year), …'] }
            ] },
            { type: 'sticky', color: 'blue', tilt: 1.2, title: 'Trap: “For instance” or “such as”?', text: '<p><b>For instance,</b> starts a sentence. Then a comma and a full sentence.<br><i>For instance, it is quite safe.</i></p><p><b>such as</b> sits in the middle. Only nouns come after it.<br><i>beautiful beaches such as Bondi and Coogee</i></p>' },
            { type: 'do', n: 5, who: 'alone', text: 'Choose the right phrase for each gap. Watch out for the trap.' },
            { type: 'cloze', id: 'rf3-cl', title: 'Support the claim', hint: 'Open a gap and choose. Read the whole sentence first.',
              options: [['because', 'such as', 'For instance'], ['For instance', 'Such as', 'Because'], ['such as', 'for instance,', 'because'], ['According to', 'Found that', 'For instance'], ['found', 'according to', 'such as']],
              text: 'Sydney is a desirable place to study {{1}} it is safe, clean and full of things to do. {{2}}, it has free festivals, markets and concerts all year. Students can also visit famous places {{3}} the Opera House and Darling Harbour. {{4}} Smith and Anderson (2024), safety is one of the city’s greatest strengths. Their survey {{5}} that Sydney was ranked within the top 5% of ideal study locations.',
              answers: ['because', 'For instance', 'such as', 'According to', 'found'] },
            { type: 'do', n: 6, who: 'alone', text: 'Your turn. Support the claim in 2–3 sentences. Use the Smith & Anderson (2024) survey: Sydney is in the top 5% of study cities because it is safe and has a good climate. Try to turn on all three lights.' },
            { type: 'detect', id: 'rf3-w', title: 'Write with Tool 1',
              checks: [
                { label: 'Detail or reason', color: '#d99a1e', any: ['because', 'which', 'this means'] },
                { label: 'Example', color: '#2f9a63', any: ['for instance', 'for example', 'such as'] },
                { label: 'Evidence + citation', color: '#3a58a0', any: ['/\\d{4}\\)/'] }
              ],
              avoid: [
                { label: 'A personal story is not support', any: ['my friend', 'my cousin', 'my sister', 'my brother', 'my family'] },
                { label: '“I think” is not academic', any: ['i think', 'in my opinion', 'i believe', 'i feel'] }
              ],
              items: [
                { task: '<b>Claim:</b> Sydney is a good city for students who love the outdoors.', rows: 4, placeholder: 'Sydney is a good city for students who love the outdoors because …',
                  model: 'Sydney is a good city for students who love the outdoors <b>because</b> it has a warm climate for most of the year. <b>For instance,</b> students can swim at beaches <b>such as</b> Bondi and Coogee. <b>A recent survey</b> of international students <b>found that</b> Sydney was ranked within the top 5% of ideal study locations, partly because of its climate <b>(Smith &amp; Anderson, 2024)</b>.' }
              ] }
          ]
        },
        {
          id: 'rf4', short: 'Tool 2', minutes: 14, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v4.svg',
          title: 'Tool 2 · Using previous research',
          goal: 'Answer “Who else says so?” by presenting, comparing and evaluating sources.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'This is your research desk for today. Tap each card. What does each source say about Sydney or Melbourne?' },
            { type: 'hotspot', src: 'dec10/assets/week1/research-desk.svg', size: 'wide', alt: 'Five source cards on a desk: Smith and Anderson 2024, Jones 2024, Thompson 2023, Schwartz 2022 and Phelps 2023.', caption: 'Five sources. You will use them all lesson.', spots: [
              { x: 31, y: 14, label: 'S', color: '#2f7d6b', title: 'Smith & Anderson (2024) · a survey', text: 'A survey of international students around the world. It found that Sydney was ranked within the top 5% of ideal study locations because of safety, climate and culture. It also reports that Melbourne has 140 rainy days a year.<br><b>Good for:</b> evidence that Sydney is a good choice.' },
              { x: 63, y: 12, label: 'J', color: '#b0512a', title: 'Jones (2024) · an opinion', text: 'Jones argues that the high cost of living makes Sydney difficult for international students. Jones believes students should study in a rural location for a more authentic Australian life.<br><b>Good for:</b> a view that disagrees.' },
              { x: 95, y: 15, label: 'T', color: '#3a58a0', title: 'Thompson (2023) · research', text: 'This research found that many international students cannot find accommodation within their budget.<br><b>Good for:</b> evidence for the cost problem.' },
              { x: 47, y: 57, label: 'S', color: '#8a6d1e', title: 'Schwartz (2022) · an article', text: 'Schwartz argues that Melbourne’s beaches are polluted and have poor conditions for surfers.<br><b>Good for:</b> comparing Sydney with Melbourne.' },
              { x: 80, y: 56, label: 'P', color: '#7a4a8c', title: 'Phelps (2023) · a report', text: 'Phelps reports that Melbourne’s climate appeals to people who prefer cooler weather. Melbourne also provides more cultural activities as an alternative to beach life.<br><b>Good for:</b> a view that disagrees with “Sydney is better”.' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Four writers used these sources in four different ways. Match each extract with what the writer is doing.' },
            { type: 'match', id: 'rf4-m', title: 'What is the writer doing with the research?', hint: 'Read the extract, then tap the job.',
              left: [
                'A · Although Smith and Anderson’s (2024) research shows many positive aspects of life in Sydney, they have overlooked many common problems that international students may experience.',
                'B · While Smith and Anderson (2024) claim that Sydney is an ideal study location, Jones (2024) asserts that the high cost of living makes it difficult for international students to manage.',
                'C · Jones (2024) believes that to experience more authentic Australian life, international students should choose to study in a rural location.',
                'D · In a recent survey of international students around the world, Smith and Anderson (2024) found that Sydney was ranked within the top 5% of ideal locations to seek an education.'
              ],
              right: ['evaluating authors’ claims', 'comparing and contrasting different authors', 'presenting opinions', 'presenting research findings'] },
            { type: 'do', n: 3, who: 'alone', text: 'Find the language that does each job. Tap the seven phrases. Leave the content words alone.' },
            { type: 'spot', id: 'rf4-spot', label: 'Phrase spotter', title: 'Which words do the job?', hint: 'There are seven phrases.', paras: [
              '[[*Although Smith and Anderson’s (2024) research shows]] many [[positive aspects]] of life in Sydney, [[*they have overlooked]] many common problems that [[international students]] may experience.',
              '[[*While Smith and Anderson (2024) claim that]] Sydney is an [[ideal study location]], [[*Jones (2024) asserts that]] the [[high cost of living]] makes it difficult for international students to manage.',
              '[[*Jones (2024) believes that]] to experience more [[authentic Australian life]], international students should choose to study in a rural location.',
              '[[*In a recent survey of]] international students around the world, [[*Smith and Anderson (2024) found that]] Sydney was ranked within the [[top 5%]] of ideal locations to seek an education.'
            ] },
            { type: 'do', n: 4, who: 'alone', text: 'Here is the language for Tool 2: one tab for each way of using a source.' },
            { type: 'language', title: 'Tool 2 · Four ways to use a source', groups: [
              { label: 'Present findings', phrases: ['Author (year) found that …', 'In a recent survey of …, Author (year) found that …', 'Author’s (year) research shows that …'] },
              { label: 'Present opinions', phrases: ['Author (year) believes that …', 'Author (year) argues that …'] },
              { label: 'Compare authors', phrases: ['While Author A (year) claims that …, Author B (year) asserts that …', 'In contrast, Author B (year) states that …'] },
              { label: 'Evaluate', phrases: ['Although Author’s (year) research shows …, they have overlooked …'] }
            ] },
            { type: 'do', n: 5, who: 'class', text: 'Reporting verbs are not all the same. Watch the meter, then tap each zone.' },
            { type: 'hotspot', src: 'dec10/assets/week1/verb-scale.svg', size: 'wide', alt: 'A strength meter for reporting verbs. Keep a distance: suggests, believes, claims. Just reporting: found, states, reports, according to. The author is sure: argues, asserts, maintains.', caption: 'Choose the verb on purpose.', spots: [
              { x: 27, y: 80, label: '1', color: '#d99a1e', title: 'Keep a distance: suggests · believes · claims', text: '“<b>Jones (2024) claims that</b> …” tells your reader: this is Jones’s idea, and I am not sure it is right. Use these verbs for opinions, or when you plan to disagree.' },
              { x: 50, y: 47, label: '2', color: '#3a58a0', title: 'Just reporting: found · states · reports · according to', text: '“<b>Thompson (2023) found that</b> …” Use these verbs for research results and facts. <b>found</b> is the best verb for a survey or a study.' },
              { x: 73, y: 80, label: '3', color: '#c4562f', title: 'The author is sure: argues · asserts · maintains', text: '“<b>Jones (2024) asserts that</b> …” The author takes a strong position and defends it.' }
            ] },
            { type: 'do', n: 6, who: 'alone', text: 'Choose the best word for each gap. Ask yourself: is this a research finding or an opinion?' },
            { type: 'cloze', id: 'rf4-cl', title: 'Finding or opinion?', hint: 'Open a gap and choose.',
              options: [['found', 'believes', 'such as'], ['believes', 'found', 'reports'], ['While', 'Because', 'For instance'], ['According to', 'Found that', 'Such as']],
              text: 'Thompson (2023) {{1}} that many international students cannot find accommodation within their budget. Jones (2024) {{2}} that international students should study in a rural location to experience more authentic Australian life. {{3}} Smith and Anderson (2024) claim that Sydney is an ideal study location, Jones (2024) asserts that the high cost of living makes it difficult for international students to manage. {{4}} Phelps (2023), Melbourne’s climate appeals to people who prefer cooler weather.',
              answers: ['found', 'believes', 'While', 'According to'] },
            { type: 'do', n: 7, who: 'alone', text: 'Your turn. Write two sentences from the research desk. Watch the lights.' },
            { type: 'detect', id: 'rf4-w', title: 'Write with Tool 2',
              checks: [
                { label: 'Citation (year)', color: '#3a58a0', any: ['/\\d{4}\\)/'] },
                { label: 'Reporting verb', color: '#2f7d6b', any: ['found', 'states', 'reports', 'according to', 'argues', 'asserts', 'claims', 'believes', 'suggests', 'maintains', 'shows'] },
                { label: 'Comparing', color: '#7a4a8c', any: ['while', 'whereas', 'in contrast', 'although', 'however'] }
              ],
              avoid: [{ label: '“I read an article…” — cite the author instead', any: ['i read', 'an article', 'said that'] }],
              items: [
                { task: '<b>1 · Present a finding.</b> Use the Thompson (2023) card.', rows: 2, placeholder: 'Thompson (2023) …', model: '<b>Thompson (2023) found that</b> many international students cannot find accommodation within their budget.' },
                { task: '<b>2 · Compare two authors.</b> Use the Smith &amp; Anderson (2024) and Jones (2024) cards.', rows: 3, placeholder: 'While Smith and Anderson (2024) …', model: '<b>While</b> Smith and Anderson <b>(2024) claim that</b> Sydney is an ideal study location, Jones <b>(2024) asserts that</b> the high cost of living makes life difficult for international students.' }
              ] }
          ]
        },
        {
          id: 'rf5', short: 'Tool 3', minutes: 12, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v5.svg',
          title: 'Tool 3 · Evaluating points of view',
          goal: 'Answer “Is that view right?”: accept the good part, then show the weakness.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Play “Yes, but…”. Spin a statement. Your partner agrees with one part, then disagrees: “Yes, it is true that …, but …”. Swap after each spin.' },
            { type: 'spinner', id: 'rf5-spin', title: 'Yes, but…', text: 'Spin, then answer in one sentence. Start with “It is true that …, but …”.', reels: [
              { label: 'Statement', items: [
                'Sydney is the best city in Australia.',
                'Students should live on campus.',
                'Part-time jobs are good for international students.',
                'Big cities are better than small towns for students.',
                'Students should cook at home every day.',
                'Online classes are better than classes on campus.'
              ] }
            ] },
            { type: 'do', n: 2, who: 'class', text: 'Academic writers play “Yes, but…” too, in three steps. Look at the see-saw. Which side is heavier, and why?' },
            { type: 'figure', src: 'dec10/assets/week1/eval-seesaw.svg', size: 'wide', alt: 'A see-saw. 1 Report the point of view: Smith and Anderson (2024) assert that. 2 Accept the good part, on the light side: While it is true that, Of course. 3 Show the weakness, on the heavy side: However, the authors have overlooked, these claims disregard. This is your argument.', caption: 'Light side first, heavy side last.' },
            { type: 'do', n: 3, who: 'pair', text: 'This paragraph follows the see-saw. It starts after “Sydney is a popular destination for international students.” Sort the three parts.' },
            { type: 'sort', id: 'rf5-sort', title: 'Point of view, positive or negative?', buckets: [
              { label: 'An author’s point of view', letter: 'POV' }, { label: 'Positive evaluation', letter: '+' }, { label: 'Negative evaluation', letter: '–' }
            ], items: [
              { text: 'Smith and Anderson (2024) assert that there are many positive aspects of life in Sydney, such as safety, a desirable climate and a variety of cultural activities.', answer: 0 },
              { text: 'While it is true that there are many reasons why Sydney is a desirable location to study,', answer: 1, why: '“While it is true that …” accepts part of the author’s view first.' },
              { text: 'the authors have overlooked many common problems that international students may experience.', answer: 2, why: '“have overlooked” means they missed something important. This is the writer’s criticism.' }
            ] },
            { type: 'do', n: 4, who: 'alone', text: 'Here is the language for Tool 3, step by step.' },
            { type: 'language', title: 'Tool 3 · Language for evaluating', groups: [
              { label: '1 · Report the view', phrases: ['Author (year) asserts that …', 'Author (year) argues that …'] },
              { label: '2 · Accept the good part', phrases: ['While it is true that …,', 'Of course, …', 'Although …,'] },
              { label: '3 · Show the weakness', phrases: ['…, the author has overlooked …', 'However, these claims disregard …', 'However, this approach has too many problems to be …'] }
            ] },
            { type: 'do', n: 5, who: 'alone', text: 'Build an evaluation of Jones (2024). Choose the best phrase for each gap.' },
            { type: 'cloze', id: 'rf5-cl', title: 'Evaluate Jones (2024)', hint: 'Follow the see-saw: view → accept → weakness.',
              options: [['believes', 'found', 'disregards'], ['While it is true that', 'For instance', 'According to'], ['has overlooked', 'has found', 'claims'], ['However', 'Of course', 'Such as']],
              text: 'Jones (2024) {{1}} that international students should study in a rural location to experience more authentic Australian life. {{2}} rural towns can offer a quieter and cheaper lifestyle, the author {{3}} the fact that most universities, part-time jobs and support services are in cities. {{4}}, this approach has too many problems to be appealing for most students.',
              answers: ['believes', 'While it is true that', 'has overlooked', 'However'] },
            { type: 'do', n: 6, who: 'alone', text: 'Your turn. Evaluate Smith and Anderson (2024) in three steps. For the weakness, use the Jones or Thompson card. Turn on all three lights.' },
            { type: 'detect', id: 'rf5-w', title: 'Write with Tool 3',
              checks: [
                { label: '1 · The view + citation', color: '#3a58a0', any: ['/\\d{4}\\)/'] },
                { label: '2 · Accept', color: '#2f9a63', any: ['while it is true', 'of course', 'although', 'admittedly'] },
                { label: '3 · Weakness', color: '#c4562f', any: ['overlooked', 'disregard', 'too many problems', 'fails to'] }
              ],
              avoid: [{ label: '“I think” is not academic', any: ['i think', 'in my opinion', 'i believe', 'i feel'] }],
              items: [
                { rows: 4, placeholder: 'Smith and Anderson (2024) assert that …',
                  model: 'Smith and Anderson <b>(2024) assert that</b> Sydney is an ideal study location because it is safe and has a desirable climate. <b>While it is true that</b> the city has many attractions, the authors <b>have overlooked</b> the high cost of living. For instance, Thompson (2023) found that many international students cannot find accommodation within their budget.' }
              ] }
          ]
        },
        {
          id: 'rf5x', short: 'Extension', minutes: 4, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v5x.svg',
          title: 'Extension · The see-saw on a new topic',
          goal: 'If you finish early: find the same three steps in a paragraph about health.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Only if you finish early. Sort the five parts of this paragraph. Find the see-saw: view, accept, weakness.' },
            { type: 'sort', id: 'rf5x-sort', title: 'Cameron (2006) and “going back in time”', hint: 'Five parts of one paragraph, in order.', buckets: [
              { label: 'Point of view', letter: 'POV' }, { label: 'Positive evaluation', letter: '+' }, { label: 'Negative evaluation', letter: '–' }
            ], items: [
              { text: 'Cameron (2006) maintains that we could probably become far healthier by the simple expedient of ‘going back in time’ in terms of some of our daily activity. We could use a bicycle, walk, or run rather than use a car, bus, or train.', answer: 0 },
              { text: 'Of course, we could all do more domestic tasks by hand rather than using electrically operated gadgets.', answer: 1, why: '“Of course” accepts the idea.' },
              { text: 'However, this approach has too many problems to be appealing.', answer: 2 },
              { text: 'After the luxury of labour-saving devices it is just too tedious to go back to the old ways.', answer: 2 },
              { text: 'Also, this is not the most efficient way to build up and maintain a reasonable level of physical fitness. We actually only need to plan three or four exercise sessions a week in order to become fit.', answer: 2 }
            ] }
          ]
        },
        {
          id: 'rf6', short: 'Tool 4', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-v6.svg',
          title: 'Tool 4 · Working with different voices',
          goal: 'Answer “Whose idea is this?” and show your opinion without “I think”.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Two students wrote the same idea. Read both extracts, then answer the two questions.' },
            { type: 'model', title: 'Two extracts. Same idea.', rows: [
              ['Extract A', 'Sydney is a popular destination for international students. I think that it has many benefits for young people which make it easier for them to focus on their studies. I read an article that was written by Smith and Anderson in 2024 that said the same thing because Sydney’s safety and climate make it an ideal study location.'],
              ['Extract B', 'Sydney is a popular destination for international students. It has many benefits for young people which make it easier for them to focus on their studies. Smith and Anderson (2024) claim that Sydney’s safety and climate make it an ideal study location.']
            ] },
            { type: 'quiz', id: 'rf6-q', items: [
              { q: 'Do the two extracts have the same meaning?', options: ['Yes', 'No'], answer: 'Yes' },
              { q: 'Which extract is more appropriate for academic writing?', options: ['Extract A', 'Extract B'], answer: 'Extract B', why: 'B shows the writer’s opinion without saying “I think”, avoids “I read an article that …”, and has a correct APA in-text citation: Smith and Anderson (2024).' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'See how Extract A became academic. Tap “What changed?” for each one.' },
            { type: 'pairs', items: [
              { from: 'Sydney is a popular destination. [[I think that]] it has many benefits for young people.', to: 'Sydney is a popular destination. It has many benefits for young people.', tag: 'Delete “I think”.', note: 'A sentence with no citation is already your voice. Your reader knows it is your idea.' },
              { from: '[[I read an article that was written by Smith and Anderson in 2024 that said]] Sydney’s safety and climate make it an ideal study location.', to: '[[Smith and Anderson (2024) claim that]] Sydney’s safety and climate make it an ideal study location.', tag: 'The story of your reading became a citation.', note: 'Author + (year) + reporting verb + that.' },
              { from: '[[In my opinion, Jones is wrong.]]', to: '[[However, Jones (2024) has overlooked]] the many free activities that Sydney offers.', tag: 'Your opinion became an evaluation.', note: 'You show your opinion in the way you judge a source.' }
            ] },
            { type: 'sticky', color: 'pink', title: 'Where is MY voice?', text: '<p>✓ sentences with <b>no citation</b>: your claim, your examples, your explanation</p><p>✓ your <b>evaluation</b> of a source: <i>However, these claims disregard …</i></p><p>✗ “I think” · “In my opinion” · “I read an article”</p>' },
            { type: 'do', n: 3, who: 'pair', text: 'Here is one paragraph with four voices. Tap the letter at the end of each sentence. Whose voice is it, and which phrase shows it?' },
            { type: 'hotspot', src: 'dec10/assets/week1/voices-map.svg', size: 'wide', alt: 'One paragraph, four voices: two sentences by the writer, then Smith and Anderson (2024) claim that, However Jones (2024) asserts that, and For instance research from Thompson (2023) found that.', caption: 'The paragraph, voice by voice.', spots: [{ x: 96, y: 22.6, title: 'The writer’s voice: the claim', text: 'No citation and no “I think”. The writer states the main idea as a fact. This is YOUR voice: the sentence the whole paragraph supports.', label: 'W', color: '#7a4a8c' }, { x: 96, y: 35.3, title: 'The writer’s voice: the explanation', text: 'Still the writer: a reason for the claim. There is no “In my opinion”. Academic writers show their opinion by what they choose to say.', label: 'W', color: '#7a4a8c' }, { x: 96, y: 48.1, title: 'Smith and Anderson (2024): support', text: '<b>claim that</b> brings in a source that AGREES with the writer. “Claim” keeps a little distance: the writer reports the view without fully committing to it.', label: 'S', color: '#2f7d6b' }, { x: 96, y: 59.6, title: 'Jones (2024): a different view', text: '<b>However, … asserts that</b> brings in a source that DISAGREES. “However” signals the contrast. “Asserts” shows Jones states this strongly.', label: 'J', color: '#b0512a' }, { x: 96, y: 72.3, title: 'Thompson (2023): evidence', text: '<b>For instance, research from … found that</b> gives evidence for Jones’s view. “Found” is a neutral verb for research results.', label: 'T', color: '#3a58a0' }] },
            { type: 'do', n: 4, who: 'pair', text: 'Match each idea with its voice.' },
            { type: 'match', id: 'rf6-m', title: 'Whose voice is it?', hint: 'Use the paragraph above.',
              left: ['The high cost of living makes it difficult for international students.', 'Many students can’t find accommodation within their budget.', 'Sydney is safe and has a good climate.', 'Sydney has many benefits for students.'],
              right: ['Jones (2024) — “However, X asserts that …”', 'Thompson (2023) — “research from X found that …”', 'Smith and Anderson (2024) — “… claim that …”', 'The writer — “It has many benefits … which …”'] },
            { type: 'do', n: 5, who: 'alone', text: 'Your turn. Rewrite each sentence in an academic voice. Any red light must go off.' },
            { type: 'detect', id: 'rf6-w', title: 'Make it academic', label: 'Voice fixer',
              checks: [
                { label: 'No “I” or “my”', color: '#7a4a8c', any: ['/^(?![\\s\\S]*\\b(i|my|me)\\b)[\\s\\S]{15,}$/'] },
                { label: 'Citation when you use a source', color: '#3a58a0', any: ['/\\d{4}\\)/'] }
              ],
              avoid: [{ label: '“I think” / “In my opinion”', any: ['i think', 'in my opinion', 'i believe', 'i feel'] }, { label: '“I read an article…”', any: ['i read', 'an article', 'said that'] }],
              items: [
                { task: 'I think Sydney is a very expensive city for students.', rows: 2, model: 'Sydney is an expensive city for many international students.' },
                { task: 'I read an article by Jones in 2024 that said students should study in a rural location.', rows: 2, model: 'Jones (2024) believes that international students should study in a rural location.' },
                { task: 'In my opinion, the survey by Smith and Anderson is not complete because it forgets about money.', rows: 2, model: 'However, Smith and Anderson (2024) have overlooked the high cost of living in Sydney.' }
              ] }
          ]
        },
        {
          id: 'rf7', short: 'All four', minutes: 12, grouping: 'Pair → Class',
          art: 'dec10/assets/week1/v/v-d10w1d4-v7.svg',
          title: 'All four tools: Sydney or Melbourne?',
          goal: 'See all four tools working together in one paragraph.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'A student is planning a paragraph: is Sydney a better city to live in than Melbourne? Put the plan in a logical order.' },
            { type: 'order', id: 'rf7-order', title: 'Order the plan', items: [
              'Sydney is a better city to live in than Melbourne.',
              'Examples of why Sydney is a good city to live in',
              'Evidence which shows that Sydney is better than Melbourne',
              'Negative evaluation of the evidence that Sydney is better than Melbourne',
              'Contrasting evidence that disagrees with the view that Sydney is better than Melbourne'
            ], ends: ['First', 'Last'], why: 'Claim → examples (Tool 1) → evidence (Tool 2) → negative evaluation (Tool 3) → contrasting evidence (Tool 4).' },
            { type: 'do', n: 2, who: 'alone', text: 'Complete the paragraph with the nine phrases. Before you open a gap, say which tool it needs.' },
            { type: 'cloze', id: 'rf7-cl', title: 'Complete the paragraph', hint: 'Say your own phrase first, then open the gap.', options: ['argues that', 'However', 'According to', 'these claims disregard', 'For instance', 'state that', 'In contrast', 'such as', 'and furthermore'],
              text: 'Many people believe that Sydney’s climate makes it a better city to live in than Melbourne. {{1}}, Sydney has got a comfortable subtropical climate and some of Australia’s most beautiful beaches, {{2}} Bondi Beach and Coogee. {{3}}, Smith and Anderson (2024) {{4}} Melbourne has an average of 140 rainy days a year, {{5}} Schwartz (2022) {{6}} Melbourne’s beaches are polluted and have poor conditions for surfers. {{7}}, {{8}} the benefits of a cooler climate and the fact that beaches are a low priority for many people. {{9}} Phelps (2023), Melbourne’s climate appeals to people who prefer cooler weather, and Melbourne provides more cultural activities as an alternative to beach life.',
              answers: ['For instance', 'such as', 'In contrast', 'state that', 'and furthermore', 'argues that', 'However', 'these claims disregard', 'According to'] },
            { type: 'do', n: 3, who: 'pair', text: 'Which sentences are the writer’s own voice, and which belong to a source?' },
            { type: 'sort', id: 'rf7-sort', title: 'Whose voice is it?', hint: 'The six sentences of the paragraph, in order.', buckets: [
              { label: 'The writer’s voice', letter: 'W' }, { label: 'A source’s voice', letter: 'S' }
            ], items: [
              { text: 'Many people believe that Sydney’s climate makes it a better city to live in than Melbourne.', answer: 0 },
              { text: 'For instance, Sydney has got a comfortable subtropical climate and some of Australia’s most beautiful beaches, such as Bondi Beach and Coogee.', answer: 0, why: 'No citation: these are the writer’s examples.' },
              { text: 'In contrast, Smith and Anderson (2024) state that Melbourne has an average of 140 rainy days a year,', answer: 1 },
              { text: 'and furthermore Schwartz (2022) argues that Melbourne’s beaches are polluted and have poor conditions for surfers.', answer: 1 },
              { text: 'However, these claims disregard the benefits of a cooler climate and the fact that beaches are a low priority for many people.', answer: 0, why: 'The writer evaluates the sources. This is where the writer’s argument is.' },
              { text: 'According to Phelps (2023), Melbourne’s climate appeals to people who prefer cooler weather, and Melbourne provides more cultural activities as an alternative to beach life.', answer: 1 }
            ] },
            { type: 'tip', text: '<b>claims</b> is not the same as <b>found</b>. “Smith (2024) claims that …” tells your reader you are not sure you agree. Choose the verb on purpose.' }
          ]
        },
        {
          id: 'rf8', short: 'Mission', minutes: 10, grouping: 'Alone → Pair',
          title: 'Mission: write for the Student Guide',
          goal: 'Use all four tools in one paragraph.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'The International Student Guide asks: “Is Sydney a good city for international students?” Choose your answer.' },
            { type: 'cards', pick: 'rf8-side', title: 'My position', items: [
              { label: 'Yes', text: 'Sydney is a good city for international students.' },
              { label: 'Yes, but…', text: 'Sydney has many benefits, but it is expensive for students.' },
              { label: 'Not for everyone', text: 'Sydney is not the best choice for every international student.' }
            ] },
            { type: 'do', n: 2, who: 'alone', text: 'Plan with the research desk. Choose one source that agrees with you and one that disagrees.' },
            { type: 'figure', src: 'dec10/assets/week1/research-desk.svg', size: 'wide', alt: 'Your five source cards: Smith and Anderson 2024, Jones 2024, Thompson 2023, Schwartz 2022 and Phelps 2023.', caption: 'Your research desk.' },
            { type: 'do', n: 3, who: 'alone', text: 'Write your paragraph in 5–7 sentences. Try to turn on all four lights.' },
            { type: 'detect', id: 'rf8-w', title: 'My paragraph for the Student Guide',
              checks: [
                { label: 'Tool 1 · Support', color: '#2f9a63', any: ['for instance', 'for example', 'such as'] },
                { label: 'Tool 2 · Research', color: '#3a58a0', any: ['found that', 'according to', 'argues that', 'asserts that', 'claims that', 'believes that', 'states that', 'shows that'] },
                { label: 'Tool 3 · Evaluate', color: '#c4562f', any: ['while it is true', 'of course', 'overlooked', 'disregard', 'too many problems'] },
                { label: 'Tool 4 · A different voice', color: '#7a4a8c', any: ['however', 'in contrast', 'whereas'] }
              ],
              avoid: [{ label: '“I think” is not academic', any: ['i think', 'in my opinion', 'i believe', 'i feel'] }, { label: 'A personal story is not support', any: ['my friend', 'my cousin', 'my family'] }],
              items: [
                { rows: 9, placeholder: 'Sydney is …',
                  model: 'Sydney is a popular destination for international students. The city has many features which make it a desirable place to study. <b>For instance,</b> it is safe and has beaches <b>such as</b> Bondi and Coogee. Smith and Anderson <b>(2024) found that</b> Sydney was ranked within the top 5% of ideal locations to seek an education. <b>However,</b> Jones <b>(2024) asserts that</b> the high cost of living makes it difficult for international students to manage, and Thompson <b>(2023) found that</b> many students cannot find accommodation within their budget. <b>While it is true that</b> Sydney is expensive, <b>these claims disregard</b> the many free activities that the city offers.' }
              ] },
            { type: 'do', n: 4, who: 'pair', text: 'Swap devices with a partner. Read their paragraph and tick what you find. Then tell them one thing to change.' },
            { type: 'checklist', id: 'rf8-peer', title: 'Peer check', meter: ['found', 'All four tools!'], items: [
              'The first sentence is a clear claim.',
              'There is an example or a detail (Tool 1).',
              'At least one source has a correct citation, e.g. Jones (2024) (Tool 2).',
              'There is a positive AND a negative evaluation (Tool 3).',
              'There is no “I think” or “In my opinion” (Tool 4).'
            ] }
          ]
        },
        {
          id: 'rf9', short: 'Reflect', minutes: 4, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-v8.svg',
          title: 'Reflection',
          goal: 'Be honest about the hard part.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Move the slider. Be honest.' },
            { type: 'scale', id: 'rf9-scale', title: 'How do you feel?', statement: 'I feel comfortable evaluating academic sources and confident to give a negative evaluation.', ends: ['Not at all', 'Very confident'], mid: 'A little' },
            { type: 'do', n: 2, who: 'group', text: 'Discuss with your group.' },
            { type: 'talk', title: 'Discuss', prompts: [
              'Why might it feel uncomfortable to criticise a published author?',
              'Which phrase from today makes a negative evaluation sound polite and academic?'
            ] },
            { type: 'do', n: 3, who: 'alone', text: 'Exit ticket: write one phrase for each tool from memory.' },
            { type: 'fields', fields: [
              { id: 'rf9-t1', label: 'Tool 1 · Support', rows: 1, placeholder: 'For instance, …' },
              { id: 'rf9-t2', label: 'Tool 2 · Previous research', rows: 1, placeholder: '' },
              { id: 'rf9-t3', label: 'Tool 3 · Evaluating', rows: 1, placeholder: '' },
              { id: 'rf9-t4', label: 'Tool 4 · Voices', rows: 1, placeholder: '' }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 15A · Responding-to-feedback video ───────────────────────── */
    {
      id: 'video', number: '02', code: '15A', minutes: 60,
      tone: 'teal', art: 'dec10/assets/week1/s-video.svg',
      title: 'Responding-to-feedback video',
      subtitle: 'Your Seminar Portfolio, step by step',
      outcome: 'You understand the Portfolio and the responding-to-feedback video, and your group has started planning it.',
      activities: [
        {
          id: 'f1', short: 'Timeline', minutes: 8, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-f1.svg',
          title: 'Before, on the day, after: who does what?',
          goal: 'See how the Seminar and the Portfolio fit together.',
          blocks: [
            { type: 'hotspot', src: 'dec10/assets/week1/portfolio-flow.svg', spots: [{ x: 42.7, y: 33, title: "Presenting group · the week before", text: "Give your Opening Remarks (5–7 min). Then write <b>Portfolio Submission 1</b>: a summary of, and reflection on, your teacher’s verbal feedback.", label: "1", color: "#3a58a0" }, { x: 42.7, y: 67, title: "Audience · the week before", text: "Listen to the Opening Remarks. In your seminar group, discuss your reactions and post ONE group post with reactions and 1–2 questions on the Discussion Board — in class.", label: "2", color: "#3a58a0" }, { x: 69, y: 33, title: "Presenting group · the seminar day", text: "Deliver your seminar (10–12 min) and run the discussion. Your teacher gives verbal feedback. Later: <b>Submission 2</b>, a summary of and reflection on the teacher’s and peers’ feedback.", label: "3", color: "#2b776e" }, { x: 69, y: 67, title: "Audience · the seminar day", text: "Take part in the discussion. Then, as a group, prepare feedback using the Academic Success Toolkit and the feedback tool, choose a mode (audio, video or text), and upload it to the presenting group’s Portfolio.", label: "4", color: "#2b776e" }, { x: 95.2, y: 33, title: "Presenting group · after", text: "<b>Submission 3 — the video.</b> One 8-minute video per group: 4 minutes on feedback literacy and 4 minutes on one other AST skill, all members together. This is the assessed part (10% of your speaking score).", label: "5", color: "#b0512a" }, { x: 95.2, y: 67, title: "Audience · after", text: "Your <b>Additional Portfolio Submission</b>: the peer feedback your group gave. You do this three times during the course, once for each other group.", label: "6", color: "#b0512a" }], size: 'wide', alt: 'The Seminar + Portfolio timeline. The week before: the seminar group gives Opening Remarks and submits Portfolio Submission 1; the rest of the class posts reactions and questions to the Discussion Board. The day of the seminar: the group delivers the seminar; the rest of the class takes part, then uploads peer feedback to the group’s Portfolio. After the seminar: the group submits Portfolio Submissions 2 and 3 — 3 is the video.', caption: 'Seminar + Portfolio: three stages.', credit: 'Full task description and rubric: Assessments (side panel) and Canvas.' },
            { type: 'sort', id: 'f1-sort', title: 'Presenting group or audience group?', hint: 'Every group does both jobs during the course: one week you present, the other weeks you are the audience.', buckets: [
              { label: 'Presenting (seminar) group', letter: 'P' }, { label: 'Audience (rest of the class)', letter: 'A' }
            ], items: [
              { text: 'Deliver a 5–7-minute opening remarks presentation.', answer: 0 },
              { text: 'Post reactions and follow-up questions to the Discussion Board.', answer: 1 },
              { text: 'Choose a focus for the seminar from the Discussion Board comments.', answer: 0 },
              { text: 'Upload feedback (video, audio or text) to the other group’s Portfolio.', answer: 1 },
              { text: 'Write a summary of, and reflection on, the teacher’s feedback (Submission 1).', answer: 0 },
              { text: 'Record a video response to the teacher’s and classmates’ feedback (Submission 3).', answer: 0 },
              { text: 'Submit an Additional Portfolio Submission: peer feedback.', answer: 1 }
            ] }
          ]
        },
        {
          id: 'f2', short: 'Portfolio', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-f2.svg',
          title: 'Six Portfolio submissions',
          goal: 'Know what goes in your Portfolio — and which one is marked.',
          blocks: [
            { type: 'tabs', title: 'Your six submissions', tabs: [
              { label: 'As the presenting group', blocks: [
                { type: 'cards', numbered: true, items: [
                  { label: 'After Opening Remarks', text: 'A written summary of, and reflection on, your teacher’s verbal feedback.' },
                  { label: 'After the Seminar', text: 'A written summary of, and reflection on, your teacher’s and peers’ feedback.' },
                  { label: 'The video · assessed', text: 'A video response to (and reflection on) your teacher’s and classmates’ feedback.' }
                ] }
              ] },
              { label: 'As an audience group', blocks: [
                { type: 'cards', numbered: true, items: [
                  { label: 'Peer feedback 1', text: 'Your group agrees on feedback and chooses a mode: audio, video or written text.' },
                  { label: 'Peer feedback 2', text: 'The same, for another group.' },
                  { label: 'Peer feedback 3', text: 'The same, for another group.' }
                ] }
              ] }
            ] },
            { type: 'checklist', id: 'f2-eff', title: 'Your peer feedback must be effective. Tick the ones you remember from yesterday.', meter: ['remembered', 'You are feedback literate!'], items: [
              'addresses the assessment criteria (rubric)', 'is specific, not general', 'is clear', 'is useful and actionable', 'is timely', 'advises how to improve (feed forward)', 'is sensitive and encouraging', 'is not a criticism', 'uses appropriate language'
            ] }
          ]
        },
        {
          id: 'f3', short: 'Video spec', minutes: 8, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-f3.svg',
          title: 'The video: rules you cannot break',
          goal: 'Catch the traps before your group records.',
          blocks: [
            { type: 'quiz', id: 'f3-q', title: 'True or false?', items: [
              { q: 'Each person in the group records and submits their own video.', options: ['True', 'False'], answer: 'False', why: 'ONE video per group, submitted by ONE person.' },
              { q: 'The video is about 8 minutes long.', options: ['True', 'False'], answer: 'True' },
              { q: 'Your best speaker can do most of the talking.', options: ['True', 'False'], answer: 'False', why: 'ALL group members must make equal contributions.' },
              { q: 'Group members can record their parts separately and join the clips.', options: ['True', 'False'], answer: 'False', why: 'ALL group members must appear together.' },
              { q: 'You can record in Zoom, on your own device or in Canvas Studio.', options: ['True', 'False'], answer: 'True', why: 'Your teacher will confirm the options for your class.' },
              { q: 'The video only needs to reflect on your feedback.', options: ['True', 'False'], answer: 'False', why: 'It must include BOTH a reflection on your feedback AND references to the Academic Success Toolkit (AST).' }
            ] },
            { type: 'steps', title: 'Before you record', items: [
              { who: 'group', text: 'Watch, listen to or read your <b>peers’ feedback</b>. Reflect on it and discuss it.' },
              { who: 'group', text: 'Reflect on your <b>teacher’s feedback</b> on your Opening Remarks and your Seminar. Discuss it.' },
              { who: 'group', text: 'Look at the <b>AST framework</b> and decide how you will answer the questions (next activity).' }
            ] }
          ]
        },
        {
          id: 'f4', short: 'AST parts', minutes: 18, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-f4.svg',
          title: 'Two parts, four minutes each',
          goal: 'Choose how you will do each part of your video.',
          blocks: [
            { type: 'hotspot', src: 'dec10/assets/week1/video-parts.svg', spots: [{ x: 27.5, y: 41, title: "Part 1 · Feedback literacy (4 min) — everyone must do this", text: "Reflect on the teacher’s feedback (Opening Remarks and Seminar) and the peer feedback. You choose the format: an interview, acting out the feedback, or a discussion. Say what you understood, what you decided, and what you will do next time.", label: "1", color: "#a3416a" }, { x: 72.5, y: 41, title: "Part 2 · ONE other skill (4 min) — a panel discussion", text: "All group members together. Choose one skill: criticality, self-regulation and monitoring, group work skills, research skills, or digital literacy and AI. Answer at least one guiding question from each of the three categories, and say which skill was most challenging for you.", label: "2", color: "#2d8a9a" }], size: 'wide', alt: 'The 8-minute video in two parts. Part 1, 4 minutes: Feedback literacy — everyone must do this; you choose how, for example an interview, acting or a discussion. Part 2, 4 minutes: a panel discussion with all group members about ONE other skill — criticality, self-regulation and monitoring, group work skills, research skills, or digital literacy and AI.', caption: 'Your 8-minute video.' },
            { type: 'cards', pick: 'f4-format', title: 'Part 1 · Feedback literacy (must). How will your group do it?', items: [
              { label: 'Interview', text: 'One member interviews the others about the feedback.', icon: 'chat' },
              { label: 'Acting', text: 'Act out receiving the feedback and deciding what to do.', icon: 'model' },
              { label: 'Discussion', text: 'A natural group discussion of the feedback.', icon: 'list' }
            ] },
            { type: 'cards', pick: 'f4-skill', title: 'Part 2 · Panel discussion. Which ONE other skill?', items: [
              { label: 'Criticality', text: 'question, compare, decide' },
              { label: 'Self-regulation and monitoring', text: 'goals, time, progress' },
              { label: 'Group work skills', text: 'fair work, clear talk' },
              { label: 'Research skills', text: 'credible sources' },
              { label: 'Digital literacy and AI', text: 'use tools honestly' }
            ] },
            { type: 'key', title: 'The guiding questions', points: [
              'Your teacher will show you the PDF <b>AST guiding questions</b> (W1 D4 15B).',
              'For your Part 2 skill, answer at least ONE question from EACH category: <b>Appreciating feedback</b> · <b>Making judgements</b> · <b>Taking action</b>.',
              'In the panel, each member should also say which skill was <b>the most challenging</b> for them, and why.'
            ] }
          ]
        },
        {
          id: 'f5', short: 'Check', minutes: 12, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-f5.svg',
          title: 'Do you really understand the task?',
          goal: 'Answer the five questions every group should be able to answer.',
          blocks: [
            { type: 'quiz', id: 'f5-q', items: [
              { q: 'What is the overall purpose of the Seminar + Portfolio task?', options: ['To test your grammar in a formal presentation', 'To practise researching, preparing and delivering a presentation, and to give and receive feedback', 'To write a research report in a group'], answer: 'To practise researching, preparing and delivering a presentation, and to give and receive feedback' },
              { q: 'What are its three main components?', options: ['Reading · Writing · Speaking', 'Before the seminar · The seminar · After the seminar', 'Research · Slides · Questions'], answer: 'Before the seminar · The seminar · After the seminar', why: 'Before: Opening Remarks to preview the presentation. The seminar: the presentation. After: Portfolio submissions.' },
              { q: 'Who gives you feedback, and how?', options: ['Only the teacher, in writing', 'The teacher (verbal, in class) and your peers (video, audio or written, uploaded to your Portfolio)', 'Only your peers, on the Discussion Board'], answer: 'The teacher (verbal, in class) and your peers (video, audio or written, uploaded to your Portfolio)' },
              { q: 'Where do you find the feedback criteria?', options: ['In the marking rubric (Assessments page / Canvas)', 'Your teacher keeps them secret', 'In the Student Booklet reading section'], answer: 'In the marking rubric (Assessments page / Canvas)' }
            ] },
            { type: 'fields', fields: [
              { id: 'f5-plan', label: 'Our video plan so far: Part 1 format, Part 2 skill, who says what', rows: 3, placeholder: 'Part 1: interview — [Name] asks … Part 2: research skills — …' }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 16A · Seminar check-in ───────────────────────── */
    {
      id: 'checkin', number: '03', code: '16A', minutes: 15,
      tone: 'clay', art: 'dec10/assets/week1/s-checkin.svg',
      title: 'Seminar: opening remarks check-in',
      subtitle: 'Group 1 goes first — is everyone ready?',
      outcome: 'You know what happens at next week’s Opening Remarks, and Group 1 has a clear checklist.',
      activities: [
        {
          id: 'c1', short: 'Next week', minutes: 5, grouping: 'Class',
          art: 'dec10/assets/week1/v/v-d10w1d4-c1.svg',
          title: 'Next week: Group 1’s Opening Remarks',
          goal: 'Know what Group 1 presents — and what everyone else does.',
          blocks: [
            { type: 'model', title: 'Group 1’s question', text: 'What is the impact of the digital carbon footprint on overall carbon emissions in [your chosen country], and what strategies can be deployed to reduce it?' },
            { type: 'sort', id: 'c1-sort', title: 'Group 1 or the rest of the class?', buckets: [
              { label: 'Group 1', letter: 'G1' }, { label: 'The rest of the class', letter: 'All' }
            ], items: [
              { text: 'Give a 5–7-minute presentation with PowerPoint slides.', answer: 0 },
              { text: 'Introduce the country and say why you chose it.', answer: 0 },
              { text: 'Explain the causes and effects of the sustainability problem.', answer: 0 },
              { text: 'Take notes on the teacher’s feedback and ask about anything unclear.', answer: 0 },
              { text: 'Discuss your reactions to the presentation content with your seminar group.', answer: 1 },
              { text: 'Prepare one or two questions about gaps in your knowledge.', answer: 1 },
              { text: 'Post ONE group post with reactions and questions to the Discussion Board — in class.', answer: 1 }
            ] },
            { type: 'tip', text: 'Opening Remarks are about the <b>problem</b> only: causes and effects. Solutions come later, in the Seminar.' }
          ]
        },
        {
          id: 'c2', short: 'Checklist', minutes: 5, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d4-c2.svg',
          title: 'Group 1’s checklist',
          goal: 'Group 1: tick it off before next week.',
          blocks: [
            { type: 'checklist', id: 'c2-g1', title: 'Group 1 — before next week', meter: ['done', 'Ready to present!'], items: [
              'We have researched our topic in our chosen country.',
              'We have met to prepare the 5–7-minute presentation.',
              'The workload is evenly shared.',
              'Our PowerPoint is finished and ready to share (we know how our teacher wants it: email, link or USB).'
            ] },
            { type: 'key', title: 'Not in Group 1?', points: [
              'Nothing to prepare — just come ready to listen and respond.',
              'After the Opening Remarks, Group 1 uses your Discussion Board posts to plan two thought-provoking questions for their Seminar (Week 3).',
              'You will make one Additional Portfolio Submission: peer feedback 1.'
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 17A · AST: Research skills ───────────────────────── */
    {
      id: 'research', number: '04', code: '17A', minutes: 60,
      tone: 'green', art: 'dec10/assets/week1/s-research.svg',
      title: 'AST: Research skills',
      subtitle: 'Find it, test it, trust it',
      outcome: 'You can apply the CRAAP test, search with AND / OR / “…”, and find a reliable source through the University of Sydney Library.',
      activities: [
        {
          id: 'x1', short: 'Lead-in', minutes: 5, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x1.svg',
          title: 'What is research — really?',
          goal: 'Know where to look and what researching involves.',
          blocks: [
            { type: 'match', id: 'x1-m', title: 'Where would you find …?', left: ['cutting-edge research', 'background information', 'current news'], right: ['journal articles', 'books, textbooks and encyclopedias', 'newspapers and news websites'] },
            { type: 'sort', id: 'x1-sort', title: 'Is it part of good research?', buckets: [{ label: 'Good research', letter: '✓' }, { label: 'Not good research', letter: '✗' }], items: [
              { text: 'finding an answer to a question or solving a problem', answer: 0 },
              { text: 'searching for information', answer: 0 },
              { text: 'analysing and interpreting information', answer: 0 },
              { text: 'synthesising information', answer: 0 },
              { text: 'using information to support your argument', answer: 0 },
              { text: 'accepting the first web results', answer: 1 },
              { text: 'looking only for sources that agree with your thesis', answer: 1, why: 'Good research looks at other points of view too — you need them to evaluate (14A).' },
              { text: 'reading everything you can on the topic', answer: 1, why: 'Impossible, and not useful: you select what is relevant.' }
            ] }
          ]
        },
        {
          id: 'x2', short: '2-min hunt', minutes: 8, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x2.svg',
          title: 'The 2-minute source hunt',
          goal: 'Find something online — then ask how reliable it is.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Think of an example of environmental damage: e.g. the 2010 Deepwater Horizon oil spill, loss of polar ice due to global heating, or soil erosion in Australia or China.' },
            { type: 'do', n: 2, who: 'alone', text: 'You have <b>2 minutes</b>. Find one source online that looks useful.' },
            { type: 'fields', fields: [{ id: 'x2-src', label: 'My source (title + website)', rows: 1 }] },
            { type: 'do', n: 3, who: 'pair', text: 'Show your partner. How reliable is it? Do they agree?' },
            { type: 'fields', fields: [{ id: 'x2-rel', label: 'How reliable is it — and where could I find something more reliable?', rows: 2 }] }
          ],
          answers: { items: [['More reliable information', 'Recent research, or reports by governments and other respected organisations — found through the library databases.']] }
        },
        {
          id: 'x3', short: 'CRAAP', minutes: 12, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x3.svg',
          title: 'The CRAAP test',
          goal: 'Five questions that tell you if a source is good enough.',
          blocks: [
            { type: 'hotspot', src: 'dec10/assets/week1/craap.svg', hint: "Tap a letter for the questions to ask.", spots: [{ x: 12.5, y: 32.5, title: "Currency", text: "When was it published, updated or revised? Is it too old for this topic? (For climate data, five years is old. For a definition of the DTM, 1970 may be fine.)", label: "C", color: "#3a58a0" }, { x: 31.2, y: 32.5, title: "Relevance", text: "Is it about YOUR question? Is it an in-depth study or a quick summary? Who is it written for — the public, students, researchers? Is the level right for an academic assignment?", label: "R", color: "#2d8a9a" }, { x: 50.0, y: 32.5, title: "Authority", text: "Who wrote it, and who published it? Is the author an expert in this field? Can you check their credentials? A university, a government agency or a peer-reviewed journal counts; an anonymous blog does not.", label: "A", color: "#2f9a63" }, { x: 68.8, y: 32.5, title: "Accuracy", text: "Is there a reference list? Are the methods and data explained? Can you find the same facts in another reliable source?", label: "A", color: "#5f9a2a" }, { x: 87.5, y: 32.5, title: "Purpose", text: "Why does this page exist — to inform, to entertain, to teach, or to sell something? Is there a political, commercial or personal bias?", label: "P", color: "#d99a1e" }], size: 'wide', alt: 'The CRAAP test: five cards. Currency — when was it published? Relevance — is it on your topic, and at the right level? Authority — who wrote it, and are they an expert? Accuracy — are there references, methods and data? Purpose — is it to inform, or to sell an idea? Any bias?', caption: 'The CRAAP test.', credit: 'Source: University of Sydney Library. (n.d.). Evaluating search results.' },
            { type: 'flip', title: 'What do you ask?', hint: 'Say your question, then turn the card.', items: [
              { front: 'C · Currency', back: 'When was it published, updated or revised? Is it too old for this project?' },
              { front: 'R · Relevance', back: 'Is it on my topic? In-depth or a quick summary? Who is the audience? Basic or advanced?' },
              { front: 'A · Authority', back: 'Who wrote or published it? Is the author an expert? Can I check their credentials?' },
              { front: 'A · Accuracy', back: 'Is there a reference list? Are the methods and data explained? Can I check the claims elsewhere?' },
              { front: 'P · Purpose', back: 'Is it to inform, entertain, educate or sell? Any political, cultural, institutional or personal bias?' }
            ] },
            { type: 'listening', source: 'Portland University Library (2017)', title: 'The C.R.A.P. test in action', videoId: 'k6tEkQMBzxw', start: 0, clip: 'short video · 2:22', transcripts: [], mode: 'video' }
          ]
        },
        {
          id: 'x4', short: 'Judge', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x4.svg',
          title: 'CRAAP judge: five links',
          goal: 'Scan each page fast. Is it good enough for an academic assignment?',
          blocks: [
            { type: 'model', title: 'Open each link and scan for C, R, A, A, P', rows: [
              ['a', '<a href="https://www.eea.europa.eu/en/topics/in-depth/environmental-health-impacts" target="_blank" rel="noopener">Environmental health impacts · European Environment Agency</a>'],
              ['b', '<a href="https://www.theworldcounts.com/stories/environmental-degradation-facts" target="_blank" rel="noopener">Environmental Degradation Facts · theworldcounts.com</a>'],
              ['c', '<a href="https://www.geeksforgeeks.org/biology/causes-and-impact-of-environmental-degradation/" target="_blank" rel="noopener">Causes and Impact of Environmental Degradation · GeeksforGeeks</a>'],
              ['d', '<a href="https://www.sciencedirect.com/science/article/pii/S0277953602000552" target="_blank" rel="noopener">Causes and health consequences of environmental degradation and social injustice · ScienceDirect</a>'],
              ['e', '<a href="https://link.springer.com/article/10.1007/s11111-007-0048-3" target="_blank" rel="noopener">Human population as a dynamic factor in environmental degradation · Population and Environment (Springer)</a>']
            ], note: 'Spend about one minute on each page. You are scanning, not reading.' },
            { type: 'sort', id: 'x4-sort', title: 'Your verdict', buckets: [{ label: 'Use it', letter: '✓' }, { label: 'Don’t use it', letter: '✗' }], items: [
              { text: 'a · European Environment Agency', answer: 0, why: 'Authority: an official EU agency. Purpose: to inform.' },
              { text: 'b · theworldcounts.com', answer: 1, why: 'Authority and accuracy are hard to check: no clear expert author or full references.' },
              { text: 'c · GeeksforGeeks', answer: 1, why: 'A general study website for students — not an expert or academic source.' },
              { text: 'd · ScienceDirect journal article', answer: 0, why: 'Peer-reviewed research with references and methods.' },
              { text: 'e · Population and Environment (Springer)', answer: 0, why: 'A peer-reviewed academic journal.' }
            ] }
          ]
        },
        {
          id: 'x5', short: 'Keywords', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x5.svg',
          title: 'Search like a researcher',
          goal: 'Pick keywords, expand them, and combine them.',
          blocks: [
            { type: 'order', id: 'x5-order', title: 'Put the four search steps in order', items: ['Identify keywords', 'Expand your keywords', 'Run a search', 'Refine your search'], ends: ['First', 'Last'] },
            { type: 'spot', id: 'x5-spot', label: 'Keyword hunter', title: 'Step 1 · Find the three keywords', hint: 'Tap the three words or phrases you would type into a search.', paras: [
              '[[Explain]] the problem of [[*environmental degradation]]. [[Begin by defining]] environmental degradation. Identify and discuss [[*causes]] of the [[current situation]] of environmental degradation. Consider factors such as industrial activities, deforestation, and pollution. Explore one or two current or potential [[*consequences]] of environmental degradation and how it could impact ecosystems, human health, or the global climate.'
            ] },
            { type: 'model', title: 'Step 2 · Expand your keywords', rows: [
              ['environmental degradation', 'ecological damage'],
              ['causes', 'factors'],
              ['consequences', 'impacts']
            ] },
            { type: 'quiz', id: 'x5-q', title: 'Step 3 · Search operators', items: [
              { q: '“environmental degradation” AND causes — more results or fewer than “environmental degradation” alone?', options: ['More', 'Fewer'], answer: 'Fewer', why: 'AND connects keywords: every result must have both. It narrows the search.' },
              { q: 'consequences OR impacts — more results or fewer than consequences alone?', options: ['More', 'Fewer'], answer: 'More', why: 'OR includes synonyms: a result can have either word. It broadens the search.' },
              { q: 'Why put “environmental degradation” in quotation marks?', options: ['To find the exact phrase', 'To find only quotes from experts', 'To search in English only'], answer: 'To find the exact phrase' },
              { q: 'Too many results? Which do you do?', options: ['Add a keyword with AND', 'Add a synonym with OR'], answer: 'Add a keyword with AND' }
            ] },
            { type: 'fields', fields: [{ id: 'x5-string', label: 'Write your search', rows: 1, placeholder: '“environmental degradation” AND (causes OR factors)' }] }
          ]
        },
        {
          id: 'x6', short: 'Library', minutes: 15, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d4-x6.svg',
          title: 'Find two real sources',
          goal: 'One from the Library home page, one from a database. Both must pass CRAAP.',
          blocks: [
            { type: 'tabs', title: 'Two places to search', tabs: [
              { label: '1 · Library home page', blocks: [
                { type: 'steps', items: [
                  { who: 'alone', text: 'Go to <a href="https://www.library.sydney.edu.au/" target="_blank" rel="noopener">library.sydney.edu.au</a>. Type your AND search with two or three terms.' },
                  { who: 'alone', text: 'Too few results? Use just two terms, or add synonyms with OR.' },
                  { who: 'alone', text: 'Refine in the left-hand panel: date, and <b>Language → English</b> (CET courses need English sources).' }
                ] }
              ] },
              { label: '2 · A database', blocks: [
                { type: 'steps', items: [
                  { who: 'alone', text: 'On the Library page, click <b>Browse</b> → <a href="https://www.library.sydney.edu.au/browse" target="_blank" rel="noopener">databases by subject</a>. Try Science, or Arts and Social Sciences.' },
                  { who: 'alone', text: 'Open <b>Web of Science</b> (or the database your teacher chooses). Run your search and refine the date.' },
                  { who: 'alone', text: 'Browse by title. Click “see more” to read an abstract. Try the “You may also like …” link for key articles.' }
                ] }
              ] }
            ] },
            { type: 'fields', fields: [
              { id: 'x6-s1', label: 'Source 1 (Library home page): author, year, title', rows: 2 },
              { id: 'x6-s2', label: 'Source 2 (database): author, year, title', rows: 2 }
            ] },
            { type: 'checklist', id: 'x6-craap', title: 'Does your source pass CRAAP?', meter: ['passed', 'Use it!'], items: [
              'Currency: it is recent enough for this topic.',
              'Relevance: it helps answer the question.',
              'Authority: I know who wrote it and why they are an expert.',
              'Accuracy: it has references and explains its data.',
              'Purpose: it informs — it is not selling anything.'
            ] },
            { type: 'tip', text: 'Your Seminar group needs sources like these for Opening Remarks. Start a shared list today — it saves hours next week.' }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['rhetorical function', 'the job a sentence or phrase does in a text, e.g. giving an example or evaluating', 'Evaluating points of view is a rhetorical function.'],
    ['evidence', 'facts or research findings that support a claim', 'A recent survey is strong evidence.'],
    ['overlook', 'to miss or not notice something important', 'The authors have overlooked the cost of living.'],
    ['disregard', 'to ignore', 'These claims disregard the benefits of a cooler climate.'],
    ['assert', 'to state firmly that something is true', 'Jones (2024) asserts that rent is too high.'],
    ['voice', 'whose idea a sentence expresses: yours or a source’s', 'Keep your own voice clear in every paragraph.'],
    ['credible', 'able to be trusted', 'A peer-reviewed journal is a credible source.'],
    ['search operator', 'a word or symbol that controls a search, e.g. AND, OR, “ ”', 'Use OR to add synonyms.']
  ]
};
