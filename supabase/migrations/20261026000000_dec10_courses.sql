-- DEC10 next to DEC15 in the same Supabase project (v2.70).
-- Accounts, saved lesson work, class walls and teacher notes are already apart: every DEC10 lesson id starts with
-- "d10" (e.g. d10w1d1). This migration keeps the CLASS around the lessons apart too: each student belongs to one
-- course, and class-wide rows (class chat and private messages, study groups, announcements, class boards) say which
-- course they belong to. Everything that existed before belongs to DEC15 (default 'dec15'), so the DEC15 site keeps
-- working unchanged. Teachers appear in every course. Class switches (answers_open, class_timer, board_live) are kept
-- apart by key in class_settings: DEC10 uses 'dec10:answers_open' and so on (no database change needed).

alter table public.profiles      add column if not exists course text not null default 'dec15' check (course ~ '^[a-z0-9]{2,12}$');
alter table public.messages      add column if not exists course text not null default 'dec15' check (course ~ '^[a-z0-9]{2,12}$');
alter table public.chat_groups   add column if not exists course text not null default 'dec15' check (course ~ '^[a-z0-9]{2,12}$');
alter table public.announcements add column if not exists course text not null default 'dec15' check (course ~ '^[a-z0-9]{2,12}$');
alter table public.boards        add column if not exists course text not null default 'dec15' check (course ~ '^[a-z0-9]{2,12}$');

-- The app reads the course and sets it when a row is created. Students cannot move themselves to another course
-- (no update grant); the teacher does that with the statement at the end of this file.
grant select (course), insert (course) on public.profiles, public.messages, public.chat_groups, public.announcements, public.boards to authenticated;

create index if not exists messages_course_idx on public.messages (course, created_at);
create index if not exists profiles_course_idx on public.profiles (course);

-- Class list of one course: its students plus every teacher. (The old class_people() without a course stays for
-- browsers that still have the previous version of the app open.)
create or replace function public.class_people(p_course text)
returns table (id uuid, full_name text, avatar_url text, role text)
language sql stable security definer set search_path = '' as $fn$
  select p.id, coalesce(nullif(btrim(p.full_name), ''), 'Student'), p.avatar_url, p.role from public.profiles p
  where auth.uid() is not null and (p.role = 'teacher' or p.course = p_course) order by p.role desc, p.full_name;
$fn$;
revoke execute on function public.class_people(text) from public, anon;
grant execute on function public.class_people(text) to authenticated;

-- Anonymous progress counts for one lesson, out of the students of that course.
create or replace function public.class_counts(p_lesson text, p_course text)
returns table (activity_id text, done_count int, students int)
language sql stable security definer set search_path = '' as $fn$
  with s as (select lp.state from public.lesson_progress lp join public.profiles p on p.id = lp.user_id where lp.lesson_id = p_lesson and p.role = 'student' and p.course = p_course),
  n as (select count(*)::int c from public.profiles where role = 'student' and course = p_course)
  select d.key, count(*)::int, (select c from n) from s, jsonb_each(coalesce(s.state -> 'done', '{}'::jsonb)) d
  where auth.uid() is not null and d.value = 'true'::jsonb group by d.key;
$fn$;
revoke execute on function public.class_counts(text, text) from public, anon;
grant execute on function public.class_counts(text, text) to authenticated;

-- Move a student who already has an account (e.g. from DEC15) into DEC10 — run in the SQL editor:
--   update public.profiles set course = 'dec10' where id = (select id from auth.users where email = 'student@uni.sydney.edu.au');
