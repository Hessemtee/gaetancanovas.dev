<script setup lang="ts">
defineProps<{
  title: string
  type: string
  excerpt: string
  icon?: string
  compact?: boolean
}>()
</script>

<template>
  <article :class="['atelier-card card', { 'atelier-card--compact': compact }]">
    <div class="atelier-card__top">
      <span class="icon-box icon-box--soft">
        <InlineIcon :name="icon || 'sparkles'" :size="20" />
      </span>
      <BaseBadge :label="type" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ excerpt }}</p>
  </article>
</template>

<style scoped>
.atelier-card {
  display: grid;
  gap: 1rem;
  min-height: 100%;
  overflow: hidden;
  padding: 1.35rem;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease;
}
.atelier-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: rgb(16 37 28 / 0.55);
  opacity: 0;
  transition: opacity 160ms ease;
}
.atelier-card:hover {
  transform: translateY(-3px);
  border-color: rgb(16 37 28 / 0.2);
  background: rgb(255 255 255 / 0.92);
  box-shadow: var(--shadow-card);
}
.atelier-card:hover::before { opacity: 1; }
.atelier-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
}
.atelier-card h3 {
  margin: 0;
  font-size: 1.22rem;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-wrap: balance;
}
.atelier-card p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.65;
}
.atelier-card--compact { padding: 1rem; gap: 0.75rem; }
</style>
