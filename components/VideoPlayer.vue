<template>
    <div class="video-container w-full h-auto">
      <div ref="videoDiv" class="relative w-full h-auto"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
  const videoDiv = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    if (videoDiv.value) {
      const video = document.createElement('video');
      video.src = '/hosts.mp4'; // Replace with your video file path
      video.autoplay = true;
      video.loop = true;
      video.muted = true; // Optionally mute the video
      video.controls = false;
      video.className = 'w-full h-auto rounded-md shadow-md'; // Tailwind CSS classes for styling
      videoDiv.value.appendChild(video);
    }
  });
  </script>
  
  <style scoped>
  .video-container {
    max-width: 5000px; /* Set a max width for your container */
    margin: 0 auto; /* Center the container */
  }
  </style>
  