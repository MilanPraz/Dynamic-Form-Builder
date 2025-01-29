import { z } from 'zod'

export type TFieldType =
  | 'text'
  | 'dropdown'
  | 'checkbox'
  | 'button'
  | 'textarea'

export type TFormField = {
  id: string
  type: TFieldType
  label: string
  options?: string[]
  required: boolean
  placeholder?: string
  value?: string
}

export const createField = (type: TFieldType): TFormField => {
  return {
    id: generateId(),
    type,
    label: `New ${type} Field`,
    placeholder: `Write your placeholder here`,
    required: false,
    options:
      type === 'dropdown' ? ['Option 1', 'Option 2', 'Option 3'] : undefined,
  }
}

export const fieldSchema = z.object({
  id: z.string(),
  type: z.enum(['text', 'dropdown', 'checkbox', 'button', 'textarea']),
  label: z.string(),
  placeholder: z.string(),
  required: z.boolean(),
})

export const formSchema = z.array(fieldSchema)

export type TFormSchema = z.infer<typeof formSchema>

// export const generateId = () => Math.random().toString(36).substr(2, 9)

function generateId() {
  const id = Math.random().toString(36).substring(2, 9)
  console.log('GNEREEATAEd id', id)
  return id
}

export const updateField = (fields: TFormField[], updatedField: TFormField) => {
  const updatedFields = fields.map(field =>
    field.id === updatedField.id ? updatedField : field
  )
  return updatedFields
}

export const deleteField = (fields: TFormField[], id: string) => {
  const updatedFields = fields.filter(field => field.id !== id)
  return updatedFields
}
