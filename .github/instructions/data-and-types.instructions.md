---
applyTo:
	- "src/data/**/*.ts"
	- "src/types/**/*.ts"
	- "src/App.tsx"
	- "src/components/HomePage.tsx"
	- "src/components/ProjectsPage.tsx"
	- "src/components/Dock.tsx"
description: "Use when changing portfolio content models, shared types, and page/dock wiring. Keep data, types, and UI in sync."
---

# Data And Type Sync Rules

This project uses typed static data as a source of truth.

## Source Of Truth

- Shared interfaces and unions live in [src/types/index.ts](src/types/index.ts).
- Content records live in [src/data](src/data).
- Data barrel exports are coordinated in [src/data/index.ts](src/data/index.ts).

## Required Workflow

1. Update or add types first in [src/types/index.ts](src/types/index.ts).
2. Update matching data structures in [src/data](src/data).
3. Update consumers in [src/App.tsx](src/App.tsx) and affected components.
4. If page navigation changes, update page IDs and dock options together.

## Conventions

- Use `import type` for type-only imports.
- Use the `@/` alias for cross-folder imports.
- Do not hardcode portfolio content directly in UI components if it belongs in data files.

## Validation

- Run `yarn typecheck` after any type or data model change.
- Run `yarn build` before finalizing structural changes.
