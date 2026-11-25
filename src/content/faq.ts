import type { FaqItem } from './types';

export const faq: FaqItem[] = [
  {
    id: 'faq-pay-bus',
    q: { cs: 'Jak zaplatím v autobuse?', en: 'How do I pay on the bus?' },
    a: {
      cs: 'U řidiče jen hotově, nebo kartou GIRO s kreditem (levnější). TODO: ověřit ceny.',
      en: 'Cash only on board, or a GIRO card with credit (cheaper). TODO: verify prices.',
    },
    guideId: 'giro-cards',
  },
  {
    id: 'faq-student-free',
    q: { cs: 'Mám jako student dopravu zdarma?', en: 'Is public transport free for students?' },
    a: {
      cs: 'Vysokoškoláci do 23 let včetně ano (sub23). Nad 23 let ne. TODO: ověřit podmínky pro Erasmus studenty.',
      en: 'Higher-ed students up to and including 23, yes (sub23). Over 23, no. TODO: verify conditions for Erasmus students.',
    },
    guideId: 'giro-cards',
  },
  {
    id: 'faq-airport',
    q: { cs: 'Jak se dostanu z letiště do Funchalu?', en: 'How do I get from the airport to Funchal?' },
    a: {
      cs: 'Aerobus (SIGA), nebo taxi/Bolt. TODO: ověřit cenu a časy.',
      en: 'Aerobus (SIGA), or taxi/Bolt. TODO: verify price and times.',
    },
    guideId: 'airport-aerobus',
  },
  {
    id: 'faq-timetables',
    q: { cs: 'Kde najdu jízdní řády?', en: 'Where do I find bus timetables?' },
    a: {
      cs: 'V aplikaci Madeira Timetables a na webu SIGA.',
      en: 'In the Madeira Timetables app and on the SIGA website.',
    },
    guideId: 'buses-timetables',
  },
];
