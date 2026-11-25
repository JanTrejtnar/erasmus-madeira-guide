import type { Guide } from '../types';

export const busesTimetables: Guide = {
  id: 'buses-timetables',
  slug: 'buses-timetables',
  categoryId: 'transport',
  title: { cs: 'Městské a meziměstské autobusy, jízdní řády', en: 'City & intercity buses, timetables' },
  summary: {
    cs: 'Jak se orientovat v síti SIGA, kde jsou terminály a kde najít aktuální jízdní řády.',
    en: 'How to make sense of the SIGA network, where the terminals are and where to find live timetables.',
  },
  tags: [
    { cs: 'jízdní řády', en: 'timetables' },
    { cs: 'meziměstské', en: 'intercity' },
    { cs: 'terminál', en: 'terminal' },
    { cs: 'trasa', en: 'route planner' },
  ],
  verifiedAt: null,
  tldr: {
    price: { cs: 'Viz Karty GIRO a jízdné', en: 'See GIRO cards & fares' },
    where: { cs: 'Jízdní řády a lokace zastávek primárně v aplikaci Madeira Timetables', en: 'Timetables and stop locations primarily in the Madeira Timetables app' },
    bring: { cs: 'Kartu GIRO nebo drobné', en: 'GIRO card or coins' },
    time: { cs: 'Frekvence a noční provoz: TODO: ověřit', en: 'Frequency and night service: TODO: verify' },
    primaryAction: { kind: 'web', label: { cs: 'Madeira Timetables', en: 'Madeira Timetables' }, linkId: 'madeira-timetables' },
  },
  blocks: [
    { type: 'section', id: 'city-vs-intercity', title: { cs: 'Městské vs. meziměstské', en: 'City vs. intercity' } },
    {
      type: 'table',
      head: [
        { cs: 'Srovnání', en: 'Comparison' },
        { cs: 'Městské (Funchal)', en: 'City (Funchal)' },
        { cs: 'Meziměstské', en: 'Intercity' },
      ],
      rows: [
        [
          { cs: 'Jízdné hotově', en: 'Cash fare' },
          { cs: '2,05 €', en: '€2.05' },
          { cs: '2,65 €', en: '€2.65' },
        ],
        [
          { cs: 'Provozovatel', en: 'Operator' },
          { cs: 'Horários do Funchal', en: 'Horários do Funchal' },
          { cs: 'CAM, Siga Rodoeste (a další, TODO: ověřit)', en: 'CAM, Siga Rodoeste (and others, TODO: verify)' },
        ],
        [
          { cs: 'Karta', en: 'Card' },
          { cs: 'GIRO', en: 'GIRO' },
          { cs: 'GIRO (jedna karta pro celou síť)', en: 'GIRO (one card for the whole network)' },
        ],
      ],
    },
    {
      type: 'callout',
      kind: 'info',
      text: {
        cs: 'Čísla linek ke škole, na pláže a do hor záměrně nevypisuji, dokud je nepotvrdíme. TODO: ověřit linky z centra na kampus Penteada.',
        en: 'Line numbers to the university, beaches and mountains are intentionally left out until confirmed. TODO: verify the lines from the centre to the Penteada campus.',
      },
    },
    { type: 'section', id: 'timetables', title: { cs: 'Jízdní řády a plánování', en: 'Timetables & planning' } },
    {
      type: 'list',
      items: [
        { cs: 'Madeira Timetables (primární zdroj): studentská aplikace s jízdními řády a lokacemi zastávek.', en: 'Madeira Timetables (primary source): a student-made app with timetables and stop locations.' },
        { cs: 'Oficiální jízdní řády v PDF na webu SIGA.', en: 'Official PDF timetables on the SIGA website.' },
        { cs: 'Google Maps pro plánování trasy ve Funchalu.', en: 'Google Maps for route planning in Funchal.' },
        { cs: 'Rome2Rio jako doplněk pro srovnání tras po ostrově.', en: 'Rome2Rio as a supplement for comparing routes across the island.' },
      ],
    },
    {
      type: 'callout',
      kind: 'warning',
      title: { cs: 'Pozor', en: 'Heads up' },
      text: {
        cs: 'Jízdní řády se mění podle sezóny a svátků. Před delší cestou (hlavně večer a o víkendu) zkontroluj oficiální řád SIGA.',
        en: 'Timetables change with the season and public holidays. Before a longer trip (especially evenings and weekends) check the official SIGA schedule.',
      },
    },
    {
      type: 'actions',
      items: [
        { kind: 'web', label: { cs: 'Madeira Timetables (naše aplikace)', en: 'Madeira Timetables (our app)' }, linkId: 'madeira-timetables' },
        { kind: 'web', label: { cs: 'Oficiální web SIGA', en: 'Official SIGA website' }, linkId: 'siga' },
        { kind: 'web', label: { cs: 'Horários do Funchal', en: 'Horários do Funchal' }, linkId: 'horarios-funchal' },
        { kind: 'web', label: { cs: 'Google Maps – Funchal', en: 'Google Maps – Funchal' }, linkId: 'google-maps-funchal' },
        { kind: 'web', label: { cs: 'Rome2Rio', en: 'Rome2Rio' }, linkId: 'rome2rio' },
        { kind: 'maps', label: { cs: 'Terminál Avenida do Mar (TODO: ověřit)', en: 'Avenida do Mar terminal (TODO: verify)' }, query: 'Avenida do Mar Funchal terminal autocarros' },
        { kind: 'maps', label: { cs: 'Teleférico / Almirante Reis (TODO: ověřit)', en: 'Teleférico / Almirante Reis (TODO: verify)' }, query: 'Teleférico do Funchal Almirante Reis paragem' },
      ],
    },
  ],
  related: ['giro-cards', 'airport-aerobus'],
};
