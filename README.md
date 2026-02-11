# Run AI — Educator Funnel

Marketing funnel for Run AI, an AI education community helping teachers become AI-native.

## Quick Start

No build tools required. Open `index.html` in a browser, or serve locally:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if npx available)
npx serve .
```

Then visit `http://localhost:8000`.

## File Structure

```
/
├── index.html          Landing page (all sections)
├── styles.css          Stylesheet (design tokens, layout, components)
├── audit.js            AI Readiness Audit interactive tool
├── assets/             SVG icons and graphics (if needed)
├── .tmp/research/      Research and positioning documents
│   ├── competitor_analysis.md
│   └── positioning.md
└── README.md           This file
```

## Integration Points

Form submissions currently log to the browser console. To connect to an email provider, search for `Integration point` comments in:

- `index.html` (line ~400) — Main lead capture form
- `audit.js` (line ~312) — Audit email capture

Replace the `console.log` calls with your API integration (ConvertKit, Mailchimp, Skool API, etc.).

## Design Tokens

All colours, fonts, spacing, and radii are defined as CSS custom properties in `styles.css`. Modify the `:root` block to adjust the design system.

## Fonts

- **Display:** DM Serif Display (Google Fonts)
- **Body:** Source Sans 3 (Google Fonts)

Loaded via CDN in the HTML head. No local font files required.

## British English

All visible copy uses British English spelling (specialising, organised, colour, etc.). Maintain this convention when editing copy.
