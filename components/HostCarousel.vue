<template>
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <h1 class="text-center text-teal-700 text-2xl font-bold py-10">HOSTS</h1>

      <div class="relative w-full h-auto mx-auto max-w-7xl">
        <div class="relative">

          <div
            v-for="(episode, index) in episodes"
            :key="index"
            class="absolute top-0 left-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-10 transition-opacity duration-500 ease-in-out"
            :class="{ 'opacity-100 visible': activeIndex === index, 'opacity-0 invisible': activeIndex !== index }"
          >

            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div class="lg:pr-4">
                <div class="lg:max-w-lg">
                  <p class="text-base font-semibold leading-7 text-indigo-600">{{ episode.tagline }}</p>
                  <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ episode.title }}</h1>
                  <p class="mt-6 text-xl leading-8 text-gray-700">{{ episode.description }}</p>
                </div>
              </div>
            </div>
  
    
            <div class="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                class="max-w-none rounded-xl h-96 w-full object-cover bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                :src="episode.image"
                :alt="episode.title"
              />
            </div>
  

            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div class="lg:pr-4">
                <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p>{{ episode.extraContent }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import host1 from '@/assets/img/lab-host1.jpg';
  import host2 from '@/assets/img/lab-host2.jpg';
  import host3 from '@/assets/img/lab-host3.jpg';
  import host4 from '@/assets/img/lab-host4.jpg';
  import host5 from '@/assets/img/lab-host5.jpg';
  import host6 from '@/assets/img/lab-host6.jpg';
  import { defineComponent, onMounted, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const episodes = ref([
        {
        title: "The Future of Healthcare",
        tagline: "With Dr. Mark Peterson",
        description: "Dr. Mark Peterson is a pioneer in modern healthcare solutions, helping shape the future of medicine with innovative technologies. In this episode, we explore how healthcare is evolving with AI and robotics.",
        image: host1,
        extraContent: "Dr. Mark is known for his research on AI-assisted diagnostics and is a frequent speaker at medical technology conferences worldwide.",
      },
      {
        title: "Breaking Mental Health Stigmas",
        tagline: "With Sarah Johnson",
        description: "Sarah Johnson is a licensed therapist and an advocate for mental health awareness. She focuses on breaking the stigmas around therapy and mental well-being in our society.",
        image: host2,
        extraContent: "Sarah shares her journey and provides practical tips on how we can all take better care of our mental health in daily life.",
      },
      {
        title: "Nutrition for Peak Performance",
        tagline: "With Chef Daniel Lee",
        description: "Chef Daniel Lee is a renowned nutritionist and chef who combines culinary expertise with science to craft diets for athletes and high performers. He shares his secrets to peak performance through nutrition.",
        image: host3,
        extraContent: "Daniel has worked with top athletes around the world, helping them achieve their goals through specialized meal plans and nutritional advice.",
      },
      {
        title: "Digital Marketing Mastery",
        tagline: "With Jenny Roberts",
        description: "Jenny Roberts is a leading digital marketing expert who has transformed brands through her innovative strategies. She talks about how businesses can leverage social media for growth.",
        image: host4,
        extraContent: "Jenny has managed global marketing campaigns for Fortune 500 companies and is passionate about helping small businesses grow their online presence.",
      },
      {
        title: "The Art of Storytelling",
        tagline: "With Mike Thompson",
        description: "Mike Thompson is an award-winning storyteller and filmmaker. He shares insights on how to create compelling narratives that engage audiences across different mediums.",
        image: host5,
        extraContent: "Mike’s work has been featured in international film festivals, and he continues to inspire new generations of storytellers through his workshops and lectures.",
      },
      {
        title: "Financial Freedom Strategies",
        tagline: "With Lisa Graham",
        description: "Lisa Graham is a financial advisor with over 20 years of experience helping people achieve financial independence. In this episode, she talks about the steps to take for long-term financial success.",
        image: host6,
        extraContent: "Lisa has authored several books on personal finance and frequently speaks on how individuals can manage debt, investments, and savings effectively.",
      },
        // Add more episodes as necessary
      ]);
  
      const activeIndex = ref(0);
  
      const startCarousel = () => {
        setInterval(() => {
          activeIndex.value = (activeIndex.value + 1) % episodes.value.length;
        }, 8000); // Slower movement with an 8-second interval
      };
  
      onMounted(() => {
        startCarousel();
      });
  
      return { episodes, activeIndex };
    },
  });
  </script>
  
  <style scoped>
  .opacity-100 {
    opacity: 1;
  }
  .opacity-0 {
    opacity: 0;
  }
  .visible {
    visibility: visible;
  }
  .invisible {
    visibility: hidden;
  }
  .absolute {
    position: absolute;
  }
</style>