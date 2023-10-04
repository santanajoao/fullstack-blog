import React from 'react';
import Button from '@/components/PostListPagination/Button';
import profilePicture from '@/assets/profile.svg';
import CommentForm from '../CommentForm';
import CommentCard from '../CommentCard';

export default function CommentSection() {
  return (
    <section className="mt-10">
      <header className="flex items-center p-1 border-t-2 border-black/10 justify-between">
        <h2 className="text-xl font-bold">Comentários</h2>
        <span className="font-medium text-sm">14 Comentários</span>
      </header>

      <CommentForm />

      <ul className="mt-4 flex flex-col gap-2">
        <li>
          <CommentCard
            authorId="123ajsd192"
            showActions={false}
            username="Maria Carla"
            profilePicture={profilePicture}
            comment="Que post legal! Continue postando."
          />
        </li>
        <li>
          <CommentCard
            authorId="1239ahjdi19"
            showActions={false}
            username="Zeca Pagodinho"
            profilePicture={profilePicture}
            comment="Agora eu começo a fazer minhas publicações!"
          />
        </li>
      </ul>

      <Button type="button">
        Ver mais comentários
      </Button>
    </section>
  );
}
