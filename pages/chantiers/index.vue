<script setup lang="ts">
import { getChantiers } from '~/data/getters'
import { getWorkPath, type LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/chantiers',
      en: '/work'
    }
  }
})

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const items = computed(() => getChantiers(currentLocale.value))
const featuredItems = computed(() => items.value.filter((item) => item.featured).slice(0, 3))
const secondaryItems = computed(() => items.value.filter((item) => !item.featured))
const filters = ['all', 'experience', 'playbook', 'finished', 'prototype', 'concept']
const activeFilter = ref('all')
const filteredItems = computed(() => activeFilter.value === 'all' ? items.value : items.value.filter((item) => item.category === activeFilter.value))

const copy = computed(() => currentLocale.value === 'fr'
  ? {
      description: 'Retours d’expérience, méthodes et projets démontrables autour du front-end, de la performance et du produit.',
      featuredEyebrow: 'Sélection',
      indexEyebrow: 'Index',
      secondaryEyebrow: 'Compléments',
      featuredTitle: 'À lire en premier',
      featuredText: 'Une sélection pour entrer rapidement dans les sujets les plus représentatifs.',
      exploreTitle: 'Explorer par type',
      exploreText: 'Filtrer les contenus par format : retour d’expérience, méthode, projet terminé ou exploration.',
      compactTitle: 'Autres chantiers',
      compactText: 'Des prototypes et concepts encore utiles pour comprendre la démarche.',
      ruleTitle: 'À garder en tête',
      ruleText: 'Certains contenus sont anonymisés ou encore exploratoires ; leur statut est indiqué clairement.'
    }
  : {
      description: 'Experience notes, methods and demonstrable projects around front-end engineering, performance and product.',
      featuredEyebrow: 'Selected',
      indexEyebrow: 'Index',
      secondaryEyebrow: 'More',
      featuredTitle: 'Start here',
      featuredText: 'A short selection to quickly enter the most representative topics.',
      exploreTitle: 'Explore by type',
      exploreText: 'Filter content by format: experience note, method, finished project or exploration.',
      compactTitle: 'Other work',
      compactText: 'Prototypes and concepts that help explain the broader approach.',
      ruleTitle: 'Good to know',
      ruleText: 'Some pieces are anonymized or still exploratory; their status is made explicit.'
    })

useSiteSeo({
  title: currentLocale.value === 'fr' ? 'Chantiers' : 'Work',
  description: currentLocale.value === 'fr'
    ? 'Retours d’expérience, playbooks et projets autour du front-end, de la performance et du produit.'
    : 'Experience notes, playbooks and projects around front-end engineering, performance and product.'
})
</script>

<template>
  <main>
    <PageHero :title="t('nav.work')" :description="copy.description" />

    <section class="section">
      <div class="container index-layout">
        <LimitNotice icon="layers" :title="copy.ruleTitle" :text="copy.ruleText" />

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.featuredEyebrow }}</p>
              <h2>{{ copy.featuredTitle }}</h2>
            </div>
            <p>{{ copy.featuredText }}</p>
          </div>

          <div class="grid grid--3">
            <ChantierCard
              v-for="item in featuredItems"
              :key="item.slug"
              :title="item.title"
              :type="item.type"
              :excerpt="item.excerpt"
              :to="getWorkPath(currentLocale, item.slug)"
              :icon="item.icon"
              featured
            />
          </div>
        </div>

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.indexEyebrow }}</p>
              <h2>{{ copy.exploreTitle }}</h2>
            </div>
            <p>{{ copy.exploreText }}</p>
          </div>

          <div class="cluster filters">
            <button
              v-for="filter in filters"
              :key="filter"
              type="button"
              :class="['filter-button', { 'is-active': activeFilter === filter }]"
              @click="activeFilter = filter"
            >
              {{ t(`filters.${filter}`) }}
            </button>
          </div>

          <div class="compact-list">
            <CompactContentItem
              v-for="item in filteredItems"
              :key="item.slug"
              :title="item.title"
              :meta="item.type"
              :excerpt="item.excerpt"
              :to="getWorkPath(currentLocale, item.slug)"
              :icon="item.icon"
            />
          </div>
        </div>

        <div v-if="secondaryItems.length" class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.secondaryEyebrow }}</p>
              <h2>{{ copy.compactTitle }}</h2>
            </div>
            <p>{{ copy.compactText }}</p>
          </div>

          <div class="grid grid--2">
            <CompactContentItem
              v-for="item in secondaryItems"
              :key="`secondary-${item.slug}`"
              :title="item.title"
              :meta="item.type"
              :excerpt="item.excerpt"
              :to="getWorkPath(currentLocale, item.slug)"
              :icon="item.icon"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.filters { margin-bottom: 0.2rem; }
</style>
