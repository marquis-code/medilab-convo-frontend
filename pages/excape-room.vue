<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-brand-primary to-slate-800 text-white font-mono overflow-hidden relative">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/80 via-brand-secondary/70 to-slate-900/80"></div>
    <div v-if="gameState !== 'welcome'" :class="['absolute inset-0 bg-red-500/10', { 'flicker': isEmergency }]"></div>
    
    <!-- Animated Background Particles -->
    <div v-if="gameState !== 'welcome'" class="absolute inset-0 overflow-hidden">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
    </div>
    
    <!-- Siren Light -->
    <div v-if="gameState !== 'welcome'" class="siren fixed top-16 right-2 sm:top-20 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full shadow-lg shadow-red-500/50 z-30"></div>
    
    <!-- Audio Controls -->
    <!-- <div class="fixed top-4 left-4 z-50 flex items-center gap-2">
      <button 
        @click="toggleMute" 
        :class="[
          'p-2 rounded-full border-2 transition-all duration-300 backdrop-blur-sm',
          isMuted ? 'bg-red-500/80 border-red-400 text-white hover:bg-red-600/80' : 'bg-green-500/80 border-green-400 text-white hover:bg-green-600/80'
        ]"
        :title="isMuted ? 'Unmute Background Music' : 'Mute Background Music'"
      >
        <span class="text-lg">{{ isMuted ? '🔇' : '🎵' }}</span>
      </button>
      <div class="text-xs text-gray-400 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
        {{ isMuted ? 'Muted' : 'Playing' }}
      </div>
    </div> -->
    
  <section class="p-3 space-y-3">
        <!-- Oxygen Meter -->
    <div v-if="showOxygenMeter" class="sm:top-4 bg-black/95 p-3 sm:p-4 flex justify-between items-center rounded-lg border-2 border-red-500 z-30 backdrop-blur-md">
      <div class="text-xs text-red-400 mb-2 font-bold tracking-wider">OXYGEN LEVEL</div>
      <div class="w-28 sm:w-32 h-3 sm:h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
        <div 
          :class="[
            'h-full transition-all duration-500 ease-in-out',
            oxygenLevel > 50 ? 'bg-green-500' : oxygenLevel > 20 ? 'bg-yellow-500' : 'bg-red-500'
          ]"
          :style="{ width: `${oxygenLevel}%` }"
        ></div>
      </div>
      <div class="text-xs mt-1 font-bold" :class="oxygenLevel < 20 ? 'text-red-400 animate-pulse' : 'text-green-400'">
        {{ oxygenLevel }}%
      </div>
    </div>

    <!-- Timer -->
    <div v-if="showTimer && timeLeft > 0" class="sm:top-4 flex justify-between items-center sm:right-4 bg-black/95 p-3 sm:p-4 rounded-lg border-2 border-yellow-500 z-30 backdrop-blur-md shadow-xl min-w-[120px] sm:min-w-[140px]">
      <div class="text-xs text-yellow-400 mb-2 font-bold tracking-wider text-center">TIME LEFT</div>
      <div class="text-xl sm:text-2xl font-bold text-center" :class="timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-yellow-400'">
        {{ timeLeft }}s
      </div>
    </div>
  </section>

    <!-- Background Audio -->
    <audio 
      ref="backgroundAudio" 
      loop 
      preload="auto" 
      class="hidden"
      @canplaythrough="handleAudioLoaded"
      @error="handleAudioError"
    >
      <source src="/background-music.mp3" type="audio/mp3">
      <source src="/background-music2.mp3" type="audio/mp3">
    </audio>

    <!-- Game Container -->
    <div class="relative z-10 min-h-screen flex items-center justify-center p-2 sm:p-4">
      
      <!-- Welcome Screen -->
      <div v-if="gameState === 'welcome'" class="fade-in text-center max-w-2xl mx-auto px-4">
        <div class="mb-6 sm:mb-8">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            MEDLABCONVO
          </h1>
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6">ESCAPE ROOM</h2>
          <div class="bg-black/90 p-4 sm:p-6 rounded-lg border border-cyan-500 mb-6 sm:mb-8 backdrop-blur-sm">
            <div class="text-sm md:text-base text-gray-300 leading-relaxed">
              <p class="mb-4">⚠️ <span class="text-cyan-400 font-bold">BIOHAZARD DETECTED</span> ⚠️</p>
              <p class="mb-4">The MedLabConvo research facility is in lockdown. Oxygen levels are critically low.</p>
              <p class="text-yellow-400 font-bold">Solve the protocols to escape before you suffocate!</p>
            </div>
          </div>
        </div>
        
        <button 
          @click="startGame"
          class="group relative px-8 py-4 text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-secondary to-blue-600 hover:from-blue-600 hover:to-brand-secondary text-white rounded-lg border-2 border-blue-400 shadow-xl shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm mx-auto"
        >
          <span class="relative z-10 text-white drop-shadow-lg">🚀 BEGIN PROTOCOL</span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <!-- Game Screen -->
      <div v-else-if="gameState === 'playing'" class="fade-in w-full max-w-4xl mx-auto px-2 sm:px-4">
        
        <!-- Room Header -->
        <div class="text-center mb-4 sm:mb-8">
          <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-cyan-400 mb-2">
            {{ currentPuzzle.title }}
          </h2>
          <div class="text-sm md:text-base text-gray-400">
            Room {{ currentPuzzleIndex + 1 }} of {{ puzzles.length }}
          </div>
        </div>

        <!-- Room Content -->
        <div class="bg-black/95 border-2 border-cyan-500 rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-md">
          
          <!-- Room Description -->
          <div v-if="currentPuzzle.description" class="mb-4 sm:mb-6 p-4 bg-gray-800/80 rounded-lg border-l-4 border-yellow-500">
            <p class="text-gray-200 leading-relaxed text-sm sm:text-base">{{ currentPuzzle.description }}</p>
          </div>

          <!-- Question -->
          <div class="mb-6 sm:mb-8">
            <h3 class="text-base sm:text-lg md:text-xl font-bold text-yellow-300 mb-4">
              {{ currentPuzzle.question }}
            </h3>
          </div>

          <!-- Answer Input -->
          <div v-if="!showingResult" class="mb-4 sm:mb-6">
            <div v-if="currentPuzzle.type === 'select'" class="space-y-2 sm:space-y-3">
              <button
                v-for="option in currentPuzzle.options"
                :key="option"
                @click="selectAndSubmitAnswer(option)"
                :class="[
                  'w-full p-4 text-left rounded-lg border-2 transition-all duration-300 text-sm sm:text-base font-medium',
                  selectedAnswer === option 
                    ? 'border-yellow-500 bg-yellow-500/20 text-yellow-100 shadow-lg' 
                    : 'border-gray-500 bg-gray-800/90 hover:border-blue-400 hover:bg-gray-700/90 text-gray-100 hover:text-white'
                ]"
                :disabled="isSubmitting"
              >
                <span class="block">{{ option }}</span>
              </button>
            </div>
            
            <div v-else class="space-y-4">
              <input
                v-model="selectedAnswer"
                type="text"
                :placeholder="currentPuzzle.placeholder || 'Enter your answer...'"
                class="w-full p-4 bg-gray-800/90 border-2 border-gray-500 rounded-lg text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                @keyup.enter="submitAnswer"
                :disabled="isSubmitting"
              />
              <button
                @click="submitAnswer"
                :disabled="!selectedAnswer || isSubmitting"
                :class="[
                  'w-full px-8 py-4 font-bold rounded-lg transition-all duration-300 transform text-sm sm:text-base',
                  selectedAnswer && !isSubmitting
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-2 border-green-400 hover:scale-105 shadow-xl shadow-green-500/40'
                    : 'bg-gray-600/80 text-gray-300 border-2 border-gray-500 cursor-not-allowed'
                ]"
              >
                <span class="drop-shadow-lg">{{ isSubmitting ? 'PROCESSING...' : 'SUBMIT ANSWER' }}</span>
              </button>
            </div>
          </div>

          <!-- Result Display -->
          <div v-if="showingResult" class="text-center">
            <div v-if="lastAnswerCorrect" class="mb-6">
              <div class="text-4xl sm:text-6xl mb-4 animate-bounce">✅</div>
              <h3 class="text-xl sm:text-2xl font-bold text-green-400 mb-2">CORRECT!</h3>
              <p class="text-gray-300 mb-4 text-sm sm:text-base">{{ currentPuzzle.correctAnswer }}</p>
              <div class="text-green-400 animate-pulse">🚪 Door unlocking...</div>
            </div>
            
            <div v-else class="mb-6">
              <div class="text-4xl sm:text-6xl mb-4 animate-bounce">❌</div>
              <h3 class="text-xl sm:text-2xl font-bold text-red-400 mb-2">WRONG ANSWER!</h3>
              <p class="text-red-300 mb-4 text-sm sm:text-base">{{ currentPuzzle.wrongMessage }}</p>
              <div class="text-red-400 animate-pulse mb-4">⚠️ Oxygen depleting rapidly...</div>
              <button
                @click="retryPuzzle"
                class="px-8 py-4 font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg border-2 border-red-400 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-red-500/40 text-sm sm:text-base"
              >
                <span class="drop-shadow-lg">🔄 TRY AGAIN</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="mt-4 sm:mt-8 max-w-md mx-auto">
          <div class="text-sm text-gray-400 mb-2">Progress</div>
          <div class="w-full bg-gray-800 rounded-full h-2 sm:h-3 border border-gray-600">
            <div 
              class="h-full bg-gradient-to-r from-yellow-500 to-green-500 rounded-full transition-all duration-500"
              :style="{ width: `${(currentPuzzleIndex / puzzles.length) * 100}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Victory Screen -->
      <div v-else-if="gameState === 'victory'" class="fade-in text-center max-w-2xl mx-auto px-4">
        <div class="mb-6 sm:mb-8">
          <div class="text-6xl sm:text-8xl mb-6 animate-bounce">🎉</div>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            ESCAPED!
          </h1>
          <div class="bg-black/90 p-4 sm:p-6 rounded-lg border border-green-500 mb-6 sm:mb-8 backdrop-blur-sm">
            <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
              🎊 Congratulations! You've successfully escaped the MedLabConvo facility!
            </p>
            <p class="text-green-400 mt-4 font-bold">
              All protocols completed. Oxygen levels restored. You are now safe!
            </p>
          </div>
        </div>
        
        <button 
          @click="resetGame"
          class="px-8 py-4 text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg border-2 border-green-400 shadow-xl shadow-green-500/40 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm mx-auto"
        >
          <span class="drop-shadow-lg">🎮 PLAY AGAIN</span>
        </button>
      </div>

      <!-- Game Over Screen -->
      <div v-else-if="gameState === 'gameOver'" class="fade-in text-center max-w-2xl mx-auto px-4">
        <div class="mb-6 sm:mb-8">
          <div class="text-6xl sm:text-8xl mb-6 animate-pulse">💀</div>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-red-500">
            GAME OVER
          </h1>
          <div class="bg-black/90 p-4 sm:p-6 rounded-lg border border-red-500 mb-6 sm:mb-8 backdrop-blur-sm">
            <p class="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              ⚰️ Oxygen depleted. Protocol failed.
            </p>
            <p class="text-red-400">
              You have suffocated in the MedLabConvo facility.
            </p>
          </div>
        </div>
        
        <button 
          @click="resetGame"
          class="px-8 py-4 text-lg sm:text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg border-2 border-red-400 shadow-xl shadow-red-500/40 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm mx-auto"
        >
          <span class="drop-shadow-lg">🔄 TRY AGAIN</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface Puzzle {
  title: string
  description?: string
  question: string
  correctAnswer: string
  wrongMessage: string
  type: 'text' | 'select'
  options?: string[]
  placeholder?: string
  timeLimit?: number
}

