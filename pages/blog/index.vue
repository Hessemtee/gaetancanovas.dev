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
      description: 'Des notes techniques et réflexions de dev. Pas un blog d’actualité : plutôt un espace pour clarifier des méthodes, formaliser des idées et partager des arbitrages.',
      featuredTitle: 'À lire en premier',
      featuredText: 'Trois textes pour comprendre le ton : technique, IA appliquée et atelier d’idées.',
      latestTitle: 'Dernières notes',
      latestText: 'Une liste compacte pour parcourir les articles sans transformer le blog en flux infini.',
      categoriesTitle: 'Explorer par thème',
      categoriesText: 'Le blog doit rester une bibliothèque éditorialisée, pas une timeline.',
      all: 'Tous',
      ruleTitle: 'Règle du blog',
      ruleText: 'Peu d’articles, mais des textes utiles : clarifier une méthode, un arbitrage ou une idée.'
    }
  : {
      description: 'Technical notes and developer reflections. Not a news blog: a space to clarify methods, formalize ideas and share tradeoffs.',
      featuredTitle: 'Start here',
      featuredText: 'Three pieces to understand the tone: engineering, applied AI and the idea workshop.',
      latestTitle: 'Latest notes',
      latestText: 'A compact list to browse articles without turning the blog into an infinite feed.',
      categoriesTitle: 'Explore by theme',
      categoriesText: 'The blog should remain an editorialized library, not a timeline.',
      all: 'All',
      ruleTitle: 'Blog rule',
      ruleText: 'Fewer articles, but useful ones: clarify a method, a tradeoff or an idea.'
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
              <p class="eyebrow">Featured</p>
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
              <p class="eyebrow">Latest</p>
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
              <p class="eyebrow">Themes</p>
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
