# Gera termos.html e privacidade.html (PT + EN) para o GridGrid.
import sys, pathlib
OUT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(__file__).resolve().parent.parent
UPDATED_PT = "16 de outubro de 2026"
UPDATED_EN = "October 16, 2026"
MAIL = "stu.noar@gmail.com"
M = f'<a href="mailto:{MAIL}">{MAIL}</a>'
CNPJ = '<mark class="ph">[CNPJ]</mark>'
ADDR = '<mark class="ph">[ENDEREÇO]</mark>'
ADDR_EN = '<mark class="ph">[ADDRESS]</mark>'

PAGE = """<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{title_pt} · GridGrid</title>
<script src="i18n.js"></script>
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;800&display=swap">
<style>
:root{{--paper:#E4E5E7;--sheet:#EFEFED;--ink:#000;--gray:#9FA0A4;--soft:#55565A;--lime:#E3FF3A;--yellow:#FFE94A;--blue:#8EA6E4;--pink:#F7B8EF;--sage:#A9CCB8;
  --type:"Inter Tight","Helvetica Neue",Helvetica,Arial,sans-serif;color-scheme:light}}
*{{box-sizing:border-box}}
html{{scroll-behavior:smooth;scroll-padding-top:24px}}
body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--type);font-size:17px;line-height:1.55;-webkit-font-smoothing:antialiased}}
a{{color:inherit}}
:focus-visible{{outline:2px solid #2F55FF;outline-offset:3px}}
.wrap{{max-width:1360px;margin:0 auto;padding-left:max(20px,env(safe-area-inset-left,0px));padding-right:max(20px,env(safe-area-inset-right,0px))}}
.nav{{display:flex;align-items:center;gap:12px;padding-block:22px}}
.logo{{font-weight:800;font-size:26px;letter-spacing:-.05em;text-decoration:none;margin-right:auto}}
.logo i{{font-style:normal}}.c1{{color:var(--yellow)}}.c2{{color:var(--blue)}}.c3{{color:var(--pink)}}.c4{{color:var(--sage)}}
.pill{{display:inline-flex;align-items:center;height:40px;padding:0 20px;border-radius:20px;background:var(--ink);color:#fff;text-decoration:none;font-weight:700;font-size:15px}}
.pill:hover{{background:#262626}}
.doc{{display:grid;grid-template-columns:minmax(0,15rem) minmax(0,46rem);gap:56px;padding:40px 0 96px;justify-content:center}}
.toc{{position:sticky;top:24px;align-self:start;display:grid;gap:4px;font-size:14.5px}}
.toc b{{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--soft);margin-bottom:6px}}
.toc a{{text-decoration:none;padding:4px 0;color:var(--soft);font-weight:500}}
.toc a:hover{{color:var(--ink)}}
.toc .other{{margin-top:16px;padding-top:16px;border-top:1px solid rgba(0,0,0,.12);color:var(--ink);font-weight:700}}
h1{{margin:0 0 8px;font-weight:800;font-size:clamp(40px,6vw,72px);line-height:.92;letter-spacing:-.05em}}
h1 span{{display:block;color:var(--gray)}}
.meta{{color:var(--soft);font-size:15px;margin:16px 0 0}}
.lead{{font-size:19px;line-height:1.5;margin:28px 0 0;font-weight:500}}
.box{{margin:28px 0 0;padding:20px 22px;border-radius:20px;background:var(--sheet);font-size:15.5px}}
.box p{{margin:0}}.box p+p{{margin-top:8px}}
h2{{margin:48px 0 12px;font-weight:800;font-size:26px;line-height:1.1;letter-spacing:-.03em;scroll-margin-top:24px}}
h2 .n{{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ink);color:#fff;font-size:14px;margin-right:10px;vertical-align:4px;letter-spacing:0}}
#arrependimento h2 .n,h2#arrependimento .n,h2#withdrawal .n{{background:var(--lime);color:var(--ink)}}
p,li{{text-wrap:pretty}}
p{{margin:0 0 12px}}
ul{{margin:0 0 12px;padding-left:20px}}li{{margin:0 0 8px}}
table{{width:100%;border-collapse:collapse;margin:8px 0 16px;font-size:15px}}
th,td{{text-align:left;vertical-align:top;padding:12px 10px;border-top:1px solid rgba(0,0,0,.12)}}
th{{font-size:12.5px;letter-spacing:.04em;text-transform:uppercase;color:var(--soft);font-weight:700;border-top:0}}
td:first-child{{font-weight:700}}
.hl{{background:var(--lime);border-radius:20px;padding:20px 22px;margin:8px 0 16px}}
.hl p:last-child,.hl ul:last-child{{margin-bottom:0}}
mark.ph{{background:var(--yellow);padding:0 4px;border-radius:4px}}
.note{{font-size:14px;color:var(--soft)}}
footer{{display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;padding:28px 0 40px;border-top:1px solid rgba(0,0,0,.12);font-size:14px;color:var(--soft)}}
footer nav{{display:flex;gap:18px;flex-wrap:wrap}}
footer a{{text-decoration:none;font-weight:600;color:var(--ink)}}
footer a:hover{{text-decoration:underline}}
[hidden]{{display:none!important}}
@media (max-width:900px){{.doc{{grid-template-columns:minmax(0,1fr);gap:24px;padding-top:16px}}.toc{{position:static;display:none}}}}
@media (max-width:640px){{.nav .pill{{display:none}}table,thead,tbody,tr,th,td{{display:block}}thead{{display:none}}td{{border-top:0;padding:2px 0}}tr{{border-top:1px solid rgba(0,0,0,.12);padding:12px 0}}}}
</style>
</head>
<body>
<div class="wrap">
  <nav class="nav" aria-label="Principal">
    <a class="logo" href="/" aria-label="GridGrid">Grid<span aria-hidden="true"><i class="c1">G</i><i class="c2">r</i><i class="c3">i</i><i class="c4">d</i></span></a>
    <a class="pill" href="/app/index.html">Abrir o GridGrid</a>
    <div data-lang-switch></div>
  </nav>
  <div class="doc">
    <aside class="toc" data-l="pt"><b>Nesta página</b>{toc_pt}<a class="other" href="{other_href}">{other_pt}</a></aside>
    <aside class="toc" data-l="en" hidden><b>On this page</b>{toc_en}<a class="other" href="{other_href}">{other_en}</a></aside>
    <main>
      <article data-l="pt" lang="pt-BR">{body_pt}</article>
      <article data-l="en" lang="en" hidden>{body_en}</article>
    </main>
  </div>
  <footer>
    <span><strong>GridGrid</strong>, 2026 · Studio Noar</span>
    <nav aria-label="Legal"><a href="/termos">Termos de uso e venda</a><a href="/privacidade">Política de privacidade</a><a href="mailto:{mail}">{mail}</a></nav>
  </footer>
</div>
<script>(function(){{var l=(window.gg&&gg.lang)||"pt";document.documentElement.lang=l==="en"?"en":"pt-BR";document.querySelectorAll("[data-l]").forEach(function(e){{e.hidden=e.getAttribute("data-l")!==l}});if(l==="en"&&location.hash==="#arrependimento")location.hash="#withdrawal";}})();</script>
</body>
</html>
"""

