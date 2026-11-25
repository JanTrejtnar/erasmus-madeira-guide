# Project rules (Erasmus Madeira Guide)

- All content is bilingual `{cs, en}` (EN default). Never ship a one-language string.
- Every guide uses the full UI toolkit where relevant: TL;DR card, callouts (tip/warning/danger/info), comparison tables, `ActionLink` buttons (maps/web/phone/copy).
- External URLs live only in `src/content/links.ts` (guides reference them by `linkId`).
- Anything unverified is marked `TODO: ověřit` / `TODO: verify` and the guide keeps `verifiedAt: null`. Never invent bus line numbers, prices or addresses.
- Run `npm test` and `npm run build` before pushing.
- Git: commit and push straight to `main`. No pull requests.
