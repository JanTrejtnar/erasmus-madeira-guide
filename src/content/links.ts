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
];

export const linkById = (id: string) => links.find((l) => l.id === id);
