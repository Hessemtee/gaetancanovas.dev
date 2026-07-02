<script setup lang="ts">
function backToTop() {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <button class="back-to-top" type="button" @click="backToTop">
    {{ $t('cta.backToTop') }}
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.85);
  color: var(--color-muted);
  padding: 0.6rem 0.8rem;
  cursor: pointer;
}
</style>
