<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-[100]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-[2.5rem] bg-white p-8 text-left align-middle shadow-2xl transition-all border border-slate-100">
              <div class="flex justify-between items-center mb-8">
                <DialogTitle as="h3" class="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  Share Story
                </DialogTitle>
                <button @click="$emit('close')" class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              <div class="grid grid-cols-2 gap-4 mb-8">
                <!-- WhatsApp -->
                <a :href="shareLinks.whatsapp" target="_blank" class="flex flex-col items-center justify-center p-6 bg-[#25D366]/5 rounded-3xl border border-[#25D366]/10 hover:bg-[#25D366]/10 transition-all group">
                  <div class="w-12 h-12 bg-[#25D366] text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-[#25D366]/20 group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <span class="text-sm font-bold text-slate-600 uppercase tracking-widest">WhatsApp</span>
                </a>

                <!-- X / Twitter -->
                <a :href="shareLinks.twitter" target="_blank" class="flex flex-col items-center justify-center p-6 bg-slate-900/5 rounded-3xl border border-slate-900/10 hover:bg-slate-900/10 transition-all group">
                  <div class="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-slate-900/20 group-hover:scale-110 transition-transform">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                  <span class="text-sm font-bold text-slate-600 uppercase tracking-widest">Twitter / X</span>
                </a>

                <!-- Facebook -->
                <a :href="shareLinks.facebook" target="_blank" class="flex flex-col items-center justify-center p-6 bg-[#1877F2]/5 rounded-3xl border border-[#1877F2]/10 hover:bg-[#1877F2]/10 transition-all group">
                  <div class="w-12 h-12 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-[#1877F2]/20 group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <span class="text-sm font-bold text-slate-600 uppercase tracking-widest">Facebook</span>
                </a>

                <!-- Native Share -->
                <button @click="triggerNativeShare" class="flex flex-col items-center justify-center p-6 bg-indigo-600/5 rounded-3xl border border-indigo-600/10 hover:bg-indigo-600/10 transition-all group">
                  <div class="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                  </div>
                  <span class="text-sm font-bold text-slate-600 uppercase tracking-widest">More</span>
                </button>
              </div>

              <!-- Copy Link Section -->
              <div class="relative bg-slate-50 rounded-2xl p-4 flex items-center group">
                <input 
                  type="text" 
                  :value="url" 
                  readonly 
                  class="bg-transparent border-none focus:ring-0 text-slate-500 text-sm flex-1 font-medium truncate pr-12"
                />
                <button 
                  @click="copyToClipboard" 
                  class="absolute right-2 p-2 bg-white text-slate-900 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
                  :title="copied ? 'Copied!' : 'Copy link'"
                >
                  <svg v-if="!copied" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                  <svg v-else class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { useCustomToast } from '@/composables/core/useCustomToast'

const props = defineProps<{
  isOpen: boolean
  url: string
  title: string
  text?: string
}>()

const emit = defineEmits(['close'])
const { showToast } = useCustomToast()
const copied = ref(false)

const shareLinks = computed(() => {
  const encodedUrl = encodeURIComponent(props.url)
  const encodedTitle = encodeURIComponent(props.title)
  const encodedText = encodeURIComponent(props.text || '')
  
  return {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  }
})

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.url)
    copied.value = true
    showToast({
      title: 'Link Copied',
      message: 'The link has been copied to your clipboard.',
      toastType: 'success'
    })
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    showToast({
      title: 'Error',
      message: 'Failed to copy link.',
      toastType: 'error'
    })
  }
}

const triggerNativeShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: props.title,
        text: props.text,
        url: props.url,
      })
      emit('close')
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('Share failed:', err)
      }
    }
  } else {
    showToast({
      title: 'Not Supported',
      message: 'Your browser doesn\'t support native sharing.',
      toastType: 'info'
    })
  }
}
</script>
