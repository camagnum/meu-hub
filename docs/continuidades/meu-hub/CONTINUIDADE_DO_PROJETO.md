# Continuidade do projeto — Meu Hub

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 17 de novembro de 2026  
> Identificador na Central: `meu-hub`  
> Estado verificado: **Ativo**  
> Última versão conhecida: **v2.1.0**  
> Plataforma: Notebook e celular

## Atualização v2.1.0

- Monitor Netlify v2.1.0 aceita version.json sem id se o vínculo por nome/URL/slug é único, com opção manual em ambiguidades.
- Atualização do catálogo com um clique ou automática por projeto (opt-in), no localStorage, durante sessão conectada e aba aberta; nunca sobrescrever versões mais novas após rollback.
- Registros com changelog quando disponível, sem duplicatas. Sem changelog, informar ausência.
- O estado de outro dispositivo não é sincronizado; para operação contínua sem navegador aberto será necessário backend persistente.

## 1. Objetivo do projeto

Página principal pessoal para abrir e acompanhar os demais aplicativos, mostrando atalhos, favoritos, atividade recente, indicadores e pendências. É uma seção do mesmo projeto web da Central; não há duas bases de dados independentes.

## 2. O que já foi feito / o que foi aprovado

- v1.0.0 (10/11/2026): aplicação web responsiva HTML/CSS/JavaScript, PWA com service worker quando hospedada por HTTPS, temas claro/escuro, painel de aplicativos, favoritos, resumo por situação e atividade recente.
- v1.0.1 (10/11/2026): cadastro do projeto planejado “Nomes do Brasil — Explorer & Quiz”, com 12 tarefas.
- v1.0.2 (documentação): 19 arquivos de continuidade para retomar cada projeto em um novo chat, acessíveis nas páginas de detalhes; referência de EmBBate atualizada para v1.14.
- A página inicial (`index.html`) e a Central compartilham `localStorage` da mesma origem. `central.html` é somente um redirecionamento para `index.html#projects`.
- Catálogo distribuído em `data/catalogo.json`, espelho offline em `assets/seed.js`, script `tools/registrar_versao.py` para novas versões, backup e importação de catálogos incrementais.

## 3. Decisões, restrições e instruções que não podem se perder

- ZIP do próprio app: `meu_hub_vN.N.N.zip`, pasta raiz interna `meu-hub`.
- *Fonte de verdade do catálogo distribuído*: `data/catalogo.json`; sincronizar `assets/seed.js` junto. Mudanças na interface exigem nova versão do cache em `sw.js` e versão exibida.
- Dados cadastrados pelo usuário são **locais ao navegador/origem**. Não atribuir sincronização em nuvem que não existe; exportar backup antes de apagar dados, mudar de domínio/navegador ou publicar mudanças drásticas.
- A opção de catálogo remoto **lê** um JSON por URL HTTPS na abertura e periodicamente; o ato de criar um ZIP de outro app **não publica** esse JSON sozinho.
- Quando surgir um novo app ou versão, atualizar Hub **e** Central na mesma entrega, mas não inventar URLs de produção.
- Projetos FC27 original e FC27 Cloud são distintos.

## 4. Pendências e próximos passos

- Publicar o Hub em um site HTTPS persistente e configurar a URL oficial de atualização do catálogo, se desejado.
- Caso queira sincronizar dados pessoais entre aparelhos: adicionar autenticação/backend (ex.: Supabase), respeitando permissões e backups.
- Criar um processo de release que regenere automaticamente `CONTINUIDADE_DO_PROJETO.md` junto de cada versão; nesta entrega, os documentos são instantâneos, não se reescrevem automaticamente.

## 5. Arquivos de referência e estado da implementação

`/Meu Hub e Central/meu_hub_v1.0.7.zip`; `data/catalogo.json`; `docs/continuidades/<id>/CONTINUIDADE_DO_PROJETO.md`.

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

> Vamos continuar o projeto **Meu Hub**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Ativo**; versão-base conhecida: **v2.0.0**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

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
Catálogo atualizado com FC27 v1.74.0 e transição de versão semântica; ordenação histórica corrigida.
Novos lançamentos seguem MAJOR.MINOR.PATCH; preservar arquivos e versões históricas.

## Atualização v1.0.11 (16/11/2026)
Catálogo rev. 16 e continuidade atualizados com FC27 Tracker v1.75.0; sem deploy.
Base oficial: `meu_hub_v1.0.11.zip`; feed rev. 16.

## Atualização v2.0.0 (16/11/2026)

Base v1.0.11; novo ZIP `meu_hub_v2.0.0.zip`, raiz `meu-hub`; feed revisão 17. Aba Netlify, função `netlify/functions/netlify-sync.cjs` somente leitura e protegida por `HUB_SYNC_KEY` aleatória; `NETLIFY_ACCESS_TOKEN` exclusivamente no servidor. Metadados do deploy publicado separados dos registros de desenvolvimento, descoberta automática e vínculo manual/automático, histórico e consulta periódica durante sessão. Chave em memória, cache de metadados local. `version.json` obrigatório na raiz publicada; build `node tools/build.cjs`, publish `dist`, deploy via Git ou CLI. Consultas reais e publicação não validadas. Manter `meuhub-state-v1` e mesmo domínio. Dados locais não sincronizados. Guia `docs/NETLIFY_CONFIGURACAO.md`. Atualizar catálogo e continuidade nos próximos releases; sites novos descobertos devem ser confirmados antes de entrar no catálogo.
