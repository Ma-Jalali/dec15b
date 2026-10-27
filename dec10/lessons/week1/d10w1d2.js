/* DEC10 · Week 1 Day 2 — teach a framework from your notes, meet the Seminar and the Interactive Presentation,
   learn the four rhetorical functions of DEC10, and (homework) set up your digital tools.
   Teacher's Book lessons 6A, 7A, 8A, 9A. The Teacher's Book questions, paragraphs and answer keys are kept;
   the activities around them are redesigned. Phrase banks are deliberately short: only language a B2 student
   will really use this week (the full booklet lists are not copied).
   Keep the id 'd10w1d2' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d2',
  week: 1, day: 2,
  title: 'Teach it, plan it, argue it',
  duration: 'About 4 hours + homework',
  question: 'Which sustainability framework would you trust to explain a real problem — and why?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question · you will need it for your Seminar',
  journey: 'Teach yesterday’s framework from your notes, swap frameworks with a partner, put all three on trial, choose your Seminar country — and learn the four ways academic language does a job.',
  image: 'dec10/assets/week1/hero-d10w1d2.svg',
  imageAlt: 'Illustration: three framework cards — the triple bottom line circles, the equation I = P × A × T and a population pyramid — on a whiteboard, with speech bubbles reading because, as a result and should.',
  finish: { title: 'Day 3', text: 'Paraphrasing and feedback' },
  goalShort: 'your Seminar and the speaking assessments',

  sections: [
    /* ───────────────────────── 6A · Reading and listening to speak ───────────────────────── */
    {
      id: 'frameworks', number: '01', code: '6A', minutes: 60,
      tone: 'teal', art: 'dec10/assets/week1/s-teach.svg',
      title: 'Reading and listening to speak',
      subtitle: 'Teach a framework from your notes',
      outcome: 'You can give a clear, organised short presentation on the IPAT, DTM or triple bottom line from your notes — and summarise and question the frameworks in a group discussion.',
      activities: [
        {
          id: 'f1', short: 'Draw it', minutes: 5, grouping: 'Groups of 3–4',
          title: 'Warmer: framework Pictionary',
          goal: 'Wake up all three frameworks in two minutes — with a pen, not words.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'On a blank piece of paper, sketch <b>one symbol</b> for each framework: the triple bottom line, the IPAT equation and the DTM. No words! (2 minutes)' },
              { who: 'group', text: 'Show one sketch at a time. Your group guesses which framework it is — and you explain why you drew it.' },
              { who: 'group', text: 'Vote: the most <b>accurate</b> symbol and the most <b>creative</b> one.' }
            ] },
            { type: 'language', groups: [
              { label: 'Explaining your drawing', phrases: ['This shows … because …', 'The arrows mean …', 'I drew … to represent …'] }
            ] }
          ]
        },
        {
          id: 'f2', short: 'Teach the TBL', minutes: 15, grouping: 'Pair',
          title: 'Activity 1 · Teach the triple bottom line in 90 seconds',
          goal: 'Organise yesterday’s notes into a diagram and present a 1–2 minute summary.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/tbl-organiser.svg', size: 'wide', alt: 'Note organiser: three boxes — Profit, People, Planet — with arrows into one bar: “The triple bottom line means…”. Under it, two boxes: Stakeholders and Shareholders, with a not-equal sign between them.', caption: 'Copy this on paper, or fill it in below. Every box needs something.' },
            { type: 'fields', fields: [
              { id: 'f2-profit', label: 'Profit', rows: 2, placeholder: 'financial performance…' },
              { id: 'f2-people', label: 'People', rows: 2 },
              { id: 'f2-planet', label: 'Planet', rows: 2 },
              { id: 'f2-tbl', label: 'So, the triple bottom line means…', rows: 2 },
              { id: 'f2-stake', label: 'Stakeholders ≠ shareholders: the difference', rows: 2 }
            ] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Practise once in your head. Use your diagram — not full sentences.' },
              { who: 'pair', text: '<b>Student A</b> presents (start the timer: 90 seconds). <b>Student B</b> listens and ticks the checklist. Then swap.' }
            ] },
            { type: 'checklist', id: 'f2-check', title: 'Listener’s checklist — did your partner…', meter: ['ticked', 'A complete summary!'], items: [
              'name all three components (profit, people, planet)?',
              'give at least one example?',
              'explain the difference between stakeholders and shareholders?',
              'use a signpost (first… / the second component… / finally…)?',
              'finish in under 2 minutes?'
            ] },
            { type: 'language', groups: [
              { label: 'Presenting from notes', phrases: ['This framework is called … It was explained in …', 'It has three parts. The first is …', 'For example, …', 'So, in short, …'] }
            ] }
          ]
        },
        {
          id: 'f3', short: 'Expert swap', minutes: 20, grouping: 'Pair (DTM + IPAT)',
          title: 'Activity 2 · Expert swap: the DTM and the IPAT equation',
          goal: 'Teach your homework framework to someone who read the other text — and learn theirs.',
          blocks: [
            { type: 'key', title: 'You are the expert now', points: [
              'Your partner read the <b>other</b> text. They only know your framework from what you tell them.',
              'Present for 1–2 minutes using your diagram. Then your partner asks you <b>one follow-up question</b>.',
              'While you listen, take <b>outline notes</b> — you need all three frameworks for your Seminar.'
            ] },
            { type: 'figure', src: 'dec10/assets/week1/ipat-organiser.svg', size: 'wide', alt: 'IPAT note organiser: Impact equals Population times Affluence times Technology, with three boxes underneath: History, Application, Criticism.', caption: 'IPAT experts: the factors are multiplied — I = P × A × T.' },
            { type: 'figure', src: 'dec10/assets/week1/dtm-organiser.svg', size: 'wide', alt: 'DTM note organiser: four stages from left to right — preindustrial, early expanding, late expanding, postindustrial — each with a small population pyramid and boxes for birth rate, death rate and growth, plus a box for criticism.', caption: 'DTM experts: four stages, one pyramid each — and the criticism at the end.' },
            { type: 'steps', items: [
              { who: 'alone', text: 'Copy your diagram onto paper and fill it in from your notes (5 minutes). Practise once.' },
              { who: 'pair', text: 'DTM expert presents → IPAT expert asks a follow-up question. Then swap.' },
              { who: 'alone', text: 'Write outline notes on your partner’s framework below.' }
            ] },
            { type: 'language', groups: [
              { label: 'Asking a follow-up question', phrases: ['Could you give an example of …?', 'What did you mean by …?', 'Why do critics say …?', 'How is this different from the triple bottom line?'] }
            ] },
            { type: 'fields', fields: [
              { id: 'f3-notes', label: 'Outline notes: my partner’s framework', rows: 7, placeholder: '1. Name / source\n   a. …\n2. How it works\n   a. …\n3. Criticism\n   a. …' }
            ] }
          ]
        },
        {
          id: 'f4', short: 'On trial', minutes: 20, grouping: 'Groups of 4',
          title: 'Activity 3 · Put the frameworks on trial',
          goal: 'Summarise the criticism of each framework, decide if it is fair, and answer the big question.',
          blocks: [
            { type: 'key', title: 'The discussion prompt', points: [
              'The Triple Bottom line, the IPAT equation and the DTM were proposed as frameworks to explain sustainability related issues. They all have supporters and critics.',
              'Summarise the criticism of all of the frameworks.',
              'Are those criticisms valid?',
              'In your opinion, as they stand, would these frameworks be able to satisfactorily address current sustainability challenges?'
            ] },
            { type: 'table', id: 'f4-trial', title: 'The trial — one row each', columns: ['The main criticism', 'Is it valid? Why / why not?'], fixed: ['Triple bottom line', 'IPAT equation', 'DTM'] },
            { type: 'toggle', title: 'Stuck? Where the criticism comes from', hint: 'Open only if your group needs it', blocks: [
              { type: 'cards', items: [
                { label: 'DTM · Hanks (2019)', text: 'Too focused on Western experience; misses factors in developing countries; ignores population <b>decline</b> in some rich countries (a possible fifth stage).' },
                { label: 'IPAT · Chertow (2001)', text: 'Impact is hard to define and measure; critics said Commoner used selective data; technology may only <b>delay</b> problems.' },
                { label: 'Triple bottom line', text: 'The video gives no criticism — it is promotional! Use your Day 1 ideas: is it realistic for every business? How do you measure “people” and “planet”?' }
              ] }
            ] },
            { type: 'language', groups: [
              { label: 'Judging a criticism', phrases: ['This criticism is fair because …', 'I’m not sure that’s fair, because …', 'The model works for …, but not for …', 'Overall, I think …'] }
            ] },
            { type: 'scale', id: 'f4-scale', title: 'Your group’s verdict', statement: 'As they stand, these frameworks can satisfactorily address current sustainability challenges.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Partly' },
            { type: 'fields', fields: [
              { id: 'f4-big', label: 'Big question: which framework would you trust to explain a real problem — and why?', rows: 2, placeholder: 'I would trust … because … However, …' }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 7A · Introduction to the Seminar and Interactive Presentation ───────────────────────── */
    {
      id: 'seminar', number: '02', code: '7A', minutes: 90,
      tone: 'clay', art: 'dec10/assets/week1/s-seminar.svg',
      title: 'Introduction to Seminar and Interactive Presentation',
      subtitle: 'Two tasks, one topic, one group',
      outcome: 'You understand what the Seminar and the Interactive Presentation ask you to do, you have chosen your Seminar country with your group, and you have started planning.',
      activities: [
        {
          id: 's1', short: 'Two tasks', minutes: 15, grouping: 'Pair',
          title: 'Seminar or Interactive Presentation?',
          goal: 'See how the two tasks connect — and how they are different.',
          blocks: [
            { type: 'key', title: 'The big idea', points: [
              'The <b>Seminar</b> is practice (an open assessment) for the <b>Interactive Presentation</b> (a secured assessment in Week 7).',
              'Same group, same sustainability topic, same skills: research, presenting, group work and answering questions.',
              'So everything you research for the Seminar also helps you in Week 7.'
            ] },
            { type: 'sort', id: 's1-sort', title: 'Seminar, Interactive Presentation — or both?', hint: 'Put each card in the right box, then check.', buckets: [
              { label: 'Seminar', letter: 'S' }, { label: 'Interactive Presentation', letter: 'IP' }, { label: 'Both', letter: 'B' }
            ], items: [
              { text: 'You are in the same group.', answer: 2 },
              { text: 'You have the same sustainability topic.', answer: 2 },
              { text: 'You research your sustainability issue.', answer: 2 },
              { text: 'You refer to one sustainability framework.', answer: 2 },
              { text: 'It forms 10% of your speaking score.', answer: 0 },
              { text: 'It forms 40% of your speaking score.', answer: 1 },
              { text: 'A group presentation, 10–12 minutes in total.', answer: 0 },
              { text: 'An individual presentation, 3 minutes per student.', answer: 1 },
              { text: 'The audience is the whole class (and the teacher).', answer: 0 },
              { text: 'The audience is your group members (and teachers).', answer: 1 },
              { text: 'Two sessions: Opening Remarks + Seminar.', answer: 0 },
              { text: 'One session: presentation + individual questions.', answer: 1 },
              { text: 'You choose your own country.', answer: 0 },
              { text: 'The country must be Australia.', answer: 1 }
            ] }
          ]
        },
        {
          id: 's2', short: 'How it works', minutes: 20, grouping: 'Pair',
          title: 'How a seminar works',
          goal: 'Know what happens the week before, the day of, and after your seminar.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/seminar-flow.svg', size: 'wide', alt: 'Seminar flow in three columns. The week before: your group gives Opening Remarks (5–7 minutes); the class posts reactions and questions; the teacher gives feedback; you choose your research focus. The day of: your 10–12 minute seminar, two discussion questions for the class, and a summary of each group’s discussion. After: Portfolio submissions — two written summaries and reflections and a video.', caption: 'Your seminar in three steps.', credit: 'Dates for your group: Course calendar · details: Assessments (side panel).' },
            { type: 'order', id: 's2-order', title: 'Put your group’s seminar journey in order', items: [
              'Choose a country and research your sustainability issue',
              'Give your Opening Remarks (5–7 min): your country, causes and effects',
              'Get feedback from your teacher; the class posts reactions and questions on the discussion board',
              'Choose ONE question from the board as your research focus',
              'Give your seminar (10–12 min) and run the class discussion',
              'Upload your Portfolio: summaries, reflections and a feedback video'
            ], ends: ['First', 'Last'] },
            { type: 'quiz', id: 's2-q', title: 'Quick check', items: [
              { q: 'How long are your Opening Remarks?', options: ['3 minutes', '5–7 minutes', '10–12 minutes'], answer: '5–7 minutes', why: 'Your country, why you chose it, and the causes and effects of the problem.' },
              { q: 'After another group’s Opening Remarks, your group…', options: ['writes an essay about their country', 'posts ONE reaction and 1–2 questions on the discussion board, in class', 'gives them a mark'], answer: 'posts ONE reaction and 1–2 questions on the discussion board, in class', why: 'One post per group, in class. The presenting group then chooses one question as their research focus.' },
              { q: 'Do you have to answer every question on the discussion board?', options: ['Yes, all of them', 'No — choose one research gap to focus on'], answer: 'No — choose one research gap to focus on', why: 'Choose the question your group most wants to research, and research it well.' }
            ] }
          ]
        },
        {
          id: 's3', short: 'Frameworks', minutes: 10, grouping: 'Pair',
          title: 'Using a framework in your seminar',
          goal: 'Know how to use one framework well.',
          blocks: [
            { type: 'key', title: 'Quality, not quantity', points: [
              'Use <b>one</b> framework (IPAT, triple bottom line or DTM) — or even <b>one aspect</b> of it.',
              'Use it in the Opening Remarks <b>or</b> the seminar (not necessarily both).',
              'Use it to describe the background, to explain causes and effects, or to <b>evaluate</b> solutions.',
              'Your research must come from reputable academic sources, and you must cite them.'
            ] },
            { type: 'quiz', id: 's3-q', title: 'Which group used the framework better?', items: [
              { q: '<b>Group A</b> says “triple bottom line” six times but never explains it. <b>Group B</b> uses only the “planet” part to evaluate one solution. Which is better?', options: ['Group A', 'Group B'], answer: 'Group B', why: 'The focus is on the quality of the reference, not how often you mention it.' },
              { q: 'Your topic is green jobs in one country. Which framework could work best?', options: ['The triple bottom line — jobs are about people, profit and planet', 'Any of them — if you explain how you use it'], answer: 'Any of them — if you explain how you use it', why: 'You choose the most applicable framework. The triple bottom line is an easy fit, but the DTM (population, workforce) or IPAT could work too.' }
            ] }
          ]
        },
        {
          id: 's4', short: 'Our country', minutes: 30, grouping: 'Seminar group',
          title: 'Choose your country',
          goal: 'Agree on your Seminar country as a group — and tell your teacher before class ends.',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Sit in your Seminar group. Your teacher gives you your group number, topic and seminar week.' },
              { who: 'group', text: 'Each person suggests one country and one reason. <b>Not Australia</b> (that is for Week 7) and <b>not your own country</b>.' },
              { who: 'group', text: 'Check each idea: is there enough information in English? Is the problem real and current there?' },
              { who: 'group', text: 'Decide together, then sign your group agreement and give your country to your teacher.' }
            ] },
            { type: 'language', groups: [
              { label: 'Deciding together', phrases: ['What about …? It has …', 'I like that idea, but …', 'Shall we go with …?', 'OK, so we agree on …'] }
            ] },
            { type: 'contract', id: 's4-c', kicker: 'DEC10 · Seminar + Portfolio', title: 'Our seminar group', intro: 'We agree to research and present this together.', stamp: 'Seminar group', fields: [
              { id: 's4-group', label: 'Group number and topic', placeholder: 'Group … · …' },
              { id: 's4-country', label: 'Our country', placeholder: 'Not Australia, not our own country' },
              { id: 's4-why', label: 'Why we chose it', placeholder: 'Because …', rows: 2 },
              { id: 's4-frame', label: 'The framework we might use', placeholder: 'IPAT / triple bottom line / DTM — for …' },
              { id: 's4-jobs', label: 'Who researches what before our Opening Remarks', placeholder: '[Name]: … [Name]: …', rows: 3 }
            ], signers: 5 }
          ]
        },
        {
          id: 's5', short: 'Start preparing', minutes: 15, grouping: 'Seminar group',
          title: 'Start preparing',
          goal: 'Read your two questions and plan your first research steps.',
          blocks: [
            { type: 'tabs', title: 'Your topic and your two questions', tabs: [
              { label: 'Group 1 · Digital carbon footprint', blocks: [
                { type: 'model', title: 'Seminar question', text: 'What is the impact of the digital carbon footprint on overall carbon emissions in [your chosen country], and what strategies can be deployed to reduce it?' },
                { type: 'model', title: 'Interactive Presentation question (Week 7)', text: 'What is the impact of the digital carbon footprint on overall carbon emissions in Australia, and what strategies can be deployed to reduce it?', list: ['Energy-efficient data centers (optimization, cooling techniques etc.)', 'Renewable energy use by data centers and IT operations', 'Virtualization and cloud computing', 'Efficient hardware and data management', 'E-waste reduction and recycling'] }
              ] },
              { label: 'Group 2 · The workforce of the future', blocks: [
                { type: 'model', title: 'Seminar question', text: 'What strategies could be implemented in [your chosen country] to enhance a smooth transition to more green jobs?' },
                { type: 'model', title: 'Interactive Presentation question (Week 7)', text: 'What strategies could be implemented in Australia to enhance a smooth transition to more green jobs?', list: ['Upskilling and Reskilling Initiatives', 'Private and Public Sector Collaboration', 'Localized Job Creation in Renewable Energy Hubs', 'Research and Innovation Funding', 'Green Manufacturing Hubs'] }
              ] },
              { label: 'Group 3 · Ecotourism', blocks: [
                { type: 'model', title: 'Seminar question', text: 'How can ecotourism in [your chosen country] be managed to both support conservation and benefit local communities?' },
                { type: 'model', title: 'Interactive Presentation question (Week 7)', text: 'How can ecotourism in Australia be managed to both support conservation and benefit local communities?', list: ['Indigenous-led Eco-Tourism', 'Protected Area Tourism', 'Sustainable Tourism Certification Programs', 'Community-Based Tourism Initiatives', 'Seasonal and Controlled Access Tourism'] }
              ] },
              { label: 'Group 4 · Cultural globalisation', blocks: [
                { type: 'model', title: 'Seminar question', text: 'How is [your chosen country] encouraging OR how could [your chosen country] encourage cultural diversity?' },
                { type: 'model', title: 'Interactive Presentation question (Week 7)', text: 'How can Australia encourage cultural diversity?', list: ['Indigenous Cultural Programs', 'Multicultural Policy Frameworks', 'National Heritage Listings and Cultural Preservation Laws', 'Promotion of Australian Content in Media', 'Community Leadership Development'] }
              ] }
            ] },
            { type: 'tip', text: 'In the Interactive Presentation each group member chooses a <b>different</b> strategy from the list and presents it: the details, the constraints, and a brief evaluation.' },
            { type: 'fields', fields: [
              { id: 's5-know', label: 'What we already know about our topic in our country', rows: 3 },
              { id: 's5-find', label: 'What we need to find out first', rows: 3 },
              { id: 's5-where', label: 'Where we will look (e.g. government reports, the university library)', rows: 2 }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 8A · Introduction to rhetorical functions ───────────────────────── */
    {
      id: 'functions', number: '03', code: '8A', minutes: 90,
      tone: 'plum', art: 'dec10/assets/week1/s-functions.svg',
      title: 'Academic writing skills: Introduction to rhetorical functions',
      subtitle: 'Four jobs that academic language does',
      outcome: 'You can identify common rhetorical functions in academic texts, recognise the language that shows them, and use them when you speak.',
      activities: [
        {
          id: 'r1', short: 'Role play', minutes: 15, grouping: 'Pairs / groups of 3',
          title: 'Warmer: role play',
          goal: 'Argue, explain and persuade — before we give it a name.',
          blocks: [
            { type: 'cards', title: 'The four scenarios', numbered: true, items: [
              { label: 'Noisy building · 2 roles', text: 'A <b>tenant</b> complains to the <b>building manager</b> about early-morning construction noise: the causes, the effects (less productive, more stressed) and a request to change the hours. The manager listens and responds.' },
              { label: 'Park or parking? · 3 roles', text: 'A <b>council member</b> runs a meeting. One <b>resident</b> wants a parking lot for local business; another wants to keep the park for health and the environment.' },
              { label: 'Homelessness · 2 roles', text: 'A <b>concerned citizen</b> proposes practical solutions (housing, job training, mental health services). A <b>local government representative</b> asks questions and raises challenges.' },
              { label: 'The holiday · 2 roles', text: 'A <b>student</b> persuades their <b>parents</b> to pay for an expensive trip with friends. The parents worry about cost and safety.' }
            ] },
            { type: 'spinner', id: 'r1-spin', title: 'Get your scenario', text: 'Spin to get a scenario. Take 3 minutes to think about your character: What is their view? What will they argue?', reels: [
              { label: 'Scenario', start: 'Spin!', items: ['1 · Noisy building', '2 · Park or parking?', '3 · Homelessness', '4 · The holiday'] }
            ] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Prepare your role: your position, two arguments, and what the other person might say.' },
              { who: 'pair', text: 'Role play for 3–4 minutes. Try to reach an agreement.' }
            ] }
          ]
        },
        {
          id: 'r2', short: 'Your language', minutes: 5, grouping: 'Pair',
          title: 'What language did you use?',
          goal: 'Notice the language you already have.',
          blocks: [
            { type: 'checklist', id: 'r2-used', title: 'Tick everything you (or your partner) said in the role play', meter: ['used', 'You used them all!'], items: ['because', 'so', 'I agree', 'I disagree', 'should', 'need to', 'I will … if …'] },
            { type: 'tip', text: 'Each of these words does a <b>job</b>: <i>because</i> explains a cause, <i>should</i> recommends, <i>I will … if …</i> persuades. These jobs have a name — <b>rhetorical functions</b>.' }
          ]
        },
        {
          id: 'r3', short: 'Four functions', minutes: 15, grouping: 'Pair',
          title: 'Introducing rhetorical functions',
          goal: 'Learn the four functions DEC10 focuses on.',
          blocks: [
            { type: 'key', title: 'What is a rhetorical function?', points: [
              'It is the <b>purpose</b> or <b>job</b> of a piece of language: what the writer or speaker wants it to do.',
              'Functions help organise information, guide the reader, and make a text more persuasive or clear.'
            ] },
            { type: 'flip', title: 'The four functions of DEC10', hint: 'Guess the meaning, then turn the card.', items: [
              { front: 'Explaining cause and effect', back: 'Discussing the reasons why something happened (causes) and the outcomes of those events (effects).' },
              { front: 'Arguing and persuading', back: 'Presenting evidence and reasoning to support a position, to convince the reader or listener.' },
              { front: 'Evaluating', back: 'Making judgements about the value, significance or quality of something, often using criteria.' },
              { front: 'Problem-solving', back: 'Identifying issues and proposing solutions to address them.' }
            ] },
            { type: 'tip', text: 'Other common functions: describing, comparing and contrasting, classifying, defining and summarising. You already did one of them yesterday — which?' },
            { type: 'talk', title: 'Discuss with your partner', prompts: [
              'Which rhetorical function do you feel most comfortable with, and why?',
              'Which rhetorical function do you think will be most useful in your academic writing, and why?'
            ] }
          ]
        },
        {
          id: 'r4', short: 'Analyse', minutes: 25, grouping: 'Pair',
          title: 'Analysing the language',
          goal: 'Match each paragraph with its function, then find the words that do the job.',
          blocks: [
            { type: 'sort', id: 'r4-sort', title: '1a · Match the paragraph with its function', buckets: [
              { label: 'Persuasion', letter: '1' }, { label: 'Cause and effect', letter: '2' }, { label: 'Recommendations', letter: '3' }, { label: 'Different point of view', letter: '4' }
            ], items: [
              { text: '<b>Paragraph A</b> · “…One reason is a lack of water. Dryness in the soil causes the leaves to wilt…”', answer: 1 },
              { text: '<b>Paragraph B</b> · “It is important not to assume that merely because a practice is associated with low-income levels, it is necessarily inferior…”', answer: 3 },
              { text: '<b>Paragraph C</b> · “The results reported here have many implications for managers working with groups…”', answer: 2 },
              { text: '<b>Paragraph D</b> · “We will tackle the housing crisis by working with the community…”', answer: 0 }
            ] },
            { type: 'spot', id: 'r4-spot', label: 'Highlight the language', title: '1b · Tap the words that show each function', hint: 'There are 14 phrases that do the job. Some highlighted phrases are just content — leave them.', paras: [
              'There are several [[*factors]] to be taken into account when studying why some plants become weak or die. [[*One reason is]] a lack of water. Dryness in the soil [[*causes]] the leaves to wilt and [[*may give rise to]] the death of the plant. On the other hand, too much water [[*may result in]] the leaves drooping or becoming yellow. While [[sunshine is necessary]] for plants, if it is too strong, the soil may be baked and the roots killed. However, if there is no light, the leaves will become pale and the stems thin. [[*Consequently]], the plant may die.',
              '[[*It is important not to assume that]] merely because a practice is associated with low-income levels, it is necessarily inferior. Safa (1967) [[*has shown]], for example, that high-rise public housing destroys the sense of community and patterns of neighbourly cooperation that frequently exist in [[established slums and shantytowns]]. Valentine (1970) [[*stresses]] the resourcefulness, sense of humour and informality of black ghetto culture. Lewis\'s (1961, 1966) remarkable documentaries of ghetto life, as told in the tape-recorded words of the people themselves, show that many individuals who are trapped in poverty, nonetheless, achieve a great nobility of spirit.',
              'The results reported here [[*have many implications for]] managers working with groups. Although [[traditional theory]] implies that group leaders have plenty of time at a project\'s beginning before the group will choose its norms and get to work, this model implies that a group\'s first meeting will set lasting precedents for how the group will use the first half of its time. That finding [[*suggests that]] group leaders prepare carefully for the first meeting, and it identifies a key point of intersection between group development and group-effectiveness research on team design.',
              '[[*We will tackle]] the housing crisis by working with the community to build and run 100% public and affordable housing. [[*We will fund]] this by introducing a developer levy on multi-unit developments and increasing rates on [[vacant properties]]. [[*We will oppose]] the sell-off of public land as profits should be kept in the community, not the pockets of the developers. And will set new standards for sustainability and accessibility.'
            ] },
            { type: 'language', title: 'The phrases worth learning now', groups: [
              { label: 'Cause and effect', phrases: ['… because + sentence', '… because of / due to + noun', 'As a result, … / Therefore, …', 'This leads to / causes + noun'] },
              { label: 'Different point of view', phrases: ['Some people argue that …, but others …', 'While X …, Y …', 'However, critics say that …'] },
              { label: 'Recommendations', phrases: ['… should …', 'It is recommended that …', '… could be considered.'] },
              { label: 'Persuasion', phrases: ['If we …, we will …', 'Clearly, …', 'The evidence shows that …'] }
            ] },
            { type: 'key', tone: 'warn', title: 'The grammar that matters', points: [
              '<b>because</b> + a sentence: <i>…because energy use increased.</i>',
              '<b>because of / due to</b> + a noun: <i>…because of / due to higher energy use.</i>',
              'Mixing these up is the most common error with cause and effect. Four phrases you use correctly beat fourteen you don’t.'
            ] }
          ]
        },
        {
          id: 'r5', short: 'Review', minutes: 10, grouping: 'Alone',
          title: 'Review: match the sentences with the rhetorical function',
          goal: 'Check that you can recognise all four functions.',
          blocks: [
            { type: 'sort', id: 'r5-sort', title: 'Which function does each sentence show?', buckets: [
              { label: 'Cause and effect' }, { label: 'Different point of view' }, { label: 'Recommendations' }, { label: 'Persuasion' }
            ], items: [
              { text: 'If we act immediately, we will prevent further damage.', answer: 3 },
              { text: 'The new policy failed; as a result, the company lost clients.', answer: 0 },
              { text: 'Despite the benefits, some critics suggest that it can be harmful.', answer: 1 },
              { text: 'It is recommended that the company invests in staff training.', answer: 2 },
              { text: 'Due to the heavy rain, the event was postponed.', answer: 0 },
              { text: 'Undoubtedly, the benefits of exercise far outweigh the negatives.', answer: 3 },
              { text: 'While some argue that technology improves communication, others believe it creates barriers.', answer: 1 },
              { text: 'To reduce waste, it would be beneficial to implement recycling programs.', answer: 2 }
            ] }
          ]
        },
        {
          id: 'r6', short: 'Use it', minutes: 20, grouping: 'Pair',
          title: 'Role play again — with the functions',
          goal: 'Use at least two functions on purpose, then write two sentences for your Seminar.',
          blocks: [
            { type: 'spinner', id: 'r6-spin', title: 'A new scenario — and a mission', text: 'Spin. Go back to your role-play partner, take a <b>different</b> scenario, and complete the mission.', reels: [
              { label: 'Scenario', start: 'Spin!', items: ['1 · Noisy building', '2 · Park or parking?', '3 · Homelessness', '4 · The holiday'] },
              { label: 'Mission', start: '…', items: ['Use cause and effect + a recommendation', 'Use persuasion + a different point of view', 'Use a recommendation + persuasion', 'Use all four!'] }
            ] },
            { type: 'fields', fields: [
              { id: 'r6-ce', label: 'Write it: one cause-and-effect sentence about a framework from this morning', rows: 2, placeholder: 'Due to … , … / … because … / As a result, …' },
              { id: 'r6-rec', label: 'Write it: one recommendation for your Seminar country', rows: 2, placeholder: '… should … / It is recommended that …' }
            ] },
            { type: 'checklist', id: 'r6-can', title: 'Can you do this?', meter: ['ticked', 'Ready for Day 4!'], items: [
              'I understand what a rhetorical function is and why it is important in academic studies.',
              'I can identify basic rhetorical functions such as explaining cause and effect, showing different opinions, providing suggestions, and persuading.',
              'I can use some basic phrases to explain cause and effect, provide recommendations, and express points of view when I speak.'
            ] },
            { type: 'talk', title: 'Last 2 minutes', prompts: ['Look at your Seminar question. Which rhetorical function(s) will you need to answer it? How would you use them?'] }
          ]
        }
      ]
    },

    /* ───────────────────────── 9A · AST: Digital literacy and online tools homework ───────────────────────── */
    {
      id: 'digital', number: '04', code: '9A', minutes: 40,
      tone: 'blue', art: 'dec10/assets/week1/s-digital.svg',
      title: 'AST: Digital literacy and online tools homework',
      subtitle: 'Your accounts, Canvas and your toolbox',
      outcome: 'You recognise the key digital tools and platforms of the course, and you can navigate Canvas and LockDown Browser.',
      activities: [
        {
          id: 'd1', short: 'Tech words', minutes: 8, grouping: 'Homework',
          title: 'Tech words at CET',
          goal: 'Know the words you will see when you log in.',
          blocks: [
            { type: 'match', id: 'd1-m', title: 'Match the word with its function', hint: 'Don’t worry if some are new — this homework explains them.', left: ['Unikey', 'MFA (Multi-factor Authentication)', 'SSO (Single Sign-on)', 'Okta', 'Push notification', 'DEC', 'Portal'],
              right: ['A unique ID and password that gives you access to systems and resources at Sydney University (format: abcd1234).', 'A security measure to confirm your identity when you try to sign into any system.', 'A screen that allows you to log in with your Unikey and password.', 'A security app that sends a push notification for you to confirm before logging you in.', 'A pop-up notification from a mobile app to alert you of a new message.', 'Direct Entry Course', 'A webpage that gives access to other links, e.g. important student information.'] }
          ]
        },
        {
          id: 'd2', short: 'Stay secure', minutes: 12, grouping: 'Homework',
          title: 'Keep your account safe',
          goal: 'Set up MFA and understand how you log in.',
          blocks: [
            { type: 'cards', items: [
              { label: '1 · UniKey', text: 'Your unique ID and password (format abcd1234). It is <b>not</b> your Student ID, which is numbers only. Keep it safe.' },
              { label: '2 · MFA with Okta Verify', text: 'A second check that it is really you. Install the free <b>Okta Verify</b> app on your phone (5–10 minutes to set up).' },
              { label: '3 · SSO', text: 'One sign-on screen for all university apps: your UniKey and password, then a push notification from Okta Verify.' }
            ] },
            { type: 'cloze', id: 'd2-cl', title: 'Fill in the blanks', options: ['Unikey', 'Student ID', 'Okta Verify', 'Multi-factor', 'SSO', 'push notification'],
              text: 'Your {{1}} is a unique identification for all students at Sydney University. It is alphanumeric and is not the same as your {{2}}, which is only numeric. You will also be asked to use the {{3}} app for {{4}} identification, to prove that it is you signing in. For ease of access, an {{5}} screen is shown when you open university applications. You sign in with your Unikey and password and receive a {{6}} to confirm it is you.',
              answers: ['Unikey', 'Student ID', 'Okta Verify', 'Multi-factor', 'SSO', 'push notification'] },
            { type: 'checklist', id: 'd2-set', title: 'Do it now', meter: ['done', 'Your account is secure!'], items: ['I can log in to Canvas with my UniKey.', 'Okta Verify is installed and set up on my phone.', 'My mobile number and personal email are saved in Sydney Student (so I can reset my password).'] },
            { type: 'tip', text: 'Forgotten your UniKey password? Reset it online if your mobile number and personal email are in Sydney Student — or visit a staffed Learning Hub on campus with photo ID.' }
          ]
        },
        {
          id: 'd3', short: 'Canvas', minutes: 10, grouping: 'Homework',
          title: 'Find it on Canvas',
          goal: 'Know where to go on the DEC10 Canvas page when you need help.',
          blocks: [
            { type: 'quiz', id: 'd3-q', title: 'How quickly can you find it? Which section do you go to?', shared: ['Student Portal', 'Feeling Unwell?', 'Wellbeing'], items: [
              { q: 'You are not feeling great and would like to see a health provider, but you are unsure what is available to you.', answer: 'Feeling Unwell?', why: 'This section has useful phone numbers and websites to help you get medical support.' },
              { q: 'You feel like you are falling behind in class and you are unsure why. It is making you sad.', answer: 'Wellbeing', why: 'This is where you can learn about mental health and how to manage it, and find upcoming wellbeing workshops.' },
              { q: 'You would like to make sure that you are up to date with your engagement tasks.', answer: 'Student Portal', why: 'This is where you check your student engagement, learning support and assessment results.' }
            ] }
          ]
        },
        {
          id: 'd4', short: 'Toolbox', minutes: 10, grouping: 'Homework',
          title: 'Your digital toolbox',
          goal: 'Know which tool you need for which job in DEC10.',
          blocks: [
            { type: 'cards', items: [
              { label: 'Studio (in Canvas)', text: 'Record your screen and share videos. You need it for your <b>Portfolio</b> video. Download the app the first time.' },
              { label: 'LockDown Browser', text: 'You take your <b>LRW assessments</b> in it. Install it and do the practice quiz early — see <b>Assessments</b> in the side panel.' },
              { label: 'MS Forms', text: 'Make a quick survey or poll; it creates graphs for you.' },
              { label: 'Padlet', text: 'A shared wall for group brainstorming.' },
              { label: 'Canva', text: 'Mind maps, posters and slides.' },
              { label: 'Quizlet', text: 'Practise and revise vocabulary.' }
            ] },
            { type: 'fields', fields: [
              { id: 'd4-try', label: 'Which tool will you try this week, and for what?', rows: 2, placeholder: 'I will use … to …' }
            ] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['rhetorical function', 'the job a piece of language does, e.g. explaining a cause or recommending', '“Therefore” shows the function of cause and effect.'],
    ['framework', 'a set of ideas used to explain or analyse something', 'The DTM is a framework for population change.'],
    ['affluence', 'in IPAT: consumption, measured as GDP per person (not simply “wealth”)', 'Rising affluence increases environmental impact.'],
    ['opening remarks', 'the first, short (5–7 minute) presentation of your seminar group', 'Our opening remarks introduce our country.'],
    ['seminar', 'your group’s 10–12 minute presentation followed by a class discussion', 'Our seminar is in Week 4.'],
    ['portfolio', 'the place where your group uploads its summaries, reflections and video', 'We uploaded our reflection to the portfolio.'],
    ['UniKey', 'your university username and password (format abcd1234)', 'Log in to Canvas with your UniKey.'],
    ['MFA', 'multi-factor authentication: a second check that it is you', 'Okta Verify is used for MFA.']
  ]
};
