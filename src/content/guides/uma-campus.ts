import type { Guide } from '../types';

export const umaCampus: Guide = {
  id: 'uma-campus',
  slug: 'uma-campus',
  categoryId: 'uma',
  title: { cs: 'Kampus: Penteada vs. Reitoria', en: 'Campus: Penteada vs. Reitoria' },
  summary: {
    cs: 'Kde co najdeš a kam jít první den.',
    en: 'Where to find what, and where to go on day one.',
  },
  tags: [
    { cs: 'kampus', en: 'campus' },
    { cs: 'Penteada', en: 'Penteada' },
  ],
  verifiedAt: null,
  tldr: {
    where: {
      cs: 'Campus da Penteada, Funchal (TODO: ověřit budovy)',
      en: 'Campus da Penteada, Funchal (TODO: verify buildings)',
    },
    time: { cs: 'TODO: ověřit', en: 'TODO: verify' },
    primaryAction: { kind: 'maps', label: { cs: 'Otevřít v Mapách', en: 'Open in Maps' }, query: 'Universidade da Madeira Campus da Penteada' },
  },
  blocks: [
    { type: 'section', id: 'overview', title: { cs: 'Přehled', en: 'Overview' } },
    {
      type: 'p',
      text: {
        cs: 'TODO: ověřit, co sídlí v Penteadě a co v Reitorii.',
        en: 'TODO: verify what is located at Penteada and what at the Reitoria.',
      },
    },
  ],
};
