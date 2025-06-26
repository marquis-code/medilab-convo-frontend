<template>
    <section class="relative min-h-screen bg-[#1C5310] overflow-hidden py-8 sm:py-12 lg:py-16 xl:py-24" ref="sectionRef">
      <!-- Background pattern overlay -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>
  
      <div class="relative z-10">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20 px-4">
          <h2 class="text-white text-xs sm:text-sm lg:text-base font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            WHO WE ARE
          </h2>
        </div>
  
        <!-- Main Content - Full Width -->
        <div class="w-full">
          
          <!-- CRITICAL THINKERS Row - Moves Right to Left -->
          <div class="relative mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-8">
            <!-- Mobile Stack Layout -->
            <div class="block sm:hidden">
              <div class="relative mb-4">
                <!-- <img 
                  src="@/assets/img/section-images1.png"
                  alt="Woman in safety gear"
                  class="w-full h-48 object-cover rounded-xl shadow-2xl"
                /> -->
                <div class="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
                <h1 class="absolute inset-0 flex items-center justify-center text-4xl font-black text-[#3BAB22] leading-tight tracking-tight z-20">
                  CRITICAL<br />THINKERS
                </h1>
              </div>
            </div>
            
            <!-- Desktop Parallax Layout -->
            <div class="hidden sm:block w-full">
              <div 
                class="relative flex items-center justify-start w-full overflow-hidden transition-transform duration-75 ease-out"
                :style="{ transform: `translateX(${criticalThinkersOffset}px)` }"
              >
                <!-- CRIT with image behind text -->
                <div class="relative inline-block">
                  <!-- Image positioned behind CRIT text -->
                  <div 
                    class="absolute top-1/2 left-[8%] transform -translate-y-1/2 w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-56 lg:h-36 xl:w-64 xl:h-40 2xl:w-72 2xl:h-44 z-10 transition-transform duration-75 ease-out"
                    :style="{ transform: `translateY(${imageOffset1}px) translateX(-50%)`, left: '50%' }"
                  >
                    <!-- <img 
                      src="@/assets/img/section-images1.png"
                      alt="Woman in safety gear"
                      class="w-full h-full object-cover rounded-xl shadow-2xl"
                    /> -->
                  </div>
                  <!-- Text on top of image -->
                  <h1 class="relative z-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black text-[#3BAB22] leading-[0.85] tracking-tight whitespace-nowrap">
                    CRIT
                  </h1>
                </div>
                <!-- ICAL THINKERS -->
                <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black text-[#3BAB22] leading-[0.85] tracking-tight whitespace-nowrap">
                  ICAL THINKERS
                </h1>
              </div>
            </div>
          </div>
  
          <!-- COLLABORATORS Row - Moves Left to Right -->
          <div class="relative mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-8">
            <!-- Mobile Stack Layout -->
            <div class="block sm:hidden">
              <div class="relative mb-4">
                <!-- <img 
                   src="@/assets/img/section-images2.png"
                  alt="Man in safety gear with industrial background"
                  class="w-full h-48 object-cover rounded-xl shadow-2xl"
                /> -->
                <div class="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
                <h1 class="absolute inset-0 flex items-center justify-center text-4xl font-black text-[#097A01] leading-tight tracking-tight z-20">
                  COLLABORATORS
                </h1>
              </div>
            </div>
            
            <!-- Desktop Parallax Layout -->
            <div class="hidden sm:block w-full">
              <div 
                class="relative flex items-center justify-start w-full overflow-hidden transition-transform duration-75 ease-out"
                :style="{ transform: `translateX(${collaboratorsOffset}px)` }"
              >
                <!-- COLLABORATO -->
                <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black text-[#097A01] leading-[0.85] tracking-tight whitespace-nowrap">
                  COLLABORATO
                </h1>
                <!-- RS with image behind text -->
                <div class="relative inline-block">
                  <!-- Image positioned behind RS text -->
                  <div 
                    class="absolute top-1/2 right-[5%] transform -translate-y-1/2 w-36 h-24 sm:w-44 sm:h-28 md:w-52 md:h-32 lg:w-60 lg:h-36 xl:w-68 xl:h-40 2xl:w-76 2xl:h-44 z-10 transition-transform duration-75 ease-out"
                    :style="{ transform: `translateY(${imageOffset2}px) translateX(50%)`, right: '50%' }"
                  >
                    <!-- <img 
                       src="@/assets/img/section-images3.png"
                      alt="Man in safety gear with industrial background"
                      class="w-full h-full object-cover rounded-xl shadow-2xl"
                    /> -->
                  </div>
                  <!-- Text on top of image -->
                  <h1 class="relative z-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black text-[#097A01] leading-[0.85] tracking-tight whitespace-nowrap">
                    RS
                  </h1>
                </div>
              </div>
            </div>
          </div>
  
          <!-- INNOVATORS Row - Moves Right to Left -->
          <div class="relative px-4 sm:px-6 lg:px-8">
            <!-- Mobile Stack Layout -->
            <div class="block sm:hidden">
              <div class="relative rounded-2xl mb-4">
                <!-- <img 
                  src="@/assets/img/section-images3.png"
                  alt="Industrial warehouse interior with storage tanks"
                  class="w-full h-48 object-cover rounded-xl shadow-2xl"
                /> -->
                <div class="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
                <h1 class="absolute inset-0 flex items-center justify-center text-4xl font-black text-[#032E00] leading-tight tracking-tight z-20">
                  INNOVATORS
                </h1>
              </div>
            </div>
            
            <!-- Desktop Parallax Layout - RIGHT ALIGNED -->
            <div class="hidden sm:block w-full">
              <div 
                class="relative flex items-center justify-end w-full overflow-hidden transition-transform duration-75 ease-out"
                :style="{ transform: `translateX(${innovatorsOffset}px)` }"
              >
                <!-- INNOV with image behind text -->
                <div class="relative rounded-2xl inline-block">
                  <!-- Image positioned behind INNOV text -->
                  <div 
                    class="absolute top-1/2 left-[5%] rounded-2xl transform -translate-y-1/2 w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 xl:w-72 xl:h-40 2xl:w-80 2xl:h-44 z-10 transition-transform duration-75 ease-out"
                    :style="{ transform: `translateY(${imageOffset3}px) translateX(-50%)`, left: '50%' }"
                  >
                    <!-- <img 
                      src="@/assets/img/section-images2.png"
                      alt="Industrial warehouse interior with storage tanks"
                      class="w-full h-full object-cover rounded-xl shadow-2xl"
                    /> -->
                  </div>
                  <!-- Text on top of image -->
                  <h1 class="relative z-20 text-5xl sm:text-6xl rounded-2xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black text-[#032E00] leading-[0.85] tracking-tight whitespace-nowrap">
                    INNOV
                  </h1>
                </div>
                <!-- ATORS -->
                <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black text-[#032E00] leading-[0.85] tracking-tight whitespace-nowrap">
                  ATORS
                </h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  // Reactive variables for parallax offsets
  const criticalThinkersOffset = ref(0)
  const collaboratorsOffset = ref(0)
  const innovatorsOffset = ref(0)
  const imageOffset1 = ref(100) // Start images below viewport
  const imageOffset2 = ref(100)
  const imageOffset3 = ref(100)
  
  // Section reference
  const sectionRef = ref<HTMLElement | null>(null)
  
  // Scroll handler function
  const handleScroll = () => {
    if (!sectionRef.value) return
  
    const rect = sectionRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const sectionHeight = rect.height
    
    // Calculate scroll progress (0 to 1)
    // When section top is at bottom of viewport: progress = 0
    // When section bottom is at top of viewport: progress = 1
    const scrollProgress = Math.max(0, Math.min(1, 
      (windowHeight - rect.top) / (windowHeight + sectionHeight)
    ))
  
    // Parallax movement distances (adjust these values to control speed)
    const maxHorizontalOffset = 200 // Maximum horizontal movement in pixels
    const maxImageOffset = 100 // Maximum vertical movement for images
  
    // Text movements (opposite directions)
    // Critical Thinkers: Right to Left (positive to negative)
    criticalThinkersOffset.value = maxHorizontalOffset - (scrollProgress * maxHorizontalOffset * 2)
    
    // Collaborators: Left to Right (negative to positive)
    collaboratorsOffset.value = -maxHorizontalOffset + (scrollProgress * maxHorizontalOffset * 2)
    
    // Innovators: Right to Left (positive to negative)
    innovatorsOffset.value = maxHorizontalOffset - (scrollProgress * maxHorizontalOffset * 2)
  
    // Image movements (slide up from bottom)
    // Images start below (positive offset) and move up (to 0 or negative)
    const imageScrollProgress = Math.max(0, Math.min(1, scrollProgress * 1.5)) // Slightly faster image movement
    
    imageOffset1.value = maxImageOffset - (imageScrollProgress * maxImageOffset * 1.5)
    imageOffset2.value = maxImageOffset - (imageScrollProgress * maxImageOffset * 1.5)
    imageOffset3.value = maxImageOffset - (imageScrollProgress * maxImageOffset * 1.5)
  }
  
  // Throttle function to improve performance
  let ticking = false
  const throttledScrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  }
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    // Initial calculation
    handleScroll()
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', throttledScrollHandler)
  })
  </script>
  
  <style scoped>
  /* Custom styles for better text rendering */
  h1 {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  /* Ensure images maintain aspect ratio and positioning */
  img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  
  /* Custom width and height utilities for larger images */
  .w-68 {
    width: 17rem;
  }
  
  .w-76 {
    width: 19rem;
  }
  
  .w-80 {
    width: 20rem;
  }
  
  .h-40 {
    height: 10rem;
  }
  
  .h-44 {
    height: 11rem;
  }
  
  /* Mobile-specific adjustments */
  @media (max-width: 640px) {
    h1 {
      letter-spacing: -0.01em;
    }
  }
  
  /* Tablet adjustments */
  @media (min-width: 641px) and (max-width: 1024px) {
    h1 {
      letter-spacing: -0.02em;
    }
  }
  
  /* Large screen adjustments */
  @media (min-width: 1025px) {
    h1 {
      letter-spacing: -0.03em;
    }
  }
  
  /* Extra large screen adjustments */
  @media (min-width: 1536px) {
    h1 {
      letter-spacing: -0.04em;
    }
  }
  
  /* Ensure proper stacking context */
  .relative {
    position: relative;
  }
  
  /* Prevent text wrapping and ensure full width usage */
  .whitespace-nowrap {
    white-space: nowrap;
  }
  
  /* Handle overflow for very large text */
  @media (min-width: 640px) {
    .overflow-hidden {
      overflow-x: visible; /* Changed from auto to visible for parallax effect */
      overflow-y: hidden;
    }
  }
  
  /* Smooth transitions for parallax effect */
  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Performance optimization for transforms */
  .transform {
    transform: translateZ(0); /* Enable hardware acceleration */
  }
  </style>