-- Chats: send a PDF (e.g. a filled Feedback Tool) to a chat, a group or several classmates at once.
-- (Applied to the live project on 5 Nov 2026.)
alter table public.messages drop constraint messages_kind_check;
alter table public.messages add constraint messages_kind_check check (kind = any (array['text','poll','word','question','link','file']));

-- a private bucket: PDFs only, 10 MB each. Files live under <uploader id>/<random>.pdf
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('chat-files', 'chat-files', false, 10485760, array['application/pdf'])
on conflict (id) do update set public = false, file_size_limit = 10485760, allowed_mime_types = array['application/pdf'];

-- upload only into your own folder
create policy "chat-files: upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'chat-files' and (storage.foldername(name))[1] = (select auth.uid())::text);
-- remove only your own files
create policy "chat-files: remove own" on storage.objects for delete to authenticated
  using (bucket_id = 'chat-files' and (storage.foldername(name))[1] = (select auth.uid())::text);
-- read: your own files, or a file that its uploader sent in a message you are allowed to see
-- (the messages table's own row-level security decides which messages you can see)
create policy "chat-files: read own or sent to you" on storage.objects for select to authenticated
  using (bucket_id = 'chat-files' and (
    (storage.foldername(name))[1] = (select auth.uid())::text
    or exists (select 1 from public.messages m
               where m.kind = 'file' and m.data->>'path' = storage.objects.name
                 and m.sender_id::text = (storage.foldername(storage.objects.name))[1])));
