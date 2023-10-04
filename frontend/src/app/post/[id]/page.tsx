import React from 'react';
import HomeHeader from '@/components/Header/HomeHeader';
import Footer from '@/components/Footer';
import Post from '@/components/Post';
import Container from '@/components/Container';
import { requestPostById } from '@/services/posts';
import CommentForm from '@/components/Post/CommentForm';
import CommentCard from '@/components/Post/CommentCard';
import profilePicture from '@/assets/profile.svg';

interface Params {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: Params) {
  const response = await requestPostById(params.id);

  if (response.status === 404) {
    return <Post.NotFound />;
  }

  // Uma tela de erro faz sentido aqui
  if (!response.success) return null;

  const postData = response.data;

  return (
    <>
      <HomeHeader />
      <main className="w-full max-w-2xl mx-auto py-5 px-4">
        <section>
          <Post.Hero account={postData.account} post={postData} />

          <Container.Markdown className="pt-3">
            {postData.content}
          </Container.Markdown>
        </section>

        <section className="mt-10">
          <header className="flex items-center p-1 border-t-2 border-black/10 justify-between">
            <h2 className="text-xl font-bold">Comentários</h2>
            <span className="font-medium text-sm">14 Comentários</span>
          </header>

          <CommentForm />

          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <CommentCard
                username="Maria Carla"
                profilePicture={profilePicture}
                comment="Que post legal! Continue postando."
              />
            </li>
            <li>
              <CommentCard
                username="Zeca Pagodinho"
                profilePicture={profilePicture}
                comment="Agora eu começo a fazer minhas publicações!"
              />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
