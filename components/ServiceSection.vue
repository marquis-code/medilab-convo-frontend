<template>
    <section class="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1C5310]">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          
          <!-- Top Description Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
            <div>
              <p class="text-white font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                We serve the energy industry by providing high-quality, single-source solutions tailored to meet the needs of our customers.
              </p>
            </div>
            <div>
              <p class="text-white font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                Our technology and system design allow us to provide a custom solution to our customers and keep projects on time, on goals, on budgets, always.
              </p>
            </div>
          </div>
  
          <!-- Services Grid Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            
            <!-- Drilling Services -->
            <div class="text-white">
              <div class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#3BAB22] rounded mb-4 sm:mb-5 md:mb-6"></div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                Drilling Services
              </h3>
            </div>
  
            <!-- Procurement Services -->
            <div class="text-white">
              <div class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#3BAB22] rounded mb-4 sm:mb-5 md:mb-6"></div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                Procurement Services
              </h3>
            </div>
  
            <!-- Supply of Refined Products -->
            <div class="text-white md:col-span-2 lg:col-span-1">
              <div class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#3BAB22] rounded mb-4 sm:mb-5 md:mb-6"></div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                Supply of Refined Products
              </h3>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // Component logic can be added here if needed
  </script>
  
  <style scoped>
  /* Ensure proper text rendering */
  h3, p {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Mobile-specific adjustments */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  
  /* Ensure proper line breaks */
  h3 {
    word-break: break-word;
    hyphens: auto;
  }
  
  /* Responsive text adjustments */
  @media (min-width: 640px) and (max-width: 768px) {
    h3 {
      line-height: 1.1;
    }
  }
  
  @media (min-width: 769px) {
    h3 {
      line-height: 1.0;
    }
  }
  </style>
  