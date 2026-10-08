-- DEC15 · account settings: change name / student ID, profile picture, wall shows current name + picture.
-- Additive and safe to re-run.

-- 1. Profile picture (a link to the student's own file in the "avatars" storage bucket)
alter table public.profiles add column if not exists avatar_url text not null default '';
alter table public.profiles drop constraint if exists profiles_avatar_own_file;
alter table public.profiles add constraint profiles_avatar_own_file check (
  avatar_url = '' or avatar_url like '%/storage/v1/object/public/avatars/' || id::text || '/%');
alter table public.profiles drop constraint if exists profiles_name_len;
alter table public.profiles add constraint profiles_name_len check (char_length(full_name) <= 80 and char_length(student_id) <= 30) not valid;
grant insert (id, full_name, student_id, avatar_url) on public.profiles to authenticated;
grant update (full_name, student_id, avatar_url) on public.profiles to authenticated;

-- 2. Class wall: posts carry the author's picture too
alter table public.wall_posts add column if not exists author_avatar text not null default '';
create or replace function public.wall_set_author()
returns trigger language plpgsql security definer set search_path = '' as $$
declare p record;
begin
  select full_name, avatar_url into p from public.profiles where id = auth.uid();
  new.user_id := auth.uid();
  new.created_at := now();
  new.author_name := coalesce(nullif(btrim(p.full_name), ''), nullif(split_part(coalesce(auth.jwt() ->> 'email', ''), '@', 1), ''), 'Student');
  new.author_avatar := coalesce(p.avatar_url, '');
  return new;
end $$;
revoke execute on function public.wall_set_author() from public, anon, authenticated;

-- When a student changes their name or picture, their earlier wall posts show the new ones.
create or replace function public.profiles_sync_wall()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if new.full_name is distinct from old.full_name or new.avatar_url is distinct from old.avatar_url then
    update public.wall_posts set
      author_name = coalesce(nullif(btrim(new.full_name), ''), author_name),
      author_avatar = new.avatar_url
    where user_id = new.id;
  end if;
  return new;
end $$;
revoke execute on function public.profiles_sync_wall() from public, anon, authenticated;
drop trigger if exists profiles_sync_wall on public.profiles;
create trigger profiles_sync_wall after update of full_name, avatar_url on public.profiles
  for each row execute function public.profiles_sync_wall();

-- 3. Storage bucket for pictures: public to read, max 512 KB, images only.
--    Each student may write only inside their own folder:  avatars/<their user id>/...
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 524288, array['image/webp', 'image/jpeg', 'image/png'])
on conflict (id) do update set public = true, file_size_limit = 524288, allowed_mime_types = array['image/webp', 'image/jpeg', 'image/png'];

drop policy if exists "avatars: read own" on storage.objects;
create policy "avatars: read own" on storage.objects for select to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);
drop policy if exists "avatars: upload own" on storage.objects;
create policy "avatars: upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);
drop policy if exists "avatars: replace own" on storage.objects;
create policy "avatars: replace own" on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);
drop policy if exists "avatars: remove own" on storage.objects;
create policy "avatars: remove own" on storage.objects for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid())::text);
