<template>
    <section class="pt-16 lg:pt-20 bg-[#1C5310] relative overflow-hidden">
      <!-- Background pattern -->
      <!-- <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div> -->
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
  
      <div class="container mx-auto px-4 relative z-10">
        <!-- Header Section -->
        <div
          class="text-center mb-16 lg:mb-20"
          :class="{ 'animate-fade-in-up': isVisible.contact }"
        >
          <p class="text-white text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wider mb-6">
            GET IN TOUCH
          </p>
          <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#3BAB22] mb-12 leading-none">
            CONTACT US
          </h2>
        </div>
  
        <!-- Main Content Grid -->
        <div
          class="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20"
          :class="{ 'animate-fade-in-up': isVisible.contact }"
        >
          <!-- Left Column - Company Name -->
          <div class="text-white">
            <h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12 leading-tight">
              Capera Oil and Gas limited
            </h3>
          </div>
  
          <!-- Right Column - Contact Info -->
          <div class="text-white space-y-8 lg:space-y-12">
            <div>
              <h4 class="text-lg lg:text-xl font-semibold mb-3">Address</h4>
              <p class="text-white/80 text-base lg:text-lg">42 Local, Airport Rd, Ikeja</p>
            </div>
  
            <div>
              <h4 class="text-lg lg:text-xl font-semibold mb-3">Email</h4>
              <a
                href="mailto:hello@withcapera.com"
                class="text-white/80 hover:text-white transition-colors underline text-base lg:text-lg"
              >
                hello@withcapera.com
              </a>
            </div>
          </div>
        </div>
  
        <!-- Footer Section -->
        <div class="lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          <!-- Left Column - Logo and Tagline -->
          <div class="text-white">
           <section class="lg:flex max-w-3xl justify-between w-full">
            <section class="order-0">
                <div class="flex items-center space-x-3 mb-6">
              <img 
                src="@/assets/img/capera-logo.svg" 
                alt="Capera Logo"
                class="h-10"
              />
            </div>
  
            <p class="text-xl lg:text-2xl mb-8 font-medium">Reliable energy, limitless potential</p>
            </section>
  
            <div class="space-y-6 order-1">
              <div>
                <h4 class="text-lg lg:text-xl font-semibold mb-4 uppercase tracking-wide">EXPLORE</h4>
                <div class="space-y-3">
                  <a
                    href="#who-we-are"
                    class="block text-white/80 hover:text-white transition-colors text-base lg:text-lg"
                  >
                    WHO WE ARE
                  </a>
                  <a
                    href="#what-we-do"
                    class="block text-white/80 hover:text-white transition-colors text-base lg:text-lg"
                  >
                    WHAT WE DO
                  </a>
                  <a
                    href="#contact"
                    class="block text-white/80 hover:text-white transition-colors text-base lg:text-lg"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
           </section>
  
            <p class="text-white/60 text-sm mt-12">
              © 2025 Capera Limited. All rights reserved.
            </p>
          </div>
  
          <!-- Right Column - Social Media Icons -->
          <div class="flex justify-start mt-6 lg:justify-end">
            <div class="flex space-x-4">
              <!-- Twitter -->
              <a
                href="#"
                class="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.55016 21.7497C16.6045 21.7497 21.5583 14.2465 21.5583 7.74162C21.5583 7.53068 21.5536 7.31505 21.5442 7.10412C22.5079 6.40722 23.3395 5.54401 24 4.55505C23.1025 4.95436 22.1496 5.21514 21.1739 5.32849C22.2013 4.71266 22.9705 3.74523 23.3391 2.60552C22.3726 3.17831 21.3156 3.58237 20.2134 3.80037C19.4708 3.01132 18.489 2.48887 17.4197 2.31381C16.3504 2.13874 15.2532 2.32081 14.2977 2.83185C13.3423 3.3429 12.5818 4.15446 12.1338 5.14107C11.6859 6.12767 11.5754 7.23437 11.8195 8.29005C9.86249 8.19185 7.94794 7.68346 6.19998 6.79785C4.45203 5.91225 2.90969 4.66919 1.67297 3.14927C1.0444 4.233 0.852057 5.5154 1.13503 6.73585C1.418 7.95629 2.15506 9.0232 3.19641 9.71974C2.41463 9.69492 1.64998 9.48444 0.965625 9.10568V9.16662C0.964925 10.3039 1.3581 11.4063 2.07831 12.2865C2.79852 13.1667 3.80132 13.7703 4.91625 13.9947C4.19206 14.1929 3.43198 14.2218 2.69484 14.0791C3.00945 15.0572 3.62157 15.9126 4.44577 16.5261C5.26997 17.1395 6.26512 17.4804 7.29234 17.501C5.54842 18.8709 3.39417 19.6139 1.17656 19.6104C0.783287 19.6098 0.390399 19.5857 0 19.5382C2.25286 20.9835 4.87353 21.7511 7.55016 21.7497Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
  
              <!-- LinkedIn -->
              <a
                href="#"
                class="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1625_159111)">
                    <path
                      d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1625_159111">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
  
              <!-- Facebook -->
              <a
                href="#"
                class="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1625_159112)">
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1625_159112">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
  
              <!-- GitHub -->
              <a
                href="#"
                class="text-white/60 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1625_159113)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1625_159113">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
  
              <!-- Dribbble -->
              <a
                href="#"
                class="text-white/60 hover:text-white transition-colors"
                aria-label="Dribbble"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  // Animation visibility state
  const isVisible = ref({
    contact: false
  })
  
  onMounted(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      isVisible.value.contact = true
    }, 100)
  })
  </script>
  
  <style scoped>
  /* Custom animation for fade in up effect */
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
  
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }
  
  /* Ensure text renders crisply */
  h2, h3 {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Mobile-specific adjustments */
  @media (max-width: 1024px) {
    .grid {
      gap: 3rem;
    }
  }
  
  @media (max-width: 768px) {
    .grid {
      gap: 2rem;
    }
  }
  </style>
  