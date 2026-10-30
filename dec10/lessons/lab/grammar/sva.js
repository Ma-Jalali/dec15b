/* DEC10 · Language Lab · Grammar 1 — Subject–verb agreement (self-study or a class top-up).
   Source: the teacher's "Interactive Grammar" document (Subject-Verb Agreement), set in the Week 2 topic (our digital carbon footprint).
   Stages: Warm-up (pre) → Notice and learn (while) → Practise (controlled) → Use it (freer). Ids never change after students start. */
window.DEC15_LESSON = {
  id: 'd10lab-sva', week: null, day: null,
  title: 'Is or are? Subject–verb agreement',
  duration: 'About 45 minutes',
  questionKind: 'Can-do', questionLabel: 'By the end of this lesson you can',
  question: 'find the real subject of a long sentence, and choose a verb that agrees with it.',
  journey: 'Long academic subjects hide the word that the verb must agree with. Learn to find it every time, then check the verbs in your own writing.',
  goalShort: 'accurate sentences in your writing',
  image: 'dec10/assets/lab/hero-grammar.svg',
  imageAlt: 'Sentence tiles: The results, of the experiment in a dashed box, were published, with an arrow from results to were.',
  finish: { title: 'Next lesson', text: 'Words that travel together' },
  sections: [
    {
      id: 'warm', number: '1', minutes: 8, tone: 'amber', art: 'dec10/assets/lab/s-warm.svg',
      title: 'Warm-up', subtitle: 'Bet on it: right or wrong?',
      outcome: 'You know which agreement rules you already use, and which ones you are not sure about.',
      activities: [
        {
          id: 'sva-w1', short: 'Bet', minutes: 8, grouping: 'Alone → Pair',
          title: 'A classmate’s notes on the digital carbon footprint',
          goal: 'Decide whether each sentence is correct. Bet more coins when you are sure.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'A classmate wrote these notes for a Week 2 research summary. Read each sentence. Is the verb correct?' },
            { type: 'do', n: 2, who: 'alone', text: 'Bet 1 coin if you are not sure, 3 coins if you are very sure.' },
            { type: 'bet', id: 'sva-w1-bet', title: 'Correct or not?', items: [
              { q: 'The number of data centres in Singapore <b>is</b> growing.', options: ['Correct', 'Not correct'], answer: 'Correct', why: '<b>The number of</b> + plural noun is singular: the number <b>is</b>. (But <b>a number of</b> means “many”, so it is plural: a number of centres <b>are</b>.)' },
              { q: 'The results of the study <b>shows</b> that every email has a carbon cost.', options: ['Correct', 'Not correct'], answer: 'Not correct', why: 'The head noun is <b>results</b> (plural), not <i>study</i>: the results <b>show</b>.' },
              { q: 'Each of the students <b>have</b> a smartphone and a laptop.', options: ['Correct', 'Not correct'], answer: 'Not correct', why: '<b>Each</b> is singular, even before <i>of the students</i>: each of the students <b>has</b>.' },
              { q: 'There <b>is</b> many ways to reduce our digital footprint.', options: ['Correct', 'Not correct'], answer: 'Not correct', why: 'After <b>there</b>, the verb agrees with the noun that follows: there <b>are</b> many ways.' },
              { q: 'Watching videos online <b>uses</b> more data than reading.', options: ['Correct', 'Not correct'], answer: 'Correct', why: 'An <b>-ing</b> subject (watching videos online) is one activity, so it is singular.' },
              { q: 'In our class survey, two hours <b>is</b> the most common daily screen time.', options: ['Correct', 'Not correct'], answer: 'Correct', why: 'An amount of time, money or distance is one amount: two hours <b>is</b>.' }
            ] },
            { type: 'do', n: 3, who: 'pair', text: 'Compare your coins. Which sentence surprised you? Keep it in mind for the next stage.' }
          ]
        }
      ]
    },
    {
      id: 'learn', number: '2', minutes: 15, tone: 'blue', art: 'dec10/assets/lab/s-learn.svg',
      title: 'Notice and learn', subtitle: 'Find the head noun, then learn the tricky subjects',
      outcome: 'You can find the head noun of a subject and you know the rules for tricky subjects.',
      activities: [
        {
          id: 'sva-l1', short: 'Head noun', minutes: 7, grouping: 'Alone',
          title: 'The verb agrees with the head noun',
          goal: 'Find the one noun that the verb agrees with.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Look at the two sentences. Which word does <b>is</b> agree with?' },
            { type: 'figure', src: 'dec10/assets/lab/sva-head.svg', alt: 'The weather in the southern states is very hot: weather goes with is. One of the countries I would like to visit is Italy: one goes with is. The middle parts are ignored.', caption: '<b>Ignore the middle.</b> Phrases with of, in, with, who, which … sit between the subject and the verb.' },
            { type: 'key', title: 'The rule', points: [
              'Find the <b>head noun</b>: the main noun of the subject.',
              'Ignore phrases that come after it: <i>of the study</i>, <i>in the southern states</i>, <i>that I read</i>.',
              'Singular head noun → singular verb (<b>is, has, shows</b>). Plural head noun → plural verb (<b>are, have, show</b>).'
            ] },
            { type: 'do', n: 2, who: 'alone', text: 'Your turn. Tap the head noun in each subject.' },
            { type: 'spot', id: 'sva-l1-spot', title: 'Tap the head noun', label: 'head noun', paras: [
              'The [[*results]] of Dr Noll’s [[experiment]] were published in a scientific journal.',
              'The [[*extent]] of the [[problems]] surprises many researchers.',
              '[[*One]] of the [[countries]] I would like to visit is Italy.',
              'A [[*list]] of practical [[strategies]] is in the appendix.',
              'The [[*energy]] used by data [[centres]] around the world is enormous.'
            ] }
          ]
        },
        {
          id: 'sva-l2', short: 'Tricky subjects', minutes: 8, grouping: 'Alone → Pair',
          title: 'Tricky subjects: singular or plural?',
          goal: 'Sort the subjects, then read the rule for each one.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Sort the subjects. Do they take a singular verb (<b>is</b>) or a plural verb (<b>are</b>)? Guess first, then check.' },
            { type: 'sort', id: 'sva-l2-sort', title: 'is or are?', buckets: [{ label: 'Singular verb', text: 'is · has · shows', letter: '1' }, { label: 'Plural verb', text: 'are · have · show', letter: '2+' }], items: [
              { text: 'Each student in the class', answer: 0, why: '<b>each / every</b> + singular noun is singular.' },
              { text: 'Washing the dishes', answer: 0, why: 'An -ing activity is one thing.' },
              { text: 'Economics', answer: 0, why: 'Some subjects end in -s but are singular: economics, physics, the news, the United States.' },
              { text: 'Ten minutes', answer: 0, why: 'An amount of time, money or distance is singular.' },
              { text: 'Anna, as well as her two sisters,', answer: 0, why: '<b>as well as / along with / together with</b> do not add to the subject: the verb agrees with Anna.' },
              { text: 'Some of the furniture', answer: 0, why: '<b>some of / most of / a lot of / half of</b>: look at the noun after <i>of</i>. Furniture is uncountable, so singular.' },
              { text: 'A woman and her child', answer: 1, why: '<b>A and B</b> joined by <i>and</i> are two: plural.' },
              { text: 'Some of the desks', answer: 1, why: 'The noun after <i>of</i> is plural (desks), so the verb is plural.' },
              { text: 'The police', answer: 1, why: 'Some nouns are plural without -s: police, people, cattle.' },
              { text: 'The elderly in my country', answer: 1, why: '<b>the</b> + adjective for a group of people (the elderly, the young, the Japanese) is plural.' }
            ] },
            { type: 'do', n: 2, who: 'pair', text: 'Turn the cards. Which rule do you need to remember most? Tell your partner.' },
            { type: 'flip', title: 'Rule cards', items: [
              { front: 'one of the + plural noun', back: 'Singular: <b>One</b> of the countries <b>is</b> Italy.', tag: 'Rule 1' },
              { front: 'each / every', back: 'Singular: <b>Each</b> of the students <b>has</b> a notebook. <b>Every</b> man, woman and child <b>is</b> protected.', tag: 'Rule 2' },
              { front: 'some / most / all / a lot / half / three-quarters + of', back: 'Look at the noun after <i>of</i>: some of the desks <b>are</b> · some of the furniture <b>is</b>.', tag: 'Rule 3' },
              { front: 'There is / There are', back: 'The verb agrees with the noun <b>after</b> it: There <b>are</b> some interesting pictures. There <b>is</b> an incorrect statement.', tag: 'Rule 4' },
              { front: 'A and B · A, as well as B,', back: '<b>and</b> makes it plural. <b>as well as / along with</b> does not: My cousin, along with my aunt, <b>works</b> in the shop.', tag: 'Rule 5' },
              { front: 'Japanese or the Japanese?', back: '<b>Japanese</b> (the language) <b>is</b> difficult. <b>The Japanese</b> (the people) <b>have</b> a long history.', tag: 'Rule 6' }
            ] },
            { type: 'sticky', color: 'yellow', title: 'In questions too', text: 'The verb still agrees with the subject: Where <b>do</b> your grandparents live? <b>Is</b> the bag of vegetables still in the car? <b>Do</b> Professor Karl and her researchers work together?' }
          ]
        }
      ]
    },
    {
      id: 'practise', number: '3', minutes: 12, tone: 'teal', art: 'dec10/assets/lab/s-practise.svg',
      title: 'Practise', subtitle: 'Controlled practice with instant feedback',
      outcome: 'You choose the right verb in sentences and in a short academic paragraph.',
      activities: [
        {
          id: 'sva-p1', short: 'Paragraph', minutes: 5, grouping: 'Alone',
          title: 'Our digital carbon footprint',
          goal: 'Choose the verb that agrees with each subject.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Read the paragraph. For each gap, find the head noun first, then choose the verb.' },
            { type: 'cloze', id: 'sva-p1-cl', title: 'A paragraph about the digital carbon footprint',
              options: [['has', 'have'], ['is', 'are'], ['is', 'are'], ['comes', 'come'], ['runs', 'run'], ['uses', 'use'], ['is', 'are'], ['makes', 'make']],
              text: 'Every email we send {{1}} a small carbon cost. The energy used by data centres around the world {{2}} huge, and the number of data centres {{3}} still growing. A lot of the electricity {{4}} from coal, and most of the servers {{5}} day and night. Watching videos online {{6}} the most data. However, there {{7}} many simple ways to cut our footprint: deleting old files, watching videos in lower quality and keeping devices for longer. Each of these steps {{8}} a difference.',
              answers: ['has', 'is', 'is', 'comes', 'run', 'uses', 'are', 'makes'],
              why: ['<b>Every</b> + singular noun (email) → singular.', 'Head noun: <b>energy</b> (not centres, not world).', '<b>The number of</b> … → singular.', 'Head noun after <i>a lot of</i>: <b>electricity</b>, uncountable → singular.', 'After <i>most of</i>: <b>servers</b>, plural → plural.', 'An <b>-ing</b> subject is singular.', 'After <i>there</i>: <b>ways</b> → plural.', '<b>Each</b> → singular.'] }
          ]
        },
        {
          id: 'sva-p2', short: 'Sentences', minutes: 7, grouping: 'Alone',
          title: 'Twelve tricky subjects',
          goal: 'Use every rule from Stage 2.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Choose the correct verb. Then check and read why.' },
            { type: 'cloze', id: 'sva-p2-cl', title: 'Choose the verb', list: true,
              options: [['was', 'were'], ['is', 'are'], ['is', 'are'], ['is', 'are'], ['is', 'are'], ['is', 'are'], ['has', 'have'], ['is', 'are'], ['is', 'are'], ['is', 'are'], ['has', 'have'], ['is', 'are']],
              text: 'The results of Dr Noll’s experiment {{1}} published in a scientific journal.\nWashing the dishes {{2}} the children’s job.\nA woman and her child {{3}} waiting to see Dr Chang.\nAnna, as well as her two older sisters, {{4}} in college.\nSome of the furniture in our apartment {{5}} second-hand.\nSome of the desks in the classroom {{6}} broken.\nEach of the students {{7}} a notebook.\nEconomics {{8}} Dan’s favourite subject.\nThe police {{9}} coming. I’ve already called them.\nJapanese {{10}} very difficult for English speakers to learn.\nThe Japanese {{11}} a long and interesting history.\nTen minutes {{12}} more than enough time to finish this exercise.',
              answers: ['were', 'is', 'are', 'is', 'is', 'are', 'has', 'is', 'are', 'is', 'have', 'is'],
              why: ['Head noun: <b>results</b>.', '-ing subject → singular.', '<b>and</b> → plural.', '<b>as well as</b> does not add: Anna → singular.', '<b>furniture</b> is uncountable.', '<b>desks</b> → plural.', '<b>Each</b> → singular.', 'Ends in -s but singular.', '<b>police</b> is always plural.', 'The language → singular.', 'The people → plural.', 'An amount of time → singular.'] },
            { type: 'do', n: 2, who: 'alone', text: 'Now questions. Choose the correct one.' },
            { type: 'quiz', id: 'sva-p2-q', title: 'Questions and long subjects', items: [
              { q: 'Where ___ your grandparents live?', options: ['does', 'do'], answer: 'do', why: 'Subject: <b>your grandparents</b> (plural).' },
              { q: '___ taking care of the elderly the responsibility of the family or the government?', options: ['Is', 'Are'], answer: 'Is', why: 'Subject: <b>taking care of the elderly</b>, an -ing activity → singular.' },
              { q: '___ Professor Karl and her graduate researchers work closely together?', options: ['Does', 'Do'], answer: 'Do', why: '<b>Professor Karl and her researchers</b>: A and B → plural.' },
              { q: 'Every man, woman and child ___ protected under the law.', options: ['is', 'are'], answer: 'is', why: '<b>Every</b> … → singular, even with a list.' },
              { q: 'Getting to know students from all over the world ___ one of the best parts of studying abroad.', options: ['is', 'are'], answer: 'is', why: 'Head: <b>getting to know …</b> (-ing) → singular.' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'use', number: '4', minutes: 10, tone: 'plum', art: 'dec10/assets/lab/s-use.svg',
      title: 'Use it', subtitle: 'Write about your own country, then check every verb',
      outcome: 'You write accurate sentences with long subjects about a topic you know.',
      activities: [
        {
          id: 'sva-u1', short: 'Write', minutes: 10, grouping: 'Alone → Pair',
          title: 'Digital habits in my country',
          goal: 'Write five sentences that start with tricky subjects. The lights show which starters you used; red warns about a common error.',
          blocks: [
            { type: 'do', n: 1, who: 'alone', text: 'Write about digital habits in your country (phones, streaming, data, e-waste). Start your sentences with these subjects: <b>The number of …</b> · <b>One of the …</b> · <b>Each of …</b> · <b>Most of the …</b> · <b>There is / There are …</b>' },
            { type: 'detect', id: 'sva-u1-dt', title: 'My five sentences', label: 'Writing studio',
              hint: 'Write freely. The lights turn on as you use each starter. A red chip means: check that verb!',
              checks: [
                { label: 'The number of …', color: '#2b776e', any: ['the number of'] },
                { label: 'One of the …', color: '#3a58a0', any: ['one of the'] },
                { label: 'Each of …', color: '#7a4a8c', any: ['each of'] },
                { label: 'Most of the …', color: '#b0512a', any: ['most of the'] },
                { label: 'There is / are', color: '#985c0e', any: ['/\\bthere (is|are)\\b/'] }
              ],
              avoid: [
                { label: 'One of the … are / have?', any: ['/\\bone of the (\\w+ ){1,4}(are|have|were)\\b/'] },
                { label: 'Each of … have / are?', any: ['/\\beach of (\\w+ ){1,4}(have|are|were)\\b/'] },
                { label: 'The number of … are?', any: ['/\\bthe number of (\\w+ ){1,4}(are|have|were)\\b/'] },
                { label: 'There is + plural?', any: ['/\\bthere is (many|several|a lot of|lots of|some|two|three|\\d+) /'] }
              ],
              items: [{ rows: 7, placeholder: 'The number of people who …', model: 'The number of people who stream videos on their phones <b>is</b> rising quickly. One of the biggest problems <b>is</b> old phones that end up in landfill. Each of my friends <b>has</b> at least two devices. Most of the electricity in my country still <b>comes</b> from coal. There <b>are</b> a few recycling schemes, but there <b>is</b> not enough information about them.' }] },
            { type: 'do', n: 2, who: 'pair', text: 'Swap with a partner. In each sentence, underline the head noun and circle the verb. Do they agree?' },
            { type: 'talk', title: 'Say it: 30 seconds each', prompts: ['One of the things I like most about studying in Sydney is …', 'Most of the people in my class …', 'The number of international students in Australia …', 'Each of my teachers …'] },
            { type: 'checklist', id: 'sva-u1-can', title: 'Can you do it?', items: ['I find the head noun before I choose the verb.', 'I know that each, every, one of the and the number of take a singular verb.', 'I look at the noun after of with some, most, a lot and half.', 'I checked every verb in my sentences.'] },
            { type: 'sticky', color: 'green', title: 'Take it into your writing', text: 'Before you submit your next paragraph, find every <b>is/are</b> and <b>has/have</b>. Ask: what is the head noun?' }
          ]
        }
      ]
    }
  ],
  extras: [],
  glossary: [
    ['subject', 'the person or thing that does the action of the verb, usually before the verb', 'In “The results show …”, the subject is “the results”.'],
    ['head noun', 'the main noun in a group of words; the verb agrees with it', 'The head noun of “the energy used by data centres” is “energy”.'],
    ['agree', 'to match in grammar: singular with singular, plural with plural', 'The verb must agree with its subject.'],
    ['uncountable noun', 'a noun with no plural form, such as information, furniture or electricity', 'Most of the information is online.']
  ]
};
