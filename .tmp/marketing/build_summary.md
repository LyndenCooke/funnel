# Run AI Marketing System — Build Summary

**Date:** February 2026
**Session:** Marketing system build (Session 3)
**Builds completed:** 5 of 5

---

## Deliverables

### Build 1: Ad Creative (LinkedIn)
- 5 concepts x 2 sizes = **10 static ad HTML files**
- Concepts: Pain point, Identity, Social proof, Objection reversal, Curiosity/quiz
- Sizes: Landscape (1200x627) and Square (1080x1080)
- Located in `ads/linkedin/`
- Research saved to `.tmp/marketing/ad_research.md`
- Concepts saved to `.tmp/marketing/ad_concepts.md`

### Build 2: SEO Content Pages
- **3 long-form pages** targeting:
  1. "AI tools for primary teachers" — `pages/ai-tools-for-primary-teachers.html`
  2. "How to use AI for lesson planning" — `pages/how-to-use-ai-for-lesson-planning.html`
  3. "AI CPD for schools UK" — `pages/ai-cpd-for-schools.html`
- Each page: 800-1200 words, proper SEO tags, shared design system, audit modal integration
- Keyword research saved to `.tmp/marketing/seo_keywords.md`

### Build 3: Video Ads (HTML Fallbacks)
- 3 concepts x 3 aspect ratios = **9 animated HTML files**
- Concepts: Pain point (text reveal), Identity (typewriter), Curiosity (animated score ring)
- Aspect ratios: Landscape (16:9, 1280x720), Square (1:1, 1080x1080), Vertical (9:16, 1080x1920)
- Located in `ads/video-html/`
- Note: These are CSS-animated HTML files. Screen-record or use a tool to export as MP4/GIF for upload.
- Remotion was not used (HTML fallback approach as specified in the brief).

### Build 4: Email Welcome Sequence
- **5 emails** for Kit (ConvertKit) automation:
  1. `01-welcome.md` — Immediate: community link, expectations
  2. `02-lyndens-story.md` — Day 1: founder story, anti-guru positioning
  3. `03-quick-win.md` — Day 3: specific AI prompt template for lesson planning
  4. `04-ai-readiness-audit.md` — Day 5: audit nudge
  5. `05-road-ahead.md` — Day 7: 5 levels, 30-day goal
- **Kit setup guide:** `emails/KIT_SETUP.md` with step-by-step instructions
- Located in `emails/`

### Build 5: Landing Page Variants
- **3 role-specific variants:**
  1. `variants/primary.html` — Primary teachers (KS1/KS2 pain points)
  2. `variants/secondary.html` — Secondary teachers (GCSE/A-level marking load)
  3. `variants/leaders.html` — School leaders/CPD coordinators (budget, training, Ofsted)
- Each shares `styles.css`, `audit.js`, nav, journey, about, testimonials, lead capture, and footer
- Only hero, problem, and solution sections differ

### Skills Installed
- 5 Claude Code skills created in `.claude/skills/`:
  1. `frontend-design` — Anti-AI-slop design guidance with brand tokens
  2. `direct-response-copy` — British English copy rules, tone, forbidden phrases
  3. `orchestrator` — Quality assessment framework (5-dimension scoring)
  4. `webapp-testing` — Playwright testing patterns and verification checklists
  5. `skill-creator` — Meta-skill for creating new skills

---

## Quality Assessment (Orchestrator)

### Build 1: Ad Creative
| Dimension | Score | Notes |
|-----------|-------|-------|
| Copy | 4/5 | Strong hooks, specific, passes tired teacher test |
| Design | 4/5 | Clean typography-led layouts, brand palette consistent |
| Technical | 4/5 | Valid HTML, correct dimensions, no clipping |
| Strategic | 5/5 | Each concept attacks a different angle as specified |
| Conversion | 4/5 | Clear CTAs, strong hooks for scroll-stopping |
| **Overall** | **4.2/5** | |

