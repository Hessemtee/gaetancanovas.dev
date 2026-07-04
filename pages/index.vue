<script setup lang="ts">
import { getAtelier, getBlogPosts, getChantiers } from '~/data/getters'
import { getBlogPath, getWorkPath, staticPaths, type LocaleCode } from '~/utils/localizedPaths'

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)

const chantiers = computed(() => getChantiers(currentLocale.value).filter((item) => item.featured).slice(0, 3))
const atelier = computed(() => getAtelier(currentLocale.value).slice(0, 4))
const posts = computed(() => getBlogPosts(currentLocale.value).filter((item) => item.featured).slice(0, 3))

const hero = computed(() => currentLocale.value === 'fr'
  ? {
      eyebrow: 'Front-end · Produit · Performance · IA appliquée',
      title: 'Gaëtan Canovas',
      subtitle: 'Développeur front-end orienté produit, performance et modernisation.',
      description: 'Je travaille à l’intersection du front-end, du produit et de la performance. Mon objectif : rendre les interfaces plus lisibles, les systèmes plus maintenables et les idées plus faciles à tester — avec ou sans IA, selon ce qui apporte réellement de la valeur.'
    }
  : {
      eyebrow: 'Front-end · Product · Performance · Applied AI',
      title: 'Gaëtan Canovas',
      subtitle: 'Product-minded front-end developer focused on performance and modernization.',
      description: 'I work at the intersection of front-end engineering, product thinking and web performance. My goal: make interfaces clearer, systems easier to maintain and ideas faster to test — with or without AI, depending on what actually brings value.'
    })


const heroTags = computed(() => currentLocale.value === 'fr'
  ? [
      { label: 'Vue / Nuxt', icon: 'code' },
      { label: 'React', icon: 'code' },
      { label: 'SSR', icon: 'bolt' },
      { label: 'SEO technique', icon: 'search' },
      { label: 'Performance', icon: 'gauge' },
      { label: 'Migrations', icon: 'hammer' },
      { label: 'Produit', icon: 'layers' },
      { label: 'IA appliquée', icon: 'sparkles' }
    ]
  : [
      { label: 'Vue / Nuxt', icon: 'code' },
      { label: 'React', icon: 'code' },
      { label: 'SSR', icon: 'bolt' },
      { label: 'Technical SEO', icon: 'search' },
      { label: 'Performance', icon: 'gauge' },
      { label: 'Migrations', icon: 'hammer' },
      { label: 'Product', icon: 'layers' },
      { label: 'Applied AI', icon: 'sparkles' }
    ])


const heroStartHere = computed(() => {
  const isFr = currentLocale.value === 'fr'

  return {
    title: isFr ? 'Par où commencer ?' : 'Where to start?',
    description: isFr
      ? 'Trois entrées pour aller à l’essentiel.'
      : 'Three paths to the essentials.',
    items: [
      {
        icon: 'gauge',
        label: isFr ? 'Voir le concret' : 'See concrete work',
        title: isFr ? 'Chantiers' : 'Work',
        text: isFr ? 'Expériences, méthodes et projets aboutis.' : 'Experience notes, methods and completed projects.',
        to: staticPaths.work[currentLocale.value]
      },
      {
        icon: 'brain',
        label: isFr ? 'Explorer' : 'Explore',
        title: isFr ? 'Atelier' : 'Lab',
        text: isFr ? 'Prototypes, concepts et recherches en cours.' : 'Prototypes, concepts and ongoing research.',
        to: staticPaths.lab[currentLocale.value]
      },
      {
        icon: 'pen',
        label: isFr ? 'Lire' : 'Read',
        title: 'Blog',
        text: isFr ? 'Notes techniques, produit et IA appliquée.' : 'Technical notes, product thinking and applied AI.',
        to: staticPaths.blog[currentLocale.value]
      }
    ],
    ruleTitle: isFr ? 'En résumé' : 'In short',
    rule: isFr
      ? 'Des chantiers concrets, un atelier d’idées et des notes pour expliquer les choix.'
      : 'Concrete work, an idea lab and notes to explain decisions.'
  }
})

const serviceItems = computed(() => currentLocale.value === 'fr'
  ? [
      {
        icon: 'code',
        title: 'Front-end maintenable',
        text: 'Architecture de composants, SSR, intégration CMS et interfaces compréhensibles dans la durée.'
      },
      {
        icon: 'gauge',
        title: 'Performance & SEO technique',
        text: 'Core Web Vitals, images, rendu critique, accessibilité, indexation et arbitrages pragmatiques.'
      },
      {
        icon: 'hammer',
        title: 'Modernisation progressive',
        text: 'Migration Vue/Nuxt, dette technique, stores, routing, CI/CD et stabilisation sans big bang.'
      },
      {
        icon: 'sparkles',
        title: 'Produit, prototype & IA',
        text: 'MVP, friction utilisateur, automatisations et IA appliquée pour tester plus vite.'
      }
    ]
  : [
      {
        icon: 'code',
        title: 'Maintainable front-end',
        text: 'Component architecture, SSR, CMS integration and interfaces that remain understandable over time.'
      },
      {
        icon: 'gauge',
        title: 'Performance & technical SEO',
        text: 'Core Web Vitals, images, critical rendering, accessibility, indexing and pragmatic tradeoffs.'
      },
      {
        icon: 'hammer',
        title: 'Progressive modernization',
        text: 'Vue/Nuxt migration, technical debt, stores, routing, CI/CD and stabilization without a big bang.'
      },
      {
        icon: 'sparkles',
        title: 'Product, prototype & AI',
        text: 'MVPs, user friction, automation and applied AI to test faster.'
      }
    ])

