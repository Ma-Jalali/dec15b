/* DEC10 · Week 1 Day 2 — one context runs through the day: the frameworks solve three real mysteries and a
   fictional case (Corvania and a new lithium mine); the language of rhetorical functions comes out of the
   Corvania town hall. Then the Seminar, and (homework) digital tools.
   Teacher's Book lessons 6A, 7A, 8A, 9A. The core readings, the listening and the TB discussion prompt are kept.
   Phrase banks are deliberately short: only language a B2 student will really use.
   Keep the id 'd10w1d2' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d2',
  week: 1, day: 2,
  title: 'Solve it, plan it, argue it',
  duration: 'About 4 hours + homework',
  question: 'Which sustainability framework would you trust to explain a real problem — and what does it miss?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question · you will need it for your Seminar',
  journey: 'Solve three real mysteries with the frameworks, advise the government of Corvania about a new mine, choose your Seminar country — then argue about the mine at the town hall and discover the language that does each job.',
  image: 'dec10/assets/week1/hero-d10w1d2.svg',
  imageAlt: 'Illustration: three framework cards — the triple bottom line circles, the equation I = P × A × T and a population pyramid — on a whiteboard, with speech bubbles reading because, as a result and should.',
  finish: { title: 'Day 3', text: 'Paraphrasing and feedback' },
  goalShort: 'your Seminar and the speaking assessments',

  sections: [
    /* ───────────────────────── 6A · Reading and listening to speak ─────────────────────────
       Redesigned around a purpose for talking: three real mysteries that only the frameworks can explain,
       then one fictional case (Corvania) that every group must diagnose. The Teacher's Book discussion
       prompt (criticisms of the frameworks) is kept, and now grows out of the case. */
    {
      id: 'frameworks', number: '01', code: '6A', minutes: 60,
      tone: 'teal', art: 'dec10/assets/week1/s-teach.svg',
      title: 'Reading and listening to speak',
      subtitle: 'Three mysteries, one case, three frameworks',
      outcome: 'You can explain the triple bottom line, the IPAT equation or the DTM clearly from your notes, use them to explain real problems, and judge what each framework misses.',
      activities: [
        {
          id: 'f1', short: 'Mysteries', minutes: 8, grouping: 'Groups of 3–4',
          title: 'Three mysteries',
          goal: 'Guess the answers now. By the end of this hour, you will be able to explain them.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/mysteries.svg', size: 'wide', alt: 'Three mystery cards. Mystery 1: Japan — people live longer than almost anywhere, but the population has been shrinking since about 2010; Niger — women have about six or seven children on average, and the population is growing fast. Why? Mystery 2: a new car today uses far less fuel per kilometre than a new car in 1970, but the world’s cars and trucks produce several times more CO2 than in 1970. How? Mystery 3: since 1988, 100 fossil fuel producers have been responsible for 71% of global industrial greenhouse gases, and many made huge profits. Were they successful companies?', caption: 'Three real mysteries.', credit: 'Mystery 3: Harvard Business School Online (2022), the video from Day 1.' },
            { type: 'steps', items: [
              { who: 'group', text: 'Read the three mysteries. For each one, agree on your group’s best <b>guess</b>. Don’t check online!' },
              { who: 'group', text: 'Decide: which framework from Day 1 (the triple bottom line, IPAT or the DTM) do you think explains each mystery?' }
            ] },
            { type: 'fields', fields: [
              { id: 'f1-m1', label: 'Mystery 1 · Japan and Niger — our guess', rows: 2, placeholder: 'Maybe because …' },
              { id: 'f1-m2', label: 'Mystery 2 · Better cars, more CO₂ — our guess', rows: 2, placeholder: 'Maybe because …' },
              { id: 'f1-m3', label: 'Mystery 3 · Profitable but…? — our guess', rows: 2, placeholder: 'It depends on …' }
            ] }
          ]
        },
        {
          id: 'f2', short: 'Brief', minutes: 10, grouping: 'Alone',
          title: 'Prepare your expert briefing',
          goal: 'Turn your homework notes into a 90-second briefing that solves one mystery.',
          blocks: [
            { type: 'key', title: 'You are the expert', points: [
              'Last night you read about <b>either</b> the DTM <b>or</b> the IPAT equation. Your partner read the other one.',
              'Your briefing has two parts: <b>(1)</b> how your framework works, <b>(2)</b> how it solves your mystery (DTM → Mystery 1, IPAT → Mystery 2).',
              'Speak from your diagram, not from full sentences. You have 90 seconds.'
            ] },
            { type: 'tabs', title: 'Your note organiser', tabs: [
              { label: 'DTM experts', blocks: [
                { type: 'figure', src: 'dec10/assets/week1/dtm-organiser.svg', size: 'wide', alt: 'DTM note organiser: four stages from left to right — preindustrial, early expanding, late expanding, postindustrial — each with a small population pyramid and boxes for birth rate, death rate and growth, plus a box for criticism.', caption: 'Which stage is Niger in? Which stage is Japan in — or is there a fifth?' }
              ] },
              { label: 'IPAT experts', blocks: [
                { type: 'figure', src: 'dec10/assets/week1/ipat-organiser.svg', size: 'wide', alt: 'IPAT note organiser: Impact equals Population times Affluence times Technology, with three boxes underneath: History, Application, Criticism.', caption: 'Which letter got better for cars since 1970? Which letters grew?' }
              ] }
            ] },
            { type: 'fields', fields: [
              { id: 'f2-how', label: 'Part 1 · How my framework works (key words only)', rows: 3 },
              { id: 'f2-solve', label: 'Part 2 · How it solves my mystery (key words only)', rows: 3 }
            ] },
            { type: 'language', groups: [
              { label: 'Explaining a framework', phrases: ['This model explains how …', 'In other words, …', 'That’s why …'] }
            ] }
          ]
        },
        {
          id: 'f3', short: 'Solve', minutes: 12, grouping: 'Pair (DTM + IPAT)',
          title: 'Brief your partner — then solve the mysteries',
          goal: 'Listen to your partner’s briefing carefully: you need it to solve their mystery.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'DTM expert: 90 seconds. Your partner listens, then asks <b>one</b> question.' },
              { who: 'pair', text: 'IPAT expert: 90 seconds. Your partner listens, then asks <b>one</b> question.' },
              { who: 'pair', text: 'Together, solve Mystery 3 with the triple bottom line from Day 1. Then bet below.' }
            ] },
            { type: 'language', groups: [
              { label: 'Asking your expert', phrases: ['Sorry, what do you mean by …?', 'So, is it because …?', 'Could you give an example?'] }
            ] },
            { type: 'bet', id: 'f3-bet', title: 'Solve the mysteries', proof: 'Bet big only if your partner’s briefing gave you proof.', coins: 10, items: [
              { q: '<b>Mystery 1</b> · Why is Japan’s population shrinking while Niger’s is growing fast?', options: ['Japan’s government limits family size, while Niger’s government pays families to have more children.', 'They are at different DTM stages: Niger’s birth rate is still high, while Japan’s birth rate has fallen below its death rate.', 'Many young Japanese people emigrate, while Niger receives many immigrants from richer countries.'], answer: 'They are at different DTM stages: Niger’s birth rate is still high, while Japan’s birth rate has fallen below its death rate.', why: 'Hanks (2019): the model “overlooks the emerging trend of population decline in some advanced nations, suggesting a possible fifth stage.” Japan may be in that fifth stage.' },
              { q: '<b>Mystery 2</b> · Why do cars produce more CO₂ than in 1970 if each car uses less fuel?', options: ['Cars became more efficient, but modern fuel is dirtier, so each litre now produces more CO₂.', 'Technology (T) improved, but population (P) and affluence (A) — more cars, more driving — grew much faster.', 'Most cars on the road today are still old models that were built before the 1990s.'], answer: 'Technology (T) improved, but population (P) and affluence (A) — more cars, more driving — grew much faster.', why: 'I = P × A × T. Chertow (2001): technology “might reduce some negative impacts” but “can’t solve all environmental problems and might just delay them.”' },
              { q: '<b>Mystery 3</b> · Were the 100 fossil fuel producers successful companies?', options: ['Yes: high profits mean they served shareholders well, so they succeeded on every bottom line.', 'Only on one bottom line: strong on profit, but they failed on planet, which also affects people.', 'No: companies with high emissions always lose money in the long run, so they cannot be successful.'], answer: 'Only on one bottom line: strong on profit, but they failed on planet, which also affects people.' }
            ] },
            { type: 'talk', title: 'Look back at your guesses from the start', prompts: ['How close was your group? What do the frameworks let you see that you could not see before?'] }
          ]
        },
        {
          id: 'f4', short: 'The case', minutes: 15, grouping: 'Groups of 3',
          title: 'The case: Corvania',
          goal: 'Use your framework to diagnose a country’s problem — then compare lenses.',
          blocks: [
            { type: 'key', title: 'Your first client', points: [
              'You are three junior advisers at a sustainability consultancy. The government of <b>Corvania</b> (a fictional country) asks: <b>“Should we approve Kestrel Mining’s new lithium mine on the Tavi River?”</b>',
              'Each of you looks at the case through <b>one</b> framework: the DTM, IPAT or the triple bottom line.'
            ] },
            { type: 'figure', src: 'dec10/assets/week1/corvania.svg', size: 'wide', alt: 'Case file: Corvania, a fictional country. Population: 6 million in 1980, 12 million in 2000, 19 million in 2024; births per woman fell from 6.4 to 2.9; deaths per 1,000 people fell from 18 to 7. Economy: GDP per person has tripled since 2000; cars per 1,000 people rose from 40 to 210; 68% of electricity comes from coal; total CO2 emissions are 2.6 times higher than in 2000, but CO2 per dollar of GDP has fallen by 20%. Kestrel Mining: Corvania’s largest company; record profit of 2.1 billion dollars; 4,000 workers; 9% of the government’s tax income; mines lithium for electric car batteries; fish deaths on the Tavi River in 2023; 30 villages depend on the river. The new mine would add 1,200 jobs, upstream on the Tavi River.', caption: 'Case file · Corvania (fictional).' },
            { type: 'cards', pick: 'f4-lens', title: 'Choose your lens (one each)', items: [
              { label: 'DTM', text: 'Which stage is Corvania in? What will its population look like in 20 years — and why does that matter for jobs?' },
              { label: 'IPAT', text: 'Which of P, A and T are rising? Is technology winning? What would the new mine do to I?' },
              { label: 'Triple bottom line', text: 'Is Kestrel successful on profit, people and planet? Who are the stakeholders?' }
            ] },
            { type: 'fields', fields: [
              { id: 'f4-diag', label: 'My diagnosis: through my lens, Corvania’s main problem is … because …', rows: 3 },
              { id: 'f4-miss', label: 'What my lens CANNOT see in this case', rows: 2, placeholder: 'My framework doesn’t tell us anything about …' }
            ] },
            { type: 'steps', items: [
              { who: 'group', text: 'Each adviser gives their diagnosis in one minute.' },
              { who: 'group', text: 'Agree: which lens explains the most? Should the government approve the mine — yes, no, or yes with conditions?' }
            ] }
          ]
        },
        {
          id: 'f5', short: 'On trial', minutes: 15, grouping: 'Groups of 3',
          title: 'Put the frameworks on trial',
          goal: 'You found their limits in the case. Now judge the critics.',
          blocks: [
            { type: 'key', title: 'The discussion prompt', points: [
              'The Triple Bottom line, the IPAT equation and the DTM were proposed as frameworks to explain sustainability related issues. They all have supporters and critics.',
              'Summarise the criticism of all of the frameworks.',
              'Are those criticisms valid?',
              'In your opinion, as they stand, would these frameworks be able to satisfactorily address current sustainability challenges?'
            ] },
            { type: 'table', id: 'f4-trial', title: 'The trial — use Corvania as your evidence', columns: ['The main criticism', 'Did we see it in the Corvania case?', 'Is it valid?'], fixed: ['Triple bottom line', 'IPAT equation', 'DTM'] },
            { type: 'toggle', title: 'Stuck? Where the criticism comes from', hint: 'Open only if your group needs it', blocks: [
              { type: 'cards', items: [
                { label: 'DTM · Hanks (2019)', text: 'Built on Western experience; may not fit developing countries; misses population <b>decline</b> (a possible fifth stage). Did it tell you anything about the river?' },
                { label: 'IPAT · Chertow (2001)', text: 'Impact is hard to define and measure; technology may only <b>delay</b> problems. Corvania’s CO₂ per dollar fell — but total CO₂ still rose.' },
                { label: 'Triple bottom line', text: 'The video gives no criticism — it is promotional. How do you put a number on “people” or “planet”? Who decides when a $2.1 billion profit outweighs 30 villages?' }
              ] }
            ] },
            { type: 'scale', id: 'f4-scale', title: 'Your group’s verdict', statement: 'As they stand, these frameworks can satisfactorily address current sustainability challenges.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Partly' },
            { type: 'fields', fields: [
              { id: 'f4-big', label: 'Big question: which framework would you trust to explain a real problem — and what does it miss?', rows: 2, placeholder: 'I would trust … because … However, it misses …' }
            ] },
            { type: 'tip', text: 'Keep your Corvania notes. This afternoon you will argue about the mine at the Corvania town hall.' }
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
              'This morning you advised a fictional country with one framework. In the Seminar your group does the same for a <b>real</b> country — and the class asks the questions.',
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
              'Use <b>one</b> framework (IPAT, triple bottom line or DTM) — or even <b>one aspect</b> of it. Just like your lens on Corvania this morning.',
              'Use it in the Opening Remarks <b>or</b> the seminar (not necessarily both).',
              'Use it to describe the background, to explain causes and effects, or to <b>evaluate</b> solutions.',
              'Your research must come from reputable academic sources, and you must cite them.'
            ] },
            { type: 'quiz', id: 's3-q', title: 'Which group used the framework better?', items: [
              { q: 'In the Corvania case, which use of IPAT is better? <b>A</b>: “IPAT is an important equation.” <b>B</b>: “CO₂ per dollar fell by 20% (T improved), but total CO₂ rose 2.6 times because P and A grew faster.”', options: ['A', 'B'], answer: 'B', why: 'B uses the framework to explain the case. A only names it.' },
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

    /* ───────────────────────── 8A · Introduction to rhetorical functions ─────────────────────────
       Redesigned so the language comes out of a context: the Corvania town hall about the new mine.
       Students argue first, then meet four texts from the same story (a news report, a company press release,
       a university report, a youth group’s proposal) and find the language that does each job.
       The four functions follow DEC10’s list (14A): cause and effect, arguing and persuading, evaluating,
       problem-solving. The Teacher’s Book sample paragraphs (plants, housing, group work) are replaced by
       these context texts; its review sentences are rewritten as town-hall quotes. */
    {
      id: 'functions', number: '03', code: '8A', minutes: 90,
      tone: 'plum', art: 'dec10/assets/week1/s-functions.svg',
      title: 'Academic writing skills: Introduction to rhetorical functions',
      subtitle: 'The Corvania town hall',
      outcome: 'You can identify four rhetorical functions in texts about one real-world issue, recognise the language that shows them, and use them to argue and to write.',
      activities: [
        {
          id: 'r1', short: 'Town hall', minutes: 20, grouping: 'Groups of 4–5',
          title: 'The Corvania town hall',
          goal: 'Argue about the new mine — before we name the language you use.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/townhall.svg', size: 'wide', alt: 'The Tavi Valley town hall: five people around a table under a banner reading “New Tavi mine: yes or no?” — the mayor, the Kestrel Mining CEO, a fisher, a scientist and a youth climate leader.', caption: 'Tonight’s meeting: “New Tavi mine — yes or no?”' },
            { type: 'cards', title: 'The five roles', numbered: true, items: [
              { label: 'The mayor (chair)', text: 'Open the meeting. Give everyone a turn. Stop people who talk too long. End with a vote. <i>(Groups of 4: no mayor; the scientist chairs.)</i>' },
              { label: 'Kestrel Mining CEO', text: 'You want a YES. 1,200 new jobs, tax for schools and hospitals, and lithium for electric car batteries. The fish deaths were “one accident”.' },
              { label: 'A fisher from the river', text: 'You want a NO. Explain what happened in 2023: the waste, the dead fish, the lost income, the young people who left.' },
              { label: 'A scientist, Corvania University', text: 'You have no side. Judge each argument: is the evidence strong? What is missing? What are the risks?' },
              { label: 'Youth climate leader', text: 'You want a solution. Propose conditions that could make the mine acceptable — or an alternative.' }
            ] },
            { type: 'spinner', id: 'r1-spin', title: 'Get your role', text: 'Spin until everyone in your group has a different role. Take 3 minutes to prepare using the Corvania case file from this morning.', reels: [
              { label: 'Role', start: 'Spin!', items: ['The mayor', 'Kestrel Mining CEO', 'A fisher', 'A scientist', 'Youth climate leader'] }
            ] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Prepare: your position, two arguments, and what the others will say against you.' },
              { who: 'group', text: 'Hold the meeting for 8 minutes. The mayor ends with a vote.' }
            ] },
            { type: 'fields', fields: [{ id: 'r1-vote', label: 'Our town hall vote', rows: 1, placeholder: 'YES / NO / YES with conditions: …' }] }
          ]
        },
        {
          id: 'r2', short: 'Jobs', minutes: 10, grouping: 'Group',
          title: 'Every speaker had a job',
          goal: 'Notice that each role used language for a different purpose.',
          blocks: [
            { type: 'match', id: 'r2-m', title: 'What was each speaker’s main job?', hint: 'Tap a role, then its job.', left: ['The fisher', 'The Kestrel CEO', 'The scientist', 'The youth climate leader'], right: [
              'Explaining cause and effect: why something happened, and what happened as a result',
              'Arguing and persuading: giving reasons to convince people to agree',
              'Evaluating: judging how strong, useful or significant something is',
              'Problem-solving: identifying an issue and proposing a solution'
            ] },
            { type: 'key', title: 'These jobs have a name: rhetorical functions', points: [
              'A rhetorical function is the <b>purpose</b> of a piece of language: what the speaker or writer wants it to do.',
              'In DEC10 you focus on four: <b>cause and effect</b>, <b>arguing and persuading</b>, <b>evaluating</b> and <b>problem-solving</b>.',
              'You will need all four in your Seminar and in your integrated writing.'
            ] },
            { type: 'talk', title: 'In your group', prompts: ['Which job was the easiest to do in English tonight? Which was the hardest — and what words were you missing?'] }
          ]
        },
        {
          id: 'r3', short: 'Four texts', minutes: 25, grouping: 'Pair',
          title: 'The story in four texts',
          goal: 'Read four texts about the mine, decide the job of each, and find the language that does it.',
          blocks: [
            { type: 'tabs', title: 'Four texts about the Tavi mine', tabs: [
              { label: 'A · News report', blocks: [{ type: 'model', title: 'Corvania Herald · “Dead fish on the Tavi”', text: 'Hundreds of dead fish were found on the Tavi River last March. Scientists say the deaths were caused by high levels of chemicals in the water. The chemicals came from Kestrel’s mine because heavy rain washed waste from the site into the river. As a result, 30 villages lost their main source of food and income. Due to the drop in fish numbers, many young people have left the valley to find work in the city, which has led to a shortage of workers on local farms.' }] },
              { label: 'B · Company statement', blocks: [{ type: 'model', title: 'Kestrel Mining · press release', text: 'The new Tavi mine is good news for every Corvanian. The first thing to be considered is jobs: the mine will create 1,200 new jobs in a region where young people are leaving. Clearly, the world needs lithium for electric car batteries, and Corvania can supply it. If we approve the mine, we will pay more tax for schools and hospitals. This approach will bring clean energy and new opportunities at the same time.' }] },
              { label: 'C · University report', blocks: [{ type: 'model', title: 'Corvania University · report summary', text: 'This finding is significant because it is the first long-term study of water quality on the Tavi River. The data show that the 2023 fish deaths were not an isolated accident: chemical levels had been rising since 2019. The mine would bring real economic benefits; however, the company’s plan only covers the next five years. Its promise of jobs is convincing, but its plan for protecting the river is weak. A five-year plan may not always be appropriate for a mine that will operate for forty years.' }] },
              { label: 'D · Youth group proposal', blocks: [{ type: 'model', title: 'Tavi Youth Climate Group · our proposal', text: 'One issue with the current plan is that the new mine would be only two kilometres from the river. One way to address this issue is to build it further from the water. In addition, Kestrel should pay for a water-cleaning plant before any mining begins. It is recommended that an independent team tests the river every month and publishes the results online.' }] }
            ] },
            { type: 'sort', id: 'r3-sort', title: '1 · What is the main job of each text?', buckets: [
              { label: 'Evaluating', letter: '1' }, { label: 'Problem-solving', letter: '2' }, { label: 'Cause and effect', letter: '3' }, { label: 'Arguing and persuading', letter: '4' }
            ], items: [
              { text: '<b>A</b> · News report: “Dead fish on the Tavi”', answer: 2 },
              { text: '<b>B</b> · Kestrel Mining press release', answer: 3 },
              { text: '<b>C</b> · Corvania University report', answer: 0 },
              { text: '<b>D</b> · Youth group proposal', answer: 1 }
            ] },
            { type: 'spot', id: 'r3-spot', label: 'Find the language', title: '2 · Tap the phrases that do each job', hint: 'There are 18 phrases that show the function. Some highlighted words are only content — leave them.', paras: [
              'Hundreds of dead fish were found on the Tavi River [[last March]]. Scientists say the deaths were [[*caused by]] high levels of chemicals in the water. The chemicals came from Kestrel’s mine [[*because]] heavy rain washed waste from the site into the river. [[*As a result]], [[30 villages]] lost their main source of food and income. [[*Due to]] the drop in fish numbers, many young people have left the valley to find work in the city, [[*which has led to]] a shortage of workers on local farms.',
              'The new Tavi mine is good news for every Corvanian. [[*The first thing to be considered is]] jobs: the mine will create [[1,200 new jobs]] in a region where young people are leaving. [[*Clearly]], the world needs lithium for [[electric car batteries]], and Corvania can supply it. [[*If we approve the mine, we will]] pay more tax for schools and hospitals. [[*This approach will]] bring clean energy and new opportunities at the same time.',
              '[[*This finding is significant because]] it is the first long-term study of water quality on the Tavi River. The data show that the 2023 fish deaths were not an isolated accident: chemical levels had been rising [[since 2019]]. The mine would bring real economic benefits; [[*however]], the company’s plan only covers the next five years. Its promise of jobs [[*is convincing, but]] its plan for protecting the river [[*is weak]]. A five-year plan [[*may not always be appropriate]] for a mine that will operate for forty years.',
              '[[*One issue with]] the current plan is that the new mine would be only [[two kilometres]] from the river. [[*One way to address this issue is]] to build it further from the water. In addition, Kestrel [[*should]] pay for a water-cleaning plant before any mining begins. [[*It is recommended that]] an independent team tests the river every month and publishes the results online.'
            ] }
          ]
        },
        {
          id: 'r4', short: 'because / due to', minutes: 12, grouping: 'Pair',
          title: 'The grammar inside the news report',
          goal: 'Work out the rule yourself from text A — then use it.',
          blocks: [
            { type: 'model', title: 'Two sentences from text A', rows: [
              ['because', '… <b>because</b> heavy rain washed waste from the site into the river.'],
              ['due to', '<b>Due to</b> the drop in fish numbers, many young people have left the valley …']
            ] },
            { type: 'quiz', id: 'r4-q', title: 'Work out the rule', items: [
              { q: 'What comes after <b>because</b>?', options: ['a full sentence (subject + verb): heavy rain washed …', 'only a noun: the rain'], answer: 'a full sentence (subject + verb): heavy rain washed …' },
              { q: 'What comes after <b>due to</b> (and <b>because of</b>)?', options: ['a full sentence: the fish numbers dropped', 'a noun phrase: the drop in fish numbers'], answer: 'a noun phrase: the drop in fish numbers' },
              { q: 'Which sentence is correct?', options: ['Emissions are rising because of there are more cars.', 'Emissions are rising because there are more cars.'], answer: 'Emissions are rising because there are more cars.' }
            ] },
            { type: 'cloze', id: 'r4-cl', title: 'Now use it: the Corvania story', options: ['because', 'because of', 'As a result'],
              text: 'Many families left the valley {{1}} the fish died. Farms are now short of workers {{2}} the move to the city. Coal produces 68% of Corvania’s electricity. {{3}}, its emissions are high. Emissions also keep rising {{4}} there are more cars on the roads. The government delayed its decision {{5}} the protests.',
              answers: ['because', 'because of', 'As a result', 'because', 'because of'] },
            { type: 'tip', text: 'This is the most common error in cause-and-effect writing at B2. Check every <b>because</b> in your next paragraph: sentence or noun?' }
          ]
        },
        {
          id: 'r5', short: 'Who said it?', minutes: 8, grouping: 'Alone',
          title: 'Overheard at the town hall',
          goal: 'Check that you can recognise all four functions.',
          blocks: [
            { type: 'sort', id: 'r5-sort', title: 'Which job does each quote do?', buckets: [
              { label: 'Cause and effect' }, { label: 'Arguing and persuading' }, { label: 'Evaluating' }, { label: 'Problem-solving' }
            ], items: [
              { text: '“The fish died because waste entered the river.”', answer: 0 },
              { text: '“If we say no to this mine, our children will leave Corvania.”', answer: 1 },
              { text: '“The jobs are real, but the report only looks at the next five years.”', answer: 2 },
              { text: '“One way to protect the river is to build the mine further from the water.”', answer: 3 },
              { text: '“Car ownership has risen five times; as a result, emissions are much higher.”', answer: 0 },
              { text: '“Clearly, lithium is the future of clean energy.”', answer: 1 },
              { text: '“This finding is significant: it is the first study of the Tavi River.”', answer: 2 },
              { text: '“Kestrel should pay for a water-cleaning plant.”', answer: 3 }
            ] },
            { type: 'language', title: 'The phrases worth keeping', groups: [
              { label: 'Cause and effect', phrases: ['… because + sentence', '… due to / because of + noun', 'As a result, …'] },
              { label: 'Arguing and persuading', phrases: ['The first thing to be considered is …', 'If we …, we will …', 'Clearly, …'] },
              { label: 'Evaluating', phrases: ['This finding is significant because …', '… is convincing, but …', '… may not always be appropriate.'] },
              { label: 'Problem-solving', phrases: ['One issue with … is …', 'One way to address this issue is …', '… should …'] }
            ] }
          ]
        },
        {
          id: 'r6', short: 'Memo', minutes: 15, grouping: 'Pair → Alone',
          title: 'Your memo to the Minister',
          goal: 'Advise the government in four sentences — one for each function.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Town hall, round 2 (4 minutes): swap roles with your partner and argue again. This time, use at least <b>two</b> phrases from the bank on purpose.' },
              { who: 'alone', text: 'Write your advice to the Minister: one sentence for each function. Use the case file and the four texts.' }
            ] },
            { type: 'fields', fields: [
              { id: 'r6-ce', label: '1 · Cause and effect: what is happening in the Tavi Valley, and why?', rows: 2, placeholder: 'Due to … , … / … because … / As a result, …' },
              { id: 'r6-ev', label: '2 · Evaluating: how strong is Kestrel’s case?', rows: 2, placeholder: 'Kestrel’s promise of … is convincing, but …' },
              { id: 'r6-ps', label: '3 · Problem-solving: what conditions are needed?', rows: 2, placeholder: 'One way to address this issue is …' },
              { id: 'r6-ar', label: '4 · Arguing and persuading: your final recommendation', rows: 2, placeholder: 'If the government …, it will …' }
            ] },
            { type: 'talk', title: 'Last 2 minutes', prompts: ['Look at your Seminar question. Which of the four functions will you need most to answer it? Why?'] },
            { type: 'checklist', id: 'r6-can', title: 'Can you do this?', meter: ['ticked', 'Ready for Day 4!'], items: [
              'I can explain what a rhetorical function is.',
              'I can recognise cause and effect, arguing and persuading, evaluating and problem-solving in a text.',
              'I can use because, because of and due to correctly.',
              'I can use at least one phrase for each function when I speak and write.'
            ] }
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
