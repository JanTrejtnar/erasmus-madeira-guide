import { Search } from 'lucide-react';
import { ui, useLang } from '../lib/i18n';
import { useSearchPalette } from './SearchPalette';

export function SearchBar() {
  const { t } = useLang();
  const { open } = useSearchPalette();
  return (
    <button onClick={open} className="flex h-14 w-full items-center gap-3 rounded-2xl border border-border bg-surface px-4 text-left text-muted shadow-sm transition hover:border-accent">
      <Search size={20} aria-hidden="true" />
      <span className="flex-1">{t(ui.searchPlaceholder)}</span>
      <kbd className="hidden rounded border border-border px-1.5 text-xs sm:inline">⌘K</kbd>
    </button>
  );
}
