// DEC15 sign-up: creates a student account that is already confirmed, so no confirmation email is sent.
// Why: Supabase's built-in email service sends only a few emails an hour for the whole project, so when a
// class signs up together most sign-ups failed with "email rate limit exceeded".
// The service-role key is read from the function's own environment on Supabase's servers; it is never sent
// to the browser. The browser signs in with the normal publishable key straight after this call.
import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const reply = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return reply(405, { error: 'method_not_allowed' });
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return reply(400, { error: 'bad_request' }); }
  const email = String(b.email ?? '').trim().toLowerCase();
  const password = String(b.password ?? '');
  const full_name = String(b.full_name ?? '').trim().slice(0, 120);
  const student_id = String(b.student_id ?? '').trim().slice(0, 40);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) return reply(400, { error: 'invalid_email' });
  if (password.length < 6 || password.length > 72) return reply(400, { error: 'weak_password' });
  if (!full_name) return reply(400, { error: 'missing_name' });

  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error } = await admin.auth.admin.createUser({
    email, password, email_confirm: true, user_metadata: { full_name, student_id },
  });
  if (error) {
    if (/already|registered|exists/i.test(error.message)) return reply(409, { error: 'already_registered' });
    console.error('createUser failed', error.message);
    return reply(500, { error: 'create_failed' });
  }
  return reply(200, { ok: true });
});
