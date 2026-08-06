export interface NavItem {
  slug: string;
  label: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const nav: NavGroup[] = [
  {
    label: 'Getting started',
    items: [
      { slug: 'overview', label: 'Overview' },
      { slug: 'getting-started', label: 'Quickstart' },
    ],
  },
  {
    label: 'Authentication',
    items: [
      { slug: 'authentication/api-keys', label: 'API keys' },
      { slug: 'authentication/session-jwt', label: 'Session JWT' },
      { slug: 'authentication/oauth', label: 'OAuth (Google / GitHub)' },
      { slug: 'authentication/turnstile', label: 'Turnstile' },
      { slug: 'authentication/x402', label: 'x402 payments' },
    ],
  },
  {
    label: 'Concepts',
    items: [
      { slug: 'concepts/response-format', label: 'Response format' },
      { slug: 'concepts/pagination', label: 'Pagination' },
      { slug: 'concepts/errors', label: 'Errors' },
      { slug: 'concepts/rate-limits', label: 'Rate limits & quotas' },
    ],
  },
  {
    label: 'API reference',
    items: [
      { slug: 'reference/wilayah', label: 'wilayah' },
      { slug: 'reference/libur', label: 'libur' },
      { slug: 'reference/sholat', label: 'sholat' },
      { slug: 'reference/sekolah', label: 'sekolah' },
      { slug: 'reference/kampus', label: 'kampus' },
      { slug: 'reference/rumah-sakit', label: 'rumah-sakit' },
      { slug: 'reference/gempa', label: 'gempa' },
      { slug: 'reference/kodepos', label: 'kodepos' },
      { slug: 'reference/plates', label: 'plates' },
      { slug: 'reference/quran', label: 'quran' },
      { slug: 'reference/ump', label: 'ump' },
      { slug: 'reference/cuaca', label: 'cuaca' },
      { slug: 'reference/peringatan-dini', label: 'peringatan-dini' },
      { slug: 'reference/kurs', label: 'kurs' },
      { slug: 'reference/alkitab', label: 'alkitab' },
      { slug: 'reference/ojk', label: 'ojk' },
      { slug: 'reference/kbbi', label: 'kbbi' },
      { slug: 'reference/validasi', label: 'validasi' },
      { slug: 'reference/util', label: 'util' },
      { slug: 'reference/kurs-bi', label: 'kurs-bi' },
      { slug: 'reference/halal', label: 'halal' },
      { slug: 'reference/bpom', label: 'bpom' },
      { slug: 'reference/hijriah', label: 'hijriah' },
      { slug: 'reference/astronomi', label: 'astronomi' },
      { slug: 'reference/account', label: 'Account & billing' },
      { slug: 'reference/admin', label: 'Admin' },
    ],
  },
  {
    label: 'SDKs & integrations',
    items: [
      { slug: 'sdks/javascript', label: 'JavaScript / TypeScript' },
      { slug: 'sdks/python', label: 'Python' },
      { slug: 'sdks/mcp', label: 'MCP' },
    ],
  },
];

export const flatNav: NavItem[] = nav.flatMap((g) => g.items);

export function prevNext(slug: string): { prev?: NavItem; next?: NavItem } {
  const idx = flatNav.findIndex((n) => n.slug === slug);
  if (idx < 0) return {};
  return {
    prev: idx > 0 ? flatNav[idx - 1] : undefined,
    next: idx < flatNav.length - 1 ? flatNav[idx + 1] : undefined,
  };
}
