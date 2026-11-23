// ---- Page rendering (see data.js for content, partials.js for nav/footer/theme) ----

// ---- Course reviews (中文) ----

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
  return `<span aria-label="${n} / 5">${out}</span>`;
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
        ${t.label}，${t.subtitle}
      </button>`).join("");

    const term = COURSE_TERMS.find(t => t.id === active);
    listEl.innerHTML = `
      <p class="term-period">${term.period}</p>
      <div class="course-grid">
        ${term.courses.map(courseCardHTML).join("")}
      </div>
      ${term.selfStudy && term.selfStudy.length ? `
        <div class="self-study">
          <h3>自學：臺大 OCW</h3>
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

// ---- Boot ----

initChrome(document.body.dataset.page);
renderQuests();
renderCourses();
initPen();
