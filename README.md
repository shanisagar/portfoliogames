# Games by Shani Sagar

Unity games playable in the browser. Live at https://shanisagar.github.io/portfoliogames/

## Add a new game
1. Build it in Unity for **Web** with Compression Format **Gzip** and **Decompression Fallback** ticked
   (Player Settings › Web › Publishing Settings).
2. Copy the build folder (index.html, Build/, TemplateData/) to `games/<id>/`, e.g. `games/lumiloop/`.
3. In `games/<id>/index.html`, so the game fills the pop-up in portrait:
   - change `if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {` to `if (true) {`
   - after the `TemplateData/style.css` line add:
     `<style>html,body{height:100%;background:#0b0d17;overflow:hidden}@media (min-aspect-ratio: 9/16){#unity-container.unity-mobile{height:100%;width:auto;aspect-ratio:9/16;left:50%;transform:translateX(-50%)}}</style>`
4. Put a 1024×500 feature graphic in `assets/img/games/` (StoreListing/<Game>/feature-graphic-1024x500.png).
5. Add an entry at the top of `assets/js/games-data.js`.
6. Push.

Link straight to a game from anywhere with `?play=<id>`, e.g. https://shanisagar.github.io/portfoliogames/?play=elixirlab
