import { useState } from '#imports'

export const useSubscriptionModal = () => {
  const isSubscriptionModalOpen = useState('isSubscriptionModalOpen', () => false)

  const openSubscriptionModal = () => {
    isSubscriptionModalOpen.value = true
  }

  const closeSubscriptionModal = () => {
    isSubscriptionModalOpen.value = false
  }

  return {
    isSubscriptionModalOpen,
    openSubscriptionModal,
    closeSubscriptionModal
  }
}
