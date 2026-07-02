<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="section-header">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="lead">{{ description }}</p>
  </header>
</template>

<style scoped>
.section-header {
  display: grid;
  gap: 1rem;
  max-width: 860px;
  margin-bottom: clamp(1.6rem, 4vw, 2.35rem);
}
.section-header .lead { margin: 0; }
</style>
