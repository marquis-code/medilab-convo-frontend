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
  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p class="mt-4 text-gray-600">Loading form...</p>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error && !form" class="bg-white rounded-lg shadow-md p-8">
        <div class="text-center">
          <svg class="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h3 class="mt-4 text-lg font-medium text-gray-900">Form Not Found</h3>
          <p class="mt-2 text-gray-600">{{ error }}</p>
          <button
            @click="router.push('/')"
            class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>

      <!-- Success State -->
      <div v-else-if="submitted && form" class="bg-white rounded-lg shadow-md p-8">
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg class="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="mt-4 text-2xl font-bold text-gray-900">Thank You!</h3>
          <p class="mt-2 text-gray-600">
            {{ form.successMessage || 'Your response has been submitted successfully.' }}
          </p>
          <div class="mt-8 space-y-3">
            <button
              v-if="!form.redirectUrl"
              @click="submitAnother"
              class="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Another Response
            </button>
            <button
              @click="router.push('/')"
              class="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Go to Home
            </button>
          </div>
          <p v-if="form.redirectUrl" class="mt-4 text-sm text-gray-500">
            Redirecting in a moment...
          </p>
        </div>
      </div>

      <!-- Form State -->
      <div v-else-if="form" class="bg-white rounded-lg shadow-md p-8">
        <img src="@/assets/img/medlab-logo.jpeg" alt="Form Header" class="mb-6 h-20 w-auto rounded-lg" />
        <!-- Form Header -->
        <div class="mb-8">
          <div class="flex items-center gap-2 mb-4">
            <h1 class="text-3xl font-bold text-gray-900">{{ form.title }}</h1>
            <span
              v-if="form.programTitle"
              class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
            >
              {{ form.programTitle }}
            </span>
          </div>
          <p v-if="form.description" class="text-gray-600 text-lg">
            {{ form.description }}
          </p>
          <div
            v-if="form.instructions"
            class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded"
          >
            <p class="text-sm text-blue-900">{{ form.instructions }}</p>
          </div>
        </div>

        <!-- Error Alert -->
        <div v-if="error" class="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-800">{{ error }}</p>
            </div>
          </div>
        </div>

        <!-- Form Renderer -->
        <FormRenderer :form="form" @submit="handleSubmit" />

        <!-- Loading Overlay -->
        <div
          v-if="submitting"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div class="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
            <div class="text-center">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p class="mt-4 text-gray-700 font-medium">Submitting your response...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>