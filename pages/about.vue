<template>
  <main class="relative isolate">
    <!-- Hero Section -->
    <div class="relative pt-24 pb-32 overflow-hidden bg-gray-900">
      <img src="@/assets/img/community.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900"></div>
      
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase animate-fade-in">
            {{ getSectionContent('hero_title', 'Leading Change, Inspiring Action') }}
          </h1>
          <p class="mt-8 text-lg leading-8 text-gray-300 animate-slide-up">
            {{ getSectionContent('hero_description', 'MedLabConvo is more than a platform—it’s a movement dedicated to shaping the future of medical laboratory science and healthcare. We bridge critical gaps and empower individuals across five key dimensions: Knowledge, Mindset, Skills, Network, and Identity.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- The Five Dimensions Section -->
    <div class="py-24 bg-white sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-3xl font-black text-gray-900 sm:text-4xl uppercase tracking-widest">Our Five Dimensions</h2>

          <div class="mt-4 h-1 w-20 bg-[#27628C] mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Knowledge -->
          <div class="group relative flex flex-col items-center p-8 bg-gray-50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27628C] text-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform">
              <img src="@/assets/img/goals1.jpeg" class="h-full w-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Knowledge</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              {{ getSectionContent('knowledge_desc', 'We bridge the gaps in medical laboratory science education by providing cutting-edge resources, comprehensive training, and up-to-date information.') }}
            </p>
          </div>

          <!-- Mindset -->
          <div class="group relative flex flex-col items-center p-8 bg-gray-50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27628C] text-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform">
              <img src="@/assets/img/goals2.jpeg" class="h-full w-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Mindset</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              {{ getSectionContent('mindset_desc', 'Developing a growth mindset is essential for success. Our programs are designed to foster resilience, adaptability, and a proactive approach to challenges.') }}
            </p>
          </div>

          <!-- Skill -->
          <div class="group relative flex flex-col items-center p-8 bg-gray-50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27628C] text-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform">
              <img src="@/assets/img/goals3.jpeg" class="h-full w-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Skill</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              {{ getSectionContent('skill_desc', 'MedLabConvo connects you with industry leaders, peers, and mentors. Our community is your gateway to expanding your professional connections.') }}
            </p>
          </div>

          <!-- Network -->
          <div class="group relative flex flex-col items-center p-8 bg-gray-50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27628C] text-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform">
              <img src="@/assets/img/goals4.jpeg" class="h-full w-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Network</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              Building a strong professional network opens doors to new opportunities and collaborations through events, forums, and networking opportunities.
            </p>
          </div>

          <!-- Identity -->
          <div class="group relative flex flex-col items-center p-8 bg-gray-50 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 lg:col-start-2">
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#27628C] text-white shadow-lg overflow-hidden group-hover:scale-110 transition-transform">
              <img src="@/assets/img/goals5.jpeg" class="h-full w-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Identity</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              Establishing a clear professional identity is key. We provide guidance on personal branding, career development, and leadership.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission & Vision Section -->
    <div class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <!-- Mission -->
          <div class="relative bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#27628C]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
            <div class="flex items-center gap-4 mb-8">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#27628C] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v18M6 3h11l-2 5h6l-2 5h-6l2 5H6V3z" />
                </svg>
              </div>
              <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Mission Statement</h2>
            </div>
            <p class="text-gray-600 text-lg leading-relaxed text-justify">
              To lead positive change in the mindset, attitude, and identity of stakeholders within medical laboratory science, while contributing to transformation across the broader healthcare system; build the capacity of future generations of world-class professionals and inspire action through purposeful engagement.
            </p>
          </div>

          <!-- Vision -->
          <div class="relative bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#27628C]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
            <div class="flex items-center gap-4 mb-8">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#27628C] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5" />
                </svg>
              </div>
              <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tighter">Vision Statement</h2>
            </div>
            <p class="text-gray-600 text-lg leading-relaxed text-justify">
              To become the household name of medical laboratory science in Africa and beyond — known, followed, and trusted by professionals, students, and the public through our media, programs, and impact.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Values Section -->
    <div class="py-24 bg-white sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-black text-gray-900 mb-16 uppercase tracking-widest">Core Values</h2>
        
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(value, index) in coreValues" :key="index" class="p-8 border border-gray-100 rounded-3xl bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-12 h-12 bg-[#27628C] text-white rounded-xl flex items-center justify-center mx-auto mb-6 font-bold text-xl">{{ index + 1 }}</div>
            <h3 class="text-lg font-bold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGetCms } from '@/composables/modules/cms/useGetCms'

const { singleCms, getCmsByKey } = useGetCms()

onMounted(() => {
  getCmsByKey('about_page')
  // Fallback to teams_page if about_page doesn't exist yet, as content was migrated from there
  if (!singleCms.value) getCmsByKey('teams_page')
})

const getSectionContent = (id: string, fallback: string) => {
  if (singleCms.value?.data?.sections) {
    const section = singleCms.value.data.sections.find((s: any) => s.id === id && s.isVisible)
    if (section) return section.content
  }
  return fallback
}

const coreValues = [
  { title: 'Empowerment & Capacity', desc: 'Investing in educating and training students and early-career professionals.' },
  { title: 'Advocacy & Awareness', desc: 'Championing the laboratory profession and public health promotion.' },
  { title: 'Collaboration', desc: 'Building partnerships across countries, institutions, and disciplines.' },
  { title: 'Excellence & Quality', desc: 'Maintaining a standard of world-class professionalism in programming and content.' },
  { title: 'Innovation & Tech-Focus', desc: 'Integrating technology in communications and education (e.g., Labcast, digital editorial).' },
  { title: 'Community & Mentorship', desc: 'Creating supportive networks that bridge early-career individuals and experienced professionals.' }
]
</script>