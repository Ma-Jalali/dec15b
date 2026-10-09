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
    const T = window.Tiptap, Y = T.Y; let ch = null, buf = [], flushT = 0, awT = 0, closed = false, ready = false, early = [], sinceSnap = 0;
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
        ch.subscribe(st => { if (!done && (st === 'SUBSCRIBED' || st === 'CHANNEL_ERROR' || st === 'TIMED_OUT')) { done = true; clearTimeout(t); res(); } }); });
      const { data, error } = await c.from('shared_doc_updates').select('id, update, snapshot').eq('doc_id', docId).order('id', { ascending: true }).limit(5000);
      if (error) { onStatus('error'); return false; }
      const rows = data || [], last = rows.map(r => r.snapshot).lastIndexOf(true);
      /* the latest full copy, everything after it, and a little before it (updates are safe to apply twice) */
      const from = last < 0 ? 0 : Math.max(0, last - 40);
      Y.transact(ydoc, () => { for (const r of rows.slice(from)) try { apply(unb64(r.update)); } catch (e) { /* skip a damaged row */ } }, 'remote');
      sinceSnap = rows.length - (last < 0 ? 0 : last);
      early.forEach(apply); early = []; ready = true;
      ydoc.on('update', onUpdate); awareness.on('update', onAw);
      send('hello', { sv: b64(Y.encodeStateVector(ydoc)) });
      onStatus('saved');
      if (sinceSnap > 80) { sinceSnap = 0; snapshot(); }
      return true;
    }
    async function stop() {
      await flush(); closed = true;
      try { T.removeAwarenessStates(awareness, [ydoc.clientID], 'local'); } catch (e) { /* ignore */ }
      ydoc.off('update', onUpdate); awareness.off('update', onAw);
      if (ch) try { await ch.send({ type: 'broadcast', event: 'aw', payload: { a: b64(T.encodeAwarenessUpdate(awareness, [ydoc.clientID])) } }); c.removeChannel(ch); } catch (e) { /* ignore */ }
      ch = null;
    }
    return { start, stop, flush, send, awareness };
  }

  /* ───────── the window ───────── */
  const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const TOOLS = [
    ['bold', '<path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" stroke-width="2.4"/>', 'Bold'],
    ['italic', '<path d="M14 5h-4M14 19h-4M14 5l-4 14"/>', 'Italic'],
    ['underline', '<path d="M7 4v7a5 5 0 0 0 10 0V4M5 20h14"/>', 'Underline'],
    ['highlight', '<path d="m14 4 6 6-9 9H5v-6z"/><path d="M4 21h16" stroke-width="3"/>', 'Highlight'],
    ['h2', '<path d="M4 6v12M12 6v12M4 12h8M15.5 10c0-1.2 1-2 2.2-2s2.3.8 2.3 2c0 2-4.5 3.4-4.5 6h4.6"/>', 'Heading'],
    ['bullets', '<circle cx="5" cy="7" r="1.2" fill="currentColor"/><circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="5" cy="17" r="1.2" fill="currentColor"/><path d="M9 7h11M9 12h11M9 17h11"/>', 'Bullet list'],
    ['numbers', '<path d="M4 5h2v4M4 9h3M4 14.5c0-1 2.5-1.5 2.5 0S4 17 4 18.5h3"/><path d="M10 7h10M10 12h10M10 17h10"/>', 'Numbered list'],
    ['tasks', '<rect x="3.5" y="4.5" width="6" height="6" rx="1.5"/><path d="m5 7.5 1.3 1.3L8.6 6.4"/><rect x="3.5" y="13.5" width="6" height="6" rx="1.5"/><path d="M13 7.5h7M13 16.5h7"/>', 'Checklist'],
    ['undo', '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>', 'Undo my last change'],
    ['redo', '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/>', 'Redo'],
  ];
  const GROUPS = [['class', 'Whole class'], ...Array.from({ length: 8 }, (_, i) => ['g' + (i + 1), 'Group ' + (i + 1)])];
  const STATUS = { connecting: 'Connecting…', saving: 'Saving…', saved: 'Saved', error: 'Not saved yet · trying again', offline: 'Offline' };

  async function open(o) {
    /* o: { lessonId, activityId, title, goal, getCloud, esc, icon, toast, signIn, isTeacher } */
    const { esc, toast } = o, cloud = o.getCloud(), c = cloud?.client;
    if (!c || !cloud.user) { toast('Sign in to write together with your class.'); o.signIn?.(); return; }
    if (cur) await cur.close();
    const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
    const groupKey = 'dec15-cowrite-group:' + o.lessonId;
    let group = LS(groupKey) || '';
    const me = { name: (cloud.profile?.full_name || cloud.user.email?.split('@')[0] || 'Student').trim().split(' ').slice(0, 2).join(' '), color: COLORS[Math.abs([...cloud.user.id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) | 0, 7)) % COLORS.length] };
    const wrap = document.createElement('div'); wrap.className = 'cw-wrap'; wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-modal', 'true'); wrap.setAttribute('aria-labelledby', 'cw-title');
    const back = document.activeElement;
    wrap.innerHTML = `<div class="cw" tabindex="-1">
      <div class="cw-head"><span class="cw-badge" aria-hidden="true">${o.icon('users')}</span>
        <div class="cw-titles"><small>Write together</small><h2 id="cw-title">${esc(o.title)}</h2></div>
        <div class="cw-faces" aria-live="polite"></div>
        <button type="button" class="cw-x" data-cw-close aria-label="Close">×</button></div>
      <div class="cw-pick"></div>
      <div class="cw-body" hidden>
        <div class="cw-bar" role="toolbar" aria-label="Formatting">${TOOLS.map(([k, p, l]) => `<button type="button" data-cw="${k}" title="${l}" aria-label="${l}">${svg(p)}</button>`).join('')}
          <span class="cw-sp"></span><label class="cw-gsel"><span class="sr-only">Group</span><select data-cw-group aria-label="Group">${GROUPS.map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select></label>
          <button type="button" class="cw-more" data-cw-more aria-label="More">⋯</button></div>
        <div class="cw-page"><div class="cw-goal">${o.goal ? `<b>Task</b> ${esc(o.goal)}` : ''}</div><div class="cw-editor"></div></div>
        <footer class="cw-foot"><span class="cw-status" role="status"></span><span class="cw-words"></span><span class="cw-hint">Everyone in your group sees the same page. Changes save by themselves.</span></footer>
      </div></div>`;
    document.body.append(wrap); document.body.classList.add('cw-open');
    const $ = s => wrap.querySelector(s);
    let editor = null, prov = null, ydoc = null, awareness = null;
    const status = s => { const el = $('.cw-status'); if (el) { el.dataset.s = s; el.textContent = STATUS[s] || ''; } };
    const faces = () => {
      const seen = new Map(); awareness?.getStates().forEach((st, id) => { if (st.user && !seen.has(st.user.name + st.user.color)) seen.set(st.user.name + st.user.color, { ...st.user, me: id === ydoc.clientID }); });
      const list = [...seen.values()].sort((a, b) => b.me - a.me);
      $('.cw-faces').innerHTML = list.slice(0, 6).map(u => `<span class="cw-face" style="--c:${u.color}" title="${esc(u.name)}${u.me ? ' (you)' : ''}">${esc(u.name.slice(0, 1).toUpperCase())}</span>`).join('')
        + (list.length > 6 ? `<span class="cw-face more">+${list.length - 6}</span>` : '') + `<span class="cw-here">${list.length} here</span>`;
    };
    const words = () => { const n = ((editor?.getText() || '').match(/[\p{L}\p{N}'’-]+/gu) || []).length; const el = $('.cw-words'); if (el) el.textContent = `${n} word${n === 1 ? '' : 's'}`; };
    const paintBar = () => { if (!editor) return; const on = { bold: editor.isActive('bold'), italic: editor.isActive('italic'), underline: editor.isActive('underline'), highlight: editor.isActive('highlight'), h2: editor.isActive('heading', { level: 2 }), bullets: editor.isActive('bulletList'), numbers: editor.isActive('orderedList'), tasks: editor.isActive('taskList') };
      wrap.querySelectorAll('[data-cw]').forEach(b => { if (b.dataset.cw in on) b.setAttribute('aria-pressed', String(!!on[b.dataset.cw])); }); };

    async function start(g) {
      group = g; LS(groupKey, g); $('.cw-pick').hidden = true; $('.cw-body').hidden = false; $('[data-cw-group]').value = g; status('connecting');
      if (editor) { editor.destroy(); editor = null; } if (prov) { await prov.stop(); prov = null; }
      const T = window.Tiptap; ydoc = new T.Y.Doc(); awareness = new T.Awareness(ydoc);
      awareness.on('change', faces);
      const docId = `${o.lessonId}:${o.activityId}:${g}`.slice(0, 120);
      prov = provider(c, docId, o.lessonId, ydoc, awareness, status, () => { toast('Your teacher cleared this page.'); start(group); });
      const ok = await prov.start(); if (!ok) { status('error'); }
      editor = new T.Editor({ element: $('.cw-editor'),
        extensions: [T.StarterKit.configure({ history: false, heading: { levels: [2, 3] } }), T.Underline, T.Highlight, T.TaskList, T.TaskItem.configure({ nested: true }),
          T.Placeholder.configure({ placeholder: 'Start writing together…' }),
          T.Collaboration.configure({ document: ydoc }), T.CollaborationCursor.configure({ provider: { awareness }, user: me })],
        editorProps: { attributes: { class: 'cw-doc', spellcheck: 'true', 'aria-label': 'Shared document', role: 'textbox', 'aria-multiline': 'true' } },
        onUpdate: words, onSelectionUpdate: paintBar, onTransaction: paintBar });
      words(); faces(); editor.commands.focus('end');
    }
    const RUN = { bold: e => e.toggleBold(), italic: e => e.toggleItalic(), underline: e => e.toggleUnderline(), highlight: e => e.toggleHighlight(), h2: e => e.toggleHeading({ level: 2 }), bullets: e => e.toggleBulletList(), numbers: e => e.toggleOrderedList(), tasks: e => e.toggleTaskList(), undo: e => e.undo(), redo: e => e.redo() };
    const text = () => editor ? editor.getText({ blockSeparator: '\n' }) : '';
    function menu(anchor) {
      const m = document.createElement('div'); m.className = 'cw-menu'; m.setAttribute('role', 'menu');
      m.innerHTML = `<button type="button" role="menuitem" data-mm="copy">Copy all the text</button><button type="button" role="menuitem" data-mm="txt">Download as a text file</button><button type="button" role="menuitem" data-mm="print">Print, or save as PDF</button>
        ${o.isTeacher?.() ? '<hr><button type="button" role="menuitem" class="danger" data-mm="clear">Clear this document for everyone</button>' : ''}`;
      wrap.querySelector('.cw').append(m); const r = anchor.getBoundingClientRect(), pr = wrap.querySelector('.cw').getBoundingClientRect();
      m.style.top = (r.bottom - pr.top + 6) + 'px'; m.style.right = (pr.right - r.right) + 'px'; m.querySelector('button').focus();
      const off = ev => { if (!m.contains(ev.target)) { m.remove(); document.removeEventListener('pointerdown', off, true); } };
      setTimeout(() => document.addEventListener('pointerdown', off, true), 0);
      m.addEventListener('click', async ev => { const k = ev.target.closest('[data-mm]')?.dataset.mm; if (!k) return; m.remove(); document.removeEventListener('pointerdown', off, true);
        if (k === 'copy') { try { await navigator.clipboard.writeText(text()); toast('Copied. Paste it wherever you need it.'); } catch (e) { toast('Copy did not work in this browser.'); } }
        if (k === 'txt') { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([o.title + '\n\n' + text()], { type: 'text/plain' })); a.download = (o.title || 'shared').replace(/[^\w -]+/g, '').slice(0, 60) + '.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }
        if (k === 'print') { document.body.classList.add('cw-print'); window.print(); setTimeout(() => document.body.classList.remove('cw-print'), 500); }
        if (k === 'clear') { if (!confirm('Clear this document for everyone in this group? This cannot be undone.')) return;
          const docId = `${o.lessonId}:${o.activityId}:${group}`.slice(0, 120); await prov.flush();
          const { error } = await c.from('shared_doc_updates').delete().eq('doc_id', docId);
          if (error) { toast('Could not clear it. Check your internet.'); return; }
          prov.send('cleared', {}); toast('Document cleared.'); start(group); } });
    }
    wrap.addEventListener('click', e => {
      const t = e.target.closest('button, [data-cw-pick]'); if (!t) { if (e.target === wrap) close(); return; }
      if (t.dataset.cwClose !== undefined) { close(); return; }
      if (t.dataset.cwPick) { start(t.dataset.cwPick); return; }
      if (t.dataset.cwMore !== undefined) { menu(t); return; }
      const k = t.dataset.cw; if (k && editor) { RUN[k](editor.chain().focus()).run(); }
    });
    wrap.addEventListener('change', e => { if (e.target.matches('[data-cw-group]')) start(e.target.value); });
    wrap.addEventListener('keydown', e => { if (e.key === 'Escape' && !wrap.querySelector('.cw-menu')) { e.preventDefault(); close(); } });
    $('.cw-pick').innerHTML = `<p class="cw-pick-q"><b>Who are you writing with?</b><span>Choose the same group as your partners. Your teacher can open every group's page.</span></p>
      <div class="cw-groups">${GROUPS.map(([k, l]) => `<button type="button" class="cw-g${k === group ? ' last' : ''}" data-cw-pick="${k}">${k === 'class' ? o.icon('users') : `<b>${k.slice(1)}</b>`}<span>${l}</span>${k === group ? '<small>Last time</small>' : ''}</button>`).join('')}</div>`;
    wrap.querySelector('.cw').focus();
    async function close() {
      if (!wrap.isConnected) return; const p = prov, ed = editor; prov = null; editor = null; cur = null;
      wrap.classList.add('closing'); document.body.classList.remove('cw-open');
      try { await p?.stop(); } catch (e) { /* ignore */ } ed?.destroy(); wrap.remove(); back?.focus?.();
    }
    cur = { close };
  }
  return { open, close: () => cur?.close() };
})();
