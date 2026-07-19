---
applyTo:
	- "src/components/LiquidEther.tsx"
	- "src/components/GlassSurface.tsx"
description: "Use when editing visual effects components. Preserve performance and stability in effect-heavy rendering code."
---

# Visual Effects Editing Rules

These files are performance-sensitive and easy to regress:

- [src/components/LiquidEther.tsx](src/components/LiquidEther.tsx)
- [src/components/GlassSurface.tsx](src/components/GlassSurface.tsx)

## Primary Goal

Keep behavior and performance stable while making the smallest possible change.

## Required Behavior

- Preserve existing cleanup paths for effects, observers, timers, and animation loops.
- Avoid changing rendering resolution, sampling, or blur/filter intensity defaults unless explicitly requested.
- Keep mobile safeguards intact; do not remove conditional logic that reduces work on smaller devices.
- Prefer incremental edits to existing logic over rewrites.

## Safety Checklist

1. Verify event listeners/observers are not duplicated.
2. Verify each `useEffect` has correct dependency and cleanup behavior.
3. Keep fallback behavior for browsers lacking advanced filter support.
4. Run `yarn typecheck` and `yarn build` after edits.

## Out Of Scope Unless Asked

- Introducing new rendering libraries.
- Converting architecture patterns (for example to a different animation model).
- Broad style refactors unrelated to the requested change.
