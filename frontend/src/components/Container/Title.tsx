import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

export default function Title({ children }: ChildrenProps) {
  return (
    <h2 className="font-bold text-lg sm:text-2xl mb-3">{children}</h2>
  );
}