def sec(i, sid, title, html):
    return f'<h2 id="{sid}"><span class="n">{i}</span>{title}</h2>{html}', f'<a href="#{sid}">{title}</a>'

def build(sections):
    body, toc = [], []
    for i, (sid, t, h) in enumerate(sections, 1):
        b, a = sec(i, sid, t, h); body.append(b); toc.append(a)
    return "".join(body), "".join(toc)

# ---------------- TERMOS (PT) ----------------
terms_pt = [
("quem", "Quem oferece", f"""
<p>O GridGrid é oferecido por <strong>Studio Noar</strong>, microempreendedora individual (MEI), CNPJ {CNPJ}, com endereço em {ADDR}. Contato: {M}.</p>
<p>Ao usar o site ou comprar o GridGrid Pro, você concorda com estes termos. Leia também a <a href="/privacidade">Política de privacidade</a>.</p>"""),
("servico", "O que é o GridGrid", """
<p>O GridGrid é uma ferramenta que funciona no navegador e gera grids de construção a partir de arquivos SVG.</p>
<ul><li><strong>Gerador de grid:</strong> gratuito, sem necessidade de conta.</li>
<li><strong>Animação do grid:</strong> a prévia é aberta a todos e mostra a marca “feito com GridGrid”. Exportar a animação em vídeo MP4, GIF ou Lottie exige o GridGrid Pro.</li></ul>"""),
("arquivos", "Seus arquivos", """
<p>Os arquivos SVG que você abre são processados no seu próprio navegador e <strong>não são enviados aos nossos servidores</strong>. Os logos e tudo o que você exporta continuam sendo seus.</p>
<p>Você declara ter o direito de usar os arquivos que abre na ferramenta.</p>
<p>O navegador guarda no seu aparelho as suas configurações e o último logo aberto, para você continuar de onde parou. O botão Resetar apaga essas informações.</p>"""),
("conta", "Conta", """
<p>Para comprar e usar o Pro, você entra com o seu e-mail, por um link de acesso sem senha, ou com a sua conta Google, quando essa opção estiver disponível.</p>
<p>O Pro fica ligado ao e-mail usado na compra. Use um e-mail que só você controla. Você é responsável pelo uso da sua conta.</p>"""),
("pro", "GridGrid Pro", """
<ul><li><strong>Preço:</strong> o valor mostrado no site no momento da compra, em pagamento único. Não é assinatura e não há cobrança recorrente.</li>
<li><strong>O que inclui:</strong> exportação da animação em vídeo MP4 e GIF em até 4K e em Lottie JSON, os quatro estilos de animação e o ajuste de tempo por camada, como descritos no site no momento da compra.</li>
<li><strong>Licença:</strong> pessoal e intransferível. Você pode usar as animações exportadas em projetos próprios e de clientes, comerciais ou não, sem marca d’água.</li>
<li><strong>Duração:</strong> o acesso não expira enquanto o GridGrid estiver em funcionamento. Se o serviço for encerrado, avisaremos com pelo menos 30 dias de antecedência pelo e-mail da conta.</li>
<li><strong>Pagamento:</strong> processado pela plataforma de pagamento indicada na página de compra, que emite o comprovante. Não recebemos nem guardamos os dados do seu cartão.</li>
<li><strong>Liberação:</strong> o Pro é liberado para o e-mail usado na compra, em geral poucos minutos depois da confirmação do pagamento. Se não for liberado em até 24 horas, escreva para o nosso contato.</li></ul>"""),
("arrependimento", "Direito de arrependimento e reembolso", f"""
<div class="hl"><p><strong>Você tem 7 dias corridos, contados da data da compra, para desistir do Pro sem precisar dar motivo.</strong> O valor pago é devolvido integralmente. Esse direito está no art. 49 do Código de Defesa do Consumidor.</p></div>
<p><strong>Como pedir:</strong></p>
<ul><li>escreva para {M} informando o e-mail usado na compra; ou</li>
<li>use a opção de reembolso da plataforma de pagamento, pelo mesmo caminho da compra.</li></ul>
<p>Confirmamos o recebimento do seu pedido por e-mail.</p>
<p><strong>Devolução:</strong> pedimos o estorno à plataforma de pagamento imediatamente, pelo mesmo meio usado na compra. No Pix, o valor costuma voltar no mesmo dia. No cartão de crédito, o estorno aparece na fatura conforme o prazo do banco emissor.</p>
<p>Com o reembolso, o acesso ao Pro é encerrado.</p>
<p><strong>Depois dos 7 dias:</strong> se o Pro apresentar um problema que impeça o uso e que não conseguirmos resolver em até 30 dias depois do seu contato, você pode pedir a devolução do valor pago.</p>"""),
("uso", "Uso permitido", """
<p>Não é permitido:</p>
<ul><li>contornar a verificação do Pro ou a marca da prévia;</li>
<li>revender, sublicenciar ou compartilhar o acesso ao Pro com outras pessoas;</li>
<li>copiar o site ou o código para oferecer um serviço concorrente;</li>
<li>usar o GridGrid para fins ilegais ou de forma que prejudique o funcionamento do site.</li></ul>
<p>Se isso acontecer, podemos suspender o acesso ao Pro depois de avisar por e-mail.</p>"""),
("disponibilidade", "Disponibilidade e mudanças", """
<p>Trabalhamos para manter o GridGrid no ar, mas o site pode passar por instabilidades e manutenções.</p>
<p>Podemos melhorar e mudar recursos. Se um recurso do Pro descrito no momento da sua compra deixar de existir, ofereceremos uma alternativa equivalente.</p>"""),
("responsabilidade", "Responsabilidade", """
<p>O grid gerado é um ponto de partida técnico calculado a partir do seu arquivo. Confira o resultado antes de usá-lo em uma entrega.</p>
<p>Nada nestes termos limita os direitos que o Código de Defesa do Consumidor garante a você.</p>"""),
("propriedade", "Propriedade intelectual", """
<p>O nome GridGrid, a marca, o site e o código pertencem ao Studio Noar. Os seus logos e os arquivos que você exporta pertencem a você.</p>"""),
("alteracoes", "Alterações nestes termos", """
<p>Podemos atualizar estes termos. A data no topo indica a versão em vigor. Mudanças relevantes serão avisadas no site ou por e-mail a quem tem conta.</p>
<p>Compras já feitas seguem os termos aceitos na compra, sempre que forem mais favoráveis a você.</p>"""),
("lei", "Lei aplicável e foro", f"""
<p>Estes termos seguem a lei brasileira. Fica eleito o foro do domicílio do consumidor.</p>
<p>Dúvidas ou problemas: {M}.</p>"""),
]

