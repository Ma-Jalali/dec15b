/* DEC15 · Week 4, Day 1 — lesson content.
   Teacher’s Book: W4 D1 · 1A Research summary discussion preparation (30) · 2A Listening to speak (100)
   · 3A Reading to speak (110). Texts: Gunders (2024) TED talk · Castro et al. (2023) — lessons/week4/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
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
  journey: 'This week we look at solutions. First you share your research article with your group and start planning your group presentation. Then you listen to a TED talk about fixing food waste and read about apps that help households waste less — and you practise the language of advice and probability to talk about them.',
  finish: { title: 'Tuesday', text: 'Upcycled food, mediation and negotiation' },

  sections: [
    /* ───────────────────────── 1A Research summary discussion preparation ───────────────────────── */
    {
      id: 'rsd', number: '01', code: '1A', minutes: 30,
      tone: 'teal', art: 'group',
      title: 'Research summary discussion preparation',
      subtitle: 'Summarise your source for your group',
      outcome: 'Understand and explain an academic article, collaborate with your group to plan a summary presentation, and reflect on your learning process.',
      activities: [
        {
          id: 'a1', short: 'Warmer', minutes: 5, grouping: 'Teams',
          title: 'Warmer: Dictation Race',
          goal: 'Spell seven key words fast — then connect them to the research task.',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Stand in teams in lines facing the board. Only the person at the front writes. Your teacher says one word — <b>be quick, it’s a race!</b>' },
              { who: 'class', text: 'Pass the pen to the next person and go to the back of the line.' },
              { who: 'pair', text: 'Discuss: how is each word connected to a step of the <b>Research Summary Discussion</b>? Then turn the cards.' }
            ]},
            { type: 'flip', title: 'The seven words — tap to see the connection', hint: 'Say the connection first, then turn the card.', items: [
              { front: 'verbal', back: 'Today you give <b>verbal</b> summaries of your article and of your group’s research.', tag: 'Steps 2–4' },
              { front: 'individual', back: 'You have already done your <b>individual</b> research — you each found one article.', tag: 'Step 1' },
              { front: 'summary', back: 'You give a <b>summary</b> of your article, then of the whole group’s research.', tag: 'Steps 2–4' },
              { front: 'solutions', back: 'This week the focus moves to <b>solutions</b> to food insecurity.', tag: 'Topic' },
              { front: 'research', back: 'You had to do <b>research</b> — find an article.', tag: 'Step 1' },
              { front: 'reliable', back: 'Your articles should be academically <b>reliable</b> (remember the CRAAP test).', tag: 'Step 1' },
              { front: 'discussion', back: 'On Thursday you have a 15-minute <b>discussion</b>.', tag: 'Step 5' }
            ]},
            { type: 'teacher', ref: 'w4d1-t1' }
          ]
        },
        {
          id: 'a2', short: 'Summarise your source', minutes: 10, grouping: 'Research groups',
          title: 'Groupwork: Summarising your source',
          goal: 'Give your group a 2-minute verbal summary of the article you found.',
          blocks: [
            { type: 'figure', src: 'assets/week4/rsd-steps.svg', alt: 'The five steps of the Research Summary Discussion: 1 find a source, 2 summarise your source to your group, 3 prepare a group presentation, 4 present to a new group, 5 discuss for 15 minutes.', caption: 'Today: Steps 2 and 3 of the 2nd Research Summary Discussion', size: 'wide' },
            { type: 'key', title: 'Steps 2 and 3', compare: [
              { label: 'Step 2', text: 'Each student prepares a <b>2-minute verbal summary</b> of their source (main ideas and highlights) and shares it with the other two members of the group.' },
              { label: 'Step 3', text: 'Together, the three of you prepare a <b>5-minute presentation</b> that brings in elements of all three sources. Everyone prepares and practises the same presentation.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your research group. Take turns: summarise your article in about <b>2 minutes</b>.' },
              { who: 'group', text: 'Use your <b>notes</b> — don’t read a script. It’s fine if you go a little over 2 minutes.' },
              { who: 'group', text: 'Try to use a phrase from each part of the language bank.' }
            ]},
            { type: 'language', title: 'Phrases for summarising a source', groups: [
              { label: '1 · Introducing the source', phrases: ['I found this great article called…', 'In my research I found an interesting source called…', 'The article is about…', 'It was written by… in…', 'The article I came across in my research was about….'] },
              { label: '2 · Why you chose it', phrases: ['I chose this article because it provides a comprehensive look at…', 'This article is relevant for our research because….', 'I thought this article looked like the most interesting one to read', 'I selected this article because I wanted to learn more about…'] },
              { label: '3 · Research methods', phrases: ['The authors surveyed 500 residents of…', 'The article included data collected in experiments…', 'In the study they conducted…', 'To gather data, they conducted a questionnaire…'] },
              { label: '4 · Main points', phrases: ['The article begins by explaining that…', 'And according to Garnett and Simmons…', 'Another interesting point from the article was that…', 'They also state that…', 'Interestingly, my article points out that…', 'So basically, (authors’ names) assert that…', 'The authors suggest that…'] },
              { label: '5 · Final comment', phrases: ['So, that’s the gist of what the article covered.', 'Ultimately, this article contributes significantly to our understanding of the topic', 'For me, it really sheds light on the complexity of the issues.', 'Overall, it was a really interesting and comprehensive study.'] }
            ]},
            { type: 'teacher', ref: 'w4d1-t2' }
          ]
        },
        {
          id: 'a3', short: 'Self-reflection', minutes: 5, grouping: 'Alone',
          title: 'Self-regulation and monitoring',
          goal: 'Reflect on how well you summarised your research (Section 2 of your self-reflection form).',
          blocks: [
            { type: 'tip', text: 'This is the <b>Week 3–4</b> part of your <b>Research Summary Discussion self-reflection form</b>. Section 1 (Conducting research) is done. Today: Section 2 — Summarising research. You can finish it at home.' },
            { type: 'form', id: 'a3f', title: 'Self-reflection · Summarising research', intro: 'Complete after Step 2. Choose Yes, Mostly or Needs work, then add a comment and an action.', cols: ['Comments', 'Action plan for further improvement'], sections: [
              { label: 'Summarising research', hint: 'complete after Step 2', items: [
                'Did you find it easy to identify the main points in your article?',
                'Could you express these main points clearly to your groupmates?',
                'Did you take sufficient notes to summarise your research (without preparing a script)?'
              ]}
            ], send: true, sendLabel: 'Share your reflection (optional)', sendHint: 'You can send a copy to your teacher or a groupmate — only they will see it.' },
            { type: 'model', title: 'An example comment and action', rows: [
              ['Comment', 'My summary was too long and included too many details.'],
              ['Action plan', 'While taking notes, distinguish between main points and supporting details.']
            ]},
            { type: 'teacher', ref: 'w4d1-t3' }
          ]
        },
        {
          id: 'a4', short: 'Plan the presentation', minutes: 10, grouping: 'Research groups',
          title: 'Groupwork: Preparing the summary presentation',
          goal: 'Find the common themes in your three sources and start planning your 5-minute presentation.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'a) What are the <b>common themes</b> in your three sources?' },
              { who: 'group', text: 'b) What are some <b>important points and relevant examples</b> from individual articles?' },
              { who: 'group', text: 'Take notes in the template (or copy it by hand — you will use handwritten notes in the discussion). Press <b>Write together</b> to share one page with your group.' }
            ]},
            { type: 'table', id: 'a4t', title: 'Note-taking template', columns: ['', 'Notes (which article? key points and examples)'], fixed: [
              '1st common / important theme', '2nd common / important theme', '3rd common / important theme', '4th theme <small>(optional)</small>', 'Final comment'
            ]},
            { type: 'language', title: 'Phrases for preparing a presentation · identifying common themes', tabs: false, groups: [
              { label: 'Asking and comparing', phrases: ['Did your article mention…?', 'And did your articles mention…? — Yes, mine did. My article referred to…', 'In my article the authors say that…', 'My article explains that…', 'In my article they mentioned something similar…. They also discussed the…'] },
              { label: 'Naming a theme', phrases: ['It seems that all of our articles focus on...', 'All of our articles seemed to suggest that…', 'All of our articles described…', 'That seems to be an important recurring theme.', 'So another common theme we can see is that…', 'All our articles also mentioned that…'] }
            ]},
            { type: 'tip', text: '<b>Homework:</b> keep working on your notes about the main themes at home. Swap contact details with your group if you need to work together after class. Don’t worry — there is more time with your group on Tuesday.' },
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
      outcome: 'Listen and take notes, use modals of obligation to give advice, and use criteria to evaluate solutions to a problem.',
      activities: [
        {
          id: 'l1', short: 'Warmer', minutes: 5, grouping: 'Pairs',
          title: 'Warmer',
          goal: 'Predict how solar power, markets and apps are connected to food waste.',
          blocks: [
            { type: 'cards', title: 'Four pictures', items: [
              { label: 'Solar panels', icon: 'bulb', text: 'Panels in a field that turn sunlight into electricity.' },
              { label: 'An African market', icon: 'users', text: 'Fresh produce sold in an open-air market.' },
              { label: 'Food waste', icon: 'alert', text: 'A bin full of food that could have been eaten.' },
              { label: 'A food app', icon: 'layers', text: 'A phone app about food.' }
            ]},
            { type: 'talk', prompts: [
              'What can you see? How are the pictures related to <b>food waste</b>?',
              'Why might it be hard to keep food fresh in places where <b>electricity is unreliable</b>?',
              'How could an <b>app</b> help to reduce food waste?'
            ]},
            { type: 'teacher', ref: 'w4d1-t5' }
          ],
          answers: { items: [
            ['Solar + market', 'Solar food storage systems in Africa: cold rooms powered by the sun can prolong the shelf life of fresh food where electricity is unreliable. You will hear about this in the talk.'],
            ['Food waste + app', 'Apps help people manage food more efficiently — for example, buying only what they need or selling food cheaply before it is thrown out.']
          ]}
        },
        {
          id: 'l2', short: 'Vocabulary', minutes: 20, grouping: 'Groups of 3–4',
          title: 'Vocabulary',
          goal: 'Check three revision words, then teach your group the expressions you will hear in the talk.',
          blocks: [
            { type: 'flip', title: '1 · Revision: what do they mean?', hint: 'Explain to your partner, then turn the card.', items: [
              { front: 'a win-win situation', back: 'A situation that is good for both (or all) sides.' },
              { front: 'methane', back: 'A powerful greenhouse gas produced by rotting rubbish and by livestock.' },
              { front: 'a landfill', back: 'A place where rubbish is buried in the ground.' }
            ]},
            { type: 'quiz', id: 'l2q', title: '2 · “We throw away food that is close to some <b>arbitrary</b> expiration date.”', items: [
              { q: 'What does <b>arbitrary</b> mean?', options: ['Random — it does not follow a system', 'Official and exact', 'Very old'], answer: 'Random — it does not follow a system', why: 'An arbitrary date is not based on a clear rule.' },
              { q: 'So what does the sentence mean?', options: ['Expiration dates don’t always mean food is bad.', 'Food after the date is always dangerous.', 'Shops never check dates.'], answer: 'Expiration dates don’t always mean food is bad.', why: 'The dates are not reliable signs that food has gone bad.' }
            ]},
            { type: 'steps', title: '3 · Teach your group', items: [
              { who: 'group', text: 'Your teacher gives each student some sentences (e.g. Student A: 1–3, Student B: 4–6 …). You have <b>5 minutes</b> to prepare.' },
              { who: 'alone', text: 'Check the meaning of the expression in <b>bold</b>. Think about the meaning of the whole sentence.' },
              { who: 'group', text: 'Teach: ① explain the bold expression, ② read your sentence, ③ explain what the whole sentence means. Your groupmates take notes below.' }
            ]},
            { type: 'flip', title: 'The 12 sentences from the talk — turn a card only after you have taught it', hint: 'Front: the sentence. Back: what it means.', items: [
              { front: '1. Food waste has five times the <b>greenhouse gas footprint</b> of the entire aviation industry.', back: 'Food waste produces five times more greenhouse gases than the airline industry.' },
              { front: '2. Methane from landfills <b>is dwarfed by</b> the huge amount of energy and resources it takes to produce and transport food.', back: 'Methane from landfills is much smaller than the environmental impact of producing and transporting food.' },
              { front: '3. Overall, fixing food waste is <b>not rocket science</b>.', back: 'Fixing food waste is not difficult.' },
              { front: '4. Prevention gives you <b>the most bang for your buck</b>, both environmentally and financially.', back: 'Preventing food waste gives the best value for the money and effort.' },
              { front: '5. Only when donating extra food <b>has been exhausted</b> should we feed it to animals, compost it or recycle it.', back: 'Consider other methods only after we have donated as much as possible.' },
              { front: '6. In places that don’t have electricity, solar-powered cold rooms <b>extend shelf life</b> dramatically.', back: 'Food stays fresh for much longer when it is stored in cold rooms.' },
              { front: '7. Discounting apps, like Too Good To Go, have <b>spread like wildfire</b>.', back: 'The apps have spread very quickly to many places — they are very popular.' },
              { front: '8. Despite that incredible potential and some <b>beacons of progress</b>, overall, we are <b>barely moving the needle</b>.', back: 'Although there are some good examples of success, improvement is very slow and limited.' },
              { front: '9. “Best by” and “enjoy by” are really just <b>guesstimates</b> of when food is at its best.', back: 'Food labels are not very accurate — they are more like a guess.' },
              { front: '10. These strategies are not <b>Earth-shattering</b>.', back: 'The strategies are not very difficult or complicated.' },
              { front: '11. Reducing food waste really is <b>the low-hanging fruit</b>.', back: 'Reducing food waste is an easy part of the (climate) problem to solve.' },
              { front: '12. Love your leftovers. They are <b>the only true free lunch</b>.', back: 'Save the food you don’t eat after a meal — you can eat it again later at no extra cost.' }
            ]},
            { type: 'fields', title: 'My notes on my groupmates’ sentences', fields: [
              { id: 'l2-n', label: 'New expressions and what they mean', placeholder: 'not rocket science = not difficult…', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w4d1-t6' }
          ]
        },
        {
          id: 'l3', short: 'Gist', minutes: 5, grouping: 'Alone → pair',
          title: 'Listening for gist',
          goal: 'Hear what the speaker thinks about fixing food waste.',
          blocks: [
            { type: 'listening', source: 'Gunders (2024) · TED', title: 'How to turn the tables on food waste', videoId: '6iqXH9RPK1w', start: 222, clip: 'play 3:42–4:30', transcripts: [['gunders', 'Transcript (adapted)']] },
            { type: 'tip', text: 'Your teacher plays the extract from <b>3:42</b>. You only need the general idea.' },
            { type: 'quiz', id: 'l3q', items: [
              { q: 'Does the speaker think that fixing food waste is difficult?', options: ['Yes — it is a very hard problem', 'No — it is “not rocket science”'], answer: 'No — it is “not rocket science”', why: '“Fixing food waste is not rocket science. It’s really just about managing our food better, and it’s solvable.”' },
              { q: 'What kind of solutions does her organisation (ReFED) focus on?', options: ['Composting', 'Prevention', 'Food banks'], answer: 'Prevention', why: '“Many of them are about prevention… which is really our priority.”' }
            ]},
            { type: 'talk', prompts: ['What ways to <b>prevent</b> food waste do you already know? Think back to Weeks 2 and 3.'] }
          ],
          answers: { items: [
            ['Ways to prevent waste (Weeks 2–3)', 'Better supply chain management · better packaging · better storage and selling conditions in markets · discounting food that is about to expire · avoiding buying too much · understanding food labels.']
          ]}
        },
        {
          id: 'l4', short: 'Note-taking', minutes: 20, grouping: 'Alone → pair',
          title: 'Listening for detail: Note-taking',
          goal: 'Take notes on the whole talk under the headings.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Before you listen, read the headings. In which section will you hear the expressions from the vocabulary list?' },
              { who: 'alone', text: 'Listen to the whole talk and take notes. Use short words, symbols and numbers.' },
              { who: 'pair', text: 'Check your notes with the person next to you. Add points you missed. Then listen again.' }
            ]},
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
          answers: { title: 'Suggested notes', items: [
            ['The problem', '100 tractor trailers of food wasted every minute · 1 billion meals wasted every day globally · worth 1 trillion dollars.'],
            ['Climate impacts', 'Methane from rotting food in landfills · 5 × the greenhouse gases of the aviation industry · landfills = 3rd-largest source of methane in the US, ~60% from rotting food · even bigger: the energy and resources to grow, transport, cool and cook food are wasted.'],
            ['Projections to 2050', 'We will need ~50% more food than in 2010. Where will it come from (cut rainforests)? ~20% of the gap could be met by wasting less (land use).'],
            ['Reasons', 'Not measured, so invisible · food is cheap and throwing it away is cheaper · no infrastructure to keep food cold · worried about running out · “when in doubt, throw it out” · her son brings his lunch home untouched (a hard one!).'],
            ['Solutions', 'Prevention first (most bang for your buck), then donating, then animals/compost/recycling. ColdHubs (Nigeria): solar cold rooms → longer shelf life, farmer incomes +60%. Too Good To Go: app to discount food at the last minute, 17 countries, 100 million meals. Compass Group: tracking waste, smaller containers, different portions → up to 50% less waste.'],
            ['UN goal', 'Benefits: avoid converting land the size of Argentina, save ⅓ of projected biodiversity loss, avoid emissions = all cars in the US and Canada. Progress: too slow — “barely moving the needle”. Needed: investment/funds to scale solutions (US$18 billion in the US alone) → 4-to-1 return, 4 billion meals, 60,000 jobs.'],
            ['What else', 'Policy: laws restricting food going to landfill + infrastructure for composting → more donation and closer tracking. “These laws should be everywhere.”'],
            ['5 tips', '1 Don’t overbuy (lists, meal plans) · 2 Love your leftovers · 3 Freeze your food · 4 Use it up — shop your fridge before you restock · 5 Learn your labels — use your senses.']
          ]}
        },
        {
          id: 'l5', short: 'Understanding', minutes: 20, grouping: 'Alone → pair',
          title: 'Building understanding',
          goal: 'Use your notes to answer ten questions about the talk.',
          blocks: [
            { type: 'quiz', id: 'l5q', title: 'Questions 1, 5–10', items: [
              { q: '1. According to the listening, what is the <b>largest</b> environmental impact of food waste?', options: ['Methane from rotting food', 'Wasted energy from producing, transporting and selling food', 'Overuse of land for growing food', 'Wasted food creating extra landfills'], answer: 'Overuse of land for growing food', why: 'Methane is “dwarfed” by the energy and resources — “and there’s an even larger reason… land use” (paragraph D).' },
              { q: '5. What is the main benefit of achieving the UN goal to cut food loss and waste in half by 2030?', options: ['Reduced land for growing food, saving biodiversity and reducing emissions', 'Reduced methane, saving biodiversity and reducing food prices', 'Reduced land for growing food, reducing food insecurity and reducing emissions', 'Reduced methane, reducing food insecurity and reducing food prices'], answer: 'Reduced land for growing food, saving biodiversity and reducing emissions', why: 'Land the size of Argentina, one-third of projected biodiversity loss, emissions of all cars in the US and Canada (paragraph J).' },
              { q: '6. What does the speaker think about progress towards the UN goal?', options: ['The goal will be achieved due to new technology.', 'Progress is too slow, despite some good solutions.', 'The goal will be hard to achieve because consumers waste too much food.', 'The goal will be achieved in countries like Ecuador, Japan and France.'], answer: 'Progress is too slow, despite some good solutions.', why: '“Despite… some beacons of progress, overall, we are barely moving the needle.”' },
              { q: '7. What does the speaker think is needed to speed up solving food waste? (two things)', options: ['More investment + policies to prevent food waste', 'Better food storage + higher food prices', 'More investment + higher food prices', 'Policies to prevent food waste + better food storage'], answer: 'More investment + policies to prevent food waste', why: '“Let’s inject the funds to really scale them” and “We also need policy” (paragraphs K–M).' },
              { q: '8. Why does the speaker think solutions should focus on prevention?', options: ['Preventing food waste is easier.', 'Preventing food waste is more cost effective.', 'There are already many laws to prevent food waste.', 'Prevention will be accepted by consumers.'], answer: 'Preventing food waste is more cost effective.', why: 'Prevention gives “the most bang for your buck, both environmentally and financially”.' },
              { q: '9. Why does the speaker give us 5 tips?', options: ['Because reducing food waste is difficult for consumers.', 'Because people don’t know how to reduce their waste.', 'To give some practical advice that is easy to follow.', 'To emphasise that consumers waste too much food.'], answer: 'To give some practical advice that is easy to follow.', why: '“These strategies are not Earth-shattering.”' },
              { q: '10. Overall, what can we learn from this talk?', options: ['Food waste is a difficult problem that only governments can solve.', 'Supermarkets need to do more to reduce food waste.', 'We are unlikely to achieve the UN Sustainable Development Goals.', 'There are many simple ways to reduce food waste, but some solutions will require government support.'], answer: 'There are many simple ways to reduce food waste, but some solutions will require government support.', why: 'Simple tips for households + investment and policy for the system.' }
            ]},
            { type: 'sort', id: 'l5s', title: 'Questions 2–4 · Match the problem to the organisation with a solution', single: true, buckets: [
              { label: 'ColdHubs' }, { label: 'Compass Group' }, { label: 'Too Good To Go' }
            ], items: [
              { text: '2. Food goes bad in areas without electricity.', answer: 0, why: 'Solar-powered cold rooms in markets and farms.' },
              { text: '3. People don’t eat all of their food at restaurants.', answer: 1, why: 'Smaller containers on buffets and different portion sizes.' },
              { text: '4. Supermarkets throw away expired food.', answer: 2, why: 'An app to discount food at the last minute.' }
            ]},
            { type: 'sources', ids: ['gunders'] }
          ]
        },
        {
          id: 'l6', short: 'Giving advice', minutes: 10, grouping: 'Whole class',
          title: 'Academic speaking skills',
          goal: 'Notice how the speaker gives advice: modals of obligation, imperatives and spoken transitions.',
          blocks: [
            { type: 'passage', id: 'l6p1', title: 'Transcript section 1 — highlight the language that gives advice', text: 'First, shopping. Shopping is really where we commit to food, and so we need to be careful not to overbuy. Old-school things like shopping lists and meal planning really help. And let me be clear, frozen pizza and takeout are totally legit as part of your plan.<br><br>Next, as I tell my friends at the end of dinner, love your leftovers. They are the only true free lunch.' },
            { type: 'quiz', id: 'l6q', items: [
              { q: 'Paragraph 1: which expression gives advice?', options: ['need to', 'really help', 'let me be clear'], answer: 'need to', why: '“we need to be careful not to overbuy” — a modal of obligation.' },
              { q: 'Which modals are <b>more common in academic writing</b>?', options: ['should / ought to', 'must / have to / need to'], answer: 'should / ought to', why: '“Must”, “have to” and “need to” are stronger, so they are less common in academic writing.' },
              { q: 'Paragraph 2: “<b>love</b> your leftovers” is…', options: ['an imperative', 'a modal verb', 'a question'], answer: 'an imperative', why: 'The sentence begins with a verb — an imperative. It gives direct advice.' },
              { q: 'How does she show she is moving to a new tip? Can we use this in writing?', options: ['“Next” — a spoken transition, not for academic writing', '“Next” — fine in academic essays', '“Old-school” — a written transition'], answer: '“Next” — a spoken transition, not for academic writing', why: 'In writing we use e.g. “Furthermore” or “In addition”.' }
            ]},
            { type: 'key', title: 'Three ways to give advice when you speak', compare: [
              { label: 'Modals of obligation', text: 'must · have to · should · ought to · need to · had better', eg: 'We need to be careful not to overbuy.' },
              { label: 'Imperatives', text: 'Start with the verb. Add <b>be sure to</b> to sound a little softer.', eg: 'Love your leftovers. · Be sure to shop your fridge.' },
              { label: 'Spoken transitions', text: 'Signal a new tip: first · next · number three · and lastly.', eg: 'Next, use it up.' }
            ]},
            { type: 'passage', id: 'l6p2', title: 'Transcript section 2 — find modals, imperatives and transition signals', text: 'And when you get sick of them, you can move on to number three, which is freeze your food. Your freezer is like a magic pause button, and so many things can be frozen that you don\'t think of: bread, milk, cheese and that half jar of pasta sauce you didn\'t use.<br><br>Next, use it up. In my house, this looks like my husband eating that peanut butter and jelly sandwich for dinner. But for you, it might be whipping up a stir fry with whatever veggies are wilting in your fridge. Whatever it is, be sure to shop your fridge before you restock it.<br><br>And lastly, learn your labels. "Best by" and "enjoy by" are really just guesstimates of when food is at its best, they’re not an indication that it’s gone bad. So be sure to use your senses before you toss things.' },
            { type: 'teacher', ref: 'w4d1-t8' }
          ],
          answers: { title: 'Section 2', items: [
            ['Imperatives', 'freeze your food · use it up · (be sure to) shop your fridge · learn your labels · (be sure to) use your senses'],
            ['Modals', 'you <b>can</b> move on to number three (also: can be frozen, it might be — possibility)'],
            ['Transition signals', 'number three · Next · And lastly']
          ]}
        },
        {
          id: 'l7', short: 'Advice game', minutes: 10, grouping: 'Groups of 3',
          title: 'Language in use: Giving advice',
          goal: 'Give a friend advice with modals of obligation, imperatives and transition signals.',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Model together: your classmate is worried about passing DEC10 — especially the listening test. Give advice!' },
              { who: 'group', text: 'Student A reads problem A. B and C have <b>1 minute</b> to think of advice.' },
              { who: 'group', text: 'B and C take turns giving advice. A decides whose advice is better and says why. Repeat for B and C.' }
            ]},
            { type: 'cards', title: 'The problems', items: [
              { label: 'Model', text: 'Your classmate in DEC15 is worried about passing DEC10. They are especially worried about the listening test.' },
              { label: 'A', text: 'Your friend is late on the final day of DEC10 exams. The exam starts in 10 minutes. They overslept, so they won’t arrive on time.' },
              { label: 'B', text: 'Your friend’s accommodation is close to the university, but it is very noisy at night. They can’t sleep and want to move to a quieter apartment.' },
              { label: 'C', text: 'Your classmate’s mother is sick, and she urgently has to go back to her country. The final DEC exam is next week.' }
            ]},
            { type: 'language', title: 'Give advice — and change points', tabs: false, groups: [
              { label: 'Advice', phrases: ['You need to…', 'You should… / You ought to…', 'You’d better…', 'You must…', 'Call… / Email… (imperative)', 'Be sure to…'] },
              { label: 'Moving to the next tip', phrases: ['First, …', 'Next, …', 'Number three is…', 'And lastly, …'] }
            ]},
            { type: 'teacher', ref: 'w4d1-t9' }
          ]
        },
        {
          id: 'l8', short: 'Evaluate the tips', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Criticality: Evaluating solutions',
          goal: 'Use four criteria to evaluate the speaker’s five tips.',
          blocks: [
            { type: 'cards', title: 'Four criteria to evaluate a solution', numbered: true, items: [
              { label: 'Relevance', text: 'Is the solution clearly related to the problem?' },
              { label: 'Effectiveness', text: 'Will the solution achieve its goals?' },
              { label: 'Impact', text: 'What difference will the solution make?' },
              { label: 'Feasibility', text: 'How easy will it be to implement the solution?' }
            ]},
            { type: 'tip', text: 'Short on time? Each person takes <b>one criterion</b> and reports back to the group.' },
            { type: 'table', id: 'l8t', title: 'Evaluate the 5 tips', columns: ['Tip', 'Relevance', 'Effectiveness', 'Impact', 'Feasibility'], fixed: [
              '1. Don’t overbuy', '2. Love your leftovers', '3. Freeze your food', '4. Use it up — shop your fridge before you restock it', '5. Learn your labels — use your senses'
            ]},
            { type: 'choose', id: 'l8c', title: 'Overall, are these tips a good way to reduce food waste?', options: ['Yes — easy and effective', 'Partly — they help, but bigger changes are needed', 'Not really — the impact is too small'] },
            { type: 'talk', prompts: ['Explain your overall answer. Which criterion was most important for your group? Why?'] }
          ],
          answers: { items: [
            ['A possible evaluation', 'The tips are highly <b>relevant</b> (consumers are the largest source of food waste) and very <b>feasible</b> (cheap, “old-school”, no technology needed). Their <b>effectiveness</b> depends on people changing habits. The <b>impact</b> of one household is small, but large if many people follow them — the speaker also says investment and policy are needed.']
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
      outcome: 'Read and take paraphrased notes, use modals of probability to express degrees of certainty, and critically apply solutions to different problems.',
      activities: [
        {
          id: 'r1', short: 'Warmer', minutes: 5, grouping: 'Pairs',
          title: 'Warmer: Three stages of food waste',
          goal: 'Complete the table of the three stages of household food waste.',
          blocks: [
            { type: 'grid', id: 'r1g', title: 'Choose the missing information', rows: ['Acquisition', 'Consumption', 'Disposal'], columns: ['Activity', 'Location'], options: ['Planning and purchasing food', 'Preparing and eating food', 'Throwing away uneaten food', 'Supermarket', 'Households'],
              given: { '1-0': 'Preparing and eating food' },
              answers: [['Planning and purchasing food', 'Supermarket'], ['Preparing and eating food', 'Households'], ['Throwing away uneaten food', 'Households']] },
            { type: 'teacher', ref: 'w4d1-t10' }
          ],
          answers: { items: [
            ['The three stages', '<img src="assets/week4/food-waste-stages.svg" alt="Three stages of household food waste: acquisition (planning and purchasing food, supermarket), consumption (preparing and eating food, household) and disposal (throwing away uneaten food, household).">']
          ]}
        },
        {
          id: 'r2', short: 'Vocabulary', minutes: 10, grouping: 'Pairs',
          title: 'Vocabulary',
          goal: 'Revise three words, learn nine new ones and think about two thinking errors.',
          blocks: [
            { type: 'talk', title: '1 · Revision — explain to the person next to you', prompts: ['impulse buying', 'leftovers', 'foodborne illnesses'] },
            { type: 'flip', title: '2 · Key words from the reading', hint: 'Guess the meaning, then turn the card.', items: [
              { front: 'cognitive bias', back: 'An error in thinking.' },
              { front: 'burdensome', back: 'Difficult to do; it needs a lot of effort.' },
              { front: 'portion-ready food delivery', back: 'Food that is measured, prepared and ready to cook, delivered to you.' },
              { front: 'crucial', back: 'Extremely important.' },
              { front: 'foodborne illness', back: 'An illness that is caused by bad food.' },
              { front: 'food inventory', back: 'A list of how much food you have.' },
              { front: 'compost', back: 'Decayed organic material used as a plant fertiliser.' },
              { front: 'rural', back: 'Countryside.' },
              { front: 'urban', back: 'City.' }
            ]},
            { type: 'quiz', id: 'r2q', title: '3 · Two cognitive biases in the text', items: [
              { q: '<b>The present bias</b> means…', options: ['giving greater value to things now than to things in the future', 'thinking future tasks will be easy'], answer: 'giving greater value to things now than to things in the future', why: 'In the supermarket, buying now feels more important than cooking or eating later → overbuying.' },
              { q: '<b>The planning fallacy</b> means…', options: ['giving greater value to things now than to things in the future', 'underestimating how difficult or long future tasks will be'], answer: 'underestimating how difficult or long future tasks will be', why: 'People underestimate the time and effort to prepare food → unused food → waste.' }
            ]},
            { type: 'talk', prompts: ['How could each bias lead to food waste? Give an example from your own shopping.'] }
          ]
        },
        {
          id: 'r3', short: 'Abstract', minutes: 10, grouping: 'Alone → pair',
          title: 'Annotated reading',
          goal: 'Read the abstract and predict how apps can help at each stage.',
          blocks: [
            { type: 'passage', id: 'r3p', title: 'Abstract', text: 'This paper proposes an intervention using personal Information and Communication Technologies (ICTs) to help consumers reduce household food waste. Across the global food-supply chain, about one-third of all edible food is lost or wasted each year, and this issue is particularly pressing in the Global North. We present a detailed overview of consumer activity in relation to household food waste. We trace consumer activity along the acquisition, storage, consumption, and disposal stages and provide a comprehensive set of recommendations on how to use personal ICTs to reduce household food waste rooted in the current empirical literature' },
            { type: 'quiz', id: 'r3q', items: [
              { q: 'What is a more common word for <b>ICTs</b> in this text?', options: ['Apps (applications)', 'Supermarkets', 'Recipes'], answer: 'Apps (applications)', why: 'Personal ICTs = mobile apps on your phone.' }
            ]},
            { type: 'talk', prompts: ['Do you use any food apps? Which ones?', 'How could apps help to reduce food waste at the different stages of the food waste cycle?'] }
          ]
        },
        {
          id: 'r4', short: 'Jigsaw notes', minutes: 25, grouping: 'Groups (jigsaw)',
          title: 'Reading for note taking',
          goal: 'Read one section, summarise it for classmates who read different sections, and listen to theirs.',
          blocks: [
            { type: 'sources', ids: ['castro'] },
            { type: 'cards', title: 'Your teacher gives you one section', pick: 'r4-mine', items: [
              { label: 'Acquisition', text: 'Paragraphs B–D' },
              { label: 'Consumption', text: 'Paragraphs E–H' },
              { label: 'Disposal', text: 'Paragraphs I–K' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: '<b>10 min.</b> Sit with students who read the same section. Read and take notes. Share notes with your table.' },
              { who: 'group', text: '<b>10 min.</b> Move to a new group with someone from each section. Take turns to <b>summarise your section — speak, don’t read or swap notes</b>. Listen and add notes.' },
              { who: 'alone', text: '<b>5 min.</b> Quickly read the two sections you didn’t read.' }
            ]},
            { type: 'fields', title: 'My notes', fields: [
              { id: 'r4-1', label: 'My section: causes of waste', placeholder: 'Overbuying…', rows: 3 },
              { id: 'r4-2', label: 'My section: ICT solutions (apps)', placeholder: 'No Waste and Plus Fridge Pal…', rows: 3 },
              { id: 'r4-3', label: 'My section: limitations of the solutions', placeholder: 'Users must…', rows: 2 },
              { id: 'r4-4', label: 'Notes from my classmates’ summaries', placeholder: 'Consumption: … · Disposal: …', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w4d1-t11' }
          ]
        },
        {
          id: 'r5', short: 'Summary table', minutes: 10, grouping: 'Groups',
          title: 'Summarise/paraphrase',
          goal: 'Reorganise your notes into a summary table — paraphrased and short.',
          blocks: [
            { type: 'key', title: 'Reduce to the main points', points: ['Keep only the <b>main points</b> and relevant supporting details.', '<b>Paraphrase</b> — use your own words, not whole sentences from the text.', 'One row per stage, one column per question.'] },
            { type: 'table', id: 'r5t', title: 'Summary table', columns: ['Stage', 'Causes of waste', 'ICT solutions', 'Limitations to solutions'], fixed: ['Acquisition', 'Consumption', 'Disposal'] },
            { type: 'teacher', ref: 'w4d1-t12' }
          ],
          answers: { items: [
            ['Acquisition', '<b>Causes:</b> overbuying; impulse purchasing; supermarket layouts. <b>Solutions:</b> No Waste and Plus Fridge Pal — track what you need, remind you what you bought and didn’t use; portion-ready food apps. <b>Limitations:</b> users must enter data by hand.'],
            ['Consumption', '<b>Causes:</b> fear of getting sick; misunderstanding labels; incorrect storage; throwing away food that is good to eat. <b>Solutions:</b> No Waste and Plus Fridge Pal (track food, know if it is safe); Plant Jammer (use food before it expires, use leftovers). <b>Limitations:</b> manual data entry; may show unsafe food as good to eat.'],
            ['Disposal', '<b>Causes:</b> people throw away food. <b>Solutions:</b> food-sharing apps (EquoEvento, FoodSharing.de, IFoodShare). <b>Limitations:</b> more suitable for businesses than households; hard to build trust and a sense of community.']
          ]}
        },
        {
          id: 'r6', short: 'Understanding', minutes: 20, grouping: 'Alone → pair',
          title: 'Building Understanding',
          goal: 'Use your notes to answer ten questions about the reading.',
          blocks: [
            { type: 'quiz', id: 'r6q', items: [
              { q: '1. What is the main benefit of food apps?', options: ['Many people can access them.', 'They are very cheap and convenient to use.', 'Many people are addicted to smartphones.', 'No benefits are mentioned.'], answer: 'Many people can access them.', why: 'They “can be easily made available to a large proportion of consumers” (A).' },
              { q: '2. Why is food wasted at the acquisition stage?', options: ['Consumers buy food that they don’t need.', 'Supermarkets buy too much fresh produce to give “the illusion of abundance”.', 'Supermarket layouts are confusing.', 'Consumers buy food that they don’t know how to cook.'], answer: 'Consumers buy food that they don’t need.', why: 'Impulse buying (B). The “illusion of abundance” was in Week 2, not in this text.' },
              { q: '3. How can apps help consumers overcome the present bias and planning fallacy?', options: ['They help consumers choose food they like and direct them to affordable items.', 'They keep a shopping list and recommend recipes.', 'They help consumers buy only what they need and remind them of past mistakes.', 'They can’t help — these are thinking problems.'], answer: 'They help consumers buy only what they need and remind them of past mistakes.', why: 'They track needs and show “which items were bought and not used” (C).' },
              { q: '4. Do the authors think current apps are a good way to stop waste at the acquisition stage?', options: ['Yes, apps are a great way to reduce waste.', 'Yes, apps help consumers find the food they want.', 'No, apps cannot help with cognitive biases.', 'Some apps are useful, but others may need additional features.'], answer: 'Some apps are useful, but others may need additional features.', why: 'Entering data is “burdensome”; a barcode scanner “could simplify this process” (D).' },
              { q: '5. How can consumer knowledge impact food waste at the consumption stage? (two things)', options: ['They don’t know how to judge if food is safe + they might not remember what food they have', 'They only cook food from their culture + most know how to use leftovers', 'They don’t know how to judge if food is safe + most know how to use leftovers'], answer: 'They don’t know how to judge if food is safe + they might not remember what food they have', why: '“not knowing how to check if food is still good… forgetting what they have” (F).' },
              { q: '6. What is the main limitation of NoWaste and Plus Fridge Pal?', options: ['Users must manually enter data.', 'They often indicate expired food is safe to eat.', 'They can’t stop people buying too much food.', 'They don’t recommend recipes.'], answer: 'Users must manually enter data.', why: 'Their effectiveness “depends on how accurately users update their food inventory” (G).' },
              { q: '7. What is the authors’ opinion of composting?', options: ['It is a great way to reduce food waste.', 'It has both environmental and social benefits.', 'Not a good solution: it does not decrease waste and may have unintended consequences.', 'It is a good way to produce fertiliser.'], answer: 'Not a good solution: it does not decrease waste and may have unintended consequences.', why: 'It “doesn’t directly cut down the amount of waste”; 41% in the US weren’t concerned about waste because they compost (I).' },
              { q: '8. Why might sharing food be more common in rural areas?', options: ['Rural people cook more fresh food.', 'Urban people are too busy to cook and share.', 'People in rural areas are more likely to know and trust each other.', 'Urban people eat out more often.'], answer: 'People in rural areas are more likely to know and trust each other.', why: 'Rural communities “encourage more personal interactions” (J).' },
              { q: '9. How can food-sharing apps help users trust each other?', options: ['By building a sense of community and using ratings.', 'By organising weekly meetings.', 'By delivering food more quickly.', 'By encouraging rural people to join.'], answer: 'By building a sense of community and using ratings.', why: 'Technology that fosters community + letting users “rate and review each other” (K).' },
              { q: '10. What is the authors’ overall message?', options: ['If carefully designed, food apps can be a good way to reduce food waste.', 'Reducing food waste is the responsibility of individual consumers.', 'Food-sharing apps are the best way to reduce food waste.', 'Current food apps are limited in their functionality.'], answer: 'If carefully designed, food apps can be a good way to reduce food waste.', why: 'Apps “can help”, although current ones have limitations (L).' }
            ]}
          ]
        },
        {
          id: 'r7', short: 'Modals of probability', minutes: 15, grouping: 'Pairs',
          title: 'Academic speaking skills',
          goal: 'Notice how the authors use modals to show how certain they are.',
          blocks: [
            { type: 'talk', title: 'Remember Week 1?', prompts: ['What <b>hedging language</b> do you remember? (e.g. may, might, could, tend to, suggest…)'] },
            { type: 'passage', id: 'r7p', title: 'Three extracts — highlight the hedging language', text: '1. Secondi et al. (2015) pointed out that a lot of food waste could be avoided if food was better portioned, managed, stored, and prepared. It\'s also crucial to consider if people reuse leftovers, as this can greatly reduce food waste.<br><br>2. However, a challenge with this method is the need to enter product details and expiration dates into the app, which can be quite burdensome. Integrating a barcode scanner or connecting the app with online grocery delivery services could simplify this process.<br><br>3. Although Morton’s study doesn\'t go into detail about the differences between rural and urban areas, it suggests that rural communities are designed to encourage more personal interactions, which might lead to more food sharing. Urban areas, however, tend to use digital solutions.' },
            { type: 'quiz', id: 'r7q', items: [
              { q: 'Why did the authors use hedging language (could, might, suggests, tend to)?', options: ['The outcomes have not been tried yet, so they are uncertain.', 'They want to sound informal.', 'They disagree with the sources.'], answer: 'The outcomes have not been tried yet, so they are uncertain.', why: 'They talk about possible results.' },
              { q: 'The authors use <b>can</b> in extracts 1 and 2 (“can greatly reduce”, “can be quite burdensome”). Why?', options: ['They are confident: it describes ability, not just possibility.', 'They are not sure at all.', 'It is the past tense.'], answer: 'They are confident: it describes ability, not just possibility.', why: '“Can” = this is known to happen.' },
              { q: 'Skim the whole text. Which modal appears most often — and why?', options: ['can — the apps already exist, so outcomes are fairly well known', 'might — everything is uncertain', 'must — the authors give orders'], answer: 'can — the apps already exist, so outcomes are fairly well known', why: 'They describe apps that are already in use.' }
            ]},
            { type: 'key', title: 'Modals show degrees of certainty', compare: [
              { label: 'More certain', text: '<b>can</b> · will — ability, or a known result', eg: 'This can greatly reduce food waste.' },
              { label: 'Less certain', text: '<b>could · may · might</b> — a possible result', eg: 'A barcode scanner could simplify this process.' }
            ]}
          ]
        },
        {
          id: 'r8', short: 'Modal spinner', minutes: 10, grouping: 'Pairs',
          title: 'Language in use',
          goal: 'Make sentences with a random modal verb — and check your partner’s.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Spin. Use the <b>modal verb</b> to connect a sentence beginning and a sentence end that make sense — e.g. <i>My cat <b>might</b> eat my lunch.</i>' },
              { who: 'pair', text: 'Say your sentence to your partner. Does the modal make sense? If not, ask them to explain.' },
              { who: 'pair', text: 'You can begin anywhere and use items more than once. You can also choose your own beginning and end instead of the reels.' }
            ]},
            { type: 'spinner', id: 'r8s', title: 'Modals of probability spinner', reels: [
              { label: 'Sentence beginning', items: ['Portion-ready food delivery services', 'Hello Panda', 'Food inventory apps that can scan barcodes', 'Aliens', 'My cat', 'Sharing food with my neighbours', 'Composting', 'Not writing a shopping list', 'Supermarkets', 'I'] },
              { label: 'Modal verb', items: ['can', 'could', 'may', 'might', 'will', 'can’t', 'won’t', 'might not'] },
              { label: 'Sentence end', items: ['reduce food waste', 'solve world hunger', 'create more food waste', 'encourage overbuying', 'eat my lunch', 'cook healthy meals', 'create extra problems', 'waste money', 'help to avoid cognitive biases'] }
            ]},
            { type: 'teacher', ref: 'w4d1-t13' }
          ]
        },
        {
          id: 'r9', short: 'Recommend an app', minutes: 15, grouping: 'Groups of 2–3',
          title: 'Criticality',
          goal: 'Recommend app features to four people who waste food — and explain why.',
          blocks: [
            { type: 'figure', src: 'assets/week4/app-features.svg', alt: 'Four app functions: smart inventory, smart recipes, food-sharing hub and portion-ready food delivery, with what each can do.', caption: 'App functionalities', credit: 'Adapted from Castro et al. (2023)', size: 'wide' },
            { type: 'cards', title: 'Four people', items: [
              { label: 'Person A', text: 'Lives alone and loves to cook, but often forgets ingredients. He doesn’t plan before shopping and buys food he already has. He throws food away and often orders takeaway.' },
              { label: 'Person B', text: 'Loves to cook and writes a shopping list, but gets excited and buys too much. She cooks too much and can’t eat it all before it goes bad.' },
              { label: 'Person C', text: 'Doesn’t like cooking — planning takes too long. Worried about unsafe food because labels are confusing, so he avoids the supermarket and eats unhealthy takeaway.' },
              { label: 'Person D', text: 'Wants to spend less on food. She lives in a share house and wants housemates to buy in bulk and share — and to track whether it saves money.' }
            ]},
            { type: 'table', id: 'r9t', title: 'Our recommendations', columns: ['Person', 'App feature(s) we recommend', 'Why — with reference to the app functions'], fixed: ['Person A', 'Person B', 'Person C', 'Person D'] }
          ],
          answers: { items: [
            ['Person A', 'Smart inventory to track stock; smart recipes to use ingredients before they expire.'],
            ['Person B', 'Smart inventory to track past waste; smart recipes to manage portion sizes; a food-sharing hub to share extra food.'],
            ['Person C', 'Portion-ready food delivery (healthier than takeaway); smart inventory to understand labels; smart recipes may inspire him to cook.'],
            ['Person D', 'Food-sharing hub to set up and manage a shared food arrangement; smart inventory to track expenses.']
          ]}
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'Read the talk', minutes: 15, grouping: 'Alone', category: 'Extra listening',
      title: 'Read the TED talk transcript',
      goal: 'Find the five tips again and write your own advice.',
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
    ['win-win', 'Good for both (or all) sides.', 'Too Good To Go is a win-win for shops and customers.'],
    ['methane', 'A powerful greenhouse gas produced by rotting rubbish and livestock.', 'Rotting food in landfill produces methane.'],
    ['landfill', 'A place where rubbish is buried in the ground.', 'Food goes straight to a landfill.'],
    ['arbitrary', 'Random; not based on a system or rule.', 'An arbitrary expiration date.'],
    ['not rocket science', 'Not difficult.', 'Fixing food waste is not rocket science.'],
    ['bang for your buck', 'Good value for the money or effort.', 'Prevention gives the most bang for your buck.'],
    ['shelf life', 'How long food stays fresh and safe to sell or eat.', 'Cold rooms extend shelf life.'],
    ['spread like wildfire', 'Spread very quickly.', 'The app spread like wildfire.'],
    ['move the needle', 'Make a noticeable difference.', 'We are barely moving the needle.'],
    ['low-hanging fruit', 'The easiest part of a problem to solve.', 'Reducing food waste is the low-hanging fruit.'],
    ['modal of obligation', 'A verb like must, have to, should, need to that tells someone what to do.', 'We need to be careful not to overbuy.'],
    ['imperative', 'A sentence that starts with a verb and gives an instruction.', 'Freeze your food.'],
    ['feasibility', 'How easy or practical it is to do something.', 'The feasibility of the tips is high.'],
    ['acquisition', 'Getting or buying something.', 'The acquisition stage = planning and buying food.'],
    ['cognitive bias', 'An error in thinking.', 'The present bias is a cognitive bias.'],
    ['burdensome', 'Difficult; it needs a lot of effort.', 'Entering every item is burdensome.'],
    ['crucial', 'Extremely important.', 'It is crucial to reuse leftovers.'],
    ['foodborne illness', 'An illness caused by bad food.', 'Fear of foodborne illness leads to waste.'],
    ['food inventory', 'A list of how much food you have.', 'Update your food inventory in the app.'],
    ['compost', 'Decayed plant and food material used to feed soil.', 'Composting doesn’t reduce the amount of waste.'],
    ['rural / urban', 'Countryside / city.', 'Sharing is more common in rural areas.'],
    ['modal of probability', 'A verb like can, could, may, might that shows how certain something is.', 'Apps could simplify this process.']
  ]
};
