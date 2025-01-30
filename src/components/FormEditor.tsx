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
  console.log('field', field)

  useEffect(() => {
    setEditingField(field)
  }, [field])

  // HANDLE CHANGE FOR LABEL, PLACEHOLDER, REQUIRED
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

  // HANDLE ADD OPTION FOR DROPDOWN AND RADIO
  function addOptions() {
    if (!editingField) return
    const updatedOptions = [...(editingField?.options || []), '']
    const updatedField = {
      ...editingField,
      options: updatedOptions,
    }
    setEditingField(updatedField)
    onUpdate(updatedField)
  }

  // HANDLE CHANGE FOR OPTION FOR DROPDOWN AND RADIO
  function handleOptionChange(idx: number, value: string) {
    if (!editingField) return
    const updatedOptions = [...(editingField?.options || [])]
    updatedOptions[idx] = value
    const updatedField = {
      ...editingField,
      options: updatedOptions,
    }
    setEditingField(updatedField)
    onUpdate(updatedField)
  }

  // HANDLE DELETE OPTION FOR DROPDOWN AND RADIO
  function handleDeleteOption(idx: number) {
    if (!editingField) return

    const updatedOptions = (editingField?.options || []).filter(
      (_, i) => i !== idx
    )
    const updatedField = {
      ...editingField,
      options: updatedOptions,
    }
    setEditingField(updatedField)
    onUpdate(updatedField)
  }

  return (
    <div>
      <h2 className="text-lg font-medium text-mint-500">Edit Field</h2>

      <div className="flex flex-col gap-2">
        {/* LABEL EDIT HERE */}
        <div>
          <label htmlFor="label" className="text-sm font-medium text-gray-700">
            Label
          </label>
          <input
            type="text"
            id="label"
            name="label"
            value={editingField?.label}
            onChange={handleChange}
            className="input input-bordered w-full mt-1"
          />
        </div>

        {/* PLACEHOLDER EDIT HERE */}
        {field?.type !== 'button' &&
          field?.type !== 'checkbox' &&
          field?.type !== 'radio' && (
            <div>
              <label
                htmlFor="placeholder"
                className="text-sm font-medium text-gray-700"
              >
                Placeholder
              </label>
              <input
                type="text"
                id="placeholder"
                name="placeholder"
                value={editingField?.placeholder}
                onChange={handleChange}
                className="input input-bordered w-full mt-1"
              />
            </div>
          )}

        {/* REQUIRED EDIT HERE */}
        {field?.type !== 'button' && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="required"
              name="required"
              checked={editingField?.required}
              onChange={handleChange}
              className="checkbox checked:bg-mint-500 checked:border-mint-500"
            />
            <label
              htmlFor="required"
              className="text-sm font-medium text-gray-700"
            >
              Required
            </label>
          </div>
        )}

        {/* DROPDOWN EDIT HERE */}
        {field?.type === 'dropdown' && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="options"
              className="text-sm font-medium text-gray-700"
            >
              Options
            </label>
            <div className="flex flex-col gap-2">
              {editingField?.options?.map((option, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    type="text"
                    id="options"
                    name="options"
                    value={option}
                    onChange={e => handleOptionChange(idx, e.target.value)}
                    className="input input-bordered w-full mt-1"
                  />
                  <button
                    onClick={() => handleDeleteOption(idx)}
                    className="btn btn-primary h-10"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-end">
              <button onClick={addOptions} className="btn btn-primary">
                Add Option
              </button>
            </div>
          </div>
        )}

        {/* RADIO EDIT HERE */}
        {field?.type === 'radio' && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="options"
              className="text-sm font-medium text-gray-700"
            >
              Radio Options
            </label>
            <div className="flex flex-col gap-2">
              {editingField?.options?.map((option, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    type="text"
                    id="options"
                    name="options"
                    value={option}
                    onChange={e => handleOptionChange(idx, e.target.value)}
                    className="input input-bordered w-full mt-1"
                  />
                  <button
                    onClick={() => handleDeleteOption(idx)}
                    className="btn btn-primary h-10"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-end">
              <button onClick={addOptions} className="btn btn-primary">
                Add Option
              </button>
            </div>
          </div>
        )}

        <div>
          <button
            className="btn btn-primary"
            onClick={() => onRemove(editingField?.id || '')}
          >
            Remove Field
          </button>
        </div>
      </div>
    </div>
  )
}
