<script setup lang="ts">
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'
import { externalLinks } from '~/utils/externalLinks'

definePageMeta({
  i18n: {
    paths: {
      fr: '/contact',
      en: '/contact'
    }
  }
})

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const externalContactLinks = computed(() => [
  { label: 'GitHub', href: externalLinks.github, icon: 'github' },
  { label: 'LinkedIn', href: externalLinks.linkedin, icon: 'linkedin' }
].filter((link) => Boolean(link.href)))

useSiteSeo({
  title: 'Contact',
  description: currentLocale.value === 'fr'
    ? 'Contacter Gaëtan Canovas pour une mission front-end, une modernisation de projet ou une discussion produit.'
    : 'Contact Gaëtan Canovas for a front-end mission, project modernization or product discussion.'
})
</script>

<template>
  <main>
    <PageHero
      title="Contact"
      :description="currentLocale === 'fr' ? 'Pour une mission front-end, une modernisation de projet, un prototype ou une discussion autour d’un produit web.' : 'For a front-end mission, project modernization, prototype or product discussion.'"
    />

    <section class="section">
      <div class="container contact-panel card">
        <h2>{{ currentLocale === 'fr' ? 'Le plus simple : envoyez-moi un email.' : 'The simplest way: send me an email.' }}</h2>
        <p class="lead">{{ currentLocale === 'fr' ? 'Je réponds plus facilement aux messages courts, concrets, avec un peu de contexte : objectif, délai, stack, contraintes et type de collaboration envisagé.' : 'I respond best to short, concrete messages with a bit of context: goal, timeline, stack, constraints and expected type of collaboration.' }}</p>
        <BaseButton :href="externalLinks.email">
          <InlineIcon name="mail" /> Email
        </BaseButton>
        <div class="cluster contact-links">
          <a
            v-for="link in externalContactLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InlineIcon :name="link.icon" /> {{ link.label }}
          </a>
          <NuxtLink :to="staticPaths.cv[currentLocale]"><InlineIcon name="file" /> {{ t('nav.cv') }}</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-panel {
  display: grid;
  gap: 1.25rem;
  padding: clamp(1.5rem, 5vw, 3rem);
}
.contact-panel h2 { margin: 0; font-size: clamp(1.8rem, 4vw, 3rem); }
.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--color-muted);
  font-weight: 800;
}
</style>
