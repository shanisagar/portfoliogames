/**
 * THE GAME LIST. To add a game:
 *   1. Put its Unity WebGL build in  games/<id>/   (the folder with index.html, Build/, TemplateData/)
 *   2. Put a 1024x500 feature graphic in  assets/img/games/<Name>.png
 *   3. Copy one entry below, change the fields, save, push.
 * Newest first: the order here is the order on the page.
 */
window.GAMES = [
  {
    id: "elixirlab",                       // folder name inside games/
    name: "Elixir Lab",
    tagline: "Pour. Sort. Brew.",
    image: "assets/img/games/ElixirLab.png",
    genre: "Puzzle",
    description:
      "Liquid-sort puzzle set in a neon alchemy lab: tap a flask to lift it, tap another to pour, and liquid only lands on the same colour or in an empty flask. Levels are generated deterministically and verified by a built-in solver that also powers hints. Later levels add more colours and mystery brews whose buried layers stay hidden until uncovered.",
    tags: ["Unity", "C#", "Puzzle Solver", "Procedural Levels"],
    apk: null                              // or a link to the .apk, e.g. "https://.../ElixirLab.apk"
  },
  {
    id: "arrowpuzzle",
    name: "Arrow Puzzle",
    tagline: "Tap. Launch. Clear the grid.",
    image: "assets/img/games/ArrowPuzzle.png",
    genre: "Puzzle",
    description:
      "Minimal neon logic puzzle where each arrow flies off the board only if its path is clear. A procedural generator places arrows in reverse removal order so every level is solvable, and a built-in solver checks each one. Difficulty rises through long blocking chains, with endless levels after the curated set and custom Unity editor tools for previewing them.",
    tags: ["Unity", "C#", "Procedural Generation", "Puzzle Solver"],
    apk: "https://shanisagar.github.io/portfolio/assets/apk/ArrowPuzzle.apk",
    apkSize: "40 MB"
  }
];
