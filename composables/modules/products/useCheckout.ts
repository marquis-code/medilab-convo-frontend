import { ref } from 'vue'
import { useCustomToast } from '@/composables/core/useCustomToast'
import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'

export const useCheckout = () => {
  const loading = ref(false)

  const initializePaystack = (product: any, email: string, onSuccess: (reference: any) => void, onClose: () => void) => {
    // We assume Paystack JS is loaded globally in nuxt.config or index.html
    // e.g. <script src="https://js.paystack.co/v1/inline.js"></script>
    
    // In Nuxt, the config would be available via useRuntimeConfig
    const config = useRuntimeConfig()
    
    // If it's free, skip Paystack
    if (!product.price || product.price === 0) {
      onSuccess({ status: 'success', reference: 'FREE_' + Date.now() })
      return
    }

    try {
      const handler = (window as any).PaystackPop.setup({
        key: config.public.paystackPublicKey || 'pk_test_b8d60efd4c82c2196e8dc776bf77366efba322cb',
        email: email,
        amount: product.price * 100, // Paystack expects amount in kobo
        currency: 'NGN',
        ref: 'REF_' + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
          custom_fields: [
            {
              display_name: "Product Name",
              variable_name: "product_name",
              value: product.name
            }
          ]
        },
        callback: function (response: any) {
          onSuccess(response)
        },
        onClose: function () {
          onClose()
        }
      })
      handler.openIframe()
    } catch (error) {
      console.error('Paystack initialization failed:', error)
      const { showToast } = useCustomToast()
      showToast({
        title: 'Error',
        message: 'Unable to initialize payment. Please try again. Ensure Paystack is loaded.',
        toastType: 'error'
      })
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
