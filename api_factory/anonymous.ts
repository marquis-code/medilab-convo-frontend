import { GATEWAY_ENDPOINT } from '@/api_factory/axios.config'
export const anonymous_api = {
	$_create_anonymous: (payload: any) => {
		const url = '/anonymous'
		return GATEWAY_ENDPOINT.post(url, payload)
	}
}