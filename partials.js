// Shared chrome: nav, footer, language + theme toggles.
// Each page calls initChrome("pageId") once, after <div id="nav-mount"></div> and
// <div id="footer-mount"></div> exist in the DOM.

// one link per page; contact lives in the hero, at the end of About, and in every footer
const PAGES = [
  { id: "home", en: "About", zh: "關於", href: "index.html" },
  { id: "research", en: "Research", zh: "研究", href: "research.html" },
  { id: "experience", en: "Experience", zh: "經歷", href: "experience.html" },
  { id: "courses", en: "Courses", zh: "課程", href: "courses.html" }
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
        <p><a href="mailto:cheyneleokueh@gmail.com">cheyneleokueh@gmail.com</a></p>
        <p>&copy; <span id="year"></span> Cheyne Kueh 郭紹安 &nbsp; ${bi("Updated November 2026", "更新於 2026 年 11 月")}</p>
        <p class="local-only"><a href="local-plans.html">${bi("Local: plans and to-dos", "本機：規劃與待辦")}</a></p>
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
  initLocal();
  initMotion();
}

// ---- local only: to-do flags and the plans page show on localhost, never on the live site ----
function initLocal() {
  if (!/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
  document.documentElement.classList.add("is-local");
}

// ---- motion: first-visit intro, page transitions, scroll reveals, progress, hero drift, counters ----
// Everything here is decoration: content is complete and visible without it.
function initMotion() {
  const root = document.documentElement;
  try { sessionStorage.setItem("seen", "1"); } catch (e) {}
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.webdriver) return;

  // scroll progress, and the nav tucks away while reading down and returns on the way up
  const bar = document.createElement("div");
  bar.className = "progress"; bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  const nav = document.querySelector(".nav");
  const photo = document.querySelector(".hero-photo");
  let lastY = scrollY, ticking = false;
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (nav && !nav.classList.contains("is-open")) nav.classList.toggle("is-tucked", y > lastY && y > 240);
    if (photo && y < innerHeight * 1.2) photo.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.04)`;
    lastY = y; ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // reveals: one gentle rise per block, staggered within a group
  const targets = document.querySelectorAll(".section-head, .page-head, .highlights li, .recent li, .row, .project, .skills div, .facts > div, .two-col > div, .close .wrap > *, .course-card, .quest-section");
  if (!("IntersectionObserver" in window) || !targets.length) return;
  root.classList.add("reveal-on");
  const groups = new Map();
  targets.forEach(el => {
    const g = el.parentElement; const i = groups.get(g) || 0; groups.set(g, i + 1);
    el.classList.add("rv"); el.style.setProperty("--d", `${Math.min(i, 6) * 70}ms`);
  });
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in"); io.unobserve(e.target);
    e.target.querySelectorAll("[data-count]").forEach(countUp);
    if (e.target.matches("[data-count]")) countUp(e.target);
  }), { rootMargin: "0px 0px -8% 0px" });
  targets.forEach(el => io.observe(el));
}

// counts a figure up from zero, keeping its prefix, suffix and separators ("NT$1.04M", "5,000", "80+")
function countUp(el) {
  const text = el.textContent, m = text.match(/[\d,.]+/);
  if (!m) return;
  const raw = m[0], target = parseFloat(raw.replace(/,/g, "")), dec = (raw.split(".")[1] || "").length;
  const pre = text.slice(0, m.index), post = text.slice(m.index + raw.length), t0 = performance.now();
  const fmt = v => (raw.includes(",") ? v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }) : v.toFixed(dec));
  const step = t => {
    const k = Math.min((t - t0) / 900, 1), e = 1 - Math.pow(1 - k, 3);
    el.textContent = pre + fmt(target * e) + post;
    if (k < 1) requestAnimationFrame(step); else el.textContent = text;
  };
  requestAnimationFrame(step);
}
