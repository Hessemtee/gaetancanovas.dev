export type LocaleCode = 'fr' | 'en'

export const staticPaths = {
  home: { fr: '/', en: '/en' },
  work: { fr: '/chantiers', en: '/en/work' },
  lab: { fr: '/atelier', en: '/en/lab' },
  blog: { fr: '/blog', en: '/en/blog' },
  about: { fr: '/a-propos', en: '/en/about' },
  contact: { fr: '/contact', en: '/en/contact' },
  cv: { fr: '/cv', en: '/en/resume' },
  privacy: { fr: '/confidentialite', en: '/en/privacy' }
} as const

export const chantierSlugMap = {
  'front-end-fort-trafic': { fr: 'front-end-fort-trafic', en: 'high-traffic-front-end' },
  'moderniser-front': { fr: 'moderniser-front', en: 'modernizing-existing-front-end' },
  'backlog-jv': { fr: 'backlog-jv', en: 'game-backlog' },
  tnsfc: { fr: 'tnsfc', en: 'tnsfc' },
  'file-requester': { fr: 'file-requester', en: 'file-requester' }
} as const

export const blogSlugMap = {
  'moderniser-un-projet-front-sans-tout-casser': {
    fr: 'moderniser-un-projet-front-sans-tout-casser',
    en: 'modernizing-a-front-end-project-without-breaking-everything'
  },
  'ia-outil-de-clarification': {
    fr: 'ia-outil-de-clarification',
    en: 'ai-as-a-clarification-tool'
  },
  'pourquoi-je-garde-un-atelier-idees': {
    fr: 'pourquoi-je-garde-un-atelier-idees',
    en: 'why-i-keep-an-idea-workshop'
  },
  'site-a-fort-trafic-performance': {
    fr: 'site-a-fort-trafic-performance',
    en: 'what-high-traffic-websites-teach-about-performance'
  }
} as const

function findLocalizedSlug<T extends Record<string, Record<LocaleCode, string>>>(
  map: T,
  slug: string,
  fromLocale: LocaleCode,
  toLocale: LocaleCode
) {
  const entry = Object.values(map).find((item) => item[fromLocale] === slug)
  return entry?.[toLocale]
}

export function getWorkPath(locale: LocaleCode, slug?: string) {
  if (!slug) return staticPaths.work[locale]
  return locale === 'fr' ? `/chantiers/${slug}` : `/en/work/${slug}`
}

export function getBlogPath(locale: LocaleCode, slug?: string) {
  if (!slug) return staticPaths.blog[locale]
  return locale === 'fr' ? `/blog/${slug}` : `/en/blog/${slug}`
}

export function getAlternatePath(path: string): string {
  const isEn = path === '/en' || path.startsWith('/en/')
  const fromLocale: LocaleCode = isEn ? 'en' : 'fr'
  const toLocale: LocaleCode = isEn ? 'fr' : 'en'

  const staticMatch = Object.values(staticPaths).find((entry) => entry[fromLocale] === path)
  if (staticMatch) return staticMatch[toLocale]

  const workPrefix = fromLocale === 'fr' ? '/chantiers/' : '/en/work/'
  if (path.startsWith(workPrefix)) {
    const slug = path.replace(workPrefix, '')
    const translatedSlug = findLocalizedSlug(chantierSlugMap, slug, fromLocale, toLocale)
    return translatedSlug ? getWorkPath(toLocale, translatedSlug) : staticPaths.work[toLocale]
  }

  const blogPrefix = fromLocale === 'fr' ? '/blog/' : '/en/blog/'
  if (path.startsWith(blogPrefix)) {
    const slug = path.replace(blogPrefix, '')
    const translatedSlug = findLocalizedSlug(blogSlugMap, slug, fromLocale, toLocale)
    return translatedSlug ? getBlogPath(toLocale, translatedSlug) : staticPaths.blog[toLocale]
  }

  return staticPaths.home[toLocale]
}
