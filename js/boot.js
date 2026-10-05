/* DEC15 loader — chooses which lesson to open, loads its files, then starts the app.
   Addresses:  #/            course home (all weeks)
               #/w2d5        a lesson's overview
               #/w2d5/ai     a page inside the lesson (stage id, sources, extra, notebook)
   Old links such as #ai or #notebook still work: they open Week 2 Day 5. */
(() => {
  const course = window.DEC15_COURSE, cfg = window.DEC15_CONFIG;
  const days = course.weeks.flatMap(w => w.days.map(d => ({ ...d, week: w.n, theme: w.theme })));
  const ready = id => days.find(d => d.id === id && d.status === 'ready');
  const legacy = ['overview', 'sources', 'extra', 'notebook', 'ai', 'feedback', 'critical', 'writing'];
  const hash = location.hash.slice(1);
  let id = (hash.match(/^\/([\w-]+)/) || [])[1];
  if (legacy.includes(hash)) {
    id = course.defaultLesson;
    history.replaceState(null, '', '#/' + id + (hash === 'overview' ? '' : '/' + hash));
  }
  if (!ready(id)) { try { id = localStorage.getItem('dec15-last-lesson'); } catch (e) { id = null; } }
  if (!ready(id)) id = course.defaultLesson;
  window.DEC15_DAYS = days;
  window.DEC15_LESSON_META = ready(id);

  const files = [...ready(id).scripts, 'js/app.js'];
  (function next() {
    const src = files.shift(); if (!src) return;
    const s = document.createElement('script');
    s.src = src + '?v=' + cfg.version;
    s.onload = next;
    s.onerror = () => window.dispatchEvent(new ErrorEvent('error', { message: 'Could not load ' + src }));
    document.body.appendChild(s);
  })();
})();
