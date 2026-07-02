<script setup lang="ts">
import { getBlogDetail } from '~/data/getters'
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/blog/[slug]',
      en: '/blog/[slug]'
    }
  }
})

const route = useRoute()
const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const slug = computed(() => String(route.params.slug))
const page = computed(() => getBlogDetail(currentLocale.value, slug.value))

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useSiteSeo({
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <main v-if="page">
    <article>
      <section class="section detail-hero">
        <div class="container prose-detail">
          <Breadcrumb
            :items="[
              { label: currentLocale === 'fr' ? 'Accueil' : 'Home', to: staticPaths.home[currentLocale] },
              { label: t('nav.blog'), to: staticPaths.blog[currentLocale] },
              { label: page.title }
            ]"
          />

          <div class="detail-kicker">
            <BaseBadge :label="page.category" tone="soft" />
          </div>
          <h1>{{ page.title }}</h1>
          <p class="lead">{{ page.intro }}</p>

          <div v-if="page.date || page.readingTime || page.status" class="article-meta">
            <span v-if="page.status">{{ page.status }}</span>
            <span v-if="page.readingTime">{{ page.readingTime }}</span>
            <span v-if="page.date">{{ page.date }}</span>
          </div>
        </div>
      </section>

      <section class="section section--compact">
        <div class="container prose-detail detail-body card card--strong">
          <section v-for="section in page.sections" :key="section.title" class="detail-section">
            <h2>{{ section.title }}</h2>
            <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
          </section>

          <p class="back-link"><NuxtLink :to="staticPaths.blog[currentLocale]">← {{ t('nav.blog') }}</NuxtLink></p>
        </div>
      </section>
    </article>
  </main>
</template>

<style scoped>
.detail-hero {
  overflow: hidden;
  border-bottom: 1px solid rgb(222 216 204 / 0.72);
  background:
    radial-gradient(circle at 16% 0%, rgb(16 37 28 / 0.075), transparent 28rem),
    radial-gradient(circle at 90% 0%, rgb(195 111 50 / 0.10), transparent 24rem),
    linear-gradient(180deg, rgb(248 245 238 / 0.86), rgb(242 238 228 / 0.48));
}
.prose-detail { max-width: 820px; }
.detail-kicker { margin-top: 1rem; }
.prose-detail h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.045em;
  margin: 1rem 0;
  text-wrap: balance;
}
.detail-body {
  padding: clamp(1.3rem, 4vw, 3rem);
  box-shadow: var(--shadow-card);
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.4rem;
}
.article-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  border: 1px solid rgb(222 216 204 / 0.78);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.62);
  color: var(--color-muted-strong);
  padding: 0.35rem 0.7rem;
  font-size: 0.83rem;
  font-weight: 850;
}
.detail-media {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}
.detail-media__header h2 {
  margin: 0 0 0.75rem;
  font-family: var(--font-serif);
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  line-height: 1;
  letter-spacing: -0.045em;
}
.detail-media__header p:not(.eyebrow) {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.7;
}
.media-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 1.4rem;
}
.media-slot {
  display: grid;
  gap: 0.9rem;
  min-height: 12rem;
  border: 1px dashed rgb(16 37 28 / 0.2);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 100% 0%, rgb(195 111 50 / 0.08), transparent 40%),
    linear-gradient(145deg, rgb(248 245 238 / 0.94), rgb(255 255 255 / 0.84));
  padding: 1rem;
}
.media-slot strong {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 1.04rem;
  letter-spacing: -0.02em;
}
.media-slot p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.6;
  font-size: 0.94rem;
}
.detail-section + .detail-section {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}
.detail-section h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
  text-wrap: balance;
}
.detail-section p,
.detail-section li {
  color: var(--color-muted);
  line-height: 1.82;
}
.detail-section p { margin-block: 0.8rem; }
.detail-section ul {
  display: grid;
  gap: 0.55rem;
  padding-left: 1.2rem;
}
.detail-section li::marker { color: var(--color-accent); }
.back-link {
  margin-top: 2.5rem;
  font-weight: 850;
  color: var(--color-primary);
}
.back-link a:hover { color: var(--color-accent); }
@media (max-width: 860px) {
  .media-grid { grid-template-columns: 1fr; }
  .media-slot { min-height: auto; }
}
</style>
