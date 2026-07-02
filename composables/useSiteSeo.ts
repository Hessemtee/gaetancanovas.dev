import { getAlternatePath, type LocaleCode } from '~/utils/localizedPaths'

type UseSiteSeoInput = {
  title: string
  description: string
  image?: string
  noindex?: boolean
  noAlternates?: boolean
}

function stripTrailingSlash(value: string) {
  return value.replace(/\/$/, '')
}

function toAbsoluteUrl(siteUrl: string, pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }

  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${stripTrailingSlash(siteUrl)}${path}`
}

export function useSiteSeo(input: UseSiteSeoInput) {
  const route = useRoute()
  const { locale } = useI18n()
  const config = useRuntimeConfig()

  const currentLocale = computed(() => locale.value as LocaleCode)
  const siteUrl = computed(() => stripTrailingSlash(config.public.siteUrl || 'https://gaetancanovas.dev'))
  const currentPath = computed(() => route.path || '/')
  const alternatePath = computed(() => getAlternatePath(currentPath.value))

  const frPath = computed(() => currentLocale.value === 'fr' ? currentPath.value : alternatePath.value)
  const enPath = computed(() => currentLocale.value === 'en' ? currentPath.value : alternatePath.value)
  const canonicalUrl = computed(() => toAbsoluteUrl(siteUrl.value, currentPath.value))
  const ogImage = computed(() => toAbsoluteUrl(siteUrl.value, input.image || '/images/og/default-og.png'))
  const inLanguage = computed(() => currentLocale.value === 'fr' ? 'fr-FR' : 'en-US')

  useHead(() => {
    const links: Array<{ rel: string; href: string; hreflang?: string }> = [
      { rel: 'canonical', href: canonicalUrl.value }
    ]

    if (!input.noAlternates) {
      links.push(
        { rel: 'alternate', hreflang: 'fr-FR', href: toAbsoluteUrl(siteUrl.value, frPath.value) },
        { rel: 'alternate', hreflang: 'en-US', href: toAbsoluteUrl(siteUrl.value, enPath.value) },
        { rel: 'alternate', hreflang: 'x-default', href: toAbsoluteUrl(siteUrl.value, frPath.value) }
      )
    }

    return {
      htmlAttrs: {
        lang: currentLocale.value === 'fr' ? 'fr' : 'en'
      },
      link: links,
      meta: [
        { property: 'og:locale', content: currentLocale.value === 'fr' ? 'fr_FR' : 'en_US' },
        { property: 'og:locale:alternate', content: currentLocale.value === 'fr' ? 'en_US' : 'fr_FR' }
      ],
      script: [
        {
          type: 'application/ld+json',
          key: 'structured-data',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': canonicalUrl.value,
            url: canonicalUrl.value,
            name: input.title,
            description: input.description,
            inLanguage: inLanguage.value,
            isPartOf: {
              '@type': 'WebSite',
              '@id': `${siteUrl.value}/#website`,
              url: siteUrl.value,
              name: 'Gaëtan Canovas'
            },
            author: {
              '@type': 'Person',
              name: 'Gaëtan Canovas',
              url: siteUrl.value
            }
          })
        }
      ]
    }
  })

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogUrl: canonicalUrl,
    ogImage,
    twitterCard: 'summary_large_image',
    twitterImage: ogImage,
    robots: input.noindex ? 'noindex,nofollow' : 'index,follow'
  })
}
