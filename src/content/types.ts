/** Every user-facing string exists in both languages. */
export type L10n = { cs: string; en: string };

export type ActionLink =
  | { kind: 'maps'; label: L10n; query: string }
  | { kind: 'web'; label: L10n; linkId: string }
  | { kind: 'phone'; label: L10n; number: string }
  | { kind: 'copy'; label: L10n; value: string };

export type Block =
  | { type: 'section'; id: string; title: L10n }
  | { type: 'p'; text: L10n }
  | { type: 'steps'; items: L10n[] }
  | { type: 'list'; items: L10n[] }
  | { type: 'callout'; kind: 'tip' | 'warning' | 'danger' | 'info'; title?: L10n; text: L10n }
  | { type: 'table'; head: L10n[]; rows: L10n[][] }
  | { type: 'actions'; items: ActionLink[] };

export type Guide = {
  id: string;
  slug: string;
  categoryId: string;
  title: L10n;
  summary: L10n;
  tags: L10n[];
  /** 'YYYY-MM' when the facts were last checked, null = still a TODO. */
  verifiedAt: string | null;
  tldr: { price?: L10n; where?: L10n; bring?: L10n; time?: L10n; primaryAction?: ActionLink };
  blocks: Block[];
  related?: string[];
};

export type Category = {
  id: string;
  /** lucide-react icon name, resolved in components/Icon.tsx */
  icon: string;
  order: number;
  title: L10n;
  summary: L10n;
  guideIds: string[];
};

export type FaqItem = { id: string; q: L10n; a: L10n; guideId?: string };
export type Contact = {
  id: string;
  label: L10n;
  number?: string;
  url?: string;
  note?: L10n;
  emergency?: boolean;
};
export type LinkEntry = { id: string; url: string; label: L10n; official: boolean };
