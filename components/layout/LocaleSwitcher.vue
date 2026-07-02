<script setup lang="ts">
import { getAlternatePath } from '~/utils/localizedPaths'

const route = useRoute()
const { locale } = useI18n()
const alternatePath = computed(() => getAlternatePath(route.path))
const targetLabel = computed(() => locale.value === 'fr' ? 'EN' : 'FR')
const currentLabel = computed(() => locale.value === 'fr' ? 'FR' : 'EN')
</script>

<template>
  <NuxtLink :to="alternatePath" class="locale-switcher" :aria-label="`Switch language to ${targetLabel}`">
    <span>{{ currentLabel }}</span>
    <span aria-hidden="true">/</span>
    <strong>{{ targetLabel }}</strong>
  </NuxtLink>
</template>

<style scoped>
.locale-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.65);
  padding: 0.48rem 0.7rem;
  color: var(--color-muted);
  font-weight: 850;
  font-size: 0.78rem;
  line-height: 1;
}
.locale-switcher strong {
  color: var(--color-primary);
}
.locale-switcher:hover {
  border-color: rgb(16 37 28 / 0.26);
  background: white;
}
</style>
