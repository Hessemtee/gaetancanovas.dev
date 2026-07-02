<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  text: string
}>()
</script>

<template>
  <aside class="limit-notice card">
    <span class="icon-box icon-box--dark"><InlineIcon :name="icon || 'layers'" :size="18" /></span>
    <div>
      <strong>{{ title }}</strong>
      <p>{{ text }}</p>
    </div>
  </aside>
</template>

<style scoped>
.limit-notice {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  overflow: hidden;
  background:
    radial-gradient(circle at 100% 0%, rgb(195 111 50 / 0.20), transparent 34%),
    linear-gradient(145deg, var(--color-primary), #17382b);
  border-color: rgb(255 255 255 / 0.12);
  color: white;
  padding: 1rem;
  box-shadow: var(--shadow-card);
}
.limit-notice strong {
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.96rem;
  letter-spacing: -0.01em;
}
.limit-notice p {
  margin: 0;
  color: rgb(255 255 255 / 0.76);
  font-size: 0.9rem;
  line-height: 1.55;
}
</style>
