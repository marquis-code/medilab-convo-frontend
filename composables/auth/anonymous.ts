import { anonymous_api} from "@/api_factory/anonymous";

export const useCreateAnonymous = () => {
  const loading = ref(false);
  const createAnonymous = async (payload: any) => {
    loading.value = true;
    try {
      const response = await anonymous_api.$_create_anonymous(payload);
      return response
    } catch (error) {
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { createAnonymous, loading };
};
