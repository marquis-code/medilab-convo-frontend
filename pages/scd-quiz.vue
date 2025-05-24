<template>
  <div class="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100 flex flex-col">
    <!-- Leave Confirmation Modal -->
    <transition name="fade">
      <div v-if="showLeaveModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
          <h3 class="text-xl font-bold text-gray-800 mb-4">
            Are you sure you want to leave?
          </h3>
          <p class="text-gray-600 mb-6">
            Your progress will be lost if you leave now.
          </p>
          <div class="flex justify-end space-x-3">
            <button @click="showLeaveModal = false" class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Stay
            </button>
            <button @click="resetQuiz" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Leave
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Toast Notification -->
    <transition name="toast">
      <div v-if="toast.show"
        class="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 z-40 max-w-xs w-full flex items-center">
        <div class="bg-teal-100 p-2 rounded-full mr-3">
          <Icon :name="toast.icon" class="text-teal-600 w-5 h-5" />
        </div>
        <p class="font-medium text-gray-800">{{ toast.message }}</p>
      </div>
    </transition>

    <div class="container mx-auto px-4 py-8 flex-1 flex flex-col">
      <!-- Welcome Screen -->
      <div v-if="currentState === 'welcome'"
        class="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <div class="mb-8">
          <img src="@/assets/img/medlab-logo.jpeg" alt="Logo" class="mx-auto h-16 rounded-full mb-4" />
          <h1 class="text-3xl md:text-4xl font-bold text-teal-800 mb-2">
            SICKLE CELL DISEASE QUIZ
          </h1>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8 w-full">
          <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            How well do you know sickle cell disease?
          </h3>
          <p class="text-gray-600 mb-6">Let's find out!</p>
          <button @click="startQuiz"
            class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg w-full md:w-auto">
            Start Quiz
          </button>
        </div>
      </div>

      <!-- Quiz Questions -->
      <div v-else-if="currentState === 'quiz'" class="flex-1 flex flex-col">
        <div class="mb-4 flex justify-between items-center">
          <div class="text-sm font-medium text-gray-600">
            Question {{ currentQuestionIndex + 1 }}/{{ questions.length }}
          </div>
          <button @click="confirmLeave" class="text-sm text-gray-500 hover:text-gray-700">
            Exit Quiz
          </button>
        </div>

        <transition name="slide" mode="out-in">
          <div :key="currentQuestionIndex" class="bg-white rounded-xl shadow-lg p-6 mb-6 flex-1">
            <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {{ currentQuestionIndex + 1 }}. {{ currentQuestion.question }}
            </h2>

            <div class="space-y-3">
              <!-- For multi-answer (checkbox) -->
              <div v-if="Array.isArray(currentQuestion.correctAnswer)">
                <label v-for="(option, index) in currentQuestion.options" :key="index"
                  class="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer"
                  :class="getOptionClass(option.label)">
                  <input type="checkbox" :value="option.label"
                    :checked="(userAnswers[currentQuestionIndex] || []).includes(option.label)"
                    @change="selectAnswer(option.label)" :disabled="hasAnswered" />
                  <span><strong>{{ option.label }}</strong>: {{ option.text }}</span>
                </label>
              </div>

              <!-- For single-answer (button) -->
              <button v-else v-for="(option, index) in currentQuestion.options" :key="index"
                @click="selectAnswer(option.label)"
                class="w-full text-left p-4 rounded-lg transition-all flex items-start border"
                :class="getOptionClass(option.label)" :disabled="hasAnswered">
                <span class="font-bold text-teal-800 mr-2">{{ option.label }}</span>
                <span>{{ option.text }}</span>
              </button>
            </div>


            <div v-if="hasAnswered" class="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
              <p class="font-semibold mb-2">{{ answerStatus }}</p>
              <p class="text-gray-700">Explanation: {{ currentQuestion.explanation }}</p>
            </div>

          </div>
        </transition>

        <div class="flex justify-between">
          <button @click="previousQuestion" :disabled="currentQuestionIndex === 0" class="px-4 py-2 rounded-lg" :class="currentQuestionIndex === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            ">
            Previous
          </button>
          <button @click="nextQuestion" :disabled="!hasAnswered" class="px-4 py-2 rounded-lg" :class="!hasAnswered
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-teal-600 hover:bg-teal-700 text-white'
            ">
            {{ currentQuestionIndex === questions.length - 1 ? "Finish" : "Next" }}
          </button>
        </div>
      </div>

      <!-- Result Screen -->
      <div v-else-if="currentState === 'results'"
        class="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8 w-full text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-teal-800 mb-2">
            Quiz Completed!
          </h2>
          <p class="text-lg font-semibold">So, how well did you do?</p>
          <p class="text-gray-700 text-lg mb-6">
            You got <span class="text-teal-600 font-bold">{{ score }}</span> out
            of {{ questions.length }} questions correct.
          </p>
          <p>Do you know your genotype?</p>
          <p>Share this quiz. Tag someone who needs to take it.</p>

          <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6 mt-6">
            <button @click="resetQuiz" class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              Take Quiz Again
            </button>
            <button @click="shareResults"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
              <Icon name="mdi:whatsapp" class="mr-2" />
              Share on WhatsApp
            </button>
          </div>

          <!-- Outro Section -->
          <div class="text-gray-800 mt-4 space-y-2">
            <p class="text-red-700 font-medium">Let’s raise awareness together!</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";

