import { Moon, Sun } from 'lucide-react';
import { ui, useLang } from '../lib/i18n';
import { useTheme } from '../lib/theme';

export function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t(ui.language)} className="flex rounded-lg border border-border bg-surface p-0.5 text-xs font-semibold">
      {(['en', 'cs'] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`min-h-8 rounded-md px-2.5 uppercase ${lang === l ? 'bg-accent text-on-accent' : 'text-muted'}`}>
          {l}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  return (
    <button onClick={toggle} aria-label={t(ui.theme)} className="grid size-10 place-items-center rounded-lg border border-border bg-surface text-muted hover:text-text">
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
