import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

export default function Title({ children }: ChildrenProps) {
  return (
    <h1 className="text-2xl font-bold">{children}</h1>
  );
}
