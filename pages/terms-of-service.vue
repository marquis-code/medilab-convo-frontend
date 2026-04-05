<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Standard -->
    <div class="bg-[#27628C] py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div class="mx-auto max-w-7xl relative z-10">
           <div class="max-w-2xl">
              <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter  mb-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                 Terms of Service
              </h1>
              <p class="text-lg text-blue-100 font-medium leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                 The rules of the conversation. Our professional standards and community guidelines.
              </p>
           </div>
        </div>
    </div>

    <!-- Content -->
    <main class="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      <div class="max-w-3xl">
        <div class="prose prose-lg sm:prose-xl prose-slate max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 
          prose-p:text-gray-500 prose-p:leading-8 prose-p:font-medium
          prose-strong:text-gray-900 prose-a:text-[#27628C] prose-a:no-underline hover:prose-a:underline
          prose-li:text-gray-500 prose-li:font-medium">
          
          <p class="text-sm font-bold text-[#27628C]/60 mb-16 tracking-normal">Last Updated: April 5, 2026</p>
  
          <section class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">1. Acceptance of Terms</h2>
            <p>By accessing or using the MedLabConvo platform, including the ConvoStack and our community resources, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>
  
          <section class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">2. Community Conduct</h2>
            <p>MedLabConvo is a professional platform for medical laboratory science and health innovation. We maintain a zero-tolerance policy for:</p>
            <ul class="space-y-4">
              <li>Harassment or hate speech of any kind.</li>
              <li>Promotion of clinically unverified medical advice.</li>
              <li>Unauthorized commercial solicitation within community threads.</li>
              <li>Impersonating other healthcare professionals or entities.</li>
            </ul>
          </section>
  
          <section class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">3. Content Ownership</h2>
            <p>While you retain ownership of the comments and insights you share, by posting on MedLabConvo, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content across our platforms for educational and promotional purposes.</p>
          </section>
  
          <section class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">4. Disclaimer</h2>
            <p>The information provided on MedLabConvo, including insights from the ConvoStack, is for educational and informational purposes only. It does not constitute medical advice or a substitute for professional clinical judgment.</p>
          </section>
  
          <section class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">5. Limitation of Liability</h2>
            <p>MedLabConvo and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform or the information provided therein.</p>
          </section>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Terms of Service | MedLabConvo',
  meta: [
    { name: 'description', content: 'Professional standards and community guidelines for MedLabConvo.' }
  ]
})
</script>
