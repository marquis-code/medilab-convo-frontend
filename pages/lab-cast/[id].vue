<template>
    <ProfileCard />
    <div class="container lg:max-w-4xl mx-auto p-4">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0">
          <img
            :src="podcast.imageUrl"
            alt="Podcast Cover"
            class="rounded-lg w-full max-w-xs md:max-w-sm"
          />
        </div>
        <div class="flex flex-col items-start">
          <h1 class="text-3xl font-bold text-gray-800">{{ podcast.title }}</h1>
          <p class="text-sm text-gray-600 mt-2">{{ podcast.publisher }}</p>
          <p class="mt-4 text-base text-gray-700">{{ podcast.description }}</p>
        </div>
      </div>
      <div class="mt-8">
        <audio controls class="w-full rounded-lg">
          <source :src="podcast.audioUrl" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    <PodcastDetails />
  </template>
  
  <script setup lang="ts">
    import episode2 from '@/assets/img/lab-coast/lab2.png'
  import { ref } from 'vue';
  
  // Define a ref for the podcast data (using mock data for testing purposes)
  const podcast = ref({
    title: 'The Best Podcast Ever',
    imageUrl: episode2,
    description: 'This is an amazing podcast about technology, design, and life.',
    publisher: 'TechLife Media',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  });
  
  // You can replace the above mock data with actual data fetching logic if required
  // Example of using `useFetch` to get podcast data from an API
  /*
  const podcastId = useRoute().params.id;
  const { data: podcastData, error } = await useFetch(`/api/podcasts/${podcastId}`);
  if (podcastData.value) {
    podcast.value = podcastData.value;
  }
  */
  </script>
  
  <style scoped>
  /* You can add custom styles if needed */
  </style>
  