import { ref } from 'vue'
import { useAsyncData } from '#imports'
import { cms_api } from '@/api_factory/modules/cms'

/**
 * Global composable to fetch dynamic CMS data for any public page.
 * It uses Nuxt's SSR-friendly useAsyncData so the CMS page is fetched structurally
 * on the server, ensuring excellent SEO and fast initial performance.
 */
export const useCmsData = (pageKey: string) => {
  const loading = ref(false)
  
  // NOTE: You must update `your_backend_url` to your global API variable 
  // (e.g. from utilize useRuntimeConfig().public.apiBase or your axis/fetch instance)
  const fetchUrl = `/cms/${pageKey}`

  const { data: pageData, pending, error, refresh } = useAsyncData(
    `cms-content-${pageKey}`,
    async () => {
      const res = await cms_api.$_get_cms_by_key(pageKey)
      return res?.data?.data || res?.data || null
    },
    {
      server: true, // Crucial for SEO, fetches on the server side
      lazy: false,  // Block navigation until content is resolved
    }
  )

  return {
    pageData,
    loading: pending,
    error,
    refresh
  }
}
