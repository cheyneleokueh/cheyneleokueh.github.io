// ---- Page rendering (see data.js for content, partials.js for nav/footer/theme) ----

// ---- Home: campaign map ----

function initMap() {
  const map = document.querySelector(".map");
  if (!map) return;

  // phones get a crop centred on the peninsula so the banners stay legible
  const wide = map.getAttribute("viewBox");
  const narrow = window.matchMedia("(max-width: 760px)");
  const fit = () => map.setAttribute("viewBox", narrow.matches ? "500 420 660 495" : wide);
  narrow.addEventListener("change", fit);
  fit();
  init3D();

  // signature: hovering or focusing a banner marches a dotted route from the castle
  map.querySelectorAll(".banner").forEach(b => {
    const route = map.querySelector(`.route[data-route="${b.dataset.route}"]`);
    const on = () => route?.classList.add("is-on");
    const off = () => route?.classList.remove("is-on");
    b.addEventListener("mouseenter", on);
    b.addEventListener("focus", on);
    b.addEventListener("mouseleave", off);
    b.addEventListener("blur", off);
  });
}

function webgl2() {
  const gl = document.createElement("canvas").getContext("webgl2");
  gl?.getExtension("WEBGL_lose_context")?.loseContext();  // free the probe context at once
  return !!gl;
}

// the 3D village replaces the SVG map only where it will run well; everything else keeps the map
function init3D() {
  const host = document.querySelector(".hero-3d");
  if (!host) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const capable = window.matchMedia("(min-width: 761px) and (pointer: fine)").matches &&
    !(navigator.connection && navigator.connection.saveData) &&
    (navigator.hardwareConcurrency || 4) >= 4 &&
    webgl2();
  if (!capable) return;

  Promise.all([
    import("./assets/scene.js?v=202611222115"),
    fetch("assets/scene-data.json?v=202611222125").then(r => r.json()),
    document.fonts ? document.fonts.load('40px "Dela CJK"', "研光将語塾郷") : null
  ]).then(([mod, data]) => {
    host.hidden = false;
    mod.start(host, data, { labels: host.querySelector(".labels3d"), reduced });
    host.closest(".hero").classList.add("is-3d");
  }).catch(() => { host.hidden = true; });  // CDN or WebGL failure: the SVG map stays
}

// first visit per session: the crest is stamped, then the fusuma doors part
function initLoader() {
  // skipped for reduced motion and for automated browsers (crawlers, screenshot tools)
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.webdriver) return;
  try {
    if (sessionStorage.getItem("seenLoader")) return;
    sessionStorage.setItem("seenLoader", "1");
  } catch (e) { return; }

  const el = document.createElement("div");
  el.className = "loader";
  el.setAttribute("aria-hidden", "true");
  el.innerHTML = `
    <div class="loader-door left"></div>
    <div class="loader-door right"></div>
    <div class="loader-stamp">
      <svg viewBox="0 0 48 48"><use href="#koru"/></svg>
      <span>郭紹安</span>
      <span class="loader-skip">${getLang() === "zh" ? "點擊略過" : "Click to skip"}</span>
    </div>`;
  document.body.appendChild(el);

  let done = false;
  const open = () => {
    if (done) return;
    done = true;
    el.classList.add("is-open");
    setTimeout(() => el.remove(), 950);
  };
  el.addEventListener("click", open);
  document.addEventListener("keydown", open, { once: true });
  setTimeout(open, 1100);
}

function questRowHTML(label, note, pct, valueText, baseline) {
  const fill = Math.min(pct, 100);
  const state = pct >= 100 ? "is-done" : (baseline != null && pct < baseline ? "is-behind" : "");
  return `
    <div class="quest-row ${state}">
      <div class="quest-head">
        <span class="quest-label">${label}</span>
        <span class="quest-value">${valueText}</span>
      </div>
      <div class="quest-track" role="img" aria-label="${label} ${valueText}">
        <div class="quest-fill" style="width:${fill}%"></div>
        ${baseline != null ? `<span class="quest-baseline" style="left:${baseline}%"></span>` : ""}
      </div>
      <p class="quest-note">${note}</p>
    </div>`;
}

function renderQuests() {
  const el = document.getElementById("questLog");
  if (!el || typeof QUESTS === "undefined") return;
  const b = QUESTS.baseline;
  const g = QUESTS.gpa;

  el.innerHTML = `
    <div class="quest-legend">
      <span><i class="legend-fill"></i>目前進度</span>
      <span><i class="legend-baseline"></i>${QUESTS.baselineLabel}</span>
      <span class="quest-legend-end">100% = 大四畢業</span>
    </div>
    <div class="quest-grid">
      ${QUESTS.items.map(q => questRowHTML(q.label, q.note, q.value, q.value >= 100 ? "過關" : `${q.value}%`, b)).join("")}
      ${questRowHTML("GPA", g.note, g.value / g.max * 100, `${g.value.toFixed(2)} / ${g.max}`, null)}
    </div>`;
}

