/* DEC10 · Week 2 · Day 3 — Present, ask, give feedback
   Teacher's Book: W2 D3 10A Presentation skills · 11A Asking effective individual questions · 12A AST: Introducing the
   presentation feedback tool · 13A Group research summary presentation groups 1 & 2 · 14A AST: Self-regulation and monitoring Homework.
   Protected (copied from the Teacher's Book, do not edit): the four source extracts and the two paraphrases (10A Steps 1–2),
   the presentation extract, the Alex/Jamie sample transcript (11A), the question-type tables, the Peer and Teacher Feedback Tool
   statements (12A/13A), the seminar sample question and the SMART example (14A). Ids never change after students start. */
window.DEC15_LESSON = {
  id: 'd10w2d3',
  week: 2, day: 3,
  title: 'Present, ask, give feedback',
  duration: 'About 3 hours 30 minutes + homework',
  question: 'How do you turn your research into a talk people can follow — and ask the questions that make a speaker think?',
  questionKind: 'Big question',
  questionLabel: 'Today’s big question · you will need it for your Research Summary presentation and the Interactive Presentation',
  journey: 'Give a 2-minute talk with no preparation, turn research into one clear slide, learn the two questions you will be asked in the Interactive Presentation (clarification and probing), meet the feedback tool — then Groups 1 and 2 present, and everyone gives real feedback. Tonight: plan your seminar with SMART goals.',
  image: 'dec10/assets/week2/hero-d10w2d3.svg',
  imageAlt: 'Illustration: a student presents a slide called “Impacts of Digital Devices”. The audience asks “What do you mean by people?” and “Why is that important?”. Around them: a 2-minute stopwatch, a peer feedback form and a SMART plan card.',
  finish: { title: 'Day 4', text: 'Presentation skills, Groups 3, 4 and 5 present, and Group 1’s Opening Remarks' },
  goalShort: 'your Research Summary presentation and the Interactive Presentation',

  sections: [
    /* ───────────────────────── 10A ───────────────────────── */
    {
      id: 'present', number: '01', code: '10A', minutes: 60,
      tone: 'clay', art: 'dec10/assets/week2/s-present.svg',
      title: 'Presentation skills',
      subtitle: 'From research to a slide you can say',
      outcome: 'Choose the right information from your research, paraphrase it into your talk and put it on a clear slide — and say it clearly.',
      activities: [
        {
          id: 'p1', short: 'Homework check', minutes: 5, grouping: 'Pair',
          title: 'Presentation skills Homework follow-up',
          goal: 'Remember the shape of a good presentation.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'How did the homework go? Tell your partner in one sentence.' },
            { type: 'do', n: 2, who: 'pair', text: 'Answer the homework question together: <b>What do you notice about the structure of the introduction, the body paragraphs and the conclusion?</b>' },
            { type: 'fields', fields: [{ id: 'p1-notice', label: 'What we noticed', rows: 2, placeholder: 'The body follows …' }] },
            { type: 'toggle', title: 'Check your answer', hint: 'Open after you talk', blocks: [
              { type: 'figure', src: 'dec10/assets/week2/d3-pres-shape.svg', size: 'wide', alt: 'The shape of a presentation: the introduction gives an outline, the body follows the same order, and the conclusion rephrases the main points.', caption: 'Outline → same order → rephrased.' },
              { type: 'key', title: 'The answer', points: ['The main sections follow <b>the same order as the outline</b> in the introduction.', 'In the conclusion, these sections are <b>rephrased</b> (said again in new words).'] }
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Where does each phrase go? Sort them, then say each one aloud — like a presenter.' },
            { type: 'sort', id: 'p1-sort', title: 'Presenter phrases', hint: 'Put each phrase in the right part of the talk.', buckets: [{ label: 'Introduction', letter: 'I' }, { label: 'Body', letter: 'B' }, { label: 'Conclusion', letter: 'C' }], items: [
              { text: 'Good morning, everyone. My name is …', answer: 0 },
              { text: 'Today I’m going to talk about …', answer: 0 },
              { text: 'This topic matters because …', answer: 0 },
              { text: 'First, I’ll look at … Then … Finally …', answer: 0 },
              { text: 'Let’s start with …', answer: 1 },
              { text: 'Moving on to my second point, …', answer: 1 },
              { text: 'For example, …', answer: 1 },
              { text: 'That brings me to the end of my talk.', answer: 2 },
              { text: 'To sum up, I talked about …', answer: 2 },
              { text: 'Thank you for listening. Are there any questions?', answer: 2 }
            ] }
          ]
        },
        {
          id: 'p2', short: '2-minute talk', minutes: 10, grouping: 'Groups of 3–4',
          title: 'Mini-presentations: 2 minutes, no preparation!',
          goal: 'Give a short talk with a clear structure — and ask the speaker a question.',
          blocks: [
            { type: 'key', title: 'Don’t worry', points: ['The topic is very easy (and not academic).', 'You speak for <b>2 minutes</b>. Your group times you.', 'Use the short structure below and some presenter phrases.'] },
            { type: 'cards', title: 'The short structure', numbered: true, items: [
              { label: 'Introduction', text: 'Greeting the audience · Introduce yourself · Introduce the topic · Importance / relevance of the topic (if appropriate)' },
              { label: 'Body', text: '2–4 main points' },
              { label: 'Conclusion', text: 'Signalling the end of the presentation · Repeat the topic · Thank the audience · Ask the audience for questions' }
            ] },
            { type: 'spinner', id: 'p2-spin', title: 'Spin your topic', text: 'Presenter: spin, then start talking straight away. Choose again only if you really have nothing to say.', reels: [{ label: 'Topic', items: ['My family', 'My city/town', 'My favourite food', 'My favourite music', 'My favourite film'] }] },
            { type: 'language', title: 'Phrases to connect your ideas', groups: [
              { label: 'Start', phrases: ['Hi everyone, I’m … and today I’d like to tell you about …', 'I chose this topic because …', 'I’ll talk about three things: …'] },
              { label: 'Move on', phrases: ['First of all, …', 'Another thing I love is …', 'On top of that, …', 'The last point is …'] },
              { label: 'Finish', phrases: ['So, that’s all from me.', 'To wrap up, …', 'Thanks for listening! Does anyone have a question?'] }
            ] },
            { type: 'steps', items: [
              { who: 'alone', text: '<b>Presenter:</b> talk for 2 minutes. Follow the structure. Use some phrases from the box.' },
              { who: 'group', text: '<b>Audience:</b> listen. Notice the structure and the phrases. At the end, ask <b>one follow-up question</b>.' },
              { who: 'group', text: 'Change presenter. Everyone speaks once.' }
            ] },
            { type: 'language', title: 'Audience: follow-up questions', groups: [{ label: 'Ask the speaker', phrases: ['You said … — could you tell us more about that?', 'Why is … so special for you?', 'What’s the best thing about …?', 'How often do you …?'] }] },
            { type: 'talk', title: 'Activity 2 · When you have all finished', prompts: ['How did you feel when giving your mini-presentation?', 'Were you able to follow the suggested structure and speak for 2 minutes?', 'Can you offer your groupmates any feedback on their presentation structure and phrases?'] },
            { type: 'scale', id: 'p2-feel', title: 'Be honest', statement: 'Speaking for 2 minutes with no preparation felt …', ends: ['Very stressful', 'Easy and fun'], mid: 'OK' }
          ]
        },
        {
          id: 'p3', short: 'Research check', minutes: 5, grouping: 'Pair',
          title: 'Group Discussion: Research',
          goal: 'Say how your research is going — and get help if you are stuck.',
          blocks: [
            { type: 'talk', title: 'Discuss these questions with your partner', prompts: ['How have you been going with the preparations and research for your group summary presentations?', 'Do you find it difficult to find sources? Why?', 'Do you find it interesting or enjoyable?', 'How can you incorporate research into a presentation?'] },
            { type: 'language', title: 'Talking about your progress', groups: [
              { label: 'Going well', phrases: ['I’m on track. I’ve already found …', 'It’s going well — I’ve finished my summary.', 'I found a really useful source about …'] },
              { label: 'Not so well', phrases: ['I’m a bit behind with …', 'I’m struggling to find sources on …', 'I’m not sure if my source is reliable.'] },
              { label: 'Offer help', phrases: ['Have you tried searching for …?', 'Why don’t you use the library database?', 'I can send you the link to …'] }
            ] },
            { type: 'fields', fields: [{ id: 'p3-next', label: 'One thing I must do for my research before my group presents', rows: 2, placeholder: 'Before … I will …' }] }
          ]
        },
        {
          id: 'p4', short: 'Step 1 · Choose', minutes: 5, grouping: 'Pair',
          title: 'Step 1: Choose Appropriate Information from your Research',
          goal: 'Pick the information that really helps your topic.',
          blocks: [
            { type: 'model', title: 'Imagine you’re going to give a presentation on this topic', text: '<b>The environmental effects of using digital devices</b>' },
            { type: 'key', title: 'Three questions to ask about every sentence', numbered: true, points: ['Is it about <b>my topic</b> (here: the environmental effects of devices)?', 'Does it give <b>evidence</b> — a number, a fact or an example?', 'Will my <b>audience</b> understand it quickly?'] },
            { type: 'do', n: 1, who: 'pair', text: 'Read the four sentences from this week’s sources. Which <b>two</b> would be most useful? Sort them, then explain your choice to your partner.' },
            { type: 'sort', id: 'p4-sort', title: 'Useful for this presentation?', buckets: [{ label: 'Most useful', letter: '✓' }, { label: 'Less useful', letter: '✗' }], items: [
              { text: 'a. “If we were to divide the 1.7 billion tonnes of greenhouse gas emissions estimated to be produced in the manufacture and running of digital technologies between all internet users around the world, it means each of us is responsible for 414kg of carbon dioxide a year” (Griffiths, 2020).', answer: 0, why: 'On topic and strong evidence: two clear numbers about the effects of digital technology.' },
              { text: 'b. “To reduce the carbon footprint, it is preferable to “follow the sun” to where solar energy is more abundant, while to reduce the water footprint, it is preferable to “unfollow the sun” to avoid high-temperature hours in the day” (United Nations, 2024).', answer: 1, why: 'Interesting, but it is about where to run AI computing — not the effects of using our devices.' },
              { text: 'c. “Torbjorn Fredrickson, head of the e-commerce and digital economy branch,….. confesses he’s not a fan of social media platforms himself” (UN Trade and Development, 2024).', answer: 1, why: 'A personal detail about the guest. No evidence about the environment.' },
              { text: 'd. “There’s no doubt that by applying digital technologies, we can perhaps reduce the energy use by making things more efficient. We can go to teleworking, to avoid transportation. We can go into e-commerce, to avoid travelling by car, to shop and so on and so forth” (UN Trade and Development, 2024).', answer: 0, why: 'On topic: a positive effect of devices, with examples (teleworking, e-commerce).' }
            ] },
            { type: 'talk', prompts: ['Which sentence was the easiest to reject? Why?', 'Think of your own research: which sentence in your notes is your “sentence a” (the best evidence)?'] }
          ]
        },
        {
          id: 'p5', short: 'Step 2 · Paraphrase', minutes: 15, grouping: 'Pair',
          title: 'Step 2: Paraphrase / Synthesise Information into your Presentation',
          goal: 'Put a source into your own words and fit it into your talk.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Review the techniques for paraphrasing. Say an example for each card before you turn it.' },
            { type: 'flip', title: 'Four paraphrasing techniques', items: [
              { front: 'Use synonyms', back: 'reduce → <b>minimise</b> · teleworking → <b>working from home</b>' },
              { front: 'Change word forms', back: 'efficient (adj.) → <b>the efficiency</b> (noun)' },
              { front: 'Change the order of the information', back: 'Start with the result, then give the reason — or the other way round.' },
              { front: 'Identify relationships between ideas and express them with different linking words', back: '“it means” → <b>which means that</b> · “to avoid” → <b>can be reduced by</b>' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Choose one of the two useful sentences (a or d) and write a paraphrase. Then <b>swap</b> with another pair: which extract did they paraphrase? Which techniques did they use?' },
            { type: 'para', id: 'p5-para', title: 'Your paraphrase', hint: 'Do ONE of them (or both if you are fast). Keep the numbers and the citation.', items: [
              { text: '“If we were to divide the 1.7 billion tonnes of greenhouse gas emissions estimated to be produced in the manufacture and running of digital technologies between all internet users around the world, it means each of us is responsible for 414kg of carbon dioxide a year” (Griffiths, 2020).', strategy: 'Try: word forms + linking words', keep: ['1.7 billion', '414kg', 'Griffiths'], model: 'Every year, global production and use of digital technology emits 1.7 billion tonnes of greenhouse gases, which means that on average, individual internet users are responsible for 414kg of carbon dioxide emissions (Griffiths, 2020).' },
              { text: '“There’s no doubt that by applying digital technologies, we can perhaps reduce the energy use by making things more efficient. We can go to teleworking, to avoid transportation. We can go into e-commerce, to avoid travelling by car, to shop and so on and so forth” (UN Trade and Development, 2024).', strategy: 'Try: synonyms + word forms', keep: ['UN Trade and Development'], model: 'The efficiency that digital technology brings can minimise energy use, for instance emissions created by car use can be reduced by working from home or shopping online (UN Trade and Development, 2024).' }
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Now read the two paraphrases. Complete the gaps so the meaning is the same as the original.' },
            { type: 'cloze', id: 'p5-gap', title: 'Complete the paraphrases', options: ['414kg', 'minimise', 'online', '1.7 billion tonnes', 'car', 'average'], text: 'a) Every year, global production and use of digital technology emits {{1}} of greenhouse gases, which means that on {{2}}, individual internet users are responsible for {{3}} of carbon dioxide emissions (Griffiths, 2020).\n\nb) The efficiency that digital technology brings can {{4}} energy use, for instance emissions created by {{5}} use can be reduced by working from home or shopping {{6}} (UN Trade and Development, 2024).', answers: ['1.7 billion tonnes', 'average', '414kg', 'minimise', 'car', 'online'] },
            { type: 'do', n: 4, who: 'pair', text: 'Where would the two paraphrases best fit in this student’s talk? Read the student’s ideas (1–4), then answer.' },
            { type: 'model', title: 'Presentation extract (student’s ideas)', list: ['Digital devices have had various benefits for our lives and our world.', 'However, with these benefits there have also been various disadvantages.', 'Many people don’t think about the negative impact that their time spent using a phone or other digital device is having on the environment.', 'These harmful gases can cause irreparable damage to our environment.'] },
            { type: 'language', title: 'Linking phrases', groups: [{ label: 'From the Teacher’s Book', phrases: ['A 2020 study by Griffiths estimated that….', 'Recent research from the UN Trade and Development Department proposed that…'] }] },
            { type: 'quiz', id: 'p5-fit', items: [
              { q: 'Paraphrase <b>b</b> (efficiency, working from home) fits best after sentence …', options: ['1', '2', '3', '4'], answer: '1', why: 'Sentence 1 is about the <b>benefits</b> of devices. Paraphrase b gives evidence for a benefit.' },
              { q: 'Paraphrase <b>a</b> (1.7 billion tonnes, 414kg) fits best after sentence …', options: ['1', '2', '3', '4'], answer: '3', why: 'Sentence 3 talks about the negative impact on the environment; paraphrase a gives the numbers. Then sentence 4 (“These harmful gases …”) follows naturally.' },
              { q: 'Which linking phrase introduces paraphrase <b>a</b>?', options: ['A 2020 study by Griffiths estimated that….', 'Recent research from the UN Trade and Development Department proposed that…'], answer: 'A 2020 study by Griffiths estimated that….', why: 'Paraphrase a comes from Griffiths (2020).' }
            ] },
            { type: 'toggle', title: 'The finished extract', hint: 'Open after the quiz', blocks: [
              { type: 'model', title: 'Presentation Extract', list: ['Digital devices have had various benefits for our lives and our world. <b><i>Recent research from the UN Trade and Development Department proposed that…</i> …the efficiency that digital technology brings can minimise energy use, for instance emissions created by car use can be reduced by working from home or shopping online.</b>', 'However, with these benefits there have also been various disadvantages.', 'Many people don’t think about the negative impact that their time spent using a phone or other digital device is having on the environment. <b><i>A 2020 study by Griffiths estimated that….</i> …every year, global production and use of digital technology emits 1.7 billion tonnes of greenhouse gases, which means that on average, individual internet users are responsible for 414kg of carbon dioxide emissions.</b>', 'These harmful gases can cause irreparable damage to our environment.'] }
            ] },
            { type: 'language', title: 'Go further: more ways to bring a source into your talk', groups: [
              { label: 'Reporting a study', phrases: ['According to Griffiths (2020), …', 'Research by … shows / suggests that …', 'A recent report by … found that …', 'As … point out, …'] },
              { label: 'Strong or careful?', phrases: ['shows · proves · found (sure)', 'suggests · estimates · claims (less sure)', 'proposed that … (an idea, not a fact)'] }
            ] },
            { type: 'tip', text: 'Need more cause-and-effect language for your slide sentences? Open your Student’s book, Language Reference, page 112. For compare-and-contrast language, see page 113.' },
            { type: 'detect', id: 'p5-write', title: 'Your turn: one source, one sentence', hint: 'Write ONE sentence for your own Research Summary presentation that brings in a source. The lights turn on as you use each part.', checks: [
              { label: 'Reporting phrase', color: '#3a58a0', any: ['according to', 'estimated', 'found that', 'shows that', 'suggests that', 'proposed that', 'research', 'study', 'report'] },
              { label: 'Citation (year)', color: '#2f9a63', any: ['/(19|20)\\d{2}/'] },
              { label: 'Cause or effect', color: '#d99a1e', any: ['because', 'due to', 'leads to', 'lead to', 'causes', 'cause', 'result', 'which means', 'reduce', 'increase'] }
            ], items: [{ task: 'Use a source from your own research (or from this week’s sources).', rows: 3, placeholder: 'A 2024 report by … found that …', model: 'According to a 2020 study by Griffiths, the production and use of digital technology leads to 1.7 billion tonnes of greenhouse gases every year.' }] }
          ]
        },
        {
          id: 'p6', short: 'Step 3 · Slides', minutes: 5, grouping: 'Pair',
          title: 'Step 3: Add the Information to your Slides',
          goal: 'Choose the slide that helps the audience — and say why.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Look at the three slides. Which one (A, B or C) would be best for our student’s presentation? Why?' },
            { type: 'tabs', title: 'Three slides, one message', tabs: [
              { label: 'Slide A', blocks: [{ type: 'figure', src: 'dec10/assets/week2/d3-slide-a.svg', size: 'wide', alt: 'Slide A: a photo of a person with a phone and two long paragraphs of text.' }] },
              { label: 'Slide B', blocks: [{ type: 'figure', src: 'dec10/assets/week2/d3-slide-b.svg', size: 'wide', alt: 'Slide B: two columns, positive and negative impacts, short bullet points with arrows and references.' }] },
              { label: 'Slide C', blocks: [{ type: 'figure', src: 'dec10/assets/week2/d3-slide-c.svg', size: 'wide', alt: 'Slide C: a script font, bright green and red boxes with pale text, smiley emojis and no references.' }] }
            ] },
            { type: 'bet', id: 'p6-bet', title: 'Place your bet', proof: 'Bet big only when you can say WHY.', items: [{ q: 'Which slide is best?', options: ['Slide A', 'Slide B', 'Slide C'], answer: 'Slide B', why: 'It just has bullet points of key details and includes referencing.' }] },
            { type: 'sort', id: 'p6-sort', title: 'What did you notice?', hint: 'Which slide does each comment describe?', buckets: [{ label: 'Slide A', letter: 'A' }, { label: 'Slide B', letter: 'B' }, { label: 'Slide C', letter: 'C' }], items: [
              { text: 'Too much text — the presenter will just read it.', answer: 0 },
              { text: 'The text distracts the audience from the speaker.', answer: 0 },
              { text: 'Bullet points of key details only.', answer: 1 },
              { text: 'References are on the slide.', answer: 1 },
              { text: 'A strange heading font that is difficult to read.', answer: 2 },
              { text: 'The colours don’t contrast enough (pink on red).', answer: 2 },
              { text: 'Inappropriate emojis.', answer: 2 },
              { text: 'No references.', answer: 2 }
            ] },
            { type: 'cards', title: 'Go further: five rules for academic slides', numbered: true, items: [
              { label: 'Key words, not sentences', text: 'About 6 lines, about 6 words per line. YOU say the rest.' },
              { label: 'Cite on the slide', text: '(Griffiths, 2020) under the point it supports.' },
              { label: 'Dark on light', text: 'Dark text on a light background is easiest to read.' },
              { label: 'One simple font', text: 'Same font and colours for every group member.' },
              { label: 'Pictures that explain', text: 'Arrows, charts and icons — not decoration.' }
            ] }
          ]
        },
        {
          id: 'p7', short: 'Step 4 · Say it', minutes: 5, grouping: 'Pair',
          title: 'Step 4: Say it!',
          goal: 'Deliver the slide and cite the sources as you speak.',
          blocks: [
            { type: 'do', n: 1, who: 'class', text: 'Listen to your teacher model the slide. Notice how the sources are mentioned.' },
            { type: 'model', title: 'Your teacher’s model (beginning)', text: '<i>Looking now at the impacts of digital devices – we can see both positive and negative impacts. The positive impact is in terms of efficiency and reduced energy use. For example, UN Trade and Development have found that ....</i>' },
            { type: 'language', title: 'Citing when you speak', groups: [
              { label: 'Say the source', phrases: ['UN Trade and Development have found that …', 'According to Griffiths, in 2020, …', 'A study from 2020 by Griffiths estimated that …'] },
              { label: 'Guide the eyes', phrases: ['As you can see on the left, …', 'If we look at the negative side, …', 'This arrow shows that …'] },
              { label: 'Explain the number', phrases: ['That is about … per person.', 'In other words, …', 'This means that …'] }
            ] },
            { type: 'steps', items: [
              { who: 'pair', text: 'A: deliver slide B (about 1 minute). Remember to cite the source in your delivery.' },
              { who: 'pair', text: 'B: listen and tick the checklist. Then give one piece of feedback. Swap.' }
            ] },
            { type: 'checklist', id: 'p7-check', title: 'My partner …', meter: ['ticked', 'Great delivery!'], items: ['looked at the audience, not the slide', 'said both sources (UN Trade and Development and Griffiths)', 'explained the arrows in words', 'used a phrase to move from positive to negative', 'did not read every word'] }
          ]
        },
        {
          id: 'p8', short: 'Sounds', minutes: 20, grouping: 'Pair',
          title: 'Pronunciation: Individual Sounds (Optional Activity)',
          goal: 'Hear and say vowel sounds, “th” and consonant clusters from today’s extract.',
          blocks: [
            { type: 'key', title: 'Why?', points: ['Another important part of giving a presentation is <b>speaking clearly</b>.', 'Listen to your teacher, then repeat. Your teacher chooses which parts your class needs.'] },
            { type: 'figure', src: 'dec10/assets/week2/d3-vowels.svg', size: 'wide', alt: 'Four vowels: /iː/ seat, cheap, feel (long, smile); /ɪ/ sit, chip, fill (short, relaxed); /e/ men, beg, bet (short, half open); /æ/ man, bag, bat (short, wide open).', caption: '1 · Vowel sounds. /iː/ is a longer sound.' },
            { type: 'do', n: 1, who: 'pair', text: 'Say the pairs: <b>seat – sit</b>, <b>cheap – chip</b>, <b>feel – fill</b>, <b>men – man</b>, <b>beg – bag</b>, <b>bet – bat</b>. Your partner points to the word they hear.' },
            { type: 'do', n: 2, who: 'pair', text: 'These words come from the presentation extract. What is the sound of the <u>underlined</u> vowel? Sort them.' },
            { type: 'sort', id: 'p8-vow', title: 'Sort the vowel sounds', buckets: [{ label: '/iː/ seat', letter: 'iː' }, { label: '/ɪ/ sit', letter: 'ɪ' }, { label: '/e/ men', letter: 'e' }, { label: '/æ/ man', letter: 'æ' }], items: [
              { text: 'm<u><b>ea</b></u>ns', answer: 0 }, { text: 'r<u><b>e</b></u>cent', answer: 0 }, { text: 'th<u><b>e</b></u>se', answer: 0 },
              { text: 'd<u><b>i</b></u>gital', answer: 1 }, { text: 'em<u><b>i</b></u>ts', answer: 1 }, { text: 'indiv<u><b>i</b></u>dual', answer: 1 },
              { text: 'b<u><b>e</b></u>nefits', answer: 2 }, { text: '<u><b>e</b></u>nergy', answer: 2 }, { text: '<u><b>e</b></u>very', answer: 2 },
              { text: 'd<u><b>a</b></u>mage', answer: 3 }, { text: '<u><b>a</b></u>verage', answer: 3 }, { text: 'g<u><b>a</b></u>ses', answer: 3 }
            ] },
            { type: 'figure', src: 'dec10/assets/week2/d3-th.svg', size: 'wide', alt: 'Bath (noun) has a voiceless /θ/: no sound from the throat. Bathe (verb) has a voiced /ð/: the throat vibrates.', caption: '2 · Two “th” sounds. Put your fingers on your throat: can you feel it buzz?' },
            { type: 'sort', id: 'p8-th', title: 'Voiceless /θ/ or voiced /ð/?', hint: 'Say each word with your fingers on your throat.', buckets: [{ label: '/θ/ voiceless (bath)', letter: 'θ' }, { label: '/ð/ voiced (bathe)', letter: 'ð' }], items: [
              { text: '<u><b>th</b></u>e', answer: 1 }, { text: '<u><b>th</b></u>at', answer: 1 }, { text: 'wi<u><b>th</b></u>', answer: 1 }, { text: '<u><b>th</b></u>ink', answer: 0 },
              { text: 'o<u><b>th</b></u>er', answer: 1 }, { text: 'Griffi<u><b>th</b></u>s', answer: 0 }, { text: '<u><b>th</b></u>ese', answer: 1 }, { text: '<u><b>th</b></u>eir', answer: 1 }
            ] },
            { type: 'cards', title: '3 · Consonant clusters (two or more consonant sounds together)', items: [
              { label: 'Griffiths', text: '<b>Gr</b>iffi<b>ths</b> · /gr/ and /θs/ — difficult? Me too!' },
              { label: 'proposed', text: '<b>pr</b>opo<b>sed</b> · /pr/ and /zd/' },
              { label: 'reduced', text: 'redu<b>ced</b> · /st/' },
              { label: 'lives', text: 'li<b>ves</b> · /vz/' },
              { label: 'brings', text: '<b>br</b>i<b>ngs</b> · /br/ and /ŋz/ (say ‘ngz’)' }
            ] },
            { type: 'flash', id: 'p8-flash', title: 'Tongue twister challenge', text: 'A 2020 study by Griffiths estimated that these gases damage the environment.', seconds: 6, writer: 'Speaker', reader: 'Listener' },
            { type: 'do', n: 3, who: 'pair', text: 'Say the challenge sentence three times, faster each time. Your partner listens for <b>th</b>, <b>Gr</b> and the long <b>ee</b> in <i>these</i>.' },
            { type: 'cards', title: '4 · Practice at home', items: [
              { label: 'Phonetic Chart', text: '<a href="https://english-dashboard.pearson.com/CDN/ProdStore/GOLDXP/A2/resources/07_Expanded_Wordlist/Phonetic_Chart/index.html" target="_blank" rel="noopener">Open the Phonetic Chart</a> and practise making the sounds of English by yourself.' },
              { label: 'Learn English Sounds Right (British Council)', text: 'Practise individual sounds. <a href="https://apps.apple.com/us/app/learnenglish-sounds-right/id387588128" target="_blank" rel="noopener">Apple</a> · <a href="https://play.google.com/store/apps/details?id=com.britishcouncil.phonemicchart&hl=en_AU" target="_blank" rel="noopener">Android</a>' },
              { label: 'ELSA Speak', text: 'Words and short dialogues with feedback. <a href="https://apps.apple.com/us/app/elsa-speak-english-learning/id1083804886" target="_blank" rel="noopener">Apple</a> · <a href="https://play.google.com/store/apps/details?id=us.nobarriers.elsa&hl=en_AU" target="_blank" rel="noopener">Android</a>' },
              { label: 'Canvas', text: 'Watch the pronunciation videos in the Communication Resources section of Canvas.' }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 11A ───────────────────────── */
    {
      id: 'questions', number: '02', code: '11A', minutes: 30,
      tone: 'teal', art: 'dec10/assets/week2/s-questions.svg',
      title: 'Asking effective individual questions',
      subtitle: 'Clarification or probing?',
      outcome: 'Explain the difference between clarification and probing questions, ask both, and give feedback on how effective a question is.',
      activities: [
        {
          id: 'q1', short: 'Two sets', minutes: 2, grouping: 'Class',
          title: 'Introduction',
          goal: 'Know which questions you will answer in the Interactive Presentation.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d3-qa-sets.svg', size: 'wide', alt: 'Two sets of questions after the Interactive Presentation: Set 1 on your content (one clarification and one probing question) and Set 2 on the Academic Success Toolkit.', caption: 'Two sets of individual questions.' },
            { type: 'key', title: 'In the Interactive Presentation', points: ['<b>Set 1</b> — on your content: <b>one clarification question</b> and <b>one probing question</b>.', '<b>Set 2</b> — on the <b>Academic Success Toolkit</b>.', 'You practise asking and answering both in class, starting with your Research Summary presentations today.'] },
            { type: 'quiz', id: 'q1-q', items: [{ q: 'How many questions on your content will you be asked?', options: ['One', 'Two', 'Four'], answer: 'Two', why: 'One clarification question and one probing question.' }] }
          ]
        },
        {
          id: 'q2', short: 'Question bank', minutes: 5, grouping: 'Pair',
          title: 'Interactive Presentation: Individual questions',
          goal: 'Know the question types and examples.',
          blocks: [
            { type: 'tabs', title: 'Question types and examples', tabs: [
              { label: 'Questions on content', blocks: [
                { type: 'model', title: 'QUESTIONS ON CONTENT', rows: [
                  ['CLARIFICATION', 'What did you mean by ...? · What do [specific data] represent? · Can you give some more details about ...? · What does [term/concept] mean? · Could you clarify how/when/where/why [something]?'],
                  ['PROBING', 'Can you explain why that is important? · Why do you think [specific data] are important for your point? · Why did you choose to focus on ...? · What makes that a challenge? · How did you come to that conclusion?']
                ] }
              ] },
              { label: 'Questions on the AST', blocks: [
                { type: 'cards', title: 'QUESTIONS ON ACADEMIC SKILLS TOOLKIT', items: [
                  { label: 'Digital literacy and AI', text: 'Can you describe which AI tools you used in your research and how you used them?<br>Was there any part of the task where you chose not to use AI? Why?<br>Can you describe a time when AI changed your original ideas or direction during your research?' },
                  { label: 'Group work skills', text: 'How did you decide who does what in preparing this presentation?<br>How did you make sure everyone’s ideas were considered?<br>What digital tools did you use to work together and why?' },
                  { label: 'Self-regulation and monitoring', text: 'How did you manage your time preparing for this presentation?<br>How did you manage any distractions when working on your presentation at home?<br>Do you think you managed your time well in preparing for this presentation?' },
                  { label: 'Feedback literacy', text: 'How did you use the rubric to guide your preparation for the presentation?<br>How useful was the action plan you had made to improve your presentation?<br>Did you evaluate your groupmates’ presentation practice? How did you do this?' },
                  { label: 'Research skills', text: 'What methods did you use to research information for this week’s topic?<br>Did you find it easier to use library resources or online resources? Why?<br>Can you explain how you evaluated the quality of the sources you found in this week’s research?' },
                  { label: 'Criticality', text: 'Did your research change your perspective on this week’s topic? If so, how?<br>Did any of the sources you found raise questions that you want to explore further?<br>Did you find any conflicting information during your research, and how did you handle it?' }
                ] }
              ] }
            ] },
            { type: 'tip', text: 'These questions are also in the downloadable <b>Follow-up question types and examples</b> PDF on Canvas. Keep it open during today’s presentations.' }
          ]
        },
        {
          id: 'q3', short: 'Clarify or probe?', minutes: 8, grouping: 'Pair',
          title: 'Clarification vs Probing Questions',
          goal: 'Tell the two kinds of question apart.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d3-clar-probe.svg', size: 'wide', alt: 'One statement and two questions: a clarification question makes it clear; a probing question goes deeper.', caption: 'Clarification = make it clear. Probing = go deeper.' },
            { type: 'cards', items: [
              { label: 'Clarification questions', text: 'Asked when the listener has a question about <b>what exactly is meant</b> or <b>what exactly is being claimed</b>.<br><i>“What do you mean by ...?” · “Could you explain more about ...?”</i>' },
              { label: 'Probing questions', text: 'Questions that prompt you to <b>expand upon</b> or give <b>more information</b> about what you have said.<br><i>“Why do you think [something] is important?” · “What example can you provide of ...?”</i>' }
            ] },
            { type: 'do', n: 1, who: 'pair', text: 'Sort the ten questions from the question bank. Say each one aloud with polite intonation.' },
            { type: 'sort', id: 'q3-sort', title: 'Clarification or probing?', buckets: [{ label: 'Clarification', letter: 'C' }, { label: 'Probing', letter: 'P' }], items: [
              { text: 'What did you mean by ...?', answer: 0 },
              { text: 'Can you explain why that is important?', answer: 1 },
              { text: 'What do [specific data] represent?', answer: 0 },
              { text: 'Why did you choose to focus on ...?', answer: 1 },
              { text: 'Can you give some more details about ...?', answer: 0 },
              { text: 'What makes that a challenge?', answer: 1 },
              { text: 'What does [term/concept] mean?', answer: 0 },
              { text: 'How did you come to that conclusion?', answer: 1 },
              { text: 'Could you clarify how/when/where/why [something]?', answer: 0 },
              { text: 'Why do you think [specific data] are important for your point?', answer: 1 }
            ] },
            { type: 'quiz', id: 'q3-quiz', title: 'Statement: “Streaming video is responsible for about 1% of global emissions.”', items: [
              { q: '“What do you mean by ‘streaming’ — only YouTube, or Netflix too?”', options: ['Clarification', 'Probing'], answer: 'Clarification', why: 'It asks what exactly a word means.' },
              { q: '“Why do you think that 1% is important for your point?”', options: ['Clarification', 'Probing'], answer: 'Probing', why: 'It asks the speaker to explain why — to go deeper.' },
              { q: '“Could you clarify where that figure comes from?”', options: ['Clarification', 'Probing'], answer: 'Clarification', why: 'It asks for an exact detail: the source.' },
              { q: '“What could people do to reduce that number?”', options: ['Clarification', 'Probing'], answer: 'Probing', why: 'It asks the speaker to expand the idea to solutions.' }
            ] }
          ]
        },
        {
          id: 'q4', short: 'Role play', minutes: 10, grouping: 'Pair → Two pairs',
          title: 'Activity 1 Role play',
          goal: 'Write clarification and probing questions for a speaker — and answer them.',
          blocks: [
            { type: 'key', title: 'Real life too', points: ['At CET you will mostly ask and answer questions about a <b>presentation</b>.', 'But these questions are asked all the time in everyday life — and very often in <b>seminars and academic discussions</b> at university.'] },
            { type: 'do', n: 1, who: 'pair', text: 'Perform the dialogue. One person is <b>Alex</b>, one person is <b>Jamie</b>.' },
            { type: 'chat', title: 'Sample speaking exam transcript (human input, AI generated)', right: 'Jamie', lines: [
              ['Alex', 'Hey Jamie, have you thought about our digital carbon footprint?'],
              ['Jamie', 'Yeah, I have. It’s kind of crazy to think that our online activities can impact the environment. What do you think causes it?'],
              ['Alex', 'Well, every time we use the internet, stream videos, or even send emails, we’re using data centres.'],
              ['Jamie', 'Right, and it’s not just the data centres. The devices we use also contribute. Manufacturing and disposing of these devices have their own carbon footprints.'],
              ['Alex', 'Exactly. And with increasing demand for technology, this issue is only going to get worse.'],
              ['Jamie', 'Definitely. But what about the effects? How does this digital carbon footprint impact us?'],
              ['Alex', 'For starters, it contributes to global warming.'],
              ['Jamie', 'Yes, it does. Plus, there’s the issue of electronic waste. Improper disposal of devices can lead to toxic substances leaking into the environment.'],
              ['Alex', 'True. It’s a complex issue. But there are ways we can reduce our digital carbon footprint.'],
              ['Jamie', 'Yeah, small changes can make a big difference. It’s all about being aware and making conscious choices.']
            ] },
            { type: 'do', n: 2, who: 'alone', text: 'Write as many clarification and probing questions as you can for your <b>partner’s character</b>. Begin with: <b>Can…? How…? What…?</b>' },
            { type: 'tabs', title: 'Your question tables', tabs: [
              { label: 'Questions for ALEX', blocks: [
                { type: 'model', title: 'Examples', rows: [['Clarification', 'How do data centres relate to the internet?'], ['Probing', 'What examples can you provide on the effects of global warming? · What are some “ways” we can reduce our carbon footprint? Can you provide more information?']] },
                { type: 'table', id: 'q4-alex', columns: ['Clarification Questions for ALEX', 'Probing Questions for ALEX'], rows: 3 }
              ] },
              { label: 'Questions for JAMIE', blocks: [
                { type: 'model', title: 'Examples', rows: [['Clarification', 'What is meant by “the devices we use”?'], ['Probing', 'In what ways can “toxic substances leaking” affect the environment?']] },
                { type: 'table', id: 'q4-jamie', columns: ['Clarification Questions for JAMIE', 'Probing Questions for JAMIE'], rows: 3 }
              ] }
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Ask your partner’s character your questions. Your partner answers <b>in character</b> — with no time to prepare, like in the exam.' },
            { type: 'language', title: 'Answering a question you didn’t expect', groups: [
              { label: 'Buy a little time', phrases: ['That’s a good question.', 'Let me think about that for a second.', 'So, you’re asking about …'] },
              { label: 'Clarify', phrases: ['What I meant was …', 'By “…”, I mean …', 'To put it another way, …'] },
              { label: 'Go deeper', phrases: ['I think it’s important because …', 'For example, …', 'One reason is that …'] },
              { label: 'Be honest', phrases: ['I’m not 100% sure, but I think …', 'I didn’t find data on that, but …'] }
            ] },
            { type: 'do', n: 4, who: 'group', text: 'Work with another pair. Look at each other’s tables. Give feedback.' },
            { type: 'checklist', id: 'q4-eff', title: 'Is it an effective question?', meter: ['ticked', 'Effective questions!'], items: ['Are the questions open ended?', 'Are the questions detailed enough so there is no confusion on how to answer it?', 'Is the tone of the questions polite (without judgment)?', 'Are the questions asking the students to recall, explain, analyse or evaluate information?', 'Can the clarification question lead into a probing question?', 'Are the questions in the correct columns?'] },
            { type: 'pairs', title: 'Make it effective', items: [
              { from: '[[Is]] the digital footprint bad?', to: '[[In what ways]] does the digital footprint affect the environment?', tag: 'Open, not yes/no' },
              { from: 'Your data is [[wrong]], isn’t it?', to: '[[Could you clarify where]] that figure comes from?', tag: 'Polite, no judgment' },
              { from: 'What about [[that]]?', to: 'What do you mean by [[“conscious choices”]]?', tag: 'Detailed and clear' }
            ] }
          ]
        },
        {
          id: 'q5', short: 'AST questions', minutes: 10, grouping: 'Small groups',
          title: 'Activity 2 AST questions',
          goal: 'Remember the Academic Success Toolkit and turn it into questions.',
          blocks: [
            { type: 'key', title: 'Set 2 in the exam', points: ['You will also be prompted to answer questions on one of these AST topics: Engagement with AI · Group work · Self-regulating and monitoring · Giving and receiving feedback · Research skills.'] },
            { type: 'do', n: 1, who: 'group', text: 'Quickly complete the table: what did you learn in each topic? Use dot points.' },
            { type: 'table', id: 'q5-ast', columns: ['What we learnt (dot points)'], fixed: ['Engagement with AI', 'Group work', 'Self-regulating and monitoring', 'Giving and receiving feedback', 'Research skills'] },
            { type: 'toggle', title: 'Compare with these ideas', hint: 'Open after you finish', blocks: [
              { type: 'model', title: 'Possible dot points', rows: [['Engagement with AI', 'USYD stance on AI · writing effective prompts · (acknowledging AI) · Cogniti · MS Copilot'], ['Group work', 'problem-solving'], ['Self-regulating and monitoring', 'Before: analyse task, set goals and plan the work · During: create an outline, draft, revise and improve · After-ongoing: reflect and evaluate'], ['Giving and receiving feedback', 'appreciating feedback · making judgements · taking action'], ['Research skills', 'CRAAP evaluation · database search']] }
            ] },
            { type: 'do', n: 2, who: 'group', text: 'Partner up with another group. Swap tables. Use <b>their</b> dot points to write your own effective questions.' },
            { type: 'language', title: 'Effective questions for the AST', groups: [
              { label: 'Reflective questions', phrases: ['Can you describe ...?', 'How did you feel ...?', 'How did your group overcome ...?'] },
              { label: 'Process questions', phrases: ['How did you decide ...?', 'What methods ...?'] },
              { label: 'Planning questions', phrases: ['In the future, how would ...?'] }
            ] },
            { type: 'fields', fields: [{ id: 'q5-mine', label: 'Our questions for the other group', rows: 4, placeholder: 'How did your group decide …?\nIn the future, how would you …?' }] },
            { type: 'spinner', id: 'q5-spin', title: 'Speed round: answer an AST question', text: 'Spin. Answer in 30–45 seconds about your OWN research summary preparation. The group asks one follow-up question.', reels: [{ label: 'Question', items: ['How did you decide who does what in preparing this presentation?', 'How did you make sure everyone’s ideas were considered?', 'How did you manage your time preparing for this presentation?', 'What methods did you use to research information for this week’s topic?', 'Did you find it easier to use library resources or online resources? Why?', 'Can you describe which AI tools you used in your research and how you used them?', 'Was there any part of the task where you chose not to use AI? Why?', 'Did your research change your perspective on this week’s topic? If so, how?', 'Did you find any conflicting information during your research, and how did you handle it?', 'How did you use the rubric to guide your preparation for the presentation?'] }] }
          ]
        }
      ]
    },

    /* ───────────────────────── 12A ───────────────────────── */
    {
      id: 'fbtool', number: '03', code: '12A', minutes: 30,
      tone: 'green', art: 'dec10/assets/week2/s-fbtool.svg',
      title: 'AST: Introducing the presentation feedback tool',
      subtitle: 'What to look for — and where to keep it',
      outcome: 'Understand the criteria for giving feedback and the Peer and Teacher Feedback Tool.',
      activities: [
        {
          id: 'f1', short: 'Why feedback', minutes: 5, grouping: 'Class',
          title: 'Giving peer feedback on presentations',
          goal: 'See where peer feedback fits in DEC10.',
          blocks: [
            { type: 'key', title: 'You will give several presentations in DEC10', points: ['The weekly <b>Research Summary Presentations</b> in Weeks 2, 3 and 6.', '<b>Seminar Presentations</b> in your allocated weeks.', 'They are practice for your final <b>Interactive Presentation</b> in Week 7 — and a chance to get feedback from your teachers <b>and</b> your peers.'] },
            { type: 'talk', title: 'Quick chat', prompts: ['Week 1: what makes feedback effective? Say two things you remember.', 'Would you rather get feedback from a teacher or a classmate? Why?'] },
            { type: 'toggle', title: 'Remember: effective feedback should …', blocks: [
              { type: 'cards', numbered: true, items: [
                { text: 'directly address the task assessment criteria (rubric)' }, { text: 'be specific, not general' }, { text: 'be clear' }, { text: 'be useful and actionable' },
                { text: 'be timely' }, { text: 'advise how to improve something (feed forward)' }, { text: 'be sensitive and encouraging' }, { text: 'not be a criticism' }
              ] }
            ] }
          ]
        },
        {
          id: 'f2', short: 'The criteria', minutes: 10, grouping: 'Pairs (jigsaw)',
          title: 'Understand the criteria for feedback',
          goal: 'Know the four criteria and what each one looks at.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Your teacher gives your pair ONE criterion. Tap it and read. Then explain it to another pair in your own words.' },
            { type: 'hotspot', src: 'dec10/assets/week2/d3-criteria.svg', size: 'wide', alt: 'The four criteria: Content Delivery, Fluency and Pronunciation, Language Use, Question and Answer.', hint: 'Tap a number.', spots: [
              { x: 14.7, y: 26.7, label: '1', color: '#2b776e', title: 'Content Delivery', text: '<p>WHAT you say and HOW you organise it: the problem, the causes and effects (with evidence), the solution and its evaluation; a logical structure; smooth turns between speakers; clear, consistent visuals; engaging the audience.</p>' },
              { x: 38.1, y: 26.7, label: '2', color: '#b0512a', title: 'Fluency & Pronunciation', text: '<p>HOW you sound: clear pronunciation, <b>chunking</b>, <b>pausing</b> and <b>stress</b>, and <b>intonation</b> — speaking that is not ‘flat’.</p>' },
              { x: 61.5, y: 26.7, label: '3', color: '#7a4a8c', title: 'Language Use', text: '<p>Accurate grammar and vocabulary — and <b>functional language</b>: language that does a job, e.g. evaluating, explaining cause and effect, explaining a problem.</p>' },
              { x: 84.9, y: 26.7, label: '4', color: '#3a58a0', title: 'Question & Answer', text: '<p>Your answers to the individual questions are <b>spontaneous</b> (not memorised), <b>relevant</b> and <b>clear</b>.</p>' }
            ] },
            { type: 'quiz', id: 'f2-ccq', title: 'Check questions', items: [
              { q: 'How many criteria are there?', options: ['Three', 'Four', 'Six'], answer: 'Four', why: 'Content Delivery · Fluency & Pronunciation · Language Use · Question & Answer.' },
              { q: 'What do we mean by “functional language”?', options: ['Very formal words', 'Language that does a job, e.g. explaining cause and effect', 'Grammar with no mistakes'], answer: 'Language that does a job, e.g. explaining cause and effect', why: 'For example: “This leads to …”, “A major cause is …”, “This solution is effective because …”.' },
              { q: 'Which criterion checks chunking, pausing and stress?', options: ['Content Delivery', 'Fluency & Pronunciation', 'Language Use'], answer: 'Fluency & Pronunciation' },
              { q: '“Answers were given spontaneously” means …', options: ['the answer was memorised', 'the speaker answered naturally, without a script', 'the answer was very long'], answer: 'the speaker answered naturally, without a script' }
            ] },
            { type: 'grid', id: 'f2-me', title: 'How confident are you?', columns: ['Me now'], options: ['I feel confident', 'I need to work extra hard'], rows: ['Content Delivery', 'Fluency & Pronunciation', 'Language Use', 'Question & Answer'] },
            { type: 'talk', prompts: ['Which criterion do you feel confident about? Why?', 'Which criterion do you need to work extra hard on? What will help you?'] }
          ]
        },
        {
          id: 'f3', short: 'The tool', minutes: 15, grouping: 'Alone → Pair',
          title: 'Understand the feedback tool to give peer feedback',
          goal: 'Download, save and understand the Peer and Teacher Feedback Tool.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d3-tool.svg', size: 'wide', alt: 'The Peer and Teacher Feedback Tool with Yes, Mostly and Needs work boxes, going into a folder called Research and Seminar Presentations – Feedback and Action Plans.', caption: 'A feedback tool helps you focus your feedback clearly and directly on the criteria.' },
            { type: 'steps', items: [
              { who: 'alone', text: 'On Canvas, download the <b>Peer and Teacher Feedback Tool</b>. You will use it for the Research Summary Presentations (Weeks 2, 3 and 6) and the Seminar Presentations.' },
              { who: 'alone', text: 'Set up a folder on your computer. Name it: <b>Research & Seminar Presentations – Feedback & Action Plans</b>.' },
              { who: 'alone', text: 'Save the Peer and Teacher Feedback Tool in the folder.' }
            ] },
            { type: 'checklist', id: 'f3-done', title: 'Done?', meter: ['done', 'Ready for today’s presentations!'], items: ['I downloaded the Peer and Teacher Feedback Tool', 'I made the folder with the right name', 'I saved the tool in the folder'] },
            { type: 'tip', text: 'Keep <b>every</b> feedback form and action plan in this folder. The feedback cycle only works if you keep records. For the words to use when you give feedback, open your Student’s book, page 102.' },
            { type: 'do', n: 1, who: 'pair', text: 'The feedback tool is a simplified version of the full Interactive Presentation rubric. Match each statement from the tool to its criterion in the rubric.' },
            { type: 'sort', id: 'f3-map', title: 'Tool → rubric', buckets: [{ label: 'Content Delivery of Presentation', letter: '1' }, { label: 'Fluency & Pronunciation', letter: '2' }, { label: 'Language Use', letter: '3' }, { label: 'Question & Answer', letter: '4' }], items: [
              { text: 'The problem was clearly stated.', answer: 0 },
              { text: 'Evidence for the cause/s was given.', answer: 0 },
              { text: 'Solution was evaluated.', answer: 0 },
              { text: 'We could follow the presentation easily: the ideas were clearly and logically connected.', answer: 0 },
              { text: 'Each group member’s turn flowed naturally and logically from the previous member.', answer: 0 },
              { text: 'Each group member’s contribution was equal in time and content.', answer: 0 },
              { text: 'Visuals were consistent for each group member and across all group members.', answer: 0 },
              { text: 'Body language and eye contact engaged the audience.', answer: 0 },
              { text: 'Visuals were clear and helped the audience understand the main ideas.', answer: 0 },
              { text: 'The presenters engaged the audience.', answer: 0 },
              { text: 'Pronunciation was clear and could be easily understood.', answer: 1 },
              { text: 'We could hear the presenters using chunking, pausing and stress in their language.', answer: 1 },
              { text: 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).', answer: 1 },
              { text: 'The grammar used was largely accurate and we could understand the meaning.', answer: 2 },
              { text: 'The vocabulary used was largely accurate and we could understand the meaning.', answer: 2 },
              { text: 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)', answer: 2 },
              { text: 'Answers were given spontaneously.', answer: 3 },
              { text: 'Answers were relevant.', answer: 3 },
              { text: 'Answers were clear.', answer: 3 }
            ] }
          ]
        }
      ]
    },

    /* ───────────────────────── 13A ───────────────────────── */
    {
      id: 'rspres', number: '04', code: '13A', minutes: 90,
      tone: 'plum', art: 'dec10/assets/week2/s-rspres.svg',
      title: 'Group research summary presentation groups 1 & 2',
      subtitle: 'Present, answer, give feedback',
      outcome: 'Deliver a structured presentation, answer audience questions spontaneously and make judgements about your own and your peers’ presentations.',
      activities: [
        {
          id: 'g1', short: 'Where are we?', minutes: 5, grouping: 'Class',
          title: 'Group Research Summary Presentations',
          goal: 'Know today’s plan.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d3-rs-timeline.svg', size: 'wide', alt: 'Day 1 research alone; Day 2 share and prepare as a group; Day 3 (today) presentations 1 and 2; Day 4 presentations 3, 4 and 5.', caption: 'Today: Presentations #1 and #2.' },
            { type: 'key', title: 'Today', points: ['<b>Topic:</b> Exploring Our Digital Carbon Footprint · <b>Rhetorical Functions:</b> Cause and Effect', 'Each group presents for <b>8–10 minutes</b> + <b>5 minutes</b> for individual questions.', 'Questions today: <b>probing and clarification</b> only. AST questions come in Week 3.', 'No mark — just peer and teacher feedback with the <b>Peer and Teacher Presentation Feedback Tool</b>.'] },
            { type: 'figure', src: 'dec10/assets/week2/d3-procedure.svg', size: 'wide', alt: 'Four steps per group: present (8–10 min), questions (10 min), prepare feedback (5–7 min), give feedback (5–7 min).', caption: 'Summary of procedure per group presentation — about 30 minutes.' },
            { type: 'order', id: 'g1-order', title: 'Put the four steps in order', items: ['Group presents · other groups listen and complete the peer feedback form', 'Group reflects and answers individual questions · audience asks questions', 'Teacher gives feedback to the presenting group · groups prepare their feedback and one action point', 'Groups share their feedback with their allocated presenter and send the forms'], ends: ['First', 'Last'] }
          ]
        },
        {
          id: 'g2', short: 'Get ready', minutes: 15, grouping: 'Presentation groups',
          title: 'Last-minute practice',
          goal: 'Be ready to present — and ready to listen.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: 'Sit with your presentation group. Run through your talk once, quickly — especially the <b>handovers</b>.' },
              { who: 'alone', text: 'Open the <b>Peer and Teacher Presentation Feedback Tool</b> (below, or your saved copy).' },
              { who: 'alone', text: 'Open the <b>Follow-up questions</b> document so you can ask good questions.' }
            ] },
            { type: 'language', title: 'Presenting cause and effect — and handing over', groups: [
              { label: 'Cause → effect (more: Student’s book p. 112)', phrases: ['… leads to / results in …', 'As a result, …', 'This is mainly due to …', 'One major cause of … is …', 'The more …, the more …'] },
              { label: 'Evidence', phrases: ['According to …, …', 'A 2024 report by … found that …', 'This figure shows that …'] },
              { label: 'Handover', phrases: ['Now I’ll hand over to …, who will explain …', 'Thanks, …. As … said, … . Building on that, …', 'That was the cause. Now … will look at the effects.'] }
            ] },
            { type: 'checklist', id: 'g2-ready', title: 'Before you start', meter: ['ready', 'Let’s go!'], items: ['I know my part and my handover sentence', 'My slides use key words and references', 'I can say my main source aloud (name + year)', 'The feedback tool is open', 'I know which presenter I will give feedback to'] }
          ]
        },
        {
          id: 'g3', short: 'Group 1', minutes: 30, grouping: 'Groups',
          title: 'Presentation 1 · Group 1',
          goal: 'Listen, rate, ask — and give useful feedback to one presenter.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: '<b>Step 1 (8–10 min):</b> Group 1 presents. Listen AND complete the feedback tool for <b>your allocated presenter</b>. Start thinking of a clarification or probing question.' },
              { who: 'alone', text: '<b>Step 2 (10 min):</b> write ONE probing or clarification question. Your teacher chooses 3–5 students to ask.' },
              { who: 'group', text: '<b>Step 3 (5–7 min):</b> share your feedback in your group. Agree on <b>at least one action point</b>.' },
              { who: 'group', text: '<b>Step 4 (5–7 min):</b> your presenter sits with your group. Give the feedback. Then <b>send</b> the form to them.' }
            ] },
            { type: 'fields', fields: [{ id: 'g3-q', label: 'My question for Group 1', rows: 2, placeholder: 'Clarification: What did you mean by …? / Probing: Why did you choose to focus on …?' }] },
            { type: 'form', id: 'g3-tool', title: 'Peer and Teacher Feedback Tool · Group 1', intro: 'Choose Yes, Mostly or Needs work. Skip a line if it does not apply (N/A). Add a short comment where you can.', observe: 'Which presenter are you giving feedback to?', sections: [
              { label: 'CONTENT DELIVERY', items: ['The problem was clearly stated.', 'The cause/s were clearly stated.', 'Evidence for the cause/s was given.', 'The effect/s were clearly stated.', 'Evidence for the effect/s was given.', 'A solution was clearly stated.', 'Solution was evaluated.'] },
              { label: 'Structure & Coherence', items: ['We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.'] },
              { label: 'Engagement', items: ['Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
              { label: 'FLUENCY and PRONUNCIATION', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
              { label: 'LANGUAGE USE', items: ['The grammar used was largely accurate and we could understand the meaning.', 'The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)'] },
              { label: 'QUESTION & ANSWER', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
            ], fields: [{ id: 'g3-tool-action', label: 'Action point (at least one)', rows: 2, placeholder: 'Next time, try … so that …' }], send: true, sendLabel: 'Send to the presenter', sendHint: 'Send your completed form to the presenter you gave feedback to, so they can save it in their Feedback & Action Plans folder.' },
            { type: 'language', title: 'Language for giving peer feedback on presentations · Student’s book, p. 102', groups: [
              { label: 'Suggest', phrases: ['To make it clearer that …, you could …', 'To strengthen …, it might help …', 'Perhaps consider … -ing … rather than …', 'For better …, I suggest you …', 'You could possibly …', 'It might be beneficial to …'] },
              { label: 'Remind', phrases: ['Don’t forget to …', 'Remember to ...', 'Be mindful of ...', 'Try ... to ..., so ...'] },
              { label: 'Praise + build', phrases: ['… was good. To make it even better, you might…', 'I recommend …-ing …, so ...', 'It would help if …', 'It would help to ...'] }
            ] },
            { type: 'tip', text: 'Open your Student’s book, page 102, for the full list of phrases for giving peer feedback.' }
          ]
        },
        {
          id: 'g4', short: 'Group 2', minutes: 30, grouping: 'Groups',
          title: 'Presentation 2 · Group 2',
          goal: 'Repeat the same process for Group 2.',
          blocks: [
            { type: 'steps', items: [
              { who: 'group', text: '<b>Step 1:</b> Group 2 presents (8–10 min). Complete the feedback tool for your allocated presenter.' },
              { who: 'alone', text: '<b>Step 2:</b> write ONE probing or clarification question (10 min with answers).' },
              { who: 'group', text: '<b>Step 3:</b> prepare your feedback and at least one action point (5–7 min).' },
              { who: 'group', text: '<b>Step 4:</b> give the feedback to your presenter and send the form (5–7 min).' }
            ] },
            { type: 'fields', fields: [{ id: 'g4-q', label: 'My question for Group 2', rows: 2, placeholder: 'Could you clarify …? / How did you come to that conclusion?' }] },
            { type: 'form', id: 'g4-tool', title: 'Peer and Teacher Feedback Tool · Group 2', intro: 'Choose Yes, Mostly or Needs work. Skip a line if it does not apply (N/A). Add a short comment where you can.', observe: 'Which presenter are you giving feedback to?', sections: [
              { label: 'CONTENT DELIVERY', items: ['The problem was clearly stated.', 'The cause/s were clearly stated.', 'Evidence for the cause/s was given.', 'The effect/s were clearly stated.', 'Evidence for the effect/s was given.', 'A solution was clearly stated.', 'Solution was evaluated.'] },
              { label: 'Structure & Coherence', items: ['We could follow the presentation easily: the ideas were clearly and logically connected.', 'Each group member’s turn flowed naturally and logically from the previous member.', 'Each group member’s contribution was equal in time and content.', 'Visuals were consistent for each group member and across all group members.'] },
              { label: 'Engagement', items: ['Body language and eye contact engaged the audience.', 'Visuals were clear and helped the audience understand the main ideas.', 'The presenters engaged the audience.'] },
              { label: 'FLUENCY and PRONUNCIATION', items: ['Pronunciation was clear and could be easily understood.', 'We could hear the presenters using chunking, pausing and stress in their language.', 'We could hear the presenters using intonation in their speaking (speaking was not ‘flat’).'] },
              { label: 'LANGUAGE USE', items: ['The grammar used was largely accurate and we could understand the meaning.', 'The vocabulary used was largely accurate and we could understand the meaning.', 'We could hear functional language (EG evaluating; explaining cause /effect; explaining problem)'] },
              { label: 'QUESTION & ANSWER', items: ['Answers were given spontaneously.', 'Answers were relevant.', 'Answers were clear.'] }
            ], fields: [{ id: 'g4-tool-action', label: 'Action point (at least one)', rows: 2, placeholder: 'Next time, try … so that …' }], send: true, sendLabel: 'Send to the presenter', sendHint: 'Send your completed form to the presenter you gave feedback to, so they can save it in their Feedback & Action Plans folder.' },
            { type: 'tip', text: '<b>Important:</b> by the end of the lesson, all feedback forms must be sent to the presenters — even if you gave the feedback aloud in class.' }
          ]
        },
        {
          id: 'g5', short: 'Reflect', minutes: 10, grouping: 'Alone → Group',
          title: 'Reflection',
          goal: 'Learn from today — as a presenter or as the audience.',
          blocks: [
            { type: 'tabs', title: 'Choose your tab', tabs: [
              { label: 'I presented today', blocks: [
                { type: 'fields', fields: [
                  { id: 'g5-well', label: 'What did you do well (individually and as a group)?', rows: 3 },
                  { id: 'g5-better', label: 'What do you want to do better in your next presentation (individually and as a group)?', rows: 3 }
                ] },
                { type: 'checklist', id: 'g5-saved', title: 'Save your feedback', items: ['I saved the feedback tool forms from my teacher and peers in my Research & Seminar Presentations – Feedback & Action Plans folder.'] }
              ] },
              { label: 'I was in the audience', blocks: [
                { type: 'fields', fields: [
                  { id: 'g5-learn', label: 'What did you learn from watching today’s presentations?', rows: 3 },
                  { id: 'g5-use', label: 'What will you do in your presentation from what you learned today?', rows: 3 }
                ] }
              ] }
            ] },
            { type: 'talk', title: 'Share in your group', prompts: ['One thing I will copy from today’s presenters is …', 'One thing I will avoid is …'] },
            { type: 'key', title: 'After class', points: ['Continue preparing for the Group research summary presentations timetabled for this week.', 'Remember also to continue your research for your group’s seminar topic and final Interactive Presentation Assessment.'] }
          ]
        }
      ]
    },

    /* ───────────────────────── 14A ───────────────────────── */
    {
      id: 'selfreg', number: '05', code: '14A', minutes: 60,
      tone: 'amber', art: 'dec10/assets/week2/s-selfreg.svg',
      title: 'AST: Self-regulation and monitoring Homework',
      subtitle: 'Analyse the task, set SMART goals, find a source',
      outcome: 'Analyse task requirements, set goals and plan the work.',
      activities: [
        {
          id: 'h1', short: 'The skills', minutes: 8, grouping: 'Homework',
          title: 'Self-regulation and monitoring skills',
          goal: 'Know what self-regulation and monitoring means — and why it matters.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d3-selfreg.svg', size: 'wide', alt: 'Before the task: analyse, set goals, expect obstacles and plan. During: manage time and monitor effort. After: compare results with goals and keep a log of mistakes.', caption: 'Before · during · after. Tonight is about BEFORE.' },
            { type: 'key', title: 'Why now?', points: ['In the next 7 weeks your group prepares and presents a <b>seminar</b>. Self-regulation helps you deliver your Opening Remarks and your Seminar.', 'At university, it helps you <b>manage your time</b>, <b>meet deadlines</b> and <b>check your own progress</b> — and it reduces stress.'] },
            { type: 'cards', title: 'Self-regulation and monitoring skills include …', items: [
              { text: 'Setting clear group goals' }, { text: 'Managing time well' }, { text: 'Identifying challenges' },
              { text: 'Monitoring you and your group members’ progress effectively' }, { text: 'Adjusting your strategies as needed' }, { text: 'Reflecting on your work' }
            ] },
            { type: 'scale', id: 'h1-me', title: 'Be honest', statement: 'I usually start an assignment …', ends: ['The night before', 'As soon as I get it'], mid: 'Somewhere in the middle' },
            { type: 'tip', text: 'Take notes of important ideas as you work. You will use them in tomorrow’s homework follow-up lesson.' }
          ]
        },
        {
          id: 'h2', short: '6 steps', minutes: 5, grouping: 'Homework',
          title: 'Developing the skills',
          goal: 'Know the six steps. Tonight: Steps 1–3.',
          blocks: [
            { type: 'flip', title: 'The six steps', hint: 'Turn each card.', items: [
              { front: '1 · Analyse the Task Requirements', back: 'Read the instructions carefully to identify key details (e.g., key words, format, word count/time limit, deadlines).' },
              { front: '2 · Set Goals and Plan the Work', back: 'Break the task into manageable steps (e.g., research, outline, drafting) and set SMART goals for each. Assign deadlines for each step to stay on track.' },
              { front: '3 · Research and Gather Information', back: 'Use reliable sources (e.g., academic journals, databases) to collect relevant information for your task. Keep a record of your sources for accurate citations.' },
              { front: '4 · Create an Outline and Draft', back: 'Organise your ideas into a clear structure and begin writing your draft based on the outline. Focus on getting your ideas down without worrying about perfection at this stage.' },
              { front: '5 · Revise and Improve', back: 'Review your draft for clarity, coherence, and structure. Improve content, language, and argumentation. Seek feedback from peers or use editing tools to refine your work.' },
              { front: '6 · Reflect and Evaluate', back: 'Compare your finished work with your original goals and task requirements. Reflect on performance and recurrent mistakes. Keep a log of mistakes and strategies to avoid them in the future.' }
            ] },
            { type: 'order', id: 'h2-order', title: 'Activity · Put these steps in order', items: ['Analyse the Task Requirements', 'Set Goals and Plan the Work', 'Research and Gather Information', 'Create an Outline and Draft', 'Revise and Improve', 'Reflect and Evaluate'], ends: ['First', 'Last'] }
          ]
        },
        {
          id: 'h3', short: 'Step 1', minutes: 10, grouping: 'Homework',
          title: 'Step 1. Analyse the Task Requirements',
          goal: 'Find the content words and the limiting words in a question.',
          blocks: [
            { type: 'model', title: 'Seminar task', text: '<b>Groups:</b> There will be 4 groups of 4 or 5 members (depending on class numbers). Your teacher will allocate groups and randomly assign a week and a topic (a sustainability issue) to each group. Each group will be assigned a week starting in Week 2. The final seminar will be in Week 6.<br><br>Each group will decide which country they would like to focus on to research their allocated sustainability issue. Your focus on one country will enable you to contextualise the sustainability issue.' },
            { type: 'model', title: 'Imagine this is the question for your group', text: '<i>What are the main challenges and benefits of making businesses more sustainable in <b>[a specific country]</b>, and how can companies and governments work together to improve the environment and society?</i>' },
            { type: 'cards', items: [
              { label: 'Content words', text: 'Tell you what the question is <b>about</b>. They set the topic for your research and reading.' },
              { label: 'Limiting words', text: '<b>Narrow down</b> the focus. For example, they may limit the question to a specific country.' },
              { label: 'Task', text: 'What do you need to <b>do</b> to answer this question?' }
            ] },
            { type: 'spot', id: 'h3-spot', label: 'Content word spotter', title: 'Tap the content words', hint: 'Tap the words that tell you the TOPIC. Careful: question words and small words are not content words.', paras: ['[[What]] are the main [[*challenges]] and [[*benefits]] of making [[*businesses]] more [[*sustainable]] [[in]] [a specific country], and [[how]] can [[*companies]] and [[*governments]] work together to improve the [[*environment]] and [[*society]]?'] },
            { type: 'quiz', id: 'h3-quiz', title: 'Activity', items: [
              { q: 'How many questions do you need to answer?', options: ['1', '2', '3', '4'], answer: '2', why: '(1) What are the main challenges and benefits …? and (2) how can companies and governments work together …?' },
              { q: 'Which of the following is a content word?', options: ['Businesses', 'In', 'How', 'Specific'], answer: 'Businesses', why: '“Businesses” tells you the topic. “In” and “how” are small words; “specific” is part of the limiting phrase.' },
              { q: 'Which of the following is the limiting word/phrase?', options: ['Companies and governments', 'Improve the environment and society', 'Making businesses more sustainable', 'In [a specific country]'], answer: 'In [a specific country]', why: 'It narrows the question to ONE country.' },
              { q: 'What kind of response does the question ask for?', options: ['A definition of sustainability', 'timeline of sustainable development', 'A discussion of both positive and negative aspects, plus possible solutions', 'A summary of environmental policies'], answer: 'A discussion of both positive and negative aspects, plus possible solutions', why: 'Challenges (negative) + benefits (positive) + how to work together (solutions).' },
              { q: 'When is the due date of this task?', options: ['Week 2', 'Week 6', 'Between weeks 2-4'], answer: 'Between weeks 2-4', why: 'Groups are assigned a week starting in Week 2 — check your own group’s week.' }
            ] },
            { type: 'language', title: 'Go further: talking about a task', groups: [{ label: 'With your group', phrases: ['The question asks us to …', 'The key words here are …', 'It’s limited to …', 'So we need to discuss both … and …', 'Our deadline is …'] }] }
          ]
        },
        {
          id: 'h4', short: 'Subtasks', minutes: 10, grouping: 'Homework',
          title: 'Step 2. Set Goals and Plan the Work · Task 1 Make subtasks',
          goal: 'Break a big task into small steps with times.',
          blocks: [
            { type: 'key', title: 'Think', points: ['How many subtasks (steps) do you think are necessary to prepare for this presentation?', 'Can you set a deadline or time limit for each subtask?'] },
            { type: 'table', id: 'h4-sub', title: 'My subtasks', columns: ['Subtasks', 'Time'], rows: 5 },
            { type: 'model', title: 'The first one, as an example', rows: [['Identify the specific industry or region to focus on for this presentation.', '10-15 mins with group member']] },
            { type: 'toggle', title: 'A useful tool: Goblin.tools', hint: 'Not sure how to break down the task?', blocks: [
              { type: 'figure', src: 'dec10/assets/week2/d3-goblin.svg', size: 'wide', alt: 'goblin.tools Magic ToDo: type the task, choose the chillies, click the magic wand to get subtasks with times.' },
              { type: 'steps', items: [
                { who: 'alone', text: 'Open <a href="https://goblin.tools/" target="_blank" rel="noopener">goblin.tools</a> and click <b>Magic ToDo</b>.' },
                { who: 'alone', text: 'Type in the task and choose the number of <b>chillies</b> (more chillies = more subtasks). For DEC assessments, 1–2 chillies should be enough.' },
                { who: 'alone', text: 'Press Enter, then click the <b>magic wand</b>.' }
              ] },
              { type: 'tip', text: 'You don’t have to use all the items — choose only the relevant ones. The tool can also estimate times, but they may not be realistic: adjust them to your deadlines.' }
            ] },
            { type: 'toggle', title: 'Compare: a sample list of subtasks', blocks: [
              { type: 'model', title: 'Sub tasks · Time', rows: [
                ['Identify the specific industry or region for the presentation.', '10-15 mins with group member'],
                ['Research the main challenges of sustainability in that context.', '1 hour'],
                ['Research the benefits of sustainability for businesses in that context.', '1 hour'],
                ['Explore examples of collaboration between companies and governments on sustainability.', '1 hour'],
                ['Organize the findings into a clear presentation structure.', '1 hour'],
                ['Create visuals and supporting materials to enhance the presentation.', '1 hour'],
                ['Practice delivering the presentation.', '1 hour']
              ] }
            ] }
          ]
        },
        {
          id: 'h5', short: 'SMART goals', minutes: 15, grouping: 'Homework',
          title: 'Task 2 Setting SMART goals',
          goal: 'Write SMART goals for two subtasks.',
          blocks: [
            { type: 'figure', src: 'dec10/assets/week2/d3-smart.svg', size: 'wide', alt: 'SMART: Specific, Measurable, Achievable, Relevant, Time-bound.', caption: 'SMART goals are easier to achieve.' },
            { type: 'match', id: 'h5-match', title: 'Match each part of this SMART goal to its letter', hint: 'Subtask: ‘Research the main challenges businesses face in becoming more sustainable in that industry or region’', left: ['<b>Specific</b>', '<b>Measurable</b>', '<b>Achievable</b>', '<b>Relevant</b>', '<b>Timebound</b>'], right: [
              'I will research the main sustainability challenges that businesses in the fashion industry in China face to include relevant data and examples in my presentation.',
              'I will gather at least 3 academic articles, 2 industry reports, and 1 case study to include well-supported information and examples for my presentation.',
              'I will dedicate 30 minutes to 1 hour each day for 3 days to gather and summarize the key challenges, ensuring I have enough research for my presentation without overwhelming myself.',
              'This research is critical for providing credible examples and making my presentation on sustainability challenges engaging and informative.',
              'I will complete my research and draft the main points for my presentation slides by …, so that I have time to revise and practice before the presentation.'
            ] },
            { type: 'pairs', title: 'Go further: from vague to SMART', items: [
              { from: 'I will [[do some research]].', to: 'I will [[find 3 academic articles on e-waste in Vietnam]].', tag: 'Specific + Measurable' },
              { from: 'I will [[practise a lot]].', to: 'I will [[rehearse my part twice with a timer by Thursday]].', tag: 'Measurable + Time-bound' },
              { from: 'I will [[read everything about sustainability]].', to: 'I will [[read the 2 most relevant reports, 30 minutes a day]].', tag: 'Achievable + Relevant' }
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Choose two subtasks from your list. Write a SMART goal for each.' },
            { type: 'fields', title: 'Subtask 1', fields: [
              { id: 'h5-s1', label: 'Sub task', rows: 1 }, { id: 'h5-s1-s', label: 'Specific', rows: 2, placeholder: 'I will …' }, { id: 'h5-s1-m', label: 'Measurable', rows: 2, placeholder: 'at least …' },
              { id: 'h5-s1-a', label: 'Achievable', rows: 2, placeholder: 'I will spend … each day …' }, { id: 'h5-s1-r', label: 'Relevant', rows: 2, placeholder: 'This is important because …' }, { id: 'h5-s1-t', label: 'Timebound', rows: 2, placeholder: 'by … so that …' }
            ] },
            { type: 'fields', title: 'Subtask 2', fields: [
              { id: 'h5-s2', label: 'Sub task', rows: 1 }, { id: 'h5-s2-s', label: 'Specific', rows: 2, placeholder: 'I will …' }, { id: 'h5-s2-m', label: 'Measurable', rows: 2, placeholder: 'at least …' },
              { id: 'h5-s2-a', label: 'Achievable', rows: 2, placeholder: 'I will spend … each day …' }, { id: 'h5-s2-r', label: 'Relevant', rows: 2, placeholder: 'This is important because …' }, { id: 'h5-s2-t', label: 'Timebound', rows: 2, placeholder: 'by … so that …' }
            ] },
            { type: 'choose', id: 'h5-hard', title: 'Questionnaire · How challenging was it to make the SMART goals?', options: ['1 very easy', '2 somewhat easy', '3 somewhat difficult', '4 difficult', '5 very difficult'] }
          ]
        },
        {
          id: 'h6', short: 'Step 3', minutes: 10, grouping: 'Homework',
          title: 'Step 3. Research and Gather Information',
          goal: 'Find one source and test it with CRAAP.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Find <b>one source</b> related to the question using the <a href="https://www.library.sydney.edu.au/" target="_blank" rel="noopener">USYD Library</a>.' },
              { who: 'alone', text: 'Evaluate the source using the <b>CRAAP test</b>.' }
            ] },
            { type: 'fields', fields: [{ id: 'h6-src', label: 'My source (author, year, title)', rows: 2, placeholder: 'Author (Year). Title. …' }] },
            { type: 'table', id: 'h6-craap', title: 'CRAAP test', columns: ['My notes', 'OK?'], fixed: ['Currency — is it recent?', 'Relevance — does it answer our question?', 'Authority — who wrote it? Are they experts?', 'Accuracy — is there evidence? Can I check it?', 'Purpose — why was it written? To inform, sell, persuade?'] }
          ]
        },
        {
          id: 'h7', short: 'Reflect', minutes: 5, grouping: 'Homework',
          title: 'Reflection questions',
          goal: 'Think about how you planned — and bring your notes tomorrow.',
          blocks: [
            { type: 'fields', fields: [
              { id: 'h7-1', label: 'How effective were your strategies for breaking down the task and setting goals?', rows: 2 },
              { id: 'h7-2', label: 'What adjustments could you make to improve your approach in future tasks?', rows: 2 },
              { id: 'h7-3', label: 'How helpful was Goblin.tools in breaking down your task?', rows: 2 }
            ] },
            { type: 'sticky', title: 'Tomorrow', text: '<p>Bring your notes to class tomorrow for the <b>homework follow-up</b> lesson.</p><p>Be ready to say your SMART goal aloud in 30 seconds.</p>' }
          ]
        }
      ]
    }
  ],

  extras: [],
  glossary: [
    ['clarification question', 'a question that asks what exactly a speaker means or claims', 'What do you mean by “people”?'],
    ['probing question', 'a question that asks a speaker to explain more or go deeper', 'Why do you think that figure is important for your point?'],
    ['synthesise', 'combine information from different sources into one clear idea', 'We synthesised two sources on one slide.'],
    ['spontaneous', 'said naturally, without a script or preparation', 'Her answers were spontaneous and clear.'],
    ['criteria', 'the standards used to judge a piece of work (singular: criterion)', 'The feedback tool has four criteria.'],
    ['feedback tool', 'a form that helps you give feedback on the criteria', 'Complete the feedback tool during the talk.'],
    ['action point', 'one clear thing to do next time', 'Our action point: practise the handovers.'],
    ['chunking', 'saying words in short meaning groups, with small pauses', 'Every year, / global production of digital tech / emits …'],
    ['consonant cluster', 'two or more consonant sounds together without a vowel', 'Griffiths has the clusters /gr/ and /θs/.'],
    ['self-regulation', 'managing your own learning: planning, checking progress and changing your strategy', 'Self-regulation helps you meet deadlines.'],
    ['SMART goal', 'a goal that is specific, measurable, achievable, relevant and time-bound', 'I will read 3 articles by Friday.'],
    ['limiting words', 'words in a question that narrow the focus', '“in [a specific country]” is a limiting phrase.']
  ]
};
