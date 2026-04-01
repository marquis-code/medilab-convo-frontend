<template>
  <main class="min-h-screen bg-white">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-[50vh]">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27628C]"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <div class="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Program Not Found</h2>
      <p class="text-gray-600 mb-8">{{ error }}</p>
      <NuxtLink to="/programs" class="bg-[#27628C] text-white px-8 py-3 rounded-xl hover:bg-opacity-90 transition-all">
        Back to Programs
      </NuxtLink>
    </div>

    <!-- Main Content -->
    <div v-else-if="program" class="min-h-screen bg-white pt-16 pb-32">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        
        <!-- Breadcrumbs / Back -->
        <NuxtLink to="/programs" class="inline-flex items-center gap-2 text-gray-500 hover:text-[#27628C] transition-colors mb-12 group">
          <Icon name="heroicons:arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span class="text-sm font-medium">Back to directory</span>
        </NuxtLink>

        <!-- Hero: Image & Header -->
        <div class="space-y-12 mb-20 animate-fade-in">
          <!-- Full Image Box -->
          <div class="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center p-4 md:p-8 aspect-video md:aspect-[21/9]">
            <img 
              class="max-w-full max-h-full object-contain" 
              :src="program.image || (program.images && program.images[0]) || '/placeholder-program.jpg'" 
              :alt="program.title"
            >
          </div>

          <!-- Title & Category Info -->
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3 py-1 text-[11px] font-bold bg-[#27628C]/5 text-[#27628C] rounded-full border border-[#27628C]/10">
                {{ program.category }}
              </span>
              <span v-if="program.duration" class="px-3 py-1 text-[11px] font-bold bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100 flex items-center gap-1.5">
                <Icon name="heroicons:calendar" class="w-3.5 h-3.5" />
                {{ program.duration }}
              </span>
            </div>

            <h1 class="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              {{ program.title }}
            </h1>

            <div class="prose prose-slate max-w-none text-gray-600 leading-relaxed text-base md:text-lg" v-html="formattedDescription"></div>

            <!-- Main CTA -->
            <div v-if="program.status === 'active'" class="pt-6">
                <!-- Registration Links Logic -->
                <template v-if="program.externalFormLink">
                  <a 
                    :href="program.externalFormLink" 
                    target="_blank" 
                    class="inline-flex items-center justify-center bg-[#27628C] text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-[#1e4d6f] transition-all"
                  >
                    Register Now
                    <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2" />
                  </a>
                </template>
                <template v-else-if="program.form?.accessToken">
                  <NuxtLink 
                    :to="`/forms/submit/${program.form.accessToken}`"
                    class="inline-flex items-center justify-center bg-[#27628C] text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-[#1e4d6f] transition-all"
                  >
                    Join Program
                    <Icon name="heroicons:sparkles" class="w-4 h-4 ml-2" />
                  </NuxtLink>
                </template>
                <template v-else-if="program.formFields?.length">
                  <NuxtLink 
                    :to="`/programs/${program.slug}/apply`"
                    class="inline-flex items-center justify-center bg-[#27628C] text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-[#1e4d6f] transition-all"
                  >
                    Join Program
                    <Icon name="heroicons:pencil-square" class="w-4 h-4 ml-2" />
                  </NuxtLink>
                </template>
            </div>
          </div>
        </div>

        <!-- Details Sections (Orderly Pattern) -->
        <div class="space-y-24">
          <!-- Focus & Participation -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-100 pt-16">
            <!-- Focus Areas -->
            <div v-if="program.focusAreas?.length" class="space-y-6">
              <h3 class="text-sm font-black text-gray-900 border-l-4 border-[#27628C] pl-4 uppercase tracking-widest">
                Primary Focus
              </h3>
              <ul class="space-y-3">
                <li v-for="area in program.focusAreas" :key="area" class="flex items-start gap-3">
                  <div class="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></div>
                  <span class="text-sm font-medium text-gray-600">{{ area }}</span>
                </li>
              </ul>
            </div>

            <!-- Participation (Key Responsibilities) -->
            <div v-if="program.keyResponsibilities?.length" class="space-y-6">
              <h3 class="text-sm font-black text-gray-900 border-l-4 border-indigo-400 pl-4 uppercase tracking-widest">
                Participation details
              </h3>
              <ul class="space-y-4">
                <li v-for="resp in program.keyResponsibilities" :key="resp" class="flex items-start gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                  <Icon name="heroicons:star" class="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <p class="text-sm font-medium text-gray-600 leading-relaxed">{{ resp }}</p>
                </li>
              </ul>
            </div>
          </div>

          <!-- Outcomes (Impact) -->
          <div v-if="program.outcomes?.length" class="space-y-12 border-t border-gray-100 pt-16 animate-fade-in">
            <div class="space-y-2">
              <h3 class="text-sm font-black text-[#27628C] uppercase tracking-[0.3em]">The Impact</h3>
              <h2 class="text-3xl font-black text-gray-900 tracking-tight">Program Outcomes</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                v-for="(outcome, i) in program.outcomes" 
                :key="outcome" 
                class="flex items-start gap-5 p-6 rounded-3xl border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div class="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {{ i + 1 }}
                </div>
                <p class="text-sm font-bold text-gray-600 leading-relaxed">{{ outcome }}</p>
              </div>
            </div>
          </div>

          <!-- Highlights (Deep Dive) -->
          <div v-if="program.highlights?.length" class="space-y-12 border-t border-gray-100 pt-16 animate-fade-in">
            <div class="space-y-2 text-center md:text-left">
              <h3 class="text-sm font-black text-indigo-500 uppercase tracking-[0.3em]">Deep Dive</h3>
              <h2 class="text-3xl font-black text-gray-900 tracking-tight">Program highlights</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                v-for="(highlight, i) in program.highlights" 
                :key="i"
                class="p-8 rounded-3xl border border-gray-100 bg-white hover:border-[#27628C]/20 transition-all group"
              >
                <div class="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-[#27628C]/5 group-hover:text-[#27628C] mb-6 transition-all">
                  <Icon name="heroicons:light-bulb" class="w-6 h-6" />
                </div>
                <h4 class="text-base font-black text-gray-900 mb-3 tracking-tight">{{ highlight.title }}</h4>
                <p class="text-sm text-gray-500 leading-relaxed font-medium">{{ highlight.description }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useGetProgram } from '@/composables/modules/programs/useGetProgram'
import { useRoute } from 'vue-router'

const route = useRoute()
const { loading, error, program, getProgram } = useGetProgram()

// Fetch program data on mount
onMounted(() => {
  const idOrSlug = route.params.id as string
  getProgram(idOrSlug)
})

// Format multiline description with line breaks and emoji support
const formattedDescription = computed(() => {
  if (!program.value?.description) return ''
  return program.value.description
    .split('\n\n')
    .map(p => `<p class="mb-4">${p.replace(/\n/g, '<br>')}</p>`)
    .join('')
    .replace(/🔬/g, '<span class="text-2xl mr-2">🔬</span>')
    .replace(/🚀/g, '<span class="animate-pulse inline-block">🚀</span>')
    .replace(/🥼/g, '<span class="mr-2">🥼</span>')
})

// SEO Meta
useHead({
  title: computed(() => program.value ? `${program.value.title} - MedLabConvo` : 'Program Details - MedLabConvo'),
  meta: [
    {
      name: 'description',
      content: computed(() => program.value?.description?.substring(0, 160) || 'Explore this program at MedLabConvo.')
    }
  ]
})
</script>

<style scoped>
.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }

:deep(.prose) {
  color: #4b5563;
  max-width: none;
}

:deep(.prose h1), :deep(.prose h2), :deep(.prose h3) {
  color: #111827;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.025em;
}
</style>
