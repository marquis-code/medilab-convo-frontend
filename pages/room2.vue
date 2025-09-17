<template>
  <div class="min-h-screen bg-black text-white overflow-hidden relative select-none">
    <!-- Dynamic Background with Particles -->
    <div class="absolute inset-0">
      <div class="stars"></div>
      <div class="particles" v-if="gameState === 'playing'"></div>
      <div 
        :class="[
          'absolute inset-0 transition-all duration-1000',
          gameState === 'welcome' ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900' :
          gameState === 'playing' ? 'bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900' :
          gameState === 'victory' ? 'bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900' :
          'bg-gradient-to-br from-gray-900 via-red-900 to-black'
        ]"
      ></div>
      
      <!-- Emergency Effects -->
      <div v-if="gameState === 'playing'" class="absolute inset-0">
        <div class="emergency-strobe opacity-20"></div>
        <div class="scanner-line"></div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div v-for="n in 15" :key="`float-${n}`" 
           :class="`floating-orb floating-orb-${n}`"
           :style="{ 
             '--delay': `${n * 0.5}s`, 
             '--duration': `${8 + n}s`,
             '--size': `${Math.random() * 20 + 5}px`
           }">
      </div>
    </div>

    <!-- Neural Network Background -->
    <div v-if="gameState === 'playing'" class="neural-network"></div>

    <!-- Holographic UI Container -->
    <div class="relative z-20 min-h-screen flex items-center justify-center p-4">
      
      <!-- Status HUD -->
      <div v-if="gameState === 'playing'" class="fixed top-0 left-0 right-0 z-30 p-4">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
          
          <!-- Oxygen Meter with 3D Effect -->
          <div class="holo-panel">
            <div class="text-xs text-cyan-400 mb-2 font-mono tracking-wider">◊ OXYGEN MATRIX ◊</div>
            <div class="relative">
              <div class="w-48 h-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full border-2 border-cyan-500 overflow-hidden shadow-inner">
                <div 
                  :class="[
                    'h-full transition-all duration-500 shadow-lg',
                    oxygenLevel > 60 ? 'bg-gradient-to-r from-cyan-400 to-green-500 shadow-green-500/50' :
                    oxygenLevel > 30 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-orange-500/50' :
                    'bg-gradient-to-r from-red-500 to-pink-600 shadow-red-500/50 animate-pulse'
                  ]"
                  :style="{ width: `${oxygenLevel}%` }"
                >
                  <div class="h-full bg-gradient-to-b from-white/30 to-transparent"></div>
                </div>
                <!-- Scan Line Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent scan-line"></div>
              </div>
              <div class="text-xs mt-2 font-mono" 
                   :class="oxygenLevel < 30 ? 'text-red-400 animate-pulse' : 'text-cyan-400'">
                {{ Math.round(oxygenLevel) }}% REMAINING
              </div>
            </div>
          </div>

          <!-- Timer with Holographic Effect -->
          <div v-if="showTimer && timeLeft > 0" class="holo-panel">
            <div class="text-xs text-amber-400 mb-2 font-mono tracking-wider">◊ TEMPORAL MATRIX ◊</div>
            <div class="relative">
              <div 
                :class="[
                  'text-3xl font-bold font-mono tabular-nums',
                  timeLeft <= 5 ? 'text-red-400 animate-bounce' : 
                  timeLeft <= 10 ? 'text-orange-400 animate-pulse' : 
                  'text-amber-400'
                ]"
              >
                {{ String(timeLeft).padStart(2, '0') }}
              </div>
              <div class="text-xs text-gray-400 font-mono">SECONDS</div>
              <!-- Circular Progress -->
              <svg class="absolute -inset-2 w-16 h-16" style="transform: rotate(-90deg)">
                <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="2" 
                        fill="none" class="text-gray-700"/>
                <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="2" 
                        fill="none" class="text-amber-400 transition-all duration-1000"
                        :stroke-dasharray="`${2 * Math.PI * 28}`"
                        :stroke-dashoffset="`${2 * Math.PI * 28 * (1 - timeLeft / (currentPuzzle?.timeLimit || 30))}`"/>
              </svg>
            </div>
          </div>

          <!-- System Status -->
          <div class="holo-panel">
            <div class="text-xs text-purple-400 mb-2 font-mono tracking-wider">◊ SYS STATUS ◊</div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
              <span class="text-red-400 text-sm font-mono">LOCKDOWN</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Game Interface -->
      <div class="w-full max-w-5xl mx-auto mt-16 sm:mt-0">
        
        <!-- Welcome Screen -->
        <div v-if="gameState === 'welcome'" class="text-center space-y-8 animate-fade-in">
          <!-- Logo with 3D Effect -->
          <div class="relative mb-12">
            <h1 class="text-6xl sm:text-8xl lg:text-9xl font-black mb-6 relative">
              <span class="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                MEDLAB
              </span>
              <br>
              <span class="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
                CONVO
              </span>
            </h1>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse"></div>
          </div>

          <!-- Subtitle with Typewriter Effect -->
          <div class="text-2xl sm:text-4xl font-bold text-amber-400 mb-8">
            <span class="typewriter">QUANTUM ESCAPE PROTOCOL</span>
          </div>

          <!-- Mission Brief -->
          <div class="glass-panel max-w-2xl mx-auto p-8 mb-12">
            <div class="space-y-4 text-left">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <span class="text-red-400 font-bold text-xl">◊ CRITICAL ALERT ◊</span>
              </div>
              
              <p class="text-gray-300 leading-relaxed">
                The MedLabConvo research facility has entered 
                <span class="text-red-400 font-bold">QUANTUM LOCKDOWN</span>. 
                Reality distortions detected. Oxygen matrices failing.
              </p>
              
              <p class="text-cyan-400 leading-relaxed">
                Navigate through <span class="text-amber-400 font-bold">5 DIMENSIONAL PUZZLES</span> 
                to restore system integrity and escape before molecular cohesion breaks down.
              </p>
              
              <div class="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/50">
                <p class="text-purple-300 text-sm">
                  ⚡ Each puzzle solved restores oxygen matrices<br>
                  ⚠️ Wrong answers accelerate system decay<br>
                  ⏱️ Time distortions increase with each level
                </p>
              </div>
            </div>
          </div>

          <!-- Start Button -->
          <button 
            @click="startGame"
            class="group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div class="relative px-12 py-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl border-2 border-white/20 transform transition-all duration-300 group-hover:scale-105 group-active:scale-95">
              <span class="text-2xl font-bold tracking-wider">INITIATE PROTOCOL</span>
              <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          </button>
        </div>

        <!-- Game Screen -->
        <div v-else-if="gameState === 'playing'" class="space-y-8 animate-fade-in">
          
          <!-- Room Header with Holographic Effect -->
          <div class="text-center mb-12">
            <div class="relative inline-block">
              <h2 class="text-3xl sm:text-5xl font-bold mb-4">
                <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {{ currentPuzzle.title }}
                </span>
              </h2>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
            </div>
            
            <div class="flex justify-center items-center gap-4 mt-4">
              <div class="flex gap-2">
                <div v-for="i in puzzles.length" :key="i"
                     :class="[
                       'w-3 h-3 rounded-full transition-all duration-500',
                       i <= currentPuzzleIndex + 1 ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-gray-600'
                     ]">
                </div>
              </div>
              <span class="text-gray-400 text-sm font-mono">
                LEVEL {{ currentPuzzleIndex + 1 }} / {{ puzzles.length }}
              </span>
            </div>
          </div>

          <!-- Main Puzzle Interface -->
          <div class="glass-panel-large relative overflow-hidden">
            
            <!-- Room Description with Immersive Design -->
            <div v-if="currentPuzzle.description" class="mb-8">
              <div class="relative p-6 rounded-2xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-purple-500/30">
                <div class="absolute top-4 left-4">
                  <div class="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                </div>
                <p class="text-purple-200 leading-relaxed pl-6 italic">
                  {{ currentPuzzle.description }}
                </p>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 rounded-2xl"></div>
              </div>
            </div>

            <!-- Question Display -->
            <div class="mb-10">
              <div class="relative">
                <div class="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                <h3 class="text-xl sm:text-2xl font-bold text-amber-400 leading-relaxed pl-8">
                  {{ currentPuzzle.question }}
                </h3>
              </div>
            </div>

            <!-- Answer Interface -->
            <div v-if="!showingResult" class="space-y-6">
              
              <!-- Multiple Choice Options -->
              <div v-if="currentPuzzle.type === 'select'" class="grid gap-4">
                <button
                  v-for="(option, index) in currentPuzzle.options"
                  :key="option"
                  @click="selectAnswer(option)"
                  :class="[
                    'group relative overflow-hidden p-6 rounded-2xl border-2 transition-all duration-300 text-left',
                    selectedAnswer === option 
                      ? 'border-cyan-500 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transform scale-105' 
                      : 'border-gray-600 bg-gradient-to-r from-gray-800/50 to-gray-900/50 hover:border-gray-400 hover:scale-102'
                  ]"
                  :style="{ animationDelay: `${index * 100}ms` }"
                >
                  <div class="flex items-center gap-4">
                    <div :class="[
                      'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300',
                      selectedAnswer === option ? 'border-cyan-400 bg-cyan-400' : 'border-gray-500'
                    ]">
                      <div v-if="selectedAnswer === option" class="w-3 h-3 bg-white rounded-full animate-scale-in"></div>
                    </div>
                    <span class="text-lg">{{ option }}</span>
                  </div>
                  
                  <!-- Hover Effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>
              
              <!-- Text Input -->
              <div v-else class="relative">
                <input
                  v-model="selectedAnswer"
                  type="text"
                  :placeholder="currentPuzzle.placeholder || 'Enter your answer...'"
                  class="w-full p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-2 border-gray-600 rounded-2xl text-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  @keyup.enter="submitAnswer"
                  :disabled="isSubmitting"
                />
                <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div class="w-2 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div v-if="!showingResult" class="text-center mt-8">
              <button
                @click="submitAnswer"
                :disabled="!selectedAnswer || isSubmitting"
                :class="[
                  'group relative overflow-hidden px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform',
                  selectedAnswer && !isSubmitting
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-2 border-green-400 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30'
                    : 'bg-gray-600 text-gray-400 border-2 border-gray-500 cursor-not-allowed'
                ]"
              >
                <span class="relative z-10">
                  {{ isSubmitting ? 'PROCESSING...' : 'SUBMIT ANSWER' }}
                </span>
                <div v-if="selectedAnswer && !isSubmitting" 
                     class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                </div>
              </button>
            </div>

            <!-- Result Display -->
            <div v-if="showingResult" class="text-center space-y-8">
              <div v-if="lastAnswerCorrect" class="space-y-6">
                <div class="text-8xl animate-bounce">✨</div>
                <h3 class="text-4xl font-bold text-green-400 animate-pulse">PROTOCOL ACCEPTED</h3>
                <div class="glass-panel max-w-md mx-auto p-6">
                  <p class="text-gray-300 mb-4">{{ currentPuzzle.correctAnswer }}</p>
                  <div class="text-green-400 flex items-center justify-center gap-2">
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                    Quantum door unlocking...
                  </div>
                </div>
              </div>
              
              <div v-else class="space-y-6">
                <div class="text-8xl animate-shake">⚠️</div>
                <h3 class="text-4xl font-bold text-red-400 animate-pulse">PROTOCOL REJECTED</h3>
                <div class="glass-panel max-w-md mx-auto p-6 border-red-500/50">
                  <p class="text-red-300 mb-4">{{ currentPuzzle.wrongMessage }}</p>
                  <div class="text-red-400 flex items-center justify-center gap-2 animate-pulse">
                    <div class="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
                    Oxygen matrices destabilizing...
                  </div>
                </div>
              </div>
              
              <!-- Action Button -->
              <button
                @click="lastAnswerCorrect ? nextPuzzle() : retryPuzzle()"
                :class="[
                  'group relative overflow-hidden px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105',
                  lastAnswerCorrect 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-2 border-blue-400 hover:shadow-lg hover:shadow-blue-500/30'
                    : 'bg-gradient-to-r from-red-500 to-orange-600 text-white border-2 border-red-400 hover:shadow-lg hover:shadow-red-500/30'
                ]"
              >
                <span class="relative z-10">
                  {{ lastAnswerCorrect ? 'ADVANCE' : 'RETRY PROTOCOL' }}
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Victory Screen -->
        <div v-else-if="gameState === 'victory'" class="text-center space-y-8 animate-fade-in">
          <div class="relative">
            <div class="text-9xl mb-8 animate-float">🌟</div>
            <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-20 blur-3xl animate-pulse"></div>
          </div>
          
          <h1 class="text-6xl sm:text-8xl font-black mb-8">
            <span class="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              QUANTUM BREACH
            </span>
          </h1>
          
          <div class="glass-panel max-w-2xl mx-auto p-8">
            <div class="space-y-4">
              <p class="text-2xl text-green-400 font-bold">PROTOCOL COMPLETE</p>
              <p class="text-gray-300 leading-relaxed">
                Dimensional barriers shattered. Reality matrices restored. 
                You've successfully navigated the quantum maze and escaped 
                the MedLabConvo facility.
              </p>
              <div class="flex justify-center items-center gap-4 mt-6">
                <div class="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <span class="text-green-400 font-mono">ALL SYSTEMS NOMINAL</span>
              </div>
            </div>
          </div>
          
          <button 
            @click="resetGame"
            class="group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div class="relative px-12 py-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl border-2 border-white/20 transform transition-all duration-300 group-hover:scale-105">
              <span class="text-2xl font-bold">REINITIALIZE PROTOCOL</span>
            </div>
          </button>
        </div>

        <!-- Game Over Screen -->
        <div v-else-if="gameState === 'gameOver'" class="text-center space-y-8 animate-fade-in">
          <div class="relative">
            <div class="text-9xl mb-8 animate-shake">💀</div>
            <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-3xl animate-pulse"></div>
          </div>
          
          <h1 class="text-6xl sm:text-8xl font-black mb-8">
            <span class="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient-x">
              SYSTEM FAILURE
            </span>
          </h1>
          
          <div class="glass-panel max-w-2xl mx-auto p-8 border-red-500/50">
            <div class="space-y-4">
              <p class="text-2xl text-red-400 font-bold">QUANTUM COLLAPSE DETECTED</p>
              <p class="text-gray-300 leading-relaxed">
                Molecular cohesion failed. Oxygen matrices depleted. 
                The facility's quantum fields have consumed your essence.
              </p>
              <div class="flex justify-center items-center gap-4 mt-6">
                <div class="w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
                <span class="text-red-400 font-mono">LIFE SUPPORT: TERMINATED</span>
              </div>
            </div>
          </div>
          
          <button 
            @click="resetGame"
            class="group relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div class="relative px-12 py-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl border-2 border-white/20 transform transition-all duration-300 group-hover:scale-105">
              <span class="text-2xl font-bold">QUANTUM RESET</span>
            </div>
          </button>
        </div>
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
let timerInterval: NodeJS.Timeout | null = null
let oxygenInterval: NodeJS.Timeout | null = null

