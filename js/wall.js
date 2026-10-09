/* DEC15 class discussion ("class wall") — comments, questions, ideas and shared writing under each activity.
   Data lives in Supabase (tables wall_posts, wall_reactions). Only signed-in students can read or post.
   New posts arrive live (Realtime), with a slow poll as backup. The wall repaints only its own lists,
   so typing anywhere else on the page is never interrupted.
   v2.30: post types (comment / question / idea), filters and "most liked", the teacher can pin a post,
   questions can be marked answered, teacher posts carry a badge, "who is online / who finished" and "… is typing". */
window.createDEC15Wall = function ({ getCloud, lessonId, esc, toast, icon, signIn, getClass }) {
  const EMOJI = ['👍', '❤️', '👏', '💡', '🤔', '😂'];
  const EMOJI_NAME = { '👍': 'thumbs up', '❤️': 'love', '👏': 'well done', '💡': 'good idea', '🤔': 'thinking', '😂': 'funny' };
  const KINDS = { comment: 'Comment', question: 'Question', idea: 'Idea' };
  const SVG = p => `<svg class="wall-g" viewBox="0 0 16 16" aria-hidden="true">${p}</svg>`;
  const G = {
    comment: SVG('<path d="M2.5 3.5h11v7h-6l-3.5 3v-3H2.5z"/>'),
    question: SVG('<circle cx="8" cy="8" r="6.2"/><path d="M6.2 6.3c0-1 .8-1.8 1.8-1.8s1.8.7 1.8 1.7c0 1.4-1.8 1.5-1.8 2.9"/><circle cx="8" cy="11.4" r=".5" fill="currentColor"/>'),
    idea: SVG('<path d="M6 12.6h4M6.8 14.4h2.4M8 1.8a4.2 4.2 0 0 0-2.8 7.3c.4.4.7 1 .7 1.7h4.2c0-.7.3-1.3.7-1.7A4.2 4.2 0 0 0 8 1.8z"/>'),
    work: SVG('<path d="m10 2.6 3.4 3.4-7.3 7.3H2.7V9.9z"/><path d="m8.6 4 3.4 3.4"/>'),
    pin: SVG('<path d="M9.8 1.8 14.2 6.2l-2.1.7-2.6 2.6.3 3.2-1.2 1.2-2.6-2.6-3.3 3.3M6.7 11.3 4.1 8.7l1.2-1.2 3.2.3 2.6-2.6z"/>'),
    check: SVG('<circle cx="8" cy="8" r="6.2"/><path d="m5.3 8.2 1.8 1.8 3.6-3.8"/>'),
    dot: '<i class="wall-live" aria-hidden="true"></i>',
  };
  let posts = [], reactions = [], status = 'idle', channel = null, poll = null, timer = null;
  const drafts = {}, kindOf = {}, filter = {}, sortBy = {}, typingNow = {}; let replyTo = null, picker = null, menuFor = null;
  /* Busy walls show the newest posts first and fold the rest away, so the activity stays in focus. */
  const SHOW_POSTS = 3, SHOW_REPLIES = 2, expanded = new Set();

  const cloud = () => getCloud();
  const klass = () => getClass?.() || null;
  const db = () => (cloud()?.user && cloud().client) || null;
  const me = () => cloud()?.user?.id;
  const isTeacher = () => cloud()?.profile?.role === 'teacher';
  const enabled = () => !!cloud()?.enabled;

  /* ───────── data ───────── */
  async function load() {
    const c = db();
    if (!c) { posts = []; reactions = []; status = 'signed-out'; paint(); return; }
    let p, r, e1, e2;
    try { [{ data: p, error: e1 }, { data: r, error: e2 }] = await Promise.all([
      c.from('wall_posts').select('id, thread, parent_id, user_id, author_name, author_avatar, author_role, kind, label, body, pinned, answered, created_at').eq('lesson_id', lessonId).order('created_at', { ascending: true }),
      c.from('wall_reactions').select('post_id, user_id, emoji').eq('lesson_id', lessonId)
    ]); } catch (e) { e1 = e; }
    if (e1 || e2) { console.warn('wall', e1 || e2); status = 'error'; paint(); return; }
    posts = p || []; reactions = r || []; status = 'ready'; paint();
  }
  const soon = () => { clearTimeout(timer); timer = setTimeout(load, 400); };
  let offTyping = null;
  function connect() {
    disconnect();
    const c = db(); if (!c) { load(); return; }
    if (typeof c.channel === 'function') channel = c.channel('wall-' + lessonId)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'wall_posts', filter: 'lesson_id=eq.' + lessonId }, soon)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'wall_reactions', filter: 'lesson_id=eq.' + lessonId }, soon)
      .subscribe();
    poll = setInterval(() => document.visibilityState === 'visible' && load(), channel ? 45000 : 15000);
    offTyping = klass()?.onTyping?.(p => { typingNow[p.thread] = { ...(typingNow[p.thread] || {}), [p.id]: { name: p.name, at: Date.now() } }; paintTyping(p.thread); setTimeout(() => paintTyping(p.thread), 4200); }) || null;
    load();
  }
  function disconnect() { clearInterval(poll); offTyping?.(); offTyping = null; if (channel) { try { cloud().client.removeChannel(channel); } catch (e) { /* ignore */ } } channel = null; }

  async function post(thread, body, extra = {}) {
    const c = db(); if (!c) { signIn(); return false; }
    body = String(body || '').trim();
    if (!body) { toast('Write something first.'); return false; }
    const { error } = await c.from('wall_posts').insert({ lesson_id: lessonId, thread, body: body.slice(0, 6000), ...extra });
    if (error) { toast('Sorry — it could not be posted. Check your internet and try again.'); console.warn(error); return false; }
    await load(); return true;
  }
  async function remove(id) {
    const c = db(); if (!c) return;
    const { error } = await c.from('wall_posts').delete().eq('id', id);
    if (error) toast('Sorry — it could not be deleted.'); else { toast('Deleted.'); load(); }
  }
  async function mark(id, patch, msg) {
    const c = db(); if (!c) return;
    const p = posts.find(x => x.id === id); if (!p) return; const was = { ...p }; Object.assign(p, patch); paint();
    const { error } = await c.from('wall_posts').update(patch).eq('id', id);
    if (error) { Object.assign(p, was); paint(); toast('Sorry — that did not save. Check your internet.'); } else if (msg) toast(msg);
  }
  async function react(postId, emoji) {
    const c = db(); if (!c) { signIn(); return; }
    const mine = reactions.some(r => r.post_id === postId && r.user_id === me() && r.emoji === emoji);
    // update the screen first, then the database
    if (mine) reactions = reactions.filter(r => !(r.post_id === postId && r.user_id === me() && r.emoji === emoji));
    else reactions = [...reactions, { post_id: postId, user_id: me(), emoji }];
    picker = null; paint();
    const q = mine ? c.from('wall_reactions').delete().match({ post_id: postId, user_id: me(), emoji })
      : c.from('wall_reactions').insert({ post_id: postId, lesson_id: lessonId, emoji });
    const { error } = await q; if (error) { console.warn(error); load(); }
  }

  /* ───────── view ───────── */
  const ago = t => { const s = (Date.now() - new Date(t)) / 1000;
    if (s < 60) return 'just now'; if (s < 3600) return Math.floor(s / 60) + ' min ago'; if (s < 86400) return Math.floor(s / 3600) + ' h ago';
    return new Date(t).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }); };
  const initial = n => esc((String(n || '?').trim()[0] || '?').toUpperCase());
  const hue = id => [...String(id)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);
  const photo = url => /^https:\/\/[^"'<>\s]+\/storage\/v1\/object\/public\/avatars\//.test(url || '') ? `<img src="${esc(url)}" alt="" width="72" height="72" loading="lazy" referrerpolicy="no-referrer">` : '';
  const avatar = (p, cls = '') => `<span class="wall-avatar${cls}${photo(p.author_avatar) ? ' has-photo' : ''}" style="--h:${hue(p.user_id)}" aria-hidden="true">${photo(p.author_avatar) || initial(p.author_name)}</span>`;
  const count = thread => posts.filter(p => p.thread === thread).length;
  const likes = p => reactions.filter(r => r.post_id === p.id).length;
  const kind = p => (p.kind in KINDS || p.kind === 'work' ? p.kind : 'comment');

  function reactionBar(p) {
    const mine = e => reactions.some(r => r.post_id === p.id && r.user_id === me() && r.emoji === e);
    const used = EMOJI.map(e => [e, reactions.filter(r => r.post_id === p.id && r.emoji === e).length]).filter(([, n]) => n);
    return `<div class="wall-reacts">
      ${used.map(([e, n]) => `<button type="button" class="wall-chip${mine(e) ? ' mine' : ''}" data-wall-react="${p.id}" data-emoji="${e}" aria-pressed="${mine(e)}" aria-label="${EMOJI_NAME[e]}: ${n}">${e}<b>${n}</b></button>`).join('')}
      <span class="wall-add-wrap"><button type="button" class="wall-add" data-wall-picker="${p.id}" aria-expanded="${picker === p.id}" aria-label="Add a reaction">${icon('smile')}</button>
      ${picker === p.id ? `<span class="wall-picker" role="group" aria-label="Choose a reaction">${EMOJI.map(e => `<button type="button" data-wall-react="${p.id}" data-emoji="${e}" title="${EMOJI_NAME[e]}" aria-label="${EMOJI_NAME[e]}">${e}</button>`).join('')}</span>` : ''}</span>
    </div>`;
  }
  function postHTML(p, isReply) {
    const replies = isReply ? [] : posts.filter(x => x.parent_id === p.id);
    const hiddenReplies = expanded.has('r:' + p.id) ? 0 : Math.max(0, replies.length - SHOW_REPLIES);
    const mine = p.user_id === me(), canDelete = mine || isTeacher(), k = kind(p), teacher = p.author_role === 'teacher';
    const canAnswer = !isReply && k === 'question' && (mine || isTeacher()), canPin = !isReply && isTeacher();
    const teacherReplied = replies.some(r => r.author_role === 'teacher');
    return `<article class="wall-post k-${k}${teacher ? ' by-teacher' : ''}${p.pinned && !isReply ? ' is-pinned' : ''}${p.answered ? ' is-answered' : ''}${isReply ? ' is-reply' : ''}" id="post-${p.id}">
      ${avatar(p)}
      <div class="wall-main">
        ${p.pinned && !isReply ? `<p class="wall-ribbon">${G.pin}Pinned by your teacher</p>` : ''}
        <div class="wall-bubble">
          <div class="wall-meta"><b>${esc(p.author_name)}</b>${teacher ? '<span class="wall-role">Teacher</span>' : ''}${mine ? '<span class="wall-you">you</span>' : ''}
            ${!isReply && k !== 'comment' ? `<span class="wall-kind">${G[k]}${k === 'work' ? 'Shared writing' : KINDS[k]}</span>` : ''}
            ${p.answered ? `<span class="wall-ans">${G.check}Answered</span>` : ''}<span class="wall-time">${ago(p.created_at)}</span>
            ${canDelete || canPin || canAnswer ? `<span class="wall-menu-wrap"><button type="button" class="wall-dots" data-wall-menu="${p.id}" aria-expanded="${menuFor === p.id}" aria-label="More options">⋯</button>
              ${menuFor === p.id ? `<span class="wall-menu" role="menu">${canPin ? `<button type="button" role="menuitem" data-wall-pin="${p.id}">${G.pin}${p.pinned ? 'Unpin' : 'Pin to the top'}</button>` : ''}
                ${canAnswer ? `<button type="button" role="menuitem" data-wall-answered="${p.id}">${G.check}${p.answered ? 'Mark as not answered' : 'Mark as answered'}</button>` : ''}
                ${canDelete ? `<button type="button" role="menuitem" class="danger" data-wall-del="${p.id}">Delete</button>` : ''}</span>` : ''}</span>` : ''}</div>
          ${k === 'work' && p.label ? `<p class="wall-label">${esc(p.label)}</p>` : ''}
          <div class="wall-body">${esc(p.body).replace(/\n/g, '<br>')}</div>
        </div>
        <div class="wall-actions">${reactionBar(p)}
          ${isReply ? '' : `<button type="button" class="wall-link" data-wall-reply="${p.id}">${icon('chat')}Reply${replies.length ? ` · ${replies.length}` : ''}</button>`}
          ${!isReply && k === 'question' && !p.answered && teacherReplied ? '<span class="wall-hint">Your teacher replied</span>' : ''}</div>
        ${replies.length ? `<div class="wall-replies">${hiddenReplies ? `<button type="button" class="wall-more" data-wall-more="r:${p.id}">Show ${hiddenReplies} earlier repl${hiddenReplies === 1 ? 'y' : 'ies'}</button>` : ''}${replies.slice(hiddenReplies).map(r => postHTML(r, true)).join('')}</div>` : ''}
        ${!isReply && replyTo === p.id ? `<form class="wall-form wall-reply-form" data-wall-reply-form="${p.id}" data-thread="${esc(p.thread)}">
          <textarea data-wall-draft="r:${p.id}" rows="2" maxlength="2000" placeholder="Reply to ${esc(p.author_name.split(' ')[0])}…" aria-label="Your reply">${esc(drafts['r:' + p.id] || '')}</textarea>
          <div class="wall-form-bar"><button type="button" class="btn-quiet" data-wall-cancel>Cancel</button><button class="btn" type="submit">Reply</button></div></form>` : ''}
      </div></article>`;
  }
  const FILTERS = [['all', 'All'], ['question', 'Questions'], ['idea', 'Ideas'], ['work', 'Writing'], ['teacher', 'Teacher']];
  function toolsHTML(thread) {
    const top = posts.filter(p => p.thread === thread && !p.parent_id); if (top.length < 3) return '';
    const f = filter[thread] || 'all', s = sortBy[thread] || 'new';
    const n = k => k === 'all' ? top.length : k === 'teacher' ? posts.filter(p => p.thread === thread && p.author_role === 'teacher').length : top.filter(p => kind(p) === k).length;
    return `<div class="wall-tools"><div class="wall-filters" role="group" aria-label="Show">${FILTERS.filter(([k]) => k === 'all' || n(k)).map(([k, l]) => `<button type="button" data-wall-filter="${k}" data-thread="${esc(thread)}" aria-pressed="${f === k}">${l}<small>${n(k)}</small></button>`).join('')}</div>
      <button type="button" class="wall-sort" data-wall-sort="${esc(thread)}" aria-label="Sort: ${s === 'new' ? 'newest first' : 'most liked first'}">${s === 'new' ? 'Newest' : 'Most liked'} <span aria-hidden="true">⇅</span></button></div>`;
  }
  function listHTML(thread) {
    if (status === 'signed-out' || !cloud()?.user) return '';
    if (status === 'idle') return '<p class="wall-empty"><span class="wall-skel"></span><span class="wall-skel short"></span></p>';
    if (status === 'error') return '<p class="wall-empty">The class discussion could not load. Check your internet connection.</p>';
    const f = filter[thread] || 'all', s = sortBy[thread] || 'new';
    let top = posts.filter(p => p.thread === thread && !p.parent_id).reverse();   // newest first
    if (!top.length) return `<div class="wall-empty wall-first">${EMPTY_ART}<p><b>No posts yet.</b> Start the conversation: ask a question or share an idea.</p></div>`;
    if (f === 'teacher') top = top.filter(p => p.author_role === 'teacher' || posts.some(r => r.parent_id === p.id && r.author_role === 'teacher'));
    else if (f !== 'all') top = top.filter(p => kind(p) === f);
    if (s === 'top') top = top.sort((a, b) => likes(b) - likes(a) || b.created_at.localeCompare(a.created_at));
    top = [...top.filter(p => p.pinned), ...top.filter(p => !p.pinned)];
    if (!top.length) return '<p class="wall-empty">Nothing here yet.</p>';
    const more = expanded.has(thread) ? 0 : Math.max(0, top.length - SHOW_POSTS);
    return top.slice(0, top.length - more).map(p => postHTML(p, false)).join('')
      + (more ? `<button type="button" class="wall-more" data-wall-more="${esc(thread)}">${icon('chat')}Show ${more} more post${more === 1 ? '' : 's'}</button>` : '');
  }
  const EMPTY_ART = `<svg class="wall-art" viewBox="0 0 120 80" aria-hidden="true"><rect x="8" y="14" width="62" height="38" rx="12" fill="#e2ecea"/><path d="M22 52v14l14-14" fill="#e2ecea"/><rect x="50" y="30" width="62" height="34" rx="12" fill="#f6e4d9"/><path d="M98 64v12L86 64" fill="#f6e4d9"/><circle cx="28" cy="33" r="3.5" fill="#2b776e"/><circle cx="39" cy="33" r="3.5" fill="#2b776e" opacity=".6"/><circle cx="50" cy="33" r="3.5" fill="#2b776e" opacity=".3"/><path d="M64 44h34M64 52h22" stroke="#b0512a" stroke-width="4" stroke-linecap="round"/></svg>`;
  /* the strip under the heading: who posted, who is online, how many finished */
  function statsHTML(thread) {
    if (!cloud()?.user || status !== 'ready') return '';
    const authors = [...new Map(posts.filter(p => p.thread === thread).reverse().map(p => [p.user_id, p])).values()];
    const k = klass(), on = k?.online?.() || 0, done = k?.done?.(thread) || { n: 0, of: 0 };
    const bits = [];
    if (authors.length) bits.push(`<span class="ws-faces">${authors.slice(0, 5).map(p => avatar(p, ' ws-face')).join('')}</span><span><b>${authors.length}</b> ${authors.length === 1 ? 'person' : 'people'} posted</span>`);
    if (on > 1) bits.push(`<span class="ws-on">${G.dot}<b>${on}</b> online now</span>`);
    if (done.of > 1) bits.push(`<span class="ws-done"><span class="cc-ring" style="--p:${(done.n / done.of).toFixed(3)}" aria-hidden="true"></span><b>${done.n}</b> of ${done.of} finished</span>`);
    return bits.map(b => `<span class="ws-bit">${b}</span>`).join('');
  }
  function typingHTML(thread) {
    const now = Date.now(), who = Object.values(typingNow[thread] || {}).filter(x => now - x.at < 4000).map(x => x.name);
    return who.length ? `<span class="wall-dots-anim" aria-hidden="true"><i></i><i></i><i></i></span>${esc(who.slice(0, 2).join(' and '))}${who.length > 2 ? ` and ${who.length - 2} more` : ''} ${who.length === 1 ? 'is' : 'are'} writing…` : '';
  }
  function paintTyping(thread) { document.querySelectorAll(`[data-wall-typing="${CSS.escape(thread)}"]`).forEach(el => { el.innerHTML = typingHTML(thread); }); }
  /* The whole discussion for one activity (rendered by the app inside each activity). */
  function sectionHTML(a) {
    if (!enabled()) return '';
    const signedIn = !!cloud()?.user, name = cloud()?.profile?.full_name || '', k = kindOf[a.id] || 'comment';
    return `<section class="wall" data-wall="${esc(a.id)}" aria-label="Class discussion: ${esc(a.short || a.title || a.id)}">
      <header class="wall-head"><span class="wall-icon">${icon('chat')}</span><div class="wall-htext"><h3>Class discussion <span class="wall-count" data-wall-count="${esc(a.id)}">${signedIn && count(a.id) ? count(a.id) : ''}</span></h3>
        <p>Ask a question, share an idea or comment. Your class can reply and react.</p></div></header>
      ${signedIn ? `<div class="wall-stats" data-wall-stats="${esc(a.id)}">${statsHTML(a.id)}</div>
        <form class="wall-form wall-compose" data-wall-form="${esc(a.id)}">
        <span class="wall-avatar${photo(cloud()?.profile?.avatar_url) ? ' has-photo' : ''}" style="--h:${hue(me())}" aria-hidden="true">${photo(cloud()?.profile?.avatar_url) || initial(name || cloud().user.email)}</span>
        <div class="wall-form-main">
          <div class="wall-kinds" role="radiogroup" aria-label="Type of post">${Object.entries(KINDS).map(([key, l]) => `<button type="button" role="radio" class="wk-${key}" aria-checked="${k === key}" data-wall-kind="${key}" data-thread="${esc(a.id)}">${G[key]}${l}</button>`).join('')}</div>
          <textarea data-wall-draft="${esc(a.id)}" rows="2" maxlength="2000" placeholder="${k === 'question' ? 'What would you like to ask?' : k === 'idea' ? 'Share your idea with the class…' : 'Write a comment for the class…'}" aria-label="Write a ${KINDS[k].toLowerCase()} for the class">${esc(drafts[a.id] || '')}</textarea>
          <div class="wall-form-bar"><small class="wall-typing" data-wall-typing="${esc(a.id)}" aria-live="polite">${typingHTML(a.id)}</small><button class="btn" type="submit">Post ${icon('arrow')}</button></div></div></form>`
        : `<div class="wall-signin">${EMPTY_ART}<p><span><b>Sign in to join the class discussion.</b> See what your classmates posted, ask questions, reply and react.</span></p><button type="button" class="btn" data-wall-signin>Sign in</button></div>`}
      <div class="wall-tools-slot" data-wall-tools="${esc(a.id)}">${signedIn && status === 'ready' ? toolsHTML(a.id) : ''}</div>
      <div class="wall-list" data-wall-list="${esc(a.id)}">${listHTML(a.id)}</div>
    </section>`;
  }
  /* Repaint lists only, keeping focus and cursor in any reply box. */
  function paint() {
    const act = document.activeElement, key = act?.dataset?.wallDraft, sel = key ? [act.selectionStart, act.selectionEnd] : null;
    document.querySelectorAll('[data-wall-list]').forEach(el => { el.innerHTML = listHTML(el.dataset.wallList); });
    document.querySelectorAll('[data-wall-tools]').forEach(el => { el.innerHTML = cloud()?.user && status === 'ready' ? toolsHTML(el.dataset.wallTools) : ''; });
    paintStats();
    document.querySelectorAll('[data-wall-count]').forEach(el => { const n = count(el.dataset.wallCount); el.textContent = cloud()?.user && n ? n : ''; });
    if (key && !document.contains(act)) { const t = document.querySelector(`[data-wall-draft="${CSS.escape(key)}"]`); if (t) { t.focus(); t.setSelectionRange(...sel); } }
  }
  function paintStats() { document.querySelectorAll('[data-wall-stats]').forEach(el => { el.innerHTML = statsHTML(el.dataset.wallStats); }); }
  document.addEventListener('dec15:presence', paintStats);
  document.addEventListener('dec15:counts', paintStats);

  /* ───────── events ───────── */
  document.addEventListener('input', e => { const k = e.target.dataset?.wallDraft; if (!k) return; drafts[k] = e.target.value;
    const thread = k.startsWith('r:') ? posts.find(p => p.id === k.slice(2))?.thread : k; if (thread && e.target.value.trim()) klass()?.typing?.(thread); });
  document.addEventListener('submit', async e => {
    const f = e.target; const thread = f.dataset.wallForm, parent = f.dataset.wallReplyForm;
    if (!thread && !parent) return;
    e.preventDefault();
    const key = thread || 'r:' + parent, btn = f.querySelector('[type=submit]'), k = thread ? kindOf[thread] || 'comment' : 'comment';
    btn.disabled = true;
    const ok = await post(thread || f.dataset.thread, drafts[key], parent ? { parent_id: parent } : k !== 'comment' ? { kind: k } : {});
    btn.disabled = false;
    if (ok) { drafts[key] = ''; const t = f.querySelector('textarea'); if (t) t.value = ''; if (parent) { replyTo = null; paint(); }
      toast(parent ? 'Reply posted.' : k === 'question' ? 'Question posted. Your class and teacher can answer it.' : 'Posted to the class discussion.'); }
  });
  document.addEventListener('click', e => {
    const t = e.target.closest('button');
    if (!t) { if ((picker && !e.target.closest('.wall-picker')) || menuFor) { picker = null; menuFor = null; paint(); } return; }
    const d = t.dataset;
    if (menuFor && !d.wallMenu && !t.closest('.wall-menu')) { menuFor = null; paint(); }
    if (d.wallMore) { expanded.add(d.wallMore); paint(); return; }
    if (d.wallReact) { react(d.wallReact, d.emoji); return; }
    if (d.wallPicker) { picker = picker === d.wallPicker ? null : d.wallPicker; paint(); return; }
    if (d.wallMenu) { menuFor = menuFor === d.wallMenu ? null : d.wallMenu; paint(); document.querySelector(`#post-${CSS.escape(d.wallMenu)} .wall-menu button`)?.focus(); return; }
    if (d.wallPin) { const p = posts.find(x => x.id === d.wallPin); menuFor = null; if (p) mark(p.id, { pinned: !p.pinned }, p.pinned ? 'Unpinned.' : 'Pinned to the top for the class.'); return; }
    if (d.wallAnswered) { const p = posts.find(x => x.id === d.wallAnswered); menuFor = null; if (p) mark(p.id, { answered: !p.answered }, p.answered ? '' : 'Marked as answered.'); return; }
    if (d.wallKind) { kindOf[d.thread] = d.wallKind; const sec = t.closest('.wall');
      sec?.querySelectorAll('[data-wall-kind]').forEach(b => b.setAttribute('aria-checked', String(b === t)));
      const ta = sec?.querySelector(`[data-wall-draft="${CSS.escape(d.thread)}"]`); if (ta) { ta.placeholder = d.wallKind === 'question' ? 'What would you like to ask?' : d.wallKind === 'idea' ? 'Share your idea with the class…' : 'Write a comment for the class…'; ta.setAttribute('aria-label', `Write a ${KINDS[d.wallKind].toLowerCase()} for the class`); ta.focus(); }
      return; }
    if (d.wallFilter) { filter[d.thread] = d.wallFilter; expanded.add(d.thread); paint(); return; }
    if (d.wallSort) { sortBy[d.wallSort] = sortBy[d.wallSort] === 'top' ? 'new' : 'top'; paint(); return; }
    if (d.wallReply) { replyTo = replyTo === d.wallReply ? null : d.wallReply; paint(); document.querySelector(`[data-wall-draft="r:${d.wallReply}"]`)?.focus(); return; }
    if (t.hasAttribute('data-wall-cancel')) { replyTo = null; paint(); return; }
    if (d.wallDel) { menuFor = null; if (confirm('Delete this post? Replies to it will also be deleted.')) remove(d.wallDel); else paint(); return; }
    if (t.hasAttribute('data-wall-signin')) { signIn(); return; }
    if (d.wallShare) { share(d.wallShare, d.thread, d.label); return; }
    if (picker && !t.closest('.wall-picker')) { picker = null; paint(); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && (menuFor || picker)) { const id = menuFor; menuFor = null; picker = null; paint(); if (id) document.querySelector(`[data-wall-menu="${CSS.escape(id)}"]`)?.focus(); } });
  async function share(fieldId, thread, label) {
    if (!db()) { signIn(); return; }
    const text = document.getElementById('f-' + fieldId)?.value || '';
    if (!text.trim()) { toast('Write something in the box first.'); return; }
    if (!confirm('Share this writing with your class?\n\nEveryone in DEC15 will see it in the class discussion with your name. Your own copy stays in your notebook.')) return;
    if (await post(thread, text, { kind: 'work', label: (label || '').slice(0, 200) })) {
      toast('Shared with the class. Scroll down to see it in the class discussion.');
      document.querySelector(`[data-wall="${CSS.escape(thread)}"]`)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }
  setInterval(() => document.querySelectorAll('.wall-time').length && status === 'ready' && !menuFor && !picker && paint(), 60000); // keep "5 min ago" fresh

  return { sectionHTML, paint, connect, disconnect, load, get enabled() { return enabled(); } };
};
