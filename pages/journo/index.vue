<template>
  <main>
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center w-full pt-16 flex-col">
        <div class="mx-auto max-w-2xl lg:mx-0 flex justify-center items-center w-full flex-col">
          <h2 
            class="text-4xl font-bold text-center tracking-tight uppercase text-white sm:text-6xl animate-fade-in-up">
            Journo
          </h2>
          <p class="mt-6 text-lg leading-8 text-center text-gray-100 animate-fade-in-up animation-delay-200">
            Insight driven articles, opinion pieces, and explainers on medical laboratory science, digital health, research, careers, and global health systems.
          </p>
        </div>
      </div>
    </div>

    <!-- Latest Publication Section -->
    <div class="py-16 sm:py-24">
      <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#27628C] text-center mb-8 sm:mb-12 animate-fade-in-up">
        LATEST PUBLICATION
      </h2>

      <!-- Loading State for Latest Publication -->
      <div v-if="loading" class="relative bg-[#27628C] lg:mt-10 pt-0">
        <div class="relative mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <!-- Image Skeleton -->
            <div class="w-full lg:w-1/2">
              <div class="h-64 sm:h-80 bg-white/20 rounded-lg animate-pulse"></div>
            </div>
            <!-- Content Skeleton -->
            <div class="w-full lg:w-1/2 space-y-4">
              <div class="h-8 bg-white/20 rounded animate-pulse"></div>
              <div class="h-6 bg-white/20 rounded animate-pulse w-3/4"></div>
              <div class="h-4 bg-white/20 rounded animate-pulse"></div>
              <div class="h-4 bg-white/20 rounded animate-pulse w-5/6"></div>
              <div class="h-10 bg-white/20 rounded animate-pulse w-32 mt-6"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest Publication Content -->
      <div v-else-if="latestPublication" class="group relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-blue-900/10 active:scale-[0.99] animate-fade-in-up">
        <div class="flex flex-col lg:flex-row min-h-[450px]">
            <div class="lg:w-[45%] relative bg-gray-50 flex items-center justify-center p-6 sm:p-12">
              <img 
                v-if="latestPublication.images && latestPublication.images.length"
                :src="latestPublication.images[0]" 
                :alt="latestPublication.title"
                class="w-full h-full max-h-[500px] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              >
              <div v-else class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <span class="text-4xl">📄</span>
              </div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="absolute top-8 left-8">
              <div class="bg-gray-900/90 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-xs font-bold tracking-widest shadow-xl">
                LATEST • {{ latestPublication.year }}
              </div>
            </div>
          </div>
          
          <!-- Content Side -->
          <div class="flex-1 p-10 lg:p-16 flex flex-col justify-between space-y-8 bg-white text-left">
            <div class="space-y-6">
              <div class="flex items-center gap-4 text-[#27628C] font-bold text-sm uppercase tracking-widest">
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ formatDate(latestPublication.createdAt) }}
                </span>
                <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <span class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  {{ latestPublication.authors }}
                </span>
              </div>

              <h3 class="text-3xl lg:text-5xl font-black text-gray-900 leading-[1.1] group-hover:text-[#27628C] transition-colors duration-300">
                {{ latestPublication.title }}
              </h3>
              
              <p class="text-gray-600 text-lg leading-relaxed max-w-2xl line-clamp-4">
                {{ truncateText(latestPublication.abstract || '', 250) }}
              </p>
              
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <div class="flex items-center gap-2 bg-blue-50 text-[#27628C] px-4 py-2 rounded-xl text-sm font-bold">
                  <span class="w-2 h-2 bg-[#27628C] rounded-full"></span>
                  {{ latestPublication.journal }}
                </div>
                <div class="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl text-sm font-bold">
                  {{ latestPublication.category }}
                </div>
              </div>
            </div>

            <div class="pt-8 border-t border-gray-100">
              <NuxtLink 
                :to="latestPublication.link || latestPublication.pubLink"
                target="_blank"
                class="group relative inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span class="relative z-10">Read Full Article</span>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- No Latest Publication -->
      <div v-else class="text-center py-16">
        <div class="mx-auto max-w-md">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 class="mt-4 text-lg font-semibold text-gray-900">No Latest Publication</h3>
          <p class="mt-2 text-gray-500">Check back later for our latest publications.</p>
        </div>
      </div>
    </div>

    <!-- More Publications Section -->
    <div class="bg-white py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 uppercase animate-fade-in-up">
            More From JOURNO
          </h2>
          <p class="mt-4 text-lg text-gray-600 animate-fade-in-up animation-delay-200">
            Explore our collection of insightful articles and research publications
          </p>
        </div>

        <!-- Loading State for Publications Grid -->
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div v-for="n in 6" :key="n" class="animate-pulse">
            <div class="aspect-video bg-gray-200 rounded-2xl mb-4"></div>
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
              <div class="h-3 bg-gray-200 rounded"></div>
              <div class="h-3 bg-gray-200 rounded w-5/6"></div>
              <div class="flex items-center gap-2 mt-4">
                <div class="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div class="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="otherPublications.length > 0" 
             class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <article 
            v-for="(publication, index) in otherPublications" 
            :key="publication.id"
            class="group relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <NuxtLink :to="publication.link || publication.pubLink" target="_blank" class="flex flex-col h-full">
              <!-- Thumbnail -->
              <div class="relative bg-slate-50 overflow-hidden aspect-square border-b border-slate-50">
                <img 
                  v-if="publication.images && publication.images.length"
                  :src="publication.images[0]" 
                  :alt="publication.title"
                  class="absolute inset-0 w-full h-full object-contain p-4 drop-shadow-md transition-transform duration-700 group-hover:scale-105"
                >

                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <div class="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm border border-slate-100">
                    {{ publication.category }}
                  </div>
                </div>
              </div>
              
              <!-- Card Content -->
              <div class="p-6 flex-1 flex flex-col justify-between border-x border-b border-slate-100 rounded-b-3xl">
                <div class="space-y-4">
                  <div class="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span class="flex items-center gap-1.5">
                       <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {{ publication.year }}
                    </span>
                    <span class="flex items-center gap-1.5 max-w-[150px] truncate">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      {{ publication.journal }}
                    </span>
                  </div>
                  
                  <h3 class="text-lg font-black text-slate-900 group-hover:text-[#27628C] transition-colors leading-tight line-clamp-2">
                    {{ publication.title }}
                  </h3>
                  
                  <p class="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {{ publication.abstract || '' }}
                  </p>
                </div>

                <!-- Footer -->
                <div class="flex items-center gap-3 pt-6 mt-6 border-t border-slate-50">
                  <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#27628C]">
                     <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-[10px] font-black text-slate-900 truncate uppercase tracking-widest">{{ publication.authors }}</p>
                    <p class="text-[9px] font-bold text-slate-400">{{ formatDate(publication.createdAt || '') }}</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
          <div class="mx-auto max-w-md">
            <svg class="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 class="mt-6 text-xl font-semibold text-gray-900">No Publications Available</h3>
            <p class="mt-2 text-gray-500">We're working on bringing you amazing content. Check back soon!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="relative isolate overflow-hidden bg-[#27628C] py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div class="max-w-xl lg:max-w-lg">
            <h2 class="text-2xl sm:text-4xl font-bold tracking-tight text-center lg:text-left text-white animate-fade-in-up">
              Be the first. Get Journo in your mail.
            </h2>
            <p class="mt-4 text-lg leading-8 text-center lg:text-left text-gray-200 animate-fade-in-up animation-delay-200">
              If you would like to have early access to all articles published on Journo, sign up for our special mailing list for free.
            </p>
          </div>
          <div class="animate-fade-in-up animation-delay-400">
            <iframe 
              src="https://mlcjourno.substack.com/embed" 
              width="100%" 
              height="320"
              style="border:1px solid #EEE; background:white; border-radius: 8px;" 
              frameborder="0" 
              scrolling="no"
              class="max-w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useGetPublications } from "@/composables/modules/publications/useGetPublications"

const { publications, loading } = useGetPublications()

// Filter published publications
const publishedPublications = computed(() => {
  if (!publications.value) return []
  return publications.value.filter(pub => pub.status === 'published')
})

// Get latest publication (most recent)
const latestPublication = computed(() => {
  if (publishedPublications.value.length === 0) return null
  return [...publishedPublications.value].sort((a, b) => {
    const aDate = new Date(a.createdAt || 0).getTime()
    const bDate = new Date(b.createdAt || 0).getTime()
    return bDate - aDate
  })[0]
})

// Get other publications excluding the latest
const otherPublications = computed(() => {
  if (!latestPublication.value) return publishedPublications.value
  const latestId = latestPublication.value.id || (latestPublication.value as any)._id
  return publishedPublications.value.filter(pub => (pub.id || (pub as any)._id) !== latestId)
})

// Utility functions
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
}
</style>