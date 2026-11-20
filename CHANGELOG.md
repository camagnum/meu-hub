## v2.2.0 — 19/11/2026

- Consulta de versões publicadas no Netlify sem digitar `HUB_SYNC_KEY`: executada ao abrir e a cada 5 minutos com a página aberta.
- Exibição priorizada da versão efetivamente publicada em cards e listas; versão de desenvolvimento continua separada no detalhe.
- Registro automático de lançamentos mais recentes e changelogs sem duplicações; rollback nunca diminui versão registrada.
- Função serverless pública divulga somente metadados de `version.json` publicamente acessíveis e associados de forma única a projetos ativos do catálogo. Não divulga inventário privado, token, histórico de deploys ou sites sem associação.
- Área administrativa Netlify, descoberta de sites não catalogados e histórico de deploys continuam exigindo `HUB_SYNC_KEY`.
- Catálogo revisão 39 sobre a revisão 38 (FC27 Tracker v1.82.0 registrada; publicação distinta).

## v2.1.16 — 19/11/2026

- Catálogo revisão 38: registra FC 27 Tracker v1.82.0 (auditoria de ratings e raridades femininas).
- Pendências de cartas especiais, atualizações de fonte e homologação de dados reais explícitas.
- Não confundir versão registrada com versão do deploy Netlify.

## v2.1.15 — 18/11/2026

- Catálogo revisão 37, FC27 Tracker v1.81.3.
- Corrigido diagnóstico de versão publicada: Netlify confirmou v1.81.2; v1.81.3 ainda depende de push.
- Acompanhamento da Central de Atualizações e cache da PWA.

# v2.1.14 — 2026-11-18

- Catálogo revisão 36: FC27 Tracker v1.81.2, correção da Central de Atualizações que não aparecia na v1.81.1.
- Versão registrada separada de versão publicada; ainda necessário verificar deploy HTTPS e PWA real.

# v2.1.13 — 2026-11-18

- Catálogo revisão 35: FC27 Tracker v1.81.1 com Chute rasteiro, Chute colocado, relatórios, marcos e retrospectiva.
- Progresso do Tracker atualizado; publicação no Netlify e testes com Supabase real não presumidos.

# v2.1.12 — 2026-11-18

- Catálogo revisão 34: FC27 Tracker v1.81.0 registrada.
- Gols, acontecimentos decisivos, expulsões, contra-ataques iniciados e respectivos relatórios/marcos.
- Homologação com Supabase real e publicação no Netlify permanecem pendentes.

# v2.1.11 — 2026-11-18

- Catálogo revisão 33: FC27 Tracker v1.80.0 registrada com cinco novos módulos de Inteligência.
- Separados o histórico do projeto e o estado publicado no Netlify.
- Pendência: eventos decisivos de partida, critérios a discutir.

# v2.1.10 — 2026-11-18

- Catálogo revisão 32: FC27 Tracker v1.79.0.
- Central de relatórios individuais: filtros, ranking de gols/defesas, eficiência registrada e CSV.
- Versão registrada, não necessariamente publicada no Netlify.

# v2.1.9 — 2026-11-18

- Catálogo revisão 31: FC27 Tracker v1.78.0.
- Indicadores individuais ampliados: defesas, intervenções, faltas, erros e rankings de goleiros.
- Versão registrada, não necessariamente publicada no Netlify.

# v2.1.8 — 2026-11-18

- Catálogo revisão 30: FC27 Tracker v1.77.0.
- Gols especiais: classificações de pênaltis, faltas e golaços sem dupla contagem; histórico do Gauntlet preservado.
- Versão registrada, não necessariamente publicada no Netlify.

# v2.1.7 — 2026-11-17

- Catálogo revisão 29: FC27 Tracker v1.76.7, segunda rodada visual de cartas.
- Incluído marco intermediário v1.76.6 no histórico.
- Versão registrada permanece independente da publicada no Netlify.

# v2.1.6 — 2026-11-17

- Catálogo revisão 28: FC27 Tracker v1.76.5, unificação assistida com prévia, nome/foto escolhidos e histórico consolidado.
- Mantido o histórico de publicação separado da versão registrada.

# v2.1.5 — 2026-11-17

- Catálogo revisão 27: FC27 Tracker v1.76.4, nova ordem de posições e pé dominante nos onze selecionados.
- Histórico de versões atualizado sem publicar automaticamente no Netlify.

# v2.1.4 — 2026-11-17

- Catálogo revisão 26: FC 27 Ultimate Tracker v1.76.3.
- Registro de duas datas para temporada: fim oficial e conclusão do Passe da Temporada.
- Histórico de versões atualizado sem afetar os sites publicados no Netlify.

# v2.1.3 — 2026-11-17

- Catálogo revisão 25 com FC27 Ultimate Tracker v1.76.2, preservando a distinção entre versão **registrada** e **publicada** no Netlify.
- Registrada unificação da busca global, busca de formações salvas/utilizadas e atalho Ctrl/⌘ + K.
- Atualização do Meu Hub + Central, sem deploy automático, sem alterações no Supabase e sem sobrescrever configurações de usuário.

# v2.1.2 — 2026-11-17

- Catálogo revisão 24: FC27 Ultimate Tracker v1.76.1 registrado com Central de Atualizações, version.json no Netlify e fluxo PWA.
- Meu Hub e Central de Projetos e Versões atualizados para v2.1.2; nenhum projeto foi publicado automaticamente.
- Preservadas informações Netlify, configurações e distinção entre versão registrada no catálogo e publicada no serviço.

# v2.1.1 — 2026-11-17

- Catálogo rev. 21: FC27 Ultimate Tracker v1.76.0 registrado com alterações de táticas, escalações, avaliação individual, Gauntlet e interface.
- Versão publicada Netlify permanece distinta da registrada; sem deploy automático.
- Continuidade e PWA do Hub atualizados, sem alterar configurações Netlify.

# v2.1.0 — 2026-11-17

- Novo botão de atualização do catálogo conforme a versão publicada no Netlify.
- Habilitação individual de sincronização automática (desativada por padrão), aplicada apenas em consultas completas e bem-sucedidas.
- Compatibilidade com version.json antigo, sem id, mediante associação única por nome, URL ou nome do site; vínculo manual continua disponível.
- Atualização do histórico de versões com changelog real quando informado, sem duplicar lançamentos nem rebaixar versões após rollback.
- Versão atual do Meu Hub e Central atualizada para 2.1.0; PWA com cache renovado.
- Credenciais Netlify continuam restritas à função; chave de sessão não é persistida.

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
