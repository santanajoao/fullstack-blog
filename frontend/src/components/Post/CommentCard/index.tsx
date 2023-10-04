'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { BiDotsVertical, BiSolidUpvote, BiUpvote } from 'react-icons/bi';

interface Props {
  profilePicture: string;
  username: string;
  comment: string;
  showActions: boolean;
  authorId: string;
}

// fechar modal de opções ao desfocar o elemento
// replicar oque foi feito no UserCard

// replicar lógica dos likes no upvote

export default function CommentCard({
  profilePicture, username, comment, authorId, showActions,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [upvoted, setUpvoted] = useState(false);

  return (
    <div className="bg-neutral-200 border rounded-md border-black/10">
      <header className="items-center px-2 py-1 border-b-2 border-black/10 flex justify-between relative">
        <a
          href={`/author/${authorId}`}
          className="flex w-fit items-center gap-1 overflow-hidden"
        >
          <Image
            src={profilePicture}
            width={30}
            height={30}
            alt=""
            className="rounded-full border-2 overflow-ellipsis overflow-hidden border-primaryGreen"
          />

          <span className="font-medium">{username}</span>
        </a>

        <span className="flex items-center text-base gap-2">
          <button type="button" className="flex items-center" onClick={() => setUpvoted((prev) => !prev)}>
            <span className="text-sm">3</span>
            {upvoted ? <BiSolidUpvote /> : <BiUpvote />}
          </button>

          {showActions && (
            <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
              <BiDotsVertical />
            </button>
          )}
        </span>

        {showActions && (
          <ul className={`
            ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
            transition-opacity border border-black/10 absolute rounded-md overflow-hidden z-20 right-0 -translate-x-[35%] top-0 -translate-y-1/2
          `}
          >
            <li>
              <button
                type="button"
                className="p-2 border-b border-black/10 px-4 bg-white hover:brightness-95 w-full"
              >
                Editar
              </button>
            </li>
            <li>
              <button
                type="button"
                className="p-2 border-b border-black/10 px-4 bg-white hover:brightness-95 w-full"
              >
                Apagar
              </button>
            </li>
          </ul>
        )}
      </header>

      <p className="px-2 py-2">{comment}</p>
    </div>
  );
}
