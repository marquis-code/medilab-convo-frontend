<template>
    <div class="overflow-hidden bg-white mt-20">
        <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block"></div>
            <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                    <!-- <h2 class="text-lg font-semibold text-indigo-600">Case Study</h2> -->
                    <h3 class="mt-2 text-3xl/8 font-bold tracking-tight  sm:text-4xl text-[#27628C] uppercase text-center lg:text-start">Origins</h3>
                </div>
            </div>
            <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="relative lg:col-start-2 lg:row-start-1">
                    <svg class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block" width="404" height="384"
                        fill="none" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                                patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                    </svg>
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <figure>
                            <img class="aspect-[12/7] w-full rounded-lg object-cover shadow-lg lg:aspect-auto"
                                src="@/assets/img/origins.jpeg"
                                alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376">
                        </figure>
                    </div>
                </div>
                <div class="mt-8 lg:mt-0">
                    <div class="mx-auto text-base/7 text-gray-500">
                        <p class="text-lg/7">ORIGINS is a program specifically designed for freshmen and sophomores,
                            aimed at equipping them with the essential knowledge, skills, mindset, and network
                            opportunities they need to excel academically and grow into top-tier professionals. By
                            focusing on the foundational years of a student’s academic journey, ORIGINS provides the
                            tools and support necessary to help participants develop the right attitudes and cultivate a
                            strong professional identity early on.</p>
                        <p class="mt-5">Through a combination of workshops, mentorship, and networking events, the
                            program empowers students to navigate the challenges of their academic life with confidence,
                            while building a network of peers and industry experts that will support their future career
                            goals. ORIGINS not only helps students excel in the classroom but also prepares them to
                            transition smoothly into their professional lives as standout leaders in their chosen
                            fields.</p>
                        <p class="mt-5">Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem
                            pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus
                            dignissim imperdiet a.</p>
                        <p class="mt-5">Join us as we turn obstacles into stepping stones, unlocking a future of
                            excellence in medical laboratory science.</p>
                        <!-- <section>
                            <div class="container mx-auto px-4 mt-8">
                                <div class="bg-white p-0 rounded-lg shadow-md flex">
                                    <div class="lg:flex space-y-6 items-center space-x-4 w-full p-6">
                                        <img src="@/assets/img/impact.jpg" alt="Podcast cover"
                                            class="w-72 h-60 rounded-lg object-cover" />
                                        <div class="flex flex-col w-full">
                                            <div class="font-semibold text-2xl">
                                                <div class="font-semibold text-2xl">Friday Odum | The Identity of the
                                                    Medical Laboratory Scientist</div>
                                            </div>
                                            <div class="mt-3">
                                                <p class="text-gray-400 text-sm mb-2">Available On:</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> -->
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-center text-[#27628C] uppercase">Speakers</h1>
        <section class="grid lg:grid-cols-3 gap-6 mx-auto max-w-7xl pb-6 p-3 lg:p-0">
            <article v-for="item in schedules" class="flex bg-white border-[0.5px] border-gray-10 rounded-lg transition hover:shadow-xl">

                <div class="sm:basis-56 border rounded-lg">
                    <img alt=""
                        src="@/assets/img/avatar.jpeg"
                        class="aspect-square h-44 w-32 object-fit" />
                </div>

                <div class="w-full flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-gray-900">
                               {{ item.topic }}
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            {{ item.speaker }}
                        </p>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            {{ item.date_and_time }}
                        </p>
                    </div>
<!-- 
                    <div class="sm:flex sm:items-end sm:justify-end">
                        <a href="#"
                            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                            Read Blog
                        </a>
                    </div> -->
                </div>
            </article>
        </section>

       <div class="flex justify-center items-center my-10 p-3 lg:p-0">
        <a href="https://forms.gle/gnmMNvg4VZo66EdF7" class="text-white text-center bg-[#27628C] rounded-lg w-full px-6 py-3.5 max-w-lg">Register</a>
       </div>
    </div>

</template>



<script setup lang="ts">
import img4 from '@/assets/img/origins.jpeg'
const schedules = ref([
    {"date_and_time": "Friday, 31st January, 2025, 8 pm - 9 pm", "topic": "The Identity of the Medical Laboratory Scientist", "speaker": "Friday Odum"},
    {"date_and_time": "Saturday, 1st February, 2025, 8 pm - 9 pm", "topic": "Building a professional network", "speaker": "Ridwan Agboola"},
    {"date_and_time": "Sunday, 2nd February, 2024, 8 pm - 9 pm", "topic": "Time management", "speaker": "Glory Ogunbodede"},
    {"date_and_time": "Friday, 7th February, 2025, 8 pm - 9 pm", "topic": "Research for undergraduates", "speaker": "Emmanuel Elebesunu"},
    {"date_and_time": "Saturday, 8th February, 2025, 8 pm - 9 pm", "topic": "Mentorship for Undergraduates", "speaker": "Odinaka Obeta"},
    {"date_and_time": "Sunday, 9th February, 2024, 8 pm - 9 pm", "topic": "Scholarship and Fellowship opportunities for undergraduates", "speaker": "Kamsi Muoka"},
    {"date_and_time": "Saturday, 15th February, 2025", "topic": "Volunteering", "speaker": "Williams Owoeye"},
    {"date_and_time": "Sunday, 16th February, 2025", "topic": "Leadership and Social Impact", "speaker": "Fatima Ibrahim"}
])
</script>