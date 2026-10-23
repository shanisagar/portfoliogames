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
  }
];
