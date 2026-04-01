import { GATEWAY_ENDPOINT } from "../axios.config"

export type CmsSection = {
  id: string
  title: string
  content: any
  isVisible: boolean
  order: number
}

export type CmsData = {
  sections: CmsSection[]
}

export type CmsDocument = {
  _id?: string
  key: string
  title: string
  data: CmsData
  updatedBy: string
  createdAt?: string
  updatedAt?: string
}

export const cms_api = {
  $_get_all_cms: async () => {
    return GATEWAY_ENDPOINT.get("/cms")
  },

  $_get_cms_by_key: async (key: string) => {
    return GATEWAY_ENDPOINT.get(`/cms/${key}`)
  }
}
