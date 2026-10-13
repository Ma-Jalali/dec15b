/* DEC15 · Week 4, Day 5 — lesson content.
   Teacher’s Book: W4 D5 · 11A Feedback session on Week 3 Integrated Writing Practice Assessment (75)
   · 12A Academic writing skills Workshop set up (75) · 13A AST: Digital literacy and AI (60)
   · 14A Teacher feedback on research summary discussions (30).
   Texts: Week 3 + Week 4 sources (lessons/week3/sources.js, lessons/week4/sources.js).
   v2 (teacher feedback): fewer tabs, plainer English, a game in every stage. Merged tabs keep the id of their first
   TB activity; each TB heading is the title of the first block of its part ('Part 1 · …'). All block / field / table ids
   are unchanged (saved work). Teacher notes live in the database (teacher_notes), refs only here.
   Sharing (send: true): peer feedback tool (f2f), optional AI paragraph table (f1t).
   v3 (teacher feedback): each stage has a story and ends with a quick win + can-do check; personal warm-ups,
   useful pre-taught words, realistic gist/detail questions, B2 speaking language with model, practice and freer task.
   New block ids start with g3-.
   v4 (teacher feedback): one language point per activity, taught in five clear parts
   (Part 1 Notice · Part 2 Clarify · Part 3 Controlled · Part 4 Less controlled · Part 5 Production):
   giving/responding to feedback (f2) · stating a position (h4-pos) · reporting a source (h4-rep)
   · hedging (h4-hdg) · evaluating a text (h4-ev). Production in each = the Teacher’s Book task.
   Input tabs (p3 listening, i2 AI text) keep their questions and get a note-taking frame for the essay.
   Group-decision language (old p1 bank, chat and sort g3-p1s) moved to extras (h4-x2). New ids start with h4-. */

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
          id: 'f1', short: 'Reflect', minutes: 10, grouping: 'Pairs → alone',
          title: 'Self-reflection',
          goal: 'Talk about feedback. Then choose one paragraph from your Week 3 essay and write questions about your teacher’s feedback.',
          blocks: [
            { type: 'scale', id: 'g3-f1s', title: 'Warm-up (3 min) · Where do you stand?', statement: 'Feedback from a classmate can be as useful as feedback from a teacher.', ends: ['Strongly disagree', 'Strongly agree'], mid: 'Not sure' },
            { type: 'talk', title: 'Talk with a partner, then share one idea with the class', prompts: [
              'What is the most useful feedback you have ever had (in any subject, job or sport)? Why was it useful?',
              'When you get an essay back, what do you read first: the mark or the comments?',
              'What do you usually <b>do</b> with feedback after you read it?'
            ]},
            { type: 'steps', title: 'Self-reflection (7 min)', items: [
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
          id: 'f2', short: 'Peer feedback', minutes: 35, grouping: 'Pairs',
          title: 'Peer feedback',
          goal: 'Language point: giving and responding to feedback. Learn the phrases, practise them, then use them in a real feedback meeting about your partner’s essay.',
          blocks: [
            { type: 'model', title: 'Part 1 · Notice (2 min) · Two sentences from a feedback meeting', list: [
              '“<b>One thing that works really well is</b> your position. It’s clear from the first paragraph.”',
              '“<b>It might be worth</b> naming the problem again.”'
            ], note: 'Mia is giving feedback on Ravi’s essay. Look at the words in bold.' },
            { type: 'quiz', id: 'h4-f2n', title: 'What is Mia doing?', items: [
              { q: 'Sentence 1: what is Mia doing?', options: ['Praising', 'Suggesting a change', 'Responding'], answer: 'Praising', why: 'She says exactly what is good: the position.' },
              { q: 'Sentence 2: why does Mia say <b>might</b>?', options: ['To make her suggestion soft and polite', 'Because she is not sure about the essay', 'To talk about the future'], answer: 'To make her suggestion soft and polite', why: 'Soft words make feedback kind, so the writer listens.' }
            ]},

            { type: 'key', title: 'Part 2 · Clarify (4 min) · What is good feedback?', points: [
              '<b>Feedback</b> = telling a writer what works and what to change.',
              'Good feedback is <b>specific</b> (it says where) and <b>kind</b> (it uses soft words like <i>might</i>, <i>could</i>).',
              'The writer <b>responds</b>: accept it, ask a question, or explain a choice.'
            ]},
            { type: 'model', title: 'The phrases · with everyday examples', rows: [
              ['Praise (say what is good)', 'One thing that works really well is… <br><i>One thing that works really well is your <b>first slide</b>. It’s very clear.</i>'],
              ['Suggest (softly)', 'It might be worth + -ing… / Have you thought about + -ing…? <br><i>It might be worth <b>adding</b> a photo.</i> · <i>Have you thought about <b>using</b> bigger letters?</i>'],
              ['Point out a problem (gently)', 'I wasn’t quite sure what you meant by… / This part could be clearer if you… <br><i>I wasn’t quite sure what you meant by “soon”.</i>'],
              ['Respond: accept', 'That’s a fair point. I’ll… <br><i>That’s a fair point. I’ll change the colour.</i>'],
              ['Respond: ask', 'Could you show me an example? <br><i>Could you show me where the problem is?</i>'],
              ['Respond: explain', 'I see what you mean, but I did that because… <br><i>I see what you mean, but I used red because it’s our team colour.</i>']
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> “It might be worth <s>to add</s>” → It might be worth <b>adding</b>. “Have you thought about <s>add</s>” → about <b>adding</b>. And don’t only say “Good!” — say <b>what</b> is good.' },

            { type: 'cloze', id: 'g3-f2c', title: 'Part 3 · Controlled practice (4 min) · Complete the feedback', text: '{{1}} really well is your introduction. However, I {{2}} what you meant by “it” in the second sentence. It {{3}} replacing “it” with the noun. {{4}} adding a citation after the statistic? I’d also suggest different linking words {{5}} starting three sentences with “This”.', options: ['One thing that works', 'wasn’t quite sure', 'might be worth', 'Have you thought about', 'rather than'], answers: ['One thing that works', 'wasn’t quite sure', 'might be worth', 'Have you thought about', 'rather than'], why: ['Start with specific praise.', 'A gentle way to point out a problem.', 'It might be worth + -ing = a tactful suggestion.', 'A question makes the suggestion softer.', 'suggest X rather than Y.'] },
            { type: 'quiz', id: 'h4-f2q', title: 'Quick check · Choose the correct form', items: [
              { q: 'It might be worth ___ a second source.', options: ['add', 'to add', 'adding'], answer: 'adding', why: 'worth + -ing.' },
              { q: 'Have you thought about ___ the title?', options: ['change', 'changing', 'to change'], answer: 'changing', why: 'about + -ing.' },
              { q: 'I’d suggest a full stop ___ a comma here.', options: ['rather than', 'instead', 'more than'], answer: 'rather than', why: 'suggest X rather than Y.' }
            ]},

            { type: 'chat', title: 'Part 4 · Less controlled practice (5 min) · Model: two students give feedback', right: 'Ravi', lines: [
              ['Mia', '<mark>One thing that works really well is</mark> your position. It’s clear from the first paragraph.'],
              ['Ravi', 'Thanks! What about my body paragraphs?'],
              ['Mia', '<mark>I wasn’t quite sure what you meant by</mark> “this problem” in paragraph 2. <mark>It might be worth</mark> naming the problem again.'],
              ['Ravi', '<mark>That’s a fair point. I’ll</mark> change it. Anything about sources?'],
              ['Mia', '<mark>Have you thought about</mark> adding a second source? Right now the paragraph only uses Berti et al.'],
              ['Ravi', '<mark>Could you show me</mark> where a second source would fit?']
            ]},
            { type: 'model', title: 'Model · one spin', rows: [
              ['Spin', '<b>a poster with tiny writing</b> + <b>a soft suggestion</b>'],
              ['A', '“One thing that works really well is the colours. <b>It might be worth</b> making the writing bigger.”'],
              ['B', '“<b>That’s a fair point. I’ll</b> use size 24.”']
            ], note: 'A gives feedback with the phrase on the reel. B responds: accept, ask or explain.' },
            { type: 'spinner', id: 'h4-f2sp', title: 'Spin and give feedback (in pairs)', text: 'Spin. Give feedback on the work with the phrase type on reel 2. Your partner responds. Then swap.', reels: [
              { label: 'Your partner’s work', start: 'Spin!', items: ['a poster with tiny writing', 'an email with no greeting', 'a presentation with 25 slides', 'a recipe with no amounts', 'a paragraph with no citation', 'a CV with three spelling mistakes', 'a paragraph where every sentence starts with “This”'] },
              { label: 'Say…', start: '…', items: ['one specific praise', 'a soft suggestion', 'a gentle problem'] }
            ]},

            { type: 'key', title: 'Part 5 · Production (24 min) · Be the “editor” your partner needs', points: [
              '<b>Read and rate (14 min):</b> swap essays. Complete the feedback tool below. Highlight 3–5 language errors.',
              '<b>Feedback meeting (8 min, 4 min each):</b> use the role cards. Use at least <b>3 phrases</b> from Part 2.',
              '<b>Send + compare (2 min):</b> send your feedback. Compare it with your W3 D4 self-evaluation.'
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
            { type: 'cards', title: 'Feedback meeting (8 min) · Role cards', items: [
              { label: 'Editor', text: 'Give <b>one</b> specific praise and your <b>two</b> most important suggestions. Point to the essay each time. Help fix one highlighted error together.<br><i>Start: “One thing that works really well is… It might be worth… I wasn’t quite sure what you meant by…”</i>' },
              { label: 'Writer', text: 'Listen. For each point, <b>accept</b> it, <b>ask</b> for an example, or <b>explain</b> your choice. Decide which suggestion you will use on Monday.<br><i>Start: “That’s a fair point. I’ll… / Could you show me…? / I see what you mean, but…”</i>' }
            ]},
            { type: 'checklist', id: 'g3-f2k', title: 'Peer check · Did your partner…', items: [
              'start with specific praise?',
              'use at least 2 expressions to suggest or point out a problem?',
              'give an example from my essay for each point?',
              'respond to my feedback with a question or a reason?'
            ]},
            { type: 'fields', title: 'Compare with your self-evaluation', fields: [
              { id: 'f2-s', label: 'Does the peer feedback agree with my W3 D4 self-evaluation? What is different?', placeholder: 'My partner also thought… but they noticed…', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t2' }
          ]
        },
        {
          id: 'f3', short: 'AI + plan', minutes: 30, grouping: 'Alone',
          title: 'Language review with AI + Action plan',
          goal: 'Use AI to correct your paragraph and check each change. Then write your action plan.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Language review with AI (20 min)', items: [
              { who: 'alone', text: 'Open the <b>Vanilla GPT-4 agent</b> in <b>Cogniti</b>.' },
              { who: 'alone', text: 'Paste your paragraph from tab 1 (Self-reflection) with the prompt below.' },
              { who: 'alone', text: 'Copy the AI version into the <b>second column</b> of your table in tab 1.' },
              { who: 'alone', text: '<b>Highlight</b> the grammar changes and the new wording.' },
              { who: 'alone', text: 'In the <b>last column</b>, write what changed and why. Is each change correct?' },
              { who: 'alone', text: 'Write down useful words and phrases for your next essay.' }
            ]},
            { type: 'model', title: 'The prompt', text: 'Correct this paragraph for grammar and clarity.', note: 'AI can be wrong. It can also change your meaning. Check every change — you are the writer.' },
            { type: 'quiz', id: 'g3-f3j', title: 'Warm-up game · You are the judge: keep or reject the AI change?', shared: ['Keep', 'Reject'], items: [
              { q: '“lots of food” → “a considerable amount of food”', answer: 'Keep', why: 'More formal, same meaning.' },
              { q: '“Food banks <b>may</b> reduce hunger” → “Food banks reduce hunger”', answer: 'Reject', why: 'AI removed your hedging. The claim is now too strong.' },
              { q: '“Gunders (2024) argues that…” → “Experts agree that…”', answer: 'Reject', why: 'The citation is gone, and “experts agree” is not what the source says.' },
              { q: '“Despite it is cheap, …” → “Although it is cheap, …”', answer: 'Keep', why: 'Although + clause is correct; despite needs a noun.' }
            ]},
            { type: 'language', title: 'Then show a partner two changes and explain them', tabs: false, groups: [
              { label: 'Describe the change', phrases: ['AI changed… to… because…', 'It replaced… with a more formal word.'] },
              { label: 'Judge the change', phrases: ['I think this change is correct, because…', 'I’m not convinced this is right, because…', 'This sounds better, but it changes my meaning.'] },
              { label: 'Decide', phrases: ['I’ll keep this change.', 'I’ll reject this one and write…'] }
            ]},
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
            { type: 'key', title: 'A clear action has three parts', numbered: true, points: [
              '<b>What</b> exactly: <i>I will use a different linking word in each paragraph…</i>',
              '<b>When</b>: <i>…when I write my body paragraphs on Monday…</i>',
              '<b>How I check</b>: <i>…and I will underline them before I submit.</i>'
            ]},
            { type: 'fields', title: 'My actions for further improvement', fields: [
              { id: 'f4-1', label: 'Argumentation', placeholder: 'Next time I will…', rows: 2, share: false },
              { id: 'f4-2', label: 'Use of sources', placeholder: 'I will paraphrase… / cite…', rows: 2, share: false },
              { id: 'f4-3', label: 'Connection of ideas', placeholder: 'I will use a variety of linking words, e.g. …', rows: 2, share: false },
              { id: 'f4-4', label: 'Vocabulary', placeholder: 'I will avoid contractions and…', rows: 2, share: false },
              { id: 'f4-5', label: 'Grammar', placeholder: 'I will check verb tenses and…', rows: 2, share: false }
            ]},
            { type: 'steps', title: 'Finish (2 min) · Quick win', items: [
              { who: 'pair', text: 'Read your <b>best</b> action to your partner. Is it clear enough to check on Monday?' },
              { who: 'class', text: 'Post your best new phrase on the class wall. Vote for the most useful one.' }
            ]},
            { type: 'checklist', id: 'g3-f3k', title: 'Can-do check · I can now…', items: [
              'give a classmate kind, specific and useful feedback',
              'decide if an AI correction is right or wrong, and say why',
              'write clear actions that I can check on Monday'
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
          id: 'p1', short: 'Question', minutes: 10, grouping: 'Pairs',
          title: 'Analyse the Question',
          goal: 'Understand what the essay question asks you to do.',
          blocks: [
            { type: 'talk', title: 'Warm-up (2 min) · Food waste where you live', prompts: [
              'In your home city, what happens to food nobody eats: at home, in shops, in restaurants?',
              'Have you seen a government campaign or a law about food waste? What was it?',
              'Who do you think wastes the most food: farms, shops, restaurants or households?'
            ]},
            { type: 'steps', title: 'Analyse the Question (8 min)', items: [
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
            { type: 'teacher', ref: 'w4d5-t4' }
          ]
        },
        {
          id: 'h4-pos', short: 'Position', minutes: 15, grouping: 'Groups',
          title: 'Activity 1 Discuss your position',
          goal: 'Language point: stating a position. Say clearly what should happen and give one main reason. Then choose your group’s first position.',
          blocks: [
            { type: 'model', title: 'Part 1 · Notice (1 min) · Two sentences from Gunders’ talk', list: [
              '“We <b>also need</b> policy.” (paragraph M)',
              '“These laws <b>should be</b> everywhere.” (paragraph M)'
            ], note: 'Look at the words in bold.' },
            { type: 'quiz', id: 'h4-pn', title: 'What is Gunders doing here?', items: [
              { q: 'In these two sentences, Gunders is…', options: ['giving her position: what should happen', 'describing what happens now', 'telling a story about her son'], answer: 'giving her position: what should happen', why: '<i>need</i> and <i>should</i> show her view about what governments should do.' }
            ]},

            { type: 'key', title: 'Part 2 · Clarify (3 min) · What is a position?', points: [
              'A <b>position</b> is your answer to the question: <i>yes, no, or partly</i>, and how much.',
              'In an argument essay and in a discussion, say it <b>early</b> and <b>clearly</b>, then give a <b>reason</b>. A position without a reason does not persuade anyone.'
            ]},
            { type: 'model', title: 'How to state a position · with everyday examples', rows: [
              ['Show it is your view', 'I’d argue that… / My position is that… <br><i><b>I’d argue that</b> schools should start later.</i>'],
              ['Say what should happen', 'should / need to + verb <br><i>Cities <b>need to</b> build more bike lanes.</i>'],
              ['Say how much', 'far more / significantly more / already enough <br><i>Shops should do <b>far more</b> to cut plastic.</i>'],
              ['Add the main reason', '…, mainly because… / The main reason is… <br><i>…, <b>mainly because</b> students are tired in the morning.</i>'],
              ['A balanced position', 'X should…, but together with Y. <br><i>Parents should help, <b>but together with</b> teachers.</i>']
            ]},
            { type: 'tip', text: '<b>Common mistakes:</b> “should <s>to</s> do” → should <b>do</b>. “<s>In my opinion, I think</s>…” → choose one. “Food waste is a big problem” is a topic, <b>not</b> a position: say what <b>should</b> happen.' },

            { type: 'quiz', id: 'h4-pc', title: 'Part 3 · Controlled practice (3 min) · Choose the best word', items: [
              { q: 'I’d ___ that schools should start at 10 am.', options: ['argue', 'arguing', 'agree'], answer: 'argue', why: 'I’d argue that… = I would argue that…' },
              { q: 'Supermarkets ___ give unsold food to charities.', options: ['should', 'should to', 'should be'], answer: 'should', why: 'should + verb (no “to”).' },
              { q: 'Governments need ___ more on public transport.', options: ['to spend', 'spending', 'spend'], answer: 'to spend', why: 'need to + verb.' },
              { q: 'My position is ___ fast food should be taxed.', options: ['that', 'what', 'because'], answer: 'that', why: 'My position is that + sentence.' },
              { q: 'Everyone should cook at home more, ___ because it is cheaper.', options: ['mainly', 'main', 'the main'], answer: 'mainly', why: '…, mainly because + reason.' },
              { q: 'Which sentence is a clear position?', options: ['Food waste is a big problem.', 'Governments should do far more to cut food waste, mainly because progress is too slow.', 'There are many views about food waste.'], answer: 'Governments should do far more to cut food waste, mainly because progress is too slow.', why: 'It says what should happen, how much, and why.' }
            ]},

            { type: 'model', title: 'Part 4 · Less controlled practice (3 min) · Model: one spin', rows: [
              ['Spin', '<b>food banks</b> + <b>governments</b>'],
              ['You say', '“<b>I’d argue that</b> governments <b>should</b> fund food banks more, <b>mainly because</b> charities rely on volunteers and donations.”']
            ], note: 'Then the next person says if they agree, and why.' },
            { type: 'spinner', id: 'p2sp', title: 'Spin and speak', text: 'Spin. Should governments do more about this solution? Use one expression and give a reason. Others respond. Then pass the turn.', reels: [
              { label: 'Solution', start: 'Spin!', items: ['food banks', 'upcycled food', 'food waste apps', 'laws about landfill', 'investment in new ideas', 'education campaigns', 'tax incentives for donations'] },
              { label: 'Who should act?', start: '…', items: ['governments', 'businesses', 'consumers', 'everyone together'] }
            ]},

            { type: 'steps', title: 'Part 5 · Production (5 min) · Four corners: choose your first position', items: [
              { who: 'alone', text: 'Read the four positions. Choose yours. Then <b>stand in that corner</b> of the room.' },
              { who: 'group', text: 'In your corner: agree on your best reason (1 min).' },
              { who: 'class', text: 'Each corner states its position in one sentence: “We’d argue that…, mainly because…”' },
              { who: 'class', text: 'Anyone convinced? Move corners now. Count the final vote.' },
              { who: 'group', text: 'Back in your research group: choose your group position and write it below.' }
            ]},
            { type: 'choose', id: 'p2c', title: 'Our first position', options: [
              'Governments need to significantly increase their efforts.',
              'All actors in the food system should be doing more.',
              'Businesses and consumers need to do more, not governments.',
              'Governments are already doing enough.'
            ]},
            { type: 'fields', fields: [
              { id: 'p2-1', label: 'Our position and the main reason (frame: We’d argue that governments should… mainly because…)', placeholder: 'We’d argue that governments should do far more to reduce food waste, mainly because…', rows: 3 }
            ]},
            { type: 'checklist', id: 'g3-p1k', title: 'Check your position · Did you…', items: [
              'use a position phrase (I’d argue that… / My position is that…)?',
              'say what should happen and how much (should / need to + far more…)?',
              'give one main reason (mainly because…)?'
            ]},
            { type: 'teacher', ref: 'w4d5-t5' }
          ]
        },
        {
          id: 'p3', short: 'Listen again', minutes: 20, grouping: 'Alone → group',
          title: 'Activity 2 Prepare notes',
          goal: 'Listen to Gunders’ TED talk again. Take notes that help you answer the question.',
          blocks: [
            { type: 'talk', title: 'Before you listen (2 min) · What do you remember?', prompts: [
              'You heard Dana Gunders’ talk earlier this week. Tell your partner two things you remember.',
              'Did she say anything about <b>governments</b>? What do you think she said?'
            ]},
            { type: 'flip', title: 'Useful words in the talk (3 min)', hint: 'Read the line from the talk. Guess the meaning. Then tap the card. These words are useful in your essay too.', items: [
              { front: 'why food waste would have such a big climate <b>impact</b>', back: '<b>impact</b> (n) = a strong effect.<br><i>Food waste has a significant impact on the climate.</i>' },
              { front: 'there’s simply not the <b>infrastructure</b> to keep food cold', back: '<b>infrastructure</b> = basic systems a place needs, e.g. roads, power, cold storage.<br><i>Poor infrastructure causes food loss in many countries.</i>' },
              { front: 'Many of them are about <b>prevention</b>', back: '<b>prevention</b> = stopping something before it happens (verb: prevent).<br><i>Prevention is cheaper than recycling.</i>' },
              { front: 'Let’s inject the funds to really <b>scale</b> them', back: '<b>scale (up)</b> = make something bigger so it reaches more people.<br><i>Small projects need funding to scale up.</i>' },
              { front: 'we need <b>investment</b> to spark new innovation', back: '<b>investment</b> = money put into something to get a benefit later (verb: invest).<br><i>Governments could increase investment in new solutions.</i>' },
              { front: 'Let’s provide <b>incentives</b> so that every food business has those', back: '<b>incentive</b> = a benefit that encourages people to do something.<br><i>Tax incentives encourage shops to donate food.</i>' },
              { front: 'We also need <b>policy</b>.', back: '<b>policy</b> = a plan or set of rules made by a government or organisation.<br><i>National policy can change how businesses behave.</i>' },
              { front: 'laws that <b>restrict</b> food from going to landfills', back: '<b>restrict</b> = limit or control what people can do.<br><i>Some countries restrict food waste in landfill.</i>' }
            ]},
            { type: 'quiz', id: 'g3-p3w', title: 'Quick check · Which word?', shared: ['prevention', 'infrastructure', 'incentive', 'policy', 'scale up'], items: [
              { q: 'Roads, electricity and cold rooms are all examples of…', answer: 'infrastructure', why: 'Basic systems a country needs.' },
              { q: 'A tax cut for shops that donate food is an…', answer: 'incentive', why: 'It encourages a behaviour.' },
              { q: 'Stopping extra food before it is produced is…', answer: 'prevention', why: 'It stops waste before it happens.' },
              { q: 'A government’s plan and rules on food waste is its…', answer: 'policy', why: 'Policy = a plan or set of rules.' },
              { q: 'A successful app moves to 17 countries. It has managed to…', answer: 'scale up', why: 'It grew to reach more people.' }
            ]},
            { type: 'key', title: 'Good notes', points: [
              'Choose only information that helps <b>answer the question</b>.',
              'Try to <b>paraphrase</b> (= use your own words) as you write.',
              'Put ideas on the <b>same theme</b> together.'
            ]},
            { type: 'model', title: 'Example: one good note', before: 'Dana Gunders talked about lots of things and food waste is a very big problem in America and other places.', text: 'Gunders (2024): solutions (e.g. apps) work, but progress is too slow → governments need to invest to scale them up (= make them bigger).', note: 'Short, in your own words, and about governments.' },
            { type: 'listening', source: 'Gunders (2024) · TED', title: 'How to turn the tables on food waste', videoId: '6iqXH9RPK1w', start: 0, clip: 'full talk · about 11 minutes', transcripts: [['gunders', 'Transcript (adapted)']] },
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the two gist questions and the note-taking frame below first.' },
              { who: 'alone', text: 'Listen once. Take notes <b>by hand</b>.' },
              { who: 'alone', text: 'Listen for: What do governments do now? What could they do more of?' },
              { who: 'alone', text: 'Then answer. Use the transcript to check a second time.' }
            ]},
            { type: 'quiz', id: 'g3-p3g', title: 'Gist · The big picture', items: [
              { q: '1. What is Gunders’ main message?', options: ['Food waste is solvable, but solutions must grow faster', 'Only consumers can solve food waste', 'Food waste is too big to solve'], answer: 'Food waste is solvable, but solutions must grow faster', why: '“It’s solvable” (F) but “it’s not enough, and it’s not fast enough” (J).' },
              { q: '2. Overall, what does she want governments to do?', options: ['Invest, give incentives and make laws', 'Leave food waste to businesses', 'Run education campaigns only'], answer: 'Invest, give incentives and make laws', why: 'Paragraphs K–M: funds to scale, incentives, and laws on landfill.' }
            ]},
            { type: 'cloze', id: 'g3-p3n', title: 'Detail · Complete the notes (in the order you hear them)', text: '<b>The problem (paragraphs A–E):</b> food waste is a {{1}} problem, too big for one person to solve.<br><b>Why it happens (E):</b> we don’t {{2}} it, so it is invisible and hard to manage.<br><b>Priority (F):</b> {{3}} first; then donating food; then composting or recycling.<br><b>Progress (J):</b> solutions like ColdHubs and apps work, but progress is {{4}}.<br><b>Governments (K):</b> invest to {{5}} solutions and give businesses incentives.<br><b>Policy (M):</b> laws that stop food going to {{6}} should be everywhere.', options: [
              ['systems', 'personal', 'farming'],
              ['measure', 'cook', 'sell'],
              ['prevention', 'composting', 'donation'],
              ['not fast enough', 'very fast', 'complete'],
              ['scale up', 'slow down', 'replace'],
              ['landfill', 'markets', 'animals']
            ], answers: ['systems', 'measure', 'prevention', 'not fast enough', 'scale up', 'landfill'], why: [
              '“This is a systems problem, and it’s just way too big.” (A)',
              '“We don’t measure it, so it’s invisible.” (E)',
              '“Prevention… is really our priority.” (F)',
              '“It’s not enough, and it’s not fast enough.” (J)',
              '“Let’s inject the funds to really scale them.” (K)',
              '“Laws that restrict food from going to landfills… should be everywhere.” (M)'
            ]},
            { type: 'tip', text: '<b>Hint for gap 4:</b> after the examples (ColdHubs, Too Good To Go, Compass Group), listen for <b>“But…”</b>.' },
            { type: 'table', id: 'h4-p3t', title: 'Note-taking frame · Gunders (2024) — keep these notes for Monday’s essay', columns: ['Gunders (2024)', 'My notes (short, in my own words)', 'For or against “governments should do more”?'], fixed: [
              'Main point',
              'The problem now<br><small>Why is progress too slow?</small>',
              'Government action 1<br><small>money / investment</small>',
              'Government action 2<br><small>incentives for businesses</small>',
              'Government action 3<br><small>policy / laws</small>',
              'Best example or number'
            ]},
            { type: 'fields', fields: [
              { id: 'p3-1', label: 'Gunders (2024) in one or two sentences, in my own words (for my essay plan)', placeholder: 'Gunders (2024) argues that solutions work but progress is too slow, so governments need to invest, give incentives and make laws on landfill.', rows: 3 }
            ]},
            { type: 'steps', items: [
              { who: 'group', text: 'Compare your notes. Add any point you missed.' },
              { who: 'group', text: 'Keep the frame. You use it in the note-taking table and the plan (tab 5).' }
            ]}
          ]
        },
        {
          id: 'p4', short: 'Notes + plan', minutes: 30, grouping: 'Groups', cowrite: true,
          title: 'Note-taking table + Making a plan',
          goal: 'Collect notes from all the sources as a group. Then plan your essay: a position and two reasons.',
          blocks: [
            { type: 'steps', title: 'Part 1 · Jigsaw note-taking table (12 min)', items: [
              { who: 'group', text: 'Press <b>Write together</b> to share one page with your group. Add your Gunders notes first.' },
              { who: 'alone', text: 'Each person takes <b>one</b> other source: Nicastro, Berti et al., About That, or your own research.' },
              { who: 'alone', text: 'Skim your source (5 min). Find 1–2 points about governments. Add them in one row.' },
              { who: 'group', text: 'Teach your point to the group in 30 seconds: “According to…, … In other words, …”' }
            ]},
            { type: 'model', title: 'Example: one row of the table', rows: [
              ['Gunders (2024)', 'Solutions work (e.g. ColdHubs, apps) but progress too slow → govt investment needed to scale up + incentives for businesses. Laws restricting food in landfill (e.g. France, Japan) → should be everywhere.']
            ], note: 'Short notes, your own words, only points that help answer the question.' },
            { type: 'table', id: 'p4t', title: 'Note-taking table', columns: ['Source', 'Relevant points'], rows: 5, extraRows: true },
            { type: 'sources', ids: ['gunders', 'nicastro', 'berti', 'aboutthat', 'castro', 'huang'] },
            { type: 'teacher', ref: 'w4d5-t6' },
            { type: 'teacher', ref: 'w4d5-t7' },

            { type: 'steps', title: 'Part 2 · Making a plan (14 min)', items: [
              { who: 'group', text: 'Agree on a <b>clear position</b>.' },
              { who: 'group', text: 'Find <b>TWO main reasons</b> for your position.' },
              { who: 'group', text: 'Look at your note-taking table. Which notes support each reason?' },
              { who: 'group', text: 'Decide the order of your two body paragraphs. Then complete the plan.' }
            ]},
            { type: 'language', title: 'Language for planning together', tabs: false, groups: [
              { label: 'Choose reasons', phrases: ['Our strongest reason is probably…', 'Which source best supports this point?'] },
              { label: 'Combine sources', phrases: ['Both Gunders and Berti et al. suggest that…', 'This note fits better under reason 2, because…'] },
              { label: 'Decide the order', phrases: ['Let’s start with… because it’s our strongest point.', 'I’d leave this out. It doesn’t answer the question.'] }
            ]},
            { type: 'key', tone: 'warn', title: 'Be selective (= choose only the best)', points: [
              'You do <b>NOT</b> need all your notes. Choose the best ones.',
              'Bring your plan to class on Monday.',
              'Don’t write the essay at the weekend, and don’t use AI to write it. You write it in class.'
            ]},
            { type: 'plan' },
            { type: 'steps', title: 'Finish (4 min) · 30-second pitch', items: [
              { who: 'group', text: 'One speaker pitches your plan: position + two reasons + one source each.' },
              { who: 'class', text: 'Listen. Vote for the most convincing plan (you can’t vote for your own).' }
            ]},
            { type: 'checklist', id: 'g3-p4k', title: 'Can-do check · I can now…', items: [
              'explain what the essay question asks me to do',
              'choose notes from a source that answer the question',
              'take a position and support it with two reasons from the sources'
            ]},
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
            { type: 'talk', title: 'Warm-up (3 min) · Talk with a partner', prompts: [
              'Which AI tools do you use? What for?',
              'Do you trust AI answers always, sometimes or never? Why?',
              '<b>Predict:</b> you ask AI for a picture of a <b>CEO</b>. What will most pictures show?'
            ]},
            { type: 'flip', title: 'Useful words for the video and the task', hint: 'Guess the meaning. Then tap the card.', items: [
              { front: '<b>bias</b>', back: 'unfair support for one group or idea over others.<br><i>AI images can show gender bias.</i>' },
              { front: '<b>stereotype</b>', back: 'a fixed, too-simple idea about a group of people.<br><i>Showing every nurse as a woman is a stereotype.</i>' },
              { front: '<b>represent</b> / <b>misrepresent</b>', back: 'show or describe (in a fair / unfair way).<br><i>The images misrepresent who does these jobs.</i>' },
              { front: '<b>diverse</b>', back: 'including many different kinds of people or ideas.<br><i>The pictures were not very diverse.</i>' },
              { front: '<b>reinforce</b>', back: 'make an idea or feeling stronger.<br><i>Biased images can reinforce stereotypes.</i>' },
              { front: '<b>image generator</b>', back: 'an AI tool that makes pictures from a text prompt.<br><i>I typed “teacher” into an image generator.</i>' }
            ]},
            { type: 'quiz', id: 'g3-i1w', title: 'Quick check · Which word?', shared: ['stereotype', 'diverse', 'reinforce'], items: [
              { q: '“All engineers are men” is a…', answer: 'stereotype', why: 'A fixed, too-simple idea about a group.' },
              { q: 'A class with students from 20 countries is…', answer: 'diverse', why: 'It includes many different people.' },
              { q: 'Repeating the same images again and again can … a bias.', answer: 'reinforce', why: 'It makes the idea stronger.' }
            ]},
            { type: 'listening', source: 'YouTube', title: 'Bias in AI-generated images', videoId: 'L2sQRrf1Cd8', start: 48, clip: 'play to 2:16', transcripts: [] },
            { type: 'quiz', id: 'i1q', title: 'Watch to 2:16 · Was your prediction right?', items: [
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
            { type: 'language', title: 'Useful language for your group talk', tabs: false, groups: [
              { label: 'Describe what you noticed', phrases: ['The majority of the images showed…', 'What stood out to me was…', 'Only one or two pictures showed…'] },
              { label: 'Explain and speculate (hedging)', phrases: ['This suggests that the AI…', 'It seems that the data…', 'This might lead to…'] },
              { label: 'Link to academic work', phrases: ['In the same way, AI text could leave out…', 'If we don’t check it, we risk…'] }
            ]},
            { type: 'teacher', ref: 'w4d5-t8' }
          ],
          answers: { items: [
            ['Misrepresenting in academic contexts', 'AI can make issues too simple, repeat stereotypes and common biases, leave out voices (it uses mainstream sources) and give old information (older data, no new research). Example: AI might explain poverty only by economic mismanagement and ignore historical and systemic factors.'],
            ['Risks', 'Your own ideas — this leads into why we must check AI output.']
          ]}
        },
        {
          id: 'i2', short: 'Check AI text', minutes: 22, grouping: 'Groups',
          title: 'Evaluating AI output',
          goal: 'Use your Week 2 reading skills to judge an AI answer about food waste.',
          blocks: [
            { type: 'key', title: 'Week 2 skills that also work for AI text', points: [
              'Is it a <b>fact</b> or an <b>opinion</b>?',
              'How good are the <b>evidence</b> and <b>sources</b>?',
              'What does the text <b>assume</b> (= think is true without proof)?',
              'Is there any <b>bias</b>?'
            ]},
            { type: 'flip', title: 'Useful words in the AI text and the questions', hint: 'Read the phrase. Guess the meaning. Then tap the card.', items: [
              { front: 'produce that is still <b>edible</b>', back: '<b>edible</b> = safe and good enough to eat.<br><i>Much of the food in bins is still edible.</i>' },
              { front: '<b>surplus</b> production / donate <b>surplus</b> food', back: '<b>surplus</b> = more than is needed.<br><i>Shops can donate surplus food to charities.</i>' },
              { front: 'supporting <b>redistribution</b> programs', back: '<b>redistribution</b> = moving extra food to people who need it.<br><i>Food banks are a form of redistribution.</i>' },
              { front: 'What does the text <b>assume</b>?', back: '<b>assume / assumption</b> = think something is true without proof.<br><i>The text assumes composting is available everywhere.</i>' },
              { front: 'Is anything <b>misleading</b>?', back: '<b>misleading</b> = giving a wrong idea.<br><i>The claim is misleading because it is not true in all countries.</i>' },
              { front: 'Is the text <b>objective</b>?', back: '<b>objective</b> = based on facts, not feelings.<br><i>Academic writing should be objective.</i>' }
            ]},
            { type: 'quiz', id: 'g3-i2w', title: 'Quick check · Which word?', shared: ['edible', 'surplus', 'assumption', 'misleading', 'objective'], items: [
              { q: 'A bakery has 40 extra loaves at closing time. They are…', answer: 'surplus', why: 'More than is needed.' },
              { q: 'An “ugly” but fresh carrot is still…', answer: 'edible', why: 'You can safely eat it.' },
              { q: '“Everyone has a fridge” is an … in many texts.', answer: 'assumption', why: 'It is taken as true without proof.' },
              { q: 'A text that gives facts, not feelings, is…', answer: 'objective', why: 'Objective = based on facts.' },
              { q: 'A true fact used to give a wrong idea is…', answer: 'misleading', why: 'It leads the reader to a wrong idea.' }
            ]},
            { type: 'model', title: 'The prompt', text: '“What are the main causes of food waste, and what are the most effective solutions?”' },
            { type: 'passage', id: 'i2p', title: 'AI-generated text — highlight anything you question', text: 'Food waste occurs at various stages of the supply chain due to multiple factors. At the household level, overbuying, improper storage, and confusion over expiration dates lead to unnecessary disposal of food. Supermarkets contribute to the problem by discarding produce that does not meet aesthetic standards, even if it is still edible. Restaurants and catering businesses generate waste through oversized portions and inefficient inventory management. Additionally, food loss happens at the production and distribution stages due to strict quality controls, surplus production, and poor transportation or storage conditions. These issues result in significant economic and environmental consequences, making food waste a critical global challenge.<br><br>Addressing food waste requires a combination of education, policy changes, and technological improvements. Consumers can reduce waste by planning meals, storing food correctly, and understanding food labeling. Businesses can implement better inventory control, donate surplus food, and sell imperfect but edible products. Governments and organizations play a crucial role in supporting redistribution programs, improving logistics, and promoting sustainable waste management practices. Additionally, composting and food recycling initiatives can help convert waste into useful resources such as biofuel or animal feed. By adopting these strategies, society can move towards a more efficient and sustainable food system.' },
            { type: 'quiz', id: 'g3-i2g', title: 'Read once for gist, then again for detail', items: [
              { q: '1. Gist: what does the AI text do?', options: ['Explains causes, then solutions', 'Argues that governments must act', 'Compares rich and poor countries'], answer: 'Explains causes, then solutions', why: 'Paragraph 1 = causes; paragraph 2 = solutions.' },
              { q: '2. Why do households waste food, according to the text?', options: ['Overbuying, poor storage, date confusion', 'Food is too expensive', 'There is no rubbish collection'], answer: 'Overbuying, poor storage, date confusion', why: '“overbuying, improper storage, and confusion over expiration dates”.' },
              { q: '3. Why do supermarkets throw food away?', options: ['It does not look perfect', 'It is past its date', 'Customers return it'], answer: 'It does not look perfect', why: '“does not meet aesthetic standards, even if it is still edible”.' },
              { q: '4. How much does the text say about what governments should do?', options: ['Very little: one general sentence', 'A full paragraph with examples', 'Nothing at all'], answer: 'Very little: one general sentence', why: 'Only: “Governments and organizations play a crucial role in…”. No details or examples.' },
              { q: '5. Does the text name any studies or sources?', options: ['No', 'Yes, one study', 'Yes, several'], answer: 'No', why: 'There are no references, so we cannot check the claims.' }
            ]},
            { type: 'tip', text: '<b>Hint for question 4:</b> find the word <i>Governments</i> in paragraph 2. How many sentences are about them?' },
            { type: 'language', title: 'Language for evaluating a text (use it in your group answers)', tabs: false, groups: [
              { label: 'Point out a weakness', phrases: ['The text seems to assume that…', 'It doesn’t take into account…', 'One perspective that is missing is…'] },
              { label: 'Hedge and balance', phrases: ['This may be true in…, but not in…', 'To be fair, the text does mention…'] },
              { label: 'Suggest an improvement', phrases: ['A more balanced answer would…', 'It would be more reliable if it…'] }
            ]},
            { type: 'steps', title: 'Jigsaw · One lens each (8 min)', items: [
              { who: 'alone', text: 'In your group, each person takes <b>one</b> question below (Balance, Accuracy, Objectivity or Citations).' },
              { who: 'alone', text: 'Read the text again with your lens only. Write 1–2 sentences (3 min).' },
              { who: 'group', text: 'Teach your group what you found (1 min each). Use the language above.' },
              { who: 'group', text: 'Group verdict: would you trust this text for your essay? Yes, partly, or no?' }
            ]},
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
          id: 'i3', short: 'Checklist', minutes: 23, grouping: 'Groups', cowrite: true,
          title: 'Make a checklist',
          goal: 'Write key questions for one part of a checklist for checking AI text.',
          blocks: [
            { type: 'talk', title: 'Your mission: write the class checklist (3 min talk first)', prompts: [
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
            { type: 'steps', title: 'Finish (6 min) · Vote and test', items: [
              { who: 'class', text: 'Read all the groups’ questions. Vote for the <b>best question</b> in each category.' },
              { who: 'group', text: 'Test the four winning questions on the AI text from tab 2. Give it a score out of 4.' },
              { who: 'class', text: 'Compare scores. Would you use this AI text in your essay?' }
            ]},
            { type: 'checklist', id: 'g3-i3k', title: 'Can-do check · I can now…', items: [
              'explain how AI can show bias, in pictures and in text',
              'find assumptions and missing views in an AI answer',
              'use a checklist to decide if a text is reliable'
            ]},
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
            { type: 'talk', title: 'Warm-up (3 min) · How did it go?', prompts: [
              'Rate yesterday’s discussion from 1 to 5. Tell your group why.',
              'What is one thing you did well? What is one thing you want to do better?'
            ]},
            { type: 'steps', title: 'Part 1 · Read the teacher’s feedback (12 min)', items: [
              { who: 'alone', text: 'Open <b>“Shared with me”</b>. Find <b>DEC 15 Week 4 Research Summary Discussion: Teacher’s feedback</b>.' },
              { who: 'alone', text: 'Read the strengths and the areas for improvement. Underline anything unclear.' },
              { who: 'group', text: 'Sit with your <b>discussion group</b>. Compare it with your peer feedback and self-evaluation.' },
              { who: 'group', text: 'Your teacher visits each group. Ask at least one question each.' }
            ]},
            { type: 'language', title: 'Ask for clarification and check you understand', tabs: false, groups: [
              { label: 'Ask for clarification', phrases: ['Could you clarify what you meant by…?', 'Could you give me an example of how I might…?', 'What would a stronger answer look like?'] },
              { label: 'Check understanding', phrases: ['So, if I understand correctly, I should…?', 'Do you mean that I need to… rather than…?'] },
              { label: 'Ask for a priority', phrases: ['If I could change one thing, what would it be?', 'Which is more important: … or …?'] }
            ]},
            { type: 'chat', title: 'Model · A student talks to the teacher', right: 'Teacher', lines: [
              ['Student', '<mark>Could you clarify what you meant by</mark> “build on others’ ideas”?'],
              ['Teacher', 'Sure. You gave good points, but you didn’t connect them to what others said.'],
              ['Student', '<mark>So, if I understand correctly, I should</mark> refer to a classmate’s point first?'],
              ['Teacher', 'Exactly. For example: “Building on Mia’s point…”.'],
              ['Student', '<mark>If I could change one thing, what would it be?</mark>'],
              ['Teacher', 'Give a reason or an example every time you give an opinion.']
            ]},
            { type: 'fields', fields: [
              { id: 't1-1', label: 'The most important point in my teacher’s feedback', placeholder: 'Our group needs to…', rows: 2, share: false },
              { id: 't1-2', label: 'My questions for my teacher', placeholder: 'Could you clarify what you meant by…? Could you give me an example of…?', rows: 3, share: false }
            ]},
            { type: 'teacher', ref: 'w4d5-t11' },

            { type: 'quiz', id: 't1q', title: 'Part 2 · Update your action plan (15 min) — Game: which action is clear and specific?', items: [
              { q: 'Which action is better?', options: ['I will speak more.', 'I will give my opinion at least 3 times and add a reason each time.'], answer: 'I will give my opinion at least 3 times and add a reason each time.', why: 'It says exactly what to do, so you can check it.' },
              { q: 'Which action is better?', options: ['I will ask a question to build on a classmate’s idea, e.g. “Can you give an example?”', 'I will be a better listener.'], answer: 'I will ask a question to build on a classmate’s idea, e.g. “Can you give an example?”', why: 'It is specific and gives the words to use.' }
            ]},
            { type: 'tip', text: 'Go back to <b>Thursday → Self-evaluation</b>. Look at your <b>Action plan for further improvement</b> column. Does it include your teacher’s feedback?' },
            { type: 'fields', fields: [
              { id: 't2-1', label: 'Two specific actions for my next discussion (e.g. the Week 5 presentation)', placeholder: '1. I will… so that… 2. …', rows: 3, share: false }
            ]},
            { type: 'steps', title: 'Finish (5 min) · Goal round', items: [
              { who: 'group', text: 'Say your <b>top</b> action aloud to your group: “Next week, I will…”' },
              { who: 'group', text: 'One person asks: “How will you check it?” Answer in one sentence.' },
              { who: 'group', text: 'Next week, your group checks: did you do it?' }
            ]},
            { type: 'checklist', id: 'g3-t1k', title: 'Can-do check · I can now…', items: [
              'ask my teacher to clarify feedback and check I understand',
              'turn feedback into clear actions I can check',
              'tell my group my goal for the Week 5 presentation'
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
    ['verify', 'To check that something is true.', 'Verify the information with reliable sources.'],
    ['impact', 'A strong effect.', 'Food waste has a significant impact on the climate.'],
    ['infrastructure', 'The basic systems a place needs, e.g. roads, power and cold storage.', 'Poor infrastructure causes food loss in many countries.'],
    ['prevention', 'Stopping something before it happens.', 'Prevention is cheaper than recycling.'],
    ['investment', 'Money put into something to get a benefit later.', 'Governments could increase investment in new solutions.'],
    ['incentive', 'A benefit that encourages people to do something.', 'Tax incentives encourage shops to donate food.'],
    ['policy', 'A plan or set of rules made by a government or organisation.', 'National policy can change how businesses behave.'],
    ['restrict', 'To limit or control what people can do.', 'Some countries restrict food waste in landfill.'],
    ['surplus', 'More than is needed.', 'Shops can donate surplus food to charities.'],
    ['edible', 'Safe and good enough to eat.', 'Much of the food in bins is still edible.'],
    ['redistribution', 'Moving extra food to people who need it.', 'Food banks are a form of redistribution.'],
    ['reinforce', 'To make an idea or feeling stronger.', 'Biased images can reinforce stereotypes.']
  ]
};
