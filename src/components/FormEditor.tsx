// import React, { useEffect, useState } from 'react'
// import { TFormField } from '../types/field.type'

// interface FieldEditorProps {
//   field: TFormField | null
//   onUpdate: (field: TFormField) => void
//   onRemove: (fieldId: string) => void
// }

// export default function FormEditor({
//   field,
//   onRemove,
//   onUpdate,
// }: FieldEditorProps) {
//   const [editingField, setEditingField] = useState<TFormField | null>(field)
//   console.log('field', field)

//   useEffect(() => {
//     setEditingField(field)
//   }, [field])

//   // HANDLE CHANGE FOR LABEL, PLACEHOLDER, REQUIRED
//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     if (!editingField) return
//     const { name, value, checked, type } = e.target
//     const updatedField = {
//       ...editingField,
//       [name]: type === 'checkbox' ? checked : value,
//     }
//     setEditingField(updatedField)
//     onUpdate(updatedField)
//   }

//   // HANDLE ADD OPTION FOR DROPDOWN AND RADIO
//   function addOptions() {
//     if (!editingField) return
//     const updatedOptions = [...(editingField?.options || []), '']
//     const updatedField = {
//       ...editingField,
//       options: updatedOptions,
//     }
//     setEditingField(updatedField)
//     onUpdate(updatedField)
//   }

//   // HANDLE CHANGE FOR OPTION FOR DROPDOWN AND RADIO
//   function handleOptionChange(idx: number, value: string) {
//     if (!editingField) return
//     const updatedOptions = [...(editingField?.options || [])]
//     updatedOptions[idx] = value
//     const updatedField = {
//       ...editingField,
//       options: updatedOptions,
//     }
//     setEditingField(updatedField)
//     onUpdate(updatedField)
//   }

//   // HANDLE DELETE OPTION FOR DROPDOWN AND RADIO
//   function handleDeleteOption(idx: number) {
//     if (!editingField) return

//     const updatedOptions = (editingField?.options || []).filter(
//       (_, i) => i !== idx
//     )
//     const updatedField = {
//       ...editingField,
//       options: updatedOptions,
//     }
//     setEditingField(updatedField)
//     onUpdate(updatedField)
//   }

//   return (
//     <div>
//       <h2 className="text-lg font-medium text-mint-500">Edit Field</h2>

//       <div className="flex flex-col gap-2">
//         {/* LABEL EDIT HERE */}
//         <div>
//           <label htmlFor="label" className="text-sm font-medium text-gray-700">
//             Label
//           </label>
//           <input
//             type="text"
//             id="label"
//             name="label"
//             value={editingField?.label}
//             onChange={handleChange}
//             className="input input-bordered w-full mt-1"
//           />
//         </div>

//         {/* PLACEHOLDER EDIT HERE */}
//         {field?.type !== 'button' &&
//           field?.type !== 'checkbox' &&
//           field?.type !== 'radio' && (
//             <div>
//               <label
//                 htmlFor="placeholder"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Placeholder
//               </label>
//               <input
//                 type="text"
//                 id="placeholder"
//                 name="placeholder"
//                 value={editingField?.placeholder}
//                 onChange={handleChange}
//                 className="input input-bordered w-full mt-1"
//               />
//             </div>
//           )}

//         {/* REQUIRED EDIT HERE */}
//         {field?.type !== 'button' && (
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="required"
//               name="required"
//               checked={editingField?.required}
//               onChange={handleChange}
//               className="checkbox checked:bg-mint-500 checked:border-mint-500"
//             />
//             <label
//               htmlFor="required"
//               className="text-sm font-medium text-gray-700"
//             >
//               Required
//             </label>
//           </div>
//         )}

//         {/* DROPDOWN EDIT HERE */}
//         {field?.type === 'dropdown' && (
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="options"
//               className="text-sm font-medium text-gray-700"
//             >
//               Options
//             </label>
//             <div className="flex flex-col gap-2">
//               {editingField?.options?.map((option, idx) => (
//                 <div key={idx} className="flex gap-2 items-center">
//                   <input
//                     type="text"
//                     id="options"
//                     name="options"
//                     value={option}
//                     onChange={e => handleOptionChange(idx, e.target.value)}
//                     className="input input-bordered w-full mt-1"
//                   />
//                   <button
//                     onClick={() => handleDeleteOption(idx)}
//                     className="btn btn-primary h-10"
//                   >
//                     X
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-2 flex justify-end">
//               <button onClick={addOptions} className="btn btn-primary">
//                 Add Option
//               </button>
//             </div>
//           </div>
//         )}

