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
  journey: 'Learn to paraphrase like a university student (and catch an AI getting it wrong), meet the six skills of the Academic Success Toolkit, and learn to give and use feedback that actually helps.',
  image: 'dec10/assets/week1/hero-d10w1d3.svg',
  imageAlt: 'Illustration: an original sentence card turns into a new paraphrased card through four strategy gears, next to a ring of six coloured skills and a feedback card with a heart, a lightbulb and a star.',
  finish: { title: 'Day 4', text: 'Voices, video and research' },
  goalShort: 'your integrated writing and your Seminar Portfolio',

  sections: [
    /* ───────────────────────── 10A · Paraphrasing ───────────────────────── */
    {
      id: 'paraphrase', number: '01', code: '10A', minutes: 90,
      tone: 'clay', art: 'dec10/assets/week1/s-paraphrase.svg',
      title: 'Academic writing skills: Paraphrasing',
      subtitle: 'Same idea, your words',
      outcome: 'You understand what paraphrasing is and why we do it, you can evaluate sample paraphrases, and you can write and check your own.',
      activities: [
        {
          id: 'p1', short: 'Warm-up', minutes: 10, grouping: 'Pair',
          title: 'Preliminary discussion',
          goal: 'Find out what you already know.',
          blocks: [
            { type: 'talk', title: 'With a partner, discuss', prompts: [
              'What are paraphrasing and summarising? How are they similar? How are they different?',
              'Why do you think paraphrasing and summarising are important in academic writing?',
              'Do you know any strategies for paraphrasing and summarising?'
            ] }
          ],
          answers: { items: [['Paraphrasing vs summarising', 'Both restate an idea from a source in the writer’s own words. Paraphrasing is used for short pieces of text (a phrase or a sentence) and the result is about the same length. Summarising expresses the main ideas of a longer text (a paragraph, a section or a whole article) in fewer words.']] }
        },
        {
          id: 'p2', short: 'Why?', minutes: 10, grouping: 'Pair',
          title: 'Why do we paraphrase in academic writing?',
          goal: 'Know the three reasons — and what counts as plagiarism.',
          blocks: [
            { type: 'flip', title: 'Three reasons', hint: 'Turn each card.', items: [
              { front: '1 · To avoid plagiarism', back: 'Using ideas from a source without a reference — or copying a sentence (even with a reference) without quotation marks — is plagiarism.' },
              { front: '2 · To show you understand', back: 'If you can express an idea in your own words, you truly understand what you read or heard.' },
              { front: '3 · To make it fit YOUR text', back: 'The original sentence was written for another paragraph. Your words connect it to your ideas — and show your attitude to it.' }
            ] },
            { type: 'sort', id: 'p2-sort', title: 'Plagiarism or OK?', hint: 'So why not just use quotes all the time? First, check you know where the line is.', buckets: [
              { label: 'Plagiarism', letter: '✗' }, { label: 'OK', letter: '✓' }
            ], items: [
              { text: 'You use an idea from a source but give no reference.', answer: 0 },
              { text: 'You copy a sentence exactly and add a reference — but no quotation marks.', answer: 0 },
              { text: 'You write the idea in your own words and add a reference.', answer: 1 },
              { text: 'You copy a short phrase exactly, in “quotation marks”, with a reference.', answer: 1 },
              { text: 'You change two or three words of a sentence and add a reference.', answer: 0, why: 'Still too close to the original — this is called “patchwriting”.' }
            ] }
          ]
        },
        {
          id: 'p3', short: '4 steps', minutes: 10, grouping: 'Alone → Pair',
          title: 'How do we paraphrase?',
          goal: 'Watch a short video and put the four steps in order.',
          blocks: [
            { type: 'listening', source: 'YouTube', title: 'Four steps to paraphrase effectively', videoId: 'jpE_DwnNc_s', start: 0, clip: 'short video', transcripts: [], mode: 'video' },
            { type: 'order', id: 'p3-order', title: 'Put the four steps in order', items: ['Read and understand the original sentence', 'Identify any key words or phrases', 'Create a new sentence', 'Compare your paraphrase to the original text'], ends: ['First', 'Last'] },
            { type: 'talk', title: 'Discuss', prompts: [
              'Are there any other steps that you would add to those four?',
              'The speaker says: “First, read the original sentence over and over until you completely understand it.” Is reading only that sentence enough to understand the idea?'
            ] }
          ],
          answers: { items: [
            ['Another step', 'Make sure the paraphrase fits into your paragraph, e.g. link it to the previous sentence.'],
            ['Only the sentence?', 'No. You often need to read the sentences around it — and know how it fits the paragraph and the article.']
          ] }
        },
        {
          id: 'p4', short: 'Strategies', minutes: 15, grouping: 'Pair',
          title: 'Four paraphrasing strategies',
          goal: 'Learn the four strategies and use them together.',
          blocks: [
            { type: 'cards', numbered: true, items: [
              { label: 'Use synonyms', text: 'Replace key words — but check the meaning and the formality.' },
              { label: 'Change word forms', text: '<i>When the economy grew, more jobs were created.</i> → <i>Economic growth resulted in more jobs.</i> (noun → adjective, verb → noun — and the structure changes too)' },
              { label: 'Change the order of information', text: '<i>There are several benefits for local economies that can come from developing ecotourism.</i> → <i>Ecotourism can have several benefits for local economies.</i>' },
              { label: 'Change the linking words', text: '<i>People don’t want to change their lifestyle, <b>so</b> it is difficult to convince them to consume less.</i> → <i>It is difficult to convince people to consume less <b>because</b> they don’t want to change their lifestyle.</i>' }
            ] },
            { type: 'match', id: 'p4-m', title: 'Strategy 1 · Find a more formal synonym', hint: 'Some of these words are informal. Match each one with a better academic choice.', left: ['huge', 'increase', 'effects', 'good', 'bad'], right: ['substantial', 'rise', 'impacts', 'beneficial', 'detrimental'] },
            { type: 'key', tone: 'warn', title: 'Do NOT change technical terms', points: [
              'Words like <b>climate change</b>, <b>stakeholders</b> or <b>affluence</b> (in IPAT) are terms. A “synonym” can change the meaning.',
              'Synonyms are a starting point — not enough on their own. The most important step is to understand the idea.'
            ] }
          ]
        },
        {
          id: 'p5', short: 'Judge it', minutes: 15, grouping: 'Pair',
          title: 'Strategies in use — and one AI mistake',
          goal: 'Identify the strategies in four paraphrases, and decide which ones are good enough.',
          blocks: [
            { type: 'quiz', id: 'p5-q', title: 'Which strategy did the writer use?', items: [
              { q: '<b>Example 1.</b> Original: “The Demographic Transition Model outlines four key stages of population change based on historical trends in developed nations.” Paraphrase: “The Demographic Transition Model lists four important stages of population change based on historical trends in wealthy nations.”', options: ['Using synonyms only', 'Changing the order of information', 'All four strategies'], answer: 'Using synonyms only', why: 'Only three words changed — still far too close to the original.' },
              { q: '<b>Example 2.</b> Original: “In the first stage, known as the ‘preindustrial’ stage, both birth and death rates are high, leading to minimal population growth.” Paraphrase: “In the first stage, known as the ‘preindustrial’ stage, there is minimal population growth due to high birth and death rates.”', options: ['Using synonyms only', 'Changing the order of information', 'All four strategies'], answer: 'Changing the order of information', why: 'Only one strategy — still too similar.' },
              { q: '<b>Example 3.</b> Original: “Even though technology might reduce some negative impacts, it can’t solve all environmental problems and might just delay them.” Paraphrase: “Technology is insufficient as a solution to the world’s environmental challenges, and despite its potential to mitigate these issues, and may merely delay them.”', options: ['Using synonyms only', 'Changing the order of information', 'All four strategies'], answer: 'All four strategies', why: 'Synonyms (mitigate), word forms (solve → solution), new order, new linking word (despite). This one changes enough.' }
            ] },
            { type: 'model', title: 'Example 4 — written by AI', before: 'Original: “In the early 1970s Ehrlich and Holdren devised a simple equation in dialogue with Commoner identifying three factors that created environmental impact. Thus, impact (I) was expressed as the product of (1) population, (P); (2) affluence, (A), which represents consumption using GDP per capita as a measurement; and (3) technology, or more specifically, the efficiency of technology, e.g. carbon emissions per unit of GDP (T).”', text: 'Paraphrase: “Developed in 1970, this equation shows that the environment is affected by three things: how many people there are (population), how much money they have (wealth), and the kind of technology they use.”' },
            { type: 'quiz', id: 'p5-ai', title: 'Spot the AI’s mistakes', items: [
              { q: 'What is wrong with Example 4? Choose the BEST answer.', options: ['Nothing — it is very different from the original', 'It is informal (“things”) and it changes a technical term: affluence ≠ how much money people have', 'It is too similar to the original'], answer: 'It is informal (“things”) and it changes a technical term: affluence ≠ how much money people have', why: 'In IPAT, affluence is a measure of consumption (GDP per capita), not wealth. The AI “translated” instead of understanding the context.' }
            ] },
            { type: 'key', title: 'The lesson', points: ['A good paraphrase changes <b>enough</b>, keeps the <b>meaning</b> and the <b>technical terms</b>, and stays <b>formal</b>.', 'AI can change words fast — but it cannot check meaning for you. That is your job.'] }
          ]
        },
        {
          id: 'p6', short: 'Your turn', minutes: 30, grouping: 'Alone → Pair',
          title: 'Skills in practice',
          goal: 'Write your own paraphrases and watch the copy meter go down.',
          blocks: [
            { type: 'para', id: 'p6-a', title: 'Activity 1 · Use the strategy in brackets', hint: 'The meter shows how many of the original’s key words you reused. Aim for the green zone — and keep the meaning.', items: [
              { text: 'The IPAT model helps us see how increases in population, economic growth, and technology use can hurt the environment.', strategy: 'Use synonyms', keep: ['IPAT'], model: 'The IPAT model aids us in seeing how rising population, economic growth, and advances in technology can harm the environment.' },
              { text: 'At first, the IPAT equation highlighted that population growth has a big impact on the environment.', strategy: 'Change word forms', keep: ['IPAT'], model: 'The first highlight of the IPAT equation was that a growing population greatly impacts the environment.' },
              { text: 'In his 1971 book, “The Closing Circle,” he argued that the way we make things causes more pollution than how many people there are or how rich they are.', strategy: 'Change the order of information', keep: ['The Closing Circle'], model: 'The fact that more pollution is caused by the way we make things than how many people there are or how rich they are was argued in his book, “The Closing Circle” from 1971.' },
              { text: 'Ausubel believes that technology alone can’t solve environmental problems. He suggests a mix of technology, economic methods, and cultural changes might work better.', strategy: 'Use different linking words', keep: ['Ausubel'], model: 'Ausubel believes that technology alone can’t solve environmental problems, so he suggests a mix of technology, economic methods, and cultural changes might work better.' }
            ] },
            { type: 'para', id: 'p6-b', title: 'Activity 2 · With a partner: use as many strategies as you can', hint: 'These are hard! Break each sentence into pieces first, find the key words, then rebuild it. Terms like climate change, poverty and inequality can stay.', items: [
              { text: 'Monumental challenges such as climate change, poverty and inequality are at the forefront of daily life and becoming increasingly urgent. One thing that isn’t uncertain is the need for change.', keep: ['climate change'], model: 'With the growing urgency and presence of enormous challenges such as climate change, poverty, and inequality, the need for change is clear.' },
              { text: 'One way to understand a business’s sustainability efforts is by using the triple bottom line, a concept that posits firms should commit to measuring their social and environmental impact in addition to financial performance, rather than solely focusing on profit or the standard bottom line.', keep: ['triple bottom line'], model: 'The concept of the triple bottom line helps to measure the sustainability of a business. This concept urges a commitment by companies to extend their focus beyond profit to include consideration of their impact on society and the environment.' },
              { text: 'Businesses have traditionally strived to generate value for their shareholders. As they’ve increasingly embraced sustainability, that focus has broadened to include all stakeholders impacted by business decisions, such as customers, employees and members of the communities in which they operate.', keep: ['shareholders', 'stakeholders'], model: 'Increasing acceptance of the importance of sustainability has shifted business priorities from a focus on value generation purely for shareholders to value generation for all stakeholders, including customers, employees, and local communities as well.' },
              { text: 'While such companies have contributed to climate change, they also have the means to combat it.', keep: ['climate change'], model: 'Companies such as these are among the contributors to climate change, but they are also in a position to contribute to the solution.' }
            ] },
            { type: 'checklist', id: 'p6-check', title: 'Before you share: check your best paraphrase', meter: ['checked', 'A strong paraphrase!'], items: ['It has the same meaning as the original.', 'I changed both the words AND the structure.', 'I kept the technical terms.', 'It is formal (no “things”, “huge”, “bad”).', 'I would add a reference, e.g. (Harvard Business School Online, 2022).'] }
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
