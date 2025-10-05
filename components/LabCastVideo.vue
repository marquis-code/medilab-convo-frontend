<template>
  <div class="flex flex-col lg:flex-row w-full h-auto">
    <div class="flex-1 bg-gray-800 rounded-lg m-3 lg:m-0 order-2 lg:order-1">
      <div class="aspect-video w-full">
        <iframe class="w-full h-full rounded-lg shadow-2xl"
          src="https://www.youtube.com/embed/Yymui21-DOo?loop=1&playlist=Yymui21-DOo&autoplay=1&mute=1&rel=0"
          title="Looping YouTube Video" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
    </div>

    <div class="flex-1 bg-white p-6 flex flex-col justify-center order-1 lg:order-2">
      <h1 data-aos="fade-up" class="text-3xl uppercase font-bold text-[#27628C] mb-4">
        Meet the Voices Behind
        <span data-aos="fade-up" class="">LabCast</span>
      </h1>
      <p data-aos="fade-up" class="text-md text-lg text-gray-700 mb-4">
        At LabCast, our hosts bring passion, insight, and expertise to every conversation, guiding you through the
        dynamic world of medical laboratory science. Each episode, they share stories, explore innovations, and discuss
        the challenges and opportunities that shape the profession. Dedicated to informing, inspiring, and connecting
        our community, our hosts ensure LabCast remains your go-to podcast for professional growth and thought-provoking
        dialogue.
      </p>
    </div>
  </div>
</template>


<!-- <script setup lang="ts">
  defineProps<{
    videoId: string
    title?: string
  }>()
  </script> -->

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}
</style>