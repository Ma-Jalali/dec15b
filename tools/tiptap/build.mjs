// Rebuild the editor bundle:   cd tools/tiptap && npm ci && node build.mjs
import { build } from 'esbuild';
await build({ entryPoints: ['entry.js'], bundle: true, minify: true, format: 'iife', globalName: 'Tiptap',
  outfile: '../../js/vendor/tiptap.bundle.js', target: ['es2019'], legalComments: 'eof' });
console.log('js/vendor/tiptap.bundle.js written');
