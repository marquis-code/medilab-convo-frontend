<template>
  <footer class="bg-black border-t border-white/5 pt-16 sm:pt-24 lg:pt-32" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <!-- Main Grid: Flattened to 4 Columns on Desktop -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        <!-- Column 1: Brand Identity & Social -->
        <div class="space-y-10 lg:col-span-1">
          <NuxtLink to="/" class="inline-block transition-all hover:opacity-80">
            <img class="h-10 w-auto rounded-lg shadow-2xl" src="@/assets/img/medlab-logo.jpeg" alt="MedLabConvo Logo" />
          </NuxtLink>
          
          <div class="space-y-6">
            <p class="text-sm leading-relaxed text-gray-400 max-w-xs font-medium">
              <span class="text-white font-bold block mb-2 text-base">Saving Lives, Saving Time.</span>
              MedLabConvo is your premier community and platform connecting medical laboratory professionals globally.
            </p>
            
            <!-- Social Protocol -->
            <div class="flex items-center gap-4">
              <a 
                v-for="item in social" 
                :key="item.name" 
                :href="item.href" 
                class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white hover:bg-[#27628C] hover:border-[#27628C] transition-all duration-500"
              >
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <!-- Column 2: Platform Links -->
        <div class="space-y-8">
          <h3 class="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Platform</h3>
          <ul role="list" class="space-y-4">
            <li v-for="item in platform" :key="item.name">
              <NuxtLink :to="item.href" class="text-sm text-gray-400 hover:text-white transition-all flex items-center group">
                <span class="w-0 group-hover:w-2 h-0.5 bg-[#27628C] mr-0 group-hover:mr-2 transition-all"></span>
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Company & Legal -->
        <div class="space-y-12">
          <div class="space-y-8">
            <h3 class="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Company</h3>
            <ul role="list" class="space-y-4">
              <li v-for="item in company" :key="item.name">
                <NuxtLink :to="item.href" class="text-sm text-gray-400 hover:text-white transition-all flex items-center group">
                  <span class="w-0 group-hover:w-2 h-0.5 bg-[#27628C] mr-0 group-hover:mr-2 transition-all"></span>
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="space-y-8">
            <h3 class="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Insights & Policy</h3>
            <ul role="list" class="space-y-4">
              <li v-for="item in legal" :key="item.name">
                <NuxtLink :to="item.href" class="text-sm text-gray-400 hover:text-white transition-all flex items-center group">
                  <span class="w-0 group-hover:w-2 h-0.5 bg-[#27628C] mr-0 group-hover:mr-2 transition-all"></span>
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Column 4: Premium Subscription Card -->
        <div class="lg:col-span-1">
          <div class="relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 shadow-2xl backdrop-blur-sm overflow-hidden group">
            <!-- Subtle Decor -->
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-[#27628C]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div class="relative z-10 space-y-6">
              <h3 class="text-xl font-bold text-white tracking-tight ">Stay Insightful</h3>
              <p class="text-xs font-medium text-gray-400 leading-relaxed">
                Join the Substack to get professional medical journalism and ecosystem pulses delivered to you.
              </p>
              
              <form @submit.prevent="handleSubscribe" class="space-y-4">
                <div class="relative">
                  <input 
                    v-model="email" 
                    type="email" 
                    required 
                    :disabled="loading"
                    class="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-sm text-white placeholder:text-gray-600 focus:ring-2 focus:ring-[#27628C] focus:border-transparent transition-all outline-none" 
                    placeholder="mail@institute.com" 
                  />
                </div>
                <button 
                  type="submit" 
                  :disabled="loading || !email"
                  class="w-full py-4 bg-[#27628C] text-white rounded-2xl text-[11px] font-bold tracking-normal hover:bg-white hover:text-black transition-all shadow-xl active:scale-[0.98] disabled:opacity-30 flex items-center justify-center gap-2"
                >
                  <span v-if="loading" class="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  {{ loading ? 'Transmitting...' : 'Join the Substack' }}
                </button>
              </form>
              
              <p class="text-[9px] font-bold text-gray-600 text-center uppercase tracking-widest">
                Zero spam. Pure professional value.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="mt-24 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-medium text-gray-500 tracking-normal">
        <div class="flex items-center gap-6">
          <p>&copy; {{ new Date().getFullYear() }} MedLabConvo. All rights reserved.</p>
          <span class="hidden md:block w-px h-4 bg-white/10"></span>
          <p class="hidden md:block text-gray-600">Global Clinical Research & Diagnostics Ecosystem</p>
        </div>
        
        <p class="flex items-center gap-1 group">
          <!-- Crafted with 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 text-red-500/80 animate-pulse mx-0.5">
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          by  -->
          <span class="text-white group-hover:text-[#27628C] transition-colors">MedLabConvo Tech</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { useSubscribe } from '@/composables/modules/subscriptions/useSubscribe'

const { subscribe, loading } = useSubscribe()
const email = ref('')

const handleSubscribe = async () => {
  const success = await subscribe(email.value)
  if (success) email.value = ''
}

const platform = [
  { name: 'Journo', href: '/journo' },
  { name: 'LabCast', href: '/lab-cast' },
  { name: 'Convo Stack', href: '/convostack' },
  { name: 'Programs', href: '/programs' },
  { name: 'Products', href: '/products' },
  { name: 'Resources', href: '/resources' },
]

const company = [
  { name: 'Leadership', href: '/teams' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Community', href: '/community' },
  { name: 'Contact', href: '/contact-us' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
]

const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': 'true' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', 'clip-rule': 'evenodd' })
    ])
  },
  {
    name: 'Instagram',
    href: '#',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': 'true' }, [
      h('path', { 'fill-rule': 'evenodd', d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z', 'clip-rule': 'evenodd' })
    ])
  },
  {
    name: 'X',
    href: '#',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': 'true' }, [
        h('path', { d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' })
    ])
  },
  {
    name: 'YouTube',
    href: '#',
    icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': 'true' }, [
        h('path', { 'fill-rule': 'evenodd', d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z', 'clip-rule': 'evenodd' })
    ])
  }
]
</script>
