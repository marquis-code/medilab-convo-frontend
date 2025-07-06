<template>
  <div class="overflow-hidden bg-white mt-20">
    <div class="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-[#27628C] lg:block"></div>
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h3
            class="mt-2 text-3xl/8 font-bold tracking-tight sm:text-4xl text-[#27628C] uppercase text-center lg:text-start">
            Scholarship Application Masterclass
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg class="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block" width="404" height="384" fill="#ffffff"
            viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="#ffffff" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <!-- <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <img class="w-full rounded-lg object-cover shadow-lg lg:aspect-auto" src="@/assets/img/scholarship.jpeg"
                alt="Scholarship Masterclass Flier" width="1184" height="1376" />
            </figure>
          </div> -->
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto text-base/7 text-gray-500">
            <p class="text-lg/7">
              The Scholarship Application Masterclass ends on 31st March, 2025 and will be converted to a self-paced
              course. To have early access to this self-paced course at a discounted rate, you can pre-order now.
            </p>
            <!-- <p class="mt-5">
              Join us as we turn obstacles into stepping stones, unlocking a
              future of excellence in medical laboratory science.
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center px-4 mt-10 lg:mt-32">
      <div class="max-w-[900px] w-full flex flex-col justify-center items-center">
        <h2
          class="text-balance text-3xl px-3 lg:px-0 lg:text-4xl text-center font-semibold tracking-tight text-gray-900">
          Win Scholarships with Confidence - Pre-Order Now at 20% Off! </h2>
        <p class="text-lg/7 max-w-[800px] w-full text-gray-900 text-center mt-6">
          Struggling with scholarship applications? Unsure how to craft a compeling personal statement or stand out in
          interviews?
        </p>

        <p class="text-lg/7 max-w-[800px] w-full text-gray-900 text-center mt-2">
          This course is designed to give you the winning edge—from mastering application strategies to impressing
          selection committees. Learn directly from scholarship recipients and experts who have successfully navigated
          the process. </p>
        <p class="mt-2 text-balance px-3 lg:px-0 text-lg/7 pt-6 text-center font-semibold tracking-tight text-gray-900">
          Pre-order today and save 20%! Take the first step toward funding your education and unlocking global
          opportunities. </p>
      </div>
    </div>

    <div class="flex justify-center items-center my-10 p-3 lg:p-0">
  <a href="https://paystack.com/pay/scholarshipappmasterclasscourse"
    class="text-white text-center bg-[#27628C] rounded-lg lg:w-full px-6 py-3.5 max-w-lg opacity-50 pointer-events-none">
    Pre-order Now
  </a>
