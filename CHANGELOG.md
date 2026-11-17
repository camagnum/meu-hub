# v2.0.0 — 16/11/2026

- Integração Netlify somente leitura, função autenticada, descoberta de sites, versões publicadas e deploys.
- Separação de versão local e publicada; atualização a cada cinco minutos durante sessão.
- `version.json` na raiz e na saída `dist`; proteção do token no servidor.
- Catálogo revisão 17: FC27 v1.75.0 preservado, Compostura v0.1.1 experimental e Angular Lab v1.0.0.
- Teste real na conta Netlify pendente.

# v1.0.11 — 16/11/2026 — FC 27 Tracker v1.75.0

- Catálogo revisão 16: lançamento do Tracker v1.75.0, pendências de homologação e continuidade atualizada.
- Mantido histórico, regra MAJOR.MINOR.PATCH e versão separada trackercloud.
- Novo feed `data/fc27_atualizacao_hub_v1.0.11.json`. Sem publicação automática.

# v1.0.10 — 15/11/2026 — FC 27 Tracker e versionamento semântico

- Registro da versão v1.74.0 do Tracker, sem deploy.
- Comparação e ordenação preservam v73 e anteriores na sequência histórica; novos registros CLI usam MAJOR.MINOR.PATCH.
- Catálogo, seed e cache sincronizados.

# v1.0.9 — 14/11/2026 — FC 27 Tracker

- Versões v72 e v73 registradas. Paletas entregues, validação em produção pendente.
- Catálogo, seed e cache atualizados. Sem deploy.

# v1.0.8 — 14/11/2026 — Compostura

- Registro de prévia v0.1.0, ícone, histórico, tarefas e continuidade discreta.
- Catálogo e seed offline atualizados; sem deploy.

# v1.0.7 — 13/11/2026 — Escudos na Central do Vitória

- Central do Vitória v1.0.1 registrada no catálogo, com escudos reais via CDN ESPN e alternativa textual.
- Nova pendência para validar as imagens dos times em rede real e na PWA instalada.
- Continuidades Hub, Central de Projetos e Central do Vitória revisadas.
- O Netlify não foi atualizado automaticamente.

# v1.0.6 — Central do Vitória

- PWA Central do Vitória v1.0.0 registrada como ativa no catálogo.
- Histórico de release e 6 pendências de testes, integrações e aprimoramentos.
- Documento de continuidade da Central do Vitória substituído pela versão implementada.
- Catálogo/seed/cache PWA sincronizados; não houve publicação do site.

# v1.0.5 — Organizador de Filmes e Séries

- App Acervo+ v1.0.0 cadastrado como ativo para notebook e celular via LAN.
- Registro do lançamento, seis pendências, documentação de continuidade e catálogo offline.
- Alterada a versão de cache da PWA para receber atualização quando publicada.
- Não houve deploy em produção.

# v1.0.4 — Roleta BAHFLIX lançada

- Roleta de Filmes BAHFLIX v1.0.0 cadastrada como ativa, em **celular e TV**, com lançamento e cinco pendências.
- Atualizados catálogo, seed offline e resumo de continuidade do projeto.
- O Hub não foi publicado automaticamente no Netlify.

# v1.0.3 — Ateliê FC 27 lançado

- Lançamento do Editor de Fotos e Cartas FC 27 v1.0.0 cadastrado como aplicativo ativo.
- Registro de pendências técnicas e documento atualizado de continuidade.
- Catálogo e seed offline sincronizados.
- Esta atualização não faz deploy automático de um site Netlify em produção.

# v1.0.2 — Continuidade dos 19 projetos

- Criados arquivos Markdown de resumo para troca de conversa, incluindo projetos ativos, em espera, planejados e backlog.
- Botão **Resumo para novo chat** na página de detalhes de cada projeto.
- Referência do EmBBate atualizada para v1.14 (arquivo encontrado; implantação de produção não confirmada).
- Atualizado o cache do service worker e catálogo interno.

# Histórico de versões · Meu Hub / Central

## v1.0.1 — 10/11/2026

- Incluído **Nomes do Brasil — Explorer & Quiz**, status planejado, com 12 requisitos detalhados.
- Fonte prevista: Censo Demográfico 2022, portal Nomes no Brasil do IBGE.
- Escopo de pesquisa: nomes e sobrenomes, totais, ranking, divisão por sexo, idade mediana, década modal de nascimento, mapas estaduais/municipais e dois Top 10 de municípios.
- Quiz adaptado ao nome: 10 perguntas por partida, quatro alternativas e sorteio de temas disponíveis, com placar e novas partidas.
- A moda exata da idade não é dedutível dos dados por década; não confundir com década modal.
- Dados com sigilo estatístico não devem ser tratados como zero.


## v1.0.0 — 10/11/2026

- Primeira versão do Meu Hub e da Central em uma única aplicação web responsiva.
- Catálogo inicial de aplicativos em uso e selecionados para desenvolvimento.
- Controle de novas versões, pendências, backlog, pesquisas e tarefas.
- Favoritos, indicadores, filtros, pesquisa, tema claro/escuro, backup e importação JSON.
- Sincronização opcional por JSON remoto; atualização na inicialização e a cada cinco minutos enquanto o aplicativo estiver aberto.
- PWA com cache offline; estrutura simples de publicar em hospedagem estática.
- Script de linha de comando para registrar a entrega de versões novas no catálogo e no seed offline simultaneamente.
- Navegação por hash na mesma página para compartilhar dados também no acesso por arquivo local.

**Observação:** a sincronização remota é de leitura. Não há deploy em produção nem credenciais de backend incluídas.
