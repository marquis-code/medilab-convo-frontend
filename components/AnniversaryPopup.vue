<template>
    <div
      v-if="show"
      class="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50"
    >
      <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center relative">
        <button
          @click="close"
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
  
        <h2 class="text-2xl font-bold text-[#27628C] mb-4">
          MedLabConvo is 6 🎉
        </h2>
  
        <img
          src="/6years.png"
          alt="6 Years Anniversary"
          class="w-32 mx-auto mb-4"
        />
  
        <p class="text-gray-600 mb-6">Join in the celebration!</p>
  
        <NuxtLink
          to="/celebrating-medlabconvo@6"
          class="inline-block px-6 py-3 bg-[#27628C] text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition"
        >
          Create Your DP
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from "vue";
  
  const show = ref(false);
  
  function close() {
    show.value = false;
  }
  
  onMounted(() => {
    setTimeout(() => {
      show.value = true;
    }, 1500);
  });
  </script>
  