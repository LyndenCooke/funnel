# Session 2 Changelog — Run AI Landing Page

**Date:** 11 February 2026
**Scope:** Targeted review, upgrade, and hardening of Session 1's landing page build.

---

## Copy Changes

### Headline (index.html)
- **Before:** "Teaching Is Hard Enough. Let AI Handle the Rest."
- **After:** "You Don't Need Another Course. You Need a Staffroom That Gets AI."
- **Rationale:** Original implied AI replaces work (contradicts positioning). New headline leads with recognition, addresses the real frustration (another course to buy), and introduces the staffroom metaphor that anchors the community positioning.

### Pain Point Cards (index.html, Problem section)
- **Card 1 Before:** "You have spent hours on a lesson plan that AI could draft in minutes."
- **Card 1 After:** "You spent your entire Sunday afternoon on a set of Year 3 maths slides that ChatGPT could have drafted in 4 minutes."
- **Card 2 Before:** "Your school sent you on an AI CPD session that was all theory and no practice."
- **Card 2 After:** "Your school paid for an AI CPD day. A consultant showed 40 slides, name-dropped five tools, and left."
- **Card 3 Before:** "You know AI is changing education. You just do not know where to start."
- **Card 3 After:** "You've opened ChatGPT three times this term. Each time you typed a question, stared at the answer, and thought 'I wouldn't use this with my class.' Then you closed the tab."
- **Rationale:** Original cards were generic. New cards are visceral, specific, and describe moments teachers have actually lived.

### CTA Copy
- **Audit button:** "Take the AI Readiness Audit" changed to "Take the 2-Minute AI Audit" (adds specificity, reduces perceived commitment)
- **Problem section ghost CTA:** "Find out where you stand" changed to "See where you are on the AI journey" (more specific, ties to the journey framework)

### Contractions (across all visible copy)
- Replaced "is not", "do not", "it is", "you are", "he is", "would not", "he has", etc. with natural contractions ("isn't", "don't", "it's", "you're", "he's", "wouldn't", etc.) throughout.
- **Rationale:** Contractions read as warmer and more conversational. The original "do not" style sounded overly formal for a staffroom tone.

### About Section (index.html)
- Added vulnerability: "He still gets things wrong. He still spends half an hour on a prompt that should take five minutes. The difference is he shares all of it, the wins and the dead ends, so you can learn faster than he did."
- **Rationale:** Original was polished and professional but lacked the self-awareness the positioning document calls for.

### Hero Meta Line
- **Before:** "Free to join. No credit card. Cancel anytime."
- **After:** "Completely free. No credit card. No upsell."
- **Rationale:** "Cancel anytime" implies there's something to cancel, which is confusing for a free community.

### Em Dashes Removed
- `<title>` and OG title: "Run AI — AI Training..." changed to "Run AI: AI Training..."
- **Rationale:** Project constraint prohibits dashes in copy.

### Footer Copyright
- Updated from 2025 to 2026.

### Audit Quiz Option Text
- Updated to use contractions throughout (e.g. "I've built my own workflows", "One session but it wasn't useful", etc.) for consistent warm tone.

---

## Design Changes

### Mobile Hero Buttons (styles.css)
- Changed `.hero__actions` alignment from `align-items: flex-start` to `align-items: stretch` on mobile
- Added `width: 100%` to hero buttons on mobile
- **Rationale:** Full-width buttons are easier to tap and look more intentional on mobile.

### Full-Screen Audit Modal on Mobile (styles.css)
- At 767px and below, the audit modal now fills the entire viewport: `height: 100vh`, `border-radius: 0`, `max-width: 100%`
- Modal uses flexbox layout so header/progress stay fixed while body scrolls
- **Rationale:** A floating card with small margins is hard to use on small screens. Full-screen is standard for mobile modals.

### Audit Touch Targets (styles.css)
- Added `min-height: 48px` to `.audit__option` on mobile
- **Rationale:** WCAG recommends minimum 44x44px touch targets.

### Back Button Styling (styles.css)
- Added `.audit__back-btn` styles: subtle ghost button with chevron icon, hover state
- Added `.audit__nav` container with flexbox layout

### Validation Error Styling (styles.css)
- Added `.audit__field-error` styles: red text, shown/hidden via `.visible` class
- Added `.audit__email-input.invalid` border colour change
- Added `.audit__field` wrapper for relative positioning

---

## Functionality Changes

### Back Button in Audit (audit.js)
- Added "Previous question" back button that appears from question 2 onwards
- Uses `handleBack()` function to decrement `currentQuestion` and re-render
- Previous answer selection is preserved when going back
- **Rationale:** Users had no way to change an answer once selected.