// Computed
const showTimer = computed(() => 
  gameState.value === 'playing' && 
  currentPuzzle.value.timeLimit && 
  !showingResult.value
)

// Enhanced Puzzles with More Creative Elements
const puzzles = ref<Puzzle[]>([
  {
    title: 'GENESIS PROTOCOL',
    description: 'You stand before a massive quantum door. Ancient neural networks hum with power. The facility\'s founding matrix awaits verification.',
    question: 'The quantum architects who forged this reality - name the trinity of creators who founded MedLabConvo.',
    correctAnswer: 'Gabriel Oke, Odinaka Obeta and Emmanuel Awa',
    wrongMessage: 'Quantum signature rejected! Reality distortion field activated!',
    type: 'select',
    options: [
      'Gabriel Oke, Odinaka Obeta and Emmanuel Awa',
      'John Smith, Mary Johnson and David Wilson', 
      'Sarah Connor, Kyle Reese and John Connor',
      'Tony Stark, Bruce Wayne and Peter Parker'
    ],
    timeLimit: 35
  },
  {
    title: 'VIRAL GENESIS CHAMBER',
    description: 'You enter a crystalline chamber where data streams flow like liquid light. The first viral echo that shaped destiny pulses in the quantum field.',
    question: 'In the digital realm, one creation sparked the first viral awakening, establishing dominance among the youth in the MLS dimension. What was this legendary genesis?',
    correctAnswer: 'UTME Guide',
    wrongMessage: 'Viral matrix corrupted! Toxic data streams flooding the chamber!',
    type: 'select',
    options: [
      'UTME Guide',
      'Social Media Revolution',
      'Laboratory Mastery Series',
      'Student Empowerment Portal'
    ],
    timeLimit: 30
  },
  {
    title: 'PROGRAM NEXUS CORE',
    description: 'Reality fractures around you as you approach the program nexus. Holographic displays show the foundation of all future innovations.',
    question: 'From the quantum program matrix, identify the prime series - the first algorithmic pathway that opened dimensional possibilities.',
    correctAnswer: 'Forging a career path',
    wrongMessage: 'Program sequence invalid! Quantum loops destabilizing!',
    type: 'text',
    placeholder: 'Enter the foundational program series...',
    timeLimit: 25
  },
  {
    title: 'TEMPORAL CONVERGENCE',
    description: 'Time itself bends in this pristine temporal chamber. The chronological matrix holds the key to when dimensions first aligned.',
    question: 'In which temporal coordinate did the first MLSCD dimensional convergence occur?',
    correctAnswer: '2021',
    wrongMessage: 'Temporal paradox detected! Timeline fracturing!',
    type: 'select',
    options: ['2019', '2020', '2021', '2022'],
    timeLimit: 20
  },
  {
    title: 'QUANTUM CAPACITY MATRIX',
    description: 'This is the final quantum barrier. Reality itself hangs in balance. The ultimate capacity enhancement protocol awaits your recognition.',
    question: 'The quantum capacity enhancement matrix - born in 2021, designed to elevate students and professionals across all MLS dimensions. Speak its true name to shatter the final barrier.',
    correctAnswer: 'The Capacity Mentornet',
    wrongMessage: 'Final protocol breach! Quantum reality collapsing!',
    type: 'text',
    placeholder: 'Enter the quantum program designation...',
    timeLimit: 15
  }
])

