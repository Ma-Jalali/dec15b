-- DEC15 · student accounts and saved lesson work  (applied to "Ma-Jalali's Project")
-- One row per student per lesson. The whole lesson "state" (answers, tables,
-- plan, highlights, completion) is stored as JSON, so adding or editing
-- activities never needs a database change.
-- Profiles are created by the app on first sign-in (no trigger on auth.users).

-- 1. Profiles ---------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  full_name   text not null default '',
  student_id  text not null default '',
  role        text not null default 'student' check (role in ('student', 'teacher')),
  created_at  timestamptz not null default now()
);
alter table public.profiles enable row level security;

-- Teacher check used by policies (security definer avoids RLS recursion).
create or replace function public.is_teacher()
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'teacher');
$$;
revoke execute on function public.is_teacher() from public, anon;
grant execute on function public.is_teacher() to authenticated;

create policy "profiles: read own or teacher" on public.profiles
  for select to authenticated using (id = (select auth.uid()) or (select public.is_teacher()));
create policy "profiles: insert own as student" on public.profiles
  for insert to authenticated with check (id = (select auth.uid()) and role = 'student');
create policy "profiles: update own" on public.profiles
  for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));
-- Students may set their name and student ID, never their role.
revoke insert, update on public.profiles from authenticated;
grant insert (id, full_name, student_id) on public.profiles to authenticated;
grant update (full_name, student_id) on public.profiles to authenticated;
revoke all on public.profiles from anon;

-- 2. Lesson progress --------------------------------------------------------
create table if not exists public.lesson_progress (
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  lesson_id   text not null,
  state       jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (user_id, lesson_id)
);
alter table public.lesson_progress enable row level security;
revoke all on public.lesson_progress from anon;

create policy "progress: read own or teacher" on public.lesson_progress
  for select to authenticated using (user_id = (select auth.uid()) or (select public.is_teacher()));
create policy "progress: insert own" on public.lesson_progress
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy "progress: update own" on public.lesson_progress
  for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "progress: delete own" on public.lesson_progress
  for delete to authenticated using (user_id = (select auth.uid()));

-- 3. Make yourself a teacher (run once in the SQL editor AFTER you have signed up in the app):
-- update public.profiles set role = 'teacher'
--   where id = (select id from auth.users where email = 'you@sydney.edu.au');
-- (If you have not opened the app yet, insert instead:
--  insert into public.profiles (id, full_name, role)
--  select id, 'Teacher', 'teacher' from auth.users where email = 'you@sydney.edu.au';)
