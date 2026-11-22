---
name: Cheyne Kueh 郭紹安
description: A commander's campaign map of Te Atatū Peninsula, drawn as an Edo ezu in matte gouache and sumi ink.
colors:
  sea: "#2e4d6e"
  sea-wave: "#4a6d92"
  land: "#b8b07a"
  land-hatch: "#8f874f"
  shore: "#d8c99a"
  shu: "#c2462c"
  shu-deep: "#9c3420"
  gold: "#c99b3f"
  stone: "#9a9a8c"
  plaster: "#f1efe6"
  roof: "#2f3a3c"
  ink: "#1f1c19"
  wood: "#6b4b32"
  rice-white: "#fbf7ef"
  ground: "#e6ebe3"
  ground-alt: "#dbe2d7"
  panel: "#f1f3ec"
  text: "#1f1c19"
  muted: "#4b5249"
  rule: "#1f1c19"
  accent: "#9a321e"
  focus: "#9a321e"
  ground-dark: "#14202c"
  ground-alt-dark: "#192837"
  panel-dark: "#1e2f40"
  text-dark: "#ebeee6"
  muted-dark: "#b3bdb5"
  rule-dark: "#d9ddd3"
  accent-dark: "#e0745a"
  focus-dark: "#f0a08a"
typography:
  display:
    fontFamily: "Dela Gothic One, Zen Kaku Gothic New, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(2.3rem, 4.6vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Dela Gothic One, Zen Kaku Gothic New, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Dela Gothic One, Zen Kaku Gothic New, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.2
  kanji:
    fontFamily: "Dela CJK, Dela Gothic One, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Zen Kaku Gothic New, PingFang TC, Noto Sans TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Zen Kaku Gothic New, PingFang TC, Noto Sans TC, Microsoft JhengHei, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  hairline: "2px"
  plaque: "3px"
  seal: "6px"
  rod: "7px"
  round: "50%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "18px"
  xl: "24px"
  2xl: "48px"
  section: "88px"
  section-short: "64px"
components:
  button:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.plaque}"
    padding: "0 18px"
    height: "44px"
  button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.plaster}"
  button-primary:
    backgroundColor: "{colors.shu}"
    textColor: "{colors.rice-white}"
    typography: "{typography.label}"
    rounded: "{rounded.plaque}"
    padding: "0 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.shu-deep}"
    textColor: "{colors.rice-white}"
  nav-tool:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.plaque}"
    padding: "0 10px"
    height: "40px"
  nav-link-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.plaque}"
    padding: "6px 10px"
  filter-chip:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.plaque}"
    padding: "6px 14px"
    height: "40px"
  filter-chip-selected:
    backgroundColor: "{colors.shu}"
    textColor: "{colors.rice-white}"
  card-plaque:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.plaque}"
    padding: "16px 18px"
  frame-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    padding: "24px 28px"
  cartouche:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    padding: "30px 30px 26px"
    width: "min(440px, calc(100vw - 48px))"
  section-seal:
    textColor: "{colors.shu}"
    typography: "{typography.kanji}"
    rounded: "{rounded.seal}"
    size: "52px"
  log-seal-won:
    backgroundColor: "{colors.shu}"
    textColor: "{colors.rice-white}"
    rounded: "{rounded.round}"
    size: "58px"
  log-seal-ongoing:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.round}"
    size: "58px"
  map-label:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plaque}"
    padding: "3px 10px"
  map-label-hover:
    backgroundColor: "{colors.shu}"
    textColor: "{colors.rice-white}"
---

# Design System: Cheyne Kueh 郭紹安

## Overview

**Creative North Star: "The Commander's Ezu"**

