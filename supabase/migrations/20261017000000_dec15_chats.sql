-- DEC15 Chats (v2.49): a WhatsApp-style hub on its own page (#/chats) for signed-in classmates.
-- Adds study groups, replies, reactions, polls, word cards, "help needed" questions, lesson links and pins
-- on top of the existing messages table (class chat = no recipient and no group; private = recipient_id).
-- Applied to the project with the Supabase MCP.

-- 1. study groups and their members -------------------------------------------------------------------------
create table if not exists public.chat_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 60),
  emoji text not null default '📚' check (char_length(emoji) between 1 and 8),
  color text not null default 'teal' check (color in ('teal', 'coral', 'blue', 'plum', 'saffron', 'sage')),
  about text check (about is null or char_length(about) <= 200),
  created_by uuid not null default auth.uid() references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
create table if not exists public.chat_members (
  group_id uuid not null references public.chat_groups (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  added_by uuid default auth.uid() references auth.users (id) on delete set null,
  joined_at timestamptz not null default now(),
  last_read_at timestamptz not null default now(),
  primary key (group_id, user_id)
);
create index if not exists chat_members_user_idx on public.chat_members (user_id);

create or replace function public.is_chat_member(g uuid)
returns boolean language sql stable security definer set search_path = '' as $fn$
  select exists (select 1 from public.chat_members m where m.group_id = g and m.user_id = (select auth.uid()));
$fn$;
create or replace function public.is_chat_owner(g uuid)
returns boolean language sql stable security definer set search_path = '' as $fn$
  select exists (select 1 from public.chat_groups c where c.id = g and c.created_by = (select auth.uid()));
$fn$;
revoke execute on function public.is_chat_member(uuid) from public, anon;
revoke execute on function public.is_chat_owner(uuid) from public, anon;
grant execute on function public.is_chat_member(uuid) to authenticated;
grant execute on function public.is_chat_owner(uuid) to authenticated;

-- the person who creates a group is its first member
create or replace function public.chat_groups_add_owner()
returns trigger language plpgsql security definer set search_path = '' as $fn$
begin
  insert into public.chat_members (group_id, user_id, added_by) values (new.id, new.created_by, new.created_by) on conflict do nothing;
  return new;
end $fn$;
revoke execute on function public.chat_groups_add_owner() from public, anon, authenticated;
create trigger chat_groups_add_owner after insert on public.chat_groups for each row execute function public.chat_groups_add_owner();

alter table public.chat_groups enable row level security;
revoke all on public.chat_groups from anon, authenticated;
grant select, insert, delete on public.chat_groups to authenticated;
grant update (name, emoji, color, about) on public.chat_groups to authenticated;
create policy "chat groups: members and teacher read" on public.chat_groups for select to authenticated
  using ((select public.is_chat_member(id)) or created_by = (select auth.uid()) or (select public.is_teacher()));
create policy "chat groups: anyone signed in creates" on public.chat_groups for insert to authenticated
  with check (created_by = (select auth.uid()));
create policy "chat groups: owner or teacher edits" on public.chat_groups for update to authenticated
  using (created_by = (select auth.uid()) or (select public.is_teacher())) with check (created_by = (select auth.uid()) or (select public.is_teacher()));
create policy "chat groups: owner or teacher deletes" on public.chat_groups for delete to authenticated
  using (created_by = (select auth.uid()) or (select public.is_teacher()));

alter table public.chat_members enable row level security;
revoke all on public.chat_members from anon, authenticated;
grant select, insert, delete on public.chat_members to authenticated;
grant update (last_read_at) on public.chat_members to authenticated;
create policy "chat members: members and teacher read" on public.chat_members for select to authenticated
  using ((select public.is_chat_member(group_id)) or (select public.is_teacher()));
create policy "chat members: members add classmates" on public.chat_members for insert to authenticated
  with check (((select public.is_chat_member(group_id)) or (select public.is_chat_owner(group_id)) or (select public.is_teacher()))
    and exists (select 1 from public.class_people() cp where cp.id = user_id));
create policy "chat members: mark own read" on public.chat_members for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "chat members: leave, or owner or teacher removes" on public.chat_members for delete to authenticated
  using (user_id = (select auth.uid()) or (select public.is_chat_owner(group_id)) or (select public.is_teacher()));

-- 2. richer messages ------------------------------------------------------------------------------------------
alter table public.messages add column if not exists group_id uuid references public.chat_groups (id) on delete cascade;
alter table public.messages add column if not exists kind text not null default 'text';
alter table public.messages add column if not exists data jsonb;
alter table public.messages add column if not exists reply_to uuid references public.messages (id) on delete set null;
alter table public.messages add column if not exists pinned_at timestamptz;
alter table public.messages add column if not exists solved_at timestamptz;
alter table public.messages add constraint messages_kind_check check (kind in ('text', 'poll', 'word', 'question', 'link'));
alter table public.messages add constraint messages_data_size check (data is null or pg_column_size(data) <= 4000);
alter table public.messages add constraint messages_one_place check (group_id is null or recipient_id is null);
create index if not exists messages_group_idx on public.messages (group_id, created_at);

create or replace function public.messages_set_sender()
returns trigger language plpgsql security definer set search_path = '' as $fn$
begin
  new.sender_id := auth.uid(); new.created_at := now(); new.read_at := null; new.pinned_at := null; new.solved_at := null;
  select coalesce(nullif(btrim(p.full_name), ''), 'Student'), p.role into new.sender_name, new.sender_role from public.profiles p where p.id = auth.uid();
  new.sender_name := coalesce(new.sender_name, 'Student'); new.sender_role := coalesce(new.sender_role, 'student');
  return new;
end $fn$;

alter policy "messages: read class or own" on public.messages
  using ((recipient_id is null and group_id is null) or sender_id = (select auth.uid()) or recipient_id = (select auth.uid())
    or (group_id is not null and ((select public.is_chat_member(group_id)) or (select public.is_teacher()))));
alter policy "messages: send as yourself" on public.messages
  with check (sender_id = (select auth.uid()) and (group_id is null or (select public.is_chat_member(group_id))));

-- pin a message (teacher in the class chat, the owner or teacher in a group, either person in a private chat)
create or replace function public.chat_pin(p_id uuid, p_on boolean)
returns timestamptz language plpgsql security definer set search_path = '' as $fn$
declare m public.messages; t timestamptz;
begin
  select * into m from public.messages where id = p_id;
  if m.id is null then raise exception 'not found'; end if;
  if not ((m.group_id is null and m.recipient_id is null and public.is_teacher())
    or (m.group_id is not null and (public.is_chat_owner(m.group_id) or public.is_teacher()))
    or (m.recipient_id is not null and (m.sender_id = auth.uid() or m.recipient_id = auth.uid()))) then raise exception 'not allowed'; end if;
  t := case when p_on then now() else null end;
  update public.messages set pinned_at = t where id = p_id;
  return t;
end $fn$;
-- the person who asked marks a "help needed" question as solved
create or replace function public.chat_solve(p_id uuid, p_on boolean)
returns timestamptz language plpgsql security definer set search_path = '' as $fn$
declare m public.messages; t timestamptz;
begin
  select * into m from public.messages where id = p_id;
  if m.id is null or m.kind <> 'question' then raise exception 'not found'; end if;
  if not (m.sender_id = auth.uid() or public.is_teacher()) then raise exception 'not allowed'; end if;
  t := case when p_on then now() else null end;
  update public.messages set solved_at = t where id = p_id;
  return t;
end $fn$;
revoke execute on function public.chat_pin(uuid, boolean) from public, anon;
revoke execute on function public.chat_solve(uuid, boolean) from public, anon;
grant execute on function public.chat_pin(uuid, boolean) to authenticated;
grant execute on function public.chat_solve(uuid, boolean) to authenticated;

-- 3. reactions and poll votes (visible to whoever can see the message) -------------------------------------
create table if not exists public.chat_reactions (
  message_id uuid not null references public.messages (id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  emoji text not null check (emoji in ('👍', '❤️', '😂', '😮', '🙏', '💡', '✅', '👏')),
  created_at timestamptz not null default now(),
  primary key (message_id, user_id, emoji)
);
alter table public.chat_reactions enable row level security;
revoke all on public.chat_reactions from anon, authenticated;
grant select, insert, delete on public.chat_reactions to authenticated;
create policy "chat reactions: read with the message" on public.chat_reactions for select to authenticated
  using (exists (select 1 from public.messages m where m.id = message_id));
create policy "chat reactions: add own" on public.chat_reactions for insert to authenticated
  with check (user_id = (select auth.uid()) and exists (select 1 from public.messages m where m.id = message_id));
create policy "chat reactions: remove own" on public.chat_reactions for delete to authenticated using (user_id = (select auth.uid()));

create table if not exists public.chat_votes (
  message_id uuid not null references public.messages (id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  choice int not null check (choice between 0 and 5),
  created_at timestamptz not null default now(),
  primary key (message_id, user_id)
);
alter table public.chat_votes enable row level security;
revoke all on public.chat_votes from anon, authenticated;
grant select, insert, delete on public.chat_votes to authenticated;
grant update (choice) on public.chat_votes to authenticated;
create policy "chat votes: read with the poll" on public.chat_votes for select to authenticated
  using (exists (select 1 from public.messages m where m.id = message_id));
create policy "chat votes: vote as yourself" on public.chat_votes for insert to authenticated
  with check (user_id = (select auth.uid()) and exists (select 1 from public.messages m where m.id = message_id and m.kind = 'poll'));
create policy "chat votes: change own" on public.chat_votes for update to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "chat votes: remove own" on public.chat_votes for delete to authenticated using (user_id = (select auth.uid()));

alter publication supabase_realtime add table public.chat_groups, public.chat_members, public.chat_reactions, public.chat_votes;
