# Portfolio — AI Engineering Manual

Himanshu Maithani's personal portfolio site.
This file is the source of truth for every Claude instance working on this repo.
Read it fully before touching any file.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 — CSS-first config, no `tailwind.config.js`
- **Components**: shadcn/ui (Default style, Neutral base) — add via `npx shadcn@latest add <component>`
- **Animation**: Framer Motion 12
- **Icons**: Lucide React, react-icons (SI + FA6 for brand/skill icons)

---

## Project Structure

```
src/
  app/              # Next.js App Router — pages and layouts
  components/
    ui/             # shadcn/ui primitives — never edit manually
    sections/       # Page sections: Hero, Experience, Projects, Skills, Education, Contact
                    # Each is a self-contained component; data comes from src/data/
    layout/         # Header, Footer, Nav
  data/             # Portfolio content as TypeScript constants — source of truth for copy
  lib/
    utils.ts        # cn() utility from shadcn — do not add unrelated helpers here
public/
  images/           # Static image assets
```

---

## Commands

```bash
npm run dev        # start dev server (localhost:3000)
npm run build      # production build
npm run start      # start production server
npm run lint       # ESLint
npm run type-check # tsc --noEmit
```

Always run `npm run type-check` and `npm run lint` before declaring work done.

---

## Multi-Agent Git Workflow

This repo uses a parallel agent model. Multiple Claude instances may be active simultaneously, each owning one branch and one scoped task.

### Branch naming

```
feature/<scope>     # new functionality
fix/<scope>         # bug fixes
refactor/<scope>    # internal restructuring, no behavior change
style/<scope>       # visual/CSS only
```

### Rules

- **One Claude instance = one branch = one scoped task.** No exceptions.
- Never work directly on `main`.
- Never touch files outside your assigned scope — if a change is needed elsewhere, flag it instead of making it.
- Before starting, run `git status` and `git branch` to confirm you're on the right branch.
- After completing work:
  - Summarize every file changed and why
  - Note any files you intentionally did not touch
  - Flag any potential merge conflicts with other active branches
  - Suggest a commit message

### Merge conflicts

Do not attempt to resolve conflicts in shared files (globals.css, layout.tsx, etc.) unilaterally. Flag them and stop.

### Worktree setup (for parallel local development)

```bash
git worktree add ../portfolio-<scope> feature/<scope>
```

Each worktree is a separate folder with its own branch — safe for simultaneous Claude sessions.

---

## Scope Rules (Critical)

These prevent agents from stepping on each other.

- Work **only** on files directly related to your assigned task
- **Never** modify these without explicit instruction:
  - `src/app/globals.css`
  - `src/app/layout.tsx`
  - `src/lib/utils.ts`
  - `src/components/ui/*` (shadcn primitives)
- **Never** refactor code outside your scope, even if it looks improvable
- **Never** create new components or files without confirming first — prefer extending existing ones
- If you notice a bug outside your scope, document it in your summary instead of fixing it

---

## Design Philosophy

- Minimal, premium, developer-focused aesthetic
- Prefer whitespace and typography over decorative effects
- No heavy animations unless explicitly requested — Framer Motion for subtle transitions only
- Images should integrate into layouts, not dominate them
- Dark/light mode must always be respected — never hardcode colors outside CSS variables
- All components must be responsive — mobile-first

---

## Code Conventions

- No comments unless the *why* is non-obvious
- No emojis in code or copy unless explicitly requested
- TypeScript strict — no `any`, no ignoring type errors
- Prefer editing existing files over creating new ones
- Keep components small and focused — one responsibility per component
- Data and copy live in `src/data/`, not hardcoded in components

---

## Commit Rules

- Conventional commits: `type(scope): description`
- Imperative mood, under 72 chars, no trailing period
- One logical change per commit
- Types: `feat`, `fix`, `style`, `refactor`, `docs`, `test`, `chore`
- Breaking change: `feat!: description`
- No `Co-Authored-By` lines