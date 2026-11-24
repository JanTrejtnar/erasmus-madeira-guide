import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { L10n } from '../content/types';

export type Lang = 'en' | 'cs';
const KEY = 'emg:lang';

const read = (k: string) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* private mode */ } };

function detect(): Lang {
  const saved = read(KEY);
  if (saved === 'en' || saved === 'cs') return saved;
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('cs') || nav.startsWith('sk') ? 'cs' : 'en';
}

// UI chrome strings (content strings live in src/content as L10n).
export const ui = {
  appName: { cs: 'Madeira Erasmus Guide', en: 'Madeira Erasmus Guide' },
  appShort: { cs: 'Madeira Guide', en: 'Madeira Guide' },
  tagline: { cs: 'Průvodce od studentů pro studenty na UMa', en: 'A student-made guide for UMa Erasmus+ students' },
  heroTitle: { cs: 'Vítej na Madeiře 🌊', en: 'Welcome to Madeira 🌊' },
  searchPlaceholder: { cs: 'Hledej návody, autobusy, SIM…', en: 'Search guides, buses, SIM…' },
  topics: { cs: 'Témata', en: 'Topics' },
  home: { cs: 'Domů', en: 'Home' },
  search: { cs: 'Hledat', en: 'Search' },
  sos: { cs: 'SOS', en: 'SOS' },
  back: { cs: 'Zpět', en: 'Back' },
  guides: { cs: 'návodů', en: 'guides' },
  guide1: { cs: 'návod', en: 'guide' },
  comingSoon: { cs: 'Připravujeme', en: 'Coming soon' },
  verified: { cs: 'Ověřeno', en: 'Verified' },
  todoVerify: { cs: 'TODO: ověřit', en: 'TODO: verify' },
  price: { cs: 'Cena', en: 'Price' },
  where: { cs: 'Kde', en: 'Where' },
  bring: { cs: 'Vezmi s sebou', en: 'Bring' },
  time: { cs: 'Čas', en: 'Time' },
  related: { cs: 'Související', en: 'Related' },
  noResults: { cs: 'Nic nenalezeno', en: 'No results' },
  faq: { cs: 'Časté dotazy', en: 'Quick answers' },
  emergency: { cs: 'Nouzové kontakty', en: 'Emergency contacts' },
  call: { cs: 'Volat', en: 'Call' },
  notFound: { cs: 'Stránka nenalezena', en: 'Page not found' },
  footer: { cs: 'Neoficiální průvodce. Údaje si ověř u oficiálních zdrojů.', en: 'Unofficial guide. Double-check details with official sources.' },
  theme: { cs: 'Změnit téma', en: 'Toggle theme' },
  language: { cs: 'Jazyk', en: 'Language' },
  copied: { cs: 'Zkopírováno', en: 'Copied' },
} satisfies Record<string, L10n>;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: L10n) => string };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detect);
  const setLang = useCallback((l: Lang) => { setLangState(l); write(KEY, l); }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const value = useMemo<Ctx>(() => ({ lang, setLang, t: (s) => s[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const c = useContext(LangContext);
  if (!c) throw new Error('useLang outside LangProvider');
  return c;
}
