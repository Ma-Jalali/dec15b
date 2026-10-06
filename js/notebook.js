/* DEC15 notebook: one structured model of a student's work, rendered as
   - the My notebook page,
   - a PDF (jsPDF + AutoTable, fonts embedded),
   - a Word file (.docx — also opens in Google Docs),
   - rich HTML for pasting into a new Google Doc, and
   - a clean print layout.
   Tables stay tables in every format. */
window.createDEC15Notebook = function ({ lesson, getState, planParts, tableRows, reader, esc, strip, toast, person }) {
  const STAGE_COLORS = { ai: '#ad6a12', feedback: '#2b776e', critical: '#3a58a0', writing: '#b0512a' }; // Week 2 Day 5; other lessons use section.color
  const val = k => getState().values[k] ?? '';
  const filled = v => v !== undefined && v !== null && String(v).trim() !== '';
  const words = s => (String(s).trim().match(/\S+/g) || []).length;

  /* ───────── model ───────── */
  function activityItems(a) {
    const st = getState(), items = [];
    for (const b of a.blocks) {
      if (b.type === 'fields') b.fields.forEach(f => filled(val(f.id)) && items.push({ t: 'qa', label: f.label, value: val(f.id) }));
      if (b.type === 'choose' && filled(val(b.id))) items.push({ t: 'qa', label: b.title, value: val(b.id) });
      if (b.type === 'quiz') {
        const rows = b.items.map((q, i) => [strip(q.q), val(b.id + '-' + i) || '—', st.checked[b.id] ? (val(b.id + '-' + i) === q.answer ? 'Correct' : 'Answer: ' + q.answer) : '']).filter(r => r[1] !== '—');
        if (rows.length) items.push({ t: 'table', title: b.title || 'Quiz', head: st.checked[b.id] ? ['Question', 'My answer', 'Check'] : ['Question', 'My answer'], rows: st.checked[b.id] ? rows : rows.map(r => r.slice(0, 2)), widths: st.checked[b.id] ? [55, 30, 15] : [62, 38] });
      }
      if (b.type === 'table') {
        const n = tableRows(b), rows = [];
        for (let r = 0; r < n; r++) {
          const cells = b.columns.map((c, ci) => ci === 0 && b.fixed?.[r] ? strip(b.fixed[r]) : String(val(`${b.id}-${r}-${ci}`)));
          const hasInput = cells.some((c, ci) => !(ci === 0 && b.fixed?.[r]) && filled(c));
          if (hasInput) rows.push(cells);
        }
        if (rows.length) items.push({ t: 'table', title: b.title || 'Table', head: b.columns, rows, rowHead: !!b.fixed });
      }
      if (b.type === 'plan') {
        const parts = planParts.map(([p, fs]) => ({ title: p, rows: fs.map(([k, l]) => [l, String(val('plan-' + k))]).filter(r => filled(r[1])) })).filter(p => p.rows.length);
        if (parts.length) items.push({ t: 'plan', parts });
      }
      if (b.type === 'order' && filled(val(b.id))) {
        const o = String(val(b.id)).split(',').map(Number), ok = st.checked[b.id];
        const rows = o.map((x, i) => ok ? [String(i + 1), strip(b.items[x]), x === i ? 'Correct' : 'Answer: ' + strip(b.items[i])] : [String(i + 1), strip(b.items[x])]);
        items.push({ t: 'table', title: b.title || 'My order', head: ok ? ['#', 'My order', 'Check'] : ['#', 'My order'], rows, widths: ok ? [8, 52, 40] : [10, 90] });
      }
      if (b.type === 'grid') {
        const rows = b.rows.map((r, ri) => [strip(r), ...b.columns.map((_, ci) => { const g = b.given?.[`${ri}-${ci}`]; if (g) return g; const v = String(val(`${b.id}-${ri}-${ci}`)); const ans = b.answers?.[ri]?.[ci]; return v && st.checked[b.id] && ans !== undefined && v !== ans ? `${v} (answer: ${ans})` : v; })]);
        if (rows.some((r, ri) => r.slice(1).some((c, ci) => !b.given?.[`${ri}-${ci}`] && filled(c)))) items.push({ t: 'table', title: b.title || 'Table', head: ['', ...b.columns.map(strip)], rows, rowHead: true });
      }
      if (b.type === 'checklist') {
        const list = b.items.map((c, i) => [c, !!val(b.id + '-' + i)]);
        if (list.some(x => x[1])) items.push({ t: 'check', title: b.title, items: list });
      }
    }
    return items;
  }
  function model() {
    const st = getState(), core = lesson.sections.flatMap(s => s.activities);
    const sections = [...lesson.sections.map(s => ({ id: s.id, number: s.number, title: s.title, color: s.color || STAGE_COLORS[s.id], activities: s.activities })),
      { id: 'extra', number: '+', title: 'Extra activities', color: '#5d6b75', activities: lesson.extras }]
      .map(s => ({ ...s, activities: s.activities.map(a => ({ id: a.id, title: a.title, done: !!st.done[a.id], items: activityItems(a) })).filter(a => a.items.length) }))
      .filter(s => s.activities.length);
    const marks = reader.markRecords();
    const wordCount = Object.values(st.values).filter(v => typeof v === 'string').reduce((n, v) => n + words(v), 0);
    return {
      title: 'My notebook', lesson: `DEC15 · Week ${lesson.week}, Day ${lesson.day} · ${lesson.title}`,
      question: lesson.question, wordTarget: lesson.wordTarget || '', qLabel: lesson.questionKind || 'Essay question', student: person(),
      date: new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
      stats: { finished: core.filter(a => st.done[a.id]).length, total: core.length, words: wordCount, marks: marks.reduce((n, r) => n + r.ranges.length, 0) },
      sections, marks
    };
  }

  /* ───────── on-page notebook ───────── */
  const nl = s => esc(s).replace(/\n/g, '<br>');
  function itemHTML(it) {
    if (it.t === 'qa') return `<div class="nb-qa"><span class="nb-label">${esc(it.label)}</span><p>${nl(it.value)}</p></div>`;
    if (it.t === 'table') return `<figure class="nb-table"><figcaption>${esc(it.title)}</figcaption><div class="nb-table-scroll"><table><thead><tr>${it.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${it.rows.map(r => `<tr>${r.map((c, i) => i === 0 && it.rowHead ? `<th scope="row">${nl(c)}</th>` : `<td${c === 'Correct' ? ' class="ok"' : /^Answer: /.test(c) ? ' class="no"' : ''}>${nl(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></figure>`;
    if (it.t === 'plan') return `<div class="nb-plan">${it.parts.map((p, i) => `<section class="nb-plan-part"><h4><span>${String(i + 1).padStart(2, '0')}</span>${esc(p.title)}</h4><dl>${p.rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${nl(v)}</dd>`).join('')}</dl></section>`).join('')}</div>`;
    if (it.t === 'check') return `<div class="nb-check"><span class="nb-label">${esc(it.title)}</span><ul>${it.items.map(([c, ok]) => `<li class="${ok ? 'on' : ''}">${esc(c)}</li>`).join('')}</ul></div>`;
    return '';
  }
  function marksHTML(m) {
    if (!m.marks.length) return '';
    return `<section class="nb-stage" style="--stage:#8a6a1f"><header class="nb-stage-head"><span class="nb-stage-num">✎</span><h2>My highlights</h2></header>${m.marks.map(r => `<article class="nb-act"><h3>${esc(r.title)}</h3><p class="nb-marked">${r.html}</p></article>`).join('')}</section>`;
  }
  function pageHTML() {
    const m = model(), pct = m.stats.total ? m.stats.finished / m.stats.total : 0;
    const ring = `<svg class="nb-ring" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" /><circle cx="32" cy="32" r="27" style="stroke-dasharray:${(2 * Math.PI * 27).toFixed(1)};stroke-dashoffset:${(2 * Math.PI * 27 * (1 - pct)).toFixed(1)}" /></svg>`;
    return `<section class="nb-cover">
      <div class="nb-cover-copy">
        <span class="eyebrow">${esc(m.lesson)}</span>
        <h1>My notebook</h1>
        <p class="nb-who">${m.student ? `<b>${esc(m.student)}</b> · ` : ''}${esc(m.date)}</p>
        <p class="nb-q"><span>${esc(m.qLabel)}</span>${esc(m.question)}</p>
      </div>
      <div class="nb-stats">
        <div class="nb-stat nb-stat-ring">${ring}<b>${m.stats.finished}<small>/${m.stats.total}</small></b><span>activities finished</span></div>
        <div class="nb-stat"><b>${m.stats.words.toLocaleString()}</b><span>words written</span></div>
        <div class="nb-stat"><b>${m.stats.marks}</b><span>highlights</span></div>
      </div>
    </section>
    <section class="nb-export" aria-label="Save or share your notebook">
      <h2 class="nb-export-title">Save your notebook</h2>
      <div class="nb-export-grid">
        <button class="nb-export-btn" data-export="pdf"><span class="nb-ext nb-ext-pdf">PDF</span><b>Download PDF</b><small>Best for keeping and printing</small></button>
        <button class="nb-export-btn" data-export="gdocs"><span class="nb-ext nb-ext-gdocs"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M7 3h7l5 5v13H7z" opacity=".95"/><path fill="#c8dafc" d="M14 3v5h5z"/><path fill="#4285f4" d="M9.5 12h7v1.3h-7zm0 2.6h7v1.3h-7zm0 2.6h4.6v1.3H9.5z"/></svg></span><b>Open in Google Docs</b><small>Paste into a new Google Doc</small></button>
        <button class="nb-export-btn" data-export="docx"><span class="nb-ext nb-ext-docx">W</span><b>Download Word</b><small>.docx — also opens in Google Docs</small></button>
        <button class="nb-export-btn" data-export="print"><span class="nb-ext nb-ext-print"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4v-7h16v7h-3M7 14h10v7H7z"/></svg></span><b>Print</b><small>Clean, paper-friendly layout</small></button>
      </div>
    </section>
    ${m.sections.length || m.marks.length ? m.sections.map(s => `<section class="nb-stage" style="--stage:${s.color}">
        <header class="nb-stage-head"><span class="nb-stage-num">${esc(s.number)}</span><h2>${esc(s.title)}</h2></header>
        ${s.activities.map(a => `<article class="nb-act"><h3>${esc(a.title)}${a.done ? '<span class="nb-done">Finished</span>' : ''}</h3>${a.items.map(itemHTML).join('')}</article>`).join('')}
      </section>`).join('') + marksHTML(m)
      : `<div class="nb-empty"><img src="assets/art/notebook.svg" alt="" width="240" height="170"><h2>Your notebook is empty — for now</h2><p>Everything you write, choose and highlight in the lesson will appear here, organised by stage.</p></div>`}`;
  }

  /* ───────── standalone HTML (Google Docs paste + print) ───────── */
  function docHTML(forPrint) {
    const m = model(), F = "'Manrope', Arial, sans-serif", S = "'Fraunces', Georgia, serif";
    const cell = 'border:1px solid #cfd6dc;padding:6pt 8pt;vertical-align:top;font-size:10.5pt;';
    const head = 'border:1px solid #cfd6dc;padding:6pt 8pt;background:#eef2f5;font-size:9.5pt;font-weight:bold;text-align:left;';
    const item = it => {
      if (it.t === 'qa') return `<p style="margin:10pt 0 2pt;font-family:${F};font-size:9pt;font-weight:bold;color:#5d6b75;text-transform:uppercase;letter-spacing:.5pt">${esc(it.label)}</p><p style="margin:0 0 6pt;font-family:${F};font-size:11pt;line-height:1.5">${nl(it.value)}</p>`;
      if (it.t === 'table') return `<p style="margin:12pt 0 4pt;font-family:${F};font-size:10pt;font-weight:bold">${esc(it.title)}</p><table style="border-collapse:collapse;width:100%;font-family:${F}"><thead><tr>${it.head.map(h => `<th style="${head}">${esc(h)}</th>`).join('')}</tr></thead><tbody>${it.rows.map(r => `<tr>${r.map((c, i) => `<td style="${cell}${i === 0 && it.rowHead ? 'background:#f7f9fa;font-weight:bold;' : ''}${c === 'Correct' ? 'color:#2f7a52;font-weight:bold;' : /^Answer: /.test(c) ? 'color:#a3301a;' : ''}">${nl(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
      if (it.t === 'plan') return it.parts.map(p => `<p style="margin:12pt 0 4pt;font-family:${F};font-size:10.5pt;font-weight:bold">${esc(p.title)}</p><table style="border-collapse:collapse;width:100%;font-family:${F}"><tbody>${p.rows.map(([k, v]) => `<tr><td style="${cell}width:32%;background:#f7f9fa;font-weight:bold;font-size:9.5pt">${esc(k)}</td><td style="${cell}">${nl(v)}</td></tr>`).join('')}</tbody></table>`).join('');
      if (it.t === 'check') return `<p style="margin:10pt 0 2pt;font-family:${F};font-size:9pt;font-weight:bold;color:#5d6b75;text-transform:uppercase">${esc(it.title)}</p>${it.items.map(([c, ok]) => `<p style="margin:0 0 2pt;font-family:${F};font-size:10.5pt">${ok ? '☑' : '☐'} ${esc(c)}</p>`).join('')}`;
      return '';
    };
    const body = `<h1 style="font-family:${S};font-size:26pt;margin:0 0 4pt;color:#14293a">My notebook</h1>
      <p style="font-family:${F};font-size:10pt;color:#5d6b75;margin:0 0 2pt">${esc(m.lesson)}</p>
      <p style="font-family:${F};font-size:10pt;color:#5d6b75;margin:0 0 12pt">${m.student ? esc(m.student) + ' · ' : ''}${esc(m.date)} · ${m.stats.finished}/${m.stats.total} activities finished</p>
      <table style="border-collapse:collapse;width:100%;margin:0 0 16pt"><tr><td style="border:1px solid #e6d7b6;background:#fffaf0;padding:10pt 12pt;font-family:${S};font-size:13pt"><span style="font-family:${F};font-size:8.5pt;font-weight:bold;color:#93600f;text-transform:uppercase;letter-spacing:1pt">${esc(m.qLabel)}${m.wordTarget ? ' · ' + esc(m.wordTarget) : ''}</span><br>${esc(m.question)}</td></tr></table>
      ${m.sections.map(s => `<h2 style="font-family:${S};font-size:18pt;color:${s.color};margin:22pt 0 6pt;padding-bottom:4pt;border-bottom:2px solid ${s.color}">${s.number !== '+' ? 'Stage ' + Number(s.number) + ' · ' : ''}${esc(s.title)}</h2>${s.activities.map(a => `<h3 style="font-family:${F};font-size:12.5pt;color:#14293a;margin:14pt 0 2pt">${esc(a.title)}${a.done ? ' <span style="color:#2f7a52;font-size:9pt">✓ Finished</span>' : ''}</h3>${a.items.map(item).join('')}`).join('')}`).join('')}
      ${m.marks.length ? `<h2 style="font-family:${S};font-size:18pt;color:#8a6a1f;margin:22pt 0 6pt;padding-bottom:4pt;border-bottom:2px solid #8a6a1f">My highlights</h2>${m.marks.map(r => `<p style="margin:10pt 0 2pt;font-family:${F};font-size:9pt;font-weight:bold;color:#5d6b75">${esc(r.title)}</p><p style="margin:0 0 6pt;font-family:${S};font-size:11pt;line-height:1.6">${r.html.replace(/class="annotation mark-yellow( mark-underline)?"/g, (x, u) => `style="background:#ffe08a${u ? ';text-decoration:underline' : ''}"`).replace(/class="annotation mark-blue( mark-underline)?"/g, (x, u) => `style="background:#c7e6f8${u ? ';text-decoration:underline' : ''}"`).replace(/class="annotation  ?mark-underline"/g, 'style="text-decoration:underline"')}</p>`).join('')}` : ''}`;
    if (!forPrint) return `<meta charset="utf-8"><div>${body}</div>`;
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>My notebook — DEC15</title><link rel="stylesheet" href="${new URL('css/fonts.css', location.href)}"><style>@page{size:A4;margin:16mm 16mm 18mm}body{margin:0;color:#14293a;-webkit-print-color-adjust:exact;print-color-adjust:exact}table{page-break-inside:auto}tr,h3{page-break-inside:avoid}h2,h3{page-break-after:avoid}</style></head><body>${body}</body></html>`;
  }

  /* ───────── PDF ───────── */
  async function b64(url) {
    const buf = await (await fetch(url)).arrayBuffer(); let s = '';
    const bytes = new Uint8Array(buf); for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  function load(src) { return new Promise((ok, bad) => { if (document.querySelector(`script[src="${src}"]`)) return ok(); const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => bad(new Error('Could not load ' + src)); document.head.appendChild(s); }); }
  const pdfSafe = s => String(s).replace(/[←-⇿]/g, m => ({ '→': '->', '←': '<-', '↑': 'up', '↓': 'down' }[m] || '-')).replace(/[☑☐]/g, '');

  async function pdf() {
    await load('js/vendor/jspdf.umd.min.js'); await load('js/vendor/jspdf.autotable.min.js');
    const { jsPDF } = window.jspdf, m = model();
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const fonts = [['manrope-normal-400', 'Manrope', 'normal'], ['manrope-normal-700', 'Manrope', 'bold'], ['fraunces-normal-600', 'Fraunces', 'normal']];
    for (const [file, name, style] of fonts) { doc.addFileToVFS(file + '.ttf', await b64('assets/fonts/' + file + '.ttf')); doc.addFont(file + '.ttf', name, style); }
    const W = 210, M = 18, CW = W - 2 * M, ink = [20, 41, 58], muted = [93, 107, 117];
    let y = M;
    const need = h => { if (y + h > 297 - 20) { doc.addPage(); y = M; } };
    const text = (s, { size = 10.5, font = 'Manrope', style = 'normal', color = ink, gap = 1.45, width = CW, x = M } = {}) => {
      doc.setFont(font, style); doc.setFontSize(size); doc.setTextColor(...color);
      const lines = doc.splitTextToSize(pdfSafe(s), width), lh = size * 0.3528 * gap;
      for (const ln of lines) { need(lh); doc.text(ln, x, y + lh * 0.75); y += lh; }
    };
    const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));

    // Cover band
    doc.setFillColor(...ink); doc.rect(0, 0, W, 46, 'F');
    doc.setFillColor(227, 168, 67); doc.rect(0, 46, W, 1.2, 'F');
    doc.setFont('Fraunces', 'normal'); doc.setFontSize(26); doc.setTextColor(255, 255, 255); doc.text('My notebook', M, 24);
    doc.setFont('Manrope', 'normal'); doc.setFontSize(9.5); doc.setTextColor(200, 214, 224);
    doc.text(pdfSafe(m.lesson), M, 32); doc.text(`${m.student ? m.student + '  ·  ' : ''}${m.date}  ·  ${m.stats.finished}/${m.stats.total} activities finished`, M, 38);
    y = 56;
    // Essay question box
    doc.setFont('Fraunces', 'normal'); doc.setFontSize(12.5);
    const qLines = doc.splitTextToSize(m.question, CW - 12), qh = 10 + qLines.length * 5.6;
    doc.setFillColor(255, 250, 240); doc.setDrawColor(230, 215, 182); doc.roundedRect(M, y, CW, qh, 2.5, 2.5, 'FD');
    doc.setFont('Manrope', 'bold'); doc.setFontSize(7.5); doc.setTextColor(147, 96, 15); doc.text((m.qLabel + (m.wordTarget ? '  ·  ' + m.wordTarget.replace('–', '-') : '')).toUpperCase(), M + 6, y + 6.5);
    doc.setFont('Fraunces', 'normal'); doc.setFontSize(12.5); doc.setTextColor(...ink); qLines.forEach((l, i) => doc.text(l, M + 6, y + 12.5 + i * 5.6));
    y += qh + 6;

    const tableOpts = (head, rows, extra = {}) => ({
      startY: y, margin: { left: M, right: M, bottom: 20 }, head: head ? [head.map(pdfSafe)] : undefined, body: rows.map(r => r.map(pdfSafe)),
      styles: { font: 'Manrope', fontSize: 9.5, cellPadding: 2.6, lineColor: [207, 214, 220], lineWidth: 0.2, textColor: ink, valign: 'top', overflow: 'linebreak' },
      headStyles: { fillColor: [238, 242, 245], textColor: [61, 80, 94], fontStyle: 'bold', fontSize: 8.5 },
      alternateRowStyles: { fillColor: [252, 251, 248] }, theme: 'grid', ...extra
    });
    for (const s of m.sections) {
      need(18); y += 4;
      const c = hex(s.color);
      doc.setFillColor(...c); doc.roundedRect(M, y, 9, 9, 1.6, 1.6, 'F');
      doc.setFont('Fraunces', 'normal'); doc.setFontSize(s.number === '+' ? 12 : 9.5); doc.setTextColor(255, 255, 255); doc.text(String(s.number), M + 4.5, y + 6.3, { align: 'center' });
      doc.setFontSize(16); doc.setTextColor(...c); doc.text(pdfSafe(s.title), M + 13, y + 7); y += 11;
      doc.setDrawColor(...c); doc.setLineWidth(0.5); doc.line(M, y, W - M, y); y += 5;
      for (const a of s.activities) {
        need(12);
        const ty = y; text(a.title, { size: 12, style: 'bold', gap: 1.3, width: CW - 26 });
        if (a.done) { doc.setFont('Manrope', 'bold'); doc.setFontSize(7); const tw = doc.getTextWidth('FINISHED') + 5; doc.setFillColor(234, 245, 238); doc.roundedRect(W - M - tw, ty + 0.6, tw, 4.8, 2.4, 2.4, 'F'); doc.setTextColor(47, 122, 82); doc.text('FINISHED', W - M - tw / 2, ty + 4, { align: 'center' }); }
        y += 1.5;
        for (const it of a.items) {
          if (it.t === 'qa') { need(10); text(it.label.toUpperCase(), { size: 7.5, style: 'bold', color: muted, gap: 1.3 }); y += 0.5; text(it.value, { size: 10.5 }); y += 2.5; }
          if (it.t === 'table') {
            need(14); text(it.title, { size: 9.5, style: 'bold', gap: 1.3 }); y += 1;
            const colStyles = {}; if (it.rowHead) colStyles[0] = { fontStyle: 'bold', fillColor: [247, 249, 250], cellWidth: CW * 0.22 };
            if (it.widths) it.widths.forEach((w, i) => colStyles[i] = { ...(colStyles[i] || {}), cellWidth: CW * w / 100 });
            doc.autoTable(tableOpts(it.head, it.rows, { columnStyles: colStyles, didParseCell: d => { const v = String(d.cell.raw || ''); if (d.section === 'body' && v === 'Correct') { d.cell.styles.textColor = [47, 122, 82]; d.cell.styles.fontStyle = 'bold'; } if (d.section === 'body' && v.startsWith('Answer: ')) d.cell.styles.textColor = [163, 48, 26]; } }));
            y = doc.lastAutoTable.finalY + 5;
          }
          if (it.t === 'plan') for (const p of it.parts) {
            need(14); text(p.title, { size: 10, style: 'bold', gap: 1.3 }); y += 1;
            doc.autoTable(tableOpts(null, p.rows, { columnStyles: { 0: { cellWidth: CW * 0.3, fontStyle: 'bold', fillColor: [247, 249, 250], fontSize: 8.8 } } }));
            y = doc.lastAutoTable.finalY + 4;
          }
          if (it.t === 'check') { need(10); text(it.title.toUpperCase(), { size: 7.5, style: 'bold', color: muted, gap: 1.3 }); it.items.forEach(([c2, ok]) => text((ok ? '[x]  ' : '[  ]  ') + c2, { size: 10, color: ok ? ink : muted })); y += 2.5; }
        }
        y += 3;
      }
    }
    if (m.marks.length) {
      need(18); y += 4; doc.setFont('Fraunces', 'normal'); doc.setFontSize(16); doc.setTextColor(138, 106, 31); doc.text('My highlights', M, y + 7); y += 11;
      doc.setDrawColor(138, 106, 31); doc.line(M, y, W - M, y); y += 5;
      for (const r of m.marks) { text(r.title.toUpperCase(), { size: 7.5, style: 'bold', color: muted, gap: 1.3 }); r.ranges.forEach(t => text('• ' + t.text, { size: 10.5 })); y += 3; }
    }
    const pages = doc.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      doc.setPage(i); doc.setFont('Manrope', 'normal'); doc.setFontSize(8); doc.setTextColor(...muted);
      doc.text(`DEC15 · My notebook${m.student ? ' · ' + m.student : ''}`, M, 297 - 9);
      doc.text(`${i} / ${pages}`, W - M, 297 - 9, { align: 'right' });
    }
    doc.save(fileName('pdf'));
    toast('Your PDF has been downloaded.');
  }

  /* ───────── Word (.docx) ───────── */
  async function docx() {
    await load('js/vendor/docx.min.js');
    const D = window.docx, m = model();
    const run = (t, o = {}) => new D.TextRun({ text: String(t), font: o.serif ? 'Fraunces' : 'Manrope', size: o.size || 21, bold: o.bold, color: o.color || '14293A', allCaps: o.caps });
    const para = (t, o = {}) => new D.Paragraph({ spacing: { before: o.before ?? 0, after: o.after ?? 80, line: 300 }, children: String(t).split('\n').flatMap((ln, i) => i ? [new D.TextRun({ break: 1 }), run(ln, o)] : [run(ln, o)]) });
    const border = { style: D.BorderStyle.SINGLE, size: 4, color: 'CFD6DC' }, borders = { top: border, bottom: border, left: border, right: border };
    const cell = (t, o = {}) => new D.TableCell({ borders, shading: o.fill ? { type: D.ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined, margins: { top: 80, bottom: 80, left: 110, right: 110 }, width: o.w ? { size: o.w, type: D.WidthType.PERCENTAGE } : undefined, children: [para(t, { size: o.size || 20, bold: o.bold, color: o.color, after: 0 })] });
    const table = (head, rows, o = {}) => new D.Table({ width: { size: 100, type: D.WidthType.PERCENTAGE }, rows: [
      ...(head ? [new D.TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, { fill: 'EEF2F5', bold: true, size: 18, w: o.widths?.[i] })) })] : []),
      ...rows.map(r => new D.TableRow({ cantSplit: true, children: r.map((c, i) => cell(c || ' ', { fill: i === 0 && o.rowHead ? 'F7F9FA' : undefined, bold: i === 0 && o.rowHead, w: o.widths?.[i], color: c === 'Correct' ? '2F7A52' : /^Answer: /.test(c) ? 'A3301A' : undefined })) }))] });
    const children = [
      para('My notebook', { serif: true, size: 52, after: 60 }),
      para(m.lesson, { size: 19, color: '5D6B75', after: 20 }),
      para(`${m.student ? m.student + ' · ' : ''}${m.date} · ${m.stats.finished}/${m.stats.total} activities finished`, { size: 19, color: '5D6B75', after: 240 }),
      new D.Table({ width: { size: 100, type: D.WidthType.PERCENTAGE }, rows: [new D.TableRow({ children: [new D.TableCell({ borders: { top: { style: D.BorderStyle.SINGLE, size: 6, color: 'E6D7B6' }, bottom: { style: D.BorderStyle.SINGLE, size: 6, color: 'E6D7B6' }, left: { style: D.BorderStyle.SINGLE, size: 6, color: 'E6D7B6' }, right: { style: D.BorderStyle.SINGLE, size: 6, color: 'E6D7B6' } }, shading: { type: D.ShadingType.CLEAR, fill: 'FFFAF0', color: 'auto' }, margins: { top: 140, bottom: 140, left: 180, right: 180 }, children: [para(m.qLabel + (m.wordTarget ? ' · ' + m.wordTarget : ''), { size: 16, bold: true, color: '93600F', caps: true, after: 60 }), para(m.question, { serif: true, size: 26, after: 0 })] })] })] }),
    ];
    for (const s of m.sections) {
      const c = s.color.slice(1).toUpperCase();
      children.push(new D.Paragraph({ spacing: { before: 420, after: 120 }, border: { bottom: { style: D.BorderStyle.SINGLE, size: 12, color: c, space: 4 } }, children: [run((s.number !== '+' ? 'Stage ' + Number(s.number) + ' · ' : '') + s.title, { serif: true, size: 34, color: c })] }));
      for (const a of s.activities) {
        children.push(new D.Paragraph({ keepNext: true, spacing: { before: 260, after: 60 }, children: [run(a.title, { bold: true, size: 25 }), ...(a.done ? [run('   · Finished', { size: 17, color: '2F7A52', bold: true })] : [])] }));
        for (const it of a.items) {
          if (it.t === 'qa') { children.push(new D.Paragraph({ keepNext: true, spacing: { before: 160, after: 30 }, children: [run(it.label, { size: 16, bold: true, color: '5D6B75', caps: true })] })); children.push(para(it.value, { size: 21, after: 80 })); }
          if (it.t === 'table') { children.push(new D.Paragraph({ keepNext: true, spacing: { before: 200, after: 80 }, children: [run(it.title, { size: 19, bold: true })] })); children.push(table(it.head, it.rows, { rowHead: it.rowHead, widths: it.widths })); }
          if (it.t === 'plan') for (const p of it.parts) { children.push(new D.Paragraph({ keepNext: true, spacing: { before: 200, after: 80 }, children: [run(p.title, { size: 20, bold: true })] })); children.push(table(null, p.rows, { rowHead: true, widths: [30, 70] })); }
          if (it.t === 'check') { children.push(new D.Paragraph({ spacing: { before: 160, after: 30 }, children: [run(it.title, { size: 16, bold: true, color: '5D6B75', caps: true })] })); it.items.forEach(([c2, ok]) => children.push(para((ok ? '☑ ' : '☐ ') + c2, { size: 20, color: ok ? '14293A' : '7B8790', after: 20 }))); }
        }
      }
    }
    if (m.marks.length) {
      children.push(new D.Paragraph({ spacing: { before: 420, after: 120 }, border: { bottom: { style: D.BorderStyle.SINGLE, size: 12, color: '8A6A1F', space: 4 } }, children: [run('My highlights', { serif: true, size: 34, color: '8A6A1F' })] }));
      for (const r of m.marks) { children.push(new D.Paragraph({ spacing: { before: 160, after: 40 }, children: [run(r.title, { size: 16, bold: true, color: '5D6B75' })] })); r.ranges.forEach(t => children.push(new D.Paragraph({ spacing: { after: 40 }, children: [new D.TextRun({ text: t.text, font: 'Fraunces', size: 21, highlight: t.type === 'blue' ? 'cyan' : t.type === 'yellow' ? 'yellow' : undefined, underline: t.type === 'underline' ? {} : undefined })] }))); }
    }
    const docFile = new D.Document({ creator: 'DEC15', title: 'My notebook', styles: { default: { document: { run: { font: 'Manrope', size: 21 } } } },
      sections: [{ properties: { page: { margin: { top: 1000, bottom: 1000, left: 1050, right: 1050 } } }, footers: { default: new D.Footer({ children: [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [run('DEC15 · My notebook · page ', { size: 15, color: '7B8790' }), new D.TextRun({ children: [D.PageNumber.CURRENT], font: 'Manrope', size: 15, color: '7B8790' })] })] }) }, children }] });
    const blob = await D.Packer.toBlob(docFile);
    download(blob, fileName('docx'));
    return blob;
  }

  /* ───────── Google Docs: copy rich text, open a new Doc ───────── */
  async function gdocs() {
    const html = docHTML(false), plain = model().sections.map(s => s.title).join('\n');
    let copied = false;
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([plain], { type: 'text/plain' }) })]);
        copied = true;
      }
    } catch (e) { copied = false; }
    return copied;
  }

  /* ───────── print ───────── */
  function print() {
    const f = document.createElement('iframe'); f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    document.body.appendChild(f);
    f.contentDocument.open(); f.contentDocument.write(docHTML(true)); f.contentDocument.close();
    const go = () => { f.contentWindow.focus(); f.contentWindow.print(); setTimeout(() => f.remove(), 2000); };
    f.contentWindow.document.fonts ? f.contentWindow.document.fonts.ready.then(() => setTimeout(go, 150)) : setTimeout(go, 600);
  }

  function fileName(ext) { return `DEC15-W${lesson.week}D${lesson.day}-notebook${person() ? '-' + person().replace(/[^\w]+/g, '-') : ''}.${ext}`; }
  function download(blob, name) { const u = URL.createObjectURL(blob), a = document.createElement('a'); a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 1500); }

  return { model, pageHTML, docHTML, pdf, docx, gdocs, print };
};
