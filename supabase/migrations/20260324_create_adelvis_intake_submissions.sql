create extension if not exists pgcrypto;

create table if not exists public.adelvis_intake_submissions (
  id uuid primary key default gen_random_uuid(),
  intake_key text not null,
  respondent_name text not null,
  questionnaire_type text not null default 'ideal-client-definition',
  answers jsonb not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

comment on table public.adelvis_intake_submissions is
  'Stores Adelvis ideal client definition submissions captured from the VibeLife landing page.';

create index if not exists adelvis_intake_submissions_created_at_idx
  on public.adelvis_intake_submissions (created_at desc);

create index if not exists adelvis_intake_submissions_type_idx
  on public.adelvis_intake_submissions (questionnaire_type);

alter table public.adelvis_intake_submissions enable row level security;

drop policy if exists "Allow Adelvis intake inserts" on public.adelvis_intake_submissions;

create policy "Allow Adelvis intake inserts"
  on public.adelvis_intake_submissions
  for insert
  to anon, authenticated
  with check (true);
