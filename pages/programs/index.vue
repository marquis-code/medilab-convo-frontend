<template>
  <main>
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 sm:py-32">
      <img 
        src="@/assets/img/hero-background.jpeg" 
        alt="" 
        class="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 mix-blend-overlay"
      >
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-10 -right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-10 -left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center w-full flex-col pt-16">
        <div class="mx-auto max-w-4xl lg:mx-0 flex justify-center items-center w-full flex-col">
          <h1 class="text-5xl font-bold text-center tracking-tight text-white uppercase sm:text-7xl bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent animate-fade-in-up">
            Programs
          </h1>
          <p class="mt-6 text-xl leading-8 text-gray-300 text-center max-w-3xl animate-fade-in-up delay-300">
            At MedLabConvo, we are dedicated to empowering and supporting medical laboratory professionals and students through a range of impactful programs. Whether you are looking to enhance your career, connect with mentors, or develop key skills, our initiatives are designed to guide you every step of the way.
          </p>
        </div>
      </div>
    </div>

    <!-- Programs Section -->
    <div class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        
        <!-- Loading State -->
        <div v-if="loading" class="grid lg:grid-cols-2 gap-8 mt-10">
          <div 
            v-for="i in 4" 
            :key="i" 
            class="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
          >
            <div class="h-64 bg-gray-300"></div>
            <div class="p-8 space-y-4">
              <div class="h-4 bg-gray-300 rounded w-3/4"></div>
              <div class="h-4 bg-gray-300 rounded w-1/2"></div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-300 rounded"></div>
                <div class="h-3 bg-gray-300 rounded"></div>
                <div class="h-3 bg-gray-300 rounded w-5/6"></div>
              </div>
              <div class="h-12 bg-gray-300 rounded-lg w-32"></div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div 
          v-else-if="!loading && (!programs || programs.length === 0)" 
          class="text-center py-20 animate-fade-in"
        >
          <div class="mx-auto w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">No Programs Available</h3>
          <p class="text-lg text-gray-600 max-w-md mx-auto">
            We're working on exciting new programs. Check back soon for amazing opportunities to advance your career!
          </p>
        </div>

        <!-- Programs Grid -->
        <div 
          v-else 
          class="grid lg:grid-cols-2 gap-8 mt-10"
        >
          <div 
            v-for="(program, idx) in programs" 
            :key="program._id"
            :class="[
              'group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in-up',
              program.status === 'active' ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
            ]"
            :style="{ animationDelay: `${idx * 200}ms` }"
          >
            <!-- Status Badge -->
            <div 
              v-if="program.status === 'active'"
              class="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce"
            >
              🔥 Active
            </div>

            <!-- Image Section -->
            <div class="relative overflow-hidden">
              <img 
                :src="program.image || program.images?.[0] || '/placeholder-program.jpg'" 
                :alt="program.title"
                class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {{ program.category }}
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-8 space-y-6">
              <!-- Title -->
              <h3 class="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {{ program.title }}
              </h3>

              <!-- Duration -->
              <div class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="font-medium">{{ program.duration }}</span>
              </div>

              <!-- Description -->
              <p class="text-gray-700 leading-relaxed line-clamp-4">
                {{ program.description }}
              </p>

              <!-- Focus Areas -->
              <div v-if="program.focusAreas && program.focusAreas.length > 0" class="space-y-3">
                <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Focus Areas</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="area in program.focusAreas.slice(0, 3)" 
                    :key="area"
                    class="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {{ area }}
                  </span>
                  <span 
                    v-if="program.focusAreas.length > 3"
                    class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    +{{ program.focusAreas.length - 3 }} more
                  </span>
                </div>
              </div>

              <!-- Outcomes Preview -->
              <div v-if="program.outcomes && program.outcomes.length > 0" class="space-y-3">
                <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Key Outcomes</h4>
                <ul class="space-y-2">
                  <li 
                    v-for="outcome in program.outcomes.slice(0, 2)" 
                    :key="outcome"
                    class="flex items-start text-gray-700 text-sm"
                  >
                    <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ outcome }}
                  </li>
                </ul>
              </div>
                
              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  @click="navigateToProgram(program)"
                  class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </button>
                <button 
                  v-if="program.status === 'active'"
                  @click="applyToProgram(program)"
                  class="flex-1 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            </div>

            <!-- Hover Effect Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useGetPrograms } from "@/composables/modules/programs/useGetPrograms"

interface Program {
  _id: string
  title: string
  slug: string
  category: string
  description: string
  duration: string
  focusAreas: string[]
  images: string[]
  outcomes: string[]
  keyResponsibilities: string[]
  image: string
  highlights: Array<{
    title: string
    description: string
    _id: string
  }>
  status: 'active' | 'draft' | 'archived'
  registrationToken: string
  formFields: any[]
  formTitle: string
  formInstructions: string
  applicationsCount: number
  createdAt: string
  updatedAt: string
}

const { programs, loading } = useGetPrograms()
const router = useRouter()

// Navigation methods
const navigateToProgram = (program: Program) => {
  router.push(`/programs/${program.slug}`)
}

const applyToProgram = (program: Program) => {
  router.push(`/programs/${program.slug}/apply`)
}

// SEO Meta
useHead({
  title: 'Programs - MedLabConvo',
  meta: [
    {
      name: 'description',
      content: 'Explore our comprehensive programs designed to empower medical laboratory professionals and students. Join us to enhance your career and develop key skills.'
    }
  ]
})
</script>

<style scoped>
/* Custom animations */
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.delay-300 {
  animation-delay: 300ms;
}

/* Text clamp utility */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Gradient text */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

.text-transparent {
  color: transparent;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #7c3aed, #db2777);
}
</style>