<script setup lang="ts">
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/confidentialite',
      en: '/privacy'
    }
  }
})

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const isFr = computed(() => currentLocale.value === 'fr')

const content = computed(() => isFr.value
  ? {
      title: 'Confidentialité',
      description: 'Mesure d’audience légère, sans publicité ciblée ni profilage individuel.',
      intro: 'Ce site est conçu pour rester léger et respectueux de la vie privée. L’objectif de la mesure d’audience est uniquement de comprendre quelles pages sont consultées et d’où vient le trafic de manière agrégée.',
      sections: [
        {
          title: 'Mesure d’audience',
          body: 'Le site peut utiliser une mesure d’audience légère, par exemple Cloudflare Web Analytics ou Plausible, afin de connaître le nombre de visites, les pages consultées, les pays approximatifs et les sources de trafic.'
        },
        {
          title: 'Ce qui n’est pas fait',
          body: 'Pas de publicité ciblée, pas de retargeting, pas de session recording, pas de heatmap et pas de profilage individuel.'
        },
        {
          title: 'Données utiles',
          body: 'Les données recherchées sont agrégées : pages vues, provenance, pays approximatif, liens entrants et performances générales du site.'
        },
        {
          title: 'Contact',
          body: 'Pour toute question liée à la confidentialité ou aux données, le plus simple est de passer par la page contact.'
        }
      ]
    }
  : {
      title: 'Privacy',
      description: 'Lightweight analytics, no targeted advertising and no individual profiling.',
      intro: 'This site is designed to stay lightweight and respectful of privacy. Analytics are only meant to understand which pages are viewed and where traffic comes from, in an aggregated way.',
      sections: [
        {
          title: 'Analytics',
          body: 'The site may use lightweight analytics, such as Cloudflare Web Analytics or Plausible, to understand visits, viewed pages, approximate countries and traffic sources.'
        },
        {
          title: 'What is not used',
          body: 'No targeted advertising, no retargeting, no session recording, no heatmaps and no individual profiling.'
        },
        {
          title: 'Useful data',
          body: 'The useful data is aggregated: page views, referrers, approximate country, inbound links and overall site performance.'
        },
        {
          title: 'Contact',
          body: 'For any privacy-related question, the simplest path is the contact page.'
        }
      ]
    }
)

useSiteSeo({
  title: content.value.title,
  description: content.value.description
})
</script>

<template>
  <main>
    <section class="section detail-hero">
      <div class="container prose-detail">
        <Breadcrumb
          :items="[
            { label: isFr ? 'Accueil' : 'Home', to: staticPaths.home[currentLocale] },
            { label: content.title }
          ]"
        />
        <h1>{{ content.title }}</h1>
        <p class="lead">{{ content.intro }}</p>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container prose-detail card card--strong privacy-card">
        <section v-for="section in content.sections" :key="section.title" class="detail-section">
          <h2>{{ section.title }}</h2>
          <p>{{ section.body }}</p>
        </section>

        <p class="back-link">
          <NuxtLink :to="staticPaths.contact[currentLocale]">{{ t('nav.contact') }} →</NuxtLink>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.detail-hero {
  border-bottom: 1px solid rgb(222 216 204 / 0.72);
  background:
    radial-gradient(circle at 16% 0%, rgb(16 37 28 / 0.07), transparent 28rem),
    radial-gradient(circle at 90% 0%, rgb(195 111 50 / 0.09), transparent 24rem);
}
.prose-detail {
  max-width: 820px;
}
.prose-detail h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  margin: 1rem 0;
}
.privacy-card {
  padding: clamp(1.3rem, 4vw, 3rem);
}
.detail-section + .detail-section {
  margin-top: 2rem;
}
.detail-section h2 {
  margin-bottom: 0.55rem;
  font-family: var(--font-serif);
  font-size: clamp(1.45rem, 3vw, 2rem);
  letter-spacing: -0.03em;
}
.detail-section p {
  color: var(--color-muted);
  line-height: 1.8;
}
</style>
