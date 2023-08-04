import { Account } from '@/types/Account';
import { TPost } from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import defaultUserPicture from 'public/user.webp';
import { dateToDayMonthString } from '@/utils/date';

interface Props {
  account: Account;
  post: TPost;
}

export default function AuthorCard({ account, post }: Props) {
  const creationDate = new Date(post.createdAt);

  return (
    <Link href={`/author/${account.id}`} className="w-fit flex items-center gap-2">
      <Image
        width={40}
        height={40}
        src={account.imageUrl ?? defaultUserPicture}
        className="w-10 h-10 rounded-full bg-zinc-300 object-cover"
        alt="Foto de perfil de {usuário}"
      />
      <div className="flex flex-col">
        <span>{account.username}</span>
        <span className="text-sm">
          Publicado em
          {' '}
          <time dateTime={post.createdAt}>
            {dateToDayMonthString(creationDate)}
          </time>
        </span>
      </div>
    </Link>
  );
}
