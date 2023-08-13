import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

interface Props extends ChildrenProps {
  className?: string;
}

export default function FieldsWrapper({ children, className }: Props) {
  return (
    <div className={`flex flex-col space-y-4 ${className}`}>{children}</div>
  );
}
