import { ref } from 'vue'
import { useCustomToast } from '@/composables/core/useCustomToast'
import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'

export const useCheckout = () => {
  const loading = ref(false)

  const initializePaystack = async (product: any, email: string, onSuccess?: (reference: any) => void, onClose?: () => void) => {
    // If it's free, skip Paystack and return immediate success
    if (!product.price || product.price === 0) {
      if (onSuccess) onSuccess({ status: 'success', reference: 'FREE_' + Date.now() })
      return
    }

    try {
      loading.value = true
      // Pass the callback URL so Paystack redirects back here with the reference
      const callbackUrl = `${window.location.origin}${window.location.pathname}?verify=true&productId=${product._id || product.id}&email=${encodeURIComponent(email)}`

      const response = await GATEWAY_ENDPOINT.post('/payments/initialize-product-purchase', {
        email: email,
        amount: product.price,
        productId: product._id || product.id,
        callback_url: callbackUrl
      })

      const data = response.data?.data || response.data
      
      if (data?.authorization_url) {
        // Redirect to Paystack's hosted checkout page
        window.location.href = data.authorization_url
      } else {
        throw new Error('No authorization URL received from backend')
      }
    } catch (error) {
      console.error('Paystack initialization failed:', error)
      const { showToast } = useCustomToast()
      showToast({
        title: 'Error',
        message: 'Unable to initialize payment with the server. Please try again.',
        toastType: 'error'
      })
      if (onClose) onClose()
    } finally {
      loading.value = false
    }
  }

  const verifyPurchase = async (reference: string, productId: string, email: string) => {
    try {
      loading.value = true
      const response = await GATEWAY_ENDPOINT.get(`/payments/verify-product-purchase`, {
        params: {
          reference,
          productId,
          email
        }
      })
      return response.data
    } catch (error) {
      console.error('Purchase verification failed:', error)
      throw error
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    initializePaystack,
    verifyPurchase
  }
}
