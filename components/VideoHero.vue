<template>
  <div class="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 animate-float"></div>
      <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-100 rounded-full opacity-40 animate-float-delayed"></div>
    </div>

    <div class="relative py-20 px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16" ref="headerRef">
          <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-1000"
              :class="{ 'translate-y-0 opacity-100': headerVisible, 'translate-y-10 opacity-0': !headerVisible }">
            <span class="bg-gradient-to-r from-[#27628C] via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Transforming Healthcare
            </span>
            <br>
            <span class="text-gray-700 inline-block mt-2">
              One Lab Professional at a Time
            </span>
          </h2>
          
          <p class="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300"
             :class="{ 'translate-y-0 opacity-100': headerVisible, 'translate-y-10 opacity-0': !headerVisible }">
            We are leading change, inspiring action, and building the capacity of future generations of world-class
            professionals in medical laboratory science and in the healthcare system at large.
          </p>
          <p class="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300"
             :class="{ 'translate-y-0 opacity-100': headerVisible, 'translate-y-10 opacity-0': !headerVisible }">
             We design and deliver digital programs, content products, advocacy programs and professional development services
             that strengthen technical capacity, leadership, and innovation readiness across the healthcare workforce. Our work supports students, early career professionals, institutions, and partners navigating the future of laboratory medicine and health technology.
          </p>
        </div>

        <!-- Full Width Video Section -->
        <div class="relative w-full" ref="videoRef">
          <div class="aspect-video w-full transform transition-all duration-1000"
               :class="{ 'translate-y-0 opacity-100 scale-100': videoVisible, 'translate-y-10 opacity-0 scale-95': !videoVisible }">
            <iframe 
              class="w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/rhVkU6HAbn0?si=PP3LqgBgNf_oVTMa" 
              title="Healthcare Transformation Video" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// Reactive refs
const headerRef = ref<HTMLElement>()
const videoRef = ref<HTMLElement>()
const headerVisible = ref(false)
const videoVisible = ref(false)

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

onMounted(() => {
  nextTick(() => {
    setupIntersectionObserver()
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
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}
</style>