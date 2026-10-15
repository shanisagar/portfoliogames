/**
 * THE GAME LIST. To add a game:
 *   1. Put its Unity WebGL build in  games/<id>/   (the folder with index.html, Build/, TemplateData/)
 *   2. Put a 1024x500 feature graphic in  assets/img/games/<Name>.png
 *   3. Copy one entry below, change the fields, save, push.
 * Newest first: the order here is the order on the page.
 */
window.GAMES = [
  {
    id: "prismblocks",
    name: "Prism Blocks",
    tagline: "Place. Clear. Combo.",
    image: "assets/img/games/PrismBlocks.png",
    genre: "Puzzle",
    description:
      "Block-placing puzzle with gem-like neon blocks. Drag pieces from the tray onto an 8x8 board and complete rows or columns to shatter them. Clearing on consecutive turns builds a combo streak that multiplies your points, and emptying the whole board earns a big bonus. Trays are dealt fairly so at least one piece always fits, and they get tougher as the score climbs.",
    tags: ["Unity", "C#", "Puzzle", "Combo Scoring"],
    apk: null
  },
  {
    id: "neuralsiege",
    name: "Neural Siege",
    tagline: "Outthink the machine.",
    image: "assets/img/games/NeuralSiege.png",
    genre: "Strategy",
    description:
      "Strategy board game against NEXUS, a search-based AI. Clone a node into an adjacent cell or jump it two cells, and every enemy node touching where you land converts to your side. NEXUS searches your replies with alpha-beta pruning that goes deeper every tier, comments on the game, and can be borrowed for three hints per match. Beat it to climb ten tiers.",
    tags: ["Unity", "C#", "Game AI", "Alpha-Beta Search"],
    apk: null
  },
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
