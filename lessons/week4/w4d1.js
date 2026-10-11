/* DEC15 · Week 4, Day 1 — lesson content (v2: easier language, fewer tabs, more games).
   Teacher’s Book: W4 D1 · 1A Research summary discussion preparation (30) · 2A Listening to speak (100)
   · 3A Reading to speak (110). Texts: Gunders (2024) TED talk · Castro et al. (2023) — lessons/week4/sources.js.
   Related Teacher’s Book activities are merged into one tab; each TB heading is the title of the first
   block of its part ('Part 1 · …'). Block, field and table ids are unchanged (saved work).
   Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true). */

window.DEC15_LESSON = {
  id: 'w4d1',
  week: 4, day: 1,
  title: 'Prepare, listen and read to speak',
  duration: 'About 4 hours',
  question: 'Which solutions to food waste work best — and how can apps and simple habits help households waste less?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week4/hero-w4d1.svg',
  imageAlt: 'A pair of headphones beside a talk stage, a phone showing a food app, a speech bubble, and the three stages of food: a shopping cart, a cooking pan and a compost bin.',
  journey: 'This week is about solutions. First, tell your group about your article and start to plan your group presentation. Then listen to a TED talk about food waste and read about food apps. You will practise giving advice (should, need to) and saying how sure you are (can, could, might).',
  finish: { title: 'Tuesday', text: 'Upcycled food, mediation and negotiation' },

  sections: [
    /* ───────────────────────── 1A Research summary discussion preparation ───────────────────────── */
    {
      id: 'rsd', number: '01', code: '1A', minutes: 30,
      tone: 'teal', art: 'group',
      title: 'Research summary discussion preparation',
      subtitle: 'Summarise your source for your group',
      outcome: 'Explain your article to your group, plan a group presentation together, and think about how well you did.',
      activities: [
        {
          id: 'a1', short: 'Warm-up + summary', minutes: 15, grouping: 'Teams → research groups',
          title: 'Warmer: Dictation Race + Groupwork: Summarising your source',
          goal: 'Play a spelling race. Then tell your group about your article in 2 minutes.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Warmer: Dictation Race', items: [
              { who: 'class', text: 'Stand in teams. Make a line in front of the board.' },
              { who: 'class', text: 'Your teacher says a word. The first person in the line writes it. <b>Be quick — it’s a race!</b>' },
              { who: 'class', text: 'Give the pen to the next person. Go to the back of the line.' },
              { who: 'pair', text: 'Look at the seven words. How is each word connected to our research task? Guess, then turn the card.' }
            ]},
            { type: 'flip', title: 'The seven words', hint: 'Say the connection first. Then turn the card.', items: [
              { front: 'verbal', back: '<b>Verbal</b> = spoken, not written. Today you <b>say</b> a summary of your article.', tag: 'Steps 2–4' },
              { front: 'individual', back: '<b>Individual</b> = one person. Each of you found one article alone.', tag: 'Step 1' },
              { front: 'summary', back: 'A <b>summary</b> = the main ideas in a short form. First you summarise your article. Later, your group’s research.', tag: 'Steps 2–4' },
              { front: 'solutions', back: 'This week we talk about <b>solutions</b> (= ways to fix a problem) to food insecurity.', tag: 'Topic' },
              { front: 'research', back: 'You did <b>research</b>: you looked for an article.', tag: 'Step 1' },
              { front: 'reliable', back: '<b>Reliable</b> = you can trust it. Remember the CRAAP test.', tag: 'Step 1' },
              { front: 'discussion', back: 'On Thursday you have a 15-minute <b>discussion</b>.', tag: 'Step 5' }
            ]},
            { type: 'teacher', ref: 'w4d1-t1' },
            { type: 'order', id: 'a2o', title: 'Part 2 · Groupwork: Summarising your source — quick challenge: put the 5 steps of the Research Summary Discussion in order', items: [
              'Find one reliable article (alone).',
              'Summarise your article for your group (2 minutes).',
              'Prepare a group presentation together (5 minutes).',
              'Give the presentation to a new group.',
              'Discuss the topic for 15 minutes.'
            ], why: 'Today you do Steps 2 and 3.' },
            { type: 'key', title: 'Today: Steps 2 and 3', compare: [
              { label: 'Step 2', text: 'Tell your group about your article in about <b>2 minutes</b>. Give the main ideas and the most interesting parts.' },
              { label: 'Step 3', text: 'With your group, plan a <b>5-minute presentation</b>. Use ideas from all three articles. Everyone practises the same presentation.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your research group.' },
              { who: 'group', text: 'Take turns. Talk about your article for about <b>2 minutes</b>.' },
              { who: 'alone', text: 'Look at your <b>notes</b>. Don’t read a script.' },
              { who: 'group', text: 'Try to use one phrase from each part of the language bank.' }
            ]},
            { type: 'model', title: 'Example: a short summary', list: [
              'I found an article called “…”. It was written by … in 2023.',
              'I chose it because it is about food waste in schools.',
              'The authors surveyed 500 students.',
              'The article begins by explaining that… Another interesting point is that…',
              'So, that’s the gist (= the main idea) of my article.'
            ], note: 'Five short parts: the source, why you chose it, the method, the main points, a final comment.' },
            { type: 'language', title: 'Phrases for summarising a source', groups: [
              { label: '1 · The source', phrases: ['I found an article called…', 'The article is about…', 'It was written by… in…'] },
              { label: '2 · Why you chose it', phrases: ['I chose this article because…', 'This article is relevant (= useful) for our research because…'] },
              { label: '3 · The method', phrases: ['The authors surveyed (= asked questions to) 500 people in…', 'In the study, they…', 'To collect data, they used a questionnaire.'] },
              { label: '4 · Main points', phrases: ['The article begins by explaining that…', 'Another interesting point was that…', 'The authors suggest that…', 'They also say that…'] },
              { label: '5 · Final comment', phrases: ['So, that’s the gist of the article.', 'Overall, it was a really interesting study.', 'For me, it shows how complex the problem is.'] }
            ]},
            { type: 'teacher', ref: 'w4d1-t2' }
          ],
          answers: { items: [
            ['Quick challenge · The 5 steps', '<img src="assets/week4/rsd-steps.svg" alt="The five steps of the Research Summary Discussion: 1 find a source, 2 summarise your source to your group, 3 prepare a group presentation, 4 present to a new group, 5 discuss for 15 minutes."><br>Today: Steps 2 and 3.']
          ]}
        },
        {
          id: 'a3', short: 'Self-reflection', minutes: 5, grouping: 'Alone',
          title: 'Self-regulation and monitoring',
          goal: 'Think about how well you summarised your article.',
          blocks: [
            { type: 'tip', text: 'This is <b>Section 2</b> of your self-reflection form: <b>Summarising research</b>. You finished Section 1 already. You can finish this part at home.' },
            { type: 'model', title: 'First, read an example', rows: [
              ['Comment', 'My summary was too long. It had too many details.'],
              ['Action plan', 'When I take notes, I will separate main points from small details.']
            ]},
            { type: 'form', id: 'a3f', title: 'Self-reflection · Summarising research', intro: 'Choose Yes, Mostly or Needs work. Then write a comment and an action plan (= what you will do next time).', cols: ['Comments', 'Action plan for further improvement'], sections: [
              { label: 'Summarising research', hint: 'complete after Step 2', items: [
                'Was it easy to find the main points in your article?',
                'Could you explain these main points clearly to your group?',
                'Did you have enough notes to give your summary (without a script)?'
              ]}
            ], send: true, sendLabel: 'Share your reflection (optional)', sendHint: 'You can send a copy to your teacher or a groupmate. Only they will see it.' },
            { type: 'teacher', ref: 'w4d1-t3' }
          ]
        },
        {
          id: 'a4', short: 'Plan together', minutes: 10, grouping: 'Research groups',
          title: 'Groupwork: Preparing the summary presentation',
          goal: 'Find the ideas that are in all three articles. Start to plan your presentation.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Find the <b>common themes</b> (= ideas that are in all your articles).' },
              { who: 'group', text: 'Find <b>important points and good examples</b> from each article.' },
              { who: 'group', text: 'Write notes in the table. Press <b>Write together</b> to share one page with your group.' },
              { who: 'alone', text: 'Also copy your notes by hand. You will use handwritten notes in the discussion.' }
            ]},
            { type: 'language', title: 'Useful phrases for finding common themes', tabs: false, groups: [
              { label: 'Asking and comparing', phrases: ['Did your article mention…?', 'Yes, mine did. My article said that…', 'My article explains that…', 'My article said something similar.'] },
              { label: 'Naming a theme', phrases: ['All of our articles focus on…', 'That is an important theme.', 'Another common theme is that…'] }
            ]},
            { type: 'model', title: 'Example row', rows: [
              ['1st common theme', 'Families waste a lot of fresh fruit and vegetables. (Ana’s article: 30% in UK homes · my article: shoppers buy too much)']
            ]},
            { type: 'table', id: 'a4t', title: 'Note-taking template', columns: ['', 'Notes (which article? key points and examples)'], fixed: [
              '1st common / important theme', '2nd common / important theme', '3rd common / important theme', '4th theme <small>(optional)</small>', 'Final comment'
            ]},
            { type: 'tip', text: '<b>Homework:</b> keep working on your notes at home. Swap contact details with your group. Don’t worry — you have more time together on Tuesday.' },
            { type: 'teacher', ref: 'w4d1-t4' }
          ]
        }
      ]
    },

    /* ───────────────────────── 2A Listening to speak ───────────────────────── */
    {
      id: 'listen', number: '02', code: '2A', minutes: 100,
      tone: 'amber', art: 'listening',
      title: 'Listening to speak',
      subtitle: 'How to turn the tables on food waste · Gunders (2024)',
      outcome: 'Listen to a talk and take notes, give advice with words like should and need to, and judge how good a solution is.',
      activities: [
        {
          id: 'l1', short: 'Warm-up + words', minutes: 25, grouping: 'Pairs → groups of 3–4',
          title: 'Warmer + Vocabulary',
          goal: 'Guess what the talk is about. Then learn the words you will hear.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Warmer: look at the four pictures', items: [
              { label: 'Solar panels', icon: 'bulb', text: 'They make electricity from the sun.' },
              { label: 'An African market', icon: 'users', text: 'People sell fresh food outside.' },
              { label: 'Food waste', icon: 'alert', text: 'A bin full of good food.' },
              { label: 'A food app', icon: 'layers', text: 'An app on a phone about food.' }
            ]},
            { type: 'talk', prompts: [
              'What can you see? How are the pictures connected to <b>food waste</b>?',
              'Some places have no electricity for many hours. Why is it hard to keep food fresh there?',
              'How could an <b>app</b> help us waste less food?'
            ]},
            { type: 'teacher', ref: 'w4d1-t5' },
            { type: 'flip', title: 'Part 2 · Vocabulary: three words you know', hint: 'Explain the word to your partner. Then turn the card.', items: [
              { front: 'a win-win situation', back: 'A situation that is good for both (or all) sides.' },
              { front: 'methane', back: 'A strong greenhouse gas. It comes from rotting rubbish and from farm animals.' },
              { front: 'a landfill', back: 'A place where rubbish is buried in the ground.' }
            ]},
            { type: 'quiz', id: 'l2q', title: 'A new word: “We throw away food that is close to some <b>arbitrary</b> expiration date.”', items: [
              { q: 'What does <b>arbitrary</b> mean?', options: ['Random — it does not follow a system', 'Official and exact', 'Very old'], answer: 'Random — it does not follow a system', why: 'An arbitrary date is not based on a clear rule.' },
              { q: 'So what does the sentence mean?', options: ['Expiration dates don’t always mean food is bad.', 'Food after the date is always dangerous.', 'Shops never check dates.'], answer: 'Expiration dates don’t always mean food is bad.', why: 'The dates are not good signs that food has gone bad.' }
            ]},
            { type: 'steps', title: 'Teach your group', items: [
              { who: 'group', text: 'Your teacher gives you some sentences (Student A: 1–3, Student B: 4–6 …).' },
              { who: 'alone', text: 'You have <b>5 minutes</b>. Check the meaning of the words in <b>bold</b>.' },
              { who: 'group', text: '① Explain the bold words. ② Read your sentence. ③ Say what the whole sentence means.' },
              { who: 'group', text: 'Listen to your groupmates. Write notes below.' }
            ]},
            { type: 'flip', title: '12 sentences from the talk — turn a card after you teach it', hint: 'Front: the sentence. Back: what it means.', items: [
              { front: '1. Food waste has five times the <b>greenhouse gas footprint</b> of the entire aviation industry.', back: 'Food waste produces five times more greenhouse gases than the airline industry.' },
              { front: '2. Methane from landfills <b>is dwarfed by</b> the huge amount of energy and resources it takes to produce and transport food.', back: 'Methane from landfills is much smaller than the impact of producing and transporting food.' },
              { front: '3. Overall, fixing food waste is <b>not rocket science</b>.', back: 'Fixing food waste is not difficult.' },
              { front: '4. Prevention gives you <b>the most bang for your buck</b>, both environmentally and financially.', back: 'Stopping waste before it happens gives the best value for money and effort.' },
              { front: '5. Only when donating extra food <b>has been exhausted</b> should we feed it to animals, compost it or recycle it.', back: 'First give away as much food as possible. Only then try other ways.' },
              { front: '6. In places that don’t have electricity, solar-powered cold rooms <b>extend shelf life</b> dramatically.', back: 'Food stays fresh for much longer in cold rooms.' },
              { front: '7. Discounting apps, like Too Good To Go, have <b>spread like wildfire</b>.', back: 'The apps spread very quickly. They are very popular.' },
              { front: '8. Despite that incredible potential and some <b>beacons of progress</b>, overall, we are <b>barely moving the needle</b>.', back: 'There are some good examples, but overall things are improving very slowly.' },
              { front: '9. “Best by” and “enjoy by” are really just <b>guesstimates</b> of when food is at its best.', back: 'Food labels are not exact. They are more like a guess.' },
              { front: '10. These strategies are not <b>Earth-shattering</b>.', back: 'The ideas are simple, not surprising or difficult.' },
              { front: '11. Reducing food waste really is <b>the low-hanging fruit</b>.', back: 'Reducing food waste is an easy part of the climate problem to fix.' },
              { front: '12. Love your leftovers. They are <b>the only true free lunch</b>.', back: 'Keep the food you don’t finish. You can eat it later for free.' }
            ]},
            { type: 'fields', title: 'My notes on my groupmates’ sentences', fields: [
              { id: 'l2-n', label: 'New expressions and what they mean', placeholder: 'not rocket science = not difficult…', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w4d1-t6' }
          ],
          answers: { items: [
            ['Warmer · Solar + market', 'Solar cold rooms in Africa: the sun powers cold rooms, so fresh food stays good for longer where there is little electricity. You will hear about this in the talk.'],
            ['Warmer · Food waste + app', 'Apps help people manage food better — for example, buy only what they need, or buy food cheaply before a shop throws it away.']
          ]}
        },
        {
          id: 'l3', short: 'Listen', minutes: 25, grouping: 'Alone → pair',
          title: 'Listening for gist + Listening for detail: Note-taking',
          goal: 'Listen for the main idea first. Then take notes on the whole talk.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Listening for gist', items: [
              { who: 'alone', text: 'Read the two questions below first.' },
              { who: 'class', text: 'Listen to the part from <b>3:42 to 4:30</b>.' },
              { who: 'alone', text: 'Only get the <b>gist</b> (= the main idea). Don’t worry about every word.' }
            ]},
            { type: 'listening', source: 'Gunders (2024) · TED', title: 'How to turn the tables on food waste', videoId: '6iqXH9RPK1w', start: 222, clip: 'play 3:42–4:30', transcripts: [['gunders', 'Transcript (adapted)']] },
            { type: 'quiz', id: 'l3q', items: [
              { q: 'Does the speaker think fixing food waste is difficult?', options: ['Yes — it is a very hard problem', 'No — it is “not rocket science”'], answer: 'No — it is “not rocket science”', why: '“Fixing food waste is not rocket science. It’s really just about managing our food better, and it’s solvable.”' },
              { q: 'What kind of solutions does her organisation (ReFED) focus on?', options: ['Composting', 'Prevention', 'Food banks'], answer: 'Prevention', why: 'Prevention = stopping waste before it happens. “Many of them are about prevention… which is really our priority.”' }
            ]},
            { type: 'talk', title: 'Quick talk', prompts: ['What ways to <b>prevent</b> (= stop) food waste do you know? Think about Weeks 2 and 3.'] },
            { type: 'steps', title: 'Part 2 · Listening for detail: Note-taking', items: [
              { who: 'alone', text: 'Before you listen, read the headings in the table.' },
              { who: 'alone', text: 'Think: in which part will you hear the words from the vocabulary task?' },
              { who: 'alone', text: 'Listen to the whole talk. Write short notes: words, symbols and numbers.' },
              { who: 'pair', text: 'Compare notes with a partner. Add what you missed. Then listen again.' }
            ]},
            { type: 'tip', text: '<b>Fast notes:</b> use symbols. → = leads to · ↑ = more · ↓ = less · ≈ = about · e.g. “1 bn meals/day wasted”. Don’t write full sentences!' },
            { type: 'listening', source: 'Gunders (2024) · TED', title: 'How to turn the tables on food waste', videoId: '6iqXH9RPK1w', start: 0, clip: 'full talk · about 11 minutes', transcripts: [['gunders', 'Transcript (adapted)']] },
            { type: 'table', id: 'l4t', title: 'My notes: How to turn the tables on food waste', columns: ['', 'Notes'], fixed: [
              'The food waste problem',
              'Climate impacts of food waste<br><small>greenhouse gas · wasted resources</small>',
              'Projections to 2050<br><small>benefits of reducing waste</small>',
              'Reasons why food is wasted<br><small>prices · infrastructure · consumer habits · a personal story</small>',
              'Solutions<br><small>focus on prevention · successful examples: ColdHubs, Too Good To Go, Compass Group</small>',
              'UN Sustainable Development Goal: halve food loss and waste by 2030<br><small>potential benefits · state of progress · what is needed · return on investment</small>',
              'What else is needed<br><small>e.g. Japan, Ecuador, France, 10 US states</small>',
              'Things we can do at home<br><small>5 tips</small>'
            ]},
            { type: 'teacher', ref: 'w4d1-t7' }
          ],
          answers: { title: 'Suggested answers', items: [
            ['Gist · Ways to prevent waste (Weeks 2–3)', 'Better supply chains · better packaging · better storage in markets · cheaper prices for food close to its date · not buying too much · understanding food labels.'],
            ['Notes · The problem', '100 tractor trailers of food wasted every minute · 1 billion meals wasted every day · worth 1 trillion dollars.'],
            ['Notes · Climate impacts', 'Methane from rotting food in landfills · 5 × the greenhouse gases of the airline industry · landfills = 3rd-largest source of methane in the US, ~60% from rotting food · even bigger: the energy and resources to grow, move, cool and cook food are wasted.'],
            ['Notes · Projections to 2050', 'We will need ~50% more food than in 2010. Where will it come from (cut rainforests)? ~20% of the gap could come from wasting less (land use).'],
            ['Notes · Reasons', 'Not measured, so invisible · food is cheap, and throwing it away is cheaper · no way to keep food cold · worry about running out · “when in doubt, throw it out” · her son brings his lunch home untouched.'],
            ['Notes · Solutions', 'Prevention first (most bang for your buck), then donating, then animals/compost/recycling. ColdHubs (Nigeria): solar cold rooms → longer shelf life, farmer incomes +60%. Too Good To Go: app for cheap food at the last minute, 17 countries, 100 million meals. Compass Group: tracking waste, smaller containers, different portions → up to 50% less waste.'],
            ['Notes · UN goal', 'Benefits: save land the size of Argentina, save ⅓ of expected biodiversity loss, cut emissions = all cars in the US and Canada. Progress: too slow — “barely moving the needle”. Needed: money to grow solutions (US$18 billion in the US) → 4-to-1 return, 4 billion meals, 60,000 jobs.'],
            ['Notes · What else', 'Policy (= laws and rules): stop food going to landfill + build composting → more donation and better tracking. “These laws should be everywhere.”'],
            ['Notes · 5 tips', '1 Don’t overbuy (lists, meal plans) · 2 Love your leftovers · 3 Freeze your food · 4 Use it up — shop your fridge before you restock · 5 Learn your labels — use your senses.']
          ]}
        },
        {
          id: 'l5', short: 'Check', minutes: 20, grouping: 'Alone → pair',
          title: 'Building understanding',
          goal: 'Use your notes to answer ten questions about the talk.',
          blocks: [
            { type: 'tip', text: 'Use your notes from the table. Answer alone, then check with a partner. Stuck? Open the transcript — the paragraph letter is in the answer.' },
            { type: 'sort', id: 'l5s', title: 'Questions 2–4 · Which organisation solves each problem?', single: true, buckets: [
              { label: 'ColdHubs' }, { label: 'Compass Group' }, { label: 'Too Good To Go' }
            ], items: [
              { text: '2. Food goes bad in places without electricity.', answer: 0, why: 'Solar cold rooms in markets and farms.' },
              { text: '3. People don’t eat all their food in restaurants.', answer: 1, why: 'Smaller containers on buffets and different portion sizes.' },
              { text: '4. Supermarkets throw away food that is close to its date.', answer: 2, why: 'An app sells the food cheaply at the last minute.' }
            ]},
            { type: 'quiz', id: 'l5q', title: 'Questions 1 and 5–10', items: [
              { q: '1. What is the <b>biggest</b> environmental impact of food waste?', options: ['Methane from rotting food', 'Energy wasted to produce, move and sell food', 'Too much land used to grow food', 'More landfills for wasted food'], answer: 'Too much land used to grow food', why: 'Methane is “dwarfed” by energy and resources — “and there’s an even larger reason… land use” (paragraph D).' },
              { q: '5. What is the main benefit of the UN goal (cut food waste in half by 2030)?', options: ['Less land for farming, more biodiversity, fewer emissions', 'Less methane, more biodiversity, lower food prices', 'Less land for farming, less hunger, fewer emissions', 'Less methane, less hunger, lower food prices'], answer: 'Less land for farming, more biodiversity, fewer emissions', why: 'Land the size of Argentina, one-third of expected biodiversity loss, emissions of all cars in the US and Canada (paragraph J).' },
              { q: '6. What does the speaker think about progress towards the UN goal?', options: ['New technology will help us reach it.', 'Progress is too slow, but there are some good solutions.', 'It is hard because consumers waste too much.', 'Ecuador, Japan and France will reach it.'], answer: 'Progress is too slow, but there are some good solutions.', why: '“Despite… some beacons of progress, overall, we are barely moving the needle.”' },
              { q: '7. What two things are needed to solve food waste faster?', options: ['More money (investment) + laws (policies)', 'Better food storage + higher food prices', 'More money (investment) + higher food prices', 'Laws (policies) + better food storage'], answer: 'More money (investment) + laws (policies)', why: '“Let’s inject the funds to really scale them” and “We also need policy” (paragraphs K–M).' },
              { q: '8. Why should solutions focus on prevention?', options: ['It is easier.', 'It gives the best value for money.', 'There are already many laws about it.', 'Consumers like it.'], answer: 'It gives the best value for money.', why: 'Prevention gives “the most bang for your buck, both environmentally and financially”.' },
              { q: '9. Why does the speaker give us 5 tips?', options: ['Because reducing waste is hard for consumers.', 'Because people don’t know how to reduce waste.', 'To give simple, practical advice.', 'To show that consumers waste too much.'], answer: 'To give simple, practical advice.', why: '“These strategies are not Earth-shattering.”' },
              { q: '10. What is the main message of the talk?', options: ['Only governments can solve food waste.', 'Supermarkets need to do more.', 'We will not reach the UN goals.', 'There are many simple ways to reduce waste, but some solutions need government support.'], answer: 'There are many simple ways to reduce waste, but some solutions need government support.', why: 'Simple tips for homes + money and laws for the bigger system.' }
            ]},
            { type: 'sources', ids: ['gunders'] }
          ]
        },
        {
          id: 'l6', short: 'Giving advice', minutes: 20, grouping: 'Class → groups of 3',
          title: 'Academic speaking skills + Language in use: Giving advice',
          goal: 'Notice how the speaker gives advice. Then give advice to a friend.',
          blocks: [
            { type: 'passage', id: 'l6p1', title: 'Part 1 · Academic speaking skills — transcript section 1: highlight the advice', text: 'First, shopping. Shopping is really where we commit to food, and so we need to be careful not to overbuy. Old-school things like shopping lists and meal planning really help. And let me be clear, frozen pizza and takeout are totally legit as part of your plan.<br><br>Next, as I tell my friends at the end of dinner, love your leftovers. They are the only true free lunch.' },
            { type: 'quiz', id: 'l6q', items: [
              { q: 'Paragraph 1: which words give advice?', options: ['need to', 'really help', 'let me be clear'], answer: 'need to', why: '“we need to be careful not to overbuy” — a modal of obligation (= a word that says what someone must or should do).' },
              { q: 'Which words are <b>more common in academic writing</b>?', options: ['should / ought to', 'must / have to / need to'], answer: 'should / ought to', why: '“Must”, “have to” and “need to” are stronger. Academic writing is more careful.' },
              { q: 'Paragraph 2: “<b>Love</b> your leftovers” is…', options: ['an imperative', 'a modal verb', 'a question'], answer: 'an imperative', why: 'It starts with a verb. An imperative gives direct advice.' },
              { q: 'She says “<b>Next</b>” to start a new tip. Can we use it in academic writing?', options: ['No — it is a spoken transition', 'Yes — it is fine in essays'], answer: 'No — it is a spoken transition', why: 'In writing we use e.g. “Furthermore” or “In addition”.' }
            ]},
            { type: 'key', title: 'Three ways to give advice when you speak', compare: [
              { label: 'Modals of obligation', text: 'must · have to · should · ought to · need to · had better', eg: 'We need to be careful not to overbuy.' },
              { label: 'Imperatives', text: 'Start with the verb. Add <b>be sure to</b> to sound softer.', eg: 'Love your leftovers. · Be sure to shop your fridge.' },
              { label: 'Spoken transitions', text: 'Show a new tip: first · next · number three · and lastly.', eg: 'Next, use it up.' }
            ]},
            { type: 'passage', id: 'l6p2', title: 'Transcript section 2 — find modals, imperatives and transitions', text: 'And when you get sick of them, you can move on to number three, which is freeze your food. Your freezer is like a magic pause button, and so many things can be frozen that you don\'t think of: bread, milk, cheese and that half jar of pasta sauce you didn\'t use.<br><br>Next, use it up. In my house, this looks like my husband eating that peanut butter and jelly sandwich for dinner. But for you, it might be whipping up a stir fry with whatever veggies are wilting in your fridge. Whatever it is, be sure to shop your fridge before you restock it.<br><br>And lastly, learn your labels. "Best by" and "enjoy by" are really just guesstimates of when food is at its best, they’re not an indication that it’s gone bad. So be sure to use your senses before you toss things.' },
            { type: 'sort', id: 'l6s', title: 'Sort the words from section 2', buckets: [
              { label: 'Imperative' }, { label: 'Modal' }, { label: 'Spoken transition' }
            ], items: [
              { text: 'freeze your food', answer: 0 },
              { text: 'use it up', answer: 0 },
              { text: 'be sure to shop your fridge', answer: 0 },
              { text: 'learn your labels', answer: 0 },
              { text: 'you <b>can</b> move on', answer: 1 },
              { text: 'it <b>might</b> be', answer: 1, why: '“might” shows possibility, not advice.' },
              { text: 'number three', answer: 2 },
              { text: 'Next', answer: 2 },
              { text: 'And lastly', answer: 2 }
            ]},
            { type: 'teacher', ref: 'w4d1-t8' },
            { type: 'steps', title: 'Part 2 · Language in use: Giving advice', items: [
              { who: 'class', text: 'Together: read the model problem. Give advice to the student.' },
              { who: 'group', text: 'Student A reads problem A. B and C think for <b>1 minute</b>.' },
              { who: 'group', text: 'B and C take turns to give advice. A chooses the best advice and says why.' },
              { who: 'group', text: 'Repeat with problems B and C.' }
            ]},
            { type: 'cards', title: 'The problems', items: [
              { label: 'Model', text: 'Your classmate is worried about passing DEC10, especially the listening test.' },
              { label: 'A', text: 'Your friend overslept. The final DEC10 exam starts in 10 minutes. They will be late.' },
              { label: 'B', text: 'Your friend lives near the university, but it is very noisy at night. They can’t sleep. They want to move.' },
              { label: 'C', text: 'Your classmate’s mother is sick. She must go home to her country now. The final DEC exam is next week.' }
            ]},
            { type: 'model', title: 'Example: advice for the model problem', text: '“<b>First</b>, you <b>should</b> listen to English for 20 minutes every day. <b>Next</b>, <b>be sure to</b> practise taking notes. <b>And lastly</b>, you <b>need to</b> sleep well before the test.”' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Give advice', phrases: ['You should… / You ought to…', 'You need to…', 'You’d better…', 'Call… / Email… (imperative)', 'Be sure to…'] },
              { label: 'Move to the next tip', phrases: ['First, …', 'Next, …', 'Number three is…', 'And lastly, …'] }
            ]},
            { type: 'teacher', ref: 'w4d1-t9' }
          ],
          answers: { title: 'Transcript section 2', items: [
            ['Imperatives', 'freeze your food · use it up · (be sure to) shop your fridge · learn your labels · (be sure to) use your senses'],
            ['Modals', 'you <b>can</b> move on to number three (also: can be frozen, it might be — these show possibility)'],
            ['Transitions', 'number three · Next · And lastly']
          ]}
        },
        {
          id: 'l8', short: 'Evaluate', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Criticality: Evaluating solutions',
          goal: 'Use four questions to judge the speaker’s five tips.',
          blocks: [
            { type: 'flip', title: 'Four criteria (= questions to judge a solution)', hint: 'Guess the question for each word. Then turn the card.', items: [
              { front: 'Relevance', back: 'Is the solution connected to the problem?' },
              { front: 'Effectiveness', back: 'Will the solution work?' },
              { front: 'Impact', back: 'How big is the difference it makes?' },
              { front: 'Feasibility', back: 'How easy is it to do?' }
            ]},
            { type: 'model', title: 'Example: tip 1', rows: [
              ['Tip', '1. Don’t overbuy'],
              ['Relevance', 'High — buying too much is a big cause of waste.'],
              ['Feasibility', 'Very easy — a shopping list is free.']
            ]},
            { type: 'tip', text: 'Short on time? Each person takes <b>one criterion</b> and tells the group.' },
            { type: 'table', id: 'l8t', title: 'Evaluate the 5 tips', columns: ['Tip', 'Relevance', 'Effectiveness', 'Impact', 'Feasibility'], fixed: [
              '1. Don’t overbuy', '2. Love your leftovers', '3. Freeze your food', '4. Use it up — shop your fridge before you restock it', '5. Learn your labels — use your senses'
            ]},
            { type: 'choose', id: 'l8c', title: 'Overall, are these tips a good way to reduce food waste?', options: ['Yes — easy and effective', 'Partly — they help, but bigger changes are needed', 'Not really — the impact is too small'] },
            { type: 'talk', prompts: ['Explain your answer. Which criterion was most important for your group? Why?'] },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Judge a tip', phrases: ['I think tip … is very feasible because…', 'The impact is small / big because…', 'This tip is relevant because…'] },
              { label: 'Give your overall view', phrases: ['Overall, we think…', 'The most important criterion for us was… because…'] }
            ]}
          ],
          answers: { items: [
            ['A possible evaluation', 'The tips are very <b>relevant</b> (homes waste the most food) and very <b>feasible</b> (cheap and simple, no technology). <b>Effectiveness</b> depends on people changing habits. The <b>impact</b> of one home is small, but big if many people follow them. The speaker also says money and laws are needed.']
          ]}
        }
      ]
    },

    /* ───────────────────────── 3A Reading to speak ───────────────────────── */
    {
      id: 'read', number: '03', code: '3A', minutes: 110,
      tone: 'plum', art: 'reading',
      title: 'Reading to speak',
      subtitle: 'Food apps at three stages · Castro et al. (2023)',
      outcome: 'Read and take notes in your own words, use can, could and might to show how sure you are, and choose good apps for people with different problems.',
      activities: [
        {
          id: 'r1', short: 'Warm-up + words', minutes: 15, grouping: 'Pairs',
          title: 'Warmer: Three stages of food waste + Vocabulary',
          goal: 'Complete a table about food waste at home. Then learn the key words from the reading.',
          blocks: [
            { type: 'grid', id: 'r1g', title: 'Part 1 · Warmer: Three stages of food waste — choose the missing information', rows: ['Acquisition', 'Consumption', 'Disposal'], columns: ['Activity', 'Location'], options: ['Planning and purchasing food', 'Preparing and eating food', 'Throwing away uneaten food', 'Supermarket', 'Households'],
              given: { '1-0': 'Preparing and eating food' },
              answers: [['Planning and purchasing food', 'Supermarket'], ['Preparing and eating food', 'Households'], ['Throwing away uneaten food', 'Households']] },
            { type: 'tip', text: '<b>Acquisition</b> = getting or buying · <b>consumption</b> = eating · <b>disposal</b> = throwing away.' },
            { type: 'teacher', ref: 'w4d1-t10' },
            { type: 'talk', title: 'Part 2 · Vocabulary — revision: explain to your partner', prompts: ['impulse buying', 'leftovers', 'foodborne illnesses'] },
            { type: 'flip', title: 'Key words from the reading', hint: 'Guess the meaning. Then turn the card.', items: [
              { front: 'cognitive bias', back: 'An error in thinking.' },
              { front: 'burdensome', back: 'Hard to do; it needs a lot of effort.' },
              { front: 'portion-ready food delivery', back: 'Food that is measured and ready to cook, brought to your home.' },
              { front: 'crucial', back: 'Very important.' },
              { front: 'foodborne illness', back: 'An illness you get from bad food.' },
              { front: 'food inventory', back: 'A list of the food you have.' },
              { front: 'compost', back: 'Old plants and food that turn into soil for gardens.' },
              { front: 'rural', back: 'In the countryside.' },
              { front: 'urban', back: 'In the city.' }
            ]},
            { type: 'quiz', id: 'r2q', title: 'Two cognitive biases (= thinking errors) in the text', items: [
              { q: '<b>The present bias</b> means…', options: ['things now feel more important than things later', 'future jobs will feel easy'], answer: 'things now feel more important than things later', why: 'In the shop, buying now feels more important than cooking later → people buy too much.' },
              { q: '<b>The planning fallacy</b> means…', options: ['things now feel more important than things later', 'we think future jobs will be quicker and easier than they really are'], answer: 'we think future jobs will be quicker and easier than they really are', why: 'People think cooking will be quick. They don’t cook the food → waste.' }
            ]},
            { type: 'talk', prompts: ['How can each bias lead to food waste? Give an example from your own shopping.'] }
          ],
          answers: { items: [
            ['Warmer · The three stages', '<img src="assets/week4/food-waste-stages.svg" alt="Three stages of household food waste: acquisition (planning and purchasing food, supermarket), consumption (preparing and eating food, household) and disposal (throwing away uneaten food, household).">']
          ]}
        },
        {
          id: 'r3', short: 'Read + share', minutes: 35, grouping: 'Alone → groups (jigsaw)',
          title: 'Annotated reading + Reading for note taking',
          goal: 'Read the abstract. Then read one section, take notes and teach it to your classmates.',
          blocks: [
            { type: 'flip', title: 'Part 1 · Annotated reading — four words first', hint: 'These words are in the abstract (= a short summary at the start of an article).', items: [
              { front: 'intervention', back: 'An action to fix a problem.' },
              { front: 'ICTs', back: 'Information and Communication Technologies — e.g. phones and apps.' },
              { front: 'edible', back: 'Safe to eat.' },
              { front: 'empirical literature', back: 'Research that uses real data.' }
            ]},
            { type: 'passage', id: 'r3p', title: 'Abstract', text: 'This paper proposes an intervention using personal Information and Communication Technologies (ICTs) to help consumers reduce household food waste. Across the global food-supply chain, about one-third of all edible food is lost or wasted each year, and this issue is particularly pressing in the Global North. We present a detailed overview of consumer activity in relation to household food waste. We trace consumer activity along the acquisition, storage, consumption, and disposal stages and provide a comprehensive set of recommendations on how to use personal ICTs to reduce household food waste rooted in the current empirical literature' },
            { type: 'quiz', id: 'r3q', items: [
              { q: 'What is a more common word for <b>ICTs</b> in this text?', options: ['Apps (applications)', 'Supermarkets', 'Recipes'], answer: 'Apps (applications)', why: 'Personal ICTs = apps on your phone.' }
            ]},
            { type: 'talk', prompts: ['Do you use any food apps? Which ones?', 'How could apps help to reduce food waste at each stage?'] },
            { type: 'steps', title: 'Part 2 · Reading for note taking (jigsaw)', items: [
              { who: 'alone', text: 'Your teacher gives you one section. Tap it below.' },
              { who: 'group', text: '<b>10 min.</b> Sit with students who read the same section. Read and take notes together.' },
              { who: 'group', text: '<b>10 min.</b> Move to a new group with one person from each section. <b>Tell</b> them about your section — don’t read your notes aloud. Listen and take notes.' },
              { who: 'alone', text: '<b>5 min.</b> Quickly read the two other sections.' }
            ]},
            { type: 'sources', ids: ['castro'] },
            { type: 'cards', title: 'My section', pick: 'r4-mine', items: [
              { label: 'Acquisition', text: 'Paragraphs B–D' },
              { label: 'Consumption', text: 'Paragraphs E–H' },
              { label: 'Disposal', text: 'Paragraphs I–K' }
            ]},
            { type: 'fields', title: 'My notes', fields: [
              { id: 'r4-1', label: 'My section: why is food wasted?', placeholder: 'Overbuying…', rows: 3 },
              { id: 'r4-2', label: 'My section: which apps help? How?', placeholder: 'No Waste and Plus Fridge Pal…', rows: 3 },
              { id: 'r4-3', label: 'My section: what are the problems with these apps?', placeholder: 'Users must…', rows: 2 },
              { id: 'r4-4', label: 'Notes from my classmates’ summaries', placeholder: 'Consumption: … · Disposal: …', rows: 4 }
            ]},
            { type: 'language', title: 'Sentence starters for teaching your section', tabs: false, groups: [
              { label: 'Explain your section', phrases: ['My section is about…', 'Food is wasted because…', 'One app that can help is… It…', 'A problem with this app is that…'] },
              { label: 'Check your listeners', phrases: ['Does that make sense?', 'Do you have any questions?'] }
            ]},
            { type: 'teacher', ref: 'w4d1-t11' }
          ]
        },
        {
          id: 'r5', short: 'Summary + check', minutes: 30, grouping: 'Groups → alone → pair',
          title: 'Summarise/paraphrase + Building Understanding',
          goal: 'Put your notes in a short table. Then answer ten questions about the reading.',
          blocks: [
            { type: 'key', title: 'Part 1 · Summarise/paraphrase: keep it short', points: ['Keep only the <b>main points</b>.', '<b>Paraphrase</b> (= say it in your own words). Don’t copy sentences from the text.', 'One row for each stage. Short phrases are fine.'] },
            { type: 'model', title: 'Copy or paraphrase?', before: '“…the need to enter product details and expiration dates into the app, which can be quite burdensome.”', text: 'Users must type in all the data by hand → too much work.' },
            { type: 'table', id: 'r5t', title: 'Summary table', columns: ['Stage', 'Causes of waste', 'ICT solutions', 'Limitations to solutions'], fixed: ['Acquisition', 'Consumption', 'Disposal'] },
            { type: 'teacher', ref: 'w4d1-t12' },
            { type: 'steps', title: 'Part 2 · Building Understanding', items: [
              { who: 'alone', text: 'Answer the questions. Use your notes and the summary table.' },
              { who: 'alone', text: 'Not sure? Look in the paragraph in brackets.' },
              { who: 'pair', text: 'Check with a partner. Then press <b>Check my answers</b>.' }
            ]},
            { type: 'quiz', id: 'r6q', items: [
              { q: '1. What is the main benefit of food apps? <small>(A)</small>', options: ['Many people can use them.', 'They are cheap and easy to use.', 'Many people love their phones.', 'No benefits are mentioned.'], answer: 'Many people can use them.', why: 'They “can be easily made available to a large proportion of consumers” (A).' },
              { q: '2. Why is food wasted at the acquisition (buying) stage? <small>(B)</small>', options: ['People buy food they don’t need.', 'Supermarkets buy too much to look full.', 'Supermarket layouts are confusing.', 'People buy food they can’t cook.'], answer: 'People buy food they don’t need.', why: 'Impulse buying (B). “Supermarkets look full” was in Week 2, not in this text.' },
              { q: '3. How can apps help with the present bias and the planning fallacy? <small>(C)</small>', options: ['They find cheap food that people like.', 'They keep a shopping list and suggest recipes.', 'They help people buy only what they need and remember past mistakes.', 'They can’t help — these are thinking problems.'], answer: 'They help people buy only what they need and remember past mistakes.', why: 'They track needs and show “which items were bought and not used” (C).' },
              { q: '4. Are today’s apps a good way to stop waste at the buying stage? <small>(D)</small>', options: ['Yes, they are great.', 'Yes, they help people find food.', 'No, apps can’t help with thinking errors.', 'Some are useful, but some need extra features.'], answer: 'Some are useful, but some need extra features.', why: 'Entering data is “burdensome”; a barcode scanner “could simplify this process” (D).' },
              { q: '5. How does what people know affect waste at the eating stage? (two things) <small>(F)</small>', options: ['They can’t tell if food is safe + they forget what food they have', 'They only cook their own culture’s food + they know how to use leftovers', 'They can’t tell if food is safe + they know how to use leftovers'], answer: 'They can’t tell if food is safe + they forget what food they have', why: '“not knowing how to check if food is still good… forgetting what they have” (F).' },
              { q: '6. What is the main problem with NoWaste and Plus Fridge Pal? <small>(G)</small>', options: ['Users must type in the data by hand.', 'They often say old food is safe.', 'They can’t stop people buying too much.', 'They don’t suggest recipes.'], answer: 'Users must type in the data by hand.', why: 'They work only if “users update their food inventory” well (G).' },
              { q: '7. What do the authors think about composting? <small>(I)</small>', options: ['It is a great way to reduce waste.', 'It is good for the environment and for people.', 'Not a good solution: it doesn’t reduce waste and can cause new problems.', 'It is a good way to make fertiliser.'], answer: 'Not a good solution: it doesn’t reduce waste and can cause new problems.', why: 'It “doesn’t directly cut down the amount of waste”; 41% in the US didn’t worry about waste because they compost (I).' },
              { q: '8. Why might sharing food be more common in rural areas? <small>(J)</small>', options: ['Rural people cook more fresh food.', 'City people are too busy.', 'In rural areas people know and trust each other more.', 'City people eat out more.'], answer: 'In rural areas people know and trust each other more.', why: 'Rural communities “encourage more personal interactions” (J).' },
              { q: '9. How can food-sharing apps help users trust each other? <small>(K)</small>', options: ['They build a community and use ratings.', 'They organise weekly meetings.', 'They deliver food faster.', 'They ask rural people to join.'], answer: 'They build a community and use ratings.', why: 'Technology that builds community + users “rate and review each other” (K).' },
              { q: '10. What is the authors’ main message? <small>(L)</small>', options: ['Well-designed food apps can help reduce food waste.', 'Only consumers are responsible for food waste.', 'Food-sharing apps are the best solution.', 'Today’s food apps can’t do much.'], answer: 'Well-designed food apps can help reduce food waste.', why: 'Apps “can help”, but today’s apps have some limits (L).' }
            ]}
          ],
          answers: { title: 'Summary table', items: [
            ['Summary · Acquisition', '<b>Causes:</b> buying too much; impulse buying; supermarket layouts. <b>Solutions:</b> No Waste and Plus Fridge Pal — track what you need, show what you bought and didn’t use; portion-ready food apps. <b>Limitations:</b> users must type in data by hand.'],
            ['Summary · Consumption', '<b>Causes:</b> fear of getting sick; not understanding labels; wrong storage; throwing away good food. <b>Solutions:</b> No Waste and Plus Fridge Pal (track food, check if it is safe); Plant Jammer (use food before it expires, use leftovers). <b>Limitations:</b> data by hand; may show unsafe food as good.'],
            ['Summary · Disposal', '<b>Causes:</b> people throw food away. <b>Solutions:</b> food-sharing apps (EquoEvento, FoodSharing.de, IFoodShare). <b>Limitations:</b> better for businesses than homes; hard to build trust and community.']
          ]}
        },
        {
          id: 'r7', short: 'Modals game', minutes: 25, grouping: 'Pairs',
          title: 'Academic speaking skills + Language in use: modals of probability',
          goal: 'See how the authors show how sure they are. Then play a modal spinner game.',
          blocks: [
            { type: 'talk', title: 'Part 1 · Academic speaking skills — remember Week 1?', prompts: ['What <b>hedging language</b> (= careful words that show you are not 100% sure) do you remember? e.g. may, might, could, tend to, suggest…'] },
            { type: 'passage', id: 'r7p', title: 'Three extracts — highlight the hedging language', text: '1. Secondi et al. (2015) pointed out that a lot of food waste could be avoided if food was better portioned, managed, stored, and prepared. It\'s also crucial to consider if people reuse leftovers, as this can greatly reduce food waste.<br><br>2. However, a challenge with this method is the need to enter product details and expiration dates into the app, which can be quite burdensome. Integrating a barcode scanner or connecting the app with online grocery delivery services could simplify this process.<br><br>3. Although Morton’s study doesn\'t go into detail about the differences between rural and urban areas, it suggests that rural communities are designed to encourage more personal interactions, which might lead to more food sharing. Urban areas, however, tend to use digital solutions.' },
            { type: 'quiz', id: 'r7q', items: [
              { q: 'Why do the authors use hedging (could, might, suggests, tend to)?', options: ['Nobody has tried these ideas yet, so they are not sure.', 'They want to sound informal.', 'They disagree with the sources.'], answer: 'Nobody has tried these ideas yet, so they are not sure.', why: 'They talk about possible results.' },
              { q: 'Extracts 1 and 2 use <b>can</b> (“can greatly reduce”, “can be quite burdensome”). Why?', options: ['They are sure: we know this happens.', 'They are not sure at all.', 'It is the past tense.'], answer: 'They are sure: we know this happens.', why: '“Can” = this is known to happen.' },
              { q: 'Skim the whole text. Which modal is most common — and why?', options: ['can — the apps already exist, so we know the results', 'might — everything is uncertain', 'must — the authors give orders'], answer: 'can — the apps already exist, so we know the results', why: 'They describe apps that people already use.' }
            ]},
            { type: 'key', title: 'Modals show how sure you are', compare: [
              { label: 'More sure', text: '<b>can</b> · will — we know this happens', eg: 'This can greatly reduce food waste.' },
              { label: 'Less sure', text: '<b>could · may · might</b> — this is possible', eg: 'A barcode scanner could simplify this process.' }
            ]},
            { type: 'steps', title: 'Part 2 · Language in use: modal spinner', items: [
              { who: 'pair', text: 'Spin. Make a sentence with the beginning, the modal verb and the end.' },
              { who: 'pair', text: 'Say it to your partner. e.g. <i>My cat <b>might</b> eat my lunch.</i>' },
              { who: 'pair', text: 'Partner: does the modal make sense? If not, ask “Why?”' },
              { who: 'pair', text: 'You can also choose your own beginning and end.' }
            ]},
            { type: 'spinner', id: 'r8s', title: 'Modals of probability spinner', reels: [
              { label: 'Sentence beginning', items: ['Portion-ready food delivery services', 'Hello Panda', 'Food inventory apps that can scan barcodes', 'Aliens', 'My cat', 'Sharing food with my neighbours', 'Composting', 'Not writing a shopping list', 'Supermarkets', 'I'] },
              { label: 'Modal verb', items: ['can', 'could', 'may', 'might', 'will', 'can’t', 'won’t', 'might not'] },
              { label: 'Sentence end', items: ['reduce food waste', 'solve world hunger', 'create more food waste', 'encourage overbuying', 'eat my lunch', 'cook healthy meals', 'create extra problems', 'waste money', 'help to avoid cognitive biases'] }
            ]},
            { type: 'language', title: 'Check your partner', tabs: false, groups: [
              { label: 'Ask', phrases: ['Why might…?', 'Are you sure it can…?', 'Does that make sense?'] },
              { label: 'Answer', phrases: ['I think “could” is better here because…', 'It’s possible, but not certain.', 'We know this happens, so I said “can”.'] }
            ]},
            { type: 'teacher', ref: 'w4d1-t13' }
          ]
        },
        {
          id: 'r9', short: 'Recommend an app', minutes: 15, grouping: 'Groups of 2–3',
          title: 'Criticality',
          goal: 'Choose app features for four people who waste food. Say why.',
          blocks: [
            { type: 'figure', src: 'assets/week4/app-features.svg', alt: 'Four app functions: smart inventory, smart recipes, food-sharing hub and portion-ready food delivery, with what each can do.', caption: 'App functionalities (= what the apps can do)', credit: 'Adapted from Castro et al. (2023)', size: 'wide' },
            { type: 'cards', title: 'Four people', items: [
              { label: 'Person A', text: 'Lives alone. Loves to cook, but forgets what he has. He doesn’t plan, so he buys food he already has. He throws food away and often orders takeaway.' },
              { label: 'Person B', text: 'Loves to cook and writes a shopping list. But she gets excited and buys too much. She cooks too much and can’t eat it all in time.' },
              { label: 'Person C', text: 'Doesn’t like cooking. Planning takes too long. Food labels confuse him, so he is afraid of unsafe food. He eats unhealthy takeaway.' },
              { label: 'Person D', text: 'Wants to spend less on food. She lives with housemates. She wants them to buy big packs and share — and to see if it saves money.' }
            ]},
            { type: 'model', title: 'Example', text: 'We recommend <b>smart recipes</b> for Person A <b>because</b> the app <b>could</b> show him what to cook with the food he already has.' },
            { type: 'table', id: 'r9t', title: 'Our recommendations', columns: ['Person', 'App feature(s) we recommend', 'Why — with reference to the app functions'], fixed: ['Person A', 'Person B', 'Person C', 'Person D'] },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Recommend', phrases: ['We recommend… for Person… because…', 'The best feature for her is…', 'He should try…'] },
              { label: 'Explain', phrases: ['This feature could help him to…', 'It might stop her from…', 'It can show / remind / track…'] }
            ]}
          ],
          answers: { items: [
            ['Person A', 'Smart inventory to track what he has; smart recipes to use food before it expires.'],
            ['Person B', 'Smart inventory to see past waste; smart recipes for the right portion sizes; a food-sharing hub to share extra food.'],
            ['Person C', 'Portion-ready food delivery (healthier than takeaway); smart inventory to explain labels; smart recipes may help him start cooking.'],
            ['Person D', 'Food-sharing hub to organise shared food; smart inventory to track spending.']
          ]}
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'Read the talk', minutes: 15, grouping: 'Alone', category: 'Extra listening',
      title: 'Read the TED talk transcript',
      goal: 'Find the five tips again. Write advice for yourself.',
      blocks: [
        { type: 'sources', ids: ['gunders'] },
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'Which tip will you try this week? Give yourself advice with a modal or an imperative.', placeholder: 'I need to… / Be sure to…', rows: 3 }
        ]}
      ]
    }
  ],

  glossary: [
    ['verbal summary', 'A summary that you say aloud, not write.', 'Give a 2-minute verbal summary of your article.'],
    ['reliable', 'Something you can trust; based on good evidence.', 'Choose academically reliable sources.'],
    ['common theme', 'An idea that is in all (or most) of the texts.', 'Food waste at home is a common theme.'],
    ['win-win', 'Good for both (or all) sides.', 'Too Good To Go is a win-win for shops and customers.'],
    ['methane', 'A strong greenhouse gas from rotting rubbish and farm animals.', 'Rotting food in landfill produces methane.'],
    ['landfill', 'A place where rubbish is buried in the ground.', 'Food goes straight to a landfill.'],
    ['arbitrary', 'Random; not based on a system or rule.', 'An arbitrary expiration date.'],
    ['prevention', 'Stopping something before it happens.', 'Prevention is the best solution.'],
    ['not rocket science', 'Not difficult.', 'Fixing food waste is not rocket science.'],
    ['bang for your buck', 'Good value for the money or effort.', 'Prevention gives the most bang for your buck.'],
    ['shelf life', 'How long food stays fresh and safe to sell or eat.', 'Cold rooms extend shelf life.'],
    ['spread like wildfire', 'Spread very quickly.', 'The app spread like wildfire.'],
    ['move the needle', 'Make a difference you can see.', 'We are barely moving the needle.'],
    ['low-hanging fruit', 'The easiest part of a problem to solve.', 'Reducing food waste is the low-hanging fruit.'],
    ['modal of obligation', 'A verb like must, have to, should, need to that tells someone what to do.', 'We need to be careful not to overbuy.'],
    ['imperative', 'A sentence that starts with a verb and gives an instruction.', 'Freeze your food.'],
    ['criteria', 'Questions or rules you use to judge something.', 'We used four criteria to judge the tips.'],
    ['feasibility', 'How easy or practical it is to do something.', 'The feasibility of the tips is high.'],
    ['acquisition', 'Getting or buying something.', 'The acquisition stage = planning and buying food.'],
    ['cognitive bias', 'An error in thinking.', 'The present bias is a cognitive bias.'],
    ['burdensome', 'Hard; it needs a lot of effort.', 'Entering every item is burdensome.'],
    ['crucial', 'Very important.', 'It is crucial to reuse leftovers.'],
    ['foodborne illness', 'An illness you get from bad food.', 'Fear of foodborne illness leads to waste.'],
    ['food inventory', 'A list of the food you have.', 'Update your food inventory in the app.'],
    ['compost', 'Old plants and food that turn into soil for gardens.', 'Composting doesn’t reduce the amount of waste.'],
    ['rural / urban', 'Countryside / city.', 'Sharing is more common in rural areas.'],
    ['paraphrase', 'Say the same idea in your own words.', 'Paraphrase your notes — don’t copy.'],
    ['hedging', 'Careful words (may, might, could) that show you are not 100% sure.', 'Hedging makes academic writing careful.'],
    ['modal of probability', 'A verb like can, could, may, might that shows how sure you are.', 'Apps could simplify this process.']
  ]
};
