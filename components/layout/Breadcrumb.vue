<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; to?: string }>
}>()
</script>

<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(item, index) in items" :key="`${item.label}-${index}`">
        <NuxtLink v-if="item.to" :to="item.to">{{ item.label }}</NuxtLink>
        <span v-else>{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding: 0;
  margin: 0 0 1.5rem;
  list-style: none;
  color: var(--color-muted);
  font-size: 0.9rem;
}
.breadcrumb li:not(:last-child)::after {
  content: '›';
  margin-left: 0.45rem;
}
</style>
