export enum FormFieldType {
  TEXT = 'text',
  EMAIL = 'email',
  TEXTAREA = 'textarea',
  NUMBER = 'number',
  DATE = 'date',
  SELECT = 'select',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  FILE = 'file',
  PHONE = 'phone',
  URL = 'url',
}

export interface FormField {
  id: string
  label: string
  type: FormFieldType
  required?: boolean
  options?: string[]
  placeholder?: string
  description?: string
  validation?: string
}

export interface Form {
  _id: string
  title: string
  slug: string
  description?: string
  instructions?: string
  fields: FormField[]
  successMessage?: string
  isActive: boolean
  redirectUrl?: string
  submissionsCount: number
  programId?: string
  programTitle?: string
  isStandalone: boolean
  accessToken: string
  createdAt: string
  updatedAt: string
}

export interface FormResponse {
  fieldId: string
  fieldLabel: string
  value: string
}

export interface SubmitFormPayload {
  submitterEmail?: string
  responses: FormResponse[]
}