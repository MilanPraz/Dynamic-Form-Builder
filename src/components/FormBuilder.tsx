import { useState } from 'react'
import { createField, TFormField } from '../utils/formUtils'
import FormEditor from './FormEditor'
import FormRenderer from './FormRenderer'

export default function FormBuilder() {
  const [fields, setFields] = useState<TFormField[]>([])
  const [selectedField, setSelectedField] = useState<TFormField | null>(null)
  const handleAddField = (type: any) => {
    const newField = createField(type)
    setFields([...fields, newField])
    setSelectedField(newField)
  }

  console.log('AAAAA:', fields)

  function handleDeleteField(fieldId: string) {
    setFields(fields.filter(field => field.id !== fieldId))
    setSelectedField(null)
  }

  function handleUpdateField(updatedField: TFormField) {
    setFields(
      fields.map(field => (field.id === updatedField.id ? updatedField : field))
    )
    setSelectedField(updatedField)
  }

  function handleSelectField(field: TFormField) {
    setSelectedField(field)
  }

  return (
    <div className="grid grid-cols-12 gap-4  px-20">
      <section className="col-span-6 p-4  flex flex-col gap-4  bg-white   rounded-md">
        <h2 className="text-lg font-medium text-mint-500">Choose the fields</h2>

        <div className="flex  gap-2 flex-wrap">
          <button
            className="btn btn-primary"
            onClick={() => handleAddField('text')}
          >
            Add Text Field
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddField('dropdown')}
          >
            Add Dropdown
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddField('checkbox')}
          >
            Add Checkbox
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddField('button')}
          >
            Add Button
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddField('textarea')}
          >
            Add Textarea
          </button>
        </div>
        <div>
          {selectedField && (
            <FormEditor
              field={selectedField}
              onUpdate={handleUpdateField}
              onRemove={handleDeleteField}
            />
          )}
        </div>
      </section>
      <section className="col-span-6 bg-white p-4 rounded-md">
        <h2 className="text-lg font-medium text-mint-500">Your Form</h2>

        <div>
          <FormRenderer fields={fields} handleSelectField={handleSelectField} />
        </div>
      </section>
    </div>
  )
}
