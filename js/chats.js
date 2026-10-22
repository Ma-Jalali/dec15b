/* DEC15 Chats (v2.49) — a WhatsApp-style page (#/chats) for signed-in classmates to learn together.
   - Conversations: the class chat, study groups (tables chat_groups / chat_members) and private chats.
   - Every message can be replied to, reacted to (chat_reactions) and pinned (rpc chat_pin).
   - Learning tools in the composer: polls (chat_votes), word cards (saved to "My words" and practised as
     flashcards), "Help needed" questions that the asker marks as solved (rpc chat_solve), links to lesson pages,
     and a bank of useful academic phrases.
   - Read ticks, typing dots, online dots (the class presence channel in js/classroom.js), unread badges.
   All rows are protected by Row Level Security: group messages are seen only by members (and the teacher). */
window.createDEC15Chats = function ({ getCloud, getClass, esc, icon, toast, avatarHTML, signIn }) {
  const cloud = () => getCloud();
  const db = () => (cloud()?.user && cloud().client) || null;
  const me = () => cloud()?.user?.id || null;
  const prof = () => cloud()?.profile || {};
  const isTeacher = () => prof().role === 'teacher';
  const klass = () => getClass?.() || null;
  const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
  const LSJ = (k, v) => { if (v === undefined) { try { return JSON.parse(LS(k) || 'null'); } catch (e) { return null; } } LS(k, JSON.stringify(v)); };

  const REACTS = ['👍', '❤️', '😂', '😮', '🙏', '💡', '✅', '👏'];
  const EMOJIS = ['😀', '😊', '😂', '🥲', '😍', '🤔', '😮', '😅', '😴', '🤯', '🥳', '😎', '👍', '👏', '🙏', '💪', '🙌', '👋', '❤️', '🔥', '⭐', '✨', '💡', '✅', '❓', '📚', '✍️', '🎧', '🗣️', '🧠', '📝', '📖', '🎯', '⏰', '☕', '🍀', '🌏', '🚀', '🎉', '💬'];
  const GROUP_EMOJI = ['📚', '✍️', '🎧', '🗣️', '🧠', '🌏', '🎯', '💡', '🌱', '☕', '🚀', '🍎'];
  const COLORS = ['teal', 'coral', 'blue', 'plum', 'saffron', 'sage'];
  const TOPICS = ['Reading', 'Listening', 'Writing', 'Speaking', 'Vocabulary', 'Grammar', 'Lesson task'];
  const POS = ['', 'noun', 'verb', 'adjective', 'adverb', 'phrase', 'collocation'];
  const PHRASES = [
    ['Agree and disagree politely', ['I see your point, but…', 'That’s a fair point. However,…', 'I partly agree, because…', 'I’m not sure I agree. In my view,…']],
    ['Ask for help', ['Could someone explain what … means?', 'I’m stuck on question …. Any ideas?', 'Does anyone know how to…?', 'Am I right in thinking that…?']],
    ['Give feedback', ['I really like how you…', 'One thing you could add is…', 'It might be clearer if you…', 'Have you thought about…?']],
    ['Check understanding', ['So what you mean is…', 'Just to check: are we meant to…?', 'Do you mean that…?', 'Could you give an example?']],
    ['Work together', ['Shall we split the questions?', 'I can take the first part.', 'Let’s compare our answers.', 'When are we meeting?']],
  ];
  const SVG = {
    send: '<path d="M4.5 12 3 4.5l18 7.5-18 7.5z"/><path d="M4.5 12H12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2M9 9.5h.01M15 9.5h.01"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
    pin: '<path d="M9 4h6l-1 6 3 3H7l3-3z"/><path d="M12 13v7"/>',
    reply: '<path d="M10 8 5 12.5l5 4.5"/><path d="M5 12.5h9a5 5 0 0 1 5 5V19"/>',
    react: '<circle cx="11" cy="12" r="8"/><path d="M7.5 14c.9 1.2 2 1.8 3.5 1.8s2.6-.6 3.5-1.8M8.5 9.5h.01M13.5 9.5h.01"/><path d="M19 3v4M17 5h4"/>',
    more: '<circle cx="12" cy="5.5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="18.5" r="1.4"/>',
    back: '<path d="M15 5 8 12l7 7"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    poll: '<path d="M5 20V10M12 20V4M19 20v-7"/>',
    word: '<path d="M4 19V6a2 2 0 0 1 2-2h12v13H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h12"/><path d="M9 8h5M9 11h3"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    phrase: '<path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    group: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.6"/><path d="M16 14.2c2.8.3 5 2.6 5 5.8"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    edit: '<path d="m15 4 5 5L9 20H4v-5z"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    check: '<path d="m5 12.5 4 4L19 6.5"/>',
    star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9z"/>',
    flip: '<path d="M4 9a8 8 0 0 1 14-3l2 2M20 15a8 8 0 0 1-14 3l-2-2"/><path d="M20 4v4h-4M4 20v-4h4"/>',
    door: '<path d="M14 4h5v16h-5M10 8l-4 4 4 4M6 12h10"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
  };
  const ic = (n, c = '') => `<svg class="ch-i ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SVG[n] || SVG.chat}</svg>`;

  /* ───────── data ───────── */
  let people = [], byId = new Map(), groups = [], msgs = [], reacts = new Map(), votes = new Map(), ch = null, loaded = false, connectedAs = null;
  let lastSeenClass = +(LS('dec15-class-seen') || 0), lastPage = LSJ('dec15-chat-lastpage') || null;
  const typingNow = new Map();   // conversation key -> Map(name -> until)

  async function connect() {
    const uid = me(), key = uid ? uid + ':' + (prof().role || '') : null;
    if (key === connectedAs) return;
    disconnect(); connectedAs = key;
    const c = db(); if (!c) { paint(); return; }
    await loadAll();
    if (typeof c.channel === 'function') ch = c.channel('dec15-chats-' + uid)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, onMsgChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_reactions' }, onReactChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_votes' }, onVoteChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_groups' }, () => loadGroups())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_members' }, onMemberChange)
      .subscribe();
  }
  function disconnect() {
    try { if (ch) cloud()?.client?.removeChannel(ch); } catch (e) { /* ignore */ }
    ch = null; people = []; byId = new Map(); groups = []; msgs = []; reacts = new Map(); votes = new Map(); loaded = false; connectedAs = null;
    paint();
  }
  const MSG_COLS = 'id, sender_id, sender_name, sender_role, recipient_id, group_id, kind, data, reply_to, pinned_at, solved_at, body, created_at, read_at';
  async function loadAll() {
    const c = db(); if (!c) return;
    try {
      const [pp, mm, rr, vv] = await Promise.all([
        c.rpc('class_people'),
        c.from('messages').select(MSG_COLS).order('created_at', { ascending: false }).limit(900),
        c.from('chat_reactions').select('message_id, user_id, emoji').order('created_at').limit(6000),
        c.from('chat_votes').select('message_id, user_id, choice').limit(6000),
        loadGroups(true),
      ]);
      people = pp.data || []; byId = new Map(people.map(p => [p.id, p]));
      msgs = sortMsgs(mm.data || []);
      reacts = new Map(); (rr.data || []).forEach(addReact);
      votes = new Map(); (vv.data || []).forEach(r => voteMap(r.message_id).set(r.user_id, r.choice));
    } catch (e) { /* offline: show what we have */ }
    loaded = true; paint(); if (mounted) markRead(cur);
  }
  async function loadGroups(quiet) {
    const c = db(); if (!c) return;
    const { data } = await c.from('chat_groups').select('id, name, emoji, color, about, created_by, created_at, chat_members(user_id, last_read_at, joined_at)').order('created_at');
    if (data) groups = data.map(g => ({ ...g, members: g.chat_members || [] }));
    if (!quiet) { if (loaded && cur.startsWith('g:') && !group(cur.slice(2))) cur = 'class'; paint(); }
  }
  async function loadMessages() {
    const c = db(); if (!c) return;
    const { data } = await c.from('messages').select(MSG_COLS).order('created_at', { ascending: false }).limit(900);
    if (data) { msgs = sortMsgs(data); paint(); }
  }
  const sortMsgs = list => list.slice().sort((x, y) => Date.parse(x.created_at) - Date.parse(y.created_at));
  const addReact = r => { const a = reacts.get(r.message_id) || []; if (!a.some(x => x.user_id === r.user_id && x.emoji === r.emoji)) a.push({ user_id: r.user_id, emoji: r.emoji }); reacts.set(r.message_id, a); };
  const voteMap = id => { if (!votes.has(id)) votes.set(id, new Map()); return votes.get(id); };

  /* ───────── live changes ───────── */
  function onMsgChange(p) {
    if (p.eventType === 'DELETE') { const id = p.old?.id; if (!id) return; msgs = msgs.filter(m => m.id !== id); paintConvSoft(); paintList(); paintBadge(); return; }
    const m = p.new; if (!m?.id) return;
    if (m.recipient_id && m.recipient_id !== me() && m.sender_id !== me()) return;   // never show someone else's private chat
    const was = msgs.find(x => x.id === m.id);
    if (was) { Object.assign(was, m); paintConvSoft(); paintList(); return; }
    msgs.push(m); onNew(m);
  }
  function onNew(m) {
    const k = keyOf(m), mine = m.sender_id === me();
    clearTyping(k, m.sender_name);
    if (!mine) {
      if (mounted && cur === k && document.visibilityState === 'visible') markRead(k);
      else if (!mounted && m.group_id) { const g = group(m.group_id); toast(`${g ? g.emoji + ' ' + g.name : 'Study group'} · ${m.sender_name}: ${preview(m).slice(0, 60)}`); }
    }
    paintList(); paintBadge();
    if (mounted && cur === k) paintMessages(mine ? 'bottom' : 'auto');
  }
  function onReactChange(p) {
    if (p.eventType === 'DELETE') { const o = p.old || {}; const a = reacts.get(o.message_id); if (a) reacts.set(o.message_id, a.filter(x => !(x.user_id === o.user_id && x.emoji === o.emoji))); }
    else if (p.new) addReact(p.new);
    paintConvSoft();
  }
  function onVoteChange(p) {
    if (p.eventType === 'DELETE') { const o = p.old || {}; votes.get(o.message_id)?.delete(o.user_id); }
    else if (p.new) voteMap(p.new.message_id).set(p.new.user_id, p.new.choice);
    paintConvSoft();
  }
  function onMemberChange(p) {
    const r = p.new?.group_id ? p.new : p.old;
    if (p.eventType === 'UPDATE' && r) { const g = group(r.group_id), mm = g?.members.find(x => x.user_id === r.user_id); if (mm) { mm.last_read_at = r.last_read_at; paintConvSoft(); paintList(); return; } }
    const aboutMe = r?.user_id === me();
    loadGroups().then(() => { if (aboutMe) loadMessages(); });
  }
  function onTyping(pl) {
    const t = String(pl.thread || ''); if (!t.startsWith('chat:')) return;
    let k = t.slice(5);
    if (k.startsWith('u:')) { if (k.slice(2) !== me()) return; k = 'u:' + pl.id; }
    else if (k.startsWith('g:') && !group(k.slice(2))) return;
    const m = typingNow.get(k) || new Map(); m.set(pl.name || 'Someone', Date.now() + 4000); typingNow.set(k, m);
    paintTyping(); paintList();
    setTimeout(() => { paintTyping(); paintList(); }, 4100);
  }
  function clearTyping(k, name) { const m = typingNow.get(k); if (m && name) { m.delete(String(name).split(' ')[0]); paintTyping(); } }
  const typers = k => { const m = typingNow.get(k); if (!m) return []; const now = Date.now(); return [...m].filter(([, t]) => t > now).map(([n]) => n); };
  let typingHooked = false;
  function hookTyping() { if (typingHooked || !klass()?.onTyping) return; typingHooked = true; klass().onTyping(onTyping); document.addEventListener('dec15:presence', () => { if (mounted) { paintList(); paintHead(); } }); }

  /* ───────── helpers ───────── */
  const group = id => groups.find(g => g.id === id);
  const isMember = g => !!g?.members.some(m => m.user_id === me());
  const person = id => byId.get(id) || { id, full_name: msgs.find(m => m.sender_id === id)?.sender_name || 'Classmate', role: 'student' };
  const first = n => String(n || '').trim().split(/\s+/)[0] || 'Someone';
  const onlineIds = () => new Set(klass()?.onlineIds?.() || []);
  const keyOf = m => m.group_id ? 'g:' + m.group_id : m.recipient_id ? 'u:' + (m.sender_id === me() ? m.recipient_id : m.sender_id) : 'class';
  const inConv = k => msgs.filter(m => keyOf(m) === k);
  const groupRead = g => g?.members.find(m => m.user_id === me())?.last_read_at;
  function unreadIn(k) {
    const uid = me();
    if (k === 'class') return msgs.filter(m => !m.group_id && !m.recipient_id && m.sender_id !== uid && Date.parse(m.created_at) > lastSeenClass).length;
    if (k.startsWith('u:')) { const o = k.slice(2); return msgs.filter(m => m.sender_id === o && m.recipient_id === uid && !m.read_at).length; }
    const g = group(k.slice(2)); if (!isMember(g)) return 0; const t = Date.parse(groupRead(g) || 0);
    return msgs.filter(m => m.group_id === g.id && m.sender_id !== uid && Date.parse(m.created_at) > t).length;
  }
  const totalUnread = () => convs().reduce((n, c) => n + unreadIn(c.key), 0);
  let readT = {};
  async function markRead(k) {
    const c = db(), uid = me(); if (!c) return;
    if (k === 'class') { lastSeenClass = Date.now(); LS('dec15-class-seen', String(lastSeenClass)); }
    else if (k.startsWith('u:')) {
      const ids = msgs.filter(m => m.sender_id === k.slice(2) && m.recipient_id === uid && !m.read_at).map(m => m.id);
      if (ids.length) { const now = new Date().toISOString(); msgs.forEach(m => { if (ids.includes(m.id)) m.read_at = now; }); c.from('messages').update({ read_at: now }).in('id', ids).then(() => {}, () => {}); }
    } else {
      const g = group(k.slice(2)), mm = g?.members.find(x => x.user_id === uid); if (!mm) return;
      mm.last_read_at = new Date().toISOString();
      clearTimeout(readT[k]); readT[k] = setTimeout(() => c.from('chat_members').update({ last_read_at: new Date().toISOString() }).eq('group_id', g.id).eq('user_id', uid).then(() => {}, () => {}), 600);
    }
    document.dispatchEvent(new CustomEvent('dec15:chats-read', { detail: { key: k } }));
    paintList(); paintBadge();
  }
  const KIND_LABEL = { poll: '📊 Poll', word: '📖 Word', question: '🙋 Help needed', link: '🔗 Page' };
  const preview = m => (KIND_LABEL[m.kind] ? KIND_LABEL[m.kind] + ': ' : '') + String(m.body || '').replace(/\s+/g, ' ');
  const time = iso => new Date(iso).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' });
  function shortWhen(iso) {
    const d = new Date(iso), now = new Date(), days = Math.floor((new Date(now.toDateString()) - new Date(d.toDateString())) / 864e5);
    return days === 0 ? time(iso) : days === 1 ? 'Yesterday' : days < 7 ? d.toLocaleDateString('en-AU', { weekday: 'short' }) : d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
  }
  function dayLabel(iso) {
    const d = new Date(iso), days = Math.floor((new Date(new Date().toDateString()) - new Date(d.toDateString())) / 864e5);
    return days === 0 ? 'Today' : days === 1 ? 'Yesterday' : d.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
  }
  const hue = id => { let h = 0; for (const ch of String(id)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return ['#1f7a6d', '#c0503a', '#3d5fc4', '#7d4fb0', '#b7791f', '#4f8a47', '#b0447a', '#2b7fa3'][h % 8]; };
  const ava = (p, cls = 'avatar ch-av') => avatarHTML({ full_name: p.full_name || p.name, avatar_url: p.avatar_url || p.avatar }, '', cls);
  const isEmojiOnly = s => /^(\p{Extended_Pictographic}|\p{Emoji_Component}|️|‍|\s){1,12}$/u.test(s) && !/[0-9#*]/.test(s) && [...s.replace(/\s/g, '')].length <= 8;
  function rich(s, find) {
    let h = esc(s);
    h = h.replace(/(^|\s)\*([^*\n]{1,80})\*(?=\s|$|[.,!?])/g, '$1<b>$2</b>');
    h = h.replace(/(^|\s)(https?:\/\/[^\s<]{3,200})/g, (x, a, u) => `${a}<a href="${u}" target="_blank" rel="noopener nofollow">${u.length > 48 ? u.slice(0, 46) + '…' : u}</a>`);
    if (find) { const q = esc(find).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); h = h.replace(new RegExp(`(?![^<]*>)(${q})`, 'gi'), '<mark>$1</mark>'); }
    return h.replace(/\n/g, '<br>');
  }

  /* conversations shown in the list */
  function convs() {
    const uid = me(); if (!uid) return [];
    const list = [], last = new Map();
    for (const m of msgs) last.set(keyOf(m), m);
    list.push({ key: 'class', kind: 'class', name: 'Class chat', last: last.get('class') });
    groups.forEach(g => list.push({ key: 'g:' + g.id, kind: 'group', g, name: g.name, last: last.get('g:' + g.id), watch: !isMember(g) }));
    const dms = new Set([...last.keys()].filter(k => k.startsWith('u:')));
    people.filter(p => p.role === 'teacher' && p.id !== uid).forEach(p => dms.add('u:' + p.id));
    if (cur.startsWith('u:')) dms.add(cur);
    dms.forEach(k => { const p = person(k.slice(2)); list.push({ key: k, kind: 'dm', p, name: p.full_name, last: last.get(k) }); });
    const t = c => c.last ? Date.parse(c.last.created_at) : c.g ? Date.parse(c.g.created_at) : 0;
    return [list[0], ...list.slice(1).sort((a, b) => t(b) - t(a))];
  }

  /* ───────── sending ───────── */
  async function send(row) {
    const c = db(); if (!c) return null;
    const target = cur === 'class' ? {} : cur.startsWith('g:') ? { group_id: cur.slice(2) } : { recipient_id: cur.slice(2) };
    const { data, error } = await c.from('messages').insert({ ...row, ...target, body: String(row.body || '').slice(0, 2000) }).select(MSG_COLS).single();
    if (error) { toast('Sorry — the message was not sent. Check your internet.'); return null; }
    if (!msgs.some(m => m.id === data.id)) { msgs.push(data); onNew(data); }
    return data;
  }
  async function sendText(text) {
    text = String(text || '').trim(); if (!text) return false;
    const row = { body: text, kind: 'text', reply_to: replyTo || null };
    replyTo = null; paintReply();
    return !!(await send(row));
  }
  async function react(id, emoji) {
    const c = db(), uid = me(); if (!c) return;
    const a = reacts.get(id) || [], had = a.some(x => x.user_id === uid && x.emoji === emoji);
    if (had) { reacts.set(id, a.filter(x => !(x.user_id === uid && x.emoji === emoji))); paintConvSoft(); await c.from('chat_reactions').delete().match({ message_id: id, user_id: uid, emoji }); }
    else { addReact({ message_id: id, user_id: uid, emoji }); paintConvSoft(); const { error } = await c.from('chat_reactions').insert({ message_id: id, emoji }); if (error && !/duplicate/i.test(error.message || '')) toast('The reaction was not saved.'); }
  }
  async function vote(id, choice) {
    const c = db(), uid = me(); if (!c) return;
    const v = voteMap(id), was = v.get(uid);
    if (was === choice) { v.delete(uid); paintConvSoft(); await c.from('chat_votes').delete().match({ message_id: id, user_id: uid }); return; }
    v.set(uid, choice); paintConvSoft();
    const { error } = await c.from('chat_votes').upsert({ message_id: id, user_id: uid, choice }, { onConflict: 'message_id,user_id' });
    if (error) { toast('Your vote was not saved.'); if (was === undefined) v.delete(uid); else v.set(uid, was); paintConvSoft(); }
  }
  async function pin(id, on) {
    const c = db(); if (!c) return; const { data, error } = await c.rpc('chat_pin', { p_id: id, p_on: on });
    if (error) { toast('Only the teacher (class chat) or the group creator can pin here.'); return; }
    const m = msgs.find(x => x.id === id); if (m) m.pinned_at = data; paintConvSoft(); toast(on ? 'Pinned to the top of the chat.' : 'Unpinned.');
  }
  async function solve(id, on) {
    const c = db(); if (!c) return; const { data, error } = await c.rpc('chat_solve', { p_id: id, p_on: on });
    if (error) { toast('Only the person who asked can mark this.'); return; }
    const m = msgs.find(x => x.id === id); if (m) m.solved_at = data; paintConvSoft(); if (on) celebrate();
  }
  async function remove(id) {
    const c = db(); if (!c) return; const { error } = await c.from('messages').delete().eq('id', id);
    if (error) { toast('The message could not be deleted.'); return; }
    msgs = msgs.filter(m => m.id !== id); paintConvSoft(); paintList();
  }
  const canPin = m => m.group_id ? (group(m.group_id)?.created_by === me() || isTeacher()) : m.recipient_id ? true : isTeacher();
  const canDelete = m => m.sender_id === me() || isTeacher();

  /* My words: word cards saved on this device */
  const myWords = () => LSJ('dec15-my-words') || [];
  const saved = w => myWords().some(x => x.word.toLowerCase() === String(w).toLowerCase());
  function saveWord(m) {
    const list = myWords(); if (saved(m.body)) { LSJ('dec15-my-words', list.filter(x => x.word.toLowerCase() !== m.body.toLowerCase())); toast('Removed from My words.'); }
    else { list.unshift({ word: m.body, pos: m.data?.pos || '', meaning: m.data?.meaning || '', example: m.data?.example || '', from: m.sender_name, at: Date.now() }); LSJ('dec15-my-words', list.slice(0, 300)); toast(`“${m.body}” is in My words.`); }
    paintConvSoft(); if (info) paintInfo();
  }

  /* ───────── page state ───────── */
  let root = null, mounted = false, cur = 'class', filter = 'all', q = '', replyTo = null, sheet = null, info = false, infoTab = 'about', find = null, mobileConv = false;
  const drafts = {};
  function notePage(hash, label) { if (!hash || /^#\/(chats|shared|board|planner)?$/.test(hash) || hash.startsWith('#/chats')) return; lastPage = { hash, label }; LSJ('dec15-chat-lastpage', lastPage); }

  function mount(el, hash) {
    root = el; mounted = true; hookTyping();
    const want = String(hash || '').split('/')[2];
    if (want === 'class' || /^[gu]:[\w-]+$/.test(want || '')) { cur = want; mobileConv = true; }
    root.innerHTML = shellHTML(); bind(); paint(); if (db()) markRead(cur);
  }
  function unmount() { if (!mounted) return; saveDraft(); mounted = false; root = null; sheet = null; find = null; }
  const $ = s => root?.querySelector(s);

  function shellHTML() {
    return `<div class="ch-app" data-mobile="${mobileConv ? 'conv' : 'list'}">
      <aside class="ch-side" aria-label="Conversations"></aside>
      <section class="ch-main" aria-label="Conversation"></section>
      <aside class="ch-info" aria-label="Details" hidden></aside>
    </div>`;
  }
  function paint() {
    paintBadge();
    if (!mounted || !root) return;
    if (!db()) { root.innerHTML = signedOutHTML(); return; }
    if (!root.querySelector('.ch-app')) { root.innerHTML = shellHTML(); bind(); }
    root.querySelector('.ch-app').dataset.mobile = mobileConv ? 'conv' : 'list';
    paintList(); paintMain(); paintInfo();
  }
  function paintBadge() {
    const link = document.getElementById('side-chats'); if (!link) return;
    let i = link.querySelector('.side-badge'); const n = db() && loaded ? totalUnread() : 0;
    if (!n) { i?.remove(); return; }
    if (!i) { i = document.createElement('i'); i.className = 'side-badge'; link.append(i); }
    i.textContent = n > 99 ? '99+' : n; i.setAttribute('aria-label', n + ' unread');
  }

  /* left: the list */
  function paintList() {
    const side = $('.ch-side'); if (!side) return;
    const keepFocus = document.activeElement?.id === 'ch-q', on = onlineIds();
    let list = convs();
    if (filter === 'unread') list = list.filter(c => unreadIn(c.key));
    if (filter === 'groups') list = list.filter(c => c.kind === 'group');
    if (filter === 'people') list = list.filter(c => c.kind === 'dm');
    if (q) { const s = q.toLowerCase(); list = list.filter(c => c.name.toLowerCase().includes(s) || (c.last && preview(c.last).toLowerCase().includes(s))); }
    const nOn = [...on].filter(id => id !== me()).length;
    side.innerHTML = `<header class="ch-side-head">
        <div><h1>Chats</h1><p><i class="ch-live" aria-hidden="true"></i>${nOn} ${nOn === 1 ? 'classmate' : 'classmates'} online</p></div>
        <div class="ch-side-acts"><button type="button" class="ch-round" data-new-dm title="Message a classmate" aria-label="Message a classmate">${ic('pen')}</button><button type="button" class="ch-round ch-round-hi" data-new-group title="New study group" aria-label="New study group">${ic('group')}<i>+</i></button></div>
      </header>
      <label class="ch-search">${ic('search')}<input id="ch-q" type="search" placeholder="Search chats" value="${esc(q)}" autocomplete="off" aria-label="Search chats"></label>
      <div class="ch-chips" role="tablist">${[['all', 'All'], ['unread', 'Unread'], ['groups', 'Groups'], ['people', 'Private']].map(([k, l]) => `<button type="button" role="tab" aria-selected="${filter === k}" data-filter="${k}">${l}${k === 'unread' && totalUnread() ? ` <b>${totalUnread()}</b>` : ''}</button>`).join('')}</div>
      <ul class="ch-list">${list.map(c => rowHTML(c, on)).join('') || `<li class="ch-none">${filter === 'unread' ? 'You are all caught up 🎉' : 'Nothing here yet.'}</li>`}</ul>
      <p class="ch-side-foot">${ic('lock')} Only signed-in classmates can see Chats.${isTeacher() ? ' As the teacher you can read every study group.' : ' Your teacher can see study groups.'}</p>`;
    if (keepFocus) { const i = $('#ch-q'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
  }
  function tile(c, on, cls = '') {
    if (c.kind === 'class') return `<span class="ch-tile t-class ${cls}" aria-hidden="true">${ic('group')}</span>`;
    if (c.kind === 'group') return `<span class="ch-tile t-${esc(c.g.color)} ${cls}" aria-hidden="true">${esc(c.g.emoji)}</span>`;
    return `<span class="ch-pava ${cls}">${ava(c.p)}${on.has(c.p.id) ? '<i class="ch-on" aria-label="online"></i>' : ''}</span>`;
  }
  function rowHTML(c, on) {
    const u = unreadIn(c.key), ty = typers(c.key), l = c.last;
    const sub = ty.length ? `<em class="ch-typing-tx">${esc(ty.length > 1 ? 'several people are typing…' : (c.kind === 'dm' ? '' : ty[0] + ' is ') + 'typing…')}</em>`
      : l ? `${l.sender_id === me() ? `<span class="ch-tick${seenBy(l) ? ' seen' : ''}">${ic('check')}</span>` : c.kind !== 'dm' ? `<b>${esc(first(l.sender_name))}:</b> ` : ''}${esc(preview(l).slice(0, 80))}`
      : c.kind === 'class' ? 'Everyone in your class is here' : c.kind === 'group' ? esc(c.g.about || 'New study group — say hello!') : person(c.p.id).role === 'teacher' ? 'Ask your teacher anything, privately' : 'Start a private chat';
    return `<li><button type="button" class="ch-row${cur === c.key ? ' on' : ''}${u ? ' has-unread' : ''}" data-open="${esc(c.key)}">
      ${tile(c, on)}
      <span class="ch-rt"><span class="ch-r1"><b>${esc(c.name)}</b>${c.kind === 'dm' && c.p.role === 'teacher' ? '<em class="ch-tag">Teacher</em>' : ''}${c.watch ? '<em class="ch-tag ch-tag-w">Not a member</em>' : ''}<time>${l ? esc(shortWhen(l.created_at)) : ''}</time></span>
        <span class="ch-r2"><small>${sub}</small>${u ? `<i class="ch-badge">${u > 99 ? '99+' : u}</i>` : ''}</span></span></button></li>`;
  }

  /* centre: the conversation */
  function convInfo(k = cur) {
    if (k === 'class') return { key: k, kind: 'class', name: 'Class chat' };
    if (k.startsWith('g:')) { const g = group(k.slice(2)); return g ? { key: k, kind: 'group', g, name: g.name, watch: !isMember(g) } : null; }
    const p = person(k.slice(2)); return { key: k, kind: 'dm', p, name: p.full_name };
  }
  function paintMain() {
    const main = $('.ch-main'); if (!main) return;
    const c = convInfo(); if (!c) { if (!loaded) { main.innerHTML = '<p class="ch-loading">Opening the chat…</p>'; return; } cur = 'class'; return paintMain(); }
    main.innerHTML = `<header class="ch-head"></header><div class="ch-pins"></div><div class="ch-find" hidden></div>
      <div class="ch-wall"><ol class="ch-msgs" aria-live="polite"></ol><div class="ch-typing" aria-live="polite"></div></div>
      <button type="button" class="ch-jump" hidden aria-label="Jump to the newest message">${ic('down')}<i></i></button>
      <div class="ch-compose-wrap">${c.watch ? `<div class="ch-join"><span>${ic('lock')} You can read this group as the teacher.</span><button type="button" class="btn btn-sm" data-join>Join the group</button></div>` : composeHTML(c)}</div>`;
    paintHead(); paintFind(); paintMessages('first'); paintTyping();
    const ta = $('.ch-input'); if (ta) { ta.value = drafts[cur] || ''; grow(ta); }
    $('.ch-wall').addEventListener('scroll', onWallScroll, { passive: true });
  }
  function paintHead() {
    const h = $('.ch-head'); if (!h) return; const c = convInfo(); if (!c) return; const on = onlineIds();
    let sub = '';
    if (c.kind === 'class') { const n = people.length; sub = `${n} ${n === 1 ? 'person' : 'people'} · ${[...on].length} online`; }
    else if (c.kind === 'group') { const n = c.g.members.length, o = c.g.members.filter(m => on.has(m.user_id)).length; sub = `${n} ${n === 1 ? 'member' : 'members'}${o ? ` · ${o} online` : ''}`; }
    else sub = on.has(c.p.id) ? 'online' : c.p.role === 'teacher' ? 'Teacher · private chat' : 'Private chat';
    const ty = typers(cur); if (ty.length) sub = `<em class="ch-typing-tx">${esc(c.kind === 'dm' ? 'typing…' : ty.slice(0, 2).join(', ') + (ty.length > 2 ? '…' : '') + ' typing…')}</em>`;
    h.innerHTML = `<button type="button" class="ch-ghost ch-back" data-back aria-label="All chats">${ic('back')}</button>
      <button type="button" class="ch-who" data-info="about">${tile(c, on, 'ch-tile-sm')}<span><b>${esc(c.name)}</b><small>${sub}</small></span></button>
      <div class="ch-head-acts"><button type="button" class="ch-ghost${find !== null ? ' on' : ''}" data-find title="Search in this chat" aria-label="Search in this chat">${ic('search')}</button>
      <button type="button" class="ch-ghost${info ? ' on' : ''}" data-info="${info ? '' : 'about'}" title="Details, words and polls" aria-label="Details">${ic('info')}</button></div>`;
  }
  function paintFind() {
    const f = $('.ch-find'); if (!f) return; f.hidden = find === null; if (find === null) { f.innerHTML = ''; return; }
    const n = find ? inConv(cur).filter(m => (m.body + ' ' + JSON.stringify(m.data || '')).toLowerCase().includes(find.toLowerCase())).length : 0;
    if (!f.querySelector('input')) f.innerHTML = `${ic('search')}<input id="ch-find" type="search" placeholder="Search in this chat" autocomplete="off" aria-label="Search in this chat"><span class="ch-find-n"></span><button type="button" class="ch-ghost" data-find aria-label="Close search">${ic('x')}</button>`;
    f.querySelector('.ch-find-n').textContent = find ? `${n} found` : '';
  }
  function pinsHTML() {
    const pins = inConv(cur).filter(m => m.pinned_at).sort((a, b) => Date.parse(b.pinned_at) - Date.parse(a.pinned_at));
    if (!pins.length) return '';
    const m = pins[0];
    return `<button type="button" class="ch-pinbar" data-goto="${m.id}">${ic('pin')}<span><b>Pinned${pins.length > 1 ? ` · ${pins.length}` : ''}</b><small>${esc(preview(m).slice(0, 110))}</small></span></button>`;
  }
  let firstUnreadAt = 0;
  function paintMessages(mode) {
    const ol = $('.ch-msgs'), wall = $('.ch-wall'); if (!ol || !wall) return;
    const p = $('.ch-pins'); if (p) p.innerHTML = pinsHTML();
    const nearBottom = wall.scrollHeight - wall.scrollTop - wall.clientHeight < 140, oldTop = wall.scrollTop;
    if (mode === 'first') { const k = cur, t = k === 'class' ? lastSeenClass : k.startsWith('g:') ? Date.parse(groupRead(group(k.slice(2))) || 0) : 0; firstUnreadAt = unreadIn(k) ? t : 0; }
    let list = inConv(cur); const c = convInfo();
    if (find) { const s = find.toLowerCase(); list = list.filter(m => (m.body + ' ' + JSON.stringify(m.data || '')).toLowerCase().includes(s)); }
    let html = '', lastDay = '', prev = null, unreadMark = false;
    for (const m of list) {
      const day = new Date(m.created_at).toDateString();
      if (day !== lastDay) { html += `<li class="ch-day"><span>${esc(dayLabel(m.created_at))}</span></li>`; lastDay = day; prev = null; }
      if (firstUnreadAt && !unreadMark && m.sender_id !== me() && Date.parse(m.created_at) > firstUnreadAt) { html += `<li class="ch-new"><span>New messages</span></li>`; unreadMark = true; prev = null; }
      const cont = prev && prev.sender_id === m.sender_id && Date.parse(m.created_at) - Date.parse(prev.created_at) < 5 * 60e3 && m.kind === 'text' && prev.kind === 'text';
      html += msgHTML(m, c, cont); prev = m;
    }
    ol.innerHTML = html || emptyConvHTML(c);
    if (mode === 'first' || mode === 'bottom' || (mode === 'auto' && nearBottom)) { const nm = ol.querySelector('.ch-new'); wall.scrollTop = mode === 'first' && nm ? nm.offsetTop - 80 : wall.scrollHeight; }
    else wall.scrollTop = oldTop;
    if (mode === 'auto' && !nearBottom) showJump(true);
    onWallScroll();
  }
  function paintConvSoft() { if (mounted) { paintMessages('keep'); if (info) paintInfo(); } }
  function emptyConvHTML(c) {
    if (find) return `<li class="ch-empty"><p>No messages match “${esc(find)}”.</p></li>`;
    const art = `<svg viewBox="0 0 160 110" class="ch-empty-art" aria-hidden="true"><defs><linearGradient id="ce-w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f4f1ea"/></linearGradient><linearGradient id="ce-t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e6f6ef"/><stop offset="1" stop-color="#cdeadd"/></linearGradient><filter id="ce-sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#14293a" flood-opacity=".13"/></filter></defs><circle cx="80" cy="56" r="46" fill="#eef4f1" opacity=".8"/><ellipse cx="80" cy="104" rx="52" ry="4" fill="#14293a" opacity=".06"/><g filter="url(#ce-sh)"><path d="M26 18h66a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12H40l-16 14 3-14h-1a12 12 0 0 1-12-12V30a12 12 0 0 1 12-12z" fill="url(#ce-w)"/><path d="M26 18h66a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12H40l-16 14 3-14h-1a12 12 0 0 1-12-12V30a12 12 0 0 1 12-12z" fill="none" stroke="#14293a" stroke-opacity=".1"/></g><rect x="26" y="34" width="52" height="7" rx="3.5" fill="#2a8a7d" opacity=".55"/><rect x="26" y="48" width="34" height="7" rx="3.5" fill="#e9a23b" opacity=".65"/><g filter="url(#ce-sh)"><path d="M78 44h58a12 12 0 0 1 12 12v24a12 12 0 0 1-12 12h-2l10 12-24-12H78a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12z" fill="url(#ce-t)"/></g><rect x="80" y="58" width="50" height="7" rx="3.5" fill="#2a8a7d" opacity=".7"/><rect x="80" y="71" width="28" height="7" rx="3.5" fill="#4a6fd0" opacity=".5"/><circle cx="118" cy="75" r="2.2" fill="#2a8a7d" opacity=".5"/><circle cx="125" cy="75" r="2.2" fill="#2a8a7d" opacity=".35"/><circle cx="132" cy="75" r="2.2" fill="#2a8a7d" opacity=".2"/><g filter="url(#ce-sh)"><circle cx="134" cy="22" r="11" fill="#f6dfae"/><circle cx="134" cy="22" r="11" fill="none" stroke="#fff" stroke-width="2"/></g><path d="m129 22 3.5 3.5 6.5-7" stroke="#93600f" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(14 76)"><circle r="8" fill="#fff" stroke="#14293a" stroke-opacity=".12"/><circle cy="-2" r="2.6" fill="#e0674b"/><path d="M-4.5 5.5c1-3.5 2.5-4.5 4.5-4.5s3.5 1 4.5 4.5" fill="#e0674b"/></g><path d="M150 50l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" fill="#e9a23b"/></svg>`;
    const hint = c.kind === 'class' ? 'Say hello to your class, ask a question, or start a poll.' : c.kind === 'group' ? 'Your study group is ready. Share a word, split the tasks, or ask for help.' : `Send ${esc(first(c.name))} a private message.`;
    if (c.watch) return `<li class="ch-empty">${art}<p><b>${esc(c.name)}</b>No messages in this study group yet.</p></li>`;
    return `<li class="ch-empty">${art}<p><b>${esc(c.name)}</b>${hint}</p><div class="ch-empty-acts"><button type="button" data-tool="poll">${ic('poll')} Start a poll</button><button type="button" data-tool="word">${ic('word')} Share a word</button><button type="button" data-tool="question">${ic('help')} Ask for help</button></div></li>`;
  }
  function seenBy(m) {
    if (m.recipient_id) return !!m.read_at;
    if (m.group_id) { const g = group(m.group_id); const others = (g?.members || []).filter(x => x.user_id !== me()); return others.length > 0 && others.every(x => Date.parse(x.last_read_at) >= Date.parse(m.created_at)); }
    return false;
  }
  function msgHTML(m, c, cont) {
    const mine = m.sender_id === me(), showWho = !mine && c.kind !== 'dm', teacher = m.sender_role === 'teacher', p = person(m.sender_id);
    const rs = reacts.get(m.id) || [], counts = new Map(); rs.forEach(r => counts.set(r.emoji, (counts.get(r.emoji) || 0) + 1));
    const big = m.kind === 'text' && !m.reply_to && isEmojiOnly(m.body);
    const reply = m.reply_to ? msgs.find(x => x.id === m.reply_to) : null;
    const ticks = mine ? `<span class="ch-tick${seenBy(m) ? ' seen' : ''}" title="${seenBy(m) ? 'Seen' : 'Sent'}">${ic('check')}${m.recipient_id || m.group_id ? ic('check', 'ch-t2') : ''}</span>` : '';
    return `<li class="ch-msg${mine ? ' mine' : ''}${cont ? ' cont' : ''}${teacher ? ' by-teacher' : ''}${big ? ' big' : ''} k-${esc(m.kind || 'text')}${m.pinned_at ? ' is-pinned' : ''}" data-mid="${m.id}" id="m-${m.id}">
      ${showWho ? `<span class="ch-mava">${cont ? '' : ava(p)}</span>` : ''}
      <div class="ch-stack">
        <div class="ch-bub">
          ${showWho && !cont ? `<b class="ch-name" style="--nc:${hue(m.sender_id)}">${esc(m.sender_name)}${teacher ? ' <em>Teacher</em>' : ''}</b>` : ''}
          ${reply ? `<button type="button" class="ch-quote" data-goto="${reply.id}" style="--nc:${hue(reply.sender_id)}"><b>${esc(reply.sender_id === me() ? 'You' : reply.sender_name)}</b><span>${esc(preview(reply).slice(0, 120))}</span></button>` : m.reply_to ? `<span class="ch-quote gone">Original message deleted</span>` : ''}
          ${bodyHTML(m)}
          <span class="ch-meta">${m.pinned_at ? ic('pin', 'ch-pinned-i') : ''}${esc(time(m.created_at))}${ticks}</span>
        </div>
        ${counts.size ? `<div class="ch-reacts">${[...counts].map(([e, n]) => `<button type="button" class="${rs.some(r => r.emoji === e && r.user_id === me()) ? 'mine' : ''}" data-react="${m.id}" data-emoji="${e}" title="${esc(rs.filter(r => r.emoji === e).map(r => r.user_id === me() ? 'You' : first(person(r.user_id).full_name)).join(', '))}">${e}<b>${n}</b></button>`).join('')}</div>` : ''}
        <div class="ch-acts" role="group" aria-label="Message actions">
          <button type="button" data-pick="${m.id}" title="React" aria-label="React">${ic('react')}</button>
          <button type="button" data-reply="${m.id}" title="Reply" aria-label="Reply">${ic('reply')}</button>
          <button type="button" data-more="${m.id}" title="More" aria-label="More">${ic('more')}</button>
        </div>
      </div></li>`;
  }
  function bodyHTML(m) {
    const d = m.data || {};
    if (m.kind === 'poll') {
      const opts = (Array.isArray(d.options) ? d.options : []).slice(0, 6), v = votes.get(m.id) || new Map(), total = v.size, mineV = v.get(me());
      return `<div class="ch-card ch-poll"><span class="ch-k">${ic('poll')} Poll${d.multi ? '' : ''}</span><p class="ch-cq">${rich(m.body, find)}</p>
        <ol>${opts.map((o, i) => { const voters = [...v].filter(([, c]) => c === i).map(([u]) => u), n = voters.length, pc = total ? Math.round(n / total * 100) : 0;
          return `<li><button type="button" class="ch-opt${mineV === i ? ' picked' : ''}" data-vote="${m.id}" data-choice="${i}" aria-pressed="${mineV === i}" style="--w:${pc}%"><span class="ch-obar" aria-hidden="true"></span><span class="ch-oradio" aria-hidden="true">${ic('check')}</span><span class="ch-otx">${esc(o)}</span><span class="ch-ofaces">${voters.slice(0, 3).map(u => ava(person(u), 'avatar ch-av-xs')).join('')}</span><b>${total ? pc + '%' : ''}</b></button></li>`; }).join('')}</ol>
        <small class="ch-cfoot">${total} ${total === 1 ? 'vote' : 'votes'} · ${mineV === undefined ? 'tap an answer to vote' : 'tap again to take your vote back'}</small></div>`;
    }
    if (m.kind === 'word') {
      return `<div class="ch-card ch-word"><span class="ch-k">${ic('word')} Word of the moment</span>
        <p class="ch-w">${esc(m.body)}${d.pos ? ` <i>${esc(d.pos)}</i>` : ''}</p>
        ${d.meaning ? `<p class="ch-wm">${rich(d.meaning, find)}</p>` : ''}${d.example ? `<blockquote>${rich(d.example, find)}</blockquote>` : ''}
        <button type="button" class="ch-save${saved(m.body) ? ' on' : ''}" data-save="${m.id}">${ic(saved(m.body) ? 'check' : 'star')} ${saved(m.body) ? 'In My words' : 'Add to My words'}</button></div>`;
    }
    if (m.kind === 'question') {
      const answers = msgs.filter(x => x.reply_to === m.id).length, asker = m.sender_id === me();
      return `<div class="ch-card ch-q${m.solved_at ? ' solved' : ''}"><span class="ch-k">${ic(m.solved_at ? 'check' : 'help')} ${m.solved_at ? 'Solved' : 'Help needed'}${d.topic ? ` · ${esc(d.topic)}` : ''}</span>
        <p class="ch-cq">${rich(m.body, find)}</p>
        <div class="ch-qacts"><button type="button" data-reply="${m.id}">${ic('reply')} ${asker ? 'Add more' : 'Answer'}</button><span>${answers} ${answers === 1 ? 'answer' : 'answers'}</span>
        ${asker || isTeacher() ? `<button type="button" class="ch-solve" data-solve="${m.id}" data-on="${m.solved_at ? '' : '1'}">${m.solved_at ? 'Reopen' : ic('check') + ' Mark solved'}</button>` : ''}</div></div>`;
    }
    if (m.kind === 'link') {
      const href = /^#\/[\w\-/:]{0,120}$/.test(d.href || '') ? d.href : '#/';
      return `<a class="ch-card ch-link" href="${esc(href)}"><span class="ch-lico" aria-hidden="true">${ic('link')}</span><span><span class="ch-k">Lesson page</span><b>${esc(d.title || 'A page in DEC15')}</b>${d.note ? `<small>${esc(d.note)}</small>` : ''}</span><span class="ch-lgo" aria-hidden="true">Open ›</span></a>${m.body && m.body !== d.title ? `<p class="ch-tx">${rich(m.body, find)}</p>` : ''}`;
    }
    return `<p class="ch-tx">${rich(m.body, find)}</p>`;
  }
  function paintTyping() {
    const el = $('.ch-typing'); if (!el) return; const ty = typers(cur);
    el.innerHTML = ty.length ? `<span class="ch-dots" aria-hidden="true"><i></i><i></i><i></i></span><small>${esc(convInfo()?.kind === 'dm' ? first(convInfo().name) : ty.slice(0, 2).join(', '))} ${ty.length > 1 ? 'are' : 'is'} typing</small>` : '';
    paintHead();
  }
  function onWallScroll() {
    const w = $('.ch-wall'); if (!w) return;
    if (w.scrollHeight - w.scrollTop - w.clientHeight < 80) showJump(false);
  }
  function showJump(on) { const j = $('.ch-jump'); if (!j) return; j.hidden = !on; j.querySelector('i').textContent = on && unreadIn(cur) ? unreadIn(cur) : ''; }

  /* composer */
  function composeHTML(c) {
    return `<form class="ch-compose" autocomplete="off">
      <div class="ch-replybar" hidden></div>
      <div class="ch-sheet" hidden></div>
      <div class="ch-cbar">
        <button type="button" class="ch-plus" data-sheet="tools" aria-expanded="false" title="Learning tools" aria-label="Learning tools: poll, word card, ask for help, share a page, phrases">${ic('plus')}</button>
        <div class="ch-field"><label class="sr-only" for="ch-input">Message</label><textarea id="ch-input" class="ch-input" rows="1" maxlength="2000" placeholder="${c.kind === 'class' ? 'Message the class' : c.kind === 'group' ? `Message ${esc(c.name)}` : `Message ${esc(first(c.name))}`}"></textarea>
          <button type="button" class="ch-ghost" data-sheet="emoji" title="Emoji" aria-label="Emoji">${ic('smile')}</button><button type="button" class="ch-ghost" data-sheet="phrases" title="Useful phrases" aria-label="Useful phrases">${ic('phrase')}</button></div>
        <button type="submit" class="ch-send" aria-label="Send">${ic('send')}</button>
      </div></form>`;
  }
  function saveDraft() { const ta = $('.ch-input'); if (ta) drafts[cur] = ta.value; }
  function grow(ta) { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 160) + 'px'; $('.ch-compose')?.classList.toggle('has-text', !!ta.value.trim()); }
  function paintReply() {
    const bar = $('.ch-replybar'); if (!bar) return; const m = replyTo && msgs.find(x => x.id === replyTo);
    bar.hidden = !m; bar.innerHTML = m ? `<span style="--nc:${hue(m.sender_id)}"><b>${m.kind === 'question' ? 'Answering' : 'Replying to'} ${esc(m.sender_id === me() ? 'yourself' : m.sender_name)}</b><small>${esc(preview(m).slice(0, 120))}</small></span><button type="button" class="ch-ghost" data-noreply aria-label="Cancel reply">${ic('x')}</button>` : '';
  }
  function openSheet(name) {
    sheet = sheet === name ? null : name;
    const el = $('.ch-sheet'); if (!el) return;
    el.hidden = !sheet; el.dataset.sheet = sheet || ''; el.innerHTML = sheet ? sheetHTML(sheet) : '';
    $('.ch-plus')?.setAttribute('aria-expanded', String(sheet === 'tools' || ['poll', 'word', 'question', 'link'].includes(sheet)));
    $('.ch-plus')?.classList.toggle('on', !!sheet && sheet !== 'emoji' && sheet !== 'phrases');
    el.querySelector('input:not([type=hidden]), textarea')?.focus();
  }
  function sheetHTML(s) {
    const close = `<button type="button" class="ch-ghost ch-sx" data-sheet="${s}" aria-label="Close">${ic('x')}</button>`;
    if (s === 'tools') return `<div class="ch-tools">${[
      ['poll', 'Poll', 'Ask the group to vote', 'blue'], ['word', 'Word card', 'Teach a useful word', 'plum'], ['question', 'Ask for help', 'Get an answer from classmates', 'saffron'],
      ['link', 'Share a page', lastPage ? esc(lastPage.label || 'Your last lesson page') : 'Open a lesson page first', 'teal'], ['phrases', 'Useful phrases', 'Polite academic English', 'coral'],
    ].map(([k, l, d, t]) => `<button type="button" class="ch-tool t-${t}" data-tool="${k}"${k === 'link' && !lastPage ? ' disabled' : ''}><span>${ic(k === 'phrases' ? 'phrase' : k === 'question' ? 'help' : k)}</span><b>${l}</b><small>${d}</small></button>`).join('')}</div>`;
    if (s === 'emoji') return `<div class="ch-emojis">${EMOJIS.map(e => `<button type="button" data-emoji-put="${e}">${e}</button>`).join('')}</div>`;
    if (s === 'phrases') return `${close}<div class="ch-phr"><p class="ch-sh">${ic('phrase')} Useful phrases <small>Tap one to add it to your message.</small></p>${PHRASES.map(([h, l]) => `<div><b>${esc(h)}</b>${l.map(x => `<button type="button" data-phrase="${esc(x)}">${esc(x)}</button>`).join('')}</div>`).join('')}</div>`;
    if (s === 'poll') return `${close}<div class="ch-form" data-form="poll"><p class="ch-sh t-blue">${ic('poll')} New poll</p>
      <input name="q" maxlength="200" placeholder="Your question, e.g. Which source was the most convincing?" required>
      <div class="ch-opts">${[0, 1, 2].map(i => `<input name="o" maxlength="80" placeholder="Answer ${i + 1}">`).join('')}</div>
      <div class="ch-frow"><button type="button" class="text-link" data-add-opt>+ Add an answer</button><button type="button" class="btn btn-sm" data-send-form="poll">Send poll</button></div></div>`;
    if (s === 'word') return `${close}<div class="ch-form" data-form="word"><p class="ch-sh t-plum">${ic('word')} Word card</p>
      <div class="ch-frow2"><input name="w" maxlength="60" placeholder="Word or phrase, e.g. trade-off" required><select name="pos" aria-label="Type of word">${POS.map(p => `<option value="${p}">${p || 'type…'}</option>`).join('')}</select></div>
      <input name="m" maxlength="200" placeholder="Meaning in simple English">
      <input name="e" maxlength="240" placeholder="Example sentence">
      <div class="ch-frow"><small>Classmates can add it to <b>My words</b> and practise it.</small><button type="button" class="btn btn-sm" data-send-form="word">Share the word</button></div></div>`;
    if (s === 'question') return `${close}<div class="ch-form" data-form="question"><p class="ch-sh t-saffron">${ic('help')} Ask for help</p>
      <div class="ch-topics" role="radiogroup" aria-label="Topic">${TOPICS.map((t, i) => `<label><input type="radio" name="t" value="${t}"${i === 0 ? ' checked' : ''}><span>${t}</span></label>`).join('')}</div>
      <textarea name="b" rows="2" maxlength="600" placeholder="What are you stuck on? e.g. What does “mitigate” mean in paragraph 3?" required></textarea>
      <div class="ch-frow"><small>Classmates answer with a reply. Mark it solved when you understand.</small><button type="button" class="btn btn-sm" data-send-form="question">Ask</button></div></div>`;
    if (s === 'link') return `${close}<div class="ch-form" data-form="link"><p class="ch-sh t-teal">${ic('link')} Share a lesson page</p>
      <div class="ch-lprev">${ic('link')}<span><b>${esc(lastPage?.label || '')}</b><small>The last page you opened</small></span></div>
      <input name="n" maxlength="160" placeholder="Add a note, e.g. Let’s do activity 3 together">
      <div class="ch-frow"><span></span><button type="button" class="btn btn-sm" data-send-form="link">Share</button></div></div>`;
    return '';
  }
  async function sendForm(kind) {
    const f = $(`[data-form="${kind}"]`); if (!f) return; const v = n => (f.querySelector(`[name="${n}"]`)?.value || '').trim();
    let row = null;
    if (kind === 'poll') { const opts = [...f.querySelectorAll('[name="o"]')].map(i => i.value.trim()).filter(Boolean).slice(0, 6); if (!v('q')) return f.querySelector('[name=q]').focus(); if (opts.length < 2) { toast('Add at least two answers.'); return; } row = { kind: 'poll', body: v('q'), data: { options: opts } }; }
    if (kind === 'word') { if (!v('w')) return f.querySelector('[name=w]').focus(); row = { kind: 'word', body: v('w'), data: { pos: v('pos'), meaning: v('m'), example: v('e') } }; }
    if (kind === 'question') { if (!v('b')) return f.querySelector('[name=b]').focus(); row = { kind: 'question', body: v('b'), data: { topic: f.querySelector('[name=t]:checked')?.value || '' } }; }
    if (kind === 'link') { if (!lastPage) return; row = { kind: 'link', body: v('n') || lastPage.label, data: { href: lastPage.hash, title: lastPage.label, note: v('n') } }; }
    if (!row) return;
    f.querySelectorAll('button').forEach(b => { b.disabled = true; });
    const ok = await send(row);
    if (ok) { sheet = null; openSheet(null); } else f.querySelectorAll('button').forEach(b => { b.disabled = false; });
  }

  /* reaction picker and the "more" menu float next to the bubble */
  function floatMenu(anchor, html) {
    closeFloat();
    const el = document.createElement('div'); el.className = 'ch-float'; el.innerHTML = html; root.querySelector('.ch-main').append(el);
    const r = anchor.getBoundingClientRect(), host = root.querySelector('.ch-main').getBoundingClientRect();
    const w = el.offsetWidth, h = el.offsetHeight;
    el.style.left = Math.max(8, Math.min(host.width - w - 8, r.left - host.left + r.width / 2 - w / 2)) + 'px';
    el.style.top = Math.max(8, r.top - host.top - h - 8) + 'px';
    el.querySelector('button')?.focus();
  }
  function closeFloat() { root?.querySelector('.ch-float')?.remove(); }
  function moreHTML(m) {
    return `<div class="ch-menu">${m.kind === 'question' && (m.sender_id === me() || isTeacher()) ? `<button type="button" data-solve="${m.id}" data-on="${m.solved_at ? '' : '1'}">${ic('check')} ${m.solved_at ? 'Reopen the question' : 'Mark as solved'}</button>` : ''}
      ${canPin(m) ? `<button type="button" data-pin="${m.id}" data-on="${m.pinned_at ? '' : '1'}">${ic('pin')} ${m.pinned_at ? 'Unpin' : 'Pin to the top'}</button>` : ''}
      <button type="button" data-copy="${m.id}">${ic('copy')} Copy text</button>
      ${m.kind === 'word' ? `<button type="button" data-save="${m.id}">${ic('star')} ${saved(m.body) ? 'Remove from My words' : 'Add to My words'}</button>` : ''}
      ${canDelete(m) ? `<button type="button" class="danger" data-del="${m.id}">${ic('trash')} Delete${m.sender_id !== me() ? ' (teacher)' : ''}</button>` : ''}</div>`;
  }
  function flash(id) { const el = root?.querySelector('#m-' + CSS.escape(id)); if (!el) { toast('That message is older than this chat shows.'); return; } el.scrollIntoView({ block: 'center', behavior: 'smooth' }); el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
  function celebrate() {
    const host = root?.querySelector('.ch-main'); if (!host || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = document.createElement('div'); box.className = 'ch-confetti'; box.setAttribute('aria-hidden', 'true');
    box.innerHTML = Array.from({ length: 28 }, (_, i) => `<i style="--x:${(Math.random() * 100).toFixed(1)}%;--d:${(Math.random() * .6).toFixed(2)}s;--r:${Math.round(Math.random() * 360)}deg;--c:${['#e9a23b', '#2a8a7d', '#e0674b', '#4a6fd0', '#8a5cb8'][i % 5]}"></i>`).join('');
    host.append(box); setTimeout(() => box.remove(), 1800);
  }

  /* right: details drawer */
  function paintInfo() {
    const el = $('.ch-info'), app = $('.ch-app'); if (!el || !app) return;
    el.hidden = !info; app.classList.toggle('info-open', !!info); if (!info) { el.innerHTML = ''; return; }
    const c = convInfo(); if (!c) return; const on = onlineIds(), list = inConv(cur);
    const words = list.filter(m => m.kind === 'word'), polls = list.filter(m => m.kind === 'poll'), qs = list.filter(m => m.kind === 'question'), pins = list.filter(m => m.pinned_at);
    const members = c.kind === 'class' ? people.map(p => p.id) : c.kind === 'group' ? c.g.members.map(m => m.user_id) : [me(), c.p.id];
    const n = x => x ? ` <i>${x}</i>` : '', tabs = [['about', c.kind === 'dm' ? 'Person' : 'People'], ['words', 'Words' + n(words.length)], ['polls', 'Polls' + n(polls.length + qs.length)], ['pins', 'Pins' + n(pins.length)]];
    let body = '';
    if (infoTab === 'about') {
      body = `<div class="ch-ihero">${tile(c, on, 'ch-tile-lg')}<b>${esc(c.name)}</b><small>${c.kind === 'class' ? 'Everyone in DEC15' : c.kind === 'group' ? esc(c.g.about || 'Study group') : c.p.role === 'teacher' ? 'Your teacher' : 'Classmate'}</small>
        ${c.kind === 'group' ? `<div class="ch-iacts">${c.g.created_by === me() || isTeacher() ? `<button type="button" data-edit-group>${ic('edit')} Edit</button>` : ''}${isMember(c.g) ? `<button type="button" data-add-people>${ic('group')} Add people</button><button type="button" data-leave>${ic('door')} Leave</button>` : ''}${c.g.created_by === me() || isTeacher() ? `<button type="button" class="danger" data-del-group>${ic('trash')} Delete</button>` : ''}</div>` : ''}</div>
        <h3 class="ch-ih">${c.kind === 'dm' ? 'In this chat' : `${members.length} ${members.length === 1 ? 'member' : 'members'}`}</h3>
        <ul class="ch-people">${members.map(id => person(id)).sort((a, b) => (on.has(b.id) - on.has(a.id)) || (b.role === 'teacher') - (a.role === 'teacher')).map(p => `<li><span class="ch-pava">${ava(p)}${on.has(p.id) ? '<i class="ch-on"></i>' : ''}</span><span><b>${esc(p.id === me() ? 'You' : p.full_name)}</b><small>${p.role === 'teacher' ? 'Teacher' : on.has(p.id) ? 'online' : 'Student'}${c.kind === 'group' && c.g.created_by === p.id ? ' · created the group' : ''}</small></span>${p.id !== me() ? `<button type="button" class="ch-ghost" data-dm="${p.id}" title="Private chat" aria-label="Private chat with ${esc(p.full_name)}">${ic('chat')}</button>` : ''}${c.kind === 'group' && p.id !== me() && (c.g.created_by === me() || isTeacher()) ? `<button type="button" class="ch-ghost" data-kick="${p.id}" title="Remove from the group" aria-label="Remove ${esc(p.full_name)}">${ic('x')}</button>` : ''}</li>`).join('')}</ul>`;
    }
    if (infoTab === 'words') {
      const mine = myWords();
      body = `<div class="ch-ibar"><button type="button" class="btn btn-sm" data-practise="chat"${words.length ? '' : ' disabled'}>${ic('flip')} Practise these ${words.length || ''} words</button></div>
        ${words.length ? `<ul class="ch-wlist">${words.slice().reverse().map(m => `<li><button type="button" data-goto="${m.id}"><b>${esc(m.body)}</b>${m.data?.pos ? ` <i>${esc(m.data.pos)}</i>` : ''}<small>${esc(m.data?.meaning || '')}</small></button><button type="button" class="ch-ghost${saved(m.body) ? ' on' : ''}" data-save="${m.id}" aria-label="${saved(m.body) ? 'In My words' : 'Add to My words'}">${ic(saved(m.body) ? 'check' : 'star')}</button></li>`).join('')}</ul>` : `<p class="ch-inone">No word cards in this chat yet. Press <b>+</b> and choose <b>Word card</b> to teach your classmates a useful word.</p>`}
        <h3 class="ch-ih">My words <span>${mine.length}</span></h3>
        ${mine.length ? `<div class="ch-ibar"><button type="button" class="btn-quiet btn-sm" data-practise="mine">${ic('flip')} Practise My words</button></div><ul class="ch-wlist mine">${mine.slice(0, 40).map(w => `<li><span><b>${esc(w.word)}</b><small>${esc(w.meaning)}</small></span></li>`).join('')}</ul>` : '<p class="ch-inone">Words you save are kept on this device.</p>'}`;
    }
    if (infoTab === 'polls') {
      const open = qs.filter(m => !m.solved_at);
      body = `<h3 class="ch-ih">Open questions <span>${open.length}</span></h3>${open.length ? `<ul class="ch-ilist">${open.slice().reverse().map(m => `<li><button type="button" data-goto="${m.id}"><span class="ch-dot t-saffron"></span><span><b>${esc(m.body.slice(0, 90))}</b><small>${esc(first(m.sender_name))} · ${esc(m.data?.topic || 'Question')} · ${msgs.filter(x => x.reply_to === m.id).length} answers</small></span></button></li>`).join('')}</ul>` : '<p class="ch-inone">No open questions. 🎉</p>'}
        <h3 class="ch-ih">Polls <span>${polls.length}</span></h3>${polls.length ? `<ul class="ch-ilist">${polls.slice().reverse().map(m => { const n = votes.get(m.id)?.size || 0; return `<li><button type="button" data-goto="${m.id}"><span class="ch-dot t-blue"></span><span><b>${esc(m.body.slice(0, 90))}</b><small>${n} ${n === 1 ? 'vote' : 'votes'}${votes.get(m.id)?.has(me()) ? ' · you voted' : ' · you have not voted'}</small></span></button></li>`; }).join('')}</ul>` : '<p class="ch-inone">No polls yet.</p>'}
        ${qs.length - open.length ? `<h3 class="ch-ih">Solved <span>${qs.length - open.length}</span></h3><ul class="ch-ilist">${qs.filter(m => m.solved_at).reverse().map(m => `<li><button type="button" data-goto="${m.id}"><span class="ch-dot t-sage"></span><span><b>${esc(m.body.slice(0, 90))}</b><small>${esc(first(m.sender_name))}</small></span></button></li>`).join('')}</ul>` : ''}`;
    }
    if (infoTab === 'pins') body = pins.length ? `<ul class="ch-ilist">${pins.map(m => `<li><button type="button" data-goto="${m.id}"><span class="ch-dot t-coral"></span><span><b>${esc(preview(m).slice(0, 110))}</b><small>${esc(m.sender_name)} · ${esc(shortWhen(m.created_at))}</small></span></button></li>`).join('')}</ul>` : `<p class="ch-inone">Nothing pinned. ${c.kind === 'class' ? 'Your teacher can pin important messages here.' : c.kind === 'group' ? 'The group creator can pin messages.' : 'Either of you can pin a message.'}</p>`;
    el.innerHTML = `<header class="ch-ihead"><b>Details</b><button type="button" class="ch-ghost" data-info="" aria-label="Close details">${ic('x')}</button></header>
      <nav class="ch-itabs" role="tablist">${tabs.map(([k, l]) => `<button type="button" role="tab" aria-selected="${infoTab === k}" data-itab="${k}">${l}</button>`).join('')}</nav><div class="ch-ibody">${body}</div>`;
  }

  /* modals: new group / edit group / add people / new private chat / practise words */
  function modal(html, cls = '') {
    closeModal();
    const el = document.createElement('div'); el.className = 'ch-scrim'; el.innerHTML = `<div class="ch-modal ${cls}" role="dialog" aria-modal="true">${html}</div>`;
    document.body.append(el); requestAnimationFrame(() => el.classList.add('in'));
    el.addEventListener('click', e => { if (e.target === el || e.target.closest('[data-mclose]')) closeModal(); });
    el.addEventListener('keydown', e => { if (e.key === 'Escape') { e.stopPropagation(); closeModal(); } });
    setTimeout(() => el.querySelector('input:not([type=checkbox]):not([type=radio]), button')?.focus(), 30);
    return el;
  }
  function closeModal() { document.querySelector('.ch-scrim')?.remove(); }
  const pickList = (exclude = []) => `<label class="ch-search ch-msearch">${ic('search')}<input type="search" placeholder="Find a classmate" data-pick-q aria-label="Find a classmate"></label>
    <ul class="ch-pick">${people.filter(p => p.id !== me() && !exclude.includes(p.id)).map(p => `<li data-name="${esc(p.full_name.toLowerCase())}"><label><input type="checkbox" value="${p.id}"><span class="ch-pava">${ava(p)}${onlineIds().has(p.id) ? '<i class="ch-on"></i>' : ''}</span><span><b>${esc(p.full_name)}</b><small>${p.role === 'teacher' ? 'Teacher' : 'Student'}</small></span><i class="ch-chk">${ic('check')}</i></label></li>`).join('') || '<li class="ch-inone">Everyone is already here.</li>'}</ul>`;
  function groupModal(g) {
    const el = modal(`<header class="ch-mhead"><div class="ch-mprev">${`<span class="ch-tile ch-tile-lg t-${esc(g?.color || 'teal')}" data-prev>${esc(g?.emoji || '📚')}</span>`}</div><div><h2>${g ? 'Edit the group' : 'New study group'}</h2><p>${g ? 'Change the name, picture or colour.' : 'Learn together: share notes, split tasks, practise words.'}</p></div><button type="button" class="ch-ghost" data-mclose aria-label="Close">${ic('x')}</button></header>
      <div class="ch-mbody"><label class="ch-fl">Group name<input name="name" maxlength="60" value="${esc(g?.name || '')}" placeholder="e.g. Writing buddies, Week 5 reading team" required></label>
      <div class="ch-fl">Picture<div class="ch-emo-pick">${GROUP_EMOJI.map(e => `<label><input type="radio" name="emoji" value="${e}"${(g?.emoji || '📚') === e ? ' checked' : ''}><span>${e}</span></label>`).join('')}</div></div>
      <div class="ch-fl">Colour<div class="ch-col-pick">${COLORS.map(c => `<label class="t-${c}"><input type="radio" name="color" value="${c}"${(g?.color || 'teal') === c ? ' checked' : ''}><span aria-label="${c}"></span></label>`).join('')}</div></div>
      <label class="ch-fl">What is it for? <small>(optional)</small><input name="about" maxlength="200" value="${esc(g?.about || '')}" placeholder="e.g. We practise for the integrated writing task"></label>
      ${g ? '' : `<div class="ch-fl">Add classmates <small>(you can add more later)</small>${pickList()}</div>`}</div>
      <footer class="ch-mfoot"><button type="button" class="btn-quiet" data-mclose>Cancel</button><button type="button" class="btn" data-save-group>${g ? 'Save' : 'Create the group'}</button></footer>`, 'ch-mgroup');
    const prev = () => { const t = el.querySelector('[data-prev]'); t.textContent = el.querySelector('[name=emoji]:checked')?.value || '📚'; t.className = `ch-tile ch-tile-lg t-${el.querySelector('[name=color]:checked')?.value || 'teal'}`; };
    el.addEventListener('change', prev); bindPick(el);
    el.querySelector('[data-save-group]').onclick = async e => {
      const name = el.querySelector('[name=name]').value.trim(); if (!name) { el.querySelector('[name=name]').focus(); return; }
      const row = { name, emoji: el.querySelector('[name=emoji]:checked')?.value || '📚', color: el.querySelector('[name=color]:checked')?.value || 'teal', about: el.querySelector('[name=about]').value.trim() || null };
      e.target.disabled = true; const c = db();
      if (g) { const { error } = await c.from('chat_groups').update(row).eq('id', g.id); if (error) { toast('The group was not saved.'); e.target.disabled = false; return; } Object.assign(g, row); closeModal(); paint(); return; }
      const { data, error } = await c.from('chat_groups').insert(row).select('id').single();
      if (error) { toast('The group could not be created. Check your internet.'); e.target.disabled = false; return; }
      const add = [...el.querySelectorAll('.ch-pick input:checked')].map(i => ({ group_id: data.id, user_id: i.value }));
      if (add.length) await c.from('chat_members').insert(add);
      closeModal(); await loadGroups(true); open('g:' + data.id); toast(`“${name}” is ready. Say hello!`);
    };
  }
  function bindPick(el) {
    el.querySelector('[data-pick-q]')?.addEventListener('input', e => { const s = e.target.value.toLowerCase(); el.querySelectorAll('.ch-pick li[data-name]').forEach(li => { li.hidden = !li.dataset.name.includes(s); }); });
  }
  function addPeopleModal(g) {
    const el = modal(`<header class="ch-mhead"><span class="ch-tile t-${esc(g.color)}">${esc(g.emoji)}</span><div><h2>Add people</h2><p>to ${esc(g.name)}</p></div><button type="button" class="ch-ghost" data-mclose aria-label="Close">${ic('x')}</button></header>
      <div class="ch-mbody">${pickList(g.members.map(m => m.user_id))}</div>
      <footer class="ch-mfoot"><button type="button" class="btn-quiet" data-mclose>Cancel</button><button type="button" class="btn" data-do-add>Add</button></footer>`);
    bindPick(el);
    el.querySelector('[data-do-add]').onclick = async () => {
      const add = [...el.querySelectorAll('.ch-pick input:checked')].map(i => ({ group_id: g.id, user_id: i.value })); if (!add.length) { closeModal(); return; }
      const { error } = await db().from('chat_members').insert(add); if (error) { toast('Sorry — people were not added.'); return; }
      closeModal(); await loadGroups(); toast(`${add.length} ${add.length === 1 ? 'person' : 'people'} added.`);
    };
  }
  function dmModal() {
    const on = onlineIds();
    const el = modal(`<header class="ch-mhead"><span class="ch-tile t-blue">${ic('pen')}</span><div><h2>New private chat</h2><p>Only the two of you can read it.</p></div><button type="button" class="ch-ghost" data-mclose aria-label="Close">${ic('x')}</button></header>
      <div class="ch-mbody"><label class="ch-search ch-msearch">${ic('search')}<input type="search" placeholder="Find a classmate" data-pick-q aria-label="Find a classmate"></label>
      <ul class="ch-pick ch-pick-1">${people.filter(p => p.id !== me()).sort((a, b) => on.has(b.id) - on.has(a.id)).map(p => `<li data-name="${esc(p.full_name.toLowerCase())}"><button type="button" data-dm="${p.id}"><span class="ch-pava">${ava(p)}${on.has(p.id) ? '<i class="ch-on"></i>' : ''}</span><span><b>${esc(p.full_name)}</b><small>${p.role === 'teacher' ? 'Teacher' : on.has(p.id) ? 'online' : 'Student'}</small></span></button></li>`).join('')}</ul></div>`);
    bindPick(el);
    el.addEventListener('click', e => { const b = e.target.closest('[data-dm]'); if (b) { closeModal(); open('u:' + b.dataset.dm); } });
  }
  function practise(words, title) {
    if (!words.length) return; let i = 0, flipped = false; const order = words.slice().sort(() => Math.random() - .5);
    const el = modal(`<header class="ch-mhead"><span class="ch-tile t-plum">${ic('flip')}</span><div><h2>${esc(title)}</h2><p>Say the meaning, then turn the card.</p></div><button type="button" class="ch-ghost" data-mclose aria-label="Close">${ic('x')}</button></header>
      <div class="ch-mbody"><div class="ch-deck"></div></div>`, 'ch-mpractise');
    const deck = el.querySelector('.ch-deck');
    const draw = () => { const w = order[i]; deck.innerHTML = `<button type="button" class="ch-flash${flipped ? ' flipped' : ''}" data-flip aria-label="Turn the card"><span class="ch-face front"><small>${i + 1} / ${order.length}</small><b>${esc(w.word)}</b>${w.pos ? `<i>${esc(w.pos)}</i>` : ''}<em>Tap to turn</em></span><span class="ch-face back"><small>${esc(w.word)}</small><b>${esc(w.meaning || '—')}</b>${w.example ? `<q>${esc(w.example)}</q>` : ''}</span></button>
      <div class="ch-deck-acts"><button type="button" class="btn-quiet btn-sm" data-prev-card${i ? '' : ' disabled'}>‹ Back</button><div class="ch-deck-dots">${order.map((_, j) => `<i class="${j === i ? 'on' : j < i ? 'done' : ''}"></i>`).join('')}</div><button type="button" class="btn btn-sm" data-next-card>${i === order.length - 1 ? 'Finish' : 'Next ›'}</button></div>`; };
    draw();
    el.addEventListener('click', e => {
      if (e.target.closest('[data-flip]')) { flipped = !flipped; deck.querySelector('.ch-flash').classList.toggle('flipped', flipped); }
      if (e.target.closest('[data-next-card]')) { if (i === order.length - 1) { closeModal(); toast(`Well done — you practised ${order.length} words.`); return; } i++; flipped = false; draw(); }
      if (e.target.closest('[data-prev-card]')) { i = Math.max(0, i - 1); flipped = false; draw(); }
    });
  }

  /* ───────── events ───────── */
  function open(k) {
    if (k !== cur) { saveDraft(); cur = k; replyTo = null; sheet = null; find = null; }
    mobileConv = true; if (!mounted) { location.hash = '#/chats'; return; }
    root.querySelector('.ch-app').dataset.mobile = 'conv';
    paintList(); paintMain(); paintInfo(); markRead(k);
    setTimeout(() => $('.ch-input')?.focus({ preventScroll: true }), 30);
  }
  let typedT = 0;
  function bind() {
    root.addEventListener('click', onClick);
    root.addEventListener('input', e => {
      if (e.target.id === 'ch-q') { q = e.target.value; paintList(); return; }
      if (e.target.id === 'ch-find') { find = e.target.value; paintFind(); paintMessages('keep'); return; }
      if (e.target.matches('.ch-input')) { grow(e.target); drafts[cur] = e.target.value; if (Date.now() - typedT > 2500) { typedT = Date.now(); klass()?.typing?.('chat:' + cur); } }
    });
    root.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey && e.target.matches('.ch-input')) { e.preventDefault(); e.target.form?.requestSubmit(); }
      if (e.key === 'Escape') { if (root.querySelector('.ch-float')) { closeFloat(); e.stopPropagation(); } else if (sheet) { openSheet(null); e.stopPropagation(); } else if (replyTo) { replyTo = null; paintReply(); } }
    });
    root.addEventListener('submit', async e => {
      const f = e.target.closest('.ch-compose'); if (!f) return; e.preventDefault();
      const ta = f.querySelector('.ch-input'), v = ta.value; if (!v.trim()) return;
      ta.value = ''; drafts[cur] = ''; grow(ta); if (sheet === 'emoji' || sheet === 'phrases') openSheet(null);
      const ok = await sendText(v); if (!ok) { ta.value = v; grow(ta); } ta.focus();
    });
  }
  function onClick(e) {
    const t = e.target.closest('button, a, [data-open]');
    if (!t) { if (!e.target.closest('.ch-float')) closeFloat();   // touch screens: tap a bubble to show its actions
      const li = e.target.closest('.ch-msg'); root.querySelectorAll('.ch-msg.show-acts').forEach(x => { if (x !== li) x.classList.remove('show-acts'); }); li?.classList.toggle('show-acts'); return; }
    const d = t.dataset;
    if (!t.closest('.ch-float') && !d.pick && !d.more) closeFloat();
    if (d.open) { open(d.open); return; }
    if (d.filter) { filter = d.filter; paintList(); return; }
    if (d.newGroup !== undefined) { groupModal(); return; }
    if (d.newDm !== undefined) { dmModal(); return; }
    if (d.back !== undefined) { mobileConv = false; root.querySelector('.ch-app').dataset.mobile = 'list'; return; }
    if (d.find !== undefined) { find = find === null ? '' : null; paintHead(); paintFind(); paintMessages('keep'); if (find !== null) $('#ch-find')?.focus(); return; }
    if (d.info !== undefined) { info = !!d.info; if (d.info) infoTab = d.info; paintInfo(); paintHead(); return; }
    if (d.itab) { infoTab = d.itab; paintInfo(); return; }
    if (d.sheet) { openSheet(d.sheet); return; }
    if (d.tool) { if (!$('.ch-sheet')) return; if (d.tool === 'phrases') { openSheet('phrases'); return; } sheet = null; openSheet(d.tool); return; }
    if (d.emojiPut) { insert(d.emojiPut); return; }
    if (d.phrase) { insert(d.phrase + ' '); return; }
    if (d.addOpt !== undefined) { const box = $('.ch-opts'); if (box && box.children.length < 6) { box.insertAdjacentHTML('beforeend', `<input name="o" maxlength="80" placeholder="Answer ${box.children.length + 1}">`); box.lastElementChild.focus(); } if (box?.children.length >= 6) t.hidden = true; return; }
    if (d.sendForm) { sendForm(d.sendForm); return; }
    if (d.noreply !== undefined) { replyTo = null; paintReply(); return; }
    if (d.reply) { replyTo = d.reply; paintReply(); $('.ch-input')?.focus(); return; }
    if (d.pick) { const m = msgs.find(x => x.id === d.pick); if (m) floatMenu(t, `<div class="ch-rpick">${REACTS.map(r => `<button type="button" data-react="${m.id}" data-emoji="${r}" aria-label="React ${r}">${r}</button>`).join('')}</div>`); return; }
    if (d.more) { const m = msgs.find(x => x.id === d.more); if (m) floatMenu(t, moreHTML(m)); return; }
    if (d.react) { closeFloat(); react(d.react, d.emoji); return; }
    if (d.vote) { vote(d.vote, +d.choice); return; }
    if (d.save) { closeFloat(); const m = msgs.find(x => x.id === d.save); if (m) saveWord(m); return; }
    if (d.solve) { closeFloat(); solve(d.solve, !!d.on); return; }
    if (d.pin) { closeFloat(); pin(d.pin, !!d.on); return; }
    if (d.copy) { closeFloat(); const m = msgs.find(x => x.id === d.copy); navigator.clipboard?.writeText(m ? m.body : '').then(() => toast('Copied.'), () => {}); return; }
    if (d.del) { closeFloat(); if (confirm('Delete this message for everyone?')) remove(d.del); return; }
    if (d.goto) { if (window.innerWidth < 1100 && t.closest('.ch-info')) { info = false; paintInfo(); paintHead(); } flash(d.goto); return; }
    if (d.dm) { open('u:' + d.dm); return; }
    if (d.join !== undefined) { const g = group(cur.slice(2)); db().from('chat_members').insert({ group_id: g.id, user_id: me() }).then(({ error }) => { if (error) toast('Could not join.'); else loadGroups().then(() => { paintMain(); toast('You joined the group.'); }); }); return; }
    if (d.editGroup !== undefined) { groupModal(group(cur.slice(2))); return; }
    if (d.addPeople !== undefined) { addPeopleModal(group(cur.slice(2))); return; }
    if (d.leave !== undefined) { const g = group(cur.slice(2)); if (!confirm(`Leave “${g.name}”?`)) return; db().from('chat_members').delete().match({ group_id: g.id, user_id: me() }).then(() => { cur = 'class'; info = false; loadGroups(); toast('You left the group.'); }); return; }
    if (d.kick) { const g = group(cur.slice(2)); if (!confirm(`Remove ${person(d.kick).full_name} from the group?`)) return; db().from('chat_members').delete().match({ group_id: g.id, user_id: d.kick }).then(() => loadGroups()); return; }
    if (d.delGroup !== undefined) { const g = group(cur.slice(2)); if (!confirm(`Delete “${g.name}” and all its messages for everyone?`)) return; db().from('chat_groups').delete().eq('id', g.id).then(({ error }) => { if (error) { toast('The group could not be deleted.'); return; } groups = groups.filter(x => x.id !== g.id); msgs = msgs.filter(m => m.group_id !== g.id); cur = 'class'; info = false; paint(); toast('The group was deleted.'); }); return; }
    if (d.practise) { const words = d.practise === 'mine' ? myWords() : inConv(cur).filter(m => m.kind === 'word').map(m => ({ word: m.body, pos: m.data?.pos, meaning: m.data?.meaning, example: m.data?.example })); practise(words, d.practise === 'mine' ? 'My words' : 'Words from this chat'); return; }
    if (t.classList.contains('ch-jump')) { const w = $('.ch-wall'); w.scrollTo({ top: w.scrollHeight, behavior: 'smooth' }); showJump(false); markRead(cur); return; }
  }
  function insert(text) {
    const ta = $('.ch-input'); if (!ta) return;
    const s = ta.selectionStart ?? ta.value.length, en = ta.selectionEnd ?? s;
    ta.value = ta.value.slice(0, s) + text + ta.value.slice(en); ta.focus(); ta.selectionStart = ta.selectionEnd = s + text.length; grow(ta); drafts[cur] = ta.value;
  }
  document.addEventListener('visibilitychange', () => { if (mounted && document.visibilityState === 'visible' && unreadIn(cur)) markRead(cur); });

  function signedOutHTML() {
    return `<div class="ch-out"><div class="ch-out-art" aria-hidden="true">
        <span class="b1">Has anyone finished the reading? 📖</span><span class="b2 mine">Yes! Shall we compare notes?</span><span class="b3"><i></i><i></i><i></i></span>
        <span class="b4">${ic('poll')} Which source was most convincing?<em style="--w:68%"></em><em style="--w:32%"></em></span></div>
      <h1>Chats</h1><p>Message your classmates and your teacher, make study groups, run quick polls, share useful words and help each other.</p>
      <button type="button" class="btn" data-signin>Sign in to join the chat</button><p class="ch-out-note">${ic('lock')} Only students who have signed in can see Chats.</p></div>`;
  }
  document.addEventListener('click', e => { if (e.target.closest?.('.ch-out [data-signin]')) signIn(); });

  return { connect, disconnect, mount, unmount, notePage, paintBadge, get mounted() { return mounted; }, open: k => { cur = k; mobileConv = true; location.hash = '#/chats'; if (mounted) open(k); }, unread: () => totalUnread() };
};
