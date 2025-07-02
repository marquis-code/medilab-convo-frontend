<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div
        class="container mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div class="flex items-center space-x-2">
          <img src="@/assets/img/capera-logo.svg" />
          <!-- <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <div class="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <div class="text-white">
            <div class="font-bold text-lg">Capera</div>
            <div class="text-xs opacity-80">OIL & GAS</div>
          </div> -->
        </div>
        <div class="hidden md:flex space-x-8">
          <a
            href="#who-we-are"
            class="text-white hover:text-green-400 transition-colors"
            >Who we are</a
          >
          <a
            href="#what-we-do"
            class="text-white hover:text-green-400 transition-colors"
            >What we do</a
          >
          <a
            href="#contact"
            class="text-white hover:text-green-400 transition-colors"
            >Contact Us</a
          >
        </div>
        <button @click="toggleMobileMenu" class="md:hidden text-white">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-black/90 backdrop-blur-sm">
        <div class="px-4 py-2 space-y-2">
          <a
            href="#who-we-are"
            class="block text-white hover:text-green-400 py-2"
            >Who we are</a
          >
          <a
            href="#what-we-do"
            class="block text-white hover:text-green-400 py-2"
            >What we do</a
          >
          <a href="#contact" class="block text-white hover:text-green-400 py-2"
            >Contact Us</a
          >
        </div>
      </div>
    </nav>

    <!-- Hero Section -->

    <HeroSectionUpdated />
     <!-- <HeroSection /> -->

    <!-- Who We Are Section -->
     <!-- <div class="relative h-screen bg-[#1C5310] overflow-hidden sticky top-0" > -->
      <WhoWeAre5 />
     <!-- </div> -->
    <!-- <WhoWeAre id="who-we-are" /> -->
    <!-- <ParallaxSection id="who-we-are" /> -->

    <!-- Mission Statement -->
    <section class="py-44 bg-[#1C5310]">
      <div class="container mx-auto px-4">
        <div
          class="max-w-4xl mx-auto text-center"
          :class="{ 'animate-fade-in-up': isVisible.mission }"
        >
          <p class="text-white text-4xl md:text-6xl leading-relaxed">
            We believe that humanity can solve any challenge, that our greatest
            resource is our people, and that responsibility, trust and integrity
            will help us drive a prosperous future.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Purpose -->
     <!-- <OurPurpose /> -->
  <section class="space-y-[96px] bg-[#1C5310]">
    <section class="bg-[#1C5310]">
      <div class="px-4 md:px-[54px] mx-auto">
        <div class="">
          <div
            class="rounded-3xl overflow-hidden "
            :class="{ 'animate-fade-in-up': isVisible.purpose }"
          >
            <div class="grid md:grid-cols-2 min-h-[400px]">
              <!-- Left side - Dark green with text -->
              <div
                class="bg-[#032E00] py-16 space-y-[20px] lg:py-0 px-6 lg:px-[48px] flex flex-col justify-center"
              >
                <h2 class="text-5xl lg:text-8xl font-bold text-white mb-6">
                  Our purpose
                </h2>
                <p class="text-white text-lg lg:text-2xl font-medium leading-relaxed">
                  Capera's purpose is to provide affordable, reliable, energy
                  solution to enable human progress. This is at the heart of who
                  we are.
                </p>
              </div>
              <!-- Right side - Industrial facility image -->
              <div class="relative">
                <img
                  src="@/assets/img/card-image2.png"
                  alt="Industrial facility with gradient sky"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Culture -->
    <section class="bg-[#1C5310]">
      <div class="px-4 md:px-[54px] mx-auto">
        <div class="">
          <div
            class="bg-[#3BAB22] rounded-3xl overflow-hidden "
            :class="{ 'animate-fade-in-up': isVisible.culture }"
          >
            <div class="grid md:grid-cols-2 min-h-[400px]">
              <!-- Left side - Worker image -->
              <div class="relative">
                <img
                  src="@/assets/img/card-image5.png"
                  alt="Worker in industrial setting with hard hat"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Right side - Bright green with text -->
              <div
                class="bg-[#3BAB22] py-16 space-y-[20px] lg:py-0 px-6 lg:px-[48px] flex flex-col justify-center"
              >
                <h2 class="text-5xl lg:text-8xl font-bold text-white mb-6">
                  Our Culture
                </h2>
                <p class="text-white text-lg lg:text-2xl font-medium leading-relaxed">
                  We're a global team dedicated to working with people from all
                  walks of life. We believe human ingenuity has the power to
                  solve any challenge and we work towards living this belief
                  every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>

    <ServiceSection class="bg-[#1C5310]" />

    <!-- What We Do -->
    <section id="what-we-do" class="py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4">
        <div
          class="text-center mb-16"
          :class="{ 'animate-fade-in-up': isVisible.whatWeDo }"
        >
          <p class="text-[#1C5310] font-bold text-[24px] text-sm uppercase tracking-wider mb-4">
            WHAT WE DO
          </p>
          <!-- text-5xl md:text-6xl lg:text-[140px] font-bold text-[#3BAB22] mb-8 leading-tight -->
     <div class="flex justify-center items-center">
      <h2
            class="text-5xl md:text-6xl max-w-5xl text-center  lg:text-[140px] font-bold text-[#3BAB22] mb-8 leading-tight"
          >
            ENERGY THAT FUELS THE WORLD
          </h2>
     </div>
          <p class="text-[#1A1A1B] font-[400] leading-relaxed max-w-3xl mx-auto text-[20px]">
            We're working to deliver the energy needed today. To lower the
            carbon intensity of our operations. And to build the lower carbon
            energy system of tomorrow.
          </p>
        </div>
      </div>
    </section>

    <!-- Service Cards -->
    <section class="lg:mt-[128px] mb-[120px]">
      <div class="px-4 md:px-[54px] mx-auto space-y-16">
        <!-- Exploration Drilling -->
        <div class="">
          <div
            class="bg-white rounded-3xl overflow-hidden "
            :class="{ 'animate-fade-in-up': isVisible.drilling }"
          >
            <div class="grid md:grid-cols-2 min-h-[400px]">
              <!-- Left side - Dark green with text -->
              <div
                class="bg-[#032E00] py-16 space-y-[20px] lg:py-0 px-6 lg:px-[48px] flex flex-col justify-center"
              >
                <h3 class="text-5xl lg:text-8xl font-bold text-white mb-6">
                  Exploration Drilling
                </h3>
                <p class="text-white text-lg lg:text-2xl font-medium leading-relaxed">
                  Conducting geological surveys and drilling exploratory wells
                  to locate oil and gas reserves.
                </p>
              </div>
              <!-- Right side - Drilling equipment image -->
              <div class="relative">
                <img
                  src="@/assets/img/card-image4.png"
                  alt="Oil drilling equipment with reflection"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Procurement -->
        <div class="">
          <div
            class="bg-white rounded-3xl overflow-hidden "
            :class="{ 'animate-fade-in-up': isVisible.procurement }"
          >
            <div class="grid md:grid-cols-2 min-h-[400px]">
              <!-- Left side - Person working image -->
              <div class="relative">
                <img
                  src="@/assets/img/card-image6.png"
                  alt="Person working at desk with documents"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Right side - Bright green with text -->
              <div
                class="bg-[#3BAB22] py-16 lg:py-0 px-6 lg:px-[48px] flex flex-col justify-center"
              >
                <!-- <h3 class="text-4xl lg:text-7xl font-bold text-white mb-6">
                  Procurement
                </h3> -->
                <h2 class="text-5xl lg:text-8xl font-bold text-white mb-6">
                  Procurement
                </h2>
                <p class="text-white text-lg lg:text-2xl font-medium leading-loose">
                  End-to-end management of procurement processes, ensuring
                  timely delivery of materials and equipment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Supply of Refined Products -->
        <div class="">
          <div
            class="bg-white rounded-3xl overflow-hidden "
            :class="{ 'animate-fade-in-up': isVisible.supply }"
          >
            <div class="grid md:grid-cols-2 min-h-[400px]">
              <!-- Left side - Dark green with text -->
              <div
                class="bg-[#097A01] py-16 px-6 lg:px-[48px] lg:py-0 flex flex-col justify-center"
              >
                <h3 class="text-5xl lg:text-8xl font-bold text-white mb-6">
                  Supply of Refined Products
                </h3>
                <p class="text-white text-lg lg:text-2xl font-medium leading-loose">
                  Supply of premium base oils for industrial applications, along
                  with Diesel (AGO) and Petrol (PMS), delivered to industrial
                  facilities, filling stations, and commercial customers.
                </p>
              </div>
              <!-- Right side - Metal pipes image -->
              <div class="relative">
                <img
                  src="@/assets/img/card-image3.png"
                  alt="Industrial metal pipes and cylinders"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-[#1C5310] relative overflow-hidden">
      <!-- Large Background Text -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <!-- <div
          class="text-green-700/20 font-bold text-[20rem] md:text-[30rem] lg:text-[40rem] leading-none select-none"
        >
          CAPERA
        </div> -->
        <img src="@/assets/img/large-capera-bg.svg" />
      </div>

      <!-- <img src="@/assets/img/large-capera-bg.svg" /> -->
      <ContactUs />

    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ServiceSection from "../components/ServiceSection.vue";

// Mobile menu state
const mobileMenuOpen = ref(false);

// Visibility tracking for animations
const isVisible = ref({
  hero: false,
  whoWeAre: false,
  mission: false,
  purpose: false,
  culture: false,
  services: false,
  whatWeDo: false,
  drilling: false,
  procurement: false,
  supply: false,
  contact: false,
});

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Intersection Observer for animations
let observer: IntersectionObserver;

onMounted(() => {
  // Trigger hero animation immediately
  setTimeout(() => {
    isVisible.value.hero = true;
  }, 500);

  // Set up intersection observer for other sections
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const section = target.id || target.dataset.section;
          if (section && section in isVisible.value) {
            isVisible.value[section as keyof typeof isVisible.value] = true;
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe sections
  setTimeout(() => {
    const sections = document.querySelectorAll("section[id], [data-section]");
    sections.forEach((section) => observer.observe(section));
  }, 100);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

// Smooth scrolling for navigation links
const handleNavClick = (event: Event) => {
  const target = event.target as HTMLAnchorElement;
  if (target.href.includes("#")) {
    event.preventDefault();
    const id = target.href.split("#")[1];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      mobileMenuOpen.value = false;
    }
  }
};

// Add click listeners to navigation links
onMounted(() => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #22c55e;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #16a34a;
}
</style>
