<template>
    <main>
      <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img src="@/assets/img/banner1.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
          <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Resources</h2>
              <p class="mt-6 text-lg leading-8 text-gray-100">Explore our comprehensive collection of resources designed to support your journey in medical laboratory science. Whether you’re seeking scholarship opportunities, job openings, internship placements, educational materials, or access to recorded webinars, our hub provides valuable tools and information to help you succeed in your career. </p>
            </div>
          </div>
        </div>

          <section class="container mx-auto mt-20">
            <!-- <h1 class="text-center text-teal-700 text-2xl font-bold mb-8">Recorded Webinars</h1> -->
            <RecordedWebinars />
          </section>

          <div class="bg-white pb-20">
            <div class="mx-auto container px-6 lg:px-8">
              <div class="mx-auto max-w-2xl lg:max-w-4xl">
                <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                  <article v-for="(item, idx) in programsList"  class="relative isolate flex flex-col gap-8 lg:flex-row">
                    <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-96 lg:shrink-0">
                      <img src="@/assets/img/slot.png" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
                      <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div>
                      <div class="group relative max-w-xl">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            {{item.title}}
                          </a>
                        </h3>
                        <p class="mt-5 text-sm leading-6 text-gray-600">
                          {{ item.firstPart }}
                        </p>
                        <p class="mt-5 text-sm leading-6 text-gray-600">
                          {{ item.secondPart }}
                        </p>
                        <p class="mt-5 text-sm leading-6 text-gray-600">
                          {{ item.thirdPart }}
                        </p>
                      </div>
                     <div class="space-y-3 mt-6 w-full">
                      <div class="w-full">
                        <NuxtLink :to="item.previousEditionUrl" class="py-3 block text-center rounded-md w-full bg-black text-white ">Book Now</NuxtLink>
                      </div>
                      <div class="w-full">
                        <NuxtLink :to="item.registerUrl" class="py-3 block text-center rounded-md w-full bg-black text-white ">Terms and Conditions Apply</NuxtLink>
                      </div>
                     </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
    </main>
  </template>

  <script setup lang="ts">
const programsList = ref([
  {
    title: 'RENT OUR SPACE',
    img: '',
    firstPart: `Looking for a reliable and professional virtual meeting space? At MedLabConvo, we offer our Google Meet platform for rent, providing you with a high-quality, secure, and seamless solution for hosting your virtual events. `,
    secondPart: `Whether you’re conducting workshops, conferences, webinars, or meetings, our platform is equipped to handle your needs efficiently. `,
    previousEditionUrl: '#',
    registerUrl: '#'
  }
])
</script>