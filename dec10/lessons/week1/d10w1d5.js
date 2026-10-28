/* DEC10 · Week 1 Day 5 — the diagnostic assessment, summarising (with Chertow 2001), and the AI-use homework follow-up.
   Teacher's Book lessons 18A, 19A, 20A. The diagnostic itself runs on Canvas; this page only gets students ready for it.
   The Teacher's Book abstracts, steps, outlines and the Chertow text are kept; the activities around them are redesigned.
   Keep the id 'd10w1d5' and every activity / field id once students have started. */
window.DEC15_LESSON = {
  id: 'd10w1d5',
  week: 1, day: 5,
  title: 'Diagnostic and summarising',
  duration: 'Diagnostic + about 1½ hours',
  question: 'What is the MAIN idea — and what can you leave out?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question',
  journey: 'Show your teacher where you are starting from in the diagnostic, learn a six-step method to summarise an academic text (and use it on Chertow), then share what you learned about AI in DEC.',
  image: 'dec10/assets/week1/hero-d10w1d5.svg',
  imageAlt: 'Illustration: a long article passes through a funnel and comes out as a short summary card, next to a starting-line flag for the diagnostic and two speech bubbles about AI.',
  finish: { title: 'Week 2', text: 'Seminars begin' },
  goalShort: 'your integrated writing and your note-making',

  sections: [
    /* ───────────────────────── 18A · Diagnostic ───────────────────────── */
    {
      id: 'diagnostic', number: '01', code: '18A', minutes: 120,
      tone: 'blue', art: 'dec10/assets/week1/s-diagnostic.svg',
      title: 'Diagnostic assessment',
      subtitle: 'Your starting line',
      outcome: 'You complete the diagnostic on Canvas, so your teacher knows your starting point in listening, reading and writing.',
      activities: [
        {
          id: 'g1', short: 'Before', minutes: 5, grouping: 'Alone',
          art: 'dec10/assets/week1/v/v-d10w1d5-g1.svg',
          title: 'Before you start',
          goal: 'Arrive ready — then relax.',
          blocks: [
            { type: 'key', title: 'What is the diagnostic?', points: [
              'A <b>listening, reading and writing</b> check — the same skills as your LRW Assessments in Weeks 5 and 9.',
              'It is <b>not part of your final score</b>. It shows your teacher your starting point, so they can help you.',
              'Do it on your own, without AI or translation tools — or the result tells your teacher nothing useful.'
            ] },
            { type: 'checklist', id: 'g1-ready', title: 'Ready?', meter: ['ready', 'Good luck — do your best!'], items: [
              'My laptop is charged (or plugged in).',
              'I can log in to Canvas with my Unikey.',
              'I have headphones for the listening.',
              'I have closed other tabs and apps.'
            ] }
          ]
        },
        {
          id: 'g2', short: 'Diagnostic', minutes: 110, grouping: 'Alone',
          art: 'dec10/assets/week1/v/v-d10w1d5-g2.svg',
          title: 'Do the diagnostic',
          goal: 'Follow the instructions on Canvas.',
          blocks: [
            { type: 'steps', items: [
              { who: 'class', text: 'Your teacher opens the diagnostic on <b>Canvas</b> and explains the timing.' },
              { who: 'alone', text: 'Follow the instructions on Canvas for each part: listening, reading, writing.' },
              { who: 'alone', text: 'Use what you practised this week: notes with symbols (Day 1), word limits (Day 1), your own words (Day 3).' }
            ] },
            { type: 'tip', text: 'Word limits matter: if the instructions say <b>NO MORE THAN THREE WORDS</b>, a four-word answer scores zero — even if it is correct.' }
          ]
        },
        {
          id: 'g3', short: 'After', minutes: 5, grouping: 'Alone',
          art: 'dec10/assets/week1/v/v-d10w1d5-g3.svg',
          title: 'How did it go?',
          goal: 'Notice your strongest and weakest skill — while you still remember.',
          blocks: [
            { type: 'grid', id: 'g3-grid', title: 'How did each part feel?', columns: ['How it felt'], options: ['Comfortable', 'OK', 'Difficult'], rows: ['Listening', 'Reading', 'Writing'] },
            { type: 'fields', fields: [{ id: 'g3-note', label: 'The hardest moment was … because …', rows: 2 }] }
          ]
        }
      ]
    },

    /* ───────────────────────── 19A · Summarising ───────────────────────── */
    {
      id: 'summary', number: '02', code: '19A', minutes: 60,
      tone: 'amber', art: 'dec10/assets/week1/s-summary.svg',
      title: 'Academic writing skills: Summarising',
      subtitle: 'Keep the main ideas, lose the rest',
      outcome: 'You can describe the six steps of summarising, use them to write a short summary of a paragraph, and critique a summary.',
      activities: [
        {
          id: 'm1', short: 'Warm-up', minutes: 5, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d5-m1.svg',
          title: 'You already summarise',
          goal: 'Notice what you include — and what you leave out.',
          blocks: [
            { type: 'talk', title: 'Take turns: 1–2 minutes each', prompts: [
              'Tell your partner about the last thing you watched (a movie, series, documentary…) or read (a book or article).'
            ] },
            { type: 'sort', id: 'm1-sort', title: 'What did you probably tell your partner?', buckets: [{ label: 'I included it', letter: '✓' }, { label: 'I left it out', letter: '✗' }], items: [
              { text: 'the genre', answer: 0 },
              { text: 'the main characters', answer: 0 },
              { text: 'the setting', answer: 0 },
              { text: 'the main events of the plot', answer: 0 },
              { text: 'a description of every scene', answer: 1 },
              { text: 'the exact words of a conversation', answer: 1 }
            ] },
            { type: 'key', title: 'You just summarised', points: [
              'You kept the <b>main ideas</b> and left out the <b>details</b> — and your description was much shorter than the original.',
              'At university you summarise other authors’ ideas <b>in your own writing</b>: to support your ideas, or to argue against them.'
            ] }
          ]
        },
        {
          id: 'm2', short: '6 steps', minutes: 7, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d5-m2.svg',
          title: 'Six steps to summarise an academic article',
          goal: 'Know the method before you use it.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week1/summary-steps.svg', size: 'wide', alt: 'Six steps to summarise, shown as a funnel from a long article to a short summary: 1 scan the abstract and headings; 2 read the introduction and conclusion together; 3 find the main ideas in topic sentences; 4 keep only the support the reader needs; 5 select ideas and make an outline; 6 write the summary in your own words.', caption: 'From a whole article to a few sentences.' },
            { type: 'order', id: 'm2-order', title: 'Put the six steps in order', items: [
              'Scan the text: read the abstract, then look at the headings.',
              'Read the introduction and the conclusion together and compare them.',
              'Read the article (or your section) and identify the main ideas — often in topic sentences.',
              'Identify the supporting ideas or evidence the reader needs to understand the main ideas.',
              'Select the ideas you need and organise them into an outline (notes).',
              'Write the summary in complete sentences, in your own words, from your outline.'
            ], ends: ['First', 'Last'] },
            { type: 'tip', text: 'Step 6 is where Day 3 comes back: <b>paraphrase</b>. A summary that copies the original’s sentences is still plagiarism.' }
          ]
        },
        {
          id: 'm3', short: 'Abstracts', minutes: 8, grouping: 'Pair',
          art: 'dec10/assets/week1/v/v-d10w1d5-m3.svg',
          title: 'Step 1 · Is this article worth reading?',
          goal: 'Use the abstract to decide — in under two minutes.',
          blocks: [
            { type: 'model', title: 'Your assignment', text: 'Prepare a 150-word summary of an article presenting the historical development, application, and criticisms of the IPAT equation.' },
            { type: 'tabs', title: 'Two abstracts you found', tabs: [
              { label: 'Abstract 1 · Duarte et al. (2014)', blocks: [
                { type: 'model', title: 'Looking backward to look forward: Water use and economic growth from a long-term perspective', text: 'Recent research has examined the relationship between natural resources and economic growth. Considered vitally important, not only for humanity’s well-being but also for the integrity of the ecosystem, the relationship between water use and economic growth has nevertheless traditionally attracted little attention by analysts. This article studies water use trends from 1900 to 2000 throughout the world and their relationship to the main determinants of economic growth. To do this, we first analyse water use trajectories. Second, to proceed with the determinants of water use, we reformulate the Ehrlich and Holdren’s impact, population, affluence, technology (IPAT) equation (1971), decomposing water use trends into changes in economic demands and in water use intensity on the basis of a decomposition analysis. Finally, a simple scenario analysis is conducted, to project future water use trends under different economic, demographic and technological assumptions. The empirical evidence shows that economic and population growth have been crucial in explaining the increase in water use over the past 100 years, with significant regional differences. Nevertheless, the decline in water use intensity has been responsible for a significant reduction in the growth of total water use.', note: 'Duarte, R., Pinilla, V., & Serrano, A. (2014). Applied Economics, 46(2), 212–224. https://doi.org/10.1080/00036846.2013.844329' }
              ] },
              { label: 'Abstract 2 · Chertow (2001)', blocks: [
                { type: 'model', title: 'The IPAT equation and its variants: Changing views of technology and environmental impact', text: 'In the early 1970s Ehrlich and Holdren devised a simple equation in dialogue with Commoner identifying three factors that created environmental impact. Thus, impact (I) was expressed as the product of (1) population, (P); (2) affluence, (A); and (3) technology, (T). This article tracks the various forms the IPAT equation has taken over 30 years as a means of examining an underlying shift among many environmentalists toward a more accepting view of the role technology can play in sustainable development. Although the IPAT equation was once used to determine which single variable was the most damaging to the environment, an industrial ecology view reverses this usage, recognizing that increases in population and affluence can, in many cases, be balanced by improvements to the environment offered by technological systems.', note: 'Chertow, M. R. (2001). Journal of Industrial Ecology, 4(4), 13–29. https://doi.org/10.1162/10881980052541927' }
              ] }
            ] },
            { type: 'bet', id: 'm3-bet', title: 'Bet on it', coins: 10, proof: 'Bet big only when the abstract gives you proof.', items: [
              { q: 'Which article should you read first for this assignment?', options: ['Abstract 1 · Duarte et al. (2014)', 'Abstract 2 · Chertow (2001)'], answer: 'Abstract 2 · Chertow (2001)', why: 'Abstract 2 covers all three parts of the task: the history (“over 30 years”), the application and the criticisms of IPAT.' },
              { q: 'Why is Abstract 1 less useful?', options: ['It is too old.', 'It uses IPAT as a tool to study water use — IPAT is not its main focus.', 'It does not mention IPAT at all.'], answer: 'It uses IPAT as a tool to study water use — IPAT is not its main focus.', why: 'It might give you an example of how IPAT is applied, but start with articles that focus directly on IPAT.' }
            ] }
          ]
        },
        {
          id: 'm4', short: 'Main ideas', minutes: 12, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d5-m4.svg',
          title: 'Steps 1–4 · Find the main ideas in Chertow',
          goal: 'Scan the text, compare the start and the end, and find each topic sentence.',
          blocks: [
            { type: 'sources', ids: ['chertow'] },
            { type: 'talk', title: 'Steps 1–2 · Scan, then read paragraphs A and D together (2 minutes)', prompts: [
              'How many paragraphs are there? What is each one about, in three words?',
              'Compare the introduction (A) and the conclusion (D). What did the author set out to do? What was the outcome?'
            ] },
            { type: 'quiz', id: 'm4-q', title: 'Step 3 · Which sentence is the topic sentence?', items: [
              { q: '<b>Paragraph A</b>', options: ['Jesse Ausubel wrote an article asking if technology can help protect the environment.', 'He uses the IPAT equation to explain this.', 'Developed in 1970, this equation shows the impact (I) on the environment of three things …'], answer: 'Jesse Ausubel wrote an article asking if technology can help protect the environment.' },
              { q: '<b>Paragraph B</b>', options: ['It has also been used in more detailed studies about industrial ecology …', 'The IPAT model helps us see how increases in population, economic growth, and technology use can hurt the environment.', 'At first, the IPAT equation highlighted that population growth has a big impact on the environment.'], answer: 'The IPAT model helps us see how increases in population, economic growth, and technology use can hurt the environment.' },
              { q: '<b>Paragraph C</b>', options: ['Barry Commoner helped develop the IPAT equation.', 'This debate still affects research and discussions in environmental science.', 'Commoner defended his findings …'], answer: 'Barry Commoner helped develop the IPAT equation.' }
            ] },
            { type: 'tip', text: 'Step 4: for each topic sentence, keep only the support your reader <b>needs</b>. Names, dates and examples are often details you can drop — unless your task asks for them.' }
          ]
        },
        {
          id: 'm5', short: 'Notes', minutes: 10, grouping: 'Alone → Pair',
          art: 'dec10/assets/week1/v/v-d10w1d5-m5.svg',
          title: 'Step 5 · Turn the highlights into notes',
          goal: 'Complete the outlines of paragraphs A and B. Two words in each list are not needed.',
          blocks: [
            { type: 'cloze', id: 'm5-a', title: 'Outline · Paragraph A', list: true, options: ['technology', 'mitigating', 'sufficient', 'combination', 'affluence', 'exacerbating', 'population'],
              text: 'Ausubel examines the role of {{1}} in {{2}} environmental degradation.\nAusubel argues that technology alone is not {{3}} to solve environmental issues.\nA {{4}} of technological, economic, and cultural strategies is needed.\nIPAT equation: models environmental impact (I) as a result of population (P), {{5}} (A), and technology (T)',
              answers: ['technology', 'mitigating', 'sufficient', 'combination', 'affluence'] },
            { type: 'cloze', id: 'm5-b', title: 'Outline · Paragraph B', list: true, options: ['detrimental', 'major', 'affect', 'slow', 'solve', 'balance', 'acknowledging', 'updated'],
              text: 'IPAT model: shows the {{1}} impact of population growth, economic development, and technological progress on the environment\nThe original IPAT equation focused on the {{2}} impact of population growth.\nLater versions show how the factors {{3}} each other — for example, population growth may {{4}} economic and consumption growth, particularly in developing countries.\nTechnology: can help but can’t {{5}} the problem of environmental impacts\nSo: need to {{6}} population control, economic growth, and technological innovation',
              answers: ['detrimental', 'major', 'affect', 'slow', 'solve', 'balance'] },
            { type: 'talk', title: 'Check with your partner', prompts: ['Do the notes for paragraph A match what you understood from comparing the introduction and the conclusion?'] }
          ]
        },
        {
          id: 'm6', short: 'Write it', minutes: 18, grouping: 'Alone → Class',
          art: 'dec10/assets/week1/v/v-d10w1d5-m6.svg',
          title: 'Step 6 · Write a three-sentence summary',
          goal: 'Summarise paragraph B: main ideas only, your own words, three sentences maximum.',
          blocks: [
            { type: 'para', id: 'm6-p', label: 'Summarise it', placeholder: 'Chertow (2001) explains that …', title: 'Your summary of paragraph B', hint: 'The meter shows how many of the original’s key words you reused (aim for the green zone) and counts your sentences.', items: [
              { text: 'The IPAT model helps us see how increases in population, economic growth, and technology use can hurt the environment. It has also been used in more detailed studies about industrial ecology and how to create sustainable systems. At first, the IPAT equation highlighted that population growth has a big impact on the environment. Later updates to the equation showed how different factors work together, noting that population growth might limit economic growth, especially in poorer countries. Even though technology might reduce some negative impacts, it can’t solve all environmental problems and might just delay them. This idea has led to discussions about the need to manage population growth, encourage economic development, and use technology wisely to achieve sustainability.', strategy: 'Maximum three sentences', keep: ['IPAT'], sentences: 3,
                model: 'Chertow (2001) explains that the IPAT model shows how a rising population, a growing economy and greater use of technology can damage the environment. Although the first version stressed population, later versions showed that these factors interact; for example, population growth may limit economic growth in poorer countries. Since technology can reduce environmental harm but not remove it, a sustainable future depends on managing population, supporting development and using technology carefully.' }
            ] },
            { type: 'checklist', id: 'm6-check', title: 'Critique a summary (yours or a classmate’s)', meter: ['done well', 'A strong summary!'], items: [
              'It has the main idea of the paragraph.',
              'It leaves out details the reader does not need.',
              'It is in the writer’s own words — not copied sentences.',
              'It is three sentences or fewer.',
              'It names the source: Chertow (2001).',
              'The meaning is the same as the original.'
            ] },
            { type: 'tip', text: 'There is no single right summary. How much detail you keep depends on the task and the word limit — be ready to say <b>why</b> you kept each idea.' }
          ]
        }
      ]
    },

    /* ───────────────────────── 20A · AI use in DEC: follow-up ───────────────────────── */
    {
      id: 'aitalk', number: '03', code: '20A', minutes: 30,
      tone: 'teal', art: 'dec10/assets/week1/s-aitalk.svg',
      title: 'AST: Homework follow-up: AI use in DEC',
      subtitle: 'Same topic, same idea?',
      outcome: 'You can summarise your homework notes on one AI topic and check your understanding with classmates who chose the same topic.',
      activities: [
        {
          id: 'k1', short: 'Prepare', minutes: 12, grouping: 'Alone',
          art: 'dec10/assets/week1/v/v-d10w1d5-k1.svg',
          title: 'Summarise your understanding',
          goal: 'Turn your homework notes into a short summary you can read aloud.',
          blocks: [
            { type: 'cards', pick: 'k1-topic', title: 'Your teacher gives you a topic from the homework', items: [
              { label: 'Topic 1', text: 'Use of technology in the DEC course' },
              { label: 'Topic 2', text: 'The University of Sydney’s guidelines for using AI' },
              { label: 'Topic 3', text: 'Ethical use of AI' }
            ] },
            { type: 'fields', fields: [{ id: 'k1-sum', label: 'My summary of the topic (from my homework notes, in my own words)', rows: 5, placeholder: 'The main idea is that …' }] },
            { type: 'language', title: 'To present your summary', groups: [
              { label: 'Main idea', phrases: ['The main idea is that …', 'Basically, …'] },
              { label: 'Key points', phrases: ['One key point is …', 'Another important point is …'] },
              { label: 'Checking', phrases: ['Did you understand it the same way?', 'So you think … — is that right?'] }
            ] }
          ]
        },
        {
          id: 'k2', short: 'Discuss', minutes: 18, grouping: 'Group',
          art: 'dec10/assets/week1/v/v-d10w1d5-k2.svg',
          title: 'Same topic, same main idea?',
          goal: 'Read your summaries and find any differences in understanding.',
          blocks: [
            { type: 'do', n: 1, who: 'group', text: 'Sit with students who wrote about the <b>same</b> topic. Take turns reading your summary to the group.' },
            { type: 'do', n: 2, who: 'group', text: 'Do you have the same main idea? Discuss any differences — and decide who is right, or check the homework page.' },
            { type: 'do', n: 3, who: 'group', text: 'Now check together: does everyone agree on these four answers?' },
            { type: 'quiz', id: 'k2-q', title: 'Group check: does everyone agree?', items: [
              { q: 'Most DEC assessments are <b>secure</b> assessments. What does that mean?', options: ['AI use is prohibited or controlled.', 'AI is allowed if you acknowledge it.', 'You can use AI to prepare answers to memorise.'], answer: 'AI use is prohibited or controlled.', why: 'DEC tests whether you reach the threshold level of English without AI or digital tools.' },
              { q: 'You used AI to check the grammar of a draft you wrote yourself. What must you do?', options: ['Nothing — grammar checks don’t count.', 'Acknowledge your use of AI.', 'Delete the draft and start again.'], answer: 'Acknowledge your use of AI.' },
              { q: 'Your teacher asks you to explain a word in your essay and you can’t. What can happen?', options: ['Nothing.', 'Your assignment can be disqualified.', 'You get half marks.'], answer: 'Your assignment can be disqualified.', why: 'If you cannot explain your own text, it is not evidence of your English.' },
              { q: 'What is the best way to use AI for a paraphrasing task?', options: ['Ask AI first, then change a few words.', 'Write your own paraphrase first, then compare it with an AI version and find the AI’s faults.', 'Use a translation tool to read the original.'], answer: 'Write your own paraphrase first, then compare it with an AI version and find the AI’s faults.' }
            ] },
            { type: 'fields', fields: [{ id: 'k2-diff', label: 'One difference in understanding our group found, and what we decided', rows: 2 }] }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['diagnostic', 'a test that shows your starting level so your teacher can help you', 'The diagnostic is not part of your final score.'],
    ['summarise', 'to give the main ideas of a longer text in fewer words', 'Summarise the paragraph in three sentences.'],
    ['abstract', 'the author’s own short summary at the start of an article', 'Read the abstract to decide if the article is relevant.'],
    ['topic sentence', 'the sentence that gives the main idea of a paragraph, often the first', 'Highlight the topic sentence of each paragraph.'],
    ['outline', 'notes that show the main ideas and how they are organised', 'Write your summary from your outline.'],
    ['detrimental', 'harmful', 'Population growth can have a detrimental impact on the environment.'],
    ['mitigate', 'to make something bad less serious', 'Technology can mitigate environmental damage.'],
    ['secure assessment', 'a supervised assessment where AI is not allowed (or is controlled)', 'The LRW Assessment is a secure assessment.']
  ]
};
