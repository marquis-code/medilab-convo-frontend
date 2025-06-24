<template>
  <div class="parallax-container" ref="parallaxContainer">
    <!-- Background that scrolls with content -->
    <div class="background-gradient"></div>
    
    <!-- Header text -->
    <div class="header-text">
      <h2>who we are</h2>
    </div>
    
    <!-- Animated text rows with continuous movement -->
    <div class="text-rows">
      <!-- Critical Thinkers - moves from RIGHT to LEFT -->
      <div 
        ref="criticalText" 
        class="text-row critical-thinkers"
        :style="{ 
          transform: `translateX(${criticalTransform}px)`,
          opacity: criticalOpacity
        }"
      >
        critical thinkers
      </div>
      
      <!-- Collaborators - moves from LEFT to RIGHT -->
      <div 
        ref="collaboratorsText" 
        class="text-row collaborators"
        :style="{ 
          transform: `translateX(${collaboratorsTransform}px)`,
          opacity: collaboratorsOpacity
        }"
      >
        collaborators
      </div>
      
      <!-- Innovators - moves from RIGHT to LEFT -->
      <div 
        ref="innovatorsText" 
        class="text-row innovators"
        :style="{ 
          transform: `translateX(${innovatorsTransform}px)`,
          opacity: innovatorsOpacity
        }"
      >
        innovators
      </div>
    </div>
    
    <!-- Images that move with their corresponding text -->
    <div class="images-container">
      <!-- Image 1 - moves with Critical Thinkers (RIGHT to LEFT) -->
      <div 
        class="image-area image-1"
        :style="{ 
          transform: `translate(${image1TransformX}px, ${image1TransformY}px)`,
          opacity: image1Opacity
        }"
      >
        <img 
          src="@/assets/img/section-images1.png" 
          alt="Critical thinking team"
          class="parallax-image"
        />
      </div>
      
      <!-- Image 2 - moves with Collaborators (LEFT to RIGHT) -->
      <div 
        class="image-area image-2"
        :style="{ 
          transform: `translate(${image2TransformX}px, ${image2TransformY}px)`,
          opacity: image2Opacity
        }"
      >
        <img 
        src="@/assets/img/section-images3.png" 
          alt="Collaboration in action"
          class="parallax-image"
        />
      </div>
      
      <!-- Image 3 - moves with Innovators (RIGHT to LEFT) -->
      <div 
        class="image-area image-3"
        :style="{ 
          transform: `translate(${image3TransformX}px, ${image3TransformY}px)`,
          opacity: image3Opacity
        }"
      >
        <img 
        src="@/assets/img/section-images2.png" 
          alt="Innovation workspace"
          class="parallax-image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Refs for DOM elements
const parallaxContainer = ref<HTMLElement>()
const criticalText = ref<HTMLElement>()
const collaboratorsText = ref<HTMLElement>()
const innovatorsText = ref<HTMLElement>()

// Transform values for texts
const criticalTransform = ref(0)
const collaboratorsTransform = ref(0)
const innovatorsTransform = ref(0)

// Opacity values for texts
const criticalOpacity = ref(0)
const collaboratorsOpacity = ref(0)
const innovatorsOpacity = ref(0)

// Transform values for images (X and Y)
const image1TransformX = ref(0)
const image1TransformY = ref(0)
const image2TransformX = ref(0)
const image2TransformY = ref(0)
const image3TransformX = ref(0)
const image3TransformY = ref(0)

// Opacity values for images
const image1Opacity = ref(0)
const image2Opacity = ref(0)
const image3Opacity = ref(0)