terms_en = [
("who", "Who provides it", f"""
<p>GridGrid is provided by <strong>Studio Noar</strong>, a Brazilian sole proprietorship (MEI), CNPJ {CNPJ}, located at {ADDR_EN}. Contact: {M}.</p>
<p>By using the site or buying GridGrid Pro, you agree to these terms. Please also read the <a href="/privacidade">Privacy policy</a>.</p>"""),
("service", "What GridGrid is", """
<p>GridGrid is a browser-based tool that generates construction grids from SVG files.</p>
<ul><li><strong>Grid generator:</strong> free, no account needed.</li>
<li><strong>Grid animation:</strong> the preview is open to everyone and shows a “made with GridGrid” mark. Exporting the animation as MP4 video, GIF or Lottie requires GridGrid Pro.</li></ul>"""),
("files", "Your files", """
<p>The SVG files you open are processed in your own browser and <strong>are not sent to our servers</strong>. Your logos and everything you export remain yours.</p>
<p>You confirm you have the right to use the files you open in the tool.</p>
<p>Your browser stores your settings and the last logo you opened on your device so you can pick up where you left off. The Reset button deletes this information.</p>"""),
("account", "Account", """
<p>To buy and use Pro, you sign in with your email, through a password-free access link, or with your Google account when that option is available.</p>
<p>Pro is tied to the email used for the purchase. Use an email only you control. You are responsible for the use of your account.</p>"""),
("pro", "GridGrid Pro", """
<ul><li><strong>Price:</strong> the amount shown on the site at the time of purchase, as a one-time payment. It is not a subscription and there are no recurring charges.</li>
<li><strong>What it includes:</strong> exporting the animation as MP4 video and GIF up to 4K and as Lottie JSON, the four animation styles and per-layer timing, as described on the site at the time of purchase.</li>
<li><strong>License:</strong> personal and non-transferable. You may use exported animations in your own and your clients’ projects, commercial or not, without a watermark.</li>
<li><strong>Duration:</strong> access does not expire while GridGrid is in operation. If the service is shut down, we will give at least 30 days’ notice to your account email.</li>
<li><strong>Payment:</strong> handled by the payment platform shown on the checkout page, which issues the receipt. We never receive or store your card details.</li>
<li><strong>Activation:</strong> Pro is activated for the email used for the purchase, usually within a few minutes of payment confirmation. If it is not active within 24 hours, contact us.</li></ul>"""),
("withdrawal", "Right of withdrawal and refunds", f"""
<div class="hl"><p><strong>You have 7 calendar days from the date of purchase to cancel Pro without giving a reason.</strong> The full amount paid is refunded. This right comes from article 49 of the Brazilian Consumer Protection Code.</p></div>
<p><strong>How to request it:</strong></p>
<ul><li>email {M} with the email used for the purchase; or</li>
<li>use the refund option of the payment platform you bought through.</li></ul>
<p>We confirm receipt of your request by email.</p>
<p><strong>Refund:</strong> we ask the payment platform for the refund right away, to the same payment method. Pix refunds usually arrive the same day. Credit card refunds show up on your statement according to your card issuer’s timeline.</p>
<p>Once refunded, Pro access ends.</p>
<p><strong>After 7 days:</strong> if Pro has a problem that prevents its use and we cannot fix it within 30 days of your contact, you can ask for your money back.</p>"""),
("use", "Acceptable use", """
<p>You may not:</p>
<ul><li>bypass the Pro check or the preview mark;</li>
<li>resell, sublicense or share Pro access with others;</li>
<li>copy the site or its code to offer a competing service;</li>
<li>use GridGrid for unlawful purposes or in a way that harms the site’s operation.</li></ul>
<p>If this happens, we may suspend Pro access after notifying you by email.</p>"""),
("availability", "Availability and changes", """
<p>We work to keep GridGrid online, but the site may have outages and maintenance.</p>
<p>We may improve and change features. If a Pro feature described at the time of your purchase is discontinued, we will offer an equivalent alternative.</p>"""),
("liability", "Liability", """
<p>The generated grid is a technical starting point calculated from your file. Check the result before using it in a deliverable.</p>
<p>Nothing in these terms limits your rights under the Brazilian Consumer Protection Code.</p>"""),
("ip", "Intellectual property", """
<p>The GridGrid name, brand, site and code belong to Studio Noar. Your logos and the files you export belong to you.</p>"""),
("changes", "Changes to these terms", """
<p>We may update these terms. The date at the top shows the version in force. Relevant changes will be announced on the site or by email to account holders.</p>
<p>Past purchases follow the terms accepted at purchase whenever those are more favorable to you.</p>"""),
("law", "Governing law", f"""
<p>These terms are governed by Brazilian law. Disputes are handled in the courts of the consumer’s place of residence.</p>
<p>Questions or problems: {M}.</p>"""),
]

