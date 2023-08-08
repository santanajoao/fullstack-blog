import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

export default function Section({ children }: ChildrenProps) {
  return (
    <section className="mb-3 sm:mb-5">{children}</section>
  );
}
