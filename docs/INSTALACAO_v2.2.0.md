# Instalação — Meu Hub v2.2.0

## Preparação

1. No Meu Hub atual, em **Configurações > Exportar backup**, salve seu backup.
2. Atenção: o GitHub `camagnum/meu-hub` foi verificado ainda na v2.1.0, mas a Biblioteca já contém o projeto v2.1.16. Use o ZIP **completo v2.2.0** quando a sua pasta não estiver na v2.1.16; use o ZIP incremental **somente** se os arquivos da pasta já forem exatamente v2.1.16.
3. Copie o conteúdo da pasta interna **`meu-hub`**, preservando `.git` do checkout local, sem apagar configurações pessoais. Não copie a pasta `dist` antigo: execute o build atualizado.
4. No terminal da pasta do repositório: `npm test`, `npm run build`, `git status`, `git add .`, `git commit -m "feat: Meu Hub v2.2.0 - versoes Netlify sem chave"`, `git push origin main`.
5. Confirme a publicação no mesmo site `https://meu-hub.netlify.app/` com `https://meu-hub.netlify.app/version.json` indicando `2.2.0`, e a presença das funções `hub-public-versions` e `netlify-sync` no deploy.

## Funcionamento

- Ao abrir, o aplicativo consulta as versões verificadas de sites **públicos e cadastrados**. Não precisa inserir `HUB_SYNC_KEY`.
- O cartão mostra primeiro a versão publicada (inclusive após rollback). A ficha mantém a versão registrada separada.
- Uma publicação **mais nova** é adicionada automaticamente ao histórico local com changelog, sem duplicatas e sem downgrade; na próxima visita os dados publicados são verificados novamente.
- A cada 5 minutos, com a página aberta e visível, repete a consulta; ao reabrir, verifica novamente. Sem navegador aberto não há modificação do histórico local, embora o Netlify possa ter recebido um deploy.
- `NETLIFY_ACCESS_TOKEN` deve permanecer **secret** em Functions e nunca no JavaScript público; `HUB_SYNC_KEY` continua exigida apenas para as funções administrativas (`netlify-sync`). Não são necessárias novas variáveis de ambiente.
- Se a API do Netlify estiver indisponível, o Hub mantém o catálogo local e a última versão verificada. Verifique data/estado da última consulta na aba Netlify.
- Sites novos ou sem `version.json` não são automaticamente adicionados; a inclusão deve ser feita na área administrativa protegida e/ou no catálogo. Um projeto só entra no feed público quando já estiver no catálogo de produção, tiver `version.json` público e corresponder de forma única.

## Segurança

A função pública não aceita parâmetros de URL, só retorna versões verificadas de projetos já catalogados e não contém tokens, IDs internos de sites, inventário da conta, histórico nem informações de sites privados. Não remova a autenticação da função administrativa existente.
