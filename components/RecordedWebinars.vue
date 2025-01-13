

  <template>
    <div class="">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <!-- <h2 class="text-base/7 font-semibold text-indigo-400">Deploy faster</h2> -->
          <p class="my-2 max-w-lg text-pretty text-2xl font-semibold tracking-tight text-[#27628C] uppercase sm:text-3xl">Recorded Webinars</p>
          <!-- <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div class="flex p-px lg:col-span-4">
              <div class="overflow-hidden w-full rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                <img class="h-80 w-full object-cover object-left" src="@/assets/img/recorded-webinars1.png" alt="">
                <div class="p-10">
                  <h3 class="text-lg font-semibold text-gray-400">Rivalry in Health</h3>
                </div>
              </div>
            </div>
            <div class="flex p-px lg:col-span-2">
              <div class="overflow-hidden w-full rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
                <img class="h-80 w-full object-cover object-center" src="@/assets/img/recorded-webinars2.png" alt="">
                <div class="p-10">
                  <h3 class="text-lg font-semibold text-gray-400">Med Lab is After My Life</h3>
                </div>
              </div>
            </div>
            <div class="flex p-px lg:col-span-2">
              <div class="overflow-hidden w-full rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                <img class="h-80 w-full object-cover object-center" src="@/assets/img/recorded-webinars3.png" alt="">
                <div class="p-10">
                  <h3 class="text-lg font-semibold text-gray-400">Surviving ASUU Strike</h3>
                </div>
              </div>
            </div>
            <div class="flex p-px lg:col-span-4">
              <div class="overflow-hidden w-full rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                <img class="h-80 w-full object-cover object-left" src="@/assets/img/recorded-webinars4.png" alt="">
                <div class="p-10">
                  <h3 class="text-lg font-semibold text-gray-400">Misdiagnosis</h3>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <!-- component -->
        <div class="w-full mt-6  h-screen lg:rounded-2xl" style="background-image: url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg');">
            <div class="w-full h-screen lg:rounded-2xl flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
                <div class="flex-1 flex flex-col items-center justify-center">
                    <h1 class="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">Coming Soon</h1>
                    <!-- <div class="flex flex-col items-center space-y-4 mt-24">
                        <p class="text-gray-300 uppercase text-sm">Notify me when it's ready</p>
                        <form @submit.prevent="sendToWhatsApp" class="w-full flex items-center">
                            <input type="email" name="email" id="email"  v-model="email"
              class="w-72 p-2 py-3.5 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm" placeholder="Email" autocomplete="off">
                            <button type="submit" class="bg-blue-600 hover:bg-blue-700 py-3.5 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">Subscribe</button>
                        </form>
                        <p v-if="message" class="text-sm mt-4 text-gray-200">{{ message }}</p>
                    </div> -->
                </div>
            </div>
        </div>
      </div>
      
  </template>
  

  <script lang="ts" setup>
import { ref } from "vue";

const email = ref<string>("");
const message = ref<string>("");

const sendToWhatsApp = () => {
  if (!email.value) {
    message.value = "Please enter a valid email address.";
    return;
  }

  // Build the WhatsApp message text dynamically
  const encodedMessage = `I%20am%20interested%20in%20the%20recorded%20webinars.%20This%20is%20my%20email%20address:%20${encodeURIComponent(
    email.value
  )}`;

  // Open WhatsApp with the generated message
  const whatsappNumber = "2348179617254"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");

  message.value = "Your email has been submitted successfully!";
  email.value = ""; // Reset the email field
};
</script>