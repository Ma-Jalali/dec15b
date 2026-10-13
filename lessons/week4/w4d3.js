/* DEC15 · Week 4, Day 3 — lesson content.
   Teacher’s Book: W4 D3 · 6A Discussion skills 2 (60) · 7A AST: Criticality: Engaging with sources (60)
   · 8A Academic writing skills 2 (90) · 9A Building rapport (30).
   Texts: Huang et al. (2024) · Gunders (2024) · Castro et al. (2023) — lessons/week4/sources.js.
   Language tables in 8A from the Student booklet (W4 D3 8B). Activity titles use the Teacher’s Book headings.
   v2: related activities are merged into one tab ('Part 1 ·', 'Part 2 ·' block titles keep the Teacher’s Book
   headings). The full phrase lists are in extras → x3 'Phrase bank'.
   v3 (upper-intermediate, functional): personal lead-ins, 6–7 useful words with a quick check before each text,
   short gist/detail questions, upgraded speaking language (model → controlled practice → speaking + peer check).
   The pre-intermediate grammar drills (o2c1, quantifier cards, o2c2, o3c) moved to extras → x4 'Grammar review'.
   v4 (clear language pages): every language tab teaches ONE point in five stages — Part 1 Notice (1–2 quotes),
   Part 2 Clarify (forms + everyday examples + common mistakes), Part 3 controlled practice, Part 4 less controlled,
   Part 5 production (model, frame, checklist). o2 options · o3 speculating · f2 flexibility · s1 modality ·
   s3 evaluative words · s5 hedging · s6 reporting verbs; s8 puts the tools together. Activities 2–3 (15-sentence
   grids s4g, s7g) moved to extras → x5; o3s/o3q/d3n-o2c to x4; full lists to x3. f1 has a note-taking table
   for the Week 4 writing task (h4-f1t).
   Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true). */

