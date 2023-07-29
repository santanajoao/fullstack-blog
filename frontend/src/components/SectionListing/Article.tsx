import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

export default function Article({ children }: ChildrenProps) {
  return (
    <article className="px-3 sm:px-5 py-4 sm:py-6 space-y-5">{children}</article>
  );
}
