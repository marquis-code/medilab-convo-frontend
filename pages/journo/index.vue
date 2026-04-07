<template>
  <main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-[#27628C] py-24 sm:py-40">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center pt-16 text-center">
        <div class="max-w-3xl">
          <h1 class="text-sm font-bold text-blue-200 mb-6 animate-fade-in tracking-normal">Research, Articles & Insights</h1>
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-8xl mb-8 animate-fade-in-up ">Journo</h2>
          <p class="text-xl leading-8 text-blue-50 font-medium animate-fade-in-up animation-delay-200 max-w-2xl mx-auto">
            Research publications, clinical perspectives, and curated articles at the intersection of laboratory science and global health.
          </p>
        </div>
      </div>
    </div>

    <!-- Tab Navigation -->
    <nav class="border-b border-gray-100 sticky top-0 z-40 bg-white/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-8 h-14 overflow-x-auto no-scrollbar">
          <button 
            @click="activeTab = 'articles'"
            :class="[
              'text-sm font-medium transition-colors whitespace-nowrap border-b-2 h-full px-1',
              activeTab === 'articles' ? 'border-[#27628C] text-[#27628C]' : 'border-transparent text-gray-500 hover:text-gray-900'
            ]"
          >
            Articles
          </button>
          <button 
            @click="activeTab = 'publications'"
            :class="[
              'text-sm font-medium transition-colors whitespace-nowrap border-b-2 h-full px-1',
              activeTab === 'publications' ? 'border-[#27628C] text-[#27628C]' : 'border-transparent text-gray-500 hover:text-gray-900'
            ]"
          >
            Research Publications
          </button>
        </div>
      </div>
    </nav>

    <!-- ==================== ARTICLES TAB (ConvoStack) ==================== -->
    <div v-if="activeTab === 'articles'">
      <!-- Category Tabs -->
      <nav class="border-b border-gray-50 bg-white">
        <div class="max-w-5xl mx-auto px-6">
          <div class="flex items-center gap-8 h-12 overflow-x-auto no-scrollbar">
            <button 
              @click="activeCategory = ''"
              :class="[
                'text-xs font-medium transition-colors whitespace-nowrap border-b-2 h-full px-1',
                activeCategory === '' ? 'border-[#27628C] text-[#27628C]' : 'border-transparent text-gray-400 hover:text-gray-900'
              ]"
            >
              All Stories
            </button>
            <button 
              v-for="cat in articleCategories" 
              :key="cat"
              @click="activeCategory = cat"
              :class="[
                'text-xs font-medium transition-colors whitespace-nowrap border-b-2 h-full px-1 capitalize',
                activeCategory === cat ? 'border-[#27628C] text-[#27628C]' : 'border-transparent text-gray-400 hover:text-gray-900'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </nav>

      <div class="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <!-- Loading -->
        <div v-if="articlesLoading" class="flex flex-col items-center justify-center py-40 gap-6">
          <div class="w-10 h-10 border-4 border-gray-100 border-t-[#27628C] rounded-full animate-spin"></div>
          <p class="text-xs font-bold text-gray-400">Loading articles...</p>
        </div>

        <div v-else-if="filteredArticles.length > 0" class="space-y-24">
          <!-- Featured Article -->
          <section v-if="!activeCategory && !articleSearch" class="group relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <NuxtLink :to="`/convostack/${featuredArticle.slug}`" class="relative aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm transition-shadow group-hover:shadow-xl">
              <img 
                v-if="featuredArticle.coverImage" 
                :src="featuredArticle.coverImage" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-[#27628C]/5 text-[#27628C]">
                 <svg class="w-20 h-20 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
              </div>
            </NuxtLink>
            
            <div class="space-y-6">
              <div class="flex items-center gap-3">
                <span class="text-[10px] font-bold text-[#27628C] bg-[#27628C]/5 px-3 py-1 rounded-full capitalize">{{ featuredArticle.category }}</span>
                <span class="text-[10px] font-medium text-gray-400">{{ featuredArticle.readTime || 5 }} min read</span>
              </div>
              <NuxtLink :to="`/convostack/${featuredArticle.slug}`">
                <h2 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tighter hover:text-[#27628C] transition-colors">
                  {{ featuredArticle.title }}
                </h2>
              </NuxtLink>
              <p class="text-lg text-gray-500 leading-relaxed line-clamp-3">
                {{ featuredArticle.excerpt }}
              </p>
              <div class="flex items-center gap-4 pt-4">
                 <div class="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-[#27628C]">
                   {{ (featuredArticle.authorName || 'M').charAt(0) }}
                 </div>
                 <div class="flex flex-col">
                   <span class="text-sm font-bold text-gray-900">{{ featuredArticle.authorName || 'MedLabConvo' }}</span>
                   <span class="text-xs text-gray-400">{{ formatDate(featuredArticle.publishedAt || featuredArticle.createdAt) }}</span>
                 </div>
              </div>
            </div>
          </section>

          <!-- Article Feed -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
            <section class="md:col-span-2 space-y-16">
              <div class="flex items-center justify-between border-b border-gray-100 pb-4">
                 <h3 class="text-xs font-bold text-gray-400">{{ activeCategory || 'Latest' }} articles</h3>
                 <div class="relative max-w-[200px]">
                   <input v-model="articleSearch" type="text" placeholder="Search..." class="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs outline-none focus:border-[#27628C] transition-all" />
                 </div>
              </div>

              <div class="divide-y divide-gray-100">
                <article 
                  v-for="pub in recentArticles" 
                  :key="pub._id"
                  class="py-10 first:pt-0 group"
                >
                  <div class="flex flex-col md:flex-row gap-8">
                    <div class="flex-1 space-y-4">
                      <div class="flex items-center gap-3">
                         <span class="text-[10px] font-bold text-[#27628C] capitalize">{{ pub.category }}</span>
                         <span class="text-[10px] font-medium text-gray-400">{{ formatDate(pub.publishedAt || pub.createdAt) }}</span>
                      </div>
                      <NuxtLink :to="`/convostack/${pub.slug}`">
                        <h4 class="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#27628C] transition-colors leading-snug">
                          {{ pub.title }}
                        </h4>
                      </NuxtLink>
                      <p class="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                        {{ pub.excerpt }}
                      </p>
                      <div class="flex items-center gap-4 pt-4 opacity-70">
                         <span class="text-[10px] font-bold text-gray-900">{{ pub.authorName || 'MedLabConvo Team' }}</span>
                         <span class="text-[10px] text-gray-400">{{ pub.readTime || 4 }} min read</span>
                      </div>
                    </div>
                    <NuxtLink :to="`/convostack/${pub.slug}`" class="w-full md:w-40 aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0 shadow-sm group-hover:shadow-md transition-all">
                      <img v-if="pub.coverImage" :src="pub.coverImage" class="w-full h-full object-cover transition-transform group-hover:scale-105" />
                      <div v-else class="w-full h-full flex items-center justify-center text-[#27628C]/20">
                         <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                      </div>
                    </NuxtLink>
                  </div>
                </article>
              </div>
            </section>

            <!-- Sidebar -->
            <aside class="space-y-12">
              <div class="bg-[#27628C]/5 p-8 rounded-3xl border border-[#27628C]/10 space-y-6">
                 <h4 class="text-lg font-bold text-gray-900 tracking-tight leading-tight">Subscribe to the <br /> MedLabConvo Substack</h4>
                 <p class="text-xs text-gray-500 leading-relaxed font-medium">Join 2,500+ professionals receiving curated diagnostic insights and research.</p>
                 <input 
                    type="email" 
                    placeholder="Type your email..." 
                    class="w-full px-5 py-3 bg-white border border-[#27628C]/20 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#27628C]/20 transition-all shadow-sm" 
                 />
                 <button class="w-full py-3.5 bg-[#27628C] text-white rounded-xl text-xs font-bold shadow-lg hover:bg-gray-900 transition-all active:scale-95">
                    Subscribe for free
                 </button>
              </div>

              <div class="space-y-8">
                 <h3 class="text-[10px] font-bold text-gray-400 border-b border-gray-100 pb-3">Recommendations</h3>
                 <div class="space-y-8">
                    <div v-for="(rec, recIdx) in filteredArticles.slice(0, 4)" :key="rec._id" class="flex items-start gap-4 group">
                       <span class="text-2xl font-bold text-gray-200 mt-1  group-hover:text-[#27628C]/20 transition-colors">0{{ recIdx + 1 }}</span>
                       <div class="space-y-1">
                          <NuxtLink :to="`/convostack/${rec.slug}`" class="text-sm font-bold text-gray-900 hover:text-[#27628C] transition-colors leading-tight block">
                             {{ rec.title }}
                          </NuxtLink>
                          <span class="text-[10px] font-bold text-[#27628C]/60 capitalize">{{ rec.authorName || 'MedLabConvo' }}</span>
                       </div>
                    </div>
                 </div>
              </div>
            </aside>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-40 animate-in fade-in zoom-in duration-700">
          <div class="w-20 h-20 bg-gray-50 rounded-full mx-auto mb-8 flex items-center justify-center border border-gray-100">
             <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 tracking-tight">No articles found</h3>
          <p class="text-gray-400 mt-2 text-sm">We couldn't find any articles matching your criteria.</p>
          <button @click="activeCategory = ''; articleSearch = ''" class="mt-8 text-[#27628C] text-xs font-bold hover:underline">View all stories</button>
        </div>
      </div>
    </div>

    <!-- ==================== PUBLICATIONS TAB (Journo) ==================== -->
    <div v-if="activeTab === 'publications'">
      <!-- Latest Publication: High Impact Feature -->
      <div class="relative pt-12 pb-32 px-6">
        <div class="max-w-7xl mx-auto">
          <!-- Loading State -->
          <div v-if="pubLoading" class="bg-gray-50 rounded-[3rem] h-[600px] animate-pulse flex items-center justify-center">
             <div class="w-12 h-12 border-4 border-gray-200 border-t-[#27628C] rounded-full animate-spin"></div>
          </div>

          <!-- Latest Content -->
          <div v-else-if="latestPublication" class="group relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 animate-fade-in-up">
            <div class="flex flex-col lg:flex-row min-h-[600px]">
              <!-- Visual Side -->
              <div class="lg:w-1/2 relative bg-gray-50 flex items-center justify-center p-12 overflow-hidden">
                 <img 
                  v-if="latestPublication.images && latestPublication.images.length"
                  :src="latestPublication.images[0]" 
                  :alt="latestPublication.title"
                  class="w-full h-full object-contain drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105"
                >
                <div v-else class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center text-6xl">📄</div>
                
                <div class="absolute top-12 left-12">
                  <span class="bg-gray-900 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    FEATURED PUBLICATION
                  </span>
                </div>
              </div>
              
              <!-- Information Side -->
              <div class="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-between">
                <div class="space-y-12">
                  <div class="flex items-center gap-6">
                    <div class="flex flex-col">
                      <span class="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Published</span>
                      <span class="text-sm font-bold text-gray-900">{{ formatDate(latestPublication.createdAt) }}</span>
                    </div>
                    <div class="h-8 w-px bg-gray-100"></div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Author</span>
                      <span class="text-sm font-bold text-gray-900">{{ latestPublication.authors }}</span>
                    </div>
                  </div>

                  <h3 class="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] uppercase tracking-tight group-hover:text-[#27628C] transition-colors duration-300">
                    {{ latestPublication.title }}
                  </h3>
                  
                  <p class="text-gray-500 text-lg font-light leading-relaxed line-clamp-4">
                    {{ latestPublication.abstract }}
                  </p>
                  
                  <div class="flex flex-wrap items-center gap-3">
                    <span class="bg-blue-50 text-[#27628C] px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
                      {{ latestPublication.journal }}
                    </span>
                    <span class="bg-gray-50 text-gray-400 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-gray-100">
                      {{ latestPublication.category }}
                    </span>
                  </div>
                </div>

                <div class="pt-16">
                  <NuxtLink 
                    :to="latestPublication.link || latestPublication.pubLink"
                    target="_blank"
                    class="inline-flex items-center justify-center bg-gray-900 text-white px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl hover:bg-gray-800 hover:shadow-2xl transition-all"
                  >
                    Read Full Paper
                    <svg class="w-4 h-4 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- No Data State -->
          <div v-else-if="!pubLoading" class="text-center py-32 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
             <p class="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">No publications found</p>
          </div>
        </div>
      </div>

      <!-- Archive Section -->
      <div class="py-32 px-6 bg-white">
        <div class="max-center max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 class="text-[10px] font-bold text-[#27628C] mb-4">The Archive</h2>
              <h3 class="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">All Publications</h3>
            </div>
            <p class="text-gray-400 text-sm font-medium">
              Showing {{ otherPublications.length }} publications
            </p>
          </div>

          <div v-if="pubLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
             <div v-for="n in 3" :key="n" class="space-y-8 animate-pulse">
                <div class="aspect-square bg-gray-50 rounded-[2.5rem]"></div>
                <div class="h-4 bg-gray-50 rounded w-1/4"></div>
                <div class="h-8 bg-gray-50 rounded"></div>
                <div class="h-20 bg-gray-50 rounded"></div>
             </div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            <article 
              v-for="(publication, index) in otherPublications" 
              :key="publication.id || (publication as any)._id"
              class="group space-y-8 animate-fade-in-up"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <NuxtLink :to="publication.link || publication.pubLink" target="_blank" class="block space-y-8 h-full">
                <!-- Grid Thumbnail -->
                <div class="relative aspect-square rounded-[2.5rem] bg-gray-50 border border-gray-100 overflow-hidden shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:border-transparent">
                   <img 
                    v-if="publication.images && publication.images.length"
                    :src="publication.images[0]" 
                    :alt="publication.title"
                    class="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                  >
                  <div v-else class="w-full h-full flex items-center justify-center text-4xl grayscale opacity-20">📄</div>
                  
                  <div class="absolute top-8 left-8">
                    <span class="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-xl text-[9px] font-bold shadow-sm">
                      {{ publication.category }}
                    </span>
                  </div>
                </div>
                
                <!-- Meta & Content -->
                <div class="space-y-4 px-4">
                  <div class="flex items-center gap-4 text-[10px] font-bold text-gray-300">
                    <span>{{ publication.year }}</span>
                    <div class="w-1 h-1 rounded-full bg-gray-200"></div>
                    <span class="truncate max-w-[150px]">{{ publication.journal }}</span>
                  </div>
                  
                  <h3 class="text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#27628C] transition-colors tracking-tight">
                    {{ publication.title }}
                  </h3>
                  
                  <p class="text-gray-500 text-sm leading-relaxed line-clamp-3 font-light">
                    {{ publication.abstract }}
                  </p>
                  
                  <div class="flex items-center gap-3 pt-6 border-t border-gray-50">
                     <div class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-[10px] font-bold">
                       {{ (publication.authors || 'A').charAt(0) }}
                     </div>
                     <div class="flex flex-col">
                       <span class="text-[9px] font-bold text-gray-900 tracking-normal">{{ publication.authors }}</span>
                       <span class="text-[8px] font-bold text-gray-300">{{ formatDate(publication.createdAt) }}</span>
                     </div>
                  </div>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </div>

      <!-- Substack Newsletter -->
      <div class="bg-gray-900 py-32 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
             <h2 class="text-sm font-bold text-blue-400 mb-8">Stay Updated</h2>
             <h3 class="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter mb-10">
               Delivered to your<br><span class="text-blue-500">digital doorstep.</span>
             </h3>
             <p class="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
               Research, insights, and critical perspectives delivered directly to your inbox. No noise, just science.
             </p>
          </div>
          <div class="relative overflow-hidden rounded-[3rem] bg-white p-2 shadow-2xl">
             <iframe 
                src="https://mlcjourno.substack.com/embed" 
                width="100%" 
                height="400"
                frameborder="0" 
                scrolling="no"
                class="w-full"
              ></iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGetPublications } from "@/composables/modules/publications/useGetPublications"
import { convostack_api } from '@/api_factory/modules/convostack'

// Active tab state
const activeTab = ref('articles')

// ==================== ARTICLES (ConvoStack) ====================
const articles = ref([] as any[])
const articlesLoading = ref(true)
const articleSearch = ref('')
const activeCategory = ref('')

onMounted(async () => {
  // Load ConvoStack articles
  articlesLoading.value = true
  try {
    const res = await convostack_api.$_get_publications()
    articles.value = res.data || []
  } catch (e) {
    console.error('Failed to load articles:', e)
  } finally {
    articlesLoading.value = false
  }
})

const articleCategories = computed(() => {
  const cats = [...new Set((articles.value || []).map((p: any) => p.category).filter(Boolean))]
  return cats
})

const filteredArticles = computed(() => {
  let list = articles.value || []
  if (activeCategory.value) {
    list = list.filter((p: any) => p.category === activeCategory.value)
  }
  if (articleSearch.value) {
    const q = articleSearch.value.toLowerCase()
    list = list.filter((p: any) =>
      p.title?.toLowerCase().includes(q) || p.excerpt?.toLowerCase().includes(q) || p.authorName?.toLowerCase().includes(q)
    )
  }
  return list
})

const featuredArticle = computed(() => filteredArticles.value[0] || {})
const recentArticles = computed(() => filteredArticles.value.slice(1))

// ==================== PUBLICATIONS (Journo) ====================
const { publications, loading: pubLoading } = useGetPublications()

const publishedPublications = computed(() => {
  if (!publications.value) return []
  return publications.value.filter(pub => pub.status === 'published')
})

const latestPublication = computed(() => {
  if (publishedPublications.value.length === 0) return null
  return [...publishedPublications.value].sort((a, b) => {
    const aDate = new Date(a.createdAt || 0).getTime()
    const bDate = new Date(b.createdAt || 0).getTime()
    return bDate - aDate
  })[0]
})

const otherPublications = computed(() => {
  if (!latestPublication.value) return publishedPublications.value
  const latestId = (latestPublication.value as any).id || (latestPublication.value as any)._id
  return publishedPublications.value.filter(pub => {
     const pubId = (pub as any).id || (pub as any)._id
     return pubId !== latestId
  })
})

// ==================== SHARED ====================
const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// SEO
useHead({
  title: 'Journo | Research, Articles & Insights | MedLabConvo',
  meta: [
    { name: 'description', content: 'Research publications, clinical perspectives, and curated articles at the intersection of laboratory science and global health.' },
    { property: 'og:title', content: 'Journo - Research, Articles & Insights' },
    { property: 'og:description', content: 'Explore premium articles, research publications, and insights in medical laboratory science.' },
    { property: 'og:image', content: '/images/medlabconvo-og-image.jpg' },
    { property: 'og:url', content: 'https://medlabconvo.com/journo' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Journo | MedLabConvo' },
    { name: 'twitter:description', content: 'Research publications and clinical perspectives at the intersection of laboratory science and global health.' }
  ]
})
</script>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
.animate-fade-in { animation: fade-in 1s ease-out forwards; }
.delay-200 { animation-delay: 200ms; }
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>