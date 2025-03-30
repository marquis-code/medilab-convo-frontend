<template>
  <!-- Page Loader Animation -->
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-600 to-blue-800">
      <div class="relative w-full max-w-md p-8">
        <!-- Lab Equipment Animation -->
        <div class="lab-animation">
          <!-- Test Tubes -->
          <div class="test-tube test-tube-1">
            <div class="test-tube-liquid"></div>
            <div class="test-tube-bubbles">
              <div class="bubble b1"></div>
              <div class="bubble b2"></div>
              <div class="bubble b3"></div>
            </div>
          </div>
          <div class="test-tube test-tube-2">
            <div class="test-tube-liquid"></div>
            <div class="test-tube-bubbles">
              <div class="bubble b1"></div>
              <div class="bubble b2"></div>
              <div class="bubble b3"></div>
            </div>
          </div>
          <div class="test-tube test-tube-3">
            <div class="test-tube-liquid"></div>
            <div class="test-tube-bubbles">
              <div class="bubble b1"></div>
              <div class="bubble b2"></div>
              <div class="bubble b3"></div>
            </div>
          </div>
          
          <!-- DNA Helix -->
          <div class="dna-helix">
            <div v-for="i in 10" :key="`dna-strand-${i}`" class="dna-strand">
              <div class="dna-left"></div>
              <div class="dna-right"></div>
            </div>
          </div>
        </div>
        
        <!-- Loading Text -->
        <div class="text-center mt-8">
          <h2 class="text-3xl font-bold text-white mb-2 tracking-wider animate-pulse">MEDLABCONVO</h2>
          <div class="flex justify-center items-center space-x-1">
            <span class="text-white text-lg">Loading</span>
            <span class="loading-dot">.</span>
            <span class="loading-dot">.</span>
            <span class="loading-dot">.</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- DNA Helix Animation -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div v-for="i in 10" :key="`dna-${i}`" 
             class="absolute h-full w-20" 
             :style="`left: ${i * 10}%; animation-delay: ${i * 0.2}s`">
          <div class="h-full w-full animate-float">
            <div v-for="j in 20" :key="`strand-${j}`" 
                 class="absolute w-16 h-4 rounded-full"
                 :class="j % 2 === 0 ? 'bg-blue-500' : 'bg-orange-500'"
                 :style="`top: ${j * 5}%; left: ${Math.sin(j * 0.5) * 30}px; transform: rotate(${Math.sin(j * 0.5) * 30}deg); opacity: ${0.7 + Math.sin(j * 0.5) * 0.3}`">
            </div>
          </div>
        </div>
      </div>
      
      <!-- Floating Particles -->
      <div v-for="i in 20" :key="`particle-${i}`" 
           class="absolute rounded-full"
           :class="[
             i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-orange-400',
             i % 5 === 0 ? 'h-3 w-3' : i % 5 === 1 ? 'h-5 w-5' : i % 5 === 2 ? 'h-4 w-4' : 'h-2 w-2'
           ]"
           :style="`
             top: ${Math.random() * 100}%; 
             left: ${Math.random() * 100}%; 
             animation: float ${3 + Math.random() * 5}s ease-in-out infinite;
             animation-delay: ${Math.random() * 5}s;
             opacity: ${0.1 + Math.random() * 0.3};
           `">
      </div>
      
      <!-- Lab Equipment Silhouettes -->
      <div class="absolute bottom-0 left-0 w-full h-40 opacity-5">
        <svg class="h-full w-full" viewBox="0 0 1200 200" fill="currentColor">
          <path d="M100,180 L130,180 L150,100 L170,180 L200,180 L200,190 L100,190 Z" class="text-blue-900" /> <!-- Test tube -->
          <path d="M250,190 C250,150 300,150 300,190 Z" class="text-blue-900" /> <!-- Flask -->
          <path d="M350,190 L380,190 L380,150 C380,130 400,130 400,150 L400,190 L430,190 L430,150 C430,100 350,100 350,150 Z" class="text-blue-900" /> <!-- Microscope -->
          <path d="M480,190 L510,190 L510,150 L540,120 L570,150 L570,190 L600,190 L600,140 L540,80 L480,140 Z" class="text-blue-900" /> <!-- Molecule -->
          <!-- Repeat patterns -->
          <path d="M650,180 L680,180 L700,100 L720,180 L750,180 L750,190 L650,190 Z" class="text-blue-900" />
          <path d="M800,190 C800,150 850,150 850,190 Z" class="text-blue-900" />
          <path d="M900,190 L930,190 L930,150 C930,130 950,130 950,150 L950,190 L980,190 L980,150 C980,100 900,100 900,150 Z" class="text-blue-900" />
          <path d="M1030,190 L1060,190 L1060,150 L1090,120 L1120,150 L1120,190 L1150,190 L1150,140 L1090,80 L1030,140 Z" class="text-blue-900" />
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12 relative z-10">
      <!-- 3D Card Effect Container -->
      <div class="max-w-3xl mx-auto perspective-1000">
        <div class="transform-style-3d hover:rotate-y-2 transition-transform duration-500 ease-out">
          <!-- Header Banner with 3D Effect -->
          <div class="relative overflow-hidden rounded-t-2xl shadow-2xl transform translate-z-10">
            <div class="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 p-4 relative">
              <!-- Animated Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20 animate-shimmer"></div>
              
              <!-- Lab Equipment Icons -->
              <div class="absolute top-0 right-0 h-full w-full overflow-hidden opacity-20">
                <div class="absolute -right-10 top-5 rotate-12 transform-gpu">
                  <svg class="w-32 h-32 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M9,3 L9,15 C9,16.5 10,18 12,18 C14,18 15,16.5 15,15 L15,3" />
                    <path d="M7,3 L17,3" />
                    <path d="M7,7 L17,7" />
                  </svg>
                </div>
                <div class="absolute -left-10 bottom-5 -rotate-12 transform-gpu">
                  <svg class="w-32 h-32 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <circle cx="12" cy="8" r="5" />
                    <line x1="12" y1="13" x2="12" y2="20" />
                    <line x1="9" y1="20" x2="15" y2="20" />
                  </svg>
                </div>
              </div>
              
              <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                  <img src="@/assets/img/cover2.jpeg" class="h-full w-full rounded-xl" />
              </div>
          
            </div>
          </div>

          <!-- Form Content with Glass Effect -->
          <div class="bg-white/90 backdrop-blur-md shadow-2xl rounded-b-2xl overflow-hidden transform translate-z-0 border border-white/50">
            <div class="p-8 border-b border-gray-100">
              <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-6 animate-fadeIn">
                Ask your MLS-Related Questions
              </h2>
              
              <div class="prose prose-blue max-w-none">
                <p class="text-gray-700 mb-4 animate-fadeIn animation-delay-300">
                  Biomedical Science Day is around the corner and we plan to celebrate for a month!
                  We can't do this without you so do you have any MLS-related question either from a
                  student or professional standpoint?
                </p>
                
                <p class="text-gray-700 mb-4 animate-fadeIn animation-delay-600">
                  Anything at all, ask and ye shall receive answers.
                </p>
                
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg animate-fadeIn animation-delay-900">
                  <p class="text-blue-700 italic font-medium">
                    P.S. This is completely anonymous.
                  </p>
                </div>
              </div>
            </div>

            <!-- Form with Floating Labels and Animations -->
            <form @submit.prevent="submitForm" class="p-8 space-y-8">
              <!-- Name Input with Floating Label -->
              <div class="animate-fadeInUp relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative">
                  <input 
                    id="name" 
                    v-model="formData.name" 
                    type="text" 
                    class="peer w-full px-4 pt-6 pb-2 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
                    :class="{'border-red-500 focus:ring-red-500 focus:border-red-500': errors.name}"
                    placeholder=" "
                  />
                  <label 
                    for="name" 
                    class="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600"
                  >
                    What do you want us to call you?
                  </label>
                  <p v-if="errors.name" class="mt-1 text-sm text-red-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {{ errors.name }}
                  </p>
                </div>
              </div>
              
              <!-- Question Textarea with Floating Label -->
              <div class="animate-fadeInUp animation-delay-300 relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative">
                  <textarea 
                    id="question" 
                    v-model="formData.question" 
                    rows="4" 
                    class="peer w-full px-4 pt-6 pb-2 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none resize-none"
                    :class="{'border-red-500 focus:ring-red-500 focus:border-red-500': errors.question}"
                    placeholder=" "
                  ></textarea>
                  <label 
                    for="question" 
                    class="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600"
                  >
                    Ask your question
                  </label>
                  <p v-if="errors.question" class="mt-1 text-sm text-red-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {{ errors.question }}
                  </p>
                </div>
                
                <!-- Character Counter -->
                <div class="mt-1 text-xs text-right text-gray-500">
                  {{ formData.question.length }} / 500 characters
                </div>
              </div>
              
              <!-- Additional Info Textarea with Floating Label -->
              <div class="animate-fadeInUp animation-delay-600 relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative">
                  <textarea 
                    id="additional" 
                    v-model="formData.additional" 
                    rows="3" 
                    class="peer w-full px-4 pt-6 pb-2 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none resize-none"
                    placeholder=" "
                  ></textarea>
                  <label 
                    for="additional" 
                    class="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-600"
                  >
                    Any other thing you wish to tell the MedLabConvo Team?
                  </label>
                </div>
                
                <!-- Character Counter -->
                <div class="mt-1 text-xs text-right text-gray-500">
                  {{ formData.additional.length }} / 300 characters
                </div>
              </div>
              
              <!-- Form Actions -->
              <div class="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4 animate-fadeInUp animation-delay-900">
                <button 
                  type="submit" 
                  class="w-full sm:w-auto relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  :disabled="isSubmitting"
                >
                  <!-- Button Shine Effect -->
                  <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                  
                  <span class="flex items-center justify-center">
                    <span v-if="isSubmitting" class="mr-2 flex">
                      <!-- Custom Loader -->
                      <svg class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                  </span>
                </button>
                
                <button 
                  type="button" 
                  @click="clearForm" 
                  class="w-full sm:w-auto px-8 py-4 bg-transparent text-blue-600 font-medium rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  :disabled="isSubmitting"
                >
                  Clear form
                </button>
              </div>
            </form>
            
            <div class="px-8 py-6 text-xs text-gray-500 border-t border-gray-100 bg-gray-50">
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <!-- Never submit passwords through Google Forms. -->
                  Powered by MEDLABCONVO
                </p>
                
                <p class="text-center">
                  This form was created inside of MedLabConvo.
                  <a href="#" class="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Report</a>
                </p>
              </div>
              
              <div class="flex justify-center mt-6">
                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <span class="text-gray-500 font-medium">Powered by MEDLABCONVO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Success Modal with Advanced Animation -->
    <Transition name="modal">
      <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-0">
        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" @click="showSuccessModal = false"></div>
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative z-10 transform transition-all">
          <!-- Success Animation -->
          <div class="text-center">
            <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 relative">
              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Thank you for your submission!</h3>
            <p class="text-gray-600 mb-6">Your MLS-related question has been received. We appreciate your contribution to Biomedical Science Day.</p>
            <button 
              @click="showSuccessModal = false" 
              class="w-full relative rounded-xl overflow-hidden group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
            >
              <!-- Button Shine Effect -->
              <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Error Modal with Animation -->
    <Transition name="modal">
      <div v-if="showErrorModal" class="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-0">
        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" @click="showErrorModal = false"></div>
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative z-10 transform transition-all animate-shake-once">
          <!-- Error Animation -->
          <div class="text-center">
            <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6 relative">
              <svg class="errormark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="errormark__circle" cx="26" cy="26" r="25" fill="none" />
                <path class="errormark__x" fill="none" d="M16 16 36 36 M36 16 16 36" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Submission Failed</h3>
            <p class="text-gray-600 mb-6">{{ errorMessage }}</p>
            <button 
              @click="showErrorModal = false" 
              class="w-full relative rounded-xl overflow-hidden group px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
            >
              <!-- Button Shine Effect -->
              <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              Try Again
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue'
  import { useCreateAnonymous } from '@/composables/auth/anonymous'
  const { createAnonymous, loading } = useCreateAnonymous()
  
  // Page loading state
  const isLoading = ref(true)
  
  // Form data with TypeScript interface
  interface FormData {
    name: string;
    question: string;
    additional: string;
  }
  
  // Form state
  const formData = reactive<FormData>({
    name: '',
    question: '',
    additional: ''
  })
  
  // Form validation errors
  const errors = reactive({
    name: '',
    question: ''
  })
  
  // UI state
  const isSubmitting = ref(false)
  const showSuccessModal = ref(false)
  const showErrorModal = ref(false)
  const errorMessage = ref('Something went wrong while submitting your question. Please try again later.')
  const userEmail = ref('user@example.com')
  
  // Initialize page with loader
  onMounted(() => {
    // Simulate loading time for the page
    setTimeout(() => {
      isLoading.value = false
    }, 2500) // Show loader for 2.5 seconds
  })
  
  // Form submission
  const submitForm = async () => {
    // Reset errors
    errors.name = ''
    errors.question = ''
    
    // Validate form
    let isValid = true
    
    if (!formData.name.trim()) {
      errors.name = 'Please let us know what to call you'
      isValid = false
    }
    
    if (!formData.question.trim()) {
      errors.question = 'Please enter your question'
      isValid = false
    } else if (formData.question.length > 500) {
      errors.question = 'Your question is too long (max 500 characters)'
      isValid = false
    }
    
    if (!isValid) {
      // Add shake animation to invalid fields
      const invalidFields = document.querySelectorAll('.border-red-500')
      invalidFields.forEach(field => {
        field.classList.add('animate-shake')
        setTimeout(() => {
          field.classList.remove('animate-shake')
        }, 500)
      })
      return
    }
    
    // Show loading state
    isSubmitting.value = true
    
    try {
      // Prepare payload
      const payloadObj = {
        whatDoYouWantUsToCallYou: formData.name,
        askYourQuestion: formData.question,
        anyOtherThingYouWishToTellTheMedLabConvoTeam: formData.additional
      }

      // Submit form
      const res = await createAnonymous(payloadObj)
      
      if (res.type !== 'ERROR') {
        showSuccessModal.value = true
        clearForm()
      } else {
        // Handle error response
        errorMessage.value = res.message || 'Something went wrong while submitting your question. Please try again later.'
        showErrorModal.value = true
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Show error modal with generic message
      errorMessage.value = 'Something went wrong while submitting your question. Please try again later.'
      showErrorModal.value = true
    } finally {
      isSubmitting.value = false
    }
  }
  
  // Clear form fields
  const clearForm = () => {
    formData.name = ''
    formData.question = ''
    formData.additional = ''
    errors.name = ''
    errors.question = ''
  }
  
  // Switch account function
  const switchAccount = () => {
    // This would typically open an account selection dialog
    alert('Account switching functionality would be implemented here')
  }

  definePageMeta({
      layout: 'auth'
  })
</script>

<style>
/* Base styles */
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.translate-z-0 {
  transform: translateZ(0px);
}

.translate-z-10 {
  transform: translateZ(10px);
}

.rotate-y-2:hover {
  transform: rotateY(2deg);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes expand {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes shake-once {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 3s infinite;
}

.animate-expand {
  animation: expand 1.5s ease-out forwards;
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

.animate-shake-once {
  animation: shake-once 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-900 {
  animation-delay: 0.9s;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Success Checkmark Animation */
.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #4BB543;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #4BB543;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #4BB543;
  fill: none;
  animation: stroke .6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s cubic-bezier(0.65, 0, 0.45, 1) .8s forwards;
}

/* Error X Animation */
.errormark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #FF5252;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #FF5252;
  animation: fill-error .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.errormark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #FF5252;
  fill: none;
  animation: stroke .6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.errormark__x {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  stroke-width: 2;
  stroke: #FF5252;
  animation: stroke .3s cubic-bezier(0.65, 0, 0.45, 1) .8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #4BB543;
  }
}

@keyframes fill-error {
  100% {
    box-shadow: inset 0px 0px 0px 30px #FF5252;
  }
}

/* Fade transition for page loader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Page Loader Animations */
.lab-animation {
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Test Tubes */
.test-tube {
  position: absolute;
  width: 40px;
  height: 120px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.test-tube-1 {
  left: 20%;
  transform: rotate(-5deg);
}

.test-tube-2 {
  left: 50%;
  transform: translateX(-50%);
}

.test-tube-3 {
  right: 20%;
  transform: rotate(5deg);
}

.test-tube-liquid {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(to bottom, #4f46e5, #7c3aed);
  border-radius: 0 0 20px 20px;
  animation: liquid-pulse 2s ease-in-out infinite;
}

.test-tube-1 .test-tube-liquid {
  background: linear-gradient(to bottom, #3b82f6, #2563eb);
  animation-delay: 0.3s;
}

.test-tube-3 .test-tube-liquid {
  background: linear-gradient(to bottom, #ec4899, #db2777);
  animation-delay: 0.6s;
}

@keyframes liquid-pulse {
  0%, 100% {
    height: 70%;
  }
  50% {
    height: 75%;
  }
}

/* Bubbles in test tubes */
.test-tube-bubbles {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  overflow: hidden;
}

.bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}

.b1 {
  width: 8px;
  height: 8px;
  left: 10px;
  animation: bubble-rise 3s linear infinite;
}

.b2 {
  width: 6px;
  height: 6px;
  left: 20px;
  animation: bubble-rise 2.5s linear infinite;
  animation-delay: 0.7s;
}

.b3 {
  width: 4px;
  height: 4px;
  left: 30px;
  animation: bubble-rise 2s linear infinite;
  animation-delay: 1.2s;
}

@keyframes bubble-rise {
  0% {
    bottom: 0;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    opacity: 0;
  }
}

/* DNA Helix */
.dna-helix {
  position: absolute;
  width: 60px;
  height: 180px;
  left: 50%;
  transform: translateX(-50%);
}

.dna-strand {
  position: relative;
  width: 100%;
  height: 18px;
  margin-bottom: 0;
}

.dna-left, .dna-right {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  top: 3px;
}

.dna-left {
  background: rgba(59, 130, 246, 0.7);
  left: 0;
  animation: dna-rotate 3s linear infinite;
}

.dna-right {
  background: rgba(236, 72, 153, 0.7);
  right: 0;
  animation: dna-rotate 3s linear infinite reverse;
}

@keyframes dna-rotate {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(48px);
  }
  100% {
    transform: translateX(0);
  }
}

/* Loading dots animation */
.loading-dot {
  display: inline-block;
  animation: loading-dots 1.4s infinite;
  color: white;
  font-size: 1.5rem;
  line-height: 1;
}

.loading-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes loading-dots {
  0%, 100% {
    opacity: 0.2;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px);
  }
}
</style>