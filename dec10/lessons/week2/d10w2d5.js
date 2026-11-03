/* DEC10 · Week 2 Day 5 — critical thinking, pronunciation for presentations, the first feedback action plan,
   the Interactive Presentation check-in and a STAR moment.
   Teacher's Book lessons 19A, 20A, 21A, 22A, 23A. The Teacher's Book content is kept: the ten past beliefs and their answer key,
   the running-dictation text (with its one wrong word), the four bicycle questions, the Graduate Qualities table, the four
   criticality skills, the five Stress Walk sentences, the intonation cards, the AI chunking challenge, the Peer and Teacher
   Feedback Tool statements, the Action Plan (1) example and the Interactive Presentation timeline.
   Extra practice is added around them: more speaking, language banks, chunking with sentences from this week's reading
   (quoted exactly, not changed), a feedback-to-action workshop and a Week 2 review game for the STAR moment.
   Keep the id 'd10w2d5' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w2d5',
  week: 2, day: 5,
  title: 'Think, sound, plan',
  duration: 'About 4 hours',
  question: 'How do you know what to believe — and how do you make people believe you?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question',
  journey: 'Find out why people once believed the Earth was flat — and what changed their minds. Learn what critical thinking really is, make your voice clear and confident with chunking, stress and intonation, turn your Week 2 feedback into a real action plan, check in on your Interactive Presentation research and tell your teacher what you need next.',
  image: 'dec10/assets/week2/hero-d10w2d5.svg',
  imageAlt: 'Illustration: a student at a podium speaks into a microphone; sound waves break into chunks with stressed beats. Behind her, a magnifying glass looks at a flat-earth map and a lightbulb, and a clipboard shows an action plan with ticks.',
  finish: { title: 'Week 3', text: 'More Research Summary presentations, Seminar Discussions — and your action plan in use' },
  goalShort: 'your Research Summary presentations and the Interactive Presentation',

  sections: [
    /* ───────────────────────── 19A · Introduction to critical thinking ───────────────────────── */
    {
      id: 'critical', number: '01', code: '19A', minutes: 70,
      tone: 'blue', art: 'dec10/assets/week2/s-critical.svg',
      title: 'AST: Introduction to critical thinking',
      subtitle: 'Question it, check it, use it',
      outcome: 'You can explain what critical thinking is, and why it is important in DEC10 and at university.',
      activities: [
        {
          id: 'c1', short: 'Warmer', minutes: 12, grouping: 'Pair',
          art: 'dec10/assets/week2/d5-v-c1.svg',
          title: 'Warmer: Past Beliefs and Theories',
          goal: 'All ten ideas are false. Which three did people never believe?',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Read the 10 ideas. <b>All of them are false!</b> But 7 of them were real beliefs in the past. Put each idea in a box. Find the <b>3 ideas people did not believe</b>. If you don’t know, just guess.' },
            { type: 'sort', id: 'c1-sort', title: 'Did people believe this?', hint: 'Tap a card, then tap a box. You need 3 cards in “Nobody believed this”.',
              buckets: [{ label: 'People believed this', text: 'a common belief or theory in the past', letter: '✓' }, { label: 'Nobody believed this', text: 'NOT a common belief', letter: '✗' }],
              items: [
                { text: 'a. The Earth is flat like a disc (not spherical).', answer: 0, why: 'The Greek philosopher Plato first suggested a round Earth in the 4th century BC. In other parts of the world, the flat-Earth belief lasted much longer.' },
                { text: 'b. The Earth needs to be balanced with similar land masses in the Northern and Southern Hemispheres.', answer: 0, why: 'This was the theory of Terra Australis (Australia got its name from it). Explorers disproved it in the 17th and 18th centuries.' },
                { text: 'c. The Earth is completely hollow (empty).', answer: 0, why: 'A real theory — disproven in 1740.' },
                { text: 'd. The Earth rotates in different directions on different days — alternating directions every day.', answer: 1, why: 'Not a common belief or theory.' },
                { text: 'e. The Earth is the centre of the universe, and the sun, moon and all the stars revolve around us.', answer: 0, why: 'A common belief for a very long time.' },
                { text: 'f. Australia’s landmass is growing, and that’s why it took so long for Europeans to discover it.', answer: 1, why: 'Not a common belief or theory.' },
                { text: 'g. California is an island — not connected to the mainland of the USA.', answer: 0, why: 'A mapping error. It was first corrected in 1701.' },
                { text: 'h. There’s no need for doctors to wash their hands (or wear gloves) between patients.', answer: 0, why: 'In 1847 a Hungarian doctor, Ignaz Semmelweis, first noticed the connection between germs and infection.' },
                { text: 'i. People could melt if travelling on fast trains.', answer: 0, why: 'A real fear when the first locomotives (fast trains) appeared.' },
                { text: 'j. Air pollution is a protective layer that the Earth generates to protect itself from alien invasion.', answer: 1, why: 'Not a common belief or theory.' }
              ] },
            { type: 'do', n: 2, who: 'pair', text: 'Tap the markers on the timeline. When did each belief end — and <b>who</b> or <b>what</b> ended it?' },
            { type: 'hotspot', src: 'dec10/assets/week2/d5-beliefs.svg', alt: 'A timeline from ancient Greece to the 1800s with pictures: a flat Earth on a disc, a big southern continent on an old map, a hollow Earth, California as an island, a doctor washing hands and an early steam train.',
              title: 'How old beliefs ended', hint: 'Tap a number to see what changed people’s minds.',
              spots: [
                { x: 13, y: 43, title: 'A flat Earth', text: 'Plato suggested a round (spherical) Earth in the 4th century BC. Observation of ships and shadows slowly changed minds — but in some places the old belief lasted much longer.', color: '#3a58a0' },
                { x: 32, y: 34, title: 'Terra Australis', text: 'People thought a huge southern land had to “balance” the north. Explorers sailed there in the 17th and 18th centuries and found it was not true.', color: '#2b776e' },
                { x: 49, y: 54, title: 'A hollow Earth', text: 'Disproven in 1740. Measurements of the Earth showed that it is not empty inside.', color: '#985c0e' },
                { x: 64, y: 30, title: 'California, the island', text: 'A mapping error. Explorers travelled there by land, and the map was corrected in 1701.', color: '#b0512a' },
                { x: 78, y: 52, title: 'Doctors and hand washing', text: 'In 1847 Ignaz Semmelweis noticed that fewer patients died when doctors washed their hands. He used evidence — numbers — to question what everyone believed.', color: '#7a4a8c' },
                { x: 91, y: 36, title: 'Melting on fast trains', text: 'When the first fast trains appeared, some people feared the speed could hurt or even “melt” the body. People travelled on trains — and the fear disappeared.', color: '#3f7a3a' }
              ] },
            { type: 'do', n: 3, who: 'group', text: 'Discuss the three questions. Use the language bank. Try to speak for <b>one minute</b> on each.' },
            { type: 'talk', title: 'Discuss', prompts: [
              'What do you think about these beliefs and theories?',
              'Why do you think people believed these things? Can you see any logic behind them?',
              'What happened to these beliefs and theories?',
              'Extra: Is there a belief <b>today</b> that people may laugh at in 100 years?'
            ] },
            { type: 'language', title: 'Talk about old beliefs', groups: [
              { label: 'Say what people believed', phrases: ['People <b>used to believe</b> that…', '<b>It was widely believed</b> that…', '<b>At the time,</b> most people thought…'] },
              { label: 'Explain why', phrases: ['It seemed logical <b>because</b>…', 'There <b>was not enough evidence</b> to…', 'People <b>simply accepted</b> what they were told.'] },
              { label: 'Say what changed', phrases: ['This idea <b>was disproven</b> in…', '<b>Later research showed</b> that…', '<b>Thanks to</b> exploration / experiments, we now know…'] }
            ] },
            { type: 'key', title: 'So what changed these beliefs?', points: [
              'Someone <b>asked a question</b> instead of just accepting the idea.',
              'They looked for <b>evidence</b> — experiments, measurements, exploration.',
              'Then they used <b>logic</b> to reach a new conclusion. This is <b>critical thinking</b>.'
            ] }
          ]
        },
        {
          id: 'c2', short: 'Definition', minutes: 6, grouping: 'Alone → Pair',
          art: 'dec10/assets/week2/d5-v-c2.svg',
          title: 'What is critical thinking? · Activity 1 Definition',
          goal: 'Write your own definition first — no searching.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Write a definition of critical thinking in <b>1–2 sentences</b>. This is <b>your</b> understanding — don’t look anything up!' },
            { type: 'language', title: 'Useful frames for a definition', groups: [
              { label: 'Start', phrases: ['Critical thinking <b>is the ability to</b>…', 'Critical thinking <b>means</b>…', '<b>In my view,</b> critical thinking is…'] },
              { label: 'Add detail', phrases: ['…<b>rather than</b> just…', '…<b>in order to</b> make better decisions.', '<b>For example,</b> a critical thinker…'] }
            ] },
            { type: 'fields', fields: [{ id: 'c2-def', label: 'My definition of critical thinking', placeholder: 'Critical thinking is…', rows: 3 }] },
            { type: 'do', n: 2, who: 'pair', text: 'Read your definition to a partner. Find <b>one idea you both have</b> and <b>one idea only one of you has</b>.' },
            { type: 'talk', title: 'Compare', prompts: ['We both think critical thinking is about…', 'You mentioned… — I didn’t think of that.', 'I’m not sure I agree that… because…'] }
          ]
        },
        {
          id: 'c3', short: 'Dictation', minutes: 15, grouping: 'Pair (A + B)',
          art: 'dec10/assets/week2/d5-v-c3.svg',
          title: 'Activity 2 Running dictation',
          goal: 'Student A reads and speaks, Student B listens and writes. Then find the one wrong word.',
          blocks: [
            { type: 'steps', title: 'How it works', items: [
              { who: 'pair', text: 'Decide who is <b>Student A</b> (the reader) and who is <b>Student B</b> (the writer).' },
              { who: 'alone', text: '<b>Student A:</b> open the text below. Read a few words, remember them, then <b>say them</b> to your partner. Your partner must <b>not</b> see the screen.' },
              { who: 'alone', text: '<b>Student B:</b> listen and write in the box. Student A <b>cannot help</b> with the writing — only repeat or spell a word.' },
              { who: 'pair', text: 'When you finish, <b>check together</b> with the text.' }
            ] },
            { type: 'language', title: 'Dictation English', groups: [
              { label: 'Student B asks', phrases: ['Could you <b>say that again</b>, please?', 'Could you <b>slow down</b> a little?', 'How do you <b>spell</b> “judgments”?', 'Is that <b>one word or two</b>?'] },
              { label: 'Student A says', phrases: ['<b>New line.</b> / <b>Bullet point.</b>', '<b>Comma</b> … <b>full stop</b>.', 'It’s spelled <b>A-N-A-L-Y-S-I-N-G</b>.', 'OK — <b>from the beginning</b>…'] }
            ] },
            { type: 'toggle', title: 'Student A only — the running dictation text', hint: 'Student B: don’t open this!', blocks: [
              { type: 'model', title: 'Running dictation text', text: 'Critical thinking is the process of carefully analysing information to make judgments and solve problems.<br>This involves:', list: ['accepting information provided', 'separating facts from opinions and relevant information from irrelevant information', 'noticing errors in arguments', 'using logic and evidence to make decisions and come up with conclusions'] }
            ] },
            { type: 'fields', fields: [{ id: 'c3-dict', label: 'Student B writes here', placeholder: 'Critical thinking is…', rows: 7 }] },
            { type: 'do', n: 2, who: 'pair', text: 'Check what Student B wrote. Then read the text again: <b>one word</b> in it is wrong. Tap the word you would change.' },
            { type: 'spot', id: 'c3-spot', label: 'Find the wrong word', title: 'Which word does not fit critical thinking?', hint: 'Tap one word.', paras: [
              'Critical thinking is the process of carefully [[analysing]] information to make [[judgments]] and solve problems. This involves: [[*accepting]] information provided; [[separating]] facts from opinions; [[noticing]] errors in arguments; [[using]] logic and evidence to make decisions.'
            ] },
            { type: 'quiz', id: 'c3-q', items: [
              { q: 'Which word should replace it?', options: ['questioning', 'repeating', 'ignoring', 'copying'], answer: 'questioning', why: 'A critical thinker does not just accept information — they question it. This is the key idea of critical thinking.' }
            ] },
            { type: 'key', title: 'Critical thinking — the corrected definition', points: [
              'Critical thinking is the process of carefully analysing information to make judgments and solve problems.',
              'It involves <b>questioning</b> information provided; separating facts from opinions and relevant information from irrelevant information; noticing errors in arguments; and using logic and evidence to make decisions and come up with conclusions.'
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Compare this definition with <b>your</b> definition from Activity 1. What did you include? What did you miss? Improve your definition.' },
            { type: 'fields', fields: [{ id: 'c3-better', label: 'My definition — improved', placeholder: 'Critical thinking means questioning…', rows: 3 }] },
            { type: 'flash', id: 'c3-flash', title: 'Memory challenge', text: 'Critical thinking is the process of carefully analysing information to make judgments and solve problems.', seconds: 6, writer: 'You', reader: 'The screen' }
          ]
        },
        {
          id: 'c4', short: 'Example', minutes: 12, grouping: 'Pair',
          art: 'dec10/assets/week2/d5-v-c4.svg',
          title: 'Critical Thinking: An Example',
          goal: 'Four questions, from easy to hard. Notice how your thinking changes.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: '<b>Think.</b> Answer the questions <b>one at a time</b>. The first one takes about 15 seconds. You can talk about the last one for 1–2 minutes.' },
            { type: 'carousel', title: 'car – bus – bicycle – motorbike', slides: [
              { title: 'Question a', text: 'What “group” do all these items belong to?<br><b>car – bus – bicycle – motorbike</b>', image: 'dec10/assets/week2/d5-transport.svg', alt: 'A car, a bus, a bicycle and a motorbike in a row.' },
              { title: 'Question b', text: 'Which item is different from the others?<br><b>car – bus – bicycle – motorbike</b>' },
              { title: 'Question c', text: 'Why is a bicycle different from the other items?' },
              { title: 'Question d', text: 'How does using a bicycle help people and the environment?<br><small>Talk for 1–2 minutes. You can also talk about problems with bicycles.</small>' }
            ] },
            { type: 'toggle', title: 'Possible answers', hint: 'Open after you discuss', blocks: [
              { type: 'model', title: 'Possible answers', rows: [
                ['a', 'They’re all types of transport.'],
                ['b', 'The bicycle. (Some people choose the bus, because it is public transport.)'],
                ['c', 'It’s not motorised.'],
                ['d', 'It doesn’t create any harmful emissions, so people can reduce their footprint. People get some physical exercise and save money on petrol or public transport. (Talking about the negative points of bicycles is fine too — that is also critical thinking!)']
              ] }
            ] },
            { type: 'do', n: 2, who: 'pair', text: '<b>Reflect on your thinking.</b> Which questions were easier? Which were harder? Put them in order.' },
            { type: 'order', id: 'c4-order', title: 'From simple to most complex', ends: ['Telling knowledge (simple)', 'Using knowledge (most complex)'], items: [
              'a. What “group” do these items belong to? — you use your basic knowledge.',
              'b. Which item is different? — you use a little more logic.',
              'c. Why is a bicycle different? — you justify your answer.',
              'd. How does a bicycle help people and the environment? — you use different information to form an argument.'
            ], why: 'We move from <b>telling</b> knowledge to <b>using</b> knowledge. Question d needs the most critical thinking — but to answer it, you first need a–c.' },
            { type: 'figure', src: 'dec10/assets/week2/d5-ladder.svg', alt: 'A staircase with four steps. Step 1 Simple: basic knowledge. Step 2 Less simple: a little logic. Step 3 More complex: justify your answer. Step 4 Most complex: build an argument. An arrow goes from Telling knowledge at the bottom to Using knowledge at the top.', caption: 'From telling knowledge to using knowledge' },
            { type: 'talk', title: 'Discuss', prompts: ['Which questions did you find easier and more challenging? Why?', 'Which kind of question will you meet more at university?'] },
            { type: 'language', title: 'Explain how hard something was', groups: [
              { label: 'Easy', phrases: ['Question a was <b>straightforward</b> because I only needed to…', 'I could answer it <b>from memory</b>.'] },
              { label: 'Hard', phrases: ['Question d was <b>more challenging</b> because I had to <b>combine</b>…', '<b>To answer</b> d, I <b>first needed to</b>…', 'I had to <b>weigh up</b> the pros and cons.'] }
            ] },
            { type: 'do', n: 3, who: 'pair', text: '<b>Your turn.</b> Spin a new set. Ask your partner the four kinds of question — from simple to complex. Then swap.' },
            { type: 'spinner', id: 'c4-spin', title: 'Build a thinking ladder', text: 'Ask the question type on your set. Your partner answers.', reels: [
              { label: 'Set', items: ['email – text message – video call – letter', 'laptop – phone – smart TV – game console', 'bus – train – plane – e-scooter', 'YouTube – Netflix – podcast – radio', 'paper book – e-book – audiobook – library'] },
              { label: 'Question', items: ['a. What group do they belong to?', 'b. Which one is different?', 'c. Why is it different?', 'd. How does it help or harm people and the planet?'] }
            ], note: 'Spin, ask, answer — then swap roles.' }
          ]
        },
        {
          id: 'c5', short: 'Why it matters', minutes: 12, grouping: 'Groups of 3',
          art: 'dec10/assets/week2/d5-v-c5.svg',
          title: 'Why is Critical Thinking Important?',
          goal: 'Why do humans — and university students — need critical thinking?',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Discuss these questions for <b>1–2 minutes</b>. Think back to the past beliefs in the Warmer.' },
            { type: 'talk', title: 'Discuss', prompts: [
              'Why do you think critical thinking is important for humanity?',
              'Why is it important for university students?',
              'Imagine a world where doctors didn’t wash their hands — or where people still believed they could melt on a fast train. What would it be like?'
            ] },
            { type: 'key', title: 'Why we need critical thinking', points: [
              'We need critical thinking to find solutions to problems, make better decisions, be innovative/creative and to make progress as a society.',
              'Questioning information that we are presented with and recognising the difference between credible and non-credible sources is particularly important in today’s digital age, where we receive so much information, but it’s not always accurate.'
            ] },
            { type: 'do', n: 2, who: 'pair', text: '<b>Critical thinking online.</b> You see these posts about this week’s topic. What is the <b>best first question</b> a critical thinker asks? Bet on your answer. Use the reading by Griffiths (2020) to help you.' },
            { type: 'sources', ids: ['footprint'] },
            { type: 'bet', id: 'c5-bet', title: 'Think before you share', proof: 'Bet big only when you are sure.', items: [
              { q: 'A post says: “Sending one email with a photo makes 50g of CO2!”', options: ['Who says this, and how old is the figure?', 'How many likes does the post have?', 'Is the photo in the email nice?', 'Can I share it now?'], answer: 'Who says this, and how old is the figure?', why: 'In Griffiths (2020), this figure comes from Mike Berners-Lee — and the text says “these figures are from a decade ago”. Always check who and when.' },
              { q: 'A video says: “Watching online videos is the biggest cause of climate change.”', options: ['What do the numbers really say?', 'Is the video funny?', 'Does the speaker look confident?', 'Did my friend share it?'], answer: 'What do the numbers really say?', why: 'Griffiths (2020) says online video is roughly 1% of global emissions. That is a lot — but it is not “the biggest cause”. The claim is exaggerated.' },
              { q: 'A tech company says: “Our data centres are carbon-neutral.”', options: ['Do they really use renewable energy, or do they buy carbon offsets?', 'Is the company famous?', 'Is their logo green?', 'Do they have many customers?'], answer: 'Do they really use renewable energy, or do they buy carbon offsets?', why: 'Paragraph C: many data centres run on renewable energy, but some companies buy “carbon offsets”, and people disagree about the real impact. Also ask: who benefits from this claim?' },
              { q: 'Your friend says: “Texting is greener than emailing.”', options: ['Is this a fact with a source, or just an opinion?', 'Is my friend usually right?', 'Do I text more than I email?', 'Is this a popular idea?'], answer: 'Is this a fact with a source, or just an opinion?', why: 'Here there is a source: Griffiths (2020) says each SMS generates just 0.014g of CO2e. A fact with a source is stronger than an opinion.' }
            ] },
            { type: 'language', title: 'Questions a critical thinker asks', groups: [
              { label: 'About the source', phrases: ['<b>Who</b> says so?', '<b>How old</b> is this information?', '<b>Who benefits</b> from this claim?'] },
              { label: 'About the claim', phrases: ['What is the <b>evidence</b>?', 'Is this a <b>fact</b> or an <b>opinion</b>?', 'What is <b>missing</b>?', 'Is this <b>exaggerated</b>?'] }
            ] },
            { type: 'tip', text: 'Use these questions when you choose sources for your Research Summary and your Interactive Presentation.' }
          ]
        },
        {
          id: 'c6', short: 'Graduate Qualities', minutes: 6, grouping: 'Pair',
          art: 'dec10/assets/week2/d5-v-c6.svg',
          title: 'The University of Sydney’s List of Graduate Qualities',
          goal: 'Critical thinking is on the University’s list of skills you will need for life and work.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'The University of Sydney lists the skills you will develop in your degree and need in your working life. Match each <b>quality</b> to its meaning in simple words.' },
            { type: 'match', id: 'c6-m', title: 'Graduate Qualities in plain English', left: [
              'Depth of disciplinary expertise', 'Critical thinking and problem solving', 'Oral and written communication', 'Information and digital literacy', 'Inventiveness', 'Cultural competence', 'Interdisciplinary effectiveness', 'Integrated professional, ethical, and personal identity', 'Influence'
            ], right: [
              'knowing your subject deeply and using it well',
              'questioning ideas and evidence before you decide',
              'speaking and writing clearly for your audience',
              'finding, checking and using information and digital tools',
              'coming up with new ideas and solutions',
              'working respectfully across cultures',
              'working well across different subjects and views',
              'knowing who you are as a person and a professional, ethically',
              'getting other people on board with an idea'
            ] },
            { type: 'toggle', title: 'The University’s full definitions', hint: 'Read later if you like', blocks: [
              { type: 'model', title: 'Undergraduate Qualities', rows: [
                ['Depth of disciplinary expertise', 'Deep disciplinary expertise is the ability to integrate and rigorously apply knowledge, understanding and skills of a recognised discipline defined by scholarly activity, as well as familiarity with evolving practice of the discipline.'],
                ['Critical thinking and problem solving', 'Critical thinking and problem solving are the questioning of ideas, evidence and assumptions in order to propose and evaluate hypotheses or alternative arguments before formulating a conclusion or a solution to an identified problem.'],
                ['Oral and written communication', 'Effective communication, in both oral and written form, is the clear exchange of meaning in a manner that is appropriate to audience and context.'],
                ['Information and digital literacy', 'Information and digital literacy is the ability to locate, interpret, evaluate, manage, adapt, integrate, create and convey information using appropriate resources, tools and strategies.'],
                ['Inventiveness', 'Generating novel ideas and solutions.'],
                ['Cultural competence', 'Cultural Competence is the ability to actively, ethically, respectfully, and successfully engage across and between cultures. In the Australian context, this includes and celebrates Aboriginal and Torres Strait Islander cultures, knowledge systems, and a mature understanding of contemporary issues.'],
                ['Interdisciplinary effectiveness', 'Interdisciplinary effectiveness is the integration and synthesis of multiple viewpoints and practices, working effectively across disciplinary boundaries.'],
                ['Integrated professional, ethical, and personal identity', 'An integrated professional, ethical and personal identity is understanding the interaction between one’s personal and professional selves in an ethical context.'],
                ['Influence', 'Engaging others in a process, idea or vision.'],
                ['PhD: Critical thinking and problem-solving', 'To display high-level capabilities in critical thinking and problem-solving and a commitment to lifelong learning and discovery.']
              ], note: 'Source: https://www.sydney.edu.au/students/graduate-qualities.html · PhD qualities: https://www.sydney.edu.au/students/graduate-qualities/phd-qualities.html' }
            ] },
            { type: 'talk', title: 'Quick talk', prompts: ['Which <b>two</b> qualities are most important for your future degree? Why?', 'Notice: critical thinking is on the list for undergraduates <b>and</b> PhD students. What does that tell you?'] }
          ]
        },
        {
          id: 'c7', short: 'Discussion', minutes: 9, grouping: 'Groups of 3–4',
          art: 'dec10/assets/week2/d5-v-c7.svg',
          title: 'Discussion',
          goal: 'Four critical thinking skills you will practise every day in DEC10.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'In DEC10 you will practise critical thinking every day. Tap the four skills to see what each one means.' },
            { type: 'hotspot', src: 'dec10/assets/week2/d5-criticality.svg', alt: 'Criticality: engagement with sources. Four tiles: identifying positions and perspectives in sources; selecting relevant ideas or information; evaluating ideas from sources and connecting them to their own voice; showing flexibility.', title: 'Criticality: engagement with sources', hint: 'Tap each tile.',
              spots: [
                { x: 27, y: 38, label: '1', title: 'Identifying positions and perspectives in sources', text: 'Who is speaking, and what do they think? For example: the UN podcast guest believes big digital companies must take special responsibility.', color: '#1f6b3a' },
                { x: 73, y: 38, label: '2', title: 'Selecting relevant ideas or information', text: 'Choose only the ideas that answer your question — and leave the rest out.', color: '#2b8a5c' },
                { x: 27, y: 76, label: '3', title: 'Evaluating ideas and connecting them to your own voice', text: 'Is this idea strong? Do you agree? Say what <b>you</b> think about the source.', color: '#1f9c8c' },
                { x: 73, y: 76, label: '4', title: 'Showing flexibility', text: 'Be ready to change your mind when you meet better evidence.', color: '#1f8cc4' }
              ] },
            { type: 'do', n: 2, who: 'group', text: 'Which skill is each student using? Sort the cards.' },
            { type: 'sort', id: 'c7-sort', title: 'Which critical thinking skill?', buckets: [
              { label: 'Identifying positions', letter: '1' }, { label: 'Selecting relevant ideas', letter: '2' }, { label: 'Evaluating + own voice', letter: '3' }, { label: 'Showing flexibility', letter: '4' }
            ], items: [
              { text: 'Lin notices that the UN guest wants governments to <b>require</b> companies to change.', answer: 0 },
              { text: 'Omar notices that the BBC article is written for the public, but the UN report is written for policymakers.', answer: 0 },
              { text: 'For a talk about gaming, Sara keeps the US gaming facts and leaves out the email facts.', answer: 1 },
              { text: 'Ken uses only the data-centre figures on his AI slide.', answer: 1 },
              { text: 'Mia says: “Griffiths (2020) shows that streaming is costly; however, I think replacing phones is the bigger problem.”', answer: 2 },
              { text: 'Ali compares 3.7% (Griffiths) with 1.5–3.2% (the UN podcast) and explains which figure he trusts more.', answer: 2 },
              { text: 'A classmate shows new data, so Jun changes his opinion.', answer: 3 },
              { text: 'Rosa says: “I used to think emails were harmless, but now I see that billions of them add up.”', answer: 3 }
            ] },
            { type: 'do', n: 3, who: 'group', text: 'Discuss the questions. Use the language bank.' },
            { type: 'talk', title: 'Discuss', prompts: [
              'How do you think you will use these skills through the DEC10 course?',
              'How will you use these skills in life?',
              'Are you confident with critical thinking?',
              'Why do some people avoid critical thinking?'
            ] },
            { type: 'toggle', title: 'Possible answers', blocks: [
              { type: 'model', title: 'Possible answers', rows: [
                ['In DEC10', 'In writing tasks and in class discussions.'],
                ['In life', 'In future university tasks and assessments, at work, making life decisions and in personal relationships.'],
                ['Confident?', 'Your own answer.'],
                ['Why avoid it?', 'People may not want to go against authority or popular belief. Critical thinking is more challenging.']
              ] }
            ] },
            { type: 'language', title: 'Talk about your thinking', groups: [
              { label: 'Confidence', phrases: ['I’m <b>fairly confident</b> when it comes to…', 'I <b>find it hard to</b>… because…'] },
              { label: 'Change of mind', phrases: ['I <b>changed my mind</b> when…', 'I <b>used to think</b>…, <b>but now</b>…'] },
              { label: 'Reasons', phrases: ['Some people avoid it <b>because</b>…', 'It can feel <b>risky</b> to disagree with…'] }
            ] },
            { type: 'scale', id: 'c7-scale', title: 'Be honest', statement: 'I am confident with critical thinking.', ends: ['Not yet', 'Very confident'] },
            { type: 'fields', fields: [{ id: 'c7-goal', label: 'One critical thinking habit I will try next week', placeholder: 'Before I use a source, I will ask…', rows: 2 }] }
          ]
        }
      ]
    },

    /* ───────────────────────── 20A · Pronunciation for presentations ───────────────────────── */
    {
      id: 'pron', number: '02', code: '20A', minutes: 40,
      tone: 'clay', art: 'dec10/assets/week2/s-pron.svg',
      title: 'Pronunciation for presentations: Chunking, Stress & Intonation',
      subtitle: 'Sound clear, natural and confident',
      outcome: 'You can use chunking, stress and intonation more naturally in speech.',
      activities: [
        {
          id: 'p1', short: 'Warmer', minutes: 8, grouping: 'Pair',
          art: 'dec10/assets/week2/d5-v-p1.svg',
          title: 'Warmer',
          goal: 'What do you already know about chunking, stress and tone?',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Answer the four questions with your partner. Then turn the cards to check.' },
            { type: 'flip', title: 'Four questions', hint: 'Talk first. Then tap a card to turn it over.', items: [
              { tag: '1', front: 'What is pausing and chunking, and why are they important?', back: 'Pausing is when we stop briefly while speaking. Chunking means grouping words into phrases. They help your speech sound clear, natural, and easier to understand.' },
              { tag: '2', front: 'What is the best way to recognise or hear chunking?', back: 'Listen to people talking (e.g. speeches).' },
              { tag: '3', front: 'What is the difference between function words and content words?', back: 'Content words give the main meaning (like nouns and verbs). Function words are grammar words (like and, the, is). We usually stress content words more when we speak.' },
              { tag: '4', front: 'Why is tone important in spoken English?', back: 'Tone shows how you feel or what you mean. The same words can sound polite, excited, or even rude — depending on your tone!' }
            ] },
            { type: 'figure', src: 'dec10/assets/week2/d5-sound-tools.svg', alt: 'Three tools for a clear voice: chunking (words in boxes with pauses), stress (big and small dots over words) and intonation (a line that goes up and down).', caption: 'Three tools for a clear, natural voice' },
            { type: 'do', n: 2, who: 'alone', text: 'Content word or function word? Sort the words from this week’s topic.' },
            { type: 'sort', id: 'p1-sort', title: 'Which words do we stress?', buckets: [
              { label: 'Content words', text: 'carry the meaning · usually stressed', letter: 'C' },
              { label: 'Function words', text: 'grammar words · usually weak', letter: 'F' }
            ], items: [
              { text: 'emissions', answer: 0 }, { text: 'the', answer: 1 }, { text: 'reduce', answer: 0 }, { text: 'of', answer: 1 },
              { text: 'servers', answer: 0 }, { text: 'and', answer: 1 }, { text: 'quickly', answer: 0 }, { text: 'is', answer: 1 },
              { text: 'carbon', answer: 0 }, { text: 'to', answer: 1 }, { text: '300 million', answer: 0 }, { text: 'a', answer: 1 },
              { text: 'environmental', answer: 0 }, { text: 'they', answer: 1 }
            ] },
            { type: 'tip', text: 'Content words = nouns, main verbs, adjectives, adverbs, numbers, question words and “not”. They carry your message, so make them a little <b>longer, louder and higher</b>.' }
          ]
        },
        {
          id: 'p2', short: 'Chunk it', minutes: 8, grouping: 'Alone → Pair',
          art: 'dec10/assets/week2/d5-v-p2.svg',
          title: 'Chunk it: where do you pause?',
          goal: 'Mark the natural pauses in real sentences from this week’s reading.',
          blocks: [
            { type: 'key', title: 'Where to pause', points: [
              'After a <b>long subject</b>: <i>Watching online videos / generates…</i>',
              'Before <b>because, which, but, so</b>: <i>…staying in touch / because each text…</i>',
              'At <b>commas</b>.',
              '<b>Never</b> inside a phrase: <i>carbon / footprint</i> ✗'
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'These sentences are from Griffiths (2020). Tap the <b>/</b> where a speaker should pause. Some / marks are wrong!' },
            { type: 'spot', id: 'p2-spot', label: 'Mark the chunks', title: 'Tap the good pauses', hint: 'Each / is a possible pause. Tap only the natural ones.', paras: [
              'Choosing to send an SMS text message [[*/]] is perhaps the most environmentally-friendly [[/]] way of staying in touch [[*/]] because each text [[/]] generates just 0.014g of CO2e',
              'Globally, [[*/]] watching online [[/]] videos [[*/]] generates 300m tonnes of carbon dioxide a year, [[*/]] which is roughly 1% [[/]] of global emissions.',
              'Simply upgrading our [[/]] equipment less often [[*/]] is one way of cutting our digital [[/]] carbon footprint.',
              'Although the energy needed for a single [[/]] internet search or email is small, [[*/]] 53.6% of the global population [[*/]] now use the internet.'
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Read the sentences aloud <b>with</b> your pauses. Your partner listens: is it clear? Then swap.' },
            { type: 'language', title: 'Quick pronunciation feedback', groups: [
              { label: 'Praise', phrases: ['Your pauses made it <b>really clear</b>.', 'I could easily hear the <b>key numbers</b>.'] },
              { label: 'Suggest', phrases: ['<b>Try pausing after</b>…', 'You could <b>stress</b> “…” more.', 'Your voice was <b>a bit flat</b> at the end.'] }
            ] }
          ]
        },
        {
          id: 'p3', short: 'Stress Walk', minutes: 10, grouping: 'Class',
          art: 'dec10/assets/week2/d5-v-p3.svg',
          title: 'Stress Walk',
          goal: 'Walk the rhythm. The class guesses the sentence.',
          blocks: [
            { type: 'cards', title: 'The five sentences', numbered: true, items: [
              { text: 'We must reduce plastic waste to save the environment.' },
              { text: 'Many companies are investing in clean renewable energy today.' },
              { text: 'Sustainable farming helps protect soil, water, plants and animals.' },
              { text: 'Governments must create new laws to fight climate change.' },
              { text: 'People are changing their habits to reduce carbon emissions.' }
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'First, decide which words are stressed. Tap them.' },
            { type: 'spot', id: 'p3-spot', label: 'Find the stress', title: 'Tap the stressed words', hint: 'Stressed words are usually content words.', paras: [
              '[[We]] must [[*reduce]] [[*plastic]] [[*waste]] [[to]] [[*save]] [[the]] [[*environment]].',
              '[[*Many]] [[*companies]] [[are]] [[*investing]] [[in]] [[*clean]] [[*renewable]] [[*energy]] [[*today]].',
              '[[*Sustainable]] [[*farming]] helps [[*protect]] [[*soil]], [[*water]], [[*plants]] [[and]] [[*animals]].',
              '[[*Governments]] must [[*create]] [[*new]] [[*laws]] [[to]] [[*fight]] [[*climate]] [[*change]].',
              '[[*People]] [[are]] [[*changing]] [[their]] [[*habits]] [[to]] [[*reduce]] [[*carbon]] [[*emissions]].'
            ] },
            { type: 'steps', title: 'Play the Stress Walk', items: [
              { who: 'alone', text: 'One student secretly chooses a sentence and <b>walks</b> it — one step per word.' },
              { who: 'alone', text: 'Step <b>firmly</b> on stressed words and <b>softly</b> on unstressed words. Don’t speak — only walk!' },
              { who: 'class', text: 'Everyone watches and listens to the rhythm, then guesses the sentence.' },
              { who: 'class', text: 'When the answer is revealed, the class says the sentence aloud with the same stress.' }
            ] },
            { type: 'spinner', id: 'p3-spin', title: 'Choose the walker’s challenge', text: 'Spin to get a sentence and a walking style.', reels: [
              { label: 'Sentence', items: ['1 · plastic waste', '2 · renewable energy', '3 · sustainable farming', '4 · new laws', '5 · carbon emissions'] },
              { label: 'Walk like…', items: ['a soldier', 'a news reader', 'a tired student', 'a sports coach', 'a robot'] }
            ], note: 'The class guesses the sentence — not the style!' },
            { type: 'talk', title: 'After the game', prompts: ['Which sentence was easiest to guess? Why?', 'How does a clear rhythm help your audience in a presentation?'] }
          ]
        },
        {
          id: 'p4', short: 'Intonation', minutes: 10, grouping: 'Groups of 3',
          art: 'dec10/assets/week2/d5-v-p4.svg',
          title: 'Intonation Guessing Game',
          goal: 'Same words, different feelings. Can your group hear the difference?',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d5-intonation.svg', alt: 'Four voice lines: falling (sure, finished), rising (question, surprise), fall-rise (not sure, polite disagreement) and a wide up-and-down line (strong feeling). Each has an example: Really. / Really? / Well… / Really!', caption: 'Your voice goes up and down to show meaning' },
            { type: 'key', title: 'The basics', points: [
              '<b>↘ Falling</b>: you are sure, you have finished — statements, facts, conclusions.',
              '<b>↗ Rising</b>: a question, doubt or surprise.',
              '<b>↘↗ Fall-rise</b>: “not completely” — polite disagreement, contrast, uncertainty.',
              '<b>Flat</b>: bored or sad. In a presentation, a flat voice loses your audience!'
            ] },
            { type: 'do', n: 1, who: 'group', text: 'Match each feeling to how your voice sounds.' },
            { type: 'match', id: 'p4-m', title: 'How does it sound?', left: ['Questioning/doubting', 'Surprise', 'Agreement', 'Disagreement', 'Sarcasm', 'Emphasis', 'Cheerful', 'Sad', 'Confident'], right: [
              'rises at the end',
              'starts very high — a big jump',
              'falls, warm and calm',
              'fall-rise, slower, often starts with “Well…”',
              'slow, exaggerated, long vowels',
              'extra stress and a pause before the key word',
              'higher, bright and a little faster',
              'low, slow, flat and quiet',
              'steady speed and a clear fall at the end'
            ] },
            { type: 'do', n: 2, who: 'group', text: 'Spin a sentence and a feeling. Read the sentence with that intonation. The others guess the feeling. Then pass the turn.' },
            { type: 'spinner', id: 'p4-spin', title: 'Intonation Guessing Game', text: 'Say it with the feeling. Don’t tell your group which one!', reels: [
              { label: 'Sentence', items: ['We must reduce plastic waste to save the environment.', 'Many companies are investing in clean renewable energy today.', 'Sustainable farming helps protect soil, water, plants and animals.', 'Governments must create new laws to fight climate change.', 'People are changing their habits to reduce carbon emissions.'] },
              { label: 'Feeling', items: ['Questioning/doubting', 'Surprise', 'Agreement', 'Disagreement', 'Sarcasm', 'Emphasis', 'Cheerful', 'Sad', 'Confident'] }
            ], note: 'Guessers: “I think it was… because your voice…”' },
            { type: 'chat', title: 'Intonation in a real Q&A', right: 'Presenter', lines: [
              ['Classmate', 'So data centres will use <mark>more than double</mark> the electricity by 2026? ↗'],
              ['Presenter', 'Yes, <mark>more than double</mark>. ↘ That’s the estimate in the UN podcast.'],
              ['Classmate', 'Really? ↗ Only four years from now?'],
              ['Presenter', 'Exactly. ↘ And partly <mark>due to</mark> AI and cryptocurrency mining. ↘'],
              ['Classmate', 'Well… ↘↗ but isn’t AI also helping to save energy?'],
              ['Presenter', 'That’s a fair point. ↘ It can do both — that’s the challenge. ↘']
            ] },
            { type: 'language', title: 'Sound confident when you present', groups: [
              { label: 'Statements ↘', phrases: ['The data <b>clearly</b> shows that… ↘', 'This is a <b>serious</b> problem. ↘'] },
              { label: 'Contrast ↗ ↘', phrases: ['It’s not only <b>cheap</b> ↗ — it’s also <b>green</b>. ↘', 'Some say <b>yes</b> ↗, but the evidence says <b>no</b>. ↘'] },
              { label: 'Emphasis', phrases: ['And the <b>biggest</b> cause… (pause) …is <b>us</b>.', 'Not <b>one</b>, but <b>three</b> reasons.'] }
            ] }
          ]
        },
        {
          id: 'p5', short: 'AI challenge', minutes: 10, grouping: 'Groups of 3',
          art: 'dec10/assets/week2/d5-v-p5.svg',
          title: 'Chunking Challenge: Can AI Chunk Like a Human?',
          goal: 'Listen to an AI voice. Does it pause in the right places?',
          blocks: [
            { type: 'steps', title: 'What to do', items: [
              { who: 'group', text: 'Choose a topic: <b>motivation</b>, <b>study tips</b> or <b>sustainability</b>.' },
              { who: 'group', text: 'Ask ChatGPT to create a speech that is about <b>3–5 sentences</b> long. (Use the prompt below.)' },
              { who: 'group', text: 'Use the <b>Read Aloud</b> function. Listen carefully to how ChatGPT reads the speech aloud.' },
              { who: 'group', text: 'Copy the speech into the box. Mark it with <b>/</b> to show where you think the natural chunks should be.' },
              { who: 'pair', text: 'Read it aloud in pairs. Compare with the AI version.' }
            ] },
            { type: 'model', title: 'A prompt you can use', text: 'Write a short speech (4 sentences) for university students about <b>[study tips / motivation / sustainability]</b>. Use clear academic English.' },
            { type: 'fields', fields: [{ id: 'p5-speech', label: 'The AI speech — mark your chunks with /', placeholder: 'Paste the speech here, then add / where a speaker should pause…', rows: 6 }] },
            { type: 'do', n: 1, who: 'group', text: '<b>No AI?</b> Practise with this sample speech. Tap the good pauses, then read it aloud.' },
            { type: 'spot', id: 'p5-spot', label: 'Mark the chunks', title: 'Sample speech: your digital footprint', paras: [
              'Every time we go online, [[*/]] we use a little [[/]] energy.',
              'One search [[/]] or one email [[*/]] does not seem like much, [[*/]] but billions of people [[/]] are doing it [[*/]] every single day.',
              'So before you stream [[/]] another video, [[*/]] ask yourself one [[/]] simple question: [[*/]] do I really need this?'
            ] },
            { type: 'talk', title: 'Discuss with your group', prompts: [
              'Does the AI pause in the right places (chunks)?',
              'Are the pauses helping or confusing?',
              'How would <b>you</b> chunk it differently?',
              'Which version is clearer and more natural — yours or the AI’s? Why?'
            ] },
            { type: 'fields', fields: [{ id: 'p5-notes', label: 'Our findings: AI vs human', placeholder: 'The AI paused after… but a human would pause after…', rows: 3 }] },
            { type: 'checklist', id: 'p5-check', title: 'My presentation sound check', meter: ['ticked', 'Ready to sound great!'], items: [
              'I group my words into chunks and pause between them.',
              'I stress the key words — nouns, verbs, numbers.',
              'My voice goes down at the end of a statement.',
              'My voice is not flat — it moves up and down.',
              'I practised my part aloud at least three times.'
            ] },
            { type: 'tip', text: 'The Peer and Teacher Feedback Tool asks: “We could hear the presenters using chunking, pausing and stress” and “intonation (speaking was not ‘flat’)”. Use this checklist before your Week 3 presentation.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 21A · Feedback literacy: action plan (1) ───────────────────────── */
    {
      id: 'action', number: '03', code: '21A', minutes: 30,
      tone: 'teal', art: 'dec10/assets/week2/s-action.svg',
      title: 'AST: Feedback literacy - action plan (1)',
      subtitle: 'From feedback to action',
      outcome: 'You can reflect on the feedback on your Week 2 presentation and describe the actions you will take to improve your speaking and presentation skills.',
      activities: [
        {
          id: 'a1', short: 'The loop', minutes: 5, grouping: 'Class',
          art: 'dec10/assets/week2/d5-v-a1.svg',
          title: 'Closing the feedback loop',
          goal: 'Feedback only helps when you act on it.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d5-loop.svg', alt: 'A circle with five steps: get feedback from teachers and peers, reflect on it, turn it into specific actions, use the actions in your next presentation, get feedback again.', caption: 'The feedback loop' },
            { type: 'key', title: 'Action Plan (1) — what and why', points: [
              'This is the <b>first of three</b> Action Plans for your presentations.',
              'In the Speaking Cycles (Weeks 2, 3 and 6, 7) you give <b>four group presentations</b>: three Research Summary Presentations and one Seminar Presentation.',
              'Everyone uses the <b>same Feedback Tool</b>, so you can see your progress.',
              'Remember Week 1: feedback is a gift <b>only when you use it</b>.'
            ] },
            { type: 'order', id: 'a1-order', title: 'Put the feedback loop in order', items: [
              'Get feedback from teachers and peers.',
              'Reflect on the feedback.',
              'Turn the feedback into specific actions.',
              'Use the actions in your next presentation.',
              'Get feedback again — and close the loop.'
            ] },
            { type: 'talk', title: 'Quick talk', prompts: ['Which step do most students skip? Why?', 'What happened the last time you got feedback — did you act on it?'] }
          ]
        },
        {
          id: 'a2', short: 'Get ready', minutes: 3, grouping: 'Alone',
          art: 'dec10/assets/week2/d5-v-a2.svg',
          title: 'Instructions · Steps 1–2',
          goal: 'Open your folder and get the template.',
          blocks: [
            { type: 'checklist', id: 'a2-check', title: 'Before you start', meter: ['done', 'Ready!'], items: [
              'I opened my folder: Research & Seminar Presentations – Feedback & Action Plans.',
              'I downloaded the Action Plan (1) template.',
              'I saved the template in the folder.',
              'I found the Peer and Teacher Feedback Tool forms I received for my Week 2 presentation.'
            ] },
            { type: 'tip', text: 'Keep everything in one folder. In Week 3 and Week 6 you will compare your new feedback with this plan.' }
          ]
        },
        {
          id: 'a3', short: 'Needs work', minutes: 8, grouping: 'Alone → Pair',
          art: 'dec10/assets/week2/d5-v-a3.svg',
          title: 'Instructions · Steps 3–5: What needs work?',
          goal: 'Find the aspects that got the most “Needs work”.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Look at the feedback you received on your Week 2 presentation. Copy the ratings here. Which aspects got the most <b>Needs work</b>?' },
            { type: 'form', id: 'a3-form', title: 'My Week 2 feedback at a glance', intro: 'Copy what your teacher and classmates said. Add their words in the comment box.', scale: ['Yes', 'Mostly', 'Needs work', 'N/A'], cols: ['What the feedback said'], sections: [
              { label: 'Content delivery', items: ['The problem was clearly stated.', 'The cause/s were clearly stated.', 'Evidence for the cause/s was given.', 'The effect/s were clearly stated.', 'Evidence for the effect/s was given.', 'A solution was clearly stated.', 'Solution was evaluated.'] },
              { label: 'Flow, visuals and the audience', items: ['We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.', 'Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
              { label: 'Fluency & pronunciation', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
              { label: 'Language use', items: ['The grammar used was largely accurate and we could understand the meaning.', 'The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause/effect; explaining problem).'] },
              { label: 'Question & answer', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
            ] },
            { type: 'figure', src: 'dec10/assets/week2/d5-needswork.svg', alt: 'The Content Delivery part of the feedback tool. Two rows are marked in the Needs work column: Evidence for the cause/s was given, and Evidence for the effect/s was given.', caption: 'Example: this student marked “Evidence for the cause/s” and “Evidence for the effect/s” as Needs work.', size: 'wide' },
            { type: 'fields', fields: [
              { id: 'a3-top', label: 'The aspects with the most “Needs work”', placeholder: 'Evidence for the effects; intonation…', rows: 2 },
              { id: 'a3-plan', label: 'What did people write in “Action plan for further improvement”?', placeholder: 'My teacher suggested… My classmates said…', rows: 3 }
            ] },
            { type: 'tip', text: '<b>Student’s book, AST p. 102 — “Language for giving peer feedback on presentations”.</b> Open it when you read the feedback you got. It helps you understand what your classmates meant (for example “To make it clearer that…, you could…”).' },
            { type: 'do', n: 2, who: 'pair', text: 'Tell your partner about <b>one strength</b> and <b>one aspect that needs work</b>. Use the language bank.' },
            { type: 'language', title: 'Talk about your feedback', groups: [
              { label: 'Strengths', phrases: ['<b>One thing I did well</b> was…', 'My classmates <b>liked</b> the way I…'] },
              { label: 'Needs work', phrases: ['<b>Most of my feedback said</b>…', 'I got <b>Needs work</b> on…', 'I was <b>surprised</b> that…', 'I <b>agree</b> with this feedback because…'] }
            ] }
          ]
        },
        {
          id: 'a4', short: 'Make it specific', minutes: 6, grouping: 'Pair',
          art: 'dec10/assets/week2/d5-v-a4.svg',
          title: 'From feedback to action',
          goal: 'A good action says exactly what you will do.',
          blocks: [
            { type: 'key', title: 'A good action is specific', points: ['<b>What</b> exactly will you do?', '<b>How</b> will you do it?', '<b>When</b> will you do it — before the next presentation?'] },
            { type: 'pairs', items: [
              { tag: 'Providing evidence', from: 'Give more evidence.', to: '[[Write down any sources I get my information from, add the source to the ppt and practise referring to the source.]]', note: 'The example from the Action Plan (1) template.' },
              { tag: 'Pronunciation', from: 'Speak more clearly.', to: '[[Record my part on my phone twice, listen for fast or flat parts, and mark my pauses with / in my notes.]]' },
              { tag: 'Body language', from: 'Better eye contact.', to: '[[Learn my first and last sentences by heart and look at three different people while I say them.]]' },
              { tag: 'Functional language', from: 'Use more functional language.', to: '[[Put three cause-and-effect phrases (due to, as a result, leads to) on a card and use each one at least once.]]' }
            ] },
            { type: 'do', n: 1, who: 'pair', text: 'Vague or specific? Sort the actions.' },
            { type: 'sort', id: 'a4-sort', title: 'Vague or specific?', buckets: [{ label: 'Too vague', letter: '✗' }, { label: 'Specific action', letter: '✓' }], items: [
              { text: 'Practise more.', answer: 0 },
              { text: 'Be more confident.', answer: 0 },
              { text: 'Improve my slides.', answer: 0 },
              { text: 'Work on my grammar.', answer: 0 },
              { text: 'Time my part with a stopwatch on Monday and cut it to 2 minutes.', answer: 1 },
              { text: 'Put one number and its source on every slide.', answer: 1 },
              { text: 'Ask a groupmate to ask me two probing questions before class.', answer: 1 },
              { text: 'Check every verb in my script for subject–verb agreement on Sunday.', answer: 1 }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Make these vague actions specific. Say your ideas aloud, then compare.' },
            { type: 'talk', title: 'Fix it together', prompts: ['“Practise more.” → I will…', '“Be more confident.” → Before the presentation, I am going to…', '“Improve my slides.” → On each slide, I will…'] }
          ]
        },
        {
          id: 'a5', short: 'My plan', minutes: 8, grouping: 'Alone → Pair',
          art: 'dec10/assets/week2/d5-v-a5.svg',
          title: 'Instructions · Step 6: Write your action plan',
          goal: 'Use the feedback and your reflections to write your plan.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Use all the feedback in <b>Needs work</b> and <b>Action plan for further improvement</b>, and your own reflections. Write your action plan. Then copy it into your Action Plan (1) template.' },
            { type: 'model', title: 'Example from the template', rows: [['Aspect', 'EG providing evidence'], ['Specific action/s I will take to improve', 'EG write down any sources I get my information from, add the source to the ppt and practise referring to the source']] },
            { type: 'table', id: 'a5-plan', title: 'Action plan for further improvement', columns: ['Aspect', 'Specific action/s I will take to improve'], rows: 4 },
            { type: 'language', title: 'Action plan frames', groups: [
              { label: 'Actions', phrases: ['<b>I will</b> + verb… (I will record…)', '<b>Before my next presentation, I am going to</b>…', '<b>To improve my</b> intonation, <b>I will</b>…'] },
              { label: 'Check', phrases: ['<b>I will know it worked if</b>…', '<b>By</b> Monday / Week 3, I will have…'] }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Read your plan to a partner. Your partner asks: <b>“How exactly?”</b> and <b>“When?”</b> Make your plan more specific if needed.' },
            { type: 'checklist', id: 'a5-check', title: 'Is my plan ready?', meter: ['ticked', 'Plan ready — save it!'], items: [
              'Each action starts with a verb (record, write, practise…).',
              'Each action says how and when.',
              'My actions match the aspects that got the most “Needs work”.',
              'I saved my Action Plan (1) in my folder.'
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 22A · Interactive Presentation task: check in ───────────────────────── */
    {
      id: 'ipcheck', number: '04', code: '22A', minutes: 30,
      tone: 'plum', art: 'dec10/assets/week2/s-ipcheck.svg',
      title: 'Interactive Presentation task: check in',
      subtitle: 'Where is your group now?',
      outcome: 'You engaged in criticality and research skills, monitored your progress towards the Interactive Presentation Assessment, and managed working with your group.',
      activities: [
        {
          id: 'i1', short: 'The task', minutes: 6, grouping: 'Pair',
          art: 'dec10/assets/week2/d5-v-i1.svg',
          title: 'Description',
          goal: 'Remind yourself what the Interactive Presentation is.',
          blocks: [
            { type: 'key', title: 'The Interactive Presentation Task', points: [
              'It assesses your ability to work collaboratively to research, plan and present research findings in an academic context, and to further discuss your research.',
              'You work with your <b>Seminar group</b> to research, plan and present your findings on your allocated topic.',
              'You help each other — <b>but</b> you give an <b>INDIVIDUAL</b> presentation, <b>NOT a group</b> presentation.',
              'After your presentation, you answer <b>4–6 individual questions</b> about your content and about how you applied your academic skills.'
            ] },
            { type: 'cards', items: [
              { label: 'Together', text: 'Research and plan with your Seminar group.', icon: 'users' },
              { label: 'Alone', text: 'Give your own individual presentation.', icon: 'chat' },
              { label: 'Questions', text: 'Answer 4–6 questions: clarification, probing and Academic Success Toolkit.', icon: 'search' }
            ] },
            { type: 'quiz', id: 'i1-q', title: 'True or false?', shared: ['True', 'False'], items: [
              { q: 'You give one presentation together as a group.', answer: 'False', why: 'You prepare together, but you give an INDIVIDUAL presentation.' },
              { q: 'Your group helps each other with research and planning.', answer: 'True', why: 'Collaboration is part of what is assessed.' },
              { q: 'You will answer questions about how you used your academic skills.', answer: 'True', why: 'Set 2 of the questions is about the Academic Success Toolkit.' },
              { q: 'After the presentation, you answer one question.', answer: 'False', why: 'You answer 4–6 individual questions.' }
            ] }
          ]
        },
        {
          id: 'i2', short: 'Timeline', minutes: 6, grouping: 'Class',
          art: 'dec10/assets/week2/d5-v-i2.svg',
          title: 'Timeline: check-in',
          goal: 'Where are we on the road to Week 7?',
          blocks: [
            { type: 'hotspot', src: 'dec10/assets/week2/d5-timeline.svg', alt: 'A winding road from Week 1 to Week 7 with a flag at Week 7 Days 4 and 5. A pin says You are here at Week 2.', title: 'The road to the Interactive Presentation', hint: 'Tap each week.', size: 'wide',
              spots: [
                { x: 8, y: 66, label: '1', title: 'Week 1', text: 'Set up the task. Groups and topics are allocated. Each group member chooses a <b>different strategy</b> to do research on.', color: '#7a4a8c' },
                { x: 22, y: 40, label: '2', title: 'Week 2 · You are here', text: 'All group members collaborate to: do required research; plan and prepare your presentations.', color: '#b0512a' },
                { x: 37, y: 62, label: '3', title: 'Week 3', text: 'Keep collaborating: research, plan and prepare.', color: '#3a58a0' },
                { x: 51, y: 38, label: '4', title: 'Week 4', text: 'Keep collaborating: research, plan and prepare.', color: '#3a58a0' },
                { x: 64, y: 62, label: '5', title: 'Week 5', text: 'Keep collaborating: research, plan and prepare.', color: '#3a58a0' },
                { x: 77, y: 40, label: '6', title: 'Week 6', text: 'Keep collaborating: research, plan and prepare.', color: '#3a58a0' },
                { x: 90, y: 58, label: '7', title: 'Week 7', text: 'Practise your presentations. <b>Week 7 Day 4 & Day 5: Interactive Presentation assessment.</b>', color: '#2b776e' }
              ] },
            { type: 'quiz', id: 'i2-q', items: [
              { q: 'When is the Interactive Presentation assessment?', options: ['Week 7 Day 4 & Day 5', 'Week 2 Day 5', 'Week 4', 'Week 10'], answer: 'Week 7 Day 4 & Day 5', why: 'Week 7 is for practising — and the assessment is on Days 4 and 5.' },
              { q: 'What should your group do in Weeks 2–6?', options: ['Collaborate to research, plan and prepare', 'Wait for the teacher', 'Only practise speaking', 'Write an essay'], answer: 'Collaborate to research, plan and prepare', why: 'Weeks 2–6 are for research and preparation together.' }
            ] }
          ]
        },
        {
          id: 'i3', short: 'Check in', minutes: 14, grouping: 'Seminar group',
          art: 'dec10/assets/week2/d5-v-i3.svg',
          title: 'Group check-in',
          goal: 'Report your progress, solve problems, and ask your teacher.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Rate your progress honestly.' },
            { type: 'grid', id: 'i3-grid', title: 'My research so far', rows: [
              'I know my group’s topic and my research strategy.',
              'I have found at least two useful sources.',
              'I have checked my sources (who, when, evidence).',
              'I have notes from my sources.',
              'I know the main idea of my presentation.',
              'Our group shares information regularly.'
            ], columns: ['Me'], options: ['Done', 'Started', 'Not yet'] },
            { type: 'do', n: 2, who: 'group', text: 'Each person speaks for <b>one minute</b>: what you have done, what you are stuck on, and your next step. The group gives one idea to help.' },
            { type: 'language', title: 'Give a progress update', groups: [
              { label: 'Done', phrases: ['<b>So far, I have</b> found…', '<b>I’ve managed to</b>…'] },
              { label: 'In progress', phrases: ['<b>I’m still working on</b>…', '<b>I’m stuck on</b>… — any ideas?'] },
              { label: 'Next', phrases: ['<b>By next week, I will</b>…', '<b>Could you help me with</b>…?', '<b>Why don’t you</b> try…?'] }
            ] },
            { type: 'tip', text: '<b>Useful language for your presentation:</b> Student’s book, Language Reference <b>p. 112</b> (cause and effect) and <b>p. 113</b> (compare and contrast).' },
            { type: 'spinner', id: 'i3-spin', title: 'Group problem-solver', text: 'Spin a problem. Your group has one minute to suggest a solution.', reels: [
              { label: 'Problem', items: ['I can’t find an academic source.', 'Two sources give different numbers.', 'One member never replies in the group chat.', 'My topic is too big.', 'I don’t have time this week.', 'I found too much information.'] }
            ], note: 'Use: “Why don’t you…?” · “Have you tried…?” · “Maybe we could…”' },
            { type: 'fields', fields: [
              { id: 'i3-next', label: 'My next step (and when)', placeholder: 'By Wednesday, I will…', rows: 2 },
              { id: 'i3-ask', label: 'My question for the teacher', placeholder: 'Could you help me with…?', rows: 2 }
            ] }
          ]
        },
        {
          id: 'i4', short: 'After class', minutes: 4, grouping: 'Alone',
          art: 'dec10/assets/week2/d5-v-i4.svg',
          title: 'After class',
          goal: 'Keep going this weekend.',
          blocks: [
            { type: 'sticky', title: 'After class', text: 'Continue preparing for the seminar. Remember also to continue your research for your group’s seminar topic and final Interactive Presentation Assessment.' },
            { type: 'checklist', id: 'i4-check', title: 'This weekend', items: ['Continue preparing for the seminar.', 'Continue my research for my group’s seminar topic.', 'Send my group one new source or idea.'] }
          ]
        }
      ]
    },

    /* ───────────────────────── 23A · STAR moment ───────────────────────── */
    {
      id: 'star', number: '05', code: '23A', minutes: 70,
      tone: 'amber', art: 'dec10/assets/week2/s-star.svg',
      title: 'STAR© moment',
      subtitle: 'Your questions, your needs',
      outcome: 'You have actively participated with your teacher in addressing your learning needs.',
      activities: [
        {
          id: 's1', short: 'What is it?', minutes: 5, grouping: 'Class',
          art: 'dec10/assets/week2/d5-v-s1.svg',
          title: 'What are Teachable STAR Moments?',
          goal: 'This time is for you.',
          blocks: [
            { type: 'key', title: 'Teachable STAR moments', points: [
              'Time (an hour, or a whole lesson) where your teacher can <b>address specific questions</b> you have, and <b>address your specific language needs</b>.',
              'They are about responsive, adaptive teaching — lessons tailored to your needs.',
              'The best way to take part: <b>reflect on your learning needs</b> and <b>talk to your teacher</b> about them. Your feedback matters!'
            ] }
          ]
        },
        {
          id: 's2', short: 'My needs', minutes: 10, grouping: 'Alone',
          art: 'dec10/assets/week2/d5-v-s2.svg',
          title: 'Reflect on your learning needs',
          goal: 'What went well in Week 2? What do you still need help with?',
          blocks: [
            { type: 'grid', id: 's2-grid', title: 'Week 2 skills', rows: [
              'Using cause-and-effect language (due to, as a result, leads to…)',
              'Taking notes from a reading and a podcast',
              'Comparing and connecting two sources',
              'Giving a group presentation',
              'Asking clarification and probing questions',
              'Giving peer feedback with the Feedback Tool',
              'Self-regulation: planning and monitoring my study',
              'Chunking, stress and intonation',
              'Critical thinking: questioning sources'
            ], columns: ['How do I feel?'], options: ['I’m confident', 'Getting there', 'I need help'] },
            { type: 'fields', fields: [
              { id: 's2-needs', label: 'My top two learning needs', placeholder: '1. … 2. …', rows: 2 },
              { id: 's2-q', label: 'A question I want to ask my teacher', placeholder: 'I’m still not sure how to…', rows: 2 }
            ] }
          ]
        },
        {
          id: 's3', short: 'Ask', minutes: 15, grouping: 'Pair → Class',
          art: 'dec10/assets/week2/d5-v-s3.svg',
          title: 'Talk to your teacher',
          goal: 'Ask clearly — and get the help you need.',
          blocks: [
            { type: 'language', title: 'Ask your teacher for help', groups: [
              { label: 'Ask to explain', phrases: ['Could you <b>explain</b> … <b>again</b>, please?', 'What’s the <b>difference between</b> … and …?', 'Could you give us <b>an example of</b>…?'] },
              { label: 'Say what is hard', phrases: ['I’m <b>not sure how to</b>…', 'I <b>get confused when</b>…', 'I <b>understand</b> …, <b>but not</b>…'] },
              { label: 'Ask for practice', phrases: ['Could we have <b>more practice with</b>…?', 'Could you <b>check</b> my…?', 'Is it OK if we <b>go over</b>…?'] }
            ] },
            { type: 'chat', title: 'A good request', right: 'Student', lines: [
              ['Teacher', 'So, what would you like to work on today?'],
              ['Student', 'I <mark>understand</mark> the cause-and-effect phrases, <mark>but not</mark> when to use “due to” and when to use “because”.'],
              ['Teacher', 'Great question. Can you give me a sentence you wrote?'],
              ['Student', 'Yes: “Emissions are rising due to people stream more videos.”'],
              ['Teacher', 'Good — “due to” needs a noun: due to <b>more video streaming</b>. “Because” needs a clause: because people <b>stream</b> more videos.'],
              ['Student', 'Oh, I see. <mark>Could we have more practice with</mark> that?']
            ] },
            { type: 'do', n: 1, who: 'pair', text: 'Practise your question from the last activity with a partner. Make it <b>specific</b>: say what you understand and what you don’t.' },
            { type: 'cards', title: 'Class vote: what should we practise today?', pick: 's3-vote', items: [
              { label: 'Cause & effect', text: 'due to, as a result, leads to…', icon: 'link' },
              { label: 'Presenting', text: 'openings, signposts, conclusions', icon: 'chat' },
              { label: 'Questions', text: 'clarification and probing', icon: 'search' },
              { label: 'Pronunciation', text: 'chunking, stress, intonation', icon: 'play' }
            ] },
            { type: 'do', n: 2, who: 'class', text: 'Tell your teacher your vote and your question. Your teacher will use them for the rest of the STAR moment.' }
          ]
        },
        {
          id: 's4', short: 'Review game', minutes: 30, grouping: 'Teams',
          art: 'dec10/assets/week2/d5-v-s4.svg',
          title: 'Week 2 review game',
          goal: 'Play in teams. What do you remember from Week 2?',
          blocks: [
            { type: 'do', n: 1, who: 'class', text: 'Play in teams. Choose a box, read the clue and answer <b>as a question</b> (“What is…?”). The teacher gives the points.' },
            { type: 'jeopardy', id: 's4-jp', title: 'Week 2 Jeopardy', teams: 4, seconds: 25, cols: [
              { title: 'Cause & effect', clues: [
                { pts: 100, clue: 'This phrase needs a noun after it: “emissions rose ___ more streaming”.', answer: 'What is “due to”?' },
                { pts: 200, clue: 'Complete the podcast’s pattern: “The more things we use, ___ waste we create.”', answer: 'What is “the more”?' },
                { pts: 300, clue: 'The noun that means the total amount of carbon our activities produce.', answer: 'What is a (carbon) footprint?' },
                { pts: 400, clue: 'Make one sentence with “as a result”: data centres need a lot of energy → emissions rise.', answer: 'What is “Data centres need a lot of energy. As a result, emissions rise.”?' }
              ] },
              { title: 'Presenting', clues: [
                { pts: 100, clue: 'The first thing you do in an introduction, after greeting your audience.', answer: 'What is introducing yourself (and the topic)?' },
                { pts: 200, clue: 'Words like “firstly”, “moving on to” and “to sum up” that guide the audience.', answer: 'What are signposts / signposting language?' },
                { pts: 300, clue: 'In a Research Summary presentation, you state the problem, the causes, the effects and this.', answer: 'What is a solution (and its evaluation)?' },
                { pts: 400, clue: 'Two things that must be equal for each group member, according to the Feedback Tool.', answer: 'What are time and content?' }
              ] },
              { title: 'Questions', clues: [
                { pts: 100, clue: 'The type of question in “What did you mean by …?”', answer: 'What is a clarification question?' },
                { pts: 200, clue: 'The type of question in “Why did you choose to focus on …?”', answer: 'What is a probing question?' },
                { pts: 300, clue: 'The number of individual questions you answer after your Interactive Presentation.', answer: 'What is 4–6?' },
                { pts: 400, clue: 'Make a probing question about this claim: “Data centres are a hidden problem.”', answer: 'What is, e.g., “Why do you think they are hidden?” / “What makes that a challenge?”' }
              ] },
              { title: 'Critical thinking', clues: [
                { pts: 100, clue: 'The wrong word in the dictation. It should be “questioning”.', answer: 'What is “accepting”?' },
                { pts: 200, clue: 'Moving from telling knowledge to this.', answer: 'What is using knowledge?' },
                { pts: 300, clue: 'Being ready to change your mind when you meet better evidence.', answer: 'What is showing flexibility?' },
                { pts: 400, clue: 'In Griffiths (2020), the email figures from Mike Berners-Lee have this problem.', answer: 'What is “they are from a decade ago” (they may be out of date)?' }
              ] },
              { title: 'Pronunciation', clues: [
                { pts: 100, clue: 'Grouping words into phrases.', answer: 'What is chunking?' },
                { pts: 200, clue: 'Nouns, main verbs, adjectives and numbers — the words we usually stress.', answer: 'What are content words?' },
                { pts: 300, clue: 'Your voice does this at the end of a confident statement.', answer: 'What is falling (↘)?' },
                { pts: 400, clue: 'Say this with a fall-rise to show polite disagreement: “Well…”', answer: 'What is “Well… ↘↗” (the team says it with a fall-rise)?' }
              ] }
            ] }
          ]
        },
        {
          id: 's5', short: 'Wrap-up', minutes: 10, grouping: 'Alone',
          art: 'dec10/assets/week2/d5-v-s5.svg',
          title: 'Week 2 wrap-up: 3-2-1',
          goal: 'Close Week 2 and get ready for Week 3.',
          blocks: [
            { type: 'fields', fields: [
              { id: 's5-3', label: '3 things I learned in Week 2', rows: 3 },
              { id: 's5-2', label: '2 useful phrases I will use again', placeholder: 'As a result, … · Could you clarify…?', rows: 2 },
              { id: 's5-1', label: '1 question I still have', rows: 2 }
            ] },
            { type: 'do', n: 1, who: 'pair', text: 'Tell a partner your <b>3-2-1</b> in one minute.' },
            { type: 'checklist', id: 's5-check', title: 'Ready for Week 3?', meter: ['ticked', 'Ready for Week 3!'], items: [
              'My Action Plan (1) is saved in my feedback folder.',
              'I know my next step for the Interactive Presentation research.',
              'I am continuing to prepare for my Seminar.',
              'I will use my sound check before my next presentation.'
            ] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['critical thinking', 'carefully analysing and questioning information to make judgments and solve problems', 'Critical thinking helped people question old beliefs.'],
    ['evidence', 'facts or information that show something is true', 'Semmelweis used evidence to show that hand washing saves lives.'],
    ['disprove', 'to show that something is not true', 'Explorers disproved the theory of Terra Australis.'],
    ['credible', 'can be believed and trusted', 'A university report is usually a credible source.'],
    ['perspective', 'a way of seeing or thinking about something', 'The podcast gives a UN perspective on digital technology.'],
    ['flexibility', 'being ready to change your mind or your plan', 'Showing flexibility is part of critical thinking.'],
    ['chunking', 'grouping words into short phrases when you speak', 'Good chunking makes a presentation easier to follow.'],
    ['content word', 'a word that carries meaning (noun, main verb, adjective, number)', 'We usually stress content words like “emissions”.'],
    ['function word', 'a grammar word (the, of, and, is)', 'Function words are usually short and weak.'],
    ['intonation', 'the way your voice goes up and down', 'Falling intonation sounds sure and confident.'],
    ['action plan', 'a list of specific steps you will take to improve', 'My action plan says I will record my part twice.'],
    ['specific', 'clear and exact, not general', '“Add the source to every slide” is a specific action.']
  ]
};
