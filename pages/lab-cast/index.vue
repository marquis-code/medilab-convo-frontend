<template>
  <main>
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src="@/assets/img/hero-background.jpeg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "></div>
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "></div>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center items-center pt-16 w-full">
        <div class="mx-auto max-w-2xl lg:mx-0 flex justify-center items-center w-full flex-col">
          <h2 class="text-4xl font-black uppercase text-center tracking-tight text-white sm:text-6xl">
            LabCast
          </h2>
          <p class="mt-6 text-lg leading-8 text-center text-gray-100">
            LabCast is the podcast dedicated to exploring the dynamic world of
            medical laboratory science, healthcare innovation, and the stories
            that shape the profession. Whether you're a seasoned professional, a
            student, or someone interested in the impact of medical science,
            Labcast brings you conversations that inspire, inform, and challenge
            the way we think about healthcare.
          </p>
        </div>
      </div>
    </div>
    <!-- <h1 class="flex justify-center font-semibold items-center text-3xl mt-20">Our Hosts</h1> -->
    <div class="container mx-auto py-10">
      <FrameVideo />
    </div>
    <!-- <VideoPlayer /> -->
    <!-- <ProfileCard /> -->
    <!-- <div  class="mt-16 flow-root">
          <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10">
            <div class="rounded-md shadow-2xl ring-1 ring-gray-900/10">
            <video
              class="rounded-md"
              controls
              autoplay
              loop
              muted
              width="2432"
              height="1442"
            >
              <source src="/hosts.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          </div>
        </div> -->


    <h1 class="flex justify-center text-[#27628C] items-center text-2xl mt-6">Latest Episode</h1>
    <div class="container mx-auto px-4 mt-8">
      <div class="bg-white p-0 rounded-lg shadow-md flex">
        <div class="lg:flex space-y-6 items-center space-x-4 w-full p-6">
          <img src="@/assets/img/latest-labcast.jpg" alt="Podcast cover" class="w-72 h-60 rounded-lg object-cover" />
          <div class="flex flex-col w-full">
            <div class="font-semibold text-2xl">Redeeming the Time: Navigating the Pre-internship Phase.</div>
            <div class="text-gray-500 mt-2">

              You’ve been inducted, but the internship call isn’t coming - now what? In this episode of LabCast, Ubani
              C. Nmesoma and co-host Folaranmi Precious unpack the frustrating, uncertain, and all-too-common “wait
              period” many medical laboratory science graduates in Nigeria face before securing internship placements.

              They’re joined by Oluwamuyiwa Ogunkoya David and Gimbiya Precious, two MLS graduates who’ve completed
              internships. The conversation focuses on the reasons behind the delays, how to make the most of the
              waiting period, and what changes the system really needs.

              Whether you're waiting, worrying, or wondering what’s next, this episode offers real talk, practical tips,
              and the encouragement you need to keep going.

              Tune in, share with a friend, and don’t forget to check out our previous episodes on internship
              struggles.🤗
            </div>
            <div class="mt-3">
              <p class="text-gray-400 text-sm mb-2">Available On:</p>
              <div class="flex flex-wrap gap-2">
                <a href="https://open.spotify.com/episode/5D6cMrufqwIkJMr16BDH28?si=62pzB1M4SzCjNKxTlH--nQ"
                  class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1DB954] text-sm hover:opacity-90">
                  <span class="mr-2">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </span>
                  Spotify
                </a>
                <a href="https://open.spotify.com/episode/5D6cMrufqwIkJMr16BDH28?si=62pzB1M4SzCjNKxTlH--nQ"
                  class="inline-flex items-center border-[0.5px] border-gray-20 px-4 py-1.5 rounded-full bg-white text-black text-sm hover:opacity-90">
                  <span class="mr-2">
                    <svg fill="none" class="w-6 h-6" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="45.7809" x2="45.7809" y1="0"
                        y2="91.5618">
                        <stop offset="0" stop-color="#f452ff" />
                        <stop offset="1" stop-color="#832bc1" />
                      </linearGradient>
                      <rect fill="url(#a)" height="91.5618" rx="20" width="91.5618" />
                      <g fill="#fff">
                        <path
                          d="m51.2102 53.6523c-.0891-.8028-.3565-1.3826-.8912-1.9178-1.0026-1.0481-2.7627-1.7394-4.8348-1.7394-2.072 0-3.8321.669-4.8347 1.7394-.5125.5575-.8021 1.115-.8912 1.9178-.1783 1.561-.0669 2.899.1114 5.0621.1782 2.0515.5124 4.7944.9357 7.5596.3119 1.9847.557 3.0551.7798 3.8133.3788 1.2488 1.7379 2.3192 3.899 2.3192 2.1612 0 3.5426-1.0927 3.899-2.3192.2228-.7582.4679-1.8286.7798-3.8133.4234-2.7875.7576-5.5081.9358-7.5596.2005-2.1631.2896-3.5011.1114-5.0621z" />
                        <path
                          d="m50.9618 42.2787c0 3.0328-2.4508 5.4858-5.4809 5.4858s-5.4809-2.453-5.4809-5.4858c0-3.0327 2.4508-5.4857 5.4809-5.4857s5.4809 2.4753 5.4809 5.4857z" />
                        <path
                          d="m45.4172 20.67c-12.7888.0446-23.2604 10.4363-23.4386 23.2364-.1337 10.3694 6.4834 19.2448 15.7297 22.5005.2228.0892.4456-.1115.4233-.3345-.1114-.8028-.2451-1.6056-.3342-2.4083-.0446-.2899-.2228-.5129-.4679-.6467-7.3079-3.1889-12.41-10.5256-12.3209-19.0218.1114-11.1499 9.2017-20.226 20.3194-20.3152 11.3851-.0892 20.6759 9.143 20.6759 20.5159 0 8.407-5.0798 15.6322-12.3208 18.8211-.2674.1115-.4457.3568-.4679.6467-.1114.8027-.2228 1.6055-.3342 2.4083-.0446.2453.2005.4237.4233.3345 9.1571-3.2111 15.7297-11.9527 15.7297-22.2106-.0446-12.9785-10.6276-23.5486-23.6168-23.5263z" />
                        <path
                          d="m44.8793 28.4746c-8.3327.3122-15.0167 7.2029-15.1281 15.543-.0668 5.4858 2.6736 10.3471 6.8845 13.2238.2005.1338.4902-.0223.4902-.2676-.0669-.9589-.0669-1.8063-.0223-2.6983.0223-.2899-.0891-.5575-.3119-.7582-2.5622-2.4083-4.1218-5.8425-4.0327-9.6335.1782-6.6899 5.5477-12.1311 12.2317-12.3987 7.2633-.2899 13.2344 5.5527 13.2344 12.7332 0 3.6572-1.5596 6.9576-4.0327 9.299-.2005.2007-.3119.4683-.3119.7582.0445.8697.0223 1.7171-.0223 2.676-.0223.2453.2674.4237.4902.2676 4.144-2.8321 6.8845-7.6265 6.8845-13.0231.0223-8.8753-7.397-16.0782-16.3536-15.7214z" />
                      </g>
                    </svg>
                  </span>
                  Apple
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container mx-auto px-4 mt-8">
      <div class="bg-white p-0 rounded-lg shadow-md flex">
        <div class="lg:flex space-y-6 items-center space-x-4 w-full p-6">
          <img 
            src="@/assets/img/updates4.jpeg"
            alt="Podcast cover"
            class="w-72 h-60 rounded-lg object-cover"
          />
          <div  class="flex flex-col w-full">
            <div  class="font-semibold text-2xl">The Thrills and Terrors of Bench Work.</div>
            <div  class="text-gray-500 mt-2">
              In this episode, we delve into the experiences and insights of medical laboratory scientists working abroad (United Kingdom)). Join us as we explore how practice and perspectives differ in this region.
            </div>
            <div class="mt-3">
        <p  class="text-gray-400 text-sm mb-2">Available On:</p>
        <div  class="flex flex-wrap gap-2">
          <a
            href="https://open.spotify.com/episode/2vt0Albx3ehcFTyrgl55xi?si=RdhtkOPvTlKTC0_Hx2p3kQ"
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1DB954] text-sm hover:opacity-90"
          >
            <span class="mr-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                />
              </svg>
            </span>
            Spotify
          </a>
          <a 
            href="https://podcasts.apple.com/us/podcast/thrills-and-terrors-of-bench-work/id1610877517?i=1000685322948"
            class="inline-flex items-center border-[0.5px] border-gray-20 px-4 py-1.5 rounded-full bg-white text-black text-sm hover:opacity-90"
          >
            <span class="mr-2">
              <svg fill="none" class="w-6 h-6" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="45.7809" x2="45.7809" y1="0" y2="91.5618"><stop offset="0" stop-color="#f452ff"/><stop offset="1" stop-color="#832bc1"/></linearGradient><rect fill="url(#a)" height="91.5618" rx="20" width="91.5618"/><g fill="#fff"><path d="m51.2102 53.6523c-.0891-.8028-.3565-1.3826-.8912-1.9178-1.0026-1.0481-2.7627-1.7394-4.8348-1.7394-2.072 0-3.8321.669-4.8347 1.7394-.5125.5575-.8021 1.115-.8912 1.9178-.1783 1.561-.0669 2.899.1114 5.0621.1782 2.0515.5124 4.7944.9357 7.5596.3119 1.9847.557 3.0551.7798 3.8133.3788 1.2488 1.7379 2.3192 3.899 2.3192 2.1612 0 3.5426-1.0927 3.899-2.3192.2228-.7582.4679-1.8286.7798-3.8133.4234-2.7875.7576-5.5081.9358-7.5596.2005-2.1631.2896-3.5011.1114-5.0621z"/><path d="m50.9618 42.2787c0 3.0328-2.4508 5.4858-5.4809 5.4858s-5.4809-2.453-5.4809-5.4858c0-3.0327 2.4508-5.4857 5.4809-5.4857s5.4809 2.4753 5.4809 5.4857z"/><path d="m45.4172 20.67c-12.7888.0446-23.2604 10.4363-23.4386 23.2364-.1337 10.3694 6.4834 19.2448 15.7297 22.5005.2228.0892.4456-.1115.4233-.3345-.1114-.8028-.2451-1.6056-.3342-2.4083-.0446-.2899-.2228-.5129-.4679-.6467-7.3079-3.1889-12.41-10.5256-12.3209-19.0218.1114-11.1499 9.2017-20.226 20.3194-20.3152 11.3851-.0892 20.6759 9.143 20.6759 20.5159 0 8.407-5.0798 15.6322-12.3208 18.8211-.2674.1115-.4457.3568-.4679.6467-.1114.8027-.2228 1.6055-.3342 2.4083-.0446.2453.2005.4237.4233.3345 9.1571-3.2111 15.7297-11.9527 15.7297-22.2106-.0446-12.9785-10.6276-23.5486-23.6168-23.5263z"/><path d="m44.8793 28.4746c-8.3327.3122-15.0167 7.2029-15.1281 15.543-.0668 5.4858 2.6736 10.3471 6.8845 13.2238.2005.1338.4902-.0223.4902-.2676-.0669-.9589-.0669-1.8063-.0223-2.6983.0223-.2899-.0891-.5575-.3119-.7582-2.5622-2.4083-4.1218-5.8425-4.0327-9.6335.1782-6.6899 5.5477-12.1311 12.2317-12.3987 7.2633-.2899 13.2344 5.5527 13.2344 12.7332 0 3.6572-1.5596 6.9576-4.0327 9.299-.2005.2007-.3119.4683-.3119.7582.0445.8697.0223 1.7171-.0223 2.676-.0223.2453.2674.4237.4902.2676 4.144-2.8321 6.8845-7.6265 6.8845-13.0231.0223-8.8753-7.397-16.0782-16.3536-15.7214z"/></g></svg>
            </span>
            Apple
          </a>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div> -->


    <h1 class="flex justify-center items-center text-[#27628C] text-2xl mt-6">Popular Episodes</h1>
    <div class="container mx-auto px-4 mt-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <a v-for="(item, idx) in podcastList" :key="idx"
          class="bg-white p-0 shadow-md border-[0.5px] rounded-md pt-3 bg-gray-900 block" :href="item.link">
          <!-- <img
            src="@/assets/img/podcast.jpg"
            alt="Podcast cover"
            class="w-full h-60 object-cover mb-4 cursor-pointer"
          /> -->
          <div class="px-3 pb-3">
            <div class="font-semibold text-lg">{{ item.name ?? "Nil" }}</div>
            <div class="text-gray-600 text-sm mt-2">
              {{
              item.description.length > 20
              ? `${item.description.slice(0, 100)}...`
              : item.description
              }}
            </div>
            <!-- <img src="@/assets/icons/play.svg" class="h-10 w-10 mt-3"/> -->
            <div class="flex flex-wrap gap-2 mt-5">
              <a :href="item.link"
                class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1DB954] text-sm hover:opacity-90">
                <span class="mr-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </span>
                Spotify
              </a>
              <!-- <a
             :href="item.appleUrl"
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1DB954] text-white text-sm hover:opacity-90"
          >
            <span class="mr-2">
             <svg fill="none" class="w-4 h-4" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="45.7809" x2="45.7809" y1="0" y2="91.5618"><stop offset="0" stop-color="#f452ff"/><stop offset="1" stop-color="#832bc1"/></linearGradient><rect fill="url(#a)" height="91.5618" rx="20" width="91.5618"/><g fill="#fff"><path d="m51.2102 53.6523c-.0891-.8028-.3565-1.3826-.8912-1.9178-1.0026-1.0481-2.7627-1.7394-4.8348-1.7394-2.072 0-3.8321.669-4.8347 1.7394-.5125.5575-.8021 1.115-.8912 1.9178-.1783 1.561-.0669 2.899.1114 5.0621.1782 2.0515.5124 4.7944.9357 7.5596.3119 1.9847.557 3.0551.7798 3.8133.3788 1.2488 1.7379 2.3192 3.899 2.3192 2.1612 0 3.5426-1.0927 3.899-2.3192.2228-.7582.4679-1.8286.7798-3.8133.4234-2.7875.7576-5.5081.9358-7.5596.2005-2.1631.2896-3.5011.1114-5.0621z"/><path d="m50.9618 42.2787c0 3.0328-2.4508 5.4858-5.4809 5.4858s-5.4809-2.453-5.4809-5.4858c0-3.0327 2.4508-5.4857 5.4809-5.4857s5.4809 2.4753 5.4809 5.4857z"/><path d="m45.4172 20.67c-12.7888.0446-23.2604 10.4363-23.4386 23.2364-.1337 10.3694 6.4834 19.2448 15.7297 22.5005.2228.0892.4456-.1115.4233-.3345-.1114-.8028-.2451-1.6056-.3342-2.4083-.0446-.2899-.2228-.5129-.4679-.6467-7.3079-3.1889-12.41-10.5256-12.3209-19.0218.1114-11.1499 9.2017-20.226 20.3194-20.3152 11.3851-.0892 20.6759 9.143 20.6759 20.5159 0 8.407-5.0798 15.6322-12.3208 18.8211-.2674.1115-.4457.3568-.4679.6467-.1114.8027-.2228 1.6055-.3342 2.4083-.0446.2453.2005.4237.4233.3345 9.1571-3.2111 15.7297-11.9527 15.7297-22.2106-.0446-12.9785-10.6276-23.5486-23.6168-23.5263z"/><path d="m44.8793 28.4746c-8.3327.3122-15.0167 7.2029-15.1281 15.543-.0668 5.4858 2.6736 10.3471 6.8845 13.2238.2005.1338.4902-.0223.4902-.2676-.0669-.9589-.0669-1.8063-.0223-2.6983.0223-.2899-.0891-.5575-.3119-.7582-2.5622-2.4083-4.1218-5.8425-4.0327-9.6335.1782-6.6899 5.5477-12.1311 12.2317-12.3987 7.2633-.2899 13.2344 5.5527 13.2344 12.7332 0 3.6572-1.5596 6.9576-4.0327 9.299-.2005.2007-.3119.4683-.3119.7582.0445.8697.0223 1.7171-.0223 2.676-.0223.2453.2674.4237.4902.2676 4.144-2.8321 6.8845-7.6265 6.8845-13.0231.0223-8.8753-7.397-16.0782-16.3536-15.7214z"/></g></svg>
            </span>
           Apple
          </a> -->
              <a :href="item.appleUrl"
                class="inline-flex items-center border-[0.5px] border-gray-200 px-4 py-1.5 rounded-full bg-white text-black text-sm hover:opacity-90">
                <span class="mr-2">
                  <svg fill="none" class="w-6 h-6" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="45.7809" x2="45.7809" y1="0" y2="91.5618">
                      <stop offset="0" stop-color="#f452ff" />
                      <stop offset="1" stop-color="#832bc1" />
                    </linearGradient>
                    <rect fill="url(#a)" height="91.5618" rx="20" width="91.5618" />
                    <g fill="#fff">
                      <path
                        d="m51.2102 53.6523c-.0891-.8028-.3565-1.3826-.8912-1.9178-1.0026-1.0481-2.7627-1.7394-4.8348-1.7394-2.072 0-3.8321.669-4.8347 1.7394-.5125.5575-.8021 1.115-.8912 1.9178-.1783 1.561-.0669 2.899.1114 5.0621.1782 2.0515.5124 4.7944.9357 7.5596.3119 1.9847.557 3.0551.7798 3.8133.3788 1.2488 1.7379 2.3192 3.899 2.3192 2.1612 0 3.5426-1.0927 3.899-2.3192.2228-.7582.4679-1.8286.7798-3.8133.4234-2.7875.7576-5.5081.9358-7.5596.2005-2.1631.2896-3.5011.1114-5.0621z" />
                      <path
                        d="m50.9618 42.2787c0 3.0328-2.4508 5.4858-5.4809 5.4858s-5.4809-2.453-5.4809-5.4858c0-3.0327 2.4508-5.4857 5.4809-5.4857s5.4809 2.4753 5.4809 5.4857z" />
                      <path
                        d="m45.4172 20.67c-12.7888.0446-23.2604 10.4363-23.4386 23.2364-.1337 10.3694 6.4834 19.2448 15.7297 22.5005.2228.0892.4456-.1115.4233-.3345-.1114-.8028-.2451-1.6056-.3342-2.4083-.0446-.2899-.2228-.5129-.4679-.6467-7.3079-3.1889-12.41-10.5256-12.3209-19.0218.1114-11.1499 9.2017-20.226 20.3194-20.3152 11.3851-.0892 20.6759 9.143 20.6759 20.5159 0 8.407-5.0798 15.6322-12.3208 18.8211-.2674.1115-.4457.3568-.4679.6467-.1114.8027-.2228 1.6055-.3342 2.4083-.0446.2453.2005.4237.4233.3345 9.1571-3.2111 15.7297-11.9527 15.7297-22.2106-.0446-12.9785-10.6276-23.5486-23.6168-23.5263z" />
                      <path
                        d="m44.8793 28.4746c-8.3327.3122-15.0167 7.2029-15.1281 15.543-.0668 5.4858 2.6736 10.3471 6.8845 13.2238.2005.1338.4902-.0223.4902-.2676-.0669-.9589-.0669-1.8063-.0223-2.6983.0223-.2899-.0891-.5575-.3119-.7582-2.5622-2.4083-4.1218-5.8425-4.0327-9.6335.1782-6.6899 5.5477-12.1311 12.2317-12.3987 7.2633-.2899 13.2344 5.5527 13.2344 12.7332 0 3.6572-1.5596 6.9576-4.0327 9.299-.2005.2007-.3119.4683-.3119.7582.0445.8697.0223 1.7171-.0223 2.676-.0223.2453.2674.4237.4902.2676 4.144-2.8321 6.8845-7.6265 6.8845-13.0231.0223-8.8753-7.397-16.0782-16.3536-15.7214z" />
                    </g>
                  </svg>
                </span>
                Apple
              </a>
              <!-- <a
            href="#"
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FF0000] text-sm hover:opacity-90"
          >
            <span class="mr-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </span>
            YouTube
          </a> -->
              <!-- <a
            href="#"
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black font-bold text-sm hover:opacity-90"
          >
            DAILYWIRE+
          </a> -->
            </div>
          </div>
        </a>
      </div>
      <a class="group relative mt-10 inline-block focus:outline-none focus:ring"
        href="https://open.spotify.com/show/04S2XZGd6gczoCXStIrh8e">
        <span
          class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

        <!-- <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
    Load More Episodes
  </span> -->
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
const router = useRouter();
import episode2 from "@/assets/img/lab-coast/lab2.png";
import episode3 from "@/assets/img/lab-coast/lab3.png";
import episode4 from "@/assets/img/lab-coast/lab4.png";
import episode5 from "@/assets/img/lab-coast/lab5.png";
import episode6 from "@/assets/img/lab-coast/lab6.png";
import episode7 from "@/assets/img/lab-coast/lab7.png";
import episode8 from "@/assets/img/lab-coast/lab8.png";
import episode9 from "@/assets/img/lab-coast/lab9.png";
import episode10 from "@/assets/img/lab-coast/lab10.png";
import episode11 from "@/assets/img/lab-coast/lab11.jpg";
import episode12 from "@/assets/img/lab-coast/lab12.jpg";
import episode13 from "@/assets/img/lab-coast/lab13.jpg";
import episode14 from "@/assets/img/lab-coast/lab14.png";
import episode15 from "@/assets/img/lab-coast/lab15.png";
import episode16 from "@/assets/img/lab-coast/lab16.png";
import episode17 from "@/assets/img/lab-coast/lab17.png";
import episode18 from "@/assets/img/lab-coast/lab18.png";
import episode19 from "@/assets/img/lab-coast/lab19.png";
import episode20 from "@/assets/img/lab-coast/lab20.png";
import episode21 from "@/assets/img/lab-coast/lab21.png";
import episode22 from "@/assets/img/lab-coast/lab22.png";
import episode23 from "@/assets/img/lab-coast/lab23.png";
import episode24 from "@/assets/img/lab-coast/lab24.png";
import episode25 from "@/assets/img/lab-coast/lab25.png";
import episode26 from "@/assets/img/lab-coast/lab26.png";
import episode27 from "@/assets/img/lab-coast/lab27.png";
import episode28 from "@/assets/img/lab-coast/lab28.png";
import episode29 from "@/assets/img/lab-coast/lab29.png";
import episode30 from "@/assets/img/lab-coast/lab30.png";
import episode31 from "@/assets/img/lab-coast/lab31.png";