# ---------------- PRIVACIDADE ----------------
priv_pt = [
("controlador", "Quem cuida dos seus dados", f"""
<p>O controlador dos dados é <strong>Studio Noar</strong>, MEI, CNPJ {CNPJ}, com endereço em {ADDR}.</p>
<p>Para qualquer assunto sobre dados pessoais, escreva para {M}. Como agente de tratamento de pequeno porte, não somos obrigados a indicar um encarregado (Resolução CD/ANPD nº 2/2022). Este e-mail é o nosso canal de atendimento.</p>"""),
("nao", "O que não coletamos", """
<ul><li><strong>Seus arquivos SVG:</strong> são processados no seu navegador e não chegam aos nossos servidores.</li>
<li><strong>Dados de cartão:</strong> ficam com a plataforma de pagamento.</li>
<li><strong>Rastreamento:</strong> não usamos cookies de publicidade nem ferramentas de rastreamento de terceiros.</li></ul>"""),
("dados", "Dados que tratamos", """
<table><thead><tr><th>Dado</th><th>Para quê</th><th>Base legal (LGPD)</th></tr></thead><tbody>
<tr><td>E-mail, identificador da conta e sessão de login</td><td>Dar acesso à sua conta e ao Pro</td><td>Execução de contrato (art. 7º, V)</td></tr>
<tr><td>Nome, e-mail e foto do perfil Google, se você entrar com o Google</td><td>Criar e identificar a sua conta</td><td>Execução de contrato (art. 7º, V)</td></tr>
<tr><td>Registro de compra: e-mail, situação do acesso, número do pedido e datas</td><td>Liberar o Pro, atender reembolsos e cumprir obrigações fiscais e de consumo</td><td>Execução de contrato e obrigação legal (art. 7º, II e V)</td></tr>
<tr><td>Lista de espera: e-mail, idioma e página de inscrição</td><td>Avisar quando a venda do Pro abrir</td><td>Consentimento (art. 7º, I)</td></tr>
<tr><td>Registros de acesso: endereço IP, navegador, data e hora</td><td>Segurança e funcionamento do site</td><td>Obrigação legal (Marco Civil da Internet, art. 15) e legítimo interesse (art. 7º, IX)</td></tr>
</tbody></table>"""),
("navegador", "O que fica no seu navegador", """
<p>O site guarda no armazenamento local do seu navegador: as configurações do gerador, o último logo aberto, a cena da animação, a contagem de exportações (usada no aviso do Pro), o idioma, a sessão de login e a situação do seu Pro.</p>
<p>Essas informações ficam só no seu aparelho e não são cookies de rastreamento. Você as apaga com o botão Resetar, saindo da conta ou limpando os dados do site no navegador.</p>"""),
("compartilhamento", "Com quem compartilhamos", """
<p>Usamos fornecedores que tratam dados em nosso nome, apenas para fazer o GridGrid funcionar:</p>
<ul><li><strong>Supabase:</strong> banco de dados e login. Os dados ficam em servidores em São Paulo.</li>
<li><strong>Vercel:</strong> hospedagem do site.</li>
<li><strong>Google Fonts:</strong> fornece a fonte do site e recebe o seu endereço IP ao entregá-la.</li>
<li><strong>Provedor de envio de e-mail:</strong> envia os links de acesso.</li>
<li><strong>Plataforma de pagamento:</strong> processa a compra com os dados que você informa no checkout, sob a política de privacidade dela.</li>
<li><strong>Google:</strong> apenas se você escolher entrar com a conta Google.</li></ul>
<p>Não vendemos nem alugamos dados pessoais.</p>"""),
("internacional", "Transferência internacional", """
<p>Alguns fornecedores, como Vercel e Google, podem tratar dados fora do Brasil. Essas transferências seguem as hipóteses do art. 33 da LGPD, como as cláusulas contratuais de proteção de dados desses fornecedores.</p>"""),
("prazo", "Por quanto tempo guardamos", """
<ul><li><strong>Conta:</strong> enquanto ela existir. Você pode pedir a exclusão a qualquer momento.</li>
<li><strong>Registros de compra:</strong> por 5 anos, pelas obrigações fiscais e de consumo, mesmo depois da exclusão da conta.</li>
<li><strong>Lista de espera:</strong> até você pedir para sair ou até 12 meses depois do aviso de abertura da venda.</li>
<li><strong>Registros de acesso:</strong> por 6 meses, como exige o Marco Civil da Internet.</li></ul>"""),
("direitos", "Seus direitos", f"""
<p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
<ul><li>confirmação de que tratamos os seus dados e acesso a eles;</li>
<li>correção de dados incompletos ou desatualizados;</li>
<li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
<li>portabilidade dos dados;</li>
<li>informação sobre com quem compartilhamos os seus dados;</li>
<li>revogação do consentimento e eliminação dos dados tratados com base nele, como a lista de espera.</li></ul>
<p>Faça o pedido por {M}, a partir do e-mail da sua conta. Respondemos em até 15 dias.</p>
<p>Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).</p>"""),
("seguranca", "Segurança", """
<p>O site usa conexão criptografada (HTTPS). O login não usa senha. No banco de dados, as regras de acesso permitem que cada pessoa veja apenas o próprio registro, e a lista de espera não pode ser lida pelo site.</p>"""),
("alteracoes", "Alterações nesta política", """
<p>Podemos atualizar esta política. A data no topo indica a versão em vigor. Mudanças relevantes serão avisadas no site ou por e-mail a quem tem conta.</p>"""),
]

