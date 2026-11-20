> **Atualização (19/11/2026):** FC 27 Tracker v1.82.0 inclui auditoria por liga feminina, OVR e raridade FC27 base, CSV de pendências, reparos com backup e exclusão de 422 figurinhas provisórias da NWSL da contagem do álbum. Cartas especiais preservadas e não automaticamente auditadas; requer confirmação individual e testes após publicação.

> **Atualização prioritária (18/11/2026):** FC 27 Tracker **v1.81.1** gerada sobre v1.81.0, adicionando técnicas **Chute rasteiro** (`lowShot`) e **Chute colocado** (`placedShot`) no seletor único de finalização, com relatório, gráfico, ranking, CSV, retrospectiva e marcos 1/5/10/25. Gols só computam quando classificação confirmada. ZIP incremental não contém `cloud-config.js`, raiz sempre `fc27-tracker`. Nenhuma migração SQL. Arquivos ainda não publicados no Netlify e não homologados com Supabase real.

> **Atualização prioritária (18/11/2026):** FC 27 Tracker **v1.81.0** foi criada e testada localmente, **registrada no Hub, não necessariamente publicada**. Gols com origem Bola rolando/Bola parada, subtipos condicionais, Cavadinha/Jogada individual e pé real pré-selecionado; momentos decisivos opcionais (viradas, últimos minutos, com jogador expulso); botão de expulsão com motivo; recuperação que inicia contra-ataque perigoso; relatórios, marcos, CSV e alinhamento Disconnect/Quit. Os padrões de gols só contam após confirmação. Identificador `fc27-tracker`, raiz ZIP `fc27-tracker`, preservar `cloud-config.js`, histórico/Supabase e fotos. Homologação com dados reais pendente.

> **Versão registrada no catálogo em 18/11/2026:** v1.79.0. Ainda não implica publicação no Netlify nem validação de sincronização real.

> **Verificação de publicação em 17/11/2026:** `version.json` do FC Tracker declara a versão 1.75.4, releaseDate 2026-11-16. Sem changelog no arquivo; não inferir as alterações dessa versão.

# Continuidade do projeto — FC 27 Ultimate Tracker

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 16 de novembro de 2026  
> Identificador na Central: `fc27-tracker`  
> Estado verificado: **Ativo**  
> Última versão conhecida: **v1.75.4**  
> Plataforma: Notebook e celular

## 1. Objetivo do projeto

Rastrear Ultimate Team do EA SPORTS FC 27: partidas, escalações, jogadores, conquistas, catálogo de cartas, análises e desempenho por modo.

## 2. O que já foi feito / o que foi aprovado

- **Release oficial mais recente comprovado:** v1.74.0, `FC27_Tracker_v1.74.0_Completo.zip`. Versão de referência contém HTML/CSS/JS, armazenamento local/IndexedDB, conexão Supabase configurável e PWA; arquivo `cloud-config.js` deve ser preservado.
- Weekend League: ciclos de 15 jogos, vitórias/DC, gols e assistências; encerramento quando alcança 15 jogos.
- Division Rivals: vitórias/empates/derrotas, divisões, acesso/rebaixamento, pontuação semanal 3/1/0, meta 30 pontos, quantidade de jogos para meta, adversário e reinício às quintas às 05h locais.
- Gauntlet: entradas com numeração, equipes distintas, escalações unificadas, gols/assistências e inclusão nas estatísticas gerais. Rush, Eventos, Offline e FC Pro Open; Pro Open começa com saldo 800 e variações por partida.
- Sessões de jogo com check-in, turnos e autoencerramento após 1h; histórico, dashboards Geral/Rivals/WL/Pro Open/Gauntlet, filtros, gráficos, médias, recordes e conquistas bronze/prata/ouro/platina.
- Jogadores, formações e XI ideal: escalação com titulares/reservas, fotos, posição VOL e 2 ATs, formação `4-3-3 (Com VOL)`, reuso de qualquer escalação anterior, mini-campo “Mais utilizados”/“Melhor XI” (exceto Gauntlet).
- Álbum por liga/clube/jogador, raridades/versões, fotos dos atletas, inclusão de cartas na própria escalação, cartas de mesmo nome em clubes diferentes; deduplicação dos clubes 2026/27 e catálogo de 14 ligas.
- **v71:** catálogo personalizável de raridades (nomes traduzidos conforme decisões do usuário) com adicionar/editar/excluir; correções de bandeiras, origem das cartas, e busca de outras cartas/raridades. A exclusão de raridade não apaga cartas já existentes.
- Arquivos e históricos `ALTERACOES_V48.md` até `ALTERACOES_V71.md`, `INSTALACAO_V*.md` permanecem no ZIP.

