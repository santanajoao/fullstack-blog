import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

export default function Item({ children }: ChildrenProps) {
  return (
    <li className="w-full max-w-2xl border-t hover:brightness-90 bg-white transition-[filter]">
      {children}
    </li>
  );
}
