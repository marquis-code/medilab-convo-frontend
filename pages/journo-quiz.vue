<template>
  <div class="h-screen w-full flex flex-col font-sans relative overflow-hidden" 
       :class="currentState === 'quiz_answer' ? 'bg-[#E56A24]' : 'bg-[#356a8e]'">
    
    <!-- Background Dot Pattern (Subtle) -->
    <div class="absolute inset-0 z-0 opacity-10" 
         style="background-image: radial-gradient(circle, #ffffff 2px, transparent 2px); background-size: 30px 30px; background-position: 0 0, 15px 15px;">
    </div>

    <!-- Decorative Corner Shape -->
    <div class="absolute -bottom-24 -right-24 w-64 h-64 rounded-full border-[30px] z-0"
         :class="currentState === 'quiz_answer' ? 'border-[#205278]' : 'border-[#E56A24]'">
    </div>

    <!-- Main Content Area -->
    <div class="relative z-10 flex flex-col h-full items-center px-6">
      
      <!-- Top Logo area -->
      <div class="w-full flex justify-center pt-8 pb-10">
        <div class="border-4 border-white p-2 relative flex flex-col items-center justify-center">
          <!-- Rough recreation of MEDLAB CONVO logo since it's a specific white vector in the image -->
          <div class="flex items-baseline space-x-1 font-bold text-white tracking-widest leading-none">
            <span class="text-3xl">MEDLAB</span>
          </div>
          <div class="w-full h-1 bg-white mt-1 mb-1"></div>
          <div class="flex space-x-2 text-white font-bold text-xs tracking-[0.2em]">
            <span>C</span><span>O</span><span>N</span><span>V</span><span>O</span>
          </div>
          <!-- Little speech bubble triangle -->
          <div class="absolute -bottom-4 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent"></div>
          <div class="absolute -bottom-[10px] left-[18px] w-0 h-0 border-l-[6px] border-l-transparent border-t-[10px] border-t-[#356a8e]" :class="currentState === 'quiz_answer' ? 'border-t-[#E56A24]' : 'border-t-[#356a8e]'"></div>
        </div>
      </div>

      <!-- Welcome Screen -->
      <div v-if="currentState === 'welcome'" class="flex-1 flex flex-col items-center justify-center text-center max-w-2xl w-full">
        <h1 class="text-white text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How Much Do You Know<br/>
          About the Journo Articles?
        </h1>
        <p class="text-white text-lg md:text-xl font-medium tracking-wide">
          You can't tell... until you take the quiz!
        </p>
        
        <button @click="startQuiz" class="mt-12 bg-white text-[#356a8e] font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105 active:scale-95 text-lg">
          Take the Quiz
        </button>
      </div>

      <!-- Question Screen -->
      <div v-else-if="currentState === 'quiz_question'" class="flex-1 flex flex-col items-center justify-center w-full max-w-lg">
        
        <!-- Question Box -->
        <div class="border-2 border-white rounded-lg p-6 w-full mb-8 text-white relative">
          <p class="font-semibold text-lg mb-2">{{ currentQuestion.topic }}</p>
          <h2 class="text-xl md:text-2xl font-bold leading-snug">
            {{ currentQuestion.question }}
          </h2>
        </div>

        <!-- Options Grid -->
        <div class="grid grid-cols-2 gap-4 w-full">
          <button 
            v-for="(option, index) in currentQuestion.options" 
            :key="index"
            @click="selectAnswer(option)"
            class="bg-[#f0f4f8] rounded-md flex items-stretch overflow-hidden border-2 border-transparent hover:border-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-md flex-row"
          >
            <!-- Letter Box -->
            <div class="bg-[#205278] text-white font-bold text-xl md:text-2xl flex items-center justify-center w-12 md:w-16 flex-shrink-0">
              {{ option.label }}.
            </div>
            <!-- Answer Text -->
            <div class="flex-1 bg-white text-[#205278] font-bold flex items-center justify-center p-3 md:p-4 text-center text-sm md:text-base">
              {{ option.text }}
            </div>
          </button>
        </div>
      </div>

      <!-- Answer Screen -->
      <div v-else-if="currentState === 'quiz_answer'" class="flex-1 flex flex-col items-center justify-center w-full max-w-2xl px-4">
        <div class="w-full text-white">
          <h2 class="text-2xl md:text-3xl font-bold mb-4 leading-relaxed whitespace-pre-line">
            {{ currentQuestion.options.find(o => o.isCorrect)?.answerText || "Correct Answer" }}
          </h2>
          
          <button @click="nextQuestion" class="mt-12 border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#E56A24] transition-colors shadow-lg">
            {{ currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question' }}
          </button>
        </div>
      </div>

      <!-- Results Screen (End of Quiz) -->
      <div v-else-if="currentState === 'results'" class="flex-1 flex flex-col items-center justify-center text-center max-w-2xl w-full">
         <h1 class="text-white text-4xl font-extrabold mb-6">Quiz Completed!</h1>
         <p class="text-white text-xl mb-8">You got <span class="font-bold text-[#E56A24] text-2xl bg-white px-3 py-1 rounded">{{ score }}</span> out of {{ questions.length }} correct.</p>
         
         <div class="flex space-x-4">
           <button @click="resetQuiz" class="bg-[#E56A24] text-white font-bold py-3 px-8 rounded-full hover:bg-[#d45c1a] transition-all shadow-lg">
            Restart Quiz
           </button>
         </div>
      </div>

      <!-- Footer Social Icons -->
      <div class="w-full flex justify-center space-x-4 pb-8 mt-auto pt-6 text-white text-2xl">
        <a href="#" class="hover:opacity-80 transition-opacity bg-white text-[#356a8e] rounded-full w-8 h-8 flex items-center justify-center"><Icon name="mdi:facebook" /></a>
        <a href="#" class="hover:opacity-80 transition-opacity bg-white text-[#356a8e] rounded-full p-1 w-8 h-8 flex items-center justify-center"><Icon name="mdi:instagram" /></a>
        <a href="#" class="hover:opacity-80 transition-opacity bg-white text-[#356a8e] rounded-full p-1 w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" class="hover:opacity-80 transition-opacity bg-white text-[#356a8e] rounded-full w-8 h-8 flex items-center justify-center"><Icon name="mdi:linkedin" /></a>
        <span class="font-bold flex items-center ml-2">@medlabconvo</span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
    layout: 'empty' // Using an empty layout to cover the full screen
})

