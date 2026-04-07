<template>
  <div></div>
</template>

<script setup lang="ts">
import { navigateTo } from '#imports'

// Redirect /teams to /about-us since team content has been merged into About Us
navigateTo('/about-us', { redirectCode: 301 })
</script>
