/* DEC15 class wall — comments, shared writing, replies and emoji reactions under each activity.
   Data lives in Supabase (tables wall_posts, wall_reactions; see supabase/migrations/…_class_wall.sql).
   Only signed-in students can read or post. New posts arrive live (Realtime), with a slow poll as backup.
   The wall repaints only its own lists, so typing anywhere else on the page is never interrupted. */
window.createDEC15Wall = function ({ getCloud, lessonId, esc, toast, icon, signIn }) {
  const EMOJI = ['👍', '❤️', '👏', '💡', '🤔', '😂'];
  const EMOJI_NAME = { '👍': 'thumbs up', '❤️': 'love', '👏': 'well done', '💡': 'good idea', '🤔': 'thinking', '😂': 'funny' };
  let posts = [], reactions = [], status = 'idle', channel = null, poll = null, timer = null;
  const drafts = {}; let replyTo = null, picker = null;

  const cloud = () => getCloud();
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
      c.from('wall_posts').select('id, thread, parent_id, user_id, author_name, kind, label, body, created_at').eq('lesson_id', lessonId).order('created_at', { ascending: true }),
      c.from('wall_reactions').select('post_id, user_id, emoji').eq('lesson_id', lessonId)
    ]); } catch (e) { e1 = e; }
    if (e1 || e2) { console.warn('wall', e1 || e2); status = 'error'; paint(); return; }
    posts = p || []; reactions = r || []; status = 'ready'; paint();
  }
  const soon = () => { clearTimeout(timer); timer = setTimeout(load, 400); };
  function connect() {
    disconnect();
    const c = db(); if (!c) { load(); return; }
    if (typeof c.channel === 'function') channel = c.channel('wall-' + lessonId)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'wall_posts', filter: 'lesson_id=eq.' + lessonId }, soon)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'wall_reactions', filter: 'lesson_id=eq.' + lessonId }, soon)
      .subscribe();
    poll = setInterval(() => document.visibilityState === 'visible' && load(), channel ? 45000 : 15000);
    load();
  }
  function disconnect() { clearInterval(poll); if (channel) { try { cloud().client.removeChannel(channel); } catch (e) { /* ignore */ } } channel = null; }

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
  const avatar = p => `<span class="wall-avatar" style="--h:${hue(p.user_id)}" aria-hidden="true">${initial(p.author_name)}</span>`;
  const count = thread => posts.filter(p => p.thread === thread).length;

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
    const canDelete = p.user_id === me() || isTeacher();
    return `<article class="wall-post${p.kind === 'work' ? ' is-work' : ''}${isReply ? ' is-reply' : ''}" id="post-${p.id}">
      ${avatar(p)}
      <div class="wall-main">
        <div class="wall-meta"><b>${esc(p.author_name)}</b>${p.user_id === me() ? '<span class="wall-you">you</span>' : ''}<span class="wall-time">${ago(p.created_at)}</span></div>
        ${p.kind === 'work' ? `<span class="wall-badge">${icon('pen')}Shared writing${p.label ? ' · ' + esc(p.label) : ''}</span>` : ''}
        <div class="wall-body">${esc(p.body).replace(/\n/g, '<br>')}</div>
        <div class="wall-actions">${reactionBar(p)}
          ${isReply ? '' : `<button type="button" class="wall-link" data-wall-reply="${p.id}">${icon('chat')}Reply${replies.length ? ` · ${replies.length}` : ''}</button>`}
          ${canDelete ? `<button type="button" class="wall-link wall-del" data-wall-del="${p.id}">Delete</button>` : ''}</div>
        ${replies.length ? `<div class="wall-replies">${replies.map(r => postHTML(r, true)).join('')}</div>` : ''}
        ${!isReply && replyTo === p.id ? `<form class="wall-form wall-reply-form" data-wall-reply-form="${p.id}" data-thread="${esc(p.thread)}">
          <textarea data-wall-draft="r:${p.id}" rows="2" maxlength="2000" placeholder="Reply to ${esc(p.author_name.split(' ')[0])}…" aria-label="Your reply">${esc(drafts['r:' + p.id] || '')}</textarea>
          <div class="wall-form-bar"><button type="button" class="btn-quiet" data-wall-cancel>Cancel</button><button class="btn" type="submit">Reply</button></div></form>` : ''}
      </div></article>`;
  }
  function listHTML(thread) {
    if (status === 'signed-out') return '';
    if (status === 'idle') return '<p class="wall-empty">Loading the class wall…</p>';
    if (status === 'error') return '<p class="wall-empty">The class wall could not load. Check your internet connection.</p>';
    const top = posts.filter(p => p.thread === thread && !p.parent_id).reverse();   // newest first
    return top.length ? top.map(p => postHTML(p, false)).join('') : '<p class="wall-empty">No posts yet. Be the first to share an idea with the class!</p>';
  }
  /* The whole wall for one activity (rendered by the app inside each activity). */
  function sectionHTML(a) {
    if (!enabled()) return '';
    const signedIn = !!cloud()?.user, name = cloud()?.profile?.full_name || '';
    return `<section class="wall" data-wall="${esc(a.id)}" aria-label="Class wall">
      <header class="wall-head"><span class="wall-icon">${icon('chat')}</span><div><h3>Class wall <span class="wall-count" data-wall-count="${esc(a.id)}">${signedIn && count(a.id) ? count(a.id) : ''}</span></h3>
        <p>Share a comment, a question or your notes. Your class can read it, reply and react.</p></div></header>
      ${signedIn ? `<form class="wall-form" data-wall-form="${esc(a.id)}">
        <span class="wall-avatar" style="--h:${hue(me())}" aria-hidden="true">${initial(name || cloud().user.email)}</span>
        <div class="wall-form-main"><textarea data-wall-draft="${esc(a.id)}" rows="2" maxlength="2000" placeholder="Write a comment for the class…" aria-label="Write a comment for the class">${esc(drafts[a.id] || '')}</textarea>
        <div class="wall-form-bar"><small>Be kind and helpful. Everyone in DEC15 can see your name and post.</small><button class="btn" type="submit">Post ${icon('arrow')}</button></div></div></form>`
        : `<div class="wall-signin"><p>${icon('lock')}<span><b>Sign in to join the class wall.</b> See what your classmates posted, reply and react.</span></p><button type="button" class="btn" data-wall-signin>Sign in</button></div>`}
      <div class="wall-list" data-wall-list="${esc(a.id)}">${listHTML(a.id)}</div>
    </section>`;
  }
  /* Repaint lists only, keeping focus and cursor in any reply box. */
  function paint() {
    const act = document.activeElement, key = act?.dataset?.wallDraft, sel = key ? [act.selectionStart, act.selectionEnd] : null;
    document.querySelectorAll('[data-wall-list]').forEach(el => { el.innerHTML = listHTML(el.dataset.wallList); });
    document.querySelectorAll('[data-wall-count]').forEach(el => { const n = count(el.dataset.wallCount); el.textContent = cloud()?.user && n ? n : ''; });
    if (key && !document.contains(act)) { const t = document.querySelector(`[data-wall-draft="${CSS.escape(key)}"]`); if (t) { t.focus(); t.setSelectionRange(...sel); } }
  }

  /* ───────── events ───────── */
  document.addEventListener('input', e => { const k = e.target.dataset?.wallDraft; if (k) drafts[k] = e.target.value; });
  document.addEventListener('submit', async e => {
    const f = e.target; const thread = f.dataset.wallForm, parent = f.dataset.wallReplyForm;
    if (!thread && !parent) return;
    e.preventDefault();
    const key = thread || 'r:' + parent, btn = f.querySelector('[type=submit]');
    btn.disabled = true;
    const ok = await post(thread || f.dataset.thread, drafts[key], parent ? { parent_id: parent } : {});
    btn.disabled = false;
    if (ok) { drafts[key] = ''; const t = f.querySelector('textarea'); if (t) t.value = ''; if (parent) { replyTo = null; paint(); } toast(parent ? 'Reply posted.' : 'Posted to the class wall.'); }
  });
  document.addEventListener('click', e => {
    const t = e.target.closest('button'); if (!t) { if (picker && !e.target.closest('.wall-picker')) { picker = null; paint(); } return; }
    const d = t.dataset;
    if (d.wallReact) { react(d.wallReact, d.emoji); return; }
    if (d.wallPicker) { picker = picker === d.wallPicker ? null : d.wallPicker; paint(); return; }
    if (d.wallReply) { replyTo = replyTo === d.wallReply ? null : d.wallReply; paint(); document.querySelector(`[data-wall-draft="r:${d.wallReply}"]`)?.focus(); return; }
    if (t.hasAttribute('data-wall-cancel')) { replyTo = null; paint(); return; }
    if (d.wallDel) { if (confirm('Delete this post? Replies to it will also be deleted.')) remove(d.wallDel); return; }
    if (t.hasAttribute('data-wall-signin')) { signIn(); return; }
    if (d.wallShare) { share(d.wallShare, d.thread, d.label); return; }
    if (picker && !t.closest('.wall-picker')) { picker = null; paint(); }
  });
  async function share(fieldId, thread, label) {
    if (!db()) { signIn(); return; }
    const text = document.getElementById('f-' + fieldId)?.value || '';
    if (!text.trim()) { toast('Write something in the box first.'); return; }
    if (!confirm('Share this writing with your class?\n\nEveryone in DEC15 will see it on the class wall with your name. Your own copy stays in your notebook.')) return;
    if (await post(thread, text, { kind: 'work', label: (label || '').slice(0, 200) })) {
      toast('Shared with the class. Scroll down to see it on the class wall.');
      document.querySelector(`[data-wall="${CSS.escape(thread)}"]`)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }
  setInterval(() => document.querySelectorAll('.wall-time').length && status === 'ready' && paint(), 60000); // keep "5 min ago" fresh

  return { sectionHTML, paint, connect, disconnect, load, get enabled() { return enabled(); } };
};
