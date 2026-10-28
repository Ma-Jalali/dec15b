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
          art: 'dec10/assets/week1/v/v-d10w1d3-p1.svg',
          title: 'Say it another way',
          goal: 'A quick game: change the words, keep the meaning.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: "Spin a sentence. You have <b>45 seconds</b> to say it in <b>two different ways</b> — same meaning, different words." },
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
            { type: 'do', n: 2, who: 'pair', text: "Your partner is the judge: <b>1 point</b> for each version with the same meaning, <b>+1</b> if you changed the order too. Swap roles — three rounds each. Then write your best version." },
            { type: 'fields', fields: [{ id: 'p1-best', label: 'Your best version of one sentence', rows: 2, placeholder: 'Original: … → My version: …' }] },
            { type: 'key', title: 'You just paraphrased', points: [
              'Saying the same idea in different words is called <b>paraphrasing</b>.',
              'You do it every day. Today you learn to do it in <b>academic writing</b> — where it really matters.'
            ] }
          ]
        },
        {
          id: 'p2', short: 'Copycat', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-p2.svg',
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
          art: 'dec10/assets/week1/v/v-d10w1d3-p3.svg',
          title: 'What changed?',
          goal: 'Look at ten simple paraphrases. Work out HOW each one was changed.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: "Read each pair. The <mark>highlighted</mark> words show what is different. Before you open “What changed?”, say what the writer did — give it a name in your own words." },
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
            { type: 'do', n: 2, who: 'pair', text: "Count: how many <b>different</b> ways of changing a sentence did you find?" },
            { type: 'talk', title: 'With your partner', prompts: ['How many different techniques did you find?', 'Which technique was the easiest to notice? Which was the hardest?'] }
          ]
        },
        {
          id: 'p3r', short: 'The rules', minutes: 5, grouping: 'Class',
          art: 'dec10/assets/week1/v/v-d10w1d3-p3r.svg',
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
          art: 'dec10/assets/week1/v/v-d10w1d3-p4.svg',
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
          art: 'dec10/assets/week1/v/v-d10w1d3-p5.svg',
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
          art: 'dec10/assets/week1/v/v-d10w1d3-p6.svg',
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
          art: 'dec10/assets/week1/v/v-d10w1d3-p7.svg',
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
    /* ───────────────────────── 11A · Introducing the AST framework ─────────────────────────
       Redesigned for students with little university experience: every question comes with options or an example,
       the six skills are linked to real graduate job ads, and the case study is an advice column with a model reply.
       Instructions come one at a time, right above the task they belong to. */
    {
      id: 'ast', number: '02', code: '11A', minutes: 60,
      tone: 'green', art: 'dec10/assets/week1/s-ast.svg',
      title: 'Introducing the AST framework',
      subtitle: 'Six skills for university — and for your first job',
      outcome: 'You can name the six skills of the Academic Success Toolkit, see where they appear in real life and in job ads, give practical advice using them, and set your own goal.',
      activities: [
        {
          id: 'a1', short: 'Smart move?', minutes: 15, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-a1.svg',
          title: 'Uni life: what is the smartest move?',
          goal: 'Six real problems that first-year students have. Choose what you would do.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Read each situation and choose the <b>smartest move</b>. Be honest — then check.' },
            { type: 'quiz', id: 'a1-q', items: [
              { q: '<b>Feedback.</b> Your essay comes back with one comment: “needs improvement on analysis”. No explanation.', options: ['Ignore it. The mark is what matters.', 'Ask your teacher: “Could you show me an example of better analysis?”', 'Copy the structure of a friend’s essay next time.'], answer: 'Ask your teacher: “Could you show me an example of better analysis?”', why: 'Understanding feedback — and asking when you don’t — is <b>feedback literacy</b>.' },
              { q: '<b>Deadlines.</b> Two essays and a presentation are due next week. You haven’t started any of them.', options: ['Make a plan tonight: list the tasks, the deadlines and small steps for each day.', 'Stay up all night before each deadline.', 'Ask for an extension on all three.'], answer: 'Make a plan tonight: list the tasks, the deadlines and small steps for each day.', why: 'Planning your time and checking your progress is <b>self-regulation and monitoring</b>.' },
              { q: '<b>Group work.</b> One member never answers the group chat. The presentation is on Friday.', options: ['Do his part yourself and say nothing — it is faster.', 'Complain about him in the group chat.', 'Talk to him early, agree on tasks and deadlines — and tell your teacher if nothing changes.'], answer: 'Talk to him early, agree on tasks and deadlines — and tell your teacher if nothing changes.', why: 'Communicating clearly and sharing work fairly are <b>group work skills</b>.' },
              { q: '<b>Sources.</b> You found 20 websites for your essay. Some have no author and no date.', options: ['Use the first three results on Google.', 'Check who wrote each one, when, and why — and use the reliable ones.', 'Use Wikipedia only, because everyone uses it.'], answer: 'Check who wrote each one, when, and why — and use the reliable ones.', why: 'Finding and judging credible sources is a <b>research skill</b>. (You will learn a test for this tomorrow.)' },
              { q: '<b>AI.</b> Your essay is worth 50%. A friend says ChatGPT can write it in five minutes.', options: ['Use it, then change a few words so that it sounds like you.', 'Ask ChatGPT for the essay, then change some words.', 'Write it yourself. Use AI only in the ways your course allows, and say when you used it.'], answer: 'Write it yourself. Use AI only in the ways your course allows, and say when you used it.', why: 'Using digital tools honestly and well is <b>digital literacy and AI</b>.' },
              { q: '<b>Opinions.</b> Your two readings say opposite things about the same problem.', options: ['Choose the one you agree with — it is your opinion, after all.', 'Wait until the teacher tells you the answer.', 'Compare their evidence and decide which argument is stronger.'], answer: 'Compare their evidence and decide which argument is stronger.', why: 'Comparing points of view and forming your own position is <b>criticality</b>.' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Has one of these situations happened to you (or a friend)? Tell your partner what happened.' },
            { type: 'language', groups: [{ label: 'Telling a short story', phrases: ['Once, in high school, I …', 'The problem was that …', 'In the end, I …', 'Now I would …'] }] },
            { type: 'do', n: 3, who: 'pair', text: 'Each smart move used a different skill. Match each situation with its skill.' },
            { type: 'match', id: 'a1-m', title: 'Which skill does each situation need?', left: ['Feedback you don’t understand', 'Three deadlines at once', 'A group member who does nothing', '20 websites — which can I trust?', 'The ChatGPT essay', 'Two readings that disagree'], right: ['Feedback literacy', 'Self-regulation and monitoring', 'Group work skills', 'Research skills', 'Digital literacy and AI', 'Criticality'] }
          ]
        },
        {
          id: 'a2', short: 'Six skills', minutes: 15, grouping: 'Class → Groups',
          art: 'dec10/assets/week1/v/v-d10w1d3-a2.svg',
          title: 'The six skills — and your future job',
          goal: 'Learn the six skills, then find them in real graduate job ads.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/ast-wheel.svg', size: 'wide', alt: 'The Academic Success Toolkit: six skills in a ring — feedback literacy, self-regulation and monitoring, group work skills, research skills, digital literacy and AI, and criticality.', caption: 'The Academic Success Toolkit (AST): designed by CET for DEC students.' },
            { type: 'do', n: 1, who: 'pair', text: 'Guess what each skill means. Then turn the card.' },
            { type: 'flip', title: 'What does each skill mean for you?', items: [
              { front: 'Feedback literacy', back: 'Understanding feedback, judging your own work against the criteria, and acting on feedback.' },
              { front: 'Self-regulation and monitoring', back: 'Setting goals, planning your time, and checking your own progress.' },
              { front: 'Group work skills', back: 'Sharing work fairly, communicating clearly, and solving problems in a team.' },
              { front: 'Research skills', back: 'Finding credible sources and using them to support your ideas.' },
              { front: 'Digital literacy and AI', back: 'Using digital tools — including AI — effectively, honestly and critically.' },
              { front: 'Criticality', back: 'Questioning ideas, comparing points of view, and forming your own position.' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Employers want these skills too. Here are lines from typical graduate job ads. Which AST skill is each employer asking for?' },
            { type: 'sort', id: 'a2-jobs', title: 'Decode the job ads', buckets: [
              { label: 'Feedback literacy', letter: 'F' }, { label: 'Self-regulation', letter: 'S' }, { label: 'Group work', letter: 'G' },
              { label: 'Research', letter: 'R' }, { label: 'Digital + AI', letter: 'D' }, { label: 'Criticality', letter: 'C' }
            ], items: [
              { text: '“Open to feedback from managers and quick to act on it”', answer: 0 },
              { text: '“Manages own workload and meets tight deadlines”', answer: 1 },
              { text: '“Works well in a team with people from different departments”', answer: 2 },
              { text: '“Can find, check and summarise market information”', answer: 3 },
              { text: '“Confident with digital tools, including AI, and uses them responsibly”', answer: 4 },
              { text: '“Questions assumptions and solves problems independently”', answer: 5 },
              { text: '“Resolves disagreements calmly and professionally”', answer: 2 },
              { text: '“Sets priorities and tracks progress towards goals”', answer: 1 }
            ] },
            { type: 'do', n: 3, who: 'group', text: 'Spin a question. Answer it — the example helps you start. Spin until everyone has answered twice.' },
            { type: 'spinner', id: 'a2-spin', title: 'Talk about the skills', text: 'Spin, read the question and answer it.', reels: [
              { label: 'Question', start: 'Spin!', items: [
                'Which skill have you already used this week? (e.g. “Group work: we chose our seminar country together.”)',
                'Which skill did high school NOT teach you? (e.g. “Research: we just used the textbook.”)',
                'Which skill would an employer check first in a job interview? Why?',
                'Which skill is the hardest to practise alone? (e.g. “Group work — you need other people!”)',
                'If you could be excellent at only ONE skill, which would you choose? Why?',
                'Which skill will help you most in the Week 7 Interactive Presentation?'
              ] }
            ] },
            { type: 'language', groups: [{ label: 'Giving your opinion', phrases: ['I’d say … is the most important, because …', 'For example, …', 'That’s true, but …'] }] }
          ]
        },
        {
          id: 'a3', short: 'Advice column', minutes: 20, grouping: 'Groups',
          art: 'dec10/assets/week1/v/v-d10w1d3-a3.svg',
          title: 'The AST advice column',
          goal: 'Students have written to “Ask the AST Team”. Write a reply with practical advice.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Read the six letters below.' },
            { type: 'cards', title: 'This week’s letters', numbered: true, items: [
              { label: 'Ji-woo', text: '“My teacher wrote ‘needs more analysis’ on my essay. What does that even mean? I don’t want to ask — it’s embarrassing.”' },
              { label: 'Omar', text: '“I have two essays and a presentation due next week, and I haven’t started any of them. I keep watching videos instead. Help!”' },
              { label: 'Mei', text: '“One person in my group never answers our messages. The presentation is on Friday. Should we just do his part?”' },
              { label: 'Arjun', text: '“I found 20 websites about my topic. Some have no author. How do I know which ones I can use?”' },
              { label: 'Lucas', text: '“My essay is worth 50%. My friend says ChatGPT can write it in five minutes and nobody will know. Should I?”' },
              { label: 'Sofia', text: '“My two readings say opposite things about the same problem. Which one is right? I wish the teacher would just tell me.”' }
            ] },
            { type: 'do', n: 2, who: 'group', text: 'Read the model reply to Omar. Notice its three parts: the skill, three practical steps, an encouraging end.' },
            { type: 'model', title: 'Model reply · to Omar', text: '<b>Dear Omar,</b> this is a <b>self-regulation</b> problem — and it is very common! <b>First</b>, tonight, write the three tasks and their due dates in your planner. <b>Then</b> break each task into small steps (for example, “find three sources” = 45 minutes) and put them in your calendar. <b>Finally</b>, use a timer: 25 minutes of work, 5 minutes of break — with your phone in another room. You can do this! <i>— The AST Advice Team</i>' },
            { type: 'do', n: 3, who: 'group', text: 'Spin to get your letter (not Omar). Write your reply in the same way.' },
            { type: 'spinner', id: 'a3-spin', title: 'Get your letter', text: 'Spin once for your group.', reels: [
              { label: 'Your letter', start: 'Spin!', items: ['Ji-woo · confusing feedback', 'Mei · the silent group member', 'Arjun · which websites?', 'Lucas · the ChatGPT essay', 'Sofia · which view is right?'] }
            ] },
            { type: 'fields', fields: [{ id: 'a3-reply', label: 'Our reply', rows: 6, placeholder: 'Dear …, this is a … problem. First, … Then … Finally, … — The AST Advice Team' }] },
            { type: 'language', groups: [{ label: 'Giving practical advice', phrases: ['First, … Then … Finally, …', 'Try … / Don’t …', 'If that doesn’t work, …', 'You can do this!'] }] },
            { type: 'do', n: 4, who: 'class', text: 'Read your reply to the class. The class votes for the most practical advice.' }
          ]
        },
        {
          id: 'a4', short: 'My goal', minutes: 10, grouping: 'Alone',
          art: 'dec10/assets/week1/v/v-d10w1d3-a4.svg',
          title: 'Rate yourself — and set one goal',
          goal: 'Be honest. Then choose ONE skill to work on.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Rate yourself for each skill.' },
            { type: 'grid', id: 'a4-grid', title: 'How would you assess yourself?', columns: ['Me now'], options: ['I am very good at this', 'I need further learning and practice', 'I am currently struggling with this skill'], rows: [
              'I can use feedback effectively to improve my work',
              'I can set and maintain goals, tracking my progress consistently',
              'I can communicate clearly when conflict arises in group situations',
              'I can locate credible sources and assess their credibility',
              'I can use digital tools effectively and ethically (AI included)',
              'I can use arguments from sources to effectively support my arguments/ideas'
            ] },
            { type: 'do', n: 2, who: 'alone', text: 'Choose one skill. Write a goal that says WHAT you will do and WHEN — like the example.' },
            { type: 'model', title: 'A weak goal and a strong goal', before: 'I want to be better at group work.', text: 'By Week 5, I will reply to my seminar group’s messages within 24 hours, and I will suggest a task list at our first meeting.' },
            { type: 'fields', fields: [
              { id: 'a4-goal', label: 'My AST goal for the next five weeks', rows: 2, placeholder: 'By Week 5, I will … To do this, I will …' }
            ] }
          ]
        }
      ]
    },
    /* ───────────────────────── 12A · Introduction to feedback literacy ─────────────────────────
       One story runs through the lesson: Lena's presentation. Students give her feedback BEFORE they learn anything,
       then meet two teachers, four students, the criteria, a feedback recipe — and finally rewrite their own first
       feedback. Every task starts from an example. The Teacher's Book feedback comments, the four criterion samples
       and the peer-feedback frames are kept. */
    {
      id: 'feedback', number: '03', code: '12A', minutes: 90,
      tone: 'teal', art: 'dec10/assets/week1/s-feedback.svg',
      title: 'AST: Introduction to Feedback Literacy',
      subtitle: 'Give feedback that helps — and use the feedback you get',
      outcome: 'You know what effective feedback looks like, what feedback literacy means, what the presentation criteria ask for, and you can give peer feedback that really helps.',
      activities: [
        {
          id: 'b1', short: 'Lena', minutes: 6, grouping: 'Alone',
          art: 'dec10/assets/week1/v/v-d10w1d3-b1.svg',
          title: 'Lena’s presentation',
          goal: 'Meet Lena. Give her one line of feedback — before you learn anything about feedback.',
          blocks: [
            { type: 'key', title: 'The story', points: ['Lena is a DEC10 student. Last week she gave a 3-minute presentation on plastic waste. Here are her three slides — and how she spoke.'] },
            { type: 'figure', src: 'dec10/assets/week1/lena-slides.svg', size: 'wide', alt: 'Lena’s three slides: slide 1, a title and 120 words of text; slide 2, one photo with no title and no source; slide 3, a graph with three key words.', caption: 'Lena’s slides.' },
            { type: 'cards', title: 'How she spoke', items: [
              { label: 'Slide 1', text: 'She read all 120 words from the slide, very fast, looking at the screen.' },
              { label: 'Slide 2', text: 'She said: “This is, um, a beach. Lots of plastic. It’s bad.” Then she moved on.' },
              { label: 'Slide 3', text: 'Clear and slow. She pointed at the graph and said why recycling is not enough.' }
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Write ONE line of feedback for Lena — anything you like. You will see it again at the end of the lesson.' },
            { type: 'fields', fields: [{ id: 'b1-first', label: 'My first feedback for Lena', rows: 2, placeholder: 'Lena, …' }] }
          ]
        },
        {
          id: 'b2', short: 'Two teachers', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-b2.svg',
          title: 'Two teachers, one presentation',
          goal: 'Two teachers watched Lena. Find out what makes feedback effective.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/fb-two-teachers.svg', size: 'wide', alt: 'Two teachers’ notes. Teacher A: Good presentation, 7 out of 10. Teacher B: your examples were clear, well done; your slides had too much text so the audience read instead of listening; next time use 3 to 4 key words per slide and a picture, and pause after each main point.', caption: 'Two teachers, two notes.' },
            { type: 'do', n: 1, who: 'pair', text: 'Which note will help Lena more next time? Bet on it.' },
            { type: 'bet', id: 'b2-bet', title: 'Which teacher helped more?', proof: 'Bet big only if you can say why.', coins: 6, items: [
              { q: 'Which feedback will help Lena do better next time?', options: ['Teacher A', 'Teacher B'], answer: 'Teacher B', why: 'B says what was good, what was not, WHY it matters, and exactly what to do next time.' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Sort these features: which teacher’s note has them?' },
            { type: 'sort', id: 'b2-sort', title: 'Teacher A or Teacher B?', buckets: [{ label: 'Teacher A', letter: 'A' }, { label: 'Teacher B', letter: 'B' }], items: [
              { text: 'only a mark and one general word', answer: 0 },
              { text: 'specific: says WHICH part was good or weak', answer: 1 },
              { text: 'explains why it matters (“the audience read instead of listening”)', answer: 1 },
              { text: 'tells you what to do next time (feed forward)', answer: 1 },
              { text: 'starts with something positive', answer: 1 },
              { text: 'quick to write, but Lena learns nothing', answer: 0 }
            ] },
            { type: 'sticky', title: 'Effective feedback is…', color: 'green', text: '<p><b>specific</b> · <b>clear</b> · linked to the <b>criteria</b> · <b>kind</b> · and it <b>feeds forward</b>: it tells you what to do next time.</p>' }
          ]
        },
        {
          id: 'b3', short: 'Help or hurt?', minutes: 7, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-b3.svg',
          title: 'Feedback or criticism?',
          goal: 'Quick game: does each comment help Lena — or just hurt?',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Eight comments about Lena’s presentation. Sort them: <b>feedback</b> (it helps her improve) or <b>criticism</b> (it only says something is bad).' },
            { type: 'sort', id: 'b3-sort', title: 'Feedback or criticism?', buckets: [{ label: 'Feedback — it helps', letter: '✓' }, { label: 'Criticism — it only hurts', letter: '✗' }], items: [
              { text: '“Slide 1 had too much text. Try 3–4 key words.”', answer: 0 },
              { text: '“Slide 1 was boring.”', answer: 1 },
              { text: '“Your graph on slide 3 was clear — keep doing that.”', answer: 0 },
              { text: '“You are not a confident speaker.”', answer: 1 },
              { text: '“On slide 2, add a title and the source of the photo.”', answer: 0 },
              { text: '“Everyone could see you were nervous.”', answer: 1 },
              { text: '“Try pausing after each main point, so we can follow.”', answer: 0 },
              { text: '“Honestly, I didn’t learn anything.”', answer: 1, why: 'It says nothing about WHAT to change.' }
            ] },
            { type: 'key', title: 'The difference', points: ['<b>Criticism</b> is about the person or the past: “You were boring.”', '<b>Feedback</b> is about the work and the future: “Try …, so that …”.', 'A feedback-literate student can tell the difference — and uses the feedback.'] }
          ]
        },
        {
          id: 'b4', short: 'Four students', minutes: 10, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-b4.svg',
          title: 'Same feedback, four reactions',
          goal: 'See what feedback literacy looks like — in real students.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/fb-four.svg', size: 'wide', alt: 'Four students react to the same feedback. Ali: 7 out of 10 is fine, closes the email. Bella: my teacher hates me, upset all evening. Chen: what is a key word? writes a to-do list. Dana: thanks! changes nothing.', caption: 'Four students got Teacher B’s feedback.' },
            { type: 'do', n: 1, who: 'pair', text: 'Which student is <b>feedback literate</b>?' },
            { type: 'quiz', id: 'b4-q', items: [
              { q: 'Who will do better next time?', options: ['Ali', 'Bella', 'Chen', 'Dana'], answer: 'Chen', why: 'Chen values the feedback (♥), understands it — and asks when he doesn’t (💡), and acts on it (★).' }
            ] },
            { type: 'figure', src: 'dec10/assets/week1/fb-loop.svg', size: 'wide', alt: 'The feedback loop: value it (read it all, say thanks), understand it (check the criteria, ask), use it (make a plan, do it next time), and around again.', caption: 'Feedback literacy: value it, understand it, use it — and around again.' },
            { type: 'do', n: 2, who: 'pair', text: 'Chen did all three things. Sort what a feedback-literate student does into ♥ 💡 ★.' },
            { type: 'sort', id: 'b4-sort', title: '♥ value it · 💡 understand it · ★ use it', buckets: [
              { label: 'Value it', letter: '♥' }, { label: 'Understand it', letter: '💡' }, { label: 'Use it', letter: '★' }
            ], items: [
              { text: 'I read all the comments, not only the mark.', answer: 0 },
              { text: 'I thank my classmates for their comments.', answer: 0 },
              { text: 'I see feedback as help, not as an attack.', answer: 0 },
              { text: 'I compare my work with the criteria to see why I got this mark.', answer: 1 },
              { text: 'I ask what a comment means if I am not sure.', answer: 1 },
              { text: 'I look at an example of a top presentation and compare.', answer: 1 },
              { text: 'I write a to-do list for my next presentation.', answer: 2 },
              { text: 'I practise the words I mispronounced before the next seminar.', answer: 2 }
            ] },
            { type: 'sticky', title: 'Feedback literacy', text: '<p>Being able to <b>value</b> feedback ♥, <b>understand</b> it 💡 and <b>use</b> it ★ to improve your next piece of work.</p><p>It also means giving your classmates feedback that helps <i>them</i>.</p>' }
          ]
        },
        {
          id: 'b5', short: 'The criteria', minutes: 17, grouping: 'Seminar groups',
          art: 'dec10/assets/week1/v/v-d10w1d3-b5.svg',
          title: 'Decode the presentation criteria',
          goal: 'Know what your presentations are marked on — then mark Lena.',
          blocks: [
            { type: 'key', title: 'Why now?', points: [
              'You will give and get feedback on your Research Summary presentations (Weeks 2, 3, 6) and your Seminar presentations (Weeks 3–6). All of it prepares you for the <b>Interactive Presentation</b> in Week 7 (40% of your speaking score).',
              'Teachers write feedback using the <b>criteria</b>. If you know the criteria, you understand the feedback.'
            ] },
            { type: 'figure', src: 'dec10/assets/week1/fb-criteria.svg', size: 'wide', alt: 'A presenter on a stage under four spotlights: content (what you say), coherence (how it flows), pronunciation (how you sound) and language (your grammar and words).', caption: 'Four spotlights on every presenter.' },
            { type: 'do', n: 1, who: 'pair', text: 'Turn each card. What does the teacher listen and look for?' },
            { type: 'flip', title: 'The four criteria of the Interactive Presentation', items: [
              { front: '1 · Content development and argumentation', back: 'WHAT you say: your key points are clear, you give evidence for the problem, and you evaluate the solution (say why it is good or not).' },
              { front: '2 · Coherence, engagement and visual coordination', back: 'HOW you organise and present: ideas connect logically, each speaker’s turn links to the next, slides are clear and consistent, and you engage the audience (eye contact, not reading).' },
              { front: '3 · Pronunciation and phonological proficiency', back: 'HOW you sound: clear pronunciation, chunking, pausing and stress on key words, so the audience understands you easily.' },
              { front: '4 · Grammatical and lexical proficiency', back: 'Your grammar and vocabulary: accurate, appropriate and varied — including functional language (evaluating, cause and effect, citing sources).' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Here is real feedback written with these criteria. Which criterion is each comment about?' },
            { type: 'sort', id: 'b5-sort', title: 'Which criterion?', buckets: [
              { label: 'Content and argument', letter: '1' }, { label: 'Coherence, engagement, visuals', letter: '2' }, { label: 'Pronunciation', letter: '3' }, { label: 'Grammar and vocabulary', letter: '4' }
            ], items: [
              { text: '“To strengthen your evaluation, use evaluative adjectives like effective / ineffective.”', answer: 0 },
              { text: '“To make it clearer that you were giving evidence, refer to sources: ‘As explained by …’”', answer: 0 },
              { text: '“For better flow, use handover phrases: ‘And now Sam is going to explain …’”', answer: 1 },
              { text: '“Be careful of reading from notes, so you can make more eye contact. Try palm cards with dot points.”', answer: 1 },
              { text: '“Remember to stress key words by saying them more slowly and loudly.”', answer: 2 },
              { text: '“I recommend slowing down, so you have time to pronounce words more clearly.”', answer: 2 },
              { text: '“We heard ‘important’ a lot. For variety, try ‘crucial’ or ‘significant’.”', answer: 3 },
              { text: '“Use more variety than ‘therefore’, e.g. ‘as a result’ or ‘as a consequence’.”', answer: 3 }
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'The rubric uses small differences in wording to show levels. Put these three in order, from weakest to strongest.' },
            { type: 'order', id: 'b5-order', title: 'Content: from weakest to strongest', items: ['Key points are addressed. (They are there — but hard to follow.)', 'Key points are clear. (The audience understands them easily.)', 'Key points are effectively conveyed. (Clear AND convincing: well explained, with evidence and examples.)'], ends: ['Weakest', 'Strongest'] },
            { type: 'do', n: 4, who: 'pair', text: 'Now be the teacher: mark Lena’s presentation on each criterion. Use her slides and how she spoke (Activity 1).' },
            { type: 'grid', id: 'b5-lena', title: 'Mark Lena', columns: ['Lena'], options: ['Strong', 'OK', 'Needs work'], rows: ['Content and argument (slide 3 explained why recycling is not enough; slide 2 explained nothing)', 'Coherence, engagement and visuals (read slide 1; slide 2 had no title or source; slide 3 was clear)', 'Pronunciation (very fast on slide 1; clear and slow on slide 3)', 'Grammar and vocabulary (“It’s bad” on slide 2; “um”)'] },
            { type: 'toggle', title: 'Compare with the teacher', hint: 'Open after you mark', blocks: [
              { type: 'model', title: 'Teacher B’s marks', rows: [['Content', 'OK — strong on slide 3, nothing on slide 2.'], ['Coherence and visuals', 'Needs work — reading, too much text, no title or source.'], ['Pronunciation', 'OK — too fast at the start, clear at the end.'], ['Grammar and vocabulary', 'Needs work — “It’s bad” is too informal; try “This has a serious impact on …”.']] }
            ] },
            { type: 'tip', text: 'The full rubric is on Canvas: <b>Assessments</b> (side panel) → Interactive Presentation → Rubric. Read it before every presentation.' }
          ]
        },
        {
          id: 'b6', short: 'Teacher-speak', minutes: 7, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-b6.svg',
          title: 'The teacher-speak decoder',
          goal: 'Teachers write short comments. Learn what each one really asks you to do.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Match each comment with the action it really means.' },
            { type: 'match', id: 'b6-m', title: 'What does the teacher want?', hint: 'Tap a comment, then the action.', left: ['“More cohesion needed.”', '“Needs more analysis.”', '“Work on sentence stress.”', '“Cite your sources.”', '“Too much on the slides.”', '“Develop your argument.”'],
              right: ['Link your ideas: use linking words and handover phrases between speakers.', 'Don’t just describe — explain WHY, compare, and evaluate.', 'Say the key words more slowly and loudly; pause between chunks.', 'Say where your information comes from: “According to Smith (2024), …”.', 'Cut to 3–4 key words and one picture per slide.', 'Give evidence, say why your solution is good, and what happens without it.'] },
            { type: 'tip', text: 'Still not sure what a comment means? Ask: <b>“Could you show me an example?”</b> Teachers like this question.' }
          ]
        },
        {
          id: 'b7', short: 'Build it', minutes: 12, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-b7.svg',
          title: 'Build the feedback',
          goal: 'Learn the four-part recipe, then build feedback for Lena from the parts.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/fb-recipe.svg', size: 'wide', alt: 'The feedback recipe in four parts: 1 something good, 2 one thing to change, 3 why it matters, 4 what to do next time.', caption: 'The feedback recipe: good → change → why → next time.' },
            { type: 'do', n: 1, who: 'alone', text: 'Build feedback on Lena’s <b>slide 2</b> (the photo with no title and no source). Choose one phrase for each part.' },
            { type: 'cloze', id: 'b7-build', title: 'Feedback builder · Lena, slide 2', list: true, options: [
              ['Your photo of the beach was a strong image,', 'Your slide 2 was bad,', 'I liked slide 2,'],
              ['but it had no title and no source,', 'but you were nervous,', 'but it was boring,'],
              ['so the audience didn’t know what it showed or where it came from.', 'so you lost marks.', 'so I stopped listening.'],
              ['Next time, add a short title and the source under the photo.', 'Next time, try harder.', 'Next time, don’t use photos.']
            ], text: 'Something good: {{1}}\nOne thing to change: {{2}}\nWhy it matters: {{3}}\nNext time: {{4}}', answers: ['Your photo of the beach was a strong image,', 'but it had no title and no source,', 'so the audience didn’t know what it showed or where it came from.', 'Next time, add a short title and the source under the photo.'],
              why: ['Specific and positive: it names WHAT was good.', 'One clear thing to change — about the work, not about Lena.', 'Why it matters for the audience.', 'A concrete action for next time.'] },
            { type: 'language', title: 'Four frames are enough', groups: [{ label: 'Peer feedback', phrases: ['… was good. To make it even better, you could …', 'I suggest you …', 'Try … so (that) …', 'Remember to …'] }] },
            { type: 'do', n: 2, who: 'pair', text: 'Now fix these three weak comments. Use the recipe and a frame.' },
            { type: 'para', id: 'b8-fix', title: 'Fix the feedback', label: 'Fix it', placeholder: 'Your better feedback…', hint: 'Compare with a possible answer when you finish.', items: [
              { text: 'Your presentation was bad.', model: 'Your research was relevant. To make it even better, you could look up from your notes more often and make eye contact.' },
              { text: 'Good job!', model: 'Your examples were clear and engaging. Remember to cite the source on the slide, e.g. “(Smith, 2024)”.' },
              { text: 'Too fast.', model: 'I suggest you slow down and pause after each key point, so the audience has time to follow.' }
            ] }
          ]
        },
        {
          id: 'b8', short: 'Act on it', minutes: 10, grouping: 'Groups',
          art: 'dec10/assets/week1/v/v-d10w1d3-b8.svg',
          title: 'From feedback to action',
          goal: 'Turn one piece of real teacher feedback into a plan — and a question.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Read the example: a short comment becomes a plan and a question.' },
            { type: 'model', title: 'Example', rows: [
              ['Feedback', '“You spoke too fast.”'],
              ['Our plan', 'I will time my part with my phone. I will mark a pause (/) after each key point in my notes and practise twice.'],
              ['Our question', '“How many words per minute is a good speed?”']
            ] },
            { type: 'do', n: 2, who: 'group', text: 'Your teacher gives your group ONE criterion. Read that feedback — it is real feedback from past DEC10 presentations.' },
            { type: 'tabs', title: 'Four pieces of feedback, one for each criterion', tabs: [
              { label: 'Content & argument', blocks: [{ type: 'model', title: 'Content Development and Argumentation', text: 'Your content was relevant and well developed, but you just needed to persuade your audience more about your ideas (i.e. your solution to the problem) through strong argumentation. EG say why your solution is an important and good one, or why a different solution won’t work, or what will happen without a solution. Remember also to use a range of functional language to clearly express your argument and try and persuade the audience; this language is a very effective and powerful tool!' }] },
              { label: 'Coherence & visuals', blocks: [{ type: 'model', title: 'Coherence, Engagement and Visual Coordination', text: 'Well done to convey some complex ideas during your presentation, although you needed to establish stronger cohesion between the different speakers because the overall structure and flow of ideas was sometimes fragmented. You can achieve stronger cohesion through more careful planning and frequent check-ins with each other. Make sure you map out your group’s entire presentation message/argument before you start preparing the presentation, and remember that cohesive devices (EG linking words) are vital in presenting a clear and logical flow of ideas. I’m sure you’ll do even better in your future presentations!' }] },
              { label: 'Pronunciation', blocks: [{ type: 'model', title: 'Pronunciation and Phonological Proficiency', text: 'You presented well-researched and relevant content, but it could have been more effectively communicated by using more stress, pausing and chunking to break up your flow of speech. Remember the class activities we have done to practise these important features. I suggest you spend a few minutes every day using CET speaking resources and also recording yourself. Consistent practice will make a big difference and help make you an effective communicator!' }] },
              { label: 'Grammar & vocabulary', blocks: [{ type: 'model', title: 'Grammatical and Lexical Proficiency', text: 'Your accurate sentence structures and grammar such as verb tenses were impressive. However, we detected several instances of incorrect word forms, mixing up adverbs-adjectives-nouns EG It has become scarcity* | healthy* problems | a significantly* challenge. These errors can be distracting for the audience, so please try to avoid them! Why don’t you record yourself speaking, and then listen back, or get your classmates to listen, to check you used correct word forms.' }] }
            ] },
            { type: 'do', n: 3, who: 'group', text: 'Write your plan and your question, like the example.' },
            { type: 'fields', fields: [
              { id: 'b6-plan', label: 'Our plan: what will we do to improve this criterion?', rows: 3, placeholder: 'Next time we will …' },
              { id: 'b6-ask', label: 'One question we could ask our teacher', rows: 2, placeholder: 'What do you mean by …? / Could you show us an example of …?' }
            ] }
          ]
        },
        {
          id: 'b9', short: 'Stay calm', minutes: 6, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d3-b9.svg',
          title: 'Feedback is not an attack',
          goal: 'Choose the most professional reaction — and learn what to say.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Be honest first.' },
            { type: 'scale', id: 'b7-scale', title: 'Be honest', statement: 'When I get negative feedback, I feel defensive.', ends: ['Never', 'Always'] },
            { type: 'do', n: 2, who: 'pair', text: 'A classmate tells you: “Your slides had too many words.” Which reply is the most professional?' },
            { type: 'quiz', id: 'b7-q', items: [
              { q: 'Your classmate says: “Your slides had too many words.”', options: ['“Well, your slides weren’t perfect either.”', '“Thanks — that’s useful. Which slide was the worst?”', '“Everyone puts a lot of words on slides.”'], answer: '“Thanks — that’s useful. Which slide was the worst?”', why: 'Thank them, then ask a question to understand. You don’t have to agree with every comment — but listen first.' }
            ] },
            { type: 'language', title: 'What to say when you get feedback', groups: [{ label: 'Receiving feedback', phrases: ['Thanks, that’s useful.', 'Could you give me an example?', 'So you mean I should …?', 'What can I do to improve next time?'] }] },
            { type: 'do', n: 3, who: 'pair', text: 'Role play (1 minute each): A is Lena. B gives Lena the feedback you built in Activity 7. Lena replies with a phrase from the box. Swap.' }
          ]
        },
        {
          id: 'b10', short: 'Before / after', minutes: 5, grouping: 'Alone',
          art: 'dec10/assets/week1/v/v-d10w1d3-b10.svg',
          title: 'Your feedback: before and after',
          goal: 'Rewrite the first feedback you gave Lena — with everything you learned today.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Open your notebook and find your first feedback for Lena (Activity 1). Now write it again, using the recipe and a frame.' },
            { type: 'fields', fields: [{ id: 'b10-after', label: 'My feedback for Lena — version 2', rows: 3, placeholder: 'Lena, your … was good. To make it even better, you could … so that …' }] },
            { type: 'checklist', id: 'b10-check', title: 'Version 2 …', meter: ['ticked', 'Feedback literate!'], items: ['says something specific that was good', 'names ONE thing to change — about the work, not about Lena', 'says why it matters', 'says what to do next time', 'is something I would be happy to receive'] },
            { type: 'key', title: 'This week', points: ['Before your next presentation: find the rubric and read it.', 'After it: read all the feedback, ask one question, write one to-do.'] }
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
          art: 'dec10/assets/week1/v/v-d10w1d3-h5.svg',
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
          art: 'dec10/assets/week1/v/v-d10w1d3-h6.svg',
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
          art: 'dec10/assets/week1/v/v-d10w1d3-h7.svg',
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
