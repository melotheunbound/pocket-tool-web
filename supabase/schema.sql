do $$
begin
  if to_regclass('public.oauth2') is null and to_regclass('public.installations') is not null then
    alter table public.installations rename to oauth2;
  end if;
end
$$;

create table if not exists public.oauth2 (
  user_id text primary key,
  exchange jsonb not null default '{}'::jsonb
);

drop table if exists public.bot_events;

alter table public.oauth2 enable row level security;
revoke all on public.oauth2 from anon, authenticated;
