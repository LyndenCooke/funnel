# Frontend Design Skill

## Purpose
Anti-AI-slop design guidance. Use this skill for all visual output to ensure designs look human-crafted, not AI-generated.

## Core Principles

### 1. No AI Slop
AI-generated designs have tell-tale signs. Avoid all of them:
- No purple/blue gradients (the default AI aesthetic)
- No generic stock photo placeholders
- No "futuristic" or "tech" visual treatments
- No robot or brain imagery for AI topics
- No overly symmetrical, sterile layouts
- No gratuitous use of glassmorphism, neumorphism, or other trend-driven effects
- No decorative elements that serve no purpose

### 2. Design With Constraint
Good design is about restraint, not addition:
- Use the brand tokens defined in `styles.css`. Do not invent new colours.
- Limit typography to the two brand fonts: DM Serif Display (headlines) and Source Sans 3 (body).
- White space is a design element. Do not fill every pixel.
- One message per component. If you need to say two things, use two components.

### 3. Brand Tokens (Run AI)
```
Colour palette:
  --color-primary: #1B2A4A     (navy, dominant)
  --color-secondary: #FAF7F2   (cream, backgrounds)
  --color-accent: #C45B28      (terracotta, CTAs and highlights)
  --color-accent-light: #D4A853 (gold, secondary accent)
  --color-text: #2D2D2D        (body text)
  --color-text-light: #6B7280  (secondary text)

Typography:
  Display: 'DM Serif Display', serif (headings, large text)
  Body: 'Source Sans 3', sans-serif (paragraphs, UI text)

Spacing: 0.25rem to 8rem scale
Border radius: 4px to 9999px (full/pill)
```

### 4. Layout Principles
- Mobile-first responsive design
- Content-width containers (max-width: 1140px, narrow: 800px)
- Consistent vertical rhythm using the spacing scale
- Grid layouts for cards and multi-column content
- Flexbox for alignment and distribution

### 5. Component Quality Checklist
Before shipping any visual output, verify:
- [ ] Uses only brand colours from the token system
- [ ] Typography uses only DM Serif Display and Source Sans 3
- [ ] All text is readable at intended viewport size
- [ ] Nothing is clipped, overlapping, or overflowing
- [ ] Interactive elements have hover/focus states
- [ ] Layout works at mobile (375px), tablet (768px), and desktop (1140px+)
- [ ] Decorative elements are subtle and purposeful, not gratuitous
- [ ] The design could plausibly have been created by a competent human designer

### 6. Common Patterns
- **Hero sections:** Large heading, supporting paragraph, 1-2 CTAs, optional background decoration
- **Card grids:** 1-column mobile, 3-column desktop, consistent padding and borders
- **CTAs:** Terracotta pill buttons with white text, hover state darkens to #A84A20
- **Section transitions:** Curved dividers between colour-blocked sections
- **Text hierarchy:** H1 > H2 > H3, with supporting paragraphs in lighter text colour

### 7. What to Avoid
- Animations that serve no purpose (decorative spinners, bouncing elements)
- More than 2 font weights per typeface in a single component
- Colour combinations not in the brand palette
- Shadows heavier than the defined shadow tokens
- Borders thicker than 2px except for deliberate design emphasis
