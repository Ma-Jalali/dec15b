-- DEC15 classroom (v2.30): teacher role, class settings, messages, class board, teacher-only notes,
-- planner sharing, shared writing and live channels. Already applied to the project.
-- NOTE: the text of the teacher notes is NOT in this repository. It is stored only in public.teacher_notes
-- (readable by teachers only). The lesson files keep a reference: { type: 'teacher', ref: 'w2d5-t1' }.

-- 1. Teacher role -----------------------------------------------------------------------------------------
-- Teacher emails are listed here. The role is given only after the person proves they own the inbox
-- (they sign in with an email link, a password-reset link or Google), because the sign-up function
-- creates accounts without checking the address.
create table if not exists public.teacher_emails (email text primary key check (email = lower(email)));
alter table public.teacher_emails enable row level security;
revoke all on public.teacher_emails from anon, authenticated;
insert into public.teacher_emails (email) values ('mahyarjalaliii@gmail.com') on conflict do nothing;

create or replace function public.claim_teacher()
returns text language plpgsql security definer set search_path = '' as $fn$
declare em text := lower(coalesce(auth.jwt() ->> 'email', '')); amr jsonb := coalesce(auth.jwt() -> 'amr', '[]'::jsonb); proven boolean;
begin
  if auth.uid() is null then return 'signed_out'; end if;
  if not exists (select 1 from public.teacher_emails t where t.email = em) then
    return coalesce((select p.role from public.profiles p where p.id = auth.uid()), 'student');
  end if;
  if exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher') then return 'teacher'; end if;
  select exists (select 1 from jsonb_array_elements(amr) a where a ->> 'method' in ('otp', 'magiclink', 'recovery', 'oauth')) into proven;
  if not proven then return 'needs_email_link'; end if;
  insert into public.profiles (id, full_name, role) values (auth.uid(), coalesce(nullif(auth.jwt() -> 'user_metadata' ->> 'full_name', ''), 'Teacher'), 'teacher')
    on conflict (id) do update set role = 'teacher';
  return 'teacher';
end $fn$;
revoke execute on function public.claim_teacher() from public, anon;
grant execute on function public.claim_teacher() to authenticated;

-- 2. Class settings (e.g. answers_open), read by everyone, changed by teachers ---------------------------
create table if not exists public.class_settings (
  key text primary key check (char_length(key) <= 60),
  value jsonb not null default 'null'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.class_settings enable row level security;
revoke all on public.class_settings from anon, authenticated;
grant select on public.class_settings to anon, authenticated;
grant insert, update on public.class_settings to authenticated;
create policy "settings: everyone reads" on public.class_settings for select to anon, authenticated using (true);
create policy "settings: teacher writes" on public.class_settings for insert to authenticated with check ((select public.is_teacher()));
create policy "settings: teacher updates" on public.class_settings for update to authenticated using ((select public.is_teacher())) with check ((select public.is_teacher()));
insert into public.class_settings (key, value) values ('answers_open', 'false'::jsonb) on conflict do nothing;

-- 3. Class list (names and pictures only) and anonymous progress counts --------------------------------------
create or replace function public.class_people()
returns table (id uuid, full_name text, avatar_url text, role text)
language sql stable security definer set search_path = '' as $fn$
  select p.id, coalesce(nullif(btrim(p.full_name), ''), 'Student'), p.avatar_url, p.role from public.profiles p
  where auth.uid() is not null order by p.role desc, p.full_name;
$fn$;
revoke execute on function public.class_people() from public, anon;
grant execute on function public.class_people() to authenticated;

create or replace function public.class_counts(p_lesson text)
returns table (activity_id text, done_count int, students int)
language sql stable security definer set search_path = '' as $fn$
  with s as (select lp.state from public.lesson_progress lp join public.profiles p on p.id = lp.user_id where lp.lesson_id = p_lesson and p.role = 'student'),
  n as (select count(*)::int c from public.profiles where role = 'student')
  select d.key, count(*)::int, (select c from n) from s, jsonb_each(coalesce(s.state -> 'done', '{}'::jsonb)) d
  where auth.uid() is not null and d.value = 'true'::jsonb group by d.key;
$fn$;
revoke execute on function public.class_counts(text) from public, anon;
grant execute on function public.class_counts(text) to authenticated;

-- 4. Messages: class chat (recipient_id null) and private messages -------------------------------------------
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  sender_name text not null default 'Student',
  sender_role text not null default 'student',
  recipient_id uuid references auth.users (id) on delete cascade,
  body text not null check (char_length(btrim(body)) between 1 and 2000),
  created_at timestamptz not null default now(),
  read_at timestamptz
);
create index if not exists messages_recipient_idx on public.messages (recipient_id, created_at);
create index if not exists messages_sender_idx on public.messages (sender_id, created_at);
create or replace function public.messages_set_sender()
returns trigger language plpgsql security definer set search_path = '' as $fn$
begin
  new.sender_id := auth.uid(); new.created_at := now(); new.read_at := null;
  select coalesce(nullif(btrim(p.full_name), ''), 'Student'), p.role into new.sender_name, new.sender_role from public.profiles p where p.id = auth.uid();
  new.sender_name := coalesce(new.sender_name, 'Student'); new.sender_role := coalesce(new.sender_role, 'student');
  return new;
