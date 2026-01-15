<template>
    <div class="overflow-hidden bg-white mt-20">
        <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-[#27628C] lg:block"></div>
            <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                    <h3 class="mt-2 text-3xl/8 font-bold tracking-tight  sm:text-4xl text-[#27628C] uppercase text-center lg:text-start">Origins</h3>
                </div>
            </div>
            <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="relative lg:col-start-2 lg:row-start-1">
                    <svg class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block" width="404" height="384"
                        fill="#ffffff" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                                patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="#ffffff" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                    </svg>
                    <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                        <figure>
                            <img class="w-full rounded-lg object-cover shadow-lg lg:aspect-auto"
                                src="@/assets/img/origins2026.jpg"
                                alt="origins 2026" width="1184" height="1376">
                        </figure>
                    </div>
                </div>
                <div class="mt-8 lg:mt-0">
                    <div class="mx-auto text-base/7 text-gray-500">
                        <p class="text-lg/7">ORIGINS is a program specifically designed for undergraduates,
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
                        <p class="mt-5">Join us as we turn obstacles into stepping stones, unlocking a future of
                            excellence in medical laboratory science.</p>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-center text-[#27628C] uppercase">Speakers</h1>
        <section class="grid lg:grid-cols-3 gap-6 mx-auto max-w-7xl pb-6 p-3 lg:p-0">
            <article  @click="openModal(item)"  v-for="item in schedules" class="flex bg-white border-[0.5px] border-gray-10 rounded-lg transition hover:shadow-xl">

                <div class="sm:basis-56 border-[0.5px] border-gray-50 rounded-lg">
                    <img alt=""
                        :src="item.image"
                        class="aspect-square h-full w-32 object-cover" />
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

                        <p class="text-xs font-bold pt-5">CLICK TO SEE SPEAKER'S PROFILE</p>
                    </div>
                </div>
            </article>
        </section>

       <div class="flex justify-center items-center my-10 p-3 lg:p-0">
        <a 
  href="https://forms.gle/5xBM7GdA65nQeMzU9"
  target="_blank"
  rel="noopener noreferrer"
  class="text-white text-center bg-[#27628C] rounded-lg w-full px-6 py-3.5 max-w-lg"
>
  Register
</a>
       </div>
    </div>

    <SpeakerModal
      v-if="selectedSpeaker"
      :speaker="selectedSpeaker"
      :is-visible="isModalVisible"
      @close="closeModal"
    />

</template>



<script setup lang="ts">
import speaker1 from '@/assets/img/speaker1.jpeg'
import speaker2 from '@/assets/img/speaker2.jpeg'
import speaker3 from '@/assets/img/speaker3.jpeg'
import speaker4 from '@/assets/img/speaker4.jpeg'
import speaker5 from '@/assets/img/speaker5.jpeg'
import speaker6 from '@/assets/img/speaker6.jpeg'
import speaker7 from '@/assets/img/speaker7.jpeg'
import speaker8 from '@/assets/img/speaker8.jpeg'
import img4 from '@/assets/img/origins.jpeg'
// const schedules = ref([
//     {image: speaker3, "date_and_time": "Friday, 31st January, 2025, 8 pm - 9 pm", "topic": "The Identity of the Medical Laboratory Scientist", "speaker": "Friday Odum"},
//     {image: speaker2, "date_and_time": "Saturday, 1st February, 2025, 8 pm - 9 pm", "topic": "Building a professional network", "speaker": "Ridwan Agboola"},
//     {image: speaker4, "date_and_time": "Sunday, 2nd February, 2024, 8 pm - 9 pm", "topic": "Time management", "speaker": "Glory Ogunbodede"},
//     {image: speaker1, "date_and_time": "Friday, 7th February, 2025, 8 pm - 9 pm", "topic": "Research for undergraduates", "speaker": "Emmanuel Elebesunu"},
//     {image: speaker5, "date_and_time": "Saturday, 8th February, 2025, 8 pm - 9 pm", "topic": "Mentorship for Undergraduates", "speaker": "Odinaka Obeta"},
//     {image: speaker6, "date_and_time": "Sunday, 9th February, 2024, 8 pm - 9 pm", "topic": "Scholarship and Fellowship opportunities for undergraduates", "speaker": "Kamsi Muoka"},
//     {image: speaker7, "date_and_time": "Saturday, 15th February, 2025", "topic": "Volunteering", "speaker": "Williams Owoeye"},
//     {image: speaker8, "date_and_time": "Sunday, 16th February, 2025", "topic": "Leadership and Social Impact", "speaker": "Fatima Ibrahim"}
// ])


const schedules = ref([
    {
        image: speaker3,
        "date_and_time": "Friday, 31st January, 2025, 8 pm - 9 pm",
        "topic": "To Thyself be True - Developing an Identity as a Medical Laboratory Scientist",
        "speaker": "Friday Odum",
        "bio":  `
           ODUM, Acho Friday Is a Biomedical Scientist with over seven years working experience, He holds an MPH (Field Epidemiology) degree from the university of Ibadan, he had his undergraduate study from the university of Calabar where he obtained his BMLS in 2017.
 
           He is a registered Biomedical Scientist with the United Kingdom Health and Care Professional Council, He is a Licientiate member of the Institute of Biomedical Science UK, also an associate member of the Medical Laboratory Science Council of Nigeria.

           As a result of his commitment to excellence and drive for quality in Medical Laboratory practice in Nigeria, He was awarded the medical laboratory scientist of the year 2021. He has trained many Laboratory Scientists on Equipment use, maintenance, calibration, troubleshooting and Laboratory Quality Management System (QMS). He has also facilated several trainings including the ISN Quality Assurance Summit themed "Demystifying ISO15189".

           He is currently a Specialist Biomedical Scientist with NHS Forth Valley.
        `
    },
    {
        image: speaker2,
        "date_and_time": "Saturday, 1st February, 2025, 8 pm - 9 pm",
        "topic": "Building and Optimizing Professional Networks for the Present and Future",
        "speaker": "Ridwan Agboola",
        "bio": `
        Ridwan Agboola is a final-year Medical Laboratory Science student at the University of Ibadan, specializing in Clinical Biochemistry. He is an eStudent member of the Institute of Biomedical Science (IBMS) where he participates in the IBMS mentorship scheme. He is also an International Lab Student member of the American Society for Clinical Pathology (ASCP).

        With strong interests in cancer research, metabolic diseases, immunology, and molecular biology, Ridwan is committed to advancing medical science and addressing critical global health issues. As a volunteer with the Smilebuilders Initiative and the United Nations Volunteers program, he actively contributes to initiatives focused on tackling health challenges and supporting the achievement of the Sustainable Development Goals (SDGs).

        In his free time, he loves playing football and exploring opportunities.

        `
    },
    {
        image: speaker4,
        "date_and_time": "Sunday, 2nd February, 2024, 8 pm - 9 pm",
        "topic": "Mastering Time Management: A Guide to Productivity",
        "speaker": "Glory Ogunbodede",
        "bio": `
        Glory Ayobami Ogunbodede is the co-founder of Impact Training Room (ITR), the assistant executive director of Medlabconvo, a content writing specialist, and a 5th-year student in medical laboratory science.

        Glory has led and executed impact-driven projects in various African communities. She has been recognised for her efforts as an agent of change, including the 2023 ACHIEVER OF THE YEAR award from the Nigeria Medical Laboratory Science Student Association (NIMELSSA NATIONAL) and the 2023 Top 100 Changemakers on the Plateau Award.

        She is a YLead 2020 Fellow of the Ikapture Initiative, a Millennium Campus 22 Fellow, a Bridge Program '22 Fellow of the Afara Initiative, a YLP '22 Fellow of Leap Africa, and a Serial Volunteer who has worked with both local and international organisations.
        `
    },
    {
        image: speaker1,
        "date_and_time": "Friday, 7th February, 2025, 8 pm - 9 pm",
        "topic": "Tapping into Research as an Undergraduate",
        "speaker": "Emmanuel Elebesunu",
        "bio": `
        Emmanuel Elebesunu is a Medical Laboratory Scientist with a passion for research in infectious disease epidemiology, surveillance, and response. As an Early Career Researcher, he has actively contributed to scientific discourse through his research works, including 22 research publications, 2 book chapters, and several citations on topics spanning the areas of public health, infectious diseases, and antimicrobial resistance..

        He is currently a Medical Journalist with the Society for Disease Prevention (SFDP), where he promotes awareness on prevalent infectious diseases in Africa and beyond. He also functions as a Project Assistant for public health research and advocacy in the Africa and Middle Eastern Region (AfMe).

        His research works have been presented in scientific conferences, including the International Festival of Public Health (IFPH) hosted by the University of Manchester, the 2021 Scientific Conference of the African Society for Laboratory Medicine (ASLM), and the 5th HIV Research for Prevention (HIVR4P) Conference in South America. He is also a Journalism Fellowship Award recipient from the International AIDS Society (IAS). In addition, he is a Molecular Laboratory Trainee in AMR Genotypic/Phenotypic Characterisation, funded by the Society for Applied Microbiology (SFAM)..
        `
    },
    {
        image: speaker5,
        "date_and_time": "Saturday, 8th February, 2025, 8 pm - 9 pm",
        "topic": "Beyond the Buzz; Capitalizing on Mentor-Mentee Relationships as an Undergraduate ",
        "speaker": "Odinaka Obeta",
        "bio": `
        Odinaka is an award-winning Biomedical Scientist and Public Health Practitioner with interests in Malaria & Climate Change Programming, Health Communications, and Policy & Advocacy in Global Health. He is Founder of Impact Training Room (ITR), a youth-led and youth-focused organisation committed to raising Africa's finest generation of young leaders.

        As an International public speaker, Odinaka has reached out to over 20,000+ youths across various countries through his virtual and physical engagements.

        Odinaka is also the executive Director of Block Malaria Africa Initiative, dedicated to helping vulnerable communities build resilience against malaria through medical outreaches, training, policy development, and advocacy.

        He serves as the West Africa Lead at the African Leaders Malaria Alliance (ALMA) Youth Advisory Council, under the leadership of H.E President Umaro Sissoco Embalo of Guinea Bissau, and a member of the RBM Digital Youth Workstream on Malaria, advocating for #ZeroMalaria across Africa.


        Odinaka has received multiple ambassadorial awards, including the Ambassador of Medical Laboratory Sciences in Nigeria and was recognized as one of 60 Nigerian health workers celebrated as #HealthHeroes by Nigerian Health Watch in 2020 for their contributions to strengthening Nigeria's health care system.

        In 2022, Odinaka became the first African recipient of the 25Under25 Global Legacy Award by Common Purpose UK and in 2023 he emerged as a Top Finalist for the Raising Star in Global Health Award held during the COP28 in the Expo City in Dubai
        `
    },
    {
        image: speaker6,
        "date_and_time": "Sunday, 9th February, 2024, 8 pm - 9 pm",
        "topic": "Navigating the Gold Mine of Scholarships and Fellowships as an Undergraduate",
        "speaker": "Kamsi Muoka",
        "bio": `
        Olivia Kamsi Muoka is a first-class graduate of Medical Laboratory Science from the University of Calabar, where she earned recognition as the university's Best Graduating Student in 2023. During her undergraduate studies, she demonstrated a profound dedication to research, investigating lung function and biomarkers of oxidative DNA damage and inflammation in woodworkers exposed to wood dust. This pivotal work sparked her passion for exploring the intricate relationship between the immune system and cancer.

        After earning her degree, Kamsi completed a one-year internship as a Medical Laboratory Scientist at the University of Calabar Teaching Hospital, where she gained hands-on experience in conducting diagnostic and monitoring laboratory tests. She then served as a Clinical Research Assistant at Lakeshore Cancer Center in Lagos, Nigeria, where she contributed to advancing innovative cancer treatment strategies.

        Currently, Kamsi is pursuing an MPhil in Medical Science at the Cancer Research UK Cambridge Institute (CRUK CI) at the University of Cambridge. Her academic journey is marked by numerous prestigious scholarships, including the Mastercard AfOx Scholarship at the University of Oxford, the Mastercard Cambridge Scholarship, and the Gates Cambridge Scholarship, which currently funds her MPhil. Additionally, she was among the 14 finalists for the highly competitive 2024 Rhodes Scholarship for West Africa.


        Beyond her academic and research pursuits, Kamsi is passionate about mentorship and empowering others. Through her podcast, "Let's Talk with KamKam," she shares practical study tips and personal experiences, inspiring students to excel in their academic endeavours and bridge learning gaps.


        In her free time, Kamsi enjoys listening to music and cherishing moments with her family.
        `
    },
    {
        image: speaker7,
        "date_and_time": "Saturday, 15th February, 2025",
        "topic": "⁠Building your future through Volunteering",
        "speaker": "Williams Owoeye",
        "bio": 
        `
        Williams Owoeye is a Biomedical Laboratory Science graduate of the University of Ibadan with a rich background in marketing, communications, and social impact. With over five years of professional and volunteering experience, Williams has consistently demonstrated his commitment to community development and meaningful engagement. With a strong belief that effective communication can solve all world problems.

        He is a College of Medicine Provost Award winner owing to his exemplary devotion to improving his community. This is a testament of his engagement in extracurricular activities as early as his freshman year. As the Public Relations Officer for Friends of Damien Foundation, he has actively driven awareness campaigns targeting tuberculosis and leprosy, contributing to the organization’s growth and impact. His work as Director of Programs as well as Director of Media and Publicity for the Asido Campus Network reflects his dedication to mental health advocacy, organizing events to reduce stigma and foster open dialogue about mental health.


        Williams has also excelled in campus journalism, earning accolades such as "Most Promising Campus Journalist" and "Best Satirical Writer." during his undergraduate years. His leadership roles within various organizations have facilitated strategic partnerships, boosted brand visibility, and created opportunities for knowledge sharing.


        With expertise in marketing, content creation, and public relations, Williams has spearheaded impactful campaigns and mentored aspiring leaders, empowering them to address complex challenges. Passionate about community advancement, he remains focused on leveraging his communication skills to inspire positive change and drive social progress especially in the digital space.
        `
    },
    {
        image: speaker8,
        "date_and_time": "Sunday, 16th February, 2025",
        "topic": "⁠Young and Strong; Becoming a Social Impact Leader",
        "speaker": "Fatima Ibrahim",
        "bio": `
        Fatimah Ibrahim Opeyemi is a dedicated Medical Laboratory Scientist with a passion for improving quality health, promoting sustainable development goals, and impacting public health. Her academic journey began at Kwara State University, Malete, where she pursued a degree in Medical Laboratory Science.

        During her undergraduate studies, she demonstrated exceptional commitment to public health safety. Her research project, titled "Appraisal of the Microbiological Quality of Domestic Water in Malete Community," identified potential microorganisms that could lead to disease outbreaks. She secured a $200 grant from the Center for Undergraduate Research at Kwara State University Malete in 2017. The findings of her project prompted her to treat the contaminated water, ensuring its safety for public consumption.


        Her humanitarian endeavors continued with her participation in various health education and awareness campaigns at the grassroots level. Her outstanding performance earned her a certification in community development. On June 15, 2019, she founded the Fatimah Ibrahim Opeyemi Foundation (FIO Foundation), focusing on sustainable development goals 1, 2, and 3. The foundation was registered and endorsed by the Corporate Affairs Commission of the Federal Republic of Nigeria on February 22, 2021.


        Fatimah held various leadership positions, including Vice President and Acting President of the Nigerian Medical Laboratory Science Students Association (NIMELSSA). During her tenure, she bridged the communication gap between students, departmental management, and school management, which resulted in the accreditation of the program. She also implemented academic support initiatives, including tutoring services for struggling students.


        After graduation, she was inducted into the Medical Laboratory Science Profession by the Medical Laboratory Science Council of Nigeria (MLSCN). She completed her one-year internship program at the National Hospital Abuja and later served at the National Defense College Medical Centre Abuja during her National Youth Service. She was recognized as an ambassador by the Young Medical Laboratory Scientists of Nigeria (National) and currently works with ASK Medical and Diagnostics Maitama, Abuja. Fatimah is also pursuing a master’s degree in Public Health at Ahmadu Bello University, Zaria.
        `
    }
]);

// const selectedSpeaker = ref({})

const handleSelectedSpeaker = (data: any) => {
    selectedSpeaker.value = data
}

const isModalVisible = ref(false);
const selectedSpeaker = ref(null);

function openModal(speaker: any) {
  selectedSpeaker.value = speaker;
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}
</script>


<!-- BIOMEDICAL CONFERENCE -->
 <!-- <template>
     <div class="overflow-hidden bg-white mt-20">
    <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      Background elements
      <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-[#27628C] lg:block"></div>
      
      Animated DNA helix decoration
      <div class="absolute top-10 right-10 opacity-20 animate-pulse hidden lg:block">
        <DnaHelix />
      </div>
      
      Animated dots pattern
      <div class="absolute left-0 top-20 -ml-20 hidden lg:block">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true" class="animate-float">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="#27628C" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
      </div>
      
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h3 
            class="mt-2 text-3xl/8 font-bold tracking-tight sm:text-4xl text-[#27628C] uppercase text-center lg:text-start animate-fade-in"
          >
            MEDLABCONVO 21ST CENTURY BIOMEDICAL SCIENCE CONFERENCE 2025
          </h3>
        </div>
      </div>
      
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg 
            class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block animate-float" 
            width="404" 
            height="384"
            fill="#ffffff" 
            viewBox="0 0 404 384" 
            aria-hidden="true"
          >
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure class="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
              <img 
                class="w-full rounded-lg object-cover shadow-lg lg:aspect-auto animate-fade-in"
                src="@/assets/img/conference.jpeg"
                alt="Conference image showing biomedical science professionals" 
                width="1184" 
                height="1376"
              >
              Microscope decoration overlay
              <div class="absolute -bottom-10 -right-10 opacity-20 rotate-12 transform scale-75">
                <MicroscopeIcon />
              </div>
            </figure>
          </div>
        </div>
        
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto text-base/7 text-gray-500">
            <p class="text-lg/7 animate-slide-up">
              Are you ready to explore the latest innovations and research shaping the future of biomedical science? Join us for an exciting virtual Biomedical Science Conference, bringing together experts, researchers, and professionals to discuss on the topic:
            </p>
            <p class="mt-4 text-xl font-bold text-[#27628C] animate-pulse">
              Strengthening laboratory systems for a sustainable future: Global and Local Perspective
            </p>
            
            <section class="mt-8 animate-slide-up delay-100">
              <p class="font-bold text-xl text-[#27628C]">
                What to Expect?
              </p>
              <div class="mt-5 space-y-3">
                <div class="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2">
                  <div class="flex-shrink-0 text-2xl">🔬</div>
                  <p>Expert-Led Sessions on Cutting-Edge Biomedical Research</p>
                </div>
                <div class="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2">
                  <div class="flex-shrink-0 text-2xl">📊</div>
                  <p>Discussions on Emerging Technologies & Trends</p>
                </div>
                <div class="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2">
                  <div class="flex-shrink-0 text-2xl">🤝</div>
                  <p>Interactive Networking with Global Professionals</p>
                </div>
              </div>
            </section>

            <section class="mt-8 animate-slide-up delay-200">
              <h4 class="font-bold text-xl text-[#27628C]">Who Should Attend?</h4>
              <div class="mt-3 space-y-3">
                <div class="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2">
                  <div class="flex-shrink-0 text-[#27628C]">🔹</div>
                  <p>Biomedical Scientists & Medical Laboratory Professionals</p>
                </div>
                <div class="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2">
                  <div class="flex-shrink-0 text-[#27628C]">🔹</div>
                  <p>Researchers, Academics & Healthcare Practitioners</p>
                </div>
                <div class="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2">
                  <div class="flex-shrink-0 text-[#27628C]">🔹</div>
                  <p>Students & Enthusiasts in Life Sciences</p>
                </div>
              </div>
            </section>

            <section class="mt-8 animate-slide-up delay-300">
              <div class="bg-gradient-to-r from-[#27628C]/10 to-transparent p-4 rounded-lg">
                <div class="flex items-center gap-3 mb-2">
                  <div class="flex-shrink-0 text-2xl animate-pulse">📅</div>
                  <p class="font-semibold">Date: 21st and 22nd April 2025</p>
                </div>
                <div class="flex items-center gap-3">
                  <div class="flex-shrink-0 text-2xl animate-pulse">🌍</div>
                  <p class="font-semibold">Location: Online (Link will be shared after registration)</p>
                </div>
              </div>
            </section>

            <section class="mt-8 animate-slide-up delay-400">
              <p class="font-bold text-lg">
                Don't miss this chance to connect, learn, and contribute to the future of biomedical science! Secure your spot today!
              </p>

            </section>

            <section class="mt-8 animate-slide-up delay-500">
              <p class="font-semibold">For more details, reach out to:</p>
              <div class="mt-2 space-y-2">
                <div class="flex items-center gap-2">
                  <PhoneIcon class="h-5 w-5 text-[#27628C]" />
                  <p>Nelson Ebode: +2348131369101</p>
                </div>
                <div class="flex items-center gap-2">
                  <PhoneIcon class="h-5 w-5 text-[#27628C]" />
                  <p>Ekenedilichukwu Anyabolo: +2347082810985</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    
    Floating molecules decoration
    <div class="fixed -z-10 bottom-0 left-0 w-full h-64 opacity-10 pointer-events-none">
      <MoleculePattern />
    </div>
  </div>

  <h1 class="text-center text-[#27628C] uppercase">Speakers</h1>
        <section class="grid lg:grid-cols-2 gap-6 mb-20 mx-auto max-w-7xl p-3 lg:p-0">
            <article  @click="openModal(item)"  v-for="item in schedules" class="flex bg-white border-[0.5px] border-gray-10 rounded-lg transition hover:shadow-xl">

                <div class="sm:basis-56 border-[0.5px] border-gray-50 rounded-lg">
                    <img alt=""
                        :src="item.image"
                        class="aspect-square h-full w-44 object-cover" />
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

                        <p class="text-xs font-bold pt-5">CLICK TO SEE SPEAKER'S PROFILE</p>
                    </div>
                </div>
            </article>
        </section>

        <div class="flex justify-center items-center my-10 p-3 lg:p-0 animate-bounce-slow">
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSd7ImrP3P53HkGKGMLvJom20LuwoH6EXCsujSSQw0bJ1NcSOA/viewform?usp=header" 
        class="text-white text-center bg-[#27628C] rounded-lg w-full px-6 py-3.5 max-w-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
      >
        <span>Register Now</span>
        <ArrowRightIcon class="h-5 w-5" />
      </a>
    </div>

    <SpeakerModal
      v-if="selectedSpeaker"
      :speaker="selectedSpeaker"
      :is-visible="isModalVisible"
      @close="closeModal"
    />

</template> -->



<!-- <script setup lang="ts">
import speaker1 from '@/assets/img/lab-coast/bio-speaker1.jpeg'
import speaker2 from '@/assets/img/lab-coast/bio-speaker3.jpeg'
import speaker3 from '@/assets/img/lab-coast/bio-speaker2.jpeg'
import speaker4 from '@/assets/img/lab-coast/bio-speaker4.jpeg'


const schedules = ref([
    {
        image: speaker1,
        // "date_and_time": "Friday, 31st January, 2025, 8 pm - 9 pm",
        "topic": "Laboratory Leadership and Management training the next generation of medical laboratory scientist",
        "speaker": "Dr. Godswill Okara",
        "bio":  `
            Dr. Godswill Okara is the Foundation Registrar/Secretary General of the West African Postgraduate College of Medical Laboratory Science, and a Member of the House of Representatives, World Association of Societies of Pathology and Laboratory Medicine (WASPaLM).
             He is an appointed Key Opinion Leader & Member, Scientific Advisory Board for Africa for the BD Diagnostics since 2013. He is an experienced Immunologist & Clinical Chemist with many years of practice as a University Lecturer, hospital laboratory practice and health Consultant. 
          He was a past President of the Association of Medical Laboratory Scientists of Nigeria (AMLSN); founding Chairman of the Assembly of Healthcare Professional Associations (AHPA) and Executive Member of the Joint Health Sector Unions (JOHESU). He has served as Member of a number of Boards of Management of tertiary Hospitals and the Medical Laboratory Science Council of Nigeria (MLSCN), as well as Member, Board of Directors, International Federation of Biomedical Laboratory Science (IFBLS) 2022-2024. He is actively engaged in medical laboratory practice and consultancy services.
        `
    },
    {
        image: speaker2,
        // "date_and_time": "Sunday, 2nd February, 2024, 8 pm - 9 pm",
        "topic": "Innovation in diagnostic technology: Integration of emerging technologies (AI, molecular medicine and bioinformatics) for sustainable clinical disgnostics.",
        "speaker": "Dr. Muyideen Harun",
        "bio": `
            Dr. Muyideen Haruna is a distinguished scientist, educator, and researcher with extensive expertise in Medical Laboratory Science, Microbiology, Biochemistry and Molecular Biology. With a Ph.D. in Biochemistry and Molecular Biology, Dr. Haruna has dedicated his career to advancing scientific knowledge, fostering innovation, and mentoring future generations of scholars and professionals.

            He is a Fellow of the Institute of Biomedical Science, United Kingdom, President-Elect American Society for Microbiology, Maryland Chapter, USA. He is also a member of the American Society for Biochemistry and Molecular Biology, Member of the American Society for Tropical Medicine and Hygiene, International Society for Infectious Disease, African Society for Laboratory Medicine, Association of Medical Laboratory Scientist of Nigeria.
            He has demonstrated his commitment to using Science as a tool for positive societal impact. Currently, Dr. Haruna serves as an adjunct Professor at the Biological Science department of Goucher College and at the  Biomedical Science program of Morgan State University, both in Baltimore, Maryland, USA, where he continues to conduct cutting-edge research and contribute to scientific discourse.
            Dr. Haruna is a Managing Partner at Excellis Incorporated; a company he co-founded for Healthcare services.
        `
    },
    {
        image: speaker3,
        // "date_and_time": "Saturday, 1st February, 2025, 8 pm - 9 pm",
        "topic": "Policy and Governance in Strenghtening laboratory: A roadmap for Sustainable Development",
        "speaker": "OLUSOJI M. A BILLYROSE ABRIDGED",
        "bio": `
          OLUSOJI M. A BILLYROSE ABRIDGED RESUME
          Olusoji  Billyrose is MD/CEO of four companies ie Labcrest Laboratories Ltd, Smatcode Scientific Consult Nig Ltd, Royal code Multiconcept Nig. Ltd and Labcrest Medical Diagnostics and Clinic Nig. Ltd. 
          Before now, Soji worked as Head, Laboratory Operations, Quality Assurance and Technical Training (Management Position) at ECHOLAB/IDH Nigeria, an Egyptian Company with 12 branches across Nigeria.
          He holds a B.MLS degree, fellowship of Medical Laboratory Science of Nigeria (FMLSCN) in Virology, a Master’s degree in Medical Biochemistry and another Masters of  Philosophy in Chemical pathology while currently pursuing a PhD in the same field at Afe Babalola University, Ado Ekiti.. Similarly, He has done several certificate courses including a Diploma in Quality Management System, Professional training from the prestigious Integrated Diagnostic Holdings (IDH) training school in Cairo, Egypt and possess the IATA CAT – 6 Certificate in Dangerous Goods Regulation (DGR), making him an accredited shipper of dangerous goods.
          Soji is a certified ISO 15189 Assessor and inspector with Nigeria National Accreditation Service (NINAS) and the Medical Laboratory Science Council of Nigeria (MLSCN). He has attended over 60 conferences within and outside the country with about 16 publications to his credit. He was previously the National Publicity Secretary of the Association of Medical Laboratory Scientists of Nigeria and a fellow of the Association of Medical Laboratory Scientists of Nigeria (FAMLSN).
          Soji is a fellow and member of the following professional bodies
          Fellow, International Association of Mentors and Quality Improvement Experts
          Fellow, Medical Laboratory Science Council of Nigeria
          Fellow, Association of Medical Laboratory Scientists of Nigeria
          Member, International Federation of Biomedical Science
          Member, Association of Professional Bodies of Nigeria (APBN)
          Member, Haematology and Blood Transfusion Scientists Society of Nigeria
          Member, Nigeria Society of Chemical Pathology Scientists
          Member, Nigerian Hypertension Society
          Member, Nigeria National Accreditation Service Assessors
          Member, Medical Laboratory Science Council of Nigeria Exam Assessors
          Member, Nigerian Society for Scientists in Infectious Diseases
          Member, Nigerian Biological Safety Association
          Soji seats on the board of 2 Non-governmental Organizations and is a highly engaged speaker at conferences and workshops with numerous awards to his credit.
        `
    },
    {
        image: speaker4,
        // "date_and_time": "Friday, 7th February, 2025, 8 pm - 9 pm",
        "topic": "Strenghtening the laboratory workforce: Capacity building for sustainable healthcaree.",
        "speaker": "Mr. Jubril Kareem",
        "bio": `
Mr. Jubril Kareem is a renowned Public Health Laboratory expert with over 12 years of extensive experience in laboratory systems strengthening, integrated disease surveillance, pandemic preparedness and response, One Health and Global Health Security.

As a seasoned professional currently working with  WHO Nigeria, Jubril has made significant contributions to public health, national policy development, antimicrobial resistance prevention and one health programs, communicable and non-communicable diseases, laboratory emergency preparedness and response, laborarory services integration, laboratory information and data management systems, diagnostic network optimization, quality assurance program and accreditation preparedness.

With a strong foundation in Medical Laboratory Science, Jubril possesses a First class BMLS, and a Distinction MSc degree in the field and he's currently awaiting his PhD in Public Health, in addition to many other post graduate qualifications in Global Health,  Epidemiology, Water Sanitation and Hygiene (WASH), Logistics and Suply Chain,  Global Health Security and Risk Management.  Jubril is a certified auditor in laboratory quality and competencies for ISO 9001, 19011, 15189, 22367, 35001, 14971, and 13485. He is a Fellow of the West African Institute of Public Health (WAIPH), Associate Member of ASLM, ABSA, MLSCN, NiBSA and many others.

In his career, he has demonstrated exceptional leadership, technical expertise, and a passion for improving public health outcomes. His contributions have been instrumental in shaping laboratory systems and policies, both nationally and globally.

Jubril Kareem boasts an impressive portfolio with more than 15 publications, including operational research, that has significantly impacted the field and has facilitated different trainings and made presentations at different webinars, seminars and conferences. Beyond his academic achievements, Jubril has made a profound difference in the lives of many who are excelling now through mentorship, career guidance, and exemplary leadership.

Currently, Jubril serves on several national committees, including:

•⁠  ⁠National Laboratory Technical Working Group
•⁠  ⁠National Committee on Laboratory Inspection and Prevention of Quackery
•⁠  ⁠National Committee for Determining the Optimal Ratio of Medical Laboratory Scientists to Patients/Population
•⁠  ⁠National Laboratory Taskforce on HIV, Hepatitis and STI Prevention and Management.

His expertise has been instrumental in securing funding for various projects in Nigeria, including grants from The Global Fund, The Fleming Fund, and RSTMH grants. Others grant proposals supported include the KOICA, European Union, JAICA, The Pandemic Fund, among many others.

As an accomplished project manager, Jubril is poised to lead public health system strengthening interventions, leveraging his expertise from both clinical and public health to drive meaningful change and improve critical health outcomes. 

With his unwavering dedication and God's guidance, Jubril continues to make a lasting impact in the field of public health and the people around him.
        `
    }
]);

// const selectedSpeaker = ref({})

const handleSelectedSpeaker = (data: any) => {
    selectedSpeaker.value = data
}

const isModalVisible = ref(false);
const selectedSpeaker = ref(null);

function openModal(speaker: any) {
  selectedSpeaker.value = speaker;
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}
</script> -->





<!-- <template>
  <div class="overflow-hidden bg-white mt-20">
 <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-[#27628C] lg:block"></div>
      
      <div class="absolute top-10 right-10 opacity-20 animate-pulse hidden lg:block">
        <DnaHelix />
      </div>
      
      <div class="absolute left-0 top-20 -ml-20 hidden lg:block">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true" class="animate-float">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="#27628C" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
      </div>
      
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h3 
            class="mt-2 text-3xl/8 font-bold tracking-tight sm:text-4xl text-[#27628C] uppercase text-center lg:text-start animate-fade-in"
          >
            FORGING A CAREER PATH 4.0
          </h3>
        </div>
      </div>

      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg 
            class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block animate-float" 
            width="404" 
            height="384"
            fill="#ffffff" 
            viewBox="0 0 404 384" 
            aria-hidden="true"
          >
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure class="overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
              <img 
                class="w-full rounded-lg object-cover shadow-lg lg:aspect-auto animate-fade-in"
                src="@/assets/img/forging-a-career-path.jpg"
                alt="Conference image showing biomedical science professionals" 
                width="1184" 
                height="1376"
              >
            </figure>
          </div>
        </div>
        
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto text-base/7 text-gray-500">
            <p class="text-lg/7 animate-slide-up">
              The FACP program aims to expand the career horizons of young professionals and students in medical laboratory science by showcasing diverse opportunities beyond traditional clinical roles. In response to the evollving healthcare landscape. the program highlights various career paths within and outside the medical laboratory field, encouraging participants to explore their potential.
            </p>
            <p class="mt-10 text-xl">
              Through interactive workshops, mentorship sessions, and networking events, the FACP program fosters an environment that promotes innovative thinking and professional development. Participants are inspired to consider careers in research, healthcare technology, public health, education, and industry innovation, ultimately redefining what success looks like in medical laboratory science. By transforming challenges into opportunities, the program seeks to empower individuals to forge their unique paths in this dynamic field.
           </p>
            
          </div>
        </div>
      </div>
    </div>

 </div>


 <div class="flex justify-center flex-col md:flex-row items-center gap-6 my-10 p-3 lg:p-0 animate-bounce-slow">
  <div>
    <a 
      href="https://chat.whatsapp.com/BfWreyeFjnAFC5cryHWPnU" 
      class="text-white text-center bg-green-600 rounded-lg px-6 py-3.5 w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
    >
      <span>Join the Waitlist</span>
    </a>
  </div> 
  <div>
    <a 
      href="https://paystack.shop/pay/414967xrt1" 
      class="text-white text-center bg-[#27628C] rounded-lg px-6 py-3.5 w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
    >
      <span>Make Payment</span>
    </a>
  </div>
</div>

<div class="flex flex-col justify-center items-center mt-28 mb-28">
      <h1 class="text-center text-[#27628C] uppercase text-2xl font-bold">Course Outline</h1>

      <div class="overflow-x-auto w-full max-w-[900px]">
        <table class="w-full border-collapse border-8 border-white mt-10 mx-auto">
          <thead>
            <tr class="bg-[#2788b2]">
              <th class="border-4 border-white text-gray-50 px-2 py-3 text-center text-sm md:text-base uppercase font">
                S/N</th>
              <th class="border-4 border-white text-gray-50 px-4 py-2 text-left text-sm md:text-base uppercase">Session
                Topic</th>
                <th class="border-4 border-white text-gray-50 px-4 py-2 text-left text-sm md:text-base uppercase">Session
                  Date</th>  
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-[#27628C]">
            <tr v-for="(topic, index) in topics" :key="index">
              <td
                class="px-4 py-2 text-gray-50 border-4 border-white text-center text-sm md:text-base whitespace-nowrap">
                {{ topic.sn }}</td>
              <td class="px-4 py-2 text-gray-50 border-4 border-white text-left text-sm md:text-base whitespace-nowrap">
                {{ topic.topic }}</td>
                <td class="px-4 py-2 text-gray-50 border-4 border-white text-left text-sm md:text-base whitespace-nowrap">
                  {{ topic.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h1 class="text-center text-[#27628C] uppercase font-bold text-2xl mt-20">Facilitators</h1>
      <section class="grid lg:grid-cols-3 gap-6 mt-10 mx-auto max-w-7xl pb-6 p-3 lg:p-0">
        <article @click="openModal(item)" v-for="item in schedules"
          class="flex bg-white border-[0.5px] border-gray-10 rounded-lg transition hover:shadow-xl">

          <div class="sm:basis-56 border-[0.5px] border-gray-50 rounded-lg">
            <img :src="item.image" :alt="item.speaker" class="aspect-square h-full w-32 object-cover" />
          </div>

          <div class="w-full flex-col justify-between">
            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">

              <p class="mt-2 font-bold line-clamp-3 text-lg/relaxed text-gray-700">
                {{ item.speaker }}
              </p>

              <p class="text-xs font-bold pt-5">CLICK TO SEE FACILITATOR'S PROFILE</p>
            </div>
          </div>
        </article>
      </section>
    </div>

<SpeakerModal v-if="selectedSpeaker" :speaker="selectedSpeaker" :is-visible="isModalVisible" @close="closeModal" />

</template>

<script setup lang="ts">


import speaker1 from '@/assets/img/nancy-facp4.jpg'
import speaker2 from '@/assets/img/oyeniyi-facp4.jpg'
import speaker3 from '@/assets/img/yusuf-facp4.jpg'
import speaker4 from '@/assets/img/precious-facp4.jpg'
import speaker5 from '@/assets/img/ayodele-facp4.jpg'
import speaker6 from '@/assets/img/joshua-facp4.jpg'
import speaker7 from '@/assets/img/honsimon-facp4.jpg'

const topics = ref([
  {
    "sn": "01",
    "topic": "Forging A Career Path in Biomedical Engineering",
    "date": "Thursday, 17th July, 2025",
  },
  {
    "sn": "02",
    "topic": "Forging A Career Path in Biotechnology",
    "date": "Friday, 18th July, 2025",
  },
  {
    "sn": "03",
    "topic": "Forging Into Politics: The Role of Health Policies and Regulations in Shaping Medical Laboratory Practices",
    "date": "Saturday, 19th July, 2025",
  },
  {
    "sn": "04",
    "topic": "Forging a Career Path in Medical Communication and Public Awareness",
    "date": "Thursday, 24th July, 2025",
  },
  {
    "sn": "05",
    "topic": "Marketing and Laboratory Supply Chain; Optimizing Career Opportunities in Laboratory Management and Supply Chain",
    "date": "Friday, 25th July, 2025",
  },
  {
    "sn": "06",
    "topic": "Essential Skills for Forging a Career Path",
    "date": "Saturday, 26th July, 2025",
  },
]);

const schedules = ref([
  {
    image: speaker1,
    "speaker": "Nancy Njoku-Attah",
    "bio": `
Nancy Njoku-Attah is a Commercial Life Science Manager at Market Access Africa, where she helps global health organizations and diagnostic companies unlock opportunities across Sub-Saharan Africa. With a strong foundation in Medical Laboratory Science, Nancy began her career at the bench before transitioning into business and strategic roles that span diagnostics, public health, and commercial consulting.
She holds a Bachelor’s degree in Medical Laboratory Science and an MBA in Business Administration, and is currently completing a Master’s in International Public Health at Liverpool John Moores University in the UK. This unique blend of clinical, business, and public health expertise positions Nancy at the intersection of diagnostics, healthcare strategy, and health systems strengthening.
A passionate advocate for diagnostics and diagnostic professionals, Nancy is the author of Insights Beyond Bloodwork, a newsletter platform focused on helping lab scientists explore opportunities beyond the bench. Through this platform, she’s building a growing community (#BenchToBusinessFellows) to mentor and empower young professionals to thrive in alternative and emerging roles across the life sciences sector.
Nancy brings not just knowledge, but also inspiration,encouraging lab professionals to embrace their potential, adapt to industry changes, and contribute meaningfully to Africa’s healthcare ecosystem.`
  },
  {
    image: speaker2,
    "speaker": "MLS Oyeniyi, Gbadebo Maroof",
    "bio": `
MLS Oyeniyi Gbadebo Maroof is a Nigerian Medical Laboratory Scientist and an academic with over 10 years of experience in both private and governmental establishments. 
He bagged his B.MLS from the prestigious LAUTECH, Ogbomoso, in 2011 and was inducted as an associate of the Medical Laboratory Science Council of Nigeria (AMLSCN) in 2012. He obtained an M.Sc in public health biotechnology from the premiere university, the University of Ibadan, in 2021. In 2024, he bagged an M.Phil in Medical Laboratory Science specializing in Haematology and Blood Transfusion Science from Edo State University Iyamo. He has worked in several places as a medical laboratory scientist and has acquired both bench and administrative skills. 
MLS Oyeniyi has undergone training on HIV/AIDS opportunistic infections (OIs) diagnosis and screening, panel preparation for HIV proficiency testing, Genexpert for TB, and basic and advanced malaria microscopy diagnosis. 
He was the laboratory person for malaria, TB, and HIV at the General Hospital Offa, Kwara State. He is a member of the quality assurance team inaugurated/commissioned by the commissioner for health, Kwara State, in 2022.

MLS Oyeniyi has obtained certificates in monitoring and evaluation,  epidemiology, leadership and management in health, and clinical management of HIV all from the University of Washington, USA.
Before joining academics in 2023, he was the head of the Medical Laboratory Department of General Hospital Offa,  Kwara State. He has published several papers in academic journals. He joined the service of the University of Ilorin in 2023.`
  },
  {
    image: speaker3,
    "speaker": "MLS Yusuf Danasabe Jobbi",
    "bio": `
MLS Yusuf Danasabe Jobbi (FMLSCN, BMLS, MSc, MSc GCH). Yusuf Danasabe Jobbi is a Medical Laboratory Scientist, a Haematologist, with expertise in Sickle Cell Disease Genomics, Bioinformatics, Immunohaematology, HPLC, and Leadership training skills with more than 17 years of working experience at the Department of Haematology Aminu Kano Teaching Hospital, and private clinical laboratories in Kano State. He is interested in impacting leadership knowledge and skills, genomics studies, teaching different laboratory techniques, and mentoring young ones to achieve their dreams and goals. Yusuf Danasabe Jobbi graduated from the School of Medical Laboratory Sciences of the prestigious Usmanu Danfodiyo University Sokoto, he did his Master's at Bayero University Kano and St Jude Graduate School of Biomedical Sciences, Memphis, Tennessee, USA. He just finished his Special Fellowship program (FMLSCN) at the School of Medical Laboratory Science, Ahmadu Bello Teaching Hospital, Zaria. Yusuf Danasabe Jobbi loves genomics studies more than food, researching and has more than 30 publications, and teaching leadership skills to improve leadership qualities as he was taught by his leadership instructors/mentors from Harvard University, John F. Kennedy School of Government Executive Leadership Institute, USA.`
  },
  {
    image: speaker4,
    "speaker": "MLS Precious Oha",
    "bio": `
Mr Precious Oha is a distinguished Medical Laboratory Scientist based in Australia, holding a Master's degree in Public Health from a reputable Australian university, a bonafide member of the Australian Institute of Medical and Clinical Science (AIMS), Association of Medical Laboratory Scientists of Nigeria (AMLSN), and Medical Laboratory Science Council of Nigeria (MLSCN). He is also a certified user of Laboratory Quality Management System (LQMS) software. As the founder of the Live2Inspire Community, Mr. Precious has made a significant impact by hosting numerous conferences during the pandemic, providing a platform for emerging leaders and fostering mentorship through various initiatives. His dedication to uplifting young people has inspired countless individuals to pursue their dreams and develop their leadership skills.

In addition to his contributions to the medical field and community development, Mr. Precious has successfully ventured into various business sectors, including real estate, where he has demonstrated a remarkable talent for sales and entrepreneurship. He is also the creator of a popular social media brand, where he shares insights on migration and lifestyle, coining the term "expensive sense," which reflects his unique perspective on navigating life’s challenges.

As a rising star and sought-after speaker, Mr. Precious continues to inspire audiences with his engaging presentations and thought-provoking discussions. His commitment to making a difference extends beyond his professional endeavors; alongside his wife, he runs a foundation dedicated to meeting the needs of the homeless, showcasing his compassionate nature and commitment to social responsibility.

In his personal life, Mr. Precious enjoys reading and cherishes quality time with his family. Known for his kindness and generosity, he embodies the spirit of service, making a lasting impact on both his community and the lives of those around him. Mr. Precious Oha’s legacy is one of inspiration, leadership, and unwavering dedication to bettering the world.`
  },
  {
    image: speaker5,
    "speaker": "MLS Ayodele Isaac",
    "bio": `
Ayodele Isaac Adedokun is a medical laboratory scientist, educator, data analyst and public health advocate with experience in laboratory automation, medical diagnostics, infectious disease surveillance, and quality control testing. With a strong foundation in Medical Laboratory Science, Ayodele holds a first-class BMLS degree from Usmanu Danfodiyo University, Sokoto, Nigeria, being the overall best graduating student of his set.
Currently, Ayodele works as a sales and biomedical engineer with one of the leading ISO9001:2015 accredited invitro diagnostics (IVD) and healthcare solutions company in West Africa. In this role, he has travelled to 3 African countries where he is making significant contributions to effective healthcare service delivery. He has done several certification programs in the field of biomedical engineering which cuts across diagnostics, medical imaging/radiological solutions, quality assurance, calibration procedures etc., from top IVD industries globally.
He is passionate about non-communicable diseases and tuberculosis research with focus on novel diagnostics and therapeutics in the African setting. He is also a member of the British Society for Antimicrobial Chemotherapy, global contributing-outreach member for American Society for Microbiology and DEKEMP. In his leisure time, he loves surfing the internet, watching football and medical-related movies.`
  },
  {
    image: speaker6,
    "speaker": "Joshua Miluyi",
    "bio": `
Joshua Ademiluyi also known as "Joshh Miluyi" is a trailblazing Nigerian Biomedical Scientist, digital media enthusiast, and brand strategist who has masterfully merged his scientific acumen with a flair for digital content creation. With a solid academic foundation in Biomedical Science from Babcock University, Nigeria, and invaluable hands-on experience as a Medical Laboratory Scientist at the esteemed Olabisi Onabanjo Teaching Hospital, Joshua has cultivated a distinctive expertise that seamlessly integrates scientific knowledge with digital innovation.

As a prolific content creator and adept social media strategist, he skillfully harnesses the power of various digital platforms to engage with his audience, build his personal brand, and disseminate insightful content to a broader community. Through his creative endeavors, Joshua has demonstrated a profound understanding of the digital landscape, leveraging his expertise to craft compelling narratives, foster meaningful connections, and inspire a new generation of thought leaders.

With his unique blend of scientific rigor and digital creativity, Joshh Miluyi has established himself as a respected voice in his field, renowned for his innovative approach, creative vision, and commitment to excellence.`
  },
  {
    image: speaker7,
    "speaker": "Hon. Simon Gabo",
    "bio": `Hon. Simon Gabo, a distinguished medical laboratory scientist and humanitarian, serves as a member of the 10th Benue State House of Assembly, representing the Mata State Constituency and chairing the House Committee on ICT and Digital Economy. Born on December 18, 1978, in Mbagba Council Ward, Ushongo Local Government Area, Benue State, he is the son of Mr. and Mrs. Gabo Ihomon.
Hon. Gabo is married to Dr. Mrs. Shanpepe Uchenna Gabo, and together they are blessed with four children. His educational journey began at Chanchanji Primary School and continued at Government Army Secondary School in Takum. He earned a Bachelor’s degree in Medical Laboratory Sciences from Ambrose Alli University, followed by a Postgraduate Diploma and Master’s degree in Public Health, as well as a PhD, from Nasarawa State University, Keffi.
In his professional career, Hon. Gabo has held various roles, including at the Nigeria Centre for Disease Control and Federal Medical Centres in Keffi and Makurdi. He is the founder of Tor-Gabo Diagnostic Center Limited and the Tor-Gabo Foundation, which focuses on empowering individuals through initiatives such as scholarships, free medical outreach programs, and essential donations to vulnerable populations.
Hon. Gabo has received numerous awards for his service, including the Best Staff Award from FMC Keffi and recognition from the Association of Medical Laboratory Scientists of Nigeria for his commitment to healthcare and community development.
Before his current role, he demonstrated his leadership capabilities through various positions, including Chairman of the APC Benue State Assembly Aspirant Forum. His election to the Benue State House of Assembly underscores his dedication to effecting positive change.
As a representative, Hon. Gabo has facilitated agricultural empowerment initiatives, introduced welfare programs, and overseen vital infrastructural developments, all aimed at improving the lives of his constituents. His commitment to human capital development is evident through job placements and support for skills acquisition programs.
Hon. Simon Gabo stands as a beacon of excellence, dedication, and selflessness, making a significant impact on the health sector and the lives of many in his community.`,
  }
])

const isModalVisible = ref(false);
const selectedSpeaker = ref(null);

function openModal(speaker: any) {
  selectedSpeaker.value = speaker;
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}
</script>

<style>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-bounce-slow {
  animation: bounceSlow 3s ease-in-out infinite;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
}
</style> -->
