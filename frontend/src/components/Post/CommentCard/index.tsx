'use client';

import BlurModalContainer from '@/components/Container/BlurModalContainer';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiDotsVertical, BiSolidUpvote, BiUpvote } from 'react-icons/bi';
import EditionForm, { CommentFields } from '../EditionForm';
import { Comment } from '@/types/Comment';
import profilePicture from '@/assets/profile.svg';

interface Props {
  comment: Comment,
  showActions?: boolean;
  onDelete?: (id: string) => void;
  onEdit?: (id: string, fields: CommentFields) => boolean | Promise<boolean>;
  onUpvote?: (commentId: string, isUpvoted: boolean) => boolean | Promise<boolean>;
}

// replicar lógica dos likes no upvote

export default function CommentCard({
  showActions = false,
  comment,
  onDelete,
  onEdit,
  onUpvote,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    if (onDelete) {
      onDelete(comment.id);
    }
  };

  const handleSave = async (fields: CommentFields) => {
    const success = onEdit ? await onEdit(comment.id, fields) : true;

    if (success) {
      setIsEditing(false);
    }
  };

  const handleUpvote = async () => {
    const success = onUpvote ? await onUpvote(comment.id, upvoted) : true;

    if (success) {
      setUpvoted((prev) => !prev);
    }
  };

  const modalActions = [
    { name: 'Editar', onClick: () => setIsEditing(true) },
    { name: 'Apagar', onClick: handleDelete },
  ];

  return (
    <div className="bg-neutral-200 border rounded-md border-black/10">
      <header className="items-center px-2 py-1 border-b-2 border-black/10 flex justify-between relative">
        <a
          href={`/author/${comment.account.id}`}
          className="flex w-fit items-center gap-1 overflow-hidden"
        >
          <Image
            src={comment.account.imageUrl ?? profilePicture}
            width={30}
            height={30}
            alt=""
            className="rounded-full border-2 overflow-ellipsis overflow-hidden border-primaryGreen"
          />

          <span className="font-medium">{comment.account.username}</span>
        </a>

        <BlurModalContainer isActive={showActions && isOpen} onBlur={() => setIsOpen(false)}>
          <span className="flex items-center text-base gap-2">
            <button
              type="button"
              className="flex items-center"
              aria-label="gostar"
              onClick={handleUpvote}
            >
              <span className="text-sm">{ comment.upvotes }</span>
              {upvoted ? <BiSolidUpvote /> : <BiUpvote />}
            </button>

            {showActions && (
              <button
                aria-label="Abrir menu de ações"
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <BiDotsVertical />
              </button>
            )}
          </span>

          {showActions && (
            <ul
              className={`
                ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}
                absolute overflow-hidden z-20 right-0 -translate-x-[35%] top-0
                -translate-y-1/2 transition-opacity border border-black/10 rounded-md
              `}
            >
              {modalActions.map((action) => (
                <li key={action.name}>
                  <button
                    type="button"
                    className="p-2 border-b border-black/10 px-4 bg-white hover:brightness-95 w-full"
                    onClick={action.onClick}
                  >
                    {action.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </BlurModalContainer>
      </header>

      {isEditing ? (
        <EditionForm
          onCancel={() => setIsEditing(false)}
          onSave={handleSave}
          initialValues={{ comment: comment.comment }}
        />
      ) : (
        <p className="px-2 py-2">{comment.comment}</p>
      )}
    </div>
  );
}