const handleScroll = () => {
  if (!parallaxContainer.value) return
  
  const scrollY = window.scrollY
  const containerRect = parallaxContainer.value.getBoundingClientRect()
  const containerTop = parallaxContainer.value.offsetTop
  const containerHeight = parallaxContainer.value.offsetHeight
  const windowHeight = window.innerHeight
  const screenWidth = window.innerWidth
  
  // Calculate scroll progress through the entire container
  const scrollStart = containerTop - windowHeight
  const scrollEnd = containerTop + containerHeight
  const totalScrollDistance = scrollEnd - scrollStart
  
  if (scrollY >= scrollStart && scrollY <= scrollEnd) {
    // Calculate overall progress (0 to 1)
    const overallProgress = (scrollY - scrollStart) / totalScrollDistance
    const clampedProgress = Math.max(0, Math.min(1, overallProgress))
    
    // TEXT ANIMATIONS - CONTINUOUS MOVEMENT
    
    // Critical Thinkers: RIGHT to LEFT movement
    const criticalStart = 0
    const criticalEnd = 0.4
    if (clampedProgress >= criticalStart && clampedProgress <= criticalEnd) {
      const criticalProgress = (clampedProgress - criticalStart) / (criticalEnd - criticalStart)
      criticalTransform.value = screenWidth * 1.2 - (screenWidth * 1.4 * criticalProgress)
      criticalOpacity.value = Math.min(1, criticalProgress * 2)
    } else if (clampedProgress > criticalEnd) {
      criticalTransform.value = -screenWidth * 0.2
      criticalOpacity.value = Math.max(0, 1 - (clampedProgress - criticalEnd) * 3)
    } else {
      criticalTransform.value = screenWidth * 1.2
      criticalOpacity.value = 0
    }
    
    // Collaborators: LEFT to RIGHT movement
    const collaboratorsStart = 0.2
    const collaboratorsEnd = 0.7
    if (clampedProgress >= collaboratorsStart && clampedProgress <= collaboratorsEnd) {
      const collaboratorsProgress = (clampedProgress - collaboratorsStart) / (collaboratorsEnd - collaboratorsStart)
      collaboratorsTransform.value = -screenWidth * 1.2 + (screenWidth * 1.4 * collaboratorsProgress)
      collaboratorsOpacity.value = Math.min(1, collaboratorsProgress * 2)
    } else if (clampedProgress > collaboratorsEnd) {
      collaboratorsTransform.value = screenWidth * 0.2
      collaboratorsOpacity.value = Math.max(0, 1 - (clampedProgress - collaboratorsEnd) * 3)
    } else {
      collaboratorsTransform.value = -screenWidth * 1.2
      collaboratorsOpacity.value = 0
    }
    
    // Innovators: RIGHT to LEFT movement
    const innovatorsStart = 0.5
    const innovatorsEnd = 1
    if (clampedProgress >= innovatorsStart && clampedProgress <= innovatorsEnd) {
      const innovatorsProgress = (clampedProgress - innovatorsStart) / (innovatorsEnd - innovatorsStart)
      innovatorsTransform.value = screenWidth * 1.2 - (screenWidth * 1.3 * innovatorsProgress)
      innovatorsOpacity.value = Math.min(1, innovatorsProgress * 2)
    } else {
      innovatorsTransform.value = screenWidth * 1.2
      innovatorsOpacity.value = 0
    }
    
    // IMAGE ANIMATIONS - MOVE WITH TEXT AND APPEAR GRADUALLY
    
    // Image 1 - follows Critical Thinkers movement
    const image1Start = 0.1
    const image1End = 0.5
    if (clampedProgress >= image1Start && clampedProgress <= image1End) {
      const image1Progress = (clampedProgress - image1Start) / (image1End - image1Start)
      // Move horizontally with text (RIGHT to LEFT, but slower)
      image1TransformX.value = screenWidth * 0.3 - (screenWidth * 0.4 * image1Progress)
      // Move vertically (top to bottom)
      image1TransformY.value = -100 + (200 * image1Progress)
      // Fade in
      image1Opacity.value = Math.min(1, image1Progress * 1.5)
    } else if (clampedProgress > image1End) {
      image1TransformX.value = -screenWidth * 0.1
      image1TransformY.value = 100
      image1Opacity.value = Math.max(0, 1 - (clampedProgress - image1End) * 2)
    } else {
      image1TransformX.value = screenWidth * 0.3
      image1TransformY.value = -100
      image1Opacity.value = 0
    }
    
    // Image 2 - follows Collaborators movement
    const image2Start = 0.3
    const image2End = 0.8
    if (clampedProgress >= image2Start && clampedProgress <= image2End) {
      const image2Progress = (clampedProgress - image2Start) / (image2End - image2Start)
      // Move horizontally with text (LEFT to RIGHT, but slower)
      image2TransformX.value = -screenWidth * 0.3 + (screenWidth * 0.4 * image2Progress)
      // Move vertically
      image2TransformY.value = -80 + (180 * image2Progress)
      // Fade in
      image2Opacity.value = Math.min(1, image2Progress * 1.5)
    } else if (clampedProgress > image2End) {
      image2TransformX.value = screenWidth * 0.1
      image2TransformY.value = 100
      image2Opacity.value = Math.max(0, 1 - (clampedProgress - image2End) * 2)
    } else {
      image2TransformX.value = -screenWidth * 0.3
      image2TransformY.value = -80
      image2Opacity.value = 0
    }
    
    // Image 3 - follows Innovators movement
    const image3Start = 0.6
    const image3End = 1
    if (clampedProgress >= image3Start && clampedProgress <= image3End) {
      const image3Progress = (clampedProgress - image3Start) / (image3End - image3Start)
      // Move horizontally with text (RIGHT to LEFT, but slower)
      image3TransformX.value = screenWidth * 0.25 - (screenWidth * 0.35 * image3Progress)
      // Move vertically
      image3TransformY.value = -60 + (160 * image3Progress)
      // Fade in
      image3Opacity.value = Math.min(1, image3Progress * 1.5)
    } else {
      image3TransformX.value = screenWidth * 0.25
      image3TransformY.value = -60
      image3Opacity.value = 0
    }
  }
}