function starRow(n) {
  if (n == null) return '<span class="course-ratings-empty">尚未評分</span>';
  if (n === 0) return '<span class="course-ratings-empty">零學分</span>';
  let out = "";
  for (let i = 0; i < 5; i++) {
    out += i < n
      ? '<span class="star-fill">★</span>'
      : '<span class="star-empty">★</span>';
  }
  return out;
}

function courseCardHTML(c) {
  return `
    <details class="course-card">
      <summary>
        <div class="course-card-top">
          <h2>${c.name}</h2>
          <span class="course-grade">${c.grade}</span>
        </div>
        <div class="course-meta">
          <span class="course-type">${c.type}</span>
          <span>${c.unit}</span>
          <span>${c.teacher}</span>
        </div>
        <div class="course-ratings">
          <span>涼 ${starRow(c.cool)}</span>
          <span>甜 ${starRow(c.sweet)}</span>
        </div>
      </summary>
      <div class="course-body">
        <div class="course-field"><h3>授課內容</h3><p>${c.content}</p></div>
        <div class="course-field"><h3>上課方式</h3><p>${c.method}</p></div>
        <div class="course-field"><h3>評分方式</h3><p>${c.grading}</p></div>
        <div class="course-field"><h3>心得與評語</h3><p>${c.review}</p></div>
      </div>
    </details>`;
}

function renderCourses() {
  const tabsEl = document.getElementById("termTabs");
  const listEl = document.getElementById("courseTerms");
  if (!tabsEl || !listEl || typeof COURSE_TERMS === "undefined") return;

  let active = COURSE_TERMS[COURSE_TERMS.length - 1].id;

  function paint() {
    tabsEl.innerHTML = COURSE_TERMS.map(t => `
      <button class="term-tab" role="tab" data-term="${t.id}" aria-selected="${t.id === active}">
        ${t.label} <span style="opacity:.7;font-weight:500">· ${t.subtitle}</span>
      </button>`).join("");

    const term = COURSE_TERMS.find(t => t.id === active);
    listEl.innerHTML = `
      <p class="term-period">${term.period}</p>
      <div class="course-grid">
        ${term.courses.map(courseCardHTML).join("")}
      </div>
      ${term.selfStudy && term.selfStudy.length ? `
        <div class="self-study">
          <h3>自學 · 臺大 OCW</h3>
          <ul>${term.selfStudy.map(c => `<li>${c.name}<span>${c.teacher}</span></li>`).join("")}</ul>
        </div>` : ""}`;

    tabsEl.querySelectorAll(".term-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        active = btn.dataset.term;
        paint();
      });
    });
  }

  paint();
}

// [中文, English] pairs; the Experience page follows the language toggle
const STATUS_LABELS = { current: ["目前", "Current"], past: ["過去", "Past"], all: ["全部", "All"] };
const TAG_LABELS = { all: ["全部", "All"], research: ["研究", "Research"], leadership: ["領導與服務", "Leadership"], learning: ["自學", "Self-study"], future: ["未來規劃", "Planned"] };
const YEAR_LABELS = { 115: ["115 學年 · 大二", "2026–27 · Year 2"], 114: ["114 學年 · 大一", "2025–26 · Year 1"], 113: ["113 學年 · 入學前", "2024–25 · Before NYCU"] };

const pick = pair => pair[getLang() === "zh" ? 0 : 1];

function expItemHTML(e) {
  const en = getLang() === "en";
  const title = en && e.titleEn ? e.titleEn : e.title;
  const org = en && e.orgEn ? e.orgEn : e.org;
  const period = en && e.periodEn ? e.periodEn : e.period;
  const bullets = en && e.bulletsEn && e.bulletsEn.length ? e.bulletsEn : e.bullets;
  return `
    <li class="exp-item">
      <span class="exp-status ${e.active ? "is-active" : ""}"></span>
      <div class="exp-main">
        <div class="exp-top">
          <h2 class="exp-title">${title}</h2>
          <span class="exp-period">${period}</span>
        </div>
        <p class="exp-org">${org}</p>
        <ul class="exp-bullets">
          ${bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </li>`;
}

