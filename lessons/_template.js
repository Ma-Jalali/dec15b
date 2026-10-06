/* DEC15 · LESSON TEMPLATE — copy this file to start a new lesson.

   HOW TO ADD A LESSON (e.g. Week 3, Day 1)
   1. Copy this file to  lessons/week3/w3d1.js  and change id, week, day and the content.
   2. If the lesson uses new readings or a new listening, put them in  lessons/week3/sources.js
      (same format as lessons/week2/sources.js: window.DEC15_SOURCES = [ ... ]).
   3. In  lessons/course.js  find the day, set  status: 'ready'  and list the files, e.g.
        scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d1.js']
      Optionally set  art: 'reading'  (the picture on the course map card).
   4. In index.html and js/config.js raise the version number (?v=2.5 → ?v=2.6) so browsers
      download the new files.

   RULES THAT PROTECT STUDENTS' SAVED WORK
   - id ('w3d1') and every activity / field id are the keys of saved answers. Never rename them
     after students have started. Add new ids instead.
   - Ids must be unique inside the lesson (use a letter per stage: a1, a2 … b1, b2 …).

   LOOK OF EACH STAGE
   tone: 'amber' | 'teal' | 'blue' | 'clay' | 'plum' | 'green'                       (colour)
   art:  'ai' | 'feedback' | 'critical' | 'writing' | 'reading' | 'listening' |
         'discussion' | 'research' | 'assessment' | 'group'                        (illustration)

   BLOCK TYPES (see lessons/week2/w2d5.js for many real examples)
     key        { type: 'key', title, points: [..], numbered?, tone?: 'warn', compare?: [{ label, text, eg }] }
     steps      { type: 'steps', title?, items: [{ who: 'alone'|'pair'|'group'|'class', text }] }
     talk       { type: 'talk', title?, prompts: [..] }
     language   { type: 'language', title?, groups: [{ label, phrases: [..] }] }
     model      { type: 'model', title, before?, text?, rows?: [[k, v]], list?: [..], note? }
     cards      { type: 'cards', title?, numbered?, items: [{ label?, text }] }
     quiz       { type: 'quiz', id, title?, shared?: [options], items: [{ q, options?, answer, why }] }
     fields     { type: 'fields', title?, fields: [{ id, label, placeholder?, rows? }] }
     table      { type: 'table', id, title?, columns: [..], fixed?: [row labels], rows?, extraRows? }
     choose     { type: 'choose', id, title, options: [..] }
     question   { type: 'question' }                         the essay question with highlighting tools
     passage    { type: 'passage', id, title, text }         a paragraph students can highlight
     listening  { type: 'listening', source, title, videoId, start, clip, transcripts: [[sourceId, label]] }
     plan       { type: 'plan' }                             the essay outline
     checklist  { type: 'checklist', id, title, items: [..] }
     sources    { type: 'sources', ids: ['reading1', ...] }  buttons that open course texts
     order      { type: 'order', id, title, items: [..in the CORRECT order..], ends?: ['Most effective', 'Least effective'], why? }
                students see the items mixed and move them up/down, then check (ranking, sequencing)
     grid       { type: 'grid', id, title, rows: [..], columns: [..], options: ['Agree', 'Doesn’t mention'],
                  answers?: [[row 1 answers…], …], given?: { '0-0': 'Agree' } }   a table of drop-down choices
     figure     { type: 'figure', src, alt, caption?, credit?, size?: 'small' | 'wide' }   a picture or diagram
     tip        { type: 'tip', text }
     teacher    { type: 'teacher', text }                    only shown in Teacher view
   answers: { title?, items: [[label, answer], ...] } — opens after the student tries. */

window.DEC15_LESSON = {
  id: 'w3d1',
  week: 3, day: 1,
  title: 'Lesson title',
  duration: 'About 4 hours',                 // optional, shown on the overview
  question: 'The protected essay question — copy it exactly from the course materials.',
  questionKind: 'Essay question',            // or e.g. 'Focus question' when the day has no essay question
  questionLabel: 'This week’s essay question',  // the label above the question on the overview
  wordTarget: '450–600 words',
  journey: 'One or two sentences: what students will be able to do by the end of the day.',
  image: 'assets/food-editorial.webp',       // optional hero picture
  imageAlt: 'Describe the picture for screen readers.',
  finish: { title: 'Next', text: 'What comes after this lesson' },

  sections: [
    {
      id: 'reading', number: '01', code: '5A', minutes: 60,
      tone: 'plum', art: 'reading',
      title: 'Stage title',
      subtitle: 'Skill or Teacher’s Book focus',
      outcome: 'What students can do after this stage.',
      activities: [
        {
          id: 'r1', short: 'Warm-up', minutes: 10, grouping: 'Pair',
          title: 'Activity title',
          goal: 'One clear goal.',
          blocks: [
            { type: 'steps', items: [
              { who: 'alone', text: 'Read the question.' },
              { who: 'pair', text: 'Compare your ideas.' }
            ] },
            { type: 'key', title: 'The one idea to remember', points: ['Point one', 'Point two'] },
            { type: 'fields', fields: [{ id: 'r1-1', label: 'My idea', placeholder: 'Write here…', rows: 3 }] }
          ],
          answers: { items: [['My idea', 'A model answer.']] }
        }
      ]
    }
  ],

  extras: [],      // optional practice activities (same format as activities)
  glossary: [      // [word, meaning, example]
    ['example', 'something that shows what a rule or idea means', 'Give one example from the reading.']
  ]
};
