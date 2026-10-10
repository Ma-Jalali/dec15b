/* DEC15 classroom — the live class around the lessons.
   - Who is here now (Realtime presence), raised hands, and "come to this page" from the teacher.
   - Messages: the class chat, private messages to the teacher and between classmates (table messages).
   - How many classmates finished each activity (anonymous counts, function class_counts).
   - Teacher only: class progress, the "answers open / closed" switch (table class_settings), teacher notes
     (table teacher_notes, readable only by teachers). Everything is protected by Row Level Security.
   Signed-out visitors see only a "Sign in to join your class" prompt (and still follow the answers switch). */
window.createDEC15Class = function ({ getCloud, lesson, esc, icon, toast, avatarHTML, signIn, rerender }) {
  const cloud = () => getCloud();
  const db = () => (cloud()?.user && cloud().client) || null;
  const anyDb = () => cloud()?.client || null;
  const me = () => cloud()?.user?.id || null;
  const prof = () => cloud()?.profile || {};
  const isTeacher = () => prof().role === 'teacher';
  const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };

  let settings = { answers_open: null }, settingsCh = null;
  let people = [], byId = new Map(), online = new Map(), presence = null, joined = false, myHand = false, where = { key: '', label: '' };
  let msgs = [], msgCh = null, counts = {}, students = 0, countsT = 0, notes = null, progress = null, hands = new Set();
  let panel = null, open = false, tab = 'people', thread = null, lastSeenClass = +(LS('dec15-class-seen') || 0), connected = null;

  /* ───────── answers switch (everyone follows it, also when signed out) ───────── */
  async function loadSettings() {
    const c = anyDb(); if (!c) return;
    try { const { data } = await c.from('class_settings').select('key, value'); (data || []).forEach(r => { settings[r.key] = r.value; }); } catch (e) { return; }
    rerender(); paintTop();
  }
  function watchSettings() {
    const c = anyDb(); if (!c || settingsCh || typeof c.channel !== 'function') return;
    settingsCh = c.channel('dec15-settings').on('postgres_changes', { event: '*', schema: 'public', table: 'class_settings' }, p => {
      const r = p.new; if (!r?.key) return; const was = settings[r.key]; settings[r.key] = r.value;
      if (r.key === 'answers_open' && was !== r.value && !isTeacher()) toast(r.value ? 'Your teacher opened the suggested answers.' : 'Your teacher closed the answers for now.');
      rerender(); paintTop(); paintPanel();
    }).subscribe();
  }
  const answersLocked = () => !isTeacher() && settings.answers_open === false;
  async function setAnswers(openIt) {
    const c = db(); if (!c || !isTeacher()) return;
    settings.answers_open = openIt; rerender(); paintTop(); paintPanel();
    const { error } = await c.from('class_settings').upsert({ key: 'answers_open', value: openIt, updated_at: new Date().toISOString() });
    if (error) { toast('The switch could not be saved. Check your internet.'); settings.answers_open = !openIt; rerender(); paintTop(); paintPanel(); }
    else toast(openIt ? 'Answers are open: students can check and see suggested answers.' : 'Answers are closed: students cannot check or see answers.');
  }

  /* ───────── connect / disconnect ───────── */
  async function connect() {
    const uid = me(), key = uid + ':' + (prof().role || ''); if (connected === key && uid) return;
    disconnect(); connected = key;
    loadSettings(); watchSettings(); paintTop();
    const c = db(); if (!c) { paintPanel(); return; }
    if (isTeacher()) { loadNotes(); rerender(); }
    loadPeople(); loadMessages(); loadCounts();
    try { await c.realtime.setAuth?.(); } catch (e) { /* older client */ }
    presence = c.channel('dec15:class', { config: { private: true, presence: { key: uid } } })
      .on('presence', { event: 'sync' }, readPresence)
      .on('broadcast', { event: 'hand-down' }, ({ payload }) => { if (payload?.id === uid || payload?.id === '*') { if (myHand) toast('Your teacher has seen your raised hand.'); myHand = false; track(); paintPanel(); } })
      .on('broadcast', { event: 'goto' }, ({ payload }) => { if (!isTeacher() && payload?.hash) invite(payload); })
      .on('broadcast', { event: 'typing' }, ({ payload }) => { if (payload?.thread && payload.id !== uid) typingFns.forEach(fn => fn(payload)); })
      .subscribe(st => { if (st === 'SUBSCRIBED') { joined = true; track(); } });
    msgCh = c.channel('dec15-messages-' + uid)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, p => onMessage(p.new))
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'messages' }, p => { msgs = msgs.filter(m => m.id !== p.old?.id); paintTop(); paintPanel(); })
      .subscribe();
    countsT = setInterval(() => { if (document.visibilityState === 'visible') { loadCounts(); if (isTeacher() && open && tab === 'progress') loadProgress(); } }, 45000);
  }
  function disconnect() {
    const c = anyDb(); clearInterval(countsT); joined = false;
    [presence, msgCh].forEach(ch => { if (ch) try { c?.removeChannel(ch); } catch (e) { /* ignore */ } });
    presence = msgCh = null; online = new Map(); msgs = []; people = []; byId = new Map(); notes = null; progress = null; hands = new Set(); myHand = false;
    paintTop(); paintPanel();
  }

  /* ───────── presence: who is here, where, raised hands ───────── */
  function track() {
    if (!presence || !joined) return; const p = prof();
    presence.track({ name: p.full_name || 'Student', avatar: p.avatar_url || '', role: p.role || 'student', key: where.key, label: where.label, hand: myHand, at: Date.now() }).catch(() => {});
  }
  let trackT = 0;
  function setWhere(key, label) { where = { key, label }; clearTimeout(trackT); trackT = setTimeout(track, 400); }
  function readPresence() {
    const st = presence?.presenceState() || {}, next = new Map();
    for (const [id, arr] of Object.entries(st)) if (arr?.length) next.set(id, arr[arr.length - 1]);
    if (isTeacher()) for (const [id, p] of next) if (p.hand && !hands.has(id)) toast(`✋ ${p.name} raised a hand${p.label ? ' · ' + p.label : ''}.`);
    hands = new Set([...next].filter(([, p]) => p.hand).map(([id]) => id));
    online = next; paintTop(); paintPanel();
    document.dispatchEvent(new CustomEvent('dec15:presence'));
  }
  /* "… is typing" on the class wall: a tiny broadcast, at most every 2.5 s */
  const typingFns = new Set(); let typedAt = 0;
  function typing(thread) { const now = Date.now(); if (!presence || !joined || now - typedAt < 2500) return; typedAt = now;
    presence.send({ type: 'broadcast', event: 'typing', payload: { id: me(), name: (prof().full_name || 'A classmate').split(' ')[0], thread } }).catch?.(() => {}); }
  const onlineStudents = () => [...online].filter(([id, p]) => p.role !== 'teacher' && id !== me()).length + (online.has(me()) && !isTeacher() ? 1 : 0);
  function raiseHand(up = !myHand) { myHand = up; track(); paintPanel(); toast(up ? 'Your hand is up. Your teacher can see it.' : 'Hand down.'); }
  function lowerHand(id) { presence?.send({ type: 'broadcast', event: 'hand-down', payload: { id } }); if (id === '*') hands.clear(); else hands.delete(id); paintPanel(); }
  function bringClass() {
    if (!presence) return; presence.send({ type: 'broadcast', event: 'goto', payload: { hash: location.hash || '#/', label: where.label, from: prof().full_name || 'Your teacher' } });
    toast('Everyone online was invited to this page.');
  }
  function invite(p) {
    document.querySelector('.class-invite')?.remove();
    const el = document.createElement('div'); el.className = 'class-invite'; el.setAttribute('role', 'status');
    el.innerHTML = `<span class="ci-ico">${icon('flag')}</span><span><b>${esc(p.from)}</b> invites you to <b>${esc(p.label || 'a page')}</b></span><button type="button" class="btn btn-sm" data-ci-go>Go there</button><button type="button" class="ci-x" aria-label="Dismiss">×</button>`;
    document.body.append(el);
    el.querySelector('[data-ci-go]').onclick = () => { el.remove(); location.hash = p.hash; };
    el.querySelector('.ci-x').onclick = () => el.remove();
    setTimeout(() => el.remove(), 30000);
  }

  /* ───────── people and messages ───────── */
  async function loadPeople() { const c = db(); if (!c) return; const { data } = await c.rpc('class_people'); people = data || []; byId = new Map(people.map(p => [p.id, p])); paintPanel(); paintCounts(); }
  async function loadMessages() {
    const c = db(); if (!c) return;
    const { data } = await c.from('messages').select('id, sender_id, sender_name, sender_role, recipient_id, body, created_at, read_at').order('created_at', { ascending: false }).limit(400);
    msgs = (data || []).reverse(); paintTop(); paintPanel();
  }
  function onMessage(m) {
    if (!m?.id || msgs.some(x => x.id === m.id)) return;
    if (m.recipient_id && m.recipient_id !== me() && m.sender_id !== me()) return;   // never show someone else's private message
    msgs.push(m);
    const mine = m.sender_id === me(), key = m.recipient_id ? (mine ? m.recipient_id : m.sender_id) : 'class';
    if (!mine) {
      if (open && tab === 'chat' && thread === key) markRead(key);
      else toast(m.recipient_id ? `New message from ${m.sender_name}` : m.sender_role === 'teacher' ? `${m.sender_name} (teacher) wrote to the class` : `${m.sender_name} wrote in the class chat`);
    }
    paintTop(); paintPanel(true);
  }
  async function send(body) {
    const c = db(); body = String(body || '').trim(); if (!c || !body || !thread) return false;
    const { data, error } = await c.from('messages').insert({ body: body.slice(0, 2000), recipient_id: thread === 'class' ? null : thread }).select().single();
    if (error) { toast('Sorry — the message was not sent. Check your internet.'); return false; }
    onMessage(data); return true;
  }
  async function deleteMessage(id) { const c = db(); if (!c) return; const { error } = await c.from('messages').delete().eq('id', id); if (!error) { msgs = msgs.filter(m => m.id !== id); paintPanel(); } }
  const unreadDM = () => msgs.filter(m => m.recipient_id === me() && !m.read_at).length;
  const unreadClass = () => msgs.filter(m => !m.recipient_id && m.sender_id !== me() && Date.parse(m.created_at) > lastSeenClass).length;
  async function markRead(key) {
    if (key === 'class') { lastSeenClass = Date.now(); LS('dec15-class-seen', String(lastSeenClass)); paintTop(); return; }
    const ids = msgs.filter(m => m.sender_id === key && m.recipient_id === me() && !m.read_at).map(m => m.id); if (!ids.length) return;
    const now = new Date().toISOString(); msgs.forEach(m => { if (ids.includes(m.id)) m.read_at = now; }); paintTop();
    try { await db()?.from('messages').update({ read_at: now }).in('id', ids); } catch (e) { /* not important */ }
  }

  /* ───────── progress ───────── */
  async function loadCounts() {
    const c = db(); if (!c) return;
    try { const { data } = await c.rpc('class_counts', { p_lesson: lesson.id }); counts = {}; students = 0; (data || []).forEach(r => { counts[r.activity_id] = r.done_count; students = r.students; }); } catch (e) { return; }
    paintCounts();
  }
  function paintCounts() {
    const N = students || people.filter(p => p.role === 'student').length;
    document.querySelectorAll('[data-class-count]').forEach(el => {
      if (!db() || N < 2) { el.hidden = true; return; }
      const n = counts[el.dataset.classCount] || 0; el.hidden = false;
      el.innerHTML = `<span class="cc-ring" style="--p:${(n / N).toFixed(3)}" aria-hidden="true"></span><span><b>${n}</b> of ${N} in your class finished this</span>`;
    });
    document.dispatchEvent(new CustomEvent('dec15:counts'));
  }
  async function loadProgress() {
    const c = db(); if (!c || !isTeacher()) return;
    const { data } = await c.from('lesson_progress').select('user_id, state, updated_at').eq('lesson_id', lesson.id);
    progress = data || []; paintPanel();
  }
  async function loadNotes() {
    const c = db(); if (!c || notes) return;
    const { data } = await c.from('teacher_notes').select('ref, body').eq('lesson_id', lesson.id);
    notes = Object.fromEntries((data || []).map(r => [r.ref, r.body])); rerender();
  }

  /* ───────── top bar button ───────── */
  function paintTop() {
    const btn = document.getElementById('class-btn'); if (!btn) return;
    const signed = !!db(), n = signed ? onlineStudents() : 0, unread = signed ? unreadDM() + unreadClass() : 0;
    const faces = [...online].filter(([id]) => id !== me()).slice(0, 3).map(([, p]) => avatarHTML({ full_name: p.name, avatar_url: p.avatar }, '', 'avatar cb-face')).join('');
    btn.innerHTML = signed
      ? `<span class="cb-faces">${faces || `<span class="cb-dot" aria-hidden="true"></span>`}</span><span class="cb-tx"><b>${n}</b> ${n === 1 ? 'student' : 'students'} online</span>${unread ? `<i class="cb-badge" aria-label="${unread} unread">${unread > 9 ? '9+' : unread}</i>` : ''}${hands.size && isTeacher() ? `<i class="cb-hand" aria-label="${hands.size} raised hands">✋${hands.size}</i>` : ''}`
      : `<span class="cb-lock" aria-hidden="true">${icon('users')}</span><span class="cb-tx">Join your class</span>`;
    btn.setAttribute('aria-label', signed ? `Class: ${n} online${unread ? `, ${unread} unread messages` : ''}` : 'Join your class (sign in)');
    const pill = document.getElementById('answers-pill');
    if (pill) { pill.hidden = !isTeacher(); const o = settings.answers_open !== false; pill.setAttribute('aria-pressed', String(o)); pill.innerHTML = `<span class="ap-sw" aria-hidden="true"><i></i></span>Answers <b>${o ? 'open' : 'closed'}</b>`; pill.title = o ? 'Students can check and see answers. Click to close.' : 'Students cannot check or see answers. Click to open.'; }
  }

  /* ───────── the class panel ───────── */
  function ensurePanel() {
    if (panel) return panel;
    panel = document.createElement('div'); panel.className = 'class-panel'; panel.id = 'class-panel'; panel.hidden = true;
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Your class');
    document.body.append(panel);
    panel.addEventListener('click', onPanelClick);
    panel.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.stopPropagation(); toggle(false); }
      if (e.key === 'Enter' && !e.shiftKey && e.target.matches('.cm-input')) { e.preventDefault(); e.target.form?.requestSubmit(); }
    });
    panel.addEventListener('submit', async e => {
      const f = e.target.closest('.cm-compose'); if (!f) return; e.preventDefault();
      const ta = f.querySelector('textarea'), v = ta.value; if (!v.trim()) return; ta.value = ''; ta.disabled = true;
      const ok = await send(v); ta.disabled = false; if (!ok) ta.value = v; ta.focus();
    });
    return panel;
  }
  function toggle(show = !open, toTab, toThread) {
    if (!db()) { signIn(); return; }
    ensurePanel(); open = show; if (toTab) tab = toTab; if (toThread !== undefined) thread = toThread;
    panel.hidden = !open; document.body.classList.toggle('class-open', open);
    document.getElementById('class-btn')?.setAttribute('aria-expanded', String(open));
    if (open) { if (tab === 'progress') loadProgress(); if (tab === 'chat' && thread) markRead(thread); paintPanel(); setTimeout(() => panel.querySelector('.cp-close')?.focus(), 30); }
    else document.getElementById('class-btn')?.focus();
  }
  const person = id => byId.get(id) || (online.get(id) && { id, full_name: online.get(id).name, avatar_url: online.get(id).avatar, role: online.get(id).role }) || { id, full_name: 'Classmate', role: 'student' };
  const ava = (p, cls = 'avatar') => avatarHTML({ full_name: p.full_name || p.name, avatar_url: p.avatar_url || p.avatar }, '', cls);
  const when = iso => { const d = new Date(iso), now = new Date(), same = d.toDateString() === now.toDateString();
    return same ? d.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' }) : d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }) + ' ' + d.toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' }); };
  const ago = iso => { const s = (Date.now() - Date.parse(iso)) / 1000; return s < 90 ? 'just now' : s < 3600 ? Math.round(s / 60) + ' min ago' : s < 86400 ? Math.round(s / 3600) + ' h ago' : Math.round(s / 86400) + ' d ago'; };

  function paintPanel(keepScroll) {
    if (!panel || !open) return;
    const teacher = isTeacher(), tabs = [['people', 'People'], ['chat', 'Messages'], ...(teacher ? [['progress', 'Progress'], ['controls', 'Controls']] : [])];
    const unread = unreadDM() + unreadClass();
    const sc = panel.querySelector('.cp-body')?.scrollTop;
    panel.innerHTML = `<div class="cp-head"><div><b>Your class</b><span><i class="cp-live" aria-hidden="true"></i>${onlineStudents()} ${onlineStudents() === 1 ? 'student' : 'students'} online${teacher ? ' · you are the teacher' : ''}</span></div>
        <button type="button" class="cp-close" aria-label="Close the class panel">×</button></div>
      <nav class="cp-tabs" role="tablist">${tabs.map(([k, l]) => `<button type="button" role="tab" data-cp-tab="${k}" aria-selected="${tab === k}">${l}${k === 'chat' && unread ? `<i>${unread}</i>` : ''}${k === 'people' && teacher && hands.size ? `<i class="hand">✋${hands.size}</i>` : ''}</button>`).join('')}</nav>
      <div class="cp-body">${tab === 'people' ? peopleHTML() : tab === 'chat' ? chatHTML() : tab === 'progress' ? progressHTML() : controlsHTML()}</div>`;
    const body = panel.querySelector('.cp-body');
    if (tab === 'chat' && thread) { const list = panel.querySelector('.cm-list'); if (list) list.scrollTop = list.scrollHeight; }
    else if (keepScroll && sc) body.scrollTop = sc;
  }
  function peopleHTML() {
    const teacher = isTeacher(), here = [...online].filter(([id]) => id !== me());
    const raised = teacher ? here.filter(([id]) => hands.has(id)) : [];
    const offline = people.filter(p => p.id !== me() && !online.has(p.id));
    const row = ([id, p]) => `<li class="cp-person${hands.has(id) ? ' has-hand' : ''}"><span class="cp-ava">${ava(p)}<i class="cp-on"></i></span>
        <span class="cp-pt"><b>${esc(p.name)}${p.role === 'teacher' ? ' <em>Teacher</em>' : ''}</b><small>${hands.has(id) ? '✋ Hand up · ' : ''}${esc(p.label || 'Online')}</small></span>
        ${teacher && hands.has(id) ? `<button type="button" class="cp-mini" data-hand-down="${id}">Seen</button>` : ''}<button type="button" class="cp-mini" data-dm="${id}" aria-label="Message ${esc(p.name)}">${icon('chat')}</button></li>`;
    return `${!teacher ? `<button type="button" class="cp-hand${myHand ? ' on' : ''}" data-raise-hand aria-pressed="${myHand}"><span aria-hidden="true">✋</span><span><b>${myHand ? 'Your hand is up' : 'Raise your hand'}</b><small>${myHand ? 'Click again to put it down' : 'Your teacher will see it at once'}</small></span></button>` : ''}
      ${raised.length ? `<h3 class="cp-h">Hands up <button type="button" class="text-link" data-hand-down="*">Lower all</button></h3><ul class="cp-people">${raised.map(row).join('')}</ul>` : ''}
      <h3 class="cp-h">Online now <span>${here.length}</span></h3>
      ${here.length ? `<ul class="cp-people">${here.filter(([id]) => !raised.some(([r]) => r === id)).map(row).join('')}</ul>` : '<p class="cp-empty">Nobody else is online right now.</p>'}
      ${offline.length ? `<h3 class="cp-h">Not online <span>${offline.length}</span></h3><ul class="cp-people cp-off">${offline.map(p => `<li class="cp-person"><span class="cp-ava">${ava(p)}</span><span class="cp-pt"><b>${esc(p.full_name)}${p.role === 'teacher' ? ' <em>Teacher</em>' : ''}</b></span><button type="button" class="cp-mini" data-dm="${p.id}" aria-label="Message ${esc(p.full_name)}">${icon('chat')}</button></li>`).join('')}</ul>` : ''}`;
  }
  function threads() {
    const map = new Map();
    for (const m of msgs) { if (!m.recipient_id) continue; const other = m.sender_id === me() ? m.recipient_id : m.sender_id; map.set(other, m); }
    const teachers = people.filter(p => p.role === 'teacher' && p.id !== me());
    teachers.forEach(t => { if (!map.has(t.id)) map.set(t.id, null); });
    return [...map].sort((a, b) => (person(b[0]).role === 'teacher') - (person(a[0]).role === 'teacher') || (b[1] ? Date.parse(b[1].created_at) : 0) - (a[1] ? Date.parse(a[1].created_at) : 0));
  }
  function chatHTML() {
    if (!thread) {
      const cls = msgs.filter(m => !m.recipient_id), lastCls = cls[cls.length - 1], uc = unreadClass();
      return `<ul class="cm-threads">
        <li><button type="button" class="cm-thread is-class" data-thread="class"><span class="cm-tico">${icon('users')}</span><span class="cm-tt"><b>Class chat</b><small>${lastCls ? esc(lastCls.sender_name + ': ' + lastCls.body).slice(0, 70) : 'Everyone in the class can read this'}</small></span>${uc ? `<i>${uc}</i>` : ''}</button></li>
        ${threads().map(([id, last]) => { const p = person(id), u = msgs.filter(m => m.sender_id === id && m.recipient_id === me() && !m.read_at).length;
          return `<li><button type="button" class="cm-thread" data-thread="${id}">${ava(p)}<span class="cm-tt"><b>${esc(p.full_name)}${p.role === 'teacher' ? ' <em>Teacher</em>' : ''}</b><small>${last ? esc((last.sender_id === me() ? 'You: ' : '') + last.body).slice(0, 70) : p.role === 'teacher' ? 'Ask your teacher a question — only they can read it' : ''}</small></span>${u ? `<i>${u}</i>` : last ? `<small class="cm-when">${esc(ago(last.created_at))}</small>` : ''}</button></li>`; }).join('')}
      </ul>
      <label class="cm-new"><span>${icon('pen')} New message to</span><select data-new-dm><option value="">Choose a classmate…</option>${people.filter(p => p.id !== me()).map(p => `<option value="${p.id}">${esc(p.full_name)}${p.role === 'teacher' ? ' (teacher)' : ''}</option>`).join('')}</select></label>
      <p class="cp-note">${icon('lock')} Private messages are seen only by the two people in them. Be kind — your teacher can remove class-chat messages.</p>`;
    }
    const isClass = thread === 'class', p = isClass ? null : person(thread);
    const list = msgs.filter(m => isClass ? !m.recipient_id : (m.recipient_id && ((m.sender_id === me() && m.recipient_id === thread) || (m.sender_id === thread && m.recipient_id === me()))));
    let lastDay = '';
    return `<div class="cm-view"><div class="cm-top"><button type="button" class="cp-back" data-thread="" aria-label="All conversations">‹</button>${isClass ? `<span class="cm-tico">${icon('users')}</span><b>Class chat</b>` : `${ava(p)}<b>${esc(p.full_name)}${p.role === 'teacher' ? ' <em>Teacher</em>' : ''}</b>${online.has(thread) ? '<small class="cm-online">online</small>' : ''}`}</div>
      <ol class="cm-list" aria-live="polite">${list.map(m => { const mine = m.sender_id === me(), day = new Date(m.created_at).toDateString(), sep = day !== lastDay ? `<li class="cm-day">${esc(new Date(m.created_at).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' }))}</li>` : ''; lastDay = day;
        return `${sep}<li class="cm-msg${mine ? ' mine' : ''}${m.sender_role === 'teacher' ? ' from-teacher' : ''}">${!mine && isClass ? `<span class="cm-who">${ava(person(m.sender_id))}</span>` : ''}<div class="cm-bubble">${!mine && isClass ? `<b>${esc(m.sender_name)}${m.sender_role === 'teacher' ? ' · Teacher' : ''}</b>` : ''}<p>${esc(m.body).replace(/\n/g, '<br>')}</p><small>${esc(when(m.created_at))}${mine && m.read_at ? ' · seen' : ''}</small></div>${mine || (isTeacher() && isClass) ? `<button type="button" class="cm-del" data-del-msg="${m.id}" aria-label="Delete this message">×</button>` : ''}</li>`; }).join('') || `<li class="cm-empty">${isClass ? 'Say hello to your class 👋' : `Start a private conversation with ${esc(p.full_name)}.`}</li>`}</ol>
      <form class="cm-compose"><label class="sr-only" for="cm-input">Message</label><textarea id="cm-input" class="cm-input" rows="2" maxlength="2000" placeholder="${isClass ? 'Write to the whole class…' : `Write to ${esc(p.full_name)}…`}"></textarea><button class="btn btn-sm" type="submit" aria-label="Send">${icon('arrow')}</button></form></div>`;
  }
  function progressHTML() {
    if (!progress) return '<p class="cp-empty">Loading the class’s progress…</p>';
    const studs = people.filter(p => p.role === 'student'), byUser = new Map(progress.map(r => [r.user_id, r]));
    const secs = lesson.sections, total = secs.reduce((n, s) => n + s.activities.length, 0);
    const rows = studs.map(p => { const r = byUser.get(p.id), done = r?.state?.done || {}; const per = secs.map(s => s.activities.filter(a => done[a.id]).length); return { p, r, per, sum: per.reduce((a, b) => a + b, 0) }; })
      .sort((a, b) => b.sum - a.sum || a.p.full_name.localeCompare(b.p.full_name));
    const avg = rows.length ? Math.round(rows.reduce((n, x) => n + x.sum, 0) / rows.length / total * 100) : 0;
    return `<div class="pg-sum"><div><b>${avg}%</b><span>class average</span></div><div><b>${rows.filter(x => x.sum === total).length}</b><span>finished the lesson</span></div><div><b>${rows.filter(x => !x.sum).length}</b><span>not started</span></div></div>
      <p class="cp-note">Week ${lesson.week} · Day ${lesson.day}: ${esc(lesson.title)}</p>
      <div class="pg-head"><span>Student</span>${secs.map((s, i) => `<span title="Stage ${i + 1}: ${esc(s.title)}">S${i + 1}</span>`).join('')}</div>
      <ul class="pg-rows">${rows.map(x => `<li class="pg-row"><span class="pg-who">${ava(x.p)}<span><b>${esc(x.p.full_name)}</b><small>${online.has(x.p.id) ? '<i class="cp-on"></i>online' : x.r ? 'active ' + esc(ago(x.r.updated_at)) : 'not opened yet'}</small></span></span>
        ${x.per.map((n, i) => { const all = secs[i].activities.length; return `<span class="pg-cell${n === all ? ' full' : n ? ' some' : ''}" title="${esc(secs[i].title)}: ${n} of ${all}">${n}/${all}</span>`; }).join('')}</li>`).join('') || '<li class="cp-empty">No students have signed in yet.</li>'}</ul>
      <button type="button" class="btn-quiet btn-sm" data-refresh-progress>${icon('undo')} Refresh</button>`;
  }
  function controlsHTML() {
    const o = settings.answers_open !== false;
    return `<button type="button" class="cc-switch${o ? ' on' : ''}" data-answers aria-pressed="${o}"><span class="ap-sw" aria-hidden="true"><i></i></span><span><b>Students can check answers</b><small>${o ? 'Open: “Check my answers” and suggested answers work.' : 'Closed: students try first; answers stay hidden until you open them.'}</small></span></button>
      <button type="button" class="cc-act" data-bring><span>${icon('flag')}</span><span><b>Bring the class to this page</b><small>Everyone online gets a “Go there” button for: ${esc(where.label || 'this page')}</small></span></button>
      <button type="button" class="cc-act" data-hand-down="*"><span>✋</span><span><b>Lower all hands</b><small>${hands.size} raised now</small></span></button>
      <a class="cc-act" href="#/board"><span>${icon('pen')}</span><span><b>Open the class board</b><small>Write notes the whole class can see live</small></span></a>
      <button type="button" class="cc-act" data-thread-open="class"><span>${icon('chat')}</span><span><b>Write to the whole class</b><small>Your message is shown as a teacher announcement</small></span></button>
      <p class="cp-note">${icon('lock')} Only you see Teacher view, teacher notes and this tab.</p>`;
  }
  function onPanelClick(e) {
    const t = e.target.closest('button, a, select'); if (!t) return; const d = t.dataset;
    if (t.classList.contains('cp-close')) { toggle(false); return; }
    if (d.cpTab) { tab = d.cpTab; if (tab === 'chat') thread = null; if (tab === 'progress') loadProgress(); paintPanel(); return; }
    if (d.thread !== undefined) { thread = d.thread || null; tab = 'chat'; if (thread) markRead(thread); paintPanel(); if (thread) panel.querySelector('.cm-input')?.focus(); return; }
    if (d.threadOpen) { thread = d.threadOpen; tab = 'chat'; markRead(thread); paintPanel(); panel.querySelector('.cm-input')?.focus(); return; }
    if (d.dm) { thread = d.dm; tab = 'chat'; markRead(thread); paintPanel(); panel.querySelector('.cm-input')?.focus(); return; }
    if (d.raiseHand !== undefined) { raiseHand(); return; }
    if (d.handDown) { lowerHand(d.handDown); return; }
    if (d.bring !== undefined) { bringClass(); return; }
    if (d.answers !== undefined) { setAnswers(settings.answers_open === false); return; }
    if (d.refreshProgress !== undefined) { loadProgress(); loadCounts(); return; }
    if (d.delMsg) { if (confirm('Delete this message?')) deleteMessage(d.delMsg); return; }
  }
  document.addEventListener('change', e => { const s = e.target.closest?.('[data-new-dm]'); if (s && s.value) { thread = s.value; tab = 'chat'; paintPanel(); panel.querySelector('.cm-input')?.focus(); } });
  document.addEventListener('click', e => {
    const b = e.target.closest?.('#class-btn'); if (b) { toggle(); return; }
    const a = e.target.closest?.('#answers-pill'); if (a) { setAnswers(settings.answers_open === false); return; }
    if (open && panel && e.target.isConnected && !panel.contains(e.target) && !e.target.closest('.class-invite, #toast, dialog')) toggle(false);
  });

  return {
    connect, disconnect, setWhere, answersLocked, paintCounts, loadCounts, toggle,
    isTeacher, note: ref => (notes ? notes[ref] ?? '' : null), get answersOpen() { return settings.answers_open !== false; },
    message: id => toggle(true, 'chat', id),
    online: () => online.size, onlineIds: () => [...online.keys()], onlineStudents, typing, onTyping: fn => (typingFns.add(fn), () => typingFns.delete(fn)),
    done: id => ({ n: counts[id] || 0, of: students || people.filter(p => p.role === 'student').length }),
  };
};
