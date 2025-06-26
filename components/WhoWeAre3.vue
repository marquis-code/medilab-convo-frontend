<template>
    <section 
      class="relative h-screen bg-[#1C5310] overflow-hidden sticky top-0" 
      ref="sectionRef"
      :class="{ 'sticky': isParallaxActive }"
    >
      <!-- Background pattern overlay -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>
  
      <div class="relative z-10 h-full flex flex-col">
        <!-- Header -->
        <div class="text-center pt-16 pb-8 px-4">
          <h2 class="text-white text-sm lg:text-base font-medium tracking-[0.3em] uppercase">
            WHO WE ARE
          </h2>
        </div>
  
        <!-- Main Content Container - Full Height -->
        <div class="flex-1 flex flex-col justify-center relative">
          
          <!-- CRITICAL THINKERS Row -->
          <div class="relative mb-16 h-40 flex items-center overflow-visible">
            <div 
              class="absolute whitespace-nowrap transition-transform duration-100 ease-linear will-change-transform flex items-center"
              :style="{ 
                transform: `translateX(${criticalThinkersOffset}px)`,
                width: 'max-content'
              }"
            >
              <!-- CRITICAL THINKERS as one continuous text -->
              <div class="relative inline-flex items-center">
                <!-- Image positioned behind CRITICAL text -->
                <div 
                  class="absolute top-1/2 left-32 transform -translate-x-1/2 -translate-y-1/2 w-80 h-52 z-10 transition-all duration-300 ease-out will-change-transform opacity-0"
                  :style="{ 
                    transform: `translateX(-50%) translateY(calc(-50% + ${imageOffset1}px))`,
                    opacity: imageOpacity1
                  }"
                >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-26%20at%2004.08.59-6QiH7GxfyrFGDj83YND2KcsbpRQWPp.png"
                    alt="Industrial workers"
                    class="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <!-- Complete text on one line - MASSIVE SIZE -->
                <h1 class="relative z-20 font-black text-[#3BAB22] leading-[0.85] tracking-tight whitespace-nowrap text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]">
                  CRITICAL THINKERS
                </h1>
              </div>
            </div>
          </div>
  
          <!-- COLLABORATORS Row -->
          <div class="relative mb-16 h-40 flex items-center overflow-visible">
            <div 
              class="absolute whitespace-nowrap transition-transform duration-100 ease-linear will-change-transform flex items-center"
              :style="{ 
                transform: `translateX(${collaboratorsOffset}px)`,
                width: 'max-content'
              }"
            >
              <!-- COLLABORATORS as one continuous text -->
              <div class="relative inline-flex items-center">
                <!-- Image positioned behind COLLABORATORS text -->
                <div 
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-52 z-10 transition-all duration-300 ease-out will-change-transform opacity-0"
                  :style="{ 
                    transform: `translateX(-50%) translateY(calc(-50% + ${imageOffset2}px))`,
                    opacity: imageOpacity2
                  }"
                >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-26%20at%2004.09.07-qJ1mjW2KPvKkNcVMbDkaHUHzWUMhR6.png"
                    alt="Industrial facility"
                    class="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <!-- Complete text on one line - MASSIVE SIZE -->
                <h1 class="relative z-20 font-black text-[#097A01] leading-[0.85] tracking-tight whitespace-nowrap text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]">
                  COLLABORATORS
                </h1>
              </div>
            </div>
          </div>
  
          <!-- INNOVATORS Row -->
          <div class="relative h-40 flex items-center overflow-visible">
            <div 
              class="absolute whitespace-nowrap transition-transform duration-100 ease-linear will-change-transform flex items-center"
              :style="{ 
                transform: `translateX(${innovatorsOffset}px)`,
                width: 'max-content'
              }"
            >
              <!-- INNOVATORS as one continuous text -->
              <div class="relative inline-flex items-center">
                <!-- Image positioned behind INNOVATORS text -->
                <div 
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-52 z-10 transition-all duration-300 ease-out will-change-transform opacity-0"
                  :style="{ 
                    transform: `translateX(-50%) translateY(calc(-50% + ${imageOffset3}px))`,
                    opacity: imageOpacity3
                  }"
                >
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-26%20at%2004.05.47-QfLhE9AStEtNxdbkYQnAJdLOdzudU4.png"
                    alt="Industrial workspace"
                    class="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
                <!-- Complete text on one line - MASSIVE SIZE -->
                <h1 class="relative z-20 font-black text-[#032E00] leading-[0.85] tracking-tight whitespace-nowrap text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]">
                  INNOVATORS
                </h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>
  
      <!-- Scroll indicator for debugging -->
      <div class="absolute bottom-4 right-4 text-white text-sm opacity-50 z-50">
        Progress: {{ Math.round(scrollProgress * 100) }}% | Direction: {{ scrollDirection }}
      </div>
    </section>

  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  
  // Reactive variables for parallax offsets
  const criticalThinkersOffset = ref(0)
  const collaboratorsOffset = ref(0)
  const innovatorsOffset = ref(0)
  const imageOffset1 = ref(200) // Start images below
  const imageOffset2 = ref(200)
  const imageOffset3 = ref(200)
  const imageOpacity1 = ref(0)
  const imageOpacity2 = ref(0)
  const imageOpacity3 = ref(0)
  const scrollProgress = ref(0)
  const scrollDirection = ref('down')
  const isParallaxActive = ref(true)
  const lastScrollY = ref(0)
  
  // Section reference
  const sectionRef = ref<HTMLElement | null>(null)
  
  // Initial positioning - 95% visible (5% offset)
  const getInitialOffset = () => {
    const screenWidth = window.innerWidth
    return screenWidth * 0.05 // 5% offset means 95% visible
  }
  
  // Initialize positions on mount
  const initializePositions = () => {
    const initialOffset = getInitialOffset()
    
    // Critical Thinkers: Start 95% visible from right
    criticalThinkersOffset.value = -initialOffset
    
    // Collaborators: Start 95% visible from left  
    collaboratorsOffset.value = initialOffset
    
    // Innovators: Start 95% visible from right
    innovatorsOffset.value = -initialOffset
  }
  
  // Scroll handler function
  const handleScroll = () => {
    if (!sectionRef.value) return
  
    const currentScrollY = window.scrollY
    
    // Detect scroll direction
    if (currentScrollY > lastScrollY.value) {
      scrollDirection.value = 'down'
    } else if (currentScrollY < lastScrollY.value) {
      scrollDirection.value = 'up'
    }
    lastScrollY.value = currentScrollY
  
    const rect = sectionRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const sectionHeight = rect.height
    
    // Calculate scroll progress (0 to 1) - Extended for slower movement
    const rawProgress = Math.max(0, Math.min(1, 
      (windowHeight - rect.top) / (windowHeight + sectionHeight * 1.5) // Increased multiplier for slower progress
    ))
    
    scrollProgress.value = rawProgress
  
    // Movement distances - SIGNIFICANTLY REDUCED for slower, more readable movement
    const maxHorizontalOffset = window.innerWidth * 0.3 // Reduced from 1.2 to 0.3
    const maxImageOffset = 300
  
    // All text movements happen simultaneously based on scroll progress
    // Apply easing function for smoother, more gradual movement
    const easedProgress = easeInOutCubic(rawProgress)
    
    // Initial positions (95% visible)
    const initialOffset = getInitialOffset()
    
    if (scrollDirection.value === 'down') {
      // SCROLL DOWN BEHAVIOR - Slower movement
      // Critical Thinkers: Move from left to right (start from 95% visible on left)
      criticalThinkersOffset.value = -initialOffset + (easedProgress * maxHorizontalOffset)
      
      // Collaborators: Move from right to left (start from 95% visible on right)
      collaboratorsOffset.value = initialOffset - (easedProgress * maxHorizontalOffset)
      
      // Innovators: Move from left to right (start from 95% visible on left)
      innovatorsOffset.value = -initialOffset + (easedProgress * maxHorizontalOffset)
      
    } else {
      // SCROLL UP BEHAVIOR - Slower movement
      // Critical Thinkers: Move from right to left (start from 95% visible on right)
      criticalThinkersOffset.value = initialOffset - (easedProgress * maxHorizontalOffset)
      
      // Collaborators: Move from left to right (start from 95% visible on left)
      collaboratorsOffset.value = -initialOffset + (easedProgress * maxHorizontalOffset)
      
      // Innovators: Move from right to left (start from 95% visible on right)
      innovatorsOffset.value = initialOffset - (easedProgress * maxHorizontalOffset)
    }
  
    // Image animations (start when text movement is 60% complete for more reading time)
    const imagePhaseStart = 0.6 // Increased from 0.4 to 0.6
    const imagePhaseProgress = Math.max(0, Math.min(1, 
      (rawProgress - imagePhaseStart) / (1 - imagePhaseStart)
    ))
  
    // Images start appearing when text reaches extremes
    if (rawProgress > imagePhaseStart) {
      // Images slide up from bottom
      const imageMovement = maxImageOffset - (imagePhaseProgress * maxImageOffset * 1.5)
      imageOffset1.value = imageMovement
      imageOffset2.value = imageMovement
      imageOffset3.value = imageMovement
  
      // Fade in images
      const fadeProgress = Math.min(imagePhaseProgress * 2, 1)
      imageOpacity1.value = fadeProgress
      imageOpacity2.value = fadeProgress
      imageOpacity3.value = fadeProgress
    } else {
      // Reset images when not in image phase
      imageOffset1.value = 200
      imageOffset2.value = 200
      imageOffset3.value = 200
      imageOpacity1.value = 0
      imageOpacity2.value = 0
      imageOpacity3.value = 0
    }
  
    // Control sticky behavior
    isParallaxActive.value = rawProgress < 0.95
  }
  
  // Easing function for smoother movement
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }
  
  // Throttle function to improve performance - Reduced throttling for smoother movement
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
  
  // Handle window resize
  const handleResize = () => {
    initializePositions()
    handleScroll()
  }
  
  // Lifecycle hooks
  onMounted(() => {
    // Initialize positions first
    initializePositions()
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Initial calculation
    setTimeout(() => {
      handleScroll()
    }, 100)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', throttledScrollHandler)
    window.removeEventListener('resize', handleResize)
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
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 900;
  }
  
  /* Ensure images maintain aspect ratio and positioning */
  img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  
  /* Performance optimization for transforms */
  .will-change-transform {
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
  }
  
  /* Sticky positioning for parallax effect */
  .sticky {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  /* Ensure proper overflow handling */
  .overflow-visible {
    overflow: visible;
  }
  
  /* Mobile responsiveness - Still large but scaled down */
  @media (max-width: 768px) {
    h1 {
      font-size: 6rem !important;
      letter-spacing: -0.02em;
    }
    
    .w-80 {
      width: 16rem;
    }
    
    .h-52 {
      height: 10rem;
    }
  }
  
  @media (max-width: 640px) {
    h1 {
      font-size: 4rem !important;
    }
    
    .w-80 {
      width: 12rem;
    }
    
    .h-52 {
      height: 8rem;
    }
  }
  
  /* Smoother transitions for more readable movement */
  .transition-transform {
    transition-property: transform, opacity;
    transition-timing-function: linear; /* Changed to linear for consistent speed */
    transition-duration: 100ms; /* Slightly longer for smoother movement */
  }
  
  /* Hardware acceleration for better performance */
  .transform {
    transform: translateZ(0);
  }
  
  /* Ensure text never wraps and containers are wide enough */
  .whitespace-nowrap {
    white-space: nowrap;
    min-width: max-content;
  }
  
  /* Flex containers for proper alignment */
  .inline-flex {
    display: inline-flex;
  }
  
  /* Ensure containers can accommodate full width */
  [style*="width: max-content"] {
    min-width: 200vw; /* Increased for larger text */
  }
  
  /* Custom positioning for better control */
  .absolute {
    position: absolute;
  }
  
  .relative {
    position: relative;
  }
  
  /* Z-index management */
  .z-10 {
    z-index: 10;
  }
  
  .z-20 {
    z-index: 20;
  }
  
  .z-50 {
    z-index: 50;
  }
  
  /* Custom large text sizes */
  .text-\[8rem\] {
    font-size: 8rem;
  }
  
  .text-\[10rem\] {
    font-size: 10rem;
  }
  
  .text-\[12rem\] {
    font-size: 12rem;
  }
  
  .text-\[14rem\] {
    font-size: 14rem;
  }
  
  .text-\[16rem\] {
    font-size: 16rem;
  }
  
  .text-\[18rem\] {
    font-size: 18rem;
  }
  </style>