//         {/* RADIO EDIT HERE */}
//         {field?.type === 'radio' && (
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="options"
//               className="text-sm font-medium text-gray-700"
//             >
//               Radio Options
//             </label>
//             <div className="flex flex-col gap-2">
//               {editingField?.options?.map((option, idx) => (
//                 <div key={idx} className="flex gap-2 items-center">
//                   <input
//                     type="text"
//                     id="options"
//                     name="options"
//                     value={option}
//                     onChange={e => handleOptionChange(idx, e.target.value)}
//                     className="input input-bordered w-full mt-1"
//                   />
//                   <button
//                     onClick={() => handleDeleteOption(idx)}
//                     className="btn btn-primary h-10"
//                   >
//                     X
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-2 flex justify-end">
//               <button onClick={addOptions} className="btn btn-primary">
//                 Add Option
//               </button>
//             </div>
//           </div>
//         )}

//         <div>
//           <button
//             className="btn btn-primary"
//             onClick={() => onRemove(editingField?.id || '')}
//           >
//             Remove Field
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { TFormField } from '../types/field.type'

interface FieldEditorProps {
  field: TFormField | null
  onUpdate: (field: TFormField) => void
  onRemove: (fieldId: string) => void
}

export default function FormEditor({
  field,
  onRemove,
  onUpdate,
}: FieldEditorProps) {
  const [editingField, setEditingField] = useState<TFormField | null>(field)

  useEffect(() => {
    setEditingField(field)
  }, [field])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!editingField) return
    const { name, value, checked, type } = e.target
    const updatedField = {
      ...editingField,
      [name]: type === 'checkbox' ? checked : value,
    }
    setEditingField(updatedField)
    onUpdate(updatedField)
  }

  function addOptions() {
    if (!editingField) return
    const updatedField = {
      ...editingField,
      options: [...(editingField.options || []), ''],
    }
    setEditingField(updatedField)
    onUpdate(updatedField)
  }

  function handleOptionChange(idx: number, value: string) {
    if (!editingField) return
    const options = [...(editingField.options || [])]
    options[idx] = value
    const updatedField = { ...editingField, options }
    setEditingField(updatedField)
    onUpdate(updatedField)
  }

  function handleDeleteOption(idx: number) {
    if (!editingField) return
    const options = editingField.options?.filter((_, i) => i !== idx)
    const updatedField = { ...editingField, options }
    setEditingField(updatedField)
    onUpdate(updatedField)
  }

  if (!editingField) return null

  return (
    <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
      <h3 className="text-neutral-200 font-medium mb-4">Edit Field Settings</h3>

      <div className="flex flex-col gap-4">
        {/* LABEL */}
        <div>
          <label className="text-sm text-neutral-400">Label</label>
          <input
            name="label"
            value={editingField.label}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg bg-neutral-900 border border-neutral-700
                       px-3 py-2 text-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-500"
          />
        </div>

        {/* PLACEHOLDER */}
        {field?.type !== 'button' &&
          field?.type !== 'checkbox' &&
          field?.type !== 'radio' && (
            <div>
              <label className="text-sm text-neutral-400">Placeholder</label>
              <input
                name="placeholder"
                value={editingField.placeholder}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg bg-neutral-900 border border-neutral-700
                           px-3 py-2 text-neutral-200"
              />
            </div>
          )}

        {/* REQUIRED */}
        {field?.type !== 'button' && (
          <label className="flex items-center gap-2 text-sm text-neutral-300">
            <input
              type="checkbox"
              name="required"
              checked={editingField.required}
              onChange={handleChange}
              className="accent-neutral-500"
            />
            Required field
          </label>
        )}

        {/* OPTIONS (DROPDOWN / RADIO) */}
        {(field?.type === 'dropdown' || field?.type === 'radio') && (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-400">Options</label>

            {editingField.options?.map((opt, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  value={opt}
                  onChange={e => handleOptionChange(idx, e.target.value)}
                  className="flex-1 rounded-lg bg-neutral-900 border border-neutral-700
                             px-3 py-2 text-neutral-200"
                />
                <button
                  onClick={() => handleDeleteOption(idx)}
                  className="px-3 rounded-lg bg-neutral-700 text-neutral-200 hover:bg-red-600 transition"
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={addOptions}
              className="self-end mt-2 px-3 py-2 rounded-lg bg-neutral-700
                         text-sm text-neutral-200 hover:bg-neutral-600 transition"
            >
              Add option
            </button>
          </div>
        )}

        {/* REMOVE */}
        <button
          onClick={() => onRemove(editingField.id)}
          className="mt-4 px-4 py-2 rounded-lg bg-red-600/80 hover:bg-red-600
                     text-sm text-white transition"
        >
          Remove Field
        </button>
      </div>
    </div>
  )
}
