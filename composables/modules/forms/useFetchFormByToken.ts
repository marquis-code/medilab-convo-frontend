import { ref } from 'vue'
import { forms_api, type Form } from '@/api_factory/modules/forms'

export const useFetchFormByToken = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const form = ref<Form | null>(null)

  const fetchFormByToken = async (token: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await forms_api.$_get_form_by_token(token)
      form.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to fetch form'
      throw err
    } finally {
      loading.value = false
    }
  }


  return {
    loading,
    error,
    form,
    fetchFormByToken
  }
}