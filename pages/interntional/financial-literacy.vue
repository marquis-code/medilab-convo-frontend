<template>
    <div class="overflow-hidden bg-white mt-20">
        <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-[#27628C] lg:block"></div>
            <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                    <h3
                        class="mt-2 text-3xl/8 font-bold tracking-tight sm:text-4xl text-[#27628C] uppercase text-center lg:text-start">
                        Financial Literacy for Interns and Young Professionals
                    </h3>
                </div>
            </div>
            <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="relative lg:col-start-2 lg:row-start-1">
                    <svg class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block" width="404" height="384"
                        fill="#ffffff" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                                patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="#ffffff" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                    </svg>
                </div>
                <div class="mt-8 lg:mt-0">
                    <div class="mx-auto text-base/7 text-gray-500">
                        <p class="text-lg/7">
                            As young healthcare professionals, mastering financial literacy is essential for achieving
                            financial stability and security. Whether you're planning for internship expenses,
                            professional certifications, or future career goals, effective financial management will
                            help you navigate these responsibilities with confidence.
                        </p>
                        <p class="mt-5">
                            In Nigeria’s economic landscape, understanding personal finance is more important than ever.
                            From dealing with inflation and currency fluctuations to covering registration fees with the
                            Medical Laboratory Science Council of Nigeria and other professional costs, financial
                            planning is a crucial skill.
                        </p>
                        <p class="mt-5">
                            This session will equip you with practical knowledge and strategies to manage your finances
                            wisely, make informed decisions about savings and investments, and build a strong foundation
                            for long-term financial stability. Let’s take charge of our financial future together! </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center my-10 p-3 lg:p-0">
            <a href="https://forms.gle/b4fJCpWn4iJ7A4j77"
                class="text-white text-center bg-[#27628C] rounded-lg lg:w-full px-6 py-3.5 max-w-lg">
                Register Now
            </a>
        </div>

        <div class="mt-32 grid gap-20 lg:grid-cols-2 lg:gap-10 px-4 lg:px-16">

            <!-- Session 1 -->
            <div class="space-y-6">
                <h2 class="text-[#27628C] text-xl font-bold uppercase">Session 1</h2>
                <img class="w-full rounded-lg object-cover shadow-lg" src="@/assets/img/financial-literacy.jpeg"
                    alt="Financial Literacy Flier" />

                <div class="bg-white border p-4 rounded-lg shadow-sm">
                    <p class="text-sm font-semibold text-gray-700">Topic:</p>
                    <p class="text-lg font-medium text-gray-900">Personal Finance for Interns and Young Professionals
                    </p>
                    <p class="mt-2 text-sm text-gray-600">Date: Friday, 20th June, 2025</p>
                    <p class="text-sm text-gray-600">Time: 8:00 PM</p>
                </div>

                <article @click="openModal(schedules[0])"
                    class="flex cursor-pointer bg-white border rounded-lg transition hover:shadow-lg">
                    <div class="w-32 h-32 border-r rounded-l-lg overflow-hidden">
                        <img :src="schedules[0].image" alt="Ogochukwu Okolocha" class="object-cover w-full h-full" />
                    </div>
                    <div class="flex flex-col justify-between p-4">
                        <p class="font-bold text-gray-800">{{ schedules[0].speaker }}</p>
                        <p class="text-xs font-semibold text-[#27628C] pt-4">CLICK TO SEE FACILITATOR'S PROFILE</p>
                    </div>
                </article>
            </div>

            <!-- Session 2 -->
            <div class="space-y-6">
                <h2 class="text-[#27628C] text-xl font-bold uppercase">Session 2</h2>
                <img class="w-full rounded-lg object-cover shadow-lg" src="@/assets/img/financial-literacy2.jpeg"
                    alt="Financial Literacy 2 Flier" />

                <div class="bg-white border p-4 rounded-lg shadow-sm">
                    <p class="text-sm font-semibold text-gray-700">Topic:</p>
                    <p class="text-lg font-medium text-gray-900">The Millionaire Blue Print</p>
                    <p class="mt-2 text-sm text-gray-600">Date: Saturday, 28th June, 2025</p>
                    <p class="text-sm text-gray-600">Time: 8:00 PM</p>
                </div>

                <article @click="openModal(schedules[1])"
                    class="flex cursor-pointer bg-white border rounded-lg transition hover:shadow-lg">
                    <div class="w-32 h-32 border-r rounded-l-lg overflow-hidden">
                        <img :src="schedules[1].image" alt="Bala Francis" class="object-cover w-full h-full" />
                    </div>
                    <div class="flex flex-col justify-between p-4">
                        <p class="font-bold text-gray-800">{{ schedules[1].speaker }}</p>
                        <p class="text-xs font-semibold text-[#27628C] pt-4">CLICK TO SEE FACILITATOR'S PROFILE</p>
                    </div>
                </article>
            </div>
        </div>

        <div class="flex justify-center items-center mb-16 mt-32 p-3 lg:p-0">
            <a href="https://forms.gle/b4fJCpWn4iJ7A4j77"
                class="text-white text-center bg-[#27628C] rounded-lg lg:w-full px-6 py-3.5 max-w-lg">
                Register Now
            </a>
        </div>
    </div>


    <SpeakerModal v-if="selectedSpeaker" :speaker="selectedSpeaker" :is-visible="isModalVisible" @close="closeModal" />
</template>

<script setup lang="ts">
definePageMeta({
    alias: [
        '/interntional/financial-literacy',
    ]
});

const route = useRoute();
const id = route.params.id;

import speaker1 from '@/assets/img/ogochukwu-okolocha.jpeg'
import speaker2 from '@/assets/img/bala-francis.jpeg'

const schedules = ref([
    {
        image: speaker1,
        "speaker": "Ogochukwu Okolocha",
        "bio": `Ogochukwu Okolocha is a personal finance evangelist on a mission to empower individuals like you with the financial sense they need to break free from generational poverty and build lasting transgenerational wealth.
Entrepreneur, seasoned investor, business consultant, and finance teacher, Ogochukwu brings years of practical experience and insight to the world of personal finance and wealth building.
He is the founder of ML Community; a vibrant and growing tribe of finance titans from all walks of life.
ML Community is dedicated to improving financial literacy and creating a safe, engaging platform for people to learn, share, and implement smart money decisions.`,

    },
    {
        image: speaker2,
        "speaker": "Bala Francis",
        "bio": `Bala Francis is a distinguished finacial market trader, entrepreneur, author, investor, trainer, public speaker, and the founder and CEO of Charis Trading Institute. With a wealth of experience and a deep understanding of global financial markets, Bala Francis empowers individuals and businesses through innovative trading strategies and comprehensive financial education.
      As an accomplished public speaker and author, they share practical insights and actionable advice, helping audiences achieve their financial goals and navigate complex market dynamics.`
    }
]);

const isModalVisible = ref(false);
const selectedSpeaker = ref(null);

function openModal(speaker: any) {
    selectedSpeaker.value = speaker;
    isModalVisible.value = true;
}

function closeModal() {
    isModalVisible.value = false;
}
</script>