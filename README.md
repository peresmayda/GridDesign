# GridGrid

Suba o SVG de um logo e receba o grid de construção: guias, diagonais com ângulo, círculos de construção, nós e alças Bézier. Cada camada é ajustável e a exportação sai em SVG com grupos nomeados ou PNG.

## Estrutura

- `index.html`: landing page
- `app/index.html`: a ferramenta
- `favicon.svg`
- `vercel.json`: URLs limpas (`/app` em vez de `/app/index.html`)

Sem build e sem dependências. Tudo roda no navegador; nenhum arquivo é enviado para servidor. A tipografia é a Inter Tight, carregada do Google Fonts.

## Publicação

Vercel, Framework Preset "Other", sem build command. Cada commit na branch `main` publica uma nova versão.
