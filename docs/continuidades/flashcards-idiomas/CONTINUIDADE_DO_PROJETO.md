# Continuidade do projeto — Flashcards de Francês e Japonês

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `flashcards-idiomas`  
> Estado verificado: **Planejado**  
> Última versão conhecida: **Sem versão publicada confirmada**  
> Plataforma: Celular

## 1. Objetivo do projeto

Revisão de vocabulário em francês e japonês para complementar o Duolingo, no celular.

## 2. O que já foi feito / o que foi aprovado

- Planejamento aprovado; **nenhuma versão implementada**.

## 3. Decisões, restrições e instruções que não podem se perder

- Cartões bidirecionais, grafia, pronúncia/áudio quando viável, tradução, exemplos, baralhos e repetição espaçada.
- Francês e japonês são os idiomas iniciais. Para japonês, considerar kana/kanji e, opcionalmente, leitura/romanização.
- App deve complementar, não tentar sincronizar automaticamente o Duolingo sem API/permissões.
- Registro de acertos, frequência de revisão e backup local.

## 4. Pendências e próximos passos

- Definir algoritmo de repetição (por exemplo SM-2), esquema das cartas e sessões diárias.
- Criar PWA com cartões, testes e progresso por idioma.
- Avaliar importação de listas/CSV e recursos offline de áudio.

## 5. Arquivos de referência e estado da implementação

Nenhum ZIP anterior conhecido. Entrada `flashcards-idiomas` no Hub.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **Flashcards de Francês e Japonês**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Planejado**; versão-base conhecida: **não há ZIP confirmado**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
