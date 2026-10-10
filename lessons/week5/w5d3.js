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
  journey: 'Today you learn to use frameworks to evaluate solutions. You start with a simple one — the 3Cs — then meet the six-dimensional food security framework. You read the article that proposes it and take paraphrased notes, then listen to Oxfam explain how much money it would take to end world hunger — and what money can’t solve.',
  finish: { title: 'Thursday', text: 'Mediation and applying the framework' },

  sections: [
    /* ───────────────────────── 3A Discussion skills ───────────────────────── */
    {
      id: 'frame', number: '01', code: '3A', minutes: 30,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills',
      subtitle: 'What solution would you support? Why?',
      outcome: 'Use a simple framework to evaluate everyday things, and ask evaluation questions for each dimension of the six-dimensional food security framework.',
      activities: [
        {
          id: 'f1', short: 'Warmer', minutes: 10, grouping: 'Pairs',
          title: 'Warmer',
          goal: 'Find out what a framework is — then use the 3Cs to rate something you bought or used.',
          blocks: [
            { type: 'cards', title: 'What are these?', items: [
              { label: 'Picture 1', icon: 'list', text: 'A chart with two columns: pros and cons.' },
              { label: 'Picture 2', icon: 'layers', text: 'A diagram of a workflow: steps connected by arrows.' },
              { label: 'Picture 3', icon: 'flag', text: 'A diagram of SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.' }
            ]},
            { type: 'quiz', id: 'f1q', items: [
              { q: 'What are these?', options: ['Frameworks', 'Essays', 'Recipes'], answer: 'Frameworks', why: 'Each one is a structured way to organise or evaluate information.' },
              { q: 'What are they used for?', options: ['To organise, analyse or evaluate information in a clear and consistent way', 'To decorate a presentation', 'To list references'], answer: 'To organise, analyse or evaluate information in a clear and consistent way', why: 'Frameworks help people make decisions, solve problems or assess progress. They can be simple (a pros and cons list) or detailed (the CEFR for language levels).' }
            ]},
            { type: 'figure', src: 'assets/week5/three-cs.svg', alt: 'The Three Cs framework: Cost (is it affordable? is the investment worth the benefits?), Convenience (is it easy to access or use? does it save time or effort?) and Consequences (positive or negative effects in the short or long term?).', caption: 'The Three Cs (3Cs) Framework', size: 'wide' },
            { type: 'key', title: 'The 3Cs: is it working well?', compare: [
              { label: 'Cost', text: 'Is it affordable? Is the investment worth the benefits?' },
              { label: 'Convenience', text: 'Is it easy to access or use? Does it save time or effort?' },
              { label: 'Consequences', text: 'Does it have positive or negative effects in the short or long term?' }
            ]},
            { type: 'table', id: 'f1t', title: 'Rate a recent purchase or service (e.g. a food delivery app, an AI tool, a mobile payment app, online shopping)', columns: ['What I bought or used', 'Cost', 'Convenience', 'Consequences'], rows: 1 },
            { type: 'talk', prompts: ['Tell your partner your rating. Would you recommend it? Which C was most important for you?'] },
            { type: 'teacher', ref: 'w5d3-t1' }
          ]
        },
        {
          id: 'f2', short: 'Six dimensions', minutes: 10, grouping: 'Pairs or groups of 3',
          title: 'The Six-Dimensional Food Security Framework',
          goal: 'Understand the six dimensions and write evaluation questions for the one your group is given.',
          blocks: [
            { type: 'figure', src: 'assets/week5/six-pillars.svg', alt: 'The six dimensions of food security in a circle: availability, access, utilisation, stability, agency and sustainability.', caption: 'Six dimensions of food security', credit: 'Based on Clapp et al. (2022)', size: 'wide' },
            { type: 'talk', prompts: [
              '1. Look at the six elements in the framework. What do you think it is used for?',
              '2. How do the words relate to food security? Discuss for 2 minutes.'
            ]},
            { type: 'cards', title: '3. Your teacher gives your group one element', pick: 'f2-pillar', items: [
              { label: 'Availability', text: 'food supply' }, { label: 'Access', text: 'getting food' }, { label: 'Utilisation', text: 'using food well' },
              { label: 'Stability', text: 'over time' }, { label: 'Agency', text: 'having a say' }, { label: 'Sustainability', text: 'the future' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'To evaluate your element, what kind of <b>questions</b> could you ask? Write them in your row.' },
              { who: 'class', text: 'Press <b>Write together</b> so the whole class can post questions on one shared page. If you have time, do another element.' }
            ]},
            { type: 'table', id: 'f2t', title: 'Questions to evaluate each element', columns: ['Element', 'Our evaluation question(s)'], fixed: ['Availability', 'Access', 'Utilisation', 'Stability', 'Agency', 'Sustainability'] },
            { type: 'teacher', ref: 'w5d3-t2' }
          ],
          answers: { items: [
            ['What is it used for?', 'To evaluate whether a food security solution is effective by examining six key factors. It helps assess why some solutions work in certain contexts but not in others.'],
            ['Availability', 'Is there enough food being produced or supplied?'],
            ['Access', 'Can people afford and physically get the food they need?'],
            ['Utilisation', 'Is the food nutritious and being used properly (e.g. storage, healthy diets)?'],
            ['Stability', 'Is food security consistent over time, or is it affected by crises (e.g. climate change, war)?'],
            ['Agency', 'Do people have control over their food choices and production?'],
            ['Sustainability', 'Can food production continue without harming future resources?']
          ]}
        },
        {
          id: 'f3', short: 'Apply it', minutes: 10, grouping: 'Groups of 3',
          title: 'Preventing food loss and waste at retail',
          goal: 'Use your questions to evaluate the “Buy one, get one later” campaign.',
          blocks: [
            { type: 'passage', id: 'f3p', title: 'Preventing food loss and waste at retail', text: 'In the European Union, about 5 million tonnes of food waste happen in the retail sector each year (FUSIONS, 2019). In developing countries, poor market conditions like not enough space and bad hygiene lead to a lot of food waste. Simple fixes like adding roofs to protect food can make a big difference (FAO, 2021). In developed countries, analysis carried out by Gunders (2012) showed that selling items close to their expiry date at lower prices has helped keep customers happy without reducing sales. Retailers like Sainsbury’s and Tesco have introduced "Buy one, get one later" campaigns, which allows customers to receive a second identical product later for free. This helps to reduce the impulse of over-purchasing from typical “Buy one, get one free” campaigns.' },
            { type: 'steps', items: [
              { who: 'group', text: 'Ask your element’s questions about the <b>“Buy one, get one later”</b> campaign. How does it help (<b>Yes</b>)? What are the limits (<b>But</b>)?' },
              { who: 'group', text: 'Time left? Do the other elements too.' }
            ]},
            { type: 'table', id: 'f3t', title: 'Evaluate the campaign', columns: ['Element', 'Yes: how it helps', 'But: limits / it depends on…'], fixed: ['Availability', 'Access', 'Utilisation', 'Stability', 'Agency', 'Sustainability'] },
            { type: 'tip', text: 'You will read more about this framework and apply it in more detail this week.' },
            { type: 'teacher', ref: 'w5d3-t3' }
          ],
          answers: { title: 'Suggested answers (Teacher’s Book)', items: [
            ['Availability', '<b>Yes:</b> the campaign increases food demand, encouraging suppliers to maintain higher production. <b>But:</b> it depends on whether retailers or manufacturers can sustain food availability without shortages or waste.'],
            ['Access', '<b>Yes:</b> if properly implemented, it provides food to low-income individuals who may struggle to buy essentials. <b>But:</b> access depends on distribution efficiency — if the reserved food does not reach those in need, it does not improve food security.'],
            ['Utilisation', '<b>Yes:</b> if healthy and staple foods are included, the campaign can improve nutritional intake. <b>But:</b> if it focuses on processed or perishable food with a short shelf life, it may not contribute to long-term nutrition.'],
            ['Stability', '<b>Yes:</b> if sustained, it can create a safety net for food-insecure individuals. <b>But:</b> it may be a temporary fix rather than a structural solution to food insecurity.'],
            ['Agency', '<b>Yes:</b> people who participate can contribute to food security in their communities. <b>But:</b> those receiving food may have limited choice over what they get, which might not suit their dietary needs or preferences.'],
            ['Sustainability', '<b>Yes:</b> if designed well, it reduces food waste by distributing surplus food before it expires. <b>But:</b> if not managed properly, it could lead to overproduction or imbalanced distribution, making it unsustainable.']
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
      outcome: 'Understand a framework of food security, read and take paraphrased notes, and use the framework of food security to evaluate solutions.',
      activities: [
        {
          id: 'r1', short: 'Vocabulary', minutes: 10, grouping: 'Pairs',
          title: 'Vocabulary',
          goal: 'Learn twelve key words from the reading, then use them in sentences.',
          blocks: [
            { type: 'flip', title: '1 · Key words from the reading', hint: 'Guess the meaning, then turn the card.', items: [
              { front: 'ecological', back: 'Relating to living things and their physical surroundings (the environment).' },
              { front: 'utilization', back: 'The effective use of resources for a purpose.' },
              { front: 'food aid', back: 'Help given (food, money) to reduce food insecurity.' },
              { front: 'sufficient', back: 'Enough.' },
              { front: 'to address', back: 'To deal with or tackle a specific issue.' },
              { front: 'dietary diversity', back: 'Eating a variety of foods for good nutrition.' },
              { front: 'conceptualize', back: 'To create an idea or concept.' },
              { front: 'climatic events', back: 'Big weather events (floods, droughts, storms) that affect ecosystems.' },
              { front: 'prone (to)', back: 'Likely to experience something (usually something bad).' },
              { front: 'holistic', back: 'Looking at the whole system, not only individual parts.' },
              { front: 'marginalized', back: 'Pushed to the edges of society; with little power.' },
              { front: 'indigenous', back: 'Native to a particular region or environment.' }
            ]},
            { type: 'cloze', id: 'r1c', list: true, title: '2 · Complete the sentences with words from the vocabulary list', options: ['indigenous', 'climatic', 'prone', 'food aid', 'Marginalized', 'agency', 'Utilization', 'dietary diversity', 'addressed', 'holistic', 'sufficient', 'ecological'],
              text: 'Crops that are {{1}} to an area can be more resistant to extreme {{2}} events.\nCommunities in areas {{3}} to drought may need {{4}} to fight hunger.\n{{5}} groups often lack enough {{6}} or power to make their own decisions.\n{{7}} of nutritious food and {{8}} is needed to maintain health.\nThe many causes of food insecurity needed to be {{9}} together in a {{10}} way.',
              answers: ['indigenous', 'climatic', 'prone', 'food aid', 'Marginalized', 'agency', 'Utilization', 'dietary diversity', 'addressed', 'holistic'] },
            { type: 'teacher', ref: 'w5d3-t4' }
          ]
        },
        {
          id: 'r2', short: 'Abstract', minutes: 10, grouping: 'Alone → pair',
          title: 'Annotated reading',
          goal: 'Read the abstract and find the authors’ argument.',
          blocks: [
            { type: 'passage', id: 'r2p', title: 'Abstract · Clapp et al. (2022)', text: 'The definition of food security has evolved and changed over the past 50 years, including the introduction of the four commonly cited pillars of food security: availability, access, utilization, and stability, which have been important in shaping policy. In this article, we make the case that it is time for a formal update to our definition of food security to include two additional dimensions proposed by the High Level Panel of Experts on Food Security and Nutrition: agency and sustainability. We show that the impact of widening food system inequalities and growing awareness of the intricate connections between ecological systems and food systems highlight the importance of these additional dimensions to the concept' },
            { type: 'quiz', id: 'r2q', items: [
              { q: '1. What are the current four pillars of food security?', options: ['availability, access, utilization and stability', 'availability, access, agency and sustainability', 'production, prices, policy and people'], answer: 'availability, access, utilization and stability', why: '“the four commonly cited pillars of food security: availability, access, utilization, and stability”.' },
              { q: '2. What is a <b>pillar</b> in this context?', options: ['A foundation / element / aspect / factor', 'A stone column in a building', 'A government policy'], answer: 'A foundation / element / aspect / factor', why: 'Pillars are the main parts that hold up the idea of food security.' },
              { q: '3. What are the two additional pillars?', options: ['agency and sustainability', 'access and stability', 'policy and nutrition'], answer: 'agency and sustainability', why: '“…two additional dimensions… agency and sustainability.”' },
              { q: '4. Why do the authors think additional pillars are needed?', options: ['Increasing inequality and unsustainable agricultural practices contribute to food insecurity.', 'The four pillars are 50 years old.', 'Governments asked for a new definition.'], answer: 'Increasing inequality and unsustainable agricultural practices contribute to food insecurity.', why: '“widening food system inequalities and growing awareness of the intricate connections between ecological systems and food systems”.' },
              { q: '5. What is the main purpose of this article?', options: ['a) to explain', 'b) to argue', 'c) to analyse', 'd) to discuss'], answer: 'b) to argue', why: 'The text presents an argument for adding agency and sustainability.' },
              { q: '6. What expression shows that the authors will present an argument?', options: ['we make the case that', 'has evolved and changed', 'we show that'], answer: 'we make the case that', why: '“In this article, we make the case that it is time for a formal update…”' }
            ]},
            { type: 'teacher', ref: 'w5d3-t5' }
          ]
        },
        {
          id: 'r3', short: 'Note-taking', minutes: 20, grouping: 'Alone',
          title: 'Reading for detail: Note-taking',
          goal: 'Read the whole text and take paraphrased notes under the headings.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the headings first. Then read the text and add notes to the table. Leave space between each point (or copy the headings onto paper).' },
              { who: 'alone', text: '<b>Paraphrase</b> as you write your notes — key words, not whole sentences from the text.' }
            ]},
            { type: 'sources', ids: ['clapp'] },
            { type: 'table', id: 'r3t', title: 'My notes: The case for a six-dimensional food security framework', columns: ['', 'Notes'], fixed: [
              'Introduction<br><small>four pillars · 2 additional pillars · why they are needed</small>',
              'Availability<br><small>definition · why it is important · factors that affect availability</small>',
              'Access<br><small>definition · why it is important · factors that affect access</small>',
              'Utilization<br><small>definition · why it is important · factors that affect utilization · relationship to availability and access</small>',
              'Stability<br><small>definition · why it is important · factors that affect stability</small>',
              'Two additional pillars<br><small>why they are needed</small>',
              'Agency<br><small>definition · why it is important · inequalities · vulnerable groups · e.g.</small>',
              'Sustainability<br><small>definition · why it is important</small>',
              'Conclusion'
            ]},
            { type: 'teacher', ref: 'w5d3-t6' }
          ],
          answers: { title: 'Sample notes', items: [
            ['Introduction', 'Four pillars: availability; access; utilization; stability. 2 additional pillars: agency and sustainability. Why: to address inequalities in the food system; to better manage ecological resources for the long term.'],
            ['Availability', 'Physical presence of food in a given location. Important: ensures there is enough food to prevent hunger and malnutrition. Factors: farming practices, weather conditions, political stability.'],
            ['Access', 'Ability to get food — includes availability and resources to buy food. Important: people cannot benefit from available food if they cannot get it. Factors: economic resources, incomes, food distribution, inequality.'],
            ['Utilization', 'Being able to get enough nutrition from food. Important: needed for nutritional well-being. Factors: food safety, food quality, dietary diversity, individuals’ health status. Depends on access and availability — these are necessary to obtain nutrition from food.'],
            ['Stability', 'Food security is constant and reliable over time. Important: prevents periodic disruptions to the other pillars. Factors: conflicts, natural disasters, economic crises.'],
            ['Two additional pillars', 'Food insecurity is still a significant global problem. They give a better understanding of the growing complexities of food insecurity and encourage a more holistic approach to solving these issues.'],
            ['Agency', 'The ability of people to make decisions about their lives, incl. about food; power to shape food-related decisions and actions. Needed to resolve inequalities in the food system: addressing power imbalances and building agency → less poverty, more food security. Empowers vulnerable groups to take part in food-related decision making, e.g. smallholder farmers, women, indigenous communities.'],
            ['Sustainability', 'Producing food for a long time without depleting or harming natural resources; resource renewal so future generations can access enough food. Important: to mitigate the impacts of climate change, loss of biodiversity and environmental damage.'],
            ['Conclusion', 'Adding agency and sustainability to the food security framework is needed. The 2 additional pillars can help to improve equality in food systems and protect the environment.']
          ]}
        },
        {
          id: 'r4', short: 'Summarise', minutes: 15, grouping: 'Alone → pair',
          title: 'Summarise/paraphrase',
          goal: 'Complete a summary of the text, then see how the original was paraphrased.',
          blocks: [
            { type: 'cloze', id: 'r4c', title: '1 · Complete the summary with words from the box', options: ['agency', 'decisions', 'environment', 'food', 'food security', 'generations', 'inequality', 'resources', 'sustainability'],
              text: 'Our current understanding of food security includes four interconnected factors: availability, access, utilization and stability. Despite the usefulness of this understanding, it does not account for the relationship between increasing social {{1}} and {{2}}. It also overlooks the importance of environmental {{3}} in the {{4}} system. Therefore, two additional pillars should be added to the current four-pillar model of food security: {{5}} and sustainability. Agency refers to the ability of people to have control over their lives and make their own {{6}}, including decisions related to food. Sustainability is concerned with producing food in a way that does not harm the {{7}} or reduce ecological {{8}} for future {{9}}.',
              answers: ['inequality', 'food security', 'sustainability', 'food', 'agency', 'decisions', 'environment', 'resources', 'generations'] },
            { type: 'passage', id: 'r4p', title: '2 · The first two sentences of the original text — how have they been paraphrased in the summary?', text: 'Over the last 50 years, our understanding of food security has grown to include four main areas: availability, access, utilization, and stability (FAO, 2006; Webb et al., 2006; CFS, 2009; Upton et al., 2016). However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are, point to the need for two more dimensions: agency and sustainability.' },
            { type: 'quiz', id: 'r4q', title: 'Look at key words, connecting words and phrases → sentences', items: [
              { q: 'How did the contrasting connector change?', options: ['However → Despite (+ “this” to refer back to the previous sentence)', 'However → Therefore', 'It did not change.'], answer: 'However → Despite (+ “this” to refer back to the previous sentence)', why: '“Despite the usefulness of this understanding…”' },
              { q: '“four main areas” became…', options: ['four interconnected factors', 'four pillars of policy', 'four new dimensions'], answer: 'four interconnected factors', why: 'A change of key words (synonyms).' },
              { q: '“growing inequalities” became…', options: ['increasing social inequality', 'more poverty', 'unfair prices'], answer: 'increasing social inequality', why: 'Synonym + word form: growing → increasing.' },
              { q: 'What happened to the two noun phrases in the second original sentence?', options: ['They became two sentences in the summary.', 'They were deleted.', 'They became one quotation.'], answer: 'They became two sentences in the summary.', why: '“…it does not account for the relationship between social inequality and food security. It also overlooks the importance of environmental sustainability in the food system.”' }
            ]},
            { type: 'teacher', ref: 'w5d3-t7' }
          ],
          answers: { items: [
            ['Connector', 'However → Despite. “this” added to refer back to the previous sentence.'],
            ['Key words', 'main areas → interconnected factors · growing inequalities → increasing social inequality · ecological and food systems → environmental sustainability in the food system'],
            ['Phrases → sentences', '“The growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems [are]” → “it does not account for the relationship between social inequality and food security. It also overlooks the importance of environmental sustainability in the food system.”']
          ]}
        },
        {
          id: 'r5', short: 'Understanding', minutes: 20, grouping: 'Alone → pair',
          title: 'Building Understanding',
          goal: 'Use your notes to match and answer questions about the reading.',
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
            { type: 'sources', ids: ['clapp'] },
            { type: 'teacher', ref: 'w5d3-t8' }
          ]
        },
        {
          id: 'r6', short: 'Arguing', minutes: 15, grouping: 'Pairs',
          title: 'Language focus: Arguing for a position',
          goal: 'Find how Clapp et al. state their argument and what each sentence does.',
          blocks: [
            { type: 'passage', id: 'r6p', title: 'Introduction and conclusion — highlight the main argument', text: '<b>A.</b> Over the last 50 years, our understanding of food security has grown to include four main areas: availability, access, utilization, and stability (FAO, 2006; Webb et al., 2006; CFS, 2009; Upton et al., 2016). However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are, point to the need for two more dimensions: agency and sustainability. Agency and sustainability are becoming increasingly important as we recognize the need for food systems that are not only productive but also equitable and environmentally sustainable. Including these dimensions in the food security framework would help address broader issues such as empowerment of communities and long-term resource management.<br><br><b>J.</b> In conclusion, effectively resolving food insecurity requires the inclusion of both agency and sustainability in the existing framework of food security. By doing this, food security policies can address immediate food needs, empower individuals and communities and protect the environment. This approach will help create a more comprehensive strategy for long-term food security, ultimately leading to more resilient food systems and healthier communities.' },
            { type: 'quiz', id: 'r6q', items: [
              { q: 'a) Where do the authors state their main argument?', options: ['Introduction sentence 2 and conclusion sentence 1', 'Introduction sentence 1 and conclusion sentence 3', 'Only in the conclusion'], answer: 'Introduction sentence 2 and conclusion sentence 1', why: '“…point to the need for two more dimensions” · “…requires the inclusion of both agency and sustainability”.' },
              { q: 'b) What words or expressions do they use to present their argument?', options: ['point to the need for · requires the inclusion of', 'over the last 50 years · in conclusion', 'by doing this · ultimately'], answer: 'point to the need for · requires the inclusion of', why: 'These expressions say what is necessary.' },
              { q: 'How do the authors try to convince the reader?', options: ['By pointing out the limitations of the current model and emphasising the benefits of adding two more pillars', 'By giving personal stories', 'By criticising other researchers'], answer: 'By pointing out the limitations of the current model and emphasising the benefits of adding two more pillars', why: 'Limitation → argument → reason → benefits.' }
            ]},
            { type: 'sort', id: 'r6s1', single: true, title: 'What is the purpose of each part of the introduction?', buckets: [
              { label: 'Background: the current model' }, { label: 'Limitation of the current model' }, { label: 'Main argument: the need for two more pillars' }, { label: 'Reason for two new pillars' }, { label: 'Result / benefit of adding two new pillars' }
            ], items: [
              { text: 'Over the last 50 years, our understanding of food security has grown to include four main areas…', answer: 0 },
              { text: 'However, the growing inequalities in food systems and the deeper understanding of how closely linked our ecological and food systems are,', answer: 1 },
              { text: '…point to the need for two more dimensions: agency and sustainability.', answer: 2 },
              { text: 'Agency and sustainability are becoming increasingly important as we recognize the need for food systems that are not only productive but also equitable and environmentally sustainable.', answer: 3 },
              { text: 'Including these dimensions in the food security framework would help address broader issues such as empowerment of communities and long-term resource management.', answer: 4 }
            ]},
            { type: 'sort', id: 'r6s2', single: true, title: 'What is the purpose of each sentence in the conclusion?', buckets: [
              { label: 'Restate main argument' }, { label: 'Present result / benefits' }, { label: 'Future result / benefits' }
            ], items: [
              { text: 'In conclusion, effectively resolving food insecurity requires the inclusion of both agency and sustainability…', answer: 0 },
              { text: 'By doing this, food security policies can address immediate food needs, empower individuals and communities and protect the environment.', answer: 1 },
              { text: 'This approach will help create a more comprehensive strategy for long-term food security…', answer: 2 }
            ]},
            { type: 'teacher', ref: 'w5d3-t9' }
          ]
        },
        {
          id: 'r7', short: 'Criticality', minutes: 15, grouping: 'Groups of 2–3',
          title: 'Criticality',
          goal: 'Use the six pillars to evaluate a real situation — and suggest changes.',
          blocks: [
            { type: 'cards', title: 'Your teacher gives your group one situation', pick: 'r7-sit', items: [
              { label: 'Group 1 · Mr X', text: 'Mr X lost his job and does not have enough money to buy food regularly. He now relies on a traditional food bank for his weekly groceries. The food bank gives Mr X a box of food each week. Mr X has no choice about what food he receives.' },
              { label: 'Group 2 · Mrs Y', text: 'Mrs Y is a smallholder farmer in a poor country. A large company owns the land that she works on. The company tells her what food to grow and controls the price for her produce. To make food as quickly and cheaply as possible, Mrs Y uses chemical fertilisers.' }
            ]},
            { type: 'tip', text: 'Group 1: think back to the Week 3 listening about food banks for ideas.' },
            { type: 'fields', title: 'Our answers', fields: [
              { id: 'r7-1', label: '1. Which of the 6 pillars does the situation improve?', placeholder: 'Access, because…', rows: 2 },
              { id: 'r7-2', label: '2. Which of the 6 pillars does it make worse?', placeholder: 'Agency, because…', rows: 2 },
              { id: 'r7-3', label: '3. What changes could improve these pillars?', placeholder: 'The food bank could…', rows: 3 },
              { id: 'r7-4', label: '4. What problems could these changes cause? How do they relate to the 6 pillars?', placeholder: 'It could reduce… so access…', rows: 3 }
            ]},
            { type: 'talk', prompts: ['Groups 1 and 2 work together: explain your situation and your answers to the other group.'] },
            { type: 'teacher', ref: 'w5d3-t10' }
          ],
          answers: { items: [
            ['Mr X · improves', 'Access.'],
            ['Mr X · worsens', 'Agency. It could also reduce sustainability, as he may waste food that he does not want.'],
            ['Mr X · changes', 'Give him choice over the food he receives.'],
            ['Mr X · problems', 'It could reduce the number of people helped — so it could reduce access to food for some people.'],
            ['Mrs Y · improves', 'Availability and access — food is potentially produced quickly and cheaply.'],
            ['Mrs Y · worsens', 'Sustainability and agency.'],
            ['Mrs Y · changes', 'Ownership of her land · control over what to grow · control over the sale price · more sustainable farming tools and techniques.'],
            ['Mrs Y · problems', 'It may be expensive to buy land and change to more sustainable farming techniques. Crop yields might decrease during the transition.']
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
      outcome: 'Listen and take paraphrased notes, and use modals of obligation to evaluate solutions.',
      activities: [
        {
          id: 'l1', short: 'Warmer', minutes: 5, grouping: 'Pairs',
          title: 'Warmer',
          goal: 'Share what you know about a famous entrepreneur and a famous charity.',
          blocks: [
            { type: 'cards', title: 'A person and an organisation', items: [
              { label: 'Elon Musk', icon: 'users', text: 'Do you know who this is? What do you know about him?' },
              { label: 'Oxfam', icon: 'layers', text: 'Have you heard of this organisation? If not, quickly look it up. What do they do?' }
            ]},
            { type: 'talk', prompts: ['In today’s listening, you will hear about <b>Elon Musk</b> and <b>Oxfam</b>. What is the connection between the two, do you think?'] },
            { type: 'teacher', ref: 'w5d3-t11' }
          ]
        },
        {
          id: 'l2', short: 'Vocabulary', minutes: 10, grouping: 'Pairs',
          title: 'Vocabulary',
          goal: 'Learn six key expressions from the listening, then use them.',
          blocks: [
            { type: 'flip', title: '1 · Key words from the listening', hint: 'Guess the meaning, then turn the card.', items: [
              { front: 'abysmal', back: 'Extremely bad.' },
              { front: 'humanitarian needs', back: 'Basic requirements for human survival and dignity.' },
              { front: 'organise as a collective', back: 'Form a group with people who have the same interests and goals — often to improve conditions for the group.' },
              { front: 'smallholder farmers', back: 'Farmers who manage small areas of land.' },
              { front: 'collective action', back: 'Action taken by a group of like-minded people to achieve a common goal.' },
              { front: 'entrepreneur', back: 'A person who starts a business and takes on the risk.' }
            ]},
            { type: 'cloze', id: 'l2c', list: true, title: '2 · Complete the sentences with words and expressions from the list', options: ['humanitarian needs', 'abysmal', 'smallholder farmers', 'organise as a collective', 'collective action', 'entrepreneur'],
              text: 'The fact that many people still experience severe hunger and don’t have their {{1}} met is {{2}}.\nThe {{3}} decided to {{4}} to sell their crops for better prices.\nWith financial support, some farmers can make their own business and become an {{5}}.',
              answers: ['humanitarian needs', 'abysmal', 'smallholder farmers', 'organise as a collective', 'entrepreneur'] },
            { type: 'teacher', ref: 'w5d3-t12' }
          ]
        },
        {
          id: 'l3', short: 'Gist', minutes: 10, grouping: 'Alone → pair',
          title: 'Listening for gist',
          goal: 'Listen to the opening of the talk — then predict what comes next.',
          blocks: [
            { type: 'listening', source: 'Oxfam (2022)', title: 'How much money would it take to end world hunger?', videoId: '', audio: '', clip: 'the opening of the talk', transcripts: [['oxfam', 'Transcript (adapted)']] },
            { type: 'tip', text: 'Your teacher plays the <b>opening</b> of the talk. You only need the general idea.' },
            { type: 'quiz', id: 'l3q', items: [
              { q: '1. What did Elon Musk do?', options: ['He challenged the UN to show him a plan to solve world hunger.', 'He gave $6 billion to Oxfam.', 'He started a food bank.'], answer: 'He challenged the UN to show him a plan to solve world hunger.', why: 'He asked for a $6 billion plan that would end world hunger.' },
              { q: '2. What has happened since Musk’s challenge?', options: ['The problem has worsened.', 'World hunger has ended.', 'Food prices have fallen.'], answer: 'The problem has worsened.', why: '“Since Musk’s challenge, the hunger crisis has worsened.”' },
              { q: '3. What does Oxfam do?', options: ['It focuses on food and hunger.', 'It builds farms for companies.', 'It sells technology.'], answer: 'It focuses on food and hunger.', why: '“At Oxfam, we’ve been focused on food and hunger since our founding.”' },
              { q: '4. What is Oxfam doing in response to Elon Musk?', options: ['Responding to his challenge by explaining what money can (and can’t) do to end world hunger', 'Asking him to work for Oxfam', 'Criticising the UN'], answer: 'Responding to his challenge by explaining what money can (and can’t) do to end world hunger', why: '“we’re going to explain what money could accomplish, step by step”.' }
            ]},
            { type: 'talk', title: 'Prediction', prompts: [
              'The speaker says, “Let’s begin by examining how close we are to ending world hunger.” How close are we to ending world hunger, do you think?',
              'Will it be possible to solve world hunger with <b>more money alone</b>, or will we need other things too?'
            ]}
          ]
        },
        {
          id: 'l4', short: 'Note-taking', minutes: 20, grouping: 'Alone → pair',
          title: 'Listening for detail: Note-taking',
          goal: 'Take notes on the whole talk under the headings.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Look through the headings and <b>predict</b> what you will hear.' },
              { who: 'alone', text: 'Listen once without stopping. Take short, paraphrased notes — numbers are important!' },
              { who: 'pair', text: 'Check your notes with a partner. Then listen again and add what you missed.' }
            ]},
            { type: 'listening', source: 'Oxfam (2022)', title: 'How much money would it take to end world hunger?', videoId: '', audio: '', clip: 'the whole talk', transcripts: [['oxfam', 'Transcript (adapted)']] },
            { type: 'table', id: 'l4t', title: 'My notes: How much money would it take to end world hunger?', columns: ['', 'Notes'], fixed: [
              'Introduction<br><small>Elon Musk’s challenge · what has happened since · what Oxfam does · what Oxfam did in relation to Musk’s proposal</small>',
              'How close are we to ending world hunger?',
              'Two dimensions of the crisis<br><small>1. extreme hunger: causes · 2. chronic hunger: who it mainly affects, causes</small>',
              'Mohanna Ahmed Ali Eljabaly',
              'Cost to end world hunger<br><small>extreme and chronic hunger · extreme hunger · world leaders’ current contribution · extra that is needed · comparison to military spending · low- and middle-income countries</small>',
              'What money cannot solve',
              'A solution: local food production<br><small>food entrepreneurs: what is needed · large global food and beverage companies: what they need to do · smallholder farmers: challenges, solutions · role of women</small>',
              'Role of consumers<br><small>Oxfam’s Eat for Good initiative: 5 things consumers can do</small>',
              'Concluding comment'
            ]},
            { type: 'teacher', ref: 'w5d3-t13' }
          ],
          answers: { title: 'Suggested notes', items: [
            ['Introduction', 'Musk: asked the UN for a $6 billion plan to end world hunger · since then the problem has worsened · Oxfam focuses on (world) hunger · provided a proposal / explains what money can do to end world hunger.'],
            ['How close are we?', '150 million more people affected by hunger since the start of the pandemic · 828 million people experienced hunger in 2021.'],
            ['Two dimensions', '1. Extreme hunger = life-threatening; causes: conflicts, climate change, economic lockdowns. 2. Chronic hunger: mainly women who work small plots of land (smallholdings); causes: lack of access to finance to improve farming practices, extreme weather events.'],
            ['Mohanna Ahmed Ali Eljabaly', '“Abysmal” to talk about famine in the 21st century · the injustice of the whole of humanity.'],
            ['Cost', 'Both extreme and chronic hunger: $37 billion a year until 2030 · extreme hunger: $23 billion · world leaders’ current contribution: 46% of what is needed · extra needed: $14 billion in additional foreign aid from wealthy countries every year until 2030 = about 1% of global military spending · low- and middle-income countries: $19 billion additional revenue a year until 2030.'],
            ['Money cannot solve', 'War, climate change, the power of giant corporations.'],
            ['Local food production', 'Food entrepreneurs: vision to grow healthy food locally; need tools to grow, process and distribute food. Large companies: very powerful → must treat women fairly (equal pay), mitigate the effects of climate change, move away from business models that prioritise short-term profit over well-being. Smallholder farmers: challenge = climate change; solutions = climate-resilient farming practices, collective action to improve incomes. Women: >50% of smallholder farmers → need to protect their (land) rights.'],
            ['Consumers', 'Shop sustainably. Eat for Good: 1 save food · 2 shop seasonal · 3 eat less meat · 4 support farmers and farm producers · 5 cook smart.'],
            ['Concluding comment', 'Money can help reduce world hunger but cannot solve the problem. Changing the food systems is also needed.']
          ]}
        },
        {
          id: 'l5', short: 'Understanding', minutes: 20, grouping: 'Alone → pair',
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
            { type: 'cloze', id: 'l5c', title: '4 · Complete the paraphrased summary about big companies (no more than two words from the listening; you may need to change the word form)', options: ['power', 'equality', 'equal', 'climate', 'crisis', 'well-being', 'profit', 'treatment'],
              text: 'Big companies have a lot of {{1}} over their workers. They must ensure pay {{2}} for women, reduce the impacts of {{3}} change and give greater importance to human and environmental {{4}}.',
              answers: ['power', 'equality', 'climate', 'well-being'],
              why: ['“wield incredible power over the livelihoods of women, workers, and farmers”', '“provide equal pay” → pay equality (word form change)', '“mitigate the effects of the climate crisis”', '“human and planetary well-being”'] },
            { type: 'sources', ids: ['oxfam'] },
            { type: 'teacher', ref: 'w5d3-t14' }
          ],
          answers: { items: [
            ['Question 1', '<img src="assets/week5/hunger-funding.svg" alt="The Oxfam numbers: money spent now is about half of what is needed (46%); over half of smallholder farmers are women; the extra money needed equals about 1% of military spending; wealthy countries need to give an extra $14 billion in foreign aid every year; low- and middle-income countries need to raise $19 billion a year.">'],
            ['Question 4', 'Big companies have a lot of <b>power</b> over their workers. They must ensure pay <b>equality</b> for women, reduce the impacts of <b>climate</b> change and give greater importance to human and environmental <b>well-being</b>.']
          ]}
        },
        {
          id: 'l6', short: 'Modals', minutes: 10, grouping: 'Pairs',
          title: 'Language focus: Modals of obligation',
          goal: 'Notice how the speaker uses modals of obligation to recommend solutions.',
          blocks: [
            { type: 'talk', title: 'Remember Week 4?', prompts: ['In last week’s listening we learned modals of obligation to give strong advice. Which ones can you remember?'] },
            { type: 'passage', id: 'l6p', title: 'Part of the transcript — highlight the modals of obligation', text: '<b>1.</b> That’s why we need to transform our food systems if we’re serious about ending world hunger. That starts with supporting local food production and thriving local food systems while pushing giant corporations that dominate global food markets to do right by people and the planet.<br><br><b>2.</b> Large global food and beverage companies wield incredible power over the livelihoods of women, workers, and farmers who sustain their operations. They must provide equal pay and treatment for women, mitigate the effects of the climate crisis on food production, and move away from business models that prioritize short-term profit over human and planetary well-being.<br><br><b>3.</b> More than 50 percent of the world’s smallholder farmers are women. We need to secure their rights to land, raise their voice in decision-making spaces on the land issues that affect them, and strengthen leadership for women’s land rights.<br><br><b>4.</b> In conclusion, ending world hunger is the best investment money can buy. By making clear financial commitments to address extreme and chronic hunger, world leaders can bring us closer to Zero Hunger in the years and decades ahead. But money is only part of the equation—and we need to transform food systems to ensure food security for all.' },
            { type: 'quiz', id: 'l6q', items: [
              { q: 'Which modals of obligation are in the extract?', options: ['need to · must', 'can · could', 'might · may'], answer: 'need to · must', why: 'we need to transform (1, 4) · They must provide (2) · We need to secure (3).' },
              { q: 'In sections 2 and 3, the speaker lists several recommendations in one sentence. Does the speaker use a modal verb with each one?', options: ['No — only with the first; the next ones begin with the main verb.', 'Yes — every recommendation has its own modal.', 'No — there are no modals.'], answer: 'No — only with the first; the next ones begin with the main verb.', why: 'They must provide…, mitigate…, and move away… · We need to secure…, raise…, and strengthen…' },
              { q: 'In section 1, how does the speaker introduce the first solution?', options: ['That starts with…', 'That’s why…', 'In conclusion…'], answer: 'That starts with…', why: '“That starts with supporting local food production…”' },
              { q: 'What is the verb form after this expression?', options: ['verb + -ing', 'to + verb', 'past participle'], answer: 'verb + -ing', why: 'starts with supporting…' }
            ]},
            { type: 'key', title: 'Recommend solutions', compare: [
              { label: 'Modals of obligation', text: 'need to · should · must · had better · ought to', eg: 'We need to secure their rights to land.' },
              { label: 'One modal, many verbs', text: 'Use the modal once; the next recommendations start with the main verb.', eg: 'They must provide…, mitigate… and move away from…' },
              { label: 'That starts with + -ing', text: 'Introduce the first step of a solution.', eg: 'That starts with supporting local food production.' }
            ]},
            { type: 'teacher', ref: 'w5d3-t15' }
          ]
        },
        {
          id: 'l7', short: 'Language in use', minutes: 15, grouping: 'Groups of 2–3',
          title: 'Language in use',
          goal: 'Choose the most effective methods and explain them with modals of obligation.',
          blocks: [
            { type: 'cards', title: 'Ways to reduce hunger and food waste from the course', numbered: true, items: [
              { text: 'Be aware of cognitive biases' }, { text: 'Empower women' }, { text: 'Use apps to manage food' }, { text: 'Avoid overbuying' },
              { text: 'Use your leftovers' }, { text: 'Freeze your food' }, { text: 'Understand food labels' }, { text: 'Redistribute extra food' },
              { text: 'Buy locally produced food' }, { text: 'Grow food at home' }, { text: 'Invest more money in new technology' }, { text: 'Remove big companies from the food system' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Which methods will be the <b>most effective</b>? Choose 4 or 5.' },
              { who: 'group', text: 'Use <b>modals of obligation</b> to explain your ideas to your partner(s).' },
              { who: 'group', text: 'Listen to your partner and ask <b>two follow-up questions</b> — try to ask “wh” questions.' }
            ]},
            { type: 'model', title: 'Example', text: 'I think that we <b>need to</b> avoid overbuying. A lot of food is wasted in the home, so this method can reduce food waste and also help us to save money.' },
            { type: 'language', title: 'Follow-up question stems', tabs: false, groups: [
              { label: 'Ask “wh” questions', phrases: ['Why do you think…?', 'How can we…?', 'Why didn’t you choose…?'] }
            ]},
            { type: 'teacher', ref: 'w5d3-t16' }
          ]
        },
        {
          id: 'l8', short: 'Criticality', minutes: 15, grouping: 'Groups of 3–4',
          title: 'Criticality: Discussion',
          goal: 'Discuss who should pay to end hunger — governments, wealthy people or consumers.',
          blocks: [
            { type: 'tip', text: '<a href="https://www.statista.com/chart/26203/wfp-musk-plan-hunger-emergency/" target="_blank" rel="noopener"><b>Open the Statista chart</b></a>. It shows how Elon Musk’s money would be spent if it was donated (it had not been donated when this lesson was written). The money would only last for <b>one year</b>.' },
            { type: 'talk', prompts: [
              'Compare the amounts in the chart with the amounts in the listening. From today’s listening, would this end world hunger?',
              'Should Elon Musk donate the money anyway?',
              'The listening mentioned how much more governments need to spend to end hunger. Should very wealthy people, like Elon Musk, also be <b>required</b> to donate money to solve this problem?'
            ]},
            { type: 'choose', id: 'l8c', title: 'Who has the greater responsibility to end hunger?', options: ['Regular consumers', 'Wealthy people', 'Governments'] },
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
      goal: 'Reduce your listening notes to the main ideas only.',
      blocks: [
        { type: 'key', title: 'Summarise your notes', points: ['Only include the <b>main ideas</b> and relevant supporting details.', 'Use <b>abbreviations and symbols</b> to save space.', '<b>Paraphrase</b> where possible.'] },
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
      goal: 'Research one solution to food waste in your city, region or country for tomorrow’s lesson.',
      blocks: [
        { type: 'tip', text: 'Tomorrow you will evaluate the effectiveness of a solution to food waste using <b>Clapp et al.’s (2022) six-dimensional food security framework</b> in your environment (city, region or country).' },
        { type: 'cards', title: '1 · Your teacher assigns ONE solution to your group', pick: 'x2-sol', items: [
          { label: 'Food banks', text: 'Week 3' }, { label: 'Apps to help reduce waste', text: 'Week 4' }, { label: 'Upcycled food', text: 'Week 4' }, { label: 'Technology to track waste', text: 'Weeks 3–4' }, { label: 'Ways consumers can reduce waste at home', text: 'Weeks 3–4' }
        ]},
        { type: 'choose', id: 'x2-focus', title: '2 · As a group, decide your focus', options: ['Our city', 'Our region', 'Our country as a whole'] },
        { type: 'steps', items: [
          { who: 'alone', text: 'Review any relevant source material from the class input texts and make some notes.' },
          { who: 'alone', text: 'Research a <b>case study</b> or <b>government report</b> on how the solution has been implemented in your chosen environment or another one (city, region or country).' },
          { who: 'alone', text: 'Find information that relates to <b>any or all</b> of the six pillars. Tomorrow you will narrow your focus to one or two pillars.' }
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
