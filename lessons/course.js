/* DEC15 course map — the list of weeks and lessons.
   ADD A LESSON IN 3 STEPS
   1. Copy lessons/_template.js to lessons/weekN/wNdM.js and write the content.
   2. Put any new protected texts in lessons/weekN/sources.js (window.DEC15_SOURCES).
   3. Below, change the day's status to 'ready' and list its files in `scripts`.
      `parts` are the Teacher’s Book lessons shown in the side panel — use the SAME code and name as the
      Teacher’s Book (e.g. '15A Discussion skills') so students can find them; `stages` are the matching
      section ids (so a part can open its stage directly); `tones` are the stages’ colours
      (the same `tone` as each section in the lesson file), so the side panel and the course map
      show each lesson code in its colour before the day is opened.
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
          parts: ['16A Homework follow-up: AST: AI', '17A AST: Feedback literacy: Taking action', '18A AST: Criticality: Engaging with sources', '19A Academic writing skills workshop setup'],
          stages: ['ai', 'feedback', 'critical', 'writing'], tones: ['amber', 'teal', 'blue', 'clay'],
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
          parts: ['1A Writing an introduction', '1A Writing body paragraphs', '1A Writing a conclusion', '2A Academic writing skills 1'],
          stages: ['intro', 'body', 'close', 'voices'], tones: ['amber', 'teal', 'plum', 'green'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d1.js'] },
        { id: 'w3d2', day: 2, status: 'ready', title: 'Reading and listening for solutions', art: 'reading',
          parts: ['4A Discussion: Potential solutions to food insecurity', '5A Reading to write', '6A Listening to write'],
          stages: ['solve', 'read', 'listen'], tones: ['amber', 'plum', 'teal'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d2.js'] },
        { id: 'w3d3', day: 3, status: 'ready', title: 'Bringing sources together', art: 'research',
          parts: ['7A Mediation', '8A Academic writing skills 2', '9A Research skills applied'],
          stages: ['mediate', 'nouns', 'research'], tones: ['teal', 'plum', 'amber'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d3.js'] },
        { id: 'w3d4', day: 4, status: 'ready', title: 'Practice assessment day', art: 'assessment',
          parts: ['11A AST Criticality: Engaging with sources', '12A Integrated Writing Practice Assessment', '13A Building rapport'],
          stages: ['critical', 'iwa', 'rapport'], tones: ['teal', 'clay', 'amber'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d4.js'] },
        { id: 'w3d5', day: 5, status: 'ready', title: 'Negotiate, work as a team, write better prompts', art: 'discussion',
          parts: ['15A Discussion skills', '16A AST: Group work skills', '17A AST: Digital Literacy and AI: Prompts', '18A Building rapport'],
          stages: ['negotiate', 'teamwork', 'prompts', 'rapport'], tones: ['teal', 'clay', 'blue', 'amber'],
          scripts: ['lessons/week3/sources.js', 'lessons/week3/w3d5.js'] }
      ]
    },
    {
      n: 4, theme: 'Solutions to food waste',
      image: 'assets/week4/hero-week4.svg',
      imageAlt: 'Illustration: a smartphone showing a fridge-inventory app, a small solar-powered cold room, an upcycled biscuit with grain and a tidy shopping list — practical solutions to food waste.',
      summary: 'Apps, cold rooms and upcycled food: evaluate solutions, negotiate in your second Research Summary Discussion and plan an argument essay.',
      days: [
        { id: 'w4d1', day: 1, status: 'ready', title: 'Prepare, listen and read to speak', art: 'listening',
          parts: ['1A Research summary discussion preparation', '2A Listening to speak', '3A Reading to speak'],
          stages: ['rsd', 'listen', 'read'], tones: ['teal', 'amber', 'plum'],
          scripts: ['lessons/week4/sources.js', 'lessons/week4/w4d1.js'] },
        { id: 'w4d2', day: 2, status: 'ready', title: 'Bring sources together and negotiate', art: 'research',
          parts: ['4A Mediation + Academic writing skills 1', '5A Discussion skills 1'],
          stages: ['mediate', 'discuss'], tones: ['blue', 'teal'],
          scripts: ['lessons/week4/sources.js', 'lessons/week4/w4d2.js'] },
        { id: 'w4d3', day: 3, status: 'ready', title: 'Negotiate, stay flexible, take a stance', art: 'discussion',
          parts: ['6A Discussion skills 2', '7A AST: Criticality: Engaging with sources', '8A Academic writing skills 2', '9A Building rapport'],
          stages: ['options', 'flex', 'stance', 'rapport'], tones: ['teal', 'blue', 'clay', 'amber'],
          scripts: ['lessons/week4/sources.js', 'lessons/week4/w4d3.js'] },
        { id: 'w4d4', day: 4, status: 'ready', title: 'Research Summary Discussion 2', art: 'group',
          parts: ['10A Research summary discussions'],
          stages: ['rsd'], tones: ['clay'],
          scripts: ['lessons/week3/sources.js', 'lessons/week4/sources.js', 'lessons/week4/w4d4.js'] },
        { id: 'w4d5', day: 5, status: 'ready', title: 'Feedback, essay planning and AI', art: 'feedback',
          parts: ['11A Feedback session on Week 3 Integrated Writing Practice Assessment', '12A Academic writing skills Workshop set up', '13A AST: Digital literacy and AI', '14A Teacher feedback on research summary discussions'],
          stages: ['feedback', 'plan', 'ai', 'rsdfb'], tones: ['teal', 'clay', 'amber', 'plum'],
          scripts: ['lessons/week3/sources.js', 'lessons/week4/sources.js', 'lessons/week4/w4d5.js'] }
      ]
    },
    {
      n: 5, theme: 'Assessment and frameworks',
      image: 'assets/week5/hero-week5.svg',
      imageAlt: 'Illustration: six coloured pillars standing in a grain field beside an open notebook, a pen and a finishing ribbon — the six dimensions of food security and the end of DEC15.',
      summary: 'Write a full argument essay together, sit the LRW assessment, then use the six-dimensional food security framework to evaluate real solutions.',
      days: [
        { id: 'w5d1', day: 1, status: 'ready', title: 'Academic writing skills workshop', art: 'writing',
          parts: ['1A Academic writing skills workshop'],
          stages: ['workshop'], tones: ['clay'],
          scripts: ['lessons/week3/sources.js', 'lessons/week4/sources.js', 'lessons/week5/w5d1.js'] },
        { id: 'w5d2', day: 2, status: 'ready', title: 'LRW assessment', art: 'assessment',
          parts: ['2A LRW assessment'],
          stages: ['lrw'], tones: ['blue'],
          scripts: ['lessons/week5/w5d2.js'] },
        { id: 'w5d3', day: 3, status: 'ready', title: 'Frameworks: read and listen', art: 'reading',
          parts: ['3A Discussion skills', '4A Reading to write', '5A Listening to write'],
          stages: ['frame', 'read', 'listen'], tones: ['teal', 'plum', 'amber'],
          scripts: ['lessons/week5/sources.js', 'lessons/week5/w5d3.js'] },
        { id: 'w5d4', day: 4, status: 'ready', title: 'Mediation and applying the framework', art: 'research',
          parts: ['6A Mediation', '7A Applying the frameworks'],
          stages: ['mediate', 'apply'], tones: ['blue', 'green'],
          scripts: ['lessons/week5/sources.js', 'lessons/week5/w5d4.js'] },
        { id: 'w5d5', day: 5, status: 'ready', title: 'Present, reflect and celebrate', art: 'group',
          parts: ['8A Applying the frameworks: Presentations', '9A AST: AI reflection', '10A STAR moment'],
          stages: ['present', 'ai', 'star'], tones: ['clay', 'amber', 'green'],
          scripts: ['lessons/week5/sources.js', 'lessons/week5/w5d5.js'] }
      ]
    }
  ]
};
