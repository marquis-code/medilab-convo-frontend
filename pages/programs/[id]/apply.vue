<template>
  <main class="min-h-screen bg-gray-50 py-12 md:py-20">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <!-- Back Link -->
      <NuxtLink 
        :to="`/programs/${route.params.id}`" 
        class="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#27628C] mb-8 transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Program Details
      </NuxtLink>

      <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <!-- Progress Header -->
        <div class="bg-[#27628C] p-8 text-white">
          <h1 class="text-2xl font-black uppercase mb-4">{{ program?.formTitle || 'Registration Form' }}</h1>
          <p class="text-blue-100 leading-relaxed text-sm lg:text-base">
            {{ program?.formInstructions || 'Please fill in the details below to complete your registration.' }}
          </p>
        </div>

        <div class="p-8 lg:p-12">
          <!-- Loading State -->
          <div v-if="loadingProgram" class="flex flex-col items-center justify-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27628C] mb-4"></div>
            <p class="text-gray-900 font-medium">Loading form context...</p>
          </div>

          <!-- Success State -->
          <div v-else-if="success" class="text-center py-16 animate-fade-in">
            <div class="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-black text-gray-900 mb-4">Registration Successful!</h2>
            <p class="text-lg text-gray-600 mb-10 max-w-md mx-auto">
              Your application for <span class="font-bold text-[#27628C]">{{ program?.title }}</span> has been submitted successfully. 
              We'll reach out to you via email soon.
            </p>
            <NuxtLink 
              to="/programs" 
              class="inline-flex items-center justify-center bg-[#27628C] text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              Explore Other Programs
            </NuxtLink>
            
            <div v-if="hasWhatsappLink" class="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p class="text-sm font-bold text-[#27628C] mb-3 uppercase tracking-wider">Final Step: Join Our Community</p>
              <a 
                href="https://chat.whatsapp.com/GnxsIILq4TbFTQ3W8WxbWQ?mode=gi_t" 
                target="_blank"
                class="inline-flex items-center text-green-600 font-bold hover:underline"
              >
                Join Official WhatsApp Group
                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.385-4.438 9.881-9.882 9.881" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Form Rendering -->
          <form v-else @submit.prevent="handleSubmit" class="space-y-8 animate-slide-up">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div 
                v-for="field in program?.formFields" 
                :key="field.id"
                :class="field.type === 'textarea' || field.id === 'expectations' ? 'md:col-span-2' : ''"
                class="space-y-2"
              >
                <label :for="field.id" class="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  {{ field.label }}
                  <span v-if="field.required" class="text-red-500">*</span>
                </label>

                <!-- Help Text -->
                <p v-if="field.description" class="text-sm text-gray-900 mb-2">{{ field.description }}</p>

                <!-- Input Switching -->
                <template v-if="field.type === 'textarea'">
                  <textarea
                    v-model="formData[field.id]"
                    :id="field.id"
                    :placeholder="field.placeholder"
                    :required="field.required"
                    rows="4"
                    class="block w-full rounded-xl border-gray-200 shadow-sm focus:border-[#27628C] focus:ring-[#27628C] transition-colors p-4"
                  ></textarea>
                </template>

                <template v-else-if="field.type === 'select'">
                  <select
                    v-model="formData[field.id]"
                    :id="field.id"
                    :required="field.required"
                    class="block w-full h-14 rounded-xl border-gray-200 shadow-sm focus:border-[#27628C] focus:ring-[#27628C] transition-colors px-4"
                  >
                    <option value="" disabled>-- Select Option --</option>
                    <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
                  </select>
                </template>

                <template v-else-if="field.type === 'radio'">
                  <div class="flex flex-wrap gap-4 mt-2">
                    <label 
                      v-for="opt in field.options" 
                      :key="opt"
                      class="flex items-center px-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent cursor-pointer transition-all hover:bg-gray-100"
                      :class="formData[field.id] === opt ? 'border-[#27628C] bg-blue-50 ring-1 ring-[#27628C]' : ''"
                    >
                      <input
                        type="radio"
                        v-model="formData[field.id]"
                        :name="field.id"
                        :value="opt"
                        :required="field.required"
                        class="hidden"
                      />
                      <span class="text-sm font-bold" :class="formData[field.id] === opt ? 'text-[#27628C]' : 'text-gray-600'">
                        {{ opt }}
                      </span>
                    </label>
                  </div>
                </template>

                <template v-else>
                  <input
                    :type="field.type === 'email' ? 'email' : 'text'"
                    v-model="formData[field.id]"
                    :id="field.id"
                    :placeholder="field.placeholder"
                    :required="field.required"
                    class="block w-full h-14 rounded-xl border-gray-200 shadow-sm focus:border-[#27628C] focus:ring-[#27628C] transition-colors px-4"
                  />
                </template>
              </div>
            </div>

            <!-- Error Feedback -->
            <div v-if="submitError" class="p-4 bg-red-50 rounded-xl border border-red-100 animate-pulse">
              <p class="text-sm text-red-600 font-bold flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Submission Failed: {{ submitError }}
              </p>
            </div>

            <!-- Submit Button -->
            <div class="pt-8 border-t border-gray-100">
              <button
                type="submit"
                :disabled="submitting"
                class="w-full inline-flex items-center justify-center bg-[#27628C] text-white font-bold py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <div v-if="submitting" class="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-3"></div>
                {{ submitting ? 'Processing Application...' : 'Submit Final Application' }}
              </button>
              <p class="mt-4 text-center text-sm text-gray-400">
                By submitting this form, you agree to receive communications regarding the program and related updates.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGetProgram } from '@/composables/modules/programs/useGetProgram'
import { useSubmitApplication } from '@/composables/modules/programs/useSubmitApplication'

const route = useRoute()
const { program, loading: loadingProgram, getProgram } = useGetProgram()
const { loading: submitting, error: submitError, success, submitApplication } = useSubmitApplication()

const formData = ref<Record<string, any>>({})

// Initialize form data on mount
onMounted(async () => {
  const idOrSlug = route.params.id as string
  const data = await getProgram(idOrSlug)
  
  if (data?.formFields) {
    data.formFields.forEach((field: any) => {
      formData.value[field.id] = field.type === 'radio' || field.type === 'select' ? '' : ''
    })
  }
})

const hasWhatsappLink = computed(() => {
  return program.value?.slug === 'biomedical-science-conference-2026' || 
         program.value?.formFields?.some(f => f.description?.includes('chat.whatsapp.com'))
})

const handleSubmit = async () => {
  if (!program.value?.registrationToken) {
    alert('Critical Error: Program registration token missing.')
    return
  }

  // Format responses for backend
  const responses = Object.keys(formData.value).map(key => {
    const field = program.value.formFields.find(f => f.id === key)
    return {
      fieldId: key,
      fieldLabel: field?.label || key,
      value: String(formData.value[key])
    }
  })

  // Get email for backend tracking
  const emailField = program.value.formFields.find(f => f.type === 'email')
  const email = emailField ? formData.value[emailField.id] : ''

  const payload = {
    applicantEmail: email,
    responses
  }

  try {
    await submitApplication(program.value.registrationToken, payload as any)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (err) {
    console.error('Submission failed', err)
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

/* Custom switch behavior for radio labels */
input[type="radio"]:checked + span {
  color: #27628C;
}
</style>
