import { Link, Navigate, useParams } from 'react-router-dom';
import { categories, categoryById } from '../content/categories';
import { contacts } from '../content/contacts';
import { faq } from '../content/faq';
import { guideById, guideBySlug } from '../content/guides';
import { CategoryTile } from '../components/CategoryTile';
import { ContentRenderer, TldrCard, VerifiedBadge } from '../components/GuideBlocks';
import { SearchBar } from '../components/SearchBar';
import { ui, useLang } from '../lib/i18n';

const sorted = [...categories].sort((a, b) => a.order - b.order);

function Grid() {
  return <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">{sorted.map((c) => <CategoryTile key={c.id} cat={c} />)}</div>;
}

export function Dashboard() {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-6">
      <div className="pt-2">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{t(ui.heroTitle)}</h1>
        <p className="mt-2 text-muted">{t(ui.tagline)}</p>
      </div>
      <SearchBar />
      <Grid />
      {faq.length > 0 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">{t(ui.faq)}</h2>
          <div className="flex flex-wrap gap-2">
            {faq.map((f) => (
              <Link key={f.id} to={f.guideId ? `/g/${guideById(f.guideId)?.slug}` : '/'} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm hover:border-accent">{t(f.q)}</Link>
            ))}
          </div>
        </section>
      )}
      <p className="text-xs text-muted">{t(ui.footer)}</p>
    </div>
  );
}

export function Topics() {
  const { t } = useLang();
  return <div className="flex flex-col gap-4"><h1 className="text-2xl font-bold">{t(ui.topics)}</h1><Grid /></div>;
}

export function CategoryPage() {
  const { id } = useParams();
  const { t } = useLang();
  const cat = id ? categoryById(id) : undefined;
  if (!cat) return <NotFound />;
  if (cat.guideIds.length === 1) return <Navigate to={`/g/${guideById(cat.guideIds[0])?.slug}`} replace />;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t(cat.title)}</h1>
      <p className="m-0 text-muted">{t(cat.summary)}</p>
      {cat.guideIds.length === 0 && <p className="rounded-(--radius-card) border border-dashed border-border p-6 text-center text-muted">{t(ui.comingSoon)}</p>}
      <div className="flex flex-col gap-3">
        {cat.guideIds.map((gid) => guideById(gid)).filter((g) => !!g).map((g) => (
          <Link key={g.id} to={`/g/${g.slug}`} className="rounded-(--radius-card) border border-border bg-surface p-4 hover:border-accent">
            <div className="flex items-center justify-between gap-2"><h2 className="text-lg font-semibold">{t(g.title)}</h2><VerifiedBadge at={g.verifiedAt} /></div>
            <p className="m-0 mt-1 text-sm text-muted">{t(g.summary)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function GuidePage() {
  const { slug } = useParams();
  const { t } = useLang();
  const g = slug ? guideBySlug(slug) : undefined;
  if (!g) return <NotFound />;
  const cat = categoryById(g.categoryId);
  return (
    <article className="flex flex-col gap-5">
      {cat && <Link to={`/c/${cat.id}`} className="text-sm text-muted hover:text-accent">← {t(cat.title)}</Link>}
      <div className="flex flex-wrap items-center gap-3"><h1 className="text-3xl font-extrabold">{t(g.title)}</h1><VerifiedBadge at={g.verifiedAt} /></div>
      <TldrCard guide={g} />
      <ContentRenderer blocks={g.blocks} />
      {g.related && g.related.length > 0 && (
        <section><h2 className="mb-2 text-lg font-bold">{t(ui.related)}</h2>
          <div className="flex flex-wrap gap-2">{g.related.map((id) => guideById(id)).filter((x) => !!x).map((r) => <Link key={r.id} className="rounded-full border border-border px-3 py-1.5 text-sm" to={`/g/${r.slug}`}>{t(r.title)}</Link>)}</div>
        </section>
      )}
    </article>
  );
}

export function Sos() {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t(ui.emergency)}</h1>
      <div className="flex flex-col gap-3">
        {contacts.map((c) => (
          <div key={c.id} className={`rounded-(--radius-card) border p-4 ${c.emergency ? 'border-danger bg-danger-soft' : 'border-border bg-surface'}`}>
            <div className="font-semibold">{t(c.label)}</div>
            {c.note && <p className="m-0 text-sm text-muted">{t(c.note)}</p>}
            {c.number && <a href={`tel:${c.number}`} className="mt-2 inline-flex min-h-11 items-center rounded-(--radius-sm) bg-accent px-4 text-lg font-bold text-on-accent">{t(ui.call)} {c.number}</a>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function NotFound() {
  const { t } = useLang();
  return <div className="py-16 text-center"><h1 className="text-2xl font-bold">{t(ui.notFound)}</h1><Link to="/" className="mt-4 inline-block text-accent underline">{t(ui.home)}</Link></div>;
}
