# Malha de Construção

Ferramenta web que gera o grid de construção de um logo a partir do arquivo SVG.

Ela lê os pontos de ancoragem e as alças Bézier do vetor e monta:

- guias horizontais e verticais nos alinhamentos
- diagonais com o ângulo marcado
- círculos de construção nas curvas circulares
- nós e alças Bézier

Cada elemento tem quantidade, opacidade, espessura e tamanho ajustáveis. O quadro aceita proporção, margem, escala e posição do logo. A exportação sai em SVG com camadas nomeadas, ou em PNG 2× e 4×, com ou sem fundo.

## Uso

Abra o site, suba um SVG (ou arraste para o palco, ou cole o código) e ajuste. Textos precisam estar convertidos em contorno.

## Estrutura

Um único `index.html`, sem build e sem dependências. Para rodar localmente, abra o arquivo no navegador.

## Publicação

Hospedado na Vercel com Framework Preset "Other", sem build command. Cada commit na branch `main` publica uma nova versão.