const podcastList = ref([
{
    name: "Misdiagnosis in the Medical Laboratory and Ethical Challenges.",
    description:
      `In this episode, Iheoma and Samuel explore misdiagnosis and the ethical challenges surrounding it in the medical laboratory profession. Joining them is Oluwagbogo Oluwaseyi Olabode who is a medical laboratory scientist with a sturdy bench experience who shares her experiences, pitfalls around the lab, and the way to go about certain ethical challenges. The discussion explores the challenges people face in the laboratory, friction between patients and health professionals due to misdiagnosis and proper communications channels involved. Tune in to learn more about misdiagnosis and how to handle it the right way!`,
    image: "",
    link: "https://open.spotify.com/episode/6pT2YoQ8ND48cts5oK84Mk",
    appleUrl: "https://open.spotify.com/episode/6pT2YoQ8ND48cts5oK84Mk"
  },
{
    name: "Navigating And Coping With Graduate School.",
    description:
      `Graduate school presents unique challenges, from balancing coursework and research to managing time effectively. In this episode of LabCast, hosts Better and Precious engage with two remarkable scholars; Gaius Bala, a master's student in molecular medicine at Nazarbayev University, Kazakhstan, and Samuel Gana, pursuing a master's in immunology at Usmanu Danfodiyo University, Nigeria. They share insights on building strong relationships with professors, overcoming imposter syndrome, and handling burnout. Whether you're considering graduate school or currently enrolled, this episode offers practical strategies and real experiences to help you thrive. Tune in for invaluable lessons on academic success and personal growth!`,
    image: "",
    link: "https://open.spotify.com/episode/6UCcjv7H5lHH5nP9ZJjpAj",
    appleUrl: "https://open.spotify.com/episode/6UCcjv7H5lHH5nP9ZJjpAj"
  },
{
    name: "MLS CERTIFICATIONS: A Step By Step Guide For ASCPI",
    description:
      `In this episode, your hosts Jesutomisin and Confidence engage Mr. Samuel Oyebade on the essential steps to prepare for and succeed in the ASCPi certification exam.
Our guest shared valuable insights on effective study strategies, key content areas to focus on, and practical tips to enhance your chances of success. We also discussed the career opportunities that the ASCPi certification can unlock for Medical Laboratory Scientists. Don't miss out on this episode! We hope to see you in the next one too. 💙
You can connect with Mr. Samuel on LinkedIn @ https://www.linkedin.com/in/samoyebade`,
    image: "",
    link: "https://open.spotify.com/episode/1SYhGLTx61I1kCcCLLMMKs",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-impact-of-artificial-intelligence-on/id1610877517?i=1000674465767"
  },
  {
    name: "Mental Health And Laboratory Diagnostics",
    description:
      `When you hear mental health, you think therapy and counseling alongside psychotherapist and psychologist. You never guessed medical laboratory scientists are on the forefront of diagnosing mental health.
In this episode of Labcast, our hosts engage with Mr Praise-Jah Ewa, a Mental Health Professional/Laboratory Scientist, to explore the connection between mental health and laboratory diagnostics. They discuss how lab tests assist in diagnosing mental health conditions, the types of tests involved, and the future of personalized mental health care. Tune in to discover the science behind the mind and how lab tests contribute to mental well-being..`,
    image: "",
    link: "https://open.spotify.com/episode/19SvzEMUQFK6sGXK8ETK5c",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-impact-of-artificial-intelligence-on/id1610877517?i=1000674465767"
  },
{
    name: "The Thrills and Terrors of Bench Work",
    description:
      " In this episode, we delve into the experiences and insights of medical laboratory scientists working abroad (United Kingdom)). Join us as we explore how practice and perspectives differ in this region.",
    image: "",
    link: "https://open.spotify.com/episode/2vt0Albx3ehcFTyrgl55xi?si=RdhtkOPvTlKTC0_Hx2p3kQ",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-impact-of-artificial-intelligence-on/id1610877517?i=1000674465767"
  },
{
    name: "Medical Laboratory Science Practice: From MLS in Diaspora viewpoint",
    description:
      "In this episode, we delve into the experiences and insights of medical laboratory scientists working abroad (United Kingdom)). Join us as we explore how practice and perspectives differ in this region.",
    image: "",
    link: "https://open.spotify.com/episode/0py3aUuw2hqN0StC6r1pbX?si=be21b341b2334e01",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-impact-of-artificial-intelligence-on/id1610877517?i=1000674465767"
  },
  {
    name: "The Doctor of MLS program: Lessons from Dr. Emmanuel Samani's journey",
    description:
      "In this episode of LabCast, your hosts Muyiwa and Samuel dive into the Doctorate of Medical Laboratory Science (DMLS) program, a pioneering degree that equips medical laboratory professionals with advanced skills for leadership in research, diagnostics, and healthcare. Joining them is Emmanuel Samani, a Medical Laboratory Scientist and award-winning journalist, who shares his journey through the DMLS program at the University for Development Studies, Ghana. The discussion explores the significance of the degree, its impact on the field, and how professionals can balance demanding careers while advancing their education. Tune in to learn why pursuing a DMLS could be your next big step!",
    image: "",
    link: "https://open.spotify.com/episode/4cPj3jOPAPyuEmyMRuK0Y6?si=0SwnMCbMQ1yXMBgAeZgKSw",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-doctor-of-mls-program-lessons-from-dr/id1610877517?i=1000672718005"
  },
  {
    name: "Must have sot skills for Medical Laboratory Scientist",
    description: `Medical Laboratory Scientists (MLS) must develop soft skills that go beyond technical expertise to effectively collaborate with other healthcare professionals. This episode focuses on key skills that enhance teaching, research, and interdisciplinary teamwork. Attention to detail is vital for ensuring the precision of research data, while effective communication is crucial when instructing students and sharing findings with healthcare colleagues. Problem-solving skills allow MLS professionals to address research challenges, and time management is essential for juggling teaching, research, and administrative duties.`,
    image: "",
    link: "https://open.spotify.com/episode/6C0jL2uNN68XrXK9Pfm6M7?si=VzdQo8_ZT3SeYivtW2EMcw",
     appleUrl: "https://podcasts.apple.com/us/podcast/must-have-soft-skills-for-medical-laboratory-scientists/id1610877517?i=1000652963851"
  },
  {
    name: "From B.MLS to Ph.D (No M.Sc)",
    description: `In this episode, we discuss with MLS Olaleye Olajuyin about how he successfully secured a fully-funded scholarship for a Ph.D. program in the US without having to do a Masters.`,
    image: "",
    link: "https://open.spotify.com/episode/3mWOLlmVz26oEFQJRPbDJ9?si=8AmYJdeCR8GGzCfpFxm4sg",
     appleUrl: "https://podcasts.apple.com/us/podcast/from-b-mls-straight-to-ph-d-no-m-sc/id1610877517?i=1000576423593"
  },
  {
    name: "Venturing into tech as a Medical Laboratory Scientist",
    description: 'In this episode, we discussed some vital information we as medical laboratory scientists or professionals should have when venturing into tech and how we can promote the profession using tech.',
    image: "",
    link: "https://open.spotify.com/episode/1ae2TQ8X9SiQvh07Qeguzj?si=Df9Jdo0rRWqrSGZWcA7b9w",
     appleUrl: "https://podcasts.apple.com/us/podcast/venturing-into-tech-as-a-medical-laboratory-scientist/id1610877517?i=1000622634861"
  },
  {
    name: "Is Medical Lab Lucrative",
    description: 'In this episode, Precious, Nmesoma and Favour converse with MLS Olusoji Billyrose on whether or not medical laboratory science is a lucrative profession into get into.',
    image: "",
    link: "https://open.spotify.com/episode/44K4mJirmfpmQoaBbnmJ60?si=kdVDhNo9RyeL5ftGRGkR6w",
     appleUrl: "https://podcasts.apple.com/us/podcast/is-med-lab-lucrative/id1610877517?i=1000580458463"
  },
]);
</script>

<style scoped>
/* Adjust the transition speed for smoother scrolling */
.flex {
  transition: transform 3s ease-in-out;
}
</style>
