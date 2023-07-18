import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

interface Props extends ChildrenProps {}

export default function ErrorMessage({ children }: Props) {
  if (!children) return null;

  return (
    <span className="text-red-500 mt-1 text-sm">{children}</span>
  );
}
