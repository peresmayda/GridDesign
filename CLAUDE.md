# GridGrid — contexto do projeto

Ferramenta web que gera o grid de construção de um logo a partir de um SVG (guias, diagonais com ângulo, círculos de construção, nós e alças Bézier). Estilo visual Bauhaus. Dona: Mayda (Studio Noar, MEI). Conversas em português.

- Site: https://gridgrid-two.vercel.app (Vercel, deploy automático a cada push)
- Repositório: github.com/peresmayda/GridDesign
- `main` = site oficial. `pro` = branch de trabalho (prévia em gridgrid-git-pro-peresmaydas-projects.vercel.app, protegida pelo login da Vercel).
- Fluxo: trabalhar em `pro`, testar na prévia, depois `git checkout main && git merge --ff-only pro && git push origin main pro`.

## Estrutura

HTML/CSS/JS estático, sem build. `vercel.json` usa `cleanUrls`.

- `index.html` — landing (hero, como funciona, exemplos, recursos, bloco preto da animação com preço e lista de espera, fechamento).
- `app/index.html` — gerador de grid (grátis). Pop-up do Pro na 3ª e 5ª exportação (`malha:exports`).
- `app/animar.html` — página de animação. **Não editar direto:** editar `tools/animar.tpl.html` e rodar `python3 tools/build_animar.py`.
- `termos.html`, `privacidade.html` — gerados por `python3 tools/build_legal.py` (editar o script, não o HTML).
- `auth.js` — login (Supabase, link por e-mail; Google desligado com `GOOGLE_ON=false`), checagem do Pro, card do Pro, preço (`PRICE`), link de compra (`CHECKOUT_URL`), lista de espera. Classe `gg-pro` no `<html>` esconde tudo com `data-pro-tag` e a marca d'água da prévia.
- `i18n.js` — PT/EN. Textos ficam em português no HTML; o dicionário `EN` traduz. Textos com números usam `gg.L(pt, en)`.
- `vendor/` — supabase-js, mp4-muxer, gifenc (fixados).
- `tools/` — moldes e scripts; não vai para o site (`.vercelignore`).
- Fontes Helvetica Now não vão para o repositório (licença). O site usa Inter Tight do Google Fonts.

## Pro

- Grid grátis. Animação: prévia aberta com marca "feito com GridGrid"; exportar MP4/GIF/Lottie exige Pro.
- Preço: pagamento único R$ 97 / US$ 24; lançamento R$ 67 / US$ 17 (`PRICE.LAUNCH=true` em `auth.js`).
- Supabase: projeto `gridgrid`, ref `paijzdsdagjwdzhvmnto` (sa-east-1). Chave publicável no `auth.js` (pode ser pública). Nunca colocar a service role key no site.
- Tabelas: `pro_access` (email, status active/refunded/revoked, source, order_id; RLS: cada usuário lê só o próprio registro) e `pro_waitlist` (só insert pelo site, sem leitura).
- E-mail de teste com Pro: peres.mayda@gmail.com (source `teste`).

## Pendências (em ordem)

1. Escolher a plataforma de pagamento (Pix: Mercado Pago ou Hotmart). Depois: Edge Function no Supabase recebendo o webhook, fazendo upsert em `pro_access` e revogando em reembolso; preencher `CHECKOUT_URL`.
2. SMTP próprio no Supabase (ex.: Resend) — o padrão só envia para membros do projeto.
3. Supabase → Authentication → URL Configuration: Site URL `https://gridgrid-two.vercel.app`; Redirect URLs `https://gridgrid-two.vercel.app/**` e `https://gridgrid-*.vercel.app/**`.
4. Testar exportação MP4 num Chrome e num Safari reais.
5. Termos e privacidade: preencher `[CNPJ]` e `[ENDEREÇO]` em `tools/build_legal.py`, gerar e publicar (hoje só na branch `pro`). Contato: stu.noar@gmail.com. Revisão por advogado recomendada.
6. Login com Google (cliente OAuth no Google Cloud, depois `GOOGLE_ON=true`).
7. Domínio próprio, imagem de compartilhamento (og:image), medição de acessos.

## Preferências de trabalho

- Texto direto e seco, sem clichês. Nunca deixar uma palavra sozinha na última linha.
- Perguntar antes de decisões grandes; propor e mostrar antes de publicar.
- Testar em PT e EN, no computador e no celular (390 px), sem rolagem horizontal.
