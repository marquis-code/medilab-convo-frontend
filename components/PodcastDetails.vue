<template>
  <div class="min-h-screen bg-black text-white p-4 md:p-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">Featured Episode</h2>

      <div class="relative w-full h-96">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/_BQmldEgsfE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <!-- </div> -->

      <!-- Platform Buttons -->
      <div class="my-8">
        <p class="text-gray-400 text-sm mb-2">Available On:</p>
        <div class="flex flex-wrap gap-2">
          <a
            href="#"
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
            href="#"
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black text-sm hover:opacity-90"
          >
            <span class="mr-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M11.977 0C5.361 0 0 5.361 0 11.977s5.361 11.977 11.977 11.977 11.977-5.361 11.977-11.977S18.593 0 11.977 0zm5.12 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02z"
                />
              </svg>
            </span>
            iTunes
          </a>
          <a
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
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black font-bold text-sm hover:opacity-90"
          >
            DAILYWIRE+
          </a>
        </div>
      </div>

      <!-- Episode Info -->
      <h1 class="text-2xl md:text-3xl font-bold mb-2">
        A Conversation with Piers Morgan | EP 295
      </h1>
      <p class="text-gray-400 mb-6">Aug 10, 2023</p>

      <!-- Description -->
      <p class="text-gray-200 mb-8 leading-relaxed">
        Dr Jordan B Peterson and Piers Morgan discuss the art of interviewing,
        the importance of living truthfully, the pitfalls of sycophancy, and
        they go into depth regarding the 2016 election, and the aftermath of
        Donald Trump.
      </p>

      <!-- Bio -->
      <div class="text-gray-200 mb-8 leading-relaxed">
        <p>
          Piers Morgan is a British journalist and television personality who
          started his career working as a freelance writer for the Sun. Later he
          would be chosen by Rupert Murdock as editor for his publication, News
          of the World. This appointment would make Morgan the youngest British
          news editor (29) in more than fifty years. He would go on to be the
          editor of publications such as the Daily Mirror and MailOnline before
          ramping into a career on television. He would introduce documentaries
          for the BBC, and had a channel 4 political interview show with Amanda
          Platell, all before his stint as a judge on America's Got Talent.
          Morgan would compete on and win the 2008 season of Celebrity
          Apprentice, and later famously interview the show's host, Donald
          Trump, after he had become the 45th US President. Morgan would work on
          numerous talk shows and documentary series before starting his current
          day production, Piers Morgan Uncensored. This show, on which
          controversial and celebrity guests debate Morgan, would be the first
          launched on talkTV, and welcome back President Trump for its premiere
          and second episodes.
        </p>
      </div>

      <!-- Links -->
      <div class="mb-8">
        <h3 class="text-gray-400 mb-4">—Links—</h3>
        <p class="text-gray-200">
          Dr Jordan B Peterson's interview on Piers Morgan Uncensored:
          <a href="#" class="text-gray-400 hover:text-white ml-2">
            FULL INTERVIEW: Dr Jordan Peterson si...
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
