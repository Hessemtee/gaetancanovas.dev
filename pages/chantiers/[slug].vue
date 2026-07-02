<script setup lang="ts">
import { getChantierDetail } from '~/data/getters'
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/chantiers/[slug]',
      en: '/work/[slug]'
    }
  }
})

const route = useRoute()
const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const slug = computed(() => String(route.params.slug))
const page = computed(() => getChantierDetail(currentLocale.value, slug.value))

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
    <section class="section detail-hero">
      <div class="container prose-detail">
        <Breadcrumb
          :items="[
            { label: currentLocale === 'fr' ? 'Accueil' : 'Home', to: staticPaths.home[currentLocale] },
            { label: t('nav.work'), to: staticPaths.work[currentLocale] },
            { label: page.title }
          ]"
        />

        <div class="detail-kicker">
          <BaseBadge :label="page.type" tone="soft" />
        </div>
        <h1>{{ page.title }}</h1>
        <p class="lead">{{ page.intro }}</p>

        <dl v-if="page.facts?.length" class="detail-facts">
          <div v-for="fact in page.facts" :key="fact.label" class="detail-fact">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container prose-detail detail-body card card--strong">
        <section v-if="page.media" class="detail-media" aria-labelledby="media-title">
          <div class="detail-media__header">
            <div>
              <p class="eyebrow">{{ currentLocale === 'fr' ? 'Démo' : 'Demo' }}</p>
              <h2 id="media-title">{{ page.media.title }}</h2>
              <p>{{ page.media.description }}</p>
            </div>
          </div>

          <div class="media-grid">
            <article v-for="item in page.media.items" :key="item.title" class="media-slot">
              <span class="media-slot__icon icon-box icon-box--warm">
                <InlineIcon :name="item.kind === 'video' ? 'play' : item.kind === 'screenshot' ? 'image' : 'layers'" :size="22" />
              </span>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.description }}</p>
              </div>
            </article>
          </div>
        </section>

        <section v-for="section in page.sections" :key="section.title" class="detail-section">
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
          <ul v-if="section.bullets?.length">
            <li v-for="bullet in section.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </section>

        <p class="back-link">
          <NuxtLink :to="staticPaths.work[currentLocale]">← {{ t('nav.work') }}</NuxtLink>
        </p>
      </div>
    </section>
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

.detail-facts {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 1.6rem 0 0;
}
.detail-fact {
  border: 1px solid rgb(222 216 204 / 0.78);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.62);
  padding: 0.8rem 0.9rem;
  box-shadow: 0 10px 30px rgb(16 37 28 / 0.035);
}
.detail-fact dt {
  margin: 0 0 0.3rem;
  color: var(--color-muted);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.detail-fact dd {
  margin: 0;
  color: var(--color-text);
  font-size: 0.92rem;
  font-weight: 850;
  line-height: 1.3;
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
  .detail-facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .media-grid { grid-template-columns: 1fr; }
  .media-slot { min-height: auto; }
}
@media (max-width: 560px) {
  .detail-facts { grid-template-columns: 1fr; }
}
</style>
