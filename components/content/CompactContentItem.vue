<script setup lang="ts">
defineProps<{
  title: string
  meta: string
  excerpt: string
  to?: string
  icon?: string
}>()
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="compact-item card">
    <span class="icon-box icon-box--light compact-item__icon">
      <InlineIcon :name="icon || 'layers'" :size="18" />
    </span>
    <span class="compact-item__body">
      <small>{{ meta }}</small>
      <strong>{{ title }}</strong>
      <span>{{ excerpt }}</span>
    </span>
    <InlineIcon name="chevron-right" :size="17" class="compact-item__arrow" />
  </NuxtLink>

  <article v-else class="compact-item card">
    <span class="icon-box icon-box--light compact-item__icon">
      <InlineIcon :name="icon || 'layers'" :size="18" />
    </span>
    <span class="compact-item__body">
      <small>{{ meta }}</small>
      <strong>{{ title }}</strong>
      <span>{{ excerpt }}</span>
    </span>
  </article>
</template>

<style scoped>
.compact-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.9rem;
  padding: 0.92rem;
  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
}
.compact-item:hover {
  transform: translateY(-1px);
  border-color: rgb(16 37 28 / 0.22);
  background: rgb(255 255 255 / 0.96);
  box-shadow: 0 12px 28px rgb(16 37 28 / 0.065);
}
.compact-item__icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.92rem;
}
.compact-item__body {
  display: grid;
  gap: 0.16rem;
  min-width: 0;
}
.compact-item__body small {
  color: var(--color-accent);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.compact-item__body strong {
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.compact-item__body span {
  overflow: hidden;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.45;
  text-overflow: ellipsis;
}
.compact-item__arrow { color: var(--color-primary); }
@media (max-width: 620px) {
  .compact-item { grid-template-columns: auto minmax(0, 1fr); }
  .compact-item__arrow { display: none; }
}
</style>
