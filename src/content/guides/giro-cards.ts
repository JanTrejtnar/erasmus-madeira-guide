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
      cs: 'Karta GIRO bilhete cca 0,50 €, vydání GIRO passe 5 € (TODO: ověřit). U řidiče jen hotovost.',
      en: 'GIRO bilhete card approx. €0.50, GIRO passe issue fee €5 (TODO: verify). Cash only on board.',
    },
    where: {
      cs: 'Přepážky provozovatelů SIGA, agenti Payshop, automaty (TODO: ověřit konkrétní adresy ve Funchalu).',
      en: 'SIGA operator counters, Payshop agents, vending machines (TODO: verify exact addresses in Funchal).',
    },
    bring: {
      cs: 'Občanský průkaz/pas, fotografie, potvrzení o studiu z UMa (pro studentský pas).',
      en: 'ID/passport, photo, enrolment confirmation from UMa (for the student pass).',
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
          { cs: 'GIRO bilhete', en: 'GIRO bilhete' },
          { cs: 'Předplacené jednotlivé jízdy (nabíjíš si kredit). Jízda je levnější než hotově u řidiče. TODO: ověřit barvu karty.', en: 'Prepaid single trips (you top up credit). Cheaper per ride than cash on board. TODO: verify card colour.' },
          { cs: 'cca 0,50 € (TODO: ověřit)', en: 'approx. €0.50 (TODO: verify)' },
        ],
        [
          { cs: 'GIRO passe', en: 'GIRO passe' },
          { cs: 'Časové předplatné (měsíční) a studentský pas sub23. TODO: ověřit barvu karty.', en: 'Time-based subscription (monthly) and the sub23 student pass. TODO: verify card colour.' },
          { cs: 'vydání 5 € (TODO: ověřit)', en: 'issue fee €5 (TODO: verify)' },
        ],
      ],
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
          { cs: '2,00 €', en: '€2.00' },
          { cs: 'cca 1,45 €', en: 'approx. €1.45' },
        ],
        [
          { cs: 'Meziměstská linka', en: 'Intercity line' },
          { cs: '2,60 €', en: '€2.60' },
          { cs: 'cca 1,95 €', en: 'approx. €1.95' },
        ],
      ],
    },
    {
      type: 'callout',
      kind: 'info',
      text: {
        cs: 'Ceny jsou z ceníku SIGA, který se mění. TODO: ověřit aktuální hodnoty. Bezplatné přestupy a jejich časový limit: TODO: ověřit.',
        en: 'Prices come from the SIGA price list, which changes. TODO: verify current values. Free transfers and their time limit: TODO: verify.',
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
      type: 'callout',
      kind: 'warning',
      title: { cs: 'Pozor – věkový limit 23 let', en: 'Warning – age limit of 23' },
      text: {
        cs: 'Vysokoškoláci do 23 let včetně (program sub23@superior.tp) cestují veřejnou dopravou zdarma. Od 23 let výše na bezplatný tarif nárok nemáš a platíš běžné nebo případně zlevněné jízdné. TODO: ověřit, jaká konkrétní studentská sleva a podmínky platí pro Erasmus studenty starší 23 let, a zda mají Erasmus studenti na sub23 nárok vůbec.',
        en: 'Higher-education students up to and including age 23 (the sub23@superior.tp scheme) travel free on public transport. From 23 upwards you are not entitled to the free tariff and pay the regular or possibly a reduced fare. TODO: verify which student discount and conditions apply to Erasmus students over 23, and whether Erasmus students qualify for sub23 at all.',
      },
    },
    {
      type: 'steps',
      items: [
        { cs: 'Vyžádej si na UMa potvrzení o studiu (TODO: ověřit, kde a jak).', en: 'Get an enrolment confirmation from UMa (TODO: verify where and how).' },
        { cs: 'Požádej o kartu GIRO passe online na portálu SIGA, nebo na přepážce (občanský průkaz/pas, fotografie).', en: 'Apply for a GIRO passe on the SIGA portal or at a counter (ID/passport, photo).' },
        { cs: 'Zaplať vydání karty (cca 5 €, TODO: ověřit) a vyzvedni ji.', en: 'Pay the card issue fee (approx. €5, TODO: verify) and collect it.' },
      ],
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
        { kind: 'maps', label: { cs: 'Campo da Barca (TODO: ověřit)', en: 'Campo da Barca (TODO: verify)' }, query: 'Campo da Barca Funchal autocarros' },
        { kind: 'maps', label: { cs: 'Anadia (TODO: ověřit)', en: 'Anadia (TODO: verify)' }, query: 'Anadia Funchal paragem autocarros' },
      ],
    },
  ],
  related: ['buses-timetables', 'airport-aerobus'],
};
