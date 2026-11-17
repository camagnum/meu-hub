# Continuidade do projeto — Minha Despensa

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `minha-despensa`  
> Estado verificado: **Planejado**  
> Última versão conhecida: **Sem versão publicada confirmada**  
> Plataforma: Celular

## 1. Objetivo do projeto

Controle doméstico de produtos e quantidades, validades e lista de compras compartilhada no celular.

## 2. O que já foi feito / o que foi aprovado

- Ideia aprovada no portfólio. **Não desenvolvida ainda.**

## 3. Decisões, restrições e instruções que não podem se perder

- Cadastro de produtos, unidade/quantidade, validade, local de armazenamento, itens em falta e lista de compras.
- Opcional: leitura de código de barras, dependendo de permissão de câmera e base de produtos disponível.
- Manter a experiência rápida em celular e considerar uso compartilhado; não presumir Supabase já configurado.
- Notificações de validade e estoque somente após definir permissões e limites.

## 4. Pendências e próximos passos

- Definir telas, modelo de dados e regras de consumo/reposição.
- Criar PWA com operações locais e exportação; adicionar compartilhamento/sincronização em etapa posterior.
- Testar introdução de produtos e listagem de compras em aparelho real.

## 5. Arquivos de referência e estado da implementação

Nenhum ZIP anterior. Entrada `minha-despensa` no Hub.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Minha Despensa**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Planejado**; versão-base conhecida: **não há ZIP confirmado**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
