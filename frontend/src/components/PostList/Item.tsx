import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';

export default function Item({ children }: ChildrenProps) {
  return (
    <li className="w-full max-w-2xl border-t hover:brightness-90 bg-white transition-[filter]">
      {children}
    </li>
  );
}
