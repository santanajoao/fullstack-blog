import React, { FormEvent } from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

interface Props extends ChildrenProps {
  onSubmit(event: FormEvent): void;
}

export default function Form({ children, onSubmit }: Props) {
  return (
    <form className="w-full flex flex-col space-y-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
