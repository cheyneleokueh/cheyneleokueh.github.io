// Shared chrome: nav, footer, language + theme toggles.
// Each page calls initChrome("pageId") once, after <div id="nav-mount"></div> and
// <div id="footer-mount"></div> exist in the DOM.

const PAGES = [
  { id: "about", en: "Map", zh: "地圖", href: "index.html" },
  { id: "experience", en: "Experience", zh: "經歷", href: "experience.html" },
  { id: "courses", en: "Course reviews", zh: "修課心得", href: "courses.html" },
  { id: "nz", en: "New Zealand", zh: "紐西蘭", href: "nz.html" },
  { id: "other", en: "Other", zh: "其他", href: "other.html" }
];

const KORU = `
  <symbol id="koru" viewBox="-24 -24 48 48">
    <circle cx="0" cy="0" r="21" fill="none" stroke="currentColor" stroke-width="3.2"/>
    <circle cx="0" cy="0" r="16.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
    <path d="M-5 15C-9 4-7-11 4-11c8 0 10 9 3 11c-5 1-6-5-2-6" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"/>
  </symbol>`;

function bi(en, zh) {
  return `<span data-l="en">${en}</span><span data-l="zh">${zh}</span>`;
}

function getLang() {
  return document.documentElement.dataset.lang === "zh" ? "zh" : "en";
}

function setLang(lang) {
  const root = document.documentElement;
  root.dataset.lang = lang;
  // single-language pages (course reviews, NZ) keep their own lang attribute; only the nav switches
  if (!root.hasAttribute("data-lang-fixed")) root.lang = lang === "zh" ? "zh-Hant" : "en";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

function renderNav(activeId) {
  const el = document.getElementById("nav-mount");
  if (!el) return;
  el.outerHTML = `
    <header class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand">
          <svg aria-hidden="true"><use href="#koru"/></svg>
          <span class="nav-brand-name">Cheyne Kueh<small>郭紹安</small></span>
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Site">
          ${PAGES.map(p => `<a href="${p.href}" ${p.id === activeId ? 'aria-current="page"' : ""}>${bi(p.en, p.zh)}</a>`).join("")}
        </nav>
        <div class="nav-tools">
          <button class="nav-tool" id="langToggle" type="button" aria-label="Switch language / 切換語言">${bi("中文", "EN")}</button>
          <button class="nav-tool" id="themeToggle" type="button" aria-label="Toggle colour theme">
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
          </button>
          <button class="nav-tool nav-menu" id="menuToggle" type="button" aria-expanded="false" aria-controls="navLinks">${bi("Menu", "選單")}</button>
        </div>
      </div>
    </header>`;
}

function renderFooter() {
  const el = document.getElementById("footer-mount");
  if (!el) return;
  el.outerHTML = `
    <footer class="footer">
      <p>&copy; <span id="year"></span> Cheyne Kueh 郭紹安</p>
      <p>${bi("Map data", "地圖資料")} &copy; <a href="https://www.openstreetmap.org/copyright" rel="noopener">OpenStreetMap contributors</a></p>
    </footer>`;
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initToggles() {
  const root = document.documentElement;

  document.getElementById("langToggle")?.addEventListener("click", () => {
    setLang(getLang() === "zh" ? "en" : "zh");
  });

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const current = root.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  const menu = document.getElementById("menuToggle");
  menu?.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    menu.closest(".nav").classList.toggle("is-open", open);
  });
}

function initChrome(activeId) {
  // pages without the inline boot script still pick up stored preferences
  try {
    if (!document.documentElement.dataset.lang) setLang(localStorage.getItem("lang") === "zh" ? "zh" : "en");
    const t = localStorage.getItem("theme");
    if (t) document.documentElement.dataset.theme = t;
  } catch (e) {}

  if (!document.getElementById("koru")) {
    document.body.insertAdjacentHTML("beforeend", `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${KORU}</svg>`);
  }
  renderNav(activeId);
  renderFooter();
  initToggles();
}
