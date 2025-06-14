<template>
  <section class="relative min-h-screen bg-[#1C5310] overflow-hidden py-16 lg:py-24">
    <!-- Background pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-20">
        <h2 class="text-white text-sm lg:text-base font-medium tracking-[0.3em] uppercase">
          WHO WE ARE
        </h2>
      </div>

      <!-- Main Content -->
      <div class="relative max-w-7xl mx-auto">
        
        <!-- CRITICAL THINKERS Row -->
        <div class="relative mb-4 lg:mb-6">
          <div class="relative flex items-center justify-start">
            <!-- CRIT with integrated image -->
            <div class="relative inline-block">
              <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-black text-[#3BAB22] leading-[0.85] tracking-tight">
                CRIT
              </h1>
              <!-- Woman in hard hat image positioned within CRIT -->
              <div class="absolute z-[9999] top-1/2 left-[15%] transform -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32">
                <img 
                  src="@/assets/img/section-images3.png"
                  alt="Woman in safety gear"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
            <!-- ICAL THINKERS -->
            <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-black text-[#3BAB22] leading-[0.85] tracking-tight">
              ICAL THINKERS
            </h1>
          </div>
        </div>

        <!-- COLLABORATORS Row -->
        <div class="relative mb-4 lg:mb-6">
          <div class="relative flex items-center justify-start">
            <!-- COLLABORATO -->
            <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-black text-[#097A01] leading-[0.85] tracking-tight">
              COLLABORATO
            </h1>
            <!-- RS with integrated image -->
            <div class="relative inline-block">
              <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-black text-[#097A01] leading-[0.85] tracking-tight">
                RS
              </h1>
              <!-- Man in safety gear image positioned within RS -->
              <div class="absolute top-1/2 right-[20%] transform -translate-y-1/2 w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-32 lg:h-28 xl:w-36 xl:h-32">
                <img 
                  src="@/assets/img/section-images2.png"
                  alt="Man in safety gear with industrial background"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- INNOVATORS Row -->
        <div class="relative">
          <div class="relative flex items-center justify-end">
            <!-- INNOV with integrated image -->
            <div class="relative inline-block">
              <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-black text-[#032E00] leading-[0.85] tracking-tight">
                INNOV
              </h1>
              <!-- Industrial warehouse image positioned within INNOV -->
              <div class="absolute top-1/2 left-[10%] transform -translate-y-1/2 w-24 h-14 sm:w-28 sm:h-16 md:w-32 md:h-18 lg:w-36 lg:h-20 xl:w-40 xl:h-22">
                <img 
                  src="@/assets/img/section-images1.png"
                  alt="Industrial warehouse interior with storage tanks"
                  class="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
            <!-- ATORS -->
            <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] font-black text-[#032E00] leading-[0.85] tracking-tight">
              ATORS
            </h1>
          </div>
        </div>
        
      </div>
    </div>

    <!-- Decorative elements -->
    <!-- <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900 to-transparent"></div>
    <div class="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full opacity-5 transform translate-x-32 -translate-y-32"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-green-300 rounded-full opacity-5 transform -translate-x-24 translate-y-24"></div> -->
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
/* Custom styles for better text rendering */
h1 {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

/* Ensure images maintain aspect ratio and positioning */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  h1 {
    letter-spacing: -0.02em;
  }
}

/* Tablet adjustments */
@media (min-width: 641px) and (max-width: 1024px) {
  h1 {
    letter-spacing: -0.025em;
  }
}

/* Large screen adjustments */
@media (min-width: 1025px) {
  h1 {
    letter-spacing: -0.03em;
  }
}

/* Ensure proper stacking context */
.relative {
  position: relative;
}
</style>
