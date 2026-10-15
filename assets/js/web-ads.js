/**
 * window.NeonWebAds: the page-side half of the Unity web ads bridge (NeonWebAds.jslib -> WebAdsBackend.cs).
 * Loaded by each game's index.html. Provider and ids come from web-ads-config.js.
 * API used by Unity: init(cb(ok)), isReady(kind), showInterstitial(done), showRewarded(done(earned)), setBanner(v)
 */
(function () {
  "use strict";
  var cfg = window.NEON_WEB_ADS || (window.parent && window.parent !== window && window.parent.NEON_WEB_ADS) || { provider: "none" };
  var provider = cfg.provider || "none";
  var busy = false;

  function loadScript(src, attrs) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src; s.async = true;
      Object.keys(attrs || {}).forEach(function (k) { s.setAttribute(k, attrs[k]); });
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function overlay() {
    var el = document.getElementById("neon-ad-layer");
    if (!el) {
      el = document.createElement("div");
      el.id = "neon-ad-layer";
      el.style.cssText = "position:fixed;inset:0;z-index:100000;display:none;align-items:center;justify-content:center;background:#000;";
      document.body.appendChild(el);
    }
    return el;
  }

  /* ---------- test: fake ad with countdown ---------- */
  var Test = {
    init: function (cb) { cb(true); },
    isReady: function () { return true; },
    show: function (rewarded, done) {
      var layer = overlay(), t = rewarded ? 5 : 3, earned = false;
      layer.innerHTML = '<div style="text-align:center;color:#fff;font:600 18px system-ui,sans-serif">' +
        '<div style="font-size:13px;letter-spacing:.12em;opacity:.6">TEST AD</div>' +
        '<div style="font-size:26px;margin:8px 0 18px">' + (rewarded ? "Rewarded video" : "Interstitial") + '</div>' +
        '<div id="neon-ad-count"></div>' +
        '<button id="neon-ad-close" style="margin-top:18px;padding:10px 22px;border-radius:999px;border:1px solid #fff4;background:#fff1;color:#fff;font:inherit;cursor:pointer">' +
        (rewarded ? "Skip (no reward)" : "Close") + '</button></div>';
      layer.style.display = "flex";
      var count = layer.querySelector("#neon-ad-count"), btn = layer.querySelector("#neon-ad-close");
      var timer = setInterval(function () {
        t--; count.textContent = t > 0 ? (rewarded ? "Reward in " : "Close in ") + t : (rewarded ? "Reward earned!" : "");
        if (t <= 0) { clearInterval(timer); earned = rewarded; btn.textContent = "Close"; }
      }, 1000);
      count.textContent = (rewarded ? "Reward in " : "Close in ") + t;
      btn.onclick = function () { clearInterval(timer); layer.style.display = "none"; layer.innerHTML = ""; done(earned); };
    }
  };

  /* ---------- AppLixir (rewarded video only) ---------- */
  var AppLixir = {
    ready: false,
    init: function (cb) {
      var c = cfg.applixir || {};
      if (!c.apiKey) { console.warn("[NeonWebAds] AppLixir apiKey missing in web-ads-config.js"); cb(false); return; }
      loadScript(c.sdk).then(function () { AppLixir.ready = typeof window.initializeAndOpenPlayer === "function"; cb(AppLixir.ready); })
        .catch(function () { cb(false); });
    },
    isReady: function (kind) { return kind === "rewarded" && AppLixir.ready; },
    showRewarded: function (done) {
      var layer = overlay(), finished = false, earned = false;
      layer.innerHTML = '<div id="applixir-ad-container" style="width:100%;height:100%"></div>';
      layer.style.display = "flex";
      function finish() {
        if (finished) return; finished = true;
        clearTimeout(safety); layer.style.display = "none"; layer.innerHTML = ""; done(earned);
      }
      var safety = setTimeout(finish, 120000); // never leave the game stuck
      try {
        window.initializeAndOpenPlayer({
          apiKey: cfg.applixir.apiKey,
          injectionElementId: "applixir-ad-container",
          adStatusCallbackFn: function (status) {
            var type = status && status.type;
            if (type === "complete") earned = true;  // the only status that earns the reward
            if (type === "allAdsCompleted" || type === "manuallyEnded" || type === "skipped" || type === "consentDeclined") finish();
          },
          adErrorCallbackFn: function (err) { console.warn("[NeonWebAds] AppLixir error", err && err.getError ? err.getError().data : err); finish(); }
        });
      } catch (e) { console.warn("[NeonWebAds]", e); finish(); }
    }
  };

  /* ---------- Google H5 Games Ads (Ad Placement API) ---------- */
  var H5 = {
    ready: false,
    init: function (cb) {
      var c = cfg.h5 || {};
      if (!c.client || c.client.indexOf("XXXX") >= 0) { console.warn("[NeonWebAds] H5 client id missing in web-ads-config.js"); cb(false); return; }
      window.adsbygoogle = window.adsbygoogle || [];
      window.adBreak = window.adConfig = function (o) { window.adsbygoogle.push(o); };
      var attrs = { "crossorigin": "anonymous", "data-ad-frequency-hint": c.frequencyHint || "120s" };
      if (c.testMode) attrs["data-adbreak-test"] = "on";
      loadScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(c.client), attrs)
        .then(function () {
          window.adConfig({ preloadAdBreaks: "on", sound: "on", onReady: function () { H5.ready = true; } });
          H5.ready = true; cb(true);
        })
        .catch(function () { cb(false); }); // e.g. blocked by an ad blocker
    },
    isReady: function () { return H5.ready; },
    showInterstitial: function (done) {
      window.adBreak({ type: "next", name: "between_runs", beforeAd: function () {}, afterAd: function () {},
        adBreakDone: function () { done(); } });
    },
    showRewarded: function (done) {
      var earned = false;
      window.adBreak({
        type: "reward", name: "reward",
        beforeAd: function () {}, afterAd: function () {},
        beforeReward: function (showAdFn) { showAdFn(); }, // the player already opted in with the in-game button
        adViewed: function () { earned = true; },
        adDismissed: function () { earned = false; },
        adBreakDone: function () { done(earned); }       // always called, even when no ad was available
      });
    }
  };

  function guard(fn) {
    return function (done) {
      if (busy) { done(false); return; }
      busy = true;
      fn(function (x) { busy = false; done(x); });
    };
  }

  var impl = provider === "test" ? Test : provider === "applixir" ? AppLixir : provider === "h5" ? H5 : null;

  window.NeonWebAds = {
    provider: provider,
    init: function (cb) { if (!impl) { cb(false); return; } impl.init(cb); },
    isReady: function (kind) { if (!impl || busy) return false; return impl.isReady(kind); },
    showInterstitial: guard(function (done) {
      if (impl === Test) Test.show(false, function () { done(); });
      else if (impl && impl.showInterstitial) impl.showInterstitial(done);
      else done();
    }),
    showRewarded: guard(function (done) {
      if (impl === Test) Test.show(true, done);
      else if (impl && impl.showRewarded) impl.showRewarded(done);
      else done(false);
    }),
    setBanner: function () { /* banners live on the games list page, outside the game (see games.js) */ }
  };
})();
