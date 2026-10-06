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
      image: 'assets/week3/hero-week3.svg',
      imageAlt: 'Illustration: a crate of imperfect fresh produce, a paper grocery bag with bread, a jar of lentils and a seedling in a pot — food that is saved and shared instead of wasted.',
      summary: 'From problems to solutions: strategies that prevent food loss, plus your first practice assessment.',
      days: [
        { id: 'w3d1', day: 1, status: 'ready', title: 'Write your first argument essay', art: 'writing',
          parts: ['Write your introduction', 'Build your body paragraphs', 'Conclude, check and polish', 'Your voice and source voices'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d1.js'] },
        { id: 'w3d2', day: 2, status: 'ready', title: 'Reading and listening for solutions', art: 'reading',
          parts: ['Solve some problems', 'Read: preventing food loss and waste', 'Listen: the future of food banks?'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d2.js'] },
        { id: 'w3d3', day: 3, status: 'ready', title: 'Bringing sources together', art: 'research',
          parts: ['Connect three sources', 'Write with nouns', 'Research solutions'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d3.js'] },
        { id: 'w3d4', day: 4, status: 'ready', title: 'Practice assessment day', art: 'assessment',
          parts: ['Choose what helps your answer', 'Integrated Writing Practice Assessment', 'Building rapport'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d4.js'] },
        { id: 'w3d5', day: 5, status: 'ready', title: 'Negotiate, work as a team, write better prompts', art: 'discussion',
          parts: ['Negotiate in a discussion', 'Work well as a team', 'Write better AI prompts', 'Building rapport'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d5.js'] }
      ]
    }
  ]
};
