<template>
    <div class="relative">
      <span v-if="displayedText" class="mt-6 text-lg leading-8 text-gray-600">
        {{ displayedText }}
      </span>
      <span class="absolute top-0 text-xl font-bold text-transparent" :style="{ visibility: typing ? 'visible' : 'hidden' }">|</span>
    </div>
  </template>
  
  <script lang="ts">  
  export default {
    name: 'TypewriterText',
    setup() {
      const texts = [
        "Find Available Hospital Beds in Real-Time with CODE-RED! Discover hospitals with open bed spaces effortlessly. Use custom search filters, access ambulance hotlines, and navigate with interactive maps. Stay prepared with first aid tips and expert articles—all in one place.",
        "Navigate with Ease Using Interactive Maps with CODE-RED! Easily locate hospitals, emergency services, and essential facilities. Use our real-time maps for quick access, and get detailed route guidance. Stay informed with first aid tips and expert articles—all in one place.",
        "Get Instant Access to Emergency Hotlines with CODE-RED! Quickly connect to ambulance and emergency services when you need them the most. Customize your search filters, find available hospital beds, and use interactive maps for navigation. Stay prepared with first aid tips and expert articles—all in one place.",
        "Find Available Hospital Beds in Real-Time with CODE-RED! Streamline Your Emergency Response with Custom Search Filters, Ambulance Hotlines, and Interactive Maps. Stay Prepared with First Aid Tips and Expert Articles—All in One Place"
      ];
      const displayedText = ref('');
      const typing = ref(false);
      let index = 0;
      let charIndex = 0;
  
      const typeWriterEffect = () => {
        typing.value = true;
        if (charIndex < texts[index].length) {
          displayedText.value += texts[index].charAt(charIndex);
          charIndex++;
          setTimeout(typeWriterEffect, 100);
        } else {
          setTimeout(() => {
            typing.value = false;
            setTimeout(() => {
              displayedText.value = '';
              charIndex = 0;
              index = (index + 1) % texts.length;
              typeWriterEffect();
            }, 2000);
          }, 1000);
        }
      };
  
      onMounted(() => {
        typeWriterEffect();
      });
  
      return {
        displayedText,
        typing
      };
    }
  };
  </script>
  
  <style scoped>
  .typewriter-text::after {
    content: '|';
    animation: blink 1s step-start infinite;
  }
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  </style>
  