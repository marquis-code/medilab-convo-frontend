<template>
    <section class="py-16 lg:py-20 bg-[#097A01]">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div
            class="bg-white rounded-3xl overflow-hidden shadow-2xl"
            :class="{ 'animate-fade-in-up': isVisible }"
          >
            <div class="grid md:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <!-- Left side - Dark green with text -->
              <div class="bg-[#1a4d14] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                  Our purpose
                </h2>
                <p class="text-white text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
                  Capera's purpose is to provide affordable, reliable, energy solution to enable human progress. This is at the heart of who we are.
                </p>
              </div>
              
              <!-- Right side - Industrial facility image with gradient sky -->
              <div class="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                <img
                  src="@/assets/img/card-image2.png"
                  alt="Industrial facility with gradient sunset sky"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  // Animation visibility state
  const isVisible = ref(false)
  
  onMounted(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      isVisible.value = true
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
  h2 {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Mobile-specific adjustments */
  @media (max-width: 768px) {
    .grid {
      grid-template-rows: auto auto;
    }
    
    .bg-\[#1a4d14\] {
      order: 1;
    }
    
    .relative {
      order: 2;
    }
  }
  
  /* Ensure proper image aspect ratio */
  img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  </style>
  