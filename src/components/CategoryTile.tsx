import { Link } from 'react-router-dom';
import type { Category } from '../content/types';
import { ui, useLang } from '../lib/i18n';
import { Icon } from './Icon';

export function CategoryTile({ cat }: { cat: Category }) {
  const { t } = useLang();
  const n = cat.guideIds.length;
  const to = cat.id === 'sos' ? '/sos' : `/c/${cat.id}`;
  return (
    <Link to={to} className="group flex min-h-40 flex-col gap-2 rounded-(--radius-card) border border-border bg-surface p-4 transition hover:-translate-y-0.5 hover:border-accent">
      <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent">
        <Icon name={cat.icon} size={22} />
      </span>
      <h2 className="text-base font-semibold sm:text-lg">{t(cat.title)}</h2>
      <p className="text-sm text-muted">{t(cat.summary)}</p>
      <span className="mt-auto text-xs font-medium text-muted">
        {cat.id === 'sos' ? '112' : n > 0 ? `${n} ${t(n === 1 ? ui.guide1 : ui.guides)}` : t(ui.comingSoon)}
      </span>
    </Link>
  );
}
