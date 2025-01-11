<template>
<main>
  <div class="bg-gray-900">  
    <div class="relative isolate overflow-hidden pt-14">
      <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">MedLabConvo</h1>
          <p class="mt-6 text-lg leading-8 text-white">Inspiring and building the capacity of future generations of world class professionals in medical laboratory science and in the healthcare system at large</p>
          <!-- <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
          </div> -->
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </div>

  <div class="youtube-video pt-20">
    <h3 class="text-3xl font-semibold  text-gray-900 text-center pb-6">We are leading change, inspiring action and buidling the capacity of future world class Biomedical scientists
    </h3>
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-96"
    ></iframe>
  </div>

  <div class="max-w-7xl mx-auto py-12">
    <div class="grid grid-cols-1  lg:grid-cols-2 gap-8 px-4">
      <div 
        v-for="(image, index) in activitiesGrid" 
        :key="index" 
        class="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <h1 class="text-center text-base font-medium">{{ image.headerText }}</h1>
        <img :src="dynamicImage(image.img)" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-3">
          <button class="bg-black text- text-white py-3.5 w-full rounded-md">{{ image.actionText }}</button>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 p-6">
      <a :href="item.url" v-for="(item, idx) in journosList" :key="idx" class="flex block flex-col items-start justify-between">
        <div class="relative w-full">
          <img :src="item.image" alt="" class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
          <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div class="max-w-xl">
          <!-- <div class="mt-8 flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
          </div> -->
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
              <!-- <p class="text-gray-600">Co-Founder / CTO</p> -->
            </div>
          </div>
        </div>
      </a>

      <!-- More posts... -->
    </div>

  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We have worked with thousands of amazing people</p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          <div v-for="itm in 6" :key="itm" class="pt-8 sm:inline-block sm:w-full sm:px-4">
            <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
              <blockquote class="text-gray-900">
                <p>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <div>
                  <div class="font-semibold text-gray-900">Leslie Alexander</div>
                  <div class="text-gray-600">@lesliealexander</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 class="text-lg/8 font-semibold text-gray-900 text-center">PARTNERSHIPS</h2>
      <div class="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-6">
        <img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"  src="@/assets/img/partner1.jpeg" alt="Transistor" width="158" height="48">
        <img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"  src="@/assets/img/partner2.jpeg" alt="Reform" width="158" height="48">
        <img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"  src="@/assets/img/partner3.jpeg" alt="Tuple" width="158" height="48">
        <img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"  src="@/assets/img/partner4.jpeg" alt="SavvyCal" width="158" height="48">
        <img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="@/assets/img/partner5.jpeg" alt="Statamic" width="158" height="48">
        <img class="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1" src="@/assets/img/partner6.jpeg" alt="Statamic" width="158" height="48">
      </div>
    </div>
  </div>
</div>


  <div class="bg-gray-100 py-10">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-2xl font-bold text-green-800">STAY IN THE KNOW</h2>
      <button
        class="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 focus:ring focus:ring-green-400"
        aria-label="Subscribe to our newsletter"
      >
        Subscribe to our newsletter
      </button>
      <div class="mt-8 text-gray-800">
        <p class="font-semibold">Let's Talk Med Lab</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="https://x.com/medlabconvo" class="text-gray-500 hover:text-black" aria-label="X">
            <img src="@/assets/img/logo1.png" class="fab fa-x-twitter h-10 w-10"/>
          </a>
          <a href="https://www.instagram.com/medlabconvo/" class="text-gray-500 hover:text-pink-500" aria-label="Instagram">
            <img src="@/assets/img/logo4.svg" class="fab fa-instagram h-10 w-10"/>
          </a>
          <a href="https://web.facebook.com/medlabconvo?_rdc=1&_rdr" class="text-gray-500 hover:text-blue-600" aria-label="Facebook">
            <img src="@/assets/img/logo3.svg" class="fab fa-facebook h-10 w-10"/>
          </a>
          <a href="https://www.linkedin.com/company/medlabconvo/" class="text-gray-500 hover:text-blue-500" aria-label="LinkedIn">
            <img src="@/assets/img/logo5.svg" class="fab fa-linkedin h-10 w-10"/>
          </a>
          <a href="https://mlcjourno.substack.com/" class="text-gray-500 hover:text-orange-400" aria-label="Substack">
            <img src="@/assets/img/substack.png" class="fab fa-medium h-10 w-10"/>
          </a>
          <a href="https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e" class="text-gray-500 hover:text-green-500" aria-label="Spotify">
            <img src="@/assets/img/logo2.png" class="fab fa-spotify h-10 w-10"/>
          </a>
        </div>
      </div>
    </div>
  </div>
  
<!-- <footer class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
    <div class="flex justify-center gap-x-6 md:order-2">
      <a href="#" class="text-gray-600 hover:text-gray-800">
        <span class="sr-only">Facebook</span>
        <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-800">
        <span class="sr-only">Instagram</span>
        <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-800">
        <span class="sr-only">X</span>
        <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-800">
        <span class="sr-only">GitHub</span>
        <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="#" class="text-gray-600 hover:text-gray-800">
        <span class="sr-only">YouTube</span>
        <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
    <p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">&copy; 2024 Your Company, Inc. All rights reserved.</p>
  </div>
</footer> -->

</main>
</template>

<script setup lang="ts">
import { dynamicImage } from '@/utils/assets'
import { useYoutubeVideo } from '@/composables/useYoutubeVideo';
import journo1 from '@/assets/img/journo1.jpeg'
import journo2 from '@/assets/img/journo2.jpeg'
import journo3 from '@/assets/img/lab-coast/journo3.jpeg'
import journo4 from '@/assets/img/lab-coast/journo4.jpeg'
import journo5 from '@/assets/img/lab-coast/journo5.jpeg'
import journo6 from '@/assets/img/lab-coast/journo6.jpeg'
import journo7 from '@/assets/img/lab-coast/journo7.jpeg'
const isOpen = ref(false)

const activitiesGrid = ref([
  {
    img: 'convo1.jpg',
    actionText: 'Listen',
    headerText: 'Latest on LabCast',
    url: ''
  },
  {
    img: 'convo2.jpg',
    actionText: 'Read',
    headerText: 'Latest on Journo',
    url: ''
  },
  {
    img: 'convo3.png',
    actionText: 'Learn More',
    headerText: 'Rent Our Virtual Space',
    url: ''
  },
  {
    img: 'convo4.jpg',
    actionText: 'Book Now',
    headerText: 'Upcoming Program',
    url: ''
  },
  {
    img: 'convo5.jpg',
    actionText: 'Order',
    headerText: 'Latest T-shirt Release',
    url: ''
  },
  {
    img: 'convo5.jpg',
    actionText: 'Order',
    headerText: 'Latest Book Release',
    url: ''
  }
])

 const journosList = ref([
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

// Pass the video ID of the YouTube video you want to embed
const { videoUrl } = useYoutubeVideo('rhVkU6HAbn0'); // Example video ID
</script>

<style scoped>
.youtube-video {
  max-width: 800px;
  margin: 0 auto;
}
</style>

https://youtu.be/rhVkU6HAbn0?si=0kmABvBiaFLqbTRD