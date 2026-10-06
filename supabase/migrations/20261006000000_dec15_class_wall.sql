-- DEC15 class wall: comments, shared writing, replies and emoji reactions under each activity.
-- Only signed-in users can read. Students post as themselves (the name comes from their profile,
-- not from the browser), delete only their own posts; teachers can delete any post.

create table if not exists public.wall_posts (
  id uuid primary key default gen_random_uuid(),
  lesson_id text not null check (char_length(lesson_id) <= 40),
  thread text not null check (char_length(thread) <= 60),          -- the activity id
  parent_id uuid references public.wall_posts (id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  author_name text not null default 'Student',
  kind text not null default 'comment' check (kind in ('comment', 'work')),
  label text check (char_length(label) <= 200),
  body text not null check (char_length(btrim(body)) between 1 and 6000),
  created_at timestamptz not null default now()
);
create index if not exists wall_posts_lesson_idx on public.wall_posts (lesson_id, created_at);
create index if not exists wall_posts_parent_idx on public.wall_posts (parent_id);
create index if not exists wall_posts_user_idx on public.wall_posts (user_id);

create table if not exists public.wall_reactions (
  post_id uuid not null references public.wall_posts (id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  lesson_id text not null check (char_length(lesson_id) <= 40),
  emoji text not null check (emoji in ('👍', '❤️', '👏', '💡', '🤔', '😂')),
  created_at timestamptz not null default now(),
  primary key (post_id, user_id, emoji)
);
create index if not exists wall_reactions_lesson_idx on public.wall_reactions (lesson_id);
create index if not exists wall_reactions_user_idx on public.wall_reactions (user_id);

-- The author's name is set by the database from their profile, so nobody can post as someone else.
create or replace function public.wall_set_author()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  new.user_id := auth.uid();
  new.created_at := now();
  new.author_name := coalesce(
    nullif(btrim((select p.full_name from public.profiles p where p.id = auth.uid())), ''),
    nullif(split_part(coalesce(auth.jwt() ->> 'email', ''), '@', 1), ''),
    'Student');
  return new;
end $$;
revoke execute on function public.wall_set_author() from public, anon, authenticated;
drop trigger if exists wall_set_author on public.wall_posts;
create trigger wall_set_author before insert on public.wall_posts
  for each row execute function public.wall_set_author();

alter table public.wall_posts enable row level security;
alter table public.wall_reactions enable row level security;

drop policy if exists "wall read" on public.wall_posts;
create policy "wall read" on public.wall_posts for select to authenticated using (true);
drop policy if exists "wall post" on public.wall_posts;
create policy "wall post" on public.wall_posts for insert to authenticated
  with check (user_id = (select auth.uid()));
drop policy if exists "wall delete" on public.wall_posts;
create policy "wall delete" on public.wall_posts for delete to authenticated
  using (user_id = (select auth.uid()) or (select public.is_teacher()));

drop policy if exists "reactions read" on public.wall_reactions;
create policy "reactions read" on public.wall_reactions for select to authenticated using (true);
drop policy if exists "reactions add" on public.wall_reactions;
create policy "reactions add" on public.wall_reactions for insert to authenticated
  with check (user_id = (select auth.uid()));
drop policy if exists "reactions remove" on public.wall_reactions;
create policy "reactions remove" on public.wall_reactions for delete to authenticated
  using (user_id = (select auth.uid()));

-- No updates: posts are not edited (delete and post again).
revoke update on public.wall_posts, public.wall_reactions from anon, authenticated;
revoke all on public.wall_posts, public.wall_reactions from anon;

-- Live updates in the app.
do $$ begin
  alter publication supabase_realtime add table public.wall_posts;
exception when duplicate_object then null; end $$;
do $$ begin
  alter publication supabase_realtime add table public.wall_reactions;
exception when duplicate_object then null; end $$;
