/* DEC15 · Week 5, Day 5 — lesson content.
   Teacher’s Book: W5 D5 · 8A Applying the frameworks: Presentations (75) · 9A AST: AI reflection (60) · 10A STAR moment (30).
   Texts: the AI podcast is played by the teacher (no transcript). Clapp et al. (2022) · Mockshell & Ritter (2024) — lessons/week5/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true).
   v2 (A2–B1 version): simpler instructions, sentence starters and games; 10A is one tab ('Part 1 · …', 'Part 2 · …').
   All saved-work ids (blocks, fields, tables) are unchanged. */

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
          id: 'e1', short: 'Presentations', minutes: 60, grouping: 'Groups → class',
          title: 'Presentations',
          goal: 'Give your 5–6 minute presentation. Ask other groups questions and give feedback.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Get ready', items: [
              { who: 'group', text: 'Look at your notes again for a few minutes.' },
              { who: 'group', text: 'Each group presents for <b>5–6 minutes</b>. Everyone speaks.' },
              { who: 'class', text: 'After each talk, there are <b>3–4 minutes</b> for questions and feedback.' },
              { who: 'class', text: 'Ask each group at least <b>one clarification question</b>.' }
            ]},
            { type: 'figure', src: 'assets/week5/presentation-roles.svg', alt: 'Three speakers share the presentation: speaker 1 introduces the solution, the pillar(s) and one question; speaker 2 discusses two questions; speaker 3 discusses one question and gives the overall evaluation; then classmates ask follow-up clarification questions.', caption: 'Present — then answer follow-up questions', size: 'wide' },
            { type: 'key', title: 'What is a clarification question?', points: [
              'It asks the speaker to <b>explain something more clearly</b>.',
              'It helps you <b>understand</b> better.',
              'In DEC10 you will also ask <b>probing questions</b> (= questions that go deeper).'
            ]},
            { type: 'model', title: 'Example', rows: [
              ['They said', '“Mobile apps help users make more informed decisions.”'],
              ['You ask', 'You said apps help users make decisions. Can you specify (= say exactly) what kind of decisions?']
            ]},
            { type: 'language', title: 'Asking for clarification', tabs: false, groups: [
              { label: 'Questions', phrases: ['You said that… . Can you specify…?', 'Could you explain what you mean by…?', 'Could you give an example of…?', 'When you said…, did you mean…?', 'Which source said that…?'] },
              { label: 'Answering', phrases: ['Sure. What I meant was…', 'For example, …', 'According to…, …', 'That’s a good question. I think…'] }
            ]},
            { type: 'spinner', id: 'e1sp', title: 'Practice game: ask a clarification question', text: '<b>Student A</b> spins and reads the statement. <b>Student B</b> asks a question with the starter. Student A answers. Then swap.', reels: [
              { label: 'A presenter says…', start: 'Spin!', items: ['“Food banks improve access.”', '“The app is not very accessible.”', '“Upcycled food reduces waste.”', '“Some groups cannot use this solution.”', '“The solution is moderately effective.”', '“The evidence is mixed.”'] },
              { label: 'Ask with…', start: '…', items: ['Can you specify…?', 'Could you explain what you mean by…?', 'Could you give an example of…?', 'Which source said that…?'] }
            ]},
            { type: 'teacher', ref: 'w5d5-t1' },

            { type: 'table', id: 'e1t', title: 'Part 2 · During the presentations: my notes', columns: ['Group', 'Solution and pillar(s)', 'Their overall evaluation', 'My clarification question'], rows: 4, extraRows: true },
            { type: 'tip', text: 'Short notes are fine! Write key words, not sentences.' },
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
          goal: 'Look back at your DEC15 goals. Set new goals for DEC10.',
          blocks: [
            { type: 'tip', text: 'In DEC15 you got feedback from <b>classmates, teachers and AI</b>. Open your <b>Self-Reflection Forms</b> and <b>Writing Feedback Tools</b>. Read the feedback again.' },
            { type: 'cards', title: 'Your goals may be about…', items: [
              { icon: 'chat', label: 'Discussion skills', text: 'e.g. responding to others’ ideas' },
              { icon: 'search', label: 'Research skills', text: 'e.g. judging if an article is good' },
              { icon: 'pen', label: 'Writing skills', text: 'e.g. linking ideas better' },
              { icon: 'users', label: 'Group work skills', text: 'e.g. solving problems in the group' }
            ]},
            { type: 'scale', id: 'e2sc', title: 'Quick self-check', statement: 'I met my DEC15 goals.', ends: ['Not yet', 'Completely'], mid: 'Partly' },
            { type: 'table', id: 'e2t', title: '1 · My DEC15 goals', columns: ['My goal', 'Progress: how well did I meet it?', 'Challenges: what made it difficult?'], rows: 3, extraRows: true },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Progress', phrases: ['I have improved my… . For example, …', 'I still find… difficult because…'] },
              { label: 'New goals', phrases: ['In DEC10, I want to…', 'To do this, I will… every week.', 'I will ask for feedback on…'] }
            ]},
            { type: 'table', id: 'e2g', title: '2 · New goals for DEC10', columns: ['', 'My goals'], fixed: [
              'Writing goals',
              'Speaking goals',
              'General goals for DEC10<br><small>e.g. discussion, research, group work</small>'
            ], send: true, sendLabel: 'Share your goals with your teacher (optional)', sendHint: 'Only the person you choose will see it, in “Shared with me”.' },
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
            { type: 'cards', title: 'Activity 1 · Vocabulary: read the sentences', numbered: true, items: [
              { text: 'In late 2022 the AI program ChatGPT was released and brought with it a complete <b>upheaval</b> to the modern university experience.' },
              { text: 'As institutions <b>grappled with</b> issues such as potential plagiarism, students wasted no time putting this new tool to work.' },
              { text: 'Is true <b>coexistence</b> between AI and universities actually possible?' },
              { text: 'Since ChatGPT sort of <b>burst onto the scene</b>, how have attitudes changed in that time?' },
              { text: 'Everyone was <b>on the back foot</b>, not knowing how to respond to the new technology.' },
              { text: 'Now that we’ve had a little bit of time <b>for the dust to</b> kind of <b>settle</b>, it is being more cautiously embraced.' },
              { text: 'AI is here, whether we like it or not, let’s try and <b>bring it out of the shadows</b> a bit.' },
              { text: 'It’s with <b>attribution</b>. So, if you have used AI say for research purposes, you would be acknowledging that.' }
            ]},
            { type: 'sort', id: 'i2s', single: true, title: 'Match each bold expression with its meaning', hint: '<b>Drag</b> each expression to its meaning — or tap an expression, then tap a meaning.', buckets: [
              { label: 'A sudden, big change that causes problems.' },
              { label: 'Tried hard to deal with something difficult.' },
              { label: 'Living or existing together, in peace.' },
              { label: 'Suddenly became popular or well-known.' },
              { label: 'Not ready; in a weak position.' },
              { label: 'Waiting for a messy situation to become calm and clear.' },
              { label: 'Make something more visible or accepted.' },
              { label: 'Saying where an idea or information came from (giving credit).' }
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
            { type: 'talk', title: 'Activity 3 · Critical thinking', prompts: [
              'How has your opinion of AI in education changed over time?',
              'People moved from fear to careful acceptance of AI. Do you agree with this change? Why?',
              'Some universities allow AI if you say you used it. They compare it to a calculator. Is this a fair comparison?',
              'What ethical problems (= questions of right and wrong) can AI cause in university work?'
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
            { type: 'sort', id: 'i3s', single: true, title: 'Activity 1 · Vocabulary: match each phrase with its meaning', hint: '<b>Drag</b> each phrase to its meaning — or tap a phrase, then tap a meaning.', buckets: [
              { label: 'A big change has happened and we cannot go back.' },
              { label: 'Saying something quickly, without checking or preparing.' },
              { label: 'Make something stronger or more united.' },
              { label: 'A comparison with something familiar, to explain an idea.' },
              { label: 'Changing teaching to fit each student’s needs.' },
              { label: 'Putting things into separate groups or boxes.' }
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
          goal: 'Take notes on five worries about AI in education. Then put them in order.',
          blocks: [
            { type: 'flip', title: 'Activity 1 · Vocabulary: check the bold words', hint: 'Read the sentence. Guess the meaning. Then tap the card.', items: [
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
            { type: 'table', id: 'i4r', title: 'Activity 4 · Critical thinking: rank the concerns', columns: ['Rank', 'Concern', 'Why?'], fixed: ['1 · most important', '2', '3', '4', '5 · least important'] },
            { type: 'talk', prompts: ['Compare your ranking with a partner. Explain your reasons. There is no single correct order!'] },
            { type: 'language', tabs: false, groups: [
              { label: 'Sentence starters', phrases: ['For me, the most serious concern is… because…', 'I put… last because…', 'I see your point, but I think…'] }
            ]},
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
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'How will I use AI to help my studies? How will I say that I used it (= attribution)?', placeholder: 'Before lectures I will… · I will say I used AI by…', rows: 4 },
          { id: 'x1-2', label: 'Which concern from the podcast will I be careful about? What will I do?', placeholder: 'To keep my own critical thinking strong, I will…', rows: 3 }
        ]}
      ]
    }
  ],

  glossary: [
    ['clarification question', 'A question that asks a speaker to explain something more clearly.', 'Can you specify what kind of decisions are being made?'],
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