const handleResize = () => {
  handleScroll()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.parallax-container {
  position: relative;
  height: 300vh; /* Tall container to allow for scrolling */
  overflow: hidden;
}

.background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%);
  z-index: 1;
}

.header-text {
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  color: white;
}

.header-text h2 {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  letter-spacing: 0.05em;
}

.text-rows {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  pointer-events: none;
}

.text-row {
  position: absolute;
  font-size: clamp(3rem, 12vw, 8rem);
  font-weight: 900;
  white-space: nowrap;
  will-change: transform, opacity;
}

.critical-thinkers {
  top: 20%;
  color: #60a5fa;
}

.collaborators {
  top: 40%;
  color: #3b82f6;
}

.innovators {
  top: 60%;
  color: #1e40af;
}

.images-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
}

.image-area {
  position: absolute;
  will-change: transform, opacity;
}

.image-1 {
  top: 15%;
  right: 10%;
  width: 25%;
  max-width: 400px;
}

.image-2 {
  top: 45%;
  left: 10%;
  width: 30%;
  max-width: 450px;
}

.image-3 {
  top: 70%;
  right: 15%;
  width: 28%;
  max-width: 420px;
}

.parallax-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Mobile responsiveness */
@media (max-width: 1024px) {
  .image-1,
  .image-2,
  .image-3 {
    width: 35%;
  }
  
  .text-row {
    font-size: clamp(2.5rem, 10vw, 6rem);
  }
}

@media (max-width: 768px) {
  .header-text {
    top: 5%;
  }
  
  .header-text h2 {
    font-size: 1.2rem;
  }
  
  .text-row {
    font-size: clamp(2rem, 15vw, 4rem);
  }
  
  .critical-thinkers {
    top: 15%;
  }
  
  .collaborators {
    top: 35%;
  }
  
  .innovators {
    top: 55%;
  }
  
  .image-1 {
    top: 12%;
    right: 5%;
    width: 40%;
  }
  
  .image-2 {
    top: 40%;
    left: 5%;
    width: 45%;
  }
  
  .image-3 {
    top: 65%;
    right: 5%;
    width: 42%;
  }
}

@media (max-width: 480px) {
  .text-row {
    font-size: clamp(1.5rem, 18vw, 3rem);
  }
  
  .image-1,
  .image-2,
  .image-3 {
    width: 50%;
  }
  
  .parallax-container {
    height: 250vh; /* Shorter on mobile */
  }
}

/* Performance optimizations */
.text-row,
.image-area {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>