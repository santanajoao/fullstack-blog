import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

export default function Field({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col">{children}</div>
  );
}
