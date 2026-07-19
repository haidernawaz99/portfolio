# Portfolio

A single-page portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui

## Getting Started

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

## Available Scripts

- `yarn dev`: Run Vite dev server (host enabled)
- `yarn typecheck`: Run TypeScript checks with no emit
- `yarn lint`: Run ESLint
- `yarn build`: Build app (`tsc -b && vite build`)
- `yarn preview`: Preview production build
- `yarn format`: Format TypeScript files with Prettier

## Project Structure

- `src/App.tsx`: root composition and page switching
- `src/components`: UI and section components
- `src/data`: typed static content (profile, projects, skills, etc.)
- `src/types`: shared domain types
- `src/hooks`: app-specific hooks
- `src/index.css`: global styles and animation primitives

## UI Components (shadcn)

Add a new shadcn component:

```bash
npx shadcn@latest add button
```

Components are generated in `src/components/ui`.

## AI Agent Customization

Repository-level agent guidance is documented in [AGENTS.md](AGENTS.md).

Focused file instructions are available in:

- [.github/instructions/data-and-types.instructions.md](.github/instructions/data-and-types.instructions.md)
- [.github/instructions/visual-effects.instructions.md](.github/instructions/visual-effects.instructions.md)

These are used to keep edits consistent in high-impact areas (data/type synchronization and effect-heavy visual components).
