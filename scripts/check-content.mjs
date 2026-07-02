import { existsSync, readFileSync } from 'node:fs'

const checks = [
  {
    label: 'FR chantiers list',
    file: 'data/fr/chantiers.ts',
    expectedSlugs: ['front-end-fort-trafic', 'moderniser-front', 'backlog-jv', 'tnsfc', 'file-requester']
  },
  {
    label: 'FR chantiers details',
    file: 'data/fr/chantierDetails.ts',
    expectedSlugs: ['front-end-fort-trafic', 'moderniser-front', 'backlog-jv', 'tnsfc', 'file-requester']
  },
  {
    label: 'EN work list',
    file: 'data/en/work.ts',
    expectedSlugs: ['high-traffic-front-end', 'modernizing-existing-front-end', 'game-backlog', 'tnsfc', 'file-requester']
  },
  {
    label: 'EN work details',
    file: 'data/en/workDetails.ts',
    expectedSlugs: ['high-traffic-front-end', 'modernizing-existing-front-end', 'game-backlog', 'tnsfc', 'file-requester']
  },
  {
    label: 'FR blog list',
    file: 'data/fr/blog.ts',
    expectedSlugs: ['moderniser-un-projet-front-sans-tout-casser', 'ia-outil-de-clarification', 'pourquoi-je-garde-un-atelier-idees', 'site-a-fort-trafic-performance']
  },
  {
    label: 'FR blog details',
    file: 'data/fr/blogDetails.ts',
    expectedSlugs: ['moderniser-un-projet-front-sans-tout-casser', 'ia-outil-de-clarification', 'pourquoi-je-garde-un-atelier-idees', 'site-a-fort-trafic-performance']
  },
  {
    label: 'EN blog list',
    file: 'data/en/blog.ts',
    expectedSlugs: ['modernizing-a-front-end-project-without-breaking-everything', 'ai-as-a-clarification-tool', 'why-i-keep-an-idea-workshop', 'what-high-traffic-websites-teach-about-performance']
  },
  {
    label: 'EN blog details',
    file: 'data/en/blogDetails.ts',
    expectedSlugs: ['modernizing-a-front-end-project-without-breaking-everything', 'ai-as-a-clarification-tool', 'why-i-keep-an-idea-workshop', 'what-high-traffic-websites-teach-about-performance']
  }
]

let hasError = false

for (const check of checks) {
  const source = readFileSync(check.file, 'utf8')

  for (const expectedSlug of check.expectedSlugs) {
    if (!source.includes(`slug: '${expectedSlug}'`)) {
      console.error(`${check.label}: missing slug ${expectedSlug}`)
      hasError = true
    }
  }
}



const fileChecks = [
  'pages/cv.vue',
  'pages/confidentialite.vue',
  'pages/[...slug].vue',
  'tsconfig.json',
  'components/layout/SkipLink.vue',
  'utils/externalLinks.ts',
  'scripts/generate-sitemap.mjs',
  'docs/release-checklist.md',
  '.env.example',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/images/og/default-og.svg',
  'public/images/og/default-og.png',
  'public/favicon.svg',
  'public/_headers',
  'public/images/projects/backlog-jv/README.md',
  'public/videos/backlog-jv/README.md',
  'public/documents/gaetan-canovas-cv-fr.pdf',
  'public/documents/gaetan-canovas-resume-en.pdf'
]

for (const filePath of fileChecks) {
  if (!existsSync(filePath)) {
    console.error(`Missing required file ${filePath}`)
    hasError = true
  }
}


const tsconfigSource = readFileSync('tsconfig.json', 'utf8')
if (!tsconfigSource.includes('extends') || !tsconfigSource.includes('./.nuxt/tsconfig.json')) {
  console.error('tsconfig.json: should extend ./.nuxt/tsconfig.json')
  hasError = true
}

const frChantierDetailsSource = readFileSync('data/fr/chantierDetails.ts', 'utf8')
const enWorkDetailsSource = readFileSync('data/en/workDetails.ts', 'utf8')
for (const [label, source] of [
  ['FR Backlog media', frChantierDetailsSource],
  ['EN Game Backlog media', enWorkDetailsSource]
]) {
  for (const expected of ['media:', "kind: 'video'", "kind: 'screenshot'", "kind: 'demo'"]) {
    if (!source.includes(expected)) {
      console.error(`${label}: missing ${expected}`)
      hasError = true
    }
  }
}



for (const [label, source] of [
  ['FR work facts', frChantierDetailsSource],
  ['EN work facts', enWorkDetailsSource]
]) {
  for (const expected of ['facts:', "label: '", "value: '"]) {
    if (!source.includes(expected)) {
      console.error(`${label}: missing ${expected}`)
      hasError = true
    }
  }
}

