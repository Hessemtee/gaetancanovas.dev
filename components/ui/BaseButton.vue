<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}>(), {
  variant: 'primary'
})
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="['base-button', `base-button--${variant}`]">
    <slot />
  </NuxtLink>
  <a v-else-if="href" :href="href" :class="['base-button', `base-button--${variant}`]">
    <slot />
  </a>
  <button v-else type="button" :class="['base-button', `base-button--${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  min-height: 44px;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 0.82rem 1.12rem;
  font-size: 0.94rem;
  font-weight: 850;
  letter-spacing: -0.01em;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease, color 160ms ease;
}
.base-button:hover { transform: translateY(-1px); }
.base-button--primary {
  background: linear-gradient(145deg, var(--color-primary), var(--color-primary-hover));
  color: white;
  box-shadow: 0 14px 28px rgb(16 37 28 / 0.14);
}
.base-button--primary:hover {
  background: linear-gradient(145deg, #17382b, #204936);
  box-shadow: 0 18px 34px rgb(16 37 28 / 0.18);
}
.base-button--secondary {
  border-color: var(--color-border);
  background: rgb(255 255 255 / 0.78);
  color: var(--color-text);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.72);
}
.base-button--secondary:hover {
  border-color: rgb(16 37 28 / 0.28);
  box-shadow: 0 10px 20px rgb(16 37 28 / 0.08), inset 0 1px 0 rgb(255 255 255 / 0.72);
}
.base-button--ghost {
  border-color: transparent;
  background: transparent;
  color: var(--color-primary);
  padding-inline: 0.4rem;
}
.base-button--ghost:hover { color: var(--color-accent); }
</style>
