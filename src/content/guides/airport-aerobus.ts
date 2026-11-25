import type { Guide } from '../types';

export const airportAerobus: Guide = {
  id: 'airport-aerobus',
  slug: 'airport-aerobus',
  categoryId: 'transport',
  title: { cs: 'Z letiště FNC do Funchalu (Aerobus)', en: 'From FNC airport to Funchal (Aerobus)' },
  summary: {
    cs: 'Aerobus spojuje letiště Madeira s centrem Funchalu a hotelovou zónou. Cena, zastávky a alternativy.',
    en: 'The Aerobus links Madeira airport with central Funchal and the hotel zone. Price, stops and alternatives.',
  },
  tags: [
    { cs: 'letiště', en: 'airport' },
    { cs: 'Aerobus', en: 'Aerobus' },
    { cs: 'taxi', en: 'taxi' },
  ],
  verifiedAt: null,
  tldr: {
    price: { cs: 'Předplacená jízda cca 5,55 € (TODO: ověřit), u řidiče hotově', en: 'Prepaid ticket approx. €5.55 (TODO: verify), cash on board' },
    where: { cs: 'Stanoviště před halou příletů (TODO: ověřit)', en: 'Stop outside arrivals (TODO: verify)' },
    bring: { cs: 'Hotovost nebo GIRO, zavazadla', en: 'Cash or GIRO, luggage' },
    time: { cs: 'Cesta do centra: TODO: ověřit; provoz zhruba brzy ráno až po půlnoci', en: 'Ride to centre: TODO: verify; runs roughly early morning to after midnight' },
    primaryAction: { kind: 'web', label: { cs: 'Jízdní řád Aerobusu (SIGA)', en: 'Aerobus timetable (SIGA)' }, linkId: 'siga' },
  },
  blocks: [
    { type: 'section', id: 'aerobus', title: { cs: 'Aerobus', en: 'Aerobus' } },
    {
      type: 'p',
      text: {
        cs: 'Aerobus je součástí sítě SIGA a jezdí mezi letištěm, centrem Funchalu a hotelovou zónou (Lido, Praia Formosa). Má kolem 24 zastávek. Do Caniça nejede.',
        en: 'The Aerobus is part of the SIGA network and runs between the airport, central Funchal and the hotel zone (Lido, Praia Formosa). It has around 24 stops. It does not go to Caniço.',
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: { cs: 'Pozor', en: 'Heads up' },
      text: {
        cs: 'Zdroje se rozcházejí v prvním a posledním spoji a frekvenci. Přesný čas si ověř v aktuálním řádu SIGA. TODO: ověřit.',
        en: 'Sources disagree on first/last departure and frequency. Check the exact time in the current SIGA timetable. TODO: verify.',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      text: {
        cs: 'Pokud máš GIRO s kreditem, vyjde jízda levněji než hotově. Na letišti přibývají automaty na jízdenky (TODO: ověřit).',
        en: 'With a topped-up GIRO the ride is cheaper than cash. Ticket machines are being added at the airport (TODO: verify).',
      },
    },
    { type: 'section', id: 'alternatives', title: { cs: 'Alternativy', en: 'Alternatives' } },
    {
      type: 'table',
      head: [
        { cs: 'Možnost', en: 'Option' },
        { cs: 'Orientační cena', en: 'Rough price' },
        { cs: 'Poznámka', en: 'Note' },
      ],
      rows: [
        [
          { cs: 'Aerobus', en: 'Aerobus' },
          { cs: 'cca 5,55 € (TODO: ověřit)', en: 'approx. €5.55 (TODO: verify)' },
          { cs: 'Nejlevnější, jede jen na zastávky', en: 'Cheapest, stops only at fixed stops' },
        ],
        [
          { cs: 'Taxi / Bolt', en: 'Taxi / Bolt' },
          { cs: 'TODO: ověřit', en: 'TODO: verify' },
          { cs: 'Přímo na adresu, vhodné s těžkými zavazadly', en: 'Door to door, good with heavy luggage' },
        ],
      ],
    },
    {
      type: 'actions',
      items: [
        { kind: 'web', label: { cs: 'Oficiální web SIGA', en: 'Official SIGA website' }, linkId: 'siga' },
        { kind: 'web', label: { cs: 'Madeira Timetables', en: 'Madeira Timetables' }, linkId: 'madeira-timetables' },
        { kind: 'web', label: { cs: 'Rome2Rio', en: 'Rome2Rio' }, linkId: 'rome2rio' },
        { kind: 'maps', label: { cs: 'Letiště Madeira (FNC)', en: 'Madeira Airport (FNC)' }, query: 'Aeroporto da Madeira FNC' },
        { kind: 'maps', label: { cs: 'Zastávka Aerobusu u letiště (TODO: ověřit)', en: 'Aerobus stop at the airport (TODO: verify)' }, query: 'Aeroporto da Madeira paragem Aerobus' },
      ],
    },
  ],
  related: ['giro-cards', 'buses-timetables'],
};