The site is a campaign map. A real coastline (Te Atatū Peninsula, Auckland) is redrawn as an Edo-period 絵図 crossed with a cartoony RPG world map: matte aizome sea with seigaiha waves, moss-and-ochre land, a castle keep, gold kasumi cloud bands, pines, ships, a torii, and six named banners that mark the campaigns. Everything is outlined in warm sumi ink and laid on a cool celadon washi ground with a fixed paper-grain overlay. Nothing is glossy; there are no gradients on chrome and only one shadow in the whole system.

Content pages read as the map's margins. Sections are framed by double-rule borders (枠), each headed by a rotated vermilion seal carrying one kanji. The research record is a march route of round status seals (勝 won, 進 ongoing, 和 stalemate, 備 planned) joined by a dotted line. Controls are small wooden plaques: square-ish 3px corners, 2px ink borders, bold sans labels. The density is calm and editorial; the world frames the reading and never replaces it.

On capable desktops (min-width 761px, fine pointer, 4+ cores, no reduced motion) the hero upgrades to a three.js low-poly village diorama with the same pigments in fully matte, flat-shaded materials (roughness 1, metalness 0), fog `#d6e4e6`, a hemisphere light and one warm sun. The SVG map is always the fallback and the no-JS state.

**Key Characteristics:**
- Map pigments are fixed in both themes: the map is an object, not chrome.
- Sumi-ink outlines (2-3px, round joins) on every drawn map element.
- Double-rule (3px double) borders as the structural frame line.
- Kanji seals as section markers and status markers.
- Matte everywhere: washi grain overlay at 16% multiply, no gloss, one shadow.
- Bilingual EN / 中文 via a toggle; English is the no-JS default.

## Colors

Muted mineral pigments (indigo, moss, ochre, plaster, sumi) with a single vermilion voice and a supporting gold.

### Primary
- **Shu Vermilion** (shu): the world's one loud colour. Banners, torii, the castle's accents, the crest, section seals, primary buttons, the won seal, the active filter, the march route, selection highlight.
- **Deep Shu** (shu-deep): hover for vermilion fills, the Chinese name in the cartouche, and link colour inside the cartouche.
- **Text Vermilion** (accent / accent-dark): the page-chrome accent for links, hover text, values and org names. It is darker than shu in light mode for AA text contrast and becomes a salmon (accent-dark) on the indigo night ground.

### Secondary
- **Kasumi Gold** (gold): cloud bands, banner finials, the ongoing seal, filled rating stars, the behind-target quest fill, fusuma door stripes.

### Neutral
- **Aizome Sea** (sea), **Wave Indigo** (sea-wave): the map sea and the closing contact band.
- **Moss Ochre** (land), **Hatch Olive** (land-hatch), **Tidal Sand** (shore): map land, hatching and shoreline.
- **Castle Stone** (stone), **Plaster** (plaster), **Slate Roof** (roof), **Wood** (wood): castle, cartouche paper, roofs, scroll rods, ship hulls, door frames.
- **Sumi Ink** (ink): every outline, the default button border, the current nav link fill.
- **Rice White** (rice-white): text on vermilion and on the seals.
- **Celadon Washi** (ground), **Washi Shade** (ground-alt), **Washi Panel** (panel): page ground, alternating section band, framed panels and cards.
- **Muted Moss Grey** (muted), **Rule** (rule): secondary text, frame lines.
- Dark theme swaps only the page roles to a night-indigo set (ground-dark, ground-alt-dark, panel-dark, text-dark, muted-dark, rule-dark, accent-dark, focus-dark); map pigments do not change.

### Named Rules
**The Fixed Pigment Rule.** Map pigments (sea through wood) never change with theme. Only page roles (ground, panel, text, muted, rule, accent, focus) are themed.

**The One Vermilion Rule.** Shu is the only saturated hue on a screen. Use it for markers, seals, the primary action and state; body text links use the accent role, not raw shu.

## Typography

