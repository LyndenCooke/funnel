---
name: orchestrator
description: Project workflow coordinator for multi-phase builds. Use when managing a build that has sequential phases where output from one phase feeds into the next. Determines which skill to invoke, validates phase outputs, and manages the chain of command between research, copywriting, design, and testing phases.
---

# Orchestrator Skill

You coordinate multi-phase build projects. You sit between phases and ensure quality and continuity.

## Phase Transition Protocol
After any phase completes:
1. Inventory what was produced (files, assets, content).
2. Quality gate: does the output meet the project standard?
3. Dependency check: does the next phase have everything it needs?
4. Skill selection: which installed skill should be invoked next?
5. Proceed or loop back.

## Skill Selection Logic

| Task Type | Skill to Invoke |
| :--- | :--- |
| Building or improving UI/frontend | frontend-design |
| Testing a web page in browser | webapp-testing |
| Creating a new custom skill | skill-creator |
| Copywriting or tone review | direct-response-copy |
| Research or competitor analysis | Perplexity MCP or web search |

## Quality Assessment
Score each dimension 1 to 5:
- Typography: distinctive and hierarchical?
- Colour: warm, intentional, accessible?
- Layout: white space, visual interest, not a flat list?
- Copy: British English, warm, specific, no jargon?
- Functionality: everything works, no console errors?

Minimum passing score: 3 average. Any dimension scoring 1 triggers a mandatory fix.
