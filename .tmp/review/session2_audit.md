# Session 2 Audit Report — Run AI Landing Page

**Reviewer:** Session 2 (Review, Upgrade & Harden)
**Date:** 11 February 2026
**Status:** Complete

---

## 1. File Inventory

| File | Lines | Purpose | Status |
|------|-------|---------|--------|
| `index.html` | 432 | Landing page with all sections and audit modal | Present, well-structured |
| `styles.css` | 1,388 | Full stylesheet with design tokens and components | Present, comprehensive |
| `audit.js` | 471 | AI Readiness Audit interactive questionnaire | Present, separate file (good) |
| `README.md` | 56 | Project documentation | Present |
| `.tmp/research/competitor_analysis.md` | 668 | Market and competitor research | Present, thorough |
| `.tmp/research/positioning.md` | 87 | Brand positioning document | Present, clear |

**Structural assessment:** Clean separation of concerns. HTML, CSS, and JS in separate files. The audit tool is correctly separated from the main page script. No missing files. No bloat.

---

## 2. Design Quality Review

### Typography: 4/5
- **Display font:** DM Serif Display. Distinctive, editorial, warm. Excellent choice.
- **Body font:** Source Sans 3. Clean, readable, pairs well. Good choice.
- **Hierarchy:** h1 uses `clamp(2.2rem, 5vw, 3.8rem)`, h2 uses `clamp(1.8rem, 4vw, 2.8rem)`. Good scaling. The ratio is approximately 1.35x, which is adequate but could be stronger for the hero.
- **Body text:** 1.05rem (16.8px) with line-height 1.7. Comfortable and readable.
- **Issue:** Letter-spacing on h1 is -0.02em, which is fine for display but the h1 minimum (2.2rem = 35.2px) on mobile could be slightly larger for more impact (target 2rem minimum = 32px achieved, but 2.2rem is better).

