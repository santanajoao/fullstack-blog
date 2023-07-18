import React from 'react';
import Link from 'next/link';

export default function SignLinks() {
  return (
    <div className="space-x-3">
      <Link href="/signup" className="px-3 py-1 rounded-md hover:bg-zinc-100 active:bg-zinc-200">
        Cadastrar
      </Link>

      <Link href="/signin" className="bg-black text-white px-3 py-1 rounded-md">
        Login
      </Link>
    </div>
  );
}
