import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

export default function FieldsWrapper({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col space-y-4">{children}</div>
  );
}
