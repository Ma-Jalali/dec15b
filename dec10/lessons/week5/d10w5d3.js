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

    /* ───────────────────────── 9A ───────────────────────── */
    {
      id: 'seminar',
      number: '03',
      code: '9A',
      minutes: 75,
      tone: 'teal',
      art: 'dec10/assets/week5/s-d3-seminar.svg',
      title: 'Seminar',
      subtitle: 'Group 3 leads the Seminar · Group 4 opens',
      outcome: 'You experience delivering a structured presentation to an audience, summarise and paraphrase information and viewpoints from sources, practise a range of speaking skills in a discussion, and make judgments about your peers’ work.',
      activities: [
        {
          id: 'c1',
          short: 'The steps',
          minutes: 5,
          grouping: 'Class',
          art: 'dec10/assets/week5/v/v-d10w5d3-c1.svg',
          title: 'Group 3 Seminar presentation, discussion and feedback · Review the steps',
          goal: 'Know what Group 3 does and what you do — in all four parts.',
          blocks: [
            { type: 'do', n: 1, who: 'class', text: 'Seminar Group 3 will deliver today’s Seminar Presentation (10–12 minutes) in response to this question:' },
            { type: 'model', title: 'Seminar Group 3’s question', text: '<b><i>How can eco-tourism in [your chosen country] be managed to both support conservation and benefit local communities?</i></b>' },
            {
              type: 'hotspot',
              src: 'dec10/assets/week5/d3-seminar-flow.svg',
              size: 'wide',
              title: 'Review the steps',
              hint: 'Tap each part: what Group 3 does (top) and what the rest of the class does (bottom).',
              alt: 'The Seminar in four parts, about 40 minutes. Part 1: Group 3 presents for 10–12 minutes; the class listens and thinks of feedback. Part 2: the class discusses two questions for 10 minutes; each presenter sits with one group and only listens. Part 3: presenters summarise each group’s discussion in 1–2 minutes. Part 4: Group 3 gets feedback from the teacher; the class discusses and prepares peer feedback.',
              caption: 'The Seminar: four parts, about 40 minutes.',
              spots: [
                { x: 14, y: 30, label: '1', color: '#2b776e', title: 'Part 1 · Presentation', text: '<b>Group 3:</b> give your 10–12-minute presentation: a brief outline of (a) the class reactions/questions and (b) the focus you selected (2–3 minutes); a summary of your research (8–10 minutes); introduce two thought-provoking questions.<br><b>The rest of the class:</b> sit in your seminar groups, download the Peer and Teacher Feedback Tool, and think of feedback FOR THE GROUP.' },
                { x: 38, y: 30, label: '2', color: '#3a58a0', title: 'Part 2 · Discussion', text: '<b>Group 3:</b> one presenter sits with one discussion group. Listen and take notes for your summary. Do not participate in discussion!<br><b>The rest of the class:</b> discuss the two questions for 10 minutes.' },
                { x: 62, y: 30, label: '3', color: '#b07d12', title: 'Part 3 · Summary', text: '<b>Group 3:</b> present a 1–2-minute summary of the main points of each group’s discussion.<br><b>The rest of the class:</b> listen to the summary.' },
                { x: 86, y: 30, label: '4', color: '#8a4f9e', title: 'Part 4 · Feedback', text: '<b>Group 3:</b> sit with your teacher and take notes on the feedback. Ask for clarification.<br><b>The rest of the class:</b> discuss your feedback with the Feedback Tool, decide how to deliver it (video / audio / on the form) and upload it to Group 3’s Portfolio BY THE END OF TODAY — only ONE group member uploads.' }
              ]
            },
            {
              type: 'sort',
              id: 'c1-sort',
              title: 'Who does it?',
              buckets: [{ label: 'Seminar Group 3', letter: 'G3' }, { label: 'The rest of the class', letter: 'All' }],
              items: [
                { text: 'Give a 10–12-minute presentation.', answer: 0 },
                { text: 'Introduce two thought-provoking questions.', answer: 0 },
                { text: 'Listen to a discussion and take notes — do not join in.', answer: 0 },
                { text: 'Summarise each group’s discussion in 1–2 minutes.', answer: 0 },
                { text: 'Download the Peer and Teacher Feedback Tool.', answer: 1 },
                { text: 'Discuss the two questions for 10 minutes.', answer: 1 },
                { text: 'Upload ONE group feedback to the presenting group’s Portfolio by the end of today.', answer: 1 }
              ]
            },
            { type: 'download', id: 'feedback-tool', note: 'Download it now. The tool is general: mark <b>N/A</b> where a part does not fit (for example <b>Question & answer</b> is for Research Summary Presentations, not Seminars). You can add comments for individual presenters on pronunciation and language.' }
          ]
        },
        {
          id: 'c2',
          short: 'Part 1 · Listen',
          minutes: 12,
          grouping: 'Seminar groups',
          art: 'dec10/assets/week5/v/v-d10w5d3-c2.svg',
          title: 'Group 3: Begin the Seminar Presentation · Part 1',
          goal: 'Follow the presentation and collect feedback ideas for the group.',
          blocks: [
            { type: 'do', n: 2, who: 'class', text: 'Group 3: Begin the Seminar Presentation and Discussion.' },
            { type: 'do', n: 3, who: 'alone', text: 'As you listen to the Seminar Presentation, think of what feedback to provide FOR THE GROUP. Take short notes.' },
            {
              type: 'table',
              id: 'c2-notes',
              title: 'Listening notes',
              columns: ['Part of the talk', 'What they said (notes)', 'Feedback idea for the group'],
              fixed: ['Class reactions/questions + their focus (2–3 min)', 'Research summary · point 1', 'Research summary · point 2', 'Research summary · point 3', 'The two discussion questions']
            },
            {
              type: 'language',
              title: 'Notes for feedback — quick phrases',
              groups: [
                { label: 'Content', phrases: ['clear focus from the Discussion Board', 'good evidence for …', 'needs a source for …', 'link to local communities?'] },
                { label: 'Delivery', phrases: ['good eye contact', 'read from slides', 'smooth handover', 'clear chunking / stress'] },
                { label: 'Note symbols', phrases: ['✓ = good', '? = unclear', '→ = leads to', '+ = add more', 'e.g. = example'] }
              ]
            },
            { type: 'tip', text: 'Write the two discussion questions word for word. You need them for Part 2.' }
          ]
        },
        {
          id: 'c3',
          short: 'Part 2 · Discuss',
          minutes: 10,
          grouping: 'Seminar groups',
          art: 'dec10/assets/week5/v/v-d10w5d3-c3.svg',
          title: 'Part 2 · Discuss for 10 minutes the two questions provided by the presenting group',
          goal: 'Have a real discussion — build on each other’s ideas.',
          blocks: [
            {
              type: 'key',
              title: 'Two roles in Part 2',
              points: [
                '<b>The rest of the class:</b> discuss the two questions for 10 minutes. Talk to each other, not to the presenter.',
                '<b>Group 3:</b> one presenter sits with one discussion group. Listen and take notes for your summary. Do not participate in discussion — and do not “interview” the group.'
              ]
            },
            { type: 'fields', fields: [{ id: 'c3-qs', label: 'The two questions from Group 3', rows: 2, placeholder: '1 … 2 …' }] },
            { type: 'do', n: 1, who: 'group', text: 'Spin a discussion move. Use it at least once in the discussion. Spin again when you have used it.' },
            {
              type: 'spinner',
              id: 'c3-spin',
              title: 'My discussion move',
              text: 'Everyone spins. Try to use your move naturally.',
              reels: [{ label: 'Move', items: ['Build on someone’s idea', 'Ask a quiet person for their view', 'Give an example from your country', 'Politely disagree', 'Ask for clarification', 'Bring in a source', 'Sum up the group’s ideas so far'] }]
            },
            {
              type: 'language',
              title: 'Seminar discussion language',
              groups: [
                { label: 'Give your view', phrases: ['From my point of view, …', 'I’d argue that eco-tourism can … as long as …', 'It seems to me that …'] },
                { label: 'Build on ideas', phrases: ['Building on what … said, …', 'That’s a good point, and I’d add that …', 'Following on from that, …'] },
                { label: 'Disagree politely', phrases: ['I see what you mean, but …', 'That’s true to some extent, however …', 'I’m not entirely convinced, because …'] },
                { label: 'Clarify', phrases: ['Sorry, could you explain what you mean by …?', 'So are you saying that …?', 'Can you give an example?'] },
                { label: 'Include others', phrases: ['What do you think, …?', 'We haven’t heard from … yet.', 'Does anyone see it differently?'] },
                { label: 'Use examples / sources', phrases: ['In my country, for example, …', 'Group 3 mentioned that …', 'According to the presentation, …'] }
              ]
            },
            {
              type: 'chat',
              title: 'Example: a few turns of a good discussion',
              right: 'Mina',
              lines: [
                ['Leo', 'From my point of view, eco-tourism only helps if <mark>local people get the jobs</mark>.'],
                ['Mina', '<mark>Building on what Leo said</mark>, the money should also pay for protecting the forest.'],
                ['Sam', '<mark>I see what you mean, but</mark> who decides how the money is spent?'],
                ['Mina', 'Good question. <mark>What do you think, Aya?</mark> You haven’t said anything yet.'],
                ['Aya', '<mark>In my country, for example,</mark> villages vote on it every year.']
              ]
            }
          ]
        },
        {
          id: 'c4',
          short: 'Parts 3–4 · Feedback',
          minutes: 13,
          grouping: 'Seminar groups',
          art: 'dec10/assets/week5/v/v-d10w5d3-c4.svg',
          title: 'Parts 3 and 4 · Summary and feedback',
          goal: 'Listen to the summary, then agree on fair and useful feedback for Group 3.',
          blocks: [
            { type: 'do', n: 1, who: 'class', text: '<b>Part 3:</b> Group 3 presents a 1–2-minute summary of the main points of each group’s discussion. Listen to the summary. Did they summarise your group fairly?' },
            { type: 'do', n: 2, who: 'group', text: '<b>Part 4:</b> Group 3 sits with the teacher. Your group discusses your feedback for the presenting group, using the Peer and Teacher Feedback Tool for Presentations.' },
            {
              type: 'form',
              id: 'c4-form',
              title: 'Our feedback for Group 3',
              intro: 'Agree on one rating per statement as a group. Mark N/A where a statement does not fit a Seminar.',
              observe: 'Which group are you giving feedback to?',
              scale: ['Yes', 'Mostly', 'Needs work', 'N/A'],
              cols: ['Comments', 'Action plan for further improvement'],
              send: true,
              sections: [
                { label: 'Content delivery', items: ['The problem was clearly stated.', 'The cause/s were clearly stated.', 'Evidence for the cause/s was given.', 'The effect/s were clearly stated.', 'Evidence for the effect/s was given.', 'A solution was clearly stated.', 'Solution was evaluated.'] },
                { label: 'Flow, visuals and the audience', items: ['We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.', 'Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
                { label: 'Fluency & pronunciation', hint: 'You can add comments for individual presenters.', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
                { label: 'Language use', hint: 'You can add comments for individual presenters.', items: ['The grammar used was largely accurate and we could understand the meaning.', 'The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause/effect; explaining problem).'] },
                { label: 'Question & answer', hint: 'Usually N/A for a Seminar.', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
              ]
            },
            { type: 'choose', id: 'c4-mode', title: 'Decide how you want to deliver your feedback', options: ['Video', 'Audio', 'Directly on the feedback tool form'] },
            {
              type: 'language',
              title: 'Give feedback that helps',
              groups: [
                { label: 'Strengths', phrases: ['One thing you did really well was …', 'We liked the way you …', 'Your research on … was very convincing.'] },
                { label: 'Suggestions', phrases: ['To make it clearer that …, you could …', 'Next time, it might help to …', 'You could strengthen … by adding …'] },
                { label: 'Soften it', phrases: ['We felt that … was a little …', 'Perhaps you could …', 'It wasn’t always clear …'] },
                { label: 'Group 3: ask the teacher', phrases: ['Could you give an example of what you mean?', 'Do you mean all of us, or just …?', 'What is the most important thing to change?'] }
              ]
            },
            {
              type: 'cards',
              title: 'After class task: reminder',
              items: [
                { label: 'Group 3', text: '<b>Submit Portfolio Submission 3:</b> Written summary of, and reflection on, teacher’s and peer feedback on your Seminar presentation.' },
                { label: 'Group 3', text: '<b>Submit Portfolio Submission 4 (Assessed Task):</b> Video response (see W1 D4 Introducing the Responding to Feedback Video Task) to all the teacher and peer feedback.' },
                { label: 'Rest of class', text: '<b>Submit Peer Feedback 1 (Additional submission):</b> Discuss what feedback to give the Seminar presenting group (using the Peer and Teacher Feedback Tool) and choose a mode for the feedback (audio, video, written text, completed feedback tool). Upload your feedback to the presenting group’s portfolio.' }
              ]
            },
            { type: 'tip', text: 'Your teacher tells you the due dates. Only ONE group member uploads your group’s feedback — by the end of today.' }
          ]
        },
        {
          id: 'c5',
          short: 'Group 4 opens',
          minutes: 10,
          grouping: 'Class',
          art: 'dec10/assets/week5/v/v-d10w5d3-c5.svg',
          title: 'Group 4 Opening Remarks',
          goal: 'Listen to Group 4 and write down what you want to know more about.',
          blocks: [
            { type: 'model', title: 'Seminar Group 4’s question', text: '<b><i>How can [your chosen country] encourage cultural diversity?</i></b>' },
            { type: 'do', n: 1, who: 'class', text: 'Review the steps.' },
            {
              type: 'hotspot',
              src: 'dec10/assets/week5/d3-opening-g4.svg',
              size: 'wide',
              title: 'Opening Remarks: Group 4 and the rest of the class',
              hint: 'Tap the numbers.',
              alt: 'Group 4’s Opening Remarks, 5–7 minutes, in three parts: 1 a brief introduction to the country and why they chose it, 2 causes and/or effects of the issue, 3 possible strategies or solutions. Below, the class listens and writes down what more they want to know.',
              caption: 'Group 4: 5–7 minutes, three parts.',
              spots: [
                { x: 18, y: 32, label: '1', color: '#2b776e', title: 'The country', text: 'A brief introduction to the country you selected and why you chose it.' },
                { x: 50, y: 32, label: '2', color: '#c4562f', title: 'Causes and/or effects', text: 'Causes and/or effects of the sustainability issue/problem.' },
                { x: 82, y: 32, label: '3', color: '#3a58a0', title: 'Strategies', text: 'Possible strategies/solutions.' },
                { x: 50, y: 82, label: '4', color: '#8a4f9e', title: 'The rest of the class', text: 'Pay attention to the group’s opening remarks. While you are listening, write down any more information you would like to know about the country and its issue.' },
                { x: 88, y: 82, label: '5', color: '#b07d12', title: 'After the talk', text: 'Group 4: the teacher gives you some feedback on your Opening Remarks. Ask for clarification if there’s anything you don’t understand.' }
              ]
            },
            { type: 'do', n: 2, who: 'class', text: 'Group 4: Give your Opening Remarks. Everyone else: take notes.' },
            {
              type: 'table',
              id: 'c5-notes',
              title: 'Group 4 · notes',
              columns: ['Part', 'What they said', 'What I want to know more about'],
              fixed: ['The country + why they chose it', 'Causes and/or effects', 'Possible strategies/solutions']
            }
          ]
        },
        {
          id: 'c6',
          short: 'React & post',
          minutes: 10,
          grouping: 'Seminar groups',
          art: 'dec10/assets/week5/v/v-d10w5d3-c6.svg',
          title: 'Feedback/Discussion',
          goal: 'Discuss your reactions and post your group’s questions to the Discussion Board.',
          blocks: [
            {
              type: 'tabs',
              title: 'What do you do now?',
              tabs: [
                {
                  label: 'Rest of the class',
                  blocks: [
                    {
                      type: 'steps',
                      items: [
                        { who: 'group', text: 'Discuss your reactions to the <i>opening remarks</i> presentation content.' },
                        { who: 'group', text: 'Prepare one or two questions you would like the group to answer about the problem they talked about (gaps in your knowledge you would like filled).' },
                        { who: 'group', text: 'Post your group’s reactions and questions to the Discussion Board. Do this IN CLASS and do ONE POST PER GROUP.' }
                      ]
                    }
                  ]
                },
                {
                  label: 'Group 3',
                  blocks: [
                    { type: 'do', who: 'group', text: 'Sit with your teacher. Listen to the verbal feedback and take notes — you need them for your Portfolio Submission. Ask about anything that is not clear.' },
                    { type: 'fields', fields: [{ id: 'c6-g3', label: 'Group 3 · teacher feedback notes', rows: 4, placeholder: 'Content: … Engagement: … Pronunciation: … Next time we should …' }] }
                  ]
                }
              ]
            },
            {
              type: 'cards',
              title: 'Good questions open a gap',
              items: [
                { label: 'Weak', text: 'Is cultural diversity good? <i>(yes/no — too easy)</i>' },
                { label: 'Better', text: 'How does your country support minority languages in schools?' },
                { label: 'Strong', text: 'Why do some cultural festivals get government money and others do not — and is that fair?' }
              ]
            },
            {
              type: 'detect',
              id: 'c6-post',
              title: 'Write your group’s Discussion Board post',
              hint: 'One post per group: a reaction + one or two questions.',
              checks: [
                { label: 'Reaction', color: '#2b776e', any: ['interesting', 'surprised', 'we liked', 'we found', 'we agree', 'we were', 'impressed', 'reaction'] },
                { label: 'Open question (how / why / what)', color: '#3a58a0', any: ['how', 'why', 'what', 'to what extent', 'in what way'] },
                { label: 'Question mark', color: '#b07d12', any: ['?'] }
              ],
              items: [{ task: 'Our post', rows: 4, placeholder: 'We found it interesting that … We would like to know: How …? Why …?', model: 'We found it interesting that your country has so many languages. We would like to know: How does the government support small language communities? Why are some festivals more popular with young people than others?' }]
            },
            {
              type: 'language',
              title: 'Online post language',
              groups: [
                { label: 'React', phrases: ['Thanks, Group 4! We found it interesting that …', 'We were surprised to learn that …', 'Your point about … made us think about …'] },
                { label: 'Ask', phrases: ['We would like to know more about …', 'Could you explain how/why …?', 'To what extent does …?'] }
              ]
            }
          ]
        },
        {
          id: 'c7',
          short: 'Next week',
          minutes: 5,
          grouping: 'Class',
          art: 'dec10/assets/week5/v/v-d10w5d3-c7.svg',
          title: 'Preparation for Next Week',
          goal: 'Know what Group 4 must do before the Seminar next week — and how to write Portfolio Submission 1.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-portfolio.svg',
              size: 'wide',
              alt: 'Group 4’s path: today the Opening Remarks and teacher feedback; then read the Discussion Board, choose a focus, write two questions and prepare slides; submit Portfolio Submission 1 before the Seminar; Week 6: Seminar Presentation (10–12 minutes); after it: Portfolio Submissions 3 and 4.',
              caption: 'Group 4: from today to the Seminar in Week 6.'
            },
            {
              type: 'checklist',
              id: 'c7-g4',
              title: 'Before the Seminar next week (Group 4)',
              items: [
                'Read reactions, comments and questions on the Discussion Board and identify any common themes and interesting ideas.',
                'Select the focus of your seminar presentation from these comments and questions.',
                'Think of two thought-provoking questions for the class to discuss in small groups for 10 minutes.',
                'Prepare your Powerpoint Slides for your Presentation for Week 6 (10–12 minutes).',
                'Submit Portfolio Submission 1 — BEFORE your Seminar Presentation in Week 6.'
              ]
            },
            { type: 'tip', text: 'Don’t address ALL the questions on the Discussion Board — just choose one or two to focus your research.' },
            {
              type: 'model',
              title: 'Portfolio Submission 1 — a written summary of, and reflection on, the teacher’s verbal feedback on your Opening Remarks',
              text: '“Feedback on our Opening Remarks can be put into three categories: [E.g. <i>content, engagement with the audience and pronunciation</i>]. For content the feedback was [...]. For engagement, the teacher said [...]. For pronunciation, [...]. This feedback tells us that next time, we should ....”'
            },
            {
              type: 'model',
              title: 'Reminders for Week 6',
              text: 'Group 4 - Seminar Presentation: <b>How can [your chosen country] encourage cultural diversity?</b>'
            }
          ]
        },
        {
          id: 'c8',
          short: 'Reflect',
          minutes: 10,
          grouping: 'Seminar groups',
          art: 'dec10/assets/week5/v/v-d10w5d3-c8.svg',
          title: 'Groupwork reflection',
          goal: 'Talk honestly about how your group works — then work on your project.',
          blocks: [
            {
              type: 'tabs',
              title: 'Discuss these guiding questions',
              tabs: [
                {
                  label: 'Today’s presenting group',
                  blocks: [{
                    type: 'talk',
                    prompts: [
                      'Did any issues come up about working as a group? (e.g., individual tasks, deadlines). If not, why not? If yes, were you able to express your concerns?',
                      'How successfully do you think you supported each other?',
                      'Was there a “leader” in your group, who initiated your progress? If so, how did they communicate and discuss their ideas and plans? If not, how did you manage your progress?',
                      'Can you easily explain all the steps your group took in planning and carrying out the seminar task?'
                    ]
                  }]
                },
                {
                  label: 'Other groups',
                  blocks: [{
                    type: 'talk',
                    prompts: [
                      'What are the strengths of your group work at the moment?',
                      'Are there any aspects of your groupwork you would like to change or improve?'
                    ]
                  }]
                }
              ]
            },
            {
              type: 'scale',
              id: 'c8-me',
              title: 'Quick check',
              statement: 'Everyone in our group does a fair share of the work.',
              ends: ['Not at all', 'Completely'],
              mid: 'Mostly'
            },
            {
              type: 'language',
              title: 'Talk about teamwork',
              groups: [
                { label: 'Strengths', phrases: ['We’re good at sharing tasks fairly.', 'Everyone meets the deadlines we set.', '… keeps us on track.'] },
                { label: 'Problems (politely)', phrases: ['Sometimes it’s hard to …', 'We could communicate better about …', 'I felt a bit … when …'] },
                { label: 'Changes', phrases: ['From now on, we could …', 'Let’s agree to … by …', 'How about we check in every … ?'] }
              ]
            },
            {
              type: 'fields',
              fields: [{ id: 'c8-change', label: 'One thing our group will change or keep doing', rows: 2, placeholder: 'From now on, we will …' }]
            },
            { type: 'do', n: 2, who: 'group', text: 'Now spend the time left working with your group. <b>Group 4:</b> prepare for your Seminar next week. <b>Other groups:</b> work on your Interactive Presentation research.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 10A (homework) ───────────────────────── */
    {
      id: 'aifb',
      number: '04',
      code: '10A',
      minutes: 40,
      tone: 'blue',
      art: 'dec10/assets/week5/s-d3-aifb.svg',
      title: 'AST: Digital literacy and AI: Using AI for feedback homework',
      subtitle: 'When AI feedback helps — and when it does not',
      outcome: 'You can distinguish the advantages and limitations of using AI tools to get feedback on your work, and analyse an assessment rubric with the help of AI.',
      activities: [
        {
          id: 'd1',
          short: 'Recap',
          minutes: 5,
          grouping: 'Alone',
          art: 'dec10/assets/week5/v/v-d10w5d3-d1.svg',
          title: 'Recap',
          goal: 'Remember what you learnt about AI in Weeks 1, 3 and 4.',
          blocks: [
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-ai-tools.svg',
              size: 'wide',
              alt: 'Digital literacy tools: AI. Five overlapping circles: using tools to support learning, making choices based on relevance for learning, using prompts, critical engagement with AI-generated output, acknowledging use of AI.',
              caption: 'Digital literacy tools: AI. This week: <b>using AI for feedback</b>.'
            },
            {
              type: 'quiz',
              id: 'd1-q',
              title: 'Choose the correct answers',
              items: [
                {
                  q: '1. Which statement is true for using AI in academic context?',
                  options: ['AI is only useful for entertainment purposes.', 'AI can support academic work by generating ideas, organising information, and providing feedback.', 'AI is not allowed to be used in universities.', 'AI can be used in academic settings, but it only generates answers without any need for refinement.'],
                  answer: 'AI can support academic work by generating ideas, organising information, and providing feedback.'
                },
                {
                  q: '3. What is the iterative process?',
                  options: ['A process where you keep asking different questions without evaluating responses.', 'Asking a single question and accepting the first response given by the AI.', 'Engaging in a series of back-and-forth questions, refining each prompt based on the previous response.', 'Using AI to generate a list of topics without needing to follow up.'],
                  answer: 'Engaging in a series of back-and-forth questions, refining each prompt based on the previous response.'
                }
              ]
            },
            {
              type: 'sort',
              id: 'd1-sort',
              title: '2. What are some methods or strategies to make a prompt more effective? (Select all that apply)',
              hint: 'Put each statement in a box.',
              buckets: [{ label: 'Makes a prompt more effective', letter: '✓' }, { label: 'Does not', letter: '✗' }],
              items: [
                { text: 'Including specific instructions, setting a role, and refining through trial and error.', answer: 0 },
                { text: 'Asking follow-up questions based on the AI’s response.', answer: 0 },
                { text: 'Keeping prompts as short and general as possible.', answer: 1 },
                { text: 'Breaking down complex requests into smaller, more focused prompts.', answer: 0 }
              ]
            },
            {
              type: 'choose',
              id: 'd1-survey',
              title: '4. Did you find the iterative process more helpful for understanding a complex topic compared to a traditional search? (Survey style question — no right answer)',
              options: ['Yes, because it allowed for deeper exploration and clarification through follow-up questions.', 'No, because traditional searches provide all answers at once.', 'No, because the iterative process only works for simple topics.', 'Yes, because it reduces the need to review AI-generated responses.']
            }
          ],
          answers: { title: 'Answers', items: [['1', 'B'], ['2', 'A, B and D'], ['3', 'C'], ['4', 'Your own opinion (survey)']] }
        },
        {
          id: 'd2',
          short: 'Pros & cons',
          minutes: 10,
          grouping: 'Alone',
          art: 'dec10/assets/week5/v/v-d10w5d3-d2.svg',
          title: 'Introducing using AI for feedback',
          goal: 'Know what AI feedback is good for — and where it is weak.',
          blocks: [
            {
              type: 'key',
              title: 'Why AI feedback?',
              points: [
                'Feedback from teachers and classmates helps you improve your writing and speaking.',
                'Sometimes you need feedback that is <b>immediate</b> and about <b>your own</b> work. AI can help here.',
                'AI can help you understand <b>assessment rubrics</b> and give instant, customised feedback — so you become a more independent learner.'
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-ai-balance.svg',
              size: 'wide',
              alt: 'A balance scale. On one side, five benefits of AI feedback: immediate, grammar vocabulary and structure, self-editing, paraphrasing and academic tone, adapts to you. On the other side, six limitations: limited understanding of academic topics, formal tone, basic feedback on arguments, unclear help with paraphrasing and plagiarism, misses cultural nuances, risk of relying too much. In the middle: best combined with teachers and your own review.',
              caption: 'AI feedback: useful, but best <b>with</b> your teacher and your own careful review.'
            },
            {
              type: 'cards',
              title: 'These are some benefits of using AI for feedback',
              items: [
                { label: 'Immediate, On-Demand Feedback', text: 'AI provides instant feedback, allowing students to identify and correct mistakes right away, which keeps their learning momentum strong.' },
                { label: 'Grammar, Vocabulary, and Structure Support', text: 'AI helps students improve grammar, expand vocabulary, and organise ideas more effectively, supporting their transition to academic English.' },
                { label: 'Enhanced Self-Editing and Revision Skills', text: 'With AI, students can revise their work multiple times, building independence and developing critical self-editing skills.' },
                { label: 'Practice with Paraphrasing and Academic Tone', text: 'AI encourages students to paraphrase and use formal language, essential for avoiding plagiarism and maintaining a scholarly tone.' },
                { label: 'Adaptability for Individual Learning Needs', text: 'AI enables students to work at their own pace, focusing on specific areas they need to improve, fostering a personalized learning experience.' }
              ]
            },
            {
              type: 'quiz',
              id: 'd2-tf',
              title: 'Based on what you just read, are the following statements true or false?',
              shared: ['True', 'False'],
              items: [
                { q: 'AI provides instant feedback, helping students identify and correct mistakes immediately, which supports continuous learning.', answer: 'True' },
                { q: 'Students can use AI feedback to improve their ideas rather than helping with grammar, vocabulary, and structure.', answer: 'False', why: 'AI can support language learning if used for feedback on grammar, vocabulary and structure.' },
                { q: 'AI can support students in improving their self-editing skills by allowing them to revise their work multiple times.', answer: 'True' },
                { q: 'Using AI for feedback does not help students with paraphrasing or maintaining an academic tone.', answer: 'False', why: 'AI feedback can help students keep an academic tone.' }
              ]
            },
            {
              type: 'flip',
              title: 'However, there are also limitations of using AI for feedback',
              hint: 'Turn each card.',
              items: [
                { front: 'Limited Understanding of Academic Topics', back: 'AI doesn’t always “get” academic topics or specific areas of study, so sometimes its feedback might miss important ideas or terms that are key to your subject.' },
                { front: 'Challenges with Formal Academic Tone', back: 'Although AI can help you choose words, it doesn’t always capture the formal, academic style you need. It might give suggestions that don’t sound quite right for university work.' },
                { front: 'Basic Feedback on Arguments and Critical Thinking', back: 'AI often focuses on grammar and vocabulary but may not give helpful feedback on the strength of your arguments or how well you analyze ideas, which are very important in academic writing.' },
                { front: 'Unclear Help with Paraphrasing and Plagiarism', back: 'AI isn’t always great at teaching you how to paraphrase correctly or avoid plagiarism. It might not guide you well on how to put things in your own words while giving proper credit to sources.' },
                { front: 'Misses Cultural or Language Nuances', back: 'For students from different language backgrounds, AI can overlook cultural or language differences that might affect the feedback, giving advice that doesn’t fully fit your style or context.' },
                { front: 'Risk of Relying Too Much on AI', back: 'Using AI can be helpful, but it’s important not to depend on it too much. Developing your own editing and critical thinking skills is key to becoming a strong academic writer.' }
              ]
            },
            { type: 'sticky', title: 'Remember', text: 'AI is a great tool for quick feedback, but it’s best when combined with help from teachers and your own careful review of your work.', color: 'blue' },
            {
              type: 'talk',
              title: 'Tell a classmate (in class tomorrow, or in a voice message tonight)',
              prompts: ['Which benefit is most useful for you? Why?', 'Which limitation worries you most? Give an example.']
            }
          ]
        },
        {
          id: 'd3',
          short: 'AI or not?',
          minutes: 10,
          grouping: 'Alone',
          art: 'dec10/assets/week5/v/v-d10w5d3-d3.svg',
          title: 'Deciding whether to use AI for feedback',
          goal: 'Read three situations and decide: should the student use AI for feedback?',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Now that we have learnt both the benefits and limitations of using AI for feedback, read the following scenarios and help the students decide whether they should use AI for feedback. Bet coins on how sure you are.' },
            {
              type: 'bet',
              id: 'd3-bet',
              title: 'Should they use AI for feedback?',
              items: [
                {
                  q: '<b>Scenario 1:</b> Sarah is preparing a short essay for her English class. She’s already drafted her ideas, but she’s not sure if her grammar and vocabulary are strong enough. She wants to check for common mistakes and see if there are suggestions for more academic vocabulary to make her essay sound formal. <b>Should Sarah use AI for feedback in this situation?</b>',
                  options: ['Yes', 'No'],
                  answer: 'Yes',
                  why: 'Yes, Sarah can use AI for feedback here. AI is good at spotting grammar issues and suggesting formal vocabulary, which can help her make her essay more polished and academic.'
                },
                {
                  q: '<b>Scenario 2:</b> Tom has written a persuasive essay for his politics class, where he argues for a specific policy change. He wants feedback on whether his arguments are strong, his evidence is convincing, and if he’s covered different perspectives fairly. <b>Should Tom use AI for feedback in this situation?</b>',
                  options: ['Yes', 'No'],
                  answer: 'No',
                  why: 'No, Tom might not get the best feedback from AI in this case. AI is limited in assessing argument quality and critical analysis. It’s better for Tom to seek feedback from his teacher or a peer, who can give insight into the strength of his arguments and whether his evidence is effective.'
                },
                {
                  q: '<b>Scenario 3:</b> Maria is working on a research summary for her sociology class and needs to paraphrase some of the main ideas from her sources. She also wants to make sure her tone is formal and academic to meet university standards. <b>Should Maria use AI for feedback in this situation?</b>',
                  options: ['Yes', 'No'],
                  answer: 'Yes',
                  why: 'Yes, Maria can benefit from using AI in this case. AI can help her rephrase sentences and check for formal language, which will support her in developing a scholarly tone and practicing paraphrasing to avoid plagiarism.'
                }
              ]
            },
            {
              type: 'fields',
              fields: [{ id: 'd3-me', label: 'Your turn: think of one piece of your own work this week. Should you use AI for feedback on it? Why or why not?', rows: 3, placeholder: 'For my … I would / would not use AI because …' }]
            },
            {
              type: 'language',
              title: 'Give advice about AI use',
              groups: [
                { label: 'Advise', phrases: ['If I were Tom, I would ask …', 'It would be better to …', 'AI is useful for … , but not for …'] },
                { label: 'Explain why', phrases: ['This is because AI tends to …', 'AI can’t really judge …', 'A teacher or peer can give insight into …'] }
              ]
            }
          ]
        },
        {
          id: 'd4',
          short: 'AI + rubric',
          minutes: 15,
          grouping: 'Alone',
          art: 'dec10/assets/week5/v/v-d10w5d3-d4.svg',
          title: 'Using AI to interpret rubrics',
          goal: 'Write a prompt that helps you understand the Integrated Writing Assessment rubric.',
          blocks: [
            {
              type: 'key',
              title: 'Why the rubric?',
              points: ['To get customised feedback from AI, both <b>you</b> and <b>the AI</b> must understand how teachers assess your work.', 'Today: the rubric for the <b>Integrated Writing Assessment</b>.']
            },
            {
              type: 'steps',
              items: [
                { who: 'alone', text: '<b>Select an AI Tool:</b> use one of the AI tools introduced earlier in the course, either <b>Copilot</b> or <b>Cogniti’s Vanilla agent</b>.' },
                { who: 'alone', text: 'If using Copilot, you can attach the rubric file directly. For Cogniti, you will need to copy and paste the rubric text into the chat.' },
                { who: 'alone', text: 'Write a prompt with the four key elements: Role, Task, Requirements, Instructions.' }
              ]
            },
            {
              type: 'figure',
              src: 'dec10/assets/week5/d3-prompt-parts.svg',
              size: 'wide',
              alt: 'Four parts of a prompt join like puzzle pieces: Role (act as…), Task (what you want), Requirements (conditions and what the output should look like), Instructions (how to do it, steps, examples). Together with the rubric file they go into the AI tool, which explains the rubric. An arrow loops back: ask follow-up questions.',
              caption: 'Role + Task + Requirements + Instructions (+ the rubric) → a useful explanation.'
            },
            {
              type: 'tabs',
              title: 'Sample prompts',
              tabs: [
                { label: 'Role', blocks: [{ type: 'model', title: 'Role', text: 'Act as a friendly and helpful English tutor who explains things simply and clearly for someone learning academic writing at a B2 level.' }] },
                { label: 'Task', blocks: [{ type: 'model', title: 'Task', text: 'Help me understand what my writing rubric means. Focus on four areas: Argumentation, Use of Sources, Connection of Ideas, Vocabulary and Grammar. Explain what I need to do to improve my writing and get a higher score.' }] },
                { label: 'Requirements', blocks: [{ type: 'model', title: 'Requirements', list: ['Use simple and clear language that is easy for a B2 student to understand.', 'Give examples to show what a good and not-so-good answer looks like for each area.', 'Share tips or advice to help me improve in these areas.', 'Explain any difficult words so I can learn as I go.'] }] },
                { label: 'Instructions', blocks: [{ type: 'model', title: 'Instructions', list: ['Start by telling me what each part (like Argumentation) means and why it’s important in my writing.', 'Explain the difference between a strong answer and a weak one in that area.', 'Give me an example to show what a good answer looks like.', 'Share one or two tips to help me get better at that part.', 'End with one simple thing I can remember or practice.'] }] }
              ]
            },
            {
              type: 'promptbuilder',
              id: 'd4-pb',
              title: 'Build your rubric prompt',
              tryUrl: 'https://copilot.microsoft.com/',
              tryLabel: 'Open Copilot',
              parts: [
                { key: 'role', id: 'd4-pb-1', label: 'Role', lead: 'Act as', placeholder: 'a friendly English tutor…', chips: ['a friendly and helpful English tutor', 'an experienced university writing teacher', 'a tutor for B2 students of academic English'] },
                { key: 'task', id: 'd4-pb-2', label: 'Task', lead: 'Help me', placeholder: 'understand what my writing rubric means…', chips: ['understand what my Integrated Writing Assessment rubric means', 'understand the difference between each level of the rubric', 'focus on Argumentation, Use of Sources, Connection of Ideas, Vocabulary and Grammar'] },
                { key: 'requirements', id: 'd4-pb-3', label: 'Requirements', lead: 'Make sure you', placeholder: 'use simple language…', chips: ['use simple and clear language for a B2 student', 'give an example of a good and a not-so-good answer for each area', 'explain any difficult words'] },
                { key: 'instructions', id: 'd4-pb-4', label: 'Instructions', lead: 'Follow these steps:', placeholder: '1 explain each part, 2 …', chips: ['1 explain what each part means, 2 compare a strong and a weak answer, 3 give one or two tips', 'end with one simple thing I can remember or practise'] }
              ]
            },
            {
              type: 'language',
              title: 'Follow-up prompts (the iterative process)',
              groups: [
                { label: 'Ask for more', phrases: ['Can you give me another example of a strong topic sentence?', 'What would a weak answer look like for Use of Sources?'] },
                { label: 'Make it simpler', phrases: ['Please explain “cohesive” in simpler words.', 'Can you put that in a short table?'] },
                { label: 'Check and question', phrases: ['Where in the rubric does it say that?', 'Are you sure? Please check the rubric again.'] }
              ]
            },
            { type: 'do', n: 1, who: 'alone', text: 'Based on AI’s interpretation, answer the questions below.' },
            {
              type: 'quiz',
              id: 'd4-q',
              title: 'What does the rubric value?',
              items: [
                { q: 'Which of these approaches demonstrates strong argumentation?', options: ['Discussing several perspectives briefly, supported by a few examples.', 'Developing a central argument deeply, with detailed evidence and consideration of alternative views.', 'Highlighting key aspects of one perspective while referencing others indirectly.', 'Presenting a general argument that addresses key points without diving into details.'], answer: 'Developing a central argument deeply, with detailed evidence and consideration of alternative views.' },
                { q: 'What best reflects effective use of sources?', options: ['Including information from multiple sources to strengthen your ideas, with clear integration and original analysis.', 'Summarising the main points of sources directly to give a balanced overview.', 'Referring to sources sparingly to keep the focus on your own ideas.', 'Integrating examples from sources directly into your text with minimal adjustments.'], answer: 'Including information from multiple sources to strengthen your ideas, with clear integration and original analysis.' },
                { q: 'Which method ensures strong connectivity in writing?', options: ['Linking ideas with simple transitions that emphasize logical relationships between points.', 'Organizing sentences and paragraphs to follow a natural progression of ideas.', 'Using a variety of linking phrases to clarify relationships and enhance flow.', 'Grouping related ideas into paragraphs to create structure and clarity.'], answer: 'Using a variety of linking phrases to clarify relationships and enhance flow.' },
                { q: 'Which approach demonstrates a strong use of vocabulary?', options: ['Choosing precise terms that fit the context, with a balance of academic and less formal expressions.', 'Using advanced terms occasionally, with consistent use of general vocabulary for most of the text.', 'Relying on familiar terms for clarity, with occasional attempts at less common words.', 'Balancing topic-specific vocabulary with general terms to convey ideas effectively.'], answer: 'Choosing precise terms that fit the context, with a balance of academic and less formal expressions.' },
                { q: 'What reflects strong grammatical control in academic writing?', options: ['Using a variety of sentence types that show clear relationships between ideas, with few minor errors.', 'Balancing sentence complexity with clarity, emphasizing accurate use of grammar structures.', 'Incorporating advanced grammatical structures when needed, maintaining overall readability.', 'Writing clear and straightforward sentences that minimize errors while avoiding complexity.'], answer: 'Balancing sentence complexity with clarity, emphasizing accurate use of grammar structures.' }
              ]
            },
            { type: 'tip', text: 'Check what the AI says against the real rubric on Canvas — AI can be wrong. If you use AI for your work, follow the course rules and acknowledge your use of AI.' }
          ],
          answers: { title: 'Answers', items: [['Argumentation', 'B'], ['Use of sources', 'A'], ['Connectivity', 'C'], ['Vocabulary', 'A'], ['Grammar', 'B']] }
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['cultural globalisation', 'the fast movement of ideas, values and culture (films, food, music, fashion) across national borders', 'Cultural globalisation means people around the world watch the same films.'],
    ['homogenisation', 'when different cultures become more and more alike', 'Critics say global brands lead to cultural homogenisation.'],
    ['hybridisation', 'mixing global and local cultural elements to make something new', 'Chinese streetwear that mixes global and local styles is an example of hybridisation.'],
    ['Americanisation', 'the spread of American culture, brands and values around the world', 'Some writers now say the idea of Americanisation is outdated in Asia.'],
    ['hegemony', 'strong control or influence of one group over others', 'Van Krieken (2016) refers to “American hegemony”.'],
    ['counterargument', 'an argument against your own position', 'Sample 5.1 puts the counterargument in the last body paragraph.'],
    ['refutation', 'showing why a counterargument is weak or wrong', 'Start your refutation with “However, …”.'],
    ['thesis statement', 'the sentence that gives the writer’s position in the introduction', 'Our thesis statement says globalisation is not only negative.'],
    ['joint construction', 'a text that a group plans and writes together', 'We wrote a joint construction in a shared Google Doc.'],
    ['rubric', 'a table that shows the criteria and levels used to mark a task', 'Read the IWA rubric before you write.'],
    ['criterion (pl. criteria)', 'one thing a teacher looks at when marking', 'Use of sources is one criterion in the rubric.'],
    ['action plan', 'a list of exact things you will do to improve', 'My action plan says I will add the year to every citation.'],
    ['text map', 'a diagram that shows how the ideas of an essay link together', 'Fill in the grey spaces in the text map.'],
    ['iterative process', 'asking and improving again and again, step by step', 'The iterative process helped me understand the rubric.'],
    ['opening remarks', 'a short first presentation that opens a seminar topic', 'Group 4 gave their Opening Remarks today.'],
    ['portfolio submission', 'a piece of work you upload to your group’s Seminar Portfolio', 'Portfolio Submission 1 is a reflection on the teacher’s feedback.']
  ]
};
