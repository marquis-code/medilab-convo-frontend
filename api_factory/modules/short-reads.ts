import { GATEWAY_ENDPOINT } from "../axios.config"

export type ShortReadStatus = 'draft' | 'published'

export type SlideDto = {
  type: string
  content?: string
  mediaUrl?: string
  title?: string
}

export type ShortRead = {
  _id?: string
  title: string
  slug?: string
  coverImageUrl: string
  author?: string
  slides?: SlideDto[]
  status?: ShortReadStatus
  createdAt?: string
  updatedAt?: string
}

export type ShortReadQueryParams = {
  status?: ShortReadStatus
}

export const short_reads_api = {
  $_get_short_reads: async (params?: ShortReadQueryParams) => {
    return GATEWAY_ENDPOINT.get('/short-reads', { params })
  },

  $_get_short_read: async (slug: string) => {
    return GATEWAY_ENDPOINT.get(`/short-reads/${slug}`)
  },
}
