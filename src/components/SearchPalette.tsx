import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ui, useLang } from '../lib/i18n';
import { search } from '../lib/search';

const Ctx = createContext<{ open: () => void } | null>(null);
export const useSearchPalette = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error('no palette');
  return c;
};

export function SearchPaletteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const typing = /input|textarea/i.test((e.target as HTMLElement)?.tagName ?? '');
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((o) => !o); }
      else if (e.key === '/' && !typing) { e.preventDefault(); setOpen(true); }
      else if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && <Palette onClose={() => setOpen(false)} />}
    </Ctx.Provider>
  );
}

function Palette({ onClose }: { onClose: () => void }) {
  const { t, lang } = useLang();
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => ref.current?.focus(), []);
  const hits = useMemo(() => (q.trim() ? search(q, lang) : []), [q, lang]);
  const go = (to: string) => { onClose(); nav(to); };
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[10vh]" onMouseDown={onClose}>
      <div role="dialog" aria-modal="true" className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-xl" onMouseDown={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search size={18} className="text-muted" aria-hidden="true" />
          <input ref={ref} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, hits.length - 1)); }
              if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
              if (e.key === 'Enter' && hits[idx]) go(hits[idx].to);
            }}
            placeholder={t(ui.searchPlaceholder)} aria-label={t(ui.search)}
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted" />
        </div>
        <ul className="max-h-[50vh] overflow-auto p-2">
          {q.trim() && hits.length === 0 && <li className="p-4 text-sm text-muted">{t(ui.noResults)}</li>}
          {hits.map((h, i) => (
            <li key={h.id}>
              <button onClick={() => go(h.to)} onMouseEnter={() => setIdx(i)}
                className={`w-full rounded-lg px-3 py-2 text-left ${i === idx ? 'bg-accent-soft' : ''}`}>
                <div className="font-medium">{h.title}</div>
                <div className="line-clamp-1 text-sm text-muted">{h.subtitle}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