// Game State
const gameState = ref<'welcome' | 'playing' | 'victory' | 'gameOver'>('welcome')
const currentPuzzleIndex = ref(0)
const selectedAnswer = ref('')
const showingResult = ref(false)
const lastAnswerCorrect = ref(false)
const isSubmitting = ref(false)

// Game Effects
const oxygenLevel = ref(100)
const timeLeft = ref(30)
const isEmergency = ref(false)
let timerInterval: NodeJS.Timeout | null = null
let oxygenInterval: NodeJS.Timeout | null = null

// Audio State
const backgroundAudio = ref<HTMLAudioElement>()
const isMuted = ref(false)
const audioLoaded = ref(false)
let userInteracted = ref(false)

// Computed
const showOxygenMeter = computed(() => gameState.value === 'playing')
const showTimer = computed(() => gameState.value === 'playing' && currentPuzzle.value.timeLimit && !showingResult.value)

// Updated Puzzles Data with new first question options
const puzzles = ref<Puzzle[]>([
  {
    title: 'MedLabConvo Origins',
    description: 'A heavy metal door blocks your path. Ancient mechanisms click and whir as biometric scanners activate.',
    question: 'Who founded MedLabConvo?',
    correctAnswer: 'Gabriel Oke, Emmanuel Awa, Obeta Odinaka',
    wrongMessage: 'Door seals shut! Toxic gas fills the chamber!',
    type: 'select',
    options: [
      'Olamide Esther, Better Ajiboye, Oluwaponmile Sanni',
      'Emmanuel Awa, Ogunkoya Muyiwa, Obeta Odinaka',
      'Gabriel Oke, Emmanuel Awa, Obeta Odinaka',
      'Gabriel Oke, Jimoh Sherifat, Emmanuel Awa'
    ],
    timeLimit: 30
  },
  {
    title: 'MedLabConvo Early Beginnings',
    description: 'You enter a research chamber. A sealed container glows ominously, containing a critical piece of information.',
    question: 'Our first viral moment established us as a thought leader with the youths in the MLS field. What was it?',
    correctAnswer: 'UTME Guide',
    wrongMessage: 'Container locks down! Toxic CO2 fills the air!',
    type: 'select',
    options: [
      'UTME Guide',
      'Social Media Campaign',
      'Laboratory Equipment Review',
      'Student Scholarship Program'
    ],
    timeLimit: 25
  },
  {
    title: 'MedLabConvo Programs',
    description: 'Emergency lights flicker as you approach a secured terminal. Critical system information awaits.',
    question: 'What was our first program series?',
    correctAnswer: 'Forging a career path',
    wrongMessage: 'System lockdown! Hypoxia warning activated!',
    type: 'text',
    placeholder: 'Enter the program series name...',
    timeLimit: 20
  },
  {
    title: 'MLSCD Knowledge',
    description: 'You enter what appears to be a pristine classroom, untouched by the chaos outside.',
    question: 'What year did the first edition of MLSCD hold?',
    correctAnswer: '2021',
    wrongMessage: 'Wrong answer! Oxygen systems failing!',
    type: 'select',
    options: ['2019', '2020', '2021', '2022'],
    timeLimit: 15
  },
  {
    title: 'Final Protocol',
    description: 'This is your last chance. A single speaker crackles to life in the sterile room.',
    question: 'We have a capacity building arm that began in 2021, targeted at students and young professionals in different aspects of MLS. What is the name of this program?',
    correctAnswer: 'The Capacity Mentornet',
    wrongMessage: 'Final protocol failed! Complete system shutdown imminent!',
    type: 'text',
    placeholder: 'Enter the program name...',
    timeLimit: 10
  }
])

