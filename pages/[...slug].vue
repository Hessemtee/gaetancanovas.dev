<script setup lang="ts">
import { staticPaths } from '~/utils/localizedPaths'

const route = useRoute()
const isEnglishPath = computed(() => route.path === '/en' || route.path.startsWith('/en/'))
const content = computed(() => isEnglishPath.value
  ? {
      eyebrow: '404',
      title: 'Page not found',
      description: 'This page does not exist or has moved. The site is short on purpose: the best entry points are work, lab, blog and contact.',
      primaryLabel: 'Back to home',
      secondaryLabel: 'Contact',
      home: staticPaths.home.en,
      contact: staticPaths.contact.en,
      linksTitle: 'Useful pages',
      links: [
        { label: 'Work', to: staticPaths.work.en },
        { label: 'Lab', to: staticPaths.lab.en },
        { label: 'Blog', to: staticPaths.blog.en },
        { label: 'Resume', to: staticPaths.cv.en }
      ]
    }
  : {
      eyebrow: '404',
      title: 'Page introuvable',
      description: 'Cette page n’existe pas ou a été déplacée. Le site reste volontairement court : les meilleures portes d’entrée sont les chantiers, l’atelier, le blog et le contact.',
      primaryLabel: 'Retour à l’accueil',
      secondaryLabel: 'Contact',
      home: staticPaths.home.fr,
      contact: staticPaths.contact.fr,
      linksTitle: 'Pages utiles',
      links: [
        { label: 'Chantiers', to: staticPaths.work.fr },
        { label: 'Atelier', to: staticPaths.lab.fr },
        { label: 'Blog', to: staticPaths.blog.fr },
        { label: 'CV', to: staticPaths.cv.fr }
      ]
    }
)

setResponseStatus(404)

useSiteSeo({
  title: content.value.title,
  description: content.value.description,
  noindex: true,
  noAlternates: true
})
</script>

<template>
  <main>
    <section class="section not-found-hero">
      <div class="container not-found-hero__inner">
        <p class="eyebrow">{{ content.eyebrow }}</p>
        <h1 class="page-title">{{ content.title }}</h1>
        <p class="lead">{{ content.description }}</p>
        <div class="cluster not-found-hero__actions">
          <BaseButton :to="content.home">{{ content.primaryLabel }}</BaseButton>
          <BaseButton :to="content.contact" variant="secondary">{{ content.secondaryLabel }}</BaseButton>
        </div>
      </div>
    </section>

    <section class="section section--compact">
      <div class="container not-found-card card card--strong">
        <h2>{{ content.linksTitle }}</h2>
        <div class="not-found-links">
          <NuxtLink v-for="link in content.links" :key="link.to" :to="link.to">
            {{ link.label }} <InlineIcon name="chevron-right" :size="16" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.not-found-hero {
  border-bottom: 1px solid rgb(222 216 204 / 0.72);
  background:
    radial-gradient(circle at 12% 0%, rgb(16 37 28 / 0.075), transparent 28rem),
    radial-gradient(circle at 88% 0%, rgb(195 111 50 / 0.09), transparent 24rem),
    linear-gradient(180deg, rgb(248 245 238 / 0.9), rgb(242 238 228 / 0.54));
}

.not-found-hero__inner {
  display: grid;
  gap: 1rem;
  max-width: 820px;
}

.not-found-hero__actions { margin-top: 0.8rem; }

.not-found-card {
  display: grid;
  gap: 1rem;
  padding: clamp(1.4rem, 4vw, 2.2rem);
}

.not-found-card h2 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: -0.035em;
}

.not-found-links {
  display: grid;
  gap: 0.65rem;
}

.not-found-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 0.68);
  padding: 0.85rem 1rem;
  color: var(--color-primary);
  font-weight: 850;
  transition: border-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
}

.not-found-links a:hover {
  transform: translateY(-1px);
  border-color: rgb(16 37 28 / 0.24);
  box-shadow: 0 10px 22px rgb(16 37 28 / 0.06);
}
</style>
