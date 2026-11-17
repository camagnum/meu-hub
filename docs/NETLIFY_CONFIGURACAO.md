# Meu Hub v2.0.0 — integração Netlify

## 1. Antes de atualizar
Exporte um backup em Configurações > Exportar backup e preserve o domínio atual. O armazenamento local permanece com a chave `meuhub-state-v1` e não é compartilhado entre dispositivos. A nova aba Netlify é opcional. Os dados estáticos, catálogo e resumos são públicos quando hospedados em um site público: revise o conteúdo e proteja o site inteiro se necessário. A chave abaixo protege apenas a função de monitoramento, não o restante do site.

## 2. Configuração de acesso
1. No Netlify, abra User settings > Applications > Personal access tokens: https://app.netlify.com/user/applications#personal-access-tokens . Gere um token para o Hub; limite acesso/validade se a opção estiver disponível. Não o envie por chat, não o coloque em Git/JS/ZIP. A API usa somente GET; o token pode ter permissões além daquelas empregadas pela função.
2. No painel do **mesmo projeto Netlify** que hospeda o Hub: Project configuration > Environment variables. Crie `NETLIFY_ACCESS_TOKEN` contendo o token. Crie `HUB_SYNC_KEY` com uma chave aleatória de alta entropia, distinta do token e com pelo menos 32 caracteres. Para gerar localmente (Node 20+): `node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`. Guarde a chave em seu gerenciador de senhas. Use contexto Production e escopo Functions se o plano permitir; não inclua nos arquivos. Redeploy após configurar.
3. Não expose a função em site de terceiros nem use chave curta. A função verifica chave por comparação de tempo constante, responde sem cache e não retorna o token. Rotacione ambas as credenciais em caso de exposição. O código usa URLs HTTPS fixas para API e CDN Netlify e não segue redirecionamentos. A chave de sessão só fica na memória da página e precisa ser digitada novamente após recarregar.

## 3. Publicação no site existente
A opção arrastar e soltar arquivos estáticos não é suficiente. O ZIP contém `netlify.toml`, `package.json`, `tools/build.cjs` e `netlify/functions/netlify-sync.cjs`.

Opção A — Git: use repositório privado, conecte o site existente ao repositório, e configure a raiz `meu-hub` (ou conteúdo equivalente). Build `node tools/build.cjs`, publicação `dist`, functions `netlify/functions`; já configurados no TOML. Não comite `.env` nem `.netlify`.

Opção B — CLI no terminal do VS Code, aberto na pasta `meu-hub`, Node 20+ e internet:

```
npm install -g netlify-cli
netlify login
netlify link
npm run build
netlify deploy --dir=dist --functions=netlify/functions
```

Escolha o site Meu Hub **já existente** no `netlify link`. O primeiro deploy é rascunho; confirme as telas. Variáveis devem estar no contexto adequado para teste; em caso de acesso a deploy preview, não exponha o token a branches não confiáveis. Depois publique:

```
netlify deploy --prod --dir=dist --functions=netlify/functions
```

Não crie outro site se deseja preservar localStorage. A versão pode ser conferida em `https://SEU-DOMINIO/version.json`. A função sem autenticação deve responder 401 (POST) quando configurada, jamais listar sites.

## 4. Usar e interpretar
Abra a aba Netlify, informe **HUB_SYNC_KEY** (não o token), clique Conectar e sincronizar. O painel consulta até 500 sites acessíveis ao token, em blocos de 12; enquanto conectado e aberto, atualiza a cada 5 minutos. A lista de sites consultada é armazenada localmente para consulta offline; desconectar limpa o cache. A sessão é perdida ao recarregar. São retornados somente metadados selecionados, não variáveis de ambiente nem informações de conta. A aba não cria, modifica, publica, remove ou faz rollback de sites.

Vínculo automático quando o ID do version.json é único e correspondente ao catálogo ou quando URL coincide. Se não corresponder, escolha um projeto existente ou adicione ao catálogo. Central e Hub compartilham a publicação. Sites novos aparecem no monitor automaticamente, mas a incorporação ao catálogo é confirmada para não importar projetos não relacionados. O histórico mostra até 15 deploys por site. A versão registrada não é sobrescrita pela publicada; rollback é identificado como divergência, sem destruir histórico. São dados de deploy, não teste de disponibilidade contínua do site. Sites protegidos, sem arquivo ou com redirecionamento podem aparecer sem versão. O app não consulta seu servidor local. A API pode mudar ou aplicar limites.

## 5. Padrão de versionamento
Todos os novos releases precisam incluir `version.json` no **diretório publicado**; não só na raiz do código. Exemplo: `{ "id": "fc27-tracker", "name": "FC 27 Ultimate Tracker", "version": "1.75.0", "releaseDate": "2026-11-16", "changelog": ["Alterações realmente lançadas"] }`. JSON válido, sem tokens ou dados pessoais. Atualize a cada versão real. Não é preciso adicionar CORS: o servidor do Hub consulta a CDN Netlify preferencialmente pelo permalink do deploy publicado, sem redirecionamentos. O próprio Hub já contém seu arquivo. Versões antigas sem metadado ficam com “Sem version.json” ou erro de consulta; não são adivinhadas. Sites com regras de redirect/proteção podem exigir ajuste. Apps locais precisam de integração de rede futura.

## 6. Validação
`npm test` executa testes locais com respostas simuladas. Sem acesso à conta e sem deploy real neste ambiente. Homologue a autenticação, lista de sites, permalinks e version.json na conta efetiva, inclusive rollback. Se a função não funcionar, confira logs Netlify e variáveis. Não compartilhe credenciais.

Referências oficiais: https://docs.netlify.com/api-and-cli-guides/api-guides/get-started-with-api/ ; https://docs.netlify.com/build/functions/environment-variables/ ; https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/ .


## v2.1.0 — atualização do catálogo

Na aba Netlify, após Conectar e sincronizar, os projetos com versão publicada superior exibem **Atualizar catálogo**. A opção **Atualizar automaticamente este projeto** fica desligada por padrão e só atualiza o catálogo local após uma nova consulta integral bem-sucedida. O changelog do version.json vai para o histórico sem substituição de notas manuais ou duplicatas. Se não houver ID no JSON, o vínculo pode ser feito por nome único, URL ou slug; prefira adicionar o ID correto. A automação depende da aba aberta/conectada; não é um job persistente no servidor. Em caso de rollback, a versão do catálogo não diminui.
