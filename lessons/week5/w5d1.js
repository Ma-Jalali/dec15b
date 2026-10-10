/* DEC15 · Week 5, Day 1 — lesson content.
   Teacher’s Book: W5 D1 · 1A Academic writing skills workshop (240): Warmer (10) · Joint construction (80)
   · Deconstruction (60) · Language focus (30) · Compare the sample with your response (60).
   Texts: IWA Sample 5.1 (exact TB text) · Nicastro & Carillo (2021), About That (2024), Berti et al. (2021) — lessons/week3/sources.js
   · Gunders (2024) — lessons/week4/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
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
  journey: 'Today is a writing workshop. Your group writes a full essay together from last Friday’s plan and checks it with the CET AI Agent. Then you take Sample essay 5.1 apart — paragraph by paragraph, sentence by sentence — find the language the writer uses to persuade, and compare the sample with your own essay so you can improve it.',
  finish: { title: 'Tuesday', text: 'LRW assessment' },

  sections: [
    /* ───────────────────────── 1A Academic writing skills workshop ───────────────────────── */
    {
      id: 'workshop', number: '01', code: '1A', minutes: 240,
      tone: 'clay', art: 'writing',
      title: 'Academic writing skills workshop',
      subtitle: 'Write together, take a sample apart, improve your essay',
      outcome: 'Understand how to develop an argument, understand how to express your position persuasively, and evaluate and edit your writing after comparing it to a sample.',
      activities: [
        /* ── Warmer ── */
        {
          id: 'w1', short: 'Warmer', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Warmer',
          goal: 'Review the writing rubric: match descriptors to the right section of the rubric.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'One student reads a random <b>band descriptor</b> from the rubric (e.g. “Effectively synthesise sources, demonstrating good proficiency in paraphrasing and accurate referencing”).' },
              { who: 'group', text: 'The others say the <b>section of the rubric</b> (e.g. Use of Sources) and the <b>score range</b> (e.g. 76 or more).' },
              { who: 'group', text: 'Take turns. Then try the sorting game below.' }
            ]},
            { type: 'sort', id: 'w1s', title: 'Which section of the rubric is it?', buckets: [
              { label: 'Argumentation' }, { label: 'Use of Sources' }, { label: 'Connection of Ideas' }, { label: 'Vocabulary' }, { label: 'Grammar' }
            ], items: [
              { text: 'Effectively synthesise sources, demonstrating good proficiency in paraphrasing and accurate referencing <small>(76 or more)</small>', answer: 1, why: 'Use of Sources · 76 or more.' },
              { text: 'Develops mostly effective and logical arguments supported by relevant source material <small>(66–70)</small>', answer: 0, why: 'Argumentation · 66–70.' },
              { text: 'Generally good synthesis and successful paraphrasing of sources; some appropriate use of different voices <small>(66–70)</small>', answer: 1, why: 'Use of Sources · 66–70.' },
              { text: 'Generally displays good connectivity; most structural and cohesive features are used effectively <small>(66–70)</small>', answer: 2, why: 'Connection of Ideas · 66–70.' },
              { text: 'Uses a good range of vocabulary with mostly accurate collocations; mostly suitable hedging <small>(66–70)</small>', answer: 3, why: 'Vocabulary · 66–70.' },
              { text: 'Uses a good range of grammatical structures with minor errors, meaning is mostly clear <small>(66–70)</small>', answer: 4, why: 'Grammar · 66–70.' }
            ]},
            { type: 'teacher', ref: 'w5d1-t1' }
          ]
        },

        /* ── Joint construction ── */
        {
          id: 'w2', short: 'Plan recap', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Joint construction',
          goal: 'Take out your plan from last Friday and agree on your group’s position.',
          blocks: [
            { type: 'question' },
            { type: 'cards', title: '1 · What was your position in response to the question?', pick: 'w2-pos', items: [
              { label: 'a', text: 'Governments need to significantly increase their efforts.' },
              { label: 'b', text: 'All actors in the food system should be doing more.' },
              { label: 'c', text: 'Businesses and consumers need to do more, not governments.' },
              { label: 'd', text: 'Governments are already doing enough.' }
            ]},
            { type: 'fields', title: 'Our group’s plan (recap)', fields: [
              { id: 'w2-1', label: 'Our position (thesis) in one sentence', placeholder: 'Governments…', rows: 2 },
              { id: 'w2-2', label: 'Reason 1 + evidence (which sources?)', placeholder: 'Reason… · Nicastro & Carillo (2021)…', rows: 3 },
              { id: 'w2-3', label: 'Reason 2 + evidence (which sources?)', placeholder: 'Reason… · Berti et al. (2021), Gunders (2024)…', rows: 3 },
              { id: 'w2-4', label: 'Feedback from our writing practice task to remember', placeholder: 'Clearer topic sentences…', rows: 2 }
            ]},
            { type: 'sources', ids: ['nicastro', 'aboutthat', 'berti', 'gunders'] }
          ]
        },
        {
          id: 'w3', short: 'Write together', minutes: 55, grouping: 'Groups of 3–4',
          title: 'Joint construction: Write a complete response',
          goal: 'Write one complete essay together as a group (450–600 words).',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Press <b>Write together</b> so your group writes on one shared page. Write the paragraphs <b>together</b> — discuss and justify your language choices.' },
              { who: 'group', text: 'Use your plan and the sources. Copy your finished essay into the boxes below so you can find it later.' },
              { who: 'group', text: 'Before you finish, check every point on the checklist.' }
            ]},
            { type: 'checklist', id: 'w3c', title: '2 · Check your essay', meter: ['ticked', 'Ready to check with the AI Agent!'], items: [
              'We considered the feedback from our writing practice task.',
              'Our arguments are developed with relevant supporting evidence.',
              'Our position and voice are clear throughout.',
              'Our writing is cohesive: clear relationships between sentences.',
              'Our ideas are logical, with one main idea in each paragraph.',
              'We included in-text references for information from other sources.',
              'We paraphrased the sources to accurately reflect their voice.',
              'We synthesised information across sources where appropriate.'
            ]},
            { type: 'fields', title: 'Our group essay', fields: [
              { id: 'w3-1', label: 'Introduction', placeholder: 'Background → narrow the focus → thesis → preview of reasons', rows: 6 },
              { id: 'w3-2', label: 'Body paragraph 1', placeholder: 'Topic sentence (reason 1) → support and evidence → concluding sentence', rows: 9 },
              { id: 'w3-3', label: 'Body paragraph 2', placeholder: 'Topic sentence (reason 2) → support and evidence → concluding sentence', rows: 9 },
              { id: 'w3-4', label: 'Conclusion', placeholder: 'Restate the thesis → summarise the reasons → final comment', rows: 5 }
            ]},
            { type: 'teacher', ref: 'w5d1-t2' }
          ]
        },
        {
          id: 'w4', short: 'AI feedback', minutes: 15, grouping: 'Groups of 3–4',
          title: 'Joint construction: Use the CET AI Agent',
          goal: 'Get AI feedback on one paragraph each, and keep it for later.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Each person takes <b>one paragraph</b> from your group essay.' },
              { who: 'alone', text: 'Open the CET AI Agent. Follow the automated <b>prompt instructions</b>: add the question, copy in the reading and listening texts, and the paragraph you want to review.' },
              { who: 'alone', text: 'Read the feedback: how well did you meet the criteria? What does it suggest? Write the main points below.' }
            ]},
            { type: 'tip', text: '<a href="https://app.cogniti.ai/agents/67b3f3ddeb50a217bae1c202/chat?k=yOLe1ZKWVc5atMqKejnT7cbeqhlpWmn34q_P9SgeM8E" target="_blank" rel="noopener"><b>Open the CET AI Agent</b></a> in a new tab. Use the buttons below to open and copy the course texts.' },
            { type: 'sources', ids: ['nicastro', 'aboutthat', 'berti', 'gunders'] },
            { type: 'fields', title: 'AI feedback — keep it for later', fields: [
              { id: 'w4-1', label: 'Which paragraph did I check?', placeholder: 'Body paragraph 1', rows: 1 },
              { id: 'w4-2', label: 'What did the AI Agent say we did well?', placeholder: 'Clear topic sentence…', rows: 3 },
              { id: 'w4-3', label: 'What did it suggest we improve?', placeholder: 'More evaluative language…', rows: 3 }
            ]},
            { type: 'tip', text: 'Put this aside — you will use it when you edit your essay at the end of today’s lesson.' },
            { type: 'teacher', ref: 'w5d1-t3' }
          ]
        },

        /* ── Deconstruction ── */
        {
          id: 'd1', short: 'Writer’s position', minutes: 5, grouping: 'Alone',
          title: 'Activity 1 Writer’s position',
          goal: 'Skim Sample essay 5.1 and find the writer’s position.',
          blocks: [
            { type: 'passage', id: 'd1p', gate: 'Write your group’s essay first (Joint construction). Then open IWA Sample 5.1.', title: 'IWA Sample 5.1 · 597 words', text: '¹A key factor in the issue of food insecurity is food wastage. ²Many businesses are working to minimize their waste and support consumers’ efforts through the application of new technologies. ³However, in contrast to action taken in the private sector, governments continue to lag far behind, failing to implement decisive and prompt measures to address the issue. ⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.<br><br>¹Government intervention, particularly in the consumption stage, is extremely important in preventing food waste. ²While consumers can take steps to minimise their household waste independently, this requires a proactive approach through conscious buying, eating, and disposal practices. ³Unfortunately, however, not enough consumers do this. ⁴In Europe, for instance, households are responsible for over 50% of all food waste, partly due to a lack of appreciation for the extensive resources required to produce food (Nicastro & Carillo, 2021). ⁵This is where there is a strong need for governments to step in and help change the wasteful attitudes towards food consumption through public awareness campaigns. ⁶Educating the public not only about the damaging impacts of food waste but also about the simple actions they can take to reduce their waste is crucial (Nicastro & Carillo, 2021). ⁷Gunders (2024) points out that new technologies, such as waste tracking apps, are also available to consumers and are effective but that progress to scale these solutions has been incredibly slow. ⁸She emphasises the need for greater government attention and investment to maximise the impact of these solutions and incentivise food businesses to innovate. ⁹Such an increase in government efforts to prevent waste would undoubtedly help drive consumer and business efforts.<br><br>¹When food waste cannot be prevented, then at least it could be more responsibly managed. ²That would require greater participation from government institutions. ³This is because they are primarily responsible for establishing waste legislation and financing initiatives that could encourage more efficient use of food resources. ⁴One solution that holds significant promise in reducing waste is the redistribution of excess food through food banks. ⁵For example, the Italian, community-based food bank, Magazaini Sociali, has successfully redistributed thousands of meals to local families in need (Berti et al., 2021). ⁶However, since food banks are usually managed by NGOs and rely on volunteer help and donations, they are often limited in their reach (Berti et al., 2021; About That, 2024). ⁷Greater monetary assistance from the government is essential to expand the scope and effectiveness of their operations (About That, 2024). ⁸Another area where governments could and should increase their efforts is policy. ⁹Regulation and tax incentives that encourage business participation in food donation programs could go a long way towards reducing the amount of food in landfill. ¹⁰As Gunters (2024) argues, although some countries already have laws to better track waste and reduce the amount going to landfills, all countries should be adopting similar measures. ¹¹This suggests that there is definite potential for governments to do more through such initiatives.<br><br>¹Overall, the issue of food waste demands greater government intervention. ²It is clear that robust government action in the form of investment, regulation and education is necessary to facilitate innovation and support solutions that are already making some progress towards preventing and managing food waste. ³Without the increased participation of governments, it will be extremely difficult to achieve sustainable development goals in relation to food security.' },
            { type: 'tip', text: '<b>2 minutes only.</b> Read just the thesis, the topic sentences and the concluding sentences. Don’t focus on the details yet.' },
            { type: 'quiz', id: 'd1q', items: [
              { q: 'What is the writer’s position in response to the question?', options: ['a) Governments need to significantly increase their efforts.', 'b) All actors in the food system should participate equally.', 'c) Businesses and consumers need to do more, not governments.', 'd) Governments are already doing enough.'], answer: 'a) Governments need to significantly increase their efforts.', why: '“They are the ones that need to considerably scale up their involvement” (introduction, S4) and “the issue of food waste demands greater government intervention” (conclusion, S1).' }
            ]},
            { type: 'teacher', ref: 'w5d1-t4' }
          ]
        },
        {
          id: 'd2', short: 'Paragraphs', minutes: 5, grouping: 'Pairs',
          title: 'Activity 2 Analysing rhetorical function',
          goal: 'Decide the main purpose (rhetorical function) of each paragraph.',
          blocks: [
            { type: 'key', title: 'The purpose of an argument essay', points: [
              'You <b>persuade</b> the reader of your position by presenting a <b>logical argument</b> AND supporting it with <b>evidence</b>.',
              'The building blocks of a logical argument are the <b>paragraphs</b>.',
              'Each paragraph — and each sentence in a paragraph — must have a specific <b>purpose</b> (rhetorical function).'
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Read each paragraph of Sample 5.1 again (Activity 1). Don’t focus on the details.' },
              { who: 'pair', text: 'Match each paragraph to its main purpose.' }
            ]},
            { type: 'sort', id: 'd2s', single: true, title: '1 · By paragraph: what is the purpose of each paragraph?', buckets: [
              { label: 'Introduction' }, { label: 'Body paragraph 1' }, { label: 'Body paragraph 2' }, { label: 'Conclusion' }
            ], items: [
              { text: 'Give the context (background) of the topic and the writer’s thesis/position', answer: 0 },
              { text: 'Present the first reason to support the thesis/position', answer: 1 },
              { text: 'Present the second reason to support the thesis/position', answer: 2 },
              { text: 'Re-state the thesis/position and supporting reasons + emphasise the importance of the thesis/position', answer: 3 }
            ]},
            { type: 'teacher', ref: 'w5d1-t5' }
          ]
        },
        {
          id: 'd3', short: 'Introduction', minutes: 8, grouping: 'Whole class',
          title: 'Activity 2 Analysing rhetorical function: Introduction',
          goal: 'Write the purpose of each sentence in the introduction and see how the sentences connect.',
          blocks: [
            { type: 'passage', id: 'd3p', gate: 'Open this after you have written your group essay.', title: 'IWA Sample 5.1 · Introduction', text: '¹A key factor in the issue of food insecurity is food wastage. ²Many businesses are working to minimize their waste and support consumers’ efforts through the application of new technologies. ³However, in contrast to action taken in the private sector, governments continue to lag far behind, failing to implement decisive and prompt measures to address the issue. ⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.' },
            { type: 'table', id: 'd3t', title: 'By sentence: the purpose of each sentence', columns: ['Sentence', 'Purpose (rhetorical function)'], fixed: ['S1', 'S2', 'S3', 'S4', 'S5'] },
            { type: 'quiz', id: 'd3q', title: 'Guiding questions', items: [
              { q: '1. What is the purpose of the first sentence (S1)?', options: ['To introduce the topic of food waste', 'To state the writer’s position', 'To give evidence from a source'], answer: 'To introduce the topic of food waste', why: '“A key factor in the issue of food insecurity is food wastage.”' },
              { q: '2. What is the purpose of the second sentence (S2)?', options: ['To narrow the focus to solutions', 'To restate the topic', 'To give the writer’s thesis'], answer: 'To narrow the focus to solutions', why: 'S2 narrows the focus to the action being taken by businesses (and consumers).' },
              { q: '3. What is being contrasted between S2 and S3? Which words tell us this?', options: ['The action taken by businesses (and consumers) versus the lack of action by governments — “However, in contrast to”', 'Prevention versus management of waste — “By doing so”', 'Consumers versus businesses — “Many”'], answer: 'The action taken by businesses (and consumers) versus the lack of action by governments — “However, in contrast to”', why: 'Businesses are acting, but governments “continue to lag far behind”.' },
              { q: '4. In which sentence is the writer’s position stated?', options: ['S3', 'S4', 'S5'], answer: 'S4', why: '“They are the ones that need to considerably scale up their involvement.”' },
              { q: '5. What are the reasons for the writer’s position?', options: ['Governments can have an impact across the supply chain (S4) in the prevention and management of waste (S5).', 'Governments have more money than businesses and consumers.', 'Businesses are not doing anything to reduce waste.'], answer: 'Governments can have an impact across the supply chain (S4) in the prevention and management of waste (S5).', why: 'S5 previews the two reasons: prevent waste and better manage waste.' }
            ]},
            { type: 'teacher', ref: 'w5d1-t6' }
          ],
          answers: { title: 'Purpose of each sentence', items: [
            ['S1', 'Introduce the topic: food waste'],
            ['S2', 'Narrow the focus: action being taken by businesses and consumers'],
            ['S3', '<b>BUT</b> governments are not keeping up'],
            ['S4', '<b>SO</b> writer’s position / thesis: they need to do a lot more'],
            ['S5', '<b>BECAUSE</b> 2 reasons (preview points): they can prevent and manage waste across the supply chain'],
            ['Paragraph', 'Give the context (background) of the topic and the writer’s thesis/position']
          ]}
        },
        {
          id: 'd4', short: 'Body 1', minutes: 12, grouping: 'Pairs',
          title: 'Activity 2 Analysing rhetorical function: Body paragraph 1',
          goal: 'Find the purpose of each sentence and the logical links between them.',
          blocks: [
            { type: 'passage', id: 'd4p', gate: 'Open this after you have written your group essay.', title: 'IWA Sample 5.1 · Body paragraph 1', text: '¹Government intervention, particularly in the consumption stage, is extremely important in preventing food waste. ²While consumers can take steps to minimise their household waste independently, this requires a proactive approach through conscious buying, eating, and disposal practices. ³Unfortunately, however, not enough consumers do this. ⁴In Europe, for instance, households are responsible for over 50% of all food waste, partly due to a lack of appreciation for the extensive resources required to produce food (Nicastro & Carillo, 2021). ⁵This is where there is a strong need for governments to step in and help change the wasteful attitudes towards food consumption through public awareness campaigns. ⁶Educating the public not only about the damaging impacts of food waste but also about the simple actions they can take to reduce their waste is crucial (Nicastro & Carillo, 2021). ⁷Gunders (2024) points out that new technologies, such as waste tracking apps, are also available to consumers and are effective but that progress to scale these solutions has been incredibly slow. ⁸She emphasises the need for greater government attention and investment to maximise the impact of these solutions and incentivise food businesses to innovate. ⁹Such an increase in government efforts to prevent waste would undoubtedly help drive consumer and business efforts.' },
            { type: 'table', id: 'd4t', title: 'By sentence: the purpose of each sentence', columns: ['Sentence', 'Purpose (rhetorical function)'], fixed: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9'] },
            { type: 'quiz', id: 'd4q', title: 'Guiding questions', items: [
              { q: '1. What is the purpose of the topic sentence?', options: ['To introduce the first reason why governments need to intervene, particularly in the consumption stage (preventing food waste)', 'To give evidence from Nicastro and Carillo', 'To restate the thesis'], answer: 'To introduce the first reason why governments need to intervene, particularly in the consumption stage (preventing food waste)', why: 'Topic sentence = reason 1: prevention of waste at the consumption stage.' },
              { q: '2. Why does the writer start sentence 2 with <b>While</b>?', options: ['It is a concession: consumers could take action without government intervention, as long as they are motivated.', 'It shows time: two things happen at the same time.', 'It gives a result of sentence 1.'], answer: 'It is a concession: consumers could take action without government intervention, as long as they are motivated.', why: 'The writer accepts another view before arguing against it.' },
              { q: '3. How is sentence 3 connected to the previous sentence? Which words show the connection?', options: ['It refutes the concession — “Unfortunately, however,…”', 'It gives an example — “for instance”', 'It adds a similar idea — “also”'], answer: 'It refutes the concession — “Unfortunately, however,…”', why: 'Consumers could act, BUT not enough of them do.' },
              { q: '4. Why does the writer include a reference in sentence 4?', options: ['To provide evidence to support the refutation in sentence 3 and an explanation of the reason', 'To introduce a new topic', 'To show the writer disagrees with Nicastro and Carillo'], answer: 'To provide evidence to support the refutation in sentence 3 and an explanation of the reason', why: 'Households are responsible for over 50% of food waste in Europe (Nicastro & Carillo, 2021).' },
              { q: '5. What is the purpose of sentences 5 and 6?', options: ['S5 is a consequence of consumers’ inaction (governments need to step in with campaigns); S6 explains how governments can do this.', 'S5 and S6 give two new reasons for the thesis.', 'S5 and S6 summarise the paragraph.'], answer: 'S5 is a consequence of consumers’ inaction (governments need to step in with campaigns); S6 explains how governments can do this.', why: '“This is where there is a strong need…” → “Educating the public… is crucial”.' },
              { q: '6. What is the purpose of sentence 7? Why is an internal (narrative) reference used here?', options: ['A small concession (back to S2): consumers could use new technologies — BUT uptake has been too slow. The internal reference highlights Gunders’ voice.', 'To conclude the paragraph; the internal reference is shorter.', 'To introduce reason 2; the internal reference shows disagreement.'], answer: 'A small concession (back to S2): consumers could use new technologies — BUT uptake has been too slow. The internal reference highlights Gunders’ voice.', why: '“Gunders (2024) points out that…”' },
              { q: '7. How is Gunders’ voice continued in sentence 8?', options: ['“She emphasises the need for…”', '“Such an increase…”', '“Unfortunately, however…”'], answer: '“She emphasises the need for…”', why: 'The pronoun “She” + a reporting verb continue the source’s voice.' },
              { q: '8. What is the purpose of the final sentence?', options: ['To conclude by summarising the evidence to support the writer’s position', 'To introduce a new source', 'To make a concession'], answer: 'To conclude by summarising the evidence to support the writer’s position', why: '“Such an increase in government efforts… would undoubtedly…”' }
            ]},
            { type: 'teacher', ref: 'w5d1-t7' }
          ],
          answers: { title: 'Purpose of each sentence', items: [
            ['S1', 'Topic sentence (reason 1): prevention of waste at the consumption stage'],
            ['S2', 'Concession: consumers could independently take action'],
            ['S3', '<b>BUT</b> few do <b>BECAUSE</b> it requires a proactive approach (S2)'],
            ['S4', 'Supporting evidence 1: consumers largely responsible for waste <b>BECAUSE</b> they lack understanding of resource use'],
            ['S5', '<b>SO</b> governments need to help change consumer behaviour through education'],
            ['S6', '<b>HOW</b>: by highlighting the damaging impacts of waste and possible actions'],
            ['S7', '<b>AND</b> supporting evidence 2: new tech is available to help <b>BUT</b> progress to adopt is slow'],
            ['S8', 'Supporting evidence 3: <b>SO</b> more government attention/investment needed'],
            ['S9', '<b>SO</b> consequence: government involvement would support other actors’ efforts'],
            ['Paragraph', 'Present the first reason to support the thesis/position']
          ]}
        },
        {
          id: 'd5', short: 'Body 2', minutes: 12, grouping: 'Pairs',
          title: 'Activity 2 Analysing rhetorical function: Body paragraph 2',
          goal: 'With your partner, identify the purpose of each sentence and the logical structure.',
          blocks: [
            { type: 'passage', id: 'd5p', gate: 'Open this after you have written your group essay.', title: 'IWA Sample 5.1 · Body paragraph 2', text: '¹When food waste cannot be prevented, then at least it could be more responsibly managed. ²That would require greater participation from government institutions. ³This is because they are primarily responsible for establishing waste legislation and financing initiatives that could encourage more efficient use of food resources. ⁴One solution that holds significant promise in reducing waste is the redistribution of excess food through food banks. ⁵For example, the Italian, community-based food bank, Magazaini Sociali, has successfully redistributed thousands of meals to local families in need (Berti et al., 2021). ⁶However, since food banks are usually managed by NGOs and rely on volunteer help and donations, they are often limited in their reach (Berti et al., 2021; About That, 2024). ⁷Greater monetary assistance from the government is essential to expand the scope and effectiveness of their operations (About That, 2024). ⁸Another area where governments could and should increase their efforts is policy. ⁹Regulation and tax incentives that encourage business participation in food donation programs could go a long way towards reducing the amount of food in landfill. ¹⁰As Gunters (2024) argues, although some countries already have laws to better track waste and reduce the amount going to landfills, all countries should be adopting similar measures. ¹¹This suggests that there is definite potential for governments to do more through such initiatives.' },
            { type: 'table', id: 'd5t', title: 'By sentence: the purpose of each sentence', columns: ['Sentence', 'Purpose (rhetorical function)'], fixed: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11'] },
            { type: 'quiz', id: 'd5q', title: 'Guiding questions', items: [
              { q: '1. How did the writer link the topic sentence to the previous paragraph?', options: ['By repeating the main idea of body 1 (prevention) and introducing an alternative if prevention is not possible (management)', 'By using the same source', 'By restating the thesis word for word'], answer: 'By repeating the main idea of body 1 (prevention) and introducing an alternative if prevention is not possible (management)', why: '“When food waste cannot be prevented, then at least it could be more responsibly managed.”' },
              { q: '2. How is sentence 2 connected to the previous sentence? Which words show the connection?', options: ['It gives a kind of consequence of the activity (management) in S1 — “That would require…”', 'It gives an example — “For example”', 'It contrasts — “However”'], answer: 'It gives a kind of consequence of the activity (management) in S1 — “That would require…”', why: '“That” refers back to managing waste.' },
              { q: '3. What is the purpose of sentence 3? What language tells you this?', options: ['To give reasons why governments need to be involved in managing the problem — “This is because…”', 'To give an example — “primarily”', 'To make a concession — “could”'], answer: 'To give reasons why governments need to be involved in managing the problem — “This is because…”', why: 'Governments make waste laws and finance initiatives.' },
              { q: '4. What is the purpose of sentences 4 and 5?', options: ['To introduce a possible solution (food banks) and a specific example of a successful one (Magazaini Sociali)', 'To show that food banks do not work', 'To restate reason 1'], answer: 'To introduce a possible solution (food banks) and a specific example of a successful one (Magazaini Sociali)', why: '“One solution that holds significant promise…” → “For example…”' },
              { q: '5. Why did the writer start sentence 6 with <b>However</b>?', options: ['To show a contrast: one successful food bank does not solve the problem, as resourcing is still an issue for most', 'To add another example', 'To conclude the paragraph'], answer: 'To show a contrast: one successful food bank does not solve the problem, as resourcing is still an issue for most', why: 'Food banks rely on volunteers and donations, so their reach is limited.' },
              { q: '6. What is the purpose of sentence 7?', options: ['To provide evidence of the importance of government assistance', 'To introduce policy', 'To give a concession'], answer: 'To provide evidence of the importance of government assistance', why: '“Greater monetary assistance from the government is essential…” (About That, 2024).' },
              { q: '7. What is the purpose of sentence 8?', options: ['To transition to another area (policy) where government assistance is important — linking back to S3', 'To summarise the evidence about food banks', 'To restate the thesis'], answer: 'To transition to another area (policy) where government assistance is important — linking back to S3', why: '“Another area where governments could and should increase their efforts is policy.”' },
              { q: '8. How does sentence 9 connect to the idea in the previous sentence?', options: ['It gives a positive consequence (less food in landfill) of governments regulating business', 'It gives a contrasting idea', 'It gives an example from a source'], answer: 'It gives a positive consequence (less food in landfill) of governments regulating business', why: '“…could go a long way towards reducing the amount of food in landfill.”' },
              { q: '9. What is the purpose of sentence 10? Why does the writer use <b>although</b>?', options: ['Evidence to support the thesis (more government involvement); “although” gives a concession (some governments already act)', 'To disagree with Gunders; “although” shows a result', 'To introduce reason 3; “although” adds information'], answer: 'Evidence to support the thesis (more government involvement); “although” gives a concession (some governments already act)', why: '“…although some countries already have laws…, all countries should be adopting similar measures.”' },
              { q: '10. What is the purpose of the final sentence? What language shows this?', options: ['To introduce a logical conclusion based on the evidence — “This suggests that…”', 'To give a new example — “such initiatives”', 'To make a concession — “definite”'], answer: 'To introduce a logical conclusion based on the evidence — “This suggests that…”', why: 'The writer draws a conclusion from the evidence in the paragraph.' }
            ]},
            { type: 'teacher', ref: 'w5d1-t8' }
          ],
          answers: { title: 'Purpose of each sentence', items: [
            ['S1', 'Topic sentence (reason 2): if not prevented, then better managed'],
            ['S2', '<b>SO</b> government involvement needed'],
            ['S3', '<b>BECAUSE</b> they can regulate and provide financial resources'],
            ['S4', 'One solution (to better management) = food banks'],
            ['S5', 'Example of a successful food bank'],
            ['S6', '<b>BUT</b> they are hard to scale <b>BECAUSE</b> of limited resources'],
            ['S7', '<b>SO</b> evidence for greater financial assistance from government'],
            ['S8', '<b>AND</b> policy is needed'],
            ['S9', 'To encourage business involvement <b>SO</b> landfill is reduced'],
            ['S10', 'Evidence (concession): some countries already enact laws to reduce waste <b>BUT</b> this should extend to all countries'],
            ['S11', '<b>SO</b> potential to do more'],
            ['Paragraph', 'Present the second reason to support the thesis/position']
          ]}
        },
        {
          id: 'd6', short: 'Conclusion', minutes: 8, grouping: 'Pairs',
          title: 'Activity 2 Analysing rhetorical function: Conclusion',
          goal: 'Compare the thesis in the introduction with the restated thesis in the conclusion.',
          blocks: [
            { type: 'passage', id: 'd6p', gate: 'Open this after you have written your group essay.', title: 'IWA Sample 5.1 · Introduction S4 and Conclusion — highlight the thesis and the restated thesis', text: '<b>Introduction</b><br>⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.<br><br><b>Conclusion</b><br>¹Overall, the issue of food waste demands greater government intervention. ²It is clear that robust government action in the form of investment, regulation and education is necessary to facilitate innovation and support solutions that are already making some progress towards preventing and managing food waste. ³Without the increased participation of governments, it will be extremely difficult to achieve sustainable development goals in relation to food security.' },
            { type: 'table', id: 'd6t', title: 'By sentence: the purpose of each sentence in the conclusion', columns: ['Sentence', 'Purpose (rhetorical function)'], fixed: ['S1', 'S2', 'S3'] },
            { type: 'quiz', id: 'd6q', title: 'Guiding questions', items: [
              { q: '1a. Where in the conclusion does the writer restate their position/thesis?', options: ['S1', 'S2', 'S3'], answer: 'S1', why: '“Overall, the issue of food waste demands greater government intervention.”' },
              { q: '1b. How does the writer paraphrase the thesis in the conclusion?', options: ['Changed order of information, synonyms (considerably scale up → greater; involvement → intervention) and nominalisation (they need to scale up → greater government intervention)', 'Only by adding “Overall”', 'By quoting the introduction'], answer: 'Changed order of information, synonyms (considerably scale up → greater; involvement → intervention) and nominalisation (they need to scale up → greater government intervention)', why: '“they… need to…” → “the issue demands…”.' },
              { q: '2. How does sentence 2 in the conclusion link back to the introduction?', options: ['It restates the two supporting reasons (prevention and management of waste) and how government action can support them (education, regulation and investment).', 'It introduces a new reason.', 'It gives new evidence from Gunders.'], answer: 'It restates the two supporting reasons (prevention and management of waste) and how government action can support them (education, regulation and investment).', why: '“…towards preventing and managing food waste.”' },
              { q: '3. What is the purpose of sentence 3?', options: ['To conclude by emphasising the importance of the thesis', 'To make a concession', 'To summarise a source'], answer: 'To conclude by emphasising the importance of the thesis', why: '“Without the increased participation of governments, it will be extremely difficult…”' }
            ]},
            { type: 'teacher', ref: 'w5d1-t9' }
          ],
          answers: { items: [
            ['Thesis → restated thesis', 'Introduction S4: “they are the ones that need to considerably scale up their involvement” → Conclusion S1: “the issue of food waste demands greater government intervention”.'],
            ['How it is paraphrased', 'Changed order of information: “they…… need to….” → “the issue demands…” · Synonyms: “considerably scale up” → “greater”; “involvement” → “intervention” · Nominalisation: “They… need to scale up” → “greater government intervention”.'],
            ['S1', 'Restatement of thesis'],
            ['S2', '<b>SO</b> summary of reasons (greater investment, regulation and education is needed to prevent and manage waste)'],
            ['S3', '<b>SO</b> must have more government involvement to achieve goals'],
            ['Paragraph', 'Re-state thesis/position and supporting reasons + emphasise the importance of the thesis/position']
          ]}
        },
        {
          id: 'd7', short: 'Text map', minutes: 10, grouping: 'Pairs',
          title: 'Activity 3 Text Map',
          goal: 'Fill in a text map of Sample 5.1 to see the whole argument on one page.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Use your analysis of each paragraph. Write <b>short notes</b>, not full sentences.' },
              { who: 'pair', text: 'Then compare with the text map in the answers.' }
            ]},
            { type: 'table', id: 'd7t', title: 'Sample 5.1 text map · Should governments do more to solve the problem of food waste?', columns: ['', 'Notes'], fixed: [
              'Introduction<br><small>context · thesis / position · preview of reasons</small>',
              'Body 1 · reason 1<br><small>topic sentence</small>',
              'Body 1 · support<br><small>concession · evidence · sources</small>',
              'Body 2 · reason 2<br><small>topic sentence</small>',
              'Body 2 · support<br><small>solutions · evidence · sources</small>',
              'Conclusion<br><small>restated thesis · summary of reasons · final comment</small>'
            ]},
            { type: 'tip', text: 'Time left? Make a text map of <b>your group’s essay</b> too (see the extra activity).' },
            { type: 'teacher', ref: 'w5d1-t10' }
          ],
          answers: { items: [
            ['Text map', '<img src="assets/week5/text-map-5-1.svg" alt="Text map of Sample 5.1: the thesis that governments need to considerably scale up their involvement, reason 1 (prevent waste at the consumption stage through education and investment, Nicastro and Carillo 2021, Gunders 2024), reason 2 (better manage waste through funding food banks and policy, Berti et al. 2021, About That 2024, Gunders 2024), and the conclusion.">'],
            ['Introduction', 'Businesses act, governments lag behind → thesis: governments need to considerably scale up their involvement → they can prevent and better manage waste.'],
            ['Body 1', 'Reason 1: prevent waste at the consumption stage. Concession: consumers could act alone, but not enough do (households > 50% of EU waste — Nicastro & Carillo, 2021) → public awareness campaigns / education; apps exist but progress is slow → more government attention and investment (Gunders, 2024).'],
            ['Body 2', 'Reason 2: if not prevented, better managed. Governments make laws and finance initiatives → food banks (Magazaini Sociali — Berti et al., 2021) are limited → more money needed (About That, 2024) → policy: regulation and tax incentives; laws in some countries should be in all (Gunders, 2024).'],
            ['Conclusion', 'Greater government intervention needed → investment, regulation, education → without it, SDGs will be extremely difficult to achieve.']
          ]}
        },

        /* ── Language focus ── */
        {
          id: 'l1', short: 'Evaluative language', minutes: 10, grouping: 'Pairs',
          title: 'Language focus: Using evaluative language to persuade the reader of your position',
          goal: 'Highlight the language the writer uses to express their position in the introduction.',
          blocks: [
            { type: 'tip', text: 'Last week you learned to take a stance and use <b>evaluative language</b> to express your position persuasively. Now see how the sample essay does it.' },
            { type: 'passage', id: 'l1p', gate: 'Open this after you have written your group essay.', title: '1 · Introduction — highlight the language that expresses the writer’s position. Any other evaluative language?', text: '¹A key factor in the issue of food insecurity is food wastage. ²Many businesses are working to minimize their waste and support consumers’ efforts through the application of new technologies. ³However, in contrast to action taken in the private sector, governments continue to lag far behind, failing to implement decisive and prompt measures to address the issue. ⁴As governments have the potential to influence all stages of the food supply chain, they are the ones that need to considerably scale up their involvement. ⁵By doing so, they could help prevent food waste from occurring in the first place and better manage the waste that is created.' },
            { type: 'quiz', id: 'l1q', items: [
              { q: 'Which words express the writer’s <b>position</b> (not just general evaluation)?', options: ['continue to lag far behind · failing to · decisive and prompt · need to considerably scale up', 'key · many', 'food insecurity · supply chain'], answer: 'continue to lag far behind · failing to · decisive and prompt · need to considerably scale up', why: 'These words judge governments and say what they should do. “key” and “many” are general evaluative language.' },
              { q: '<b>could help</b> prevent food waste (S5) is…', options: ['a modal — it shows possibility', 'a reporting verb', 'an attitude marker'], answer: 'a modal — it shows possibility', why: 'Modals such as could, would and should are part of the writer’s evaluation.' }
            ]},
            { type: 'teacher', ref: 'w5d1-t11' }
          ],
          answers: { items: [
            ['Writer’s position', 'However, in contrast to · continue to lag <b>far</b> behind · <b>failing to</b> implement · <b>decisive and prompt</b> measures · the potential to · they are the ones that <b>need to considerably scale up</b> · By doing so · <b>could help</b> · <b>better</b> manage'],
            ['General evaluative language', '<b>key</b> (factor) · <b>many</b> (businesses)']
          ]}
        },
        {
          id: 'l2', short: 'Language table', minutes: 20, grouping: 'Pairs',
          title: 'Language focus: Language reference table',
          goal: 'Find the evaluative language in the rest of the essay and sort it into the language reference table.',
          blocks: [
            { type: 'key', title: 'Writer’s voice or source’s voice?', points: [
              'The <b>writer’s voice</b> is in the sentences with <b>no reference</b>. Look there for language that expresses the writer’s position and general evaluative language.',
              'Evaluative language in ideas from sources usually reports the <b>source’s evaluation</b> — but the writer can choose it to support their position.',
              'Exception: “<b>As</b> Gunters (2024) <b>argues</b>, …” — the writer uses the source to support their own position.'
            ]},
            { type: 'passage', id: 'l2p1', gate: 'Open this after you have written your group essay.', title: 'Body paragraph 1', text: '¹Government intervention, particularly in the consumption stage, is extremely important in preventing food waste. ²While consumers can take steps to minimise their household waste independently, this requires a proactive approach through conscious buying, eating, and disposal practices. ³Unfortunately, however, not enough consumers do this. ⁴In Europe, for instance, households are responsible for over 50% of all food waste, partly due to a lack of appreciation for the extensive resources required to produce food (Nicastro & Carillo, 2021). ⁵This is where there is a strong need for governments to step in and help change the wasteful attitudes towards food consumption through public awareness campaigns. ⁶Educating the public not only about the damaging impacts of food waste but also about the simple actions they can take to reduce their waste is crucial (Nicastro & Carillo, 2021). ⁷Gunders (2024) points out that new technologies, such as waste tracking apps, are also available to consumers and are effective but that progress to scale these solutions has been incredibly slow. ⁸She emphasises the need for greater government attention and investment to maximise the impact of these solutions and incentivise food businesses to innovate. ⁹Such an increase in government efforts to prevent waste would undoubtedly help drive consumer and business efforts.' },
            { type: 'passage', id: 'l2p2', title: 'Body paragraph 2', text: '¹When food waste cannot be prevented, then at least it could be more responsibly managed. ²That would require greater participation from government institutions. ³This is because they are primarily responsible for establishing waste legislation and financing initiatives that could encourage more efficient use of food resources. ⁴One solution that holds significant promise in reducing waste is the redistribution of excess food through food banks. ⁵For example, the Italian, community-based food bank, Magazaini Sociali, has successfully redistributed thousands of meals to local families in need (Berti et al., 2021). ⁶However, since food banks are usually managed by NGOs and rely on volunteer help and donations, they are often limited in their reach (Berti et al., 2021; About That, 2024). ⁷Greater monetary assistance from the government is essential to expand the scope and effectiveness of their operations (About That, 2024). ⁸Another area where governments could and should increase their efforts is policy. ⁹Regulation and tax incentives that encourage business participation in food donation programs could go a long way towards reducing the amount of food in landfill. ¹⁰As Gunters (2024) argues, although some countries already have laws to better track waste and reduce the amount going to landfills, all countries should be adopting similar measures. ¹¹This suggests that there is definite potential for governments to do more through such initiatives.' },
            { type: 'passage', id: 'l2p3', title: 'Conclusion', text: '¹Overall, the issue of food waste demands greater government intervention. ²It is clear that robust government action in the form of investment, regulation, and education is necessary to facilitate innovation and support solutions that are already making some progress towards preventing and managing food waste. ³Without the increased participation of governments, it will be extremely difficult to achieve sustainable development goals in relation to food security.' },
            { type: 'table', id: 'l2t', title: '2–3 · Language reference table: Expressing your position persuasively', columns: ['', 'Adjectives', 'Adverbs', 'Verbs', 'Nouns', 'Signalling words & other expressions'], fixed: ['Evaluative', 'Modal', 'Hedging', 'Reporting', 'Attitude markers'] },
            { type: 'tip', text: 'Write the key word with its partner word in brackets, e.g. <i>key (factor)</i>, <i>extremely (important)</i>.' },
            { type: 'teacher', ref: 'w5d1-t12' }
          ],
          answers: { title: 'Language reference table (Teacher’s Book)', items: [
            ['Evaluative · adjectives', 'key (factor) · decisive &amp; prompt (measures) · better (manage) · proactive (approach) · conscious (buying) · strong (need) · wasteful (attitudes) · effective · greater (participation) · (more) efficient (use) · necessary · robust (government action)'],
            ['Evaluative · adverbs', 'considerably (scale up) · far (behind) · extremely (important) · independently · partly (due to) · incredibly (slow) · at least · (more) responsibly · primarily (responsible) · extremely (difficult)'],
            ['Evaluative · verbs', 'failing to · continue to lag · (This) suggests · (already) making some progress'],
            ['Evaluative · signalling words &amp; other expressions', 'However, in contrast to… · By doing so… · This is where… · However, since… · holds significant promise · go a long way · It is clear that… · Without the increased…'],
            ['Modal · verbs', 'could help · can take · could be · would require · could encourage · could &amp; should'],
            ['Hedging', '<b>Adjectives:</b> many (businesses) · not enough (consumers). <b>Nouns:</b> the potential to · (definite) potential'],
            ['Reporting · verbs', 'emphasises (the need for) · argues'],
            ['Attitude markers · adverbs', 'unfortunately · (would) undoubtedly'],
            ['Note: “partly”', 'Nicastro &amp; Carillo mention 2 reasons, but the writer has chosen to include only one here, so they used the word “partly”.']
          ]}
        },

        /* ── Compare the sample with your response ── */
        {
          id: 'c1', short: 'Compare 1', minutes: 10, grouping: 'Alone',
          title: 'Compare the sample with your response',
          goal: 'Make judgements: compare your essay with the sample and note questions for your teacher.',
          blocks: [
            { type: 'figure', src: 'assets/week3/feedback-literacy.svg', alt: 'The elements of feedback literacy, including making judgements about your own work.', caption: 'Today’s focus: Making judgements', size: 'small' },
            { type: 'steps', items: [
              { who: 'alone', text: 'Read your essay again. Answer Yes or No for each statement.' },
              { who: 'alone', text: 'Write any questions you want to ask your teacher. Ask them during the lesson — talking with your teacher is an important part of feedback.' }
            ]},
            { type: 'grid', id: 'c1g', title: '1 · Compare your essay with the sample', rows: [
              '1. My essay had the same position as the sample.',
              '2. My introduction had the same structure as the sample.',
              '3. My position statement (thesis) was expressed differently to that in the sample.',
              '4. My main ideas (reasons) were clearly expressed in the topic sentences.',
              '5. I can identify evaluative language I used in every paragraph of my essay to express my position.',
              '6. I included a concession in my essay.'
            ], columns: ['Yes / No'], options: ['Yes', 'No'] },
            { type: 'table', id: 'c1t', title: 'Questions I want to ask my teacher about this', columns: ['Statement', 'My question'], fixed: ['1 · Position', '2 · Introduction structure', '3 · Thesis', '4 · Topic sentences', '5 · Evaluative language', '6 · Concession'] },
            { type: 'teacher', ref: 'w5d1-t13' }
          ]
        },
        {
          id: 'c2', short: 'Compare 2', minutes: 15, grouping: 'Alone',
          title: 'Compare the sample with your response: Notice features of the sample',
          goal: 'Count some features in the sample and in your essay.',
          blocks: [
            { type: 'key', title: 'Remember', compare: [
              { label: 'External (parenthetical) citation', text: 'The reference is in brackets.', eg: '…is crucial (Nicastro & Carillo, 2021).' },
              { label: 'Internal (narrative) citation', text: 'The author is part of the sentence.', eg: 'Gunders (2024) points out that…' }
            ]},
            { type: 'table', id: 'c2t', title: '2 · Notice features of the sample and compare them to your essay', columns: ['Question', 'Your answer', 'Questions I want to ask my teacher about this'], fixed: [
              '1. How many external citations are there in the sample?',
              '2. How many external citations are there in your essay?',
              '3. How many internal citations are there in the sample?',
              '4. How many internal citations are there in your essay?',
              '5. How many sentences in the sample are in the writer’s voice?',
              '6. How many sentences in your essay are in the writer’s voice?',
              '7. How many of the sentences in the sample begin with conjunctions as linking words?',
              '8. How many of the sentences in your essay begin with conjunctions as linking words?'
            ]},
            { type: 'teacher', ref: 'w5d1-t14' }
          ],
          answers: { title: 'Our count for the sample', items: [
            ['1 · External citations', '5 sentences: Body 1 S4 and S6 (Nicastro &amp; Carillo, 2021) · Body 2 S5 (Berti et al., 2021), S6 (Berti et al., 2021; About That, 2024), S7 (About That, 2024).'],
            ['3 · Internal citations', '2: Gunders (2024) points out… (Body 1 S7) · As Gunters (2024) argues… (Body 2 S10). Gunders’ voice continues in Body 1 S8 (“She emphasises…”).'],
            ['5 · Writer’s voice', 'About 20 of the 28 sentences (all sentences without a source).'],
            ['7 · Linking words at the start', 'For example: However (Intro S3) · As (Intro S4) · While (Body 1 S2) · When (Body 2 S1) · However (Body 2 S6) · As (Body 2 S10). Other linking expressions: By doing so · Unfortunately, however · For example · Overall.'],
            ['Note', 'Your count may be a little different — it depends on what you count. Discuss it with your teacher.']
          ]}
        },
        {
          id: 'c3', short: 'Overall', minutes: 5, grouping: 'Alone',
          title: 'Compare the sample with your response: Overall comparison',
          goal: 'Note any other differences you want to talk to your teacher about.',
          blocks: [
            { type: 'fields', title: '3 · Overall comparison between the sample essay and your essay', fields: [
              { id: 'c3-1', label: 'Are there any other differences between the sample and your essay that you want to talk to your teacher about?', placeholder: 'The sample uses more… / My body paragraph 2…', rows: 4 }
            ]}
          ]
        },
        {
          id: 'c4', short: 'Rewrite', minutes: 25, grouping: 'Alone',
          title: 'Compare the sample with your response: Revising, editing or re-writing',
          goal: 'Edit and re-write part or all of your essay.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Look back at your comparisons (tasks 1–3), the <b>CET AI Agent</b> feedback and your teacher’s answers to your questions.' },
              { who: 'alone', text: 'Edit and re-write <b>part or all</b> of your original essay. Start with the part that needs the most work.' },
              { who: 'alone', text: 'Not finished? Finish it for homework — your teacher will check it tomorrow.' }
            ]},
            { type: 'fields', title: '4 · My revised writing', fields: [
              { id: 'c4-1', label: 'What I will change (and why)', placeholder: 'Topic sentence of body 2 — make reason 2 clearer…', rows: 3 },
              { id: 'c4-2', label: 'My revised paragraph(s) / essay', placeholder: 'Write your new version here…', rows: 14 }
            ]},
            { type: 'teacher', ref: 'w5d1-t15' }
          ]
        },
        {
          id: 'c5', short: 'Action plan', minutes: 5, grouping: 'Alone',
          title: 'Compare the sample with your response: Action planning',
          goal: 'Add your areas for improvement to your action plan.',
          blocks: [
            { type: 'fields', title: '5 · Action planning', fields: [
              { id: 'c5-1', label: 'Areas for improvement', placeholder: 'Express my position more clearly with evaluative language…', rows: 3 },
              { id: 'c5-2', label: 'What exactly I will do (and how I will check it)', placeholder: 'Before I submit, highlight the thesis and the restated thesis…', rows: 3 }
            ]}
          ]
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'My text map', minutes: 15, grouping: 'Groups of 3–4', category: 'Writing practice',
      title: 'Create a text map of your own essay',
      goal: 'Map your group essay the same way as Sample 5.1 — and find gaps in your argument.',
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
