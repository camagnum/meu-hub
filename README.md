# Meu Hub + Central de Projetos e Versões · v2.0.0

## Novo na v2.0.0 — Netlify

**Leia `docs/NETLIFY_CONFIGURACAO.md` antes de publicar.** O pacote contém função serverless autenticada para descoberta de sites, leitura de `version.json` da publicação e histórico de deploys. Preserve o domínio e faça backup. Para publicar o monitor, use Git ou Netlify CLI; o Drop estático só disponibiliza as áreas locais. O catálogo foi consolidado sobre v1.0.11 (FC27 v1.75.0, Compostura v0.1.1 experimental e Angular Lab v1.0.0). As instruções históricas abaixo se referem às versões anteriores; a nova configuração de publicação prevalece. Nenhum deploy real efetuado.

Duas áreas integradas na mesma instalação: **Meu Hub** (`index.html`) e **Central de Projetos e Versões** (`central.html`). A Central contém as seções de projetos, histórico de versões, pendências e configurações. Os dois leem e gravam a mesma base local. **Todas as seções funcionam dentro de `index.html`**, inclusive offline; `central.html` é apenas um atalho que direciona para `index.html#projects`, evitando diferenças de armazenamento entre arquivos `file://`.

## Começar

1. Extraia o ZIP preservando a pasta interna `meu-hub`.
2. Abra `meu-hub/index.html` no navegador para usar localmente. Para acessar diretamente a Central, abra `meu-hub/central.html` (redirecionamento) ou `meu-hub/index.html#projects`.
3. Para publicar com integração Netlify, siga `docs/NETLIFY_CONFIGURACAO.md` e utilize Git ou CLI com a função. Depois, use **Instalar aplicativo** no navegador, quando disponível.
4. Cadastre links reais para seus aplicativos em **Projetos > [nome do projeto] > Editar**. Não inventamos endereços para os apps existentes.

**Dados:** os registros manuais são salvos em `localStorage`, isolados pelo navegador e pela origem do site. Para preservar alterações entre dispositivos, falta um backend (ex.: Supabase). Antes de trocar de domínio, limpar dados ou mudar de navegador, use **Configurações > Exportar backup**. Importar backup completo substitui os registros locais após confirmação.

## Recursos da v1.0.7

- Painel inicial: favoritos, resumo por situação, pendências e versões recentes.
- Projetos: cadastro, edição, exclusão, filtros por status/plataforma/categoria, busca e link de abertura.
- Histórico: novas versões com tipo, data e changelog. Uma nova versão atualiza automaticamente o projeto correspondente nas duas áreas.
- Pendências: melhorias, bugs, testes e pesquisas; prioridade e situação editáveis, incluindo backlog.
- Visual responsivo com modo claro/escuro; PWA com cache para uso offline quando hospedado em HTTPS.
- Backup completo, importação de catálogos incrementais, exportação de feed e sincronização com catálogo remoto opcional.
- Dados iniciais dos aplicativos já existentes e das ideias aprovadas. FC 27 original e FC 27 Cloud ficam **separados**. A personalização por paletas pós-v71 permanece **pendente**, sem fingir que já foi lançada.

### Documentação de continuidade para trocar de chat

- São 19 arquivos `CONTINUIDADE_DO_PROJETO.md` em `docs/continuidades/<id>/`, cobrindo todos os projetos cadastrados, incluindo os ainda planejados.
- Na página de detalhes de cada projeto, clique em **Resumo para novo chat** para baixar o Markdown correspondente.
- O pacote separado `Continuidade_dos_Projetos.zip` traz os mesmos arquivos em pastas de cada projeto, para uso com ZIPs e outras conversas.
- Ao atualizar um aplicativo futuramente, **atualize também seu Markdown**. O documento é um instantâneo escrito, não sincroniza automaticamente com os outros chats ou com o código.
- Correção: EmBBate verificado na Biblioteca na v1.14, mas publicação real dessa versão ainda precisa ser confirmada.

### Novo aplicativo ativo: Editor de Fotos e Cartas FC 27 v1.0.0

Editor independente com recorte, remoção de fundo simples, cartas personalizadas e ZIP de lote; registrado na Central. Acesse o documento em `docs/continuidades/editor-cartas-fc27/CONTINUIDADE_DO_PROJETO.md`. O aplicativo não foi implantado automaticamente.

### Novo projeto no backlog: Nomes do Brasil — Explorer & Quiz

A Central já contém um novo projeto **Planejado**, com 12 pendências detalhadas. O aplicativo ainda não foi desenvolvido. O escopo encontra-se em `docs/NOMES_DO_BRASIL_ESCOPO.md`.

## Política de atualizações para próximos aplicativos

**Fonte de verdade:** `data/catalogo.json`. O arquivo `assets/seed.js` fornece a mesma informação para o uso sem servidor. Os dois são mantidos juntos pelo script abaixo. Ao criar um aplicativo novo ou entregar uma nova versão de outro projeto, atualize este catálogo no mesmo trabalho e republique a Central/Hub (ou o catálogo remoto configurado):

```bash
cd meu-hub
python tools/registrar_versao.py --projeto bahflix --versao v0.5.4 --resumo "Melhorias na reprodução"
python tools/registrar_versao.py --projeto gerador-orcamentos --versao v1.0.0 --resumo "Primeira versão"
```

Para um projeto **ainda não cadastrado**:

