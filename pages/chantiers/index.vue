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
      description: 'Des terrains de travail plutôt que des vitrines forcées. Chaque page précise ce qui peut réellement être montré.',
      featuredTitle: 'À lire en premier',
      featuredText: 'Les contenus les plus utiles pour comprendre mon positionnement : retour d’expérience, playbook et projet terminé.',
      exploreTitle: 'Explorer par type',
      exploreText: 'Les filtres permettent de creuser sans transformer la page en liste interminable.',
      compactTitle: 'Autres chantiers',
      compactText: 'Des prototypes ou concepts qui complètent le socle principal.',
      ruleTitle: 'Règle éditoriale',
      ruleText: 'Cette page met d’abord en avant les preuves les plus solides. Le reste reste accessible, mais en second niveau.'
    }
  : {
      description: 'Working grounds rather than forced showcases. Each page makes clear what can actually be shown.',
      featuredTitle: 'Start here',
      featuredText: 'The most useful pieces to understand my positioning: experience note, playbook and finished project.',
      exploreTitle: 'Explore by type',
      exploreText: 'Filters let you dig without turning the page into an endless list.',
      compactTitle: 'Other work',
      compactText: 'Prototypes or concepts that complement the main foundation.',
      ruleTitle: 'Editorial rule',
      ruleText: 'This page highlights the strongest proof first. Everything else remains accessible, but one level lower.'
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
              <p class="eyebrow">Featured</p>
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
              <p class="eyebrow">Index</p>
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
              <p class="eyebrow">Secondary</p>
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
