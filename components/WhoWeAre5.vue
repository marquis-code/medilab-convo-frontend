<template>
    <section 
      class="relative h-screen bg-[#1C5310] overflow-hidden" 
      ref="sectionRef"
      :style="{ position: stickyPosition }"
    >
      <!-- Background pattern overlay -->
      <div class="absolute inset-0 opacity-10 pb-60">
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
          <div class="relative mb-20 h-48 flex items-center overflow-visible">
            <div 
              class="absolute whitespace-nowrap transition-transform duration-100 ease-linear will-change-transform flex items-center"
              :style="{ 
                transform: `translateX(${criticalThinkersOffset}px)`,
                width: 'max-content'
              }"
            >
              <!-- CRITICAL THINKERS as one continuous text -->
              <div class="relative inline-flex items-center">
                <!-- Complete text on one line - MASSIVE SIZE -->
                <h1 class="relative z-20 font-black text-[#3BAB22] leading-[0.85] tracking-tight whitespace-nowrap text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]">
                  CRITICAL THINKERS
                </h1>
              </div>
            </div>
            
            <!-- Image positioned BELOW the text - LEFT POSITION -->
            <div 
              class="absolute w-96 h-64 z-5 transition-all duration-500 ease-out will-change-transform"
              :style="{ 
                transform: `translateY(${imageOffset1}px)`,
                opacity: imageOpacity1,
                top: '100%',
                left: '5%'
              }"
            >
              <img 
                src="@/assets/img/section-images1.png"
                alt="Industrial workers"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
  
          <!-- COLLABORATORS Row -->
          <div class="relative mb-20 h-48 flex items-center overflow-visible">
            <div 
              class="absolute whitespace-nowrap transition-transform duration-100 ease-linear will-change-transform flex items-center"
              :style="{ 
                transform: `translateX(${collaboratorsOffset}px)`,
                width: 'max-content'
              }"
            >
              <!-- COLLABORATORS as one continuous text -->
              <div class="relative inline-flex items-center">
                <!-- Complete text on one line - MASSIVE SIZE -->
                <h1 class="relative z-20 font-black text-[#097A01] leading-[0.85] tracking-tight whitespace-nowrap text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]">
                  COLLABORATORS
                </h1>
              </div>
            </div>
            
            <!-- Image positioned BELOW the text - CENTER POSITION -->
            <div 
              class="absolute left-1/2 transform -translate-x-1/2 w-96 h-64 z-5 transition-all duration-500 ease-out will-change-transform"
              :style="{ 
                transform: `translateX(-50%) translateY(${imageOffset2}px)`,
                opacity: imageOpacity2,
                top: '100%'
              }"
            >
              <img 
                 src="@/assets/img/section-images2.png"
                alt="Industrial facility"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
  
          <!-- INNOVATORS Row -->
          <div class="relative h-48 flex items-center overflow-visible">
            <div 
              class="absolute whitespace-nowrap transition-transform duration-100 ease-linear will-change-transform flex items-center"
              :style="{ 
                transform: `translateX(${innovatorsOffset}px)`,
                width: 'max-content'
              }"
            >
              <!-- INNOVATORS as one continuous text -->
              <div class="relative inline-flex items-center">
                <!-- Complete text on one line - MASSIVE SIZE -->
                <h1 class="relative z-20 font-black text-[#032E00] leading-[0.85] tracking-tight whitespace-nowrap text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem]">
                  INNOVATORS
                </h1>
              </div>
            </div>
            
            <!-- Image positioned BELOW the text - RIGHT POSITION -->
            <div 
              class="absolute w-96 h-64 z-5 transition-all duration-500 ease-out will-change-transform"
              :style="{ 
                transform: `translateY(${imageOffset3}px)`,
                opacity: imageOpacity3,
                top: '100%',
                right: '5%'
              }"
            >
              <img 
                 src="@/assets/img/section-images3.png"
                alt="Industrial workspace"
                class="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
          
        </div>
      </div>
  
      <!-- Scroll indicator for debugging -->
      <!-- <div class="absolute bottom-4 right-4 text-white text-sm opacity-50 z-50">
        Progress: {{ Math.round(scrollProgress * 100) }}% | Direction: {{ scrollDirection }}
      </div> -->
    </section>
  
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  
  // Reactive variables for parallax offsets
  const criticalThinkersOffset = ref(0)
  const collaboratorsOffset = ref(0)
  const innovatorsOffset = ref(0)
  const imageOffset1 = ref(300) // Start images further below
  const imageOffset2 = ref(300)
  const imageOffset3 = ref(300)
  const imageOpacity1 = ref(0)
  const imageOpacity2 = ref(0)
  const imageOpacity3 = ref(0)
  const scrollProgress = ref(0)
  const scrollDirection = ref('down')
  const isParallaxActive = ref(true)
  const lastScrollY = ref(0)
  const stickyPosition = ref('relative')
  
  // Section reference
  const sectionRef = ref<HTMLElement | null>(null)
  
  // Calculate proper initial positions based on their movement patterns
  const getInitialPositions = () => {
    const screenWidth = window.innerWidth
    const textWidth = screenWidth * 1.8 // Estimate text width
    const extremeOffset = textWidth * 0.05 // 5% for 95% visibility
    
    return {
      // Critical Thinkers: Starts from RIGHT extreme (moves right→left on scroll up, left→right on scroll down)
      criticalThinkers: -extremeOffset,
      // Collaborators: Starts from LEFT extreme (moves left→right on scroll up, right→left on scroll down)  
      collaborators: extremeOffset,
      // Innovators: Starts from RIGHT extreme (moves right→left on scroll up, left→right on scroll down)
      innovators: -extremeOffset
    }
  }
  
  // Initialize positions on mount
  const initializePositions = () => {
    const positions = getInitialPositions()
    
    // Set initial positions based on their respective extremes
    criticalThinkersOffset.value = positions.criticalThinkers  // RIGHT extreme
    collaboratorsOffset.value = positions.collaborators       // LEFT extreme
    innovatorsOffset.value = positions.innovators             // RIGHT extreme
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
    
    // Calculate scroll progress (0 to 1)
    const rawProgress = Math.max(0, Math.min(1, 
      (windowHeight - rect.top) / (windowHeight + sectionHeight * 2) // Extended for longer effect
    ))
    
    scrollProgress.value = rawProgress
  
    // Control sticky behavior
    if (rawProgress > 0.05 && rawProgress < 0.9) {
      stickyPosition.value = 'sticky'
      isParallaxActive.value = true
    } else {
      stickyPosition.value = 'relative'
      isParallaxActive.value = false
    }
  
    // Movement distances
    const maxHorizontalOffset = window.innerWidth * 0.8
    const maxImageOffset = 400
  
    // Apply easing function for smoother movement
    const easedProgress = easeInOutCubic(rawProgress)
    
    // Get initial positions
    const positions = getInitialPositions()
    
    if (scrollDirection.value === 'up') {
      // SCROLL UP BEHAVIOR
      // Critical Thinkers: Move from RIGHT to LEFT
      criticalThinkersOffset.value = positions.criticalThinkers - (easedProgress * maxHorizontalOffset)
      
      // Collaborators: Move from LEFT to RIGHT
      collaboratorsOffset.value = positions.collaborators + (easedProgress * maxHorizontalOffset)
      
      // Innovators: Move from RIGHT to LEFT
      innovatorsOffset.value = positions.innovators - (easedProgress * maxHorizontalOffset)
      
    } else {
      // SCROLL DOWN BEHAVIOR
      // Critical Thinkers: Move from LEFT to RIGHT
      criticalThinkersOffset.value = positions.criticalThinkers + (easedProgress * maxHorizontalOffset)
      
      // Collaborators: Move from RIGHT to LEFT
      collaboratorsOffset.value = positions.collaborators - (easedProgress * maxHorizontalOffset)
      
      // Innovators: Move from LEFT to RIGHT
      innovatorsOffset.value = positions.innovators + (easedProgress * maxHorizontalOffset)
    }
  
    // Image animations - Move from bottom to top
    const imagePhaseStart = 0.3
    const imagePhaseProgress = Math.max(0, Math.min(1, 
      (rawProgress - imagePhaseStart) / (1 - imagePhaseStart)
    ))
  
    // Images start appearing and moving from bottom to top
    if (rawProgress > imagePhaseStart) {
      // Images move from bottom (300px) to top (-100px)
      const imageMovement = 300 - (imagePhaseProgress * 400)
      imageOffset1.value = imageMovement
      imageOffset2.value = imageMovement
      imageOffset3.value = imageMovement
  
      // Fade in images
      const fadeProgress = Math.min(imagePhaseProgress * 1.5, 1)
      imageOpacity1.value = fadeProgress
      imageOpacity2.value = fadeProgress
      imageOpacity3.value = fadeProgress
    } else {
      // Reset images when not in image phase
      imageOffset1.value = 300
      imageOffset2.value = 300
      imageOffset3.value = 300
      imageOpacity1.value = 0
      imageOpacity2.value = 0
      imageOpacity3.value = 0
    }
  }
  
  // Easing function for smoother movement
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
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
    
    .w-96 {
      width: 20rem;
    }
    
    .h-64 {
      height: 12rem;
    }
    
    /* Adjust image positions for mobile */
    [style*="left: 5%"] {
      left: 2% !important;
    }
    
    [style*="right: 5%"] {
      right: 2% !important;
    }
  }
  
  @media (max-width: 640px) {
    h1 {
      font-size: 4rem !important;
    }
    
    .w-96 {
      width: 16rem;
    }
    
    .h-64 {
      height: 10rem;
    }
    
    /* Tighter spacing on small screens */
    [style*="left: 5%"] {
      left: 1% !important;
    }
    
    [style*="right: 5%"] {
      right: 1% !important;
    }
  }
  
  /* Smoother transitions for more readable movement */
  .transition-transform {
    transition-property: transform, opacity;
    transition-timing-function: linear;
    transition-duration: 100ms;
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
    min-width: 200vw;
  }
  
  /* Custom positioning for better control */
  .absolute {
    position: absolute;
  }
  
  .relative {
    position: relative;
  }
  
  /* Z-index management */
  .z-5 {
    z-index: 5;
  }
  
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
  
  /* Larger image sizes */
  .w-96 {
    width: 24rem;
  }
  
  .h-64 {
    height: 16rem;
  }
  </style>