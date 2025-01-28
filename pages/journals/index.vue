<template>
  <main>
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center w-full pt-16 flex-col">
        <div class="mx-auto max-w-2xl lg:mx-0 flex justify-center items-center w-full flex-col">
          <h2 data-aos="fade-up"
            class="text-4xl font-bold text-center tracking-tight uppercase text-white sm:text-6xl">Journo</h2>
          <p data-aos="fade-up" class="mt-6 text-lg leading-8 text-center text-gray-100">Journo is the go-to platform
            for insightful stories, expert perspectives, and in-depth analysis on all things related to medical
            laboratory science and healthcare. Whether you’re a student, a professional, or just passionate about
            healthcare, Journo delivers content that informs, educates, and sparks conversation within the medical
            community.</p>
        </div>
      </div>
    </div>

    <h2 data-aos="fade-up" class="text-2xl pt-20 font-bold tracking-tight text-[#27628C] text-center">LATEST
      PUBLICATION</h2>

    <div class="relative bg-[#27628C] lg:mt-10 pt-0 lg:pb-72">
      <div
        class="relative h-80 overflow-hidden  md:absolute md:left-0 md:h-full mt-44 pb-[400px] lg:pb-0 md:w-1/3 lg:w-1/2">
        <img data-aos="fade-up" class="size-full object-cover" src="@/assets/img/updates3.jpeg" alt="">
      </div>
      <div class="relative mx-auto max-w-7xl py-24 sm:py-32 px-10 lg:px-0 lg:px-8 lg:py-40">
        <div class="md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2">
          <p data-aos="fade-up" class="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">How Systemic Deficiencies Fuel the "Japa Jets"</p>
          <p data-aos="fade-up" class="mt-6 text-base/7 text-white sr-only"> One day, Mamooo's son, Tega, returned home after
            national youth service but Mamooo couldn’t believe her eyes. Tega’s gaunt frame and sun-scorched skin sent
            his mother into a frenzy. His eyes, once bright and full of life, now seemed dull and sunken. She
            immediately provided him with her 'miracle meds': anti-malaria, amoxicillin, and multivitamins. With a
            knowing glint in her eye, she declared, “Nah those giant mosquitoes wey dey that camp wan suck my pikin
            blood dry, na why he con resemble toothpick!”</p>
          <div data-aos="fade-up" class="mt-8">
            <a href="https://mlcjourno.substack.com//"
              class="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">View
              publications <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>


    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 data-aos="fade-up" class="text-balance text-3xl font-semibold tracking-tight text-gray-900 uppercase ">
            More From JOURNO</h2>
        </div>
        <div data-aos="fade-up"
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <a data-aos="fade-up" :href="item.url" v-for="(item, idx) in journosList" :key="idx"
            class="flex block flex-col items-start justify-between">
            <div class="relative w-full">
              <img :src="item.image" alt=""
                class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div class="max-w-xl">
              <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    {{ item?.title ?? 'Nil' }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ item?.desc ?? 'Nil' }}</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img src="@/assets/icons/avatar.svg" alt="" class="h-10 w-10 rounded-full bg-gray-100">
                <div class="text-sm/6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      {{ item?.author ?? 'Nil' }}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>


    <div class="relative isolate overflow-hidden bg-[#27628C] py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div class="max-w-xl lg:max-w-lg">
            <h2 data-aos="fade-up" class="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl"> Be
              the first. Get Journo in your mail.</h2>
            <p data-aos="fade-up" class="mt-4 text-lg leading-8 text-center text-gray-200">If you would like to have
              early access to all articles published on Journo, sign up for our special mailing list for free..</p>
          </div>
          <iframe src="https://mlcjourno.substack.com/embed" width="480" height="320"
            style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
    </div>


  </main>
</template>

<script setup lang="ts">
import journo1 from '@/assets/img/journo1.jpeg'
import updates2 from '@/assets/img/updates2.jpeg'
import journo2 from '@/assets/img/journo2.jpeg'
import journo3 from '@/assets/img/lab-coast/journo3.jpeg'
import journo4 from '@/assets/img/lab-coast/journo4.jpeg'
import journo5 from '@/assets/img/lab-coast/journo5.jpeg'
import journo6 from '@/assets/img/lab-coast/journo6.jpeg'
import journo7 from '@/assets/img/lab-coast/journo7.jpeg'

