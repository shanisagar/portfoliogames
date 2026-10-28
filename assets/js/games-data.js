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
    id: "hotseat",
    name: "Hot Seat Quiz",
    tagline: "15 questions to the top of the ladder!",
    image: "assets/img/games/HotSeatQuiz.webp",
    genre: "Quiz",
    description:
      "Take the hot seat in a glowing TV-studio quiz: pick an answer, lock it in and sweat through the suspense as you climb a 15-step points ladder with safe havens at 5 and 10. Use 50:50, the audience poll, an expert or a swap, walk away any time, play the same daily quiz as everyone else, or race an easy/medium/hard quiz bot or a friend on one device. Hundreds of original questions on India and the world.",
    tags: ["TypeScript", "Phaser", "HTML5 Canvas", "Quiz"],
    apk: null
  },
  {
    id: "cometcascade",
    name: "Comet Cascade",
    tagline: "Drop. Bounce. Multiply.",
    image: "assets/img/games/CometCascade.webp",
    genre: "Arcade",
    description:
      "Space-themed drop game: launch comets through a triangle of star pegs and land them in the orbit pods at the bottom, which multiply your stardust. Choose Calm, Nebula or Supernova risk and 8 to 16 rows, and the pod table for each is built from the binomial odds to a 97% average return. Each comet's pod is drawn first with a crypto RNG, then shown as ballistic hops that never clip a peg. Includes auto-launch, multi-comet play, a ranking ladder with bonus rewards and a synthesized pentatonic soundtrack.",
    tags: ["HTML5 Canvas", "JavaScript", "Probability", "Web Audio"],
    apk: null
  },
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
  }
];
