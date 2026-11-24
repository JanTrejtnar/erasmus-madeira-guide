import { AlertTriangle, Info, Lightbulb, OctagonAlert, MapPin, Globe, Phone, Copy, type LucideProps } from 'lucide-react';
import { useState, type ComponentType } from 'react';
import type { ActionLink, Block, Guide } from '../content/types';
import { linkById } from '../content/links';
import { ui, useLang } from '../lib/i18n';

const calloutStyle = {
  tip: { cls: 'border-tip bg-tip-soft', Ico: Lightbulb, label: { cs: 'Pro tip', en: 'Pro tip' } },
  warning: { cls: 'border-warn bg-warn-soft', Ico: AlertTriangle, label: { cs: 'Pozor na to', en: 'Watch out' } },
  danger: { cls: 'border-danger bg-danger-soft', Ico: OctagonAlert, label: { cs: 'Nebezpečí', en: 'Danger' } },
  info: { cls: 'border-info bg-info-soft', Ico: Info, label: { cs: 'Info', en: 'Info' } },
} as const satisfies Record<string, { cls: string; Ico: ComponentType<LucideProps>; label: { cs: string; en: string } }>;

export function VerifiedBadge({ at }: { at: string | null }) {
  const { t } = useLang();
  return at ? (
    <span className="rounded-full bg-tip-soft px-2.5 py-0.5 text-xs font-semibold text-tip">{t(ui.verified)}: {at}</span>
  ) : (
    <span className="rounded-full bg-warn-soft px-2.5 py-0.5 text-xs font-semibold text-warn">⚠ {t(ui.todoVerify)}</span>
  );
}

export function Action({ a }: { a: ActionLink }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  const base = 'inline-flex min-h-11 items-center gap-2 rounded-(--radius-sm) border border-border bg-surface px-4 text-sm font-semibold hover:border-accent';
  if (a.kind === 'maps')
    return <a className={base} target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.query)}`}><MapPin size={16} />{t(a.label)}</a>;
  if (a.kind === 'web') {
    const l = linkById(a.linkId);
    return l ? <a className={base} target="_blank" rel="noopener noreferrer" href={l.url}><Globe size={16} />{t(a.label)}</a> : null;
  }
  if (a.kind === 'phone')
    return <a className={base} href={`tel:${a.number}`}><Phone size={16} />{t(a.label)}</a>;
  return (
    <button className={base} onClick={() => { void navigator.clipboard?.writeText(a.value); setDone(true); setTimeout(() => setDone(false), 1500); }}>
      <Copy size={16} />{done ? t(ui.copied) : t(a.label)}
    </button>
  );
}

export function TldrCard({ guide }: { guide: Guide }) {
  const { t } = useLang();
  const { tldr } = guide;
  const cells = [
    ['💶', ui.price, tldr.price], ['📍', ui.where, tldr.where], ['🎒', ui.bring, tldr.bring], ['⏱', ui.time, tldr.time],
  ] as const;
  return (
    <section aria-label="TL;DR" className="rounded-(--radius-card) border border-border bg-accent-soft p-4">
      <dl className="grid gap-3 sm:grid-cols-2">
        {cells.filter(([, , v]) => v).map(([emoji, label, v]) => (
          <div key={label.en}>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{emoji} {t(label)}</dt>
            <dd className="m-0 text-sm">{t(v!)}</dd>
          </div>
        ))}
      </dl>
      {tldr.primaryAction && <div className="mt-4"><Action a={tldr.primaryAction} /></div>}
    </section>
  );
}

export function ContentRenderer({ blocks }: { blocks: Block[] }) {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'section': return <h2 id={b.id} key={i} className="mt-4 scroll-mt-20 text-xl font-bold">{t(b.title)}</h2>;
          case 'p': return <p key={i} className="m-0">{t(b.text)}</p>;
          case 'steps': return <ol key={i} className="m-0 list-decimal space-y-1 pl-5">{b.items.map((x, j) => <li key={j}>{t(x)}</li>)}</ol>;
          case 'list': return <ul key={i} className="m-0 list-disc space-y-1 pl-5">{b.items.map((x, j) => <li key={j}>{t(x)}</li>)}</ul>;
          case 'callout': {
            const s = calloutStyle[b.kind];
            return (
              <aside key={i} className={`flex gap-3 rounded-(--radius-card) border-l-4 p-4 ${s.cls}`}>
                <s.Ico size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                <div><strong>{t(b.title ?? s.label)}</strong><p className="m-0 text-sm">{t(b.text)}</p></div>
              </aside>
            );
          }
          case 'table': return (
            <div key={i} className="overflow-x-auto rounded-(--radius-card) border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-2"><tr>{b.head.map((h, j) => <th key={j} className="px-3 py-2 font-semibold">{t(h)}</th>)}</tr></thead>
                <tbody>{b.rows.map((r, j) => <tr key={j} className="border-t border-border">{r.map((c, k) => <td key={k} className="px-3 py-2">{t(c)}</td>)}</tr>)}</tbody>
              </table>
            </div>
          );
          case 'actions': return <div key={i} className="flex flex-wrap gap-2">{b.items.map((a, j) => <Action key={j} a={a} />)}</div>;
        }
      })}
    </div>
  );
}
