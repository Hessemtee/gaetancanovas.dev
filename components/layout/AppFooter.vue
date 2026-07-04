<script setup lang="ts">
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)
const footerCopy = computed(() => currentLocale.value === 'fr'
  ? 'Front-end, produit, performance. Notes, chantiers et explorations autour d’interfaces web plus lisibles.'
  : 'Front-end, product, performance. Notes, work and explorations around clearer web interfaces.')
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <div class="app-footer__intro">
        <NuxtLink :to="staticPaths.home[currentLocale]" class="app-footer__brand">
          gaetancanovas<span>.dev</span>
          <span class="brand-mark" aria-hidden="true">
  <img src="/favicon-32.png" alt="" class="brand-mark__image" />
</span>
        </NuxtLink>
        <p>{{ footerCopy }}</p>
      </div>

      <nav class="app-footer__nav" aria-label="Footer">
        <NuxtLink :to="staticPaths.work[currentLocale]">{{ t('nav.work') }}</NuxtLink>
        <NuxtLink :to="staticPaths.lab[currentLocale]">{{ t('nav.lab') }}</NuxtLink>
        <NuxtLink :to="staticPaths.blog[currentLocale]">{{ t('nav.blog') }}</NuxtLink>
        <NuxtLink :to="staticPaths.about[currentLocale]">{{ t('nav.about') }}</NuxtLink>
        <NuxtLink :to="staticPaths.cv[currentLocale]">{{ t('nav.cv') }}</NuxtLink>
        <NuxtLink :to="staticPaths.privacy[currentLocale]">{{ t('nav.privacy') }}</NuxtLink>
        <NuxtLink :to="staticPaths.contact[currentLocale]">{{ t('nav.contact') }}</NuxtLink>
      </nav>

      <p class="app-footer__copyright">{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--color-border);
  background:
    radial-gradient(circle at 8% 0%, rgb(16 37 28 / 0.06), transparent 22rem),
    rgb(242 238 228 / 0.72);
  padding-block: 2.4rem;
}
.app-footer__inner {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(240px, auto) auto;
  align-items: center;
  gap: 1.4rem;
  color: var(--color-muted);
  font-size: 0.92rem;
}
.app-footer__intro {
  display: grid;
  gap: 0.45rem;
  max-width: 410px;
}
.app-footer__intro p,
.app-footer__copyright {
  margin: 0;
  line-height: 1.55;
}
.app-footer__brand {
  width: fit-content;
  font-family: var(--font-serif);
  font-size: 1.06rem;
  font-weight: 850;
  color: var(--color-text);
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
}
.app-footer__brand span {
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-size: 0.84rem;
}
.app-footer__brand .brand-mark {
  margin-left: 0.4rem;
}
.app-footer__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.45rem;
}
.app-footer__nav a {
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.42rem 0.65rem;
  transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
}
.app-footer__nav a:hover {
  border-color: var(--color-border);
  background: rgb(255 255 255 / 0.62);
  color: var(--color-primary);
}
@media (max-width: 920px) {
  .app-footer__inner { grid-template-columns: 1fr; }
  .app-footer__nav { justify-content: flex-start; }
}
</style>
