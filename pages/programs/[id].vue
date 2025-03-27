<!-- <template>
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
                                src="@/assets/img/updates1.jpeg"
                                alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376">
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
        <a href="https://forms.gle/gnmMNvg4VZo66EdF7" class="text-white text-center bg-[#27628C] rounded-lg w-full px-6 py-3.5 max-w-lg">Register</a>
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
</script> -->

<template>
     <div class="overflow-hidden bg-white mt-20">
    <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <!-- Background elements -->
      <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-[#27628C] lg:block"></div>
      
      <!-- Animated DNA helix decoration -->
      <div class="absolute top-10 right-10 opacity-20 animate-pulse hidden lg:block">
        <DnaHelix />
      </div>
      
      <!-- Animated dots pattern -->
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
                src="@/assets/img/convo.jpeg"
                alt="Conference image showing biomedical science professionals" 
                width="1184" 
                height="1376"
              >
              <!-- Microscope decoration overlay -->
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
              <div class="mt-4 relative group">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd7ImrP3P53HkGKGMLvJom20LuwoH6EXCsujSSQw0bJ1NcSOA/viewform?usp=header"
                  class="inline-flex items-center text-[#27628C] font-bold group-hover:underline"
                >
                  <span>To Register</span>
                  <ArrowRightIcon class="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
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

    <div class="flex justify-center items-center my-10 p-3 lg:p-0 animate-bounce-slow">
      <a 
        href="https://forms.gle/gnmMNvg4VZo66EdF7" 
        class="text-white text-center bg-[#27628C] rounded-lg w-full px-6 py-3.5 max-w-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
      >
        <span>Register Now</span>
        <ArrowRightIcon class="h-5 w-5" />
      </a>
    </div>
    
    <!-- Floating molecules decoration -->
    <div class="fixed -z-10 bottom-0 left-0 w-full h-64 opacity-10 pointer-events-none">
      <MoleculePattern />
    </div>
  </div>
    <!-- <div class="overflow-hidden bg-white mt-20">
        <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-[#27628C] lg:block"></div>
            <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                <div>
                    <h3 class="mt-2 text-3xl/8 font-bold tracking-tight  sm:text-4xl text-[#27628C] uppercase text-center lg:text-start">
                        MEDLABCONVO 21ST CENTURY BIOMEDICAL SCIENCE CONFERENCE 2025
                    </h3>
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
                                src="@/assets/img/convo.jpeg"
                                alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376">
                        </figure>
                    </div>
                </div>
                <div class="mt-8 lg:mt-0">
                    <div class="mx-auto text-base/7 text-gray-500">
                        <p class="text-lg/7">
                            Are you ready to explore the latest innovations and research shaping the future of biomedical science? Join us for an exciting virtual Biomedical Science Conference, bringing together experts, researchers, and professionals to discuss on the topic : 
Strengthening laboratory systems for a sustainable future: Global and Local Perspective

                        </p>
                            <section>
                                <p class="mt-5">
                                    What to Expect?
                                </p>
                                <p class="mt-5">
                                    🔬 Expert-Led Sessions on Cutting-Edge Biomedical Research
                                </p>
                                <p>
                                    📊 Discussions on Emerging Technologies & Trends
                                </p>
                                <p>
                                    🤝 Interactive Networking with Global Professionals
                                </p>
                            </section>

                        <section>
                            <h4>Who Should Attend?</h4>
                            <p>🔹 Biomedical Scientists & Medical Laboratory Professionals</p>
                            <P> 🔹 Researchers, Academics & Healthcare Practitioners</P>
                            <P>🔹 Students & Enthusiasts in Life Sciences</P>

                        </section>

                        <section>
                           <p> 📅 Date: 21st and 22nd April 2025</p>
                            <p>🌍 Location: Online (Link will be shared after registration)</p>
                        </section>

                        <section>
                            Don’t miss this chance to connect, learn, and contribute to the future of biomedical science! Secure your spot today!

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7ImrP3P53HkGKGMLvJom20LuwoH6EXCsujSSQw0bJ1NcSOA/viewform?usp=header">To Register                            </a>
                        </section>

                        <section>
                            For more details, reach out to 
                            Nelson Ebode : +2348131369101
                            Ekenedilichukwu Anyabolo: +2347082810985
                        </section>
                    </div>
                </div>
            </div>
        </div>

       <div class="flex justify-center items-center my-10 p-3 lg:p-0">
        <a href="https://forms.gle/gnmMNvg4VZo66EdF7" class="text-white text-center bg-[#27628C] rounded-lg w-full px-6 py-3.5 max-w-lg">Register</a>
       </div>
    </div> -->

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


<style>
/* Custom animations */
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
</style>

