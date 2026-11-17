# Continuidade do projeto — Central de Projetos e Versões

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 16 de novembro de 2026  
> Identificador na Central: `central-projetos`  
> Estado verificado: **Ativo**  
> Última versão conhecida: **v2.0.0**  
> Plataforma: Notebook e celular

## 1. Objetivo do projeto

Módulo de gestão de projetos, versões, bugs, melhorias, testes e backlog, integrado ao Meu Hub.

## 2. O que já foi feito / o que foi aprovado

- v1.0.0: cadastro/edição/exclusão de projetos com categoria, plataforma, URL, pasta, status e favoritos; busca e filtros por status, plataforma e categoria.
- Histórico de releases por aplicativo, data, tipo de lançamento e changelog. Ao registrar versão no painel, ela atualiza a ficha do projeto e o Hub naquela mesma instalação.
- Quadro de pendências, prioridades e situações; indicadores e backup JSON; importação incremental e feed remoto opcional.
- v1.0.1: Nomes do Brasil adicionado como planejado com 12 tarefas.
- v1.0.2: arquivos de continuidade para 19 entradas e correção do EmBBate para v1.14.

## 3. Decisões, restrições e instruções que não podem se perder

- Mesma pasta, origem e armazenamento do Meu Hub; **não** iniciar uma segunda base independente da Central.
- Interface principal `index.html#projects`, `#versions`, `#tasks`; `central.html` redireciona.
- Não sobrescrever os dados pessoais locais quando publicar um catálogo novo. Histórico dos projetos deve preservar as versões anteriores.
- Regra permanente: em toda entrega de aplicativo novo ou atualização, atualizar simultaneamente o catálogo da Central e do Hub, documentação de continuidade e changelog; publicação remota só é automática se houver processo de deploy configurado.

## 4. Pendências e próximos passos

- Configurar distribuição de `data/catalogo.json` em URL HTTPS estável.
- Automatizar na pipeline o registro das versões e geração das notas de continuidade.
- Decidir se haverá backend compartilhado entre navegadores; hoje backup e `localStorage` ainda são a referência para dados manuais.

## 5. Arquivos de referência e estado da implementação

`/Meu Hub e Central/meu_hub_v1.0.7.zip`; `data/catalogo.json`; `tools/registrar_versao.py`.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.


## Atualização v1.0.4 — 11/11/2026

- Catálogo atualizado para Editor de Fotos e Cartas FC 27 v1.0.0, com lançamento e quatro pendências de acompanhamento.
- O documento do editor foi atualizado em `docs/continuidades/editor-cartas-fc27/CONTINUIDADE_DO_PROJETO.md`.
- O pacote `meu_hub_v1.0.4.zip` conserva a mesma pasta interna `meu-hub`.
- A cópia no Netlify, se existente, continua exigindo publicação manual; o ZIP não publica o site por conta própria.


## Atualização v1.0.4 — 11/11/2026

- Registro da **Roleta de Filmes BAHFLIX v1.0.0**, aplicativo independente para celular e navegador de Smart TV, com ZIP `roleta_bahflix_v1.0.0.zip` (pasta `roleta-bahflix`).
- Catálogo e seed offline atualizados; 5 pendências cadastradas, incluindo teste com controle Samsung real e duração automática.
- Documento do projeto atualizado em `docs/continuidades/roleta-bahflix/CONTINUIDADE_DO_PROJETO.md`.
- **Não houve deploy no Netlify nem instalação na TV.**


## Atualização v1.0.5 — 12/11/2026

- Organizador de Filmes e Séries **Acervo+ v1.0.0** cadastrado como ativo, notebook e celular na rede local; ZIP `organizador_midias_v1.0.0.zip` e pasta interna `organizador-midias`.
- Registradas seis pendências e renovado o documento `docs/continuidades/organizador-midias/CONTINUIDADE_DO_PROJETO.md`.
- Catálogo online só será atualizado após publicar o novo Hub ou feed.

## Atualização v1.0.6 — 12/11/2026

- **Central do Vitória v1.0.0** criada como PWA com Netlify Functions; ZIP `central_vitoria_v1.0.0.zip` e pasta `central-vitoria`.
- Catálogo rev. 10: projeto ativo, release e seis pendências; documento de continuidade atualizado.
- **Nenhum deploy foi feito.** A integração ao vivo ESPN/Google RSS exige validação no site publicado.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Central de Projetos e Versões**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Ativo**; versão-base conhecida: **v2.0.0**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.


## Atualização v1.0.7 — 13/11/2026

- Cadastro da Central do Vitória v1.0.1 com escudos reais dos clubes, principalmente pelo CDN ESPN (testes com mock, CDN ainda não validada em rede real).
- Novo registro de versão e pendência de teste de escudos. Catálogo e seed offline da Central sincronizados. Não houve publicação em Netlify.


## Atualização v1.0.8 — 14/11/2026
Catálogo inclui Compostura v0.1.0 (prévia privada, sem deploy), documentação discreta, ícone e pendências. Preservar estado local.

## v1.0.9 (14/11/2026)
Catálogo FC 27 Tracker atualizado até v73; feed, seed e cache correspondentes. Sem deploy.

## Atualização v1.0.10 (15/11/2026)
Catálogo atualizado com FC27 v1.74.0; histórico preservado e nova regra de numeração semântica.
Novos lançamentos seguem MAJOR.MINOR.PATCH; preservar arquivos e versões históricas.

## Atualização v1.0.11 (16/11/2026)
Catálogo rev. 16 e continuidade atualizados com FC27 Tracker v1.75.0; sem deploy.
Base oficial: `meu_hub_v1.0.11.zip`; feed rev. 16.

## Atualização v2.0.0 (16/11/2026)

Base v1.0.11; novo ZIP `meu_hub_v2.0.0.zip`, raiz `meu-hub`; feed revisão 17. Aba Netlify, função `netlify/functions/netlify-sync.cjs` somente leitura e protegida por `HUB_SYNC_KEY` aleatória; `NETLIFY_ACCESS_TOKEN` exclusivamente no servidor. Metadados do deploy publicado separados dos registros de desenvolvimento, descoberta automática e vínculo manual/automático, histórico e consulta periódica durante sessão. Chave em memória, cache de metadados local. `version.json` obrigatório na raiz publicada; build `node tools/build.cjs`, publish `dist`, deploy via Git ou CLI. Consultas reais e publicação não validadas. Manter `meuhub-state-v1` e mesmo domínio. Dados locais não sincronizados. Guia `docs/NETLIFY_CONFIGURACAO.md`. Atualizar catálogo e continuidade nos próximos releases; sites novos descobertos devem ser confirmados antes de entrar no catálogo.
