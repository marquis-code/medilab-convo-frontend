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
            Journo is the go-to platform for insightful stories, expert perspectives, and in-depth analysis on all things related to medical
            laboratory science and healthcare. Whether you're a student, a professional, or just passionate about
            healthcare, Journo delivers content that informs, educates, and sparks conversation within the medical
            community.
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
      <div v-else-if="latestPublication" class="relative bg-[#27628C] lg:mt-10 pt-0 animate-fade-in-up">
        <div class="relative mx-auto max-w-7xl py-16 sm:py-24 px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <!-- Image -->
            <div class="w-full lg:w-1/2">
              <div class="relative group overflow-hidden rounded-lg">
                <img 
                  :src="latestPublication.images[0]" 
                  :alt="latestPublication.title"
                  class="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="w-full lg:w-1/2 text-center lg:text-left">
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4 sm:mb-6">
                {{ latestPublication.title }}
              </h3>
              <p class="text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
                {{ truncateText(latestPublication.abstract, 200) }}
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <div class="flex items-center gap-2 text-white/80">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">{{ latestPublication.authors }}</span>
                </div>
                <div class="flex items-center gap-2 text-white/80">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm">{{ latestPublication.year }}</span>
                </div>
              </div>
              <NuxtLink 
                :to="latestPublication.link || latestPublication.pubLink"
                target="_blank"
                class="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Read Full Article
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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

        <!-- Publications Grid -->
        <div v-else-if="otherPublications.length > 0" 
             class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <article 
            v-for="(publication, index) in otherPublications" 
            :key="publication._id"
            class="group cursor-pointer animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <NuxtLink :to="publication.link || publication.pubLink" target="_blank" class="block">
              <div class="relative overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 group-hover:shadow-xl">
                <img 
                  :src="publication.images[0]" 
                  :alt="publication.title"
                  class="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900">
                    {{ publication.category }}
                  </span>
                </div>
                <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </div>
              
              <div class="mt-6">
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{{ publication.journal }}</span>
                  <span>•</span>
                  <span>{{ publication.year }}</span>
                </div>
                
                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-[#27628C] transition-colors duration-300 leading-tight">
                  {{ publication.title }}
                </h3>
                
                <p class="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {{ publication.abstract }}
                </p>
                
                <div class="mt-6 flex items-center gap-3">
                  <img src="@/assets/icons/avatar.svg" alt="" class="h-8 w-8 rounded-full bg-gray-100">
                  <div>
                    <p class="text-sm font-medium text-gray-900">{{ publication.authors }}</p>
                    <p class="text-xs text-gray-500">{{ formatDate(publication.createdAt) }}</p>
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
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-center lg:text-left text-white sm:text-4xl animate-fade-in-up">
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
  return publishedPublications.value.reduce((latest, current) => {
    const latestDate = new Date(latest.createdAt)
    const currentDate = new Date(current.createdAt)
    return currentDate > latestDate ? current : latest
  })
})

// Get other publications excluding the latest
const otherPublications = computed(() => {
  if (!latestPublication.value) return publishedPublications.value
  return publishedPublications.value.filter(pub => pub._id !== latestPublication.value._id)
})

// Utility functions
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const formatDate = (dateString: string): string => {
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
}
</style>