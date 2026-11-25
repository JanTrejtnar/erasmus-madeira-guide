import type { LinkEntry } from './types';

// Single registry of external URLs. Fix a broken link here, once.
export const links: LinkEntry[] = [
  {
    id: 'uma',
    url: 'https://www.uma.pt/',
    label: { cs: 'Univerzita Madeiry (UMa)', en: 'University of Madeira (UMa)' },
    official: true,
  },
  {
    id: 'horarios-funchal',
    url: 'https://www.horariosdofunchal.pt/',
    label: { cs: 'Horários do Funchal (městské autobusy)', en: 'Horários do Funchal (city buses)' },
    official: true,
  },
  {
    id: 'siga',
    url: 'https://siga.madeira.gov.pt/',
    label: { cs: 'SIGA – autobusová síť Madeiry', en: 'SIGA – Madeira bus network' },
    official: true,
  },
  {
    id: 'siga-faq',
    url: 'https://siga.madeira.gov.pt/public/faq',
    label: { cs: 'SIGA – FAQ a ceník', en: 'SIGA – FAQ and prices' },
    official: true,
  },
  {
    id: 'madeira-timetables',
    url: 'https://madeira-timetables.honza-trejtnar.workers.dev/',
    label: { cs: 'Madeira Timetables (jízdní řády)', en: 'Madeira Timetables (bus schedules)' },
    official: false,
  },
  {
    id: 'google-maps-funchal',
    url: 'https://www.google.com/maps/place/Funchal',
    label: { cs: 'Google Maps – Funchal', en: 'Google Maps – Funchal' },
    official: false,
  },
  {
    id: 'rome2rio',
    url: 'https://www.rome2rio.com/',
    label: { cs: 'Rome2Rio (plánovač tras)', en: 'Rome2Rio (route planner)' },
    official: false,
  },
];

export const linkById = (id: string) => links.find((l) => l.id === id);
