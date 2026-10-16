/* DEC15 class announcements — the teacher sends a short message (e.g. "I'll be 15 minutes late") and it pops up on
   every signed-in student's screen, on whatever page they are on. Students press "Got it" (a read receipt) and, if the
   teacher allows it, send a short reply. The teacher sees who has seen it, who has not yet, and the replies — live.
   Data: tables announcements (teacher writes, class reads) and announcement_reads (each student writes their own row;
   the teacher reads all). Row Level Security: supabase/migrations/20261016000000_dec15_announcements.sql. */
window.createDEC15Announce = function ({ getDb, me, isTeacher, esc, toast, getPeople, avatar }) {
  let list = [], reads = new Map(), ch = null, popEl = null, cardEl = null, shownId = null, openId = null, lastSeenReply = '';
  const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
  const TEMPLATES = [
    'I’m running about 15 minutes late. Please start today’s first activity with a partner.',
    'Class is online today. Please join the video call at the usual time.',
    'Please open today’s lesson and start Activity 1 while I set up.',
    'Remember to bring your reading and listening notes — we use them for the writing task today.'
  ];
  const ago = iso => { const s = (Date.now() - Date.parse(iso)) / 1000; return s < 60 ? 'just now' : s < 3600 ? Math.round(s / 60) + ' min ago' : s < 86400 ? Math.round(s / 3600) + ' h ago' : new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }); };
  const clock = iso => new Date(iso).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' });
  const students = () => (getPeople() || []).filter(p => p.role !== 'teacher');
  const readsFor = id => [...reads.values()].filter(r => r.announcement_id === id);
  const key = (a, u) => a + ':' + u;

  /* ───────── data ───────── */
  async function connect() {
    disconnect(); const c = getDb(); if (!c) return;
    const since = new Date(Date.now() - 14 * 864e5).toISOString();
    const [{ data: a }, { data: r }] = await Promise.all([
      c.from('announcements').select('id, body, allow_reply, active, created_at').gte('created_at', since).order('created_at', { ascending: false }).limit(20),
      c.from('announcement_reads').select('announcement_id, user_id, seen_at, reply, replied_at').gte('seen_at', since)]);
    list = a || []; reads = new Map((r || []).map(x => [key(x.announcement_id, x.user_id), x]));
    ch = c.channel('dec15-announce-' + (me() || 'x'))
      .on('postgres_changes', { event: '*', schema: 'public', table: 'announcements' }, p => {
        const row = p.new; if (!row?.id) return; const i = list.findIndex(x => x.id === row.id);
        if (i >= 0) list[i] = { ...list[i], ...row }; else list.unshift(row);
        paint(); })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'announcement_reads' }, p => {
        const row = p.new; if (!row?.announcement_id) return; reads.set(key(row.announcement_id, row.user_id), row);
        if (isTeacher() && row.reply && row.user_id !== me()) { const n = (getPeople() || []).find(x => x.id === row.user_id); toast(`${n?.full_name || 'A student'} replied: “${row.reply.slice(0, 80)}”`); }
        paint(); })
      .subscribe();
    paint();
  }
  function disconnect() { const c = getDb(); if (ch) try { c?.removeChannel(ch); } catch (e) { /* ignore */ } ch = null; list = []; reads = new Map(); closeCard(); paint(); }

  async function send(body, allowReply) {
    const c = getDb(); if (!c || !isTeacher()) return false;
    const { data, error } = await c.from('announcements').insert({ body, allow_reply: allowReply }).select('id, body, allow_reply, active, created_at').single();
    if (error) { toast('The message could not be sent. Check your internet.'); return false; }
    if (!list.some(x => x.id === data.id)) list.unshift(data);
    toast('Sent. Every student sees it now.'); paint(); return true;
  }
  async function retract(id) {
    const c = getDb(); if (!c) return; const a = list.find(x => x.id === id); if (!a) return;
    a.active = false; paint();
    const { error } = await c.from('announcements').update({ active: false }).eq('id', id);
    if (error) { a.active = true; paint(); toast('Could not remove it. Check your internet.'); }
  }
  async function markSeen(a, reply) {
    const c = getDb(), uid = me(); if (!c || !uid) return;
    const prev = reads.get(key(a.id, uid)), now = new Date().toISOString();
    const row = { announcement_id: a.id, user_id: uid, seen_at: prev?.seen_at || now, ...(reply ? { reply: reply.slice(0, 500), replied_at: now } : {}) };
    reads.set(key(a.id, uid), { ...prev, ...row });
    const { error } = await c.from('announcement_reads').upsert(row, { onConflict: 'announcement_id,user_id' });
    if (error) { toast('Could not save that. Check your internet.'); if (prev) reads.set(key(a.id, uid), prev); else reads.delete(key(a.id, uid)); }
    paint();
  }

  /* ───────── what students see: one message at a time, on any page ───────── */
  function paint() { paintStudent(); paintButton(); if (popEl) paintPanel(); }
  function pending() {
    if (isTeacher() || !me()) return null;
    return list.filter(a => a.active && !reads.has(key(a.id, me()))).sort((x, y) => Date.parse(x.created_at) - Date.parse(y.created_at))[0] || null;
  }
  function paintStudent() {
    const a = pending();
    if (!a) { closeCard(); return; }
    if (shownId === a.id && cardEl) return;
    closeCard(); shownId = a.id;
    const more = list.filter(x => x.active && !reads.has(key(x.id, me()))).length - 1;
    cardEl = document.createElement('div'); cardEl.className = 'an-scrim';
    cardEl.innerHTML = `<section class="an-card" role="alertdialog" aria-modal="true" aria-labelledby="an-title" aria-describedby="an-body">
      <div class="an-art" aria-hidden="true">${ART}</div>
      <p class="an-eyebrow">${I.mega}Message from your teacher · ${esc(clock(a.created_at))}</p>
      <h2 id="an-title" class="sr-only">Message from your teacher</h2>
      <p id="an-body" class="an-body">${esc(a.body).replace(/\n/g, '<br>')}</p>
      ${a.allow_reply ? `<form class="an-reply" hidden><label for="an-reply-in">Your reply <small>(only your teacher sees it)</small></label>
        <textarea id="an-reply-in" maxlength="500" rows="2" placeholder="e.g. OK, thank you! / I can’t come today because…"></textarea>
        <div class="an-quick">${['OK, thank you!', 'Got it.', 'I’ll be there soon.'].map(t => `<button type="button" data-an-quick="${esc(t)}">${esc(t)}</button>`).join('')}</div></form>` : ''}
      <div class="an-actions">${a.allow_reply ? `<button type="button" class="btn-quiet" data-an="reply">${I.reply}Reply</button>` : '<span></span>'}
        <button type="button" class="btn" data-an="ok">${I.check}Got it</button></div>
      ${more > 0 ? `<p class="an-more">${more} more message${more > 1 ? 's' : ''} after this one</p>` : ''}
    </section>`;
    document.body.append(cardEl);
    const form = cardEl.querySelector('.an-reply'), ta = cardEl.querySelector('textarea');
    cardEl.addEventListener('click', e => {
      const q = e.target.closest('[data-an-quick]'); if (q && ta) { ta.value = q.dataset.anQuick; ta.focus(); return; }
      const b = e.target.closest('[data-an]'); if (!b) return;
      if (b.dataset.an === 'reply') { if (form.hidden) { form.hidden = false; b.innerHTML = `${I.send}Send reply`; ta.focus(); } else if (ta.value.trim()) { markSeen(a, ta.value.trim()); toast('Reply sent to your teacher.'); } else ta.focus(); return; }
      if (b.dataset.an === 'ok') markSeen(a, form && !form.hidden && ta.value.trim() ? ta.value.trim() : '');
    });
    cardEl.addEventListener('keydown', e => { if (e.key === 'Tab') { const f = [...cardEl.querySelectorAll('button:not([hidden]), textarea')].filter(x => x.offsetParent); if (!f.length) return; const i = f.indexOf(document.activeElement); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } } });
    setTimeout(() => cardEl?.querySelector('[data-an="ok"]')?.focus(), 60);
  }
  function closeCard() { cardEl?.remove(); cardEl = null; shownId = null; }

  /* ───────── the teacher's "Message" button and panel ───────── */
  function paintButton() {
    const btn = document.getElementById('announce-btn'); if (!btn) return;
    btn.hidden = !isTeacher() || !getDb(); if (btn.hidden) return;
    const replies = list.flatMap(a => readsFor(a.id)).filter(r => r.reply).map(r => r.replied_at || '').sort().pop() || '';
    const fresh = replies && replies > (LS('dec15-an-replies-seen') || '');
    btn.innerHTML = `${I.mega}<span class="ab-tx">Message</span>${fresh ? '<i class="ab-dot" aria-label="New replies"></i>' : ''}`;
    btn.setAttribute('aria-label', fresh ? 'Message the class (new replies)' : 'Message the class');
    lastSeenReply = replies;
  }
  function closePanel() { popEl?.remove(); popEl = null; document.getElementById('announce-btn')?.setAttribute('aria-expanded', 'false'); }
  function openPanel(btn) {
    if (popEl) { closePanel(); return; }
    popEl = document.createElement('div'); popEl.className = 'an-pop'; popEl.setAttribute('role', 'dialog'); popEl.setAttribute('aria-label', 'Message the class');
    document.body.append(popEl); paintPanel(true);
    const r = btn.getBoundingClientRect(); popEl.style.top = (r.bottom + 8) + 'px'; popEl.style.left = Math.max(8, Math.min(r.left + r.width / 2 - popEl.offsetWidth / 2, innerWidth - popEl.offsetWidth - 8)) + 'px';
    btn.setAttribute('aria-expanded', 'true');
    LS('dec15-an-replies-seen', lastSeenReply || new Date().toISOString()); paintButton();
    setTimeout(() => popEl?.querySelector('textarea')?.focus(), 0);
  }
  function paintPanel(first) {
    if (!popEl) return;
    const draft = popEl.querySelector('textarea')?.value ?? '', allow = popEl.querySelector('[name=allow]')?.checked ?? true;
    const kids = students(), recent = list.slice(0, 5);
    popEl.innerHTML = `<form class="an-form" novalidate>
      <div class="an-pop-head">${I.mega}<div><b>Message the class</b><small>It pops up on every signed-in student’s screen until they press “Got it”.</small></div></div>
      <label class="sr-only" for="an-text">Message</label>
      <textarea id="an-text" name="t" maxlength="600" rows="3" placeholder="e.g. I’m running about 15 minutes late…">${esc(draft)}</textarea>
      <div class="an-tpl" aria-label="Quick messages">${TEMPLATES.map((t, i) => `<button type="button" data-tpl="${i}" title="${esc(t)}">${esc(t.split(/[.—]/)[0])}</button>`).join('')}</div>
      <div class="an-send"><label class="an-allow"><input type="checkbox" name="allow"${allow ? ' checked' : ''}> Students can reply</label><button class="btn btn-sm" type="submit">${I.send}Send to everyone</button></div>
    </form>
    ${recent.length ? `<h3 class="an-h">Recent messages</h3><ul class="an-list">${recent.map(a => {
      const rs = readsFor(a.id), seenIds = new Set(rs.map(x => x.user_id)), seen = kids.filter(p => seenIds.has(p.id)), notYet = kids.filter(p => !seenIds.has(p.id));
      const total = kids.length || rs.length, pct = total ? Math.round(seen.length / total * 100) : 0, replies = rs.filter(x => x.reply);
      const isOpen = openId === a.id;
      return `<li class="an-item${a.active ? '' : ' off'}">
        <button type="button" class="an-row" data-open="${a.id}" aria-expanded="${isOpen}">
          <span class="an-msg">${esc(a.body.length > 90 ? a.body.slice(0, 88) + '…' : a.body)}</span>
          <span class="an-meta">${esc(ago(a.created_at))}${a.active ? '' : ' · removed'} · <b>${seen.length}</b>${total ? ` of ${total}` : ''} seen${replies.length ? ` · ${replies.length} repl${replies.length > 1 ? 'ies' : 'y'}` : ''}</span>
          <span class="an-bar" aria-hidden="true"><i style="width:${pct}%"></i></span></button>
        ${isOpen ? `<div class="an-detail">
          ${replies.length ? `<p class="an-sub">Replies</p><ul class="an-replies">${replies.map(x => { const p = kids.find(k => k.id === x.user_id) || {}; return `<li>${avatar(p)}<span><b>${esc(p.full_name || 'Student')}</b> ${esc(x.reply)}<small>${esc(clock(x.replied_at || x.seen_at))}</small></span></li>`; }).join('')}</ul>` : ''}
          <p class="an-sub">Seen (${seen.length})</p><p class="an-names">${seen.map(p => `<span class="an-chip seen">${esc(p.full_name || 'Student')}<small>${esc(clock(rs.find(x => x.user_id === p.id).seen_at))}</small></span>`).join('') || '<span class="an-none">Nobody yet</span>'}</p>
          <p class="an-sub">Not yet (${notYet.length})</p><p class="an-names">${notYet.map(p => `<span class="an-chip">${esc(p.full_name || 'Student')}</span>`).join('') || '<span class="an-none">Everyone has seen it</span>'}</p>
          ${a.active ? `<button type="button" class="btn-quiet btn-sm danger" data-retract="${a.id}">Remove this message</button>` : ''}</div>` : ''}
      </li>`; }).join('')}</ul>` : ''}`;
    const f = popEl.querySelector('form'), ta = f.querySelector('textarea');
    f.addEventListener('submit', async e => { e.preventDefault(); const t = ta.value.trim(); if (!t) { ta.focus(); return; }
      const btn = f.querySelector('[type=submit]'); btn.disabled = true; if (await send(t, f.querySelector('[name=allow]').checked)) { ta.value = ''; openId = list[0]?.id || null; paintPanel(); } else btn.disabled = false; });
    popEl.querySelectorAll('[data-tpl]').forEach(b => b.addEventListener('click', () => { ta.value = TEMPLATES[+b.dataset.tpl]; ta.focus(); }));
    popEl.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => { openId = openId === b.dataset.open ? null : b.dataset.open; paintPanel(); }));
    popEl.querySelectorAll('[data-retract]').forEach(b => b.addEventListener('click', () => { if (confirm('Remove this message? Students who have not seen it yet will not see it.')) retract(b.dataset.retract); }));
    if (!first) { const k = popEl.querySelector('textarea'); if (document.activeElement === document.body) k?.focus(); }
  }
  document.addEventListener('click', e => { const b = e.target.closest('#announce-btn'); if (b) { openPanel(b); return; } if (popEl && !popEl.contains(e.target) && document.body.contains(e.target)) closePanel(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && popEl) { closePanel(); document.getElementById('announce-btn')?.focus(); } });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && ch) paint(); });

  const SV = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = { mega: SV('<path d="M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'),
    check: SV('<path d="m5 12.5 4.5 4.5L19 7.5"/>'), reply: SV('<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 6 6v4"/>'), send: SV('<path d="M4 12 20 4l-6 16-3-7z"/><path d="m11 13 9-9"/>') };
  const ART = `<svg viewBox="0 0 120 90"><circle cx="60" cy="45" r="40" fill="#fdf2dc"/><path d="M32 40v12a3 3 0 0 0 3 3h7l18 13V24L42 37h-7a3 3 0 0 0-3 3z" fill="#14293a"/><path d="M70 36c4 3 4 15 0 18M77 29c8 6 8 26 0 32" fill="none" stroke="#e9a23b" stroke-width="4" stroke-linecap="round"/><circle cx="93" cy="20" r="4" fill="#2a8a7d"/><circle cx="24" cy="70" r="3" fill="#e0674b"/></svg>`;
  return { connect, disconnect, paint };
};
