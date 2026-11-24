import MiniSearch from 'minisearch';
import { guides } from '../content/guides';
import { faq } from '../content/faq';
import { categories } from '../content/categories';
import type { Lang } from './i18n';

export type Hit = { id: string; kind: 'guide' | 'faq' | 'category'; title: string; subtitle: string; to: string };

const strip = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function build(lang: Lang) {
  const docs: (Hit & { text: string })[] = [
    ...categories.map((c) => ({
      id: `c:${c.id}`, kind: 'category' as const, title: c.title[lang], subtitle: c.summary[lang],
      to: c.id === 'sos' ? '/sos' : `/c/${c.id}`, text: '',
    })),
    ...guides.map((g) => ({
      id: `g:${g.id}`, kind: 'guide' as const, title: g.title[lang], subtitle: g.summary[lang],
      to: `/g/${g.slug}`, text: g.tags.map((t) => `${t.cs} ${t.en}`).join(' '),
    })),
    ...faq.map((f) => ({
      id: `f:${f.id}`, kind: 'faq' as const, title: f.q[lang], subtitle: f.a[lang],
      to: f.guideId ? `/g/${guides.find((g) => g.id === f.guideId)?.slug ?? ''}` : '/', text: f.a[lang],
    })),
  ];
  const ms = new MiniSearch<Hit & { text: string }>({
    fields: ['title', 'subtitle', 'text'],
    storeFields: ['kind', 'title', 'subtitle', 'to'],
    processTerm: strip,
    searchOptions: { prefix: true, fuzzy: 0.2, boost: { title: 3 } },
  });
  ms.addAll(docs);
  return ms;
}

const cache: Partial<Record<Lang, MiniSearch<Hit & { text: string }>>> = {};

export function search(q: string, lang: Lang): Hit[] {
  const ms = (cache[lang] ??= build(lang));
  return ms.search(q).slice(0, 8) as unknown as Hit[];
}
