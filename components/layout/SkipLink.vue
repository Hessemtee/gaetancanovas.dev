<template>
  <a class="skip-link" href="#main-content">
    {{ $i18n.locale === 'fr' ? 'Aller au contenu principal' : 'Skip to main content' }}
  </a>
</template>

<style scoped>
.skip-link {
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 100;
  transform: translateY(-160%);
  border: 1px solid rgb(255 255 255 / 0.3);
  border-radius: 999px;
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 850;
  box-shadow: var(--shadow-strong);
  transition: transform 160ms ease;
}

.skip-link:focus-visible {
  transform: translateY(0);
  outline-color: rgb(195 111 50 / 0.45);
}
</style>
