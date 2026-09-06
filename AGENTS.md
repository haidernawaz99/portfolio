# AGENTS

Practical guidance for AI coding agents working in this repository.

---

## Self-Documentation Rule

**Every code change must be accompanied by a corresponding update to this file.**

Whenever you touch the codebase, review each section below and update any part that is now out of date. Do not open a PR or declare the task done while `AGENTS.md` still describes the old state.

| Change made | Section(s) to update |
|---|---|
| Add or delete a file / directory | **Repository Layout** — update the annotated file tree |
| Add or rename a page (`PageId`) | **Navigation Model** — update the union table; **Change Playbooks** if the steps changed |
| Add a new CSS class or token | **Styling System** — add a row to the CSS Classes table or document the new token |
| Add or change a domain type | **TypeScript Configuration** if compiler flags change; type is already in `src/types/index.ts` so no extra docs needed unless the shape is non-obvious |
| Add a new hook | **Repository Layout** — add it under `src/hooks/`; mention its purpose |
| Add a new shadcn/ui component | **Repository Layout** — add it under `src/components/ui/` |
| Add or remove a `src/data/` file | **Repository Layout** + **Data Flow** section |
| Change the build pipeline or Vite config | **Vite — Custom Build Behaviour** |
| Change a script in `package.json` | **Runbook** |
| Add/remove a high-risk file | **High-Risk Files** table |
| Add a new change pattern not covered by an existing playbook | **Change Playbooks** — add a new sub-section |
| Update content (profile, experience, projects, etc.) | Update `<lastmod>` in `public/sitemap.xml` (see **Agent-Discoverability Files**) — _not_ this file |

> These updates must be part of the **same commit** as the code change, not a follow-up. If the change is exploratory and later reverted, revert the docs too.

---

## Project Snapshot