```bash
python tools/registrar_versao.py --projeto novo-app --nome "Novo App" --plataforma Celular --versao v1.0.0 --resumo "Lançamento inicial"
```

### Sincronização automática (condicional)

- **Na mesma instalação:** ao registrar versões ou pendências pela Central, o Meu Hub é atualizado imediatamente. Não é necessário editar outra aplicação.
- **Por meio de catálogo remoto:** hospede `data/catalogo.json` em um URL HTTPS público que sirva JSON e permita CORS se estiver em outro domínio. Nas Configurações, salve esse URL. O app busca o catálogo ao abrir e a cada cinco minutos enquanto aberto. Publicar versões nesse arquivo as faz aparecer nos clientes conectados na próxima verificação.
- **Sem publicação/integração:** este ZIP sozinho não detecta que outra aplicação foi modificada em outra pasta ou conversa. Atualizar o código do aplicativo de origem não edita automaticamente um arquivo hospedado. É necessário um passo de publicação, ou integrar futuramente um webhook/CI ou Supabase para alimentação sem intervenção manual.
- **Dados locais preservados:** a incorporação de catálogos remotos só adiciona novos projetos, releases e tarefas; não substitui descrições e alterações pessoais, nem reabre pendências já existentes. A última versão sobe ao receber um release mais novo. Arquivos importados não executam scripts.

Um exemplo do formato do feed está em `data/exemplo-atualizacao.json`. Para exportar um catálogo atualizado pela interface, abra **Configurações > Exportar catálogo JSON**.

## Publicação no Netlify

1. Copie toda a pasta `meu-hub` para o deploy, sem tirar `index.html`, `central.html`, `assets`, `data`, `sw.js` e `manifest.webmanifest`.
2. Verifique a página inicial, a Central e `https://seu-site/data/catalogo.json`.
3. Cadastre esse endereço nas Configurações. Ao publicar novas revisões no mesmo domínio, a instância exibirá novas entradas do catálogo.
4. Se houver mudança no código do app, atualize a versão de cache em `sw.js` e o número de versão exibido, para garantir troca de arquivos antigos.

## Organização do pacote

```
meu-hub/
  index.html                 # Meu Hub
  central.html               # Atalho que abre index.html#projects
  assets/app.js              # Interface, regras e armazenamento
  assets/styles.css          # Temas, responsividade
  assets/seed.js             # Catálogo incluído no pacote
  data/catalogo.json         # Catálogo JSON para sincronização
  data/exemplo-atualizacao.json
  docs/continuidades/      # Um documento de continuidade por aplicativo
  tools/registrar_versao.py  # Gerador de registros para futuras entregas
  manifest.webmanifest
  sw.js
  README.md
```

## Segurança e limitações

Não insira senhas, tokens privados ou chaves Supabase `service_role` no catálogo JSON. A URL remota é somente de leitura. Este app não altera os arquivos ZIP, o código dos outros aplicativos ou seus sites em produção, nem promete atualização remota sem credenciais e publicação. `localStorage` não sincroniza automaticamente entre PC, celular e TV.

## Lançamento da Roleta BAHFLIX v1.0.0 — 11/11/2026

- Aplicativo independente com pasta `roleta-bahflix`, para celular e navegador Samsung TV em rede local.
- A Central registra o ZIP, lançamento, resumo atualizado e cinco tarefas de aprimoramento.
- O link de produção do aplicativo permanece vazio até a instalação/publicação; não atribuir URL inventada.
- Hub/Central continuam requerendo publicação do pacote atualizado ou importação do catálogo para refletir a mudança no site instalado.

## Atualização v1.0.5 — 12/11/2026

- Organizador de Filmes e Séries (Acervo+) v1.0.0 registrado como **Ativo**, plataforma **Notebook e celular**, com 6 pendências.
- Atualizado `data/catalogo.json`, `assets/seed.js`, `sw.js` e documento `docs/continuidades/organizador-midias/CONTINUIDADE_DO_PROJETO.md`.
- Não houve instalação em dispositivos nem deploy automático no Netlify.

## Atualização v1.0.7 — 12/11/2026

- Novo app independente **Central do Vitória v1.0.0** (`central_vitoria_v1.0.0.zip`, pasta `central-vitoria`), mobile/PWA via Netlify Functions.
- Registro do projeto `central-vitoria` como Ativo e 6 pendências de validação e expansão.
- O aplicativo requer publicação com funções Netlify; não foi implantado e a API externa não foi validada em ambiente de produção.
- Atualizados documento `docs/continuidades/central-vitoria/CONTINUIDADE_DO_PROJETO.md`, catálogo JSON e seed offline.


## Atualização v1.0.8 — 14/11/2026
Inclui Compostura v0.1.0 com descrição discreta, ícone, tarefas e continuidade. Nenhum deploy automático.

## Regra de versões (15/11/2026)
Todos os novos lançamentos devem usar MAJOR.MINOR.PATCH: MAJOR para mudanças incompatíveis, MINOR para funcionalidades compatíveis e PATCH para correções. Não renomear versões históricas. FC27 original passou de v73 a v1.74.0.


## v1.0.11 — 16/11/2026
Catálogo rev. 16 registra FC27 Tracker v1.75.0. Para atualizar somente o catálogo, importe `data/fc27_atualizacao_hub_v1.0.11.json` nas configurações. A instalação não publica os projetos automaticamente.
