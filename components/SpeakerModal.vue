<template>
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
      <div
        class="relative max-w-lg w-full bg-white rounded-lg shadow-lg transform transition-transform duration-300 m-3"
        :class="{ 'scale-100 opacity-100': isVisible, 'scale-90 opacity-0': !isVisible }"
      >
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </button>
        <div class="p-6">
          <img :src="speaker.image" alt="Speaker Image" class="w-32 h-32 mx-auto rounded-full object-cover shadow-md" />
          </div>
          <div class="p-6 h-96 overflow-y-auto">
          <h2 class="mt-4 text-xl font-bold text-gray-800">{{ speaker.name }}</h2>
          <p class="mt-2 text-gray-600 leading-loose">{{ speaker.bio }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps, watch } from 'vue';
  
  // Props to accept speaker data and modal visibility
  defineProps({
    speaker: {
      type: Object,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['close']);
  
  function closeModal() {
    emit('close');
  }
  </script>
  
  <style scoped>
  /* Animation keyframes */
  @keyframes modalShow {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes modalHide {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.9);
      opacity: 0;
    }
  }
  
  /* Animation classes */
  .animate-show {
    animation: modalShow 0.3s ease-out forwards;
  }
  
  .animate-hide {
    animation: modalHide 0.3s ease-in forwards;
  }
  </style>
  