import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import HomeHeader from '@/components/Header/HomeHeader';

interface Params {
  params: {
    id: string;
  };
}

// armazenar a informação se o usuário deu like em um post
// recuperar os likes

// caso o usuário remover o like ou dar like apenas somar o número de likes
// localmente sem fazer outra requisição
// apenas requisitar para incrementar os likes

// buscar um post pelo id deve retornar:
// titulo, descrição, nome e imagem do autor, likes, imagem do post e o conteúdo

export default function Post({ params }: Params) {
  return (
    <>
      <HomeHeader />
      <main className="w-full max-w-2xl mx-auto py-5 px-4">
        <header className="flex flex-col gap-5 p">
          <h1 className="text-3xl font-bold text-left">
            A inteligência artificial vai te substituir?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nisi
            reiciendis eaque sit maiores fugit animi error nemo sed nihil
            doloribus. Eos perferendis officiis, aperiam totam laudantium
            maxime architecto accusantium?
          </p>

          <div className="flex justify-between">
            <a href="empty" className="w-fit flex items-center gap-2">
              <Image
                width={36}
                height={36}
                src=""
                className="w-10 h-10 bg-yellow-300 rounded-full"
                alt="Foto de perfil de {usuário}"
              />
              <span>Chat GPT</span>
            </a>

            <div className="flex items-center">
              <button type="button" className="h-fit rounded-full flex gap-1 hover:text-red-500">
                <span className="sr-only">Gostar</span>
                <span>20</span>
                <AiOutlineHeart className="text-2xl" />
              </button>
            </div>
          </div>

          <Image
            width={768}
            height={768}
            src=""
            className="w-full aspect-video bg-blue-600"
            alt="Imagem da postagem"
          />
        </header>
      </main>
    </>
  );
}
