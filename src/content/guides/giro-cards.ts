import type { Guide } from '../types';

export const giroCards: Guide = {
  id: 'giro-cards',
  slug: 'giro-cards',
  categoryId: 'transport',
  title: { cs: 'Karty GIRO a jízdné', en: 'GIRO cards & fares' },
  summary: {
    cs: 'Jak platit v autobusech SIGA, kolik to stojí a jak získat studentský pas (zdarma do 23 let).',
    en: 'How to pay on SIGA buses, what it costs and how to get the student pass (free up to 23).',
  },
  tags: [
    { cs: 'GIRO', en: 'GIRO' },
    { cs: 'jízdenka', en: 'ticket' },
    { cs: 'studentský pas', en: 'student pass' },
    { cs: 'sub23', en: 'sub23' },
    { cs: 'SIGA', en: 'SIGA' },
  ],
  verifiedAt: null,
  tldr: {
    price: {
      cs: 'Modrá karta (jízdy) 0,50 €, žlutá (předplatné) 5 €. Hotově u řidiče 2,05 € / 2,65 €, předplaceně 1,50 € / 2,00 €.',
      en: 'Blue card (trips) €0.50, yellow card (pass) €5. Cash on board €2.05 / €2.65, prepaid €1.50 / €2.00.',
    },
    where: {
      cs: 'Přepážky provozovatelů SIGA, agenti Payshop, automaty (TODO: ověřit konkrétní adresy ve Funchalu).',
      en: 'SIGA operator counters, Payshop agents, vending machines (TODO: verify exact addresses in Funchal).',
    },
    bring: {
      cs: 'Občanský průkaz/pas, fyzická portrétová fotka, vytištěné potvrzení o studiu z UMa (pro studentský pas).',
      en: 'ID/passport, a physical portrait photo, printed enrolment confirmation from UMa (for the student pass).',
    },
    time: { cs: 'TODO: ověřit dobu vyřízení karty', en: 'TODO: verify how long the card takes' },
    primaryAction: { kind: 'web', label: { cs: 'Portál SIGA', en: 'SIGA portal' }, linkId: 'siga' },
  },
  blocks: [
    { type: 'section', id: 'system', title: { cs: 'Jak systém funguje', en: 'How the system works' } },
    {
      type: 'p',
      text: {
        cs: 'Od července 2024 jezdí městské i meziměstské autobusy na Madeiře v jednotné síti SIGA (provozovatelé Horários do Funchal, CAM a Siga Rodoeste; správce TiiM). Platí jedna karta GIRO. Staré předplacené karty Horários do Funchal už v autobusech nefungují.',
        en: 'Since July 2024 city and intercity buses on Madeira run as one network, SIGA (operators Horários do Funchal, CAM and Siga Rodoeste; managed by TiiM). One GIRO card works everywhere. Old Horários do Funchal prepaid cards no longer work on buses.',
      },
    },
    {
      type: 'table',
      head: [
        { cs: 'Karta', en: 'Card' },
        { cs: 'K čemu slouží', en: 'What it is for' },
        { cs: 'Cena karty', en: 'Card price' },
      ],
      rows: [
        [
          { cs: 'Modrá GIRO', en: 'Blue GIRO' },
          { cs: 'Jízdy: nabíjíš si kredit a platíš jednotlivé jízdy levněji než hotově.', en: 'Trips: you top up credit and pay single rides cheaper than cash.' },
          { cs: '0,50 €', en: '€0.50' },
        ],
        [
          { cs: 'Žlutá GIRO', en: 'Yellow GIRO' },
          { cs: 'Časová karta / předplatné (měsíční, studentský pas sub23).', en: 'Time-based card / subscription (monthly, sub23 student pass).' },
          { cs: '5 €', en: '€5' },
        ],
      ],
    },
    {
      type: 'callout',
      kind: 'warning',
      title: { cs: 'Pozor – město vs. ostrov', en: 'Heads up – city vs. island' },
      text: {
        cs: 'Rozlišuje se tarif pro město (Funchal) a tarif pro celý ostrov, a to i u předplacených karet. Pokud chceš cestovat po městě i po ostrově, potřebuješ dvě karty.',
        en: 'There is a separate tariff for the city (Funchal) and for the whole island, including on prepaid cards. If you want both city and island travel you need two cards.',
      },
    },
    { type: 'section', id: 'fares', title: { cs: 'Jízdné', en: 'Fares' } },
    {
      type: 'table',
      head: [
        { cs: 'Typ jízdy', en: 'Trip type' },
        { cs: 'Hotově u řidiče', en: 'Cash on board' },
        { cs: 'Předplacené GIRO', en: 'Prepaid GIRO' },
      ],
      rows: [
        [
          { cs: 'Městská linka (Funchal)', en: 'City line (Funchal)' },
          { cs: '2,05 €', en: '€2.05' },
          { cs: '1,50 €', en: '€1.50' },
        ],
        [
          { cs: 'Meziměstská linka', en: 'Intercity line' },
          { cs: '2,65 €', en: '€2.65' },
          { cs: '2,00 €', en: '€2.00' },
        ],
      ],
    },
    {
      type: 'callout',
      kind: 'info',
      text: {
        cs: 'Bezplatné přestupy a jejich časový limit: TODO: ověřit. Ceníky se čas od času mění, hlídej aktuální ceník SIGA.',
        en: 'Free transfers and their time limit: TODO: verify. Price lists change from time to time, check the current SIGA list.',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      text: {
        cs: 'U řidiče platíš jen hotově a bez možnosti platit kartou. Nech si drobné, nebo si předem nabij GIRO.',
        en: 'On board you can pay with cash only, not by card. Carry coins, or top up your GIRO in advance.',
      },
    },
    { type: 'section', id: 'student', title: { cs: 'Studentský pas sub23', en: 'Student pass (sub23)' } },
    {
      type: 'p',
      text: {
        cs: 'Erasmus studenti mají nárok na studentský pas sub23 a cestují zdarma (vysokoškoláci do 23 let). Potvrzení o studiu posílá a zajišťuje UMa.',
        en: 'Erasmus students are entitled to the sub23 student pass and travel free (higher-education students up to 23). UMa sends and arranges the enrolment confirmation.',
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: { cs: '⚠️ Pozor – 23. narozeniny', en: '⚠️ Warning – your 23rd birthday' },
      text: {
        cs: 'Pokud ti 23 let skončí (dovršíš je) v měsíci, kdy kartu zařizuješ, může se stát, že systém nepovolí ani bezplatný sub23, ani tarif 23+. Řeš to s předstihem a případně se obrať na přepážku SIGA / UMa.',
        en: 'If you turn 23 in the month you are arranging the card, the system may allow neither the free sub23 nor the 23+ tariff. Sort it out well in advance and, if needed, contact a SIGA counter / UMa.',
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: { cs: 'Studenti nad 23 let', en: 'Students over 23' },
      text: {
        cs: 'Od 23 let výše se bezplatný tarif neuplatní, jde o rozdíl oproti sub23 zdarma. TODO: ověřit konkrétní studentskou slevu a podmínky pro Erasmus studenty 23+.',
        en: 'From 23 upwards the free tariff does not apply, which is a real difference from free sub23. TODO: verify the exact student discount and conditions for Erasmus students aged 23+.',
      },
    },
    {
      type: 'steps',
      items: [
        { cs: 'UMa ti zajistí a pošle potvrzení o studiu. Vytiskni si ho (TODO: ověřit přesný postup a termín).', en: 'UMa arranges and sends you the enrolment confirmation. Print it (TODO: verify the exact process and timing).' },
        { cs: 'Přines fyzickou portrétovou fotku. Lze ji vytisknout nebo nechat vyfotit v copy centru v Anadia Shopping (cca 5 €).', en: 'Bring a physical portrait photo. You can have it printed or taken at the copy centre in Anadia Shopping (approx. €5).' },
        { cs: 'S dokladem totožnosti, fotkou a vytištěným potvrzením požádej o žlutou kartu GIRO (5 €) na portálu SIGA nebo na přepážce.', en: 'With ID, the photo and the printed confirmation, apply for the yellow GIRO card (€5) on the SIGA portal or at a counter.' },
      ],
    },
    {
      type: 'callout',
      kind: 'tip',
      text: {
        cs: 'Fotku a vytištěné potvrzení měj u sebe už při první návštěvě přepážky, ušetříš si druhou cestu.',
        en: 'Have the photo and the printed confirmation with you on your first visit to the counter, so you do not need a second trip.',
      },
    },
    { type: 'section', id: 'where', title: { cs: 'Kde koupit a dobít', en: 'Where to buy and top up' } },
    {
      type: 'list',
      items: [
        { cs: 'Přepážky provozovatelů sítě SIGA', en: 'Counters of the SIGA network operators' },
        { cs: 'Prodejny Payshop', en: 'Payshop agents' },
        { cs: 'Automaty na jízdenky (rozšiřuje se i na letišti, TODO: ověřit)', en: 'Ticket vending machines (also being added at the airport, TODO: verify)' },
      ],
    },
    {
      type: 'actions',
      items: [
        { kind: 'web', label: { cs: 'Portál SIGA', en: 'SIGA portal' }, linkId: 'siga' },
        { kind: 'web', label: { cs: 'Ceník a FAQ SIGA', en: 'SIGA prices & FAQ' }, linkId: 'siga-faq' },
        { kind: 'web', label: { cs: 'Horários do Funchal', en: 'Horários do Funchal' }, linkId: 'horarios-funchal' },
        { kind: 'maps', label: { cs: 'Přepážka SIGA – Avenida do Mar (TODO: ověřit)', en: 'SIGA counter – Avenida do Mar (TODO: verify)' }, query: 'Avenida do Mar Funchal terminal autocarros' },
        { kind: 'maps', label: { cs: 'Copy centrum – Anadia Shopping (fotka)', en: 'Copy centre – Anadia Shopping (photo)' }, query: 'Anadia Shopping Funchal' },
        { kind: 'web', label: { cs: 'Madeira Timetables (lokace a řády)', en: 'Madeira Timetables (locations & timetables)' }, linkId: 'madeira-timetables' },
        { kind: 'maps', label: { cs: 'Campo da Barca (TODO: ověřit)', en: 'Campo da Barca (TODO: verify)' }, query: 'Campo da Barca Funchal autocarros' },
        { kind: 'maps', label: { cs: 'Anadia (TODO: ověřit)', en: 'Anadia (TODO: verify)' }, query: 'Anadia Funchal paragem autocarros' },
      ],
    },
  ],
  related: ['buses-timetables', 'airport-aerobus'],
};
