<template>
    <main>
        <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
              <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
              <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center w-full flex-col pt-16">
              <div class="mx-auto max-w-2xl lg:mx-0 flex justify-center items-center w-full flex-col">
                <h2 class="text-4xl font-bold text-center text-uppercase tracking-tight text-white sm:text-6xl">Programs</h2>
                 <p class="mt-2 text-lg leading-8 text-white mt-3 text-center">At MedLabConvo, we are dedicated to empowering and supporting medical laboratory professionals and students through a range of impactful programs. Whether you are looking to enhance your career, connect with mentors, or develop key skills, our initiatives are designed to guide you every step of the way. </p>
              </div>
            </div>
          </div>

          <div class="container mx-auto px-4 mt-10 pb-10">
    
            <div v-for="(item, idx) in programsList" :key="idx" :class="[item.status === 'latest' ? 'border-8 border-[#27628C]' : '']" class="bg-gray-100 rounded-lg overflow-hidden mb-16">
              <div class="relative">
                <img :src="item.img" class="w-full lg:h-96 object-fill" />
              </div>
              
              <!-- Content -->
              <div class="p-6 md:p-8 space-y-6">
                <p class="text-gray-700 leading-relaxed">
                  {{ item.firstPart }}
                  <!-- The internship year is a crucial milestone for every Medical Laboratory Science (MLS) graduate—a period filled with opportunities but also significant challenges. Many interns struggle with navigating career growth, skill development, and systemic barriers, often missing out on the full potential of this transformative phase. -->

                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->
                </p>
                <p class="text-gray-700 leading-relaxed">
                  {{ item.secondPart }}
                  <!-- Interntional is a dynamic community built to bridge these gaps. Through mentorship, professional development, networking, and resource access, we empower MLS interns to thrive—not just survive—during their internship year. -->
                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. -->
                </p>

                <p class="text-gray-700 leading-relaxed">
                  Join us as we turn obstacles into stepping stones, unlocking a future of excellence in medical laboratory science.
                </p>


                
                <!-- Buttons -->
                <div class="flex flex-col space-y-4 max-w-md mx-auto pt-4">
                  <button @click="router.push(`/programs/${idx}`)" v-if="item.status === 'latest'" class="bg-teal-600 text-white py-3 px-6 rounded hover:bg-teal-700 transition-colors">
                  Learn  More
                  </button>
                  <!-- <button class="bg-teal-600 text-white py-3 px-6 rounded hover:bg-teal-700 transition-colors">
                    Join International
                  </button> -->
                </div>
              </div>
            </div>

          </div>
          
          <!-- <div class="bg-white pb-10">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl lg:max-w-4xl">
                <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                  <article v-for="(item, idx) in programsList"  class="relative isolate flex flex-col gap-8 lg:flex-row">
                    <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <img :src="item.img" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
                      <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div>
                      <div class="group relative max-w-xl">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            {{item.title}}
                          </a>
                        </h3>
                        <p class="mt-5 text-sm leading-6 text-gray-600">
                          {{ item.firstPart }}
                        </p>
                        <p class="mt-5 text-sm leading-6 text-gray-600">
                          {{ item.secondPart }}
                        </p>
                        <p class="mt-5 text-sm leading-6 text-gray-600">
                          {{ item.thirdPart }}
                        </p>
                      </div>
                     <div class="space-y-3 mt-6 w-full">
                      <div class="w-full">
                        <NuxtLink :to="item.previousEditionUrl" class="py-3 block text-center rounded-md w-full bg-black text-white ">Previous Edition</NuxtLink>
                      </div>
                      <div class="w-full">
                        <NuxtLink :to="item.registerUrl" class="py-3 block text-center rounded-md w-full bg-black text-white ">Register for ORIGINS 2025</NuxtLink>
                      </div>
                     </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div> -->
    </main>      
</template>

