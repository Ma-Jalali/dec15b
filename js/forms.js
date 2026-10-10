/* DEC15 · forms and sharing (v2.33)
   app.js calls createDEC15Forms(ctx) and adds these block types to the lesson renderer:

     form       { type: 'form', id, title, intro?, observe?: 'Who are you observing?', scale?: ['Yes', 'Mostly', 'Needs work'],
                  cols?: ['Comments'], sections: [{ label, hint?, items: ['question', ...] }], fields?: [{ id, label, rows?, placeholder? }],
                  send?: true }
                a feedback / reflection form: each question gets a rating (Yes · Mostly · Needs work) and comment boxes.
     scale      { type: 'scale', id, title?, statement, ends: ['Strongly disagree', 'Strongly agree'], mid?: 'Neutral',
                  answer?: 0–100, why? }   place a statement on a line (e.g. how strongly a thesis agrees).
     jeopardy   { type: 'jeopardy', id, title?, teams?: 4, seconds?: 20, cols: [{ title, clues: [{ pts, clue, answer }] }] }
                a team quiz board for the projector: answers must be given as a question ("What is …?").

   send: true on a form, table or fields block adds "Share with classmates" and "Download PDF".
   The student chooses classmates who have signed in; each of them receives a read-only copy in
   "Shared with me" (#/shared, side panel). Sending again updates the copy. Table: form_shares
   (supabase/migrations/20261010000000_dec15_form_shares.sql). Only sender and recipient can read a share. */
