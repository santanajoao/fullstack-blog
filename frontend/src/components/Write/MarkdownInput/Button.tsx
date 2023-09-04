import React, { MouseEventHandler } from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

interface Props extends ChildrenProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
}

export default function Button({ children, onClick, selected = false }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        border-b-2 p-1 px-3
        ${selected ? 'border-primaryGreen' : ''}
      `}
      type="button"
    >
      {children}
    </button>
  );
}
