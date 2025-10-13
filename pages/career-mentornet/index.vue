<template>
  <div class="relative bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
    <!-- Background Accents -->
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#27628C]/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 -left-32 w-80 h-80 bg-[#27628C]/5 rounded-full blur-2xl"></div>

    <section class="relative py-24 px-6 mt-24 text-center">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl md:text-6xl font-semibold text-[#27628C] leading-tight mb-4 animate-fade-up"
        >
          Career Mentornet Program
        </h1>
        <p
          class="text-lg text-gray-600 leading-relaxed animate-fade-up"
          style="animation-delay: 0.2s"
        >
          A transformative mentorship initiative guiding Medical Laboratory Science professionals
          toward excellence, leadership, and innovation in an evolving healthcare landscape.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
      <div class="grid md:grid-cols-3 gap-10 items-start">
        <div class="md:col-span-2 order-2 md:order-1">
          <h2 class="text-2xl md:text-3xl font-bold text-[#27628C] mb-3">
            Message from the International Community
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            The International Community of MedLabConvo welcomes all participants embarking on
            the transformative journey of the Career Mentornet Program — designed to support
            Medical Laboratory Science graduates through mentorship, professional development,
            and holistic growth.
          </p>
          <p class="text-gray-700 leading-relaxed">
            This program is a testament to our shared commitment to excellence, collaboration,
            and the advancement of Medical Laboratory Science worldwide.
          </p>
        </div>

        <!-- Card -->
        <div
          class="relative order-1 md:order-2 bg-gradient-to-br from-[#27628C]/90 to-[#27628C] text-white rounded-2xl p-6 shadow-xl animate-bounce-soft"
        >
          <h3 class="font-semibold text-lg mb-4 text-center">Program Structure</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-center gap-3">
              <div
                class="w-8 h-8 bg-white/20 flex items-center justify-center rounded-full font-semibold"
              >
                🕒
              </div>
              <p><b>Duration:</b> 2 months (6 sessions)</p>
            </li>
            <li class="flex items-center gap-3">
              <div
                class="w-8 h-8 bg-white/20 flex items-center justify-center rounded-full font-semibold"
              >
                👥
              </div>
              <p><b>Structure:</b> 100 mentors × 100 mentees</p>
            </li>
            <li class="flex items-center gap-3">
              <div
                class="w-10 h-8 bg-white/20 flex items-center justify-center rounded-full font-semibold"
              >
                🎯
              </div>
              <p><b>Goal:</b> Guidance, collaboration & leadership growth</p>
            </li>
          </ul>
          <div
            class="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"
          ></div>
        </div>
      </div>
    </section>

    <!-- Mission & Objectives -->
    <section class="bg-[#27628C]/5 py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#27628C] mb-6">Mission & Objectives</h2>
        <p class="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          To bridge the gap between academic training and professional excellence through
          mentorship, collaboration, and personalized guidance — fostering growth, leadership,
          and a global community of innovators.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div
            v-for="(item, index) in objectives"
            :key="index"
            class="bg-white rounded-xl shadow-sm border-t-4 border-[#27628C] p-6 hover:shadow-md transition-all duration-300"
          >
            <h3 class="font-semibold text-[#27628C] mb-2">{{ item.title }}</h3>
            <p class="text-gray-700 leading-relaxed text-sm">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Benefits -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#27628C] mb-10">Program Benefits</h2>
        <div class="grid md:grid-cols-2 gap-10 text-left">
          <div
            class="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 hover:shadow-md transition"
          >
            <h3 class="text-xl md:text-2xl font-semibold text-[#27628C] mb-4">For Mentors</h3>
            <ul class="space-y-2 text-gray-700">
              <li>Leave a professional legacy and shape future leaders.</li>
              <li>Refine leadership, communication, and coaching skills.</li>
              <li>Network with global MLS experts and innovators.</li>
            </ul>
          </div>
          <div
            class="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 hover:shadow-md transition"
          >
            <h3 class="text-xl md:text-2xl font-semibold text-[#27628C] mb-4">For Mentees</h3>
            <ul class="space-y-2 text-gray-700">
              <li>Receive personalized guidance from experienced professionals.</li>
              <li>Accelerate your growth and expand your professional reach.</li>
              <li>Build confidence, leadership, and a lifelong support network.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Phases -->
    <section class="bg-[#27628C]/5 py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#27628C] mb-10">Program Phases</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(phase, index) in phases"
            :key="phase.title"
            class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative hover:shadow-md transition-transform duration-500 transform hover:-translate-y-2 animate-fade-in"
            :style="{ animationDelay: `${index * 0.25}s` }"
          >
            <div
              class="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#27628C] text-white font-bold flex items-center justify-center shadow-md"
            >
              {{ index + 1 }}
            </div>
            <h4 class="font-semibold text-[#27628C] mt-4 mb-2">
              {{ phase.title }}
            </h4>
            <p class="text-gray-700 text-sm leading-relaxed">{{ phase.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-20 bg-[#27628C] text-white">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Join the Career Mentornet Program</h2>
      <p class="mb-8 text-lg max-w-xl mx-auto">
        Step into your future as a confident, innovative, and well-rounded Medical Laboratory Scientist.
      </p>
      <a
        href="#"
        class="bg-white text-[#27628C] px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition"
      >
        Apply Now
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
const objectives = [
  {
    title: 'Practical Career Insights',
    text: 'Exposure to diverse and emerging healthcare fields such as data science, entrepreneurship, and public health.',
  },
  {
    title: 'Collaborative Global Community',
    text: 'Building lifelong mentorship networks and collaborative peer learning for sustained professional growth.',
  },
  {
    title: 'Leadership & Innovation',
    text: 'Inspiring the next generation of leaders, researchers, and innovators in healthcare and laboratory science.',
  },
]

const phases = [
  { title: 'Orientation & Direction', text: 'Workshops introducing mentors, mentees, and program goals.' },
  { title: 'Professional Knowledge', text: 'Focused sessions on skills development and mentorship.' },
  { title: 'Networking & Collaboration', text: 'Engagement through peer collaboration and real-world challenges.' },
  { title: 'Reflection & Continued Growth', text: 'Wrap-up sessions and strategies for continued professional development.' },
]
</script>

<style scoped>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 1s ease forwards;
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease forwards;
}
@keyframes bounce-soft {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-bounce-soft {
  animation: bounce-soft 1.5s ease-in-out infinite;
}

</style>
