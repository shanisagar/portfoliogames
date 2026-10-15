(function () {
  "use strict";

  const $ = (sel, all = false) => all ? [...document.querySelectorAll(sel)] : document.querySelector(sel);
  const games = Array.isArray(window.GAMES) ? window.GAMES : [];

  /* ---------- Render the game cards ---------- */
  const grid = $("#games-grid");
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  grid.innerHTML = games.map((g, i) => `
    <div class="col-lg-4 col-md-6 portfolio-item" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <article class="project" id="game-${esc(g.id)}">
        <div class="project-img">
          <img src="${esc(g.image)}" alt="${esc(g.name)} feature graphic" loading="lazy">
          <div class="project-actions">
            <a href="${esc(g.image)}" data-gallery="games" class="portfolio-lightbox" title="${esc(g.name)} — ${esc(g.tagline)}" aria-label="Enlarge"><i class="bx bx-expand"></i></a>
            <a href="games/${esc(g.id)}/" class="js-play" data-game="${esc(g.id)}" aria-label="Play ${esc(g.name)}"><i class="bx bx-play"></i></a>
          </div>
        </div>
        <div class="project-body">
          <span class="project-org">${esc(g.genre || "Game")} · ${esc(g.tagline)}</span>
          <h3>${esc(g.name)}</h3>
          <p>${esc(g.description)}</p>
          <div class="tags">${(g.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          <div class="game-buttons">
            <a href="games/${esc(g.id)}/" class="btn-play-main js-play" data-game="${esc(g.id)}"><i class="bx bx-play-circle"></i> Play in browser</a>
            ${g.apk ? `<a href="${esc(g.apk)}" class="btn-apk-outline" download><i class="bx bxl-android"></i> APK${g.apkSize ? ` <small>· ${esc(g.apkSize)}</small>` : ""}</a>` : ""}
          </div>
        </div>
      </article>
    </div>`).join("");

  const countEl = $("#game-count");
  if (countEl) countEl.textContent = games.length;

  /* ---------- Header, mobile nav, back-to-top, year ---------- */
  const header = $("#header"), backtotop = $(".back-to-top"), navToggle = $(".mobile-nav-toggle");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    backtotop.classList.toggle("active", window.scrollY > 300);
  };
  window.addEventListener("load", onScroll);
  document.addEventListener("scroll", onScroll, { passive: true });

  const setMobileNav = (open) => {
    document.body.classList.toggle("mobile-nav-active", open);
    const icon = navToggle.querySelector("i");
    icon.classList.toggle("bi-list", !open);
    icon.classList.toggle("bi-x", open);
  };
  navToggle.addEventListener("click", () => setMobileNav(!document.body.classList.contains("mobile-nav-active")));
  $("#navbar a", true).forEach((a) => a.addEventListener("click", () => setMobileNav(false)));

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (window.GLightbox) GLightbox({ selector: ".portfolio-lightbox" });
  window.addEventListener("load", () => {
    if (window.AOS) AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
  });

  /* ---------- Game pop-up ---------- */
  const modal = $("#game-modal"), frame = $("#game-modal-frame"), title = $("#game-modal-title");
  let lastFocus = null;

  function openGame(id) {
    const g = games.find((x) => x.id === id);
    if (!g) return;
    lastFocus = document.activeElement;
    title.textContent = g.name;
    frame.title = g.name;
    frame.src = "games/" + g.id + "/";
    modal.hidden = false;
    document.body.classList.add("game-open");
    frame.addEventListener("load", () => { try { frame.focus(); } catch (e) {} }, { once: true });
    history.replaceState(null, "", "?play=" + encodeURIComponent(g.id)); // shareable link to this game
  }

  function closeGame() {
    if (modal.hidden) return;
    if (document.fullscreenElement) document.exitFullscreen();
    frame.src = "about:blank"; // stops the game and its sound
    modal.hidden = true;
    document.body.classList.remove("game-open");
    history.replaceState(null, "", location.pathname + "#games");
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-play");
    if (!btn) return;
    e.preventDefault();
    openGame(btn.dataset.game);
  });
  $("[data-game-close]").addEventListener("click", closeGame);
  $("[data-game-fullscreen]").addEventListener("click", () => {
    const box = $(".game-modal-box");
    if (document.fullscreenElement) document.exitFullscreen();
    else if (box.requestFullscreen) box.requestFullscreen();
  });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeGame(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeGame(); });

  /* ---------- Deep link from the main portfolio: ?play=<id> ---------- */
  const wanted = new URLSearchParams(location.search).get("play");
  if (wanted) {
    const card = document.getElementById("game-" + wanted);
    if (card) card.scrollIntoView({ block: "center" });
    openGame(wanted);
  }
})();
