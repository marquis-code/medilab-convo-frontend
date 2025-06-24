<template>
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/40 z-10"></div>
      
      <!-- Background image -->
      <img
        src="@/assets/img/oil-colllection.png"
        alt="Aerial view of industrial oil facility with storage tanks"
        class="absolute inset-0 w-full h-full object-cover"
      />
      
      <!-- Content -->
      <div
        class="relative z-20 leading-loose text-center text-white px-4 max-w-6xl mx-auto"
        :class="{ 'animate-fade-in-up': isVisible.hero }"
      >
        <!-- Main heading -->
        <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black mb-8 tracking-tight">
          POWERING<br />THE FUTURE
        </h1>
        
        <!-- Description -->
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
          We work closely with local communities to understand their needs and provide tailored energy solutions that make a real difference.
        </p>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  // Animation visibility state
  const isVisible = ref({
    hero: false
  })
  
  onMounted(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      isVisible.value.hero = true
    }, 100)
  })
  </script>
  
  <style scoped>
  /* Custom animation for fade in up effect */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }
  
  /* Ensure text renders crisply */
  h1 {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Custom responsive adjustments */
  @media (max-width: 640px) {
    h1 {
      line-height: 0.9;
    }
  }
  
  @media (min-width: 1024px) {
    h1 {
      line-height: 0.8;
    }
  }
  </style>
  