<template>
  <div class="min-h-screen bg-white">
    <!-- Static Header / Hero for Teams -->
    <div class="bg-[#27628C] py-24 md:py-40 px-6 lg:px-8 relative overflow-hidden">
       <!-- Subtle Background Accents -->
       <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
       <div class="absolute -right-20 -top-20 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>

       <div class="mx-auto max-w-7xl relative z-10">
          <div class="max-w-2xl">
             <h1 class="text-4xl md:text-8xl font-bold text-white leading-tight tracking-tighter  mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                Our <span class="text-blue-200">Collective</span> Intelligence
             </h1>
             <p class="text-lg md:text-xl text-blue-50 font-medium leading-relaxed max-w-lg mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                Behind every diagnostic insight is a team of visionaries. Meet the leadership driving clinical excellence and innovation at MedLabConvo.
             </p>
             <div class="h-2 w-24 bg-white/30 rounded-full animate-in fade-in slide-in-from-left-10 duration-1000 delay-500"></div>
          </div>
       </div>
    </div>

    <!-- Leadership Component -->
    <LeadershipSection />

    <!-- Newsletter / Substack Call to Action -->
    <section class="py-24 bg-gray-50 border-t border-gray-100">
       <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="max-w-xl">
             <h2 class="text-3xl font-bold text-gray-900 tracking-tighter ">Join the Conversation</h2>
             <p class="text-gray-500 mt-4 font-medium leading-relaxed">Stay updated with our latest initiatives, research pulses, and community events directly in your inbox.</p>
          </div>
          <NuxtLink to="/convostack" class="px-12 py-5 bg-[#27628C] text-white rounded-2xl font-bold text-[11px] tracking-normal hover:bg-black transition-all shadow-xl active:scale-95">
             Explore the Substack
          </NuxtLink>
       </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import LeadershipSection from '@/components/LeadershipSection.vue'
import { useHead } from '#imports'

useHead({
  title: 'Leadership & Team | MedLabConvo',
  meta: [
    { name: 'description', content: 'Meet the visionary leadership team behind MedLabConvo, driving innovation in medical laboratory science.' }
  ]
})
</script>

<style scoped>
/* Any specific page styling can go here if needed */
</style>