const currentState = ref<'welcome' | 'quiz_question' | 'quiz_answer' | 'results'>('welcome')
const currentQuestionIndex = ref(0)
const score = ref(0)
const selectedAnswers = ref<any[]>([])

const questions = ref([
  {
    topic: "Based on Power Grid Wars",
    question: "1. Between 2000 and 2022, how many times did Nigeria's national grid collapse?",
    options: [
      { label: "A", text: "Less than 50", value: "a" },
      { label: "B", text: "About 100", value: "b" },
      { 
        label: "C", 
        text: "Over 500", 
        value: "c", 
        isCorrect: true, 
        answerText: "Answer: C — Over 500 times\nThe article reports 564 collapses—not a glitch, but a pattern." 
      },
      { label: "D", text: "Over 1,000", value: "d" }
    ]
  }
  // Add more questions here later if needed
])

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])

const startQuiz = () => {
  currentState.value = 'quiz_question'
  currentQuestionIndex.value = 0
  score.value = 0
  selectedAnswers.value = []
}

const selectAnswer = (option: any) => {
  selectedAnswers.value.push(option)
  if (option.isCorrect) {
    score.value++
  }
  currentState.value = 'quiz_answer'
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
    currentState.value = 'quiz_question'
  } else {
    currentState.value = 'results'
  }
}

const resetQuiz = () => {
  currentState.value = 'welcome'
  currentQuestionIndex.value = 0
  score.value = 0
  selectedAnswers.value = []
}
</script>

<style scoped>
/* Scoped styles if needed, though Tailwind mostly handles it */
</style>
