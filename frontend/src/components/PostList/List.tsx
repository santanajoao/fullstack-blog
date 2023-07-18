import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

export default function List({ children }: ChildrenProps) {
  return (
    <ul className="grid gap-5 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
      {children}
    </ul>
  );
}
