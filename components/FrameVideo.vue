
 <script lang="ts" setup>
const videoUrl = '/hosts.mp4';
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full h-1/2">
    <!-- Video Section -->
    <div class="flex-1 bg-gray-800 rounded-lg m-3 lg:m-0 order-2 lg:order-1">
      <video data-aos="fade-up"
        :src="videoUrl"
        class="w-full h-full object-cover rounded-lg"
        autoplay
        muted
        loop
        controls
      >
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Content Section -->
    <div class="flex-1 bg-white p-6 flex flex-col justify-center order-1 lg:order-2">
      <h1 data-aos="fade-up" class="text-3xl uppercase font-bold text-[#27628C] mb-4">
        Meet the Voices Behind
        <span data-aos="fade-up" class="">LabCast</span>
      </h1>
      <p data-aos="fade-up" class="text-md text-lg text-gray-700 mb-4">
        At LabCast, our hosts bring passion, insight, and expertise to every conversation, guiding you through the dynamic world of medical laboratory science. Each episode, they share stories, explore innovations, and discuss the challenges and opportunities that shape the profession. Dedicated to informing, inspiring, and connecting our community, our hosts ensure LabCast remains your go-to podcast for professional growth and thought-provoking dialogue.
      </p>
      <!-- <ul class="list-disc text-lg list-inside text-gray-600 mb-4">
        <li>New episodes every Monday and Thursday</li>
        <li>Available on Spotify, Apple Podcasts, and Google Podcasts</li>
        <li>Featuring insights from industry leaders</li>
      </ul> -->
      <!-- <div>
        <a href="" class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700">
          Listen Now
        </a>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles, if necessary */
</style>