### Email Validation (audit.js)
- Replaced simple empty-string check with proper email format validation using regex
- Added `validateEmail()`, `showFieldError()`, `clearFieldError()` helper functions
- Error messages: "Please enter your email address." (empty) and "Please enter a valid email address." (format)
- Errors clear automatically on input
- **Rationale:** Original only checked for empty string, accepting any non-empty input as valid.

### Focus Trapping (audit.js)
- Added `trapFocus()` function that traps Tab/Shift+Tab within the modal when open
- Focus wraps from last focusable element to first and vice versa
- **Rationale:** Without focus trapping, keyboard users could Tab out of the modal to page elements behind the overlay.

### Focus Management (audit.js)
- Added `lastFocusedElement` state to store the element that opened the modal
- On close, focus returns to the trigger element
- On email step, focus moves to the first input field
- **Rationale:** Standard accessibility practice for modal dialogs.

---

## Accessibility Changes

### Semantic Structure (index.html)
- Wrapped `<nav>` in `<header>` element
- Added `<main id="main-content">` wrapping all primary content sections
- **Rationale:** Screen readers use landmark elements to navigate pages.

### Skip-to-Content Link (index.html)
- Added visually hidden skip link as first element in `<body>`, visible on focus
- Links to `#main-content`
- **Rationale:** Required for keyboard navigation accessibility.

### Form Labels (index.html)
- Added `<label>` elements (visually hidden with `.sr-only`) for audit email form inputs
- Added `id` attributes to match labels
- **Rationale:** Placeholder text alone is not accessible. Labels are required for screen readers.

### Validation Announcements (index.html)
- Added `<span role="alert" aria-live="assertive">` for email validation errors
- Added `aria-live="polite"` to the audit results container
- **Rationale:** Screen readers need to announce dynamic content changes.

### Skool Community URLs (index.html)
- Added `https://www.skool.com/run-ai` to: nav CTA, hero primary CTA, footer Community link, and audit results CTA
- Added `<!-- INTEGRATION POINT: Skool Community Link -->` comments above each
- **Rationale:** All community links previously pointed to `#lead-capture` which is an internal form, not the actual community.

---

## Performance Changes

### Google Fonts Optimisation (index.html)
- Removed unused DM Serif Display italic variant (`ital@0;1` to just default)
- Removed unused Source Sans 3 weight 300 (light)
- Added Source Sans 3 italic 400 (actually used by testimonial text)
- **Before:** `DM+Serif+Display:ital@0;1&family=Source+Sans+3:wght@300;400;600;700`
- **After:** `DM+Serif+Display&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400`
- **Rationale:** Fewer font files to download, faster initial load.

---

## Integration Points

### Updated Comments (index.html, audit.js)
- Replaced generic integration comments with the specified format including:
  - ConvertKit API URL
  - Mailchimp endpoint mention
  - Skool API mention
  - Zapier Webhook mention
  - Required data structure
- Added `<!-- INTEGRATION POINT: Skool Community Link -->` comments above all community link hrefs

---

## Skills Installed

| Skill | Source | Purpose |
|-------|--------|---------|
| frontend-design | Anthropic (GitHub) | Anti-AI-slop design guidance |
| webapp-testing | Anthropic (GitHub) | Playwright browser testing |
| skill-creator | Anthropic (GitHub) | Custom skill creation |
| orchestrator | Custom (created) | Multi-phase build coordination |
| direct-response-copy | Custom (created) | British English conversion copy |

---

## Test Tools Prepared

| File | Purpose |
|------|---------|
| `.tmp/review/test_audit.py` | Playwright screenshot tests at 3 breakpoints + console error check |
| `.tmp/review/check_english.py` | American English and forbidden phrase scanner |

Note: Playwright Chromium could not fully install due to DNS resolution issues with `storage.googleapis.com` in this environment. Tests are prepared but require manual execution.

---

## Remaining Items (Require Human Input)

1. **Lynden's actual headshot** — Replace the placeholder `LC` initials block in the About section with a real photo
2. **Real testimonials** — All three testimonial cards are marked `[PLACEHOLDER]`. Replace with genuine testimonials from community members
3. **Final Skool community URL** — Current placeholder is `https://www.skool.com/run-ai`. Confirm this is the correct URL
4. **Email capture integration** — Replace `console.log` calls in both the main form and audit form with actual ConvertKit/Mailchimp/Zapier integration
5. **Final brand sign-off** — Headline, pain points, and About section copy should be reviewed by Lynden for authenticity
6. **Favicon and OG image** — No favicon or social sharing image has been created yet