## 3. Decisões, restrições e instruções que não podem se perder

- Trabalhar **somente** no projeto original `fc27-tracker` até o usuário autorizar mudança de foco. NÃO misturar com `fc27-trackercloud` (projeto separado).
- ZIP de entrega com numeração crescente, **pasta interna sempre exatamente `fc27-tracker`**. Manter configuração real `cloud-config.js`, arquivos de mídia, dados e esquema existente; fazer backup antes de upgrade.
- Aplicativo existente pode usar Supabase; não presumir que um backup JSON deve ser reimportado se os dados já sincronizam. Seguir `INSTALACAO_V71.md` e instruções de SQL de cada versão.
- Patches cumulativos têm base/versionamento. **NÃO aplicar um patch de v70 junto com o patch substituto feito para v71**.
- Não gerar ZIP ou deploy das melhorias pendentes até o usuário pedir; acumular correções em patch quando adequado.
- Fotos de jogadores: retrato isolado sem fundo, aproximadamente cotovelos para cima; preservar a pose quando pedido. Nomes, nacionalidades, ligas e raridades devem preservar regras existentes.

## 4. Pendências e próximos passos

- **Histórico pós-v71 (já lançado na v72):** personalização visual com seis paletas (Original/Limão, Oceano, Violeta, Rubi, Âmbar, Turquesa), com tema claro/escuro independente e preferência por navegador; patch já escrito e validado estaticamente, **lançado na v72**.
- Patch canônico v71: `/FC27 Tracker - Alteracoes Pendentes/FC27_PENDENTES_POS_V71_PALETAS_CUMULATIVO.patch` e notas `FC27_PENDENCIAS_POS_V71_PALETAS.md`. Há patches anteriores baseados na v70; não acumulá-los indiscriminadamente.
- Aplicar o patch à v71 íntegra e validar no navegador real (Chromium/Playwright não foi possível na ocasião), conferir Supabase após deploy; só então gerar v72 **quando solicitado**.
- Verificar novos ajustes no Álbum ou raridades que o usuário solicitar, preservando a v71 como base oficial.

## 5. Arquivos de referência e estado da implementação

`/FC27_Tracker_v71_Album_Raridades_PWA.zip` na Biblioteca; `fc27-tracker/README.md`; `ALTERACOES_V71.md`; patch/nota em `/FC27 Tracker - Alteracoes Pendentes/`.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **FC 27 Ultimate Tracker**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Ativo**; versão-base conhecida: **v1.75.0**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.

## Atualização v72/v73
- v72: seis paletas, oito melhorias de análise e cadastro unificado com autofill de carta.
- v73: gênero automático por liga/clube inequívoco, campo manual preservado, preenchimento de lacunas em dados existentes, registro de partida em duas seções e linhas responsivas.
- Base v73 para futuras mudanças; ZIP incremental `FC27_Tracker_v73_Atualizacao_v72.zip` não contém cloud-config.js. Sem SQL novo. Testes Chromium isolado; produção pendente.

## Atualização v1.74.0 (15/11/2026)
Aquisição rápida, números de camisa, marcos individuais e histórico por atleta, melhores reservas e registro sem textos redundantes. Transição v73 → v1.74.0. Sem deploy; base real de números não incluída.
Novos lançamentos seguem MAJOR.MINOR.PATCH; preservar arquivos e versões históricas.
Base oficial para futuras mudanças: `FC27_Tracker_v1.74.0_Completo.zip`; incremental `FC27_Tracker_v1.74.0_Atualizacao_v73.zip` preserva cloud-config.js. Patches pós-v73 já incorporados: não reaplicar.

## Atualização v1.75.0 (16/11/2026)
43 melhorias acumuladas: busca de cadastro, Central do Clube, 29 melhorias de desempenho, gestão e interface. ZIPs completo e incremental, sem deploy; sincronização incremental experimental desativada por padrão.
Base oficial: `FC27_Tracker_v1.75.0_Completo.zip`; incremental `FC27_Tracker_v1.75.0_Atualizacao_v1.74.0.zip`, sem cloud-config.js. Patches pós-v1.74.0 incorporados: não reaplicar. SQL incremental opcional ainda não homologado; manter desativado.


