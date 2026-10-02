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

  function set(s, err) { status = s; if (err !== undefined) lastError = err; onChange({ status, user, profile, error: lastError }); }

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
    const { data } = await client.from('profiles').select('full_name, student_id, role').eq('id', user.id).maybeSingle();
    profile = data || { full_name: user.user_metadata?.full_name || '', role: 'student' };
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
      const was = user?.id; user = session?.user || null;
      if (user && user.id !== was) { await loadProfile(); await pull(); }
      if (!user) { profile = null; set('signed-out'); }
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
    const { data, error } = await client.auth.signUp({ email, password, options: { data: { full_name: fullName, student_id: studentId }, emailRedirectTo: location.href.split('#')[0] } });
    if (error) return friendly(error);
    if (!data.session) return 'CHECK_EMAIL';
    return null;
  }
  async function resetPassword(email) {
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.href.split('#')[0] });
    return error ? friendly(error) : null;
  }
  async function signOut() { if (pending) await push(true); await client.auth.signOut(); }
  function friendly(e) {
    const m = String(e.message || e);
    if (/invalid login/i.test(m)) return 'The email or password is not correct.';
    if (/already registered/i.test(m)) return 'This email already has an account. Choose “Sign in” instead.';
    if (/password/i.test(m) && /6|short|weak/i.test(m)) return 'Choose a password with at least 6 characters.';
    if (/email not confirmed/i.test(m)) return 'Please open the confirmation email first, then sign in.';
    if (/rate limit/i.test(m)) return 'Too many attempts. Please wait a minute and try again.';
    return m;
  }

  return { enabled, init, queue, push, signIn, signUp, signOut, resetPassword, merge,
    get status() { return status; }, get user() { return user; }, get profile() { return profile; } };
};
