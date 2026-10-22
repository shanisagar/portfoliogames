/**
 * THE GAME LIST. To add a game:
 *   1. Put its Unity WebGL build in  games/<id>/   (the folder with index.html, Build/, TemplateData/)
 *   2. Put a 1024x500 feature graphic in  assets/img/games/<Name>.webp (convert the PNG first, see README)
 *   3. Copy one entry below, change the fields, save, push.
 * Newest first: the order here is the order on the page.
 */
window.GAMES = [
  {
    id: "swarmbreaker",
    name: "Swarmbreaker",
    tagline: "Outfight a hive mind that learns you.",
    image: "assets/img/games/Swarmbreaker.webp",
    genre: "Shooter",
    description:
      "Twin-stick arena shooter against an adaptive hive mind. Drones flock and encircle you, flankers circle behind your aim and lunge, snipers lead their shots and wardens shield their allies, and every fifth wave a Hive core arrives. Between waves you pick an upgrade, and the hive picks a counter to how you played.",
    tags: ["Unity", "C#", "Twin-Stick", "Adaptive AI"],
    apk: null
  },
  {
    id: "firewall",
    name: "Firewall",
    tagline: "Defend the core from a virus that learns.",
    image: "assets/img/games/Firewall.webp",
    genre: "Strategy",
    description:
      "Tower defense against a learning virus hive: build Blaster, Pulse, Cryo and Rail towers to shape the maze and protect your data core. Viruses route with a weighted flow field, record where they take damage and reroute around your kill zones, and the hive brings viruses that resist whichever towers hurt it most. Endless waves with bigger bosses.",
    tags: ["Unity", "C#", "Tower Defense", "Flow-Field AI"],
    apk: null
  },
  {
    id: "bubblebloom",
    name: "Bubble Bloom",
    tagline: "Pop bubbles. Free the flowers.",
    image: "assets/img/games/BubbleBloom.webp",
    genre: "Puzzle",
    description:
      "Level-based bubble shooter in a sunny garden: drag to aim with a dotted line that shows every wall bounce, then let go to shoot. Three or more of a colour pop, and bubbles left hanging drop for bonus points. Each level hides flower buds near the top that you must free before your shots run out, with bomb and rainbow boosters, colour-blind-friendly symbols on every bubble and three-star ratings.",
    tags: ["Unity", "C#", "Bubble Shooter", "Hex Grid"],
    apk: null
  },
  {
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
    id: "melodytiles",
    name: "Melody Tiles",
    tagline: "Tap the tiles. Play the song.",
    image: "assets/img/games/MelodyTiles.webp",
    genre: "Rhythm",
    description:
      "Piano-tiles rhythm game: tap the falling black tiles in order and each one plays the next note of a famous public-domain melody, from Ode to Joy and Für Elise to the Hall of the Mountain King. Long tiles must be held, stars at every third of the song unlock new songs, and finished songs loop faster in Encore mode. Multi-touch input and a piano synthesized in code.",
    tags: ["Unity", "C#", "Rhythm", "Synthesized Piano"],
    apk: null
  },
  {
    id: "tilegarden",
    name: "Tile Garden",
    tagline: "Match three. Clear the garden.",
    image: "assets/img/games/TileGarden.webp",
    genre: "Puzzle",
    description:
      "Relaxing triple-tile matching: tiles are stacked in layers and only uncovered ones can be picked. Tapped tiles slide into a seven-slot tray and three of a kind clear away; fill the tray and the level is lost. Symmetric layered gardens grow with every level, with Undo, Magic and Shuffle boosters, star times and soft falling blossom.",
    tags: ["Unity", "C#", "Triple Match", "Layered Boards"],
    apk: null
  },
  {
    id: "boltjam",
    name: "Bolt Jam",
    tagline: "Unscrew. Sort. Drop every plank.",
    image: "assets/img/games/BoltJam.webp",
    genre: "Puzzle",
    description:
      "Screw-sorting puzzle on a workshop pegboard: wooden planks are screwed down in overlapping layers and a screw only comes out once no plank above covers it. Each screw flies to the paint tin of its colour, three per tin, or waits in a small holding tray. Planks held by one screw swing like pendulums and fall when the last one is gone; drop them all to win.",
    tags: ["Unity", "C#", "Screw Puzzle", "Pendulum Physics"],
    apk: null
  },
  {
    id: "bladetoss",
    name: "Blade Toss",
    tagline: "Throw. Stick. Don't hit a blade.",
    image: "assets/img/games/BladeToss.webp",
    genre: "Arcade",
    description:
      "Knife-throwing arcade game: tap to throw a knife into the spinning target and never touch a blade that is already stuck in it. Throw every knife to smash the target; spin patterns wobble, reverse and stop-and-go, and every fifth stage is a boss such as a cheese wheel, an old tire or a knight's shield. Slice apples on the rim for coins and unlock six knife skins.",
    tags: ["Unity", "C#", "Timing", "Boss Patterns"],
    apk: null
  },
  {
    id: "sunnysolitaire",
    name: "Sunny Solitaire",
    tagline: "The classic card game, in the sun.",
    image: "assets/img/games/SunnySolitaire.webp",
    genre: "Card",
    description:
      "Classic Klondike solitaire with a sunny look: tap a card to send it to the best place or drag a whole run anywhere it fits. Draw one or three, unlimited undo, hints, auto-finish once every card is face up and a bouncing-card victory. Cards are crisp UI elements that scale to any screen, in portrait or landscape.",
    tags: ["Unity", "C#", "Klondike", "Drag & Drop UI"],
    apk: null
  },
  {
    id: "sudokuzen",
    name: "Sudoku Zen",
    tagline: "Breathe. Think. Fill the grid.",
    image: "assets/img/games/SudokuZen.webp",
    genre: "Puzzle",
    description:
      "Calm classic Sudoku in four difficulties, from Easy to Expert. Every puzzle is generated on the fly and checked by a backtracking solver to have exactly one solution. Pencil notes, undo, erase, hints, highlights for related cells and matching numbers, a three-mistake rule and completed-row animations, set on an ink-wash backdrop.",
    tags: ["Unity", "C#", "Sudoku Generator", "Backtracking Solver"],
    apk: null
  },
  {
    id: "snakebrawl",
    name: "Snake Brawl",
    tagline: "Eat. Grow. Outsmart every snake.",
    image: "assets/img/games/SnakeBrawl.webp",
    genre: "Arcade",
    description:
      "Snake.io-style arena battle against eleven AI snakes: steer with a floating joystick or the mouse, eat candy to grow and boost to cut in front of rivals. A snake whose head touches another snake is out and turns into a trail of candy. Bots hunt food, dodge bodies and chase the player; a leaderboard and minimap track the top snakes.",
    tags: ["Unity", "C#", "Bot AI", "Spatial Hashing"],
    apk: null
  },
  {
    id: "skyfire",
    name: "Skyfire",
    tagline: "Shoot. Dodge. Rule the skies.",
    image: "assets/img/games/Skyfire.webp",
    genre: "Shooter",
    description:
      "WWII-style vertical plane shooter: drag to fly while your guns fire automatically. Enemy squadrons attack in wedges, side sweeps and lock-on dives while bombers fill the sky with bullet rings; down a whole red squadron to power up to five guns, and call in bombs and wingmen. Every mission ends with a three-phase Flying Fortress boss, and coins buy permanent hangar upgrades. Planes, terrain, explosions and sound are all generated in code.",
    tags: ["Unity", "C#", "Shoot 'em up", "Bullet Patterns"],
    apk: null
  },
  {
    id: "candynova",
    name: "Candy Nova",
    tagline: "Swap. Match. Go supernova.",
    image: "assets/img/games/CandyNova.webp",
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
    image: "assets/img/games/Ghostline.webp",
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
    image: "assets/img/games/WordWonder.webp",
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
    image: "assets/img/games/LudoBlitz.webp",
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
    image: "assets/img/games/Lumiloop.webp",
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
    image: "assets/img/games/Voltrace.webp",
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
    image: "assets/img/games/Untwine.webp",
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
    image: "assets/img/games/PrismBlocks.webp",
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
    image: "assets/img/games/NeuralSiege.webp",
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
    image: "assets/img/games/ElixirLab.webp",
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
    image: "assets/img/games/ArrowPuzzle.webp",
    genre: "Puzzle",
    description:
      "Minimal neon logic puzzle where each arrow flies off the board only if its path is clear. A procedural generator places arrows in reverse removal order so every level is solvable, and a built-in solver checks each one. Difficulty rises through long blocking chains, with endless levels after the curated set and custom Unity editor tools for previewing them.",
    tags: ["Unity", "C#", "Procedural Generation", "Puzzle Solver"],
    apk: "https://shanisagar.github.io/portfolio/assets/apk/ArrowPuzzle.apk",
    apkSize: "40 MB"
  }
];
