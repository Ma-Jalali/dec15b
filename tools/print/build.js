/* DEC10 photocopiables — build the printable PDFs.
     node tools/print/build.js            build every tools/print/src/weekN/*.html
     node tools/print/build.js w3d1-bingo build one (by file name)
   For each source it writes  dec10/print/weekN/<id>.pdf  (A4) and  dec10/print/weekN/<id>.jpg  (preview of page 1),
   then a day pack per lesson:  dec10/print/weekN/pack-d10wNdM.pdf  (one copy of every sheet for that day, in file order).
   Sources are named  w3d1-<name>.html  — the w3d1 prefix links a sheet to its day (d10w3d1).
   Needs Playwright (Chromium) and poppler-utils (pdfinfo, pdfunite). List each sheet in dec10/lessons/course.js → printables. */
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..', '..'), srcRoot = path.join(__dirname, 'src');
const only = process.argv[2];
(async () => {
  const b = await chromium.launch(); const page = await b.newPage({ viewport: { width: 794, height: 1123 } });
  const built = [];
  for (const wk of fs.readdirSync(srcRoot).filter(d => /^week\d+$/.test(d)).sort()) {
    const outDir = path.join(root, 'dec10', 'print', wk); fs.mkdirSync(outDir, { recursive: true });
    for (const f of fs.readdirSync(path.join(srcRoot, wk)).filter(f => f.endsWith('.html')).sort()) {
      const id = f.replace(/\.html$/, ''); if (only && only !== id) continue;
      await page.goto('file://' + path.join(srcRoot, wk, f)); await page.evaluate(() => document.fonts.ready);
      const pdf = path.join(outDir, id + '.pdf');
      await page.pdf({ path: pdf, format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, preferCSSPageSize: true });
      await page.emulateMedia({ media: 'print' });
      const first = await page.$('.page'); await (first || page).screenshot({ path: path.join(outDir, id + '.jpg'), type: 'jpeg', quality: 82 });
      await page.emulateMedia({ media: 'screen' });
      const pages = Number((execFileSync('pdfinfo', [pdf]).toString().match(/Pages:\s+(\d+)/) || [])[1] || 0);
      built.push({ wk, id, pages }); console.log(`${wk}/${id}.pdf · ${pages} page${pages === 1 ? '' : 's'} · ${Math.round(fs.statSync(pdf).size / 1024)} KB`);
    }
    // day packs: one of each sheet for the day
    const pdfs = fs.readdirSync(outDir).filter(f => /^w\d+d\d+-.+\.pdf$/.test(f)).sort(), byDay = {};
    pdfs.forEach(f => { const d = f.match(/^w(\d+)d(\d+)-/); (byDay[`d10w${d[1]}d${d[2]}`] ||= []).push(path.join(outDir, f)); });
    for (const [day, files] of Object.entries(byDay)) {
      const out = path.join(outDir, `pack-${day}.pdf`);
      if (files.length === 1) fs.copyFileSync(files[0], out); else execFileSync('pdfunite', [...files, out]);
      console.log(`${wk}/pack-${day}.pdf · ${files.length} sheet${files.length === 1 ? '' : 's'}`);
    }
  }
  await b.close();
})();
