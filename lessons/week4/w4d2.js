/* DEC15 · Week 4, Day 2 — lesson content.
   Teacher’s Book: W4 D2 · 4A Mediation + Academic writing skills 1 (120) · 5A Discussion skills 1 (120).
   Texts: Huang et al. (2024) upcycled food · Gunders (2024) · Castro et al. (2023) · Negotiation ending 2 sample
   — lessons/week4/sources.js. Activity titles use the Teacher’s Book headings.
   Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true). */

window.DEC15_LESSON = {
  id: 'w4d2',
  week: 4, day: 2,
  title: 'Bring sources together and negotiate',
  duration: 'About 4 hours',
  question: 'Who is mainly responsible for reducing food waste — and how can we argue our position convincingly?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week4/hero-w4d2.svg',
  imageAlt: 'Three documents merging into one, upcycled food turning from brewer’s grain into flour and then cookies, and two speech bubbles negotiating.',
  journey: 'Today you read about upcycled food and bring three texts together: who should reduce food waste — businesses, governments or consumers? You learn how researchers explain results and discuss implications, and you write a paragraph. Then you practise making strong arguments and the language of negotiation, and keep planning your group presentation.',
  finish: { title: 'Wednesday', text: 'Evaluating options, flexibility and taking a stance' },

  sections: [
    /* ───────────────────────── 4A Mediation + Academic writing skills 1 ───────────────────────── */
    {
      id: 'mediate', number: '01', code: '4A', minutes: 120,
      tone: 'blue', art: 'reading',
      title: 'Mediation + Academic writing skills 1',
      subtitle: 'Upcycled food · Huang et al. (2024) — and three texts together',
      outcome: 'Read and take notes, synthesise information across texts, identify language to present results and discuss implications, and use hedging language to write a paragraph.',
      activities: [
        {
          id: 'm1', short: 'Recap', minutes: 10, grouping: 'Pairs',
          title: 'Recap',
          goal: 'Remember Gunders’ five tips and match them to four people who waste food.',
          blocks: [
            { type: 'talk', title: '1 · Yesterday’s listening', prompts: ['Gunders (2024) gave <b>five tips</b> to help reduce food waste at home. Who can remember them?'] },
            { type: 'flip', title: 'The five tips — say them first, then turn the cards', items: [
              { front: 'Tip 1', back: 'Make a plan before you go shopping to reduce overbuying.' },
              { front: 'Tip 2', back: 'Love your leftovers.' },
              { front: 'Tip 3', back: 'Freeze your food.' },
              { front: 'Tip 4', back: 'Use it up. Shop your fridge before you restock.' },
              { front: 'Tip 5', back: 'Learn your labels.' }
            ]},
            { type: 'cards', title: '2 · The four people from yesterday’s reading lesson', items: [
              { label: 'Person A', text: 'Loves to cook, but often forgets ingredients. He doesn’t plan before shopping and buys food he already has. He throws food away and often orders takeaway.' },
              { label: 'Person B', text: 'Loves to cook and writes a shopping list, but gets excited and buys too much. She cooks too much food and can’t eat it all before it goes bad.' },
              { label: 'Person C', text: 'Doesn’t like cooking — planning ingredients takes too long. Worried about unsafe food because labels are confusing, so he mainly eats unhealthy takeaway.' },
              { label: 'Person D', text: 'Wants to spend less on food. She wants her housemates to buy in bulk and share — and to track whether this saves money.' }
            ]},
            { type: 'table', id: 'm1t', title: 'Which tips could help each person? Why?', columns: ['Person', 'Useful tip(s) from Gunders (2024)', 'Could an app help them use the tip?'], fixed: ['Person A', 'Person B', 'Person C', 'Person D'] },
            { type: 'teacher', ref: 'w4d2-t1' }
          ],
          answers: { title: 'Possible answers', items: [
            ['Person A', 'Tip 1 (plan before shopping) and Tip 4 (shop your fridge first). A smart inventory app reminds him what he already has.'],
            ['Person B', 'Tip 2 (love your leftovers) and Tip 3 (freeze your food). An app with smart recipes can help with portion sizes; a food-sharing hub can share the extra food.'],
            ['Person C', 'Tip 5 (learn your labels — use your senses) and Tip 1 (a simple meal plan). A smart inventory app can explain labels; recipe apps make planning faster.'],
            ['Person D', 'Tip 1 (plan together) and Tip 4 (use it up). A food-sharing hub and an inventory that tracks spending.']
          ]}
        },
        {
          id: 'm2', short: 'Explaining results', minutes: 5, grouping: 'Whole class',
          title: 'Academic Skills: Explaining results',
          goal: 'Decide which verbs show that researchers are certain — and which show they are not.',
          blocks: [
            { type: 'key', title: 'Why researchers are careful', points: [
              'Today’s reading is an extract from an <b>empirical study</b>: researchers collect and analyse data, then try to explain what it means.',
              'There is often more than one possible explanation for a result, so it is difficult to be 100% certain.',
              'The <b>verb</b> shows the authors’ degree of certainty. Remember the <b>tentative (hedging) verbs</b> from Week 1.'
            ]},
            { type: 'sort', id: 'm2s', title: 'Certain or uncertain about the meaning of the result?', hint: 'Look at the verbs in <b>bold</b>. Drag each expression to a box.', buckets: [
              { label: 'Certain' }, { label: 'Uncertain' }
            ], items: [
              { text: 'The results <b>show</b> (that)…', answer: 0 },
              { text: 'The results <b>suggest</b> (that)…', answer: 1 },
              { text: 'The results <b>mean</b> (that)…', answer: 0 },
              { text: 'The results <b>indicate</b> (that)…', answer: 1 }
            ]},
            { type: 'key', title: 'Even less certain: add a modal', compare: [
              { label: 'may · might · could', text: 'Put a modal verb before the main verb to reduce the level of certainty further.', eg: 'The results <b>could indicate</b> that… · The results <b>may suggest</b> that… · The results <b>might indicate</b> that…' }
            ]},
            { type: 'tip', text: 'As you read today, notice the language the authors use to explain their results. Why are they more certain about some explanations than others?' },
            { type: 'teacher', ref: 'w4d2-t2' }
          ],
          answers: { items: [
            ['Certainty meter', '<img src="assets/week4/certainty-verbs.svg" alt="A certainty meter: results show / mean (certain), results suggest / indicate (less certain), results may suggest / might indicate / could indicate (least certain).">']
          ]}
        },
        {
          id: 'm3', short: 'Vocabulary', minutes: 10, grouping: 'Alone → pair',
          title: 'Vocabulary',
          goal: 'Learn nine words from the reading and use them in sentences.',
          blocks: [
            { type: 'flip', title: '1 · Words from the reading', hint: 'Guess the meaning, then turn the card.', items: [
              { front: 'non-conventional', back: 'Unusual; not normal.' },
              { front: 'nutritional value', back: 'How healthy a particular kind of food is for you.' },
              { front: 'green value', back: 'How good something is for the environment.' },
              { front: 'novelty', back: 'Something new or unusual.' },
              { front: 'ethical consumption', back: 'Choosing to buy products that don’t cause harm.' },
              { front: 'credibility', back: 'Being believable or trustworthy.' },
              { front: 'certifications', back: 'Official documents that give proof and details of something.' },
              { front: 'transparency', back: 'Being open and truthful.' },
              { front: 'uptake', back: 'The rate of using something new.' }
            ]},
            { type: 'cloze', id: 'm3c', title: '2 · Complete the sentences with words from the list', list: true, options: ['certifications', 'credibility', 'ethical consumption', 'green value', 'non-conventional', 'novelty', 'nutritional value', 'transparency', 'uptake'],
              text: 'Upcycled foods use {{1}} food materials to create new products with a high {{2}}.\nUpcycled foods are good for the environment, so they are a good choice for consumers who value {{3}}.\nIt is important for ethical food manufacturers to have {{4}} and {{5}} in their supply chains, so consumers can trust them.\nIncreasing {{6}} of upcycled foods can help to reduce food waste.',
              answers: ['non-conventional', 'nutritional value', 'ethical consumption', 'credibility', 'transparency', 'uptake'] },
            { type: 'teacher', ref: 'w4d2-t3' }
          ]
        },
        {
          id: 'm4', short: 'Gist', minutes: 10, grouping: 'Alone → pair',
          title: 'Reading for gist',
          goal: 'Find out what upcycled food is.',
          blocks: [
            { type: 'cards', title: '1 · Look at the picture story. What do you think upcycled food is?', numbered: true, items: [
              { label: 'Beer making', text: 'Brewers use grain to make beer.' },
              { label: 'Left-over grain', text: 'After brewing, lots of grain is left over.' },
              { label: 'Flour', text: 'The grain is dried and turned into flour.' },
              { label: 'Cookies', text: 'The flour is used to bake cookies and cakes.' }
            ]},
            { type: 'talk', prompts: ['What do you think <b>upcycled food</b> is?', 'Do you know any foods that use upcycled ingredients?'] },
            { type: 'passage', id: 'm4p', title: 'Read the section from the text (paragraph B)', text: 'Upcycled food uses non-conventional food materials in a way that is good for the environment and can be traced back to its source (Upcycled Food Association 2023). For example, grains left over from making beer can be turned into flour. This flour can then be used to make cakes, cookies, and other products. Consumers are realizing that using upcycled ingredients can reduce food waste and help the environment. Studies have shown that upcycled food products keep their nutritional value and help reduce waste, supporting both health and environmental sustainability (Thorsen et al., 2022; Grasso et al. 2021).' },
            { type: 'quiz', id: 'm4q', items: [
              { q: '1. What is the definition of upcycled food?', options: ['Food that uses non-conventional food materials in a way that is good for the environment and can be traced back to its source', 'Food that is sold cheaply before its expiry date', 'Food that is grown without chemicals'], answer: 'Food that uses non-conventional food materials in a way that is good for the environment and can be traced back to its source', why: 'The first sentence gives the definition (Upcycled Food Association, 2023).' },
              { q: '2. What example is given?', options: ['Cookies made from grain that was used in beer production', 'Juice made from old fruit', 'Bread made from recycled packaging'], answer: 'Cookies made from grain that was used in beer production', why: 'Grains left over from making beer → flour → cakes and cookies.' },
              { q: '3. What are some benefits of upcycled food?', options: ['It is nutritious and environmentally friendly.', 'It is cheaper and tastes better.', 'It lasts longer in the fridge.'], answer: 'It is nutritious and environmentally friendly.', why: 'It keeps its nutritional value and helps reduce waste (Thorsen et al., 2022; Grasso et al., 2021).' }
            ]},
            { type: 'teacher', ref: 'w4d2-t4' }
          ]
        },
        {
          id: 'm5', short: 'Note-taking', minutes: 20, grouping: 'Alone → pair',
          title: 'Reading for detail: Note-taking',
          goal: 'Read the whole extract and take paraphrased notes under the headings.',
          blocks: [
            { type: 'sources', ids: ['huang'] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Read Huang et al. (2024), paragraphs A–F. Add notes to the table.' },
              { who: 'alone', text: '<b>Paraphrase</b> as you write: short phrases in your own words, not whole sentences from the text.' },
              { who: 'pair', text: 'Compare your notes with a partner. Add anything you missed.' }
            ]},
            { type: 'table', id: 'm5t', title: 'My notes: Huang et al. (2024)', columns: ['', 'Notes'], fixed: [
              'The problem<br><small>a potential solution to the problem</small>',
              'Upcycled food<br><small>definition · example · benefits</small>',
              'VAB model<br><small>4 factors that affect consumers’ intentions</small>',
              'The results from this study<br><small>what do consumers value? (health · ethical consumption) · what businesses can do with the results</small>',
              'An unexpected result from the study<br><small>what consumers may value more · what businesses can do with this information</small>',
              'Summary<br><small>benefits of upcycled food</small>'
            ]},
            { type: 'teacher', ref: 'w4d2-t5' }
          ],
          answers: { title: 'Suggested notes', items: [
            ['The problem', 'Food waste: about ⅓ of food is wasted · contributes to greenhouse gases (8–10%). <b>Potential solution:</b> upcycled food.'],
            ['Upcycled food', 'Uses non-conventional ingredients, often from processed waste products · e.g. cookies made from grain used in beer making · reduces waste, good for the environment and health.'],
            ['VAB model', '<img src="assets/week4/vab-model.svg" alt="The Value–Attitude–Behaviour model: health values lead to attitude towards upcycled foods, which leads to green behavioural intentions; green perceived value, product novelty and moral consumption also point to green behavioural intentions."><br>4 factors: health · perceived green value · novelty · ethical consumption.'],
            ['Results', 'Consumers value <b>health</b> → businesses should promote the health benefits of upcycled food. <b>Ethical consumption</b> is important → show ethical certification on products.'],
            ['Unexpected result', 'Novelty and green value were not important. Consumers may value practical use and cost-effectiveness more → emphasise the practical benefits of upcycled food, including cost.'],
            ['Summary', 'Emphasising practical benefits may increase uptake. Although consumers don’t seem to value it, upcycled food will still have environmental benefits.']
          ]}
        },
        {
          id: 'm6', short: 'Across texts', minutes: 25, grouping: 'Alone → pair',
          title: 'Building understanding across texts',
          goal: 'Compare Gunders (2024), Castro et al. (2023) and Huang et al. (2024): goals, actors and main focus.',
          blocks: [
            { type: 'sources', ids: ['gunders', 'castro', 'huang'] },
            { type: 'grid', id: 'm6g1', title: '1 · Which texts indicate that reducing food waste will be important to achieve the U.N. Sustainable Development Goals?', rows: ['Castro et al. (2023)', 'Gunders (2024)', 'Huang et al. (2024)'], columns: ['Mentions the U.N. goals?'], options: ['Yes', 'No'],
              answers: [['No'], ['Yes'], ['Yes']] },
            { type: 'cloze', id: 'm6c', title: '2 · Complete the synthesised summary', options: ['consumers', 'environmental impacts', 'Gunders (2024)', 'new technologies', 'these foods', 'upcycled foods'],
              text: '{{1}} argues that reducing food waste will aid progress toward achieving the U.N. Sustainable Development Goal to cut food loss and waste in half by 2030; however, this will require the rapid uptake of {{2}}. Huang et al. (2024) suggests that {{3}} could be one such technology that has the potential to reduce the {{4}} of food waste. Encouraging {{5}} to eat more of {{6}} could therefore help with achieving the U.N. goal.',
              answers: ['Gunders (2024)', 'new technologies', 'upcycled foods', 'environmental impacts', 'consumers', 'these foods'] },
            { type: 'figure', src: 'assets/week4/three-actors.svg', alt: 'Three actors in the food system: businesses, governments and consumers.', caption: 'Three actors in the food waste cycle' },
            { type: 'grid', id: 'm6g2', title: '3 · Which actors does each text mention? (Y = mentioned, N = not mentioned)', rows: ['Castro et al. (2023)', 'Gunders (2024)', 'Huang et al. (2024)'], columns: ['Businesses', 'Governments', 'Consumers'], options: ['Y', 'N'],
              answers: [['Y', 'N', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'N', 'Y']] },
            { type: 'tip', text: 'Food apps count as <b>businesses</b> for this task.' },
            { type: 'table', id: 'm6t', title: 'According to the texts, how can different actors contribute to or reduce food waste?', columns: ['Text', 'Businesses', 'Governments', 'Consumers'], fixed: ['Castro et al. (2023)', 'Gunders (2024)', 'Huang et al. (2024)'] },
            { type: 'sort', id: 'm6s', single: true, title: '4 · Which actors are the main focus of each text?', hint: '<b>Drag</b> each text to its main focus — or tap a text, then tap a focus.', buckets: [
              { label: 'The role of businesses and food manufacturers to encourage consumers to eat environmentally friendly food.', letter: 'a' },
              { label: 'The role of consumers to use technology to reduce their household waste.', letter: 'b' },
              { label: 'The role of government to support new technology and the role of consumers to reduce their household waste.', letter: 'c' }
            ], items: [
              { text: 'Castro et al. (2023)', answer: 1 },
              { text: 'Gunders (2024)', answer: 2 },
              { text: 'Huang et al. (2024)', answer: 0 }
            ]},
            { type: 'quiz', id: 'm6q', title: '5 · Overall, what can we learn from the three texts?', items: [
              { q: 'Choose the best summary.', options: ['Consumers are mainly responsible for reducing food waste, but businesses also have an important role to play.', 'Achieving the U.N. sustainability goals will require all actors in the food system to reduce their waste.', 'Using new technologies is the only way to achieve the U.N. sustainability goals.', 'Increased government funding will not be necessary to achieve the U.N. sustainability goals.'], answer: 'Achieving the U.N. sustainability goals will require all actors in the food system to reduce their waste.', why: 'Each text focuses on different actors — together they show that businesses, governments and consumers all have a role.' }
            ]},
            { type: 'teacher', ref: 'w4d2-t6' }
          ],
          answers: { title: 'Question 3 · how each actor can help', items: [
            ['Castro et al. (2023)', '<b>Businesses:</b> a variety of apps and food delivery services can reduce waste; supermarket layouts encourage overbuying. <b>Consumers:</b> can use technology to reduce waste at the three stages of the food waste cycle.'],
            ['Gunders (2024)', '<b>Businesses:</b> technology to improve food storage, sell food close to expiry and track waste. <b>Governments:</b> large-scale investment in technology; policies that prohibit or discourage waste. <b>Consumers:</b> 5 tips to reduce waste at home.'],
            ['Huang et al. (2024)', '<b>Businesses:</b> use upcycled ingredients; marketing strategies to encourage consumers to buy upcycled food. <b>Consumers:</b> can choose to buy upcycled food.']
          ]}
        },
        {
          id: 'm7', short: 'Synthesise', minutes: 10, grouping: 'Pairs or groups of 3',
          title: 'Synthesizing',
          goal: 'Give a one-minute answer to “Who is mainly responsible for reducing food waste?” using all three texts.',
          blocks: [
            { type: 'choose', id: 'm7c', title: '1 · Which statement do you most agree with?', options: [
              '1. There are many easy ways to reduce food waste at home, so consumers are mostly responsible for reducing food waste.',
              '2. Governments are mainly responsible for reducing food waste because they can fund effective new technologies.',
              '3. Businesses that create environmentally friendly products should do more to encourage consumers to use their products.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: '<b>5 minutes.</b> Prepare a short response to the question: <b>Who is mainly responsible for reducing food waste?</b> Refer to all three texts. Compare and contrast them, and explain your reasons.' },
              { who: 'pair', text: 'Explain your response to your partner. Keep it clear and short — aim to speak for <b>one minute</b>.' }
            ]},
            { type: 'model', title: 'An example start', text: '“Reading 1 <b>indicates</b> that governments can play a significant role in reducing food waste, <b>while</b> reading 2 <b>tends to focus more on</b> the role of individuals to reduce waste at the consumption stage. I think that… because…”' },
            { type: 'fields', title: 'My notes for one minute', fields: [
              { id: 'm7-1', label: 'Who is mainly responsible? Notes from the three texts + my reasons', placeholder: 'Gunders (2024) … while Castro et al. (2023) … Huang et al. (2024) … I think … because …', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w4d2-t7' }
          ]
        },
        {
          id: 'm8', short: 'Implications', minutes: 30, grouping: 'Alone → pair',
          title: 'Academic writing skills: Discussing implications',
          goal: 'Find how the authors explain results and discuss implications — then write your own paragraph.',
          blocks: [
            { type: 'passage', id: 'm8p1', title: 'Review paragraph C from Huang et al. (2024)', text: 'In Taiwan, the effect of upcycled food on how consumers act is not well-known. This study aimed to understand this by using the Value-Attitude-Behaviour (VAB) model. The VAB model looks at factors that affect consumers’ intention to purchase environmentally friendly products, such as a how healthy a product is, the products perceived green value, product novelty, and ethical consumption. The model was used in this study to measure how Taiwanese consumers view and might act towards upcycled food. The findings of the study show that health considerations greatly shape consumer attitudes towards upcycled food. These considerations then encourage environmentally friendly actions. This suggests that consumers who value health might be interested in buying upcycled products. Therefore, food businesses should clearly advertise the health benefits of upcycled food, such as their higher nutritional value or lack of heavily processed ingredients. Working with nutritionists and health organizations could also build trust and credibility, perhaps by promoting health-focused recipes or eating plans approved by health professionals.' },
            { type: 'quiz', id: 'm8q1', title: 'Paragraph C', items: [
              { q: '1. What model was used, and how?', options: ['The VAB model — to measure how Taiwanese consumers view and might act towards upcycled food', 'The VAB model — to measure how much food Taiwanese businesses waste', 'A price model — to compare upcycled and normal food'], answer: 'The VAB model — to measure how Taiwanese consumers view and might act towards upcycled food', why: '“The model was used in this study to measure how Taiwanese consumers view and might act towards upcycled food.”' },
              { q: '2. What were the results of the study?', options: ['Health considerations shape attitudes to upcycled food, which then encourage green action.', 'Most consumers do not like the taste of upcycled food.', 'Upcycled food is more expensive than normal food.'], answer: 'Health considerations shape attitudes to upcycled food, which then encourage green action.', why: '“…health considerations greatly shape consumer attitudes… These considerations then encourage environmentally friendly actions.”' },
              { q: '3. Which expressions describe the results?', options: ['The findings of the study show that… / This suggests that…', 'In Taiwan… / This study aimed to…', 'Therefore… / perhaps…'], answer: 'The findings of the study show that… / This suggests that…', why: '“show” = certain; “suggests” = less certain.' }
            ]},
            { type: 'key', title: 'Discussing implications', points: [
              '<b>Implications</b> = what something means in a particular context, how it can be used, who the results could impact, or what we can conclude.',
              'Two common ways to talk about implications: <b>a)</b> use <b>hedging language</b> to describe possible uses or meanings of the results · <b>b)</b> <b>give advice</b> to a particular person or group on how to use the results.'
            ]},
            { type: 'talk', title: 'Paragraph C — discuss', prompts: [
              '1. What are the implications of the results in paragraph C?',
              '2. Highlight examples of <b>hedging language</b> and <b>language to give advice</b> in paragraph C.',
              '3. Why did the authors use hedging language?',
              '4. Why did they give advice to food businesses?',
              '5. How is the language to give advice here different from yesterday’s listening?',
              '6. Do you know any other ways to give advice in writing?'
            ]},
            { type: 'passage', id: 'm8p2', title: 'Now review paragraph E', text: 'Interestingly, the study found that product novelty and the perceived green value have little effect on green actions among Taiwanese consumers. This result was not expected as previous studies have found a strong relationship between green value and green behaviours (Zhuang, et al., 2021). However, Imtiyaz et al. (2021) point out that consumers may value practical use and cost-effectiveness over a product’s green value. This finding suggests a shift in marketing strategy that emphasizes the practical benefits and relevance to daily life of upcycled food products should be considered. This may help to increase consumer acceptance and market penetration of upcycled foods.' },
            { type: 'quiz', id: 'm8q2', title: 'Paragraph E', items: [
              { q: '1. What language do the authors use to explain the results?', options: ['the study found that', 'previous studies have found', 'point out that'], answer: 'the study found that', why: '“Interestingly, the study found that…” introduces this study’s result.' },
              { q: '2. Was this result expected?', options: ['Yes', 'No'], answer: 'No', why: '“This result was not expected…”' },
              { q: '3. Why does the paragraph begin with “Interestingly”?', options: ['To highlight that the result was not consistent with their expectations', 'To give advice', 'To show they are certain'], answer: 'To highlight that the result was not consistent with their expectations', why: 'It signals a surprising result.' },
              { q: '4. Why does sentence 3 begin with “However”?', options: ['The authors explain the unexpected result by contrasting studies that show different results.', 'They add a similar idea.', 'They give an example.'], answer: 'The authors explain the unexpected result by contrasting studies that show different results.', why: 'Zhuang et al. (2021) vs Imtiyaz et al. (2021).' },
              { q: '5. What are the implications in this paragraph?', options: ['Consumers may value practical use and cost over environmental concerns, so businesses can adjust their marketing.', 'Green value is the most important factor for consumers.', 'Upcycled food should not be sold in Taiwan.'], answer: 'Consumers may value practical use and cost over environmental concerns, so businesses can adjust their marketing.', why: '“…a shift in marketing strategy… should be considered.”' },
              { q: '6. Which language describes the implications?', options: ['may · may · should be considered', 'found · was not expected', 'Interestingly · However'], answer: 'may · may · should be considered', why: 'Hedging (may) + careful advice (should be considered).' }
            ]},
            { type: 'figure', src: 'assets/week4/app-features.svg', alt: 'Four app functions: smart inventory, smart recipes, food-sharing hub and portion-ready food delivery, with what each can do.', caption: 'Yesterday’s apps', credit: 'Adapted from Castro et al. (2023)', size: 'wide' },
            { type: 'model', title: 'Your paragraph begins like this', text: 'Apps like No Waste and Plus Fridge Pal can reduce waste at the acquisition stage as they allow consumers to track what they need and what they don’t, reducing unnecessary purchases. These apps also provide a summary of past shopping behaviours, showing which items were bought and not used. …' },
            { type: 'key', title: 'Continue the paragraph: the implications of these apps', compare: [
              { label: 'Choose 1–2 groups', text: 'businesses · consumers · food producers · people who are food insecure' },
              { label: 'Possible implications', text: 'money · the environment · food security · nutrition · or any others you can think of' },
              { label: 'Language', text: 'Use <b>hedging</b> (may, might, could, this suggests…) and/or <b>advice</b> (should, ought to, might want to…).', eg: 'This may help consumers to save money. Supermarkets might therefore want to…' }
            ]},
            { type: 'fields', id: 'm8f', title: 'My paragraph', fields: [
              { id: 'm8-w', label: 'Continue the paragraph with the implications of these apps', placeholder: 'For consumers, this could… As a result, … should…', rows: 7 }
            ], send: true, sendLabel: 'Share your paragraph with your partner', sendHint: 'Send a copy to your partner — only they will see it. Then read theirs.' },
            { type: 'talk', title: 'Read your partner’s paragraph', prompts: ['Who did your partner write about?', 'What are the possible implications mentioned?', 'What hedging language did your partner use?', 'Did they give any advice?'] },
            { type: 'teacher', ref: 'w4d2-t8' }
          ],
          answers: { title: 'Paragraph C', items: [
            ['1. Implications', 'Health-conscious consumers might buy upcycled food. Businesses should focus on advertising the health benefits of upcycled food and build trust by working with health professionals.'],
            ['2. Language', '<b>Hedging:</b> This suggests that · might be interested · could also build · perhaps. <b>Advice:</b> food businesses should clearly advertise…'],
            ['3. Why hedge?', 'We cannot be certain how the results can be used or applied. There may be other ways to use the results that have not been considered.'],
            ['4. Why advice?', 'The authors want to show that their results are useful for businesses.'],
            ['5. Writing vs speaking', 'The text uses “should” after some hedged sentences. The listening used modals of obligation and imperatives. Writing tends to be more cautious and formal than speaking.'],
            ['6. Other ways', 'ought to · might want to']
          ]}
        }
      ]
    },

    /* ───────────────────────── 5A Discussion skills 1 ───────────────────────── */
    {
      id: 'discuss', number: '02', code: '5A', minutes: 120,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills 1',
      subtitle: 'Strong arguments and negotiation language',
      outcome: 'Evaluate the strength of an argument, practise language and strategies for negotiation, plan a group summary presentation and reflect on your groupwork.',
      activities: [
        {
          id: 'd1', short: 'Speed debating', minutes: 10, grouping: 'Two lines',
          title: 'Warmer: Speed Debating',
          goal: 'Argue for a side you didn’t choose — in one minute!',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Stand in two lines facing each other. Your teacher shows a pair: <b>Which is better…?</b>' },
              { who: 'pair', text: 'The <b>left</b> line argues for the left option; the <b>right</b> line argues for the right option. You can’t choose your side!' },
              { who: 'class', text: 'After <b>1 minute</b>, one line moves along to a new partner. New pair, new debate.' }
            ]},
            { type: 'cards', title: 'Which is better?', items: [
              { label: 'Left: coffee', text: 'Right: tea' },
              { label: 'Left: dogs', text: 'Right: cats' },
              { label: 'Left: streaming', text: 'Right: the cinema' },
              { label: 'Left: books', text: 'Right: magazines' },
              { label: 'Left: summer', text: 'Right: winter' },
              { label: 'Left: city life', text: 'Right: country life' },
              { label: 'Left: online classes', text: 'Right: face-to-face classes' },
              { label: 'Left: morning', text: 'Right: night' },
              { label: 'Left: classical music', text: 'Right: pop music' }
            ]},
            { type: 'talk', title: 'Back in your seat — reflect with your partner', prompts: [
              'a) Were you comfortable disagreeing with your classmates?',
              'b) Did you present convincing arguments? Did they?',
              'c) How did you feel arguing for a position you don’t actually agree with? Could you justify your arguments?'
            ]},
            { type: 'teacher', ref: 'w4d2-t9' }
          ]
        },
        {
          id: 'd2', short: 'Discussion sample', minutes: 15, grouping: 'Alone → pair',
          title: 'Discussion Sample',
          goal: 'Listen to an alternative ending of the sample discussion and match each argument to its reason.',
          blocks: [
            { type: 'key', title: 'The negotiation question', points: ['Which of the consequences of the modern agricultural production system is the most serious? <b>a)</b> health problems <b>b)</b> environmental damage <b>c)</b> animal rights violations. Give examples from the regions you have researched.'] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the arguments and reasons below first. Can you predict any matches?' },
              { who: 'alone', text: 'Listen once and answer the three questions (ex. 3).' },
              { who: 'alone', text: 'Listen again and match the reasons (A–H) to the arguments (1–8). The arguments are in the same order as the recording.' }
            ]},
            { type: 'listening', source: 'DEC15 sample discussion', title: 'Negotiation — alternative ending (students don’t all agree)', videoId: '', clip: 'your teacher plays the recording', transcripts: [['negotiation-ending2', 'Transcript (open after you check)']] },
            { type: 'quiz', id: 'd2q', title: '3 · After the first listening', items: [
              { q: 'a) Do the students all agree at the beginning?', options: ['Yes', 'No'], answer: 'No', why: 'They have different opinions and argue for the three different options.' },
              { q: 'b) Do the students all agree at the end?', options: ['Yes', 'No'], answer: 'No', why: 'One speaker (Student 4) still argues that health is the biggest concern.' },
              { q: 'c) Does any speaker change their opinion?', options: ['Yes — the student arguing for animal rights accepts that the environment may be the most serious', 'No — everyone keeps the same opinion'], answer: 'Yes — the student arguing for animal rights accepts that the environment may be the most serious', why: '“Yeah, I suppose you have a point there… Maybe this is the most serious consequence.”' }
            ]},
            { type: 'sort', id: 'd2s', single: true, title: '2 · Match the reasons/explanations (A–H) to the arguments (1–8)', hint: '<b>Drag</b> each reason to its argument — or tap a reason, then tap an argument.', buckets: [
              { label: 'Environmental damage is the most pressing issue.', letter: '1' },
              { label: 'The direct impact on human health is the biggest worry.', letter: '2' },
              { label: 'Soil degradation leads to reduced fertility and affects the land’s ability to support agricultural crops.', letter: '3' },
              { label: 'There are ethical implications of industrial farming.', letter: '4' },
              { label: 'Animals are not always treated cruelly in industrial farming.', letter: '5' },
              { label: 'Environmental damage affects not just humans, but every living organism.', letter: '6' },
              { label: 'Health problems are immediate.', letter: '7' },
              { label: 'Violating animal rights is an ethical issue.', letter: '8' }
            ], items: [
              { text: 'A. In the Netherlands about 37 land-based animals are killed per person annually.', answer: 3 },
              { text: 'B. The speaker believes that they got really sick because of the chemicals used in the food they were eating.', answer: 1 },
              { text: 'C. Meat is murder.', answer: 7 },
              { text: 'D. It reduces land for farming and clean water and impacts biodiversity and climate change.', answer: 5 },
              { text: 'E. Agriculture contributes to soil degradation, deforestation, and pollution.', answer: 0 },
              { text: 'F. The speaker’s family owns a dairy farm, and they treat the cows very well. If they had to give the animals more space, it would be really bad for the business.', answer: 4 },
              { text: 'G. If we don’t prioritize human health, we can’t maintain a functioning society.', answer: 6 },
              { text: 'H. Up to 33% of the world’s soils are already degraded, and over 90% could become degraded by 2050 (UN Environment Programme).', answer: 2 }
            ]},
            { type: 'teacher', ref: 'w4d2-t10' }
          ]
        },
        {
          id: 'd3', short: 'Strong arguments', minutes: 15, grouping: 'Pairs or small groups',
          title: 'Making a strong argument',
          goal: 'Decide what makes an argument strong or weak — and how weak contributions could be improved.',
          blocks: [
            { type: 'talk', title: 'Activity 1 · Think about the arguments and reasons in the discussion', prompts: [
              'a) Which were the strongest arguments made?',
              'b) Why were some arguments less strong?',
              'c) Based on the ideas in this discussion, which option would <b>you</b> choose — health problems, environmental damage or animal rights violations? Why?'
            ]},
            { type: 'sort', id: 'd3s', title: 'Activity 2 · How can speakers make a strong argument in a discussion?', hint: '<b>Drag</b> each technique to “Do…” or “Don’t…”.', buckets: [
              { label: 'Do…' }, { label: 'Don’t…' }
            ], items: [
              { text: '1. Check that you have correctly understood the task/question.', answer: 0 },
              { text: '2. Be clear about the focus of the topic.', answer: 0 },
              { text: '3. Use emotional appeal as the main argument.', answer: 1 },
              { text: '4. Give relevant examples.', answer: 0 },
              { text: '5. Use a personal experience as a main reason without other support.', answer: 1 },
              { text: '6. Include support from credible sources.', answer: 0 },
              { text: '7. Mention reputable sources’ names.', answer: 0 },
              { text: '8. Provide statistics where possible.', answer: 0 },
              { text: '9. Ignore any issues or weak points in the evidence (from the source).', answer: 1 },
              { text: '10. Consider different perspectives.', answer: 0 },
              { text: '11. Make little jokes about other speakers’ ideas.', answer: 1 },
              { text: '12. Evaluate other speakers’ contributions.', answer: 0 },
              { text: '13. Ignore any counterargument that makes your argument look weaker.', answer: 1 },
              { text: '14. Dispute other speakers’ opinions as much as possible.', answer: 1 },
              { text: '15. Towards the end of the discussion, briefly repeat the main reason(s) for the opinion.', answer: 0 },
              { text: '16. Have one set opinion from the beginning and reject any change to this opinion.', answer: 1 },
              { text: '17. Be flexible in your opinion.', answer: 0 },
              { text: '18. After the discussion, try to learn more about the topic and stay updated.', answer: 0 }
            ]},
            { type: 'cards', title: 'Activity 3 · What exactly is the problem? How could each contribution be improved?', numbered: true, items: [
              { text: '<b>Student 1:</b> I really think environmental damage is the most pressing issue. The way agriculture contributes to soil degradation, deforestation, and pollution is such a big concern.<br><b>Student 4:</b> I don’t really agree with you there. I’m not sure that we should be so concerned about soil. Don’t you think that…' },
              { text: 'Don’t you think that as human beings, the direct impact on human health should be our biggest worry? The effect of chemicals and antibiotic-resistant bacteria are massive threats to our health. Last year, I got really sick, and I’m sure it was from the chemicals used in the food I was eating.' },
              { text: 'My family owns a dairy farm, and they treat the cows very well. If they had to give the animals more space, it would be really bad for the business.' },
              { text: 'Violating animal rights is an ethical issue. I mean, meat is murder! Shouldn’t ethics guide all our other decisions?' }
            ]},
            { type: 'fields', fields: [
              { id: 'd3-3', label: 'The problems and my improvements (1–4)', placeholder: '1) Student 4 ignores… 2) “I’m sure” → “I believe…”', rows: 4 }
            ]},
            { type: 'chat', title: 'Activity 4 · Did the other students respond appropriately? Why?', lines: [
              ['Student 4', 'I don’t really agree with you there. I’m not sure that we should be so concerned about soil. Don’t you think that as human beings, the direct impact on human health should be our biggest worry? …'],
              ['Student 1', 'Yes, I admit that those are big problems, but I think you’re being a bit dismissive. Soil degradation leads to reduced fertility and affects the land’s ability to support agricultural crops. According to the United Nations Environment Programme, up to 33% of the world’s soils are already degraded, and over 90% could become degraded by 2050. Besides, I’m not only talking about soil degradation. We can’t deny the negative impacts of polluting the water we need to drink and cutting down the trees that create the oxygen we need to breathe.'],
              ['Student 4', 'My family owns a dairy farm, and they treat the cows very well. If they had to give the animals more space, it would be really bad for the business.'],
              ['Student 5', 'But it sounds like that is a small-scale operation which does not accurately represent this global issue. In our research we learnt that in the Netherlands about 37 land-based animals are killed per person annually. That doesn’t even include seafood! Surely that must be the most serious consequence of agricultural production.']
            ]},
            { type: 'teacher', ref: 'w4d2-t11' }
          ],
          answers: { items: [
            ['Stronger vs weaker', '<img src="assets/week4/argument-strength.svg" alt="Stronger arguments use evidence, statistics from reputable sources and clear examples; weaker arguments rely on emotional appeal or overgeneralised personal experience.">'],
            ['1a · Strongest', 'Arguments supported by evidence or statistics from research (3–H, 4–A) and clear, effective examples (1–E, 6–D).'],
            ['1b · Less strong', 'Emotional appeal (8–C) or overgeneralised personal experience (2–B, 5–F). Personal experience is okay, but it should not be overgeneralised and should add to evidence.'],
            ['3 · Problems', '1) Student 4 ignores Student 1’s examples (deforestation, pollution) — listen and represent others fairly. 2) A personal example stated too strongly (“I’m sure…”) — hedge it (“I believe it was from…”) or add expert support (“my doctor told me…”). 3) An overgeneralised personal experience, not representative of a global problem; possible bias (the family business). 4) “Meat is murder” is overly emotional and could feel like an attack on groupmates.'],
            ['4 · Responses', '1) Yes: Student 1 acknowledges the point (“Yes, I admit…”), says Student 4 is being dismissive, then defends the argument with a statistic from a reputable source and a strong, undeniable comment (“We can’t deny…”). 2) Yes: Student 5 shows that the example does not represent the global issue and gives a statistic from their research.']
          ]}
        },
        {
          id: 'd4', short: 'Convincing argument', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 2: Phrases for presenting a convincing line of argument',
          goal: 'Sort phrases for using evidence, (re)asserting a position and encouraging others to agree — then use them.',
          blocks: [
            { type: 'figure', src: 'assets/week4/negotiation-map.svg', alt: 'A negotiation map: present your argument, respond to others, evaluate their contributions, and be flexible.', caption: 'The negotiation skills we practise today', size: 'wide' },
            { type: 'tip', text: 'You already know two ways to use evidence: <b>“According to (reputable source + relevant statistics)…”</b> and <b>“In our research we learnt that… Surely that must be the most serious consequence of…”</b>' },
            { type: 'sort', id: 'd4s', title: 'Match the phrases (A–N) to the functions', hint: 'Is each phrase used to present an argument <b>with evidence</b>, to <b>strongly (re)assert</b> a position, or to <b>encourage others to agree</b>?', buckets: [
              { label: 'Using evidence' }, { label: 'Strongly (re)asserting a position' }, { label: 'Encouraging others to agree with a position' }
            ], items: [
              { text: 'A) It’s clear that…', answer: 1 },
              { text: 'B) One study which was done in (X) showed that…', answer: 0 },
              { text: 'C) Shouldn’t…?', answer: 2 },
              { text: 'D) Don’t the (environmental) issues worry you?', answer: 2 },
              { text: 'E) Wouldn’t you agree that…?', answer: 2 },
              { text: 'F) The way (X) contributes to (Y) is such a big concern.', answer: 1 },
              { text: 'G) Well, the statistics show that…', answer: 0 },
              { text: 'H) Don’t you think (X) should be our biggest worry?', answer: 2 },
              { text: 'I) I have no doubt that…', answer: 1 },
              { text: 'J) I can say with great confidence that…', answer: 1 },
              { text: 'K) I’m sure…', answer: 1 },
              { text: 'L) I feel certain that…', answer: 1 },
              { text: 'M) We can’t deny…', answer: 1 },
              { text: 'N) I really think (X) is the most pressing issue.', answer: 1 }
            ]},
            { type: 'talk', prompts: ['What do you notice about the phrases for <b>encouraging others to agree</b>?'] },
            { type: 'steps', title: 'Practice: Which is better?', items: [
              { who: 'pair', text: 'Student A argues for the left option, Student B for the right. Discuss each pair for 1–2 minutes.' },
              { who: 'pair', text: 'Use phrases for <b>strongly (re)asserting a position</b> and <b>encouraging others to agree</b>. No research needed — no evidence this time.' }
            ]},
            { type: 'cards', items: [
              { label: 'A: Coffee', text: 'B: Tea' }, { label: 'A: Dogs', text: 'B: Cats' }, { label: 'A: Streaming movies', text: 'B: Going to the cinema' }
            ]},
            { type: 'teacher', ref: 'w4d2-t12' }
          ],
          answers: { items: [
            ['Using evidence', 'B, G'],
            ['Strongly (re)asserting', 'A, F, I, J, K, L, M, N'],
            ['Encouraging others to agree', 'C, D, E, H — all <b>negative questions</b>. We use them when we expect someone to agree with us, or to show we are surprised that they don’t.'],
            ['Remember', 'In the real discussion, these phrases help you assert your opinion convincingly — but a strong argument is also logical and supported by evidence.']
          ]}
        },
        {
          id: 'd5', short: 'Disagreeing', minutes: 10, grouping: 'Pairs',
          title: 'Negotiation language 2: Responding to others’ contributions: Disagreeing',
          goal: 'Disagree politely and challenge other speakers’ contributions.',
          blocks: [
            { type: 'talk', title: '1 · Discuss', prompts: ['a) What are the consequences if people always agree in academic discussions?', 'b) Why is it important to be polite when disagreeing with other researchers?'] },
            { type: 'sort', id: 'd5s', title: '2 · Which phrases are polite and appropriate for an academic discussion?', buckets: [
              { label: 'Polite and appropriate' }, { label: 'Impolite — avoid' }
            ], items: [
              { text: '1. I’m not sure I agree with that because…', answer: 0 },
              { text: '2. I will respectfully disagree with you on that point.', answer: 0 },
              { text: '3. Absolutely not! You’re wrong about that because…', answer: 1 },
              { text: '4. I’m afraid we don’t see eye to eye there.', answer: 0 },
              { text: '5. That’s a bit of a stupid idea.', answer: 1 },
              { text: '6. No way!', answer: 1 },
              { text: '7. I don’t know if that’s entirely true.', answer: 0 },
              { text: '8. Are you serious?', answer: 1 }
            ]},
            { type: 'tip', text: 'Say the polite phrases aloud with a calm, friendly intonation. Then try an impolite one — hear the difference?' },
            { type: 'cloze', id: 'd5c', title: '3 · Complete the phrases from the recording', list: true, options: ['agree', 'argue', 'should', 'sorry', 'sure'],
              text: 'I don’t really {{1}} with you there.\nI’m {{2}} but I just don’t agree with that. I still {{3}} that…\nI’m not {{4}} that we {{5}} be so concerned about (X).',
              answers: ['agree', 'sorry', 'argue', 'sure', 'should'] },
            { type: 'teacher', ref: 'w4d2-t13' }
          ],
          answers: { items: [
            ['1a', 'A lack of critical thinking and engagement, suppressed innovation, limited perspective, ineffective problem solving.'],
            ['1b', 'Rude disagreement shows you are not open to other perspectives, and the other speaker may be afraid to share their opinions again.'],
            ['Language bank', '<b>Disagreeing politely:</b> I don’t really agree with you there. · I’m sorry but I just don’t agree with that. I still argue that… · I’m not sure I agree with that because… · I will respectfully disagree with you on that point. · I’m afraid we don’t see eye to eye there.<br><b>Challenging others’ contributions:</b> I’m not sure that we should be so concerned about (X). · I don’t know if that’s entirely true.']
          ]}
        },
        {
          id: 'd6', short: 'Paraphrasing', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 2: Responding to others’ contributions: Paraphrasing',
          goal: 'Paraphrase another speaker’s idea, then add a counterargument or a different perspective.',
          blocks: [
            { type: 'chat', title: '1 · An example from a previous lesson', lines: [
              ['Student 5', 'While regulations are in place, the reality of industrial farming often falls short of these ideals.'],
              ['Student 1', '<mark>That’s right. It can be difficult to monitor whether the factory farms are always following the rules.</mark>']
            ]},
            { type: 'chat', title: '2 · Another extract — how does each speaker paraphrase the previous idea?', lines: [
              ['Student 1', 'Hmmmm… I’m not sure either of you is considering the broader picture. Environmental damage affects not just us but every living organism. If we continue like this, we’ll have no viable land for farming, nor clean water. It impacts biodiversity, climate change—everything!'],
              ['Student 4', '<mark>That’s true, environmental issues are significant,</mark> but health problems are immediate. Look at the health care costs and the impact on life expectancy. If we don’t prioritize human health, we can’t maintain a functioning society.'],
              ['Student 5', '<mark>I understand that human-centric problems are important because they affect us,</mark> but violating animal rights is an ethical issue. I mean, meat is murder! Shouldn’t ethics guide all our other decisions?'],
              ['Student 1', '<mark>You’re right. Ethics are important,</mark> but without a healthy environment, there won’t be any animals to protect, or humans to keep healthy! It’s all interconnected, but the root starts with our environment.']
            ]},
            { type: 'talk', prompts: ['a) Look at the highlighted sections. How does each speaker paraphrase the previous speaker’s idea?', 'b) Does each speaker generally agree or disagree with the previous speaker? How do they do this?'] },
            { type: 'order', id: 'd6o1', title: '3a · Put the words in order', items: ['I', 'can', 'agree', 'with', 'you', 'that…,', 'however…'] },
            { type: 'order', id: 'd6o2', title: '3b · Put the words in order', items: ['You’re', 'right', 'about…,', 'though', 'I’d', 'argue', 'that…'] },
            { type: 'order', id: 'd6o3', title: '3c · Put the words in order', items: ['I', 'agree', 'with', 'your', 'point', 'about…,', 'but', 'we', 'also', 'need', 'to', 'look', 'at…'] },
            { type: 'steps', title: 'Practice: Which is better?', items: [
              { who: 'pair', text: 'Student A argues for the left option, Student B for the right. Discuss each pair for 1–2 minutes.' },
              { who: 'pair', text: 'Use phrases for <b>disagreeing politely</b>, <b>challenging others’ contributions</b> and <b>paraphrasing + presenting an opposing opinion</b>.' }
            ]},
            { type: 'cards', items: [
              { label: 'A: Books', text: 'B: Magazines' }, { label: 'A: Summer', text: 'B: Winter' }, { label: 'A: City life', text: 'B: Country life' }
            ]},
            { type: 'language', title: 'Paraphrasing others’ contributions and presenting an opposing opinion or different perspective', tabs: false, groups: [
              { label: 'From the recording', phrases: ['That’s true, (environmental) issues are significant, but…', 'I understand that (paraphrase), but (opposing position)…', 'You’re right. (Ethics) are important, but…'] },
              { label: 'Other phrases', phrases: ['I can agree with you that (paraphrase)…, however…', 'You’re right about (paraphrase)…, though I’d argue that…', 'I agree with your point about (paraphrase)…, but we also need to look at…'] }
            ]},
            { type: 'teacher', ref: 'w4d2-t14' }
          ],
          answers: { items: [
            ['2a · Paraphrases', '“Environmental damage affects not just us but every living organism” → “environmental issues are significant” · “If we don’t prioritize human health, we can’t maintain a functioning society” → “human-centric problems are important because they affect us” · “violating animal rights is an ethical issue… Shouldn’t ethics guide all our other decisions?” → “Ethics are important”.'],
            ['2b', 'They acknowledge the comment (That’s true / I understand that… / You’re right), then add <b>but</b> and a counterargument or a different perspective.']
          ]}
        },
        {
          id: 'd7', short: 'Evaluation', minutes: 5, grouping: 'Alone → pair',
          title: 'Negotiation language 2: Responding to others’ contributions: Evaluation',
          goal: 'Match phrases to the evaluation they present — and find phrases for new situations.',
          blocks: [
            { type: 'sort', id: 'd7s', single: true, title: 'Match the phrases (1–5) to the evaluation they present (A–E)', hint: 'Why would you use each phrase in a discussion?', buckets: [
              { label: 'The other speaker’s evidence/example is overgeneralised.', letter: 'A' },
              { label: 'The other speaker has presented a specific example that does not match the wide scope of the issue.', letter: 'B' },
              { label: 'The other speaker has presented good arguments, but they have minimised or overlooked your contributions.', letter: 'C' },
              { label: 'The other speakers’ arguments about the issue are too narrow in scope.', letter: 'D' },
              { label: 'The other speakers have presented good arguments, but they have not considered a certain perspective.', letter: 'E' }
            ], items: [
              { text: '1. Yes, I admit that those are big problems, but I think you’re being a bit dismissive.', answer: 2 },
              { text: '2. Both of you have valid points, but we’re completely ignoring the (ethical) implications here.', answer: 4 },
              { text: '3. That’s not always the case though.', answer: 0 },
              { text: '4. But it sounds like that is a small-scale operation which does not accurately represent this global issue.', answer: 1 },
              { text: '5. Hmmmm… I’m not sure either of you is considering the broader picture.', answer: 3 }
            ]},
            { type: 'fields', title: 'Add one more phrase to each category (A–E)', fields: [
              { id: 'd7-1', label: 'My extra phrases A–E', placeholder: 'A) That’s an interesting example, but…', rows: 4 }
            ]},
            { type: 'fields', title: '3 · What would you say in these situations?', fields: [
              { id: 'd7-a', label: 'a. Another speaker makes a strong point.', rows: 1 },
              { id: 'd7-b', label: 'b. Another speaker’s point/example is irrelevant.', rows: 1 },
              { id: 'd7-c', label: 'c. Another speaker’s example is outdated.', rows: 1 },
              { id: 'd7-d', label: 'd. Another speaker has misunderstood evidence (the text).', rows: 1 },
              { id: 'd7-e', label: 'e. Another speaker has not provided enough evidence to support their claim.', rows: 1 }
            ]},
            { type: 'teacher', ref: 'w4d2-t15' }
          ],
          answers: { items: [
            ['More phrases A–E', 'A) That’s an interesting example, but I think that’s a bit of an overgeneralisation. · B) Yes, but we’re talking about a lot more than just… · C) I see what you mean, but I think my point/example about… is also relevant. · D) I feel like we need to consider the long-term implications of… · E) That’s true, but let’s not overlook the (X) perspective here.'],
            ['a', 'Hmmm… That’s a really good/interesting insight/example! · Wow! That’s an interesting observation.'],
            ['b', 'I’m not sure that’s really related to this issue. · I don’t really see the connection to what we’re discussing here.'],
            ['c', 'I think the situation/figures might have changed since then. · It sounds like that example is a little outdated.'],
            ['d', 'I think when they say… the author means… · I think you might have misinterpreted the data/the author’s point.'],
            ['e', 'Do you know if there are any statistics to support that? · That’s interesting. Have you heard of any research into that?']
          ]}
        },
        {
          id: 'd8', short: 'Flexibility', minutes: 10, grouping: 'Pairs',
          title: 'Negotiation language 2: Responding to others’ contributions: Flexibility',
          goal: 'Learn phrases to revise your opinion — and practise evaluating and being flexible.',
          blocks: [
            { type: 'talk', title: '1 · Consider', prompts: ['After hearing other speakers’ comments, you might start to change your position. Is this okay? Why / why not?'] },
            { type: 'sort', id: 'd8s', title: '2 · Which phrases can be used to revise an opinion?', buckets: [
              { label: 'Revising an opinion (flexibility)' }, { label: 'Not revising an opinion' }
            ], items: [
              { text: 'a) I guess you’re right. Those issues can’t be ignored, and they’re actually…', answer: 0 },
              { text: 'b) Do you think it’s okay if we don’t reach an agreement?', answer: 1 },
              { text: 'c) Yeah, I suppose you have a point there… Maybe this is the most serious consequence…', answer: 0 },
              { text: 'd) Yeah, but look at… If we don’t… we can’t maintain…', answer: 1 },
              { text: 'e) Oh yeah… I hadn’t considered that.', answer: 0 },
              { text: 'f) Yes, I see your point, but I still…', answer: 1 },
              { text: 'g) I understand your view, but it doesn’t take into account…', answer: 1 },
              { text: 'h) Hmmmm… You do make a very strong case. Perhaps that is the best option.', answer: 0 }
            ]},
            { type: 'steps', title: 'Practice: Which is better?', items: [
              { who: 'pair', text: 'Student A argues for the left option, Student B for the right. Discuss each pair for 1–2 minutes.' },
              { who: 'pair', text: 'Focus on <b>evaluating each other’s contributions</b> — and try to be <b>flexible</b> at the end of each pair.' }
            ]},
            { type: 'cards', items: [
              { label: 'A: Online classes', text: 'B: Face-to-face classes' }, { label: 'A: Morning', text: 'B: Night' }, { label: 'A: Rock music', text: 'B: Pop music' }
            ]},
            { type: 'language', title: 'Negotiation language 2 · the full list', groups: [
              { label: 'Using evidence', phrases: ['According to (reputable source + relevant statistics)…', 'In our research we learnt that… Surely that must be the most serious consequence of…', 'Well, the statistics show that…', 'One study which was done in (X) showed that…'] },
              { label: 'Strongly (re)asserting', phrases: ['It’s clear that…', 'I really think (X) is the most pressing issue.', 'The way (X) contributes to (Y) is such a big concern.', 'I’m sure…', 'We can’t deny…', 'I have no doubt that…', 'I can say with great confidence that…', 'I feel certain that…'] },
              { label: 'Encouraging agreement', phrases: ['Don’t you think (X) should be our biggest worry?', 'Shouldn’t…?', 'Wouldn’t you agree that…?', 'Don’t the (environmental) issues worry you?'] },
              { label: 'Disagreeing & challenging', phrases: ['I don’t really agree with you there.', 'I’m sorry but I just don’t agree with that. I still argue that…', 'I’m not sure I agree with that because…', 'I will respectfully disagree with you on that point.', 'I’m afraid we don’t see eye to eye there.', 'I’m not sure that we should be so concerned about (X).', 'I don’t know if that’s entirely true.'] },
              { label: 'Paraphrasing + opposing', phrases: ['That’s true, (environmental) issues are significant, but…', 'I understand that (paraphrase), but…', 'You’re right. (Ethics) are important, but…', 'I can agree with you that…, however…', 'You’re right about…, though I’d argue that…', 'I agree with your point about…, but we also need to look at…'] },
              { label: 'Evaluating', phrases: ['Yes, I admit that those are big problems, but I think you’re being a bit dismissive.', 'Both of you have valid points, but we’re completely ignoring the (ethical) implications here.', 'That’s not always the case though.', 'But it sounds like that is a small-scale operation which does not accurately represent this global issue.', 'Hmmmm… I’m not sure either of you is considering the broader picture.', 'I see what you mean, but I think my point/example about… is also relevant.', 'That’s true, but let’s not overlook the (X) perspective here.', 'Do you know if there are any statistics to support that?'] },
              { label: 'Showing flexibility', phrases: ['I guess you’re right. Those issues can’t be ignored, and they’re actually…', 'Yeah, I suppose you have a point there… Maybe this is the most serious consequence…', 'Oh yeah… I hadn’t considered that.', 'Hmmmm… You do make a very strong case. Perhaps that is the best option.'] }
            ]},
            { type: 'teacher', ref: 'w4d2-t16' }
          ],
          answers: { items: [
            ['1', 'Yes — it’s totally fine. If others present strong arguments, it is normal to consider new insights and revise your opinion. This flexibility is an important part of critical thinking.'],
            ['2', 'Revising an opinion: a, c, e, h.']
          ]}
        },
        {
          id: 'd9', short: 'Groupwork check-in', minutes: 5, grouping: 'Research groups',
          title: 'Self-regulation and monitoring (groupwork): Action plan for further improvement',
          goal: 'Look back at your groupwork action plan from the first Research Summary Discussion.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open the Research Summary Discussion self-reflection you completed after your <b>first</b> discussion (Weeks 1–2).' },
              { who: 'alone', text: 'Read the strategies in the <b>Groupwork</b> section of your Action plan for further improvement.' },
              { who: 'group', text: 'Discuss the three questions with your group.' }
            ]},
            { type: 'talk', prompts: ['a) What worked well last time?', 'b) What issues did you encounter last time?', 'c) How can you work together more efficiently with your group?'] },
            { type: 'fields', fields: [
              { id: 'd9-1', label: 'Our strategies for this time', placeholder: 'We will… / We won’t…', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w4d2-t17' }
          ]
        },
        {
          id: 'd10', short: 'Plan the presentation', minutes: 15, grouping: 'Research groups',
          title: 'Preparing the Summary Presentation',
          goal: 'Organise your group’s ideas and agree on a final comment for your 5-minute presentation.',
          blocks: [
            { type: 'figure', src: 'assets/week4/rsd-steps.svg', alt: 'The five steps of the Research Summary Discussion: 1 find a source, 2 summarise your source to your group, 3 prepare a group presentation, 4 present to a new group, 5 discuss for 15 minutes.', caption: 'You are still on Step 3: a presentation that brings in all three sources', size: 'wide' },
            { type: 'talk', prompts: ['a) How could you best organise your group’s ideas?', 'b) What would be a suitable final comment to add?'] },
            { type: 'table', id: 'd10t', title: 'Our presentation plan', columns: ['Part', 'What we will say (which article? key points and examples)', 'Who?'], fixed: ['Introduction', '1st theme', '2nd theme', '3rd theme', '4th theme <small>(optional)</small>', 'Final comment'] },
            { type: 'tip', text: 'Press <b>Write together</b> to plan on one shared page. Then take notes <b>by hand</b> too — you will use handwritten notes (or a version of them) in the final discussion.' },
            { type: 'language', title: 'Phrases for preparing a presentation', groups: [
              { label: 'Identifying common themes', phrases: ['Did your article mention…?', 'It seems that all of our articles focus on…', 'All of our articles seemed to suggest that…', 'All of our articles described…', 'And did your articles mention…? — Yes, mine did. My article referred to…', 'That seems to be an important recurring theme.', 'In my article the authors say that…', 'My article explains that…', 'In my article they mentioned something similar… They also discussed the…', 'So another common theme we can see is that…', 'All our articles also mentioned that…'] },
              { label: 'Choosing what to include', phrases: ['I think that’s a really important point.', 'I don’t think we need to mention… because…', 'Why don’t we try to find what common themes we found in our research?', 'And we should also try to find any important points and relevant examples that are unique to our individual articles.', 'That’s a good point.', 'In this week’s discussion we need to focus more on… rather than…', 'We should mention…, but we also need to focus on the information which is specific to our area.', 'So what were the issues that were specific to…?', 'I think that’s important for us to mention it as…'] },
              { label: 'Organising ideas', phrases: ['So which cause should we mention first?', 'Let’s include that example when we talk about…', 'How do you think we should present the information from our different articles?', 'I think we’ll need to organize it a little bit more clearly than that.', 'Should we talk about that issue first in our summary?', 'We should bring that up when we discuss…', 'How can we put this all together in our summary to the other groups?', 'Why don’t we discuss the… issues first, then we can talk about…'] }
            ]},
            { type: 'teacher', ref: 'w4d2-t18' }
          ]
        },
        {
          id: 'd11', short: 'Self-reflection', minutes: 5, grouping: 'Alone',
          title: 'Self-reflection',
          goal: 'Reflect on your groupwork (Section 3 of your self-reflection form).',
          blocks: [
            { type: 'tip', text: 'This is the <b>Week 3–4</b> part of your Research Summary Discussion self-reflection. Sections 1 (Conducting research) and 2 (Summarising research) are done. Today: Section 3 — <b>Groupwork</b>. You can finish it at home.' },
            { type: 'form', id: 'd11f', title: 'Self-reflection · Groupwork', intro: 'Choose Yes, Mostly or Needs work, then add a comment and an action.', cols: ['Comments', 'Action plan for further improvement'], sections: [
              { label: 'Groupwork', hint: 'Week 4', items: [
                'Could your group easily find common themes in your different articles and establish the main points?',
                'Did your group collaborate well together to make a plan for the organisation of your summary?',
                'Did your group communicate clearly and work together to overcome any obstacles?',
                'Do you think you provided a supportive environment in the group for sharing ideas?'
              ]}
            ], send: true, sendLabel: 'Share your reflection (optional)', sendHint: 'You can send a copy to your teacher or a groupmate — only they will see it.' },
            { type: 'model', title: 'An example comment and action (question 3)', rows: [
              ['Comment', 'We didn’t really have any issues with communication, but I sent my groupmate an email, and he never replied.'],
              ['Action plan', 'Choose a method of communication and set expectations early in the task.']
            ]},
            { type: 'key', tone: 'warn', title: 'Reminder', points: ['On the day of the Research Summary Discussion (Thursday), bring your <b>laptop or tablet</b> and your <b>headphones</b>. You need them to complete the task.'] },
            { type: 'teacher', ref: 'w4d2-t19' }
          ]
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'More implications', minutes: 15, grouping: 'Alone', category: 'Extra writing',
      title: 'Discuss the implications of upcycled food',
      goal: 'Write 3–4 sentences about what Huang et al. (2024) means for one more group.',
      blocks: [
        { type: 'sources', ids: ['huang'] },
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'Choose a group (supermarkets, farmers, schools, governments…). What could the results mean for them? Use hedging and/or advice.', placeholder: 'These results suggest that supermarkets might… They should therefore consider…', rows: 5 }
        ]}
      ]
    },
    {
      id: 'x2', short: 'Re-read the ending', minutes: 10, grouping: 'Alone', category: 'Extra listening',
      title: 'Read the alternative ending again',
      goal: 'Find one phrase for each negotiation function in the transcript.',
      blocks: [
        { type: 'sources', ids: ['negotiation-ending2'] },
        { type: 'table', id: 'x2t', columns: ['Function', 'Phrase from the transcript'], fixed: ['Strongly (re)asserting', 'Encouraging others to agree', 'Disagreeing politely', 'Paraphrasing + opposing', 'Evaluating', 'Showing flexibility'] }
      ]
    }
  ],

  glossary: [
    ['upcycled food', 'Food made from ingredients that would otherwise be thrown away.', 'Cookies made from brewer’s grain are upcycled food.'],
    ['empirical study', 'Research in which people collect and analyse data.', 'Huang et al. (2024) is an empirical study.'],
    ['non-conventional', 'Unusual; not normal.', 'Upcycled food uses non-conventional food materials.'],
    ['nutritional value', 'How healthy a particular kind of food is for you.', 'Upcycled products keep their nutritional value.'],
    ['green value', 'How good something is for the environment.', 'Green value had little effect on green actions.'],
    ['novelty', 'Something new or unusual.', 'Product novelty was not important to consumers.'],
    ['ethical consumption', 'Choosing to buy products that don’t cause harm.', 'Ethical consumption encourages green actions.'],
    ['credibility', 'Being believable or trustworthy.', 'Working with nutritionists could build credibility.'],
    ['certification', 'An official document that gives proof and details of something.', 'Show ethical certifications on the packaging.'],
    ['transparency', 'Being open and truthful.', 'Transparency in the supply chain builds trust.'],
    ['uptake', 'The rate of using something new.', 'Practical benefits may increase uptake.'],
    ['implication', 'What a result means, how it can be used, or who it could affect.', 'The implications for businesses are clear.'],
    ['synthesise', 'Bring ideas from different sources together.', 'Synthesise the three texts in one paragraph.'],
    ['actor', 'A person, group or organisation that has a role in a system.', 'Businesses, governments and consumers are actors.'],
    ['negotiation', 'Discussing an issue and trying to reach an agreement.', 'The second part of the task is a negotiation.'],
    ['emotional appeal', 'Trying to persuade with feelings rather than evidence.', '“Meat is murder” is an emotional appeal.'],
    ['overgeneralise', 'Say something is true in general from too few examples.', 'Don’t overgeneralise your personal experience.'],
    ['reputable source', 'A source that people trust, e.g. the UN.', 'Mention a reputable source’s name.'],
    ['negative question', 'A question with not, used when we expect agreement.', 'Wouldn’t you agree that…?'],
    ['dismissive', 'Not giving an idea the attention it deserves.', 'I think you’re being a bit dismissive.'],
    ['counterargument', 'An argument against another argument.', 'Paraphrase, then add a counterargument.'],
    ['flexibility', 'Being willing to change your opinion.', 'Flexibility is part of critical thinking.']
  ]
};
