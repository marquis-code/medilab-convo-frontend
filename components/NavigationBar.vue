<template>
    <header class="absolute inset-x-0 top-0 z-50 bg-black text-white">
        <nav class="flex items-center justify-between px-6 lg:p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-16 w-auto" src="@/assets/img/medlab-logo.jpeg" alt="">
            </NuxtLink>
          </div>
          <div class="flex lg:hidden">
            <button @click="isOpen = true" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <NuxtLink to="/journo" class="text-sm font-semibold leading-6 text-white">Journo</NuxtLink>
            <NuxtLink to="/lab-cast" class="text-sm font-semibold leading-6 text-white">LabCast</NuxtLink>
            <NuxtLink to="/programs" class="text-sm font-semibold leading-6 text-white">Programs</NuxtLink>
            <NuxtLink to="/community" class="text-sm font-semibold leading-6 text-white">Community</NuxtLink>
            <NuxtLink to="/products" class="text-sm font-semibold leading-6 text-white">Products</NuxtLink>
            <!-- <NuxtLink to="/teams" class="text-sm font-semibold leading-6 text-white">About</NuxtLink> -->
            <NuxtLink to="/resources" class="text-sm font-semibold leading-6 text-white">Resources</NuxtLink>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <NuxtLink to="/teams" href="#" class="text-sm font-semibold leading-6 text-white">About <span aria-hidden="true">&rarr;</span></NuxtLink>
          </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div v-if="isOpen" class="lg:hidden" role="dialog" aria-modal="true">
          <!-- Background backdrop, show/hide based on slide-over state. -->
          <div class="fixed inset-0 z-50"></div>
          <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-10 w-auto" src="@/assets/img/medlab-logo.jpeg" alt="">
              </a>
              <button @click="isOpen = false" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/25">
                <div class="space-y-2 py-6">
                  <NuxtLink @click="isOpen = false" to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Home</NuxtLink>
                  <NuxtLink @click="isOpen = false" to="/journo" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Journo</NuxtLink>
                  <NuxtLink @click="isOpen = false" to="/lab-cast" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">LabCast</NuxtLink>
                  <NuxtLink @click="isOpen = false" to="/programs" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Programs</NuxtLink>
                  <NuxtLink @click="isOpen = false" to="/community" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Community</NuxtLink>
                  <NuxtLink @click="isOpen = false" to="/products" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Products</NuxtLink>
                  <!-- <NuxtLink @click="isOpen = false" to="/teams" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">About</NuxtLink> -->
                  <NuxtLink @click="isOpen = false" to="/resources" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Resources</NuxtLink>
                </div>
                <div class="py-6">
                  <NuxtLink @click="isOpen = false" to="/teams" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">About</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>