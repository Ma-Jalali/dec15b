// Builds js/vendor/excalidraw/ (ES modules, split into chunks) and copies its CSS and fonts.
import { build } from 'esbuild';
import { cpSync, rmSync, mkdirSync, readdirSync } from 'fs';
const out = '../../js/vendor/excalidraw', pkg = 'node_modules/@excalidraw/excalidraw/dist/prod';
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
await build({ entryPoints: { excalidraw: 'entry.js' }, bundle: true, splitting: true, format: 'esm', minify: true, outdir: out,
  conditions: ['production'], define: { 'process.env.NODE_ENV': '"production"', 'process.env.IS_PREACT': '"false"' }, target: ['es2020'], legalComments: 'none', chunkNames: 'chunk-[hash]', loader: { '.css': 'empty' } });
cpSync(`${pkg}/index.css`, `${out}/excalidraw.css`);
// fonts for the drawing (the large Chinese font is left out; it loads from the internet only if needed)
const fonts = '../../assets/excalidraw/fonts'; rmSync(fonts, { recursive: true, force: true });
for (const f of readdirSync(`${pkg}/fonts`)) if (f !== 'Xiaolai') cpSync(`${pkg}/fonts/${f}`, `${fonts}/${f}`, { recursive: true });
console.log('js/vendor/excalidraw written');
