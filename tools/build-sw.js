/* Rebuilds the offline file list in sw.js and the pages of the other courses. Run after adding files or changing the version:
     node tools/build-sw.js
   It reads the version from js/config.js and lists the app files that should work offline.
   Other courses (COURSES below) get their page made from index.html — e.g. dec10.html — so they always load exactly the
   same app files (same ?v=) as DEC15. Never edit dec10.html by hand: edit index.html and run this script. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const version = fs.readFileSync(path.join(root, 'js/config.js'), 'utf8').match(/version:\s*'([^']+)'/)[1];
const COURSES = [{ id: 'dec10', code: 'DEC10' }];   // each has a folder (dec10/) with lessons/course.js, and a page (dec10.html)
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (!index.includes('?v=' + version)) throw new Error('index.html does not load ?v=' + version + ' — raise the version there first.');
COURSES.forEach(c => fs.writeFileSync(path.join(root, c.id + '.html'), index
  .replace('<!doctype html>', `<!doctype html>\n<!-- ${c.code}: made from index.html by tools/build-sw.js — do not edit by hand. -->`)
  .replace(/DEC15/g, c.code)
  .replace('src="lessons/course.js', `src="${c.id}/lessons/course.js`)));
const walk = d => fs.readdirSync(path.join(root, d), { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const versioned = [...walk('css'), ...walk('js').filter(f => !f.includes('vendor')), ...walk('lessons').filter(f => !f.includes('_template')), ...COURSES.flatMap(c => walk(c.id + '/lessons'))]
  .filter(f => /\.(css|js)$/.test(f)).concat(['js/vendor/tiptap.bundle.js']).map(f => f.split(path.sep).join('/') + '?v=' + version);
const plain = [...walk('assets'), ...COURSES.flatMap(c => walk(c.id + '/assets'))].filter(f => /\.(svg|png|jpg|webp|woff2)$/.test(f) && !f.includes('excalidraw'))   // the whiteboard's files load only when used
.map(f => f.split(path.sep).join('/'))
  .concat(['./', 'index.html', 'manifest.webmanifest', 'js/vendor/supabase.min.js', ...COURSES.map(c => c.id + '.html')]);
const list = [...plain, ...versioned].sort();
let sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
sw = sw.replace(/const VERSION = '[^']*';/, `const VERSION = '${version}';`)
       .replace(/const PRECACHE = \[[\s\S]*?\];/, 'const PRECACHE = ' + JSON.stringify(list, null, 1).replace(/\n /g, '\n  ') + ';');
fs.writeFileSync(path.join(root, 'sw.js'), sw);
console.log('sw.js: version', version, '·', list.length, 'files');
