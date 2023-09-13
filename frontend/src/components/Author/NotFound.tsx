import React from 'react';
import Image from 'next/image';
import notProfile from '@/assets/not_profile.svg';
import RouteErrorButtons from '../RouteErrorButtons';

export default function NotFound() {
  return (
    <main className="flex items-center justify-center flex-col gap-4 h-screen text-zinc-800 bg-slate-200">
      <Image
        src={notProfile}
        height={160}
        alt="Perfil humano, cabeça e ombros minimalistas. Com um X vermelho indicando a não existência"
        className="h-40"
      />

      <div className="text-center">
        <h1
          className="text-4xl font-bold"
        >
          Autor não encontrado &#58; &#40;
        </h1>
        <p>Infelizmente esse autor não existe</p>
      </div>

      <RouteErrorButtons />
    </main>
  );
}