const currentPuzzle = computed(() => puzzles.value[currentPuzzleIndex.value])

// Enhanced Methods
const startGame = async () => {
  gameState.value = 'playing'
  oxygenLevel.value = 100
  await new Promise(resolve => setTimeout(resolve, 500))
  startTimer()
  startOxygenDepletion()
}

const selectAnswer = (answer: string) => {
  selectedAnswer.value = answer
  // Add haptic feedback for mobile
  if ('vibrate' in navigator) {
    navigator.vibrate(50)
  }
}

const submitAnswer = async () => {
  if (!selectedAnswer.value || isSubmitting.value) return
  
  isSubmitting.value = true
  
  // Enhanced processing animation
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  stopTimer()
  
  const isCorrect = selectedAnswer.value.toLowerCase().trim() === 
                   currentPuzzle.value.correctAnswer.toLowerCase().trim()
  
  lastAnswerCorrect.value = isCorrect
  showingResult.value = true
  isSubmitting.value = false
  
  // Enhanced feedback
  if (isCorrect) {
    oxygenLevel.value = Math.min(100, oxygenLevel.value + 25)
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100])
    }
  } else {
    oxygenLevel.value = Math.max(0, oxygenLevel.value - 35)
    if ('vibrate' in navigator) {
      navigator.vibrate(200)
    }
    
    if (oxygenLevel.value <= 0) {
      setTimeout(() => {
        gameState.value = 'gameOver'
      }, 3000)
      return
    }
  }
}