### Colour: 5/5
- **Palette:** Deep navy (#1B2A4A), warm off-white (#FAF7F2), terracotta accent (#C45B28), golden secondary accent (#D4A853). Exactly on brief.
- **Background:** `--color-secondary: #FAF7F2` used as body background. Warm, not pure white. Correct.
- **Accent usage:** Terracotta appears on CTAs, option markers, and key interactive elements. Not overused. Correct distribution.
- **Contrast:** Navy on off-white passes WCAG AA easily. White on navy passes. Terracotta on white needs checking (C45B28 on FFFFFF is approximately 3.8:1, which fails AA for normal text but passes for large text). The accent is mainly used on buttons with white text, which is acceptable for large text.

### Layout: 4/5
- **White space:** Section padding at 6rem (4xl) provides generous breathing room. Good.
- **Section distinction:** Problem section uses navy background, solution returns to off-white, journey uses white, about returns to off-white. Good visual rhythm.
- **Journey section:** Uses a vertical timeline with connecting gradient line and coloured markers that shift from terracotta to navy. Visually interesting. Not a flat list.
- **Hero:** Has decorative SVG pattern and background gradient. Decent visual interest. The concentric circles are subtle but add texture.
- **Issue:** The hero background decoration (`hero__bg`) is hidden on mobile, which strips some visual interest from the mobile view.

### Overall Impression: 4/5
- This looks intentionally designed, not like default AI output. The colour choices, font pairing, and layout rhythm are cohesive.
- The testimonial cards with the large opening quotation mark are a nice touch.
- The journey timeline is the strongest visual element on the page.
- **Weakest visual element:** The hero section on mobile. Without the background decoration, it is just text on off-white. Needs more visual punch.

---

## 3. Copy Quality Review

### British English: PASS (with minor issues)
- Correctly uses "specialising", "organised", "colour" (in visible text), "sceptical"
- **Issue:** Em dashes in `<title>` tag and OG meta tags (lines 6, 10). Should be removed or restructured.
- **Issue:** No instances of American spelling found in visible copy. Good.
- **Issue:** "do not" is used consistently instead of contractions. This is a stylistic choice. For a warm, conversational tone, contractions ("don't") would read more naturally.

### Forbidden Phrases: PASS
- No instances of "revolutionise", "unlock your potential", "game-changing", "cutting-edge", etc.
- Copy is free of corporate marketing jargon. Good.

### Em Dashes / En Dashes: ISSUE
- The `<title>` tag uses "—" (em dash): "Run AI — AI Training for Teachers, by a Teacher"
- The OG title also uses "—"
- Copy constraint says no dashes. These should be restructured.

### Headline Assessment: 3/5
- Current: "Teaching Is Hard Enough. Let AI Handle the Rest."
- This is decent but has a problem: "Let AI Handle the Rest" implies AI replaces work, which contradicts the positioning of learning AI skills. The positioning document explicitly warns against "tools that promise magic but require no skill development."
- The headline describes the product benefit but does not create the emotional gut punch of recognition.
- It does not pass the "tired Year 4 teacher on Sunday evening" test strongly enough.

### Pain Point Cards: 3/5
- Card 1: "You have spent hours on a lesson plan that AI could draft in minutes. But you do not trust it enough to try." Decent but generic.
- Card 2: "Your school sent you on an AI CPD session that was all theory and no practice." Good, specific to a real experience.
- Card 3: "You know AI is changing education. You just do not know where to start." Very generic.
- **Issue:** Cards 1 and 3 need to be more visceral and specific. They should name specific moments, year groups, and time periods.

### CTA Buttons: 4/5
- "Join the Free Community" and "Take the AI Readiness Audit" are good. Specific and action-oriented.
- "See My Results" in the audit is good.
- "Join Free" in the nav is appropriately concise.
- **Issue:** "Find out where you stand" in the problem section is a weak ghost CTA. Could be stronger.

### About Section: 4/5
- Reads authentically. "He is not an AI expert. He is a teacher who got curious" is strong.
- **Issue:** Could use slightly more vulnerability. The positioning document says he "remembers what it was like to be confused, sceptical, and overwhelmed" but the bio does not show this.

### Other Copy Issues:
- Footer says "2025" but the current year is 2026.
- "Cancel anytime" in the hero meta is odd for a free community (there is nothing to cancel).
- No Skool URL (`https://www.skool.com/run-ai`) appears anywhere in the page. All community links go to `#lead-capture`.

---

## 4. Audit Tool Functionality

### Opening: PASS
- Modal opens with smooth opacity + scale transition. Backdrop blur present. Good.

### Scoring (lowest options): PASS
- All option index 0 selected = score of 10 (each answer adds index + 1, so 1 * 10 = 10). Maps to Level 1 (AI Explorer, range 10-15). Correct.

### Scoring (highest options): PASS
- All option index 4 selected = score of 50 (each answer adds 5, so 5 * 10 = 50). Maps to Level 5 (AI Native, range 41-50). Correct.

### Scoring (middle options): PASS
- All option index 2 selected = score of 30 (each answer adds 3, so 3 * 10 = 30). Maps to Level 3 (AI Integrator, range 23-30). Correct.

### Email Capture Gate: PASS
- Email step appears after all questions are answered, before results are shown.
- "Skip and see results" option is present. Good for reducing friction, though it weakens the gate.

### Personalised Next Steps: PASS
- Each level has 3 specific, relevant next steps. Content is appropriate for each level.

### Modal Close/Reopen: PASS
- Modal closes cleanly. Reopening resets the quiz (currentQuestion = 0, answers = []). Correct behaviour.

### Mobile Modal: ISSUE
- At 375px, the modal is a floating card with small margins. It should be full-screen on mobile for better usability.
- The modal is scrollable via `overflow-y: auto`. Good.

### Missing Features:
- **No back button.** Users cannot go to a previous question. This is a significant UX gap.
- **Email validation is weak.** Only checks for empty string, not email format.
- **Name field is not required** in the audit email form (no `required` attribute).

---

## 5. Responsive Layout

### 375px (Mobile): 3/5
- No horizontal scroll. Good.
- Text is readable. Good.
- **Issue:** Hero CTA buttons stack vertically but are not full-width. They should be.
- **Issue:** Audit modal is a floating card, not full-screen. Should be full-screen at this width.
- **Issue:** Container padding is 1.5rem (24px). Adequate but tight on some elements.

### 768px (Tablet): 4/5
- Grid columns activate (3-column grids for problem cards, solution cards, testimonials). Good.
- Journey timeline adjusts marker size. Good.
- About section goes to 2-column layout. Good.
- No orphaned elements observed.

### 1440px (Desktop): 5/5
- Max-width container at 1140px prevents stretching. Good.
- Full layout displays cleanly. Good.
- Hero background decoration is visible. Good.

---

## 6. Code Quality Review

### Semantic HTML: 3/5
- Uses `<nav>`, `<section>`, `<footer>` correctly.
- **Missing:** No `<header>` element. The nav should be inside a `<header>`.
- **Missing:** No `<main>` element wrapping the primary content.
- **Missing:** No skip-to-content link for accessibility.

### CSS Custom Properties: 5/5
- Comprehensive design token system in `:root`. Colours, fonts, spacing, radii, shadows, transitions all tokenised. Excellent.

### JavaScript Quality: 4/5
- IIFE prevents global pollution. Only `window.RunAIAudit` is exposed. Good.
- Event listeners properly attached. Good.
- **Issue:** Focus management is minimal. Initial focus is set on open, but there is no focus trap (Tab key can escape the modal).
- **Issue:** No `aria-live` region on the results area for screen readers.

### Integration Point Comments: 3/5
- Integration comments exist in both `index.html` (line 400) and `audit.js` (line 312).
- **Issue:** Comments do not match the specified format (missing ConvertKit URL, Zapier webhook mention, and required data structure).
- **Issue:** No `<!-- INTEGRATION POINT: Skool Community Link -->` comment exists.
- **Issue:** No Skool URL (`https://www.skool.com/run-ai`) appears in community links.

### Console Errors: Not tested (Playwright unavailable)
- Code review suggests no errors. All DOM queries use safe patterns.

---

## 7. Summary of Required Changes

### Priority 1: Broken / Missing
1. Add Skool URL to community links
2. Fix footer copyright year (2025 to 2026)
3. Add back button to audit flow
4. Fix email validation (format check, not just empty)

### Priority 2: Copy Quality
5. Rewrite headline to lead with pain/recognition, not product benefit
6. Sharpen pain point cards with specific moments and year groups
7. Remove em dashes from title and OG tags
8. Use contractions for warmer tone
9. Add vulnerability to About section
10. Fix "cancel anytime" meta line
11. Strengthen ghost CTA in problem section

### Priority 3: Design Polish
12. Make hero buttons full-width on mobile
13. Make audit modal full-screen on mobile
14. Add `<header>` and `<main>` semantic elements
15. Improve mobile hero visual interest

### Priority 4: Accessibility
16. Add skip-to-content link
17. Add `aria-live="polite"` to audit results
18. Implement proper focus trapping in modal
19. Add visible labels or improve form accessibility

### Priority 5: Integration
20. Update integration point comments to match specified format
21. Add Skool Community Link integration comment

---

**Overall Assessment:** Session 1 produced a strong 75% build. The design system, colour palette, typography, and overall structure are solid. The audit tool works correctly. The main gaps are in copy specificity, mobile UX for the audit modal, accessibility hardening, and a missing back button in the quiz flow. All fixable with targeted edits.
