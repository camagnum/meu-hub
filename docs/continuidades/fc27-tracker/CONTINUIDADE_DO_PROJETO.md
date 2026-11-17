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
