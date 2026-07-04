<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'
import InlineIcon from '~/components/icons/InlineIcon.vue'
import LocaleSwitcher from '~/components/layout/LocaleSwitcher.vue'
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'

const { locale, t } = useI18n()
const route = useRoute()
const isOpen = ref(false)

const currentLocale = computed(() => locale.value as LocaleCode)
const navLinks = computed(() => [
  { label: t('nav.work'), to: staticPaths.work[currentLocale.value] },
  { label: t('nav.lab'), to: staticPaths.lab[currentLocale.value] },
  { label: t('nav.blog'), to: staticPaths.blog[currentLocale.value] },
  { label: t('nav.about'), to: staticPaths.about[currentLocale.value] },
  { label: t('nav.contact'), to: staticPaths.contact[currentLocale.value] }
])

const navLabel = computed(() => currentLocale.value === 'fr' ? 'Navigation principale' : 'Main navigation')
const mobileNavLabel = computed(() => currentLocale.value === 'fr' ? 'Navigation mobile' : 'Mobile navigation')
const menuLabel = computed(() => {
  if (currentLocale.value === 'fr') return isOpen.value ? 'Fermer le menu' : 'Ouvrir le menu'
  return isOpen.value ? 'Close menu' : 'Open menu'
})

watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <NuxtLink :to="staticPaths.home[currentLocale]" class="app-header__brand" aria-label="gaetancanovas.dev">
        <span class="brand-mark" aria-hidden="true">
  <img src="/favicon-64.png" alt="" class="brand-mark__image" />
</span>
        <span class="app-header__brand-text">gaetancanovas<em>.dev</em></span>
      </NuxtLink>

      <nav class="app-header__nav" :aria-label="navLabel">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="app-header__link">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="app-header__actions">
        <LocaleSwitcher />
        <BaseButton :to="staticPaths.contact[currentLocale]" variant="secondary" class="app-header__cta">
          {{ t('cta.contact') }}
        </BaseButton>
        <button
          class="app-header__menu-button"
          type="button"
          :aria-expanded="isOpen"
          :aria-label="menuLabel"
          aria-controls="mobile-navigation"
          @click="isOpen = !isOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <div v-if="isOpen" id="mobile-navigation" class="app-header__mobile">
      <nav class="container app-header__mobile-nav" :aria-label="mobileNavLabel">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to">
          {{ link.label }} <InlineIcon name="chevron-right" :size="16" />
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid rgb(222 216 204 / 0.7);
  background: rgb(248 245 238 / 0.82);
  backdrop-filter: blur(20px) saturate(1.08);
  box-shadow: 0 1px 0 rgb(16 37 28 / 0.03);
}
.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-height);
  gap: 1rem;
}
.app-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  min-width: fit-content;
}
.app-header__brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.32rem;
  height: 2.32rem;
  border: 1px solid rgb(255 255 255 / 0.18);
  border-radius: 0.9rem;
  background: linear-gradient(145deg, var(--color-primary), #17382b);
  color: white;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  box-shadow: 0 12px 24px rgb(16 37 28 / 0.16);
}
.app-header__brand-text {
  display: inline-flex;
  align-items: baseline;
  gap: 0.05rem;
  font-family: var(--font-serif);
  font-size: 1.18rem;
  font-weight: 850;
  letter-spacing: -0.03em;
}
.app-header__brand-text em {
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-style: normal;
}
.app-header__nav {
  display: flex;
  align-items: center;
  gap: 0.18rem;
  border: 1px solid rgb(222 216 204 / 0.82);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.58);
  padding: 0.28rem;
  color: var(--color-muted);
  font-size: 0.9rem;
  font-weight: 780;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.65);
}
.app-header__link {
  position: relative;
  border-radius: 999px;
  padding: 0.55rem 0.85rem;
  transition: background 160ms ease, color 160ms ease, box-shadow 160ms ease;
}
.app-header__link:hover,
.app-header__link.router-link-active {
  background: white;
  color: var(--color-primary);
  box-shadow: 0 1px 0 rgb(16 37 28 / 0.04), 0 8px 18px rgb(16 37 28 / 0.05);
}
.app-header__link.router-link-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0.3rem;
  width: 0.28rem;
  height: 0.28rem;
  border-radius: 999px;
  background: var(--color-accent);
  transform: translateX(-50%);
}
.app-header__actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}
.app-header__menu-button {
  display: none;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.78);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.65);
}
.app-header__menu-button span {
  display: block;
  width: 1rem;
  height: 2px;
  margin: 0.22rem auto;
  border-radius: 999px;
  background: var(--color-primary);
  transition: transform 160ms ease, opacity 160ms ease;
}
.app-header__menu-button[aria-expanded='true'] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.app-header__menu-button[aria-expanded='true'] span:nth-child(2) { opacity: 0; }
.app-header__menu-button[aria-expanded='true'] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
.app-header__mobile {
  border-top: 1px solid rgb(222 216 204 / 0.7);
  background: rgb(248 245 238 / 0.96);
  box-shadow: 0 24px 60px rgb(16 37 28 / 0.09);
}
.app-header__mobile-nav {
  display: grid;
  gap: 0.48rem;
  padding-block: 0.9rem 1.05rem;
}
.app-header__mobile-nav a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: 1.1rem;
  background: rgb(255 255 255 / 0.68);
  padding: 0.95rem 1rem;
  color: var(--color-text);
  font-weight: 830;
  box-shadow: 0 8px 18px rgb(16 37 28 / 0.04);
}
.app-header__mobile-nav a.router-link-active {
  border-color: rgb(16 37 28 / 0.18);
  background: white;
  color: var(--color-primary);
}
@media (max-width: 980px) {
  .app-header__nav { display: none; }
  .app-header__menu-button { display: inline-block; }
}
@media (max-width: 620px) {
  .app-header__inner { min-height: 66px; }
  .app-header__brand-text { font-size: 1rem; }
  .app-header__cta { display: none; }
}
@media (max-width: 390px) {
  .app-header__brand-text { display: none; }
}
</style>
