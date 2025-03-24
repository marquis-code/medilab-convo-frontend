<template>
  <main>
    <div>
      <div class="relative isolate overflow-hidden pt-14">
        <div class="mx-auto max-w-2xl lg:py-32 lg:mt-24 mt-40">
          <div class="text-center space-y-3">
            <h1 class="font-bold tracking-tight text-gray-900 text-5xl">
              Support MedLabConvo
            </h1>
            <p class="text-3xl leading-8 text-gray-900 italic px-2 lg:px-0">
              Empower the Future of Medical Laboratory Science
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-4 max-w-sm w-40 lg:w-full h-40 mx-auto pt-4 mt-8">
      <a href="https://paystack.com/pay/medlabconvodonation" target="_blank"
        class="bg-[#27628C] text-center text-white py-3 px-3 rounded transition-colors hover:bg-[#1a4665]">
        Donate Now
      </a>
    </div>

    <div class="mt-20 lg:mt-6 flex justify-center items-center px-4">
      <div class="max-w-[900px] w-full flex flex-col justify-center items-center">
        <h2 class="text-2xl md:text-4xl text-center font-extrabold text-gray-900">
          Why Donate to MedLabConvo?
        </h2>
        <p class="text-xl md:text-2xl max-w-[800px] w-full text-gray-900 text-center mt-6">
          MedLabConvo is more than just a platform; it is a movement dedicated
          to transforming the landscape of medical laboratory science. Through
          education, mentorship, advocacy, and system strengthening, we are
          shaping the future of healthcare by empowering laboratory
          professionals at every stage of their careers.
        </p>
      </div>
    </div>

    <div class="mt-28 flex justify-center items-center px-4">
      <div class="max-w-[900px] w-full flex flex-col justify-center items-center">
        <p class="text-2xl md:text-3xl text-center text-red-700">Choose Your Payment Method</p>
        <p class="text-center text-lg mt-6">
          You either <span class="text-red-700 uppercase">copy</span> our account details or make a
          <span class="text-red-700 uppercase">transfer</span>
        </p>

        <div class="w-full max-w-[500px] border-2 rounded-2xl px-4 lg:px-6 py-8 mt-16 mx-auto">
          <p class="text-2xl">Copy Account Details</p>
          <p class="text-gray-400 text-lg">Use personal banking app</p>
          <div class="bg-red-400 h-[1px] mt-2 opacity-60"></div>
          <p class="text-gray-500 text-lg mt-4">Select any account to transfer to</p>

          <div class="flex items-center gap-6 lg:gap-20 mt-10 border-2 lg:p-4 p-2 rounded-2xl">
            <div class="relative p-6 rounded-2xl w-[280px] min-h-[120px] flex flex-col justify-start"
              style="background: linear-gradient(235deg, #814285, #7b1fd2);">
              <img src="@/assets/img/mastercard.jpg" alt="Mastercard logo" class="absolute top-2 right-2 w-10" />
              <p class="text-lg text-white">MedLabConvo</p>
              <p class="text-2xl font-extrabold text-white">{{ textToCopy }}</p>
              <p class="text-lg text-white">UBA</p>
            </div>

            <div class="flex flex-col justify-center items-center min-h-[120px]">
              <p class="text-xl text-gray-900 mb-2">Copy</p>
              <img src="@/assets/img/copy.png" alt="Copy"
                class="w-10 h-10 cursor-pointer opacity-80 hover:opacity-60 transition" @click="copyText" />
              <span v-if="copied" class="text-green-500 text-sm mt-2">Copied!</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white container mx-auto mt-28">
      <div class="mx-auto px-4 sm:px-6 lg:px-4">
        <h2 class="text-2xl font-bold text-gray-900 text-center uppercase">
          Your donation helps us:
        </h2>

        <div class="flex justify-center items-center w-full lg:flex pt-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">
            <div
              class="max-w-md lg:max-w-lg lg:w-[500px] w-[300px] mx-auto bg-white rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6">
              <div class="space-y-4">
                <h1 class="text-xl font-semibold text-gray-500 uppercase tracking-wider">
                  ✅ Train and Mentor Future Leaders
                </h1>
                <p class="text-xl text-gray-900 tracking-tighter mb-2">
                  Our Origins Program and professional development initiatives
                  equip young medical laboratory scientists with the skills and
                  opportunities they need to thrive.
                </p>
              </div>
            </div>

            <div
              class="max-w-md lg:max-w-lg lg:w-[500px] w-[300px] mx-auto bg-white rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6">
              <div class="space-y-4">
                <h1 class="text-xl font-semibold text-gray-500 uppercase tracking-wider">
                  ✅ Bridge the Knowledge Gap
                </h1>
                <p class="text-xl text-gray-900 tracking-tighter mb-2">
                  Through our LabCast podcast, blogs, and research resources, we
                  provide critical knowledge that enhances clinical diagnostics
                  and patient care.
                </p>
              </div>
            </div>

            <div
              class="max-w-md lg:max-w-lg lg:w-[500px] w-[300px] mx-auto bg-white rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6">
              <div class="space-y-4">
                <h1 class="text-xl font-semibold text-gray-500 uppercase tracking-wider">
                  ✅ Strengthen Healthcare Systems
                </h1>
                <p class="text-xl text-gray-900 tracking-tighter mb-2">
                  By fostering collaboration and advocating for laboratory
                  medicine, we contribute to a more robust and efficient
                  healthcare system.
                </p>
              </div>
            </div>

            <div
              class="max-w-md lg:max-w-lg lg:w-[500px] w-[300px] mx-auto bg-white rounded-lg border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6">
              <div class="space-y-4">


                <h1 class="text-xl font-semibold text-gray-500 uppercase tracking-wider">
                  ✅ Expand Access to Opportunities
                </h1>
                <p class="text-xl text-gray-900 tracking-tighter mb-2">
                  Our networking and community-building efforts connect medical
                  laboratory scientists worldwide, ensuring that no one is left
                  behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#27628C] w-full  flex justify-center items-center py-20 px-4 mt-28">
      <div class="max-w-[900px] w-full flex flex-col justify-center items-center text-white">
        <h2 class="text-2xl text-center font-bold uppercase">
          Where Your Donations Go
        </h2>
        <p class="text-xl md:text-2xl max-w-[800px] w-full text-center mt-6">
          Every contribution, big or small, directly fuels our mission. Your donations will support:
        </p>
        <ul class="mt-6 text-lg md:text-xl list-disc list-inside space-y-3">
          <li>The development of educational content, workshops, and training sessions</li>
          <li>The expansion of our mentorship and internship support programs</li>
          <li>The sustainability of LabCast, Journo, and other knowledge-sharing platforms</li>
          <li>The launch of new initiatives aimed at health advocacy and system reform</li>
        </ul>
      </div>
    </div>



    <div class="flex justify-center items-center px-4 mt-28">
      <div class="max-w-[900px] w-full flex flex-col justify-center items-center">
        <h2
          class="text-balance text-3xl px-3 lg:px-0 lg:text-4xl text-center font-semibold tracking-tight text-gray-900">
          Join Us in Making an Impact
        </h2>
        <p class="text-xl md:text-2xl max-w-[800px] w-full text-gray-900 text-center mt-6">
          By supporting MedLabConvo, you are investing in a future where medical laboratory scientists are better
          equipped, more connected, and more empowered to drive change in healthcare.
        </p>
        <p
          class="mt-2 text-balance text-3xl px-3 lg:px-0 lg:text-4xl pt-20 text-center font-semibold tracking-tight text-gray-900">
          Donate Today and Be Part of the Change!
        </p>
      </div>
    </div>

    <div class="flex flex-col space-y-4 max-w-sm w-40 lg:w-full mx-auto pt-4 mt-6 mb-20">
      <a href="https://paystack.com/pay/medlabconvodonation" target="_blank"
        class="bg-[#27628C] text-center text-white py-3 px-3 rounded transition-colors hover:bg-[#1a4665]">
        Donate Now
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textToCopy = ref('2226584232');
const copied = ref(false);

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(textToCopy.value);
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
</script>