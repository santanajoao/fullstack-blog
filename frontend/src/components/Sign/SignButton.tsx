import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

export default function SignButton({ children }: Props) {
  return (
    <button
      className="bg-primaryGreen font-medium p-3 w-full rounded-md hover:brightness-95"
      type="submit"
    >
      {children}
    </button>
  )
}
