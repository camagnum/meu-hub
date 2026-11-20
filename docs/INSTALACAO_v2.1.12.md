# Meu Hub + Central v2.1.12 — Instalação

- Para atualizar v2.1.11, faça backup dos dados e extraia `meu_hub_v2.1.12_Atualizacao_v2.1.11.zip` sobre a pasta local `meu-hub`.
- Para nova instalação use `meu_hub_v2.1.12_Completo.zip`. Os ZIPs têm pasta raiz `meu-hub`.
- Revise `git status`, depois `git add .`, `git commit -m "chore: registra FC27 v1.81.0 no Hub v2.1.12"` e `git push` no repositório correto.
- Confirme build/publicação no Netlify. O registro de versão no Hub não é prova de que o site foi publicado.
- Preserva as configurações e variáveis de ambiente locais; não publique tokens de integração Netlify em arquivos estáticos.
