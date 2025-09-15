<template>
  <div class="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 animate-float"></div>
      <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-40 animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-100 rounded-full opacity-20 animate-pulse-slow"></div>
    </div>

    <div class="relative py-20 px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Animated Header -->
        <div class="text-center mb-16" ref="headerRef">
          <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-1000"
              :class="{ 'translate-y-0 opacity-100': headerVisible, 'translate-y-10 opacity-0': !headerVisible }">
            <span class="bg-gradient-to-r from-[#27628C] via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift">
              Transforming Healthcare
            </span>
            <br>
            <span class="text-gray-700 inline-block mt-2 transform transition-all duration-1000 delay-300"
                  :class="{ 'translate-y-0 opacity-100': headerVisible, 'translate-y-10 opacity-0': !headerVisible }">
              One Lab Professional at a Time
            </span>
          </h2>
          
          <p class="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500"
             :class="{ 'translate-y-0 opacity-100': headerVisible, 'translate-y-10 opacity-0': !headerVisible }">
            We are leading change, inspiring action, and building the capacity of future generations of world-class
            professionals in medical laboratory science and in the healthcare system at large.
          </p>
        </div>

        <!-- Enhanced Video Section -->
        <div class="relative" ref="videoRef">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl group transform transition-all duration-1000"
               :class="{ 'translate-y-0 opacity-100 scale-100': videoVisible, 'translate-y-20 opacity-0 scale-95': !videoVisible }">
            
            <!-- Video Element -->
            <video 
              ref="videoElement"
              class="w-full h-96 sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              controls
              preload="metadata"
              poster="/intro-video.mp4"
              @loadstart="onVideoLoadStart"
              @loadeddata="onVideoLoaded"
              @error="onVideoError"
            >
              <source src="/intro-video.mp4" type="video/mp4">
              <source src="/intro-video.mp4" type="video/webm">
              Your browser does not support the video tag.
            </video>

            <!-- Play Button Overlay -->
            <div v-if="!isPlaying" 
                 class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
                 @click="togglePlay">
              <div class="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-white group-hover:shadow-2xl">
                <svg class="w-8 h-8 text-[#27628C] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <!-- Loading Spinner -->
            <div v-if="isLoading" 
                 class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#27628C]/20 to-blue-600/20 backdrop-blur-sm">
              <div class="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-[#27628C]"></div>
            </div>

            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <!-- Floating Elements -->
            <div class="absolute top-4 right-4 w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
            <div class="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
          </div>

          <!-- Video Stats/Info -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="text-3xl font-bold text-[#27628C] mb-2 animate-count-up">500+</div>
              <div class="text-gray-600">Professionals Trained</div>
            </div>
            <div class="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="text-3xl font-bold text-[#27628C] mb-2 animate-count-up">50+</div>
              <div class="text-gray-600">Healthcare Facilities</div>
            </div>
            <div class="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="text-3xl font-bold text-[#27628C] mb-2 animate-count-up">10+</div>
              <div class="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive refs
const headerRef = ref<HTMLElement>()
const videoRef = ref<HTMLElement>()
const videoElement = ref<HTMLVideoElement>()
const headerVisible = ref(false)
const videoVisible = ref(false)
const isPlaying = ref(false)
const isLoading = ref(true)

// Video event handlers
const onVideoLoadStart = () => {
  isLoading.value = true
}

const onVideoLoaded = () => {
  isLoading.value = false
}

const onVideoError = (event: Event) => {
  console.error('Video failed to load:', event)
  isLoading.value = false
}

const togglePlay = async () => {
  if (!videoElement.value) return
  
  try {
    if (videoElement.value.paused) {
      await videoElement.value.play()
      isPlaying.value = true
    } else {
      videoElement.value.pause()
      isPlaying.value = false
    }
  } catch (error) {
    console.error('Error playing video:', error)
  }
}

// Intersection Observer for animations
let observer: IntersectionObserver

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerRef.value && entry.isIntersecting) {
          headerVisible.value = true
        }
        if (entry.target === videoRef.value && entry.isIntersecting) {
          videoVisible.value = true
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '50px',
    }
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (videoRef.value) observer.observe(videoRef.value)
}

// Video event listeners
const setupVideoEventListeners = () => {
  if (!videoElement.value) return

  videoElement.value.addEventListener('play', () => {
    isPlaying.value = true
  })

  videoElement.value.addEventListener('pause', () => {
    isPlaying.value = false
  })

  videoElement.value.addEventListener('ended', () => {
    isPlaying.value = false
  })
}

onMounted(() => {
  setupIntersectionObserver()
  nextTick(() => {
    setupVideoEventListeners()
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes count-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

.animate-count-up {
  animation: count-up 1s ease-out;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #27628C;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1e4a6b;
}
</style>