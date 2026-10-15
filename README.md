# Games by Shani Sagar

Unity games playable in the browser. Live at https://shanisagar.github.io/portfoliogames/

## Add a new game
1. Build it in Unity for **Web** with Compression Format **Gzip** and **Decompression Fallback** ticked
   (Player Settings › Web › Publishing Settings).
2. Copy the build folder (index.html, Build/, TemplateData/) to `games/<id>/`, e.g. `games/lumiloop/`.
3. In `games/<id>/index.html`, so the game fills the pop-up in portrait:
   - change `if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {` to `if (true) {`
   - after the `TemplateData/style.css` line add the web ads bridge:
     `<script src="../../assets/js/web-ads-config.js?v=1"></script>`
     `<script src="../../assets/js/web-ads.js?v=1"></script>`
   - and also add:
     `<style>html,body{height:100%;background:#0b0d17;overflow:hidden}@media (min-aspect-ratio: 9/16){#unity-container.unity-mobile{height:100%;width:auto;aspect-ratio:9/16;left:50%;transform:translateX(-50%)}}</style>`
4. Put a 1024×500 feature graphic in `assets/img/games/` (StoreListing/<Game>/feature-graphic-1024x500.png).
5. Add an entry at the top of `assets/js/games-data.js`.
6. If you changed assets/css or assets/js, bump the `?v=` number on those links in index.html so browsers load the new version.
7. Push.

Link straight to a game from anywhere with `?play=<id>`, e.g. https://shanisagar.github.io/portfoliogames/?play=elixirlab

## Web ads (browser builds only)
Android APKs use AdMob from Unity as before. Browser builds use the provider set in
`assets/js/web-ads-config.js`: `none` (default), `test` (fake ads to check the flow),
`applixir` (rewarded video, needs an AppLixir API key) or `h5` (Google H5 Games Ads,
rewarded + interstitial, needs an approved AdSense account). A display banner can go on the
games list page via `banner.slot`. Changing provider or ids needs no Unity rebuild; bump the
`?v=` numbers so browsers pick up the change.
