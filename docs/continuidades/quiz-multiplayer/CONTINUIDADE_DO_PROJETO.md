# Continuidade do projeto — Quiz Multiplayer

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `quiz-multiplayer`  
> Estado verificado: **Planejado**  
> Última versão conhecida: **Sem versão publicada confirmada**  
> Plataforma: TV e celular

## 1. Objetivo do projeto

Jogo de perguntas e respostas exibidas na Smart TV, com cada participante respondendo pelo próprio celular.

## 2. O que já foi feito / o que foi aprovado

- Escopo aprovado no portfólio; **nenhum aplicativo desenvolvido**.

## 3. Decisões, restrições e instruções que não podem se perder

- TV como apresentador; celulares entram em sala (ex.: QR code/código) e enviam respostas; cronômetro, pontos e classificação.
- Categorias e configuração de partidas; impedir submissões duplicadas e mudanças após o prazo.
- Será necessária comunicação em tempo real (WebSocket ou backend); decidir stack ao começar.
- Não confundir com o Quiz dos Nomes do Brasil, que é individual e contextual a nomes do IBGE.

## 4. Pendências e próximos passos

- Projetar fluxo de salas, tela da TV, entrada e interface mobile.
- Desenvolver servidor/sincronização, banco de perguntas e lógica de pontuação.
- Testar reconexões, múltiplos celulares e navegação por controle remoto.

## 5. Arquivos de referência e estado da implementação

Nenhum ZIP anterior conhecido. Entrada `quiz-multiplayer` no Hub.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Quiz Multiplayer**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Planejado**; versão-base conhecida: **não há ZIP confirmado**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
