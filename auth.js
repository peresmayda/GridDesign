/* GridGrid — conta e Pro
   Login (link por e-mail ou Google) e checagem do Pro no Supabase. Depende de vendor/supabase.js e i18n.js.
   As páginas usam:  ggAuth.requirePro()  -> Promise<boolean> (abre a janela do Pro quando falta)
                     ggAuth.isPro / ggAuth.user  e o evento "gg:auth" no document
   O botão de conta entra em qualquer elemento com data-account. */
(function(){
  "use strict";
  var SUPABASE_URL="https://paijzdsdagjwdzhvmnto.supabase.co";
  var SUPABASE_KEY="sb_publishable_IR-h16ZR0YobwYnyrKgQrg_CnKjioQI"; // chave pública: pode ficar no site
  var CHECKOUT_URL=""; // link de compra: entra quando a plataforma de pagamento for escolhida
  var GOOGLE_ON=false; // liga quando o login com Google estiver configurado no Supabase
  /* preço: pagamento único. LAUNCH=true mostra o preço de lançamento com o cheio riscado.
     Em português aparece em reais; em inglês, em dólares. */
  var PRICE={brl:97,usd:24,launchBrl:67,launchUsd:17,LAUNCH:true};
  var L=function(pt,en){return window.gg?gg.L(pt,en):pt};

  var api={user:null,isPro:false,ready:false,client:null};
  window.ggAuth=api;
  var sb=null;
  try{sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:"pkce"}});api.client=sb}catch(e){}

  /* ---------- estado ---------- */
  var PRO_CACHE="gg:pro";
  function emit(){document.dispatchEvent(new CustomEvent("gg:auth",{detail:{user:api.user,isPro:api.isPro}}));renderAccount()}
  async function checkPro(){
    if(!sb||!api.user){api.isPro=false;return}
    try{
      var r=await sb.from("pro_access").select("status").eq("status","active").limit(1);
      api.isPro=!r.error&&r.data&&r.data.length>0;
      try{localStorage.setItem(PRO_CACHE,api.isPro?"1":"0")}catch(e){}
    }catch(e){/* sem rede: mantém o último estado conhecido */try{api.isPro=localStorage.getItem(PRO_CACHE)==="1"}catch(_){}}
  }
  async function refresh(){
    if(!sb){api.ready=true;emit();return}
    try{var s=await sb.auth.getSession();api.user=s.data&&s.data.session?s.data.session.user:null}catch(e){api.user=null}
    await checkPro();api.ready=true;emit();
  }
  if(sb)sb.auth.onAuthStateChange(function(ev,session){
    var u=session?session.user:null;var changed=(u&&u.id)!==(api.user&&api.user.id);api.user=u;
    if(changed){checkPro().then(emit)}
  });
  var readyP=refresh();
  api.refresh=refresh;

  /* ---------- janelas ---------- */
  var css=
  ".ggm{position:fixed;inset:0;z-index:40;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.42);animation:ggf .25s ease both;font-family:inherit}"+
  ".ggm-card{width:min(440px,100%);max-height:calc(100vh - 40px);overflow:auto;border-radius:28px;padding:24px;display:grid;gap:16px;background:#EFEFED;color:#000;animation:ggr .4s cubic-bezier(.2,.8,.2,1) both}"+
  ".ggm-card.dark{background:#000;color:#fff;width:min(520px,100%)}"+
  ".ggm h2{margin:0;font-weight:800;font-size:34px;line-height:.9;letter-spacing:-.045em}"+
  ".ggm h2 span{display:block;color:#9FA0A4}.ggm-card.dark h2{color:#E3FF3A}.ggm-card.dark h2 span{color:#76777B}"+
  ".ggm p{margin:0;font-size:14.5px;line-height:1.45;color:#55565A}.ggm-card.dark p{color:#C9CACD}"+
  ".ggm ul{margin:0;padding:0;list-style:none;display:grid;gap:8px}"+
  ".ggm li{display:flex;gap:10px;align-items:center;font-weight:500;font-size:14.5px}"+
  ".ggm li i{width:8px;height:8px;border-radius:50%;background:#E3FF3A;flex:none}"+
  ".ggm .ggb{height:46px;border:0;border-radius:23px;padding:0 20px;font:inherit;font-weight:700;font-size:15px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:10px;text-decoration:none}"+
  ".ggm .ggb.ink{background:#000;color:#fff}.ggm .ggb.ink:hover{background:#262626}"+
  ".ggm .ggb.lime{background:#E3FF3A;color:#000}.ggm .ggb.lime:hover{background:#F0FF8A}"+
  ".ggm .ggb.line{background:transparent;color:inherit;box-shadow:inset 0 0 0 1.5px currentColor}"+
  ".ggm .ggb:disabled{opacity:.5;cursor:default}"+
  ".ggm .ggb.google{background:#fff;color:#000;box-shadow:inset 0 0 0 1.5px rgba(0,0,0,.15)}"+
  ".ggm .ggb.google:hover{box-shadow:inset 0 0 0 1.5px #000}"+
  ".ggm .or{display:flex;align-items:center;gap:10px;color:#9FA0A4;font-size:13px;font-weight:500}.ggm .or:before,.ggm .or:after{content:'';flex:1;height:1px;background:rgba(0,0,0,.14)}"+
  ".ggm form{display:grid;gap:8px}"+
  ".ggm input[type=email]{height:46px;border:1.5px solid #000;border-radius:23px;padding:0 18px;font:inherit;font-size:15px;background:#fff;color:#000;-webkit-appearance:none;appearance:none;width:100%}"+
  ".ggm input[type=email]:focus{outline:2px solid #2F55FF;outline-offset:2px}"+
  ".ggm .msg{font-size:13.5px;font-weight:500;color:#55565A;margin:0}.ggm .msg.err{color:#C2410C}"+
  ".ggm .row{display:flex;gap:8px;flex-wrap:wrap}"+
  ".ggprice{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px;padding-top:14px;border-top:1px solid rgba(255,255,255,.16)}"+
  ".ggprice b{font-weight:800;font-size:44px;line-height:1;letter-spacing:-.04em;color:#fff}"+
  ".ggprice s{font-weight:600;font-size:18px;color:#76777B}"+
  ".ggprice em{font-style:normal;align-self:center;height:22px;display:inline-flex;align-items:center;padding:0 9px;border-radius:11px;box-shadow:inset 0 0 0 1.5px #E3FF3A;color:#E3FF3A;font-weight:700;font-size:12px}"+
  ".ggprice small{flex-basis:100%;font-size:13.5px;color:#9FA0A4}"+
  ".ggm .x{justify-self:end;margin:-8px -8px 0 0;width:36px;height:36px;border-radius:50%;border:0;background:rgba(127,127,127,.15);color:inherit;cursor:pointer;font-size:18px;line-height:1}"+
  ".ggm .pro{display:inline-flex;align-items:center;height:22px;padding:0 9px;border-radius:11px;background:#E3FF3A;color:#000;font-weight:800;font-size:12px;justify-self:start}"+
  ".ggacc{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 14px 0 6px;border:0;border-radius:18px;background:#EFEFED;color:#000;font:inherit;font-weight:700;font-size:14px;cursor:pointer;flex:none;max-width:240px}"+
  ".ggacc:hover{background:#fff}.ggacc.out{padding:0 16px}"+
  ".ggacc b{width:26px;height:26px;border-radius:50%;background:#000;color:#fff;display:grid;place-items:center;font-size:12px;flex:none;text-transform:uppercase}"+
  ".ggacc span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"+
  ".ggacc .pro{display:inline-flex;align-items:center;height:20px;padding:0 8px;border-radius:10px;background:#E3FF3A;color:#000;font-weight:800;font-size:11px;flex:none}"+
  ".ggacc:focus-visible,.ggm button:focus-visible,.ggm a:focus-visible{outline:2px solid #2F55FF;outline-offset:2px}"+
  "@keyframes ggf{from{opacity:0}}@keyframes ggr{from{opacity:0;transform:translateY(18px) scale(.98)}}"+
  "@media (prefers-reduced-motion:reduce){.ggm,.ggm-card{animation:none}}";
  var st=document.createElement("style");st.textContent=css;(document.head||document.documentElement).appendChild(st);

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function modal(html,dark){
    var box=document.createElement("div");box.className="ggm";box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");
    box.innerHTML='<div class="ggm-card'+(dark?" dark":"")+'"><button class="x" type="button" aria-label="Fechar">×</button>'+html+'</div>';
    var prev=document.activeElement;
    function close(){box.remove();document.removeEventListener("keydown",onKey);if(prev&&prev.focus)prev.focus();if(box._onclose)box._onclose()}
    function onKey(e){if(e.key==="Escape")close()}
    document.addEventListener("keydown",onKey);
    box.addEventListener("click",function(e){if(e.target===box)close()});
    box.querySelector(".x").addEventListener("click",close);
    document.body.appendChild(box);box.close=close;
    var f=box.querySelector("input,.ggb");if(f)f.focus();
    return box;
  }
  var G_ICON='<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';

  function redirectTo(){return location.origin+location.pathname+location.search}

  /* entrar: Google ou link por e-mail */
  function openSignIn(after){
    var box=modal(
      '<h2>Entrar<span>sem senha</span></h2>'+
      '<p>Use a mesma conta do e-mail com que você comprou o Pro.</p>'+
      (GOOGLE_ON?'<button class="ggb google" type="button" data-g>'+G_ICON+'<span>Continuar com o Google</span></button><div class="or">ou</div>':'')+
      '<form novalidate><input type="email" id="ggEmail" autocomplete="email" required placeholder="seu@email.com" aria-label="E-mail">'+
      '<button class="ggb ink" type="submit">Enviar link de acesso</button><p class="msg" aria-live="polite"></p></form>');
    var msg=box.querySelector(".msg");
    var gb=box.querySelector("[data-g]");if(gb)gb.addEventListener("click",async function(){
      if(!sb){msg.className="msg err";msg.textContent=L("Não foi possível conectar. Tente de novo em instantes.","Couldn't connect. Try again in a moment.");return}
      try{sessionStorage.setItem("gg:after",after||"")}catch(e){}
      var r=await sb.auth.signInWithOAuth({provider:"google",options:{redirectTo:redirectTo()}});
      if(r.error){msg.className="msg err";msg.textContent=L("O login com o Google ainda não está ativo. Use o link por e-mail.","Google sign-in isn't active yet. Use the email link.")}
    });
    box.querySelector("form").addEventListener("submit",async function(e){
      e.preventDefault();var email=box.querySelector("#ggEmail").value.trim();
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){msg.className="msg err";msg.textContent=L("Confira o e-mail: ele parece incompleto.","Check the email address: it looks incomplete.");return}
      if(!sb){msg.className="msg err";msg.textContent=L("Não foi possível conectar. Tente de novo em instantes.","Couldn't connect. Try again in a moment.");return}
      var btn=box.querySelector("button[type=submit]");btn.disabled=true;msg.className="msg";msg.textContent=L("Enviando…","Sending…");
      try{sessionStorage.setItem("gg:after",after||"")}catch(e){}
      var r=await sb.auth.signInWithOtp({email:email,options:{emailRedirectTo:redirectTo()}});
      btn.disabled=false;
      if(r.error){msg.className="msg err";msg.textContent=/rate|limit|seconds/i.test(r.error.message||"")?L("Muitos pedidos seguidos. Espere um minuto e tente de novo.","Too many requests in a row. Wait a minute and try again."):L("Não consegui enviar o link. Confira o e-mail e tente de novo.","Couldn't send the link. Check the email and try again.");return}
      msg.className="msg";msg.textContent=L("Pronto. Abra o link que enviamos para "+email+", neste mesmo navegador.","Done. Open the link we sent to "+email+", in this same browser.");
    });
    return box;
  }

  /* conta: e-mail, situação do Pro e sair */
  function openAccount(){
    var u=api.user;if(!u)return openSignIn();
    var box=modal(
      '<h2>Sua conta<span>'+esc(u.email||"")+'</span></h2>'+
      (api.isPro?'<span class="pro">Pro</span><p>Seu Pro está ativo. Exportação de vídeo, GIF e Lottie liberada.</p>'
                :'<p>Sua conta ainda não tem o Pro. O grid continua grátis; o Pro libera a exportação da animação.</p>')+
      '<div class="row">'+(api.isPro?'':'<button class="ggb ink" type="button" data-pro>Ver o Pro</button>')+'<button class="ggb line" type="button" data-out>Sair</button></div>');
    var p=box.querySelector("[data-pro]");if(p)p.addEventListener("click",function(){box.close();openPro()});
    box.querySelector("[data-out]").addEventListener("click",async function(){if(sb)await sb.auth.signOut();api.user=null;api.isPro=false;try{localStorage.removeItem(PRO_CACHE)}catch(e){}box.close();emit()});
  }

  /* janela do Pro: aparece quando falta o Pro para exportar */
  function openPro(){
    return new Promise(function(resolve){
      var logged=!!api.user;
      var buy=CHECKOUT_URL?'<a class="ggb lime" data-buy href="'+esc(CHECKOUT_URL+(logged&&api.user.email?(CHECKOUT_URL.indexOf("?")<0?"?":"&")+"email="+encodeURIComponent(api.user.email):""))+'" target="_blank" rel="noopener">Comprar o Pro</a>'
                         :'<button class="ggb lime" type="button" disabled>Venda abre em breve</button>';
      var en=window.gg&&gg.lang==="en";
      var fmtP=function(v){return en?"US$\u00a0"+v:"R$\u00a0"+v};
      var full=en?PRICE.usd:PRICE.brl,launch=en?PRICE.launchUsd:PRICE.launchBrl;
      var price='<div class="ggprice">'+(PRICE.LAUNCH?'<s>'+fmtP(full)+'</s><b>'+fmtP(launch)+'</b><em>'+L("Preço de lançamento","Launch price")+'</em>':'<b>'+fmtP(full)+'</b>')+
        '<small>'+L("Pagamento único. Sem assinatura, sem limite de exportações.","One-time payment. No subscription, no export limit.")+'</small></div>';
      var box=modal(
        '<span class="pro">Pro</span>'+
        '<h2>Leve a animação<span>para o seu projeto.</span></h2>'+
        '<p>O grid é grátis. Com o Pro, você exporta a animação em vídeo, GIF e Lottie.</p>'+
        '<ul><li><i></i>Vídeo MP4 e GIF em até 4K</li><li><i></i>Lottie para apps e After Effects</li><li><i></i>Os quatro estilos, com ajuste de tempo por camada</li></ul>'+
        price+
        '<div class="row">'+buy+(logged?'<button class="ggb line" type="button" data-check>Já comprei</button>':'<button class="ggb line" type="button" data-in>Já comprei, entrar</button>')+'</div>'+
        '<p class="msg" aria-live="polite"></p>',true);
      var done=false;box._onclose=function(){if(!done){done=true;resolve(api.isPro)}};
      var msg=box.querySelector(".msg");
      var ins=box.querySelector("[data-in]");if(ins)ins.addEventListener("click",function(){done=true;box.close();openSignIn("pro");resolve(false)});
      var chk=box.querySelector("[data-check]");if(chk)chk.addEventListener("click",async function(){
        msg.textContent=L("Conferindo…","Checking…");await checkPro();emit();
        if(api.isPro){done=true;box.close();resolve(true);toast(L("Pro ativo. Pode exportar.","Pro is active. You can export."))}
        else msg.textContent=L("Ainda não encontramos uma compra para "+(api.user.email||"")+". Se acabou de pagar, espere um minuto e confira de novo.","We haven't found a purchase for "+(api.user.email||"")+" yet. If you just paid, wait a minute and check again.");
      });
    });
  }
  function toast(t){var h=document.getElementById("toastHost");if(!h)return;h.innerHTML='<div class="toast" role="status">'+esc(t)+'</div>';setTimeout(function(){h.innerHTML=""},3200)}

  api.signIn=openSignIn;api.account=openAccount;api.openPro=openPro;
  api.requirePro=async function(){await readyP;if(api.isPro)return true;return openPro()};

  /* ---------- botão de conta ---------- */
  function renderAccount(){
    var hosts=document.querySelectorAll("[data-account]");
    for(var i=0;i<hosts.length;i++){
      var h=hosts[i],u=api.user;
      h.innerHTML=u?'<button class="ggacc" type="button" title="'+esc(u.email||"")+'"><b>'+esc((u.email||"?")[0])+'</b><span>'+esc(L("Conta","Account"))+'</span>'+(api.isPro?'<i class="pro" style="font-style:normal">Pro</i>':'')+'</button>'
                   :'<button class="ggacc out" type="button">'+esc(L("Entrar","Sign in"))+'</button>';
      h.firstChild.addEventListener("click",function(){api.user?openAccount():openSignIn()});
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",renderAccount);else renderAccount();

  /* voltou do login com a janela do Pro pendente: mostra o resultado */
  readyP.then(function(){
    var after=null;try{after=sessionStorage.getItem("gg:after");sessionStorage.removeItem("gg:after")}catch(e){}
    if(api.user&&after==="pro"){if(api.isPro)toast(L("Pro ativo. Pode exportar.","Pro is active. You can export."));else openPro()}
  });
})();
