/* DEC15 · Write together — one shared document for a pair, a group or the whole class, written at the same time.
   Like a shared Google Doc, inside the lesson. Everyone sees each other's typing and coloured cursor.
   - The document is a Yjs CRDT (merged in the browser, so nobody's typing is lost).
   - Changes travel live over a private Supabase Realtime channel "dec15:doc:<id>" and are saved as an
     append-only list in table shared_doc_updates (signed-in users only; only the teacher can clear a document).
   Needs js/vendor/tiptap.bundle.js (window.Tiptap, with Collaboration and Y). Loaded when "Write together" is pressed. */
window.DEC15Collab = (() => {
  const COLORS = ['#2b776e', '#b0512a', '#7a4a8c', '#3a58a0', '#985c0e', '#3f7a3a', '#a3305a', '#1f6f8b'];
  const b64 = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
  const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  let cur = null;   // the open document (one at a time)

  /* ───────── the provider: Supabase broadcast for live changes, a table for saved ones ───────── */
  function provider(c, docId, lessonId, ydoc, awareness, onStatus, onCleared) {
    const T = window.Tiptap, Y = T.Y; let ch = null, buf = [], flushT = 0, awT = 0, closed = false, ready = false, early = [], sinceSnap = 0, heal = 0;
    const send = (event, payload) => { if (ch && !closed) ch.send({ type: 'broadcast', event, payload }).catch?.(() => {}); };
    const apply = u => Y.applyUpdate(ydoc, u, 'remote');
    async function flush() {
      clearTimeout(flushT); if (!buf.length) return true;
      const merged = Y.mergeUpdates(buf); buf = [];
      const { error } = await c.from('shared_doc_updates').insert({ doc_id: docId, lesson_id: lessonId, update: b64(merged) });
      if (error) { buf.unshift(merged); onStatus('error'); flushT = setTimeout(flush, 8000); return false; }
      onStatus('saved'); sinceSnap++;
      if (sinceSnap >= 60) { sinceSnap = 0; snapshot(); }
      return true;
    }
    async function snapshot() {   // a full copy now and then, so opening the document stays fast
      const full = b64(Y.encodeStateAsUpdate(ydoc)); if (full.length > 390000) return;
      await c.from('shared_doc_updates').insert({ doc_id: docId, lesson_id: lessonId, update: full, snapshot: true });
    }
    const onUpdate = (u, origin) => { if (origin === 'remote') return; send('u', { u: b64(u) }); buf.push(u); onStatus('saving'); clearTimeout(flushT); flushT = setTimeout(flush, 700); };
    const onAw = ({ added, updated, removed }, origin) => { if (origin === 'remote') return; clearTimeout(awT);
      awT = setTimeout(() => send('aw', { a: b64(T.encodeAwarenessUpdate(awareness, [...added, ...updated, ...removed])) }), 60); };
    async function start() {
      try { await c.realtime.setAuth?.(); } catch (e) { /* older client */ }
      ch = c.channel('dec15:doc:' + docId, { config: { private: true, broadcast: { self: false } } })
        .on('broadcast', { event: 'u' }, ({ payload }) => { try { const u = unb64(payload.u); ready ? apply(u) : early.push(u); } catch (e) { /* ignore a bad update */ } })
        .on('broadcast', { event: 'aw' }, ({ payload }) => { try { T.applyAwarenessUpdate(awareness, unb64(payload.a), 'remote'); } catch (e) { /* ignore */ } })
        .on('broadcast', { event: 'hello' }, ({ payload }) => {   // a newcomer: send what they do not have yet, and who is here
          if (!ready) return;
          try { const diff = Y.encodeStateAsUpdate(ydoc, unb64(payload.sv)); if (diff.length > 2) setTimeout(() => send('u', { u: b64(diff) }), Math.random() * 400); } catch (e) { /* ignore */ }
          send('aw', { a: b64(T.encodeAwarenessUpdate(awareness, [ydoc.clientID])) }); })
        .on('broadcast', { event: 'cleared' }, () => { if (!closed) onCleared(); });
      await new Promise(res => { let done = false; const t = setTimeout(() => { if (!done) { done = true; res(); } }, 6000);
        ch.subscribe(st => {
          if (!done && (st === 'SUBSCRIBED' || st === 'CHANNEL_ERROR' || st === 'TIMED_OUT')) { done = true; clearTimeout(t); res(); }
          else if (done && ready && st === 'SUBSCRIBED') { send('hello', { sv: b64(Y.encodeStateVector(ydoc)) }); flush(); }   // back after a dropped connection: catch up at once
        }); });
      const { data, error } = await c.from('shared_doc_updates').select('id, update, snapshot').eq('doc_id', docId).order('id', { ascending: true }).limit(5000);
      if (error) { onStatus('error'); return false; }
      const rows = data || [], last = rows.map(r => r.snapshot).lastIndexOf(true);
      /* the latest full copy, everything after it, and a little before it (updates are safe to apply twice) */
      const from = last < 0 ? 0 : Math.max(0, last - 40);
      Y.transact(ydoc, () => { for (const r of rows.slice(from)) try { apply(unb64(r.update)); } catch (e) { /* skip a damaged row */ } }, 'remote');
      sinceSnap = rows.length - (last < 0 ? 0 : last);
      early.forEach(apply); early = []; ready = true;
      ydoc.on('update', onUpdate); awareness.on('update', onAw);
      heal = setInterval(() => { if (document.visibilityState === 'visible' && awareness.getStates().size > 1) send('hello', { sv: b64(Y.encodeStateVector(ydoc)) }); }, 15000);   // a quiet safety net
      send('hello', { sv: b64(Y.encodeStateVector(ydoc)) });
      onStatus('saved');
      if (sinceSnap > 80) { sinceSnap = 0; snapshot(); }
      return true;
    }
    async function stop() {
      clearInterval(heal); await flush(); closed = true;
      try { T.removeAwarenessStates(awareness, [ydoc.clientID], 'local'); } catch (e) { /* ignore */ }
      ydoc.off('update', onUpdate); awareness.off('update', onAw);
      if (ch) try { await ch.send({ type: 'broadcast', event: 'aw', payload: { a: b64(T.encodeAwarenessUpdate(awareness, [ydoc.clientID])) } }); c.removeChannel(ch); } catch (e) { /* ignore */ }
      ch = null;
    }
    return { start, stop, flush, send, awareness };
  }

  /* ───────── the window ───────── */
  const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const I = {
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
    redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>',
    bold: '<path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" stroke-width="2.4"/>',
    italic: '<path d="M14 5h-4M14 19h-4M14 5l-4 14"/>',
    underline: '<path d="M7 4v7a5 5 0 0 0 10 0V4M5 20h14"/>',
    strike: '<path d="M4 12h16M16.5 7.5C16 5.6 14.2 4.5 12 4.5c-2.6 0-4.5 1.4-4.5 3.4 0 1.6 1.1 2.6 3 3.1M8 16c.4 2.1 2.3 3.5 4.4 3.5 2.6 0 4.6-1.4 4.6-3.6 0-1-.4-1.8-1.1-2.4"/>',
    color: '<path d="m6 18 6-14 6 14M8.3 13h7.4"/>',
    marker: '<path d="m15 4 5 5-8.5 8.5H7v-4.5z"/><path d="m12.5 6.5 5 5"/>',
    bullets: '<circle cx="5" cy="7" r="1.2" fill="currentColor"/><circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="5" cy="17" r="1.2" fill="currentColor"/><path d="M9 7h11M9 12h11M9 17h11"/>',
    numbers: '<path d="M4 5h2v4M4 9h3M4 14.5c0-1 2.5-1.5 2.5 0S4 17 4 18.5h3"/><path d="M10 7h10M10 12h10M10 17h10"/>',
    tasks: '<rect x="3.5" y="4.5" width="6" height="6" rx="1.5"/><path d="m5 7.5 1.3 1.3L8.6 6.4"/><rect x="3.5" y="13.5" width="6" height="6" rx="1.5"/><path d="M13 7.5h7M13 16.5h7"/>',
    left: '<path d="M4 6h16M4 10h10M4 14h16M4 18h10"/>', center: '<path d="M4 6h16M7 10h10M4 14h16M7 18h10"/>', right: '<path d="M4 6h16M10 10h10M4 14h16M10 18h10"/>',
    quote: '<path d="M7 8c-1.7 0-3 1.3-3 3v5h5v-5H6c0-1.1.9-2 2-2zM16 8c-1.7 0-3 1.3-3 3v5h5v-5h-3c0-1.1.9-2 2-2z"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    clear: '<path d="M6 5h12M12 5l-3 14M15.5 14.5l5 5M20.5 14.5l-5 5"/>',
    comment: '<path d="M4 5.5h16v10.5H10l-4.5 3.5V16H4z"/><path d="M8.5 9.5h7M8.5 12.5h4.5"/>',
    check: '<path d="m5 12.5 4.2 4.2L19 7"/>', trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>', edit: '<path d="m15 4 5 5L9 20H4v-5z"/>', chev: '<path d="m7 10 5 5 5-5"/>',
  };
  const TEXT_COLORS = [['', 'Default', '#14293a'], ['#b0322b', 'Red', '#b0322b'], ['#c26412', 'Orange', '#c26412'], ['#2f7a52', 'Green', '#2f7a52'], ['#1f6f8b', 'Teal', '#1f6f8b'], ['#2f55b0', 'Blue', '#2f55b0'], ['#7a4a8c', 'Purple', '#7a4a8c'], ['#6b7680', 'Grey', '#6b7680']];
  const MARKS = [['', 'None'], ['#fff1a8', 'Yellow'], ['#c9f0d4', 'Green'], ['#cde6fb', 'Blue'], ['#f9d3e2', 'Pink'], ['#ffe0c2', 'Orange'], ['#e6dcf7', 'Lilac']];
  const STYLES = [['p', 'Normal text'], ['h2', 'Heading'], ['h3', 'Subheading']];
  const QUICK = ['Good point!', 'Add an example or evidence.', 'Cite the source here.', 'Check the grammar in this sentence.', 'Can you make this clearer?', 'Use a more academic word.'];
  const GROUPS = [['class', 'Whole class'], ...Array.from({ length: 8 }, (_, i) => ['g' + (i + 1), 'Group ' + (i + 1)])];
  const STATUS = { connecting: 'Connecting…', saving: 'Saving…', saved: 'Saved', error: 'Not saved yet · trying again', offline: 'Offline' };
  const ago = t => { const s = (Date.now() - t) / 1000; return s < 60 ? 'just now' : s < 3600 ? Math.round(s / 60) + ' min ago' : s < 86400 ? Math.round(s / 3600) + ' h ago' : new Date(t).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' }); };

  /* Teacher comments never change the document itself: each comment (Y.Map "comments") remembers the words it is about
     (quote + a little text before and after), and the highlight is drawn on a layer under the text.
     v2.54 stored comments as a mark inside the text; browsers still on an older version could not read that mark
     and dropped the whole paragraph. That mark is kept here only so such documents still open; it is removed on load. */
  function commentMark(T) {
    return T.Mark.create({ name: 'comment', inclusive: false,
      addAttributes() { return { ids: { default: '' } }; },
      parseHTML() { return [{ tag: 'span[data-cw-old]' }]; },
      renderHTML() { return ['span', { 'data-cw-old': '' }, 0]; } });
  }

  async function open(o) {
    /* o: { lessonId, activityId, title, goal, getCloud, esc, icon, toast, signIn, isTeacher } */
    const { esc, toast } = o, cloud = o.getCloud(), c = cloud?.client;
    if (!c || !cloud.user) { toast('Sign in to write together with your class.'); o.signIn?.(); return; }
    if (cur) await cur.close();
    const teacher = !!o.isTeacher?.();
    const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
    const groupKey = 'dec15-cowrite-group:' + o.lessonId;
    let group = LS(groupKey) || '';
    const me = { name: (cloud.profile?.full_name || cloud.user.email?.split('@')[0] || 'Student').trim().split(' ').slice(0, 2).join(' '), color: COLORS[Math.abs([...cloud.user.id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) | 0, 7)) % COLORS.length] };
    const wrap = document.createElement('div'); wrap.className = 'cw-wrap'; wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-modal', 'true'); wrap.setAttribute('aria-labelledby', 'cw-title');
    const back = document.activeElement;
    const btn = (k, label, extra = '') => `<button type="button" data-cw="${k}" title="${label}" aria-label="${label}"${extra}>${svg(I[k])}</button>`;
    wrap.innerHTML = `<div class="cw${teacher ? ' is-teacher' : ''}" tabindex="-1">
      <div class="cw-head"><span class="cw-badge" aria-hidden="true">${o.icon('users')}</span>
        <div class="cw-titles"><small>Write together</small><h2 id="cw-title">${esc(o.title)}</h2></div>
        <div class="cw-faces" aria-live="polite"></div>
        <button type="button" class="cw-x" data-cw-close aria-label="Close">×</button></div>
      <div class="cw-pick"></div>
      <div class="cw-body" hidden>
        <div class="cw-bar" role="toolbar" aria-label="Formatting">
          <div class="cw-grp">${btn('undo', 'Undo my last change')}${btn('redo', 'Redo')}</div>
          <div class="cw-grp"><label class="cw-style"><span class="sr-only">Text style</span><select data-cw-style aria-label="Text style">${STYLES.map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select>${svg(I.chev)}</label></div>
          <div class="cw-grp">${btn('bold', 'Bold (Ctrl+B)')}${btn('italic', 'Italic (Ctrl+I)')}${btn('underline', 'Underline (Ctrl+U)')}${btn('strike', 'Strikethrough')}</div>
          <div class="cw-grp"><button type="button" class="cw-swatch" data-cw-pop="color" title="Text colour" aria-label="Text colour" aria-haspopup="true">${svg(I.color)}<i class="cw-sw-bar" data-cw-colorbar></i></button>
            <button type="button" class="cw-swatch" data-cw-pop="mark" title="Highlight" aria-label="Highlight colour" aria-haspopup="true">${svg(I.marker)}<i class="cw-sw-bar" data-cw-markbar></i></button></div>
          <div class="cw-grp">${btn('bullets', 'Bullet list')}${btn('numbers', 'Numbered list')}${btn('tasks', 'Checklist')}</div>
          <div class="cw-grp cw-grp-more"><button type="button" data-cw-pop="align" title="Align" aria-label="Align text" aria-haspopup="true">${svg(I.left)}</button>${btn('quote', 'Quote')}${btn('link', 'Link')}${btn('clear', 'Clear formatting')}</div>
          <span class="cw-sp"></span>
          ${teacher ? `<button type="button" class="cw-addc" data-cw-addc disabled title="Select some text, then add a comment">${svg(I.comment)}<span>Comment</span></button>` : ''}
          <button type="button" class="cw-ctog" data-cw-ctog hidden aria-pressed="true" title="Show or hide comments">${svg(I.comment)}<b>0</b></button>
          <label class="cw-gsel"><span class="sr-only">Group</span><select data-cw-group aria-label="Group">${GROUPS.map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select></label>
          <button type="button" class="cw-more" data-cw-more aria-label="More">⋯</button></div>
        <div class="cw-page"><div class="cw-sheet"><div class="cw-goal">${o.goal ? `<b>Task</b> ${esc(o.goal)}` : ''}</div><div class="cw-hl" aria-hidden="true"></div><div class="cw-editor"></div><button type="button" class="cw-bubble" data-cw-bubble hidden>${svg(I.comment)}Comment</button></div><aside class="cw-rail" aria-label="Teacher comments"></aside></div>
        <footer class="cw-foot"><span class="cw-status" role="status"></span><span class="cw-words"></span><span class="cw-by" aria-live="polite"></span><span class="cw-hint">Changes save by themselves.</span></footer>
      </div></div>`;
    document.body.append(wrap); document.body.classList.add('cw-open');
    const $ = s => wrap.querySelector(s);
    let editor = null, prov = null, ydoc = null, awareness = null, cmap = null, active = null, draft = null, narrowOpen = false, railOn = LS('dec15-cw-rail') !== '0', showRead = false;
    const status = s => { const el = $('.cw-status'); if (el) { el.dataset.s = s; el.textContent = STATUS[s] || ''; } };
    const faces = () => {
      const seen = new Map(); awareness?.getStates().forEach((st, id) => { if (st.user && !seen.has(st.user.name + st.user.color)) seen.set(st.user.name + st.user.color, { ...st.user, me: id === ydoc.clientID }); });
      const list = [...seen.values()].sort((a, b) => b.me - a.me);
      $('.cw-faces').innerHTML = list.slice(0, 6).map(u => `<span class="cw-face" style="--c:${u.color}" title="${esc(u.name)}${u.me ? ' (you)' : ''}">${esc(u.name.slice(0, 1).toUpperCase())}</span>`).join('')
        + (list.length > 6 ? `<span class="cw-face more">+${list.length - 6}</span>` : '') + `<span class="cw-here">${list.length} here</span>`;
    };
    function caret(user) {
      const c = document.createElement('span'); c.className = 'collaboration-cursor__caret cw-caret'; c.style.borderColor = user.color;
      const l = document.createElement('span'); l.className = 'collaboration-cursor__label'; l.style.backgroundColor = user.color; l.textContent = (user.name || '').split(' ')[0];
      c.append(l); return c;
    }
    let lastMark = 0;
    const markMe = () => { const now = Date.now(); if (!ydoc || now - lastMark < 4000) return; lastMark = now;
      const who = ydoc.getMap('who'), mine = who.get(cloud.user.id) || {};
      who.set(cloud.user.id, { name: me.name, color: me.color, edits: (mine.edits || 0) + 1, at: now }); };
    const paintBy = () => { const el = $('.cw-by'); if (!el || !ydoc) return;
      const list = [...ydoc.getMap('who').values()].sort((a, b) => (b.edits || 0) - (a.edits || 0));
      el.innerHTML = list.length ? `<span class="cw-by-dots">${list.slice(0, 8).map(u => `<i style="--c:${u.color}" title="${esc(u.name)}"></i>`).join('')}</span>Written by ${esc(list.slice(0, 3).map(u => u.name.split(' ')[0]).join(', '))}${list.length > 3 ? ` and ${list.length - 3} more` : ''}` : ''; };
    const words = () => { const n = ((editor?.getText() || '').match(/[\p{L}\p{N}'’-]+/gu) || []).length; const el = $('.cw-words'); if (el) el.textContent = `${n} word${n === 1 ? '' : 's'}`; };
    const paintBar = () => { if (!editor) return;
      const on = { bold: editor.isActive('bold'), italic: editor.isActive('italic'), underline: editor.isActive('underline'), strike: editor.isActive('strike'), bullets: editor.isActive('bulletList'), numbers: editor.isActive('orderedList'), tasks: editor.isActive('taskList'), quote: editor.isActive('blockquote'), link: editor.isActive('link') };
      wrap.querySelectorAll('[data-cw]').forEach(b => { if (b.dataset.cw in on) b.setAttribute('aria-pressed', String(!!on[b.dataset.cw])); });
      const st = editor.isActive('heading', { level: 2 }) ? 'h2' : editor.isActive('heading', { level: 3 }) ? 'h3' : 'p'; const sel = $('[data-cw-style]'); if (sel && sel.value !== st) sel.value = st;
      $('[data-cw-colorbar]').style.background = editor.getAttributes('textStyle').color || '#14293a';
      const hl = editor.getAttributes('highlight'); $('[data-cw-markbar]').style.background = editor.isActive('highlight') ? (hl.color || '#fff1a8') : 'transparent';
      const al = ['center', 'right'].find(a => editor.isActive({ textAlign: a })) || 'left'; $('[data-cw-pop="align"]').innerHTML = svg(I[al]);
      paintSel(); };

    /* ───────── comments ───────── */
    const comments = () => cmap ? [...cmap.entries()].map(([id, v]) => ({ id, ...v })) : [];
    const openOnes = () => comments().filter(x => !x.done).sort((a, b) => a.at - b.at);
    /* the document as plain text, with the editor position of every character (blocks are joined with "\n") */
    let idx = null;
    function index() {
      if (idx && idx.doc === editor.state.doc) return idx;
      let txt = '', map = [];
      editor.state.doc.descendants((node, pos) => { if (node.isText) { txt += node.text; for (let i = 0; i < node.text.length; i++) map.push(pos + i); } else if (node.isBlock && txt && !txt.endsWith('\n')) { txt += '\n'; map.push(-1); } });
      return (idx = { doc: editor.state.doc, txt, map });
    }
    function anchorOf(from, to) {
      const { txt, map } = index(); let a = map.findIndex(p => p >= from), b = -1; for (let i = map.length - 1; i >= 0; i--) if (map[i] >= 0 && map[i] < to) { b = i; break; }
      if (a < 0 || b < a) return null;
      return { quote: txt.slice(a, b + 1), pre: txt.slice(Math.max(0, a - 32), a), suf: txt.slice(b + 1, b + 33) };
    }
    const shared = (x, y, back) => { let n = 0; while (n < x.length && n < y.length && (back ? x[x.length - 1 - n] === y[y.length - 1 - n] : x[n] === y[n])) n++; return n; };
    function rangeOf(c) {   // where the comment's words are now; null when they have been rewritten
      const q = c.quote; if (!q) return null; const { txt, map } = index(); let best = null, score = -1;
      for (let i = txt.indexOf(q); i >= 0; i = txt.indexOf(q, i + 1)) { const sc = shared(c.pre || '', txt.slice(Math.max(0, i - 32), i), true) + shared(c.suf || '', txt.slice(i + q.length, i + q.length + 32)); if (sc > score) { score = sc; best = i; } }
      if (best === null) return null;
      let a = best, b = best + q.length - 1; while (a <= b && map[a] < 0) a++; while (b >= a && map[b] < 0) b--; if (a > b) return null;
      return { from: map[a], to: map[b] + 1 };
    }
    const anchors = () => { const m = new Map(); openOnes().forEach(c => { const r = rangeOf(c); if (r) m.set(c.id, r); }); return m; };
    /* documents from v2.54: turn the old marks into anchors, then take the marks out of the text */
    function migrate() {
      const type = editor.schema.marks.comment; if (!type) return; const spans = new Map(); let any = false;
      editor.state.doc.descendants((node, pos) => { if (!node.isText) return; const m = type.isInSet(node.marks); if (!m) return; any = true;
        String(m.attrs.ids || '').split(' ').filter(Boolean).forEach(id => { const r = spans.get(id); if (!r) spans.set(id, { from: pos, to: pos + node.nodeSize }); else r.to = pos + node.nodeSize; }); });
      if (!any) return;
      spans.forEach((r, id) => { const v = cmap.get(id); if (v && !v.pre && !v.suf) { const an = anchorOf(r.from, r.to); if (an) cmap.set(id, { ...v, ...an }); } });
      const tr = editor.state.tr.removeMark(0, editor.state.doc.content.size, type); tr.setMeta('addToHistory', false); editor.view.dispatch(tr);
    }
    function saveDraft() {
      const ta = $('.cw-cnew textarea'), text = ta?.value.trim(); if (!text || !draft) { ta?.focus(); return; }
      const id = 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      const an = anchorOf(draft.from, draft.to) || { quote: draft.quote, pre: '', suf: '' };
      cmap.set(id, { by: me.name, byId: cloud.user.id, text: text.slice(0, 1000), quote: an.quote.slice(0, 400), pre: an.pre, suf: an.suf, at: Date.now(), done: null });
      active = id; draft = null; railOn = true; paintRail();
      toast('Comment added. Students see it beside their writing.');
    }
    function resolve(id) {   // "Got it": the comment goes, the writing stays exactly as it is
      const v = cmap.get(id); if (!v) return;
      cmap.set(id, { ...v, done: { by: me.name, at: Date.now() } }); if (active === id) active = null; paintRail();
    }
    function remove(id) { cmap.delete(id); if (active === id) active = null; paintRail(); }
    function edit(id) { const v = cmap.get(id), card = wrap.querySelector(`.cw-card[data-cid="${id}"]`); if (!v || !card) return;
      card.querySelector('.cw-ctext').outerHTML = `<div class="cw-cedit"><textarea rows="3" maxlength="1000">${esc(v.text)}</textarea><div class="cw-cacts"><button type="button" class="cw-cbtn" data-cedit-cancel>Cancel</button><button type="button" class="cw-cbtn pri" data-cedit-save="${id}">Save</button></div></div>`;
      const ta = card.querySelector('textarea'); ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); }
    const ini = n => esc((n || '?').trim().slice(0, 1).toUpperCase());
    function cardHTML(x, read) {
      const mine = x.byId === cloud.user.id;
      return `<article class="cw-card${active === x.id ? ' on' : ''}${read ? ' read' : ''}" data-cid="${x.id}" tabindex="0">
        <header><span class="cw-cav" aria-hidden="true">${ini(x.by)}</span><span class="cw-cwho"><b>${esc(x.by)}</b><small>Teacher · ${esc(ago(x.at))}</small></span>
          ${teacher && !read ? `<span class="cw-cicons">${mine ? `<button type="button" data-cedit="${x.id}" title="Edit" aria-label="Edit comment">${svg(I.edit)}</button>` : ''}<button type="button" data-cdel="${x.id}" title="Delete" aria-label="Delete comment">${svg(I.trash)}</button></span>` : ''}</header>
        ${x.quote ? `<q class="cw-cq">${esc(x.quote.length > 70 ? x.quote.slice(0, 68) + '…' : x.quote)}</q>${!read && editor && !rangeOf(x) ? '<small class="cw-cgone">These words have changed since the comment.</small>' : ''}` : ''}
        <p class="cw-ctext">${esc(x.text).replace(/\n/g, '<br>')}</p>
        ${read ? `<p class="cw-cread">${svg(I.check)} Read by ${esc(x.done.by.split(' ')[0])} · ${esc(ago(x.done.at))}${teacher ? ` <button type="button" class="cw-clink" data-cdel="${x.id}">Delete</button>` : ''}</p>`
          : teacher ? `<p class="cw-cwait"><i></i>Not read yet</p>`
          : `<div class="cw-cacts"><button type="button" class="cw-cbtn ok" data-cdone="${x.id}" title="Your writing does not change">${svg(I.check)}Got it</button></div>`}
      </article>`;
    }
    function paintRail() {
      const rail = $('.cw-rail'); if (!rail || !editor) return;
      const list = openOnes(), read = comments().filter(x => x.done).sort((a, b) => b.done.at - a.done.at);
      const tog = $('[data-cw-ctog]'); tog.hidden = !list.length && !draft && !(teacher && read.length); tog.querySelector('b').textContent = list.length; tog.setAttribute('aria-pressed', String(railOn)); tog.classList.toggle('has', list.length > 0);
      const show = railOn && (list.length || draft || (teacher && read.length));
      wrap.querySelector('.cw').classList.toggle('rail-on', !!show);
      paintMarks();
      if (!show) { rail.innerHTML = ''; return; }
      if (matchMedia('(max-width: 1000px)').matches && !narrowOpen && !draft) {   // small screens: one quiet line instead of the cards
        rail.innerHTML = list.length ? `<button type="button" class="cw-strip" data-cw-strip><span class="cw-cav" aria-hidden="true">${svg(I.comment)}</span><span><b>${list.length} comment${list.length === 1 ? '' : 's'} from your teacher</b><small>${esc(list[0].text.slice(0, 60))}${list[0].text.length > 60 ? '…' : ''}</small></span><em>Show</em></button>` : ''; return; }
      rail.innerHTML = `<div class="cw-rail-in">${draft ? `<article class="cw-card cw-cnew on" data-top="${draft.from}"><header><span class="cw-cav" aria-hidden="true">${ini(me.name)}</span><span class="cw-cwho"><b>${esc(me.name)}</b><small>New comment</small></span></header>
          <q class="cw-cq">${esc(draft.quote.length > 70 ? draft.quote.slice(0, 68) + '…' : draft.quote)}</q>
          <textarea rows="3" maxlength="1000" placeholder="Write a comment…" aria-label="Comment"></textarea>
          <div class="cw-quick">${QUICK.map(q => `<button type="button" data-cquick="${esc(q)}">${esc(q)}</button>`).join('')}</div>
          <div class="cw-cacts"><button type="button" class="cw-cbtn" data-ccancel>Cancel</button><button type="button" class="cw-cbtn pri" data-csave>Comment</button></div></article>` : ''}
        ${list.map(x => cardHTML(x, false)).join('')}</div>${narrowOpen ? '<button type="button" class="cw-clink cw-fold" data-cw-fold>Hide comments</button>' : ''}
        ${teacher && read.length ? `<details class="cw-readlist"${showRead ? ' open' : ''}><summary>${svg(I.check)} ${read.length} read by students</summary>${read.map(x => cardHTML(x, true)).join('')}</details>` : ''}`;
      place();
    }
    /* the warm underline under commented words: drawn on a layer below the text, one band per comment */
    function paintMarks() {
      const layer = $('.cw-hl'); if (!layer || !editor) return;
      const sheet = $('.cw-sheet').getBoundingClientRect(), out = [];
      anchors().forEach((r, id) => { try {
        const a = editor.view.domAtPos(r.from), b = editor.view.domAtPos(r.to), rg = document.createRange(); rg.setStart(a.node, a.offset); rg.setEnd(b.node, b.offset);
        [...rg.getClientRects()].forEach(q => { if (q.width < 1) return; out.push(`<i class="${id === active ? 'on' : ''}" style="left:${(q.left - sheet.left).toFixed(1)}px;top:${(q.top - sheet.top).toFixed(1)}px;width:${q.width.toFixed(1)}px;height:${q.height.toFixed(1)}px"></i>`); });
      } catch (e) { /* the text is changing; next paint */ } });
      layer.innerHTML = out.join('');
    }
    /* each card sits next to its text (like a word processor); cards that would overlap are pushed down */
    function place() {
      const rail = $('.cw-rail'), inner = rail?.querySelector('.cw-rail-in'); if (!inner || !editor) return;
      const narrow = getComputedStyle($('.cw-page')).gridTemplateColumns.split(' ').length < 2; inner.classList.toggle('flow', narrow); if (narrow) { inner.style.height = ''; inner.querySelectorAll('.cw-card').forEach(c => { c.style.top = ''; }); return; }
      const base = rail.getBoundingClientRect().top, an = anchors();
      let y = 0; const cards = [...inner.querySelectorAll('.cw-card')];
      const want = c => { const pos = c.classList.contains('cw-cnew') ? draft?.from : an.get(c.dataset.cid)?.from; if (pos == null) return 0; try { return editor.view.coordsAtPos(Math.min(pos + 1, editor.state.doc.content.size)).top - base - 6; } catch (e) { return 0; } };
      const tops = cards.map(c => ({ c, t: want(c) })).sort((a, b) => a.t - b.t);
      const act = tops.find(x => x.c.classList.contains('on'));
      tops.forEach(x => { const t = Math.max(x.t, y); x.c.style.top = t + 'px'; y = t + x.c.offsetHeight + 10; });
      if (act) { const shift = act.t - parseFloat(act.c.style.top); if (shift < 0) { let y2 = 0; tops.forEach(x => { const t = Math.max(x.t + (tops.indexOf(x) <= tops.indexOf(act) ? shift : 0), y2, 0); x.c.style.top = t + 'px'; y2 = t + x.c.offsetHeight + 10; }); } }
      inner.style.height = y + 'px';
    }
    function focusComment(id, scroll) {
      active = id; wrap.querySelectorAll('.cw-card').forEach(c => c.classList.toggle('on', c.dataset.cid === id)); paintMarks(); place();
      if (scroll) { const el = wrap.querySelector('.cw-hl i.on'); el?.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    }
    /* the small "Comment" bubble for the teacher, next to the selected text */
    function paintSel() {
      if (!teacher || !editor) return; const { from, to, empty } = editor.state.selection, ok = !empty && editor.state.doc.textBetween(from, to, ' ').trim().length > 0;
      const add = $('[data-cw-addc]'); if (add) add.disabled = !ok;
      const b = $('[data-cw-bubble]'); if (!b) return; if (!ok || draft || !editor.isFocused) { b.hidden = true; return; }
      try { const end = editor.view.coordsAtPos(to), sheet = $('.cw-sheet').getBoundingClientRect(); b.hidden = false; b.style.top = (end.bottom - sheet.top + 6) + 'px'; b.style.left = Math.min(end.left - sheet.left - 20, sheet.width - 120) + 'px'; } catch (e) { b.hidden = true; }
    }
    function startComment() {
      const { from, to, empty } = editor.state.selection; if (empty) { toast('Select the words you want to comment on first.'); return; }
      draft = { from, to, quote: editor.state.doc.textBetween(from, to, ' ').slice(0, 140) }; railOn = true; $('[data-cw-bubble]').hidden = true; paintRail();
      setTimeout(() => $('.cw-cnew textarea')?.focus(), 30);
    }

    /* ───────── pop-up pickers: colour, highlight, alignment, link ───────── */
    function pop(kind, anchor) {
      wrap.querySelector('.cw-pop')?.remove();
      const m = document.createElement('div'); m.className = 'cw-pop cw-pop-' + kind; m.setAttribute('role', 'menu');
      if (kind === 'color') m.innerHTML = `<p>Text colour</p><div class="cw-dots">${TEXT_COLORS.map(([v, l, show]) => `<button type="button" data-pc="${v}" title="${l}" aria-label="${l}" style="--c:${show}"><span>A</span></button>`).join('')}</div>`;
      if (kind === 'mark') m.innerHTML = `<p>Highlight</p><div class="cw-dots">${MARKS.map(([v, l]) => `<button type="button" data-pm="${v}" title="${l}" aria-label="${l}" class="${v ? '' : 'none'}" style="--c:${v || '#fff'}"></button>`).join('')}</div>`;
      if (kind === 'align') m.innerHTML = ['left', 'center', 'right'].map(a => `<button type="button" class="cw-prow" data-pa="${a}">${svg(I[a])}${a[0].toUpperCase() + a.slice(1)}</button>`).join('');
      if (kind === 'link') m.innerHTML = `<p>Link</p><form class="cw-plink"><input type="url" placeholder="https://…" value="${esc(editor.getAttributes('link').href || '')}" aria-label="Web address"><button type="submit" class="cw-cbtn pri">Add</button>${editor.isActive('link') ? '<button type="button" class="cw-cbtn" data-unlink>Remove</button>' : ''}</form>`;
      wrap.querySelector('.cw').append(m);
      const r = anchor.getBoundingClientRect(), pr = wrap.querySelector('.cw').getBoundingClientRect();
      m.style.top = (r.bottom - pr.top + 6) + 'px'; m.style.left = Math.max(8, Math.min(r.left - pr.left - 8, pr.width - m.offsetWidth - 8)) + 'px';
      (m.querySelector('input') || m.querySelector('button'))?.focus();
      const off = ev => { if (!m.contains(ev.target) && ev.target !== anchor && !anchor.contains(ev.target)) { m.remove(); document.removeEventListener('pointerdown', off, true); } };
      setTimeout(() => document.addEventListener('pointerdown', off, true), 0);
      m.addEventListener('click', ev => { const t = ev.target.closest('button'); if (!t) return; const ch = editor.chain().focus();
        if (t.dataset.pc !== undefined) { (t.dataset.pc ? ch.setColor(t.dataset.pc) : ch.unsetColor()).run(); m.remove(); }
        if (t.dataset.pm !== undefined) { (t.dataset.pm ? ch.setHighlight({ color: t.dataset.pm }) : ch.unsetHighlight()).run(); m.remove(); }
        if (t.dataset.pa) { ch.setTextAlign(t.dataset.pa).run(); m.remove(); }
        if (t.dataset.unlink !== undefined) { ch.extendMarkRange('link').unsetLink().run(); m.remove(); } });
      m.addEventListener('submit', ev => { ev.preventDefault(); let v = m.querySelector('input').value.trim(); if (v && !/^https?:\/\//i.test(v)) v = 'https://' + v;
        const ch = editor.chain().focus().extendMarkRange('link'); (v ? ch.setLink({ href: v }) : ch.unsetLink()).run(); m.remove(); });
    }

    async function start(g) {
      group = g; LS(groupKey, g); $('.cw-pick').hidden = true; $('.cw-body').hidden = false; $('[data-cw-group]').value = g; status('connecting');
      if (editor) { editor.destroy(); editor = null; } if (prov) { await prov.stop(); prov = null; }
      draft = null; active = null;
      const T = window.Tiptap; ydoc = new T.Y.Doc(); awareness = new T.Awareness(ydoc); cmap = ydoc.getMap('comments');
      awareness.on('change', faces);
      const docId = `${o.lessonId}:${o.activityId}:${g}`.slice(0, 120);
      prov = provider(c, docId, o.lessonId, ydoc, awareness, status, () => { toast('Your teacher cleared this page.'); start(group); });
      const ok = await prov.start(); if (!ok) { status('error'); }
      editor = new T.Editor({ element: $('.cw-editor'),
        extensions: [T.StarterKit.configure({ history: false, heading: { levels: [2, 3] } }), T.Underline, T.TextStyle, T.Color, T.Highlight.configure({ multicolor: true }),
          T.TextAlign.configure({ types: ['heading', 'paragraph'] }), T.Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' } }),
          T.TaskList, T.TaskItem.configure({ nested: true }), commentMark(T),
          T.Placeholder.configure({ placeholder: 'Start writing together…' }),
          T.Collaboration.configure({ document: ydoc }), T.CollaborationCursor.configure({ provider: { awareness }, user: me, render: caret })],
        editorProps: { attributes: { class: 'cw-doc', spellcheck: 'true', 'aria-label': 'Shared document', role: 'textbox', 'aria-multiline': 'true' },
          handleClick: (view, pos) => { const ids = [...anchors()].filter(([, r]) => pos >= r.from && pos <= r.to).map(([id]) => id); if (ids.length) { const nx = ids[(ids.indexOf(active) + 1) % ids.length] || ids[0]; railOn = true; if (!narrowOpen && matchMedia('(max-width: 1000px)').matches) { narrowOpen = true; paintRail(); } else if (!wrap.querySelector('.cw').classList.contains('rail-on')) paintRail(); focusComment(nx); } else if (active) { active = null; wrap.querySelectorAll('.cw-card.on').forEach(c => c.classList.remove('on')); paintMarks(); } return false; } },
        onUpdate: () => { words(); requestAnimationFrame(() => { place(); paintMarks(); }); }, onSelectionUpdate: paintBar, onTransaction: paintBar, onFocus: paintSel, onBlur: () => setTimeout(paintSel, 150) });
      ydoc.on('update', (u, origin) => { if (origin !== 'remote' && editor?.isFocused) markMe(); });
      ydoc.getMap('who').observe(paintBy); paintBy();
      let seen = openOnes().length;
      cmap.observe(() => { const n = openOnes().length; if (!teacher && n > seen) { const t = $('[data-cw-ctog]'); t?.classList.remove('ping'); void t?.offsetWidth; t?.classList.add('ping'); } seen = n; paintRail(); });
      try { migrate(); } catch (e) { /* keep going */ } words(); faces(); paintRail(); editor.commands.focus('end');
    }
    const RUN = { bold: e => e.toggleBold(), italic: e => e.toggleItalic(), underline: e => e.toggleUnderline(), strike: e => e.toggleStrike(), bullets: e => e.toggleBulletList(), numbers: e => e.toggleOrderedList(), tasks: e => e.toggleTaskList(), quote: e => e.toggleBlockquote(), clear: e => ['bold', 'italic', 'underline', 'strike', 'code', 'textStyle', 'highlight', 'link'].reduce((ch, m) => ch.unsetMark(m), e).clearNodes().setTextAlign('left'), undo: e => e.undo(), redo: e => e.redo() };
    const text = () => editor ? editor.getText({ blockSeparator: '\n' }) : '';
    function menu(anchor) {
      const m = document.createElement('div'); m.className = 'cw-menu'; m.setAttribute('role', 'menu');
      m.innerHTML = `<button type="button" role="menuitem" data-mm="copy">Copy all the text</button><button type="button" role="menuitem" data-mm="txt">Download as a text file</button><button type="button" role="menuitem" data-mm="print">Print, or save as PDF</button>
        ${teacher ? '<hr><button type="button" role="menuitem" data-mm="versions">Earlier versions…</button><button type="button" role="menuitem" class="danger" data-mm="clear">Clear this document for everyone</button>' : ''}`;
      wrap.querySelector('.cw').append(m); const r = anchor.getBoundingClientRect(), pr = wrap.querySelector('.cw').getBoundingClientRect();
      m.style.top = (r.bottom - pr.top + 6) + 'px'; m.style.right = (pr.right - r.right) + 'px'; m.querySelector('button').focus();
      const off = ev => { if (!m.contains(ev.target)) { m.remove(); document.removeEventListener('pointerdown', off, true); } };
      setTimeout(() => document.addEventListener('pointerdown', off, true), 0);
      m.addEventListener('click', async ev => { const k = ev.target.closest('[data-mm]')?.dataset.mm; if (!k) return; m.remove(); document.removeEventListener('pointerdown', off, true);
        if (k === 'copy') { try { await navigator.clipboard.writeText(text()); toast('Copied. Paste it wherever you need it.'); } catch (e) { toast('Copy did not work in this browser.'); } }
        if (k === 'txt') { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([o.title + '\n\n' + text()], { type: 'text/plain' })); a.download = (o.title || 'shared').replace(/[^\w -]+/g, '').slice(0, 60) + '.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }
        if (k === 'print') { document.body.classList.add('cw-print'); window.print(); setTimeout(() => document.body.classList.remove('cw-print'), 500); }
        if (k === 'versions') { versions(); return; }
        if (k === 'clear') { if (!confirm('Clear this document for everyone in this group? This cannot be undone.')) return;
          const docId = `${o.lessonId}:${o.activityId}:${group}`.slice(0, 120); await prov.flush();
          const { error } = await c.from('shared_doc_updates').delete().eq('doc_id', docId);
          if (error) { toast('Could not clear it. Check your internet.'); return; }
          prov.send('cleared', {}); toast('Document cleared.'); start(group); } });
    }
    /* teacher: see the document as it was at an earlier time, and bring that version back.
       Every change is kept (the table is append-only), so restoring is itself just a new change. */
    async function versions() {
      const T = window.Tiptap, docId = `${o.lessonId}:${o.activityId}:${group}`.slice(0, 120); await prov.flush();
      const { data, error } = await c.from('shared_doc_updates').select('id, update, created_at').eq('doc_id', docId).order('id', { ascending: true }).limit(5000);
      if (error || !data?.length) { toast(error ? 'Could not load the history. Check your internet.' : 'There is no earlier version yet.'); return; }
      const pts = [];   // a point after each pause of 20 seconds or more in the writing (newest first)
      for (let i = data.length - 1; i >= 0; i--) { const t = new Date(data[i].created_at), last = pts[pts.length - 1]; if (last && last.t0 - t < 20000) { last.t0 = t; continue; } pts.push({ i, t, t0: t }); if (pts.length >= 120) break; }
      const build = upto => { const d = new T.Y.Doc(); for (let k = 0; k <= upto; k++) try { T.Y.applyUpdate(d, unb64(data[k].update)); } catch (e) { /* skip */ } return d; };
      const toText = j => { const out = []; const walk = n => { if (n.type === 'text') { out.push(n.text); return; } (n.content || []).forEach(walk); if (/paragraph|heading|listItem|taskItem|blockquote/.test(n.type)) out.push('\n'); }; walk(j); return out.join('').replace(/\n{3,}/g, '\n\n').trim(); };
      const box = document.createElement('div'); box.className = 'cw-ver'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', 'Earlier versions');
      const fmt = t => t.toLocaleString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', second: '2-digit' });
      box.innerHTML = `<header><b>Earlier versions</b><small>${esc(GROUPS.find(g => g[0] === group)?.[1] || '')} · choose a time to see the text as it was</small><button type="button" class="cw-x" data-ver-x aria-label="Close">×</button></header>
        <div class="cw-ver-in"><ol>${pts.map((p, k) => `<li><button type="button" data-ver="${k}"${k === 0 ? ' aria-pressed="true"' : ''}><b>${esc(fmt(p.t))}</b>${k === 0 ? '<small>Now</small>' : ''}</button></li>`).join('')}</ol>
        <div class="cw-ver-doc"><div class="cw-ver-text"></div><footer><span class="cw-ver-n"></span><button type="button" class="cw-cbtn pri" data-ver-restore disabled>Restore this version</button></footer></div></div>`;
      wrap.querySelector('.cw').append(box);
      let pick = 0, json = null;
      const show = k => { pick = k; box.querySelectorAll('[data-ver]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.ver === k)));
        const d = build(pts[k].i); json = T.yXmlFragmentToProsemirrorJSON(d.getXmlFragment('default')); const txt = toText(json), now = text().trim();
        box.querySelector('.cw-ver-text').innerHTML = txt ? esc(txt).replace(/\n/g, '<br>') : '<em>Empty</em>';
        const n = (txt.match(/[\p{L}\p{N}'’-]+/gu) || []).length; box.querySelector('.cw-ver-n').textContent = `${n} words${txt === now ? ' · same as now' : ''}`;
        box.querySelector('[data-ver-restore]').disabled = k === 0 || txt === now; };
      show(Math.min(1, pts.length - 1));
      box.addEventListener('click', ev => { const b = ev.target.closest('button'); if (!b) return;
        if (b.dataset.verX !== undefined) { box.remove(); return; }
        if (b.dataset.ver) { show(+b.dataset.ver); return; }
        if (b.dataset.verRestore !== undefined && json) { if (!confirm(`Bring back the text from ${fmt(pts[pick].t)} for everyone in this group? What is there now stays in the history.`)) return;
          const strip = n => { if (n.marks) n.marks = n.marks.filter(m => m.type !== 'comment'); (n.content || []).forEach(strip); return n; };
          editor.commands.setContent(strip(json), true); box.remove(); toast('The earlier version is back. Everyone in the group sees it now.'); } });
    }
    wrap.addEventListener('mousedown', e => { if (e.target.closest('[data-cw-bubble], .cw-bar button')) e.preventDefault(); });   // keep the text selected
    wrap.addEventListener('click', e => {
      const card = e.target.closest('.cw-card'), t = e.target.closest('button, [data-cw-pick], summary');
      if (!t) { if (card && !card.classList.contains('cw-cnew') && !e.target.closest('textarea')) focusComment(card.dataset.cid, true); else if (e.target === wrap) close(); return; }
      const d = t.dataset;
      if (d.cwClose !== undefined) { close(); return; }
      if (d.cwPick) { start(d.cwPick); return; }
      if (d.cwMore !== undefined) { menu(t); return; }
      if (d.cwPop) { pop(d.cwPop, t); return; }
      if (d.cw === 'link') { pop('link', t); return; }
      if (d.cw && editor) { RUN[d.cw](editor.chain().focus()).run(); return; }
      if (d.cwAddc !== undefined || d.cwBubble !== undefined) { startComment(); return; }
      if (d.cwFold !== undefined) { narrowOpen = false; paintRail(); return; }
      if (d.cwStrip !== undefined) { narrowOpen = true; paintRail(); return; }
      if (d.cwCtog !== undefined) { railOn = !railOn; LS('dec15-cw-rail', railOn ? '1' : '0'); paintRail(); return; }
      if (d.cquick) { const ta = $('.cw-cnew textarea'); ta.value = (ta.value.trim() ? ta.value.trim() + ' ' : '') + d.cquick; ta.focus(); return; }
      if (d.csave !== undefined) { saveDraft(); return; }
      if (d.ccancel !== undefined) { draft = null; paintRail(); editor.commands.focus(); return; }
      if (d.cdone) { resolve(d.cdone); toast('Marked as read. Now improve your writing if you want to.'); return; }
      if (d.cdel) { if (confirm('Delete this comment?')) remove(d.cdel); return; }
      if (d.cedit) { edit(d.cedit); return; }
      if (d.ceditCancel !== undefined) { paintRail(); return; }
      if (d.ceditSave) { const v = cmap.get(d.ceditSave), tv = t.closest('.cw-card').querySelector('textarea').value.trim(); if (v && tv) cmap.set(d.ceditSave, { ...v, text: tv.slice(0, 1000) }); paintRail(); return; }
      if (t.tagName === 'SUMMARY') { setTimeout(() => { showRead = !!wrap.querySelector('.cw-readlist')?.open; }, 0); }
    });
    wrap.addEventListener('change', e => {
      if (e.target.matches('[data-cw-group]')) start(e.target.value);
      if (e.target.matches('[data-cw-style]') && editor) { const v = e.target.value, ch = editor.chain().focus(); (v === 'p' ? ch.setParagraph() : ch.setHeading({ level: +v.slice(1) })).run(); }
    });
    wrap.addEventListener('keydown', e => {
      if (e.target.closest('.cw-cnew textarea') && e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); saveDraft(); return; }
      if (e.key === 'Escape') { if (wrap.querySelector('.cw-pop')) { wrap.querySelector('.cw-pop').remove(); return; } if (draft) { draft = null; paintRail(); return; } if (!wrap.querySelector('.cw-menu')) { e.preventDefault(); close(); } }
      if (teacher && (e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'm' || e.key === 'M')) { e.preventDefault(); startComment(); }
    });
    $('.cw-page').addEventListener('scroll', () => paintSel(), { passive: true });
    const ro = new ResizeObserver(() => { place(); paintMarks(); }); ro.observe($('.cw-page'));
    $('.cw-pick').innerHTML = `<p class="cw-pick-q"><b>Who are you writing with?</b><span>Choose the same group as your partners. Your teacher can open every group's page.</span></p>
      <div class="cw-groups">${GROUPS.map(([k, l]) => `<button type="button" class="cw-g${k === group ? ' last' : ''}" data-cw-pick="${k}">${k === 'class' ? o.icon('users') : `<b>${k.slice(1)}</b>`}<span>${l}</span>${k === group ? '<small>Last time</small>' : ''}</button>`).join('')}</div>`;
    wrap.querySelector('.cw').focus();
    async function close() {
      if (!wrap.isConnected) return; const p = prov, ed = editor; prov = null; editor = null; cur = null; ro.disconnect();
      wrap.classList.add('closing'); document.body.classList.remove('cw-open');
      try { await p?.stop(); } catch (e) { /* ignore */ } ed?.destroy(); wrap.remove(); back?.focus?.();
    }
    cur = { close };
  }
  return { open, close: () => cur?.close() };
})();