const journosList = ref([
{
    image: updates2,
    title: 'FROM ‘MIRACLE MEDS’ TO MAYHEM: COMBATING ANTIMICROBIAL RESISTANCE',
    desc: `One day, Mamooo's son, Tega, returned home after national youth service but Mamooo couldn’t believe her eyes. Tega’s gaunt frame and sun-scorched skin sent his mother into a frenzy. His eyes, once bright and full of life, now seemed dull and sunken. She immediately provided him with her 'miracle meds': anti-malaria, amoxicillin, and multivitamins. With a knowing glint in her eye, she declared, “Nah those giant mosquitoes wey dey that camp wan suck my pikin blood dry, na why he con resemble toothpick!”`,
    author: '',
    url: 'https://mlcjourno.substack.com/p/from-miracle-meds-to-mayhem-combating'
  },
  {
    image: journo1,
    title: 'Sexism in STEM: A Farce or Fact',
    desc: 'The story of Rosalind Franklin comes to mind when we begin to explore the reality of women that are in STEM. Before her early death due to ovarian cancer, she was a woman who made mind-blowing breakthroughs in the field of X-ray crystallography. She is known for her contribution towards the discovery of the DNA structure - a molecule that is fundamental to life.',
    author: 'Bamidele Toluwase, and Williams Owoeye',
    url: 'https://mlcjourno.substack.com/p/sexism-in-stem-a-farce-or-fact'
  },
  {
    image: journo2,
    title: 'Seeing is Believing',
    desc: 'The World Health Organization (WHO) defines vaccine hesitancy as a delay in acceptance or refusal of safe vaccines despite the availability of vaccination services, and in 2019, it was declared as one of the ten global threats to public health. The trend of refusal of vaccines has increased over the years, and there are so many factors influencing this increasing trend.',
    author: 'Precious Sylvanus',
    url: 'https://mlcjourno.substack.com/p/seeing-is-believing'
  },
  {
    image: journo3,
    title: 'The Role of Medical Laboratory Science in the Entertainment Industry',
    desc: 'Defining entertainment is one of those essay questions you\'d rather skip in an examination hall and look for easier ones. Although even secondary school students understand the concept of entertainment, putting words to it in a way that is academically cohesive and encompassing is a great hassle. This great dilemma lies in the reality that entertainment is intricately linked with human lifestyle. As a concept, it\'s ubiquitous but as a definition, it is ambiguous. ',
    author: 'Williams Owoeye',
    url: 'https://mlcjourno.substack.com/p/the-role-of-medical-laboratory-science'
  },
  {
    image: journo4,
    title: 'Another Pandemic Looming? The Mpox Saga',
    desc: 'Viral diseases have been one of the major global health crises that the world has been battling nonstop over the past decade. From Lassa fever to Ebola to COVID-19, humanity has lost countless souls, soldiers and civilians alike, in this seemingly unending battle with these “environmental” microbes. We have barely recovered from the devastation of the last viral outbreak, COVID-19, and already it looks like we are on the verge of another pandemic',
    author: 'Precious Sylvanus',
    url: 'https://mlcjourno.substack.com/p/another-pandemic-looming-the-mpox'
  },
  {
    image: journo5,
    title: 'Lightbulb Moments: Zapping Out the Power from its Empowerment',
    desc: 'Today, good health is important for man’s continued existence. As such, light bulb moments in health (education) are a key component for everyone. The ability to learn about healthier habits and disease prevention mechanisms for everyday people is key to reducing the incidence of chronic diseases, helping them make informed health decisions, and improving their health outcomes. ',
    author: 'Williams Owoeye and Ernesto Dibia',
    url: 'https://mlcjourno.substack.com/p/lightbulb-moments-zapping-out-the'
  },
  {
    image: journo6,
    title: 'MEDICAL LABORATORY SCIENCE INTERNSHIP: STATE OF ACCREDITED CENTERS',
    desc: 'The medical laboratory science graduate internship is a professional learning experience that offers clinical work- experience for every young medical laboratory science graduate.  According to the Medical Laboratory Science Council of Nigeria, every graduate of the profession has to undergo this period of internship at an accredited centre. There are currently about 117 accredited centres including private hospitals and independent laboratories across the country.',
    author: 'Ernesto Dibia, and Oluwaponmile',
    url: 'https://mlcjourno.substack.com/p/medical-laboratory-science-internship'
  },
  {
    image: journo7,
    title: 'From Culture Plates to Culture Shifts: Cultivating Influence as Medical Laboratory Scientists',
    desc: 'In the medical laboratory world, cultivating influence can be a bit like growing cultures on  a petri dish - one needs the right conditions, the proper mechanism and precise supervision of the organisms.',
    author: 'Ubani Confidence and Bamidele Toluwase',
    url: 'https://mlcjourno.substack.com/p/from-culture-plates-to-culture-shifts'
  }
])
</script>