/* DEC15 · Week 3, Day 4 — lesson content (Practice assessment day).
   TB lessons: 11A AST Criticality: engaging with sources (120) · 12A Integrated Writing Practice
   Assessment (90, on Canvas) · 13A Building rapport (30) · 14A Homework: Feedback literacy (extras).
   Texts A, B, C and the Lecture belong to the practice assessment (Canvas only) — they are NOT in the app. */

window.DEC15_LESSON = {
  id: 'w3d4',
  week: 3, day: 4,
  title: 'Practice assessment day',
  duration: 'About 4 hours',
  question: 'To what extent are consumers responsible for food waste, and how can individual actions significantly reduce waste at the household level?',
  questionKind: 'Practice question',
  questionLabel: 'Today’s practice planning question (sample)',
  wordTarget: '450–600 words',

  image: 'assets/week3/hero-w3d4.svg',
  imageAlt: 'A practice assessment paper with a ticked checklist and a short plan, a 90-minute timer, a pencil and a sticky note that says “Plan first!”.',
  journey: 'Today is practice assessment day. First you practise choosing useful ideas from sources and planning an answer step by step. Then you write the Integrated Writing Practice Assessment on Canvas, on your own, under exam conditions.',
  finish: { title: 'Friday', text: 'Discussion & group work' },

  sections: [
    /* ───────────────────────── STAGE 1 · 11A ───────────────────────── */
    {
      id: 'critical', number: '01', code: '11A', minutes: 120,
      tone: 'teal', art: 'critical',
      title: 'AST Criticality: Engaging with sources',
      subtitle: 'Choose what helps your answer',
      outcome: 'Synthesise ideas from several sources, decide which information is useful for a question, and turn it into a draft essay plan — ready for this afternoon’s practice assessment.',
      activities: [
        {
          id: 'c1', short: 'Warmer', minutes: 10, grouping: 'Groups of 3',
          title: 'Warmer',
          goal: 'Remember causes and solutions from this week’s texts.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Discuss the three questions. You can open this week’s texts for help.' },
              { who: 'group', text: 'For question 2, think about <b>different levels</b>: government, retail (shops), household.' },
              { who: 'class', text: 'Share one solution per level with the class. Your teacher writes them on the board.' }
            ]},
            { type: 'talk', title: 'Talk in your group (8 minutes)', prompts: [
              'What are the factors contributing to food waste?',
              'What solutions were suggested to solve food waste at different levels? (Government, retail, household etc.)',
              'Which solutions to reduce food waste do you think are most effective?'
            ]},
            { type: 'sources', ids: ['nicastro', 'aboutthat', 'berti'] },
            { type: 'language', title: 'Useful language', groups: [
              { label: 'Causes', phrases: ['One factor is…', '… leads to / results in…', 'According to Nicastro and Carillo (2021),…'] },
              { label: 'Solutions', phrases: ['At the household level, people could…', 'Retailers / governments could…'] },
              { label: 'Evaluating', phrases: ['I think … is the most effective because…', '… may not work if…'] }
            ]},
            { type: 'key', title: 'Today: practice assessment day', points: [
              'This morning you practise the <b>steps</b> you need for the Integrated Writing Assessment.',
              'This afternoon you <b>use them on your own</b> in the practice assessment on Canvas.'
            ]},
            { type: 'teacher', text: 'Groups of 3–4. Aim for at least two factors and one solution per level, with the source named. Keep it to 10 minutes — the board list is useful later when students judge which ideas are relevant.' }
          ]
        },
        {
          id: 'c2', short: 'Synthesising', minutes: 20, grouping: 'Alone → pair',
          title: 'Synthesising information',
          goal: 'Make short notes on the main ideas of each source and find links between them.',
          blocks: [
            { type: 'figure', src: 'assets/week3/criticality.svg', alt: 'Criticality: engagement with sources. Four skills: identifying positions and perspectives; selecting relevant ideas or information; evaluating ideas and connecting them to your own voice; showing flexibility.', caption: 'Criticality: four ways to engage with sources', size: 'wide' },
            { type: 'key', title: 'Today’s focus: selecting relevant ideas', points: [
              '<b>Synthesis</b> = seeing how sources connect: where they <b>agree</b> and where they <b>differ</b>.',
              'Write <b>notes</b>, not sentences: key words, numbers, arrows.'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Open the practice texts (<b>Text A, Text B, Text C</b>) and your <b>lecture notes</b> from yesterday’s Listening and Reading Practice Assessment. They are on Canvas.' },
              { who: 'alone', text: '<b>12 min.</b> Review them quickly. Complete the table in note form.' },
              { who: 'pair', text: '<b>8 min.</b> Compare your table with a partner. Add anything you missed. Circle one idea that appears in <b>two or more</b> sources.' }
            ]},
            { type: 'table', id: 'c2t', title: 'Synthesising notes', columns: ['Source', 'Main ideas, themes, supporting arguments', 'Similarities (with other sources)', 'Differences (from other sources)'], fixed: ['Text A', 'Text B', 'Text C', 'Lecture'] },
            { type: 'language', title: 'Language for comparing sources', groups: [
              { label: 'Similar', phrases: ['Both Text A and the lecture…', 'Text C also…', 'This is supported by…'] },
              { label: 'Different', phrases: ['Unlike Text B, Text C…', 'Text A focuses on…, whereas…'] }
            ]},
            { type: 'tip', text: 'A good row has 2–3 main ideas. A similarity names <b>which</b> sources share the idea.' },
            { type: 'teacher', text: 'Texts A, B, C and the Lecture are the practice assessment sources (Canvas only — not in the app). Students can also copy this template into their notebooks, as in the TB. If you prefer, they can practise the template with this week’s texts (Nicastro & Carillo; About That; Berti et al.) — they just relabel the rows.' }
          ]
        },
        {
          id: 'c3', short: 'Essay questions', minutes: 10, grouping: 'Pairs',
          title: 'Synthesising information: propose essay questions',
          goal: 'Predict the kind of question the texts could answer.',
          blocks: [
            { type: 'key', title: 'A good assessment-style question…', points: [
              'can be answered with ideas from <b>all</b> the texts and the lecture.',
              'asks you to <b>take a position</b> (To what extent…? Should…? Which is more…?).'
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Look at your table. Which topic do <b>all four</b> sources talk about?' },
              { who: 'pair', text: 'Write <b>one or two</b> essay questions. Use a frame from the language box.' },
              { who: 'class', text: 'Post your best question to the <b>shared document</b>. Read two other pairs’ questions.' }
            ]},
            { type: 'language', title: 'Question frames', groups: [
              { label: 'Degree', phrases: ['To what extent…?', 'How effective is…?'] },
              { label: 'Choice', phrases: ['Which is more…: … or …?', 'Should … or …?'] },
              { label: 'Evaluation', phrases: ['Is … the most effective method to…?'] }
            ]},
            { type: 'fields', fields: [
              { id: 'c3-1', label: 'Our essay question 1', placeholder: 'To what extent …?', rows: 2 },
              { id: 'c3-2', label: 'Our essay question 2 (optional)', placeholder: 'Should … or …?', rows: 2 }
            ]},
            { type: 'teacher', text: 'Set up a shared doc for students before class. Show the sample questions (Answers) after pairs have posted. Next we use sample question 1 for the rest of the lesson.' }
          ],
          answers: { title: 'Sample questions', items: [
            ['1', 'To what extent are consumers responsible for food waste, and how can individual actions significantly reduce waste at the household level?'],
            ['2', 'Which is more critical in reducing food waste at the consumer level: technological interventions or changes in consumer behavior?'],
            ['3', 'Should governments implement mandatory policies to reduce household food waste, or are voluntary measures sufficient to address this issue?'],
            ['4', 'Is consumer education the most effective method to reduce food waste in households?']
          ]}
        },
        {
          id: 'c4', short: 'The question', minutes: 8, grouping: 'Alone → pair',
          title: 'Identifying useful information: analyse the question',
          goal: 'Find the topic words, limiting words and the rhetorical functions you need.',
          blocks: [
            { type: 'question' },
            { type: 'key', title: 'Read the question in three layers', points: [
              '<b>Topic words</b> — what you write <i>about</i>.',
              '<b>Limiting words</b> — the narrow focus: which part of the topic.',
              '<b>Rhetorical function</b> — what you must <i>do</i>: explain causes? evaluate? suggest solutions?'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Highlight the <b>topic words</b>. Underline the <b>limiting words</b>.' },
              { who: 'pair', text: 'Compare. Then agree on the rhetorical functions and write short answers.' }
            ]},
            { type: 'fields', fields: [
              { id: 'c4-1', label: 'Topic words', placeholder: '…', rows: 2 },
              { id: 'c4-2', label: 'Limiting words', placeholder: '…', rows: 2 },
              { id: 'c4-3', label: 'Rhetorical functions I can use', placeholder: 'I need to evaluate … and suggest …', rows: 2 }
            ]},
            { type: 'tip', text: 'This question has <b>two parts</b>: “To what extent…?” and “how can…?”. Your answer must cover both.' },
            { type: 'teacher', text: 'The TB gives no key for this step; the answers are suggestions that match the TB sample plan (causes and effects; suggestions).' }
          ],
          answers: { items: [
            ['Topic words', '<i>consumers</i>, <i>responsible</i>, <i>food waste</i>, <i>individual actions</i>, <i>reduce waste</i>.'],
            ['Limiting words', '<i>consumers</i> and <i>individual</i> (not governments or retailers); <i>at the household level</i> (not farms or shops); <i>significantly</i> (actions that make a real difference).'],
            ['Rhetorical functions', '“To what extent…” → <b>evaluate</b> how responsible consumers are and take a position. Explain <b>causes and effects</b> (why consumers waste food). “How can…” → give <b>suggestions / solutions</b> for households.']
          ]}
        },
        {
          id: 'c5', short: 'Useful?', minutes: 12, grouping: 'Alone → pair',
          title: 'Identifying useful information',
          goal: 'Select only the ideas that help answer this question.',
          blocks: [
            { type: 'key', title: 'True is not the same as useful', points: [
              'Ask: <b>“How does this information help answer my question?”</b>',
              'A statement can be true and interesting — but <b>not useful</b> if it is about a different focus (e.g. policy, technology, global impact).'
            ]},
            { type: 'steps', items: [
              { who: 'alone', text: 'Read each argument from the practice texts. Decide: <b>Useful</b> or <b>Not useful</b> for today’s question?' },
              { who: 'pair', text: 'Tell your partner <b>why</b>. Use the limiting words from Activity 4. Then check.' }
            ]},
            { type: 'quiz', id: 'c5q', title: 'Useful for this question?', shared: ['Useful', 'Not useful'], items: [
              { q: '<b>Text A</b> · Consumers are often unaware or unconcerned about the level of food waste they generate.', answer: 'Useful', why: 'Yes, this is useful because it highlights a lack of awareness and concern as major factors in consumer responsibility for food waste. Addressing these could lead to significant reductions in waste.' },
              { q: '<b>Text A</b> · International commitments to reduce food waste like the Courtauld Commitment 2025.', answer: 'Not useful', why: 'No, this argument focuses more on policy and international agreements rather than on direct consumer actions or responsibility.' },
              { q: '<b>Text B</b> · Household food waste increases due to retailers encouraging consumers to buy in excess.', answer: 'Useful', why: 'Yes, this supports the idea that consumer actions, influenced by external pressures, significantly contribute to waste, and changing these behaviors could help reduce it.' },
              { q: '<b>Text B</b> · Consumers waste organic food due to its appearance.', answer: 'Not useful', why: 'No, while this points to a specific type of waste, it does not broadly address the extent of consumer responsibility or how individual actions can reduce overall waste, focusing instead on a niche issue.' },
              { q: '<b>Text C</b> · Many people do not realize the extent of their food waste, believing they waste hardly any.', answer: 'Useful', why: 'Yes, this gap in perception vs. reality is crucial for understanding consumer responsibility and implementing effective interventions.' },
              { q: '<b>Text C</b> · Technological solutions like mobile apps and refrigerator cameras are being developed to address food waste.', answer: 'Not useful', why: 'No, this argument is more about potential technological interventions than about consumer responsibility or individual actions.' },
              { q: '<b>Lecture</b> · Each year, approximately 1.3 billion tonnes of the food produced for us is either lost or wasted globally.', answer: 'Useful', why: 'Yes, this statistic directly highlights the magnitude of the food waste problem and emphasises the role of consumer behavior in this global issue.' },
              { q: '<b>Lecture</b> · Food waste also represents a significant waste of resources like land, water, energy, and fertilizers.', answer: 'Not useful', why: 'No, while this statement is true and provides context about the broader impacts of food waste, it does not directly address consumer responsibility or how individual actions can reduce waste at the household level. It’s more about the consequences of food waste rather than actions to reduce it.' }
            ]},
            { type: 'talk', title: 'Talk with your partner', prompts: [
              'Choose one “Not useful” statement. Could it be useful for a <b>different</b> question? Look at the sample questions in Activity 3.',
              'Which useful statement would you use first in your essay? Why?'
            ]},
            { type: 'teacher', text: 'Answer key = TB. Note a TB discrepancy: the task list for Text A prints “Food waste estimates in terms of monetary value per state”, but the answer list has “International commitments to reduce food waste like the Courtauld Commitment 2025” (No). The app uses the statement that has a key. If your practice Text A uses the monetary-value statement, it is also Not useful (it measures cost, not consumer responsibility or household actions). Discussion idea for prompt 1: the technology statement fits sample question 2; the Courtauld statement fits question 3. The 1.3 billion tonnes figure is useful mainly as background — the sample plan uses it in the introduction.' }
          ]
        },
        {
          id: 'c6', short: 'Checklist', minutes: 15, grouping: 'Pairs',
          title: 'Checklist',
          goal: 'Match each step with a tip, so you have a checklist for this afternoon.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Read each step. Choose the <b>tip</b> (a–g) that matches it. Each tip is used once.' },
              { who: 'pair', text: 'Check your answers. Then answer the two questions in the talk box.' }
            ]},
            { type: 'quiz', id: 'c6q', title: 'Match the steps with the tips', shared: [
              'a) Try to link ideas together and show how they support your main point.',
              'b) Ask yourself, “How does this information help answer my question?”',
              'c) You can organise ideas by the order of importance, by time, or by theme.',
              'd) Look for any parts that are confusing or off-topic and fix them.',
              'e) While reading, write down or highlight important points that you think are helpful.',
              'f) This helps you understand the topic better and see different viewpoints.',
              'g) Brainstorm possible rhetorical functions that can be used to answer the question.'
            ], items: [
              { q: '<b>1. Understand the question.</b> Read the assignment question carefully. Look for: words that tell you what to do, content words and limiting words.', answer: 'g) Brainstorm possible rhetorical functions that can be used to answer the question.', why: 'You did this in Activity 4.' },
              { q: '<b>2. Read the source carefully.</b> Go through the texts slowly to understand the main ideas and arguments.', answer: 'e) While reading, write down or highlight important points that you think are helpful.', why: 'Notes and highlights save time when you plan.' },
              { q: '<b>3. Pick important information.</b> Choose facts, data, or arguments from the text that directly help answer your assignment question.', answer: 'b) Ask yourself, “How does this information help answer my question?”', why: 'You did this in Activity 5: useful or not useful?' },
              { q: '<b>4. Compare information from different texts.</b> Look at what different texts say about the same topic. Note how they are similar or different.', answer: 'f) This helps you understand the topic better and see different viewpoints.', why: 'You did this in your synthesising table (Activity 2).' },
              { q: '<b>5. Put information together.</b> Combine the chosen information from different sources in a way that makes sense.', answer: 'a) Try to link ideas together and show how they support your main point.', why: 'This is synthesis: sources working together for your argument.' },
              { q: '<b>6. Organise your ideas.</b> Plan how you will arrange your information in your writing.', answer: 'c) You can organise ideas by the order of importance, by time, or by theme.', why: 'You will do this next, in your draft plan.' },
              { q: '<b>7. Check your work</b> (additional step). After writing your draft, read it again to make sure it answers the question and follows the plan.', answer: 'd) Look for any parts that are confusing or off-topic and fix them.', why: 'Leave 5 minutes for this in the practice assessment.' }
            ]},
            { type: 'talk', title: 'Talk with your partner', prompts: [
              'Which step do you usually <b>skip</b> when you write under time pressure?',
              'Which step will you be careful to do this afternoon?'
            ]},
            { type: 'key', title: 'Use this checklist today — and at university', points: [
              'Steps 1–6 happen <b>before</b> you write. Step 7 happens <b>after</b>. In a timed task, plan time for both.'
            ]}
          ]
        },
        {
          id: 'c7', short: 'Draft plan', minutes: 30, grouping: 'Pairs or groups of 3',
          title: 'Create a draft plan',
          goal: 'Put the steps together: turn useful information into a plan for the practice question.',
          blocks: [
            { type: 'model', title: 'So far, we have…', list: [
              'Read and understood the question',
              'Read the sources',
              'Picked important and relevant information',
              'Compared the information from 4 texts'
            ]},
            { type: 'key', title: 'Now: put everything together', points: [
              'Use <b>three</b> body paragraphs: one main idea each, with evidence from the sources.',
              'Your <b>thesis</b> must answer both parts: <i>to what extent</i> + <i>how individuals can reduce waste</i>.'
            ]},
            { type: 'steps', items: [
              { who: 'pair', text: 'Use your useful statements (Activity 5) and your table (Activity 2). Complete the plan together.' },
              { who: 'pair', text: 'For each paragraph, decide the <b>rhetorical function</b>: cause and effect? evaluation? suggestions?' },
              { who: 'alone', text: 'Copy the plan into your notebook or a shared doc if you prefer.' }
            ]},
            { type: 'table', id: 'c7t', title: 'Draft plan', columns: ['Paragraph', 'Topic sentence / thesis', 'Supporting ideas & evidence', 'Rhetorical function'], fixed: ['Intro (background + thesis)', 'Body 1', 'Body 2', 'Body 3', 'Conclusion'] },
            { type: 'language', title: 'Useful language', groups: [
              { label: 'Thesis', phrases: ['Consumers play a key role in… because…, yet…', 'To a large extent, consumers…'] },
              { label: 'Cause and effect', phrases: ['… because…', '…, which increases…', 'As a result,…'] },
              { label: 'Suggestions', phrases: ['Households could…', 'One simple change is to…'] }
            ]},
            { type: 'teacher', text: 'Give students time to work out a draft plan with a partner or a group of 3. They can copy the template into their notebook, device or a shared doc. Show the sample plan (Answers) in the Reflection activity, after pairs finish. TB note: in the sample plan, Body 3’s evidence repeats Body 2’s (“Household food waste increases due to retailers encouraging consumers to buy in excess.”). The Answers use the Text C statement instead (“Many people do not realize the extent of their food waste…”), which matches Body 3’s topic sentence.' }
          ],
          answers: { title: 'Sample plan', items: [
            ['Intro', '<b>Background/Evidence:</b> Each year, approximately 1.3 billion tonnes of the food produced for us is either lost or wasted globally.<br><b>Thesis statement:</b> Consumers play a key role in the food waste problem because many are unaware of how much they waste and stores encourage overbuying, yet simple changes at home can help reduce this waste.'],
            ['Body 1', '<b>Topic sentence 1:</b> Many consumers waste food because they do not understand how much they throw away.<br><b>Evidence:</b> Consumers are often unaware or unconcerned about the level of food waste they generate. (more details from reading)<br><b>Examples:</b> data'],
            ['Body 2', '<b>Topic sentence 2:</b> Stores often promote buying in bulk or offer special deals that make people buy more than they need, which increases household food waste.<br><b>Evidence:</b> Household food waste increases due to retailers encouraging consumers to buy in excess.<br><b>Rhetorical function:</b> Causes and effects.'],
            ['Body 3', '<b>Topic sentence 3:</b> A common mistake is that many people think they waste very little food, even when they waste much more.<br><b>Evidence:</b> Many people do not realize the extent of their food waste, believing they waste hardly any. (Text C)<br><b>Rhetorical function:</b> Suggestions: how individual can reduce their food waste.'],
            ['Conclusion', 'Restate the thesis · A brief summary of the body paragraphs · Provide suggestions or predictions.']
          ]}
        },
        {
          id: 'c8', short: 'Reflection', minutes: 15, grouping: 'Pairs → alone',
          title: 'Reflection',
          goal: 'Improve your plan and choose one strategy for this afternoon.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: 'Open the <b>sample plan</b>: click <b>Answers</b> in Activity 7 (Draft plan). Compare it with your plan.' },
              { who: 'pair', text: 'Discuss the questions. Change your plan if you want to.' },
              { who: 'alone', text: 'Write your exit ticket.' }
            ]},
            { type: 'talk', title: 'Compare your plan with the sample plan', prompts: [
              'Are they similar or different?',
              'Are you happy with your plan, or would you like to make any changes?',
              'Does the sample plan use ideas from <b>all</b> the sources? Does yours?'
            ]},
            { type: 'key', title: 'The rubric rewards this', points: [
              'Use of Sources (66–70): “Synthesises relevant source ideas sufficiently from <b>all</b> input sources to support their argument; paraphrases most source ideas successfully”.'
            ]},
            { type: 'fields', fields: [
              { id: 'c8-1', label: 'One change I would make to my plan', placeholder: 'I would change … because …', rows: 2 },
              { id: 'c8-2', label: 'Exit ticket: the step I will use carefully this afternoon', placeholder: 'In the practice assessment, I will … (step no. __)', rows: 2 }
            ]},
            { type: 'teacher', text: 'Point out that the sample plan uses only a few statements. That is the skill: selecting, not using everything. Remind students to have lunch and come back ready for exam conditions.' }
          ],
          answers: { title: 'Model exit ticket', items: [
            ['Model', 'In the practice assessment, I will do step 3 carefully: for every note I take, I will ask “How does this help answer my question?” and cross out anything that doesn’t.']
          ]}
        }
      ]
    },

    /* ───────────────────────── STAGE 2 · 12A ───────────────────────── */
    {
      id: 'iwa', number: '02', code: '12A', minutes: 90,
      tone: 'clay', art: 'assessment',
      title: 'Integrated Writing Practice Assessment',
      subtitle: 'On Canvas · exam conditions',
      outcome: 'Plan and write an argument essay from three reading texts and a lecture in 1.5 hours, on your own.',
      activities: [
        {
          id: 'i1', short: 'Practice test', minutes: 90, grouping: 'Alone',
          title: 'Write the practice assessment',
          goal: 'Use this morning’s steps on your own, in 1.5 hours.',
          blocks: [
            { type: 'key', title: 'Exam conditions', tone: 'warn', points: [
              'The task is on <b>Canvas</b>. Follow the instructions there and from your teacher.',
              'Work <b>alone</b> and in <b>silence</b>. <b>No AI tools</b> of any kind.',
              'It is practice — but write as if it is the real assessment. Then your feedback will really help you.'
            ]},
            { type: 'checklist', id: 'i1c', title: 'Before you start', items: [
              'I have opened the practice assessment on Canvas and read the instructions.',
              'I have closed all other tabs and apps, including all AI tools.',
              'I know the word target and when I must submit.',
              'I have my note template ready: Text A, Text B, Text C, Lecture.',
              'I remember the 7 steps (Activity 6) and my exit ticket (Activity 8).'
            ]},
            { type: 'model', title: 'A suggested time plan (1.5 hours)', rows: [
              ['10 min', '<b>Analyse the question</b> — topic words, limiting words, rhetorical functions. Choose your position.'],
              ['25 min', '<b>Read and take notes</b> — only what helps answer the question. Keep author / source with each note.'],
              ['10 min', '<b>Plan</b> — thesis + one main idea per body paragraph + evidence from <b>all</b> sources.'],
              ['40 min', '<b>Write</b> — paraphrase; cite each source; link your paragraphs.'],
              ['5 min', '<b>Check</b> — does every paragraph answer the question? Fix confusing or off-topic parts.']
            ], note: 'This is a suggestion only. Always follow the timing in the Canvas instructions.' },
            { type: 'model', title: 'What the rubric looks for (66–70 band, official wording)', rows: [
              ['Argumentation', 'Develops mostly effective and logical arguments supported by relevant source material'],
              ['Use of Sources', 'Generally good synthesis and successful paraphrasing of sources; some appropriate use of different voices'],
              ['Connection of Ideas', 'Generally displays good connectivity; most structural and cohesive features are used effectively'],
              ['Vocabulary', 'Uses a good range of vocabulary with mostly accurate collocations; mostly suitable hedging'],
              ['Grammar', 'Uses a good range of grammatical structures with minor errors, meaning is mostly clear']
            ], note: 'If 50% or more of the text is lifted, the score for Use of Sources cannot be over 50.' },
            { type: 'teacher', text: 'Check Canvas and refer to instructions from DEC team. Exam conditions: no talking, no AI. Students should not use this app’s notes or plan from this morning during the assessment unless the DEC instructions allow it. After the assessment, remind students about tonight’s homework (feedback literacy self-reflection form, in Extra practice).' }
          ]
        }
      ]
    },

    /* ───────────────────────── STAGE 3 · 13A ───────────────────────── */
    {
      id: 'rapport', number: '03', code: '13A', minutes: 30,
      tone: 'amber', art: 'group',
      title: 'Building rapport',
      subtitle: 'Teacher-led session',
      outcome: 'Relax after the practice assessment and build connections with your classmates.',
      activities: [
        {
          id: 'r1', short: 'Building rapport', minutes: 30, grouping: 'Whole class',
          title: 'Welcome to building rapport!',
          goal: 'Get to know your classmates better and help build a supportive class.',
          blocks: [
            { type: 'key', title: 'What is this session?', points: [
              'The <b>Building rapport</b> sessions are dedicated to developing connections within our classroom.',
              '<b>Your teacher will plan and guide each session.</b> Follow their lead, stay engaged, and contribute positively.'
            ]},
            { type: 'steps', items: [
              { who: 'class', text: 'Listen to your teacher’s instructions for today’s activity.' },
              { who: 'pair', text: 'Talk, listen and ask follow-up questions. Everyone takes part.' }
            ]},
            { type: 'cards', title: 'Two optional ideas (your teacher may choose something else)', numbered: true, items: [
              { label: 'A dish from home', text: 'In pairs, describe a dish from your home country and what your family does with leftovers. Then introduce your partner’s dish to another pair.' },
              { label: 'Two truths and a lie', text: 'Write three short facts about your life or studies — two true, one false. Your group asks questions and guesses the lie.' }
            ]},
            { type: 'talk', title: 'Useful follow-up questions', prompts: [
              'Really? How did that happen?',
              'What do you like most about…?',
              'Is that common in your country?'
            ]},
            { type: 'teacher', text: 'The TB leaves this session to the teacher. The two ideas are optional and need no preparation. After a 1.5-hour exam, start with a quick, low-pressure check-in (“One word for how you feel now”). Avoid discussing the practice essay in detail here — reflection is tonight’s homework.' }
          ]
        }
      ]
    }
  ],

  /* ───────────── Homework and optional practice ───────────── */
  extras: [
    {
      id: 'x1', short: 'Feedback literacy', minutes: 30, grouping: 'Alone', category: 'Homework',
      title: '14A Homework: Feedback literacy',
      goal: 'Reflect on your response to the practice Integrated Writing Assessment, and make an action plan for the final Integrated Writing Assessment.',
      blocks: [
        { type: 'figure', src: 'assets/week3/feedback-literacy.svg', alt: 'Feedback literacy in three steps: appreciating feedback, making judgements, taking action.', caption: 'The three components of feedback literacy' },
        { type: 'key', title: 'Tonight you practise two components', points: [
          '<b>Making judgments</b> — reflecting on your response to the practice Integrated Writing Assessment. In other words, <b>evaluating your response.</b>',
          '<b>Taking action</b> — writing down exactly how you are going to further improve your writing in the final assessment. In other words, <b>making an action plan.</b>'
        ]},
        { type: 'steps', items: [
          { who: 'alone', text: 'Download the <b>self-reflection form</b> from Canvas onto your device, or print it out.' },
          { who: 'alone', text: 'Go to Canvas and find your essay. <b>Read it again.</b>' },
          { who: 'alone', text: 'Complete the form by ticking <b>YES</b> or <b>NO</b>. You can use the quick check below first.' },
          { who: 'alone', text: 'Complete the final section: write <b>exactly</b> what you will do to improve your writing in the final assessment. Save a copy of your form.' }
        ]},
        { type: 'grid', id: 'x1g', title: 'Quick check: my practice essay', columns: ['My answer'], options: ['Yes', 'No', 'Not sure'], rows: [
          'Argumentation · My thesis answers the question and I take a clear position.',
          'Argumentation · Each body paragraph has one main idea with supporting evidence.',
          'Use of Sources · I used ideas from <b>all</b> the input sources (Text A, B, C and the lecture).',
          'Use of Sources · I paraphrased — I did not copy long phrases from the texts.',
          'Use of Sources · I cited sources with APA (author, year).',
          'Connection of Ideas · I used topic sentences and linking words (e.g. cause-effect, contrast).',
          'Vocabulary · I used hedging language (e.g. may, could, tends to).',
          'Grammar · I checked my grammar and spelling in the last 5 minutes.'
        ]},
        { type: 'table', id: 'x1t', title: 'My action plan for the final Integrated Writing Assessment', columns: ['Rubric area', 'What exactly I will do', 'How I will practise / check'], rows: 3 },
        { type: 'model', title: 'Model action plan row', rows: [
          ['Rubric area', 'Use of Sources'],
          ['What exactly I will do', 'Use at least one idea from each of the four sources, and cite each one (author, year).'],
          ['How I will practise / check', 'In my plan, I will write the source next to every idea. Before I write, I will check that all four sources appear.']
        ]},
        { type: 'teacher', text: 'TB 14A: students download the form from Canvas (TB file link missing in the export). Check tomorrow (W3 D5) that it is done, and remind students they need the form in W4 D5, when they view teacher feedback on the practice assessment. The quick check is self-assessment only (no answer key).' }
      ]
    },
    {
      id: 'x2', short: 'Plan again', minutes: 15, grouping: 'Alone', category: 'Exam practice',
      title: 'Plan a different question in 15 minutes',
      goal: 'Practise analysing a question and planning quickly.',
      blocks: [
        { type: 'question', label: 'Sample question 4', text: 'Is consumer education the most effective method to reduce food waste in households?' },
        { type: 'steps', items: [
          { who: 'alone', text: 'Set a timer for <b>15 minutes</b>.' },
          { who: 'alone', text: '5 min: find the topic words, limiting words and rhetorical function. 10 min: write a thesis and three topic sentences.' },
          { who: 'alone', text: 'Use ideas from this week’s texts or the practice texts.' }
        ]},
        { type: 'sources', ids: ['nicastro', 'aboutthat', 'berti'] },
        { type: 'fields', fields: [
          { id: 'x2-1', label: 'Topic words · limiting words · rhetorical function', placeholder: 'Topic: … Limiting: … Function: …', rows: 2 },
          { id: 'x2-2', label: 'Thesis + three topic sentences', placeholder: 'Thesis: … Body 1: … Body 2: … Body 3: …', rows: 5 }
        ]}
      ],
      answers: { title: 'Success criteria', items: [
        ['Question', 'Limiting words: <i>consumer education</i>, <i>the most effective</i>, <i>in households</i>. Function: evaluate — compare education with other methods and take a position.'],
        ['Plan', 'Your thesis says <b>yes, no or partly</b>, with a reason. Each topic sentence gives one different main idea. You can name a source for each paragraph.']
      ]}
    }
  ],

  glossary: [
    ['criticality', 'Thinking carefully about sources: what they say, how useful they are, and how they connect to your own ideas.', 'Criticality: engaging with sources.'],
    ['synthesise', 'Bring ideas from different sources together to support one point.', 'Both Text A and the lecture show that…'],
    ['relevant', 'Directly connected to the question you are answering.', 'Pick information that is relevant to the question.'],
    ['limiting words', 'Words in a question that make the topic narrower.', '“At the household level” limits the question.'],
    ['rhetorical function', 'What a piece of writing does: describe, explain causes, evaluate, suggest solutions.', 'Body 2 explains causes and effects.'],
    ['thesis statement', 'One or two sentences that give your main answer to the question.', 'Consumers play a key role in the food waste problem because…'],
    ['to what extent', 'How much? The question wants your judgement: completely, partly, or not much.', 'To what extent are consumers responsible…?'],
    ['household', 'All the people who live together in one home.', 'Households are responsible for over 50% of all food waste.'],
    ['consumer', 'A person who buys and uses products, such as food.', 'Consumers waste organic food due to its appearance.'],
    ['in excess', 'More than is needed.', 'Retailers encourage consumers to buy in excess.'],
    ['exam conditions', 'Rules for a test: work alone, in silence, in a set time, with no AI.', 'You write the practice assessment under exam conditions.'],
    ['lift (text)', 'Copy words from a source without paraphrasing.', 'If 50% or more of the text is lifted, your score is limited.'],
    ['action plan', 'A list of exact steps you will take to improve.', 'My action plan: cite all four sources.'],
    ['rapport', 'A friendly, comfortable relationship between people.', 'Building rapport in our class.']
  ]
};
