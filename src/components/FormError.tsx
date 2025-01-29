import React from 'react'

export default function FormError({ children }: { children: React.ReactNode }) {
  return <small className="text-red-500">{children}</small>
}
