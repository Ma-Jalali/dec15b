/* DEC15 · Week 2, Day 5 — lesson content.
   Edit text here. The app (js/app.js) turns each block into a component.

   Block types (in the order they appear on the page):
     key        KEY POINT — the one idea students must remember (max. one or two per activity)
     steps      What to do. Each step has who: alone | pair | group | class
     talk       Speaking prompts for pairs / groups
     language   Language bank: phrases grouped by function
     model      A worked example / model answer students study
     cards      A set of short cards (scenarios, outcomes, prompts)
     quiz       Items with options; checked with reasons
     fields     Writing boxes (saved on the device)
     table      Editable table (saved)
     choose     Choose one option (saved)
     question   The protected essay question with highlighting tools
     passage    A markable paragraph for close reading
     listening  The listening player and transcript buttons
     plan       The essay outline (Teacher's Book template)
     checklist  Tick boxes (saved)
     sources    Buttons that open course readings
     tip        A small hint
     teacher    Teacher note (shown only in Teacher view)
   answers: suggested answers, released after an attempt (or always in Teacher view). */

window.DEC15_LESSON = {
  id: 'w2d5',
  week: 2, day: 5,
  title: 'From evidence to argument',
  question: 'How critical is addressing food waste as a strategy to combat global food insecurity?',
  wordTarget: '450–600 words',

  /* The thread that connects the four stages (shown on the overview). */
  journey: 'Today you get ready to write your first full argument essay on Monday. You will decide how to use AI, turn feedback into goals, learn to question sources, and then build an essay plan from this week’s sources.',

  sections: [
    /* ───────────────────────── STAGE 1 · 16A ───────────────────────── */
    {
      id: 'ai', number: '01', code: '16A', minutes: 45,
      title: 'Homework follow-up: AST: AI',
      subtitle: 'Use AI wisely',
      outcome: 'Decide when AI can support your learning and when it replaces the thinking you need to do yourself.',
      activities: [
        {
          id: 'a1', short: 'Warmer', minutes: 15, grouping: 'Alone → group',
          title: 'Warmer/Revision: Review university policies',
          goal: 'Remember the University of Sydney rules from your homework.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Answer the 6 questions from memory. Do not look at your homework.' },
              { who: 'pair', text: 'Compare your answers with a partner. Then click Check my answers.' },
              { who: 'group', text: 'Read the key point together. Then talk about the AI tools you tried yesterday.' }
            ]},
            { type: 'quiz', id: 'a1q', title: 'Quick quiz: University of Sydney AI rules', items: [
              { q: 'Who tells you whether AI is allowed in an assessment?', options: ['The Vice-Chancellor', 'The librarian', 'The unit coordinator', 'The IT department'], answer: 'The unit coordinator', why: 'Each unit coordinator decides and explains the rules for their assessments.' },
              { q: 'Your unit coordinator has not mentioned AI for an assessment. What should you do?', options: ['Use AI freely without citation', 'Avoid using AI for the assessment', 'Use AI but don’t tell anyone', 'Submit AI work with a disclaimer'], answer: 'Avoid using AI for the assessment', why: 'If AI use is not stated as permitted, do not use it. Ask if you are unsure.' },
              { q: 'Your unit coordinator allows AI. What must you do?', options: ['Acknowledge and reference all AI use', 'Use it without acknowledgement', 'Use it only for grammar', 'Submit AI work without editing'], answer: 'Acknowledge and reference all AI use', why: 'Permitted use must still be acknowledged.' },
              { q: 'True or false? You can always use AI in assessments if it helps you finish faster.', options: ['True', 'False'], answer: 'False', why: 'Speed is not a rule. Permission comes from the unit coordinator.' },
              { q: 'True or false? Submitting work partly produced by AI without acknowledgement is a breach of academic integrity.', options: ['True', 'False'], answer: 'True', why: 'Unacknowledged AI use is an academic integrity breach. It may be treated as contract cheating.' },
              { q: 'True or false? You must not submit work that is mainly produced by AI, even if you acknowledge it.', options: ['True', 'False'], answer: 'True', why: 'Acknowledgement does not make it acceptable to submit work that AI mainly produced.' }
            ]},
            { type: 'key', title: 'Three rules to remember', points: [
              '<b>Ask first.</b> Your unit coordinator decides if AI is allowed. If nobody says it is allowed, don’t use it.',
              '<b>Always acknowledge.</b> If AI is allowed, say how you used it and reference it.',
              '<b>The work must be yours.</b> Never submit work mainly produced by AI — even with acknowledgement.'
            ], policy: true },
            { type: 'talk', title: 'Talk in your group (5 minutes)', prompts: [
              'Which AI tool did you explore yesterday (Cogniti or Copilot)? What did you ask it to do?',
              'Was it easy to use? Did you notice any limitations or mistakes?',
              'How were the two tools’ answers similar or different? Which do you prefer, and why?'
            ]},
            { type: 'language', title: 'Useful language', groups: [
              { label: 'Describing a tool', phrases: ['I asked it to…', 'It was useful for…', 'One limitation was that…'] },
              { label: 'Comparing', phrases: ['Both tools…', 'Copilot…, whereas Cogniti…', 'I prefer… because…'] }
            ]},
            { type: 'teacher', text: 'This is the homework follow-up (16A). Keep the quiz brisk: 5 minutes alone + pair check. Spend the remaining time on the group discussion about Cogniti/Copilot.' }
          ]
        },
        {
          id: 'a2', short: 'AI or Not', minutes: 12, grouping: 'Pairs',
          title: 'AI or Not',
          goal: 'Make a first decision about when AI could be useful.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read each task. Decide quickly: <b>AI could be used</b> or <b>AI is unnecessary</b>. Go with your first idea.' },
              { who: 'pair', text: 'Find one task where you and your partner disagree. Each person explains their reason.' }
            ]},
            { type: 'quiz', id: 'a2q', title: 'Your first decisions', shared: ['AI could be used', 'AI is unnecessary'], deferCheck: true, items: [
              { q: 'Taking part in a peer-review activity during class', answer: 'AI is unnecessary', why: 'Feedback to classmates should come from your own evaluation.' },
              { q: 'Making a list of academic vocabulary with definitions for your field of study', answer: 'AI could be used', why: 'AI can quickly compile a specialised word list — but check the definitions.' },
              { q: 'Checking grammar and punctuation in an essay draft', answer: 'AI could be used', why: 'AI can suggest corrections — if the assessment rules allow it.' },
              { q: 'Writing the introduction for an essay', answer: 'AI is unnecessary', why: 'Your introduction should show your own understanding and position.' },
              { q: 'Thinking of possible research questions for a presentation', answer: 'AI could be used', why: 'AI can suggest different angles that you then evaluate.' },
              { q: 'Preparing a short speech for an academic seminar', answer: 'AI is unnecessary', why: 'Public speaking skills need independent practice.' },
              { q: 'Answering an essay question in an in-class test', answer: 'AI is unnecessary', why: 'In-class tests check your independent thinking and writing.' },
              { q: 'Summarising a long journal article', answer: 'AI could be used', why: 'AI can save reading time — but you still need to read the parts you use.' },
              { q: 'Taking part in a group discussion in a tutorial', answer: 'AI is unnecessary', why: 'Discussion depends on your own ideas and communication.' },
              { q: 'Making examples of paraphrased sentences to practise with', answer: 'AI could be used', why: 'Useful for practice — try first, then compare with AI.' },
              { q: 'Writing an email to a lecturer to ask about an assignment', answer: 'AI is unnecessary', why: 'Direct communication needs your own voice and purpose.' },
              { q: 'Brainstorming counterarguments for a discussion or essay', answer: 'AI could be used', why: 'AI can suggest opposing views that strengthen your argument.' }
            ]},
            { type: 'tip', text: 'Don’t check yet. You will use a framework in the next activity and then decide again.' }
          ]
        },
        {
          id: 'a3', short: 'Framework', minutes: 13, grouping: 'Groups of 3',
          title: 'AI or Not: Framework',
          goal: 'Use three questions to make a better decision about AI.',
          blocks: [
            { type: 'key', title: 'Before you use AI, ask three questions', numbered: true, points: [
              '<b>Does this task need my own ideas, creativity or reflection?</b> If yes, AI may stop you from growing. <i>Example: a reflective journal about a lecture.</i>',
              '<b>Will AI help me learn — or take the learning away?</b> If the task builds a skill (paraphrasing, analysis), try it yourself first. AI can help with mechanical jobs. <i>Example: paraphrase a passage yourself, then compare with AI.</i>',
              '<b>Is AI allowed here?</b> In-class tasks and exams usually require independent work. <i>Example: a timed essay in an exam.</i>'
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Go back to your 12 decisions in Activity 2. Ask the three questions for each task. Change any decisions you want to.' },
              { who: 'group', text: 'Choose <b>two</b> tasks you changed or argued about. Explain each one using the language below.' },
              { who: 'alone', text: 'Go back to Activity 2 and click <b>Check my answers</b>. Then write your two explanations here.' }
            ]},
            { type: 'language', title: 'Explain your decision', groups: [
              { label: 'AI could help', phrases: ['AI could help with… because it is a mechanical task.', 'I would try it myself first, and then…'] },
              { label: 'AI is not appropriate', phrases: ['This task needs my own…, so…', 'If I used AI here, I would not practise…', 'This is an in-class task, so AI is not allowed.'] }
            ]},
            { type: 'fields', fields: [
              { id: 'a3-1', label: 'Task 1 and my explanation', placeholder: 'For … , AI could / should not … because …', rows: 3 },
              { id: 'a3-2', label: 'Task 2 and my explanation', placeholder: 'I changed my mind about … because …', rows: 3 }
            ]},
            { type: 'teacher', text: 'Students will plan their essay later today. Point out that question 1 and 2 of the framework mean: do not use AI to plan the essay. We want to avoid students offloading the thinking.' }
          ],
          answers: { items: [
            ['Example', 'Writing an introduction: I changed my answer to “AI is unnecessary”. This task needs my own understanding and position, so if I used AI I would not practise how to introduce my argument.'],
            ['Example', 'Paraphrasing practice: AI could help, but I would try the paraphrase myself first and then compare my version with the AI version.']
          ]}
        },
        {
          id: 'a4', short: 'Exit ticket', minutes: 5, grouping: 'Alone',
          title: 'Exit ticket: my AI rule for this essay',
          goal: 'Decide how you will (and will not) use AI for Monday’s essay.',
          blocks: [
            { type: 'cards', title: 'The situation', items: [
              { label: 'Today', text: 'You will choose your position and two reasons, and make an essay plan.' },
              { label: 'Monday', text: 'You will write the essay in class (450–600 words).' },
              { label: 'An AI chatbot says…', text: '“I can write your plan and your whole essay in 10 seconds.”' }
            ]},
            { type: 'fields', fields: [
              { id: 'a4-1', label: 'My AI rule for this essay', placeholder: 'I will not use AI to … because … I could use it only to …', rows: 3 }
            ]}
          ],
          answers: { title: 'A model rule', items: [['Model', 'I will not use AI to choose my position or write my plan, because I need to practise building an argument for the assessment. After I finish my plan myself, I could use a dictionary to check two academic words.']] }
        }
      ]
    },

    /* ───────────────────────── STAGE 2 · 17A ───────────────────────── */
    {
      id: 'feedback', number: '02', code: '17A', minutes: 45,
      title: 'AST: Feedback literacy: Taking action',
      subtitle: 'Turn feedback into action',
      outcome: 'Understand your teacher’s feedback on the Research Summary Discussion and turn it into clear goals for Weeks 3–4.',
      activities: [
        {
          id: 'b1', short: 'Teacher feedback', minutes: 5, grouping: 'Alone',
          title: 'Check Teacher Feedback',
          goal: 'Find one strength, one thing to improve, and one question.',
          blocks: [
            { type: 'key', title: 'Feedback only helps if you act on it', points: [
              '<b>1 · Appreciate it</b> — understand what the comment means.',
              '<b>2 · Make judgements</b> — compare it with your own view of your work.',
              '<b>3 · Take action</b> — decide exactly what you will do differently next time.'
            ], numbered: false },
            { type: 'steps', items: [
              { who: 'alone', text: 'Open the <b>Teacher Feedback</b> document your teacher sent on Canvas (the Research Summary Discussion).' },
              { who: 'alone', text: 'Save it in your <b>DEC15 Research Summary Discussion</b> folder, with your self-reflection form.' },
              { who: 'alone', text: 'Complete the three boxes. Your teacher will visit your group later to answer your question.' }
            ]},
            { type: 'fields', fields: [
              { id: 'b1-1', label: 'One strength (in my own words)', placeholder: 'My teacher said I …', rows: 2 },
              { id: 'b1-2', label: 'One thing to improve', placeholder: 'Next time I need to …', rows: 2 },
              { id: 'b1-3', label: 'A question for my teacher', placeholder: 'What did you mean by …? / How can I …?', rows: 2 }
            ]},
            { type: 'teacher', text: 'Before class: send each group the ‘Teacher Feedback’ document via Canvas messaging. Bring butcher’s paper (or A3) and coloured pens for Activity 3. For Activities 2–3, students sit with their DISCUSSION group from yesterday (not their research group). Circulate and answer feedback questions while they work.' }
          ]
        },
        {
          id: 'b2', short: 'Check-in', minutes: 5, grouping: 'Discussion group',
          title: 'Self-regulation and monitoring: Homework Check-in',
          goal: 'Remember the self-regulation tools from your homework.',
          blocks: [
            { type: 'key', title: 'Self-regulation = plan → monitor → evaluate', points: [
              '<b>Before a task:</b> understand what the task needs, set goals, and plan for problems.',
              '<b>During a task:</b> manage your time and effort, and check your progress.',
              '<b>After a task:</b> compare your result with your goals, and plan for next time. Keep a record of mistakes you repeat.'
            ]},
            { type: 'talk', title: 'Talk in your group', prompts: [
              'Which tools did the homework introduce? How do you use them, and why are they useful?',
              'How does self-regulation help you beyond writing — for example in exams or reading?',
              'How do strong self-regulation skills help a group project or presentation?'
            ]},
            { type: 'teacher', text: 'Possible answers: (1) Pomodoro timer — list tasks with estimated times, work 25 minutes, break 5; a task-breakdown tool — type a task and choose how many subtasks to generate. (2) Tracking progress, changing strategies and finishing on time; more independence. (3) Everyone takes responsibility for their part and manages time to meet group deadlines.' }
          ],
          answers: { items: [
            ['Tools', 'A Pomodoro timer (work 25 minutes, then a 5-minute break) and a tool that breaks a big task into smaller subtasks.'],
            ['Why they matter', 'They help you track progress, change strategy when something isn’t working, and finish on time. In a group, each person manages their own part so the group meets its deadline.']
          ]}
        },
        {
          id: 'b3', short: 'Group activity', minutes: 20, grouping: 'Discussion group',
          title: 'Group activity',
          goal: 'Share practical strategies for one self-regulation skill.',
          blocks: [
            { type: 'cards', title: 'Your teacher gives your group ONE learning outcome', numbered: true, items: [
              { label: 'Before the task', text: 'Can analyse the task requirements, set detailed goals, anticipating potential obstacles and planning ways to overcome them.' },
              { label: 'During the task', text: 'Can apply specific strategies to manage and monitor their time and effort effectively during the learning process.' },
              { label: 'After the task', text: 'Can evaluate their learning outcomes against their set goals, analysing their performance and planning for future learning tasks.' },
              { label: 'After the task (ongoing)', text: 'Can keep a record of spoken and written ‘recurrent mistakes’ to facilitate conscious self-monitoring.' }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: '<b>12 min.</b> Make a poster on paper. Include the four parts in the poster plan below.' },
              { who: 'class', text: '<b>5 min.</b> Gallery walk: put the posters on the wall. Walk around and read the other posters.' },
              { who: 'alone', text: '<b>3 min.</b> Write one strategy from another group that you will try.' }
            ]},
            { type: 'model', title: 'Poster plan', list: [
              'Our outcome in simple words',
              '3 practical strategies (what exactly do you do?)',
              'One common problem + how to solve it',
              'A tool that helps (e.g. from the homework)'
            ]},
            { type: 'fields', fields: [
              { id: 'b3-1', label: 'Our poster: three strategies', placeholder: '1. … 2. … 3. …', rows: 3 },
              { id: 'b3-2', label: 'A strategy from another group that I will try', placeholder: 'I will try … when … because …', rows: 2 }
            ]},
            { type: 'teacher', text: 'Assign outcomes 1–4 (it is fine to double up). Encourage visual posters. Optional: vote for the most useful poster, or ask students to connect another group’s poster to their own experience. Keep checking in with groups about their feedback.' }
          ],
          answers: { items: [
            ['Before the task (example)', 'Read the task twice and underline key words · write 2–3 goals · list one possible problem and a solution · use a task-breakdown tool.'],
            ['During the task (example)', 'Work in 25-minute blocks (Pomodoro) · tick off subtasks · check the time halfway and adjust.'],
            ['After the task (example)', 'Compare the result with your goals · ask “what worked / what didn’t?” · keep a mistakes log: my error → correction → new example.']
          ]}
        },
        {
          id: 'b4', short: 'Strategy meeting', minutes: 15, grouping: 'Research group',
          title: 'Original group strategy meeting',
          goal: 'Use peer and teacher feedback to write 3–5 clear goals.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your <b>original research group</b>. Open your <b>Research Summary Discussion: Self-Reflection Form</b>.' },
              { who: 'group', text: 'Discuss: Did the problems you predicted happen? Did your strategies work? Did you make progress towards your goals? Complete the Action Plan if anything says “Needs work”.' },
              { who: 'alone', text: 'Complete the table: what your peer said, what your teacher said, and a new goal. Copy it into the ‘Updated Goals for Week 3–4’ section of your form.' }
            ]},
            { type: 'key', title: 'A clear goal = action + when + how I will check', points: [
              '❌ <s>Improve my speaking.</s> — too general. You cannot check it.',
              '✅ In the Week 4 discussion, I will <b>refer to my source by name at least twice</b>. My partner will count.'
            ]},
            { type: 'table', id: 'b4t', title: 'Updated goals for Weeks 3–4', columns: ['Peer feedback', 'Teacher feedback', 'New goal (action + when + check)'], rows: 3 },
            { type: 'language', title: 'Goal language', groups: [
              { label: 'Action', phrases: ['I will…', 'I will try to… at least … times'] },
              { label: 'When', phrases: ['In the Week 4 discussion,…', 'Before I write on Monday,…'] },
              { label: 'Check', phrases: ['I will check this by…', '… will tell me if…'] }
            ]},
            { type: 'teacher', text: 'Tell students: if they wrote “Needs work” for anything, they must add at least one point to the action plan. Encourage constructive peer feedback on summaries and the process. Students save the form — they will return to it in Week 3.' }
          ],
          answers: { items: [
            ['Model row', 'Peer: “You read from your notes a lot.” · Teacher: “Use more evidence from your source.” · New goal: In the Week 4 discussion I will speak from key-word notes only and give two examples from my article. My group will tell me if I read aloud.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 3 · 18A ───────────────────────── */
    {
      id: 'critical', number: '03', code: '18A', minutes: 60,
      title: 'AST: Criticality: Engaging with sources',
      subtitle: 'Question the evidence',
      outcome: 'Tell facts from opinions, judge evidence, find hidden assumptions, and recognise bias and tone.',
      activities: [
        {
          id: 'c1', short: 'Warmer', minutes: 8, grouping: 'Group',
          title: 'Warmer',
          goal: 'Remember the CRAAP test from Week 1.',
          blocks: [
            { type: 'quiz', id: 'c1q', title: 'What does CRAAP stand for?', shared: ['Currency', 'Relevance', 'Authority', 'Accuracy', 'Purpose'], items: [
              { q: '<b>C</b> — How recent is it?', answer: 'Currency', why: 'Old information may be out of date, especially in fast-changing topics.' },
              { q: '<b>R</b> — Does it fit my topic and question?', answer: 'Relevance', why: 'A reliable source can still be useless for your question.' },
              { q: '<b>A</b> — Who wrote it? Are they qualified?', answer: 'Authority', why: 'Check the author’s job, qualifications and organisation.' },
              { q: '<b>A</b> — Where does the information come from? Is it supported?', answer: 'Accuracy', why: 'Look for evidence and references.' },
              { q: '<b>P</b> — Why was it written? To inform, persuade or sell?', answer: 'Purpose', why: 'The purpose affects how you use the information.' }
            ]},
            { type: 'talk', title: 'Talk in your group', prompts: [
              'Why is the CRAAP test important when you research online?',
              'How can you check if the author or organisation is trustworthy?'
            ]},
            { type: 'key', title: 'Today: go one step further', points: [
              'A source can be reliable <b>and still have limitations</b>. Today you will check four things in any text: <b>facts vs opinions</b>, <b>evidence</b>, <b>assumptions</b>, and <b>bias</b>.'
            ]}
          ]
        },
        {
          id: 'c2', short: 'Fact or opinion?', minutes: 10, grouping: 'Alone → pair',
          title: 'Fact or Opinion?',
          goal: 'Recognise when a statement is a belief, not checked evidence.',
          blocks: [
            { type: 'key', title: 'Fact or opinion?', compare: [
              { label: 'FACT', text: 'Can be <b>checked</b> with evidence. It stays the same whatever people believe.', eg: 'About one-third of food produced globally is wasted each year.' },
              { label: 'OPINION', text: 'Shows a <b>personal belief, judgement or feeling</b>. People can disagree.', eg: 'People are too careless about throwing away food.' }
            ], points: ['Opinion clues: <b>should, must, will solve, too, best, careless</b>, and other judging words.'] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Decide: fact (F) or opinion (O)?' },
              { who: 'pair', text: 'Tell your partner the <b>clue words</b> that helped you. Then check.' }
            ]},
            { type: 'quiz', id: 'c2q', shared: ['Fact', 'Opinion'], items: [
              { q: 'Approximately one-third of all food produced globally is wasted each year.', answer: 'Fact', why: 'This can be checked against data (e.g. FAO estimates).' },
              { q: 'Insects and alternative proteins are being explored as sustainable solutions to reduce food waste.', answer: 'Fact', why: 'Whether research is happening can be checked.' },
              { q: 'Technology, such as smart fridges and AI-driven food tracking, will solve the food waste problem.', answer: 'Opinion', why: '“Will solve” is a prediction and a judgement.' },
              { q: 'Some countries, like France, have laws requiring supermarkets to donate unsold food to charities instead of throwing it away.', answer: 'Fact', why: 'The existence of a law can be checked.' },
              { q: 'People are too careless about throwing away food, and stricter policies should be implemented.', answer: 'Opinion', why: '“Too careless” and “should” show a judgement.' }
            ]}
          ]
        },
        {
          id: 'c3', short: 'Evidence', minutes: 10, grouping: 'Pairs',
          title: 'Evaluating Evidence and Sources',
          goal: 'Recognise strong evidence and improve a weak statement.',
          blocks: [
            { type: 'key', title: 'Strong evidence is specific and sourced', points: [
              '<b>Strong:</b> names a source (who, when) and gives specific data.',
              '<b>Weak:</b> vague words (“many”, “some”, “a large amount”), no source, or personal stories only.'
            ]},
            { type: 'quiz', id: 'c3q', title: 'Choose the stronger statement in each set', items: [
              { q: 'Set 1 — supermarkets', options: [
                'A. Research by the Food Waste Reduction Alliance (FWRA, 2023) indicates that supermarkets in the U.S. discard millions of tons of food each year, accounting for a substantial portion of retail food waste.',
                'B. It is suggested that supermarkets waste a large amount of food annually, making them a major contributor to food waste.'
              ], answer: 'A. Research by the Food Waste Reduction Alliance (FWRA, 2023) indicates that supermarkets in the U.S. discard millions of tons of food each year, accounting for a substantial portion of retail food waste.', why: 'A names the source and year and describes specific findings. B gives no source (“it is suggested”).' },
              { q: 'Set 2 — new solutions', options: [
                'C. Countries that have implemented awareness campaigns have reported some success in reducing food waste.',
                'D. A study published in Food Tech Journal (2022) found that restaurants using AI-powered monitoring systems reduced food waste by up to 40% over six months.',
                'E. Many restaurants have started using new technologies to track waste, and some have reported improvements.'
              ], answer: 'D. A study published in Food Tech Journal (2022) found that restaurants using AI-powered monitoring systems reduced food waste by up to 40% over six months.', why: 'D has a source, a date, a number and a time period. C and E are vague (“some success”, “many”, “some”).' }
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Choose weak statement <b>C</b> or <b>E</b>. Rewrite it so it is stronger. Ask: <i>Who said it? When? How much? Where?</i>' }
            ]},
            { type: 'model', title: 'Model: weak → stronger', before: 'Many restaurants use new technology, and some have improved.', text: 'A 2022 study of 50 restaurants in the UK found that those using waste-tracking software reduced food waste by 25% in one year (Smith, 2022).', note: 'Invented example — for practice only. In your essay, use only real evidence from the course sources.' },
            { type: 'fields', fields: [
              { id: 'c3-1', label: 'My stronger version', placeholder: 'According to … (year), … in … reduced … by …', rows: 3 }
            ]}
          ]
        },
        {
          id: 'c4', short: 'Assumptions', minutes: 12, grouping: 'Groups of 3',
          title: 'Identifying Assumptions – What’s Missing?',
          goal: 'Find what an argument takes for granted, and its limitation.',
          blocks: [
            { type: 'key', title: 'An assumption is an idea the writer does not say — but needs to be true', points: [
              'To find it, ask: <b>“What must be true for this claim to work?”</b>',
              'Then ask: <b>“When might it not be true?”</b> — this is the limitation.'
            ]},
            { type: 'model', title: 'Worked example', before: '“If supermarkets sell food at a discount before expiration, customers will always buy it instead of wasting it.”', rows: [
              ['Assumption', 'Price is the only thing that affects what customers buy.'],
              ['Limitation', 'Some customers still avoid near-expiry food because of freshness concerns or no meal plan.']
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Choose <b>two</b> of the claims below. For each, write the assumption and the limitation.' },
              { who: 'group', text: 'Share with another group. Did you find the same assumption?' }
            ]},
            { type: 'cards', title: 'Claims', numbered: true, items: [
              { text: '“If the government mandates food waste reduction strategies in schools, children will develop lifelong habits of responsible consumption.”' },
              { text: '“Supermarkets contribute to food waste because they provide too many choices for consumers.”' },
              { text: '“Composting leftover food is an environmentally friendly way to manage waste.”' },
              { text: '“Businesses that charge customers for food waste will significantly reduce waste levels.”' }
            ]},
            { type: 'language', title: 'Useful language', groups: [
              { label: 'Assumption', phrases: ['This claim assumes that…', 'The writer takes for granted that…'] },
              { label: 'Limitation', phrases: ['However, this may not be true if/when…', 'Other factors, such as…, also…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'c4-1', label: 'Claim no. __ — assumption and limitation', placeholder: 'This claim assumes that … However, …', rows: 3 },
              { id: 'c4-2', label: 'Claim no. __ — assumption and limitation', placeholder: 'This claim assumes that … However, …', rows: 3 }
            ]}
          ],
          answers: { items: [
            ['1 · Schools', 'Assumption: education alone is enough to change long-term behaviour. Limitation: parents, culture and income also shape habits.'],
            ['2 · Too many choices', 'Assumption: less product variety would directly reduce waste. Limitation: waste has many causes — habits, storage, supply-chain problems.'],
            ['3 · Composting', 'Assumption: composting always helps the environment more than other strategies. Limitation: preventing waste is better; transporting and processing compost has costs too.'],
            ['4 · Charging customers', 'Assumption: fees alone will change behaviour. Limitation: convenience, lack of awareness and few alternatives may still cause waste; some people will just pay.']
          ]}
        },
        {
          id: 'c5', short: 'Bias', minutes: 20, grouping: 'Pairs → group',
          title: 'Recognising Bias',
          goal: 'See how word choice shows a writer’s attitude, and whose view is missing.',
          blocks: [
            { type: 'key', title: 'Bias = favouring one side', points: [
              'Writers show bias by <b>leaving out facts</b>, using <b>emotional words</b>, or choosing <b>only the evidence that helps them</b>.',
              'A <b>neutral tone</b> sounds more credible. A very emotional or exaggerated tone can be a sign of bias.'
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Part A: match the tones. Underline the <b>words</b> that show each tone.' },
              { who: 'pair', text: 'Part B: read the paragraph below. Highlight emotional or persuasive words.' },
              { who: 'group', text: 'Answer the six questions in the table. Compare with another pair.' }
            ]},
            { type: 'quiz', id: 'c5q', title: 'Part A · Match each sentence with its tone', shared: ['Neutral', 'Persuasive', 'Critical / blaming', 'Optimistic / encouraging'], items: [
              { q: 'Supermarkets are more interested in profits than sustainability, rejecting perfectly edible produce just because it doesn’t look perfect.', answer: 'Critical / blaming', why: 'Clue words: “more interested in profits”, “just because”.' },
              { q: 'We must take urgent steps to reduce food waste before it causes irreversible damage to our environment.', answer: 'Persuasive', why: 'Clue words: “we must”, “urgent”, “irreversible damage”.' },
              { q: 'Approximately one-third of all food produced globally is wasted each year, contributing significantly to environmental problems.', answer: 'Neutral', why: 'Factual and measured: “approximately”, “contributing”.' },
              { q: 'Many innovative solutions, like food-sharing apps and zero-waste grocery stores, are already helping people waste less food.', answer: 'Optimistic / encouraging', why: 'Clue words: “innovative”, “already helping”.' }
            ]},
            { type: 'passage', id: 'c5p', title: 'Part B · Read and analyse', text: 'The government is taking significant steps to address the growing problem of food waste through new policies and initiatives. Regulations requiring supermarkets and restaurants to donate surplus food instead of discarding it will help reduce unnecessary waste and support struggling families. Tax incentives for businesses that participate in food redistribution programs further encourage responsible practices. While some critics argue that these policies place an unfair burden on businesses, it is the government’s responsibility to ensure a sustainable and equitable food system. By enforcing stricter regulations and increasing public awareness, food waste can be drastically reduced, benefiting both the economy and the environment.' },
            { type: 'table', id: 'c5t', title: 'Bias analysis', columns: ['Question', 'Your analysis'], fixed: [
              'Whose perspective dominates the text?',
              'What perspectives are missing?',
              'Is there emotional or persuasive language? Which words?',
              'Who benefits from the argument?',
              'Does the author present opposing views fairly?'
            ]}
          ],
          answers: { items: [
            ['Dominant perspective', 'The government, policymakers and regulators.'],
            ['Missing perspectives', 'The food industry and businesses, low-income consumers, environmental groups.'],
            ['Emotional / persuasive language', '“significant steps”, “unnecessary waste”, “ensure a sustainable and equitable food system”, “drastically reduced”.'],
            ['Who benefits', 'For example, the government, food banks and social programs.'],
            ['Opposing views', 'Not really. Critics are mentioned in one clause, but it does not explain how businesses might struggle to comply.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 4 · 19A ───────────────────────── */
    {
      id: 'writing', number: '04', code: '19A', minutes: 90,
      title: 'Academic writing skills workshop setup',
      subtitle: 'Plan your argument essay',
      outcome: 'Understand the essay question, take organised notes from three sources, choose a position and make a plan.',
      activities: [
        {
          id: 'd1', short: 'The question', minutes: 10, grouping: 'Alone → pair',
          title: 'Analyse the question',
          goal: 'Find the content words and limiting words, and the job the question gives you.',
          blocks: [
            { type: 'question' },
            { type: 'key', title: 'Read every essay question in three layers', points: [
              '<b>Content words</b> — the topic: what you write <i>about</i>.',
              '<b>Limiting words</b> — the narrow focus: which part of the topic.',
              '<b>Task words</b> — what you must <i>do</i>: describe? explain? evaluate?'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Highlight the <b>content words</b> in the question. Underline the <b>task words</b>.' },
              { who: 'pair', text: 'Discuss the three questions in the boxes. Write short answers.' }
            ]},
            { type: 'fields', fields: [
              { id: 'd1-1', label: 'Content words — and any limiting words', placeholder: 'Content: … Limiting: …', rows: 2 },
              { id: 'd1-2', label: 'What does “How critical…?” ask me to do?', placeholder: 'It asks me to …', rows: 2 },
              { id: 'd1-3', label: 'Which rhetorical functions will I need?', placeholder: 'I will need to explain … and evaluate …', rows: 2 }
            ]},
            { type: 'tip', text: '“How critical” here means <b>how important</b>. It does not mean “criticise”.' }
          ],
          answers: { items: [
            ['Content words', '<i>food waste</i>, <i>food insecurity</i>.'],
            ['Limiting words', '<i>critical</i>; <i>food waste</i> — this one cause is the focus. You do not need to discuss every cause of food insecurity from Week 1.'],
            ['The task', '“How critical…” asks you to examine how important reducing food waste is for improving food security — and to take a position.'],
            ['Rhetorical functions', '<b>Explain</b> the causal relationships between food waste and food insecurity, and <b>evaluate</b> how important reducing food waste is.']
          ]}
        },
        {
          id: 'd2', short: 'Note-taking 1', minutes: 20, grouping: 'Alone → group',
          title: 'Note-taking: listen again',
          goal: 'Take handwritten notes on the listening that help answer the question.',
          blocks: [
            { type: 'key', title: 'Take notes for the question — not everything', points: [
              'Write <b>key words, numbers and links</b> — not full sentences.',
              'Use <b>symbols</b>: → leads to · ↑ increase · ↓ decrease · = means · e.g.',
              'Keep <b>each number with what it measures</b> (e.g. 8% = share of global emissions).'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Before you listen (2 min).</b> Look at the guiding questions. Predict one answer.' },
              { who: 'class', text: '<b>Listen (10 min).</b> Your teacher plays Our Changing Climate (2020). Take notes <b>by hand, on paper</b> — like in the assessment.' },
              { who: 'group', text: '<b>Compare (5 min).</b> Compare notes with your group. Add anything you missed.' },
              { who: 'alone', text: '<b>Type (3 min).</b> Type your most useful notes below. Use them in the evidence table next.' }
            ]},
            { type: 'cards', title: 'Guiding questions', numbered: true, items: [
              { text: 'Why is food wasted <b>before</b> the point of sale (farms, shops)?' },
              { text: 'Why is food wasted <b>after</b> the point of sale (homes, restaurants)?' },
              { text: 'What are the <b>environmental</b> effects of food waste?' },
              { text: 'How is food waste connected to <b>hunger</b>?' }
            ]},
            { type: 'listening' },
            { type: 'fields', fields: [
              { id: 'd2-1', label: 'My best notes from the listening', placeholder: 'Before sale: … After sale: … Environment: … Hunger: …', rows: 6 }
            ]},
            { type: 'teacher', text: 'Play the recording to the whole class once. Students take notes by hand on paper, as they will in the assessment. Discourage AI use in this lesson — we don’t want students offloading the thinking.' }
          ],
          answers: { items: [
            ['Before sale', 'Imperfect-looking produce doesn’t sell → left in fields or sent to landfill. Low market prices: harvesting costs more than the selling price (California: 33.7% of produce unharvested). Shops overbuy to create an “illusion of abundance”.'],
            ['After sale', 'Homes, restaurants and food services = 69% of US food waste. Overbuying (bigger plates and fridges, bulk-buy promotions). Unclear expiration dates → edible food thrown away.'],
            ['Environment', 'Food waste ≈ 8% of global emissions: energy to produce, ship and process the food + methane as food decomposes in landfill.'],
            ['Hunger', 'Food thrown in landfill could feed up to 1.8 billion people. Globally ~⅓ of food is never eaten; in the US, 40%.']
          ]}
        },
        {
          id: 'd3', short: 'Note-taking 2', minutes: 30, grouping: 'Groups of 2–3',
          title: 'Note-taking: build your table',
          goal: 'Organise relevant, paraphrased notes by theme and find links across sources.',
          blocks: [
            { type: 'key', title: 'Synthesis = connecting ideas across sources', points: [
              'Group notes by <b>theme</b>, not only by source. The same theme in two sources is <b>strong support</b> for your argument.',
              'Choose only what helps <b>answer the question</b>. Paraphrase. Keep the <b>author and year</b> with every note.'
            ]},
            { type: 'sources', ids: ['reading1', 'reading2', 'listening'] },
            { type: 'steps', items: [
              { who: 'group', text: 'Add your listening notes to the <b>Our Changing Climate</b> column.' },
              { who: 'group', text: 'Divide the readings. One person takes <b>Tchonkouang et al. (2023)</b>, one takes <b>Royer (2024)</b>. Add relevant notes in your own words.' },
              { who: 'group', text: 'Read across each row. Which ideas appear in <b>more than one source</b>? Write two below the table.' }
            ]},
            { type: 'table', id: 'd3t', title: 'Evidence table', columns: ['Theme', 'Tchonkouang et al. (2023)', 'Royer (2024)', 'Our Changing Climate (2020)'], fixed: [
              'Food loss in production (before sale)',
              'Food waste by consumers (after sale)',
              'Environmental impact',
              'Hunger and redistribution'
            ], extraRows: true },
            { type: 'language', title: 'Language for synthesis', groups: [
              { label: 'Same idea', phrases: ['Both X and Y show that…', 'This is supported by…', '(X, 2023; Y, 2024)'] },
              { label: 'Adding', phrases: ['X adds that…', 'Y gives the example of…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'd3-1', label: 'Two ideas that appear in more than one source', placeholder: '1. Both … and … show that … 2. …', rows: 3 }
            ]},
            { type: 'teacher', text: 'Students can build the table in a shared Google Doc if you prefer. Model one column first (group similar ideas together). Do NOT show the colour-coded sample table on Canvas until students have made their own.' }
          ],
          answers: { title: 'Sample notes', items: [
            ['Food loss in production', 'Tchonkouang: food that doesn’t look perfect is hard to sell; poor practices and limited technology → big losses after harvest in less developed countries; lower profits for farmers. · Our Changing Climate: imperfect produce rots or goes to landfill; if harvest costs > selling price, crops are left (California 33.7%); shops overbuy (“illusion of abundance”).'],
            ['Food waste by consumers', 'Tchonkouang: overbuying, not eating food in time, misunderstanding labels; mostly in homes in developed countries. · Royer: ~30% (66.5 million tons) of edible US food wasted after leaving the farm. · Our Changing Climate: 69% of US food waste comes from homes and food services; bulk-buy promotions, bigger fridges; unclear expiry dates.'],
            ['Environmental impact', 'Tchonkouang: wasted water, land and energy. · Royer: 15% of US city waste is food → methane; 315 lb of greenhouse gases per person per year. · Our Changing Climate: ≈8% of global emissions; methane from landfill.'],
            ['Hunger and redistribution', 'Tchonkouang: cutting Australian waste by a third could feed 921,000 people for a year. · Royer: food rescue and redistribution could reduce food insecurity. · Our Changing Climate: landfill food could feed up to 1.8 billion people.'],
            ['Across sources', 'All three link food waste to wasted resources and greenhouse gases; all three say redistributing wasted food could reduce hunger.']
          ]}
        },
        {
          id: 'd4', short: 'Position', minutes: 10, grouping: 'Group → alone',
          title: 'Making a plan: take a position',
          goal: 'Decide your answer to the question and two reasons.',
          blocks: [
            { type: 'key', title: 'An argument essay must have a position', points: [
              'Your <b>position</b> (thesis) is your answer to the question. Every paragraph must support it.',
              'Support it with <b>two main reasons</b>. Each reason becomes one body paragraph.'
            ]},
            { type: 'choose', id: 'd4pos', title: 'How critical do YOU think it is?', options: [
              'Addressing food waste is a critical part of the strategy to tackle food insecurity.',
              'Addressing food waste is only part of the strategy to tackle food insecurity.',
              'Addressing food waste is not a critical part of the strategy to tackle food insecurity.'
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Discuss your position with your group. Use your evidence table to find <b>two reasons</b>.' },
              { who: 'alone', text: 'Write your own position and two reasons. You can disagree with your group.' }
            ]},
            { type: 'language', title: 'Stating a position', groups: [
              { label: 'Position', phrases: ['Addressing food waste is a crucial / an important / only a partial strategy because…', 'While other factors matter, … is central to…'] },
              { label: 'Reasons', phrases: ['Firstly, it would reduce…', 'Secondly, it could help…'] }
            ]},
            { type: 'fields', fields: [
              { id: 'd4-1', label: 'My position', placeholder: 'Addressing food waste is …', rows: 2 },
              { id: 'd4-2', label: 'Reason 1', placeholder: 'because it …', rows: 2 },
              { id: 'd4-3', label: 'Reason 2', placeholder: 'and because it …', rows: 2 }
            ]},
            { type: 'teacher', text: 'You may bring the class together to discuss reasons and agree on two. In the sample essay, the writer thinks addressing food waste is very important. The two reasons: (1) managing the climate crisis — also a key cause of food insecurity; (2) better management of resources to help reduce hunger.' }
          ],
          answers: { items: [
            ['Sample position', 'Food waste is central to the problem of food insecurity — reducing it could contribute a great deal to food security.'],
            ['Reason 1', 'It would help manage the climate crisis, which is itself a key cause of food insecurity.'],
            ['Reason 2', 'It would allow better management of resources, which could help reduce hunger.']
          ]}
        },
        {
          id: 'd5', short: 'Plan', minutes: 20, grouping: 'Group → alone',
          title: 'Making a plan',
          goal: 'Organise your position, reasons and evidence into an essay outline.',
          blocks: [
            { type: 'key', title: 'One body paragraph = one reason', points: [
              '<b>Topic sentence</b> (your reason) → <b>explanation + evidence</b> (with citations) → <b>concluding sentence</b> (link back to your position).',
              'You do <b>not</b> need all your notes. Be selective.'
            ]},
            { type: 'plan' },
            { type: 'checklist', id: 'd5c', title: 'Check your plan with a partner', items: [
              'My thesis clearly answers “How critical…?”',
              'My two reasons are different from each other.',
              'Each body paragraph has evidence from at least one source, with author and year.',
              'My plan uses ideas from more than one source (synthesis).',
              'My notes are paraphrased, not copied.'
            ]},
            { type: 'key', title: 'Before Monday', tone: 'warn', points: [
              'Bring this plan to class. You will <b>write the essay in class on Monday</b>.',
              'Do <b>not</b> start writing, and do <b>not</b> use AI to write a response over the weekend.'
            ]},
            { type: 'teacher', text: 'On Monday students write the essay and then deconstruct a sample response. They will also look at writing introductions and conclusions — this plan previews that structure. Show the sample outline (Answers) only after students have made their own.' }
          ],
          answers: { title: 'Sample essay outline', items: [
            ['Introduction', 'Topic/problem: pressure on the food system — growing population. · Issue: food insecurity (FAO, 2020: 30% of the global population food insecure). · Thesis: food waste is central to the problem — reducing waste could contribute a great deal. · Preview: (1) managing the climate crisis — also a key cause of food insecurity; (2) better management of resources — helping to reduce hunger.'],
            ['Body paragraph 1 — reduce the impact on the environment', 'Food loss at production because of appearance standards (farmers discard imperfect produce) and market prices (harvesting costs more than selling) (R1 & L1). Carbon footprint of the energy used to produce, transport and process food that is wasted (R1 & L1). Discarded produce in landfill → methane (L1) → climate change (R2) → extreme weather → lower yields. Evidence: waste = 8% of global emissions (L1). Concluding statement: less food loss → less production needed → fewer emissions and a more resource-efficient, stable food supply.'],
            ['Body paragraph 2 — better management of resources to reduce hunger', 'Food waste at consumption because of buying habits: overbuying, throwing food away before it spoils, misunderstanding labels (R1 & L1). Evidence: ~30% of food produced is not eaten (L1); cutting Australian waste by a third could feed 921,000 people for a year (R1). Redistribution programs send food to underserved communities; food banks in cities. Concluding statement: redistribution increases food availability, so its importance cannot be overlooked.'],
            ['Conclusion', 'Restate thesis: a key area where improvement can increase food security. · Summarise: saving food from landfill could feed billions and greatly reduce emissions. · Implication: a fairer and more efficient food system.']
          ]}
        }
      ]
    }
  ],

  /* ───────────── Optional independent practice ───────────── */
  extras: [
    {
      id: 'x1', short: 'Evaluate a reading', minutes: 15, grouping: 'Homework', category: 'Reading',
      title: 'Evaluate this week’s readings',
      goal: 'Use today’s criticality questions on a real course text.',
      blocks: [
        { type: 'sources', ids: ['reading1', 'reading2'] },
        { type: 'steps', items: [
          { who: 'alone', text: 'Your teacher gives you Reading 1 (Tchonkouang et al., 2023) or Reading 2 (Royer, 2024).' },
          { who: 'alone', text: 'Find the items in the table.' },
          { who: 'pair', text: 'Next class: compare with someone who read the same text, then with someone who read the other text. Which reading is more persuasive? Why?' }
        ]},
        { type: 'table', id: 'x1t', columns: ['Look for', 'Your notes (paragraph letter)'], fixed: [
          '2 facts — are they sourced or just stated?',
          '2 opinions — are they presented as facts?',
          'Evidence — is it from credible sources?',
          'Assumptions — what is taken for granted?',
          'Bias — whose perspective is included or left out?',
          'Strong tone — which words persuade?'
        ]},
        { type: 'teacher', text: 'This is the 18A wrap-up/follow-up task (15 min). There is no time for it in the 4-hour day, so it is set for homework. Assign half the class Reading 1 and half Reading 2.' }
      ]
    },
    {
      id: 'x2', short: 'Vocabulary', minutes: 10, grouping: 'Alone', category: 'Vocabulary',
      title: 'Six words from today',
      goal: 'Remember and use key words from today’s lesson.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Without looking, explain these words: <b>evidence, assumption, bias, redistribution, emissions, critical</b>.' },
          { who: 'alone', text: 'Use two of them in sentences about the essay topic.' },
          { who: 'alone', text: 'Open <b>Word meanings</b> (top bar) and check. Then try the <b>Word game</b>.' }
        ]},
        { type: 'fields', fields: [
          { id: 'x2-1', label: 'My definitions from memory', placeholder: 'evidence = …', rows: 4 },
          { id: 'x2-2', label: 'Two sentences about food waste', placeholder: '…', rows: 3 }
        ]}
      ],
      answers: { items: [['Check', 'Evidence supports a claim · an assumption is an unstated idea an argument depends on · bias favours one view · redistribution moves resources to people who need them · emissions are gases released into the air · “critical” in the question means very important.']] }
    },
    {
      id: 'x3', short: 'Original video', minutes: 15, grouping: 'Alone', category: 'Listening',
      title: 'Watch the original video',
      goal: 'Extra listening practice with the full YouTube video.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Predict: which cause of food waste will be hardest to change?' },
          { who: 'alone', text: 'Watch 0:09–9:05. Note one cause, one consequence and one solution.' },
          { who: 'alone', text: 'Open the video script and check your notes.' }
        ]},
        { type: 'listening', mode: 'video' },
        { type: 'fields', fields: [{ id: 'x3-1', label: 'Cause · consequence · solution', placeholder: 'Cause: … Consequence: … Solution: …', rows: 3 }] },
        { type: 'tip', text: 'The YouTube video is slightly different from the adapted course transcript. For the essay, use the course transcript.' }
      ]
    }
  ],

  /* Word help: [word, plain meaning, example]. Dotted words open these meanings. */
  glossary: [
    ['argument', 'Your answer to the question, supported by reasons and evidence. It does not mean a fight.', 'My argument is that… because…'],
    ['claim', 'A statement that someone says is true. It needs checking.', 'The writer claims that…'],
    ['evidence', 'Information that supports an idea, such as data from a study.', 'What evidence supports this?'],
    ['source', 'The text, video or study that information comes from.', 'Write the author and year of the source.'],
    ['assumption', 'An idea an argument depends on, but does not say or prove.', 'This assumes that…'],
    ['bias', 'Favouring one point of view over others.', 'Whose view is missing?'],
    ['tone', 'The attitude a writer shows through word choice.', 'A neutral tone; a persuasive tone.'],
    ['perspective', 'A way of seeing something; a point of view.', 'A farmer’s perspective.'],
    ['paraphrase', 'Say the same idea in your own words, and name the source.', 'Read, look away, write, then check.'],
    ['synthesis', 'Connecting ideas from different sources.', 'Both sources show that…'],
    ['thesis', 'Your main answer or position in an essay.', 'My thesis is that…'],
    ['position', 'What you think about the question, with reasons.', 'My position is that…'],
    ['limitation', 'Something a source or idea cannot show or does not cover.', 'One limitation is that it only studies the US.'],
    ['feedback', 'Comments about your work that help you improve it.', 'My teacher’s feedback said…'],
    ['self-regulation', 'Planning your learning, checking progress, and changing what you do when needed.', 'Plan → check → change.'],
    ['academic integrity', 'Being honest in your study: doing your own work and acknowledging sources.', 'Unacknowledged AI use is a breach of academic integrity.'],
    ['acknowledge', 'Say clearly where help or information came from.', 'Acknowledge your AI use.'],
    ['unit coordinator', 'The academic in charge of a university subject (unit).', 'Ask your unit coordinator if AI is allowed.'],
    ['food insecurity', 'Not having reliable access to enough safe, nutritious food.', 'Food may exist, but people cannot get it.'],
    ['food loss', 'Food lost during production, harvest and distribution — before it is sold.', 'Imperfect fruit left in the field.'],
    ['food waste', 'Edible food that people throw away — usually after it is sold.', 'Food thrown out at home.'],
    ['redistribution', 'Moving extra food to people who need it.', 'A food bank redistributes donated food.'],
    ['emissions', 'Gases released into the air.', 'Greenhouse gas emissions.'],
    ['methane', 'A powerful greenhouse gas, released when food rots in landfill.', 'Landfills produce methane.'],
    ['landfill', 'A place where waste is buried in the ground.', 'Food sent to landfill.'],
    ['surplus', 'More than is needed.', 'Surplus food = extra food.'],
    ['edible', 'Safe and suitable to eat.', 'Perfectly edible food.'],
    ['produce', '(noun) Fruit and vegetables.', 'Fresh produce.'],
    ['critical', 'In the essay question: very important. (In “critical thinking”: careful questioning.)', 'How important is it?'],
    ['mitigate', 'Make a problem less serious.', 'Mitigate food waste.'],
    ['incentive', 'Something that encourages people to act.', 'A tax incentive.'],
    ['AI', 'Artificial intelligence: computer tools such as chatbots that can produce text. Their answers can be wrong.', 'Check what AI tells you.']
  ]
};
