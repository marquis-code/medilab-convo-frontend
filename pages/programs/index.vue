<template>
    <main>
        <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img src="@/assets/img/banner1.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
              <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
              <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Programs</h2>
                <p class="mt-6 text-lg leading-8 text-gray-300"></p>
              </div>
            </div>
          </div>
          
          <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl lg:max-w-4xl">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">At MedLabConvo, we are dedicated to empowering and supporting medical laboratory professionals and students through a range of impactful programs. Whether you are looking to enhance your career, connect with mentors, or develop key skills, our initiatives are designed to guide you every step of the way. </p>
                <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                  <article v-for="(item, idx) in programsList"  class="relative isolate flex flex-col gap-8 lg:flex-row">
                    <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
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
          </div>
    </main>      
</template>

<script setup lang="ts">
const programsList = ref([
  {
    title: 'ORIGINS',
    img: '',
    firstPart: `ORIGINS is a program specifically designed for freshmen and sophomores, aimed at equipping them with the essential knowledge, skills, mindset, and network opportunities they need to excel academically and grow into top-tier professionals. By focusing on the foundational years of a student’s academic journey, ORIGINS provides the tools and support necessary to help participants develop the right attitudes and cultivate a strong professional identity early on.`,
    secondPart: `Through a combination of workshops, mentorship, and networking events, the program empowers students to navigate the challenges of their academic life with confidence, while building a network of peers and industry experts that will support their future career goals. ORIGINS not only helps students excel in the classroom but also prepares them to transition smoothly into their professional lives as standout leaders in their chosen fields.`,
    previousEditionUrl: '#',
    registerUrl: '#'
  },
  {
    title: 'FORGING A CAREER PATH',
    img: '',
    firstPart: `The FACP program is designed to broaden the horizons of young medical laboratory science professionals and students by introducing them to a wide range of alternative career opportunities beyond the traditional clinical laboratory bench work. With the evolving landscape of healthcare and science, this program aims to expose participants to the many diverse career paths available within and beyond the field of medical laboratory science.`,
    secondPart: `Through engaging workshops, mentorship sessions, and networking opportunities, the FACP program encourages individuals to think outside the conventional career box. Whether it's roles in research, healthcare technology, public health, education, or industry innovation, participants are inspired to explore and pursue unique professional trajectories that align with their interests and strengths. This program serves as a launching pad for those looking to break new ground and redefine what a successful career in medical laboratory science can look like.`,
    previousEditionUrl: '#',
    registerUrl: '#'
  },
  {
    title: '21ST CENTURY BIOMEDICAL SCIENCE CONFERENCE',
    img: '',
    firstPart: `Held annually during World Biomedical Scientist Week, the Biomedical Science Conference (BMSC) serves as a platform to educate and engage both emerging and seasoned medical laboratory scientists, as well as the broader healthcare community, on pressing global health challenges. The BMSC offers a unique opportunity to explore these critical issues while highlighting cutting-edge technological innovations and practical solutions aimed at addressing them.
`,
    secondPart: `Through a series of expert-led discussions, interactive workshops, and presentations from leading professionals, the conference fosters a collaborative environment where participants can gain valuable insights, exchange ideas, and contribute to the advancement of healthcare. Whether you're a young professional just starting out or a seasoned expert, the BMSC is committed to empowering the health community with the tools and knowledge needed to tackle today’s global health challenges effectively.`,
    previousEditionUrl: '#',
    registerUrl: '#'
  },
  {
    title: 'EMERGING THOUGHT LEADERS IN HEALTH FELLOWSHIP',
    img: '',
    firstPart: `This fellowship is designed to empower students and young professionals who aspire to become future leaders in the health sector. Through this program, participants will be equipped with the knowledge, tools, and skills necessary to drive meaningful change within their specific areas of interest. `,
    secondPart: `By offering a blend of expert-led workshops, hands-on training, mentorship, and networking opportunities, this program ensures that participants are prepared not only to excel in their careers but to actively lead transformative initiatives in their communities and beyond. Our aim is to develop well-rounded health professionals who are not only proficient in their fields but also capable of inspiring and leading innovation in healthcare.`,
    thirdPart: `This fellowship serves as a launching pad for those eager to take on the challenges of modern healthcare and become catalysts for progress in their chosen specialties.`,
    previousEditionUrl: '#',
    registerUrl: '#'
  },
  {
    title: 'MEDICS IN TECH',
    img: '',
    firstPart: `At the intersection of healthcare and technology, Medics in Tech is a program designed for medical professionals who want to explore and excel in the world of technology. Whether you’re curious about tech innovation, data science, or digital health solutions, our program equips you with the skills and knowledge to navigate this dynamic landscape. `,
    secondPart: `Through comprehensive training, mentorship from industry experts, and exposure to cutting-edge technologies, Medics in Tech empowers healthcare professionals to bridge the gap between medicine and technology. Whether you're looking to integrate tech solutions into clinical practice, work in healthcare IT, or pursue a career in medical research with a technological focus, this program is your gateway to unlocking new opportunities and shaping the future of healthcare. `,
    previousEditionUrl: '#',
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
