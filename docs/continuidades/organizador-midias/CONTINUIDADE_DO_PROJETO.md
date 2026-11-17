# Continuidade do projeto — Organizador de Filmes e Séries (Acervo+)

> Última atualização: **12/11/2026**  
> Identificador Meu Hub: `organizador-midias`  
> Status: **Desenvolvido; publicação/instalação real pendente**  
> Versão: **v1.0.0**  
> Entrega: `organizador_midias_v1.0.0.zip` — pasta interna **`organizador-midias`**  
> Plataformas: **Notebook Windows + celular pela rede local**.

## Visão do projeto

Aplicativo independente, chamado visualmente **Acervo+**, para analisar os vídeos do HD que alimentam o BAHFLIX. A interface é responsiva, com quatro telas: Visão geral, Meu acervo, Diagnóstico e Configurações. O computador hospeda o serviço, o celular abre o endereço IP do computador na mesma Wi-Fi.

## Implementado e validado na v1.0.0

- **Servidor Python 3.10+ sem dependências externas**, `server.py` na porta **3200**, iniciado por `iniciar-organizador.bat`. O servidor é independente do BAHFLIX e acessível por navegador na LAN.
- PIN aleatório de 6 dígitos apresentado no terminal a cada inicialização, sessão na aba do navegador, autenticação para APIs de dados e configurações. Limite de tentativas de PIN.
- Três bibliotecas pré-configuradas: `F:\Pessoal\Filmes`, `F:\Pessoal\Séries`, `F:\Pessoal\Animes`. Editáveis em Configurações; primeiro uso cria `config.json` local.
- Scanner recursivo e **somente leitura** que indexa vídeos e mostra quantidades, produções, tamanhos, extensões, disponibilidade das pastas e data da análise.
- **Duplicados exatos** por SHA-256 completo apenas entre arquivos de mesmo tamanho. Cache local de hashes para reaproveitar verificações no próximo scan. Economia de espaço estimada; não exclui arquivos.
- **Legendas externas:** detecta arquivos SRT/ASS/SSA/VTT/SUB/SMI na mesma pasta com prefixo compatível com o vídeo. Não detecta faixas internas ou legendas em subpastas.
- **Séries/animes:** identifica padrão `S01E02`, `1x02`, `Episódio 02` com pasta `Temporada 1`; mostra possíveis episódios ausentes apenas entre o mínimo e o máximo encontrados, sem consultar lista oficial. Mostra arquivos com numeração não reconhecida.
- Inventário pesquisável, filtros de biblioteca e sinalização de legenda; diagnóstico por categoria; exportação em JSON e CSV.
- Consulta **somente do estado do BAHFLIX local** em `localhost:3000/api/health`; **não modifica** seu catálogo, vídeos, preferências, histórico ou `config.json`.
- Verificações executadas: 3 testes unitários Python; teste HTTP do login, scan e relatório com acervo fictício (48 vídeos, 1 duplicata real e 3 lacunas); sintaxe Python/JavaScript; UI em Chromium isolado com desktop e celular (sem overflow ou erros JS). **Ainda falta teste no notebook e celular reais do usuário.** O navegador automatizado não pôde acessar a URL localhost por restrição do ambiente; a UI foi exercitada em ambiente isolado com respostas simuladas.

## Limitações e segurança

- Não funciona como app estático Netlify; o scanner precisa rodar no notebook que acessa o HD. Conectividade via IP: `http://IP-DO-PC:3200`. Notebook e celular na mesma rede privada, notebook ligado.
- PIN sobre HTTP local **não criptografa tráfego**. Não expor a internet, VPN pública nem Wi-Fi compartilhado com estranhos.
- Os relatórios ficam em memória até parar o serviço; se reiniciar, execute análise novamente. Configuração e cache SHA são locais ao notebook.
- Sem detecção de legendas embutidas, sem garantia de detectar episódios finais ausentes, sem metadados/ffprobe, sem renomear ou excluir.
- Leitura de discos grandes e cálculo de SHA podem levar tempo. Não prometer tempo ou desempenho sem teste real.

## Próximas melhorias / backlog

1. Validar acervo e rede reais Windows + Android/iPhone, incluindo Firewall e letras de HD.
2. Metadados de legendas embutidas, codecs e duração via FFprobe opcional.
3. Conferir total de episódios por temporada com fonte confiável (se disponível), sem inferir quando desconhecido.
4. Sugestões de padronização de nomes com prévia, backup e desfazer antes de qualquer edição.
5. Exportar um inventário persistente opcional e mostrar diferenças entre dois scans; detectar arquivos desaparecidos.
6. Melhorar detecção de legendas guardadas em subpastas e múltiplas versões de vídeos.

## Arquivos de referência

- ZIP: `organizador_midias_v1.0.0.zip`
- Base BAHFLIX verificada: `bahflix_v0.5.3.zip`; sem alterações neste projeto.
- Hub atualizado com lançamento: `meu_hub_v1.0.5.zip` (catálogo + continuidade).

## Mensagem para um novo chat

> Quero continuar o aplicativo **Acervo+ — Organizador de Filmes e Séries**, v1.0.0. Leia o `CONTINUIDADE_DO_PROJETO.md` e confira o ZIP `organizador_midias_v1.0.0.zip`. Preserve a pasta interna `organizador-midias`, os caminhos configurados e o princípio de **somente leitura por padrão**. O app usa Python 3.10+, serve a interface para notebook e celular pela rede local, com PIN. Integração BAHFLIX atualmente apenas de status, sem modificar arquivos. Antes de implementar qualquer alteração destrutiva, exija uma prévia, confirmação e reversão. Ao criar uma versão, atualize o Meu Hub/Central, catálogo e este documento de continuidade sem afirmar deploy automático.
