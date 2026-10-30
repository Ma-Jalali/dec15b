/* DEC10 · LANGUAGE LAB · LESSON TEMPLATE — copy this file to start a new grammar, APA or vocabulary lesson.
   1. Copy to dec10/lessons/lab/<strand>/<name>.js (e.g. dec10/lessons/lab/vocab/green-jobs.js).
   2. Change the id (starts with "d10lab-", never changes later) and write the four stages below.
   3. In dec10/lessons/course.js add it to the strand's lessons: { id, status: 'ready', title, sub, minutes, level, scripts: ['dec10/lessons/lab/…js'] }.
   4. Raise the version (index.html + js/config.js) and run  node tools/build-sw.js .
   Every block type of the course works here (see lessons/_template.js, js/play.js and js/kit.js).

   THE FOUR STAGES (same in every lab lesson, so students always know where they are)
     1 Warm-up        (pre)     5–8 min   wake up what students know; meet the language in a context (a chat, two paragraphs, a bet, riddles)
     2 Notice and learn (while) 12–20 min guided discovery: examples first, then the rule (figure, key, pairs, sort, flip cards, language bank)
     3 Practise       (controlled) 10–15 min instant feedback (cloze, quiz, spot, sort, match, order)
     4 Use it         (freer)   8–12 min  personal speaking and writing with a detect box (lights for the target language, red chips for common errors),
                                          a pair check and a can-do checklist
   For VOCABULARY, a good shape is: 1 predict words from a picture or topic · 2 meaning from context (a short text with [[words]] in a spot block),
   word families and collocations (language bank, sort by part of speech) · 3 match, cloze, flip cards · 4 talk prompts and a detect box with the new words.

   CONTEXT: set each lesson in a course topic (digital footprint, green jobs, ecotourism, globalisation, fashion, circular economy). */
window.DEC15_LESSON = {
  id: 'd10lab-NEW', week: null, day: null,
  title: 'Lesson title',
  duration: 'About 45 minutes',
  questionKind: 'Can-do', questionLabel: 'By the end of this lesson you can',
  question: 'one sentence: what students can do at the end.',
  journey: 'One or two sentences: why this matters for DEC10.',
  goalShort: 'clear, accurate writing',
  image: 'dec10/assets/lab/hero-grammar.svg',   // or hero-apa.svg
  imageAlt: 'Describe the picture.',
  finish: { title: 'Next lesson', text: 'Title of the next lesson' },
  sections: [
    { id: 'warm', number: '1', minutes: 7, tone: 'amber', art: 'dec10/assets/lab/s-warm.svg', title: 'Warm-up', subtitle: '…', outcome: '…',
      activities: [{ id: 'x-w1', short: 'Warm-up', minutes: 7, grouping: 'Alone → Pair', title: '…', goal: '…', blocks: [
        { type: 'do', n: 1, who: 'alone', text: '…' }
      ] }] },
    { id: 'learn', number: '2', minutes: 15, tone: 'blue', art: 'dec10/assets/lab/s-learn.svg', title: 'Notice and learn', subtitle: '…', outcome: '…',
      activities: [{ id: 'x-l1', short: 'Learn', minutes: 15, grouping: 'Alone', title: '…', goal: '…', blocks: [
        { type: 'key', title: 'The rule', points: ['…'] }
      ] }] },
    { id: 'practise', number: '3', minutes: 12, tone: 'teal', art: 'dec10/assets/lab/s-practise.svg', title: 'Practise', subtitle: 'Controlled practice with instant feedback', outcome: '…',
      activities: [{ id: 'x-p1', short: 'Practise', minutes: 12, grouping: 'Alone', title: '…', goal: '…', blocks: [
        { type: 'cloze', id: 'x-p1-cl', title: '…', options: [['is', 'are']], text: 'The results {{1}} clear.', answers: ['are'] }
      ] }] },
    { id: 'use', number: '4', minutes: 10, tone: 'plum', art: 'dec10/assets/lab/s-use.svg', title: 'Use it', subtitle: '…', outcome: '…',
      activities: [{ id: 'x-u1', short: 'Write', minutes: 10, grouping: 'Alone → Pair', title: '…', goal: '…', blocks: [
        { type: 'detect', id: 'x-u1-dt', title: '…', checks: [{ label: '…', any: ['…'] }], items: [{ rows: 6, model: '…' }] },
        { type: 'checklist', id: 'x-u1-can', title: 'Can you do it?', items: ['…'] }
      ] }] }
  ],
  extras: [],
  glossary: []
};
