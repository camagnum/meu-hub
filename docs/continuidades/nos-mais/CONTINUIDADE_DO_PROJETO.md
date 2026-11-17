# Continuidade do projeto — Nós+

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `nos-mais`  
> Estado verificado: **Ativo**  
> Última versão conhecida: **v2.9.4**  
> Plataforma: Celular

## 1. Objetivo do projeto

Aplicativo de rotina e gamificação do casal, com desafios, XP, metas mensais, recompensas e históricos.

## 2. O que já foi feito / o que foi aprovado

- **Versão completa identificada:** `nos-mais-online-angular-v2.9.4.zip`; também existe ZIP incremental `nos-mais-atualizacao-casal-xp-ambos-v2.9.4.zip`.
- Angular + Supabase + Netlify; contas individuais, dados compartilhados, PWA instalável e experiência responsiva, temas claro/escuro.
- Missões agrupadas em Casa, Pessoais, Casal e Fé/solidariedade; personalização de catálogo, tarefas favoritas, ordenação, estatísticas, gráficos diários/mensais, planejamento, conquistas, moedas/loja de recompensas.
- Missões de casa e pessoais incluem louça, cama, lixo, refeições, papel higiênico, roupas, limpeza, compras, higiene, banhos, exercícios, leitura, estudos, Duolingo; casal inclui assistir juntos, atividades, dates e poupança.
- Repetíveis explicitamente: **lavar/secar louça, retirar lixo e varrer cômodo** (com múltiplas marcações em um dia). Demais missões seguem regra de conclusão única diária, a menos que especificadas de outra forma em versão posterior.
- v2.9.4: uma missão do Casal concluída por uma pessoa credita XP integral para os **dois**, enquanto as moedas compartilhadas são creditadas **uma única vez**; relatórios e metas refletem essa regra. Registros anteriores preservados.
- Tema mensal e funções de recompensas/loja; atualizações com SQL versionado em `supabase/ATUALIZAR_v2.9.4.sql`.

## 3. Decisões, restrições e instruções que não podem se perder

- **Preservar** `src/app/core/config.ts` com URL e chave pública do Supabase; não publicar chaves service_role ou secretas no navegador.
- Em base existente executar somente a migração incremental adequada (para v2.9.4: `supabase/ATUALIZAR_v2.9.4.sql`), nunca executar `supabase/INSTALAR.sql` em banco já usado.
- Compilar com `npm run build` e publicar `dist/nos-mais/browser` no **mesmo site Netlify**.
- Cuidado com regras de consentimento e privacidade em missões pessoais/sensíveis; não tornar indicadores de casal punitivos.
- Diferenciar funções implementadas de sugestões do arquivo `ROADMAP_SUGESTOES.md` (não estão automaticamente prontas).

## 4. Pendências e próximos passos

- Validar SQL/build e os dois logins no ambiente Supabase/Netlify real depois de instalar v2.9.4; a verificação integrada não foi confirmada no pacote.
- Manter melhorias futuras do `ROADMAP_SUGESTOES.md` como sugestões, não como requisitos aprovados automaticamente.
- Se vier integração com Painel Nós+ TV, decidir dados compartilháveis e controles de privacidade antes de expor informação na televisão.

## 5. Arquivos de referência e estado da implementação

`/nos-mais-online-angular-v2.9.4.zip`, `/nos-mais-atualizacao-casal-xp-ambos-v2.9.4.zip`; `ATUALIZACAO_v2.9.4.md`, `TESTES_v2.9.4.md`.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Nós+**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Ativo**; versão-base conhecida: **v2.9.4**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