</div>


    <div class="flex flex-col justify-center items-center min-h-screen mt-24">
      <h1 class="text-center text-[#27628C] uppercase text-2xl font-bold">Course Outline</h1>

      <div class="overflow-x-auto w-full max-w-[900px]">
        <table class="w-full border-collapse border-8 border-white mt-10 mx-auto">
          <thead>
            <tr class="bg-[#2788b2]">
              <th class="border-4 border-white text-gray-50 px-2 py-3 text-center text-sm md:text-base uppercase font">
                S/N</th>
              <th class="border-4 border-white text-gray-50 px-4 py-2 text-left text-sm md:text-base uppercase">Session
                Topic</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-[#27628C]">
            <tr v-for="(topic, index) in topics" :key="index">
              <td
                class="px-4 py-2 text-gray-50 border-4 border-white text-center text-sm md:text-base whitespace-nowrap">
                {{ topic.sn }}</td>
              <td class="px-4 py-2 text-gray-50 border-4 border-white text-left text-sm md:text-base whitespace-nowrap">
                {{ topic.topic }}</td>
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
              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {{ item.position }}
              </p>

              <p class="text-xs font-bold pt-5">CLICK TO SEE FACILITATOR'S PROFILE</p>
            </div>
          </div>
        </article>
      </section>
    </div>
    <div class="flex justify-center items-center my-10 p-3 lg:p-0">
  <a href="https://paystack.com/pay/scholarshipappmasterclasscourse"
    class="text-white text-center bg-[#27628C] rounded-lg lg:w-full px-6 py-3.5 max-w-lg opacity-50 pointer-events-none">
    Pre-order Now
  </a>
</div>

  </div>

  <SpeakerModal v-if="selectedSpeaker" :speaker="selectedSpeaker" :is-visible="isModalVisible" @close="closeModal" />
</template>

<script setup lang="ts">
definePageMeta({
  alias: [
    '/interntional/scholarshipmasterclasscourse' // Maps "0" to this
  ]
});

const route = useRoute();
const id = route.params.id;

import speaker1 from '@/assets/img/feranmi-obe.jpeg'
import speaker2 from '@/assets/img/shamsuddeen.jpeg'
import speaker3 from '@/assets/img/theodora-khofi.jpeg'
import speaker4 from '@/assets/img/gaius-bala.jpeg'
import speaker5 from '@/assets/img/kamsi-mouka.jpeg'
import speaker6 from '@/assets/img/femi-ayeotan.jpeg'
import speaker7 from '@/assets/img/femi-egbeleke.jpeg'
import speaker8 from '@/assets/img/wasiu-omoniyi.jpeg'
import speaker9 from '@/assets/img/olaleye-olajuyin.jpeg'
import speaker10 from '@/assets/img/paul-yiran.jpeg'
import speaker11 from '@/assets/img/andra-umoru.jpeg'

const topics = ref([
  {
    "sn": "01",
    "topic": "Introduction to Scholarship",
  },
  {
    "sn": "02",
    "topic": "Identifying Suitable Scholarships",
  },
  {
    "sn": "03",
    "topic": "Crafting a Winning Personal Statement",
  },
  {
    "sn": "04",
    "topic": "Building an Outstanding CV/Resume",
  },
  {
    "sn": "05",
    "topic": "Obtaining Strong Recommendation Letters",
  },
  {
    "sn": "06",
    "topic": "Writing Research Proposals",
  },
  {
    "sn": "07",
    "topic": "Exploring AI and Data Science in Biomed Research",
  },
  {
    "sn": "08",
    "topic": "Scholarship Interviews: Preparation and Practice",
  },
  {
    "sn": "09",
    "topic": "Reaching Out to Principal Investigators",
  },
  {
    "sn": "10",
    "topic": "Managing Rejections and Resilience",
  },
  {
    "sn": "11",
    "topic": "Networking and Real-Life Success Stories",
  },
  {
    "sn": "12",
    "topic": "Final Practical Exercises [breakout]",
  },
  {
    "sn": "13",
    "topic": "Closing SESSION and NEXT STEPS",
  },
]);

const schedules = ref([
  {
    image: speaker1,
    // "date_and_time": "Friday, 31st January, 2025, 8 pm - 9 pm",
    // "topic": "To Thyself be True - Developing an Identity as a Medical Laboratory Scientist",
    "speaker": "Feranmi Obe",
    "position": "Masters Student, University of Texas.",
    "bio": `
           Obe Feranmi Emmanuel is currently  a Graduate Research and Teaching Assistant in the Biology Department at the University of Texas at Tyler where he is pursuing  a master's degree in Biology. His research focuses on host-pathogen interactions, particularly investigating pneumolysin induced tight junction disruption and recovery in pulmonary epithelial cells. He holds a Bachelor's degree in Medical Laboratory Science From Ladoke Akintola University of Technology, Nigeria (BMLS, AMLSCN, Ogbomoso, 2021).

After his undergraduate education, he proceeded for his clinical internship at the University of Ilorin Teaching Hospital from 2022-2023.

His dedication to scientific research and education has earned him several awards, including the ASM FLMF Microbe 2025 Travel Award, Patriot Endowed Scholarship (2024), America Society for Microbiology Future Leader Mentoring Fellowship ASM-FLMF (2023-Present), New Graduate Fellowship Award (2023), Malaria Youth Army Champion (2021), and the Peace First Mini Grant Award (2021) for Child labor awareness and prevention program. 

Feranmi is passionate about translational research in infectious diseases, and immune response regulation, thus aiming to bridge the gap between laboratory research and clinical application.

        `,

  },
  {
    image: speaker2,
    "speaker": "Shamsuddeen Ma’aruf",
    "position": "PhD student, University of Saskatchewan.",
    "bio": `
        Shamsuddeen Ma’aruf holds a Bachelor of Medical Laboratory Science from UDUS Nigeria (first to graduate with a First Class Honour as a Histopathology major in the University), a Postgraduate Diploma in Education from ABU Nigeria, and MSc in Molecular Biology from SU South Africa. He is currently a Doctoral Philosophy - Vaccinology and Immunotherapeutics student at the Vaccine and Infectious Diseases Organization (VIDO), and School of Public Health, University of Saskatchewan (USask), Canada.
He is a DAAD Scholarship Alumni, Commonwealth Scholarship Awardee, USask's Dean's Doctoral International Scholarship Awardee, and NSERC-CREATE OHAP Doctoral Fellow. He has also won various awards, sponsorships, and grants; recent ones are the Tony Elumelu Foundation Entrepreneurship Seed Grant, Bill and Melinda Gates foundation Global Health Travel Award, BactiVac Catalyst Training Award.
Mr. Shamsuddeen is a Lecturer with the Department of Medical Laboratory Science, Kaduna State University, Nigeria. He is also the co-founder of D’ Health Rides Synergy Nigeria Ltd., a start-up maximizing medical laboratory services in Nigeria. Additionally, he is currently the Director - Digital Health R&D Team at InnovateHealth Africa. Mr. Shamsuddeen is a strong advocate of universal health coverage and quality education. His research work focuses on the cellular pathology of airborne disease and development of therapeutic interventions to tackle airborne pathogens.


        `
  },
  {
    image: speaker3,
    "speaker": "Theodora Khofi",
    "position": "Pre-PhD Intern, Malawi Liverpool Wellcome Programme.",
    "bio": `
       Theodora is a results-oriented researcher with a background in psychology and global health, with strong interests in global mental health and health equity. She holds a BSc in Psychology from the University of Warwick and a Master of Science in Global Health Delivery with a specialisation in health management from the University of Global Health Equity.

She is currently a Pre PhD-Intern at Malawi Liverpool Wellcome Programme exploring community perspectives towards alcohol use and alcohol related harm, with the overall objective of designing community-based interventions for her PhD research. She has over three years of research and programmatic experience, contributing to projects in mental health, HIV/ AIDs programming and health systems
strengthening.

Her research interests include youth mental health, substance use, developmental risk and resilience, and integrated person-centred care, with a focus on intervention design, quality of care, and community-based participatory research.
        `
  },
  {
    image: speaker4,
    "speaker": "Gaius Bala",
    "position": "Master's student, Nazarbayev University, Kazakhstan.",
    "bio": `
        Gaius Bala is a graduate of Usmanu Danfodiyo University Sokoto-Nigeria, where he had his
bachelor's program in medical laboratory science, specialising in histopathology.
During his undergraduate days, he was actively involved in setting up structures that fully
represented the many values the institution embodied. He served as Medical Laboratory Science
representative in the Students' Representative (Students Union), co-founded the Poetry Club
UDUS (that collaborated with Book O'Clock to launch the now globally recognized Sokoto Book and
Arts Festival (SOBAFEST), scripted and voiced the first promo video for his alma mater, and lots
more. He did this while volunteering for UNFPA (Youth Community Ambassador, Igabi LGA,
Nigeria), TEDx Arkilla, and MedLabConvo.

After his undergraduate program, Gaius had his internship placement at the Jos University
Teaching Hospital. Then he proceeded to work at Federal Teaching Hospital Gombe in fulfilment of
his National Youth Service Corps. As a continuous learner, he has participated professionally in the
West African Institute of Public Health (virtual intern), the 2022 International Academy of Cytology
tutorials (held in National Hospital Abuja), the 2023 African Genomic Medicine Training, and is an
mPhD Bronze Research Champion in the 2024 ReachSci program.

Currently, he's a recipient of the Abay Kunanbayev Grant, a fully funded scholarship program that
offers him an opportunity to pursue a master's program in molecular medicine at the best
university in Central Asia, Nazarbayev University Kazakhstan. Gaius is intentionally building a
network that empowers individuals to dream, leveraging a platform he calls ZARAFI. Describing
himself as a life investor, Gaius views this work as his service to God. If you are looking for an
ardent lover of spirit-filled music, Gaius is one; he enjoys being serenaded with soothing music but
has little interest in cinema.`
  },
  {
    image: speaker5,
    "speaker": "Kamsi Muoka",
    "position": "MPhil student, University of Cambridge.",
    "bio": `
        Olivia Kamsi Muoka is a first-class graduate of Medical Laboratory Science from the University of Calabar, where she earned recognition as the university's Best Graduating Student in 2023. During her undergraduate studies, she demonstrated a profound dedication to research, investigating lung function and biomarkers of oxidative DNA damage and inflammation in woodworkers exposed to wood dust. This pivotal work sparked her passion for exploring the intricate relationship between the immune system and cancer.

        After earning her degree, Kamsi completed a one-year internship as a Medical Laboratory Scientist at the University of Calabar Teaching Hospital, where she gained hands-on experience in conducting diagnostic and monitoring laboratory tests. She then served as a Clinical Research Assistant at Lakeshore Cancer Center in Lagos, Nigeria, where she contributed to advancing innovative cancer treatment strategies.

        Currently, Kamsi is pursuing an MPhil in Medical Science at the Cancer Research UK Cambridge Institute (CRUK CI) at the University of Cambridge. Her academic journey is marked by numerous prestigious scholarships, including the Mastercard AfOx Scholarship at the University of Oxford, the Mastercard Cambridge Scholarship, and the Gates Cambridge Scholarship, which currently funds her MPhil. Additionally, she was among the 14 finalists for the highly competitive 2024 Rhodes Scholarship for West Africa.


        Beyond her academic and research pursuits, Kamsi is passionate about mentorship and empowering others. Through her podcast, "Let's Talk with KamKam," she shares practical study tips and personal experiences, inspiring students to excel in their academic endeavours and bridge learning gaps.


        In her free time, Kamsi enjoys listening to music and cherishing moments with her family.
        `
  },
  {
    image: speaker6,
    "speaker": "Femi Ayeotan",
    "position": "PhD student, Temple University.",
    "bio": `
        
Olorunfemi Ayeotan earned a bachelor's degree in Medical Laboratory Science from Ladoke Akintola University of Technology in 2020. During his undergraduate studies, he investigated Beta-2 microglobulin as a potential marker for monitoring treatment response in chronic leukemia patients across multiple tertiary hospitals in southwestern Nigeria. 

After graduating, he gained a year of clinical experience at the University College Hospital in Ibadan. He then joined the Biomedical Science PhD program at Temple University in 2023, where he currently conducts research in Dr. Jayashri Ghosh’s lab at the Fels Cancer Institute for Personalized Medicine. His work focuses on understanding the role of DNA methylation in colorectal cancer disparities.
        `
  },
  {
    image: speaker7,
    "speaker": "Femi Egbeleke",
    "position": "PhD student and Graduate Research Assistant, Augusta University.",
    "bio":
      `
        Femi Egbeleke is a Ph.D. student and a Graduate Research Assistant at Augusta University. He holds a master's degree in Biology from Western Illinois University and a bachelor's degree in Medical Laboratory Science from Ladoke Akintola University of Technology, Ogbomoso, Nigeria.

He has a strong passion for academics and research. His current research focuses on the role of epigenetic modifications in the regulation of mammary and cancer stem cells.
        `
  },
  {
    image: speaker8,
    "speaker": "Wasiu Omoniyi",
    "position": "MSc student, University of Leicester.",
    "bio": `
   Wasiu Omoniyi is a passionate biomedical scientist with a Bachelor’s degree in Medical Laboratory Science (Biomedical Science), majoring in Medical Microbiology from Ladoke Akintola University of Technology, Nigeria. His final-year project, “Significant Bacteriuria among Apparently Healthy Individuals,” not only deepened his understanding of infectious diseases but also earned him recognition with the project abstract being accepted for a poster presentation at ASM Microbe 2022 in the United States.

During his internship and mandatory youth volunteer service at the University of Ilorin Teaching Hospital, Nigeria, Wasiu Omoniyi gained hands-on experience in bacterial culture and identification, antibiotic susceptibility testing, and molecular diagnostics. Working with advanced platforms like GeneXpert, Bactec, and Vitek machines, He developed a keen interest in the intersection of clinical practice and innovative research.
His dedication to scientific exploration was further recognized with a summer scholarship from Nicolaus Copernicus University in Poland to study “The Impact of Norfloxacin and Povidone-Iodine on Mixed Biofilms of Escherichia coli and Proteus mirabilis” under the mentorship of Dr. Joanna Kwiecińska-Piróg. Though the COVID-19 pandemic prevented him from attending in person, Wasiu Omoniyi continued to pursue impactful research, co-authoring a publication on “Transmission, Entry, and Pattern of Infection of Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2)” (DOI: 10.31248/JPHD2020.081, Article number: 330354CD1).

Currently, Wasiu Omoniyi is expanding his expertise as an MSc candidate in Cancer Cell and Molecular Biology at the University of Leicester, supported by the prestigious UK Commonwealth Shared Scholarship Program. Here, he is mastering advanced techniques, including qPCR, CRISPR-Cas9, tissue and cell culture, and gel electrophoresis, western blotting while exploring the intricate mechanisms of cancer biology.

Beyond the lab, Wasiu Omoniyi remains driven by a vision of making meaningful contributions to global health through innovative research, collaborative learning, and mentorship. He is particularly passionate about bridging the gap between scientific discovery and real-world healthcare solutions.
        `
  },
  {
    image: speaker9,
    "speaker": "Olaleye Olajuyin",
    "position": "PhD student, Graduate School of Biomedical Science and Engineering, University of Maine.",
    "bio": `
        *Olaleye Olajuyin, B.MLS*

Olaleye E. Olajuyin is a PhD student in the Graduate School of Biomedical Science and Engineering at the University of Maine, where he conducts research under the mentorship of Dr. Iain Drummond. His work focuses on understanding the role of inflammatory signaling in zebrafish kidney regeneration, with broader implications for kidney disease treatment and regenerative medicine.

He has gained extensive research experience through predoctoral training at various institutions, including the Jackson Laboratory and Maine Health Institute for Research, where he investigated diverse topics such as bone marrow cell populations, wound healing mechanisms, and glucose metabolism in autoimmune diseases. His research background also extends to public health, where he contributed to studies on hepatocellular carcinoma and metabolic disorders in Nigeria.

Beyond research, Olajuyin is committed to mentorship and education. He has trained undergraduate and summer research students in laboratory techniques and experimental design, particularly in regenerative biology. He is also actively involved in scientific leadership. He aims to translate his research into therapeutic advancements for kidney disease and related disorders.
        `
  },
  {
    image: speaker10,
    "speaker": "Paul Yiran",
    "position": "PhD student, University of Iowa.",
    "bio": `
        
Paul Yiran Ntasin completed his Bachelor’s degree in Medical Laboratory Science at Usmanu Danfodio University Sokoto. He undertook a one-year internship program at Federal Medical Center, Birnin Kebbi and subsequently worked for a year at the Police clinic in Bauchi as a Medical Laboratory Scientist. 

He is currently a PhD graduate student in Immunology at the University of Iowa, where his research work has focused on multiple sclerosis and fatty acid metabolism in immune cells at one point. He enjoys playing football, productive discussions and loves beautiful/creative photos.
        `
  },
  {
    image: speaker11,
    "speaker": "Andra Umoru",
    "position": "AI Engineer/Data Architect at Procter & Gamble, Poland.",
    "bio": `
        
Andra Umoru is a Senior IT Manager—AI Engineer/Data Architect at Procter & Gamble in Poland. He earned his B.Tech in Computer Science from Mautech Yola, Adamawa State, Nigeria, and later completed his MSc in Computer Science and Information Systems (specializing in AI) at the Warsaw University of Technology in Poland.

Driven by a passion for cutting-edge innovation, Andra leverages his deep expertise to build artificial intelligence tools and design the underlying data architectures that power business growth and operational efficiency. Additionally, he enjoys exploring AI’s broad applicability across various sectors of human endeavor. Andra currently resides in Warsaw, Poland, with his wife and two sons.`
  }
]);

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