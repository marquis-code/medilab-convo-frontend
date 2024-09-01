<template>
    <div class="relative isolate overflow-hidden bg-white">
        <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
          <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
        </div>
        <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <!-- <div class="flex mt-24 sm:mt-32 lg:mt-16">
              <div class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span class="font-semibold text-indigo-600">We’re hiring</span>
                <span class="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
                <a href="#" class="flex items-center gap-x-1">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  See open positions
                  <svg class="-mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div> -->
            <img src="@/assets/img/mobile-application.png" alt="App screenshot" width="2432" height="1542" class="w-[76rem] mt-16 lg:mt-0 lg:hidden">
            <h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Need help locating bed spaces?</h1>
            <TypewriterText class="max-w-lg" />
            <div class="mt-10 flex items-center gap-x-6">
              <a href="#search" class="rounded-xl bg-[#CC1100] px-3.5 py-2.5 text-sm  font-semibold text-white shadow-sm hover:bg-[#CC1100] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC1100]">FIND A BED-SPACE NOW!</a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
              <img src="@/assets/img/mobile-application.png" alt="App screenshot" width="2432" height="1442" class="w-[76rem] pr-56 hidden lg:block">
        </div>
      </div>
</template>
