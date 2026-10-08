/* Rebuilds the offline file list in sw.js. Run after adding files or changing the version:
     node tools/build-sw.js
   It reads the version from js/config.js and lists the app files that should work offline. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const version = fs.readFileSync(path.join(root, 'js/config.js'), 'utf8').match(/version:\s*'([^']+)'/)[1];
const walk = d => fs.readdirSync(path.join(root, d), { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const versioned = [...walk('css'), ...walk('js').filter(f => !f.includes('vendor')), ...walk('lessons').filter(f => !f.includes('_template'))]
  .filter(f => /\.(css|js)$/.test(f)).concat(['js/vendor/tiptap.bundle.js']).map(f => f.split(path.sep).join('/') + '?v=' + version);
const plain = walk('assets').filter(f => /\.(svg|png|jpg|webp|woff2)$/.test(f)).map(f => f.split(path.sep).join('/'))
  .concat(['./', 'index.html', 'manifest.webmanifest', 'js/vendor/supabase.min.js']);
const list = [...plain, ...versioned].sort();
let sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
sw = sw.replace(/const VERSION = '[^']*';/, `const VERSION = '${version}';`)
       .replace(/const PRECACHE = \[[\s\S]*?\];/, 'const PRECACHE = ' + JSON.stringify(list, null, 1).replace(/\n /g, '\n  ') + ';');
fs.writeFileSync(path.join(root, 'sw.js'), sw);
console.log('sw.js: version', version, '·', list.length, 'files');
