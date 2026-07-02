<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description: string
}>()
</script>

<template>
  <section class="page-hero section">
    <div class="container page-hero__inner">
      <div class="page-hero__copy">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1 class="page-title">{{ title }}</h1>
        <p class="lead">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgb(222 216 204 / 0.74);
  background:
    radial-gradient(circle at 16% 0%, rgb(16 37 28 / 0.07), transparent 27rem),
    radial-gradient(circle at 88% 8%, rgb(195 111 50 / 0.055), transparent 24rem),
    linear-gradient(180deg, rgb(248 245 238 / 0.92), rgb(242 238 228 / 0.54));
}

.page-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgb(16 37 28 / 0.038) 1px, transparent 1px),
    linear-gradient(90deg, rgb(16 37 28 / 0.038) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: linear-gradient(90deg, transparent 0%, transparent 42%, black 68%, black 100%);
  pointer-events: none;
}

.page-hero::after {
  content: "";
  position: absolute;
  right: clamp(1.25rem, 6vw, 5rem);
  bottom: clamp(1rem, 4vw, 2.6rem);
  width: clamp(5.5rem, 12vw, 9rem);
  height: clamp(3.5rem, 8vw, 6rem);
  border-top: 1px solid rgb(16 37 28 / 0.15);
  border-right: 1px solid rgb(16 37 28 / 0.15);
  opacity: 0.68;
  pointer-events: none;
}

.page-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  align-items: end;
}
.page-hero__copy {
  display: grid;
  gap: 1rem;
  max-width: 820px;
}
.page-hero .lead { margin: 0; }

@media (max-width: 760px) {
  .page-hero::before {
    opacity: 0.5;
    mask-image: linear-gradient(90deg, transparent 0%, black 72%, black 100%);
  }

  .page-hero::after {
    right: 1rem;
    bottom: 1rem;
    width: 4.5rem;
    height: 3rem;
    opacity: 0.36;
  }
}
</style>
