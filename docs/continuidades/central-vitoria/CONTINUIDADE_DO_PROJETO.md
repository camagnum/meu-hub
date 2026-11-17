# Continuidade — Central do Vitória

**Atualizado:** 13/11/2026 | **Projeto:** `central-vitoria` | **Estado:** V1 desenvolvida, não implantada/testada em produção | **Versão:** v1.0.1

## Objetivo e escopo

Aplicativo independente para celular sobre o **Esporte Clube Vitória de Salvador, Bahia**, com jogos, resultados, classificação da Série A, notícias e estatísticas. Não confundir com clubes homônimos em Portugal/ES. Identidade rubro-negra própria; não é aplicativo oficial do clube.

## Implementado e testado

- **v1.0.1:** escudos reais dos clubes no cabeçalho, cards de jogos, destaque da próxima partida e tabela. Captura `team.logo`/`logos[].href` ou forma URL com ID ESPN; fallback para iniciais. Alterações testadas com imagens substitutas em 320, 390 e 1366px; **CDN real não verificada na rede**. Cache da v1.0.0 permanece legível.

- HTML/CSS/JS mobile-first, PWA (`manifest.webmanifest`, `sw.js`), ícone SVG autoral.
- Páginas: Início (próximo jogo, últimos/próximos, posição, pontos, forma), Jogos (temporada, competição, resultados), Tabela (classificação, destaque do Vitória), Notícias (RSS), Mais (V/E/D, gols, links, limpeza de cache).
- Exportar próximo jogo como `.ics`, compartilhar URL e guardar último resultado de API para uso offline com identificação de dados antigos.
- Netlify Function em `netlify/functions/vitoria.cjs` intermediando consultas ESPN (`soccer/bra.1`, equipe `3457`, agenda e tabela) e notícias RSS Google News, com timeout, cache e tratamento de erros.
- Parsers testados com fixtures; layout e navegação das cinco abas testados em Chromium isolado 390px/1366px sem erros e sem overflow. **APIs externas não verificadas ao vivo; funcionamento real precisa de teste pós-deploy.**

## Instalação

Arquivo exato do ZIP: `central_vitoria_v1.0.1.zip`. Pasta raiz interna: **`central-vitoria`**. Para dados reais, publicar via Git ou Netlify CLI incluindo **Netlify Functions** (Netlify Drop de HTML estático não é suficiente). Configuração no `netlify.toml`. Função de verificação: `/.netlify/functions/vitoria?tipo=jogos&ano=2026`.

## Restrições / fatos que não devem ser perdidos

- Dados ESPN são não oficiais, sujeitos a mudança, e manchetes Google RSS podem falhar; nunca inventar placares, posições, notícias ou declarar atualização em tempo real sem fonte confirmada.
- Notificações push, login, integração Supabase, estatísticas individuais/elenco e cobertura de outras ligas **não implementados**.
- Sem dados simulados em produção e sem escrita em apps existentes. Escudos externos da ESPN não foram validados ao vivo; ficam as iniciais caso indisponíveis. Ícone PWA permanece autoral. Cache local apenas neste navegador.
- O app não foi publicado nem testado no celular físico; só há validação em ambiente isolado.
- Quando houver nova versão, atualizar este resumo, o Meu Hub e Central, histórico de versão e ZIP, preservando a pasta raiz `central-vitoria`.

## Próximas pendências

1. Validar imagens reais de todos os clubes (incluindo o Vitória) no Android após o deploy, verificando disponibilidade da CDN e eventuais permissões de uso público.
2. Validar via Netlify Functions os endpoints de calendário e classificação com respostas reais 2026.
3. Validar o RSS de notícias no deploy, conteúdo e links.
4. Testar instalação PWA e uso no Android e comportamento do calendário `.ics`.
5. Integrar outras competições do clube e detalhes de jogos.
6. Avaliar notificações push opcionais (exigirão infraestrutura apropriada e consentimento).
7. Validar publicação dos recursos e cache do service worker após novas versões.

## Mensagem pronta para novo chat

> Vamos continuar a **Central do Vitória v1.0.1**. Leia `CONTINUIDADE_DO_PROJETO.md` e utilize o ZIP `central_vitoria_v1.0.1.zip` como código-fonte. Preserve a pasta `central-vitoria`. A versão tem PWA e Netlify Function de dados ESPN/Google RSS, mas **nenhum deploy e nenhuma consulta real à API foram confirmados**. Verifique provedores e execução primeiro; diferencie funções testadas e pendências. Ao concluir nova versão, atualize Meu Hub/Central e este arquivo de continuidade.
