/* DEC15 · Week 3, Day 2 — lesson content.
   Teacher's Book: W3 D2 · 4A Discussion (solutions to food insecurity) · 5A Reading to write (Nicastro & Carillo, 2021)
   · 6A Listening to write (About That, 2024: “Is this the future of food banks?”).
   Edit text here. The app (js/app.js) turns each block into a component (see lessons/_template.js). */

window.DEC15_LESSON = {
  id: 'w3d2',
  week: 3, day: 2,
  title: 'Reading and listening for solutions',
  duration: 'About 4 hours',
  question: 'What are the best ways to prevent food loss and waste — and can food banks help to solve food insecurity?',
  questionKind: 'Focus question',
  questionLabel: 'This week’s focus question',
  wordTarget: '',

  journey: 'This week we move from the causes of food insecurity to the solutions. Today you solve problems together, read about ways to prevent food loss and waste, and listen to a report on a new kind of food bank — and you learn the language to say which solutions are best.',
  finish: { title: 'Wednesday', text: 'Bring three sources together' },

  sections: [
    /* ───────────────────────── STAGE 1 · 4A ───────────────────────── */
    {
      id: 'solve', number: '01', code: '4A', minutes: 30,
      tone: 'amber', art: 'discussion',
      title: 'Let’s solve some problems',
      subtitle: 'Discussion: potential solutions to food insecurity',
      outcome: 'Use and evaluate your problem-solving skills, identify problems with food waste, and suggest and evaluate solutions.',
      activities: [
        {
          id: 's1', short: 'Puzzle', minutes: 7, grouping: 'Pairs',
          title: 'Warm-up: the fox, the chicken and the grain',
          goal: 'Solve a logic problem together, step by step.',
          blocks: [
            { type: 'cards', title: 'The problem', items: [
              { label: 'The farmer', text: 'A farmer needs to safely transport a <b>fox</b>, a <b>chicken</b> and a <b>bag of grain</b> across a river.' },
              { label: 'The boat', text: 'The boat can only take the farmer and <b>one other item</b> at a time.' },
              { label: 'The danger', text: 'What will happen if the fox is alone with the chicken? What will happen if the chicken is alone with the grain?' }
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Answer the two danger questions with your partner. Draw a quick picture or make notes if it helps.' },
              { who: 'pair', text: 'Put the <b>7 trips</b> in the right order. If you already know the answer, keep it secret!' },
              { who: 'class', text: 'Check your order. Then talk about questions a–c.' }
            ]},
            { type: 'order', id: 's1o', title: 'Put the farmer’s 7 trips in order', ends: ['First trip', 'Last trip'], items: [
              'The farmer takes the <b>chicken</b> across the river and leaves it on the other side.',
              'The farmer returns alone. (The chicken waits on the far side.)',
              'The farmer takes the <b>fox</b> across the river.',
              'The farmer leaves the fox on the other side, but takes the <b>chicken back</b> with him to the original side.',
              'The farmer takes the <b>grain</b> across the river and leaves it with the fox.',
              'The farmer returns alone. (The fox and the grain wait together on the far side.)',
              'The farmer takes the <b>chicken</b> across the river again.'
            ], why: 'The chicken is never left alone with the fox or with the grain. The clever step is trip 4: the farmer takes the chicken <b>back</b>.' },
            { type: 'talk', title: 'Talk with your partner', prompts: [
              'a. Do you like trying to solve problems like this one?',
              'b. Did you find this problem easy to solve?',
              'c. Do you think <b>all</b> problems can be solved with logic like this one?'
            ]},
            { type: 'teacher', text: 'Explain the problem and ask the 3 questions. Give Ss about 2 minutes before checking; ask them to keep the solution to themselves if they know it. Answers: the fox will eat the chicken; the chicken will eat the grain. For question c, mention that some problems need more than logic — e.g. problems needing creative and innovative solutions, or ethical and moral dilemmas. <b>Pre-lesson note (whole of 4A):</b> listen for pronunciation problems (individual sounds, word stress, sentence stress, pauses, intonation). Give feedback and do a short pronunciation practice in the middle or at the end of the lesson.' }
          ],
          answers: { items: [
            ['Fox + chicken', 'The fox will eat the chicken, so the farmer cannot leave them alone together.'],
            ['Chicken + grain', 'The chicken will eat the grain, so the farmer cannot leave them alone together.'],
            ['Question c (idea)', 'Not always. Some problems need creative or new ideas, and some are ethical or moral dilemmas with no single “right” answer.']
          ]}
        },
        {
          id: 's2', short: 'Food problems', minutes: 10, grouping: 'Pairs → new pair',
          title: 'Food problems → possible solutions',
          goal: 'Remember the food problems from Weeks 1–2 and think of solutions.',
          blocks: [
            { type: 'question' },
            { type: 'steps', items: [
              { who: 'pair', text: '<b>3 min.</b> List the food problems we met in Weeks 1 and 2. Look back at your notes if you need to.' },
              { who: 'pair', text: '<b>3 min.</b> Choose 3–4 problems. Think of a <b>solution</b> for each. Be creative — think about farmers, shops, governments and families.' },
              { who: 'pair', text: '<b>4 min.</b> Change partners. Share your solutions and discuss questions a–b.' }
            ]},
            { type: 'table', id: 's2t', title: 'Problems and solutions', columns: ['Food problem (Weeks 1–2)', 'Our possible solution'], rows: 4 },
            { type: 'talk', title: 'With your new partner', prompts: [
              'a. Did you come up with similar solutions?',
              'b. Did you struggle to find solutions to any of the problems? Which ones? Why?'
            ]},
            { type: 'key', title: 'Some problems are easier to act on than others', points: [
              'Problems like <b>climate change</b> or <b>conflict</b> are very complex. We cannot solve them quickly.',
              'But <b>food waste</b> is a problem that we can <b>all</b> take steps to address — at home, in shops and in our community.'
            ]},
            { type: 'teacher', text: 'After a few minutes, collect about 5 problems on the board (or a Word doc on screen). Add from the list in the answers if needed. Make sure Ss change to a new partner for the sharing step. Ask the class questions a–b and check what they struggled with. Elicit or state the key point: complex issues like climate change cannot be solved easily, but food waste is something we can all act on.' }
          ],
          answers: { title: 'Problems from Weeks 1–2', items: [
            ['Food insecurity', 'Caused by conflicts, climate change and economics. Malnutrition; obesity; other diet-related health issues (heart disease, diabetes) and childhood development; unaffordable food prices; poor access to healthy food; inadequate resources.'],
            ['Food waste and loss', 'Consumers buying too much food; food being “unsellable”; consumers not understanding food labels; losses in production because of poor practices and limited technology.'],
            ['Effects of waste', 'Greenhouse gas emissions; producers lose income; wasting food also wastes the water, land and energy used to produce it.'],
            ['Example solutions', 'Shopping lists and meal planning · clearer date labels · selling “ugly” produce cheaply · donating extra food to food banks · better storage and transport for farmers.']
          ]}
        },
        {
          id: 's3', short: 'Community', minutes: 13, grouping: 'Groups of 3',
          title: 'Let’s be part of the solution!',
          goal: 'Talk about your own food waste, then find community solutions in a short video.',
          blocks: [
            { type: 'talk', title: 'Be honest! (4 min)', prompts: [
              'a. How much food have you wasted over the past week? (Be realistic and honest!)',
              'b. After what we read last week, have you changed your attitude to food or your behaviour?',
              'c. What changes could you make to reduce food waste in your daily life?',
              'd. What changes could happen in your community? How could you help?'
            ]},
            { type: 'cards', title: 'Five community solutions to food waste', items: [
              { label: 'Workshops', text: 'Food waste <b>awareness workshops</b> — classes that teach people how to waste less.' },
              { label: 'Composting hub', text: 'A community <b>composting hub</b> — one central place where people bring food scraps to turn into soil.' },
              { label: 'Curbside garden', text: 'A <b>curbside garden</b> — vegetables and herbs grown on the strip of land beside the street.' },
              { label: 'Community cupboard', text: 'A community <b>cupboard</b> — a small public cupboard where people leave and take free food.' },
              { label: 'Produce market', text: 'A <b>local produce</b> market — local farmers sell fresh fruit and vegetables.' }
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Predict: which <b>three</b> solutions will be in the video?' },
              { who: 'class', text: 'Your teacher plays the video <b>once</b>. You only need the general ideas, not every detail.' },
              { who: 'group', text: 'Answer the quiz together. Then discuss questions a–e below.' }
            ]},
            { type: 'listening', source: 'Community video on Canvas', title: 'Community solutions to food waste', videoId: '', audio: '', transcripts: [] },
            { type: 'quiz', id: 's3q', title: 'Which solutions are in the video?', shared: ['In the video', 'Not in the video'], items: [
              { q: 'Food waste awareness workshops', answer: 'Not in the video', why: 'Workshops are not shown in the video.' },
              { q: 'A community composting hub', answer: 'In the video', why: 'The video shows a community composting hub.' },
              { q: 'A curbside garden', answer: 'In the video', why: 'Yes — and this was the main focus of the video.' },
              { q: 'A community cupboard', answer: 'In the video', why: 'The video shows a community cupboard.' },
              { q: 'A local produce market', answer: 'Not in the video', why: 'A market is not shown in the video.' }
            ]},
            { type: 'talk', title: 'Evaluate the ideas (5 min)', prompts: [
              'a. Would these community initiatives work in your local community (in Australia or in your home country)?',
              'b. Would you like to take part?',
              'c. Have you seen anything like this?',
              'd. Apart from reducing food waste, what are the <b>other benefits</b> of this type of community action?',
              'e. Can you predict any <b>problems</b> with activities like this?'
            ]},
            { type: 'teacher', text: 'The community video is only on Canvas — play it once. Check vocab first: composting, hub, curbside, cupboard, local produce. Answer: mentioned in the video — a community composting hub, a curbside garden (the main focus), a community cupboard. Use questions d and e to start evaluating solutions, but don’t go too deep — evaluation is the focus later today. Whole-class feedback depending on time.' }
          ],
          answers: { items: [
            ['In the video', 'A community composting hub · a curbside garden (the main focus) · a community cupboard.'],
            ['d. Other benefits', 'It creates a sense of community. People can meet like-minded people and make friends.'],
            ['e. Possible problems', 'A community garden might attract unwanted wildlife (e.g. noisy birds, bats and possums). Or: people put a lot of effort into the garden, and it could be vandalised or plants could be stolen.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 2 · 5A ───────────────────────── */
    {
      id: 'read', number: '02', code: '5A', minutes: 110,
      tone: 'plum', art: 'reading',
      title: 'Read about solutions',
      subtitle: 'Reading to write · Nicastro & Carillo (2021)',
      outcome: 'Read and take paraphrased notes, and use modal verbs and evaluative language to evaluate solutions to a problem.',
      activities: [
        {
          id: 'r1', short: 'Hierarchy', minutes: 10, grouping: 'Groups of 3',
          title: 'Warm-up: what is the best way to deal with extra food?',
          goal: 'Rank six ways to prevent or reduce food waste, from most to least effective.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the six ways. Which is the <b>most</b> effective? Which is the <b>least</b> effective?' },
              { who: 'group', text: 'Agree on a ranking in your group. Move the cards up and down. Explain each choice: <i>“X is better than Y because…”</i>' },
              { who: 'class', text: 'Check your order. Then open the answers and compare with the <b>Food Recovery Hierarchy</b>.' }
            ]},
            { type: 'tip', text: '<b>Compost</b> = let food scraps break down naturally into rich soil for plants.' },
            { type: 'order', id: 'r1o', title: 'Rank the six ways', ends: ['Most effective', 'Least effective'], items: [
              'Reduce the amount of food produced.',
              'Prevent food from going unsold or uneaten.',
              'Donate extra food to people in need.',
              'Use extra food in factories or to create energy.',
              'Compost extra food.',
              'Throw food away.'
            ], why: 'The top two are both <b>prevention</b> (“source reduction”), so they can swap places. Then: feed people → industrial use / energy → compost → landfill.' },
            { type: 'talk', prompts: [
              'Which position surprised your group most? Why?',
              'Why do you think <b>donating</b> food is better than using it to make energy?'
            ]},
            { type: 'teacher', text: 'Pre-teach “composting”. Option: print the six methods (Teachers’ Resources Page on Canvas), cut them into strips and let groups stick them on the wall in order. Compare with the food recovery image (in the answers). Note: the EPA hierarchy also has “Feed animals” (between feeding people and industrial uses) — it is not one of the six cards.' }
          ],
          answers: { title: 'The Food Recovery Hierarchy', items: [
            ['Compare', '<img src="assets/week3/food-hierarchy.svg" alt="Food Recovery Hierarchy, most to least preferred: source reduction; feed hungry people; feed animals; industrial uses; composting; landfill or incineration.">'],
            ['Ranking', '1–2 Reduce the amount of food produced / prevent food from going unsold or uneaten (source reduction) → 3 Donate extra food to people in need → 4 Use it in factories or to create energy (industrial uses) → 5 Compost it → 6 Throw it away (landfill).'],
            ['Link to today’s reading', 'Nicastro and Carillo (2021) use the same idea: “the best approach is to prevent food waste” (paragraph F).']
          ]}
        },
        {
          id: 'r2', short: 'Vocabulary', minutes: 10, grouping: 'Alone → pair',
          title: 'Key words before you read',
          goal: 'Understand eight words and phrases from the reading, then use them.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Part A.</b> Match each word or phrase to its meaning. Then check.' },
              { who: 'alone', text: '<b>Part B.</b> Complete the sentences from the reading. Use each word once. One sentence has <b>two</b> gaps (a and b).' },
              { who: 'pair', text: 'Test your partner: say a meaning, your partner says the word.' }
            ]},
            { type: 'quiz', id: 'r2a', title: 'Part A · Match the meanings', shared: [
              'People or companies involved in producing and delivering food',
              'More food than is needed',
              'Changing raw food into market-ready products',
              'Use of food products for manufacturing and production',
              'Practices ensuring food safety and cleanliness',
              'Unplanned buying',
              'A system where things are arranged in order of their importance',
              'Places where waste is buried under the ground'
            ], items: [
              { q: '<b>actors</b> in the food supply chain', answer: 'People or companies involved in producing and delivering food', why: 'Here “actors” are not people in films: they are farmers, factories, shops and so on.' },
              { q: '<b>processing and packaging</b>', answer: 'Changing raw food into market-ready products', why: 'E.g. washing, cutting and putting food into boxes or bags.' },
              { q: '<b>impulse buying</b>', answer: 'Unplanned buying', why: 'You see a special offer and buy it without planning.' },
              { q: '<b>hygiene</b>', answer: 'Practices ensuring food safety and cleanliness', why: 'Bad hygiene in markets can make food go bad.' },
              { q: '<b>hierarchy</b>', answer: 'A system where things are arranged in order of their importance', why: 'Like the food recovery hierarchy in the warm-up.' },
              { q: '<b>industrial purposes</b>', answer: 'Use of food products for manufacturing and production', why: 'E.g. making energy or other products from food.' },
              { q: '<b>landfills</b>', answer: 'Places where waste is buried under the ground', why: 'The worst option in the hierarchy.' },
              { q: '<b>food surpluses</b>', answer: 'More food than is needed', why: '“Surplus” = extra.' }
            ]},
            { type: 'quiz', id: 'r2b', title: 'Part B · Complete the sentences from the reading', shared: [
              'actors in the food supply chain', 'processing and packaging', 'impulse', 'hygiene',
              'hierarchy', 'industrial purposes', 'landfills', 'food surpluses'
            ], items: [
              { q: 'Preventing food loss and waste provides economic benefits to the different ______.', answer: 'actors in the food supply chain', why: 'Paragraph A.' },
              { q: 'From better ______ at the production stage to smarter buying campaigns for consumers, many steps are being taken to tackle this global issue.', answer: 'processing and packaging', why: 'Paragraph H.' },
              { q: '“Buy one, get one later” campaigns help to reduce the ______ of over-purchasing.', answer: 'impulse', why: 'Paragraph D.' },
              { q: 'In developing countries, poor market conditions like not enough space and bad ______ lead to a lot of food waste.', answer: 'hygiene', why: 'Paragraph D.' },
              { q: 'According to the food waste ______, the most important thing is to prevent food waste occurring in the first place.', answer: 'hierarchy', why: 'Paragraph F.' },
              { q: 'Giving extra food to hungry people stops the food from being used in less useful ways, like for (a) ______ …', answer: 'industrial purposes', why: 'Paragraph F.' },
              { q: '… or being thrown away in (b) ______.', answer: 'landfills', why: 'Paragraph F.' },
              { q: 'There are initiatives to reduce ______ from supermarkets by donating extra food to people who need it.', answer: 'food surpluses', why: 'Paragraph G.' }
            ]},
            { type: 'teacher', text: 'On Canvas this is a Quizlet set (Part A) and an H5P closed cloze (Part B). Sentences are adapted from the reading.' }
          ]
        },
        {
          id: 'r3', short: 'Abstract', minutes: 10, grouping: 'Alone → pair',
          title: 'Read the abstract first',
          goal: 'Get the main ideas of the article from its abstract.',
          blocks: [
            { type: 'key', title: 'Read the abstract before the article', points: [
              'An <b>abstract</b> is a short summary at the start of an academic article. It tells you the problem, the main ideas and why they matter.',
              'Reading it first helps you <b>predict</b> the article — and decide if it is useful for your question.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: '<b>5 min.</b> Read the abstract. Highlight the answers to questions 1–4.' },
              { who: 'pair', text: '<b>5 min.</b> Compare. Then think of your own ideas for question 5 together.' }
            ]},
            { type: 'passage', id: 'r3p', title: 'Abstract · Nicastro & Carillo (2021)', text: 'About one-third of the food produced globally for human consumption is lost or wasted each year. This represents a loss of natural resources consumed along the food supply chain that can also have negative impacts on food security. While food loss occurs between production and distribution and is prevalent in low-income countries, food waste occurs mainly at the consumer level, in the retail and food service sectors, and especially in developed countries. Preventing food losses and waste is therefore a potential strategy for better balance food supply and demand and is essential to improve food security while reducing environmental impact and providing economic benefits to the different actors in the food supply chain.' },
            { type: 'fields', fields: [
              { id: 'r3-1', label: '1. What are some impacts of food loss and waste?', placeholder: 'Loss of …', rows: 2 },
              { id: 'r3-2', label: '2. Where does food loss mainly occur?', placeholder: 'In … countries, at the … stages', rows: 2 },
              { id: 'r3-3', label: '3. Where does food waste mainly occur?', placeholder: 'In … countries, at the … level', rows: 2 },
              { id: 'r3-4', label: '4. What are some benefits of reducing food loss and waste?', placeholder: 'It can improve … , reduce … and …', rows: 2 },
              { id: 'r3-5', label: '5. How could we do this? (Not in the abstract — use your own ideas.)', placeholder: 'We could …', rows: 2 }
            ]}
          ],
          answers: { items: [
            ['1. Impacts', 'Loss of natural resources and increased food insecurity.'],
            ['2. Food loss', 'Developing (low-income) countries, at the production and distribution stages.'],
            ['3. Food waste', 'Developed countries, at the consumer level (retail and food service).'],
            ['4. Benefits', 'Improve food security, reduce environmental impacts and provide economic benefits.'],
            ['5. How?', 'Your own ideas — e.g. better storage and packaging, donating extra food, educating consumers.']
          ]}
        },
        {
          id: 'r4', short: 'Notes', minutes: 20, grouping: 'Alone → pair',
          title: 'Read and take notes',
          goal: 'Take short notes with symbols and abbreviations under each heading.',
          blocks: [
            { type: 'sources', ids: ['nicastro'] },
            { type: 'model', title: 'Given notes: the Introduction (paragraph A)', rows: [
              ['Data', '1/3 food lost or wasted each year.'],
              ['Where', 'Food Loss (F/L): Developing countries. At production + distribution levels. · Food Waste (F/W): Developed countries at consumer level.'],
              ['Benefits of reducing waste', '↓ F/L & F/W can ↓ economic and envnmtal impact + ↑ food security']
            ], note: 'Which abbreviations and symbols are used here? Find at least four.' },
            { type: 'steps', items: [
              { who: 'alone', text: 'Look at the given notes. Find the <b>abbreviations and symbols</b>.' },
              { who: 'alone', text: 'Read paragraphs B–H. Add notes to the table. Some information is already given. Use symbols — <b>no full sentences</b>.' },
              { who: 'pair', text: 'Check with the person next to you. Did you choose the same key information?' }
            ]},
            { type: 'key', title: 'Short notes = faster and already paraphrased', points: [
              'Use <b>symbols</b>: ↑ increase · ↓ decrease · → leads to · + and · e.g. example.',
              'Use <b>abbreviations</b>: F/L (food loss), F/W (food waste), envnmtl (environmental), dev. countries.',
              'Keep <b>numbers with what they measure</b> (e.g. 19% F/W from processing, EU).'
            ]},
            { type: 'table', id: 'r4t', title: 'Note-taking table · Nicastro & Carillo (2021)', columns: ['Heading (paragraph)', 'My notes'], fixed: [
              '<b>Harvest and production (B–C)</b><br><i>Given:</i> Data: 19% FW from processing · How to reduce loss: better processing + shorter delivery distances; better supply chain communication<br><i>Add:</i> Example · A potential problem',
              '<b>Retail (D)</b><br><i>Add:</i> Data · How to reduce waste — developing countries · developed countries (+ example)',
              '<b>Consumption (E)</b><br><i>Add:</i> Data from Europe · Why food is wasted · How to reduce · Example',
              '<b>Solution: food redistribution (F–G)</b><br><i>Given:</i> Examples: Buon Fine Coop / Fondazione Banco Alimentare Onlus — give extra food to people who need it<br><i>Add:</i> Best method · Food redistribution (when?) · Benefits',
              '<b>Conclusion (H)</b><br><i>Add:</i> two main points'
            ]},
            { type: 'teacher', text: 'TB: students copy the table onto paper — handwritten notes are good practice for the assessment, so you may ask them to take notes on paper first and then type the best points. Symbols answer: FL, FW, arrows, plus sign and abbreviated words. Note: the TB key for Consumption says “Household responsible for about 50% of household waste”; the text says households cause over 50% of <i>all</i> food waste (about 47 million tonnes a year) — the answers use the text.' }
          ],
          answers: { title: 'Sample notes', items: [
            ['Symbols used', 'FL, FW (abbreviations), arrows ↑ ↓, plus sign +, abbreviated words (envnmtal).'],
            ['Harvest and production', 'Example: Tesco — better packaging to slow ripening + smaller (banana) boxes → ↓ waste. · Potential problem: more frequent (smaller) deliveries may ↑ carbon footprint.'],
            ['Retail', 'Data: 5 million tonnes wasted each year (EU). · Developing countries: improve market + store conditions, e.g. roofs. · Developed countries: sell food close to expiry for a lower price; stop campaigns that encourage overbuying — e.g. Sainsbury’s + Tesco: “Buy one get one later” to replace “Buy one get one free”.'],
            ['Consumption', 'Data: households > 50% of all F/W in Europe (≈47 million tonnes/yr). · Why: consumers aren’t aware of resources needed to produce food; stores encourage overbuying. · How: educate consumers. · Example: “Love Food, Hate Waste” (WRAP); “Save Food Cut Waste” (Singapore) — aim to educate consumers.'],
            ['Redistribution', 'Best method: avoid producing too much food. · Redistribution: when overproduction is unavoidable — second-best solution. · Benefits: can ↓ hunger + prevents food being thrown away or used for less valuable purposes.'],
            ['Conclusion', 'Very important to stop food waste. · Environmental benefits + can ↓ food insecurity.']
          ]}
        },
        {
          id: 'r5', short: 'Summarise', minutes: 10, grouping: 'Alone',
          title: 'Summarise from your notes',
          goal: 'Write the main ideas in your own words — from your notes, not the text.',
          blocks: [
            { type: 'key', title: 'Paraphrase from your notes, not from the text', points: [
              'Close the reading. Look only at your notes. This stops you copying.',
              'Use <b>synonyms</b> for key words (<i>occur → happen</i>, <i>reduce → cut</i>) and <b>change the structure</b> (active → passive, verb → noun).',
              'Add the citation: <b>Nicastro and Carillo (2021)</b> or <b>(Nicastro & Carillo, 2021)</b>.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Answer each question in <b>one or two sentences</b>.' },
              { who: 'alone', text: 'Check one answer against the text: is it accurate? Did you change the words <b>and</b> the structure?' }
            ]},
            { type: 'fields', fields: [
              { id: 'r5-1', label: '1. Where does food loss often occur?', placeholder: 'Food loss mostly happens …', rows: 2 },
              { id: 'r5-2', label: '2. What are some ways to reduce food loss?', placeholder: 'It can be cut by …', rows: 2 },
              { id: 'r5-3', label: '3. What are the most common locations where food waste occurs?', placeholder: '…', rows: 2 },
              { id: 'r5-4', label: '4. What are some ways to reduce food waste?', placeholder: '…', rows: 2 },
              { id: 'r5-5', label: '5. When should redistribution of food be considered?', placeholder: '…', rows: 2 },
              { id: 'r5-6', label: '6. Why is food redistribution a good idea?', placeholder: '…', rows: 2 }
            ]}
          ],
          answers: { title: 'Model paraphrases', items: [
            ['1', 'According to Nicastro and Carillo (2021), food loss mostly happens in poorer countries, during the production and distribution stages.'],
            ['2', 'Loss can be cut by improving processing and packaging, shortening transport distances and communicating better along the supply chain.'],
            ['3', 'Most food waste happens in richer countries, in shops, restaurants and especially homes.'],
            ['4', 'Waste could be reduced by improving market conditions, selling food near its expiry date more cheaply, replacing “buy one, get one free” offers, and educating consumers.'],
            ['5', 'Redistribution should be used when producing too much food cannot be avoided.'],
            ['6', 'Giving surplus food to people who need it reduces hunger and stops edible food going to landfill or less valuable uses.']
          ]}
        },
        {
          id: 'r6', short: 'Understanding', minutes: 20, grouping: 'Alone → pair',
          title: 'Check your understanding',
          goal: 'Check details in the text and match examples to solutions.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Part A.</b> Complete the summary (gaps 1–8). Use your notes. Other words can be correct if the meaning is the same.' },
              { who: 'alone', text: '<b>Part B.</b> Match each source or example (a–e) to what it shows (i–v).' },
              { who: 'alone', text: '<b>Part C.</b> Which statement is true? Find the sentence in the text that proves it.' },
              { who: 'pair', text: 'Compare. For each answer, show your partner the <b>paragraph</b> where you found it.' }
            ]},
            { type: 'model', title: 'Part A · Summary', text: 'Food loss and food waste are significant global problems. Food loss mainly happens in the <b>(1)</b> ______ stages of the food system. Food loss can be reduced by improving <b>(2)</b> ______ and <b>(3)</b> ______ transportation distances. Food waste most commonly occurs when food is <b>(4)</b> ______. Improving <b>(5)</b> ______ in markets and stores and discouraging consumers from <b>(6)</b> ______ can help to reduce food waste. The best way to reduce food waste is to only produce what is needed. When too much food is produced, <b>(7)</b> ______ the extra food to people who are <b>(8)</b> ______ is a good way to ensure this food is not wasted.' },
            { type: 'table', id: 'r6t', title: 'Part A · My answers', columns: ['Gap', 'My answer'], fixed: ['1', '2', '3', '4', '5', '6', '7', '8'] },
            { type: 'quiz', id: 'r6q', title: 'Part B · Match a–e with i–v', shared: [
              'i. Discouraging consumers from overbuying',
              'ii. Improving packaging',
              'iii. A win-win for consumers and retailers',
              'iv. Possible problems with reducing transportation distances',
              'v. Educating consumers'
            ], items: [
              { q: 'a. Tesco', answer: 'ii. Improving packaging', why: 'Paragraph B: a strip that slows ripening, and smaller banana boxes.' },
              { q: 'b. Sainsbury’s', answer: 'i. Discouraging consumers from overbuying', why: 'Paragraph D: “Buy one, get one later” campaigns.' },
              { q: 'c. Save Food Cut Waste', answer: 'v. Educating consumers', why: 'Paragraph E: campaigns that educate consumers.' },
              { q: 'd. Wakeland (2012)', answer: 'iv. Possible problems with reducing transportation distances', why: 'Paragraph C: smaller, more frequent deliveries might increase the carbon footprint.' },
              { q: 'e. Gunders (2012)', answer: 'iii. A win-win for consumers and retailers', why: 'Paragraph D: cheaper near-expiry food keeps customers happy without reducing sales.' }
            ]},
            { type: 'quiz', id: 'r6c', title: 'Part C · Which statement is true?', items: [
              { q: 'Choose the statement that matches the text.', options: [
                'We should be careful not to produce more food than is needed.',
                'We can give extra food to hungry people, so overproduction is not a big problem.',
                'Consumers must avoid buying too much to stop overproduction.',
                'Food packaging and transport should be improved to avoid overproduction.'
              ], answer: 'We should be careful not to produce more food than is needed.', why: 'Paragraph F: “According to the food waste hierarchy, the best approach is to prevent food waste. This means we should try to avoid making too much food in the first place.” Giving food away is only the second-best option.' }
            ]},
            { type: 'teacher', text: 'TB: Ss may write the gap answers on paper. Gaps 1–8: other answers may be possible — use your judgement in feedback.' }
          ],
          answers: { title: 'Part A · Answers', items: [
            ['1', 'production and distribution'],
            ['2', 'food packaging'],
            ['3', 'reducing'],
            ['4', 'sold and consumed'],
            ['5', 'storage conditions'],
            ['6', 'buying more than they need'],
            ['7', 'giving'],
            ['8', 'hungry or food insecure']
          ]}
        },
        {
          id: 'r7', short: 'Language', minutes: 15, grouping: 'Pairs',
          title: 'Language focus: talking about solutions',
          goal: 'Use modal verbs, the present perfect and evaluative language to write about solutions.',
          blocks: [
            { type: 'model', title: 'Six sentences from the reading', list: [
              'Improving transportation methods and reducing the distance food travels <b>can</b> also prevent loss.',
              'Smaller deliveries <b>might</b> increase the carbon footprint.',
              'New packaging <b>could</b> keep fruits fresh longer without costing shoppers more.',
              'Using smaller boxes for bananas <b>has helped</b> reduce waste and CO2 emissions.',
              '<b>The best approach is</b> to prevent food waste.',
              '<b>It is important to</b> focus on giving this food to people who need it.'
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Look at the verbs in bold. Answer the six questions together.' },
              { who: 'pair', text: 'Read the key point. Then find the solution language in the summary paragraph below. Highlight it.' },
              { who: 'alone', text: 'Write two sentences of your own about a solution from the reading.' }
            ]},
            { type: 'quiz', id: 'r7q', title: 'Notice the language', items: [
              { q: 'Sentences 1–3 (<i>can, might, could</i>): do they describe the past, the present or the future?', options: ['The past', 'The present', 'The future'], answer: 'The future', why: 'Modal verbs connect an action to a possible future result.' },
              { q: 'What information do the verbs in sentences 1–3 connect?', options: ['A possible action and its result', 'A cause and a past event', 'A problem and its history'], answer: 'A possible action and its result', why: 'E.g. action: smaller deliveries → possible result: a bigger carbon footprint.' },
              { q: 'Which outcome does the writer think is <b>most</b> likely?', options: ['Sentence 1 (can)', 'Sentence 2 (might)'], answer: 'Sentence 1 (can)', why: '“Can” shows the writer is quite sure this solution works.' },
              { q: 'Which outcome does the writer think is <b>least</b> likely?', options: ['Sentence 1 (can)', 'Sentence 2 (might)'], answer: 'Sentence 2 (might)', why: '“Might” shows the writer is less sure — it is only a possibility.' },
              { q: 'Sentence 4 (<i>has helped</i>): what time does it describe?', options: ['Only the future', 'A past action with an impact on the present', 'A finished action with no link to now'], answer: 'A past action with an impact on the present', why: 'Use the present perfect for solutions that started in the past and are already working now.' },
              { q: 'In sentences 5 and 6, what does the writer show?', options: ['Which solutions they think are best', 'What happened in the past', 'Where food waste happens'], answer: 'Which solutions they think are best', why: '“The best approach is…” and “It is important to…” are evaluative language.' }
            ]},
            { type: 'key', title: 'Three tools for writing about solutions', points: [
              '<b>Possible solutions (future):</b> <i>can</i> (quite sure) → <i>could / may</i> → <i>might</i> (less sure). Choose the modal to show <b>how likely</b> you think the result is.',
              '<b>Solutions already working:</b> present perfect — <i>has / have helped, has reduced</i>.',
              '<b>Your evaluation:</b> <i>The best approach / way is (to)…</i> · <i>It is important to…</i> · <i>A good way to … is (to)…</i>'
            ]},
            { type: 'passage', id: 'r7p', title: 'Find the solution language', text: 'Food loss and food waste are significant global problems. Food loss mainly happens in the production and distribution stages of the food system. Food loss can be reduced by improving food packaging and reducing transportation distances. Food waste most commonly occurs when food is sold and consumed.  Improving storage conditions in markets and stores and discouraging consumers from buying more than they need could help to reduce food waste. The best way to reduce food waste is to only produce what is needed. When too much food is produced, giving the extra food to people who are hungry or food insecure is a good way to ensure this food is not wasted.' },
            { type: 'fields', fields: [
              { id: 'r7-1', label: 'a. Language that connects a problem to a possible solution', placeholder: '… can be reduced by …', rows: 2 },
              { id: 'r7-2', label: 'b. Language that shows the best solution', placeholder: 'The best way …', rows: 2 },
              { id: 'r7-3', label: 'My two sentences about solutions from the reading', placeholder: 'Selling food close to its expiry date could … / “Buy one, get one later” campaigns have …', rows: 3 }
            ]},
            { type: 'teacher', text: 'On Canvas this is an H5P slideshow (slides 1–5). TB key: verbs = can prevent, might increase, could keep; time = future; they connect a possible action and its result. Most likely = i (can); least likely = ii (might). iv = has helped: past action with an impact on the present (we can use the present perfect for solutions that began in the past and have an impact on the present). v–vi show the best solution: “The best approach is…”, “It is important to focus on…”.' }
          ],
          answers: { items: [
            ['a. Problem → solution', '“Food loss <b>can be reduced by</b> improving…” · “…discouraging consumers from buying more than they need <b>could help to</b> reduce food waste.”'],
            ['b. Best solution', '“<b>The best way to</b> reduce food waste <b>is to</b> only produce what is needed.” · “…giving the extra food to people who are hungry… <b>is a good way to</b> ensure this food is not wasted.”'],
            ['Model sentences', 'Selling food close to its expiry date at a lower price could reduce waste in shops. · “Buy one, get one later” campaigns have helped to stop customers overbuying (Nicastro & Carillo, 2021).']
          ]}
        },
        {
          id: 'r8', short: 'Evaluate', minutes: 15, grouping: 'Pairs → alone',
          title: 'Criticality: which household solutions will work?',
          goal: 'Evaluate solutions to household food waste and justify your choice with modals.',
          blocks: [
            { type: 'figure', src: 'assets/week3/nicastro-household.jpg', alt: 'Circle diagram of household consumption measures: charity, recipes to use up leftovers, making a shopping list, planning meals, overcoming the aesthetic barriers, understanding expiry dates, portions of food, storage.', caption: 'Measures to prevent and reduce household food waste', credit: 'Nicastro & Carillo (2021), Figure 1(a)' },
            { type: 'steps', items: [
              { who: 'pair', text: '<b>5 min.</b> Which solutions will be successful? Which <b>might not</b> be successful? Tell your partner. Use <i>can, could, might, may</i>.' },
              { who: 'pair', text: '<b>3 min.</b> Choose the <b>two</b> most successful solutions. Use the four questions to decide.' },
              { who: 'alone', text: '<b>7 min.</b> Write a short explanation of your two solutions, with a reason for each.' }
            ]},
            { type: 'cards', title: 'Four questions to evaluate a solution', numbered: true, items: [
              { text: 'How <b>easy</b> is it to implement?' },
              { text: 'How much food can it <b>save</b>?' },
              { text: 'How <b>likely</b> are people to use it?' },
              { text: 'What are the <b>barriers</b> or limitations?' }
            ]},
            { type: 'language', title: 'Evaluate with modals', groups: [
              { label: 'Possible result', phrases: ['X may / might / could / can reduce food waste and improve food security because…'] },
              { label: 'Good / best', phrases: ['A good way to … is (to)…', 'The best solution is (to)…'] },
              { label: 'Limitation', phrases: ['However, this might not work if…', 'One barrier is that…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'r8-1', label: 'Solution 1 — why it will be successful', placeholder: 'The best solution is to … because … However, …', rows: 3 },
              { id: 'r8-2', label: 'Solution 2 — why it will be successful', placeholder: 'A good way to … is … This could …', rows: 3 }
            ]},
            { type: 'teacher', text: 'TB caption for this figure reads “Figure 1: Measures to prevent and reduce FLW from harvest to distribution stages”; the panel used here is the household consumption panel, Figure 1(a), which matches the TB question (“solutions to household food waste”). Source: Nicastro, R., & Carillo, P. (2021). Food loss and waste prevention strategies from farm to fork. <i>Sustainability, 13</i>(10), Article 5443.' }
          ],
          answers: { title: 'Model explanation', items: [
            ['Solution 1', 'The best solution is to make a shopping list before going to the supermarket. It is easy and free, so most people can do it, and it could stop impulse buying. However, it might not work if shops keep offering “buy one, get one free” deals.'],
            ['Solution 2', 'A good way to reduce household waste is to understand expiry dates. Many people throw away food that is still safe, so clear information may save a lot of food. One barrier is that labels are sometimes confusing, so education campaigns are also important.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 3 · 6A ───────────────────────── */
    {
      id: 'listen', number: '03', code: '6A', minutes: 100,
      tone: 'teal', art: 'listening',
      title: 'Listen: the future of food banks?',
      subtitle: 'Listening to write · About That (2024)',
      outcome: 'Listen and take notes, and use modal verbs and evaluative language to evaluate two kinds of food bank.',
      activities: [
        {
          id: 'l1', short: 'Food banks', minutes: 10, grouping: 'Pairs → class',
          title: 'Warm-up: what is a food bank?',
          goal: 'Share what you know about food banks and the food they give.',
          blocks: [
            { type: 'talk', title: 'Talk with your partner', prompts: [
              'a. Have you heard of “food banks” before?',
              'b. What do you think they do?'
            ]},
            { type: 'steps', items: [
              { who: 'class', text: 'Your teacher shows pictures of <b>food bank packages</b>. Name the food you can see.' },
              { who: 'pair', text: 'Discuss the three questions below.' },
              { who: 'class', text: '<b>Vote:</b> which package would you most like to receive?' }
            ]},
            { type: 'talk', title: 'Look at the packages', prompts: [
              'What can you see in each package?',
              'Which one would you like to receive? Why?',
              'Do you know how to use <b>all</b> the items in the pictures?'
            ]},
            { type: 'key', title: 'Food bank', points: [
              'A <b>food bank</b> is a charity that collects donated or surplus food and gives it free to people who cannot afford enough food.',
              'Today’s question: is the usual way food banks work the <b>best</b> way?'
            ]},
            { type: 'teacher', text: 'The package pictures are on the Canvas slides. Ask Ss to identify the food in the images, then ask the class to vote on which package they would most like to receive.' }
          ]
        },
        {
          id: 'l2', short: 'Vocabulary', minutes: 10, grouping: 'Alone → pair',
          title: 'Key words before you listen',
          goal: 'Understand 12 words and expressions from the video.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Part A.</b> Match six words to their meanings.' },
              { who: 'alone', text: '<b>Part B.</b> Complete six sentences from the video with the word bank.' },
              { who: 'pair', text: 'Say the words aloud. Which ones are hard to pronounce? (Try: <i>autonomy, empowerment, rutabaga</i>.)' }
            ]},
            { type: 'quiz', id: 'l2a', title: 'Part A · Match the meanings', shared: [
              'To buy large quantities at a cheap price',
              'To decide something beforehand',
              'The right to choose for yourself',
              'A drawing of ideas',
              'Gaining the freedom and power to do what you want',
              'A kind of root vegetable'
            ], items: [
              { q: '<b>buy in bulk</b>', answer: 'To buy large quantities at a cheap price', why: 'Conventional food banks get food in bulk.' },
              { q: '<b>predetermine</b>', answer: 'To decide something beforehand', why: '“pre-” = before.' },
              { q: '<b>autonomy</b>', answer: 'The right to choose for yourself', why: 'The new food bank is “about giving autonomy”.' },
              { q: '<b>concept drawings</b>', answer: 'A drawing of ideas', why: 'Pictures of a building before it is built.' },
              { q: '<b>empowerment</b>', answer: 'Gaining the freedom and power to do what you want', why: 'The opposite of feeling helpless.' },
              { q: '<b>rutabaga</b>', answer: 'A kind of root vegetable', why: 'Also called a swede. The speaker uses it as an example.' }
            ]},
            { type: 'quiz', id: 'l2b', title: 'Part B · Complete the sentences', shared: ['conventional', 'demand for assistance far outstrips supply', 'flat out', 'lifeblood', 'dynamic', 'ramp up'], items: [
              { q: '______ food banks get food in bulk.', answer: 'conventional', why: 'Conventional = typical, usual.' },
              { q: 'Food banks typically are volunteer run and in many, many places especially now we’re getting reports that the ______.', answer: 'demand for assistance far outstrips supply', why: 'More people need help than the food banks can help.' },
              { q: 'They’re just working ______ to provide people with whatever they’ve got.', answer: 'flat out', why: 'Working flat out = working as hard and fast as possible.' },
              { q: 'Two main volunteer jobs are the ______ of a hamper model food bank.', answer: 'lifeblood', why: 'Lifeblood = very important for the success of something.' },
              { q: 'In choice-model food banks, inventory management is much more ______.', answer: 'dynamic', why: 'Dynamic = constantly changing.' },
              { q: 'To the best of our knowledge, this is going to be the largest in Canada, day one, and we only hope to ______ from there.', answer: 'ramp up', why: 'Ramp up = to increase.' }
            ]},
            { type: 'teacher', text: 'On Canvas: Quizlet (Activity 1) and an H5P drag and drop (Activity 2). Note: the TB Quizlet gloss for “demand for assistance far outstrips supply” is “There are not enough workers available”; the app uses the more accurate meaning “more people need help than the food banks can give”.' }
          ]
        },
        {
          id: 'l3', short: 'Gist', minutes: 5, grouping: 'Alone → pair',
          title: 'Listen for gist: what is the problem?',
          goal: 'Understand the main problem with food banks in two short clips.',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Listen to <b>0:00–0:26</b>, then <b>2:11–2:38</b>. Don’t write — just listen for the main problem.' },
              { who: 'alone', text: 'Answer the question.' },
              { who: 'pair', text: 'Discuss: how would <b>you</b> feel if you received food that you don’t know how to cook?' }
            ]},
            { type: 'listening', source: 'About That (2024)', title: 'Is this the future of food banks?', videoId: 'D6_WVj2xrJI', start: 0, clip: 'play 0:00–0:26, then 2:11–2:38', audio: '', transcripts: [['aboutthat', 'Transcript (adapted)']] },
            { type: 'quiz', id: 'l3q', items: [
              { q: 'What is the problem with food banks being described?', options: [
                'People cannot choose their food, so unwanted food may be wasted.',
                'Food banks are closed too often.',
                'The food is too expensive.'
              ], answer: 'People cannot choose their food, so unwanted food may be wasted.', why: 'Lack of choice or control over the food received, and unwanted food from food banks being wasted.' }
            ]},
            { type: 'talk', prompts: ['How would you feel if you received food that you don’t know how to cook?'] }
          ]
        },
        {
          id: 'l4', short: 'Notes', minutes: 20, grouping: 'Alone → pair',
          title: 'Listen for detail: take notes',
          goal: 'Take notes on the whole video, using the times and quotes to follow.',
          blocks: [
            { type: 'key', title: 'Use signposts to follow a long listening', points: [
              'Each heading has a <b>time and a quote</b>: when you hear the quote, the speaker moves to a new point.',
              'If you get lost, <b>don’t stop</b>. Listen for the next quote and catch up.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Before you listen (2 min).</b> Read the headings in the table.' },
              { who: 'class', text: '<b>Listen (9 min).</b> Watch the video and take notes — key words and symbols only.' },
              { who: 'pair', text: '<b>Check (4 min).</b> Compare notes with the person next to you.' },
              { who: 'class', text: '<b>Listen again (5 min)</b> for any missing information.' }
            ]},
            { type: 'listening', source: 'About That (2024)', title: 'Is this the future of food banks?', videoId: 'D6_WVj2xrJI', start: 0, clip: 'full video · about 8:40', audio: '', transcripts: [['aboutthat', 'Transcript (adapted)']] },
            { type: 'table', id: 'l4t', title: 'Note-taking table', columns: ['Time · heading · quote', 'My notes'], fixed: [
              '<b>[0:00] Conventional food banks</b><br>“You’re at a food bank, you’re lining up and you’re tired.”',
              '<b>[0:34] A new type of food bank</b><br>“So that’s one type of food bank but here’s another”.',
              '<b>[0:59] Questions</b><br>“When I read about this novel approach to food banking I immediately had questions”',
              '<b>[1:18] Problems with conventional food banks</b><br>“Conventional food banks all suffer from the same problem....”<br>People might already feel…',
              '<b>[2:57] What happens when people receive food they don’t want</b><br>“Two main volunteer jobs are the lifeblood of a hamper model food bank”<br>Two main volunteer jobs: 1 … 2 … · The problem with these jobs:',
              '<b>[3:43] A new type of food bank</b><br>“So those renders of what a different kind of food bank might look like that I showed you at the start”',
              '<b>[4:45] Benefits of recreating the grocery experience</b><br>“And recreating this grocery store experience is very intentional”',
              '<b>[5:38] Volunteer jobs in the new food bank</b><br>“And all those volunteers you had working the back room packing boxes,”',
              '<b>[5:58] Limitations of the new food bank</b><br>“Sounds great, right? Well let’s stay calm because it’s not easy developing a system like this that actually works.”',
              '<b>[6:16] Experience with the new model: Sarah Watson</b><br>“And we know this because we spoke with someone who’s been operating this model for about nine years now.”<br><b>[6:42] Benefits</b> “Being in control of your food feels great.”',
              '<b>[6:52] Challenges</b><br>“The challenge was that switching models didn’t...”',
              '<b>[7:32] Is this new model efficient?</b><br>“So, is the choice model the future of food banking? …”<br><b>[7:43] Conventional method</b> “You know, with the old system, you just...” · Will food banks be able to…',
              '<b>[7:56]</b> “I cycled by a food bank in my neighbourhood on Saturday. The lineup was maybe three blocks long”.'
            ]},
            { type: 'teacher', text: 'The listening has quotes and times at the transitions to help Ss keep up. Encourage handwritten notes on paper first (assessment practice), then type the best points.' }
          ],
          answers: { title: 'Teacher’s Book notes', items: [
            ['[0:00] Conventional', 'Receive a box, but you didn’t choose what’s inside.'],
            ['[0:34] New type', 'Things on display. Come every two weeks. Choose what you like.'],
            ['[0:59] Questions', 'Can anyone show up and take what they want? How can they afford this? How does the business model work?'],
            ['[1:18] Problems', 'Money. Space. Desperate for volunteers — demand for assistance far outstrips supply. Predetermining what everybody is going to get. People might already feel <b>helpless</b>.'],
            ['[2:57] Volunteer jobs', '1 Box preparer · 2 Box distributor. Problems: manual — matching boxes to names; difficult to find volunteers; difficult to match supply and demand as well as quality control.'],
            ['[3:43] New type', 'Excited but nervous. Can pick what you like — similar to a grocery store. Still need to answer some questions. By appointment.'],
            ['[4:45] Benefits', 'Gives autonomy. Can choose own meals. Gives empowerment. Food bank can stop stocking items ppl don’t like. Clients can try new foods.'],
            ['[5:38] Volunteers', 'Out front helping clients. Appealing because volunteers can see the impact of their work.'],
            ['[5:58] Limitations', 'Inventory management is dynamic. Volunteer demands are different.'],
            ['[6:16–6:42] Sarah Watson', 'Benefits: choice.'],
            ['[6:52] Challenges', 'Not changing how much food is available.'],
            ['[7:32–7:43] Efficient?', 'Conventional method: give people a box and go. Will food banks be able to keep up with demand?'],
            ['[7:56]', 'Can’t afford to bring in people one at a time. Need a lot of space for the new model.']
          ]}
        },
        {
          id: 'l5', short: 'Compare', minutes: 10, grouping: 'Alone → pair',
          title: 'Summarise: compare the two models',
          goal: 'Reorganise your notes to compare conventional and new food banks.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Use your notes to complete the table. Include only <b>main ideas</b> and useful details.' },
              { who: 'alone', text: 'Use abbreviations and symbols. <b>Paraphrase</b> as you write.' },
              { who: 'pair', text: 'Compare with a partner. Then open the answers and look at the picture.' }
            ]},
            { type: 'model', title: 'Given: the descriptions', rows: [
              ['Conventional food banks', 'Provide food to people in need. What people are going to get is predetermined.'],
              ['New type of food banks', 'Provide food to people in need. People can choose what they want.']
            ]},
            { type: 'table', id: 'l5t', title: 'Summary table', columns: ['', 'Conventional food banks', 'New type of food banks'], fixed: ['Benefits', 'Limitations', 'Volunteer jobs'] },
            { type: 'tip', text: 'Use your notes from [1:18], [2:57], [4:45], [5:38], [5:58] and [7:32–7:56].' }
          ],
          answers: { items: [
            ['Conventional · benefits', 'Efficient. Can serve a large number of people. Require less space.'],
            ['Conventional · limitations', 'Disempowering. May end up creating more waste.'],
            ['Conventional · volunteers', 'Tedious and boring. Hard to find enough volunteers.'],
            ['New · benefits', 'Give clients autonomy. Empowering. May reduce waste by letting people choose what to eat.'],
            ['New · limitations', 'Require a lot of space and money. Hard to serve many people. Appointment system.'],
            ['New · volunteers', 'More motivating. Volunteers spend more time helping people.'],
            ['The two models', '<img src="assets/week3/food-bank-models.svg" alt="Two food bank models compared: the conventional hamper model gives the same box to every family; the client-choice grocery model lets families choose from shelves.">']
          ]}
        },
        {
          id: 'l6', short: 'Understanding', minutes: 20, grouping: 'Alone → pair',
          title: 'Check your understanding',
          goal: 'Answer detailed questions about the video and the speaker’s opinion.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Answer the 10 questions from your notes and memory.' },
              { who: 'pair', text: 'Compare. Where you disagree, find the answer in the <b>transcript</b>.' },
              { who: 'class', text: 'Check. Then discuss the last question: how do you know the speaker’s attitude?' }
            ]},
            { type: 'sources', ids: ['aboutthat'] },
            { type: 'grid', id: 'l6g', title: 'What are the problems with conventional food banks? Choose for each statement.', columns: ['A problem?'], options: ['Yes', 'No'], rows: [
              'They help people to choose healthy food.',
              'They are inefficient.',
              'They may increase waste by giving people food they don’t like.',
              'Volunteer work is boring.'
            ], answers: [['No'], ['No'], ['Yes'], ['Yes']] },
            { type: 'quiz', id: 'l6q', title: 'Listen for details and opinion', items: [
              { q: 'According to the speaker, how might people feel about having to use a food bank?', options: ['Helpless', 'Hopeless', 'Happy', 'Thankful'], answer: 'Helpless', why: '“I might already feel helpless having to rely on a food bank in the first place.”' },
              { q: 'How might conventional food banks make people feel helpless?', options: ['They don’t give people a choice about what to eat.', 'They don’t give people enough food to eat.', 'They don’t teach people how to cook new food, such as rutabagas.', 'The food bank staff aren’t happy.'], answer: 'They don’t give people a choice about what to eat.', why: '“Don’t tell me what to eat on top of it.”' },
              { q: 'Why does the speaker mention rutabagas?', options: ['They are an affordable vegetable.', 'To give an example of the problems with conventional food banks.', 'They don’t taste very good.', 'They are an example of a healthy vegetable.'], answer: 'To give an example of the problems with conventional food banks.', why: 'People get food they don’t know how to cook, so it may be wasted.' },
              { q: 'How are volunteer jobs different in the new type of food bank?', options: ['Volunteers get to interact more with clients.', 'Volunteers mainly pack boxes.', 'Volunteers help clients cook.', 'Volunteers work longer hours.'], answer: 'Volunteers get to interact more with clients.', why: '“Now they’re out front helping clients with their shopping.”' },
              { q: 'How does the new type of food bank reduce waste?', options: ['People can only take a small number of items.', 'New food banks stock a smaller number of items.', 'People choose the food they like, so they don’t waste it.', 'Food delivery is more efficient in new food banks.'], answer: 'People choose the food they like, so they don’t waste it.', why: 'Nobody is forced to take something they don’t want, and the food bank can see what is left behind.' },
              { q: 'What is a possible limitation of the new type of food bank?', options: ['They are too expensive.', 'It is difficult to find enough volunteers.', 'It has never been tried before.', 'It is difficult to serve a large number of people.'], answer: 'It is difficult to serve a large number of people.', why: '“Will food banks be able to keep up with the high demand?” — the lineup was three blocks long.' },
              { q: 'How does the speaker plan to overcome the limitation from question 7?', options: ['By increasing space.', 'By hiring more staff.', 'By taking appointments.', 'By working longer hours.'], answer: 'By increasing space.', why: '“To do this on a large scale… you also need a lot of space.” The Regina Food Bank bought a big building.' },
              { q: 'About conventional food banks, which statement most closely matches the speaker’s opinion?', options: ['They are not very useful.', 'They waste too much food.', 'They are good at helping many people, but there are some limitations.', 'They should all be changed to the new type of food bank.'], answer: 'They are good at helping many people, but there are some limitations.', why: 'The speaker says they are efficient (“give people a box and they go”) but describes problems with choice, waste and volunteers.' },
              { q: 'Overall, what is the speaker’s attitude toward the new type of food bank?', options: ['Cautiously optimistic', 'Very excited', 'No attitude was expressed', 'Somewhat pessimistic'], answer: 'Cautiously optimistic', why: 'The speaker knows the limitations of choice-model food banks but thinks more space can overcome them: “excited but nervous”.' }
            ]},
            { type: 'teacher', text: 'TB questions 2–10 = quiz items 1–9 here. Doubts about the TB key: in Q1 the TB highlights “They help people to choose healthy food” in blue as well as the two real problems — this looks like a formatting error (it is not a problem, and conventional food banks do not offer choice), so the app marks only “may increase waste” and “volunteer work is boring” as problems. “They are inefficient” is not a problem: conventional food banks are efficient. Q2 and Q3 are fully blue in the TB; answers here (Helpless; no choice) come from the transcript. Q3 option “who to cook” corrected to “how to cook”.' }
          ]
        },
        {
          id: 'l7', short: 'Language', minutes: 10, grouping: 'Pairs',
          title: 'Language focus: can food banks solve these problems?',
          goal: 'Use modal verbs and evaluative language to evaluate food banks.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Remember:</b> what language did you learn in the reading lesson to talk about solutions? Write it without looking back.' },
              { who: 'pair', text: 'Can food banks help to solve the four problems below? Make a sentence for each. Choose the modal that shows <b>how likely</b> you think it is.' },
              { who: 'pair', text: 'Which model is better: conventional or client choice? Use evaluative language and give a reason.' }
            ]},
            { type: 'fields', fields: [
              { id: 'l7-1', label: 'Language for solutions (from memory)', placeholder: 'Modals: … Evaluative language: …', rows: 2 }
            ]},
            { type: 'cards', title: 'Can food banks help to solve…', items: [
              { label: '1', text: 'food insecurity?' },
              { label: '2', text: 'food waste?' },
              { label: '3', text: 'helplessness?' },
              { label: '4', text: 'environmental impacts?' }
            ]},
            { type: 'model', title: 'Example', text: 'Food banks <b>could</b> help to reduce food insecurity.' },
            { type: 'language', title: 'Useful language', groups: [
              { label: 'How likely?', phrases: ['can (quite sure)', 'could / may', 'might (less sure)'] },
              { label: 'Which is better?', phrases: ['The best approach is…', 'It is important to…', 'A good way to … is (to)…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'l7-2', label: 'Four sentences: can food banks solve these problems?', placeholder: '1. Food banks could … 2. … 3. … 4. …', rows: 4 },
              { id: 'l7-3', label: 'Which model is better? Why?', placeholder: 'The best approach is … because …', rows: 3 }
            ]}
          ],
          answers: { items: [
            ['Language from the reading', 'Modal verbs: can, could, might, may. Evaluative language: The best way… · It is important to… · A good way…'],
            ['Model sentences', '1. Food banks can reduce food insecurity in the short term. · 2. Client-choice food banks may reduce food waste because people take only what they will eat. · 3. Choice models could help people feel less helpless. · 4. By rescuing surplus food, food banks might reduce the environmental impact of landfill.'],
            ['Which is better? (model)', 'The best approach is the client-choice model because it gives people autonomy and may reduce waste. However, it is important to find enough space so that it can serve many people.']
          ]}
        },
        {
          id: 'l8', short: 'Decide', minutes: 15, grouping: 'Alone → pairs',
          title: 'Criticality: you have money for one food bank',
          goal: 'Evaluate two models and justify your decision.',
          blocks: [
            { type: 'cards', title: 'The situation', items: [
              { label: 'You', text: 'Imagine you are a <b>wealthy business person</b>. You want to support a food bank financially.' },
              { label: 'The problem', text: 'You only have enough money to support <b>one</b> model. Which one do you choose? Justify your decision.' }
            ]},
            { type: 'figure', src: 'assets/week3/food-bank-models.svg', alt: 'Two food bank models compared. Conventional hamper model: fast and efficient, serves many people and needs less space, but no choice, unwanted food may be wasted, and volunteer work is repetitive. Client-choice grocery model: choice, dignity and autonomy, less waste, volunteers help clients face to face, but needs a lot of space and money and is harder to serve many people quickly.', caption: 'Food bank A (conventional) and food bank B (client choice)', credit: 'Based on About That (2024)' },
            { type: 'steps', items: [
              { who: 'alone', text: '<b>3 min.</b> Read the features of A and B. Choose one.' },
              { who: 'alone', text: '<b>5 min.</b> Write your justification: one strong reason + why it matters more than the other model’s advantage.' },
              { who: 'pair', text: '<b>7 min.</b> Find someone who chose the <b>other</b> model. Explain your choice. Can you persuade them?' }
            ]},
            { type: 'table', id: 'l8t', title: 'Compare the features', columns: ['', 'Food bank A · Conventional', 'Food bank B · Choice'], fixed: ['Costs and efficiency', 'How many people it helps', 'How people feel', 'Food waste'] },
            { type: 'choose', id: 'l8c', title: 'I will support…', options: ['Food bank A — the conventional model', 'Food bank B — the choice model'] },
            { type: 'language', title: 'Justify your decision', groups: [
              { label: 'Decision', phrases: ['I would choose… because…', 'The best approach is to support… because…'] },
              { label: 'Weigh it up', phrases: ['Although B could…, A can…', 'It is important to… , so…', 'B might cost more, but it may…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'l8-1', label: 'My decision and justification', placeholder: 'I would support … because … Although … , … is more important because …', rows: 4 }
            ]},
            { type: 'key', title: 'Extension: class debate (if your teacher chooses it)', points: [
              'Motion: <b>“All food banks should change to the choice model.”</b> One team argues for it, one team against. Other students are judges and timekeepers.',
              'Each speaker talks for <b>1 minute</b>: Person 1 — opening statement · Person 2 — main argument 1 · Person 3 — main argument 2 · Person 1 — concluding statement.',
              'Use ideas from the listening and other DEC15 texts. You have <b>8 minutes</b> to plan.'
            ]},
            { type: 'teacher', text: 'Option 1 (5–10 min, the Canvas version) is the main task here. Option 2 (20 min, not on Canvas) is the debate: divide the class in two, with two debates at the same time. With 17–18 Ss: 4 groups of 3 debaters (two for, two against) and the rest as judges/timekeepers (at least two judges per debate, at least two debaters per group). Give debaters the planning sheet and judges the note-taking worksheet (Teachers’ Resources Page on Canvas). Judges review the listening and texts to identify good arguments they expect to hear, then set a 1-minute timer for each speaker. Monitor that judges take notes. If you choose Option 2, the stage takes about 105 minutes.' }
          ],
          answers: { title: 'Teacher’s Book features', items: [
            ['Food bank A · Conventional', 'Operation costs are low. Efficiency is high. Can give food to a lot of people. People have no choice. People feel more helpless. More food may be wasted.'],
            ['Food bank B · Choice', 'Operation costs are high. Efficiency is lower than the conventional model. Capacity to help people is limited by appointment availability. People have choice. People feel more empowered. Less food may be wasted.'],
            ['Model justification', 'I would support food bank B. Although it costs more and may help fewer people each day, it gives people dignity and choice, and it could reduce food waste because people only take food they will use. In the long term, I think empowering people is the best approach.']
          ]}
        }
      ]
    }
  ],

  /* ───────────── Optional independent practice ───────────── */
  extras: [
    {
      id: 'x1', short: 'Re-read', minutes: 15, grouping: 'Alone', category: 'Reading',
      title: 'Read the whole article again',
      goal: 'Find more evidence about solutions for this week’s focus question.',
      blocks: [
        { type: 'sources', ids: ['nicastro'] },
        { type: 'steps', items: [
          { who: 'alone', text: 'Read Nicastro and Carillo (2021) again. Find <b>one solution</b> for each stage: production, retail, consumption.' },
          { who: 'alone', text: 'For each one, write a sentence with a modal verb or the present perfect.' }
        ]},
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'Three solutions, three sentences', placeholder: 'Production: … could … Retail: … has helped … Consumption: …', rows: 4 }
        ]}
      ],
      answers: { items: [['Model', 'Production: new packaging could keep fruit fresh for longer. · Retail: selling food close to its expiry date at a lower price has helped keep customers happy without reducing sales. · Consumption: education campaigns can help people waste less food (Nicastro & Carillo, 2021).']] }
    },
    {
      id: 'x2', short: 'Video again', minutes: 15, grouping: 'Alone', category: 'Extra listening',
      title: 'Watch the food bank video again',
      goal: 'Listen again without notes, then check with the transcript.',
      blocks: [
        { type: 'listening', source: 'About That (2024)', title: 'Is this the future of food banks?', videoId: 'D6_WVj2xrJI', start: 0, clip: 'full video · about 8:40', audio: '', transcripts: [['aboutthat', 'Transcript (adapted)']] },
        { type: 'steps', items: [
          { who: 'alone', text: 'Watch the whole video. Listen for <b>three numbers</b> or facts (e.g. how often people can come, how long Sarah Watson’s food bank has used the model).' },
          { who: 'alone', text: 'Open the transcript and check.' }
        ]},
        { type: 'fields', fields: [{ id: 'x2-1', label: 'Three facts I heard', placeholder: '1. … 2. … 3. …', rows: 3 }] }
      ],
      answers: { items: [['Examples', 'People come back every two weeks · about $200 in goods twice a month per family · North York Harvest Food Bank has used the model for about nine years · the lineup was maybe three blocks long.']] }
    },
    {
      id: 'x3', short: 'Paragraph', minutes: 20, grouping: 'Alone', category: 'Writing practice',
      title: 'Write a short evaluation paragraph',
      goal: 'Answer part of the focus question in one paragraph.',
      blocks: [
        { type: 'question' },
        { type: 'steps', items: [
          { who: 'alone', text: 'Write one paragraph (100–150 words): <b>Can food banks help to solve food insecurity?</b>' },
          { who: 'alone', text: 'Use at least two modals, one evaluative phrase, and cite About That (2024).' }
        ]},
        { type: 'fields', fields: [{ id: 'x3-1', label: 'My paragraph', placeholder: 'Food banks can … However, … The best approach is …', rows: 7 }] },
        { type: 'checklist', id: 'x3c', title: 'Check', items: [
          'My first sentence answers the question.',
          'I used at least two modal verbs (can, could, may, might).',
          'I used evaluative language (The best approach is… / It is important to…).',
          'I cited the source: About That (2024).'
        ]}
      ],
      answers: { items: [['Model', 'Food banks can reduce food insecurity in the short term, because they give free food to people who cannot afford it. However, conventional food banks might make people feel helpless, and unwanted food may be wasted (About That, 2024). Client-choice food banks could solve some of these problems, because people choose what they will eat. On the other hand, this model needs more space and money, so it may serve fewer people. Therefore, it is important to see food banks as one part of the solution, together with preventing food waste in the first place.']] }
    }
  ],

  /* Word help: [word, plain meaning, example]. Dotted words open these meanings. */
  glossary: [
    ['food loss', 'Food lost during production, harvest and distribution — before it is sold.', 'Food loss is common in low-income countries.'],
    ['food waste', 'Edible food that people throw away — usually in shops, restaurants and homes.', 'Households cause over 50% of food waste in Europe.'],
    ['hierarchy', 'A system where things are arranged in order of importance.', 'The food waste hierarchy says prevention is best.'],
    ['redistribution', 'Moving extra food to people who need it.', 'Food redistribution can reduce hunger.'],
    ['surplus', 'More than is needed; extra.', 'Food surpluses from supermarkets.'],
    ['compost', 'Let food scraps break down into soil for plants.', 'A community composting hub.'],
    ['supply chain', 'All the steps and people that move food from the farm to the consumer.', 'Actors in the food supply chain.'],
    ['food bank', 'A charity that collects food and gives it free to people in need.', 'Is this the future of food banks?'],
    ['conventional', 'Typical; the usual way.', 'Conventional food banks give everyone the same box.'],
    ['autonomy', 'The right to choose for yourself.', 'It’s about giving autonomy.'],
    ['empowerment', 'Gaining the freedom and power to do what you want.', 'Choice gives people empowerment.'],
    ['modal verb', 'A verb like can, could, may or might that shows how possible or likely something is.', 'Smaller deliveries might increase the carbon footprint.'],
    ['evaluate', 'Judge how good, useful or important something is.', 'Evaluate two food bank models.'],
    ['carbon footprint', 'The amount of greenhouse gas that an activity produces.', 'More deliveries could increase the carbon footprint.']
  ]
};
