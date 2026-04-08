<template>
  <div class="h-screen w-full flex flex-col font-sans relative overflow-hidden transition-colors duration-500" 
       :class="currentState === 'quiz_answer' ? 'bg-[#E56A24]' : 'bg-[#356a8e]'">
    
    <!-- Background Dot Pattern -->
    <div class="absolute inset-0 z-0 opacity-10" 
         style="background-image: radial-gradient(circle, #ffffff 1px, transparent 1px); background-size: 15px 15px;">
    </div>

    <!-- Decorative Corner Shape -->
    <div class="absolute -bottom-12 -right-12 w-48 h-48 md:w-64 md:h-64 rounded-full border-[20px] md:border-[30px] z-0 transition-colors duration-500"
         :class="currentState === 'quiz_answer' ? 'border-[#205278]' : 'border-[#E56A24]'">
    </div>

    <!-- Main Content Area -->
    <div class="relative z-10 flex flex-col h-full items-center px-4 md:px-6">
      
      <!-- Top Logo area -->
      <div class="w-full flex justify-center pt-6 md:pt-8 pb-4 md:pb-6 text-center">
        <div class="border-[2px] md:border-[3px] border-white p-1 md:p-1.5 px-3 md:px-5 relative flex flex-col items-center justify-center">
          <div class="flex items-baseline space-x-1 font-black text-white tracking-widest leading-none">
            <span class="text-xl md:text-2xl">Medlab</span>
          </div>
          <div class="w-full h-[1px] md:h-[2px] bg-white mt-0.5 mb-0.5"></div>
          <div class="flex justify-between w-full text-white font-black text-[0.5rem] md:text-[0.6rem] tracking-[0.3em] uppercase">
            <span>C</span><span>O</span><span>N</span><span>V</span><span>O</span>
          </div>
          <!-- Tiny speech bubble triangle -->
          <div class="absolute -bottom-3 left-3 w-0 h-0 border-l-[6px] border-l-transparent border-t-[10px] border-t-white border-r-[6px] border-r-transparent"></div>
        </div>
      </div>

      <!-- Welcome / Already Taken Screen -->
      <div v-if="currentState === 'welcome'" class="flex-1 flex flex-col items-center justify-center text-center max-w-md w-full py-4 px-2">
        <template v-if="hasTakenQuiz">
          <h1 class="text-white text-xl md:text-3xl font-extrabold mb-4 leading-tight">
            Challenge completed
          </h1>
          <p class="text-white text-sm md:text-lg font-medium mb-6 opacity-90">
            You've already conquered this quiz. <br/> Your master score was:
          </p>
          <div class="bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl mb-8 border border-white/30">
            <p class="text-white text-4xl md:text-5xl font-black">{{ savedScore }}/10</p>
          </div>
          <button @click="shareOnSocials" class="bg-[#E56A24] text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-all shadow-lg active:scale-95 text-xs md:text-sm tracking-widest border border-white flex items-center justify-center space-x-2">
            <Share2 class="w-4 h-4" />
            <span>Share your legacy</span>
          </button>
        </template>
        <template v-else>
          <h1 class="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-[1.1] drop-shadow-lg">
            How much do you <br/> really know?
          </h1>
          <p class="text-white text-sm md:text-lg font-bold tracking-wide mb-8 opacity-80 italic">
            "You can't tell... until you take the quiz!"
          </p>
          <button @click="startQuiz" class="bg-white text-[#356a8e] font-black py-3 px-10 rounded-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95 text-sm md:text-lg tracking-tight">
            Start Challenge
          </button>
        </template>
      </div>

      <!-- Question Screen -->
      <div v-else-if="currentState === 'quiz_question'" class="flex-1 flex flex-col items-center justify-start w-full max-w-xl py-2 overflow-y-auto mt-2 text-white">
        
        <div class="border-[2px] border-white rounded-lg p-4 md:p-6 w-full mb-6 text-white relative bg-white/5 backdrop-blur-sm">
          <p class="font-bold text-xs md:text-sm mb-1.5 opacity-80 tracking-widest">{{ currentQuestion.topic }}</p>
          <h2 class="text-base md:text-xl lg:text-2xl font-bold leading-tight">
            {{ currentQuestion.question }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 w-full px-1">
          <button 
            v-for="(option, index) in currentQuestion.options" 
            :key="index"
            @click="selectAnswer(option)"
            :disabled="isAnswering"
            class="flex items-stretch rounded-lg overflow-hidden border-[1.5px] border-white transition-all active:scale-95 group shadow-sm bg-white/5"
          >
            <div class="bg-[#205278] text-white font-black text-sm md:text-lg flex items-center justify-center w-10 md:w-14 flex-shrink-0 border-r-[1.5px] border-white group-hover:bg-orange-500 transition-colors">
              {{ option.label }}.
            </div>
            <div class="flex-1 bg-white text-[#205278] font-bold flex items-center justify-center p-2.5 md:p-3.5 text-center text-[0.7rem] md:text-xs lg:text-sm leading-snug tracking-tight">
              {{ option.text }}
            </div>
          </button>
        </div>
      </div>

      <!-- Answer Screen -->
      <div v-else-if="currentState === 'quiz_answer'" class="flex-1 flex flex-col items-center justify-center w-full max-w-xl px-4 text-center animate-fade-in py-4 text-white">
        <div class="w-full text-white">
          <h2 class="text-base md:text-xl lg:text-2xl font-black mb-8 leading-relaxed tracking-tight whitespace-pre-line">
            <span v-if="currentQuestion.isBonus" class="block text-sm md:text-lg text-orange-200 mb-2 font-bold opacity-90 animate-pulse">Bonus point!</span>
            {{ currentQuestion.options.find(o => o.isCorrect)?.answerText || "Brilliant work!" }}
            
            <template v-if="currentQuestion.isBonus">
               <div class="mt-6 text-xs md:text-base bg-white/10 p-4 rounded-xl border border-white/20 italic font-medium opacity-90">
                  👉 Defend your answer in the Medilab Convo group chat! We want to hear your thoughts.
               </div>
            </template>
          </h2>
          
          <button @click="nextQuestion" class="mt-4 bg-[#205278] text-white font-bold py-2.5 px-10 rounded-full hover:scale-105 transition-all shadow-md active:scale-95 text-xs md:text-sm tracking-widest border border-white">
            {{ currentQuestionIndex === questions.length - 1 ? 'Final Score' : 'Next Challenge' }}
          </button>
        </div>
      </div>

      <!-- Results Screen -->
      <div v-else-if="currentState === 'results'" class="flex-1 flex flex-col items-center justify-center text-center max-w-md w-full px-4 py-4">
          <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[1.5rem] shadow-xl w-full">
            <h1 class="text-white text-2xl md:text-3xl font-black mb-4 italic tracking-tighter">Mission complete!</h1>
            
            <div class="relative inline-block mb-6 md:mb-8">
                <div class="relative bg-white text-[#356a8e] px-8 py-2.5 rounded-full text-3xl md:text-4xl font-black shadow-lg border-2 border-[#205278]">
                    {{ score }} / 10
                </div>
            </div>
            
            <p class="text-white text-xs md:text-base mb-6 md:mb-8 font-bold leading-relaxed opacity-90">
              You're a true expert! <br/> Challenge your friends to beat your score.
            </p>

            <div class="flex flex-col space-y-3">
              <button @click="shareOnSocials" class="group bg-[#E56A24] hover:bg-[#ff7a2d] text-white font-black py-2.5 px-6 rounded-lg transition-all shadow-md flex items-center justify-center space-x-2 text-sm border-b-[3px] border-[#a84d1a] active:border-b-0 active:translate-y-1">
                <Share2 class="w-4 h-4" />
                <span>Share my score</span>
              </button>
              <a href="https://chat.whatsapp.com/your-group-link" target="_blank" class="bg-[#25D366] text-white font-black py-2.5 px-6 rounded-lg shadow-md hover:scale-105 transition-all text-xs flex items-center justify-center space-x-2 border-b-[3px] border-[#128C7E] active:border-b-0 active:translate-y-1">
                <MessageCircle class="w-4 h-4" />
                <span>Join community</span>
              </a>
            </div>
          </div>
      </div>

      <!-- Footer Social Icons -->
      <div class="w-full flex justify-center items-center space-x-3 pb-6 mt-auto pt-4 text-white opacity-90">
        <div class="flex space-x-2.5 text-lg md:text-xl">
            <Facebook class="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-orange-400" />
            <Instagram class="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-orange-400" />
            <Twitter class="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-orange-400" />
            <Linkedin class="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-orange-400" />
        </div>
        <span class="font-bold text-sm md:text-base tracking-tight">@medlabconvo</span>
      </div>

    </div>

    <!-- Social Share Overlay -->
    <div v-if="showShareModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md animate-fade-in">
        <div class="bg-white rounded-[1.5rem] p-6 max-w-xs w-full text-center shadow-xl">
            <div class="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy class="w-8 h-8 md:w-10 md:h-10 text-[#E56A24]" />
            </div>
            <h3 class="text-[#205278] text-lg font-black mb-1 uppercase tracking-tight">Share Glory</h3>
            <p class="text-gray-500 mb-6 font-bold text-[0.7rem] leading-snug">Challenge your friends <br/> and see who's best!</p>
            
            <div class="grid grid-cols-2 gap-3 mb-6">
                <button @click="performShare('X')" class="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-blue-50">
                    <Twitter class="text-black w-6 h-6 mb-1" />
                    <span class="font-black text-[0.55rem] uppercase">X</span>
                </button>
                <button @click="performShare('WhatsApp')" class="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-green-50">
                    <MessageCircle class="text-[#25D366] w-6 h-6 mb-1" />
                    <span class="font-black text-[0.55rem] uppercase">WhatsApp</span>
                </button>
                <button @click="performShare('Facebook')" class="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-blue-50">
                    <Facebook class="text-[#1877F2] w-6 h-6 mb-1" />
                    <span class="font-black text-[0.55rem] uppercase">Facebook</span>
                </button>
                <button @click="performShare('Copy')" class="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-orange-50">
                    <Copy class="text-[#E56A24] w-6 h-6 mb-1" />
                    <span class="font-black text-[0.55rem] uppercase">Link</span>
                </button>
            </div>
            
            <button @click="showShareModal = false" class="text-gray-400 font-black uppercase tracking-widest text-[0.6rem] hover:text-red-500">Close</button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Copy, 
  Trophy 
} from 'lucide-vue-next'

definePageMeta({
    layout: 'empty'
})

const currentState = ref<'welcome' | 'quiz_question' | 'quiz_answer' | 'results'>('welcome')
const currentQuestionIndex = ref(0)
const score = ref(0)
const selectedAnswers = ref<any[]>([])
const isAnswering = ref(false)
const hasTakenQuiz = ref(false)
const savedScore = ref(0)
const showShareModal = ref(false)

// Aggressive approach for quiz blocker (LocalStorage)
onMounted(() => {
    const isCompleted = localStorage.getItem('journo_quiz_status_v1')
    if (isCompleted) {
        hasTakenQuiz.value = true
        savedScore.value = parseInt(localStorage.getItem('journo_quiz_final_score') || '0')
    }
})

const questions = ref([
  {
    topic: "Based on Power Grid Wars",
    question: "Between 2000 and 2022, how many times did Nigeria's national grid collapse?",
    options: [
      { label: "A", text: "Less than 50" },
      { label: "B", text: "About 100" },
      { 
        label: "C", 
        text: "Over 500", 
        isCorrect: true, 
        answerText: "Answer: C — Over 500 times\nThe article reports 564 collapses" 
      },
      { label: "D", text: "Over 1,000" }
    ]
  },
  {
    topic: "Based on Power Grid Wars",
    question: "The article mentions Nigeria's life expectancy is about...?",
    options: [
      { label: "A", text: "75 years" },
      { label: "B", text: "68 years" },
      { 
        label: "C", 
        text: "55 years", 
        isCorrect: true, 
        answerText: "Answer: C — 55 years" 
      },
      { label: "D", text: "80 years" }
    ]
  },
  {
    topic: "Based on Power Grid Wars",
    question: "Which of these is MOST likely to cause burnout in healthcare labs?",
    options: [
      { label: "A", text: "Repetitive work" },
      { label: "B", text: "High responsibility" },
      { label: "C", text: "Pressure for accuracy" },
      { 
        label: "D", 
        text: "All of the above", 
        isCorrect: true, 
        answerText: "Answer: D — All of the above" 
      }
    ]
  },
  {
    topic: "Based on MLS 601",
    question: "What's the biggest misconception about healthcare professionals in labs?",
    options: [
      { label: "A", text: "They are too serious" },
      { label: "B", text: "They don't interact with patients" },
      { 
        label: "C", 
        text: "Their role isn't critical", 
        isCorrect: true, 
        answerText: "Answer: C — 'Not critical' is the myth" 
      },
      { label: "D", text: "They work too much" }
    ]
  },
  {
    topic: "Based on MLS 601",
    question: "If you had to describe lab work in ONE word, what would it be?",
    options: [
      { label: "A", text: "Routine" },
      { label: "B", text: "Predictable" },
      { 
        label: "C", 
        text: "Precise", 
        isCorrect: true, 
        answerText: "Answer: C — Precise" 
      },
      { label: "D", text: "Easy" }
    ]
  },
  {
    topic: "Based on Building Bridges",
    question: "Do strikes in healthcare HELP or HURT the system overall?",
    options: [
      { label: "A", text: "Help — they force change" },
      { label: "B", text: "Hurt — they disrupt care" },
      { 
        label: "C", 
        text: "Both", 
        isCorrect: true, 
        answerText: "Answer: C — Both" 
      },
      { label: "D", text: "Depends on leadership" }
    ]
  },
  {
    topic: "Based on Building Bridges",
    isBonus: true,
    question: "If a system pushes workers to the edge... who is REALLY responsible when things collapse?",
    options: [
      { label: "A", text: "The workers" },
      { 
        label: "B", 
        text: "The government", 
        isCorrect: true, 
        answerText: "Answer: B — Protect workers.\nIt's a bonus! Every answer counts." 
      },
      { label: "C", text: "The institutions", isCorrect: true },
      { label: "D", text: "Everyone shares the blame", isCorrect: true }
    ]
  },
  {
    topic: "Based on Heartshifts",
    question: "After a long hospital shift, what do most people REALLY need first?",
    options: [
      { label: "A", text: "Food" },
      { 
        label: "B", 
        text: "Sleep", 
        isCorrect: true, 
        answerText: "Answer: B — Sleep" 
      },
      { label: "C", text: "Social life" },
      { label: "D", text: "Gym" }
    ]
  },
  {
    topic: "Based on Heartshifts",
    question: "Which is harder to maintain with irregular shifts?",
    options: [
      { label: "A", text: "Sleep routine" },
      { label: "B", text: "Friendships" },
      { label: "C", text: "Romantic relationships" },
      { 
        label: "D", 
        text: "All of the above", 
        isCorrect: true, 
        answerText: "Answer: D — All of the above" 
      }
    ]
  },
  {
    topic: "Based on Heartshifts",
    isBonus: true,
    question: "If your job constantly drains you... should your personal life adjust or should your job?",
    options: [
      { label: "A", text: "Personal life should adjust", isCorrect: true },
      { label: "B", text: "Job should adjust", isCorrect: true },
      { 
        label: "C", 
        text: "Both should meet halfway", 
        isCorrect: true,
        answerText: "Bonus Point! \nHow would you solve this dilemma?"
      },
      { label: "D", text: "That's just life", isCorrect: true }
    ]
  }
])

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])

