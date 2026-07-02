<script setup lang="ts">
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/cv',
      en: '/resume'
    }
  }
})

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)

const cv = computed(() => currentLocale.value === 'fr'
  ? {
      title: 'CV',
      description: 'Une version synthétique de mon parcours : front-end, performance, modernisation, produit et usages concrets de l’IA.',
      badge: 'Document pratique',
      downloadLabel: 'Télécharger le CV PDF',
      downloadHref: '/documents/gaetan-canovas-cv-fr.pdf',
      note: 'Le site montre l’approche, les preuves et les explorations. Le CV synthétise le parcours dans un format pratique.',
      profileTitle: 'Profil',
      profile: 'Développeur front-end orienté produit, performance et modernisation, avec spécialité Vue / Nuxt, expérience React, SSR, CMS headless, SEO technique et projets à fort trafic.',
      sections: [
        {
          title: 'Expérience & terrain',
          items: [
            'Interfaces web éditoriales et projets à forte exposition.',
            'Modernisation progressive de front-ends existants.',
            'Performance web, SEO technique, intégration CMS et SSR.',
            'Collaboration avec des équipes produit, contenu et technique.'
          ]
        },
        {
          title: 'Compétences principales',
          items: [
            'Vue, Nuxt, React, JavaScript / TypeScript.',
            'Architecture de composants, routing, stores, intégration API.',
            'Core Web Vitals, images, rendu critique, accessibilité et indexation.',
            'Cadrage produit, MVP, prototypes et usage pragmatique de l’IA.'
          ]
        },
        {
          title: 'Projets publics ou démontrables',
          items: [
            'Backlog JV - application desktop Electron terminée.',
            'TNSFC - prototype média fictif autour d’un site de club moderne.',
            'File Requester - exploration produit autour d’un SaaS minimal.',
            'gaetancanovas.dev - site personnel Nuxt statique, bilingue, SEO et analytics léger.'
          ]
        }
      ],
      ctaTitle: 'Besoin d’un format plus classique ?',
      ctaText: 'Le PDF est pensé pour un usage recruteur, client ou opportunité ponctuelle. Cette page web reste volontairement courte.'
    }
  : {
      title: 'Resume',
      description: 'A concise version of my background: front-end, performance, modernization, product thinking and practical AI use cases.',
      badge: 'Practical document',
      downloadLabel: 'Download resume PDF',
      downloadHref: '/documents/gaetan-canovas-resume-en.pdf',
      note: 'The site shows the approach, proof and explorations. The resume summarizes the background in a practical format.',
      profileTitle: 'Profile',
      profile: 'Product-minded front-end developer focused on performance and modernization, with a strong Vue / Nuxt background, React experience, SSR, headless CMS, technical SEO and high-traffic projects.',
      sections: [
        {
          title: 'Experience & field',
          items: [
            'Editorial web interfaces and high-exposure projects.',
            'Progressive modernization of existing front-ends.',
            'Web performance, technical SEO, CMS integration and SSR.',
            'Collaboration with product, content and engineering teams.'
          ]
        },
        {
          title: 'Core skills',
          items: [
            'Vue, Nuxt, React, JavaScript / TypeScript.',
            'Component architecture, routing, stores and API integration.',
            'Core Web Vitals, images, critical rendering, accessibility and indexing.',
            'Product framing, MVPs, prototypes and pragmatic AI use.'
          ]
        },
        {
          title: 'Public or demonstrable projects',
          items: [
            'Game Backlog - finished Electron desktop app.',
            'TNSFC - fictional media prototype for a modern club website.',
            'File Requester - product exploration around a minimal SaaS.',
            'gaetancanovas.dev - static bilingual Nuxt personal site, SEO and lightweight analytics.'
          ]
        }
      ],
      ctaTitle: 'Need a more standard format?',
      ctaText: 'The PDF is meant for recruiters, clients or occasional opportunities. This web page remains intentionally short.'
    })

