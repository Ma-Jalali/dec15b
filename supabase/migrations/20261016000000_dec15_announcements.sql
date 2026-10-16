-- DEC15 class announcements: the teacher sends a message that pops up on every student's screen.
-- Students press "Got it" (a read receipt) and may send a short reply. Applied to the project with the Supabase MCP.
create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  body text not null check (char_length(body) between 1 and 600),
  allow_reply boolean not null default true,
  active boolean not null default true,
  created_by uuid not null default auth.uid() references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.announcements enable row level security;
create policy "announcements: class reads" on public.announcements for select to authenticated using (true);
create policy "announcements: teacher sends" on public.announcements for insert to authenticated with check ((select public.is_teacher()) and created_by = (select auth.uid()));
create policy "announcements: teacher updates" on public.announcements for update to authenticated using ((select public.is_teacher())) with check ((select public.is_teacher()));

create table if not exists public.announcement_reads (
  announcement_id uuid not null references public.announcements(id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  seen_at timestamptz not null default now(),
  reply text check (reply is null or char_length(reply) <= 500),
  replied_at timestamptz,
  primary key (announcement_id, user_id)
);
alter table public.announcement_reads enable row level security;
create policy "reads: own or teacher" on public.announcement_reads for select to authenticated using (user_id = (select auth.uid()) or (select public.is_teacher()));
create policy "reads: add own" on public.announcement_reads for insert to authenticated with check (user_id = (select auth.uid()));
create policy "reads: change own" on public.announcement_reads for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create index if not exists announcement_reads_user on public.announcement_reads (user_id);

alter publication supabase_realtime add table public.announcements;
alter publication supabase_realtime add table public.announcement_reads;