useSiteSeo({
  title: currentLocale.value === 'fr' ? 'Développeur front-end, performance & produit' : 'Front-end developer, performance & product',
  description: currentLocale.value === 'fr'
    ? 'Développeur front-end orienté produit, performance et modernisation.'
    : 'Product-minded front-end developer focused on performance and modernization.'
})
</script>

<template>
  <main>
    <section class="home-hero section">
      <div class="container split">
        <div>
          <p class="eyebrow">{{ hero.eyebrow }}</p>
          <h1 class="hero-title">{{ hero.title }}</h1>
          <p class="home-hero__subtitle">{{ hero.subtitle }}</p>
          <p class="lead">{{ hero.description }}</p>
          <div class="home-hero__actions">
            <BaseButton :to="staticPaths.work[currentLocale]">
              {{ t('cta.viewWork') }} <InlineIcon name="arrow-right" />
            </BaseButton>
            <BaseButton :to="staticPaths.blog[currentLocale]" variant="secondary">
              {{ t('cta.readBlog') }}
            </BaseButton>
          </div>
          <div class="cluster home-hero__tags">
            <BaseBadge v-for="tag in heroTags" :key="tag.label" :label="tag.label" :icon="tag.icon" />
          </div>
        </div>

        <aside class="start-here card" aria-labelledby="start-here-title">
          <div class="start-here__header">
            <span class="start-here__kicker">
              <InlineIcon name="layers" :size="15" />
              {{ currentLocale === 'fr' ? 'Accès rapide' : 'Quick access' }}
            </span>
            <h2 id="start-here-title">{{ heroStartHere.title }}</h2>
            <p>{{ heroStartHere.description }}</p>
          </div>

          <div class="start-here__list">
            <NuxtLink v-for="item in heroStartHere.items" :key="item.title" :to="item.to" class="start-here__item">
              <span class="icon-box icon-box--light"><InlineIcon :name="item.icon" :size="19" /></span>
              <span class="start-here__content">
                <small>{{ item.label }}</small>
                <strong>{{ item.title }}</strong>
                <span>{{ item.text }}</span>
              </span>
              <InlineIcon name="chevron-right" :size="17" />
            </NuxtLink>
          </div>

          <div class="start-here__rule">
            <strong>{{ heroStartHere.ruleTitle }}</strong>
            <span>{{ heroStartHere.rule }}</span>
          </div>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader
          :title="currentLocale === 'fr' ? 'Ce que je rends plus simple' : 'What I make simpler'"
          :description="currentLocale === 'fr' ? 'J’interviens sur des interfaces web où la technique, le contenu, la performance et l’expérience utilisateur doivent avancer ensemble.' : 'I work on web interfaces where engineering, content, performance and user experience need to move together.'"
        />
        <div class="grid grid--4">
          <article v-for="item in serviceItems" :key="item.title" class="card service-card">
            <span class="icon-box icon-box--warm"><InlineIcon :name="item.icon" :size="22" /></span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <SectionHeader
          :title="t('nav.work')"
          :description="currentLocale === 'fr' ? 'Des retours d’expérience, méthodes et projets concrets, avec un niveau de détail adapté à ce qui peut être montré.' : 'Experience notes, methods and concrete projects, with the right level of detail for what can be shown.'"
        />
        <div class="grid grid--3">
          <ChantierCard
            v-for="item in chantiers"
            :key="item.slug"
            :title="item.title"
            :type="item.type"
            :excerpt="item.excerpt"
            :to="getWorkPath(currentLocale, item.slug)"
            :icon="item.icon"
            featured
          />
        </div>
        <p class="section-link"><NuxtLink :to="staticPaths.work[currentLocale]">{{ t('cta.viewAllWork') }} →</NuxtLink></p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeader
          :title="t('nav.lab')"
          :description="currentLocale === 'fr' ? 'Prototypes, concepts et recherches en cours. Tout n’est pas un produit fini : l’atelier montre la démarche.' : 'Prototypes, concepts and ongoing research. Not everything is a finished product: the lab shows the process.'"
        />
        <div class="grid grid--4">
          <AtelierCard v-for="item in atelier" :key="item.title" :title="item.title" :type="item.type" :excerpt="item.excerpt" :icon="item.icon" />
        </div>
        <p class="section-link"><NuxtLink :to="staticPaths.lab[currentLocale]">{{ t('cta.exploreLab') }} →</NuxtLink></p>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <SectionHeader
          :title="t('nav.blog')"
          :description="currentLocale === 'fr' ? 'Des notes techniques et réflexions de dev : front-end, performance, produit, IA appliquée et philosophie de construction.' : 'Technical notes and developer reflections: front-end, performance, product, applied AI and building philosophy.'"
        />
        <div class="grid grid--3">
          <BlogCard v-for="post in posts" :key="post.slug" :title="post.title" :category="post.category" :excerpt="post.excerpt" :to="getBlogPath(currentLocale, post.slug)" :icon="post.icon" featured />
        </div>
        <p class="section-link"><NuxtLink :to="staticPaths.blog[currentLocale]">{{ t('cta.readArticles') }} →</NuxtLink></p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-cta card">
        <h2 class="section-title">{{ currentLocale === 'fr' ? 'Construisons ensemble quelque chose de clair, rapide et utile.' : 'Let’s build together something clear, fast and useful.' }}</h2>
        <p class="lead">{{ currentLocale === 'fr' ? 'Pour une mission front-end, une modernisation de projet, un prototype ou une discussion autour d’un produit web.' : 'For a front-end mission, project modernization, prototype or product discussion.' }}</p>
        <BaseButton :to="staticPaths.contact[currentLocale]">{{ t('cta.contact') }}</BaseButton>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
  background:
    radial-gradient(circle at 16% 12%, rgb(16 37 28 / 0.08), transparent 34rem),
    radial-gradient(circle at 90% 0%, rgb(195 111 50 / 0.11), transparent 28rem),
    linear-gradient(180deg, rgb(248 245 238 / 0.2), rgb(242 238 228 / 0.42));
}
.home-hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgb(16 37 28 / 0.18), transparent);
}
.home-hero__subtitle {
  margin: 1.2rem 0 0.3rem;
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 820;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}
.home-hero__tags { margin-top: 1.5rem; }
.start-here {
  position: relative;
  overflow: hidden;
  padding: clamp(1rem, 3vw, 1.45rem);
  border-radius: var(--radius-2xl);
  background:
    radial-gradient(circle at top right, rgb(195 111 50 / 0.14), transparent 38%),
    radial-gradient(circle at 0% 0%, rgb(16 37 28 / 0.08), transparent 38%),
    linear-gradient(145deg, rgb(255 255 255 / 0.92), rgb(248 245 238 / 0.88));
  box-shadow: var(--shadow-glow);
}
.start-here::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  border: 1px solid rgb(255 255 255 / 0.72);
}
.start-here__header {
  position: relative;
  padding: 0.65rem 0.7rem 0.95rem;
}
.start-here__header h2 {
  margin: 0.65rem 0 0;
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
}
.start-here__header p {
  margin: 0.85rem 0 0;
  color: var(--color-muted);
  line-height: 1.65;
}
.start-here__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid rgb(16 37 28 / 0.12);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.78);
  color: var(--color-primary);
  padding: 0.45rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.start-here__list {
  display: grid;
  gap: 0.78rem;
  margin-top: 0.35rem;
}
.start-here__item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: 1.2rem;
  background: rgb(255 255 255 / 0.76);
  padding: 0.86rem;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;
}
.start-here__item:hover {
  transform: translateY(-2px);
  border-color: rgb(16 37 28 / 0.22);
  background: white;
  box-shadow: 0 14px 32px rgb(16 37 28 / 0.07);
}
.start-here__content {
  display: grid;
  gap: 0.12rem;
}
.start-here__content small {
  color: var(--color-accent);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.start-here__content strong { font-size: 1rem; }
.start-here__content span {
  color: var(--color-muted);
  font-size: 0.84rem;
  line-height: 1.4;
}
.start-here__rule {
  display: grid;
  gap: 0.35rem;
  margin-top: 1rem;
  border-radius: 1.25rem;
  background: linear-gradient(145deg, var(--color-primary), #17382b);
  color: white;
  padding: 1rem;
  box-shadow: 0 14px 28px rgb(16 37 28 / 0.14);
}
.start-here__rule strong {
  color: rgb(255 255 255 / 0.74);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.start-here__rule span {
  font-size: 0.95rem;
  line-height: 1.5;
}
.service-card {
  overflow: hidden;
  padding: 1.35rem;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease;
}
.service-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  opacity: 0;
  transition: opacity 160ms ease;
}
.service-card:hover {
  transform: translateY(-3px);
  border-color: rgb(16 37 28 / 0.22);
  background: rgb(255 255 255 / 0.92);
  box-shadow: var(--shadow-card);
}
.service-card:hover::before { opacity: 1; }
.service-card h3 {
  margin: 1rem 0 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-wrap: balance;
}
.service-card p { margin: 0; color: var(--color-muted); line-height: 1.65; }
.contact-cta {
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 3rem);
  background:
    radial-gradient(circle at 100% 0%, rgb(195 111 50 / 0.11), transparent 34%),
    linear-gradient(145deg, rgb(255 255 255 / 0.88), rgb(250 247 240 / 0.82));
  box-shadow: var(--shadow-card);
}
@media (max-width: 760px) {
  .start-here__item { grid-template-columns: auto minmax(0, 1fr); }
  .start-here__item > svg { display: none; }
}
</style>
