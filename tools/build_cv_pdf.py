"""Print cv-print.html (the CV's print source, not linked from the nav) to assets/cv-cheyne-kueh.pdf (English, light theme), so the PDF always matches the page.

Serve the site first (python -m http.server 8765), then:  python tools/build_cv_pdf.py
Uses Playwright with the installed Microsoft Edge.
"""
import pathlib
import re
import sys

from playwright.sync_api import sync_playwright

root = pathlib.Path(__file__).resolve().parent.parent
out = root / "assets" / "cv-cheyne-kueh.pdf"
url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8765/cv-print.html"

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge", headless=True)
    page = browser.new_page(color_scheme="light")
    page.add_init_script("try{localStorage.setItem('lang','en');localStorage.setItem('theme','light')}catch(e){}")
    page.goto(url)
    page.wait_for_load_state("networkidle")
    page.pdf(path=str(out), format="A4", print_background=False, prefer_css_page_size=True)
    browser.close()

data = out.read_bytes()
pages = len(re.findall(rb"/Type\s*/Page[^s]", data))
print(f"wrote {out.name}: {pages} page(s), {len(data) // 1024} KB")
