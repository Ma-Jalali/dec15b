/* DEC15 · Week 5, Day 5 — lesson content.
   Teacher’s Book: W5 D5 · 8A Applying the frameworks: Presentations (75) · 9A AST: AI reflection (60) · 10A STAR moment (30).
   Texts: the AI podcast is played by the teacher (no transcript). Clapp et al. (2022) · Mockshell & Ritter (2024) — lessons/week5/sources.js.
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js, js/play.js and js/forms.js (form, scale, jeopardy, send: true). */

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
  journey: 'The last day of DEC15! Your group presents its evaluation of a solution to food waste and answers clarification questions. Then you reflect on your goals for DEC10, listen to a podcast about whether universities and AI can coexist, and finish with a STAR moment with your teacher.',
  finish: { title: 'DEC10', text: 'Well done — you have finished DEC15!' },

  sections: [
    /* ───────────────────────── 8A Applying the frameworks: Presentations ───────────────────────── */
    {
      id: 'present', number: '01', code: '8A', minutes: 75,
      tone: 'clay', art: 'group',
      title: 'Applying the frameworks: Presentations',
      subtitle: 'Present your evaluation and answer questions',
      outcome: 'Communicate and explain ideas in front of your peers, clarify information you have spoken about, and reflect on your goals and set new goals for further development.',
      activities: [
        {
          id: 'e1', short: 'Presentations', minutes: 60, grouping: 'Groups → class',
          title: 'Presentations',
          goal: 'Give your 5–6 minute mini presentation, ask clarification questions and give feedback.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Spend a few minutes reviewing your notes for your presentation.' },
              { who: 'group', text: 'Each group presents for <b>5–6 minutes</b>. Every group member speaks.' },
              { who: 'class', text: 'Then there are <b>3–4 minutes</b> for follow-up questions and brief feedback. Ask the presenters at least one <b>clarification question</b>.' }
            ]},
            { type: 'figure', src: 'assets/week5/presentation-roles.svg', alt: 'Three speakers share the presentation: speaker 1 introduces the solution, the pillar(s) and one question; speaker 2 discusses two questions; speaker 3 discusses one question and gives the overall evaluation; then classmates ask follow-up clarification questions.', caption: 'Present — then answer follow-up questions', size: 'wide' },
            { type: 'key', title: 'Clarification questions', points: [
              'A clarification question responds to something the presenters said that might not have been <b>clearly expressed</b>.',
              'It helps you <b>better understand</b> the content. In DEC10 you will also ask <b>probing</b> questions in the Interactive Presentations.'
            ]},
            { type: 'model', title: 'Example', rows: [
              ['Statement', 'You said “mobile apps help users make more informed decisions”.'],
              ['Clarification question', 'Can you specify what kind of decisions are being made with the help of these apps?']
            ]},
            { type: 'language', title: 'Asking for clarification', tabs: false, groups: [
              { label: 'Questions', phrases: ['You said that… . Can you specify…?', 'Could you explain what you mean by…?', 'Could you give an example of…?', 'When you said…, did you mean…?', 'Which source said that…?'] },
              { label: 'Answering', phrases: ['Sure. What I meant was…', 'For example, …', 'According to…, …', 'That’s a good question. I think…'] }
            ]},
            { type: 'table', id: 'e1t', title: 'My notes on the other groups’ presentations', columns: ['Group', 'Solution and pillar(s)', 'Their overall evaluation', 'My clarification question'], rows: 4, extraRows: true },
            { type: 'form', id: 'e1f', title: 'Peer feedback for the presenting group', intro: 'Your teacher tells you which group to give written feedback to. Choose Yes, Mostly or Needs work and add a comment.', observe: 'Which group presented?', cols: ['Comments'], sections: [
              { label: 'The presentation', items: [
                'Was the information clearly presented?',
                'Did they explain which pillar(s) they used and why?',
                'Did they support their answers with evidence from the literature?',
                'Did they evaluate how effective the solution is?',
                'Did every group member speak and make eye contact?'
              ]}
            ], fields: [{ id: 'e1f-q', label: 'One clarification question I asked or would ask', rows: 2, placeholder: 'You said that… . Can you specify…?' }],
              send: true, sendLabel: 'Send your feedback to the presenters' },
            { type: 'teacher', ref: 'w5d5-t1' }
          ]
        },
        {
          id: 'e2', short: 'My goals', minutes: 15, grouping: 'Alone',
          title: 'Self-Reflection on DEC15 Goals',
          goal: 'Look back at your goals from DEC15 and set new goals for DEC10.',
          blocks: [
            { type: 'tip', text: 'Throughout DEC15 you reflected on feedback from your <b>peers, teachers and AI</b> and wrote action plans. Take out your <b>Self-Reflection Forms</b> and <b>Writing Feedback Tools</b> and review the feedback on your speaking and writing.' },
            { type: 'cards', title: 'You may have written goals about…', items: [
              { icon: 'chat', label: 'Discussion skills', text: 'e.g. responding to others’ ideas' },
              { icon: 'search', label: 'Research skills', text: 'e.g. evaluating articles' },
              { icon: 'pen', label: 'Writing skills', text: 'e.g. strengthening links between ideas' },
              { icon: 'users', label: 'Group work skills', text: 'e.g. managing conflict' }
            ]},
            { type: 'table', id: 'e2t', title: '1 · My DEC15 goals', columns: ['My goal', 'Progress: How well have my goals been met?', 'Challenges that may have impacted the achievement of my goals'], rows: 3, extraRows: true },
            { type: 'table', id: 'e2g', title: '2 · New goals for further development in DEC10', columns: ['', 'My goals'], fixed: [
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
      outcome: 'Reflect on the AI skills you learned in DEC15, listen to a podcast for detail, and discuss the benefits and concerns of AI in education.',
      activities: [
        {
          id: 'i1', short: 'Warmer', minutes: 15, grouping: 'Groups of 3–4',
          title: 'Warmer',
          goal: 'Discuss five questions about AI in your studies and your future.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Wall-crawl: your group starts at one question. Discuss it for <b>3 minutes</b>.' },
              { who: 'group', text: 'When the time is up, move <b>clockwise</b> to the next question. Continue until you have discussed every question.' }
            ]},
            { type: 'cards', title: 'The questions', items: [
              { icon: 'bulb', label: 'Start', text: 'From the AI skills you learned in DEC15 (writing prompts, using AI for feedback, evaluating AI-generated content), which do you find most useful, and why?' },
              { icon: 'alert', label: '1', text: 'In your experience, does bias still exist in AI-generated materials? Can you give an example?' },
              { icon: 'book', label: '2', text: 'How do you plan to use AI to support your university studies? What benefits and challenges do you anticipate?' },
              { icon: 'briefcase', label: '3', text: 'How do you think AI will impact your future workplace? In what ways might you use it professionally?' },
              { icon: 'lock', label: '4', text: 'Should there be limits on AI use in academic and professional settings? Why or why not? Who should be responsible for setting these limits?' }
            ]},
            { type: 'fields', fields: [
              { id: 'i1-2', label: 'Question 2 — my plan for using AI at university (you will come back to this in Part 2)', placeholder: 'I plan to use AI to… · Benefits: … · Challenges: …', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w5d5-t3' }
          ]
        },
        {
          id: 'i2', short: 'Part 1', minutes: 15, grouping: 'Alone → pair',
          title: 'Listening Part 1',
          goal: 'Learn eight expressions, then listen for the host’s two questions and the answers.',
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
            { type: 'listening', source: 'Podcast (your teacher plays it)', title: 'Can university and AI coexist?', videoId: '', clip: 'Part 1 · 2:11–5:13', transcripts: [] },
            { type: 'fields', title: 'Activity 2 · Listen and take notes', fields: [
              { id: 'i2-1', label: '1. What questions were asked by the host?', placeholder: 'How have…? · How are universities…?', rows: 3 },
              { id: 'i2-2', label: '2. (Listen again if necessary.) Notes on the answers', placeholder: 'Attitudes: panic → … · Assignments: …', rows: 4 }
            ]},
            { type: 'talk', title: 'Activity 3 · Critical thinking', prompts: [
              'How have your attitudes toward AI in education evolved over time?',
              'Do you agree with the shift from fear and restriction to cautious acceptance? Why or why not?',
              'The podcast mentions that some universities allow AI use with proper attribution, comparing it to using a calculator. Do you think this is a fair comparison?',
              'What ethical concerns might arise from integrating AI into academic work?'
            ]},
            { type: 'teacher', ref: 'w5d5-t4' }
          ],
          answers: { items: [
            ['The host’s questions', '1. How have attitudes changed since AI became widely available?<br>2. How are universities regulating or integrating AI use in assignments?'],
            ['Answer 1', 'Initial panic has shifted to cautious acceptance: universities recognise that AI is here to stay and are integrating it into education rather than resisting it.'],
            ['Answer 2', 'Some universities allow AI use in assignments with proper acknowledgement (similar to citation), especially in fields like engineering and coding, while emphasising transparency and responsible use.']
          ]}
        },
        {
          id: 'i3', short: 'Part 2', minutes: 15, grouping: 'Alone → group',
          title: 'Listening Part 2',
          goal: 'Learn six phrases, then fill the gaps with the exact words you hear about how students use AI.',
          blocks: [
            { type: 'cloze', id: 'i3c', list: true, title: 'Activity 1 · Vocabulary: choose the correct phrase for each gap', options: ['genie is out of the bottle', 'off the top of my head', 'consolidate', 'analogy', 'tailoring learning', 'compartmentalizing'],
              answers: ['genie is out of the bottle', 'off the top of my head', 'consolidate', 'analogy', 'tailoring learning', 'compartmentalizing'],
              text: 'Now that AI is widely used in education, the {{1}} and universities must adapt to its presence.\nI can’t remember the exact statistics {{2}}, but I know that AI adoption in higher education has significantly increased.\nUniversities are working to {{3}} their policies on AI usage to ensure consistency across different faculties.\nSome educators use the {{4}} of a calculator to explain how AI can be a helpful tool rather than a replacement for learning.\nAI has the potential to improve education by {{5}} to meet individual students’ needs and preferences.\nInstead of {{6}} knowledge into separate subjects, AI can help create more interdisciplinary approaches to learning.' },
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
            { type: 'listening', source: 'Podcast (your teacher plays it)', title: 'Can university and AI coexist?', videoId: '', clip: 'Part 2 · 7:41–10:36 (you might hear it twice)', transcripts: [] },
            { type: 'cloze', id: 'i3g', title: 'Activity 2 · How are students using AI? Fill the gaps with the exact words you hear', options: ['learning outcomes', 'information', 'incorrect', 'explain', 'unique', 'analogies', 'proofreading', 'tailored', 'accessibility', 'summaries', 'translation', 'creativity'],
              answers: ['learning outcomes', 'information', 'incorrect', 'explain', 'unique', 'analogies', 'proofreading', 'tailored', 'accessibility'],
              text: '<b>Jack Quinlan:</b> Before lectures he inputs {{1}} into AI tools, which gives him more {{2}} walking into the lecture. Even if some of the content is {{3}}, he can replace it in the lecture. While studying he uses AI to {{4}} lecture content in different and {{5}} ways, often receiving useful {{6}} that enhance his understanding.<br><br><b>Caitlin Cassidy</b> also explains ways students are using AI in their studies. They commonly use it for {{7}} assignments to catch grammar mistakes or ideas missed. AI also supports more {{8}} learning, similar to how apps like Duolingo adapt to users. Additionally, AI improves {{9}} for students with different learning needs — for example, by offering text-to-speech or note-taking support.' },
            { type: 'talk', title: 'Activity 3 · Critical thinking', prompts: [
              'Look back at your answer to warmer question 2: “How do you plan to use AI to support your university studies? What benefits and challenges do you anticipate?” Were Jack’s experience and Caitlin’s answer similar to or different from yours?'
            ]},
            { type: 'teacher', ref: 'w5d5-t5' }
          ]
        },
        {
          id: 'i4', short: 'Part 3', minutes: 15, grouping: 'Pairs',
          title: 'Listening Part 3',
          goal: 'Take notes on five concerns about AI in education — then rank them.',
          blocks: [
            { type: 'flip', title: 'Activity 1 · Vocabulary: check the bold words', hint: 'Read the sentence, guess the meaning, then turn the card.', items: [
              { front: 'There are plenty of reasons to be cautious about <b>embracing</b> AI wholeheartedly.', back: '<b>embrace</b> = accept (a belief, theory or change) willingly and enthusiastically.' },
              { front: 'One of the <b>chief issues</b> there being plagiarism, which is still a problem.', back: '<b>chief issue</b> = the most important issue.' },
              { front: 'There are also <b>inherent biases</b> of the search engines.', back: '<b>inherent biases</b> = built-in prejudices or unfair perspectives that exist in a system or tool.' },
              { front: 'There are arguments that it’s sort of <b>stunting</b> creativity and critical thought.', back: '<b>stunt</b> = prevent from growing or developing properly.' },
              { front: 'There is also still a lack of <b>equity</b>.', back: '<b>equity</b> = the quality of being fair and impartial.' },
              { front: 'We already have quite a big <b>digital divide</b> in Australia.', back: '<b>digital divide</b> = the gap between people who can and cannot access digital technologies.' }
            ]},
            { type: 'talk', title: 'Activity 2 · Before listening', prompts: ['Can you define <b>digital literacy</b>, <b>digital divide</b> and <b>contract cheating</b>?'] },
            { type: 'listening', source: 'Podcast (your teacher plays it)', title: 'Can university and AI coexist?', videoId: '', clip: 'Part 3 · 15:04–19:41', transcripts: [] },
            { type: 'table', id: 'i4t', title: 'Activity 3 · Listen and take notes: five concerns', columns: ['Concern', 'Details or examples'], rows: 5 },
            { type: 'table', id: 'i4r', title: 'Activity 4 · Critical thinking: rank the concerns', columns: ['Rank', 'Concern', 'Why?'], fixed: ['1 · most important', '2', '3', '4', '5 · least important'] },
            { type: 'talk', prompts: ['Compare your ranking with a partner and explain your reasoning. There is no single correct order!'] },
            { type: 'teacher', ref: 'w5d5-t6' }
          ],
          answers: { items: [
            ['Before listening', '<b>Digital literacy</b>: the skills to find, use, evaluate and create information with digital technologies. <b>Digital divide</b>: the gap between people who can and cannot access digital technologies. <b>Contract cheating</b>: paying (or asking) someone else to do your assessment for you.'],
            ['Five concerns', '<img src="assets/week5/ai-concerns.svg" alt="Five concerns about AI in education: plagiarism and academic integrity, bias in AI, stunting creativity and critical thinking, equity and the digital divide, and environmental impact.">'],
            ['1 · Plagiarism and academic integrity', 'Universities struggle to detect AI-generated work, and tools like Turnitin have limitations.'],
            ['2 · Bias in AI', 'AI systems inherit biases from the internet and society, which can lead to unfairness in search results and responses.'],
            ['3 · Stunting creativity and critical thinking', 'Students may rely too much on AI instead of developing their own ideas.'],
            ['4 · Equity and the digital divide', 'Not all students have equal access to AI tools because of digital literacy gaps and financial barriers (some AI tools cost money).'],
            ['5 · Environmental impact', 'AI queries use much more electricity than a typical Google search, increasing carbon emissions.']
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
      outcome: 'Actively participate with your teacher in addressing your learning needs.',
      activities: [
        {
          id: 's1', short: 'My learning needs', minutes: 25, grouping: 'Alone → class',
          title: 'Teachable STAR moment',
          goal: 'Reflect on your learning needs and ask your teacher your questions.',
          blocks: [
            { type: 'key', title: 'What is a Teachable STAR moment?', points: [
              'Your teacher uses this time to answer <b>your questions</b> and work on <b>your specific language needs</b>.',
              'The best way to take part is to <b>reflect on your learning needs</b> and talk to your teacher about them. Your feedback matters!'
            ]},
            { type: 'fields', title: 'Before you talk to your teacher', fields: [
              { id: 's1-1', label: 'What is still difficult for me? (e.g. a language point, a skill, a type of task)', placeholder: 'I still find it hard to…', rows: 3 },
              { id: 's1-2', label: 'What would I like to practise again before DEC10?', placeholder: 'Paraphrasing · hedging · asking follow-up questions…', rows: 2 },
              { id: 's1-3', label: 'My questions for my teacher', placeholder: '1. …\n2. …', rows: 4 }
            ]},
            { type: 'teacher', ref: 'w5d5-t7' }
          ]
        },
        {
          id: 's2', short: 'Celebrate!', minutes: 5, grouping: 'Whole class',
          title: 'Well done — you finished DEC15!',
          goal: 'Celebrate what you have achieved together.',
          blocks: [
            { type: 'cards', title: 'Five weeks — look what you can do now', items: [
              { icon: 'pen', label: 'Write', text: 'You planned, wrote and revised academic essays with feedback from peers, teachers and AI.' },
              { icon: 'chat', label: 'Discuss', text: 'You summarised research, negotiated, and built on other people’s ideas.' },
              { icon: 'search', label: 'Think critically', text: 'You evaluated sources, solutions and AI-generated content.' },
              { icon: 'users', label: 'Work together', text: 'You researched and presented as a team.' }
            ]},
            { type: 'talk', prompts: ['What are you most proud of from DEC15?', 'Thank a classmate who helped you this course — and tell them why.'] },
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
      goal: 'Write a short, responsible plan for using AI in your studies.',
      blocks: [
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'How will I use AI to support my studies? How will I give attribution?', placeholder: 'Before lectures I will… · I will acknowledge AI use by…', rows: 4 },
          { id: 'x1-2', label: 'Which concern from the podcast will I be careful about — and what will I do?', placeholder: 'To avoid stunting my critical thinking, I will…', rows: 3 }
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
