# Continuidade do projeto — Editor de Fotos e Cartas FC 27

> **Data:** 11 de novembro de 2026
> **Identificador no Meu Hub:** `editor-cartas-fc27`
> **Estado:** aplicativo criado; **primeira versão v1.0.0** gerada e testada em Chromium isolado; produção/Netlify ainda não confirmado.
> **Artefato:** `editor_cartas_fc27_v1.0.0.zip`, pasta interna `editor-cartas-fc27`.

## Objetivo e histórico

Editor estático de fotos de jogadores e artes de cartas, independente do FC 27 Tracker, pensado para produzir imagens PNG compatíveis com o álbum e escalações. Parte do portfólio do Meu Hub e Central de Projetos. Foi iniciado depois de o usuário aprovar o projeto planejado.

## Funcionalidades implementadas na v1.0.0

1. **Editar retrato:** importar JPG/PNG/WebP até 15 MB, enquadrar arrastando no canvas, zoom, rotação, espelhamento, centralizar, grade opcional, presets 320 × 320 (Tracker), 640 × 800, 1024 × 1024, 720 × 960 e dimensões personalizadas de 64 a 2048 px.
2. **Remover fundo:** algoritmo local de *flood fill* por similaridade da cor conectado aos quatro cantos; varinha por clique; pincel para apagar/restaurar e desfazer até seis máscaras anteriores. **Não há recorte por inteligência artificial**; fundos complexos exigem ajuste manual.
3. **Exportar retrato PNG** sem grade, com transparência; o editor não edita a foto original no disco.
4. **Criar carta:** temas autorais Prestígio Ouro, Seleção Noite, Lenda Marfim, Futuro Neon e Rubi Elite; nome, overall, posição, clube, país, RIT/FIN/PAS/DRI/DEF/FIS, retrato opcional, resolução 640 × 896 e 960 × 1344. Exportação em PNG. Salvar/importar modelo JSON (sem imagem).
5. **Processar lote:** até 20 imagens JPG/PNG/WebP de até 15 MB cada; escalonamento para 320/512/1024 quadrados, conter/preencher, remoção simples de fundo opcional e download ZIP com PNGs. Gerador ZIP local, sem bibliotecas de terceiros.
6. **PWA:** manifesto, service worker e cache para uso offline após primeira visita por HTTPS. Interface responsiva.

## Evidência e testes

- `node --check` passou para `assets/app.js` e `sw.js`; JSON de manifesto validado.
- Chromium em página isolada passou: upload PNG sintético, máscara de remoção de fundo (147.126 pixels no teste), exportação de retrato RGBA 320 × 320 com pixel transparente, alteração de preset, exportação da carta RGBA 640 × 896, modelo JSON, ZIP de lote de 2 PNGs aberto com `ZipFile.testzip() == None`, viewport mobile sem rolagem lateral e sem erros JS.
- Navegação HTTP para `localhost` bloqueada por política do ambiente de teste. Não afirmar validação do deploy Netlify nem funcionamento online em produção.

## Compatibilidade e limites importantes

- Referência inspecionada: `FC27_Tracker_v71_Album_Raridades_PWA.zip`, função `resizePhoto(file)` em `app.js`: formatos JPG, PNG, WebP até 8 MB; redimensionamento para máximo 320 px por lado, armazenamento WebP qualidade .72. A aparência final e preservação de alfa dentro do Tracker exigem teste real de importação. O editor exporta retratos, mas **não modifica diretamente o Tracker, Supabase nem metadados do Álbum**.
- O processamento manual limita a imagem de trabalho a no máximo 1800 px no maior lado para controlar memória; o original local não é sobrescrito.
- Em lote, ajustes individuais de máscara não são reaplicados; lote usa configurações próprias.
- Modelos de carta são design original, não reproduções oficiais da EA.

## Pendências sugeridas

- Testar publicação no Netlify e importação do PNG no FC27 v71 em produção; verificar transparência após conversão para WebP.
- Melhorar remoção de fundo com suavização/segmentação inteligente opcional, respeitando privacidade.
- Editor de áreas seguras para busto (cotovelos para cima), máscaras por camadas e fundo personalizável.
- Caso o usuário queira integração futura com o Tracker, definir protocolo explícito de importação/exportação, sem tocar nos dados ou no projeto original sem pedido.

## Regras permanentes e de manutenção

- Entregar próximas versões como `editor_cartas_fc27_vX.Y.Z.zip` com pasta raiz `editor-cartas-fc27`.
- Não alterar os projetos `fc27-tracker` original e `fc27-trackercloud` sem solicitação explícita.
- Ao lançar nova versão: atualizar ZIP, README, este documento e o catálogo do Meu Hub/Central na mesma tarefa. A atualização do catálogo na Biblioteca **não representa deploy automático** do site Netlify já publicado.
- Nenhum segredo, token ou arquivo `cloud-config.js` deve entrar no editor.

## Mensagem para iniciar novo chat

> Vamos continuar o **Editor de Fotos e Cartas FC 27** a partir do ZIP `editor_cartas_fc27_v1.0.0.zip` e do documento `CONTINUIDADE_DO_PROJETO.md`. O app é HTML/CSS/JS, estático e separado do FC 27 Tracker. Já tem edição de retrato, máscara de fundo simples e manual, exportação PNG, cinco estilos de cartas e processamento de lote em ZIP. Não confunda remoção simples por cor com IA. Preserve a estrutura de arquivos e versões. Confira código e ZIP antes de mudanças e atualize o Meu Hub e a Central e este resumo ao concluir. Deploy ainda não confirmado.
