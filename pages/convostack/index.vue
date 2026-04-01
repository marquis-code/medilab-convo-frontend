<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">

    <!-- Hero Section -->
    <section class="relative py-20 px-4 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900"></div>
      <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtNGgtNGgtMnYyaC00djJoNHY0aC0ydjRoMnY0aDR2LTJoNHYtMmgtNHYtNGgydi00eiIvPjwvZz48L2c+PC9zdmc+')"></div>
      <div class="relative max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span class="text-sm font-semibold text-white/80 tracking-wide">CONVO STACK</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Insights, Research &<br />
          <span class="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Knowledge for the Community</span>
        </h1>
        <p class="text-lg text-indigo-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore curated publications from MedLabConvo — deep dives into biomedical science, diagnostics, and laboratory innovation.
        </p>

        <!-- Search -->
        <div class="max-w-xl mx-auto relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search publications..."
            class="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
          />
          <div class="absolute right-4 top-1/2 -translate-y-1/2">
            <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
      <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-wrap items-center gap-3">
        <button
          @click="activeCategory = ''"
          :class="[
            'px-4 py-2 rounded-xl text-sm font-semibold transition-all',
            activeCategory === '' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:bg-slate-100'
          ]"
        >All</button>
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 rounded-xl text-sm font-semibold transition-all capitalize',
            activeCategory === cat ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:bg-slate-100'
          ]"
        >{{ cat }}</button>
      </div>
    </section>

    <!-- Publications List (Table View) -->
    <section class="max-w-6xl mx-auto px-4 py-16">
      <!-- Loading -->
      <div v-if="loading" class="flex items-center justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200 border-t-indigo-600"></div>
      </div>

      <!-- Table Header (Desktop) -->
      <div v-else-if="filteredPublications.length > 0" class="overflow-hidden bg-white/50 backdrop-blur-sm rounded-[2rem] border border-slate-100 shadow-sm">
        <div class="hidden md:grid grid-cols-[100px_1fr_150px_120px_100px] gap-6 px-10 py-6 border-b border-slate-100 bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <div>Preview</div>
          <div>Article & Description</div>
          <div>Authors</div>
          <div>Published</div>
          <div class="text-right">Action</div>
        </div>

        <!-- Table Rows -->
        <div class="divide-y divide-slate-100">
          <div
            v-for="pub in filteredPublications"
            :key="pub._id"
            class="group relative hover:bg-white transition-all duration-500"
          >
            <div class="grid grid-cols-1 md:grid-cols-[100px_1fr_150px_120px_100px] gap-6 px-4 md:px-10 py-8 items-center">
              
              <!-- Thumbnail (Full Height/Contain) -->
              <div class="w-full md:w-20 aspect-square rounded-2xl bg-slate-900 overflow-hidden ring-1 ring-slate-100 shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img
                  v-if="pub.coverImage"
                  :src="pub.coverImage"
                  :alt="pub.title"
                  class="w-full h-full object-contain"
                />
                <div v-else class="text-indigo-200"><Icon name="heroicons:document-text" class="w-8 h-8" /></div>
              </div>

              <!-- Content -->
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <span v-if="pub.category" class="text-[9px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-full">{{ pub.category }}</span>
                  <span class="text-[9px] font-bold text-slate-300 tracking-wider">{{ pub.readTime || 5 }} min read</span>
                </div>
                <h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{{ pub.title }}</h3>
                <p class="text-sm text-slate-500 line-clamp-2 leading-relaxed max-w-2xl">{{ pub.excerpt }}</p>
              </div>

              <!-- Authors -->
              <div class="flex flex-col">
                <div class="flex -space-x-2 mb-2">
                  <template v-if="pub.authors?.length">
                    <div 
                      v-for="(author, idx) in pub.authors.slice(0, 2)" 
                      :key="idx"
                      class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
                      :title="author"
                    >
                      {{ author.charAt(0) }}
                    </div>
                  </template>
                  <div v-else class="w-8 h-8 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] text-indigo-600 font-bold">
                    {{ (pub.authorName || 'M').charAt(0) }}
                  </div>
                </div>
                <p class="text-xs font-bold text-slate-700 truncate max-w-[140px]">
                  {{ pub.authors?.join(', ') || pub.authorName || 'MedLabConvo' }}
                </p>
              </div>

              <!-- Date -->
              <div class="text-xs font-medium text-slate-400">
                {{ formatDate(pub.publishedAt || pub.createdAt) }}
              </div>

              <!-- Action -->
              <div class="text-right">
                <NuxtLink 
                  :to="`/convostack/${pub.slug}`"
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-45"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty -->
      <div v-else class="text-center py-32 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
        <div class="w-24 h-24 bg-indigo-50 rounded-3xl mx-auto mb-8 flex items-center justify-center">
          <Icon name="heroicons:document-magnifying-glass" class="w-12 h-12 text-indigo-300" />
        </div>
        <h3 class="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">No publications found</h3>
        <p class="text-slate-500">We couldn't find any articles matching your criteria.</p>
        <button v-if="activeCategory || searchQuery" @click="activeCategory = ''; searchQuery = ''" class="mt-8 text-indigo-600 font-bold hover:underline">Clear all filters</button>
      </div>
    </section>


    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { convostack_api } from '@/api_factory/modules/convostack'

const publications = ref([] as any[])
const loading = ref(false)
const searchQuery = ref('')
const activeCategory = ref('')

onMounted(async () => {
  loading.value = true
  try {
    const res = await convostack_api.$_get_publications()
    publications.value = res.data || []
  } catch (e) {
    console.error('Failed to load publications:', e)
  } finally {
    loading.value = false
  }
})

const categories = computed(() => {
  const cats = [...new Set((publications.value || []).map((p: any) => p.category).filter(Boolean))]
  return cats
})

const filteredPublications = computed(() => {
  let list = publications.value || []
  if (activeCategory.value) {
    list = list.filter((p: any) => p.category === activeCategory.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter((p: any) =>
      p.title?.toLowerCase().includes(q) || p.excerpt?.toLowerCase().includes(q) || p.authorName?.toLowerCase().includes(q)
    )
  }
  return list
})

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
</script>

<style scoped>
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>
