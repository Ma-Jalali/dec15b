/* DEC15 offline support. Keeps a copy of the app on the device so lessons open without internet.
   Your answers are always saved on the device (and online when signed in) — this file only caches the app itself.
   After a release, run: node tools/build-sw.js  (updates VERSION and the file list below). */
const VERSION = '2.25';
const CACHE = 'dec15-' + VERSION;
const PRECACHE = [
  "./",
  "assets/app-icon.svg",
  "assets/apple-touch-icon.png",
  "assets/art/complete.svg",
  "assets/art/library.svg",
  "assets/art/notebook.svg",
  "assets/art/practice.svg",
  "assets/art/soon.svg",
  "assets/art/stage-ai.svg",
  "assets/art/stage-assessment.svg",
  "assets/art/stage-critical.svg",
  "assets/art/stage-discussion.svg",
  "assets/art/stage-feedback.svg",
  "assets/art/stage-group.svg",
  "assets/art/stage-listening.svg",
  "assets/art/stage-reading.svg",
  "assets/art/stage-research.svg",
  "assets/art/stage-writing.svg",
  "assets/art/sync.svg",
  "assets/favicon.svg",
  "assets/fonts/fraunces-italic-400.woff2",
  "assets/fonts/fraunces-normal-400.woff2",
  "assets/fonts/fraunces-normal-600.woff2",
  "assets/fonts/manrope-normal-400.woff2",
  "assets/fonts/manrope-normal-600.woff2",
  "assets/fonts/manrope-normal-700.woff2",
  "assets/food-editorial.webp",
  "assets/food-study.svg",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/og-image.png",
  "assets/reading1-figure.webp",
  "assets/usyd-logo-dark.svg",
  "assets/usyd-logo-white.svg",
  "assets/week2/ai-decision.svg",
  "assets/week2/evidence-strength.svg",
  "assets/week3/academic-voices.svg",
  "assets/week3/aussie-billabong.svg",
  "assets/week3/aussie-lamington.svg",
  "assets/week3/aussie-outback.svg",
  "assets/week3/aussie-wobbegong.svg",
  "assets/week3/cause-effect-chain.svg",
  "assets/week3/conclusion-structure.svg",
  "assets/week3/craap.svg",
  "assets/week3/criticality.svg",
  "assets/week3/essay-structure.svg",
  "assets/week3/feedback-literacy.svg",
  "assets/week3/food-bank-models.svg",
  "assets/week3/food-hierarchy.svg",
  "assets/week3/hero-w3d1.svg",
  "assets/week3/hero-w3d2.svg",
  "assets/week3/hero-w3d3.svg",
  "assets/week3/hero-w3d4.svg",
  "assets/week3/hero-w3d5.svg",
  "assets/week3/hero-week3.svg",
  "assets/week3/intro-funnel.svg",
  "assets/week3/magazzini-donations.webp",
  "assets/week3/negotiation-skills.svg",
  "assets/week3/nicastro-household.jpg",
  "assets/week3/nominalisation-steps.svg",
  "assets/week3/noun-phrase.svg",
  "assets/week3/paraphrase-notes.svg",
  "assets/week3/prompt-parts.svg",
  "assets/week3/question-layers.svg",
  "assets/week3/synthesis-table.svg",
  "css/dec15.css?v=2.25",
  "css/fonts.css?v=2.25",
  "css/glass.css?v=2.25",
  "css/planner.css?v=2.25",
  "css/play.css?v=2.25",
  "css/polish.css?v=2.25",
  "index.html",
  "js/app.js?v=2.25",
  "js/boot.js?v=2.25",
  "js/cloud.js?v=2.25",
  "js/config.js?v=2.25",
  "js/notebook.js?v=2.25",
  "js/planner.js?v=2.25",
  "js/play.js?v=2.25",
  "js/reader.js?v=2.25",
  "js/vendor/supabase.min.js",
  "js/vendor/tiptap.bundle.js?v=2.25",
  "js/wall.js?v=2.25",
  "lessons/course.js?v=2.25",
  "lessons/week2/sources.js?v=2.25",
  "lessons/week2/video-script.js?v=2.25",
  "lessons/week2/w2d5.js?v=2.25",
  "lessons/week3/sources.js?v=2.25",
  "lessons/week3/w3d1.js?v=2.25",
  "lessons/week3/w3d2.js?v=2.25",
  "lessons/week3/w3d3.js?v=2.25",
  "lessons/week3/w3d4.js?v=2.25",
  "lessons/week3/w3d5.js?v=2.25",
  "manifest.webmanifest"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(PRECACHE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('dec15-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;   // sign-in and the class wall always go to the network
  if (req.mode === 'navigate') {   // the page itself: newest when online, saved copy when offline
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  // files with ?v= never change, so the saved copy is used first; other files update quietly in the background
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req);
    const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; });
    if (hit) { if (!url.search) net.catch(() => null); return hit; }
    return net.catch(async () => (await caches.match(req, { ignoreSearch: true })) || Response.error());
  }));
});