**Display Font:** Dela Gothic One (self-hosted latin + latin-ext), falling back to Zen Kaku Gothic New, PingFang TC, Microsoft JhengHei.
**Kanji Font:** "Dela CJK", a self-hosted Dela Gothic One subset containing only the name, seal, banner and language-name glyphs.
**Body Font:** Zen Kaku Gothic New 400/700 (self-hosted latin + latin-ext), then PingFang TC, Noto Sans TC, Microsoft JhengHei, system-ui.

**Character:** A heavy, rounded, slightly comic poster gothic for names, headings and map labels, against a clean humanist Japanese gothic for reading. The pairing gives the RPG-map voice without hurting legibility.

### Hierarchy
- **Display** (400, clamp(2.3rem, 4.6vw, 3.4rem), lh 1, -0.01em): the English name in the cartouche only.
- **Headline** (400, clamp(1.8rem, 3.4vw, 2.6rem), lh 1.1): section h2s. Inner page h1s use clamp(2rem, 4vw, 3rem).
- **Title** (400 display, 1.3-1.4rem): framed-panel h3s, quest and group headings. Log entry h3s use the body face at 1.3rem.
- **Kanji** (400, 1.5-1.7rem): seals, the Chinese name (letter-spacing .3em), language names, the compass.
- **Body** (400, 1.0625rem, lh 1.7): all reading text, max 68ch (--measure). Leads are 1.06-1.08rem in muted.
- **Label** (700, .85-.95rem): nav links, buttons, filters, table heads, dates (tabular-nums).

### Named Rules
**The Subset Rule.** "Dela CJK" carries only the glyphs it was cut for. Never set running Chinese text in it; Chinese body copy uses the body stack.

**The Display-Is-400 Rule.** Dela Gothic One is only ever weight 400. Never fake-bold it.

## Layout

A single centred column, max 1080px (--max), with 24px side gutters (16px under 760px). Campaign sections pad 88px vertically (64px for the short students band); inner pages pad 64px top and 88px bottom. Alternate sections sit on ground-alt with hairline top and bottom rules. Two-column "split" sections use `minmax(220px, 1fr) 2fr` with 24px/48px gaps, collapsing to one column at 760px. Card grids auto-fill at min 320px (courses) or 240px (UoA). The language row is a 3-column definition grid under a double rule, stacking at 760px; the roster table reflows to a two-column grid at 600px.

The hero is full-bleed, `min(100svh - 64px, 900px)` tall, with the cartouche over open water: right side on the SVG map, left side on the 3D diorama. Under 760px the map becomes a 75vw-tall band (280-460px) and the cartouche stacks below it with in-flow campaign links. Breakpoints: 760px (main), 640px (quest grid), 600px (roster).

## Elevation & Depth

Flat. Depth on the page comes from frame lines, tonal bands (ground vs ground-alt vs panel) and the paper grain, not shadows. On the map, depth is painted: ink outlines, a translucent banner foot shadow (`rgba(31,28,25,.28)`) and paint-order stroked labels. The single real shadow lifts the cartouche scroll off the map.

### Shadow Vocabulary
- **Scroll lift** (`box-shadow: 0 18px 40px -18px rgba(12, 20, 30, .55)`): the hero cartouche only.

### Named Rules
**The One Shadow Rule.** Only the cartouche casts a shadow. Panels, cards and buttons stay flat and are separated by rules.

## Shapes

Nearly square plaques. Interactive controls and cards use a 3px corner; section seals 6px and rotated -4deg like a hand-pressed stamp; status seals and the experience status dot are circles; scroll rods are 7px-rounded wooden bars overhanging the cartouche by 14px each side. Borders follow a strict vocabulary: 3px double for frames (nav bottom, hero bottom, section panels, footer, year rows), 2px solid for controls and cards, 1px rule at 22-25% mix for dividers, 4px dotted for the research route, dashed for planned and self-study items. Focus is a 3px solid ring offset 3px with a 2px radius.

## Components

