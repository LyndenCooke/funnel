# Orchestrator Skill

## Purpose
Workflow coordinator for multi-phase builds. Use between phases to assess quality, identify issues, and decide next steps.

## When to Use
- After completing each build phase
- When transitioning between major deliverables
- For final quality assessment across all outputs
- When a build encounters problems that need triaging

## Quality Assessment Framework

### 5-Dimension Scoring
Score each deliverable on a 1-5 scale across these dimensions:

#### 1. Copy Quality (1-5)
- 1: Generic, AI-sounding, corporate jargon
- 2: Competent but bland, lacks specificity
- 3: Good, passes the tired teacher test, British English correct
- 4: Strong, specific, warm, would make a teacher stop scrolling
- 5: Exceptional, could not tell it was AI-assisted, genuinely useful

#### 2. Design Quality (1-5)
- 1: Obvious AI slop, wrong colours, cluttered layout
- 2: Technically correct but uninspired, generic template feel
- 3: Good use of brand tokens, clean layout, readable
- 4: Professional, cohesive with the main site, purposeful design choices
- 5: Exceptional, feels hand-crafted, every element earns its place

#### 3. Technical Quality (1-5)
- 1: Broken HTML, missing assets, errors in console
- 2: Works but has issues (clipped text, broken responsive, missing states)
- 3: Solid, validates, works across viewports, no obvious issues
- 4: Well-structured, semantic HTML, performant, accessible basics
- 5: Production-ready, full accessibility, optimal performance

#### 4. Strategic Alignment (1-5)
- 1: Off-brand, wrong audience, contradicts positioning
- 2: Loosely connected to brand but misses the nuance
- 3: Aligned with brand positioning and target audience
- 4: Strongly aligned, reinforces key differentiators
- 5: Perfectly aligned, advances the strategic narrative

#### 5. Conversion Potential (1-5)
- 1: No clear CTA, confusing user journey
- 2: CTA present but weak or misplaced
- 3: Clear CTA, logical flow, reasonable conversion path
- 4: Compelling CTA, addresses objections, low-friction signup
- 5: Outstanding, multiple conversion paths, handles every objection

### Assessment Output Format
```markdown
## [Build Name] Quality Assessment

| Dimension | Score | Notes |
|-----------|-------|-------|
| Copy | X/5 | [brief note] |
| Design | X/5 | [brief note] |
| Technical | X/5 | [brief note] |
| Strategic | X/5 | [brief note] |
| Conversion | X/5 | [brief note] |
| **Overall** | **X/5** | |

### Issues Found
- [Issue 1]
- [Issue 2]

### Recommendations
- [Recommendation 1]
- [Recommendation 2]

### Decision
- [ ] Proceed to next build
- [ ] Fix critical issues first
- [ ] Rework this build
```

## Workflow Coordination

### Between Builds
1. Run the quality assessment on the completed build
2. Check that all deliverables from the build are saved to the correct locations
3. Verify British English compliance on all visible text
4. Note any dependencies the next build has on this one
5. Decide: proceed, fix, or rework

### Issue Triage
When problems arise during a build:
- **Critical (blocks progress):** Fix immediately before proceeding
- **Important (degrades quality):** Note for fixing, proceed if time-sensitive
- **Minor (cosmetic):** Note for later, proceed without delay
- **Environment (tooling failure):** Use the fallback approach and move on

### Build Dependencies
- Build 1 (Ads) feeds Build 3 (Video) — ad concepts inform video scripts
- Build 2 (SEO) is independent
- Build 4 (Emails) references all other builds (community link, audit, content pages)
- Build 5 (Variants) is based on the main landing page (index.html)

## Final Assessment
After all builds are complete, run a comprehensive quality assessment across everything. Produce a summary with:
- Per-build scores
- Overall marketing system score
- Top 3 strengths
- Top 3 areas for improvement
- Prioritised action list for Lynden
