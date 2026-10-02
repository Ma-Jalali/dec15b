-- DEC15 · student accounts and saved lesson work
-- One row per student per lesson. The whole lesson "state" (answers, tables,
-- plan, highlights, completion) is stored as JSON, so adding or editing
-- activities never needs a database change.

-- 1. Profiles ---------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  full_name   text not null default '',
  student_id  text not null default '',
  role        text not null default 'student' check (role in ('student', 'teacher')),
  created_at  timestamptz not null default now()
);
alter table public.profiles enable row level security;

-- Create a profile automatically when someone signs up.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, full_name, student_id)
  values (new.id,
          coalesce(new.raw_user_meta_data ->> 'full_name', ''),
          coalesce(new.raw_user_meta_data ->> 'student_id', ''))
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Teacher check used by policies (security definer avoids RLS recursion).
create or replace function public.is_teacher()
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'teacher');
$$;
revoke execute on function public.is_teacher() from anon;

create policy "profiles: read own or teacher" on public.profiles
  for select to authenticated using (id = (select auth.uid()) or (select public.is_teacher()));
create policy "profiles: update own" on public.profiles
  for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));
-- Students may change their name and student ID, never their role.
revoke update on public.profiles from authenticated;
grant update (full_name, student_id) on public.profiles to authenticated;

-- 2. Lesson progress --------------------------------------------------------
create table if not exists public.lesson_progress (
  user_id     uuid not null references auth.users (id) on delete cascade default auth.uid(),
  lesson_id   text not null,
  state       jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (user_id, lesson_id)
);
alter table public.lesson_progress enable row level security;

create policy "progress: read own or teacher" on public.lesson_progress
  for select to authenticated using (user_id = (select auth.uid()) or (select public.is_teacher()));
create policy "progress: insert own" on public.lesson_progress
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy "progress: update own" on public.lesson_progress
  for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "progress: delete own" on public.lesson_progress
  for delete to authenticated using (user_id = (select auth.uid()));

-- 3. Make a teacher (run once in the SQL editor, with your own email) -------
-- update public.profiles set role = 'teacher'
--   where id = (select id from auth.users where email = 'you@sydney.edu.au');
