<script setup lang="ts">
import { getBlogPosts } from '~/data/getters'
import { getBlogPath, type LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/blog',
      en: '/blog'
    }
  }
})

const { locale } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const posts = computed(() => getBlogPosts(currentLocale.value))
const featuredPosts = computed(() => posts.value.filter((post) => post.featured).slice(0, 3))
const latestPosts = computed(() => posts.value.slice(0, 6))
const categories = computed(() => Array.from(new Set(posts.value.map((post) => post.category))))
const activeCategory = ref('all')
const filteredPosts = computed(() => activeCategory.value === 'all' ? posts.value : posts.value.filter((post) => post.category === activeCategory.value))

const copy = computed(() => currentLocale.value === 'fr'
  ? {
      description: 'Notes techniques et réflexions de dev pour clarifier des méthodes, formaliser des idées et partager des arbitrages.',
      featuredEyebrow: 'Sélection',
      latestEyebrow: 'Récent',
      categoriesEyebrow: 'Thèmes',
      featuredTitle: 'À lire en premier',
      featuredText: 'Trois textes pour entrer dans les sujets principaux : modernisation, IA appliquée et atelier d’idées.',
      latestTitle: 'Dernières notes',
      latestText: 'Parcourir les articles récents dans un format compact.',
      categoriesTitle: 'Explorer par thème',
      categoriesText: 'Filtrer les articles par thème : technique, produit, performance ou IA appliquée.',
      all: 'Tous',
      ruleTitle: 'Ligne éditoriale',
      ruleText: 'Des textes courts ou moyens, écrits pour clarifier une méthode, un arbitrage ou une idée.'
    }
  : {
      description: 'Technical notes and developer reflections to clarify methods, formalize ideas and share tradeoffs.',
      featuredEyebrow: 'Selected',
      latestEyebrow: 'Latest',
      categoriesEyebrow: 'Themes',
      featuredTitle: 'Start here',
      featuredText: 'Three pieces to enter the main topics: modernization, applied AI and the idea workshop.',
      latestTitle: 'Latest notes',
      latestText: 'Browse recent articles in a compact format.',
      categoriesTitle: 'Explore by theme',
      categoriesText: 'Filter articles by theme: engineering, product, performance or applied AI.',
      all: 'All',
      ruleTitle: 'Editorial line',
      ruleText: 'Short or mid-length pieces written to clarify a method, a tradeoff or an idea.'
    })

useSiteSeo({
  title: currentLocale.value === 'fr' ? 'Blog' : 'Blog',
  description: currentLocale.value === 'fr'
    ? 'Notes techniques et réflexions autour du front-end, de la performance, du produit et de l’IA appliquée.'
    : 'Technical notes and reflections around front-end, performance, product and applied AI.'
})
</script>

<template>
  <main>
    <PageHero title="Blog" :description="copy.description" />

    <section class="section">
      <div class="container index-layout">
        <LimitNotice icon="pen" :title="copy.ruleTitle" :text="copy.ruleText" />

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.featuredEyebrow }}</p>
              <h2>{{ copy.featuredTitle }}</h2>
            </div>
            <p>{{ copy.featuredText }}</p>
          </div>

          <div class="grid grid--3">
            <BlogCard
              v-for="post in featuredPosts"
              :key="post.slug"
              :title="post.title"
              :category="post.category"
              :excerpt="post.excerpt"
              :to="getBlogPath(currentLocale, post.slug)"
              :icon="post.icon"
              featured
            />
          </div>
        </div>

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.latestEyebrow }}</p>
              <h2>{{ copy.latestTitle }}</h2>
            </div>
            <p>{{ copy.latestText }}</p>
          </div>

          <div class="compact-list">
            <CompactContentItem
              v-for="post in latestPosts"
              :key="`latest-${post.slug}`"
              :title="post.title"
              :meta="post.category"
              :excerpt="post.excerpt"
              :to="getBlogPath(currentLocale, post.slug)"
              :icon="post.icon"
            />
          </div>
        </div>

        <div class="index-block">
          <div class="index-block__header">
            <div>
              <p class="eyebrow">{{ copy.categoriesEyebrow }}</p>
              <h2>{{ copy.categoriesTitle }}</h2>
            </div>
            <p>{{ copy.categoriesText }}</p>
          </div>

          <div class="cluster filters">
            <button
              type="button"
              :class="['filter-button', { 'is-active': activeCategory === 'all' }]"
              @click="activeCategory = 'all'"
            >
              {{ copy.all }}
            </button>
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              :class="['filter-button', { 'is-active': activeCategory === category }]"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>

          <div class="compact-list">
            <CompactContentItem
              v-for="post in filteredPosts"
              :key="`filtered-${post.slug}`"
              :title="post.title"
              :meta="post.category"
              :excerpt="post.excerpt"
              :to="getBlogPath(currentLocale, post.slug)"
              :icon="post.icon"
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