<script setup lang="ts">
import img1 from '@/assets/img/medics.jpg'
import img2 from '@/assets/img/forging-a-path.jpg'
import img3 from '@/assets/img/happenings.jpg'
import img4 from '@/assets/img/origins.jpeg'
const router = useRouter()
const programsList = ref([
  {
    title: 'ORIGINS',
    img: img4,
    firstPart: `ORIGINS is a program specifically designed for freshmen and sophomores, aimed at equipping them with the essential knowledge, skills, mindset, and network opportunities they need to excel academically and grow into top-tier professionals. By focusing on the foundational years of a student’s academic journey, ORIGINS provides the tools and support necessary to help participants develop the right attitudes and cultivate a strong professional identity early on.`,
    secondPart: `Through a combination of workshops, mentorship, and networking events, the program empowers students to navigate the challenges of their academic life with confidence, while building a network of peers and industry experts that will support their future career goals. ORIGINS not only helps students excel in the classroom but also prepares them to transition smoothly into their professional lives as standout leaders in their chosen fields.`,
    previousEditionUrl: '#',
    status: 'latest',
    registerUrl: '#'
  },
  {
    title: 'FORGING A CAREER PATH',
    img: img2,
    firstPart: `The FACP program is designed to broaden the horizons of young medical laboratory science professionals and students by introducing them to a wide range of alternative career opportunities beyond the traditional clinical laboratory bench work. With the evolving landscape of healthcare and science, this program aims to expose participants to the many diverse career paths available within and beyond the field of medical laboratory science.`,
    secondPart: `Through engaging workshops, mentorship sessions, and networking opportunities, the FACP program encourages individuals to think outside the conventional career box. Whether it's roles in research, healthcare technology, public health, education, or industry innovation, participants are inspired to explore and pursue unique professional trajectories that align with their interests and strengths. This program serves as a launching pad for those looking to break new ground and redefine what a successful career in medical laboratory science can look like.`,
    previousEditionUrl: '#',
    status: 'old',
    registerUrl: '#'
  },
  {
    title: '21ST CENTURY BIOMEDICAL SCIENCE CONFERENCE',
    img: img3,
    firstPart: `Held annually during World Biomedical Scientist Week, the Biomedical Science Conference (BMSC) serves as a platform to educate and engage both emerging and seasoned medical laboratory scientists, as well as the broader healthcare community, on pressing global health challenges. The BMSC offers a unique opportunity to explore these critical issues while highlighting cutting-edge technological innovations and practical solutions aimed at addressing them.
`,
    secondPart: `Through a series of expert-led discussions, interactive workshops, and presentations from leading professionals, the conference fosters a collaborative environment where participants can gain valuable insights, exchange ideas, and contribute to the advancement of healthcare. Whether you're a young professional just starting out or a seasoned expert, the BMSC is committed to empowering the health community with the tools and knowledge needed to tackle today’s global health challenges effectively.`,
    previousEditionUrl: '#',
    status: 'old',
    registerUrl: '#'
  },
  // {
  //   title: 'EMERGING THOUGHT LEADERS IN HEALTH FELLOWSHIP',
  //   img: '',
  //   firstPart: `This fellowship is designed to empower students and young professionals who aspire to become future leaders in the health sector. Through this program, participants will be equipped with the knowledge, tools, and skills necessary to drive meaningful change within their specific areas of interest. `,
  //   secondPart: `By offering a blend of expert-led workshops, hands-on training, mentorship, and networking opportunities, this program ensures that participants are prepared not only to excel in their careers but to actively lead transformative initiatives in their communities and beyond. Our aim is to develop well-rounded health professionals who are not only proficient in their fields but also capable of inspiring and leading innovation in healthcare.`,
  //   thirdPart: `This fellowship serves as a launching pad for those eager to take on the challenges of modern healthcare and become catalysts for progress in their chosen specialties.`,
  //   previousEditionUrl: '#',
  //   registerUrl: '#'
  // },
  {
    title: 'MEDICS IN TECH',
    img: img1,
    firstPart: `At the intersection of healthcare and technology, Medics in Tech is a program designed for medical professionals who want to explore and excel in the world of technology. Whether you’re curious about tech innovation, data science, or digital health solutions, our program equips you with the skills and knowledge to navigate this dynamic landscape. `,
    secondPart: `Through comprehensive training, mentorship from industry experts, and exposure to cutting-edge technologies, Medics in Tech empowers healthcare professionals to bridge the gap between medicine and technology. Whether you're looking to integrate tech solutions into clinical practice, work in healthcare IT, or pursue a career in medical research with a technological focus, this program is your gateway to unlocking new opportunities and shaping the future of healthcare. `,
    previousEditionUrl: '#',
    status: 'old',
    registerUrl: '#'
  }
])
</script>

<style scoped>
  header {
    background-image: url('/path-to-background-image.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
