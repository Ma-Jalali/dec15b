/* DEC15 · Week 4, Day 5 — lesson content.
   Teacher’s Book: W4 D5 · 11A Feedback session on Week 3 Integrated Writing Practice Assessment (75)
   · 12A Academic writing skills Workshop set up (75) · 13A AST: Digital literacy and AI (60)
   · 14A Teacher feedback on research summary discussions (30).
   Texts: Week 3 + Week 4 sources (lessons/week3/sources.js, lessons/week4/sources.js).
   Activity titles use the Teacher’s Book headings. Teacher notes live in the database (teacher_notes), refs only here.
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
  journey: 'Today you act on feedback: you review your Week 3 essay with a partner and with AI, and make an action plan. Then you analyse Monday’s essay question, take notes from the sources and plan your argument. You also learn to check AI-generated text for bias, and you talk to your teacher about your discussion feedback.',
  finish: { title: 'Week 5 · Monday', text: 'Academic writing skills workshop: write the essay together' },

  sections: [
    /* ───────────────────────── 11A Feedback session ───────────────────────── */
    {
      id: 'feedback', number: '01', code: '11A', minutes: 75,
      tone: 'teal', art: 'feedback',
      title: 'Feedback session on Week 3 Integrated Writing Practice Assessment',
      subtitle: 'Self, peer and AI feedback on your essay',
      outcome: 'Give effective feedback to your peers, use AI to build language awareness, and act on feedback to improve your writing performance.',
      activities: [
        {
          id: 'f1', short: 'Self-reflection', minutes: 10, grouping: 'Alone',
          title: 'Self-reflection',
          goal: 'Choose one paragraph from your Week 3 essay and prepare questions about your teacher’s feedback.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Find your <b>Week 3 Integrated Writing Practice Assessment</b> submission on Canvas.' },
              { who: 'alone', text: 'Choose <b>ONE paragraph</b>. Paste it into the first column of the table below (<b>Original version</b>). You complete the other two columns later with AI.' },
              { who: 'alone', text: 'Reflect on the written feedback from your teacher. Write some <b>questions</b> to clarify anything that is unclear — your teacher will come around to talk to you.' }
            ]},
            { type: 'table', id: 'f1t', title: 'My paragraph: original and corrected', columns: ['Original version', 'Corrected for grammar and clarity', 'What changes have been made? Why? Are you sure AI is correct?'], rows: 1, send: true, sendLabel: 'Share with your partner (optional)', sendHint: 'Send a read-only copy to your partner or your teacher — only they will see it, in “Shared with me”.' },
            { type: 'model', title: 'An example of a completed template', rows: [
              ['Original version', 'The population of world has increased dramatically in today’s age, which led to the food shortage problem. In order to solve this situation, scientists create and cultivate the genetically-modified food. The GM-food actually boosts food supply and meets the starvation to some extent (Dudeja et al,. (2017). Despite it also causes some adverse influences. There are volumes of serious problems were brought by the engineered food. This is because, the first, GM-food may have negative impacts on environment, the second, the humans health can be affected by these new crops.'],
              ['Corrected for grammar and clarity', 'The global population has increased dramatically in recent years, leading to problems with food shortages. To address this situation, scientists have developed and cultivated genetically modified (GM) foods. These foods have indeed helped boost the food supply and alleviate starvation to some extent (Dudeja et al., 2017). However, it has also brought about adverse consequences, including serious environmental issues and damaging impacts on human health.'],
              ['What changes? Why?', 'Vocabulary (in today’s age → in recent years) · Verb tense · Incomplete sentence · Despite + noun (phrase)']
            ]},
            { type: 'fields', title: 'My teacher’s feedback', fields: [
              { id: 'f1-q', label: 'Questions for my teacher about the written feedback', placeholder: 'What did you mean by…? How can I improve…?', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t1' }
          ]
        },
        {
          id: 'f2', short: 'Peer feedback', minutes: 30, grouping: 'Pairs',
          title: 'Peer feedback',
          goal: 'Read your partner’s essay, give feedback with the Peer and Teacher Feedback Tool, and discuss language errors.',
          blocks: [
            { type: 'steps', items: [
              { who: 'pair', text: '<b>Exchange essays</b> with a partner (swap devices or show your essay on the screen).' },
              { who: 'alone', text: 'Read your partner’s essay and complete the <b>Peer and Teacher Feedback Tool</b> below. Use the language for feedback from Week 2.' },
              { who: 'alone', text: 'Read the essay again and <b>highlight</b> any grammar or language errors you can see.' },
              { who: 'pair', text: 'Discuss how these errors could be corrected. Then <b>send</b> your feedback to your partner.' },
              { who: 'alone', text: 'Look back at your <b>self-evaluation</b> from the W3 D4 homework. How does the peer feedback support it?' }
            ]},
            { type: 'language', title: 'Useful expressions for giving peer feedback (W2 D2. 6A)', tabs: false, groups: [
              { label: 'Suggesting', phrases: ['For more…, perhaps you could…', 'Perhaps …-ing could…', 'For more…, consider …-ing…', 'I would recommend …-ing…', 'I suggest …-ing… rather than…', 'You could possibly…', 'It might be beneficial/helpful to…'] },
              { label: 'Pointing out problems', phrases: ['Paying a bit more attention to… would…', 'I noticed… that you might want to…', 'I noticed a few instances where…', 'Don’t forget to… / Remember to…', 'Try to… so…'] },
              { label: 'Praising + building', phrases: ['… was good; to make it even better, you might…', 'The way you have… makes…', 'You’ve… but maybe you could…', 'To (further) strengthen…, it would help…'] }
            ]},
            { type: 'form', id: 'f2f', title: 'Peer and Teacher Feedback Tool - Integrated Writing Task', intro: 'Choose Yes, Mostly or Needs work for each criterion and add a comment with an example. Then write clear, specific actions at the end.', observe: 'Whose essay are you reviewing?', cols: ['Comments'], sections: [
              { label: 'Argumentation', items: [
                'The overall argument of the essay is clear and well developed.',
                'The main idea of each paragraph is well developed [with relevant supporting evidence].',
                'There is range of persuasive language to convince the reader of your opinion.',
                'Arguments and evidence from sources are used effectively.'
              ]},
              { label: 'Use of sources', hint: 'If 50% or more of the text is lifted = all Use of sources ‘Needs work’', items: [
                'The sources are synthesised effectively.',
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
                'Vocabulary is accurate, including accurate collocations.',
                'Hedging language is used effectively.',
                'Vocabulary is formal.'
              ]},
              { label: 'Grammar', items: [
                'There is a range of grammatical structures, including appropriate nominalisation.',
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
              { id: 'f2-s', label: 'How does the peer feedback I received support (or differ from) my W3 D4 self-evaluation?', placeholder: 'My partner also thought… but they noticed…', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t2' }
          ]
        },
        {
          id: 'f3', short: 'AI language review', minutes: 25, grouping: 'Alone',
          title: 'Language review with AI',
          goal: 'Use AI to correct your paragraph — then decide whether each change is really correct.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open the <b>Vanilla GPT-4 agent</b> in <b>Cogniti</b>.' },
              { who: 'alone', text: 'Paste the paragraph you chose in <b>Self-reflection</b> with the prompt below.' },
              { who: 'alone', text: 'Copy the amended version into the <b>second column</b> of your table (Activity 1, Self-reflection).' },
              { who: 'alone', text: '<b>Highlight</b> the grammar changes and the language that was rephrased.' },
              { who: 'alone', text: 'In the <b>final column</b>, write what changed and why you think Cogniti changed it. Do you think the changes are correct?' },
              { who: 'alone', text: 'Record useful words and phrases for future writing tasks.' }
            ]},
            { type: 'model', title: 'The prompt', text: 'Correct this paragraph for grammar and clarity.', note: 'AI can be wrong, or it can change your meaning. Check every change — you are the writer.' },
            { type: 'fields', title: 'Language I learned', fields: [
              { id: 'f3-1', label: 'Useful words and phrases for future writing tasks', placeholder: 'in recent years (not “in today’s age”) · alleviate starvation · bring about adverse consequences…', rows: 4 }
            ]},
            { type: 'tip', text: '<b>Optional (if time):</b> before your action plan, use the <a href="https://app.cogniti.ai/agents/67b3f3ddeb50a217bae1c202/chat?k=yOLe1ZKWVc5atMqKejnT7cbeqhlpWmn34q_P9SgeM8E" target="_blank" rel="noopener">CET AI Agent</a> to evaluate your essay. Follow its automated prompt instructions (add the question and copy the reading and listening texts into the message with your paragraph). Compare its feedback with your peer and teacher feedback.' },
            { type: 'fields', fields: [
              { id: 'f3-2', label: 'Optional: How is the AI agent’s feedback similar to / different from my peer and teacher feedback?', placeholder: 'The agent also said… but it didn’t notice…', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t3' }
          ]
        },
        {
          id: 'f4', short: 'Action plan', minutes: 10, grouping: 'Alone',
          title: 'Action plan',
          goal: 'Use all your feedback to write clear, specific actions for your next essay.',
          blocks: [
            { type: 'tip', text: 'Look at the feedback in <b>“Shared with me”</b> (from your partner), your teacher’s written feedback and your AI review. What will you do differently on Monday?' },
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
      outcome: 'Understand what a writing question is asking, select relevant information and take notes from sources, and take a position and plan a response.',
      activities: [
        {
          id: 'p1', short: 'The question', minutes: 10, grouping: 'Pairs',
          title: 'Analyse the Question',
          goal: 'Find the content words, the limiting word and what the question asks you to do.',
          blocks: [
            { type: 'figure', src: 'assets/week4/three-actors.svg', alt: 'Three actors in the food system: businesses, governments and consumers.', caption: 'Who should solve food waste? Think about the solutions from the last two weeks and your research.' },
            { type: 'question' },
            { type: 'quiz', id: 'p1q', title: 'Discuss with a partner, then choose', items: [
              { q: 'a) Which are the key <b>content words</b>?', options: ['governments / solve / problem / food waste', 'should / discuss / position / sources', 'more / reference / sources'], answer: 'governments / solve / problem / food waste', why: 'These words tell you the topic.' },
              { q: 'b) Which word <b>limits</b> the question?', options: ['governments', 'more', 'problem', 'sources'], answer: 'more', why: '<i>More</i> limits the scope: should actions be <b>increased beyond current efforts</b>?' },
              { q: 'c) What is the question asking you to do?', options: ['Consider current government efforts, argue whether they should be increased, and justify your position', 'Describe all the causes of food waste', 'Compare food waste in two countries'], answer: 'Consider current government efforts, argue whether they should be increased, and justify your position', why: '“Should” and “Discuss your position…” show you must take and justify a position.' },
              { q: 'd) What is the main purpose (macro rhetorical function) of an argument essay?', options: ['To persuade the reader of your position', 'To describe a process', 'To summarise the sources'], answer: 'To persuade the reader of your position', why: 'The Integrated Writing Task is an argument essay — you must take a position.' }
            ]},
            { type: 'teacher', ref: 'w4d5-t4' }
          ]
        },
        {
          id: 'p2', short: 'Your position', minutes: 10, grouping: 'Groups',
          title: 'Activity 1 Discuss your position',
          goal: 'Use the last two weeks of input and your research to choose an initial position.',
          blocks: [
            { type: 'choose', id: 'p2c', title: 'Our initial position', options: [
              'Governments need to significantly increase their efforts.',
              'All actors in the food system should be doing more.',
              'Businesses and consumers need to do more, not governments.',
              'Governments are already doing enough.'
            ]},
            { type: 'talk', prompts: [
              'Which solutions from Weeks 3 and 4 (food banks, upcycled food, apps, laws, investment…) need government support?',
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
          goal: 'Listen to Gunders’ TED talk again and take handwritten notes that answer the question.',
          blocks: [
            { type: 'key', title: 'Good notes', points: [
              'Only select information that is <b>relevant to the question</b>.',
              'Try to <b>paraphrase</b> the ideas as you take notes.',
              'Group ideas from each text that are on the <b>same theme</b>.'
            ]},
            { type: 'listening', source: 'Gunders (2024) · TED', title: 'How to turn the tables on food waste', videoId: '6iqXH9RPK1w', start: 0, clip: 'full talk · about 11 minutes', transcripts: [['gunders', 'Transcript (adapted)']] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Listen once and take notes <b>by hand</b>. Listen for what governments do — and what they could do more of.' },
              { who: 'group', text: 'Compare your notes with your group members. Add relevant points to the note-taking table in the next activity.' }
            ]},
            { type: 'fields', fields: [
              { id: 'p3-1', label: 'Gunders (2024): my notes on governments and food waste (type them up after listening)', placeholder: 'Progress too slow… investment needed to scale… laws restricting food going to landfill…', rows: 4 }
            ]}
          ]
        },
        {
          id: 'p4', short: 'Note-taking table', minutes: 15, grouping: 'Groups', cowrite: true,
          title: 'Note-taking table',
          goal: 'Build a group note-taking table from the input texts and your own research.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Press <b>Write together</b> to share one page with your group, or each fill the table below.' },
              { who: 'group', text: 'Add your Gunders notes, then relevant points from the other input texts (Weeks 3 and 4) and from your <b>own sources</b>. One source per row.' }
            ]},
            { type: 'table', id: 'p4t', title: 'Note-taking table', columns: ['Source', 'Relevant points'], rows: 5, extraRows: true },
            { type: 'sources', ids: ['gunders', 'nicastro', 'berti', 'aboutthat', 'castro', 'huang'] },
            { type: 'teacher', ref: 'w4d5-t6' },
            { type: 'teacher', ref: 'w4d5-t7' }
          ]
        },
        {
          id: 'p5', short: 'Plan', minutes: 20, grouping: 'Groups',
          title: 'Making a plan',
          goal: 'Decide on a clear position and two key arguments — and plan your body paragraphs.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Decide on a <b>clear position</b>.' },
              { who: 'group', text: 'Think of <b>TWO main reasons</b> why you support this position.' },
              { who: 'group', text: 'Look back at your note-taking table. How can you use the information to form <b>two key arguments</b>?' },
              { who: 'group', text: 'Discuss how to organise your two arguments in the body paragraphs. Then complete the plan.' }
            ]},
            { type: 'key', tone: 'warn', title: 'Be selective', points: [
              'You do <b>NOT</b> need to include all the information from your notes. Be selective!',
              'Bring your plan to class on Monday. Don’t start writing, and don’t use AI to generate a response over the weekend — you write the essay in class.'
            ]},
            { type: 'plan' }
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
      outcome: 'Recognise bias in AI output, evaluate an AI-generated text critically, and build a checklist for analysing AI-generated text.',
      activities: [
        {
          id: 'i1', short: 'Warmer', minutes: 15, grouping: 'Groups',
          title: 'Warmer',
          goal: 'Watch a short video about bias in AI images and test an image generator yourself.',
          blocks: [
            { type: 'listening', source: 'YouTube', title: 'Bias in AI-generated images', videoId: 'L2sQRrf1Cd8', start: 48, clip: 'play to 2:16', transcripts: [] },
            { type: 'quiz', id: 'i1q', items: [
              { q: '1. What is the main issue in the video about AI-generated images?', options: ['Gender and race bias, which leads to stereotypes', 'The images are too expensive to make', 'The images are low quality'], answer: 'Gender and race bias, which leads to stereotypes', why: 'The generators repeat the biases in the data they were trained on.' }
            ]},
            { type: 'steps', title: '2. Try it yourself', items: [
              { who: 'pair', text: 'Enter these prompts into an image generator: <b>Nurse</b> · <b>Teacher</b> · <b>CEO</b>. What do you find? Is this issue getting better?' },
              { who: 'pair', text: 'ChatGPT and Copilot make 1 image at a time — ask them to generate a few more.' }
            ]},
            { type: 'tip', text: 'Image generators: <a href="https://chatgpt.com/" target="_blank" rel="noopener">ChatGPT</a> · <a href="https://copilot.microsoft.com/" target="_blank" rel="noopener">Copilot</a> · <a href="https://www.canva.com/ai-image-generator/" target="_blank" rel="noopener">Canva</a> (or any of your choice).' },
            { type: 'talk', title: '3. Discuss in groups', prompts: [
              'If AI misrepresents gender, race or age in images, how might it misrepresent <b>facts, perspectives or arguments</b> in academic contexts?',
              'What are the risks of using AI-generated text in research if we don’t critically evaluate its accuracy, reliability and bias?'
            ]},
            { type: 'teacher', ref: 'w4d5-t8' }
          ],
          answers: { items: [
            ['Misrepresenting in academic contexts', 'AI can oversimplify issues, reinforce stereotypes, repeat common biases, exclude voices (it relies on mainstream sources and ignores diverse perspectives) and present outdated information (older datasets, missing new research). Example: AI might explain poverty using only economic mismanagement, ignoring historical and systemic factors.'],
            ['Risks', 'Your own ideas — this leads into why we must evaluate AI-generated output.']
          ]}
        },
        {
          id: 'i2', short: 'Evaluate AI text', minutes: 20, grouping: 'Groups',
          title: 'Evaluating AI output',
          goal: 'Use your Week 2 text-analysis skills to judge an AI answer about food waste.',
          blocks: [
            { type: 'key', title: 'Skills from Week 2 that also work for AI output', points: [
              'Distinguish between <b>facts</b> and <b>opinions</b>.',
              'Evaluate the <b>evidence</b> and <b>sources</b> used.',
              'Identify any <b>assumptions</b> in the text.',
              'Recognise potential <b>bias</b>.'
            ]},
            { type: 'model', title: 'The prompt', text: '“What are the main causes of food waste, and what are the most effective solutions?”' },
            { type: 'passage', id: 'i2p', title: 'AI-generated text — highlight anything you question', text: 'Food waste occurs at various stages of the supply chain due to multiple factors. At the household level, overbuying, improper storage, and confusion over expiration dates lead to unnecessary disposal of food. Supermarkets contribute to the problem by discarding produce that does not meet aesthetic standards, even if it is still edible. Restaurants and catering businesses generate waste through oversized portions and inefficient inventory management. Additionally, food loss happens at the production and distribution stages due to strict quality controls, surplus production, and poor transportation or storage conditions. These issues result in significant economic and environmental consequences, making food waste a critical global challenge.<br><br>Addressing food waste requires a combination of education, policy changes, and technological improvements. Consumers can reduce waste by planning meals, storing food correctly, and understanding food labeling. Businesses can implement better inventory control, donate surplus food, and sell imperfect but edible products. Governments and organizations play a crucial role in supporting redistribution programs, improving logistics, and promoting sustainable waste management practices. Additionally, composting and food recycling initiatives can help convert waste into useful resources such as biofuel or animal feed. By adopting these strategies, society can move towards a more efficient and sustainable food system.' },
            { type: 'fields', title: 'Answer with your group', fields: [
              { id: 'i2-1', label: 'Balance: is it a balanced perspective, or does it reflect bias (e.g. Western sources, stereotypes, missing perspectives)?', placeholder: 'It assumes that…', rows: 3 },
              { id: 'i2-2', label: 'Accuracy: are there any factual inaccuracies or misleading statements?', placeholder: 'The statement about… is not true everywhere because…', rows: 3 },
              { id: 'i2-3', label: 'Objectivity: is it objective, or does it use persuasive/emotional language?', placeholder: 'Mostly…, but words like… ', rows: 2 },
              { id: 'i2-4', label: 'Citations: does it give proper citations or acknowledge different viewpoints?', placeholder: 'No/Yes, …', rows: 2 }
            ]},
            { type: 'teacher', ref: 'w4d5-t9' }
          ],
          answers: { items: [
            ['Balance', 'It assumes that solutions like better inventory management, food redistribution and composting are universally applicable. In some regions, food waste is driven more by infrastructure challenges (e.g. lack of refrigeration, poor transport) than by consumer habits or business policies. Perspectives from developing countries or different cultural attitudes would make it more globally inclusive.'],
            ['Accuracy', 'Supermarkets discarding food for aesthetic reasons is more common in some Western countries; elsewhere imperfect produce may be sold in local markets. Composting and recycling: not all areas have composting facilities, and converting food into biofuel needs significant investment — a more precise statement would acknowledge these limits.'],
            ['Objectivity', 'Mostly objective. Possible examples of loaded language: “unnecessary disposal”, “significant economic and environmental consequences”.'],
            ['Citations', 'No citations or references to specific studies, and no differing perspectives (e.g. debates over government regulation, challenges of large-scale redistribution). The answer depends on the prompt: if you ask for different viewpoints and references, the output will be more balanced (though not perfect).']
          ]}
        },
        {
          id: 'i3', short: 'Checklist', minutes: 25, grouping: 'Groups', cowrite: true,
          title: 'Make a checklist',
          goal: 'Write key questions for one category of a checklist for analysing AI-generated text.',
          blocks: [
            { type: 'talk', title: 'Reflect — discuss in groups', prompts: [
              'What issues have you noticed in AI-generated texts?',
              'What do you think makes a <b>good</b> academic response? What makes a <b>bad</b> one?',
              'If you made a checklist to help students analyse AI-generated text, what would you include?'
            ]},
            { type: 'cards', title: 'Suggested elements — your teacher gives your group one category', pick: 'i3-mine', numbered: true, items: [
              { label: 'Accuracy and Reliability', text: 'Is the information correct and trustworthy?' },
              { label: 'Balance and Bias', text: 'Does it show different perspectives fairly?' },
              { label: 'Objectivity and Language', text: 'Is the language neutral?' },
              { label: 'Citation and Supporting evidence', text: 'Where does the information come from?' }
            ]},
            { type: 'model', title: 'An example question', rows: [
              ['Balance and Bias', 'Does the response provide multiple perspectives, or does it favour one viewpoint?']
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Brainstorm <b>key questions</b> that help analyse your category.' },
              { who: 'group', text: 'Add them to the table. Press <b>Write together</b> so the class can build one checklist — or share your questions with the class.' }
            ]},
            { type: 'table', id: 'i3t', title: 'Our checklist for AI-generated text', columns: ['Category', 'Key questions'], fixed: ['Accuracy and Reliability', 'Balance and Bias', 'Objectivity and Language', 'Citation and Supporting evidence'] },
            { type: 'tip', text: 'This checklist is not just for AI-generated text — use it to evaluate <b>any</b> text in your future research.' },
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
      outcome: 'Understand your teacher’s feedback on the Research Summary Discussion and use it to update your action plan.',
      activities: [
        {
          id: 't1', short: 'Read the feedback', minutes: 15, grouping: 'Discussion groups',
          title: 'Read the teacher’s feedback',
          goal: 'Read the feedback your teacher sent your discussion group and prepare your questions.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Open <b>“Shared with me”</b> and find <b>DEC 15 Week 4 Research Summary Discussion: Teacher’s feedback</b>. Read the strengths and areas for improvement.' },
              { who: 'group', text: 'Sit with your <b>discussion group</b>. Do you all understand the feedback? Compare it with your peer feedback and self-evaluation.' },
              { who: 'group', text: 'Your teacher comes to sit with each group. Ask your questions.' }
            ]},
            { type: 'fields', fields: [
              { id: 't1-1', label: 'The most important point in my teacher’s feedback', placeholder: 'Our group needs to…', rows: 2, share: false },
              { id: 't1-2', label: 'Questions for my teacher', placeholder: 'What did you mean by…? Can you give an example of…?', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t11' }
          ]
        },
        {
          id: 't2', short: 'Action plan', minutes: 15, grouping: 'Alone',
          title: 'Update your action plan',
          goal: 'Add your teacher’s feedback to your Action plan for further improvement.',
          blocks: [
            { type: 'tip', text: 'Go back to <b>Thursday → Self-evaluation</b> and check your <b>Action plan for further improvement</b> column. Does it include your teacher’s feedback?' },
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
      goal: 'Ask an AI tool about government action on food waste and check the answer with your checklist.',
      blocks: [
        { type: 'steps', items: [
          { who: 'alone', text: 'Ask an AI tool: “What are governments doing to reduce food waste?” Then ask again and request different viewpoints and references.' },
          { who: 'alone', text: 'Use the four categories of the checklist to evaluate both answers. Don’t use the text in your essay.' }
        ]},
        { type: 'fields', fields: [
          { id: 'x1-1', label: 'What changed when I asked for viewpoints and references? Which problems remained?', placeholder: 'The second answer… but it still…', rows: 4 }
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
