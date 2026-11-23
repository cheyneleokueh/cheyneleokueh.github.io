"""Rebuild plain.html, the plain academic backup of the home page, from index.html.

Run after editing index.html:  python tools/build_plain.py
Everything below the hero is copied from index.html, so the two pages never drift apart.
"""
import pathlib
import re

root = pathlib.Path(__file__).resolve().parent.parent
src = (root / "index.html").read_text(encoding="utf-8")
body = src[src.index('  <section class="section" id="research"'):src.index("</main>")]
body = (body
        .replace("Marked honestly, the way a Japanese teacher marks returned work.", "Each project is logged as it stands.")
        .replace("照實批改，像日本老師改作業那樣。", "照實記錄每個專題目前的狀態。"))
# the red-pen marks belong to the main design; the plain page states status in words
body = re.sub(r'\s*<svg class="mark[^"]*"[^>]*>.*?</svg>', "", body, flags=re.S)
body = re.sub(r'\s*<p class="key".*?</p>', "", body, flags=re.S)
lede = re.search(r'<p class="lede">.*?</p>', src, re.S).group(0)
note = re.search(r'<p class="hero-note">.*?</p>', src, re.S).group(0)

CSS = """
@font-face{font-family:"Source Serif 4";font-weight:600;font-display:swap;src:url("assets/fonts/source-serif-4-600-latin.woff2") format("woff2")}
@font-face{font-family:"Source Sans 3";font-weight:200 900;font-display:swap;src:url("assets/fonts/source-sans-3-latin.woff2") format("woff2")}
:root{--bg:#fff;--bg-2:#f3f5f9;--ink:#1f2937;--ink-2:#4b5563;--line:#e5e7eb;--accent:#1d4ed8;--serif:"Source Serif 4",Georgia,serif;--sans:"Source Sans 3","Noto Sans TC","Microsoft JhengHei",sans-serif}
*,*::before,*::after{box-sizing:border-box}
html,body{overflow-x:clip}
body{margin:0;background:var(--bg);color:var(--ink);font:400 1.0625rem/1.7 var(--sans)}
h1,h2,h3{margin:0;line-height:1.2;text-wrap:balance;overflow-wrap:break-word}
h1,h2{font-family:var(--serif);font-weight:600} h3{font-size:1.15rem}
p,ul,ol,dl{margin:0} a{color:inherit;text-underline-offset:.2em} a:hover{color:var(--accent)}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
html:not([data-lang="zh"]) [data-l="zh"]{display:none} html[data-lang="zh"] [data-l="en"]{display:none}
.visually-hidden{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.wrap{width:min(100% - 2.5rem,62rem);margin-inline:auto}
.top{border-bottom:1px solid var(--line);font-size:.9rem} .top .wrap{display:flex;gap:1rem;align-items:center;min-height:3rem}
.top button{margin-left:auto;font:600 .85rem/1 var(--sans);background:none;border:1px solid var(--line);border-radius:4px;padding:.45rem .7rem;cursor:pointer;color:var(--ink)}
.hero{padding-block:3.5rem;border-bottom:1px solid var(--line)} .hero .wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:3rem}
.hero h1{font-size:clamp(2.2rem,1.6rem + 2.6vw,3.2rem)} .hero .zh{display:block;font-size:1.3rem;color:var(--ink-2);margin-top:.3rem}
.id ul{list-style:none;padding:0;margin-top:1rem;color:var(--ink-2)} .bio{display:grid;gap:1.1rem} .lede{font-size:1.15rem} .hero-note{color:var(--ink-2)}
.actions{display:flex;flex-wrap:wrap;gap:.6rem}
.btn{display:inline-flex;align-items:center;min-height:2.75rem;padding:.6rem 1.1rem;font-weight:600;color:var(--ink);text-decoration:none;border:1px solid var(--line);border-radius:4px}
.btn:hover{border-color:var(--ink);color:var(--ink)} .btn-stamp{background:var(--accent);border-color:var(--accent);color:#fff} .btn-stamp:hover{color:#fff;filter:brightness(.92)}
.section{padding-block:3rem;border-bottom:1px solid var(--line)} .section-head{display:grid;gap:.6rem;margin-bottom:1.75rem}
.section-head h2,.close h2{font-size:1.9rem} .section-head p{color:var(--ink-2);max-width:62ch}
.record{list-style:none;padding:0;display:grid;gap:1.6rem} .record-when{color:var(--accent);font-weight:600;font-size:.9rem}
.record-body>p:not(.record-when){max-width:66ch;margin-top:.35rem}
.lead-grid,.two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2.5rem;align-items:start}
.feature{display:grid;gap:.6rem} .feature h3,.two-col h3{font:600 1.35rem/1.25 var(--serif);margin-bottom:.6rem}
.roles{list-style:none;padding:0;border-top:1px solid var(--line)} .roles li{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:1rem;padding-block:.7rem;border-bottom:1px solid var(--line)}
.roles small{display:block;color:var(--ink-2);font-size:.875rem} .roles span:last-child{color:var(--ink-2)}
.facts{display:grid;gap:.9rem} .facts dt{font-weight:700} .facts dd{margin:0;color:var(--ink-2)}
.level{font-weight:700;margin-right:.4rem;color:var(--accent)} .prose{max-width:62ch} .more{margin-top:1.5rem;font-weight:600}
.close .wrap{display:grid;gap:1rem;justify-items:start} .close p{color:var(--ink-2)}
.footer{padding-block:2rem;color:var(--ink-2);font-size:.875rem}
@media (max-width:760px){.hero .wrap,.lead-grid,.two-col{grid-template-columns:minmax(0,1fr)}}
@media print{.top,.actions,.more{display:none}}
"""

