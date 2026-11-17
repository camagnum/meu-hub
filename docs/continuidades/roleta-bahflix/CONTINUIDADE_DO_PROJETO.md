# Continuidade do projeto — Roleta de Filmes BAHFLIX

> **Atualizado em 11/11/2026** · Identificador na Central: `roleta-bahflix`  
> **Estado: aplicativo criado, ainda não publicado/validado em TV real**  
> **Última versão criada: v1.0.0** · ZIP `roleta_bahflix_v1.0.0.zip` · pasta interna `roleta-bahflix`  
> Plataformas: **celular, notebook e navegador Smart TV**

## Objetivo e arquitetura

Aplicativo independente de roleta de filmes para a biblioteca real do BAHFLIX. Layout responsivo com foco e navegação via setas, OK/Enter e Voltar/Esc. **Não modifica o servidor BAHFLIX, os arquivos de vídeo, suas configurações ou o histórico original**.

O BAHFLIX v0.5.3 disponibiliza `GET /api/catalog` com `productions`, `progress`, `preferences`. Cada produção com `kind: movie` entra na roleta. O servidor próprio da Roleta, `server.js` (Node.js 18+, sem dependências npm, porta 3100), faz proxy somente de `GET /api/catalog` e `GET /api/poster/:id` para `http://127.0.0.1:3000` local, evitando problemas de conteúdo misto no navegador da TV.

Para iniciar: ligar computador e iniciar BAHFLIX (porta 3000), executar `roleta-bahflix/iniciar-roleta.bat`, abrir `http://IP-DO-PC:3100` no celular/TV pela mesma rede doméstica. Abrir como site no navegador da TV **não é** empacotamento de Tizen nativo. A porta 3100 e a 3000 devem permanecer privadas da LAN.

## Implementado na v1.0.0

- Interface com 4 seções: **Roleta**, **Biblioteca**, **Histórico** e **Conexão**; modo horizontal TV e mobile responsivo.
- Sorteio aleatório uniforme entre todos os filmes elegíveis, apresentando até 12 itens no desenho da roda. Gira com animação; exibe filme escolhido, capa, ano, gêneros e sinopse quando cadastrados.
- Filtros por texto, gênero, ano, duração conhecida (até 90, 91–120, >120), assistidos/não assistidos, favoritos e minha lista; opção de evitar os últimos 5 sorteados quando houver alternativa.
- Importação de dados do BAHFLIX (metadados, capas, progresso e listas), histórico dos últimos 100 sorteios no navegador e sorteio novamente.
- Edição **local** de título, gêneros, ano, duração, sinopse e estado assistido; cadastro de filmes manuais, importação de JSON e exportação de backup JSON.
- Modo navegador celular/TV, navegação por controle remoto/teclado, manifesto e service worker para uso seguro via HTTPS/localhost (LAN HTTP não permite instalar PWA em todos navegadores).

## Limitações — muito importantes

- O catálogo BAHFLIX v0.5.3 não fornece duração confiável de cada filme. **Tempo deve ser cadastrado manualmente** ou melhorado no futuro; não inventar runtime.
- Histórico e correções ficam no localStorage de cada aparelho, sem sincronização entre TV/celular. Marcado como assistido na Roleta **não altera** o status no BAHFLIX.
- “Abrir BAHFLIX” abre a página principal da biblioteca (sem deep-link confirmado para o filme exato).
- Se servidor BAHFLIX estiver desligado, o app usa catálogo local previamente salvo, JSON importado ou filmes manuais.
- A interface foi testada em um navegador Chromium isolado com catálogo simulado (18 filmes; 17 não assistidos; gêneros, duração, sorteio, histórico, edição; largura 390 e 1440 sem overflow e sem erros de JS). **A navegação da TV física Samsung e o BAHFLIX doméstico reais ainda não foram testados.** O teste do servidor HTTP pode ser feito sem envolver a TV.
- Nenhuma parte foi publicada em Netlify, empacotada como `.wgt` ou instalada na Smart TV neste lançamento.

## Próximas melhorias e testes

1. Testar em TV Samsung QN50Q60DAGXZD: rede LAN, controle remoto e desempenho.
2. Verificar a origem dos metadados de duração, talvez acrescentar runtime no BAHFLIX sem sobrescrever `config.json`.
3. Opcional: preparar empacotamento Tizen instalável para TV.
4. Opcional: sincronização de histórico entre dispositivos; backend demandado.
5. Opcional: deep-link direto para produção selecionada se o BAHFLIX oferecer suporte.

## Regras de entrega

- Futuras versões: ZIP `roleta_bahflix_vN.N.N.zip`, sempre pasta interna `roleta-bahflix`.
- **Não** modificar `bahflix/config.json` nem tocar nos vídeos e configurações do BAHFLIX sem pedido explícito.
- Atualizar **Meu Hub e Central** e este `CONTINUIDADE_DO_PROJETO.md` em cada lançamento. Não confundir atualizar artefatos na Biblioteca com deploy em produção.

## Mensagem pronta para novo chat

> Vamos continuar a **Roleta de Filmes BAHFLIX**, versão v1.0.0. Leia este `CONTINUIDADE_DO_PROJETO.md` e examine o ZIP mais recente antes de modificar arquivos. É um app independente para celular e navegador da Samsung TV, que lê o BAHFLIX v0.5.3 por um proxy local Node.js (3000 → 3100), mantendo o BAHFLIX original intacto. Diferencie funcionalidades testadas de validação pendente na TV real. Preserve a pasta `roleta-bahflix` e, ao gerar novas versões, atualize o catálogo do Meu Hub/Central e o documento de continuidade, sem afirmar publicação automática.
