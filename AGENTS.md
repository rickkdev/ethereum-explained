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
- Parent chapter slides should usually use a group-level `overview` object in `src/data/slides.js`; the shared overview renderer already handles headline, three pillars, callout, and footer without new React code
- Child slides can be implemented incrementally in `src/data/slides.js` by appending to `childContent` in order; if a later child has no entry yet, `src/App.jsx` falls back to the unfinished-slide placeholder automatically
- Historical/context subslides can still use the shared `ledger` layout when the story fits a "before vs proposal" comparison and a short dated flow; this avoids adding a bespoke timeline renderer for simple origin stories
- Pending-versus-confirmed lifecycle slides can also reuse the shared `ledger` layout: use the comparison cards for the two states and the side flow to show how data moves from broadcast to durable history
- Capability-comparison slides can also reuse the shared `ledger` layout: use one card for the incumbent chain, one for the expanded model, and the side flow to explain what new capability the later system adds
- Smart-contract concept slides can also reuse the shared `ledger` layout: compare centralized backend logic with on-chain code in the two cards, then use the side flow for the deploy-call-execute-update lifecycle
- Capability-versus-risk slides can also reuse the shared `ledger` layout: put concrete use-cases in one card, failure modes in the other, and use the side flow to show how the same automation creates both leverage and risk
- Smart-contract execution lifecycle slides fit the shared `pipeline` layout well: use the stages for deploy, call, deterministic EVM execution, and shared-state update instead of building a custom process diagram
- For structural explainer slides that need to break one concept into named parts, roles, or consequences, use the shared `anatomy` layout in `src/App.jsx` with `frameLabel`, `segments`, and `notes` in `src/data/slides.js` instead of forcing the content into the `ledger` comparison template
- State-machine explainer slides can also reuse the shared `anatomy` layout: map the segments to the acting account, the shared state snapshot, and the execution environment that computes the next valid state
- Wallet mental-model slides also fit the shared `anatomy` layout well: use the segments to separate the public side, private side, and wallet-software responsibilities instead of implying coins are stored inside the app
- Acronym or framework slides can also reuse the shared `anatomy` layout when each letter or principle becomes one segment; keep the renderer generic and let the CSS auto-fit the grid for 5+ cards
- For slides that need to show why changing past data breaks a chain, use the shared `hash-chain` layout in `src/App.jsx` and drive it from `chain` plus `tamperedChain` arrays in `src/data/slides.js` rather than building a one-off diagram
- For monetary-policy slides that need to pair a process explanation with a reward or issuance schedule, use the shared `issuance` layout in `src/App.jsx` and feed it `process`, `eras`, `stats`, and `notes` from `src/data/slides.js`
- The shared `issuance` layout also works for fixed-supply slides when `eras` represent cumulative supply milestones instead of per-era rewards; use the bars to show how quickly supply approaches the terminal cap
- Use slide-number classes like `slide-01`, `slide-01-1`, and `slide-01-2` for bespoke visual treatments; keep shared layout logic in `src/App.jsx` and push art-direction details into decorative layers in `src/styles.css`
- For deck polish, prefer minimal composition over ornamental graphics: if a shape, orbit, wave, or glow does not explain the concept, remove it and tighten spacing before adding new visual treatment
- Watch slide grid row sizing on content-heavy slides; avoid giving annotation rows flexible `1fr` height because it creates fake bottom padding like the note labels on slide `01.2`
- For self-contained motion demos inside slides, prefer isolated components: use `remotion` utilities for in-app React animation and put standalone HTML compositions in `public/` when embedding them through `@hyperframes/player`
- When a Hyperframes composition sits inside an existing explainer slide, remove duplicate internal headlines and let the composition spend its pixels on the diagram itself; pair that with a slide-specific layout class so the embed can grow to the available width instead of sitting in a generic card
- For motion-first slides like `01.4`, render the Hyperframes player directly in the slide body instead of nesting it inside an extra `content-card`; use the slide-specific class to let the embed fill the available canvas
- When a motion slide should show only the animation, bypass `SlideShell` for that slide and remove the base `.frame` padding plus `.slide` chrome so the composition can run full-bleed inside the presentation canvas
- If a slide number needs to break the normal `01.1`, `01.2` sequence, allow explicit child slide objects in `src/data/slides.js` so custom numbers like `01.4.2` can coexist with generated siblings
- When recreating a motion concept from Hyperframes inside the app, prefer a dedicated React component driven by `useLoopFrame` plus `remotion` springs/interpolations rather than embedding another external player
- If a concept needs both explanation and animation, split it into separate subslides instead of overlaying dense copy on the same canvas as motion; explainer slides and motion slides are easier to size and present cleanly
- For deck-wide reskins, centralize the visual system in `src/styles.css` and keep `src/App.jsx` focused on shared slide scaffolds; a noir treatment works best when the top bar, footer, borders, and grid texture are consistent across every layout
- In shared slide intros, use deck metadata for the heading hierarchy: the small kicker should be the slide counter like `Slide 01`, and the large hero title should be `slide.title`; keep explanatory content in the body copy, not in the hero headline
- Keep `prd.json` aligned with `src/data/slides.js`: create one story for every parent slide and subslide, and capture Remotion recommendations in story notes when motion is the clearest way to teach a more complex concept