## Atualização v1.76.0 (17/11/2026)
Implementados: formações favoritas independentes da escalação (posições/funções), 11 vagas automáticas, funções LD/LE Defensivo/Apoio/Ala; VOL Defensivo/Apoio; substituições por titular, ranking de saídas, avaliação híbrida após salvar a partida e indicadores individuais, busca no Elenco, Gauntlet perfeito, melhorias de layout e rolagem.
ZIP incremental: `FC27_Tracker_v1.76.0_Atualizacao_v1.75.4.zip` (sem `cloud-config.js`); completo: `FC27_Tracker_v1.76.0_Completo.zip`. Pasta interna `fc27-tracker`. Testes JS/regras/Chromium isolado passaram, Supabase e publicação reais ainda não testados. Preservar dados, backups e arquivos locais.

## Atualização v1.76.1 (17/11/2026)

Central de Atualizações no Tracker: compara versão em execução (constante do código) com `version.json` publicado no Netlify usando consulta sem cache; histórico de versões, verificação manual e automática, estado PWA (instalação de nova versão somente após service worker preparado), rodapé com versão. Nenhuma alteração de banco Supabase. Arquivos completos e incrementais de v1.76.0, mantendo `cloud-config.js` local. Validado em Chromium isolado com manifesto simulado; ainda não publicado nem testado em Netlify real.


## Atualização v1.76.2 (17/11/2026)

Patch sobre v1.76.1: removida a busca global duplicada do módulo `features-v58.js`; mantida a busca global avançada do `app.js` com botão "⌕ Buscar" no topo, Ctrl/⌘+K, filtros Jogadores, Cartas, Partidas, Páginas, Tudo e novo filtro Formações. Busca contempla nomes de formações favoritas, esquema, funções e formações utilizadas em partidas, com navegação para painel Formações e destaque no cartão da formação salva. Adicionadas formações à busca sem mexer nos registros; version.json/pwa.js/service-worker.js atualizados para 1.76.2. ZIP incremental exclui `cloud-config.js`. Testes de navegador isolado aprovados; **não foi feito deploy** nem teste com Supabase real nesta entrega.


## Registro de 17/11/2026 · FC27 Tracker v1.76.3

Catálogo revisão 26. FC27 Tracker v1.76.3: temporada com fim oficial para estatísticas e data independente e opcional de conclusão do Passe da Temporada. ZIPs v1.76.3 publicados na Biblioteca, mas não implantados no Netlify.

## v1.76.5

Unificação assistida de nomes do mesmo atleta no Álbum; preserva raridades distintas e dados de partidas. Escolha do nome e foto, proteção contra colisões, backup antes da confirmação. Não precisa de nova tabela SQL.

## v1.76.6–v1.76.7

Novos fundos de cartas no Álbum, intensificados em 1.76.7: TOTW preto/dourado, Icons marfim/ouro, especiais galáxia neon, Heróis vinho/cobre. Nenhum dado é modificado e o manifest mantém id fc27-tracker.


## FC27 v1.80.0 (18/11/2026)

Cinco módulos consultivos em **Análises e recordes → Inteligência & retrospectiva**: tendências com amostra mínima e notas híbridas, substituições, auditoria somente leitura e CSV, conquistas por gols/defesas/gauntlets, retrospectiva com resultados e marcos da temporada.
Pacotes: `FC27_Tracker_v1.80.0_Completo.zip` e `FC27_Tracker_v1.80.0_Atualizacao_v1.79.0.zip`; delta sem `cloud-config.js`. Sem alterações SQL nem deploy.
**Não implementado:** tags de virada, derrota no fim ou vitória no último lance; depende de discussão dos critérios.


## Registro 2026-11-18 — FC27 v1.81.2

Corrigida Central de Atualizações em `pwa.js`: `FALLBACK_HISTORY` tinha sido renomeada indevidamente para `RELEASES` na v1.81.1. Atualizados script de PWA, service worker, manifesto e teste de inicialização, preservando dados. Registrar publicação Netlify somente após conferência da versão publicada.