priv_en = [
("controller", "Who handles your data", f"""
<p>The data controller is <strong>Studio Noar</strong>, a Brazilian sole proprietorship (MEI), CNPJ {CNPJ}, located at {ADDR_EN}.</p>
<p>For any personal data matter, email {M}. As a small processing agent, we are not required to appoint a data protection officer (ANPD Resolution No. 2/2022). This email is our contact channel.</p>"""),
("not", "What we don’t collect", """
<ul><li><strong>Your SVG files:</strong> processed in your browser; they never reach our servers.</li>
<li><strong>Card details:</strong> handled by the payment platform.</li>
<li><strong>Tracking:</strong> we don’t use advertising cookies or third-party tracking tools.</li></ul>"""),
("data", "Data we process", """
<table><thead><tr><th>Data</th><th>Purpose</th><th>Legal basis (LGPD)</th></tr></thead><tbody>
<tr><td>Email, account ID and login session</td><td>Give you access to your account and Pro</td><td>Performance of contract (art. 7, V)</td></tr>
<tr><td>Google name, email and profile photo, if you sign in with Google</td><td>Create and identify your account</td><td>Performance of contract (art. 7, V)</td></tr>
<tr><td>Purchase record: email, access status, order number and dates</td><td>Activate Pro, handle refunds and meet tax and consumer obligations</td><td>Performance of contract and legal obligation (art. 7, II and V)</td></tr>
<tr><td>Waitlist: email, language and sign-up page</td><td>Tell you when Pro sales open</td><td>Consent (art. 7, I)</td></tr>
<tr><td>Access logs: IP address, browser, date and time</td><td>Site security and operation</td><td>Legal obligation (Brazilian Internet Civil Framework, art. 15) and legitimate interest (art. 7, IX)</td></tr>
</tbody></table>"""),
("browser", "What stays in your browser", """
<p>The site uses your browser’s local storage for: generator settings, the last logo you opened, the animation scene, the export count (used for the Pro notice), language, login session and Pro status.</p>
<p>This information stays on your device and is not tracking cookies. You can delete it with the Reset button, by signing out or by clearing the site’s data in your browser.</p>"""),
("sharing", "Who we share with", """
<p>We use providers that process data on our behalf, only to run GridGrid:</p>
<ul><li><strong>Supabase:</strong> database and login. Data is stored on servers in São Paulo, Brazil.</li>
<li><strong>Vercel:</strong> site hosting.</li>
<li><strong>Google Fonts:</strong> serves the site’s font and receives your IP address when doing so.</li>
<li><strong>Email delivery provider:</strong> sends sign-in links.</li>
<li><strong>Payment platform:</strong> processes your purchase with the details you enter at checkout, under its own privacy policy.</li>
<li><strong>Google:</strong> only if you choose to sign in with Google.</li></ul>
<p>We do not sell or rent personal data.</p>"""),
("international", "International transfers", """
<p>Some providers, such as Vercel and Google, may process data outside Brazil. These transfers rely on the grounds in article 33 of the LGPD, such as those providers’ contractual data protection clauses.</p>"""),
("retention", "How long we keep data", """
<ul><li><strong>Account:</strong> while it exists. You can ask for deletion at any time.</li>
<li><strong>Purchase records:</strong> 5 years, for tax and consumer obligations, even after account deletion.</li>
<li><strong>Waitlist:</strong> until you ask to leave or 12 months after the sales-open notice.</li>
<li><strong>Access logs:</strong> 6 months, as required by the Brazilian Internet Civil Framework.</li></ul>"""),
("rights", "Your rights", f"""
<p>Under the LGPD (art. 18), you can ask at any time for:</p>
<ul><li>confirmation that we process your data, and access to it;</li>
<li>correction of incomplete or outdated data;</li>
<li>anonymization, blocking or deletion of unnecessary data or data processed unlawfully;</li>
<li>data portability;</li>
<li>information on who we share your data with;</li>
<li>withdrawal of consent and deletion of data processed on that basis, such as the waitlist.</li></ul>
<p>Send your request to {M} from your account email. We reply within 15 days.</p>
<p>You can also file a complaint with Brazil’s data protection authority (ANPD).</p>"""),
("security", "Security", """
<p>The site uses an encrypted connection (HTTPS). Sign-in is password-free. In the database, access rules let each person see only their own record, and the waitlist cannot be read from the site.</p>"""),
("updates", "Changes to this policy", """
<p>We may update this policy. The date at the top shows the version in force. Relevant changes will be announced on the site or by email to account holders.</p>"""),
]

