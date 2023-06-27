import { ChildrenProps } from '@/types/ChildrenProps';
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ChildrenProps {
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
