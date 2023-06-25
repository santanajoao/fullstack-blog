import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props {
  children: ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function Button({ children, type }: Props) {
  return (
    <button
      className={'bg-primaryGreen font-medium p-3 w-full rounded-md hover:brightness-95'}
      type={type}
    >
      {children}
    </button>
  )
}
