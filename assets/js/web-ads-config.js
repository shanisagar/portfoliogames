/**
 * WEB ADS SETTINGS for the browser (WebGL) versions of the games.
 * Android APKs keep using AdMob from Unity; this file only affects games played on this website.
 * Changing anything here needs NO Unity rebuild: edit, bump ?v= in index.html, push.
 *
 * provider:
 *   "none"     ads off (default, safe)
 *   "test"     fake ads with a countdown, to check every ad button works before you have an account
 *   "applixir" AppLixir rewarded video (rewarded only)       -> needs applixir.apiKey
 *   "h5"       Google H5 Games Ads (rewarded + interstitial) -> needs an approved AdSense account
 */
window.NEON_WEB_ADS = {
  provider: "h5",       // Google H5 Games Ads (AdSense). Keep h5.testMode true until AdSense approves the site

  applixir: {
    apiKey: "",                       // AppLixir dashboard > Sites
    sdk: "https://cdn.applixir.com/applixir.app.v6.1.0.js"
  },

  h5: {
    client: "ca-pub-2503823450887306", // your AdSense publisher id
    testMode: true,                    // true = Google test ads; set false once approved
    frequencyHint: "120s"              // min time between interstitials
  },

  // Display banner on the games list page (outside the game, never over it). Leave slot empty for none.
  banner: {
    client: "ca-pub-2503823450887306",
    slot: ""                           // AdSense display ad unit id, e.g. "1234567890"
  }
};
