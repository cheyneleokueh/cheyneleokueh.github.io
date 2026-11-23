---
name: Cheyne Kueh 郭紹安
description: A returned manuscript on warm paper, opened by a golden-hour photograph; marked in a deep gold pen, with one indigo stamp. The dark theme is indigo night.
colors:
  paper: "#f2efe8"
  paper-2: "#e8e3d8"
  rule: "#d6cfc0"
  rule-strong: "#9c927e"
  ink: "#1b1d22"
  ink-2: "#4a4c52"
  pencil: "#5d5f66"
  pen: "#8a6a1f"
  stamp: "#1e2b45"
  on-stamp: "#f2efe8"
  paper-dark: "#121a2b"
  paper-2-dark: "#18223a"
  rule-dark: "#2a3550"
  rule-strong-dark: "#4a5878"
  ink-dark: "#ece8df"
  ink-2-dark: "#c3c6cf"
  pencil-dark: "#a3a8b4"
  pen-dark: "#d9b45e"
  stamp-dark: "#d9b45e"
  on-stamp-dark: "#17130a"
typography:
  display:
    fontFamily: "Shippori Mincho, Noto Serif TC, PMingLiU, serif"
    fontSize: "clamp(3rem, 1.6rem + 5.2vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  name-cell:
    fontFamily: "Shippori Kanji, Shippori Mincho, Noto Serif TC, serif"
    fontSize: "calc(clamp(4rem, 2.6rem + 4.6vw, 7rem) * 0.7)"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Shippori Mincho, Noto Serif TC, PMingLiU, serif"
    fontSize: "clamp(1.9rem, 1.4rem + 1.6vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Shippori Mincho, Noto Serif TC, PMingLiU, serif"
    fontSize: "1.6rem"
    fontWeight: 600
    lineHeight: 1.25
  subtitle:
    fontFamily: "Source Sans 3, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
  lede:
    fontFamily: "Source Sans 3, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Source Sans 3, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  body-zh:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Source Sans 3, Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  stamp: "2px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section: "clamp(4rem, 3rem + 4vw, 6.5rem)"
  wrap: "70rem"
  cell: "clamp(4rem, 2.6rem + 4.6vw, 7rem)"
  mark-column: "3.25rem"
  heading-cell: "14px"
  skills-label: "13rem"
components:
  button-stamp:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.on-stamp}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.25rem"
    height: "3rem"
  button-outline-hover:
    backgroundColor: "{colors.paper-2}"
  nav-tool:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "0 0.7rem"
    height: "2.75rem"
  name-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.name-cell}"
    size: "{spacing.cell}"
  level-badge:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "0 0.35rem"
    height: "1.7rem"
---

# Design System: Cheyne Kueh 郭紹安

## Overview

**Creative North Star: "The Returned Manuscript, at Golden Hour"**

The site is a returned manuscript on warm paper. A golden-hour photograph (looking out from a balcony over parkland and a town) opens the home page; a paper-coloured wash runs in from the left so the name and one sentence sit on paper, not on the picture. Below the hero the page is the sheet: warm off-white, sumi-dark ink, hairline ruling in sand, and a deep gold pen that marks the research record. One indigo stamp is the primary action. The dark theme is indigo night: a blue-black sheet, warm white type, and the gold pen doing both jobs.

郭紹安 stands vertically in three manuscript cells beside Cheyne Kueh at equal weight. The manuscript survives below the hero as a row of small cells under every heading, hairlines between rows, and double rules closing the hero and the page. Density is calm and editorial.

Navigation is five links: About (home), Research, Experience, Courses, Contact (the contact band at the end of About). There is no CV page: About holds the hero, four Highlights, About (with interests), Education with awards, Skills and languages, and Contact; Research holds the projects and presentations; Experience holds leadership and teaching. The CV exists as a PDF, printed from `cv-print.html` (noindex, not linked) by `tools/build_cv_pdf.py`; `cv.html` redirects old links to the right page. A three-way style switch (light, dark, plain) sits beside the language button; plain is the quiet academic version of every page.

Entries are curated: each has a title, organisation, dates and one result line. The two-page A4 PDF CV prints from cv-print.html.

This world replaced, in turn, a campaign-map world and a green-ruled manuscript with a red pen and Klee One. Nothing from either carries over: no seals, banners, map art, red pen, green ruling, line numbers or Klee One.

**Key Characteristics:**
- Golden-hour photograph in the hero only, washed to paper on the left.
- Warm paper, sumi ink, sand ruling; indigo night in dark.
- One gold pen for the marks and interaction state; one indigo stamp for the primary action.
- Shippori Mincho 700 for display and headings; Source Sans 3 for text; Noto Sans TC for Chinese running text.
- Pen marks draw themselves once on scroll; static under reduced motion, without JS, in automated browsers and in print.
- CV entries unnumbered, one result line each, grouped into fixed sections.

## Colors

A warm near-neutral sheet and its ink, with one gold pen and one indigo stamp.