const frBlogDetailsSource = readFileSync('data/fr/blogDetails.ts', 'utf8')
const enBlogDetailsSource = readFileSync('data/en/blogDetails.ts', 'utf8')
for (const [label, source] of [
  ['FR blog article metadata', frBlogDetailsSource],
  ['EN blog article metadata', enBlogDetailsSource]
]) {
  for (const expected of ['date:', 'readingTime:', 'status:']) {
    if (!source.includes(expected)) {
      console.error(`${label}: missing ${expected}`)
      hasError = true
    }
  }
}

const localizedPathsSource = readFileSync('utils/localizedPaths.ts', 'utf8')
for (const expected of ["cv: { fr: '/cv', en: '/en/resume' }", "privacy: { fr: '/confidentialite', en: '/en/privacy' }", "contact: { fr: '/contact', en: '/en/contact' }"]) {
  if (!localizedPathsSource.includes(expected)) {
    console.error(`localizedPaths.ts: missing ${expected}`)
    hasError = true
  }
}



const nuxtConfigSource = readFileSync('nuxt.config.ts', 'utf8')
for (const expected of ['runtimeConfig', 'analyticsProvider', 'cloudflareAnalyticsToken', 'siteUrl']) {
  if (!nuxtConfigSource.includes(expected)) {
    console.error(`nuxt.config.ts: missing ${expected}`)
    hasError = true
  }
}

const seoSource = readFileSync('composables/useSiteSeo.ts', 'utf8')
for (const expected of ['canonical', 'hreflang', 'ogUrl', 'x-default']) {
  if (!seoSource.includes(expected)) {
    console.error(`useSiteSeo.ts: missing ${expected}`)
    hasError = true
  }
}

const sitemapSource = readFileSync('public/sitemap.xml', 'utf8')
for (const expected of ['https://gaetancanovas.dev/', 'https://gaetancanovas.dev/en', 'hreflang="fr-FR"', 'hreflang="en-US"']) {
  if (!sitemapSource.includes(expected)) {
    console.error(`sitemap.xml: missing ${expected}`)
    hasError = true
  }
}

const frLocaleSource = readFileSync('i18n/locales/fr.json', 'utf8')
const enLocaleSource = readFileSync('i18n/locales/en.json', 'utf8')
if (!frLocaleSource.includes('Confidentialité') || !enLocaleSource.includes('Privacy')) {
  console.error('i18n locale files: missing privacy labels')
  hasError = true
}

const appSource = readFileSync('app.vue', 'utf8')
for (const expected of ['<SkipLink />', 'id="main-content"']) {
  if (!appSource.includes(expected)) {
    console.error(`app.vue: missing ${expected}`)
    hasError = true
  }
}

const notFoundSource = readFileSync('pages/[...slug].vue', 'utf8')
for (const expected of ['setResponseStatus(404)', 'noindex: true', 'noAlternates: true']) {
  if (!notFoundSource.includes(expected)) {
    console.error(`404 page: missing ${expected}`)
    hasError = true
  }
}

const rootSourcesToCheck = [
  'pages/contact.vue',
  'components/layout/AppHeader.vue',
  'components/layout/AppFooter.vue',
  'pages/index.vue',
  'pages/a-propos.vue',
  'pages/atelier.vue',
  'pages/cv.vue'
]
for (const filePath of rootSourcesToCheck) {
  const source = readFileSync(filePath, 'utf8')
  if (source.includes('href="#"') || source.includes("href='#'")) {
    console.error(`${filePath}: contains dead href="#" link`)
    hasError = true
  }
}

const packageSource = readFileSync('package.json', 'utf8')
if (!packageSource.includes('seo:sitemap')) {
  console.error('package.json: missing seo:sitemap script')
  hasError = true
}

const headersSource = readFileSync('public/_headers', 'utf8')
for (const expected of ['X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
  if (!headersSource.includes(expected)) {
    console.error(`public/_headers: missing ${expected}`)
    hasError = true
  }
}

if (!sitemapSource.includes('<lastmod>2026-06-29</lastmod>')) {
  console.error('sitemap.xml: missing lastmod')
  hasError = true
}

if (!seoSource.includes('application/ld+json') || !seoSource.includes('WebPage') || !seoSource.includes('default-og.png')) {
  console.error('useSiteSeo.ts: missing structured data or PNG OG image')
  hasError = true
}

if (hasError) {
  process.exit(1)
}

console.log('Content checks passed.')
