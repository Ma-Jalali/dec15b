/* DEC15 cloud save (Supabase).
   - Work is ALWAYS saved on the device first (localStorage), so nothing is lost offline.
   - When a student is signed in, every change is also copied to Supabase a moment later.
   - On sign-in (or on another device) the online copy and the device copy are merged.
   Only the public "publishable/anon" key is used here; Row Level Security in the
   database makes sure each student can only read and write their own rows. */
window.createDEC15Cloud = function ({ cfg, lessonId, getState, applyState, onChange }) {
  const enabled = !!(cfg.supabaseUrl && cfg.supabaseKey);
  let client = null, user = null, profile = null, status = enabled ? 'signed-out' : 'local';
  let timer = null, pending = false, lastError = '';

  let recovery = false;   // true after opening a "reset password" email link: the student must choose a new password
  function set(s, err) { status = s; if (err !== undefined) lastError = err; onChange({ status, user, profile, error: lastError, recovery }); }

  /* Merge two saved states. The newer copy wins where both have a value;
     anything that exists only in the older copy is kept, so no answer is dropped. */
  function merge(a, b) {
    if (!a) return b; if (!b) return a;
    const [newer, older] = (a.updatedAt || 0) >= (b.updatedAt || 0) ? [a, b] : [b, a];
    const out = { ...older, ...newer };
    for (const k of ['values', 'done', 'revealed', 'checked', 'rows', 'marks', 'markDocuments', 'active']) {
      out[k] = { ...(older[k] || {}), ...(newer[k] || {}) };
    }
    out.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
    return out;
  }
  const cloudCopy = s => { const { teacher, ...rest } = s; return rest; };

  async function loadProfile() {
    const { data } = await client.from('profiles').select('full_name, student_id, role, avatar_url').eq('id', user.id).maybeSingle();
    if (data) { profile = data; return; }
    // First sign-in: create the student's profile from the details given at sign-up.
    const fresh = { id: user.id, full_name: user.user_metadata?.full_name || '', student_id: user.user_metadata?.student_id || '' };
    await client.from('profiles').insert(fresh);
    profile = { ...fresh, role: 'student' };
  }
  async function pull() {
    set('syncing');
    const { data, error } = await client.from('lesson_progress').select('state, updated_at').eq('lesson_id', lessonId).maybeSingle();
    if (error) { set('error', error.message); return; }
    if (data?.state) applyState(merge(getState(), data.state));
    await push(true);
  }
  async function push(force) {
    if (!user) return;
    clearTimeout(timer); pending = false;
    if (!navigator.onLine && !force) { set('offline'); pending = true; return; }
    set('syncing');
    const st = getState();
    const { error } = await client.from('lesson_progress').upsert(
      { user_id: user.id, lesson_id: lessonId, state: cloudCopy(st), updated_at: new Date(st.updatedAt || Date.now()).toISOString() },
      { onConflict: 'user_id,lesson_id' });
    if (error) { pending = true; set(navigator.onLine ? 'error' : 'offline', error.message); return; }
    set('saved', '');
  }
  function queue() { if (!user) return; pending = true; clearTimeout(timer); set('pending'); timer = setTimeout(push, 1200); }

  async function init() {
    if (!enabled) { set('local'); return; }
    if (!window.supabase) await new Promise((ok, bad) => { const sc = document.createElement('script'); sc.src = 'js/vendor/supabase.min.js?v=' + (cfg.version || ''); sc.onload = ok; sc.onerror = bad; document.head.appendChild(sc); });
    client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey, { auth: { persistSession: true, autoRefreshToken: true, storageKey: 'dec15-auth' } });
    const { data } = await client.auth.getSession();
    user = data.session?.user || null;
    if (user) { await loadProfile(); await pull(); } else set('signed-out');
    client.auth.onAuthStateChange(async (evt, session) => {
      if (evt === 'PASSWORD_RECOVERY') { recovery = true; }
      const was = user?.id; user = session?.user || null;
      if (user && user.id !== was) { await loadProfile(); await pull(); }
      if (!user) { profile = null; set('signed-out'); }
      else if (evt === 'PASSWORD_RECOVERY' || evt === 'USER_UPDATED') set(status);
    });
    window.addEventListener('online', () => pending && push());
    document.addEventListener('visibilitychange', () => document.visibilityState === 'hidden' && pending && push());
    setInterval(() => pending && navigator.onLine && push(), 30000);
  }

  async function signIn(email, password) {
    const { error } = await client.auth.signInWithPassword({ email, password });
    return error ? friendly(error) : null;
  }
  async function signUp(email, password, fullName, studentId) {
    // 1. Preferred: the dec15-signup function creates an account that is already confirmed (no email is sent,
    //    so the email limit cannot block a class). Then sign in straight away.
    try {
      const r = await fetch(cfg.supabaseUrl.replace(/\/$/, '') + '/functions/v1/dec15-signup', {
        method: 'POST', headers: { 'Content-Type': 'application/json', apikey: cfg.supabaseKey },
        body: JSON.stringify({ email, password, full_name: fullName, student_id: studentId }) });
      const out = await r.json().catch(() => ({}));
      if (r.ok && out.ok) return signIn(email, password);
      if (r.status === 409) return friendly('already registered');
      if (r.status === 400) return out.error === 'invalid_email' ? 'Please check your email address.' : out.error === 'missing_name' ? 'Please write your full name.' : 'Choose a password with at least 6 characters.';
    } catch (e) { /* function not reachable: use the standard sign-up below */ }
    // 2. Fallback: Supabase's standard sign-up (sends a confirmation email if "Confirm email" is on).
    const { data, error } = await client.auth.signUp({ email, password, options: { data: { full_name: fullName, student_id: studentId }, emailRedirectTo: location.href.split('#')[0] } });
    if (error) return friendly(error);
    if (data.user && Array.isArray(data.user.identities) && !data.user.identities.length) return friendly('already registered');
    if (!data.session) return 'CHECK_EMAIL';
    return null;
  }
  async function resetPassword(email) {
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.href.split('#')[0] });
    return error ? friendly(error) : null;
  }

  /* ───────── account settings ───────── */
  async function updateProfile(fields) {
    const clean = { full_name: String(fields.full_name || '').trim().slice(0, 80), student_id: String(fields.student_id || '').trim().slice(0, 30) };
    if (!clean.full_name) return 'Please write your name.';
    const { error } = await client.from('profiles').update(clean).eq('id', user.id);
    if (error) return friendly(error);
    profile = { ...profile, ...clean }; set(status); return null;
  }
  // The picture is made small on the device first (256 × 256), so uploads are quick and light.
  async function setAvatar(blob) {
    const ext = blob.type === 'image/webp' ? 'webp' : blob.type === 'image/png' ? 'png' : 'jpg';
    const path = `${user.id}/avatar-${Date.now()}.${ext}`, bucket = client.storage.from('avatars');
    const { error } = await bucket.upload(path, blob, { contentType: blob.type, upsert: true, cacheControl: '31536000' });
    if (error) return friendly(error);
    const url = bucket.getPublicUrl(path).data.publicUrl;
    const { error: e2 } = await client.from('profiles').update({ avatar_url: url }).eq('id', user.id);
    if (e2) return friendly(e2);
    profile = { ...profile, avatar_url: url }; set(status);
    cleanAvatars(path); return null;
  }
  async function removeAvatar() {
    const { error } = await client.from('profiles').update({ avatar_url: '' }).eq('id', user.id);
    if (error) return friendly(error);
    profile = { ...profile, avatar_url: '' }; set(status); cleanAvatars(''); return null;
  }
  async function cleanAvatars(keep) {   // remove older pictures from the student's own folder
    try { const bucket = client.storage.from('avatars'); const { data } = await bucket.list(user.id);
      const old = (data || []).map(f => `${user.id}/${f.name}`).filter(f => f !== keep); if (old.length) await bucket.remove(old); } catch (e) { /* not important */ }
  }
  async function changePassword(current, next) {
    if (!recovery) {   // check the current password first, so nobody can change it on a shared computer
      const { error } = await client.auth.signInWithPassword({ email: user.email, password: current });
      if (error) return /invalid login/i.test(error.message) ? 'Your current password is not correct.' : friendly(error);
    }
    const { error } = await client.auth.updateUser({ password: next });
    if (error) return /different from the old/i.test(error.message) ? 'Choose a new password that is different from your old one.' : friendly(error);
    recovery = false; set(status); return null;
  }
  async function signOutEverywhere() { if (pending) await push(true); await client.auth.signOut({ scope: 'global' }); }
  async function signOut() { if (pending) await push(true); await client.auth.signOut(); }
  function friendly(e) {
    const m = String(e.message || e), code = e.code || '';
    // Supabase's built-in email service only sends a few emails an hour for the whole project.
    if (code === 'over_email_send_rate_limit' || /email rate limit/i.test(m)) return 'EMAIL_LIMIT';
    if (/after \d+ seconds/i.test(m)) return 'Please wait half a minute, then press the button once more.';
    if (/invalid login/i.test(m)) return 'The email or password is not correct. Check for typing mistakes (use “Show” to see your password). No account yet? Choose “Create an account”.';
    if (/already registered/i.test(m)) return 'This email already has an account. Choose “Sign in” instead.';
    if (/password/i.test(m) && /6|short|weak/i.test(m)) return 'Choose a password with at least 6 characters.';
    if (/email not confirmed/i.test(m)) return 'Please open the confirmation email first, then sign in.';
    if (/rate limit/i.test(m)) return 'Too many attempts from this network. Please wait a few minutes, then try once more.';
    if (/valid password/i.test(m)) return 'Choose a password with at least 6 characters.';
    if (/fetch|network/i.test(m)) return 'No internet connection. Check your Wi-Fi and try again.';
    return m;
  }

  return { enabled, init, queue, push, signIn, signUp, signOut, signOutEverywhere, resetPassword, merge, updateProfile, setAvatar, removeAvatar, changePassword,
    get recovery() { return recovery; },
    get status() { return status; }, get user() { return user; }, get profile() { return profile; }, get client() { return client; } };
};
