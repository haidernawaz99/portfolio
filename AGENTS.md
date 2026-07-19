# AGENTS

Practical guidance for AI coding agents working in this repository.

## Project Snapshot

- Stack: React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui.
- App style: single-page portfolio with internal state-based page switching (no router).
- Main docs: [README.md](README.md), tooling config in [package.json](package.json), [eslint.config.js](eslint.config.js), [tsconfig.app.json](tsconfig.app.json), [vite.config.ts](vite.config.ts), UI config in [components.json](components.json).

## Runbook

- Install dependencies: `yarn install`
- Start dev server: `yarn dev`
- Type-check: `yarn typecheck`
- Lint: `yarn lint`
- Build: `yarn build`
- Preview production build: `yarn preview`

Before finalizing code changes, prefer running:

1. `yarn typecheck`
2. `yarn lint`
3. `yarn build`

## Architecture Map

- App entry: [src/main.tsx](src/main.tsx)
- Root composition and page switching: [src/App.tsx](src/App.tsx)
- Shared domain types: [src/types/index.ts](src/types/index.ts)
- Static content/data source: [src/data/index.ts](src/data/index.ts)
- Main sections/components: [src/components](src/components)
- Shared styling primitives and animations: [src/index.css](src/index.css)
- Shared utility helpers: [src/lib/utils.ts](src/lib/utils.ts)

Data flow is simple: typed static data from [src/data](src/data) is imported into [src/App.tsx](src/App.tsx) and passed down as props to presentational components.

## Conventions To Follow

- Keep TypeScript strictness intact; do not weaken tsconfig rules.
- Use the `@/` path alias for cross-folder imports, matching existing code.
- Prefer `import type` for type-only imports.
- Keep domain types centralized in [src/types/index.ts](src/types/index.ts).
- Keep content-like updates in [src/data](src/data), not hardcoded inside components.
- Reuse existing CSS primitives from [src/index.css](src/index.css) before creating new one-off patterns.

## Change Playbooks

### Add or modify a page/section

1. Update relevant types in [src/types/index.ts](src/types/index.ts) if needed.
2. Add or update data models in [src/data](src/data).
3. Wire rendering in [src/App.tsx](src/App.tsx).
4. If navigation changes are needed, update [src/components/Dock.tsx](src/components/Dock.tsx) and page-id logic in [src/hooks/useActivePage.ts](src/hooks/useActivePage.ts).

### Modify advanced visual effects

- High-risk files: [src/components/LiquidEther.tsx](src/components/LiquidEther.tsx), [src/components/GlassSurface.tsx](src/components/GlassSurface.tsx).
- Preserve existing performance safeguards, especially mobile behavior in [src/hooks/useIsMobile.ts](src/hooks/useIsMobile.ts) and resolution choices in [src/App.tsx](src/App.tsx).
- Avoid broad refactors in effect-heavy code unless explicitly requested.

## Guardrails

- Do not introduce a router unless requested; navigation is intentionally state-driven.
- Do not add new frameworks/tooling (state managers, test runners, CSS frameworks) unless requested.
- Keep edits minimal and localized; preserve existing component boundaries.

## Known Gaps

- No automated test setup is currently configured in scripts. Do not assume Vitest/Jest exists.

## If Unsure

- Follow existing patterns from:
  - [src/App.tsx](src/App.tsx)
  - [src/components/HomePage.tsx](src/components/HomePage.tsx)
  - [src/components/ProjectsPage.tsx](src/components/ProjectsPage.tsx)
  - [src/components/ui/button.tsx](src/components/ui/button.tsx)