const currentPuzzle = computed(() => puzzles.value[currentPuzzleIndex.value])

// Audio Methods
const initializeAudio = async () => {
  if (!backgroundAudio.value || !audioLoaded.value) return
  
  try {
    backgroundAudio.value.volume = 0.3
    backgroundAudio.value.loop = true
    
    if (!isMuted.value) {
      await backgroundAudio.value.play()
      console.log('Background music started playing')
    }
  } catch (error) {
    console.warn('Could not auto-play audio:', error)
    // Audio will start when user first interacts
  }
}

const handleAudioLoaded = () => {
  audioLoaded.value = true
  if (userInteracted.value) {
    initializeAudio()
  }
}

const handleAudioError = (error: Event) => {
  console.warn('Audio failed to load:', error)
}

const toggleMute = async () => {
  if (!backgroundAudio.value || !audioLoaded.value) return
  
  userInteracted.value = true
  isMuted.value = !isMuted.value
  
  try {
    if (isMuted.value) {
      backgroundAudio.value.pause()
    } else {
      backgroundAudio.value.volume = 0.3
      await backgroundAudio.value.play()
    }
  } catch (error) {
    console.warn('Error toggling audio:', error)
  }
}

const forceStartAudio = async () => {
  if (!backgroundAudio.value || !audioLoaded.value || isMuted.value) return
  
  try {
    userInteracted.value = true
    backgroundAudio.value.volume = 0.3
    await backgroundAudio.value.play()
  } catch (error) {
    console.warn('Force start audio failed:', error)
  }
}

