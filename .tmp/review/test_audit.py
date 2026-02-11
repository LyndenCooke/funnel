"""
Playwright test script for Run AI landing page and AI Readiness Audit.
Run AFTER Sessions 1 and 2 are complete.
Usage: python .tmp/review/test_audit.py
"""
from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = ".tmp/review/screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def find_html_file():
    """Find the landing page HTML file."""
    candidates = ["index.html", "landing.html", "site/index.html"]
    for c in candidates:
        if os.path.exists(c):
            return os.path.abspath(c)
    # If none found, look for any .html file in root
    for f in os.listdir("."):
        if f.endswith(".html"):
            return os.path.abspath(f)
    raise FileNotFoundError("No HTML file found in project root.")

def run_tests():
    html_path = find_html_file()
    file_url = f"file://{html_path}"
    print(f"Testing: {file_url}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Screenshot at three breakpoints
        for width, label in [(375, "mobile"), (768, "tablet"), (1440, "desktop")]:
            page = browser.new_page(viewport={"width": width, "height": 900})
            page.goto(file_url)
            page.wait_for_load_state("networkidle")
            page.screenshot(path=f"{OUTPUT_DIR}/{label}.png", full_page=True)
            print(f"  Captured {label} ({width}px)")
            page.close()

        # Check for console errors
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        page.goto(file_url)
        page.wait_for_load_state("networkidle")

        if errors:
            print(f"\n  CONSOLE ERRORS FOUND:")
            for e in errors:
                print(f"    - {e}")
        else:
            print(f"\n  No console errors.")

        browser.close()

    print(f"\nScreenshots saved to {OUTPUT_DIR}/")

if __name__ == "__main__":
    run_tests()