useSiteSeo({
  title: cv.value.title,
  description: currentLocale.value === 'fr'
    ? 'CV de Gaëtan Canovas, développeur front-end orienté produit, performance, modernisation et IA appliquée.'
    : 'Resume of Gaëtan Canovas, product-minded front-end developer focused on performance, modernization and applied AI.'
})
</script>

<template>
  <main>
    <PageHero :title="cv.title" :description="cv.description" />

    <section class="section section--compact">
      <div class="container cv-layout">
        <aside class="cv-side card card--strong">
          <BaseBadge :label="cv.badge" icon="file" />
          <h2>{{ currentLocale === 'fr' ? 'CV web + PDF' : 'Web resume + PDF' }}</h2>
          <p>{{ cv.note }}</p>
          <div class="cv-side__actions">
            <a class="base-download" :href="cv.downloadHref" download>
              <InlineIcon name="file" />
              {{ cv.downloadLabel }}
            </a>
            <NuxtLink class="base-download base-download--secondary" :to="staticPaths.contact[currentLocale]">
              <InlineIcon name="mail" />
              {{ t('cta.contact') }}
            </NuxtLink>
          </div>
        </aside>

        <article class="cv-main card">
          <section class="cv-block">
            <p class="eyebrow">{{ cv.profileTitle }}</p>
            <h2>{{ currentLocale === 'fr' ? 'Front-end, produit, performance' : 'Front-end, product, performance' }}</h2>
            <p class="lead">{{ cv.profile }}</p>
          </section>

          <section v-for="section in cv.sections" :key="section.title" class="cv-block">
            <h3>{{ section.title }}</h3>
            <ul class="cv-list">
              <li v-for="item in section.items" :key="item">
                <span class="icon-box icon-box--warm"><InlineIcon name="chevron-right" :size="15" /></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>

          <section class="cv-callout">
            <h3>{{ cv.ctaTitle }}</h3>
            <p>{{ cv.ctaText }}</p>
            <a :href="cv.downloadHref" download>{{ cv.downloadLabel }} →</a>
          </section>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.cv-layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.36fr) minmax(0, 0.64fr);
  gap: clamp(1.2rem, 4vw, 2rem);
  align-items: start;
}
.cv-side {
  position: sticky;
  top: 96px;
  display: grid;
  gap: 1rem;
  padding: clamp(1.25rem, 4vw, 2rem);
}
.cv-side h2,
.cv-main h2,
.cv-main h3,
.cv-callout h3 {
  margin: 0;
  letter-spacing: -0.035em;
}
.cv-side h2,
.cv-main h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1;
}
.cv-side p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
}
.cv-side__actions {
  display: grid;
  gap: 0.75rem;
}
.base-download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: white;
  padding: 0.85rem 1rem;
  font-weight: 850;
}
.base-download--secondary {
  border: 1px solid var(--color-border);
  background: rgb(255 255 255 / 0.78);
  color: var(--color-text);
}
.cv-main {
  display: grid;
  gap: 1.5rem;
  padding: clamp(1.5rem, 5vw, 3rem);
}
.cv-block {
  display: grid;
  gap: 1rem;
  border-bottom: 1px solid rgb(222 216 204 / 0.72);
  padding-bottom: 1.5rem;
}
.cv-block:last-of-type { border-bottom: 0; }
.cv-list {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.cv-list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  color: var(--color-muted-strong);
  line-height: 1.65;
}
.cv-list .icon-box {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.65rem;
  margin-top: 0.05rem;
}
.cv-callout {
  display: grid;
  gap: 0.6rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-primary-wash);
  padding: 1.25rem;
}
.cv-callout p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.65;
}
.cv-callout a {
  color: var(--color-primary);
  font-weight: 850;
}
@media (max-width: 860px) {
  .cv-layout { grid-template-columns: 1fr; }
  .cv-side { position: static; }
}
</style>
