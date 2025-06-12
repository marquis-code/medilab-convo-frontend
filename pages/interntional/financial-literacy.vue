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
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <figure>
                            <img class="w-full rounded-lg object-cover shadow-lg lg:aspect-auto"
                                src="@/assets/img/financial-literacy.jpeg" alt="Financial Literacy Flier" width="1184"
                                height="1376" />
                        </figure>
                    </div>
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
            <a href="#"
                class="text-white text-center bg-[#27628C] rounded-lg lg:w-full px-6 py-3.5 max-w-lg opacity-50 pointer-events-none">
                Register Now
            </a>
        </div>


        <div class="flex flex-col justify-center items-center mt-24">
            <h1 class="text-center text-[#27628C] uppercase text-2xl font-bold">Schedule</h1>

            <div class="overflow-x-auto w-full max-w-[900px]">
                <table class="w-full border-collapse border-8 border-white mt-10 mx-auto">
                    <thead>
                        <tr class="bg-[#2788b2]">
                            <th
                                class="border-4 border-white text-gray-50 px-2 py-3 text-center text-sm md:text-base uppercase font">
                                S/N</th>
                            <th
                                class="border-4 border-white text-gray-50 px-4 py-2 text-left text-sm md:text-base uppercase">
                                Session
                                Topic</th>
                            <th class="border-4 border-white text-gray-50 px-4 py-2 text-left text-sm md:text-base uppercase">
                                Date</th>  
                             <th class="border-4 border-white text-gray-50 px-4 py-2 text-left text-sm md:text-base uppercase">
                                Time</th>   
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-[#27628C]">
                        <tr v-for="(topic, index) in topics" :key="index">
                            <td
                                class="px-4 py-2 text-gray-50 border-4 border-white text-center text-sm md:text-base whitespace-nowrap">
                                {{ topic.sn }}</td>
                            <td
                                class="px-4 py-2 text-gray-50 border-4 border-white text-left text-sm md:text-base whitespace-nowrap">
                                {{ topic.topic }}</td>
                            <td class="px-4 py-2 text-gray-50 border-4 border-white text-left text-sm md:text-base whitespace-nowrap">
                                {{ topic.date }}</td>
                            <td class="px-4 py-2 text-gray-50 border-4 border-white text-left text-sm md:text-base whitespace-nowrap">
                                {{ topic.time }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div>
        <h1 class="text-center text-[#27628C] uppercase font-bold text-2xl mt-32">Facilitators</h1>
        <section class="flex flex-wrap justify-center gap-6 mt-14 mx-auto max-w-7xl pb-6 p-3 lg:p-0">
            <article v-for="item in schedules" :key="item.speaker" @click="openModal(item)"
                class="w-full sm:w-[45%] flex bg-white border-[0.5px] border-gray-10 rounded-lg transition hover:shadow-xl">
                <div class="sm:basis-56 border-[0.5px] border-gray-50 rounded-lg">
                    <img :src="item.image" :alt="item.speaker" class="aspect-square h-full w-32 object-cover" />
                </div>

                <div class="w-full flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <p class="mt-2 font-bold line-clamp-3 text-lg/relaxed text-gray-700">
                            {{ item.speaker }}
                        </p>
                        <p class="text-xs font-bold pt-5">CLICK TO SEE FACILITATOR'S PROFILE</p>
                    </div>
                </div>
            </article>
        </section>
        </div>

        <div class="flex justify-center items-center my-10 p-3 lg:p-0">
            <a href="#"
                class="text-white text-center bg-[#27628C] rounded-lg lg:w-full px-6 py-3.5 max-w-lg opacity-50 pointer-events-none">
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


const topics = ref([
    {
        "sn": "01",
        "topic": "Personal Finance for Interns and Young Professionals",
        "date": "Friday, 20th June, 2025",
        "time": "8:00 PM",
    },
    {
        "sn": "02",
        "topic": "Finance",
        "date": " June, 2025",
        "time": "8:00 PM",
    },
]);

const schedules = ref([
    {
        image: speaker1,
        "speaker": "Ogochukwu Okolocha",
        "bio": ``,

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