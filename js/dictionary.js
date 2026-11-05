/* DEC10 · the Dictionary (a learner's dictionary beside every page).
   A small book button sits at the right edge of the screen, above the "back to top" arrow. It opens a panel on the
   right: docked beside the page on a wide screen (the lesson stays readable next to it), floating over the page on a
   smaller one, a sheet from the bottom on a phone. The panel has two widths (compact, wide) and remembers its choice.
   Words come from Merriam-Webster's Learner's Dictionary (the same source as the Inspire app); if that is not
   available, from the free dictionaryapi.dev. Lookups are kept on the device so repeat words are instant and offline.
   While the panel is open, double-tap any word on the page to look it up. "Define" in a reading's selection bar looks
   up the selected words (phrases too); the glossary card has a "Full dictionary" link. */
window.DEC15Dictionary = (() => {
  const KEY = 'dec10-dict', CACHE_KEY = 'dec10-dict-cache';
  const MW_KEY = '53b112f6-e6a6-47b4-97ca-243fa187d3bb', MW_URL = 'https://www.dictionaryapi.com/api/v3/references/learners/json/';
  const FREE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/', SUG_URL = 'https://api.datamuse.com/sug?max=8&s=';
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const load = (k, d) => { try { return Object.assign(d, JSON.parse(localStorage.getItem(k)) || {}); } catch (e) { return d; } };
  const S = load(KEY, { size: 'compact', float: false, recent: [], saved: [] });
  const cache = load(CACHE_KEY, { words: {}, order: [] });
  const store = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private window */ } };
  const storeCache = () => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e) { /* full or private */ } };
  let o = {}, fab = null, panel = null, body = null, input = null, status = null, open = false, seq = 0, cur = null, player = null, selT = 0, lastAuto = '';

  /* ───────── Merriam-Webster: reading their JSON (ported from the Inspire app) ───────── */
  const clean = t => String(t || '').replace(/^\s*\{bc\}/, '').replace(/\{bc\}/g, ': ').replace(/\{ldquo\}/g, '“').replace(/\{rdquo\}/g, '”')
    .replace(/\{(?:sx|a_link|d_link|i_link|et_link|mat|dxt)\|([^|}]*)\|?[^}]*\}/g, '$1')
    .replace(/\{dx\}.*?\{\/dx\}/g, '').replace(/\{dx_def\}.*?\{\/dx_def\}/g, '').replace(/\{dx_ety\}.*?\{\/dx_ety\}/g, '')
    .replace(/\{gloss\}(.*?)\{\/gloss\}/g, '[$1]').replace(/\{\/?(?:it|b|inf|sup|sc|wi|phrase|qword|gloss|parahw|p_br)\}/g, '')
    .replace(/\{[^}]*\}/g, '').replace(/\s+/g, ' ').replace(/\s+([,.;:])/g, '$1').replace(/:\s*$/, '').trim();
  const cleanMk = t => clean(String(t || '').replace(/\{(?:it|phrase)\}/g, '').replace(/\{\/(?:it|phrase)\}/g, ''));   // keeps M-W's bold marks
  const audioUrl = a => { if (!a) return ''; const sub = /^bix/.test(a) ? 'bix' : /^gg/.test(a) ? 'gg' : /^[^a-zA-Z]/.test(a) ? 'number' : a.charAt(0).toLowerCase(); return `https://media.merriam-webster.com/audio/prons/en/us/mp3/${sub}/${a}.mp3`; };
  const xrefs = t => { const out = []; String(t || '').replace(/\{(?:dxt|sx|a_link|d_link)\|([^|}]*)/g, (_, w) => { w = w.split(':')[0].trim(); if (w && !out.includes(w)) out.push(w); return _; }); return out; };
  function exprFromNote(text, head) {   // "often + of" with headword "aware" → "aware of"
    let t = String(text || ''); if (!head || !t.includes('+')) return '';
    t = t.replace(/\s*\(.*?\)\s*/g, ' ').replace(/^[\s—-]*/, '').replace(/^(?:(?:often|usually|always|sometimes|commonly|especially|typically)\s+)*(?:used\s+)?(?:followed\s+by\s+)?/i, '').replace(/^\+\s*/, '');
    t = t.replace(/\+\s*verb[‑-]ing\b/ig, 'doing something').replace(/\bverb[‑-]ing\b/ig, 'doing something').replace(/\+\s*verb\b/ig, 'do something').replace(/^verb\b/i, 'do something')
      .replace(/\+\s*noun\b/ig, 'something').replace(/\+/g, ' ').replace(/\s+/g, ' ').trim();
    if (!t || /^(?:noun|adjective|adverb|something)$/i.test(t)) return '';
    if (/^do something$/i.test(t)) t = 'to do something';
    return head + ' ' + t;
  }
  function readSense(sense, head) {
    const out = { definition: '', examples: [], examplesMk: [], notes: [], label: '', phrase: '', see: [] };
    const labels = [].concat(sense.sls || [], sense.lbs || []); if (sense.sgram) labels.push(sense.sgram); if (sense.bnote) labels.push(clean(sense.bnote));
    out.label = labels.map(clean).filter(Boolean).join(', ');
    try { out.phrase = ((sense.sphrasev && sense.sphrasev.phrs) || []).map(p => clean(p.pva || p.phr || '')).filter(Boolean).join(', '); } catch (e) { /* none */ }
    const vis = l => (l || []).map(v => clean(v.t)).filter(Boolean), visMk = l => (l || []).map(v => cleanMk(v.t)).filter(Boolean);
    (sense.dt || []).forEach(([k, v]) => {
      if (k === 'text') { if (!out.definition) out.definition = clean(v); const dx = String(v).match(/\{dx\}.*?\{\/dx\}/g); if (dx) out.see = out.see.concat(xrefs(dx.join(' '))); }
      else if (k === 'vis') { out.examples = out.examples.concat(vis(v)); out.examplesMk = out.examplesMk.concat(visMk(v)); }
      else if (k === 'wsgram' && !out.label) out.label = clean(v);
      else if (k === 'uns' || k === 'snote') (v || []).forEach(group => {
        const note = { text: '', textMk: '', examples: [], examplesMk: [] };
        (Array.isArray(group[0]) ? group : [group]).forEach(g => { if ((g[0] === 'text' || g[0] === 't') && !note.text) { note.text = clean(g[1]); note.textMk = cleanMk(g[1]); } if (g[0] === 'vis') { note.examples = note.examples.concat(vis(g[1])); note.examplesMk = note.examplesMk.concat(visMk(g[1])); } });
        if (!note.text && !out.definition && !note.examples.length) return;
        if (!out.definition && k === 'uns') { out.definition = note.text; out.examples = out.examples.concat(note.examples); out.examplesMk = out.examplesMk.concat(note.examplesMk); return; }
        if (note.text) out.notes.push(note);
      });
    });
    const m = out.definition.match(/\s*—\s*((?:(?:often|usually|always|sometimes)\s*)?\+\s*.+)$/i);
    if (m) { out.definition = out.definition.slice(0, m.index).trim(); out.notes.unshift({ text: m[1].trim(), examples: [], examplesMk: [] }); }
    out.notes.forEach(n => { n.expr = exprFromNote(n.text, head); });
    return out;
  }
  function senses(entry) {
    const head = String((entry.hwi && entry.hwi.hw) || (entry.meta && entry.meta.id) || '').replace(/\*/g, '').split(':')[0], out = [];
    const letterOf = sn => String(sn || '').replace(/^\s*\d+\s*/, '').trim();
    (entry.def || []).forEach(d => (d.sseq || []).forEach(seqList => {
      const items = [];
      (function collect(list) { (list || []).forEach(item => { if (!item) return; if (item[0] === 'pseq') { collect(item[1]); return; }
        const sense = item[0] === 'sense' ? item[1] : (item[0] === 'bs' && item[1] && item[1].sense) ? item[1].sense : (item[0] === 'sen' ? item[1] : null); if (!sense) return;
        items.push({ sn: sense.sn || '', r: readSense(sense, head), headerOnly: item[0] === 'sen' || !sense.dt }); }); })(seqList);
      if (!items.length) return;
      if (items.length === 1) { if (items[0].r.definition || items[0].r.examples.length) out.push(items[0].r); return; }
      let main, subs;
      if (!letterOf(items[0].sn) || items[0].headerOnly) { main = items[0].r; subs = items.slice(1); } else { main = { definition: '', examples: [], examplesMk: [], notes: [], label: '', phrase: '', see: [] }; subs = items; }
      main.subs = subs.filter(x => x.r.definition || x.r.examples.length).map((x, k) => { x.r.letter = letterOf(x.sn) || 'abcdefgh'.charAt(k); return x.r; });
      if (main.definition || main.subs.length) out.push(main);
    }));
    if (!out.length) (entry.shortdef || []).slice(0, 3).forEach(sd => out.push({ definition: clean(sd), examples: [], examplesMk: [], notes: [], see: [] }));
    return out;
  }
  function uroEntry(uro, parent) {   // "awareness" lives inside the entry for "aware"
    const word = String(uro.ure || '').replace(/\*/g, ''), head = String((parent.hwi && parent.hwi.hw) || '').replace(/\*/g, '');
    const own = (uro.prs || [])[0], groups = []; let c = null;
    (uro.utxt || []).forEach(t => {
      if (t[0] === 'wsgram' || t[0] === 'gram') { c = { definition: '', label: '[' + clean(t[1]) + ']', examples: [], examplesMk: [], notes: [], see: [] }; groups.push(c); }
      else if (t[0] === 'vis') { if (!c) { c = { definition: '', label: '', examples: [], examplesMk: [], notes: [], see: [] }; groups.push(c); } (t[1] || []).forEach(v => { c.examples.push(clean(v.t)); c.examplesMk.push(cleanMk(v.t)); }); }
      else if (t[0] === 'uns') { try { (t[1] || []).forEach(g => { const note = { text: '', examples: [], examplesMk: [] };
        (Array.isArray(g[0]) ? g : [g]).forEach(x => { if (x[0] === 'text') note.text = clean(x[1]); if (x[0] === 'vis') (x[1] || []).forEach(v => { note.examples.push(clean(v.t)); note.examplesMk.push(cleanMk(v.t)); }); });
        note.expr = exprFromNote(note.text, word); if (!c) { c = { definition: '', label: '', examples: [], examplesMk: [], notes: [], see: [] }; groups.push(c); } c.notes.push(note); }); } catch (e) { /* odd shape */ } }
    });
    if (uro.gram) groups.forEach(g => { if (!g.label) g.label = '[' + clean(uro.gram) + ']'; });
    let baseDef = ''; try { baseDef = senses(parent)[0].definition; } catch (e) { /* none */ }
    const ipa = (own && own.ipa) || '', audio = own && own.sound ? audioUrl(own.sound.audio) : '';
    return { word, phonetic: ipa ? '/' + ipa + '/' : '', audio, meanings: [{ partOfSpeech: uro.fl || '', definitions: groups.length ? groups : [{ definition: '', examples: [], examplesMk: [], notes: [], see: [] }] }],
      source: 'mw', mw: { phrases: [], related: [{ word: head, pos: parent.fl || '' }], forms: '', seeAlso: [], fromWord: head, fromDef: baseDef } };
  }
  function extras(entry) {
    const head = String((entry.hwi && entry.hwi.hw) || '').replace(/\*/g, ''), phrases = [];
    (entry.dros || []).forEach(dr => {
      const p = { phrase: clean(dr.drp || ''), definition: '', label: [].concat(dr.sls || [], dr.lbs || []).map(clean).filter(Boolean).join(', '), see: [], examples: [], examplesMk: [] };
      try { (dr.def || []).forEach(d => (d.sseq || []).forEach(sq => sq.forEach(item => { const sense = item[0] === 'sense' ? item[1] : null; if (!sense || p.definition) return;
        const s = readSense(sense, head); p.definition = s.definition; p.examples = s.examples.slice(0, 2); p.examplesMk = s.examplesMk.slice(0, 2); if (s.label) p.label = [p.label, s.label].filter(Boolean).join(', '); p.see = s.see.slice(); }))); } catch (e) { /* odd shape */ }
      if (p.phrase) phrases.push(p);
    });
    const seeAlso = []; (entry.dxnls || []).forEach(t => xrefs(t).forEach(w => { if (!seeAlso.includes(w)) seeAlso.push(w); }));
    const related = (entry.uros || []).map(u => ({ word: clean(String(u.ure || '').replace(/\*/g, '')), pos: u.fl || '' })).filter(r => r.word);
    const forms = (entry.ins || []).map(i => { const f = clean(String(i.if || '').replace(/\*/g, '')); return f ? ((i.il && !/^(?:or|;)$/.test(i.il) ? i.il + ' ' : '') + f) : ''; }).filter(Boolean).join('; ');
    return { phrases, related, forms, seeAlso };
  }
  async function mwLookup(w, signal) {
    const r = await fetch(MW_URL + encodeURIComponent(w) + '?key=' + MW_KEY, { signal });
    if (!r.ok) throw new Error('mw ' + r.status);
    const data = await r.json();
    if (!Array.isArray(data)) return null;
    if (!data.length || typeof data[0] !== 'object') return { suggestions: data.filter(x => typeof x === 'string').slice(0, 6) };
    const headOf = e => String((e.hwi && e.hwi.hw) || '').replace(/\*/g, '').toLowerCase(), idOf = e => String((e.meta && e.meta.id) || '').split(':')[0].toLowerCase();
    const objs = data.filter(e => typeof e === 'object');
    const exact = objs.filter(e => idOf(e) === w || headOf(e) === w);
    if (!exact.length) for (const e of objs) { const uro = (e.uros || []).find(u => String(u.ure || '').replace(/\*/g, '').toLowerCase() === w); if (uro) return { entries: [uroEntry(uro, e)] }; }
    const matches = exact.length ? exact : objs.filter(e => ((e.meta && e.meta.stems) || []).some(s => String(s).toLowerCase() === w));
    const entries = (matches.length ? matches : objs).slice(0, 6).map(e => { const p0 = ((e.hwi && e.hwi.prs) || [])[0] || {}, ipa = p0.ipa || p0.mw || '';
      return { word: String((e.hwi && e.hwi.hw) || w).replace(/\*/g, ''), phonetic: ipa ? '/' + ipa + '/' : '', audio: p0.sound ? audioUrl(p0.sound.audio) : '', meanings: [{ partOfSpeech: e.fl || '', definitions: senses(e) }], source: 'mw', mw: extras(e) }; })
      .filter(e => e.meanings[0].definitions.length);
    return entries.length ? { entries } : null;
  }
  async function freeLookup(w, signal) {   // dictionaryapi.dev, when Merriam-Webster is not available
    const r = await fetch(FREE_URL + encodeURIComponent(w), { signal }); if (!r.ok) return null;
    const data = await r.json(); if (!Array.isArray(data) || !data.length) return null;
    return { entries: data.map(e => ({ word: e.word, phonetic: e.phonetic || ((e.phonetics || []).map(p => p.text).find(Boolean) || ''), audio: ((e.phonetics || []).find(p => p.audio) || {}).audio || '', source: 'free',
      meanings: (e.meanings || []).map(m => ({ partOfSpeech: m.partOfSpeech || '', synonyms: m.synonyms || [], definitions: (m.definitions || []).slice(0, 6).map(d => ({ definition: d.definition, examples: d.example ? [d.example] : [], examplesMk: [], notes: [], see: [] })) })) })) };
  }

  /* ───────── looking a word up ───────── */
  const norm = w => String(w || '').replace(/[‘’]/g, "'").replace(/[“”"]/g, '').replace(/\s+/g, ' ').trim().toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9)'.]+$/g, '');
  function remember(w) { S.recent = [w, ...S.recent.filter(x => x !== w)].slice(0, 12); store(); }
  function putCache(w, v) { cache.words[w] = v; cache.order = [w, ...cache.order.filter(x => x !== w)].slice(0, 300); for (const k of Object.keys(cache.words)) if (!cache.order.includes(k)) delete cache.words[k]; storeCache(); }
  async function lookup(raw, from = 'typed') {
    const w = norm(raw); if (!w) return; if (w.length > 60) { o.toast?.('Select a shorter word or phrase.'); return; }
    show(); input.value = raw.trim(); const my = ++seq; cur = { q: w, raw: raw.trim() };
    body.innerHTML = skeleton(w); setStatus(`Looking up “${w}”…`);
    let res = cache.words[w], src = res ? 'cache' : '';
    if (!res) {
      const ctrl = new AbortController(), t = setTimeout(() => ctrl.abort(), 9000);
      try { res = await mwLookup(w, ctrl.signal); src = 'mw'; } catch (e) { res = null; }
      if (!res) { try { res = await freeLookup(w, ctrl.signal); if (res) src = 'free'; } catch (e) { res = null; } }
      clearTimeout(t);
      if (res && res.entries) putCache(w, res);
    }
    if (my !== seq) return;
    if (res && res.entries) { remember(w); body.innerHTML = entryHTML(res.entries, w); setStatus(`${res.entries[0].word}: ${res.entries[0].meanings[0].definitions[0]?.definition || ''}`); body.scrollTop = 0; if (from === 'page' || from === 'reading') input.blur(); return; }
    let sug = (res && res.suggestions) || [];
    if (!sug.length && navigator.onLine) { try { const r = await fetch(SUG_URL + encodeURIComponent(w)); sug = ((await r.json()) || []).map(x => x.word).filter(x => x !== w).slice(0, 6); } catch (e) { /* none */ } }
    if (my !== seq) return;
    body.innerHTML = notFound(w, sug); setStatus(navigator.onLine ? `No entry for “${w}”.` : 'You are offline.');
  }

  /* ───────── the entry on screen ───────── */
  const exWords = expr => String(expr || '').replace(/\s*\(.*?\)\s*/g, ' ').split(/\s+/).filter(w => w && !/^(?:something|someone|somebody|sth|sb|do|doing|one's|verb|\+|noun)$/i.test(w));
  function hl(plain, mk, terms) {   // the headword (or the expression) in bold inside an example
    if (mk && mk.includes('')) return esc(mk).replace(//g, '<b>').replace(//g, '</b>');
    let html = esc(plain || '');
    const list = (terms || []).filter(Boolean).map(exWords).filter(w => w.length).sort((a, b) => b.length - a.length);
    for (const words of list) { const re = new RegExp('(^|[^A-Za-z])(' + words.map(w => w.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&') + '[a-z]{0,4}').join('(?:\\s+[a-z]+){0,2}\\s+') + ')(?![a-z])', 'i'); if (re.test(html)) return html.replace(re, '$1<b>$2</b>'); }
    return html;
  }
  const chip = (w, extra = '') => `<button type="button" class="dx-chip" data-dx-go="${esc(w)}">${esc(w)}${extra}</button>`;
  function senseHTML(d, head, max) {
    const exs = (d.examples || []).slice(0, max), mk = d.examplesMk || [], terms = [d.phrase, head].filter(Boolean).join(', ').split(', ');
    return `${d.phrase ? `<span class="dx-phrase">${esc(d.phrase)}</span>` : ''}${d.label ? `<span class="dx-label">${esc(d.label)}</span>` : ''}${d.definition ? `<span class="dx-def">${esc(d.definition)}</span>` : ''}
      ${exs.map((x, i) => `<span class="dx-ex">“${hl(x, mk[i], terms)}”</span>`).join('')}
      ${(d.notes || []).map(n => `<div class="dx-note">${n.expr ? `<button type="button" class="dx-expr" data-dx-say="${esc(n.expr.replace(/\s*\(.*?\)/g, ''))}">${esc(n.expr)}</button>` : `<span class="dx-note-t"><i>i</i>${n.textMk && n.textMk.includes('') ? hl(n.text, n.textMk, []) : esc(n.text)}</span>`}
        ${(n.examples || []).slice(0, 2).map((x, i) => `<span class="dx-ex">“${hl(x, (n.examplesMk || [])[i], [n.expr, head])}”</span>`).join('')}</div>`).join('')}
      ${(d.see || []).length ? `<span class="dx-see">See ${d.see.map(w => `<button type="button" data-dx-go="${esc(w)}">${esc(w)}</button>`).join(', ')}</span>` : ''}`;
  }
  function entryHTML(entries, q) {
    const e = entries[0], head = e.word, saved = S.saved.includes(q);
    const groups = []; entries.forEach(en => en.meanings.forEach(m => { const pos = (m.partOfSpeech || '').toLowerCase(); let g = groups.find(x => x.pos === pos); if (!g) { g = { pos, defs: [], syn: [] }; groups.push(g); } g.defs = g.defs.concat(m.definitions || []); g.syn = g.syn.concat(m.synonyms || []); }));
    const many = groups.length > 1;
    const exprs = expressions(entries, head), fam = [], see = [];
    entries.forEach(en => { ((en.mw && en.mw.related) || []).forEach(r => { if (!fam.some(x => x.word === r.word)) fam.push(r); }); ((en.mw && en.mw.seeAlso) || []).forEach(w => { if (!see.includes(w)) see.push(w); }); });
    const syn = [...new Set(groups.flatMap(g => g.syn))].slice(0, 8);
    return `<article class="dx-entry">
      <header class="dx-hw">
        <div class="dx-hw-main"><h2>${esc(head)}</h2>${e.phonetic ? `<span class="dx-ipa">${esc(e.phonetic)}</span>` : ''}
          <button type="button" class="dx-say-btn" data-dx-say="${esc(head)}" data-dx-audio="${esc(e.audio || '')}" aria-label="Hear ${esc(head)}" title="Listen">${o.icon('sound')}</button></div>
        <button type="button" class="dx-star${saved ? ' is-on' : ''}" data-dx-star="${esc(q)}" aria-pressed="${saved}" title="${saved ? 'Remove from My words' : 'Save to My words'}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.5 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.8l6.1-.7z"/></svg></button>
        ${e.mw && e.mw.forms ? `<span class="dx-forms">${esc(e.mw.forms)}</span>` : ''}
        ${e.mw && e.mw.fromWord ? `<span class="dx-from">${esc(e.meanings[0].partOfSpeech || 'form')} from <button type="button" data-dx-go="${esc(e.mw.fromWord)}">${esc(e.mw.fromWord)}</button>${e.mw.fromDef ? `: ${esc(e.mw.fromDef)}` : ''}</span>` : ''}
      </header>
      ${many ? `<nav class="dx-pos-tabs" aria-label="Parts of speech">${groups.map((g, k) => `<button type="button" data-dx-pos="${k}" aria-pressed="${k === 0}"><b>${k + 1}</b>${esc(g.pos || 'other')}</button>`).join('')}</nav>` : ''}
      ${groups.map((g, k) => `<section class="dx-pos" id="dx-pos-${k}"><h3 class="dx-pos-h">${many ? `<span class="dx-sup">${k + 1}</span>` : ''}${esc(g.pos || '')}</h3>
        <ol class="dx-senses">${g.defs.slice(0, 30).map(d => `<li class="dx-sense${d.subs && d.subs.length ? ' has-subs' : ''}">${senseHTML(d, head, 3)}
          ${(d.subs || []).map(sb => `<div class="dx-sub"><span class="dx-letter">${esc(sb.letter)}</span><div>${senseHTML(sb, head, 3)}</div></div>`).join('')}</li>`).join('')}</ol></section>`).join('')}
      ${exprs.length ? `<section class="dx-box"><h3>Expressions with “${esc(head)}”</h3>${exprs.slice(0, 10).map(it => `<div class="dx-item"><div class="dx-item-top"><b>${esc(it.expr)}</b><button type="button" class="dx-say-sm" data-dx-say="${esc(it.expr.replace(/\s*\(.*?\)/g, ''))}" aria-label="Listen">${o.icon('sound')}</button></div>
        ${it.label ? `<span class="dx-label">${esc(it.label)}</span>` : ''}${it.def ? `<div class="dx-def">${esc(it.def)}</div>` : ''}${it.exs.slice(0, 2).map((x, i) => `<span class="dx-ex">“${hl(x, it.exsMk[i], [it.expr])}”</span>`).join('')}
        ${it.see.length ? `<span class="dx-see">See ${it.see.map(w => `<button type="button" data-dx-go="${esc(w)}">${esc(w)}</button>`).join(', ')}</span>` : ''}</div>`).join('')}</section>` : ''}
      ${fam.length ? `<section class="dx-chips-sec"><h3>Word family</h3><div class="dx-chips">${fam.map(r => chip(r.word, r.pos ? `<i>${esc(r.pos)}</i>` : '')).join('')}</div></section>` : ''}
      ${see.length ? `<section class="dx-chips-sec"><h3>See also</h3><div class="dx-chips">${see.map(w => chip(w)).join('')}</div></section>` : ''}
      ${syn.length ? `<section class="dx-chips-sec"><h3>Similar words</h3><div class="dx-chips">${syn.map(w => chip(w)).join('')}</div></section>` : ''}
      <footer class="dx-credit">${e.source === 'mw' ? `<span class="dx-mw">M-W</span>From <a href="https://learnersdictionary.com/definition/${encodeURIComponent(q)}" target="_blank" rel="noopener">Merriam-Webster’s Learner’s Dictionary</a>` : `Definition from <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener">Free Dictionary API</a> (Merriam-Webster was not available).`}</footer>
    </article>`;
  }
  function expressions(entries, head) {   // every set phrase and pattern the dictionary gives, in one place
    const seen = {}, items = [];
    const add = (expr, def, exs, exsMk, label, see) => { const key = String(expr || '').toLowerCase().replace(/\s*\(.*?\)/g, '').trim(); if (!key || seen[key]) return; const it = { expr, def: def || '', exs: exs || [], exsMk: exsMk || [], label: label || '', see: see || [] }; seen[key] = it; items.push(it); };
    entries.forEach(en => { en.meanings.forEach(m => (m.definitions || []).reduce((a, d) => a.concat([d], d.subs || []), []).forEach(d => {
      if (d.phrase) d.phrase.split(', ').forEach(ph => add(ph, d.definition, d.examples.slice(0, 1), (d.examplesMk || []).slice(0, 1), d.label));
      (d.notes || []).forEach(n => { if (n.expr) add(n.expr, d.definition, (n.examples || []).slice(0, 2), (n.examplesMk || []).slice(0, 2), d.label);
        else if (n.textMk && n.textMk.includes('')) (n.textMk.match(/([^]+)/g) || []).forEach(mm => { const ph = mm.replace(/[]/g, '').trim(); if (ph.split(' ').length > 1) add(ph, n.text, (n.examples || []).slice(0, 2), (n.examplesMk || []).slice(0, 2), ''); }); });
    })); ((en.mw && en.mw.phrases) || []).forEach(p => add(p.phrase, p.definition, p.examples, p.examplesMk, p.label, p.see)); });
    return items;
  }
  const skeleton = w => `<div class="dx-skel" aria-hidden="true"><i class="w40 h28"></i><i class="w18"></i><i class="w90"></i><i class="w70"></i><i class="w80"></i><i class="w60"></i></div><p class="dx-muted">Looking up “${esc(w)}”…</p>`;
  const notFound = (w, sug) => `<div class="dx-none"><div class="dx-none-art">${o.icon('search')}</div><b>${navigator.onLine ? `No entry for “${esc(w)}”` : 'You are offline'}</b><p>${navigator.onLine ? 'Check the spelling, or try the base form of the word (e.g. <i>decide</i> for <i>decided</i>).' : 'The dictionary needs the internet. Words you looked up before still work.'}</p>
    ${sug.length ? `<h3>Did you mean</h3><div class="dx-chips">${sug.map(s => chip(s)).join('')}</div>` : ''}</div>`;
  function homeHTML() {
    return `<div class="dx-home">
      <div class="dx-home-art" aria-hidden="true"><svg viewBox="0 0 240 170">
        <defs>
          <radialGradient id="dxh-glow" cx=".5" cy=".55" r=".5"><stop offset="0" stop-color="#f6dfae" stop-opacity=".55"/><stop offset=".7" stop-color="#f6dfae" stop-opacity=".12"/><stop offset="1" stop-color="#f6dfae" stop-opacity="0"/></radialGradient>
          <linearGradient id="dxh-cover" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b4d68"/><stop offset="1" stop-color="#14293a"/></linearGradient>
          <linearGradient id="dxh-page" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f7f1e3"/><stop offset=".5" stop-color="#fffdf7"/><stop offset="1" stop-color="#fbf7ee"/></linearGradient>
          <linearGradient id="dxh-pageR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fbf7ee"/><stop offset=".5" stop-color="#fffdf7"/><stop offset="1" stop-color="#f3ecdc"/></linearGradient>
          <linearGradient id="dxh-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6d27a"/><stop offset="1" stop-color="#c88a1e"/></linearGradient>
          <linearGradient id="dxh-lens" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9f0f7" stop-opacity=".9"/><stop offset="1" stop-color="#9fd3e6" stop-opacity=".55"/></linearGradient>
          <filter id="dxh-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#14293a" flood-opacity=".28"/></filter>
        </defs>
        <circle class="dxh-glow" cx="120" cy="92" r="82" fill="url(#dxh-glow)"/>
        <g class="dxh-ring"><circle cx="120" cy="92" r="70" fill="none" stroke="#e3a843" stroke-opacity=".35" stroke-width="1.2" stroke-dasharray="3 7"/></g>
        <ellipse cx="120" cy="150" rx="66" ry="7" fill="#14293a" opacity=".1"/>
        <g class="dxh-book">
          <path d="M34 54c24-10 52-10 86 4 34-14 62-14 86-4v78c-24-10-52-10-86 4-34-14-62-14-86-4z" fill="url(#dxh-cover)" filter="url(#dxh-sh)"/>
          <path d="M40 60c22-9 48-9 80 4v66c-32-13-58-13-80-4z" fill="url(#dxh-page)"/>
          <path d="M200 60c-22-9-48-9-80 4v66c32-13 58-13 80-4z" fill="url(#dxh-pageR)"/>
          <path d="M120 64v66" fill="none" stroke="#14293a" stroke-opacity=".18" stroke-width="2"/>
          <path d="M44 64c20-8 44-8 72 3M44 70c20-8 44-8 72 3" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1"/>
          <g class="dxh-lines" fill="none" stroke-linecap="round" stroke-width="3.2">
            <path d="M52 80c14-5 30-5 56 2" stroke="#14293a" stroke-opacity=".55"/>
            <path d="M52 90c12-4 26-4 46 1" stroke="#e3a843" stroke-opacity=".9"/>
            <path d="M52 100c14-5 30-5 56 2M52 110c10-3 22-3 36 0" stroke="#c9b48a" stroke-opacity=".7"/>
            <path d="M132 83c26-7 42-7 56-2M132 93c22-6 38-6 50-1M132 103c26-7 42-7 56-2M132 113c18-5 30-5 40-2" stroke="#c9b48a" stroke-opacity=".7"/>
          </g>
          <path class="dxh-mark" d="M56 86c12-4 24-4 42 0" fill="none" stroke="#ffe08a" stroke-width="9" stroke-linecap="round" opacity=".75"/>
          <path d="M54 90c12-4 26-4 46 1" fill="none" stroke="#14293a" stroke-opacity=".75" stroke-width="3.2" stroke-linecap="round"/>
          <g class="dxh-flip"><path d="M120 64c22-9 48-9 80 4v66c-32-13-58-13-80-4z" fill="#fffdf7" stroke="#e3dccb" stroke-width="1"/><path d="M132 83c26-7 42-7 56-2M132 93c22-6 38-6 50-1M132 103c26-7 42-7 56-2" fill="none" stroke="#d9cfb6" stroke-width="3" stroke-linecap="round"/></g>
          <path class="dxh-ribbon" d="M138 62v40l-6-6-6 6V62z" fill="url(#dxh-gold)"/>
        </g>
        <g class="dxh-letters" font-family="Fraunces, Georgia, serif" font-weight="600" fill="#14293a">
          <text class="dxh-l l1" x="70" y="52" font-size="22">Aa</text>
          <text class="dxh-l l2" x="112" y="48" font-size="14" fill="#2f6db5">b</text>
          <text class="dxh-l l3" x="140" y="50" font-size="17" fill="#c2562f">é</text>
          <text class="dxh-l l4" x="96" y="46" font-size="12" fill="#1f8a7a">c</text>
        </g>
        <g class="dxh-glass">
          <circle cx="188" cy="102" r="22" fill="url(#dxh-lens)" stroke="#14293a" stroke-width="4"/>
          <circle cx="188" cy="102" r="22" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.5"/>
          <path d="M178 92a13 13 0 0 1 10-4" stroke="#fff" stroke-opacity=".9" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M205 119l14 14" stroke="#14293a" stroke-width="8" stroke-linecap="round"/><path d="M206 120l12 12" stroke="#e3a843" stroke-width="3.5" stroke-linecap="round"/>
          <text x="188" y="108" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="16" font-weight="600" fill="#14293a">Aa</text>
        </g>
        <path class="dxh-tw t1" d="M44 34l1.8 4.4 4.4 1.8-4.4 1.8-1.8 4.4-1.8-4.4-4.4-1.8 4.4-1.8z" fill="#e3a843"/>
        <path class="dxh-tw t2" d="M206 40l1.4 3.4 3.4 1.4-3.4 1.4-1.4 3.4-1.4-3.4-3.4-1.4 3.4-1.4z" fill="#2f6db5"/>
        <path class="dxh-tw t3" d="M214 128l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2z" fill="#1f8a7a"/>
        <circle class="dxh-tw t2" cx="30" cy="120" r="2.6" fill="#c2562f"/>
      </svg></div>
      <p class="dx-lead">Type a word, or <b>double-tap any word on the page</b> while the dictionary is open.</p>
      ${S.recent.length ? `<section class="dx-chips-sec"><h3>Recent <button type="button" class="dx-link" data-dx="clear-recent">Clear</button></h3><div class="dx-chips">${S.recent.map(w => chip(w)).join('')}</div></section>` : ''}
      ${S.saved.length ? `<section class="dx-chips-sec"><h3>My words <span class="dx-count">${S.saved.length}</span></h3><div class="dx-chips">${S.saved.map(w => chip(w, '<svg class="dx-chip-star" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.5 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.8l6.1-.7z"/></svg>')).join('')}</div></section>` : `<p class="dx-muted">Tap the star on a word to keep it in <b>My words</b>.</p>`}
    </div>`;
  }
  function setStatus(t) { if (status) status.textContent = t; }

  /* ───────── sound ───────── */
  function say(text, url) {
    try { player?.pause(); } catch (e) { /* none */ }
    if (url) { player = new Audio(url); player.play().catch(() => speak(text)); return; }
    speak(text);
  }
  function speak(text) { if (!('speechSynthesis' in window)) return; speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = .92; const v = speechSynthesis.getVoices().find(x => /en[-_](US|GB|AU)/i.test(x.lang) && /Google|Samantha|Daniel|Karen|Natural|Online/i.test(x.name)) || speechSynthesis.getVoices().find(x => /^en/i.test(x.lang)); if (v) u.voice = v; speechSynthesis.speak(u); }

  /* ───────── the panel, the button, opening and closing ───────── */
  const narrow = () => matchMedia('(max-width: 900px)').matches, canDock = () => matchMedia('(min-width: 1180px)').matches;
  const ICON = {
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5c2.6-1 5.3-1 8 1 2.7-2 5.4-2 8-1v13c-2.6-1-5.3-1-8 1-2.7-2-5.4-2-8-1z"/><path d="M12 6.5v13"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    wide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 7H4v5M15 17h5v-5"/><path d="M4 7l6 6M20 17l-6-6"/></svg>',
    compact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 4v6H4M14 20v-6h6"/><path d="M10 10 4 4M14 14l6 6"/></svg>',
    dock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M14 4v16"/></svg>',
    float: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><rect x="11" y="9" width="8" height="8" rx="1.5" fill="currentColor" stroke="none" opacity=".35"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>',
  };
  function build() {
    fab = document.createElement('button'); fab.type = 'button'; fab.className = 'dx-fab'; fab.setAttribute('aria-label', 'Open the dictionary'); fab.setAttribute('aria-expanded', 'false'); fab.title = 'Dictionary';
    fab.innerHTML = `<span class="dx-fab-ic"><svg viewBox="0 0 28 28" aria-hidden="true"><defs><linearGradient id="dxf-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6d27a"/><stop offset="1" stop-color="#d9952a"/></linearGradient></defs>
        <path d="M4 7.5c3.2-1.4 6.5-1.4 10 1.2 3.5-2.6 6.8-2.6 10-1.2v14.2c-3.2-1.4-6.5-1.4-10 1.2-3.5-2.6-6.8-2.6-10-1.2z" fill="#fffaf0"/>
        <path d="M14 8.7v14.2" fill="none" stroke="#14293a" stroke-opacity=".35" stroke-width="1.4"/>
        <path d="M4 7.5c3.2-1.4 6.5-1.4 10 1.2 3.5-2.6 6.8-2.6 10-1.2v14.2c-3.2-1.4-6.5-1.4-10 1.2-3.5-2.6-6.8-2.6-10-1.2z" fill="none" stroke="#14293a" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M7 12.2c2-.7 4-.7 6 .3M7 15.4c2-.7 4-.7 6 .3M17.5 12.5c2-1 4-1 5.5-.3M17.5 15.7c2-1 4-1 5.5-.3" fill="none" stroke="#14293a" stroke-opacity=".5" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M8 18.4c2-.7 4-.7 6 .3" fill="none" stroke="url(#dxf-g)" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M19.5 5.5v6l-1.6-1.5-1.6 1.5v-6z" fill="url(#dxf-g)"/></svg></span><span class="dx-fab-tx">Dictionary</span>`;
    panel = document.createElement('aside'); panel.className = 'dx-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Dictionary'); panel.setAttribute('aria-modal', 'false');
    if ('showPopover' in panel) panel.setAttribute('popover', 'manual');
    panel.innerHTML = `<header class="dx-head"><span class="dx-logo">${ICON.book}</span><div class="dx-title"><b>Dictionary</b><small>Learner’s · English–English</small></div>
        <button type="button" class="dx-ib" data-dx="dock" title="Dock beside the page">${ICON.dock}</button>
        <button type="button" class="dx-ib" data-dx="size" title="Wider">${ICON.wide}</button>
        <button type="button" class="dx-ib dx-close" data-dx="close" aria-label="Close the dictionary">${ICON.close}</button></header>
      <form class="dx-search" role="search"><span class="dx-search-ic">${ICON.search}</span><input type="search" class="dx-in" placeholder="Look up a word or phrase…" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Word to look up" enterkeyhint="search"><button type="submit" class="dx-go">Look up</button></form>
      <div class="dx-body"></div><p class="dx-status" aria-live="polite"></p>`;
    body = panel.querySelector('.dx-body'); input = panel.querySelector('.dx-in'); status = panel.querySelector('.dx-status');
    body.innerHTML = homeHTML();
    document.body.append(fab, panel); paintChrome();
    fab.addEventListener('click', () => (open ? hide() : show(true)));
    panel.querySelector('.dx-search').addEventListener('submit', e => { e.preventDefault(); const v = input.value.trim(); if (v) lookup(v); else { cur = null; body.innerHTML = homeHTML(); } });
    input.addEventListener('input', () => { if (!input.value.trim() && cur) { cur = null; seq++; body.innerHTML = homeHTML(); setStatus(''); } });
    panel.addEventListener('click', e => {
      const t = e.target.closest('[data-dx], [data-dx-go], [data-dx-say], [data-dx-star], [data-dx-pos]'); if (!t) return;
      if (t.dataset.dxGo) { lookup(t.dataset.dxGo); return; }
      if (t.dataset.dxSay !== undefined) { say(t.dataset.dxSay, t.dataset.dxAudio || ''); t.classList.add('is-playing'); setTimeout(() => t.classList.remove('is-playing'), 900); return; }
      if (t.dataset.dxStar !== undefined) { const w = t.dataset.dxStar, on = !S.saved.includes(w); S.saved = on ? [w, ...S.saved].slice(0, 200) : S.saved.filter(x => x !== w); store(); t.classList.toggle('is-on', on); t.setAttribute('aria-pressed', on); t.title = on ? 'Remove from My words' : 'Save to My words'; o.toast?.(on ? `“${w}” saved to My words.` : `“${w}” removed from My words.`); return; }
      if (t.dataset.dxPos !== undefined) { panel.querySelectorAll('[data-dx-pos]').forEach(b => b.setAttribute('aria-pressed', b === t)); panel.querySelector('#dx-pos-' + t.dataset.dxPos)?.scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' }); return; }
      const k = t.dataset.dx;
      if (k === 'close') hide();
      if (k === 'size') { S.size = S.size === 'wide' ? 'compact' : 'wide'; store(); paintChrome(); }
      if (k === 'dock') { S.float = !S.float; store(); paintChrome(); }
      if (k === 'clear-recent') { S.recent = []; store(); body.innerHTML = homeHTML(); }
    });
    panel.addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); hide(); } });
    addEventListener('resize', paintChrome);
    /* while open: double-tap (or select) one word anywhere on the page to look it up */
    document.addEventListener('selectionchange', () => { clearTimeout(selT); if (!open) return; selT = setTimeout(autoLookup, 380); });
    /* "Define" in a reading's selection bar, and "Full dictionary" on a glossary card */
    document.addEventListener('click', e => {
      const d = e.target.closest('[data-dx-define]'); if (d) { const t = String(getSelection() || '').trim(); if (t) lookup(t, 'reading'); else o.toast?.('Select a word first.'); return; }
      const g = e.target.closest('[data-dx-word]'); if (g) { e.preventDefault(); lookup(g.dataset.dxWord, 'reading'); }
    });
    addEventListener('online', () => { if (open && cur && body.querySelector('.dx-none')) lookup(cur.raw); });
    new MutationObserver(() => { if (open) place(); }).observe(document.body, { attributes: true, attributeFilter: ['open'], subtree: true });
  }
  const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  function autoLookup() {
    const sel = getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) return;
    const t = String(sel).trim(); if (!/^[A-Za-z][A-Za-z'’-]{0,29}$/.test(t)) return;
    const el = sel.anchorNode?.nodeType === 1 ? sel.anchorNode : sel.anchorNode?.parentElement;
    if (!el || el.closest('.dx-panel, input, textarea, [contenteditable], button, .excalidraw, .word-sticky')) return;
    const w = norm(t); if (w === lastAuto || w === cur?.q) return; lastAuto = w;
    lookup(t, 'page');
  }
  function paintChrome() {
    const docked = !S.float && canDock() && !narrow();
    document.body.classList.toggle('dx-docked', open && docked); document.body.classList.toggle('dx-open', open);
    panel.classList.toggle('is-docked', docked); panel.classList.toggle('is-wide', S.size === 'wide');
    document.documentElement.style.setProperty('--dx-w', S.size === 'wide' ? 'min(720px, 52vw)' : 'min(430px, 38vw)');
    const sz = panel.querySelector('[data-dx="size"]'), dk = panel.querySelector('[data-dx="dock"]');
    sz.innerHTML = S.size === 'wide' ? ICON.compact : ICON.wide; sz.title = S.size === 'wide' ? 'Narrower' : 'Wider'; sz.setAttribute('aria-label', sz.title); sz.hidden = narrow();
    dk.innerHTML = S.float ? ICON.dock : ICON.float; dk.title = S.float ? 'Dock beside the page' : 'Float over the page'; dk.setAttribute('aria-label', dk.title); dk.hidden = !canDock() || narrow();
    fab.classList.toggle('is-open', open); fab.setAttribute('aria-expanded', open);
  }
  /* A modal dialog (the reading window) makes everything outside it inert, even a popover above it. So while one is open the
     panel lives inside that dialog (its fixed position is still the viewport's), and moves back to the body when it closes. */
  function place() {
    const want = document.querySelector('dialog[open]') || document.body; if (panel.parentElement === want) return;
    const had = panel.contains(document.activeElement), shown = panel.matches(':popover-open');
    if (shown) { try { panel.hidePopover(); } catch (e) { /* none */ } }
    want.append(panel);
    if (open && panel.hasAttribute('popover')) { try { panel.showPopover(); } catch (e) { /* none */ } }
    if (open && had) input.focus({ preventScroll: true });
  }
  function show(focus = false) {
    open = true; place();
    if (panel.hasAttribute('popover')) { try { panel.showPopover(); } catch (e) { /* already shown */ } } panel.classList.add('is-shown');
    paintChrome(); if (focus) { input.focus({ preventScroll: true }); input.select(); }
  }
  function hide() {
    if (!open) return; open = false; seq++;
    if (panel.hasAttribute('popover')) { try { panel.hidePopover(); } catch (e) { /* none */ } } panel.classList.remove('is-shown');
    paintChrome(); fab.focus({ preventScroll: true });
  }
  function init(opts) { o = opts || {}; o.icon ??= () => ''; build(); }
  return { init, lookup: w => lookup(w, 'reading'), open: () => show(true), close: hide, get isOpen() { return open; } };
})();
