<template>
  <main class="min-h-screen bg-black flex items-center justify-center overflow-hidden">
    <div v-if="loading" class="text-white">Loading...</div>
    <div v-else-if="!shortRead" class="text-white">Story not found.</div>
    <div v-else class="relative w-full max-w-md h-[100dvh] sm:h-[85vh] sm:rounded-3xl overflow-hidden bg-gray-900 shadow-sm border border-slate-200">
      <!-- Progress Bar -->
      <div class="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2 bg-gradient-to-b from-black/50 to-transparent">
        <div 
          v-for="(_, index) in totalSlides" 
          :key="index" 
          class="flex-1 h-1.5 rounded-full overflow-hidden bg-white/30"
        >
          <div 
            class="h-full bg-white transition-all duration-300" 
            :style="{ width: index < currentSlideIndex ? '100%' : (index === currentSlideIndex ? '100%' : '0%') }"
          ></div>
        </div>
      </div>

      <!-- Slides Container -->
      <div class="relative w-full h-full flex" :style="{ transform: `translateX(-${currentSlideIndex * 100}%)`, transition: 'transform 0.5s ease' }">
        
        <!-- Cover Slide -->
        <div class="w-full h-full flex-shrink-0 relative">
          <img :src="shortRead.coverImageUrl" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/40"></div>
          <div class="absolute bottom-10 left-6 right-6 text-white text-center">
            <h1 class="text-xl font-bold mb-4">{{ shortRead.title }}</h1>
            <p v-if="shortRead.author" class="text-sm opacity-80">By {{ shortRead.author }}</p>
            <p class="mt-8 text-xs  tracking-normal opacity-60 animate-pulse">Tap right to begin</p>
          </div>
        </div>

        <!-- Content Slides -->
        <div 
          v-for="(slide, index) in shortRead.slides" 
          :key="index" 
          class="w-full h-full flex-shrink-0 relative flex flex-col justify-center items-center bg-[#111]"
        >
          <!-- Image -->
          <img v-if="slide.type === 'image' || slide.type === 'mixed'" :src="slide.mediaUrl" class="absolute inset-0 w-full h-full object-cover opacity-60" />
          
          <!-- Content -->
          <div v-if="slide.type === 'text' || slide.type === 'mixed'" class="relative z-20 p-4 w-full h-full flex flex-col justify-center max-w-lg mx-auto pointer-events-none">
            <div class="bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-sm overflow-y-auto max-h-[85%] pointer-events-auto hide-scrollbar">
              <p class="text-white text-sm md:text-sm leading-snug whitespace-pre-wrap font-serif" v-html="parseMarkdown(slide.content || '')"></p>
            </div>
          </div>
        </div>

        <!-- End Slide -->
        <div class="w-full h-full flex-shrink-0 relative flex flex-col justify-center items-center bg-[#033958]">
          <div class="text-center px-6">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-[#033958]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 class="text-lg font-bold text-white mb-2">Thanks for reading!</h2>
            <NuxtLink to="/short-reads" class="inline-block mt-6 px-6 py-3 bg-white text-[#033958] rounded-full font-bold hover:scale-105 transition-transform">
              Read more stories
            </NuxtLink>
          </div>
        </div>

      </div>

      <!-- Navigation Overlays -->
      <div class="absolute inset-0 z-10 flex">
        <div class="w-1/3 h-full cursor-pointer" @click="prevSlide"></div>
        <div class="w-2/3 h-full cursor-pointer" @click="nextSlide"></div>
      </div>
      
      <!-- Close Button -->
      <NuxtLink to="/short-reads" class="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:bg-black/70">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetShortReads } from '@/composables/modules/short-reads/useGetShortReads'
import type { ShortRead } from '@/api_factory/modules/short-reads'

const route = useRoute()
const router = useRouter()
const { getShortRead, loading } = useGetShortReads()

const slug = route.params.slug as string
const shortRead = ref<ShortRead | null>(null)
const currentSlideIndex = ref(0)

onMounted(async () => {
  try {
    const data = await getShortRead(slug)
    if (data) {
      shortRead.value = data
    } else {
      router.push('/short-reads')
    }
  } catch (err) {
    router.push('/short-reads')
  }
})

// Cover slide + Content slides + End slide
const totalSlides = computed(() => {
  return shortRead.value ? (shortRead.value.slides?.length || 0) + 2 : 0
})

const nextSlide = () => {
  if (currentSlideIndex.value < totalSlides.value - 1) {
    currentSlideIndex.value++
  } else {
    router.push('/short-reads')
  }
}

const prevSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--
  }
}

// Add keyboard navigation
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide()
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'Escape') router.push('/short-reads')
  })
})

const parseMarkdown = (text: string) => {
  if (!text) return ''
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#E5E7EB]">$1</strong>')
}
</script>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
