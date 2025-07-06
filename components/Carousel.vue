 <template>
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-5000 ease-linear"
        :style="{ transform: `translateX(-${activeIndex * 100 / visibleItems}%)` }"
      >
        <div
          v-for="(episode, index) in episodes"
          :key="index"
          class="w-1/5 flex justify-center p-2"
        >
          <div class="bg-white rounded shadow-lg p-4 w-72">
            <img :src="episode.image" alt="Episode image" class="w-full h-96 object-cover rounded" />
            <h3 class="text-center mt-4">{{ episode.title }}</h3>
            <button class="bg-teal-600 w-full text-white font-medium rounded-md px-8 py-3 mt-6 hover:bg-teal-700">
              Listen
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
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


  import { defineComponent, onMounted, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const episodes = ref([
        { title: "Episode 1", image: episode31  },
        { title: "Episode 2", image: episode2  },
        { title: "Episode 3", image: episode3  },
        { title: "Episode 4", image: episode4  },
        { title: "Episode 5", image: episode5  },
        { title: "Episode 6", image: episode6  },
        { title: "Episode 7", image: episode7  },
        { title: "Episode 8", image: episode8  },
        { title: "Episode 9", image: episode9  },
        { title: "Episode 10", image: episode10  },
        { title: "Episode 11", image: episode11  },
        { title: "Episode 12", image: episode12  },
        { title: "Episode 13", image: episode13  },
        { title: "Episode 14", image: episode14  },
        { title: "Episode 15", image: episode15  },
        { title: "Episode 16", image: episode16  },
        { title: "Episode 17", image: episode17  },
        { title: "Episode 18", image: episode18  },
        { title: "Episode 19", image: episode19  },
        { title: "Episode 20", image: episode20  },
        { title: "Episode 21", image: episode21  },
        { title: "Episode 22", image: episode22  },
        { title: "Episode 23", image: episode23  },
        { title: "Episode 24", image: episode24  },
        { title: "Episode 25", image: episode25  },
        { title: "Episode 26", image: episode26  },
        { title: "Episode 27", image: episode27  },
        { title: "Episode 28", image: episode28  },
        { title: "Episode 29", image: episode29  },
        { title: "Episode 30", image: episode30  }
        // Add more episodes as necessary
      ]);
  
      const activeIndex = ref(0);
      const visibleItems = 5;
  
      const startCarousel = () => {
        setInterval(() => {
          // Move to the next group, then reset if at the end
          activeIndex.value = (activeIndex.value + 1) % Math.ceil(episodes.value.length / visibleItems);
        }, 5000); // Slow down the transition to move every 5 seconds
      };
  
      onMounted(() => {
        startCarousel();
      });
  
      return { episodes, activeIndex, visibleItems };
    },
  });
  </script>
  
  <style scoped>
  /* Adjust the transition speed for smoother scrolling */
  .flex {
    transition: transform 3s ease-in-out;
  }
  </style>