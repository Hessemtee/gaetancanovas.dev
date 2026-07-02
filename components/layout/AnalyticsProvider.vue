<script setup lang="ts">
const config = useRuntimeConfig()

const provider = computed(() => String(config.public.analyticsProvider || '').toLowerCase())
const cloudflareToken = computed(() => String(config.public.cloudflareAnalyticsToken || ''))
const plausibleDomain = computed(() => String(config.public.plausibleDomain || ''))

useHead(() => {
  if (!import.meta.env.PROD) {
    return {}
  }

  if (provider.value === 'cloudflare' && cloudflareToken.value) {
    return {
      script: [
        {
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          defer: true,
          'data-cf-beacon': JSON.stringify({ token: cloudflareToken.value })
        }
      ]
    }
  }

  if (provider.value === 'plausible' && plausibleDomain.value) {
    return {
      script: [
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': plausibleDomain.value
        }
      ]
    }
  }

  return {}
})
</script>

<template>
  <span class="sr-only" aria-hidden="true" />
</template>
