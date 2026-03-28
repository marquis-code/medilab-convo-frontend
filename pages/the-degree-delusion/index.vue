<template>
    <div class="overflow-hidden bg-white mt-16">

        <!-- HERO SECTION -->
        <section class="relative bg-gradient-to-br from-[#f0f6fb] via-white to-[#e8f2f9] py-20 px-6 overflow-hidden">
            <!-- Decorative background blobs -->
            <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#27628C]/8 blur-3xl pointer-events-none">
            </div>
            <div class="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#27628C]/6 blur-2xl pointer-events-none">
            </div>

            <div class="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14">
                <div class="flex-1 text-center lg:text-left">
                    <span
                        class="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-[#27628C] bg-[#27628C]/10 px-4 py-1.5 rounded-full">Available
                        for Pre-Order</span>
                    <h1 class="font-extrabold text-5xl lg:text-6xl leading-tight text-gray-900 mb-6"
                        style="font-family: 'Georgia', serif;">
                        The Degree<br />
                        <span class="text-[#27628C]">Delusion</span>
                    </h1>
                    <p class="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                        A practical, honest, and urgent guide for African undergraduates who want to win <em>before</em>
                        they graduate, not after. Challenge comforting lies, restore your agency, and use your
                        university years as the most flexible, resource-rich season of your life.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="https://selar.com/p/72447137r3?affiliate=v6494e7245" target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center justify-center gap-2 bg-[#27628C] hover:bg-[#1e4f73] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-[#27628C]/30 hover:shadow-xl hover:shadow-[#27628C]/40 hover:-translate-y-0.5">
                            Pre-Order Now
                        </a>
                        <a href="#overview"
                            class="inline-flex items-center justify-center gap-2 border-2 border-[#27628C] text-[#27628C] hover:bg-[#27628C] hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200">
                            Read Overview
                        </a>
                    </div>
                </div>

                <!-- Book Image -->
                <div class="flex-shrink-0 flex justify-center lg:justify-end">
                    <div class="relative">
                        <div class="absolute inset-0 translate-x-4 translate-y-4 bg-[#27628C]/15 rounded-2xl blur-xl">
                        </div>
                        <div
                            class="relative w-90 sm:w-72 lg:w-90 aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden border border-white/60">
                            <img src="@/assets/img/book-cover.jpeg" alt="The Degree Delusion book cover"
                                class="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- OVERVIEW / INSIDE THE BOOK -->
        <section id="overview" class="py-20 px-6 bg-white">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-14">
                    <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4"
                        style="font-family:'Georgia',serif;">Inside the Book</h2>
                    <p class="text-gray-500 max-w-2xl mx-auto text-lg">
                        Whether you're a seasoned professional or a recent graduate, this book provides actionable
                        insights to navigate the evolving landscape of higher education and career-building.
                    </p>
                </div>

                <!-- Overview prose -->
                <div class="bg-[#f8fbfe] border border-[#27628C]/10 rounded-2xl p-8 lg:p-12 mb-14">
                    <p class="text-gray-700 leading-relaxed text-base lg:text-lg mb-4">
                        Study hard. Get good grades. Earn a degree. And life will open up. For the older generation, it
                        mostly worked. A degree was rare, jobs were steadier, and employers hired for potential.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base lg:text-lg mb-4">
                        But something has changed. Degrees are no longer rare. Jobs are no longer guaranteed. And the
                        world no longer waits for graduates to "find themselves." Yet many students still treat
                        university like a waiting room — something to endure for four or five years while the world
                        waits for them.
                    </p>
                    <p class="text-gray-700 leading-relaxed text-base lg:text-lg font-medium text-[#27628C]">
                        <em>The Degree Delusion</em> is a practical, honest, and urgent guide for African undergraduates
                        who want to win before they graduate, not after.
                    </p>
                </div>

                <!-- What you'll learn cards -->
                <h3 class="text-xl font-bold text-gray-900 mb-8 text-center">Inside, you'll learn how to:</h3>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="(item, i) in insideItems" :key="i"
                        class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                        <div class="w-10 h-10 rounded-xl bg-[#27628C]/10 flex items-center justify-center mb-4">
                            <svg class="w-5 h-5 text-[#27628C]" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24" v-html="item.icon"></svg>
                        </div>
                        <p class="text-gray-800 font-medium leading-snug">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- VIRTUAL BOOK LAUNCH -->
        <section class="py-20 px-6 bg-[#27628C] relative overflow-hidden">
            <div
                class="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none">
            </div>
            <div
                class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2 pointer-events-none">
            </div>

            <div class="relative max-w-4xl mx-auto text-center">
                <h2 class="text-3xl lg:text-4xl font-extrabold text-white mb-4" style="font-family:'Georgia',serif;">
                    Join the Virtual Book Launch</h2>
                <p class="text-white/75 text-lg mb-12 max-w-2xl mx-auto">
                    Be part of our exclusive live event featuring a keynote address, a Q&A with the author, and special
                    guest panels.
                </p>

                <div class="grid sm:grid-cols-3 gap-4 mb-10">
                    <div class="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15">
                        <p class="text-white/60 text-xs uppercase tracking-widest mb-2">Date</p>
                        <p class="text-white font-bold text-xl">March 31, 2026</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15">
                        <p class="text-white/60 text-xs uppercase tracking-widest mb-2">Time</p>
                        <p class="text-white font-bold text-xl">7:00 PM</p>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/15">
                        <p class="text-white/60 text-xs uppercase tracking-widest mb-2">Location</p>
                        <p class="text-white font-bold text-xl">Live Webinar</p>
                    </div>
                </div>

                <a href="https://us06web.zoom.us/meeting/register/r72aBfBPSOG6n3d75L5PFQ"
                    class="inline-flex items-center justify-center gap-2 bg-white text-[#27628C] hover:bg-gray-50 font-bold px-10 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Register for Event
                </a>
            </div>
        </section>

        <!-- PANELISTS -->
        <section class="py-20 px-6 bg-white">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-14">
                    <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4"
                        style="font-family:'Georgia',serif;">
                        Featured Panelists
                    </h2>
                    <p class="text-gray-500 max-w-xl mx-auto">
                        Meet the thought leaders and industry experts joining us at the virtual book launch.
                    </p>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(panelist, i) in panelists" :key="i"
                        class="flex flex-col items-center text-center group">
                        <div
                            class="w-24 h-24 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                            <img :src="panelist.image" :alt="panelist.name"
                                class="w-full h-full object-cover object-top" />
                        </div>
                        <p class="font-bold text-gray-900">{{ panelist.name }}</p>
                        <p class="text-sm text-gray-500 mt-1">{{ panelist.title }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS -->
        <section class="py-20 px-6 bg-[#f0f6fb]">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-14">
                    <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4"
                        style="font-family:'Georgia',serif;">Praise from Early Readers</h2>
                    <p class="text-gray-500 max-w-xl mx-auto">See what readers are saying about <em>The Degree
                            Delusion</em>.</p>
                </div>

                <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <div v-for="(t, i) in testimonials" :key="i"
                        class="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <!-- Stars -->
                        <div class="flex gap-1 mb-4">
                            <svg v-for="s in 5" :key="s" class="w-4 h-4 text-amber-400" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <p class="text-gray-700 leading-relaxed text-sm mb-5 italic">"{{ t.quote }}"</p>
                        <div class="flex items-center gap-3">
                            <!-- Avatar placeholder -->
                            <div
                                class="w-10 h-10 rounded-full bg-[#27628C]/15 flex items-center justify-center flex-shrink-0">
                                <span class="text-[#27628C] font-bold text-sm">{{ t.name.charAt(0) }}</span>
                            </div>
                            <div>
                                <p class="font-semibold text-gray-900 text-sm">{{ t.name }}</p>
                                <p class="text-xs text-gray-400">{{ t.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MEET THE AUTHOR -->
        <section class="py-20 px-6 bg-white">
            <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-center">
                <div class="flex-shrink-0">
                    <div class="relative">
                        <div class="absolute inset-0 translate-x-3 translate-y-3 bg-[#27628C]/15 rounded-2xl blur-lg">
                        </div>
                        <div
                            class="relative w-64 h-72 bg-gray-200 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                            <div
                                class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex flex-col items-center justify-center">
                                <img src="@/assets/img/oluwamuyiwa-ogunkoya.jpg" alt=""
                                    class="absolute inset-0 w-full h-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Author info -->
                <div class="flex-1">
                    <span
                        class="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-[#27628C] bg-[#27628C]/10 px-4 py-1.5 rounded-full">Meet
                        the Author</span>
                    <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6"
                        style="font-family:'Georgia',serif;">Oluwamuyiwa Ogunkoya</h2>
                    <div class="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Oluwamuyiwa Ogunkoya is an author, thought leader, researcher and innovator deeply committed
                            to issues on health, education, and leadership. He is passionate about strengthening
                            systems, empowering young professionals, and turning ideas into structures that outlive
                            their founders.
                        </p>
                        <p>
                            A proven leader with multiple awards and a track record of sustainable impact, Oluwamuyiwa
                            operates by a simple philosophy: <strong class="text-gray-900">leave every place better than
                                you met it.</strong>
                        </p>
                        <p>
                            He is the Executive Director of <a href="https://medlabconvo.com" target="_blank"
                                class="text-[#27628C] font-medium hover:underline">MedLabConvo</a>, co-founder of <a
                                href="https://bloodlinesfoundation.org" target="_blank"
                                class="text-[#27628C] font-medium hover:underline">BloodLines</a>, and a Research
                            Scientist on multiple internationally funded projects.
                        </p>
                        <p>
                            He co-engineered foundational efforts that led to the formation of the African Federation of
                            Medical Laboratory Science Students' Associations (AFMLSSA), and initiated a peer mentorship
                            program that has continued for over five years, generating hundreds of impact stories.
                            Beyond his professional work, he is an amateur chess player, with medals from local and
                            international competitions.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- PRE-ORDER CTA -->
        <section class="py-20 px-6 bg-gradient-to-br from-[#f0f6fb] to-white">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4" style="font-family:'Georgia',serif;">
                    Secure Your Copy Today</h2>
                <p class="text-gray-500 mb-3 text-lg">Available now in digital format, with hardcover and paperback editions to follow.</p>
                <p class="text-gray-400 text-sm mb-12">Available on Selar for pre-order now.</p>

                <div class="flex flex-wrap justify-center gap-12 mb-12">
                    <div v-for="retailer in retailers" :key="retailer.name" class="flex flex-col items-center gap-1">
                        <p class="font-bold text-gray-900">{{ retailer.name }}</p>
                        <p class="text-sm text-gray-400">{{ retailer.subtitle }}</p>
                    </div>
                </div>

                <a href="https://selar.com/p/72447137r3?affiliate=v6494e7245" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-2 bg-[#27628C] hover:bg-[#1e4f73] text-white font-bold px-12 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-[#27628C]/30 hover:shadow-2xl hover:shadow-[#27628C]/40 hover:-translate-y-0.5 text-lg">
                    Pre-Order Now →
                </a>

                <p class="text-gray-400 text-xs mt-6">
                    As an affiliate partner, MedLabConvo earns a small commission from qualifying purchases at no
                    additional cost to you.
                </p>
            </div>
        </section>

        <footer class="bg-gray-900 text-white py-10 px-6">
            <div class="max-w-6xl mx-auto flex flex-col items-center gap-4">
                <p class="font-bold text-lg tracking-wide">MedLabConvo</p>
                <p class="text-gray-500 text-xs">© 2026 MedLabConvo. All rights reserved.</p>
            </div>
        </footer>

    </div>
</template>

<script setup>

import panelist1 from '@/assets/img/adedoyin-aronimo.jpeg'
import panelist2 from '@/assets/img/ahmed-adeagbo.jpeg'
import panelist3 from '@/assets/img/rispha-juma.jpeg'
import panelist4 from '@/assets/img/odinaka-obeta.jpeg'

const insideItems = [
    {
        text: 'Stop waiting for the system and start building your future early',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
    },
    {
        text: 'Build real-world skills alongside your degree',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.636-6.364l.707.707M6 20l.707-.707M17.657 6.343l-.707.707M18 20l-.707-.707M12 21a9 9 0 100-18 9 9 0 000 18z"/>`,
    },
    {
        text: 'Create leverage through relationships, reputation, and results',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>`,
    },
    {
        text: 'Position yourself for opportunities in unstable economies and competitive job markets',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>`,
    },
    {
        text: 'Graduate prepared, confident, and equipped for the real world',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>`,
    },
]


const panelists = [
    { image: panelist1, name: 'Adedoyin Aronimo' },
    { image: panelist2, name: 'Ahmed Adeagbo' },
    { image: panelist3, name: 'Rispha Juma' },
    { image: panelist4, name: 'Odinaka Kingsley Obeta' },
]

const testimonials = [
    {
        quote: 'The Degree Delusion is an engaging and relevant contribution to discussions on education and personal growth. Its message is both timely and necessary, and I believe earlier exposure to its insights would significantly influence a lot of people\'s academic and professional journey.',
        name: 'Rispha Juma',
        role: 'Final year student',
    },
    {
        quote: 'The book is an engaging and useful read, the kind of book that makes me wish it had found me earlier, but well, like they say, it\'s better late than never.',
        name: 'Destiny Aniyom',
        role: 'Final year student',
    },
    {
        quote: 'The Degree Delusion is a well-researched, conversational, and deeply relevant guide for undergraduates and early-career professionals navigating the gap between formal education and real-world readiness. If I had access to this book as an undergraduate, I firmly believe it would have shaped my choices for the better.',
        name: 'Chubiyojo Agada',
        role: 'Director, The GRIT Community',
    },
    {
        quote: 'This book breaks down a lot of concepts and will go a long way for every young adult trying to get into school and navigate their student life — it says a lot on strategy, value creation and clarity.',
        name: 'Modupe Oyinyechukwu Laja',
        role: 'Co-founder, Her Physio Movement',
    },
    {
        quote: 'It\'s a great book, and I\'ll surely be getting it for my cousins just starting university.',
        name: 'Ahmed Adeagbo',
        role: 'Rhodes Scholar',
    },
    {
        quote: 'The ideas Oluwamuyiwa has captured in this book are so profound. These ideas are the untold truths about education in many parts of the developing world.',
        name: 'Odinaka Kingsley Obeta',
        role: 'Chevening Scholar',
    },
    {
        quote: 'This book is a cheat code to do life.',
        name: 'Victoire Ahoua',
        role: 'First class graduate',
    },
]

const retailers = [
    { name: 'Selar', subtitle: 'Primary / Pre-order' },
    // { name: 'Amazon', subtitle: 'Hardcover & Kindle' },
    // { name: 'Barnes & Noble', subtitle: 'Paperback & Nook' },
    // { name: 'Bookshop.org', subtitle: 'Support local bookshops' },
]
</script>