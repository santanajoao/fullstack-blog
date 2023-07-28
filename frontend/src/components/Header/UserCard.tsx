'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import userPicture from '@/../public/user.webp';
import { AuthContext } from '@/contexts/AuthContext';
import SignLinks from './SignLinks';

export default function UserCard() {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut, user, isLoading } = useContext(AuthContext);

  if (!isLoading && !user) {
    return <SignLinks />;
  }

  return (
    <div className="relative" id="user-actions">
      <button
        type="button"
        className="peer flex items-center space-x-2 rounded-full p-1 pl-2 hover:bg-black/5"
        onClick={isLoading ? undefined : () => setIsOpen((prev) => !prev)}
      >
        <span>{user?.username ?? 'usuário'}</span>

        <Image
          className="w-9 h-9 rounded-full object-cover bg-primaryGreen/30 p-1"
          src={user?.imageUrl ?? userPicture}
          alt={`Foto de perfil de ${user?.username}`}
          width={50}
          height={50}
        />
      </button>

      {isOpen && (
        <ul
          className="absolute border w-full bg-white top-full z-10 rounded-md shadow-sm py-4 px-2"
        >
          <li>
            <Link
              href="/profile"
              className="block py-2 px-2 hover:bg-black/10"
            >
              Perfil
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="w-full text-left py-2 px-2 hover:bg-black/10"
              onClick={signOut}
            >
              Sair
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
