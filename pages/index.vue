<template>
  <main>
    <div class="relative isolate overflow-hidden bg-gradient-to-br from-[#27628C] via-[#1e4d6b] to-[#27628C]">
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-br from-[#27628C]/90 via-[#1e4d6b]/90 to-[#27628C]/90"></div>
        <img src="@/assets/img/hero-background.jpeg" alt=""
          class="absolute inset-0 w-full h-full object-cover opacity-20">
      </div>

      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-40 -left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse">
        </div>
        <div
          class="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000">
        </div>
      </div>

      <div class="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 animate-fade-in">
            <span class="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              MedLabConvo
            </span>
          </h1>
          <p class="text-2xl sm:text-3xl lg:text-4xl text-blue-100 italic font-light mb-8 animate-fade-in-delay">
            Lead, Build, Inspire
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a href="#programs"
              class="bg-white text-[#27628C] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Programs
            </a>
            <a href="#about"
              class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#27628C] transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Statement Video Section -->
     <VideoHero />
     <!-- <HeroVideo /> -->
     <!-- <div class="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl  lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight">
          <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
            Transforming Healthcare
          </span>
          <br>
          <span class="text-gray-700">One Lab Professional at a Time</span>
        </h2>
        <p class="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          We are leading change, inspiring action, and building the capacity of future generations of world-class
          professionals in medical laboratory science and in the healthcare system at large.
        </p>
        <div class="relative rounded-3xl overflow-hidden shadow-2xl group">
          <iframe src="/intro-video.mp4" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-96 sm:h-[500px] lg:h-[600px] transition-transform duration-300 group-hover:scale-105"></iframe>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
        </div>
      </div>
    </div> -->

    <!-- {{ programs }} -->

    <!-- Programs Section -->
    <section id="programs" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl  font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
              Upcoming Programs
            </span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div v-if="loading" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27628C]"></div>
        </div>

        <div v-if="programs.length > 0" v-for="(program, idx) in programs" :key="idx" class="group">
          <div v-if="program._id === '6868f7da037e8926971c5802'"
            class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="md:flex">
              <div class="md:w-1/2 relative overflow-hidden">
                <img :src="program.image || '/api/placeholder/600/400'" alt=""
                  class="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700">
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
                <div
                  class="absolute top-4 right-4 bg-[#27628C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Latest
                </div>
              </div>
              <div class="md:w-1/2 p-8 flex flex-col justify-center">
                <h3
                  class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
                  {{ program?.title || 'Program Title' }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ program?.description || 'Program description' }}
                </p>
                <div class="flex flex-wrap gap-3">
                  <a :href="'/programs/' + program.slug"
                    class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                    <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- <div v-for="(program, idx) in programs" :key="idx" v-if="programs?.length > 0" class="group">
  <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
    <div class="relative overflow-hidden">
      <img :src="program.image || '/api/placeholder/600/400'" alt="" class="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute top-4 right-4 bg-[#27628C] text-white px-4 py-2 rounded-full text-sm font-semibold">
        Latest
      </div>
    </div>
    <div class="p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
        {{ program?.title || 'Program Title' }}
      </h3>
      <p class="text-gray-600 mb-6 leading-relaxed">
        {{ program?.description || 'Program description' }}
      </p>
      <div class="flex flex-wrap gap-3">
        <a
          :href="'/programs/' + program.slug"
          class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Learn More
          <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
      </div> -->


        <!-- <div v-else-if="programs.length > 0" class="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(program, idx) in programs.filter(ep => ep._id === 6868f7da037e8926971c57f4)" :key="idx" class="group">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div class="relative overflow-hidden">
            <img :src="program.image || '/api/placeholder/600/400'" alt="" class="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 right-4 bg-[#27628C] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Latest
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
              {{ program?.title || 'Program Title' }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ program?.description || 'Program description' }}
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                :href="'/programs/' + program.slug"
                class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div> -->


        <!-- <div v-else-if="programs.length > 0" class="grid gap-8 md:gap-12">
        <div v-for="(program, idx) in programs" :key="idx" class="group">
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="relative overflow-hidden">
              <img :src="program.image" alt="" class="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-4 right-4 bg-[#27628C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Latest
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
                {{ program?.title || 'Program Title' }}
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ program?.desc || 'Program description' }}
              </p>
              <NuxtLink 
                :to="'/programs/forging-a-career-path'" 
                class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div> -->

        <div v-else class="text-center py-20">
          <div
            class="bg-gradient-to-r from-[#27628C] to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
              </path>
            </svg>
          </div>
          <p class="text-xl text-gray-600">No upcoming programs at the moment. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- LabCast Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl  font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
              Latest on LabCast
            </span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div v-if="loadingLabcasts" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27628C]"></div>
        </div>


        <div v-else-if="labcasts?.length > 0" class="grid gap-8 md:gap-12">
          <div v-for="(episode, idx) in labcasts.filter(ep => ep.position === 1)" :key="idx" class="group">
            <div
              class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="md:flex">
                <div class="md:w-1/2 relative overflow-hidden">
                  <img :src="episode.image || episode.thumbnailUrl || '/api/placeholder/600/400'" alt=""
                    class="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700">
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                <div class="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3
                    class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
                    {{ episode?.title || 'Episode Title' }}
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                    {{ episode?.description || 'Episode description' }}
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <a :href="episode.spotifyUrl || 'https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e'"
                      class="inline-flex items-center px-6 py-3 rounded-full bg-[#1DB954] text-white font-semibold hover:bg-[#1ed760] transition-all duration-300 transform hover:-translate-y-1">
                      <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      Spotify
                    </a>
                    <a :href="episode.appleUrl || 'https://podcasts.apple.com/podcast/id1234567890'"
                      class="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
                      <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                      </svg>
                      Apple
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div v-else-if="labcasts?.length > 0" class="grid gap-8 md:gap-12">
        <div v-for="(episode, idx) in labcasts.slice(0, 3)" :key="idx" class="group">
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="md:flex">
              <div class="md:w-1/2 relative overflow-hidden">
                <img :src="episode.image || '/api/placeholder/600/400'" alt="" class="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
                  {{ episode?.title || 'Episode Title' }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                  {{ episode?.description || episode?.desc || 'Episode description' }}
                </p>
                <div class="flex flex-wrap gap-3">
                  <a
                    :href="episode.spotifyUrl || 'https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e'"
                    class="inline-flex items-center px-6 py-3 rounded-full bg-[#1DB954] text-white font-semibold hover:bg-[#1ed760] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </a>
                  <a
                    :href="episode.appleUrl || 'https://podcasts.apple.com/podcast/id1234567890'"
                    class="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                    </svg>
                    Apple
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

        <div v-else class="text-center py-20">
          <div
            class="bg-gradient-to-r from-[#27628C] to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z">
              </path>
            </svg>
          </div>
          <p class="text-xl text-gray-600">No episodes available at the moment. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- Publications/Journo Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl  font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
              Latest on Journo
            </span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div v-if="loadingPublications" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27628C]"></div>
        </div>


        <div v-else-if="publications?.length > 0" class="grid gap-8 md:gap-12">
          <div v-for="(publication, idx) in publications.filter(pub => pub.position === 1)" :key="idx" class="group">
            <div
              class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="md:flex">
                <div class="md:w-1/2 relative overflow-hidden">
                  <img :src="publication.images?.[0] || '/api/placeholder/800/500'" alt=""
                    class="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700">
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                  <div
                    class="absolute top-4 right-4 bg-[#27628C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Latest
                  </div>
                </div>
                <div class="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3
                    class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
                    {{ publication?.title || 'Publication Title' }}
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                    {{ publication?.abstract || 'Publication description' }}
                  </p>
                  <a :href="publication.link || publication.pubLink || 'https://mlcjourno.substack.com/'"
                    class="inline-flex items-center justify-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Read More
                    <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div v-else-if="publications?.length > 0" class="grid gap-8 md:gap-12">
        <div v-for="(publication, idx) in publications.slice(0, 3)" :key="idx" class="group">
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="relative overflow-hidden">
              <img :src="publication.image || publication.featured_image || '/api/placeholder/800/500'" alt="" class="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-4 right-4 bg-[#27628C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Latest
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
                {{ publication?.title || 'Publication Title' }}
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                {{ publication?.excerpt || publication?.description || publication?.content?.substring(0, 200) || 'Publication description' }}
              </p>
              <a 
                :href="publication.url || 'https://mlcjourno.substack.com/'" 
                class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Read More
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> -->

        <!-- <div v-else-if="publications?.length > 0" class="grid gap-8 md:gap-12">
        <div v-for="(publication, idx) in publications.filter(pub => pub.position === 1)" :key="idx" class="group">
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="relative overflow-hidden">
              <img :src="publication.images?.[0] || '/api/placeholder/800/500'" alt="" class="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-4 right-4 bg-[#27628C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Latest
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors duration-300">
                {{ publication?.title || 'Publication Title' }}
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                {{ publication?.abstract || 'Publication description' }}
              </p>
              <a 
                :href="publication.link || publication.pubLink || 'https://mlcjourno.substack.com/'" 
                class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Read More
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div> -->

        <div v-else class="text-center py-20">
          <div
            class="bg-gradient-to-r from-[#27628C] to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
              </path>
            </svg>
          </div>
          <p class="text-xl text-gray-600">No publications available at the moment. Check back soon!</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-sm font-semibold tracking-wider text-[#27628C] uppercase mb-4">Testimonials</h2>
          <p class="text-3xl  font-bold text-gray-900 mb-4">
            We have impacted thousands of <span
              class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">amazing people</span>
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, idx) in testimonials" :key="idx" class="group">
            <div
              class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              <div class="flex items-center mb-6">
                <img class="h-12 w-12 rounded-full object-cover" src="@/assets/img/avatar.jpeg" alt="">
                <div class="ml-4">
                  <div class="font-bold text-gray-900">{{ testimonial.name }}</div>
                  <div class="text-sm text-gray-500">MLS Professional</div>
                </div>
              </div>
              <blockquote class="text-gray-700 leading-relaxed">
                "{{ testimonial.testimonial }}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Donation CTA -->
    <section class="py-20 bg-gradient-to-r from-[#27628C] to-blue-600">
      <div class="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h2 class="text-3xl  font-bold text-white mb-6">
          Help Us Continue Our Mission
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          Ensure we don't stop doing what we do. Make a donation to support our cause.
        </p>
        <router-link to="/donate"
          class="inline-flex items-center bg-white text-[#27628C] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Donate Now
          <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
            </path>
          </svg>
        </router-link>
      </div>
    </section>

    <!-- Partnerships -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Our Partnerships</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <img class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src="@/assets/img/partner1.jpeg" alt="Partner 1">
            <img class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src="@/assets/img/partner2.jpeg" alt="Partner 2">
            <img class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src="@/assets/img/partner3.jpeg" alt="Partner 3">
            <img class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src="@/assets/img/partner4.jpeg" alt="Partner 4">
            <img class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src="@/assets/img/partner5.jpeg" alt="Partner 5">
            <img class="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src="@/assets/img/partner6.jpeg" alt="Partner 6">
          </div>
          <a href="mailto:admin@medlabconvo.com?subject=Partnership%20Enquiry"
            class="inline-flex items-center bg-[#27628C] text-white mt-16 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-30 hover:text-[#27628C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            aria-label="Email us to partner">
            Partner With Us
            <span class="ml-2 flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <svg class="w-4 h-4 text-[#27628C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <div class="bg-gray-100 py-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-[#27628C] pb-6">STAY IN THE KNOW</h2>
        <a href="https://forms.gle/pg4UR6XQvZRLqK2NA" class="mt-4 bg-[#27628C] text-white px-6 py-3 rounded-lg"
          aria-label="Subscribe to our newsletter">
          Subscribe to our newsletter
        </a>
        <div class="mt-8 text-gray-800">
          <p class="font-semibold">Let's Talk Med Lab</p>
          <div class="flex justify-center space-x-4 mt-4">
            <a href="https://x.com/medlabconvo" class="text-gray-500 hover:text-black" aria-label="X">
              <img src="@/assets/img/logo1.png" class="fab fa-x-twitter h60 w-6" />
            </a>
            <a href="https://www.instagram.com/medlabconvo/" class="text-gray-500 hover:text-pink-500"
              aria-label="Instagram">
              <img src="@/assets/img/logo4.svg" class="fab fa-instagram h-6 w-6" />
            </a>
            <a href="https://web.facebook.com/medlabconvo?_rdc=1&_rdr" class="text-gray-500 hover:text-blue-600"
              aria-label="Facebook">
              <img src="@/assets/img/logo3.svg" class="fab fa-facebook h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/medlabconvo/" class="text-gray-500 hover:text-blue-500"
              aria-label="LinkedIn">
              <img src="@/assets/img/logo5.svg" class="fab fa-linkedin h-6 w-6" />
            </a>
            <a href="https://mlcjourno.substack.com/" class="text-gray-500 hover:text-orange-400" aria-label="Substack">
              <img src="@/assets/img/substack.png" class="fab fa-medium h-6 w-6" />
            </a>
            <a href="https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e" class="text-gray-500 hover:text-green-500"
              aria-label="Spotify">
              <img src="@/assets/img/logo2.png" class="fab fa-spotify h-6 w-6" />
            </a>
          </div>
          <div class="w-full flex justify-center items-center flex-col pt-10">
            <p class="mt-8 px-6 lg:px-0 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">MedLabConvo is a
              trademark of LabiHealth Ambassadors Initiative, a registered non-profit organization,
            </p>
            <p class="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">©️ LabiHealth Ambassadors Initiative 2025. All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <AnniversaryPopup /> -->
  </main>
</template>

<script setup lang="ts">
// import AnniversaryPopup from "@/components/AnniversaryPopup.vue";
import { useYoutubeVideo } from '@/composables/useYoutubeVideo';
import labcast from '@/assets/img/latest-labcast.jpg'
const isOpen = ref(false)
import convo from "@/assets/img/forging-a-career-path.jpg"
import { useGetPrograms } from "@/composables/modules/programs/useGetPrograms"
import latestJourno from '@/assets/img/journals-dust.jpg'
import { useGetPublications } from "@/composables/modules/publications/useGetPublications"
import { useGetLabCasts } from "@/composables/modules/labcast/useGetLabCasts"

const { labcasts, loading: loadingLabcasts } = useGetLabCasts()
const { publications, loading: loadingPublications } = useGetPublications()
const { programs, loading: fetchingPrograms} = useGetPrograms()
 const journosList = ref([
 {
    title: 'FORGING A CAREER PATH 4.0',
    image: convo,
    desc: `The FACP program aims to expand the career horizons of young professionals and students in medical laboratory science by showcasing diverse opportunities beyond traditional clinical roles. In response to the evollving healthcare landscape. the program highlights various career paths within and outside the medical laboratory field, encouraging participants to explore their potential.`,
    secondPart: `Through interactive workshops, mentorship sessions, and networking events, the FACP program fosters an environment that promotes innovative thinking and professional development. Participants are inspired to consider careers in research, healthcare technology, public health, education, and industry innovation, ultimately redefining what success looks like in medical laboratory science. By transforming challenges into opportunities, the program seeks to empower individuals to forge their unique paths in this dynamic field.`,
    previousEditionUrl: '#',
    status: 'latest',
    registerUrl: '#'
  },
 ])

const { videoUrl } = useYoutubeVideo('rhVkU6HAbn0'); // Example video ID
console.log(videoUrl.value); // should log "https://www.youtube.com/embed/rhVkU6HAbn0"

const testimonials = ref([
  {
    name: 'Daniel Adekunle',
    testimonial: `MedLabConvo has been a game-changer for me. From knowledge gained through webinars to career mentorship, MedLabConvo has helped me grow professionally and personally. I now feel more confident about my future in medical laboratory science.`
  },
  {
    name: 'Mabel Omoniwa',
    testimonial: `MedLabConvo gave me clarity about my career path. The mentorship and resources have transformed the way I approach learning and professional growth. I now feel equipped to excel in the health ecosystem.`
  },
  {
    name: 'Shedrack Etuk',
    testimonial: `MedLabConvo has redefined professional development in medical laboratory science. The discussions, networking, and mentorship opportunities have enriched my career.`
  },
  {
    name: 'Paul Odeh',
    testimonial: `MedLabConvo fosters collaboration among medical lab scientists worldwide. It’s a great place to connect, learn, and contribute to the advancement of our profession.`
  },
  {
    name: 'Dolapo Moses',
    testimonial: `MedLabConvo organized an excellent and quintessential masterclass on scholarships, which was totally free. They shared quality and useful information with. I am sincerely challenged and encouraged to keep it up and not to give up. Thank you so much!`
  },
  {
    name: 'Jude Emeka',
    testimonial: `Honestly, the experience was eye-opening. I'm grateful to the organizers and the presenters for the amazing work they've done, and I look forward to other such programs from MedLabConvo.`
  }
])
</script>

<style scoped>
.youtube-video {
  max-width: 800px;
  margin: 0 auto;
}
</style>