window.DEC15_LESSON = {
  id: 'w4d3',
  week: 4, day: 3,
  title: 'Negotiate, stay flexible, take a stance',
  duration: 'About 4 hours',
  question: 'How can we compare options, stay open to other views — and still show a clear stance in speaking and writing?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week4/hero-w4d3.svg',
  imageAlt: 'A balance scale, a town-hall table with six chairs, a slice of toast next to a jar of dark spread, and a pen.',
  journey: 'Tomorrow is your second Research Summary Discussion, so today is a dress rehearsal. You pitch and vote on the best options, speculate about what might happen, and act out a town meeting with real conflicts. Then you run a stance clinic: make claims stronger, softer and more persuasive.',
  finish: { title: 'Thursday', text: 'Research Summary Discussion 2' },

  sections: [
    /* ───────────────────────── 6A Discussion skills 2 ───────────────────────── */
    {
      id: 'options', number: '01', code: '6A', minutes: 60,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills 2',
      subtitle: 'Evaluating options and speculating',
      outcome: 'Use phrases to compare options and to talk about possible results. Think about your last discussion and get ready for tomorrow. Story: a dress rehearsal for tomorrow — your group argues for the best way to practise speaking, and the class votes.',
      activities: [
        {
          id: 'o1', short: 'Warmer', minutes: 10, grouping: 'Pairs → groups of 3–4',
          title: 'Warmer: Responding to a quote',
          goal: 'Talk about Vegemite. Then give your opinion on a quote.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Meet Vegemite', items: [
              { label: 'Vegemite', icon: 'sprout', text: 'A dark, salty spread from Australia. People eat a thin layer on toast. It is one of the first <b>upcycled foods</b> (= food made from things that people usually throw away).' }
            ]},
            { type: 'talk', title: '1 · Talk with a partner (2 minutes)', prompts: [
              'a) Have you ever tried Vegemite? What does it taste like?',
              'If not, would you like to try it? Why or why not?',
              'Would you buy a snack made from food “waste”? What would make you trust it?'
            ]},
            { type: 'quiz', id: 'o1q', title: 'Quick check', items: [
              { q: 'b) Why is Vegemite an example of <b>upcycled food</b>?', options: ['i) The jar is made from recycled glass.', 'ii) Vegemite is made from a waste product of beer making (brewer’s yeast).', 'iii) Vegemite uses vegetables that are close to the “best before” date.'], answer: 'ii) Vegemite is made from a waste product of beer making (brewer’s yeast).', why: 'Upcycled food uses things that people usually throw away. The cookies in Huang et al. (2024) are another example.' }
            ]},
            { type: 'key', title: 'Part 2 · Discussion: respond to the quote', points: [
              'Huang (2024) asserts that “<b>food businesses should clearly advertise the health benefits of upcycled food</b>”.',
              'Do you agree? Why or why not?',
              'Give one example from this week’s texts.'
            ]},
            { type: 'scale', id: 'd3n-o1v', title: 'Where do you stand? Move the X', statement: 'Food businesses should clearly advertise the health benefits of upcycled food.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Not sure' },
            { type: 'steps', items: [
              { who: 'alone', text: '1 minute: move the X. Note one reason or example.' },
              { who: 'group', text: 'Find people with a <b>different</b> X. Explain your view.' },
              { who: 'class', text: 'Who moved their X after talking? Why?' }
            ]},
            { type: 'sources', ids: ['huang', 'castro', 'gunders'] },
            { type: 'language', title: 'Useful language: responding to a quote', tabs: false, groups: [
              { label: 'Interpret it', phrases: ['As I read it, Huang is suggesting that…', 'I think “clearly” here implies that…', 'So, in a way, the quote is a call to action.'] },
              { label: 'Respond', phrases: ['I’d agree with that up to a point, but…', 'That’s a fair point, although I’m not convinced that…', 'I think Huang makes a really good point about…'] },
              { label: 'Bring in a source', phrases: ['According to Gunders (2024), …', 'This ties in with what Castro et al. (2023) found about…', 'In (Kenya), the country I researched, …'] }
            ]},
            { type: 'tip', text: '<b>Challenge:</b> use one phrase from each column. More phrases are in <b>Extras → Phrase bank</b>.' },
            { type: 'teacher', ref: 'w4d3-t1' }
          ]
        },
        {
          id: 'o2', short: 'Comparing', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 3: Evaluating different options',
          goal: 'One language point: compare three options and choose the best one — with a reason.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (2 min): two sentences from the sample discussion', points: [
              '“The environmental consequences are a <b>bigger worry than</b> the animal welfare issues.”',
              '“They are all really significant, but <b>I would still go with</b> the environment.”'
            ]},
            { type: 'quiz', id: 'h4-o2n', title: 'What is the speaker doing in each sentence?', shared: ['Showing how two options are different', 'Choosing the best option'], items: [
              { q: 'Sentence 1: “…a <b>bigger worry than</b>…”', answer: 'Showing how two options are different', why: '“bigger … than” compares two options. This is contrasting.' },
              { q: 'Sentence 2: “…but <b>I would still go with</b>…”', answer: 'Choosing the best option', why: 'The speaker picks one option. This is prioritising.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (3 min): compare, contrast, choose', points: [
              'Tomorrow’s <b>negotiation question</b> gives your group three options. You say which one is best and why. You don’t have to agree in the end.',
              'Good speakers do three things: say how the options are the <b>same</b>, say how they are <b>different</b>, then <b>choose</b> one and give a reason.'
            ]},
            { type: 'key', title: 'The forms — with everyday examples', compare: [
              { label: 'Compare (the same)', text: '<b>Both</b> A and B are… · <b>All</b> three are… · <b>None</b> of these would…', eg: '<b>Both</b> the bus and the train are cheap.' },
              { label: 'Contrast (different)', text: 'A is <b>much more</b> expensive <b>than</b> B. · <b>Whereas</b> A…, B… · A wouldn’t work <b>as well as</b> B.', eg: 'Cooking at home is <b>much cheaper than</b> buying takeaway.' },
              { label: 'Choose (the best)', text: '<b>Each</b> option has its merits, but for me the clear choice is… · <b>On balance</b>, the best option would be… <b>because</b>…', eg: '<b>On balance</b>, the library is the best place to study <b>because</b> it is quiet.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> <s>more cheaper</s> → <b>cheaper</b> · <s>Each options have</s> → <b>Each option has</b> · <s>work as good as</s> → <b>work as well as</b>. When you choose, always add <b>because…</b>' },
            { type: 'cloze', id: 'h4-o2c', title: 'Part 3 · Practice (3 min): choose the correct word', list: true,
              options: [['faster', 'more fast'], ['the best', 'the better'], ['Both', 'Each'], ['Each', 'All'], ['None', 'Both'], ['much', 'many'], ['well', 'good'], ['balance', 'balanced']],
              text: 'The train is {{1}} than the bus.\nFor me, the library is {{2}} place to study.\n{{3}} apples and bananas are cheap in summer.\n{{4}} option has its merits, but I prefer the café.\n{{5}} of these phones is perfect — they all have problems.\nA taxi is {{6}} more expensive than the bus.\nA bike wouldn’t work as {{7}} as a car in winter.\nOn {{8}}, the cheapest option is cooking at home.',
              answers: ['faster', 'the best', 'Both', 'Each', 'None', 'much', 'well', 'balance'],
              why: ['Short adjective + <i>-er</i>: fast → faster. Never “more fast”.', 'One place out of many = superlative: <i>the best</i>.', '<i>Both</i> = the two of them (plural verb: are).', '<i>Each</i> + singular noun: each option has…', '<i>None</i> = not any of them.', '<i>much</i> + comparative: much more expensive, much cheaper.', '<i>work well</i> (adverb), not “work good”.', '<i>On balance</i> = after thinking about all the points.'] },
            { type: 'model', title: 'Part 4 · Your turn (3 min): finish the sentences about your life — read the model first', text: '<i>Getting to campus:</i> <b>Both</b> the bus and the train are cheap, but the train is <b>much faster than</b> the bus. <b>On balance</b>, the clear choice is the train, <b>because</b> I’m never late.' },
            { type: 'fields', fields: [
              { id: 'h4-o2-1', label: 'Places to study (library, café, home): Both… / Whereas…', placeholder: 'Whereas the library is quiet, a café…', rows: 2 },
              { id: 'h4-o2-2', label: 'Ways to relax after class: … is much more … than …', placeholder: 'Going for a walk is much more relaxing than…', rows: 2 },
              { id: 'h4-o2-3', label: 'Ways to learn new words: Each option has its merits, but for me the clear choice is… because…', placeholder: 'Each option has its merits, but for me the clear choice is flashcards, because…', rows: 2 }
            ]},
            { type: 'chat', title: 'Part 5 · Speak (4 min): Best of three — first, a model pitch. Which option wins, and why?', lines: [
              ['Student 1', 'So: cooking classes, a food-sharing app or smaller portions in the café. <mark>Whereas</mark> the classes change habits, the app <mark>focuses more on</mark> leftovers.'],
              ['Student 2', 'True, but classes are <mark>considerably more expensive than</mark> the other two.'],
              ['Student 3', '<mark>Each option has its merits, but for me the clear choice is</mark> smaller portions. It’s cheap and it works straight away.'],
              ['Student 1', 'Hmm. <mark>On balance, the most realistic option would be</mark> the portions, yes — <mark>because</mark> nobody has to do anything extra.']
            ]},
            { type: 'steps', title: 'Game: Best of three', items: [
              { who: 'class', text: 'Spin a category. Every pair names <b>three options</b> (e.g. mango, strawberries, apples).' },
              { who: 'pair', text: '2 minutes: compare, contrast, then choose your winner.' },
              { who: 'pair', text: 'Pitch your winner in 30 seconds. Use <b>Both… / Whereas… / On balance… because…</b>' },
              { who: 'class', text: 'Vote for the most persuasive pitch. Then spin again.' }
            ]},
            { type: 'spinner', id: 'o2sp', title: 'Spin a category: which is the best?', text: 'Name three options. Then do the job on the second reel. Use the phrases from Part 2.', reels: [
              { label: 'Category', start: 'Spin!', items: ['Delicious fruit', 'Ice-cream flavours', 'Good fast-food chains', 'Relaxing holiday places', 'Exciting holiday places', 'Talented singers or musicians', 'Bad excuses for being late', 'Your choice!'] },
              { label: 'Your job', start: '…', items: ['Compare: how are they the same?', 'Contrast: how are they different?', 'Prioritise: which is the best? Why?'] }
            ]},
            { type: 'checklist', id: 'd3n-o2k', title: 'Peer check: did your partner…', items: [
              'compare or contrast before choosing?',
              'use at least 2 phrases from Part 2?',
              'give a reason for the best option (because…)?'
            ]},
            { type: 'teacher', ref: 'w4d3-t2' }
          ]
        },
        {
          id: 'o3', short: 'Speculating', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 3: Speculating (considering implications of different options)',
          goal: 'One language point: speculate — say what might happen if we choose an option.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (2 min): two sentences from the sample discussion', points: [
              '“<b>If we continue</b> like this, <b>we’ll have</b> no viable land for farming, nor clean water.”',
              '“<b>Without</b> a healthy environment, there <b>won’t be</b> any animals to protect.”'
            ]},
            { type: 'quiz', id: 'h4-o3n', title: 'What are the speakers talking about?', items: [
              { q: 'In both sentences, the speaker talks about…', options: ['what is true now', 'a possible result in the future'], answer: 'a possible result in the future', why: 'If … will / won’t = a possible result of a choice. This is speculating.' }
            ]},
            { type: 'sources', ids: ['negotiation-ending2'] },
            { type: 'key', title: 'Part 2 · Clarify (3 min): talking about possible results', points: [
              '<b>Speculate</b> = say what might happen if we choose an option.',
              'Why? In a negotiation, the <b>result</b> of an option is often your best reason to choose it — or to reject it.'
            ]},
            { type: 'key', title: 'The forms — with everyday examples', compare: [
              { label: 'Likely result: If + present, will', text: 'If we…, we’ll… · This could well lead to…', eg: '<b>If</b> I <b>drink</b> coffee at night, I<b>’ll</b> sleep badly.' },
              { label: 'Imagined result: If + past, would', text: 'If we went with A, the most likely outcome would be…', eg: '<b>If</b> the café <b>closed</b>, students <b>would</b> cook more.' },
              { label: 'unless = if not', text: 'Unless…, this is unlikely to work.', eg: 'I’ll be late <b>unless</b> the bus comes soon.' },
              { label: 'provided that = only if', text: 'Option C would work best, provided that…', eg: 'A food app works well, <b>provided that</b> people use it.' },
              { label: 'even if = still true', text: 'Even if we…, we’d still have to…', eg: '<b>Even if</b> I study all night, I won’t finish the book.' },
              { label: 'A risk', text: 'There’s a real risk that…', eg: '<b>There’s a real risk that</b> the small shop will close.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> <s>If we will ban plastic</s> → <b>If we ban</b> plastic, prices will rise. · <s>Unless we don’t act</s> → <b>Unless we act</b> (unless already means “if not”).' },
            { type: 'cloze', id: 'd3n-o3c', title: 'Part 3 · Practice (3 min): complete the speculating phrases', list: true, options: ['Even', 'lead', 'outcome', 'provided', 'risk', 'Unless'],
              text: 'If we banned plastic packaging, the most likely {{1}} would be higher prices.\nA tax on food waste could well {{2}} to less waste at home.\nThere’s a real {{3}} that small shops will close.\n{{4}} supermarkets cooperate, this plan is unlikely to work.\nA food-sharing app would work best, {{5}} that enough people use it.\n{{6}} if we cut household waste, farms would still lose food.',
              answers: ['outcome', 'lead', 'risk', 'Unless', 'provided', 'Even'],
              why: ['<i>the most likely outcome</i> = the most probable result.', '<i>lead to</i> = cause.', '<i>a real risk that</i> = something bad could happen.', '<i>Unless</i> = if not: if supermarkets don’t cooperate, it won’t work.', '<i>provided that</i> = only if.', '<i>Even if</i> = this is still true in that case.'] },
            { type: 'model', title: 'Part 4 · Consequences chain (3 min) — model first', list: [
              'A: <b>If we had</b> a four-day university week, <b>the most likely outcome would be</b> more free time.',
              'B: <b>This could well lead to</b> more students getting part-time jobs.',
              'A: <b>There’s a real risk that</b> they would then study less…'
            ]},
            { type: 'spinner', id: 'd3n-o3sp', title: 'Game: Consequences chain', text: 'Spin. A starts with the phrase on reel 2. B adds the next result. Keep the chain going — the first to get stuck loses.', reels: [
              { label: 'Option', start: 'Spin!', items: ['A four-day university week', 'Free lunch for every student', 'No food delivery apps on campus', 'All exams replaced by presentations', 'A tax on wasted food', 'Your choice!'] },
              { label: 'Start with', start: '…', items: ['If we went with this, the most likely outcome would be…', 'This could well lead to…', 'There’s a real risk that…', 'In the long run, this might result in…'] }
            ]},
            { type: 'talk', title: 'Part 5 · Mini-debate (4 min), then a class vote', prompts: [
              'From the sample discussion: “If we all shifted towards a largely plant-based diet, we’d minimise animal rights violations as well as the negative impacts on the environment.”',
              'Pairs: A agrees, B disagrees. 2 minutes. Speculate about <b>farmers, prices and health</b>.',
              'Frame — A: <i>If we all ate less meat, … This could well lead to…</i> · B: <i>Even if…, … / Unless…, … / There’s a real risk that…</i>',
              'Class vote: hands up if you agree. Did anyone change their mind?'
            ]},
            { type: 'checklist', id: 'd3n-o3k', title: 'Peer check: did your partner…', items: [
              'use at least 2 speculating phrases?',
              'talk about a risk or a condition (unless…, provided that…)?',
              'give a reason for their opinion?'
            ]},
            { type: 'teacher', ref: 'w4d3-t3' }
          ]
        },
        {
          id: 'o4', short: 'Practice', minutes: 20, grouping: 'Groups → alone',
          title: 'Discussion Practice + Action plan for further improvement',
          goal: 'Choose the best option with your group. Then check your plan for tomorrow.',
          blocks: [
            { type: 'key', title: 'Part 1 · Discussion Practice — the question', points: ['What’s the best way for students to practise their discussion skills outside the classroom?'] },
            { type: 'cards', title: 'Your teacher tells you which set of options your group discusses', pick: 'o4-set', items: [
              { label: 'Options 1', text: 'a) Joining a book club<br>b) Joining a sports club<br>c) Using social media' },
              { label: 'Options 2', text: 'a) Dating<br>b) Joining a study group<br>c) Volunteering for a community organisation' },
              { label: 'Options 3', text: 'a) Going to bars/nightclubs<br>b) Getting a job<br>c) Going to language exchange meet-ups' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: '<b>Round 1 · 4–5 min.</b> Talk in your group. <b>Agree</b> on the best option.' },
              { who: 'group', text: '<b>Round 2 · 4–5 min.</b> Change groups. Meet people with a different set of options.' },
              { who: 'group', text: 'Tell them your choice. Try to convince them it is the best.' },
              { who: 'group', text: 'Be <b>flexible</b>: if they have good arguments, you can change your mind.' },
              { who: 'alone', text: 'Afterwards, tick the skills you used. Aim for <b>two</b> phrases from each box.' }
            ]},
            { type: 'language', title: 'Useful language: negotiating', tabs: false, groups: [
              { label: 'Argue your choice', phrases: ['On balance, the clear choice is… because…', 'I’d still go with…, mainly because…', 'If we went with…, the most likely outcome would be…'] },
              { label: 'Push back politely', phrases: ['I take your point, but…', 'I’m afraid we don’t see eye to eye there.', 'Sorry to interrupt, but can I just add…?'] },
              { label: 'Move towards agreement', phrases: ['That’s a fair point — I hadn’t looked at it that way.', 'Could we at least agree that…?', 'You’ve convinced me. I’d be willing to go with…'] }
            ]},
            { type: 'checklist', id: 'o4k', title: 'Skills I used — tick them', items: [
              'Managing the discussion (taking turns, keeping it moving)',
              'Asking what someone means (clarification)',
              'Giving opinions',
              'Building on others’ ideas',
              'Saying my opinion strongly',
              'Showing surprise / agreeing / disagreeing',
              'Changing my mind after a good argument (flexibility)',
              'Comparing, contrasting and choosing the best option'
            ]},
            { type: 'steps', title: 'Round 3 · Class vote (3 min)', items: [
              { who: 'group', text: 'Each group names its winning option and its best reason (20 seconds).' },
              { who: 'class', text: 'Vote with your hands. Which option wins for the whole class?' }
            ]},
            { type: 'teacher', ref: 'w4d3-t4' },
            { type: 'steps', title: 'Part 2 · Self-regulation and monitoring (groupwork): Action plan for further improvement', items: [
              { who: 'alone', text: 'Open your self-reflection from your <b>first</b> Research Summary Discussion (Weeks 1–2).' },
              { who: 'alone', text: 'Find the last part: <b>Participating in the Discussion</b>.' },
              { who: 'alone', text: 'Read your Action plan. Remember it for tomorrow.' }
            ]},
            { type: 'fields', fields: [
              { id: 'o5-1', label: 'What did you do well in the discussion last time?', placeholder: 'I gave clear examples from my research…', rows: 2 },
              { id: 'o5-2', label: 'What was difficult? What will you do tomorrow?', placeholder: 'I didn’t disagree. Tomorrow I will…', rows: 3 }
            ]},
            { type: 'checklist', id: 'd3n-o4cd', title: 'Can-do check: I can now…', items: [
              'compare, contrast and prioritise three options',
              'speculate about results, risks and conditions',
              'push back politely and change my mind when there is a good argument',
              'name one thing I will do better in tomorrow’s discussion'
            ]},
            { type: 'key', tone: 'warn', title: 'Reminder', points: ['Tomorrow, bring your <b>laptop or tablet</b> and your <b>headphones</b>. You need them for the task.'] },
            { type: 'teacher', ref: 'w4d3-t5' }
          ]
        }
      ]
    },

    /* ───────────────────────── 7A AST: Criticality: Engaging with sources ───────────────────────── */
    {
      id: 'flex', number: '02', code: '7A', minutes: 60,
      tone: 'blue', art: 'critical',
      title: 'AST: Criticality: Engaging with sources',
      subtitle: 'Strong opinions, the opposite view and a town meeting',
      outcome: 'Support your opinion with evidence from the readings. Argue the other side. Use phrases that show you are open to new ideas. Story: Kooringal’s town meeting — six people with real conflicts must decide whether to adopt a food waste plan.',
      activities: [
        {
          id: 'f1', short: 'Warmer', minutes: 15, grouping: 'Pairs',
          title: 'Warmer: Strong opinions and the opposite view',
          goal: 'Write a strong opinion about food waste, support it — then argue the opposite.',
          blocks: [
            { type: 'talk', title: 'Lead-in · 2 minutes with a partner', prompts: [
              'Think about last week. Did you throw away any food? What, and why?',
              'Who do you think wastes more food: you, your family at home, or shops and restaurants?'
            ]},
            { type: 'cards', title: 'Part 1 · Warmer — choose a strong opinion (or write your own)', items: [
              { text: 'Food waste is a serious issue that needs to be addressed immediately.' },
              { text: 'Food waste is more of a problem in wealthy countries than in poorer ones.' },
              { text: 'Consumers are the biggest cause of food waste, and they need to change their habits.' },
              { text: 'Governments should punish supermarkets and restaurants that waste large amounts of food.' }
            ]},
            { type: 'model', title: 'Example: opinion → evidence → the opposite view', rows: [
              ['Opinion', 'Consumers are the biggest cause of food waste.'],
              ['Evidence', 'Gunders (2024) points out that consumers are the largest source of food waste.'],
              ['Opposite view', 'On the other hand, in poorer countries most food is lost on farms and in transport, not at home.']
            ]},
            { type: 'fields', fields: [
              { id: 'f1-1', label: 'My strong opinion about food waste', placeholder: 'Food waste is…', rows: 2 },
              { id: 'f1-2', label: 'Reasons and evidence from the readings (5 minutes)', placeholder: 'Gunders (2024) says… Castro et al. (2023)…', rows: 3 }
            ]},
            { type: 'sources', ids: ['gunders', 'castro', 'huang'] },
            { type: 'table', id: 'h4-f1t', title: 'My notes for the Week 4 writing task — keep them! (Should governments do more to solve the problem of food waste?)', columns: ['Source', 'Main point', 'Evidence / example', 'Useful for my position? (for / against)'], fixed: ['Gunders (2024)', 'Castro et al. (2023)', 'Huang et al. (2024)'], extraRows: true },
            { type: 'steps', items: [
              { who: 'pair', text: 'Tell your partner your opinion. Give reasons and evidence.' },
              { who: 'pair', text: 'Choose one opinion (yours or your partner’s).' },
              { who: 'pair', text: 'Now play <b>devil’s advocate</b>: argue the opposite view. Use ideas from the readings.' }
            ]},
            { type: 'spinner', id: 'f1sp', title: 'Argue the opposite!', text: 'Spin. Read the opinion. Now argue <b>against</b> it for 1 minute. Start with the phrase on the second reel.', reels: [
              { label: 'Opinion', start: 'Spin!', items: ['Food waste must be fixed now.', 'Rich countries waste more food.', 'Consumers cause most food waste.', 'Punish shops that waste food.', 'Your partner’s opinion'] },
              { label: 'Start with', start: '…', items: ['On the other hand, …', 'Another way to look at it is…', 'Some people would argue that…', 'That may be true, but what about…?'] }
            ]},
            { type: 'talk', prompts: ['Did the opposite view change your opinion? Did it give you new ideas?'] },
            { type: 'teacher', ref: 'w4d3-t6' }
          ],
          answers: { title: 'Suggested reasons', items: [
            ['Serious issue', 'Food waste adds to climate change. Wasting food also wastes the water and energy used to make it. Many people do not have enough food, so waste is not fair.'],
            ['Wealthy countries', 'People buy more than they need and throw food away. Supermarkets reject “ugly” food. In poorer countries most food is lost on farms or in transport (poor roads and storage), not at home.'],
            ['Consumers', 'Many people don’t plan meals, cook too much or store food badly. Labels like “use by” and “best before” confuse people, so they throw food away.'],
            ['Punish businesses', 'Supermarkets throw away good food to make room for new stock. Restaurants cook too much and don’t donate it. Rules can push businesses to find better ideas.']
          ]}
        },
        {
          id: 'f2', short: 'Language', minutes: 10, grouping: 'Pairs',
          title: 'Useful language: showing flexibility',
          goal: 'One language point: show you are open to other ideas — and still make your view clear.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (1 min): two sentences from the sample discussion', points: [
              '“<b>Yes, I admit that</b> those are big problems, <b>but</b> I think you’re being a bit dismissive.”',
              '“<b>I guess you’re right.</b> Those issues can’t be ignored.”'
            ]},
            { type: 'quiz', id: 'h4-f2n', title: 'What is the speaker doing?', shared: ['Accepting part of the other view, then keeping their own view', 'Changing their mind'], items: [
              { q: 'Sentence 1: “Yes, I admit that…, but…”', answer: 'Accepting part of the other view, then keeping their own view', why: 'The speaker accepts one point (“I admit”), then disagrees (“but”).' },
              { q: 'Sentence 2: “I guess you’re right.”', answer: 'Changing their mind', why: 'The speaker now agrees with the other person.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (2 min): what is flexibility?', points: [
              '<b>Flexibility</b> = showing that you listen and are open to other ideas.',
              'Why? In university discussions you are marked on how you respond to others. You can be open <b>and</b> still clear about your view.'
            ]},
            { type: 'key', title: 'The forms — with everyday examples', compare: [
              { label: 'Offer another view', text: 'Alternatively, … · Another way to look at it is…', eg: '<b>Another way to look at it is</b> that online classes save travel time.' },
              { label: 'Balance both sides', text: 'While it’s true that…, it’s also worth considering… · I see your point, but at the same time…', eg: '<b>While it’s true that</b> phones distract us, <b>it’s also worth considering</b> that they help us check words.' },
              { label: 'Change your mind', text: 'I used to think that…, but now I see it differently. · You’ve convinced me.', eg: '<b>I used to think that</b> breakfast wasn’t important, <b>but now I see it differently</b>.' },
              { label: 'Ask and explore', text: 'What if we look at it this way…? · Could it be possible that…?', eg: '<b>Could it be possible that</b> students are just tired, not lazy?' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> saying “I agree, but…” and then repeating your view. First <b>name</b> the other person’s point: <i>I see your point about cost, but…</i> · After <b>While it’s true that</b>, use a full sentence (subject + verb).' },
            { type: 'sort', id: 'd3n-f2s', title: 'Part 3 · Practice (2 min): what does each phrase do?', hint: '<b>Drag</b> each phrase into a box — or tap a phrase, then a box.', buckets: [
              { label: 'Offer another view' }, { label: 'Balance both sides' }, { label: 'Show you changed your mind' }
            ], items: [
              { text: 'Alternatively, …', answer: 0, why: 'A new, different idea.' },
              { text: 'From a different perspective, …', answer: 0, why: 'Another way of seeing it.' },
              { text: 'While it’s true that…, it’s also worth considering…', answer: 1, why: 'Accepts one side, adds the other.' },
              { text: 'Although I agree with…, I also think…', answer: 1, why: 'Agree + add your own point.' },
              { text: 'I used to think that…, but now I see it differently.', answer: 2, why: 'Old view → new view.' },
              { text: 'You’ve convinced me — I hadn’t looked at it that way.', answer: 2, why: 'You accept the other person’s view.' }
            ]},
            { type: 'chat', title: 'Part 4 · React to a statement (2 min) — model first: flexible, but still clear', lines: [
              ['Student 1', 'According to Gunders (2024), consumers are the biggest cause of food waste.'],
              ['Student 2', '<mark>While it’s true that</mark> households waste a lot, <mark>it’s also worth considering</mark> farms in poorer countries.'],
              ['Student 1', 'Hmm. <mark>Could it be possible that</mark> it depends on the country?'],
              ['Student 2', 'Exactly. <mark>I used to think that</mark> shops were the problem, <mark>but now I see it differently.</mark>']
            ]},
            { type: 'spinner', id: 'h4-f2sp', title: 'Your turn: react flexibly', text: 'A reads the statement and gives an opinion. B reacts with the move on reel 2. Then swap.', reels: [
              { label: 'Statement', start: 'Spin!', items: ['Phones should be banned in class.', 'Breakfast is the most important meal.', 'Living with family is better than living alone.', 'Online shopping is better than going to shops.', 'Homework is a waste of time.'] },
              { label: 'Your move', start: '…', items: ['Offer another view', 'Balance both sides', 'Change your mind', 'Ask and explore'] }
            ]},
            { type: 'talk', title: 'Part 5 · Speak (3 min): defend your warmer opinion — flexibly', prompts: [
              'Go back to your opinion from the warmer. Your partner argues <b>against</b> it for 1 minute.',
              'Answer with <b>three</b> phrases from different boxes in Part 2. Finish with your clear position.',
              'Frame: <i>I see your point about…, but at the same time… · While it’s true that…, it’s also worth considering… · So, overall, I still think / I now think…</i>',
              'Swap roles.'
            ]},
            { type: 'checklist', id: 'h4-f2k', title: 'Peer check: did your partner…', items: [
              'name your point before answering it?',
              'use 3 phrases from different boxes?',
              'make their final position clear?'
            ]},
            { type: 'teacher', ref: 'w4d3-t7' }
          ]
        },
        {
          id: 'f3', short: 'Town meeting', minutes: 35, grouping: 'Groups of 6',
          title: 'Group discussion: Kooringal town meeting + Reflection',
          goal: 'Act out a town meeting. Try to agree on a plan to reduce food waste.',
          blocks: [
            { type: 'flip', title: 'Part 1 · Group discussion — 7 useful words first', hint: 'Guess the meaning. Then tap the card. You will use these words again in your essays.', items: [
              { front: 'initiative', back: 'A new plan to solve a problem.<br><i>The council launched an initiative to cut food waste.</i>' },
              { front: 'adopt', back: 'Officially accept and start to use (a plan or idea).<br><i>Should the town adopt the plan?</i>' },
              { front: 'implement', back: 'Put a plan into action.<br><i>The plan will be difficult to implement in small shops.</i>' },
              { front: 'incentive', back: 'Something (often money) that encourages people to do something.<br><i>Tax cuts are an incentive for businesses to donate food.</i>' },
              { front: 'surplus', back: 'More than is needed; extra.<br><i>Restaurants could give surplus food to charities.</i>' },
              { front: 'feasible', back: 'Possible and practical to do.<br><i>Is a food rescue program feasible in a small town?</i>' },
              { front: 'compromise', back: 'An agreement where each side gets part of what it wants.<br><i>We reached a compromise: a six-month trial.</i>' }
            ]},
            { type: 'cloze', id: 'd3n-f3w', title: 'Quick check: complete the sentences', list: true, options: ['adopt', 'compromise', 'feasible', 'implement', 'incentive', 'initiative', 'surplus'],
              text: 'The new {{1}} aims to halve food waste by 2030.\nWho will pay to {{2}} the plan?\nA lower tax is a good {{3}} for shops to donate food.\nBakeries often have {{4}} bread at the end of the day.\nIs it {{5}} to collect food from every home?\nIf neither side agrees, we need a {{6}}.\nMost residents voted to {{7}} the plan.',
              answers: ['initiative', 'implement', 'incentive', 'surplus', 'feasible', 'compromise', 'adopt'] },
            { type: 'key', title: 'Scenario: Tackling Food Waste in Kooringal', points: [
              'Kooringal is a historic town with 13,500 people. Many tourists visit.',
              'Restaurants, supermarkets and homes throw away a lot of good food.',
              'But some people in the town don’t have enough food.',
              'The local government has a plan (an initiative). It has five parts: <b>food rescue programs, community composting, financial incentives for businesses, public awareness campaigns and new jobs in green work</b>.',
              'Tonight there is a town meeting. <b>Should Kooringal adopt the plan?</b>'
            ]},
            { type: 'cards', title: 'Choose your role (your teacher may give you one)', pick: 'f3-role', items: [
              { label: '1 · Local Restaurant Owner', icon: 'briefcase', text: 'Your restaurant has <b>surplus</b> food. You have <b>mixed feelings</b>. Good: you save money and look good. Bad: more rules and changes to your work.<br><small>Ideas: save money · brand image · new rules · competition</small>' },
              { label: '2 · Local Government Officer', icon: 'flag', text: 'You are <b>for</b> the plan. It will help health, the environment and the local economy. There are problems, but the benefits are bigger.<br><small>Ideas: health · environment · new jobs · problems to solve</small>' },
              { label: '3 · Chairperson of the Community Council', icon: 'users', text: 'You lead the meeting. Make sure everyone speaks and listens. You <b>don’t have an opinion yet</b>.<br><small>Ideas: give turns · balance · compromise · how to decide</small>' },
              { label: '4 · Environmentalist (Keep Kooringal Green)', icon: 'sprout', text: 'You care about nature. You are <b>for</b> the plan. It will cut pollution and protect the environment.<br><small>Ideas: less pollution · composting · wildlife · education</small>' },
              { label: '5 · Local Resident', icon: 'home', text: 'You have lived here a long time. You are <b>against</b> the plan. It may cost too much, cause problems for families, or not work.<br><small>Ideas: cost · paperwork · risks · other solutions</small>' },
              { label: '6 · Local Shop Owner', icon: 'briefcase', text: 'You have a small shop. You are <b>against</b> the plan. New rules and costs could hurt small businesses.<br><small>Ideas: extra costs · new rules · local trade · is it feasible?</small>' }
            ]},
            { type: 'quiz', id: 'd3n-f3q', title: 'Read the scenario. Then answer (you can read twice)', items: [
              { q: '1. What is the main problem in Kooringal?', options: ['Good food is thrown away, but some people don’t have enough.', 'Tourists leave too much rubbish in the town.', 'Local restaurants are closing.'], answer: 'Good food is thrown away, but some people don’t have enough.', why: 'The scenario says homes and businesses waste food while some people go hungry.' },
              { q: '2. What is the town meeting for?', options: ['To decide whether to adopt the plan.', 'To choose a new council leader.', 'To raise money for a food bank.'], answer: 'To decide whether to adopt the plan.', why: 'The last line: “Should Kooringal adopt the plan?”' },
              { q: '3. Which of these is <b>not</b> part of the plan?', options: ['Community composting', 'Money or tax cuts for businesses', 'A new tax on tourists'], answer: 'A new tax on tourists', why: 'The five parts are food rescue, composting, financial incentives, awareness campaigns and green jobs.' },
              { q: '4. Read the role cards. Who is <b>against</b> the plan?', options: ['The environmentalist and the government officer', 'The local resident and the shop owner', 'The chairperson'], answer: 'The local resident and the shop owner', why: 'Roles 5 and 6 are against. The restaurant owner has mixed feelings; the chair has no opinion yet.' }
            ]},
            { type: 'tip', text: 'Question 3: look at the five parts of the plan in <b>bold</b>.' },
            { type: 'fields', title: 'Prepare your role', fields: [
              { id: 'f3-1', label: 'My arguments', placeholder: 'As a local shop owner, I’m worried that…', rows: 3 },
              { id: 'f3-2', label: 'Questions I want to ask the others', placeholder: 'Who will pay for…? What if…?', rows: 2 },
              { id: 'h4-f3-3', label: 'A compromise I could accept', placeholder: 'I could live with a six-month trial, provided that…', rows: 2 }
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Keep your role card <b>secret</b>. Write your arguments and questions (5 min).' },
              { who: 'group', text: 'The <b>chairperson</b> opens the meeting and gives everyone a turn.' },
              { who: 'group', text: 'Discuss the plan. Use the meeting phrases below.' },
              { who: 'group', text: 'At the end, decide: <b>should Kooringal adopt it?</b> A compromise is fine.' }
            ]},
            { type: 'language', title: 'Useful language for the meeting', tabs: false, groups: [
              { label: 'Chairing', phrases: ['Let’s hear from… first.', 'Could you respond to that, (name)?', 'So, where do we stand on…?'] },
              { label: 'Making your case', phrases: ['Speaking as a (shop owner), my main concern is…', 'Who would actually cover the cost of…?', 'Sorry to interrupt, but…'] },
              { label: 'Reaching a compromise', phrases: ['What if we started with a trial of…?', 'Would you accept… if…?', 'I could live with that, provided that…'] }
            ]},
            { type: 'chat', title: 'Model: moving towards a compromise', lines: [
              ['Shop owner', '<mark>Speaking as a shop owner, my main concern is</mark> the cost.'],
              ['Officer', '<mark>What if we started with a trial of</mark> food rescue for six months?'],
              ['Shop owner', '<mark>I could live with that, provided that</mark> small shops don’t pay extra.'],
              ['Chair', '<mark>So, where do we stand on</mark> the trial? Can we all agree on six months?']
            ]},
            { type: 'choose', id: 'f3c', title: 'Our town’s decision', options: ['Adopt the whole initiative', 'Adopt part of it (a compromise)', 'Don’t adopt it', 'No agreement'] },
            { type: 'steps', title: 'Results (3 min)', items: [
              { who: 'group', text: 'Each chairperson reports the decision and the key compromise (30 seconds).' },
              { who: 'class', text: 'Which town made the smartest decision? Vote.' }
            ]},
            { type: 'checklist', id: 'd3n-f3k', title: 'Peer check: choose one person in your group. Did they…', items: [
              'use at least 2 phrases from the meeting box?',
              'use one of the 7 useful words (e.g. feasible, incentive)?',
              'listen and respond to another person’s point?'
            ]},
            { type: 'teacher', ref: 'w4d3-t8' },
            { type: 'talk', title: 'Part 2 · Reflection', prompts: [
              'Did you change your opinion in the meeting?',
              'Was it easy or hard to change your mind? Why?',
              'How does flexibility help in university discussions?',
              'What will you use from today in future group work?'
            ]},
            { type: 'checklist', id: 'd3n-f3cd', title: 'Can-do check: I can now…', items: [
              'support an opinion with evidence from a source',
              'argue the opposite view',
              'show flexibility and still make my position clear',
              'help a group reach a compromise'
            ]},
            { type: 'teacher', ref: 'w4d3-t9' }
          ]
        }
      ]
    },

    /* ───────────────────────── 8A Academic writing skills 2 ───────────────────────── */
    {
      id: 'stance', number: '03', code: '8A', minutes: 90,
      tone: 'clay', art: 'writing',
      title: 'Academic writing skills 2',
      subtitle: 'Modality, evaluative language and stance',
      outcome: 'Use words that show how sure you are (modality) and what you think (stance) in persuasive writing. Story: a “stance clinic” — turn flat claims into persuasive ones, then say and write your own stance; the class picks the clearest.',
      activities: [
        {
          id: 's1', short: 'How sure?', minutes: 20, grouping: 'Pairs',
          title: 'Warmer: How sure is the writer? (modality)',
          goal: 'One language point: modality — words that show how sure you are (low, medium, high).',
          blocks: [
            { type: 'key', title: 'Today’s challenge', points: [
              'By the end, you will say your stance on a hot topic in one minute — and write it in two sentences.',
              'The class will choose the clearest, most persuasive stance.'
            ]},
            { type: 'key', title: 'Part 1 · Notice (2 min): two sentences from the readings', points: [
              'A: “Working with nutritionists and health organizations <b>could</b> also build trust and credibility.” (Huang et al., 2024)',
              'B: “Magazzini Sociali has <b>undoubtedly</b> been successful in supporting the local community.” (Week 3 reading)'
            ]},
            { type: 'quiz', id: 'h4-s1n', items: [
              { q: 'Which writer is <b>more sure</b>?', options: ['A (could)', 'B (undoubtedly)'], answer: 'B (undoubtedly)', why: '“Undoubtedly” = there is no doubt. “Could” = it is possible, not certain.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (4 min): modality = how sure are you?', points: [
              '<b>Modality</b> = words that show how sure the writer is.',
              'Why? Your claim should match your evidence. Too strong without evidence sounds careless; too weak sounds unsure.'
            ]},
            { type: 'key', title: 'The forms — with everyday examples', compare: [
              { label: 'Low (a little sure)', text: 'perhaps · might · may · could · somewhat · occasionally', eg: 'Coffee <b>might</b> help you concentrate.' },
              { label: 'Medium (quite sure)', text: 'should · probably · often · it is possible / likely that…', eg: 'Coffee <b>often</b> helps people concentrate.' },
              { label: 'High (very sure)', text: 'clearly · will · must · it is evident that… · unquestionably · undoubtedly', eg: 'Coffee <b>clearly</b> helps me concentrate in the morning.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> a very strong word with no evidence (<s>Apps definitely solve food waste</s>) · too many soft words together (<s>It might possibly perhaps help</s> → <b>It might help</b>).' },
            { type: 'steps', title: 'Part 3 · Practice (7 min): race', items: [
              { who: 'pair', text: 'Put the sentences in order. Look <b>only at the bold words</b>.' },
              { who: 'pair', text: 'First pair to check with 7+ right wins.' },
              { who: 'class', text: 'Which words helped you decide?' }
            ]},
            { type: 'order', id: 's1o', title: 'Least certain → most certain', ends: ['Least certain', 'Most certain'], items: [
              '<b>Perhaps</b> if restaurants offered smaller portion sizes, less food would be thrown away.',
              'Packaging redesigns that allow consumers to purchase variable quantities <b>somewhat</b> address the issue of food waste.',
              'Composting initiatives <b>occasionally</b> face challenges in community adoption and participation.',
              'Educational programs on food sustainability <b>should</b> instil early awareness and habits that reduce food waste.',
              'Food waste education campaigns <b>often</b> lead to a change in consumer behaviour, as individuals become more aware of their impact.',
              '<b>It is possible</b> to achieve a dramatic reduction in food waste with the concerted effort of individuals, businesses, and governments working together.',
              '<b>It is evident</b> that many of the solutions to food waste are economical and environmentally beneficial.',
              '<b>It is highly likely</b> that enhancing consumer awareness through targeted educational campaigns will lead to a significant reduction in household food waste.',
              '<b>Unquestionably</b>, implementing stricter regulations on sell-by dates and food labelling will give consumers clearer guidelines.'
            ], why: 'The level matters most: sentences 1–3 are <b>low</b>, 4–6 <b>medium</b> and 7–9 <b>high</b> modality. Inside each level, a different order can be fine — just explain why.' },
            { type: 'teacher', ref: 'w4d3-t10' },
            { type: 'model', title: 'Part 4 · Stronger or softer? (3 min) — model first', list: ['Claim: Phones distract students.', '<b>Softer:</b> Phones <b>can sometimes</b> distract students.', '<b>Stronger:</b> Phones <b>clearly</b> distract students.'] },
            { type: 'fields', fields: [
              { id: 'h4-s1-1', label: 'Make it softer: Food apps reduce waste.', placeholder: 'Food apps may…', rows: 1 },
              { id: 'h4-s1-2', label: 'Make it stronger: Supermarkets waste too much food.', placeholder: 'It is evident that…', rows: 1 },
              { id: 'h4-s1-3', label: 'Make it softer: Online classes are boring.', placeholder: 'Online classes can…', rows: 1 },
              { id: 'h4-s1-4', label: 'Make it stronger: Cooking at home saves money.', placeholder: 'Cooking at home clearly…', rows: 1 }
            ]},
            { type: 'spinner', id: 'd3n-s5sp', title: 'Part 5 · Speak (4 min): stronger or softer?', text: 'Spin. Say the claim with the change on reel 2, plus one reason. Your partner judges: did it work? Then swap.', reels: [
              { label: 'Claim', start: 'Spin!', items: ['Food apps reduce waste.', 'Upcycled food is healthy.', 'Consumers waste the most food.', 'Supermarkets should donate surplus food.', 'Online learning works.', 'Your choice!'] },
              { label: 'Make it', start: '…', items: ['much stronger (high modality)', 'a little softer (low modality)', 'medium (quite sure)'] }
            ]},
            { type: 'checklist', id: 'h4-s1k', title: 'Peer check: did your partner…', items: [
              'change the level with a modal word (might, often, clearly…)?',
              'give a reason that fits the level?',
              'keep the sentence correct (no “might possibly perhaps”)?'
            ]}
          ],
          answers: { items: [
            ['Warmer · Low, medium and high modality', '<img src="assets/week4/modality-ladder.svg" alt="A modality ladder: low modality (perhaps, somewhat, occasionally), medium modality (should, often, it is possible), high modality (it is evident, it is highly likely, unquestionably).">'],
            ['Part 4 · Possible answers', 'Food apps <b>may</b> reduce waste. · <b>It is evident that</b> supermarkets waste too much food. · Online classes <b>can sometimes</b> be boring. · Cooking at home <b>clearly</b> saves money.']
          ]}
        },
        {
          id: 's3', short: 'Good or bad?', minutes: 18, grouping: 'Pairs',
          title: 'Taking a stance in persuasive writing + Language Focus: Activity 1 · Evaluative language',
          goal: 'One language point: evaluative words — show whether you think something is good or bad.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (3 min): two thesis statements', points: ['The question: <b>Upcycled food is a viable solution to the problem of food waste. Discuss.</b> <small>(viable = can work)</small>'] },
            { type: 'scale', id: 's2s1', title: 'Thesis 1 — where would you put the X?', statement: 'Although it requires widespread consumer acceptance and regulatory support to fully realize its potential, upcycled food presents a practical and sustainable solution to the global issue of food waste.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Neutral', answer: 75, why: 'Positive. The writer first accepts a problem (“requires… acceptance and… support”). But then calls upcycled food <b>practical and sustainable</b>.' },
            { type: 'scale', id: 's2s2', title: 'Thesis 2 — where would you put the X now?', statement: 'Although some upcycling efforts have been successful, this essay strongly argues that it is not a feasible solution as it fails to address systemic production inefficiencies and consumer motivation.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Neutral', answer: 5, why: 'Far left. “<b>Strongly argues</b>” shows a strong opinion. “Although some… have been successful” shows the other side first.' },
            { type: 'quiz', id: 's2q2', items: [
              { q: 'Thesis 1: which words show the stance?', options: ['practical and sustainable', 'widespread consumer acceptance', 'the global issue'], answer: 'practical and sustainable', why: 'Two positive adjectives — they show the writer likes the idea.' },
              { q: 'Which word could move the X in Thesis 1 to the far right (strongly agree)?', options: ['clearly', 'perhaps', 'sometimes'], answer: 'clearly', why: '“…upcycled food clearly presents a practical and sustainable solution…” — “clearly” makes the stance stronger.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (4 min): stance and evaluative words', points: [
              'Your <b>position</b> = your opinion, with evidence. Your <b>stance</b> = how you show it in your words.',
              'You show stance in the thesis statement, topic sentences, comments on evidence and the conclusion. A good stance shows both sides, but makes clear which side you support.',
              '<b>Evaluative words</b> judge something as good, bad or just OK. In academic writing, use them instead of “I think it’s great”.'
            ]},
            { type: 'key', title: 'The forms — with everyday examples', compare: [
              { label: 'Positive', text: 'effective · useful · convincing · innovative · crucial', eg: 'The new bus app is <b>useful</b> and <b>effective</b>.' },
              { label: 'Negative', text: 'limited · flawed (= has problems) · short-sighted · misguided', eg: 'The canteen’s recycling plan is <b>flawed</b>.' },
              { label: 'Neutral (just OK)', text: 'adequate · satisfactory · (not) exceptional', eg: 'The Wi-Fi in the library is <b>adequate</b>.' },
              { label: 'Make it stronger', text: 'highly · clearly · strongly · poorly + adjective / verb', eg: 'This app is <b>highly effective</b>. / It is <b>poorly</b> designed.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> chatty words (<s>amazing, terrible, super good</s>) → <b>highly effective, flawed</b> · <s>very crucial</s> → <b>crucial</b> (it is already strong).' },
            { type: 'teacher', ref: 'w4d3-t11' },
            { type: 'sort', id: 's3s', title: 'Part 3 · Practice (3 min): positive, negative or neutral?', hint: '<b>Drag</b> each word into a box. Hint: <i>flawed</i> = has mistakes · <i>adequate</i> = OK, good enough.', buckets: [
              { label: 'Positive' }, { label: 'Negative' }, { label: 'Neutral' }
            ], items: [
              { text: 'convincing', answer: 0 }, { text: 'well-supported', answer: 0 }, { text: 'innovative', answer: 0 }, { text: 'highly effective', answer: 0 },
              { text: 'flawed', answer: 1 }, { text: 'short-sighted', answer: 1 },
              { text: 'adequate', answer: 2 }, { text: 'satisfactory', answer: 2 }, { text: 'not exceptional', answer: 2 }
            ]},
            { type: 'teacher', ref: 'w4d3-t12' },
            { type: 'model', title: 'Part 4 · Judge it in one sentence (3 min) — model first', text: '<i>The campus café:</i> The coffee is <b>satisfactory</b>, but the prices are <b>poorly</b> matched to student budgets.' },
            { type: 'fields', fields: [
              { id: 'h4-s3-1', label: 'Your phone’s battery', placeholder: 'My phone’s battery is…', rows: 1 },
              { id: 'h4-s3-2', label: 'Online classes', placeholder: 'Online classes are… but…', rows: 1 },
              { id: 'h4-s3-3', label: 'A food-sharing app (Castro et al., 2023)', placeholder: 'Food-sharing apps are a(n)… way to…', rows: 1 }
            ]},
            { type: 'key', title: 'Part 5 · Write (5 min): your thesis statement', points: [
              '<b>Question (Week 4 writing task):</b> Should governments do more to solve the problem of food waste?',
              '<b>Frame:</b> Although [the other side], [your position + evaluative word] because [reason].',
              '<b>Model:</b> <i>Although households can reduce waste themselves, stronger government action is <b>crucial</b>, because voluntary efforts have been <b>limited</b>.</i>'
            ]},
            { type: 'fields', fields: [
              { id: 'h4-s3-4', label: 'My thesis statement (one sentence)', placeholder: 'Although…, government action is… because…', rows: 3 }
            ]},
            { type: 'checklist', id: 'h4-s3k', title: 'Check your sentence', items: [
              'It starts with Although… (the other side).',
              'It has at least one evaluative word (crucial, effective, limited…).',
              'A reader can put the X on the line: agree or disagree?'
            ]},
            { type: 'teacher', ref: 'w4d3-t13' }
          ]
        },
        {
          id: 's5', short: 'Softer', minutes: 15, grouping: 'Pairs',
          title: 'Language Focus: Hedging language (make a claim softer)',
          goal: 'One language point: hedging — make a claim softer and more careful.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (2 min): two sentences from Castro et al. (2023)', points: [
              '“Urban areas, however, <b>tend to</b> use digital solutions.”',
              '“Although the apps currently available in the space <b>can be</b> useful, they also have <b>some</b> limitations…”'
            ]},
            { type: 'quiz', id: 'h4-s5n', items: [
              { q: 'Why does the writer say <b>tend to</b> and <b>can be</b>?', options: ['To make the claim softer — it is true in many cases, not all', 'To make the claim 100% certain'], answer: 'To make the claim softer — it is true in many cases, not all', why: 'Not every city uses apps, and apps are not always useful. The writer is careful.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (3 min): hedging', points: [
              '<b>Hedging</b> = making a claim softer, less certain.',
              'Why? It shows you are careful, shows the limits of your evidence, and protects you from criticism.'
            ]},
            { type: 'key', title: 'The forms — with everyday examples', compare: [
              { label: 'Modal verbs', text: 'may · might · could · can', eg: 'Coffee <b>may</b> help you concentrate.' },
              { label: 'Adverbs', text: 'possibly · probably · perhaps', eg: 'This is <b>probably</b> the best café on campus.' },
              { label: 'How often', text: 'often · usually · sometimes · generally', eg: 'Students <b>often</b> skip breakfast.' },
              { label: 'How many', text: 'some · many · a number of · the majority of', eg: '<b>Many</b> students cook at home.' },
              { label: 'Verbs', text: 'seem to · appear to · tend to', eg: 'Young people <b>tend to</b> sleep late.' },
              { label: 'It… that', text: 'It is likely that… · It might be the case that…', eg: '<b>It is likely that</b> prices will rise.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> <s>All students waste food</s> → <b>Many</b> students waste food · <s>tend to using</s> → <b>tend to use</b> · one hedge is usually enough: <s>may possibly perhaps</s>.' },
            { type: 'cloze', id: 'h4-s5c', title: 'Part 3 · Practice (3 min): choose the softer (hedged) word', list: true,
              options: [['tend to', 'always'], ['may', 'will'], ['Some', 'All'], ['often', 'always'], ['seems', 'is'], ['It is likely that', 'It is certain that'], ['probably', 'definitely']],
              text: 'Students who sleep less {{1}} get lower marks.\nCoffee {{2}} help you study late.\n{{3}} people throw away bread every week.\nCheap food is {{4}} less healthy.\nThe new timetable {{5}} to work better.\n{{6}} more people will use food apps.\nThis is {{7}} the cheapest phone plan.',
              answers: ['tend to', 'may', 'Some', 'often', 'seems', 'It is likely that', 'probably'],
              why: ['<i>tend to</i> = usually, not always.', '<i>may</i> = possible, not sure.', '<i>Some</i> = not all people.', '<i>often</i> = many times, not every time.', '<i>seems to</i> = this is how it looks.', '<i>It is likely that</i> = probably, not certain.', '<i>probably</i> = quite sure, not 100%.'] },
            { type: 'teacher', ref: 'w4d3-t14' },
            { type: 'model', title: 'Part 4 · Make it softer (3 min) — model first', list: ['Strong claim: Consumers waste the most food.', '<b>Softer:</b> Consumers <b>appear to</b> waste <b>a large share of</b> food, <b>especially</b> in wealthy countries.'] },
            { type: 'fields', fields: [
              { id: 'h4-s5-1', label: 'Food banks solve hunger.', placeholder: 'Food banks may…', rows: 1 },
              { id: 'h4-s5-2', label: 'Upcycled food is healthy.', placeholder: 'Upcycled food can…', rows: 1 },
              { id: 'h4-s5-3', label: 'People don’t trust food apps.', placeholder: 'Some people seem to…', rows: 1 },
              { id: 'h4-s5-4', label: 'Supermarkets throw away good food.', placeholder: 'Supermarkets often…', rows: 1 }
            ]},
            { type: 'key', title: 'Part 5 · Write (4 min): 3 sentences', points: [
              '<b>Question:</b> Is a food-sharing app a good way to reduce food waste?',
              '<b>Use:</b> 2 hedges + 1 source (Castro et al., 2023).',
              '<b>Model:</b> <i>Food-sharing apps <b>can</b> help people give away extra food. According to Castro et al. (2023), urban areas <b>tend to</b> use digital solutions. However, these apps <b>may</b> be less useful for older people.</i>'
            ]},
            { type: 'fields', fields: [
              { id: 'h4-s5-5', label: 'My 3 sentences', placeholder: 'Food-sharing apps can… According to Castro et al. (2023)… However, …', rows: 4 }
            ]},
            { type: 'checklist', id: 'h4-s5k', title: 'Check your sentences', items: [
              'I used 2 hedges (may, can, tend to, some, often…).',
              'I cited Castro et al. (2023).',
              'My answer is still clear: good way, or not?'
            ]}
          ],
          answers: { title: 'Part 4 · possible answers', items: [
            ['Food banks', 'Food banks <b>may</b> reduce hunger in the short term.'],
            ['Upcycled food', 'Upcycled food <b>can</b> be healthy.'],
            ['Food apps', '<b>Some</b> people <b>seem to</b> distrust food apps.'],
            ['Supermarkets', 'Supermarkets <b>often</b> throw away good food.']
          ]}
        },
        {
          id: 's6', short: 'Sources', minutes: 15, grouping: 'Pairs',
          title: 'Language Focus: Reporting verbs (show what you think of a source)',
          goal: 'One language point: choose a reporting verb that shows what you think of a source.',
          blocks: [
            { type: 'key', title: 'Part 1 · Notice (2 min): two sentences from a student essay', points: [
              'A: “Gunders (2024) <b>demonstrates</b> that consumers are the largest source of food waste.”',
              'B: “Huang et al. (2024) <b>suggest</b> that working with nutritionists could build trust.”'
            ]},
            { type: 'quiz', id: 'h4-s6n', items: [
              { q: 'In which sentence does the writer show the source is <b>less sure</b>?', options: ['A (demonstrates)', 'B (suggest)'], answer: 'B (suggest)', why: '“Suggest” = the source thinks this may be true. “Demonstrates” = the source shows it clearly.' }
            ]},
            { type: 'key', title: 'Part 2 · Clarify (3 min): what a reporting verb tells the reader', points: [
              'A <b>reporting verb</b> introduces a source: <i>Castro et al. (2023) <b>…</b> that…</i>',
              'Why? The verb quietly shows <b>your</b> view of the source — without writing “I think”.'
            ]},
            { type: 'key', title: 'The forms — with everyday examples', compare: [
              { label: 'Agree / disagree', text: 'argues · supports · confirms · questions · refutes (= says it is wrong)', eg: 'Lee (2023) <b>argues</b> that breakfast matters. Kim (2024) <b>questions</b> this.' },
              { label: 'Sure / not sure', text: 'demonstrates · asserts · suggests · speculates', eg: 'The survey <b>suggests</b> that students sleep too little.' },
              { label: 'Neutral (just facts)', text: 'reports · observes · acknowledges · maintains', eg: 'The report <b>observes</b> that bus use has grown.' },
              { label: 'Important', text: 'emphasises · highlights · stresses', eg: 'The coach <b>emphasises</b> that sleep is vital.' }
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> <s>suggests to reduce</s> → <b>suggests that</b> we reduce · <s>argues about that</s> → <b>argues that</b> · et al. = plural: <b>Huang et al. (2024) suggest</b> (no -s).' },
            { type: 'sort', id: 's6s', title: 'Part 3 · Practice (4 min): what does the bold verb tell the reader?', buckets: [
              { label: 'Agreement or disagreement' }, { label: 'Certainty or uncertainty' }, { label: 'Neutral or objective' }, { label: 'Importance or relevance' }
            ], items: [
              { text: 'a. The researcher <b>questions</b> the earlier conclusions.', answer: 0, why: 'Questions = doubts it.' },
              { text: 'b. Our Changing Climate (2020) <b>asserts</b> that food labelling laws are not enough.', answer: 1, why: 'Asserts = says it confidently.' },
              { text: 'c. The UN <b>reported</b> that a third of people were food insecure.', answer: 2, why: 'Reported = just the facts.' },
              { text: 'd. The study <b>demonstrates</b> a clear link between diet and health.', answer: 1, why: 'Demonstrates = shows it clearly (sure).' },
              { text: 'e. Nicastro and Carillo (2021) <b>emphasise</b> giving food to those in need.', answer: 3, why: 'Emphasise = this is important.' },
              { text: 'f. Huang et al. (2024) <b>suggest</b> that health messages could help sales.', answer: 1, why: 'Suggest = not completely sure.' },
              { text: 'g. Castro et al. (2023) <b>acknowledge</b> the limitations of apps.', answer: 2, why: 'Acknowledge = accept a fact, no judgement.' },
              { text: 'h. McMichael (2009) <b>refutes</b> the idea that food banks solve hunger.', answer: 0, why: 'Refutes = says it is wrong.' },
              { text: 'i. Royer (2024) <b>argues</b> that cutting food waste is critical.', answer: 0, why: 'Argues = takes a side.' }
            ]},
            { type: 'teacher', ref: 'w4d3-t15' },
            { type: 'model', title: 'Part 4 · Choose your verb (3 min) — model first', list: ['Castro et al. (2023) say that apps can reduce household waste. <i>(You think the evidence is not strong.)</i>', '→ Castro et al. (2023) <b>suggest</b> that apps can reduce household waste.'] },
            { type: 'fields', fields: [
              { id: 'h4-s6-1', label: 'Gunders (2024) says that consumers waste the most food. (You agree — strong evidence.)', placeholder: 'Gunders (2024) demonstrates / argues that…', rows: 1 },
              { id: 'h4-s6-2', label: 'Huang et al. (2024) say that health benefits are important. (This is important for your essay.)', placeholder: 'Huang et al. (2024) emphasise that…', rows: 1 },
              { id: 'h4-s6-3', label: 'Castro et al. (2023) say that apps have some limitations. (Just a fact.)', placeholder: 'Castro et al. (2023) acknowledge that…', rows: 1 }
            ]},
            { type: 'key', title: 'Part 5 · Write (3 min): one source for your essay', points: [
              '<b>Question:</b> Should governments do more to solve the problem of food waste?',
              '<b>Write 2 sentences:</b> (1) a source + a reporting verb, (2) what this means for your position.',
              '<b>Model:</b> <i>Gunders (2024) <b>emphasises</b> that consumers are the largest source of food waste. This suggests that government campaigns for households could be <b>highly effective</b>.</i>'
            ]},
            { type: 'fields', fields: [
              { id: 'h4-s6-4', label: 'My 2 sentences', placeholder: '(Source) (year) emphasises / suggests / argues that… This suggests that…', rows: 3 }
            ]},
            { type: 'checklist', id: 'h4-s6k', title: 'Check your sentences', items: [
              'The reporting verb matches what I think of the source.',
              'I wrote “that” + a full sentence after the verb.',
              'Sentence 2 links the source to my position.'
            ]}
          ],
          answers: { title: 'Part 4 · possible answers', items: [
            ['Gunders', 'Gunders (2024) <b>demonstrates</b> that consumers waste the most food.'],
            ['Huang', 'Huang et al. (2024) <b>emphasise</b> that health benefits are important.'],
            ['Castro', 'Castro et al. (2023) <b>acknowledge</b> that apps have some limitations.']
          ]}
        },
        {
          id: 's8', short: 'Use it', minutes: 22, grouping: 'Pairs → groups',
          title: 'Activity 4 (Optional) + Language in use',
          goal: 'Put the stance tools together: say your stance in 1 minute, then write it in two sentences.',
          blocks: [
            { type: 'figure', src: 'assets/week4/stance-tools.svg', alt: 'Two kinds of stance — thinking stance (how certain we are) and attitude stance (whether we think it is good or bad) — and five tools to show stance: evaluative vocabulary, modal language, hedging language, reporting verbs, signalling and attitude markers.', caption: 'Part 1 · Recap (2 min): two kinds of stance — and five tools to show them', size: 'wide' },
            { type: 'key', title: 'Your stance toolbox', compare: [
              { label: 'Thinking stance: how sure?', text: 'Modality (might · often · clearly) · hedging (tend to · some) · reporting verbs (suggests · demonstrates)', eg: 'Urban areas <b>tend to</b> use digital solutions.' },
              { label: 'Attitude stance: good or bad?', text: 'Evaluative words (effective · flawed) · attitude markers (<b>Importantly</b>, <b>Unfortunately</b>, …) · signalling (However · Although)', eg: '<b>Unfortunately</b>, the plan is <b>flawed</b>.' }
            ]},
            { type: 'tip', text: 'Attitude markers (<i>Surprisingly, Undoubtedly…</i>): use only one or two in a paragraph, or your writing sounds too personal.' },
            { type: 'flip', title: 'Part 2 · Optional, if there is time (8 min): read a model paragraph — 6 useful words first', hint: 'Guess the meaning. Then tap the card.', items: [
              { front: 'alleviate', back: 'Make a problem less serious.<br><i>Food banks can alleviate hunger.</i>' },
              { front: 'edible', back: 'Safe and fit to eat.<br><i>Much of the food thrown away is still edible.</i>' },
              { front: 'discard', back: 'Throw away.<br><i>Shops discard fruit that looks “ugly”.</i>' },
              { front: 'tendency', back: 'Something people usually do.<br><i>Shoppers have a tendency to buy too much.</i>' },
              { front: 'redistribute', back: 'Move something from where there is too much to where it is needed.<br><i>Apps redistribute surplus food to charities.</i>' },
              { front: 'surplus', back: 'More than is needed; extra.<br><i>Surplus food from restaurants can go to food banks.</i>' }
            ]},
            { type: 'cloze', id: 'd3n-s8w', title: 'Quick check', list: true, options: ['alleviate', 'discard', 'edible', 'redistribute', 'surplus', 'tendency'],
              text: 'Most of the bread in the bin is still {{1}}.\nPeople have a {{2}} to buy more than they need.\nCharities {{3}} food from shops to families.\nCheaper meals could {{4}} hunger in poor areas.\nSupermarkets {{5}} food that is close to its date.\nThe café gives its {{6}} cakes to students.',
              answers: ['edible', 'tendency', 'redistribute', 'alleviate', 'discard', 'surplus'] },
            { type: 'quiz', id: 'd3n-s8q', title: 'Read the paragraph once. Then answer', items: [
              { q: '1. What is the writer’s main point?', options: ['Reducing food waste could help to reduce hunger.', 'Consumers should only buy attractive food.', 'Food banks do not work in Australia.'], answer: 'Reducing food waste could help to reduce hunger.', why: 'Sentence 1: better distribution “has the potential to directly alleviate hunger”.' },
              { q: '2. Where could redistribution be <b>particularly</b> useful?', options: ['In developed countries', 'On farms in poorer countries', 'Only in supermarkets'], answer: 'In developed countries', why: 'Sentence 6: “particularly impactful in developed countries”.' },
              { q: '3. What does sentence 7 do?', options: ['It gives evidence for the main point.', 'It presents the opposite view.', 'It defines food waste.'], answer: 'It gives evidence for the main point.', why: 'The Australian figure shows how much hunger saved food could address.' }
            ]},
            { type: 'passage', id: 's8p', title: 'Activity 4 (Optional): IWA Sample 3.1 · body paragraph 2 — read, then highlight the language of stance', text: '¹Addressing the problem of food waste through better management and distribution of resources is also important because it has the potential to directly alleviate hunger. ²Estimates from the FAO reveal that approximately 30% of all food produced worldwide is not consumed (Our Changing Climate, 2020). ³While this food wastage occurs at various points in the supply chain, a large amount of perfectly edible food is thrown away by consumers. ⁴Consumer preference for attractive produce and the tendency to over purchase and let food spoil are some of the behavioural patterns that have led to the unnecessary discarding of food (Tchonkouang et al., 2023; Our Changing Climate, 2020). ⁵However, with the adoption of more sustainable consumption habits and redistribution programs, a significant amount of food could be redirected from waste streams to improve overall food availability in underserved populations (Royer, 2024). ⁶This redistribution could be particularly impactful in developed countries where surplus food from restaurants, retail, and households could be channelled to food banks to provide immediate relief. ⁷In fact, if the food waste generated in Australia were cut by one third, the amount saved could adequately feed 921,000 people for a year (Tchonkouang et al., 2023), demonstrating the importance of food conservation as a means of combating hunger.' },
            { type: 'tip', text: 'Start with the easy ones: find <b>could</b>, <b>However</b> and <b>significant</b>. Then look for more.' },
            { type: 'table', id: 's8t', title: 'Language of stance', columns: ['Sentence', 'Words', 'Type (evaluative · modal · hedging · reporting · signalling/attitude)'], fixed: ['1', '2', '3', '4', '5', '6', '7'] },
            { type: 'teacher', ref: 'w4d3-t17' },
            { type: 'cards', title: 'Part 3 · Language in use (12 min) — Option A: choose a statement', pick: 's9-pick', items: [
              { text: 'Technology is harmful to students’ learning experiences.' },
              { text: 'Countries should have a universal basic income.' },
              { text: 'Online learning is as effective as traditional classroom learning.' },
              { text: 'Governments should impose stricter regulations on social media platforms to combat misinformation.' }
            ]},
            { type: 'key', title: 'Plan your 1-minute stance', points: [
              '<b>1 · Position:</b> agree or disagree? (+ an evaluative word)',
              '<b>2 · Reason + example:</b> use a strong or a medium word.',
              '<b>3 · The other side:</b> Although… / However, … (+ a hedge)',
              '<b>4 · Conclusion:</b> On balance, …'
            ]},
            { type: 'model', title: 'Example stance (Online learning…)', text: '<b>It is highly likely that</b> online learning is <b>useful</b> for busy students. However, it is <b>somewhat limited</b>, because students <b>often</b> have fewer chances to speak.', note: 'Modal: <i>it is highly likely</i> · hedging: <i>somewhat, often</i> · evaluative: <i>useful, limited</i>.' },
            { type: 'language', title: 'Useful language: showing your stance when you speak', tabs: false, groups: [
              { label: 'Strong', phrases: ['There is clear evidence that…', 'It is evident that…', 'This is arguably the most… because…'] },
              { label: 'Softer (hedging)', phrases: ['It seems likely that…', 'This tends to…', 'This may suggest that…'] },
              { label: 'Balanced', phrases: ['While… has some merit, it is somewhat limited because…', 'Research suggests that…, although…'] }
            ]},
            { type: 'steps', title: 'Say it, then write it', items: [
              { who: 'pair', text: 'Tell your partner your stance in 1 minute.' },
              { who: 'pair', text: 'Use one strong, one softer and one balanced phrase.' },
              { who: 'pair', text: 'Your partner ticks the checklist. Then swap.' },
              { who: 'alone', text: 'Write your stance in two sentences below.' },
              { who: 'class', text: 'Read out the best stance in your group. Vote for the clearest.' }
            ]},
            { type: 'checklist', id: 'd3n-s9k', title: 'Peer check: did your partner…', items: [
              'use a strong phrase and a softer (hedging) phrase?',
              'use at least one evaluative word (effective, limited, flawed…)?',
              'make their overall stance clear?'
            ]},
            { type: 'fields', fields: [
              { id: 's9-1', label: 'My stance in two sentences (use a modal, a hedge and an evaluative word)', placeholder: 'It is highly likely that… However, this approach is somewhat limited because…', rows: 3 }
            ]},
            { type: 'key', title: 'Option B · Evaluate an image', points: [
              'Your teacher shows a picture (e.g. a health campaign about sun safety).',
              'What is the message?',
              'How well does the picture show it? Use evaluative words.'
            ]},
            { type: 'fields', fields: [
              { id: 's9-2', label: 'My evaluation of the image', placeholder: 'The image conveys its message highly effectively because… / The message is somewhat unclear…', rows: 3 }
            ]},
            { type: 'quiz', id: 's9q', title: 'Quick check: stance challenge', items: [
              { q: 'Which word makes a claim <b>softer</b>?', options: ['unquestionably', 'perhaps', 'clearly'], answer: 'perhaps', why: '“Perhaps” shows the writer is not completely sure.' },
              { q: 'Which reporting verb shows the writer <b>disagrees</b> with the source?', options: ['reports', 'refutes', 'observes'], answer: 'refutes', why: 'Refute = say that an idea is wrong.' },
              { q: '“This solution is <b>flawed</b>.” What kind of word is “flawed”?', options: ['Positive evaluation', 'Negative evaluation', 'Hedging'], answer: 'Negative evaluation', why: 'Flawed = has problems or mistakes.' }
            ]},
            { type: 'checklist', id: 'd3n-s8cd', title: 'Can-do check: I can now…', items: [
              'say how sure I am (low, medium, high modality)',
              'use evaluative words and hedging to show a stance',
              'choose a reporting verb that shows what I think of a source',
              'state a clear, balanced stance in speaking and writing'
            ]},
            { type: 'teacher', ref: 'w4d3-t18' }
          ],
          answers: { title: 'Activity 4 · suggested answers', items: [
            ['Sentence 1', '<b>also important</b> — signalling + evaluative adjective · <b>potential</b> — noun (hedging) · <b>better</b>, <b>directly</b>'],
            ['Sentence 2', '<b>approximately</b> — hedging'],
            ['Sentence 3', '<b>While</b> — signalling · <b>perfectly edible</b> — adverb + adjective'],
            ['Sentence 4', '<b>tendency</b> — noun (hedging) · <b>unnecessary</b> — adjective'],
            ['Sentence 5', '<b>However</b> — signalling · <b>sustainable</b>, <b>significant</b> — adjectives · <b>could</b> — modal (hedging)'],
            ['Sentence 6', '<b>could</b> — modal (hedging) + <b>particularly</b> (adverb) + <b>impactful</b> (adjective) · <b>could</b> — modal (hedging) · <b>immediate</b> — adjective'],
            ['Sentence 7', '<b>In fact</b> — signalling · <b>adequately</b> — adverb · <b>demonstrating</b> + <b>importance</b> — verb + evaluative noun']
          ]}
        }
      ]
    },

    /* ───────────────────────── 9A Building rapport ───────────────────────── */
    {
      id: 'rapport', number: '04', code: '9A', minutes: 30,
      tone: 'amber', art: 'group',
      title: 'Building rapport',
      subtitle: 'Connect with your classmates',
      outcome: 'Get to know your classmates and help make a friendly, supportive class. Story: find out something surprising about your classmates and share it.',
      activities: [
        {
          id: 'b1', short: 'Building rapport', minutes: 30, grouping: 'Whole class',
          title: 'Welcome to building rapport!',
          goal: 'Join your teacher’s activity and get to know your classmates better.',
          blocks: [
            { type: 'key', title: 'What is this session?', points: [
              'A short, fun session to connect with your classmates.',
              'You work together and talk a lot. Your teacher leads each activity.'
            ]},
            { type: 'steps', items: [
              { who: 'class', text: 'Follow your teacher.' },
              { who: 'group', text: 'Join in and be positive.' },
              { who: 'group', text: 'Help everyone feel welcome.' }
            ]},
            { type: 'cards', title: 'Optional game: Find someone who…', items: [
              { text: '…has tried Vegemite (or another “strange” food).' },
              { text: '…cooks dinner at least four times a week.' },
              { text: '…has a food-sharing or delivery app on their phone.' },
              { text: '…changed their mind about something this week.' },
              { text: '…knows a great cheap place to eat near campus.' },
              { text: '…can name a typical dish from three classmates’ countries.' }
            ]},
            { type: 'steps', items: [
              { who: 'class', text: 'Stand up. Ask one question per person. Ask a follow-up question.' },
              { who: 'class', text: 'Share the most surprising answer you heard.' }
            ]},
            { type: 'spinner', id: 'b1sp', title: 'Optional game: get to know you', text: 'If your teacher chooses this game: spin and answer the question. Then ask your partner the same question.', reels: [
              { label: 'Question', start: 'Spin!', items: ['What is your favourite food from home?', 'What food would you never eat?', 'Where is the best place to eat near campus?', 'What did you do last weekend?', 'What is one thing you love about Sydney?', 'What would you cook for the class?'] }
            ]},
            { type: 'teacher', ref: 'w4d3-t19' }
          ]
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'Prepare for tomorrow', minutes: 15, grouping: 'Alone', category: 'Discussion preparation',
      title: 'Get ready for Research Summary Discussion 2',
      goal: 'Choose the phrases you will try to use tomorrow.',
      blocks: [
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'Two phrases for evaluating options (comparing, contrasting, prioritising)', rows: 2 },
          { id: 'x1-2', label: 'One phrase for speculating', rows: 1 },
          { id: 'x1-3', label: 'One phrase for showing flexibility', rows: 1 },
          { id: 'x1-4', label: 'My action plan from the first discussion — in one sentence', rows: 2 }
        ]}
      ]
    },
    {
      id: 'x2', short: 'Stance sentences', minutes: 15, grouping: 'Alone', category: 'Extra writing',
      title: 'Write with a clear stance',
      goal: 'Write a thesis statement that shows the other side and your clear stance.',
      blocks: [
        { type: 'key', title: 'The question', points: ['Upcycled food is a viable solution to the problem of food waste. Discuss.'] },
        { type: 'model', title: 'Example', text: 'Although upcycled food is not yet popular, it <b>clearly</b> offers a <b>practical</b> way to reduce food waste.' },
        { type: 'fields', fields: [
          { id: 'x2-1', label: 'My thesis statement (Although…, …)', placeholder: 'Although…, upcycled food clearly…', rows: 3 },
          { id: 'x2-2', label: 'One sentence about Huang et al. (2024) with a reporting verb that shows stance', placeholder: 'Huang et al. (2024) demonstrate that…', rows: 2 }
        ]}
      ]
    },
    {
      id: 'x3', short: 'Phrase bank', minutes: 10, grouping: 'Alone', category: 'Phrase bank',
      title: 'Phrase bank: all of today’s phrases',
      goal: 'Find more phrases for responding to quotes, evaluating options, speculating and flexibility.',
      blocks: [
        { type: 'language', title: 'Responding to a quote', groups: [
          { label: 'Interpreting the quote', phrases: ['In the quote, when they say ‘…’, do you think it’s about… or…?', 'That’s true, but I think this quote is really more about…', 'I think ‘…’ here implies… It’s saying that…', 'So maybe the quote is a call to action. Saying that…', 'If we think about the quote, ‘…’ here could mean more than just… Maybe it’s about…', 'I don’t really understand what is meant by…', 'I think this quote is making a comment on…', 'As I understand it, the author means…'] },
          { label: 'Giving an opinion', phrases: ['I agree that we need to prioritise… but do you think that…', 'Yeah, I agree with that.', 'Of course that’s true, but…', 'I think (author) makes a really good point about…', 'I don’t really agree with the concept that…', 'I don’t really think this quote makes sense these days.'] },
          { label: 'Relating the quote to research', phrases: ['Especially in countries like (Kenya) that I researched.', 'And if you think about the articles we’ve been reading…', 'Well, those are really big problems in (the UK). My article explained that…', 'I think that has been an issue in (the Netherlands) too.', 'This reminds me of something I read in…', 'This quote conflicts with the research I did into…', 'I think this quote relates to the article I read about…'] }
        ]},
        { type: 'language', title: 'Negotiation language: evaluating options', groups: [
          { label: 'Comparing (similarities)', phrases: ['(X, Y and Z) are all critical and interlinked aspects of…', 'All these (consequences) are (serious), but it seems that none of these…', 'Each factor affects the others.', 'I think that either of the first two options would be effective.', 'Both Option A and Option B are possible long-term solutions.', 'None of these choices would be very popular.'] },
          { label: 'Contrasting (differences)', phrases: ['(The environmental) consequences are a bigger worry than the (animal welfare) issues.', 'I don’t think the second option would work as well in rural areas…', 'Option C would be worse for the economy than the others.', 'Option B would be much more expensive.'] },
          { label: 'Prioritising', phrases: ['This is the most (serious consequence).', 'For me it’s much more (serious) than the other two options.', 'They are all really significant, but I would still go with…', 'Neither of the first 2 options is as important as Option C.', 'All 3 are good choices, but ultimately, I think the best choice would be…', 'Each option has its benefits, but for me the clear choice is…'] }
        ]},
        { type: 'language', title: 'Speculating (considering implications of different options)', tabs: false, groups: [
          { label: 'From the recording', phrases: ['If they had to (verb), then it would be really bad for…', 'If we continue like this, we’ll have no (X) nor (Y).', 'If we don’t prioritize (X), we can’t maintain (Y).', 'Without (X), there won’t be any (Y).', 'If people are (adjective), how can they…?'] },
          { label: 'Other phrases', phrases: ['The problem is just going to keep getting worse unless we tackle the (health) problems.', 'Even if we address (ethical) concerns, the environmental issues will still remain.', 'In case Option B is an unpopular suggestion, the government should…', 'I think that Option C would work the best, provided that…', 'Suppose we choose Option A, what will that mean for (the economy)?'] }
        ]},
        { type: 'language', title: 'Showing flexibility in discussion', groups: [
          { label: 'Introducing alternatives', phrases: ['Alternatively…', 'Another way to look at it is…', 'From a different perspective…'] },
          { label: 'Balancing opinions', phrases: ['While it’s true that…, it’s also worth considering…', 'I see your point, but at the same time…', 'Although I agree with…, I also think…'] },
          { label: 'Openness to change', phrases: ['I’m open to different viewpoints.', 'I used to think that…, but now I see it differently.', 'My opinion has evolved as I learned more about…'] },
          { label: 'Questioning and exploring', phrases: ['What if we look at it this way…?', 'Could it be possible that…?', 'How might we consider…?'] },
          { label: 'Summarising perspectives', phrases: ['In summary, both sides have valid points…', 'Overall, it seems there are several angles to this issue…'] }
        ]},
        { type: 'language', title: 'Evaluative vocabulary — the full list', tabs: false, groups: [
          { label: 'Evaluative adjectives', phrases: ['useful', 'successful', 'relevant', 'effective', 'strong', 'limited', 'crucial', 'inaccurate', 'convincing', 'well-supported', 'innovative', 'flawed', 'short-sighted', 'misguided', 'adequate', 'satisfactory', '(not) exceptional'] },
          { label: 'Evaluative adverbs', phrases: ['convincingly', 'successfully', 'effectively', 'strongly', 'questionably', 'highly', 'poorly', 'skilfully', 'accurately', 'appropriately'] }
        ]},
            { type: 'language', title: 'Reporting verbs by group — the full list', groups: [
              { label: 'Agree / disagree', phrases: ['confirms', 'supports', 'doubts', 'argues', 'refutes', 'questions'] },
              { label: 'Sure / not sure', phrases: ['speculates', 'asserts', 'demonstrates', 'suggests'] },
              { label: 'Neutral', phrases: ['maintains', 'recognises', 'observes', 'acknowledges', 'reports'] },
              { label: 'Important', phrases: ['stress', 'insist', 'emphasise', 'highlight'] }
            ]},
        { type: 'language', title: 'Hedging language — the full list', groups: [
          { label: 'Quantity', phrases: ['few', 'many', 'some', 'the majority', 'much', 'a number of'] },
          { label: 'Frequency', phrases: ['sometimes', 'usually', 'seldom', 'frequently', 'generally', 'often', 'occasionally'] },
          { label: 'Introductory verbs', phrases: ['appear (to)', 'tend (to)', 'seem (to)'] },
          { label: '“That” clauses', phrases: ['It might be the case that…', 'There is a possibility that…', 'It is likely that…', 'It would seem that…'] }
        ]},
        { type: 'language', title: 'Modal language and markers — the full list', groups: [
          { label: 'Modal adverbs', phrases: ['certainly', 'definitely', 'apparently', 'possibly', 'probably', 'clearly', 'potentially', 'perhaps'] },
          { label: 'Modal nouns', phrases: ['probability', 'assumption', 'possibility', 'requirement', 'responsibility', 'likelihood'] },
          { label: 'Signalling language', phrases: ['Although', 'However', 'Comparatively', 'In contrast', 'Furthermore', 'Similarly'] },
          { label: 'Attitude markers', phrases: ['Importantly', 'Predictably', 'Significantly', 'Unfortunately', 'Surprisingly', 'Evidently', 'Unquestionably', 'Undoubtedly', 'Interestingly', 'Notably'] }
        ]}
      ]
    },
    {
      id: 'x4', short: 'Grammar review', minutes: 15, grouping: 'Alone', category: 'Grammar review',
      title: 'Grammar review: comparatives, quantifiers and speculating',
      goal: 'Check the grammar behind the phrases for evaluating options and speculating.',
      blocks: [
            { type: 'cloze', id: 'o2c1', title: '1 · Comparatives, superlatives and quantifiers: complete the examples', list: true, options: ['all', 'bigger', 'each', 'more', 'most', 'none', 'than', 'the'],
              text: '<i>Comparative:</i> (the environmental) consequences are a {{1}} worry {{2}} the (animal welfare) issues.\n<i>Comparative:</i> For me it’s much {{3}} serious {{4}} the other two options.\n<i>Superlative:</i> this is {{5}} {{6}} serious consequence\n<i>Quantifier:</i> (X, Y and Z) are {{7}} critical and interlinked aspects of…\n<i>Quantifier:</i> {{8}} these consequences are serious, but it seems that {{9}} of these…\n<i>Quantifier:</i> {{10}} factor affects the others.\n<i>Quantifier:</i> They are {{11}} really significant, but (I would still go with)…',
              answers: ['bigger', 'than', 'more', 'than', 'the', 'most', 'all', 'all', 'none', 'each', 'all'] },
            { type: 'flip', title: '2 · Quantifiers — guess the meaning, then turn the card', hint: 'Say what the word means. Then tap to check.', items: [
              { front: 'all', back: 'Every one in a group of 3 or more.<br><i>All the cookies were eaten.</i>' },
              { front: 'each', back: 'Every one, one by one (2 or more). Use a singular noun.<br><i>Each cookie has a different flavour.</i>' },
              { front: 'both', back: 'The two of them.<br><i>Both the black and white cookies were delicious.</i>' },
              { front: 'none', back: 'Not any of a group of 3 or more.<br><i>None of my 5 sisters likes cookies.</i>' },
              { front: 'neither', back: 'Not this one and not that one (of two).<br><i>Neither of my parents likes cookies.</i>' },
              { front: 'either', back: 'This one or that one (of two). Also used with “not”.<br><i>You can have either the black or the white cookie.</i>' }
            ]},
            { type: 'cloze', id: 'o2c2', title: '3 · Choose the correct word to complete the phrases', list: true, options: [['option', 'options'], ['good', 'well'], ['worse', 'bad'], ['are', 'is'], ['is', 'are'], ['much', 'many'], ['is', 'are'], ['choice', 'choices'], ['have', 'has']],
              text: 'I think that either of the first two {{1}} would be effective.\nI don’t think the second option would work as {{2}} in rural areas…\nOption C would be {{3}} for the economy than the others.\nBoth Option A and Option B {{4}} possible long-term solutions.\nNeither of the first 2 options {{5}} as important as Option C.\nOption B would be {{6}} more expensive.\nAll 3 {{7}} good choices, but ultimately I think the best choice would be…\nNone of these {{8}} would be very popular.\nEach option {{9}} its benefits, but for me the clear choice is…',
              answers: ['options', 'well', 'worse', 'are', 'is', 'much', 'are', 'choices', 'has'] },
            { type: 'cloze', id: 'o3c', title: '4 · Word puzzle: unmix the letters in CAPITALS', list: true, options: [['unless', 'until', 'useless'], ['Even', 'Never', 'Eleven'], ['case', 'ease', 'cause'], ['provided', 'proved', 'divided'], ['Suppose', 'Oppose', 'Purpose']],
              text: 'The problem is just going to keep getting worse <b>SNEULS</b> → {{1}} we tackle the health problems.\n<b>NEEV</b> → {{2}} if we address ethical concerns, the environmental issues will still remain.\nIn <b>EASC</b> → {{3}} Option B is an unpopular suggestion, the government should offer financial incentives.\nI think that Option C would work the best, <b>DDRPOIVE</b> → {{4}} that the government will enforce these changes.\n<b>OPSPSUE</b> → {{5}} we choose Option A, what will that mean for the economy?',
              answers: ['unless', 'Even', 'case', 'provided', 'Suppose'] },
        { type: 'sort', id: 'o2s', title: '2 · What does each phrase do? Sort them.', hint: '<b>Drag</b> each phrase into a box — or tap a phrase, then a box.', buckets: [
              { label: 'Comparing options', text: 'how they are the same' }, { label: 'Contrasting options', text: 'how they are different' }, { label: 'Prioritising options', text: 'choosing the most important' }
            ], items: [
              { text: 'a) …either of the first two options would be effective.', answer: 0 },
              { text: 'b) …the second option wouldn’t work as well in rural areas…', answer: 1 },
              { text: 'c) Option C would be worse for the economy than the others.', answer: 1 },
              { text: 'd) Both Option A and Option B are possible long-term solutions.', answer: 0 },
              { text: 'e) Neither of the first 2 options is as important as Option C.', answer: 2 },
              { text: 'f) Option B would be much more expensive.', answer: 1 },
              { text: 'g) All 3 are good choices, but ultimately I think the best choice would be…', answer: 2 },
              { text: 'h) None of these choices would be very popular.', answer: 0 },
              { text: 'i) Each option has its benefits, but for me the clear choice is…', answer: 2 }
            ]},
            { type: 'cloze', id: 'd3n-o2c', title: '5 · Evaluating options: complete the phrases', list: true, options: ['balance', 'considerably', 'merits', 'nearly', 'rank', 'Whereas'],
              text: '{{1}} Option A tackles the problem at home, Option B focuses on shops.\nOption B is {{2}} more expensive than the other two.\nA food app wouldn’t work {{3}} as well for older people.\nEach option has its {{4}}, but for me the clear choice is C.\nOn {{5}}, the most realistic option would be B, because it is cheap.\nIf I had to {{6}} them, I’d put A first, simply because it lasts.',
              answers: ['Whereas', 'considerably', 'nearly', 'merits', 'balance', 'rank'] },
            { type: 'sort', id: 'o3s', single: true, title: '6a · Match the sentence halves from the sample discussion', hint: '<b>Drag</b> each beginning to its ending — or tap a beginning, then tap an ending.', buckets: [
              { label: '…how can they fight for animals or the environment?', letter: 'A' },
              { label: '…then it would be really bad for the business.', letter: 'B' },
              { label: '…we can’t maintain a functioning society.', letter: 'C' },
              { label: '…we’ll have no viable land for farming, nor clean water.', letter: 'D' },
              { label: '…there won’t be any animals to protect.', letter: 'E' }
            ], items: [
              { text: '1. If they had to give the animals more space,', answer: 1 },
              { text: '2. If we continue like this,', answer: 3 },
              { text: '3. If we don’t prioritize human health,', answer: 2 },
              { text: '4. Without a healthy environment,', answer: 4 },
              { text: '5. If people are sick,', answer: 0 }
            ]},
            { type: 'quiz', id: 'o3q', items: [
              { q: '6b · Which sentence has a <b>different structure</b> from the others? <small>Hint: look for the word “If”.</small>', options: ['1–B', '2–D', '4–E', '5–A'], answer: '4–E', why: 'All the others start with “If”. 4–E starts with “Without”.' }
            ]},
        { type: 'tip', text: 'Meanings: <b>unless</b> = if not · <b>provided that</b> = only if · <b>suppose</b> = imagine · <b>in case</b> = because it might happen.' }
      ]
    },
    {
      id: 'x5', short: 'Stance spotting', minutes: 20, grouping: 'Pairs', category: 'Language Focus: Activities 2–3',
      title: 'Stance spotting: 15 sentences from the texts (Activities 2 and 3)',
      goal: 'Find the stance word in each sentence and name the tool the writer uses.',
      blocks: [
            { type: 'steps', title: 'Jigsaw', items: [
              { who: 'alone', text: 'Student A: do sentences 1–8. Student B: do 9–15.' },
              { who: 'pair', text: 'Teach your partner your answers. Give a reason for each.' }
            ]},
            { type: 'grid', id: 's4g', title: 'Activity 2 — thinking stance (T) or attitude stance (A)? Look at the words in bold.', columns: ['Stance'], options: ['Thinking (T)', 'Attitude (A)'], rows: [
              '1. <b>Interestingly</b>, the study found that product novelty and the perceived green value have little effect on green actions.',
              '2. Food production and related waste have a <b>significant</b> impact on climate change.',
              '3. The study <b>highlights</b> the importance of ethical consumption.',
              '4. Working with nutritionists and health organisations <b>could</b> build trust and credibility.',
              '5. Health considerations <b>greatly</b> shape consumer attitudes towards upcycled foods.',
              '6. It is <b>important</b> to focus on giving this food to people who need it.',
              '7. Food loss <b>typically</b> occurs between production and distribution.',
              '8. We <b>need to</b> be less accepting as a culture of wasting food.',
              '9. Reducing food loss is <b>vital</b> for improving food security.',
              '10. The food paradox is considered <b>highly unethical</b>.',
              '11. Magazzini Sociali has <b>undoubtedly</b> been successful in supporting the local community.',
              '12. The presence of both food insecurity and food waste in wealthy areas presents a <b>troubling</b> situation.',
              '13. Preventing food loss and waste is therefore a <b>potential</b> strategy to improve food security.',
              '14. Food delivery services reduce the <b>likelihood</b> of over-purchasing in supermarkets.',
              '15. Urban areas <b>tend to</b> use digital solutions.'
            ], answers: [['Attitude (A)'], ['Attitude (A)'], ['Thinking (T)'], ['Thinking (T)'], ['Attitude (A)'], ['Attitude (A)'], ['Thinking (T)'], ['Attitude (A)'], ['Attitude (A)'], ['Attitude (A)'], ['Attitude (A)'], ['Attitude (A)'], ['Thinking (T)'], ['Thinking (T)'], ['Thinking (T)']] },
            { type: 'tip', text: 'Thinking stance = how sure (could, typically, tend to). Attitude stance = good or bad (vital, troubling).' },
            { type: 'grid', id: 's7g', title: 'Activity 3 · Which of the five ways does the bold word use?', columns: ['Type of stance language'], options: ['Evaluative vocabulary', 'Modal language', 'Hedging language', 'Reporting verb', 'Signalling / attitude marker'], rows: [
              '1. <b>Interestingly</b>, the study found that…',
              '2. …have a <b>significant</b> impact on climate change.',
              '3. The study <b>highlights</b> the importance of ethical consumption.',
              '4. Working with nutritionists… <b>could</b> build trust and credibility.',
              '5. Health considerations <b>greatly</b> shape consumer attitudes…',
              '6. It is <b>important</b> to focus on giving this food to people who need it.',
              '7. Food loss <b>typically</b> occurs between production and distribution.',
              '8. We <b>need to</b> be less accepting as a culture of wasting food.',
              '9. Reducing food loss is <b>vital</b> for improving food security.',
              '10. The food paradox is considered <b>highly unethical</b>.',
              '11. Magazzini Sociali has <b>undoubtedly</b> been successful…',
              '12. …presents a <b>troubling</b> situation.',
              '13. …is therefore a <b>potential</b> strategy to improve food security.',
              '14. …reduce the <b>likelihood</b> of over-purchasing in supermarkets.',
              '15. Urban areas <b>tend to</b> use digital solutions.'
            ], answers: [['Signalling / attitude marker'], ['Evaluative vocabulary'], ['Reporting verb'], ['Modal language'], ['Evaluative vocabulary'], ['Evaluative vocabulary'], ['Hedging language'], ['Modal language'], ['Evaluative vocabulary'], ['Evaluative vocabulary'], ['Signalling / attitude marker'], ['Evaluative vocabulary'], ['Modal language'], ['Modal language'], ['Hedging language']] },
            { type: 'tip', text: 'Hint: <i>typically</i> and <i>tend to</i> are about “how often” — that is hedging.' },
            { type: 'teacher', ref: 'w4d3-t16' }
      ],
          answers: { title: 'Activity 3 · more detail', items: [
            ['Attitude markers', '1 Interestingly · 11 undoubtedly'],
            ['Evaluative vocabulary', '2 significant (adjective) · 5 greatly (adverb) · 6 important (adjective) · 9 vital (adjective) · 10 highly unethical (adverb + adjective) · 12 troubling (adjective)'],
            ['Modal language', '4 could (modal verb) · 8 need to (semi-modal) · 13 potential (modal adjective) · 14 likelihood (modal noun)'],
            ['Hedging', '7 typically (adverb of frequency) · 15 tend to (introductory verb)'],
            ['Reporting verb', '3 highlights']
          ]}
    }
  ],

  glossary: [
    ['upcycled food', 'Food made from ingredients that would otherwise be thrown away.', 'Vegemite is made from brewer’s yeast.'],
    ['brewer’s yeast', 'Yeast left over after making beer.', 'Vegemite uses brewer’s yeast.'],
    ['comparative', 'An adjective form that compares two things (bigger, more serious).', 'It is a bigger worry than the other issues.'],
    ['superlative', 'An adjective form for the top of a group (the most serious).', 'This is the most serious consequence.'],
    ['quantifier', 'A word that shows how many or how much (all, each, both, none, neither, either).', 'Neither option is perfect.'],
    ['prioritise', 'Decide what is most important.', 'Prioritise the options before you choose.'],
    ['speculate', 'Guess about possible results or consequences.', 'Suppose we choose Option A, what will happen?'],
    ['implication', 'A possible result of an action.', 'What are the implications of this option?'],
    ['provided that', 'Only if.', 'Option C would work, provided that the government helps.'],
    ['unless', 'If not.', 'It will get worse unless we act.'],
    ['flexibility', 'Being willing to change your opinion.', 'Flexibility is part of critical thinking.'],
    ['initiative', 'A new plan or programme to solve a problem.', 'The town proposed a food waste initiative.'],
    ['compromise', 'An agreement where each side gives up something.', 'We adopted part of the plan as a compromise.'],
    ['modality', 'Language that shows how certain or strong an idea is.', 'High modality: unquestionably.'],
    ['stance', 'The position or opinion a writer or speaker shows.', 'The thesis statement shows a clear stance.'],
    ['concession', 'Accepting a point from the other side.', 'Although some efforts have been successful, …'],
    ['viable', 'Able to work successfully.', 'Upcycled food is a viable solution.'],
    ['objective', 'Fair and based on facts, not personal feelings.', 'Academic writing should sound objective.'],
    ['evaluative language', 'Words that judge quality, value or worth.', 'flawed, convincing, highly effective'],
    ['thinking stance', 'Shows how certain we are about an idea.', 'Urban areas tend to use digital solutions.'],
    ['attitude stance', 'Shows whether we think something is good or bad.', 'This presents a troubling situation.'],
    ['hedging', 'Language that makes a claim less strong or certain.', 'It might be the case that…'],
    ['reporting verb', 'A verb used to report a source (argues, suggests, refutes).', 'Castro et al. (2023) acknowledge the limitations.'],
    ['attitude marker', 'A word that shows the writer’s feeling about an idea.', 'Interestingly, … · Unfortunately, …'],
    ['refute', 'Say or prove that an idea is wrong.', 'McMichael (2009) refutes the notion that…'],
    ['adopt', 'Officially accept and start to use a plan or idea.', 'Should the town adopt the plan?'],
    ['implement', 'Put a plan into action.', 'The plan will be hard to implement.'],
    ['incentive', 'Something that encourages people to do something.', 'Tax cuts are an incentive to donate food.'],
    ['surplus', 'More than is needed; extra.', 'Restaurants could donate surplus food.'],
    ['feasible', 'Possible and practical to do.', 'Is the plan feasible in a small town?'],
    ['alleviate', 'Make a problem less serious.', 'Redistribution could alleviate hunger.'],
    ['edible', 'Safe and fit to eat.', 'Much discarded food is still edible.'],
    ['on balance', 'After thinking about all the points.', 'On balance, Option B is the most realistic.'],
    ['rapport', 'A friendly connection between people.', 'Building rapport helps us work together.']
  ]
};
