/* DEC15 · Week 4, Day 3 — lesson content.
   Teacher’s Book: W4 D3 · 6A Discussion skills 2 (60) · 7A AST: Criticality: Engaging with sources (60)
   · 8A Academic writing skills 2 (90) · 9A Building rapport (30).
   Texts: Huang et al. (2024) · Gunders (2024) · Castro et al. (2023) — lessons/week4/sources.js.
   Language tables in 8A from the Student booklet (W4 D3 8B). Activity titles use the Teacher’s Book headings.
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
  journey: 'Tomorrow is your second Research Summary Discussion. Today you practise comparing, contrasting and prioritising options, and speculating about consequences. You argue the opposite view and role-play a town meeting to practise flexibility. Then you learn how writers show their stance — how certain they are and what they think — with modality, evaluative language and reporting verbs.',
  finish: { title: 'Thursday', text: 'Research Summary Discussion 2' },

  sections: [
    /* ───────────────────────── 6A Discussion skills 2 ───────────────────────── */
    {
      id: 'options', number: '01', code: '6A', minutes: 60,
      tone: 'teal', art: 'discussion',
      title: 'Discussion skills 2',
      subtitle: 'Evaluating options and speculating',
      outcome: 'Understand and practise language and strategies for negotiation in a discussion, and reflect on your previous discussion before tomorrow.',
      activities: [
        {
          id: 'o1', short: 'Vegemite quote', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Warmer: Responding to a quote',
          goal: 'Revise upcycled food with an Australian icon — then respond to a quote from Huang et al. (2024).',
          blocks: [
            { type: 'cards', items: [
              { label: 'Vegemite', icon: 'sprout', text: 'An iconic Australian dark, salty spread — usually eaten thinly on toast. It is an early pioneer of upcycled food.' }
            ]},
            { type: 'talk', title: '1 · Discuss with a partner', prompts: ['a) Have you ever tried Vegemite? If so, what does it taste like? If not, would you like to try it?'] },
            { type: 'quiz', id: 'o1q', items: [
              { q: 'b) Why is Vegemite an example of <b>upcycled food</b>?', options: ['i) The jar is made from recycled glass.', 'ii) Vegemite is made from a waste product of beer making (brewer’s yeast).', 'iii) Vegemite uses vegetables that are close to the “best before” date.'], answer: 'ii) Vegemite is made from a waste product of beer making (brewer’s yeast).', why: 'Upcycled foods use ingredients that would otherwise be thrown away — like the grain cookies in Huang et al. (2024).' }
            ]},
            { type: 'key', title: '2 · Discussion', points: ['Huang (2024) asserts that “<b>food businesses should clearly advertise the health benefits of upcycled food</b>”. What is your response to this? Give examples from this week’s input texts that discuss this viewpoint.'] },
            { type: 'sources', ids: ['huang', 'castro', 'gunders'] },
            { type: 'language', title: 'Language for responding to the quote', groups: [
              { label: 'Interpreting the quote', phrases: ['In the quote, when they say ‘…’, do you think it’s about… or…?', 'That’s true, but I think this quote is really more about…', 'I think ‘…’ here implies… It’s saying that…', 'So maybe the quote is a call to action. Saying that…', 'If we think about the quote, ‘…’ here could mean more than just… Maybe it’s about…', 'I don’t really understand what is meant by…', 'I think this quote is making a comment on…', 'As I understand it, the author means…'] },
              { label: 'Giving an opinion', phrases: ['I agree that we need to prioritise… but do you think that…', 'Yeah, I agree with that.', 'Of course that’s true, but…', 'I think (author) makes a really good point about…', 'I don’t really agree with the concept that…', 'I don’t really think this quote makes sense these days.'] },
              { label: 'Relating the quote to research', phrases: ['Especially in countries like (Kenya) that I researched.', 'And if you think about the articles we’ve been reading…', 'Well, those are really big problems in (the UK). My article explained that…', 'I think that has been an issue in (the Netherlands) too.', 'This reminds me of something I read in…', 'This quote conflicts with the research I did into…', 'I think this quote relates to the article I read about…'] }
            ]},
            { type: 'teacher', ref: 'w4d3-t1' }
          ]
        },
        {
          id: 'o2', short: 'Evaluating options', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 3: Activity 1 Evaluating different options',
          goal: 'Use comparatives, superlatives and quantifiers to compare, contrast and prioritise options.',
          blocks: [
            { type: 'key', title: 'The two parts of tomorrow’s discussion', compare: [
              { label: 'Part 1 · Discussion question', text: 'Discuss your response to a quote from one of the readings and include examples from your research. (You just practised this!)' },
              { label: 'Part 2 · Negotiation question', text: 'A problem or question with three possible answers. Argue for the best one — the focus is on discussing and negotiating, not necessarily reaching an agreement.' }
            ]},
            { type: 'cloze', id: 'o2c1', title: '1 · Complete the examples in use from the sample discussion', list: true, options: ['all', 'bigger', 'each', 'more', 'most', 'none', 'than', 'the'],
              text: '<i>Comparative:</i> (the environmental) consequences are a {{1}} worry {{2}} the (animal welfare) issues.\n<i>Comparative:</i> For me it’s much {{3}} serious {{4}} the other two options.\n<i>Superlative:</i> this is {{5}} {{6}} serious consequence\n<i>Quantifier:</i> (X, Y and Z) are {{7}} critical and interlinked aspects of…\n<i>Quantifier:</i> {{8}} these consequences are serious, but it seems that {{9}} of these…\n<i>Quantifier:</i> {{10}} factor affects the others.\n<i>Quantifier:</i> They are {{11}} really significant, but (I would still go with)…',
              answers: ['bigger', 'than', 'more', 'than', 'the', 'most', 'all', 'all', 'none', 'each', 'all'] },
            { type: 'key', title: 'Quantifiers', compare: [
              { label: 'all', text: 'Everyone/everything in a group (3 or more). With plural countable and uncountable nouns.', eg: 'All the cookies were eaten. · All the sugar was used in the cookies.' },
              { label: 'each', text: 'A group (2 or more) one by one — individual attention or detail. With singular countable nouns.', eg: 'Each cookie has a different flavour.' },
              { label: 'both', text: 'Two people or things. With plural countable nouns (sometimes uncountable).', eg: 'Both the black and white cookies were delicious. · Both sugar and chocolate are unhealthy.' },
              { label: 'none', text: 'Not any of a group (3 or more). With plural countable and uncountable nouns.', eg: 'None of my 5 sisters likes cookies. · None of the sugar was wasted.' },
              { label: 'neither', text: 'Not the one and not the other of two. With singular countable nouns.', eg: 'Neither of my parents likes cookies.' },
              { label: 'either', text: 'A choice between 2 possibilities, or with a negative. With singular countable nouns.', eg: 'You can have either the black or the white cookie. · I didn’t eat either of the cookies.' }
            ]},
            { type: 'cloze', id: 'o2c2', title: '3 · Choose the correct word to complete the phrases (a–i)', list: true, options: [['option', 'options'], ['good', 'well'], ['worse', 'bad'], ['are', 'is'], ['is', 'are'], ['much', 'many'], ['is', 'are'], ['choice', 'choices'], ['have', 'has']],
              text: 'I think that either of the first two {{1}} would be effective.\nI don’t think the second option would work as {{2}} in rural areas…\nOption C would be {{3}} for the economy than the others.\nBoth Option A and Option B {{4}} possible long-term solutions.\nNeither of the first 2 options {{5}} as important as Option C.\nOption B would be {{6}} more expensive.\nAll 3 {{7}} good choices, but ultimately I think the best choice would be…\nNone of these {{8}} would be very popular.\nEach option {{9}} its benefits, but for me the clear choice is…',
              answers: ['options', 'well', 'worse', 'are', 'is', 'much', 'are', 'choices', 'has'] },
            { type: 'sort', id: 'o2s', title: '4 · Which phrases (a–i) are used for…?', buckets: [
              { label: 'Comparing options', text: 'similarities' }, { label: 'Contrasting options', text: 'differences' }, { label: 'Prioritising options' }
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
              { who: 'class', text: 'Your teacher gives a category. Brainstorm <b>three options</b> together (e.g. <i>delicious fruit</i>: mango, strawberries, apples).' },
              { who: 'pair', text: 'Compare, contrast and prioritise the options for 1–3 minutes. Then take the next category.' }
            ]},
            { type: 'cards', title: 'Categories', items: [
              { text: 'Delicious fruit <small>(or ice-cream flavours)</small>' }, { text: 'Good fast-food chains' }, { text: 'Relaxing / beautiful / exciting holiday destinations' },
              { text: 'Talented musicians, singers or celebrities' }, { text: 'Bad excuses for being late' }, { text: 'Your choice!' }
            ]},
            { type: 'language', title: 'Negotiation language: evaluating options', groups: [
              { label: 'Comparing (similarities)', phrases: ['(X, Y and Z) are all critical and interlinked aspects of…', 'All these (consequences) are (serious), but it seems that none of these…', 'Each factor affects the others.', 'I think that either of the first two options would be effective.', 'Both Option A and Option B are possible long-term solutions.', 'None of these choices would be very popular.'] },
              { label: 'Contrasting (differences)', phrases: ['(The environmental) consequences are a bigger worry than the (animal welfare) issues.', 'I don’t think the second option would work as well in rural areas…', 'Option C would be worse for the economy than the others.', 'Option B would be much more expensive.'] },
              { label: 'Prioritising', phrases: ['This is the most (serious consequence).', 'For me it’s much more (serious) than the other two options.', 'They are all really significant, but I would still go with…', 'Neither of the first 2 options is as important as Option C.', 'All 3 are good choices, but ultimately, I think the best choice would be…', 'Each option has its benefits, but for me the clear choice is…'] }
            ]},
            { type: 'teacher', ref: 'w4d3-t2' }
          ]
        },
        {
          id: 'o3', short: 'Speculating', minutes: 15, grouping: 'Pairs',
          title: 'Negotiation language 3: Activity 2 Speculating (considering implications of different options)',
          goal: 'Use if-clauses and other phrases to speculate about the consequences of options.',
          blocks: [
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
              { q: '1b · Which sentence has a <b>different structure</b> to the others?', options: ['1–B', '2–D', '4–E', '5–A'], answer: '4–E', why: 'The others are all conditional sentences (if-clauses). 1–B is a 2nd conditional (hypothetical); 2–D, 3–C and 5–A are zero or 1st conditionals for real possibilities.' }
            ]},
            { type: 'cloze', id: 'o3c', title: '3 · Unmix the letters in CAPITALS to complete the phrases', list: true, options: [['unless', 'until', 'useless'], ['Even', 'Never', 'Eleven'], ['case', 'ease', 'cause'], ['provided', 'proved', 'divided'], ['Suppose', 'Oppose', 'Purpose']],
              text: 'The problem is just going to keep getting worse <b>SNEULS</b> → {{1}} we tackle the health problems.\n<b>NEEV</b> → {{2}} if we address ethical concerns, the environmental issues will still remain.\nIn <b>EASC</b> → {{3}} Option B is an unpopular suggestion, the government should offer financial incentives.\nI think that Option C would work the best, <b>DDRPOIVE</b> → {{4}} that the government will enforce these changes.\n<b>OPSPSUE</b> → {{5}} we choose Option A, what will that mean for the economy?',
              answers: ['unless', 'Even', 'case', 'provided', 'Suppose'] },
            { type: 'key', title: '4 · Discuss: do you agree with this extract from a sample discussion?', points: ['“If we all shifted towards a largely plant-based diet, we’d minimise animal rights violations as well as the negative impacts on the environment.”', 'Use <b>if-clauses</b> and other phrases for speculating while you discuss.'] },
            { type: 'language', title: 'Speculating (considering implications of different options)', tabs: false, groups: [
              { label: 'From the recording', phrases: ['If they had to (verb), then it would be really bad for…', 'If we continue like this, we’ll have no (X) nor (Y).', 'If we don’t prioritize (X), we can’t maintain (Y).', 'Without (X), there won’t be any (Y).', 'If people are (adjective), how can they…?'] },
              { label: 'Other phrases', phrases: ['The problem is just going to keep getting worse unless we tackle the (health) problems.', 'Even if we address (ethical) concerns, the environmental issues will still remain.', 'In case Option B is an unpopular suggestion, the government should…', 'I think that Option C would work the best, provided that…', 'Suppose we choose Option A, what will that mean for (the economy)?'] }
            ]},
            { type: 'teacher', ref: 'w4d3-t3' }
          ]
        },
        {
          id: 'o4', short: 'Discussion practice', minutes: 15, grouping: 'Groups of 3–4',
          title: 'Discussion Practice',
          goal: 'Choose the best option with your group — then negotiate with a group that chose differently.',
          blocks: [
            { type: 'key', title: 'The question', points: ['What’s the best way for students to practise their discussion skills outside the classroom?'] },
            { type: 'cards', title: 'Your teacher tells you which set of options your group discusses', pick: 'o4-set', items: [
              { label: 'Options 1', text: 'a) Joining a book club<br>b) Joining a sports club<br>c) Using social media' },
              { label: 'Options 2', text: 'a) Dating<br>b) Joining a study group<br>c) Volunteering for a community organisation' },
              { label: 'Options 3', text: 'a) Going to bars/nightclubs<br>b) Getting a job<br>c) Going to language exchange meet-ups' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: '<b>Part 1 · 4–5 min.</b> Discuss and <b>agree</b> on one option. Focus on: giving opinions · showing surprise, agreeing, counterargument · building on others’ contributions · evaluating different options.' },
              { who: 'group', text: '<b>Part 2 · 4–5 min.</b> Change groups. Meet people who chose from a different set. Tell them your choice and try to convince them it is the best. Focus on: giving opinions · strongly asserting your position · counterargument · evaluation and flexibility.' },
              { who: 'group', text: 'Be <b>flexible</b>: if the others make good arguments, you can modify your choice.' }
            ]},
            { type: 'checklist', id: 'o4k', title: 'Skills I used', items: [
              'Managing the discussion (turn-taking, keeping it moving)',
              'Clarification',
              'Giving opinions',
              'Building on others’ contributions',
              'Strongly asserting my position',
              'Showing surprise / agreeing / counterargument',
              'Evaluating others’ contributions and showing flexibility',
              'Evaluating different options (comparing, contrasting, prioritising)'
            ]},
            { type: 'teacher', ref: 'w4d3-t4' }
          ]
        },
        {
          id: 'o5', short: 'Action plan', minutes: 5, grouping: 'Alone',
          title: 'Self-regulation and monitoring (groupwork): Action plan for further improvement',
          goal: 'Review your action plan from the first discussion so you can use it tomorrow.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open the self-reflection you completed after your <b>first</b> Research Summary Discussion (Weeks 1–2).' },
              { who: 'alone', text: 'Read your Action plan for further improvement in the final section, <b>Participating in the Discussion</b>. Keep it in mind for tomorrow.' }
            ]},
            { type: 'fields', fields: [
              { id: 'o5-1', label: 'Which elements of the discussion did you excel in last time?', rows: 2 },
              { id: 'o5-2', label: 'In which areas did you feel less confident? What will you do tomorrow?', rows: 3 }
            ]},
            { type: 'key', tone: 'warn', title: 'Reminder', points: ['Tomorrow, bring your <b>laptop or tablet</b> and your <b>headphones</b>. You need them to complete the task.'] },
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
      outcome: 'Support an opinion with evidence from the readings, argue the opposite view, and use language that shows flexibility in a group discussion.',
      activities: [
        {
          id: 'f1', short: 'Strong opinions', minutes: 15, grouping: 'Pairs',
          title: 'Warmer',
          goal: 'Write a strong opinion about food waste, support it — then argue the opposite.',
          blocks: [
            { type: 'cards', title: 'Suggestions for strong opinions', items: [
              { text: 'Food waste is a serious issue that needs to be addressed immediately.' },
              { text: 'Food waste is more of a problem in wealthy countries than in poorer ones.' },
              { text: 'Consumers are the biggest cause of food waste, and they need to change their habits.' },
              { text: 'Governments should punish supermarkets and restaurants that waste large amounts of food.' }
            ]},
            { type: 'fields', fields: [
              { id: 'f1-1', label: 'My strong opinion about food waste', placeholder: 'Food waste is…', rows: 2 },
              { id: 'f1-2', label: 'Reasons and evidence from the readings (5 minutes)', placeholder: 'Gunders (2024) says… Castro et al. (2023)…', rows: 3 }
            ]},
            { type: 'sources', ids: ['gunders', 'castro', 'huang'] },
            { type: 'steps', items: [
              { who: 'pair', text: 'Share your opinion with your partner. Use reasons and evidence from the readings.' },
              { who: 'pair', text: 'Now choose one opinion (yours or your partner’s) and argue for the <b>opposite</b> view. Try to use ideas or evidence from the readings.' }
            ]},
            { type: 'talk', prompts: ['Has the opposite view made you reconsider your original idea — or add new ideas to it?'] },
            { type: 'teacher', ref: 'w4d3-t6' }
          ],
          answers: { title: 'Suggested reasons', items: [
            ['Serious issue', 'Food waste contributes to climate change · wasting food wastes all the resources used to produce it · millions of people are food insecure — this waste is ethically unacceptable.'],
            ['Wealthy countries', 'People often buy more than they need and throw food away · supermarkets reject misshapen food · in low-income countries most food is lost in production or transport (poor infrastructure), not by consumers.'],
            ['Consumers', 'Many people don’t plan meals, overcook or forget to store food properly · confusion around labels (“use by” vs “best before”) leads to disposal.'],
            ['Punish businesses', 'Supermarkets throw away unsold edible food to make room for fresh stock · restaurants overproduce or discard food instead of donating it · regulation can pressure businesses to find alternatives to dumping.']
          ]}
        },
        {
          id: 'f2', short: 'Useful language', minutes: 10, grouping: 'Pairs',
          title: 'Useful language',
          goal: 'Learn phrases that show flexibility — and check which ones you used.',
          blocks: [
            { type: 'language', title: 'Phrases for showing flexibility in discussion', groups: [
              { label: 'Introducing alternatives', phrases: ['Alternatively…', 'Another way to look at it is…', 'From a different perspective…'] },
              { label: 'Balancing opinions', phrases: ['While it’s true that…, it’s also worth considering…', 'I see your point, but at the same time…', 'Although I agree with…, I also think…'] },
              { label: 'Openness to change', phrases: ['I’m open to different viewpoints.', 'I used to think that…, but now I see it differently.', 'My opinion has evolved as I learned more about…'] },
              { label: 'Questioning and exploring', phrases: ['What if we look at it this way…?', 'Could it be possible that…?', 'How might we consider…?'] },
              { label: 'Summarising perspectives', phrases: ['In summary, both sides have valid points…', 'Overall, it seems there are several angles to this issue…'] }
            ]},
            { type: 'talk', prompts: ['Did you use some of these when arguing for the opposite opinion? Which ones?', 'Try again: say one sentence from each group about your opinion from the warmer.'] },
            { type: 'key', title: 'Why flexibility matters', points: [
              'At university you must be open to new ideas and evaluate diverse viewpoints in your studies, research and group work.',
              'It is crucial for your Research Summary Discussion — and in future assignments you will assess and integrate multiple perspectives.',
              'Flexibility also helps effective teamwork and problem-solving.'
            ]},
            { type: 'teacher', ref: 'w4d3-t7' }
          ]
        },
        {
          id: 'f3', short: 'Town meeting', minutes: 30, grouping: 'Groups of 6',
          title: 'Group discussion',
          goal: 'Role-play a town meeting and try to agree whether Kooringal should adopt a food waste initiative.',
          blocks: [
            { type: 'model', title: 'Scenario: Tackling Food Waste in Kooringal', text: 'Kooringal, a historic town of 13,500 residents known for its beautiful surroundings and vibrant tourism, faces a serious issue with food waste. Local restaurants, supermarkets, and households are discarding large amounts of edible food while some community members struggle with food insecurity. In response, the local government has proposed a comprehensive food waste reduction initiative that includes <b>food rescue programs, community composting, financial incentives for businesses, public awareness campaigns, and job creation in sustainable sectors</b>. A town meeting is scheduled tonight to debate whether to adopt the initiative.' },
            { type: 'cards', title: 'Choose your role (your teacher may give you one)', pick: 'f3-role', items: [
              { label: '1 · Local Restaurant Owner', icon: 'briefcase', text: 'You own a popular restaurant. Your business generates surplus food. You have <b>mixed feelings</b>: you see benefits like cost-saving and a better image, but you worry about extra rules and disruptions to your work.<br><small>Ideas: cost-savings · brand image · operational changes · regulatory burden · competitive impact</small>' },
              { label: '2 · Local Government Officer', icon: 'flag', text: 'You work for the local government. You are <b>in favour</b>: the initiative will improve public health, help the environment and boost the local economy. There might be challenges, but the benefits are worth it.<br><small>Ideas: public health · environmental benefits · economic growth · job creation · implementation challenges</small>' },
              { label: '3 · Chairperson of the Community Council', icon: 'users', text: 'You chair the meeting. Make sure everyone speaks and listens. You <b>don’t have a strong opinion yet</b> — you want to hear all the ideas before deciding.<br><small>Ideas: mediation · balance · compromise · inclusivity · decision criteria</small>' },
              { label: '4 · Environmentalist (Keep Kooringal Green)', icon: 'sprout', text: 'You represent the local environmental group. You care about nature and are <b>in favour</b>: the initiative will reduce pollution, help with composting and protect the environment.<br><small>Ideas: emissions reduction · composting · wildlife protection · public education · sustainability model</small>' },
              { label: '5 · Local Resident', icon: 'home', text: 'You are a long-term resident. You are <b>against</b> the initiative: you worry it might cost too much, cause problems for local families, or not work as planned.<br><small>Ideas: economic burden · bureaucracy · implementation risks · community disruption · alternative solutions</small>' },
              { label: '6 · Local Shop Owner', icon: 'briefcase', text: 'You own a small shop. You are <b>against</b> the initiative: extra rules and costs could hurt local businesses, including yours.<br><small>Ideas: business disruption · extra costs · regulatory challenges · impact on local trade · feasibility issues</small>' }
            ]},
            { type: 'fields', title: 'Prepare your role', fields: [
              { id: 'f3-1', label: 'My arguments', placeholder: 'As a local shop owner, I’m worried that…', rows: 3 },
              { id: 'f3-2', label: 'Questions I want to ask the others', placeholder: 'Who will pay for…? What if…?', rows: 2 }
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Read your role carefully and check you understand the situation. Prepare your arguments and questions.' },
              { who: 'group', text: 'The <b>chairperson</b> opens the meeting and gives everyone a turn.' },
              { who: 'group', text: 'Discuss the initiative and work towards an agreement by the end: <b>should Kooringal implement it?</b> Use the flexibility phrases.' }
            ]},
            { type: 'choose', id: 'f3c', title: 'Our town’s decision', options: ['Adopt the whole initiative', 'Adopt part of it (a compromise)', 'Don’t adopt it', 'No agreement'] },
            { type: 'teacher', ref: 'w4d3-t8' }
          ]
        },
        {
          id: 'f4', short: 'Reflection', minutes: 5, grouping: 'Groups',
          title: 'Reflection',
          goal: 'Think about how flexible you were — and how flexibility helps you at university.',
          blocks: [
            { type: 'talk', prompts: [
              'Have you changed your opinion in the last activity?',
              'How easy or difficult was it to reconsider your opinion?',
              'How does flexibility help in academic discussions and university studies?',
              'What strategies from today’s discussion can help you in future group work?'
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
      outcome: 'Understand how modality is used in persuasive writing to express certainty, and select and use words and phrases to show your stance.',
      activities: [
        {
          id: 's1', short: 'Modality warmer', minutes: 15, grouping: 'Pairs',
          title: 'Warmer',
          goal: 'Put nine sentences in order from least certain to most certain.',
          blocks: [
            { type: 'tip', text: 'Look at the words in <b>bold</b>. How confident is the writer about each idea?' },
            { type: 'order', id: 's1o', title: 'From least certain to most certain', ends: ['Least certain', 'Most certain'], items: [
              '<b>Perhaps</b> if restaurants offered smaller portion sizes, less food would be thrown away.',
              'Packaging redesigns that allow consumers to purchase variable quantities <b>somewhat</b> address the issue of food waste.',
              'Composting initiatives <b>occasionally</b> face challenges in community adoption and participation.',
              'Educational programs on food sustainability <b>should</b> instil early awareness and habits that reduce food waste.',
              'Food waste education campaigns <b>often</b> lead to a change in consumer behaviour, as individuals become more aware of their impact.',
              '<b>It is possible</b> to achieve a dramatic reduction in food waste with the concerted effort of individuals, businesses, and governments working together.',
              '<b>It is evident</b> that many of the solutions to food waste are economical and environmentally beneficial.',
              '<b>It is highly likely</b> that enhancing consumer awareness through targeted educational campaigns will lead to a significant reduction in household food waste.',
              '<b>Unquestionably</b>, implementing stricter regulations on sell-by dates and food labelling will give consumers clearer guidelines.'
            ], why: 'What matters most is the level: sentences 1–3 are <b>low</b>, 4–6 <b>medium</b> and 7–9 <b>high</b> modality. Inside each level, a different order can also be fine — explain your choice.' },
            { type: 'teacher', ref: 'w4d3-t10' }
          ],
          answers: { items: [
            ['Low, medium and high modality', '<img src="assets/week4/modality-ladder.svg" alt="A modality ladder: low modality (perhaps, somewhat, occasionally), medium modality (should, often, it is possible), high modality (it is evident, it is highly likely, unquestionably).">'],
            ['Why it matters', 'Modality shows how strongly the writer feels, or how confident they are, about the argument they present.']
          ]}
        },
        {
          id: 's2', short: 'Taking a stance', minutes: 10, grouping: 'Pairs',
          title: 'Taking a stance in persuasive writing',
          goal: 'Place two thesis statements on an agree–disagree line and find the language that shows the stance.',
          blocks: [
            { type: 'key', title: 'Position and stance', points: [
              'Your opinion, supported by evidence, is your <b>position</b>. When you take a position in writing or speaking, this is your <b>stance</b>.',
              'Stance is most often found in <b>thesis statements, topic sentences, evaluations of evidence and concluding sentences</b>. Remind the reader of your position at various points.',
              'Effective stance usually <b>acknowledges both sides</b>, while clearly showing which side the writer supports most.'
            ]},
            { type: 'quiz', id: 's2q1', items: [
              { q: '1. What is the purpose of a persuasive text?', options: ['To convince the reader that a certain stance is better, or to change their opinion', 'To describe a topic without an opinion', 'To tell a personal story'], answer: 'To convince the reader that a certain stance is better, or to change their opinion', why: 'The reader should adopt the proposed viewpoint.' }
            ]},
            { type: 'key', title: 'The question', points: ['<b>Upcycled food is a viable solution to the problem of food waste. Discuss.</b>'] },
            { type: 'scale', id: 's2s1', title: '2a · Thesis statement 1 — where would you put the X?', statement: 'Although it requires widespread consumer acceptance and regulatory support to fully realize its potential, upcycled food presents a practical and sustainable solution to the global issue of food waste.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Neutral', answer: 75, why: 'Positive overall: the writer gives a concession (“requires widespread consumer acceptance and regulatory support”), but evaluates upcycled food as <b>practical and sustainable</b>.' },
            { type: 'quiz', id: 's2q2', items: [
              { q: '2b. What language tells you the stance?', options: ['practical and sustainable', 'widespread consumer acceptance', 'the global issue'], answer: 'practical and sustainable', why: 'Two positive evaluative adjectives.' },
              { q: '2c. Which word could move the X to the far right (strongly agree)?', options: ['clearly', 'perhaps', 'sometimes'], answer: 'clearly', why: '…upcycled food <b>clearly</b> presents a practical and sustainable solution… An evaluative word strengthens the stance.' }
            ]},
            { type: 'scale', id: 's2s2', title: '3 · Thesis statement 2 — where would you put the X now? Why?', statement: 'Although some upcycling efforts have been successful, this essay strongly argues that it is not a feasible solution as it fails to address systemic production inefficiencies and consumer motivation.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Neutral', answer: 5, why: 'Far left. “<b>Strongly argues</b>” shows the strength of the opinion; the concession (“Although some… have been successful”) lets the writer weigh up both sides.' },
            { type: 'teacher', ref: 'w4d3-t11' }
          ]
        },
        {
          id: 's3', short: 'Evaluative language', minutes: 7, grouping: 'Pairs',
          title: 'Language Focus: Activity 1',
          goal: 'Sort evaluative words into positive, negative and neutral — and meet two kinds of stance.',
          blocks: [
            { type: 'key', title: 'Evaluative language', points: ['<b>Evaluative language</b> expresses a judgement about the quality, value or worth of something. It shows your stance — so choose it carefully.'] },
            { type: 'model', title: 'Examples', list: [
              'The writer’s argument is <b>convincing</b> and <b>well-supported</b>.',
              'This solution is <b>innovative</b> and <b>highly effective</b>.',
              'The proposal is <b>flawed</b> and <b>short-sighted</b>.',
              'The results are <b>adequate</b>, meeting the basic requirements.',
              'Her performance was <b>satisfactory</b>, although <b>not exceptional</b>.'
            ]},
            { type: 'sort', id: 's3s', title: 'Positive, negative or neutral evaluation?', buckets: [
              { label: 'Positive' }, { label: 'Negative' }, { label: 'Neutral' }
            ], items: [
              { text: 'convincing', answer: 0 }, { text: 'well-supported', answer: 0 }, { text: 'innovative', answer: 0 }, { text: 'highly effective', answer: 0 },
              { text: 'flawed', answer: 1 }, { text: 'short-sighted', answer: 1 },
              { text: 'adequate', answer: 2 }, { text: 'satisfactory', answer: 2 }, { text: 'not exceptional', answer: 2 }
            ]},
            { type: 'figure', src: 'assets/week4/stance-tools.svg', alt: 'Two kinds of stance — thinking stance (how certain we are) and attitude stance (whether we think it is good or bad) — and five tools to show stance: evaluative vocabulary, modal language, hedging language, reporting verbs, signalling and attitude markers.', caption: 'Thinking stance, attitude stance — and five ways to show them', size: 'wide' },
            { type: 'key', title: 'Two main forms of stance in academic writing', compare: [
              { label: 'Thinking stance', text: 'How certain or confident are we? How much evidence do we have? How much do we believe what we — or other people — are saying?' },
              { label: 'Attitude stance', text: 'Do we think this is good or bad? What is our evaluation of what we are saying?' }
            ]},
            { type: 'teacher', ref: 'w4d3-t12' }
          ]
        },
        {
          id: 's4', short: 'Thinking or attitude?', minutes: 6, grouping: 'Pairs',
          title: 'Language Focus: Activity 2',
          goal: 'Decide whether each sentence from the input texts shows a thinking stance or an attitude stance.',
          blocks: [
            { type: 'grid', id: 's4g', title: 'Thinking stance (T) or attitude stance (A)? Look at the words in bold.', columns: ['Stance'], options: ['Thinking (T)', 'Attitude (A)'], rows: [
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
            { type: 'tip', text: 'You will come back to these 15 sentences in Activity 3, after you learn five ways to show stance.' },
            { type: 'teacher', ref: 'w4d3-t13' }
          ]
        },
        {
          id: 's5', short: 'Five ways 1–3', minutes: 12, grouping: 'Pairs',
          title: 'Language Focus: Five ways to show stance (1–3)',
          goal: 'Show stance and still sound objective: evaluative vocabulary, modal language and hedging.',
          blocks: [
            { type: 'key', title: 'Objective — but with a stance', points: ['In academic writing we need to be objective and impersonal. We can’t just say “I think using upcycled foods is great”, as we might in conversation. Here are five key ways to show stance and still sound objective.'] },
            { type: 'language', title: '1 · Evaluative vocabulary', tabs: false, groups: [
              { label: 'Evaluative adjectives', phrases: ['useful', 'successful', 'relevant', 'effective', 'strong', 'limited', 'crucial', 'inaccurate', 'convincing', 'well-supported', 'innovative', 'flawed', 'short-sighted', 'misguided', 'adequate', 'satisfactory', '(not) exceptional'] },
              { label: 'Evaluative adverbs', phrases: ['convincingly', 'successfully', 'effectively', 'strongly', 'questionably', 'highly', 'poorly', 'skilfully', 'accurately', 'appropriately'] }
            ]},
            { type: 'fields', fields: [
              { id: 's5-1', label: 'Look back at Activity 1. Can you add more evaluative words?', placeholder: 'significant, vital, troubling…', rows: 1 }
            ]},
            { type: 'language', title: '2 · Modal language (adjectives, adverbs, nouns, verbs and semi-modals like need to)', groups: [
              { label: 'Modal adjectives', phrases: ['certain', 'definite', 'probable', 'possible', 'likely'] },
              { label: 'Modal adverbs', phrases: ['certainly', 'definitely', 'apparently', 'possibly', 'probably', 'clearly', 'potentially', 'perhaps'] },
              { label: 'Modal nouns', phrases: ['probability', 'assumption', 'possibility', 'requirement', 'responsibility', 'likelihood'] },
              { label: 'Modal verbs', phrases: ['can', 'might', 'may', 'will', 'would', 'must', 'should', 'could'] }
            ]},
            { type: 'fields', fields: [
              { id: 's5-2', label: 'Look back at the warmer sentences. Which modal words can you add?', placeholder: 'evident, highly likely, unquestionably…', rows: 1 }
            ]},
            { type: 'sort', id: 's5s', single: true, title: '3 · Hedging language — add the headings', hint: '<b>Drag</b> each heading to its list of words.', buckets: [
              { label: 'few · many · some · the majority · much · a number of', letter: '1' },
              { label: 'sometimes · usually · seldom · frequently · generally · often · occasionally', letter: '2' },
              { label: 'appear (to) · tend (to) · seem (to)', letter: '3' }
            ], items: [
              { text: 'Adjectives of quantity', answer: 0 },
              { text: 'Adverbs of frequency', answer: 1 },
              { text: 'Introductory verbs', answer: 2 }
            ]},
            { type: 'model', title: 'Hedging with “that clauses”', list: [
              '<b>It might be the case that</b> global temperatures are rising more rapidly than predicted.',
              '<b>There is a possibility that</b> the medication could cause side effects.',
              '<b>It is likely that</b> the new policy will affect economic growth.',
              '<b>It would seem that</b> further research is required to fully understand the implications of this finding.'
            ]},
            { type: 'quiz', id: 's5q', items: [
              { q: 'Why is hedging language helpful when you show your stance?', options: ['It shows how certain your claims are, shows you consider the limits of your information, and protects you from criticism.', 'It makes your opinion invisible.', 'It makes every claim sound 100% certain.'], answer: 'It shows how certain your claims are, shows you consider the limits of your information, and protects you from criticism.', why: 'Hedging avoids overly strong or definite statements.' }
            ]},
            { type: 'teacher', ref: 'w4d3-t14' }
          ]
        },
        {
          id: 's6', short: 'Reporting verbs', minutes: 8, grouping: 'Pairs',
          title: 'Language Focus: Five ways to show stance (4) Reporting verbs',
          goal: 'Use reporting verbs to show your attitude to the sources you cite.',
          blocks: [
            { type: 'language', title: 'Reporting verbs that show stance', groups: [
              { label: 'Agreement or disagreement', phrases: ['confirms', 'supports', 'doubts', 'argues', 'refutes', 'questions'] },
              { label: 'Certainty or uncertainty', phrases: ['speculates', 'asserts', 'demonstrates', 'suggests'] },
              { label: 'Neutral or objective', phrases: ['maintains', 'recognises', 'observes', 'acknowledges', 'reports'] },
              { label: 'Importance or relevance', phrases: ['stress', 'insist', 'emphasise', 'highlight'] }
            ]},
            { type: 'sort', id: 's6s', title: 'Put the reporting verbs in bold into their categories', buckets: [
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
            { type: 'key', title: 'What each category tells the reader', compare: [
              { label: 'Agreement / disagreement', text: 'The writer agrees with the source or finds it reliable — or presents a contrasting view or challenges the source.' },
              { label: 'Certainty / uncertainty', text: 'The source makes a clear, confident statement — or there is some ambiguity or lack of evidence.' },
              { label: 'Neutral or objective', text: 'The writer presents information in a factual, unbiased way, without personal judgement.' },
              { label: 'Importance or relevance', text: 'The writer finds this information particularly significant or relevant to their argument.' }
            ]},
            { type: 'teacher', ref: 'w4d3-t15' }
          ]
        },
        {
          id: 's7', short: 'Markers + Activity 3', minutes: 9, grouping: 'Pairs',
          title: 'Language Focus: Five ways to show stance (5) Signalling and attitude markers + Activity 3',
          goal: 'Use signalling words and attitude markers carefully — then name the stance language in the 15 sentences.',
          blocks: [
            { type: 'language', title: '5 · Signalling and attitude markers', tabs: false, groups: [
              { label: 'Signalling language', phrases: ['Although', 'However', 'Comparatively', 'In contrast', 'Furthermore', 'Similarly'] },
              { label: 'Attitude markers', phrases: ['Importantly', 'Predictably', 'Significantly', 'Unfortunately', 'Surprisingly', 'Evidently', 'Unquestionably', 'Undoubtedly', 'Interestingly', 'Notably'] }
            ]},
            { type: 'key', tone: 'warn', title: 'Use attitude markers sparingly', points: ['Too many personal opinions or emotional responses can make writing seem less credible or too opinionated. Use attitude markers carefully to keep a balanced, objective tone.'] },
            { type: 'grid', id: 's7g', title: 'Activity 3 · Which of the five ways does the bold word in each sentence use?', columns: ['Type of stance language'], options: ['Evaluative vocabulary', 'Modal language', 'Hedging language', 'Reporting verb', 'Signalling / attitude marker'], rows: [
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
            { type: 'teacher', ref: 'w4d3-t16' }
          ],
          answers: { title: 'Activity 3 · more detail', items: [
            ['Attitude markers', '1 Interestingly · 11 undoubtedly'],
            ['Evaluative vocabulary', '2 significant (adjective) · 5 greatly (adverb) · 6 important (adjective) · 9 vital (adjective) · 10 highly unethical (adverb + adjective) · 12 troubling (adjective)'],
            ['Modal language', '4 could (modal verb) · 8 need to (semi-modal) · 13 potential (modal adjective) · 14 likelihood (modal noun)'],
            ['Hedging', '7 typically (adverb of frequency) · 15 tend to (introductory/tentative verb)'],
            ['Reporting verb', '3 highlights']
          ]}
        },
        {
          id: 's8', short: 'Sample 3.1 (optional)', minutes: 8, grouping: 'Pairs',
          title: 'Activity 4 (Optional)',
          goal: 'Find the language of stance in a body paragraph from IWA Sample 3.1.',
          blocks: [
            { type: 'passage', id: 's8p', title: 'IWA Sample 3.1 · body paragraph 2 — highlight the language of stance', text: '¹Addressing the problem of food waste through better management and distribution of resources is also important because it has the potential to directly alleviate hunger. ²Estimates from the FAO reveal that approximately 30% of all food produced worldwide is not consumed (Our Changing Climate, 2020). ³While this food wastage occurs at various points in the supply chain, a large amount of perfectly edible food is thrown away by consumers. ⁴Consumer preference for attractive produce and the tendency to over purchase and let food spoil are some of the behavioural patterns that have led to the unnecessary discarding of food (Tchonkouang et al., 2023; Our Changing Climate, 2020). ⁵However, with the adoption of more sustainable consumption habits and redistribution programs, a significant amount of food could be redirected from waste streams to improve overall food availability in underserved populations (Royer, 2024). ⁶This redistribution could be particularly impactful in developed countries where surplus food from restaurants, retail, and households could be channelled to food banks to provide immediate relief. ⁷In fact, if the food waste generated in Australia were cut by one third, the amount saved could adequately feed 921,000 people for a year (Tchonkouang et al., 2023), demonstrating the importance of food conservation as a means of combating hunger.' },
            { type: 'table', id: 's8t', title: 'Language of stance', columns: ['Sentence', 'Words', 'Type (evaluative · modal · hedging · reporting · signalling/attitude)'], fixed: ['1', '2', '3', '4', '5', '6', '7'] },
            { type: 'teacher', ref: 'w4d3-t17' }
          ],
          answers: { title: 'Suggested answers', items: [
            ['1', '<b>also important</b> — signalling + evaluative adjective · <b>potential</b> — noun (hedging) · <b>better</b>, <b>directly</b>'],
            ['2', '<b>approximately</b> — hedging'],
            ['3', '<b>While</b> — signalling · <b>perfectly edible</b> — adverb + adjective'],
            ['4', '<b>tendency</b> — noun (hedging) · <b>unnecessary</b> — adjective'],
            ['5', '<b>However</b> — signalling · <b>sustainable</b>, <b>significant</b> — adjectives · <b>could</b> — modal (hedging)'],
            ['6', '<b>could</b> — modal (hedging) + <b>particularly</b> (adverb) + <b>impactful</b> (adjective) · <b>could</b> — modal (hedging) · <b>immediate</b> — adjective'],
            ['7', '<b>In fact</b> — signalling · <b>adequately</b> — adverb · <b>demonstrating</b> + <b>importance</b> — verb + evaluative noun']
          ]}
        },
        {
          id: 's9', short: 'Language in use', minutes: 15, grouping: 'Groups',
          title: 'Language in use',
          goal: 'Use hedging, modality and evaluative language to discuss a statement — or evaluate an image.',
          blocks: [
            { type: 'cards', title: 'Option A · Discuss a statement — soften or strengthen your ideas', pick: 's9-pick', items: [
              { text: 'Technology is harmful to students’ learning experiences.' },
              { text: 'Countries should have a universal basic income.' },
              { text: 'Online learning is as effective as traditional classroom learning.' },
              { text: 'Governments should impose stricter regulations on social media platforms to combat misinformation.' }
            ]},
            { type: 'fields', fields: [
              { id: 's9-1', label: 'My stance in two sentences (use a modal, a hedge and an evaluative word)', placeholder: 'It is highly likely that… However, this approach is somewhat limited because…', rows: 3 }
            ]},
            { type: 'key', title: 'Option B · Evaluate an image', points: ['Your teacher shows an artwork or an advertising campaign (for example, a public health campaign about sun safety). What is the message? How effective is the image in conveying its message? Use evaluative language.'] },
            { type: 'fields', fields: [
              { id: 's9-2', label: 'My evaluation of the image', placeholder: 'The image conveys its message highly effectively because… / The message is somewhat unclear…', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w4d3-t18' }
          ]
        }
      ]
    },

    /* ───────────────────────── 9A Building rapport ───────────────────────── */
    {
      id: 'rapport', number: '04', code: '9A', minutes: 30,
      tone: 'amber', art: 'group',
      title: 'Building rapport',
      subtitle: 'Connect with your classmates',
      outcome: 'Build connections with classmates and help create a supportive, welcoming classroom.',
      activities: [
        {
          id: 'b1', short: 'Building rapport', minutes: 30, grouping: 'Whole class',
          title: 'Welcome to building rapport!',
          goal: 'Take part in your teacher’s activity and get to know your classmates better.',
          blocks: [
            { type: 'key', title: 'What are these sessions?', points: [
              'Short sessions to develop connections within our classroom and build a cohesive, supportive learning environment.',
              'All activities are collaborative and communicative — your teacher plans and guides each one.'
            ]},
            { type: 'steps', items: [
              { who: 'class', text: 'Follow your teacher’s lead and stay engaged.' },
              { who: 'group', text: 'Participate actively and contribute positively — help everyone feel welcome.' }
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
      goal: 'Write a thesis statement with a concession and a clear stance.',
      blocks: [
        { type: 'key', title: 'The question', points: ['Upcycled food is a viable solution to the problem of food waste. Discuss.'] },
        { type: 'fields', fields: [
          { id: 'x2-1', label: 'My thesis statement (Although…, …)', placeholder: 'Although…, upcycled food clearly…', rows: 3 },
          { id: 'x2-2', label: 'One sentence about Huang et al. (2024) with a reporting verb that shows stance', placeholder: 'Huang et al. (2024) demonstrate that…', rows: 2 }
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
    ['provided that', 'Only if.', 'Option C would work, provided that the government helps.'],
    ['flexibility', 'Being willing to change your opinion.', 'Flexibility is part of critical thinking.'],
    ['initiative', 'A new plan or programme to solve a problem.', 'The town proposed a food waste initiative.'],
    ['compromise', 'An agreement where each side gives up something.', 'We adopted part of the plan as a compromise.'],
    ['modality', 'Language that shows how certain or strong an idea is.', 'High modality: unquestionably.'],
    ['stance', 'The position or opinion a writer or speaker shows.', 'The thesis statement shows a clear stance.'],
    ['concession', 'Accepting a point from the other side.', 'Although some efforts have been successful, …'],
    ['viable', 'Able to work successfully.', 'Upcycled food is a viable solution.'],
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
