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
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">LabCast</h2>
                <p class="mt-6 text-lg leading-8 text-gray-100">Labcast is the podcast dedicated to exploring the dynamic world of medical laboratory science, healthcare innovation, and the stories that shape the profession. Whether you're a seasoned professional, a student, or someone interested in the impact of medical science, Labcast brings you conversations that inspire, inform, and challenge the way we think about healthcare.</p>
              </div>
            </div>
          </div>

    <div class="container mx-auto px-4 mt-8">
      <div class="bg-white p-0 rounded-lg shadow-md flex">
        <div class="flex items-center space-x-4 w-full p-6">
          <img :src="episode6" alt="Podcast cover" class="w-32 h-32 rounded-lg" />
          <div class="flex flex-col w-full">
            <div class="font-semibold text-xl">Test Podcast Title</div>
            <div class="text-gray-600">Episode 1</div>
            <div class="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</div>
            <audio controls class="mt-4">
              <source
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>


    <div class="container mx-auto px-4 mt-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="(item, idx) in 4" class="bg-white p-0 shadow-md bg-gray-900">
          <img
            :src="episode2"
            @click="router.push(`/lab-cast/${idx}`)"
            alt="Podcast cover"
            class="w-full h-60 object-cover mb-4 cursor-pointer"
          />
       <div class="px-3 pb-3">
        <div class="font-semibold text-">Podcast Episode 1</div>
          <div class="text-gray-600 text-sm">Description of episode 1...</div>
          <audio controls class="w-full mt-4">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
       </div>
        </div>

        <!-- <div class="bg-white p-0 rounded-lg shadow-md">
          <img
           :src="episode3"
            alt="Podcast cover"
            class="w-full h-40 object-cover rounded-lg mb-4"
          />
          <div class="font-semibold text-lg">Podcast Episode 2</div>
          <div class="text-gray-600">Description of episode 2...</div>
          <audio controls class="w-full mt-4">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div class="bg-white p-0 rounded-lg shadow-md">
          <img
            :src="episode4"
            alt="Podcast cover"
            class="w-full h-40 object-cover rounded-lg mb-4"
          />
          <div class="font-semibold text-lg">Podcast Episode 3</div>
          <div class="text-gray-600">Description of episode 3...</div>
          <audio controls class="w-full mt-4">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div class="bg-white p-0 rounded-lg shadow-md">
          <img
            :src="episode5"
            alt="Podcast cover"
            class="w-full h-40 object-cover rounded-lg mb-4"
          />
          <div class="font-semibold text-lg">Podcast Episode 4</div>
          <div class="text-gray-600">Description of episode 4...</div>
          <audio controls class="w-full mt-4">
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div> -->
      </div>
    </div>

    <div class="bg-white py-16 sm:py-24">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
      <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">Sign up for our news letters</h2>
      <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">.Join 500,000+ people and receive short, powerful insights podcasts from medlab convo.</p>
      <form class="mx-auto mt-10 flex max-w-md gap-x-4">
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6" placeholder="Enter your email">
        <button type="submit" class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
      </form>
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>


<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  <img src="@/assets/img/group-photo.png" alt="" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center">
  
  <!-- Dark background overlay -->
  <div class="absolute inset-0 bg-black opacity-90 -z-10"></div>

  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  
  <!-- Main content -->
  <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
      <p class="mt-8 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">Help us continue to reach millions with content that enlightens the public about Medical Laboratory science..</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Offices worldwide</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">12</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Full-time colleagues</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Hours per week</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">40</dd>
        </div>
        <div class="flex flex-col-reverse gap-1">
          <dt class="text-base/7 text-gray-300">Paid time off</dt>
          <dd class="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

    </main>      
</template> 

<script setup lang="ts">
const router = useRouter()
  import episode2 from '@/assets/img/lab-coast/lab2.png'
  import episode3 from '@/assets/img/lab-coast/lab3.png'
  import episode4 from '@/assets/img/lab-coast/lab4.png'
  import episode5 from '@/assets/img/lab-coast/lab5.png'
  import episode6 from '@/assets/img/lab-coast/lab6.png'
  import episode7 from '@/assets/img/lab-coast/lab7.png'
  import episode8 from '@/assets/img/lab-coast/lab8.png'
  import episode9 from '@/assets/img/lab-coast/lab9.png'
  import episode10 from '@/assets/img/lab-coast/lab10.png'
  import episode11 from '@/assets/img/lab-coast/lab11.jpg'
  import episode12 from '@/assets/img/lab-coast/lab12.jpg'
  import episode13 from '@/assets/img/lab-coast/lab13.jpg'
  import episode14 from '@/assets/img/lab-coast/lab14.png'
  import episode15 from '@/assets/img/lab-coast/lab15.png'
  import episode16 from '@/assets/img/lab-coast/lab16.png'
  import episode17 from '@/assets/img/lab-coast/lab17.png'
  import episode18 from '@/assets/img/lab-coast/lab18.png'
  import episode19 from '@/assets/img/lab-coast/lab19.png'
  import episode20 from '@/assets/img/lab-coast/lab20.png'
  import episode21 from '@/assets/img/lab-coast/lab21.png'
  import episode22 from '@/assets/img/lab-coast/lab22.png'
  import episode23 from '@/assets/img/lab-coast/lab23.png'
  import episode24 from '@/assets/img/lab-coast/lab24.png'
  import episode25 from '@/assets/img/lab-coast/lab25.png'
  import episode26 from '@/assets/img/lab-coast/lab26.png'
  import episode27 from '@/assets/img/lab-coast/lab27.png'
  import episode28 from '@/assets/img/lab-coast/lab28.png'
  import episode29 from '@/assets/img/lab-coast/lab29.png'
  import episode30 from '@/assets/img/lab-coast/lab30.png'
  import episode31 from '@/assets/img/lab-coast/lab31.png'

  </script>
  
  <style scoped>
  /* Adjust the transition speed for smoother scrolling */
  .flex {
    transition: transform 3s ease-in-out;
  }
  </style>