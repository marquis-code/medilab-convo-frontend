<template>
  <main>
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center pt-16 w-full">
        <div class="mx-auto max-w-2xl lg:mx-0 flex justify-center items-center w-full flex-col animate-fade-in">
          <h2 class="text-4xl font-black uppercase text-center tracking-tight text-white sm:text-6xl animate-slide-up">
            LabCast
          </h2>
          <p class="mt-6 text-lg leading-8 text-center text-gray-100 animate-slide-up-delay">
            LabCast is the podcast dedicated to exploring the dynamic world of medical laboratory science...
          </p>
        </div>
      </div>
    </div>

        <!-- Latest Episode Section -->
        <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-center mb-8">
        <div class="h-px bg-gradient-to-r from-transparent via-[#27628C] to-transparent flex-1"></div>
        <h1 class="text-3xl font-bold text-[#27628C] mx-6 animate-fade-in">Latest Episode</h1>
        <div class="h-px bg-gradient-to-r from-transparent via-[#27628C] to-transparent flex-1"></div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
        <!-- Loading content -->
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
            </div>

            <!-- Platform Links -->
            <div class="mt-4">
              <p class="text-gray-500 text-sm mb-3 font-medium">Listen On:</p>
              <div class="flex flex-wrap gap-3">
                <a 
                  :href="latestEpisode.spotifyUrl"
                  target="_blank"
                  class="inline-flex tex-xs px-4 py-2 items-center rounded-full bg-[#1DB954] text-white text-sm font-medium hover:bg-[#1ed760] transition-colors duration-200 hover:scale-105 transform"
                >
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm31.07-46.26a8,8,0,0,1-10.81,3.33,42.79,42.79,0,0,0-40.52,0,8,8,0,0,1-7.48-14.14,59.33,59.33,0,0,1,55.48,0A8,8,0,0,1,159.07,169.74Zm32-56a8,8,0,0,1-10.83,3.29,110.62,110.62,0,0,0-104.46,0,8,8,0,0,1-7.54-14.12,126.67,126.67,0,0,1,119.54,0A8,8,0,0,1,191.06,113.76Zm-16,28a8,8,0,0,1-10.82,3.3,77,77,0,0,0-72.48,0,8,8,0,0,1-7.52-14.12,93,93,0,0,1,87.52,0A8,8,0,0,1,175.06,141.76Z"></path></svg>
                  <!-- <span class="mr-2">🎵</span>
                  Spotify -->
                  Spotify
                </a>
                <a 
                  :href="latestEpisode.appleUrl"
                  target="_blank"
                  class="inline-flex tex-xs px-4 py-2 items-center rounded-full bg-white border-[0.5px] border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200 hover:scale-105 transform"
                >
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.2,72.2,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127.06,127.06,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,0,10,0A55.44,55.44,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.82,105.82,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z"></path></svg>
                  <!-- <span class="mr-2">🍎</span>
                  Apple Podcasts -->
                  Apple Podcasts
                </a>
                <a 
                  :href="latestEpisode.youtubeUrl || defaultYoutubeUrl"
                  target="_blank"
                  class="inline-flex tex-xs px-4 py-2 items-center rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-500 transition-colors duration-200 hover:scale-105 transform"
                >
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path></svg>
                  <!-- <span class="mr-2">📺</span>
                  YouTube -->
                  YouTube
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
    
    <!-- Video Section -->
    <div class="container mx-auto py-10">
      <!-- <FrameVideo /> -->
      <LabCastVideo/>
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
        <!-- Loading Cards -->
      </div>

      <!-- Episodes Grid -->
      <div v-else-if="episodes.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <!-- <span class="mr-2">🎵</span> -->
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm31.07-46.26a8,8,0,0,1-10.81,3.33,42.79,42.79,0,0,0-40.52,0,8,8,0,0,1-7.48-14.14,59.33,59.33,0,0,1,55.48,0A8,8,0,0,1,159.07,169.74Zm32-56a8,8,0,0,1-10.83,3.29,110.62,110.62,0,0,0-104.46,0,8,8,0,0,1-7.54-14.12,126.67,126.67,0,0,1,119.54,0A8,8,0,0,1,191.06,113.76Zm-16,28a8,8,0,0,1-10.82,3.3,77,77,0,0,0-72.48,0,8,8,0,0,1-7.52-14.12,93,93,0,0,1,87.52,0A8,8,0,0,1,175.06,141.76Z"></path></svg>
                Spotify
              </a>
              <a 
                :href="episode.appleUrl"
                target="_blank"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border-[0.5px] border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200 hover:scale-105 transform"
              >
                <!-- <span class="mr-2">🍎</span> -->
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.2,72.2,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127.06,127.06,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,0,10,0A55.44,55.44,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.82,105.82,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z"></path></svg>
                Apple
              </a>
              <a 
                v-if="episode?.youtubeUrl"
                :href="episode?.youtubeUrl"
                target="_blank"
                class="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full bg-white border-2 border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 hover:shadow-md transition-all duration-200 hover:scale-105 transform"
              >
              <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path></svg>
                Youtube
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
  </main>
</template>

<script setup lang="ts">
import { useGetLabCasts } from "@/composables/modules/labcast/useGetLabCasts"
import LabCastVideo from '~/components/LabCastVideo.vue'


const { labcasts, loading } = useGetLabCasts()

// Default fallback YouTube URL
const defaultYoutubeUrl = "https://www.youtube.com/channel/UCQBppaTTQ6TyyCHA2XCxvBQ"

// Computed properties for better data handling
const episodes = computed(() => {
  if (!labcasts.value || !Array.isArray(labcasts.value)) return []
  return labcasts.value.sort((a, b) => a.position - b.position).filter(episode => episode.isActive)
})

const latestEpisode = computed(() => {
  if (!episodes.value.length) return null
  return episodes.value[0]
})

// Date formatting function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Add your custom animations and styles */
</style>
