/* DEC15 · Week 5, Day 2 — lesson content.
   Teacher’s Book: W5 D2 · 2A LRW assessment — “Follow instructions from the DEC team.”
   This page has no assessment content. It only helps students get ready, review strategies and reflect.
   Teacher notes live in the database (teacher_notes), refs only here.
   Block types: lessons/_template.js and js/play.js. */

window.DEC15_LESSON = {
  id: 'w5d2',
  week: 5, day: 2,
  title: 'LRW assessment',
  duration: 'Assessment day',
  question: 'How can I use the listening, reading and writing strategies I have learned in DEC15 — calmly and well?',
  questionKind: 'Focus question',
  questionLabel: 'Today’s focus',
  wordTarget: '',
  image: 'assets/week5/hero-w5d2.svg',
  imageAlt: 'A calm exam desk with headphones, a reading booklet, a clock, a pen, a glass of water and a small plant.',
  journey: 'Today is your Listening, Reading and Writing (LRW) assessment. Follow your teacher and the DEC team. First, check you are ready. Then play a quick game to remember your best strategies. After the test, write a short reflection.',
  finish: { title: 'Wednesday', text: 'Frameworks: read and listen' },

  sections: [
    /* ───────────────────────── 2A LRW assessment ───────────────────────── */
    {
      id: 'lrw', number: '01', code: '2A', minutes: 35,
      tone: 'blue', art: 'assessment',
      title: 'LRW assessment',
      subtitle: 'Get ready, stay calm, then reflect',
      outcome: 'Follow the DEC team’s instructions. Use your listening, reading and writing strategies. Think about how the test went.',
      activities: [
        {
          id: 'a1', short: 'Get ready', minutes: 5, grouping: 'Alone',
          title: 'Before the assessment: What to bring and expect',
          goal: 'Check you have everything you need.',
          blocks: [
            { type: 'key', tone: 'warn', title: 'Listen to your teacher and the DEC team', points: [
              'Your teacher and the DEC team give the <b>official instructions</b>: time, place and rules.',
              'This page does not have the test. It only helps you get ready.',
              'Not sure about something? <b>Ask your teacher</b> before the test starts.'
            ]},
            { type: 'checklist', id: 'a1c', title: 'My checklist: tick each one', meter: ['ready', 'Ready — good luck!'], items: [
              'I know the time and the room (or the online link).',
              'My laptop is charged. I have my charger.',
              'My headphones work with my laptop.',
              'I have my student card.',
              'I can log in. I checked my password.',
              'I have water. I will arrive a little early.',
              'I have read or heard the instructions from my teacher and the DEC team.'
            ]},
            { type: 'tip', text: 'Nervous? That is normal! Breathe slowly. Read each instruction twice. Do one task at a time.' },
            { type: 'teacher', ref: 'w5d2-t1' }
          ]
        },
        {
          id: 'a2', short: 'Strategies', minutes: 20, grouping: 'Alone → pair',
          title: 'Quick review: Strategies from DEC15',
          goal: 'Remember your best listening, reading and writing strategies.',
          blocks: [
            { type: 'sort', id: 'a2s', title: 'Part 1 · Game: Listening, Reading or Writing?', hint: 'Drag (or tap) each strategy into the right box. Then check.', buckets: [
              { label: 'Listening' }, { label: 'Reading' }, { label: 'Writing' }
            ], items: [
              { text: 'Read the questions first. <b>Predict</b> what you will hear.', answer: 0, why: 'Predicting helps you listen for the right things.' },
              { text: 'First get the <b>gist</b> (= main idea). Then listen again for details.', answer: 0, why: 'Gist first, detail second.' },
              { text: 'Write <b>short notes</b>: key words, symbols and numbers.', answer: [0, 1], why: 'Short notes work for listening and reading.' },
              { text: '<b>Skim</b> (= read fast) the title and topic sentences for the main idea.', answer: 1, why: 'Skimming is a reading strategy.' },
              { text: '<b>Scan</b> (= look quickly) for names and numbers.', answer: 1, why: 'Scanning finds details in a text.' },
              { text: 'Write the <b>author and year</b> next to every note.', answer: 1, why: 'Then you can cite the source later.' },
              { text: 'Read the question. Decide your <b>position</b> (= your answer).', answer: 2, why: 'Know your answer before you write.' },
              { text: 'Plan: <b>thesis</b> + one main idea in each paragraph + evidence.', answer: 2, why: 'A plan keeps your essay clear.' },
              { text: '<b>Paraphrase</b> (= use your own words) and <b>cite</b> every source.', answer: 2, why: 'Always say where an idea comes from.' },
              { text: 'Leave 5 minutes at the end to <b>check</b> your writing.', answer: 2, why: 'You can find small mistakes.' }
            ]},
            { type: 'flip', title: 'Part 2 · Six skills from Weeks 1–5: explain, then turn the card', hint: 'Say one sentence about the skill to your partner. Then turn the card and check.', items: [
              { front: 'Note-taking', back: 'Use headings, key words and symbols. Write only what answers the question.', tag: 'Listening · Reading' },
              { front: 'Paraphrasing', back: 'Change the words and the sentence. Keep the meaning. Still cite the source.', tag: 'Writing' },
              { front: 'Synthesising', back: 'Join ideas from two or more sources: <i>Similarly, …</i> · <i>In contrast, …</i> · (A, 2021; B, 2024).', tag: 'Writing' },
              { front: 'Position', back: 'Say your thesis in the introduction. Support it in every paragraph. Repeat it in the conclusion.', tag: 'Writing' },
              { front: 'Hedging', back: 'Make claims careful: <i>may, might, could, suggest, tend to</i>.', tag: 'Writing · Reading' },
              { front: 'Referencing', back: 'APA: <i>Gunders (2024) argues…</i> or <i>(Berti et al., 2021)</i>. Use <i>et al.</i> for three or more authors.', tag: 'Writing' }
            ]},
            { type: 'key', title: 'My test-day plan', compare: [
              { label: 'Listening', text: 'Predict → gist → detail. Short notes.' },
              { label: 'Reading', text: 'Skim → scan. Author and year with every note.' },
              { label: 'Writing', text: 'Plan first. Paraphrase and cite. Check at the end.' }
            ]},
            { type: 'tip', text: 'Nice work! Choose <b>one</b> strategy you want to remember most today. Tell your partner.' },
            { type: 'teacher', ref: 'w5d2-t2' }
          ],
          answers: { title: 'Why these answers?', items: [
            ['Listening', 'Predict before you listen · gist first, then detail · short notes.'],
            ['Reading', 'Skim for the main idea · scan for details · author and year with every note. (Short notes help in reading too.)'],
            ['Writing', 'Decide your position · plan · paraphrase and cite · check at the end.']
          ]}
        },
        {
          id: 'a3', short: 'Reflect', minutes: 10, grouping: 'Alone',
          title: 'After the assessment: Reflection',
          goal: 'Think about what went well and what to do next time.',
          blocks: [
            { type: 'tip', text: 'Do this <b>after</b> the test. Do not write about the test questions. Write about <b>how you worked</b>.' },
            { type: 'language', title: 'Sentence starters', tabs: false, groups: [
              { label: 'What helped', phrases: ['The strategy that helped me most was…', 'It was useful to…'] },
              { label: 'What was difficult', phrases: ['I found it hard to… because…', 'I did not have enough time to…'] },
              { label: 'Next time', phrases: ['Next time, I will…', 'I want to practise…'] }
            ]},
            { type: 'fields', title: 'My reflection', fields: [
              { id: 'a3-1', label: 'Which strategies helped me most today?', placeholder: 'The strategy that helped me most was reading the questions first…', rows: 3 },
              { id: 'a3-2', label: 'What was difficult? Why?', placeholder: 'I found it hard to manage my time in the writing part…', rows: 3 },
              { id: 'a3-3', label: 'One thing I will do differently next time', placeholder: 'Next time, I will plan for 10 minutes before I write…', rows: 2 }
            ]},
            { type: 'teacher', ref: 'w5d2-t3' }
          ]
        }
      ]
    }
  ],

  extras: [],

  glossary: [
    ['assessment', 'A test or task that measures what you can do.', 'The LRW assessment tests listening, reading and writing.'],
    ['instructions', 'Information that tells you what to do.', 'Follow the DEC team’s instructions.'],
    ['predict', 'Guess what you will hear or read before you start.', 'Predict the content from the headings.'],
    ['gist', 'The general idea.', 'Listen for gist first.'],
    ['detail', 'A small, specific piece of information.', 'Listen again for detail.'],
    ['skim', 'Read quickly for the main idea.', 'Skim the abstract and topic sentences.'],
    ['scan', 'Read quickly to find specific information.', 'Scan for numbers and names.'],
    ['note-taking', 'Writing short notes with key words and symbols.', 'Use abbreviations in your note-taking.'],
    ['paraphrase', 'Say or write an idea in your own words.', 'Paraphrase the source and cite it.'],
    ['synthesise', 'Connect ideas from different sources.', 'Synthesise two sources in one paragraph.'],
    ['position', 'Your answer or opinion on the question.', 'Make your position clear in the thesis.'],
    ['thesis', 'The sentence that states your position.', 'Restate the thesis in the conclusion.'],
    ['hedging', 'Careful language that makes a claim less certain.', 'This may reduce food waste.'],
    ['citation', 'A reference to a source in your text.', '(Clapp et al., 2022)'],
    ['reflect', 'Think carefully about what you did and how to improve.', 'Reflect on your strategies after the assessment.']
  ]
};