| | |
|---|---|
| **Site** | [haidernawaz.com](https://haidernawaz.com) — personal portfolio for Haider Nawaz Janjua |
| **Stack** | React 19 + TypeScript 6 + Vite 8 + Tailwind CSS v4 + shadcn/ui |
| **Hosting** | Cloudflare Pages (free tier) with Pages Functions |
| **Style** | Single-page app; navigation is state-driven (no router) |
| **Package manager** | Yarn 4 (Berry) — always use `yarn`, never `npm` or `pnpm` |

---

## Runbook

```bash
yarn install          # Install dependencies
yarn dev              # Start dev server (exposed on LAN via --host)
yarn typecheck        # Type-check only (no emit)
yarn lint             # ESLint
yarn format           # Prettier (ts/tsx)
yarn build            # tsc -b + vite build  →  dist/
yarn preview          # Preview the production build locally
```

**Before finalising any change, run in order:**

```bash
yarn typecheck && yarn lint && yarn build
```

All three must pass cleanly (zero errors, zero new warnings).

---

## Repository Layout

```
portfolio/
├── html/seo/                     # HTML partials injected into index.html at build time
│   ├── primary.html              # <title>, <meta description>, canonical
│   ├── og.html                   # Open Graph tags
│   ├── twitter.html              # Twitter Card tags
│   ├── icons.html                # Favicons / apple-touch-icon
│   └── jsonld.html               # JSON-LD structured data (Person schema)
├── public/                       # Copied verbatim to dist/ by Vite
│   ├── favicon.svg
│   ├── og-image.png
│   └── sitemap.xml               # XML sitemap (keep <lastmod> updated on content changes)
├── src/
│   ├── main.tsx                  # React entry point
│   ├── App.tsx                   # Root: page switching + LiquidEther background layer
│   ├── index.css                 # Global CSS — Tailwind theme tokens, animation classes, CSS vars
│   ├── types/index.ts            # ALL shared domain types live here
│   ├── data/                     # Static typed content — the single source of truth
│   │   ├── index.ts              # Re-exports everything
│   │   ├── profile.ts            # Profile
│   │   ├── skills.ts             # Skill[]
│   │   ├── experience.ts         # Experience[]
│   │   ├── projects.ts           # Project[]
│   │   ├── education.ts          # Education[]
│   │   ├── certifications.ts     # Certification[]
│   │   └── colors.ts             # ETHER_COLORS — WebGL background palette
│   ├── hooks/
│   │   ├── useActivePage.ts      # State-based page navigation (returns activePage + setActivePage)
│   │   └── useIsMobile.ts        # MediaQuery hook; breakpoint = 640 px
│   └── components/
│       ├── HomePage.tsx          # Resume page — composes all resume sections
│       ├── ProjectsPage.tsx      # Projects page — renders ProjectCard list
│       ├── Dock.tsx              # Fixed bottom navigation bar
│       ├── DockItem.tsx          # Individual dock button with active indicator
│       ├── ProfileHeader.tsx     # Name, title, links
│       ├── GreetingBanner.tsx    # Animated greeting with wave emoji
│       ├── SkillsGrid.tsx        # Categorised skills grid
│       ├── ExperienceTimeline.tsx# Work experience with timeline track
│       ├── EducationSection.tsx  # Education cards
│       ├── CertificationsSection.tsx  # Certification badges
│       ├── ProjectCard.tsx       # Individual project card with stagger animation
│       ├── GlassSurface.tsx      # ⚠️ HIGH-RISK — WebGL SVG-filter glass distortion
│       ├── LiquidEther.tsx       # ⚠️ HIGH-RISK — Three.js fluid simulation background
│       ├── GradientText.tsx      # Animated gradient text using Framer Motion
│       ├── theme-provider.tsx    # Dark-mode context (always dark — no light theme)
│       ├── icons/                # Custom SVG icon components (e.g. LinkedinIcon)
│       └── ui/
│           └── button.tsx        # shadcn/ui Button primitive
├── index.html                    # Shell — uses <!-- include:html/seo/*.html --> directives
├── vite.config.ts                # Custom htmlInjectPlugin + Tailwind + React plugins
├── tsconfig.app.json             # Strict TS; paths alias @/ → src/
├── eslint.config.js              # Flat config: recommended + react-hooks + react-refresh
├── .prettierrc                   # Prettier config
└── components.json               # shadcn/ui config
```


---

## Data Flow

```
src/data/*.ts  ──import──►  src/App.tsx  ──props──►  Page components  ──props──►  Section components
```

- All content lives in `src/data/`. **Never hardcode content inside components.**
- All domain types live in `src/types/index.ts`. **Never define types locally in components.**
- `App.tsx` imports data and passes it down — it is the only place data and pages connect.

---

## Navigation Model

The app uses **state-based navigation** — no router, no URL changes.

| Type | Value |
|---|---|
| `PageId` | `"home" \| "projects"` |
| `DockItemId` | `PageId \| "linkedin"` |

- `useActivePage` owns the active page state (plain `useState`).
- `Dock.tsx` owns `DOCK_ITEMS` — the ordered list of nav entries.
- To add a page: add `PageId` to the union in `types/index.ts`, add an entry to `DOCK_ITEMS` in `Dock.tsx`, and add a conditional render block in `App.tsx`.

---

## Styling System

### Tailwind CSS v4 (inline `@theme`)
- Theme tokens are defined in `src/index.css` inside `@theme inline { ... }`.
- Two accent colours: `--violet: #a78bfa` and `--pink: #ff9ffc`. Reference as `text-[var(--violet)]`.
- Border-radius scale: `--radius-sm` through `--radius-4xl`.
- Dock sizing: `--dock-h` (72 px desktop / 62 px mobile) and `--dock-pb` (24 px / 12 px). Use these in `calc()` for bottom padding on pages.

### CSS Classes (defined in `src/index.css` — use these, do not reinvent)
| Class | Purpose |
|---|---|
| `.blur-card` | Frosted-glass card — `backdrop-filter` + complex `box-shadow` |
| `.page` | Page root — triggers `fadeSlideIn` entrance animation (400 ms) |
| `.project-card` | Project card — same animation, controlled by `animation-delay` |
| `.bullet-list` | `<ul>` with violet `·` pseudo-element bullets |
| `.bullet-list--pink` | Variant with pink bullets |
| `.timeline-dot` | Glowing violet circle for the experience timeline |
| `.timeline-line` | Gradient vertical line between timeline entries |
| `.dock-indicator` | Pulsing dot beneath the active dock item |

### shadcn/ui
- Only `Button` is installed (`src/components/ui/button.tsx`).
- Add new components via `npx shadcn@latest add <component>` — do not hand-write them.

---

## TypeScript Configuration

- **Strict mode**: `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` — all on.
- `erasableSyntaxOnly: true` — no `enum`, no `namespace`, no parameter properties.
- `verbatimModuleSyntax: true` — always use `import type` for type-only imports.
- Path alias: `@/` maps to `src/`. Use it for all cross-folder imports.

---

## Conventions

- Use `import type` for every type-only import.
- Keep domain types in `src/types/index.ts`; keep data in `src/data/`.
- Reuse CSS classes from `src/index.css` before adding inline Tailwind utilities.
- Do not weaken any tsconfig rule — do not add `// @ts-ignore` or `// eslint-disable`.
- Components are presentational; they receive typed props and render. No side-effects other than UI.
- Icons: use Lucide React for standard icons (`lucide-react`). For brand icons, add an SVG component to `src/components/icons/`.

---

## Vite — Custom Build Behaviour

`vite.config.ts` includes a custom **`htmlInjectPlugin`** that processes `index.html` at build time:

```html
<!-- include:html/seo/primary.html -->
```

These directives are replaced with the file contents of `html/seo/*.html`. To change `<title>`, `<meta>`, OG tags, or JSON-LD, **edit the files in `html/seo/`** — do not touch `index.html` itself.

---

## Agent-Discoverability Files

These files live in `public/` and are served as static assets:

| File | Purpose |
|---|---|
| `public/sitemap.xml` | XML sitemap — list all public pages; update `<lastmod>` when pages are added or removed |

---

## Change Playbooks

### Add or modify content (profile, skills, experience, projects, education, certifications)
1. Edit the relevant file in `src/data/`.
2. Update `<lastmod>` in `public/sitemap.xml` to today's date (YYYY-MM-DD).
3. Run `yarn typecheck && yarn lint && yarn build`.

### Add a new page/section
1. Add the new `PageId` to the union in `src/types/index.ts`.
2. Create a page component in `src/components/`.
3. Add the nav entry to `DOCK_ITEMS` in `src/components/Dock.tsx`.
4. Wire the conditional render in `src/App.tsx`.
5. If the section has new data shape, add a type to `src/types/index.ts` and a data file to `src/data/`.
6. Update `public/sitemap.xml`.

### Add an SEO/meta change
- Edit the relevant file in `html/seo/` (not `index.html`).
- Files: `primary.html` (title/description/canonical), `og.html` (OG), `twitter.html` (Twitter Card), `icons.html` (favicons), `jsonld.html` (JSON-LD Person schema).

### Modify advanced visual effects
- **`LiquidEther.tsx`** — Three.js fluid sim (1 250 lines). Avoid refactoring. Only adjust the props passed in `App.tsx` (`colors`, `resolution`, `autoResumeDelay`). Keep `resolution={0.3}` on desktop, lower on mobile.
- **`GlassSurface.tsx`** — SVG `feDisplacementMap` glass effect (380 lines). Only adjust props at call sites. Never restructure the filter pipeline.
- **`GradientText.tsx`** — Framer Motion animated gradient. Safe to adjust `colors`, `animationSpeed`, `direction` props.
- Always check `useIsMobile` (breakpoint: 640 px) to verify mobile behaviour is preserved.

### Add a shadcn/ui component
```bash
npx shadcn@latest add <component-name>
```
This scaffolds into `src/components/ui/`. Do not hand-write shadcn components.

---

## High-Risk Files — Treat with Care

| File | Risk | Why |
|---|---|---|
| `src/components/LiquidEther.tsx` | 🔴 HIGH | 1 250-line Three.js simulation; global perf impact |
| `src/components/GlassSurface.tsx` | 🔴 HIGH | Complex SVG filter pipeline; visual regressions are subtle |
| `src/index.css` | 🟡 MEDIUM | Many components depend on the CSS class names defined here |
| `src/types/index.ts` | 🟡 MEDIUM | Type changes ripple through all components and data files |

---

## Guardrails

- **No router.** Navigation is state-driven by design.
- **No new CSS frameworks.** Tailwind v4 is the only styling layer.
- **No new state managers.** `useState` / `useReducer` are sufficient.
- **No test runner.** There is no Vitest/Jest setup; do not assume one exists.
- **No `any` types.** The codebase has strict TS — use proper types or generics.
- **No light theme.** The design is dark-only; `theme-provider.tsx` enforces this.
- **Yarn only.** The repo uses Yarn 4 Berry; never run `npm install` or `pnpm install`.

---

## If Unsure, Follow These Examples

| Task | Reference file |
|---|---|
| New section component | `src/components/SkillsGrid.tsx` |
| New page component | `src/components/ProjectsPage.tsx` |
| New data file | `src/data/skills.ts` |
| New domain type | `src/types/index.ts` |
| shadcn/ui primitive | `src/components/ui/button.tsx` |
| Root wiring | `src/App.tsx` |
