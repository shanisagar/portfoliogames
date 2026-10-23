/**
 * SITE FEATURE FLAGS (games site).
 *
 * gameLimit: show only the first `count` games of the list in games-data.js (newest first).
 *   enabled: false -> every game is shown.
 *   enabled: true  -> only the first `count` games are shown; the others are hidden from the grid,
 *                     the game counter and ?play= links.
 */
window.SITE_FEATURES = {
  gameLimit: { enabled: true, count: 10 }
};
