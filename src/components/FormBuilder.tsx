// import { useState } from 'react'
// import { formFieldButtons } from '../_data/formFields'
// import { useLocalStorageSync } from '../hooks/useLocalStorage'
// import { TFieldType, TFormField } from '../types/field.type'
// import { createField } from '../utils/formUtils'
// import FormEditor from './FormEditor'
// import FormRenderer from './FormRenderer'

// export default function FormBuilder() {
//   const [fields, setFields] = useLocalStorageSync([])
//   const [selectedField, setSelectedField] = useState<TFormField | null>(null)

//   const handleAddField = (type: TFieldType) => {
//     const newField = createField(type)
//     setFields([...fields, newField])
//     setSelectedField(newField)
//   }

//   function handleDeleteField(fieldId: string) {
//     setFields(fields.filter(field => field.id !== fieldId))
//     setSelectedField(null)
//   }

//   function handleUpdateField(updatedField: TFormField) {
//     setFields(
//       fields.map(field => (field.id === updatedField.id ? updatedField : field))
//     )
//     setSelectedField(updatedField)
//   }

//   function handleSelectField(field: TFormField) {
//     setSelectedField(field)
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//       <section className="col-span-1 md:col-span-6 p-4 flex flex-col gap-4 bg-white rounded-md">
//         <h2 className="text-lg font-medium text-mint-500">Choose the fields</h2>

//         <div className="flex flex-wrap bg-mint-500/10 p-3 sm:p-4 rounded-2xl gap-2">
//           {formFieldButtons.map(field => (
//             <button
//               key={field.id}
//               className="btn btn-primary cursor-pointer text-sm sm:text-base"
//               onClick={() => handleAddField(field.type as TFieldType)}
//             >
//               {field.label}
//             </button>
//           ))}
//         </div>

//         <div>
//           {selectedField && (
//             <FormEditor
//               field={selectedField}
//               onUpdate={handleUpdateField}
//               onRemove={handleDeleteField}
//             />
//           )}
//         </div>
//       </section>
//       <section className="col-span-1 md:col-span-6 bg-white p-3 sm:p-4 rounded-md">
//         <h2 className="text-lg font-medium text-mint-500 mb-4">Your Form</h2>

//         <div className="border p-3 sm:p-4 rounded-2xl border-mint-500">
//           <FormRenderer fields={fields} handleSelectField={handleSelectField} />
//         </div>
//       </section>
//     </div>
//   )
// }

import { useState } from 'react'
import { formFieldButtons } from '../_data/formFields'
import { useLocalStorageSync } from '../hooks/useLocalStorage'
import { TFieldType, TFormField } from '../types/field.type'
import { createField } from '../utils/formUtils'
import FormEditor from './FormEditor'
import FormRenderer from './FormRenderer'

export default function FormBuilder() {
  const [fields, setFields] = useLocalStorageSync([])
  const [selectedField, setSelectedField] = useState<TFormField | null>(null)

  const handleAddField = (type: TFieldType) => {
    const newField = createField(type)
    setFields([...fields, newField])
    setSelectedField(newField)
  }

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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT PANEL */}
      <section className="lg:col-span-6 bg-neutral-900 rounded-xl p-5 border border-neutral-800">
        <h2 className="text-lg font-semibold text-neutral-200 mb-4">
          Add Fields
        </h2>

        <div className="flex flex-wrap gap-2 bg-neutral-800 p-4 rounded-xl mb-6">
          {formFieldButtons.map(field => (
            <button
              key={field.id}
              onClick={() => handleAddField(field.type as TFieldType)}
              className="px-3 py-2 rounded-lg text-sm bg-neutral-700 text-neutral-200
                         hover:bg-neutral-600 transition"
            >
              {field.label}
            </button>
          ))}
        </div>

        {selectedField && (
          <FormEditor
            field={selectedField}
            onUpdate={handleUpdateField}
            onRemove={handleDeleteField}
          />
        )}
      </section>

      {/* RIGHT PANEL */}
      <section className="lg:col-span-6 bg-neutral-900 rounded-xl p-5 border border-neutral-800">
        <h2 className="text-lg font-semibold text-neutral-200 mb-4">
          Form Preview
        </h2>

        <div className="rounded-xl border border-neutral-700 p-4 bg-neutral-950">
          <FormRenderer fields={fields} handleSelectField={handleSelectField} />
        </div>
      </section>
    </div>
  )
}
