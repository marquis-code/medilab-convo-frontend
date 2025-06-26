<template>
  <section class="relative min-h-screen flex overflow-hidden" :class="flexAlignment">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('/hero.png')` }"
    >
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>
    
    <!-- Hero Content - Responsive positioning -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" :class="contentPadding">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main Heading without tilt -->
        <h1 class="hero-title text-white font-black leading-tight mb-6 sm:mb-8">
          <span class="block">POWERING</span>
          <span class="block">THE FUTURE</span>
        </h1>
        
        <!-- Descriptive Text -->
        <p class="text-white/90 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
          We work closely with local communities to understand their needs and provide tailored energy solutions that make a real difference.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 640
}

const flexAlignment = computed(() => {
  return isMobile.value ? 'items-center' : 'items-end'
})

const contentPadding = computed(() => {
  return isMobile.value ? 'py-8' : 'pb-16 sm:pb-20 lg:pb-24'
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.hero-title {
  font-size: clamp(3rem, 8vw, 8rem);
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.02em;
  line-height: 0.9;
}

/* Mobile responsiveness - CENTER VERTICALLY */
@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(2.5rem, 12vw, 4rem);
    line-height: 0.85;
  }
  
  section {
    min-height: 100vh;
    align-items: center !important; /* Force center alignment on mobile */
  }
  
  .container {
    padding: 2rem 0 !important; /* Equal padding top and bottom */
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(2rem, 15vw, 3.5rem);
  }
  
  .container {
    padding: 1.5rem 0 !important;
  }
}

/* Tablet adjustments - START TRANSITIONING TO BOTTOM */
@media (min-width: 641px) and (max-width: 1024px) {
  .hero-title {
    font-size: clamp(4rem, 10vw, 6rem);
  }
  
  section {
    align-items: end; /* Bottom alignment for tablet and up */
  }
  
  .container {
    padding-bottom: 4rem;
    padding-top: 0;
  }
}

/* Large screens - BOTTOM ALIGNMENT */
@media (min-width: 1025px) {
  .hero-title {
    font-size: clamp(6rem, 8vw, 8rem);
  }
  
  section {
    align-items: end; /* Bottom alignment */
  }
  
  .container {
    padding-bottom: 6rem;
    padding-top: 0;
  }
}

/* Ensure proper spacing on very large screens */
@media (min-width: 1440px) {
  .container {
    padding-bottom: 8rem;
  }
}
</style>