// Game Methods
const startGame = async () => {
  gameState.value = 'playing'
  oxygenLevel.value = 100
  isEmergency.value = true
  startTimer()
  startOxygenDepletion()
  
  // Ensure audio starts when game begins
  userInteracted.value = true
  await forceStartAudio()
}

// New method for select options - auto submit on selection
const selectAndSubmitAnswer = async (answer: string) => {
  if (isSubmitting.value) return
  
  userInteracted.value = true
  selectedAnswer.value = answer
  await submitAnswer()
}

const submitAnswer = async () => {
  if (!selectedAnswer.value || isSubmitting.value) return
  
  userInteracted.value = true
  isSubmitting.value = true
  
  // Ensure audio continues playing after user interaction
  if (!isMuted.value) {
    await forceStartAudio()
  }
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  stopTimer()
  
  const isCorrect = selectedAnswer.value.toLowerCase().trim() === 
                   currentPuzzle.value.correctAnswer.toLowerCase().trim()
  
  lastAnswerCorrect.value = isCorrect
  showingResult.value = true
  isSubmitting.value = false
  
  if (isCorrect) {
    oxygenLevel.value = Math.min(100, oxygenLevel.value + 20)
    // Auto advance to next puzzle after 2 seconds if correct
    setTimeout(() => {
      nextPuzzle()
    }, 2000)
  } else {
    oxygenLevel.value = Math.max(0, oxygenLevel.value - 30)
    
    if (oxygenLevel.value <= 0) {
      setTimeout(() => {
        gameState.value = 'gameOver'
      }, 2000)
      return
    }
  }
}

const nextPuzzle = () => {
  currentPuzzleIndex.value++
  
  if (currentPuzzleIndex.value >= puzzles.value.length) {
    gameState.value = 'victory'
    return
  }
  
  selectedAnswer.value = ''
  showingResult.value = false
  startTimer()
}

const retryPuzzle = async () => {
  userInteracted.value = true
  selectedAnswer.value = ''
  showingResult.value = false
  startTimer()
  
  // Ensure audio continues
  if (!isMuted.value) {
    await forceStartAudio()
  }
}

const resetGame = () => {
  gameState.value = 'welcome'
  currentPuzzleIndex.value = 0
  selectedAnswer.value = ''
  showingResult.value = false
  lastAnswerCorrect.value = false
  oxygenLevel.value = 100
  timeLeft.value = 30
  isEmergency.value = false
  stopTimer()
  stopOxygenDepletion()
  
  // Keep background music playing even when resetting
  // Don't stop the audio, just let it continue
}

const startTimer = () => {
  if (!currentPuzzle.value.timeLimit) return
  
  timeLeft.value = currentPuzzle.value.timeLimit
  
  timerInterval = setInterval(() => {
    timeLeft.value--
    
    if (timeLeft.value <= 0) {
      stopTimer()
      if (!showingResult.value) {
        // Auto-fail when time runs out
        lastAnswerCorrect.value = false
        showingResult.value = true
        oxygenLevel.value = Math.max(0, oxygenLevel.value - 40)
        
        if (oxygenLevel.value <= 0) {
          setTimeout(() => {
            gameState.value = 'gameOver'
          }, 2000)
        }
      }
    }
  }, 1000)
}

const stopTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

const startOxygenDepletion = () => {
  oxygenInterval = setInterval(() => {
    if (gameState.value === 'playing' && !showingResult.value) {
      oxygenLevel.value = Math.max(0, oxygenLevel.value - 0.5)
      
      if (oxygenLevel.value <= 0) {
        gameState.value = 'gameOver'
      }
    }
  }, 1000)
}

const stopOxygenDepletion = () => {
  if (oxygenInterval) {
    clearInterval(oxygenInterval)
    oxygenInterval = null
  }
}

// Handle user interaction for audio autoplay
const handleUserInteraction = async () => {
  if (!userInteracted.value && audioLoaded.value) {
    userInteracted.value = true
    await forceStartAudio()
  }
}

// Lifecycle
onMounted(() => {
  // Add event listeners for user interaction
  const events = ['click', 'keydown', 'touchstart']
  events.forEach(event => {
    document.addEventListener(event, handleUserInteraction, { once: true })
  })
  
  // Try to start audio immediately if possible
  nextTick(() => {
    if (audioLoaded.value) {
      initializeAudio()
    }
  })
})

onUnmounted(() => {
  stopTimer()
  stopOxygenDepletion()
  
  if (backgroundAudio.value) {
    backgroundAudio.value.pause()
    backgroundAudio.value.currentTime = 0
  }
})

// Watch for game state changes
watch(gameState, (newState) => {
  if (newState === 'victory') {
    stopOxygenDepletion()
    oxygenLevel.value = 100
    isEmergency.value = false
    // Keep background music playing
  } else if (newState === 'gameOver') {
    stopOxygenDepletion()
    isEmergency.value = false
    // Keep background music playing
  }
})

// Watch for audio loaded state
watch(audioLoaded, (loaded) => {
  if (loaded && userInteracted.value) {
    initializeAudio()
  }
})

