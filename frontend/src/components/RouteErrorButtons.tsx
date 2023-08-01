'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function RouteErrorButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-4 text-white">
      <button
        onClick={() => router.back()}
        type="button"
        className="bg-zinc-800 px-2 py-1 rounded-md"
      >
        Voltar
      </button>

      <button
        onClick={() => router.refresh()}
        type="button"
        className="bg-zinc-800 px-2 py-1 rounded-md"
      >
        Recarregar
      </button>
    </div>
  );
}
