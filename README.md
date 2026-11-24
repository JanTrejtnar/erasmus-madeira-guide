# Madeira Erasmus Guide

Student-made, bilingual (EN/CS) knowledge base for Erasmus+ students at the University of Madeira (UMa), Funchal.
Vite + React + TypeScript + Tailwind v4, offline PWA, deployed to GitHub Pages.

```bash
npm install
npm run dev     # local dev server
npm test        # content validation
npm run build   # typecheck + production build
```

**Editing content:** everything lives in `src/content/` (`categories.ts`, `guides/*.ts`, `faq.ts`, `contacts.ts`, `links.ts`).
Every text is `{ cs, en }`. Unverified facts are marked `TODO: ověřit` / `verifiedAt: null`.

**Deploy:** enable *Settings → Pages → Source: GitHub Actions*; every push to `main` deploys.
