<template>
  <div class="min-h-screen bg-white">

    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center py-40">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200 border-t-indigo-600"></div>
    </div>

    <!-- Article -->
    <article v-else-if="publication" class="pb-20">
      <!-- Cover Image -->
      <div v-if="publication.coverImage" class="relative w-full overflow-hidden bg-slate-900 flex justify-center items-center">
        <!-- Blurred background for aspect ratio gaps -->
        <div class="absolute inset-0 z-0">
          <img :src="publication.coverImage" class="w-full h-full object-cover blur-2xl opacity-30 scale-110" />
        </div>
        <img 
          :src="publication.coverImage" 
          :alt="publication.title" 
          class="relative z-10 w-full h-auto max-h-[70vh] object-contain shadow-2xl" 
        />
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
        <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-30">
          <div class="max-w-3xl mx-auto">
            <span v-if="publication.category" class="px-3 py-1 bg-indigo-500/90 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block">{{ publication.category }}</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">{{ publication.title }}</h1>
            <p class="text-lg text-white/80 leading-relaxed max-w-2xl">{{ publication.excerpt }}</p>
          </div>
        </div>
      </div>


      <!-- No Cover fallback header -->
      <div v-else class="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 py-20 px-4">
        <div class="max-w-3xl mx-auto text-center">
          <span v-if="publication.category" class="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-bold rounded-full uppercase tracking-wider mb-4 inline-block border border-white/20">{{ publication.category }}</span>
          <h1 class="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">{{ publication.title }}</h1>
          <p class="text-lg text-indigo-200 leading-relaxed">{{ publication.excerpt }}</p>
        </div>
      </div>

      <!-- Author & Meta Bar -->
      <div class="max-w-3xl mx-auto px-4 py-6 border-b border-slate-100">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex -space-x-3 overflow-hidden">
              <template v-if="publication.authors?.length">
                <div 
                  v-for="(author, idx) in publication.authors.slice(0, 3)" 
                  :key="idx"
                  class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-lg ring-2 ring-indigo-50"
                  :title="author"
                >
                  {{ author.charAt(0) }}
                </div>
              </template>
              <div v-else class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-200">
                {{ publication.authorName?.charAt(0) || 'M' }}
              </div>
            </div>
            <div>
              <p class="font-bold text-slate-900 leading-tight">
                {{ publication.authors?.join(', ') || publication.authorName || 'MedLabConvo Team' }}
              </p>
              <p class="text-xs text-slate-400 mt-0.5 font-medium">{{ formatDate(publication.publishedAt || publication.createdAt) }} · {{ publication.readTime || 5 }} min read</p>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <!-- Share Button -->
            <button @click="sharePublication" class="p-2.5 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all" title="Share">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>
            <!-- Like Button -->
            <button @click="handleLike" :class="['p-2.5 rounded-xl transition-all flex items-center space-x-1.5', isLiked ? 'text-red-500 bg-red-50' : 'text-slate-400 hover:text-red-500 hover:bg-red-50']">
              <svg class="w-5 h-5" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              <span class="text-sm font-semibold">{{ localLikeCount }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Tags -->
      <div v-if="publication.tags?.length" class="max-w-3xl mx-auto px-4 pt-4">
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in publication.tags" :key="tag" class="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full">{{ tag }}</span>
        </div>
      </div>

      <!-- Content Blocks Renderer -->
      <div class="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <div v-for="(block, index) in publication.contentBlocks" :key="index">

          <!-- Text Block -->
          <div v-if="block.type === 'text'" class="prose prose-lg prose-slate max-w-none leading-relaxed" v-html="block.content"></div>

          <!-- Image Block -->
          <figure v-if="block.type === 'image'" class="my-8">
            <img :src="block.content" :alt="block.caption || 'Publication image'" class="w-full rounded-2xl shadow-lg" />
            <figcaption v-if="block.caption" class="mt-3 text-center text-sm text-slate-500 italic">{{ block.caption }}</figcaption>
          </figure>

          <!-- Video Block -->
          <div v-if="block.type === 'video'" class="my-8">
            <div v-if="isEmbeddableVideo(block.content)" class="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe :src="getEmbedUrl(block.content)" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
            </div>
            <div v-else class="rounded-2xl overflow-hidden shadow-lg">
              <video :src="block.content" controls class="w-full"></video>
            </div>
            <p v-if="block.caption" class="mt-3 text-center text-sm text-slate-500 italic">{{ block.caption }}</p>
          </div>

          <!-- Audio Block -->
          <div v-if="block.type === 'audio'" class="my-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <div class="flex items-center space-x-3 mb-3">
              <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
              </div>
              <div>
                <p class="font-semibold text-slate-800 text-sm">Audio Content</p>
                <p v-if="block.caption" class="text-xs text-slate-500">{{ block.caption }}</p>
              </div>
            </div>
            <audio :src="block.content" controls class="w-full"></audio>
          </div>

          <!-- Quote Block -->
          <blockquote v-if="block.type === 'quote'" class="my-8 border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50/50 rounded-r-2xl">
            <p class="text-xl italic text-slate-700 leading-relaxed">{{ block.content }}</p>
            <cite v-if="block.caption" class="block mt-3 text-sm font-semibold text-indigo-600 not-italic">— {{ block.caption }}</cite>
          </blockquote>

          <!-- Divider Block -->
          <div v-if="block.type === 'divider'" class="my-10 flex items-center justify-center">
            <div class="w-16 h-1 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Engagement Bar -->
      <div class="max-w-3xl mx-auto px-4 py-6 border-t border-b border-slate-100">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-6">
            <button @click="handleLike" :class="['flex items-center space-x-2 px-4 py-2 rounded-xl transition-all font-semibold text-sm', isLiked ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-red-600']">
              <svg class="w-5 h-5" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              <span>{{ isLiked ? 'Liked' : 'Like' }} ({{ localLikeCount }})</span>
            </button>
            <div class="flex items-center space-x-2 text-sm text-slate-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>{{ publication.viewCount }} views</span>
            </div>
          </div>
          <button @click="sharePublication" class="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all font-semibold text-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            <span>Share</span>
          </button>
        </div>
      </div>

      <!-- Comments Section -->
      <section class="max-w-3xl mx-auto px-4 py-10">
        <h2 class="text-2xl font-extrabold text-slate-900 mb-8">
          Comments
          <span class="text-base font-normal text-slate-400 ml-2">({{ comments.length }})</span>
        </h2>

        <!-- Comment Form -->
        <div id="comment-form" class="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-slate-800">{{ replyTo ? `Reply to ${replyTo.userName}` : 'Leave a comment' }}</h3>
            <button v-if="replyTo" @click="cancelReply" class="text-xs text-red-500 hover:text-red-600 font-semibold flex items-center">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              Cancel Reply
            </button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input v-model="commentForm.userName" type="text" placeholder="Your name *" class="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm" />
            <input v-model="commentForm.userEmail" type="email" placeholder="Your email (optional)" class="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm" />
          </div>
          <textarea
            v-model="commentForm.content"
            rows="4"
            :placeholder="replyTo ? `Write your reply...` : 'Share your thoughts...'"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none mb-4"
          ></textarea>
          <div class="flex justify-end">
            <button
              @click="submitComment"
              :disabled="!commentForm.userName || !commentForm.content || submittingComment"
              :class="[
                'px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200',
                commentForm.userName && commentForm.content
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              ]"
            >
              {{ submittingComment ? 'Posting...' : (replyTo ? 'Post Reply' : 'Post Comment') }}
            </button>
          </div>
        </div>

  <!-- Comments List -->
  <div v-if="comments.length > 0" class="space-y-10">
    <!-- Parent Comments -->
    <div v-for="comment in threadedComments" :key="comment._id" class="group/parent">
      <div class="flex space-x-4">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-sm">
          {{ comment.userName?.charAt(0)?.toUpperCase() || '?' }}
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between mb-1.5">
            <div class="flex items-center space-x-2">
              <p class="font-bold text-slate-900 text-[15px]">{{ comment.userName }}</p>
              <div class="w-1 h-1 rounded-full bg-slate-300"></div>
              <span class="text-xs text-slate-400 font-medium">{{ timeAgo(comment.createdAt) }}</span>
            </div>
            <button 
              @click="handleReply(comment)" 
              class="text-[10px] font-black text-indigo-600 hover:text-indigo-800 uppercase tracking-widest opacity-0 group-hover/parent:opacity-100 transition-opacity"
            >
              Reply
            </button>
          </div>
          <div class="bg-slate-50/50 rounded-2xl rounded-tl-none p-4 border border-slate-100">
            <p class="text-slate-700 text-[15px] leading-relaxed">{{ comment.content }}</p>
          </div>
        </div>
      </div>

      <!-- Replies (Indented Threads) -->
      <div v-if="comment.replies?.length" class="ml-12 mt-4 space-y-4 border-l-2 border-slate-100 pl-6">
        <div v-for="reply in comment.replies" :key="reply._id" class="group/reply">
          <div class="flex space-x-3">
            <div class="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs flex-shrink-0">
              {{ reply.userName?.charAt(0)?.toUpperCase() || '?' }}
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center space-x-2">
                  <p class="font-bold text-slate-800 text-sm">{{ reply.userName }}</p>
                  <span class="text-[10px] text-slate-400 uppercase font-black tracking-tighter">{{ timeAgo(reply.createdAt) }}</span>
                </div>
                <button 
                  @click="handleReply(comment)" 
                  class="text-[10px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest opacity-0 group-hover/reply:opacity-100 transition-opacity"
                  title="Reply to thread"
                >
                  Reply
                </button>
              </div>
              <div class="bg-white border border-slate-100 rounded-xl rounded-tl-none p-3 shadow-sm">
                <p class="text-slate-600 text-sm leading-relaxed">{{ reply.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


        <div v-else class="text-center py-12">
          <svg class="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          <p class="text-slate-400 font-medium">No comments yet. Be the first to share your thoughts!</p>
        </div>
      </section>
    </article>

    <!-- Not Found -->
    <div v-else class="flex flex-col items-center justify-center py-40 px-4">
      <h2 class="text-2xl font-bold text-slate-900 mb-4">Publication Not Found</h2>
      <p class="text-slate-500 mb-6">The article you're looking for doesn't exist or has been removed.</p>
      <NuxtLink to="/convostack" class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">Browse Publications</NuxtLink>
    </div>

    <ShareModal 
      :is-open="isShareModalOpen" 
      :url="shareUrl" 
      :title="publication?.title" 
      :text="publication?.excerpt"
      @close="isShareModalOpen = false" 
    />

    <FooterComponent />
  </div>

</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { convostack_api } from '@/api_factory/modules/convostack'
import { useCustomToast } from '@/composables/core/useCustomToast'
import ShareModal from '@/components/ShareModal.vue'

const { showToast } = useCustomToast()


const route = useRoute()
const slug = route.params.slug as string

const publication = ref<any>(null)
const comments = ref([] as any[])
const loading = ref(false)
const isLiked = ref(false)
const localLikeCount = ref(0)
const submittingComment = ref(false)
const replyTo = ref<any>(null)

const isShareModalOpen = ref(false)
const shareUrl = ref('')


const commentForm = reactive({
  userName: '',
  userEmail: '',
  content: ''
})

/**
 * Organize comments into threads
 * Top-level comments first, then their replies
 */
const threadedComments = computed(() => {
  const rootComments = comments.value.filter((c: any) => !c.parentId)
  return rootComments.map((parent: any) => ({
    ...parent,
    replies: comments.value
      .filter((c: any) => c.parentId === parent._id)
      .sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  })).sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
})

onMounted(async () => {
  loading.value = true
  try {
    const res = await convostack_api.$_get_publication_by_slug(slug)
    publication.value = res.data
    localLikeCount.value = publication.value?.likesCount || 0

    // Load comments
    if (publication.value?._id) {
      const commentsRes = await convostack_api.$_get_comments(publication.value._id)
      comments.value = commentsRes.data || []
    }
  } catch (e) {
    console.error('Failed to load publication:', e)
    publication.value = null
  } finally {
    loading.value = false
  }
})

const handleLike = async () => {
  if (!publication.value?._id) return
  try {
    const res = await convostack_api.$_toggle_like(publication.value._id)
    isLiked.value = res.data?.liked ?? !isLiked.value
    localLikeCount.value = res.data?.likesCount ?? localLikeCount.value
  } catch (e) {
    console.error('Like failed:', e)
  }
}

const submitComment = async () => {
  if (!publication.value?._id || !commentForm.userName || !commentForm.content) return
  submittingComment.value = true
  try {
    const res = await convostack_api.$_add_comment(publication.value._id, {
      userName: commentForm.userName,
      userEmail: commentForm.userEmail,
      content: commentForm.content,
      parentId: replyTo.value?._id || undefined
    })
    
    // Add new comment to local list
    comments.value.unshift(res.data)
    
    // Clear form
    commentForm.userName = ''
    commentForm.userEmail = ''
    commentForm.content = ''
    replyTo.value = null
    
    showToast({
      title: 'Success',
      message: replyTo.value ? 'Reply posted successfully!' : 'Comment posted successfully!',
      toastType: 'success'
    })
  } catch (e) {
    console.error('Comment failed:', e)
    showToast({
      title: 'Error',
      message: 'Failed to post comment. Please try again.',
      toastType: 'error'
    })
  } finally {
    submittingComment.value = false
  }
}

const handleReply = (comment: any) => {
  replyTo.value = comment
  // Scroll to form
  const form = document.querySelector('#comment-form')
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const cancelReply = () => {
  replyTo.value = null
}

const sharePublication = async () => {
  shareUrl.value = window.location.href
  isShareModalOpen.value = true
  
  // Also try native share if available as a first priority (optional, but modern)
  if (navigator.share) {
    try {
      await navigator.share({ 
        title: publication.value?.title || 'ConvoStack Publication',
        text: publication.value?.excerpt || '',
        url: shareUrl.value 
      })
      isShareModalOpen.value = false // If native share was successful and user interacted, we can skip the modal
    } catch (err) {
      // If user cancels native share, just keep the modal open or ignore
    }
  }
}




const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

const timeAgo = (date: string) => {
  if (!date) return ''
  const now = new Date()
  const then = new Date(date)
  const diff = Math.floor((now.getTime() - then.getTime()) / 1000)
  if (diff < 60) return 'just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`
  return formatDate(date)
}

// Video helpers
const isEmbeddableVideo = (url: string) => {
  return url?.includes('youtube.com') || url?.includes('youtu.be') || url?.includes('vimeo.com')
}

const getEmbedUrl = (url: string) => {
  if (url.includes('youtube.com/watch?v=')) {
    const id = url.split('v=')[1]?.split('&')[0]
    return `https://www.youtube.com/embed/${id}`
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0]
    return `https://www.youtube.com/embed/${id}`
  }
  if (url.includes('vimeo.com/')) {
    const id = url.split('vimeo.com/')[1]?.split('?')[0]
    return `https://player.vimeo.com/video/${id}`
  }
  return url
}
</script>
