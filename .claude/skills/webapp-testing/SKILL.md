# Web App Testing Skill

## Purpose
Browser testing for visual output verification using Playwright. Use to screenshot pages, verify layouts, and check interactive elements.

## When to Use
- After creating HTML pages (ads, SEO pages, landing variants)
- To verify designs render correctly at target dimensions
- To check that modals, forms, and interactive elements work
- To capture screenshots for review

## Playwright Testing Patterns

### Screenshot at Specific Dimensions
For ad creative verification:
```javascript
const { chromium } = require('playwright');

async function screenshotAd(filePath, width, height, outputPath) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width, height });
  await page.goto(`file://${filePath}`);
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: outputPath, fullPage: false });
  await browser.close();
}
```

### Standard Viewport Sizes
- LinkedIn landscape ad: 1200x627
- LinkedIn square ad: 1080x1080
- Desktop: 1440x900
- Tablet: 768x1024
- Mobile: 375x812

### Page Verification Checklist
When testing a page, verify:
1. **Visual:** Screenshots at desktop and mobile widths
2. **Text:** No clipping, no overflow, all text readable
3. **Colours:** Brand palette used correctly
4. **Fonts:** DM Serif Display and Source Sans 3 loading
5. **Interactive:** Modals open/close, forms submit, links work
6. **Responsive:** Layout adapts properly at breakpoints

### Testing Ad Creative
```javascript
// Screenshot all ad HTML files at their target dimensions
const ads = [
  { file: 'ad-01-pain-point-landscape.html', w: 1200, h: 627 },
  { file: 'ad-01-pain-point-square.html', w: 1080, h: 1080 },
  // ... etc
];

for (const ad of ads) {
  await screenshotAd(
    `./ads/linkedin/${ad.file}`,
    ad.w, ad.h,
    `./.tmp/marketing/ad_screenshots/${ad.file.replace('.html', '.png')}`
  );
}
```

### Testing SEO Pages
```javascript
// Test each SEO page at desktop and mobile
const pages = ['ai-tools-for-primary-teachers.html', 'how-to-use-ai-for-lesson-planning.html', 'ai-cpd-for-schools.html'];

for (const pageName of pages) {
  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`file://./pages/${pageName}`);
  await page.screenshot({ path: `./.tmp/marketing/${pageName}-desktop.png` });

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: `./.tmp/marketing/${pageName}-mobile.png` });
}
```

### Testing Interactive Elements
```javascript
// Verify audit modal opens
await page.click('[data-audit-trigger]');
await page.waitForSelector('.audit-overlay.open');

// Verify form submission
await page.fill('input[name="email"]', 'test@example.com');
await page.click('button[type="submit"]');
```

## Fallback (No Playwright Available)
If Playwright is not installed or cannot run:
1. Open HTML files directly in a browser manually
2. Use browser DevTools to resize viewport
3. Take manual screenshots
4. Note in the build summary that automated testing was not available

## Output
Save all screenshots to `.tmp/marketing/` with descriptive filenames:
- `ad_screenshots/ad-01-pain-point-landscape.png`
- `seo-page-desktop-ai-tools.png`
- `variant-primary-mobile.png`
