'use client';

import React, { useContext } from 'react';
import { Account } from '@/types/Account';
import defaultPicture from '@/assets/profile.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillEdit } from 'react-icons/ai';
import { AuthContext } from '@/contexts/AuthContext';
import PostLikeCount from '../PostLikeCount';

interface Props {
  author: Account;
  count: {
    likes: number;
    posts: number;
  }
}

export default function Hero({ author, count }: Props) {
  const { user } = useContext(AuthContext);
  const authorIsUser = user?.id === author.id;

  return (
    <header className="relative bg-primaryGreen px-3 pt-5 sm:px-5 sm:pt-7 flex gap-3 sm:gap-5 items-end mb-8">
      <Image
        width={160}
        height={160}
        src={author.imageUrl || defaultPicture}
        alt={`Imagem de perfil de ${author.username}`}
        className="relative top-8 border-white bg-gray-300 h-40 w-40 rounded-xl object-cover border-2"
      />

      <div className="pb-6 sm:pb-8 space-y-2">
        <div className="flex space-x-2">
          <h1 className="text-2xl w-min sm:w-fit sm:text-3xl font-bold">{author.username}</h1>

          {authorIsUser && (
            <Link title="Editar perfil" href="/profile" className="bg-white h-fit p-1 rounded-md">
              <span className="sr-only">Editar perfil</span>
              <AiFillEdit />
            </Link>
          )}
        </div>

        <PostLikeCount likeCount={count.likes} postCount={count.posts} />
      </div>
    </header>
  );
}
