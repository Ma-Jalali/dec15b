/* DEC15 · Week 4, Day 2 — lesson content (v2: easier language, fewer tabs, more games).
   Teacher’s Book: W4 D2 · 4A Mediation + Academic writing skills 1 (120) · 5A Discussion skills 1 (120).
   Texts: Huang et al. (2024) upcycled food · Gunders (2024) · Castro et al. (2023) · Negotiation ending 2 sample
   — lessons/week4/sources.js. Related Teacher’s Book activities are merged into one tab; each TB heading
   is the title of the first block of its part ('Part 1 · …'). Block, field and table ids are unchanged.
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
  journey: 'First, read about upcycled food and put three texts together: who should reduce food waste — businesses, governments or consumers? You learn how researchers talk about results, and you write a paragraph. Then you practise making strong arguments with negotiation language, and you keep planning your group presentation.',
  finish: { title: 'Wednesday', text: 'Evaluating options, flexibility and taking a stance' },

  sections: [
    /* ───────────────────────── 4A Mediation + Academic writing skills 1 ───────────────────────── */
    {
      id: 'mediate', number: '01', code: '4A', minutes: 120,
      tone: 'blue', art: 'reading',
      title: 'Mediation + Academic writing skills 1',
      subtitle: 'Upcycled food · Huang et al. (2024) — and three texts together',
      outcome: 'Read and take notes, bring ideas from three texts together, find language for results and implications, and write a careful paragraph with words like may and could.',
      activities: [
        {
          id: 'm1', short: 'Recap + words', minutes: 25, grouping: 'Pairs → class',
          title: 'Recap + Academic Skills: Explaining results + Vocabulary',
          goal: 'Remember yesterday’s tips. Learn how sure researchers are. Learn nine new words.',
          blocks: [
            { type: 'talk', title: 'Part 1 · Recap: yesterday’s listening', prompts: ['Gunders (2024) gave <b>five tips</b> to waste less food at home. How many can you remember?'] },
            { type: 'flip', title: 'The five tips — say them first, then turn the cards', items: [
              { front: 'Tip 1', back: 'Make a plan before you go shopping. Don’t buy too much.' },
              { front: 'Tip 2', back: 'Love your leftovers.' },
              { front: 'Tip 3', back: 'Freeze your food.' },
              { front: 'Tip 4', back: 'Use it up. Shop your fridge before you buy more.' },
              { front: 'Tip 5', back: 'Learn your labels.' }
            ]},
            { type: 'cards', title: 'The four people from yesterday', items: [
              { label: 'Person A', text: 'Loves to cook, but forgets what he has. He doesn’t plan, so he buys food he already has. He throws food away and often orders takeaway.' },
              { label: 'Person B', text: 'Writes a shopping list, but buys too much. She cooks too much and can’t eat it all in time.' },
              { label: 'Person C', text: 'Doesn’t like cooking. Planning takes too long. Labels confuse him, so he mostly eats unhealthy takeaway.' },
              { label: 'Person D', text: 'Wants to spend less on food. She wants her housemates to buy big packs, share, and see if it saves money.' }
            ]},
            { type: 'table', id: 'm1t', title: 'Which tips could help each person? Why?', columns: ['Person', 'Useful tip(s) from Gunders (2024)', 'Could an app help them use the tip?'], fixed: ['Person A', 'Person B', 'Person C', 'Person D'] },
            { type: 'teacher', ref: 'w4d2-t1' },
            { type: 'key', title: 'Part 2 · Academic Skills: Explaining results', points: [
              'Today’s text is an <b>empirical study</b> (= the researchers collect data and study it).',
              'A result can have more than one explanation. So researchers are careful.',
              'The <b>verb</b> shows how sure they are. Remember the <b>hedging verbs</b> from Week 1.'
            ]},
            { type: 'sort', id: 'm2s', title: 'Sure or not sure?', hint: 'Look at the verbs in <b>bold</b>. Drag each phrase to a box.', buckets: [
              { label: 'Certain (sure)' }, { label: 'Uncertain (not sure)' }
            ], items: [
              { text: 'The results <b>show</b> (that)…', answer: 0 },
              { text: 'The results <b>suggest</b> (that)…', answer: 1 },
              { text: 'The results <b>mean</b> (that)…', answer: 0 },
              { text: 'The results <b>indicate</b> (that)…', answer: 1 }
            ]},
            { type: 'key', title: 'Even less sure: add a modal', compare: [
              { label: 'may · might · could', text: 'Put a modal verb before the main verb.', eg: 'The results <b>could indicate</b> that… · The results <b>may suggest</b> that…' }
            ]},
            { type: 'tip', text: 'When you read today, look for these verbs. When are the authors more sure? When are they less sure?' },
            { type: 'teacher', ref: 'w4d2-t2' },
            { type: 'flip', title: 'Part 3 · Vocabulary: words from the reading', hint: 'Guess the meaning. Then turn the card.', items: [
              { front: 'non-conventional', back: 'Unusual; not normal.' },
              { front: 'nutritional value', back: 'How healthy a food is for you.' },
              { front: 'green value', back: 'How good something is for the environment.' },
              { front: 'novelty', back: 'Something new or unusual.' },
              { front: 'ethical consumption', back: 'Buying products that don’t cause harm.' },
              { front: 'credibility', back: 'Being believable; people trust you.' },
              { front: 'certifications', back: 'Official papers that prove something.' },
              { front: 'transparency', back: 'Being open and honest.' },
              { front: 'uptake', back: 'How many people start to use something new.' }
            ]},
            { type: 'cloze', id: 'm3c', title: 'Complete the sentences with words from the cards', list: true, options: ['certifications', 'credibility', 'ethical consumption', 'green value', 'non-conventional', 'novelty', 'nutritional value', 'transparency', 'uptake'],
              text: 'Upcycled foods use {{1}} food materials to create new products with a high {{2}}.\nUpcycled foods are good for the environment, so they are a good choice for consumers who value {{3}}.\nIt is important for ethical food manufacturers to have {{4}} and {{5}} in their supply chains, so consumers can trust them.\nIncreasing {{6}} of upcycled foods can help to reduce food waste.',
              answers: ['non-conventional', 'nutritional value', 'ethical consumption', 'credibility', 'transparency', 'uptake'] },
            { type: 'teacher', ref: 'w4d2-t3' }
          ],
          answers: { title: 'Possible answers', items: [
            ['Recap · Person A', 'Tip 1 (plan before shopping) and Tip 4 (shop your fridge first). A smart inventory app reminds him what he already has.'],
            ['Recap · Person B', 'Tip 2 (love your leftovers) and Tip 3 (freeze your food). Smart recipes help with portion sizes; a food-sharing hub can share the extra food.'],
            ['Recap · Person C', 'Tip 5 (learn your labels — use your senses) and Tip 1 (a simple meal plan). A smart inventory app can explain labels; recipe apps make planning faster.'],
            ['Recap · Person D', 'Tip 1 (plan together) and Tip 4 (use it up). A food-sharing hub and an inventory that tracks spending.'],
            ['Explaining results · Certainty meter', '<img src="assets/week4/certainty-verbs.svg" alt="A certainty meter: results show / mean (certain), results suggest / indicate (less certain), results may suggest / might indicate / could indicate (least certain).">']
          ]}
        },
        {
          id: 'm4', short: 'Read', minutes: 30, grouping: 'Alone → pair',
          title: 'Reading for gist + Reading for detail: Note-taking',
          goal: 'Find out what upcycled food is. Then read the whole text and take notes.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Reading for gist: look at the picture story', numbered: true, items: [
              { label: 'Beer making', text: 'Brewers use grain to make beer.' },
              { label: 'Left-over grain', text: 'After brewing, a lot of grain is left.' },
              { label: 'Flour', text: 'The grain is dried and made into flour.' },
              { label: 'Cookies', text: 'The flour is used to bake cookies and cakes.' }
            ]},
            { type: 'talk', prompts: ['What do you think <b>upcycled food</b> is?', 'Do you know any foods with upcycled ingredients?'] },
            { type: 'passage', id: 'm4p', title: 'Read the section from the text (paragraph B)', text: 'Upcycled food uses non-conventional food materials in a way that is good for the environment and can be traced back to its source (Upcycled Food Association 2023). For example, grains left over from making beer can be turned into flour. This flour can then be used to make cakes, cookies, and other products. Consumers are realizing that using upcycled ingredients can reduce food waste and help the environment. Studies have shown that upcycled food products keep their nutritional value and help reduce waste, supporting both health and environmental sustainability (Thorsen et al., 2022; Grasso et al. 2021).' },
            { type: 'quiz', id: 'm4q', items: [
              { q: '1. What is upcycled food?', options: ['Food from unusual materials that is good for the environment and can be traced to its source', 'Food sold cheaply before its expiry date', 'Food grown without chemicals'], answer: 'Food from unusual materials that is good for the environment and can be traced to its source', why: 'The first sentence gives the definition (Upcycled Food Association, 2023).' },
              { q: '2. What example does the text give?', options: ['Cookies made from grain used to make beer', 'Juice made from old fruit', 'Bread made from recycled packaging'], answer: 'Cookies made from grain used to make beer', why: 'Grain left over from beer → flour → cakes and cookies.' },
              { q: '3. What are some benefits of upcycled food?', options: ['It is healthy and good for the environment.', 'It is cheaper and tastes better.', 'It lasts longer in the fridge.'], answer: 'It is healthy and good for the environment.', why: 'It keeps its nutritional value and helps reduce waste (Thorsen et al., 2022; Grasso et al., 2021).' }
            ]},
            { type: 'teacher', ref: 'w4d2-t4' },
            { type: 'steps', title: 'Part 2 · Reading for detail: Note-taking', items: [
              { who: 'alone', text: 'Read Huang et al. (2024), paragraphs A–F.' },
              { who: 'alone', text: 'Write notes in the table. Use short phrases in <b>your own words</b>.' },
              { who: 'pair', text: 'Compare notes with a partner. Add what you missed.' }
            ]},
            { type: 'tip', text: '<b>Key words:</b> VAB model = Value → Attitude → Behaviour (what people value → what they think → what they do) · intention = a plan to do something · factor = something that has an effect.' },
            { type: 'sources', ids: ['huang'] },
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
            ['Notes · The problem', 'Food waste: about ⅓ of food is wasted · 8–10% of greenhouse gases. <b>Possible solution:</b> upcycled food.'],
            ['Notes · Upcycled food', 'Uses unusual ingredients, often from waste products · e.g. cookies from grain used in beer making · less waste, good for the environment and health.'],
            ['Notes · VAB model', '<img src="assets/week4/vab-model.svg" alt="The Value–Attitude–Behaviour model: health values lead to attitude towards upcycled foods, which leads to green behavioural intentions; green perceived value, product novelty and moral consumption also point to green behavioural intentions."><br>4 factors: health · green value · novelty · ethical consumption.'],
            ['Notes · Results', 'Consumers value <b>health</b> → businesses should advertise the health benefits. <b>Ethical consumption</b> is important → show ethical certification on products.'],
            ['Notes · Unexpected result', 'Novelty and green value were not important. Consumers may care more about practical use and cost → advertise practical benefits, including cost.'],
            ['Notes · Summary', 'Showing practical benefits may increase uptake. Even if consumers don’t care much, upcycled food still helps the environment.']
          ]}
        },
        {
          id: 'm6', short: 'Three texts', minutes: 35, grouping: 'Alone → pair',
          title: 'Building understanding across texts + Synthesizing',
          goal: 'Compare three texts. Then say in one minute who should reduce food waste.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Building understanding across texts', items: [
              { who: 'alone', text: 'You need three texts: Gunders (2024), Castro et al. (2023) and Huang et al. (2024).' },
              { who: 'alone', text: 'Do tasks 1–5. Look back at the texts and your notes.' },
              { who: 'pair', text: 'Check with a partner.' }
            ]},
            { type: 'sources', ids: ['gunders', 'castro', 'huang'] },
            { type: 'grid', id: 'm6g1', title: '1 · Which texts say that reducing food waste is important for the U.N. Sustainable Development Goals?', rows: ['Castro et al. (2023)', 'Gunders (2024)', 'Huang et al. (2024)'], columns: ['Mentions the U.N. goals?'], options: ['Yes', 'No'],
              answers: [['No'], ['Yes'], ['Yes']] },
            { type: 'tip', text: 'Task 2 is a <b>synthesised</b> summary (= ideas from different texts brought together in one paragraph).' },
            { type: 'cloze', id: 'm6c', title: '2 · Complete the synthesised summary', options: ['consumers', 'environmental impacts', 'Gunders (2024)', 'new technologies', 'these foods', 'upcycled foods'],
              text: '{{1}} argues that reducing food waste will aid progress toward achieving the U.N. Sustainable Development Goal to cut food loss and waste in half by 2030; however, this will require the rapid uptake of {{2}}. Huang et al. (2024) suggests that {{3}} could be one such technology that has the potential to reduce the {{4}} of food waste. Encouraging {{5}} to eat more of {{6}} could therefore help with achieving the U.N. goal.',
              answers: ['Gunders (2024)', 'new technologies', 'upcycled foods', 'environmental impacts', 'consumers', 'these foods'] },
            { type: 'figure', src: 'assets/week4/three-actors.svg', alt: 'Three actors in the food system: businesses, governments and consumers.', caption: 'Three actors (= groups with a role) in the food waste cycle' },
            { type: 'grid', id: 'm6g2', title: '3 · Which actors does each text mention? (Y = yes, N = no)', rows: ['Castro et al. (2023)', 'Gunders (2024)', 'Huang et al. (2024)'], columns: ['Businesses', 'Governments', 'Consumers'], options: ['Y', 'N'],
              answers: [['Y', 'N', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'N', 'Y']] },
            { type: 'tip', text: 'Food apps count as <b>businesses</b> here.' },
            { type: 'table', id: 'm6t', title: 'How can each actor add to food waste — or reduce it?', columns: ['Text', 'Businesses', 'Governments', 'Consumers'], fixed: ['Castro et al. (2023)', 'Gunders (2024)', 'Huang et al. (2024)'] },
            { type: 'sort', id: 'm6s', single: true, title: '4 · What is the main focus of each text?', hint: '<b>Drag</b> each text to its main focus — or tap a text, then tap a focus.', buckets: [
              { label: 'Businesses and food makers should help consumers eat green food.', letter: 'a' },
              { label: 'Consumers can use technology to waste less at home.', letter: 'b' },
              { label: 'Governments should support new technology, and consumers should waste less at home.', letter: 'c' }
            ], items: [
              { text: 'Castro et al. (2023)', answer: 1 },
              { text: 'Gunders (2024)', answer: 2 },
              { text: 'Huang et al. (2024)', answer: 0 }
            ]},
            { type: 'quiz', id: 'm6q', title: '5 · Overall, what can we learn from the three texts?', items: [
              { q: 'Choose the best summary.', options: ['Consumers are mainly responsible, but businesses also help.', 'To reach the U.N. goals, all actors must reduce their waste.', 'New technology is the only way to reach the U.N. goals.', 'More government money is not needed.'], answer: 'To reach the U.N. goals, all actors must reduce their waste.', why: 'Each text looks at different actors. Together they show that businesses, governments and consumers all have a role.' }
            ]},
            { type: 'teacher', ref: 'w4d2-t6' },
            { type: 'choose', id: 'm7c', title: 'Part 2 · Synthesizing — which statement do you agree with most?', options: [
              '1. There are many easy ways to reduce food waste at home, so consumers are mostly responsible.',
              '2. Governments are mainly responsible because they can pay for good new technologies.',
              '3. Businesses with green products should do more to help consumers use them.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: '<b>5 minutes.</b> Prepare an answer: <b>Who is mainly responsible for reducing food waste?</b>' },
              { who: 'alone', text: 'Use all three texts. Say how they are similar and different. Give your reasons.' },
              { who: 'pair', text: 'Tell your partner. Speak for about <b>one minute</b>.' }
            ]},
            { type: 'model', title: 'An example start', text: '“Reading 1 <b>indicates</b> that governments can play a big role in reducing food waste, <b>while</b> reading 2 <b>tends to focus more on</b> what people can do at home. I think that… because…”' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Bring the texts together', phrases: ['Gunders (2024) argues that…', '…while Castro et al. (2023) focus more on…', 'Huang et al. (2024) suggest that…', 'All three texts show that…'] },
              { label: 'Give your view', phrases: ['I think… are mainly responsible because…', 'For me, the most important actor is… because…'] }
            ]},
            { type: 'fields', title: 'My notes for one minute', fields: [
              { id: 'm7-1', label: 'Who is mainly responsible? Notes from the three texts + my reasons', placeholder: 'Gunders (2024) … while Castro et al. (2023) … Huang et al. (2024) … I think … because …', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w4d2-t7' }
          ],
          answers: { title: 'Task 3 · how each actor can help', items: [
            ['Castro et al. (2023)', '<b>Businesses:</b> apps and food delivery services can reduce waste; supermarket layouts make people buy too much. <b>Consumers:</b> can use technology to waste less at the three stages.'],
            ['Gunders (2024)', '<b>Businesses:</b> technology to store food better, sell food close to its date and track waste. <b>Governments:</b> big investment in technology; laws that stop waste. <b>Consumers:</b> 5 tips to waste less at home.'],
            ['Huang et al. (2024)', '<b>Businesses:</b> use upcycled ingredients; advertising to help consumers buy upcycled food. <b>Consumers:</b> can choose to buy upcycled food.']
          ]}
        },
        {
          id: 'm8', short: 'Write', minutes: 30, grouping: 'Alone → pair',
          title: 'Academic writing skills: Discussing implications',
          goal: 'See how the authors talk about results and implications. Then write your own paragraph.',
          blocks: [
            { type: 'key', title: 'Part 1 · Discussing implications: what are they?', points: [
              '<b>Implications</b> = what a result means, how we can use it, or who it can affect.',
              'Two ways to write about implications: <b>a)</b> use <b>hedging</b> (may, might, could, this suggests…) · <b>b)</b> <b>give advice</b> to a group (should…).'
            ]},
            { type: 'passage', id: 'm8p1', title: 'Paragraph C from Huang et al. (2024)', text: 'In Taiwan, the effect of upcycled food on how consumers act is not well-known. This study aimed to understand this by using the Value-Attitude-Behaviour (VAB) model. The VAB model looks at factors that affect consumers’ intention to purchase environmentally friendly products, such as a how healthy a product is, the products perceived green value, product novelty, and ethical consumption. The model was used in this study to measure how Taiwanese consumers view and might act towards upcycled food. The findings of the study show that health considerations greatly shape consumer attitudes towards upcycled food. These considerations then encourage environmentally friendly actions. This suggests that consumers who value health might be interested in buying upcycled products. Therefore, food businesses should clearly advertise the health benefits of upcycled food, such as their higher nutritional value or lack of heavily processed ingredients. Working with nutritionists and health organizations could also build trust and credibility, perhaps by promoting health-focused recipes or eating plans approved by health professionals.' },
            { type: 'quiz', id: 'm8q1', title: 'Paragraph C', items: [
              { q: '1. What model did they use, and why?', options: ['The VAB model — to see how Taiwanese consumers think about and might act towards upcycled food', 'The VAB model — to measure how much food Taiwanese businesses waste', 'A price model — to compare upcycled and normal food'], answer: 'The VAB model — to see how Taiwanese consumers think about and might act towards upcycled food', why: '“The model was used in this study to measure how Taiwanese consumers view and might act towards upcycled food.”' },
              { q: '2. What were the results?', options: ['Health shapes how people feel about upcycled food, and this leads to green actions.', 'Most people don’t like the taste of upcycled food.', 'Upcycled food costs more than normal food.'], answer: 'Health shapes how people feel about upcycled food, and this leads to green actions.', why: '“…health considerations greatly shape consumer attitudes… These considerations then encourage environmentally friendly actions.”' },
              { q: '3. Which phrases describe the results?', options: ['The findings of the study show that… / This suggests that…', 'In Taiwan… / This study aimed to…', 'Therefore… / perhaps…'], answer: 'The findings of the study show that… / This suggests that…', why: '“show” = sure; “suggests” = less sure.' }
            ]},
            { type: 'talk', title: 'Paragraph C — discuss with a partner', prompts: [
              '1. What are the implications of the results?',
              '2. Highlight the <b>hedging</b> and the <b>advice</b> in the paragraph.',
              '3. Why did the authors use hedging?',
              '4. Why did they give advice to food businesses?',
              '5. Yesterday’s talk also gave advice. How is this advice different?',
              '6. Do you know other ways to give advice in writing?'
            ]},
            { type: 'passage', id: 'm8p2', title: 'Part 2 · Paragraph E: a surprising result', text: 'Interestingly, the study found that product novelty and the perceived green value have little effect on green actions among Taiwanese consumers. This result was not expected as previous studies have found a strong relationship between green value and green behaviours (Zhuang, et al., 2021). However, Imtiyaz et al. (2021) point out that consumers may value practical use and cost-effectiveness over a product’s green value. This finding suggests a shift in marketing strategy that emphasizes the practical benefits and relevance to daily life of upcycled food products should be considered. This may help to increase consumer acceptance and market penetration of upcycled foods.' },
            { type: 'quiz', id: 'm8q2', title: 'Paragraph E', items: [
              { q: '1. Which words introduce the result of <b>this</b> study?', options: ['the study found that', 'previous studies have found', 'point out that'], answer: 'the study found that', why: '“Interestingly, the study found that…” gives this study’s result.' },
              { q: '2. Was this result expected?', options: ['Yes', 'No'], answer: 'No', why: '“This result was not expected…”' },
              { q: '3. Why does the paragraph start with “Interestingly”?', options: ['To show the result was a surprise', 'To give advice', 'To show they are sure'], answer: 'To show the result was a surprise', why: 'It shows that the result was different from what they expected.' },
              { q: '4. Why does sentence 3 start with “However”?', options: ['To show that other studies found something different', 'To add a similar idea', 'To give an example'], answer: 'To show that other studies found something different', why: 'Zhuang et al. (2021) vs Imtiyaz et al. (2021) — this helps explain the surprise.' },
              { q: '5. What are the implications?', options: ['People may care more about use and cost, so businesses can change their advertising.', 'Green value is the most important thing for consumers.', 'Upcycled food should not be sold in Taiwan.'], answer: 'People may care more about use and cost, so businesses can change their advertising.', why: '“…a shift in marketing strategy… should be considered.”' },
              { q: '6. Which words describe the implications?', options: ['may · may · should be considered', 'found · was not expected', 'Interestingly · However'], answer: 'may · may · should be considered', why: 'Hedging (may) + careful advice (should be considered).' }
            ]},
            { type: 'figure', src: 'assets/week4/app-features.svg', alt: 'Four app functions: smart inventory, smart recipes, food-sharing hub and portion-ready food delivery, with what each can do.', caption: 'Part 3 · Write: remember yesterday’s apps', credit: 'Adapted from Castro et al. (2023)', size: 'wide' },
            { type: 'model', title: 'Your paragraph begins like this', text: 'Apps like No Waste and Plus Fridge Pal can reduce waste at the acquisition stage as they allow consumers to track what they need and what they don’t, reducing unnecessary purchases. These apps also provide a summary of past shopping behaviours, showing which items were bought and not used. …' },
            { type: 'key', title: 'Continue the paragraph: write about the implications of these apps', compare: [
              { label: 'Choose 1–2 groups', text: 'businesses · consumers · food producers · people who don’t have enough food' },
              { label: 'Possible implications', text: 'money · the environment · food security · health · your own idea' },
              { label: 'Language', text: 'Use <b>hedging</b> (may, might, could, this suggests…) and/or <b>advice</b> (should, ought to, might want to…).' }
            ]},
            { type: 'model', title: 'Example — about a different app (Too Good To Go)', text: 'These results <b>suggest</b> that apps like Too Good To Go <b>could</b> help cafés earn money from food they would throw away. Customers <b>may</b> also save money. Cafés <b>should therefore</b> consider joining the app.', note: 'Hedging (suggest, could, may) + advice (should). Now write about <b>your</b> apps and <b>your</b> groups.' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Hedging', phrases: ['This suggests that…', 'For consumers, this may…', 'This could help… to…', 'As a result, … might…'] },
              { label: 'Advice', phrases: ['Supermarkets should therefore…', '… ought to…', '… might want to…'] }
            ]},
            { type: 'fields', id: 'm8f', title: 'My paragraph', fields: [
              { id: 'm8-w', label: 'Continue the paragraph with the implications of these apps', placeholder: 'For consumers, this could… As a result, … should…', rows: 7 }
            ], send: true, sendLabel: 'Share your paragraph with your partner', sendHint: 'Send a copy to your partner. Only they will see it. Then read theirs.' },
            { type: 'talk', title: 'Read your partner’s paragraph', prompts: ['Who did your partner write about?', 'What implications did they write?', 'What hedging did they use?', 'Did they give advice?'] },
            { type: 'teacher', ref: 'w4d2-t8' }
          ],
          answers: { title: 'Paragraph C', items: [
            ['1. Implications', 'People who care about health might buy upcycled food. Businesses should advertise the health benefits and work with health experts to build trust.'],
            ['2. Language', '<b>Hedging:</b> This suggests that · might be interested · could also build · perhaps. <b>Advice:</b> food businesses should clearly advertise…'],
            ['3. Why hedge?', 'We can’t be sure how the results will be used. There may be other uses that nobody has thought of.'],
            ['4. Why advice?', 'The authors want to show that their results are useful for businesses.'],
            ['5. Writing vs speaking', 'The text uses “should” after careful (hedged) sentences. The talk used stronger modals and imperatives. Writing is usually more careful and formal than speaking.'],
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
      outcome: 'Judge if an argument is strong, practise negotiation language, plan your group presentation, and think about your groupwork.',
      activities: [
        {
          id: 'd1', short: 'Debate + listen', minutes: 25, grouping: 'Two lines → alone',
          title: 'Warmer: Speed Debating + Discussion Sample',
          goal: 'Argue for a side in one minute. Then listen to students who don’t agree.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Warmer: Speed Debating', items: [
              { who: 'class', text: 'Stand in two lines. Face a partner.' },
              { who: 'pair', text: 'Your teacher shows two things. The <b>left</b> line argues for the left one. The <b>right</b> line argues for the right one. You can’t choose!' },
              { who: 'class', text: 'After <b>1 minute</b>, one line moves. New partner, new debate!' }
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
            { type: 'language', title: 'Quick starters', tabs: false, groups: [
              { label: 'Argue', phrases: ['… is better because…', 'For example, …', 'Also, …'] },
              { label: 'Answer back', phrases: ['Yes, but…', 'I don’t agree, because…'] }
            ]},
            { type: 'talk', title: 'Back in your seat — talk with your partner', prompts: [
              'a) Was it easy to disagree with your classmates?',
              'b) Were your arguments convincing (= did they change minds)? Were theirs?',
              'c) How did it feel to argue for a side you don’t agree with?'
            ]},
            { type: 'teacher', ref: 'w4d2-t9' },
            { type: 'key', title: 'Part 2 · Discussion Sample: the negotiation question', points: ['Which of the consequences of the modern agricultural production system is the most serious? <b>a)</b> health problems <b>b)</b> environmental damage <b>c)</b> animal rights violations. Give examples from the regions you have researched.', '<i>In simple words: modern farming causes problems. Which problem is the worst — for people’s health, for the environment, or for animals?</i>'] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the arguments (1–8) and reasons (A–H) below. Can you guess any matches?' },
              { who: 'alone', text: 'Listen once. Answer the three quick questions.' },
              { who: 'alone', text: 'Listen again. Match the reasons to the arguments. The arguments are in the same order as the recording.' }
            ]},
            { type: 'listening', source: 'DEC15 sample discussion', title: 'Negotiation — alternative ending (students don’t all agree)', videoId: '', clip: 'your teacher plays the recording', transcripts: [['negotiation-ending2', 'Transcript (open after you check)']] },
            { type: 'quiz', id: 'd2q', title: 'After the first listening', items: [
              { q: 'a) Do the students all agree at the start?', options: ['Yes', 'No'], answer: 'No', why: 'They argue for the three different options.' },
              { q: 'b) Do the students all agree at the end?', options: ['Yes', 'No'], answer: 'No', why: 'Student 4 still says health is the biggest problem.' },
              { q: 'c) Does anyone change their opinion?', options: ['Yes — the animal rights student agrees the environment may be most serious', 'No — everyone keeps the same opinion'], answer: 'Yes — the animal rights student agrees the environment may be most serious', why: '“Yeah, I suppose you have a point there… Maybe this is the most serious consequence.”' }
            ]},
            { type: 'sort', id: 'd2s', single: true, title: 'After the second listening: match the reasons (A–H) to the arguments (1–8)', hint: '<b>Drag</b> each reason to its argument — or tap a reason, then tap an argument.', buckets: [
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
          id: 'd3', short: 'Strong arguments', minutes: 30, grouping: 'Pairs or small groups',
          title: 'Making a strong argument + Negotiation language 2: Presenting a convincing line of argument',
          goal: 'Find out what makes an argument strong. Then learn phrases to sound convincing.',
          blocks: [
            { type: 'talk', title: 'Part 1 · Making a strong argument — think about the discussion', prompts: [
              'a) Which arguments were the strongest?',
              'b) Why were some arguments weaker?',
              'c) Which option would <b>you</b> choose — health, environment or animal rights? Why?'
            ]},
            { type: 'sort', id: 'd3s', title: 'How do you make a strong argument?', hint: '<b>Drag</b> each idea to “Do…” or “Don’t…”.', buckets: [
              { label: 'Do…' }, { label: 'Don’t…' }
            ], items: [
              { text: '1. Check that you understand the question.', answer: 0 },
              { text: '2. Be clear about the topic.', answer: 0 },
              { text: '3. Use feelings (emotional appeal) as your main argument.', answer: 1 },
              { text: '4. Give relevant examples.', answer: 0 },
              { text: '5. Use only a personal story as your main reason.', answer: 1 },
              { text: '6. Use support from sources people trust.', answer: 0 },
              { text: '7. Say the names of good sources.', answer: 0 },
              { text: '8. Give numbers (statistics) when you can.', answer: 0 },
              { text: '9. Hide the weak points in your evidence.', answer: 1 },
              { text: '10. Think about different points of view.', answer: 0 },
              { text: '11. Make jokes about other speakers’ ideas.', answer: 1 },
              { text: '12. Evaluate (= judge) other speakers’ ideas.', answer: 0 },
              { text: '13. Ignore arguments that make yours look weak.', answer: 1 },
              { text: '14. Disagree with others as much as possible.', answer: 1 },
              { text: '15. Near the end, repeat your main reason(s) briefly.', answer: 0 },
              { text: '16. Never change your opinion.', answer: 1 },
              { text: '17. Be flexible (= ready to change your opinion).', answer: 0 },
              { text: '18. After the discussion, learn more about the topic.', answer: 0 }
            ]},
            { type: 'cards', title: 'What is the problem with each contribution? How can it be better?', numbered: true, items: [
              { text: '<b>Student 1:</b> I really think environmental damage is the most pressing issue. The way agriculture contributes to soil degradation, deforestation, and pollution is such a big concern.<br><b>Student 4:</b> I don’t really agree with you there. I’m not sure that we should be so concerned about soil. Don’t you think that…' },
              { text: 'Don’t you think that as human beings, the direct impact on human health should be our biggest worry? The effect of chemicals and antibiotic-resistant bacteria are massive threats to our health. Last year, I got really sick, and I’m sure it was from the chemicals used in the food I was eating.' },
              { text: 'My family owns a dairy farm, and they treat the cows very well. If they had to give the animals more space, it would be really bad for the business.' },
              { text: 'Violating animal rights is an ethical issue. I mean, meat is murder! Shouldn’t ethics guide all our other decisions?' }
            ]},
            { type: 'tip', text: '<b>Hint:</b> look for 1) ignoring other people’s points, 2) being too sure (“I’m sure…”), 3) one small example for a big world problem, 4) very strong feelings.' },
            { type: 'fields', fields: [
              { id: 'd3-3', label: 'The problems and my improvements (1–4)', placeholder: '1) Student 4 ignores… 2) “I’m sure” → “I believe…”', rows: 4 }
            ]},
            { type: 'chat', title: 'Did the other students answer well? Why?', lines: [
              ['Student 4', 'I don’t really agree with you there. I’m not sure that we should be so concerned about soil. Don’t you think that as human beings, the direct impact on human health should be our biggest worry? …'],
              ['Student 1', 'Yes, I admit that those are big problems, but I think you’re being a bit dismissive. Soil degradation leads to reduced fertility and affects the land’s ability to support agricultural crops. According to the United Nations Environment Programme, up to 33% of the world’s soils are already degraded, and over 90% could become degraded by 2050. Besides, I’m not only talking about soil degradation. We can’t deny the negative impacts of polluting the water we need to drink and cutting down the trees that create the oxygen we need to breathe.'],
              ['Student 4', 'My family owns a dairy farm, and they treat the cows very well. If they had to give the animals more space, it would be really bad for the business.'],
              ['Student 5', 'But it sounds like that is a small-scale operation which does not accurately represent this global issue. In our research we learnt that in the Netherlands about 37 land-based animals are killed per person annually. That doesn’t even include seafood! Surely that must be the most serious consequence of agricultural production.']
            ]},
            { type: 'teacher', ref: 'w4d2-t11' },
            { type: 'key', title: 'Part 2 · Negotiation language 2: Phrases for presenting a convincing line of argument', points: [
              'You already know two ways to use evidence: <b>“According to (a good source + numbers)…”</b> and <b>“In our research we learnt that… Surely that must be…”</b>',
              'Now learn phrases to <b>sound sure</b> and to <b>get others to agree</b>.'
            ]},
            { type: 'figure', src: 'assets/week4/negotiation-map.svg', alt: 'A negotiation map: present your argument, respond to others, evaluate their contributions, and be flexible.', caption: 'The negotiation skills we practise today', size: 'wide' },
            { type: 'sort', id: 'd4s', title: 'Sort the phrases (A–N)', hint: 'Does each phrase <b>use evidence</b>, <b>strongly (re)assert</b> (= say again, very surely) a position, or <b>encourage others to agree</b>?', buckets: [
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
            { type: 'talk', prompts: ['Look at the phrases for <b>encouraging others to agree</b>. What do they have in common?'] },
            { type: 'spinner', id: 'd4sp', title: 'Practice game: spin a topic and a phrase', text: 'Student A argues for the first option, Student B for the second. Talk for 1–2 minutes. Use the phrase from the spinner — and more! No evidence needed this time.', reels: [
              { label: 'Topic', items: ['Coffee or tea?', 'Dogs or cats?', 'Streaming movies or the cinema?'] },
              { label: 'Use this phrase', items: ['It’s clear that…', 'I have no doubt that…', 'We can’t deny…', 'I really think… is the best.', 'Wouldn’t you agree that…?', 'Don’t you think…?', 'Shouldn’t…?'] }
            ]},
            { type: 'teacher', ref: 'w4d2-t12' }
          ],
          answers: { items: [
            ['Strong argument · Stronger vs weaker', '<img src="assets/week4/argument-strength.svg" alt="Stronger arguments use evidence, statistics from reputable sources and clear examples; weaker arguments rely on emotional appeal or overgeneralised personal experience.">'],
            ['Strong argument · a) Strongest', 'Arguments with evidence or numbers from research (3–H, 4–A) and clear examples (1–E, 6–D).'],
            ['Strong argument · b) Weaker', 'Strong feelings (8–C) or one personal story used as proof for everything (2–B, 5–F). A personal story is OK, but only as extra support for evidence.'],
            ['Strong argument · Problems 1–4', '1) Student 4 ignores Student 1’s examples (deforestation, pollution) — listen and be fair to others. 2) A personal example said too strongly (“I’m sure…”) — say “I believe it was from…” or add expert support (“my doctor told me…”). 3) One family farm does not show a global problem; the speaker may also be biased (the family business). 4) “Meat is murder” is too emotional and could feel like an attack.'],
            ['Strong argument · Responses', '1) Yes: Student 1 accepts the point (“Yes, I admit…”), says Student 4 is being dismissive (= not taking it seriously), then gives a number from a trusted source and a strong comment (“We can’t deny…”). 2) Yes: Student 5 shows the example is too small for a global issue and gives a number from their research.'],
            ['Phrases · Using evidence', 'B, G'],
            ['Phrases · Strongly (re)asserting', 'A, F, I, J, K, L, M, N'],
            ['Phrases · Encouraging others to agree', 'C, D, E, H — all <b>negative questions</b> (questions with “not”). We use them when we expect the other person to agree.'],
            ['Remember', 'These phrases help you sound sure. But a strong argument also needs logic and evidence.']
          ]}
        },
        {
          id: 'd5', short: 'Disagree + paraphrase', minutes: 25, grouping: 'Pairs',
          title: 'Responding to others’ contributions: Disagreeing + Paraphrasing',
          goal: 'Disagree politely. Repeat someone’s idea in your own words, then add your view.',
          blocks: [
            { type: 'talk', title: 'Part 1 · Negotiation language 2: Disagreeing — discuss', prompts: ['a) What happens if people always agree in academic discussions?', 'b) Why should we be polite when we disagree?'] },
            { type: 'sort', id: 'd5s', title: 'Polite or impolite?', buckets: [
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
            { type: 'tip', text: 'Say the polite phrases aloud with a calm, friendly voice. Then try an impolite one. Can you hear the difference?' },
            { type: 'cloze', id: 'd5c', title: 'Complete the phrases from the recording', list: true, options: ['agree', 'argue', 'should', 'sorry', 'sure'],
              text: 'I don’t really {{1}} with you there.\nI’m {{2}} but I just don’t agree with that. I still {{3}} that…\nI’m not {{4}} that we {{5}} be so concerned about (X).',
              answers: ['agree', 'sorry', 'argue', 'sure', 'should'] },
            { type: 'teacher', ref: 'w4d2-t13' },
            { type: 'chat', title: 'Part 2 · Negotiation language 2: Paraphrasing — an example from a previous lesson', lines: [
              ['Student 5', 'While regulations are in place, the reality of industrial farming often falls short of these ideals.'],
              ['Student 1', '<mark>That’s right. It can be difficult to monitor whether the factory farms are always following the rules.</mark>']
            ]},
            { type: 'tip', text: '<b>Paraphrase</b> = say someone’s idea again in your own words. It shows you listened.' },
            { type: 'chat', title: 'Another extract — how does each speaker repeat the last idea?', lines: [
              ['Student 1', 'Hmmmm… I’m not sure either of you is considering the broader picture. Environmental damage affects not just us but every living organism. If we continue like this, we’ll have no viable land for farming, nor clean water. It impacts biodiversity, climate change—everything!'],
              ['Student 4', '<mark>That’s true, environmental issues are significant,</mark> but health problems are immediate. Look at the health care costs and the impact on life expectancy. If we don’t prioritize human health, we can’t maintain a functioning society.'],
              ['Student 5', '<mark>I understand that human-centric problems are important because they affect us,</mark> but violating animal rights is an ethical issue. I mean, meat is murder! Shouldn’t ethics guide all our other decisions?'],
              ['Student 1', '<mark>You’re right. Ethics are important,</mark> but without a healthy environment, there won’t be any animals to protect, or humans to keep healthy! It’s all interconnected, but the root starts with our environment.']
            ]},
            { type: 'talk', prompts: ['a) Look at the highlighted parts. How does each speaker repeat the last speaker’s idea?', 'b) Do they agree or disagree with the last speaker? How?'] },
            { type: 'order', id: 'd6o1', title: 'Word order game 1', items: ['I', 'can', 'agree', 'with', 'you', 'that…,', 'however…'] },
            { type: 'order', id: 'd6o2', title: 'Word order game 2', items: ['You’re', 'right', 'about…,', 'though', 'I’d', 'argue', 'that…'] },
            { type: 'order', id: 'd6o3', title: 'Word order game 3', items: ['I', 'agree', 'with', 'your', 'point', 'about…,', 'but', 'we', 'also', 'need', 'to', 'look', 'at…'] },
            { type: 'language', title: 'Paraphrase, then give a different view', tabs: false, groups: [
              { label: 'From the recording', phrases: ['That’s true, (environmental) issues are significant, but…', 'I understand that (paraphrase), but…', 'You’re right. (Ethics) are important, but…'] },
              { label: 'Other phrases', phrases: ['I can agree with you that…, however…', 'You’re right about…, though I’d argue that…', 'I agree with your point about…, but we also need to look at…'] }
            ]},
            { type: 'spinner', id: 'd6sp', title: 'Practice game: spin a topic and a phrase', text: 'Student A argues for the first option, Student B for the second. Talk for 1–2 minutes. Disagree politely, and paraphrase your partner before you give your view.', reels: [
              { label: 'Topic', items: ['Books or magazines?', 'Summer or winter?', 'City life or country life?'] },
              { label: 'Use this phrase', items: ['I’m not sure I agree with that because…', 'I’m afraid we don’t see eye to eye there.', 'I don’t know if that’s entirely true.', 'That’s true, …, but…', 'You’re right about…, though I’d argue that…', 'I agree with your point about…, but we also need to look at…'] }
            ]},
            { type: 'teacher', ref: 'w4d2-t14' }
          ],
          answers: { items: [
            ['Disagreeing · a', 'Less critical thinking, fewer new ideas, a narrow view, and weak problem solving.'],
            ['Disagreeing · b', 'Rude disagreement shows you don’t want to hear other views. The other person may be afraid to share again.'],
            ['Disagreeing · Language bank', '<b>Disagreeing politely:</b> I don’t really agree with you there. · I’m sorry but I just don’t agree with that. I still argue that… · I’m not sure I agree with that because… · I will respectfully disagree with you on that point. · I’m afraid we don’t see eye to eye there.<br><b>Challenging others’ contributions:</b> I’m not sure that we should be so concerned about (X). · I don’t know if that’s entirely true.'],
            ['Paraphrasing · a', '“Environmental damage affects not just us but every living organism” → “environmental issues are significant” · “If we don’t prioritize human health, we can’t maintain a functioning society” → “human-centric problems are important because they affect us” · “violating animal rights is an ethical issue… Shouldn’t ethics guide all our other decisions?” → “Ethics are important”.'],
            ['Paraphrasing · b', 'They first accept the idea (That’s true / I understand that… / You’re right), then say <b>but</b> and give a different view.']
          ]}
        },
        {
          id: 'd7', short: 'Evaluate + flex', minutes: 15, grouping: 'Alone → pairs',
          title: 'Responding to others’ contributions: Evaluation + Flexibility',
          goal: 'Judge other speakers’ ideas politely. Learn how to change your opinion.',
          blocks: [
            { type: 'sort', id: 'd7s', single: true, title: 'Part 1 · Negotiation language 2: Evaluation — match the phrases (1–5) to the meanings (A–E)', hint: 'Why would you say each phrase in a discussion?', buckets: [
              { label: 'Their example is overgeneralised (= one case used for everything).', letter: 'A' },
              { label: 'Their example is too small for a big, global issue.', letter: 'B' },
              { label: 'Their arguments are good, but they ignore your points.', letter: 'C' },
              { label: 'Their arguments are too narrow (= they only look at a small part).', letter: 'D' },
              { label: 'Their arguments are good, but they forget one point of view.', letter: 'E' }
            ], items: [
              { text: '1. Yes, I admit that those are big problems, but I think you’re being a bit dismissive.', answer: 2 },
              { text: '2. Both of you have valid points, but we’re completely ignoring the (ethical) implications here.', answer: 4 },
              { text: '3. That’s not always the case though.', answer: 0 },
              { text: '4. But it sounds like that is a small-scale operation which does not accurately represent this global issue.', answer: 1 },
              { text: '5. Hmmmm… I’m not sure either of you is considering the broader picture.', answer: 3 }
            ]},
            { type: 'fields', title: 'Add one more phrase for each meaning (A–E)', fields: [
              { id: 'd7-1', label: 'My extra phrases A–E', placeholder: 'A) That’s an interesting example, but…', rows: 4 }
            ]},
            { type: 'tip', text: '<b>Hint for the situations below:</b> say something kind first (“That’s interesting…”), then ask a question or add your point (“…but do you know if…?”).' },
            { type: 'fields', title: 'What would you say?', fields: [
              { id: 'd7-a', label: 'a. Another speaker makes a strong point.', rows: 1 },
              { id: 'd7-b', label: 'b. Their point or example is not relevant (= not connected to the topic).', rows: 1 },
              { id: 'd7-c', label: 'c. Their example is old.', rows: 1 },
              { id: 'd7-d', label: 'd. They have misunderstood the evidence (the text).', rows: 1 },
              { id: 'd7-e', label: 'e. They don’t have enough evidence for their claim.', rows: 1 }
            ]},
            { type: 'teacher', ref: 'w4d2-t15' },
            { type: 'talk', title: 'Part 2 · Negotiation language 2: Flexibility — think', prompts: ['Other speakers may change your mind. Is this OK? Why / why not?'] },
            { type: 'sort', id: 'd8s', title: 'Which phrases change an opinion?', buckets: [
              { label: 'Changing an opinion (flexible)' }, { label: 'Not changing an opinion' }
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
            { type: 'spinner', id: 'd8sp', title: 'Practice game: spin a topic and a phrase', text: 'Student A argues for the first option, Student B for the second. Talk for 1–2 minutes. Judge your partner’s ideas — and try to be flexible at the end.', reels: [
              { label: 'Topic', items: ['Online or face-to-face classes?', 'Morning or night?', 'Rock music or pop music?'] },
              { label: 'Use this phrase', items: ['That’s not always the case though.', 'I’m not sure you’re considering the broader picture.', 'Both of you have valid points, but…', 'Oh yeah… I hadn’t considered that.', 'I guess you’re right.', 'You do make a very strong case.'] }
            ]},
            { type: 'tip', text: 'Want every phrase in one place? Open <b>Extra practice → Full phrase list</b> (side menu).' },
            { type: 'teacher', ref: 'w4d2-t16' }
          ],
          answers: { items: [
            ['Evaluation · More phrases A–E', 'A) That’s an interesting example, but I think that’s a bit of an overgeneralisation. · B) Yes, but we’re talking about a lot more than just… · C) I see what you mean, but I think my point/example about… is also relevant. · D) I feel like we need to consider the long-term implications of… · E) That’s true, but let’s not overlook the (X) perspective here.'],
            ['Evaluation · a', 'Hmmm… That’s a really good/interesting insight/example! · Wow! That’s an interesting observation.'],
            ['Evaluation · b', 'I’m not sure that’s really related to this issue. · I don’t really see the connection to what we’re discussing here.'],
            ['Evaluation · c', 'I think the situation/figures might have changed since then. · It sounds like that example is a little outdated.'],
            ['Evaluation · d', 'I think when they say… the author means… · I think you might have misinterpreted the data/the author’s point.'],
            ['Evaluation · e', 'Do you know if there are any statistics to support that? · That’s interesting. Have you heard of any research into that?'],
            ['Flexibility · 1', 'Yes — it’s fine! If others give strong arguments, it is normal to change your opinion. Being flexible is part of critical thinking.'],
            ['Flexibility · 2', 'Changing an opinion: a, c, e, h.']
          ]}
        },
        {
          id: 'd9', short: 'Group plan', minutes: 25, grouping: 'Research groups → alone',
          title: 'Self-regulation and monitoring (groupwork) + Preparing the Summary Presentation + Self-reflection',
          goal: 'Plan better teamwork. Plan your presentation. Then think about your groupwork.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Self-regulation and monitoring (groupwork): Action plan for further improvement', items: [
              { who: 'alone', text: 'Open the self-reflection from your <b>first</b> Research Summary Discussion (Weeks 1–2).' },
              { who: 'alone', text: 'Read your <b>Groupwork</b> action plan.' },
              { who: 'group', text: 'Discuss the three questions with your group.' }
            ]},
            { type: 'talk', prompts: ['a) What worked well last time?', 'b) What problems did you have last time?', 'c) How can your group work together better?'] },
            { type: 'fields', fields: [
              { id: 'd9-1', label: 'Our strategies for this time', placeholder: 'We will… / We won’t…', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w4d2-t17' },
            { type: 'key', title: 'Part 2 · Preparing the Summary Presentation', points: ['You are still on <b>Step 3</b>: a 5-minute presentation that uses all three articles.', 'Decide the order of your ideas, who says what, and a final comment.'] },
            { type: 'figure', src: 'assets/week4/rsd-steps.svg', alt: 'The five steps of the Research Summary Discussion: 1 find a source, 2 summarise your source to your group, 3 prepare a group presentation, 4 present to a new group, 5 discuss for 15 minutes.', caption: 'Step 3: a presentation that brings in all three sources', size: 'wide' },
            { type: 'talk', prompts: ['a) What is the best order for your group’s ideas?', 'b) What is a good final comment?'] },
            { type: 'model', title: 'Example rows', rows: [
              ['Introduction', 'Today we will talk about… We read three articles about… (Mai)'],
              ['Final comment', 'Overall, all three articles show that… (Leo)']
            ]},
            { type: 'table', id: 'd10t', title: 'Our presentation plan', columns: ['Part', 'What we will say (which article? key points and examples)', 'Who?'], fixed: ['Introduction', '1st theme', '2nd theme', '3rd theme', '4th theme <small>(optional)</small>', 'Final comment'] },
            { type: 'tip', text: 'Press <b>Write together</b> to plan on one shared page. Also write notes <b>by hand</b> — you will use handwritten notes in the final discussion.' },
            { type: 'language', title: 'Useful phrases for planning together', groups: [
              { label: 'Common themes', phrases: ['Did your article mention…?', 'All of our articles focus on…', 'That seems to be an important theme.', 'Another common theme is that…'] },
              { label: 'What to include', phrases: ['I think that’s a really important point.', 'I don’t think we need to mention… because…', 'We should mention…'] },
              { label: 'Organising ideas', phrases: ['Which point should we mention first?', 'Let’s include that example when we talk about…', 'Why don’t we discuss… first, then…?'] }
            ]},
            { type: 'teacher', ref: 'w4d2-t18' },
            { type: 'model', title: 'Part 3 · Self-reflection — first, read an example (question 3)', rows: [
              ['Comment', 'We had no big communication problems. But I emailed my groupmate and he never replied.'],
              ['Action plan', 'Choose one way to communicate, and agree on it early.']
            ]},
            { type: 'tip', text: 'This is <b>Section 3</b> of your self-reflection form: <b>Groupwork</b>. You finished Sections 1 and 2. You can finish this part at home.' },
            { type: 'form', id: 'd11f', title: 'Self-reflection · Groupwork', intro: 'Choose Yes, Mostly or Needs work. Then write a comment and an action plan (= what you will do next time).', cols: ['Comments', 'Action plan for further improvement'], sections: [
              { label: 'Groupwork', hint: 'Week 4', items: [
                'Could your group easily find common themes in your articles and agree on the main points?',
                'Did your group work well together to plan your summary?',
                'Did your group communicate clearly and solve problems together?',
                'Did you help everyone feel comfortable sharing ideas?'
              ]}
            ], send: true, sendLabel: 'Share your reflection (optional)', sendHint: 'You can send a copy to your teacher or a groupmate. Only they will see it.' },
            { type: 'key', tone: 'warn', title: 'Reminder', points: ['On Thursday (Research Summary Discussion), bring your <b>laptop or tablet</b> and your <b>headphones</b>. You need them for the task.'] },
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
      goal: 'Write 3–4 sentences: what do Huang et al. (2024)’s results mean for one more group?',
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
      goal: 'Find one phrase for each negotiation skill in the transcript.',
      blocks: [
        { type: 'sources', ids: ['negotiation-ending2'] },
        { type: 'table', id: 'x2t', columns: ['Function', 'Phrase from the transcript'], fixed: ['Strongly (re)asserting', 'Encouraging others to agree', 'Disagreeing politely', 'Paraphrasing + opposing', 'Evaluating', 'Showing flexibility'] }
      ]
    },
    {
      id: 'x3', short: 'Full phrase list', minutes: 10, grouping: 'Alone', category: 'Language bank',
      title: 'Negotiation language 2: the full list',
      goal: 'All of today’s negotiation phrases in one place. Choose three new ones to try on Thursday.',
      blocks: [
        { type: 'language', title: 'Negotiation language 2 · the full list', groups: [
          { label: 'Using evidence', phrases: ['According to (reputable source + relevant statistics)…', 'In our research we learnt that… Surely that must be the most serious consequence of…', 'Well, the statistics show that…', 'One study which was done in (X) showed that…'] },
          { label: 'Strongly (re)asserting', phrases: ['It’s clear that…', 'I really think (X) is the most pressing issue.', 'The way (X) contributes to (Y) is such a big concern.', 'I’m sure…', 'We can’t deny…', 'I have no doubt that…', 'I can say with great confidence that…', 'I feel certain that…'] },
          { label: 'Encouraging agreement', phrases: ['Don’t you think (X) should be our biggest worry?', 'Shouldn’t…?', 'Wouldn’t you agree that…?', 'Don’t the (environmental) issues worry you?'] },
          { label: 'Disagreeing & challenging', phrases: ['I don’t really agree with you there.', 'I’m sorry but I just don’t agree with that. I still argue that…', 'I’m not sure I agree with that because…', 'I will respectfully disagree with you on that point.', 'I’m afraid we don’t see eye to eye there.', 'I’m not sure that we should be so concerned about (X).', 'I don’t know if that’s entirely true.'] },
          { label: 'Paraphrasing + opposing', phrases: ['That’s true, (environmental) issues are significant, but…', 'I understand that (paraphrase), but…', 'You’re right. (Ethics) are important, but…', 'I can agree with you that…, however…', 'You’re right about…, though I’d argue that…', 'I agree with your point about…, but we also need to look at…'] },
          { label: 'Evaluating', phrases: ['Yes, I admit that those are big problems, but I think you’re being a bit dismissive.', 'Both of you have valid points, but we’re completely ignoring the (ethical) implications here.', 'That’s not always the case though.', 'But it sounds like that is a small-scale operation which does not accurately represent this global issue.', 'Hmmmm… I’m not sure either of you is considering the broader picture.', 'I see what you mean, but I think my point/example about… is also relevant.', 'That’s true, but let’s not overlook the (X) perspective here.', 'Do you know if there are any statistics to support that?'] },
          { label: 'Showing flexibility', phrases: ['I guess you’re right. Those issues can’t be ignored, and they’re actually…', 'Yeah, I suppose you have a point there… Maybe this is the most serious consequence…', 'Oh yeah… I hadn’t considered that.', 'Hmmmm… You do make a very strong case. Perhaps that is the best option.'] }
        ]}
      ]
    }
  ],

  glossary: [
    ['upcycled food', 'Food made from ingredients that people would throw away.', 'Cookies made from brewer’s grain are upcycled food.'],
    ['empirical study', 'Research in which people collect and study data.', 'Huang et al. (2024) is an empirical study.'],
    ['non-conventional', 'Unusual; not normal.', 'Upcycled food uses non-conventional food materials.'],
    ['nutritional value', 'How healthy a food is for you.', 'Upcycled products keep their nutritional value.'],
    ['green value', 'How good something is for the environment.', 'Green value had little effect on green actions.'],
    ['novelty', 'Something new or unusual.', 'Product novelty was not important to consumers.'],
    ['ethical consumption', 'Buying products that don’t cause harm.', 'Ethical consumption encourages green actions.'],
    ['credibility', 'Being believable; people trust you.', 'Working with nutritionists could build credibility.'],
    ['certification', 'An official paper that proves something.', 'Show ethical certifications on the packaging.'],
    ['transparency', 'Being open and honest.', 'Transparency in the supply chain builds trust.'],
    ['uptake', 'How many people start to use something new.', 'Practical benefits may increase uptake.'],
    ['implication', 'What a result means, how we can use it, or who it can affect.', 'The implications for businesses are clear.'],
    ['synthesise', 'Bring ideas from different texts together.', 'Synthesise the three texts in one paragraph.'],
    ['actor', 'A person, group or organisation with a role in a system.', 'Businesses, governments and consumers are actors.'],
    ['negotiation', 'Discussing an issue and trying to agree.', 'The second part of the task is a negotiation.'],
    ['emotional appeal', 'Trying to persuade with feelings, not evidence.', '“Meat is murder” is an emotional appeal.'],
    ['overgeneralise', 'Say something is always true from only one or two examples.', 'Don’t overgeneralise your personal experience.'],
    ['reputable source', 'A source that people trust, e.g. the UN.', 'Mention a reputable source’s name.'],
    ['negative question', 'A question with not, used when we expect agreement.', 'Wouldn’t you agree that…?'],
    ['dismissive', 'Not taking an idea seriously.', 'I think you’re being a bit dismissive.'],
    ['paraphrase', 'Say someone’s idea again in your own words.', 'Paraphrase, then give your view.'],
    ['counterargument', 'An argument against another argument.', 'Paraphrase, then add a counterargument.'],
    ['flexibility', 'Being ready to change your opinion.', 'Flexibility is part of critical thinking.']
  ]
};
