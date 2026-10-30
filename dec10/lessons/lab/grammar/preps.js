/* DEC10 · Language Lab · Grammar 2 — Dependent prepositions (adjective / verb / noun + preposition).
   Source: the teacher's "Interactive Grammar" document (Prepositions), set in seminar preparation.
   Stages: Warm-up (pre) → Notice and learn (while) → Practise (controlled) → Use it (freer). */
window.DEC15_LESSON = {
  id: 'd10lab-preps', week: null, day: null,
  title: 'Words that travel together',
  duration: 'About 40 minutes',
  questionKind: 'Can-do', questionLabel: 'By the end of this lesson you can',
  question: 'use the right preposition after common adjectives, verbs and nouns — aware of, rely on, solution to — and learn them as chunks.',
  journey: 'Many words always take the same preposition. There is no rule to guess it, so you learn the word and its preposition together, as one chunk.',
  goalShort: 'more accurate writing and speaking',
  image: 'dec10/assets/lab/hero-grammar.svg',
  imageAlt: 'Sentence tiles and floating chips such as rely on, However, and is / are.',
  finish: { title: 'Next lesson', text: 'Linking ideas' },
  sections: [
    {
      id: 'warm', number: '1', minutes: 7, tone: 'amber', art: 'dec10/assets/lab/s-warm.svg',
      title: 'Warm-up', subtitle: 'Two students before their seminar',
      outcome: 'You notice that some words always come with the same preposition.',
      activities: [
        {
          id: 'pr-w1', short: 'Notice', minutes: 7, grouping: 'Alone → Pair',
          title: 'Ready for Wednesday?',
          goal: 'Read a chat and notice the word that comes after each highlighted word.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Mei and Omar give their Opening Remarks on Wednesday. Read their chat. Look at the highlighted chunks.' },
            { type: 'chat', title: 'Group chat · Seminar Group 2', right: 'Omar', lines: [
              ['Mei', 'Are you ready for our Opening Remarks on Wednesday?'],
              ['Omar', 'Almost. I’m still <mark>worried about</mark> my part. I’m <mark>responsible for</mark> the solutions section.'],
              ['Mei', 'Don’t worry, you can <mark>rely on</mark> me for the slides. I’m quite <mark>good at</mark> design.'],
              ['Omar', 'Thanks! The main <mark>reason for</mark> my stress is the questions. What if I don’t know the <mark>answer to</mark> one?'],
              ['Mei', 'Then say it <mark>depends on</mark> the context, and ask the group. We’re all <mark>familiar with</mark> the topic.'],
              ['Omar', 'True. And I’m really <mark>interested in</mark> Germany’s <mark>solution to</mark> the jobs problem, so I’ll enjoy it.']
            ] },
            { type: 'do', n: 2, who: 'alone', text: 'Sort the chunks. What kind of word comes before the preposition?' },
            { type: 'sort', id: 'pr-w1-sort', title: 'Adjective, verb or noun + preposition?', buckets: [{ label: 'Adjective +', text: 'worried about', letter: 'A' }, { label: 'Verb +', text: 'rely on', letter: 'V' }, { label: 'Noun +', text: 'reason for', letter: 'N' }], items: [
              { text: 'worried about', answer: 0 }, { text: 'responsible for', answer: 0 }, { text: 'good at', answer: 0 }, { text: 'familiar with', answer: 0 }, { text: 'interested in', answer: 0 },
              { text: 'rely on', answer: 1 }, { text: 'depends on', answer: 1 },
              { text: 'reason for', answer: 2 }, { text: 'answer to', answer: 2 }, { text: 'solution to', answer: 2 }
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Could you guess these prepositions from a rule? Why not? Tell your partner.' }
          ]
        }
      ]
    },
    {
      id: 'learn', number: '2', minutes: 13, tone: 'blue', art: 'dec10/assets/lab/s-learn.svg',
      title: 'Notice and learn', subtitle: 'Learn them as chunks, then test yourself',
      outcome: 'You know thirty common chunks and how a verb behaves after a preposition.',
      activities: [
        {
          id: 'pr-l1', short: 'Chunks', minutes: 6, grouping: 'Alone',
          title: 'Thirty chunks for academic life',
          goal: 'Read the chunks. Say each one out loud as one unit: <i>aware-of</i>, <i>rely-on</i>.',
          blocks: [
            { type: 'key', title: 'Why chunks?', points: [
              'The preposition after a word is <b>fixed</b>: we say <i>interested <b>in</b></i>, never <i>interested on</i>.',
              'There is usually <b>no rule</b> to guess it. So learn the word <b>with</b> its preposition.',
              'After a preposition, a verb takes <b>-ing</b>: <i>succeeded in <b>reducing</b></i>, <i>insisted on <b>paying</b></i>.'
            ] },
            { type: 'language', title: 'Chunks to learn', groups: [
              { label: 'Adjective + preposition', phrases: ['aware <b>of</b>', 'based <b>on</b>', 'familiar <b>with</b>', 'responsible <b>for</b>', 'good <b>at</b> / bad <b>at</b>', 'interested <b>in</b>', 'keen <b>on</b>', 'fluent <b>in</b>', 'satisfied <b>with</b>', 'worried <b>about</b>'] },
              { label: 'Verb + preposition', phrases: ['succeed <b>in</b>', 'rely <b>on</b>', 'divide … <b>into</b>', 'concentrate <b>on</b>', 'complain <b>about</b>', 'insist <b>on</b>', 'translate … <b>into</b>', 'borrow … <b>from</b>', 'lend … <b>to</b>', 'depend <b>on</b>', 'decide <b>on</b>', 'help … <b>with</b>'] },
              { label: 'Noun + preposition', phrases: ['solution <b>to</b>', 'reason <b>for</b>', 'need <b>for</b>', 'attitude <b>to / towards</b>', 'problem <b>with</b>', 'effect <b>on</b>', 'increase <b>in</b>'] }
            ] },
            { type: 'tip', text: 'Careful with <b>borrow</b> and <b>lend</b>: you borrow money <b>from</b> someone; you lend money <b>to</b> someone.' }
          ]
        },
        {
          id: 'pr-l2', short: 'Cover and test', minutes: 7, grouping: 'Alone → Pair',
          title: 'Cover and test yourself',
          goal: 'Say the preposition before you turn each card.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Read the front. Say the missing preposition. Then turn the card and check.' },
            { type: 'flip', title: 'What comes next?', items: [
              { front: 'We weren’t aware ___ the problem with our ticket.', back: 'aware <b>of</b>' },
              { front: 'The film is based ___ a best-selling novel.', back: 'based <b>on</b>' },
              { front: 'Are you familiar ___ the software we use?', back: 'familiar <b>with</b>' },
              { front: 'I can’t concentrate ___ my work with all that noise.', back: 'concentrate <b>on</b>' },
              { front: 'We have succeeded ___ reducing unemployment.', back: 'succeed <b>in</b> + -ing' },
              { front: 'There is an urgent need ___ qualified teachers.', back: 'need <b>for</b>' },
              { front: 'The government’s attitude ___ single-parent families is changing.', back: 'attitude <b>to / towards</b>' },
              { front: 'I need to translate this document ___ German.', back: 'translate <b>into</b>' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Test your partner: say a word (<i>responsible</i>), your partner says the chunk and a short sentence (<i>responsible for … I’m responsible for the slides.</i>). Swap after five words.' }
          ]
        }
      ]
    },
    {
      id: 'practise', number: '3', minutes: 12, tone: 'teal', art: 'dec10/assets/lab/s-practise.svg',
      title: 'Practise', subtitle: 'Controlled practice with instant feedback',
      outcome: 'You choose the right preposition in thirty sentences.',
      activities: [
        {
          id: 'pr-p1', short: 'Adjectives', minutes: 4, grouping: 'Alone',
          title: 'Adjective + preposition',
          goal: 'Choose the preposition.',
          blocks: [
            { type: 'cloze', id: 'pr-p1-cl', title: 'Adjective + preposition', list: true, options: ['of', 'on', 'with', 'for', 'at', 'in', 'about'],
              text: 'We weren’t aware {{1}} the problem with our ticket until we got to the airport.\nThe film, which is set in Sweden, is based {{2}} a best-selling novel.\nAre you familiar {{3}} the computer software we use?\nAs a marketing manager, I am responsible {{4}} all our publicity campaigns.\nShe is good {{5}} running and swimming.\nI am very bad {{6}} French; in fact, I can’t speak a word.\nMy grandmother is very interested {{7}} history.\nMy partner is not very keen {{8}} me buying a sports car.\nMy cousin is a great linguist: she’s fluent {{9}} four languages.\nWe are very satisfied {{10}} the result of our work.',
              answers: ['of', 'on', 'with', 'for', 'at', 'at', 'in', 'on', 'in', 'with'] }
          ]
        },
        {
          id: 'pr-p2', short: 'Verbs', minutes: 5, grouping: 'Alone',
          title: 'Verb + preposition',
          goal: 'Choose the preposition. Remember: after a preposition, use -ing.',
          blocks: [
            { type: 'cloze', id: 'pr-p2-cl', title: 'Verb + preposition', list: true, options: ['in', 'on', 'into', 'about', 'from', 'to', 'with'],
              text: 'We have succeeded {{1}} reducing unemployment to less than 5% of the workforce.\nI know I can rely {{2}} you to keep a secret.\nI need to divide this cake {{3}} four equal parts.\nI can’t concentrate {{4}} what I’m doing with all that noise outside.\nI’m going to complain to the manager {{5}} this.\nSimon insisted {{6}} paying for everything when we went out.\nI may have to borrow some money {{7}} my sister.\nIt’s often not a good idea to lend money {{8}} a friend.\nWe’re not sure about the picnic. It depends {{9}} the weather.\nHe often helps me {{10}} the housework.',
              answers: ['in', 'on', 'into', 'on', 'about', 'on', 'from', 'to', 'on', 'with'] }
          ]
        },
        {
          id: 'pr-p3', short: 'Nouns', minutes: 3, grouping: 'Alone',
          title: 'Noun + preposition',
          goal: 'Choose the preposition.',
          blocks: [
            { type: 'cloze', id: 'pr-p3-cl', title: 'Noun + preposition', list: true, options: ['to', 'for', 'with', 'towards'],
              text: 'There doesn’t seem to be an easy solution {{1}} the problem.\nThe reason {{2}} the delay was the late arrival of the incoming flight.\nThere is an urgent need {{3}} qualified teachers in developing nations.\nI think the government’s attitude {{4}} single-parent families is changing.\nI have some problems {{5}} this new software.',
              answers: ['to', 'for', 'for', 'towards', 'with'],
              why: ['solution <b>to</b> a problem', 'reason <b>for</b>', 'need <b>for</b>', 'attitude <b>towards</b> (or <b>to</b>)', 'problem <b>with</b>'] }
          ]
        }
      ]
    },
    {
      id: 'use', number: '4', minutes: 8, tone: 'plum', art: 'dec10/assets/lab/s-use.svg',
      title: 'Use it', subtitle: 'Talk and write about your own seminar',
      outcome: 'You use at least six chunks in your own speaking and writing.',
      activities: [
        {
          id: 'pr-u1', short: 'Speak and write', minutes: 8, grouping: 'Pair → Alone',
          title: 'Me and my seminar group',
          goal: 'Speak first, then write. The lights show the chunks you used; red warns about a common error.',
          blocks: [
            { type: 'do', n: 1, who: 'pair', text: 'Ask and answer. Use the chunk in your answer.' },
            { type: 'talk', title: 'Ask your partner', prompts: ['What are you <b>good at</b> in group work?', 'What are you <b>worried about</b> in your seminar?', 'Which part are you <b>responsible for</b>?', 'Who or what do you <b>rely on</b> when you research?', 'What is your group’s <b>solution to</b> the problem?'] },
            { type: 'do', n: 2, who: 'alone', text: 'Write 4–6 sentences about your seminar group. Use at least one adjective chunk, one verb chunk and one noun chunk.' },
            { type: 'detect', id: 'pr-u1-dt', title: 'My seminar group', label: 'Writing studio',
              hint: 'The lights turn on when you use a chunk. A red chip means: check that preposition!',
              checks: [
                { label: 'Adjective + preposition', color: '#2b776e', any: ['aware of', 'based on', 'familiar with', 'responsible for', 'good at', 'bad at', 'interested in', 'keen on', 'fluent in', 'satisfied with', 'worried about'] },
                { label: 'Verb + preposition', color: '#3a58a0', any: ['/\\b(succeed|succeeded|succeeds|rely|relied|relies|concentrate|concentrated|insist|insisted|depend|depends|depended|decide|decided|complain|complained) (on|in|about)\\b/', 'help me with', 'helps me with', 'helped me with', 'borrow', 'lend'] },
                { label: 'Noun + preposition', color: '#7a4a8c', any: ['solution to', 'reason for', 'need for', 'attitude to', 'attitude towards', 'problem with', 'problems with', 'effect on', 'increase in'] },
                { label: 'preposition + -ing', color: '#b0512a', any: ['/\\b(in|on|at|about|for|of) \\w+ing\\b/'] }
              ],
              avoid: [
                { label: 'interested on / about?', any: ['interested on', 'interested about'] },
                { label: 'depend of?', any: ['/\\bdepend(s|ed)? of\\b/'] },
                { label: 'discuss about?', any: ['/\\bdiscuss(es|ed)? about\\b/'] },
                { label: 'responsible of?', any: ['responsible of'] },
                { label: 'aware about?', any: ['aware about'] },
                { label: 'reason of?', any: ['reason of'] }
              ],
              items: [{ rows: 6, placeholder: 'In our group, I am responsible for …', model: 'In our group, I am <b>responsible for</b> the solutions section. I am quite <b>good at</b> finding sources, but I am <b>worried about</b> the questions. Luckily, I can <b>rely on</b> Mei for the slides. Our <b>solution to</b> the problem <b>depends on</b> government funding, and we have succeeded <b>in finding</b> three good examples.' }] },
            { type: 'checklist', id: 'pr-u1-can', title: 'Can you do it?', items: ['I learn new words with their preposition.', 'I use -ing after a preposition.', 'I used at least six chunks today.'] },
            { type: 'sticky', color: 'green', title: 'Keep a chunk list', text: 'When you read, notice chunks (<i>an increase <b>in</b></i>, <i>the effect <b>on</b></i>) and add them to your notebook. Ten new chunks a week is a great habit.' }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ['preposition', 'a small word such as in, on, at, for, with, about that shows a relation', 'aware of, rely on'],
    ['chunk', 'a group of words we learn and use together as one unit', '“the reason for” is a chunk'],
    ['dependent preposition', 'the preposition that always follows a particular word', 'interested in, depend on']
  ]
};
