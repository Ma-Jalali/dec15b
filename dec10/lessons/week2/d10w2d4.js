/* DEC10 · Week 2 · Day 4 — Present, open, reflect.
   Teacher's Book: W2 D4. 15A Presentation skills · 16A Group research summary presentation groups 3, 4 & 5 ·
   17A Seminar Discussion Opening Remarks group 1 · 18A AST: Self-regulation and monitoring Homework follow-up.
   Protected (copied, not changed): the sample presentation video and its questions, the Dos and Don'ts list, the
   pronunciation extract, the Peer and Teacher Feedback Tool statements, Group 1's and Group 2's seminar questions,
   the three self-regulation task options and the five speed-presentation prompts.
   Ids never change after students start (they are the keys of saved work). */
window.DEC15_LESSON = {
  id: 'd10w2d4', week: 2, day: 4,
  title: 'Present, open, reflect',
  duration: 'About 4 hours',
  question: 'What makes an audience really listen to you — and how do you get a little better every time you speak?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question',
  journey: 'Watch a student go from a weak talk to a strong one, practise stress, intonation and chunking, give your Research Summary presentation (Groups 3, 4 and 5), watch Group 1’s Opening Remarks, write questions that start real discussion, and plan any task in six steps.',
  image: 'dec10/assets/week2/hero-d10w2d4.svg',
  imageAlt: 'Illustration: a student presents on a stage with a slide about the digital carbon footprint. The audience holds up feedback cards and question bubbles, and a six-step path curves up to a flag.',
  finish: { title: 'Day 5', text: 'Critical thinking, pronunciation and your feedback action plan' },
  goalShort: 'your presentations, your Seminar and your Interactive Presentation',

  sections: [
    /* ═════════════════════════ 15A ═════════════════════════ */
    {
      id: 'present2', number: '01', code: '15A', minutes: 45, tone: 'clay', art: 'dec10/assets/week2/s-present2.svg',
      title: 'Presentation skills',
      subtitle: 'From a weak talk to a strong one — in three minutes',
      outcome: 'You can judge presentation techniques, suggest improvements, and use stress, intonation and chunking.',
      activities: [
        {
          id: 'e1', short: 'Lead-in', minutes: 5, grouping: 'Groups of 3', art: 'dec10/assets/week2/v/v-d10w2d4-e1.svg',
          title: 'Lead-in: Group discussion',
          goal: 'Talk about your own experience of presenting.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Be honest. How do you feel before you present? Move the slider.' },
            { type: 'scale', id: 'e1-sc', statement: 'I feel relaxed when I speak in front of a group in English.', ends: ['Very nervous', 'Very relaxed'] },
            { type: 'do', n: 2, who: 'group', text: 'Answer both questions. Everyone speaks. Use the phrases below.' },
            { type: 'talk', title: 'Discuss', prompts: [
              'How much experience do you have giving presentations?',
              'How do you usually feel when giving a presentation or speaking in front of a group?'
            ] },
            { type: 'language', title: 'Talk about your experience and your feelings', tabs: false, groups: [
              { label: 'Experience', phrases: ['I’ve given <b>a few</b> / <b>quite a lot of</b> presentations.', 'I’ve <b>hardly ever</b> presented in English.', 'The last time I presented was <b>for</b> a project in …', 'I’m <b>used to</b> presenting in my language, but not in English.'] },
              { label: 'Feelings', phrases: ['I get <b>butterflies</b> in my stomach.', 'My mind <b>goes blank</b>.', 'I <b>speak too fast</b> when I’m nervous.', 'I feel <b>more confident</b> when I’ve practised.'] },
              { label: 'What helps', phrases: ['What <b>helps me</b> is …', 'I always <b>practise out loud</b> first.', 'I try to <b>focus on one friendly face</b>.', 'I take a <b>deep breath</b> before I start.'] }
            ] },
            { type: 'fields', fields: [{ id: 'e1-help', label: 'One thing that helps me when I present', rows: 2, placeholder: 'What helps me is …' }] }
          ]
        },
        {
          id: 'e2', short: 'Video 1', minutes: 7, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d4-e2.svg',
          title: 'Sample Presentation Video: Part 1',
          goal: 'Watch Ranjit’s first presentation and judge it.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'First learn six words you will hear and need today. Match each word to its meaning.' },
            { type: 'match', id: 'e2-m', title: 'Words for talking about presentations', left: ['to dim the lights', 'eye contact', 'engaging', 'distracting', 'constructive feedback', 'an anecdote'], right: ['to make the room darker', 'looking at people while you talk', 'interesting; it keeps people listening', 'it takes people’s attention away', 'comments that help someone improve', 'a short personal story'] },
            { type: 'do', n: 2, who: 'alone', text: 'Watch the video <b>up to 1:30</b> only. Ranjit gives a short academic presentation.' },
            { type: 'listening', source: 'Sample presentation video', title: 'Ranjit’s presentation — Part 1', videoId: 'V8eLdbKXGzk', start: 0, clip: 'play 0:00–1:30', transcripts: [] },
            { type: 'do', n: 3, who: 'pair', text: 'Answer with your partner. Then bet: how sure are you?' },
            { type: 'bet', id: 'e2-bet', items: [
              { q: 'Could you easily follow the structure of Ranjit’s presentation?', options: ['Yes — he gave a clear outline and summary.', 'No — there was no outline, no introduction to the topic and no summary.'], answer: 'No — there was no outline, no introduction to the topic and no summary.', why: 'He never tells us his plan, so it is hard to follow.' },
              { q: 'What was the topic?', options: ['The causes of stress', 'The causes of the American Revolution', 'The history of tea'], answer: 'The causes of the American Revolution', why: 'We only know because it is on the slide. He does not say it. Many people would not know the topic.' },
              { q: 'Was his presentation engaging?', options: ['Yes — he told a personal story.', 'No — he looked nervous and did not make eye contact.'], answer: 'No — he looked nervous and did not make eye contact.', why: 'Also: his phone rang, people laughed, and his slides had too much small text. He did not use his slides at all.' }
            ] },
            { type: 'do', n: 4, who: 'pair', text: 'Imagine Ranjit is your classmate. Say <b>one good thing</b> and <b>one tip</b>. Use the phrases.' },
            { type: 'language', title: 'Give kind, useful feedback (from Week 1, Day 3)', tabs: false, groups: [
              { label: 'Start with a strength', phrases: ['One thing that <b>worked well</b> was …', 'I <b>liked the way</b> you …', 'Your topic was <b>really interesting</b>.'] },
              { label: 'Give a tip', phrases: ['<b>Next time, you could</b> …', 'It <b>might help to</b> …', 'Have you <b>thought about</b> …?', 'I <b>found it hard to</b> … because …'] }
            ] },
            { type: 'fields', fields: [{ id: 'e2-fb', label: 'My feedback for Ranjit', rows: 3, placeholder: 'One thing that worked well was … Next time, you could …' }] }
          ],
          answers: { items: [['Feedback for Ranjit', 'Your own answer. For example: “Your slide showed the topic clearly. Next time, you could introduce the topic and your plan at the start, look up at the audience, and switch off your phone.”']] }
        },
        {
          id: 'e3', short: 'Video 2', minutes: 6, grouping: 'Alone → Pair', art: 'dec10/assets/week2/v/v-d10w2d4-e3.svg',
          title: 'Sample Presentation Video: Part 2',
          goal: 'Hear the class’s feedback and notice how they say it.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Watch <b>1:30–3:06</b>. His classmates and teacher give him feedback. Take short notes.' },
            { type: 'listening', source: 'Sample presentation video', title: 'Ranjit’s presentation — Part 2: feedback', videoId: 'V8eLdbKXGzk', start: 90, clip: 'play 1:30–3:06', transcripts: [] },
            { type: 'do', n: 2, who: 'pair', text: 'What advice did they give him? Sort the cards. Then check.' },
            { type: 'sort', id: 'e3-sort', title: 'Did they give this advice?', buckets: [{ label: 'Yes, they said it', letter: '✓' }, { label: 'No, they didn’t', letter: '✗' }], items: [
              { text: 'Speak louder and face the audience.', answer: 0 },
              { text: 'Don’t read from your paper.', answer: 0, why: 'He was reading, so it did not feel like he was talking to them.' },
              { text: 'Look up every sentence or two and make eye contact.', answer: 0 },
              { text: 'Smile more to look confident and relaxed.', answer: 0 },
              { text: 'Switch your phone off before you speak.', answer: 0 },
              { text: 'Use a personal story or experience as an example.', answer: 0 },
              { text: 'Use more slides with more text.', answer: 1 },
              { text: 'Speak faster so the talk is shorter.', answer: 1 }
            ] },
            { type: 'talk', title: 'Discuss with your partner', prompts: [
              'Did they comment on the same issues as you?',
              'Do you think this peer feedback is useful for Ranjit? Is it useful for the rest of the class?'
            ] },
            { type: 'toggle', title: 'After you watch: how the teacher gives feedback', hint: 'Steal these phrases', blocks: [
              { type: 'chat', title: 'From the video', right: 'Student', lines: [
                ['Teacher', 'Now, would anyone like to offer Ranjit <mark>constructive feedback</mark> about his presentation? <mark>Any tips for what he might do differently next time?</mark>'],
                ['Student', 'Not really! He <mark>needs to</mark> speak louder and face the audience.'],
                ['Teacher', 'Yes, <mark>great suggestion</mark>. Anyone else?'],
                ['Teacher', 'Exactly. <mark>It’s important, when you’re speaking, to</mark> look up every sentence or two and make eye contact with someone in the audience.'],
                ['Teacher', '<mark>I do have one more suggestion.</mark> To connect with listeners, <mark>it’s a great idea to</mark> use a personal story or experience as an example. <mark>Can you try that next time?</mark>']
              ] }
            ] }
          ],
          answers: { items: [['Is the peer feedback useful?', 'Yes. It guides Ranjit and lets him hear how the audience sees his presentation. It also helps everyone else think about their own presentation skills and see what works well.']] }
        },
        {
          id: 'e4', short: 'Video 3', minutes: 6, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d4-e4.svg',
          title: 'Sample Presentation Video: Part 3',
          goal: 'See what changes when Ranjit uses the feedback.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'First read the list below. Then watch <b>3:06 to the end</b>: Ranjit’s new presentation.' },
            { type: 'listening', source: 'Sample presentation video', title: 'Ranjit’s presentation — Part 3: his new talk', videoId: 'V8eLdbKXGzk', start: 186, clip: 'play 3:06–end', transcripts: [] },
            { type: 'quiz', id: 'e4-q', title: 'Which of these does he improve in his new presentation?', shared: ['Yes, he does it', 'No, he doesn’t'], items: [
              { q: 'a. introduce the topic', answer: 'Yes, he does it', why: '“Today, I’d like to talk about the causes and effects of stress …”' },
              { q: 'b. face the audience', answer: 'Yes, he does it' },
              { q: 'c. make eye contact with the audience', answer: 'Yes, he does it' },
              { q: 'd. speak clearly', answer: 'Yes, he does it' },
              { q: 'e. smile more', answer: 'Yes, he does it' },
              { q: 'f. make sure your phone is off before you speak', answer: 'Yes, he does it' },
              { q: 'g. tell a personal story or experience as an example', answer: 'Yes, he does it', why: 'He talks about working after school and his grades going down.' },
              { q: 'h. end with a practical final message for the audience', answer: 'Yes, he does it', why: '“It’s important to recognize when you are stressed and to ask for help.”' },
              { q: 'i. point at the slides and include references', answer: 'No, he doesn’t', why: 'This is the one thing he still does not do. In DEC10 you must do it!' }
            ] },
            { type: 'talk', title: 'Discuss', prompts: ['How did the audience react to this new presentation? Why?', 'Which change made the biggest difference? Why do you think so?'] },
            { type: 'do', n: 2, who: 'pair', text: 'Tap the numbers. Compare Ranjit’s two presentations.' },
            { type: 'hotspot', src: 'dec10/assets/week2/d4-ranjit.svg', size: 'wide', alt: 'Two stages side by side. Before: Ranjit reads from paper, looks down, his phone rings, his slide is full of small text. After: he smiles, looks at the audience, opens with the topic, tells a story and ends with a message; the audience leans in.', caption: 'Before and after: the same student, one week later.', spots: [
              { x: 21, y: 30, label: '1', color: '#c4562f', title: 'Reading from paper', text: 'He reads, so he cannot look up. It does not feel like he is <b>talking to</b> us.' },
              { x: 39, y: 22, label: '2', color: '#c4562f', title: 'A slide full of small text', text: 'Nobody can read it, and he never points at it.' },
              { x: 12, y: 70, label: '3', color: '#c4562f', title: 'The phone rings', text: 'The class laughs and he gets more nervous. <b>Switch it off</b> before you start.' },
              { x: 70, y: 26, label: '4', color: '#2f7d6b', title: 'A clear opening', text: '“Today, I’d like to talk about …” — now everyone knows the topic.' },
              { x: 86, y: 44, label: '5', color: '#2f7d6b', title: 'A personal story', text: 'His own story about stress makes the audience <b>feel connected</b> to him.' },
              { x: 63, y: 74, label: '6', color: '#2f7d6b', title: 'Eye contact and a smile', text: 'He looks up and smiles. He looks relaxed, so we relax too.' }
            ] }
          ],
          answers: { items: [['How did the audience react?', 'They were much more engaged, and they seemed to be able to relate to his story.']] }
        },
        {
          id: 'e5', short: 'Dos & Don’ts', minutes: 10, grouping: 'Class → Pair', art: 'dec10/assets/week2/v/v-d10w2d4-e5.svg',
          title: 'Dos and Don’ts of Presentations',
          goal: 'Know the 16 golden rules — and use them to give advice.',
          blocks: [
            { type: 'do', n: 1, who: 'class', text: '<b>Stand up!</b> Heads and Tails: your teacher reads a tip. Is it a <b>Do</b> or a <b>Don’t</b>? Show it with your hands.' },
            { type: 'figure', src: 'dec10/assets/week2/d4-heads-tails.svg', size: 'wide', alt: 'Two students. One has hands on head: Do — you should do this. One has hands on hips: Don’t — you should NOT do this.', caption: 'Hands on your head = Do. Hands on your hips = Don’t.' },
            { type: 'do', n: 2, who: 'pair', text: 'Now sort all 16 tips on your screen. Then check.' },
            { type: 'sort', id: 'e5-sort', title: 'Do or Don’t?', buckets: [{ label: 'Do', letter: '🙌' }, { label: 'Don’t', letter: '✋' }], items: [
              { text: 'Prepare thoroughly and practise so you know your topic well.', answer: 0 },
              { text: 'Have a clear introduction, main body and conclusion.', answer: 0 },
              { text: 'Read most of your talk from your notes or slides.', answer: 1 },
              { text: 'Put a lot of small text on your slides.', answer: 1 },
              { text: 'Use examples or anecdotes to make complex ideas more relatable.', answer: 0 },
              { text: 'Use unusual fonts and busy designs on your slides.', answer: 1, why: 'Slides should not be distracting or difficult to read.' },
              { text: 'Talk about other interesting things that are not your topic.', answer: 1, why: 'Don’t get off topic.' },
              { text: 'Make eye contact with different people in the audience.', answer: 0 },
              { text: 'Speak quietly and quickly so you finish early.', answer: 1 },
              { text: 'Speak in the same flat tone all the time.', answer: 1 },
              { text: 'Stand confidently, facing the audience.', answer: 0 },
              { text: 'Use hand gestures and facial expressions to emphasise points.', answer: 0 },
              { text: 'Play with something in your pocket while you talk.', answer: 1, why: 'Avoid any distracting behaviour.' },
              { text: 'Leave your phone on — it might be important.', answer: 1, why: 'Don’t forget to switch off your phone.' },
              { text: 'Check your timing.', answer: 0 },
              { text: 'Record your practice and watch it back to see where you can improve.', answer: 0 }
            ] },
            { type: 'do', n: 3, who: 'pair', text: '<b>Presentation doctor.</b> Spin. Your partner has this problem. Give advice in 20 seconds. Then swap.' },
            { type: 'spinner', id: 'e5-spin', title: 'Presentation doctor', reels: [
              { label: 'The problem', items: ['I always speak too fast.', 'My slides have too much text.', 'I forget everything when I’m nervous.', 'My voice sounds flat and boring.', 'I never know how to finish.', 'I look at the floor the whole time.', 'I play with my pen.', 'My talk is always too long.'] },
              { label: 'Start your advice with', items: ['Why don’t you try …?', 'It might help to …', 'One thing that works for me is …', 'Have you thought about …?', 'Next time, you could …'] }
            ] },
            { type: 'language', title: 'Useful chunks for presentation advice', tabs: false, groups: [
              { label: 'Voice', phrases: ['<b>slow down</b> and <b>pause</b>', '<b>project</b> your voice', '<b>vary</b> your tone'] },
              { label: 'Body', phrases: ['<b>make eye contact</b> with …', '<b>face</b> the audience', 'use <b>hand gestures</b>'] },
              { label: 'Slides', phrases: ['<b>keywords</b>, not full sentences', '<b>point at</b> the chart', '<b>cite</b> your sources on the slide'] }
            ] },
            { type: 'sticky', color: 'yellow', title: 'Golden rule', text: '<p>Your slides <b>support</b> you. They are not your script.</p>' }
          ]
        },
        {
          id: 'e6', short: 'Pronunciation', minutes: 11, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d4-e6.svg',
          title: 'Pronunciation: Stress, Intonation and Chunking',
          goal: 'Make your spoken English clear and natural.',
          blocks: [
            { type: 'key', title: 'Spoken English is not written English', points: ['Clear pronunciation helps your message reach the audience.', 'Today: <b>word stress</b>, <b>sentence stress</b>, <b>intonation</b> and <b>chunking</b>.'] },
            { type: 'do', n: 1, who: 'pair', text: 'Guess what each word means first. Then turn the card.' },
            { type: 'flip', title: 'Four features of clear speech', items: [
              { front: 'Word stress', tag: 'one word', back: 'Some syllables of a word are said more strongly. If you stress the wrong one, it doesn’t sound right. <b>SYD</b>-ney · au-<b>STRA</b>-li-a' },
              { front: 'Sentence stress', tag: 'one sentence', back: 'The word or words in a sentence that the speaker emphasises because they are more important.' },
              { front: 'Intonation', tag: 'up and down', back: 'Your voice goes higher or lower. It adds meaning, emotion or attitude. With no change, English sounds boring and unnatural.' },
              { front: 'Chunking', tag: 'pause // pause', back: 'A group of words with a pause before and after it — like punctuation when you speak. It gives you time to breathe and the listener time to think.' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Which syllable is stressed? Say each word aloud before you choose.' },
            { type: 'quiz', id: 'e6-ws', title: 'Word stress in Ranjit’s talk', items: [
              { q: 'effects', options: ['EF-fects', 'ef-FECTS'], answer: 'ef-FECTS' },
              { q: 'stress', options: ['STRESS (only 1 syllable)', 'stre-SS (2 syllables)'], answer: 'STRESS (only 1 syllable)' },
              { q: 'including', options: ['IN-clu-ding', 'in-CLU-ding', 'in-clu-DING'], answer: 'in-CLU-ding' },
              { q: 'expectations', options: ['EX-pec-ta-tions', 'ex-PEC-ta-tions', 'ex-pec-TA-tions'], answer: 'ex-pec-TA-tions', why: 'Words ending in -tion are stressed just before -tion: ex-pec-TA-tion.' },
              { q: 'yourself', options: ['YOUR-self', 'your-SELF'], answer: 'your-SELF' }
            ] },
            { type: 'do', n: 3, who: 'pair', text: '<b>Go further:</b> the words of our topic. Which syllable is stressed?' },
            { type: 'quiz', id: 'e6-topic', title: 'Word stress in this week’s topic', items: [
              { q: 'environment', options: ['EN-vi-ron-ment', 'en-VI-ron-ment', 'en-vi-RON-ment'], answer: 'en-VI-ron-ment' },
              { q: 'sustainability', options: ['sus-TAIN-a-bi-li-ty', 'sus-tain-a-BI-li-ty', 'SUS-tain-a-bi-li-ty'], answer: 'sus-tain-a-BI-li-ty', why: 'Words ending in -ity are stressed just before -ity.' },
              { q: 'technology', options: ['TECH-no-lo-gy', 'tech-NO-lo-gy', 'tech-no-LO-gy'], answer: 'tech-NO-lo-gy', why: 'Words ending in -ogy are stressed just before -ogy: bi-O-lo-gy, ec-O-lo-gy.' },
              { q: 'emissions', options: ['E-mis-sions', 'e-MIS-sions'], answer: 'e-MIS-sions' },
              { q: 'digital', options: ['DI-gi-tal', 'di-GI-tal'], answer: 'DI-gi-tal' }
            ] },
            { type: 'do', n: 4, who: 'alone', text: 'Look at the extract. <b>Bold underlined</b> = sentence stress. Arrows = intonation. <b>/</b> and <b>//</b> = chunks (pauses).' },
            { type: 'figure', src: 'dec10/assets/week2/d4-pron.svg', size: 'wide', alt: 'Good morning! // Today, / I’d like to talk about / the causes / and effects / of stress / and how to cope with stress. // Stress has / many causes, // including work or school, / life events, / changes, / or unrealistic expectations of yourself. Stressed words are underlined and arrows show the voice going up and down.', caption: 'One feature at a time: first sentence stress, then intonation, then chunking.' },
            { type: 'steps', title: 'Practise with your partner', items: [
              { who: 'pair', text: 'Read the extract aloud. Focus on <b>sentence stress</b> only.' },
              { who: 'pair', text: 'Read it again. Now focus on <b>intonation</b>: follow the arrows.' },
              { who: 'pair', text: 'Read it again. Now <b>pause</b> at every / and longer at //.' },
              { who: 'pair', text: 'Put it all together. Give each other feedback.' },
              { who: 'alone', text: 'Record yourself on your phone (Voice Memo or video). Listen back.' }
            ] },
            { type: 'language', title: 'Pronunciation feedback for your partner', tabs: false, groups: [
              { label: 'Good', phrases: ['Your pauses made it <b>easy to follow</b>.', 'You <b>stressed the key words</b> clearly.'] },
              { label: 'Tip', phrases: ['Try to <b>pause after</b> “Today”.', 'Your voice was <b>a bit flat</b> on …', 'Say “ex-pec-<b>TA</b>-tions”, not …'] }
            ] },
            { type: 'fields', fields: [{ id: 'e6-rec', label: 'When I listened to my recording, I noticed … I need to improve …', rows: 3, placeholder: 'I noticed that I … I need to improve my …' }] },
            { type: 'tip', text: '<b>After class:</b> watch the pronunciation videos on chunking, stress and intonation in the <b>Communication Resources</b> section on Canvas.' }
          ]
        }
      ]
    },

    /* ═════════════════════════ 16A ═════════════════════════ */
    {
      id: 'rspres2', number: '02', code: '16A', minutes: 120, tone: 'plum', art: 'dec10/assets/week2/s-rspres2.svg',
      title: 'Group research summary presentation groups 3, 4 & 5',
      subtitle: 'Present, answer questions, give and get feedback',
      outcome: 'You deliver a structured presentation, answer questions on the spot, and judge your own and your peers’ presentations.',
      activities: [
        {
          id: 'p1', short: 'Where we are', minutes: 5, grouping: 'Class', art: 'dec10/assets/week2/v/v-d10w2d4-p1.svg',
          title: 'Group Research Summary Presentations',
          goal: 'Know where today fits and what happens.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d4-rs-days.svg', size: 'wide', alt: 'Day 1: individuals research and prepare a summary of research. Day 2: individuals form groups and share their summaries; groups prepare a group presentation. Day 3: presentations 1 and 2. Day 4 (today): presentations 3, 4 and 5. Topic: Exploring our digital carbon footprint. Rhetorical function: cause and effect.', caption: 'Today is Day 4: Presentations 3, 4 and 5.' },
            { type: 'key', title: 'Today in four facts', points: [
              'Each group presents for <b>8–10 minutes</b> + <b>5 minutes</b> for individual questions.',
              'Topic: <b>Exploring our digital carbon footprint</b>. Rhetorical function: <b>cause and effect</b>.',
              'Questions today: <b>clarification</b> and <b>probing</b> only. AST questions come in Week 3.',
              'There is <b>no mark</b> — just peer and teacher feedback with the Peer and Teacher Presentation Feedback Tool.'
            ] },
            { type: 'bet', id: 'p1-bet', title: 'Quick check', items: [
              { q: 'How long does each group present?', options: ['3–5 minutes', '8–10 minutes', '15–20 minutes'], answer: '8–10 minutes' },
              { q: 'Which questions do you ask today?', options: ['Clarification and probing', 'AST questions only', 'No questions'], answer: 'Clarification and probing' },
              { q: 'Who is your feedback for?', options: ['The whole group', 'One presenter that your teacher gives you'], answer: 'One presenter that your teacher gives you', why: 'Feedback is for individual speakers. Your teacher allocates one presenter to your group.' }
            ] }
          ]
        },
        {
          id: 'p2', short: 'Get ready', minutes: 15, grouping: 'Presentation groups', art: 'dec10/assets/week2/v/v-d10w2d4-p2.svg',
          title: 'Last-minute practice and preparation',
          goal: 'Rehearse once more, and get ready to listen and give feedback.',
          blocks: [
            { type: 'checklist', id: 'p2-ready', title: 'Before we start', meter: ['ready', 'Ready to go!'], items: [
              'I am sitting with my presentation group.',
              'Our slides are open and ready (no hold-ups).',
              'My phone is switched off.',
              'The Peer and Teacher Presentation Feedback Tool is open, ready to fill out.',
              'I know my part and who speaks before and after me.'
            ] },
            { type: 'do', n: 1, who: 'group', text: 'Run through your talk once. Each speaker: practise your <b>first sentence</b> and your <b>hand-over</b> to the next speaker.' },
            { type: 'language', title: 'Language for your group presentation', groups: [
              { label: 'Open', phrases: ['Good morning, everyone. <b>Today we’re going to talk about</b> …', 'Our presentation <b>is divided into</b> three parts.', '<b>First</b>, I’ll … <b>Then</b> … will … <b>Finally</b>, …'] },
              { label: 'Cause & effect', phrases: ['… <b>leads to</b> / <b>results in</b> …', '<b>As a result</b>, …', '… <b>is caused by</b> / <b>is due to</b> …', '<b>This is because</b> …', '<b>The more</b> … , <b>the more</b> …'] },
              { label: 'Use sources', phrases: ['<b>According to</b> Griffiths (2020), …', 'A UN report (2024) <b>found that</b> …', '<b>My research shows that</b> …'] },
              { label: 'Hand over', phrases: ['<b>Now I’ll hand over to</b> Mei, who will talk about …', '<b>Thank you</b>, Ali. <b>As Ali said</b>, …', '<b>Building on</b> what Sam said, …'] },
              { label: 'Close', phrases: ['<b>To sum up</b>, …', 'The <b>key message</b> is …', '<b>Thank you for listening.</b> We’re happy to take any questions.'] }
            ] },
            { type: 'do', n: 2, who: 'group', text: '<b>Hot seat.</b> One person spins and asks. The speaker answers <b>without notes</b> in 30 seconds. Take turns.' },
            { type: 'spinner', id: 'p2-spin', title: 'Answer on the spot', reels: [
              { label: 'Question', items: ['Could you explain what you mean by “data centre”?', 'Can you give an example of that?', 'Where did that figure come from?', 'Why do you think that happens?', 'What would happen if people did nothing?', 'Is that true in every country?', 'Which solution do you think works best?'] },
              { label: 'Start your answer with', items: ['That’s a good question. …', 'What I meant was …', 'Let me give you an example: …', 'According to my source, …', 'I’m not completely sure, but I think …'] }
            ] },
            { type: 'language', title: 'Answering questions — and buying time', tabs: false, groups: [
              { label: 'Buy time', phrases: ['<b>That’s a good question.</b>', '<b>Let me think about that</b> for a second.', '<b>Do you mean</b> … ?'] },
              { label: 'Answer', phrases: ['<b>What I meant was</b> …', '<b>In other words</b>, …', '<b>For example</b>, …'] },
              { label: 'If you don’t know', phrases: ['<b>I’m not sure</b>, but <b>I think</b> …', 'I <b>didn’t find</b> data on that, <b>but</b> …', '<b>That would be</b> interesting to research.'] }
            ] }
          ]
        },
        {
          id: 'p3', short: 'The procedure', minutes: 5, grouping: 'Class', art: 'dec10/assets/week2/v/v-d10w2d4-p3.svg',
          title: 'Summary of procedure per group presentation',
          goal: 'Know the four steps for each group — 30 minutes in total.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d4-rs-cycle.svg', size: 'wide', alt: 'Four steps in 30 minutes. Step 1, 8–10 minutes: the group presents; other groups listen and complete the peer feedback form. Step 2, 10 minutes: the group reflects on its presentation and answers individual questions; the audience prepares questions and a few are chosen. Step 3, 5–7 minutes: the teacher gives feedback to the presenting group; groups prepare their feedback and at least one action point. Step 4, 5–7 minutes: groups share their feedback with their allocated presenter and send the forms electronically.', caption: 'Every group: the same four steps, about 30 minutes.' },
            { type: 'do', n: 1, who: 'pair', text: 'Close the picture in your head. Put the steps in order.' },
            { type: 'order', id: 'p3-order', title: 'One group presentation — what happens first?', items: [
              'The group presents (8–10 min). Everyone else listens and fills in the feedback tool.',
              'The audience writes one probing or clarification question. The group reflects.',
              'A few students ask their questions. The presenters answer.',
              'The teacher gives feedback to the presenting group. Groups prepare feedback with at least one action point.',
              'Each presenter sits with their feedback group and hears their feedback (5 min).',
              'All feedback tool forms are sent electronically to the presenters.'
            ] },
            { type: 'key', title: 'Two rules', tone: 'warn', points: [
              'Your feedback must include <b>at least one action point</b> (= one clear thing to do next time).',
              'By the end of today, <b>all feedback forms</b> are sent to the presenters — even if you also said it in class.'
            ] }
          ]
        },
        {
          id: 'p4', short: 'Toolkit', minutes: 10, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-p4.svg',
          title: 'Your feedback tool and question toolkit',
          goal: 'Know what to listen for and how to ask good questions.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'The feedback tool has four criteria. Sort each statement into its criterion.' },
            { type: 'sort', id: 'p4-sort', title: 'Which criterion?', buckets: [{ label: 'Content Delivery of Presentation', letter: 'C' }, { label: 'Fluency & Pronunciation', letter: 'F' }, { label: 'Language Use', letter: 'L' }, { label: 'Question & Answer', letter: 'Q' }], items: [
              { text: 'Evidence for the cause/s was given.', answer: 0 },
              { text: 'Visuals were clear and helped the audience understand the main ideas.', answer: 0 },
              { text: 'Body language and eye contact engaged the audience.', answer: 0 },
              { text: 'We could hear the presenters using chunking, pausing and stress in their language.', answer: 1 },
              { text: 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).', answer: 1 },
              { text: 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem).', answer: 2 },
              { text: 'The grammar used was largely accurate and we could understand the meaning.', answer: 2 },
              { text: 'Answers were given spontaneously.', answer: 3 },
              { text: 'Answers were relevant.', answer: 3 }
            ] },
            { type: 'do', n: 2, who: 'group', text: 'Two kinds of question for today. Is each one <b>clarification</b> or <b>probing</b>?' },
            { type: 'sort', id: 'p4-q', title: 'Clarification or probing?', buckets: [{ label: 'Clarification — I didn’t understand', letter: '?' }, { label: 'Probing — tell me more / go deeper', letter: '⤓' }], items: [
              { text: 'Could you explain what you mean by “carbon offsets”?', answer: 0 },
              { text: 'Sorry, did you say 3.7% or 37%?', answer: 0 },
              { text: 'What exactly is a data centre?', answer: 0 },
              { text: 'Why do you think gaming uses so much electricity?', answer: 1 },
              { text: 'How reliable is the data from Google’s own report?', answer: 1 },
              { text: 'What would happen if people kept their phones for six years?', answer: 1 }
            ] },
            { type: 'language', title: 'Question starters', tabs: false, groups: [
              { label: 'Clarification', phrases: ['<b>Could you explain what you mean by</b> …?', '<b>Sorry, did you say</b> … or …?', '<b>Could you say that again</b>, please?', '<b>So, are you saying that</b> …?'] },
              { label: 'Probing', phrases: ['<b>Why do you think</b> …?', '<b>What evidence</b> is there that …?', '<b>How would</b> … <b>affect</b> …?', '<b>What would happen if</b> …?', '<b>Is this true for</b> all countries?'] }
            ] }
          ]
        },
        {
          id: 'p5', short: 'Group 3', minutes: 30, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-p5.svg',
          title: 'Presentation 3',
          goal: 'Listen, judge, ask — then give your presenter useful feedback.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: '<b>Group 3 presents</b> (8–10 min). Listen. Fill in the tool for <b>your</b> presenter. Think of a question.' },
              { who: 'alone', text: '<b>Write one question</b> (clarification or probing). Your teacher may choose you to ask it.' },
              { who: 'group', text: '<b>Agree on your feedback</b> (5–7 min). Include at least one action point.' },
              { who: 'group', text: '<b>Give your feedback</b> to your presenter face to face (5 min). Then send the form.' }
            ] },
            { type: 'form', id: 'p5-f', title: 'Peer and Teacher Presentation Feedback Tool · Presentation 3', observe: 'Which presenter are you giving feedback on?', intro: 'Choose Yes, Mostly or Needs work. Write a short comment and one action point.', scale: ['Yes', 'Mostly', 'Needs work'], cols: ['Comments', 'Action point'], sections: [
              { label: 'Content Delivery of Presentation', items: ['The problem was clearly stated.', 'Evidence for the cause/s was given.', 'Solution was evaluated.', 'We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.', 'Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
              { label: 'Fluency & Pronunciation', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
              { label: 'Language Use', items: ['The grammar used was largely accurate and we could understand the meaning. The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)'] },
              { label: 'Question & Answer', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
            ], send: true, sendLabel: 'Send to the presenter', sendHint: 'Send this form to the presenter you gave feedback on. They save it in their “Research & Seminar Presentations – Feedback & Action Plans” folder.' },
            { type: 'fields', fields: [{ id: 'p5-q', label: 'My question for Group 3', rows: 2, placeholder: 'Could you explain what you mean by … ? / Why do you think … ?' }] },
            { type: 'language', title: 'Say your feedback face to face', tabs: false, groups: [
              { label: '1 · Strength', phrases: ['<b>We really liked</b> the way you …', 'Your … was <b>very clear</b>.'] },
              { label: '2 · Area to work on', phrases: ['<b>We found it a bit hard to</b> … because …', '<b>Sometimes</b> your voice was …'] },
              { label: '3 · Action point', phrases: ['<b>Next time, try to</b> …', '<b>Our action point for you is</b> …', '<b>Does that make sense?</b> Any questions?'] }
            ] }
          ]
        },
        {
          id: 'p6', short: 'Group 4', minutes: 30, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-p6.svg',
          title: 'Presentation 4',
          goal: 'Same steps — better questions and sharper feedback this time.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: '<b>Group 4 presents</b> (8–10 min). Fill in the tool for your presenter.' },
              { who: 'alone', text: '<b>Write one question.</b> This time, try a <b>probing</b> question.' },
              { who: 'group', text: '<b>Agree on your feedback</b> with at least one action point.' },
              { who: 'group', text: '<b>Give your feedback</b> face to face. Then send the form.' }
            ] },
            { type: 'form', id: 'p6-f', title: 'Peer and Teacher Presentation Feedback Tool · Presentation 4', observe: 'Which presenter are you giving feedback on?', intro: 'Choose Yes, Mostly or Needs work. Write a short comment and one action point.', scale: ['Yes', 'Mostly', 'Needs work'], cols: ['Comments', 'Action point'], sections: [
              { label: 'Content Delivery of Presentation', items: ['The problem was clearly stated.', 'Evidence for the cause/s was given.', 'Solution was evaluated.', 'We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.', 'Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
              { label: 'Fluency & Pronunciation', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
              { label: 'Language Use', items: ['The grammar used was largely accurate and we could understand the meaning. The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)'] },
              { label: 'Question & Answer', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
            ], send: true, sendLabel: 'Send to the presenter', sendHint: 'Send this form to the presenter you gave feedback on. They save it in their “Research & Seminar Presentations – Feedback & Action Plans” folder.' },
            { type: 'fields', fields: [{ id: 'p6-q', label: 'My question for Group 4', rows: 2, placeholder: 'What evidence is there that … ? / What would happen if … ?' }] },
            { type: 'tip', text: '<b>Make your action point specific.</b> Not “Speak better.” → “Pause after each main point, and look up every sentence or two.”' }
          ]
        },
        {
          id: 'p7', short: 'Group 5', minutes: 30, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-p7.svg',
          title: 'Presentation 5',
          goal: 'The last group — use everything you learned today.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: '<b>Group 5 presents</b> (8–10 min). Fill in the tool for your presenter.' },
              { who: 'alone', text: '<b>Write one question.</b> Use a question starter you have not used yet.' },
              { who: 'group', text: '<b>Agree on your feedback</b> with at least one action point.' },
              { who: 'group', text: '<b>Give your feedback</b> face to face. Then send the form.' }
            ] },
            { type: 'form', id: 'p7-f', title: 'Peer and Teacher Presentation Feedback Tool · Presentation 5', observe: 'Which presenter are you giving feedback on?', intro: 'Choose Yes, Mostly or Needs work. Write a short comment and one action point.', scale: ['Yes', 'Mostly', 'Needs work'], cols: ['Comments', 'Action point'], sections: [
              { label: 'Content Delivery of Presentation', items: ['The problem was clearly stated.', 'Evidence for the cause/s was given.', 'Solution was evaluated.', 'We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.', 'Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
              { label: 'Fluency & Pronunciation', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
              { label: 'Language Use', items: ['The grammar used was largely accurate and we could understand the meaning. The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)'] },
              { label: 'Question & Answer', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
            ], send: true, sendLabel: 'Send to the presenter', sendHint: 'Send this form to the presenter you gave feedback on. They save it in their “Research & Seminar Presentations – Feedback & Action Plans” folder.' },
            { type: 'fields', fields: [{ id: 'p7-q', label: 'My question for Group 5', rows: 2, placeholder: 'How would … affect … ? / Is this true for … ?' }] }
          ]
        },
        {
          id: 'p8', short: 'Reflection', minutes: 10, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-p8.svg',
          title: 'Reflection',
          goal: 'Look back, then decide what you will do better next time.',
          blocks: [
            { type: 'tabs', title: 'Choose your tab', tabs: [
              { label: 'I presented today', blocks: [
                { type: 'talk', title: 'Discuss in your presentation group', prompts: ['What did you do well — individually and as a group?', 'What do you want to do better in your next presentation — individually and as a group?'] },
                { type: 'fields', fields: [{ id: 'p8-well', label: 'What I did well', rows: 2, placeholder: 'I … / As a group, we …' }, { id: 'p8-better', label: 'What I will do better next time', rows: 2, placeholder: 'Next time, I will …' }] }
              ] },
              { label: 'I watched today', blocks: [
                { type: 'talk', title: 'Discuss in your group', prompts: ['What did you learn from watching today’s presentations?', 'What will you do in your presentation from what you learned today?'] },
                { type: 'fields', fields: [{ id: 'p8-learn', label: 'From watching today, I will …', rows: 3, placeholder: 'I noticed that … so in my presentation I will …' }] }
              ] }
            ] },
            { type: 'checklist', id: 'p8-save', title: 'Before you leave', items: ['I sent my feedback forms to the presenters.', 'I saved the feedback forms I received in my “Research & Seminar Presentations – Feedback & Action Plans” folder.'] }
          ]
        }
      ]
    },

    /* ═════════════════════════ 17A ═════════════════════════ */
    {
      id: 'opening', number: '03', code: '17A', minutes: 45, tone: 'teal', art: 'dec10/assets/week2/s-opening.svg',
      title: 'Seminar Discussion Opening Remarks group 1',
      subtitle: 'Group 1 opens the seminars — everyone else reacts',
      outcome: 'You follow a structured presentation, react to it with questions, and know how to write thought-provoking discussion questions.',
      activities: [
        {
          id: 'o1', short: 'The task', minutes: 3, grouping: 'Class', art: 'dec10/assets/week2/v/v-d10w2d4-o1.svg',
          title: 'Revision of task instructions',
          goal: 'Remember what Group 1 does — and what you do.',
          blocks: [
            { type: 'model', title: 'Seminar Group 1’s question', text: 'What is the impact of the digital carbon footprint on overall carbon emissions in [your chosen country], and what strategies can be deployed to reduce it?' },
            { type: 'hotspot', src: 'dec10/assets/week2/d4-opening.svg', size: 'wide', alt: 'Group 1’s Opening Remarks, 5–7 minutes, has three parts: 1 a brief introduction to the country and why they chose it, 2 causes and/or effects of the problem, 3 possible strategies or solutions. The audience writes what they want to know more about.', caption: 'Tap the numbers: what Group 1 covers in 5–7 minutes.', spots: [
              { x: 24, y: 40, label: '1', color: '#2f7d6b', title: 'The country', text: 'A brief introduction to the country they chose — and <b>why</b> they chose it.' },
              { x: 50, y: 40, label: '2', color: '#c4562f', title: 'Causes and/or effects', text: 'The causes and/or effects of the sustainability issue or problem.' },
              { x: 76, y: 40, label: '3', color: '#3a58a0', title: 'Strategies', text: 'Possible strategies or solutions.' },
              { x: 50, y: 84, label: '4', color: '#8a4f9e', title: 'The rest of the class', text: 'Pay attention. While you listen, write down any more information you would like to know about the country and its sustainability issue.' }
            ] },
            { type: 'sort', id: 'o1-sort', title: 'Who does it?', buckets: [{ label: 'Seminar Group 1', letter: 'G1' }, { label: 'The rest of the class', letter: 'All' }], items: [
              { text: 'Deliver a 5–7-minute Opening Remarks presentation.', answer: 0 },
              { text: 'Write down more information you would like to know.', answer: 1 },
              { text: 'Get feedback from the teacher and ask about anything unclear.', answer: 0 },
              { text: 'Discuss your reactions in your seminar group.', answer: 1 },
              { text: 'Post ONE group post with reactions and questions to the Discussion Board — in class.', answer: 1 }
            ] }
          ]
        },
        {
          id: 'o2', short: 'Listen', minutes: 10, grouping: 'Alone', art: 'dec10/assets/week2/v/v-d10w2d4-o2.svg',
          title: 'Opening Remarks',
          goal: 'Listen to Group 1 and note the gaps in your knowledge.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Listen as Group 1 presents. Take short notes. In the last column, write what you <b>want to know more about</b>.' },
            { type: 'table', id: 'o2-t', title: 'My notes on Group 1’s Opening Remarks', columns: ['Part', 'What they said (notes)', 'What I would like to know more about'], fixed: ['The country and why they chose it', 'Causes and/or effects', 'Possible strategies'] },
            { type: 'language', title: 'Turn a gap into a question', tabs: false, groups: [
              { label: 'I want to know', phrases: ['<b>How big is</b> the digital footprint in … <b>compared with</b> …?', '<b>Why does</b> … use so much …?', '<b>What is</b> the government <b>already doing</b> about …?', '<b>Which strategy would work best</b> in …? Why?'] }
            ] }
          ]
        },
        {
          id: 'o3', short: 'After', minutes: 10, grouping: 'Seminar groups', art: 'dec10/assets/week2/v/v-d10w2d4-o3.svg',
          title: 'After the Opening Remarks presentation',
          goal: 'React as a group and post your questions — or take notes on your feedback.',
          blocks: [
            { type: 'tabs', title: 'Choose your tab', tabs: [
              { label: 'Rest of class', blocks: [
                { type: 'do', n: 1, who: 'group', text: 'Discuss your reactions. Everyone says at least one sentence.' },
                { type: 'language', title: 'React to the presentation', tabs: false, groups: [
                  { label: 'React', phrases: ['<b>I was surprised that</b> …', '<b>I didn’t know that</b> …', '<b>It was interesting to hear</b> that …', '<b>I agree / I’m not sure</b> that …'] },
                  { label: 'Ask for more', phrases: ['<b>We would like to know more about</b> …', '<b>It wasn’t clear to us</b> why …', '<b>We wonder whether</b> …'] }
                ] },
                { type: 'do', n: 2, who: 'group', text: 'Choose your best <b>one or two questions</b>. Write ONE group post. Post it to the Discussion Board <b>now, in class</b>.' },
                { type: 'fields', fields: [{ id: 'o3-react', label: 'Our group’s reactions', rows: 3, placeholder: 'We were surprised that … It was interesting to hear …' }, { id: 'o3-qs', label: 'Our one or two questions for Group 1', rows: 3, placeholder: '1. How … ?\n2. Why … ?' }] },
                { type: 'checklist', id: 'o3-post', title: 'Our post', items: ['Reactions + one or two questions', 'ONE post per group', 'Posted in class'] }
              ] },
              { label: 'Seminar Group 1', blocks: [
                { type: 'do', n: 1, who: 'group', text: 'Listen and take notes as your teacher gives you feedback. You need these notes for <b>Portfolio Submission 1</b>.' },
                { type: 'table', id: 'o3-fb', title: 'My notes on the teacher’s feedback', columns: ['Area', 'What went well', 'What to improve (action)'], fixed: ['Content', 'Engagement with the audience', 'Pronunciation'] },
                { type: 'language', title: 'Check that you understand', tabs: false, groups: [
                  { label: 'Ask', phrases: ['<b>Could you give me an example of</b> …?', '<b>What do you mean by</b> …?', '<b>So, next time we should</b> … — <b>is that right?</b>'] }
                ] }
              ] }
            ] }
          ]
        },
        {
          id: 'o4', short: 'Group 1 next', minutes: 8, grouping: 'Class', art: 'dec10/assets/week2/v/v-d10w2d4-o4.svg',
          title: 'Seminar Preparation for Week 3 (Group 1)',
          goal: 'Know Group 1’s jobs before the Seminar — the same jobs every group will do.',
          blocks: [
            { type: 'checklist', id: 'o4-g1', title: 'Before the Seminar next week (Group 1)', meter: ['done', 'Ready for the Seminar!'], items: [
              'Read reactions, comments and questions on the Discussion Board and identify any common themes and interesting ideas',
              'Select the focus of your seminar presentation from these comments and questions.',
              'Think of two thought-provoking questions for the class to discuss in small groups for 10 minutes',
              'Prepare your Powerpoint Slides for your Presentation for next week (10–12 minutes)',
              'Submit Portfolio Submission 1 — before the Seminar in Week 3'
            ] },
            { type: 'key', title: 'Note 1', tone: 'warn', points: ['Don’t address ALL the questions on the Discussion Board. Choose <b>one or two</b> to focus your research.'] },
            { type: 'do', n: 1, who: 'pair', text: '<b>Portfolio Submission 1</b> = a written summary of, and reflection on, the teacher’s feedback on your Opening Remarks. Complete the model.' },
            { type: 'cloze', id: 'o4-cl', title: 'A model Portfolio Submission 1', text: 'Feedback on our Opening Remarks can be put into three {{1}}: content, engagement with the audience and pronunciation. For content, the feedback was that our causes were clear, but we needed more {{2}}. For engagement, the teacher said that we read from our slides, so we should make more {{3}}. For pronunciation, {{4}} words like “sustainability” was difficult. This feedback tells us that {{5}}, we should practise with notes, not a script.', options: ['categories', 'evidence', 'eye contact', 'stressing', 'next time'], answers: ['categories', 'evidence', 'eye contact', 'stressing', 'next time'] },
            { type: 'language', title: 'Frames for your Portfolio reflection', tabs: false, groups: [
              { label: 'Summarise', phrases: ['Feedback on our … <b>can be put into</b> … categories.', '<b>For</b> content, <b>the feedback was that</b> …', '<b>The teacher pointed out that</b> …'] },
              { label: 'Reflect', phrases: ['<b>This feedback tells us that next time, we should</b> …', '<b>We agree with</b> this because …', '<b>Our main action point is to</b> …'] }
            ] }
          ]
        },
        {
          id: 'o5', short: 'Questions', minutes: 12, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d4-o5.svg',
          title: 'Making Seminar Discussion Questions',
          goal: 'Write questions that start a real discussion — not a yes or no.',
          blocks: [
            { type: 'key', title: 'A thought-provoking question can …', points: ['<b>challenge</b> the opinions given by the class on the discussion board.', '<b>connect</b> different aspects of the topic together.', '<b>compare and contrast</b> various aspects and viewpoints of the topic.', '<b>extend</b> an interesting aspect of one of the themes you have identified in your research.', 'ask the students to draw upon their <b>wider knowledge or personal experience</b>.'] },
            { type: 'do', n: 1, who: 'pair', text: 'Look at each pair. Which question will start <b>more</b> critical discussion? Bet your coins.' },
            { type: 'bet', id: 'o5-bet', items: [
              { q: 'Pair 1 — which is more thought-provoking?', options: ['a. How do our individual lifestyle choices impact global sustainability efforts?', 'b. Should we bother recycling?'], answer: 'a. How do our individual lifestyle choices impact global sustainability efforts?', why: 'a is open (not yes/no) and lets people compare different choices and impacts. “Our” makes people reflect on their own actions. b is yes/no and only about recycling.' },
              { q: 'Pair 2 — which is more thought-provoking?', options: ['a. Should all companies be mandated to implement green practices?', 'b. What ethical role should businesses play in promoting environmental sustainability? Give examples.'], answer: 'b. What ethical role should businesses play in promoting environmental sustainability? Give examples.', why: 'b invites many roles (donations, sustainable practices, transparent reporting …) and real examples. a is yes/no, and “be mandated” is unclear: who would monitor it?' },
              { q: 'Pair 3 — which is more thought-provoking?', options: ['a. How does consumer culture need to change to better support sustainability goals? How could you modify your own consumer habits?', 'b. Is organic food the sole option for sustainable eating? Do you like organic food?'], answer: 'a. How does consumer culture need to change to better support sustainability goals? How could you modify your own consumer habits?', why: 'a looks at consumer culture as a whole and then at your own habits. b is too narrow, and “Do you like organic food?” is irrelevant.' }
            ] },
            { type: 'figure', src: 'dec10/assets/week2/d4-question-ladder.svg', size: 'wide', alt: 'A ladder of questions. Bottom: yes/no questions such as Should we recycle? Middle: what and why questions. Top: open questions that compare, connect or challenge, such as To what extent… and What role should… play in…', caption: 'Climb the ladder: from yes/no to thought-provoking.' },
            { type: 'language', title: 'Question stems that open a discussion', groups: [
              { label: 'Challenge', phrases: ['<b>To what extent</b> do you agree that …?', 'Some people on the board said … <b>How convincing is this?</b>'] },
              { label: 'Connect', phrases: ['<b>How does</b> … <b>affect</b> …?', '<b>What is the link between</b> … and …?'] },
              { label: 'Compare', phrases: ['<b>How is</b> … <b>different in</b> … <b>compared with</b> …?', '<b>Which is more effective</b>, … or …? Why?'] },
              { label: 'Experience', phrases: ['<b>In your experience</b>, …?', '<b>How could you change your own</b> … ?'] }
            ] },
            { type: 'do', n: 2, who: 'pair', text: '<b>Upgrade it!</b> Turn each weak question into a thought-provoking one. Use a stem above.' },
            { type: 'fields', fields: [
              { id: 'o5-u1', label: 'Weak: “Do you use your phone a lot?” → My upgrade', rows: 2, placeholder: 'How do our phone habits …' },
              { id: 'o5-u2', label: 'Weak: “Are data centres bad?” → My upgrade', rows: 2, placeholder: 'To what extent …' },
              { id: 'o5-u3', label: 'Weak: “Is AI good?” → My upgrade', rows: 2, placeholder: 'What role should … play in …' }
            ] },
            { type: 'toggle', title: 'Possible upgrades', hint: 'Open after you try', blocks: [
              { type: 'cards', items: [
                { label: 'Phones', text: 'How do our everyday phone habits add to the digital carbon footprint, and which habit would be easiest for you to change?' },
                { label: 'Data centres', text: 'To what extent should tech companies, rather than users, be responsible for the emissions of data centres?' },
                { label: 'AI', text: 'What role should governments play in reducing the energy and water footprint of AI? Give examples.' }
              ] }
            ] },
            { type: 'do', n: 3, who: 'group', text: '<b>Test your best question.</b> Ask it to another pair. Discuss for 2 minutes. Did it start a real discussion?' }
          ]
        },
        {
          id: 'o6', short: 'Next week', minutes: 7, grouping: 'Class', art: 'dec10/assets/week2/v/v-d10w2d4-o6.svg',
          title: 'Procedure for the Seminar Week 3 (Reminder)',
          goal: 'Know what happens on the day of the Seminar, and what comes after.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d4-seminar-day.svg', size: 'wide', alt: 'The day of the Seminar, about 40 minutes. Seminar presentation 10–12 minutes: an outline of class reactions and the focus (2–3 minutes), a summary of research (8–10 minutes), then two thought-provoking questions. Discussion 10 minutes: the class discusses; Group 1 only listens and takes notes. After the discussion 1–2 minutes: Group 1 summarises each group’s discussion. After the whole task: teacher feedback for Group 1; the class prepares peer feedback.', caption: 'The day of the Seminar: about 40 minutes.' },
            { type: 'order', id: 'o6-order', title: 'Put the Seminar day in order', items: [
              'Group 1 outlines the class reactions and the focus they chose (2–3 min).',
              'Group 1 summarises their research (8–10 min).',
              'Group 1 introduces two thought-provoking questions.',
              'The class discusses in small groups (10 min). Group 1 listens and takes notes — no talking!',
              'Group 1 summarises the main points of each group’s discussion (1–2 min).',
              'The teacher gives Group 1 feedback. The class discusses and prepares its peer feedback.'
            ] },
            { type: 'quiz', id: 'o6-q', title: 'After the Seminar and the Portfolio', items: [
              { q: 'Group 1, after their Seminar, submits …', options: ['Portfolio Submission 3 (a written summary of, and reflection on, teacher’s and peer feedback) and Portfolio Submission 4 (a video response, 5–6 minutes)', 'Nothing — the Seminar is the end'], answer: 'Portfolio Submission 3 (a written summary of, and reflection on, teacher’s and peer feedback) and Portfolio Submission 4 (a video response, 5–6 minutes)', why: 'Submission 4 is the assessed task.' },
              { q: 'The rest of the class, after the Seminar, submits …', options: ['Peer Feedback 1: feedback for the presenting group, as audio, video or written text', 'A new presentation'], answer: 'Peer Feedback 1: feedback for the presenting group, as audio, video or written text' },
              { q: 'In total, how many Portfolio Submissions does each group make?', options: ['3', '6', '10'], answer: '6', why: '3 based on your Seminar Presentations + 3 based on audience (peer) feedback, one for each other group.' },
              { q: 'How much is the Portfolio worth?', options: ['It is not assessed', '10% of the grade for Speaking', '50% of the course'], answer: '10% of the grade for Speaking' }
            ] },
            { type: 'model', title: 'Group 2 Opening Remarks (Reminder) · after Group 1’s Seminar next week · 5–7 minutes', text: 'What strategies could be implemented in [your chosen country] to enhance a smooth transition to more green jobs?', list: ['A brief introduction to the country you selected and why you chose it', 'Causes and/or effects of the sustainability issue/problem', 'Possible solutions/strategies'], note: 'Group 2: prepare a PPT. To revise the steps, see W1 D4 Seminar Discussion Opening Remarks Check-in. To revise the whole task, see W1 D2 Introduction to Seminar and Interactive Presentation.' },
            { type: 'cards', title: 'Revise in the app', items: [
              { label: 'W1 D4', text: '<a href="#/d10w1d4/checkin">Opening Remarks check-in</a>' },
              { label: 'W1 D4', text: '<a href="#/d10w1d4/video">Seminar + Portfolio: the big picture</a>' },
              { label: 'W1 D2', text: '<a href="#/d10w1d2/seminar">Introduction to Seminar and Interactive Presentation</a>' }
            ] }
          ]
        }
      ]
    },

    /* ═════════════════════════ 18A ═════════════════════════ */
    {
      id: 'selfreg2', number: '04', code: '18A', minutes: 30, tone: 'green', art: 'dec10/assets/week2/s-selfreg2.svg',
      title: 'AST: Self-regulation and monitoring Homework follow-up',
      subtitle: 'Six steps to plan, do and check any task',
      outcome: 'You can use Steps 1–3 to analyse a task, and you understand and practise Steps 4–6.',
      activities: [
        {
          id: 's1', short: 'Revision', minutes: 7, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-s1.svg',
          title: 'Revision: Activity 1 Group discussion',
          goal: 'Remember the homework: the first three steps.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Spin. Answer the question that comes up. Everyone speaks once before you spin again.' },
            { type: 'spinner', id: 's1-spin', title: 'Group discussion', reels: [
              { label: 'Question', items: [
                'Why is self-regulation and monitoring important for success in university studies?',
                'What strategies or steps can help you develop self-regulation skills?',
                'What were the three steps you practiced in the homework module last week?',
                'Which of the three steps did you find most helpful? Why?',
                'Which step did you find most challenging? What made it difficult?',
                'What useful tool or technique do you remember that can help you improve these skills?'
              ] }
            ] },
            { type: 'language', title: 'Useful language', tabs: false, groups: [
              { label: 'Self-regulation words', phrases: ['to <b>break</b> a task <b>down</b> into steps', 'to set <b>SMART goals</b>', 'to <b>keep track of</b> my progress', 'to <b>stay on track</b>', 'to <b>meet a deadline</b>'] },
              { label: 'Say it', phrases: ['<b>The step I found most helpful was</b> … because …', '<b>What I struggled with was</b> …', '<b>A technique that works for me is</b> …'] }
            ] },
            { type: 'flip', title: 'Steps 1–3: test your memory', items: [
              { front: 'Step 1', tag: 'analyse', back: '<b>Analyse the Task Requirements.</b> Read the instructions carefully: key words, format, word count / time limit, deadlines.' },
              { front: 'Step 2', tag: 'plan', back: '<b>Set Goals and Plan the Work.</b> Break the task into manageable steps and set SMART goals. Give each step a deadline.' },
              { front: 'Step 3', tag: 'research', back: '<b>Research and Gather Information.</b> Use reliable sources. Keep a record of your sources for accurate citations.' }
            ] }
          ]
        },
        {
          id: 's2', short: 'Apply 1–3', minutes: 8, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-s2.svg',
          title: 'Activity 2: Apply the three steps',
          goal: 'Use Steps 1–3 on a real task.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Choose <b>one</b> task. (Use the others if you have time.)' },
            { type: 'cards', pick: 's2-pick', title: 'Choose one', items: [
              { label: 'Option 1 · essay', text: 'Write an 800–1000-word essay on the topic: ‘To what extent can the adoption of sustainable supply chain practices reduce environmental impact and improve economic performance in the fashion industry?’' },
              { label: 'Option 2 · group presentation', text: 'You and your group members will present on this topic: ‘To what extent can the transition to renewable energy sources reduce carbon emissions and improve energy security in urban areas? What role should governments and private companies play in accelerating this transition?’' },
              { label: 'Option 3 · video presentation', text: 'You are going to complete a video presentation on this topic: ‘How can sustainable farming practices help address food security challenges, and what innovative solutions can governments and agricultural businesses implement to ensure long-term sustainability?’' }
            ] },
            { type: 'do', n: 2, who: 'group', text: 'Discuss: <b>What would you do first if you received this task</b>, based on the 3 steps? Fill in the table together.' },
            { type: 'table', id: 's2-t', title: 'Our plan', columns: ['Step', 'What we would do'], fixed: ['1 · Analyse the task<br>key words, format, length, deadline', '2 · Goals and plan<br>smaller steps + SMART goals + dates', '3 · Research<br>which sources? how will we record them?'] },
            { type: 'toggle', title: 'Example for Option 1', hint: 'Open after you try', blocks: [
              { type: 'model', title: 'Option 1 · Steps 1–3', rows: [
                ['Step 1', 'Key words: “to what extent” (= how much — I need a clear position), “sustainable supply chain practices”, “environmental impact” AND “economic performance” (two parts!), “fashion industry”. Format: essay, 800–1000 words.'],
                ['Step 2', 'Week 1: research (2 hours). Week 2: outline by Monday, first draft by Thursday. Week 3: revise and proofread. SMART goal: “Find four academic sources on fashion supply chains by Friday.”'],
                ['Step 3', 'Library database + Google Scholar. Search: “sustainable supply chain” AND fashion. Keep a list of references (author, year, title, link) from the start.']
              ] }
            ] }
          ]
        },
        {
          id: 's3', short: 'Steps 4–6', minutes: 5, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d4-s3.svg',
          title: 'Steps 4-6',
          goal: 'Learn the last three steps.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d4-six-steps.svg', size: 'wide', alt: 'Six steps on a path up a hill. 1 Analyse the task requirements. 2 Set goals and plan the work. 3 Research and gather information. 4 Create an outline and draft. 5 Revise and improve. 6 Reflect and evaluate. An arrow loops from step 6 back to step 1 for the next task.', caption: 'Six steps for every task. Step 6 feeds your next task.' },
            { type: 'match', id: 's3-m', title: 'Match the step to what you do', left: ['Step 4 · Create an Outline and Draft', 'Step 5 · Revise and Improve', 'Step 6 · Reflect and Evaluate'], right: ['Organise your ideas into a clear structure and write a first draft. Don’t worry about perfection yet.', 'Check your draft for clarity, coherence and structure. Ask peers for feedback or use editing tools.', 'Compare your work with your goals and the task. Keep a log of your mistakes and how to avoid them.'] },
            { type: 'order', id: 's3-order', title: 'All six steps — put them in order', items: ['Analyse the Task Requirements', 'Set Goals and Plan the Work', 'Research and Gather Information', 'Create an Outline and Draft', 'Revise and Improve', 'Reflect and Evaluate'] },
            { type: 'sticky', color: 'green', title: 'Step 6 tool', text: '<p>A <b>mistake log</b>: a list of the mistakes you make again and again — and your strategy to avoid each one. Start yours today.</p>' }
          ]
        },
        {
          id: 's4', short: 'Speed talk', minutes: 10, grouping: 'Pair', art: 'dec10/assets/week2/v/v-d10w2d4-s4.svg',
          title: 'Speed Presentation',
          goal: 'Use Steps 4 and 5: outline, give and improve a 1-minute talk.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: '<b>Step 1 · Make an outline.</b> Spin to get your prompt. Brainstorm ideas together.' },
            { type: 'spinner', id: 's4-spin', title: 'Your speaking prompt', reels: [
              { label: 'Prompt', items: ['Why is it important to use less plastic?', 'How can businesses help protect the environment?', 'Why should we use more renewable energy, like solar or wind power?', 'What small changes can people make to live more sustainably?', 'Why should we try to eat less meat or choose local food?'] }
            ] },
            { type: 'table', id: 's4-t', title: 'Our 1-minute outline', columns: ['Part', 'Our notes (keywords only)'], fixed: ['Introduction<br>a brief introduction to the topic', 'Main Point 1<br>your first key idea', 'Main Point 2<br>your second key idea', 'Conclusion<br>a clear closing statement'] },
            { type: 'language', title: 'Signposts for a 1-minute talk', tabs: false, groups: [
              { label: 'Start', phrases: ['<b>Today I’d like to talk about</b> why …', '<b>Have you ever thought about</b> …?'] },
              { label: 'Middle', phrases: ['<b>The first reason is that</b> …', '<b>Another important point is</b> …', '<b>For example</b>, …'] },
              { label: 'End', phrases: ['<b>To sum up</b>, …', '<b>So next time you</b> … , <b>remember</b> …'] }
            ] },
            { type: 'do', n: 2, who: 'alone', text: '<b>Step 2 · Practise your talk</b> alone, quietly. Organise your ideas clearly. Deliver it smoothly.' },
            { type: 'do', n: 3, who: 'pair', text: '<b>Activity 2 · Revise and improve.</b> Give your 1-minute talk to your partner. Your partner listens and gives short feedback.' },
            { type: 'grid', id: 's4-g', title: 'Feedback for my partner', rows: ['1. Was the talk clear?', '2. Did it follow a logical structure?', '3. Were key points emphasised?'], columns: ['My partner’s talk'], options: ['Yes', 'Mostly', 'Not yet'] },
            { type: 'do', n: 4, who: 'pair', text: 'Revise your talk using the feedback. Rehearse it again for <b>2 minutes</b> with the improvements.' },
            { type: 'fields', fields: [{ id: 's4-change', label: 'One thing I changed after feedback', rows: 2, placeholder: 'My partner said … so I …' }] }
          ]
        },
        {
          id: 's5', short: 'Reflection', minutes: 3, grouping: 'Groups', art: 'dec10/assets/week2/v/v-d10w2d4-s5.svg',
          title: 'Reflection',
          goal: 'Decide how you will plan your next task.',
          blocks: [
            { type: 'talk', title: 'Discuss in groups', prompts: ['Which of the 6 steps did you find most useful?', 'Which of the 6 steps did you find most challenging?', 'What changes would you make to improve your approach in future tasks?'] },
            { type: 'fields', fields: [{ id: 's5-change', label: 'In my next task, I will …', rows: 2, placeholder: 'In my next task, I will set a deadline for each step, and …' }] },
            { type: 'key', title: 'After class', points: ['Continue preparing for the seminar.', 'Continue your research for your group’s seminar topic and the final Interactive Presentation Assessment.'] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['eye contact', 'looking at the people you are talking to', 'Look up every sentence or two and make eye contact.'],
    ['engaging', 'interesting; it keeps the audience listening', 'A personal story makes a talk more engaging.'],
    ['anecdote', 'a short personal story used as an example', 'Ranjit used an anecdote about working after school.'],
    ['constructive feedback', 'comments that help someone improve', 'His classmates gave him constructive feedback.'],
    ['action point', 'one clear thing to do next time', 'Our action point for you is to pause after each main idea.'],
    ['word stress', 'the syllable of a word that is said more strongly', 'en-VI-ron-ment'],
    ['intonation', 'your voice going up and down to add meaning', 'Flat intonation sounds boring.'],
    ['chunking', 'saying words in groups, with a pause before and after', 'Today, / I’d like to talk about / the causes …'],
    ['clarification question', 'a question you ask when you did not understand', 'Could you explain what you mean by “offsets”?'],
    ['probing question', 'a question that asks the speaker to go deeper', 'Why do you think gaming uses so much electricity?'],
    ['thought-provoking', 'it makes people think and discuss, not just say yes or no', 'To what extent should companies be responsible?'],
    ['self-regulation', 'planning, checking and improving your own learning', 'Self-regulation helps you meet deadlines.'],
    ['SMART goal', 'a goal that is Specific, Measurable, Achievable, Relevant and Time-bound', 'Find four sources by Friday.']
  ]
};
