/* DEC15 · Week 3, Day 3 — lesson content.
   Teacher’s Book: W3 D3 · 7A Mediation (120 min) · 8A Academic writing skills 2 (90 min) ·
   9A Research skills applied (30 min) · 10A Homework: Listening and Reading Practice Assessment (Canvas).
   Block types: see lessons/_template.js and lessons/week2/w2d5.js. */

window.DEC15_LESSON = {
  id: 'w3d3',
  week: 3, day: 3,
  title: 'Bringing sources together',
  duration: 'About 4 hours',
  question: 'What are the best ways to prevent food loss and waste — and can food banks help to solve food insecurity?',
  questionKind: 'Focus question',
  questionLabel: 'This week’s focus question',
  wordTarget: '',

  image: 'assets/week3/hero-w3d3.svg',
  imageAlt: 'Three source cards — an article, a video and another article — with their ideas flowing along dotted lines into one synthesised summary, beside a magnifying glass.',
  journey: 'Today you connect this week’s three sources and write about them together — the “Use of Sources” skill in the Integrated Writing assessment. Then you learn to pack ideas into academic noun phrases, and you plan your research on solutions for the Week 4 discussion.',

  finish: { title: 'Thursday', text: 'Practice assessment day' },

  sections: [
    /* ───────────────────────── STAGE 1 · 7A ───────────────────────── */
    {
      id: 'mediate', number: '01', code: '7A', minutes: 120,
      tone: 'teal', art: 'reading',
      title: 'Mediation',
      subtitle: 'Connect three sources · Berti et al. (2021)',
      outcome: 'Read and take paraphrased notes, identify similarities and differences across texts, and complete a synthesised summary paragraph.',
      activities: [
        {
          id: 'm1', short: 'Recap', minutes: 10, grouping: 'Alone → pair',
          title: 'Recap',
          goal: 'Remember the main ideas from the first reading and the listening this week.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Books closed.</b> Don’t open the sources. Answer the 10 questions from memory. Go fast — 5 minutes.' },
              { who: 'pair', text: 'Compare with a partner. If you disagree, explain why. Then click <b>Check my answers</b>.' }
            ]},
            { type: 'quiz', id: 'm1q', title: 'Nicastro & Carillo (2021) and About That (2024)', items: [
              { q: 'Where does food <b>loss</b> commonly occur?', options: ['In households', 'Between production and distribution.', 'At McDonalds', 'In developed countries.'], answer: 'Between production and distribution.', why: 'Food loss happens before food is sold — especially in low-income countries (Nicastro & Carillo, 2021).' },
              { q: 'Where does food <b>waste</b> commonly occur?', options: ['In retail and households', 'Between production and distribution.', 'At McDonalds', 'In developed countries.'], answer: 'In retail and households', why: 'Food waste happens at the consumer level, e.g. shops, food services and homes.' },
              { q: 'How can new packaging reduce food loss?', options: ['By reducing overbuying.', 'By helping consumers cook more meals.', 'By increasing food prices.', 'By keeping fruit fresh for longer'], answer: 'By keeping fruit fresh for longer', why: 'Tesco tested packaging with a strip that slows down fruit ripening.' },
              { q: 'What is a possible problem with more frequent food deliveries?', options: ['Consumers will buy too much.', 'It may increase C02 emissions.', 'Supermarkets will lose money.', 'Farmers will lose money.'], answer: 'It may increase C02 emissions.', why: 'More frequent, smaller deliveries might increase the carbon footprint (Wakeland, 2012).' },
              { q: 'What initiative have Sainsbury’s and Tesco introduced?', options: ['Buy one get one free.', 'Buy one get more.', 'Buy free get one now.', 'Buy one get one later.'], answer: 'Buy one get one later.', why: 'Customers get the second product later, so they don’t over-buy on impulse.' },
              { q: 'What simple fix can reduce food waste at markets in poorer countries?', options: ['Roofs', 'Refrigerators', 'Shelves', 'Smaller boxes'], answer: 'Roofs', why: 'Roofs protect food from bad market conditions (FAO, 2021).' },
              { q: 'What is the aim of ‘Save Food Cut Waste’ in Singapore?', options: ['Reduce food prices', 'Educate consumers', 'Reduce delivery distances', 'Stop food loss'], answer: 'Educate consumers', why: 'It is a campaign with practical tips that raises awareness.' },
              { q: 'According to the food waste hierarchy, what is the best approach to managing food waste?', options: ['Avoid producing too much food', 'Give extra food to people who need it', 'Sell food at full price', 'Sell food at a reduced price'], answer: 'Avoid producing too much food', why: 'Prevention comes first. Redistribution comes second, when extra food is unavoidable.' },
              { q: 'According to the listening, what is <b>NOT</b> a problem with conventional food banks?', options: ['They make people feel helpless', 'Volunteer work is boring', 'They may create more waste.', 'They are efficient.'], answer: 'They are efficient.', why: 'Efficiency is a strength of the hamper model, not a problem.' },
              { q: 'What is a limitation of the new types of food bank?', options: ['They empower people.', 'They cannot easily help a large number of people.', 'They are cheap to operate.', 'Volunteers are happier.'], answer: 'They cannot easily help a large number of people.', why: 'The client-choice model is slower, so it is harder to serve many people.' }
            ]},
            { type: 'teacher', text: 'TB recap (10 min) — teachers can choose how to run it (e.g. Kahoot or show of hands). Keep it brisk: 5 min alone, 3 min pair check, 2 min whole-class on any surprises. Answer key: 1 between production and distribution · 2 in retail and households · 3 keeping fruit fresh for longer · 4 may increase CO₂ emissions · 5 buy one get one later · 6 roofs · 7 educate consumers · 8 avoid producing too much food · 9 they are efficient · 10 cannot easily help a large number of people.' }
          ]
        },
        {
          id: 'm2', short: 'Academic skills', minutes: 10, grouping: 'Pairs → class',
          title: 'Academic Skills: compare and contrast',
          goal: 'Collect language to show where sources agree and where they are different.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Brainstorm: write <b>3 words</b> to compare and <b>3 words</b> to contrast.' },
              { who: 'pair', text: 'Discuss the two questions below.' },
              { who: 'class', text: 'Share with the class. Then open the language bank and add new words to your list.' }
            ]},
            { type: 'fields', fields: [
              { id: 'm2-1', label: 'Words to compare (texts agree)', placeholder: 'similarly, both …', rows: 2 },
              { id: 'm2-2', label: 'Words to contrast (texts are different)', placeholder: 'however, …', rows: 2 }
            ]},
            { type: 'talk', title: 'Talk with your partner', prompts: [
              'Apart from linking words, how can you show that <b>two texts agree</b>? (Think about how you write the reference.)',
              'Texts can disagree. What <b>other things</b> can you contrast between texts?'
            ]},
            { type: 'language', title: 'Language bank', groups: [
              { label: 'Compare: texts agree', phrases: ['Both X and Y argue that…', 'Similarly, …', 'Likewise, …', 'X and Y (2021) agree that…', 'This is supported by…', '… (X, 2021; Y, 2024).'] },
              { label: 'Contrast: link two sentences', phrases: ['However, …', 'In contrast, …', 'By contrast, …', 'On the other hand, …', 'Conversely, …', 'Despite this, …'] },
              { label: 'Contrast: inside one sentence', phrases: ['Although X…, Y…', 'While X…, Y…', 'X…, whereas Y…', 'X…, yet Y…'] }
            ]},
            { type: 'teacher', text: 'TB answers: another way to show texts agree = external referencing with two sources in one bracket, e.g. (Nicastro & Carillo, 2021; Berti et al., 2021). Other things we could contrast: information between sentences and clauses; point of focus; inclusion or exclusion of certain points.' }
          ],
          answers: { items: [
            ['Showing agreement', 'Put two sources in one reference: <b>(Nicastro & Carillo, 2021; Berti et al., 2021)</b>. This is called external referencing.'],
            ['Other things to contrast', '1. Information between sentences and clauses. 2. The <b>point of focus</b> of each text. 3. The <b>inclusion or exclusion</b> of certain points (one text mentions it, another doesn’t).']
          ]}
        },
        {
          id: 'm3', short: 'Vocabulary', minutes: 10, grouping: 'Alone → pair',
          title: 'Vocabulary',
          goal: 'Understand and use six words from today’s reading.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Match</b> each meaning with a word. Then check.' },
              { who: 'alone', text: '<b>Complete</b> the five gaps in the short text.' },
              { who: 'pair', text: 'Say one sentence about food banks with <b>band-aid solution</b> or <b>win-win</b>.' }
            ]},
            { type: 'quiz', id: 'm3q', title: 'Part A · Match the word and the meaning', shared: ['contradiction', 'win-win', 'band-aid solution', 'controversial', 'prioritise', 'paradox'], items: [
              { q: 'Good for everyone who is involved.', answer: 'win-win', why: 'A win-win solution helps both sides.' },
              { q: 'A quick fix that helps for a short time but does not solve the real cause of a problem.', answer: 'band-aid solution', why: 'Like a plaster on a cut: it covers the problem but doesn’t cure it.' },
              { q: 'Causing a lot of disagreement or strong opinions.', answer: 'controversial', why: 'People argue about controversial topics.' },
              { q: 'To decide that one thing is more important than others and deal with it first.', answer: 'prioritise', why: 'Companies prioritise profit = profit comes first.' },
              { q: 'Two facts or ideas that are opposite, so they don’t make sense together.', answer: 'contradiction', why: 'Too much food and not enough food at the same time is a contradiction.' },
              { q: 'A situation that seems impossible or strange because it has two opposite features.', answer: 'paradox', why: 'The “food paradox”: food waste and food insecurity exist together.' }
            ]},
            { type: 'quiz', id: 'm3g', title: 'Part B · Complete the text', shared: ['contradiction', 'win-win situation', 'band-aid solution', 'controversial', 'prioritise'], items: [
              { q: 'The existence of food insecurity and food waste presents a <b>(1) ______</b>.', answer: 'contradiction', why: 'Two opposite facts exist together.' },
              { q: 'Some people think that redistributing extra food is a <b>(2) ______</b>; …', answer: 'win-win situation', why: 'Less waste + more food for people in need.' },
              { q: '… however, others think that food banks are only a <b>(3) ______</b> to food insecurity.', answer: 'band-aid solution', why: '“only” shows it is a short-term fix.' },
              { q: 'This makes food banks <b>(4) ______</b>.', answer: 'controversial', why: 'People disagree about them.' },
              { q: 'Large agricultural companies <b>(5) ______</b> profit over human health.', answer: 'prioritise', why: 'prioritise X over Y = put X first.' }
            ]},
            { type: 'teacher', text: 'TB uses a Quizlet set for this vocabulary — you can use it instead of Part A. Gap-fill key: 1 contradiction · 2 win-win situation · 3 band-aid solution · 4 controversial · 5 prioritise.' }
          ]
        },
        {
          id: 'm4', short: 'Gist', minutes: 10, grouping: 'Alone → pair',
          title: 'Reading for gist',
          goal: 'Understand the main idea of Berti et al. (2021) before you read in detail.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: '<b>Predict.</b> Food waste and food insecurity exist at the same time. Why is this a <b>paradox</b>? Tell your partner.' },
              { who: 'alone', text: '<b>Read</b> part of the article abstract. Answer the two questions. You have 4 minutes.' },
              { who: 'pair', text: '<b>Compare</b> your answers. Underline the words in the abstract that helped you.' }
            ]},
            { type: 'passage', id: 'm4p', title: 'Berti et al. (2021) — part of the abstract', text: 'Food poverty and/or food insecurity have become a substantial problem in the advanced capitalist world, with growing portions of people struggling to eat healthy food every day. At the same time, just in the European Union (EU), around 88 million tonnes of food waste are generated annually. We call this paradox the “food paradox.” The question is, how to tackle food paradox? Food banks are usually presented as a win–win solution to tackle the food paradox, despite being quite controversial. Indeed, food banks are highly contested because, according to critics, they do not aim to address the structural causes, but rather they only intervene on the effects of the food paradox.' },
            { type: 'fields', fields: [
              { id: 'm4-1', label: 'What is the role of food banks?', placeholder: 'Food banks …', rows: 2 },
              { id: 'm4-2', label: 'Does the writer think that food banks can solve food insecurity?', placeholder: 'Not completely, because …', rows: 2 }
            ]}
          ],
          answers: { items: [
            ['Why a paradox?', 'They are opposing problems that should cancel one another: there is too much food (waste) and not enough food (insecurity) at the same time.'],
            ['Role of food banks', 'They redistribute extra food to people in need, so they are presented as a “win–win” solution to the food paradox.'],
            ['Can they solve it?', 'Not by themselves. Critics say food banks only deal with the <b>effects</b> of the problem, not the <b>structural causes</b>. (Later, the article says they can help more by working with governments.)']
          ]}
        },
        {
          id: 'm5', short: 'Note-taking', minutes: 20, grouping: 'Alone → pair',
          title: 'Reading for detail: Note-taking',
          goal: 'Take short notes in your own words under clear headings.',
          blocks: [
            { type: 'key', title: 'Paraphrased notes protect you from copying', points: [
              'Read a paragraph → <b>look away</b> → write key words <b>in your own words</b> → check the facts.',
              'Notes, not sentences: use symbols (→, =, +) and keep numbers with what they measure.'
            ]},
            { type: 'sources', ids: ['berti'] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Open <b>Berti et al. (2021)</b>. Read and add notes to the table. Paraphrase as you write.' },
              { who: 'pair', text: 'Compare notes with a partner. Did you use different words for the same idea? Good — that means you paraphrased.' },
              { who: 'pair', text: 'Look at Figure 1 and answer the two data questions.' }
            ]},
            { type: 'table', id: 'm5t', title: 'Note-taking table: Berti et al. (2021)', columns: ['Heading', 'My notes (in my own words)'], fixed: [
              'Food insecurity',
              'Food waste',
              'The ‘food paradox’',
              'One solution: food redistribution — food banks',
              'Magazzini Sociali',
              'Controversy: what is the main cause of food insecurity?',
              'Controversy: why can’t food banks solve this problem?',
              'Two ways food banks can cooperate with governments to help: 1',
              'Two ways food banks can cooperate with governments to help: 2',
              'Conclusion'
            ]},
            { type: 'figure', src: 'assets/week3/magazzini-donations.png', alt: 'Pie chart of food donations to Magazzini Sociali by type. The largest shares are other meals (15.9%), second course (12.5%), bread (12.4%), milk and juices (12.2%) and other foods (11.7%). Smaller shares include pasta (7%), biscuits (5.6%), sandwiches (4.5%), tomato sauce (3.7%), canned legumes (3.5%), main course (3%), baby food (1.4%), canned meat and fish (0.9%) and oil (0.7%).', caption: 'Figure 1. Food donations as at 30 June 2020, Magazzini Sociali, Potenza (Italy).', credit: 'Source: Berti et al. (2021).', size: 'small' },
            { type: 'quiz', id: 'm5q', title: 'Read the data', items: [
              { q: 'Which type of food was donated <b>most</b>?', options: ['Bread', 'Other meals', 'Milk and juices', 'Pasta'], answer: 'Other meals', why: 'Other meals = 15.9%, the biggest part of the chart.' },
              { q: 'Paragraph C says the most donated products are “other meals, bread, milk, and juices”. Which <b>large</b> category in the chart does the text not list?', options: ['Second course (12.5%)', 'Baby food (1.4%)', 'Oil (0.7%)', 'Tomato sauce (3.7%)'], answer: 'Second course (12.5%)', why: 'Second course (12.5%) is slightly bigger than bread (12.4%). Always check a writer’s summary against the data.' }
            ]},
            { type: 'teacher', text: 'Students can also copy the headings on paper (as in the TB). The figure question is an addition: it practises reading data and checking a text against its figure.' }
          ],
          answers: { title: 'Sample notes (Teacher’s Book)', items: [
            ['Food insecurity', 'Serious problem in wealthy countries.'],
            ['Food waste', '88 million tonnes of food wasted in the EU (each year).'],
            ['The ‘food paradox’', 'Co-existence of food insecurity and food waste presents a paradox.'],
            ['Food banks', 'Community led. Rely on volunteers. Distribute extra food to people in need.'],
            ['Magazzini Sociali', 'In poor area of Italy. Redistributing food since 2015. Distribute fresh and cooked food.'],
            ['Main cause of food insecurity', 'Big agricultural companies that prioritise profit over health. They create unnecessary waste.'],
            ['Why food banks can’t solve it', 'Food banks only deal with the effects of the problem. They can’t change the cause.'],
            ['Cooperating with governments 1', 'Advise governments on policies to improve the food production system.'],
            ['Cooperating with governments 2', 'Expand their operations with government support.'],
            ['Conclusion', 'Through collaboration with governments, food banks can make a bigger difference.']
          ]}
        },
        {
          id: 'm6', short: 'Synthesising table', minutes: 30, grouping: 'Groups of 3',
          title: 'Building understanding across texts',
          goal: 'Identify similarities and differences across the three sources.',
          blocks: [
            { type: 'key', title: 'Same topic, different focus', points: [
              'This week’s texts <b>agree</b> that food redistribution is a useful way to reduce food waste and improve food security.',
              'But they <b>focus</b> on different methods, and may disagree on whether other ways to reduce food insecurity should also be considered.'
            ]},
            { type: 'sources', ids: ['nicastro', 'aboutthat', 'berti'] },
            { type: 'steps', items: [
              { who: 'group', text: '<b>Become an expert (10 min).</b> Each person takes one text: Nicastro & Carillo, About That, or Berti et al. Use your notes from this week.' },
              { who: 'group', text: '<b>Decide together (15 min).</b> For each statement, the expert says what their text says. Choose <b>Agree</b>, <b>Partially agree</b> or <b>Doesn’t mention</b>. The expert must show the paragraph or the line in the transcript.' },
              { who: 'class', text: '<b>Check (5 min).</b> Click <b>Check my answers</b>. Discuss any row your group got wrong.' }
            ]},
            { type: 'grid', id: 'm6g', title: 'Synthesising table', columns: ['Nicastro and Carillo (2021)', 'About That (2024)', 'Berti et al. (2021)'], options: ['Agree', 'Partially agree', 'Doesn’t mention'], rows: [
              'Food waste and food insecurity are significant problems.',
              'Redistributing extra food can improve food security.',
              'The way that food is redistributed is very important.',
              'Giving people food they don’t like may actually increase waste',
              'Stopping food waste is more important than redistributing extra food',
              'Reliance on volunteers is a limitation for food banks',
              'Governments have an important role to play in improving the food system',
              'There are many things that individuals and businesses can do to stop food waste'
            ], given: { '0-0': 'Agree', '0-1': 'Doesn’t mention', '0-2': 'Agree' }, answers: [
              ['Agree', 'Doesn’t mention', 'Agree'],
              ['Agree', 'Agree', 'Agree'],
              ['Doesn’t mention', 'Agree', 'Doesn’t mention'],
              ['Doesn’t mention', 'Agree', 'Doesn’t mention'],
              ['Agree', 'Doesn’t mention', 'Agree'],
              ['Doesn’t mention', 'Agree', 'Agree'],
              ['Doesn’t mention', 'Doesn’t mention', 'Agree'],
              ['Agree', 'Doesn’t mention', 'Doesn’t mention']
            ]},
            { type: 'key', title: 'Why this matters for your assessment', points: [
              'In the Integrated Writing rubric, <b>Use of Sources</b> rewards <b>synthesis</b>: using ideas from <b>all</b> input sources together, good paraphrasing, and a clear difference between <b>your voice</b> and the <b>source voices</b>.',
              'A row with “Agree” in two columns = one point you can support with <b>two sources</b> in one reference.'
            ]},
            { type: 'talk', title: 'Talk in your group', prompts: [
              'Which statement do all three texts agree with? Which statements does only one text mention?',
              'Look at the focus question. Which rows help you answer “Can food banks help to solve food insecurity?”'
            ]},
            { type: 'question' },
            { type: 'teacher', text: 'The TB key uses only “Agree” and “Doesn’t mention”. If a group argues for “Partially agree” with good evidence (e.g. Berti et al. on “stopping food waste is more important”), accept the discussion — the reasoning is the point. Row 1 is given, as in the student booklet.' }
          ]
        },
        {
          id: 'm7', short: 'Synthesising', minutes: 20, grouping: 'Pairs',
          title: 'Synthesising',
          goal: 'Put the right references into a paragraph that connects all three texts.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read the paragraph. In each gap (1–7), <b>choose the reference</b> from the menu. Use your synthesising table. Some references are used more than once.' },
              { who: 'pair', text: 'Check. Then answer questions a and b about how the writer compares and contrasts.' }
            ]},
            { type: 'cloze', id: 'm7q', title: 'Synthesised summary paragraph: choose the reference for each gap', text: 'Redistribution of extra food through food banks is one possible solution to the increasing problems of food waste and food insecurity {{1}}. However, {{2}} argue that eliminating food waste from occurring in the first place is a higher priority. Food redistribution should therefore only be considered when producing extra food is unavoidable. Although {{3}} do not consider that food banks may also create food waste, {{4}} points out that giving people food they don’t like might actually increase waste. It is therefore important to consider how food banks redistribute extra food. In addition to food banks, {{5}} suggest a variety of other ways for businesses, producers and individuals to reduce food loss and waste, loss.  In contrast, {{6}} focus more on the role of governments in reducing waste, improving food security and supporting food redistribution programs. At present, food banks are limited by their reliance on volunteers and donations to fund their operations {{7}}.  Overall, food banks may be part of the solution to food insecurity and food waste if they are adequately supported.',
              options: ['(Nicastro & Carillo, 2021; Berti et al., 2021)', '(Berti et al., 2021; About That, 2024)', 'Nicastro and Carillo (2021)', 'Nicastro and Carillo (2021) and Berti et al. (2021)', 'About That (2024)', 'Berti et al. (2021)'],
              answers: ['(Nicastro & Carillo, 2021; Berti et al., 2021)', 'Nicastro and Carillo (2021)', 'Nicastro and Carillo (2021) and Berti et al. (2021)', 'About That (2024)', 'Nicastro and Carillo (2021)', 'Berti et al. (2021)', '(Berti et al., 2021; About That, 2024)'],
              why: ['Two texts agree (table row 2 + row 1), so both go in one bracket.', 'The food waste hierarchy: prevention first.', 'Row 4: both readings “Doesn’t mention”.', 'Row 4: only the listening mentions this.', 'Row 8: only Nicastro and Carillo.', 'Row 7: only Berti et al.', 'Row 6: Berti et al. and About That agree.'] },
            { type: 'fields', fields: [
              { id: 'm7-1', label: 'a. Find the parts that show comparison. How has the writer compared?', placeholder: 'The writer puts two sources in one bracket: (… ; …) and also writes … and …', rows: 3 },
              { id: 'm7-2', label: 'b. Which words show contrast? Which connect sentences, and which connect clauses?', placeholder: 'Contrast words: … Sentences: … Clauses: …', rows: 3 }
            ]},
            { type: 'teacher', text: 'In the TB this is a drag-and-drop with the references as tiles (About That (2024) appears twice in the tile bank). The paragraph is reproduced exactly from the TB, including “reduce food loss and waste, loss.” — you may point out the repeated word as an editing slip.' }
          ],
          answers: { items: [
            ['Completed paragraph', 'Redistribution of extra food through food banks is one possible solution to the increasing problems of food waste and food insecurity <b>(Nicastro & Carillo, 2021; Berti et al., 2021).</b> However, <b>Nicastro and Carillo (2021)</b> argue that eliminating food waste from occurring in the first place is a higher priority. Food redistribution should therefore only be considered when producing extra food is unavoidable. Although <b>Nicastro and Carillo (2021) and Berti et al. (2021)</b> do not consider that food banks may also create food waste, <b>About That (2024)</b> points out that giving people food they don’t like might actually increase waste. It is therefore important to consider how food banks redistribute extra food. In addition to food banks, <b>Nicastro and Carillo (2021)</b> suggest a variety of other ways for businesses, producers and individuals to reduce food loss and waste, loss.  In contrast, <b>Berti et al. (2021)</b> focus more on the role of governments in reducing waste, improving food security and supporting food redistribution programs. At present, food banks are limited by their reliance on volunteers and donations to fund their operations <b>(Berti et al., 2021; About That, 2024).</b>  Overall, food banks may be part of the solution to food insecurity and food waste if they are adequately supported.'],
            ['a. Comparison', '<b>External referencing:</b> (Nicastro & Carillo, 2021; Berti et al., 2021) and (Berti et al., 2021; About That, 2024). <b>Internal referencing:</b> Nicastro and Carillo (2021) <b>and</b> Berti et al. (2021).'],
            ['b. Contrast words', 'However, although, in contrast. <b>Connect sentences:</b> However, In contrast (others: Conversely, On the other hand, By contrast, On the contrary, Despite this). <b>Connect clauses:</b> Although (others: while, whereas, though, yet).']
          ]}
        },
        {
          id: 'm8', short: 'Contrast', minutes: 10, grouping: 'Pairs → alone',
          title: 'Synthesising: what is being contrasted?',
          goal: 'Choose the right contrast word for the kind of difference you want to show.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Look at the three contrast words in the paragraph. Match each one with <b>what</b> it contrasts.' },
              { who: 'pair', text: '<b>Optional:</b> connect the clauses with <i>yet</i>, <i>although</i> or <i>Despite this</i>.' },
              { who: 'alone', text: '<b>Exit ticket:</b> write one sentence that contrasts two of this week’s sources.' }
            ]},
            { type: 'quiz', id: 'm8q', title: 'Match the contrast word with what it contrasts', shared: ['Information between sentences or clauses', 'The focus of different texts', 'The inclusion or exclusion of certain information'], items: [
              { q: '<b>However,</b> Nicastro and Carillo (2021) argue that eliminating food waste … is a higher priority.', answer: 'Information between sentences or clauses', why: 'It contrasts the importance of two solutions: redistribution vs. prevention.' },
              { q: '<b>Although</b> Nicastro and Carillo (2021) and Berti et al. (2021) do not consider…, About That (2024) points out…', answer: 'The inclusion or exclusion of certain information', why: 'Two texts don’t consider a point, BUT one does.' },
              { q: '<b>In contrast,</b> Berti et al. (2021) focus more on the role of governments…', answer: 'The focus of different texts', why: 'Individuals and businesses (Nicastro & Carillo) vs. governments (Berti et al.).' }
            ]},
            { type: 'quiz', id: 'm8o', title: 'Optional · yet, although or Despite this?', shared: ['yet', 'although', 'Despite this'], items: [
              { q: 'Large agricultural companies continue to acquire more land for food production. ______ many people continue to waste food.', answer: 'yet', why: 'Teacher’s Book answer: yet.' },
              { q: 'Some authors argue that food banks are a good way to improve food security ______ others point out the food redistribution does not address the causes of food insecurity.', answer: 'although', why: 'Teacher’s Book answer: although.' },
              { q: 'Reducing food waste could improve food security. ______ there is already enough food for everyone if food waste is eliminated.', answer: 'Despite this', why: 'Teacher’s Book answer: Despite this.' }
            ]},
            { type: 'fields', fields: [
              { id: 'm8-1', label: 'My contrast sentence about two sources', placeholder: 'Although Berti et al. (2021) …, About That (2024) … / In contrast, …', rows: 3 }
            ]},
            { type: 'teacher', text: 'The yet/although/Despite this matching is optional in the TB (“if time allows”). Answers: yet · although · Despite this.' }
          ],
          answers: { title: 'Model exit ticket', items: [
            ['Model', 'While Berti et al. (2021) see food banks as a way to redistribute extra food, About That (2024) shows that the way food is given out matters, because people may waste food they don’t like.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 2 · 8A ───────────────────────── */
    {
      id: 'nouns', number: '02', code: '8A', minutes: 90,
      tone: 'plum', art: 'writing',
      title: 'Academic writing skills 2',
      subtitle: 'Write with nouns: nominalisation',
      outcome: 'Understand why nominalisation matters in academic writing, change verbs, adjectives or clauses into noun phrases, and unpack complex noun phrases to understand difficult texts.',
      activities: [
        {
          id: 'n1', short: 'Warmer', minutes: 20, grouping: 'Pairs (mingle)',
          title: 'Warmer',
          goal: 'Find one academic noun that can replace a long explanation.',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Your teacher gives you a paper strip. Don’t show it to anyone. Walk around and find a partner.' },
              { who: 'pair', text: 'Read your definition aloud. Your partner guesses <b>one noun</b>. Then swap strips and find a new partner. Repeat.' },
              { who: 'pair', text: '<b>No strips?</b> Partner B closes the laptop. Partner A reads cards 1–7; B guesses. Then swap for cards 8–14.' },
              { who: 'alone', text: 'Finish with the quick quiz: six more definitions.' }
            ]},
            { type: 'cards', title: 'Definition cards', numbered: true, items: [
              { text: 'The clearing or thinning of forests by humans.' },
              { text: 'The movement of people from one place to another.' },
              { text: 'Preventing the wasteful use of a resource.' },
              { text: 'Actions or opinions that show you disagree with or disapprove of someone or something.' },
              { text: 'The expansion of cities and towns as more and more people begin living and working there.' },
              { text: 'The wearing away of soil, rock, and other land-related materials by natural forces such as water, wind, or ice.' },
              { text: 'The process of increasing interdependence and integration among the economies, markets, societies, and cultures of different countries worldwide.' },
              { text: 'The benefits or rewards provided to encourage specific actions or behaviours.' },
              { text: 'The conduct or actions of people in response to something or someone.' },
              { text: 'The process of giving careful thought to something usually before making a decision or forming an opinion.' },
              { text: 'The materials available in our environment used to create value.' },
              { text: 'The process of judging the quality, importance or value of something.' },
              { text: 'The act of controlling or governing according to rules or laws.' },
              { text: 'The likely consequence of something or the conclusion that can be drawn from something.' }
            ]},
            { type: 'quiz', id: 'n1q', title: 'Quick quiz: which noun?', shared: ['awareness', 'sustainability', 'consumption', 'implementation', 'establishment', 'feasibility'], items: [
              { q: 'The knowledge or understanding of a situation or fact.', answer: 'awareness', why: 'aware (adj.) → awareness' },
              { q: 'The ability to maintain certain essential processes, systems, and activities at a certain rate or level over the long term.', answer: 'sustainability', why: 'sustainable (adj.) → sustainability' },
              { q: 'The process of using up a resource.', answer: 'consumption', why: 'consume (v.) → consumption' },
              { q: 'The process of putting a decision or plan into effect.', answer: 'implementation', why: 'implement (v.) → implementation' },
              { q: 'The act of founding or setting up an institution, organization, or system.', answer: 'establishment', why: 'establish (v.) → establishment' },
              { q: 'The practicality or possibility of something being achieved.', answer: 'feasibility', why: 'feasible (adj.) → feasibility' }
            ]},
            { type: 'key', title: 'Many academic nouns have typical endings', points: [
              '<b>-tion / -sion</b> (migration, expansion) · <b>-ment</b> (establishment) · <b>-ity</b> (feasibility) · <b>-ness</b> (awareness) · <b>-ance / -ence</b> (importance).'
            ]},
            { type: 'teacher', text: 'Print the 20 statements (TRP on Canvas) and cut them into strips — one per student. Students mingle, read their strip aloud, partner guesses the noun, they swap strips and find a new partner. Alternative: students fold the strips with the statement facing outwards. The 14 cards + 6 quiz items = all 20 TB statements.' }
          ],
          answers: { title: 'Card answers', items: [
            ['1', 'deforestation'], ['2', 'migration'], ['3', 'preservation / conservation'], ['4', 'opposition'],
            ['5', 'urbanisation'], ['6', 'erosion'], ['7', 'globalisation'], ['8', 'incentives'],
            ['9', 'behaviour'], ['10', 'consideration'], ['11', 'resource'], ['12', 'evaluation / assessment'],
            ['13', 'regulation'], ['14', 'implication']
          ]}
        },
        {
          id: 'n2', short: 'What & why', minutes: 15, grouping: 'Pairs',
          title: 'What is nominalisation? Why use nominalisation?',
          goal: 'Notice how academic writers turn verbs and adjectives into nouns.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read each pair of sentences. <b>What has changed?</b> Find at least two changes.' },
              { who: 'pair', text: 'Read the key point. Then choose the more effective version (a or b) in the quiz.' }
            ]},
            { type: 'model', title: 'Example 1', before: 'If people keep cutting down trees and clearing forests, there will be less oxygen produced.', text: 'Continued deforestation will reduce the production of oxygen.' },
            { type: 'model', title: 'Example 2', before: 'Food banks distribute essential food items to those in need.  This can provide immediate relief for people who are hungry.', text: 'The distribution of essential food items through food banks can provide immediate relief from hunger.' },
            { type: 'key', title: 'Nominalisation = changing a verb or other word into a noun', points: [
              'Academic writing tends to use nouns more than verbs. <b>distribute → distribution · hungry → hunger · produce → production</b>.',
              'Why? It is more <b>formal</b>, it focuses on the <b>action or concept</b> rather than the doer, and it makes sentences more <b>compact</b>.',
              'It helps you <b>connect ideas</b> (two sentences → one), <b>expand on ideas</b>, and <b>avoid repetition</b> between sentences.'
            ]},
            { type: 'model', title: 'Expand on ideas: look at the subject', before: 'Food waste <b>contributes</b> significantly to food insecurity.', text: 'The significant <b>contribution</b> of food waste to food insecurity is a serious concern.', note: 'All the information in the first sentence becomes part of the subject in the second sentence. Now you can add new information at the end (a serious concern).' },
            { type: 'quiz', id: 'n2q', title: 'Avoid repetition: which version is more effective?', items: [
              { q: 'Pair 1', options: ['a. Farmers often discard their imperfect produce. Because they often discard their imperfect produce, greenhouse gas emissions are released as the food decays.', 'b. Farmers often discard their imperfect produce. This frequent disposal of food increases the release of greenhouse gas emissions as the food decays.'], answer: 'b. Farmers often discard their imperfect produce. This frequent disposal of food increases the release of greenhouse gas emissions as the food decays.', why: '“This frequent disposal of food” sums up the first sentence in a noun phrase. Version a repeats “they often discard their imperfect produce”.' },
              { q: 'Pair 2', options: ['a. The global warming rate has increased significantly in the past few decades. Because the global warming rate has increased significantly, there have been more extreme weather events.', 'b. The global warming rate has increased significantly in the past few decades. This rapid acceleration in temperature has created more extreme weather events.'], answer: 'b. The global warming rate has increased significantly in the past few decades. This rapid acceleration in temperature has created more extreme weather events.', why: '“This rapid acceleration in temperature” connects back without repeating — like the summary phrases from Week 1.' }
            ]}
          ],
          answers: { items: [
            ['Example 1', 'Structure: if-clause → one simple sentence (S-V-O). Formality: “people keep cutting down trees and clearing forests” → “continued deforestation” (adjective + noun). Verb (produce) → noun (production).'],
            ['Example 2', 'Two sentences combined into one simple sentence (S-V-O). Verb (distribute) → noun (distribution). Adjective (hungry) → noun (hunger).']
          ]}
        },
        {
          id: 'n3', short: 'How to', minutes: 25, grouping: 'Alone → pair',
          title: 'How to nominalise?',
          goal: 'Change verbs and adjectives into nouns and rewrite sentences.',
          blocks: [
            { type: 'model', title: 'Compare: the new information is in bold', rows: [
              ['Active verb sentence', 'Funding for the new program was reduced.'],
              ['Nominalised version', 'The reduction in funding for the new program <b>was heavily criticised.</b>'],
              ['Active verb sentence', 'The government implemented a new policy to reduce food waste.'],
              ['Nominalised version', 'The implementation of a new government policy to reduce food waste <b>has been a success.</b><br>Or: The government’s implementation of a new policy to reduce food waste <b>has been a success.</b>']
            ]},
            { type: 'key', title: 'Two common structures', points: [
              '<b>the + noun + preposition (of / in / to) + noun phrase + verb</b> — <i>The reduction in funding … was criticised.</i>',
              '<b>noun ’s + noun phrase + verb</b> — <i>The government’s implementation of … has been a success.</i>',
              'You often need extra words: articles (a, the), prepositions (in, of) and auxiliary verbs (is, was).'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Step 1.</b> Write the noun for each verb or adjective.' },
              { who: 'alone', text: '<b>Step 2.</b> Rewrite the six sentences. Use a noun from the table as the subject, then add the new information in brackets.' },
              { who: 'pair', text: '<b>Step 3.</b> Compare with a partner. Check the preposition after each noun (of? in?).' }
            ]},
            { type: 'table', id: 'n3t', title: 'Step 1 · Verb or adjective → noun', columns: ['Verb or adjective', 'Noun'], fixed: ['decide (v.)', 'react (v.)', 'establish (v.)', 'implement (v.)', 'discover (v.)', 'expand (v.)', 'important (adj.)', 'accessible (adj.)', 'significant (adj.)', 'available (adj.)', 'feasible (adj.)', 'effective (adj.)'] },
            { type: 'fields', title: 'Step 2 · Rewrite the sentences', fields: [
              { id: 'n3-1', label: '1. The local council established new food distribution centres. (… was welcomed by the community)', placeholder: 'The establishment of …', rows: 2 },
              { id: 'n3-2', label: '2. It is important to educate children about food sustainability. (… is widely recognised)', placeholder: 'The importance of …', rows: 2 },
              { id: 'n3-3', label: '3. Domestic composting is an effective way to reduce local food waste. (… is evident)', placeholder: 'The effectiveness of …', rows: 2 },
              { id: 'n3-4', label: '4. The program expanded to include more rural areas. (… was a significant development)', placeholder: 'The expansion of …', rows: 2 },
              { id: 'n3-5', label: '5. It is feasible to redirect surplus food to food banks. (… has been clearly demonstrated)', placeholder: 'The feasibility of …', rows: 2 },
              { id: 'n3-6', label: '6. Researchers discovered a link between pesticide use and declining bee populations. (… has prompted an international response)', placeholder: 'The discovery of …', rows: 2 },
              { id: 'n3-7', label: 'When you change an adjective to a noun, what happens to the verb after it (e.g. to educate)?', placeholder: 'It becomes …', rows: 1 }
            ]}
          ],
          answers: { items: [
            ['Verbs → nouns', 'decide → decision · react → reaction · establish → establishment · implement → implementation · discover → discovery · expand → expansion'],
            ['Adjectives → nouns', 'important → importance · accessible → accessibility · significant → significance · available → availability · feasible → feasibility · effective → effectiveness'],
            ['1', 'The establishment of new food distribution centres was welcomed by the community. OR The local council’s establishment of new food distribution centres was welcomed by the community.'],
            ['2', 'The importance <b>of educating</b> children about food sustainability is widely recognised.'],
            ['3', 'The effectiveness of domestic composting <b>in reducing</b> food waste is evident.'],
            ['4', 'The expansion of the program to include more rural areas was a significant development.'],
            ['5', 'The feasibility <b>of redirecting</b> surplus food to food banks has been clearly demonstrated.'],
            ['6', 'The discovery of a link between pesticide use and declining bee populations has prompted an international response.'],
            ['The verb', 'It becomes a gerund (verb + -ing) after a preposition: to educate → of educating; to reduce → in reducing.']
          ]}
        },
        {
          id: 'n4', short: 'Cause & effect', minutes: 15, grouping: 'Pairs',
          title: 'Nominalisation with cause and effect chains',
          goal: 'Combine a cause and an effect into one academic sentence.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: '<b>1.</b> Find the verb or adjective that can be nominalised in each sentence. <b>2.</b> Change it to a noun. <b>3.</b> Combine the pair with causal language.' },
              { who: 'pair', text: 'Partner A does A, C and E. Partner B does B and D. Then read each other’s sentences and check.' }
            ]},
            { type: 'model', title: 'Example', before: 'Cause: Food waste <b>decomposes</b> in landfills. → Effect: Methane, a potent greenhouse gas, is <b>produced</b>.', text: 'The <b>decomposition</b> of food waste in landfills <b>results in</b> the <b>production</b> of methane, a potent greenhouse gas.' },
            { type: 'language', title: 'Causal language', groups: [
              { label: 'Cause → effect', phrases: ['The decomposition of … leads to / results in / contributes to the production of …', 'The decomposition of … increases the production of …'] },
              { label: 'Effect ← cause', phrases: ['Methane … is produced because of / as a result of the decomposition of …', 'The production of methane … is a result of / is due to the decomposition of …'] }
            ]},
            { type: 'fields', fields: [
              { id: 'n4-1', label: 'A. People consume cheap, highly processed food. → People are more likely to experience health complications later in life.', placeholder: 'The consumption of …', rows: 2 },
              { id: 'n4-2', label: 'B. People are aware of the environmental and social impacts of food waste. → The amount of food conserved has increased.', placeholder: 'Awareness of …', rows: 2 },
              { id: 'n4-3', label: 'C. Food waste is being managed. → Methane emissions have reduced.', placeholder: 'The management of …', rows: 2 },
              { id: 'n4-4', label: 'D. Hunger has been immediately relieved in local communities. ← Food banks are becoming more popular.', placeholder: 'The immediate relief from …', rows: 2 },
              { id: 'n4-5', label: 'E. Magazzini Sociali approaches food distribution in an effective way. → The food system has noticeably improved.', placeholder: 'Magazzini Sociali’s effective approach …', rows: 2 }
            ]},
            { type: 'tip', text: 'Be concise. Nominalisation can make a sentence longer. Compare: <i>The reduction in food waste was achieved through the redistribution of resources.</i> / <i>Redistributing resources reduced food waste.</i> With a word limit, the shorter verb version may be better.' },
            { type: 'teacher', text: 'TB sentence B also has a third line (“They support policies promoting responsible food production and consumption.”) which the answer does not use — it is left out here. E1 in the TB reads “noticeable improved” (corrected to “noticeably”).' }
          ],
          answers: { items: [
            ['A', 'The consumption of cheap, highly processed food <b>increases</b> the likelihood of experiencing health complications later in life.'],
            ['B', 'Awareness of the environmental and social impacts of food waste <b>has led to</b> an increase in food conservation.'],
            ['C', 'The management of food waste <b>has led to</b> a reduction in methane emissions.'],
            ['D', 'The immediate relief from hunger in local communities <b>is due to</b> the increasing popularity of food banks.'],
            ['E', 'Magazzini Sociali’s effective approach to food distribution <b>has resulted in</b> noticeable improvements in the food system.']
          ]}
        },
        {
          id: 'n5', short: 'Noun phrases', minutes: 15, grouping: 'Pairs',
          title: 'Complex noun phrases',
          goal: 'Find the head noun and the words before and after it.',
          blocks: [
            { type: 'figure', src: 'assets/week3/noun-phrase.svg', alt: 'Diagram of a noun phrase: pre-modifier, then HEAD NOUN, then post-modifier. Example: the significant contribution of food waste to food insecurity — “the significant” comes before, “contribution” is the head noun, “of food waste to food insecurity” comes after.', caption: 'A noun phrase has ONE head noun. Everything else describes it.' },
            { type: 'key', title: 'Find the head noun first', points: [
              'A noun phrase = <b>one head noun</b> + words <b>before</b> it (articles, adjectives, nouns) + words <b>after</b> it (prepositional phrases, relative clauses).',
              'Not sure if it is a noun phrase? Replace it with a <b>pronoun</b> (it, they). If the sentence still makes sense, it is a noun phrase.'
            ]},
            { type: 'model', title: 'Worked example: the sentences from the start of the lesson', rows: [
              ['continued + <b>deforestation</b>', 'adjective + head noun'],
              ['the + <b>production</b> + of oxygen', 'determiner + head noun + prepositional phrase'],
              ['the + <b>distribution</b> + of essential food items through food banks', 'determiner + head noun + prepositional phrase'],
              ['immediate + <b>relief</b> + from hunger', 'adjective + head noun + prepositional phrase']
            ]},
            { type: 'quiz', id: 'n5q', title: 'Warm-up: what is the head noun?', items: [
              { q: 'The <u>implementation of a zero-waste policy</u> has been effective.', options: ['implementation', 'zero-waste', 'policy'], answer: 'implementation', why: 'implement → implementation. “of a zero-waste policy” tells us what is implemented.' },
              { q: 'The food waste generated by consumers…', options: ['food', 'waste', 'consumers'], answer: 'waste', why: '“food” describes the type of waste; “generated by consumers” is a reduced participle clause (which was).' },
              { q: 'Urban centres that have excessive food waste…', options: ['urban', 'centres', 'waste'], answer: 'centres', why: '“urban” is an adjective; “that have excessive food waste” is a relative clause.' },
              { q: 'The pressing issue of food insecurity in the United States…', options: ['issue', 'insecurity', 'United States'], answer: 'issue', why: '“pressing” is an adjective; “of food insecurity in the United States” is a prepositional phrase.' }
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Read the extract from <b>Sample 3.1</b>. Highlight the noun phrases. Partner A: sentences 5–6. Partner B: sentence 7.' },
              { who: 'pair', text: 'Complete the table: what comes <b>before</b> and <b>after</b> each head noun. The first two are done for you below.' }
            ]},
            { type: 'passage', id: 'n5p', title: 'IWA Sample 3.1 — extract from body paragraph 2 (references removed)', text: '⁵However, with the adoption of more sustainable consumption habits and redistribution programs, a significant amount of food could be redirected from waste streams to improve overall food availability in underserved populations. ⁶This redistribution could be particularly impactful in developed countries where surplus food from restaurants, retail, and households could be channelled to food banks to provide immediate relief. ⁷In fact, if the food waste generated in Australia were cut by one third, the amount saved could adequately feed 921,000 people for an entire year, demonstrating the importance of food conservation as a means of combating hunger.' },
            { type: 'model', title: 'Done for you', rows: [
              ['the + <b>adoption</b> + of more sustainable consumption habits', 'article + head noun + prepositional phrase'],
              ['redistribution + <b>programs</b>', 'noun + head noun']
            ]},
            { type: 'table', id: 'n5t', title: 'Head nouns in the extract', columns: ['Head noun', 'What comes before (pre-modifier)', 'What comes after (post-modifier)'], fixed: ['amount (sentence 5)', 'streams', 'availability', 'redistribution (sentence 6)', 'countries', 'banks', 'waste (sentence 7)', 'amount (sentence 7)', 'year', 'importance', 'means'] },
            { type: 'fields', fields: [
              { id: 'n5-1', label: 'What kinds of words come before the head noun? What kinds come after?', placeholder: 'Before: articles, … After: …', rows: 2 }
            ]},
            { type: 'teacher', text: 'Head nouns are given in the table to keep the task to 15 minutes — students still have to find where each phrase begins and ends. The head noun does not always have to be a nominalisation. Point out that complex noun phrases are expected in university writing.' }
          ],
          answers: { items: [
            ['a significant amount', 'before: a significant (article + adjective) · after: of food (prepositional phrase)'],
            ['waste streams', 'before: waste (noun)'],
            ['overall food availability', 'before: (overall) food (noun) · after: in underserved populations (prepositional phrase)'],
            ['this redistribution', 'before: this (demonstrative)'],
            ['developed countries', 'before: developed (adjective) · after: where surplus food from restaurants, retail, and households … (relative clause)'],
            ['food banks', 'before: food (noun)'],
            ['the food waste', 'before: the food (article + noun: the type of waste) · after: generated in Australia (reduced relative clause / participle clause)'],
            ['the amount', 'before: the (article) · after: saved (reduced relative clause / participle clause)'],
            ['an entire year', 'before: an entire (article + adjective)'],
            ['the importance', 'before: the (article) · after: of food conservation (prepositional phrase)'],
            ['a means', 'before: a (article) · after: of combating hunger (prepositional phrase)'],
            ['Pre-modifiers', 'Most often: adjectives (large amount), participles (-ed: a balanced budget; -ing: a growing problem), nouns (supermarket incentives), determiners (articles, quantifiers, demonstratives, possessives).'],
            ['Post-modifiers', 'Most often: prepositional phrases (in the supply chain) and relative clauses (including reduced participle clauses).']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 3 · 9A ───────────────────────── */
    {
      id: 'research', number: '03', code: '9A', minutes: 30,
      tone: 'amber', art: 'research',
      title: 'Research skills applied',
      subtitle: 'Research solutions for Week 4',
      outcome: 'Revise research skills, review your action plan for conducting research, recall the CRAAP test, and brainstorm keyword searches for solutions in your region.',
      activities: [
        {
          id: 'r1', short: 'Revision', minutes: 8, grouping: 'Alone → pair',
          title: 'Research skills: Revision',
          goal: 'Remember the key research ideas from Weeks 1–2.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Answer quickly — about 20 seconds per question.' },
              { who: 'pair', text: 'Check with a partner. Which answer were you least sure about?' }
            ]},
            { type: 'quiz', id: 'r1q', items: [
              { q: 'What type of research do scientists conduct in a laboratory?', options: ['Initial research', 'First research', 'Primary research', 'Preparatory research'], answer: 'Primary research', why: 'They collect new data themselves.' },
              { q: 'What is ‘secondary’ research?', options: ['Finding academic articles online/in the library', 'Asking people’s opinion', 'Doing quick research (in a few seconds)', 'Paying someone to do research for you'], answer: 'Finding academic articles online/in the library', why: 'You use research other people have already published.' },
              { q: 'What type of research are we conducting in DEC 15?', options: ['Primary Research', 'Secondary Research', 'Both Primary and Secondary Research', 'No Research'], answer: 'Secondary Research', why: 'You find and summarise published sources.' },
              { q: 'What term refers to government reports and papers by consultancies?', options: ['Green Literature', 'Brown Literature', 'Blue Literature', 'Grey Literature'], answer: 'Grey Literature', why: 'Grey literature is published outside academic journals.' },
              { q: 'What type of article is checked by other independent experts?', options: ['A Pre-Reviewed Article', 'A Peer-Reviewed Article', 'A Pro-Reviewed Article', 'A Poorly-Reviewed Article'], answer: 'A Peer-Reviewed Article', why: 'Peers = other experts in the field.' },
              { q: 'Where’s the best place to find reliable academic sources?', options: ['Google', 'Facebook', 'Sydney Uni Library Website', 'A Book Shop'], answer: 'Sydney Uni Library Website', why: 'The library gives you access to academic databases.' },
              { q: 'What can you write to search for useful sources?', options: ['The Assigned Question', 'A Complete Sentence', 'A Complete Paragraph', 'Keywords and Synonyms'], answer: 'Keywords and Synonyms', why: 'Databases work best with key words, not full sentences.' },
              { q: 'What ‘test’ can you do to assess how appropriate a source is?', options: ['The CRUDE Test', 'The CRUNK Test', 'The COOL Test', 'The CRAAP Test'], answer: 'The CRAAP Test', why: 'Currency, Relevance, Authority, Accuracy, Purpose.' },
              { q: 'What does the ‘C’ in the CRAAP Test represent?', options: ['Cultural', 'Currency', 'Capable', 'Cool'], answer: 'Currency', why: 'How recent is the source?' },
              { q: 'What does the ‘R’ in the CRAAP Test represent?', options: ['Readability', 'Rated', 'Relevance', 'Recognisable'], answer: 'Relevance', why: 'Does it fit your task?' },
              { q: 'What do the 2 ‘A’s in the CRAAP Test represent?', options: ['Authority and Accuracy', 'Authority and Answers', 'Accuracy and Adaptability', 'Adaptability and Accessibility'], answer: 'Authority and Accuracy', why: 'Who wrote it, and is the information supported?' },
              { q: 'What does the ‘P’ in the CRAAP Test represent?', options: ['Positivity', 'Purpose', 'Preparation', 'Position'], answer: 'Purpose', why: 'Why was it written?' }
            ]},
            { type: 'teacher', text: 'TB review questions — teachers choose how to run this (e.g. Kahoot). Keep it brisk.' }
          ]
        },
        {
          id: 'r2', short: 'CRAAP Test', minutes: 4, grouping: 'Pairs',
          title: 'CRAAP Test',
          goal: 'Remember the questions you ask to check a source.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'For each letter of CRAAP, say <b>one question</b> you would ask about an article. Don’t look at the answers yet.' },
              { who: 'pair', text: 'Open the answers and compare. Which questions did you forget?' }
            ]},
            { type: 'fields', fields: [
              { id: 'r2-1', label: 'Our CRAAP questions', placeholder: 'C: How recent …? R: … A: … A: … P: …', rows: 3 }
            ]},
            { type: 'tip', text: 'Use these questions when you choose your next article for the Research Summary Discussion.' }
          ],
          answers: { title: 'CRAAP questions (Week 1)', items: [
            ['Currency', 'How up-to-date (recent) is the source we are looking at?'],
            ['Relevance', 'Is the source relevant for the purpose of the assigned task? Does the source have a focus on solutions? Is there a focus on your group’s chosen region?'],
            ['Authority', 'Who wrote or published the information? What are their qualifications? Who do they work for? Can you verify the author’s credentials or the organisation that they represent?'],
            ['Accuracy', 'Where does the information come from? What evidence has been provided? Has the source provided references?'],
            ['Purpose', 'Who was this written for? Was it written for an academic audience? What was the purpose of writing the text? Is it designed to inform, entertain, educate or sell an idea/product? Are there any biases – political, ideological, cultural, religious, institutional, or personal?']
          ]}
        },
        {
          id: 'r3', short: 'Task reminder', minutes: 8, grouping: 'Alone',
          title: 'Task reminder · Self-regulation and monitoring: Action plan',
          goal: 'Understand the next task and improve how you research.',
          blocks: [
            { type: 'cards', title: 'The Research Summary Discussion', items: [
              { label: 'Week 2', text: 'Causes and effects of food insecurity in a certain region.' },
              { label: 'Week 4', text: '<b>Solutions</b> to the food insecurity in a certain region. Same research group, same region, a new academic article.' }
            ]},
            { type: 'model', title: 'The steps for Week 4', list: [
              '<b>Step 1:</b> focus on the solutions — work in the same research groups and find an academic article on the same region.',
              '<b>Step 2:</b> share your research with your group.',
              '<b>Step 3:</b> prepare a summary of your whole group’s research.',
              '<b>Step 4:</b> share your group’s research summary with a different group.',
              '<b>Step 5:</b> participate in a group discussion related to the topic.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Open your <b>DEC 15 Research Summary Discussion self-reflection form</b> (saved after Week 2). Find the <b>Action plan for further improvement</b>.' },
              { who: 'alone', text: 'Focus on the <b>Conducting research</b> section. Answer a) and b).' }
            ]},
            { type: 'fields', fields: [
              { id: 'r3-1', label: 'a) What issues did I have last time when I was researching?', placeholder: 'Last time I …', rows: 2 },
              { id: 'r3-2', label: 'b) How can I improve this process and make my research more efficient?', placeholder: 'This time I will …', rows: 2 }
            ]},
            { type: 'tip', text: 'In Week 2, did you find an article about solutions that you didn’t use? You can use it now.' },
            { type: 'teacher', text: 'If students did not save their self-reflection form, ask them to download a new one and think back about their experience.' }
          ],
          answers: { title: 'Model', items: [
            ['a)', 'I searched with the whole question, so I got too many general results, and I spent a long time reading articles that were not about my region.'],
            ['b)', 'I will use keywords + synonyms in the library database, add our region’s name, and read the abstract first. I will check each article with CRAAP before I read it in full.']
          ]}
        },
        {
          id: 'r4', short: 'Keywords', minutes: 10, grouping: 'Research group',
          title: 'Keywords for conducting research',
          goal: 'Make a list of keywords and synonyms to find a solutions article for your region.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your <b>original research group</b>. Share: Were your keyword searches helpful in Week 2? Which synonyms did you use?' },
              { who: 'group', text: 'Look back at your Week 1 keywords. Can you use them again for <b>solutions</b>, or change them?' },
              { who: 'group', text: 'Brainstorm keywords and synonyms in the table. Add your region and its country names.' }
            ]},
            { type: 'table', id: 'r4t', title: 'Our keyword bank', columns: ['Idea', 'Keywords and synonyms to search'], fixed: ['solution (noun)', 'solve (verb)', 'food insecurity', 'other phrases', 'our region'] },
            { type: 'key', title: 'After class', tone: 'warn', points: [
              'Find <b>one reliable academic source</b> about solutions to food insecurity in your group’s region. Apply the <b>CRAAP test</b>.',
              'Later this week (Day 5) you will show your group your article, explain why it is appropriate, and check that everyone has a <b>different</b> article.'
            ]},
            { type: 'teacher', text: 'Make sure students work in their original research groups (not their discussion groups). Students share their articles in the W3 D5 Discussion skills lesson.' }
          ],
          answers: { title: 'Possible keywords (Teacher’s Book)', items: [
            ['solution (noun)', 'resolution, strategy, approach, innovation'],
            ['solve (verb)', 'resolve, avoid, prevent'],
            ['food insecurity', 'instability, hunger, (food) scarcity / shortage / crisis, nutritional deficiency, malnutrition, starvation risk, insufficient food supply'],
            ['other phrases', 'community initiatives, sustainable farming solutions, government policies / intervention']
          ]}
        }
      ]
    }
  ],

  /* ───────────── Optional independent practice ───────────── */
  extras: [
    {
      id: 'x1', short: 'Practice test', minutes: 60, grouping: 'Homework', category: 'Homework',
      title: '10A Homework: Listening and Reading Practice Assessment',
      goal: 'Practise the Listening and Reading assessment before the real one.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Open <b>Canvas</b> and find the <b>Listening and Reading Practice Assessment</b>.' },
          { who: 'alone', text: 'Follow the instructions from the DEC team. Do it in one sitting, in a quiet place, without help — like the real assessment.' },
          { who: 'alone', text: 'Afterwards, write down one thing that was difficult. Bring it to class.' }
        ]},
        { type: 'fields', fields: [{ id: 'x1-1', label: 'One thing that was difficult, and what I will do about it', placeholder: 'It was hard to … Next time I will …', rows: 2 }] },
        { type: 'teacher', text: 'TB 10A: check Canvas and refer to instructions from the DEC team. Time shown is approximate.' }
      ]
    },
    {
      id: 'x2', short: 'Find nouns', minutes: 15, grouping: 'Alone', category: 'Writing practice',
      title: 'Find nominalisations in Berti et al. (2021)',
      goal: 'Notice nominalisation in a real academic text.',
      blocks: [
        { type: 'sources', ids: ['berti'] },
        { type: 'steps', items: [
          { who: 'alone', text: 'Read paragraphs B and E. Find <b>five nouns</b> that come from a verb or an adjective.' },
          { who: 'alone', text: 'Write the noun and the word it comes from (e.g. <i>distribution ← distribute</i>).' },
          { who: 'alone', text: 'Choose one and write your own sentence about food banks with it as the subject.' }
        ]},
        { type: 'fields', fields: [
          { id: 'x2-1', label: 'Five nominalisations', placeholder: 'distribution ← distribute …', rows: 3 },
          { id: 'x2-2', label: 'My sentence', placeholder: 'The … of … has …', rows: 2 }
        ]}
      ],
      answers: { items: [
        ['Possible answers', 'redistribution ← redistribute · volunteering ← volunteer · solution ← solve · criticism ← criticise · partnership ← partner · distribution ← distribute · support ← support · operations ← operate · reliance ← rely · collaboration ← collaborate'],
        ['Model sentence', 'Greater collaboration between food banks and governments could increase the number of people who receive help.']
      ]}
    }
  ],

  /* Word help: [word, plain meaning, example]. */
  glossary: [
    ['synthesis', 'Connecting ideas from different sources to show where they agree or differ.', 'Both Berti et al. (2021) and About That (2024) show that…'],
    ['paradox', 'A situation that seems impossible because it has two opposite features.', 'The “food paradox”: food waste and food insecurity at the same time.'],
    ['contradiction', 'Two facts or ideas that are opposite and don’t make sense together.', 'Food insecurity and food waste present a contradiction.'],
    ['win-win', 'Good for everyone who is involved.', 'Food banks are presented as a win–win solution.'],
    ['band-aid solution', 'A quick fix that does not solve the real cause of a problem.', 'Food banks can only offer a band-aid solution.'],
    ['controversial', 'Causing a lot of disagreement.', 'Food banks remain controversial.'],
    ['prioritise', 'Put one thing first because it is more important.', 'Companies that prioritise profit over human wellbeing.'],
    ['redistribution', 'Moving extra food to people who need it.', 'Redistributing excess food to those who need it.'],
    ['structural causes', 'Deep causes built into a system, not just one event.', 'Food banks do not address the structural causes.'],
    ['nominalisation', 'Changing a verb or adjective into a noun.', 'distribute → distribution.'],
    ['noun phrase', 'A group of words built around one head noun.', 'the importance of food conservation'],
    ['head noun', 'The main noun in a noun phrase. All other words describe it.', 'the IMPORTANCE of food conservation'],
    ['modifier', 'A word or phrase that describes the head noun, before or after it.', 'a significant amount of food'],
    ['keyword', 'An important word you type into a search to find sources.', 'food insecurity + Kenya + solutions']
  ]
};