window.createDEC15Forms = function ({ getState, save, rerender, esc, strip, icon, toast, lesson, tableRows, findBlock, getCloud, getClass, signIn, avatarHTML, locked }) {
  const st = () => getState();
  const val = k => st().values[k] ?? '';
  const set = (k, v) => { st().values[k] = v; save(); };
  const filled = v => String(v ?? '').trim() !== '';
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SCALE = ['Yes', 'Mostly', 'Needs work'];
  const RATE_TONE = { 0: 'yes', 1: 'mostly', 2: 'work' };
  const B = {};

  /* ───────── form: rating questions with comments ───────── */
  const fkey = (b, s, q) => `${b.id}-${s}-${q}`;
  const scaleOf = b => b.scale || SCALE;
  const colsOf = b => b.cols || ['Comments'];
  function formCount(b) {
    let n = 0, all = 0;
    b.sections.forEach((s, si) => s.items.forEach((_, qi) => { all++; if (filled(val(fkey(b, si, qi)))) n++; }));
    return [n, all];
  }
  B.form = (b, a) => {
    const scale = scaleOf(b), cols = colsOf(b), [n, all] = formCount(b);
    return `<section class="block fform" id="form-${esc(b.id)}">
    <div class="ff-head"><span class="ff-ico" aria-hidden="true">${icon('model')}</span><div><h3>${b.title}</h3>${b.intro ? `<p>${b.intro}</p>` : ''}</div>
      <div class="ff-meter" style="--p:${all ? (n / all).toFixed(3) : 0}" aria-label="${n} of ${all} questions rated"><span><i></i></span><b>${n}/${all}</b></div></div>
    ${b.observe ? `<label class="ff-observe"><span>${icon('users')}${esc(b.observe)}</span><input type="text" data-save="${esc(b.id)}-who" value="${esc(val(b.id + '-who'))}" placeholder="Names of the classmate(s) or group"></label>` : ''}
    ${b.sections.map((s, si) => `<div class="ff-sec"><h4>${s.label}${s.hint ? `<small>${s.hint}</small>` : ''}</h4>
      <ol class="ff-items">${s.items.map((q, qi) => { const k = fkey(b, si, qi), cur = val(k);
        return `<li class="ff-item${cur ? ' is-rated rate-' + RATE_TONE[scale.indexOf(cur)] : ''}">
          <p class="ff-q">${q}</p>
          <div class="ff-rate" role="radiogroup" aria-label="${esc(strip(q))}">${scale.map((o, oi) => `<button type="button" role="radio" aria-checked="${cur === o}" class="ff-opt r-${RATE_TONE[oi] || 'x'}${cur === o ? ' on' : ''}" data-form-rate="${esc(k)}" data-opt="${esc(o)}">${oi === 0 ? '<i>✓</i>' : oi === 1 ? '<i>~</i>' : '<i>!</i>'}${esc(o)}</button>`).join('')}</div>
          <div class="ff-notes${cols.length > 1 ? ' two' : ''}">${cols.map((c, ci) => `<label><span>${esc(c)}</span><textarea rows="2" data-save="${esc(k)}-c${ci}" placeholder="${ci ? 'What will you do next time?' : 'Why? Give an example.'}">${esc(val(k + '-c' + ci))}</textarea></label>`).join('')}</div>
        </li>`; }).join('')}</ol></div>`).join('')}
    ${(b.fields || []).map(f => `<div class="field ff-field"><label for="f-${esc(f.id)}">${esc(f.label)}</label><textarea id="f-${esc(f.id)}" data-save="${esc(f.id)}" rows="${f.rows || 3}" placeholder="${esc(f.placeholder || '')}">${esc(val(f.id))}</textarea></div>`).join('')}
  </section>${b.send ? sendBar(b, a) : ''}`;
  };

  /* ───────── scale: where does this statement sit on the line? ───────── */
  B.scale = b => {
    const v = val(b.id), checked = st().checked[b.id], has = v !== '' && v != null, pos = has ? Number(v) : 50;
    const ends = b.ends || ['Strongly disagree', 'Strongly agree'];
    return `<section class="block fscale${checked ? ' is-checked' : ''}" id="scale-${esc(b.id)}">
    ${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
    <blockquote class="fs-statement">${b.statement}</blockquote>
    <div class="fs-track" style="--v:${pos}%">
      <input type="range" min="0" max="100" step="1" value="${pos}" data-save="${esc(b.id)}" aria-label="${esc(ends[0])} to ${esc(ends[1])}" class="${has ? 'is-set' : ''}">
      ${checked && b.answer != null ? `<span class="fs-answer" style="--a:${b.answer}%" aria-hidden="true"><i></i><b>Suggested</b></span>` : ''}
      <div class="fs-ends"><span>‹ ${esc(ends[0])}</span>${b.mid ? `<span>${esc(b.mid)}</span>` : ''}<span>${esc(ends[1])} ›</span></div>
    </div>
    ${checked && b.why ? `<p class="fs-why">${icon('bulb')}<span>${b.why}</span></p>` : ''}
    ${b.answer != null ? `<div class="quiz-bar">${checked ? `<button class="btn-quiet" data-scale-reset="${esc(b.id)}">Try again</button>` : `<button class="btn" data-scale-check="${esc(b.id)}">Compare with the suggested position ${icon('arrow')}</button>`}</div>` : ''}
  </section>`;
  };

  /* ───────── jeopardy: a team board for the projector ───────── */
  let jpOpen = null, jpShow = false, jpTimer = 0, jpLeft = 0;
  const jpState = b => { try { const s = JSON.parse(val(b.id) || '{}'); return { used: s.used || [], scores: s.scores || [], teams: s.teams || b.teams || 4 }; } catch (e) { return { used: [], scores: [], teams: b.teams || 4 }; } };
  const jpSave = (b, s) => set(b.id, JSON.stringify(s));
  const TEAM_COL = ['#2b776e', '#b0512a', '#3a58a0', '#7a4a8c', '#985c0e', '#3f7a3a'];
  B.jeopardy = b => {
    const s = jpState(b), open = jpOpen && jpOpen.id === b.id ? jpOpen : null, clue = open ? b.cols[open.c].clues[open.r] : null;
    const scores = Array.from({ length: s.teams }, (_, i) => s.scores[i] || 0), best = Math.max(...scores);
    return `<section class="block jeop" id="jp-${esc(b.id)}">
    <div class="jp-top">${b.title ? `<h3 class="block-heading">${b.title}</h3>` : ''}
      <label class="jp-teams">Teams <select data-jp-teams="${esc(b.id)}">${[2, 3, 4, 5, 6].map(n => `<option${n === s.teams ? ' selected' : ''}>${n}</option>`).join('')}</select></label></div>
    <div class="jp-scores">${scores.map((p, i) => `<div class="jp-team${p && p === best ? ' lead' : ''}" style="--tc:${TEAM_COL[i]}"><span>Team ${i + 1}</span><b>${p}</b></div>`).join('')}</div>
    <div class="jp-board" style="--cols:${b.cols.length}" role="grid" aria-label="Quiz board">
      ${b.cols.map(c => `<div class="jp-cat" role="columnheader">${c.title}</div>`).join('')}
      ${b.cols[0].clues.map((_, r) => b.cols.map((c, ci) => { const k = ci + '-' + r, used = s.used.includes(k);
        return `<button type="button" class="jp-cell${used ? ' used' : ''}" data-jp-open="${esc(b.id)}" data-c="${ci}" data-r="${r}"${used ? ' aria-label="Used"' : ''}>${used ? '' : c.clues[r].pts}</button>`; }).join('')).join('')}
    </div>
    ${clue ? `<div class="jp-clue" role="dialog" aria-label="Clue">
      <div class="jp-cm"><span>${b.cols[open.c].title} · ${clue.pts}</span><span class="jp-clock" style="--t:${jpLeft / (b.seconds || 20)}"><i></i><b id="jp-left">${jpLeft}</b></span></div>
      <p class="jp-text">${clue.clue}</p>
      ${jpShow ? `<p class="jp-ans">${icon('check')}<span>${clue.answer}</span></p>` : `<button type="button" class="btn-quiet" data-jp-show="${esc(b.id)}">Show the answer</button>`}
      <div class="jp-award"><span>Points to:</span>${scores.map((_, i) => `<button type="button" class="jp-give" style="--tc:${TEAM_COL[i]}" data-jp-give="${esc(b.id)}" data-team="${i}">Team ${i + 1}</button>`).join('')}<button type="button" class="btn-quiet" data-jp-give="${esc(b.id)}" data-team="-1">No points</button></div>
      <p class="jp-rule">Answer as a question: <i>“What is …?” · “Who is …?”</i></p>
    </div>` : ''}
    <div class="jp-foot"><span>${s.used.length} of ${b.cols.length * b.cols[0].clues.length} clues played</span><button type="button" class="btn-quiet btn-sm" data-jp-reset="${esc(b.id)}">${icon('undo')}New game</button></div>
  </section>`;
  };
  function jpTick(b) {
    clearInterval(jpTimer); jpLeft = b.seconds || 20;
    jpTimer = setInterval(() => { jpLeft = Math.max(0, jpLeft - 1); const el = document.getElementById('jp-left'); if (!el) { clearInterval(jpTimer); return; }
      el.textContent = jpLeft; el.closest('.jp-clock')?.style.setProperty('--t', jpLeft / (b.seconds || 20)); if (!jpLeft) { clearInterval(jpTimer); el.closest('.jp-clock')?.classList.add('out'); } }, 1000);
  }

  /* ───────── snapshots: what a share contains ───────── */
  function place(a) {
    const s = lesson.sections.find(x => x.activities.includes(a));
    return `Week ${lesson.week} · Day ${lesson.day}${s ? ' · ' + (s.code || '') + ' ' + s.title : ''}`;
  }
  function snapshot(b, a) {
    const parts = [];
    if (b.type === 'form') {
      const scale = scaleOf(b), cols = colsOf(b);
      if (b.observe && filled(val(b.id + '-who'))) parts.push({ t: 'qa', label: b.observe, value: val(b.id + '-who') });
      b.sections.forEach((s, si) => {
        const rows = s.items.map((q, qi) => { const k = fkey(b, si, qi); return [strip(q), val(k) || '', ...cols.map((_, ci) => String(val(k + '-c' + ci)))]; });
        parts.push({ t: 'table', title: strip(s.label), head: ['Question', scale.join(' / '), ...cols], rows, rate: 1 });
      });
      (b.fields || []).forEach(f => filled(val(f.id)) && parts.push({ t: 'qa', label: f.label, value: val(f.id) }));
    }
    if (b.type === 'table') {
      const n = tableRows(b), rows = [];
      for (let r = 0; r < n; r++) {
        const cells = b.columns.map((c, ci) => ci === 0 && b.fixed?.[r] ? strip(b.fixed[r]).trim() : String(val(`${b.id}-${r}-${ci}`)));
        if (b.fixed?.[r] || cells.some(filled)) rows.push(cells);
      }
      parts.push({ t: 'table', title: strip(b.title || 'Table'), head: b.columns.map(strip), rows, rowHead: !!b.fixed });
    }
    if (b.type === 'fields') b.fields.forEach(f => parts.push({ t: 'qa', label: f.label, value: String(val(f.id)) }));
    return { v: 1, title: strip(b.title || a?.title || 'Form'), activity: a?.title || '', place: a ? place(a) : '', parts };
  }
  function hasContent(snap) { return snap.parts.some(p => p.t === 'qa' ? filled(p.value) : p.rows.some(r => r.slice(p.rowHead ? 1 : 0).some(filled))); }

  /* ───────── the share bar under a form ───────── */
  const actOf = new Map();   // block id → activity
  function sendBar(b, a) {
    if (a) actOf.set(b.id, a);
    const sent = (outbox.get(b.id) || []);
    return `<div class="send-bar" data-send-bar="${esc(b.id)}">
      <div class="sb-art" aria-hidden="true"><svg viewBox="0 0 48 48"><rect x="7" y="9" width="26" height="32" rx="4" fill="#fff" stroke="currentColor" stroke-width="2"/><path d="M13 18h14M13 24h14M13 30h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="36" cy="33" r="9" fill="currentColor"/><path d="M32 33h8m-3-3 3 3-3 3" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <div class="sb-tx"><b>${b.sendLabel || 'Share this form'}</b><small>${b.sendHint || 'Send a copy to the classmate or group it is about — only they will see it, in “Shared with me”.'}</small>
        ${sent.length ? `<span class="sb-sent">${icon('check')}Sent to ${sent.map(s => `<em>${esc(firstName(s.name))}</em>`).join(', ')}</span>` : ''}</div>
      <div class="sb-btns"><button type="button" class="btn btn-sm" data-send-open="${esc(b.id)}">${icon('users')}${sent.length ? 'Share again' : 'Share with classmates'}</button>
        <button type="button" class="btn-quiet btn-sm" data-send-pdf="${esc(b.id)}">${icon('download')}PDF</button></div>
    </div>`;
  }
  const firstName = n => String(n || 'Classmate').split(' ')[0];

  /* ───────── data: people, my sent shares, my inbox ───────── */
  const cloud = () => getCloud();
  const db = () => (cloud()?.user && cloud().client) || null;
  const me = () => cloud()?.user?.id || null;
  let people = [], inbox = [], outbox = new Map(), sentAll = [], loaded = false, ch = null, connectedAs = null;
  async function connect() {
    const uid = me(); if (uid === connectedAs) return; disconnect(); connectedAs = uid;
    const c = db(); if (!c) { paintBadge(); return; }
    try {
      const [pp, rows] = await Promise.all([c.rpc('class_people'), c.from('form_shares').select('id, sender_id, sender_name, sender_role, recipient_id, lesson_id, block_id, title, place, note, body, created_at, updated_at, read_at').or(`recipient_id.eq.${uid},sender_id.eq.${uid}`).order('updated_at', { ascending: false }).limit(400)]);
      people = pp.data || []; setRows(rows.data || []); loaded = true;
    } catch (e) { loaded = true; }
    paintBadge(); refresh(true);
    if (typeof c.channel === 'function') ch = c.channel('dec15-shares-' + uid)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'form_shares', filter: `recipient_id=eq.${uid}` }, p => onLive(p))
      .subscribe();
  }
  function disconnect() { try { if (ch) cloud()?.client?.removeChannel(ch); } catch (e) { /* ignore */ } ch = null; inbox = []; sentAll = []; outbox = new Map(); loaded = false; connectedAs = null; paintBadge(); }
  function setRows(rows) {
    const uid = me();
    inbox = rows.filter(r => r.recipient_id === uid); sentAll = rows.filter(r => r.sender_id === uid);
    outbox = new Map();
    sentAll.filter(r => r.lesson_id === lesson.id).forEach(r => { const list = outbox.get(r.block_id) || []; list.push({ id: r.id, to: r.recipient_id, name: personName(r.recipient_id) }); outbox.set(r.block_id, list); });
  }
  const personName = id => people.find(p => p.id === id)?.full_name || 'Classmate';
  function onLive(p) {
    if (p.eventType === 'DELETE') { inbox = inbox.filter(r => r.id !== p.old?.id); paintBadge(); refresh(); return; }
    const r = p.new; if (!r?.id) return;
    const was = inbox.find(x => x.id === r.id); inbox = [r, ...inbox.filter(x => x.id !== r.id)];
    paintBadge(); refresh();
    if (!r.read_at && (!was || was.updated_at !== r.updated_at)) notice(r, !!was);
  }
  const unread = () => inbox.filter(r => !r.read_at).length;
  function paintBadge() {
    const link = document.getElementById('side-shared'); if (!link) return;
    let i = link.querySelector('.side-badge'); const n = unread();
    if (!n) { i?.remove(); return; }
    if (!i) { i = document.createElement('i'); i.className = 'side-badge'; link.append(i); }
    i.textContent = n > 9 ? '9+' : n; i.setAttribute('aria-label', n + ' new');
  }
  function notice(r, again) {
    document.querySelector('.share-notice')?.remove();
    const el = document.createElement('div'); el.className = 'share-notice'; el.setAttribute('role', 'status');
    el.innerHTML = `<span class="sn-ico" aria-hidden="true">${icon('model')}</span><span><b>${esc(r.sender_name)}</b> ${again ? 'updated' : 'shared'} <b>${esc(r.title)}</b> with you</span><a class="btn btn-sm" href="#/shared/${esc(r.id)}">Open</a><button type="button" class="sn-x" aria-label="Dismiss">×</button>`;
    document.body.append(el); el.querySelector('.sn-x').onclick = () => el.remove(); el.querySelector('a').onclick = () => el.remove();
    setTimeout(() => el.remove(), 25000);
  }
  // re-draw only where it cannot interrupt typing: the shared page, or (after loading) a page with share bars
  function refresh(first) { if (/^#\/shared/.test(location.hash) || (first && document.querySelector('[data-send-bar]'))) rerender(); }

  /* ───────── the "Share with classmates" dialog ───────── */
  let dlg = null, picking = null;
  function openPicker(id) {
    const b = findBlock(id), a = actOf.get(id);
    if (!db()) { toast('Sign in first — then you can share with classmates who have signed in.'); signIn(); return; }
    const snap = snapshot(b, a);
    if (!hasContent(snap)) { toast('Fill in the form first. Then share it.'); return; }
    picking = { id, snap, chosen: new Set() };
    if (!dlg) {
      dlg = document.createElement('dialog'); dlg.className = 'send-dialog'; dlg.setAttribute('aria-labelledby', 'sd-title'); document.body.append(dlg);
      dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
      dlg.addEventListener('input', e => { if (e.target.matches('[data-sd-find]')) filterPeople(e.target.value); });
      dlg.addEventListener('change', e => { const cb = e.target.closest('[data-sd-person]'); if (cb) { cb.checked ? picking.chosen.add(cb.value) : picking.chosen.delete(cb.value); paintChosen(); } });
      dlg.addEventListener('submit', e => { e.preventDefault(); doSend(); });
      dlg.addEventListener('click', e => { if (e.target.closest('[data-sd-close]')) dlg.close(); });
    }
    const already = new Set((outbox.get(id) || []).map(s => s.to)), others = people.filter(p => p.id !== me());
    const online = new Set(getClass()?.onlineIds?.() || []);
    dlg.innerHTML = `<form method="dialog" class="sd">
      <div class="sd-head"><div><span class="eyebrow">Share with classmates</span><h2 id="sd-title">${esc(snap.title)}</h2><small>${esc(snap.place)}</small></div><button type="button" class="sd-x" data-sd-close aria-label="Close">×</button></div>
      <p class="sd-help">${icon('lock')}<span>Only the people you choose will see a <b>read-only copy</b> in their <b>Shared with me</b> page. Your own copy stays yours. Share again later to send your changes.</span></p>
      <label class="sd-find">${icon('search')}<input type="search" placeholder="Find a classmate (${others.length})" data-sd-find aria-label="Find a classmate"></label>
      <ul class="sd-people">${others.map(p => `<li data-name="${esc(String(p.full_name).toLowerCase())}"><label><input type="checkbox" value="${esc(p.id)}" data-sd-person>
        <span class="sd-ava">${avatarHTML({ full_name: p.full_name, avatar_url: p.avatar_url }, '', 'avatar')}${online.has(p.id) ? '<i class="sd-on" title="Online now"></i>' : ''}</span>
        <span class="sd-name"><b>${esc(p.full_name)}</b>${p.role === 'teacher' ? '<em>Teacher</em>' : ''}${already.has(p.id) ? '<small>Already sent — will be updated</small>' : ''}</span><span class="sd-tick" aria-hidden="true">${icon('check')}</span></label></li>`).join('') || '<li class="sd-none">No classmates have signed in yet.</li>'}</ul>
      <p class="sd-empty" hidden>No name matches.</p>
      <label class="sd-note"><span>Add a short message (optional)</span><textarea rows="2" maxlength="1000" data-sd-note placeholder="e.g. Great discussion! My notes on your group are below."></textarea></label>
      <div class="sd-foot"><span class="sd-count" aria-live="polite">Choose one or more people</span><button type="submit" class="btn" data-sd-send disabled>${icon('share')}Send</button></div>
    </form>`;
    dlg.showModal(); setTimeout(() => dlg.querySelector('[data-sd-find]')?.focus(), 30);
  }
  function filterPeople(q) {
    q = q.trim().toLowerCase(); let n = 0;
    dlg.querySelectorAll('.sd-people li[data-name]').forEach(li => { const on = !q || li.dataset.name.includes(q); li.hidden = !on; if (on) n++; });
    dlg.querySelector('.sd-empty').hidden = !!n;
  }
  function paintChosen() {
    const n = picking.chosen.size, btn = dlg.querySelector('[data-sd-send]');
    btn.disabled = !n; dlg.querySelector('.sd-count').textContent = n ? `${n} ${n === 1 ? 'person' : 'people'} chosen` : 'Choose one or more people';
    btn.innerHTML = `${icon('share')}${n ? `Send to ${n}` : 'Send'}`;
  }
  async function doSend() {
    const c = db(); if (!c || !picking?.chosen.size) return;
    const btn = dlg.querySelector('[data-sd-send]'); btn.disabled = true; btn.classList.add('is-busy');
    const note = dlg.querySelector('[data-sd-note]').value.trim().slice(0, 1000), { id, snap } = picking;
    const prev = new Map((outbox.get(id) || []).map(s => [s.to, s.id]));
    const ins = [...picking.chosen].filter(p => !prev.has(p)).map(p => ({ recipient_id: p, lesson_id: lesson.id, block_id: id, title: snap.title.slice(0, 200), place: snap.place.slice(0, 200), note, body: snap }));
    const upd = [...picking.chosen].filter(p => prev.has(p));
    let err = null;
    if (ins.length) { const r = await c.from('form_shares').insert(ins).select(); err = err || r.error; if (r.data) sentAll = [...r.data, ...sentAll]; }
    for (const p of upd) { const r = await c.from('form_shares').update({ title: snap.title.slice(0, 200), place: snap.place.slice(0, 200), ...(note ? { note } : {}), body: snap }).eq('id', prev.get(p)).select(); err = err || r.error; if (r.data?.[0]) sentAll = [r.data[0], ...sentAll.filter(x => x.id !== r.data[0].id)]; }
    btn.classList.remove('is-busy');
    if (err) { btn.disabled = false; toast('Sorry — it was not sent. Check your internet and try again.'); console.error(err); return; }
    setRows([...inbox, ...sentAll]);
    const names = [...picking.chosen].map(p => firstName(personName(p)));
    dlg.close(); toast(`Sent to ${names.length > 2 ? names.slice(0, 2).join(', ') + ` and ${names.length - 2} more` : names.join(' and ')}. They will find it in “Shared with me”.`);
    rerender();
  }

  /* ───────── PDF of one form ───────── */
  function load(src) { return new Promise((ok, bad) => { if (document.querySelector(`script[src="${src}"]`)) return ok(); const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => bad(new Error('Could not load ' + src)); document.head.appendChild(s); }); }
  async function b64(url) { const buf = await (await fetch(url)).arrayBuffer(); let s = ''; const by = new Uint8Array(buf); for (let i = 0; i < by.length; i += 0x8000) s += String.fromCharCode.apply(null, by.subarray(i, i + 0x8000)); return btoa(s); }
  const safe = s => String(s ?? '').replace(/[←-⇿]/g, '->').replace(/[✓]/g, 'v');
  async function pdf(snap, meta = {}) {
    await load('js/vendor/jspdf.umd.min.js'); await load('js/vendor/jspdf.autotable.min.js');
    const { jsPDF } = window.jspdf, doc = new jsPDF({ unit: 'mm', format: 'a4' });
    for (const [file, name, style] of [['manrope-normal-400', 'Manrope', 'normal'], ['manrope-normal-700', 'Manrope', 'bold'], ['fraunces-normal-600', 'Fraunces', 'normal']]) { doc.addFileToVFS(file + '.ttf', await b64('assets/fonts/' + file + '.ttf')); doc.addFont(file + '.ttf', name, style); }
    const W = 210, M = 16, CW = W - 2 * M, ink = [20, 41, 58], muted = [93, 107, 117];
    doc.setFont('Fraunces', 'normal'); doc.setFontSize(18);
    const tl = doc.splitTextToSize(safe(snap.title), CW).slice(0, 2), band = 34 + tl.length * 7.5;   // long titles wrap onto two lines
    doc.setFillColor(...ink); doc.rect(0, 0, W, band, 'F'); doc.setFillColor(227, 168, 67); doc.rect(0, band, W, 1.2, 'F');
    doc.setTextColor(255, 255, 255); tl.forEach((l, i) => doc.text(l, M, 18 + i * 7.5));
    doc.setFont('Manrope', 'normal'); doc.setFontSize(9.5); doc.setTextColor(200, 214, 224);
    const ty = 18 + tl.length * 7.5;
    doc.text(safe(snap.place || ''), M, ty); doc.text(safe([meta.by ? 'By ' + meta.by : '', meta.to ? 'Shared with ' + meta.to : '', new Date(meta.when || Date.now()).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })].filter(Boolean).join('  ·  ')), M, ty + 6);
    let y = band + 10;
    const need = h => { if (y + h > 280) { doc.addPage(); y = M; } };
    const text = (s, size = 10.5, style = 'normal', color = ink) => { doc.setFont('Manrope', style); doc.setFontSize(size); doc.setTextColor(...color); for (const ln of doc.splitTextToSize(safe(s), CW)) { need(size * .5); doc.text(ln, M, y + size * .37); y += size * .52; } };
    if (meta.note) { text('Message: ' + meta.note, 10, 'normal', muted); y += 3; }
    for (const p of snap.parts) {
      if (p.t === 'qa') { need(12); text(String(p.label).toUpperCase(), 7.5, 'bold', muted); y += .5; text(p.value || '—'); y += 3; continue; }
      need(16); text(p.title, 11, 'bold'); y += 1;
      const rateCol = p.rate;
      doc.autoTable({ startY: y, margin: { left: M, right: M, bottom: 18 }, head: [p.head.map(safe)], body: p.rows.map(r => r.map(c => safe(c || ''))), theme: 'grid',
        styles: { font: 'Manrope', fontSize: 9, cellPadding: 2.4, lineColor: [207, 214, 220], lineWidth: .2, textColor: ink, valign: 'top' },
        headStyles: { fillColor: [238, 242, 245], textColor: [61, 80, 94], fontStyle: 'bold', fontSize: 8 },
        columnStyles: p.rate ? { 0: { cellWidth: CW * .38 }, 1: { cellWidth: CW * .16, fontStyle: 'bold' } } : p.rowHead ? { 0: { fontStyle: 'bold', fillColor: [247, 249, 250], cellWidth: CW * .26 } } : {},
        didParseCell: d => { if (rateCol != null && d.section === 'body' && d.column.index === rateCol) { const v = String(d.cell.raw); d.cell.styles.textColor = v === 'Yes' ? [47, 122, 82] : v === 'Mostly' ? [152, 92, 14] : v ? [176, 81, 42] : muted; } } });
      y = doc.lastAutoTable.finalY + 6;
    }
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) { doc.setPage(i); doc.setFont('Manrope', 'normal'); doc.setFontSize(8); doc.setTextColor(...muted); doc.text('DEC15 · ' + safe(snap.title), M, 289); doc.text(`${i} / ${n}`, W - M, 289, { align: 'right' }); }
    doc.save(`DEC15-${String(snap.title).replace(/[^\w]+/g, '-').replace(/^-|-$/g, '')}${meta.by ? '-' + String(meta.by).replace(/[^\w]+/g, '-') : ''}.pdf`);
  }
  async function pdfOf(id, btn) {
    const b = findBlock(id), snap = snapshot(b, actOf.get(id));
    btn?.classList.add('busy');
    try { await pdf(snap, { by: cloud()?.profile?.full_name || '' }); toast('Your PDF has been downloaded.'); }
    catch (e) { console.error(e); toast('Sorry — the PDF could not be created.'); }
    finally { btn?.classList.remove('busy'); }
  }

  /* ───────── "Shared with me" page ───────── */
  let tab = 'in';
  const when = iso => { const d = new Date(iso), now = new Date(); return d.toDateString() === now.toDateString() ? 'Today ' + d.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' }) : d.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) + ', ' + d.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' }); };
  function partHTML(p) {
    if (p.t === 'qa') return `<div class="sh-qa"><span>${esc(p.label)}</span><p>${esc(p.value || '—')}</p></div>`;
    return `<div class="sh-table"><h4>${esc(p.title)}</h4><div class="table-scroll"><table class="work-table sh-tbl${p.rate != null ? ' has-rate' : ''}"><thead><tr>${p.head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${p.rows.map(r => `<tr>${r.map((c, i) => i === 0 && p.rowHead ? `<th scope="row">${esc(c)}</th>` : i === p.rate ? `<td class="sh-rate">${c ? `<span class="ff-pill r-${RATE_TONE[SCALE.indexOf(c)] || 'x'}">${esc(c)}</span>` : '<span class="sh-dash">—</span>'}</td>` : `<td>${c ? esc(c) : '<span class="sh-dash">—</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  }
  function pageHTML(route) {
    const sel = (route || '').split('/')[2] || '';
    const head = `<header class="page-head page-hero sh-hero"><div><span class="eyebrow">Your class</span><h1>Shared with me</h1><p>Forms your classmates and your teacher have shared with you — for example feedback after they watched your discussion. Only you (and the sender) can see them.</p></div>
      <svg class="sh-art" viewBox="0 0 220 160" aria-hidden="true"><rect x="38" y="30" width="92" height="112" rx="12" fill="#fff" stroke="#14293a" stroke-width="3" transform="rotate(-8 84 86)"/><rect x="74" y="20" width="96" height="118" rx="12" fill="#fbf3e4" stroke="#14293a" stroke-width="3"/><path d="M92 50h60M92 66h60M92 82h40" stroke="#985c0e" stroke-width="5" stroke-linecap="round"/><circle cx="96" cy="108" r="7" fill="#2b776e"/><circle cx="120" cy="108" r="7" fill="#e3a843"/><circle cx="144" cy="108" r="7" fill="#b0512a"/><circle cx="172" cy="42" r="20" fill="#2b776e"/><path d="M162 42h18m-6-7 7 7-7 7" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 30l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#e3a843"/></svg></header>`;
    if (!db()) return `${head}<section class="sh-empty"><img src="assets/art/sync.svg" alt="" width="150" height="110"><h2>Sign in to see what your classmates shared</h2><p>Sharing works between classmates who have signed in.</p><button class="btn" data-auth-mode="signin">Sign in</button></section>`;
    if (!loaded) return `${head}<p class="sh-loading">Loading…</p>`;
    const cur = sel ? (inbox.find(r => r.id === sel) || sentAll.find(r => r.id === sel)) : null;
    if (cur) tab = inbox.includes(cur) ? 'in' : 'out';
    const list = tab === 'in' ? inbox : sentAll;
    if (cur && cur.recipient_id === me() && !cur.read_at) markRead(cur);
    const card = r => { const mine = r.sender_id === me(), who = mine ? personName(r.recipient_id) : r.sender_name;
      return `<li><a class="sh-card${r.id === cur?.id ? ' on' : ''}${!mine && !r.read_at ? ' unread' : ''}" href="#/shared/${esc(r.id)}">${avatarHTML({ full_name: who, avatar_url: people.find(p => p.id === (mine ? r.recipient_id : r.sender_id))?.avatar_url }, '', 'avatar')}
        <span class="sh-ct"><b>${esc(r.title)}</b><small>${mine ? 'To ' : 'From '}${esc(who)}${!mine && r.sender_role === 'teacher' ? ' · Teacher' : ''}</small><small class="sh-pl">${esc(r.place)}</small></span><time>${esc(when(r.updated_at))}</time></a></li>`; };
    const detail = cur ? (() => { const mine = cur.sender_id === me(), body = cur.body || { parts: [] };
      return `<article class="sh-detail" aria-label="${esc(cur.title)}"><header class="sh-dh"><div><span class="eyebrow">${esc(cur.place)}</span><h2>${esc(cur.title)}</h2>
        <p class="sh-from">${avatarHTML({ full_name: mine ? personName(cur.recipient_id) : cur.sender_name }, '', 'avatar')}<span>${mine ? `You shared this with <b>${esc(personName(cur.recipient_id))}</b>` : `<b>${esc(cur.sender_name)}</b>${cur.sender_role === 'teacher' ? ' (teacher)' : ''} shared this with you`}<small>${cur.created_at !== cur.updated_at ? 'Updated ' : ''}${esc(when(cur.updated_at))}${mine && cur.read_at ? ' · Seen' : ''}</small></span></p></div></header>
        ${cur.note ? `<p class="sh-note">${icon('chat')}<span>${esc(cur.note)}</span></p>` : ''}
        <div class="sh-parts">${(body.parts || []).map(partHTML).join('')}</div>
        <footer class="sh-actions">${!mine ? `<button type="button" class="btn" data-sh-reply="${esc(cur.sender_id)}">${icon('chat')}Reply to ${esc(firstName(cur.sender_name))}</button>` : ''}
          <button type="button" class="btn-quiet" data-sh-pdf="${esc(cur.id)}">${icon('download')}Download PDF</button>
          <a class="btn-quiet" href="#/${esc(cur.lesson_id)}">${icon('open')}Open the lesson</a>
          <button type="button" class="btn-quiet sh-del" data-sh-del="${esc(cur.id)}">${mine ? 'Stop sharing' : 'Remove from my list'}</button></footer></article>`; })()
      : `<div class="sh-pick"><img src="assets/art/notebook.svg" alt="" width="120" height="110"><p>${list.length ? 'Choose a form on the left to read it.' : tab === 'in' ? 'Nothing has been shared with you yet. When a classmate shares a form with you, it appears here — and you get a notice.' : 'You have not shared anything yet. Look for <b>Share with classmates</b> under feedback forms.'}</p></div>`;
    return `${head}<div class="sh-wrap${cur ? ' has-detail' : ''}">
      <aside class="sh-list"><div class="sh-tabs" role="tablist"><button type="button" role="tab" aria-selected="${tab === 'in'}" data-sh-tab="in">Received${unread() ? ` <i>${unread()}</i>` : ''}</button><button type="button" role="tab" aria-selected="${tab === 'out'}" data-sh-tab="out">Sent by me</button></div>
        <ul>${list.map(card).join('')}</ul></aside>
      <div class="sh-main">${cur ? `<a class="sh-back" href="#/shared">${icon('left')}All shared forms</a>` : ''}${detail}</div></div>`;
  }
  async function markRead(r) { r.read_at = new Date().toISOString(); paintBadge(); try { await db()?.from('form_shares').update({ read_at: r.read_at }).eq('id', r.id); } catch (e) { /* not important */ } }

  /* ───────── events ───────── */
  function onClick(t, d) {
    if (d.formRate) { const cur = val(d.formRate); set(d.formRate, cur === d.opt ? '' : d.opt); rerender(); return true; }
    if (d.scaleCheck) { if (locked()) { toast('Your teacher has closed the answers for now.'); return true; } if (val(d.scaleCheck) === '') { toast('Move the marker first.'); return true; } st().checked[d.scaleCheck] = true; save(); rerender(); return true; }
    if (d.scaleReset) { delete st().checked[d.scaleReset]; save(); rerender(); return true; }
    if (d.jpOpen) { const b = findBlock(d.jpOpen), s = jpState(b), k = d.c + '-' + d.r; if (s.used.includes(k)) return true; jpOpen = { id: b.id, c: Number(d.c), r: Number(d.r) }; jpShow = false; jpTick(b); rerender(); document.querySelector('.jp-clue')?.scrollIntoView({ block: 'nearest', behavior: reduce() ? 'auto' : 'smooth' }); return true; }
    if (d.jpShow) { jpShow = true; rerender(); return true; }
    if (d.jpGive) { const b = findBlock(d.jpGive), s = jpState(b), team = Number(d.team), clue = b.cols[jpOpen.c].clues[jpOpen.r];
      s.used.push(jpOpen.c + '-' + jpOpen.r); if (team >= 0) { s.scores[team] = (s.scores[team] || 0) + Number(clue.pts); toast(`+${clue.pts} for Team ${team + 1}!`); }
      jpOpen = null; clearInterval(jpTimer); jpSave(b, s); rerender();
      if (s.used.length === b.cols.length * b.cols[0].clues.length) { const sc = Array.from({ length: s.teams }, (_, i) => s.scores[i] || 0), top = Math.max(...sc); toast(`Game over! Team ${sc.indexOf(top) + 1} wins with ${top} points.`); document.dispatchEvent(new CustomEvent('dec15:celebrate', { detail: document.getElementById('jp-' + b.id) })); }
      return true; }
    if (d.jpReset) { if (!confirm('Start a new game? Scores will go back to 0.')) return true; const b = findBlock(d.jpReset), s = jpState(b); jpOpen = null; clearInterval(jpTimer); jpSave(b, { used: [], scores: [], teams: s.teams }); rerender(); return true; }
    if (d.sendOpen) { openPicker(d.sendOpen); return true; }
    if (d.sendPdf) { pdfOf(d.sendPdf, t); return true; }
    if (d.shTab) { tab = d.shTab; location.hash = '#/shared'; rerender(); return true; }
    if (d.shReply) { getClass()?.message(d.shReply); return true; }
    if (d.shPdf) { const r = [...inbox, ...sentAll].find(x => x.id === d.shPdf); if (r) { t.classList.add('busy'); pdf(r.body, { by: r.sender_name, to: r.sender_id === me() ? personName(r.recipient_id) : '', when: r.updated_at, note: r.note }).then(() => toast('PDF downloaded.'), e => { console.error(e); toast('Sorry — the PDF could not be created.'); }).finally(() => t.classList.remove('busy')); } return true; }
    if (d.shDel) { const r = [...inbox, ...sentAll].find(x => x.id === d.shDel), mine = r?.sender_id === me();
      if (!r || !confirm(mine ? `Stop sharing “${r.title}” with ${personName(r.recipient_id)}? They will no longer see it.` : `Remove “${r.title}” from your list? ${r.sender_name} keeps their own copy.`)) return true;
      db()?.from('form_shares').delete().eq('id', r.id).then(({ error }) => { if (error) { toast('It could not be removed. Try again.'); return; } setRows([...inbox, ...sentAll].filter(x => x.id !== r.id)); paintBadge(); location.hash = '#/shared'; rerender(); });
      return true; }
    return false;
  }
  function onChange(t) {
    if (t.dataset.jpTeams) { const b = findBlock(t.dataset.jpTeams), s = jpState(b); s.teams = Number(t.value); jpSave(b, s); rerender(); return true; }
    return false;
  }
  function onInput(t) {
    if (t.type === 'range' && t.closest('.fscale')) { t.classList.add('is-set'); t.closest('.fs-track')?.style.setProperty('--v', t.value + '%'); if (st().checked[t.dataset.save]) { delete st().checked[t.dataset.save]; save(); rerender(); } }
    if (t.dataset.save && t.closest('.fform') && !/-who$/.test(t.dataset.save)) { /* comments: nothing extra */ }
  }

  /* ───────── notebook, labels ───────── */
  function register(b, reg) {
    if (b.type === 'form') { if (b.observe) reg(b.id + '-who', b.observe); b.sections.forEach((s, si) => s.items.forEach((q, qi) => { const k = fkey(b, si, qi); reg(k, strip(q)); colsOf(b).forEach((c, ci) => reg(`${k}-c${ci}`, `${strip(q)} · ${c}`)); })); (b.fields || []).forEach(f => reg(f.id, f.label)); }
    if (b.type === 'scale') reg(b.id, strip(b.title || b.statement));
  }
  function notebookItems(b) {
    const out = [];
    if (b.type === 'form') {
      const snap = snapshot(b, null);
      snap.parts.forEach(p => { if (p.t === 'qa') out.push(p); else { const rows = p.rows.filter(r => r.slice(1).some(filled)); if (rows.length) out.push({ t: 'table', title: `${strip(b.title)} · ${p.title}`, head: p.head, rows, widths: p.head.length === 3 ? [45, 17, 38] : [36, 14, 25, 25] }); } });
    }
    if (b.type === 'scale' && val(b.id) !== '') { const ends = b.ends || ['Strongly disagree', 'Strongly agree']; out.push({ t: 'qa', label: strip(b.title || 'My position'), value: `${strip(b.statement)} → ${val(b.id)}/100 (0 = ${ends[0]}, 100 = ${ends[1]})` }); }
    return out;
  }

  return { B, register, notebookItems, onClick, onChange, onInput, sendBar, connect, disconnect, pageHTML, paintBadge, unread: () => unread() };
};
