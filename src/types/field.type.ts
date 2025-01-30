export type TFieldType =
  | 'text'
  | 'dropdown'
  | 'checkbox'
  | 'button'
  | 'textarea'
  | 'radio'

export type TFormField = {
  id: string
  type: TFieldType
  label: string
  options?: string[]
  required: boolean
  placeholder?: string
  value?: string
}
