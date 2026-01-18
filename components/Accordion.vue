<template>
    <div>
      <div v-for="(season, index) in seasons" :key="season.year" class="mb-4">
        <button
          @click="toggleAccordion(index)"
          class="w-full text-left bg-white border-b border-gray-100 p-4 text-teal-700 font-semibold focus:outline-none"
        >
          {{ season.year }}
          <span :class="openIndex === index ? 'rotate-180' : 'rotate-0'" class="float-right transition-transform duration-300">▼</span>
        </button>
  
        <div v-if="openIndex === index" class="p-4 border border-t-0 border-gray-200">
          <ul class="space-y-4">
            <li v-for="(episode, idx) in season.episodes" :key="idx" class="mb-2">
              <a href="#" class="text-teal-600 text-sm underline hover:underline">{{ episode.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
<script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const seasons = ref([
        {
          year: "SEASON 2024",
          episodes: [
            { title: "Renal Function Tests: Insights Into Kidney Health And Disease" },
            { title: "MLS Education in Nigeria: Is the Future Bright or Bleak? Part 1" },
            { title: "MLS Education in Nigeria: Is the Future Bright or Bleak? Part 2" },
            { title: "MLS Education in Nigeria: Is the Future Bright or Bleak? Part 3" },
            { title: "Medical Laboratory Science Practice: From MLS in Diaspora Viewpoint" },
            { title: "Rh and ABO Incompatibility, Exploring The Mechanisms Behind Haemolytic Disease of The Newborn" },
            { title: "Must Have Soft Skills for Medical Laboratory Scientists " },
            { title: "Laboratory Safety and Waste Management" },
            { title: "Nigeria and the Threat of Bioterrorism  Part 2" },
            { title: "Nigeria and the Threat of Bioterrorism Part 1" },
            { title: "Andrology " },
            { title: "Essence of Scientific Research" },
            { title: "Welcome to 2024" },
            // Add more episodes as needed
          ],
        },
        {
          year: "SEASON 2023",
          episodes: [
            { title: "Goodbye to 2023" },
            { title: "Antimicrobial Resistance: the Role of Youths" },
            { title: "Student Volunteering: Essential for Growth and Experience" },
            { title: "NHIS: Challenges, Opportunities, and Way Forward " },
            { title: "Tips for New MLS Interns Part 2" },
            { title: "Tips for New MLS Interns Part 1" },
            { title: "Advances in Vaccine Technology" },
            { title: "Venturing into Tech as a Medical Laboratory Scientist" },
            { title: "MLS in the Face of Global Outbreaks/Pandemic " },
            { title: "Stem Cell Therapy" },
            { title: "Blood Donation" },
            { title: "Academic Excellence: Is School a Scam? Part 2" },
            { title: "Academic Excellence: Is School a Scam? Part 1" },
            { title: "Phage Therapy: The Enemy of my Enemy is my Friend" },
            { title: "The Need for Laboratory Management" },
            { title: "Choosing Seminar and Project Topic" },
            { title: "Rebranding and Restructuring: The Story of the Asika Administration  Part 2" },
            { title: " Rebranding and Restructuring: The Story of the Asika Administration  Part 1" },
            { title: "Quality Management Systems" },
            { title: " Intro to 2023" },
          ],
        },
        {
          year: "SEASON 2022",
          episodes: [
            { title: "Med Lab Misconceptions Corrected" },
            { title: "Thought Leadership in Public Health" },
            { title: "Journalism in Med Lab" },
            { title: "Is Med Lab Lucrative?" },
            { title: "olitics and Medical Laboratory Science: Why MLScts need to play the game and play it right" },
            { title: "From B.MLS to Straight Ph.D" },
            { title: "Ethics of Medical Laboratory Science" },
            { title: "The Struggles of Getting Internship Placement Part 2" },
            { title: "The Struggles of Getting Internship Placement Part 1" },
            { title: "Requirements to Study Medical Laboratory Science" },
            { title: "Writing Medical Laboratory Science Textbook" },
            { title: "Evolution of Medical Laboratory Science in Nigeria Part 2" },
            { title: "Evolution of Medical Laboratory Science in Nigeria Part 1" },
            { title: "What You Should Know When Choosing a Specialty Part 2" },
            { title: "What You Should Know When Choosing a Specialty Part 1" },
            { title: "Tips to Thrive in Laboratory Postings" },
            { title: "Specializations in Medical Laboratory Science" },
            { title: "Relevance of Medical Laboratory Science" },
            { title: "All About MedLab Convo with Gabriel Oke" },
            { title: "Intro to LabCast" },
          ],
        },
      ]);
  
      const openIndex = ref<number | null>(null);
  
      const toggleAccordion = (index: number) => {
        openIndex.value = openIndex.value === index ? null : index;
      };
  
      return { seasons, openIndex, toggleAccordion };
    },
  });
</script>