# Nomes do Brasil — Explorer & Quiz | Escopo funcional v1.0 (PLANEJADO)

**Status:** planejado, ainda não implementado.
**Plataformas:** notebook e celular como PWA responsiva.
**Fonte:** Censo Demográfico 2022 / IBGE, data de referência 01/08/2022.
**Site oficial:** https://censo2022.ibge.gov.br/nomes/
**API pública do site:** https://servicodados.ibge.gov.br/api/v3/nomes/2022 (validar os endpoints e disponibilidade antes de programar).

## Pesquisa por nomes e sobrenomes

- Campo pesquisável com seletor **Nome / Sobrenome**, opção de grafias/variantes relacionadas quando disponíveis e normalização que respeite a metodologia oficial.
- Quantidade de pessoas, percentual da população e posição no ranking **separadamente por tipo** (nome / sobrenome).
- Distribuição conforme **sexo registrado pelo IBGE** (masculino/feminino), em valores absolutos e percentuais, quando divulgada. Evitar chamar o dado do Censo de identidade de gênero.
- **Idade mediana** conforme publicado; **moda etária exata indisponível** salvo fonte adicional explícita. Mostrar como alternativa a **década de nascimento de maior frequência** e, quando conveniente, a faixa de idades correspondente em 2022 (aproximação de classe, nunca idade modal exata). Se o sobrenome não disponibilizar série por década, omitir.
- Curva histórica por década de nascimento com aviso de que a série representa pessoas residentes recenseadas em 2022, não todos os nascimentos históricos.
- **Estados**: mapa coroplético com alternância entre contagem absoluta e concentração percentual na população de cada UF. Ordenação por ambos indicadores.
- **Municípios**: mapa interativo com modo absoluto e proporcional; lista Top 10 com maior contagem e outra Top 10 com maior **% do nome na população residente do município**. Permitir filtro por UF, pesquisa de município e tooltip com contagem, denominador e fonte. Mostrar recorte geográfico e supressões.
- Comparação entre diferentes nomes; comparar rankings apenas dentro do mesmo tipo de identificador.
- Estados e municípios com números omitidos por limiar de sigilo devem aparecer como **não divulgado** e não como 0; Top 10 entre dados divulgados.

## Quiz — 10 perguntas por partida

**Entrada:** jogador seleciona nome e tipo; antes da rodada, validar quais estatísticas são recuperáveis.
**Rodada:** 10 perguntas variadas, cada uma com 4 alternativas; sem repetir a mesma pergunta na sessão.
**Motor:** sortear templates elegíveis e alternativas baseadas em dados reais; evitar perguntas não suportadas por estatísticas disponíveis; validar resposta correta única e distratores plausíveis; embaralhar alternativas.
**Jogo:** 1 ponto por acerto, feedback com número correto e fonte, progresso 1/10, resultado final, botão jogar novamente (novo sorteio) e escolher outro nome.

### Banco inicial de pelo menos 20 modelos de perguntas

1. Quantas pessoas no Brasil têm o nome selecionado? (faixas de valores plausíveis, resposta exata ou aproximada conforme a interface)
2. Em que posição nacional esse nome aparece no ranking?
3. Entre estes quatro nomes, qual é o mais comum no país?
4. Entre estes quatro nomes, qual é o mais raro no país?
5. Qual outro nome está acima dele no ranking?
6. Qual outro nome está abaixo dele no ranking?
7. Qual o estado com maior quantidade absoluta de pessoas com esse nome?
8. Qual o estado em que ele é proporcionalmente mais comum?
9. Qual dos estados listados tem maior contagem?
10. Qual dos estados listados tem maior percentual?
11. Em qual município há mais pessoas com esse nome (dentre dados divulgados)?
12. Em qual município é proporcionalmente mais frequente (dentre dados divulgados)?
13. Qual das cidades listadas tem maior quantidade absoluta?
14. Qual das cidades listadas tem maior percentual?
15. Qual a idade mediana dos portadores do nome? (somente quando disponível)
16. Qual década de nascimento é a mais frequente entre os residentes recenseados? (somente nomes com série)
17. Qual foi a década com menos pessoas daquele nome entre as décadas divulgadas?
18. Qual a participação masculina ou feminina nesse nome? (somente com dado divulgado)
19. Em qual UF o nome aparece com maior percentual em relação à população local?
20. Qual afirmação é verdadeira sobre o ranking ou distribuição do nome? (gerar a partir dos dados consultados)
21. Qual nome tem contagem mais próxima da do selecionado? (ranking/pool qualificados)
22. Dentre quatro estados, onde a contagem desse nome é menor? (somente estados com dados divulgados)

**Diversidade:** selecionar preferencialmente pelo menos um item de frequência/ranking, um de comparação, um de estados e um de municípios em cada rodada, quando dados existirem. Usar uma distribuição variável; não garantir questões de idade/sexo quando ausentes.
**Precisão:** ranking e total do Censo 2022 não representam números atuais de 2026. Nome composto considera o primeiro prenome; grafias diferentes como Ana e Anna não se mesclam, acentos são desconsiderados.

## Dados oficiais e limites de divulgação

Nota Técnica 01/2025: https://biblioteca.ibge.gov.br/visualizacao/livros/liv102228.pdf
IBGE divulga nomes a partir de **20 no Brasil**, **15 na UF** e **10 no município**; pode haver discrepância entre totais geográficos por supressão.

## Sequência de implementação sugerida

1. Inspeção de API e mapeamento de campos.
2. Busca, indicadores e ranking.
3. Visualizações geográficas e Top 10 municipal.
4. Motor de geração das questões e interface de jogo.
5. PWA, testes de precisão e publicação com catálogo do Meu Hub atualizado.
