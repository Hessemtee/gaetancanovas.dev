<script setup lang="ts">
import { getAtelier } from '~/data/getters'
import type { LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/atelier',
      en: '/lab'
    }
  }
})

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const items = computed(() => getAtelier(currentLocale.value))
const priorityItems = computed(() => items.value.slice(0, 4))
const filters = ['all', 'public', 'desktop', 'prototype', 'concept', 'manifesto', 'ai']
const activeFilter = ref('all')
const filteredItems = computed(() => activeFilter.value === 'all' ? items.value : items.value.filter((item) => item.category === activeFilter.value))

const groupedItems = computed(() => {
  const groups = [
    { key: 'public', label: t('filters.public') },
    { key: 'desktop', label: t('filters.desktop') },
    { key: 'prototype', label: t('filters.prototype') },
    { key: 'concept', label: t('filters.concept') },
    { key: 'manifesto', label: t('filters.manifesto') },
    { key: 'ai', label: t('filters.ai') }
  ]

  return groups
    .map((group) => ({
      ...group,
      items: items.value.filter((item) => item.category === group.key)
    }))
    .filter((group) => group.items.length > 0)
})

const copy = computed(() => currentLocale.value === 'fr'
  ? {
      description: 'Prototypes, concepts et recherches autour du web, du produit et de l’IA appliquée. Certaines idées deviendront des projets ; d’autres resteront des notes utiles.',
      priorityEyebrow: 'Sélection',
      indexEyebrow: 'Index',
      groupedEyebrow: 'Familles',
      priorityTitle: 'À explorer en priorité',
      priorityText: 'Les objets les plus concrets ou les plus représentatifs.',
      filtersTitle: 'Tous les objets de l’atelier',
      filtersText: 'Filtrer les idées par statut ou par nature : prototype, concept, manifeste, recherche IA.',
      groupedTitle: 'Par familles',
      groupedText: 'Une autre lecture des objets de l’atelier, regroupés par nature.',
      ruleTitle: 'Un espace d’exploration',
      ruleText: 'Certaines idées deviendront des projets, d’autres resteront des notes. L’intérêt est de les rendre discutables.'
    }
  : {
      description: 'Prototypes, concepts and research around the web, product thinking and applied AI. Some ideas may become projects; others remain useful notes.',
      priorityEyebrow: 'Selected',
      indexEyebrow: 'Index',
      groupedEyebrow: 'Families',
      priorityTitle: 'Explore first',
      priorityText: 'The most concrete or representative items.',
      filtersTitle: 'All lab objects',
      filtersText: 'Filter ideas by status or type: prototype, concept, manifesto, AI research.',
      groupedTitle: 'By family',
      groupedText: 'Another view of the lab items, grouped by nature.',
      ruleTitle: 'Exploration space',
      ruleText: 'Some ideas may become projects; others will remain notes. The goal is to make them discussable.'
    })

useSiteSeo({
  title: currentLocale.value === 'fr' ? 'Atelier' : 'Lab',
  description: currentLocale.value === 'fr'
    ? 'Prototypes, concepts, manifestes et recherches autour du web, du produit et de l’IA appliquée.'
    : 'Prototypes, concepts, manifestos and research around web, product and applied AI.'
})
</script>

<template>
  <main>
    <PageHero :title="t('nav.lab')" :description="copy.description" />

    <section class="section">
      <div class="container index-layout">
        <LimitNotice icon="brain" :title="copy.ruleTitle" :text="copy.ruleText" />

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.priorityEyebrow }}</p>
              <h2>{{ copy.priorityTitle }}</h2>
            </div>
            <p>{{ copy.priorityText }}</p>
          </div>

          <div class="grid grid--4">
            <AtelierCard
              v-for="item in priorityItems"
              :key="item.title"
              :title="item.title"
              :type="item.type"
              :excerpt="item.excerpt"
              :icon="item.icon"
            />
          </div>
        </div>

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.indexEyebrow }}</p>
              <h2>{{ copy.filtersTitle }}</h2>
            </div>
            <p>{{ copy.filtersText }}</p>
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
              :key="`filtered-${item.title}`"
              :title="item.title"
              :meta="item.type"
              :excerpt="item.excerpt"
              :icon="item.icon"
            />
          </div>
        </div>

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.groupedEyebrow }}</p>
              <h2>{{ copy.groupedTitle }}</h2>
            </div>
            <p>{{ copy.groupedText }}</p>
          </div>

          <div class="lab-family-grid">
            <section v-for="group in groupedItems" :key="group.key" class="lab-family card">
              <h3>{{ group.label }}</h3>
              <div class="compact-list">
                <CompactContentItem
                  v-for="item in group.items"
                  :key="`${group.key}-${item.title}`"
                  :title="item.title"
                  :meta="item.type"
                  :excerpt="item.excerpt"
                  :icon="item.icon"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.filters { margin-bottom: 0.2rem; }
.lab-family-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.lab-family {
  display: grid;
  gap: 0.8rem;
  padding: 1rem;
}
.lab-family h3 {
  margin: 0;
  font-size: 1.05rem;
  letter-spacing: -0.02em;
}
@media (max-width: 760px) {
  .lab-family-grid { grid-template-columns: 1fr; }
}
</style>
