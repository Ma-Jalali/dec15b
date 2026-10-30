/* DEC10 · Language Lab · Grammar 3 — Linking ideas: coordinating conjunctions (FANBOYS, parallel structure) and conjunctive adverbs.
   Source: the teacher's "Interactive Grammar" document (Connectors · Group 1 and Group 2), set in the Week 3 topic (green jobs).
   Stages: Warm-up (pre) → Notice and learn (while) → Practise (controlled) → Use it (freer). */
window.DEC15_LESSON = {
  id: 'd10lab-link', week: null, day: null,
  title: 'Linking ideas',
  duration: 'About 50 minutes',
  questionKind: 'Can-do', questionLabel: 'By the end of this lesson you can',
  question: 'join ideas with and, but, so … and with However, Therefore, In addition … — with the right grammar and the right punctuation.',
  journey: 'Two families of linkers do two different jobs. One joins words or sentences inside one sentence; the other links two separate sentences. Learn both, and stop the most common punctuation error.',
  goalShort: 'clear, well-linked paragraphs',
  image: 'dec10/assets/lab/hero-grammar.svg',
  imageAlt: 'Sentence tiles and floating chips: However, and, which, a semicolon.',
  finish: { title: 'Next lesson', text: 'Relative clauses' },
  sections: [
    {
      id: 'warm', number: '1', minutes: 8, tone: 'amber', art: 'dec10/assets/lab/s-warm.svg',
      title: 'Warm-up', subtitle: 'Choppy or smooth?',
      outcome: 'You see how linkers make a paragraph easier to follow.',
      activities: [
        {
          id: 'lk-w1', short: 'Compare', minutes: 8, grouping: 'Alone → Pair',
          title: 'Two paragraphs about green jobs',
          goal: 'Decide which paragraph is easier to read, and find what makes it easier.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Read paragraph A, then paragraph B. Which one is easier to follow?' },
            { type: 'cards', items: [
              { label: 'A', text: 'Many countries want more green jobs. Workers need new skills. Some governments pay for training. Workers can move from coal to solar. Training takes time. New jobs are often in other regions. Some workers must move house.' },
              { label: 'B', text: 'Many countries want more green jobs, but workers need new skills. Some governments pay for training, so workers can move from coal to solar. However, training takes time. In addition, new jobs are often in other regions. As a result, some workers must move house.' }
            ] },
            { type: 'do', n: 2, who: 'alone', text: 'Tap the linking words in paragraph B.' },
            { type: 'spot', id: 'lk-w1-spot', title: 'Find the linkers in B', label: 'linker', paras: [
              'Many countries want more [[green jobs]], [[*but]] workers need new skills. Some [[governments]] pay for training, [[*so]] workers can move from coal to solar. [[*However,]] training takes [[time]]. [[*In addition,]] new jobs are often in other regions. [[*As a result,]] some workers must [[move house]].'
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Look at the punctuation around <b>but</b> and <b>so</b>, then around <b>However</b> and <b>As a result</b>. What is different?' }
          ],
          answers: { items: [['What is different?', '<b>but</b> and <b>so</b> are inside one sentence, with a comma before them. <b>However,</b> <b>In addition,</b> and <b>As a result,</b> start a new sentence and have a comma after them.']] }
        }
      ]
    },
    {
      id: 'learn', number: '2', minutes: 17, tone: 'blue', art: 'dec10/assets/lab/s-learn.svg',
      title: 'Notice and learn', subtitle: 'Two families of linkers',
      outcome: 'You know how FANBOYS and conjunctive adverbs work, and how to punctuate them.',
      activities: [
        {
          id: 'lk-l1', short: 'FANBOYS', minutes: 8, grouping: 'Alone',
          title: 'Family 1: For, And, Nor, But, Or, Yet, So',
          goal: 'Join two things of the same kind.',
          blocks: [
            { type: 'key', title: 'The rule: same + same', points: [
              '<b>and, or, but, yet</b> join two things of the <b>same kind</b>: noun + noun, adjective + adjective, -ing + -ing, to + verb + to + verb, sentence + sentence.',
              'This is called <b>parallel structure</b>. If one side is <i>-ing</i>, the other side is <i>-ing</i> too.',
              '<b>so</b> and <b>for</b> join only two <b>sentences</b>. Put a comma before them. (<b>for</b> = because; it is formal.)'
            ] },
            { type: 'model', title: 'Same + same', rows: [
              ['noun + noun', 'Green jobs need <b>skills</b> and <b>money</b>.'],
              ['adjective + adjective', 'The plan is <b>small</b> yet <b>effective</b>.'],
              ['adverb + adverb', 'He drives <b>fast</b> but <b>carefully</b>.'],
              ['verb + verb', 'Sara <b>studies</b> at university and (she) <b>works</b> in a library.'],
              ['-ing + -ing', 'Maria is <b>watching</b> TV and (she is) <b>eating</b> chips.'],
              ['past participle', 'I have <b>graduated</b> and (I have) <b>done</b> some research.'],
              ['preposition phrase', 'Sport is good <b>for children</b> and (it is good) <b>for adults</b>.'],
              ['to + verb', 'I want <b>to go</b> to the US and (I want) <b>to do</b> my PhD.'],
              ['sentence + sentence', 'The air conditioner is working, but it is still hot in here.'],
              ['so · for', 'She studied hard, <b>so</b> she passed the test. · I am hungry, <b>for</b> I have not had breakfast.']
            ] },
            { type: 'pairs', items: [
              { from: 'I enjoy listening to music and [[hang]] out with my friends.', to: 'I enjoy listening to music and [[hanging]] out with my friends.', tag: '-ing + -ing' },
              { from: 'He is a really kind man and [[intelligent man]].', to: 'He is a really [[kind and intelligent]] man.', tag: 'adjective + adjective' }
            ] }
          ]
        },
        {
          id: 'lk-l2', short: 'Connectors', minutes: 9, grouping: 'Alone → Pair',
          title: 'Family 2: However, Therefore, In addition …',
          goal: 'Link two sentences, and show the meaning of the link.',
          blocks: [
            { type: 'key', title: 'The rule: two sentences', points: [
              'Conjunctive adverbs link <b>two separate sentences</b>. They show the meaning: addition, contrast, result …',
              'Punctuation: <b>Sentence. However, sentence.</b> or <b>Sentence; however, sentence.</b>',
              'Never: <s>Sentence, however sentence.</s> A comma is not strong enough to join two sentences.'
            ] },
            { type: 'language', title: 'Connectors by meaning', groups: [
              { label: 'Addition', phrases: ['In addition (to …),', 'Moreover,', 'Furthermore,', 'What is more,', 'Besides,', 'In fact, / Indeed,'] },
              { label: 'Contrast', phrases: ['However,', 'Nevertheless,', 'Nonetheless,', 'In contrast, / By contrast,', 'On the one hand, … On the other hand,', 'On the contrary,'] },
              { label: 'Result', phrases: ['As a result,', 'As a consequence,', 'Consequently,', 'Therefore,', 'Thus, / Hence, (formal)'] },
              { label: 'Sequence', phrases: ['First of all, / Firstly,', 'Secondly, / Thirdly,', 'Finally, / Lastly,', 'Last but not least,'] },
              { label: 'Example', phrases: ['For example,', 'For instance,'] },
              { label: 'Restating', phrases: ['In other words,', 'To put it another way,'] }
            ] },
            { type: 'do', n: 1, who: 'alone', text: 'Check yourself. What does each connector mean?' },
            { type: 'sort', id: 'lk-l2-sort', title: 'Addition, contrast or result?', buckets: [{ label: 'Addition', text: '+ more', letter: '+' }, { label: 'Contrast', text: 'but', letter: '↔' }, { label: 'Result', text: 'so', letter: '→' }], items: [
              { text: 'Moreover,', answer: 0 }, { text: 'Furthermore,', answer: 0 }, { text: 'What is more,', answer: 0 },
              { text: 'Nevertheless,', answer: 1 }, { text: 'In contrast,', answer: 1 }, { text: 'Nonetheless,', answer: 1 },
              { text: 'Consequently,', answer: 2 }, { text: 'Therefore,', answer: 2 }, { text: 'Hence,', answer: 2 }
            ] },
            { type: 'sticky', color: 'pink', title: 'On the contrary ≠ On the other hand', text: '<b>On the other hand</b> gives a different side of the same topic. <b>On the contrary</b> says the opposite is true: “The project was not a failure. <i>On the contrary</i>, it was a great success.”' }
          ]
        }
      ]
    },
    {
      id: 'practise', number: '3', minutes: 14, tone: 'teal', art: 'dec10/assets/lab/s-practise.svg',
      title: 'Practise', subtitle: 'Controlled practice with instant feedback',
      outcome: 'You fix parallel structure, choose connectors by meaning and punctuate them correctly.',
      activities: [
        {
          id: 'lk-p1', short: 'Same + same', minutes: 4, grouping: 'Alone',
          title: 'Fix the parallel structure',
          goal: 'Each sentence had one mistake. Choose the form that makes both sides the same.',
          blocks: [
            { type: 'cloze', id: 'lk-p1-cl', title: 'Same + same', list: true,
              options: [['hang', 'hanging', 'to hang'], ['seeing', 'see', 'saw'], ['work', 'working', 'to work'], ['kind man and intelligent', 'kind and intelligent'], ['make', 'making', 'to make']],
              text: 'I really enjoy listening to music and {{1}} out with my friends.\nI have decided to take a trip to Melbourne and {{2}} the natural scenery there.\nYou can achieve your goals by setting a clear goal and {{3}} hard towards it.\nHe is a really {{4}} man.\nI am thinking about changing my lifestyle and {{5}} my life healthier.',
              answers: ['hanging', 'see', 'working', 'kind and intelligent', 'making'],
              why: ['enjoy <b>listening</b> … and <b>hanging</b>: -ing + -ing.', 'decided <b>to take</b> … and (to) <b>see</b>: to + verb + (to) verb.', 'by <b>setting</b> … and <b>working</b>: -ing + -ing.', 'adjective + adjective before one noun.', 'thinking about <b>changing</b> … and <b>making</b>.'] }
          ]
        },
        {
          id: 'lk-p2', short: 'Meaning', minutes: 5, grouping: 'Alone',
          title: 'Green jobs: choose the connector',
          goal: 'Choose the connector with the right meaning.',
          blocks: [
            { type: 'cloze', id: 'lk-p2-cl', title: 'A paragraph about green jobs',
              options: [['but', 'so', 'or'], ['However,', 'Therefore,', 'For example,'], ['In addition,', 'In contrast,', 'As a result,'], ['Consequently,', 'Moreover,', 'Nevertheless,'], ['and', 'yet', 'for'], ['For instance,', 'On the contrary,', 'Hence,']],
              text: 'Germany wants to close its coal mines, {{1}} thousands of miners need new jobs. {{2}} the government pays for retraining courses. {{3}} it supports companies that open solar and wind factories in mining regions. Many miners have found new work. {{4}} some older workers feel that the new jobs pay less. Green jobs are growing quickly, {{5}} they are not always where the workers live. {{6}} wind farms are often built on the coast, far from the old mines.',
              answers: ['so', 'Therefore,', 'In addition,', 'Nevertheless,', 'yet', 'For instance,'],
              why: ['Result inside one sentence: <b>so</b>.', 'Result, new sentence: <b>Therefore,</b>', 'One more action: <b>In addition,</b>', 'Contrast with the good news: <b>Nevertheless,</b>', 'Surprising contrast inside one sentence: <b>yet</b>.', 'An example follows: <b>For instance,</b>'] }
          ]
        },
        {
          id: 'lk-p3', short: 'Punctuation', minutes: 5, grouping: 'Alone',
          title: 'Comma, full stop or semicolon?',
          goal: 'Choose the correctly punctuated sentence.',
          blocks: [
            { type: 'quiz', id: 'lk-p3-q', title: 'Which one is correct?', items: [
              { q: 'Training is expensive … it pays off in the long term.', options: ['Training is expensive, however it pays off in the long term.', 'Training is expensive. However, it pays off in the long term.', 'Training is expensive however, it pays off in the long term.'], answer: 'Training is expensive. However, it pays off in the long term.', why: '<b>However</b> links two sentences: full stop (or semicolon) before, comma after.' },
              { q: 'He studied hard for the exam … he passed the test.', options: ['He studied hard for the exam. Therefore, he passed the test.', 'He studied hard for the exam, therefore he passed the test.', 'He studied hard for the exam therefore he passed the test.'], answer: 'He studied hard for the exam. Therefore, he passed the test.', why: 'The same rule as <b>However</b>.' },
              { q: 'Solar jobs are growing … coal jobs are falling.', options: ['Solar jobs are growing; in contrast, coal jobs are falling.', 'Solar jobs are growing, in contrast coal jobs are falling.', 'Solar jobs are growing in contrast, coal jobs are falling.'], answer: 'Solar jobs are growing; in contrast, coal jobs are falling.', why: 'A semicolon can replace the full stop: <b>; in contrast,</b>' },
              { q: 'Workers need new skills … governments pay for training.', options: ['Workers need new skills so, governments pay for training.', 'Workers need new skills, so governments pay for training.', 'Workers need new skills. So, governments pay for training.'], answer: 'Workers need new skills, so governments pay for training.', why: '<b>so</b> is a FANBOYS word: a comma <b>before</b> it, inside one sentence. (In academic writing, avoid starting a sentence with <i>So</i>.)' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'use', number: '4', minutes: 11, tone: 'plum', art: 'dec10/assets/lab/s-use.svg',
      title: 'Use it', subtitle: 'Write a short argument paragraph',
      outcome: 'You write a linked paragraph with both families of linkers, correctly punctuated.',
      activities: [
        {
          id: 'lk-u1', short: 'Write', minutes: 11, grouping: 'Alone → Pair',
          title: 'Should your country invest in green jobs?',
          goal: 'Write 80–100 words. Use at least one FANBOYS word and three connectors with different meanings.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Plan: one reason for, one reason against, one result. Then write your paragraph.' },
            { type: 'detect', id: 'lk-u1-dt', title: 'My paragraph', label: 'Writing studio',
              hint: 'The lights show which kinds of linkers you used. A red chip warns about punctuation.',
              checks: [
                { label: 'FANBOYS (, but / , so / and …)', color: '#2b776e', any: ['/, (but|so|yet|for|and|or) /'] },
                { label: 'Addition', color: '#3a58a0', any: ['In addition', 'Moreover', 'Furthermore', 'What is more', 'Besides'] },
                { label: 'Contrast', color: '#7a4a8c', any: ['However', 'Nevertheless', 'Nonetheless', 'In contrast', 'By contrast', 'On the other hand'] },
                { label: 'Result', color: '#b0512a', any: ['As a result', 'As a consequence', 'Consequently', 'Therefore', 'Thus', 'Hence'] },
                { label: 'Example', color: '#985c0e', any: ['For example', 'For instance'] }
              ],
              avoid: [
                { label: ', however …? Use . However,', any: ['/, (however|therefore|moreover|furthermore|nevertheless|consequently)\\b/'] },
                { label: 'Comma after it?', any: ['/\\b(However|Therefore|Moreover|Furthermore|Nevertheless|Consequently|In addition|As a result|For example) (?!,)[a-z]/u'] }
              ],
              items: [{ rows: 7, placeholder: 'Green jobs could help my country, but …', model: 'Investing in green jobs could help my country, <b>but</b> it would be expensive. Solar and wind farms need trained workers. <b>Therefore,</b> the government would have to pay for new courses. <b>In addition,</b> some regions depend on coal mining. <b>However,</b> the cost of doing nothing is higher. <b>For example,</b> extreme heat already damages crops. <b>As a result,</b> green jobs are a sensible investment.' }] },
            { type: 'do', n: 2, who: 'pair', text: 'Swap paragraphs. Circle every linker. Is the punctuation right? Is the meaning right?' },
            { type: 'checklist', id: 'lk-u1-can', title: 'Can you do it?', items: ['I keep both sides of and / or / but the same.', 'I put a comma before so and but when they join two sentences.', 'I start a new sentence (or use ;) before However, Therefore, In addition.', 'I choose connectors for their meaning, not just to sound academic.'] }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ['coordinating conjunction', 'one of the seven FANBOYS words: for, and, nor, but, or, yet, so', 'Prices rose, so people bought less.'],
    ['conjunctive adverb', 'a linking word that connects two sentences and shows their relationship', 'However, Therefore, In addition'],
    ['parallel structure', 'using the same grammatical form on both sides of and, or, but', 'reading and writing (not reading and write)']
  ]
};
