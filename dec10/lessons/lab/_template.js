/* DEC10 · LANGUAGE LAB · LESSON TEMPLATE — copy this file to start a new grammar, APA or vocabulary lesson.
   1. Copy to dec10/lessons/lab/<strand>/<name>.js (e.g. dec10/lessons/lab/vocab/green-jobs.js).
   2. Change the id (starts with "d10lab-", never changes later) and write the four tabs below.
   3. In dec10/lessons/course.js add it to the strand's lessons: { id, status: 'ready', title, sub, minutes, level, scripts: ['dec10/lessons/lab/…js'] }.
   4. Raise the version (index.html + js/config.js) and run  node tools/build-sw.js .

   A LAB LESSON IS ONE PAGE WITH FOUR TABS (one section, four activities). Students study alone, so every step says what to do
   by yourself ("who: 'alone'"), and every question has an answer they can open.
     Warm-up            a short, serious self-check: a bet, a ranking, “correct or not?”, two texts to compare + a reflection box
     Learn              the PRESENTATION, as a teacher would explain it: a short key intro, then numbered rule cards
                        { type: 'rule', n, title, explain, form, examples: [['ok'|'no', html, why]], note, check: { q, a } }
                        (one idea per card, ✓ and ✗ examples, a “check yourself” question), then a summary model
     Practise           controlled practice, easy → harder: Part 1 Recognise (spot, sort, match) · Part 2 Choose (cloze, quiz)
                        · Part 3 Correct ({ type: 'rewrite', id, items: [{ q, accept: [...], model, why }] }: type the fixed sentence)
     Use it             freer practice: a detect box (lights for the target language, red chips for common errors),
                        a self-check step and a can-do checklist
   Inside a tab, { type: 'part', n, title, goal } starts Part 1, Part 2 … when the tab has more than one task.
   For VOCABULARY: Warm-up predict words from a topic · Notice: meaning from context (spot block), word families, collocations
   (language bank, sort) · Practise: match, cloze, flip · Use it: speaking prompts + a detect box with the new words.
   Set each lesson in a course topic (digital footprint, green jobs, ecotourism, globalisation, fashion, circular economy). */
window.DEC15_LESSON = {
  id: 'd10lab-NEW', week: null, day: null,
  title: 'Lesson title',
  duration: 'About 45 minutes',
  questionKind: 'Can-do', questionLabel: 'By the end of this lesson you can',
  question: 'one sentence: what students can do at the end.',
  journey: 'One or two sentences: why this matters for DEC10.',
  image: 'dec10/assets/lab/hero-grammar.svg', imageAlt: 'Describe the picture.',
  sections: [{
    id: 'lesson', number: '1', minutes: 45, tone: 'teal', art: 'dec10/assets/lab/s-learn.svg',
    title: 'Lesson title', subtitle: 'Warm-up · Learn · Practise · Use it', outcome: 'the can-do sentence again',
    activities: [
      { id: 'x-warm', short: 'Warm-up', minutes: 7, grouping: 'Self-study', art: 'dec10/assets/lab/s-warm.svg', title: '…', goal: '…', blocks: [
        { type: 'do', n: 1, who: 'alone', text: 'Test yourself first …' }
      ], answers: { items: [['Question', 'Answer']] } },
      { id: 'x-learn', short: 'Learn', minutes: 15, grouping: 'Self-study', art: 'dec10/assets/lab/s-learn.svg', title: '…', goal: '…', blocks: [
        { type: 'key', title: 'What is …?', points: ['…'] },
        { type: 'rule', n: 1, title: 'The first rule', explain: '…', form: '…', examples: [['ok', '…'], ['no', '…', 'why it is wrong']], check: { q: '…', a: '…' } }
      ] },
      { id: 'x-practise', short: 'Practise', minutes: 12, grouping: 'Self-study', art: 'dec10/assets/lab/s-practise.svg', title: '…', goal: '…', blocks: [
        { type: 'cloze', id: 'x-p1-cl', title: '…', options: [['is', 'are']], text: 'The results {{1}} clear.', answers: ['are'] }
      ] },
      { id: 'x-use', short: 'Use it', minutes: 10, grouping: 'Self-study', art: 'dec10/assets/lab/s-use.svg', title: '…', goal: '…', blocks: [
        { type: 'detect', id: 'x-u1-dt', title: '…', checks: [{ label: '…', any: ['…'] }], items: [{ rows: 6, model: '…' }] },
        { type: 'checklist', id: 'x-u1-can', title: 'Can you do it?', items: ['…'] }
      ] }
    ]
  }],
  extras: [],
  glossary: []
};
