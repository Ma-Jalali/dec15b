/* DEC15 · Week 4, Day 5 — lesson content.
   Teacher’s Book: W4 D5 · 11A Feedback session on Week 3 Integrated Writing Practice Assessment (75)
   · 12A Academic writing skills Workshop set up (75) · 13A AST: Digital literacy and AI (60)
   · 14A Teacher feedback on research summary discussions (30).
   Texts: Week 3 + Week 4 sources (lessons/week3/sources.js, lessons/week4/sources.js).
   v2 (teacher feedback): fewer tabs, plainer English, a game in every stage. Merged tabs keep the id of their first
   TB activity; each TB heading is the title of the first block of its part ('Part 1 · …'). All block / field / table ids
   are unchanged (saved work). Teacher notes live in the database (teacher_notes), refs only here.
   Sharing (send: true): peer feedback tool (f2f), optional AI paragraph table (f1t). */

window.DEC15_LESSON = {
  id: 'w4d5',
  week: 4, day: 5,
  title: 'Feedback, essay planning and AI',
  duration: 'About 4 hours',
  question: 'Should governments do more to solve the problem of food waste? Discuss your position with reference to the sources.',
  questionKind: 'Essay question',
  questionLabel: 'Monday’s essay question',
  wordTarget: '450–600 words',
  image: 'assets/week4/hero-w4d5.svg',
  imageAlt: 'An essay page with feedback marks in the margin, a magnifying glass, a laptop with an AI sparkle on the screen, and a checklist.',
  journey: 'Today you use feedback to improve. You check your Week 3 essay with a partner and with AI, and you make an action plan. Then you look at Monday’s essay question, take notes and plan your essay. You also learn to check AI text for bias (= unfair ideas). Last, you talk to your teacher about your discussion feedback.',
  finish: { title: 'Week 5 · Monday', text: 'Academic writing skills workshop: write the essay together' },

  sections: [
    /* ───────────────────────── 11A Feedback session ───────────────────────── */
    {
      id: 'feedback', number: '01', code: '11A', minutes: 75,
      tone: 'teal', art: 'feedback',
      title: 'Feedback session on Week 3 Integrated Writing Practice Assessment',
      subtitle: 'Self, peer and AI feedback on your essay',
      outcome: 'Give useful feedback to a classmate, use AI to learn about language, and use feedback to make your writing better.',
      activities: [
        {
          id: 'f1', short: 'Reflect', minutes: 10, grouping: 'Alone',
          title: 'Self-reflection',
          goal: 'Choose one paragraph from your Week 3 essay. Write questions about your teacher’s feedback.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Find your <b>Week 3 Integrated Writing Practice Assessment</b> on Canvas.' },
              { who: 'alone', text: 'Choose <b>ONE paragraph</b>. Paste it into the first column of the table (<b>Original version</b>).' },
              { who: 'alone', text: 'Leave the other two columns empty. You fill them later with AI (tab 3).' },
              { who: 'alone', text: 'Read your teacher’s written feedback. Is anything unclear? Write your <b>questions</b>. Your teacher will come to talk to you.' }
            ]},
            { type: 'table', id: 'f1t', title: 'My paragraph: original and corrected', columns: ['Original version', 'Corrected for grammar and clarity', 'What changes have been made? Why? Are you sure AI is correct?'], rows: 1, send: true, sendLabel: 'Share with your partner (optional)', sendHint: 'Send a read-only copy to your partner or your teacher — only they will see it, in “Shared with me”.' },
            { type: 'model', title: 'Example: a completed table', rows: [
              ['Original version', 'The population of world has increased dramatically in today’s age, which led to the food shortage problem. In order to solve this situation, scientists create and cultivate the genetically-modified food. The GM-food actually boosts food supply and meets the starvation to some extent (Dudeja et al,. (2017). Despite it also causes some adverse influences. There are volumes of serious problems were brought by the engineered food. This is because, the first, GM-food may have negative impacts on environment, the second, the humans health can be affected by these new crops.'],
              ['Corrected for grammar and clarity', 'The global population has increased dramatically in recent years, leading to problems with food shortages. To address this situation, scientists have developed and cultivated genetically modified (GM) foods. These foods have indeed helped boost the food supply and alleviate starvation to some extent (Dudeja et al., 2017). However, it has also brought about adverse consequences, including serious environmental issues and damaging impacts on human health.'],
              ['What changes? Why?', 'Vocabulary (in today’s age → in recent years) · Verb tense · Incomplete sentence · Despite + noun (phrase)']
            ]},
            { type: 'quiz', id: 'f1q', title: 'Game · Spot the change in the example', items: [
              { q: '“in today’s age” → “in recent years”. What kind of change is this?', options: ['Vocabulary', 'Verb tense', 'Citation'], answer: 'Vocabulary', why: '“In recent years” is the natural academic phrase.' },
              { q: '“scientists create” → “scientists have developed”. What kind of change is this?', options: ['Vocabulary', 'Verb tense', 'Citation'], answer: 'Verb tense', why: 'The present perfect (have developed) links the past to now.' },
              { q: '“Despite it also causes…” → “However, it has also brought about…”. Why?', options: ['Despite needs a noun (phrase), not a full sentence', 'The sentence was too short', 'It needed a citation'], answer: 'Despite needs a noun (phrase), not a full sentence', why: 'Despite + noun: “Despite the benefits, …”. For a full sentence, use However.' }
            ]},
            { type: 'fields', title: 'My teacher’s feedback', fields: [
              { id: 'f1-q', label: 'My questions for my teacher about the written feedback', placeholder: 'What did you mean by…? How can I improve…?', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t1' }
          ]
        },
        {
          id: 'f2', short: 'Peer feedback', minutes: 30, grouping: 'Pairs',
          title: 'Peer feedback',
          goal: 'Read your partner’s essay. Give feedback with the feedback tool and talk about language errors.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: '<b>Swap essays</b> with a partner (swap devices or show your essay on the screen).' },
              { who: 'alone', text: 'Read your partner’s essay. Complete the <b>Peer and Teacher Feedback Tool</b> below.' },
              { who: 'alone', text: 'Read the essay again. <b>Highlight</b> grammar or language errors.' },
              { who: 'pair', text: 'Talk about how to correct the errors. Then <b>send</b> your feedback to your partner.' },
              { who: 'alone', text: 'Look at your <b>self-evaluation</b> from the W3 D4 homework. Does the peer feedback agree with it?' }
            ]},
            { type: 'language', title: 'Sentence starters for feedback', tabs: false, groups: [
              { label: 'Praise', phrases: ['… was good; to make it even better, you might…', 'The way you have… makes…'] },
              { label: 'Suggest', phrases: ['Perhaps you could…', 'I suggest …-ing… rather than…', 'It might be helpful to…'] },
              { label: 'Point out a problem', phrases: ['I noticed a few places where…', 'Don’t forget to… / Remember to…'] }
            ]},
            { type: 'form', id: 'f2f', title: 'Peer and Teacher Feedback Tool - Integrated Writing Task', intro: 'For each point, choose Yes, Mostly or Needs work. Add a comment with an example. At the end, write clear actions.', observe: 'Whose essay are you reviewing?', cols: ['Comments'], sections: [
              { label: 'Argumentation', items: [
                'The overall argument of the essay is clear and well developed.',
                'The main idea of each paragraph is well developed [with relevant supporting evidence].',
                'There is range of persuasive language to convince the reader of your opinion.',
                'Arguments and evidence from sources are used effectively.'
              ]},
              { label: 'Use of sources', hint: 'If 50% or more of the text is lifted (= copied) = all Use of sources ‘Needs work’', items: [
                'The sources are synthesised effectively (= ideas from different sources are joined).',
                'The writer’s own voice can be clearly distinguished from the voices of sources.',
                'Information from sources is presented accurately.',
                'Information from sources is paraphrased effectively.',
                'Sources are accurately cited.'
              ]},
              { label: 'Connection of ideas', items: [
                'Relationships between points (e.g. cause-effect, contrast) are logical and clearly expressed.',
                'Relationships between paragraphs are logical and help the reader follow the text.',
                'A range of linking devices (old-new information flow; summary phrases; linking words) is used to help the reader follow the text.'
              ]},
              { label: 'Vocabulary', items: [
                'There is a broad range of vocabulary, including less common words.',
                'Vocabulary is accurate, including accurate collocations (= words that go together).',
                'Hedging language (= careful words like “may”, “some”) is used effectively.',
                'Vocabulary is formal.'
              ]},
              { label: 'Grammar', items: [
                'There is a range of grammatical structures, including appropriate nominalisation (= verb → noun).',
                'Grammar is accurate throughout, with minimal errors that do not impede understanding.',
                'Word forms (e.g. adjective vs adverb vs noun) are accurate.'
              ]}
            ], fields: [
              { id: 'f2-a1', label: 'Actions for further improvement · Argumentation (make actions clear and specific — replace the example)', placeholder: 'Your position and your argument are clear, but your paragraphs are a bit short and need more development. So next time, try to include more information (details and evidence) from the sources. This will help develop your paragraphs more.', rows: 3 },
              { id: 'f2-a2', label: 'Actions for further improvement · Connection of ideas', placeholder: 'Many sentences start with the same linking word “This” (This means… This is…). Next time use a variety of linking words.', rows: 3 },
              { id: 'f2-a3', label: 'Actions for further improvement · Vocabulary', placeholder: 'Remember not to use contractions like ‘can’t’ and ‘doesn’t’, which are non-academic words.', rows: 3 },
              { id: 'f2-a4', label: 'Actions for further improvement · Grammar', placeholder: 'Try to include sentences with more than one clause (to improve range of grammatical structure).', rows: 3 }
            ], send: true, sendLabel: 'Send your feedback to your partner', sendHint: 'Choose your partner. They get a read-only copy of the ratings, comments and actions in “Shared with me”. You can also download a PDF.' },
            { type: 'fields', title: 'Compare with your self-evaluation', fields: [
              { id: 'f2-s', label: 'Does the peer feedback agree with my W3 D4 self-evaluation? What is different?', placeholder: 'My partner also thought… but they noticed…', rows: 3, share: false }
            ]},
            { type: 'language', title: 'More expressions for peer feedback (W2 D2. 6A)', tabs: false, groups: [
              { label: 'Suggesting', phrases: ['For more…, perhaps you could…', 'Perhaps …-ing could…', 'For more…, consider …-ing…', 'I would recommend …-ing…', 'You could possibly…', 'It might be beneficial to…'] },
              { label: 'Pointing out problems', phrases: ['Paying a bit more attention to… would…', 'I noticed… that you might want to…', 'Try to… so…'] },
              { label: 'Praising + building', phrases: ['You’ve… but maybe you could…', 'To (further) strengthen…, it would help…'] }
            ]},
            { type: 'teacher', ref: 'w4d5-t2' }
          ]
        },
        {
          id: 'f3', short: 'AI + plan', minutes: 35, grouping: 'Alone',
          title: 'Language review with AI + Action plan',
          goal: 'Use AI to correct your paragraph and check each change. Then write your action plan.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Language review with AI (25 min)', items: [
              { who: 'alone', text: 'Open the <b>Vanilla GPT-4 agent</b> in <b>Cogniti</b>.' },
              { who: 'alone', text: 'Paste your paragraph from tab 1 (Self-reflection) with the prompt below.' },
              { who: 'alone', text: 'Copy the AI version into the <b>second column</b> of your table in tab 1.' },
              { who: 'alone', text: '<b>Highlight</b> the grammar changes and the new wording.' },
              { who: 'alone', text: 'In the <b>last column</b>, write what changed and why. Is each change correct?' },
              { who: 'alone', text: 'Write down useful words and phrases for your next essay.' }
            ]},
            { type: 'model', title: 'The prompt', text: 'Correct this paragraph for grammar and clarity.', note: 'AI can be wrong. It can also change your meaning. Check every change — you are the writer.' },
            { type: 'fields', title: 'Language I learned', fields: [
              { id: 'f3-1', label: 'Useful words and phrases for my next essay', placeholder: 'in recent years (not “in today’s age”) · alleviate starvation · bring about adverse consequences…', rows: 4 }
            ]},
            { type: 'tip', text: '<b>Optional (if you have time):</b> use the <a href="https://app.cogniti.ai/agents/67b3f3ddeb50a217bae1c202/chat?k=yOLe1ZKWVc5atMqKejnT7cbeqhlpWmn34q_P9SgeM8E" target="_blank" rel="noopener">CET AI Agent</a> to check your essay. Follow its instructions: add the question, the reading and listening texts, and your paragraph. Then compare its feedback with your peer and teacher feedback.' },
            { type: 'fields', fields: [
              { id: 'f3-2', label: 'Optional: How is the AI agent’s feedback the same as / different from my peer and teacher feedback?', placeholder: 'The agent also said… but it didn’t notice…', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t3' },

            { type: 'steps', title: 'Part 2 · Action plan (10 min)', items: [
              { who: 'alone', text: 'Look at all your feedback: from your partner (in <b>“Shared with me”</b>), from your teacher and from AI.' },
              { who: 'alone', text: 'What will you do differently on Monday? Write one clear action for each area.' }
            ]},
            { type: 'model', title: 'Example: vague → clear action', before: 'I will improve my vocabulary.', text: 'I will not use contractions (can’t, doesn’t). I will check for them before I submit.', note: 'A good action says exactly what you will do — and how you will check it.' },
            { type: 'fields', title: 'My actions for further improvement', fields: [
              { id: 'f4-1', label: 'Argumentation', placeholder: 'Next time I will…', rows: 2, share: false },
              { id: 'f4-2', label: 'Use of sources', placeholder: 'I will paraphrase… / cite…', rows: 2, share: false },
              { id: 'f4-3', label: 'Connection of ideas', placeholder: 'I will use a variety of linking words, e.g. …', rows: 2, share: false },
              { id: 'f4-4', label: 'Vocabulary', placeholder: 'I will avoid contractions and…', rows: 2, share: false },
              { id: 'f4-5', label: 'Grammar', placeholder: 'I will check verb tenses and…', rows: 2, share: false }
            ]}
          ]
        }
      ]
    },

    /* ───────────────────────── 12A Academic writing skills Workshop set up ───────────────────────── */
    {
      id: 'plan', number: '02', code: '12A', minutes: 75,
      tone: 'clay', art: 'writing',
      title: 'Academic writing skills Workshop set up',
      subtitle: 'Should governments do more to solve the problem of food waste?',
      outcome: 'Understand what the essay question asks, choose useful information from the sources and take notes, and take a position and plan your essay.',
      activities: [
        {
          id: 'p1', short: 'Question', minutes: 20, grouping: 'Pairs → groups',
          title: 'Analyse the Question + Discuss your position',
          goal: 'Understand the question. Then choose your first position with your group.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Analyse the Question (10 min)', items: [
              { who: 'pair', text: 'Look at the picture. Read the essay question.' },
              { who: 'pair', text: 'Talk with a partner. Then answer questions a)–d).' }
            ]},
            { type: 'tip', text: '<b>Key words</b> · <b>content words</b> (= words that give the topic) · <b>limiting word</b> (= a word that makes the question narrower) · <b>position</b> (= your answer to the question).' },
            { type: 'figure', src: 'assets/week4/three-actors.svg', alt: 'Three actors in the food system: businesses, governments and consumers.', caption: 'Who should solve food waste? Think about the solutions from the last two weeks and your research.' },
            { type: 'question' },
            { type: 'quiz', id: 'p1q', title: 'Talk with a partner, then choose', items: [
              { q: 'a) Which are the key <b>content words</b>?', options: ['governments / solve / problem / food waste', 'should / discuss / position / sources', 'more / reference / sources'], answer: 'governments / solve / problem / food waste', why: 'These words tell you the topic.' },
              { q: 'b) Which word <b>limits</b> the question? <small>Hint: governments already do something…</small>', options: ['governments', 'more', 'problem', 'sources'], answer: 'more', why: '<i>More</i> makes the question narrower: should governments do <b>more than they do now</b>?' },
              { q: 'c) What does the question ask you to do?', options: ['Look at what governments do now, say if they should do more, and give reasons', 'Describe all the causes of food waste', 'Compare food waste in two countries'], answer: 'Look at what governments do now, say if they should do more, and give reasons', why: '“Should” and “Discuss your position…” mean: take a position and give reasons for it.' },
              { q: 'd) What is the main purpose of an argument essay?', options: ['To persuade the reader of your position', 'To describe a process', 'To summarise the sources'], answer: 'To persuade the reader of your position', why: 'The Integrated Writing Task is an argument essay. You must take a position.' }
            ]},
            { type: 'teacher', ref: 'w4d5-t4' },

            { type: 'spinner', id: 'p2sp', title: 'Part 2 · Activity 1 Discuss your position (10 min) — Spin and speak', text: 'Spin. Say if governments should do more about this solution. Give a reason. Then pass the turn.', reels: [
              { label: 'Solution', start: 'Spin!', items: ['food banks', 'upcycled food', 'food waste apps', 'laws about landfill', 'investment in new ideas', 'education campaigns', 'tax incentives for donations'] },
              { label: 'Who should act?', start: '…', items: ['governments', 'businesses', 'consumers', 'everyone together'] }
            ]},
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Give your view', phrases: ['I think governments should… because…', 'In my view, businesses can… without help.'] },
              { label: 'Respond', phrases: ['I agree, and also…', 'Maybe, but what about…?'] }
            ]},
            { type: 'choose', id: 'p2c', title: 'Our first position', options: [
              'Governments need to significantly increase their efforts.',
              'All actors in the food system should be doing more.',
              'Businesses and consumers need to do more, not governments.',
              'Governments are already doing enough.'
            ]},
            { type: 'talk', prompts: [
              'Which solutions from Weeks 3 and 4 need help from governments?',
              'What did your own research say about governments in your region?'
            ]},
            { type: 'fields', fields: [
              { id: 'p2-1', label: 'Our position and the main reason', placeholder: 'We think governments should… because…', rows: 3 }
            ]},
            { type: 'teacher', ref: 'w4d5-t5' }
          ]
        },
        {
          id: 'p3', short: 'Listen again', minutes: 20, grouping: 'Alone → group',
          title: 'Activity 2 Prepare notes',
          goal: 'Listen to Gunders’ TED talk again. Take notes that help you answer the question.',
          blocks: [
            { type: 'key', title: 'Good notes', points: [
              'Choose only information that helps <b>answer the question</b>.',
              'Try to <b>paraphrase</b> (= use your own words) as you write.',
              'Put ideas on the <b>same theme</b> together.'
            ]},
            { type: 'model', title: 'Example: one good note', before: 'Dana Gunders talked about lots of things and food waste is a very big problem in America and other places.', text: 'Gunders (2024): solutions (e.g. apps) work, but progress is too slow → governments need to invest to scale them up (= make them bigger).', note: 'Short, in your own words, and about governments.' },
            { type: 'listening', source: 'Gunders (2024) · TED', title: 'How to turn the tables on food waste', videoId: '6iqXH9RPK1w', start: 0, clip: 'full talk · about 11 minutes', transcripts: [['gunders', 'Transcript (adapted)']] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Listen once. Take notes <b>by hand</b>.' },
              { who: 'alone', text: 'Listen for: What do governments do now? What could they do more of?' },
              { who: 'group', text: 'Compare your notes with your group. Add good points to the note-taking table (tab 3).' }
            ]},
            { type: 'fields', fields: [
              { id: 'p3-1', label: 'Gunders (2024): my notes on governments and food waste (type them after listening)', placeholder: 'Progress too slow… investment needed to scale… laws restricting food going to landfill…', rows: 4 }
            ]}
          ]
        },
        {
          id: 'p4', short: 'Notes + plan', minutes: 35, grouping: 'Groups', cowrite: true,
          title: 'Note-taking table + Making a plan',
          goal: 'Collect notes from all the sources as a group. Then plan your essay: a position and two reasons.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Note-taking table (15 min)', items: [
              { who: 'group', text: 'Press <b>Write together</b> to share one page with your group. Or each person fills the table below.' },
              { who: 'group', text: 'Add your Gunders notes first.' },
              { who: 'group', text: 'Then add useful points from the other texts (Weeks 3 and 4) and from your <b>own sources</b>. One source per row.' }
            ]},
            { type: 'table', id: 'p4t', title: 'Note-taking table', columns: ['Source', 'Relevant points'], rows: 5, extraRows: true },
            { type: 'sources', ids: ['gunders', 'nicastro', 'berti', 'aboutthat', 'castro', 'huang'] },
            { type: 'teacher', ref: 'w4d5-t6' },
            { type: 'teacher', ref: 'w4d5-t7' },

            { type: 'steps', title: 'Part 2 · Making a plan (20 min)', items: [
              { who: 'group', text: 'Agree on a <b>clear position</b>.' },
              { who: 'group', text: 'Find <b>TWO main reasons</b> for your position.' },
              { who: 'group', text: 'Look at your note-taking table. Which notes support each reason?' },
              { who: 'group', text: 'Decide the order of your two body paragraphs. Then complete the plan.' }
            ]},
            { type: 'key', tone: 'warn', title: 'Be selective (= choose only the best)', points: [
              'You do <b>NOT</b> need all your notes. Choose the best ones.',
              'Bring your plan to class on Monday.',
              'Don’t write the essay at the weekend, and don’t use AI to write it. You write it in class.'
            ]},
            { type: 'plan' },
            { type: 'tip', text: 'Nice work! A clear plan makes Monday’s writing much easier.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 13A AST: Digital literacy and AI ───────────────────────── */
    {
      id: 'ai', number: '03', code: '13A', minutes: 60,
      tone: 'amber', art: 'ai',
      title: 'AST: Digital literacy and AI',
      subtitle: 'Bias, accuracy and a checklist for AI-generated text',
      outcome: 'Notice bias in AI answers, check an AI text carefully, and make a checklist for checking AI text.',
      activities: [
        {
          id: 'i1', short: 'Warm-up', minutes: 15, grouping: 'Groups',
          title: 'Warmer',
          goal: 'Watch a short video about bias in AI pictures. Then test an image generator yourself.',
          blocks: [
            { type: 'tip', text: '<b>Key words</b> · <b>bias</b> (= unfair support for one group or idea) · <b>stereotype</b> (= a fixed, too-simple idea about a group of people) · <b>image generator</b> (= an AI tool that makes pictures).' },
            { type: 'listening', source: 'YouTube', title: 'Bias in AI-generated images', videoId: 'L2sQRrf1Cd8', start: 48, clip: 'play to 2:16', transcripts: [] },
            { type: 'quiz', id: 'i1q', title: 'Quick check', items: [
              { q: '1. What is the main problem in the video?', options: ['Gender and race bias, which leads to stereotypes', 'The images are too expensive to make', 'The images are low quality'], answer: 'Gender and race bias, which leads to stereotypes', why: 'The generators repeat the biases in the data they learned from.' }
            ]},
            { type: 'steps', title: '2. Try it yourself', items: [
              { who: 'pair', text: 'Type these prompts into an image generator: <b>Nurse</b> · <b>Teacher</b> · <b>CEO</b>.' },
              { who: 'pair', text: 'What do you see? Is the problem getting better?' },
              { who: 'pair', text: 'ChatGPT and Copilot make 1 image at a time. Ask them for a few more.' }
            ]},
            { type: 'tip', text: 'Image generators: <a href="https://chatgpt.com/" target="_blank" rel="noopener">ChatGPT</a> · <a href="https://copilot.microsoft.com/" target="_blank" rel="noopener">Copilot</a> · <a href="https://www.canva.com/ai-image-generator/" target="_blank" rel="noopener">Canva</a> (or any other).' },
            { type: 'talk', title: '3. Talk in groups', prompts: [
              'AI can show gender, race or age unfairly in pictures. Can it also show <b>facts or arguments</b> unfairly in academic work? How?',
              'What can go wrong if we use AI text in research and don’t check it?'
            ]},
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'Say what you noticed', phrases: ['Most of the pictures showed…', 'I was surprised that…'] },
              { label: 'Think about academic work', phrases: ['AI might leave out…', 'This could be a problem because…'] }
            ]},
            { type: 'teacher', ref: 'w4d5-t8' }
          ],
          answers: { items: [
            ['Misrepresenting in academic contexts', 'AI can make issues too simple, repeat stereotypes and common biases, leave out voices (it uses mainstream sources) and give old information (older data, no new research). Example: AI might explain poverty only by economic mismanagement and ignore historical and systemic factors.'],
            ['Risks', 'Your own ideas — this leads into why we must check AI output.']
          ]}
        },
        {
          id: 'i2', short: 'Check AI text', minutes: 20, grouping: 'Groups',
          title: 'Evaluating AI output',
          goal: 'Use your Week 2 reading skills to judge an AI answer about food waste.',
          blocks: [
            { type: 'key', title: 'Week 2 skills that also work for AI text', points: [
              'Is it a <b>fact</b> or an <b>opinion</b>?',
              'How good are the <b>evidence</b> and <b>sources</b>?',
              'What does the text <b>assume</b> (= think is true without proof)?',
              'Is there any <b>bias</b>?'
            ]},
            { type: 'model', title: 'The prompt', text: '“What are the main causes of food waste, and what are the most effective solutions?”' },
            { type: 'passage', id: 'i2p', title: 'AI-generated text — highlight anything you question', text: 'Food waste occurs at various stages of the supply chain due to multiple factors. At the household level, overbuying, improper storage, and confusion over expiration dates lead to unnecessary disposal of food. Supermarkets contribute to the problem by discarding produce that does not meet aesthetic standards, even if it is still edible. Restaurants and catering businesses generate waste through oversized portions and inefficient inventory management. Additionally, food loss happens at the production and distribution stages due to strict quality controls, surplus production, and poor transportation or storage conditions. These issues result in significant economic and environmental consequences, making food waste a critical global challenge.<br><br>Addressing food waste requires a combination of education, policy changes, and technological improvements. Consumers can reduce waste by planning meals, storing food correctly, and understanding food labeling. Businesses can implement better inventory control, donate surplus food, and sell imperfect but edible products. Governments and organizations play a crucial role in supporting redistribution programs, improving logistics, and promoting sustainable waste management practices. Additionally, composting and food recycling initiatives can help convert waste into useful resources such as biofuel or animal feed. By adopting these strategies, society can move towards a more efficient and sustainable food system.' },
            { type: 'fields', title: 'Answer with your group', fields: [
              { id: 'i2-1', label: 'Balance: does it show all sides fairly? Or is there bias (e.g. only Western ideas, stereotypes, missing views)?', placeholder: 'It assumes that…', rows: 3 },
              { id: 'i2-2', label: 'Accuracy: is anything wrong or misleading (= gives a wrong idea)?', placeholder: 'The statement about… is not true everywhere because…', rows: 3 },
              { id: 'i2-3', label: 'Objectivity: is it neutral? Or does it use persuasive or emotional words?', placeholder: 'Mostly…, but words like… ', rows: 2 },
              { id: 'i2-4', label: 'Citations: does it give references? Does it show different views?', placeholder: 'No/Yes, …', rows: 2 }
            ]},
            { type: 'sort', id: 'i2s', title: 'Game · Which problem is it?', hint: 'Each card is a problem in the AI text. <b>Drag</b> it into the right box — or <b>tap</b> a card, then tap a box.', buckets: [
              { label: 'Balance' }, { label: 'Accuracy' }, { label: 'Objectivity' }, { label: 'Citations' }
            ], items: [
              { text: 'It only talks about problems in rich countries.', answer: 0, why: 'Some views are missing, so it is not balanced.' },
              { text: 'It says composting helps, but many places have no composting.', answer: 1, why: 'The claim is not true everywhere.' },
              { text: 'It uses strong words like “a critical global challenge”.', answer: 2, why: 'Loaded words are less neutral.' },
              { text: 'It names no studies or sources.', answer: 3, why: 'We cannot check where the information comes from.' }
            ]},
            { type: 'teacher', ref: 'w4d5-t9' }
          ],
          answers: { items: [
            ['Balance', 'It assumes that solutions like better inventory management, food redistribution and composting work everywhere. In some regions, food waste comes more from infrastructure problems (e.g. no refrigeration, poor transport) than from consumer habits or business policies. Views from developing countries or other cultures would make it more global.'],
            ['Accuracy', 'Supermarkets throwing away “ugly” food is more common in some Western countries; in other places imperfect produce is sold in local markets. Composting and recycling: not all areas have composting, and making biofuel needs a lot of investment. A better text would say these limits.'],
            ['Objectivity', 'Mostly objective. Possible loaded language: “unnecessary disposal”, “significant economic and environmental consequences”.'],
            ['Citations', 'No references to studies, and no different views (e.g. debates about government rules, problems with large-scale redistribution). It depends on the prompt: if you ask for different views and references, the answer will be more balanced (but not perfect).']
          ]}
        },
        {
          id: 'i3', short: 'Checklist', minutes: 25, grouping: 'Groups', cowrite: true,
          title: 'Make a checklist',
          goal: 'Write key questions for one part of a checklist for checking AI text.',
          blocks: [
            { type: 'talk', title: 'Reflect — talk in groups', prompts: [
              'What problems have you noticed in AI texts?',
              'What makes a <b>good</b> academic answer? What makes a <b>bad</b> one?',
              'You are making a checklist to help students check AI text. What would you put in it?'
            ]},
            { type: 'cards', title: 'Four parts of the checklist — your teacher gives your group one part', pick: 'i3-mine', numbered: true, items: [
              { label: 'Accuracy and Reliability', text: 'Is the information correct and trustworthy?' },
              { label: 'Balance and Bias', text: 'Does it show different views fairly?' },
              { label: 'Objectivity and Language', text: 'Is the language neutral?' },
              { label: 'Citation and Supporting evidence', text: 'Where does the information come from?' }
            ]},
            { type: 'model', title: 'An example question', rows: [
              ['Balance and Bias', 'Does the response provide multiple perspectives, or does it favour one viewpoint?']
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Brainstorm 2–3 <b>key questions</b> for your part.' },
              { who: 'group', text: 'Start each question with <i>Does…?</i>, <i>Is…?</i> or <i>Can you…?</i>' },
              { who: 'group', text: 'Add them to the table. Press <b>Write together</b> so the class builds one checklist. Or share your questions with the class.' }
            ]},
            { type: 'table', id: 'i3t', title: 'Our checklist for AI-generated text', columns: ['Category', 'Key questions'], fixed: ['Accuracy and Reliability', 'Balance and Bias', 'Objectivity and Language', 'Citation and Supporting evidence'] },
            { type: 'tip', text: 'Great job! This checklist is not just for AI text. Use it to check <b>any</b> text in your research.' },
            { type: 'teacher', ref: 'w4d5-t10' }
          ],
          answers: { title: 'Suggested checklist', items: [
            ['Checklist', '<img src="assets/week4/ai-checklist.svg" alt="A checklist for AI-generated text with four categories: accuracy and reliability, balance and bias, objectivity and language, citations and evidence.">'],
            ['1 Balance & Bias', 'Does the response provide a balanced perspective, or does it favour a particular viewpoint? · Does it reinforce stereotypes or overlook key perspectives (e.g. gender, age, race)?'],
            ['2 Accuracy & Reliability', 'Are there any factual inaccuracies or misleading statements? · Does the response align with credible sources when cross-checked?'],
            ['3 Objectivity & Language', 'Is the response neutral and objective, or does it use persuasive/emotional language that suggests bias? · Does it clearly state facts, or does it make assumptions or generalisations?'],
            ['4 Citations & Supporting Evidence', 'Does the response cite sources or mention where the information comes from? · Can you verify the information by finding reliable sources that support it?']
          ]}
        }
      ]
    },

    /* ───────────────────────── 14A Teacher feedback on research summary discussions ───────────────────────── */
    {
      id: 'rsdfb', number: '04', code: '14A', minutes: 30,
      tone: 'plum', art: 'feedback',
      title: 'Teacher feedback on research summary discussions',
      subtitle: 'Talk to your teacher about yesterday’s discussion',
      outcome: 'Understand your teacher’s feedback on the Research Summary Discussion and add it to your action plan.',
      activities: [
        {
          id: 't1', short: 'Feedback', minutes: 30, grouping: 'Discussion groups → alone',
          title: 'Read the teacher’s feedback + Update your action plan',
          goal: 'Understand your teacher’s feedback. Then add it to your action plan.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Read the teacher’s feedback (15 min)', items: [
              { who: 'alone', text: 'Open <b>“Shared with me”</b>. Find <b>DEC 15 Week 4 Research Summary Discussion: Teacher’s feedback</b>.' },
              { who: 'alone', text: 'Read the strengths and the areas for improvement.' },
              { who: 'group', text: 'Sit with your <b>discussion group</b>. Do you all understand the feedback? Compare it with your peer feedback and self-evaluation.' },
              { who: 'group', text: 'Your teacher visits each group. Ask your questions.' }
            ]},
            { type: 'language', title: 'Questions to ask your teacher', tabs: false, groups: [
              { label: 'Ask', phrases: ['What did you mean by…?', 'Can you give an example of…?', 'How can I improve my…?'] }
            ]},
            { type: 'fields', fields: [
              { id: 't1-1', label: 'The most important point in my teacher’s feedback', placeholder: 'Our group needs to…', rows: 2, share: false },
              { id: 't1-2', label: 'My questions for my teacher', placeholder: 'What did you mean by…? Can you give an example of…?', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t11' },

            { type: 'quiz', id: 't1q', title: 'Part 2 · Update your action plan (15 min) — Quick check: which action is clear and specific?', items: [
              { q: 'Which action is better?', options: ['I will speak more.', 'I will give my opinion at least 3 times and add a reason each time.'], answer: 'I will give my opinion at least 3 times and add a reason each time.', why: 'It says exactly what to do, so you can check it.' },
              { q: 'Which action is better?', options: ['I will ask a question to build on a classmate’s idea, e.g. “Can you give an example?”', 'I will be a better listener.'], answer: 'I will ask a question to build on a classmate’s idea, e.g. “Can you give an example?”', why: 'It is specific and gives the words to use.' }
            ]},
            { type: 'tip', text: 'Go back to <b>Thursday → Self-evaluation</b>. Look at your <b>Action plan for further improvement</b> column. Does it include your teacher’s feedback?' },
            { type: 'fields', fields: [
              { id: 't2-1', label: 'Two specific actions for my next discussion (e.g. the Week 5 presentation)', placeholder: '1. I will… so that… 2. …', rows: 3, share: false }
            ]}
          ]
        }
      ]
    }
  ],

  extras: [
    {
      id: 'x1', short: 'Check an AI answer', minutes: 15, grouping: 'Alone', category: 'AI literacy',
      title: 'Use the checklist on your own AI answer',
      goal: 'Ask an AI tool about governments and food waste. Check the answer with your checklist.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Ask an AI tool: “What are governments doing to reduce food waste?”' },
          { who: 'alone', text: 'Ask again. This time ask for different viewpoints and references.' },
          { who: 'alone', text: 'Check both answers with the four parts of your checklist. Don’t use the AI text in your essay.' }
        ]},
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'What changed when I asked for viewpoints and references? What problems were still there?', placeholder: 'The second answer… but it still…', rows: 4 }
        ]}
      ]
    }
  ],

  glossary: [
    ['peer feedback', 'Comments from a classmate about your work.', 'My partner’s peer feedback helped me see my weak paragraph.'],
    ['action plan', 'A list of clear, specific steps you will take to improve.', 'My action plan: use a variety of linking words.'],
    ['lifted', 'Copied directly from a source without paraphrasing.', 'If 50% of the text is lifted, Use of sources needs work.'],
    ['synthesise', 'To combine ideas from several sources into one point.', 'Synthesise Gunders and Berti et al. in one paragraph.'],
    ['collocation', 'Words that are often used together.', '“Alleviate starvation” is a strong collocation.'],
    ['nominalisation', 'Turning a verb or adjective into a noun.', 'reduce → the reduction of food waste'],
    ['clarity', 'Being clear and easy to understand.', 'Correct this paragraph for grammar and clarity.'],
    ['alleviate', 'To make something bad less severe.', 'GM foods helped alleviate starvation to some extent.'],
    ['limiting word', 'A word in a question that narrows what you must write about.', '“More” is the limiting word in the question.'],
    ['macro rhetorical function', 'The main purpose of a whole text.', 'The macro rhetorical function of an argument essay is to persuade.'],
    ['position', 'Your opinion or stance on a question.', 'Our position is that governments need to do more.'],
    ['scale (up)', 'To make something bigger so it reaches more people.', 'Investment is needed to scale the solutions.'],
    ['incentivise', 'To encourage someone to do something by offering a benefit.', 'Governments can incentivise businesses to innovate.'],
    ['bias', 'Unfair support for one view or group over others.', 'AI images can show gender and race bias.'],
    ['stereotype', 'A fixed, oversimplified idea about a group of people.', 'Showing every CEO as a man reinforces a stereotype.'],
    ['reliability', 'How much you can trust information.', 'Check the reliability of AI output against credible sources.'],
    ['objective', 'Based on facts, not feelings or opinions.', 'Is the AI response objective?'],
    ['misleading', 'Giving a wrong idea or impression.', 'Some statements in the AI text are misleading.'],
    ['assumption', 'Something accepted as true without proof.', 'The text assumes composting is available everywhere.'],
    ['verify', 'To check that something is true.', 'Verify the information with reliable sources.']
  ]
};
