# Portfolio

Himanshu Maithani's personal portfolio site.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (CSS-first, no `tailwind.config.js`)
- **Components**: shadcn/ui (Default style, Neutral base)
- **Animation**: Framer Motion 12
- **Icons**: Lucide React

## Commands

```bash
npm run dev        # start dev server (localhost:3000)
npm run build      # production build
npm run start      # start production server
npm run lint       # ESLint
npm run type-check # tsc --noEmit
```

## Structure

```
src/
  app/              # Next.js App Router — pages and layouts
  components/
    ui/             # shadcn/ui primitives (auto-generated, don't edit manually)
    sections/       # Page sections: Hero, About, Projects, Contact
    layout/         # Header, Footer, Nav
  data/             # Portfolio content as TypeScript constants
  lib/
    utils.ts        # cn() utility from shadcn
public/
  images/           # Static image assets
```

# Commit Rules
- Conventional commits: `type(scope): description`
- Imperative mood, under 72 chars, no period
- One logical change per commit
- Types: feat, fix, style, refactor, docs, test, chore
- Breaking change: `feat!: description`
- No `Co-Authored-By` lines

## Conventions

- No comments unless the why is non-obvious
- No emojis in code or copy unless explicitly requested
- Prefer editing existing files over creating new ones
- Keep components small and focused
- Add shadcn components with: `npx shadcn@latest add <component>`