definePageMeta({
  layout: 'empty'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

:root {
  --brand-primary: #27628C;
  --brand-secondary: #1e4a6b;
}

.bg-brand-primary {
  background-color: var(--brand-primary);
}

.bg-brand-secondary {
  background-color: var(--brand-secondary);
}

.from-brand-secondary {
  --tw-gradient-from: var(--brand-secondary);
  --tw-gradient-to: rgb(30 74 107 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-brand-secondary {
  --tw-gradient-to: var(--brand-secondary);
}

.flicker {
  animation: flicker 0.5s infinite alternate;
}

@keyframes flicker {
  0% { opacity: 1; }
  100% { opacity: 0.7; }
}

.siren {
  animation: siren 2s infinite;
}

@keyframes siren {
  0% { transform: rotate(0deg); opacity: 0.8; }
  25% { transform: rotate(90deg); opacity: 1; }
  50% { transform: rotate(180deg); opacity: 0.8; }
  75% { transform: rotate(270deg); opacity: 1; }
  100% { transform: rotate(360deg); opacity: 0.8; }
}

.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
}

.particle-1 {
  width: 4px;
  height: 4px;
  top: 20%;
  left: 10%;
  animation: float 6s infinite ease-in-out;
}

.particle-2 {
  width: 6px;
  height: 6px;
  top: 60%;
  right: 15%;
  animation: float 8s infinite ease-in-out reverse;
}

.particle-3 {
  width: 3px;
  height: 3px;
  bottom: 30%;
  left: 70%;
  animation: float 5s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-5px); }
  75% { transform: translateY(-30px) translateX(15px); }
}

/* Mobile responsive improvements */
@media (max-width: 640px) {
  .text-3xl { font-size: 1.875rem; }
  .text-4xl { font-size: 2.25rem; }
  .text-6xl { font-size: 3rem; }
  .text-8xl { font-size: 4rem; }
}

/* Custom backdrop blur for better mobile performance */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

</style><template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-brand-primary to-slate-800 text-white font-mono overflow-hidden relative">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/80 via-brand-secondary/70 to-slate-900/80"></div>
    <div v-if="gameState !== 'welcome'" :class="['absolute inset-0 bg-red-500/10', { 'flicker': isEmergency }]"></div>
    
    <!-- Animated Background Particles -->
    <div v-if="gameState !== 'welcome'" class="absolute inset-0 overflow-hidden">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
    </div>
    
    <!-- Siren Light -->
    <div v-if="gameState !== 'welcome'" class="siren fixed top-16 right-2 sm:top-20 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full shadow-lg shadow-red-500/50 z-30"></div>
    
  <section class="p-3 space-y-3">
        <!-- Oxygen Meter -->
    <div v-if="showOxygenMeter" class="sm:top-4 bg-black/95 p-3 sm:p-4 flex justify-between items-center rounded-lg border-2 border-red-500 z-30 backdrop-blur-md">
      <div class="text-xs text-red-400 mb-2 font-bold tracking-wider">OXYGEN LEVEL</div>
      <div class="w-28 sm:w-32 h-3 sm:h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
        <div 
          :class="[
            'h-full transition-all duration-500 ease-in-out',
            oxygenLevel > 50 ? 'bg-green-500' : oxygenLevel > 20 ? 'bg-yellow-500' : 'bg-red-500'
          ]"
          :style="{ width: `${oxygenLevel}%` }"
        ></div>
      </div>
      <div class="text-xs mt-1 font-bold" :class="oxygenLevel < 20 ? 'text-red-400 animate-pulse' : 'text-green-400'">
        {{ oxygenLevel }}%
      </div>
    </div>

    <!-- Timer -->
    <div v-if="showTimer && timeLeft > 0" class="sm:top-4 flex justify-between items-center sm:right-4 bg-black/95 p-3 sm:p-4 rounded-lg border-2 border-yellow-500 z-30 backdrop-blur-md shadow-xl min-w-[120px] sm:min-w-[140px]">
      <div class="text-xs text-yellow-400 mb-2 font-bold tracking-wider text-center">TIME LEFT</div>
      <div class="text-xl sm:text-2xl font-bold text-center" :class="timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-yellow-400'">
        {{ timeLeft }}s
      </div>
    </div>
  </section>

    <!-- Background Audio -->
    <audio ref="backgroundAudio" loop preload="auto" class="hidden">
      <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">
    </audio>

    <!-- Game Container -->
    <div class="relative z-10 min-h-screen flex items-center justify-center p-2 sm:p-4">
      
      <!-- Welcome Screen -->
      <div v-if="gameState === 'welcome'" class="fade-in text-center max-w-2xl mx-auto px-4">
        <div class="mb-6 sm:mb-8">
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            MEDLABCONVO
          </h1>
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6">ESCAPE ROOM</h2>
          <div class="bg-black/90 p-4 sm:p-6 rounded-lg border border-cyan-500 mb-6 sm:mb-8 backdrop-blur-sm">
            <div class="text-sm md:text-base text-gray-300 leading-relaxed">
              <p class="mb-4">⚠️ <span class="text-cyan-400 font-bold">BIOHAZARD DETECTED</span> ⚠️</p>
              <p class="mb-4">The MedLabConvo research facility is in lockdown. Oxygen levels are critically low.</p>
              <p class="text-yellow-400 font-bold">Solve the protocols to escape before you suffocate!</p>
            </div>
          </div>
        </div>
        
        <button 
          @click="startGame"
          class="group relative px-8 py-4 text-lg sm:text-xl font-bold bg-gradient-to-r from-brand-secondary to-blue-600 hover:from-blue-600 hover:to-brand-secondary text-white rounded-lg border-2 border-blue-400 shadow-xl shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm mx-auto"
        >
          <span class="relative z-10 text-white drop-shadow-lg">🚀 BEGIN PROTOCOL</span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <!-- Game Screen -->
      <div v-else-if="gameState === 'playing'" class="fade-in w-full max-w-4xl mx-auto px-2 sm:px-4">
        
        <!-- Room Header -->
        <div class="text-center mb-4 sm:mb-8">
          <h2 class="text-xl sm:text-2xl md:text-4xl font-bold text-cyan-400 mb-2">
            {{ currentPuzzle.title }}
          </h2>
          <div class="text-sm md:text-base text-gray-400">
            Room {{ currentPuzzleIndex + 1 }} of {{ puzzles.length }}
          </div>
        </div>

        <!-- Room Content -->
        <div class="bg-black/95 border-2 border-cyan-500 rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-md">
          
          <!-- Room Description -->
          <div v-if="currentPuzzle.description" class="mb-4 sm:mb-6 p-4 bg-gray-800/80 rounded-lg border-l-4 border-yellow-500">
            <p class="text-gray-200 leading-relaxed text-sm sm:text-base">{{ currentPuzzle.description }}</p>
          </div>

          <!-- Question -->
          <div class="mb-6 sm:mb-8">
            <h3 class="text-base sm:text-lg md:text-xl font-bold text-yellow-300 mb-4">
              {{ currentPuzzle.question }}
            </h3>
          </div>

          <!-- Answer Input -->
          <div v-if="!showingResult" class="mb-4 sm:mb-6">
            <div v-if="currentPuzzle.type === 'select'" class="space-y-2 sm:space-y-3">
              <button
                v-for="option in currentPuzzle.options"
                :key="option"
                @click="selectAndSubmitAnswer(option)"
                :class="[
                  'w-full p-4 text-left rounded-lg border-2 transition-all duration-300 text-sm sm:text-base font-medium',
                  selectedAnswer === option 
                    ? 'border-yellow-500 bg-yellow-500/20 text-yellow-100 shadow-lg' 
                    : 'border-gray-500 bg-gray-800/90 hover:border-blue-400 hover:bg-gray-700/90 text-gray-100 hover:text-white'
                ]"
                :disabled="isSubmitting"
              >
                <span class="block">{{ option }}</span>
              </button>
            </div>
            
            <div v-else class="space-y-4">
              <input
                v-model="selectedAnswer"
                type="text"
                :placeholder="currentPuzzle.placeholder || 'Enter your answer...'"
                class="w-full p-4 bg-gray-800/90 border-2 border-gray-500 rounded-lg text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                @keyup.enter="submitAnswer"
                :disabled="isSubmitting"
              />
              <button
                @click="submitAnswer"
                :disabled="!selectedAnswer || isSubmitting"
                :class="[
                  'w-full px-8 py-4 font-bold rounded-lg transition-all duration-300 transform text-sm sm:text-base',
                  selectedAnswer && !isSubmitting
                    ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-2 border-green-400 hover:scale-105 shadow-xl shadow-green-500/40'
                    : 'bg-gray-600/80 text-gray-300 border-2 border-gray-500 cursor-not-allowed'
                ]"
              >
                <span class="drop-shadow-lg">{{ isSubmitting ? 'PROCESSING...' : 'SUBMIT ANSWER' }}</span>
              </button>
            </div>
          </div>

          <!-- Result Display -->
          <div v-if="showingResult" class="text-center">
            <div v-if="lastAnswerCorrect" class="mb-6">
              <div class="text-4xl sm:text-6xl mb-4 animate-bounce">✅</div>
              <h3 class="text-xl sm:text-2xl font-bold text-green-400 mb-2">CORRECT!</h3>
              <p class="text-gray-300 mb-4 text-sm sm:text-base">{{ currentPuzzle.correctAnswer }}</p>
              <div class="text-green-400 animate-pulse">🚪 Door unlocking...</div>
            </div>
            
            <div v-else class="mb-6">
              <div class="text-4xl sm:text-6xl mb-4 animate-bounce">❌</div>
              <h3 class="text-xl sm:text-2xl font-bold text-red-400 mb-2">WRONG ANSWER!</h3>
              <p class="text-red-300 mb-4 text-sm sm:text-base">{{ currentPuzzle.wrongMessage }}</p>
              <div class="text-red-400 animate-pulse mb-4">⚠️ Oxygen depleting rapidly...</div>
              <button
                @click="retryPuzzle"
                class="px-8 py-4 font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg border-2 border-red-400 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-red-500/40 text-sm sm:text-base"
              >
                <span class="drop-shadow-lg">🔄 TRY AGAIN</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="mt-4 sm:mt-8 max-w-md mx-auto">
          <div class="text-sm text-gray-400 mb-2">Progress</div>
          <div class="w-full bg-gray-800 rounded-full h-2 sm:h-3 border border-gray-600">
            <div 
              class="h-full bg-gradient-to-r from-yellow-500 to-green-500 rounded-full transition-all duration-500"
              :style="{ width: `${(currentPuzzleIndex / puzzles.length) * 100}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Victory Screen -->
      <div v-else-if="gameState === 'victory'" class="fade-in text-center max-w-2xl mx-auto px-4">
        <div class="mb-6 sm:mb-8">
          <div class="text-6xl sm:text-8xl mb-6 animate-bounce">🎉</div>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            ESCAPED!
          </h1>
          <div class="bg-black/90 p-4 sm:p-6 rounded-lg border border-green-500 mb-6 sm:mb-8 backdrop-blur-sm">
            <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
              🎊 Congratulations! You've successfully escaped the MedLabConvo facility!
            </p>
            <p class="text-green-400 mt-4 font-bold">
              All protocols completed. Oxygen levels restored. You are now safe!
            </p>
          </div>
        </div>
        
        <button 
          @click="resetGame"
          class="px-8 py-4 text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white rounded-lg border-2 border-green-400 shadow-xl shadow-green-500/40 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm mx-auto"
        >
          <span class="drop-shadow-lg">🎮 PLAY AGAIN</span>
        </button>
      </div>

      <!-- Game Over Screen -->
      <div v-else-if="gameState === 'gameOver'" class="fade-in text-center max-w-2xl mx-auto px-4">
        <div class="mb-6 sm:mb-8">
          <div class="text-6xl sm:text-8xl mb-6 animate-pulse">💀</div>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-red-500">
            GAME OVER
          </h1>
          <div class="bg-black/90 p-4 sm:p-6 rounded-lg border border-red-500 mb-6 sm:mb-8 backdrop-blur-sm">
            <p class="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              ⚰️ Oxygen depleted. Protocol failed.
            </p>
            <p class="text-red-400">
              You have suffocated in the MedLabConvo facility.
            </p>
          </div>
        </div>
        
        <button 
          @click="resetGame"
          class="px-8 py-4 text-lg sm:text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg border-2 border-red-400 shadow-xl shadow-red-500/40 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm mx-auto"
        >
          <span class="drop-shadow-lg">🔄 TRY AGAIN</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface Puzzle {
  title: string
  description?: string
  question: string
  correctAnswer: string
  wrongMessage: string
  type: 'text' | 'select'
  options?: string[]
  placeholder?: string
  timeLimit?: number
}