### Primary
- **Deep Gold Pen** (pen): the research marks, the focus ring, the current-page underline in the nav, link underlines on hover, the caret and a 24% tint for selection, annotations on research figures, and the course grade numerals. In dark it brightens to #d9b45e.
- **Indigo Stamp** (stamp): the one filled primary button. Text on it is **On-Stamp** (paper). In dark the stamp becomes the gold (#d9b45e) with near-black text, so the primary still reads as the one filled thing in view.

### Neutral
- **Paper** (paper): page background, hero wash, name-cell fill, figure backgrounds, nav background.
- **Quiet Strip** (paper-2): the contact band and button hover fill.
- **Sand Ruling** (rule): hairlines between sections, rows and nav.
- **Strong Ruling** (rule-strong): heading cell-rows, hero name cells, the double rules, quiet-control borders, the planned-mark dashes' neighbours.
- **Sumi Ink** (ink): primary text, outline-button borders, figure curves and axes.
- **Diluted Ink** (ink-2): secondary prose, organisations, captions, footer.
- **Pencil** (pencil): dates, status lines, sub-labels and the dashed planned mark.

The `-dark` tokens map one to one onto the same roles under `prefers-color-scheme: dark` (unless `data-theme="light"`) and under `data-theme="dark"`. Print collapses to white paper and black ink, with the marks forced fully drawn.

### Named Rules
**The One Pen Rule.** Gold marks the record and interaction state. It never fills a surface, colours a heading or decorates.

**The One Stamp Rule.** One filled stamp per view: Email on the home page, the first action on each inner page. Every other action is an ink outline.

**The Pencil Means Planned Rule.** Anything not yet done is pencil grey and dashed, never gold.

## Typography

**Display Font:** Shippori Mincho 700, self-hosted latin and latin-ext (with Noto Serif TC, PMingLiU).
**Name Font:** Shippori Kanji, a 700-weight subset of Shippori Mincho cut to 郭紹安勝進和備; `font-display: block` so the name never flashes in a fallback.
**Body Font:** Source Sans 3, variable 200–900 (with Noto Sans TC, PingFang TC, Microsoft JhengHei, system-ui).
**Chinese Running Text:** Noto Sans TC first wherever `lang="zh-Hant"` or `data-l="zh"` applies.
**Plain version only:** Source Serif 4 600 for headings.

**Character:** a printed mincho for the voice of the page over a clear humanist sans for reading. The pairing reads as a formal manuscript with modern body text.

### Hierarchy
- **Display** (700, clamp(3rem → 5.75rem), 1.02): the hero name only.
- **Name cell** (700, 0.7 of a cell): 郭紹安 in the hero cells, and at 1rem beside the nav brand.
- **Headline** (clamp(1.9rem → 2.5rem), 1.2): section headings and page titles.
- **Title** (1.6rem, 1.25): feature heads, column heads, research projects, CV section heads.
- **Subtitle** (Source Sans 3 700, 1.25rem): item headings (h3).
- **Lede** (1.25rem, 1.6, max 34ch): the hero sentence and page intros.
- **Body** (1.0625rem, 1.75): running text at 52–66ch.
- **Label** (0.875rem): dates, status lines, captions, the marks key, footer.

### Named Rules
**The Equal Names Rule.** 郭紹安 and Cheyne Kueh carry equal weight wherever both appear large.

**The Mincho For Headings Rule.** Shippori Mincho sets display and headings only; running text, buttons and labels stay in Source Sans 3.

## Layout

A single centred column, `min(100% - 2 × gutter, 70rem)`, fluid gutter (1rem → 2.5rem) and fluid section padding (4rem → 6.5rem). Sections are separated by hairlines; the hero and footer close with a 3px double rule.

**Hero:** `min(88vh, 52rem)` tall. The photograph fills it (`object-position: 72% 45%`, srcset 800/1200/2000w WebP, `fetchpriority="high"`); a left-to-right paper gradient (solid to 30%, gone by 72%) carries the copy. The inner grid is the vertical name cells beside the copy (max 34rem). Under 760px the photograph becomes a 44vh band at the top with the text below it on paper, and the name cells turn horizontal.

**Navigation:** sticky, 4rem. At 1100px and below the six links fold behind a Menu button; language and theme tools stay visible. The menu closes on a link, on Escape, and on a second press.

**CV:** nine sections in fixed order (Education, Research, Presentations, Skills, Leadership, Teaching, Awards, Languages & certificates, Interests). Each row is a two-column grid: main text, then the date right-aligned. Skills are a definition list with a 13rem label column. Print: A4, 11mm × 14mm margins, 9.5pt body, sections allowed to break, headings kept with their first row.

Two-column splits collapse at 760px; marks stack above their text at 520px.

## Elevation & Depth

Flat. No shadows. Depth comes from the photograph meeting paper, the heading cell-rows, hairlines, the quiet strip and the double rules.

### Named Rules
**The Flat Sheet Rule.** Nothing lifts off the paper. A stamp presses into it: on active, 1px down at 98% scale.

## Shapes

Square. Controls, badges and panels use a 2px corner. Borders are 1.5px on buttons and quiet controls, 2px on the name cells, 1px hairlines elsewhere. The manuscript cell is the recurring geometry: large in the hero, 14px under each heading. The only curves are the hand-drawn pen marks.

## Components

### Buttons
- **Shape:** 2px corner, min height 3rem, padding 0.7rem 1.25rem, Source Sans 3 700 at 1rem.
- **Primary stamp:** filled indigo (gold in dark) with on-stamp text. One per view.
- **Outline:** transparent, 1.5px ink border; CV, GitHub, LinkedIn, Email on the CV.
- **Hover / Active:** outline fills with the quiet strip; the stamp mixes 14% ink. Active presses 1px down at 98% scale. Transitions 0.2s on `cubic-bezier(.2, .7, .2, 1)`.
- **Focus:** 2px gold outline at 3px offset, on every focusable element.

### Pen marks
Hand-drawn strokes in one SVG sprite (`assets/marks.svg`), 48×48 viewBox, `pathLength="1"`, round caps, 2.6 stroke (3.2 small), at 3.25rem (1.6rem small, 1.35rem in CV rows).
- **花丸 `m-hana`:** a finished result.
- **○ `m-maru`:** done (in the sprite; not yet placed).
- **Open circle `m-arc`:** in progress; also marks current CV entries.
- **△ `m-tri`:** partly or inconclusive.
- **Dashed pencil circle `m-plan`:** planned; pencil grey, dashed, never animated.
- **Behaviour:** with motion allowed, IntersectionObserver present and not an automated browser, each gold mark draws once over 1.1s as it enters view. Otherwise, and in print, marks render fully drawn. Research marks carry an `aria-label`; the home page prints a key below the list.

### CV rows
Title in body bold, organisation in diluted ink, one result line beneath, dates right-aligned in pencil with a small open-circle mark on current entries. Hairlines between rows. No line numbers. A print-only contact line (email, GitHub, LinkedIn, site) appears under the CV title in the PDF.

### Heading cell-row
Section headings, page titles, CV section heads and column heads carry one row of 14px manuscript cells beneath, up to 15rem wide, in strong ruling.

### Hero name cells
郭紹安 stacked in three square cells (4rem → 7rem), 2px strong-ruling borders, paper fill. Horizontal on phones.

### Navigation
Brand: Cheyne Kueh in Shippori Mincho beside 郭紹安 in diluted ink (hidden under 760px). Links in body bold with a 2px bottom border: strong ruling on hover, gold on the current page. Tools: the language button (2.75rem outline square) and the style switch, three joined segments (sun, moon, Plain) with the active one filled in ink. Footer: copyright only.

### Plain style
The third position of the style switch (`data-theme="plain"`, stored in localStorage `theme`). Every page keeps its content and structure; the tokens become white paper, slate ink and a blue accent, headings switch to Source Serif 4 600, and the hero photograph, name cells and heading cell-rows are hidden. Marks stay (they carry status), drawn small in blue. `plain.html` only redirects into this style.

## Do's and Don'ts

### Do:
- **Do** keep the photograph to the home hero, washed to paper behind the copy.
- **Do** use the pen marks with their fixed meanings, and pencil for anything planned.
- **Do** keep exactly one filled stamp per view.
- **Do** give every CV entry a title, organisation, dates and one result line; cut entries that add none.
- **Do** regenerate the CV PDF (`python tools/build_cv_pdf.py`, site served on port 8765) after CV edits.
- **Do** keep corners at 2px, borders at 1–2px, and no shadows.

### Don't:
- **Don't** fill surfaces or colour headings with gold; it is the pen.
- **Don't** number CV rows or list everything; the CV is curated.
- **Don't** set running text or buttons in Shippori Mincho.
- **Don't** add shadows, glows, pills, or gradients other than the hero wash.
- **Don't** bring back the red pen, green ruling, Klee One, or anything from the campaign-map world.
- **Don't** publish a phone number, more than one lab device, or anything planned as if done.

## Motion

All motion lives in `initMotion()` in `partials.js` and is skipped under reduced motion and in automated browsers; every page is complete without it.
- **First visit in a session:** a paper veil with 郭紹安 spacing into place, lifting after 1.5s (pure CSS on `html.intro`, set by the head boot script, so it cannot get stuck).
- **Page switches:** cross-document View Transitions; the sheet fades and rises 12px, the nav holds still. Browsers without support switch instantly.
- **Scrolling:** one reveal (fade and 18px rise, staggered 70ms within a group); a 2px gold reading-progress line; the nav tucks away while reading down and returns on the way up; the hero photo drifts at 0.18× scroll; Highlights count up once.

## Local-only tools

On localhost, elements with `data-todo` get an orange dashed outline and a "TO DO" note; the live site never shows them. `local-plans.html` (gitignored) collects every flag and lists content to add later. `admin.html` (gitignored) now edits course reviews only.