const startQuiz = () => {
  currentState.value = 'quiz_question'
  currentQuestionIndex.value = 0
  score.value = 0
  selectedAnswers.value = []
  isAnswering.value = false
}

const selectAnswer = (option: any) => {
  if (isAnswering.value) return
  isAnswering.value = true
  
  selectedAnswers.value.push(option)
  if (option.isCorrect) {
    score.value++
  }
  
  currentState.value = 'quiz_answer'
  isAnswering.value = false
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    currentState.value = 'quiz_question'
  } else {
    finishQuiz()
  }
}

const finishQuiz = () => {
    currentState.value = 'results'
    localStorage.setItem('journo_quiz_status_v1', 'completed')
    localStorage.setItem('journo_quiz_final_score', score.value.toString())
}

const shareOnSocials = () => {
    showShareModal.value = true
}

const performShare = (platform: string) => {
    const shareMsg = `I just scored ${score.value}/10 on the Medlab Convo Journo Quiz! 🔬✨ Join the challenge: `
    const shareUrl = window.location.origin + window.location.pathname
    
    if (platform === 'X') {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMsg)}&url=${encodeURIComponent(shareUrl)}`)
    } else if (platform === 'WhatsApp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareMsg + '\n\nPlay here: ' + shareUrl)}`)
    } else if (platform === 'Facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
    } else if (platform === 'Copy') {
        navigator.clipboard.writeText(shareMsg + '\n' + shareUrl)
        alert('Copied to clipboard!')
    }
    showShareModal.value = false
}

const resetQuiz = () => {
  if (localStorage.getItem('journo_quiz_status_v1')) return
  currentState.value = 'welcome'
  currentQuestionIndex.value = 0
  score.value = 0
  selectedAnswers.value = []
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
