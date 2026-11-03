/* DEC10 · Week 2 · Day 2 — Listen, compare, connect.
   Teacher's Book: W2 D2. 5A Research summary presentations · 6A Listening to speak · 7A Mediation ·
   8A Presentation skills Homework · 9A Listening Assessment Preparation Homework.
   Protected texts (the podcast transcript and the two readings) live in dec10/lessons/week2/sources.js — never retype them here.
   Ids are the keys of students' saved work: never rename them after students start. */
window.DEC15_LESSON = {
  id: 'd10w2d2',
  week: 2, day: 2,
  title: 'Listen, compare, connect',
  duration: 'About 4 hours + homework',
  question: 'Every click has a cost — so who should pay it: you, the tech companies or the government?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question · you will need it for your group presentation',
  journey: 'Share your research and plan your group talk, listen to a UN podcast and catch the language of cause and effect, compare three sources like a researcher, then learn how good presenters open and close a talk.',
  image: 'dec10/assets/week2/hero-d10w2d2.svg',
  imageAlt: 'Illustration: a podcast microphone with sound waves in the middle. Around it float a phone, a laptop, a data centre, a cloud of CO2, and three source cards joined by arrows marked “cause”, “effect”, “similarly” and “whereas”.',
  finish: { title: 'Day 3', text: 'Presentation skills, asking good questions — and Groups 1 and 2 present' },
  goalShort: 'your group research summary presentation',

  sections: [
    /* ───────────────────────── 5A ───────────────────────── */
    {
      id: 'rsgroup', number: '01', code: '5A', minutes: 30,
      tone: 'plum', art: 'dec10/assets/week2/s-rsgroup.svg',
      title: 'Research summary presentations',
      subtitle: 'Be the expert — then turn four summaries into one talk',
      outcome: 'You say your 2-minute research summary without reading, ask good questions, and plan a group presentation that groups ideas instead of listing them.',
      activities: [
        {
          id: 'a1', short: 'How did it go?', minutes: 5, grouping: 'Groups of 3–4', art: 'dec10/assets/week2/v/v-d10w2d2-a1.svg',
          title: 'Activity 1 · Share your individual research summaries',
          goal: 'Talk about how you did your research — the topic, the sources and the problems.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d2-rs-timeline.svg', size: 'wide', alt: 'Timeline of the research summary task. Day 1: you research and prepare a summary on your own. Day 2 (today, highlighted): you share your summary in a group, then your group plans one presentation. Days 3 and 4: groups give their 8–10 minute presentations.', caption: 'You are here: <b>Day 2</b>. Today you share, then you plan.' },
            { type: 'do', n: 1, who: 'group', text: 'Make a group of <b>3 or 4</b>. Spin the wheel. Answer the question in <b>one minute</b>. Then the next person spins.' },
            { type: 'spinner', id: 'a1-spin', title: 'Talk about your research', text: 'Everyone answers every question by the end. Give a real example each time.', reels: [{ label: 'Question', items: [
              'What part of the topic did you choose to research — and why that part?',
              'How and where did you look for your sources?',
              'Did you have trouble finding useful sources? What did you do?',
              'Which AST research skills did you use? (a database search, the library, the CRAAP test …)',
              'What was the most surprising thing you found?',
              'If you started again, what would you do differently?'
            ] }] },
            { type: 'language', title: 'Useful language: talking about your research', groups: [
              { label: 'Your focus', phrases: ['I decided to focus on … because …', 'I chose this part of the topic as …', 'My research looks at the causes / effects of …'] },
              { label: 'Your sources', phrases: ['I searched the library database for …', 'I used the key words … and …', 'I found two useful sources: …', 'I checked the source with the CRAAP test — it is current because …'] },
              { label: 'Problems and solutions', phrases: ['At first I couldn’t find …, so I …', 'Most of the results were too old / too general.', 'What really helped was …', 'Next time, I would …'] }
            ] },
            { type: 'tip', text: '<b>Be honest.</b> Problems are normal in research. Your teacher wants to help with them now — before you present.' }
          ]
        },
        {
          id: 'a2', short: 'Rehearse', minutes: 3, grouping: 'Alone', art: 'dec10/assets/week2/v/v-d10w2d2-a2.svg',
          title: 'Revise your notes',
          goal: 'Get ready to SAY your summary, not read it.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Read your notes for <b>2 minutes</b>. Circle any word that is hard to say. Ask your teacher how to say it.' },
            { type: 'do', n: 2, who: 'alone', text: 'Look up from your notes. Say your summary quietly to yourself. <b>Say it — don’t read it!</b>' },
            { type: 'flip', title: 'Four secrets of a good 2-minute summary', hint: 'Guess the secret, then turn the card.', items: [
              { front: 'Notes, not a script', back: 'Write key words and numbers only. A full script makes you read — and the audience stops listening.' },
              { front: 'Big idea first', back: 'Start with the main finding. Add one or two details. Stop.' },
              { front: 'Name your source', back: 'Say who wrote it and when: “According to Smith (2023) …”.' },
              { front: 'Eyes up', back: 'Look at your groupmates, not your page. Look down only to find the next key word.' }
            ] },
            { type: 'language', title: 'A frame for your 2-minute summary', groups: [
              { label: 'Start', phrases: ['The article I chose is called … It was written by … in …', 'My research focuses on …'] },
              { label: 'Main idea', phrases: ['The main finding is that …', 'According to … (2023), …', 'The writer argues / explains / shows that …'] },
              { label: 'Details', phrases: ['For example, …', 'One surprising number is …', 'This happens because … / This leads to …'] },
              { label: 'Finish', phrases: ['So, in short, …', 'What I found most interesting was …', 'I’d be happy to answer any questions.'] }
            ] }
          ]
        },
        {
          id: 'a3', short: 'Be the expert', minutes: 7, grouping: 'Groups of 3–4', art: 'dec10/assets/week2/v/v-d10w2d2-a3.svg',
          title: 'Share your summaries',
          goal: 'Give your 2-minute summary as the expert, and ask questions to check you understand the others.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Take turns. Say (not read!) your <b>2-minute</b> summary. One person keeps time.' },
              { who: 'group', text: 'After each summary, every listener asks <b>1–2 questions</b> to check they understand.' },
              { who: 'alone', text: 'While you listen, fill in one row of the table for each speaker. You need this to plan your group talk.' }
            ] },
            { type: 'language', title: 'Questions to check your understanding', groups: [
              { label: 'Check the meaning', phrases: ['Could you explain what you mean by …?', 'So, are you saying that …?', 'Sorry, what does … mean?'] },
              { label: 'Ask for more', phrases: ['Where does that number come from?', 'Can you give an example of …?', 'Is that a cause or an effect of the problem?'] },
              { label: 'Answer a question', phrases: ['Good question. What I mean is …', 'Let me check my notes … yes, it was …', 'I’m not sure, but the article suggests …'] }
            ] },
            { type: 'table', id: 'a3-tab', title: 'Our group’s research', columns: ['Speaker', 'Their focus', 'Main finding', 'Cause or effect?', 'My question'], fixed: ['Me', 'Student 2', 'Student 3', 'Student 4'] }
          ]
        },
        {
          id: 'a4', short: 'Tell the class', minutes: 2, grouping: 'Group → Class', art: 'dec10/assets/week2/v/v-d10w2d2-a4.svg',
          title: 'Share with the class (if time)',
          goal: 'Choose one summary from your group and tell the class about it.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Choose <b>one</b> summary from your group. Choose one reason. One person tells the class.' },
            { type: 'cards', title: 'Choose one', numbered: true, items: [
              { label: 'Most relevant', text: 'The article that best helps us understand this week’s topic.' },
              { label: 'Most interesting', text: 'The summary you found most interesting — and why.' },
              { label: 'Most challenging', text: 'The hardest article — and why it was hard.' },
              { label: 'Your idea', text: 'Something else your group noticed.' }
            ] },
            { type: 'language', groups: [{ label: 'Report to the class', phrases: ['In our group, the most relevant summary was …’s, because …', 'We all found …’s research interesting, as …', 'The most challenging article was …, mainly because …'] }] }
          ]
        },
        {
          id: 'a5', short: 'Group it', minutes: 7, grouping: 'Same group', art: 'dec10/assets/week2/v/v-d10w2d2-a5.svg',
          title: 'Activity 2 · Prepare your group presentation',
          goal: 'Learn the big rule: group the ideas — don’t just list four summaries.',
          blocks: [
            { type: 'key', title: 'Your group presentation', points: ['<b>8–10 minutes</b>, with every member speaking.', 'This week’s focus: the <b>causes and effects</b> of our digital carbon footprint.', '<b>Don’t just list</b> each person’s summary. <b>Group</b> similar and different findings together.', 'You prepare <b>outside class</b>. Every group must be ready on Day 3.'] },
            { type: 'pairs', title: 'List or group?', items: [
              { from: '[[Student 1]] talks about data centres. [[Student 2]] talks about phones. [[Student 3]] talks about video. [[Student 4]] talks about e-waste.', to: '[[Causes:]] Students 1, 3 and 4 found that data centres, streaming and new devices increase emissions. [[Effects:]] Student 2 found that this leads to more e-waste and water use.', tag: 'Group, don’t list', note: 'The audience hears one clear story, not four separate talks.' }
            ] },
            { type: 'do', n: 1, who: 'group', text: 'Practise grouping. These are findings from four students. Put each one in the right box.' },
            { type: 'sort', id: 'a5-sort', title: 'Cause or effect of our digital carbon footprint?', hint: 'A cause makes the footprint bigger. An effect is what happens because of it.', buckets: [{ label: 'Cause', letter: 'C' }, { label: 'Effect', letter: 'E' }], items: [
              { text: 'People replace their phones every two years.', answer: 0, why: 'This makes the footprint bigger — it is a cause.' },
              { text: 'Data centres use more and more electricity.', answer: 0 },
              { text: 'Billions of people stream videos every day.', answer: 0 },
              { text: 'AI models need huge amounts of computing power.', answer: 0 },
              { text: 'Greenhouse gas emissions keep rising.', answer: 1, why: 'This is the result — an effect.' },
              { text: 'Mountains of electronic waste grow every year.', answer: 1 },
              { text: 'Water is taken from areas that are already dry.', answer: 1 },
              { text: 'More minerals must be mined from the ground.', answer: 1 }
            ] },
            { type: 'table', id: 'a5-tab', title: 'Your group template', columns: ['Student', 'Cause', 'Effect'], fixed: ['1', '2', '3', '4'] },
            { type: 'tip', text: 'Now <b>group</b> the rows: put all the causes together and all the effects together. Which findings are <b>similar</b>? Which are <b>different</b>?' }
          ]
        },
        {
          id: 'a6', short: 'Plan + agree', minutes: 8, grouping: 'Same group', art: 'dec10/assets/week2/v/v-d10w2d2-a6.svg',
          title: 'Plan your group presentation',
          goal: 'Agree on the structure, the language, the sources, the visuals and who does what.',
          blocks: [
            { type: 'order', id: 'a6-order', title: 'Put the structure in order', items: ['Introduce your group’s focus area(s)', 'Summarise each focus area (the causes, then the effects)', 'Conclude with one overall “take-away”'], ends: ['First', 'Last'], why: 'Introduction → body (grouped by focus) → conclusion. A take-away can be a surprising or controversial point, or something you want to research next.' },
            { type: 'language', title: 'Language to pass the talk to the next speaker', groups: [
              { label: 'Hand over', phrases: ['Now I’ll hand over to …, who will talk about …', '… will now explain the effects of …'] },
              { label: 'Take over', phrases: ['Thanks, … . Building on that, …', 'In contrast to …’s finding, my research shows …', 'Similarly, my source found that …'] },
              { label: 'Refer to sources', phrases: ['According to … (2022), …', 'A study by … found that …', 'As … (2024) points out, …'] }
            ] },
            { type: 'checklist', id: 'a6-check', title: 'Before you leave, agree on …', items: ['the structure: introduction, grouped body, take-away', 'the language that signals each part', 'how each person refers to their sources', 'one simple visual (a slide or a mind map)', 'good body language: eyes up, open hands, face the audience', 'when and where you will practise'] },
            { type: 'contract', id: 'a6-c', kicker: 'DEC10 · Week 2', title: 'Our research summary group', intro: 'We agree to plan, practise and present this together.', stamp: 'Presentation group', signers: 4, fields: [
              { id: 'a6-focus', label: 'Our focus', placeholder: 'The causes and effects of …' },
              { id: 'a6-who', label: 'Who speaks when', placeholder: '1 … (intro) · 2 … · 3 … · 4 … (take-away)', rows: 2 },
              { id: 'a6-visual', label: 'Our visual', placeholder: 'A mind map / two slides showing …' },
              { id: 'a6-practise', label: 'When and where we practise', placeholder: 'e.g. Tuesday 4 pm, library room 2 / online' }
            ] },
            { type: 'tip', text: '<b>Practise your presentation!</b> Groups 1 and 2 present on Day 3. Groups 3, 4 and 5 present on Day 4.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 6A ───────────────────────── */
    {
      id: 'listening', number: '02', code: '6A', minutes: 90,
      tone: 'teal', art: 'dec10/assets/week2/s-listening.svg',
      title: 'Listening to speak',
      subtitle: 'A UN podcast: why the future depends on how we manage technology',
      outcome: 'You take notes on a podcast under headings, answer test-style questions, and use cause-and-effect language to speak in a panel discussion.',
      activities: [
        {
          id: 'b1', short: 'Four corners', minutes: 8, grouping: 'Class', art: 'dec10/assets/week2/v/v-d10w2d2-b1.svg',
          title: 'Warmer: guess the numbers (optional)',
          goal: 'Guess some surprising facts about digital technology and the environment.',
          blocks: [
            { type: 'key', title: 'From yesterday to today', points: ['Yesterday you read about the digital carbon footprint of <b>our internet use</b> (Griffiths, 2020).', 'Today you listen to a <b>UN Trade and Development podcast</b>. It talks about a UN report on the digital economy and the environment.'] },
            { type: 'figure', src: 'dec10/assets/week2/d2-corners.svg', alt: 'A classroom seen from above with four corners: A at the front, B on the left, C at the back and D on the right. Small students walk towards the corners.', caption: 'Stand up! Walk to the corner of your answer: <b>A</b> front · <b>B</b> left · <b>C</b> back · <b>D</b> right.' },
            { type: 'do', n: 1, who: 'class', text: 'Read the question. Guess — nobody knows the answer yet! Walk to your corner. Tell someone there <b>why</b> you chose it.' },
            { type: 'bet', id: 'b1-bet', title: 'Bet on your guess', coins: 10, items: [
              { q: 'What percentage of global GHG (greenhouse gas) emissions does ICT (Information & Communications Technology) account for?', options: ['A · between 0.5% and 1.5%', 'B · between 1.5% and 3.2%', 'C · between 5% and 7.2%', 'D · between 15% and 20%'], answer: 'B · between 1.5% and 3.2%', why: 'You will hear this number in the podcast today. Listen for it!' },
              { q: 'How much raw (natural) materials need to be extracted (mined) to produce a computer that weighs about two kilos?', options: ['A · 8 kilos', 'B · 80 kilos', 'C · 800 kilos', 'D · 8000 kilos'], answer: 'C · 800 kilos', why: 'That is 400 times the weight of the computer — you will hear it in the podcast.' },
              { q: 'How much water is used to manufacture the average smartphone?', options: ['A · 13,000 litres', 'B · 1,300 litres', 'C · 130 litres', 'D · 13 litres'], answer: 'A · 13,000 litres', why: 'About 13,000 litres — most of it is used to mine and process the materials (source: compareandrecycle.co.uk).' }
            ] },
            { type: 'do', n: 2, who: 'class', text: '<b>One more:</b> In 2024, what percentage of Australian internet users aged 16–64 did NOT have a smartphone? A 2% · B 3% · C 4% · D 5%. Walk to your corner — your teacher has the answer (source: redsearch.com.au).' },
            { type: 'talk', title: 'Discuss', prompts: ['Is there anything in this activity that really surprises you?', 'Which number would you tell your family about? Why?'] },
            { type: 'language', groups: [{ label: 'Showing surprise', phrases: ['I can’t believe that …', 'What surprised me most was …', 'I had no idea that …', 'I expected it to be much lower / higher.'] }] }
          ]
        },
        {
          id: 'b2', short: 'Words', minutes: 15, grouping: 'Alone → Pair', art: 'dec10/assets/week2/v/v-d10w2d2-b2.svg',
          title: 'Vocabulary',
          goal: 'Learn eight words you will hear in the podcast — then use them to talk.',
          blocks: [
            { type: 'match', id: 'b2-match', title: 'Match the words to their meanings', hint: 'Definitions adapted from the Macquarie Dictionary. Tap a word, then its meaning.', left: ['digitalization (n)', 'e-commerce (n)', 'digital economy (n)', 'transition (n)', 'waste (n)', 'collective action (noun phrase)', 'holistic (adj)', 'digital divide (noun phrase)'], right: [
              'The process of converting information and processes into a digital format, enabling it to be processed, stored, and transmitted by digital devices and networks',
              'Buying/selling products and services on the internet',
              'The international network of economic activities that ICT facilitates',
              'A process of changing from one state to another',
              'Rubbish/products that are rejected as useless',
              'The effort of a group working together to achieve a common goal',
              'Including different elements (not focusing on individual parts)',
              'The social/economic gap between those who have access to computer technology and those who do not'
            ] },
            { type: 'flip', title: 'Say it right', hint: 'Say the word, then turn the card to check the stress (the BIG part).', items: [
              { front: 'digitalization', back: 'di·gi·ta·li·ZA·tion' },
              { front: 'economy', back: 'e·CON·o·my' },
              { front: 'transition', back: 'tran·SI·tion' },
              { front: 'holistic', back: 'ho·LIS·tic' },
              { front: 'collective', back: 'col·LEC·tive' },
              { front: 'e-commerce', back: 'E-com·merce' }
            ] },
            { type: 'language', title: 'Words that go together (collocations)', groups: [
              { label: 'digital …', phrases: ['digital divide', 'digital economy', 'digital transition', 'digital devices'] },
              { label: '… action / approach', phrases: ['take collective action', 'a holistic approach', 'a low carbon transition', 'reduce waste'] }
            ] },
            { type: 'do', n: 1, who: 'pair', text: 'Discuss the questions with a partner. Use at least <b>one new word</b> in every answer.' },
            { type: 'talk', title: 'Discuss', prompts: ['What kind of <b>waste</b> do you think is created in <b>digitalization</b> (e.g. making, using and throwing away digital devices)?', 'What positive and negative effects does <b>e-commerce</b> have on the environment?', 'How can different stakeholders take <b>collective action</b> to develop a <b>holistic</b> approach to solve environmental issues?'] }
          ]
        },
        {
          id: 'b3', short: 'Gist', minutes: 7, grouping: 'Alone → Pair', art: 'dec10/assets/week2/v/v-d10w2d2-b3.svg',
          title: 'Listening for gist',
          goal: 'Follow outline notes while you listen to the introduction — then get the big picture.',
          blocks: [
            { type: 'key', title: 'Remember the Outline Method?', points: ['Last week you wrote <b>main points</b> on the left, and <b>supporting ideas</b> under the main point they belong to.', 'Below are some notes on the <b>introduction</b> of the podcast. Follow them while you listen.'] },
            { type: 'figure', src: 'dec10/assets/week2/d2-intro-notes.svg', size: 'wide', alt: 'Sample notes on the introduction: ↑Tech = changing life/work BUT influencing humanity’s future & planet. ↑Tech = ↑demand for minerals, water & energy = ↑pollution. Dev-ing count’s = ↓benefits BUT ↑environ. impact. New bus. models, policies & strat’s needed. Digitn = key ➔ sust. devel.?', caption: 'Notes on the introduction (0:00–1:23)' },
            { type: 'do', n: 1, who: 'alone', text: 'Listen to the introduction (<b>0:00–1:23</b>). Follow the notes with your finger.' },
            { type: 'listening', source: 'United Nations Trade and Development (2024)', title: 'Why the future of humanity depends on how we manage technology', videoId: 'CQPSQ40Ws7M', start: 0, clip: 'the introduction · 0:00–1:23', transcripts: [['tradecast', 'Transcript (open after listening)']] },
            { type: 'talk', title: 'Discuss the notes', prompts: ['Could you easily follow these notes?', 'Do you think you could make the notes shorter?', 'What different symbols / abbreviations would you use?'] },
            { type: 'quiz', id: 'b3-q', title: 'Gist check', items: [
              { q: 'How does digitalization impact the environment?', options: ['Rising demand for minerals, water and energy, and more pollution and waste', 'Less travel, so lower emissions everywhere', 'It has no real impact on the environment', 'It only affects developing countries'], answer: 'Rising demand for minerals, water and energy, and more pollution and waste', why: '“… the environmental footprint is also growing from the rising demand for minerals, water and energy to the creation of more pollution and waste.”' },
              { q: 'How can these negative environmental impacts be reduced?', options: ['New business models, policies and strategies', 'Stopping the use of social media', 'Building more data centres', 'Moving all factories to developing countries'], answer: 'New business models, policies and strategies', why: '“… the report says we need new business models, policies and strategies.” The guest also believes digitalization is key to sustainable development.' }
            ] }
          ]
        },
        {
          id: 'b4', short: 'Notes', minutes: 15, grouping: 'Alone', art: 'dec10/assets/week2/v/v-d10w2d2-b4.svg',
          title: 'Listening for detail / note taking',
          goal: 'Take notes on the rest of the podcast under eight headings.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Read the eight headings first (1 minute). Then listen to the rest of the podcast and take notes. <b>Use symbols</b> — they are faster than words.' },
            { type: 'flip', title: 'Quick symbols for today', hint: 'Turn the cards if you forget.', items: [
              { front: '→', back: 'leads to / causes' },
              { front: '←', back: 'because of / caused by' },
              { front: '↑ / ↓', back: 'more, increase / less, decrease' },
              { front: 'b/c', back: 'because' },
              { front: 'e.g.', back: 'for example' },
              { front: 'w/', back: 'with' }
            ] },
            { type: 'listening', source: 'United Nations Trade and Development (2024)', title: 'Why the future of humanity depends on how we manage technology', videoId: 'CQPSQ40Ws7M', start: 83, clip: 'from 1:23 to the end', transcripts: [['tradecast', 'Transcript (open after listening)']] },
            { type: 'table', id: 'b4-notes', title: 'My notes', columns: ['Heading', 'Main points and supporting ideas'], fixed: ['How digitalization can offer solutions to environmental problems', 'Environmental footprint of digitalization', 'Examples of the environmental footprint (from the report)', 'The surprising impact of individuals’ use (e.g. social media habits)', 'Digital divide', 'Reducing the environmental footprint', 'Working together'] },
            { type: 'tip', text: 'Keep these notes! You will use them again in the Mediation lesson today and later this week. Notes are personal — yours can look different from your partner’s.' }
          ],
          answers: { title: 'Possible notes', items: [
            ['Solutions', 'Reduce energy use — make things more efficient · teleworking (avoid transportation) · e-commerce (avoid travelling by car to shop)'],
            ['Environmental footprint', 'footprint of production, use and end of life · important b/c scale & speed of digitalisation · same minerals needed for low carbon transition & dig. transition = pressure on raw materials · as tech advances it needs more resources and uses energy · no easy answers!'],
            ['Examples (from the report)', 'ICT sector = 1.5%–3.2% of GHG emissions · making a 2kg computer = extracting about 800 kg of minerals · elec. use by data centres expected to more than double by 2026 due to cryptocurrency mining and AI · current data might not represent the next 10–20 years b/c nature of digitalization keeps changing · also ↑ water usage and waste · need to look at these issues in a holistic way'],
            ['Individuals’ use', 'individual impact may seem small, but billions of people = big impact · collective action is needed'],
            ['Digital divide', 'diff. people, companies & countries use dig. tech differently · advanced economies often replace devices; poorer ones use less (e.g. e-commerce, 5G) · some countries still need to digitalise more · is consumption compatible w/ efforts to reduce footprint? little discussion'],
            ['Reducing the footprint', 'standards for early design stages: devices should be produced so they can be recycled'],
            ['Working together', 'world needs to come together to solve environ. challenges (climate change, biodiversity, water shortages) & use dig. tech sustainably · stakeholders: private sector, government, international organisations, academia, civil society · dig. economy led by a few large firms → they have special responsibility · governments should think how businesses should change their behaviour']
          ] }
        },
        {
          id: 'b5', short: 'Test practice', minutes: 15, grouping: 'Pair → Alone', art: 'dec10/assets/week2/v/v-d10w2d2-b5.svg',
          title: 'Building understanding',
          goal: 'Compare notes with a partner, then use your notes to answer test-style questions.',
          blocks: [
            { type: 'talk', title: 'Compare your notes with the person next to you', prompts: ['Did you identify the same information?', 'Did you use similar symbols / abbreviations?', 'What techniques can you learn from your partner’s notes?'] },
            { type: 'language', groups: [{ label: 'Comparing notes', phrases: ['What did you write for …?', 'I missed the part about … — what did he say?', 'I like how you used … for …. I’ll try that.', 'We both wrote …, but you also noted …'] }] },
            { type: 'tip', text: 'In the DEC <b>Listening and Reading to Write</b> assessment, you use your listening notes in your <b>writing task</b>, as an extra reference. You will not use them to answer listening questions.' },
            { type: 'limit', id: 'b5-lim', title: 'Questions 1–3 · Solutions offered by digital technology', rule: 'Write NO MORE THAN THREE WORDS for each space', max: 3, items: [
              { q: 'Reduce energy use: more ________', accept: ['efficient technology', 'efficient', 'efficient technologies', 'efficient tech', 'efficient things'], model: 'efficient technology', why: '“… we can perhaps reduce the energy use by making things more efficient.”' },
              { q: 'Teleworking: avoid ________', accept: ['transportation', 'transport'], model: 'transportation', why: '“We can go to teleworking, to avoid transportation.”' },
              { q: 'E-commerce: avoid travelling by car to ________', accept: ['shop', 'go shopping', 'the shops', 'shops', 'shopping'], model: 'shop / go shopping / the shops', why: '“… to avoid travelling by car, to shop and so on.”' }
            ] },
            { type: 'bet', id: 'b5-bet', title: 'Questions 4–10 · bet on your answer', coins: 15, items: [
              { q: 'How is digitalization evolving?', options: ['slowly on a small scale', 'quickly on a small scale', 'slowly on a large scale', 'quickly on a large scale'], answer: 'quickly on a large scale', why: '“… because of the scale and speed at which digitalization is evolving.”' },
              { q: 'The digital transition requires the same minerals as the ________ transition.', options: ['low carbon', 'high carbon', 'renewable energy', 'transportation'], answer: 'low carbon', why: '“… the kind of minerals that we need to enable the low carbon transition are very much the same …”' },
              { q: 'By 2026, electricity use by data centers will ________.', options: ['decrease', 'increase slightly', 'double', 'triple'], answer: 'double', why: '“It’s expected to more than double from now to 2026.”' },
              { q: 'Why does he say, ‘It’s something that we haven’t paid much attention to until very recently’?', options: ['He’s being critical of scientists.', 'More research is needed and future changes are unpredictable.', 'The problems have only just begun.', 'In the past people didn’t care about the environment.'], answer: 'More research is needed and future changes are unpredictable.', why: 'He goes on: the data “may not be very representative of what we will see in the coming 10, 20 years”.' },
              { q: 'Why would people be surprised by the impact of their individual social media habits?', options: ['Using social media is a basic human right.', 'People think using social media has no environmental impact.', 'People think other people use social media much more than they do.', 'Individual impact may seem small, but billions of people make a big impact.'], answer: 'Individual impact may seem small, but billions of people make a big impact.', why: '“… but when billions of people are doing it, it scales up.”' },
              { q: 'What should businesses do?', options: ['Pay more tax', 'Design recyclable products', 'Stop manufacturing digital devices', 'Continue with the same production techniques'], answer: 'Design recyclable products', why: '“… how we design the various devices so that they are produced in such a way that they can also be recycled.”' },
              { q: 'According to the speaker, how can the negative environmental impacts of digital technology be minimized?', options: ['Different stakeholders need to work together to find solutions', 'The government should restrict use of digital devices', 'Academics need to research the causes of climate change', 'Consumers need to stop using digital technology'], answer: 'Different stakeholders need to work together to find solutions', why: '“We need to come together from all the various stakeholders …”' }
            ] }
          ]
        },
        {
          id: 'b6', short: 'Cause → effect', minutes: 12, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d2-b6.svg',
          title: 'Language focus: Cause and Effect Language',
          goal: 'See cause and effect even when there is no “because” — and learn five patterns to say it.',
          blocks: [
            { type: 'key', title: 'Cause and effect is not always obvious', points: ['Words like <b>so</b>, <b>because</b>, <b>as a result of</b> and <b>consequently</b> show cause and effect clearly.', 'But speakers often show it in a hidden way. Look at this sentence from the podcast:', '<i>“<b>With</b> technology and digitalization evolving quickly, the environmental footprint is also growing from the rising demand for minerals, water and energy to the creation of more pollution and waste.”</i>'] },
            { type: 'tabs', title: 'The same sentence, three ways', tabs: [
              { label: 'Cause → effect (SO)', blocks: [{ type: 'model', title: 'Causes first', list: ['Technology and digitalization are evolving quickly', '<b>SO</b> there is rising demand for minerals, water and energy and the creation of more pollution and waste', '<b>SO</b> the environmental footprint is also growing.'] }] },
              { label: 'Effect ← cause (BECAUSE)', blocks: [{ type: 'model', title: 'Effects first', list: ['The environmental footprint is growing', '<b>BECAUSE</b> there is rising demand for minerals, water and energy and the creation of more pollution and waste', '<b>BECAUSE</b> technology and digitalization are evolving quickly.'] }] },
              { label: 'As a flowchart', blocks: [{ type: 'figure', src: 'dec10/assets/week2/d2-cause-flow.svg', size: 'wide', alt: 'Flowchart: “Digitalization and tech are evolving quickly” leads to two boxes — “rising demand for minerals, water and energy” and “the creation of more pollution and waste”. Both lead to “The environmental footprint is growing”.', caption: 'One cause, two middle steps, one big effect.' }] }
            ] },
            { type: 'sort', id: 'b6-sort', title: 'Cause or effect?', hint: 'These parts come from the podcast. Is each part the cause or the effect?', buckets: [{ label: 'Cause', letter: 'C' }, { label: 'Effect', letter: 'E' }], items: [
              { text: '1 · “Technological changes …”', answer: 0 }, { text: '1 · “… many benefits”', answer: 1 },
              { text: '2 · “By applying digital technologies …”', answer: 0 }, { text: '2 · “… we can perhaps reduce the energy use”', answer: 1 },
              { text: '3 · “The environmental footprint of digitalization has become increasingly important …”', answer: 1 }, { text: '3 · “… the scale and speed at which digitalization is evolving”', answer: 0, why: 'It comes after “because of” — so it is the cause, even though it comes second.' },
              { text: '4 · “The more things we use …”', answer: 0 }, { text: '4 · “… the more waste we create”', answer: 1 },
              { text: '5 · “When billions of people are using digital devices …”', answer: 0 }, { text: '5 · “… it scales up”', answer: 1 }
            ] },
            { type: 'model', title: 'Five patterns for cause and effect', rows: [
              ['<i>clause</i> + so + <i>clause</i>', 'Technology and digitalization are evolving quickly <b>so</b> the environmental footprint is also growing.'],
              ['<i>noun phrase</i> + is/are delivering / creating / causing + <i>noun phrase</i>', 'The quick evolution of technology and digitalization <b>is delivering</b> a growing environmental footprint.'],
              ['By + <i>verb-ing</i>, + <i>clause</i>', '<b>By</b> technology and digitalization evolving quickly, the environmental footprint is also growing.'],
              ['The + <i>comparative</i>, the + <i>comparative</i>', '<b>The quicker</b> technology and digitalization are evolving, <b>the more</b> the environmental footprint is growing.'],
              ['When + <i>clause</i>, <i>clause</i>', '<b>When</b> technology and digitalization evolve so quickly, the environmental footprint also grows.']
            ] },
            { type: 'spot', id: 'b6-spot', label: 'Cause-and-effect spotter', title: 'Find the causal language in the podcast', hint: 'Tap the words that show a cause or an effect. Careful — some highlighted words do a different job.', paras: [
              'We can see electricity use by data centers. It’s something that we haven’t paid much attention to until very recently. It’s expected to more than double from now to 2026, [[only four years]], and partly [[*due to]] cryptocurrency mining and artificial intelligence, which are also relatively new phenomena. So what we know from the data that we haven’t been able to capture until a few years ago, they may not be very representative of what we will see in the coming 10, 20 years [[*because]] the nature of digitalization keeps changing.',
              'Another area when it comes to [[*environmental impact]] is the growing use of water. This is a big challenge, [[especially]] in parts of the world with water distress. We can also see [[*important impacts]] on the waste generation. [[*The more]] things we use, [[*the more]] waste we create. So there is a whole range of issues that we need to look at in a holistic way to see how best to reduce the potential negative [[*environmental impacts]] from digitalization.'
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Open your Student’s book, <b>page 112</b> (Language Reference: Cause and effect language). Keep it open for the rest of this lesson.' },
            { type: 'do', n: 2, who: 'pair', text: '<b>Say it 5 ways.</b> Partner A says a cause from your own life (e.g. <i>I stream music all day</i>). Partner B says the effect using a pattern above. Swap. Try all five patterns.' }
          ]
        },
        {
          id: 'b7', short: 'Impact words', minutes: 15, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d2-b7.svg',
          title: 'Synonyms and Collocations in Causal Language',
          goal: 'Say “effect” in many ways — then paraphrase with causal language.',
          blocks: [
            { type: 'sort', id: 'b7-syn', title: 'Synonyms: which two do NOT mean “effect”?', hint: 'In the podcast you heard a few words that mean “effect”.', buckets: [{ label: 'Means “effect”', letter: '=' }, { label: 'Is about the CAUSE', letter: '≠' }], items: [
              { text: 'impact', answer: 0 }, { text: 'footprint', answer: 0 }, { text: 'root', answer: 1, why: 'The root of a problem is where it starts — its cause.' }, { text: 'implications', answer: 0 },
              { text: 'source', answer: 1, why: 'The source of a problem is where it comes from — its cause.' }, { text: 'consequence', answer: 0 }, { text: 'result', answer: 0 }, { text: 'ramification', answer: 0 }
            ] },
            { type: 'language', title: 'Collocations: adjective + impact / effect', groups: [
              { label: 'From the podcast', phrases: ['positive impact / effect', 'negative impact / effect', 'major impact', 'huge impact', 'important impact', 'overall impact', 'global impact', 'environmental impact'] },
              { label: 'Add these to your list', phrases: ['significant impact', 'minimal impact', 'direct / indirect effect', 'long-term / short-term effect', 'economic / social impact', 'serious consequences'] },
              { label: 'Verbs that go with them', phrases: ['have an impact on …', 'reduce / minimise the effects of …', 'cause / lead to serious consequences', 'consider the implications of …'] }
            ] },
            { type: 'cloze', id: 'b7-cl', title: 'Choose the best collocation', options: ['have an impact on', 'long-term', 'minimal', 'indirect', 'reduce the effects'], text: 'Every email we send {{1}} the environment, but one email alone has a {{2}} impact. However, the {{3}} effects of billions of devices could be serious for the next generation. AI also has {{4}} effects — for example, when it makes people buy more. Governments and companies must act together to {{5}} of digital technology.', answers: ['have an impact on', 'minimal', 'long-term', 'indirect', 'reduce the effects'] },
            { type: 'para', id: 'b7-para', label: 'Language in use: paraphrasing', title: 'Paraphrase with today’s language', hint: 'Use the technique in italics. Many answers are possible.', items: [
              { text: 'The nature of digitalization keeps changing, so it’s difficult to predict the future.', strategy: 'use causal language', model: 'The more the nature of digitalization keeps changing, the more difficult it is to predict the future. (Also possible: The changing nature of digitalization is causing difficulty in predicting the future. / When the nature of digitalization keeps changing, it’s difficult to predict the future.)' },
              { text: 'The manufacture of digital devices has huge impacts on the environment.', strategy: 'use a synonym / collocation of ‘impact’', model: 'The manufacture of digital devices has major environmental effects. (Also possible: Manufacturing digital devices has serious environmental effects.)' }
            ] },
            { type: 'do', n: 1, who: 'pair', text: '<b>Race!</b> With your partner, write one more paraphrase of each sentence. Read the best one to the class.' }
          ]
        },
        {
          id: 'b8', short: 'Panel', minutes: 18, grouping: 'Groups of 4', art: 'dec10/assets/week2/v/v-d10w2d2-b8.svg',
          title: 'Criticality: the panel discussion',
          goal: 'Play a stakeholder and use causal language to argue your view.',
          blocks: [
            { type: 'sticky', color: 'green', title: 'The situation', text: '<p>Imagine you are at a <b>panel discussion</b> about the environmental footprint of digital technology. It is held by the <b>School of Life and Environmental Sciences at the University of Sydney</b>.</p><p>Discuss: <b>What are the environmental impacts of digital technology? What steps should we take to reduce the negative environmental footprint?</b></p>' },
            { type: 'hotspot', src: 'dec10/assets/week2/d2-panel.svg', alt: 'A university stage with four panel chairs and name cards: A, CEO of a tech company; B, a politician; C, an academic researcher; D, a consumer. A screen behind them reads “The environmental footprint of digital technology”.', hint: 'Tap each speaker to read their role card.', size: 'wide', spots: [
              { x: 18, y: 62, label: 'A', title: 'Role A · The CEO of a large tech company', text: 'Your company manufactures mobile phones and has been very successful. It has been making a huge profit, and your investors expect this profit to continue. In your opinion profit is more important than the environment.', color: '#c4562f' },
              { x: 39, y: 62, label: 'B', title: 'Role B · A Politician', text: 'There is an upcoming election, and one of your main campaigns is about reducing pollution and resource use. You want to enforce restrictions (and penalties) on tech companies to use fewer natural resources and create less waste.', color: '#3a58a0' },
              { x: 61, y: 62, label: 'C', title: 'Role C · An Academic Researcher', text: 'You are a researcher at the School of Life and Environmental Sciences. You and your team are very concerned about the future of the planet and are currently doing research into how digital technology can be used to minimise the environmental footprint of digital devices.', color: '#2f7d6b' },
              { x: 82, y: 62, label: 'D', title: 'Role D · A Consumer', text: 'You have both a smart phone and a laptop, and you need these for your work life, social life and almost every part of your life! You can’t live without them! You are concerned about the future of the planet, but you don’t think your behaviour makes much difference.', color: '#8a4f9e' }
            ] },
            { type: 'steps', items: [
              { who: 'group', text: 'Choose a role each (A, B, C or D). Read your role card. You have <b>2 minutes</b> to plan your opening statement.' },
              { who: 'group', text: 'Each speaker gives a <b>1-minute</b> opening statement. Then discuss freely — <b>really be your character!</b>' },
              { who: 'group', text: 'Use the causal language below. Tick a phrase each time someone uses it. Who used the most?' }
            ] },
            { type: 'language', title: 'Causal language · also in your Student’s book, p. 112', groups: [
              { label: 'Cause', phrases: ['because', 'because of', 'as a result of', 'due to', 'due to the fact that', 'on account of', 'seeing that', 'since', 'thanks to', 'the reason', 'as a consequence of'] },
              { label: 'Effect', phrases: ['so', 'consequently', 'thus', 'hence', 'therefore', 'which means', 'this has led to', 'this causes', 'in order to', 'resulting in', 'thereby', 'for this reason', 'otherwise (negative consequence)'] }
            ] },
            { type: 'language', title: 'Extra: sound like a real panellist', groups: [{ label: 'Panel moves', phrases: ['Can I come in here?', 'With respect, I see it differently …', 'That’s a fair point, but …', 'Let me answer that directly.', 'The evidence clearly shows that …'] }] },
            { type: 'spinner', id: 'b8-spin', title: 'The moderator’s questions', text: 'One person is the moderator. Spin and ask the panel a new question when the talk slows down.', reels: [{ label: 'Ask', items: ['Who should pay to reduce the footprint: companies, governments or users?', 'Should phones be designed to last ten years?', 'Should there be a tax on new devices?', 'Can one person’s choices really make a difference?', 'Is profit more important than the planet?', 'What is the ONE law you would make tomorrow?'] }] },
            { type: 'detect', id: 'b8-dt', title: 'Write your opening statement', hint: 'Write 3–4 sentences for your role. The lights turn on when you use each kind of language.', checks: [
              { label: 'Cause word', color: '#c4562f', any: ['because', 'due to', 'as a result of', 'since', 'thanks to', 'on account of'] },
              { label: 'Effect word', color: '#2f7d6b', any: ['therefore', 'consequently', 'this leads to', 'this has led to', 'resulting in', 'which means', 'as a result', 'hence', 'thus'] },
              { label: 'The more …, the more …', color: '#3a58a0', any: ['/the (more|less|bigger|faster|quicker|greater)\\b.*,\\s*the (more|less|bigger|faster|quicker|greater)\\b/'] },
              { label: 'Impact collocation', color: '#8a4f9e', any: ['/(major|huge|significant|minimal|global|environmental|negative|positive|serious|long-term|direct|indirect) (impact|effect|consequence)/'] }
            ], items: [{ task: 'My role: … My opening statement:', rows: 5, placeholder: 'As a politician, I believe …', model: 'As a politician, I believe tech companies must change, because their profits come at a huge environmental cost. The more phones they sell, the more waste we create. Consequently, we will introduce penalties for companies that do not recycle.' }] }
          ]
        }
      ]
    },

    /* ───────────────────────── 7A ───────────────────────── */
    {
      id: 'mediation', number: '03', code: '7A', minutes: 120,
      tone: 'blue', art: 'dec10/assets/week2/s-mediation.svg',
      title: 'Mediation',
      subtitle: 'Three sources, one picture: compare and contrast like a researcher',
      outcome: 'You find similarities and differences across this week’s three sources, and you use compare-and-contrast language to talk and write about them.',
      activities: [
        {
          id: 'c1', short: 'Survey', minutes: 10, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d2-c1.svg',
          title: 'Warmer / Recap: the digital habits survey',
          goal: 'Compare your digital habits with a partner’s.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Answer the survey for yourself first (the “Me” column).' },
              { who: 'pair', text: 'Interview your partner. Write their answers in the second column.' },
              { who: 'pair', text: 'Find the similarities and differences. Then tell the class about <b>one</b> question.' }
            ] },
            { type: 'table', id: 'c1-tab', title: 'Digital habits survey', columns: ['Questions', 'Me', 'My partner'], fixed: [
              '1. How many devices (e.g., phones, laptops, tablets) do you own and regularly use?',
              '2. How many hours do you spend streaming videos or music each week?',
              '3. How often do you shop online?',
              '4. How many video calls do you have each week?',
              '5. How often do you back up files to the cloud?',
              '6. Do you use energy-saving modes on your devices?',
              '7. How often do you use social media (e.g., Instagram, Facebook, TikTok) each day?',
              '8. How often do you update apps or software on your devices?'
            ] },
            { type: 'language', title: 'Language to compare your answers', groups: [
              { label: 'The same', phrases: ['Both of us … / We both …', 'I …, and my partner does too.', 'My answer is the same as my partner’s.', 'Neither of us …'] },
              { label: 'Different', phrases: ['I have 3 devices, but my partner has 2.', 'I …, whereas my partner …', 'Unlike me, my partner …', 'My partner streams far more than I do.'] }
            ] },
            { type: 'talk', title: 'Did you notice?', prompts: ['When you summarised your survey, did you use <b>Both … and …</b>, <b>too</b>, <b>but</b> or <b>same as</b>?', 'Whose digital habits have the bigger footprint — yours or your partner’s? Why?'] }
          ]
        },
        {
          id: 'c2', short: 'Compare / contrast', minutes: 20, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d2-c2.svg',
          title: 'Introducing compare and contrast',
          goal: 'Learn why academics compare and contrast — and the words they use to do it.',
          blocks: [
            { type: 'key', title: 'Why compare and contrast?', points: ['In the survey you found <b>similarities</b> (comparing) and <b>differences</b> (contrasting).', 'Academics do the same — but with a <b>critical purpose</b>: to organise their thoughts clearly, draw new connections, and evaluate the strengths of different views.', 'Comparing and contrasting ideas from different texts, and summarising and paraphrasing sources to support your position, are called <b>mediation</b>. You practise it every week.'] },
            { type: 'figure', src: 'dec10/assets/week2/d2-mediation.svg', size: 'wide', alt: 'Three source cards — Griffiths (2020), UN Trade and Development (2024) and United Nations Conference on Trade and Development (2024) — feed into a student’s notebook. Green lines labelled “similarly, both, also” and orange lines labelled “whereas, however, while” connect the cards.', caption: 'Mediation: you stand between the sources and connect them for your reader.' },
            { type: 'do', n: 1, who: 'pair', text: 'Read the extracts. Tap every word that shows a <b>similarity</b> or a <b>difference</b>.' },
            { type: 'spot', id: 'c2-spot', label: 'Compare / contrast spotter', title: 'Extracts from this week’s texts', hint: 'Tap the compare or contrast words. Some highlighted words do a different job.', paras: [
              'Extract 1 · This disagreement arises [[because]] some argue that emissions from manufacturing computing hardware should be counted, [[*while]] others believe they should not. Additionally, the inclusion of emissions from the staff and buildings of technology companies is debated, causing further complexity. The figures around the running of data centres are [[*also]] disputed.',
              'Extract 2 · [[*Similarly]] high is the environmental cost of downloading video games. Researchers behind a study at the University of California found that [[because of this]], US gamers use 2.4% of their household electricity.',
              'Extract 3 · [[*However]], these figures are from a decade ago. … So [[*whereas]] people in the most advanced economies are using a lot of new gadgets, replacing their smartphones, replacing their computers. The situation in many of the poorer countries of the world is very [[*different]].',
              'Extract 4 · [[For instance]], the kind of minerals that we need to enable the low carbon transition are very much [[*the same]] that we need to undertake the digital transition, [[so]] it adds additional pressure on raw materials.'
            ] },
            { type: 'match', id: 'c2-match', title: 'What is the purpose of each sentence?', hint: 'Tap a sentence, then its purpose.', left: [
              '“… some argue that emissions from manufacturing computing hardware should be counted, while others believe they should not.”',
              '“However, these figures are from a decade ago.”',
              '“So whereas people in the most advanced economies are using a lot of new gadgets …”',
              '“Similarly high is the environmental cost of downloading video games.”',
              '“… the kind of minerals that we need to enable the low carbon transition are very much the same that we need to undertake the digital transition.”'
            ], right: [
              'Contrast: to explain the reasons for the disagreement',
              'Contrast: to suggest that data might be outdated',
              'Contrast: to show the difference between wealthier and poorer countries',
              'Compare: to compare the footprint of watching online videos and downloading video games',
              'Compare: to explain how these two transitions are interconnected'
            ] },
            { type: 'sort', id: 'c2-sort', title: 'Compare or contrast?', hint: 'Which phrases show a similarity? Which show a difference?', buckets: [{ label: 'Compare (similar)', letter: '=' }, { label: 'Contrast (different)', letter: '≠' }], items: [
              { text: 'Similarly', answer: 0 }, { text: 'Likewise', answer: 0 }, { text: 'Both … and …', answer: 0 }, { text: 'Not only … but also …', answer: 0 }, { text: 'Just like + noun', answer: 0 }, { text: 'To be the same as …', answer: 0 }, { text: 'Neither … nor …', answer: 0 },
              { text: 'However', answer: 1 }, { text: 'Whereas', answer: 1 }, { text: 'On the other hand', answer: 1 }, { text: 'In contrast', answer: 1 }, { text: 'To differ from', answer: 1 }, { text: 'To be unlike', answer: 1 }, { text: 'By comparison', answer: 1 }
            ] },
            { type: 'language', title: 'Language to compare and contrast · also in your Student’s book, p. 113', groups: [
              { label: 'Compare', phrases: ['Similarly', 'Likewise', 'Also', 'Both … and …', 'Not only … but also …', 'Neither … nor …', 'Just like + noun', 'Similar to + noun', 'To be similar to …', 'To be the same as …', 'To be alike', 'To compare (to/with)'] },
              { label: 'Contrast', phrases: ['But', 'However', 'In comparison', 'By comparison', 'On the other hand', 'While', 'Whereas', 'To differ from', 'To be different from', 'To be dissimilar to', 'To be unlike', 'In contrast'] }
            ] },
            { type: 'cloze', id: 'c2-cl', title: 'Practise: connect two sources', options: ['Both', 'whereas', 'Similarly', 'However', 'unlike'], text: '{{1}} Griffiths (2020) and UN Trade and Development (2024) agree that digital technology has a real environmental cost. Griffiths (2020) gives advice to individuals, {{2}} the podcast focuses on businesses and governments. Griffiths (2020) shows that video games use a lot of energy. {{3}}, the podcast explains that data centres use more and more electricity. {{4}}, neither source gives exact figures for AI. The UNCTAD report, {{5}} the other two sources, focuses mainly on AI.', answers: ['Both', 'whereas', 'Similarly', 'However', 'unlike'] }
          ]
        },
        {
          id: 'c3', short: 'Two sources', minutes: 15, grouping: 'Alone → Pair', art: 'dec10/assets/week2/v/v-d10w2d2-c3.svg',
          title: 'Review your reading 1 and listening and make notes',
          goal: 'Put your notes from two sources side by side — then find similarities and differences.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Look at your notes on the reading (Day 1) and the podcast (today). Open the texts if you need to.' },
            { type: 'sources', ids: ['footprint', 'tradecast'] },
            { type: 'do', n: 2, who: 'alone', text: 'Open your Student’s book, <b>page 13</b> (Building understanding across texts). Fill in the <b>first two columns</b> now — here or in the book. You fill in the third column later today.' },
            { type: 'table', id: 'c3-tab', title: 'Building understanding across texts · Student’s book p. 13', columns: ['', 'Griffiths (2020)', 'UN Trade and Development (2024)', 'United Nations Conference on Trade and Development (2024)'], fixed: ['Environmental impact of digital technologies<br>(positive / negative)', 'Suggestions/ solutions<br>(Individuals / companies/ government)'] },
            { type: 'tip', text: 'The third column is for the second reading (later today). Your Student’s book already has an example in its first box: <i>“Positive: AI help make processes less wasteful and more energy-efficiency. Technologies improve how we track and manage environmental conditions. Use of intelligent systems like smart grid sto…”</i>' },
            { type: 'do', n: 3, who: 'pair', text: 'Are there any similarities or differences between the two texts? Sort the statements, then discuss.' },
            { type: 'sort', id: 'c3-sort', title: 'Similarity or difference?', buckets: [{ label: 'Similarity', letter: '=' }, { label: 'Difference', letter: '≠' }], items: [
              { text: 'Both texts emphasise the environmental consequences of the digital world.', answer: 0 },
              { text: 'Both texts call for more sustainable practices and awareness.', answer: 0 },
              { text: 'Text 1 looks at specifics like emails and data centres; Text 2 looks at the broader footprint, including resource extraction and waste.', answer: 1 },
              { text: 'Text 1 focuses on individual responsibility; Text 2 is set in a policy discussion and calls for systemic change.', answer: 1 },
              { text: 'Text 1 suggests user actions, while Text 2 calls for new business models and strategies.', answer: 1 }
            ] },
            { type: 'talk', title: 'Discuss', prompts: ['Which text speaks more to <b>you</b> as a user? Which speaks more to <b>governments</b>?', 'Which text do you find more convincing? Use <i>whereas</i> or <i>however</i> in your answer.'] }
          ],
          answers: { title: 'Sample notes', items: [
            ['Griffiths (2020) · impact', 'Negative: digital technologies contribute to global greenhouse emissions (3.7%).'],
            ['UN Trade and Development (2024) · impact', 'Negative: growing environmental footprint due to rising demand for minerals, energy, and creation of pollution and waste.'],
            ['Griffiths (2020) · solutions', 'Individuals: use devices longer to reduce emissions; alter usage habits (e.g. prefer SMS to reduce CO2e). Companies: adopt renewable energy for data centres; invest in carbon offsets.'],
            ['UN Trade and Development (2024) · solutions', 'Individuals: collective action needed; adjust behaviours related to technology use. Companies: new business models that minimise environmental impacts; integrate environmental considerations from the start. Governments: develop policies and strategies that both support digitalization and minimise environmental damage.']
          ] }
        },
        {
          id: 'c4', short: 'True or false?', minutes: 5, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d2-c4.svg',
          title: 'Introduction: AI and energy — true or false?',
          goal: 'Get ready for the second reading with five surprising statements.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Discuss each statement with your partner. Decide: true or false? Then bet your coins.' },
            { type: 'bet', id: 'c4-bet', title: 'True or false?', coins: 10, items: [
              { q: 'Creating one AI generated image uses as much electricity as fully charging your smartphone.', options: ['True', 'False'], answer: 'True', why: 'All five statements are true!' },
              { q: 'For 5–50 responses, GPT-3 ‘drinks’ half a litre of water.', options: ['True', 'False'], answer: 'True', why: 'Data centres use water to keep their computers cool.' },
              { q: 'Downloading a 1GB file has a larger carbon footprint than using an electric fan for an hour.', options: ['True', 'False'], answer: 'True' },
              { q: 'Watching 10 minutes of online videos generates the same amount of carbon dioxide as boiling water for a cup of coffee.', options: ['True', 'False'], answer: 'True' },
              { q: 'The energy used by an average laptop during an eight-hour workday produces about the same amount of CO2 as charging a smartphone overnight.', options: ['True', 'False'], answer: 'True' }
            ] },
            { type: 'talk', prompts: ['Which statement surprised you the most?', 'Will any of these facts change how you use AI? Why / why not?'] }
          ]
        },
        {
          id: 'c5', short: 'Words', minutes: 12, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d2-c5.svg',
          title: 'Vocabulary',
          goal: 'Guess the meaning of new words from clues in the sentence.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Read each sentence from the report. Guess the meaning of the word in bold from the clues. What other words could you use?' },
            { type: 'cards', title: 'The words in their sentences', items: [
              { label: 'account for', text: 'Recent data from Google and Meta suggest that the training phase <b>accounts for</b> 20–40 per cent of overall machine learning-related energy use.' },
              { label: 'fraction · attributable', text: 'Only a <b>fraction</b> of total ICT energy use is <b>attributable</b> to AI and machine learning, although its exact share is not known.' },
              { label: 'inference', text: 'Computing demand for machine learning training and <b>inference</b> at Meta have increased annually by more than 100 per cent in recent years …' },
              { label: 'outpace', text: '… the increasing energy needs for machine learning-related use (Wu et al., 2022) are expected to <b>outpace</b> potential energy efficiency improvements in the coming years.' },
              { label: 'abundant', text: 'For example, to reduce the carbon footprint, it is preferable to “follow the sun” to where solar energy is more <b>abundant</b>.' },
              { label: 'shift', text: 'Computing loads in general, and training AI in particular, cannot only be <b>shifted</b> in time, but also geographically …' },
              { label: 'desirable', text: 'Thus, a holistic approach is <b>desirable</b> to address water footprint along with carbon footprint to enable more sustainable AI.' },
              { label: 'induce · domain · conversely · escalate', text: 'Artificial intelligence can <b>induce</b> various economic, environmental, and societal benefits in several other <b>domains</b>. <b>Conversely</b>, some uses of machine learning could <b>escalate</b> emissions in other sectors and services.' }
            ] },
            { type: 'quiz', id: 'c5-q', title: 'Based on the sentences, choose an answer', items: [
              { q: 'to account for', options: ['to exclude from consideration', 'to summarize a topic briefly', 'to form the total of something', 'to ignore the details of something'], answer: 'to form the total of something' },
              { q: 'fraction', options: ['area, field', 'more than enough; plentiful', 'part of a whole', 'pleasing, agreeable'], answer: 'part of a whole' },
              { q: 'be attributable to', options: ['pleasing, agreeable', 'part of a whole', 'to be caused by', 'to increase or intensify'], answer: 'to be caused by' },
              { q: 'A conclusion reached on the basis of evidence and reasoning', options: ['inference', 'validation', 'prediction', 'interception'], answer: 'inference' },
              { q: 'to go faster, do better, or develop more quickly than someone or something else', options: ['outpace', 'shift', 'induce', 'escalate'], answer: 'outpace', why: '“Overtake” is a good synonym.' },
              { q: 'abundant', options: ['more than enough; plentiful', 'part of a whole', 'area, field', 'pleasing, agreeable'], answer: 'more than enough; plentiful' },
              { q: 'shift', options: ['part of a whole', 'change position or place', 'area, field', 'to go faster, do better, or develop more quickly than someone or something else'], answer: 'change position or place' },
              { q: 'desirable', options: ['pleasing, agreeable', 'made up your mind', 'giving', 'pleasing to the ear'], answer: 'pleasing, agreeable' },
              { q: 'induce', options: ['To follow without question', 'To avoid taking action', 'To lead towards some action', 'To prevent any action'], answer: 'To lead towards some action' },
              { q: 'domain', options: ['Stay, residence', 'Predominant', 'Change position or place', 'Area, field'], answer: 'Area, field' }
            ] },
            { type: 'match', id: 'c5-match', title: 'Two more words from the text', left: ['conversely', 'escalate'], right: ['in an opposite way; on the other hand', 'to increase quickly or become more serious'] },
            { type: 'spinner', id: 'c5-spin', title: 'Talk with the new words', text: 'Spin. Answer the question in 30 seconds and use the word. Your partner checks.', reels: [{ label: 'Question', items: ['What <b>accounts for</b> most of your screen time?', 'What fraction of your day do you spend online?', 'What would make you <b>shift</b> your study time to the morning?', 'Which apps are <b>desirable</b> for students? Why?', 'In which <b>domain</b> will AI change jobs the most?', 'Why do online prices sometimes <b>escalate</b> quickly?'] }] }
          ]
        },
        {
          id: 'c6', short: 'Bingo', minutes: 10, grouping: 'Alone', art: 'dec10/assets/week2/v/v-d10w2d2-c6.svg',
          title: 'Reading for gist – Bingo',
          goal: 'Read fast and find which paragraph contains each piece of information.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open the reading in your Student’s book, <b>pages 11–12</b> (or tap the button below). Read <b>fast</b> — you are looking for where the information is, not every word.' },
              { who: 'alone', text: 'For each square, choose the paragraph (A–E). Got a full line (across, down or diagonal)? Shout <b>“Bingo!”</b>' },
              { who: 'alone', text: 'Keep going after “Bingo!” until you find all nine.' }
            ] },
            { type: 'sources', ids: ['der'] },
            { type: 'grid', id: 'c6-grid', title: 'Bingo card · which paragraph?', columns: ['Paragraph'], options: ['A', 'B', 'C', 'D', 'E'], rows: [
              'Two categories of environmental effects caused by AI and machine learning',
              'The primary source of greenhouse gas emission from machine learning systems',
              'Details about how much energy ChatGPT used in 2023',
              'The estimated % of global electricity used by AI and machine learning in 2021',
              'The importance of measuring the energy, carbon, and water footprints of AI',
              'The growth in machine learning models will likely exceed energy efficiency improvements in the coming years',
              'How shifting computing loads geographically and by time can help reduce AI’s environmental impact',
              'The indirect effects of AI',
              'Examples of how AI can contribute to both positive and negative impacts on climate change'
            ], answers: [['A'], ['A'], ['B'], ['C'], ['D'], ['D'], ['D'], ['E'], ['E']] }
          ]
        },
        {
          id: 'c7', short: 'Causal chains', minutes: 10, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d2-c7.svg',
          title: 'Notes for cause and effects from reading 2',
          goal: 'Find the causal chains in the UNCTAD report — and the language that shows them.',
          blocks: [
            { type: 'key', title: 'A causal chain', points: ['One cause can lead to an effect, which becomes the cause of the next effect, and so on — like dominoes.', 'Look for the language that links them: <i>result in, lead to, make, come from, result from …</i>'] },
            { type: 'spot', id: 'c7-spot', label: 'Chain spotter', title: 'Which words link the chain?', hint: 'Tap the language that shows cause and effect.', paras: [
              'Extract 1 · The combination of rapid growth in the size of the largest machine learning models (OpenAI, 2018) and the increasing energy needs for machine learning-related use (Wu et al., 2022) [[*are expected to outpace]] potential energy efficiency improvements [[in the coming years]]. This trend [[*is likely to result in]] a significant net growth in total AI-related energy use. This [[*will make]] measuring and reducing the energy, carbon, and water footprint of AI even more critical.',
              'Extract 2 · Machine learning systems [[*require]] computing resources and hardware, [[primarily]] in large data centres, that use energy, water and materials. The majority of machine learning-related GHG emissions today likely [[*come from]] these large data centres, with a smaller share from PCs and smartphones. These emissions [[*result]] both [[*from]] operational energy use during computation and from other phases of the hardware life cycle.'
            ] },
            { type: 'figure', src: 'dec10/assets/week2/d2-ai-chain.svg', size: 'wide', alt: 'A domino chain. Cause: rapid growth in the size of machine learning models plus increasing energy needs. Effect 1: outpacing potential energy efficiency improvements. Effect 2: significant net growth in total AI-related energy use. Effect 3: increased importance of measuring and reducing the energy, carbon and water footprint of AI.', caption: 'Extract 1 as a chain of dominoes.' },
            { type: 'order', id: 'c7-order', title: 'Extract 1 · put the chain in order', items: ['Rapid growth in the size of machine learning models + increasing energy needs for machine learning-related use', 'Outpacing potential energy efficiency improvements', 'Significant net growth in total AI-related energy use', 'Increased importance of measuring and reducing the energy, carbon, and water footprint of AI'], ends: ['Cause', 'Last effect'] },
            { type: 'do', n: 2, who: 'alone', text: 'Write short notes in the <b>NOTES</b> column next to the reading in your Student’s book (pp. 11–12).' },
            { type: 'fields', title: 'Extract 2 · write the chain', fields: [{ id: 'c7-cause', label: 'Causes (1, 2, 3)', rows: 3, placeholder: '1. Machine learning requires …' }, { id: 'c7-effect', label: 'Effect', rows: 1 }] },
            { type: 'do', n: 3, who: 'pair', text: 'Close the text. Explain one chain to your partner in your own words. Use <i>This leads to … · As a result, … · which means …</i>' }
          ],
          answers: { title: 'Extract 2', items: [['Cause 1', 'Machine learning requires computing resources and hardware, mainly in large data centres.'], ['Cause 2', 'These data centres use energy, water and materials.'], ['Cause 3', 'The operational energy from computation and from other phases of the hardware life cycle.'], ['Effect', 'GHG emissions.']] }
        },
        {
          id: 'c8', short: 'Three sources', minutes: 15, grouping: 'Alone → Pair', art: 'dec10/assets/week2/v/v-d10w2d2-c8.svg',
          title: 'Building understanding across texts',
          goal: 'Add the third source to your matrix — then answer two questions using all three texts.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Read the UNCTAD report again more carefully (Student’s book, pp. 11–12). Then go back to your table on <b>page 13</b> — or to step 3 “Review your notes” above — and fill in the <b>third column</b>: United Nations Conference on Trade and Development (2024).' },
            { type: 'sources', ids: ['der'] },
            { type: 'do', n: 2, who: 'alone', text: 'Based on your notes and all three texts, answer the two questions (5 minutes).' },
            { type: 'quiz', id: 'c8-q', title: 'Across the three texts', items: [
              { q: 'What are the primary factors contributing to the environmental impact of digital technologies according to the texts?', options: ['The exclusive use of non-renewable energy sources in all data centers', 'The energy consumed by online activities such as video streaming and the operation of data centers', 'The negligible impact of manufacturing and transporting digital devices', 'The complete replacement of traditional industries with digital solutions'], answer: 'The energy consumed by online activities such as video streaming and the operation of data centers' },
              { q: 'According to the texts, what are effective strategies for reducing the environmental impact of digital technologies?', options: ['Increasing the frequency of upgrading digital devices to boost economic growth', 'Focusing solely on carbon offsetting by large corporations without reducing actual emissions', 'Integrating environmental considerations into digital strategies from design to disposal', 'Limiting digital access in developing countries to reduce global digital consumption'], answer: 'Integrating environmental considerations into digital strategies from design to disposal' }
            ] },
            { type: 'language', title: 'Talk about sources like a researcher', groups: [{ label: 'Across texts', phrases: ['All three sources agree that …', 'Griffiths (2020) and United Nations Conference on Trade and Development (2024) both point out that …', 'Only the UNCTAD report mentions …', 'While the podcast focuses on …, the report looks at …'] }] }
          ],
          answers: { title: 'Sample notes · United Nations Conference on Trade and Development (2024)', items: [['Impact', 'Negative: AI-related GHG emissions. AI and machine learning require a large amount of electricity, water and materials, which will result in significant energy use.'], ['Solutions', 'Companies: measure AI footprints; use low-carbon energy; reduce water use; shift computing in time and place; manage indirect emissions. Government: pay attention to indirect effects of AI on climate change; support system-level sustainability efforts.']] }
        },
        {
          id: 'c9', short: 'Roll the dice', minutes: 15, grouping: 'Groups of 3', art: 'dec10/assets/week2/v/v-d10w2d2-c9.svg',
          title: 'Criticality: Comparing and contrasting',
          goal: 'Discuss big questions about all three texts — using the language the dice gives you.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Spin both reels. The first gives you the <b>language</b>, the second gives you the <b>question</b>.' },
              { who: 'group', text: 'Answer the question and use <b>both</b> words or phrases. Use your notes to help you.' },
              { who: 'group', text: 'The others listen and give a point if you use the language correctly. Then the next person spins.' }
            ] },
            { type: 'spinner', id: 'c9-spin', title: 'Roll the dice', reels: [
              { label: 'Dice · use', items: ['⚀ both … and … ; however', '⚁ while … , similarly', '⚂ compared to … , however', '⚃ whereas , also', '⚄ just as … , different from …', '⚅ conversely … , equally'] },
              { label: 'Question', items: ['How do the environmental impacts of everyday internet usage compare to those of AI and machine learning?', 'What are the similarities and differences between the actions individuals can take to reduce their digital carbon footprint and the measures that businesses or policymakers need to implement for AI?', 'How do the indirect effects of AI on GHG emissions compare with the environmental effects of using the internet for video streaming and gaming?', 'How do the environmental benefits of digital technologies (like e-commerce or teleworking) compare to the negative environmental impacts discussed in these texts?'] }
            ] },
            { type: 'detect', id: 'c9-dt', title: 'Write your best answer', hint: 'Write 3–4 sentences to answer one question. Use the three sources.', checks: [
              { label: 'Compare', color: '#2f7d6b', any: ['similarly', 'likewise', 'both', 'also', 'just as', 'equally', 'the same as', 'similar to'] },
              { label: 'Contrast', color: '#c4562f', any: ['however', 'whereas', 'while', 'in contrast', 'on the other hand', 'unlike', 'conversely', 'different from', 'compared to'] },
              { label: 'A source', color: '#3a58a0', any: ['/\\(?\\d{4}\\)?/', 'griffiths', 'unctad', 'united nations', 'the podcast', 'the report'] }
            ], items: [{ task: 'My question number and answer:', rows: 5, placeholder: 'Both Griffiths (2020) and United Nations Conference on Trade and Development (2024) show that …', model: 'Both Griffiths (2020) and United Nations Conference on Trade and Development (2024) show that digital activities have a real carbon cost. However, Griffiths (2020) focuses on everyday habits such as streaming and email, whereas United Nations Conference on Trade and Development (2024) focuses on the growing energy use of AI. Similarly, both sources suggest that the problem becomes serious because billions of people use these technologies.' }] },
            { type: 'tip', text: '<b>After class:</b> keep preparing your Group research summary presentation. Also continue your research for your group’s seminar topic and the final Interactive Presentation.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 8A ───────────────────────── */
    {
      id: 'presskills', number: '04', code: '8A', minutes: 45,
      tone: 'clay', art: 'dec10/assets/week2/s-presskills.svg',
      title: 'Presentation skills Homework',
      subtitle: 'How good presenters open, move on and finish',
      outcome: 'You know the structure and functions of an academic presentation and can use the language for each part.',
      activities: [
        {
          id: 'd1', short: 'The opening', minutes: 12, grouping: 'Homework', art: 'dec10/assets/week2/v/v-d10w2d2-d1.svg',
          title: 'Introducing a Presentation',
          goal: 'Find the topic, the main points and the stages of a good introduction.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d2-pres-shape.svg', size: 'wide', alt: 'The shape of a presentation: an introduction (greeting, topic, why it matters, structure, a question for the audience), a body of three sections joined by signposts, and a conclusion (signal the end, summarise, final message, thank, invite questions).', caption: 'Every academic presentation has the same three parts.' },
            { type: 'model', title: 'Suzie’s introduction', text: 'Good morning everyone! My name’s Suzie, and today I’m going to talk about a really interesting way to understand environmental issues called the IPAT equation. IPAT stands for Impact, Population, Affluence, and Technology, and these variables help us see how human activities affect our planet and helps us to consider how we can all make a difference. We’ll start by looking at Population—how the number of people on Earth affects the environment through more use of resources and more waste. Next, we’ll discuss Affluence, which is basically how wealthy a population is and how that wealth leads to consuming more resources. Then, we’ll explore Technology. Technology can be both good and bad for the environment, and we’ll see examples of how it can help reduce our impact but also how it sometimes adds to the problem. And finally we’ll put all these variables together to show how they interact in the IPAT equation, giving us a clearer picture of our environmental impact. Our goal is to understand these relationships so we can think about ways to make positive changes for the future. So first, let me pose a question for you to consider: As an individual, how much do you think your actions affect the environment?' },
            { type: 'match', id: 'd1-points', title: 'What is the topic? What are the main points?', left: ['Topic', 'Main point 1', 'Main point 2', 'Main point 3', 'Main point 4'], right: ['the IPAT equation', 'Population', 'Affluence', 'Technology', 'How the variables interact'] },
            { type: 'match', id: 'd1-stages', title: 'What is Suzie doing in each part?', hint: 'Match each part of the script with its stage.', left: [
              '“Good morning everyone! My name’s Suzie, and today I’m going to talk about … the IPAT equation.”',
              '“IPAT stands for Impact, Population, Affluence, and Technology, and these variables help us see how human activities affect our planet …”',
              '“We’ll start by looking at Population … Next, we’ll discuss Affluence … Then, we’ll explore Technology … And finally …”',
              '“So first, let me pose a question for you to consider: As an individual, how much do you think your actions affect the environment?”'
            ], right: ['Greeting, introducing yourself and introducing the topic', 'The importance / relevance of the topic', 'The structure of the presentation (the different sections)', 'A question for the audience to consider'] },
            { type: 'do', n: 1, who: 'alone', text: '<b>Your turn.</b> Record a 30-second introduction for <b>your</b> research summary on your phone. Use all four stages. Listen back: did you sound like Suzie?' }
          ]
        },
        {
          id: 'd2', short: 'Moving on', minutes: 8, grouping: 'Homework', art: 'dec10/assets/week2/v/v-d10w2d2-d2.svg',
          title: 'Body Sections and Conclusion of a Presentation',
          goal: 'Learn the phrases that start each new section and the conclusion.',
          blocks: [
            { type: 'cloze', id: 'd2-cl', title: 'Complete the phrases (one word each)', options: ['begin', 'moving', 'look', 'all', 'brings', 'end', 'start', 'turning'], text: 'a. Let’s {{1}} with the first component of … · b. Now, {{2}} on to … · c. Next, let’s take a {{3}} at … · d. And finally, let’s bring {{4}} these elements together. · e. So, this {{5}} me to the {{6}} of my presentation.', answers: ['begin', 'moving', 'look', 'all', 'brings', 'end'] },
            { type: 'toggle', title: 'Read Suzie’s body and conclusion', hint: 'Open after the gap fill to check', blocks: [{ type: 'model', title: 'Script', list: [
              '<b>Let’s begin with</b> the first component of the IPAT equation: Population. As the number of people on Earth increases, so does the demand for resources like water, land, and energy. More people also mean more waste—like garbage and pollution. It’s pretty straightforward—more people can lead to bigger environmental challenges.',
              'To give you a concrete example, consider urban areas. Cities like New York, Tokyo, and Mumbai have large populations concentrated in small areas. These cities face significant challenges, such as high levels of air pollution and large amounts of waste that need to be managed.',
              '<b>Now, moving on to</b> Affluence. This part of the equation looks at how wealth affects the environment. Generally, wealthier populations consume more—more food, more energy, more everything. This consumption translates into larger environmental footprints.',
              'For instance, wealthier countries tend to have higher levels of car ownership and travel more frequently, leading to greater emissions of greenhouse gases. Luxury items, like high-end electronics and fast fashion, also contribute significantly to environmental degradation through resource extraction and waste.',
              '<b>Next, let’s take a look at</b> Technology. Technology can be a double-edged sword for the environment. On one hand, innovative technologies can help reduce our environmental impact by making things like energy and cars cleaner and more efficient. On the other hand, technology can also lead to increased consumption and waste.',
              'Consider renewable energy technologies such as solar panels and wind turbines. These technologies are fantastic for reducing reliance on fossil fuels and decreasing carbon emissions. However, the production of these technologies can also have environmental impacts, such as the extraction of rare minerals.',
              '<b>And finally, let’s bring all these elements together.</b> The IPAT equation is I = P × A × T, where ‘I’ stands for environmental Impact, ‘P’ for Population, ‘A’ for Affluence, and ‘T’ for Technology. People need to develop a deeper understanding of this relationship, so that we can better identify where to focus efforts to reduce negative environmental impacts.',
              'How do we balance these factors? It’s about making smart choices in policy and personal actions. For example, supporting policies that encourage sustainable development, investing in clean technologies, and making more environmentally friendly consumer choices.',
              '<b>So, this brings me to the end of my presentation.</b> To conclude, the IPAT equation isn’t just a formula; it’s an important framework for understanding how the variables of Population, Affluence and Technology can combine to contribute to our environmental issues. This means that by dissecting this equation, we could begin to solve our problems by seeing where our biggest challenges and opportunities lie. In other words, we can begin to make significant positive environmental change.',
              'I’d like to thank you all for listening today, and I’d love to hear your thoughts or answer any questions you might have about the IPAT equation and our role in shaping the future of our planet.'
            ] }] },
            { type: 'language', title: 'More signposts for your presentations', groups: [
              { label: 'Start', phrases: ['Let’s begin with …', 'First of all, I’d like to look at …', 'To start with, …'] },
              { label: 'Move on', phrases: ['Now, moving on to …', 'Next, let’s take a look at …', 'This leads me to my next point: …', 'Turning now to …'] },
              { label: 'Give an example', phrases: ['To give you a concrete example, …', 'Consider …', 'For instance, …'] },
              { label: 'Finish', phrases: ['And finally, let’s bring all these elements together.', 'So, this brings me to the end of my presentation.', 'To conclude, …', 'To sum up, …'] }
            ] }
          ]
        },
        {
          id: 'd3', short: 'Functions', minutes: 8, grouping: 'Homework', art: 'dec10/assets/week2/v/v-d10w2d2-d3.svg',
          title: 'Functions of Presentations',
          goal: 'Match useful presentation phrases to what they do.',
          blocks: [
            { type: 'key', title: 'What can a presentation do?', points: ['<b>Persuade</b> the audience that your position is correct, or that they should do something.', '<b>Speculate</b> on different possibilities.', '<b>Evaluate</b> others’ ideas and theories.', '<b>Rephrase</b> ideas to make them clear to the audience.', '<b>Describe</b> the causes and effects of actions.'] },
            { type: 'sort', id: 'd3-sort', title: 'Match the phrases with their functions', buckets: [{ label: 'Persuading', letter: '1' }, { label: 'Speculating', letter: '2' }, { label: 'Evaluating ideas', letter: '3' }, { label: 'Rephrasing / clarifying', letter: '4' }, { label: 'Cause / effect', letter: '5' }], items: [
              { text: 'People need to develop a deeper understanding of …', answer: 0 }, { text: 'We need to take action now …', answer: 0 },
              { text: 'we could begin to …', answer: 1 }, { text: 'People might eventually …', answer: 1 },
              { text: 'it’s an important framework for understanding how …', answer: 2 }, { text: 'Though this theory has some strengths, there are a few things missing …', answer: 2 },
              { text: 'In other words …', answer: 3 }, { text: 'What I mean by … is …', answer: 3 },
              { text: 'This means that …', answer: 4 }, { text: 'This has led to widespread …', answer: 4 }
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Say one sentence about <b>your</b> research topic for each function. Say them aloud — twice.' }
          ]
        },
        {
          id: 'd4', short: 'The ending', minutes: 7, grouping: 'Homework', art: 'dec10/assets/week2/v/v-d10w2d2-d4.svg',
          title: 'Conclusion Structure',
          goal: 'Put the five stages of a conclusion in order.',
          blocks: [
            { type: 'order', id: 'd4-order', title: 'Put Suzie’s conclusion in order', items: [
              'Signalling the end: “So, this brings me to the end of my presentation. To conclude, …”',
              'Summarise the main points: “… the IPAT equation isn’t just a formula; it’s an important framework for understanding how …”',
              'Important final message: “In other words, we can begin to make significant positive environmental change.”',
              'Thank the audience: “I’d like to thank you all for listening today, …”',
              'Ask the audience for questions: “I’d love to hear your thoughts or answer any questions you might have …”'
            ], ends: ['First', 'Last'] }
          ]
        },
        {
          id: 'd5', short: 'Final message', minutes: 10, grouping: 'Homework', art: 'dec10/assets/week2/v/v-d10w2d2-d5.svg',
          title: 'Important Final Message',
          goal: 'Write a final message that your audience will remember.',
          blocks: [
            { type: 'key', title: 'Why the final message matters', points: ['You want to make a <b>lasting impression</b> on your audience. People remember the last thing they hear.'] },
            { type: 'flip', title: 'Four kinds of final message', hint: 'Read the kind, then turn the card for an example.', items: [
              { front: 'An optimistic prediction', back: '“We can begin to make significant positive environmental change.”' },
              { front: 'A call to action', back: '“We can all make a few small changes everyday to help prevent this crisis…”' },
              { front: 'A powerful or inspirational quote', back: '“In the words of Mahatma Gandhi: Be the change that you wish to see in the world.”' },
              { front: 'Bookend your presentation', back: 'Bring it back to the introduction: “Think back to the question I asked you to consider at the beginning of my presentation….”' }
            ] },
            { type: 'fields', title: 'Write a final message for your research summary', fields: [
              { id: 'd5-pred', label: 'An optimistic prediction', rows: 2, placeholder: 'If we …, we can …' },
              { id: 'd5-call', label: 'A call to action', rows: 2, placeholder: 'Next time you …, why not …?' },
              { id: 'd5-book', label: 'Bookend (go back to your introduction)', rows: 2, placeholder: 'Remember the question I asked at the start? …' }
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Choose your best one. Say it aloud three times: slowly, with a pause before the last words, and looking up.' },
            { type: 'tip', text: '<b>Note:</b> in your research summaries this week, you do not need every part of this structure, and you do not need a PowerPoint. You will use these elements in other academic presentations later.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 9A ───────────────────────── */
    {
      id: 'testlab', number: '05', code: '9A', minutes: 30,
      tone: 'amber', art: 'dec10/assets/week2/s-testlab.svg',
      title: 'Listening Assessment Preparation Homework',
      subtitle: 'Your second Test Lab',
      outcome: 'You complete the Canvas listening practice using today’s tactics — and you know which one to improve next.',
      activities: [
        {
          id: 'e1', short: 'Test Lab', minutes: 30, grouping: 'Homework', art: 'dec10/assets/week2/v/v-d10w2d2-e1.svg',
          title: 'Test Lab: the listening practice on Canvas',
          goal: 'Use four tactics from today in a real practice quiz.',
          blocks: [
            { type: 'flip', title: 'Four tactics from today', hint: 'Turn each card before you start.', items: [
              { front: 'Notes under headings', back: 'Read the headings before you listen. Put each point under the heading it belongs to. Use symbols: →, ↑, b/c.' },
              { front: 'Hear the hidden cause', back: 'Cause and effect is not always “because”. Listen for <i>by …ing</i>, <i>when …</i>, <i>the more …, the more …</i>, <i>due to</i>.' },
              { front: 'Count your words', back: 'NO MORE THAN THREE WORDS means three. Over the limit = zero.' },
              { front: 'Why did he say it?', back: 'Some questions ask about the speaker’s purpose. Listen to what comes <b>after</b> the sentence — it often explains it.' }
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Open <b>Canvas › DEC10 › Week 2 › Listening Assessment Preparation</b> and answer the questions in one sitting, without pausing.' },
            { type: 'do', n: 2, who: 'alone', text: 'Then rate yourself. Bring your weakest tactic to class — your teacher will ask.' },
            { type: 'scale', id: 'e1-notes', title: 'After the quiz', statement: 'My notes were organised under clear headings.', ends: ['Not at all', 'Every time'] },
            { type: 'scale', id: 'e1-cause', statement: 'I could hear cause and effect, even without “because”.', ends: ['Not at all', 'Every time'] },
            { type: 'scale', id: 'e1-lim', statement: 'I kept every short answer inside the word limit.', ends: ['Not at all', 'Every time'] },
            { type: 'fields', fields: [{ id: 'e1-next', label: 'My weakest tactic, and one thing I will do about it this week', rows: 2 }] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['digitalization', 'changing information and processes into a digital form so devices and networks can use them', 'Digitalization is changing the way we work and study.'],
    ['digital divide', 'the gap between people who have computer technology and people who do not', 'There are still huge digital divides in the world.'],
    ['collective action', 'a group working together to reach a common goal', 'Reducing emissions needs collective action, not just one person.'],
    ['holistic', 'looking at the whole thing, not only its parts', 'We need a holistic approach to water and carbon footprints.'],
    ['transition', 'a process of changing from one state to another', 'The digital transition needs the same minerals as the low carbon transition.'],
    ['stakeholder', 'a person or group affected by a decision, who has an interest in it', 'Governments, companies and users are all stakeholders.'],
    ['causal language', 'words that show a cause or an effect', '“Due to”, “resulting in” and “the more …, the more …” are causal language.'],
    ['implications', 'the possible effects or results of something', 'There is little discussion of the environmental implications.'],
    ['mediation', 'comparing, connecting, summarising and paraphrasing sources for your reader', 'In the mediation lesson we compared three sources.'],
    ['account for', 'to form a part or the total of something', 'The training phase accounts for 20–40 per cent of energy use.'],
    ['attributable to', 'caused by', 'Only a fraction of ICT energy use is attributable to AI.'],
    ['outpace', 'to grow or go faster than something else', 'Energy needs may outpace efficiency improvements.'],
    ['signpost', 'a phrase that tells the audience where a talk is going', '“Now, moving on to …” is a signpost.']
  ]
};