definePageMeta({
  layout: "authentication",
});

interface Option {
  label: string;
  text: string;
}

interface Question {
  question: string;
  options: Option[];
  correctAnswer: string | string[];
  explanation: string;
  type: "multiple-choice" | "true-false";
}

const questions = ref<Question[]>([
  {
    question: "What causes sickle cell disease?",
    options: [
      { label: "A", text: "A virus" },
      { label: "B", text: "A genetic mutation" },
      { label: "C", text: "Poor nutrition" },
      { label: "D", text: "Iron deficiency" },
    ],
    correctAnswer: "B",
    explanation:
      "Sickle cell disease is caused by a mutation in the gene that tells the body to make haemoglobin—the protein in red blood cells that carries oxygen.",
    type: "multiple-choice",
  },
  {
    question:
      "True or False: Sickle cell disease can be cured with antibiotics.",
    options: [
      { label: "True", text: "True" },
      { label: "False", text: "False" },
    ],
    correctAnswer: "False",
    explanation:
      "Antibiotics help manage infections, which people living with sickle cell are more prone to, but they do not cure the disease. Bone marrow or stem cell transplants are currently the only potential cures.",
    type: "true-false",
  },
  {
    question: "Which part of the body does sickle cell primarily affect?",
    options: [
      { label: "A", text: "Lungs" },
      { label: "B", text: "Bones" },
      { label: "C", text: "Blood" },
      { label: "D", text: "Skin" },
    ],
    correctAnswer: "C",
    explanation:
      "Sickle cell disease affects the red blood cells, causing them to become rigid and sickle-shaped. This blocks blood flow and reduces oxygen delivery in the body.",
    type: "multiple-choice",
  },
  {
    question: "What is the best way to know your sickle cell status?",
    options: [
      { label: "A", text: "Ask your parents" },
      { label: "B", text: "Get a blood test" },
      { label: "C", text: "Check your symptoms" },
      { label: "D", text: "Take supplements" },
    ],
    correctAnswer: "B",
    explanation:
      "A blood test is the most accurate way to know your genotype and whether you carry the trait or have sickle cell disease.",
    type: "multiple-choice",
  },
  {
    question:
      "Which genotype combinations can lead to a child having sickle cell disease?",
    options: [
      { label: "A", text: "AA + AA" },
      { label: "B", text: "AS + AS" },
      { label: "C", text: "AA + SS" },
      { label: "D", text: "AS + SS" },
    ],
    correctAnswer: ["B", "D"],
    explanation:
      "Two carriers (AS + AS) have a 25% chance of having a child with sickle cell (SS). AS + SS gives a 50% chance. AA + AA cannot produce a child with sickle cell.",
    type: "multiple-choice",
  },
]);

// State management
const currentState = ref<"welcome" | "quiz" | "results">("welcome");
const currentQuestionIndex = ref(0);
const userAnswers = ref<(string | string[])[]>([]);
const showLeaveModal = ref(false);
const toast = ref({
  show: false,
  message: "",
  icon: "check-circle",
});


// Computed properties
const currentQuestion = computed(
  () => questions.value[currentQuestionIndex.value]
);

const score = computed(() => {
  return questions.value.reduce((total, question, index) => {
    const correct = question.correctAnswer;
    const answer = userAnswers.value[index];

    if (Array.isArray(correct)) {
      return (
        total +
        (Array.isArray(answer) &&
          correct.length === answer.length &&
          correct.every((val) => answer.includes(val))
          ? 1
          : 0)
      );
    }

    return total + (answer === correct ? 1 : 0);
  }, 0);
});

const hasAnswered = computed(() => {
  const answer = userAnswers.value[currentQuestionIndex.value];
  const correct = currentQuestion.value.correctAnswer;

  if (Array.isArray(correct)) {
    return Array.isArray(answer) && answer.length === correct.length;
  }

  return !!answer;
});


const getOptionClass = (label: string) => {
  const current = questions.value[currentQuestionIndex.value];
  const answer = userAnswers.value[currentQuestionIndex.value];

  if (Array.isArray(current.correctAnswer)) {
    if (!Array.isArray(answer)) return 'border-gray-200 hover:bg-teal-50';
    return answer.includes(label)
      ? 'bg-teal-100 border-teal-300'
      : 'border-gray-200 hover:bg-teal-50';
  }
  return answer === label
    ? 'bg-teal-100 border-teal-300'
    : 'border-gray-200 hover:bg-teal-50';
};

