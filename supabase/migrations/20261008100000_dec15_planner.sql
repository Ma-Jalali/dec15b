-- DEC15 · "My planner": each student's private notes, folders, calendars (max 3) and to-dos.
-- Separate from lesson_progress (the lesson notebook). OWNER ONLY: there is deliberately no teacher policy.
-- Applied to the project on 8 Oct 2026.
create table if not exists public.planner_items (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  id text not null check (char_length(id) between 8 and 64),
  kind text not null check (kind in ('note', 'folder', 'calendar', 'task')),
  data jsonb not null default '{}'::jsonb check (octet_length(data::text) <= 600000),
  deleted boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);
create index if not exists planner_items_user_updated on public.planner_items (user_id, updated_at);
alter table public.planner_items enable row level security;
revoke all on public.planner_items from anon;
create policy "planner: owner only" on public.planner_items for all to authenticated
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- At most 3 calendars per student, checked by the database too.
create or replace function public.planner_calendar_limit()
returns trigger language plpgsql set search_path = '' as $fn$
begin
  if new.kind = 'calendar' and not new.deleted and (
    select count(*) from public.planner_items p
    where p.user_id = new.user_id and p.kind = 'calendar' and not p.deleted and p.id <> new.id) >= 3 then
    raise exception 'calendar_limit' using hint = 'A planner can have at most 3 calendars.';
  end if;
  return new;
end $fn$;
revoke execute on function public.planner_calendar_limit() from public, anon, authenticated;
create trigger planner_calendar_limit before insert or update on public.planner_items
  for each row execute function public.planner_calendar_limit();
