<template>
  <main class="body">
    <CoreToast class="fixed top-4 right-4 z-[9999999]" />

    <NuxtLayout class="z-10">
      <NuxtPage class="z-10" />
    </NuxtLayout>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useConfetti } from "@/composables/UseConfetti";

const { launchConfetti } = useConfetti();
let intervalId: number;

onMounted(() => {
  launchConfetti();

  // Runs confetti every 10s (5s on, 5s off)
  intervalId = window.setInterval(() => {
    launchConfetti();
  }, 10_000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style>
body {
  font-family: 'Roobert PRO', sans-serif;
}
</style>









<!-- <template>
  <main class="body">
    <CoreToast class="fixed top-4 right-4 z-[9999999]" />

    <NuxtLayout class="z-10">
      <NuxtPage class="z-10" />
    </NuxtLayout>
  </main>
</template>

<style>
body {
    font-family: 'Roobert PRO', sans-serif;
}
</style> -->




