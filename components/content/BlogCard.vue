<script setup lang="ts">
defineProps<{
  title: string
  category: string
  excerpt: string
  to: string
  icon?: string
  featured?: boolean
}>()
</script>

<template>
  <article :class="['blog-card card', { 'blog-card--featured': featured }]">
    <div class="blog-card__top">
      <span :class="['icon-box', featured ? 'icon-box--dark' : 'icon-box--light']">
        <InlineIcon :name="icon || 'pen'" :size="20" />
      </span>
      <BaseBadge :label="category" :tone="featured ? 'soft' : 'default'" />
    </div>
    <div class="blog-card__body">
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}</p>
    </div>
    <NuxtLink :to="to" class="blog-card__link">
      {{ $t('cta.readMore') }} <InlineIcon name="arrow-right" />
    </NuxtLink>
  </article>
</template>

<style scoped>
.blog-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  min-height: 100%;
  overflow: hidden;
  padding: 1.35rem;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease;
}
.blog-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: rgb(16 37 28 / 0.65);
  opacity: 0;
  transition: opacity 160ms ease;
}
.blog-card:hover {
  transform: translateY(-3px);
  border-color: rgb(16 37 28 / 0.2);
  background: rgb(255 255 255 / 0.94);
  box-shadow: var(--shadow-card);
}
.blog-card:hover::before { opacity: 1; }
.blog-card--featured {
  background:
    radial-gradient(circle at 10% 0%, rgb(16 37 28 / 0.08), transparent 42%),
    linear-gradient(145deg, rgb(255 255 255 / 0.88), rgb(250 247 240 / 0.84));
}
.blog-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
}
.blog-card__body { display: grid; gap: 0.7rem; }
.blog-card h3 {
  margin: 0;
  font-size: 1.18rem;
  line-height: 1.18;
  letter-spacing: -0.025em;
  text-wrap: balance;
}
.blog-card p {
  margin: 0;
  color: var(--color-muted);
  line-height: 1.65;
}
.blog-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-primary);
  font-weight: 850;
}
.blog-card__link:hover { color: var(--color-accent); }
</style>
