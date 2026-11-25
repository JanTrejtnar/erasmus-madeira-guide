import type { FaqItem } from './types';

export const faq: FaqItem[] = [
  {
    id: 'faq-pay-bus',
    q: { cs: 'Jak zaplatím v autobuse?', en: 'How do I pay on the bus?' },
    a: {
      cs: 'U řidiče jen hotově, nebo kartou GIRO s kreditem (levnější). Hotově 2,05 / 2,65 €, předplaceně 1,50 / 2,00 €.',
      en: 'Cash only on board, or a GIRO card with credit (cheaper). Cash €2.05 / €2.65, prepaid €1.50 / €2.00.',
    },
    guideId: 'giro-cards',
  },
  {
    id: 'faq-student-free',
    q: { cs: 'Mám jako student dopravu zdarma?', en: 'Is public transport free for students?' },
    a: {
      cs: 'Erasmus studenti mají nárok na sub23 zdarma (do 23 let). Pozor na měsíc 23. narozenin. Nad 23 let: TODO: ověřit slevu.',
      en: 'Erasmus students are entitled to free sub23 (up to 23). Watch the month of your 23rd birthday. Over 23: TODO: verify the discount.',
    },
    guideId: 'giro-cards',
  },
  {
    id: 'faq-airport',
    q: { cs: 'Jak se dostanu z letiště do Funchalu?', en: 'How do I get from the airport to Funchal?' },
    a: {
      cs: 'Aerobus (zhruba 7 €), jiné autobusové linky na letiště nebo taxi/Bolt. TODO: ověřit cenu a časy.',
      en: 'Aerobus (roughly €7), other airport bus lines, or taxi/Bolt. TODO: verify price and times.',
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
