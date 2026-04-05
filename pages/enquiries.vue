<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Standardized -->
    <div class="bg-[#27628C] py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden text-center">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div class="mx-auto max-w-7xl relative z-10">
           <div class="max-w-2xl mx-auto">
              <h1 class="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tighter  mb-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                 Enquiries
              </h1>
              <p class="text-lg text-blue-50 font-medium leading-relaxed max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                 Connect with our team for professional requests, product access, or partnership opportunities.
              </p>
           </div>
        </div>
    </div>

    <!-- Enquiry Form Section -->
    <EnquirySection :prefill="productName" />

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import EnquirySection from '@/components/EnquirySection.vue'
import { useHead } from '#imports'

const route = useRoute()
const productName = computed(() => route.query.product as string || '')

useHead({
  title: 'Enquiries | MedLabConvo',
  meta: [
    { name: 'description', content: 'Submit your professional enquiries and product requests.' }
  ]
})
</script>
