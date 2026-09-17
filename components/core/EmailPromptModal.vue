<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" @click="handleCancel"></div>
    
    <!-- Modal -->
    <div class="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-8 m-4 transform transition-all">
      <div class="absolute top-4 right-4">
        <button @click="handleCancel" class="text-gray-400 hover:text-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="text-center mb-6">
        <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-[#27628C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900">Email Verification</h3>
        <p class="text-sm text-gray-500 mt-2">Please enter your email to proceed with the purchase.</p>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="mb-6">
          <label for="email" class="block text-xs font-bold text-gray-700 mb-2">Email Address <span class="text-red-500">*</span></label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="you@example.com"
            required
            autofocus
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#27628C] focus:border-transparent transition-all"
          >
        </div>
        
        <div class="flex gap-4">
          <button 
            type="button" 
            @click="handleCancel"
            class="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            :disabled="!isValid"
            class="flex-1 px-4 py-3 rounded-xl bg-[#27628C] text-white font-bold text-sm hover:bg-[#1a425f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'submit', email: string): void
  (e: 'cancel'): void
}>()

const email = ref('')

const isValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    email.value = '' // reset on open
  }
})

const handleSubmit = () => {
  if (isValid.value) {
    emit('submit', email.value)
  }
}

const handleCancel = () => {
  emit('cancel')
}
</script>
