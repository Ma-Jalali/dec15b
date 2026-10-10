-- DEC15 v2.33 · Shared forms ("Share with classmates" → "Shared with me").
-- A student (or the teacher) sends a read-only copy of a filled-in form to chosen classmates,
-- e.g. a peer-feedback form after watching another group's discussion. Only the sender and the
-- recipient can read a share. The sender can update it (send again) or delete it; the recipient can
-- mark it as read or remove it from their inbox.

create table if not exists public.form_shares (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  sender_name text not null default 'Student',
  sender_role text not null default 'student',
  recipient_id uuid not null references auth.users (id) on delete cascade,
  lesson_id text not null check (char_length(lesson_id) <= 20),
  block_id text not null check (char_length(block_id) <= 64),
  title text not null default '' check (char_length(title) <= 200),
  place text not null default '' check (char_length(place) <= 200),
  note text not null default '' check (char_length(note) <= 1000),
  body jsonb not null default '{}'::jsonb check (pg_column_size(body) <= 200000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  read_at timestamptz,
  constraint form_shares_not_self check (recipient_id <> sender_id)
);
create unique index if not exists form_shares_unique on public.form_shares (sender_id, recipient_id, lesson_id, block_id);
create index if not exists form_shares_recipient_idx on public.form_shares (recipient_id, updated_at desc);

-- The server sets who sent it, their name and the times; a recipient can change read_at only.
create or replace function public.form_shares_guard()
returns trigger language plpgsql security definer set search_path = '' as $fn$
begin
  if tg_op = 'INSERT' then
    new.sender_id := auth.uid(); new.created_at := now(); new.updated_at := now(); new.read_at := null;
    select coalesce(nullif(btrim(p.full_name), ''), 'Student'), p.role into new.sender_name, new.sender_role from public.profiles p where p.id = auth.uid();
    new.sender_name := coalesce(new.sender_name, 'Student'); new.sender_role := coalesce(new.sender_role, 'student');
    return new;
  end if;
  if auth.uid() = old.sender_id then   -- sending again: new content, unread again
    new.id := old.id; new.sender_id := old.sender_id; new.recipient_id := old.recipient_id; new.lesson_id := old.lesson_id; new.block_id := old.block_id;
    new.created_at := old.created_at; new.sender_name := old.sender_name; new.sender_role := old.sender_role;
    new.updated_at := now(); new.read_at := null;
    return new;
  end if;
  -- the recipient: only read_at may change
  new.title := old.title; new.place := old.place; new.note := old.note; new.body := old.body;
  new.id := old.id; new.sender_id := old.sender_id; new.recipient_id := old.recipient_id; new.lesson_id := old.lesson_id; new.block_id := old.block_id;
  new.sender_name := old.sender_name; new.sender_role := old.sender_role; new.created_at := old.created_at; new.updated_at := old.updated_at;
  return new;
end $fn$;
revoke execute on function public.form_shares_guard() from public, anon, authenticated;
drop trigger if exists form_shares_guard on public.form_shares;
create trigger form_shares_guard before insert or update on public.form_shares for each row execute function public.form_shares_guard();

alter table public.form_shares enable row level security;
revoke all on public.form_shares from anon, authenticated;
grant select, insert, delete on public.form_shares to authenticated;
grant update (title, place, note, body, read_at) on public.form_shares to authenticated;
create policy "form shares: sender or recipient reads" on public.form_shares for select to authenticated
  using (sender_id = (select auth.uid()) or recipient_id = (select auth.uid()));
create policy "form shares: send as yourself to a classmate" on public.form_shares for insert to authenticated
  with check (sender_id = (select auth.uid()) and recipient_id <> (select auth.uid())
    and exists (select 1 from public.class_people() cp where cp.id = recipient_id));   -- class_people() can see every classmate
create policy "form shares: sender updates, recipient marks read" on public.form_shares for update to authenticated
  using (sender_id = (select auth.uid()) or recipient_id = (select auth.uid()))
  with check (sender_id = (select auth.uid()) or recipient_id = (select auth.uid()));
create policy "form shares: sender or recipient removes" on public.form_shares for delete to authenticated
  using (sender_id = (select auth.uid()) or recipient_id = (select auth.uid()));

-- live "X shared a form with you" notices
do $$ begin
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'form_shares') then
    alter publication supabase_realtime add table public.form_shares;
  end if;
end $$;
