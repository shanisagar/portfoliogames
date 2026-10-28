const a=()=>new URL("./",location.href.split("#")[0]).href;function i(e,t=a()){return e.portal?`${t}#/embed/portal/${e.portal}`:`${t}#/embed/${e.game}${e.client?`?client=${e.client}`:""}`}const r=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function n(e,t=a()){return`<iframe src="${r(i(e,t))}"
  title="${r(e.title)}" allow="autoplay; fullscreen; gamepad" allowfullscreen
  style="display:block;width:100%;height:min(80vh,720px);border:0"></iframe>`}function s(e,t=a()){const l=e.portal?`portal: "${e.portal}"`:`game: "${e.game}"${e.client?`, client: "${e.client}"`:""}`;return`<div id="webgame" style="width:100%;height:min(80vh,720px)"></div>
<script src="${t}embed.js"><\/script>
<script>
  const game = WebGames.mount(document.getElementById("webgame"), {
    ${l},
    title: "${e.title.replace(/"/g,'\\"')}",
    onEvent: (e) => console.log("webgames", e), // ready, start, end { score }, pause, ...
  });
  // game.pause(); game.resume(); game.mute(); game.unmute(); game.destroy();
<\/script>`}export{s as a,i as e,n as i,a as s};
