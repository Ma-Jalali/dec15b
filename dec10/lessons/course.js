/* DEC10 course map — the list of weeks and lessons. Same app as DEC15 (js/, css/, assets/ at the top of the site);
   only the course map and the lessons in this folder are DEC10's own. Students open  .../dec10.html  (or .../dec10/).
   ADD A LESSON IN 3 STEPS
   1. Copy lessons/_template.js (at the top of the site) to dec10/lessons/weekN/d10wNdM.js and write the content.
   2. Put any new protected texts in dec10/lessons/weekN/sources.js (window.DEC15_SOURCES).
      Pictures go in dec10/assets/weekN/ — write their paths from the top of the site: 'dec10/assets/week1/….svg'.
   3. Below, change the day's status to 'ready' and list its files in `scripts` (paths start with 'dec10/').
   LESSON IDS START WITH "d10" (d10w1d1, d10w1d2 …). DEC15 and DEC10 save into the same Supabase project, and the id is
   the key of every student's saved work and class wall, so a DEC10 id must never be the same as a DEC15 id (w3d1).
   Never change an id after students start. */
window.DEC15_COURSE = {
  id: 'dec10',          // keeps the DEC10 class (class list, chat, announcements, boards) apart from DEC15 — never change
  root: 'dec10/',       // where this course's lessons and pictures live
  code: 'DEC10',
  title: 'Direct Entry Course · 10 weeks',
  topic: 'Academic English',
  intro: 'Ten weeks of academic English. Pick up where you left off, or open any lesson below.',
  heroImage: 'dec10/assets/week1/hero-d10w1d1.svg',
  heroAlt: 'Illustration: profit, people and planet as three overlapping circles on a tablet, with outline notes in a notebook.',
  // The course card under the logo in the side panel.
  sideCard: { name: 'Direct Entry Course', note: '10 weeks' },
  // Settings (gear at the foot of the side panel) → Side panel colour. The first one is the default.
  // Names match css/courses.css; each student's choice is kept on their device.
  sideColours: [['light', 'Light', '#ffffff'], ['charcoal', 'Charcoal', '#424242'], ['black', 'Black', '#000000'], ['navy', 'Navy', '#1a355e'], ['eucalypt', 'Eucalypt', '#4f7d74']],
  defaultLesson: 'd10w1d1',
  // loaded before every lesson: the Course calendar and Assessments pages (side panel)
  scripts: ['dec10/lessons/guide.js'],
  /* LANGUAGE LAB (side panel → Language Lab, #/lab): short self-study lessons outside the weekly plan, to fill gaps.
     Built for self-study (a teacher can also use one in class). Every lesson is ONE page with four tabs:
       Warm-up (a short self-check) · Learn · Practise (controlled) · Use it (freer practice). The Lab page shows the strands
       in this order as fold-out lists.
     ADD A LAB LESSON IN 3 STEPS
     1. Copy dec10/lessons/lab/_template.js to dec10/lessons/lab/<strand>/<name>.js and write the content.
     2. Add an entry to the strand's lessons below: { id, status: 'ready', title, sub, minutes, level, scripts: [path] }.
        Lesson ids start with "d10lab-" and never change after students start (they are the key of saved work).
     3. Raise the version (index.html + js/config.js) and run  node tools/build-sw.js .
     A new strand (e.g. Pronunciation) is one more object in strands. A strand with no ready lessons shows "Coming soon". */
  lab: {
    title: 'Language Lab',
    intro: 'Short self-study lessons to fill the gaps. Open a topic, then choose a lesson. Each lesson has four steps: Warm-up, Learn, Practise, Use it.',
    strands: [
      { id: 'apa', title: 'Referencing · APA 7', short: 'APA', tone: 'clay', icon: 'quote', blurb: 'Show where your ideas come from, the way your university expects.', lessons: [
        { id: 'd10lab-cite', status: 'ready', title: 'In-text citations', sub: 'Integral or non-integral? One, two or three authors?', minutes: 55, level: 'All', scripts: ['dec10/lessons/lab/apa/cite.js'] },
        { id: 'd10lab-verbs', status: 'ready', title: 'Reporting verbs', sub: 'states, argues, claims, found … and what each one says', minutes: 50, level: 'B2', scripts: ['dec10/lessons/lab/apa/verbs.js'] }
      ] },
      { id: 'grammar', title: 'Grammar', short: 'Grammar', tone: 'teal', icon: 'grammar', blurb: 'Accurate sentences for your writing and your seminars.', lessons: [
        { id: 'd10lab-sva', status: 'ready', title: 'Is or are? Subject–verb agreement', sub: 'Find the real subject, then choose the verb', minutes: 60, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/sva.js'] },
        { id: 'd10lab-preps', status: 'ready', title: 'Words that travel together', sub: 'Dependent prepositions: aware of, rely on, solution to', minutes: 50, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/preps.js'] },
        { id: 'd10lab-link', status: 'ready', title: 'Linking ideas', sub: 'And, but, so … However, Therefore, In addition', minutes: 55, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/link.js'] },
        { id: 'd10lab-rel', status: 'ready', title: 'Relative clauses', sub: 'who, which, whose, where — and no extra pronoun', minutes: 60, level: 'B2', scripts: ['dec10/lessons/lab/grammar/rel.js'] },
        { id: 'd10lab-runon', status: 'ready', title: 'Run-ons and comma splices', sub: 'Five ways to join or split two sentences', minutes: 55, level: 'B1+', scripts: ['dec10/lessons/lab/grammar/runon.js'] }
      ] },
      { id: 'vocab', title: 'Vocabulary', short: 'Vocabulary', tone: 'plum', icon: 'words', blurb: 'Academic words and collocations for each week’s topic.', soon: 'Word families, collocations and academic words for each week’s topic are on the way.', lessons: [] }
    ]
  },
  // The ten weeks shown on the course map (home page). Change label (short!) and sub when the course outline is final.
  map: [
    { n: 1, label: 'Foundation', sub: 'Sustainability frameworks' },
    { n: 2, label: 'Digital footprint', sub: 'Our digital carbon footprint' },
    { n: 3, label: 'Future work', sub: 'The workforce of the future' },
    { n: 4, label: 'Eco-tourism', sub: 'Practice writing assessment' },
    { n: 5, label: 'Globalisation', sub: 'LRW Assessment 1' },
    { n: 6, label: 'Green chemistry', sub: 'Final seminar' },
    { n: 7, label: 'Fashion', sub: 'Interactive Presentation' },
    { n: 8, label: 'Circular economy', sub: 'Integrated writing' },
    { n: 9, label: 'Frameworks', sub: 'LRW Assessment 2' },
    { n: 10, label: 'Consolidation', sub: 'Interactive Discussion' }
  ],
  weeks: [
    {
      n: 1, theme: 'Foundation: sustainability frameworks',
      summary: 'Three frameworks for thinking about sustainability — the triple bottom line, IPAT and the DTM — and the skills to learn from them: note-taking, paraphrasing, summarising and the Academic Success Toolkit.',
      image: 'dec10/assets/week1/hero-d10w1d1.svg',
      imageAlt: 'Illustration: profit, people and planet as three overlapping circles on a tablet, with outline notes in a notebook.',
      days: [
        { id: 'd10w1d1', day: 1, status: 'ready', title: 'Listen, note, think', art: 'listening',
          parts: ['1A Orientation', '2A Building rapport', '3A Listening and note-taking', '4A Reading and note-taking homework', '5A Listening assessment preparation homework'],
          stages: ['orientation', 'rapport', 'listening', 'reading', 'testlab'], tones: ['blue', 'clay', 'teal', 'amber', 'plum'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d1.js'] },
        { id: 'd10w1d2', day: 2, status: 'ready', title: 'Solve it, plan it, argue it', art: 'discussion',
          parts: ['6A Reading and listening to speak', '7A Introduction to Seminar and Interactive Presentation', '8A Academic writing skills: Introduction to rhetorical functions', '9A AST: Digital literacy and online tools homework'],
          stages: ['frameworks', 'seminar', 'functions', 'digital'], tones: ['teal', 'clay', 'plum', 'blue'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d2.js'] },
        { id: 'd10w1d3', day: 3, status: 'ready', title: 'Your words, your skills, your feedback', art: 'feedback',
          parts: ['10A Academic writing skills: Paraphrasing', '11A Introducing the AST framework', '12A AST: Introduction to Feedback Literacy', '13A AST: AI use in DEC homework'],
          stages: ['paraphrase', 'ast', 'feedback', 'ai'], tones: ['clay', 'green', 'teal', 'amber'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d3.js'] },
        { id: 'd10w1d4', day: 4, status: 'ready', title: 'Voices, video and research', art: 'research',
          parts: ['14A Academic writing skills: rhetorical functions', '15A Responding-to-feedback video', '16A Seminar: opening remarks check-in', '17A AST: Research skills'],
          stages: ['voices', 'video', 'checkin', 'research'], tones: ['plum', 'teal', 'clay', 'green'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d4.js'] },
        { id: 'd10w1d5', day: 5, status: 'ready', title: 'Diagnostic and summarising', art: 'writing',
          parts: ['18A Diagnostic assessment', '19A Academic writing skills: Summarising', '20A AST: Homework follow-up: AI use in DEC'],
          stages: ['diagnostic', 'summary', 'aitalk'], tones: ['blue', 'amber', 'teal'],
          scripts: ['dec10/lessons/week1/sources.js', 'dec10/lessons/week1/d10w1d5.js'] }
      ]
    }
  ]
};
