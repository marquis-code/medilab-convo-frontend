import { GATEWAY_ENDPOINT } from '../axios.config'

export const convostack_api = {
  $_get_publications: () => {
    return GATEWAY_ENDPOINT.get('/convostack')
  },
  $_get_publication_by_slug: (slug: string) => {
    return GATEWAY_ENDPOINT.get(`/convostack/${slug}`)
  },
  $_add_comment: (publicationId: string, payload: any) => {
    return GATEWAY_ENDPOINT.post(`/convostack/${publicationId}/comments`, payload)
  },
  $_get_comments: (publicationId: string) => {
    return GATEWAY_ENDPOINT.get(`/convostack/${publicationId}/comments`)
  },
  $_toggle_like: (publicationId: string) => {
    return GATEWAY_ENDPOINT.post(`/convostack/${publicationId}/like`)
  }
}
