<template>
  <main>
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "></div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center pt-16 w-full">
        <div class="mx-auto max-w-2xl lg:mx-0 flex justify-center items-center w-full flex-col animate-fade-in">
          <h2 class="text-4xl font-black uppercase text-center tracking-tight text-white sm:text-6xl animate-slide-up">
            LabCast
          </h2>
          <p class="mt-6 text-lg leading-8 text-center text-gray-100 animate-slide-up-delay">
            LabCast is the podcast dedicated to exploring the dynamic world of
            medical laboratory science, healthcare innovation, and the stories
            that shape the profession. Whether you're a seasoned professional, a
            student, or someone interested in the impact of medical science,
            LabCast brings you conversations that inspire, inform, and challenge
            the way we think about healthcare.
          </p>
        </div>
      </div>
    </div>

    <!-- Video Section -->
    <div class="container mx-auto py-10">
      <FrameVideo />
    </div>

    <!-- Latest Episode Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-center mb-8">
        <div class="h-px bg-gradient-to-r from-transparent via-[#27628C] to-transparent flex-1"></div>
        <h1 class="text-3xl font-bold text-[#27628C] mx-6 animate-fade-in">Latest Episode</h1>
        <div class="h-px bg-gradient-to-r from-transparent via-[#27628C] to-transparent flex-1"></div>
      </div>
      
      <!-- Loading State for Latest Episode -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <div class="flex flex-col lg:flex-row gap-6">
          <div class="w-full lg:w-80 h-60 bg-gray-200 rounded-xl"></div>
          <div class="flex-1 space-y-4">
            <div class="h-8 bg-gray-200 rounded-lg w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div class="flex gap-2 mt-4">
              <div class="h-10 w-24 bg-gray-200 rounded-full"></div>
              <div class="h-10 w-24 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest Episode Content -->
      <div v-else-if="latestEpisode" class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
        <div class="flex flex-col lg:flex-row gap-6 p-6">
          <div class="relative group">
            <img 
              :src="latestEpisode.thumbnailUrl || latestEpisode.image" 
              :alt="latestEpisode.title" 
              class="w-full lg:w-80 h-60 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 right-4 bg-[#27628C] text-white px-3 py-1 rounded-full text-sm font-medium">
              S{{ latestEpisode.season }}E{{ latestEpisode.episode }}
            </div>
          </div>
          
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 line-clamp-2">
                {{ latestEpisode.title }}
              </h3>
              <p class="text-gray-600 text-sm lg:text-base leading-relaxed mb-4 line-clamp-4">
                {{ latestEpisode.description }}
              </p>
              
              <!-- Episode Details -->
              <div class="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                <div class="flex items-center gap-2">
                  <span>⏱️</span>
                  <span>{{ latestEpisode.duration }} min</span>
                </div>
                <div class="flex items-center gap-2">
                  <span>📅</span>
                  <span>{{ formatDate(latestEpisode.publishedAt) }}</span>
                </div>
              </div>

              <!-- Hosts and Guest -->
              <div class="mb-4">
                <div class="flex flex-wrap gap-2 mb-2">
                  <span class="text-sm font-medium text-gray-700">Hosts:</span>
                  <span class="text-sm text-gray-600">{{ latestEpisode.hosts?.join(', ') || 'N/A' }}</span>
                </div>
                <div v-if="latestEpisode.guest" class="flex flex-wrap gap-2">
                  <span class="text-sm font-medium text-gray-700">Guest:</span>
                  <span class="text-sm text-gray-600">{{ latestEpisode.guest }} ({{ latestEpisode.guestTitle }})</span>
                </div>
              </div>

              <!-- Tags -->
              <div v-if="latestEpisode.tags && latestEpisode.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tag in latestEpisode.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <!-- Platform Links -->
            <div class="mt-4">
              <p class="text-gray-500 text-sm mb-3 font-medium">Listen On:</p>
              <div class="flex flex-wrap gap-3">
                <a 
                  :href="latestEpisode.spotifyUrl"
                  target="_blank"
                  class="inline-flex items-center px-6 py-3 rounded-full bg-[#1DB954] text-white text-sm font-medium hover:bg-[#1ed760] transition-colors duration-200 hover:scale-105 transform"
                >
                  <span class="mr-2">🎵</span>
                  Spotify
                </a>
                <a 
                  :href="latestEpisode.appleUrl"
                  target="_blank"
                  class="inline-flex items-center px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200 hover:scale-105 transform"
                >
                  <span class="mr-2">🍎</span>
                  Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State for Latest Episode -->
      <div v-else class="bg-white rounded-2xl shadow-lg p-12 text-center animate-fade-in">
        <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <span class="text-4xl">🎙️</span>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No Latest Episode</h3>
        <p class="text-gray-600">Check back soon for our newest episode!</p>
      </div>
    </div>

    <!-- All Episodes Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-center mb-8">
        <div class="h-px bg-gradient-to-r from-transparent via-[#27628C] to-transparent flex-1"></div>
        <h1 class="text-3xl font-bold text-[#27628C] mx-6 animate-fade-in">All Episodes</h1>
        <div class="h-px bg-gradient-to-r from-transparent via-[#27628C] to-transparent flex-1"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="i in 8" :key="i" class="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
          <div class="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
          <div class="space-y-3">
            <div class="h-6 bg-gray-200 rounded-lg w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div class="flex gap-2 mt-4">
              <div class="h-8 w-20 bg-gray-200 rounded-full"></div>
              <div class="h-8 w-20 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Episodes Grid -->
      <div v-else-if="episodes.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        <div 
          v-for="(episode, index) in episodes" 
          :key="episode._id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden animate-fade-in-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="relative">
            <img 
              :src="episode.thumbnailUrl || episode.image" 
              :alt="episode.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute top-4 right-4 bg-[#27628C] text-white px-3 py-1 rounded-full text-sm font-medium">
              S{{ episode.season }}E{{ episode.episode }}
            </div>
            <div class="absolute bottom-4 left-4 text-white">
              <div class="flex items-center gap-2 text-sm">
                <span>⏱️</span>
                <span>{{ episode.duration }} min</span>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#27628C] transition-colors">
              {{ episode.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {{ episode.description }}
            </p>
            
            <!-- Episode Meta -->
            <div class="text-xs text-gray-500 mb-3">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-medium">Published:</span>
                <span>{{ formatDate(episode.publishedAt) }}</span>
              </div>
              <div v-if="episode.guest" class="flex items-center gap-2">
                <span class="font-medium">Guest:</span>
                <span class="truncate">{{ episode.guest }}</span>
              </div>
            </div>

            <!-- Tags -->
            <div v-if="episode.tags && episode.tags.length > 0" class="flex flex-wrap gap-1 mb-4">
              <span 
                v-for="tag in episode.tags.slice(0, 2)" 
                :key="tag"
                class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
              >
                {{ tag }}
              </span>
              <span 
                v-if="episode.tags.length > 2"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
              >
                +{{ episode.tags.length - 2 }}
              </span>
            </div>
            
            <!-- Platform Links -->
            <div class="flex gap-2">
              <a 
                :href="episode.spotifyUrl"
                target="_blank"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#1DB954] text-white text-sm font-medium hover:bg-[#1ed760] transition-colors duration-200 hover:scale-105 transform"
              >
                <span class="mr-2">🎵</span>
                Spotify
              </a>
              <a 
                :href="episode.appleUrl"
                target="_blank"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border-2 border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200 hover:scale-105 transform"
              >
                <span class="mr-2">🍎</span>
                Apple
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 animate-fade-in">
        <div class="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <span class="text-6xl">🎙️</span>
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-2">No Episodes Available</h3>
        <p class="text-gray-600 text-lg">We're working on bringing you amazing content. Check back soon!</p>
      </div>

      <!-- View All Button -->
      <div v-if="episodes.length > 0" class="flex justify-center mt-10">
        <a 
          href="https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e"
          target="_blank"
          class="group relative inline-block focus:outline-none focus:ring transform hover:scale-105 transition-transform duration-200"
        >
          <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span class="relative inline-block px-8 py-3 text-sm font-bold text-black bg-white border-2 border-black rounded-lg group-hover:bg-yellow-50">
            View All Episodes on Spotify
          </span>
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useGetLabCasts } from "@/composables/modules/labcast/useGetLabCasts"

const { labcasts, loading } = useGetLabCasts()

// Computed properties for better data handling
const episodes = computed(() => {
  if (!labcasts.value || !Array.isArray(labcasts.value)) return []
  return labcasts.value.filter(episode => episode.isActive)
})

const latestEpisode = computed(() => {
  if (!episodes.value.length) return null
  return episodes.value.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0]
})

// Date formatting function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Animation classes
const animationClasses = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(30px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }
  
  .animate-slide-up-delay {
    animation: slideUp 0.8s ease-out 0.2s both;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out both;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-slide-up-delay {
  animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out both;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions for all hover effects */
.transition-all {
  transition: all 0.3s ease;
}

/* Enhanced card hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Responsive grid improvements */
@media (max-width: 640px) {
  .grid-cols-1 > * {
    max-width: 100%;
  }
}
</style>