import BlogLogo from '@/components/BlogLogo';
import HeaderWrapper from '@/components/Header/HeaderWrapper';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function SignLayout({ children }: LayoutProps) {
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
