<template>
    <div class="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100 flex flex-col">
      <!-- Leave confirmation modal -->
      <transition name="fade">
        <div v-if="showLeaveModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div class="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full transform transition-all">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Are you sure you want to leave?</h3>
            <p class="text-gray-600 mb-6">Your progress will be lost if you leave now.</p>
            <div class="flex justify-end space-x-3">
              <button @click="showLeaveModal = false" class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                Stay
              </button>
              <button @click="resetQuiz" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                Leave
              </button>
            </div>
          </div>
        </div>
      </transition>
  
      <!-- Toast notification -->
      <transition name="toast">
        <div v-if="toast.show" class="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-40 max-w-xs w-full flex items-center">
          <div class="bg-teal-100 p-2 rounded-full mr-3">
            <Icon :name="toast.icon" class="text-teal-600 w-5 h-5" />
          </div>
          <div>
            <p class="font-medium text-gray-800">{{ toast.message }}</p>
          </div>
        </div>
      </transition>
  
      <div class="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <!-- Welcome screen -->
        <div v-if="currentState === 'welcome'" class="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div class="mb-8 transform hover:scale-105 transition-transform">
            <img src="@/assets/img/medlab-logo.jpeg" alt="Kidney illustration" class="mx-auto h-16 rounded-full w-auto mb-4" />
            <h1 class="text-3xl md:text-4xl font-bold text-teal-800 mb-2">WORLD KIDNEY DAY</h1>
            <h2 class="text-2xl md:text-3xl font-bold text-teal-700">PERSONALITY QUESTIONS</h2>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8 w-full">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">WHAT PART OF THE NEPHRON ARE YOU?</h3>
            <p class="text-gray-600 mb-6">
              Answer the following 10 questions, keeping track of which letters (A, B, C, etc.) you choose most often. 
              Your most frequent letter will reveal your nephron match at the end!
            </p>
            <button @click="startQuiz" class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 w-full md:w-auto">
              Start Quiz
            </button>
          </div>
          <div class="grid hidden grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div v-for="(part, index) in nephronParts" :key="index" class="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-2">
                <span class="text-teal-800 font-bold text-lg">{{ part.letter }}</span>
              </div>
              <h4 class="font-bold text-gray-800 text-center">{{ part.name }}</h4>
            </div>
          </div>
        </div>
  
        <!-- Quiz questions -->
        <div v-else-if="currentState === 'quiz'" class="flex-1 flex flex-col">
          <div class="mb-4 flex justify-between items-center">
            <div class="text-sm font-medium text-gray-600">Question {{ currentQuestionIndex + 1 }}/{{ questions.length }}</div>
            <button @click="confirmLeave" class="text-sm text-gray-500 hover:text-gray-700">Exit Quiz</button>
          </div>
  
          <transition name="slide" mode="out-in">
            <div :key="currentQuestionIndex" class="bg-white rounded-xl shadow-lg p-6 mb-6 flex-1">
              <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                {{ currentQuestionIndex + 1 }}. {{ currentQuestion.question }}
              </h2>
              
              <div class="mb-6 overflow-hidden rounded-lg">
                <img :src="currentQuestion.image" :alt="'Image for question ' + (currentQuestionIndex + 1)" class="w-full max-h-64 object-fill object-center" />
              </div>
              
              <div class="space-y-3">
                <button 
                  v-for="(option, index) in currentQuestion.options" 
                  :key="index"
                  @click="selectAnswer(option.value)"
                  class="w-full text-left p-4 rounded-lg transition-all flex items-start hover:bg-teal-50 border border-gray-200 hover:border-teal-300"
                  :class="{'bg-teal-50 border-teal-300': userAnswers[currentQuestionIndex] === option.value}"
                >
                  <span class="font-bold text-teal-800 mr-2">{{ option.label }})</span>
                  <span>{{ option.text }}</span>
                  <span class="text-gray-500 hidden ml-1">({{ nephronParts.find(p => p.value === option.value)?.name }})</span>
                </button>
              </div>
            </div>
          </transition>
  
          <div class="flex justify-between">
            <button 
              @click="previousQuestion" 
              :disabled="currentQuestionIndex === 0"
              class="px-4 py-2 rounded-lg transition-colors"
              :class="currentQuestionIndex === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'"
            >
              Previous
            </button>
            
            <button 
              @click="nextQuestion" 
              :disabled="!userAnswers[currentQuestionIndex]"
              class="px-4 py-2 rounded-lg transition-colors"
              :class="!userAnswers[currentQuestionIndex] ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 text-white'"
            >
              {{ currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next' }}
            </button>
          </div>
        </div>
  
        <!-- Results screen -->
        <div v-else-if="currentState === 'results'" class="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8 w-full text-center">
          <div class="mb-6">
            <div class="flex justify-center items-center mb-4">
              <div class="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                <span class="text-teal-800 font-bold text-3xl">{{ result.letter }}</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-teal-800">
                {{ getResultTitle() }}
              </h2>
            </div>
            
            <div class="mb-6">
              <!-- <img :src="getResultImage()" :alt="result.name" class="mx-auto rounded-lg max-h-64 object-cover mb-4" /> -->
              <p class="text-gray-600">{{ getResultDescription() }}</p>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="font-bold text-gray-800 mb-2">Your Answer Breakdown:</h3>
            <div class="flex justify-center space-x-4">
              <div v-for="(count, letter) in answerCounts" :key="letter" class="text-center">
                <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-1">
                  <span class="font-bold">{{ letter }}</span>
                </div>
                <div class="text-sm">{{ count }}</div>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
            <button @click="resetQuiz" class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              Take Quiz Again
            </button>
            <button @click="shareResults" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
              <Icon name="mdi:whatsapp" class="mr-2" />
              Share on WhatsApp
            </button>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 w-full">
          <h3 class="font-bold text-gray-800 mb-4">About Your Nephron Part:</h3>
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/3 mb-4 md:mb-0 md:mr-6">
              <img :src="result.image" class="rounded-xl" />
              <!-- <div class="bg-teal-50 rounded-lg p-4 h-full">
                <div class="nephron-animation">
                  <div class="w-full h-40 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span class="text-teal-800 font-bold">{{ result.name }} Animation</span>
                  </div>
                </div>
              </div> -->
            </div>
            <div class="md:w-2/3">
              <h4 class="font-bold text-teal-800 mb-2">{{ result.name }} Function:</h4>
              <p class="text-gray-600 mb-4">{{ result.function }}</p>
              <h4 class="font-bold text-teal-800 mb-2">Personality Traits:</h4>
              <ul class="list-disc list-inside text-gray-600">
                <li v-for="(trait, index) in result.traits" :key="index">{{ trait }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import imagea from '@/assets/img/a.jpeg'
  import imageb from '@/assets/img/b.jpeg'
  import imagec from '@/assets/img/c.jpeg'
  import imaged from '@/assets/img/d.jpeg'
  import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
  import { useRouter } from 'nuxt/app'

  definePageMeta({
      layout: 'authentication'
  })
  
  // Define types
  interface NephronPart {
    value: string
    letter: string
    name: string
    description: string
    function: string
    image: string
    title: string
    desc: string
    traits: string[]
  }
  
  interface QuizOption {
    label: string
    value: string
    text: string
  }
  
  interface Question {
    question: string
    image: string
    options: QuizOption[]
  }
  
  // Define nephron parts
  const nephronParts = ref<NephronPart[]>([
    {
      value: 'glomerulus',
      letter: 'A',
      image: imagea,
      name: 'Glomerulus',
      title: ' You are the Glomerulus (The Gatekeeper)!',
      desc: `You are selective, strategic, and precise. You filter out what isn't useful and focus only on what matters. People rely on your strong judgment and ability to remove distractions.`,
      description: 'You are selective and efficient, focusing on what truly matters.',
      function: 'The glomerulus filters blood to create filtrate, selectively allowing small molecules to pass through while keeping larger ones in the bloodstream.',
      traits: [
        'Decisive and focused',
        'Good at prioritizing',
        'Filters out distractions',
        'Values efficiency'
      ]
    },
    {
      value: 'bowmans',
      letter: 'B',
      image: imageb,
      name: 'Bowman\'s Capsule',
      title: 'You are Bowman`s Capsule (The Collector)!',
      desc: `You love absorbing information, gathering ideas, and keeping your options open. Even if you don't use everything you take in, you ensure you have plenty to work with.`,
      description: 'You collect and gather information, creating a foundation for future actions.',
      function: 'Bowman\'s capsule collects the filtrate from the glomerulus and directs it to the proximal convoluted tubule.',
      traits: [
        'Thorough and comprehensive',
        'Good at gathering information',
        'Prepares well before acting',
        'Values completeness'
      ]
    },
    {
      value: 'pct',
      letter: 'C',
      name: 'PCT',
      image: imagec,
      title: 'You are the Proximal Convoluted Tubule (The Efficient Utilizer)!',
      desc: `You are a resourceful problem-solver who makes the most of every opportunity. You refine, prioritize, and ensure everything is used efficiently.`,
      description: 'You are resourceful and efficient, making the most of what you have.',
      function: 'The Proximal Convoluted Tubule (PCT) reabsorbs valuable substances from the filtrate back into the bloodstream.',
      traits: [
        'Practical and resourceful',
        'Good at optimizing processes',
        'Makes the most of available resources',
        'Values efficiency and utility'
      ]
    },
    {
      value: 'loop',
      letter: 'D',
      image: imaged,
      name: 'Loop of Henle',
      title: 'You are the Loop of Henle (The Resilient Survivor)!',
      desc: `You are strong, adaptable, and able to endure even the toughest challenges. You find ways to thrive under pressure and always push forward.`,
      description: 'You are adaptable and resilient, able to thrive under pressure and changing conditions.',
      function: 'The Loop of Henle creates a concentration gradient that allows the kidney to concentrate or dilute urine as needed.',
      traits: [
        'Adaptable and flexible',
        'Resilient under pressure',
        'Perseveres through challenges',
        'Values endurance and consistency'
      ]
    }
  ])
  
  // Define quiz questions
  const questions = ref<Question[]>([
    {
      question: 'How do you handle information overload?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.30.14-mJbfunfqLBadabfG4wuKiam7GLSM3u.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'I filter out what\'s unnecessary and keep only the best.' },
        { label: 'B', value: 'bowmans', text: 'I collect everything, even if I don\'t use it right away.' },
        { label: 'C', value: 'pct', text: 'I process and utilize what\'s useful, discarding the rest.' },
        { label: 'D', value: 'loop', text: 'I adapt to the situation and conserve energy when needed.' }
      ]
    },
    {
      question: 'What role do you usually play in a team?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.30.24-hPSa7LXVjpne7mwfVeyGlJKsLNieNu.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'The one who decides what\'s important and what\'s not.' },
        { label: 'B', value: 'bowmans', text: 'The one who gathers all the information before making a move.' },
        { label: 'C', value: 'pct', text: 'The one who makes sure everything is used efficiently.' },
        { label: 'D', value: 'loop', text: 'The one who stays strong and keeps things moving under pressure.' }
      ]
    },
    {
      question: 'How do you react to challenges?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.30.37-1jolwG8QhbXYOJnD7DQ4KzUHEjCadb.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'I carefully choose which challenges to take on.' },
        { label: 'B', value: 'bowmans', text: 'I take in everything, whether it\'s useful or not.' },
        { label: 'C', value: 'pct', text: 'I analyze the situation and make the most of it.' },
        { label: 'D', value: 'loop', text: 'I endure and adjust to whatever comes my way.' }
      ]
    },
    {
      question: 'How do you prepare for an exam or big project?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.30.50-E4Jwh6cu4STQfD6MwVAjhtZhlv6cJ2.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'I focus on studying only the most important topics.' },
        { label: 'B', value: 'bowmans', text: 'I gather all notes and materials, even if I don\'t use them all.' },
        { label: 'C', value: 'pct', text: 'I make sure I use my time wisely and study efficiently.' },
        { label: 'D', value: 'loop', text: 'I go through challenges and keep going even when it\'s hard.' }
      ]
    },
    {
      question: 'What\'s your approach to decision-making?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.31.01-mA1bvC0zm6YqJz80O3cpb96Ysb0urf.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'I filter out bad options and only focus on the best ones.' },
        { label: 'B', value: 'bowmans', text: 'I collect all available options before making a choice.' },
        { label: 'C', value: 'pct', text: 'I refine my options and use the best possible solution.' },
        { label: 'D', value: 'loop', text: 'I adapt based on the situation and go with what works.' }
      ]
    },
    {
      question: 'What kind of person are you in a crisis?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.31.13-pktnQLkMAZoDilinTUbyN69BneeJD5.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'The one who quickly decides what\'s worth saving.' },
        { label: 'B', value: 'bowmans', text: 'The one who takes everything in before reacting.' },
        { label: 'C', value: 'pct', text: 'The one who prioritizes survival and resourcefulness.' },
        { label: 'D', value: 'loop', text: 'The one who keeps pushing forward no matter what.' }
      ]
    },
    {
      question: 'What\'s your work style?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.31.27-5eVxcawT6k41N7YtBKbkU9hcVQhWla.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'Focused on efficiency and cutting out distractions.' },
        { label: 'B', value: 'bowmans', text: 'Gathering as much information as possible before taking action.' },
        { label: 'C', value: 'pct', text: 'Prioritizing productivity and resourcefulness.' },
        { label: 'D', value: 'loop', text: 'Working under pressure and adapting to challenges.' }
      ]
    },
    {
      question: 'What\'s your attitude toward personal growth?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.31.37-e9aBIMY5ViNiriDu5W9Dh4z72QvkZU.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'I focus only on self-improvement that truly matters.' },
        { label: 'B', value: 'bowmans', text: 'I absorb all knowledge and experiences, even if I don\'t use them all.' },
        { label: 'C', value: 'pct', text: 'I refine myself, making sure I use every lesson to improve.' },
        { label: 'D', value: 'loop', text: 'I strengthen myself through challenges and hardships.' }
      ]
    },
    {
      question: 'How do you handle criticism?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.31.46-RjsTwLml6CkQtaPLBkWt5I62A3wuEV.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'I filter out the unhelpful parts and focus on useful feedback.' },
        { label: 'B', value: 'bowmans', text: 'I take it all in, even if some of it isn\'t necessary.' },
        { label: 'C', value: 'pct', text: 'I process it and apply only what is valuable.' },
        { label: 'D', value: 'loop', text: 'I use it to build resilience and improve over time.' }
      ]
    },
    {
      question: 'What\'s your long-term approach to life?',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-05%20at%2022.31.59-IopPVNvXFGolI5cQn8CnjnlWDhOZDl.png',
      options: [
        { label: 'A', value: 'glomerulus', text: 'I carefully choose my path and avoid unnecessary distractions.' },
        { label: 'B', value: 'bowmans', text: 'I take in as many experiences as possible, whether I use them or not.' },
        { label: 'C', value: 'pct', text: 'I make sure to use my time wisely and efficiently.' },
        { label: 'D', value: 'loop', text: 'I adapt and endure, always finding a way forward.' }
      ]
    }
  ])
  
  // State management
  const currentState = ref<'welcome' | 'quiz' | 'results'>('welcome')
  const currentQuestionIndex = ref(0)
  const userAnswers = ref<string[]>([])
  const showLeaveModal = ref(false)
  const toast = ref({
    show: false,
    message: '',
    icon: 'check-circle'
  })
  
  // Computed properties
  const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])
  
  const answerCounts = computed(() => {
    const counts: Record<string, number> = {
      'A': 0,
      'B': 0,
      'C': 0,
      'D': 0
    }
    
    userAnswers.value.forEach(answer => {
      if (answer === 'glomerulus') counts['A']++
      else if (answer === 'bowmans') counts['B']++
      else if (answer === 'pct') counts['C']++
      else if (answer === 'loop') counts['D']++
    })
    
    return counts
  })
  
  const result = computed(() => {
    const counts = answerCounts.value
    let maxCount = 0
    let maxLetter = ''
    
    for (const [letter, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count
        maxLetter = letter
      }
    }
    
    let resultValue = ''
    if (maxLetter === 'A') resultValue = 'glomerulus'
    else if (maxLetter === 'B') resultValue = 'bowmans'
    else if (maxLetter === 'C') resultValue = 'pct'
    else if (maxLetter === 'D') resultValue = 'loop'
    
    return nephronParts.value.find(part => part.value === resultValue) || nephronParts.value[0]
  })
  
  // Methods
  const startQuiz = () => {
    currentState.value = 'quiz'
    loadFromSessionStorage()
    showToast('Quiz started! Answer all questions to find your nephron match.')
  }
  
  const selectAnswer = (value: string) => {
    userAnswers.value[currentQuestionIndex.value] = value
    saveToSessionStorage()
  }
  
  const nextQuestion = () => {
    if (currentQuestionIndex.value < questions.value.length - 1) {
      currentQuestionIndex.value++
    } else {
      finishQuiz()
    }
  }
  
  const previousQuestion = () => {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
    }
  }
  
  const finishQuiz = () => {
    currentState.value = 'results'
    showToast(`You are a ${result.value.name}!`, 'award')
  }
  
  const resetQuiz = () => {
    currentState.value = 'welcome'
    currentQuestionIndex.value = 0
    userAnswers.value = []
    showLeaveModal.value = false
    sessionStorage.removeItem('nephronQuizState')
  }
  
  const confirmLeave = () => {
    showLeaveModal.value = true
  }
  
  
  const showToast = (message: string, icon: string = 'info') => {
    toast.value = {
      show: true,
      message,
      icon
    }
    
    setTimeout(() => {
      toast.value.show = false
    }, 3000)
  }

  // Get result image, title and description from the updated nephron parts