end $fn$;
revoke execute on function public.messages_set_sender() from public, anon, authenticated;
create trigger messages_set_sender before insert on public.messages for each row execute function public.messages_set_sender();
alter table public.messages enable row level security;
revoke all on public.messages from anon, authenticated;
grant select, insert, delete on public.messages to authenticated;
grant update (read_at) on public.messages to authenticated;
create policy "messages: read class or own" on public.messages for select to authenticated using (recipient_id is null or sender_id = (select auth.uid()) or recipient_id = (select auth.uid()));
create policy "messages: send as yourself" on public.messages for insert to authenticated with check (sender_id = (select auth.uid()));
create policy "messages: mark read" on public.messages for update to authenticated using (recipient_id = (select auth.uid())) with check (recipient_id = (select auth.uid()));
create policy "messages: delete own or teacher" on public.messages for delete to authenticated using (sender_id = (select auth.uid()) or (select public.is_teacher()));

-- 5. Class board (teacher writes, the class reads live) and teacher-only notes -------------------------------
create table if not exists public.boards (
  id uuid primary key default gen_random_uuid(),
  title text not null default 'Board' check (char_length(title) <= 120),
  content jsonb not null default '{}'::jsonb,
  sketch jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.boards enable row level security;
revoke all on public.boards from anon, authenticated;
grant select, insert, update, delete on public.boards to authenticated;
create policy "boards: class reads" on public.boards for select to authenticated using (true);
create policy "boards: teacher adds" on public.boards for insert to authenticated with check ((select public.is_teacher()));
create policy "boards: teacher edits" on public.boards for update to authenticated using ((select public.is_teacher())) with check ((select public.is_teacher()));
create policy "boards: teacher deletes" on public.boards for delete to authenticated using ((select public.is_teacher()));
create table if not exists public.teacher_notes (
  ref text primary key check (char_length(ref) <= 60),
  lesson_id text not null,
  body text not null
);
alter table public.teacher_notes enable row level security;
revoke all on public.teacher_notes from anon, authenticated;
grant select on public.teacher_notes to authenticated;
create policy "teacher notes: teacher only" on public.teacher_notes for select to authenticated using ((select public.is_teacher()));

-- 6. Planner sharing (read-only for the people it is shared with) ---------------------------------------------
create table if not exists public.planner_shares (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  owner_name text not null default 'Student',
  item_id text not null check (char_length(item_id) <= 64),
  root_id text not null check (char_length(root_id) <= 64),
  root_title text not null default '' check (char_length(root_title) <= 200),
  recipient_id uuid references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
create unique index if not exists planner_shares_unique on public.planner_shares (owner_id, item_id, coalesce(recipient_id, '00000000-0000-0000-0000-000000000000'::uuid));
create index if not exists planner_shares_recipient_idx on public.planner_shares (recipient_id);
create index if not exists planner_shares_item_idx on public.planner_shares (owner_id, item_id);
create or replace function public.planner_shares_set_owner()
returns trigger language plpgsql security definer set search_path = '' as $fn$
begin
  new.owner_id := auth.uid(); new.created_at := now();
  new.owner_name := coalesce((select nullif(btrim(p.full_name), '') from public.profiles p where p.id = auth.uid()), 'Student');
  return new;
end $fn$;
revoke execute on function public.planner_shares_set_owner() from public, anon, authenticated;
create trigger planner_shares_set_owner before insert on public.planner_shares for each row execute function public.planner_shares_set_owner();
alter table public.planner_shares enable row level security;
revoke all on public.planner_shares from anon, authenticated;
grant select, insert, delete on public.planner_shares to authenticated;
create policy "shares: owner or recipient reads" on public.planner_shares for select to authenticated using (owner_id = (select auth.uid()) or recipient_id is null or recipient_id = (select auth.uid()));
create policy "shares: owner shares own items" on public.planner_shares for insert to authenticated with check (owner_id = (select auth.uid()) and exists (select 1 from public.planner_items i where i.user_id = (select auth.uid()) and i.id = item_id));
create policy "shares: owner stops sharing" on public.planner_shares for delete to authenticated using (owner_id = (select auth.uid()));
create policy "planner: read what is shared with you" on public.planner_items for select to authenticated using (exists (select 1 from public.planner_shares s where s.owner_id = planner_items.user_id and s.item_id = planner_items.id and (s.recipient_id is null or s.recipient_id = (select auth.uid()))));

-- 7. Write together: shared documents as an append-only list of updates (CRDT, merged in the browser) --------
create table if not exists public.shared_doc_updates (
  id bigserial primary key,
  doc_id text not null check (char_length(doc_id) <= 120),
  lesson_id text not null default '' check (char_length(lesson_id) <= 40),
  snapshot boolean not null default false,
  update text not null check (char_length(update) <= 400000),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
create index if not exists shared_doc_updates_doc_idx on public.shared_doc_updates (doc_id, id);
create index if not exists shared_doc_updates_user_idx on public.shared_doc_updates (user_id);
alter table public.shared_doc_updates enable row level security;
revoke all on public.shared_doc_updates from anon, authenticated;
grant select, insert, delete on public.shared_doc_updates to authenticated;
grant usage, select on sequence public.shared_doc_updates_id_seq to authenticated;
create policy "docs: class reads" on public.shared_doc_updates for select to authenticated using (true);
create policy "docs: class writes" on public.shared_doc_updates for insert to authenticated with check (user_id = (select auth.uid()));
create policy "docs: teacher clears" on public.shared_doc_updates for delete to authenticated using ((select public.is_teacher()));

-- 8. Live updates -------------------------------------------------------------------------------------------
alter publication supabase_realtime add table public.messages, public.boards, public.class_settings, public.planner_shares;
-- Private broadcast/presence channels whose names start with "dec15:" (signed-in users only).
create policy "dec15 class channels: read" on realtime.messages for select to authenticated using (realtime.topic() like 'dec15:%');
create policy "dec15 class channels: send" on realtime.messages for insert to authenticated with check (realtime.topic() like 'dec15:%');

-- 9. TRUNCATE ignores row-level security: signed-in users must not hold it ------------------------------------
revoke truncate, trigger, references on public.wall_posts, public.wall_reactions, public.lesson_progress, public.planner_items, public.profiles from authenticated, anon;

-- 10. Class discussion v2: questions and ideas, teacher pins, "answered", teacher badge --------------------------
alter table public.wall_posts drop constraint if exists wall_posts_kind_check;
alter table public.wall_posts add constraint wall_posts_kind_check check (kind = any (array['comment','work','question','idea'])) not valid;
alter table public.wall_posts add column if not exists author_role text not null default 'student';
alter table public.wall_posts add column if not exists pinned boolean not null default false;
alter table public.wall_posts add column if not exists answered boolean not null default false;
create or replace function public.wall_set_author()
returns trigger language plpgsql security definer set search_path = '' as $fn$
declare p record;
begin
  select full_name, avatar_url, role into p from public.profiles where id = auth.uid();
  new.user_id := auth.uid();
  new.created_at := now();
  new.author_name := coalesce(nullif(btrim(p.full_name), ''), nullif(split_part(coalesce(auth.jwt() ->> 'email', ''), '@', 1), ''), 'Student');
  new.author_avatar := coalesce(p.avatar_url, '');
  new.author_role := coalesce(p.role, 'student');
  new.pinned := false; new.answered := false;
  return new;
end $fn$;
-- only the teacher can pin; the author or the teacher can mark a question answered
create or replace function public.wall_guard_update()
returns trigger language plpgsql security definer set search_path = '' as $fn$
begin
  if not public.is_teacher() then new.pinned := old.pinned; end if;
  return new;
end $fn$;
revoke execute on function public.wall_guard_update() from public, anon, authenticated;
create trigger wall_guard_update before update on public.wall_posts for each row execute function public.wall_guard_update();
grant update (pinned, answered) on public.wall_posts to authenticated;
create policy "wall mark" on public.wall_posts for update to authenticated
  using (user_id = (select auth.uid()) or (select public.is_teacher()))
  with check (user_id = (select auth.uid()) or (select public.is_teacher()));

-- 11. Class whiteboard (v2.31): one row per shape; the newer version wins --------------------------------------
alter table public.boards add column if not exists wb_open boolean not null default false;
alter table public.boards add column if not exists view text not null default 'notes' check (view in ('notes', 'whiteboard'));
create table if not exists public.board_elements (
  board_id uuid not null references public.boards (id) on delete cascade,
  id text not null check (char_length(id) <= 64),
  version integer not null default 1,
  data jsonb not null check (pg_column_size(data) < 200000),
  updated_by uuid not null default auth.uid() references auth.users (id) on delete cascade,
  updated_at timestamptz not null default now(),
  primary key (board_id, id)
);
alter table public.board_elements enable row level security;
revoke all on public.board_elements from anon, authenticated;
grant select, insert, update, delete on public.board_elements to authenticated;
create or replace function public.board_elements_guard()
returns trigger language plpgsql security definer set search_path = '' as $fn$
begin
  new.updated_by := auth.uid(); new.updated_at := now();
  if tg_op = 'UPDATE' and new.version < old.version then return null; end if;
  return new;
end $fn$;
revoke execute on function public.board_elements_guard() from public, anon, authenticated;
create trigger board_elements_guard before insert or update on public.board_elements for each row execute function public.board_elements_guard();
create policy "whiteboard: class reads" on public.board_elements for select to authenticated using (true);
create policy "whiteboard: teacher or open board adds" on public.board_elements for insert to authenticated
  with check ((select public.is_teacher()) or exists (select 1 from public.boards b where b.id = board_id and b.wb_open));
create policy "whiteboard: teacher or open board changes" on public.board_elements for update to authenticated
  using ((select public.is_teacher()) or exists (select 1 from public.boards b where b.id = board_id and b.wb_open))
  with check ((select public.is_teacher()) or exists (select 1 from public.boards b where b.id = board_id and b.wb_open));
create policy "whiteboard: teacher removes" on public.board_elements for delete to authenticated using ((select public.is_teacher()));
alter publication supabase_realtime add table public.board_elements;
