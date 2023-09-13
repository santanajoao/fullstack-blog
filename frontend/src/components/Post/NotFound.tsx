import React from 'react';
import Image from 'next/image';
import notPost from '@/assets/not_post.svg';
import RouteErrorButtons from '../RouteErrorButtons';

export default function NotFound() {
  return (
    <main className="flex items-center justify-center flex-col gap-3 sm:gap-10 h-screen text-zinc-800 bg-slate-200 p-3 sm:p-5 ">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
        <Image height={144} src={notPost} className="h-36" alt="Minimalist post picture" />

        <div className="text-center max-w-sm">
          <h1
            className="text-2xl sm:text-3xl font-bold"
          >
            Publicação não encontrada &#58; &#40;
          </h1>
          <p>Infelizmente essa publicação não existe</p>
        </div>
      </div>

      <RouteErrorButtons />
    </main>
  );
}
