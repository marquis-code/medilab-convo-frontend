<!-- <template>
  <div class="bg-gray-900">
    <div class="relative isolate overflow-hidden pt-14 h-screen">
      <transition name="fade" mode="out-in">
        <img :src="currentImage" :key="currentImage" alt=""
          class="absolute inset-0 w-full h-full object-cover object-top z-0" />
      </transition>
      
      <div class="absolute inset-0 bg-black bg-opacity-70 z-1"></div>

      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"> 
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next podcast <a href="#" class="font-semibold text-white"><span
                  class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div class="text-center">
  
              <p class="mt-8 text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">A podcast about the Medical Laboratory Science profession</p>
            <p class="mt-8 text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">New Episodes Every Monday +
              Thursday</p>
    
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </div>
  </template>
  
  
  <script setup lang="ts">
    import episode1 from '@/assets/img/post-card1.jpeg'
  import episode2 from '@/assets/img/post-card2.jpeg'
  import episode3 from '@/assets/img/post-card3.jpeg'
  import episode4 from'@/assets/img/post-card4.jpeg'
    import episode5 from'@/assets/img/post-card5.jpeg'
  import { ref, onMounted } from 'vue';
  
  // Dynamic images array
  const images = [
    {
      image: episode1,
      name: ''
    },
    {
     image:  episode2,
     name: ''
    }, 
    {
      image: episode3,
      name: ''
    }, 
    {
      image: episode4,
      name: ''
    },
    {
      image: episode5,
      name: ''
    }
  ];
  
  const currentImage = ref(images[0]);
  
  // Change image at intervals
  onMounted(() => {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % images.length;
      currentImage.value = images[index];
    }, 4000); // Change every 4 seconds
  });
  </script>
  
  <style scoped>
  /* Fade Transition Styles */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
   -->

   <!-- <template>
    <div class="bg-gray-900">
      <div class="relative isolate overflow-hidden pt-14 h-screen">

        <transition name="fade" mode="out-in">
        <img :src="currentImage.image" :key="currentImage.image" alt=""
          class="absolute inset-0 object-cover object-top z-0" />
      </transition>

        
        <div class="absolute inset-0 bg-black bg-opacity-70 z-1"></div>
  
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
  
        <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"> 
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next podcast <a href="#" class="font-semibold text-white"><span
                    class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div class="text-center">
              <p class="mt-8 text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">A podcast about the Medical Laboratory Science profession</p>
                <p class="text-center text-white mt-4">{{ currentImage.name }}</p>
            </div>
          </div>
        </div>
  
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </div>
    </div>
  </template> -->

  <template>
    <div class="bg-gray-900">
      <div class="relative isolate overflow-hidden pt-14 h-screen">
        <transition name="fade" mode="out-in">
          <!-- Update the image class to have full width and fixed max-height -->
          <img :src="currentImage.image" :key="currentImage.image" alt=""
            class="absolute inset-0 w-full object-contain object-center z-0 w-full max-h-[80vh]" />
        </transition>
  
        <div class="absolute inset-0 bg-black bg-opacity-70 z-1"></div>
  
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
  
        <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"> 
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
  
            <div class="text-center">
              <!-- <p class="mt-8 text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">A podcast about the Medical Laboratory Science profession</p> -->
             <div class="flex justify-center items-center">
              <p class="text-center text-white mt-4 absolute -bottom-20">{{ currentImage.name }}</p>
             </div>
            </div>
          </div>
        </div>
  
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import episode1 from '@/assets/img/post-card1.jpeg'
  import episode2 from '@/assets/img/post-card2.jpeg'
  import episode3 from '@/assets/img/post-card3.jpeg'
  import episode4 from'@/assets/img/post-card4.jpeg'
  import episode5 from'@/assets/img/post-card5.jpeg'
  import { ref, onMounted } from 'vue';
  
  // Dynamic images array with names
  const images = [
    {
      image: episode1,
      name: 'Iheoma'
    },
    {
      image: episode2,
      name: 'Jesutomisin'
    },
    {
      image: episode3,
      name: 'Samuel'
    },
    {
      image: episode4,
      name: 'Better'
    },
    {
      image: episode5,
      name: 'Oluwadamilola'
    }
  ];
  
  const currentImage = ref(images[0]);
  
  // Change image at intervals
  onMounted(() => {
    let index = 0;
    setInterval(() => {
      index = (index + 1) % images.length;
      currentImage.value = images[index]; // Set the entire object
    }, 4000); // Change every 4 seconds
  });
  </script>
  
  <style scoped>
  /* Fade Transition Styles */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  