// Game State
const gameState = ref<'welcome' | 'playing' | 'victory' | 'gameOver'>('welcome')
const currentPuzzleIndex = ref(0)
const selectedAnswer = ref('')
const showingResult = ref(false)
const lastAnswerCorrect = ref(false)
const isSubmitting = ref(false)

// Game Effects
const oxygenLevel = ref(100)
const timeLeft = ref(30)
const isEmergency = ref(false)
let timerInterval: NodeJS.Timeout | null = null
let oxygenInterval: NodeJS.Timeout | null = null

// Audio
const backgroundAudio = ref<HTMLAudioElement>()

// Computed
const showOxygenMeter = computed(() => gameState.value === 'playing')
const showTimer = computed(() => gameState.value === 'playing' && currentPuzzle.value.timeLimit && !showingResult.value)

// Updated Puzzles Data with new first question options
const puzzles = ref<Puzzle[]>([
  {
    title: 'MedLabConvo Origins',
    description: 'A heavy metal door blocks your path. Ancient mechanisms click and whir as biometric scanners activate.',
    question: 'Who founded MedLabConvo?',
    correctAnswer: 'Gabriel Oke, Emmanuel Awa, Obeta Odinaka',
    wrongMessage: 'Door seals shut! Toxic gas fills the chamber!',
    type: 'select',
    options: [
      'Olamide Esther, Better Ajiboye, Oluwaponmile Sanni',
      'Emmanuel Awa, Ogunkoya Muyiwa, Obeta Odinaka',
      'Gabriel Oke, Emmanuel Awa, Obeta Odinaka',
      'Gabriel Oke, Jimoh Sherifat, Emmanuel Awa'
    ],
    timeLimit: 30
  },
  {
    title: 'MedLabConvo Early Beginnings',
    description: 'You enter a research chamber. A sealed container glows ominously, containing a critical piece of information.',
    question: 'Our first viral moment established us as a thought leader with the youths in the MLS field. What was it?',
    correctAnswer: 'UTME Guide',
    wrongMessage: 'Container locks down! Toxic CO2 fills the air!',
    type: 'select',
    options: [
      'UTME Guide',
      'Social Media Campaign',
      'Laboratory Equipment Review',
      'Student Scholarship Program'
    ],
    timeLimit: 25
  },
  {
    title: 'MedLabConvo Programs',
    description: 'Emergency lights flicker as you approach a secured terminal. Critical system information awaits.',
    question: 'What was our first program series?',
    correctAnswer: 'Forging a career path',
    wrongMessage: 'System lockdown! Hypoxia warning activated!',
    type: 'text',
    placeholder: 'Enter the program series name...',
    timeLimit: 20
  },
  {
    title: 'MLSCD Knowledge',
    description: 'You enter what appears to be a pristine classroom, untouched by the chaos outside.',
    question: 'What year did the first edition of MLSCD hold?',
    correctAnswer: '2021',
    wrongMessage: 'Wrong answer! Oxygen systems failing!',
    type: 'select',
    options: ['2019', '2020', '2021', '2022'],
    timeLimit: 15
  },
  {
    title: 'Final Protocol',
    description: 'This is your last chance. A single speaker crackles to life in the sterile room.',
    question: 'We have a capacity building arm that began in 2021, targeted at students and young professionals in different aspects of MLS. What is the name of this program?',
    correctAnswer: 'The Capacity Mentornet',
    wrongMessage: 'Final protocol failed! Complete system shutdown imminent!',
    type: 'text',
    placeholder: 'Enter the program name...',
    timeLimit: 10
  }
])

