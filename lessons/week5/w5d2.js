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
  journey: 'Today is your Listening, Reading and Writing (LRW) assessment. Follow your teacher’s and the DEC team’s instructions. Before you start, check you have what you need and remind yourself of the strategies you have practised. Afterwards, take a few minutes to reflect.',
  finish: { title: 'Wednesday', text: 'Frameworks: read and listen' },

  sections: [
    /* ───────────────────────── 2A LRW assessment ───────────────────────── */
    {
      id: 'lrw', number: '01', code: '2A', minutes: 35,
      tone: 'blue', art: 'assessment',
      title: 'LRW assessment',
      subtitle: 'Get ready, stay calm, then reflect',
      outcome: 'Follow the instructions from the DEC team, use the listening, reading and writing strategies you have learned, and reflect on how the assessment went.',
      activities: [
        {
          id: 'a1', short: 'Get ready', minutes: 5, grouping: 'Alone',
          title: 'Before the assessment: What to bring and expect',
          goal: 'Check you have what you need — and follow your teacher’s and the DEC team’s instructions.',
          blocks: [
            { type: 'key', tone: 'warn', title: 'Follow your teacher’s and the DEC team’s instructions', points: [
              'The <b>official instructions</b> (time, place, what is allowed) come from your teacher and the DEC team — not from this page.',
              'If something is not clear, <b>ask your teacher</b> before the assessment starts.'
            ]},
            { type: 'checklist', id: 'a1c', title: 'My checklist', meter: ['ready', 'Ready — good luck!'], items: [
              'I know the time and the room (or online link) for the assessment.',
              'My laptop is charged, and I have my charger.',
              'I have headphones that work with my laptop.',
              'I have my student card.',
              'I can sign in to the systems I need (I checked my password).',
              'I have water, and I arrive a little early.',
              'I have read or listened to the instructions from my teacher and the DEC team.'
            ]},
            { type: 'tip', text: 'Feeling nervous is normal. Breathe slowly, read each instruction carefully, and do one task at a time.' },
            { type: 'teacher', ref: 'w5d2-t1' }
          ]
        },
        {
          id: 'a2', short: 'Strategies', minutes: 20, grouping: 'Alone',
          title: 'Quick review: Strategies from DEC15',
          goal: 'Remind yourself of the listening, reading and writing strategies from Weeks 1–5.',
          blocks: [
            { type: 'key', title: 'Listening', points: [
              '<b>Predict</b> before you listen: read the headings and questions first.',
              'Listen for the <b>gist</b> first, then for <b>detail</b>.',
              'Take <b>short notes</b>: key words, abbreviations, symbols and numbers — not full sentences.'
            ]},
            { type: 'key', title: 'Reading', points: [
              '<b>Skim</b> for the main idea (title, abstract, topic sentences); <b>scan</b> for details (names, numbers).',
              'Notice the writer’s <b>position</b> and how they support it with evidence.',
              'Keep the <b>author and year</b> with every note.'
            ]},
            { type: 'key', title: 'Writing', points: [
              'Analyse the <b>question</b> and decide your <b>position</b> before you write.',
              'Plan: <b>thesis</b> + one main idea per body paragraph + evidence from the sources.',
              '<b>Paraphrase</b> and <b>synthesise</b> sources; <b>cite</b> every idea from a source.',
              'Use <b>evaluative language</b> and <b>hedging</b> to show your voice. Leave time to <b>check</b>.'
            ]},
            { type: 'flip', title: 'Six skills from Weeks 1–5 — say what you remember, then turn the card', hint: 'Explain the skill in one sentence before you turn.', items: [
              { front: 'Note-taking', back: 'Use headings, key words, abbreviations and symbols. Note only what answers the question. Paraphrase as you write.', tag: 'Listening · Reading' },
              { front: 'Paraphrasing', back: 'Change the words (synonyms), the word forms and the sentence structure — but keep the meaning. Still cite the source.', tag: 'Writing' },
              { front: 'Synthesising', back: 'Connect ideas from two or more sources: <i>Similarly, …</i> · <i>In contrast, …</i> · multi-source citations (A, 2021; B, 2024).', tag: 'Writing' },
              { front: 'Position', back: 'State your thesis in the introduction, support it in every topic sentence, and restate it in the conclusion.', tag: 'Writing' },
              { front: 'Hedging', back: 'Make claims careful: <i>may, might, could, suggest, tend to, potentially</i>.', tag: 'Writing · Reading' },
              { front: 'Referencing', back: 'APA author–date: narrative <i>Gunders (2024) argues…</i> or parenthetical <i>(Berti et al., 2021)</i>. Use <i>et al.</i> for three or more authors.', tag: 'Writing' }
            ]},
            { type: 'teacher', ref: 'w5d2-t2' }
          ]
        },
        {
          id: 'a3', short: 'Reflect', minutes: 10, grouping: 'Alone',
          title: 'After the assessment: Reflection',
          goal: 'Think about what went well and what you will do next time.',
          blocks: [
            { type: 'tip', text: 'Do this <b>after</b> the assessment is finished. Don’t write about the assessment questions — write about <b>how you worked</b>.' },
            { type: 'fields', title: 'My reflection', fields: [
              { id: 'a3-1', label: 'Which strategies helped me most today?', placeholder: 'Reading the questions before listening…', rows: 3 },
              { id: 'a3-2', label: 'What was difficult? Why?', placeholder: 'Managing my time in the writing part…', rows: 3 },
              { id: 'a3-3', label: 'One thing I will do differently next time', placeholder: 'Plan for 10 minutes before I write…', rows: 2 }
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
