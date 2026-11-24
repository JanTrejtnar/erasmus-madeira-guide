import type { Guide } from '../types';

export const busCards: Guide = {
  id: 'bus-cards',
  slug: 'bus-cards',
  categoryId: 'transport',
  title: { cs: 'Karty GIRO / Navegante', en: 'GIRO / Navegante cards' },
  summary: {
    cs: 'Jak platit v autobusech a jak ušetřit s předplatnou kartou.',
    en: 'How to pay on buses and save money with a prepaid card.',
  },
  tags: [
    { cs: 'autobus', en: 'bus' },
    { cs: 'jízdenka', en: 'ticket' },
    { cs: 'MHD', en: 'public transport' },
  ],
  verifiedAt: null,
  tldr: {
    price: { cs: 'TODO: ověřit cenu karty a měsíčního pasu', en: 'TODO: verify card and monthly pass price' },
    where: { cs: 'TODO: ověřit prodejní místa', en: 'TODO: verify where to buy' },
    bring: { cs: 'TODO: ověřit (doklad, fotografie?)', en: 'TODO: verify (ID, photo?)' },
    time: { cs: 'TODO: ověřit', en: 'TODO: verify' },
    primaryAction: {
      kind: 'web',
      label: { cs: 'Horários do Funchal', en: 'Horários do Funchal' },
      linkId: 'horarios-funchal',
    },
  },
  blocks: [
    { type: 'section', id: 'basics', title: { cs: 'Základy', en: 'The basics' } },
    {
      type: 'p',
      text: {
        cs: 'Ve Funchalu fungují městské autobusy (Horários do Funchal) odděleně od meziměstských. TODO: ověřit, která karta platí kde.',
        en: 'City buses in Funchal (Horários do Funchal) run separately from intercity buses. TODO: verify which card works where.',
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: { cs: 'Pozor', en: 'Heads up' },
      text: {
        cs: 'TODO: ověřit, zda lze platit v hotovosti a za kolik.',
        en: 'TODO: verify whether you can pay cash on board and at what price.',
      },
    },
  ],
};
