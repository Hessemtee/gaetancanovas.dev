<script setup lang="ts">
import AnalyticsProvider from '~/components/layout/AnalyticsProvider.vue'
import SkipLink from '~/components/layout/SkipLink.vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>

<template>
  <div>
    <AnalyticsProvider />
    <SkipLink />
    <AppHeader />
    <div id="main-content" class="main-content" tabindex="-1">
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>
