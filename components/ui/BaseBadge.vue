<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  icon?: string
  tone?: 'default' | 'primary' | 'soft'
}>(), {
  tone: 'default'
})
</script>

<template>
  <span :class="['base-badge', `base-badge--${tone}`]">
    <InlineIcon v-if="icon" :name="icon" :size="14" />
    {{ label }}
  </span>
</template>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.78);
  padding: 0.43rem 0.75rem;
  color: var(--color-muted);
  font-size: 0.76rem;
  font-weight: 850;
  line-height: 1;
  white-space: nowrap;
  box-shadow: 0 1px 0 rgb(16 37 28 / 0.04), inset 0 1px 0 rgb(255 255 255 / 0.65);
  white-space: normal;
  max-width: 100%;
}
.base-badge--primary {
  border-color: rgb(16 37 28 / 0.18);
  background: var(--color-primary);
  color: white;
}
.base-badge--soft {
  border-color: rgb(16 37 28 / 0.12);
  background: linear-gradient(145deg, var(--color-primary-soft), var(--color-primary-wash));
  color: var(--color-primary);
}
</style>
