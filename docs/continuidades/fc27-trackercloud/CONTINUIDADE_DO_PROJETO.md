# Continuidade do projeto — FC 27 Tracker Cloud

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `fc27-trackercloud`  
> Estado verificado: **Em espera**  
> Última versão conhecida: **Sem versão publicada confirmada**  
> Plataforma: Notebook e celular

## 1. Objetivo do projeto

Variante experimental separada do FC 27 Tracker, com foco em Supabase e IndexedDB. Foi tratada em conversas anteriores como projeto paralelo; atualmente está em espera.

## 2. O que já foi feito / o que foi aprovado

- Nome e estrutura distintos estabelecidos: `fc27-trackercloud`, ZIP com pasta raiz `fc27-trackercloud`.
- Objetivo de persistência/sincronização com Supabase e IndexedDB, separado do original.
- **Não foi validado um ZIP final recente desta variante nesta rodada.** Não atribuir a ela versões ou funcionalidades da v71 do original sem comparar o código.

## 3. Decisões, restrições e instruções que não podem se perder

- Não alterar ou misturar dados, bancos, pacotes ou migrações dessa variante com `fc27-tracker`.
- Prioridade atual do usuário é o projeto original. Status da variante Cloud: **Em espera**.
- Ao retomar, pedir ou localizar o **último ZIP efetivo** e validar schema/branch antes de editar.

## 4. Pendências e próximos passos

- Localizar a versão-base real do Cloud quando houver pedido de retomada; revisar as diferenças de persistência e sincronização antes de criar novas features.

## 5. Arquivos de referência e estado da implementação

Nenhum pacote recente da variante Cloud foi confirmado nesta rodada; não inventar nome/versão.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **FC 27 Tracker Cloud**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Em espera**; versão-base conhecida: **não há ZIP confirmado**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