const answerStatus = computed(() => {
  const question = currentQuestion.value;
  const answer = userAnswers.value[currentQuestionIndex.value];
  const correct = question.correctAnswer;

  if (!hasAnswered.value) return "";

  const isCorrect = Array.isArray(correct)
    ? Array.isArray(answer) &&
    correct.length === answer.length &&
    correct.every((val) => answer.includes(val))
    : answer === correct;

  if (isCorrect) {
    return "✅ Correct! 🎉";
  }

  const correctText = Array.isArray(correct) ? correct.join(" and ") : correct;
  return `❌ Wrong! 😢 The correct answer is ${correctText}.`;
});


// Methods
const startQuiz = () => {
  currentState.value = "quiz";
  loadFromSessionStorage();
  currentQuestionIndex.value = 0;
  showToast("Quiz started!");
};

const selectAnswer = (value: string) => {
  const current = questions.value[currentQuestionIndex.value];
  const currentAnswer = userAnswers.value[currentQuestionIndex.value];

  if (Array.isArray(current.correctAnswer)) {
    // If no answers yet, initialize with array
    if (!Array.isArray(currentAnswer)) {
      userAnswers.value[currentQuestionIndex.value] = [value];
    } else {
      const answerArray = [...currentAnswer];
      const index = answerArray.indexOf(value);
      if (index >= 0) {
        // Deselect if already selected
        answerArray.splice(index, 1);
      } else {
        // Add new selection
        answerArray.push(value);
      }
      userAnswers.value[currentQuestionIndex.value] = answerArray;
    }
  } else {
    // Single choice
    userAnswers.value[currentQuestionIndex.value] = value;
  }

  saveToSessionStorage();
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    finishQuiz();
  }
};

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
};

const finishQuiz = () => {
  currentState.value = "results";
  showToast(`You scored ${score.value}/${questions.value.length} 👏`, "award");
};

const resetQuiz = () => {
  currentState.value = "welcome";
  currentQuestionIndex.value = 0;
  userAnswers.value = [];
  showLeaveModal.value = false;
  sessionStorage.removeItem("sickleCellQuizState");
};

function getResultTitle() {
  if (score.value === questions.value.length) {
    return "🎉 Perfect Score! You're an Expert!";
  } else if (score.value >= questions.value.length / 2) {
    return "👏 Great Job! You know a lot about Sickle Cell Disease!";
  } else {
    return "💡 Keep Learning! There's more to know about Sickle Cell Disease.";
  }
}

function getResultDescription() {
  return `You answered ${score.value} out of ${questions.value.length} questions correctly. ${score.value === questions.value.length
      ? "You have an excellent understanding of sickle cell disease!"
      : score.value >= questions.value.length / 2
        ? "You have a good understanding, but there's room to learn more."
        : "It seems like you need to learn more about sickle cell disease. Keep going!"
    }`;
}

// Share results via Web Share API with WhatsApp as target
const shareResults = async () => {
  const resultText = `${getResultTitle()}\n\n${getResultDescription()}\n\nLet's check how much you know about Sickle cell disease here!`

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My Sickle Cell Disease Quiz Result',
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
  const resultText = `${getResultTitle()}\n\n${getResultDescription()}\n\nLet's check how much you know about Sickle cell disease here!`
  const encodedText = encodeURIComponent(resultText)
  const whatsappUrl = `https://wa.me/?text=${encodedText}`
  window.open(whatsappUrl, '_blank')
  showToast('Opening WhatsApp to share', 'share')
}

const confirmLeave = () => {
  showLeaveModal.value = true;
};

const showToast = (message: string, icon: string = "info") => {
  toast.value = {
    show: true,
    message,
    icon,
  };
  setTimeout(() => {
    toast.value.show = false;
  }, 3000);
};

// Session storage
const saveToSessionStorage = () => {
  const state = {
    currentQuestionIndex: currentQuestionIndex.value,
    userAnswers: userAnswers.value,
  };
  sessionStorage.setItem("sickleCellQuizState", JSON.stringify(state));
};

const loadFromSessionStorage = () => {
  const savedState = sessionStorage.getItem("sickleCellQuizState");
  if (savedState) {
    const state = JSON.parse(savedState);
    currentQuestionIndex.value = state.currentQuestionIndex || 0;
    userAnswers.value =
      state.userAnswers || Array(questions.value.length).fill("");
  } else {
    userAnswers.value = Array(questions.value.length).fill("");
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("beforeunload", (e) => {
    if (currentState.value === "quiz") {
      e.preventDefault();
      e.returnValue = "";
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", () => { });
});

// Watcher
watch(
  [currentQuestionIndex, userAnswers],
  () => {
    if (currentState.value === "quiz") {
      saveToSessionStorage();
    }
  },
  { deep: true }
);
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

@keyframes shine {
  to {
    left: 100%;
  }
}
</style>