const currentPuzzle = computed(() => puzzles.value[currentPuzzleIndex.value])

// Methods
const startGame = () => {
  gameState.value = 'playing'
  oxygenLevel.value = 100
  isEmergency.value = true
  startTimer()
  startOxygenDepletion()
  startBackgroundAudio()
}

// New method for select options - auto submit on selection
const selectAndSubmitAnswer = async (answer: string) => {
  if (isSubmitting.value) return
  
  selectedAnswer.value = answer
  await submitAnswer()
}

const submitAnswer = async () => {
  if (!selectedAnswer.value || isSubmitting.value) return
  
  isSubmitting.value = true
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  stopTimer()
  
  const isCorrect = selectedAnswer.value.toLowerCase().trim() === 
                   currentPuzzle.value.correctAnswer.toLowerCase().trim()
  
  lastAnswerCorrect.value = isCorrect
  showingResult.value = true
  isSubmitting.value = false
  
  if (isCorrect) {
    oxygenLevel.value = Math.min(100, oxygenLevel.value + 20)
    // Auto advance to next puzzle after 2 seconds if correct
    setTimeout(() => {
      nextPuzzle()
    }, 2000)
  } else {
    oxygenLevel.value = Math.max(0, oxygenLevel.value - 30)
    
    if (oxygenLevel.value <= 0) {
      setTimeout(() => {
        gameState.value = 'gameOver'
      }, 2000)
      return
    }
  }
}

