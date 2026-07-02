<script setup lang="ts">
defineProps<{
  name: string
  size?: number
}>()
</script>

<template>
  <svg
    v-if="name === 'arrow-right'"
    :width="size || 18"
    :height="size || 18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>

  <svg v-else-if="name === 'chevron-right'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>

  <svg v-else-if="name === 'mail'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>

  <svg v-else-if="name === 'github'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.47-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5A10.5 10.5 0 0 0 12 3c-1.36 0-2.73.18-4 .5C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.3-.8 2.1-.7.3-2.5.9-3.2-1.1-.4-.9-1.2-1.5-1.2-1.5" />
  </svg>

  <svg v-else-if="name === 'linkedin'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>

  <svg v-else-if="name === 'gamepad'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6 12h4" />
    <path d="M8 10v4" />
    <path d="M15 13h.01" />
    <path d="M18 11h.01" />
    <path d="M17.32 6H6.68A4.68 4.68 0 0 0 2 10.68v4.64a2.68 2.68 0 0 0 4.58 1.9L8.8 15h6.4l2.22 2.22A2.68 2.68 0 0 0 22 15.32v-4.64A4.68 4.68 0 0 0 17.32 6Z" />
  </svg>

  <svg v-else-if="name === 'code'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
    <path d="m14.5 4-5 16" />
  </svg>

  <svg v-else-if="name === 'gauge'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 14l3-3" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    <path d="M8 19h8" />
  </svg>

  <svg v-else-if="name === 'layers'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>

  <svg v-else-if="name === 'sparkles'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 3l1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8L12 3Z" />
    <path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
  </svg>

  <svg v-else-if="name === 'brain'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 6.5A3 3 0 0 1 11 3c1.4 0 2.5.9 2.9 2.1A3.2 3.2 0 0 1 19 7.8a3.4 3.4 0 0 1-.9 2.3A3.8 3.8 0 0 1 17 17.5h-1" />
    <path d="M8 6.5A3 3 0 0 0 5 9.5c0 .5.1 1 .4 1.4A3.8 3.8 0 0 0 7 18h1" />
    <path d="M12 5v14" />
    <path d="M9 10h3" />
    <path d="M12 14h3" />
  </svg>

  <svg v-else-if="name === 'shield'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-5" />
  </svg>

  <svg v-else-if="name === 'flask'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M10 2v6L4.5 18.5A2.5 2.5 0 0 0 6.7 22h10.6a2.5 2.5 0 0 0 2.2-3.5L14 8V2" />
    <path d="M8 2h8" />
    <path d="M7 16h10" />
  </svg>

  <svg v-else-if="name === 'file'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h5" />
  </svg>

  <svg v-else-if="name === 'hammer'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
    <path d="m17.64 15 3.35-3.35a2.12 2.12 0 0 0 0-3l-5.66-5.66a2.12 2.12 0 0 0-3 0L9 6.34" />
    <path d="m14 7 3 3" />
  </svg>

  <svg v-else-if="name === 'globe'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    <path d="M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>

  <svg v-else-if="name === 'book'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
  </svg>

  <svg v-else-if="name === 'search'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>

  <svg v-else-if="name === 'bolt'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" />
  </svg>

  <svg v-else-if="name === 'pen'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
  </svg>

  <svg v-else-if="name === 'play'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m10 8 6 4-6 4V8Z" />
  </svg>

  <svg v-else-if="name === 'image'" :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="8.5" cy="10.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>

  <svg v-else :width="size || 18" :height="size || 18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
  </svg>
</template>
