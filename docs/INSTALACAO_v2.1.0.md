# Atualização do Meu Hub para v2.1.0 (GitHub → Netlify)

## Antes de instalar

1. Abra o site Meu Hub **no endereço atual** e use **Configurações → Exportar backup**. Preserve esse arquivo.
2. Confirme que o repositório conectado ao site Netlify é `camagnum/meu-hub` e que a branch de produção é `main`.
3. As variáveis `NETLIFY_ACCESS_TOKEN` e `HUB_SYNC_KEY` continuam iguais, caso já estejam configuradas. Não coloque seus valores no GitHub.

## Instalar pelo VS Code

1. Extraia `meu_hub_v2.1.0_Atualizacao_v2.0.0.zip`.
2. Copie **o conteúdo da pasta interna `meu-hub`** do ZIP para a pasta `C:\Users\camag\Documents\prog\meu-hub` (ou sua pasta clonada atual), sobrescrevendo os arquivos de código existentes. Não copie a pasta `.git` e não altere arquivos pessoais `.env`.
3. No terminal aberto na pasta do projeto, execute:

```powershell
npm test
npm run build
git status
git add .
git commit -m "feat: Meu Hub v2.1.0 - sincronizacao automatica"
git push origin main
```

4. No Netlify, verifique o deploy do **site existente** `meu-hub`: branch `main`, build `node tools/build.cjs`, publish `dist` e function `netlify/functions`.
5. Acesse `https://meu-hub.netlify.app/version.json` e confirme `"version": "2.1.0"`. Verifique também a função `netlify-sync` no resumo do deploy.

## Usar

Abra a aba **Netlify** do Hub, conecte usando `HUB_SYNC_KEY` e sincronize. Nas fichas vinculadas com versão mais recente, clique em **Atualizar catálogo**. Para atualizações futuras sem cliques de confirmação, marque **Atualizar automaticamente este projeto**.

A versão 1.75.4 do FC 27 Ultimate Tracker foi incorporada ao catálogo-base v2.1.0 porque já constava na publicação do Netlify; releases posteriores serão detectados conforme os metadados publicados. A sincronização automática atua **apenas enquanto a aba estiver aberta e conectada**. Preferências e histórico são locais ao navegador; backups são recomendados.
