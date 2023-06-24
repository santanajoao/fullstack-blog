import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SignButton({ children, className }: Props) {
  return (
    <button
      className={`${className} bg-primaryGreen font-medium p-3 w-full rounded-md hover:brightness-95`}
      type="submit"
    >
      {children}
    </button>
  )
}
