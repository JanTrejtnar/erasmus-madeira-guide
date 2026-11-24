import type { Category } from './types';

// Tiles on the home page. `icon` = lucide icon name (see components/Icon.tsx).
export const categories: Category[] = [
  {
    id: 'transport', icon: 'Bus', order: 1,
    title: { cs: 'Autobusy a doprava', en: 'Buses & transport' },
    summary: { cs: 'Karty, městské i meziměstské spoje, letiště.', en: 'Cards, city and intercity buses, the airport.' },
    guideIds: ['bus-cards'],
  },
  {
    id: 'uma', icon: 'GraduationCap', order: 2,
    title: { cs: 'Škola / UMa', en: 'University / UMa' },
    summary: { cs: 'Kampus, InfoAlunos, zápis a známkování.', en: 'Campus, InfoAlunos, enrolment and grading.' },
    guideIds: ['uma-campus'],
  },
  {
    id: 'housing', icon: 'Home', order: 3,
    title: { cs: 'Ubytování', en: 'Housing' },
    summary: { cs: 'Jak hledat, na co si dát pozor, kauce.', en: 'How to search, what to watch out for, deposits.' },
    guideIds: [],
  },
  {
    id: 'shops', icon: 'ShoppingCart', order: 4,
    title: { cs: 'Obchody', en: 'Shops' },
    summary: { cs: 'Pingo Doce, Continente, Anadia a ceny.', en: 'Pingo Doce, Continente, Anadia and prices.' },
    guideIds: [],
  },
  {
    id: 'sim-bank', icon: 'Smartphone', order: 5,
    title: { cs: 'SIM & Banka', en: 'SIM & Bank' },
    summary: { cs: 'SIM / eSIM, Revolut a bankovní účet.', en: 'SIM / eSIM, Revolut and bank accounts.' },
    guideIds: [],
  },
  {
    id: 'hiking', icon: 'Mountain', order: 6,
    title: { cs: 'Hory & Výlety', en: 'Hiking & Trips' },
    summary: { cs: 'Levády, bezpečnost, mikroklima, aplikace.', en: 'Levadas, safety, microclimates, apps.' },
    guideIds: [],
  },
  {
    id: 'documents', icon: 'FileText', order: 7,
    title: { cs: 'Dokumenty', en: 'Documents' },
    summary: { cs: 'Learning Agreement, pojištění, EHIC.', en: 'Learning Agreement, insurance, EHIC.' },
    guideIds: [],
  },
  {
    id: 'sos', icon: 'Siren', order: 8,
    title: { cs: 'Nouzové kontakty', en: 'Emergency contacts' },
    summary: { cs: 'Čísla, která potřebuješ rychle.', en: 'Numbers you need fast.' },
    guideIds: [],
  },
];
export const categoryById = (id: string) => categories.find((c) => c.id === id);
