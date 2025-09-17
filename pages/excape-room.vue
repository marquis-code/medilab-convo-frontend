<template>
  <div class="min-h-screen bg-gray-900 text-white font-mono overflow-hidden relative">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 opacity-50"></div>
    <div v-if="gameState !== 'welcome'" :class="['absolute inset-0 bg-red-500 opacity-10', { 'flicker': isEmergency }]"></div>
    
    <!-- Siren Light -->
    <div v-if="gameState !== 'welcome'" class="siren absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
    
    <!-- Oxygen Meter -->
    <div v-if="showOxygenMeter" class="absolute top-4 left-4 bg-black/80 p-4 rounded-lg border border-red-500">
      <div class="text-xs text-red-400 mb-2">OXYGEN LEVEL</div>
      <div class="w-32 h-4 bg-gray-800 rounded-full overflow-hidden border">
        <div 
          :class="[
            'h-full transition-all duration-300',
            oxygenLevel > 50 ? 'bg-green-500' : oxygenLevel > 20 ? 'bg-yellow-500' : 'bg-red-500'
          ]"
          :style="{ width: `${oxygenLevel}%` }"
        ></div>
      </div>
      <div class="text-xs mt-1" :class="oxygenLevel < 20 ? 'text-red-400 animate-pulse' : 'text-green-400'">
        {{ oxygenLevel }}%
      </div>
    </div>

    <!-- Timer -->
    <div v-if="showTimer && timeLeft > 0" class="absolute top-4 right-16 bg-black/80 p-4 rounded-lg border border-yellow-500">
      <div class="text-xs text-yellow-400 mb-2">TIME LEFT</div>
      <div class="text-2xl font-bold" :class="timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-yellow-400'">
        {{ timeLeft }}s
      </div>
    </div>

    <!-- Audio Elements -->
    <audio ref="alarmAudio" loop>
      <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAYAjiRzuXceSMFKIHO6+OMORUaWqzs4pNHFA1JnNjv1GcXA"><option value="UTME Guide">UTME Guide</option>
