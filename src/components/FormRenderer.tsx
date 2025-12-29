// import { zodResolver } from '@hookform/resolvers/zod'
// import { FieldError, useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { TFormField } from '../types/field.type'
// import FormError from './FormError'

// type TFormBuilderProps = {
//   fields: TFormField[]
//   handleSelectField: (field: TFormField) => void
// }

// export default function FormRenderer({
//   fields,
//   handleSelectField,
// }: TFormBuilderProps) {
//   const dynamicSchema = z.object(
//     fields.reduce((acc, field) => {
//       if (field.type === 'button') return acc

//       const fieldSchema =
//         field.type === 'checkbox'
//           ? field.required
//             ? z.boolean().refine(value => value === true, {
//                 message: `${field.label} is required`,
//               })
//             : z.boolean()
//           : field.required
//           ? z
//               .string()
//               .nullable()
//               .refine(value => value !== null && value !== '', {
//                 message: `${field.label} is required`,
//               })
//           : z.string().nullable().optional()

//       return { ...acc, [field.id]: fieldSchema }
//     }, {})
//   )

//   type TDynamicSchema = z.infer<typeof dynamicSchema>

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm<TDynamicSchema>({
//     resolver: zodResolver(dynamicSchema),
//     defaultValues: fields.reduce((acc, field) => {
//       if (field.type !== 'button' && field.type !== 'checkbox') {
//         acc[field.id] = ''
//       }
//       if (field.type === 'checkbox') {
//         acc[field.id] = false
//       }
//       return acc
//     }, {} as Record<string, string | boolean>),
//   })

//   function onSubmit(data: any) {
//     console.log('Formdata:', data)

//     alert('Form submitted Successfully!')
//   }

//   return (
//     <div className="min-h-[calc(100vh-200px)]">
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
//         {fields?.map(field => (
//           <div
//             onClick={() => handleSelectField(field)}
//             className=" cursor-pointer  p-2 hover:bg-gray-100 rounded-lg  bg-white"
//             key={field.id}
//           >
//             {field.type === 'text' && (
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor={field.label}
//                   className="text-sm flex items-center gap-2 font-medium text-gray-700"
//                 >
//                   <span
//                     className={` ${
//                       field.required ? 'text-red-500 block' : 'hidden'
//                     }`}
//                   >
//                     *{' '}
//                   </span>
//                   {field.label}
//                 </label>
//                 <input
//                   type="text"
//                   {...register(field.id as keyof TDynamicSchema)}
//                   placeholder={field.placeholder}
//                   className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mint-500 focus:border-mint-500 outline-none"
//                 />
//                 <FormError>
//                   {
//                     (errors[field.id as keyof TDynamicSchema] as FieldError)
//                       ?.message
//                   }
//                 </FormError>
//               </div>
//             )}
//             {field.type === 'textarea' && (
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor={field.label}
//                   className="text-sm flex items-center gap-2 font-medium text-gray-700"
//                 >
//                   <span
//                     className={` ${
//                       field.required ? 'text-red-500 block' : 'hidden'
//                     }`}
//                   >
//                     *{' '}
//                   </span>
//                   {field.label}
//                 </label>
//                 <textarea
//                   {...register(field.id as keyof TDynamicSchema)}
//                   placeholder={field.placeholder}
//                   className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mint-500 focus:border-mint-500 outline-none min-h-[100px] resize-y"
//                 />
//                 <FormError>
//                   {
//                     (errors[field.id as keyof TDynamicSchema] as FieldError)
//                       ?.message
//                   }
//                 </FormError>
//               </div>
//             )}
//             {field.type === 'dropdown' && (
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor={field.label}
//                   className="text-sm flex items-center gap-2 font-medium text-gray-700"
//                 >
//                   <span
//                     className={` ${
//                       field.required ? 'text-red-500 block' : 'hidden'
//                     }`}
//                   >
//                     *{' '}
//                   </span>
//                   {field.label}
//                 </label>
//                 <select
//                   {...register(field.id as keyof TDynamicSchema)}
//                   className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mint-500 focus:border-mint-500 outline-none bg-white"
//                 >
//                   <option value="">{field.placeholder}</option>
//                   {field.options?.map(option => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//                 <FormError>
//                   {
//                     (errors[field?.id as keyof TDynamicSchema] as FieldError)
//                       ?.message
//                   }
//                 </FormError>
//               </div>
//             )}
//             {field.type === 'radio' && (
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor={field.label}
//                   className="text-sm flex items-center gap-2 font-medium text-gray-700"
//                 >
//                   <span
//                     className={` ${
//                       field.required ? 'text-red-500 block' : 'hidden'
//                     }`}
//                   >
//                     *{' '}
//                   </span>
//                   {field.label}
//                 </label>
//                 {field.options?.map(option => (
//                   <div key={option} className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value={option}
//                       {...register(field.id as keyof TDynamicSchema)}
//                       className="w-4 h-4 text-mint-500 border-gray-300 rounded focus:ring-mint-500"
//                     />
//                     <label className="text-sm font-medium text-gray-700">
//                       {option}
//                     </label>
//                   </div>
//                 ))}
//                 <FormError>
//                   {
//                     (errors[field.id as keyof TDynamicSchema] as FieldError)
//                       ?.message
//                   }
//                 </FormError>
//               </div>
//             )}
//             {field.type === 'checkbox' && (
//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   {...register(field.id as keyof TDynamicSchema)}
//                   className="w-4 h-4 text-mint-500 border-gray-300 rounded focus:ring-mint-500"
//                 />
//                 <label
//                   htmlFor={field.label}
//                   className="text-sm flex items-center gap-2 font-medium text-gray-700"
//                 >
//                   <span
//                     className={` ${
//                       field.required ? 'text-red-500 block' : 'hidden'
//                     }`}
//                   >
//                     *{' '}
//                   </span>
//                   {field.label}
//                 </label>
//                 <FormError>
//                   {
//                     (errors[field.id as keyof TDynamicSchema] as FieldError)
//                       ?.message
//                   }
//                 </FormError>
//               </div>
//             )}
//             {field.type === 'button' && (
//               <div className="flex flex-col gap-2">
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-mint-500 text-white font-medium rounded-md hover:bg-mint-600 focus:outline-none focus:ring-2 focus:ring-mint-500 focus:ring-offset-2 transition-colors"
//                 >
//                   {field.label}
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//         {fields.length > 0 && (
//           <button type="submit" className="btn btn-primary w-fit">
//             Submit
//           </button>
//         )}
//       </form>
//     </div>
//   )
// }

import { zodResolver } from '@hookform/resolvers/zod'
import { FieldError, useForm } from 'react-hook-form'
import { z } from 'zod'
import { TFormField } from '../types/field.type'
import FormError from './FormError'

type TFormBuilderProps = {
  fields: TFormField[]
  handleSelectField: (field: TFormField) => void
}

export default function FormRenderer({
  fields,
  handleSelectField,
}: TFormBuilderProps) {
  const dynamicSchema = z.object(
    fields.reduce((acc, field) => {
      if (field.type === 'button') return acc

      const fieldSchema =
        field.type === 'checkbox'
          ? field.required
            ? z.boolean().refine(v => v === true, {
                message: `${field.label} is required`,
              })
            : z.boolean()
          : field.required
          ? z
              .string()
              .nullable()
              .refine(v => v, {
                message: `${field.label} is required`,
              })
          : z.string().nullable().optional()

      return { ...acc, [field.id]: fieldSchema }
    }, {})
  )

  type TDynamicSchema = z.infer<typeof dynamicSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TDynamicSchema>({
    resolver: zodResolver(dynamicSchema),
    defaultValues: fields.reduce((acc, field) => {
      if (field.type === 'checkbox') acc[field.id] = false
      if (field.type !== 'button' && field.type !== 'checkbox')
        acc[field.id] = ''
      return acc
    }, {} as Record<string, string | boolean>),
  })

  function onSubmit(data: any) {
    console.log('Formdata:', data)
    alert('Form submitted successfully!')
  }

  return (
    <div className="min-h-[calc(100vh-200px)]">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {fields.map(field => (
          <div
            key={field.id}
            onClick={() => handleSelectField(field)}
            className="group rounded-xl border border-neutral-800 bg-neutral-900 p-4
                       hover:border-neutral-600 hover:bg-neutral-850 transition cursor-pointer"
          >
            {/* TEXT */}
            {field.type === 'text' && (
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-300 font-medium">
                  {field.required && (
                    <span className="text-red-500 mr-1">*</span>
                  )}
                  {field.label}
                </label>
                <input
                  type="text"
                  {...register(field.id as keyof TDynamicSchema)}
                  placeholder={field.placeholder}
                  className="rounded-lg bg-neutral-950 border border-neutral-700
                             px-3 py-2 text-neutral-200 outline-none
                             focus:ring-1 focus:ring-neutral-500"
                />
                <FormError>
                  {
                    (errors[field.id as keyof TDynamicSchema] as FieldError)
                      ?.message
                  }
                </FormError>
              </div>
            )}

            {/* TEXTAREA */}
            {field.type === 'textarea' && (
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-300 font-medium">
                  {field.required && (
                    <span className="text-red-500 mr-1">*</span>
                  )}
                  {field.label}
                </label>
                <textarea
                  {...register(field.id as keyof TDynamicSchema)}
                  placeholder={field.placeholder}
                  className="min-h-[100px] resize-y rounded-lg bg-neutral-950
                             border border-neutral-700 px-3 py-2 text-neutral-200
                             focus:ring-1 focus:ring-neutral-500 outline-none"
                />
                <FormError>
                  {
                    (errors[field.id as keyof TDynamicSchema] as FieldError)
                      ?.message
                  }
                </FormError>
              </div>
            )}

            {/* DROPDOWN */}
            {field.type === 'dropdown' && (
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-300 font-medium">
                  {field.required && (
                    <span className="text-red-500 mr-1">*</span>
                  )}
                  {field.label}
                </label>
                <select
                  {...register(field.id as keyof TDynamicSchema)}
                  className="rounded-lg bg-neutral-950 border border-neutral-700
                             px-3 py-2 text-neutral-200 outline-none"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <FormError>
                  {
                    (errors[field.id as keyof TDynamicSchema] as FieldError)
                      ?.message
                  }
                </FormError>
              </div>
            )}

            {/* RADIO */}
            {field.type === 'radio' && (
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-300 font-medium">
                  {field.required && (
                    <span className="text-red-500 mr-1">*</span>
                  )}
                  {field.label}
                </label>
                {field.options?.map(opt => (
                  <label
                    key={opt}
                    className="flex items-center gap-2 text-neutral-300"
                  >
                    <input
                      type="radio"
                      value={opt}
                      {...register(field.id as keyof TDynamicSchema)}
                      className="accent-neutral-500"
                    />
                    {opt}
                  </label>
                ))}
                <FormError>
                  {
                    (errors[field.id as keyof TDynamicSchema] as FieldError)
                      ?.message
                  }
                </FormError>
              </div>
            )}

            {/* CHECKBOX */}
            {field.type === 'checkbox' && (
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  {...register(field.id as keyof TDynamicSchema)}
                  className="accent-neutral-500"
                />
                <label className="text-sm text-neutral-300 font-medium">
                  {field.required && (
                    <span className="text-red-500 mr-1">*</span>
                  )}
                  {field.label}
                </label>
                <FormError>
                  {
                    (errors[field.id as keyof TDynamicSchema] as FieldError)
                      ?.message
                  }
                </FormError>
              </div>
            )}

            {/* BUTTON */}
            {field.type === 'button' && (
              <button
                type="submit"
                className="mt-2 w-fit rounded-lg bg-neutral-700
                           px-5 py-2 text-neutral-100 hover:bg-neutral-600 transition"
              >
                {field.label}
              </button>
            )}
          </div>
        ))}

        {fields.length > 0 && (
          <button
            type="submit"
            className="mt-4 w-fit rounded-lg bg-neutral-800
                       px-6 py-2 text-sm text-neutral-200
                       hover:bg-neutral-700 transition"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  )
}