const getResultImage = () => {
  return result.value.image || '/placeholder.svg?height=300&width=400'
}

const getResultTitle = () => {
  return result.value.title || `You are a ${result.value.name}!`
}

const getResultDescription = () => {
  return result.value.fullDescription || result.value.description
}

// Share results via Web Share API with WhatsApp as target
const shareResults = async () => {
  const resultText = `${getResultTitle()}\n\n${getResultDescription()}\n\nTake the Nephron Quiz to find out which part of the kidney you are!`
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My Nephron Quiz Result',
        text: resultText,
        url: window.location.href
      })
      showToast('Shared successfully!', 'check-circle')
    } catch (error) {
      // If user cancels or sharing fails, try WhatsApp directly
      shareToWhatsApp()
    }
  } else {
    // Fallback for browsers that don't support Web Share API
    shareToWhatsApp()
  }
}

// Fallback method to share directly to WhatsApp
const shareToWhatsApp = () => {
  const resultText = `${getResultTitle()}\n\n${getResultDescription()}\n\nTake the Nephron Quiz to find out which part of the kidney you are!`
  const encodedText = encodeURIComponent(resultText)
  const whatsappUrl = `https://wa.me/?text=${encodedText}`
  window.open(whatsappUrl, '_blank')
  showToast('Opening WhatsApp to share', 'share')
}
  
  // Session storage
  const saveToSessionStorage = () => {
    const state = {
      currentQuestionIndex: currentQuestionIndex.value,
      userAnswers: userAnswers.value
    }
    sessionStorage.setItem('nephronQuizState', JSON.stringify(state))
  }
  
  const loadFromSessionStorage = () => {
    const savedState = sessionStorage.getItem('nephronQuizState')
    if (savedState) {
      const state = JSON.parse(savedState)
      currentQuestionIndex.value = state.currentQuestionIndex
      userAnswers.value = state.userAnswers
    } else {
      // Initialize empty answers array
      userAnswers.value = Array(questions.value.length).fill('')
    }
  }
  
  // Lifecycle hooks
  onMounted(() => {
    // Handle browser back/refresh
    window.addEventListener('beforeunload', (e) => {
      if (currentState.value === 'quiz') {
        e.preventDefault()
        e.returnValue = ''
        return ''
      }
    })
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', () => {})
  })
  
  // Watch for changes to save state
  watch([currentQuestionIndex, userAnswers], () => {
    if (currentState.value === 'quiz') {
      saveToSessionStorage()
    }
  }, { deep: true })
  </script>
  
  <style>
  /* Transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-enter-from {
    opacity: 0;
    transform: translateX(30px);
  }
  
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
  
  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.3s ease;
  }
  
  .toast-enter-from,
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  /* Nephron animation - this would be more elaborate in a real app */
  .nephron-animation {
    position: relative;
    overflow: hidden;
  }
  
  .nephron-animation::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shine 2s infinite;
  }
  
  @keyframes shine {
    to {
      left: 100%;
    }
  }
  </style>
  
  