### Buttons
Wooden plaques, tactile and plain.
- **Shape:** 3px corners, 2px ink border, min-height 44px, 0 18px padding, bold label.
- **Default:** plaster fill, ink text. Hover inverts to ink fill, plaster text (.2s ease).
- **Primary:** shu fill, rice-white text; hover deepens to shu-deep. One primary per action group (Email).
- **On the sea band:** default buttons keep plaster; hover border turns plaster; focus ring turns gold-light `#f0c070`.

### Chips (filters and term tabs)
- **Style:** panel fill, 2px rule border, 3px corners, 700 .92rem, min-height 40px. Sub-row chips shrink to .85rem, 36px, 1.5px border.
- **State:** hover shifts border and text to accent; pressed/selected is shu fill, ink border, rice-white text.

### Cards / Containers
- **Plaque card** (courses, UoA): panel fill, 2px rule border, 3px corners, 16px 18px padding. Course cards are `<details>`; the open summary gets a hairline divider.
- **Framed panel** (SPIE, quest log): panel fill, 3px double rule, square corners, 24-28px padding.
- **Shadow Strategy:** none (see One Shadow Rule).

### Navigation
Sticky, ground-coloured, 3px double bottom rule. Brand is the koru crest (32px, shu) plus the name in display with the kanji name beneath in small muted sans. Links are 700 .95rem plaques; the current page is an ink-filled plaque (text colour in dark mode). Tools (language, theme, menu) are 40px square bordered plaques with SVG sun/moon icons. Under 760px links collapse behind a Menu plaque into a full-width column.

### Section Seal
A 52px square stamp, 3px shu border, 6px corners, rotated -4deg, one kanji in Dela CJK at 1.7rem, placed left of each section h2. The quiet variant (students) uses muted.

### Campaign Log
A vertical march: 58px round seals on a 4px dotted connector. Won is shu with rice-white kanji, ongoing is gold with ink, stalemate is panel, planned is transparent with a dashed muted border. Dates are bold muted tabular numerals.

### Cartouche and Map
The hero scroll: plaster paper, 3px double ink border, wooden rods top and bottom, koru crest (54px, shu), display name, kanji name, role lines and the action row. Map banners are shu flags on ink poles with gold finials and paint-order plaques; hover or focus skews the flag (.35s) and marches a dotted shu route (dasharray 2 14, 1.2s linear) from the castle. In 3D mode, banners become plaster label plaques that turn shu on hover.

### Koru Crest
The personal mon: a koru spiral inside a double ring (3.2px and 1.4px strokes), drawn in currentColor as an inline SVG symbol. Used in the nav, the cartouche and the loader.

### Loader
First visit per session only: the crest stamps in (.55s, scale 1.6 and -14deg to rest), then two fusuma doors (washi `#ece6d6`, gold stripes, 6px wood frame, round hikite pulls) slide apart over .9s. Click skips it; reduced motion and webdriver never show it.

## Do's and Don'ts

### Do:
- **Do** outline every drawn map element in ink (2-3px, round line joins).
- **Do** frame sections and panels with the 3px double rule and head each campaign with a rotated kanji seal.
- **Do** keep map pigments identical in light and dark themes; theme only the page roles.
- **Do** use the four honest status seals (勝 進 和 備) for any record of outcomes, and never mark planned work as won.
- **Do** keep reading text in Zen Kaku Gothic New at 1.0625rem/1.7 within 68ch.
- **Do** keep the SVG map as the no-JS and reduced-capability hero; the 3D scene is an upgrade only.
- **Do** keep all motion skippable and off under prefers-reduced-motion.

### Don't:
- **Don't** add shadows, gloss, specular highlights or gradients to chrome; the one shadow belongs to the cartouche and 3D materials stay roughness 1, metalness 0.
- **Don't** introduce a second saturated hue alongside shu.
- **Don't** set running Chinese text in Dela CJK or bold Dela Gothic One.
- **Don't** round controls beyond 3px or use pill buttons.
