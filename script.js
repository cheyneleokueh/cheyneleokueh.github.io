// ---- Page rendering (see data.js for content, partials.js for nav/footer/theme) ----

function renderHeroStats() {
  const el = document.getElementById("heroStats");
  if (!el || typeof HERO_STATS === "undefined") return;
  el.innerHTML = HERO_STATS.map(s => `
    <div class="stat-tile">
      <span class="value">${s.value}</span>
      <div class="label">${s.label}</div>
      <div class="note">${s.note}</div>
    </div>`).join("");
}

function starRow(n) {
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
          <h3>${c.name}</h3>
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
        <div class="course-field"><h4>授課內容</h4><p>${c.content}</p></div>
        <div class="course-field"><h4>上課方式</h4><p>${c.method}</p></div>
        <div class="course-field"><h4>評分方式</h4><p>${c.grading}</p></div>
        <div class="course-field"><h4>心得與評語</h4><p>${c.review}</p></div>
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
      </div>`;

    tabsEl.querySelectorAll(".term-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        active = btn.dataset.term;
        paint();
      });
    });
  }

  paint();
}

const TAG_LABELS = { all: "全部", research: "研究", leadership: "領導與服務", learning: "自學", future: "未來規劃" };

function expItemHTML(e) {
  return `
    <li class="exp-item">
      <span class="exp-status ${e.active ? "is-active" : ""}"></span>
      <div class="exp-main">
        <div class="exp-top">
          <h3 class="exp-title">${e.title}</h3>
          <span class="exp-period">${e.period}</span>
        </div>
        <p class="exp-org">${e.org}</p>
        <ul class="exp-bullets">
          ${e.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </li>`;
}

function renderExperience() {
  const filtersEl = document.getElementById("tagFilters");
  const feedEl = document.getElementById("expFeed");
  const noteEl = document.getElementById("expNote");
  if (!filtersEl || !feedEl || typeof EXPERIENCE === "undefined") return;

  if (noteEl && typeof EXPERIENCE_NOTE !== "undefined") noteEl.textContent = EXPERIENCE_NOTE;

  let active = "all";

  function paint() {
    filtersEl.innerHTML = Object.entries(TAG_LABELS).map(([key, label]) => `
      <button class="tag-filter" data-tag="${key}" aria-pressed="${key === active}">${label}</button>
    `).join("");

    const items = active === "all" ? EXPERIENCE : EXPERIENCE.filter(e => e.tag === active);
    feedEl.innerHTML = items.map(expItemHTML).join("");

    filtersEl.querySelectorAll(".tag-filter").forEach(btn => {
      btn.addEventListener("click", () => {
        active = btn.dataset.tag;
        paint();
      });
    });
  }

  paint();
}

function renderPublications() {
  const el = document.getElementById("pubFeed");
  if (!el || typeof PUBLICATIONS === "undefined") return;
  el.innerHTML = PUBLICATIONS.map(p => `
    <li class="exp-item">
      <div class="exp-main">
        <div class="exp-top">
          <h3 class="exp-title">${p.title}</h3>
          <span class="exp-period">${p.period}</span>
        </div>
        <p class="exp-org">${p.venue}</p>
        <ul class="exp-bullets">${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      </div>
    </li>`).join("");
}

function renderOpenSource() {
  const el = document.getElementById("osGrid");
  if (!el || typeof OPEN_SOURCE === "undefined") return;
  el.innerHTML = OPEN_SOURCE.map(p => `
    <div class="os-card">
      <span class="os-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.bullets[0]}</p>
    </div>`).join("");
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
        <h3>${s.heading}</h3>
        <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>`).join("")}
    <div class="hs-section">
      <h3>${NZ.uoa.heading}</h3>
      <p style="color:var(--text-muted);font-size:0.92rem;margin:0 0 16px;">${NZ.uoa.intro}</p>
      <div class="uoa-grid">
        ${NZ.uoa.courses.map(c => `
          <div class="uoa-card">
            <span class="code">${c.code}</span>
            <h4>${c.name}</h4>
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
        <h3>${group.heading}</h3>
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

renderHeroStats();
renderCourses();
renderExperience();
renderPublications();
renderOpenSource();
renderNZ();
renderOther();

initRevealObserver();
