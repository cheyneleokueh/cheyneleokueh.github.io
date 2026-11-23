// Shared chrome: nav, footer, language + theme toggles.
// Each page calls initChrome("pageId") once, after <div id="nav-mount"></div> and
// <div id="footer-mount"></div> exist in the DOM.

// pages, plus jump links to home sections (they always go to the home page)
const PAGES = [
  { id: "research", en: "Research", zh: "研究", href: "research.html" },
  { id: "leadership", en: "Leadership", zh: "領導", href: "index.html#leadership" },
  { id: "teaching", en: "Teaching", zh: "教學", href: "index.html#teaching" },
  { id: "cv", en: "CV", zh: "履歷", href: "cv.html" },
  { id: "courses", en: "Course reviews", zh: "修課心得", href: "courses.html" },
  { id: "contact", en: "Contact", zh: "聯絡", href: "index.html#contact" }
];

function bi(en, zh) {
  return `<span data-l="en">${en}</span><span data-l="zh">${zh}</span>`;
}

function getLang() {
  return document.documentElement.dataset.lang === "zh" ? "zh" : "en";
}

function setLang(lang) {
  const root = document.documentElement;
  root.dataset.lang = lang;
  // single-language pages (course reviews) keep their own lang attribute; only the nav switches
  if (!root.hasAttribute("data-lang-fixed")) root.lang = lang === "zh" ? "zh-Hant" : "en";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

function renderNav(activeId) {
  const el = document.getElementById("nav-mount");
  if (!el) return;
  el.outerHTML = `
    <header class="nav">
      <div class="wrap nav-inner">
        <a href="index.html" class="nav-brand" ${activeId === "home" ? 'aria-current="page"' : ""}>
          <span class="nav-brand-en">Cheyne Kueh</span>
          <span class="nav-brand-zh" lang="zh-Hant">郭紹安</span>
        </a>
        <button class="nav-tool nav-menu" id="menuToggle" type="button" aria-expanded="false" aria-controls="navLinks">${bi("Menu", "選單")}</button>
        <nav class="nav-links" id="navLinks" aria-label="Site">
          ${PAGES.map(p => `<a href="${p.href}" ${p.id === activeId ? 'aria-current="page"' : ""}>${bi(p.en, p.zh)}</a>`).join("")}
        </nav>
        <div class="nav-tools">
          <button class="nav-tool" id="langToggle" type="button" aria-label="Switch language / 切換語言">${bi("中文", "EN")}</button>
          <div class="theme-switch" role="group" aria-label="Page style / 頁面風格">
            <button type="button" data-theme-set="light" aria-pressed="false" title="Light"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg><span class="visually-hidden">${bi("Light", "淺色")}</span></button>
            <button type="button" data-theme-set="dark" aria-pressed="false" title="Dark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg><span class="visually-hidden">${bi("Dark", "深色")}</span></button>
            <button type="button" data-theme-set="plain" aria-pressed="false">${bi("Plain", "簡易")}</button>
          </div>
        </div>
      </div>
    </header>`;
}

function renderFooter() {
  const el = document.getElementById("footer-mount");
  if (!el) return;
  el.outerHTML = `
    <footer class="footer">
      <div class="wrap">
        <p>&copy; <span id="year"></span> Cheyne Kueh 郭紹安</p>
      </div>
    </footer>`;
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initToggles() {
  const root = document.documentElement;

  document.getElementById("langToggle")?.addEventListener("click", () => {
    setLang(getLang() === "zh" ? "en" : "zh");
  });

  // phones: the links fold behind a Menu button; picking a link closes it
  const menu = document.getElementById("menuToggle");
  const nav = menu?.closest(".nav");
  const setOpen = open => { menu.setAttribute("aria-expanded", String(open)); nav.classList.toggle("is-open", open); };
  menu?.addEventListener("click", () => setOpen(menu.getAttribute("aria-expanded") !== "true"));
  document.getElementById("navLinks")?.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && nav?.classList.contains("is-open")) { setOpen(false); menu.focus(); } });

  // light / dark / plain: plain is the quiet academic version of every page
  const sw = document.querySelector(".theme-switch");
  const effective = () => root.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const paint = () => sw?.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.themeSet === effective())));
  sw?.addEventListener("click", e => {
    const b = e.target.closest("button[data-theme-set]");
    if (!b) return;
    root.dataset.theme = b.dataset.themeSet;
    try { localStorage.setItem("theme", b.dataset.themeSet); } catch (e) {}
    paint();
  });
  paint();
}

// signature: the red-pen marks draw themselves once as they scroll into view
function initPen() {
  // automated browsers (screenshots, crawlers) get the marks already drawn
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.webdriver || !("IntersectionObserver" in window)) return;
  const marks = document.querySelectorAll(".mark:not(.mark-plan)");
  if (!marks.length) return;
  document.documentElement.classList.add("pen");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-drawn");
      io.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -12% 0px" });
  marks.forEach(m => io.observe(m));
}

function initChrome(activeId) {
  // pages without the inline boot script still pick up stored preferences
  try {
    if (!document.documentElement.dataset.lang) setLang(localStorage.getItem("lang") === "zh" ? "zh" : "en");
    const t = localStorage.getItem("theme");
    if (t) document.documentElement.dataset.theme = t;
  } catch (e) {}

  renderNav(activeId);
  renderFooter();
  initToggles();
}
