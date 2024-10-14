// composables/useYoutubeVideo.ts

import { ref } from 'vue';

export function useYoutubeVideo(videoId: string) {
  const videoUrl = ref(`https://www.youtube.com/embed/${videoId}`);

  return {
    videoUrl,
  };
}
