import type { Contact } from './types';

export const contacts: Contact[] = [
  {
    id: 'emergency-112',
    label: { cs: 'Tísňová linka (policie, záchranka, hasiči)', en: 'Emergency (police, ambulance, fire)' },
    number: '112',
    emergency: true,
  },
  {
    id: 'uma-international-office',
    label: { cs: 'UMa – mezinárodní kancelář', en: 'UMa – International Office' },
    note: { cs: 'TODO: ověřit kontakt a otevírací dobu', en: 'TODO: verify contact and opening hours' },
  },
  {
    id: 'hospital',
    label: { cs: 'Nemocnice (Funchal)', en: 'Hospital (Funchal)' },
    note: { cs: 'TODO: ověřit název, adresu a telefon', en: 'TODO: verify name, address and phone' },
  },
  {
    id: 'embassy',
    label: { cs: 'Velvyslanectví / konzulát', en: 'Embassy / consulate' },
    note: { cs: 'TODO: ověřit pro svou zemi', en: 'TODO: verify for your country' },
  },
];
