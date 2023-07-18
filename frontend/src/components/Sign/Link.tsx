import React from 'react';
import { ChildrenProps } from '@/types/ChildrenProps';
import Link from 'next/link';

interface Props extends ChildrenProps {
  href: string;
}

export default function SignLink({ href, children }: Props) {
  return (
    <Link href={href} className="text-sm mt-4 hover:underline hover:text-zinc-700">
      {children}
    </Link>
  );
}
