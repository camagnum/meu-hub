# Continuidade do projeto — EmBBate

> **Documento de referência para iniciar um novo chat**  
> Atualização documental: 10 de novembro de 2026  
> Identificador na Central: `embbate`  
> Estado verificado: **Ativo**  
> Última versão conhecida: **v1.14**  
> Plataforma: Notebook e celular

## 1. Objetivo do projeto

Aplicação para organizar o campeonato interno de futebol entre funcionários do Banco do Brasil: inscrições, presença, sorteio equilibrado, jogos e telão.

## 2. O que já foi feito / o que foi aprovado

- **Último ZIP encontrado:** `EmBBate_v1.14.zip` (mais novo que a referência antiga v1.12 do Hub). A v1.14 traz todos os recursos até v1.13.1 mais melhorias no modo telão, sorteio e auditoria.
- Lista de jogadores importada da avaliação com Nota Final, idade, posição; sorteio equilibra por nota, idade e posição. Capitães entre maiores notas não podem ficar juntos; **Elisson** é goleiro compartilhado e fica fora do sorteio; **Enrico Nunes** e **Eder Sakamoto** separados.
- Campeonato para 4 ou 5 times, todos contra todos uma vez. 4 times: 6 confrontos de 20 minutos; 5: 10 confrontos de 12 minutos, intervalo de 2 min (conforme README v1.14).
- Check-in com botão compacto CHEGUEI / Presente, cancelamento com confirmação; nomes numa linha, com redução de tamanho/reticências se necessário.
- Prévia de sorteio com permutas e desfazer (sem trocar capitães por não capitães, respeitando restrições), braçadeira `C` em vez de estrela, goleiro fora dos cards.
- Modo organizador por senha compartilhada no Supabase; operações administrativas ocultas do participante; notas individuais privadas no banco.
- Jogos, cronômetro, placar ao vivo, classificação, artilharia e confirmação; Modo Telão para TV, tela cheia, placar, cronômetro, tabela e próximo jogo.
- **v1.14:** aba Logs somente para organizadores, eventos de check-ins, sorteios, permutas, placares e Reset; migração para `public.embbate_audit_logs`, logs não apagados no Reset.
- Reset preserva inscritos/notas e logs; remove times, presenças, jogos, placares e artilharia.

## 3. Decisões, restrições e instruções que não podem se perder

- **Pasta interna ZIP sempre `embbate`; nome do ZIP com número de versão** (ex.: `EmBBate_v1.14.zip`). **Nunca incluir `config.js`**; copiar o `config.js` configurado na instalação do usuário ao atualizar.
- Atualizar em sequência SQL, função Edge `embbate-api`, Netlify; seguir `ATUALIZACAO_v1.13.1_PARA_v1.14.md`. Não executar `supabase.sql` ou migrações antigas em banco já configurado.
- Logs ficam na tabela com RLS, sem acesso anônimo. Não expor avaliação individual/notas nem segredos. Senha compartilhada não permite identificar qual organizador agiu; logs representam ações e horários.
- Reset é destrutivo para resultados do torneio; nunca usá-lo como solução para falhas de conexão.
- Testes reais de banco e deploy do usuário ainda precisam ser confirmados; ZIP disponível não garante implantação concluída.

## 4. Pendências e próximos passos

- Confirmar se a v1.14 foi efetivamente publicada no Netlify e se `supabase_upgrade_v1.14.sql` e a Edge Function correspondente foram aplicados.
- Conferir Logs, modo telão e check-in em dispositivos reais; acompanhar evolução das regras do campeonato.
- No Meu Hub, corrigir referência antiga v1.12 para v1.14 (feito no pacote Hub v1.0.2).

## 5. Arquivos de referência e estado da implementação

`/EmBBate_v1.14.zip`; `embbate/NOVIDADES_v1.14.md`; `ATUALIZACAO_v1.13.1_PARA_v1.14.md`; `supabase_upgrade_v1.14.sql`.

**Critério de segurança de continuidade:** o resumo é um mapa, não substitui inspecionar o ZIP real ou arquivos de banco antes de alterar código. Não afirmar que propostas foram implementadas, nem que pacotes disponíveis já foram publicados em produção. Verificar a data e versão de cada artefato ao retomar.

## 6. Texto para colar no primeiro envio do novo chat

> Vamos continuar o projeto **EmBBate**. Leia o arquivo `CONTINUIDADE_DO_PROJETO.md` anexado e use-o como documento de transferência de contexto. Estado: **Ativo**; versão-base conhecida: **v1.14**. Preserve o que já foi construído, o histórico de decisões e as pendências. **Antes de editar, confira o ZIP/código-fonte mais recente anexado e diferencie implementado, pendente e ideia**. Ao criar uma versão ou um novo aplicativo, atualize o catálogo do Meu Hub e da Central de Projetos e Versões e revise este resumo de continuidade, sem afirmar publicação automática onde não houver integração configurada.

---

### Convenções para futuras atualizações deste documento

Ao entregar uma nova versão: (1) registrar a nova versão, data e nome exato do ZIP; (2) descrever funcionalidades realmente testadas; (3) listar arquivos/configurações preservados; (4) separar pendências não incorporadas; (5) registrar migrações necessárias sem incluir segredos; (6) atualizar este resumo e o catálogo do Meu Hub/Central. Se houver conflito entre documentação antiga e o ZIP mais recente verificado, dar prioridade à evidência atual e anotar a divergência.
