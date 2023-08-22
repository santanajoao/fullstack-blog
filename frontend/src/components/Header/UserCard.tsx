'use client';

import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import userPicture from 'public/profile.svg';
import { AuthContext } from '@/contexts/AuthContext';
import SignLinks from './SignLinks';

export default function UserCard() {
  const [isOpen, setIsOpen] = useState(false);
  const userCard = useRef(null);
  const { signOut, user, isLoading } = useContext(AuthContext);

  const closeOnClickOut = (event: MouseEvent) => {
    if (!userCard.current) return null;

    const userCardEl = userCard.current as Node;
    const eventEl = event.target as Node;
    const clickedOut = userCardEl !== eventEl && !userCardEl.contains(eventEl);
    if (clickedOut) {
      setIsOpen(false);
    }
    return null;
  };

  useEffect(() => {
    document.addEventListener('click', closeOnClickOut);
  }, []);

  if (!isLoading && !user) {
    return <SignLinks />;
  }

  return (
    <div className="relative" ref={userCard}>
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
          className="absolute right-0 border w-36 bg-white top-full z-10 rounded-md shadow-sm py-4 px-2"
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
