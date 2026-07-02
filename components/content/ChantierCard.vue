<script setup lang="ts">
defineProps<{
  title: string
  type: string
  excerpt: string
  to: string
  icon?: string
  featured?: boolean
}>()
</script>

<template>
  <article :class="['content-card card', { 'content-card--featured': featured }]">
    <div class="content-card__top">
      <span :class="['icon-box', featured ? 'icon-box--dark' : 'icon-box--warm']">
        <InlineIcon :name="icon || 'layers'" :size="21" />
      </span>
      <BaseBadge :label="type" :tone="featured ? 'primary' : 'soft'" />
    </div>
    <div class="content-card__body">
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
    </div>
    <NuxtLink :to="to" class="content-card__link">
      {{ $t('cta.readMore') }} <InlineIcon name="arrow-right" />
    </NuxtLink>
  </article>
</template>

<style scoped>
.content-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1.05rem;
  min-height: 100%;
  overflow: hidden;
  padding: 1.35rem;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease;
}
.content-card::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: rgb(195 111 50 / 0.75);
  opacity: 0;
  transition: opacity 160ms ease;
}
.content-card:hover {
  transform: translateY(-3px);
  border-color: rgb(16 37 28 / 0.22);
  background: rgb(255 255 255 / 0.94);
  box-shadow: var(--shadow-card);
}
.content-card:hover::before { opacity: 1; }
.content-card--featured {
  background:
    radial-gradient(circle at top right, rgb(195 111 50 / 0.11), transparent 46%),
    linear-gradient(145deg, rgb(255 255 255 / 0.9), rgb(250 247 240 / 0.86));
}
.content-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
}
.content-card__body { display: grid; gap: 0.7rem; }
.content-card h3 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.42rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.content-card p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.65;
}
.content-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.15rem;
  color: var(--color-primary);
  font-weight: 850;
}
.content-card__link:hover { color: var(--color-accent); }
</style>
