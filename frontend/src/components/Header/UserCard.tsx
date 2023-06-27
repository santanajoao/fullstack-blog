'use client';

import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import userPicture from '@/../public/user.webp';
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

interface Props {
  username: string;
  imageUrl: string | StaticImageData | null;
}

export default function UserCard({ username, imageUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { signOut } = useContext(AuthContext);

  return (
    <div className="relative" id="user-actions">
      <button
        className="peer flex items-center space-x-2 rounded-full p-1 pl-2 hover:bg-black/5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{username}</span>

        <Image
          className="w-9 h-9 rounded-full object-cover bg-primaryGreen/30 p-1"
          src={imageUrl || userPicture}
          alt={`Foto de perfil de ${username}`}
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
