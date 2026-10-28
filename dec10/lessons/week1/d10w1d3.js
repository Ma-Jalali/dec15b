/* DEC10 · Week 1 Day 3 — paraphrasing, the Academic Success Toolkit (AST), feedback literacy, and (homework) AI use in DEC.
   Teacher's Book lessons 10A, 11A, 12A, 13A. The Teacher's Book examples, sentences, feedback samples and answer keys are kept;
   the activities around them are redesigned. The booklet's peer-feedback phrase list (AST 12C) is cut to four frames
   students will really use; the AI vocabulary list is cut to the useful words, with corrected definitions.
   Keep the id 'd10w1d3' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d3',
  week: 1, day: 3,
  title: 'Your words, your skills, your feedback',
  duration: 'About 4 hours + homework',
  question: 'How do you use other people’s ideas — and other people’s feedback — without losing your own voice?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question',
  journey: 'Learn to paraphrase step by step — from simple sentences to academic ones, meet the six skills of the Academic Success Toolkit, and learn to give and use feedback that actually helps.',
  image: 'dec10/assets/week1/hero-d10w1d3.svg',
  imageAlt: 'Illustration: an original sentence card turns into a new paraphrased card through four strategy gears, next to a ring of six coloured skills and a feedback card with a heart, a lightbulb and a star.',
  finish: { title: 'Day 4', text: 'Voices, video and research' },
  goalShort: 'your integrated writing and your Seminar Portfolio',

  sections: [
    /* ───────────────────────── 10A · Paraphrasing ─────────────────────────
       Redesigned as: a game (you already paraphrase) → the copycat case (what plagiarism is, on a sticky note) →
       many SIMPLE examples, students work out what changed → the five techniques as rules → controlled practice,
       one technique at a time, with easy sentences → judge good and bad paraphrases → combine techniques.
       Academic sentences come only at the end, as an optional challenge. The Teacher's Book video is kept. */
    {
      id: 'paraphrase', number: '01', code: '10A', minutes: 90,
      tone: 'clay', art: 'dec10/assets/week1/s-paraphrase.svg',
      title: 'Academic writing skills: Paraphrasing',
      subtitle: 'Same idea, your words',
      outcome: 'You know what plagiarism is, you can use five paraphrasing techniques on simple sentences, and you can combine them to write a good paraphrase.',
      activities: [
        {
          id: 'p1', short: 'Warm-up', minutes: 8, grouping: 'Pair',
          title: 'Say it another way',
          goal: 'A quick game: change the words, keep the meaning.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Spin a sentence. You have <b>45 seconds</b> to say it in <b>two different ways</b> — same meaning, different words.' },
              { who: 'pair', text: 'Your partner is the judge: <b>1 point</b> for each version with the same meaning. <b>+1 bonus</b> if you changed the order of the sentence too.' },
              { who: 'pair', text: 'Swap roles. Play three rounds each.' }
            ] },
            { type: 'spinner', id: 'p1-spin', title: 'Spin a sentence', text: 'Read it aloud. Then say it another way — twice!', reels: [
              { label: 'Sentence', start: 'Spin!', items: [
                'My phone died because I forgot to charge it.',
                'Sydney is more expensive than my hometown.',
                'The bus was late again this morning.',
                'My flatmate never washes the dishes.',
                'I watched three episodes instead of studying.',
                'It is too cold to go to the beach today.',
                'Coffee is the only reason I am awake.',
                'I cannot find a cheap room near the university.'
              ] }
            ] },
            { type: 'fields', fields: [{ id: 'p1-best', label: 'Your best version of one sentence', rows: 2, placeholder: 'Original: … → My version: …' }] },
            { type: 'key', title: 'You just paraphrased', points: [
              'Saying the same idea in different words is called <b>paraphrasing</b>.',
              'You do it every day. Today you learn to do it in <b>academic writing</b> — where it really matters.'
            ] }
          ]
        },
        {
          id: 'p2', short: 'Copycat', minutes: 10, grouping: 'Pair',
          title: 'The copycat case',
          goal: 'Find out what plagiarism is — and why paraphrasing protects you.',
          blocks: [
            { type: 'model', title: 'The source', text: '“Many businesses now measure their impact on people and the planet, not just their profit.” — from an article by Lee (2023)' },
            { type: 'sort', id: 'p2-cc', title: 'Four students used this sentence in their essays. Who is in trouble?', hint: 'Decide first. Then read the sticky note to check.', buckets: [
              { label: 'In trouble: plagiarism', letter: '✗' }, { label: 'OK', letter: '✓' }
            ], items: [
              { text: '<b>Mina:</b> Many companies now measure their impact on people and the planet, not just their profit.', answer: 0, why: 'She changed one word and gave no reference. These are Lee’s words and Lee’s idea.' },
              { text: '<b>Leo:</b> Many businesses now measure their impact on people and the planet, not just their profit (Lee, 2023).', answer: 0, why: 'A reference is good — but he copied every word without quotation marks.' },
              { text: '<b>Sara:</b> According to Lee (2023), companies today look beyond profit and also consider how they affect society and the environment.', answer: 1, why: 'Her own words, the same meaning, and a reference. This is a paraphrase.' },
              { text: '<b>Tom:</b> Lee (2023) notes that businesses now measure “their impact on people and the planet”.', answer: 1, why: 'A short quotation in quotation marks, with a reference. OK — but use quotations only sometimes.' }
            ] },
            { type: 'sticky', title: 'Plagiarism', text: '<p>Using someone else’s <b>words</b> or <b>ideas</b> as if they were yours.</p><p>✗ copying words without “quotation marks”<br>✗ using an idea without a reference<br>✗ changing only a few words (this is called <b>patchwriting</b>)</p><p>At university, plagiarism is serious: you can <b>fail the assessment</b>.</p>' },
            { type: 'sticky', title: 'So, why paraphrase?', color: 'green', tilt: 1.5, text: '<p>1 · To <b>avoid plagiarism</b>.<br>2 · To <b>show you understand</b> the idea.<br>3 · To make the idea <b>fit your own writing</b>.</p><p>Paraphrase = the same meaning + your words + a reference.</p>' }
          ]
        },
        {
          id: 'p3', short: 'Examples', minutes: 15, grouping: 'Pair',
          title: 'What changed?',
          goal: 'Look at ten simple paraphrases. Work out HOW each one was changed.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read each pair. The <mark>highlighted</mark> words show what is different.' },
              { who: 'pair', text: 'Before you open “What changed?”, say what the writer did. Give it a name in your own words.' },
              { who: 'pair', text: 'Count: how many <b>different</b> ways of changing a sentence can you find?' }
            ] },
            { type: 'pairs', title: 'Ten paraphrases', items: [
              { from: 'The [[test]] was [[very difficult]].', to: 'The [[exam]] was [[extremely hard]].', tag: 'Synonyms', note: 'words with the same meaning' },
              { from: 'The [[teacher]] checked [[our essays]].', to: '[[Our essays]] were checked [[by the teacher]].', tag: 'Active → passive', note: 'the object (our essays) becomes the subject' },
              { from: 'Prices [[increased quickly]] last year.', to: 'There was a [[quick increase]] in prices last year.', tag: 'Word forms', note: 'verb → noun (increase), adverb → adjective (quickly → quick)' },
              { from: '[[Because the bus was late]], I missed my class.', to: 'I missed my class [[because the bus was late]].', tag: 'Order of information', note: 'the reason moves to the end' },
              { from: 'It was raining, [[so]] we stayed at home.', to: 'It was raining; [[therefore,]] we stayed at home.', tag: 'Linking words', note: 'so → therefore' },
              { from: 'Many people [[use cars]] [[every day]].', to: 'Many people [[drive]] [[daily]].', tag: 'Synonyms', note: 'use cars → drive, every day → daily' },
              { from: '[[Farmers grow]] rice in this region.', to: 'Rice [[is grown by farmers]] in this region.', tag: 'Active → passive', note: 'grow → is grown' },
              { from: 'The city [[is growing]] fast.', to: 'The city’s [[growth]] is fast.', tag: 'Word forms', note: 'verb (grow) → noun (growth)' },
              { from: '[[In Sydney]], many students rent a room.', to: 'Many students rent a room [[in Sydney]].', tag: 'Order of information', note: 'the place moves to the end' },
              { from: 'The phone is cheap. [[However,]] it is slow.', to: '[[Although]] the phone is cheap, it is slow.', tag: 'Linking words', note: 'however → although (two sentences become one)' }
            ] },
            { type: 'talk', title: 'With your partner', prompts: ['How many different techniques did you find?', 'Which technique was the easiest to notice? Which was the hardest?'] }
          ]
        },
        {
          id: 'p3r', short: 'The rules', minutes: 5, grouping: 'Class',
          title: 'The five techniques',
          goal: 'Now name the techniques you found — and learn the one rule for each.',
          blocks: [
            { type: 'flip', title: 'Five ways to change a sentence', hint: 'Say the rule first, then turn the card.', items: [
              { front: '1 · Synonyms', back: 'Use a word with the same meaning: difficult → hard, many → a lot of. Keep the same level of formality.' },
              { front: '2 · Word forms', back: 'Change the word class: increase (verb) → an increase (noun), grow → growth, decide → decision.' },
              { front: '3 · Order of information', back: 'Move the reason, the time or the place: Because…, I… → I… because…' },
              { front: '4 · Active → passive', back: 'The object becomes the subject: X checked the essays → The essays were checked (by X). Use be + past participle.' },
              { front: '5 · Linking words', back: 'Change the linker — but keep the meaning: so → therefore, but → although, because → as / since.' }
            ] },
            { type: 'key', tone: 'warn', title: 'Two golden rules', points: [
              '<b>Keep the meaning.</b> A paraphrase with a different meaning is wrong, however good the English is.',
              '<b>Keep key terms.</b> Words like <i>climate change</i>, <i>shareholders</i> or <i>IPAT</i> stay the same.'
            ] }
          ]
        },
        {
          id: 'p4', short: 'Practise', minutes: 20, grouping: 'Alone → Pair',
          title: 'One technique at a time',
          goal: 'Practise each technique on easy sentences.',
          blocks: [
            { type: 'quiz', id: 'p4-q', title: 'Choose the correct paraphrase', items: [
              { q: '<b>Active → passive</b> · “Students write three essays.”', options: ['Three essays are written by students.', 'Three essays write students.', 'Students are written three essays.'], answer: 'Three essays are written by students.' },
              { q: '<b>Word forms</b> · “The number of tourists grew.”', options: ['There was grow in the number of tourists.', 'There was growth in the number of tourists.', 'The number of tourists was growthed.'], answer: 'There was growth in the number of tourists.' },
              { q: '<b>Synonyms</b> · “The company made a big profit.”', options: ['The company did a big profit.', 'The company made a big money.', 'The company made a large profit.'], answer: 'The company made a large profit.' },
              { q: '<b>Linking words</b> · “The flat was expensive, but we rented it.”', options: ['Because the flat was expensive, we rented it.', 'Although the flat was expensive, we rented it.', 'The flat was expensive, so we rented it.'], answer: 'Although the flat was expensive, we rented it.', why: 'The other two change the meaning: “because” and “so” say the price was the REASON we rented it.' },
              { q: '<b>Order of information</b> · “In the morning, the library is quiet.”', options: ['The library is quiet in the morning.', 'The morning is quiet in the library.', 'Quiet the library is in the morning.'], answer: 'The library is quiet in the morning.' }
            ] },
            { type: 'fields', fields: [
              { id: 'p4-w1', label: '1 · Active → passive: “People recycle millions of bottles every year.”', rows: 1, placeholder: 'Millions of bottles …' },
              { id: 'p4-w2', label: '2 · Word forms: “Unemployment rose sharply in 2020.”', rows: 1, placeholder: 'There was a …' },
              { id: 'p4-w3', label: '3 · Synonyms: “Cities produce a lot of waste.”', rows: 1 },
              { id: 'p4-w4', label: '4 · Linking words: “Electric cars are expensive. However, they are cheaper to run.”', rows: 1, placeholder: 'Although …' },
              { id: 'p4-w5', label: '5 · Order of information: “Because of the heat, many people stayed indoors.”', rows: 1 }
            ] },
            { type: 'toggle', title: 'Check: possible answers', hint: 'Open after you write all five', blocks: [
              { type: 'model', title: 'Possible answers', list: [
                'Millions of bottles are recycled every year.',
                'There was a sharp rise in unemployment in 2020.',
                'Urban areas generate large amounts of waste.',
                'Although electric cars are expensive, they are cheaper to run.',
                'Many people stayed indoors because of the heat.'
              ], note: 'Other answers can be correct too — check the meaning with your partner.' }
            ] }
          ]
        },
        {
          id: 'p5', short: 'Good or bad?', minutes: 10, grouping: 'Pair',
          title: 'Good paraphrase or bad paraphrase?',
          goal: 'Judge three paraphrases of the same sentence.',
          blocks: [
            { type: 'model', title: 'Three students paraphrased this sentence', before: '“Many young people in Australia live with their parents because rent is very expensive.”', rows: [
              ['A', 'Many young people in Australia live with their parents because rent is extremely expensive.'],
              ['B', 'Because renting is so costly, a large number of young Australians still live in their family home.'],
              ['C', 'Young Australians live with their parents because they do not want to pay rent.']
            ] },
            { type: 'quiz', id: 'p5-q', items: [
              { q: 'Which one is <b>patchwriting</b> (too close to the original)?', options: ['A', 'B', 'C'], answer: 'A', why: 'Only one word changed: very → extremely.' },
              { q: 'Which one <b>changes the meaning</b>?', options: ['A', 'B', 'C'], answer: 'C', why: 'The original says rent is too expensive, not that they do not want to pay.' },
              { q: 'Which one is a <b>good paraphrase</b>? Which techniques did the writer use?', options: ['B · synonyms + word forms + order of information', 'A · synonyms', 'C · linking words'], answer: 'B · synonyms + word forms + order of information', why: 'expensive → costly, rent → renting, the reason moved to the front.' }
            ] },
            { type: 'key', title: 'A good paraphrase', points: ['changes <b>enough</b> — usually two or more techniques', 'keeps the <b>meaning</b>', 'keeps the <b>key terms</b>', 'has a <b>reference</b>'] }
          ]
        },
        {
          id: 'p6', short: '4 steps', minutes: 7, grouping: 'Alone',
          title: 'How the experts do it',
          goal: 'Watch a short video and put the four steps in order.',
          blocks: [
            { type: 'listening', source: 'YouTube', title: 'Four steps to paraphrase effectively', videoId: 'jpE_DwnNc_s', start: 0, clip: 'short video', transcripts: [], mode: 'video' },
            { type: 'order', id: 'p3-order', title: 'Put the four steps in order', items: ['Read and understand the original sentence', 'Identify any key words or phrases', 'Create a new sentence', 'Compare your paraphrase to the original text'], ends: ['First', 'Last'] },
            { type: 'tip', text: 'Step 1 is the most important: <b>understand it first</b>. You cannot paraphrase what you do not understand.' }
          ]
        },
        {
          id: 'p7', short: 'Your turn', minutes: 15, grouping: 'Alone → Pair',
          title: 'Put the techniques together',
          goal: 'Use two or more techniques in each paraphrase. Watch the copy meter go down.',
          blocks: [
            { type: 'para', id: 'p7-a', title: 'Use at least TWO techniques', hint: 'The meter shows how many of the original’s key words you reused. Aim for the green zone — and keep the meaning.', items: [
              { text: 'The government built a new bridge because traffic was getting worse.', strategy: 'Try: passive + linking words', model: 'As traffic was becoming heavier, a new bridge was built by the government.' },
              { text: 'Many students find it difficult to save money in Sydney.', strategy: 'Try: word forms + synonyms', model: 'Saving money is a challenge for a lot of students in Sydney.' },
              { text: 'Online shopping has increased, so more packaging waste is produced.', strategy: 'Try: word forms + linking words', model: 'The rise in online shopping has led to more packaging waste.' },
              { text: 'Companies should measure their impact on people and the planet.', strategy: 'Try: passive + order', model: 'The impact of companies on people and the planet should be measured.' }
            ] },
            { type: 'para', id: 'p7-b', title: 'Challenge (optional) · two sentences from this week’s texts', hint: 'Only if you finish early. Break the sentence into pieces, find the key terms, then rebuild it.', items: [
              { text: 'At first, the IPAT equation highlighted that population growth has a big impact on the environment.', keep: ['IPAT'], model: 'The first highlight of the IPAT equation was that a growing population greatly impacts the environment.' },
              { text: 'While such companies have contributed to climate change, they also have the means to combat it.', keep: ['climate change'], model: 'Companies such as these are among the contributors to climate change, but they are also in a position to contribute to the solution.' }
            ] },
            { type: 'checklist', id: 'p6-check', title: 'Before you share: check your best paraphrase', meter: ['checked', 'A strong paraphrase!'], items: ['It has the same meaning as the original.', 'I used two or more techniques.', 'I kept the key terms.', 'It is formal (no “things”, “huge”, “bad”).', 'In an essay, I would add a reference.'] }
          ]
        }
      ]
    },
    /* ───────────────────────── 11A · Introducing the AST framework ───────────────────────── */
    {
      id: 'ast', number: '02', code: '11A', minutes: 60,
      tone: 'green', art: 'dec10/assets/week1/s-ast.svg',
      title: 'Introducing the AST framework',
      subtitle: 'Six skills for university life',
      outcome: 'You can identify the six elements of the Academic Success Toolkit, explain how they help you, and set your own goals for them.',
      activities: [
        {
          id: 'a1', short: 'What would you do?', minutes: 15, grouping: 'Alone → Pair',
          title: 'Warmer: have you ever been here?',
          goal: 'Think about six real university problems — and match each one with a skill.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the six situations. Make a quick note: what did you do (or what would you do)?' },
              { who: 'pair', text: 'Compare with a partner. Did you react in the same way?' },
              { who: 'pair', text: 'Then match each situation with the skill it needs.' }
            ] },
            { type: 'match', id: 'a1-m', title: 'Which skill does each situation need?', left: [
              'After submitting an assignment, you get feedback that is difficult to understand, like “needs improvement on analysis” with no explanation.',
              'You have multiple assignments due at the same time, so you need to manage your time and prioritise without getting overwhelmed.',
              'In a group assignment, one member is not contributing equally, causing tension and possibly affecting the group’s grade.',
              'You must write a research paper on an unfamiliar topic, using credible sources only — and you are unsure which sources to use.',
              'An essay is worth 50% of your final mark. You don’t want to fail, so you use ChatGPT to write it for you.',
              'Your readings present different points of view. You don’t know which is “right” and wish your teacher would tell you.'
            ], right: ['Feedback literacy', 'Self-regulation and monitoring', 'Group work skills', 'Research skills', 'Digital literacy and AI', 'Criticality'] }
          ]
        },
        {
          id: 'a2', short: 'Six skills', minutes: 15, grouping: 'Class → Groups',
          title: 'The Academic Success Toolkit (AST)',
          goal: 'Know the six skills and why they matter at university and at work.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/ast-wheel.svg', size: 'wide', alt: 'The Academic Success Toolkit: six skills in a ring — feedback literacy, self-regulation and monitoring, group work skills, research skills, digital literacy and AI, and criticality.', caption: 'The Academic Success Toolkit: designed by CET for DEC students.' },
            { type: 'flip', title: 'What does each skill mean for you?', hint: 'Guess, then turn the card.', items: [
              { front: 'Feedback literacy', back: 'Understanding feedback, judging your own work against the criteria, and acting on feedback.' },
              { front: 'Self-regulation and monitoring', back: 'Setting goals, planning your time, and checking your own progress.' },
              { front: 'Group work skills', back: 'Sharing work fairly, communicating clearly, and solving problems in a team.' },
              { front: 'Research skills', back: 'Finding credible sources and using them to support your ideas.' },
              { front: 'Digital literacy and AI', back: 'Using digital tools — including AI — effectively, honestly and critically.' },
              { front: 'Criticality', back: 'Questioning ideas, comparing points of view, and forming your own position.' }
            ] },
            { type: 'talk', title: 'Discuss in groups', prompts: ['How does each of these skills help you succeed at university — and prepare for your career?', 'Is there one skill that is more important than the others? Why?'] }
          ]
        },
        {
          id: 'a3', short: 'Case study', minutes: 20, grouping: 'Groups',
          title: 'Case studies: solve it with the AST',
          goal: 'Plan practical steps to deal with one situation.',
          blocks: [
            { type: 'spinner', id: 'a3-spin', title: 'Get your case', text: 'Spin to get one situation from the warmer. Plan how you would handle it, then present your plan to the class.', reels: [
              { label: 'Your case', start: 'Spin!', items: ['Confusing feedback', 'Three deadlines at once', 'A group member who does nothing', 'Which sources can I trust?', 'The ChatGPT essay', 'Which view is “right”?'] }
            ] },
            { type: 'fields', fields: [
              { id: 'a3-skill', label: 'The AST skill(s) we need', rows: 1 },
              { id: 'a3-steps', label: 'Three practical steps we would take', rows: 4, placeholder: '1. First, we would …\n2. Then …\n3. If that doesn’t work, …' }
            ] },
            { type: 'language', groups: [{ label: 'Presenting your plan', phrases: ['The first thing we would do is …', 'After that, …', 'If that doesn’t work, …'] }] }
          ]
        },
        {
          id: 'a4', short: 'My goals', minutes: 10, grouping: 'Alone',
          title: 'Self-assessment and goal setting',
          goal: 'Rate yourself honestly and choose one goal.',
          blocks: [
            { type: 'grid', id: 'a4-grid', title: 'How would you assess yourself?', columns: ['Me now'], options: ['I am very good at this', 'I need further learning and practice', 'I am currently struggling with this skill'], rows: [
              'I can use feedback effectively to improve my work',
              'I can set and maintain goals, tracking my progress consistently',
              'I can communicate clearly when conflict arises in group situations',
              'I can locate credible sources and assess their credibility',
              'I can use digital tools effectively and ethically (AI included)',
              'I can use arguments from sources to effectively support my arguments/ideas'
            ] },
            { type: 'fields', fields: [
              { id: 'a4-goal', label: 'My AST goal for the next five weeks', rows: 2, placeholder: 'By Week 5, I want to … To do this, I will …' }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 12A · Introduction to feedback literacy ───────────────────────── */
    {
      id: 'feedback', number: '03', code: '12A', minutes: 90,
      tone: 'teal', art: 'dec10/assets/week1/s-feedback.svg',
      title: 'AST: Introduction to Feedback Literacy',
      subtitle: 'Give feedback that helps — and use the feedback you get',
      outcome: 'You understand why feedback matters for your learning, and you have the knowledge and language to give effective peer feedback.',
      activities: [
        {
          id: 'b1', short: 'Symbols', minutes: 5, grouping: 'Pair',
          title: 'Warmer: what do these symbols mean?',
          goal: 'Guess what a heart, a lightbulb and a star have to do with feedback.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/feedback-literacy.svg', size: 'wide', alt: 'Feedback literacy in three parts: a heart for appreciating feedback (you value it), a lightbulb for making judgements (you understand it), and a star for taking action (you get it right next time).', caption: 'Feedback literacy: value it, understand it, use it.' },
            { type: 'match', id: 'b1-m', title: 'Match the symbol with what the student does', left: ['♥ Heart', '💡 Lightbulb', '★ Star'], right: ['The student values the feedback.', 'The student understands the feedback.', 'The student gets it right next time.'] }
          ]
        },
        {
          id: 'b2', short: 'Discuss', minutes: 10, grouping: 'Groups',
          title: 'Discussion: you and feedback',
          goal: 'Share your experiences — and write your own definition of effective feedback.',
          blocks: [
            { type: 'spinner', id: 'b2-spin', title: 'Spin a question', text: 'Each person spins and answers. Then everyone answers the last question together.', reels: [
              { label: 'Question', start: 'Spin!', items: [
                'What do you think is the purpose of feedback from your teachers?',
                'What experiences (positive or negative) have you had with receiving feedback on your academic work?',
                'Why do you think feedback is important in academic and professional settings?',
                'Can you think of a time when feedback helped you improve a piece of work or develop a skill?',
                'What challenges have you faced when giving or receiving feedback?',
                'How comfortable do you feel about giving feedback to your peers?',
                'What are the benefits and challenges of giving peer feedback — and of receiving it?',
                'What does a “good” piece of feedback look like to you?'
              ] }
            ] },
            { type: 'fields', fields: [
              { id: 'b2-def', label: 'Our definition: “Effective feedback should …”', rows: 2, placeholder: 'Effective feedback should …' }
            ] }
          ]
        },
        {
          id: 'b3', short: 'Feedback literacy', minutes: 10, grouping: 'Pair',
          title: 'What is feedback literacy?',
          goal: 'Explain the idea in your own words.',
          blocks: [
            { type: 'language', title: 'Explain the diagram to your partner', groups: [
              { label: 'Sentence frames', phrases: ['Feedback literacy is about …', 'Feedback literacy consists of three …', '“Appreciating feedback” refers to …', '“Making judgements” is all about …', '“Taking action” means that …'] }
            ] },
            { type: 'fields', fields: [{ id: 'b3-why', label: 'Why is feedback literacy important? Write your reasons.', rows: 3 }] }
          ],
          answers: { title: 'Possible answer', items: [['Why it matters', 'Feedback helps you improve the quality of your work. But to use it, you need feedback literacy: understanding feedback in relation to the assessment criteria; acting on it; giving classmates useful feedback; and critically comparing your work with exemplars and other people’s work.']] }
        },
        {
          id: 'b4', short: 'The rubric', minutes: 15, grouping: 'Seminar groups',
          title: 'Appreciating feedback starts with the rubric',
          goal: 'Understand the presentation criteria — and choose what to work on.',
          blocks: [
            { type: 'key', title: 'Start with the criteria', points: [
              'You will give and get peer feedback on your Research Summary presentations (Weeks 2, 3, 6) and your Seminar presentations (Weeks 3–6).',
              'All of it prepares you for the <b>Interactive Presentation</b> in Week 7. Open its rubric: <b>Assessments</b> (side panel) → Interactive Presentation.'
            ] },
            { type: 'talk', title: 'Read the Presentation rubric and discuss', prompts: [
              'How many criteria does the rubric address? Do you understand what they all refer to?',
              'In content development, what is the difference between “key points are effectively conveyed”, “key points are clear” and “key points are addressed”?',
              'What might be examples of visuals that are underdeveloped — and visuals that are presented effectively?',
              'What impact do mispronunciations have on an audience’s understanding, according to the rubric?',
              'What does “using language accurately and appropriately” mean?'
            ] },
            { type: 'fields', fields: [{ id: 'b4-goal', label: 'Goal setting: which criterion will I focus on first, and why?', rows: 2 }] }
          ]
        },
        {
          id: 'b5', short: 'Judge feedback', minutes: 15, grouping: 'Pair',
          title: 'What makes feedback effective?',
          goal: 'Use the criteria to judge real feedback comments.',
          blocks: [
            { type: 'checklist', id: 'b5-def', title: 'Effective feedback should … (tick the ones that were in YOUR definition)', items: ['directly address the task assessment criteria (rubric)', 'be specific, not general', 'be clear', 'be useful and actionable', 'be timely', 'advise how to improve something (feed forward)', 'be sensitive and encouraging', 'not be a criticism', 'use appropriate language'] },
            { type: 'grid', id: 'b5-grid', title: 'Real feedback from past DEC10 presentations: how effective is each comment?', columns: ['Specific?', 'Feeds forward?', 'Sensitive?'], options: ['Yes', 'Partly', 'No'], rows: [
              'You spoke well and engagingly and had good skills in engaging with the audience, and this was supported by good intonation and fluency.',
              'Your final section of the presentation was structured well, but more careful cohesion was needed overall.',
              'Your ideas were often relevant, and content demonstrated adequate critical understanding of the topic. However, try not to read directly from the notes.',
              'Some of the ideas that you explained weren’t necessarily relevant, but you had good skills in explaining them in an engaging way. In future, use graphs on PPTs rather than data, and avoid having too much info on slides.',
              'Your volume was good, but intonation a bit monotonous making your speech unnatural. Work on sentence stress. Don’t read from notes… look up and make eye contact. Build a connection with your audience.',
              'The area that needed work was the slides. The visuals needed editing to make them look more professional and neater. Also, ideas from sources on the slides should always include a reference.'
            ] },
            { type: 'toggle', title: 'A model analysis of comment 1', hint: 'Open after you try', blocks: [
              { type: 'model', title: 'Comment 1', rows: [
                ['Addresses the rubric', 'Yes — engaging the audience, intonation and fluency are criteria.'],
                ['Specific', 'Not really — what makes it “good”?'],
                ['Clear', 'Mostly. Do you know what “engagingly” means?'],
                ['Useful / feed forward', 'No — nothing to improve.'],
                ['Sensitive and encouraging', 'Yes — it focuses on the positive.']
              ] }
            ] }
          ]
        },
        {
          id: 'b6', short: 'Use feedback', minutes: 15, grouping: 'Groups',
          title: 'From feedback to action',
          goal: 'Turn one piece of feedback into a plan — and a question for your teacher.',
          blocks: [
            { type: 'tabs', title: 'Imagine you got this feedback. Your group takes one criterion.', tabs: [
              { label: 'Content & argument', blocks: [{ type: 'model', title: 'Content Development and Argumentation', text: 'Your content was relevant and well developed, but you just needed to persuade your audience more about your ideas (i.e. your solution to the problem) through strong argumentation. EG say why your solution is an important and good one, or why a different solution won’t work, or what will happen without a solution. Remember also to use a range of functional language to clearly express your argument and try and persuade the audience; this language is a very effective and powerful tool!' }] },
              { label: 'Coherence & visuals', blocks: [{ type: 'model', title: 'Coherence, Engagement and Visual Coordination', text: 'Well done to convey some complex ideas during your presentation, although you needed to establish stronger cohesion between the different speakers because the overall structure and flow of ideas was sometimes fragmented. You can achieve stronger cohesion through more careful planning and frequent check-ins with each other. Make sure you map out your group’s entire presentation message/argument before you start preparing the presentation, and remember that cohesive devices (EG linking words) are vital in presenting a clear and logical flow of ideas. I’m sure you’ll do even better in your future presentations!' }] },
              { label: 'Pronunciation', blocks: [{ type: 'model', title: 'Pronunciation and Phonological Proficiency', text: 'You presented well-researched and relevant content, but it could have been more effectively communicated by using more stress, pausing and chunking to break up your flow of speech. Remember the class activities we have done to practise these important features. I suggest you spend a few minutes every day using CET speaking resources and also recording yourself. Consistent practice will make a big difference and help make you an effective communicator!' }] },
              { label: 'Grammar & vocabulary', blocks: [{ type: 'model', title: 'Grammatical and Lexical Proficiency', text: 'Your accurate sentence structures and grammar such as verb tenses were impressive. However, we detected several instances of incorrect word forms, mixing up adverbs-adjectives-nouns EG It has become scarcity* | healthy* problems | a significantly* challenge. These errors can be distracting for the audience, so please try to avoid them! Why don’t you record yourself speaking, and then listen back, or get your classmates to listen, to check you used correct word forms.' }] }
            ] },
            { type: 'fields', fields: [
              { id: 'b6-plan', label: 'Our plan: what will we do to improve this criterion?', rows: 3, placeholder: 'Next time we will …' },
              { id: 'b6-ask', label: 'One question we could ask our teacher about this feedback', rows: 2, placeholder: 'What do you mean by …? / Could you show us an example of …?' }
            ] }
          ],
          answers: { title: 'Examples (for the first comment)', items: [['A plan', 'Go back to my presentation and add why my solution is a good one — and what will happen without it.'], ['A question', 'What do you mean by “functional language”? Could you give an example?']] }
        },
        {
          id: 'b7', short: 'Emotions', minutes: 10, grouping: 'Groups',
          title: 'Managing affect: feedback is not an attack',
          goal: 'Stay calm and open when you get feedback.',
          blocks: [
            { type: 'scale', id: 'b7-scale', title: 'Be honest', statement: 'When I get negative feedback, I feel defensive.', ends: ['Never', 'Always'] },
            { type: 'talk', prompts: ['What is the difference between feedback and criticism? How can you tell one from the other?', 'How can we keep our “emotional balance” when giving or receiving feedback?', 'What can we do to overcome defensiveness?'] },
            { type: 'key', title: 'At university', points: ['Find the rubric for every assessment and make sure you understand it before you start.', 'If you don’t understand some feedback, ask: “What can I do to improve next time?”'] }
          ]
        },
        {
          id: 'b8', short: 'Say it well', minutes: 10, grouping: 'Pair',
          title: 'Language for giving peer feedback',
          goal: 'Learn four frames — and use them to fix bad feedback.',
          blocks: [
            { type: 'language', title: 'Four frames are enough', groups: [
              { label: 'Peer feedback', phrases: ['… was good. To make it even better, you could …', 'I suggest you …', 'Try … so (that) …', 'Remember to …'] }
            ] },
            { type: 'para', id: 'b8-fix', title: 'Fix the feedback', hint: 'Rewrite each weak comment so that it is specific, encouraging, and tells the speaker what to do next. Use a frame.', items: [
              { text: 'Your presentation was bad.', model: 'Your research was relevant. To make it even better, you could look up from your notes more often and make eye contact.' },
              { text: 'Good job!', model: 'Your examples were clear and engaging. Remember to cite the source on the slide, e.g. “(Smith, 2024)”.' },
              { text: 'Too fast.', model: 'I suggest you slow down and pause after each key point, so the audience has time to follow.' }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 13A · AST: AI use in DEC homework ───────────────────────── */
    {
      id: 'ai', number: '04', code: '13A', minutes: 60,
      tone: 'amber', art: 'dec10/assets/week1/s-ai.svg',
      title: 'AST: AI use in DEC homework',
      subtitle: 'When AI helps — and when it doesn’t',
      outcome: 'You can decide whether and how to use AI tools at CET and the University of Sydney, and you can acknowledge any AI use clearly.',
      activities: [
        {
          id: 'h1', short: 'AI words', minutes: 8, grouping: 'Homework',
          title: 'The words you need to talk about AI',
          goal: 'Know eight key words for working with AI.',
          blocks: [
            { type: 'match', id: 'h1-m', title: 'Match the word with its meaning', left: ['Gen AI (noun)', 'generate (verb)', 'input (noun)', 'output (noun)', 'prompt (noun)', 'modify (verb)', 'refine (verb)', 'requirement (noun)'],
              right: ['Generative artificial intelligence: AI that creates text, images, etc.', 'to produce', 'the information you put into the computer or AI tool', 'what the AI produces', 'the instructions you give the AI about what you want', 'to make small changes to something', 'to improve something by making small changes', 'a condition of the task: something you must do'] }
          ]
        },
        {
          id: 'h2', short: 'Uses', minutes: 8, grouping: 'Homework',
          title: 'Using AI to support your learning',
          goal: 'See what AI can do for your learning — and what you can do without it.',
          blocks: [
            { type: 'key', title: 'Students at CET are allowed to use AI tools to support their learning', points: ['AI can support your learning — but it should not replace it.'] },
            { type: 'cards', title: 'Ways to use AI in DEC10 (all fine!)', items: [
              { label: 'Vocabulary', text: 'A daily challenge: five new academic words.' }, { label: 'Lectures', text: 'Practise summarising recorded lectures.' }, { label: 'Speaking', text: 'Record your presentations and analyse them.' },
              { label: 'Grammar', text: 'Exercises tailored to your errors.' }, { label: 'Practice tests', text: 'Extra test-style questions.' }, { label: 'Feedback', text: 'Grammar and style checks on writing you wrote first.' }
            ] },
            { type: 'quiz', id: 'h2-q', items: [
              { q: 'True or false: you can do all of these activities WITHOUT AI.', options: ['True', 'False'], answer: 'True', why: 'Dictionaries, study groups, peer feedback, grammar books, practice tests on Canvas, a study log, the library … AI is one way, not the only way.' }
            ] }
          ]
        },
        {
          id: 'h3', short: 'The rules', minutes: 10, grouping: 'Homework',
          title: 'University of Sydney and CET guidelines',
          goal: 'Know when AI is allowed — and when it is not.',
          blocks: [
            { type: 'cards', items: [
              { label: 'Secure assessments', text: 'Supervised and in person. AI is <b>not allowed</b> (or controlled). <b>At CET, AI is never allowed in secure assessments</b> — e.g. your LRW tests.' },
              { label: 'Open assessments', text: 'Unsupervised. AI may be used where it helps learning, with your teacher’s guidance. You must <b>acknowledge</b> any AI use — and you may be asked to explain your work in your own words.' },
              { label: 'Learning activities', text: 'You may use AI for any learning activity. Never put another student’s work, someone’s private information or others’ intellectual property into an AI tool.' }
            ] },
            { type: 'sort', id: 'h3-sort', title: 'Helpful or unhelpful for learning?', buckets: [{ label: 'Helpful', letter: '✓' }, { label: 'Unhelpful', letter: '✗' }], items: [
              { text: 'Learn new ways to express your ideas — vocabulary, grammar, paraphrasing', answer: 0 },
              { text: 'Help generate or brainstorm ideas or arguments for written and spoken tasks', answer: 0 },
              { text: 'Help understand the main points in a text', answer: 0 },
              { text: 'Get feedback on a piece of your writing', answer: 0 },
              { text: 'Generate answers in a quiz where AI use is not allowed', answer: 1 },
              { text: 'Write an assignment answer that will be presented as the student’s own work', answer: 1 },
              { text: 'Translate a full response into English and present it as your own work without acknowledging AI', answer: 1 }
            ] }
          ]
        },
        {
          id: 'h4', short: 'Principles', minutes: 8, grouping: 'Homework',
          title: 'Appropriate use of AI',
          goal: 'Sort the good habits from the bad ones.',
          blocks: [
            { type: 'sort', id: 'h4-sort', title: 'General principles for using generative AI at university', buckets: [{ label: 'Do', letter: '✓' }, { label: 'Don’t', letter: '✗' }], items: [
              { text: 'Use generative AI without acknowledging it', answer: 1 },
              { text: 'Make sure my AI use follows the guidelines for the course, unit and assessment', answer: 0 },
              { text: 'Keep track of the ways I used AI throughout my assignment', answer: 0 },
              { text: 'Make sure my final work is my own — not copied and pasted from AI', answer: 0 },
              { text: 'Think critically about AI-generated information', answer: 0 },
              { text: 'Be careful of biases in the AI I use', answer: 0 },
              { text: 'Use AI to help with assessments without checking whether this is allowed', answer: 1 }
            ] }
          ]
        },
        {
          id: 'h5', short: 'Acknowledge', minutes: 10, grouping: 'Homework',
          title: 'Acknowledging AI',
          goal: 'Write a clear acknowledgement and an APA reference.',
          blocks: [
            { type: 'model', title: 'How to acknowledge AI use', rows: [
              ['Frame', 'I acknowledge the use of [AI tool] to [what you used it for].'],
              ['Example 1', 'I acknowledge the use of Cogniti to refine the academic language of my own writing.'],
              ['Example 2', 'I acknowledge the use of ChatGPT to edit vocabulary and grammar in the introduction and conclusion of my essay.'],
              ['More detail', 'I used the output to [activity]. Then I modified the output to [activity].'],
              ['No AI', 'I have not used any AI tools to prepare this assessment.'],
              ['APA reference', 'OpenAI. (2023). ChatGPT (Jan 9 version) [Large language model]. http://chat.openai.com/chat']
            ], note: 'At CET you must do BOTH: acknowledge your use AND give a full APA 7 reference to the tool. At university, check with your unit coordinator.' },
            { type: 'fields', fields: [{ id: 'h5-mine', label: 'Write an acknowledgement for something you could really use AI for in DEC10', rows: 2, placeholder: 'I acknowledge the use of … to …' }] }
          ]
        },
        {
          id: 'h6', short: 'Scenarios', minutes: 12, grouping: 'Homework',
          title: 'Test your knowledge: how can I use AI ethically?',
          goal: 'Decide what three students should think about.',
          blocks: [
            { type: 'sort', id: 'h6-s1', title: '<b>Maybel</b>’s unit allows AI. She asks ChatGPT for ideas, then asks it to write a full essay, and rephrases it in her own words. What should she consider?', buckets: [{ label: 'Should consider', letter: '✓' }, { label: 'Not a good reason', letter: '✗' }], items: [
              { text: 'Whether rephrasing AI-generated responses is permitted', answer: 0 },
              { text: 'Whether her AI use must be acknowledged', answer: 0 },
              { text: 'Whether her AI use helps her learn the course content', answer: 0 },
              { text: 'Whether she will do well in the next assessment if she relies on AI now', answer: 0 },
              { text: 'How detectable AI is in her work', answer: 1, why: 'Detection is not the point — acknowledging is.' },
              { text: 'How she can show her understanding if she doesn’t write the essay herself', answer: 0 },
              { text: 'Whether she should trust ChatGPT over her own skills', answer: 0 },
              { text: 'What her friends in the course have done', answer: 1, why: 'Her unit coordinator sets the rules — not her friends.' }
            ] },
            { type: 'quiz', id: 'h6-q', items: [
              { q: '<b>Vincent</b> has an in-class multiple-choice test. The unit coordinator hasn’t said anything about AI. What is the BEST first step?', options: ['Ask his friends what they are doing', 'Ask his unit coordinator to clarify the AI guidelines', 'Plan to use ChatGPT during the test'], answer: 'Ask his unit coordinator to clarify the AI guidelines', why: 'If the quiz is a secure assessment, AI will be controlled or prohibited. Using AI to make practice questions BEFORE the test may be fine — but check first.' },
              { q: '<b>Tiegan</b> uses ChatGPT in a class discussion to create counter-arguments to her group’s ideas. What should she consider?', options: ['Her group members’ views on AI', 'Her tutor’s views on using AI in class', 'Nothing — it is not allowed'], answer: 'Her tutor’s views on using AI in class', why: 'Unless told otherwise, AI use in class is fine if it helps learning — and the tutor is the person who guides that.' }
            ] }
          ]
        },
        {
          id: 'h7', short: 'For Friday', minutes: 4, grouping: 'Homework',
          title: 'Prepare for class',
          goal: 'Make notes you will use on Friday.',
          blocks: [
            { type: 'fields', fields: [
              { id: 'h7-usyd', label: 'My notes: the University of Sydney’s guidelines for using AI', rows: 3 },
              { id: 'h7-ethics', label: 'My notes: ethical use of AI in DEC', rows: 3 }
            ] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['paraphrase', 'to express an idea from a source in your own words, about the same length', 'Paraphrase the sentence and add a reference.'],
    ['plagiarism', 'using someone’s words or ideas without acknowledging them', 'Copying a sentence without quotation marks is plagiarism.'],
    ['patchwriting', 'changing only a few words of a source — still too close to the original', 'Swapping three words is patchwriting, not paraphrasing.'],
    ['feedback literacy', 'understanding, judging and acting on feedback', 'Feedback literacy helps you improve your next presentation.'],
    ['feed forward', 'feedback that tells you what to do next time', '“Next time, pause after each key point” feeds forward.'],
    ['rubric', 'the assessment criteria for a task', 'Read the rubric before you start.'],
    ['secure assessment', 'a supervised assessment where AI is not allowed (or is controlled)', 'The LRW test is a secure assessment.'],
    ['acknowledge', 'to say clearly that (and how) you used a source or a tool', 'You must acknowledge any use of AI.']
  ]
};
