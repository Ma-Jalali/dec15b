/* DEC15 · Week 4, Day 2 — lesson content (v3: more functional — lead-in first, a few useful words,
   realistic questions, speaking language at upper-intermediate level).
   Teacher’s Book: W4 D2 · 4A Mediation + Academic writing skills 1 (120) · 5A Discussion skills 1 (120).
   Texts: Huang et al. (2024) upcycled food · Gunders (2024) · Castro et al. (2023) · Negotiation ending 2 sample
   — lessons/week4/sources.js. Each stage follows: lead-in + useful words → gist + detail → talk about the
   text → language focus + practice → use it. Existing block, field and table ids are unchanged; new blocks
   use the prefix f3-. Teacher notes live in the database (teacher_notes), refs only here.
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
  journey: 'First, read about upcycled food and put three texts together: who should reduce food waste — businesses, governments or consumers? You learn how researchers talk about results, and you write a paragraph. Then you listen to a student discussion, judge the arguments, and practise the language of convincing, disagreeing politely and reaching agreement.',
  finish: { title: 'Wednesday', text: 'Evaluating options, flexibility and taking a stance' },

  sections: [
    /* ───────────────────────── 4A Mediation + Academic writing skills 1 ───────────────────────── */
    {
      id: 'mediate', number: '01', code: '4A', minutes: 120,
      tone: 'blue', art: 'reading',
      title: 'Mediation + Academic writing skills 1',
      subtitle: 'Would you eat upcycled food? Advise a start-up, then vote: who should reduce food waste?',
      outcome: 'Read and take notes, bring ideas from three texts together, find language for results and implications, and write a careful paragraph with words like may and could.',
      activities: [
        {
          id: 'm1', short: 'Warm-up + words', minutes: 20, grouping: 'Pairs → class',
          title: 'Recap + Lead-in: Would you eat it? + Vocabulary',
          goal: 'Remember yesterday’s tips. Talk about upcycled food. Learn eight useful words.',
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
            { type: 'table', id: 'm1t', title: 'Which tips could help each person? Short notes are fine.', columns: ['Person', 'Useful tip(s) from Gunders (2024)', 'Could an app help them use the tip?'], fixed: ['Person A', 'Person B', 'Person C', 'Person D'] },
            { type: 'teacher', ref: 'w4d2-t1' },
            { type: 'cards', title: 'Part 2 · Lead-in: from beer to cookies', numbered: true, items: [
              { label: 'Beer making', text: 'Brewers use grain to make beer.' },
              { label: 'Left-over grain', text: 'After brewing, a lot of grain is left.' },
              { label: 'Flour', text: 'The grain is dried and made into flour.' },
              { label: 'Cookies', text: 'The flour is used to bake cookies and cakes.' }
            ]},
            { type: 'tip', text: 'This is <b>upcycled food</b>: new food made from ingredients that people would usually throw away.' },
            { type: 'cards', pick: 'f3-m1pick', title: 'Would you eat it? Choose the one you would most like to try.', items: [
              { label: 'Cookies', text: 'made from grain left over from beer making' },
              { label: 'Crackers', text: 'made from fruit and vegetable pulp left over from juice' },
              { label: 'Crisps', text: 'made from potato peel' },
              { label: 'Beer', text: 'made from bread that shops could not sell' }
            ]},
            { type: 'talk', title: 'Talk with a partner (3 minutes)', prompts: [
              'Which one did you choose? Which one would you <b>never</b> try? Why?',
              'When you buy a new food, what matters most to you: <b>price</b>, <b>taste</b>, <b>health</b> or <b>the environment</b>?'
            ]},
            { type: 'choose', id: 'f3-m1pred', title: 'Predict: Huang et al. (2024) asked consumers in Taiwan about upcycled food. What mattered most to them?', options: [
              'The health benefits',
              'Helping the environment',
              'Trying something new and unusual'
            ]},
            { type: 'flip', title: 'Part 3 · Vocabulary: eight useful words from the reading', hint: 'You can use these words in your own speaking and writing. Guess the meaning, then turn the card.', items: [
              { front: 'impact (n)', back: 'A strong effect. <i>Food waste has a significant impact on climate change.</i>' },
              { front: 'address (v)', back: 'Start to deal with a problem. <i>Upcycled food could help to address food waste.</i>' },
              { front: 'intention (n)', back: 'A plan to do something. <i>Many people have the intention to shop greener, but don’t.</i>' },
              { front: 'be motivated by', back: 'Have a reason that makes you want to act. <i>Students are often motivated by price.</i>' },
              { front: 'credibility (n)', back: 'The quality of being trusted and believed. <i>Expert support gives a product credibility.</i>' },
              { front: 'transparency (n)', back: 'Being open, so people can see what you do. <i>Shoppers expect transparency about where food comes from.</i>' },
              { front: 'cost-effective (adj)', back: 'Giving good results for the money you spend. <i>Freezing leftovers is a cost-effective habit.</i>' },
              { front: 'uptake (n)', back: 'How many people start to use something new. <i>The uptake of food-sharing apps is growing.</i>' }
            ]},
            { type: 'cloze', id: 'f3-m1w', title: 'Quick check: complete the sentences', list: true, options: ['address', 'cost-effective', 'credibility', 'impact', 'motivated', 'transparency', 'uptake'],
              text: 'Throwing away food has a big {{1}} on the environment.\nGovernments need new laws to {{2}} the problem of food waste.\nMany students are {{3}} by price more than by the environment.\nA brand loses {{4}} if people find out it lied about its products.\nBuying in bulk can be {{5}}, but only if you eat it all.\nFree trials can increase the {{6}} of a new app.',
              answers: ['impact', 'address', 'motivated', 'credibility', 'cost-effective', 'uptake'] },
            { type: 'teacher', ref: 'w4d2-t3' }
          ],
          answers: { title: 'Possible answers', items: [
            ['Recap · Person A', 'Tip 1 (plan before shopping) and Tip 4 (shop your fridge first). A smart inventory app reminds him what he already has.'],
            ['Recap · Person B', 'Tip 2 (love your leftovers) and Tip 3 (freeze your food). Smart recipes help with portion sizes; a food-sharing hub can share the extra food.'],
            ['Recap · Person C', 'Tip 5 (learn your labels — use your senses) and Tip 1 (a simple meal plan). A smart inventory app can explain labels; recipe apps make planning faster.'],
            ['Recap · Person D', 'Tip 1 (plan together) and Tip 4 (use it up). A food-sharing hub and an inventory that tracks spending.'],
            ['Predict', 'Check your prediction when you read the text in the next tab.']
          ]}
        },
        {
          id: 'm4', short: 'Read', minutes: 30, grouping: 'Alone → pair',
          title: 'Reading for gist + Reading for detail: Note-taking',
          goal: 'Read for the main idea first. Then read again and complete the notes.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Reading for gist', items: [
              { who: 'alone', text: '<b>4 minutes.</b> Read Huang et al. (2024) quickly. Don’t stop at new words.' },
              { who: 'alone', text: 'Answer the two gist questions. Was your prediction right?' }
            ]},
            { type: 'sources', ids: ['huang'] },
            { type: 'tip', text: '<b>Terms in the text — just recognise them:</b> non-conventional = unusual · nutritional value = how healthy a food is · green value = how good it is for the environment · novelty = being new · ethical consumption = buying products that don’t cause harm · VAB model = Value → Attitude → Behaviour.' },
            { type: 'quiz', id: 'f3-m4g', title: 'Gist questions', items: [
              { q: '1. What is the main purpose of the text?', options: ['To report a study on why consumers might buy upcycled food', 'To explain how to make upcycled food at home', 'To compare food waste in Taiwan and Europe'], answer: 'To report a study on why consumers might buy upcycled food', why: 'Paragraph C: the study looks at how Taiwanese consumers view and might act towards upcycled food.' },
              { q: '2. What mattered most to the consumers in the study?', options: ['Health', 'Green value', 'Novelty'], answer: 'Health', why: 'Paragraph C: health considerations greatly shape consumer attitudes. Green value and novelty had little effect (paragraph E).' }
            ]},
            { type: 'teacher', ref: 'w4d2-t4' },
            { type: 'steps', title: 'Part 2 · Reading for detail: Note-taking (jigsaw)', items: [
              { who: 'pair', text: 'Student A reads paragraphs <b>A–C</b>. Student B reads paragraphs <b>D–F</b>. (6 minutes)' },
              { who: 'alone', text: 'Complete <b>your</b> notes only (A: gaps 1–2 · B: gaps 3–6).' },
              { who: 'pair', text: '<b>Teach your partner</b> your paragraphs in your own words. They complete the other notes.' },
              { who: 'pair', text: 'Check together. Then check your answers.' }
            ]},
            { type: 'cloze', id: 'f3-m4n', title: 'My notes: Huang et al. (2024)', list: true,
              options: [['upcycled food', 'food-sharing apps', 'new food laws'], ['price', 'health', 'taste'], ['certifications', 'lower prices', 'new recipes'], ['little', 'a strong', 'a negative'], ['practical use and cost', 'colour and shape', 'brand names'], ['the environment', 'food prices', 'farmers’ incomes']],
              text: '<b>A · The problem:</b> about ⅓ of food is wasted. A possible solution: {{1}}.\n<b>C · Main finding:</b> {{2}} shapes consumers’ attitudes most → advertise health benefits.\n<b>D · Ethical consumption matters</b> → businesses should show {{3}} on their packaging.\n<b>E · Surprising result:</b> green value and novelty had {{4}} effect.\n<b>E · Possible reason:</b> consumers may value {{5}} more than green value.\n<b>F · Conclusion:</b> even if consumers don’t care about green value, more uptake still helps {{6}}.',
              answers: ['upcycled food', 'health', 'certifications', 'little', 'practical use and cost', 'the environment'],
              why: ['“…using upcycled food is crucial” (A).', '“…health considerations greatly shape consumer attitudes…” (C).', '“…businesses should get and show certifications for ethical production on their product packaging…” (D).', '“…have little effect on green actions…” (E).', '“…consumers may value practical use and cost-effectiveness over a product’s green value” (E).', '“…increased uptake of these products will nonetheless have benefits for the environment” (F).'] },
            { type: 'tip', text: '<b>Hint for gaps 4–5:</b> in paragraph E, look for the words <b>Interestingly</b> and <b>However</b>.' },
            { type: 'choose', id: 'f3-m4pack', title: 'Part 3 · Advise a start-up: a new brand sells cookies made from beer grain in your city. Which message should go on the packet?', options: [
              '“Good for you: high in fibre and protein”',
              '“Save the planet, one cookie at a time”',
              '“Tasty, filling and great value”'
            ]},
            { type: 'talk', title: 'Convince your partner (5 minutes)', prompts: [
              'Use the study <b>and</b> your own experience. Would the results be the same in your country?',
              'Agree on <b>one</b> message as a pair. Then share it with the class: which message wins?'
            ]},
            { type: 'language', title: 'Useful language for your advice', tabs: false, groups: [
              { label: 'Use the study', phrases: ['The study found that… so…', 'It makes sense that… because…', 'I was (quite) surprised that…'] },
              { label: 'Personal view, carefully', phrases: ['For students like us, price would probably matter more than…', 'I suspect the results might be different in… because…', 'I’m not convinced that… would work here.'] }
            ]},
            { type: 'teacher', ref: 'w4d2-t5' }
          ],
          answers: { title: 'Gist and notes', items: [
            ['Prediction', 'Health mattered most. Green value and novelty had little effect — a surprise for the researchers too.'],
            ['VAB model', '<img src="assets/week4/vab-model.svg" alt="The Value–Attitude–Behaviour model: health values lead to attitude towards upcycled foods, which leads to green behavioural intentions; green perceived value, product novelty and moral consumption also point to green behavioural intentions."><br>4 factors: health · green value · novelty · ethical consumption.'],
            ['What businesses can do', 'Advertise the health benefits (C) · show ethical certifications (D) · show practical benefits, including cost (E).']
          ]}
        },
        {
          id: 'm6', short: 'Three texts', minutes: 30, grouping: 'Alone → pair',
          title: 'Building understanding across texts + Synthesizing',
          goal: 'See what each text focuses on. Then say in one minute who should reduce food waste.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Building understanding across texts', items: [
              { who: 'alone', text: 'You need three texts: Gunders (2024), Castro et al. (2023) and Huang et al. (2024).' },
              { who: 'alone', text: 'Do tasks 1–3. Use your notes; look back at the texts only if needed.' },
              { who: 'pair', text: 'Check with a partner.' }
            ]},
            { type: 'sources', ids: ['gunders', 'castro', 'huang'] },
            { type: 'figure', src: 'assets/week4/three-actors.svg', alt: 'Three actors in the food system: businesses, governments and consumers.', caption: 'Three actors (= groups with a role) in the food waste cycle' },
            { type: 'sort', id: 'm6s', single: true, title: '1 · What is the main focus of each text?', hint: '<b>Drag</b> each text to its main focus — or tap a text, then tap a focus.', buckets: [
              { label: 'Businesses and food makers should help consumers eat green food.', letter: 'a' },
              { label: 'Consumers can use technology to waste less at home.', letter: 'b' },
              { label: 'Governments should support new technology, and consumers should waste less at home.', letter: 'c' }
            ], items: [
              { text: 'Castro et al. (2023)', answer: 1 },
              { text: 'Gunders (2024)', answer: 2 },
              { text: 'Huang et al. (2024)', answer: 0 }
            ]},
            { type: 'quiz', id: 'm6q', title: '2 · Overall, what can we learn from the three texts?', items: [
              { q: 'Choose the best summary.', options: ['Consumers are mainly responsible, but businesses also help.', 'To reach the U.N. goals, all actors must reduce their waste.', 'New technology is the only way to reach the U.N. goals.', 'More government money is not needed.'], answer: 'To reach the U.N. goals, all actors must reduce their waste.', why: 'Each text looks at different actors. Together they show that businesses, governments and consumers all have a role.' }
            ]},
            { type: 'tip', text: 'Task 3 is a <b>synthesised</b> summary (= ideas from different texts brought together in one paragraph). It is a model for your one-minute talk.' },
            { type: 'cloze', id: 'm6c', title: '3 · Complete the synthesised summary', options: ['consumers', 'environmental impacts', 'Gunders (2024)', 'new technologies', 'these foods', 'upcycled foods'],
              text: '{{1}} argues that reducing food waste will aid progress toward achieving the U.N. Sustainable Development Goal to cut food loss and waste in half by 2030; however, this will require the rapid uptake of {{2}}. Huang et al. (2024) suggests that {{3}} could be one such technology that has the potential to reduce the {{4}} of food waste. Encouraging {{5}} to eat more of {{6}} could therefore help with achieving the U.N. goal.',
              answers: ['Gunders (2024)', 'new technologies', 'upcycled foods', 'environmental impacts', 'consumers', 'these foods'] },
            { type: 'teacher', ref: 'w4d2-t6' },
            { type: 'choose', id: 'm7c', title: 'Part 2 · Synthesizing — which statement do you agree with most?', options: [
              '1. There are many easy ways to reduce food waste at home, so consumers are mostly responsible.',
              '2. Governments are mainly responsible because they can pay for good new technologies.',
              '3. Businesses with green products should do more to help consumers use them.'
            ]},
            { type: 'language', title: 'Language for your one-minute talk', tabs: false, groups: [
              { label: 'Refer to a source', phrases: ['According to Gunders (2024), …', 'Huang et al. (2024) found that…', 'Castro et al. (2023) focus more on…'] },
              { label: 'Compare the texts', phrases: ['All three texts agree that…', 'Whereas Gunders (2024) stresses…, Huang et al. (2024)…'] },
              { label: 'Give and justify your view', phrases: ['On balance, I’d argue that… are mainly responsible, because…', 'The strongest evidence for this is…', 'This seems to suggest that…', 'That said, … still have a role, since…'] }
            ]},
            { type: 'model', title: 'Example talk (about 45 seconds)', text: '“<b>According to</b> Gunders (2024), governments need to invest in new technology, <b>whereas</b> Castro et al. (2023) <b>focus more on</b> what consumers can do at home with apps. Huang et al. (2024) <b>found that</b> businesses can help by showing the health benefits of upcycled food. <b>On balance, I’d argue that</b> governments are mainly responsible, <b>because</b> they can change the whole system. <b>That said,</b> consumers <b>still have a role</b>, <b>since</b> most waste happens at home.”' },
            { type: 'steps', items: [
              { who: 'alone', text: '<b>3 minutes.</b> Make notes: who is mainly responsible? Use two or three texts.' },
              { who: 'pair', text: 'Speak for <b>one minute</b>. Your partner listens and ticks the checklist.' },
              { who: 'pair', text: 'Swap. Then tell your partner one thing they did well.' },
              { who: 'class', text: '<b>Class vote:</b> governments, businesses or consumers? Did anyone change their mind? Why?' }
            ]},
            { type: 'fields', title: 'My notes for one minute', fields: [
              { id: 'm7-1', label: 'Who is mainly responsible? Notes from the texts + my reasons', placeholder: 'According to Gunders (2024)… whereas Castro et al. (2023)… On balance, I’d argue that… because…', rows: 4 }
            ]},
            { type: 'checklist', id: 'f3-m7chk', title: 'Peer check: did your partner…', items: [
              'refer to at least two texts by name (According to…, … found that…)?',
              'compare the texts (whereas…, All three texts agree that…)?',
              'give a clear view with a reason (On balance, I’d argue that… because…)?',
              'mention another actor’s role (That said, …)?'
            ]},
            { type: 'teacher', ref: 'w4d2-t7' }
          ],
          answers: { title: 'Ideas for your talk · how each actor can help', items: [
            ['Castro et al. (2023)', '<b>Businesses:</b> apps and food delivery services can reduce waste; supermarket layouts make people buy too much. <b>Consumers:</b> can use technology to waste less at the three stages.'],
            ['Gunders (2024)', '<b>Businesses:</b> technology to store food better, sell food close to its date and track waste. <b>Governments:</b> big investment in technology; laws that stop waste. <b>Consumers:</b> 5 tips to waste less at home.'],
            ['Huang et al. (2024)', '<b>Businesses:</b> use upcycled ingredients; advertising to help consumers buy upcycled food. <b>Consumers:</b> can choose to buy upcycled food.']
          ]}
        },
        {
          id: 'm8', short: 'Results + write', minutes: 40, grouping: 'Alone → pair',
          title: 'Academic Skills: Explaining results + Academic writing skills: Discussing implications',
          goal: 'Notice how researchers report results and implications. Then write your own paragraph.',
          blocks: [
            { type: 'key', title: 'Part 1 · Academic Skills: Explaining results', points: [
              'Huang et al. (2024) is an <b>empirical study</b> (= the researchers collect data and study it).',
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
            { type: 'teacher', ref: 'w4d2-t2' },
            { type: 'key', title: 'Part 2 · Discussing implications: what are they?', points: [
              '<b>Implications</b> = what a result means, how we can use it, or who it can affect.',
              'Two ways to write about implications: <b>a)</b> use <b>hedging</b> (may, might, could, this suggests…) · <b>b)</b> make a <b>recommendation</b> to a group (should therefore consider…, it would be advisable for…).'
            ]},
            { type: 'passage', id: 'm8p1', title: 'Paragraph C from Huang et al. (2024)', text: 'In Taiwan, the effect of upcycled food on how consumers act is not well-known. This study aimed to understand this by using the Value-Attitude-Behaviour (VAB) model. The VAB model looks at factors that affect consumers’ intention to purchase environmentally friendly products, such as a how healthy a product is, the products perceived green value, product novelty, and ethical consumption. The model was used in this study to measure how Taiwanese consumers view and might act towards upcycled food. The findings of the study show that health considerations greatly shape consumer attitudes towards upcycled food. These considerations then encourage environmentally friendly actions. This suggests that consumers who value health might be interested in buying upcycled products. Therefore, food businesses should clearly advertise the health benefits of upcycled food, such as their higher nutritional value or lack of heavily processed ingredients. Working with nutritionists and health organizations could also build trust and credibility, perhaps by promoting health-focused recipes or eating plans approved by health professionals.' },
            { type: 'quiz', id: 'm8q1', title: 'Paragraph C', items: [
              { q: '1. What model did they use, and why?', options: ['The VAB model — to see how Taiwanese consumers think about and might act towards upcycled food', 'The VAB model — to measure how much food Taiwanese businesses waste', 'A price model — to compare upcycled and normal food'], answer: 'The VAB model — to see how Taiwanese consumers think about and might act towards upcycled food', why: '“The model was used in this study to measure how Taiwanese consumers view and might act towards upcycled food.”' },
              { q: '2. What were the results?', options: ['Health shapes how people feel about upcycled food, and this leads to green actions.', 'Most people don’t like the taste of upcycled food.', 'Upcycled food costs more than normal food.'], answer: 'Health shapes how people feel about upcycled food, and this leads to green actions.', why: '“…health considerations greatly shape consumer attitudes… These considerations then encourage environmentally friendly actions.”' },
              { q: '3. Which phrases describe the results?', options: ['The findings of the study show that… / This suggests that…', 'In Taiwan… / This study aimed to…', 'Therefore… / perhaps…'], answer: 'The findings of the study show that… / This suggests that…', why: '“show” = sure; “suggests” = less sure.' }
            ]},
            { type: 'talk', title: 'Paragraph C — discuss with a partner', prompts: [
              '1. Highlight the <b>hedging</b> and the <b>advice</b> in the paragraph.',
              '2. Why did the authors use hedging?',
              '3. Why did they give advice to food businesses?'
            ]},
            { type: 'passage', id: 'm8p2', title: 'Paragraph E: a surprising result', text: 'Interestingly, the study found that product novelty and the perceived green value have little effect on green actions among Taiwanese consumers. This result was not expected as previous studies have found a strong relationship between green value and green behaviours (Zhuang, et al., 2021). However, Imtiyaz et al. (2021) point out that consumers may value practical use and cost-effectiveness over a product’s green value. This finding suggests a shift in marketing strategy that emphasizes the practical benefits and relevance to daily life of upcycled food products should be considered. This may help to increase consumer acceptance and market penetration of upcycled foods.' },
            { type: 'quiz', id: 'f3-m8q2', title: 'Paragraph E', items: [
              { q: '1. Why does the paragraph start with “Interestingly”?', options: ['The result was a surprise.', 'The authors give advice.', 'The authors are very sure.'], answer: 'The result was a surprise.', why: 'The next sentence says: “This result was not expected…”.' },
              { q: '2. What does the “However” sentence do?', options: ['It gives a possible explanation from another study.', 'It adds a second result of this study.', 'It disagrees with the authors’ own result.'], answer: 'It gives a possible explanation from another study.', why: 'Imtiyaz et al. (2021): consumers may value practical use and cost more than green value.' },
              { q: '3. Which words make the implications careful, not too strong?', options: ['suggests · should be considered · may', 'found · was not expected', 'Interestingly · However'], answer: 'suggests · should be considered · may', why: 'Hedging (suggests, may) and a careful recommendation (should be considered).' }
            ]},
            { type: 'figure', src: 'assets/week4/app-features.svg', alt: 'Four app functions: smart inventory, smart recipes, food-sharing hub and portion-ready food delivery, with what each can do.', caption: 'Part 3 · Write: remember yesterday’s apps', credit: 'Adapted from Castro et al. (2023)', size: 'wide' },
            { type: 'model', title: 'Your paragraph begins like this', text: 'Apps like No Waste and Plus Fridge Pal can reduce waste at the acquisition stage as they allow consumers to track what they need and what they don’t, reducing unnecessary purchases. These apps also provide a summary of past shopping behaviours, showing which items were bought and not used. …' },
            { type: 'key', title: 'Continue the paragraph: write about the implications of these apps', compare: [
              { label: 'Choose 1–2 groups', text: 'businesses · consumers · food producers · people who don’t have enough food' },
              { label: 'Possible implications', text: 'money · the environment · food security · health · your own idea' },
              { label: 'Language', text: 'Use <b>hedging</b> (This suggests that…, could potentially…) and one <b>recommendation</b> (… should therefore consider…, It would be advisable for…).' }
            ]},
            { type: 'model', title: 'Example — about a different app (Too Good To Go)', text: 'These results <b>suggest</b> that apps like Too Good To Go <b>could potentially</b> help cafés earn money from food they would throw away. Customers <b>are also likely to</b> save money. Cafés <b>should therefore consider</b> joining the app.', note: 'Hedging (suggest, could potentially, are likely to) + a recommendation (should therefore consider). Now write about <b>your</b> apps and <b>your</b> groups.' },
            { type: 'language', title: 'Language for implications', tabs: false, groups: [
              { label: 'Hedging', phrases: ['This suggests that…', 'For consumers, this could potentially…', '… are likely to…', 'As a result, … may…'] },
              { label: 'Recommendations', phrases: ['… should therefore consider + -ing', 'It would be advisable for… to…', 'It might be worth + -ing…', '… could benefit from + -ing…'] }
            ]},
            { type: 'fields', id: 'm8f', title: 'My paragraph', fields: [
              { id: 'm8-w', label: 'Continue the paragraph with the implications of these apps', placeholder: 'This suggests that… For consumers, this could potentially… Supermarkets should therefore consider…', rows: 7 }
            ], send: true, sendLabel: 'Share your paragraph with your partner', sendHint: 'Send a copy to your partner. Only they will see it. Then read theirs.' },
            { type: 'talk', title: 'Read your partner’s paragraph', prompts: ['Who did your partner write about?', 'What implications did they write?', 'Which hedging did they use?', 'Is their recommendation clear and polite?'] },
            { type: 'teacher', ref: 'w4d2-t8' },
            { type: 'checklist', id: 'f3-m8can', title: 'Stage 1 · I can now…', meter: ['ticked', 'Well done — stage complete!'], items: [
              'explain what upcycled food is and what makes people buy it',
              'bring ideas from three texts together in a one-minute talk',
              'tell how sure researchers are from their verbs (show / suggest / may indicate)',
              'write implications with hedging and a polite recommendation'
            ]}
          ],
          answers: { title: 'Results and Paragraph C', items: [
            ['Explaining results · Certainty meter', '<img src="assets/week4/certainty-verbs.svg" alt="A certainty meter: results show / mean (certain), results suggest / indicate (less certain), results may suggest / might indicate / could indicate (least certain).">'],
            ['C · Implications', 'People who care about health might buy upcycled food. Businesses should advertise the health benefits and work with health experts to build trust.'],
            ['C · Language', '<b>Hedging:</b> This suggests that · might be interested · could also build · perhaps. <b>Advice:</b> food businesses should clearly advertise…'],
            ['C · Why hedge?', 'We can’t be sure how the results will be used. There may be other uses that nobody has thought of.'],
            ['C · Why advice?', 'The authors want to show that their results are useful for businesses.'],
            ['More ways to recommend', 'should therefore consider · it would be advisable for… to… · it might be worth… · … could benefit from…']
          ]}
        }
      ]
    },

    /* ───────────────────────── 5A Discussion skills 1 ───────────────────────── */
    {
      id: 'discuss', number: '02', code: '5A', minutes: 120,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills 1',
      subtitle: 'Win an argument fairly: judge real arguments, build a toolkit, then negotiate a decision',
      outcome: 'Judge if an argument is strong, practise negotiation language, plan your group presentation, and think about your groupwork.',
      activities: [
        {
          id: 'd1', short: 'Warm-up + words', minutes: 20, grouping: 'Two lines → pairs',
          title: 'Warmer: Speed Debating + Lead-in + Vocabulary',
          goal: 'Argue for a side in one minute. Share your view on modern farming. Learn eight useful words.',
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
            { type: 'language', title: 'Try to use one from each box', tabs: false, groups: [
              { label: 'Make your case', phrases: ['The main advantage of… is that…', 'What really makes… better is…', 'Just think about…'] },
              { label: 'Push back', phrases: ['I take your point, but…', 'That may be true, but have you considered…?', 'Even so, I’d still say…'] }
            ]},
            { type: 'talk', title: 'Back in your seat — talk with your partner', prompts: [
              'a) Was it easy to disagree with your classmates?',
              'b) Were your arguments convincing (= did they change minds)? Were theirs?',
              'c) How did it feel to argue for a side you don’t agree with?'
            ]},
            { type: 'teacher', ref: 'w4d2-t9' },
            { type: 'choose', id: 'f3-d1c', title: 'Part 2 · Lead-in: modern farming causes problems. Which one worries you most?', options: [
              'Health problems (e.g. chemicals in food)',
              'Environmental damage (e.g. soil, water, forests)',
              'Animal welfare (how farm animals are treated)'
            ]},
            { type: 'talk', prompts: [
              'Find someone who chose differently. Explain your choice in 30 seconds.',
              'Has anything in the news or your own life made you worry about this?'
            ]},
            { type: 'flip', title: 'Part 3 · Vocabulary: eight useful words from the discussion', hint: 'All eight are useful in any academic discussion. Guess, then turn the card.', items: [
              { front: 'consequence', back: 'A result of an action, often a bad one. <i>Food waste is one consequence of overbuying.</i>' },
              { front: 'pressing', back: 'Urgent; it needs action now. <i>Water shortage is a pressing issue in many regions.</i>' },
              { front: 'prioritise', back: 'Treat something as most important and deal with it first. <i>We should prioritise public health.</i>' },
              { front: 'valid', back: 'Reasonable and acceptable. <i>You make a valid point, but…</i>' },
              { front: 'dismissive', back: 'Not taking an idea seriously. <i>Please don’t be dismissive of my example.</i>' },
              { front: 'implications', back: 'Possible effects or results in the future. <i>What are the implications for small farmers?</i>' },
              { front: 'represent', back: 'Be a typical example of a bigger group. <i>One farm doesn’t represent the whole industry.</i>' },
              { front: 'interconnected', back: 'Linked, so each part affects the others. <i>Health and the environment are interconnected.</i>' }
            ]},
            { type: 'cloze', id: 'f3-d1w', title: 'Quick check: complete what the students might say', list: true, options: ['consequence', 'dismissive', 'interconnected', 'pressing', 'prioritise', 'represent', 'valid'],
              text: 'Climate change is the most {{1}} issue — we need to act now.\nI think you’re being a bit {{2}}. My example is important too.\nBoth of you have {{3}} points, but…\nOne small study doesn’t {{4}} the whole world.\nIf people are sick, how can we {{5}} the environment?\nThese problems are {{6}}: one makes the others worse.',
              answers: ['pressing', 'dismissive', 'valid', 'represent', 'prioritise', 'interconnected'] }
          ],
          answers: { items: [
            ['Vocabulary', 'You will hear all eight words in the recording in the next tab. Listen for them!']
          ]}
        },
        {
          id: 'd3', short: 'Listen + judge', minutes: 30, grouping: 'Alone → pairs',
          title: 'Discussion Sample + Making a strong argument',
          goal: 'Listen to a student discussion. Then decide which arguments are strong and why.',
          blocks: [
            { type: 'key', title: 'Part 1 · Discussion Sample: the negotiation question', points: ['Which of the consequences of the modern agricultural production system is the most serious? <b>a)</b> health problems <b>b)</b> environmental damage <b>c)</b> animal rights violations. Give examples from the regions you have researched.', '<i>In simple words: modern farming causes problems. Which problem is the worst — for people’s health, for the environment, or for animals?</i>'] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the gist questions. Listen once and answer them.' },
              { who: 'alone', text: 'Read the detail questions. Listen again and answer them.' },
              { who: 'pair', text: 'Compare. Then open the transcript to check.' }
            ]},
            { type: 'listening', source: 'DEC15 sample discussion', title: 'Negotiation — alternative ending (students don’t all agree)', videoId: '', clip: 'your teacher plays the recording', transcripts: [['negotiation-ending2', 'Transcript (open after you check)']] },
            { type: 'quiz', id: 'd2q', title: 'Gist: after the first listening', items: [
              { q: 'a) Do the students all agree at the start?', options: ['Yes', 'No'], answer: 'No', why: 'They argue for the three different options.' },
              { q: 'b) Do the students all agree at the end?', options: ['Yes', 'No'], answer: 'No', why: 'Student 4 still says health is the biggest problem.' },
              { q: 'c) Does anyone change their opinion?', options: ['Yes — the animal rights student agrees the environment may be most serious', 'No — everyone keeps the same opinion'], answer: 'Yes — the animal rights student agrees the environment may be most serious', why: '“Yeah, I suppose you have a point there… Maybe this is the most serious consequence.”' }
            ]},
            { type: 'quiz', id: 'f3-d2d', title: 'Detail: after the second listening', items: [
              { q: '1. How does Student 1 (UK) support her view on the environment?', options: ['With figures from the UN Environment Programme', 'With a story about her own farm', 'With a quote from a famous scientist'], answer: 'With figures from the UN Environment Programme', why: 'Up to 33% of the world’s soils are already degraded, and over 90% could become degraded by 2050.' },
              { q: '2. Why does Student 4 (Kenya) think health is the biggest worry?', options: ['Chemicals and resistant bacteria are big threats to people.', 'Farm animals often carry diseases.', 'Healthy food is too expensive.'], answer: 'Chemicals and resistant bacteria are big threats to people.', why: '“The effect of chemicals and antibiotic-resistant bacteria are massive threats to our health.”' },
              { q: '3. Why does Student 5 (Netherlands) say the dairy farm example is weak?', options: ['One small farm does not represent a global issue.', 'Dairy farms are not part of industrial farming.', 'The cows on the farm are treated badly.'], answer: 'One small farm does not represent a global issue.', why: '“…a small-scale operation which does not accurately represent this global issue.”' },
              { q: '4. What is Student 1’s main point near the end?', options: ['Everything is linked, but the root is the environment.', 'Animal rights are more important than health.', 'The group should vote on the answer.'], answer: 'Everything is linked, but the root is the environment.', why: '“It’s all interconnected, but the root starts with our environment.”' },
              { q: '5. How does the discussion end?', options: ['They accept that they don’t all agree.', 'They all choose health.', 'The teacher stops them.'], answer: 'They accept that they don’t all agree.', why: '“Do you think it’s okay if we don’t reach an agreement?” — “I think so.”' }
            ]},
            { type: 'tip', text: '<b>Hint for question 4:</b> listen for the word <b>interconnected</b>.' },
            { type: 'teacher', ref: 'w4d2-t10' },
            { type: 'talk', title: 'Part 2 · Making a strong argument — talk about the discussion', prompts: [
              'a) Which arguments were the strongest? Why?',
              'b) Which were weaker? What was missing?',
              'c) Which option would <b>you</b> choose — health, environment or animal rights? Has the discussion changed your view from the lead-in?'
            ]},
            { type: 'sort', id: 'f3-d3s', title: 'How do you make a strong argument?', hint: '<b>Drag</b> each idea to “Do…” or “Don’t…”.', buckets: [
              { label: 'Do…' }, { label: 'Don’t…' }
            ], items: [
              { text: 'Support your point with a source people trust.', answer: 0 },
              { text: 'Use one personal story as your main reason.', answer: 1 },
              { text: 'Give relevant examples and numbers.', answer: 0 },
              { text: 'Use strong feelings instead of evidence.', answer: 1 },
              { text: 'Respond to other speakers’ points fairly.', answer: 0 },
              { text: 'Ignore arguments that make yours look weak.', answer: 1 },
              { text: 'Repeat your main reason briefly near the end.', answer: 0 },
              { text: 'Never change your opinion.', answer: 1 }
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
            { type: 'teacher', ref: 'w4d2-t11' }
          ],
          answers: { items: [
            ['Strong argument · Stronger vs weaker', '<img src="assets/week4/argument-strength.svg" alt="Stronger arguments use evidence, statistics from reputable sources and clear examples; weaker arguments rely on emotional appeal or overgeneralised personal experience.">'],
            ['Strong argument · a) Strongest', 'Arguments with evidence or numbers from research (the UN soil figures; 37 animals per person in the Netherlands) and clear examples (soil degradation, deforestation, pollution).'],
            ['Strong argument · b) Weaker', 'Strong feelings (“meat is murder”) or one personal story used as proof for everything (getting sick; the family dairy farm). A personal story is OK, but only as extra support for evidence.'],
            ['Strong argument · Problems 1–4', '1) Student 4 ignores Student 1’s examples (deforestation, pollution) — listen and be fair to others. 2) A personal example said too strongly (“I’m sure…”) — say “I believe it was from…” or add expert support (“my doctor told me…”). 3) One family farm does not show a global problem; the speaker may also be biased (the family business). 4) “Meat is murder” is too emotional and could feel like an attack.']
          ]}
        },
        {
          id: 'd5', short: 'Convince + disagree', minutes: 30, grouping: 'Pairs',
          title: 'Negotiation language 2: Presenting a convincing line of argument + Disagreeing + Paraphrasing',
          goal: 'Learn phrases to sound convincing, disagree politely and build on a partner’s idea. Then use them.',
          blocks: [
            { type: 'key', title: 'Part 1 · Negotiation language 2: Phrases for presenting a convincing line of argument', points: [
              'A convincing argument = <b>evidence</b> + a <b>confident claim</b> + an <b>invitation</b> to agree.',
              'Sound confident, but not 100% sure: “I’m sure…” about one personal story sounds weak.'
            ]},
            { type: 'figure', src: 'assets/week4/negotiation-map.svg', alt: 'A negotiation map: present your argument, respond to others, evaluate their contributions, and be flexible.', caption: 'The negotiation skills we practise today', size: 'wide' },
            { type: 'chat', title: 'How does Student 1 build a convincing argument?', lines: [
              ['Student 1', 'Yes, I admit that those are big problems, but I think you’re being a bit dismissive. Soil degradation leads to reduced fertility… <mark>According to the United Nations Environment Programme</mark>, up to 33% of the world’s soils are already degraded… <mark>We can’t deny</mark> the negative impacts of polluting the water we need to drink…'],
              ['Student 5', '<mark>In our research we learnt that</mark> in the Netherlands about 37 land-based animals are killed per person annually. That doesn’t even include seafood! <mark>Surely that must be</mark> the most serious consequence of agricultural production.'],
              ['Student 4', '<mark>Don’t you think that</mark> as human beings, the direct impact on human health <mark>should be our biggest worry?</mark>']
            ]},
            { type: 'sort', id: 'f3-d4s', title: 'Sort the phrases', hint: 'Does each phrase <b>use evidence</b>, <b>assert</b> a position strongly, or <b>encourage others to agree</b>?', buckets: [
              { label: 'Using evidence' }, { label: 'Strongly (re)asserting a position' }, { label: 'Encouraging others to agree with a position' }
            ], items: [
              { text: 'According to (a reputable source), …', answer: 0 },
              { text: 'One study which was done in (X) showed that…', answer: 0 },
              { text: 'Well, the statistics show that…', answer: 0 },
              { text: 'It’s clear that…', answer: 1 },
              { text: 'We can’t deny…', answer: 1 },
              { text: 'I have no doubt that…', answer: 1 },
              { text: 'Wouldn’t you agree that…?', answer: 2 },
              { text: 'Don’t you think (X) should be our biggest worry?', answer: 2 },
              { text: 'Shouldn’t we focus on…?', answer: 2 }
            ]},
            { type: 'talk', prompts: ['Look at the phrases for <b>encouraging others to agree</b>. What do they have in common? Why do they work?'] },
            { type: 'teacher', ref: 'w4d2-t12' },
            { type: 'talk', title: 'Part 2 · Negotiation language 2: Disagreeing — discuss', prompts: ['a) What happens if people always agree in academic discussions?', 'b) Why should we be polite when we disagree?'] },
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
            { type: 'tip', text: '<b>Paraphrase</b> = say someone’s idea again in your own words. It shows you listened — and it makes your disagreement sound fair.' },
            { type: 'chat', title: 'Part 3 · Paraphrasing — how does each speaker repeat the last idea?', lines: [
              ['Student 1', 'Hmmmm… I’m not sure either of you is considering the broader picture. Environmental damage affects not just us but every living organism. If we continue like this, we’ll have no viable land for farming, nor clean water. It impacts biodiversity, climate change—everything!'],
              ['Student 4', '<mark>That’s true, environmental issues are significant,</mark> but health problems are immediate. Look at the health care costs and the impact on life expectancy. If we don’t prioritize human health, we can’t maintain a functioning society.'],
              ['Student 5', '<mark>I understand that human-centric problems are important because they affect us,</mark> but violating animal rights is an ethical issue. I mean, meat is murder! Shouldn’t ethics guide all our other decisions?'],
              ['Student 1', '<mark>You’re right. Ethics are important,</mark> but without a healthy environment, there won’t be any animals to protect, or humans to keep healthy! It’s all interconnected, but the root starts with our environment.']
            ]},
            { type: 'talk', prompts: ['a) Look at the highlighted parts. How does each speaker repeat the last speaker’s idea?', 'b) Do they agree or disagree with the last speaker? How?'] },
            { type: 'language', title: 'Your toolkit: convince, disagree, paraphrase', tabs: false, groups: [
              { label: 'Convince', phrases: ['According to…, …', 'It’s clear that…', 'Wouldn’t you agree that…?'] },
              { label: 'Disagree politely', phrases: ['I’m not sure I agree with that, because…', 'I’m afraid we don’t see eye to eye there.', 'I don’t know if that’s entirely true.'] },
              { label: 'Paraphrase, then add your view', phrases: ['So what you’re saying is that… However, …', 'You’re right about…, though I’d argue that…', 'I agree with your point about…, but we also need to look at…'] }
            ]},
            { type: 'spinner', id: 'f3-d5sp', title: 'Practice game: spin a question and a phrase', text: 'Student A says yes, Student B says no. Talk for 2 minutes. Before you disagree, paraphrase your partner. Use the phrase from the spinner — and two more from the toolkit.', reels: [
              { label: 'Question', items: ['Should supermarkets have to give unsold food to charity?', 'Should “best before” dates be removed?', 'Should meat have an extra tax?', 'Are food apps the best way to cut home waste?', 'Should university cafés ban plastic packaging?', 'Should schools teach cooking?'] },
              { label: 'Use this phrase', items: ['According to…, …', 'It’s clear that…', 'Wouldn’t you agree that…?', 'I’m afraid we don’t see eye to eye there.', 'So what you’re saying is that… However, …', 'You’re right about…, though I’d argue that…'] }
            ]},
            { type: 'checklist', id: 'f3-d5chk', title: 'Peer check: did your partner…', items: [
              'use at least two phrases from the toolkit?',
              'paraphrase you before disagreeing?',
              'disagree politely, with a reason?'
            ]},
            { type: 'teacher', ref: 'w4d2-t14' }
          ],
          answers: { items: [
            ['Phrases · Using evidence', 'According to… · One study which was done in (X) showed that… · Well, the statistics show that…'],
            ['Phrases · Strongly (re)asserting', 'It’s clear that… · We can’t deny… · I have no doubt that…'],
            ['Phrases · Encouraging others to agree', 'Wouldn’t you agree…? · Don’t you think…? · Shouldn’t we…? — all <b>negative questions</b> (questions with “not”). We use them when we expect the other person to agree.'],
            ['Remember', 'These phrases help you sound sure. But a strong argument also needs logic and evidence.'],
            ['Disagreeing · a', 'Less critical thinking, fewer new ideas, a narrow view, and weak problem solving.'],
            ['Disagreeing · b', 'Rude disagreement shows you don’t want to hear other views. The other person may be afraid to share again.'],
            ['Paraphrasing · a', '“Environmental damage affects not just us but every living organism” → “environmental issues are significant” · “If we don’t prioritize human health, we can’t maintain a functioning society” → “human-centric problems are important because they affect us” · “violating animal rights is an ethical issue… Shouldn’t ethics guide all our other decisions?” → “Ethics are important”.'],
            ['Paraphrasing · b', 'They first accept the idea (That’s true / I understand that… / You’re right), then say <b>but</b> and give a different view.']
          ]}
        },
        {
          id: 'd7', short: 'Evaluate + negotiate', minutes: 15, grouping: 'Pairs → groups of 3',
          title: 'Responding to others’ contributions: Evaluation + Flexibility + Mini negotiation',
          goal: 'Judge other speakers’ ideas politely and change your mind when the evidence is good. Then negotiate.',
          blocks: [
            { type: 'chat', title: 'Part 1 · Negotiation language 2: Evaluation — did the students answer well? Why?', lines: [
              ['Student 4', 'I don’t really agree with you there. I’m not sure that we should be so concerned about soil. Don’t you think that as human beings, the direct impact on human health should be our biggest worry? …'],
              ['Student 1', '<mark>Yes, I admit that those are big problems, but I think you’re being a bit dismissive.</mark> Soil degradation leads to reduced fertility and affects the land’s ability to support agricultural crops. According to the United Nations Environment Programme, up to 33% of the world’s soils are already degraded, and over 90% could become degraded by 2050.'],
              ['Student 4', 'My family owns a dairy farm, and they treat the cows very well. If they had to give the animals more space, it would be really bad for the business.'],
              ['Student 5', '<mark>But it sounds like that is a small-scale operation which does not accurately represent this global issue.</mark> In our research we learnt that in the Netherlands about 37 land-based animals are killed per person annually.']
            ]},
            { type: 'sort', id: 'd7s', single: true, title: 'Match the phrases (1–5) to the meanings (A–E)', hint: 'Why would you say each phrase in a discussion?', buckets: [
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
            { type: 'steps', title: 'Part 3 · Use it: mini negotiation (6 minutes)', items: [
              { who: 'group', text: 'Groups of 3. Each person spins once to get a role and a phrase.' },
              { who: 'group', text: 'Discuss today’s focus question. Use evidence from today’s texts.' },
              { who: 'group', text: 'Try to agree in 6 minutes. It’s OK to change your mind!' },
              { who: 'group', text: 'Afterwards, tick the checklist for one groupmate.' }
            ]},
            { type: 'spinner', id: 'f3-d7sp', title: 'Who is mainly responsible for reducing food waste?', text: 'Argue for your role first. Evaluate the others’ ideas politely. Be flexible if their evidence is strong.', reels: [
              { label: 'Argue that the main role belongs to', items: ['governments', 'businesses', 'consumers'] },
              { label: 'Use this phrase', items: ['Both of you have valid points, but…', 'That’s not always the case though.', 'I’m not sure you’re considering the broader picture.', 'I hadn’t considered that.', 'You do make a very strong case.', 'Wouldn’t you agree that…?'] }
            ]},
            { type: 'fields', title: 'Our group’s decision', fields: [
              { id: 'f3-d7-agree', label: 'Who is mainly responsible? Our decision (or why we could not agree) + our best piece of evidence', placeholder: 'In the end, we agreed that… because… / We didn’t agree, but…', rows: 3 }
            ]},
            { type: 'steps', items: [
              { who: 'class', text: 'Each group reads out its decision. Class vote: which group had the most convincing evidence?' }
            ]},
            { type: 'checklist', id: 'f3-d7chk', title: 'Peer check: did your groupmate…', items: [
              'support their view with one of today’s texts?',
              'evaluate another speaker’s idea politely?',
              'show flexibility at least once (I hadn’t considered that…)?',
              'help the group move towards an agreement?'
            ]},
            { type: 'tip', text: 'Want every phrase in one place? Open <b>Extra practice → Full phrase list</b> (side menu).' },
            { type: 'teacher', ref: 'w4d2-t16' }
          ],
          answers: { items: [
            ['Evaluation · Student 1', 'Yes: Student 1 accepts the point (“Yes, I admit…”), says Student 4 is being dismissive (= not taking it seriously), then gives a number from a trusted source.'],
            ['Evaluation · Student 5', 'Yes: Student 5 shows the example is too small for a global issue and gives a number from their research.'],
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
            { type: 'checklist', id: 'f3-d9can', title: 'Stage 2 · I can now…', meter: ['ticked', 'Well done — ready for Thursday!'], items: [
              'say why an argument is strong or weak',
              'support my view with evidence and invite others to agree',
              'disagree politely and paraphrase before I add my view',
              'change my mind gracefully when the evidence is good',
              'plan a group presentation with all three articles'
            ]},
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
    },
    {
      id: 'x4', short: 'Match the reasons', minutes: 10, grouping: 'Alone', category: 'Extra listening',
      title: 'Discussion Sample: match the reasons to the arguments',
      goal: 'Listen again (or read the transcript). Match each reason to its argument.',
      blocks: [
        { type: 'sources', ids: ['negotiation-ending2'] },
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
        ]}
      ]
    },
    {
      id: 'x5', short: 'What would you say?', minutes: 10, grouping: 'Alone → pair', category: 'Extra speaking',
      title: 'Evaluation: what would you say?',
      goal: 'Write a polite response for five discussion situations. Then say them to a partner.',
      blocks: [
        { type: 'tip', text: '<b>Hint for the situations below:</b> say something kind first (“That’s interesting…”), then ask a question or add your point (“…but do you know if…?”).' },
        { type: 'fields', title: 'What would you say?', fields: [
          { id: 'd7-a', label: 'a. Another speaker makes a strong point.', rows: 1 },
          { id: 'd7-b', label: 'b. Their point or example is not relevant (= not connected to the topic).', rows: 1 },
          { id: 'd7-c', label: 'c. Their example is old.', rows: 1 },
          { id: 'd7-d', label: 'd. They have misunderstood the evidence (the text).', rows: 1 },
          { id: 'd7-e', label: 'e. They don’t have enough evidence for their claim.', rows: 1 }
        ]},
      ],
      answers: { items: [
        ['Evaluation · a', 'Hmmm… That’s a really good/interesting insight/example! · Wow! That’s an interesting observation.'],
        ['Evaluation · b', 'I’m not sure that’s really related to this issue. · I don’t really see the connection to what we’re discussing here.'],
        ['Evaluation · c', 'I think the situation/figures might have changed since then. · It sounds like that example is a little outdated.'],
        ['Evaluation · d', 'I think when they say… the author means… · I think you might have misinterpreted the data/the author’s point.'],
        ['Evaluation · e', 'Do you know if there are any statistics to support that? · That’s interesting. Have you heard of any research into that?']
      ]}
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
