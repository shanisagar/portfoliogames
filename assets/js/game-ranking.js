/**
 * GAME RANKING — orders the game list by what THIS visitor actually plays.
 *
 * Everything is stored only in the visitor's own browser (localStorage); nothing is sent anywhere.
 * What is measured, per game:
 *   - sessions : how many times the game was opened
 *   - ms       : real play time (only while the game pop-up is open AND the tab is visible)
 *   - bounces  : sessions shorter than BOUNCE_MS (opened, then closed quickly = probably not interested)
 *   - last     : when it was last played
 *
 * How the "For you" order is worked out:
 *   - Played games score on play time (diminishing returns), number of sessions and how recently they were played;
 *     games that are always closed quickly score lower.
 *   - Games not played yet score on how much they share a genre / tags with the games this visitor plays most,
 *     plus a small boost for new games (the top of games-data.js is newest) and the optional `popularity` field.
 *   - A visitor with no history sees the order of games-data.js (newest first), adjusted by `popularity` if set.
 *
 * Optional, in games-data.js: add  popularity: 0-100  to any game to give it a head start for everyone
 * (for example from your Google Analytics / AdSense numbers). Leave it out and it counts as 0.
 */
(function () {
  "use strict";

  const KEY = "pg-play-stats-v1";
  const MODE_KEY = "pg-sort-mode";
  const BOUNCE_MS = 15000;          // shorter sessions count as "not interested"
  const TICK_MS = 5000;             // play time is measured in 5 s steps
  const GENERIC_TAGS = ["unity", "c#"]; // tags every game has: ignored for "similar games"

  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "{}");
      return s && typeof s === "object" && s.games ? s : { games: {} };
    } catch (e) { return { games: {} }; }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  let stats = load();
  const entry = (id) => stats.games[id] || (stats.games[id] = { sessions: 0, ms: 0, bounces: 0, last: 0 });

  /* ---------------- tracking ---------------- */

  let current = null, sessionMs = 0, timer = null;

  function tick() {
    if (!current || document.visibilityState !== "visible") return;
    const e = entry(current);
    e.ms += TICK_MS;
    e.last = Date.now();
    sessionMs += TICK_MS;
    save(stats);
  }

  function start(id) {
    if (current) stop();
    current = id;
    sessionMs = 0;
    const e = entry(id);
    e.sessions += 1;
    e.last = Date.now();
    save(stats);
    timer = setInterval(tick, TICK_MS);
  }

  function stop() {
    if (!current) return;
    clearInterval(timer);
    timer = null;
    const e = entry(current);
    if (sessionMs < BOUNCE_MS) e.bounces += 1;
    e.last = Date.now();
    save(stats);
    current = null;
  }

  // Closing the tab or leaving the page ends the session too.
  window.addEventListener("pagehide", stop);

  /* ---------------- scoring ---------------- */

  const tagsOf = (g) => [g.genre || ""].concat(g.tags || [])
    .map((t) => String(t).toLowerCase().trim())
    .filter((t) => t && GENERIC_TAGS.indexOf(t) < 0);

  function engagement(e) {
    if (!e || e.sessions === 0) return 0;
    const minutes = e.ms / 60000;
    const bounceRatio = e.sessions >= 2 ? e.bounces / e.sessions : 0;
    return 3 * Math.log1p(minutes) + 0.8 * Math.min(e.sessions, 10) - 2 * bounceRatio;
  }

  function score(games) {
    const now = Date.now();
    const n = games.length;
    const weights = {};
    let anyHistory = false;

    games.forEach((g) => {
      const eng = engagement(stats.games[g.id]);
      if (eng <= 0) return;
      anyHistory = true;
      tagsOf(g).forEach((t) => { weights[t] = (weights[t] || 0) + eng; });
    });
    const maxW = Math.max(1e-6, ...Object.values(weights).concat([0]));

    return games.map((g, i) => {
      const e = stats.games[g.id];
      const played = !!(e && e.sessions > 0);
      const tags = tagsOf(g);
      const affinity = tags.length ? tags.reduce((s, t) => s + (weights[t] || 0), 0) / (tags.length * maxW) : 0; // 0..1
      const newness = 1 - i / Math.max(1, n);                       // newest (top of games-data.js) = 1
      const prior = Math.max(0, Math.min(100, +g.popularity || 0)) / 100 * 1.5;
      let s;
      if (played) {
        const ageDays = (now - e.last) / 86400000;
        const kept = 1 - e.bounces / e.sessions;  // games always closed quickly get no "recently played" boost
        s = engagement(e) + 2.5 * Math.exp(-ageDays / 5) * kept + 0.5 * affinity + 0.3 * prior;
      } else {
        s = (anyHistory ? 2.2 * affinity : 0) + 1.0 * newness + prior;
      }
      return { game: g, index: i, played, affinity, score: s, stat: e || null };
    });
  }

  /**
   * Returns the games in display order plus a badge per game id.
   * mode: "foryou" (default), "newest" (games-data.js order), "mostplayed" (play time).
   */
  function order(games, mode) {
    const rows = score(games);
    if (mode === "newest") rows.sort((a, b) => a.index - b.index);
    else if (mode === "mostplayed") rows.sort((a, b) => ((b.stat && b.stat.ms) || 0) - ((a.stat && a.stat.ms) || 0) || a.index - b.index);
    else rows.sort((a, b) => b.score - a.score || a.index - b.index);

    // Badges
    const badges = {};
    const played = rows.filter((r) => r.played);
    const recent = played.filter((r) => r.stat.ms >= 30000).sort((a, b) => b.stat.last - a.stat.last)[0];
    if (recent && Date.now() - recent.stat.last < 30 * 86400000) badges[recent.game.id] = { text: "Continue playing", kind: "continue" };
    const fav = played.slice().sort((a, b) => b.stat.ms - a.stat.ms)[0];
    if (fav && fav.stat.ms >= 3 * 60000 && !badges[fav.game.id]) badges[fav.game.id] = { text: "Your favourite", kind: "fav" };
    rows.filter((r) => !r.played && r.affinity > 0.25)
      .sort((a, b) => b.affinity - a.affinity).slice(0, 2)
      .forEach((r) => { badges[r.game.id] = { text: "Picked for you", kind: "pick" }; });
    rows.filter((r) => !r.played && r.index < 3 && !badges[r.game.id])
      .forEach((r) => { badges[r.game.id] = { text: "New", kind: "new" }; });

    return { list: rows.map((r) => r.game), badges, hasHistory: played.length > 0 };
  }

  /** Short "you played" line for a card, or "" if never played. */
  function playedLine(id) {
    const e = stats.games[id];
    if (!e || !e.sessions) return "";
    const min = Math.round(e.ms / 60000);
    return `You played ${e.sessions}× · ${min < 1 ? "under a minute" : min + " min"}`;
  }

  function getMode() { try { return localStorage.getItem(MODE_KEY) || "foryou"; } catch (e) { return "foryou"; } }
  function setMode(m) { try { localStorage.setItem(MODE_KEY, m); } catch (e) {} }

  function reset() {
    stop();
    stats = { games: {} };
    try { localStorage.removeItem(KEY); } catch (e) {}
  }

  window.GameRanking = { start, stop, order, playedLine, getMode, setMode, reset };
})();
