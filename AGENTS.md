# Ralph Agent Instructions

## Overview

Ralph is an autonomous AI agent loop that runs AI coding tools repeatedly until all PRD items are complete. Each iteration is a fresh instance with clean context.

## Commands

```bash
# Run Ralph with Claude Code
./ralph run --tool claude

# Run Ralph with Codex
./ralph run --tool codex
```

## Key Files

- `ralph` - The bash loop that spawns fresh AI instances (supports `--tool claude` or `--tool codex`)
- `CLAUDE.md` - Instructions given to each Claude Code instance
- `CODEX.md` - Instructions given to each Codex instance
- `prd.json` - PRD formattion built with React Flow. It's designed for presentations - click through to reveal each step with animations.

## Patterns

- Each iteration spawns a fresh AI instance with clean context
- Memory persists via git history, `progress.txt`, and `prd.json`
- Stories should be small enough to complete in one context window
- Always update AGENTS.md with discovered patterns for future iterations
- The presentation site now runs as a top-level Vite + React app; shared slide metadata lives in `src/data/slides.js`, and rendering/state live in `src/App.jsx`
- First-pass slide builds can store structured content for completed slides in `src/data/slides.js`; `src/App.jsx` should render rich layouts when `slide.content` exists and fall back to placeholders for unfinished slides
- Use slide-number classes like `slide-01`, `slide-01-1`, and `slide-01-2` for bespoke visual treatments; keep shared layout logic in `src/App.jsx` and push art-direction details into decorative layers in `src/styles.css`
- For deck polish, prefer minimal composition over ornamental graphics: if a shape, orbit, wave, or glow does not explain the concept, remove it and tighten spacing before adding new visual treatment
- Watch slide grid row sizing on content-heavy slides; avoid giving annotation rows flexible `1fr` height because it creates fake bottom padding like the note labels on slide `01.2`
- For self-contained motion demos inside slides, prefer isolated components: use `remotion` utilities for in-app React animation and put standalone HTML compositions in `public/` when embedding them through `@hyperframes/player`
- If a concept needs both explanation and animation, split it into separate subslides instead of overlaying dense copy on the same canvas as motion; explainer slides and motion slides are easier to size and present cleanly
