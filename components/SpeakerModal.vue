<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="isVisible" class="fixed inset-0 z-[100] flex items-center justify-center p-6" @click.self="closeModal">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-md" @click="closeModal"></div>

      <!-- Modal Content -->
      <div class="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white/20 animate-in zoom-in-95 duration-300">
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-full transition-all active:scale-95"
        >
          <Icon name="lucide:x" class="w-6 h-6" />
        </button>

        <div class="flex flex-col md:flex-row h-full max-h-[85vh]">
          <!-- Left Side: Avatar -->
          <div class="md:w-1/3 bg-slate-50 flex flex-col items-center justify-start pt-16 px-8 border-r border-slate-100">
            <div class="relative w-40 h-40 group">
              <div class="absolute inset-0 bg-[#27628C] rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img 
                :src="speaker.image || '/images/speaker-placeholder.jpg'" 
                class="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
            
            <div class="mt-8 text-center">
              <h3 class="text-xs font-black text-[#27628C] uppercase tracking-[0.3em] mb-2">Faculty Expert</h3>
              <div class="w-10 h-1 bg-[#DE6129] mx-auto rounded-full"></div>
            </div>
          </div>

          <!-- Right Side: Content -->
          <div class="md:w-2/3 p-10 md:p-16 overflow-y-auto custom-scrollbar">
            <h2 class="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-8">
              {{ speaker.name }}
            </h2>
            
            <div class="prose prose-slate prose-sm text-gray-600 leading-relaxed font-bold">
              <p v-for="(paragraph, idx) in formattedBio" :key="idx" class="mb-6">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  speaker: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const formattedBio = computed(() => {
  if (!props.speaker?.bio) return []
  return props.speaker.bio.split('\n').filter((p: string) => p.trim() !== '')
})

function closeModal() {
  emit('close')
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #cbd5e1;
}
</style>
  