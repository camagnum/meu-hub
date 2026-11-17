# Continuidade do projeto — BAHFLIX

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `bahflix`  
> Estado verificado: **Ativo**  
> Última versão conhecida: **v0.5.3**  
> Plataforma: Notebook e TV

## 1. Objetivo do projeto

Servidor de streaming pessoal na rede doméstica para filmes, séries e animes armazenados no HD do notebook; cliente Smart TV Samsung e evolução futura para Roku.

## 2. O que já foi feito / o que foi aprovado

- **Release mais recente encontrado:** `bahflix_v0.5.3.zip`, pasta raiz `bahflix`.
- v0.1: servidor Node.js/Windows para catálogo e reprodução na LAN; bibliotecas `F:\Pessoal\Filmes`, `F:\Pessoal\Animes`, `F:\Pessoal\Séries`, com temporadas em subpastas.
- v0.2: identidade preta/roxa/lilás/branca, capas locais por pasta; v0.3: metadados, pôsteres e associação com TMDB opcional; v0.4: destaques, fileiras, Minha Lista, Favoritos, recomendações e próximo episódio.
- v0.5: projeto-fonte cliente Tizen Web em `clients/tizen` para Samsung QN50Q60DAGXZD (Tizen 8), tela de IP do servidor, AVPlay com fallback HTML5; não é pacote WGT assinado.
- v0.5.1: navegação por controle na tela de conexão; v0.5.2: foco e botões do player, setas selecionam controles sem avançar acidentalmente, auto-ocultação após 5 segundos; v0.5.3: foco inicial no botão Assistir/Continuar nos detalhes e retorno do player preservando foco.
- Servidor local inicia por `iniciar-bahflix.bat`; configuração de TMDB em `config.json`, histórico e preferências em `data/`.
- Usuário já tentou conexão da TV com o SDB; erro ocorreu enquanto a TV estava desligada, então a conectividade real precisa de novo teste.

## 3. Decisões, restrições e instruções que não podem se perder

- ZIP com nome `bahflix_v0.N.zip` (sem espaços), pasta raiz interna sempre `bahflix`.
- **Não incluir nem sobrescrever `config.json`** no ZIP; preservar também a pasta `data/` e bibliotecas no HD.
- PC/servidor deve estar ligado e rodando; TV e notebook precisam estar na mesma rede, TV ligada e modo desenvolvedor habilitado para conexão SDB.
- Não expor porta 3000 à internet nem deixar credenciais/tokens privados expostos em arquivos públicos.
- Pacote Tizen exige certificado/DUID da televisão para gerar WGT assinado; não afirmar que instalação em TV real já foi testada.
- Futuro cliente Roku deve ser uma evolução separada, sem quebrar o servidor/cliente Samsung.

## 4. Pendências e próximos passos

- Ligar a TV e repetir testes SDB, identificação do dispositivo e instalação no ecossistema Tizen suportado por VS Code/extensões; o usuário havia adiado para o dia seguinte.
- Assinar e instalar projeto Tizen com certificado do usuário; testar reprodução, legendas, codecs, áudio e 4K no aparelho real.
- Desenvolver futuramente Roleta BAHFLIX e Organizador de Filmes (projetos separados), mantendo os dados de biblioteca compatíveis.
- Planejar cliente Roku somente quando solicitado.

## 5. Arquivos de referência e estado da implementação

`/bahflix_v0.5.3.zip`; `bahflix/CHANGELOG.md`; `bahflix/clients/tizen/LEIA-ME-TIZEN.md`.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **BAHFLIX**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Ativo**; versão-base conhecida: **v0.5.3**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
