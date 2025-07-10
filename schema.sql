-- Habilitar a extensão uuid-ossp se ainda não estiver habilitada
create extension if not exists "uuid-ossp";

-- Remover políticas existentes
drop policy if exists "Bebidas são visíveis para todos" on bebidas;
drop policy if exists "Qualquer pessoa pode ver avaliações" on avaliacoes;
drop policy if exists "Qualquer pessoa pode criar avaliações" on avaliacoes;
drop policy if exists "Qualquer pessoa pode inserir bebidas" on bebidas;
drop policy if exists "Qualquer pessoa pode deletar bebidas" on bebidas;

-- Remover coluna de imagem
alter table bebidas drop column if exists imagem_url;

-- Criar tabela de bebidas
create table if not exists bebidas (
    id uuid default uuid_generate_v4() primary key,
    nome text not null,
    categoria text not null,
    origem text,
    historia text,
    caracteristicas text,
    curiosidades text,
    envelhecimento text,
    botanicos text,
    como_apreciar text,
    temperatura_servir text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Criar tabela de avaliações
create table if not exists avaliacoes (
    id uuid default uuid_generate_v4() primary key,
    bebida_id uuid references bebidas(id) on delete cascade,
    rating integer check (rating >= 1 and rating <= 5),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS (Row Level Security)
alter table bebidas enable row level security;
alter table avaliacoes enable row level security;

-- Políticas para bebidas
create policy "Bebidas são visíveis para todos"
    on bebidas for select
    using (true);

create policy "Qualquer pessoa pode inserir bebidas"
    on bebidas for insert
    with check (true);

create policy "Qualquer pessoa pode deletar bebidas"
    on bebidas for delete
    using (true);

-- Políticas para avaliações
create policy "Qualquer pessoa pode ver avaliações"
    on avaliacoes for select
    using (true);

create policy "Qualquer pessoa pode criar avaliações"
    on avaliacoes for insert
    with check (true); 