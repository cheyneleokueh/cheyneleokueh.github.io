---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: home (index.html) + loading screen

Scope: the home page and its first-visit loading screen. Visitor mode: Experience (portfolio; the world leads, facts stay fast to scan). Other pages (Experience, Courses, NZ, Other) inherit the world as Read surfaces.

Audience: professors, PhD admissions, internship recruiters, SPIE contacts. Job: decide in a minute whether to talk to him. Actions: email, LinkedIn/GitHub, follow the research road. Constraints: EN / 中文 toggle; only R08 lab data may appear; nothing planned shown as done; content must render without JS.

## Direction contract

THESIS: The home page is a commander's campaign map of Te Atatū Peninsula, drawn as an Edo-period ezu (絵図) with cartoony RPG ink and matte gouache. Every section is a campaign marked on the map. It refuses the category default: a portrait hero over stacked résumé cards.

OWN-WORLD: The sea is matte aizome indigo with seigaiha waves, the land moss and ochre, the tidal flats a sand colour. Shu-red is the one strong colour: castle, banners, torii and bridge on the map, and on the page only the primary action, the section seals and selected filters. Gold supports it (kasumi clouds, finials, the ongoing seal). Everything is drawn in sumi-ink outlines on a cool celadon washi ground with paper grain and no gloss. Sections are framed by double-rule map borders (枠), each with a vermilion seal. The status seals are 勝 (won), 進 (ongoing), 和 (stalemate) and 備 (planned). The personal crest is a koru inside a mon ring. Type: Dela Gothic One for display, Zen Kaku Gothic New with Noto Sans TC for text.

STORY: The visitor sees who and where at once: a photonics student at NYCU, raised in Auckland. They follow the banners to research, leadership, languages and tutoring, read an honest campaign log (won, ongoing, stalemate, planned), then email him or open LinkedIn or GitHub.

FIRST VIEWPORT: On capable desktops (fine pointer, 4+ cores, WebGL2, no data saver), a three.js matte low-poly diorama fills the hero. The camera sits low over the Waitematā, looking west across the real Te Atatū coastline to the Waitākere Ranges. The castle keep stands on its stone base, with a red arched bridge, torii, terraced paddies, river stones, sakura, pines and thatched houses, and six nobori banners carry linked plaques (Research, SPIE, Command, Languages, Tutoring, Home), all in frame to the right of the scroll. The scroll cartouche sits on the left with 郭紹安 / Cheyne Kueh, the line "Photonics Engineering, NYCU · Prof. 陳方中 lab", and Email (primary), LinkedIn and GitHub. Everywhere else (phones, no WebGL, reduced motion with no capable GPU) the inline SVG ezu campaign map is the hero: the cartouche sits over the harbour on desktop, and on mobile the map crops to the peninsula with the cartouche and a row of campaign links below it.

FORM: Edo ezu campaign map crossed with an RPG world map; desktop hero rendered as a three.js village; seed: none (pinned) — "medieval cartoony rpg, and japanese history, structures", "matt finish", "te atatu peninsula ... finding a real location as the background and giving it a japanese twist", "a commander on the battle field looking over many battles, some win some lose", and for the hero "This style as the background, with three.js" (reference: a 3D Japanese village with mountain, castle keep, red bridge, paddies, sakura). Signature interaction: on the SVG map, hovering or focusing a banner marches a dotted route from the castle; in 3D, the camera drifts slowly with a pointer parallax and the banners sway. Loading screen: the crest is stamped, then two fusuma panels slide apart. It shows once per session, can be skipped, and is skipped under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
