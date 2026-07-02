export default defineNuxtConfig({
  ssr: true,

  modules: ['@nuxtjs/i18n'],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/typography.css',
    '~/assets/css/main.css'
  ],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://gaetancanovas.dev',
      analyticsProvider: process.env.NUXT_PUBLIC_ANALYTICS_PROVIDER || '',
      cloudflareAnalyticsToken: process.env.NUXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN || '',
      plausibleDomain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN || ''
    }
  },

  app: {
    head: {
      titleTemplate: '%s — Gaëtan Canovas',
      meta: [
        { name: 'theme-color', content: '#10251c' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  i18n: {
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    lazy: true,
    customRoutes: 'meta',
    detectBrowserLanguage: false,
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ]
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()'
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  compatibilityDate: '2026-06-28'
})
