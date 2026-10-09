/* DEC15 · Week 3, Day 1 — lesson content.
   Teacher’s Book: W3 D1 1A Academic writing skills workshop (210 min) + 2A Academic writing skills 1 (30 min).
   3A Homework (reporting verbs and referencing) is in extras.
   Protected texts (Sample 1.1, Sample 3.1, the DEC student paragraph, the Brick quote, the voices extract)
   are copied exactly from the Teacher’s Book. Sample 3.1 parts only appear AFTER a “write first” step. */

window.DEC15_LESSON = {
  id: 'w3d1',
  week: 3, day: 1,
  title: 'Write your first argument essay',
  duration: 'About 4 hours',
  question: 'How critical is addressing food waste as a strategy to combat global food insecurity?',
  questionKind: 'Essay question',
  questionLabel: 'This week’s essay question · you write it today',
  wordTarget: '450–600 words',
  image: 'assets/week3/hero-w3d1.svg',
  imageAlt: 'An essay page built in four coloured parts — introduction, body paragraph 1, body paragraph 2 and conclusion — with a fountain pen, a sticky note reading “because · but · so” and a speech bubble saying “In my view…”.',
  journey: 'Today you write Friday’s essay with a partner: introduction, body paragraphs and conclusion. After each part you compare your writing with a sample essay and improve it. Then you polish your academic style and learn to control the voices in your writing.',
  finish: { title: 'Tuesday', text: 'Reading & listening for solutions' },

  sections: [
    /* ───────────────────────── STAGE 1 · 1A introduction ───────────────────────── */
    {
      id: 'intro', number: '01', code: '1A', minutes: 60,
      tone: 'amber', art: 'writing',
      title: 'Writing an introduction',
      subtitle: 'Academic writing skills workshop',
      outcome: 'Identify the features of an introduction, write your own, and see how BECAUSE, BUT and SO build an argument.',
      activities: [
        {
          id: 'i1', short: 'Structure', minutes: 12, grouping: 'Alone → pair',
          title: 'Introduction structure',
          goal: 'Find the purpose of each sentence in the Week 1 sample introduction.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the introduction to <b>Sample 1.1</b> from Week 1. Look at the question first.' },
              { who: 'alone', text: 'Match each sentence (S1–S5) with its <b>purpose</b>.' },
              { who: 'pair', text: 'Compare with a partner. Then discuss: how does the writer <b>narrow the focus</b> from a big topic to their position? Then check.' }
            ]},
            { type: 'passage', id: 'i1p', title: 'Sample 1.1 · Introduction (Question: How do economic crises and conflict contribute to the poor health outcomes of food insecurity?)', text: '¹Local sustainable agriculture has historically promoted positive health outcomes by ensuring populations were food secure. ²This means that they had consistent access to an adequate supply of safe, nutritious food to support their growth and development (FAO, 2025). ³However, developments in technology and mechanization in the 20th century have given rise to large-scale industrial agriculture as a means of feeding a growing global population. ⁴Despite producing spectacular increases in yields, these gains have not translated to global food security because economic crises and conflict continues to seriously undermine long-term food production and distribution systems. ⁵These factors have had an adverse impact on both the quality and availability of food, leading to the coexistence of malnutrition and obesity.' },
            { type: 'grid', id: 'i1g', title: 'What is the purpose of each sentence?', rows: ['S1', 'S2', 'S3', 'S4', 'S5'], columns: ['Purpose'], options: [
              'Background: the topic in the past',
              'Definition of a key term',
              'The topic now: the reason industrial agriculture appeared',
              'Positive result BUT an issue → the writer’s position (thesis)',
              'Reasons (preview points): the impact of these factors'
            ], answers: [
              ['Background: the topic in the past'],
              ['Definition of a key term'],
              ['The topic now: the reason industrial agriculture appeared'],
              ['Positive result BUT an issue → the writer’s position (thesis)'],
              ['Reasons (preview points): the impact of these factors']
            ]},
            { type: 'figure', src: 'assets/week3/intro-funnel.svg', alt: 'An upside-down triangle in four layers: general statement, narrow the focus, thesis statement, preview.', caption: 'An introduction moves from general to specific.', credit: 'Based on the Teacher’s Book, W3 D1 1A' },
            { type: 'key', title: 'An introduction is a funnel', points: [
              'Start <b>general</b>: background or a problem.',
              '<b>Narrow the focus</b> to the part of the topic you will discuss.',
              'Give your <b>position (thesis)</b> — your answer to the question.',
              '<b>Preview</b> your reasons. Each reason becomes one body paragraph.'
            ]},
            { type: 'teacher', ref: 'w3d1-t1' }
          ],
          answers: { items: [
            ['Narrowing the focus', 'The writer starts with agriculture and food security in general (S1–S2). S3 moves to modern industrial agriculture. S4 narrows to two causes only — <b>economic crises and conflict</b> — and gives the position. S5 previews the two effects: the quality and availability of food.'],
            ['Signal words', '<i>However</i> (S3) and <i>Despite…, … because</i> (S4) turn the reader from the background to the issue and the position.']
          ]}
        },
        {
          id: 'i2', short: 'Position', minutes: 5, grouping: 'Pairs',
          title: 'Joint construction: remember your position',
          goal: 'Get your plan from Friday and agree on a position with your partner.',
          blocks: [
            { type: 'question' },
            { type: 'key', title: 'The Integrated Writing Assessment is an argument essay', points: [
              'In an argument essay, <b>you must have a position</b>. Every paragraph supports it.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Open your <b>essay plan</b> from Friday (Week 2 Day 5 → My notebook, or your paper plan).' },
              { who: 'pair', text: 'Sit with your writing partner or group. Tell each other your position. Agree on <b>one position</b> and <b>two reasons</b> for your joint essay.' }
            ]},
            { type: 'choose', id: 'i2pos', title: 'What was your position?', options: [
              'Addressing food waste is a critical part of the strategy to tackle food insecurity.',
              'Addressing food waste is only part of the strategy to tackle food insecurity.',
              'Addressing food waste is not a critical part of the strategy to tackle food insecurity.'
            ]},
            { type: 'fields', fields: [
              { id: 'i2-1', label: 'Our two reasons (from the plan)', placeholder: 'Reason 1: … Reason 2: …', rows: 2 }
            ]}
          ]
        },
        {
          id: 'i3', short: 'Joint construction', minutes: 20, grouping: 'Pairs or groups of 3',
          title: 'Joint construction',
          goal: 'Write a 4–6 sentence introduction that ends with your position and two reasons.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Answer the six questions below in <b>notes</b> (3 min).' },
              { who: 'pair', text: 'Turn your notes into an introduction. One person types; the other checks the plan. Swap after 2–3 sentences.' },
              { who: 'pair', text: 'Read it aloud. Is your <b>position</b> clear? Are your <b>two reasons</b> in the last sentence?' }
            ]},
            { type: 'cards', title: 'Six questions for your introduction', numbered: true, items: [
              { text: 'What is the <b>problem</b> or topic area?' },
              { text: 'What are the <b>reasons</b> for this?' },
              { text: 'What are the <b>consequences</b> of this?' },
              { text: 'Do you need to give a <b>definition</b> of any terms?' },
              { text: 'What is your <b>position</b> (argument), i.e. your answer to the question?' },
              { text: 'What <b>reasons</b> will you give for this argument?' }
            ]},
            { type: 'language', title: 'Useful language', groups: [
              { label: 'Problem and causes', phrases: ['Due to …, …', '… is caused by …', 'One reason for this is …'] },
              { label: 'Consequence', phrases: ['As a result, …', 'This has led to …', '…, which means that …'] },
              { label: 'Position and reasons', phrases: ['However, …', 'Although …, addressing food waste is …', 'This is because it would … and …'] }
            ]},
            { type: 'fields', fields: [
              { id: 'i3-1', label: 'Our notes (six questions)', placeholder: 'Problem: … Causes: … Consequence: … Definition? … Position: … Reasons: …', rows: 4 },
              { id: 'i3-2', label: 'Our introduction', placeholder: 'Write 4–6 sentences …', rows: 8 }
            ]},
            { type: 'key', tone: 'warn', title: 'Write first, compare later', points: [
              'Do <b>not</b> open Sample 3.1 yet. You will learn more if you compare it with <b>your own</b> introduction.'
            ]},
            { type: 'teacher', ref: 'w3d1-t2' }
          ]
        },
        {
          id: 'i4', short: 'Rhetorical function', minutes: 13, grouping: 'Pairs',
          title: 'Analysing rhetorical function',
          goal: 'Find the rhetorical function of each sentence and the language that signals it.',
          blocks: [
            { type: 'key', tone: 'warn', title: 'Only start when your introduction is written', points: [
              'Finished Activity 3? Then read the Sample 3.1 introduction.'
            ]},
            { type: 'key', title: 'Every paragraph and every sentence has a job', points: [
              'The <b>main purpose</b> of an argument essay is to <b>persuade the reader</b> of your position.',
              'You persuade with a <b>logical argument</b> AND <b>evidence</b>. The building blocks are the <b>paragraphs</b>.',
              'Each paragraph — and each sentence — has a <b>specific purpose</b> (a rhetorical function), e.g. <b>BECAUSE</b> (cause), <b>SO</b> (consequence), <b>BUT</b> (contrast).'
            ]},
            { type: 'passage', id: 'i4p', gate: 'Write your own introduction first (Activity 3). Then open the sample introduction and compare.', title: 'IWA Sample 3.1 · Introduction', text: '¹Due to the rapid rise in the world population, food production and distribution systems are coming under increasing pressure to meet global food demands. ²The Food and Agriculture Organization (FAO) reported in 2020 that a third of the global population was food insecure (Fotakis et al., 2024). ³Food insecurity can be attributed to various factors, including climate change, conflict, and economic crises, all of which have had a significant impact on food availability and accessibility. ⁴While these factors are important to address, central to the problem of food insecurity is mitigating food waste. ⁵This strategy would contribute substantially to the management of the climate crisis, a key driver of food insecurity in itself and would redistribute resources to effectively alleviate hunger.' },
            { type: 'grid', id: 'i4g', title: 'Find the sentence and its function', rows: [
              'Here is a problem',
              'And its consequence (issue)',
              'Here are some causes of the problem',
              'BUT an important cause that I’m going to focus on',
              'Here are the reasons why'
            ], columns: ['Sentence', 'Function'], options: ['S1', 'S2', 'S3', 'S4', 'S5', 'BECAUSE', 'BUT', 'SO'],
              given: { '0-1': '— (context)' },
              answers: [['S1', '— (context)'], ['S2', 'SO'], ['S3', 'BECAUSE'], ['S4', 'BUT'], ['S5', 'BECAUSE']] },
            { type: 'quiz', id: 'i4q', title: 'Which words signal the function?', shared: ['can be attributed to', 'While', 'This strategy would contribute substantially to', 'reported in 2020'], items: [
              { q: 'S3 gives the <b>causes</b> (BECAUSE). Which words signal this?', answer: 'can be attributed to', why: '“X can be attributed to Y” = Y causes X.' },
              { q: 'S4 turns to the writer’s focus (<b>BUT</b>). Which word signals the contrast?', answer: 'While', why: '“While these factors are important…, central to the problem… is…” accepts other causes, then focuses on food waste.' },
              { q: 'S5 gives the <b>reasons</b> for the position (BECAUSE). Which words introduce them?', answer: 'This strategy would contribute substantially to', why: 'This phrase introduces the two preview points: managing the climate crisis and alleviating hunger.' }
            ]},
            { type: 'teacher', ref: 'w3d1-t3' }
          ],
          answers: { items: [
            ['Main rhetorical functions', 'Explaining <b>consequences (SO)</b>, <b>causes (BECAUSE)</b> and <b>contrast (BUT)</b>.'],
            ['Problem', 'Global food system under pressure (S1).'],
            ['Consequence (issue)', '<b>So</b> … many people are food insecure (S2).'],
            ['Causes', '<b>Because</b> … climate change, conflict and economic crises (S3) — <i>can be attributed to</i>.'],
            ['Focus', '<b>But</b> mitigating food waste is central to the problem (S4) — <i>while</i>.'],
            ['Reasons', '<b>Because</b> it could manage the climate crisis and alleviate hunger by redistributing resources (S5) — <i>This strategy would contribute substantially to</i>.']
          ]}
        },
        {
          id: 'i5', short: 'Compare & edit', minutes: 10, grouping: 'Pairs',
          title: 'Compare and edit your introduction',
          goal: 'Compare the two samples with your introduction, then improve yours.',
          blocks: [
            { type: 'talk', title: 'Compare the two samples', prompts: [
              'What is the <b>same</b> in the introductions to Sample 1.1 and Sample 3.1?',
              'What is <b>different</b>? Think about how each one starts.'
            ]},
            { type: 'checklist', id: 'i5c', title: 'Now compare with your introduction', items: [
              'Our introduction has a similar structure (problem → causes/consequence → BUT → position → reasons).',
              'We noticed how our introduction is different.',
              'We compared how we expressed our position (thesis).',
              'We compared how we expressed our preview points (reasons).'
            ]},
            { type: 'fields', fields: [
              { id: 'i5-1', label: 'One change we made to our introduction, and why', placeholder: 'We changed … to … because …', rows: 3 }
            ]},
            { type: 'tip', text: 'Do not copy the sample. Use its <b>structure</b>, but keep your own ideas and words.' }
          ],
          answers: { items: [
            ['Same', 'Both use <b>BUT</b> to focus the reader on the writer’s position. Both state their position (thesis) and preview points.'],
            ['Different', '<b>Sample 1.1:</b> focus on consequences; starts with background to the topic and gives a definition. <b>Sample 3.1:</b> focus on causes; introduces a problem (with a consequence for relevance).']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 2 · 1A body paragraphs ───────────────────────── */
    {
      id: 'body', number: '02', code: '1A', minutes: 90,
      tone: 'teal', art: 'group',
      title: 'Writing body paragraphs',
      subtitle: 'Academic writing skills workshop',
      outcome: 'Write two body paragraphs that develop your reasons, and analyse how a sample connects ideas with causal language and cohesion.',
      activities: [
        {
          id: 'b1', short: 'Joint construction', minutes: 30, grouping: 'Pairs or groups of 3',
          title: 'Joint construction',
          goal: 'Develop each preview point into one body paragraph with evidence.',
          blocks: [
            { type: 'figure', src: 'assets/week3/essay-structure.svg', alt: 'Essay map: introduction with context, thesis and preview, then body 1 with reason 1 and evidence, body 2 with reason 2 and evidence, then a conclusion with restatement, summary and final comment. Labels BECAUSE, BUT and SO show the links.', caption: 'One reason = one body paragraph.' },
            { type: 'key', title: 'A body paragraph has three parts', points: [
              '<b>Topic sentence</b> — your reason (from your preview).',
              '<b>Explanation + evidence</b> — causes and consequences, with citations (author, year).',
              '<b>Concluding sentence</b> — link back to the question and your position.'
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: '<b>Body 1 (13 min).</b> Use your plan. Write the topic sentence first, then explain and add evidence.' },
              { who: 'pair', text: '<b>Body 2 (13 min).</b> Swap roles: the other person types.' },
              { who: 'pair', text: '<b>Check (4 min).</b> Underline your linking words. Does each new sentence start with <b>old information</b> (this…, these…, such…)?' }
            ]},
            { type: 'language', title: 'Linking ideas (from Week 1)', groups: [
              { label: 'Cause → effect', phrases: ['… leads to …', '… results in …', 'As a result, …', 'Consequently, …'] },
              { label: 'Adding and contrasting', phrases: ['Furthermore, …', 'In addition, …', 'However, …', 'While …, …'] },
              { label: 'Old → new links', phrases: ['This problem …', 'These foods …', 'Such emissions …'] }
            ]},
            { type: 'fields', fields: [
              { id: 'b1-1', label: 'Body paragraph 1', placeholder: 'Topic sentence: … Explanation and evidence (Author, year): … Concluding sentence: …', rows: 10 },
              { id: 'b1-2', label: 'Body paragraph 2', placeholder: 'Topic sentence: … Explanation and evidence (Author, year): … Concluding sentence: …', rows: 10 }
            ]},
            { type: 'key', tone: 'warn', title: 'Write first, compare later', points: [
              'Do <b>not</b> look at the Sample 3.1 body paragraphs until both of your paragraphs are written.'
            ]},
            { type: 'teacher', ref: 'w3d1-t4' }
          ]
        },
        {
          id: 'b2', short: 'Body 1', minutes: 25, grouping: 'Pairs → class',
          title: 'Analysing rhetorical function: body paragraph 1',
          goal: 'See how each sentence builds a logical chain of causes and consequences.',
          blocks: [
            { type: 'key', tone: 'warn', title: 'Only start when your body paragraphs are written', points: [
              'The sentences build the logical development of the paragraph. They must <b>connect logically</b> to each other.'
            ]},
            { type: 'passage', id: 'b2p', gate: 'Write your own two body paragraphs first (Activity 1). Then open Body paragraph 1 of the sample.', title: 'IWA Sample 3.1 · Body paragraph 1', text: '¹Managing food waste is crucial within the overall strategy to mitigate food insecurity because of its significant impact on the environment. ²This impact is particularly evident in the production stage of the food system. ³In this stage, the practice of discarding crops that do not meet aesthetic standards or that have become economically unviable to sell leads to substantial food loss (Our Changing Climate, 2020). ⁴Furthermore, the resources expended in the growing, harvesting, or transporting of these ultimately wasted foods add considerably to the overall carbon footprint of the food supply chain (Tchonkouang et al., 2023; Our Changing Climate, 2020). ⁵When this discarded produce ends up in landfill, it undergoes decomposition, releasing methane, a potent greenhouse gas, in the process (Royer, 2024; Our Changing Climate, 2020). ⁶The environmental impact is significant considering that food waste accounts for 8% of global greenhouse gas emissions (Our Changing Climate, 2020). ⁷Climate change, driven by global warming from such emissions, intensifies extreme weather events, adversely affecting agricultural productivity, and consequently overall food availability. ⁸Therefore, prioritizing efforts to avoid food loss at the production stage can curtail emissions and establish a more resource-efficient food system.' },
            { type: 'steps', items: [
              { who: 'pair', text: 'Match each sentence with its purpose (S1–S8).' },
              { who: 'pair', text: 'Answer the two questions about S3 and S4.' },
              { who: 'pair', text: 'Put the <b>causal chain</b> in S5–S7 in order. Highlight the causal language in the text (e.g. <i>ends up, releasing, driven by</i>).' },
              { who: 'class', text: 'Check together with your teacher.' }
            ]},
            { type: 'grid', id: 'b2g', title: 'What is the purpose of each sentence?', rows: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'], columns: ['Purpose'], options: [
              'Topic sentence: reason 1 — impact on the environment',
              'Narrow the focus to the production stage',
              'BECAUSE: why food loss happens (evidence)',
              'AND: other resources are wasted too → carbon footprint (evidence)',
              'SO: consequence — landfill → methane (evidence)',
              'How significant: 8% of global emissions (evidence)',
              'SO: consequence — climate change → less food available',
              'SO: concluding sentence — link back to the position'
            ], answers: [
              ['Topic sentence: reason 1 — impact on the environment'],
              ['Narrow the focus to the production stage'],
              ['BECAUSE: why food loss happens (evidence)'],
              ['AND: other resources are wasted too → carbon footprint (evidence)'],
              ['SO: consequence — landfill → methane (evidence)'],
              ['How significant: 8% of global emissions (evidence)'],
              ['SO: consequence — climate change → less food available'],
              ['SO: concluding sentence — link back to the position']
            ]},
            { type: 'quiz', id: 'b2q', title: 'Two questions', items: [
              { q: 'S3: Which phrase links the cause (discarding crops) to the result (food loss)?', options: ['the practice of', 'leads to', 'in this stage'], answer: 'leads to', why: 'Food loss happens because imperfect produce doesn’t sell as well, and if production costs are higher than the selling price, it is not worth harvesting. “Leads to” links the cause and the result.' },
              { q: 'S4: Why did the writer include “Furthermore”?', options: ['To give a contrast', 'To add that other resources are also wasted when food loss occurs', 'To give an example'], answer: 'To add that other resources are also wasted when food loss occurs', why: '“Furthermore” adds a point that supports the previous one.' }
            ]},
            { type: 'order', id: 'b2o', title: 'The causal chain in S5–S7: put the steps in order', items: [
              'Discarded produce ends up in landfill',
              'It decomposes and releases methane, a potent greenhouse gas',
              'Greenhouse gas emissions (food waste = 8% of global emissions)',
              'Global warming → climate change intensifies extreme weather events',
              'Agricultural productivity is adversely affected',
              'Overall food availability falls'
            ], ends: ['Start', 'End'], why: 'Causal language: <i>ends up in · undergoes decomposition · releasing · driven by · intensifies · adversely affecting · consequently</i>.' },
            { type: 'teacher', ref: 'w3d1-t5' }
          ],
          answers: { items: [
            ['Purpose of S5–S7', 'They explain the <b>chain of consequences</b> when food is discarded at the production stage, as it relates to the environment.'],
            ['Purpose of S8', 'The <b>concluding sentence</b>: it links back to the question and the writer’s thesis (“Therefore, prioritizing efforts…”).'],
            ['Paragraph purpose', 'Introduce the first reason to support the position.']
          ]}
        },
        {
          id: 'b3', short: 'Body 2', minutes: 20, grouping: 'Pairs',
          title: 'Analysing rhetorical function: body paragraph 2',
          goal: 'Find the purpose of each sentence and the words that hold the paragraph together.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Now do body paragraph 2 <b>without help</b>. Match each sentence with its purpose.' },
              { who: 'pair', text: 'Cohesion: find the <b>summary phrases</b> and <b>referents</b> (this…, such…, it…). What do they refer back to?' },
              { who: 'class', text: 'Review as a class.' }
            ]},
            { type: 'passage', id: 'b3p', gate: 'Open this after you have written your body paragraphs and analysed Body paragraph 1.', title: 'IWA Sample 3.1 · Body paragraph 2', text: '¹Addressing the problem of food waste through better management and distribution of resources is also important because it has the potential to directly alleviate hunger. ²Estimates from the FAO reveal that approximately 30% of all food produced worldwide is not consumed (Our Changing Climate, 2020). ³While this food wastage occurs at various points in the supply chain, a large amount of perfectly edible food is thrown away by consumers. ⁴Consumer preference for attractive produce and the tendency to over purchase and let food spoil are some of the behavioural patterns that have led to the unnecessary discarding of food (Tchonkouang et al., 2023; Our Changing Climate, 2020). ⁵However, with the adoption of more sustainable consumption habits and redistribution programs, a significant amount of food could be redirected from waste streams to improve overall food availability in underserved populations (Royer, 2024). ⁶This redistribution could be particularly impactful in developed countries where surplus food from restaurants, retail, and households could be channeled to food banks to provide immediate relief. ⁷In fact, if the food waste generated in Australia were cut by one third, the amount saved could adequately feed 921,000 people for a year (Tchonkouang et al., 2023), demonstrating the importance of food conservation as a means of combating hunger.' },
            { type: 'grid', id: 'b3g', title: 'What is the purpose of each sentence?', rows: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'], columns: ['Purpose'], options: [
              'Topic sentence: reason 2 — alleviate hunger through better resource management',
              'Evidence of the amount of food wasted',
              'Narrow the focus to food waste at the consumption stage',
              'BECAUSE of consumer behaviour',
              'BUT changing behaviour and redistributing food could improve food availability (evidence)',
              'AND it could be particularly impactful in developed countries',
              'AND an example of how impactful → SO important to help reduce hunger'
            ], answers: [
              ['Topic sentence: reason 2 — alleviate hunger through better resource management'],
              ['Evidence of the amount of food wasted'],
              ['Narrow the focus to food waste at the consumption stage'],
              ['BECAUSE of consumer behaviour'],
              ['BUT changing behaviour and redistributing food could improve food availability (evidence)'],
              ['AND it could be particularly impactful in developed countries'],
              ['AND an example of how impactful → SO important to help reduce hunger']
            ]},
            { type: 'quiz', id: 'b3q', title: 'Cohesion: what do these words refer back to?', items: [
              { q: 'Body 1, S2: “<b>This impact</b> is particularly evident…”', options: ['the impact on the environment (S1)', 'food loss (S3)', 'the carbon footprint (S4)'], answer: 'the impact on the environment (S1)', why: 'A summary phrase: “this + noun” repeats the idea at the end of S1.' },
              { q: 'Body 1, S5: “When <b>this discarded produce</b> ends up in landfill…”', options: ['crops thrown away because they do not look perfect or are not profitable', 'methane', 'food bought by consumers'], answer: 'crops thrown away because they do not look perfect or are not profitable', why: 'It sums up “discarding crops that do not meet aesthetic standards or… economically unviable to sell” (S3).' },
              { q: 'Body 1, S7: “…global warming from <b>such emissions</b>…”', options: ['greenhouse gas emissions from food waste (S5–S6)', 'transport costs', 'extreme weather events'], answer: 'greenhouse gas emissions from food waste (S5–S6)', why: '“Such” points back to the methane and the 8% of global emissions.' },
              { q: 'Body 2, S6: “<b>This redistribution</b> could be particularly impactful…”', options: ['redirecting food from waste streams to underserved populations (S5)', 'consumer preference for attractive produce (S4)', 'food thrown away by consumers (S3)'], answer: 'redirecting food from waste streams to underserved populations (S5)', why: 'The summary phrase turns the idea of S5 into a noun, so S6 can build on it.' }
            ]},
            { type: 'key', title: 'Old → new: summary phrases and referents', points: [
              'Start a sentence with a <b>summary phrase</b> (<i>this impact, this redistribution</i>) or a <b>referent</b> (<i>it, its, such</i>) to link back to the last idea. Then add the new information.'
            ]},
            { type: 'teacher', ref: 'w3d1-t6' }
          ],
          answers: { items: [
            ['More referents', 'Body 1: <i>its</i> (S1), <i>this stage</i> (S3), <i>these ultimately wasted foods</i> (S4). Body 2: <i>it</i> (S1), <i>this food wastage</i> (S3).'],
            ['Paragraph purpose', 'Introduce the second reason to support the position.']
          ]}
        },
        {
          id: 'b4', short: 'Compare & edit', minutes: 15, grouping: 'Pairs → class',
          title: 'Compare and edit your body paragraphs',
          goal: 'Compare your paragraphs with the sample, then edit for coherence and cohesion.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Answer the questions for Sample 3.1 and for <b>your essay</b>.' },
              { who: 'pair', text: 'Edit your body paragraphs in Activity 1: add a missing link, fix a topic sentence, or add a concluding sentence.' },
              { who: 'class', text: 'Your teacher shows one or two student paragraphs. Give feedback together.' }
            ]},
            { type: 'table', id: 'b4t', title: 'Feedback and reflection', columns: ['Question', 'Sample 3.1', 'Our essay'], fixed: [
              'Did each topic sentence introduce the main idea of the paragraph?',
              'Did all sentences in each paragraph relate to the main idea of the paragraph?',
              'Did the concluding statements in each body paragraph link back to the question and writer’s position?',
              'How many sentences are in the writer’s voice?',
              'How many internal citations are there?',
              'How many external citations are there?'
            ]},
            { type: 'tip', text: '<b>Internal citation:</b> the author is part of the sentence — <i>Royer (2024) states…</i>. <b>External citation:</b> the reference is in brackets at the end — <i>…(Royer, 2024).</i>' },
            { type: 'teacher', ref: 'w3d1-t7' }
          ],
          answers: { title: 'Sample 3.1 (body paragraphs)', items: [
            ['Topic sentences / main idea / concluding statements', 'Yes. Each topic sentence gives one reason; every sentence develops it; Body 1 S8 and the end of Body 2 S7 link back to the position.'],
            ['Writer’s voice', 'About 7 sentences have no citation: Body 1 S1, S2, S7, S8 and Body 2 S1, S3, S6 — plus the final clause of Body 2 S7.'],
            ['Internal citations', 'None with the author as the subject. Body 2 S2 names the FAO inside the sentence (“Estimates from the FAO reveal…”).'],
            ['External citations', '8 sentences end with a citation in brackets (Body 1 S3–S6; Body 2 S2, S4, S5, S7). Three are multi-source citations with a semicolon.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 3 · 1A conclusion, coherence, style ───────────────────────── */
    {
      id: 'close', number: '03', code: '1A', minutes: 60,
      tone: 'plum', art: 'feedback',
      title: 'Writing a conclusion',
      subtitle: 'Academic writing skills workshop · coherence · academic style',
      outcome: 'Write a conclusion, check that your position is clear and consistent, and edit informal language into academic style.',
      activities: [
        {
          id: 'c1', short: 'Structure', minutes: 10, grouping: 'Alone → pair',
          title: 'Conclusion structure',
          goal: 'See how the Week 1 sample restates its thesis and reasons.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the <b>thesis</b> in the introduction (S4–S5). Then read the conclusion.' },
              { who: 'alone', text: 'Highlight where the conclusion <b>restates the position</b>. Answer the questions.' },
              { who: 'pair', text: 'Compare. How did the writer <b>paraphrase</b> the position? Find two changed words.' }
            ]},
            { type: 'passage', id: 'c1p1', title: 'Sample 1.1 · Introduction', text: '¹Local sustainable agriculture has historically promoted positive health outcomes by ensuring populations were food secure. ²This means that they had consistent access to an adequate supply of safe, nutritious food to support their growth and development (FAO, 2025). ³However, developments in technology and mechanization in the 20th century have given rise to large-scale industrial agriculture as a means of feeding a growing global population. ⁴Despite producing spectacular increases in yields, these gains have not translated to global food security because economic crises and conflict continues to seriously undermine long-term food production and distribution systems. ⁵These factors have had an adverse impact on both the quality and availability of food, leading to the coexistence of malnutrition and obesity.' },
            { type: 'passage', id: 'c1p2', title: 'Sample 1.1 · Conclusion', text: '¹In conclusion, economic crises and conflict play detrimental roles in exacerbating poor health outcomes linked to food insecurity by disrupting the availability and quality of food. ²Economic downturns force low-income families to depend on less nutritious, highly processed foods and conflicts disrupt agricultural production and distribution, resulting in acute food shortages that drive malnutrition. ³These conditions hinder physical and cognitive development in children and induce long-term psychological and physiological health issues into adulthood. ⁴Addressing these underlying causes through robust policy interventions and international cooperation is crucial to improving food security and health outcomes globally.' },
            { type: 'quiz', id: 'c1q', items: [
              { q: 'Where does the writer restate the position (thesis)?', options: ['Conclusion S1', 'Conclusion S3', 'Conclusion S4'], answer: 'Conclusion S1', why: '“In conclusion, economic crises and conflict play detrimental roles…” paraphrases intro S4–S5.' },
              { q: 'How do sentences 2 and 3 of the conclusion link back to the introduction?', options: ['They give new evidence', 'They restate (paraphrase) the two main supporting reasons', 'They define food security'], answer: 'They restate (paraphrase) the two main supporting reasons', why: 'They sum up the two body paragraphs: economic crises and conflict.' },
              { q: 'What is the purpose of sentence 4?', options: ['A final message: why addressing the causes matters, with a possible solution', 'A new reason', 'A definition'], answer: 'A final message: why addressing the causes matters, with a possible solution', why: 'It highlights the importance of addressing these causes and suggests a solution (policy and international cooperation).' }
            ]}
          ],
          answers: { items: [
            ['Paraphrasing the thesis', 'Intro: “economic crises and conflict continues to seriously undermine… an adverse impact on both the quality and availability of food” → Conclusion: “economic crises and conflict play detrimental roles… by disrupting the availability and quality of food”.']
          ]}
        },
        {
          id: 'c2', short: 'Joint construction', minutes: 12, grouping: 'Pairs or groups of 3',
          title: 'Joint construction',
          goal: 'Write a 3–4 sentence conclusion with no new information.',
          blocks: [
            { type: 'figure', src: 'assets/week3/conclusion-structure.svg', alt: 'How a conclusion works: it mirrors the introduction. 1 restate your position in new words; 2 sum up the main reasons, one for each body paragraph; 3 a final message: why it matters, a recommendation or an implication. No new evidence and no new reasons.', caption: 'Plan your conclusion in three moves', size: 'wide' },
            { type: 'key', title: 'A conclusion has three parts', numbered: true, points: [
              '<b>Restate your position</b> in new words.',
              '<b>Summarise your two reasons</b>.',
              '<b>Final comment</b> — an implication, a solution or a call to action.'
            ]},
            { type: 'language', title: 'Useful language', groups: [
              { label: 'Restate', phrases: ['In conclusion, …', 'Overall, it is clear that …', 'Although … is not the only …, it …'] },
              { label: 'Summarise', phrases: ['By reducing …, it would … and …', 'This would not only … but also …'] },
              { label: 'Final comment', phrases: ['Therefore, … is essential for …', 'This could lead to a more … food system.'] }
            ]},
            { type: 'fields', fields: [
              { id: 'c2-1', label: 'Our conclusion', placeholder: 'Restate: … Summary: … Final comment: …', rows: 6 }
            ]},
            { type: 'key', tone: 'warn', title: 'No new evidence', points: [
              'Do <b>not</b> add new information or citations in the conclusion. And don’t look at the Sample 3.1 conclusion yet!'
            ]}
          ]
        },
        {
          id: 'c3', short: 'Rhetorical function', minutes: 8, grouping: 'Pairs',
          title: 'Analysing rhetorical function',
          goal: 'Find the three key features and the BUT and SO functions.',
          blocks: [
            { type: 'key', tone: 'warn', title: 'Only start when your conclusion is written', points: [
              'Finished Activity 2? Then read the Sample 3.1 conclusion.'
            ]},
            { type: 'passage', id: 'c3p', gate: 'Write your own conclusion first (Activity 2). Then open the sample conclusion and compare.', title: 'IWA Sample 3.1 · Conclusion', text: '¹While food waste is not the only factor contributing to food insecurity, it represents a pivotal and actionable area where improvements can help conserve resources and increase food availability. ²Globally, redirecting all the food that is annually discarded into landfills could potentially feed millions and significantly reduce emissions. ³Addressing food waste is therefore not only a crucial element in tackling climate change and, in turn, ensuring food security, but also a sustainable practice that will promote a more efficient and equitable food system.' },
            { type: 'grid', id: 'c3g', title: 'Find the three key features', rows: ['S1', 'S2', 'S3'], columns: ['Feature'], options: [
              'Restatement of thesis (concession: other factors BUT food waste is important)',
              'Summary of reasons',
              'SO: final comment — a potential implication'
            ], answers: [
              ['Restatement of thesis (concession: other factors BUT food waste is important)'],
              ['Summary of reasons'],
              ['SO: final comment — a potential implication']
            ]},
            { type: 'talk', title: 'Compare with your conclusion', prompts: [
              'Did your conclusion have a similar structure?',
              'Did you restate your thesis and main arguments as in the sample?',
              'Was your final comment similar or different?'
            ]},
            { type: 'tip', text: 'Now go back to Activity 2 and <b>edit your conclusion</b> as needed.' },
            { type: 'teacher', ref: 'w3d1-t8' }
          ],
          answers: { items: [
            ['S1', 'Concession: there are other factors <b>BUT</b> addressing food waste is important and actionable (restatement of the writer’s position). Signal: <i>While</i>.'],
            ['S2', 'Summary of reasons: feed millions (hunger) and reduce emissions (climate).'],
            ['S3', '<b>SO</b> final comment. Signal: <i>therefore</i>.'],
            ['Paragraph purpose', 'Re-state the thesis/position and supporting reasons + emphasise the importance of the thesis/position.']
          ]}
        },
        {
          id: 'c4', short: 'Coherence', minutes: 10, grouping: 'Pairs',
          title: 'Overall rhetorical purpose – Checking for coherence',
          goal: 'Identify the purpose of each paragraph and check your position all the way through.',
          blocks: [
            { type: 'grid', id: 'c4g', title: 'Sample 3.1: the purpose of each paragraph', rows: ['Introduction', 'Body 1', 'Body 2', 'Conclusion'], columns: ['Rhetorical purpose'], options: [
              'Give the context (background) of the topic and the writer’s thesis/position',
              'Introduce the first reason to support position',
              'Introduce the second reason to support position',
              'Re-state thesis/position and supporting reasons + emphasise the importance of thesis/position'
            ], answers: [
              ['Give the context (background) of the topic and the writer’s thesis/position'],
              ['Introduce the first reason to support position'],
              ['Introduce the second reason to support position'],
              ['Re-state thesis/position and supporting reasons + emphasise the importance of thesis/position']
            ]},
            { type: 'talk', title: 'Discuss with your partner', prompts: [
              'How is the sample organised?',
              'Where do you find reference to the writer’s position in the essay?',
              'Is <b>your</b> position clear and consistent throughout your essay?',
              'Did you cover all the points in your plan?'
            ]},
            { type: 'checklist', id: 'c4c', title: 'Our essay', items: [
              'Our position is in the introduction, and the conclusion restates it.',
              'Each topic sentence and concluding sentence links to our position.',
              'We covered all the points in our plan.',
              'Our essay is 450–600 words.'
            ]}
          ],
          answers: { items: [
            ['Organisation', 'Introduction → Body 1 (reason 1: environment) → Body 2 (reason 2: hunger) → Conclusion.'],
            ['The writer’s position', 'Introduction S4–S5; the topic sentences (Body 1 S1, Body 2 S1); the concluding sentences (Body 1 S8, end of Body 2 S7); Conclusion S1 and S3.']
          ]}
        },
        {
          id: 'c5', short: 'Academic style', minutes: 20, grouping: 'Alone → pair',
          title: 'Language focus – Academic style',
          goal: 'Notice how a teacher’s feedback made a student paragraph more academic.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the <b>original</b> body paragraph 1 by a DEC student. Then read the <b>edited version</b> (after teacher feedback).' },
              { who: 'pair', text: 'Match each original phrase with its edited version.' },
              { who: 'pair', text: 'Guess: what was the <b>teacher’s feedback</b>? Write 3–4 rules. Then find two informal phrases in <b>your</b> essay and change them.' }
            ]},
            { type: 'passage', id: 'c5p1', title: 'Original text', text: '¹Handling food waste is important for reducing hunger because it greatly affects the environment. ²This is especially true during the stage where food is produced. ³At this point, throwing away crops that don’t look right or can’t be sold profitably leads to a lot of wasted food. ⁴Also the energy used in picking, moving, and packaging these foods that end up being thrown away increases the carbon footprint of the food supply chain. ⁵When this unused food sits in landfills, it breaks down and releases methane, which is a much stronger greenhouse gas than carbon dioxide. ⁶The environmental impact is big since food waste makes up 8% of the world’s greenhouse gas emissions. ⁷These emissions contribute to climate change, which then harms crop production through extreme weather, reducing the amount of food available. ⁸By focusing on reducing food waste at this early stage, we will lessen the need for more production and lower emissions, leading to a more efficient use of resources and more stable food supplies. So, focusing on stopping food waste early in the supply chain will cut down on emissions and lead to a more efficient use of resources.' },
            { type: 'passage', id: 'c5p2', title: 'Edited version (references removed)', text: '¹Managing food waste is crucial within the overall strategy to mitigate food insecurity because of its significant impact on the environment. ²This impact is particularly evident in the production stage of the food system. ³In this stage, the practice of discarding crops that do not meet aesthetic standards or that have become economically unviable to sell leads to substantial food loss. ⁴Furthermore, the resources expended in the growing, harvesting, or transporting of these ultimately wasted foods add considerably to the overall carbon footprint of the food supply chain. ⁵When this discarded produce ends up in landfill, it undergoes decomposition, releasing methane, a potent greenhouse gas, in the process. ⁶The environmental impact is significant considering that food waste accounts for 8% of global greenhouse gas emissions. ⁷Climate change, driven by global warming from such emissions, intensifies extreme weather events, adversely affecting agricultural productivity, and consequently overall food availability. ⁸Therefore, prioritizing efforts to avoid food loss at the production stage can curtail emissions and establish a more resource-efficient food system.' },
            { type: 'grid', id: 'c5g', title: 'Original → edited', rows: [
              'because it greatly affects the environment',
              'This is especially true',
              'throwing away crops',
              'don’t look right',
              'can’t be sold profitably',
              'Also',
              'The energy used',
              'It breaks down',
              'The environmental impact is big since',
              'harms crop production',
              'So, focusing on',
              'cut down on',
              'lead to'
            ], columns: ['Edited'], options: [
              'adversely affects agricultural productivity',
              'because of its substantial impact on the environment',
              'curtail',
              'do not meet aesthetic standards',
              'economically unviable to sell',
              'establish',
              'Furthermore,',
              'the practice of discarding crops',
              'The environmental impact is significant considering',
              'The resources expended',
              'Therefore, prioritising',
              'This impact is particularly evident',
              'undergoes decomposition'
            ], answers: [
              ['because of its substantial impact on the environment'],
              ['This impact is particularly evident'],
              ['the practice of discarding crops'],
              ['do not meet aesthetic standards'],
              ['economically unviable to sell'],
              ['Furthermore,'],
              ['The resources expended'],
              ['undergoes decomposition'],
              ['The environmental impact is significant considering'],
              ['adversely affects agricultural productivity'],
              ['Therefore, prioritising'],
              ['curtail'],
              ['establish']
            ]},
            { type: 'key', title: 'Academic style is part of your Vocabulary mark', points: [
              'The rubric (Vocabulary, 66–70) asks for “appropriate formality”. Lower bands say “style is generally informal” or “frequent lapses in formality”.',
              'Choose <b>one formal verb</b>, not a phrasal verb: <s>cut down on</s> → <b>curtail</b>.'
            ]},
            { type: 'fields', fields: [
              { id: 'c5-1', label: 'What do you think the teacher feedback was?', placeholder: '1. Use … instead of … 2. … 3. …', rows: 4 },
              { id: 'c5-2', label: 'Two changes to our essay', placeholder: '“…” → “…”', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w3d1-t9' }
          ],
          answers: { title: 'The teacher’s feedback', items: [
            ['1', 'Use formal verbs instead of two-word (phrasal) verbs (<i>cut down on</i> → <i>curtail</i>; <i>breaks down</i> → <i>undergoes decomposition</i>).'],
            ['2', 'Use the full form of verbs, not contractions (<i>don’t</i> → <i>do not</i>).'],
            ['3', 'Use formal vocabulary (<i>big</i> → <i>significant</i>; <i>harms crop production</i> → <i>adversely affects agricultural productivity</i>).'],
            ['4', 'Use appropriate linking words — avoid starting a sentence with “So” (→ <i>Therefore,</i>).'],
            ['Also notice', 'The edited version uses noun phrases (<i>the practice of discarding crops</i>), avoids “we”, and does not repeat the last idea twice.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 4 · 2A voices ───────────────────────── */
    {
      id: 'voices', number: '04', code: '2A', minutes: 30,
      tone: 'green', art: 'research',
      title: 'Academic writing skills 1',
      subtitle: 'Your voice and source voices',
      outcome: 'Understand how different voices are used in academic writing, and how your own voice drives the argument.',
      activities: [
        {
          id: 'v1', short: 'Activity 1', minutes: 8, grouping: 'Groups of 3',
          title: 'Activity 1: academic writing is a dialogue',
          goal: 'Understand why we must show whose ideas are whose.',
          blocks: [
            { type: 'model', title: 'Brick (2011, p.107)', text: '“Academic debate involves a dialogue between many voices. If these voices are not identified, the dialogue disappears, and the essay writer appears to be presenting a personal opinion.” (Brick, 2011, p.107)', note: 'Source: Brick, J. (2011). Academic culture: A student’s guide to studying at university. Macmillan.' },
            { type: 'figure', src: 'assets/week3/academic-voices.svg', alt: 'Academic writing is a dialogue. When voices are identified, the essay brings together source voices (Nicastro and Carillo 2021, About That 2024, Berti et al. 2021) and your own voice, each clearly marked. When voices are not identified, the dialogue disappears and the essay looks like a personal opinion.', caption: 'Whose voice is speaking?', size: 'wide' },
            { type: 'talk', title: 'Talk in your group', prompts: [
              'What do you understand by this quote?',
              'How do you distinguish between your own ideas and the ideas of others?',
              'Why is it important to reference the ideas of other people? Find <b>three</b> reasons.'
            ]},
            { type: 'key', title: 'A source = a person or group whose ideas you use', points: [
              'When you refer to the ideas of another person, that person or group is <b>a source</b>. Your reader must always know <b>whose voice</b> is speaking.'
            ]}
          ],
          answers: { title: 'Why reference other people’s ideas?', items: [
            ['Acknowledgment of sources', 'It shows respect and gives credit to authors for their work.'],
            ['Supporting claims', 'References strengthen your arguments with evidence. Reputable sources add credibility.'],
            ['Avoiding academic misconduct (plagiarism)', 'Proper referencing means you are not plagiarising someone else’s ideas or work.'],
            ['Enabling verification', 'Readers can go back to the original sources to check the information or explore further.'],
            ['Demonstrating research depth', 'It shows you have done thorough research and know the existing literature.'],
            ['Contributing to the field', 'You add to the academic dialogue and help others who want to build on your work.']
          ]}
        },
        {
          id: 'v2', short: 'Different voices', minutes: 10, grouping: 'Alone → pair',
          title: 'Identifying different voices',
          goal: 'Tell the writer’s voice from direct and indirect source voices.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the extract. How many <b>voices</b> can you hear?' },
              { who: 'alone', text: 'Decide whose voice is in each sentence, and how it is used.' },
              { who: 'pair', text: 'Compare. Then answer: Who is “He”? Why are there no quotation marks in S4?' }
            ]},
            { type: 'passage', id: 'v2p', title: 'Extract', text: 'Food waste is a major global issue that affects the environment, economy, and food security. A significant portion of edible food is discarded at various stages, from production and distribution to retail and households (Tchonkouang et al., 2023). Royer (2024) states that ‘the pressing issue of food insecurity in the United States is worsened by high levels of food waste’ (p.2). He believes that by tackling food insecurity through redistribution efforts and food rescue programs, a more efficient and responsible food system can be developed to support the community and the environment.' },
            { type: 'grid', id: 'v2g', title: 'Whose voice?', rows: [
              'S1 · “Food waste is a major global issue…”',
              'S2 · “A significant portion of edible food is discarded…”',
              'S3 · “Royer (2024) states that ‘the pressing issue…’”',
              'S4 · “He believes that…”'
            ], columns: ['Voice'], options: [
              'The writer’s own voice',
              'Tchonkouang et al. — indirect (summary / paraphrase)',
              'Royer — direct (exact words in quotation marks)',
              'Royer — indirect (paraphrase)'
            ], answers: [
              ['The writer’s own voice'],
              ['Tchonkouang et al. — indirect (summary / paraphrase)'],
              ['Royer — direct (exact words in quotation marks)'],
              ['Royer — indirect (paraphrase)']
            ]},
            { type: 'key', title: 'Direct voice: use it rarely', points: [
              'Direct quotations are <b>not common</b> in academic writing.',
              'In DEC you are marked on <b>paraphrasing</b>. You get no marks for language in a quotation. Quote only if it is really necessary — and keep it very short.'
            ]},
            { type: 'teacher', ref: 'w3d1-t10' }
          ],
          answers: { items: [
            ['How many voices?', '3: the writer’s voice and the voices of two sources (Tchonkouang et al. and Royer).'],
            ['Writer’s voice', 'Sentence 1. There is no referencing — the writer’s voice is not labelled.'],
            ['Direct voice', 'S3: Royer’s actual words, in quotation marks, with the page number.'],
            ['Indirect voice', 'S2: we read a summary or paraphrase of Tchonkouang et al.’s ideas, not their own words.'],
            ['“He”', 'Royer. There are no quotation marks because S4 is a paraphrase of Royer’s ideas.'],
            ['Relabelling', 'When a source’s information crosses two sentences, remind the reader whose voice it is — here with the pronoun “he”. You don’t need to repeat the citation in the next sentence, but if you refer to the same source several sentences or paragraphs later, cite it again.']
          ]}
        },
        {
          id: 'v3', short: 'Your voice', minutes: 12, grouping: 'Pairs → class',
          title: 'Using your voice',
          goal: 'See how the writer’s voice controls the argument and how sources support it.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Look at Sample 3.1 body paragraph 2 again. Highlight the <b>writer’s voice</b>.' },
              { who: 'pair', text: 'Complete the grid. Then discuss the questions.' },
              { who: 'alone', text: 'Go back to your Body 2 (1A Writing body paragraphs). Is <b>your</b> voice in the topic sentence and the last sentence?' }
            ]},
            { type: 'passage', id: 'v3p', title: 'Sample 3.1 · Body paragraph 2', text: '¹Addressing the problem of food waste through better management and distribution of resources is also important because it has the potential to directly alleviate hunger. ²Estimates from the FAO reveal that approximately 30% of all food produced worldwide is not consumed (Our Changing Climate, 2020). ³While this food wastage occurs at various points in the supply chain, a large amount of perfectly edible food is thrown away by consumers. ⁴Consumer preference for attractive produce and the tendency to over purchase and let food spoil are some of the behavioural patterns that have led to the unnecessary discarding of food (Tchonkouang et al., 2023; Our Changing Climate, 2020). ⁵However, with the adoption of more sustainable consumption habits and redistribution programs, a significant amount of food could be redirected from waste streams to improve overall food availability in underserved populations (Royer, 2024). ⁶This redistribution could be particularly impactful in developed countries where surplus food from restaurants, retail, and households could be channelled to food banks to provide immediate relief. ⁷In fact, if the food waste generated in Australia were cut by one third, the amount saved could adequately feed 921,000 people for a year (Tchonkouang et al., 2023), demonstrating the importance of food conservation as a means of combating hunger.' },
            { type: 'grid', id: 'v3g', title: 'Whose voice is in each sentence?', rows: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'], columns: ['Voice'], options: ['Writer’s voice', 'Source voice (citation)', 'Source evidence + writer’s comment'], answers: [
              ['Writer’s voice'], ['Source voice (citation)'], ['Writer’s voice'], ['Source voice (citation)'], ['Source voice (citation)'], ['Writer’s voice'], ['Source evidence + writer’s comment']
            ]},
            { type: 'key', title: 'Internal or external voice?', compare: [
              { label: 'INTERNAL (indirect)', text: 'The source is part of the sentence. Use it when <b>who</b> said it matters, the author is well known, the idea is too long for one sentence, or you want to <b>evaluate</b> or compare sources.', eg: 'Royer (2024) argues that…' },
              { label: 'EXTERNAL', text: 'The reference is in brackets at the end. The focus is the <b>information</b>; the writer accepts it. Two sources? Separate them with a semicolon.', eg: '…(Tchonkouang et al., 2023; Our Changing Climate, 2020).' }
            ]},
            { type: 'talk', title: 'Discuss', prompts: [
              'What is the writer doing with their voice? How are they “driving” the text?',
              'What purpose do the sources have in this paragraph?',
              'Are internal or external voices more common in academic writing? Why?'
            ]},
            { type: 'tip', text: 'Rubric link — Use of Sources (66–70), Voice Usage: “Uses own voice that mostly combines well with source voices; attribution is mostly clear and accurate; uses basic APA citation forms accurately; may include multi-source citations as needed”.' }
          ],
          answers: { items: [
            ['Writer’s voice', 'S1, S3, S6 and the end of S7 (“demonstrating the importance of food conservation as a means of combating hunger”).'],
            ['Driving the text', 'The writer’s voice introduces each new point and presents the argument. S1 introduces the second argument; S3 develops the evidence in S2 and narrows the focus to the consumption stage; S6 develops S5 with a more specific example; the end of S7 uses Tchonkouang’s evidence to link back to the question and the thesis. The writer controls the argument.'],
            ['Purpose of sources', 'Other voices give specific information to support the writer’s position: evidence such as statistics and examples.'],
            ['Internal or external?', 'Most references in academic writing are <b>external</b> (this varies across disciplines — notice the conventions in your own course reading).']
          ]}
        }
      ]
    }
  ],

  /* ───────────── Homework and optional practice ───────────── */
  extras: [
    {
      id: 'x1', short: 'Reporting verbs', minutes: 20, grouping: 'Alone', category: 'Homework',
      title: '3A Homework: Using reporting verbs',
      goal: 'Use reporting verbs to introduce the ideas of others accurately.',
      blocks: [
        { type: 'key', title: 'Reporting verbs show what the source is doing', points: [
          '<b>Research verbs</b> name the topic of a study (<i>investigated, studied, observed</i>) or its findings (<i>found, reported</i>). They are usually in the <b>past tense</b> because the research is finished.',
          '<b>Discourse verbs</b> show what the source does with the information (<i>argue, explain, mention…</i>). They are usually in the <b>present simple</b>.',
          'Choose carefully: <i>Horrigan (2019) <b>mentions</b>…</i> means Horrigan does not spend much time on the topic.'
        ]},
        { type: 'steps', items: [
          { who: 'alone', text: 'Read each example. Find the reporting verb.' },
          { who: 'alone', text: 'Choose the <b>purpose</b> of the verb. Then check.' },
          { who: 'alone', text: 'Write two sentences about a course source with two different verbs.' }
        ]},
        { type: 'grid', id: 'x1g', title: 'Match the verb to its purpose (adapted from Brick, 2011, pp. 109–112)', rows: [
          'Reynolds et al. (2015) <b>states/points out</b> that just one third of the food waste generated in Australia would adequately feed 921,000 people for an entire year.',
          'Otani and Yamana (2018) <b>claim</b> that the new policy could potentially reduce emissions by 30%.',
          'Oscar (2010) <b>explains</b> that the increase in extreme weather events is directly linked to rising global temperatures.',
          'Badawi et al. (2020) <b>argue</b> that climate change impacts are accelerating faster than previously predicted.',
          'Lee and Thompson (2022) <b>reject</b> the notion that food waste is primarily a result of consumer behaviour, highlighting instead systemic issues in supply chain management.',
          'Godfray (2010) <b>suggests</b> that a balanced diet is more beneficial than supplements for improving health.',
          'Nguyen (2023) <b>mentions</b> a recent initiative where supermarkets have started selling imperfect fruits and vegetables at a discount to help reduce food waste.',
          'Brown and Patel (2021) <b>propose</b> implementing a community composting program as an effective solution to reduce food waste in urban areas.',
          'Johnson (2019) <b>emphasises</b> the importance of early diagnosis in improving outcomes for patients with chronic conditions.',
          'In their recent study, Rivera and Chung (2023) <b>discuss</b> various strategies to minimize food waste in the hospitality industry.',
          'After examining several community-based approaches, Morgan et al. (2021) <b>conclude</b> that public awareness campaigns are crucial in reducing household food waste.'
        ], columns: ['Purpose'], options: [
          'To give details of how or why something happens',
          'To indicate that the source deals with an issue very briefly',
          'To indicate that your source has stated something as a fact',
          'To indicate the final assessment or inference drawn by the source after a thorough analysis of the data or evidence in their study',
          'To indicate the issue or topic that a source examines',
          'To indicate the source thinks something is possibly true',
          'To indicate the source’s most important point',
          'To present a position that the source does not support',
          'To present someone’s position on an issue',
          'To present something as fact',
          'To suggest a solution to a particular problem'
        ], answers: [
          ['To present something as fact'],
          ['To indicate that your source has stated something as a fact'],
          ['To give details of how or why something happens'],
          ['To present someone’s position on an issue'],
          ['To present a position that the source does not support'],
          ['To indicate the source thinks something is possibly true'],
          ['To indicate that the source deals with an issue very briefly'],
          ['To suggest a solution to a particular problem'],
          ['To indicate the source’s most important point'],
          ['To indicate the issue or topic that a source examines'],
          ['To indicate the final assessment or inference drawn by the source after a thorough analysis of the data or evidence in their study']
        ]},
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'Two sentences with reporting verbs', placeholder: 'Royer (2024) argues that … · Tchonkouang et al. (2023) found that …', rows: 3 }
        ]},
        { type: 'teacher', ref: 'w3d1-t11' }
      ],
      answers: { items: [
        ['Example', 'Royer (2024) <b>argues</b> that food rescue programs could reduce food insecurity. · Tchonkouang et al. (2023) <b>found</b> that cutting Australian food waste by a third could feed 921,000 people for a year.']
      ]}
    },
    {
      id: 'x2', short: 'APA referencing', minutes: 25, grouping: 'Alone', category: 'Homework',
      title: '3A Homework: Referencing conventions',
      goal: 'Write accurate APA 7th in-text citations and reference list entries.',
      blocks: [
        { type: 'key', title: 'APA 7th: four key elements in a reference', points: [
          '<b>WHO</b> created it? — Author · <b>WHEN</b>? — Date · <b>WHAT</b> is it called? — Title · <b>WHERE</b> can it be accessed? — URL, DOI etc.',
          'Inside your writing (<b>in-text</b>) you use only two of them: the <b>author</b> and the <b>date</b>.'
        ]},
        { type: 'quiz', id: 'x2q', items: [
          { q: 'Which information goes <b>inside</b> your piece of writing (in-text)?', options: ['Author and date', 'Title and URL', 'Author, date, title and URL'], answer: 'Author and date', why: 'APA uses author–date in-text citations. The full details go in the reference list.' }
        ]},
        { type: 'steps', items: [
          { who: 'alone', text: 'Open the University of Sydney Library APA 7th guide (link on Canvas).' },
          { who: 'alone', text: 'For each text, write the <b>full reference</b> and an <b>in-text citation</b> (narrative: <i>Author (year) argue…</i> and/or parenthetical: <i>(Author, year)</i>).' }
        ]},
        { type: 'cards', title: 'The three sources', numbered: true, items: [
          { label: 'Journal article', text: 'Authors: E. Molloy, D. Boud, M. Henderson · 2020 · “Developing a learning-centred framework for feedback literacy” · <i>Assessment &amp; Evaluation in Higher Education</i>, volume 45, issue 4, pages 527–540.' },
          { label: 'Full eBook', text: 'Authors: A. Ding, I. Bruce · 2017 · <i>The English for Academic Purposes Practitioner: Operating on the Edge of Academia</i> · Palgrave Macmillan.' },
          { label: 'One chapter in an edited eBook', text: 'Chapter authors: Y. Li, J. Flowerdew · 2019 · “What really is the relationship between plagiarism and culture?” · pages 140–156 · in the book <i>Student Plagiarism in Higher Education: Reflections on Teaching Practice</i>, edited by D. Pecorari and P. Shaw · Routledge.' }
        ]},
        { type: 'table', id: 'x2t', columns: ['Source', 'Full reference', 'In-text citation'], fixed: ['Text 1 · Journal article', 'Text 2 · Full eBook', 'Text 3 · One chapter in an edited eBook'] },
        { type: 'teacher', ref: 'w3d1-t12' }
      ],
      answers: { items: [
        ['Text 1 · Journal article', 'Molloy, E., Boud, D., &amp; Henderson, M. (2020). Developing a learning-centred framework for feedback literacy. <i>Assessment &amp; Evaluation in Higher Education, 45</i>(4), 527-540.<br>In-text: Molloy et al. (2020) argue that … / … (Molloy et al., 2020).'],
        ['Text 2 · Full eBook', 'Ding, A., &amp; Bruce, I. (2017) <i>The English for Academic Purposes Practitioner: Operating on the Edge of Academia.</i> Palgrave Macmillan.<br>In-text: Ding and Bruce (2017) argue that …'],
        ['Text 3 · Chapter in an edited eBook', 'Li, Y., &amp; Flowerdew J. (2019). What really is the relationship between plagiarism and culture? In D. Pecorari &amp; P. Shaw (eds). <i>Student Plagiarism in Higher Education: Reflections on Teaching Practice</i> (pp. 140-156). Routledge.<br>In-text: Li and Flowerdew (2019) argue … / … (Li &amp; Flowerdew, 2019).'],
        ['Notice', '<b>et al.</b> for three or more authors in-text · <b>and</b> in narrative citations, <b>&amp;</b> inside brackets.']
      ]}
    },
    {
      id: 'x3', short: 'Rubric self-check', minutes: 15, grouping: 'Alone', category: 'Writing practice',
      title: 'Check your essay against the rubric',
      goal: 'Use the official Integrated Writing rubric to find your next step.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Put your introduction, body paragraphs and conclusion together. Count the words (450–600).' },
          { who: 'alone', text: 'Read each rubric descriptor (66–70 band). Find <b>evidence</b> in your essay, and one thing to improve.' }
        ]},
        { type: 'table', id: 'x3t', title: 'Integrated Writing rubric · self-check', columns: ['Criterion · 66–70 descriptor', 'Evidence in our essay', 'One thing to improve'], fixed: [
          '<b>Argumentation</b> — “Develops mostly effective and logical arguments supported by relevant source material”',
          '<b>Use of Sources</b> — “Generally good synthesis and successful paraphrasing of sources; some appropriate use of different voices”',
          '<b>Connection of Ideas</b> — “Generally displays good connectivity; most structural and cohesive features are used effectively”',
          '<b>Vocabulary</b> — “Uses a good range of vocabulary with mostly accurate collocations; mostly suitable hedging”',
          '<b>Grammar</b> — “Uses a good range of grammatical structures with minor errors, meaning is mostly clear”'
        ]},
        { type: 'tip', text: 'Hedging = careful language such as <i>could, may, potentially</i>. Sample 3.1 uses it: “could potentially feed millions”.' }
      ]
    }
  ],

  /* Word help: [word, plain meaning, example]. */
  glossary: [
    ['thesis', 'Your position: your main answer to the essay question.', 'Central to the problem of food insecurity is mitigating food waste.'],
    ['preview', 'A short list of the reasons you will develop in the body paragraphs.', 'It would manage the climate crisis and alleviate hunger.'],
    ['rhetorical function', 'The job a sentence or paragraph does, e.g. give a cause (BECAUSE), a result (SO) or a contrast (BUT).', 'S3 gives the causes of food insecurity.'],
    ['deconstruct', 'Take a text apart to see how it works.', 'Deconstruct the sample body paragraph.'],
    ['topic sentence', 'The first sentence of a body paragraph. It gives the main idea (one reason).', 'Managing food waste is crucial… because of its significant impact on the environment.'],
    ['concession', 'Accepting that another idea is partly true before giving your main point.', 'While food waste is not the only factor…'],
    ['cohesion', 'The links between sentences that make a text easy to follow.', 'This impact… this stage… such emissions…'],
    ['referent', 'A word that points back to an idea already mentioned.', 'It, this, these, such.'],
    ['academic style', 'Formal language for university writing: no contractions, few phrasal verbs, precise words.', 'cut down on → curtail'],
    ['phrasal verb', 'A verb + a small word (up, down, on…). Often informal.', 'break down, cut down on'],
    ['voice', 'Whose idea a reader hears: yours or a source’s.', 'The writer’s voice; Royer’s voice.'],
    ['citation', 'A short reference to a source inside your text (author and year).', '(Royer, 2024)'],
    ['reporting verb', 'A verb that introduces a source’s idea and shows what the source does.', 'Royer (2024) states that…'],
    ['alleviate', 'Make a problem less severe.', 'Alleviate hunger.']
  ]
};
