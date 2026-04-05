<template>
  <main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-[#27628C] py-24 sm:py-40">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center pt-16 text-center">
        <div class="max-w-3xl">
          <h1 class="text-sm font-bold text-blue-200 mb-6 animate-fade-in tracking-normal">Merchandise & Knowledge</h1>
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-8xl mb-8 animate-fade-in-up ">Professional Shop</h2>
          <p class="text-xl leading-8 text-blue-50 font-medium animate-fade-in-up animation-delay-200 max-w-2xl mx-auto">
            Expertly curated resources, professional tools, and learning materials designed to support your journey in medical laboratory science.
          </p>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="container mx-auto py-24 px-6 lg:px-8">
      <div v-for="i in 3" :key="i" class="mb-24">
        <div class="h-8 w-48 bg-gray-100 rounded-full mb-12 animate-pulse mx-auto"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="j in 3" :key="j" class="space-y-4">
            <div class="aspect-[3/4] bg-gray-50 rounded-2xl animate-pulse"></div>
            <div class="h-4 bg-gray-50 rounded w-3/4 animate-pulse"></div>
            <div class="h-4 bg-gray-50 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dynamic Content -->
    <div v-else class="container mx-auto py-24 px-6 lg:px-8">
      <div v-if="Object.keys(groupedProducts).length === 0" class="text-center py-32">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-6">
          <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
        <p class="text-gray-500">We are currently updating our catalog. Please check back soon.</p>
      </div>

      <div v-else v-for="(products, category) in groupedProducts" :key="category" class="mb-32 last:mb-0">
        <!-- Category Header -->
        <div class="flex items-center justify-between mb-12 border-b border-gray-100 pb-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 tracking-tight ">{{ category }}</h2>
            <div class="h-1.5 w-12 bg-[#27628C] mt-2 rounded-full"></div>
          </div>
          <span class="text-[10px] font-bold text-gray-400 tracking-normal">{{ products.length }} items</span>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          <div v-for="product in products" :key="product.id" class="group relative flex flex-col">
            <!-- Product Image -->
            <div class="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 mb-8">
              <img 
                :src="product.imageUrl || 'https://placehold.co/600x800/27628C/ffffff?text=Professional+Resource'" 
                :alt="product.name"
                class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              >
              
              <!-- Badges -->
              <div class="absolute top-6 left-6 flex flex-col gap-2">
                <div v-if="product.isDigital" class="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-bold text-gray-900 shadow-sm border border-white/20">
                  Digital
                </div>
                <div v-if="product.availability === 'out_of_stock'" class="bg-red-500/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-bold text-white shadow-sm">
                  Sold Out
                </div>
              </div>

              <!-- Hover Action -->
              <div class="absolute inset-0 bg-[#27628C]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-8">
                <NuxtLink 
                  :to="`/enquiries?product=${encodeURIComponent(product.name)}`" 
                  class="w-full bg-white text-[#27628C] py-4 rounded-2xl text-xs font-bold text-center hover:bg-blue-50 transition-all transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                >
                  {{ product.isDigital ? 'Request Access' : 'Inquire Now' }}
                </NuxtLink>
              </div>
            </div>

            <!-- Product Info -->
            <div class="flex flex-col flex-1 px-2">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[10px] font-bold text-[#27628C] tracking-normal">{{ product.category }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 tracking-tight line-clamp-2 min-h-[3.5rem] group-hover:text-[#27628C] transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-sm text-gray-500 font-medium mb-6 line-clamp-2">
                by {{ product.author || product.instructor || 'MedLabConvo' }}
              </p>
              
              <div class="mt-auto flex items-center justify-between">
                <div class="flex flex-col">
                  <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through mb-1">
                    ₦{{ formatNumber(product.originalPrice) }}
                  </span>
                  <span class="text-xl font-black text-gray-900">
                    {{ product.price ? '₦' + formatNumber(product.price) : 'FREE' }}
                  </span>
                </div>
                
                <a 
                  v-if="!product.isDigital"
                  href="https://wa.link/bub9dk" 
                  target="_blank"
                  class="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-[#27628C] uppercase tracking-widest transition-colors"
                >
                  Order via WhatsApp
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Become a Vendor CTA -->
    <section class="bg-gray-50 py-24 border-t border-gray-100">
      <div class="container mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 ">Become a Vendor</h2>
        <p class="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Are you a creator in the medical laboratory science space? Partner with us to showcase your books, courses, and medical apparel to a global community.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="/enquiries?product=Vendor+Application" class="bg-[#27628C] text-white px-10 py-5 rounded-2xl text-xs font-bold hover:bg-[#1e4d6f] transition-all shadow-xl hover:shadow-2xl">
            Partner With Us
          </a>
          <a href="mailto:admin@medlabconvo.com" class="bg-white text-[#27628C] border border-blue-50 px-10 py-5 rounded-2xl text-xs font-bold hover:bg-gray-50 transition-all shadow-sm">
            Email Support
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useGetProducts } from "@/composables/modules/products/useGetProducts"
import { computed, onMounted } from 'vue'

const { getProducts, products, loading } = useGetProducts()

onMounted(async () => {
  await getProducts()
})

const groupedProducts = computed(() => {
  if (!products.value) return {}
  
  // Only show active products on the frontend
  const activeProducts = products.value.filter(p => p.status === 'active')
  
  return activeProducts.reduce((groups: any, product: any) => {
    const category = product.category || 'Other Resources'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(product)
    return groups
  }, {})
})

const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num)
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>