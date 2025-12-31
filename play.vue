
<template>
  <!-- 1. UPDATED HERO SECTION - Replace the existing hero -->
  <div class="relative isolate overflow-hidden bg-gradient-to-br from-[#27628C] via-[#1e4d6b] to-[#27628C]">
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-[#27628C]/90 via-[#1e4d6b]/90 to-[#27628C]/90"></div>
      <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 w-full h-full object-cover opacity-20">
    </div>

    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
      <div class="text-center">
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 animate-fade-in">
          <span class="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            MedLabConvo
          </span>
        </h1>
        <p class="text-2xl sm:text-2xl lg:text-3xl text-blue-100 font-light mb-4 animate-fade-in-delay">
          A Platform for Laboratory Science, Health Innovation,
        </p>
        <p class="text-2xl sm:text-2xl lg:text-3xl text-blue-100 font-light mb-8 animate-fade-in-delay">
          and Workforce Development
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a href="#what-we-do" class="bg-white text-[#27628C] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Services
          </a>
          <a href="#about" class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#27628C] transition-all duration-300">
            Learn More
          </a>
        </div>
        <div class="text-center mt-12">
          <p class="relative inline-block h-[1.2em] text-2xl text-blue-100 italic font-light">
            <span class="word inset-0 animate-fade-word [animation-delay:0.3s]">Lead</span>
            <span class="word inset-0 animate-fade-word [animation-delay:2.3s]">Build</span>
            <span class="word inset-0 animate-fade-word [animation-delay:4.3s]">Inspire</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <VideoHero />

  <!-- 2. NEW SECTION: Transforming Healthcare (Add after Mission Statement Video Section) -->
  <section id="about" class="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
            Transforming Healthcare
          </span>
        </h2>
        <p class="text-2xl font-light text-gray-700 mb-4">
          Through Digital Services for Laboratory Professionals
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
      </div>
      <div class="max-w-4xl mx-auto">
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          MedLabConvo is a digital service organisation advancing medical laboratory science and healthcare through knowledge platforms, professional tools, data-driven programs, and innovation-focused services.
        </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          We design and deliver digital programs, content products, advocacy programs and professional development services that strengthen technical capacity, leadership, and innovation readiness across the healthcare workforce.
        </p>
      </div>
    </div>
  </section>

  <!-- 3. NEW SECTION: What We Do (Replace the current Target Audience section) -->
  <section id="what-we-do" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
            What We Do
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Service 1 -->
        <div class="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#27628C]/10 to-blue-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#27628C] to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors">
              Digital Programs and Capacity Building
            </h3>
            <p class="text-gray-600 leading-relaxed">
              We design structured digital programs that support career development, leadership training, and workforce readiness in medical laboratory science and allied health fields. Our programs combine expert-led learning, practical insights, and applied professional skills.
            </p>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#27628C]/10 to-blue-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#27628C] to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors">
              Media and Knowledge Platforms
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Through LabCast and Journo, we produce high-quality digital content including expert conversations, industry analysis, research commentary, and professional insights. These platforms translate complex scientific and health system issues into accessible, actionable knowledge.
            </p>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#27628C]/10 to-blue-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#27628C] to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors">
              Community and Professional Networks
            </h3>
            <p class="text-gray-600 leading-relaxed">
              We operate a global digital community connecting laboratory professionals, researchers, innovators, and health leaders. Our platform enables peer learning, mentorship, collaboration, and cross-border exchange.
            </p>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="group relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#27628C]/10 to-blue-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative">
            <div class="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#27628C] to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#27628C] transition-colors">
              Products and Resources
            </h3>
            <p class="text-gray-600 leading-relaxed">
              We develop and curate digital resources, toolkits, guides, and learning materials that support evidence-based practice, career progression, and innovation adoption within healthcare systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. UPDATED Target Audience Section (New simplified version) -->
  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
            Who We Serve
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
      </div>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
        Our work supports students, early career professionals, institutions, and partners navigating the future of laboratory medicine and health technology.
      </p>
    </div>
  </section>

  <!-- 5. NEW SECTION: Featured Platforms (Add before Programs Section) -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-[#27628C] to-blue-600 bg-clip-text text-transparent">
            Featured Platforms
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- LabCast Platform -->
        <div class="group relative bg-gradient-to-br from-[#27628C] to-blue-700 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <div class="relative p-10">
            <div class="flex items-center mb-6">
              <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-white">LabCast</h3>
            </div>
            <p class="text-blue-100 text-lg leading-relaxed mb-8">
              Conversations with laboratory scientists, public health experts, health innovators, and policy leaders shaping the future of healthcare.
            </p>
            <a href="https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e" class="inline-flex items-center bg-white text-[#27628C] px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:translate-x-2">
              Listen Now
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
          <div class="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <!-- Journo Platform -->
        <div class="group relative bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <div class="relative p-10">
            <div class="flex items-center mb-6">
              <div class="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-white">Journo</h3>
            </div>
            <p class="text-orange-100 text-lg leading-relaxed mb-8">
              Insight-driven articles, opinion pieces, and explainers on medical laboratory science, digital health, research, careers, and global health systems.
            </p>
            <a href="https://mlcjourno.substack.com/" class="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:translate-x-2">
              Read Articles
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
          <div class="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. NEW SECTION: Impact Stats (Add before Testimonials) -->
  <section class="py-24 bg-gradient-to-br from-[#27628C] to-blue-700 relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#27628C] to-transparent"></div>
    
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-6">
          Transforming Professional Growth at Scale
        </h2>
        <div class="w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
        <p class="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          MedLabConvo has supported thousands of laboratory professionals and healthcare learners through digital engagement, education, mentorship, and community-driven learning.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <div class="text-center group">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">5000+</div>
            <div class="text-blue-100 font-semibold">Community Members</div>
          </div>
        </div>
        <div class="text-center group">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">50+</div>
            <div class="text-blue-100 font-semibold">Digital Programs</div>
          </div>
        </div>
        <div class="text-center group">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">100+</div>
            <div class="text-blue-100 font-semibold">Podcast Episodes</div>
          </div>
        </div>
        <div class="text-center group">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">30+</div>
            <div class="text-blue-100 font-semibold">Countries Reached</div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-lg text-blue-100 max-w-3xl mx-auto">
          Our impact spans career clarity, skills development, leadership confidence, and exposure to emerging opportunities in healthcare and health technology.
        </p>
      </div>
    </div>
  </section>

  <!-- 7. UPDATED Testimonials Section Header -->
  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-sm font-semibold tracking-wider text-[#27628C] uppercase mb-4">What Our Community Says</h2>
        <p class="text-3xl font-bold text-gray-900 mb-6">
          Real Impact, Real Stories
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, idx) in testimonials" :key="idx" class="group">
          <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100">
            <div class="flex items-center mb-6">
              <div class="h-14 w-14 rounded-full bg-gradient-to-br from-[#27628C] to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="ml-4">
                <div class="font-bold text-gray-900">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-500">Biomedical Scientist</div>
              </div>
            </div>
            <div class="mb-4">
              <svg class="w-8 h-8 text-[#27628C]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote class="text-gray-700 leading-relaxed italic">
              {{ testimonial.testimonial }}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. UPDATED Partnership Section -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Partner With Us</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-[#27628C] to-blue-600 mx-auto rounded-full mb-8"></div>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          We collaborate with academic institutions, professional bodies, non-profits, health organisations, and innovation partners to deliver impactful digital programs, content, and workforce development initiatives.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16">
        <div class="flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
          <img class="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" src="@/assets/img/partner1.jpeg" alt="Partner 1">
        </div>
        <div class="flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
          <img class="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" src="@/assets/img/partner2.jpeg" alt="Partner 2">
        </div>
        <div class="flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
          <img class="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" src="@/assets/img/partner3.jpeg" alt="Partner 3">
        </div>
        <div class="flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
          <img class="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" src="@/assets/img/partner4.jpeg" alt="Partner 4">
        </div>
        <div class="flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
          <img class="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" src="@/assets/img/partner5.jpeg" alt="Partner 5">
        </div>
        <div class="flex items-center justify-center p-4 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
          <img class="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" src="@/assets/img/partner6.jpeg" alt="Partner 6">
        </div>
      </div>

      <div class="text-center">
        <a href="mailto:admin@medlabconvo.com?subject=Partnership%20Enquiry" class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
          Partner With MedLabConvo
          <span class="ml-3 flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </section>

  <!-- 9. UPDATED Donation CTA Section -->
  <section class="py-24 bg-primary relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
    <div class="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
    
    <div class="relative max-w-4xl mx-auto text-center px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-white mb-6">
        Support Our Work
      </h2>
      <p class="text-xl text-blue-100 mb-10 leading-relaxed">
        Help us sustain and expand our digital services for healthcare professionals. Your support enables us to continue delivering impactful programs, content, and community-driven learning experiences.
      </p>
      <router-link to="/donate" class="inline-flex items-center bg-white text-[#27628C] px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 group">
        Donate Now
        <svg class="w-6 h-6 ml-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </router-link>
    </div>
  </section>

  <!-- 10. UPDATED Newsletter Section -->
  <div class="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
    <div class="max-w-4xl mx-auto text-center px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-[#27628C] mb-6">Stay Informed</h2>
      <p class="text-xl text-gray-700 mb-10 leading-relaxed">
        Subscribe to our newsletter for insights, programs, and opportunities in laboratory science and healthcare innovation.
      </p>
      <a href="https://forms.gle/pg4UR6XQvZRLqK2NA" class="inline-flex items-center bg-gradient-to-r from-[#27628C] to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
        Subscribe to Our Newsletter
        <svg class="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </a>

      <div class="mt-16">
        <p class="font-semibold text-gray-800 text-lg mb-6">Let's Talk Medical Laboratory Science</p>
        <div class="flex justify-center space-x-5">
          <a href="https://x.com/medlabconvo" class="group" aria-label="X (Twitter)">
            <div class="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
              <img src="@/assets/img/logo1.png" class="h-6 w-6 group-hover:brightness-0 group-hover:invert transition-all" alt="X"/>
            </div>
          </a>
          <a href="https://www.instagram.com/medlabconvo/" class="group" aria-label="Instagram">
            <div class="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 group-hover:scale-110 transition-all duration-300">
              <img src="@/assets/img/logo4.svg" class="h-6 w-6 group-hover:brightness-0 group-hover:invert transition-all" alt="Instagram"/>
            </div>
          </a>
          <a href="https://web.facebook.com/medlabconvo" class="group" aria-label="Facebook">
            <div class="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
              <img src="@/assets/img/logo3.svg" class="h-6 w-6 group-hover:brightness-0 group-hover:invert transition-all" alt="Facebook"/>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/medlabconvo/" class="group" aria-label="LinkedIn">
            <div class="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
              <img src="@/assets/img/logo5.svg" class="h-6 w-6 group-hover:brightness-0 group-hover:invert transition-all" alt="LinkedIn"/>
            </div>
          </a>
          <a href="https://mlcjourno.substack.com/" class="group" aria-label="Substack">
            <div class="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
              <img src="@/assets/img/substack.png" class="h-6 w-6 group-hover:brightness-0 group-hover:invert transition-all" alt="Substack"/>
            </div>
          </a>
          <a href="https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e" class="group" aria-label="Spotify">
            <div class="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
              <img src="@/assets/img/logo2.png" class="h-6 w-6 group-hover:brightness-0 group-hover:invert transition-all" alt="Spotify"/>
            </div>
          </a>
        </div>
      </div>

      <div class="w-full flex justify-center items-center flex-col pt-12 border-t border-gray-200 mt-12">
        <p class="text-center text-sm text-gray-600 mb-2">
          MedLabConvo is a trademark of LabiHealth Ambassadors Initiative, a registered non-profit organisation.
        </p>
        <p class="text-sm text-gray-600">
          © LabiHealth Ambassadors Initiative 2025. All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
// import AnniversaryPopup from "@/components/AnniversaryPopup.vue";
import { useYoutubeVideo } from '@/composables/useYoutubeVideo';
import labcast from '@/assets/img/latest-labcast.jpg'
const isOpen = ref(false)
import convo from "@/assets/img/forging-a-career-path.jpg"
import { useGetPrograms } from "@/composables/modules/programs/useGetPrograms"
import latestJourno from '@/assets/img/journals-dust.jpg'
import { useGetPublications } from "@/composables/modules/publications/useGetPublications"
import { useGetLabCasts } from "@/composables/modules/labcast/useGetLabCasts"

const { labcasts, loading: loadingLabcasts } = useGetLabCasts()
const { publications, loading: loadingPublications } = useGetPublications()
const { programs, loading: fetchingPrograms } = useGetPrograms()
const journosList = ref([
  {
    title: 'FORGING A CAREER PATH 4.0',
    image: convo,
    desc: `The FACP program aims to expand the career horizons of young professionals and students in medical laboratory science by showcasing diverse opportunities beyond traditional clinical roles. In response to the evollving healthcare landscape. the program highlights various career paths within and outside the medical laboratory field, encouraging participants to explore their potential.`,
    secondPart: `Through interactive workshops, mentorship sessions, and networking events, the FACP program fosters an environment that promotes innovative thinking and professional development. Participants are inspired to consider careers in research, healthcare technology, public health, education, and industry innovation, ultimately redefining what success looks like in medical laboratory science. By transforming challenges into opportunities, the program seeks to empower individuals to forge their unique paths in this dynamic field.`,
    previousEditionUrl: '#',
    status: 'latest',
    registerUrl: '#'
  },
])

const { videoUrl } = useYoutubeVideo('rhVkU6HAbn0'); // Example video ID
console.log(videoUrl.value); // should log "https://www.youtube.com/embed/rhVkU6HAbn0"

const testimonials = ref([
  {
    name: 'Daniel Adekunle',
    testimonial: `MedLabConvo has been a game-changer for me. From knowledge gained through webinars to career mentorship, MedLabConvo has helped me grow professionally and personally. I now feel more confident about my future in medical laboratory science.`
  },
  {
    name: 'Mabel Omoniwa',
    testimonial: `MedLabConvo gave me clarity about my career path. The mentorship and resources have transformed the way I approach learning and professional growth. I now feel equipped to excel in the health ecosystem.`
  },
  {
    name: 'Shedrack Etuk',
    testimonial: `MedLabConvo has redefined professional development in medical laboratory science. The discussions, networking, and mentorship opportunities have enriched my career.`
  },
  {
    name: 'Paul Odeh',
    testimonial: `MedLabConvo fosters collaboration among medical lab scientists worldwide. It’s a great place to connect, learn, and contribute to the advancement of our profession.`
  },
  {
    name: 'Dolapo Moses',
    testimonial: `MedLabConvo organized an excellent and quintessential masterclass on scholarships, which was totally free. They shared quality and useful information with. I am sincerely challenged and encouraged to keep it up and not to give up. Thank you so much!`
  },
  {
    name: 'Jude Emeka',
    testimonial: `Honestly, the experience was eye-opening. I'm grateful to the organizers and the presenters for the amazing work they've done, and I look forward to other such programs from MedLabConvo.`
  }
])
</script>

<style scoped>


.youtube-video {
  max-width: 800px;
  margin: 0 auto;
}

.word {
  position: absolute;
  inset: 0;
  opacity: 0;    
  animation-fill-mode: both;
  text-align: center;
}

@keyframes fade-word {
  0%, 100% { opacity: 0; transform: translateY(10px); }
  10%, 40% { opacity: 1; transform: translateY(0); }
  50%, 100% { opacity: 0; transform: translateY(-10px); }
}

.animate-fade-word {
  animation: fade-word 6s ease-in-out infinite;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 1s ease-out 0.3s both;
}

.bg-grid-white {
  background-image: linear-gradient(white 1px, transparent 1px),
                    linear-gradient(90deg, white 1px, transparent 1px);
}
</style>