<option value="Career Webinars">Career Webinars</option>
<option value="Student Mentorship">Student Mentorship</option>
</audio>
    <audio ref="successAudio">
      <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAYAjiRzuXceSMFKIHO6+OMORUaWqzs4pNHFA1JnNjv1GcXAy2Vy/LNeSYDL4DN89qOMXMd5RdTmqzq7LQ2WmKazeXceSMGLYTH8N2QQAoNhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAYAjiRzuXceSMFKIHO6+OMORUaWqzs4pNHFA1JnNjv1GcX" type="audio/wav">
    </audio>
    <audio ref="failAudio">
      <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAYAjiRzuXceSMFKIHO6+OMORUaWqzs4pNHFA1JnNjv1GcXAy2Vy/LNeSYDL4DN89qOMXMd5RdTmqzq7LQ2WmKazeXceSMGLYTH8N2QQAoUXrTp66hVFApGn+DyvmAYAjiRzuXceSMFKIHO6+OMORUaWqzs4pNHFA1JnNjv1GcXAy2Vy/LNeSY" type="audio/wav">
    </audio>

    <!-- Game Container -->
    <div class="relative z-10 min-h-screen flex items-center justify-center p-4">
      
      <!-- Welcome Screen -->
      <div v-if="gameState === 'welcome'" class="fade-in text-center max-w-2xl mx-auto">
        <div class="mb-8">
          <h1 class="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            MEDLABCONVO
          </h1>
          <h2 class="text-2xl md:text-3xl font-bold text-red-400 mb-6">ESCAPE ROOM</h2>
          <div class="bg-black/80 p-6 rounded-lg border border-red-500 mb-8">
            <div class="text-sm md:text-base text-gray-300 leading-relaxed">
              <p class="mb-4">⚠️ <span class="text-red-400 font-bold">BIOHAZARD DETECTED</span> ⚠️</p>
              <p class="mb-4">The MedLabConvo research facility is in lockdown. Oxygen levels are critically low.</p>
              <p class="text-yellow-400">Solve the protocols to escape before you suffocate!</p>
            </div>
          </div>
        </div>
        
        <button 
          @click="startGame"
          class="group relative px-8 py-4 text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg border-2 border-red-400 shadow-lg shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
        >
          <span class="relative z-10">BEGIN PROTOCOL</span>
          <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      <!-- Game Screen -->
      <div v-else-if="gameState === 'playing'" class="fade-in w-full max-w-4xl mx-auto">
        
        <!-- Room Header -->
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-4xl font-bold text-red-400 mb-2">
            {{ currentPuzzle.title }}
          </h2>
          <div class="text-sm md:text-base text-gray-400">
            Room {{ currentPuzzleIndex + 1 }} of {{ puzzles.length }}
          </div>
        </div>

        <!-- Room Content -->
        <div class="bg-black/80 border border-red-500 rounded-lg p-6 md:p-8 shadow-2xl">
          
          <!-- Room Description -->
          <div v-if="currentPuzzle.description" class="mb-6 p-4 bg-gray-800/50 rounded-lg border-l-4 border-yellow-500">
            <p class="text-gray-300 leading-relaxed">{{ currentPuzzle.description }}</p>
          </div>

          <!-- Question -->
          <div class="mb-8">
            <h3 class="text-lg md:text-xl font-bold text-yellow-400 mb-4">
              {{ currentPuzzle.question }}
            </h3>
          </div>

          <!-- Answer Input -->
          <div v-if="!showingResult" class="mb-6">
            <div v-if="currentPuzzle.type === 'select'" class="space-y-3">
              <button
                v-for="option in currentPuzzle.options"
                :key="option"
                @click="selectAnswer(option)"
                :class="[
                  'w-full p-4 text-left rounded-lg border-2 transition-all duration-300',
                  selectedAnswer === option 
                    ? 'border-yellow-500 bg-yellow-500/20 text-yellow-300' 
                    : 'border-gray-600 bg-gray-800 hover:border-gray-500 hover:bg-gray-700'
                ]"
              >
                {{ option }}
              </button>
            </div>
            
            <div v-else>
              <input
                v-model="selectedAnswer"
                type="text"
                :placeholder="currentPuzzle.placeholder || 'Enter your answer...'"
                class="w-full p-4 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                @keyup.enter="submitAnswer"
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <div v-if="!showingResult" class="text-center">
            <button
              @click="submitAnswer"
              :disabled="!selectedAnswer || isSubmitting"
              :class="[
                'px-8 py-3 font-bold rounded-lg transition-all duration-300 transform',
                selectedAnswer && !isSubmitting
                  ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-2 border-green-400 hover:scale-105 shadow-lg shadow-green-500/30'
                  : 'bg-gray-600 text-gray-400 border-2 border-gray-500 cursor-not-allowed'
              ]"
            >
              {{ isSubmitting ? 'PROCESSING...' : 'SUBMIT ANSWER' }}
            </button>
          </div>

          <!-- Result Display -->
          <div v-if="showingResult" class="text-center">
            <div v-if="lastAnswerCorrect" class="mb-6">
              <div class="text-6xl mb-4">✅</div>
              <h3 class="text-2xl font-bold text-green-400 mb-2">CORRECT!</h3>
              <p class="text-gray-300 mb-4">{{ currentPuzzle.correctAnswer }}</p>
              <div class="text-green-400">🚪 Door unlocking...</div>
            </div>
            
            <div v-else class="mb-6">
              <div class="text-6xl mb-4">❌</div>
              <h3 class="text-2xl font-bold text-red-400 mb-2">WRONG ANSWER!</h3>
              <p class="text-red-300 mb-4">{{ currentPuzzle.wrongMessage }}</p>
              <div class="text-red-400 animate-pulse">⚠️ Oxygen depleting rapidly...</div>
            </div>
            
            <button
              v-if="lastAnswerCorrect"
              @click="nextPuzzle"
              class="px-8 py-3 font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg border-2 border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              CONTINUE
            </button>
            
            <button
              v-else
              @click="retryPuzzle"
              class="px-8 py-3 font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-lg border-2 border-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30"
            >
              TRY AGAIN
            </button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="mt-8 max-w-md mx-auto">
          <div class="text-sm text-gray-400 mb-2">Progress</div>
          <div class="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
            <div 
              class="h-full bg-gradient-to-r from-yellow-500 to-green-500 rounded-full transition-all duration-500"
              :style="{ width: `${(currentPuzzleIndex / puzzles.length) * 100}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Victory Screen -->
      <div v-else-if="gameState === 'victory'" class="fade-in text-center max-w-2xl mx-auto">
        <div class="mb-8">
          <div class="text-8xl mb-6 animate-bounce">🎉</div>
          <h1 class="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            ESCAPED!
          </h1>
          <div class="bg-black/80 p-6 rounded-lg border border-green-500 mb-8">
            <p class="text-lg text-gray-300 leading-relaxed">
              🎊 Congratulations! You've successfully escaped the MedLabConvo facility!
            </p>
            <p class="text-green-400 mt-4 font-bold">
              All protocols completed. Oxygen levels restored. You are now safe!
            </p>
          </div>
        </div>
        
        <button 
          @click="resetGame"
          class="px-8 py-4 text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-lg border-2 border-green-400 shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
        >
          PLAY AGAIN
        </button>
      </div>

      <!-- Game Over Screen -->
      <div v-else-if="gameState === 'gameOver'" class="fade-in text-center max-w-2xl mx-auto">
        <div class="mb-8">
          <div class="text-8xl mb-6">💀</div>
          <h1 class="text-4xl md:text-6xl font-black mb-4 text-red-500">
            GAME OVER
          </h1>
          <div class="bg-black/80 p-6 rounded-lg border border-red-500 mb-8">
            <p class="text-lg text-gray-300 leading-relaxed mb-4">
              ⚰️ Oxygen depleted. Protocol failed.
            </p>
            <p class="text-red-400">
              You have suffocated in the MedLabConvo facility.
            </p>
          </div>
        </div>
        
        <button 
          @click="resetGame"
          class="px-8 py-4 text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg border-2 border-red-400 shadow-lg shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
        >
          TRY AGAIN
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
const alarmAudio = ref<HTMLAudioElement>()
const successAudio = ref<HTMLAudioElement>()
const failAudio = ref<HTMLAudioElement>()

