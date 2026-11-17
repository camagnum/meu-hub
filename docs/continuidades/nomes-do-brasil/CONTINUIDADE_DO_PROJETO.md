# Continuidade do projeto — Nomes do Brasil — Explorer & Quiz

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `nomes-do-brasil`  
> Estado verificado: **Planejado**  
> Última versão conhecida: **Sem versão publicada confirmada**  
> Plataforma: Notebook e celular

## 1. Objetivo do projeto

PWA para pesquisar estatísticas de nomes/sobrenomes do Censo 2022 do IBGE e disputar quizzes baseados nos dados reais do nome escolhido.

## 2. O que já foi feito / o que foi aprovado

- Requisitos definidos e cadastrados em 10/11/2026 no Meu Hub/Central v1.0.1, com **12 tarefas detalhadas** e escopo em `docs/NOMES_DO_BRASIL_ESCOPO.md`. **O app de pesquisa/quiz NÃO foi implementado.**

## 3. Decisões, restrições e instruções que não podem se perder

- Pesquisa por **nome e sobrenome**, com total nacional, participação na população, posição do ranking e comparações.
- Distribuição por **sexo masculino/feminino conforme a classificação do Censo**, idade mediana e década de nascimento predominante. **Não apresentar idade modal exata** sem base de idade individual; a faixa aproximada decorrente da década modal precisa de rótulo claro.
- Mapa por UF com alternância quantidade absoluta / percentual local; mapa municipal com lista de **10 municípios por quantidade** e lista diferente de **10 por percentual da população do próprio município**.
- Quiz adaptado ao nome escolhido, **10 perguntas por partida**, **quatro alternativas**, aleatorização de modelos e respostas, placar, explicações e nova rodada. Modelos: total Brasil, ranking, mais popular entre quatro nomes, estados, municípios, sexo, mediana, década modal, nomes raros etc. Usar só perguntas com resposta verificável.
- Respeitar sigilo do IBGE: frequências inferiores a **20 (Brasil), 15 (UF), 10 (município)** não são divulgadas; ausência ≠ zero. Não usar contagem oculta como resposta de quiz.
- Fontes oficiais: `https://censo2022.ibge.gov.br/nomes/`; API relacionada `https://servicodados.ibge.gov.br/api/v3/nomes/2022`, **endpoints específicos ainda precisam de validação**; não inferir que todas as dimensões são expostas por uma única rota.

## 4. Pendências e próximos passos

- Validar endpoints e permissões de uso no navegador, documentação e dados realmente fornecidos pelo IBGE.
- Desenvolver pesquisa, mapa estados/municípios, listas top 10 absoluto e proporcional, gráficos por década, comparador de nomes.
- Criar quiz com banco de modelos/alternativas coerentes, tratamento de dados suprimidos e sorteio sem repetição na sessão.
- Testar mobile/PWA e registrar primeiro ZIP/versão no Hub e Central.

## 5. Arquivos de referência e estado da implementação

`/Meu Hub e Central/NOMES_DO_BRASIL_ESCOPO.md`, `/Meu Hub e Central/NOMES_BRASIL_atualizacao_v1.0.1.json`.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Nomes do Brasil — Explorer & Quiz**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Planejado**; versão-base conhecida: **não há ZIP confirmado**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