page = f"""<!DOCTYPE html>
<html lang="en" data-lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cheyne Kueh 郭紹安 · Photonics, NYCU (plain version)</title>
<meta name="description" content="Plain version of Cheyne Kueh's site: Photonics Engineering at NYCU, research in Prof. Fang-Chung Chen's lab, SPIE NYCU Student Chapter President.">
<link rel="canonical" href="https://cheyneleokueh.github.io/">
<link rel="icon" type="image/png" href="favicon.png">
<style>{CSS}</style>
</head>
<body>
<!-- generated by tools/build_plain.py from index.html; edit index.html, then rerun the script -->
<nav class="top" aria-label="Site"><div class="wrap"><span><span data-l="en">Plain version.</span><span data-l="zh">簡易版。</span></span> <a href="index.html"><span data-l="en">Main site</span><span data-l="zh">主網站</span></a> <a href="research.html"><span data-l="en">Research</span><span data-l="zh">研究</span></a> <a href="cv.html">CV</a><button id="lang" type="button">中文 / EN</button></div></nav>
<main id="main">
  <section class="hero" aria-labelledby="heroName">
    <div class="wrap">
      <div class="id">
        <h1 id="heroName">Cheyne Kueh <span class="zh" lang="zh-Hant">郭紹安</span></h1>
        <ul><li><span data-l="en">Undergraduate, Photonics Engineering</span><span data-l="zh">光電工程學系 大學部</span></li><li>National Yang Ming Chiao Tung University</li><li><span data-l="en">Prof. Fang-Chung Chen's lab</span><span data-l="zh">陳方中教授實驗室</span></li></ul>
      </div>
      <div class="bio">
        {lede}
        <div class="actions"><a class="btn btn-stamp" href="mailto:cheyneleokueh@gmail.com"><span data-l="en">Email me</span><span data-l="zh">寄信給我</span></a><a class="btn" href="cv.html">CV</a><a class="btn" href="https://github.com/cheyneleokueh" rel="noopener">GitHub</a><a class="btn" href="https://www.linkedin.com/in/cheyne-kueh-a5b60b255/" rel="noopener">LinkedIn</a></div>
        {note}
      </div>
    </div>
  </section>
{body}</main>
<footer class="footer"><div class="wrap">&copy; 2026 Cheyne Kueh 郭紹安</div></footer>
<script>
try{{if(localStorage.getItem("lang")==="zh"){{document.documentElement.dataset.lang="zh";document.documentElement.lang="zh-Hant"}}}}catch(e){{}}
document.getElementById("lang").addEventListener("click",()=>{{const r=document.documentElement;const z=r.dataset.lang!=="zh";r.dataset.lang=z?"zh":"en";r.lang=z?"zh-Hant":"en";try{{localStorage.setItem("lang",r.dataset.lang)}}catch(e){{}}}});
</script>
</body>
</html>
"""
(root / "plain.html").write_text(page, encoding="utf-8")
print("wrote plain.html")