// Computed
const showOxygenMeter = computed(() => gameState.value === 'playing')
const showTimer = computed(() => gameState.value === 'playing' && currentPuzzle.value.timeLimit && !showingResult.value)

// Puzzles Data
const puzzles = ref<Puzzle[]>([
  {
    title: 'MedLabConvo Origins',
    description: 'A heavy metal door blocks your path. Ancient mechanisms click and whir as biometric scanners activate.',
    question: 'Who founded MedLabConvo?',
    correctAnswer: 'Gabriel Oke, Odinaka Obeta and Emmanuel Awa',
    wrongMessage: 'Door seals shut! Toxic gas fills the chamber!',
    type: 'select',
    options: [
      'Gabriel Oke, Odinaka Obeta and Emmanuel Awa',
      'John Smith, Mary Johnson and David Wilson',
      'Sarah Connor, Kyle Reese and John Connor',
      'Tony Stark, Bruce Wayne and Clark Kent'
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
}

const selectAnswer = (answer: string) => {
  selectedAnswer.value = answer
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
    successAudio.value?.play().catch(() => {})
  } else {
    oxygenLevel.value = Math.max(0, oxygenLevel.value - 30)
    failAudio.value?.play().catch(() => {})
    
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

// Lifecycle
onUnmounted(() => {
  stopTimer()
  stopOxygenDepletion()
})

// Watch for game state changes
watch(gameState, (newState) => {
  if (newState === 'victory') {
    stopOxygenDepletion()
    oxygenLevel.value = 100
    isEmergency.value = false
  } else if (newState === 'gameOver') {
    stopOxygenDepletion()
    isEmergency.value = false
  }
})

definePageMeta({
    layout: 'empty'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

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
</style>