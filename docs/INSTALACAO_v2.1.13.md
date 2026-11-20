# Instalação — Meu Hub + Central v2.1.13

1. Faça backup do catálogo e confira que a instalação atual está em **v2.1.12**.
2. Extraia `meu_hub_v2.1.13_Atualizacao_v2.1.12.zip` sobre a pasta `meu-hub`, preservando configurações privadas/variáveis de ambiente.
3. Revise alterações com `git status`, depois `git add .`, `git commit -m "chore: registra Tracker v1.81.1 no Hub v2.1.13"` e `git push`.
4. Aguarde o deploy conectado no Netlify e confira o `version.json` publicado.

Se instalar do zero, use `meu_hub_v2.1.13_Completo.zip` (pasta raiz interna `meu-hub`).
Não publique tokens de integração com Netlify em arquivos estáticos.