EN_NOTE = '<p class="note">This English version is provided for convenience. If there is any difference, the Portuguese version prevails.</p>'

def page(fname, title_pt, title2_pt, title_en, title2_en, lead_pt, lead_en, box_pt, box_en, s_pt, s_en, other_href, other_pt, other_en):
    b_pt, t_pt = build(s_pt); b_en, t_en = build(s_en)
    head_pt = f'<h1>{title_pt}<span>{title2_pt}</span></h1><p class="meta">Última atualização: {UPDATED_PT}</p><p class="lead">{lead_pt}</p><div class="box">{box_pt}</div>'
    head_en = f'<h1>{title_en}<span>{title2_en}</span></h1><p class="meta">Last updated: {UPDATED_EN}</p>{EN_NOTE}<p class="lead">{lead_en}</p><div class="box">{box_en}</div>'
    html = PAGE.format(title_pt=title_pt+" "+title2_pt, toc_pt=t_pt, toc_en=t_en, body_pt=head_pt+b_pt, body_en=head_en+b_en,
                       other_href=other_href, other_pt=other_pt, other_en=other_en, mail=MAIL)
    (OUT/fname).write_text(html)

page("termos.html", "Termos de uso", "e de venda", "Terms of use", "and sale",
     "As regras para usar o GridGrid e comprar o GridGrid Pro, em linguagem direta.",
     "The rules for using GridGrid and buying GridGrid Pro, in plain language.",
     '<p><strong>Resumo:</strong> o grid é grátis. O Pro é um pagamento único, sem assinatura. Você pode desistir em até 7 dias e recebe o valor de volta. <a href="#arrependimento">Ver como pedir</a>.</p>',
     '<p><strong>Summary:</strong> the grid is free. Pro is a one-time payment, not a subscription. You can cancel within 7 days and get your money back. <a href="#withdrawal">See how to ask</a>.</p>',
     terms_pt, terms_en, "/privacidade", "Política de privacidade", "Privacy policy")
page("privacidade.html", "Política", "de privacidade", "Privacy", "policy",
     "Quais dados o GridGrid trata, por quê, por quanto tempo e como você exerce os seus direitos, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).",
     "What data GridGrid processes, why, for how long and how to exercise your rights, under Brazil’s General Data Protection Law (LGPD, Law 13,709/2018).",
     '<p><strong>Resumo:</strong> os seus logos não saem do seu computador. Guardamos o seu e-mail para o login, a compra e a lista de espera, se você se inscrever. Não vendemos dados.</p>',
     '<p><strong>Summary:</strong> your logos never leave your computer. We keep your email for sign-in, purchases and the waitlist if you join it. We don’t sell data.</p>',
     priv_pt, priv_en, "/termos", "Termos de uso e venda", "Terms of use and sale")
print("ok")
