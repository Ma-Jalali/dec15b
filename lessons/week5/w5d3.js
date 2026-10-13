/* DEC15 · Week 5, Day 3 — lesson content.
   Teacher’s Book: W5 D3 · 3A Discussion skills (30) · 4A Reading to write (105) · 5A Listening to write (105).
   Texts: Clapp et al. (2022) reading · Oxfam (2022) listening — lessons/week5/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js.
   v3: each input has a personal lead-in, useful words, 2 gist + ≤6 detail questions in text order with a hint,
   and a note-taking frame for the Day 4–5 task (how effective is a solution?). Each language focus (arguing for a
   position · modals of obligation) has five parts: Notice → Clarify → Controlled → Less controlled → Production.
   Longer text analysis moved to extras (h4-x3, h4-x4); saved-work ids kept. */

window.DEC15_LESSON = {
  id: 'w5d3',
  week: 5, day: 3,
  title: 'Frameworks: read and listen',
  duration: 'About 4 hours',
  question: 'How can a framework help us evaluate solutions to food insecurity — and what will it take to end world hunger?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week5/hero-w5d3.svg',
  imageAlt: 'Six small pillars standing in a circle, a magnifying glass, a pair of headphones, a globe with grain, and a pile of coins.',
  journey: 'Today you learn to use a framework (= a set of questions to judge something). First, you try a simple one: the 3Cs. Then you meet the six dimensions of food security. You read the article about them and take notes in your own words. Finally, you listen to Oxfam: how much money can end world hunger — and what money can’t fix?',
  finish: { title: 'Thursday', text: 'Mediation and applying the framework' },

  sections: [
    /* ───────────────────────── 3A Discussion skills ───────────────────────── */
    {
      id: 'frame', number: '01', code: '3A', minutes: 30,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills',
      subtitle: 'What solution would you support? Why?',
      outcome: 'Use a simple framework to judge everyday things. Ask good questions for each of the six dimensions of food security.',
      activities: [
        {
          id: 'f1', short: 'Warmer', minutes: 10, grouping: 'Pairs',
          title: 'Warmer',
          goal: 'Learn what a framework is. Then use the 3Cs to rate something you use.',
          blocks: [
            { type: 'cards', title: 'Look at the three pictures. What are these?', items: [
              { label: 'Picture 1', icon: 'list', text: 'A chart with two columns: pros and cons.' },
              { label: 'Picture 2', icon: 'layers', text: 'A workflow: steps joined by arrows.' },
              { label: 'Picture 3', icon: 'flag', text: 'SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.' }
            ]},
            { type: 'quiz', id: 'f1q', title: 'Quick check', items: [
              { q: 'What are these?', options: ['Frameworks', 'Essays', 'Recipes'], answer: 'Frameworks', why: 'Each one is a clear way to organise or judge information.' },
              { q: 'What are they for?', options: ['To organise, analyse or evaluate information in a clear and consistent way', 'To decorate a presentation', 'To list references'], answer: 'To organise, analyse or evaluate information in a clear and consistent way', why: 'Frameworks help us make decisions and solve problems. Some are simple (pros and cons). Some are detailed (the CEFR language levels).' }
            ]},
            { type: 'key', title: 'The 3Cs: is it working well?', compare: [
              { label: 'Cost', text: 'Is it cheap enough? Is it worth the money?' },
              { label: 'Convenience', text: 'Is it easy to get or use? Does it save time?' },
              { label: 'Consequences', text: 'What good or bad effects does it have — now and later?' }
            ]},
            { type: 'table', id: 'f1t', title: 'Rate something you bought or used (e.g. a food delivery app, an AI tool, a payment app)', columns: ['What I bought or used', 'Cost', 'Convenience', 'Consequences'], rows: 1 },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Give your rating', phrases: ['It’s quite cheap, but…', 'It’s really convenient because…', 'One bad consequence is…'] },
              { label: 'Recommend', phrases: ['I would / wouldn’t recommend it because…', 'For me, the most important C is… because…'] }
            ]},
            { type: 'talk', prompts: ['Tell your partner your rating. Would you recommend it?', 'Which C was most important for you? Why?'] },
            { type: 'teacher', ref: 'w5d3-t1' }
          ]
        },
        {
          id: 'f2', short: 'Six dimensions', minutes: 10, grouping: 'Pairs or groups of 3',
          title: 'The Six-Dimensional Food Security Framework',
          goal: 'Learn the six dimensions. Write questions for your group’s dimension.',
          blocks: [
            { type: 'figure', src: 'assets/week5/six-pillars.svg', alt: 'The six dimensions of food security in a circle: availability, access, utilisation, stability, agency and sustainability.', caption: 'Six dimensions of food security', credit: 'Based on Clapp et al. (2022)', size: 'wide' },
            { type: 'talk', title: 'Talk for 2 minutes', prompts: [
              'Look at the six words. What do you think this framework is for?',
              'How is each word connected to food security (= everyone has enough good food)?'
            ]},
            { type: 'cards', title: 'Your teacher gives your group one element', pick: 'f2-pillar', items: [
              { label: 'Availability', text: 'food supply' }, { label: 'Access', text: 'getting food' }, { label: 'Utilisation', text: 'using food well' },
              { label: 'Stability', text: 'over time' }, { label: 'Agency', text: 'having a say' }, { label: 'Sustainability', text: 'the future' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Think: what <b>questions</b> can you ask to check your element?' },
              { who: 'group', text: 'Write your questions in your row.' },
              { who: 'class', text: 'Press <b>Write together</b>. The whole class can add questions to one page.' },
              { who: 'group', text: 'Time left? Try another element.' }
            ]},
            { type: 'language', title: 'Question starters', tabs: false, groups: [
              { label: 'Start your question with…', phrases: ['Is there enough…?', 'Can people…?', 'Is the food…?', 'Will it still… in the future?', 'Who decides…?'] }
            ]},
            { type: 'table', id: 'f2t', title: 'Questions to evaluate each element', columns: ['Element', 'Our evaluation question(s)'], fixed: ['Availability', 'Access', 'Utilisation', 'Stability', 'Agency', 'Sustainability'] },
            { type: 'teacher', ref: 'w5d3-t2' }
          ],
          answers: { items: [
            ['What is it for?', 'To check if a food security solution works, using six key factors. It also helps explain why a solution works in one place but not in another.'],
            ['Availability', 'Is there enough food being produced or supplied?'],
            ['Access', 'Can people afford and physically get the food they need?'],
            ['Utilisation', 'Is the food healthy and used well (e.g. storage, healthy diets)?'],
            ['Stability', 'Is there enough food all the time — even in a crisis (e.g. climate change, war)?'],
            ['Agency', 'Do people have control over their food choices and production?'],
            ['Sustainability', 'Can we keep producing food without harming resources for the future?']
          ]}
        },
        {
          id: 'f3', short: 'Apply it', minutes: 10, grouping: 'Groups of 3',
          title: 'Preventing food loss and waste at retail',
          goal: 'Use your questions to judge the “Buy one, get one later” idea.',
          blocks: [
            { type: 'tip', text: '<b>Key words:</b> retail (= shops and supermarkets) · expiry date (= the last day to eat it) · impulse (= a sudden wish to buy) · over-purchasing (= buying too much).' },
            { type: 'passage', id: 'f3p', title: 'Preventing food loss and waste at retail', text: 'In the European Union, about 5 million tonnes of food waste happen in the retail sector each year (FUSIONS, 2019). In developing countries, poor market conditions like not enough space and bad hygiene lead to a lot of food waste. Simple fixes like adding roofs to protect food can make a big difference (FAO, 2021). In developed countries, analysis carried out by Gunders (2012) showed that selling items close to their expiry date at lower prices has helped keep customers happy without reducing sales. Retailers like Sainsbury’s and Tesco have introduced "Buy one, get one later" campaigns, which allows customers to receive a second identical product later for free. This helps to reduce the impulse of over-purchasing from typical “Buy one, get one free” campaigns.' },
            { type: 'quiz', id: 'f3q', title: 'Quick check', items: [
              { q: 'In “Buy one, get one later”, when do you get the second product?', options: ['Later, for free', 'Now, for half price', 'Never'], answer: 'Later, for free', why: '“…receive a second identical product later for free.”' },
              { q: 'Why is it better than “Buy one, get one free”?', options: ['People don’t buy too much at once.', 'The food is cheaper.', 'The shop sells more food.'], answer: 'People don’t buy too much at once.', why: 'It reduces “the impulse of over-purchasing”, so less food is wasted at home.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Ask your element’s questions about <b>“Buy one, get one later”</b>.' },
              { who: 'group', text: '<b>Yes:</b> how does it help? <b>But:</b> what are the limits?' },
              { who: 'group', text: 'Time left? Do the other elements too.' }
            ]},
            { type: 'model', title: 'Example (Access)', text: '<b>Yes,</b> it helps because people can get a free product later. <b>But</b> it depends on whether the shop is close to their home.' },
            { type: 'table', id: 'f3t', title: 'Evaluate the campaign', columns: ['Element', 'Yes: how it helps', 'But: limits / it depends on…'], fixed: ['Availability', 'Access', 'Utilisation', 'Stability', 'Agency', 'Sustainability'] },
            { type: 'tip', text: 'Great start! You will use this framework again later this week.' },
            { type: 'teacher', ref: 'w5d3-t3' }
          ],
          answers: { title: 'Suggested answers (Teacher’s Book)', items: [
            ['Availability', '<b>Yes:</b> people want more food, so suppliers keep producing. <b>But:</b> it depends on whether shops can keep enough food without shortages or waste.'],
            ['Access', '<b>Yes:</b> it can give food to people on low incomes. <b>But:</b> if the food does not reach the people who need it, it does not help.'],
            ['Utilisation', '<b>Yes:</b> if it includes healthy, basic foods, people eat better. <b>But:</b> if it is mostly processed food or food that goes off quickly, it does not help long-term health.'],
            ['Stability', '<b>Yes:</b> if it continues, it can be a safety net. <b>But:</b> it may be a short-term fix, not a long-term solution.'],
            ['Agency', '<b>Yes:</b> people can help food security in their community. <b>But:</b> people who get the food may have little choice about it.'],
            ['Sustainability', '<b>Yes:</b> it can reduce waste by sharing extra food before it expires. <b>But:</b> if it is badly managed, it could lead to producing too much food.']
          ]}
        }
      ]
    },

    /* ───────────────────────── 4A Reading to write ───────────────────────── */
    {
      id: 'read', number: '02', code: '4A', minutes: 105,
      tone: 'plum', art: 'reading',
      title: 'Reading to write',
      subtitle: 'The case for a six-dimensional food security framework · Clapp et al. (2022)',
      outcome: 'Understand the six-dimensional food security framework. Read and take notes in your own words. Use the framework to judge solutions.',
      activities: [
        {
          id: 'r1', short: 'Lead-in + words', minutes: 10, grouping: 'Pairs',
          title: 'Lead-in + Vocabulary',
          goal: 'Think about your own food this week. Then learn eight useful words from the reading.',
          blocks: [
            { type: 'talk', title: 'Lead-in · Your food this week (3 minutes with a partner)', prompts: [
              'Think of one meal you ate this week. Was it <b>easy to get</b>? Was it <b>cheap enough</b>?',
              'Was it <b>healthy</b>? Did <b>you</b> choose it, or did someone else choose it?',
              'Every question you just asked is one <b>pillar</b> of food security. Today’s reading explains all six.'
            ]},
            { type: 'flip', title: 'Part 1 · Eight useful words from the reading', hint: 'Guess the meaning with your partner. Then turn the card. You can use these words in your own writing.', items: [
              { front: 'sufficient (adj)', back: 'Enough. <i>Do students get sufficient sleep before exams?</i>' },
              { front: 'to address (v)', back: 'To start to deal with a problem. <i>The city wants to address food waste in schools.</i>' },
              { front: 'food aid (n)', back: 'Food or money given to people who are hungry. <i>After the flood, the town needed food aid.</i>' },
              { front: 'dietary diversity (n)', back: 'Eating many different kinds of food. <i>Rice every day gives little dietary diversity.</i>' },
              { front: 'prone to (adj)', back: 'Likely to have something bad happen. <i>This area is prone to floods.</i>' },
              { front: 'holistic (adj)', back: 'Looking at the whole thing, not only one part. <i>A holistic plan looks at sleep, food and exercise.</i>' },
              { front: 'marginalized (adj)', back: 'Pushed to the edge of society, with little power. <i>Marginalized groups are often not asked for their opinion.</i>' },
              { front: 'indigenous (adj)', back: 'From a place originally; native. <i>Indigenous crops often grow well in local weather.</i>' }
            ]},
            { type: 'tip', text: '<b>Just recognise these when you read:</b> ecological = about nature · utilization = using something well (here: the body using food) · conceptualize = to form an idea · climatic events = big weather events (floods, droughts, storms) · agency = the power to make your own choices.' },
            { type: 'cloze', id: 'r1c', list: true, title: 'Part 2 · Quick check: choose the right word for each gap', options: ['indigenous', 'climatic', 'prone', 'food aid', 'Marginalized', 'agency', 'Utilization', 'dietary diversity', 'addressed', 'holistic', 'sufficient', 'ecological'],
              text: 'Crops that are {{1}} to an area can be more resistant to extreme {{2}} events.\nCommunities in areas {{3}} to drought may need {{4}} to fight hunger.\n{{5}} groups often lack enough {{6}} or power to make their own decisions.\n{{7}} of nutritious food and {{8}} is needed to maintain health.\nThe many causes of food insecurity needed to be {{9}} together in a {{10}} way.',
              answers: ['indigenous', 'climatic', 'prone', 'food aid', 'Marginalized', 'agency', 'Utilization', 'dietary diversity', 'addressed', 'holistic'] },
            { type: 'tip', text: 'Hint: two words in the list are not used.' },
            { type: 'teacher', ref: 'w5d3-t4' }
          ]
        },
        {
          id: 'r2', short: 'Read', minutes: 30, grouping: 'Alone → pair',
          title: 'Annotated reading + Reading for detail: Note-taking',
          goal: 'Find the main idea of the abstract. Then take notes in your own words and keep them.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Reading for gist: the abstract (= short summary)', items: [
              { who: 'alone', text: '<b>2 minutes.</b> Read the abstract once, quickly.' },
              { who: 'alone', text: 'Answer the two gist questions.' }
            ]},
            { type: 'passage', id: 'r2p', title: 'The abstract · Clapp et al. (2022)', text: 'The definition of food security has evolved and changed over the past 50 years, including the introduction of the four commonly cited pillars of food security: availability, access, utilization, and stability, which have been important in shaping policy. In this article, we make the case that it is time for a formal update to our definition of food security to include two additional dimensions proposed by the High Level Panel of Experts on Food Security and Nutrition: agency and sustainability. We show that the impact of widening food system inequalities and growing awareness of the intricate connections between ecological systems and food systems highlight the importance of these additional dimensions to the concept' },
            { type: 'quiz', id: 'h4-r2g', title: 'Gist questions', items: [
              { q: '1. What is the main purpose of the article?', options: ['to explain', 'to argue', 'to analyse', 'to discuss'], answer: 'to argue', why: 'The authors give an argument: add agency and sustainability.' },
              { q: '2. What do the authors want?', options: ['Add two pillars', 'Remove two pillars', 'Stop using pillars'], answer: 'Add two pillars', why: '“…a formal update… to include two additional dimensions”.' }
            ]},
            { type: 'steps', title: 'Now read again more carefully', items: [
              { who: 'alone', text: 'Highlight the <b>four</b> old pillars, the <b>two</b> new pillars and the <b>reason</b> (why).' },
              { who: 'pair', text: 'Answer questions 1–5. They follow the order of the text. Check with a partner.' }
            ]},
            { type: 'quiz', id: 'r2q', title: 'Detail questions (in text order)', items: [
              { q: '1. What are the four pillars now?', options: ['availability, access, utilization, stability', 'availability, access, agency, sustainability', 'production, prices, policy, people'], answer: 'availability, access, utilization, stability', why: '“the four commonly cited pillars of food security: availability, access, utilization, and stability”.' },
              { q: '2. What does <b>pillar</b> mean here?', options: ['a main part / factor', 'a stone column', 'a government law'], answer: 'a main part / factor', why: 'Pillars are the main parts that hold up the idea of food security.' },
              { q: '3. Which words show that the authors give an argument?', options: ['we make the case that', 'has evolved and changed', 'commonly cited'], answer: 'we make the case that', why: '“make the case” = argue that something is true or needed.' },
              { q: '4. What are the two new pillars?', options: ['agency and sustainability', 'access and stability', 'policy and nutrition'], answer: 'agency and sustainability', why: '“…two additional dimensions… agency and sustainability.”' },
              { q: '5. Why do the authors want new pillars?', options: ['more inequality + links between nature and food', 'the old pillars are 50 years old', 'governments asked for them'], answer: 'more inequality + links between nature and food', why: '“widening food system inequalities and growing awareness of the intricate connections between ecological systems and food systems”.' }
            ]},
            { type: 'tip', text: '<b>Hint:</b> question 3 is in sentence 2 · question 5 is in the last sentence. Look for <b>“inequalities”</b> and <b>“ecological”</b>.' },
            { type: 'teacher', ref: 'w5d3-t5' },
            { type: 'steps', title: 'Part 2 · Reading for detail: Note-taking', items: [
              { who: 'alone', text: 'Read the headings in the table first.' },
              { who: 'alone', text: 'Open the text. Read one part at a time.' },
              { who: 'alone', text: 'Write short notes in <b>your own words</b>. Use key words, not whole sentences.' },
              { who: 'pair', text: 'Compare your notes with a partner. Add what you missed.' }
            ]},
            { type: 'model', title: 'Example: from text to note', rows: [
              ['Text', 'The definition of food security has evolved and changed over the past 50 years.'],
              ['Note', 'def. of FS → changed over last 50 yrs']
            ], note: 'Short forms help: FS = food security · → = leads to / changed · + = and · e.g. = for example.' },
            { type: 'sources', ids: ['clapp'] },
            { type: 'table', id: 'r3t', title: 'My notes: The case for a six-dimensional food security framework', columns: ['', 'Notes'], fixed: [
              'Introduction<br><small>four pillars · 2 new pillars · why we need them</small>',
              'Availability<br><small>meaning · why important · what affects it</small>',
              'Access<br><small>meaning · why important · what affects it</small>',
              'Utilization<br><small>meaning · why important · what affects it · link to availability and access</small>',
              'Stability<br><small>meaning · why important · what affects it</small>',
              'Two additional pillars<br><small>why we need them</small>',
              'Agency<br><small>meaning · why important · inequalities · vulnerable groups · e.g.</small>',
              'Sustainability<br><small>meaning · why important</small>',
              'Conclusion'
            ]},
            { type: 'key', title: 'Part 3 · Keep for Thursday and Friday', points: ['On Day 4 and Day 5 your group judges <b>how effective</b> a solution to food waste is. You will use these pillars and this source.', 'Fill in two rows now: the main argument, and one pillar that could help you judge your solution.'] },
            { type: 'table', id: 'h4-r2n', title: 'Note-taking frame for the integrated task: Clapp et al. (2022)', columns: ['Source', 'Main point (my words)', 'Evidence / example', 'Useful for judging a solution? (which pillar · how)'], fixed: ['Clapp et al. (2022) · main argument', 'Clapp et al. (2022) · one useful pillar'] },
            { type: 'teacher', ref: 'w5d3-t6' }
          ],
          answers: { title: 'Answers and sample notes', items: [
            ['Abstract · Gist', '1 to argue · 2 add two pillars (agency and sustainability)'],
            ['Abstract · Detail 1–5', '1 availability, access, utilization, stability · 2 a main part / factor · 3 “we make the case that” · 4 agency and sustainability · 5 growing inequality and the links between nature (ecological systems) and food systems'],
            ['Frame · main argument', '<b>Main point:</b> add agency and sustainability to the four pillars. <b>Evidence:</b> nearly 1 in 3 people faced food insecurity in 2020 (F). <b>Useful:</b> gives us six questions to judge any solution.'],
            ['Notes · Introduction', 'Four pillars: availability; access; utilization; stability. 2 additional pillars: agency and sustainability. Why: to address inequalities in the food system; to better manage ecological resources for the long term.'],
            ['Notes · Availability', 'Physical presence of food in a given location. Important: ensures there is enough food to prevent hunger and malnutrition. Factors: farming practices, weather conditions, political stability.'],
            ['Notes · Access', 'Ability to get food — includes availability and resources to buy food. Important: people cannot benefit from available food if they cannot get it. Factors: economic resources, incomes, food distribution, inequality.'],
            ['Notes · Utilization', 'Being able to get enough nutrition from food. Important: needed for nutritional well-being. Factors: food safety, food quality, dietary diversity, individuals’ health status. Depends on access and availability — these are necessary to obtain nutrition from food.'],
            ['Notes · Stability', 'Food security is constant and reliable over time. Important: prevents periodic disruptions to the other pillars. Factors: conflicts, natural disasters, economic crises.'],
            ['Notes · Two additional pillars', 'Food insecurity is still a significant global problem. They give a better understanding of the growing complexities of food insecurity and encourage a more holistic approach to solving these issues.'],
            ['Notes · Agency', 'The ability of people to make decisions about their lives, incl. about food; power to shape food-related decisions and actions. Needed to resolve inequalities in the food system: addressing power imbalances and building agency → less poverty, more food security. Empowers vulnerable groups to take part in food-related decision making, e.g. smallholder farmers, women, indigenous communities.'],
            ['Notes · Sustainability', 'Producing food for a long time without depleting or harming natural resources; resource renewal so future generations can access enough food. Important: to mitigate the impacts of climate change, loss of biodiversity and environmental damage.'],
            ['Notes · Conclusion', 'Adding agency and sustainability to the food security framework is needed. The 2 additional pillars can help to improve equality in food systems and protect the environment.']
          ]}
        },
        {
          id: 'r5', short: 'Check + summarise', minutes: 30, grouping: 'Alone → pair',
          title: 'Building Understanding + Summarise/paraphrase',
          goal: 'Use your notes to answer questions. Then see how a writer paraphrases the text.',
          blocks: [
            { type: 'sort', id: 'r5s1', single: true, title: '1 · Match the paragraphs to the topics', buckets: [
              { label: 'Paragraph B', letter: 'B' }, { label: 'Paragraph C', letter: 'C' }, { label: 'Paragraph D', letter: 'D' }, { label: 'Paragraph E', letter: 'E' }, { label: 'Paragraph G', letter: 'G' }, { label: 'Paragraph I', letter: 'I' }
            ], items: [
              { text: 'i. Producing food in a way that does not harm the environment', answer: 5, why: 'Sustainability.' },
              { text: 'ii. Maintaining good health from food', answer: 2, why: 'Utilization.' },
              { text: 'iii. The ability to get food that is available', answer: 1, why: 'Access.' },
              { text: 'iv. Whether or not food is physically present', answer: 0, why: 'Availability.' },
              { text: 'v. Being able to choose what food we want to grow and eat', answer: 4, why: 'Agency.' },
              { text: 'vi. Being able to get food all the time', answer: 3, why: 'Stability.' }
            ]},
            { type: 'sort', id: 'r5s2', single: true, title: '2 · Match each problem to the relevant pillar', buckets: [
              { label: 'Availability' }, { label: 'Access' }, { label: 'Utilization' }, { label: 'Stability' }, { label: 'Agency' }, { label: 'Sustainability' }
            ], items: [
              { text: 'The shelves at the supermarket are empty. They are always empty.', answer: 0 },
              { text: 'There are enough vegetables for sale, but I cannot afford to buy them.', answer: 1 },
              { text: 'There are only highly processed, unhealthy foods for sale in the supermarket.', answer: 2 },
              { text: 'Last week there was enough food at the supermarket. This week, many shelves are empty.', answer: 3 },
              { text: 'Poor farmers cannot choose what food to grow or negotiate for a higher price.', answer: 4 },
              { text: 'Farming uses many chemicals that reduce the soil quality.', answer: 5 }
            ]},
            { type: 'tip', text: '<b>Hint:</b> Availability = is food there? · Access = can I get it? · Utilization = is it healthy? · Stability = all the time? · Agency = can I choose? · Sustainability = is it OK for the future?' },
            { type: 'quiz', id: 'r5q', title: 'Questions 3–10', items: [
              { q: '3. Which three pillars are <b>directly</b> affected by climate change?', options: ['Availability, Stability, Sustainability', 'Availability, Agency, Sustainability', 'Access, Stability, Agency', 'Access, Utilization, Agency'], answer: 'Availability, Stability, Sustainability', why: 'Access is affected only indirectly, via availability — e.g. climate change may reduce availability, leading to higher prices.' },
              { q: '4. In Week 3 the listening said a problem with traditional food banks is that people cannot choose what food they receive. Which pillar does this relate to?', options: ['Access', 'Availability', 'Stability', 'Agency'], answer: 'Agency', why: 'Agency = control over food choices.' },
              { q: '5. A problem with food waste is that it can increase greenhouse gas emissions. Which pillar does this relate to?', options: ['Sustainability', 'Agency', 'Stability', 'Availability'], answer: 'Sustainability', why: 'Emissions harm the environment and future resources.' },
              { q: '6. Obesity can result from food insecurity. Which pillar does this relate to?', options: ['Access', 'Utilization', 'Stability', 'Agency'], answer: 'Utilization', why: 'Utilization is about nutrition and food quality.' },
              { q: '7. Why are the authors arguing for the addition of two more pillars?', options: ['The current model does not consider how inequality and environmental problems can cause food insecurity.', 'The current model was created fifty years ago, so it is not relevant in the modern world.', 'The two additional pillars will encourage governments to take food insecurity seriously.', 'Hunger is still a global problem because agency and sustainability have not been taken seriously.'], answer: 'The current model does not consider how inequality and environmental problems can cause food insecurity.', why: 'Paragraph A: growing inequalities and links between ecological and food systems.' },
              { q: '8. Why is agency important for marginalised groups, such as women and indigenous communities?', options: ['People with power often don’t listen to them when making decisions.', 'They need more support from government agencies.', 'They often live in places that don’t have access to supermarkets.', 'They don’t have enough money to buy healthy food.'], answer: 'People with power often don’t listen to them when making decisions.', why: 'Agency ensures that the marginalized can participate in decision-making (G–H).' },
              { q: '9. Which is NOT an example of agency?', options: ['Forming a group with other farmers to negotiate higher sale prices.', 'Growing potatoes because your boss told you to.', 'Choosing to grow cabbages because they suit your soil.', 'An indigenous community using land for ceremonies rather than growing food.'], answer: 'Growing potatoes because your boss told you to.', why: 'Someone else made the decision.' },
              { q: '10. Overall, what can we learn from this text?', options: ['The current four pillars are not very useful anymore.', 'Empowering marginalised groups and improving sustainability will end hunger.', 'Improving food security requires solutions that address different interconnected factors.', 'Food insecurity is too complicated to understand.'], answer: 'Improving food security requires solutions that address different interconnected factors.', why: 'The authors want a more holistic approach.' }
            ]},
            { type: 'tip', text: '<b>Hint:</b> use the pillar hint above for 1, 3 and 5. For 2 and 4, read paragraphs <b>F</b> and <b>H</b> again.' },
            { type: 'sources', ids: ['clapp'] },
            { type: 'teacher', ref: 'w5d3-t8' },
            { type: 'cloze', id: 'r4c', title: '1 · Complete the summary with words from the box', options: ['agency', 'decisions', 'environment', 'food', 'food security', 'generations', 'inequality', 'resources', 'sustainability'],
              text: 'Our current understanding of food security includes four interconnected factors: availability, access, utilization and stability. Despite the usefulness of this understanding, it does not account for the relationship between increasing social {{1}} and {{2}}. It also overlooks the importance of environmental {{3}} in the {{4}} system. Therefore, two additional pillars should be added to the current four-pillar model of food security: {{5}} and sustainability. Agency refers to the ability of people to have control over their lives and make their own {{6}}, including decisions related to food. Sustainability is concerned with producing food in a way that does not harm the {{7}} or reduce ecological {{8}} for future {{9}}.',
              answers: ['inequality', 'food security', 'sustainability', 'food', 'agency', 'decisions', 'environment', 'resources', 'generations'] },
            { type: 'passage', id: 'r4p', title: 'The original text (first two sentences). Compare it with the summary above.', text: 'Over the last 50 years, our understanding of food security has grown to include four main areas: availability, access, utilization, and stability (FAO, 2006; Webb et al., 2006; CFS, 2009; Upton et al., 2016). However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are, point to the need for two more dimensions: agency and sustainability.' },
            { type: 'quiz', id: 'r4q', title: 'Look at key words, connecting words and phrases → sentences', items: [
              { q: 'How did the contrasting connector change?', options: ['However → Despite (+ “this” to refer back to the previous sentence)', 'However → Therefore', 'It did not change.'], answer: 'However → Despite (+ “this” to refer back to the previous sentence)', why: '“Despite the usefulness of this understanding…”' },
              { q: '“four main areas” became…', options: ['four interconnected factors', 'four pillars of policy', 'four new dimensions'], answer: 'four interconnected factors', why: 'A change of key words (synonyms).' },
              { q: '“growing inequalities” became…', options: ['increasing social inequality', 'more poverty', 'unfair prices'], answer: 'increasing social inequality', why: 'Synonym + word form: growing → increasing.' },
              { q: 'What happened to the two noun phrases in the second original sentence?', options: ['They became two sentences in the summary.', 'They were deleted.', 'They became one quotation.'], answer: 'They became two sentences in the summary.', why: '“…it does not account for the relationship between social inequality and food security. It also overlooks the importance of environmental sustainability in the food system.”' }
            ]},
            { type: 'teacher', ref: 'w5d3-t7' }
          ],
          answers: { items: [
            ['Paraphrase · Linking word', 'However → Despite. “this” is added to refer back to the sentence before.'],
            ['Paraphrase · Key words', 'main areas → interconnected factors · growing inequalities → increasing social inequality · ecological and food systems → environmental sustainability in the food system'],
            ['Paraphrase · Phrases → sentences', 'One long sentence with two noun phrases → two short sentences: “it does not account for the relationship between social inequality and food security. It also overlooks the importance of environmental sustainability in the food system.”']
          ]}
        },
        {
          id: 'r4', short: 'Arguing', minutes: 20, grouping: 'Alone → pairs',
          title: 'Language focus: Arguing for a position',
          goal: 'Say clearly what is needed, and why: “… points to the need for…”, “… requires…”, “By doing this, … can…”.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (2 minutes) — two sentences from Clapp et al. (2022)', points: [
              '“However, the growing inequalities in food systems… <b>point to the need for</b> two more dimensions: agency and sustainability.” (introduction)',
              '“In conclusion, effectively resolving food insecurity <b>requires</b> the inclusion of both agency and sustainability…” (conclusion)'
            ]},
            { type: 'quiz', id: 'r6q', title: 'What are the writers doing here?', items: [
              { q: '1. In both sentences, the writers are…', options: ['giving their main argument', 'giving background', 'giving an example'], answer: 'giving their main argument', why: 'Both sentences say what is needed: two more pillars.' },
              { q: '2. Which words say that something is necessary?', options: ['point to the need for · requires', 'However · In conclusion', 'growing · effectively'], answer: 'point to the need for · requires', why: 'These words tell the reader what we need to do.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (4 minutes) — what is arguing for a position?', points: [
              'You say clearly <b>what you think is needed</b>, and you give a <b>reason</b> and a <b>benefit</b>.',
              'Why it matters: in academic writing the reader must find your position fast. Put it in the <b>introduction</b> and again in the <b>conclusion</b> — like Clapp et al. (2022).'
            ]},
            { type: 'key', title: 'How to argue: problem → position → reason → benefit', compare: [
              { label: '1. Show the problem', text: 'However, … (does not / is not) …', eg: 'However, the canteen does not sell cheap healthy food.' },
              { label: '2. State your position', text: '… point(s) to the need for + noun', eg: 'Long queues point to the need for a second café.' },
              { label: '2. State your position', text: '… require(s) + noun', eg: 'Learning a language requires daily practice.' },
              { label: '3. Give a reason', text: 'This is because …', eg: 'This is because many students live far from campus.' },
              { label: '4. Show the benefit', text: 'By doing this, … can …', eg: 'By doing this, students can save money.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> the need <b>for</b> + noun (✓ the need for more buses · ✗ the need to more buses) · requires + noun (✓ requires practice · ✗ requires to practise).' },
            { type: 'cloze', id: 'h4-r4c', list: true, title: 'Part 3 · Controlled practice (5 minutes): choose the best words',
              options: [['point to the need for', 'require to', 'need for'], ['requires', 'requires to', 'is requiring for'], ['However', 'By doing this', 'This is because'], ['This is because', 'By doing this', 'However'], ['By doing this', 'However', 'This is because'], ['points to the need for', 'points to need', 'requires to']],
              text: 'The long queues at the canteen {{1}} a second café.\nLearning to cook {{2}} time and practice.\nStudents want a healthy breakfast. {{3}}, the café only sells cakes.\nOur city should add more bike lanes. {{4}} many people want to cycle to work.\nSchools could give students free water bottles. {{5}}, students can save money.\nPoor sleep before exams {{6}} better study plans.',
              answers: ['point to the need for', 'requires', 'However', 'This is because', 'By doing this', 'points to the need for'],
              why: ['“the need for” + noun (a second café).', 'requires + noun. No “to”.', 'However shows the problem / limitation.', 'This is because gives the reason.', 'By doing this, … can … shows the benefit.', 'Singular subject (poor sleep) → points.'] },
            { type: 'order', id: 'h4-r4o', title: 'Put the mini-argument in order: problem → position → benefit', ends: ['First', 'Last'], items: [
              'Many students in our city eat fast food every day.',
              'However, the university canteen does not sell cheap healthy meals.',
              'This points to the need for a low-cost healthy menu.',
              'By doing this, the university can help students eat better and study better.'
            ], why: 'Background → problem (However) → position (points to the need for) → benefit (By doing this).' },
            { type: 'model', title: 'Part 4 · Less controlled practice (4 minutes) — example first', before: 'Our school needs more bins.', text: 'Rubbish on the floor <b>points to the need for</b> more bins.' },
            { type: 'fields', id: 'h4-r4f', title: 'Rewrite each idea with the phrase in brackets. Then compare with a partner.', fields: [
              { id: 'h4-r4f-1', label: '1. People in my city need cheaper buses. (point(s) to the need for)', placeholder: 'High bus prices point to the need for…', rows: 2 },
              { id: 'h4-r4f-2', label: '2. You must practise every day to speak English well. (requires)', placeholder: 'Speaking English well requires…', rows: 2 },
              { id: 'h4-r4f-3', label: '3. Shops should give old bread to food banks. (By doing this, … can …)', placeholder: 'Shops should give old bread to food banks. By doing this,…', rows: 2 },
              { id: 'h4-r4f-4', label: '4. Your own idea: one problem at your university → what is needed?', placeholder: 'However, … This points to the need for…', rows: 2 }
            ]},
            { type: 'steps', title: 'Part 5 · Production (5 minutes): your mini-argument', items: [
              { who: 'alone', text: '<b>Question:</b> which pillar should your city or country improve first?' },
              { who: 'alone', text: 'Write <b>3 sentences</b>: problem → position → benefit. Use one idea from Clapp et al. (2022).' },
              { who: 'pair', text: 'Read it to a partner. Your partner ticks the checklist.' }
            ]},
            { type: 'model', title: 'Example', text: 'In my city, many families cannot afford fresh vegetables. This <b>points to the need for</b> better access to cheap, healthy food. <b>By doing this</b>, the city <b>can</b> improve access and utilization, two pillars in Clapp et al.’s (2022) framework.' },
            { type: 'language', title: 'Sentence frame', tabs: false, groups: [
              { label: 'Problem', phrases: ['In my city / country, …', 'However, … does not …'] },
              { label: 'Position', phrases: ['This points to the need for…', 'Improving food security here requires…'] },
              { label: 'Benefit', phrases: ['By doing this, … can improve (pillar)…'] }
            ]},
            { type: 'fields', id: 'h4-r4p', fields: [
              { id: 'h4-r4p-1', label: 'My mini-argument (3 sentences)', placeholder: 'In my country, … This points to the need for… By doing this,…', rows: 4 }
            ]},
            { type: 'checklist', id: 'h4-r4k', title: 'Partner checklist', items: [
              'There is a problem first (In my city… / However, …).',
              'The position uses “points to the need for” or “requires”.',
              'The benefit uses “By doing this, … can …” and names a pillar.'
            ]},
            { type: 'teacher', ref: 'w5d3-t9' }
          ],
          answers: { items: [
            ['Notice', '1 giving their main argument · 2 point to the need for · requires. The main argument is in introduction sentence 2 and conclusion sentence 1.'],
            ['Controlled', '1 point to the need for · 2 requires · 3 However · 4 This is because · 5 By doing this · 6 points to the need for'],
            ['Less controlled · examples', '1 High bus prices point to the need for cheaper public transport. · 2 Speaking English well requires daily practice. · 3 Shops should give old bread to food banks. By doing this, they can reduce waste and help hungry families.'],
            ['Production · example', 'In my country, farmers have little say about prices. This points to the need for more agency for small farmers. By doing this, the government can improve agency and stability.']
          ]}
        },
        {
          id: 'r7', short: 'Criticality', minutes: 15, grouping: 'Groups of 2–3',
          title: 'Criticality',
          goal: 'Use the six pillars to judge a real situation. Suggest changes.',
          blocks: [
            { type: 'cards', title: 'Your teacher gives your group one situation', pick: 'r7-sit', items: [
              { label: 'Group 1 · Mr X', text: 'Mr X lost his job and does not have enough money to buy food regularly. He now relies on a traditional food bank for his weekly groceries. The food bank gives Mr X a box of food each week. Mr X has no choice about what food he receives.' },
              { label: 'Group 2 · Mrs Y', text: 'Mrs Y is a smallholder farmer in a poor country. A large company owns the land that she works on. The company tells her what food to grow and controls the price for her produce. To make food as quickly and cheaply as possible, Mrs Y uses chemical fertilisers.' }
            ]},
            { type: 'tip', text: '<b>Key words:</b> relies on (= needs) · smallholder farmer (= a farmer with a small piece of land) · fertilisers (= chemicals to help plants grow). Group 1: remember the Week 3 listening about food banks.' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Better or worse', phrases: ['It improves access because…', 'It makes agency worse because…'] },
              { label: 'Changes and problems', phrases: ['The food bank / company could…', 'But this could cause a problem: …', 'This could reduce… so…'] }
            ]},
            { type: 'fields', title: 'Our answers', fields: [
              { id: 'r7-1', label: '1. Which pillars does the situation make better?', placeholder: 'Access, because…', rows: 2 },
              { id: 'r7-2', label: '2. Which pillars does it make worse?', placeholder: 'Agency, because…', rows: 2 },
              { id: 'r7-3', label: '3. What changes could help these pillars?', placeholder: 'The food bank could…', rows: 3 },
              { id: 'r7-4', label: '4. What problems could these changes cause? Which pillars?', placeholder: 'It could reduce… so access…', rows: 3 }
            ]},
            { type: 'talk', prompts: ['Group 1 and Group 2 meet. Explain your situation and your answers to the other group.'] },
            { type: 'teacher', ref: 'w5d3-t10' }
          ],
          answers: { items: [
            ['Mr X · better', 'Access.'],
            ['Mr X · worse', 'Agency. Also maybe sustainability: he may waste food he does not want.'],
            ['Mr X · changes', 'Give him a choice about the food he gets.'],
            ['Mr X · problems', 'The food bank may help fewer people — so access could go down for some people.'],
            ['Mrs Y · better', 'Availability and access — food is made quickly and cheaply.'],
            ['Mrs Y · worse', 'Sustainability and agency.'],
            ['Mrs Y · changes', 'She owns her land · she chooses what to grow · she controls the price · she uses greener farming methods.'],
            ['Mrs Y · problems', 'Buying land and changing farming methods can be expensive. She may grow less food at first.']
          ]}
        }
      ]
    },

    /* ───────────────────────── 5A Listening to write ───────────────────────── */
    {
      id: 'listen', number: '03', code: '5A', minutes: 105,
      tone: 'amber', art: 'listening',
      title: 'Listening to write',
      subtitle: 'How much money would it take to end world hunger? · Oxfam (2022)',
      outcome: 'Listen and take notes in your own words. Use modals of obligation (need to, must, should) to judge solutions.',
      activities: [
        {
          id: 'l1', short: 'Warm-up', minutes: 15, grouping: 'Pairs',
          title: 'Warmer + Vocabulary',
          goal: 'Talk about giving money to end hunger. Learn six useful words from the talk.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Warmer: a person and an organisation', items: [
              { label: 'Elon Musk', icon: 'users', text: 'Who is he? What do you know about him?' },
              { label: 'Oxfam', icon: 'layers', text: 'Do you know this organisation? If not, look it up quickly. What do they do?' }
            ]},
            { type: 'talk', title: 'Lead-in · Talk with a partner (3 minutes)', prompts: [
              'Have you ever given money or food to a charity? Why / why not?',
              'Imagine you have <b>$6 billion</b>. Could it end world hunger? What would you spend it on first?',
              'Today you will hear Oxfam answer this question. How are Elon Musk and Oxfam connected, do you think?'
            ]},
            { type: 'teacher', ref: 'w5d3-t11' },
            { type: 'flip', title: 'Part 2 · Vocabulary: six useful words from the listening', hint: 'Guess the meaning with your partner. Then turn the card.', items: [
              { front: 'abysmal (adj)', back: 'Very, very bad. <i>The food in that hostel was abysmal.</i>' },
              { front: 'humanitarian needs (n)', back: 'The basic things people need to live: food, water, safety. <i>After the earthquake, humanitarian needs were huge.</i>' },
              { front: 'organise as a collective', back: 'Make a group with people who want the same thing. <i>The students organised as a collective to ask for cheaper food.</i>' },
              { front: 'smallholder farmers (n)', back: 'Farmers with a small piece of land. <i>Smallholder farmers often sell at the local market.</i>' },
              { front: 'collective action (n)', back: 'When a group works together for one goal. <i>Collective action made the city add more bike lanes.</i>' },
              { front: 'entrepreneur (n)', back: 'A person who starts a business. <i>A young entrepreneur opened a zero-waste café.</i>' }
            ]},
            { type: 'cloze', id: 'l2c', list: true, title: 'Choose the right word or expression for each gap', options: ['humanitarian needs', 'abysmal', 'smallholder farmers', 'organise as a collective', 'collective action', 'entrepreneur'],
              text: 'The fact that many people still experience severe hunger and don’t have their {{1}} met is {{2}}.\nThe {{3}} decided to {{4}} to sell their crops for better prices.\nWith financial support, some farmers can make their own business and become an {{5}}.',
              answers: ['humanitarian needs', 'abysmal', 'smallholder farmers', 'organise as a collective', 'entrepreneur'] },
            { type: 'teacher', ref: 'w5d3-t12' }
          ]
        },
        {
          id: 'l3', short: 'Listen', minutes: 30, grouping: 'Alone → pair',
          title: 'Listening for gist + Listening for detail: Note-taking',
          goal: 'Get the main idea of the opening. Then take notes on the whole talk and keep them.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Listening for gist', items: [
              { who: 'alone', text: 'Read the two gist questions first.' },
              { who: 'class', text: 'Your teacher plays the <b>opening</b> of the talk.' },
              { who: 'alone', text: 'Listen for the <b>gist</b> (= the main idea). Then answer.' }
            ]},
            { type: 'listening', source: 'Oxfam (2022)', title: 'How much money would it take to end world hunger?', videoId: '', audio: '', clip: 'the opening, then the whole talk', transcripts: [['oxfam', 'Transcript (adapted)']] },
            { type: 'quiz', id: 'l3q', items: [
              { q: '1. What did Elon Musk do?', options: ['He challenged the UN to show him a plan to solve world hunger.', 'He gave $6 billion to Oxfam.', 'He started a food bank.'], answer: 'He challenged the UN to show him a plan to solve world hunger.', why: 'He asked for a $6 billion plan that would end world hunger.' },
              { q: '2. What has happened since Musk’s challenge?', options: ['The problem has worsened.', 'World hunger has ended.', 'Food prices have fallen.'], answer: 'The problem has worsened.', why: '“Since Musk’s challenge, the hunger crisis has worsened.”' },
              { q: '3. What does Oxfam do?', options: ['It focuses on food and hunger.', 'It builds farms for companies.', 'It sells technology.'], answer: 'It focuses on food and hunger.', why: '“At Oxfam, we’ve been focused on food and hunger since our founding.”' },
              { q: '4. What is Oxfam doing in response to Elon Musk?', options: ['Responding to his challenge by explaining what money can (and can’t) do to end world hunger', 'Asking him to work for Oxfam', 'Criticising the UN'], answer: 'Responding to his challenge by explaining what money can (and can’t) do to end world hunger', why: '“we’re going to explain what money could accomplish, step by step”.' }
            ]},
            { type: 'tip', text: '<b>Hint:</b> Musk asked the UN for a <b>$6 billion plan</b> to end world hunger. Listen for <b>“we’re going to explain…”</b>.' },
            { type: 'talk', title: 'Predict what comes next', prompts: [
              'The speaker says: “Let’s begin by examining how close we are to ending world hunger.” How close are we, do you think?',
              'Can <b>money alone</b> end world hunger? Or do we need other things too?'
            ]},
            { type: 'steps', title: 'Part 2 · Listening for detail: Note-taking', items: [
              { who: 'alone', text: 'Read the headings in the table. <b>Predict</b> what you will hear.' },
              { who: 'alone', text: 'Listen to the whole talk once. Do not stop.' },
              { who: 'alone', text: 'Write short notes in your own words. <b>Numbers are important!</b>' },
              { who: 'pair', text: 'Check your notes with a partner. Listen again. Add what you missed.' }
            ]},
            { type: 'tip', text: 'Save time with short forms: <b>$37bn</b> = 37 billion dollars · <b>%</b> = per cent · <b>↑</b> = more · <b>↓</b> = less · <b>w/</b> = with.' },
            { type: 'table', id: 'l4t', title: 'My notes: How much money would it take to end world hunger?', columns: ['', 'Notes'], fixed: [
              'Introduction<br><small>Musk’s challenge · what happened next · what Oxfam does · Oxfam’s answer to Musk</small>',
              'How close are we to ending world hunger?',
              'Two dimensions of the crisis<br><small>1. extreme hunger: causes · 2. chronic (= long-term) hunger: who, causes</small>',
              'Mohanna Ahmed Ali Eljabaly',
              'Cost to end world hunger<br><small>extreme + chronic hunger · extreme hunger · what world leaders give now · extra money needed · compared to military spending · low- and middle-income countries</small>',
              'What money cannot solve',
              'A solution: local food production<br><small>food entrepreneurs: what they need · big food companies: what they must do · smallholder farmers: problems, solutions · women</small>',
              'Role of consumers<br><small>Oxfam’s Eat for Good: 5 things shoppers can do</small>',
              'Concluding comment'
            ]},
            { type: 'key', title: 'Part 3 · Keep for Thursday and Friday', points: ['Your group will judge <b>how effective</b> a solution to food waste is. Oxfam gives numbers and solutions you can use as evidence.', 'Fill in two rows now. Keep these notes with your Clapp et al. (2022) notes.'] },
            { type: 'table', id: 'h4-l3n', title: 'Note-taking frame for the integrated task: Oxfam (2022)', columns: ['Source', 'Main point (my words)', 'Evidence / example (numbers!)', 'Useful for judging a solution? (which pillar · helps / limits)'], fixed: ['Oxfam (2022) · can money end hunger?', 'Oxfam (2022) · one solution'] },
            { type: 'teacher', ref: 'w5d3-t13' }
          ],
          answers: { title: 'Suggested notes', items: [
            ['Frame · can money end hunger?', '<b>Main point:</b> money helps but cannot end hunger alone. <b>Evidence:</b> $37bn a year until 2030; money cannot stop war, climate change or the power of big companies. <b>Useful:</b> a solution must also improve agency and sustainability, not only access.'],
            ['Notes · Introduction', 'Musk: asked the UN for a $6 billion plan to end world hunger · since then the problem has worsened · Oxfam focuses on (world) hunger · provided a proposal / explains what money can do to end world hunger.'],
            ['Notes · How close are we?', '150 million more people affected by hunger since the start of the pandemic · 828 million people experienced hunger in 2021.'],
            ['Notes · Two dimensions', '1. Extreme hunger = life-threatening; causes: conflicts, climate change, economic lockdowns. 2. Chronic hunger: mainly women who work small plots of land (smallholdings); causes: lack of access to finance to improve farming practices, extreme weather events.'],
            ['Notes · Mohanna Ahmed Ali Eljabaly', '“Abysmal” to talk about famine in the 21st century · the injustice of the whole of humanity.'],
            ['Notes · Cost', 'Both extreme and chronic hunger: $37 billion a year until 2030 · extreme hunger: $23 billion · world leaders’ current contribution: 46% of what is needed · extra needed: $14 billion in additional foreign aid from wealthy countries every year until 2030 = about 1% of global military spending · low- and middle-income countries: $19 billion additional revenue a year until 2030.'],
            ['Notes · Money cannot solve', 'War, climate change, the power of giant corporations.'],
            ['Notes · Local food production', 'Food entrepreneurs: vision to grow healthy food locally; need tools to grow, process and distribute food. Large companies: very powerful → must treat women fairly (equal pay), mitigate the effects of climate change, move away from business models that prioritise short-term profit over well-being. Smallholder farmers: challenge = climate change; solutions = climate-resilient farming practices, collective action to improve incomes. Women: >50% of smallholder farmers → need to protect their (land) rights.'],
            ['Notes · Consumers', 'Shop sustainably. Eat for Good: 1 save food · 2 shop seasonal · 3 eat less meat · 4 support farmers and farm producers · 5 cook smart.'],
            ['Notes · Concluding comment', 'Money can help reduce world hunger but cannot solve the problem. Changing the food systems is also needed.']
          ]}
        },
        {
          id: 'l5', short: 'Check', minutes: 20, grouping: 'Alone → pair',
          title: 'Building Understanding',
          goal: 'Use your notes to answer questions about the talk.',
          blocks: [
            { type: 'sort', id: 'l5s', single: true, title: '1 · Complete the table: match each number to its meaning', buckets: [
              { label: 'Money spent now' }, { label: 'Percentage of female smallholder farmers' }, { label: 'Additional money needed compared to military spending' }, { label: 'Additional annual foreign aid needed from wealthy countries' }, { label: 'Additional revenue needed from low- and middle-income countries' }
            ], items: [
              { text: 'About half what is needed', answer: 0, why: 'World leaders contributed only 46%.' },
              { text: 'Over half', answer: 1, why: '“More than 50 percent of the world’s smallholder farmers are women.”' },
              { text: 'Equal to 1%', answer: 2, why: '“…about 1 percent of what the world spends annually on military and arms projects.”' },
              { text: '$14 billion', answer: 3, why: 'An additional $14 billion in foreign aid every year until 2030.' },
              { text: '$19 billion', answer: 4, why: 'Around $19 billion every year until 2030.' }
            ]},
            { type: 'quiz', id: 'l5q', title: 'Questions 2–3 and 5–10', items: [
              { q: '2. Why does the speaker compare additional funding for foreign aid to military spending?', options: ['To highlight the importance of military spending.', 'To suggest a way to stop conflicts.', 'To point out that wealthy countries have enough money to end hunger.', 'To point out that military spending should be increased.'], answer: 'To point out that wealthy countries have enough money to end hunger.', why: 'The extra aid is only about 1% of military spending.' },
              { q: '3. The speaker mentions three causes of hunger that money cannot solve, including war and climate change. What is the third?', options: ['Pollution', 'Food waste', 'Economic shocks', 'Influence of large food companies'], answer: 'Influence of large food companies', why: '“…or take away the power that giant corporations have over agricultural trade”.' },
              { q: '5. Why does the speaker think local food production is better than large companies?', options: ['It causes less harm to the environment.', 'Locally produced food is cheaper.', 'It empowers women.', 'Local foods are easier to grow.'], answer: 'It causes less harm to the environment.', why: 'Local food can be grown in a “fair and sustainable manner”; large companies must stop prioritising profit over “planetary well-being”.' },
              { q: '6. What is the main challenge faced by smallholder farmers?', options: ['Low pay', 'Unhealthy food', 'Pests', 'Climate change'], answer: 'Climate change', why: '“…struggling to adapt to the climate crisis.”' },
              { q: '7. What do female smallholder farmers need?', options: ['Agency to make decisions about their farms.', 'Better tools and equipment.', 'Access to healthy food.', 'Larger farms.'], answer: 'Agency to make decisions about their farms.', why: '“…secure their rights to land, raise their voice in decision-making spaces…”' },
              { q: '8. Why do female smallholder farmers lack agency?', options: ['Their farms are often controlled by large food companies.', 'They need to make more money.', 'They need access to better farming tools and equipment.', 'They need help to manage climate change.'], answer: 'Their farms are often controlled by large food companies.', why: 'Large companies “wield incredible power over the livelihoods of women, workers, and farmers”.' },
              { q: '9. What can consumers do to help end hunger?', options: ['Pressure governments to provide more funding.', 'Consume food in a way that is sustainable and that supports farmers.', 'Look for ethical food labels at the supermarket.', 'Grow more food at home.'], answer: 'Consume food in a way that is sustainable and that supports farmers.', why: 'Eat for Good: save food, shop seasonal, eat less meat, support farmers, cook smart.' },
              { q: '10. What is the speaker’s overall message?', options: ['Ending hunger will require a large amount of money.', 'Ending hunger will require more money and a fairer food system.', 'Middle and low-income countries will need to contribute more money to ending hunger.', 'Elon Musk’s proposal should not be taken seriously.'], answer: 'Ending hunger will require more money and a fairer food system.', why: '“Money is only part of the equation — and we need to transform food systems.”' }
            ]},
            { type: 'tip', text: '<b>Hint:</b> use your notes. Question 2 → “What money cannot solve” row · questions 3–4 → “Local food production” row · question 5 → “Role of consumers” row.' },
            { type: 'cloze', id: 'l5c', title: '4 · Complete the paraphrased summary about big companies (no more than two words from the listening; you may need to change the word form)', options: ['power', 'equality', 'equal', 'climate', 'crisis', 'well-being', 'profit', 'treatment'],
              text: 'Big companies have a lot of {{1}} over their workers. They must ensure pay {{2}} for women, reduce the impacts of {{3}} change and give greater importance to human and environmental {{4}}.',
              answers: ['power', 'equality', 'climate', 'well-being'],
              why: ['“wield incredible power over the livelihoods of women, workers, and farmers”', '“provide equal pay” → pay equality (word form change)', '“mitigate the effects of the climate crisis”', '“human and planetary well-being”'] },
            { type: 'tip', text: '<b>Hint for gap 2:</b> the speaker says “equal pay”. After “pay” you need a <b>noun</b>, so change the word form.' },
            { type: 'sources', ids: ['oxfam'] },
            { type: 'teacher', ref: 'w5d3-t14' }
          ],
          answers: { items: [
            ['Question 1', '<img src="assets/week5/hunger-funding.svg" alt="The Oxfam numbers: money spent now is about half of what is needed (46%); over half of smallholder farmers are women; the extra money needed equals about 1% of military spending; wealthy countries need to give an extra $14 billion in foreign aid every year; low- and middle-income countries need to raise $19 billion a year.">'],
            ['Question 4', 'Big companies have a lot of <b>power</b> over their workers. They must ensure pay <b>equality</b> for women, reduce the impacts of <b>climate</b> change and give greater importance to human and environmental <b>well-being</b>. Why “equality”? After “pay” we need a noun.']
          ]}
        },
        {
          id: 'l6', short: 'Modals', minutes: 25, grouping: 'Pairs → groups of 2–3',
          title: 'Language focus: Modals of obligation + Language in use',
          goal: 'Use modals of obligation (must, need to, should, ought to, had better) to recommend solutions.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (2 minutes) — two sentences from Oxfam (2022)', points: [
              '“Large global food and beverage companies… <b>must</b> provide equal pay and treatment for women…”',
              '“More than 50 percent of the world’s smallholder farmers are women. We <b>need to</b> secure their rights to land…”'
            ]},
            { type: 'quiz', id: 'l6q', title: 'Why does the speaker say must and need to?', items: [
              { q: '1. The speaker uses <b>must</b> and <b>need to</b> to say that something is…', options: ['necessary', 'possible', 'in the past'], answer: 'necessary', why: 'Oxfam says these actions are necessary to end hunger.' },
              { q: '2. You remember these from Week 4. What are they called?', options: ['modals of obligation', 'reporting verbs', 'linking words'], answer: 'modals of obligation', why: 'Modals of obligation give strong advice or say what is necessary.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (4 minutes) — modals of obligation', points: [
              'We use them to <b>recommend solutions</b>: what people, companies or governments should do.',
              'Why it matters: in a discussion or an essay, your recommendation must sound clear and confident. Choose a strong or softer modal.'
            ]},
            { type: 'key', title: 'Strong → softer (modal + verb)', compare: [
              { label: 'must', text: 'very strong: it is necessary / a rule', eg: 'You must wear a seatbelt.' },
              { label: 'need to', text: 'strong: it is necessary', eg: 'I need to buy milk today.' },
              { label: 'had better (’d better)', text: 'a warning: or something bad happens', eg: 'We’d better leave now, or we’ll miss the bus.' },
              { label: 'should / ought to', text: 'advice: it is a good idea', eg: 'You should drink more water. · You ought to call your mum.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> (1) no “to” after must, should, had better: ✓ must provide · ✗ must to provide. (2) In a list, say the modal once: ✓ They must provide…, reduce… and move away… · ✗ They must provide, must reduce, must move away…' },
            { type: 'cloze', id: 'h4-l6c', list: true, title: 'Part 3 · Controlled practice (5 minutes): choose the best word',
              options: [['must', 'might', 'could'], ['should', 'must not', 'can’t'], ['need to', 'need', 'needing'], ['had better', 'had better to', 'must to'], ['shouldn’t', 'should to', 'not should'], ['ought to', 'ought', 'ought for'], ['reduce', 'to reduce', 'must to reduce']],
              text: 'It’s the law: drivers {{1}} stop at a red light.\nYou look tired. Maybe you {{2}} go to bed earlier tonight.\nThe fridge is empty. I {{3}} buy some food today.\nIt’s raining hard. You {{4}} take an umbrella, or you’ll get wet.\nStudents {{5}} cook too much rice. It often goes in the bin.\nShops {{6}} give unsold food to food banks.\nSupermarkets must sell cheaper fruit, {{7}} waste and support local farmers.',
              answers: ['must', 'should', 'need to', 'had better', 'shouldn’t', 'ought to', 'reduce'],
              why: ['A law → must (very strong).', '“Maybe” → soft advice → should.', 'need + to + verb.', 'A warning (or you’ll get wet) → had better + verb, no “to”.', 'Negative: should + not → shouldn’t.', 'ought + to + verb.', 'In a list, say the modal once: must sell…, reduce… and support…'] },
            { type: 'model', title: 'Part 4 · Less controlled practice (5 minutes) — example first', text: 'In my city, people <b>need to</b> waste less bread. Bakeries <b>should</b> sell old bread cheaply at the end of the day.' },
            { type: 'fields', title: 'Finish the sentences about your city or country. Then read them to a partner.', fields: [
              { id: 'h4-l6f-1', label: '1. In my city, people need to…', placeholder: 'In my city, people need to…', rows: 1 },
              { id: 'h4-l6f-2', label: '2. Supermarkets in my country should…', placeholder: 'Supermarkets in my country should…', rows: 1 },
              { id: 'h4-l6f-3', label: '3. The government must…, … and …  (one modal, three verbs)', placeholder: 'The government must…, … and …', rows: 1 },
              { id: 'h4-l6f-4', label: '4. To waste less food at home, I’d better…', placeholder: 'To waste less food at home, I’d better…', rows: 1 }
            ]},
            { type: 'teacher', ref: 'w5d3-t15' },
            { type: 'steps', title: 'Part 5 · Production: Language in use (9 minutes, groups of 2–3)', items: [
              { who: 'group', text: 'Read the 12 ways to reduce hunger and food waste. Choose your <b>top 3</b>.' },
              { who: 'group', text: 'Take turns: <b>1 minute each</b>. Recommend your 3 ways with modals. Give a reason for each.' },
              { who: 'group', text: 'Listeners: tick the checklist and ask <b>two “wh” questions</b> (Why…? How…?).' }
            ]},
            { type: 'cards', title: 'Ways to reduce hunger and food waste from the course', numbered: true, items: [
              { text: 'Be aware of cognitive biases' }, { text: 'Empower women' }, { text: 'Use apps to manage food' }, { text: 'Avoid overbuying' },
              { text: 'Use your leftovers' }, { text: 'Freeze your food' }, { text: 'Understand food labels' }, { text: 'Redistribute extra food' },
              { text: 'Buy locally produced food' }, { text: 'Grow food at home' }, { text: 'Invest more money in new technology' }, { text: 'Remove big companies from the food system' }
            ]},
            { type: 'model', title: 'Example', text: 'I think that we <b>need to</b> avoid overbuying. A lot of food is wasted in the home, so this method can reduce food waste and also help us to save money.' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Recommend', phrases: ['I think we need to… because…', 'Governments must…, … and …', 'Shoppers should…, so…'] },
              { label: 'Ask “wh” questions', phrases: ['Why do you think…?', 'How can we…?', 'Why didn’t you choose…?'] }
            ]},
            { type: 'checklist', id: 'h4-l6k', title: 'Listener checklist', items: [
              'My partner used at least 3 different modals.',
              'There was no “to” after must / should / had better.',
              'My partner gave a reason for each recommendation.'
            ]},
            { type: 'spinner', id: 'l6sp', title: 'Extra practice if you finish early: spin and recommend', text: 'Spin. Make one sentence with the method and the modal. Give a reason. Your partner asks one “wh” question. Then swap.', reels: [
              { label: 'Method', start: 'Spin!', items: ['avoid overbuying', 'use your leftovers', 'freeze your food', 'buy local food', 'grow food at home', 'empower women', 'redistribute extra food', 'understand food labels'] },
              { label: 'Modal', start: '…', items: ['need to', 'must', 'should', 'ought to', 'had better'] }
            ]},
            { type: 'teacher', ref: 'w5d3-t16' }
          ],
          answers: { items: [
            ['Notice', '1 necessary · 2 modals of obligation'],
            ['Controlled', '1 must · 2 should · 3 need to · 4 had better · 5 shouldn’t · 6 ought to · 7 reduce'],
            ['Less controlled · examples', '1 In my city, people need to use their leftovers. · 2 Supermarkets in my country should sell “ugly” fruit cheaply. · 3 The government must support farmers, fund food banks and teach people about labels. · 4 To waste less food at home, I’d better make a shopping list.'],
            ['Modals · Lists', 'The modal comes only once; the next verbs start without it: “They must provide…, mitigate… and move away…”']
          ]}
        },
        {
          id: 'l8', short: 'Criticality', minutes: 15, grouping: 'Groups of 3–4',
          title: 'Criticality: Discussion',
          goal: 'Discuss who should pay to end hunger: governments, rich people or shoppers.',
          blocks: [
            { type: 'tip', text: '<a href="https://www.statista.com/chart/26203/wfp-musk-plan-hunger-emergency/" target="_blank" rel="noopener"><b>Open the Statista chart</b></a>. It shows how Elon Musk’s money could be spent (he had not given it when this lesson was written). The money would last only <b>one year</b>.' },
            { type: 'talk', prompts: [
              'Compare the chart with the numbers in the listening. Would this money end world hunger?',
              'Should Elon Musk give the money anyway? Why / why not?',
              'Governments need to spend more. Should very rich people <b>have to</b> give money too?'
            ]},
            { type: 'scale', id: 'l8s', title: 'Game: where do you stand?', statement: 'Very rich people should have to give money to end world hunger.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Not sure' },
            { type: 'choose', id: 'l8c', title: 'Who has the greater responsibility to end hunger?', options: ['Regular consumers', 'Wealthy people', 'Governments'] },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Give your opinion', phrases: ['I think governments need to… because…', 'In my view, rich people should…', 'Consumers must also…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'l8-1', label: 'Why? Use a modal of obligation.', placeholder: 'I think governments need to… because…', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w5d3-t17' }
          ]
        }
      ]
    }
  ],


  extras: [
    {
      id: 'x1', short: 'Summarise', minutes: 15, grouping: 'Alone', category: 'Extra listening',
      title: 'Summarise/paraphrase',
      goal: 'Make your listening notes shorter: main ideas only.',
      blocks: [
        { type: 'key', title: 'Summarise your notes', points: ['Write only the <b>main ideas</b> and the most important details.', 'Use <b>short forms and symbols</b> to save space.', 'Use <b>your own words</b> (paraphrase).'] },
        { type: 'table', id: 'x1t', title: 'Summary table', columns: ['', 'Main ideas'], fixed: [
          'Money currently spent to solve hunger',
          'Money that is needed<br><small>How does this compare to Elon Musk’s proposal?</small>',
          'Problems money can’t solve',
          'Changes needed in the food system',
          'Concluding comment'
        ]},
        { type: 'sources', ids: ['oxfam'] }
      ],
      answers: { items: [
        ['Money spent now', 'About half of what is needed.'],
        ['Money needed', '$14 billion in additional foreign aid from wealthy countries + $19 billion additional revenue until 2030 from low- and middle-income countries. Much more is needed than Musk’s $6 billion.'],
        ['Money can’t solve', 'War, climate change, the influence of large food companies.'],
        ['Changes needed', 'Local production and consumption · empowerment of women · tools to resist climate change · better treatment from big companies · ethical shopping from consumers.'],
        ['Concluding comment', 'Hunger is a solvable problem, but it will take more than money.']
      ]}
    },
    {
      id: 'x2', short: 'Research', minutes: 30, grouping: 'Groups of 3 → alone', category: 'Homework',
      title: 'Homework',
      goal: 'Find out about one solution to food waste in your city, region or country. Bring notes tomorrow.',
      blocks: [
        { type: 'tip', text: 'Tomorrow you will judge how well a food waste solution works in your place. You will use <b>Clapp et al.’s (2022) six-dimensional framework</b>.' },
        { type: 'cards', title: '1 · Your teacher assigns ONE solution to your group', pick: 'x2-sol', items: [
          { label: 'Food banks', text: 'Week 3' }, { label: 'Apps to help reduce waste', text: 'Week 4' }, { label: 'Upcycled food', text: 'Week 4' }, { label: 'Technology to track waste', text: 'Weeks 3–4' }, { label: 'Ways consumers can reduce waste at home', text: 'Weeks 3–4' }
        ]},
        { type: 'choose', id: 'x2-focus', title: '2 · As a group, decide your focus', options: ['Our city', 'Our region', 'Our country as a whole'] },
        { type: 'steps', items: [
          { who: 'alone', text: 'Look again at the class texts. Make notes on anything useful.' },
          { who: 'alone', text: 'Find one <b>case study</b> (= a real example) or <b>government report</b>. How was the solution used in your place (or another place)?' },
          { who: 'alone', text: 'Note anything about <b>any</b> of the six pillars. Tomorrow you will choose one or two.' }
        ]},
        { type: 'fields', title: 'My research notes — bring them to class tomorrow', fields: [
          { id: 'x2-1', label: 'Our place (city / region / country)', placeholder: 'Sydney…', rows: 1 },
          { id: 'x2-2', label: 'Notes from the class input texts', placeholder: 'Berti et al. (2021): …', rows: 4 },
          { id: 'x2-3', label: 'My case study or government report (title, author, year, link)', placeholder: 'NSW Government (2023)…', rows: 2 },
          { id: 'x2-4', label: 'What I found — which pillars does it relate to?', placeholder: 'Access: … · Sustainability: …', rows: 5 }
        ]}
      ]
    },
    {
      id: 'h4-x3', short: 'Challenge', minutes: 15, grouping: 'Alone → pair', category: 'Extra reading',
      title: 'Challenge: how Clapp et al. build their argument',
      goal: 'See what each sentence of the introduction and conclusion does. Answer two harder questions.',
      blocks: [
        { type: 'tip', text: 'Limitation = a problem or weak point. Benefit = a good result.' },
        { type: 'passage', id: 'r6p', title: 'The introduction (A) and conclusion (J) · Clapp et al. (2022)', text: 'A. Over the last 50 years, our understanding of food security has grown to include four main areas: availability, access, utilization, and stability (FAO, 2006; Webb et al., 2006; CFS, 2009; Upton et al., 2016). However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are, point to the need for two more dimensions: agency and sustainability. Agency and sustainability are becoming increasingly important as we recognize the need for food systems that are not only productive but also equitable and environmentally sustainable. Including these dimensions in the food security framework would help address broader issues such as empowerment of communities and long-term resource management.\n\nJ. In conclusion, effectively resolving food insecurity requires the inclusion of both agency and sustainability in the existing framework of food security. By doing this, food security policies can address immediate food needs, empower individuals and communities and protect the environment. This approach will help create a more comprehensive strategy for long-term food security, ultimately leading to more resilient food systems and healthier communities.' },
        { type: 'sort', id: 'r6s1', single: true, title: 'Game: what does each part of the introduction do?', hint: 'Limitation = a problem or weak point.', buckets: [
          { label: 'Background: the current model' }, { label: 'Limitation of the current model' }, { label: 'Main argument: the need for two more pillars' }, { label: 'Reason for two new pillars' }, { label: 'Result / benefit of adding two new pillars' }
        ], items: [
          { text: 'Over the last 50 years, our understanding of food security has grown to include four main areas…', answer: 0 },
          { text: 'However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are,', answer: 1 },
          { text: '…point to the need for two more dimensions: agency and sustainability.', answer: 2 },
          { text: 'Agency and sustainability are becoming increasingly important as we recognize the need for food systems that are not only productive but also equitable and environmentally sustainable.', answer: 3 },
          { text: 'Including these dimensions in the food security framework would help address broader issues such as empowerment of communities and long-term resource management.', answer: 4 }
        ]},
        { type: 'sort', id: 'r6s2', single: true, title: 'Game: what does each sentence in the conclusion do?', buckets: [
          { label: 'Restate main argument' }, { label: 'Present result / benefits' }, { label: 'Future result / benefits' }
        ], items: [
          { text: 'In conclusion, effectively resolving food insecurity requires the inclusion of both agency and sustainability…', answer: 0 },
          { text: 'By doing this, food security policies can address immediate food needs, empower individuals and communities and protect the environment.', answer: 1 },
          { text: 'This approach will help create a more comprehensive strategy for long-term food security…', answer: 2 }
        ]},
        
        { type: 'sources', ids: ['clapp'] }
      ]
    },
    {
      id: 'h4-x4', short: 'Challenge', minutes: 15, grouping: 'Alone → pair', category: 'Extra listening',
      title: 'Challenge: modals in the transcript',
      goal: 'Find all the modals of obligation in four parts of the talk. Learn “That starts with + -ing”.',
      blocks: [
        { type: 'passage', id: 'l6p', title: 'Part of the transcript — highlight the modals of obligation', text: '1. That’s why we need to transform our food systems if we’re serious about ending world hunger. That starts with supporting local food production and thriving local food systems while pushing giant corporations that dominate global food markets to do right by people and the planet.\n\n2. Large global food and beverage companies wield incredible power over the livelihoods of women, workers, and farmers who sustain their operations. They must provide equal pay and treatment for women, mitigate the effects of the climate crisis on food production, and move away from business models that prioritize short-term profit over human and planetary well-being.\n\n3. More than 50 percent of the world’s smallholder farmers are women. We need to secure their rights to land, raise their voice in decision-making spaces on the land issues that affect them, and strengthen leadership for women’s land rights.\n\n4. In conclusion, ending world hunger is the best investment money can buy. By making clear financial commitments to address extreme and chronic hunger, world leaders can bring us closer to Zero Hunger in the years and decades ahead. But money is only part of the equation—and we need to transform food systems to ensure food security for all.' },
        { type: 'key', title: 'Another way to recommend', compare: [
          { label: 'That starts with + verb-ing', text: 'Use it for the first step of a solution.', eg: 'That starts with supporting local food production.' }
        ]},
        
        { type: 'sources', ids: ['oxfam'] }
      ]
    }
  ],

  glossary: [
    ['framework', 'A structured way to organise, analyse or evaluate information.', 'The 3Cs is a simple framework.'],
    ['pillar', 'A main part or element that supports an idea (also: dimension).', 'Availability is one pillar of food security.'],
    ['availability', 'Whether food is physically present in a place.', 'Empty shelves show a problem of availability.'],
    ['access', 'Whether people can get (and afford) the food that is available.', 'Low incomes reduce access to food.'],
    ['utilization', 'Getting good nutrition from food.', 'Dietary diversity improves utilization.'],
    ['stability', 'Food security that stays reliable over time.', 'Conflicts can damage stability.'],
    ['agency', 'The power to make your own decisions, including about food.', 'Food bank users may have little agency.'],
    ['sustainability', 'Producing food without harming resources for the future.', 'Chemical fertilisers can reduce sustainability.'],
    ['holistic', 'Looking at the whole system, not only parts.', 'A holistic approach to food insecurity.'],
    ['marginalized', 'Pushed to the edges of society; with little power.', 'Marginalized groups need a voice.'],
    ['indigenous', 'Native to a particular region.', 'Indigenous crops can resist climatic events.'],
    ['prone to', 'Likely to experience something bad.', 'Regions prone to drought.'],
    ['dietary diversity', 'Eating a variety of foods.', 'Dietary diversity supports good health.'],
    ['food aid', 'Help (food or money) given to reduce hunger.', 'They need food aid after the flood.'],
    ['make the case', 'Argue that something is true or needed.', 'We make the case that it is time for an update.'],
    ['point to the need for', 'Show that something is needed (+ noun).', 'Long queues point to the need for a second café.'],
    ['abysmal', 'Extremely bad.', 'It is abysmal that famine still exists.'],
    ['humanitarian needs', 'Basic needs for survival and dignity.', 'Only 46% of humanitarian needs were funded.'],
    ['smallholder farmer', 'A farmer with a small piece of land.', 'Over half of smallholder farmers are women.'],
    ['collective action', 'Action by a group to reach a shared goal.', 'Farmers used collective action to raise prices.'],
    ['entrepreneur', 'A person who starts a business and takes the risk.', 'Food entrepreneurs grow food locally.'],
    ['modal of obligation', 'A verb like must, need to or should that says what is necessary.', 'They must provide equal pay.'],
    ['chronic hunger', 'Not eating enough food over a long time.', 'About 1 in 10 people suffer from chronic hunger.']
  ]
};
