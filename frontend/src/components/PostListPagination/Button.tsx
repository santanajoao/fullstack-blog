import { ChildrenProps } from '@/types/ChildrenProps';
import React, { ComponentProps } from 'react';

interface Props extends ChildrenProps {
  type: ComponentProps<'button'>['type'];
  onClick?: ComponentProps<'button'>['onClick'];
}

export default function Button({ type, onClick, children }: Props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      className="mt-2 w-full border-zinc-300 border rounded-md py-2 px-4 hover:bg-zinc-200 font-bold"
    >
      { children }
    </button>
  );
}
