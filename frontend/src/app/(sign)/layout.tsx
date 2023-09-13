'use client';

import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import BlogLogo from '@/components/BlogLogo';
import HeaderWrapper from '@/components/Header/HeaderWrapper';
import { ChildrenProps } from '@/types/ChildrenProps';
import { AuthContext } from '@/contexts/AuthContext';

export default function SignLayout({ children }: ChildrenProps) {
  const { redirect, isLoading } = useContext(AuthContext);

  useEffect(() => {
    redirect({ requireLogin: false, to: '/', getBack: false });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <HeaderWrapper>
        <Link href="/">
          <BlogLogo size="small" />
        </Link>
      </HeaderWrapper>
      <main className="flex-1 flex items-center justify-center py-4">
        <div className="w-full p-2 sm:p-0 max-w-sm flex flex-col items-center">
          {children}
        </div>
      </main>
    </>
  );
}
