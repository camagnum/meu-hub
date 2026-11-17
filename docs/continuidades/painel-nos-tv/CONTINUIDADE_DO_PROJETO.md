# Continuidade do projeto — Painel Nós+ para TV

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `painel-nos-tv`  
> Estado verificado: **Planejado**  
> Última versão conhecida: **Sem versão publicada confirmada**  
> Plataforma: TV

## 1. Objetivo do projeto

Painel visual da pontuação e das missões do casal Nós+ na Smart TV.

## 2. O que já foi feito / o que foi aprovado

- Ideia aprovada e registrada na Central como Planejado; **não implementada**.

## 3. Decisões, restrições e instruções que não podem se perder

- Exibir progresso mensal, metas, pontos, recompensas e missões apropriadas para uma tela compartilhada.
- Os dados originam-se do Nós+ (Angular/Supabase v2.9.4); não criar segunda fonte de verdade para XP/moedas.
- Privacidade: ocultar por padrão detalhes pessoais, íntimos ou outras missões sensíveis; decidir o que pode aparecer numa TV acessível a terceiros.
- Visual com texto grande/controle remoto e atualização segura.

## 4. Pendências e próximos passos

- Definir mecanismo de autenticação e modo de exibição seguro com dados agregados.
- Criar layout de telão/TV e conectar à API do Nós+ com permissões apropriadas.
- Verificar atualização de estatísticas após registrar uma missão no celular.

## 5. Arquivos de referência e estado da implementação

`/nos-mais-online-angular-v2.9.4.zip` como referência de dados. Nenhum ZIP específico da TV.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Painel Nós+ para TV**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Planejado**; versão-base conhecida: **não há ZIP confirmado**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
