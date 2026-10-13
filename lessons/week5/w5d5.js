/* DEC15 · Week 5, Day 5 — lesson content.
   Teacher’s Book: W5 D5 · 8A Applying the frameworks: Presentations (75) · 9A AST: AI reflection (60) · 10A STAR moment (30).
   Texts: the AI podcast is played by the teacher (no transcript). Clapp et al. (2022) · Mockshell & Ritter (2024) — lessons/week5/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true).
   v2 (A2–B1 version): simpler instructions, sentence starters and games; 10A is one tab ('Part 1 · …', 'Part 2 · …').
   All saved-work ids (blocks, fields, tables) are unchanged.
   v3 (Brief 4): 8A has a language tab e0 'Asking clarification questions' (Part 1 Notice → 2 Clarify → 3 Controlled →
   4 Less controlled → 5 Production); presentations e1 keep the notes table and peer form. 9A: lead-ins, detail quiz,
   note-taking frames for the big question (h4-i2n, h4-i3n, i4t) and a framed 1-minute pair talk. New ids start with h4-. */

window.DEC15_LESSON = {
  id: 'w5d5',
  week: 5, day: 5,
  title: 'Present, reflect and celebrate',
  duration: 'About 3 hours',
  question: 'How effective is your group’s solution to food waste — and what will you take from DEC15 into DEC10?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week5/hero-w5d5.svg',
  imageAlt: 'A small stage with speech bubbles, a laptop with an AI sparkle, confetti and a star badge.',
  journey: 'The last day of DEC15! Your group presents its evaluation of a solution to food waste. You answer questions from classmates. Then you set goals for DEC10 and listen to a podcast about AI and universities. You finish with a STAR moment with your teacher.',
  finish: { title: 'DEC10', text: 'Well done — you have finished DEC15!' },

  sections: [
    /* ───────────────────────── 8A Applying the frameworks: Presentations ───────────────────────── */
    {
      id: 'present', number: '01', code: '8A', minutes: 75,
      tone: 'clay', art: 'group',
      title: 'Applying the frameworks: Presentations',
      subtitle: 'Present your evaluation and answer questions',
      outcome: 'Explain your ideas to your classmates. Answer questions about what you said. Think about your goals and set new ones.',
      activities: [
        {
          id: 'e0', short: 'Clarifying', minutes: 20, grouping: 'Pairs → two groups',
          title: 'Presentations: asking clarification questions',
          goal: 'Ask a clear clarification question about something a speaker said — and answer one.',
          blocks: [
            /* Part 1 · Notice */
            { type: 'model', title: 'Part 1 · Notice: read what a classmate asked a presenter', rows: [
              ['The presenter said', '“Mobile apps help users make more informed <b>decisions</b>.”'],
              ['A classmate asked', '<b>You said</b> apps help users make decisions. <b>Can you specify</b> what kind of decisions?']
            ]},
            { type: 'quiz', id: 'h4-e0n', items: [
              { q: 'What does the classmate want?', options: ['more detail about one idea', 'to disagree with the presenter', 'to change the topic'], answer: 'more detail about one idea', why: 'They repeat one idea (<i>You said…</i>) and ask for more detail. This is a <b>clarification question</b>.' }
            ]},

            /* Part 2 · Clarify */
            { type: 'key', title: 'Part 2 · Clarify: what is a clarification question?', points: [
              'It asks a speaker to <b>explain one thing more clearly</b>: a word, a detail, an example or a source.',
              'Why? It shows you <b>listened</b>, and it helps everyone <b>understand</b>. In DEC10 every presentation ends with questions like this.',
              'How? <b>Two steps:</b> 1) repeat the idea (<i>You said…</i>) 2) ask about one thing.',
              'Later, in DEC10, you will also ask <b>probing questions</b> (= questions that go deeper).'
            ]},
            { type: 'model', title: 'Step 2: what can you ask about? (everyday examples)', rows: [
              ['A detail<br><b>Can you specify…?</b>', 'You said the café is cheap. <b>Can you specify</b> how much a coffee costs?'],
              ['A word<br><b>Could you explain what you mean by…?</b>', 'You said you sleep badly. <b>Could you explain what you mean by</b> “badly”?'],
              ['An example<br><b>Could you give an example of…?</b>', 'You said your city has good food. <b>Could you give an example of</b> a typical dish?'],
              ['Check you understood<br><b>When you said…, did you mean…?</b>', '<b>When you said</b> you study a lot, <b>did you mean</b> every day?'],
              ['The source<br><b>Which source said that?</b>', 'You said phones hurt our sleep. <b>Which source said that?</b>']
            ]},
            { type: 'language', title: 'When someone asks YOU a clarification question', tabs: false, groups: [
              { label: 'Answering', phrases: ['Sure. What I meant was…', 'For example, …', 'According to… (2024), …', 'Good question. I’m not completely sure, but I think…'] }
            ]},
            { type: 'tip', text: '<b>Two common mistakes.</b> 1) Word order: <i>Could you explain what <s>do you mean</s></i> → <i>Could you explain what <b>you mean</b>?</i> 2) Only saying “I don’t understand.” Say <b>which idea</b> first: <i>You said…</i>' },

            /* Part 3 · Controlled practice */
            { type: 'cloze', id: 'h4-e0c', list: true, title: 'Part 3 · Controlled practice: choose the correct word', options: [
                ['mean', 'means', 'meaning'],
                ['specify', 'specific', 'speak'],
                ['example', 'explain', 'exactly'],
                ['you sleep', 'do you sleep', 'sleep you'],
                ['mean', 'meant', 'meaning'],
                ['said', 'asked', 'spoke'],
                ['the bus is', 'is the bus', 'the bus it is']
              ],
              answers: ['mean', 'specify', 'example', 'you sleep', 'mean', 'said', 'the bus is'],
              why: [
                'Could you explain what you <b>mean</b> by…? (you + mean)',
                'Can you <b>specify</b>…? = Can you say exactly…? <i>Specify</i> is the verb.',
                'Could you give an <b>example</b> of…? (a noun after <i>an</i>)',
                'After <i>Can you specify…</i> use normal word order: how many hours <b>you sleep</b>.',
                'did you + base verb: did you <b>mean</b>…?',
                'Repeat the idea first: You <b>said</b> (that)…',
                'After <i>Could you explain…</i> use normal word order: why <b>the bus is</b> late.'
              ],
              text: 'Could you explain what you {{1}} by “healthy”?\nYou said the test was hard. Can you {{2}} which part was hard?\nCould you give an {{3}} of a cheap meal?\nCan you specify how many hours {{4}}?\nWhen you said “a lot”, did you {{5}} every day?\nYou {{6}} that phones help students. Which source said that?\nCould you explain why {{7}} late?' },

            /* Part 4 · Less controlled practice */
            { type: 'chat', title: 'Part 4 · Less controlled practice: first, read the model', right: 'Student B', lines: [
              ['Student A', '“The solution is moderately effective.”'],
              ['Student B', '<mark>You said</mark> the solution is moderately effective. <mark>Could you explain what you mean by</mark> “moderately”?'],
              ['Student A', '<mark>Sure. What I meant was</mark> it helps families in cities, but it does not help people without a phone.']
            ]},
            { type: 'spinner', id: 'e1sp', title: 'Now you: spin, ask, answer', text: '<b>Student A</b> spins and reads the statement. <b>Student B</b> repeats it (<i>You said…</i>) and asks with the starter. Student A answers. Swap after each spin.', reels: [
              { label: 'A presenter says…', start: 'Spin!', items: ['“Food banks improve access.”', '“The app is not very accessible.”', '“Upcycled food reduces waste.”', '“Some groups cannot use this solution.”', '“The solution is moderately effective.”', '“The evidence is mixed.”'] },
              { label: 'Ask with…', start: '…', items: ['Can you specify…?', 'Could you explain what you mean by…?', 'Could you give an example of…?', 'When you said…, did you mean…?', 'Which source said that?'] }
            ]},

            /* Part 5 · Production */
            { type: 'steps', title: 'Part 5 · Production: practice round with another group (8 minutes)', items: [
              { who: 'group', text: 'Sit with another group.' },
              { who: 'group', text: 'Speaker 1 gives a <b>1-minute summary</b>: your solution, your pillar(s), your overall evaluation.' },
              { who: 'group', text: 'Each listener asks <b>one clarification question</b>. Use a different starter each time.' },
              { who: 'group', text: 'Your group answers: <i>What I meant was… / For example…</i>' },
              { who: 'group', text: 'Swap: the other group gives its summary.' }
            ]},
            { type: 'model', title: 'Model practice round', rows: [
              ['1-minute summary', '“Our solution is food-sharing apps. We looked at the pillars of <b>access</b> and <b>agency</b>. Overall, we think the apps are moderately effective.”'],
              ['Clarification question', '“You said you looked at agency. Could you explain what you mean by agency here?”'],
              ['Answer', '“Sure. What I meant was that people can choose what food they take. For example, …”']
            ]},
            { type: 'fields', title: 'After the practice round', fields: [
              { id: 'h4-e0f1', label: 'The questions the other group asked us — which part was not clear?', placeholder: 'They asked what we mean by… / They wanted an example of…', rows: 2 },
              { id: 'h4-e0f2', label: 'What we will explain more clearly in our presentation', placeholder: 'We will add one example of… / We will say which source…', rows: 2 }
            ]},
            { type: 'checklist', id: 'h4-e0k', title: 'Check your questions: did you…', items: [
              'repeat the idea first (You said…)?',
              'ask about ONE thing: a detail, a word, an example or a source?',
              'use normal word order (Could you explain what you mean…)?'
            ]}
          ],
          answers: { items: [
            ['Part 1', 'The classmate wants <b>more detail about one idea</b> (which decisions?). That is a clarification question.'],
            ['Part 3', '1 mean · 2 specify · 3 example · 4 you sleep · 5 mean · 6 said · 7 the bus is']
          ]}
        },
        {
          id: 'e1', short: 'Presentations', minutes: 40, grouping: 'Groups → class',
          title: 'Presentations',
          goal: 'Give your 5–6 minute presentation. Ask each group one clarification question and give feedback.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Get ready', items: [
              { who: 'group', text: 'Look at your notes again for a few minutes.' },
              { who: 'group', text: 'Each group presents for <b>5–6 minutes</b>. Everyone speaks.' },
              { who: 'class', text: 'After each talk, there are <b>3–4 minutes</b> for questions and feedback.' },
              { who: 'class', text: 'Ask each group at least <b>one clarification question</b>.' }
            ]},
            { type: 'figure', src: 'assets/week5/presentation-roles.svg', alt: 'Three speakers share the presentation: speaker 1 introduces the solution, the pillar(s) and one question; speaker 2 discusses two questions; speaker 3 discusses one question and gives the overall evaluation; then classmates ask follow-up clarification questions.', caption: 'Present — then answer follow-up questions', size: 'wide' },
            { type: 'language', title: 'Your question starters (from the last tab)', tabs: false, groups: [
              { label: 'Ask', phrases: ['You said… . Can you specify…?', 'Could you explain what you mean by…?', 'Could you give an example of…?', 'Which source said that?'] },
              { label: 'Answer', phrases: ['Sure. What I meant was…', 'For example, …', 'According to…, …'] }
            ]},
            { type: 'teacher', ref: 'w5d5-t1' },

            { type: 'table', id: 'e1t', title: 'Part 2 · During the presentations: my notes', columns: ['Group', 'Solution and pillar(s)', 'Their overall evaluation', 'My clarification question'], rows: 4, extraRows: true },
            { type: 'tip', text: 'Short notes are fine! Write key words, not sentences. Write your question <b>while</b> they speak: <i>You said… . Can you specify…?</i>' },
            { type: 'form', id: 'e1f', title: 'Peer feedback for the presenting group', intro: 'Your teacher tells you which group to give feedback to. Choose Yes, Mostly or Needs work. Add a comment.', observe: 'Which group presented?', cols: ['Comments'], sections: [
              { label: 'The presentation', items: [
                'Was the information clear?',
                'Did they explain which pillar(s) they used and why?',
                'Did they use evidence from the texts or sources?',
                'Did they say how effective the solution is?',
                'Did every group member speak and look at the audience?'
              ]}
            ], fields: [{ id: 'e1f-q', label: 'One clarification question I asked or would ask', rows: 2, placeholder: 'You said that… . Can you specify…?' }],
              send: true, sendLabel: 'Send your feedback to the presenters' }
          ]
        },
        {
          id: 'e2', short: 'My goals', minutes: 15, grouping: 'Alone',
          title: 'Self-Reflection on DEC15 Goals',
          goal: 'Look back at your DEC15 goals. Write three new, clear goals for DEC10.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: '<b>5 min:</b> open your Self-Reflection Forms and Writing Feedback Tools. Read the feedback again.' },
              { who: 'alone', text: '<b>5 min:</b> complete table 1 about your DEC15 goals.' },
              { who: 'alone', text: '<b>5 min:</b> read the model. Write three new goals in table 2.' }
            ]},
            { type: 'tip', text: 'In DEC15 you got feedback from <b>classmates, teachers and AI</b>. Use it to choose your goals.' },
            { type: 'cards', title: 'Your goals may be about…', items: [
              { icon: 'chat', label: 'Discussion skills', text: 'e.g. responding to others’ ideas' },
              { icon: 'search', label: 'Research skills', text: 'e.g. judging if an article is good' },
              { icon: 'pen', label: 'Writing skills', text: 'e.g. linking ideas better' },
              { icon: 'users', label: 'Group work skills', text: 'e.g. solving problems in the group' }
            ]},
            { type: 'scale', id: 'e2sc', title: 'Quick self-check', statement: 'I met my DEC15 goals.', ends: ['Not yet', 'Completely'], mid: 'Partly' },
            { type: 'table', id: 'e2t', title: '1 · My DEC15 goals', columns: ['My goal', 'Progress: how well did I meet it?', 'Challenges: what made it difficult?'], rows: 3, extraRows: true },
            { type: 'model', title: 'Model: one student’s goal — before and after', rows: [
              ['DEC15 goal', 'Respond to other people’s ideas in discussions.'],
              ['Progress', 'I have improved. For example, in the Week 4 negotiation I said “Building on what you said…” twice.'],
              ['Challenge', 'I still find it hard to answer quickly when people speak fast.'],
              ['New DEC10 speaking goal', 'In DEC10, I want to ask one follow-up question in every discussion. To do this, I will write two question starters before each class.']
            ], note: 'A good goal is <b>small</b> (one skill) and says <b>how</b> you will practise.' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Progress', phrases: ['I have improved my… . For example, …', 'I still find… difficult because…'] },
              { label: 'New goals', phrases: ['In DEC10, I want to…', 'To do this, I will… every week.', 'I will ask for feedback on…'] }
            ]},
            { type: 'table', id: 'e2g', title: '2 · New goals for DEC10', columns: ['', 'My goals'], fixed: [
              'Writing goals',
              'Speaking goals',
              'General goals for DEC10<br><small>e.g. discussion, research, group work</small>'
            ], send: true, sendLabel: 'Share your goals with your teacher (optional)', sendHint: 'Only the person you choose will see it, in “Shared with me”.' },
            { type: 'checklist', id: 'h4-e2k', title: 'Check your new goals: does each one…', items: [
              'name ONE skill (not “improve my English”)?',
              'say how you will practise (To do this, I will…)?',
              'connect to feedback you got in DEC15?'
            ]},
            { type: 'teacher', ref: 'w5d5-t2' }
          ]
        }
      ]
    },

    /* ───────────────────────── 9A AST: AI reflection ───────────────────────── */
    {
      id: 'ai', number: '02', code: '9A', minutes: 60,
      tone: 'amber', art: 'ai',
      title: 'AST: AI reflection',
      subtitle: 'Can university and AI coexist? · a podcast',
      outcome: 'Think about the AI skills you learned in DEC15. Listen to a podcast for details. Discuss the good points and the problems of AI in education.',
      activities: [
        {
          id: 'i1', short: 'Warmer', minutes: 15, grouping: 'Groups of 3–4',
          title: 'Warmer',
          goal: 'Talk about five questions on AI in your studies and your future.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Wall-crawl: your group starts at one question.' },
              { who: 'group', text: 'Discuss it for <b>3 minutes</b>.' },
              { who: 'group', text: 'When time is up, move <b>clockwise</b> (→) to the next question.' },
              { who: 'group', text: 'Continue until you have discussed every question.' }
            ]},
            { type: 'cards', title: 'The questions', items: [
              { icon: 'bulb', label: 'Start', text: 'Which AI skill from DEC15 is most useful for you? (writing prompts · AI feedback · checking AI texts) Why?' },
              { icon: 'alert', label: '1', text: 'Is there still <b>bias</b> (= an unfair view) in AI texts? Give an example.' },
              { icon: 'book', label: '2', text: 'How will you use AI at university? What good points and problems do you expect?' },
              { icon: 'briefcase', label: '3', text: 'How will AI change your future job? How might you use it at work?' },
              { icon: 'lock', label: '4', text: 'Should there be limits on AI at university and at work? Why? Who should set them?' }
            ]},
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Giving your view', phrases: ['For me, the most useful skill is… because…', 'I plan to use AI to…', 'One problem might be…', 'I think there should be limits on… because…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'i1-2', label: 'Question 2 — my plan for using AI at university (you will use this again in Part 2)', placeholder: 'I plan to use AI to… · Good points: … · Problems: …', rows: 3 }
            ]},
            { type: 'scale', id: 'i1sc', title: 'Quick vote', statement: 'AI will help my university studies more than it harms them.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Not sure' },
            { type: 'teacher', ref: 'w5d5-t3' }
          ]
        },
        {
          id: 'i2', short: 'Part 1', minutes: 15, grouping: 'Alone → pair',
          title: 'Listening Part 1',
          goal: 'Learn eight expressions. Then listen for the host’s two questions and the answers.',
          blocks: [
            { type: 'talk', title: 'Lead-in (2 minutes)', prompts: ['ChatGPT arrived in late 2022. How did your school or teachers react? Were they worried, excited or relaxed?'] },
            { type: 'cards', title: 'Activity 1 · Useful words: read the sentences from the podcast', numbered: true, items: [
              { text: 'In late 2022 the AI program ChatGPT was released and brought with it a complete <b>upheaval</b> to the modern university experience.' },
              { text: 'As institutions <b>grappled with</b> issues such as potential plagiarism, students wasted no time putting this new tool to work.' },
              { text: 'Is true <b>coexistence</b> between AI and universities actually possible?' },
              { text: 'Since ChatGPT sort of <b>burst onto the scene</b>, how have attitudes changed in that time?' },
              { text: 'Everyone was <b>on the back foot</b>, not knowing how to respond to the new technology.' },
              { text: 'Now that we’ve had a little bit of time <b>for the dust to</b> kind of <b>settle</b>, it is being more cautiously embraced.' },
              { text: 'AI is here, whether we like it or not, let’s try and <b>bring it out of the shadows</b> a bit.' },
              { text: 'It’s with <b>attribution</b>. So, if you have used AI say for research purposes, you would be acknowledging that.' }
            ]},
            { type: 'sort', id: 'i2s', single: true, title: 'Match each bold expression with its definition', hint: '<b>Drag</b> each expression to its definition — or tap an expression, then tap a definition.', buckets: [
              { label: 'A sudden, major change that causes disruption.' },
              { label: 'Struggled to deal with or understand something difficult.' },
              { label: 'The state of existing together, especially peacefully.' },
              { label: 'Suddenly became popular or well-known.' },
              { label: 'In a defensive or disadvantaged position.' },
              { label: 'Waiting for a chaotic situation to become clear and calm.' },
              { label: 'Make something more visible or acceptable.' },
              { label: 'The act of giving credit to a source of information or an idea.' }
            ], items: [
              { text: 'upheaval', answer: 0 },
              { text: 'grappled with', answer: 1 },
              { text: 'coexistence', answer: 2 },
              { text: 'burst onto the scene', answer: 3 },
              { text: 'on the back foot', answer: 4 },
              { text: 'for the dust to settle', answer: 5 },
              { text: 'bring it out of the shadows', answer: 6 },
              { text: 'attribution', answer: 7 }
            ]},
            { type: 'tip', text: '<b>Before you listen:</b> the host asks two questions. Both start with <b>“How…?”</b> Listen for them.' },
            { type: 'listening', source: 'Podcast (your teacher plays it)', title: 'Can university and AI coexist?', videoId: '', clip: 'Part 1 · 2:11–5:13', transcripts: [] },
            { type: 'fields', title: 'Activity 2 · Listen and take notes', fields: [
              { id: 'i2-1', label: '1. What questions does the host ask?', placeholder: 'How have…? · How are universities…?', rows: 3 },
              { id: 'i2-2', label: '2. Listen again if you need to. Notes on the answers', placeholder: 'Attitudes: panic → … · Assignments: …', rows: 4 }
            ]},
            { type: 'quiz', id: 'h4-i2q', title: 'Check the details', items: [
              { q: 'When ChatGPT arrived, how did many universities react at first?', options: ['They panicked.', 'They were excited.', 'They did not notice.'], answer: 'They panicked.', why: 'Everyone was “on the back foot”: they did not know how to respond.' },
              { q: 'How do many universities see AI now?', options: ['They accept it carefully.', 'They ban it completely.', 'They use it in every exam.'], answer: 'They accept it carefully.', why: 'AI is now “cautiously embraced”. It is here to stay.' },
              { q: 'Some universities allow AI in assignments if students…', options: ['say that they used it', 'pay for the tool', 'use it only at home'], answer: 'say that they used it', why: 'This is <b>attribution</b> — like a citation.' },
              { q: 'In which subjects is this common?', options: ['engineering and coding', 'art and music', 'law and medicine'], answer: 'engineering and coding', why: 'The podcast gives engineering and coding as examples.' }
            ]},
            { type: 'table', id: 'h4-i2n', title: 'My notes for the big question: “AI will help my university studies more than it harms them.”', columns: ['Idea from Part 1', 'Detail or example', 'Helps or harms students?', 'For or against the statement?'], rows: 2, extraRows: true },
            { type: 'tip', text: 'Keep these notes. You will add to them in Parts 2 and 3, and use them for a short talk at the end.' },
            { type: 'talk', title: 'Activity 3 · Critical thinking (groups, 4 minutes)', prompts: [
              'How have your attitudes toward AI in education evolved over time?',
              'Do you agree with the shift from fear and restriction to cautious acceptance? Why or why not?',
              'The podcast mentions that some universities allow AI use with proper attribution, comparing it to using a calculator. Do you think this is a fair comparison?',
              'What ethical concerns (= questions of right and wrong) might arise from integrating AI into academic work?'
            ]},
            { type: 'language', tabs: false, groups: [
              { label: 'Sentence starters', phrases: ['At first I thought… . Now I think…', 'I agree / don’t agree because…', 'It is (not) like a calculator because…'] }
            ]},
            { type: 'teacher', ref: 'w5d5-t4' }
          ],
          answers: { items: [
            ['The host’s questions', '1. How have attitudes changed since AI became widely available?<br>2. How are universities regulating or integrating AI use in assignments?'],
            ['Answer 1', 'First people panicked. Now there is careful acceptance. Universities see that AI is here to stay, so they include it in education.'],
            ['Answer 2', 'Some universities allow AI in assignments if you say you used it (like a citation). This is common in engineering and coding. They want students to be open and responsible.']
          ]}
        },
        {
          id: 'i3', short: 'Part 2', minutes: 15, grouping: 'Alone → group',
          title: 'Listening Part 2',
          goal: 'Learn six phrases. Then fill the gaps with the words you hear about how students use AI.',
          blocks: [
            { type: 'talk', title: 'Lead-in (1 minute)', prompts: ['How do university students use AI to study? Guess three ways. Then listen and check.'] },
            { type: 'sort', id: 'i3s', single: true, title: 'Now match each phrase with its definition', hint: '<b>Drag</b> each phrase to its definition — or tap a phrase, then tap a definition.', buckets: [
              { label: 'Something has been released that cannot be undone, often referring to a major change.' },
              { label: 'Saying something without preparation or deep thinking.' },
              { label: 'To strengthen or reinforce knowledge or learning.' },
              { label: 'A comparison used to explain a concept by relating it to something familiar.' },
              { label: 'Adjusting teaching methods or materials to fit a student’s individual needs.' },
              { label: 'Organising thoughts or tasks into separate categories.' }
            ], items: [
              { text: 'the genie is out of the bottle', answer: 0 },
              { text: 'off the top of my head', answer: 1 },
              { text: 'consolidate', answer: 2 },
              { text: 'analogy', answer: 3 },
              { text: 'tailoring learning', answer: 4 },
              { text: 'compartmentalizing', answer: 5 }
            ]},
            { type: 'cloze', id: 'i3c', list: true, title: 'Now use the phrases: choose the correct phrase for each gap', options: ['genie is out of the bottle', 'off the top of my head', 'consolidate', 'analogy', 'tailoring learning', 'compartmentalizing'],
              answers: ['genie is out of the bottle', 'off the top of my head', 'consolidate', 'analogy', 'tailoring learning', 'compartmentalizing'],
              text: 'Now that AI is widely used in education, the {{1}} and universities must adapt to its presence.\nI can’t remember the exact statistics {{2}}, but I know that AI adoption in higher education has significantly increased.\nUniversities are working to {{3}} their policies on AI usage to ensure consistency across different faculties.\nSome educators use the {{4}} of a calculator to explain how AI can be a helpful tool rather than a replacement for learning.\nAI has the potential to improve education by {{5}} to meet individual students’ needs and preferences.\nInstead of {{6}} knowledge into separate subjects, AI can help create more interdisciplinary approaches to learning.' },
            { type: 'tip', text: '<b>Before you listen:</b> read the gaps below first. Is the missing word a noun, a verb or an adjective? Three words in the list are extra.' },
            { type: 'listening', source: 'Podcast (your teacher plays it)', title: 'Can university and AI coexist?', videoId: '', clip: 'Part 2 · 7:41–10:36 (you might hear it twice)', transcripts: [] },
            { type: 'cloze', id: 'i3g', title: 'Activity 2 · How are students using AI? Fill the gaps with the words you hear', options: ['learning outcomes', 'information', 'incorrect', 'explain', 'unique', 'analogies', 'proofreading', 'tailored', 'accessibility', 'summaries', 'translation', 'creativity'],
              answers: ['learning outcomes', 'information', 'incorrect', 'explain', 'unique', 'analogies', 'proofreading', 'tailored', 'accessibility'],
              text: '<b>Jack Quinlan:</b> Before lectures he inputs {{1}} into AI tools, which gives him more {{2}} walking into the lecture. Even if some of the content is {{3}}, he can replace it in the lecture. While studying he uses AI to {{4}} lecture content in different and {{5}} ways, often receiving useful {{6}} that enhance his understanding.<br><br><b>Caitlin Cassidy</b> also explains ways students are using AI in their studies. They commonly use it for {{7}} assignments to catch grammar mistakes or ideas missed. AI also supports more {{8}} learning, similar to how apps like Duolingo adapt to users. Additionally, AI improves {{9}} for students with different learning needs — for example, by offering text-to-speech or note-taking support.' },
            { type: 'table', id: 'h4-i3n', title: 'My notes: how students use AI (for the big question)', columns: ['Way students use AI', 'Who said it? (Jack / Caitlin)', 'Helps or harms students?', 'Would I use it? Why?'], rows: 3, extraRows: true },
            { type: 'talk', title: 'Activity 3 · Critical thinking', prompts: [
              'Look at your answer to warmer question 2 (your plan for using AI). Are Jack’s and Caitlin’s ideas similar to yours or different? How?'
            ]},
            { type: 'language', tabs: false, groups: [
              { label: 'Sentence starters', phrases: ['Like Jack, I also use AI to…', 'Unlike Caitlin, I…', 'I didn’t think of using AI for… . That’s a good idea.'] }
            ]},
            { type: 'teacher', ref: 'w5d5-t5' }
          ]
        },
        {
          id: 'i4', short: 'Part 3', minutes: 15, grouping: 'Pairs',
          title: 'Listening Part 3',
          goal: 'Take notes on five worries about AI in education. Rank them and give your view in a 1-minute talk.',
          blocks: [
            { type: 'flip', title: 'Activity 1 · Useful words: check the bold words', hint: 'Read the sentence. Guess the meaning. Then tap the card.', items: [
              { front: 'There are plenty of reasons to be cautious about <b>embracing</b> AI wholeheartedly.', back: '<b>embrace</b> = accept a change happily.' },
              { front: 'One of the <b>chief issues</b> there being plagiarism, which is still a problem.', back: '<b>chief issue</b> = the most important problem.' },
              { front: 'There are also <b>inherent biases</b> of the search engines.', back: '<b>inherent biases</b> = unfair views that are built into a system or tool.' },
              { front: 'There are arguments that it’s sort of <b>stunting</b> creativity and critical thought.', back: '<b>stunt</b> = stop something from growing properly.' },
              { front: 'There is also still a lack of <b>equity</b>.', back: '<b>equity</b> = fairness; everyone gets what they need.' },
              { front: 'We already have quite a big <b>digital divide</b> in Australia.', back: '<b>digital divide</b> = the gap between people who can and cannot use digital technology.' }
            ]},
            { type: 'talk', title: 'Activity 2 · Before listening', prompts: ['What do these mean? <b>digital literacy</b> · <b>digital divide</b> · <b>contract cheating</b>'] },
            { type: 'tip', text: '<b>Hint:</b> literacy = being able to read and write. Contract = an agreement, often for money.' },
            { type: 'listening', source: 'Podcast (your teacher plays it)', title: 'Can university and AI coexist?', videoId: '', clip: 'Part 3 · 15:04–19:41', transcripts: [] },
            { type: 'table', id: 'i4t', title: 'Activity 3 · Listen and take notes: five concerns (= worries)', columns: ['Concern', 'Details or examples'], rows: 5 },
            { type: 'tip', text: 'These five concerns are the <b>“harms”</b> for the big question. Keep them with your notes from Parts 1 and 2.' },
            { type: 'table', id: 'i4r', title: 'Activity 4 · Critical thinking: rank the concerns', columns: ['Rank', 'Concern', 'Why?'], fixed: ['1 · most important', '2', '3', '4', '5 · least important'] },
            { type: 'steps', title: 'Your view: pair talk (1 minute each)', items: [
              { who: 'pair', text: 'Question: <b>To what extent do you agree?</b> “AI will help my university studies more than it harms them.”' },
              { who: 'alone', text: 'Plan in 1 minute: your position → one benefit (Part 1 or 2) → your top concern (Part 3) → conclusion.' },
              { who: 'pair', text: 'Speak for 1 minute. Your partner ticks the checklist. Then swap.' },
              { who: 'pair', text: 'Compare your rankings. There is no single correct order!' }
            ]},
            { type: 'model', title: 'Model answer', text: '“Overall, I <b>partly agree</b>. One benefit is that AI can explain lectures in new ways. For example, Jack says AI gives him useful analogies. However, for me the most serious concern is <b>plagiarism</b>, because universities find it hard to check AI-written work. So, I think AI helps if we use it carefully and say that we used it.”' },
            { type: 'language', title: 'Frame', tabs: false, groups: [
              { label: 'Position', phrases: ['Overall, I (partly) agree / disagree that…', 'For me, the most serious concern is… because…'] },
              { label: 'Podcast + conclusion', phrases: ['For example, Jack / Caitlin says…', 'However, the podcast also mentions…', 'So, I think…', 'I put… last because…'] }
            ]},
            { type: 'checklist', id: 'h4-i4k', title: 'Partner check: did your partner…', items: [
              'give a clear position in the first sentence?',
              'use one benefit AND one concern from the podcast?',
              'finish with a conclusion (So, I think…)?'
            ]},
            { type: 'scale', id: 'h4-i4sc', title: 'Vote again: has your view changed since the warmer?', statement: 'AI will help my university studies more than it harms them.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Not sure' },
            { type: 'teacher', ref: 'w5d5-t6' }
          ],
          answers: { items: [
            ['Before listening', '<b>Digital literacy</b>: the skills to find, use, check and create information with digital technology. <b>Digital divide</b>: the gap between people who can and cannot use digital technology. <b>Contract cheating</b>: paying (or asking) someone else to do your assessment for you.'],
            ['Five concerns', '<img src="assets/week5/ai-concerns.svg" alt="Five concerns about AI in education: plagiarism and academic integrity, bias in AI, stunting creativity and critical thinking, equity and the digital divide, and environmental impact.">'],
            ['1 · Plagiarism and academic integrity', 'Universities find it hard to detect AI-written work. Tools like Turnitin have limits.'],
            ['2 · Bias in AI', 'AI learns unfair views from the internet and society. This can make search results and answers unfair.'],
            ['3 · Stunting creativity and critical thinking', 'Students may use AI too much and not develop their own ideas.'],
            ['4 · Equity and the digital divide', 'Not all students can use AI tools equally. Some lack digital skills, and some tools cost money.'],
            ['5 · Environmental impact', 'An AI question uses much more electricity than a normal Google search. This increases carbon emissions.']
          ]}
        }
      ]
    },

    /* ───────────────────────── 10A STAR moment ───────────────────────── */
    {
      id: 'star', number: '03', code: '10A', minutes: 30,
      tone: 'green', art: 'feedback',
      title: 'STAR moment',
      subtitle: 'Your questions, your needs — and a celebration',
      outcome: 'Work with your teacher on the things you still need to learn.',
      activities: [
        {
          id: 's1', short: 'STAR + celebrate', minutes: 30, grouping: 'Alone → class',
          title: 'Teachable STAR moment + Celebrate!',
          goal: 'Think about what you still need to learn. Ask your teacher. Then celebrate!',
          blocks: [
            { type: 'key', title: 'Part 1 · Teachable STAR moment', points: [
              'Your teacher answers <b>your questions</b>.',
              'Your teacher helps with <b>your</b> language needs.',
              'Think about what is still difficult for you. Then tell your teacher. Your feedback matters!'
            ]},
            { type: 'fields', title: 'Before you talk to your teacher', fields: [
              { id: 's1-1', label: 'What is still difficult for me? (e.g. a language point, a skill, a type of task)', placeholder: 'I still find it hard to…', rows: 3 },
              { id: 's1-2', label: 'What would I like to practise again before DEC10?', placeholder: 'Paraphrasing · hedging · asking follow-up questions…', rows: 2 },
              { id: 's1-3', label: 'My questions for my teacher', placeholder: '1. …\n2. …', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w5d5-t7' },

            { type: 'cards', title: 'Part 2 · Well done — you finished DEC15! Look what you can do now', items: [
              { icon: 'pen', label: 'Write', text: 'You planned, wrote and improved essays with feedback from classmates, teachers and AI.' },
              { icon: 'chat', label: 'Discuss', text: 'You summarised research, negotiated and built on other people’s ideas.' },
              { icon: 'search', label: 'Think critically', text: 'You judged sources, solutions and AI texts.' },
              { icon: 'users', label: 'Work together', text: 'You researched and presented as a team.' }
            ]},
            { type: 'quiz', id: 's1q', title: 'Fun final quiz: DEC15 in three questions', items: [
              { q: 'How many pillars of food security did we use this week?', options: ['Four', 'Six', 'Ten'], answer: 'Six', why: 'Availability, access, utilization, stability, agency and sustainability.' },
              { q: 'A clarification question asks a speaker to…', options: ['explain something more clearly', 'stop talking', 'change the topic'], answer: 'explain something more clearly', why: 'For example: “Can you specify…?”' },
              { q: 'When you use AI for university work, you should…', options: ['hide it', 'say that you used it', 'never check it'], answer: 'say that you used it', why: 'This is called attribution — giving credit.' }
            ]},
            { type: 'talk', prompts: ['What are you most proud of from DEC15?', 'Thank a classmate who helped you in this course. Tell them why.'] },
            { type: 'tip', text: '<b>Congratulations!</b> Good luck in DEC10 — you are ready for it.' }
          ]
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'My AI plan', minutes: 15, grouping: 'Alone', category: 'Extra reflection',
      title: 'My plan for using AI at university',
      goal: 'Write a short plan for using AI in a responsible way.',
      blocks: [
        { type: 'model', title: 'Model plan', rows: [
          ['How I will use AI', 'Before lectures, I will ask AI to explain the key words. After lectures, I will ask it for practice questions.'],
          ['Attribution', 'At the end of each assignment I will write which AI tool I used and what for.'],
          ['One concern', 'To keep my own critical thinking strong, I will write my first draft without AI.']
        ]},
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'How will I use AI to help my studies? How will I say that I used it (= attribution)?', placeholder: 'Before lectures I will… · I will say I used AI by…', rows: 4 },
          { id: 'x1-2', label: 'Which concern from the podcast will I be careful about? What will I do?', placeholder: 'To keep my own critical thinking strong, I will…', rows: 3 }
        ]}
      ]
    }
  ],

  glossary: [
    ['clarification question', 'A question that asks a speaker to explain something more clearly.', 'Can you specify what kind of decisions are being made?'],
    ['specify', 'To say something exactly, with details.', 'Can you specify what kind of decisions?'],
    ['probing question', 'A question that asks a speaker to go deeper into an idea.', 'In DEC10 you will also ask probing questions.'],
    ['upheaval', 'A sudden, major change that causes disruption.', 'ChatGPT brought an upheaval to university life.'],
    ['grapple with', 'To struggle to deal with or understand something difficult.', 'Institutions grappled with plagiarism.'],
    ['coexistence', 'Existing together, especially peacefully.', 'Is coexistence between AI and universities possible?'],
    ['burst onto the scene', 'To suddenly become popular or well-known.', 'ChatGPT burst onto the scene in 2022.'],
    ['on the back foot', 'In a defensive or disadvantaged position.', 'Everyone was on the back foot.'],
    ['the dust settles', 'A chaotic situation becomes clear and calm.', 'Now that the dust has settled, AI is cautiously embraced.'],
    ['bring out of the shadows', 'Make something more visible or acceptable.', 'Let’s bring AI out of the shadows.'],
    ['attribution', 'Giving credit to a source of information or an idea.', 'AI use is allowed with attribution.'],
    ['the genie is out of the bottle', 'Something has happened that cannot be undone.', 'With AI, the genie is out of the bottle.'],
    ['off the top of my head', 'Without preparation or checking.', 'I can’t remember the number off the top of my head.'],
    ['consolidate', 'To strengthen or reinforce.', 'Universities are consolidating their AI policies.'],
    ['analogy', 'A comparison that explains something by relating it to something familiar.', 'AI is like a calculator — a useful analogy.'],
    ['tailor', 'To adjust something to fit a person’s needs.', 'AI can tailor learning to each student.'],
    ['compartmentalise', 'To organise things into separate categories.', 'Don’t compartmentalise knowledge into subjects.'],
    ['embrace', 'To accept a change willingly and enthusiastically.', 'Be cautious about embracing AI wholeheartedly.'],
    ['chief issue', 'The most important issue.', 'Plagiarism is one chief issue.'],
    ['inherent bias', 'A built-in unfair perspective in a system or tool.', 'Search engines have inherent biases.'],
    ['stunt', 'To stop something from growing or developing properly.', 'AI may stunt creativity.'],
    ['equity', 'Fairness and impartiality.', 'There is still a lack of equity in AI access.'],
    ['digital divide', 'The gap between people who can and cannot access digital technologies.', 'Australia has a big digital divide.'],
    ['contract cheating', 'Getting someone else to complete your assessment for you.', 'Contract cheating breaks academic integrity.']
  ]
};
