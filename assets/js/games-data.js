/**
 * THE GAME LIST. To add a game:
 *   1. Put its Unity WebGL build in  games/<id>/   (the folder with index.html, Build/, TemplateData/)
 *   2. Put a 1024x500 feature graphic in  assets/img/games/<Name>.png
 *   3. Copy one entry below, change the fields, save, push.
 * Newest first: the order here is the order on the page.
 */
window.GAMES = [
  {
    id: "candynova",
    name: "Candy Nova",
    tagline: "Swap. Match. Go supernova.",
    image: "assets/img/games/CandyNova.png",
    genre: "Puzzle",
    description:
      "Match-3 candy puzzle in a sweet candy land: swap neighbouring candies to match three or more. Match four for a striped laser candy, an L or T shape for a wrapped bomb and five in a row for a chocolate Nova bomb that zaps every candy of one colour, and swap two specials together for board-wide combos. Levels set goals such as gold jelly to clear and frost blocks to break within a move limit, with jelly-wobble landings, chain cascades and sprinkle bursts throughout.",
    tags: ["Unity", "C#", "Match-3", "Cascade Engine"],
    apk: null
  },
  {
    id: "ghostline",
    name: "Ghostline",
    tagline: "Infiltrate. Steal the data. Stay unseen.",
    image: "assets/img/games/Ghostline.png",
    genre: "Stealth",
    description:
      "Top-down stealth through procedurally generated facilities: steal three data shards and reach the exit without being caught. Guards follow A* patrol routes, see in vision cones clipped by walls with a detection meter that fills faster up close, hear sprinting and thrown decoys, radio nearby guards and search around your last known position, while a facility-wide alert level sharpens every guard. Sprint, throw decoys and cloak, and finish unseen for a ghost bonus.",
    tags: ["Unity", "C#", "Stealth AI", "Procedural Levels"],
    apk: null
  },
  {
    id: "wordwonder",
    name: "Word Wonder",
    tagline: "Connect letters. Unlock the Wonders.",
    image: "assets/img/games/WordWonder.png",
    genre: "Word",
    description:
      "Crossword and word-wheel puzzle: drag across the letters on the wheel to spell words and fill every slot in the crossword grid. Extra valid words count as bonus words and earn gems, which buy a hint or a hammer to reveal any tile, and finding words without a miss builds a gem-multiplying streak. Each crossword is generated from curated word stems so the wheel always has plenty of intersecting words, as you travel through World Wonders from the Great Pyramid to Chichen Itza.",
    tags: ["Unity", "C#", "Word Puzzle", "Crossword Generation"],
    apk: null
  },
  {
    id: "ludoblitz",
    name: "Ludo Blitz",
    tagline: "Roll. Race. Capture.",
    image: "assets/img/games/LudoBlitz.png",
    genre: "Board",
    description:
      "Classic four-colour Ludo on a polished royal board against tactical AI rivals, or offline pass-and-play for 2, 3 or 4 people on one device. Rolling a six brings a token out and earns a bonus roll, captures send rivals home, and three sixes in a row forfeit the turn. The AI weighs safety, captures and race progress, rivals get tougher stage by stage, and the die and pawns are fully animated with confetti celebrations.",
    tags: ["Unity", "C#", "Board Game AI", "Local Multiplayer"],
    apk: null
  },
  {
    id: "lumiloop",
    name: "Lumiloop",
    tagline: "Draw loops. Capture light.",
    image: "assets/img/games/Lumiloop.png",
    genre: "Arcade",
    description:
      "Arcade game about drawing with light: cross your comet's glowing trail to close a loop and capture everything inside, while dodging hunters and cutters and chaining combos. Loop detection uses real-time geometry, all sprites are generated from signed-distance functions, and every sound, including a two-layer adaptive soundtrack, is synthesized in code with no audio files.",
    tags: ["Unity", "C#", "Procedural Audio", "SDF Graphics"],
    apk: "https://shanisagar.github.io/portfolio/assets/apk/Lumiloop.apk",
    apkSize: "40 MB"
  },
  {
    id: "voltrace",
    name: "Voltrace",
    tagline: "Anti-gravity racing vs AI rivals.",
    image: "assets/img/games/Voltrace.png",
    genre: "Racing",
    description:
      "Top-down anti-gravity racer against five AI pilots on neon circuits generated fresh from Catmull-Rom splines and checked so they never overlap themselves. Each pilot has its own skill, aggression and drafting habits, plans speed from the curves ahead and picks a side to overtake. Drift, boost pads, slipstream and league progression round it out.",
    tags: ["Unity", "C#", "Racing AI", "Procedural Tracks"],
    apk: "https://shanisagar.github.io/portfolio/assets/apk/Voltrace.apk",
    apkSize: "40 MB"
  },
  {
    id: "untwine",
    name: "Untwine",
    tagline: "Turn. Unlink. Set them free.",
    image: "assets/img/games/Untwine.png",
    genre: "Puzzle",
    description:
      "Ring-rotation puzzle on a hexagonal lattice: tap a ring to turn it 60° and open its links to the neighbours. A ring with every link open slips free and flies away, which can free its neighbours in a chain reaction. Gold couplers turn two rings together and padlocked rings never turn. Clear the knot within the move limit, and beat par for three stars.",
    tags: ["Unity", "C#", "Puzzle", "Hex Grid"],
    apk: null
  },
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
