import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
  href: string;
  children: ReactNode;
}

export default function SignLink({ href, children }: Props) {
  return (
    <Link href={href} className="text-sm mt-4 hover:underline hover:text-zinc-700">
      {children}
    </Link>
  )
}
