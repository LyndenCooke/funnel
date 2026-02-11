# Skill Creator Skill

## Purpose
For building new Claude Code skills during a session when existing skills do not cover a needed capability.

## When to Use
- A task requires specialised knowledge not covered by existing skills
- A repeating pattern emerges that should be codified
- A new domain or tool needs structured guidance

## Skill Structure

Every skill lives in `.claude/skills/[skill-name]/SKILL.md` and follows this structure:

```markdown
# [Skill Name]

## Purpose
One sentence describing what this skill does and when to use it.

## When to Use
Bullet list of scenarios where this skill applies.

## Core Principles
The main rules, guidelines, or knowledge this skill encodes.

## Patterns / Templates
Reusable patterns, code snippets, or templates.

## Quality Checklist
Verification steps before considering output complete.

## Common Mistakes
What to avoid when using this skill.
```

## Skill Design Principles

### 1. Single Responsibility
Each skill should do one thing well. If a skill needs to cover two domains, split it into two skills.

### 2. Actionable, Not Abstract
Skills should contain concrete rules, patterns, and checklists. Avoid vague guidance like "write good code" or "design well."

### 3. Opinionated
Skills should make decisions so the user does not have to. "Use British English" is better than "consider your audience's language preferences."

### 4. Testable
Every guideline in a skill should be verifiable. "No emojis" can be checked. "Be creative" cannot.

### 5. Context-Aware
Skills should reference the project's specific tokens, patterns, and conventions. Generic skills are less useful than project-specific ones.

## Creating a New Skill

1. Identify the gap: what knowledge or rules are missing?
2. Name the skill clearly (kebab-case, descriptive)
3. Write the SKILL.md following the structure above
4. Save to `.claude/skills/[skill-name]/SKILL.md`
5. Test the skill by applying it to a concrete task
6. Refine based on the output quality

## Existing Skills in This Project
- `frontend-design` — Anti-AI-slop design guidance
- `direct-response-copy` — British English conversion copy
- `orchestrator` — Workflow coordination between builds
- `webapp-testing` — Playwright browser testing
- `skill-creator` — This skill (meta)
