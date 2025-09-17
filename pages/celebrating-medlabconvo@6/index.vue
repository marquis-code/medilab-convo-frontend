<template>
    <div class="min-h-screen bg-gray-100 pt-28 md:pt-36 pb-24 flex flex-col items-center">
        <h3 class="text-lg font-bold text-[#27628C] mb-10 text-center">Join our 6th Anniversary Celebration – Create Your DP</h3>

        <div v-if="!generatedUrl" class="flex flex-col items-center space-y-6">
            <div ref="flyerRef"
                class="relative w-[370px] h-[450px] md:w-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg px-24">

                <img src="/6years-bg.png" alt="Background" class="absolute inset-0 w-full h-full object-cover" />

                <img src="/medlabconvo-logo.png" alt="Logo" class="absolute top-0 left-6 w-20" />

                <div class="absolute inset-x-6 top-24 bg-white/60 rounded-lg p-4 text-center">
                    <img src="/testimonial.png" alt="text"
                        class="absolute inset-0 w-[180px] -top-6 left-1/2 -translate-x-1/2" />

                    <p class="text-[#27628C] text-sm whitespace-pre-line mt-6">
                        {{ testimonial || "Your testimonial goes here..." }}
                    </p>

                    <img src="/6years.png" alt="6 Years Badge" class="absolute -top-16 -right-4 w-24" />
                </div>

                <div class="absolute bottom-2 inset-x-0 flex flex-row items-center justify-center space-x-4">
                    <div class="w-20 h-20 rounded-full bg-gray-200 border-2 border-[#27628C] overflow-hidden flex items-center justify-center cursor-pointer"
                        @click="triggerFileUpload">
                        <img v-if="authorImage" :src="authorImage" alt="Author" class="w-full h-full object-cover" />
                        <span v-else class="text-gray-500 text-2xl">+</span>
                        <input type="file" accept="image/*" class="hidden" ref="fileInput" @change="onFileChange" />
                    </div>
                    <p class="mt-2 font-semibold text-gray-100 bg-[#27628C] px-3 py-1 rounded-lg">
                        {{ authorName || "Your Name" }}
                    </p>
            </div>
        </div>

        <div class="mt-6 w-full max-w-md bg-white rounded-lg shadow p-6 space-y-5">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input v-model="authorName" type="text" placeholder="Enter your name"
                    class="mt-1 w-full border rounded-md p-2 focus:ring-[#27628C] focus:border-[#27628C]" />
                <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>

            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Testimonial</label>
                <textarea v-model="testimonial" rows="4" placeholder="Write your testimonial..."
                    class="mt-1 w-full border rounded-md p-2 focus:ring-[#27628C] focus:border-[#27628C]"
                    @input="checkWordLimit"></textarea>
                <p class="text-xs text-gray-500 mt-1">{{ wordCount }}/{{ maxWords }} words</p>
                <p v-if="errors.testimonial" class="text-xs text-red-500 mt-1">{{ errors.testimonial }}</p>
            </div>
            <p v-if="errors.global" class="text-sm text-red-600 font-medium">
                {{ errors.global }}
            </p>
            <div class="flex gap-4">
                <div class="flex gap-4">
                    <button @click="generateImage" :disabled="isGenerating"
                        class="flex-1 px-4 py-2 bg-[#27628C] text-white rounded-md hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed">
                        <span v-if="isGenerating">⏳ Generating...</span>
                        <span v-else>Generate My DP</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="flex flex-col items-center space-y-4">
        <h3 class="text-lg font-bold text-[#27628C] text-center mb-10">Your Celebration Flier is Ready! 🎊🎊</h3>
        <img :src="generatedUrl" alt="Generated DP" class="rounded-lg shadow-lg max-w-xs" />

        <div class="flex gap-4 mt-4">
            <button @click="downloadImage" :disabled="isDownloading"
                class="px-4 py-2 bg-[#27628C] text-white rounded-md hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed">
                <span v-if="isDownloading">⬇️ Downloading...</span>
                <span v-else>Download Now</span>
            </button>
            <button @click="resetForm" class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                Go Back
            </button>
        </div>

        <p class="text-xs text-gray-500 text-center px-6">
            💡 If download doesn’t work, right-click (or long-press on mobile) the generated image and select
            <b>Save Image</b>.
        </p>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as htmlToImage from "html-to-image";

const flyerRef = ref<HTMLDivElement | null>(null);
const testimonial = ref<string>("");
const authorName = ref<string>("");
const authorImage = ref<string | null>(null);
const generatedUrl = ref<string | null>(null);

const fileInput = ref<HTMLInputElement | null>(null);
const maxWords = 60;
const wordCount = ref(0);

const errors = ref<{ name?: string; testimonial?: string; global?: string }>({});

const isGenerating = ref(false);
const isDownloading = ref(false);


function triggerFileUpload() {
    fileInput.value?.click();
}

function onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            authorImage.value = reader.result as string;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function checkWordLimit() {
    const words = testimonial.value.trim().split(/\s+/);
    wordCount.value = words[0] === "" ? 0 : words.length;
    if (wordCount.value > maxWords) {
        testimonial.value = words.slice(0, maxWords).join(" ");
        wordCount.value = maxWords;
    }
}

// Validation helpers
const validateForm = () => {
  const newErrors: { name?: string; testimonial?: string; global?: string } = {};

  if (!authorName.value.trim()) {
    newErrors.name = "Please enter your name.";
  }
  if (!testimonial.value.trim()) {
    newErrors.testimonial = "Please enter your testimonial.";
  }
  if (!authorImage.value) {
    newErrors.global = "Please upload your image.";
  }

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

watch(authorName, () => {
  if (errors.value.name) {
    setTimeout(() => (errors.value.name = undefined), 1000);
  }
});
watch(testimonial, () => {
  if (errors.value.testimonial) {
    setTimeout(() => (errors.value.testimonial = undefined), 1000);
  }
});
watch(authorImage, () => {
  if (errors.value.global) {
    setTimeout(() => (errors.value.global = undefined), 1000);
  }
});

async function generateImage() {
  if (!validateForm()) {
    return;
  }

  isGenerating.value = true;
  try {
    const [dataUrl] = await Promise.all([
      htmlToImage.toPng(flyerRef.value as HTMLElement, { pixelRatio: 2 }),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]);
    generatedUrl.value = dataUrl as string;
  } catch (err) {
    console.error("Failed to generate DP", err);
  } finally {
    isGenerating.value = false;
  }
}

function downloadImage() {
    if (!generatedUrl.value) return;
    const a = document.createElement("a");
    a.href = generatedUrl.value;
    a.download = "medlab-testimonial.png";
    a.click();
}

function resetForm() {
    generatedUrl.value = null;
}
</script>