/* DEC10 · Week 1 Day 1 — Foundation week: orientation, building rapport, listening and note-taking (the triple bottom line),
   and two homework stages (reading and note-taking: IPAT or the DTM; listening assessment preparation).
   Protected texts (the TBL transcript, Chertow 2001, Hanks 2019) are in sources.js — never edit them here.
   The listening and reading questions are the Teacher's Book questions, in new interactive formats.
   Keep the id 'd10w1d1' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d1',
  week: 1, day: 1,
  title: 'Listen, note, think',
  duration: 'About 4 hours + homework',
  question: 'Can a business do well by doing good?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question · you will answer it by the end of the day',
  journey: 'Meet your class, see the whole course on one page, then learn to follow a lecture by its signposts and turn it into clear outline notes — the exact skills the listening test rewards.',
  image: 'dec10/assets/week1/hero-d10w1d1.svg',
  imageAlt: 'Illustration: a tablet plays a video about the triple bottom line — profit, people and planet — while outline notes appear in a notebook and road signs read First, Next and Finally.',
  finish: { title: 'Day 2', text: 'Present your framework' },
  goalShort: 'the listening test and tomorrow’s discussion',

  sections: [
    /* ───────────────────────── 1A · Orientation ───────────────────────── */
    {
      id: 'orientation', number: '01', code: '1A', minutes: 20,
      tone: 'blue', art: 'dec10/assets/week1/s-orientation.svg',
      title: 'Orientation',
      subtitle: 'Your ten weeks on one page',
      outcome: 'You know what DEC10 is building towards — and which skills today’s lesson is already training.',
      activities: [
        {
          id: 'o1', short: 'Course map', minutes: 20, grouping: 'Class',
          title: 'Your ten weeks on one page',
          goal: 'Find the key milestones of DEC10 and see why today matters.',
          blocks: [
            { type: 'do', n: 1, who: 'class', text: "Your teacher shows you Canvas and the DEC10 course page. Follow on your own device." },
            { type: 'do', n: 2, who: 'alone', text: "Study the map below for one minute." },
            { type: 'figure', src: 'dec10/assets/week1/roadmap.svg', size: 'wide', alt: 'Your DEC10 journey: Week 1 foundation and diagnostic; Week 2 seminars begin; Week 3 listening and reading practice; Week 4 writing practice; Week 5 LRW Assessment 1; Week 6 final seminar; Week 7 Interactive Presentation; Week 8 circular economy; Week 9 LRW Assessment 2; Week 10 Interactive Discussion.', caption: 'Your DEC10 journey.', credit: 'Day-by-day: Course calendar · what each assessment involves: Assessments (both in the side panel).' },
            { type: 'do', n: 3, who: 'alone', text: "Now play <b>Course detective</b> — you have 2 minutes." },
            { type: 'quiz', id: 'o1-q', title: 'Course detective', items: [
              { q: 'In which week do you give your Interactive Presentation?', options: ['Week 5', 'Week 6', 'Week 7'], answer: 'Week 7', why: 'It is a final assessment and forms 40% of your speaking score.' },
              { q: 'Which country is your Interactive Presentation about?', options: ['Your own country', 'A country your group chooses', 'Australia'], answer: 'Australia', why: 'For the Seminar your group chooses a country (not Australia, not your own). The Interactive Presentation is always about Australia.' },
              { q: 'The Seminar is practice (an open assessment) for…', options: ['the LRW test', 'the Interactive Presentation', 'the diagnostic'], answer: 'the Interactive Presentation', why: 'Same group, same sustainability topic, same skills: research, presenting and answering questions.' },
              { q: 'When is your FIRST listening, reading and writing (LRW) assessment?', options: ['Week 3', 'Week 5', 'Week 7'], answer: 'Week 5', why: 'LRW 1 is in Week 5 and LRW 2 in Week 9 — together they are 70% of your score. Today’s listening and note-taking skills are your first step.' }
            ] },
            { type: 'key', title: 'Why today matters', points: [
              '<b>Listening test:</b> you will follow a talk by its signposts and answer in a strict word limit — you practise both today.',
              '<b>Seminar and Interactive Presentation:</b> you must use a sustainability framework. You meet the first one today.',
              '<b>Tomorrow:</b> you present from your notes only. Good notes tonight = an easy Day 2.'
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 2A · Building rapport ───────────────────────── */
    {
      id: 'rapport', number: '02', code: '2A', minutes: 30,
      tone: 'clay', art: 'dec10/assets/week1/s-rapport.svg',
      title: 'Building rapport',
      subtitle: 'Sustainability bingo',
      outcome: 'You know something real about most of your classmates — and you already asked the follow-up questions that tomorrow’s discussion needs.',
      activities: [
        {
          id: 'r1', short: 'Bingo', minutes: 20, grouping: 'Class',
          title: 'Find someone who… (sustainability bingo)',
          goal: 'Talk to as many classmates as you can — and ask a real follow-up question every time.',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Stand up and walk around. Ask a question to fill a square, e.g. <i>“Have you ever lived in a city of more than ten million people?”</i>' },
              { who: 'pair', text: 'If the answer is <b>yes</b>, ask the follow-up question in the square. Then write the name. <b>One name per classmate</b> — talk to everyone!' },
              { who: 'class', text: 'Four names in a row, a column or a diagonal? Shout <b>“Bingo!”</b> — then keep going for a full card.' }
            ] },
            { type: 'bingo', id: 'r1-bingo', title: 'Have you ever…?', hint: 'Tap a square and type your classmate’s name. Your teacher may ask you about any name on your card!', squares: [
              { text: 'has lived in a city of more than 10 million people', ask: 'Which city? What was hard about it?' },
              { text: 'has a grandparent with five or more brothers and sisters', ask: 'Why were families bigger then?' },
              { text: 'walked or cycled to class today', ask: 'How long did it take?' },
              { text: 'carries a reusable bottle or cup', ask: 'When did you start?' },
              { text: 'has worked or volunteered for a company or a charity', ask: 'What did you do there?' },
              { text: 'would like to start their own business one day', ask: 'What would it sell?' },
              { text: 'has bought something because it was “eco-friendly”', ask: 'Was it worth the money?' },
              { text: 'speaks three or more languages', ask: 'Which one was hardest to learn?' },
              { text: 'has changed phones in the last 12 months', ask: 'What happened to the old one?' },
              { text: 'can name a company that helps its local community', ask: 'What does it do?' },
              { text: 'has a family member who owns shares in a company', ask: 'Do they follow the share price?' },
              { text: 'has already swum at a Sydney beach', ask: 'Which beach? Would you go back?' },
              { text: 'can explain what a “carbon footprint” is', ask: 'Explain it in one sentence!' },
              { text: 'has taken an online course before', ask: 'Did you like it? Why?' },
              { text: 'will study business, economics or commerce', ask: 'Why that degree?' },
              { text: 'has given a presentation in English', ask: 'How did it go?' }
            ] }
          ]
        },
        {
          id: 'r2', short: 'Class snapshot', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Class snapshot',
          goal: 'Report what you found out, using language for groups and numbers.',
          blocks: [
            { type: 'talk', title: 'In your group', prompts: [
              'Which square was the hardest to fill? Why?',
              'Share the most surprising thing you learned about a classmate.',
              'Agree on <b>two facts</b> about the class to report, e.g. how many people walked to class.'
            ] },
            { type: 'language', groups: [
              { label: 'Reporting about a group', phrases: ['Most of us / Nearly everyone …', 'About half of the class …', 'Only two people / Nobody in our group …', 'Surprisingly, …', 'What we have in common is that …'] }
            ] },
            { type: 'fields', fields: [
              { id: 'r2-fact', label: 'Our two facts about the class', rows: 2, placeholder: 'e.g. About half of us walked or cycled to class today…' },
              { id: 'r2-wow', label: 'The most surprising thing I learned about a classmate', rows: 2 }
            ] },
            { type: 'toggle', title: 'Did you notice?', hint: 'Open after the class report', blocks: [
              { type: 'key', title: 'Your bingo card was secretly about this week', points: [
                'Big cities and big families → <b>population</b> (the DTM, your homework).',
                'Reusable cups, new phones, eco-shopping → <b>consumption and technology</b> (the IPAT equation, your homework).',
                'Companies, shares and charities → <b>profit, people and planet</b> (the triple bottom line, next stage).'
              ] }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 3A · Listening and note-taking ───────────────────────── */
    {
      id: 'listening', number: '03', code: '3A', minutes: 90,
      tone: 'teal', art: 'dec10/assets/week1/s-listening.svg',
      title: 'Listening and note-taking',
      subtitle: 'What is the Triple Bottom Line?',
      outcome: 'You can use the Outline Method to take notes from a spoken text, follow a talk by its signposting language, and explain the triple bottom line.',
      activities: [
        {
          id: 'l1', short: 'Hook', minutes: 10, grouping: 'Groups of 2–3',
          title: 'Warmer: is profit enough?',
          goal: 'Wake up what you already know — and make a prediction you will check while listening.',
          blocks: [
            { type: 'scale', id: 'l1-scale', title: 'Take a side', statement: 'A company that makes record profits is a successful company — even if it pollutes a river and underpays its workers.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Not sure' },
            { type: 'spinner', id: 'l1-spin', title: 'Spin a question', text: 'Spin, then discuss the question for 2 minutes with your group. Focus on what you already know — you will hear some answers in the video. Spin again until your group has discussed at least four.', reels: [
              { label: 'Discuss', items: [
                'What do you think are the biggest challenges that our planet faces today?',
                'How do businesses traditionally measure their success?',
                'Do you know any specific practices companies have adopted to ensure fair hiring?',
                'What are the differences between shareholders and stakeholders?',
                'What impact might fossil fuel producers have on global greenhouse gas emissions?',
                'How are companies addressing their environmental responsibilities today?'
              ] }
            ] },
            { type: 'fields', fields: [
              { id: 'l1-pred', label: 'Prediction: the video says companies can measure THREE “bottom lines”, not one. What are they?', rows: 2, placeholder: '1 … 2 … 3 …' }
            ] }
          ]
        },
        {
          id: 'l2', short: 'Words', minutes: 8, grouping: 'Pair',
          title: 'Vocabulary: words you will hear',
          goal: 'Match ten words and phrases from the video with their meanings.',
          blocks: [
            { type: 'match', id: 'l2-match', title: 'Match the word with its definition', hint: 'The bold words are shown in the sentence where you will hear them. Tap one on the left, then its meaning on the right.',
              left: ['Sustainable strategies', 'A concept that <b>posits</b> firms should commit to measuring their social and environmental impact', 'Strategic planning initiatives are generally designed to maximize profits while reducing costs and <b>mitigating</b> risk.', 'Purpose-driven', 'Shareholders', 'Stakeholders', 'Carbon Majors', 'Ethically sourced materials', 'Streamlining', 'Carbon Footprint'],
              right: ['Approaches that seek to meet present needs without compromising the ability of future generations to meet their needs.', 'To assume or suggest something as a fact or principle.', 'Making something less severe, serious, or painful.', 'Guided by a clear and meaningful goal or mission.', 'Individuals or entities that own shares in a company and have a financial interest in its success.', 'Individuals or groups that have an interest in or are affected by a business’s activities.', 'Refers to the major companies and producers responsible for a significant portion of global greenhouse gas emissions.', 'Products or materials obtained in a way that respects ethical standards, such as fair trade and environmental sustainability.', 'Improving efficiency by simplifying or eliminating unnecessary steps in a process.', 'The total amount of greenhouse gases produced directly or indirectly by human activities, measured in carbon dioxide equivalents.'] },
            { type: 'tip', text: '<b>Shareholders</b> vs <b>stakeholders</b> is the pair most students mix up — and the video tests it. Say both words aloud: <b>SHARE</b>holders <i>own</i> part of the company; <b>STAKE</b>holders are <i>affected</i> by it.' }
          ]
        },
        {
          id: 'l3', short: 'Gist', minutes: 10, grouping: 'Alone → Pair',
          title: 'Listening for gist',
          goal: 'Get the big picture on the first listen — purpose and structure, not details.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: "Watch the whole video <b>once</b>. Do not write yet — just listen for the big picture." },
            { type: 'listening', source: 'Harvard Business School Online (2022)', title: 'What is the Triple Bottom Line?', videoId: '1-Ct_53XKYY', start: 0, clip: 'the whole video · about 3 min', transcripts: [['tbl', 'Transcript (open after listening)']] },
            { type: 'do', n: 2, who: 'alone', text: "Answer the two gist questions. Then check your prediction from the warmer." },
            { type: 'quiz', id: 'l3-q', title: 'Gist check', items: [
              { q: 'What is the speaker’s main purpose?', options: ['To explain a way of measuring business success beyond profit', 'To criticise fossil fuel companies', 'To compare shareholders and stakeholders', 'To teach viewers how to start a business'], answer: 'To explain a way of measuring business success beyond profit', why: 'The other options are details inside the talk, not its purpose.' }
            ] },
            { type: 'order', id: 'l3-order', title: 'Put the three components in the order the speaker presents them', items: ['Profit', 'People', 'Planet'], ends: ['First', 'Last'], why: 'Profit (“The first component”), people (“the second component”), planet (“the third and final component”).' },
            { type: 'do', n: 3, who: 'pair', text: "Compare with a partner: which of the warmer questions did the video answer?" }
          ],
          answers: { title: 'Warmer questions — what the video says', items: [
            ['Biggest challenges', 'Climate change, poverty and inequality.'],
            ['How businesses traditionally measure success', 'By profit (the standard bottom line).'],
            ['Fair hiring practices', 'Students’ own answers. The video mentions fair hiring and volunteerism in the workplace.'],
            ['Shareholders vs stakeholders', 'Shareholders own shares in a company and have a financial interest in its success. Stakeholders are individuals or groups that have an interest in or are affected by a business’s activities.'],
            ['Fossil fuel producers', '100 fossil fuel producers have been responsible for 71% of global industrial greenhouse gases since 1988.'],
            ['Environmental responsibilities', 'Using ethically sourced materials, reducing energy consumption and streamlining shipping practices.']
          ] }
        },
        {
          id: 'l4', short: 'Signposts', minutes: 20, grouping: 'Pair',
          title: 'Signposting language: the road signs of a lecture',
          goal: 'Hear where a talk moves to a new section — the moment to start a new main idea in your notes.',
          blocks: [
            { type: 'key', title: 'What signposting does', points: [
              'In academic presentations and lectures, signposting language guides the audience through the <b>structure</b> of the talk.',
              'It signals <b>transitions</b> between sections and <b>emphasises</b> key points.',
              'For a note-taker it is gold: every signpost = <b>a new line on the left of your page</b>.'
            ] },
            { type: 'language', title: 'Signposting language', groups: [
              { label: 'Moving between sections', phrases: ['Now that we’ve covered …, let’s move on to …', 'Moving on to the next point …'] },
              { label: 'Sequencing', phrases: ['Firstly, … Secondly, … Thirdly, …', 'Next, let’s consider …', 'The first / second / final component …'] },
              { label: 'Looking back · examples · rephrasing', phrases: ['As I mentioned earlier, …', 'Let me show you an example of …', 'In other words, …', 'For instance, …'] }
            ] },
            { type: 'do', n: 1, who: 'pair', text: "Listen again. Say <b>“stop!”</b> (or tap the table) every time the speaker moves to a new section." },
            { type: 'do', n: 2, who: 'pair', text: "Now do <b>Signpost spotter</b>: in the transcript, tap the phrases that open a new section. There are six." },
            { type: 'spot', id: 'l4-spot', label: 'Signpost spotter', title: 'Where does each new section start?', hint: 'Tap the phrases that move the talk to a new section. Careful — some highlighted phrases only give an example or add detail.', paras: [
              'The world is full of uncertainty. Monumental challenges such as climate change, poverty and inequality are at the forefront of daily life and becoming increasingly urgent. [[One thing that isn\'t uncertain]] is the need for change.',
              'Business leaders are realizing the power of using sustainable strategies to address the world\'s most pressing issues while driving organizational success. [[*One way to understand]] a business\'s sustainability efforts is by using the triple bottom line, a concept that posits firms should commit to measuring their social and environmental impact in addition to financial performance, [[rather than solely focusing on]] profit or the standard bottom line. The triple bottom line comprises three P\'s, profit, people and the planet.',
              '[[*The first component is profit]]. A firm\'s success heavily depends on its financial performance or the earnings it generates for shareholders. [[Strategic planning initiatives]] are generally designed to maximize profits while reducing costs and mitigating risk.',
              '[[*Historically]], many organizations\' goals have ended there. [[Now]], purpose-driven leaders are discovering they have the power to use business to affect positive change without hampering financial performance.',
              '[[*The triple bottom line\'s second component]] highlights a business\'s societal impact or its commitment to people. It\'s important to distinguish between a firm\'s shareholders and stakeholders. Businesses have traditionally strived to generate value for their shareholders. As they\'ve increasingly embraced sustainability, that focus has broadened to include all stakeholders impacted by business decisions, [[such as]] customers, employees and members of the communities in which they operate.',
              'Some have achieved this by ensuring fair hiring practices and encouraging volunteerism in the workplace. Many companies have also worked to affect change on a larger scale. [[For instance]], by strategically partnering with nonprofits that have similar purpose-driven goals.',
              '[[*The triple bottom line\'s third and final component]] revolves around positively impacting the planet. [[Since the Industrial Revolution]], large corporations have contributed a staggering amount of environmental pollution. A report by the Carbon Majors Database found that 100 fossil fuel producers have been responsible for 71% of global industrial greenhouse gases since 1988.',
              '[[While such companies have contributed to climate change]], they also have the means to combat it. Many business leaders have recognized their responsibility to act and are committed to using ethically sourced materials, reducing energy consumption and streamlining shipping practices to reduce their organization\'s carbon footprints. While adopting the triple bottom line may seem idealistic in a world that emphasizes profit over purpose, innovative companies have shown it\'s possible to do well by doing good.',
              '[[*Are you interested]] in guiding your organization toward positive change? Explore Sustainable Business Strategy, one of our online business and society courses, and discover how you can become a purpose-driven leader.'
            ] },
            { type: 'toggle', title: 'See the map of the talk', hint: 'Open after you check', blocks: [
              { type: 'figure', src: 'dec10/assets/week1/talk-map.svg', size: 'wide', alt: 'Map of the talk: A introduction; B the triple bottom line (“One way to understand”); C–D profit (“The first component”, “Historically”); E–F people (“the second component”); G–H planet (“the third and final component”); I the advertisement (“Are you interested”).', caption: 'Six signposts, six sections.' },
              { type: 'tip', text: 'Notice the last section: <b>“Are you interested…?”</b> starts an advertisement. Signposts also warn you when a speaker stops informing and starts <b>selling</b> — a key clue for attitude questions.' }
            ] }
          ]
        },
        {
          id: 'l5', short: 'Outline method', minutes: 20, grouping: 'Pair',
          title: 'The Outline Method for note-taking',
          goal: 'Turn the talk into notes that show which ideas are main ideas and which are details.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/outline-method.svg', size: 'wide', alt: 'The outline method: main ideas on the left, numbered; supporting details one step to the right (a, b); extra details one more step to the right (bullets).', caption: 'Main ideas on the left. Move right for detail.' },
            { type: 'key', title: 'Four simple steps', numbered: true, points: [
              'Write the <b>main idea</b> on the left side of the page.',
              'Move a bit to the right and write the <b>supporting details</b> below.',
              'If you need to explain more, move to the right again and add <b>more details</b> underneath.',
              'Do the same steps for <b>each new main idea</b>.'
            ] },
            { type: 'cards', title: 'When should you use it?', items: [
              { label: 'Lectures', text: 'Topics that use a lot of words — it breaks big ideas down logically.' },
              { label: 'Planning', text: 'Planning a presentation, project or essay.' },
              { label: 'Recaps', text: 'Summaries or recaps of a lecture; jotting information down quickly.' }
            ] },
            { type: 'do', n: 1, who: 'pair', text: "Listen again. With your partner, write the <b>main ideas only</b> — use the signposts you found. (Hint: four.)" },
            { type: 'do', n: 2, who: 'pair', text: "Listen once more and add the <b>details</b> under each main idea, one step to the right." },
            { type: 'fields', fields: [
              { id: 'l5-notes', label: 'Our outline notes', rows: 10, placeholder: '1. Intro and the triple bottom line\n     a. …\n2. …' }
            ] },
            { type: 'do', n: 3, who: 'pair', text: "Now build the model outline and compare it with yours." },
            { type: 'outline', id: 'l5-ol', title: 'Build the model outline', hint: 'These are the sample notes, in order — but every line is on the left. Use the arrows to move each line to the right level.', items: [
              [0, 'Intro and the triple bottom line'], [1, 'challenges the world is facing today'], [1, '3 components'],
              [0, 'The first component – profit'], [1, 'Financial performance is the key.'], [1, 'Traditional focus: maximise profits.'], [1, 'Now: use business to affect positive changes.'],
              [0, 'The second component – people'], [1, 'Societal impact'], [1, 'Difference between shareholders and stakeholders.'], [1, 'Not only value shareholders but also stakeholders e.g. customers, employees'], [1, 'Examples:'], [2, 'fair hiring practice – volunteerism in workplace'], [2, 'partner with nonprofits'],
              [0, 'The third component – planet'], [1, 'Carbon Majors and greenhouse gases'], [1, 'Measures to combat climate change'], [2, 'Ethically sourced materials'], [2, 'Reduce energy consumption'], [2, 'Streamline shipping practices']
            ] }
          ]
        },
        {
          id: 'l6', short: 'Test practice', minutes: 10, grouping: 'Alone',
          title: 'Building understanding: test-style questions',
          goal: 'Answer test-style questions from your notes — inside the word limit, and with the confidence your evidence deserves.',
          blocks: [
            { type: 'key', tone: 'warn', title: 'The word limit is part of the answer', points: [
              '“Write no more than three words” means <b>four words = zero</b>, even if the idea is right.',
              'Numbers count as one word: <b>71%</b> is one word.',
              'Copy the words you <b>heard</b>. Don’t add extra words like <i>the</i> or <i>about</i> unless you need them.'
            ] },
            { type: 'limit', id: 'l6-lim', title: 'Questions 1–2', rule: 'Write NO MORE THAN THREE WORDS', max: 3, items: [
              { q: 'What are two examples of stakeholders?', accept: { need: 2, any: ['customer', 'employee', 'communit'] }, model: 'customers, employees (or members of the communities)', why: 'Any two of customers, employees, members of the communities.' },
              { q: 'What percentage of global industrial greenhouse gases have been produced by 100 fossil fuel producers since 1988?', accept: ['71%', '71 percent', '71 per cent', 'seventy-one percent', 'seventy-one per cent', '71'], model: '71%', why: '“…100 fossil fuel producers have been responsible for 71% of global industrial greenhouse gases since 1988.”' }
            ] },
            { type: 'bet', id: 'l6-bet', title: 'Questions 3–5 · the speaker’s attitude', coins: 10, items: [
              { q: 'What’s the speaker’s attitude towards “triple bottom line” to achieve sustainable business practices?', options: ['Sceptical and dismissive', 'Neutral and informative', 'Supportive and encouraging', 'Critical and confrontational'], answer: 'Supportive and encouraging', why: 'She ends with “innovative companies have shown it’s possible to do well by doing good” — and invites you to take a course. Informative, yes; neutral, no.' },
              { q: 'Which phrase shows the speaker is worried about the problems in the world?', options: ['“The world is full of uncertainty.”', '“Monumental challenges such as climate change, poverty, and inequality are at the forefront of daily life.”', '“Many companies have also worked to affect change on a larger scale.”', '“While adopting the triple bottom line may seem idealistic in a world that emphasizes profit over purpose.”'], answer: '“Monumental challenges such as climate change, poverty, and inequality are at the forefront of daily life.”', why: '“Monumental” and the specific problems (and “increasingly urgent”) show concern. “Full of uncertainty” is general, not worry about named problems.' },
              { q: 'What does the speaker mean when she said: “While such companies have contributed to climate change, they also have the means to combat it”?', options: ['She only criticizes these companies.', 'She is hopeful these companies can improve.', 'She doesn’t care about what these companies do.', 'She is completely negative about these companies.'], answer: 'She is hopeful these companies can improve.', why: '“While X, they also have the means to…” — the contrast moves from blame to possibility.' }
            ] }
          ]
        },
        {
          id: 'l7', short: 'Criticality', minutes: 12, grouping: 'Groups of 3–4',
          title: 'Criticality: do well by doing good?',
          goal: 'Question the framework — then answer today’s big question with a reason.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/tbl-venn.svg', size: 'wide', alt: 'The triple bottom line: profit (financial performance, shareholders), people (all stakeholders, fair hiring, nonprofits) and planet (71% of industrial greenhouse gases from 100 producers; ethical materials, less energy, streamlined shipping). In the centre: do well by doing good.', caption: 'The triple bottom line — your notes as one picture.' },
            { type: 'spinner', id: 'l7-spin', title: 'Boardroom challenge', text: 'Spin. You are the CEO of this company and you must defend this priority to your group for one minute. Your group then asks you one hard question.', reels: [
              { label: 'You are the CEO of…', items: ['a fast-fashion brand', 'a family café', 'a coal-mining company', 'a tech start-up', 'a supermarket chain', 'an airline'] },
              { label: 'Your top priority is…', items: ['profit', 'people', 'planet'] }
            ] },
            { type: 'talk', title: 'Then discuss (choose two)', prompts: [
              'What are some potential challenges that companies might face when implementing the triple bottom line approach? How can these challenges be overcome?',
              'Do you think the triple bottom line approach is realistic for all businesses, regardless of size or industry? Why or why not?',
              'What role do consumers play in influencing companies to adopt sustainable strategies? How can consumer behaviour drive change in business practices?',
              'Reflect on the statement, “It’s possible to do well by doing good.” Do you agree with this idea? Why or why not? Can you think of instances where this might not hold true?',
              'If you were a business leader, what steps would you take to ensure your company aligns with the triple bottom line? Which component (profit, people, or planet) would you prioritize, and why?'
            ] },
            { type: 'language', groups: [
              { label: 'Giving a balanced view', phrases: ['While it is true that …, …', 'This may work for …, but not for …', 'The main obstacle would be …', 'One way to overcome this is …'] }
            ] },
            { type: 'scale', id: 'l7-scale', title: 'Today’s big question — vote again', statement: 'It’s possible for a business to do well by doing good.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'It depends' },
            { type: 'fields', fields: [
              { id: 'l7-why', label: 'My answer to the big question in one sentence, with a reason', rows: 2, placeholder: 'A business can / cannot … because …' },
              { id: 'l7-exit', label: 'Exit ticket: one thing I will do differently the next time I take notes from a lecture', rows: 2 }
            ] },
            { type: 'key', title: 'Before you leave', points: [
              'Your teacher gives you <b>ONE</b> reading for homework: <b>the IPAT equation</b> (Chertow, 2001) or <b>the Demographic Transition Model</b> (Hanks, 2019). Half the class reads each one.',
              'Tomorrow you discuss your reading <b>from your notes only</b> — so your notes must be good enough to teach a classmate.'
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 4A · Reading and note-taking homework ───────────────────────── */
    {
      id: 'reading', number: '04', code: '4A', minutes: 75,
      tone: 'amber', art: 'dec10/assets/week1/s-reading.svg',
      title: 'Reading and note-taking homework',
      subtitle: 'A second sustainability framework',
      outcome: 'You can choose a note-taking method and use it to take detailed notes from an academic text, organising main ideas, supporting arguments and relevant evidence.',
      activities: [
        {
          id: 'h1', short: 'Short forms', minutes: 15, grouping: 'Homework',
          title: 'Short forms to help with note-taking',
          goal: 'Write notes faster with symbols and abbreviations.',
          blocks: [
            { type: 'flip', title: 'Symbols and abbreviations', hint: 'Say the meaning, then turn the card to check.', items: [
              { front: '→', back: 'leads to, causes (showing result)' },
              { front: '←', back: 'caused by, because of (showing reason)' },
              { front: '↑', back: 'increase, more, go up, up' },
              { front: '↓', back: 'decrease, less, go down, down' },
              { front: '∴', back: 'therefore' },
              { front: '≈', back: 'approximately' },
              { front: 'w', back: 'with' },
              { front: 'w/o', back: 'without' },
              { front: 'prob', back: 'problem, probable, probably' },
              { front: 'imp', back: 'important, importance' },
              { front: 'diff', back: 'difference, different, difficult, difficulty' },
              { front: 'i.e.', back: 'that is' }
            ] },
            { type: 'squeeze', id: 'h1-sq', title: 'Squeeze it!', hint: 'Turn each sentence from the video into notes. Stay under the character limit — the gauge turns red if you go over. Keep numbers and key terms; cut the rest.', items: [
              { text: '100 fossil fuel producers have been responsible for 71% of global industrial greenhouse gases since 1988.', max: 50, model: '100 FF producers → 71% global ind. GHG since 1988' },
              { text: 'Strategic planning initiatives are generally designed to maximize profits while reducing costs and mitigating risk.', max: 40, model: 'Strategy: ↑ profit, ↓ costs & risk' },
              { text: 'Businesses have traditionally strived to generate value for their shareholders.', max: 36, model: 'Trad. focus: value for shareholders' }
            ] },
            { type: 'table', id: 'h1-mine', title: 'My own symbols (keep adding to this list all course)', columns: ['Symbol / abbreviation', 'Meaning'], rows: 3 },
            { type: 'tip', text: 'Adapted from: Smith, S. (2022). <i>Using symbols and abbreviations.</i> EAP Foundation. https://www.eapfoundation.com/listening/notetaking/symbols/' }
          ]
        },
        {
          id: 'h2', short: 'Choose a method', minutes: 15, grouping: 'Homework',
          title: 'Different note-taking styles',
          goal: 'Find the method that fits the situation — and the one that works for you.',
          blocks: [
            { type: 'listening', source: 'Teachings in Education (2019)', title: 'Note-taking: Strategies and techniques', videoId: 'ryTYn12g--0', start: 0, clip: '7:02', transcripts: [], mode: 'video' },
            { type: 'quiz', id: 'h2-q', title: 'Which method would you recommend?', items: [
              { q: '<b>Scenario 1:</b> A classmate is having trouble making notes in class because the teacher talks too quickly. No handouts are given prior to class. Which note-taking method would you recommend to best help your classmate?', options: ['Outlining', 'Sentence Method', 'SQ3R', 'Guided notes', 'Mind Maps', 'Charting', 'Cornell Method'], answer: 'Sentence Method', why: 'This method is best for making notes when sitting in fast-paced lectures. Guided notes need handouts; outlining and Cornell suit talks that are not so fast-paced.' },
              { q: '<b>Scenario 2:</b> You always use the Cornell method of taking notes. However, you are feeling overwhelmed by the complexity of the current assignment and do not know what to do first. Which TWO note-taking methods can better help you organise your ideas?', options: ['Mind Maps + Charting', 'Cornell Method + Guided notes', 'SQ3R + Sentence Method', 'Outlining + Guided notes'], answer: 'Mind Maps + Charting', why: 'Mind maps connect smaller ideas to larger ones; charting organises information you have already made notes on.' },
              { q: '<b>Scenario 3:</b> For your presentation assignment, you are expected to refer to ideas from five possible readings. Which TWO note-taking strategies would help you get a deeper understanding of the readings?', options: ['SQ3R + Charting', 'Sentence Method + Guided notes', 'Cornell Method + Mind Maps', 'Guided notes + Outlining'], answer: 'SQ3R + Charting', why: 'SQ3R is best for analysing written materials that need to be read and studied; charting works as a reading matrix to see similar ideas across readings quickly.' }
            ] },
            { type: 'cards', title: 'You may also like to try a note-taking app', items: [
              { label: 'Microsoft OneNote', text: 'a free note-taking app' }, { label: 'Apple Notes', text: 'for Apple users' }, { label: 'Google Keep', text: 'for Google power users' },
              { label: 'Notion', text: 'for collaboration' }, { label: 'Obsidian', text: 'for power note-takers' }, { label: 'Joplin', text: 'an Evernote alternative' }
            ] },
            { type: 'fields', fields: [
              { id: 'h2-me', label: 'Traditional or digital: which will help YOU retain information longer? Which method will you use tonight, and why?', rows: 3 }
            ] }
          ]
        },
        {
          id: 'h3', short: 'Your reading', minutes: 30, grouping: 'Homework',
          title: 'Note-taking for discussion: your reading',
          goal: 'Understand your reading, then make notes good enough to teach it tomorrow — from memory.',
          blocks: [
            { type: 'key', title: 'Read the one your teacher gave you', points: [
              'During tomorrow’s discussion you can only use your <b>notes</b> — not the text.',
              'So your notes must have enough information to help you remember what is in the text.'
            ] },
            { type: 'cards', title: 'Two texts — read only yours', items: [
              { label: 'Text 1 · IPAT', text: 'Chertow (2001) — the IPAT equation and its variants. Do questions 1–2 below.' },
              { label: 'Text 2 · DTM', text: 'Hanks (2019) — the Demographic Transition Model. Do questions 1–3 further down.' }
            ] },
            { type: 'sources', ids: ['chertow', 'hanks'] },
            { type: 'quiz', id: 'h3c-q', title: 'IPAT · Chertow (2001) · Activity 1 · Understanding the text', items: [
              { q: '<b>Question 1.</b> Skim the text. The reading is about', options: ['how technology can help protect the environment', 'how technology can improve human life', 'how the relationship between population, affluence and technology can impact the environment', 'how the relationship between population, affluence and technology is unbalanced'], answer: 'how the relationship between population, affluence and technology can impact the environment', why: 'Technology is one part of the equation; the text is about all three factors and their impact.' }
            ] },
            { type: 'match', id: 'h3c-m', title: 'IPAT · Question 2 · Match the following perspectives to the person’s viewpoint', left: ['Commoner', 'Ehrlich &amp; Holdren', 'Chertow (author)'], right: ['Technological changes in production are needed to help the environment', 'Population and affluence play an important part not just technology to help the environment', 'The importance of understanding the relationship between all three environmental influences: people, affluence and technology'] },
            { type: 'quiz', id: 'h3h-q', title: 'DTM · Hanks (2019) · Activity 1 · Understanding the text', items: [
              { q: '<b>Question 1.</b> Skim the text. The reading is about:', options: ['How population growth is affected by births only.', 'How population growth is not affected by deaths.', 'how population growth is affected by both birth and death rates.', 'How population growth has no correlation to birth and death rates.'], answer: 'how population growth is affected by both birth and death rates.', why: '“This model shows how birth and death rates influence population growth.”' },
              { q: '<b>Question 3.</b> Choose the best description as to why the author added what critics thought at the end of the text', options: ['to inform the reader of the author’s position on DTM', 'to inform the reader that there were limitations to the DTM research', 'to persuade the reader that DTM although there is criticism, the DTM is a good model to use', 'to persuade the reader that this model should not be used'], answer: 'to inform the reader that there were limitations to the DTM research', why: 'An encyclopedia entry informs: “Despite its widespread use, the model faces criticism…”' }
            ] },
            { type: 'match', id: 'h3h-m', title: 'DTM · Question 2 · Match the following stages to the population growth rates', left: ['preindustrial', 'early expanding', 'late expanding', 'postindustrial'], right: ['Minimal population growth rate', 'Rapid population growth rate', 'Population growth still high, but birth rates falling sharply', 'Stable population growth rate'] },
            { type: 'checklist', id: 'h3-must', title: 'Activity 2 · Making notes — your notes must include', meter: ['included', 'All in — great notes!'], items: [
              'Model name and acronym', 'Where the reading came from and the date it was published', 'How the model works (IPAT) / the various stages of this model (DTM)', 'The purpose of this article', 'The intended audience', 'The effect this model has on society',
              'The writer’s opinion on this model', 'Other perspectives on this model', 'Your opinion on how effective this model is and its implication on society', 'Your criticism of the model'
            ] },
            { type: 'fields', fields: [
              { id: 'h3-notes', label: 'My notes (use the method you chose — and your short forms!)', rows: 14, placeholder: 'Model: … (…)\nSource: …\n  → …' }
            ] }
          ]
        },
        {
          id: 'h4', short: 'Summarise', minutes: 15, grouping: 'Homework',
          title: 'Summarising, then rehearsing',
          goal: 'Write a summary from your notes only, then practise saying it aloud.',
          blocks: [
            { type: 'key', tone: 'warn', title: 'Close the text first', points: ['Using the notes from the previous activity, write a summary of the article. <b>DO NOT read the article again.</b>', 'Save it somewhere you can easily access tomorrow. You may review it in class, but not read from it.'] },
            { type: 'steps', title: 'Three moves', items: [
              { who: 'alone', text: 'Begin by briefly introducing the text (who wrote it and when), the model it discusses, what it is used for and the implication it has on society.' },
              { who: 'alone', text: 'Describe the purpose of the article and the various perspectives on the model.' },
              { who: 'alone', text: 'Conclude with your viewpoint on the model and how it could be improved — keep this in the separate box, so your summary stays the writer’s ideas.' }
            ] },
            { type: 'language', groups: [
              { label: 'Linking with referents', phrases: ['The acronym commonly used for <i>this</i> model is …', '<i>This</i> equation shows …', '<i>These</i> stages …', '<i>Its</i> critics argue that …'] },
              { label: 'Introducing the text', phrases: ['In his / her 2001 article, … explains …', 'According to Hanks (2019), …', 'The writer outlines / argues / notes that …'] }
            ] },
            { type: 'fields', fields: [
              { id: 'h4-sum', label: 'My summary (moves 1–2)', rows: 8 },
              { id: 'h4-view', label: 'My view (move 3): how effective is the model, and how could it be improved?', rows: 4 }
            ] },
            { type: 'checklist', id: 'h4-reh', title: 'Prepare for the discussion', meter: ['done', 'Ready for tomorrow!'], items: [
              'I practised presenting my summary to a friend, housemate or family member.',
              'I reflected on their reaction: did they understand it? Did they have a question about it?',
              'I adjusted my summary where needed.'
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 5A · Listening assessment preparation homework ───────────────────────── */
    {
      id: 'testlab', number: '05', code: '5A', minutes: 30,
      tone: 'plum', art: 'dec10/assets/week1/s-test.svg',
      title: 'Listening assessment preparation homework',
      subtitle: 'Your first Test Lab',
      outcome: 'You complete the Canvas listening quiz using today’s test tactics — and you know which tactic to improve next.',
      activities: [
        {
          id: 't1', short: 'Test Lab', minutes: 30, grouping: 'Homework',
          title: 'Test Lab: the listening quiz on Canvas',
          goal: 'Use four tactics from today in a real practice quiz.',
          blocks: [
            { type: 'flip', title: 'Four tactics from today', hint: 'Turn each card before you start the quiz.', items: [
              { front: 'Read first', back: 'Before the audio, underline the key word in each question and predict the answer type: a number? a name? a noun?' },
              { front: 'Ride the signposts', back: '“The first…”, “Historically…”, “The final…” — a signpost means the answer to the next question is coming.' },
              { front: 'Count your words', back: 'No more than three words means three. 71% is one word. Over the limit = zero.' },
              { front: 'Hear the attitude', back: 'Strong words (monumental, staggering, urgent) and contrasts (while…, also…) show how the speaker feels.' }
            ] },
            { type: 'do', n: 1, who: 'alone', text: "Open <b>Canvas › DEC10 › Week 1 › Listening assessment preparation</b> and do the quiz in one sitting, without pausing." },
            { type: 'do', n: 2, who: 'alone', text: "Then rate yourself. Bring your weakest tactic to class — your teacher will ask." },
            { type: 'scale', id: 't1-sig', title: 'After the quiz', statement: 'I could hear where each new section of the talk started.', ends: ['Not at all', 'Every time'] },
            { type: 'scale', id: 't1-lim', statement: 'I kept every short answer inside the word limit.', ends: ['Not at all', 'Every time'] },
            { type: 'fields', fields: [
              { id: 't1-next', label: 'My weakest tactic, and one thing I will do about it this week', rows: 2 }
            ] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['sustainable strategies', 'approaches that meet present needs without compromising the ability of future generations to meet their needs', 'Business leaders are using sustainable strategies to address pressing issues.'],
    ['posit', 'to assume or suggest something as a fact or principle', 'The concept posits that firms should measure their social impact.'],
    ['mitigate', 'to make something less severe, serious or painful', 'Plans are designed to reduce costs and mitigate risk.'],
    ['purpose-driven', 'guided by a clear and meaningful goal or mission', 'Purpose-driven leaders want business to change things for the better.'],
    ['shareholder', 'a person or organisation that owns shares in a company and has a financial interest in its success', 'Businesses traditionally create value for their shareholders.'],
    ['stakeholder', 'a person or group with an interest in, or affected by, a business’s activities', 'Customers, employees and local communities are stakeholders.'],
    ['Carbon Majors', 'the major companies and producers responsible for a large share of global greenhouse gas emissions', 'The Carbon Majors Database studied 100 fossil fuel producers.'],
    ['ethically sourced', 'obtained in a way that respects ethical standards, such as fair trade and environmental sustainability', 'The company uses ethically sourced materials.'],
    ['streamline', 'to improve efficiency by simplifying or removing unnecessary steps', 'They streamlined their shipping practices.'],
    ['carbon footprint', 'the total greenhouse gases produced directly or indirectly by an activity, person or organisation', 'Companies are trying to reduce their carbon footprints.'],
    ['signposting', 'words that show the structure of a talk and where it moves next', '“The first component is…” is a signpost.'],
    ['outline method', 'notes with main ideas on the left and details indented to the right', 'Use the outline method for lectures.']
  ]
};
