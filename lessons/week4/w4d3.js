/* DEC15 · Week 4, Day 3 — lesson content.
   Teacher’s Book: W4 D3 · 6A Discussion skills 2 (60) · 7A AST: Criticality: Engaging with sources (60)
   · 8A Academic writing skills 2 (90) · 9A Building rapport (30).
   Texts: Huang et al. (2024) · Gunders (2024) · Castro et al. (2023) — lessons/week4/sources.js.
   Language tables in 8A from the Student booklet (W4 D3 8B). Activity titles use the Teacher’s Book headings.
   v2 (A2–B1 friendly): related activities are merged into one tab ('Part 1 ·', 'Part 2 ·' block titles keep the
   Teacher’s Book headings). Long phrase lists are shortened; the full lists are in extras → x3 'Phrase bank'.
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
  journey: 'Tomorrow is your second Research Summary Discussion. Today you practise comparing options and talking about what might happen. You argue the other side and act in a town meeting. Then you learn words that show how sure you are and what you think.',
  finish: { title: 'Thursday', text: 'Research Summary Discussion 2' },

  sections: [
    /* ───────────────────────── 6A Discussion skills 2 ───────────────────────── */
    {
      id: 'options', number: '01', code: '6A', minutes: 60,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills 2',
      subtitle: 'Evaluating options and speculating',
      outcome: 'Use phrases to compare options and to talk about possible results. Think about your last discussion and get ready for tomorrow.',
      activities: [
        {
          id: 'o1', short: 'Warmer', minutes: 10, grouping: 'Pairs → groups of 3–4',
          title: 'Warmer: Responding to a quote',
          goal: 'Talk about Vegemite. Then give your opinion on a quote.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Meet Vegemite', items: [
              { label: 'Vegemite', icon: 'sprout', text: 'A dark, salty spread from Australia. People eat a thin layer on toast. It is one of the first <b>upcycled foods</b> (= food made from things that people usually throw away).' }
            ]},
            { type: 'talk', title: '1 · Talk with a partner', prompts: [
              'a) Have you ever tried Vegemite? What does it taste like?',
              'If not, would you like to try it? Why or why not?'
            ]},
            { type: 'quiz', id: 'o1q', title: 'Quick check', items: [
              { q: 'b) Why is Vegemite an example of <b>upcycled food</b>?', options: ['i) The jar is made from recycled glass.', 'ii) Vegemite is made from a waste product of beer making (brewer’s yeast).', 'iii) Vegemite uses vegetables that are close to the “best before” date.'], answer: 'ii) Vegemite is made from a waste product of beer making (brewer’s yeast).', why: 'Upcycled food uses things that people usually throw away. The cookies in Huang et al. (2024) are another example.' }
            ]},
            { type: 'key', title: 'Part 2 · Discussion: respond to the quote', points: [
              'Huang (2024) asserts that “<b>food businesses should clearly advertise the health benefits of upcycled food</b>”.',
              'Do you agree? Why or why not?',
              'Give one example from this week’s texts.'
            ]},
            { type: 'sources', ids: ['huang', 'castro', 'gunders'] },
            { type: 'language', title: 'Sentence starters for the quote', tabs: false, groups: [
              { label: 'Explain the quote', phrases: ['I think this quote is saying that…', 'As I understand it, the author means…', 'I don’t really understand what is meant by…'] },
              { label: 'Give your opinion', phrases: ['Yeah, I agree with that, because…', 'Of course that’s true, but…', 'I don’t really agree with the idea that…'] },
              { label: 'Link it to the texts', phrases: ['This reminds me of something I read in…', 'If you think about the articles we’ve been reading…', 'In (Kenya), the country I researched, …'] }
            ]},
            { type: 'tip', text: 'Want more phrases? See <b>Extras → Phrase bank</b>.' },
            { type: 'teacher', ref: 'w4d3-t1' }
          ]
        },
        {
          id: 'o2', short: 'Comparing', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 3: Evaluating different options',
          goal: 'Compare options and choose the best one, using words like “more… than”, “the most” and “both”.',
          blocks: [
            { type: 'key', title: 'Tomorrow’s discussion has two parts', compare: [
              { label: 'Part 1 · Discussion question', text: 'Give your response to a quote. Use examples from your research. (You just practised this!)' },
              { label: 'Part 2 · Negotiation question', text: 'A question with three possible answers. Say which one is best and why. You don’t have to agree in the end.' }
            ]},
            { type: 'tip', text: '<b>Key words.</b> Comparative (= compares two things): <i>bigger than, more serious than</i>. Superlative (= the top one): <i>the most serious</i>. Quantifier (= says how many): <i>all, each, none</i>.' },
            { type: 'cloze', id: 'o2c1', title: '1 · Complete the examples from the sample discussion', list: true, options: ['all', 'bigger', 'each', 'more', 'most', 'none', 'than', 'the'],
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
            { type: 'cloze', id: 'o2c2', title: '3 · Choose the correct word to complete the phrases (a–i)', list: true, options: [['option', 'options'], ['good', 'well'], ['worse', 'bad'], ['are', 'is'], ['is', 'are'], ['much', 'many'], ['is', 'are'], ['choice', 'choices'], ['have', 'has']],
              text: 'I think that either of the first two {{1}} would be effective.\nI don’t think the second option would work as {{2}} in rural areas…\nOption C would be {{3}} for the economy than the others.\nBoth Option A and Option B {{4}} possible long-term solutions.\nNeither of the first 2 options {{5}} as important as Option C.\nOption B would be {{6}} more expensive.\nAll 3 {{7}} good choices, but ultimately I think the best choice would be…\nNone of these {{8}} would be very popular.\nEach option {{9}} its benefits, but for me the clear choice is…',
              answers: ['options', 'well', 'worse', 'are', 'is', 'much', 'are', 'choices', 'has'] },
            { type: 'sort', id: 'o2s', title: '4 · What does each phrase (a–i) do?', buckets: [
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
            { type: 'steps', title: '5 · Practise evaluating options', items: [
              { who: 'class', text: 'Spin to get a category (or your teacher gives one).' },
              { who: 'pair', text: 'Think of <b>three options</b>. Example — <i>delicious fruit</i>: mango, strawberries, apples.' },
              { who: 'pair', text: 'Compare, contrast and choose the best one. Talk for 1–3 minutes.' },
              { who: 'pair', text: 'Spin again for a new category.' }
            ]},
            { type: 'spinner', id: 'o2sp', title: 'Spin a category: which is the best?', text: 'Name three options. Then do the job on the second reel. Use the sentence starters below.', reels: [
              { label: 'Category', start: 'Spin!', items: ['Delicious fruit', 'Ice-cream flavours', 'Good fast-food chains', 'Relaxing holiday places', 'Exciting holiday places', 'Talented singers or musicians', 'Bad excuses for being late', 'Your choice!'] },
              { label: 'Your job', start: '…', items: ['Compare: how are they the same?', 'Contrast: how are they different?', 'Prioritise: which is the best? Why?'] }
            ]},
            { type: 'language', title: 'Sentence starters: evaluating options', tabs: false, groups: [
              { label: 'Comparing (same)', phrases: ['Both A and B are…', 'All three are…', 'None of these would be…'] },
              { label: 'Contrasting (different)', phrases: ['A is much more (expensive) than B.', 'B wouldn’t work as well in…', 'C would be worse for… than the others.'] },
              { label: 'Prioritising (the best)', phrases: ['This is the most (important)…', 'Each option has its benefits, but for me the clear choice is…', 'They are all good, but I would still go with…'] }
            ]},
            { type: 'teacher', ref: 'w4d3-t2' }
          ]
        },
        {
          id: 'o3', short: 'Speculating', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 3: Speculating (considering implications of different options)',
          goal: 'Use “if” sentences to talk about what might happen.',
          blocks: [
            { type: 'tip', text: '<b>Key words.</b> Speculate (= guess what might happen). Implication / consequence (= a possible result). Example: <i>If we continue like this, we’ll have no clean water.</i>' },
            { type: 'sort', id: 'o3s', single: true, title: '1a · Match the sentence halves from the sample discussion', hint: '<b>Drag</b> each beginning to its ending — or tap a beginning, then tap an ending.', buckets: [
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
              { q: '1b · Which sentence has a <b>different structure</b> from the others? <small>Hint: look for the word “If”.</small>', options: ['1–B', '2–D', '4–E', '5–A'], answer: '4–E', why: 'All the others start with “If”. 4–E starts with “Without”.' }
            ]},
            { type: 'cloze', id: 'o3c', title: '3 · Unmix the letters in CAPITALS to complete the phrases', list: true, options: [['unless', 'until', 'useless'], ['Even', 'Never', 'Eleven'], ['case', 'ease', 'cause'], ['provided', 'proved', 'divided'], ['Suppose', 'Oppose', 'Purpose']],
              text: 'The problem is just going to keep getting worse <b>SNEULS</b> → {{1}} we tackle the health problems.\n<b>NEEV</b> → {{2}} if we address ethical concerns, the environmental issues will still remain.\nIn <b>EASC</b> → {{3}} Option B is an unpopular suggestion, the government should offer financial incentives.\nI think that Option C would work the best, <b>DDRPOIVE</b> → {{4}} that the government will enforce these changes.\n<b>OPSPSUE</b> → {{5}} we choose Option A, what will that mean for the economy?',
              answers: ['unless', 'Even', 'case', 'provided', 'Suppose'] },
            { type: 'tip', text: 'Meanings: <b>unless</b> = if not · <b>provided that</b> = only if · <b>suppose</b> = imagine · <b>in case</b> = because it might happen.' },
            { type: 'talk', title: '4 · Discuss: do you agree with this sentence from a sample discussion?', prompts: [
              '“If we all shifted towards a largely plant-based diet, we’d minimise animal rights violations as well as the negative impacts on the environment.”',
              'Use “if” sentences and the starters below.'
            ]},
            { type: 'language', title: 'Sentence starters: speculating', tabs: false, groups: [
              { label: 'If…', phrases: ['If we continue like this, we’ll have no…', 'If we don’t prioritise (X), we can’t…', 'Without (X), there won’t be any…'] },
              { label: 'Other ways', phrases: ['It will keep getting worse unless we…', 'Option C would work best, provided that…', 'Suppose we choose Option A, what will that mean for…?'] }
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
              { who: 'group', text: 'Be <b>flexible</b>: if they have good arguments, you can change your mind.' }
            ]},
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Say your choice', phrases: ['For me, the clear choice is… because…', 'I would still go with… because…'] },
              { label: 'Disagree politely', phrases: ['I see your point, but…', 'I’m afraid we don’t see eye to eye there.'] },
              { label: 'Change your mind', phrases: ['Oh yeah… I hadn’t considered that.', 'You make a strong case. Maybe that is the best option.'] }
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
      outcome: 'Support your opinion with evidence from the readings. Argue the other side. Use phrases that show you are open to new ideas.',
      activities: [
        {
          id: 'f1', short: 'Warmer', minutes: 15, grouping: 'Pairs',
          title: 'Warmer: Strong opinions and the opposite view',
          goal: 'Write a strong opinion about food waste, support it — then argue the opposite.',
          blocks: [
            { type: 'cards', title: 'Part 1 · Warmer — choose a strong opinion (or write your own)', items: [
              { text: 'Food waste is a serious issue that needs to be addressed immediately.' },
              { text: 'Food waste is more of a problem in wealthy countries than in poorer ones.' },
              { text: 'Consumers are the biggest cause of food waste, and they need to change their habits.' },
              { text: 'Governments should punish supermarkets and restaurants that waste large amounts of food.' }
            ]},
            { type: 'model', title: 'Example: opinion → evidence → the opposite view', rows: [
              ['Opinion', 'Consumers are the biggest cause of food waste.'],
              ['Evidence', 'Gunders (2024) says that consumers are the largest source of food waste.'],
              ['Opposite view', 'On the other hand, in poorer countries most food is lost on farms and in transport, not at home.']
            ]},
            { type: 'fields', fields: [
              { id: 'f1-1', label: 'My strong opinion about food waste', placeholder: 'Food waste is…', rows: 2 },
              { id: 'f1-2', label: 'Reasons and evidence from the readings (5 minutes)', placeholder: 'Gunders (2024) says… Castro et al. (2023)…', rows: 3 }
            ]},
            { type: 'sources', ids: ['gunders', 'castro', 'huang'] },
            { type: 'steps', items: [
              { who: 'pair', text: 'Tell your partner your opinion. Give reasons and evidence.' },
              { who: 'pair', text: 'Choose one opinion (yours or your partner’s).' },
              { who: 'pair', text: 'Now argue for the <b>opposite</b> view. Use ideas from the readings if you can.' }
            ]},
            { type: 'spinner', id: 'f1sp', title: 'Argue the opposite!', text: 'Spin. Read the opinion. Now argue <b>against</b> it for 1 minute. Start with the phrase on the second reel.', reels: [
              { label: 'Opinion', start: 'Spin!', items: ['Food waste must be fixed now.', 'Rich countries waste more food.', 'Consumers cause most food waste.', 'Punish shops that waste food.', 'Your partner’s opinion'] },
              { label: 'Start with', start: '…', items: ['On the other hand, …', 'Another way to look at it is…', 'Some people argue that…', 'But what about…?'] }
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
          goal: 'Learn phrases that show you are open to other ideas.',
          blocks: [
            { type: 'key', title: 'Why flexibility (= being open to change) matters', points: [
              'At university you need to listen to different ideas.',
              'In your discussion tomorrow, you will hear many opinions.',
              'Flexibility helps teamwork and problem-solving.'
            ]},
            { type: 'language', title: 'Phrases for showing flexibility', groups: [
              { label: 'Another idea', phrases: ['Another way to look at it is…', 'From a different perspective…'] },
              { label: 'Both sides', phrases: ['I see your point, but at the same time…', 'Although I agree with…, I also think…'] },
              { label: 'Changing my mind', phrases: ['I used to think that…, but now I see it differently.', 'I’m open to different viewpoints.'] },
              { label: 'Asking', phrases: ['What if we look at it this way…?', 'Could it be possible that…?'] },
              { label: 'Summing up', phrases: ['In summary, both sides have valid points…', 'Overall, there are several angles to this issue…'] }
            ]},
            { type: 'talk', prompts: ['Did you use any of these phrases when you argued the opposite view? Which ones?', 'Try again: say one sentence from each group about your opinion from the warmer.'] },
            { type: 'flash', id: 'f2fl', title: 'Memory game: remember the phrase', text: 'I see your point, but at the same time I think there are other ways to look at it.', seconds: 6 },
            { type: 'tip', text: 'Nice work! More phrases are in <b>Extras → Phrase bank</b>.' },
            { type: 'teacher', ref: 'w4d3-t7' }
          ]
        },
        {
          id: 'f3', short: 'Town meeting', minutes: 35, grouping: 'Groups of 6',
          title: 'Group discussion: Kooringal town meeting + Reflection',
          goal: 'Act out a town meeting. Try to agree on a plan to reduce food waste.',
          blocks: [
            { type: 'flip', title: 'Part 1 · Group discussion — key words first', hint: 'Guess the meaning. Then tap the card.', items: [
              { front: 'initiative', back: 'A new plan to solve a problem.' },
              { front: 'food rescue', back: 'Collecting good food that shops don’t want and giving it to people.' },
              { front: 'composting', back: 'Turning food scraps into soil for gardens.' },
              { front: 'financial incentive', back: 'Money (or lower tax) to make people want to do something.' },
              { front: 'compromise', back: 'An agreement where each side gets part of what it wants.' }
            ]},
            { type: 'key', title: 'Scenario: Tackling Food Waste in Kooringal', points: [
              'Kooringal is a historic town with 13,500 people. Many tourists visit.',
              'Restaurants, supermarkets and homes throw away a lot of good food.',
              'But some people in the town don’t have enough food.',
              'The local government has a plan (an initiative). It has five parts: <b>food rescue programs, community composting, financial incentives for businesses, public awareness campaigns and new jobs in green work</b>.',
              'Tonight there is a town meeting. <b>Should Kooringal adopt the plan?</b>'
            ]},
            { type: 'cards', title: 'Choose your role (your teacher may give you one)', pick: 'f3-role', items: [
              { label: '1 · Local Restaurant Owner', icon: 'briefcase', text: 'Your restaurant has extra food. You have <b>mixed feelings</b>. Good: you save money and look good. Bad: more rules and changes to your work.<br><small>Ideas: save money · brand image · new rules · competition</small>' },
              { label: '2 · Local Government Officer', icon: 'flag', text: 'You are <b>for</b> the plan. It will help health, the environment and the local economy. There are problems, but the benefits are bigger.<br><small>Ideas: health · environment · new jobs · problems to solve</small>' },
              { label: '3 · Chairperson of the Community Council', icon: 'users', text: 'You lead the meeting. Make sure everyone speaks and listens. You <b>don’t have an opinion yet</b>.<br><small>Ideas: give turns · balance · compromise · how to decide</small>' },
              { label: '4 · Environmentalist (Keep Kooringal Green)', icon: 'sprout', text: 'You care about nature. You are <b>for</b> the plan. It will cut pollution and protect the environment.<br><small>Ideas: less pollution · composting · wildlife · education</small>' },
              { label: '5 · Local Resident', icon: 'home', text: 'You have lived here a long time. You are <b>against</b> the plan. It may cost too much, cause problems for families, or not work.<br><small>Ideas: cost · paperwork · risks · other solutions</small>' },
              { label: '6 · Local Shop Owner', icon: 'briefcase', text: 'You have a small shop. You are <b>against</b> the plan. New rules and costs could hurt small businesses.<br><small>Ideas: extra costs · new rules · local trade · will it work?</small>' }
            ]},
            { type: 'fields', title: 'Prepare your role', fields: [
              { id: 'f3-1', label: 'My arguments', placeholder: 'As a local shop owner, I’m worried that…', rows: 3 },
              { id: 'f3-2', label: 'Questions I want to ask the others', placeholder: 'Who will pay for…? What if…?', rows: 2 }
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Read your role. Write your arguments and questions.' },
              { who: 'group', text: 'The <b>chairperson</b> opens the meeting and gives everyone a turn.' },
              { who: 'group', text: 'Discuss the plan. Use the flexibility phrases.' },
              { who: 'group', text: 'At the end, decide: <b>should Kooringal adopt it?</b>' }
            ]},
            { type: 'language', title: 'Sentence starters for the meeting', tabs: false, groups: [
              { label: 'Chairperson', phrases: ['Welcome, everyone. Let’s start with…', 'What do you think, (name)?', 'So, can we agree on…?'] },
              { label: 'Your view', phrases: ['As a (shop owner), I’m worried that…', 'I support this plan because…', 'Who will pay for…?'] },
              { label: 'Being flexible', phrases: ['I see your point, but at the same time…', 'Maybe we can agree on part of the plan.', 'OK, I hadn’t thought of that.'] }
            ]},
            { type: 'choose', id: 'f3c', title: 'Our town’s decision', options: ['Adopt the whole initiative', 'Adopt part of it (a compromise)', 'Don’t adopt it', 'No agreement'] },
            { type: 'teacher', ref: 'w4d3-t8' },
            { type: 'talk', title: 'Part 2 · Reflection', prompts: [
              'Did you change your opinion in the meeting?',
              'Was it easy or hard to change your mind? Why?',
              'How does flexibility help in university discussions?',
              'What will you use from today in future group work?'
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
      outcome: 'Use words that show how sure you are (modality) and what you think (stance) in persuasive writing.',
      activities: [
        {
          id: 's1', short: 'How sure?', minutes: 25, grouping: 'Pairs',
          title: 'Warmer + Taking a stance in persuasive writing',
          goal: 'See how writers show how sure they are and what they think.',
          blocks: [
            { type: 'key', title: 'Part 1 · Warmer: how sure is the writer?', points: [
              '<b>Modality</b> (= words that show how sure the writer is): <i>perhaps, should, unquestionably</i>.',
              'Look at the words in <b>bold</b>. Is the writer a little sure, quite sure or very sure?'
            ]},
            { type: 'order', id: 's1o', title: 'Put the sentences in order: least certain → most certain', ends: ['Least certain', 'Most certain'], items: [
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
            { type: 'key', title: 'Part 2 · Taking a stance in persuasive writing', compare: [
              { label: 'Position', text: 'Your opinion, with evidence.' },
              { label: 'Stance', text: 'How you show your position when you write or speak.' },
              { label: 'Where?', text: 'In the thesis statement, topic sentences, evaluations of evidence and the conclusion.' },
              { label: 'A good stance', text: 'Shows both sides, but makes clear which side you support.' }
            ]},
            { type: 'quiz', id: 's2q1', items: [
              { q: '1. What is the purpose of a persuasive text?', options: ['To convince the reader that a certain stance is better, or to change their opinion', 'To describe a topic without an opinion', 'To tell a personal story'], answer: 'To convince the reader that a certain stance is better, or to change their opinion', why: 'A persuasive text wants the reader to agree with the writer.' }
            ]},
            { type: 'key', title: 'The question', points: ['<b>Upcycled food is a viable solution to the problem of food waste. Discuss.</b> <small>(viable = can work)</small>'] },
            { type: 'scale', id: 's2s1', title: '2a · Thesis statement 1 — where would you put the X?', statement: 'Although it requires widespread consumer acceptance and regulatory support to fully realize its potential, upcycled food presents a practical and sustainable solution to the global issue of food waste.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Neutral', answer: 75, why: 'Positive. The writer first accepts a problem (“requires… acceptance and… support”). But then calls upcycled food <b>practical and sustainable</b>.' },
            { type: 'quiz', id: 's2q2', items: [
              { q: '2b. Which words show the stance?', options: ['practical and sustainable', 'widespread consumer acceptance', 'the global issue'], answer: 'practical and sustainable', why: 'Two positive adjectives — they show the writer likes the idea.' },
              { q: '2c. Which word could move the X to the far right (strongly agree)?', options: ['clearly', 'perhaps', 'sometimes'], answer: 'clearly', why: '“…upcycled food clearly presents a practical and sustainable solution…” — “clearly” makes the stance stronger.' }
            ]},
            { type: 'scale', id: 's2s2', title: '3 · Thesis statement 2 — where would you put the X now? Why?', statement: 'Although some upcycling efforts have been successful, this essay strongly argues that it is not a feasible solution as it fails to address systemic production inefficiencies and consumer motivation.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Neutral', answer: 5, why: 'Far left. “<b>Strongly argues</b>” shows a strong opinion. “Although some… have been successful” shows the other side first.' },
            { type: 'teacher', ref: 'w4d3-t11' }
          ],
          answers: { items: [
            ['Warmer · Low, medium and high modality', '<img src="assets/week4/modality-ladder.svg" alt="A modality ladder: low modality (perhaps, somewhat, occasionally), medium modality (should, often, it is possible), high modality (it is evident, it is highly likely, unquestionably).">'],
            ['Warmer · Why it matters', 'Modality shows how sure the writer is about their argument.']
          ]}
        },
        {
          id: 's3', short: 'Two stances', minutes: 13, grouping: 'Pairs',
          title: 'Language Focus: Activities 1–2 · Evaluative language and two kinds of stance',
          goal: 'Sort good, bad and neutral words. Then find two kinds of stance.',
          blocks: [
            { type: 'key', title: 'Part 1 · Language Focus: Activity 1 — evaluative language', points: ['<b>Evaluative language</b> (= words that judge something as good, bad or OK) shows your stance. Choose these words carefully.'] },
            { type: 'model', title: 'Examples', list: [
              'The writer’s argument is <b>convincing</b> and <b>well-supported</b>.',
              'This solution is <b>innovative</b> and <b>highly effective</b>.',
              'The proposal is <b>flawed</b> and <b>short-sighted</b>.',
              'The results are <b>adequate</b>, meeting the basic requirements.',
              'Her performance was <b>satisfactory</b>, although <b>not exceptional</b>.'
            ]},
            { type: 'sort', id: 's3s', title: 'Positive, negative or neutral?', hint: '<b>Drag</b> each word into a box. Hint: <i>flawed</i> = has mistakes · <i>adequate</i> = OK, good enough.', buckets: [
              { label: 'Positive' }, { label: 'Negative' }, { label: 'Neutral' }
            ], items: [
              { text: 'convincing', answer: 0 }, { text: 'well-supported', answer: 0 }, { text: 'innovative', answer: 0 }, { text: 'highly effective', answer: 0 },
              { text: 'flawed', answer: 1 }, { text: 'short-sighted', answer: 1 },
              { text: 'adequate', answer: 2 }, { text: 'satisfactory', answer: 2 }, { text: 'not exceptional', answer: 2 }
            ]},
            { type: 'figure', src: 'assets/week4/stance-tools.svg', alt: 'Two kinds of stance — thinking stance (how certain we are) and attitude stance (whether we think it is good or bad) — and five tools to show stance: evaluative vocabulary, modal language, hedging language, reporting verbs, signalling and attitude markers.', caption: 'Thinking stance, attitude stance — and five ways to show them', size: 'wide' },
            { type: 'key', title: 'Two kinds of stance', compare: [
              { label: 'Thinking stance', text: 'How sure are we? How much evidence do we have?', eg: 'could, typically, tend to' },
              { label: 'Attitude stance', text: 'Is it good or bad? Is it important?', eg: 'vital, troubling, important' }
            ]},
            { type: 'teacher', ref: 'w4d3-t12' },
            { type: 'grid', id: 's4g', title: 'Part 2 · Language Focus: Activity 2 — thinking stance (T) or attitude stance (A)? Look at the words in bold.', columns: ['Stance'], options: ['Thinking (T)', 'Attitude (A)'], rows: [
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
            { type: 'tip', text: 'You will use these 15 sentences again in Activity 3 (tab “Ways 4–5”).' },
            { type: 'teacher', ref: 'w4d3-t13' }
          ]
        },
        {
          id: 's5', short: 'Ways 1–3', minutes: 12, grouping: 'Pairs',
          title: 'Language Focus: Five ways to show stance (1–3)',
          goal: 'Show your stance and still sound objective (= fair, not personal).',
          blocks: [
            { type: 'key', title: 'Objective — but with a stance', points: [
              'In academic writing, don’t write “I think upcycled food is great”.',
              'Use these five tools instead. Today: tools 1–3.'
            ]},
            { type: 'language', title: '1 · Evaluative vocabulary — the most useful words', tabs: false, groups: [
              { label: 'Adjectives', phrases: ['useful', 'effective', 'successful', 'crucial', 'convincing', 'limited', 'flawed', 'adequate'] },
              { label: 'Adverbs', phrases: ['effectively', 'successfully', 'strongly', 'highly', 'poorly', 'convincingly'] }
            ]},
            { type: 'fields', fields: [
              { id: 's5-1', label: 'Look back at Activity 1. Can you add more evaluative words?', placeholder: 'significant, vital, troubling…', rows: 1 }
            ]},
            { type: 'language', title: '2 · Modal language (how sure?)', groups: [
              { label: 'Modal verbs', phrases: ['can', 'might', 'may', 'will', 'would', 'must', 'should', 'could'] },
              { label: 'Modal adverbs', phrases: ['certainly', 'definitely', 'probably', 'possibly', 'clearly', 'perhaps'] },
              { label: 'Modal adjectives', phrases: ['certain', 'definite', 'probable', 'possible', 'likely'] },
              { label: 'Modal nouns', phrases: ['probability', 'possibility', 'likelihood', 'assumption', 'requirement', 'responsibility'] }
            ]},
            { type: 'fields', fields: [
              { id: 's5-2', label: 'Look back at the warmer sentences. Which modal words can you add?', placeholder: 'evident, highly likely, unquestionably…', rows: 1 }
            ]},
            { type: 'tip', text: '<b>Hedging</b> (= making a claim softer, less certain). It shows you are careful and protects you from criticism.' },
            { type: 'sort', id: 's5s', single: true, title: '3 · Hedging language — add the headings', hint: '<b>Drag</b> each heading to its list of words.', buckets: [
              { label: 'few · many · some · the majority · much · a number of', letter: '1' },
              { label: 'sometimes · usually · seldom · frequently · generally · often · occasionally', letter: '2' },
              { label: 'appear (to) · tend (to) · seem (to)', letter: '3' }
            ], items: [
              { text: 'Adjectives of quantity', answer: 0 },
              { text: 'Adverbs of frequency', answer: 1 },
              { text: 'Introductory verbs', answer: 2 }
            ]},
            { type: 'model', title: 'Hedging with “that” clauses', list: [
              '<b>It might be the case that</b> global temperatures are rising more rapidly than predicted.',
              '<b>There is a possibility that</b> the medication could cause side effects.',
              '<b>It is likely that</b> the new policy will affect economic growth.',
              '<b>It would seem that</b> further research is required to fully understand the implications of this finding.'
            ]},
            { type: 'quiz', id: 's5q', title: 'Quick check', items: [
              { q: 'Why is hedging language helpful?', options: ['It shows how sure you are, shows the limits of your evidence, and protects you from criticism.', 'It makes your opinion invisible.', 'It makes every claim sound 100% certain.'], answer: 'It shows how sure you are, shows the limits of your evidence, and protects you from criticism.', why: 'Hedging stops your claims from sounding too strong.' }
            ]},
            { type: 'teacher', ref: 'w4d3-t14' }
          ]
        },
        {
          id: 's6', short: 'Ways 4–5', minutes: 17, grouping: 'Pairs',
          title: 'Language Focus: Five ways to show stance (4–5) Reporting verbs, signalling and attitude markers + Activity 3',
          goal: 'Use reporting verbs and markers. Then name the stance words in 15 sentences.',
          blocks: [
            { type: 'key', title: 'Part 1 · (4) Reporting verbs — what they tell the reader', compare: [
              { label: 'Agree / disagree', text: 'The writer agrees with the source — or challenges it.', eg: 'supports, refutes' },
              { label: 'Sure / not sure', text: 'The source is confident — or not so sure.', eg: 'demonstrates, suggests' },
              { label: 'Neutral', text: 'Just the facts. No judgement.', eg: 'reports, observes' },
              { label: 'Important', text: 'This information is very important.', eg: 'emphasise, highlight' }
            ]},
            { type: 'sort', id: 's6s', title: 'Put the reporting verbs in bold into their groups', buckets: [
              { label: 'Agreement or disagreement' }, { label: 'Certainty or uncertainty' }, { label: 'Neutral or objective' }, { label: 'Importance or relevance' }
            ], items: [
              { text: 'a. The researcher <b>questions</b> the validity of the earlier conclusions.', answer: 0 },
              { text: 'b. Our Changing Climate (2020) <b>asserts</b> that the current US legislations around food labelling are insufficient to minimise food waste.', answer: 1 },
              { text: 'c. The UN Food and Agriculture Organisation <b>reported</b> in 2020 that a third of the global population was food insecure.', answer: 2 },
              { text: 'd. The study <b>demonstrates</b> a clear correlation between diet and health outcomes.', answer: 1 },
              { text: 'e. Nicastro and Carillo (2021) <b>emphasise</b> the importance of redistributing food to those in need.', answer: 3 },
              { text: 'f. Huang et al. (2024) <b>suggest</b> that highlighting the daily benefits of upcycled foods could boost market acceptance.', answer: 1 },
              { text: 'g. Castro et al. (2023) <b>acknowledge</b> the limitations mobile applications have.', answer: 2 },
              { text: 'h. McMichael (2009) <b>refutes</b> the notion that food banks can adequately address the root causes of food insecurity, arguing that they merely provide temporary relief from systemic issues.', answer: 0 },
              { text: 'i. Royer (2024) <b>argues</b> that minimizing food waste is critical to ensuring resource conservation and environmental protection.', answer: 0 }
            ]},
            { type: 'language', title: 'Reporting verbs by group', groups: [
              { label: 'Agree / disagree', phrases: ['confirms', 'supports', 'doubts', 'argues', 'refutes', 'questions'] },
              { label: 'Sure / not sure', phrases: ['speculates', 'asserts', 'demonstrates', 'suggests'] },
              { label: 'Neutral', phrases: ['maintains', 'recognises', 'observes', 'acknowledges', 'reports'] },
              { label: 'Important', phrases: ['stress', 'insist', 'emphasise', 'highlight'] }
            ]},
            { type: 'teacher', ref: 'w4d3-t15' },
            { type: 'language', title: 'Part 2 · (5) Signalling and attitude markers', tabs: false, groups: [
              { label: 'Signalling (links ideas)', phrases: ['Although', 'However', 'In contrast', 'Furthermore', 'Similarly'] },
              { label: 'Attitude markers (show feeling)', phrases: ['Importantly', 'Surprisingly', 'Unfortunately', 'Interestingly', 'Undoubtedly'] }
            ]},
            { type: 'key', tone: 'warn', title: 'Use attitude markers only a little', points: ['Too many can make your writing sound too personal. Use one or two in a paragraph.'] },
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
        },
        {
          id: 's8', short: 'Use it', minutes: 23, grouping: 'Pairs → groups',
          title: 'Activity 4 (Optional) + Language in use',
          goal: 'Find stance words in a model paragraph. Then use them yourself.',
          blocks: [
            { type: 'passage', id: 's8p', title: 'Part 1 · Activity 4 (Optional): IWA Sample 3.1 · body paragraph 2 — highlight the language of stance', text: '¹Addressing the problem of food waste through better management and distribution of resources is also important because it has the potential to directly alleviate hunger. ²Estimates from the FAO reveal that approximately 30% of all food produced worldwide is not consumed (Our Changing Climate, 2020). ³While this food wastage occurs at various points in the supply chain, a large amount of perfectly edible food is thrown away by consumers. ⁴Consumer preference for attractive produce and the tendency to over purchase and let food spoil are some of the behavioural patterns that have led to the unnecessary discarding of food (Tchonkouang et al., 2023; Our Changing Climate, 2020). ⁵However, with the adoption of more sustainable consumption habits and redistribution programs, a significant amount of food could be redirected from waste streams to improve overall food availability in underserved populations (Royer, 2024). ⁶This redistribution could be particularly impactful in developed countries where surplus food from restaurants, retail, and households could be channelled to food banks to provide immediate relief. ⁷In fact, if the food waste generated in Australia were cut by one third, the amount saved could adequately feed 921,000 people for a year (Tchonkouang et al., 2023), demonstrating the importance of food conservation as a means of combating hunger.' },
            { type: 'tip', text: 'Start with the easy ones: find <b>could</b>, <b>However</b> and <b>significant</b>. Then look for more.' },
            { type: 'table', id: 's8t', title: 'Language of stance', columns: ['Sentence', 'Words', 'Type (evaluative · modal · hedging · reporting · signalling/attitude)'], fixed: ['1', '2', '3', '4', '5', '6', '7'] },
            { type: 'teacher', ref: 'w4d3-t17' },
            { type: 'cards', title: 'Part 2 · Language in use — Option A: choose a statement', pick: 's9-pick', items: [
              { text: 'Technology is harmful to students’ learning experiences.' },
              { text: 'Countries should have a universal basic income.' },
              { text: 'Online learning is as effective as traditional classroom learning.' },
              { text: 'Governments should impose stricter regulations on social media platforms to combat misinformation.' }
            ]},
            { type: 'model', title: 'Example stance (Online learning…)', text: '<b>It is highly likely that</b> online learning is <b>useful</b> for busy students. However, it is <b>somewhat limited</b>, because students <b>often</b> have fewer chances to speak.', note: 'Modal: <i>it is highly likely</i> · hedging: <i>somewhat, often</i> · evaluative: <i>useful, limited</i>.' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Strong', phrases: ['It is evident that…', 'Clearly, …', '… is highly effective because…'] },
              { label: 'Softer', phrases: ['It is possible that…', '… tends to…', 'This is somewhat limited because…'] }
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
      outcome: 'Get to know your classmates and help make a friendly, supportive class.',
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
        { type: 'language', title: 'Modal language and markers — the full list', groups: [
          { label: 'Modal adverbs', phrases: ['certainly', 'definitely', 'apparently', 'possibly', 'probably', 'clearly', 'potentially', 'perhaps'] },
          { label: 'Modal nouns', phrases: ['probability', 'assumption', 'possibility', 'requirement', 'responsibility', 'likelihood'] },
          { label: 'Signalling language', phrases: ['Although', 'However', 'Comparatively', 'In contrast', 'Furthermore', 'Similarly'] },
          { label: 'Attitude markers', phrases: ['Importantly', 'Predictably', 'Significantly', 'Unfortunately', 'Surprisingly', 'Evidently', 'Unquestionably', 'Undoubtedly', 'Interestingly', 'Notably'] }
        ]}
      ]
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
    ['rapport', 'A friendly connection between people.', 'Building rapport helps us work together.']
  ]
};
