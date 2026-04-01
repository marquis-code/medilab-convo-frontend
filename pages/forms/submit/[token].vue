<script setup lang="ts">
import type { Form, FormResponse, SubmitFormPayload } from '@/types/form'
import { useSubmitFormByToken } from '@/composables/modules/forms/useSubmitFormByToken'
import { useFetchFormByToken } from '@/composables/modules/forms/useFetchFormByToken'

const route = useRoute()
const router = useRouter()

const { fetchFormByToken: fetchFormByTokenUtil } = useFetchFormByToken()
const { submitForm: submitFormUtil } = useSubmitFormByToken()

const token = computed(() => route.params.token as string)

const form = ref<Form | null>(null)
const loading = ref(true)
const submitting = ref(false)
const submitted = ref(false)
const error = ref<string | null>(null)

// Fetch form on mount
const loadForm = async () => {
  try {
    loading.value = true
    error.value = null
    form.value = await fetchFormByTokenUtil(token.value)
  } catch (err: any) {
    console.error('Error loading form:', err)
    error.value = err.data?.message || 'Failed to load form. The form may not exist or is no longer active.'
  } finally {
    loading.value = false
  }
}

// Handle form submission
const handleSubmit = async (responses: FormResponse[], email?: string) => {
  if (!form.value) return

  try {
    submitting.value = true
    error.value = null

    const payload: SubmitFormPayload = {
      responses,
      submitterEmail: email,
    }

    await submitFormUtil(token.value, payload)
    submitted.value = true

    // Redirect if redirect URL is provided
    if (form.value.redirectUrl) {
      setTimeout(() => {
        window.location.href = form.value!.redirectUrl!
      }, 2000)
    }
  } catch (err: any) {
    console.error('Error submitting form:', err)
    error.value = err.data?.message || 'Failed to submit form. Please try again.'
  } finally {
    submitting.value = false
  }
}

// Reset and submit another response
const submitAnother = () => {
  submitted.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  loadForm()
})

// Set page meta
useHead({
  title: () => form.value ? form.value.title : 'Loading Form...',
  meta: [
    {
      name: 'description',
      content: () => form.value?.description || 'Submit your response',
    },
  ],
})

definePageMeta({
  layout: "empty"
})
</script>

<template>
  <div class="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
     <NavigationBar />
    <div class="max-w-3xl mx-auto">
      
      <!-- Navigation -->
      <NuxtLink to="/programs" class="inline-flex items-center gap-2 text-gray-500 hover:text-[#27628C] transition-colors mb-12 group">
        <Icon name="heroicons:arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span class="text-sm font-medium">Back to directory</span>
      </NuxtLink>

      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <div class="w-12 h-12 border-4 border-gray-100 border-t-[#27628C] rounded-full animate-spin mb-4"></div>
        <p class="text-sm font-bold text-gray-500">Loading form...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error && !form" class="border border-gray-100 rounded-3xl p-12 text-center animate-fade-in">
        <div class="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-6">
          <Icon name="heroicons:exclamation-circle" class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-black text-gray-900 mb-2">Form unavailable</h3>
        <p class="text-gray-500 text-sm mb-8">{{ error }}</p>
        <button
          @click="router.push('/programs')"
          class="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-colors"
        >
          Return to programs
        </button>
      </div>

      <!-- Success State -->
      <div v-else-if="submitted && form" class="border border-gray-100 rounded-[2.5rem] p-12 text-center animate-fade-in">
        <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8">
          <Icon name="heroicons:check-circle" class="w-10 h-10" />
        </div>
        <h3 class="text-2xl font-black text-gray-900 mb-4">Form submitted successfully</h3>
        <p class="text-gray-500 text-base mb-10 leading-relaxed">
          {{ form.successMessage || 'Thank you for your response. Your submission has been received.' }}
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            v-if="!form.redirectUrl"
            @click="submitAnother"
            class="w-full sm:w-auto px-8 py-4 bg-[#27628C] text-white font-bold text-sm rounded-xl hover:bg-[#1e4d6f] transition-colors"
          >
            Submit new response
          </button>
          <button
            @click="router.push('/programs')"
            class="w-full sm:w-auto px-8 py-4 bg-gray-50 text-gray-600 font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors"
          >
            Go to home
          </button>
        </div>

        <div v-if="form.redirectUrl" class="mt-8 text-sm text-gray-400">
          Redirecting you in a moment...
        </div>
      </div>

      <!-- Form Content -->
      <div v-else-if="form" class="space-y-12 animate-fade-in">
        <!-- Header Section -->
        <div class="space-y-8">
          <!-- Full Banner Image -->
          <div v-if="form.bannerImage" class="relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 flex items-center justify-center p-4 aspect-video md:aspect-[21/9]">
            <img 
              :src="form.bannerImage" 
              class="max-w-full max-h-full object-contain" 
              alt="Form Banner"
            />
          </div>

          <!-- Form Info -->
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-3">
              <span class="px-3 py-1 text-[10px] font-bold bg-gray-50 text-gray-500 rounded-full border border-gray-100">
                Registration form
              </span>
              <span v-if="form.programTitle" class="px-3 py-1 text-[10px] font-bold bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                {{ form.programTitle }}
              </span>
            </div>
            
            <h1 class="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{{ form.title }}</h1>
            <p v-if="form.description" class="text-base text-gray-500 leading-relaxed max-w-2xl">
              {{ form.description }}
            </p>

            <div v-if="form.instructions" class="flex gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
              <Icon name="heroicons:information-circle" class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p class="text-sm font-medium text-blue-700 leading-relaxed">{{ form.instructions }}</p>
            </div>
          </div>
        </div>

        <!-- Form Renderer -->
        <div class="pt-8 border-t border-gray-100">
          <FormRenderer :form="form" @submit="handleSubmit" />
        </div>

        <!-- Submission Overlay -->
        <Transition name="fade">
          <div
            v-if="submitting"
            class="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-[100] p-6 text-center"
          >
            <div class="space-y-4">
              <div class="w-12 h-12 border-4 border-gray-100 border-t-[#27628C] rounded-full animate-spin mx-auto"></div>
              <p class="text-sm font-bold text-gray-900">Sending your response...</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes scale-up {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
.animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-bounce-subtle { animation: bounce-subtle 3s ease-in-out infinite; }
.animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-shake { animation: shake 0.4s ease-in-out; }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>