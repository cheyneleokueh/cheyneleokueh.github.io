// Shared chrome: nav, footer, theme toggle, scroll reveal.
// Each page calls initChrome("pageId") once, after <div id="nav-mount"></div> and
// <div id="footer-mount"></div> exist in the DOM.

const PAGES = [
  { id: "about", label: "About", num: "01", href: "index.html" },
  { id: "publications", label: "Publications", num: "02", href: "publications.html" },
  { id: "open-source", label: "Open Source", num: "03", href: "open-source.html" },
  { id: "experience", label: "Experience", num: "04", href: "experience.html" },
  { id: "courses", label: "Courses", num: "05", href: "courses.html" },
  { id: "nz", label: "NZ", num: "06", href: "nz.html" },
  { id: "other", label: "Other", num: "07", href: "other.html" }
];

function renderNav(activeId) {
  const el = document.getElementById("nav-mount");
  if (!el) return;
  el.outerHTML = `
    <header class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand">
          <span class="nav-brand-zh">郭紹安</span>
          <span class="nav-brand-en">CHEYNE KUEH</span>
        </a>
        <nav class="nav-links">
          ${PAGES.map(p => `<a href="${p.href}" ${p.id === activeId ? 'aria-current="page"' : ''}>${p.label}</a>`).join("")}
        </nav>
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle color theme">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
        </button>
      </div>
    </header>`;
}

function renderFooter() {
  const el = document.getElementById("footer-mount");
  if (!el) return;
  el.outerHTML = `
    <footer class="footer">
      <p>&copy; <span id="year"></span> Cheyne Kueh. Built with plain HTML &amp; CSS.</p>
    </footer>`;
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  if (!themeToggle) return;

  function applyStoredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored) root.setAttribute("data-theme", stored);
  }

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  applyStoredTheme();
}

function initRevealObserver() {
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => observer.observe(el));
}

function initChrome(activeId) {
  renderNav(activeId);
  renderFooter();
  initThemeToggle();
  // reveal observer runs after page-specific render calls populate .reveal elements —
  // each page's script calls initRevealObserver() itself, after its own render() calls.
}
