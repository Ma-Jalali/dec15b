/* DEC10 · Week 5 · Day 3 — Use feedback, write together, discuss.
   Built from the Week 5 Teacher's Book (no revised weekly map for Week 5: TB order and timings).
   W5 D3. 7A Integrated Writing Practice Assessment feedback · 8A Integrated writing workshop (2) · 9A Seminar ·
   10A AST: Digital literacy and AI: Using AI for feedback homework.
   Protected texts (Hassi & Storti 2012, Van Krieken 2016, Crysell et al. 2023, Samples 5.1 and 5.2) are in sources.js and are never changed here.
   The essay question, the two possible structures and the seminar questions are copied exactly from the Teacher's Book.
   Activity ids are the keys of saved work — never rename them. */
window.DEC15_LESSON = {
  id: 'd10w5d3',
  week: 5,
  day: 3,
  title: 'Use feedback, write together, discuss',
  duration: 'About 4 hours + homework',
  question: 'Is cultural globalisation having a negative impact on culture?',
  questionKind: 'Essay question',
  questionLabel: 'This week’s essay question · you write it with your group today',
  wordTarget: '450–600 words',
  journey: 'Read your writing feedback and turn it into an exact action plan. Then write a whole essay with your group, compare it with two sample essays and summarise one to a partner. In the afternoon, Group 3 leads the Seminar and Group 4 gives its Opening Remarks. Tonight: text maps, and learn when AI feedback helps — and when it does not.',
  image: 'dec10/assets/week5/hero-d10w5d3.svg',
  imageAlt: 'Illustration: a glowing globe in the middle with a burger, sushi, a K-pop music note, a streetwear hoodie and a lantern orbiting it. On the left, three students write one essay together on a shared laptop with coloured cursors. On the right, a presenter shows an eco-tourism slide to a seminar group. A feedback card with ticks and an AI chat bubble float above.',
  finish: { title: 'Day 4', text: 'Interactive Discussion: discussion and negotiation · Using AI for feedback · Integrated writing workshop (3)' },
  goalShort: 'the Integrated Writing Assessment, your Seminar and the Interactive Presentation',
  sections: [
    /* ───────────────────────── 7A ───────────────────────── */
    {
      id: 'iwafb',
      number: '01',
      code: '7A',
      minutes: 60,
      tone: 'green',
      art: 'dec10/assets/week5/s-d3-iwafb.svg',
      title: 'Integrated Writing Practice Assessment feedback',
      subtitle: 'Read it, understand it, use it',
      outcome: 'You can interpret the feedback you received on your Integrated Writing Practice Assessment and make an action plan to improve your writing next time.',
      activities: [
        {
          id: 'a1',
          short: 'View feedback',
          minutes: 10,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d3-a1.svg',
          title: 'Activity 1 View your feedback',
          goal: 'Find your feedback and read it carefully — every word.',
          blocks: [
            {
              type: 'key',
              title: 'Feedback is useful only when you use it',
              points: [
                'Today you <b>appreciate</b> your feedback (understand what it means) and <b>take action</b> (decide what to do next).',
                'In your next lesson you write an essay with your group. That is your chance to <b>use</b> today’s action plan.'
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-feedback-route.svg',
              size: 'wide',
              alt: 'The route from feedback to action in four stops: 1 read the feedback, 2 match each comment to a rubric criterion, 3 decide exactly what you did well and what you could do better, 4 write an action plan for the group essay.',
              caption: 'Today’s route: <b>read → match → decide → act</b>.'
            },
            { type: 'do', n: 1, who: 'alone', text: 'Access the feedback on your <b>Week 4 Integrated Writing Practice Assessment</b> in the Student Portal (your teacher shows you where).' },
            { type: 'do', n: 2, who: 'alone', text: 'Read the feedback carefully. Read it twice. Underline any word you do not understand.' },
            {
              type: 'flip',
              title: 'Feedback words — what do they mean?',
              hint: 'Teachers often use these words. Guess the meaning, then turn the card.',
              items: [
                { front: 'Vague', back: 'Not clear or exact enough. The reader is not sure what you mean.', tag: 'Ideas' },
                { front: 'Unsupported claim', back: 'You say something is true, but you give no evidence or source.', tag: 'Argument' },
                { front: 'Too close to the source', back: 'Your sentence uses too many of the author’s words. Paraphrase it.', tag: 'Sources' },
                { front: 'Cohesion', back: 'How well your sentences and paragraphs link together.', tag: 'Flow' },
                { front: 'Topic sentence', back: 'The first sentence of a paragraph. It gives the one main idea.', tag: 'Structure' },
                { front: 'Register', back: 'How formal your language is. “Big” and “a lot of” are too informal for an essay.', tag: 'Vocabulary' },
                { front: 'Run-on sentence', back: 'Two sentences joined with no full stop or linking word.', tag: 'Grammar' },
                { front: 'Awkward', back: 'Correct words, but they sound unnatural together. Try a common collocation.', tag: 'Language' }
              ]
            },
            {
              type: 'scale',
              id: 'a1-feel',
              title: 'How do you feel about your feedback?',
              statement: 'My feedback was what I expected.',
              ends: ['Big surprise', 'Exactly what I expected'],
              mid: 'Partly'
            },
            {
              type: 'talk',
              title: 'Tell your partner (2 minutes)',
              prompts: [
                'What is <b>one thing</b> your teacher liked?',
                'Is there a comment you do not understand? Ask your partner what it might mean.',
                'Were you surprised? Why or why not?'
              ]
            },
            {
              type: 'language',
              title: 'Talk about your feedback',
              groups: [
                { label: 'Positive comments', phrases: ['My teacher said my … was clear / well organised.', 'One strength was …', 'I was pleased that …'] },
                { label: 'Things to improve', phrases: ['The main thing I need to work on is …', 'According to my feedback, I should …', 'I lost marks for …'] },
                { label: 'Not sure what it means', phrases: ['I’m not sure what “…” means here.', 'Do you think this comment is about … or …?', 'Could it mean that I need to …?'] }
              ]
            }
          ]
        },
        {
          id: 'a2',
          short: 'Match to rubric',
          minutes: 30,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d3-a2.svg',
          title: 'Activity 2 Apply the feedback to the rubric',
          goal: 'Link each comment to a criterion, then say exactly what you did well and what you could do better.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Go to the <b>Assessment Overview</b> on Canvas and review the rubric for the <b>Integrated Writing Assessment (IWA)</b>.' },
            {
              type: 'hotspot',
              src: 'dec10/assets/week5/d3-rubric-map.svg',
              size: 'wide',
              title: 'What does the teacher look at?',
              hint: 'Tap a number: what each area of the writing rubric looks for. Always check the exact words of the rubric on Canvas.',
              alt: 'Five areas of an essay under a magnifying glass: argumentation, use of sources, connection of ideas, vocabulary and grammar.',
              caption: 'Five areas your feedback usually talks about.',
              spots: [
                { x: 12, y: 46, label: '1', color: '#3f7a3a', title: 'Argumentation', text: 'Is your position clear from the introduction? Is it developed with good reasons and evidence? Do you consider the other side (counterargument) and answer it (refutation)?' },
                { x: 31, y: 46, label: '2', color: '#3a58a0', title: 'Use of sources', text: 'Do you use information from several sources to support your ideas? Is it paraphrased well, with the author and year? Do you add your own analysis?' },
                { x: 50, y: 46, label: '3', color: '#b07d12', title: 'Connection of ideas', text: 'Does each paragraph have one main idea and a topic sentence? Do linking phrases and old–new information make the writing flow?' },
                { x: 69, y: 46, label: '4', color: '#8a4f9e', title: 'Vocabulary', text: 'Are your words precise and academic? Do you use topic words (e.g. homogenisation, hybridisation) and good collocations?' },
                { x: 88, y: 46, label: '5', color: '#c4562f', title: 'Grammar', text: 'Do you use a range of sentence types? Are they accurate and clear, with only a few small errors?' }
              ]
            },
            { type: 'do', n: 2, who: 'alone', text: 'Match each piece of feedback to the corresponding criterion. Practise first: where does each comment belong?' },
            {
              type: 'sort',
              id: 'a2-sort',
              title: 'Which criterion is each comment about?',
              hint: 'Drag or tap each comment into a box. Then check.',
              buckets: [
                { label: 'Argumentation', letter: 'A' },
                { label: 'Use of sources', letter: 'S' },
                { label: 'Connection of ideas', letter: 'C' },
                { label: 'Vocabulary', letter: 'V' },
                { label: 'Grammar', letter: 'G' }
              ],
              items: [
                { text: 'Your position is not clear until the conclusion.', answer: 0, why: 'The reader must know your position early — that is argumentation.' },
                { text: 'You only give one side. Add a counterargument and answer it.', answer: 0 },
                { text: 'This sentence is too close to the original. Paraphrase it.', answer: 1 },
                { text: 'Good point — but whose idea is this? Add the author and year.', answer: 1 },
                { text: 'Use a linking phrase to show how these two ideas connect.', answer: 2 },
                { text: 'This paragraph has two main ideas. Keep one idea per paragraph.', answer: 2 },
                { text: '“Big” and “a lot of” are too informal — try “significant” and “numerous”.', answer: 3 },
                { text: 'Check the collocation: we “have an impact on”, not “make an impact to”.', answer: 3 },
                { text: '“Globalisation have changed …” → “Globalisation has changed …”', answer: 4, why: 'Subject–verb agreement is grammar.' },
                { text: 'Some of your sentences have no main verb.', answer: 4 }
              ]
            },
            { type: 'do', n: 3, who: 'alone', text: 'Now use <b>your own</b> feedback. For each criterion, decide what <b>exactly</b> you did well and what <b>exactly</b> you could do better. Copy a short quote from the feedback.' },
            {
              type: 'table',
              id: 'a2-t',
              title: 'My feedback on the rubric',
              columns: ['Criterion', 'What the feedback says (short quote)', 'What exactly I did well', 'What exactly I could do better'],
              fixed: ['Argumentation', 'Use of sources', 'Connection of ideas', 'Vocabulary', 'Grammar']
            },
            {
              type: 'model',
              title: 'Example: exact, not general',
              rows: [
                ['Too general', 'I did well in sources.'],
                ['Exact', 'I used <b>three sources</b> and always gave <b>the author and the year</b>, e.g. “Hassi and Storti (2012) argue that …”.'],
                ['Too general', 'My grammar could be better.'],
                ['Exact', 'In paragraph 2, <b>four sentences</b> had subject–verb agreement errors (“globalisation have”).']
              ]
            },
            { type: 'do', n: 4, who: 'pair', text: 'Explain your table to a partner. Your partner asks “What exactly do you mean?” for every general answer.' },
            {
              type: 'language',
              title: 'Explain your feedback to a classmate',
              groups: [
                { label: 'Strengths', phrases: ['For <b>argumentation</b>, I did well because …', 'My teacher noticed that I …', 'What worked well was the way I …'] },
                { label: 'Weaknesses', phrases: ['Where I lost marks was …', 'The comment on … shows that I need to …', 'I tend to … , so next time I will …'] },
                { label: 'Asking for detail', phrases: ['What exactly do you mean by “better”?', 'Can you give me an example from your essay?', 'Which paragraph was that in?'] },
                { label: 'Academic collocations', phrases: ['meet the criteria', 'address a weakness', 'develop an argument', 'support a claim with evidence', 'make a clear link'] }
              ]
            },
            { type: 'tip', text: 'Still not sure what a comment means? Ask your teacher now — they are available to help during this activity.' }
          ],
          answers: {
            title: 'Suggested answers',
            items: [
              ['Argumentation', 'Position not clear until the conclusion · only one side'],
              ['Use of sources', 'Too close to the original · whose idea is this?'],
              ['Connection of ideas', 'Linking phrase · two main ideas in one paragraph'],
              ['Vocabulary', 'Informal words · collocation'],
              ['Grammar', 'Subject–verb agreement · no main verb']
            ]
          }
        },
        {
          id: 'a3',
          short: 'Action plan',
          minutes: 20,
          grouping: 'Alone → Pair',
          art: 'dec10/assets/week5/v/v-d10w5d3-a3.svg',
          title: 'Activity 3 Make an action plan',
          goal: 'Write exactly what you will do again — and exactly what you will do differently — in the group essay.',
          blocks: [
            {
              type: 'key',
              title: 'Specific, not general',
              points: [
                '“Improve my grammar” is <b>not</b> an action. Nobody knows what to do.',
                'A good action says <b>what</b> exactly you will do, <b>where</b> in the essay, and <b>how</b> you will check it.'
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-specific.svg',
              size: 'wide',
              alt: 'A ladder from general to specific. Bottom: improve my writing. Middle: improve my grammar. Top: check that every sentence in my paragraph has a subject and a main verb before I share it with my group.',
              caption: 'Climb the ladder: the higher the step, the easier it is to act.'
            },
            {
              type: 'sort',
              id: 'a3-sort',
              title: 'Too general or specific?',
              buckets: [
                { label: 'Too general', letter: '✗' },
                { label: 'Specific — I can do it', letter: '✓' }
              ],
              items: [
                { text: 'Improve my grammar.', answer: 0 },
                { text: 'Write better.', answer: 0 },
                { text: 'Use more sources.', answer: 0 },
                { text: 'Make it flow.', answer: 0 },
                { text: 'Put my position in the last sentence of the introduction.', answer: 1 },
                { text: 'Give the author and year every time I use an idea from a source.', answer: 1 },
                { text: 'Start each body paragraph with a topic sentence that links to my thesis.', answer: 1 },
                { text: 'Check every “-s” on verbs after he / she / it / globalisation.', answer: 1 }
              ]
            },
            {
              type: 'pairs',
              title: 'From general to specific',
              hint: 'The highlighted words make each action specific.',
              items: [
                { from: 'Improve my grammar.', to: '[[Check that every sentence has a subject and a main verb]] before I share my paragraph.', tag: 'Grammar' },
                { from: 'Use more sources.', to: '[[Use at least two sources in each body paragraph]], with the author and year.', tag: 'Sources' },
                { from: 'Make my essay flow.', to: '[[Start each new sentence with old information]] and use one linking phrase between ideas.', tag: 'Connection' },
                { from: 'Better vocabulary.', to: '[[Replace “big”, “thing” and “a lot of”]] with words from my Week 5 vocabulary list.', tag: 'Vocabulary' }
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: 'Based on your answers to Questions 3 and 4 in Activity 2, write down:' },
            {
              type: 'fields',
              title: 'My action plan for the group essay',
              fields: [
                { id: 'a3-keep', label: 'Exactly what I am going to do again that I did well in my Week 4 Integrated Writing Practice Assessment', placeholder: 'I will again … (where? how?)', rows: 3 },
                { id: 'a3-change', label: 'Exactly what I am going to do that I did not do well in my Week 4 Integrated Writing Practice Assessment', placeholder: 'This time I will … (what exactly? where? how will I check?)', rows: 4 }
              ]
            },
            {
              type: 'checklist',
              id: 'a3-check',
              title: 'Is my action plan specific?',
              meter: ['ticked', 'Ready to use!'],
              items: [
                'It says exactly WHAT I will do.',
                'It says WHERE in the essay (introduction, topic sentences, citations …).',
                'It says HOW I will check it.',
                'I can do it in the next lesson (the group essay).'
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: 'Spin the wheel. Explain one part of your action plan to your partner in 30 seconds. Your partner says if it is specific enough.' },
            {
              type: 'spinner',
              id: 'a3-spin',
              title: 'Explain your plan',
              text: 'Spin both reels. Use the criterion and the sentence starter.',
              reels: [
                { label: 'Criterion', items: ['Argumentation', 'Use of sources', 'Connection of ideas', 'Vocabulary', 'Grammar'] },
                { label: 'Start with', items: ['One thing I will keep doing is …', 'This time, I am going to …', 'To check this, I will …', 'I lost marks because …, so …'] }
              ]
            },
            { type: 'tip', text: 'Keep your action plan open in the next lesson. When you write with your group, look at it after every paragraph.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 8A ───────────────────────── */
    {
      id: 'workshop',
      number: '02',
      code: '8A',
      minutes: 105,
      tone: 'plum',
      art: 'dec10/assets/week5/s-d3-workshop.svg',
      title: 'Integrated writing workshop (2)',
      subtitle: 'Plan, write and revise one essay — together',
      outcome: 'You understand better how to consolidate notes to answer an assigned question, work with a group to plan, write and revise an essay, structure an essay, and evaluate your writing by comparing it to a sample.',
      activities: [
        {
          id: 'b1',
          short: 'Discuss',
          minutes: 8,
          grouping: 'Groups of 3–4',
          art: 'dec10/assets/week5/v/v-d10w5d3-b1.svg',
          title: 'Answering the question · Activity 1 Discussion',
          goal: 'Agree on your group’s position — before anyone writes.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'You are going to work with a group (3 or 4 people) to write an essay (Integrated Writing) in response to this question:' },
            { type: 'question' },
            {
              type: 'key',
              title: 'Don’t write yet!',
              points: ['Now you only <b>share ideas</b> and agree on a position.', 'Use the notes you made for homework (from the reading, the listening and the mediation lesson).']
            },
            { type: 'sources', ids: ['threeh', 'w5listen', 'lovelocal'] },
            {
              type: 'scale',
              id: 'b1-me',
              title: 'Before you talk: where do you stand?',
              statement: 'Cultural globalisation is having a negative impact on culture.',
              ends: ['Strongly disagree', 'Strongly agree'],
              mid: 'Partly'
            },
            {
              type: 'spinner',
              id: 'b1-roles',
              title: 'Give everyone a role',
              text: 'Each person spins once. Keep your role for this discussion.',
              reels: [{ label: 'Role', items: ['Chair: keeps the group on the four questions', 'Note-taker: writes the group’s ideas', 'Source checker: “Which source says that?”', 'Devil’s advocate: gives the other side'] }]
            },
            {
              type: 'talk',
              title: 'Use the notes you made for homework to discuss the question with your group',
              prompts: [
                'What are some possible answers to this question?',
                'Try to come to an agreement about what your position will be in your joint essay.',
                'Consider: What are your main points to support your position?',
                'Consider your group’s ideas: What would be a good possible structure for an essay?'
              ]
            },
            {
              type: 'language',
              title: 'Agree on a position as a group',
              groups: [
                { label: 'Suggest', phrases: ['How about we argue that …?', 'What if our position is that globalisation is <b>mainly</b> / <b>not only</b> negative?', 'I’d suggest we focus on …'] },
                { label: 'Support with sources', phrases: ['Hassi and Storti (2012) talk about … , so …', 'The listening gave a good example of …', 'Crysell et al. (2023) would disagree, because …'] },
                { label: 'Disagree politely', phrases: ['I see your point, but …', 'I’m not sure the sources support that.', 'That’s true for food and fashion, but what about values?'] },
                { label: 'Reach agreement', phrases: ['So, are we all happy with …?', 'Can we agree on …?', 'Let’s go with … — it has the most evidence.', 'OK, our position is …'] }
              ]
            },
            {
              type: 'fields',
              fields: [{ id: 'b1-pos', label: 'Our group’s position (one sentence)', placeholder: 'We think cultural globalisation is … because …', rows: 2 }]
            }
          ]
        },
        {
          id: 'b2',
          short: 'Structure',
          minutes: 7,
          grouping: 'Groups of 3–4',
          art: 'dec10/assets/week5/v/v-d10w5d3-b2.svg',
          title: 'Activity 2 Possible structures/planning',
          goal: 'Choose a structure and add notes for each main idea to a shared document.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Here are two possible structures you might use to answer this essay question.' },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-structures.svg',
              size: 'wide',
              alt: 'Two possible structures. Structure 1, DISAGREE: Cultural globalisation is not only having a negative impact on culture (it’s not completely negative). Paragraph 1 (Counterargument – Negative Impact): Loss of unique culture. Paragraph 2 (Positive Impact): Blend of cultures leads to innovation and new cultural identities. Paragraph 3 (Not Negative Impacts): globalisation’s impacts are diverse and under-researched. Structure 2, AGREE: Cultural globalisation is having a negative impact on culture. Paragraph 1 (Negative Impact 1): One-sided influence / ‘Americanisation’. Paragraph 2 (Negative Impact 2): loss of traditional culture / “homogenisation”. Paragraph 3 (Counterargument – Positive Impact): blending different cultures leads to innovation.',
              caption: 'Structure 1 (disagree) and Structure 2 (agree).'
            },
            {
              type: 'tabs',
              title: 'The two structures',
              tabs: [
                {
                  label: 'Structure 1 · Disagree',
                  blocks: [{
                    type: 'model',
                    title: 'DISAGREE: Cultural globalisation <u>is not only having a negative</u> impact on culture (it’s not completely negative)',
                    rows: [
                      ['Paragraph 1', '(Counterargument- Negative Impact): Loss of unique culture'],
                      ['Paragraph 2', '(Positive Impact): Blend of cultures=> innovation & new cult. IDs'],
                      ['Paragraph 3', '(Not Negative Impacts): globalisation’s impacts are diverse & under-researched']
                    ]
                  }]
                },
                {
                  label: 'Structure 2 · Agree',
                  blocks: [{
                    type: 'model',
                    title: 'AGREE: Cultural globalisation <u>is having a negative</u> impact on culture',
                    rows: [
                      ['Paragraph 1', '(Negative Impact 1): One-sided influence /‘Americanisation’'],
                      ['Paragraph 2', '(Negative Impact 2): loss of traditional culture/ “homogenisation”'],
                      ['Paragraph 3', '(Counterargument- Positive Impact): blending different cultures=> innovation']
                    ]
                  }]
                }
              ]
            },
            { type: 'do', n: 2, who: 'group', text: 'With your group, choose a structure that best suits your own ideas. You can change the order of the ideas OR come up with your own structure using different main ideas if you like.' },
            { type: 'choose', id: 'b2-pick', title: 'Our structure', options: ['Structure 1 (Disagree)', 'Structure 2 (Agree)', 'Our own structure'] },
            { type: 'do', n: 3, who: 'group', text: 'Work together to add some notes for your group’s main ideas to a shared document.' },
            {
              type: 'table',
              id: 'b2-plan',
              title: 'Structure (add notes here)',
              columns: ['', 'Notes', 'Source(s) (author, year)'],
              fixed: ['Our position', 'Main Idea 1 (Paragraph 1)', 'Main Idea 2 (Paragraph 2)', 'Main Idea 3 (Paragraph 3)']
            },
            {
              type: 'language',
              title: 'Counterargument and refutation — useful phrases',
              groups: [
                { label: 'Give the other side', phrases: ['It could be argued that …', 'Some scholars claim that …', 'On the other hand, many argue that …', 'A common criticism of … is that …'] },
                { label: 'Answer it (refutation)', phrases: ['However, this view overlooks …', 'Although this may be true for …, …', 'This argument is weakened by the fact that …', 'Nevertheless, the evidence suggests that …'] }
              ]
            },
            { type: 'tip', text: 'No shared document yet? One person makes a Google Doc, clicks <b>Share</b>, sets it to <b>Editor</b> for everyone in the group, and sends the link to the group and to your teacher. Help: <a href="https://support.google.com/a/users/answer/9300311?hl=en" target="_blank" rel="noopener">set up a Google Doc</a> · <a href="https://support.google.com/docs/thread/11414824/how-do-i-make-a-doc-editable?hl=en" target="_blank" rel="noopener">make a Doc editable</a>.' }
          ]
        },
        {
          id: 'b3',
          short: 'Write together',
          minutes: 60,
          grouping: 'Groups of 3–4',
          art: 'dec10/assets/week5/v/v-d10w5d3-b3.svg',
          title: 'Joint writing',
          goal: 'Write the whole essay together: 450–600 words, one clear idea per paragraph, with in-text references.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-joint-flow.svg',
              size: 'wide',
              alt: 'How to write one essay as a group in 70 minutes: plan who writes what (5 minutes), write paragraphs in pairs (45 minutes), read the whole essay and join the paragraphs (10 minutes), check and comment on groupmates’ sections (10 minutes).',
              caption: 'One essay, one shared document, 70 minutes.'
            },
            {
              type: 'contract',
              id: 'b3-plan',
              title: 'Our joint writing plan',
              intro: 'Decide who writes what. Write paragraphs in pairs if you can — then you have to explain and agree on your language choices.',
              fields: [
                { id: 'b3-who-intro', label: 'Introduction', placeholder: 'Names' },
                { id: 'b3-who-p1', label: 'Body Paragraph 1', placeholder: 'Names' },
                { id: 'b3-who-p2', label: 'Body Paragraph 2', placeholder: 'Names' },
                { id: 'b3-who-p3', label: 'Body Paragraph 3', placeholder: 'Names' },
                { id: 'b3-who-concl', label: 'Conclusion', placeholder: 'Names' },
                { id: 'b3-who-check', label: 'Citations and word count checker', placeholder: 'Name' }
              ],
              signers: 4
            },
            { type: 'do', n: 1, who: 'group', text: 'Now work together to write the essay.' },
            {
              type: 'checklist',
              id: 'b3-check',
              title: 'While you write',
              meter: ['done', 'Great essay habits!'],
              items: [
                'Consider your reflections and the feedback from your previous writing task and put them to use in today’s joint writing.',
                'Look back at Essay Sample 3.1 to help you structure your Introduction and Conclusion.',
                'Make sure your writing is cohesive and that each paragraph has one clear main idea.',
                'Include a clear topic sentence and use linking phrases and old-new information links so that your writing flows smoothly.',
                'Include in-text references where appropriate (Hassi & Storti, 2012; Crysell et al., 2023; Van Krieken, 2016).',
                'Use your notes and think about how you will include the paraphrased information in your paragraph.',
                'If you have time, look back at the sources to find the original information and check that you have represented the true meaning of the author.'
              ]
            },
            {
              type: 'hotspot',
              src: 'dec10/assets/week5/d3-paragraph.svg',
              size: 'wide',
              title: 'Build a body paragraph',
              hint: 'Tap each number to see what goes in that part of the paragraph.',
              alt: 'A body paragraph built like a tower of five blocks: topic sentence, explanation with a source, example, consequence (so…), and a link back to the thesis. Arrows show old–new information: the end of one sentence becomes the start of the next.',
              caption: 'Topic sentence → evidence → example → so what? → link.',
              spots: [
                { x: 22, y: 17, label: '1', color: '#7a4a8c', title: 'Topic sentence', text: 'One main idea that links to your thesis. E.g. “One positive impact of globalisation is that …”' },
                { x: 22, y: 34, label: '2', color: '#3a58a0', title: 'Explanation + source', text: 'Explain the idea with paraphrased evidence: “According to Van Krieken (2016), …”, “Hassi and Storti (2012) describe …”.' },
                { x: 22, y: 51, label: '3', color: '#2b776e', title: 'Example', text: 'A real example from a source: “For instance, …”, “One example of this is …”.' },
                { x: 22, y: 68, label: '4', color: '#b0512a', title: 'So what?', text: 'Show the consequence: “Consequently, …”, “As a result, …”, “This means that …”.' },
                { x: 22, y: 85, label: '5', color: '#985c0e', title: 'Link back', text: 'Connect to your position: “Ultimately, …”, “Clearly, …”.' },
                { x: 73, y: 50, label: '6', color: '#7a4a8c', title: 'Old → new information', text: 'Start a new sentence with something the reader already knows (old), then add the new idea. E.g. “… a blend of cultures. <b>This blending</b> creates new identities.”' }
              ]
            },
            {
              type: 'fields',
              id: 'b3-essay',
              send: true,
              sendLabel: 'Share with my group',
              title: 'Joint Construction (Essay Template) — your copy',
              fields: [
                { id: 'b3-members', label: 'Group Members', rows: 1, placeholder: 'Names and group number' },
                { id: 'b3-struct', label: 'Structure (add notes here) — Main Idea 1 · Main Idea 2 · Main Idea 3', rows: 3, placeholder: 'Main Idea 1 (Paragraph 1): …' },
                { id: 'b3-intro', label: 'Introduction', rows: 6, placeholder: 'Write here' },
                { id: 'b3-p1', label: 'Body Paragraph 1', rows: 7, placeholder: 'Write here' },
                { id: 'b3-p2', label: 'Body Paragraph 2', rows: 7, placeholder: 'Write here' },
                { id: 'b3-p3', label: 'Body Paragraph 3', rows: 7, placeholder: 'Write here' },
                { id: 'b3-concl', label: 'Conclusion', rows: 5, placeholder: 'Write here' }
              ]
            },
            {
              type: 'detect',
              id: 'b3-thesis',
              title: 'Test your thesis statement',
              hint: 'Paste or type your group’s thesis. The lights turn on when it has each part.',
              checks: [
                { label: 'Essay stance phrase', color: '#7a4a8c', any: ['this essay', 'essay argues', 'essay asserts', 'essay will', 'contend', 'challenge'] },
                { label: 'Answers the question', color: '#3a58a0', any: ['negative', 'positive', 'impact', 'influence'] },
                { label: 'Gives reasons', color: '#2f9a63', any: ['because', 'since', 'due to', 'which', 'as it', 'as they', 'as the'] }
              ],
              avoid: [{ label: 'Avoid “I think” in an essay', any: ['i think', 'i believe', 'in my opinion'] }],
              items: [{ task: 'Our thesis statement (the last sentence(s) of the introduction)', rows: 3, placeholder: 'This essay argues that cultural globalisation … because …', model: 'This essay argues that cultural globalisation is mainly having a negative impact on culture, because it spreads one dominant culture and weakens local traditions.' }]
            },
            {
              type: 'language',
              title: 'Academic language for your joint essay',
              groups: [
                { label: 'Introduction', phrases: ['In today’s interconnected world, …', '… refers to …', 'While … , it also raises concerns about …', 'This essay argues / asserts that …', 'This essay will challenge the view that …'] },
                { label: 'Topic sentences', phrases: ['One major negative impact of … is …', 'Another reason why … is that …', 'A common criticism of globalisation is that …', 'One positive impact of … is that …'] },
                { label: 'Reporting sources', phrases: ['Hassi and Storti (2012) argue that …', 'According to Van Krieken (2016), …', 'As Crysell et al. (2023) point out, …', '… (Hassi & Storti, 2012; Van Krieken, 2016).'] },
                { label: 'Cause and effect', phrases: ['As a result, …', 'Consequently, …', '… which contributes to …', '… thus undermining …', '… can lead to …'] },
                { label: 'Hedging (careful claims)', phrases: ['… can / may lead to …', '… tends to …', 'It could be argued that …', '… is likely to …', 'some / many (not all)'] },
                { label: 'Conclusion', phrases: ['In conclusion, this essay has argued that …', 'In summary, …', 'Rather than …, … is needed.', 'It is essential that …'] }
              ]
            },
            {
              type: 'language',
              title: 'Write together — negotiate your words',
              groups: [
                { label: 'Suggest a change', phrases: ['What if we say “…” instead?', 'Shall we start this sentence with …?', 'I think “predominantly” sounds more academic than “mostly”.'] },
                { label: 'Explain your choice', phrases: ['I chose this word because …', 'This link shows the reader that …', 'We need a source here — who said this?'] },
                { label: 'Agree / move on', phrases: ['Good idea, let’s change it.', 'Let’s keep both and decide at the end.', 'OK, that paragraph is done. Next!'] }
              ]
            },
            { type: 'tip', text: 'Write in English from the start — no translating and no AI. This is practice for the real Integrated Writing Assessment, where you write on your own.' }
          ]
        },
        {
          id: 'b4',
          short: 'Check & comment',
          minutes: 10,
          grouping: 'Groups of 3–4',
          art: 'dec10/assets/week5/v/v-d10w5d3-b4.svg',
          title: 'Joint writing · Check your groupmates’ sections',
          goal: 'If you finish before your groupmates, check their sections and comment on possible improvements.',
          blocks: [
            { type: 'do', n: 2, who: 'alone', text: 'If you finish before your groupmates, check their sections and comment on possible improvements. Use the comment tool in your shared document.' },
            { type: 'do', n: 3, who: 'alone', text: 'Warm up your eyes: in this practice paragraph, tap the words that <b>link</b> the ideas (linking phrases and old–new links).' },
            {
              type: 'spot',
              id: 'b4-spot',
              title: 'Find the links',
              label: 'Linking phrases and old–new links',
              hint: 'There are five. Tap them, then check.',
              paras: [
                'Globalisation has made it easier for [[films]], music and food to travel across borders. [[*As a result]], young people in many countries now enjoy the same [[global brands]]. [[*However]], this does not always mean that [[local traditions]] disappear. Hassi and Storti (2012) argue that cultures often mix global and local elements, a process they call [[hybridisation]]. [[*This process]] can create new and unique forms of culture. [[*For example]], a local café may serve a burger with traditional spices. [[*Therefore]], the effects of globalisation are not only negative.'
              ]
            },
            {
              type: 'checklist',
              id: 'b4-check',
              title: 'Check a groupmate’s paragraph',
              items: [
                'There is a clear topic sentence with ONE main idea.',
                'Every idea from a source has the author and year.',
                'The paraphrase keeps the true meaning of the author.',
                'Linking phrases show how the ideas connect.',
                'The paragraph links back to the group’s position.',
                'The whole essay is 450–600 words.'
              ]
            },
            {
              type: 'language',
              title: 'Polite comments in a shared document',
              groups: [
                { label: 'Praise first', phrases: ['Nice topic sentence — very clear!', 'Great use of Van Krieken here.', 'This example really supports the point.'] },
                { label: 'Suggest', phrases: ['Maybe add a linking word here, e.g. “Consequently”?', 'Could we add the year after Hassi and Storti?', 'Does this sentence belong in paragraph 2?', 'Suggestion: “has led to” instead of “led to”?'] },
                { label: 'Ask', phrases: ['Which source is this from?', 'What do you mean by “…”?', 'Is this too close to the original text?'] },
                { label: 'Reply to a comment', phrases: ['Good catch, fixed!', 'Thanks — I changed it to …', 'I’m not sure — let’s ask the group.'] }
              ]
            },
            {
              type: 'talk',
              title: 'Quick group check (2 minutes)',
              prompts: ['Which paragraph is the strongest? Why?', 'Did you all use your action plans from 7A? Show one example.']
            }
          ],
          answers: { title: 'Answers: the five links', items: [['Linking phrases', 'As a result · However · For example · Therefore'], ['Old–new link', 'This process (it points back to “hybridisation”)']] }
        },
        {
          id: 'b5',
          short: 'Sample essays',
          minutes: 10,
          grouping: 'Pair (A + B)',
          art: 'dec10/assets/week5/v/v-d10w5d3-b5.svg',
          title: 'Sample Essay Structure',
          goal: 'Skim a sample essay and match it to its structure.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Work with a partner (A and B). <b>Student A:</b> Skim read Sample 5.1. <b>Student B:</b> Skim read Sample 5.2. Just read your own sample for now.' },
            { type: 'sources', ids: ['s51', 's52'] },
            { type: 'do', n: 2, who: 'pair', text: 'Before we wrote our joint writing, we looked at 2 possible structures for this essay. Look at the two structures below and match the structure to the essay you just read.' },
            {
              type: 'cards',
              title: 'The two structures',
              items: [
                { label: 'Structure 1', text: '<b>DISAGREE:</b> Cultural globalisation is having <b>varied impacts</b> on culture (but they are <b>not all negative</b>)<br><b>Paragraph 1</b> (Counterargument- Negative Impact): Loss of unique culture<br><b>Paragraph 2</b> (Positive Impact): Blend of cultures=> innovation & new cult. IDs<br><b>Paragraph 3</b> (Not Negative Impacts): globalisation’s impacts are diverse & under-researched' },
                { label: 'Structure 2', text: '<b>AGREE:</b> Cultural globalisation <b><u>is having a negative</u></b> impact on culture<br><b>Paragraph 1</b> (Negative Impact 1): One-sided influence /‘Americanisation’<br><b>Paragraph 2</b> (Negative Impact 2): loss of traditional culture/ “homogenisation”<br><b>Paragraph 3</b>: (Counterargument- Positive Impact): blending different cultures=> innovation' }
              ]
            },
            {
              type: 'bet',
              id: 'b5-bet',
              title: 'Match the sample to its structure — how sure are you?',
              items: [
                { q: 'Sample 5.1 follows …', options: ['Structure 1', 'Structure 2'], answer: 'Structure 2', why: 'Sample 5.1 agrees: “This essay asserts that cultural globalisation predominantly exerts a negative influence on traditional cultures.”' },
                { q: 'Sample 5.2 follows …', options: ['Structure 1', 'Structure 2'], answer: 'Structure 1', why: 'Sample 5.2 disagrees: “This essay will challenge the belief that cultural globalisation has a solely negative impact on world cultures.”' },
                { q: 'Where does each writer put the counterargument?', options: ['Sample 5.1: last body paragraph · Sample 5.2: first body paragraph', 'Both put it in the introduction'], answer: 'Sample 5.1: last body paragraph · Sample 5.2: first body paragraph' }
              ]
            },
            { type: 'talk', title: 'Tell your partner', prompts: ['Which words in the introduction told you the writer’s position?'] }
          ],
          answers: { title: 'Answers', items: [['Sample 5.1', 'Structure 2'], ['Sample 5.2', 'Structure 1']] }
        },
        {
          id: 'b6',
          short: 'Summarise & compare',
          minutes: 10,
          grouping: 'Pair (A + B)',
          art: 'dec10/assets/week5/v/v-d10w5d3-b6.svg',
          title: 'Summary/Comparison',
          goal: 'Summarise your sample without looking — then compare it with your group essay.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'After you have finished, summarise the essay you read to your partner. Focus on summarising the writer’s <b>thesis</b> and <b>main supporting reasons</b>. Try not to look back at the essay. You can use the structures (from Activity 3) to help you.' },
            {
              type: 'language',
              title: 'Summarise an essay out loud',
              groups: [
                { label: 'The thesis', phrases: ['The writer’s main argument is that …', 'The essay takes the position that …', 'Basically, the writer agrees / disagrees that …'] },
                { label: 'The reasons', phrases: ['The first reason is that …', 'To support this, the writer uses … (e.g. Van Krieken)', 'The writer also points out that …'] },
                { label: 'The other side', phrases: ['The writer accepts that … , but argues that …', 'The counterargument is … ; the writer answers it by …'] },
                { label: 'Check your partner understood', phrases: ['Does that make sense?', 'Do you want me to go over the second point again?'] }
              ]
            },
            { type: 'do', n: 2, who: 'pair', text: 'Also discuss:' },
            {
              type: 'talk',
              prompts: [
                'Did you follow one of these structures with your group in the joint writing?',
                'Did you present similar main ideas?'
              ]
            },
            {
              type: 'fields',
              fields: [{ id: 'b6-sum', label: 'My sample in two sentences (thesis + main reasons)', rows: 3, placeholder: 'Sample 5.… argues that … The main reasons are …' }]
            },
            {
              type: 'key',
              title: 'After class — before tomorrow’s class (Text maps)',
              points: [
                'Read both samples (Sample 5.1 and Sample 5.2) carefully.',
                'Look at the text maps for each sample in the Writing section of your booklet. The text maps show you how the ideas all link to each other to develop the overall argument of the essay.',
                'Fill in the grey spaces in each text map. These spaces show where there is information missing about the main points and how these ideas connect within a paragraph. The first few have been done as examples.'
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-text-map.svg',
              size: 'wide',
              alt: 'How to read a text map: each box is one idea from the essay. The words between the boxes show how the ideas connect: SO (a result), BUT (a contrast or refutation), BECAUSE (a reason), AND (one more point), EXAMPLE and EXPLANATION (evidence). The words in brackets are the writer’s real phrases, e.g. SO (“Consequently”).',
              caption: 'Text maps: every arrow is a link word from the essay.'
            },
            {
              type: 'tabs',
              title: 'Week 5 sample text maps — fill in the missing information',
              tabs: [
                {
                  label: 'Sample 5.1 · AGREE',
                  blocks: [
                    { type: 'tip', text: 'Done for you: <b>Negative Impact 1</b> — US culture = dominant · EXPLANATION: ‘Americanisation’ and ‘American hegemony’ = US monopoly on entertainment, media & fashion · EXAMPLE: McDonalds and Coca-Cola = omnipresent.' },
                    {
                      type: 'table',
                      id: 'b6-tm1',
                      title: 'Sample 5.1: AGREE — missing information',
                      columns: ['Link (the writer’s words)', 'Missing information (notes)'],
                      fixed: [
                        'Intro · Background',
                        'Intro · SO (“led to”)',
                        'Intro · SO (“has spurred”)',
                        'Intro · BUT (“While…. it also raises significant concerns…”)',
                        'Negative Impact 1 · SO (“Consequently”)',
                        'Negative Impact 1 · SO (“thus”)',
                        'Negative Impact 1 · Counterargument',
                        'Negative Impact 1 · EXAMPLE (“like”)',
                        'Negative Impact 1 · BUT (“Even if.. some.., other.. still..”)',
                        'Negative Impact 2 · main point',
                        'Negative Impact 2 · SO (“through…”)',
                        'Negative Impact 2 · CONSEQUENCE/ EXAMPLE (“As a result...for instance”)',
                        'Negative Impact 2 · SO (“which contributes to”)',
                        'Negative Impact 2 · SO (“Ultimately...can lead to”)',
                        'Positive Impact · BUT (Counterargument) (“On the other hand, many argue that... can be seen to”)',
                        'Positive Impact · EXPLANATION (Evidence) (“Some scholars argue that”)',
                        'Positive Impact · BUT (Refutation) (“However”)',
                        'Positive Impact · AND (“and”)',
                        'Positive Impact · SO (“making them”)',
                        'Conclusion · BECAUSE (“as”)',
                        'Conclusion · IMPLICATIONS (“It is imperative that…”)',
                        'Conclusion · SO…NOT (“to prevent”)'
                      ]
                    }
                  ]
                },
                {
                  label: 'Sample 5.2 · DISAGREE',
                  blocks: [
                    { type: 'tip', text: 'Done for you: <b>Loss of unique culture</b> — SO: Globalisation => local/traditional cultures lose uniqueness · EXPLANATION: homogenised world — cultures more similar & dominant cultures replace traditional ones · EXAMPLE/DEFINITION: Coca-Cola & McDonalds (globally ubiquitous) = ‘Americanisation’.' },
                    {
                      type: 'table',
                      id: 'b6-tm2',
                      title: 'Sample 5.2: DISAGREE — missing information',
                      columns: ['Link (the writer’s words)', 'Missing information (notes)'],
                      fixed: [
                        'Intro · DEFINITION (“…refers to…”)',
                        'Intro · SO (“often seen as leading to…”)',
                        'Intro · SO (“Critics argue that this process results in… creating…”)',
                        'Intro · BUT (Refutation) (“However…”)',
                        'Loss of unique culture · BUT (Refutation/Evidence) (“However… rejects the notion of… as being…”)',
                        'Loss of unique culture · AND (“Additionally,.... argue that… are commonly cited examples of...”)',
                        'Loss of unique culture · BUT (“are only…”)',
                        'Loss of unique culture · AND',
                        'Loss of unique culture · SO (“Ultimately…”)',
                        'Loss of unique culture · BECAUSE (“as...”)',
                        'Blend of cultures · SO (“One positive impact of… is that… can prompt”)',
                        'Blend of cultures · DEFINITION (“is termed...”)',
                        'Blend of cultures · BECAUSE (“and is being utilised by… to...”)',
                        'Blend of cultures · EXAMPLE (“One example of this is... which...”)',
                        'Blend of cultures · SO (“creates...”)',
                        'Blend of cultures · SO (“which can be seen to...”)',
                        'Diverse & under-researched · BECAUSE (“Another reason why... is that…”)',
                        'Diverse & under-researched · EXPLANATION (Evidence) (“According to…”)',
                        'Diverse & under-researched · EXAMPLE (“For instance…”)',
                        'Diverse & under-researched · EXPLANATION (Evidence) (“…categorise… as… showing how…. highlighting…”)',
                        'Diverse & under-researched · SO (“Clearly...”)',
                        'Diverse & under-researched · SO (“and there is insufficient… to…”)',
                        'Conclusion · IMPLICATIONS (“Rather than…, ...is needed plus …”)'
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          answers: {
            title: 'Suggested answers for the text maps (your notes can be shorter)',
            items: [
              ['5.1 Intro', 'Background: advances in technology + more international travel · SO: a more interconnected, globalised world; ideas, values and behaviour cross borders (Van Krieken, 2016) · SO: economic growth & global collaboration · BUT: concerns about the impact on cultural identities'],
              ['5.1 Negative Impact 1', 'SO: American values & standards imposed on consumers · SO: their own traditions undermined · Counterargument: Americanisation less of a concern in some developing areas with growing global influence · EXAMPLE: some Asian countries (Crysell et al., 2023) · BUT: other less developed regions probably still left behind'],
              ['5.1 Negative Impact 2', 'Traditional cultures can lose their unique identity · SO: internet, travel & migration → local identities replaced by a global culture (same brands, fashion, music, entertainment) · CONSEQUENCE: in Asia, young people torn between cultural pride and being global citizens · SO: global pull too strong → homogenised world, cultures more alike · SO: erosion of unique cultural elements & traditions'],
              ['5.1 Positive Impact', 'BUT: globalisation → diversity & innovation by blending cultures · EXPLANATION: multi-directional exchange → societies blend external artifacts with traditional practices · BUT: the exchange is unbalanced · AND: countries that are not wealthy or politically stable more likely to adopt outside influence (Van Krieken, 2016) · SO: more vulnerable to culture loss'],
              ['5.1 Conclusion', 'BECAUSE: dominance of American norms & values → homogenised global culture at the expense of local traditions · IMPLICATIONS: international policies & practices must evolve to protect and nurture diverse cultural traditions · SO…NOT: further cultural loss in the future'],
              ['5.2 Intro', 'DEFINITION: rapid movement of ideas, attitudes & values across borders · SO: a more connected world · SO: cultural homogenisation → world dominated by American values, overshadowing local cultures · BUT: this view simplifies the complex interactions when cultures meet'],
              ['5.2 Loss of unique culture', 'BUT: Crysell et al. (2023): “Americanisation” is outdated, esp. in Asia · AND: fashion, food & entertainment = common examples of homogenisation · BUT: only superficial cultural artifacts · AND: essence of cultural identity unchanged — traditional values & beliefs upheld · SO: the erosion theory is inaccurate · BECAUSE: it ignores the complexity, resilience & fluidity of culture (Hassi & Storti, 2012)'],
              ['5.2 Blend of cultures', 'SO: a blend of cultures → innovation & new cultural identities · DEFINITION: “cultural hybridisation” = global + local facets of culture · BECAUSE: young people use it to express individuality, break stereotypes and keep cultural pride (Crysell et al., 2023) · EXAMPLE: Sankuanz, Chinese streetwear blending international trends & local fashion · SO: many unique blends of old & new cultures · SO: enhance & diversify cultures'],
              ['5.2 Diverse & under-researched', 'BECAUSE: effects are diverse & under-researched · EXPLANATION: cultures evolve at varying speeds & in diverse ways (Van Krieken, 2016) · EXAMPLE: weaker economies / political instability → more open to outside influence · EXPLANATION: convergence, hybridisation & differentiation → cultures adapt, blend or resist (Hassi & Storti, 2012) · SO: no one uniform impact · SO: not enough research on long-term effects → unfair to call it negative'],
              ['5.2 Conclusion', 'IMPLICATIONS: see globalisation’s potential for cultural enrichment, not as a threat · plus more nuanced research to understand its implications']
            ]
          }
        }
      ]
    },