const nextPuzzle = () => {
  currentPuzzleIndex.value++
  
  if (currentPuzzleIndex.value >= puzzles.value.length) {
    gameState.value = 'victory'
    return
  }
  
  selectedAnswer.value = ''
  showingResult.value = false
  startTimer()
}

const retryPuzzle = () => {
  selectedAnswer.value = ''
  showingResult.value = false
  startTimer()
}

const resetGame = () => {
  gameState.value = 'welcome'
  currentPuzzleIndex.value = 0
  selectedAnswer.value = ''
  showingResult.value = false
  lastAnswerCorrect.value = false
  oxygenLevel.value = 100
  timeLeft.value = 30
  isEmergency.value = false
  stopTimer()
  stopOxygenDepletion()
  stopBackgroundAudio()
}

const startTimer = () => {
  if (!currentPuzzle.value.timeLimit) return
  
  timeLeft.value = currentPuzzle.value.timeLimit
  
  timerInterval = setInterval(() => {
    timeLeft.value--
    
    if (timeLeft.value <= 0) {
      stopTimer()
      if (!showingResult.value) {
        // Auto-fail when time runs out
        lastAnswerCorrect.value = false
        showingResult.value = true
        oxygenLevel.value = Math.max(0, oxygenLevel.value - 40)
        
        if (oxygenLevel.value <= 0) {
          setTimeout(() => {
            gameState.value = 'gameOver'
          }, 2000)
        }
      }
    }
  }, 1000)
}

const stopTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

const startOxygenDepletion = () => {
  oxygenInterval = setInterval(() => {
    if (gameState.value === 'playing' && !showingResult.value) {
      oxygenLevel.value = Math.max(0, oxygenLevel.value - 0.5)
      
      if (oxygenLevel.value <= 0) {
        gameState.value = 'gameOver'
      }
    }
  }, 1000)
}

const stopOxygenDepletion = () => {
  if (oxygenInterval) {
    clearInterval(oxygenInterval)
    oxygenInterval = null
  }
}

const startBackgroundAudio = () => {
  if (backgroundAudio.value) {
    backgroundAudio.value.volume = 0.3
    backgroundAudio.value.play().catch(() => {})
  }
}

const stopBackgroundAudio = () => {
  if (backgroundAudio.value) {
    backgroundAudio.value.pause()
    backgroundAudio.value.currentTime = 0
  }
}

// Lifecycle
onUnmounted(() => {
  stopTimer()
  stopOxygenDepletion()
  stopBackgroundAudio()
})

// Watch for game state changes
watch(gameState, (newState) => {
  if (newState === 'victory') {
    stopOxygenDepletion()
    oxygenLevel.value = 100
    isEmergency.value = false
    stopBackgroundAudio()
  } else if (newState === 'gameOver') {
    stopOxygenDepletion()
    isEmergency.value = false
    stopBackgroundAudio()
  }
})

definePageMeta({
  layout: 'empty'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

:root {
  --brand-primary: #27628C;
  --brand-secondary: #1e4a6b;
}

.bg-brand-primary {
  background-color: var(--brand-primary);
}

.bg-brand-secondary {
  background-color: var(--brand-secondary);
}

.from-brand-secondary {
  --tw-gradient-from: var(--brand-secondary);
  --tw-gradient-to: rgb(30 74 107 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-brand-secondary {
  --tw-gradient-to: var(--brand-secondary);
}

.flicker {
  animation: flicker 0.5s infinite alternate;
}

@keyframes flicker {
  0% { opacity: 1; }
  100% { opacity: 0.7; }
}

.siren {
  animation: siren 2s infinite;
}

@keyframes siren {
  0% { transform: rotate(0deg); opacity: 0.8; }
  25% { transform: rotate(90deg); opacity: 1; }
  50% { transform: rotate(180deg); opacity: 0.8; }
  75% { transform: rotate(270deg); opacity: 1; }
  100% { transform: rotate(360deg); opacity: 0.8; }
}

.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
}

.particle-1 {
  width: 4px;
  height: 4px;
  top: 20%;
  left: 10%;
  animation: float 6s infinite ease-in-out;
}

.particle-2 {
  width: 6px;
  height: 6px;
  top: 60%;
  right: 15%;
  animation: float 8s infinite ease-in-out reverse;
}

.particle-3 {
  width: 3px;
  height: 3px;
  bottom: 30%;
  left: 70%;
  animation: float 5s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-5px); }
  75% { transform: translateY(-30px) translateX(15px); }
}

/* Mobile responsive improvements */
@media (max-width: 640px) {
  .text-3xl { font-size: 1.875rem; }
  .text-4xl { font-size: 2.25rem; }
  .text-6xl { font-size: 3rem; }
  .text-8xl { font-size: 4rem; }
}

/* Custom backdrop blur for better mobile performance */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>