### Build 2: SEO Content Pages
| Dimension | Score | Notes |
|-----------|-------|-------|
| Copy | 4/5 | Genuinely useful content, teacher voice, British English |
| Design | 4/5 | Consistent with main site, clean article layouts |
| Technical | 4/5 | Proper SEO tags, shared CSS, audit modal integration |
| Strategic | 5/5 | Targets validated long-tail keywords with commercial intent |
| Conversion | 4/5 | Contextual CTAs to community and audit |
| **Overall** | **4.2/5** | |

### Build 3: Video Ads
| Dimension | Score | Notes |
|-----------|-------|-------|
| Copy | 4/5 | Reuses proven ad concepts, clear messaging |
| Design | 4/5 | Brand palette, clean animations, readable text |
| Technical | 4/5 | CSS animations work, proper looping, all 3 aspect ratios |
| Strategic | 4/5 | Covers pain, identity, and curiosity angles |
| Conversion | 3/5 | End cards have CTAs but video ads rely on platform-level CTAs |
| **Overall** | **3.8/5** | |

### Build 4: Email Sequence
| Dimension | Score | Notes |
|-----------|-------|-------|
| Copy | 5/5 | Warm, personal, feels human-written, strong Lynden voice |
| Design | N/A | Plain text emails (by design for Kit) |
| Technical | 4/5 | Kit merge tags correct, timing specified, setup guide thorough |
| Strategic | 5/5 | Follows best-practice welcome sequence arc |
| Conversion | 4/5 | Each email drives to community or audit |
| **Overall** | **4.5/5** | |

### Build 5: Landing Page Variants
| Dimension | Score | Notes |
|-----------|-------|-------|
| Copy | 4/5 | Role-specific pain points, British English, specific references |
| Design | 4/5 | Identical design system, only content sections changed |
| Technical | 4/5 | Shared CSS, audit modal works, relative paths correct |
| Strategic | 5/5 | Covers the three key audience segments |
| Conversion | 4/5 | Same conversion paths as main page |
| **Overall** | **4.2/5** | |

### Overall Marketing System Score: **4.2/5**

---

## Top 3 Strengths
1. **Comprehensive coverage.** All 5 builds completed with every specified deliverable.
2. **Consistent brand identity.** Every output uses the navy/cream/terracotta palette and DM Serif Display + Source Sans 3 typography.
3. **Genuine, useful content.** SEO pages and emails contain real, practical guidance. Not keyword-stuffed filler.

## Top 3 Areas for Improvement
1. **Real testimonials needed.** All three testimonials on landing pages are placeholders. Real quotes will significantly boost conversion.
2. **Video ads need export.** HTML fallbacks work but need screen recording or tooling to create final MP4/GIF files for upload.
3. **Photography.** Lynden's headshot on all pages would add credibility and human connection. The placeholder "LC" initials work but are not ideal.

---

## Integration Checklist
- [ ] Upload ad images to LinkedIn Campaign Manager (screenshot the HTML files at correct dimensions)
- [ ] Publish SEO pages (Vercel, Netlify, or GitHub Pages)
- [ ] Import email sequence to Kit and connect automation
- [ ] Set up landing page variant URLs for ad targeting
- [ ] Add tracking (UTM parameters on all ad and email links)
- [ ] Connect Kit forms to all lead capture integration points
- [ ] Screen-record video HTML ads and export as MP4/GIF
- [ ] Add Google Analytics or Plausible tracking to all pages

## What Needs Human Input
- [ ] Lynden reviews and approves all copy
- [ ] Real testimonials replace placeholders on all pages
- [ ] Lynden's headshot replaces the "LC" placeholder on about sections
- [ ] Kit account setup and form connection (follow KIT_SETUP.md)
- [ ] Ad budget and targeting decisions for LinkedIn Campaign Manager
- [ ] Domain setup and DNS configuration for hosting
- [ ] UTM parameter strategy for tracking ad and email link performance
