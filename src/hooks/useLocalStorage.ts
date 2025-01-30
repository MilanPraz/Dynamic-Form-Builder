import { useEffect, useState } from 'react'
import { TFormField } from '../types/field.type'

export function useLocalStorageSync(initialValue: TFormField[] = []) {
  const [fields, setFields] = useState<TFormField[]>(initialValue)

  //GET FROM LOCAL STORAGE
  useEffect(() => {
    try {
      const formData = localStorage.getItem('formData')

      const parsedFormData = formData ? JSON.parse(formData) : []

      if (parsedFormData && parsedFormData.length > 0) {
        setFields(parsedFormData)
      }
    } catch (error) {
      console.error('error getting data from localStorage', error)
    }
  }, [])

  //SET INTO LOCAL STORAGE

  useEffect(() => {
    try {
      if (fields.length > 0) {
        localStorage.setItem('formData', JSON.stringify(fields))
      }
    } catch (Err) {
      console.error('Error while saving data to localStorage', Err)
    }
  }, [fields])

  return [fields, setFields] as const
}
