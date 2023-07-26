import React from 'react';
import Image from 'next/image';
import HomeHeader from '@/components/Header/HomeHeader';
import { Post } from '@/types/Post';
import userPicture from '@/../public/user.webp';
import LikeButton from '@/components/LikeButton';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './style.module.css';

interface Params {
  params: {
    id: string;
  };
}

type PostData = Post & {
  account: {
    imageUrl: string | null;
    id: string,
  };
};

export default async function PostPage({ params }: Params) {
  const response = await fetch(`http://backend:3001/posts/${params.id}`);
  const postData = await response.json() as PostData;

  return (
    <>
      <HomeHeader />
      <main className="w-full max-w-2xl mx-auto py-5 px-4">
        <header className="flex flex-col gap-5 p">
          <h1 className="text-3xl font-bold text-left">
            {postData.title}
          </h1>
          <p>{postData.description}</p>

          <div className="flex justify-between">
            <Link href={`/writer/${postData.account.id}`} className="w-fit flex items-center gap-2">
              <Image
                width={36}
                height={36}
                src={postData.account.imageUrl ?? userPicture}
                className="w-10 h-10 rounded-full bg-zinc-300 object-cover"
                alt="Foto de perfil de {usuário}"
              />
              <span>{postData.account.username}</span>
            </Link>

            <div className="flex items-center">
              <LikeButton
                postId={params.id}
              />
            </div>
          </div>

          <Image
            width={768}
            height={768}
            src={postData.imageUrl}
            className="w-full aspect-video bg-zinc-300 object-cover"
            alt="Imagem da postagem"
          />
        </header>

        <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm]}>
          {postData.content}
        </ReactMarkdown>
      </main>
    </>
  );
}
