<template>
    <div class="overflow-x-auto py-4 hide-scrollbar">
      <div class="flex space-x-4">
        <VideoCard
          v-for="video in videos"
          :key="video.id"
          :video="video"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import VideoCard from '@/components/VideoCard.vue';
  
  const videos = ref([
    {
      id: 1,
      title: 'CPR in Action | A 3D look inside the body',
      description: 'Learn CPR in 2 minutes',
      thumbnail: 'https://img.youtube.com/vi/DUaxt8OlT3o/hqdefault.jpg',
      duration: '2 MINS',
      url: 'https://www.youtube.com/embed/DUaxt8OlT3o'
    },
    {
      id: 2,
      title: 'How to perform CPR - A Step-by-Step Guide',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/Plse2FOkV4Q/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/Plse2FOkV4Q'
    },
    {
      id: 3,
      title: 'How to use an AED',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/2PJR0JyLPZY/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/2PJR0JyLPZY'
    },
    {
      id: 4,
      title: 'What Happens When You Call 911',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/J3efgWPPp4k/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/J3efgWPPp4k'
    },
    {
      id: 5,
      title: 'How To Teach Kids The Importance Of Calling 911 In An Emergency | TODAY',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/kDAWoA0ikYw/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/kDAWoA0ikYw'
    },
    {
      id: 6,
      title: 'Profiles of Toronto Paramedic Services; Emergency Medical Dispatcher',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/3bQGfR2_Y1A/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/3bQGfR2_Y1A'
    },
    {
      id: 7,
      title: 'Things to know when calling 911 for a paramedic',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/xrqiGElyHrI/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/xrqiGElyHrI'
    },
    {
      id: 8,
      title: 'A brief overview of Toronto Paramedic Services’ Oxygen Cylinder Carrier-Stretcher Mount',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/c11WnCK6MEk/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/c11WnCK6MEk'
    },
    {
      id: 9,
      title: 'Hannah - Emergency Medical Call Taker, Toronto Paramedic Services',
      description: 'What to do for Burns',
      thumbnail: 'https://img.youtube.com/vi/cl0gUckRo4k/hqdefault.jpg',
      duration: '3 MINS',
      url: 'https://www.youtube.com/embed/cl0gUckRo4k'
    },
  ]);
  </script>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
