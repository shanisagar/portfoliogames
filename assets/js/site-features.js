/**
 * SITE FEATURE FLAGS (games site).
 *
 * gameLimit: show only the first `count` games of the list in games-data.js (newest first).
 *   first: game ids pinned to the top, in this order (they always count toward `count`).
 *   enabled: false -> every game is shown, in the normal order.
 *   enabled: true  -> only the first `count` games are shown; the others are hidden from the grid,
 *                     the game counter and ?play= links.
 */
window.SITE_FEATURES = {
  gameLimit: { enabled: true, count: 5, first: ["arrowpuzzle"] }
};
