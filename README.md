## Project Overview

A single-page portfolio website built with Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS 4, Three.js, and Framer Motion. All content is static — no backend or API calls.

## Commands

```bash
yarn dev        # Start dev server
yarn build      # Production build
yarn lint       # ESLint (includes TypeScript + Prettier checks)
yarn format     # Format with Prettier
```

Package manager is **Yarn 4.12.0**.

## Architecture

- **Single page**: `src/app/page.tsx` is the only route. Navigation uses anchor links (#about-me, #skills, #projects).
- **Component layers**: `components/layout/` (Header, Footer, MobileHeader), `components/main/` (Hero, Skill, Project, StarBackground), `components/ui/` (reusable pieces like KeyCap, Tooltip, ProjectCard).
- **3D rendering**: Three.js via `@react-three/fiber` and `@react-three/drei`. Used in `StarBackground.tsx` (animated star field) and `KeyCap.tsx` (interactive 3D keycaps).
- **Animation**: Framer Motion for section transitions; reusable presets in `utils/motion.ts`. Custom `useTypingAnimation` hook in `hook/typing-animate.ts`. CSS keyframe animations in `globals.css`.
- **Static data**: All navigation items, skills, and projects defined in `constants/index.tsx`.
- **Assets**: Icons exported from `assets/icons/index.ts` (36+ tech icons). Images from `assets/images/index.ts`. Videos in `public/`.
- **Styling**: Tailwind utility classes + `cn()` helper (`utils/cn.ts` — clsx + tailwind-merge). Custom utilities defined via `@utility` in `globals.css`.
- **Path alias**: `@/*` maps to `./src/*` and `./public/*`.