const nextPuzzle = async () => {
  currentPuzzleIndex.value++
  
  if (currentPuzzleIndex.value >= puzzles.value.length) {
    gameState.value = 'victory'
    stopOxygenDepletion()
    return
  }
  
  selectedAnswer.value = ''
  showingResult.value = false
  await new Promise(resolve => setTimeout(resolve, 800))
  startTimer()
}

const retryPuzzle = async () => {
  selectedAnswer.value = ''
  showingResult.value = false
  await new Promise(resolve => setTimeout(resolve, 500))
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
  stopTimer()
  stopOxygenDepletion()
}

const startTimer = () => {
  if (!currentPuzzle.value.timeLimit) return
  
  timeLeft.value = currentPuzzle.value.timeLimit
  
  timerInterval = setInterval(() => {
    timeLeft.value--
    
    // Add tension effects
    if (timeLeft.value === 10 && 'vibrate' in navigator) {
      navigator.vibrate(100)
    }
    
    if (timeLeft.value <= 0) {
      stopTimer()
      if (!showingResult.value) {
        // Auto-fail with enhanced effects
        lastAnswerCorrect.value = false
        showingResult.value = true
        oxygenLevel.value = Math.max(0, oxygenLevel.value - 45)
        
        if ('vibrate' in navigator) {
          navigator.vibrate([200, 100, 200])
        }
        
        if (oxygenLevel.value <= 0) {
          setTimeout(() => {
            gameState.value = 'gameOver'
          }, 3000)
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
      oxygenLevel.value = Math.max(0, oxygenLevel.value - 0.3)
      
      if (oxygenLevel.value <= 0) {
        gameState.value = 'gameOver'
        if ('vibrate' in navigator) {
          navigator.vibrate([300, 100, 300, 100, 300])
        }
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

// Enhanced watchers
watch(gameState, (newState) => {
  if (newState === 'victory') {
    stopOxygenDepletion()
    oxygenLevel.value = 100
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }
  } else if (newState === 'gameOver') {
    stopOxygenDepletion()
  }
})

watch(oxygenLevel, (newLevel) => {
  // Critical oxygen warning
  if (newLevel <= 20 && newLevel > 0 && gameState.value === 'playing') {
    if ('vibrate' in navigator) {
      navigator.vibrate(50)
    }
  }
})

definePageMeta({
    layout: 'empty'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=JetBrains+Mono:wght@400;600;800&display=swap');

/* Enhanced Base Styles */
* {
  font-family: 'Rajdhani', 'JetBrains Mono', monospace;
}

/* Particle Effects */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(2px 2px at 20px 30px, #ff6b6b, transparent),
    radial-gradient(2px 2px at 40px 70px, #4ecdc4, transparent),
    radial-gradient(1px 1px at 90px 40px, #45b7d1, transparent),
    radial-gradient(1px 1px at 130px 80px, #f9ca24, transparent),
    radial-gradient(2px 2px at 160px 30px, #f0932b, transparent);
  background-repeat: repeat;
  background-size: 250px 250px;
  animation: particleFloat 20s linear infinite;
  opacity: 0.4;
}

@keyframes particleFloat {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}

/* Stars Background */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
}

.stars::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(2px 2px at 100px 50px, white, transparent),
    radial-gradient(2px 2px at 200px 150px, white, transparent),
    radial-gradient(1px 1px at 300px 75px, white, transparent),
    radial-gradient(1px 1px at 400px 200px, white, transparent),
    radial-gradient(2px 2px at 500px 100px, white, transparent);
  animation: twinkle 4s ease-in-out infinite alternate;
  opacity: 0.8;
}

@keyframes twinkle {
  0% { opacity: 0.8; }
  100% { opacity: 0.3; }
}

/* Emergency Effects */
.emergency-strobe {
  animation: emergencyStrobe 1s infinite;
  background: radial-gradient(ellipse at center, rgba(255, 0, 0, 0.3) 0%, transparent 70%);
}

@keyframes emergencyStrobe {
  0%, 50% { opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 0.5; }
  100% { opacity: 0; }
}

.scanner-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: scannerMove 3s linear infinite;
}

@keyframes scannerMove {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

/* Neural Network */
.neural-network {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.05) 50%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(255, 0, 255, 0.05) 50%, transparent 70%);
  background-size: 100px 100px;
  animation: neuralPulse 8s ease-in-out infinite;
}

@keyframes neuralPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

/* Floating Orbs */
.floating-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(0, 255, 255, 0.3));
  filter: blur(1px);
  animation: floatOrb var(--duration) ease-in-out infinite var(--delay);
}

.floating-orb-1 { top: 10%; left: 10%; width: var(--size); height: var(--size); }
.floating-orb-2 { top: 20%; left: 80%; width: var(--size); height: var(--size); }
.floating-orb-3 { top: 60%; left: 15%; width: var(--size); height: var(--size); }
.floating-orb-4 { top: 80%; left: 70%; width: var(--size); height: var(--size); }
.floating-orb-5 { top: 30%; left: 50%; width: var(--size); height: var(--size); }
.floating-orb-6 { top: 70%; left: 90%; width: var(--size); height: var(--size); }
.floating-orb-7 { top: 40%; left: 25%; width: var(--size); height: var(--size); }
.floating-orb-8 { top: 85%; left: 40%; width: var(--size); height: var(--size); }
.floating-orb-9 { top: 15%; left: 60%; width: var(--size); height: var(--size); }
.floating-orb-10 { top: 50%; left: 5%; width: var(--size); height: var(--size); }
.floating-orb-11 { top: 25%; left: 95%; width: var(--size); height: var(--size); }
.floating-orb-12 { top: 75%; left: 20%; width: var(--size); height: var(--size); }
.floating-orb-13 { top: 35%; left: 75%; width: var(--size); height: var(--size); }
.floating-orb-14 { top: 90%; left: 55%; width: var(--size); height: var(--size); }
.floating-orb-15 { top: 5%; left: 35%; width: var(--size); height: var(--size); }

@keyframes floatOrb {
  0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
  50% { transform: translateY(0px) translateX(20px) rotate(180deg); }
  75% { transform: translateY(20px) translateX(5px) rotate(270deg); }
}

/* Glass Panel Effects */
.holo-panel {
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(0, 255, 255, 0.5);
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.holo-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
  animation: hologramScan 3s infinite;
}

@keyframes hologramScan {
  0% { left: -100%; }
  100% { left: 100%; }
}

.glass-panel {
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.glass-panel::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  animation: glassShine 4s infinite;
}

@keyframes glassShine {
  0% { left: -100%; }
  100% { left: 100%; }
}

.glass-panel-large {
  @apply glass-panel p-8;
  border: 2px solid rgba(0, 255, 255, 0.3);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(0, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Scan Line Effect */
.scan-line {
  animation: scanLine 2s linear infinite;
}

@keyframes scanLine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Enhanced Animations */
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradientX 3s ease infinite;
}

@keyframes gradientX {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.animate-float {
  animation: floatAnimation 3s ease-in-out infinite;
}

@keyframes floatAnimation {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.animate-shake {
  animation: shakeAnimation 0.5s ease-in-out infinite;
}

@keyframes shakeAnimation {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px) rotate(-2deg); }
  75% { transform: translateX(5px) rotate(2deg); }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}

@keyframes scaleIn {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}

/* Typewriter Effect */
.typewriter {
  overflow: hidden;
  border-right: 3px solid #fbbf24;
  white-space: nowrap;
  animation: 
    typing 3s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #fbbf24; }
}

/* Responsive Enhancements */
@media (max-width: 768px) {
  .floating-orb {
    display: none;
  }
  
  .particles {
    opacity: 0.2;
  }
  
  .neural-network {
    opacity: 0.1;
  }
  
  .holo-panel {
    padding: 0.75rem;
    font-size: 0.875rem;
  }
  
  .glass-panel-large {
    padding: 1.5rem;
  }
}

/* High Performance Mode for Mobile */
@media (max-width: 480px) {
  .emergency-strobe,
  .scanner-line,
  .neural-network {
    display: none;
  }
  
  .particles {
    display: none;
  }
  
  .stars::before {
    animation: none;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .floating-orb,
  .particles,
  .neural-network {
    display: none;
  }
}

/* Touch Enhancements */
@media (hover: none) and (pointer: coarse) {
  button {
    min-height: 48px;
    min-width: 48px;
  }
  
  input {
    min-height: 48px;
  }
  
  .glass-panel-large {
    padding: 2rem 1rem;
  }
}
</style>