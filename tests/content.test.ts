import { describe, expect, it } from 'vitest';
import { categories } from '../src/content/categories';
import { contacts } from '../src/content/contacts';
import { faq } from '../src/content/faq';
import { guides } from '../src/content/guides';
import { links } from '../src/content/links';

/** Collect every {cs,en} pair found anywhere in an object tree. */
function l10n(x: unknown, out: { cs: unknown; en: unknown }[] = []) {
  if (x && typeof x === 'object') {
    const o = x as Record<string, unknown>;
    if ('cs' in o && 'en' in o) out.push(o as { cs: unknown; en: unknown });
    else Object.values(o).forEach((v) => l10n(v, out));
  }
  return out;
}

describe('content', () => {
  it('every text exists in both languages', () => {
    for (const s of l10n([categories, guides, faq, contacts, links])) {
      expect(typeof s.cs === 'string' && s.cs.trim().length > 0).toBe(true);
      expect(typeof s.en === 'string' && s.en.trim().length > 0).toBe(true);
    }
  });
  it('ids and slugs are unique', () => {
    const ids = guides.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
    const slugs = guides.map((g) => g.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
  it('references resolve', () => {
    for (const c of categories) for (const id of c.guideIds) expect(guides.some((g) => g.id === id && g.categoryId === c.id)).toBe(true);
    for (const g of guides) {
      expect(categories.some((c) => c.id === g.categoryId)).toBe(true);
      for (const r of g.related ?? []) expect(guides.some((x) => x.id === r)).toBe(true);
    }
    const json = JSON.stringify(guides);
    for (const m of json.matchAll(/"linkId":"([^"]+)"/g)) expect(links.some((l) => l.id === m[1])).toBe(true);
  });
  it('urls are valid https', () => {
    for (const l of links) expect(new URL(l.url).protocol).toBe('https:');
  });
});
