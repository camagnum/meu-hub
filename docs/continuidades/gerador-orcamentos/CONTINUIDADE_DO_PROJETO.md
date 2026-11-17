# Continuidade do projeto — Gerador de Orçamentos

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `gerador-orcamentos`  
> Estado verificado: **Planejado**  
> Última versão conhecida: **Sem versão publicada confirmada**  
> Plataforma: Notebook

## 1. Objetivo do projeto

Aplicativo no notebook para estimar preço e montar propostas profissionais de freelance de desenvolvimento web.

## 2. O que já foi feito / o que foi aprovado

- Escopo aprovado no portfólio. **Ainda não há aplicativo implementado, versão, deploy ou ZIP confirmado.**

## 3. Decisões, restrições e instruções que não podem se perder

- Planejar cálculo por tarefas, páginas, funcionalidades, estimativas de horas, valor-hora, custos adicionais e margem; valores são informados pelo usuário, não fixados sem consulta.
- Exportar proposta profissional em PDF; manter planilha de itens e total verificável.
- Preferir web responsiva/offline como primeira versão; não adicionar autenticação/backend sem necessidade.
- Registrar primeiro release e documento de continuidade na Central/Meu Hub.

## 4. Pendências e próximos passos

- Definir fórmula, campos e templates de proposta.
- Criar formulário de orçamento, visualização de composição, revisão de preço e exportação de PDF.
- Testar impressão/geração de PDF e valores arredondados; criar v1.0.0.

## 5. Arquivos de referência e estado da implementação

Nenhum ZIP ou código anterior conhecido. Entrada `gerador-orcamentos` no catálogo do Hub.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Gerador de Orçamentos**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Planejado**; versão-base conhecida: **não há ZIP confirmado**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
