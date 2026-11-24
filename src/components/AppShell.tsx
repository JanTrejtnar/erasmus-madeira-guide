import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, LayoutGrid, Search, Siren } from 'lucide-react';
import { useEffect } from 'react';
import { categories } from '../content/categories';
import { ui, useLang } from '../lib/i18n';
import { LangSwitch, ThemeToggle } from './Controls';
import { Icon } from './Icon';
import { useSearchPalette } from './SearchPalette';

function TopBar() {
  const { t } = useLang();
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { open } = useSearchPalette();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-border bg-bg/90 px-4 backdrop-blur lg:hidden">
      {pathname !== '/' ? (
        <button onClick={() => nav(-1)} aria-label={t(ui.back)} className="grid size-10 place-items-center rounded-lg text-muted"><ArrowLeft size={20} /></button>
      ) : null}
      <Link to="/" className="whitespace-nowrap font-display text-base font-bold text-accent">{t(ui.appShort)}</Link>
      <div className="ml-auto flex items-center gap-2">
        <button onClick={open} aria-label={t(ui.search)} className="grid size-10 place-items-center rounded-lg border border-border bg-surface text-muted"><Search size={18} /></button>
        <LangSwitch />
        <ThemeToggle />
      </div>
    </header>
  );
}

function BottomNav() {
  const { t } = useLang();
  const { open } = useSearchPalette();
  const cls = ({ isActive }: { isActive: boolean }) =>
    `flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium ${isActive ? 'text-accent' : 'text-muted'}`;
  return (
    <nav className="pb-safe fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-surface lg:hidden" aria-label="Main">
      <NavLink to="/" end className={cls}><Home size={20} />{t(ui.home)}</NavLink>
      <NavLink to="/topics" className={cls}><LayoutGrid size={20} />{t(ui.topics)}</NavLink>
      <button onClick={open} className="flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 text-xs font-medium text-muted"><Search size={20} />{t(ui.search)}</button>
      <NavLink to="/sos" className={({ isActive }) => cls({ isActive }) + ' !text-danger'}><Siren size={20} />{t(ui.sos)}</NavLink>
    </nav>
  );
}

function Sidebar() {
  const { t } = useLang();
  const { open } = useSearchPalette();
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col gap-4 overflow-auto border-r border-border bg-surface p-4 lg:flex">
      <Link to="/" className="font-display text-lg font-bold text-accent">{t(ui.appName)}</Link>
      <button onClick={open} className="flex h-10 items-center gap-2 rounded-lg border border-border bg-bg px-3 text-sm text-muted">
        <Search size={16} />{t(ui.search)}<kbd className="ml-auto rounded border border-border px-1.5 text-xs">⌘K</kbd>
      </button>
      <nav className="flex flex-col gap-0.5" aria-label="Topics">
        {categories.map((c) => (
          <NavLink key={c.id} to={c.id === 'sos' ? '/sos' : `/c/${c.id}`}
            className={({ isActive }) => `flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm ${isActive ? 'bg-accent-soft font-semibold text-accent' : 'text-text hover:bg-surface-2'}`}>
            <Icon name={c.icon} size={16} />{t(c.title)}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-2"><LangSwitch /><ThemeToggle /></div>
    </aside>
  );
}

export function AppShell() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-dvh">
      <Sidebar />
      <TopBar />
      <main className="px-4 pb-28 pt-6 lg:ml-64 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-4xl"><Outlet /></div>
      </main>
      <BottomNav />
    </div>
  );
}