function renderExperience() {
  const filtersEl = document.getElementById("tagFilters");
  const feedEl = document.getElementById("expFeed");
  const noteEl = document.getElementById("expNote");
  if (!filtersEl || !feedEl || typeof EXPERIENCE === "undefined") return;

  // only offer tags that have entries
  const tags = Object.keys(TAG_LABELS).filter(k => k === "all" || EXPERIENCE.some(e => e.tag === k));
  let status = "all";
  let tag = "all";

  function buttons(labels, keys, active, attr) {
    return keys.map(k => `<button class="tag-filter" data-${attr}="${k}" aria-pressed="${k === active}">${pick(labels[k])}</button>`).join("");
  }

  function paint() {
    if (noteEl && typeof EXPERIENCE_NOTE !== "undefined") {
      noteEl.textContent = getLang() === "en" && typeof EXPERIENCE_NOTE_EN !== "undefined" ? EXPERIENCE_NOTE_EN : EXPERIENCE_NOTE;
    }
    filtersEl.innerHTML = `
      <div class="filter-row">${buttons(STATUS_LABELS, Object.keys(STATUS_LABELS), status, "status")}</div>
      <div class="filter-row filter-row-sub">${buttons(TAG_LABELS, tags, tag, "tag")}</div>`;

    const items = EXPERIENCE.filter(e =>
      (status === "all" || (status === "current") === !!e.active) &&
      (tag === "all" || e.tag === tag));

    const years = [...new Set(items.map(e => e.year))].sort((a, b) => b - a);
    feedEl.innerHTML = items.length
      ? years.map(y => `
          <li class="exp-year">${YEAR_LABELS[y] ? pick(YEAR_LABELS[y]) : `${y} 學年`}</li>
          ${items.filter(e => e.year === y).map(expItemHTML).join("")}`).join("")
      : `<li class="exp-empty">${pick(["這個分類目前沒有項目。", "Nothing in this category yet."])}</li>`;

    filtersEl.querySelectorAll("[data-status]").forEach(btn => {
      btn.addEventListener("click", () => { status = btn.dataset.status; paint(); });
    });
    filtersEl.querySelectorAll("[data-tag]").forEach(btn => {
      btn.addEventListener("click", () => { tag = btn.dataset.tag; paint(); });
    });
  }

  paint();
  document.addEventListener("langchange", paint);
}

function renderNZ() {
  const introEl = document.getElementById("nzIntro");
  const bodyEl = document.getElementById("nzBody");
  if (!introEl || !bodyEl || typeof NZ === "undefined") return;

  introEl.textContent = NZ.intro;

  bodyEl.innerHTML = `
    <p class="hs-intro"><strong>${NZ.school}</strong> · ${NZ.schoolPeriod}<br>${NZ.schoolIntro}</p>
    <div class="hs-stats">
      ${NZ.stats.map(s => `
        <div class="hs-stat">
          <span class="value">${s.value}</span>
          <span class="label">${s.label}</span>
        </div>`).join("")}
    </div>
    ${NZ.sections.map(s => `
      <div class="hs-section">
        <h2>${s.heading}</h2>
        <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>`).join("")}
    <div class="hs-section">
      <h2>${NZ.uoa.heading}</h2>
      <p class="hs-intro">${NZ.uoa.intro}</p>
      <div class="uoa-grid">
        ${NZ.uoa.courses.map(c => `
          <div class="uoa-card">
            <span class="code">${c.code}</span>
            <h3>${c.name}</h3>
            <p>${c.note}</p>
          </div>`).join("")}
      </div>
    </div>
    <p class="hs-more">${NZ.more}</p>
  `;
}

function renderOther() {
  const el = document.getElementById("otherBody");
  if (!el || typeof OTHER === "undefined") return;

  el.innerHTML = OTHER.sections.map(group => `
    <div class="other-group">
      <div class="other-group-heading">
        <h2>${group.heading}</h2>
        <span class="subtitle">${group.subtitle}</span>
      </div>
      <ol class="exp-feed">
        ${group.items.map(i => `
          <li class="exp-item">
            <div class="exp-main">
              <div class="exp-top">
                <h3 class="exp-title">${i.title}</h3>
                <span class="exp-period">${i.period || ""}</span>
              </div>
              ${i.org ? `<p class="exp-org">${i.org}</p>` : ""}
              <ul class="exp-bullets">${i.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
            </div>
          </li>`).join("")}
      </ol>
    </div>`).join("");
}

// ---- Boot ----

initChrome(document.body.dataset.page);

initMap();
if (document.body.dataset.page === "about") initLoader();
renderQuests();
renderCourses();
renderExperience();
renderNZ();
renderOther();
