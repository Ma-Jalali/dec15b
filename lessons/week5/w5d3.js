/* DEC15 · Week 5, Day 3 — lesson content.
   Teacher’s Book: W5 D3 · 3A Discussion skills (30) · 4A Reading to write (105) · 5A Listening to write (105).
   Texts: Clapp et al. (2022) reading · Oxfam (2022) listening — lessons/week5/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js. */

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
          id: 'r1', short: 'Vocabulary', minutes: 10, grouping: 'Pairs',
          title: 'Vocabulary',
          goal: 'Learn 12 key words from the reading. Then use them in sentences.',
          blocks: [
            { type: 'flip', title: 'Part 1 · Key words from the reading', hint: 'Guess the meaning with your partner. Then turn the card.', items: [
              { front: 'ecological', back: 'About living things and nature (the environment).' },
              { front: 'utilization', back: 'Using something well for a purpose.' },
              { front: 'food aid', back: 'Help (food or money) given to people who are hungry.' },
              { front: 'sufficient', back: 'Enough.' },
              { front: 'to address', back: 'To deal with a problem.' },
              { front: 'dietary diversity', back: 'Eating many different foods.' },
              { front: 'conceptualize', back: 'To form an idea.' },
              { front: 'climatic events', back: 'Big weather events: floods, droughts, storms.' },
              { front: 'prone (to)', back: 'Likely to have something bad happen.' },
              { front: 'holistic', back: 'Looking at the whole thing, not only the parts.' },
              { front: 'marginalized', back: 'Pushed to the edge of society; with little power.' },
              { front: 'indigenous', back: 'From a place originally; native.' }
            ]},
            { type: 'cloze', id: 'r1c', list: true, title: 'Part 2 · Choose the right word for each gap', options: ['indigenous', 'climatic', 'prone', 'food aid', 'Marginalized', 'agency', 'Utilization', 'dietary diversity', 'addressed', 'holistic', 'sufficient', 'ecological'],
              text: 'Crops that are {{1}} to an area can be more resistant to extreme {{2}} events.\nCommunities in areas {{3}} to drought may need {{4}} to fight hunger.\n{{5}} groups often lack enough {{6}} or power to make their own decisions.\n{{7}} of nutritious food and {{8}} is needed to maintain health.\nThe many causes of food insecurity needed to be {{9}} together in a {{10}} way.',
              answers: ['indigenous', 'climatic', 'prone', 'food aid', 'Marginalized', 'agency', 'Utilization', 'dietary diversity', 'addressed', 'holistic'] },
            { type: 'tip', text: 'Hint: two words in the list are not used. <b>agency</b> (= power to make your own choices) is not on the cards — you will meet it in the reading.' },
            { type: 'teacher', ref: 'w5d3-t4' }
          ]
        },
        {
          id: 'r2', short: 'Read', minutes: 30, grouping: 'Alone → pair',
          title: 'Annotated reading + Reading for detail: Note-taking',
          goal: 'Find the main argument. Then take notes in your own words.',
          blocks: [
            { type: 'passage', id: 'r2p', title: 'Part 1 · Annotated reading: the abstract (= short summary) · Clapp et al. (2022)', text: 'The definition of food security has evolved and changed over the past 50 years, including the introduction of the four commonly cited pillars of food security: availability, access, utilization, and stability, which have been important in shaping policy. In this article, we make the case that it is time for a formal update to our definition of food security to include two additional dimensions proposed by the High Level Panel of Experts on Food Security and Nutrition: agency and sustainability. We show that the impact of widening food system inequalities and growing awareness of the intricate connections between ecological systems and food systems highlight the importance of these additional dimensions to the concept' },
            { type: 'tip', text: 'Read the abstract two times. Highlight the <b>four</b> old pillars, the <b>two</b> new pillars and the <b>reason</b> (why).' },
            { type: 'quiz', id: 'r2q', title: 'Check the abstract', items: [
              { q: '1. What are the four pillars now?', options: ['availability, access, utilization and stability', 'availability, access, agency and sustainability', 'production, prices, policy and people'], answer: 'availability, access, utilization and stability', why: '“the four commonly cited pillars of food security: availability, access, utilization, and stability”.' },
              { q: '2. What does <b>pillar</b> mean here?', options: ['A foundation / element / aspect / factor', 'A stone column in a building', 'A government policy'], answer: 'A foundation / element / aspect / factor', why: 'Pillars are the main parts that hold up the idea of food security.' },
              { q: '3. What are the two new pillars?', options: ['agency and sustainability', 'access and stability', 'policy and nutrition'], answer: 'agency and sustainability', why: '“…two additional dimensions… agency and sustainability.”' },
              { q: '4. Why do the authors want new pillars?', options: ['Increasing inequality and unsustainable agricultural practices contribute to food insecurity.', 'The four pillars are 50 years old.', 'Governments asked for a new definition.'], answer: 'Increasing inequality and unsustainable agricultural practices contribute to food insecurity.', why: '“widening food system inequalities and growing awareness of the intricate connections between ecological systems and food systems”.' },
              { q: '5. What is the main purpose of the article?', options: ['a) to explain', 'b) to argue', 'c) to analyse', 'd) to discuss'], answer: 'b) to argue', why: 'The authors give an argument: add agency and sustainability.' },
              { q: '6. Which words show that the authors give an argument?', options: ['we make the case that', 'has evolved and changed', 'we show that'], answer: 'we make the case that', why: '“make the case” = argue that something is true or needed.' }
            ]},
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
            { type: 'teacher', ref: 'w5d3-t6' }
          ],
          answers: { title: 'Answers and sample notes', items: [
            ['Abstract · Q1–6', '1 availability, access, utilization, stability · 2 a foundation / element · 3 agency and sustainability · 4 inequality and harmful farming cause food insecurity · 5 b) to argue · 6 “we make the case that”'],
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
          id: 'r5', short: 'Check', minutes: 20, grouping: 'Alone → pair',
          title: 'Building Understanding',
          goal: 'Use your notes to match and answer questions.',
          blocks: [
            { type: 'sort', id: 'r5s1', single: true, title: 'Part 1 · Game: match the paragraphs to the topics', hint: 'Use your notes. One topic in each box.', buckets: [
              { label: 'Paragraph B', letter: 'B' }, { label: 'Paragraph C', letter: 'C' }, { label: 'Paragraph D', letter: 'D' }, { label: 'Paragraph E', letter: 'E' }, { label: 'Paragraph G', letter: 'G' }, { label: 'Paragraph I', letter: 'I' }
            ], items: [
              { text: 'i. Producing food in a way that does not harm the environment', answer: 5, why: 'Sustainability.' },
              { text: 'ii. Maintaining good health from food', answer: 2, why: 'Utilization.' },
              { text: 'iii. The ability to get food that is available', answer: 1, why: 'Access.' },
              { text: 'iv. Whether or not food is physically present', answer: 0, why: 'Availability.' },
              { text: 'v. Being able to choose what food we want to grow and eat', answer: 4, why: 'Agency.' },
              { text: 'vi. Being able to get food all the time', answer: 3, why: 'Stability.' }
            ]},
            { type: 'sort', id: 'r5s2', single: true, title: 'Part 2 · Game: which pillar is the problem?', hint: 'Read each problem. Put it in the right pillar.', buckets: [
              { label: 'Availability' }, { label: 'Access' }, { label: 'Utilization' }, { label: 'Stability' }, { label: 'Agency' }, { label: 'Sustainability' }
            ], items: [
              { text: 'The shelves at the supermarket are empty. They are always empty.', answer: 0, why: 'There is no food in the place.' },
              { text: 'There are enough vegetables for sale, but I cannot afford to buy them.', answer: 1, why: 'Food is there, but people cannot get it.' },
              { text: 'There are only highly processed, unhealthy foods for sale in the supermarket.', answer: 2, why: 'The food is not healthy.' },
              { text: 'Last week there was enough food at the supermarket. This week, many shelves are empty.', answer: 3, why: 'The supply changes over time.' },
              { text: 'Poor farmers cannot choose what food to grow or negotiate for a higher price.', answer: 4, why: 'They have no choice or power.' },
              { text: 'Farming uses many chemicals that reduce the soil quality.', answer: 5, why: 'It harms the land for the future.' }
            ]},
            { type: 'tip', text: '<b>Hint:</b> Availability = is food there? · Access = can I get it? · Utilization = is it healthy? · Stability = all the time? · Agency = can I choose? · Sustainability = is it OK for the future?' },
            { type: 'quiz', id: 'r5q', title: 'Part 3 · Questions 3–10', items: [
              { q: '3. Climate change <b>directly</b> affects three pillars. Which three?', options: ['Availability, Stability, Sustainability', 'Availability, Agency, Sustainability', 'Access, Stability, Agency', 'Access, Utilization, Agency'], answer: 'Availability, Stability, Sustainability', why: 'Access is affected only indirectly: less food → higher prices.' },
              { q: '4. Week 3: people at food banks cannot choose their food. Which pillar is this?', options: ['Access', 'Availability', 'Stability', 'Agency'], answer: 'Agency', why: 'Agency = control over food choices.' },
              { q: '5. Food waste can increase greenhouse gases. Which pillar is this?', options: ['Sustainability', 'Agency', 'Stability', 'Availability'], answer: 'Sustainability', why: 'Greenhouse gases harm the environment and future resources.' },
              { q: '6. Food insecurity can cause obesity. Which pillar is this?', options: ['Access', 'Utilization', 'Stability', 'Agency'], answer: 'Utilization', why: 'Utilization is about nutrition and food quality.' },
              { q: '7. Why do the authors want two more pillars?', options: ['The current model does not consider how inequality and environmental problems can cause food insecurity.', 'The current model was created fifty years ago, so it is not relevant in the modern world.', 'The two additional pillars will encourage governments to take food insecurity seriously.', 'Hunger is still a global problem because agency and sustainability have not been taken seriously.'], answer: 'The current model does not consider how inequality and environmental problems can cause food insecurity.', why: 'Paragraph A: growing inequalities and links between nature and food systems.' },
              { q: '8. Why is agency important for women and indigenous communities?', options: ['People with power often don’t listen to them when making decisions.', 'They need more support from government agencies.', 'They often live in places that don’t have access to supermarkets.', 'They don’t have enough money to buy healthy food.'], answer: 'People with power often don’t listen to them when making decisions.', why: 'Agency helps these groups take part in decisions (G–H).' },
              { q: '9. Which one is NOT agency?', options: ['Forming a group with other farmers to negotiate higher sale prices.', 'Growing potatoes because your boss told you to.', 'Choosing to grow cabbages because they suit your soil.', 'An indigenous community using land for ceremonies rather than growing food.'], answer: 'Growing potatoes because your boss told you to.', why: 'Someone else made the decision.' },
              { q: '10. What is the main lesson of the text?', options: ['The current four pillars are not very useful anymore.', 'Empowering marginalised groups and improving sustainability will end hunger.', 'Improving food security requires solutions that address different interconnected factors.', 'Food insecurity is too complicated to understand.'], answer: 'Improving food security requires solutions that address different interconnected factors.', why: 'The authors want a holistic approach (= look at the whole system).' }
            ]},
            { type: 'sources', ids: ['clapp'] },
            { type: 'teacher', ref: 'w5d3-t8' }
          ]
        },
        {
          id: 'r4', short: 'Language', minutes: 30, grouping: 'Alone → pairs',
          title: 'Summarise/paraphrase + Language focus: Arguing for a position',
          goal: 'See how the text was paraphrased. Then find how the authors argue.',
          blocks: [
            { type: 'cloze', id: 'r4c', title: 'Part 1 · Summarise/paraphrase: complete the summary with words from the box', options: ['agency', 'decisions', 'environment', 'food', 'food security', 'generations', 'inequality', 'resources', 'sustainability'],
              text: 'Our current understanding of food security includes four interconnected factors: availability, access, utilization and stability. Despite the usefulness of this understanding, it does not account for the relationship between increasing social {{1}} and {{2}}. It also overlooks the importance of environmental {{3}} in the {{4}} system. Therefore, two additional pillars should be added to the current four-pillar model of food security: {{5}} and sustainability. Agency refers to the ability of people to have control over their lives and make their own {{6}}, including decisions related to food. Sustainability is concerned with producing food in a way that does not harm the {{7}} or reduce ecological {{8}} for future {{9}}.',
              answers: ['inequality', 'food security', 'sustainability', 'food', 'agency', 'decisions', 'environment', 'resources', 'generations'] },
            { type: 'passage', id: 'r4p', title: 'The original text (first two sentences). Compare it with the summary above.', text: 'Over the last 50 years, our understanding of food security has grown to include four main areas: availability, access, utilization, and stability (FAO, 2006; Webb et al., 2006; CFS, 2009; Upton et al., 2016). However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are, point to the need for two more dimensions: agency and sustainability.' },
            { type: 'quiz', id: 'r4q', title: 'How was it paraphrased? Look at key words, linking words and sentences', items: [
              { q: 'How did the linking word change?', options: ['However → Despite (+ “this” to refer back to the previous sentence)', 'However → Therefore', 'It did not change.'], answer: 'However → Despite (+ “this” to refer back to the previous sentence)', why: '“Despite the usefulness of this understanding…”' },
              { q: '“four main areas” became…', options: ['four interconnected factors', 'four pillars of policy', 'four new dimensions'], answer: 'four interconnected factors', why: 'New key words with the same meaning (synonyms).' },
              { q: '“growing inequalities” became…', options: ['increasing social inequality', 'more poverty', 'unfair prices'], answer: 'increasing social inequality', why: 'Synonym + word form: growing → increasing.' },
              { q: 'The second original sentence has two long noun phrases. What happened to them?', options: ['They became two sentences in the summary.', 'They were deleted.', 'They became one quotation.'], answer: 'They became two sentences in the summary.', why: '“…it does not account for… It also overlooks…”' }
            ]},
            { type: 'teacher', ref: 'w5d3-t7' },
            { type: 'passage', id: 'r6p', title: 'Part 2 · Language focus: Arguing for a position — highlight the main argument', text: 'A. Over the last 50 years, our understanding of food security has grown to include four main areas: availability, access, utilization, and stability (FAO, 2006; Webb et al., 2006; CFS, 2009; Upton et al., 2016). However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are, point to the need for two more dimensions: agency and sustainability. Agency and sustainability are becoming increasingly important as we recognize the need for food systems that are not only productive but also equitable and environmentally sustainable. Including these dimensions in the food security framework would help address broader issues such as empowerment of communities and long-term resource management.\n\nJ. In conclusion, effectively resolving food insecurity requires the inclusion of both agency and sustainability in the existing framework of food security. By doing this, food security policies can address immediate food needs, empower individuals and communities and protect the environment. This approach will help create a more comprehensive strategy for long-term food security, ultimately leading to more resilient food systems and healthier communities.' },
            { type: 'tip', text: '<b>Hint:</b> the main argument says what is <b>needed</b>. Look for “need” and “requires”.' },
            { type: 'quiz', id: 'r6q', title: 'Quick check', items: [
              { q: 'a) Where is the main argument?', options: ['Introduction sentence 2 and conclusion sentence 1', 'Introduction sentence 1 and conclusion sentence 3', 'Only in the conclusion'], answer: 'Introduction sentence 2 and conclusion sentence 1', why: '“…point to the need for two more dimensions” · “…requires the inclusion of both agency and sustainability”.' },
              { q: 'b) Which words present the argument?', options: ['point to the need for · requires the inclusion of', 'over the last 50 years · in conclusion', 'by doing this · ultimately'], answer: 'point to the need for · requires the inclusion of', why: 'These words say what is necessary.' },
              { q: 'c) How do the authors try to convince the reader?', options: ['By pointing out the limitations of the current model and emphasising the benefits of adding two more pillars', 'By giving personal stories', 'By criticising other researchers'], answer: 'By pointing out the limitations of the current model and emphasising the benefits of adding two more pillars', why: 'Problem with the old model → argument → reason → benefits.' }
            ]},
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
            { type: 'key', title: 'Useful for your own writing', compare: [
              { label: 'State your argument', text: '… point(s) to the need for …', eg: 'These problems point to the need for better food banks.' },
              { label: 'Say what is necessary', text: '… requires …', eg: 'Ending hunger requires action from governments.' },
              { label: 'Show the benefit', text: 'By doing this, … can …', eg: 'By doing this, families can save money.' }
            ]},
            { type: 'teacher', ref: 'w5d3-t9' }
          ],
          answers: { items: [
            ['Paraphrase · Linking word', 'However → Despite. “this” is added to refer back to the sentence before.'],
            ['Paraphrase · Key words', 'main areas → interconnected factors · growing inequalities → increasing social inequality · ecological and food systems → environmental sustainability in the food system'],
            ['Paraphrase · Phrases → sentences', 'One long sentence with two noun phrases → two short sentences: “it does not account for the relationship between social inequality and food security. It also overlooks the importance of environmental sustainability in the food system.”'],
            ['Arguing · Main argument', 'Introduction sentence 2 (“point to the need for”) and conclusion sentence 1 (“requires the inclusion of”). Why: these sentences say what is needed.']
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
          goal: 'Talk about a famous businessman and a charity. Learn six key words.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Warmer: a person and an organisation', items: [
              { label: 'Elon Musk', icon: 'users', text: 'Who is he? What do you know about him?' },
              { label: 'Oxfam', icon: 'layers', text: 'Do you know this organisation? If not, look it up quickly. What do they do?' }
            ]},
            { type: 'talk', prompts: ['Today you will hear about <b>Elon Musk</b> and <b>Oxfam</b>. How are they connected, do you think?'] },
            { type: 'teacher', ref: 'w5d3-t11' },
            { type: 'flip', title: 'Part 2 · Vocabulary: key words from the listening', hint: 'Guess the meaning with your partner. Then turn the card.', items: [
              { front: 'abysmal', back: 'Very, very bad.' },
              { front: 'humanitarian needs', back: 'The basic things people need to live: food, water, safety.' },
              { front: 'organise as a collective', back: 'Make a group with people who want the same thing.' },
              { front: 'smallholder farmers', back: 'Farmers with a small piece of land.' },
              { front: 'collective action', back: 'When a group works together for one goal.' },
              { front: 'entrepreneur', back: 'A person who starts a business.' }
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
          goal: 'Get the main idea of the opening. Then take notes on the whole talk.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Listening for gist', items: [
              { who: 'alone', text: 'Read questions 1–4 first.' },
              { who: 'class', text: 'Your teacher plays the <b>opening</b> of the talk.' },
              { who: 'alone', text: 'Listen for the <b>gist</b> (= the main idea). Then answer.' }
            ]},
            { type: 'listening', source: 'Oxfam (2022)', title: 'How much money would it take to end world hunger?', videoId: '', audio: '', clip: 'the opening, then the whole talk', transcripts: [['oxfam', 'Transcript (adapted)']] },
            { type: 'quiz', id: 'l3q', title: 'Gist questions', items: [
              { q: '1. What did Elon Musk do?', options: ['He challenged the UN to show him a plan to solve world hunger.', 'He gave $6 billion to Oxfam.', 'He started a food bank.'], answer: 'He challenged the UN to show him a plan to solve world hunger.', why: 'He asked for a $6 billion plan to end world hunger.' },
              { q: '2. What has happened since then?', options: ['The problem has worsened.', 'World hunger has ended.', 'Food prices have fallen.'], answer: 'The problem has worsened.', why: '“Since Musk’s challenge, the hunger crisis has worsened.”' },
              { q: '3. What does Oxfam do?', options: ['It focuses on food and hunger.', 'It builds farms for companies.', 'It sells technology.'], answer: 'It focuses on food and hunger.', why: '“At Oxfam, we’ve been focused on food and hunger since our founding.”' },
              { q: '4. What is Oxfam doing in this talk?', options: ['Responding to his challenge by explaining what money can (and can’t) do to end world hunger', 'Asking him to work for Oxfam', 'Criticising the UN'], answer: 'Responding to his challenge by explaining what money can (and can’t) do to end world hunger', why: '“we’re going to explain what money could accomplish, step by step”.' }
            ]},
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
            { type: 'teacher', ref: 'w5d3-t13' }
          ],
          answers: { title: 'Suggested notes', items: [
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
            { type: 'sort', id: 'l5s', single: true, title: 'Part 1 · Game: match each number to its meaning', hint: 'Look at the “Cost” row in your notes.', buckets: [
              { label: 'Money spent now' }, { label: 'Percentage of female smallholder farmers' }, { label: 'Additional money needed compared to military spending' }, { label: 'Additional annual foreign aid needed from wealthy countries' }, { label: 'Additional revenue needed from low- and middle-income countries' }
            ], items: [
              { text: 'About half what is needed', answer: 0, why: 'World leaders gave only 46%.' },
              { text: 'Over half', answer: 1, why: '“More than 50 percent of the world’s smallholder farmers are women.”' },
              { text: 'Equal to 1%', answer: 2, why: '“…about 1 percent of what the world spends annually on military and arms projects.”' },
              { text: '$14 billion', answer: 3, why: 'An extra $14 billion in foreign aid every year until 2030.' },
              { text: '$19 billion', answer: 4, why: 'About $19 billion every year until 2030.' }
            ]},
            { type: 'quiz', id: 'l5q', title: 'Part 2 · Questions 2–3 and 5–10', items: [
              { q: '2. Why does the speaker compare foreign aid to military spending?', options: ['To highlight the importance of military spending.', 'To suggest a way to stop conflicts.', 'To point out that wealthy countries have enough money to end hunger.', 'To point out that military spending should be increased.'], answer: 'To point out that wealthy countries have enough money to end hunger.', why: 'The extra aid is only about 1% of military spending.' },
              { q: '3. Money cannot solve war, climate change and… what?', options: ['Pollution', 'Food waste', 'Economic shocks', 'Influence of large food companies'], answer: 'Influence of large food companies', why: '“…or take away the power that giant corporations have over agricultural trade”.' },
              { q: '5. Why is local food production better than big companies, says the speaker?', options: ['It causes less harm to the environment.', 'Locally produced food is cheaper.', 'It empowers women.', 'Local foods are easier to grow.'], answer: 'It causes less harm to the environment.', why: 'Local food can be grown in a “fair and sustainable manner”.' },
              { q: '6. What is the biggest problem for smallholder farmers?', options: ['Low pay', 'Unhealthy food', 'Pests', 'Climate change'], answer: 'Climate change', why: '“…struggling to adapt to the climate crisis.”' },
              { q: '7. What do women smallholder farmers need?', options: ['Agency to make decisions about their farms.', 'Better tools and equipment.', 'Access to healthy food.', 'Larger farms.'], answer: 'Agency to make decisions about their farms.', why: '“…secure their rights to land, raise their voice in decision-making spaces…”' },
              { q: '8. Why do women smallholder farmers lack agency (= power to choose)?', options: ['Their farms are often controlled by large food companies.', 'They need to make more money.', 'They need access to better farming tools and equipment.', 'They need help to manage climate change.'], answer: 'Their farms are often controlled by large food companies.', why: 'Big companies “wield incredible power over the livelihoods of women, workers, and farmers”.' },
              { q: '9. What can shoppers do to help end hunger?', options: ['Pressure governments to provide more funding.', 'Consume food in a way that is sustainable and that supports farmers.', 'Look for ethical food labels at the supermarket.', 'Grow more food at home.'], answer: 'Consume food in a way that is sustainable and that supports farmers.', why: 'Eat for Good: save food, shop seasonal, eat less meat, support farmers, cook smart.' },
              { q: '10. What is the speaker’s main message?', options: ['Ending hunger will require a large amount of money.', 'Ending hunger will require more money and a fairer food system.', 'Middle and low-income countries will need to contribute more money to ending hunger.', 'Elon Musk’s proposal should not be taken seriously.'], answer: 'Ending hunger will require more money and a fairer food system.', why: '“Money is only part of the equation — and we need to transform food systems.”' }
            ]},
            { type: 'cloze', id: 'l5c', title: 'Part 3 · Question 4: complete the summary about big companies', options: ['power', 'equality', 'equal', 'climate', 'crisis', 'well-being', 'profit', 'treatment'],
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
          goal: 'Notice how the speaker uses modals. Then use them to recommend solutions.',
          blocks: [
            { type: 'talk', title: 'Part 1 · Language focus: Modals of obligation — remember Week 4?', prompts: ['Last week you learned modals of obligation for strong advice (e.g. <i>must</i>). Which ones can you remember?'] },
            { type: 'passage', id: 'l6p', title: 'Part of the transcript — highlight the modals of obligation', text: '1. That’s why we need to transform our food systems if we’re serious about ending world hunger. That starts with supporting local food production and thriving local food systems while pushing giant corporations that dominate global food markets to do right by people and the planet.\n\n2. Large global food and beverage companies wield incredible power over the livelihoods of women, workers, and farmers who sustain their operations. They must provide equal pay and treatment for women, mitigate the effects of the climate crisis on food production, and move away from business models that prioritize short-term profit over human and planetary well-being.\n\n3. More than 50 percent of the world’s smallholder farmers are women. We need to secure their rights to land, raise their voice in decision-making spaces on the land issues that affect them, and strengthen leadership for women’s land rights.\n\n4. In conclusion, ending world hunger is the best investment money can buy. By making clear financial commitments to address extreme and chronic hunger, world leaders can bring us closer to Zero Hunger in the years and decades ahead. But money is only part of the equation—and we need to transform food systems to ensure food security for all.' },
            { type: 'quiz', id: 'l6q', title: 'Quick check', items: [
              { q: 'Which modals of obligation are in the text?', options: ['need to · must', 'can · could', 'might · may'], answer: 'need to · must', why: 'we need to transform (1, 4) · They must provide (2) · We need to secure (3).' },
              { q: 'Sections 2 and 3 list many ideas in one sentence. Is there a modal before each verb?', options: ['No — only with the first; the next ones begin with the main verb.', 'Yes — every recommendation has its own modal.', 'No — there are no modals.'], answer: 'No — only with the first; the next ones begin with the main verb.', why: 'They must provide…, mitigate…, and move away… · We need to secure…, raise…, and strengthen…' },
              { q: 'Section 1: how does the speaker start the first solution?', options: ['That starts with…', 'That’s why…', 'In conclusion…'], answer: 'That starts with…', why: '“That starts with supporting local food production…”' },
              { q: 'Which verb form comes after “That starts with”?', options: ['verb + -ing', 'to + verb', 'past participle'], answer: 'verb + -ing', why: 'starts with supporting…' }
            ]},
            { type: 'key', title: 'How to recommend solutions', compare: [
              { label: 'Modals of obligation', text: 'need to · should · must · had better · ought to', eg: 'We need to secure their rights to land.' },
              { label: 'One modal, many verbs', text: 'Say the modal once. The next ideas start with the main verb.', eg: 'They must provide…, mitigate… and move away from…' },
              { label: 'That starts with + -ing', text: 'Use it for the first step of a solution.', eg: 'That starts with supporting local food production.' }
            ]},
            { type: 'teacher', ref: 'w5d3-t15' },
            { type: 'cards', title: 'Part 2 · Language in use: ways to reduce hunger and food waste from the course', numbered: true, items: [
              { text: 'Be aware of cognitive biases' }, { text: 'Empower women' }, { text: 'Use apps to manage food' }, { text: 'Avoid overbuying' },
              { text: 'Use your leftovers' }, { text: 'Freeze your food' }, { text: 'Understand food labels' }, { text: 'Redistribute extra food' },
              { text: 'Buy locally produced food' }, { text: 'Grow food at home' }, { text: 'Invest more money in new technology' }, { text: 'Remove big companies from the food system' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Choose the 4 or 5 <b>best</b> methods.' },
              { who: 'group', text: 'Explain your ideas. Use <b>modals of obligation</b>.' },
              { who: 'group', text: 'Listen to your partner. Ask <b>two “wh” questions</b> (Why…? How…?).' }
            ]},
            { type: 'model', title: 'Example', text: 'I think that we <b>need to</b> avoid overbuying. A lot of food is wasted in the home, so this method can reduce food waste and also help us to save money.' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Recommend', phrases: ['I think we need to…', 'Governments must…, … and …', 'That starts with + -ing…'] },
              { label: 'Ask “wh” questions', phrases: ['Why do you think…?', 'How can we…?', 'Why didn’t you choose…?'] }
            ]},
            { type: 'spinner', id: 'l6sp', title: 'Game: spin and recommend', text: 'Spin. Make one sentence with the method and the modal. Give a reason. Your partner asks one “wh” question. Then swap.', reels: [
              { label: 'Method', start: 'Spin!', items: ['avoid overbuying', 'use your leftovers', 'freeze your food', 'buy local food', 'grow food at home', 'empower women', 'redistribute extra food', 'understand food labels'] },
              { label: 'Modal', start: '…', items: ['need to', 'must', 'should', 'ought to', 'had better'] }
            ]},
            { type: 'teacher', ref: 'w5d3-t16' }
          ],
          answers: { items: [
            ['Modals · Which modals?', 'need to · must. Why: they say something is necessary.'],
            ['Modals · Lists', 'The modal comes only once; the next verbs start without it: “They must provide…, mitigate… and move away…”'],
            ['Modals · That starts with', 'That starts with + verb-ing: “That starts with supporting local food production.”']
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
    ['abysmal', 'Extremely bad.', 'It is abysmal that famine still exists.'],
    ['humanitarian needs', 'Basic needs for survival and dignity.', 'Only 46% of humanitarian needs were funded.'],
    ['smallholder farmer', 'A farmer with a small piece of land.', 'Over half of smallholder farmers are women.'],
    ['collective action', 'Action by a group to reach a shared goal.', 'Farmers used collective action to raise prices.'],
    ['entrepreneur', 'A person who starts a business and takes the risk.', 'Food entrepreneurs grow food locally.'],
    ['modal of obligation', 'A verb like must, need to or should that says what is necessary.', 'They must provide equal pay.'],
    ['chronic hunger', 'Not eating enough food over a long time.', 'About 1 in 10 people suffer from chronic hunger.']
  ]
};
