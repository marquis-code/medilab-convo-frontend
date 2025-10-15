<template>
    <section class="relative py-16 bg-gradient-to-b from-slate-50 via-blue-50 to-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl lg:text-3xl font-bold text-[#27628C] mb-2">
            Our Past Programs
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of the impactful programs we’ve organized over the years.
          </p>
        </div>
  
        <div class="relative">
          <div
            ref="carousel"
            class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
          >
            <div
              v-for="(flyer, idx) in flyers"
              :key="idx"
              class="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%] flex-shrink-0 snap-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <img
                :src="flyer.image"
                :alt="flyer.title"
                class="w-full h-72 object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-[#27628C] mb-2">
                  {{ flyer.title }}
                </h3>
                <p class="text-sm text-gray-600">{{ flyer.date }}</p>
              </div>
            </div>
          </div>
  
          <button
            @click="scroll('left')"
            class="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-[#27628C] p-3 rounded-full shadow hover:bg-blue-50 transition"
          >
            ‹
          </button>
          <button
            @click="scroll('right')"
            class="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-[#27628C] p-3 rounded-full shadow hover:bg-blue-50 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import conference from '@/assets/img/conference.jpeg'
  import FACP from '@/assets/img/forging-a-career-path.jpg'
  import FL from '@/assets/img/financial-literacy.jpeg'
  import scholarship from '@/assets/img/scholarship.jpeg'

  const carousel = ref<HTMLDivElement>()
  
  const flyers = ref([
    {
      title: '21st Centuty Biomedical Science Conference',
      date: '2025',
      image: conference,
    },
    {
      title: 'Forging a Career Path Series',
      date: '2025',
      image: FACP,
    },
    {
      title: 'Financial Literacy',
      date: '2025',
      image: FL,
    },
    {
      title: 'Scholarship Application Masterclass',
      date: '2025',
      image: scholarship,
    },
  ])
  
  const scroll = (direction: 'left' | 'right') => {
    if (!carousel.value) return
    const width = carousel.value.clientWidth
    carousel.value.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    })
  }
  </script>
  
  <style scoped>
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  