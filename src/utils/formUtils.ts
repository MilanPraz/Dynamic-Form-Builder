import { TFieldType, TFormField } from '../types/field.type'

export const createField = (type: TFieldType): TFormField => {
  return {
    id: generateId(),
    type,
    label: `New ${type} Field`,
    placeholder: `Write your placeholder here`,
    required: false,
    options:
      type === 'dropdown' || type === 'radio'
        ? ['Option 1', 'Option 2', 'Option 3']
        : undefined,
  }
}

function generateId() {
  const id = Math.random().toString(36).substring(2, 9)
  console.log('GNEREEATAEd id', id)
  return id
}
