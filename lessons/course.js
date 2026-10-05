/* DEC15 course map — the list of weeks and lessons.
   ADD A LESSON IN 3 STEPS
   1. Copy lessons/_template.js to lessons/weekN/wNdM.js and write the content.
   2. Put any new protected texts in lessons/weekN/sources.js (window.DEC15_SOURCES).
   3. Below, change the day's status to 'ready' and list its files in `scripts`.
   The id (e.g. 'w3d1') is used to save students' work: never change it after students start. */
window.DEC15_COURSE = {
  code: 'DEC15',
  title: 'Direct Entry Course · 5 weeks',
  topic: 'Food insecurity',
  defaultLesson: 'w2d5',
  // The five weeks shown on the course map (home page). Only weeks listed in `weeks` below have lessons in the app.
  map: [
    { n: 1, label: 'The food crisis', sub: 'Causes and effects' },
    { n: 2, label: 'Food waste', sub: 'Research Summary 1' },
    { n: 3, label: 'Food loss', sub: 'Practice assessment' },
    { n: 4, label: 'Solutions', sub: 'Research Summary 2' },
    { n: 5, label: 'Assessment', sub: 'Listening, Reading & Writing' }
  ],
  weeks: [
    {
      n: 2, theme: 'Food waste',
      summary: 'Why so much food is wasted, and what this means for people who do not have enough to eat.',
      days: [
        { id: 'w2d5', day: 5, status: 'ready', title: 'From evidence to argument', art: 'writing',
          parts: ['Use AI wisely', 'Turn feedback into action', 'Question the evidence', 'Plan your argument essay'],
          scripts: ['lessons/week2/sources.js', 'lessons/week2/video-script.js', 'lessons/week2/w2d5.js'] }
      ]
    },
    {
      n: 3, theme: 'Solutions to food loss',
      summary: 'From problems to solutions: strategies that prevent food loss, plus your first practice assessment.',
      days: [
        { id: 'w3d1', day: 1, status: 'soon', title: 'Academic writing workshop',
          parts: ['Writing skills workshop', 'Academic writing skills 1', 'Reporting verbs and referencing'] },
        { id: 'w3d2', day: 2, status: 'soon', title: 'Reading and listening to write',
          parts: ['Solutions to food insecurity', 'Reading to write', 'Listening to write'] },
        { id: 'w3d3', day: 3, status: 'soon', title: 'Bringing sources together',
          parts: ['Mediation', 'Academic writing skills 2', 'Research skills applied'] },
        { id: 'w3d4', day: 4, status: 'soon', title: 'Practice assessment day',
          parts: ['Engaging with sources', 'Integrated Writing Practice Assessment', 'Building rapport'] },
        { id: 'w3d5', day: 5, status: 'soon', title: 'Discussion and group work',
          parts: ['Discussion skills', 'Group work skills', 'AI prompts'] }
      ]
    }
  ]
};
