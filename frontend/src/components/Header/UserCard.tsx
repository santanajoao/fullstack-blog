'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import userPicture from '@/assets/profile.svg';
import { useUser } from '@/contexts/AuthContext';
import SignLinks from './SignLinks';
import BlurModalContainer from '../Container/BlurModalContainer';

export default function UserCard() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading, signOut } = useUser();

  if (!isLoading && !user) {
    return <SignLinks />;
  }

  const ancors = [
    {
      text: 'Perfil',
      link: user ? `/author/${user.id}` : '#',
    },
    {
      text: 'Editar perfil',
      link: '/profile',
    },
  ];

  return (
    <BlurModalContainer
      isActive={isOpen}
      className="relative"
      onBlur={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="peer flex items-center space-x-1 rounded-full p-1 hover:bg-black/5"
        onClick={isLoading ? undefined : () => setIsOpen((prev) => !prev)}
      >
        {user?.username && <span className="px-1">{user?.username}</span>}

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
          className="absolute right-0 border w-36 bg-white top-full z-20 rounded-md shadow-sm py-4 px-2"
        >
          {ancors.map((ancor) => (
            <li key={ancor.link}>
              <Link
                href={ancor.link}
                className="block py-2 px-2 hover:bg-black/10"
              >
                {ancor.text}
              </Link>
            </li>
          ))}

          <li>
            <button
              type="button"
              className="w-full h-full text-left py-2 px-2 hover:bg-black/10"
              onClick={signOut}
            >
              Sair
            </button>
          </li>
        </ul>
      )}
    </BlurModalContainer>
  );
}
