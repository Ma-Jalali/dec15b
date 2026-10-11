/* DEC15 · Week 5, Day 1 — lesson content.
   Teacher’s Book: W5 D1 · 1A Academic writing skills workshop (240): Warmer (10) · Joint construction (80)
   · Deconstruction (60) · Language focus (30) · Compare the sample with your response (60).
   Texts: IWA Sample 5.1 (exact TB text) · Nicastro & Carillo (2021), About That (2024), Berti et al. (2021) — lessons/week3/sources.js
   · Gunders (2024) — lessons/week4/sources.js.
   v2 (teacher feedback): 18 tabs → 6. Related TB activities are merged into one tab; each TB heading is the title of the
   first block of its part ('Part 1 · …'). All block / field / table ids are unchanged (saved work).
   The joint-construction tab keeps the id 'w3' (not 'w2') because the shared “Write together” page is stored per activity id
   and the group essay was written on w3. Sample 5.1 has ONE gate (d1p, tab 3); the later copies of the paragraphs are open.
   Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js. */

window.DEC15_LESSON = {
  id: 'w5d1',
  week: 5, day: 1,
  title: 'Academic writing skills workshop',
  duration: 'About 4 hours',
  question: 'Should governments do more to solve the problem of food waste? Discuss your position with reference to the sources.',
  questionKind: 'Essay question',
  questionLabel: 'This week’s essay question',
  wordTarget: '450–600 words',
  image: 'assets/week5/hero-w5d1.svg',
  imageAlt: 'An essay page with the thesis highlighted, three pencils writing on the same page, and colourful sticky notes around it.',
  journey: 'Today is a writing workshop. First, your group writes one essay together and checks it with AI. Then you look closely at a good sample essay (Sample 5.1). You find the job of each sentence and the words that persuade. Last, you compare the sample with your essay and make your essay better.',
  finish: { title: 'Tuesday', text: 'LRW assessment' },

  sections: [
    /* ───────────────────────── 1A Academic writing skills workshop ───────────────────────── */
    {
      id: 'workshop', number: '01', code: '1A', minutes: 240,
      tone: 'clay', art: 'writing',
      title: 'Academic writing skills workshop',
      subtitle: 'Write together, take a sample apart, improve your essay',
      outcome: 'Build an argument step by step, show your position clearly and persuasively, and improve your own writing after you compare it with a sample.',
      activities: [
        /* ── ① Warmer ── */
        {
          id: 'w1', short: 'Warm-up', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Warmer: Know the rubric',
          goal: 'Match sentences from the rubric to the right section.',
          blocks: [
            { type: 'flip', title: 'Key words · the 5 sections of the writing rubric', hint: 'Guess what each section checks. Then tap the card to turn it over.', items: [
              { front: 'Argumentation', back: 'Your position and your reasons. Is your argument clear and logical?' },
              { front: 'Use of Sources', back: 'How you use the texts: paraphrase (= say it in your own words), synthesise (= join ideas from different texts) and cite.' },
              { front: 'Connection of Ideas', back: 'How your sentences and paragraphs link together. Linking words and a clear order.' },
              { front: 'Vocabulary', back: 'A good range of correct words, collocations (= words that go together) and hedging (= careful words like “may”).' },
              { front: 'Grammar', back: 'A good range of correct sentence structures.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'One student reads a <b>band descriptor</b> (= a rubric sentence for one score range).' },
              { who: 'group', text: 'The others guess the <b>section</b> (e.g. Use of Sources).' },
              { who: 'group', text: 'Then they guess the <b>score</b> (e.g. 76 or more).' },
              { who: 'group', text: 'Take turns. Then play the sorting game below.' }
            ]},
            { type: 'language', title: 'Say it', tabs: false, groups: [
              { label: 'Guess', phrases: ['I think it’s Use of Sources, because it talks about paraphrasing.', 'It sounds like a 66–70 score.'] },
              { label: 'Check', phrases: ['I agree.', 'I’m not sure. It mentions…, so maybe it’s…'] }
            ]},
            { type: 'sort', id: 'w1s', title: 'Game · Which section of the rubric is it?', buckets: [
              { label: 'Argumentation' }, { label: 'Use of Sources' }, { label: 'Connection of Ideas' }, { label: 'Vocabulary' }, { label: 'Grammar' }
            ], items: [
              { text: 'Effectively synthesise sources, demonstrating good proficiency in paraphrasing and accurate referencing <small>(76 or more)</small>', answer: 1, why: 'Use of Sources · 76 or more. Key words: synthesise, paraphrasing, referencing.' },
              { text: 'Develops mostly effective and logical arguments supported by relevant source material <small>(66–70)</small>', answer: 0, why: 'Argumentation · 66–70. Key word: arguments.' },
              { text: 'Generally good synthesis and successful paraphrasing of sources; some appropriate use of different voices <small>(66–70)</small>', answer: 1, why: 'Use of Sources · 66–70. Key words: synthesis, paraphrasing, voices.' },
              { text: 'Generally displays good connectivity; most structural and cohesive features are used effectively <small>(66–70)</small>', answer: 2, why: 'Connection of Ideas · 66–70. Key words: connectivity, cohesive.' },
              { text: 'Uses a good range of vocabulary with mostly accurate collocations; mostly suitable hedging <small>(66–70)</small>', answer: 3, why: 'Vocabulary · 66–70. Key words: collocations, hedging.' },
              { text: 'Uses a good range of grammatical structures with minor errors, meaning is mostly clear <small>(66–70)</small>', answer: 4, why: 'Grammar · 66–70. Key words: grammatical structures.' }
            ]},
            { type: 'tip', text: 'Nice work! Keep these 5 sections in mind. You will use them to check your group essay today.' },
            { type: 'teacher', ref: 'w5d1-t1' }
          ]
        },

        /* ── ② Joint construction (TB: plan recap · write a complete response · use the CET AI Agent) ── */
        {
          id: 'w3', short: 'Write together', minutes: 80, grouping: 'Groups of 3–4',
          title: 'Joint construction: Plan, write and check with AI',
          goal: 'Write one full essay with your group. Then get AI feedback on it.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Joint construction: Your plan (10 min)', items: [
              { who: 'group', text: 'Take out your plan from last Friday.' },
              { who: 'group', text: 'Read the essay question again.' },
              { who: 'group', text: 'Agree on your group’s position. Choose one card below.' }
            ]},
            { type: 'question' },
            { type: 'cards', title: 'What is your group’s position?', pick: 'w2-pos', items: [
              { label: 'a', text: 'Governments need to significantly increase their efforts.' },
              { label: 'b', text: 'All actors in the food system should be doing more.' },
              { label: 'c', text: 'Businesses and consumers need to do more, not governments.' },
              { label: 'd', text: 'Governments are already doing enough.' }
            ]},
            { type: 'fields', title: 'Our plan (short notes)', fields: [
              { id: 'w2-1', label: 'Our position (thesis) in one sentence', placeholder: 'Governments…', rows: 2 },
              { id: 'w2-2', label: 'Reason 1 + evidence (which sources?)', placeholder: 'Reason… · Nicastro & Carillo (2021)…', rows: 3 },
              { id: 'w2-3', label: 'Reason 2 + evidence (which sources?)', placeholder: 'Reason… · Berti et al. (2021), Gunders (2024)…', rows: 3 },
              { id: 'w2-4', label: 'One thing to remember from our last writing feedback', placeholder: 'Clearer topic sentences…', rows: 2 }
            ]},

            { type: 'steps', title: 'Part 2 · Joint construction: Write a complete response (55 min)', items: [
              { who: 'group', text: 'Press <b>Write together</b>. Your group writes on one shared page.' },
              { who: 'group', text: 'Write one paragraph at a time. Talk about your word choices.' },
              { who: 'group', text: 'Use your plan and the source buttons below.' },
              { who: 'group', text: 'Copy the finished essay into the boxes below. Then you can find it later.' },
              { who: 'group', text: 'Tick every point on the checklist before you finish.' }
            ]},
            { type: 'model', title: 'How to build each part', rows: [
              ['Introduction', 'Background → narrow the focus → thesis (your position) → preview of your two reasons'],
              ['Body paragraph', 'Topic sentence (one reason) → explain → evidence from a source → concluding sentence'],
              ['Conclusion', 'Say the thesis again in new words → sum up the reasons → final comment']
            ]},
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Thesis', phrases: ['Governments need to do considerably more to…', 'Although…, governments should…'] },
              { label: 'Body paragraphs', phrases: ['The first reason is that…', 'Another important reason is…', 'According to Gunders (2024), …', 'For example, …'] },
              { label: 'Conclusion', phrases: ['Overall, …', 'Without more government action, …'] }
            ]},
            { type: 'sources', ids: ['nicastro', 'aboutthat', 'berti', 'gunders'] },
            { type: 'fields', title: 'Our group essay', fields: [
              { id: 'w3-1', label: 'Introduction', placeholder: 'Background → narrow the focus → thesis → preview of reasons', rows: 6 },
              { id: 'w3-2', label: 'Body paragraph 1', placeholder: 'Topic sentence (reason 1) → support and evidence → concluding sentence', rows: 9 },
              { id: 'w3-3', label: 'Body paragraph 2', placeholder: 'Topic sentence (reason 2) → support and evidence → concluding sentence', rows: 9 },
              { id: 'w3-4', label: 'Conclusion', placeholder: 'Restate the thesis → summarise the reasons → final comment', rows: 5 }
            ]},
            { type: 'checklist', id: 'w3c', title: 'Check your essay', meter: ['ticked', 'Ready to check with the AI Agent!'], items: [
              'We used the feedback from our writing practice task.',
              'Each reason has evidence from the sources.',
              'Our position is clear from start to end.',
              'Our sentences link clearly to each other.',
              'Each paragraph has one main idea.',
              'We gave a reference (in-text citation) for every idea from a source.',
              'We paraphrased the sources (= used our own words) correctly.',
              'We joined ideas from different sources where we could (synthesis).'
            ]},
            { type: 'teacher', ref: 'w5d1-t2' },

            { type: 'steps', title: 'Part 3 · Joint construction: Use the CET AI Agent (15 min)', items: [
              { who: 'group', text: 'Each person takes <b>one paragraph</b> of your group essay.' },
              { who: 'alone', text: 'Open the CET AI Agent (link below). Follow its instructions.' },
              { who: 'alone', text: 'Paste in the question, the course texts and your paragraph.' },
              { who: 'alone', text: 'Read the feedback. Write the main points below.' }
            ]},
            { type: 'tip', text: '<a href="https://app.cogniti.ai/agents/67b3f3ddeb50a217bae1c202/chat?k=yOLe1ZKWVc5atMqKejnT7cbeqhlpWmn34q_P9SgeM8E" target="_blank" rel="noopener"><b>Open the CET AI Agent</b></a> in a new tab. To copy the course texts, use the source buttons in Part 2.' },
            { type: 'fields', title: 'AI feedback — keep it for later', fields: [
              { id: 'w4-1', label: 'Which paragraph did I check?', placeholder: 'Body paragraph 1', rows: 1 },
              { id: 'w4-2', label: 'What did the AI Agent say we did well?', placeholder: 'Clear topic sentence…', rows: 3 },
              { id: 'w4-3', label: 'What did it tell us to improve?', placeholder: 'More evaluative language…', rows: 3 }
            ]},
            { type: 'tip', text: 'Keep this feedback. You will use it at the end of today’s lesson (tab 6).' },
            { type: 'teacher', ref: 'w5d1-t3' }
          ]
        },

        /* ── ③ Deconstruction: Activity 1 + Activity 2 (paragraphs, introduction) ── */
        {
          id: 'd1', short: 'Sample 5.1', minutes: 18, grouping: 'Alone → pairs → class',
          title: 'Sample 5.1: Writer’s position and rhetorical function (paragraphs, introduction)',
          goal: 'Find the writer’s position. Then find the job of each paragraph and each sentence in the introduction.',
          blocks: [
            { type: 'tip', text: '<b>Key words</b> · <b>position / thesis</b> (= the writer’s main answer to the question) · <b>topic sentence</b> (= the first sentence of a paragraph; it gives the main idea) · <b>rhetorical function</b> (= the job of a sentence or paragraph).' },
            { type: 'steps', title: 'Part 1 · Activity 1 Writer’s position (5 min)', items: [
              { who: 'alone', text: 'Open the sample essay below. You have <b>2 minutes</b>.' },
              { who: 'alone', text: 'Read only the first paragraph, the first sentence of each paragraph and the last paragraph.' },
              { who: 'alone', text: 'Don’t read the details yet. Then answer the quick check.' }
            ]},
            { type: 'passage', id: 'd1p', gate: 'Write your group essay first (tab 2). Then open Sample 5.1 here. You only need to do this once: the other tabs show the paragraphs again.', title: 'IWA Sample 5.1 · 597 words', text: '¹A key factor in the issue of food insecurity is food wastage. ²Many businesses are working to minimize their waste and support consumers’ efforts through the application of new technologies. ³However, in contrast to action taken in the private sector, governments continue to lag far behind, failing to implement decisive and prompt measures to address the issue. ⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.<br><br>¹Government intervention, particularly in the consumption stage, is extremely important in preventing food waste. ²While consumers can take steps to minimise their household waste independently, this requires a proactive approach through conscious buying, eating, and disposal practices. ³Unfortunately, however, not enough consumers do this. ⁴In Europe, for instance, households are responsible for over 50% of all food waste, partly due to a lack of appreciation for the extensive resources required to produce food (Nicastro & Carillo, 2021). ⁵This is where there is a strong need for governments to step in and help change the wasteful attitudes towards food consumption through public awareness campaigns. ⁶Educating the public not only about the damaging impacts of food waste but also about the simple actions they can take to reduce their waste is crucial (Nicastro & Carillo, 2021). ⁷Gunders (2024) points out that new technologies, such as waste tracking apps, are also available to consumers and are effective but that progress to scale these solutions has been incredibly slow. ⁸She emphasises the need for greater government attention and investment to maximise the impact of these solutions and incentivise food businesses to innovate. ⁹Such an increase in government efforts to prevent waste would undoubtedly help drive consumer and business efforts.<br><br>¹When food waste cannot be prevented, then at least it could be more responsibly managed. ²That would require greater participation from government institutions. ³This is because they are primarily responsible for establishing waste legislation and financing initiatives that could encourage more efficient use of food resources. ⁴One solution that holds significant promise in reducing waste is the redistribution of excess food through food banks. ⁵For example, the Italian, community-based food bank, Magazaini Sociali, has successfully redistributed thousands of meals to local families in need (Berti et al., 2021). ⁶However, since food banks are usually managed by NGOs and rely on volunteer help and donations, they are often limited in their reach (Berti et al., 2021; About That, 2024). ⁷Greater monetary assistance from the government is essential to expand the scope and effectiveness of their operations (About That, 2024). ⁸Another area where governments could and should increase their efforts is policy. ⁹Regulation and tax incentives that encourage business participation in food donation programs could go a long way towards reducing the amount of food in landfill. ¹⁰As Gunters (2024) argues, although some countries already have laws to better track waste and reduce the amount going to landfills, all countries should be adopting similar measures. ¹¹This suggests that there is definite potential for governments to do more through such initiatives.<br><br>¹Overall, the issue of food waste demands greater government intervention. ²It is clear that robust government action in the form of investment, regulation and education is necessary to facilitate innovation and support solutions that are already making some progress towards preventing and managing food waste. ³Without the increased participation of governments, it will be extremely difficult to achieve sustainable development goals in relation to food security.' },
            { type: 'quiz', id: 'd1q', title: 'Quick check', items: [
              { q: 'What is the writer’s position?', options: ['a) Governments need to significantly increase their efforts.', 'b) All actors in the food system should participate equally.', 'c) Businesses and consumers need to do more, not governments.', 'd) Governments are already doing enough.'], answer: 'a) Governments need to significantly increase their efforts.', why: 'Introduction S4: “they are the ones that need to considerably scale up their involvement”. Conclusion S1: “the issue of food waste demands greater government intervention”.' }
            ]},
            { type: 'teacher', ref: 'w5d1-t4' },

            { type: 'key', title: 'Part 2 · Activity 2 Analysing rhetorical function: the paragraphs (5 min)', points: [
              'An argument essay tries to <b>persuade</b> the reader (= make the reader agree).',
              'To persuade, you need a <b>logical argument</b> and <b>evidence</b> from sources.',
              'Each paragraph — and each sentence — has a job (a <b>rhetorical function</b>).'
            ]},
            { type: 'sort', id: 'd2s', single: true, title: 'Game · Match each paragraph to its job', hint: 'Look at Sample 5.1 again. Don’t read the details. <b>Drag</b> each job into the right box — or <b>tap</b> a card, then tap a box.', buckets: [
              { label: 'Introduction' }, { label: 'Body paragraph 1' }, { label: 'Body paragraph 2' }, { label: 'Conclusion' }
            ], items: [
              { text: 'Gives the background of the topic and the writer’s position (thesis)', answer: 0 },
              { text: 'Gives the first reason for the position', answer: 1 },
              { text: 'Gives the second reason for the position', answer: 2 },
              { text: 'Says the position and reasons again + shows why the position is important', answer: 3 }
            ]},
            { type: 'teacher', ref: 'w5d1-t5' },

            { type: 'steps', title: 'Part 3 · Activity 2 Analysing rhetorical function: the introduction (8 min)', items: [
              { who: 'class', text: 'Read the introduction. Each sentence has a number (S1–S5).' },
              { who: 'class', text: 'Answer the guiding questions.' },
              { who: 'pair', text: 'Put the five jobs in order. Then write the job of each sentence in the table (short notes).' }
            ]},
            { type: 'passage', id: 'd3p', title: 'Sample 5.1 · Introduction', text: '¹A key factor in the issue of food insecurity is food wastage. ²Many businesses are working to minimize their waste and support consumers’ efforts through the application of new technologies. ³However, in contrast to action taken in the private sector, governments continue to lag far behind, failing to implement decisive and prompt measures to address the issue. ⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.' },
            { type: 'quiz', id: 'd3q', title: 'Guiding questions', items: [
              { q: '1. What is the job of S1?', options: ['To introduce the topic of food waste', 'To state the writer’s position', 'To give evidence from a source'], answer: 'To introduce the topic of food waste', why: '“A key factor in the issue of food insecurity is food wastage.”' },
              { q: '2. What is the job of S2?', options: ['To narrow the focus to solutions', 'To restate the topic', 'To give the writer’s thesis'], answer: 'To narrow the focus to solutions', why: 'S2 narrows the focus to what businesses (and consumers) are doing.' },
              { q: '3. S2 and S3 show a contrast. What is it? <small>Hint: look at the first words of S3.</small>', options: ['Businesses act, but governments don’t — “However, in contrast to”', 'Prevention versus management — “By doing so”', 'Consumers versus businesses — “Many”'], answer: 'Businesses act, but governments don’t — “However, in contrast to”', why: 'Businesses are acting, but governments “continue to lag far behind” (= are slower than others).' },
              { q: '4. Which sentence gives the writer’s position?', options: ['S3', 'S4', 'S5'], answer: 'S4', why: '“They are the ones that need to considerably scale up their involvement.”' },
              { q: '5. What are the writer’s reasons?', options: ['Governments can act across the whole supply chain (S4) to prevent and manage waste (S5).', 'Governments have more money than businesses and consumers.', 'Businesses are not doing anything to reduce waste.'], answer: 'Governments can act across the whole supply chain (S4) to prevent and manage waste (S5).', why: 'S5 previews the two reasons: prevent waste and better manage waste.' }
            ]},
            { type: 'order', id: 'd3o', title: 'Game · Put the five jobs of the introduction in order', items: [
              'Introduce the topic: food waste',
              'Narrow the focus: what businesses are doing',
              '<b>BUT</b> governments are far behind',
              '<b>SO</b> the thesis: governments must do much more',
              '<b>BECAUSE</b> two reasons: they can prevent and manage waste'
            ], ends: ['S1', 'S5'], why: 'This is a common shape for an introduction: topic → focus → problem → thesis → reasons.' },
            { type: 'table', id: 'd3t', title: 'The job of each sentence (introduction)', columns: ['Sentence', 'Job (rhetorical function)'], fixed: ['S1', 'S2', 'S3', 'S4', 'S5'] },
            { type: 'teacher', ref: 'w5d1-t6' }
          ],
          answers: { items: [
            ['Part 1 · Position', 'a) Governments need to significantly increase their efforts. <b>Why:</b> Introduction S4 and Conclusion S1 both say this.'],
            ['Part 2 · Introduction', 'Gives the background of the topic and the writer’s position (thesis).'],
            ['Part 2 · Body paragraph 1', 'Gives the first reason for the position.'],
            ['Part 2 · Body paragraph 2', 'Gives the second reason for the position.'],
            ['Part 2 · Conclusion', 'Says the position and reasons again + shows why the position is important.'],
            ['Part 3 · S1', 'Introduce the topic: food waste'],
            ['Part 3 · S2', 'Narrow the focus: action being taken by businesses and consumers'],
            ['Part 3 · S3', '<b>BUT</b> governments are not keeping up'],
            ['Part 3 · S4', '<b>SO</b> writer’s position / thesis: they need to do a lot more'],
            ['Part 3 · S5', '<b>BECAUSE</b> 2 reasons (preview points): they can prevent and manage waste across the supply chain']
          ]}
        },

        /* ── ④ Deconstruction: Activity 2 (body paragraphs, conclusion) + Activity 3 Text map ── */
        {
          id: 'd4', short: 'Sentences', minutes: 42, grouping: 'Pairs',
          title: 'Sample 5.1: Rhetorical function (body paragraphs, conclusion) + Text Map',
          goal: 'Find the job of each sentence in the body paragraphs and the conclusion. Then map the whole essay.',
          blocks: [
            { type: 'tip', text: 'Do tab 3 first. Here you use the same method for each paragraph: <b>read → answer the guiding questions → write the job of each sentence</b>. Short notes are fine.' },
            { type: 'flip', title: 'Key words · how sentences connect', hint: 'Read the word. Guess the meaning. Then tap to check.', items: [
              { front: 'concession', back: 'You agree a little with another idea first. Signal words: <i>While…, Although…</i>' },
              { front: 'refute', back: 'You show the other idea is wrong or not enough. Signal words: <i>However, Unfortunately…</i>' },
              { front: 'consequence', back: 'A result. Signal words: <i>So…, This is where…, This suggests…</i>' },
              { front: 'evidence', back: 'Facts or ideas from a source, with a reference, e.g. (Nicastro &amp; Carillo, 2021).' },
              { front: 'internal citation', back: 'The author’s name is part of the sentence: <i>Gunders (2024) points out that…</i>' }
            ]},

            { type: 'passage', id: 'd4p', title: 'Part 1 · Activity 2 Analysing rhetorical function: Body paragraph 1 (12 min)', text: '¹Government intervention, particularly in the consumption stage, is extremely important in preventing food waste. ²While consumers can take steps to minimise their household waste independently, this requires a proactive approach through conscious buying, eating, and disposal practices. ³Unfortunately, however, not enough consumers do this. ⁴In Europe, for instance, households are responsible for over 50% of all food waste, partly due to a lack of appreciation for the extensive resources required to produce food (Nicastro & Carillo, 2021). ⁵This is where there is a strong need for governments to step in and help change the wasteful attitudes towards food consumption through public awareness campaigns. ⁶Educating the public not only about the damaging impacts of food waste but also about the simple actions they can take to reduce their waste is crucial (Nicastro & Carillo, 2021). ⁷Gunders (2024) points out that new technologies, such as waste tracking apps, are also available to consumers and are effective but that progress to scale these solutions has been incredibly slow. ⁸She emphasises the need for greater government attention and investment to maximise the impact of these solutions and incentivise food businesses to innovate. ⁹Such an increase in government efforts to prevent waste would undoubtedly help drive consumer and business efforts.' },
            { type: 'quiz', id: 'd4q', title: 'Guiding questions · Body paragraph 1', items: [
              { q: '1. What is the job of the topic sentence (S1)?', options: ['It gives reason 1: governments must act to prevent waste, mainly by consumers', 'It gives evidence from Nicastro and Carillo', 'It restates the thesis'], answer: 'It gives reason 1: governments must act to prevent waste, mainly by consumers', why: 'Topic sentence = reason 1: prevent waste at the consumption stage (= when people buy and eat food).' },
              { q: '2. Why does S2 start with <b>While</b>?', options: ['It is a concession: consumers could act alone if they are motivated.', 'It shows time: two things happen at the same time.', 'It gives a result of S1.'], answer: 'It is a concession: consumers could act alone if they are motivated.', why: 'The writer accepts another view first, then argues against it.' },
              { q: '3. How does S3 connect to S2? <small>Hint: look at the first two words.</small>', options: ['It refutes the concession — “Unfortunately, however,…”', 'It gives an example — “for instance”', 'It adds a similar idea — “also”'], answer: 'It refutes the concession — “Unfortunately, however,…”', why: 'Consumers could act, BUT not enough of them do.' },
              { q: '4. Why is there a reference in S4?', options: ['It gives evidence for S3 and explains why', 'It introduces a new topic', 'It shows the writer disagrees with the source'], answer: 'It gives evidence for S3 and explains why', why: 'Households cause over 50% of food waste in Europe (Nicastro & Carillo, 2021).' },
              { q: '5. What is the job of S5 and S6?', options: ['S5: a result — governments must help with campaigns. S6: how they can do it.', 'S5 and S6 give two new reasons for the thesis.', 'S5 and S6 summarise the paragraph.'], answer: 'S5: a result — governments must help with campaigns. S6: how they can do it.', why: '“This is where there is a strong need…” → “Educating the public… is crucial”.' },
              { q: '6. What is the job of S7? Why does it use an internal citation (Gunders (2024) points out…)?', options: ['A small concession: apps exist, BUT progress is slow. The citation makes Gunders’ voice clear.', 'To end the paragraph; the citation is shorter.', 'To start reason 2; the citation shows disagreement.'], answer: 'A small concession: apps exist, BUT progress is slow. The citation makes Gunders’ voice clear.', why: '“Gunders (2024) points out that…” — her name is part of the sentence.' },
              { q: '7. How does S8 continue Gunders’ voice?', options: ['“She emphasises the need for…”', '“Such an increase…”', '“Unfortunately, however…”'], answer: '“She emphasises the need for…”', why: 'The pronoun “She” + a reporting verb continue the source’s voice.' },
              { q: '8. What is the job of the last sentence (S9)?', options: ['To conclude: it sums up the evidence for the writer’s position', 'To introduce a new source', 'To make a concession'], answer: 'To conclude: it sums up the evidence for the writer’s position', why: '“Such an increase in government efforts… would undoubtedly…”' }
            ]},
            { type: 'table', id: 'd4t', title: 'The job of each sentence (body paragraph 1)', columns: ['Sentence', 'Job (rhetorical function)'], fixed: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9'] },
            { type: 'teacher', ref: 'w5d1-t7' },

            { type: 'passage', id: 'd5p', title: 'Part 2 · Activity 2 Analysing rhetorical function: Body paragraph 2 (12 min)', text: '¹When food waste cannot be prevented, then at least it could be more responsibly managed. ²That would require greater participation from government institutions. ³This is because they are primarily responsible for establishing waste legislation and financing initiatives that could encourage more efficient use of food resources. ⁴One solution that holds significant promise in reducing waste is the redistribution of excess food through food banks. ⁵For example, the Italian, community-based food bank, Magazaini Sociali, has successfully redistributed thousands of meals to local families in need (Berti et al., 2021). ⁶However, since food banks are usually managed by NGOs and rely on volunteer help and donations, they are often limited in their reach (Berti et al., 2021; About That, 2024). ⁷Greater monetary assistance from the government is essential to expand the scope and effectiveness of their operations (About That, 2024). ⁸Another area where governments could and should increase their efforts is policy. ⁹Regulation and tax incentives that encourage business participation in food donation programs could go a long way towards reducing the amount of food in landfill. ¹⁰As Gunters (2024) argues, although some countries already have laws to better track waste and reduce the amount going to landfills, all countries should be adopting similar measures. ¹¹This suggests that there is definite potential for governments to do more through such initiatives.' },
            { type: 'quiz', id: 'd5q', title: 'Guiding questions · Body paragraph 2', items: [
              { q: '1. How does the topic sentence (S1) link to body paragraph 1?', options: ['It repeats the idea of body 1 (prevent) and adds a new one (manage)', 'It uses the same source', 'It repeats the thesis word for word'], answer: 'It repeats the idea of body 1 (prevent) and adds a new one (manage)', why: '“When food waste cannot be prevented, then at least it could be more responsibly managed.”' },
              { q: '2. How does S2 connect to S1? <small>Hint: what does “That” refer to?</small>', options: ['It gives a result of managing waste — “That would require…”', 'It gives an example — “For example”', 'It shows a contrast — “However”'], answer: 'It gives a result of managing waste — “That would require…”', why: '“That” refers back to managing waste.' },
              { q: '3. What is the job of S3? Which words tell you?', options: ['It gives reasons why governments must help — “This is because…”', 'It gives an example — “primarily”', 'It makes a concession — “could”'], answer: 'It gives reasons why governments must help — “This is because…”', why: 'Governments make waste laws and pay for projects.' },
              { q: '4. What is the job of S4 and S5?', options: ['A possible solution (food banks) + one successful example (Magazaini Sociali)', 'To show that food banks do not work', 'To restate reason 1'], answer: 'A possible solution (food banks) + one successful example (Magazaini Sociali)', why: '“One solution that holds significant promise…” → “For example…”' },
              { q: '5. Why does S6 start with <b>However</b>?', options: ['Contrast: one good food bank is not enough — most have too little money and help', 'To add another example', 'To end the paragraph'], answer: 'Contrast: one good food bank is not enough — most have too little money and help', why: 'Food banks rely on volunteers and donations, so their reach is limited.' },
              { q: '6. What is the job of S7?', options: ['To give evidence that government money is important', 'To introduce policy', 'To give a concession'], answer: 'To give evidence that government money is important', why: '“Greater monetary assistance from the government is essential…” (About That, 2024).' },
              { q: '7. What is the job of S8?', options: ['To move to another area where governments can help: policy', 'To summarise the evidence about food banks', 'To restate the thesis'], answer: 'To move to another area where governments can help: policy', why: '“Another area where governments could and should increase their efforts is policy.” This links back to S3.' },
              { q: '8. How does S9 connect to S8?', options: ['It gives a good result of rules for business: less food in landfill', 'It gives a contrasting idea', 'It gives an example from a source'], answer: 'It gives a good result of rules for business: less food in landfill', why: '“…could go a long way towards reducing the amount of food in landfill.”' },
              { q: '9. What is the job of S10? Why does the writer use <b>although</b>?', options: ['Evidence for the thesis; “although” is a concession (some countries already act)', 'To disagree with Gunders; “although” shows a result', 'To introduce reason 3; “although” adds information'], answer: 'Evidence for the thesis; “although” is a concession (some countries already act)', why: '“…although some countries already have laws…, all countries should be adopting similar measures.”' },
              { q: '10. What is the job of the last sentence (S11)? Which words show it?', options: ['A logical conclusion from the evidence — “This suggests that…”', 'A new example — “such initiatives”', 'A concession — “definite”'], answer: 'A logical conclusion from the evidence — “This suggests that…”', why: 'The writer draws a conclusion from the evidence in the paragraph.' }
            ]},
            { type: 'table', id: 'd5t', title: 'The job of each sentence (body paragraph 2)', columns: ['Sentence', 'Job (rhetorical function)'], fixed: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11'] },
            { type: 'teacher', ref: 'w5d1-t8' },

            { type: 'passage', id: 'd6p', title: 'Part 3 · Activity 2 Analysing rhetorical function: Conclusion (8 min) — highlight the thesis (Introduction S4) and the restated thesis', text: '<b>Introduction</b><br>⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.<br><br><b>Conclusion</b><br>¹Overall, the issue of food waste demands greater government intervention. ²It is clear that robust government action in the form of investment, regulation and education is necessary to facilitate innovation and support solutions that are already making some progress towards preventing and managing food waste. ³Without the increased participation of governments, it will be extremely difficult to achieve sustainable development goals in relation to food security.' },
            { type: 'quiz', id: 'd6q', title: 'Guiding questions · Conclusion', items: [
              { q: '1a. Which sentence of the conclusion gives the position (thesis) again?', options: ['S1', 'S2', 'S3'], answer: 'S1', why: '“Overall, the issue of food waste demands greater government intervention.”' },
              { q: '1b. How does the writer paraphrase (= say again in new words) the thesis?', options: ['New word order, synonyms and nominalisation (verb → noun)', 'Only by adding “Overall”', 'By quoting the introduction'], answer: 'New word order, synonyms and nominalisation (verb → noun)', why: 'Synonyms: considerably scale up → greater; involvement → intervention. Nominalisation: they need to scale up → greater government intervention.' },
              { q: '2. How does S2 link back to the introduction?', options: ['It repeats the two reasons (prevent and manage waste) and how governments can help.', 'It introduces a new reason.', 'It gives new evidence from Gunders.'], answer: 'It repeats the two reasons (prevent and manage waste) and how governments can help.', why: '“…investment, regulation and education… towards preventing and managing food waste.”' },
              { q: '3. What is the job of S3?', options: ['To end by showing why the thesis is important', 'To make a concession', 'To summarise a source'], answer: 'To end by showing why the thesis is important', why: '“Without the increased participation of governments, it will be extremely difficult…”' }
            ]},
            { type: 'table', id: 'd6t', title: 'The job of each sentence (conclusion)', columns: ['Sentence', 'Job (rhetorical function)'], fixed: ['S1', 'S2', 'S3'] },
            { type: 'teacher', ref: 'w5d1-t9' },

            { type: 'sort', id: 'd4s', title: 'Game · Signal words: what job do they do?', hint: 'These sentence beginnings are all from Sample 5.1. <b>Drag</b> each one into the right box — or <b>tap</b> a card, then tap a box.', buckets: [
              { label: 'Concession', text: 'agree a little first' }, { label: 'Contrast / refute', text: 'but…' }, { label: 'Example', text: 'show one case' }, { label: 'Result / conclusion', text: 'so…' }
            ], items: [
              { text: '<b>While</b> consumers can take steps…', answer: 0, why: 'Body 1 S2: the writer accepts that consumers could act alone.' },
              { text: '<b>Unfortunately, however,</b> not enough consumers do this.', answer: 1, why: 'Body 1 S3 refutes the concession.' },
              { text: 'In Europe, <b>for instance</b>, households…', answer: 2, why: 'Body 1 S4 gives one case as evidence.' },
              { text: '<b>This is where</b> there is a strong need for governments…', answer: 3, why: 'Body 1 S5 is a result of S3–S4.' },
              { text: '<b>For example</b>, the Italian… food bank…', answer: 2, why: 'Body 2 S5: one successful food bank.' },
              { text: '<b>However, since</b> food banks are usually managed by NGOs…', answer: 1, why: 'Body 2 S6: one good food bank is not enough.' },
              { text: '…<b>although</b> some countries already have laws…', answer: 0, why: 'Body 2 S10: some governments already act.' },
              { text: '<b>This suggests that</b> there is definite potential…', answer: 3, why: 'Body 2 S11: a conclusion from the evidence.' }
            ]},

            { type: 'steps', title: 'Part 4 · Activity 3 Text Map (10 min)', items: [
              { who: 'pair', text: 'Use your notes from Parts 1–3 and from tab 3.' },
              { who: 'pair', text: 'Write <b>short notes</b> in each box, not full sentences.' },
              { who: 'pair', text: 'Then compare with the text map in the answers.' }
            ]},
            { type: 'model', title: 'Example: the first row, done for you', rows: [
              ['Introduction', 'Businesses act, governments lag behind → thesis: governments must do much more → reasons: prevent + manage waste']
            ]},
            { type: 'table', id: 'd7t', title: 'Sample 5.1 text map · Should governments do more to solve the problem of food waste?', columns: ['', 'Notes'], fixed: [
              'Introduction<br><small>context · thesis / position · preview of reasons</small>',
              'Body 1 · reason 1<br><small>topic sentence</small>',
              'Body 1 · support<br><small>concession · evidence · sources</small>',
              'Body 2 · reason 2<br><small>topic sentence</small>',
              'Body 2 · support<br><small>solutions · evidence · sources</small>',
              'Conclusion<br><small>restated thesis · summary of reasons · final comment</small>'
            ]},
            { type: 'tip', text: 'Well done — that is the whole essay on one page! Time left? Make a text map of <b>your group’s essay</b> too (extra activity: My text map).' },
            { type: 'teacher', ref: 'w5d1-t10' }
          ],
          answers: { items: [
            ['Body 1 · S1', 'Topic sentence (reason 1): prevention of waste at the consumption stage'],
            ['Body 1 · S2', 'Concession: consumers could independently take action'],
            ['Body 1 · S3', '<b>BUT</b> few do <b>BECAUSE</b> it requires a proactive approach (S2)'],
            ['Body 1 · S4', 'Supporting evidence 1: consumers largely responsible for waste <b>BECAUSE</b> they lack understanding of resource use'],
            ['Body 1 · S5', '<b>SO</b> governments need to help change consumer behaviour through education'],
            ['Body 1 · S6', '<b>HOW</b>: by highlighting the damaging impacts of waste and possible actions'],
            ['Body 1 · S7', '<b>AND</b> supporting evidence 2: new tech is available to help <b>BUT</b> progress to adopt is slow'],
            ['Body 1 · S8', 'Supporting evidence 3: <b>SO</b> more government attention/investment needed'],
            ['Body 1 · S9', '<b>SO</b> consequence: government involvement would support other actors’ efforts'],
            ['Body 2 · S1', 'Topic sentence (reason 2): if not prevented, then better managed'],
            ['Body 2 · S2', '<b>SO</b> government involvement needed'],
            ['Body 2 · S3', '<b>BECAUSE</b> they can regulate and provide financial resources'],
            ['Body 2 · S4', 'One solution (to better management) = food banks'],
            ['Body 2 · S5', 'Example of a successful food bank'],
            ['Body 2 · S6', '<b>BUT</b> they are hard to scale <b>BECAUSE</b> of limited resources'],
            ['Body 2 · S7', '<b>SO</b> evidence for greater financial assistance from government'],
            ['Body 2 · S8', '<b>AND</b> policy is needed'],
            ['Body 2 · S9', 'To encourage business involvement <b>SO</b> landfill is reduced'],
            ['Body 2 · S10', 'Evidence (concession): some countries already enact laws to reduce waste <b>BUT</b> this should extend to all countries'],
            ['Body 2 · S11', '<b>SO</b> potential to do more'],
            ['Conclusion · thesis → restated thesis', 'Introduction S4: “they are the ones that need to considerably scale up their involvement” → Conclusion S1: “the issue of food waste demands greater government intervention”.'],
            ['Conclusion · how it is paraphrased', 'New word order: “they… need to…” → “the issue demands…” · Synonyms: “considerably scale up” → “greater”; “involvement” → “intervention” · Nominalisation: “They… need to scale up” → “greater government intervention”.'],
            ['Conclusion · S1', 'Restatement of thesis'],
            ['Conclusion · S2', '<b>SO</b> summary of reasons (greater investment, regulation and education is needed to prevent and manage waste)'],
            ['Conclusion · S3', '<b>SO</b> must have more government involvement to achieve goals'],
            ['Text map', '<img src="assets/week5/text-map-5-1.svg" alt="Text map of Sample 5.1: the thesis that governments need to considerably scale up their involvement, reason 1 (prevent waste at the consumption stage through education and investment, Nicastro and Carillo 2021, Gunders 2024), reason 2 (better manage waste through funding food banks and policy, Berti et al. 2021, About That 2024, Gunders 2024), and the conclusion.">'],
            ['Text map · Introduction', 'Businesses act, governments lag behind → thesis: governments need to considerably scale up their involvement → they can prevent and better manage waste.'],
            ['Text map · Body 1', 'Reason 1: prevent waste at the consumption stage. Concession: consumers could act alone, but not enough do (households > 50% of EU waste — Nicastro & Carillo, 2021) → public awareness campaigns / education; apps exist but progress is slow → more government attention and investment (Gunders, 2024).'],
            ['Text map · Body 2', 'Reason 2: if not prevented, better managed. Governments make laws and finance initiatives → food banks (Magazaini Sociali — Berti et al., 2021) are limited → more money needed (About That, 2024) → policy: regulation and tax incentives; laws in some countries should be in all (Gunders, 2024).'],
            ['Text map · Conclusion', 'Greater government intervention needed → investment, regulation, education → without it, SDGs will be extremely difficult to achieve.']
          ]}
        },

        /* ── ⑤ Language focus ── */
        {
          id: 'l1', short: 'Language', minutes: 30, grouping: 'Pairs',
          title: 'Language focus: Using evaluative language to persuade the reader of your position',
          goal: 'Find the words the writer uses to show their opinion. Then sort them.',
          blocks: [
            { type: 'flip', title: 'Key words · 5 kinds of persuasive language', hint: 'Last week you learned these. Can you remember? Guess, then tap to check.', items: [
              { front: 'evaluative language', back: 'Words that judge: good or bad, important or not. e.g. <i>extremely important, decisive measures</i>' },
              { front: 'modal', back: 'could, would, should, can — shows possibility or need. e.g. <i>could help</i>' },
              { front: 'hedging', back: 'Careful words: the claim is less certain. e.g. <i>many, the potential to</i>' },
              { front: 'reporting verb', back: 'A verb that introduces a source. e.g. <i>argues, emphasises, points out</i>' },
              { front: 'attitude marker', back: 'A word that shows the writer’s feeling. e.g. <i>unfortunately, undoubtedly</i>' }
            ]},
            { type: 'steps', title: 'Part 1 · Language focus: Evaluative language in the introduction (10 min)', items: [
              { who: 'pair', text: 'Read the introduction of Sample 5.1.' },
              { who: 'pair', text: '<b>Highlight</b> the words that show the writer’s position.' },
              { who: 'pair', text: 'Is there any other evaluative language? Highlight it in a different colour.' },
              { who: 'pair', text: 'Do the quick check.' }
            ]},
            { type: 'passage', id: 'l1p', title: 'Sample 5.1 · Introduction — highlight the words that show the writer’s position', text: '¹A key factor in the issue of food insecurity is food wastage. ²Many businesses are working to minimize their waste and support consumers’ efforts through the application of new technologies. ³However, in contrast to action taken in the private sector, governments continue to lag far behind, failing to implement decisive and prompt measures to address the issue. ⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.' },
            { type: 'quiz', id: 'l1q', title: 'Quick check', items: [
              { q: 'Which words show the writer’s <b>position</b> (not just general evaluation)?', options: ['continue to lag far behind · failing to · decisive and prompt · need to considerably scale up', 'key · many', 'food insecurity · supply chain'], answer: 'continue to lag far behind · failing to · decisive and prompt · need to considerably scale up', why: 'These words judge governments and say what they should do. “key” and “many” are general evaluative language.' },
              { q: '<b>could help</b> prevent food waste (S5) is…', options: ['a modal — it shows possibility', 'a reporting verb', 'an attitude marker'], answer: 'a modal — it shows possibility', why: 'Modals such as could, would and should are part of the writer’s evaluation.' }
            ]},
            { type: 'teacher', ref: 'w5d1-t11' },

            { type: 'key', title: 'Part 2 · Language focus: Language reference table (20 min) — writer’s voice or source’s voice?', points: [
              'A sentence with <b>no reference</b> = the <b>writer’s voice</b>. Look here first for the writer’s opinion.',
              'A sentence <b>with a reference</b> usually reports the <b>source’s</b> opinion. The writer chooses it to support their position.',
              'One exception: “<b>As</b> Gunters (2024) <b>argues</b>, …” — here the writer uses the source to support their own position.'
            ]},
            { type: 'sort', id: 'l2s', title: 'Game · What kind of language is it?', hint: 'All these words are from Sample 5.1. <b>Drag</b> each one into the right box — or <b>tap</b> a card, then tap a box.', buckets: [
              { label: 'Evaluative' }, { label: 'Modal' }, { label: 'Hedging' }, { label: 'Reporting verb' }, { label: 'Attitude marker' }
            ], items: [
              { text: 'extremely (important)', answer: 0, why: 'It judges how important something is.' },
              { text: 'robust (government action)', answer: 0, why: 'It judges the action as strong.' },
              { text: 'could help', answer: 1, why: 'could = possibility.' },
              { text: 'would require', answer: 1, why: 'would = a likely result.' },
              { text: 'the potential to', answer: 2, why: 'It makes the claim less certain.' },
              { text: 'not enough (consumers)', answer: 2, why: 'It avoids saying “no consumers” — a careful claim.' },
              { text: 'emphasises', answer: 3, why: 'She emphasises… introduces Gunders’ idea.' },
              { text: 'argues', answer: 3, why: 'As Gunters (2024) argues… introduces a source.' },
              { text: 'unfortunately', answer: 4, why: 'It shows the writer’s feeling (this is bad).' },
              { text: 'undoubtedly', answer: 4, why: 'It shows the writer is very sure.' }
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Now find more examples in the rest of the essay (below).' },
              { who: 'pair', text: 'Start with the <b>Evaluative</b> row of the table. Do the other rows if you have time.' },
              { who: 'pair', text: 'Write the key word + its partner word in brackets, e.g. <i>key (factor)</i>, <i>extremely (important)</i>.' }
            ]},
            { type: 'passage', id: 'l2p1', title: 'Body paragraph 1', text: '¹Government intervention, particularly in the consumption stage, is extremely important in preventing food waste. ²While consumers can take steps to minimise their household waste independently, this requires a proactive approach through conscious buying, eating, and disposal practices. ³Unfortunately, however, not enough consumers do this. ⁴In Europe, for instance, households are responsible for over 50% of all food waste, partly due to a lack of appreciation for the extensive resources required to produce food (Nicastro & Carillo, 2021). ⁵This is where there is a strong need for governments to step in and help change the wasteful attitudes towards food consumption through public awareness campaigns. ⁶Educating the public not only about the damaging impacts of food waste but also about the simple actions they can take to reduce their waste is crucial (Nicastro & Carillo, 2021). ⁷Gunders (2024) points out that new technologies, such as waste tracking apps, are also available to consumers and are effective but that progress to scale these solutions has been incredibly slow. ⁸She emphasises the need for greater government attention and investment to maximise the impact of these solutions and incentivise food businesses to innovate. ⁹Such an increase in government efforts to prevent waste would undoubtedly help drive consumer and business efforts.' },
            { type: 'passage', id: 'l2p2', title: 'Body paragraph 2', text: '¹When food waste cannot be prevented, then at least it could be more responsibly managed. ²That would require greater participation from government institutions. ³This is because they are primarily responsible for establishing waste legislation and financing initiatives that could encourage more efficient use of food resources. ⁴One solution that holds significant promise in reducing waste is the redistribution of excess food through food banks. ⁵For example, the Italian, community-based food bank, Magazaini Sociali, has successfully redistributed thousands of meals to local families in need (Berti et al., 2021). ⁶However, since food banks are usually managed by NGOs and rely on volunteer help and donations, they are often limited in their reach (Berti et al., 2021; About That, 2024). ⁷Greater monetary assistance from the government is essential to expand the scope and effectiveness of their operations (About That, 2024). ⁸Another area where governments could and should increase their efforts is policy. ⁹Regulation and tax incentives that encourage business participation in food donation programs could go a long way towards reducing the amount of food in landfill. ¹⁰As Gunters (2024) argues, although some countries already have laws to better track waste and reduce the amount going to landfills, all countries should be adopting similar measures. ¹¹This suggests that there is definite potential for governments to do more through such initiatives.' },
            { type: 'passage', id: 'l2p3', title: 'Conclusion', text: '¹Overall, the issue of food waste demands greater government intervention. ²It is clear that robust government action in the form of investment, regulation, and education is necessary to facilitate innovation and support solutions that are already making some progress towards preventing and managing food waste. ³Without the increased participation of governments, it will be extremely difficult to achieve sustainable development goals in relation to food security.' },
            { type: 'table', id: 'l2t', title: 'Language reference table: Expressing your position persuasively', columns: ['', 'Adjectives', 'Adverbs', 'Verbs', 'Nouns', 'Signalling words & other expressions'], fixed: ['Evaluative', 'Modal', 'Hedging', 'Reporting', 'Attitude markers'] },
            { type: 'teacher', ref: 'w5d1-t12' }
          ],
          answers: { items: [
            ['Part 1 · Writer’s position', 'However, in contrast to · continue to lag <b>far</b> behind · <b>failing to</b> implement · <b>decisive and prompt</b> measures · the potential to · they are the ones that <b>need to considerably scale up</b> · By doing so · <b>could help</b> · <b>better</b> manage'],
            ['Part 1 · General evaluative language', '<b>key</b> (factor) · <b>many</b> (businesses)'],
            ['Part 2 · Evaluative · adjectives', 'key (factor) · decisive &amp; prompt (measures) · better (manage) · proactive (approach) · conscious (buying) · strong (need) · wasteful (attitudes) · effective · greater (participation) · (more) efficient (use) · necessary · robust (government action)'],
            ['Part 2 · Evaluative · adverbs', 'considerably (scale up) · far (behind) · extremely (important) · independently · partly (due to) · incredibly (slow) · at least · (more) responsibly · primarily (responsible) · extremely (difficult)'],
            ['Part 2 · Evaluative · verbs', 'failing to · continue to lag · (This) suggests · (already) making some progress'],
            ['Part 2 · Evaluative · signalling words &amp; other expressions', 'However, in contrast to… · By doing so… · This is where… · However, since… · holds significant promise · go a long way · It is clear that… · Without the increased…'],
            ['Part 2 · Modal · verbs', 'could help · can take · could be · would require · could encourage · could &amp; should'],
            ['Part 2 · Hedging', '<b>Adjectives:</b> many (businesses) · not enough (consumers). <b>Nouns:</b> the potential to · (definite) potential'],
            ['Part 2 · Reporting · verbs', 'emphasises (the need for) · argues'],
            ['Part 2 · Attitude markers · adverbs', 'unfortunately · (would) undoubtedly'],
            ['Note: “partly”', 'Nicastro &amp; Carillo give 2 reasons. The writer uses only one here, so they say “partly”.']
          ]}
        },

        /* ── ⑥ Compare the sample with your response ── */
        {
          id: 'c1', short: 'Improve', minutes: 60, grouping: 'Alone',
          title: 'Compare the sample with your response: judge, revise and plan',
          goal: 'Compare your essay with Sample 5.1. Then make your essay better and plan your next steps.',
          blocks: [
            { type: 'figure', src: 'assets/week3/feedback-literacy.svg', alt: 'The elements of feedback literacy, including making judgements about your own work.', caption: 'Today’s focus: Making judgements (= deciding how good your own work is)', size: 'small' },
            { type: 'steps', title: 'Part 1 · Compare the sample with your response (10 min)', items: [
              { who: 'alone', text: 'Read your group essay again.' },
              { who: 'alone', text: 'Choose <b>Yes</b> or <b>No</b> for each sentence.' },
              { who: 'alone', text: 'Write questions for your teacher. Ask them in class — talking with your teacher is part of feedback.' }
            ]},
            { type: 'grid', id: 'c1g', title: 'My essay and the sample', rows: [
              '1. My essay had the same position as the sample.',
              '2. My introduction had the same structure as the sample.',
              '3. I wrote my thesis in a different way from the sample.',
              '4. My topic sentences clearly gave my main ideas (reasons).',
              '5. I can find evaluative language in every paragraph of my essay.',
              '6. I included a concession in my essay.'
            ], columns: ['Yes / No'], options: ['Yes', 'No'] },
            { type: 'language', title: 'Questions to ask your teacher', tabs: false, groups: [
              { label: 'Ask', phrases: ['Is my thesis clear enough?', 'How can I make this topic sentence stronger?', 'Where could I add a concession?', 'Is this the right reporting verb here?'] }
            ]},
            { type: 'table', id: 'c1t', title: 'Questions I want to ask my teacher', columns: ['Statement', 'My question'], fixed: ['1 · Position', '2 · Introduction structure', '3 · Thesis', '4 · Topic sentences', '5 · Evaluative language', '6 · Concession'] },
            { type: 'teacher', ref: 'w5d1-t13' },

            { type: 'key', title: 'Part 2 · Notice features of the sample (15 min) — two kinds of citation', compare: [
              { label: 'External (parenthetical) citation', text: 'The reference is in brackets.', eg: '…is crucial (Nicastro & Carillo, 2021).' },
              { label: 'Internal (narrative) citation', text: 'The author is part of the sentence.', eg: 'Gunders (2024) points out that…' }
            ]},
            { type: 'table', id: 'c2t', title: 'Count and compare', columns: ['Question', 'Your answer', 'My question for my teacher'], fixed: [
              '1. How many external citations are in the sample?',
              '2. How many external citations are in your essay?',
              '3. How many internal citations are in the sample?',
              '4. How many internal citations are in your essay?',
              '5. How many sentences in the sample are in the writer’s voice (no reference)?',
              '6. How many sentences in your essay are in the writer’s voice?',
              '7. How many sentences in the sample start with a linking word (e.g. However, While)?',
              '8. How many sentences in your essay start with a linking word?'
            ]},
            { type: 'teacher', ref: 'w5d1-t14' },

            { type: 'fields', title: 'Part 3 · Overall comparison (5 min)', fields: [
              { id: 'c3-1', label: 'What other differences do you see between the sample and your essay? What do you want to ask your teacher?', placeholder: 'The sample uses more… / My body paragraph 2…', rows: 4 }
            ]},

            { type: 'steps', title: 'Part 4 · Revising, editing or re-writing (25 min)', items: [
              { who: 'alone', text: 'Look back at Parts 1–3, your <b>AI feedback</b> (tab 2) and your teacher’s answers.' },
              { who: 'alone', text: 'Choose the part of your essay that needs the most work. Start there.' },
              { who: 'alone', text: 'Edit or re-write part or all of your essay.' },
              { who: 'alone', text: 'Not finished? Finish it for homework. Your teacher will check it tomorrow.' }
            ]},
            { type: 'model', title: 'Example: a topic sentence made stronger', before: 'Governments should do more. Food waste is a big problem.', text: 'Government action is <b>extremely important</b> in <b>preventing</b> food waste, <b>particularly</b> in homes.', note: 'Better: one clear reason, evaluative language (extremely important) and a clear focus (in homes).' },
            { type: 'fields', title: 'My revised writing', fields: [
              { id: 'c4-1', label: 'What I will change (and why)', placeholder: 'Topic sentence of body 2 — make reason 2 clearer…', rows: 3 },
              { id: 'c4-2', label: 'My revised paragraph(s) / essay', placeholder: 'Write your new version here…', rows: 14 }
            ]},
            { type: 'teacher', ref: 'w5d1-t15' },

            { type: 'fields', title: 'Part 5 · Action planning (5 min)', fields: [
              { id: 'c5-1', label: 'What I need to improve', placeholder: 'Show my position more clearly with evaluative language…', rows: 3 },
              { id: 'c5-2', label: 'What exactly I will do (and how I will check it)', placeholder: 'Before I submit, I will highlight the thesis and the restated thesis…', rows: 3 }
            ]},
            { type: 'tip', text: 'Great work today! You wrote an essay, took a sample apart and made your own writing better.' }
          ],
          answers: { title: 'Our count for the sample (Part 2)', items: [
            ['1 · External citations', '5 sentences: Body 1 S4 and S6 (Nicastro &amp; Carillo, 2021) · Body 2 S5 (Berti et al., 2021), S6 (Berti et al., 2021; About That, 2024), S7 (About That, 2024).'],
            ['3 · Internal citations', '2: Gunders (2024) points out… (Body 1 S7) · As Gunters (2024) argues… (Body 2 S10). Gunders’ voice continues in Body 1 S8 (“She emphasises…”).'],
            ['5 · Writer’s voice', 'About 20 of the 28 sentences (all sentences without a source).'],
            ['7 · Linking words at the start', 'For example: However (Intro S3) · As (Intro S4) · While (Body 1 S2) · When (Body 2 S1) · However (Body 2 S6) · As (Body 2 S10). Other linking expressions: By doing so · Unfortunately, however · For example · Overall.'],
            ['Note', 'Your count may be a little different. It depends on what you count. Talk about it with your teacher.']
          ]}
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'My text map', minutes: 15, grouping: 'Groups of 3–4', category: 'Writing practice',
      title: 'Create a text map of your own essay',
      goal: 'Map your group essay like Sample 5.1 and find the gaps in your argument.',
      blocks: [
        { type: 'table', id: 'x1t', title: 'Our essay text map', columns: ['', 'Notes'], fixed: [
          'Introduction<br><small>context · thesis · preview</small>', 'Body 1<br><small>reason 1 · support · sources</small>', 'Body 2<br><small>reason 2 · support · sources</small>', 'Conclusion<br><small>restated thesis · summary · final comment</small>'
        ]},
        { type: 'talk', prompts: ['Does every paragraph support your thesis?', 'Which paragraph has the weakest evidence? How can you make it stronger?'] }
      ]
    }
  ],

  glossary: [
    ['rubric', 'A table that shows how your work is marked, with criteria and score bands.', 'Use of Sources is one section of the rubric.'],
    ['band descriptor', 'A sentence that describes the work in one score range.', 'Read the 66–70 band descriptor.'],
    ['joint construction', 'Writing one text together as a group.', 'In the joint construction, discuss your language choices.'],
    ['deconstruct', 'Take a text apart to see how it works.', 'Deconstruct IWA Sample 5.1.'],
    ['rhetorical function', 'The purpose (job) of a sentence or paragraph.', 'The rhetorical function of S3 is contrast.'],
    ['thesis', 'Your position: your main answer to the essay question.', 'They are the ones that need to considerably scale up their involvement.'],
    ['preview points', 'The reasons you list in the introduction and develop later.', 'They could help prevent food waste and better manage the waste that is created.'],
    ['topic sentence', 'The first sentence of a body paragraph; it gives the main idea.', 'Government intervention… is extremely important in preventing food waste.'],
    ['concession', 'Accepting that another idea is partly true before giving your main point.', 'While consumers can take steps…'],
    ['refute', 'Show that an idea is wrong or not enough.', 'Unfortunately, however, not enough consumers do this.'],
    ['evaluative language', 'Words that show your judgement or opinion.', 'decisive and prompt measures'],
    ['attitude marker', 'A word that shows the writer’s feeling about an idea.', 'Unfortunately · undoubtedly'],
    ['hedging', 'Careful language that makes a claim less certain.', 'They have the potential to…'],
    ['reporting verb', 'A verb that introduces a source’s idea.', 'Gunders (2024) argues that…'],
    ['internal citation', 'A narrative citation: the author is part of the sentence.', 'Gunders (2024) points out that…'],
    ['external citation', 'A parenthetical citation: the reference is in brackets.', '…(Berti et al., 2021).'],
    ['text map', 'A diagram of the main parts of an essay and how they connect.', 'Fill in the text map for Sample 5.1.'],
    ['scale up', 'Make something bigger or do more of it.', 'Governments need to scale up their involvement.'],
    ['lag behind', 'Move more slowly than others; not keep up.', 'Governments continue to lag far behind.'],
    ['intervention', 'Action taken to change or improve a situation.', 'Food waste demands greater government intervention.'],
    ['nominalisation', 'Changing a verb or adjective into a noun.', 'they need to scale up → greater government intervention'],
    ['action plan', 'A list of what you will do to improve, and how.', 'Add hedging to your action plan.']
  ]
};
