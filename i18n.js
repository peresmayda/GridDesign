/* GridGrid — idioma (PT/EN)
   Os textos em português ficam no HTML. Em inglês, cada texto conhecido é trocado pelo equivalente abaixo,
   inclusive o que os scripts criam depois (um observador acompanha a página). Textos com números são montados
   nos scripts com gg.L("pt", "en"). */
(function(){
  var KEY="gg:lang",lang=null;
  try{lang=localStorage.getItem(KEY)}catch(e){}
  if(lang!=="pt"&&lang!=="en")lang=/^pt\b/i.test((navigator.languages&&navigator.languages[0])||navigator.language||"")?"pt":"en";

  var EN={
    /* landing */
    "Como funciona":"How it works","Exemplos":"Examples","Recursos":"Features","Animação":"Animation","Abrir o GridGrid":"Open GridGrid",
    "Suba o SVG.":"Upload the SVG.","Receba o grid.":"Get the grid.",
    "O GridGrid lê os pontos do vetor e desenha as guias, as diagonais, os círculos de construção, os nós e as alças do seu logo. Você ajusta cada camada e exporta.":
      "GridGrid reads the points in your vector and draws your logo's guides, diagonals, construction circles, nodes and handles. You fine-tune each layer and export.",
    "Ver exemplos":"See examples","Nós":"Nodes","Guias":"Guides","Diagonais":"Diagonals","Círculos":"Circles",
    "Gratuito":"Free","sem conta":"no account","Abra e use. Não precisa de cadastro.":"Open it and use it. No sign-up.",
    "No navegador":"In the browser","nada a instalar":"nothing to install","Funciona em qualquer navegador atual, no computador.":"Works in any current desktop browser.",
    "Arquivo local":"Local file","fica com você":"stays with you","O SVG é lido no seu computador e não vai para servidor.":"The SVG is read on your computer and never sent to a server.",
    "SVG e PNG":"SVG and PNG","em camadas":"in layers","Grupos nomeados para o Figma ou imagem em 2× e 4×.":"Named groups for Figma, or an image at 2× and 4×.",
    "Três passos":"Three steps","do arquivo ao grid":"from file to grid","Suba":"Upload","o SVG":"the SVG",
    "Arraste o arquivo, escolha no computador ou cole o código. O texto precisa estar convertido em contorno.":"Drag the file in, pick it from your computer or paste the code. Text must be converted to outlines.",
    "Ajuste":"Adjust","as camadas":"the layers",
    "Escolha o nível de detalhe e defina quantidade, opacidade e espessura de cada elemento. O quadro aceita formato, escala e posição.":"Choose the level of detail and set the amount, opacity and weight of each element. The frame takes aspect ratio, scale and position.",
    "Exporte":"Export",
    "Baixe um SVG com grupos nomeados para editar no Figma ou um PNG em 2× ou 4×, com fundo ou transparente.":"Download an SVG with named groups to edit in Figma, or a PNG at 2× or 4×, with or without a background.",
    "seis marcas, seis estilos":"six marks, six styles","Arco":"Arch","estilo Amarelo, nós vazados":"Yellow style, hollow nodes","Corte":"Cut","estilo Noturno":"Night style",
    "Degraus":"Steps","estilo Lilás, nós quadrados":"Lilac style, square nodes","Quarto":"Quarter","estilo Papel":"Paper style","Seta":"Arrow","estilo Brasa, com ângulos":"Ember style, with angles",
    "Anel":"Ring","cores próprias, com alças":"custom colors, with handles",
    "o que vem no grid":"what's in the grid","Guias e":"Guides and","diagonais":"diagonals",
    "Linhas onde os pontos se alinham e diagonais com o ângulo marcado em graus.":"Lines wherever points align, and diagonals with their angle marked in degrees.",
    "Círculos de":"Construction","construção":"circles","Desenhados só nas curvas que são arcos de círculo de verdade.":"Drawn only on curves that are true circular arcs.",
    "Nós e alças":"Nodes and","Bézier":"Bézier handles","Os pontos de ancoragem e as alças do vetor, como aparecem no editor.":"The anchor points and handles of the vector, as they appear in your editor.",
    "Controle por":"Control per","camada":"layer","Quantidade, opacidade, espessura e tamanho ajustáveis em cada elemento.":"Amount, opacity, weight and size for every element.",
    "Quadro e":"Frame and","posição":"position","Formatos de 1:1 a 16:9, margem, escala e alinhamento em nove pontos.":"Ratios from 1:1 to 16:9, margin, scale and nine-point alignment.",
    "Exportação":"Export","SVG com grupos nomeados, pronto para o Figma, ou PNG em 2× e 4×.":"SVG with named groups, ready for Figma, or PNG at 2× and 4×.",
    "Em movimento":"In motion","o grid animado":"the animated grid",
    "O grid vira vídeo, GIF ou Lottie. Escolha um dos quatro estilos, ajuste o tempo de cada camada e exporte em até 4K.":"Turn the grid into video, GIF or Lottie. Pick one of four styles, time each layer and export up to 4K.",
    "Desenhar":"Draw","contorno e guias traço a traço":"outline and guides, stroke by stroke","Construir":"Build","estrutura primeiro, forma por último":"structure first, shape last",
    "Revelar":"Reveal","o grid some e fica o logo":"the grid fades, the logo stays","Loop contínuo":"Continuous loop","linhas correndo, para fundo de vídeo":"running lines, for video backgrounds",
    "Ver a animação":"See the animation","Abra o seu SVG":"Open your SVG","e veja o grid.":"and see the grid.",
    "Funciona no navegador. Nenhum arquivo é enviado para servidor.":"Runs in your browser. No file is sent to a server.",
    "Principal":"Main","Grid de construção sendo desenhado sobre um logo de exemplo":"Construction grid being drawn over a sample logo","Em resumo":"At a glance",
    "Gratuito, direto no navegador.":"Free, right in the browser.",

    /* gerador */
    "Resetar":"Reset","Confirmar reset":"Confirm reset","Animar o grid":"Animate the grid","Ferramentas":"Tools",
    "Selecionar":"Select","Horizontal":"Horizontal","Vertical":"Vertical","Diagonal":"Diagonal","Mover logo":"Move logo","Ocultar":"Hide","Restaurar":"Restore",
    "Clique numa guia para selecionar. Arraste guias retas para mover.":"Click a guide to select it. Drag straight guides to move them.",
    "Clique para posicionar a guia horizontal. Ela encaixa nos pontos.":"Click to place the horizontal guide. It snaps to points.",
    "Clique para posicionar a guia vertical. Ela encaixa nos pontos.":"Click to place the vertical guide. It snaps to points.",
    "Clique no primeiro ponto da diagonal.":"Click the first point of the diagonal.","Clique no segundo ponto da diagonal.":"Click the second point of the diagonal.",
    "Solte":"Drop","o SVG aqui":"your SVG here",
    "Logo, detecção e elementos":"Logo, detection and elements","Estilo, quadro e exportação":"Style, frame and export",
    "Logo":"Logo","arquivo SVG":"SVG file","Exemplo de demonstração":"Demo example","Subir SVG":"Upload SVG","Remover logo":"Remove logo",
    "Arraste o arquivo para o palco ou cole o código SVG com Ctrl/Cmd+V. Textos precisam estar convertidos em contorno.":"Drag the file onto the stage or paste SVG code with Ctrl/Cmd+V. Text must be converted to outlines.",
    "Detecção":"Detection","pontos e guias":"points and guides","Nível de detalhe":"Level of detail","Simplificado":"Simple","Padrão":"Standard","Complexo":"Complex",
    "Só os alinhamentos que se repetem. Sem alças, sem círculos, sem extremos de curva.":"Only repeated alignments. No handles, no circles, no curve extremes.",
    "Guias em todos os nós e extremos de curva, com alças e círculos.":"Guides on every node and curve extreme, with handles and circles.",
    "Tudo do padrão, mais guias nas pontas das alças Bézier e agrupamento mais fino.":"Everything in Standard, plus guides at Bézier handle tips and finer grouping.",
    "Ajuste personalizado. Escolha um nível para voltar a uma predefinição.":"Custom settings. Pick a level to return to a preset.",
    "Agrupar":"Merge","Mínimo de pontos por guia":"Minimum points per guide","Incluir extremos das curvas":"Include curve extremes","Guias nos extremos das alças":"Guides at handle tips",
    "Elementos":"Elements","camadas do grid":"grid layers","Abrir todos":"Expand all","Fechar todos":"Collapse all",
    "A quantidade mantém primeiro os itens mais relevantes: guias com mais pontos alinhados, nós em mais alinhamentos, diagonais e alças mais longas, círculos maiores.":"Amount keeps the most relevant items first: guides with more aligned points, nodes in more alignments, longer diagonals and handles, larger circles.",
    "Guias H/V":"H/V guides","Ângulos":"Angles","Alças Bézier":"Bézier handles","Contorno":"Outline","Preenchimento":"Fill",
    "Quantidade":"Amount","Opacidade":"Opacity","Espessura":"Weight","Tamanho":"Size","Corpo":"Text size","Tracejado":"Dashed","Forma":"Shape",
    "Círculo":"Circle","Círculo vazado":"Hollow circle","Quadrado":"Square","Quadrado vazado":"Hollow square",
    "Mostrar Guias H/V":"Show H/V guides","Mostrar Nós":"Show nodes","Mostrar Diagonais":"Show diagonals","Mostrar Ângulos":"Show angles","Mostrar Círculos":"Show circles",
    "Mostrar Alças Bézier":"Show Bézier handles","Mostrar Contorno":"Show outline","Mostrar Preenchimento":"Show fill",
    "Ajustar Guias H/V":"Adjust H/V guides","Ajustar Nós":"Adjust nodes","Ajustar Diagonais":"Adjust diagonals","Ajustar Ângulos":"Adjust angles","Ajustar Círculos":"Adjust circles",
    "Ajustar Alças Bézier":"Adjust Bézier handles","Ajustar Contorno":"Adjust outline","Ajustar Preenchimento":"Adjust fill",
    "Estilo":"Style","cores do grid":"grid colors","Papel":"Paper","Amarelo":"Yellow","Lilás":"Lilac","Noturno":"Night","Brasa":"Ember","Grafite":"Graphite",
    "fundo":"background","forma":"shape","linhas":"lines","nós":"nodes","rótulos":"labels",
    "Quadro":"Frame","formato e posição":"format and position","Proporção":"Aspect ratio","Ajustado ao logo":"Fit to logo","Auto":"Auto","Margem":"Margin","Escala":"Scale",
    "Alinhar logo no quadro":"Align logo in frame","Posição horizontal":"Horizontal position","Posição vertical":"Vertical position",
    "Alinhar ao superior esquerdo":"Align top left","Alinhar ao superior centro":"Align top center","Alinhar ao superior direito":"Align top right",
    "Alinhar ao meio esquerdo":"Align middle left","Alinhar ao centro":"Align center","Alinhar ao meio direito":"Align middle right",
    "Alinhar ao inferior esquerdo":"Align bottom left","Alinhar ao inferior centro":"Align bottom center","Alinhar ao inferior direito":"Align bottom right",
    "A ferramenta Mover logo (M) arrasta no palco. Com ela ativa, as setas movem 0,5% e Shift + setas movem 5%. O logo encaixa no centro ao passar por ele.":"The Move logo tool (M) drags on the stage. While it's active, arrow keys move 0.5% and Shift + arrows move 5%. The logo snaps to the center as it passes.",
    "Exportar":"Export","SVG em camadas":"Layered SVG","Fundo transparente":"Transparent background","Copiar SVG":"Copy SVG",
    "O SVG sai com grupos nomeados: fundo, forma, guias, diagonais, círculos, alças, nós e rótulos. Copiar e colar no Figma gera vetores editáveis.":"The SVG comes with named groups: background, shape, guides, diagonals, circles, handles, nodes and labels. Copy and paste into Figma for editable vectors.",
    "GridGrid, página inicial":"GridGrid, home page",
    "Seu grid":"Your grid","também se mexe.":"can move too.","Animar este grid":"Animate this grid","Agora não":"Not now","Continua no":"Continues in","feito com":"made with",
    "Transforme este grid em vídeo, GIF ou Lottie. São quatro estilos de movimento, com o tempo de cada camada ajustável e exportação em até 4K.":"Turn this grid into video, GIF or Lottie. Four motion styles, adjustable timing per layer and export up to 4K.",
    "Download iniciado":"Download started","Arquivo salvo":"File saved","Logo carregado":"Logo loaded","Logo removido. O exemplo voltou.":"Logo removed. The example is back.",
    "SVG copiado. Cole no Figma ou no Illustrator.":"SVG copied. Paste it into Figma or Illustrator.",
    "Ajustes, guias manuais e guias ocultas resetados. O logo continua carregado.":"Settings, manual guides and hidden guides reset. The logo stays loaded.",
    "Use um arquivo .svg. PNG e JPG não trazem os pontos vetoriais.":"Use an .svg file. PNG and JPG don't carry vector points.",
    "Não foi possível ler este arquivo como SVG.":"This file couldn't be read as SVG.",
    "O SVG só tem texto. Converta o texto em contorno e suba de novo.":"The SVG only has text. Convert the text to outlines and upload again.",
    "Não encontrei formas vetoriais neste SVG.":"No vector shapes were found in this SVG.",
    "Há texto não convertido em contorno; ele ficou de fora.":"There's text that isn't converted to outlines; it was left out.",
    "Há elementos <use> (símbolos reutilizados); eles ficaram de fora. Expanda-os antes de exportar o SVG.":"There are <use> elements (reused symbols); they were left out. Expand them before exporting the SVG.",
    "Já há um download aguardando confirmação.":"A download is already waiting for confirmation.",
    "Não consegui gerar o PNG neste navegador. Use o SVG.":"Couldn't create the PNG in this browser. Use the SVG.",
    "Não consegui levar o grid para a animação. O arquivo pode ser grande demais.":"Couldn't send the grid to the animation. The file may be too large.",
    "Nenhuma guia oculta":"No hidden guides","Código SVG":"SVG code","PNG pronto":"PNG ready","Fechar":"Close","Grid exportado":"Exported grid",
    "O download direto não está disponível aqui. Selecione o código, copie e salve como arquivo .svg.":"Direct download isn't available here. Select the code, copy it and save it as an .svg file.",
    "Clique com o botão direito (ou toque e segure) na imagem para salvar.":"Right-click (or tap and hold) the image to save it.",
    "SVG colado":"Pasted SVG",


    /* conta e Pro */
    "Entrar":"Sign in","sem senha":"no password","Use a mesma conta do e-mail com que você comprou o Pro.":"Use the same email you bought Pro with.",
    "Continuar com o Google":"Continue with Google","ou":"or","Enviar link de acesso":"Send sign-in link","seu@email.com":"you@email.com","E-mail":"Email",
    "Sua conta":"Your account","Seu Pro está ativo. Exportação de vídeo, GIF e Lottie liberada.":"Your Pro is active. Video, GIF and Lottie export unlocked.",
    "Sua conta ainda não tem o Pro. O grid continua grátis; o Pro libera a exportação da animação.":"Your account doesn't have Pro yet. The grid stays free; Pro unlocks animation export.",
    "Ver o Pro":"See Pro","Sair":"Sign out","Conta":"Account",
    "Leve a animação":"Take the animation","para o seu projeto.":"into your project.",
    "O grid é grátis. Com o Pro, você exporta a animação em vídeo, GIF e Lottie.":"The grid is free. With Pro, you export the animation as video, GIF and Lottie.",
    "Vídeo MP4 e GIF em até 4K":"MP4 video and GIF up to 4K","Lottie para apps e After Effects":"Lottie for apps and After Effects",
    "Os quatro estilos, com ajuste de tempo por camada":"All four styles, with per-layer timing",
    "Comprar o Pro":"Buy Pro","Venda abre em breve":"Sales open soon","Já comprei":"I already bought it","Já comprei, entrar":"I already bought it, sign in",
    /* animação */
    "GridGrid Animar":"GridGrid Animate","Etapas":"Steps","Montar o grid":"Build the grid","Animar":"Animate","Estilo e camadas":"Style and layers","Tempo e exportação":"Timing and export",
    "do movimento":"of the motion","Camadas":"Layers","tempo de cada uma":"timing for each",
    "O contorno e as guias se desenham traço a traço":"The outline and guides draw themselves stroke by stroke",
    "As guias armam a estrutura e a forma preenche por último":"Guides set up the structure and the shape fills in last",
    "O grid aparece sobre o logo e some, deixando só a forma":"The grid appears over the logo and fades, leaving only the shape",
    "Tudo visível, com ondas de destaque passando pelo grid":"Everything visible, with highlight waves running through the grid",
    "Início e Duração em segundos. Intervalo é o atraso entre um elemento e o próximo da mesma camada.":"Start and Duration in seconds. Interval is the delay between one element and the next in the same layer.",
    "No loop, cada camada tem uma onda de destaque: Início desloca a onda, Duração define a largura e Intervalo o atraso entre um elemento e o próximo.":"In the loop, each layer has a highlight wave: Offset shifts the wave, Duration sets its width and Interval the delay between one element and the next.",
    "Alças":"Handles","Início":"Start","Defasagem":"Offset","Duração":"Duration","Intervalo":"Interval","Curva":"Easing","Entrada":"Entrance","Sair no fim":"Exit at the end",
    "Linear":"Linear","Suave":"Smooth","Saída":"Ease out","Elástico":"Elastic","Surgir":"Fade in","Saltar":"Pop","Subir":"Rise",
    "Animar Guias":"Animate guides","Animar Diagonais":"Animate diagonals","Animar Círculos":"Animate circles","Animar Contorno":"Animate outline","Animar Alças":"Animate handles",
    "Animar Nós":"Animate nodes","Animar Ângulos":"Animate angles","Animar Forma":"Animate shape",
    "Ajustar Guias":"Adjust guides","Ajustar Alças":"Adjust handles","Ajustar Forma":"Adjust shape",
    "vazia":"empty","desligada":"off","Esta camada está vazia ou desligada no gerador.":"This layer is empty or turned off in the generator.",
    "Prévia da animação":"Animation preview","Este é um grid de exemplo.":"This is an example grid.","Monte o seu no gerador":"Build yours in the generator","e clique em Animar o grid.":"and click Animate the grid.",
    "Pausar":"Pause","Reproduzir":"Play","Linha do tempo":"Timeline",
    "Ritmo":"Pace","tempo e ordem":"timing and order","Velocidade":"Speed","Pausa no fim":"Hold at end","Ciclo":"Cycle","Ordem dos elementos":"Element order",
    "Da esquerda":"From the left","Do centro":"From the center","Aleatória":"Random",
    "Formato":"Format","tamanho e quadros":"size and frames","Lado maior":"Long side","Quadros por segundo":"Frames per second",
    "vídeo, GIF, Lottie":"video, GIF, Lottie","Vídeo MP4":"MP4 video","Cancelar":"Cancel",
    "Preparando o vídeo…":"Preparing the video…","Preparando o GIF…":"Preparing the GIF…","Gravando em tempo real…":"Recording in real time…",
    "Exportação cancelada":"Export canceled","Não consegui gerar o vídeo.":"Couldn't create the video.","Não consegui gerar o GIF.":"Couldn't create the GIF.","Não consegui gerar o Lottie.":"Couldn't create the Lottie.",
    "Este navegador não grava vídeo. Use o Chrome, o Edge ou o Safari atualizados.":"This browser can't record video. Use an up-to-date Chrome, Edge or Safari.",
    "Os rótulos de ângulo não entram no Lottie: texto depende de fontes instaladas no app.":"Angle labels aren't included in the Lottie: text depends on fonts installed in the app."
  };
  var keys={};for(var k in EN)keys[k.replace(/\s+/g," ").trim()]=EN[k];

  function t(s){if(lang!=="en"||s==null)return s;var n=String(s).replace(/\s+/g," ").trim();return keys[n]!=null?keys[n]:s}
  function trNode(node){
    var v=node.nodeValue;if(!v||!/\S/.test(v))return;
    var p=node.parentNode;if(!p||p.nodeType!==1||/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName))return;
    var n=v.replace(/\s+/g," ").trim(),r=keys[n];if(r==null)return;
    var lead=v.match(/^\s*/)[0],trail=v.match(/\s*$/)[0];var nv=lead+r+trail;if(nv!==v)node.nodeValue=nv;
  }
  var ATTRS=["aria-label","title","placeholder","alt"];
  function trEl(el){for(var i=0;i<ATTRS.length;i++){var a=el.getAttribute&&el.getAttribute(ATTRS[i]);if(a){var r=keys[a.replace(/\s+/g," ").trim()];if(r!=null&&r!==a)el.setAttribute(ATTRS[i],r)}}}
  function walk(root){
    if(root.nodeType===3){trNode(root);return}
    if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11)return;
    if(root.nodeType===1){if(root.namespaceURI==="http://www.w3.org/2000/svg"&&root.localName!=="svg")return;trEl(root)}
    var w=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:function(n){
      if(n.nodeType===1&&n.namespaceURI==="http://www.w3.org/2000/svg")return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});
    var n;while((n=w.nextNode())){if(n.nodeType===3)trNode(n);else trEl(n)}
  }

  window.gg={lang:lang,loc:lang==="en"?"en-US":"pt-BR",t:t,L:function(pt,en){return lang==="en"?en:pt}};
  document.documentElement.lang=lang==="en"?"en":"pt-BR";

  if(lang==="en"){
    var mo=new MutationObserver(function(list){
      for(var i=0;i<list.length;i++){var m=list[i];
        if(m.type==="characterData")trNode(m.target);
        else if(m.type==="attributes")trEl(m.target);
        else for(var j=0;j<m.addedNodes.length;j++)walk(m.addedNodes[j]);
      }
      if(document.title&&keys[document.title]!=null)document.title=keys[document.title];
    });
    mo.observe(document,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
    var md=null;document.addEventListener("DOMContentLoaded",function(){
      walk(document.body);if(keys[document.title]!=null)document.title=keys[document.title];
      md=document.querySelector('meta[name="description"]');
      if(md)md.setAttribute("content","Upload your logo's SVG and get its construction grid: guides, angled diagonals, circles, nodes and Bézier handles. Free, right in the browser.");
    });
  }

  /* seletor PT | EN: entra em qualquer elemento com data-lang-switch */
  var css=".langsw{display:inline-flex;gap:2px;padding:3px;border-radius:19px;background:#EFEFED;flex:none}"+
    ".langsw button{height:30px;min-width:38px;padding:0 10px;border:0;border-radius:15px;background:none;cursor:pointer;font-weight:700;font-size:13px;line-height:1;font-family:inherit;color:#000;letter-spacing:.02em}"+
    ".langsw button:hover{background:#fff}.langsw button[aria-pressed=\"true\"]{background:#000;color:#fff}"+
    ".langsw button:focus-visible{outline:2px solid #2F55FF;outline-offset:2px}";
  var st=document.createElement("style");st.textContent=css;(document.head||document.documentElement).appendChild(st);
  function mount(){
    try{var y=sessionStorage.getItem("gg:scroll");if(y!=null){sessionStorage.removeItem("gg:scroll");window.scrollTo(0,+y)}}catch(e){}
    var hosts=document.querySelectorAll("[data-lang-switch]");
    for(var i=0;i<hosts.length;i++){var h=hosts[i];h.className+=" langsw";h.setAttribute("role","group");h.setAttribute("aria-label",lang==="en"?"Language":"Idioma");
      [["pt","PT","Português"],["en","EN","English"]].forEach(function(o){var b=document.createElement("button");b.type="button";b.textContent=o[1];b.title=o[2];b.lang=o[0];
        b.setAttribute("aria-pressed",String(o[0]===lang));
        b.addEventListener("click",function(){if(o[0]===lang)return;try{localStorage.setItem(KEY,o[0]);sessionStorage.setItem("gg:scroll",String(window.scrollY))}catch(e){}location.reload()});
        h.appendChild(b)})}
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);else mount();
})();
