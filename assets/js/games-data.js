/**
 * THE GAME LIST. To add a game:
 *   1. Put its Unity WebGL build in  games/<id>/   (the folder with index.html, Build/, TemplateData/)
 *   2. Put a 1024x500 feature graphic in  assets/img/games/<Name>.webp (convert the PNG first, see README)
 *   3. Copy one entry below, change the fields, save, push.
 * Newest first: the order here is the order on the page.
 */
window.GAMES = [
  {
    pinned: true,
    id: "arrowpuzzle",
    name: "Arrow Puzzle",
    tagline: "Tap. Launch. Clear the grid.",
    image: "assets/img/games/ArrowPuzzle.webp",
    genre: "Puzzle",
    description:
      "Minimal neon logic puzzle where each arrow flies off the board only if its path is clear. A procedural generator places arrows in reverse removal order so every level is solvable, and a built-in solver checks each one. Difficulty rises through long blocking chains, with endless levels after the curated set and custom Unity editor tools for previewing them.",
    tags: ["Unity", "C#", "Procedural Generation", "Puzzle Solver"],
    apk: "https://shanisagar.github.io/portfolio/assets/apk/ArrowPuzzle.apk",
    apkSize: "40 MB"
  },
  {
    pinned: true,
    id: "skystack",
    name: "Sky Stack",
    tagline: "Stack the floors. Touch the stars.",
    image: "assets/img/games/SkyStack.webp",
    genre: "Arcade",
    description:
      "One-tap tower stacker: a crane slides each new floor back and forth and you tap to drop it. Whatever hangs over the edge is sliced off and tumbles away, so the tower narrows unless you land perfect drops, and three perfects in a row widen it again. The sky changes as you climb from the city through the clouds and the sunset into space, and the crane speeds up the higher you build.",
    tags: ["Unity", "C#", "One-Tap", "Timing"],
    apk: null
  },
  {
    pinned: true,
    id: "fruitfusion",
    name: "Fruit Fusion",
    tagline: "Drop. Merge. Grow a watermelon!",
    image: "assets/img/games/FruitFusion.webp",
    genre: "Puzzle",
    description:
      "Suika-style drop-and-merge puzzle: drop fruit into a glass jar and two of the same fruit merge into the next, bigger one, all the way from a cherry up to a watermelon. Fruit rolls, stacks and tumbles with custom circle physics, quick merges chain into combos, and POP and SHAKE boosters rescue a crowded jar. Eleven cute fruits, the jar and the kitchen are drawn entirely in code.",
    tags: ["Unity", "C#", "Merge Puzzle", "Circle Physics"],
    apk: null
  },
  {
    pinned: true,
    id: "melodytiles",
    name: "Melody Tiles",
    tagline: "Tap the tiles. Play the song.",
    image: "assets/img/games/MelodyTiles.webp",
    genre: "Rhythm",
    description:
      "Piano-tiles rhythm game: tap the falling black tiles in order and each one plays the next note of a famous public-domain melody, from Ode to Joy and Für Elise to the Hall of the Mountain King. Long tiles must be held, stars at every third of the song unlock new songs, and finished songs loop faster in Encore mode. Multi-touch input and a piano synthesized in code.",
    tags: ["Unity", "C#", "Rhythm", "Synthesized Piano"],
    apk: null
  }
];
