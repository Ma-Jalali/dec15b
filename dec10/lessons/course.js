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
  heroImage: 'assets/art/stage-reading.svg',
  heroAlt: '',
  // The course card under the logo in the side panel.
  sideCard: { name: 'Direct Entry Course', note: '10 weeks' },
  // Settings (gear at the foot of the side panel) → Side panel colour. The first one is the default.
  // Names match css/courses.css; each student's choice is kept on their device.
  sideColours: [['light', 'Light', '#ffffff'], ['charcoal', 'Charcoal', '#424242'], ['black', 'Black', '#000000'], ['navy', 'Navy', '#1a355e'], ['eucalypt', 'Eucalypt', '#4f7d74']],
  defaultLesson: 'd10w1d1',
  // The ten weeks shown on the course map (home page). Change label (short!) and sub when the course outline is final.
  map: [
    { n: 1, label: 'Getting started', sub: '' },
    { n: 2, label: 'Week 2', sub: '' },
    { n: 3, label: 'Week 3', sub: '' },
    { n: 4, label: 'Week 4', sub: '' },
    { n: 5, label: 'Week 5', sub: '' },
    { n: 6, label: 'Week 6', sub: '' },
    { n: 7, label: 'Week 7', sub: '' },
    { n: 8, label: 'Week 8', sub: '' },
    { n: 9, label: 'Week 9', sub: '' },
    { n: 10, label: 'Assessment', sub: '' }
  ],
  weeks: [
    {
      n: 1, theme: 'Getting started',
      summary: 'Meet your class, learn how the course works and set your goals for the next ten weeks.',
      days: [
        { id: 'd10w1d1', day: 1, status: 'ready', title: 'Welcome to DEC10', art: 'group',
          parts: ['Meet your class', 'How DEC10 works'],
          stages: ['meet', 'course'], tones: ['teal', 'amber'],
          scripts: ['dec10/lessons/week1/d10w1d1.js'] },
        { id: 'd10w1d2', day: 2, status: 'soon', title: 'Coming soon' },
        { id: 'd10w1d3', day: 3, status: 'soon', title: 'Coming soon' },
        { id: 'd10w1d4', day: 4, status: 'soon', title: 'Coming soon' },
        { id: 'd10w1d5', day: 5, status: 'soon', title: 'Coming soon' }
      ]
    }
  ]
};
