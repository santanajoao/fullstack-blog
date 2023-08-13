'use client';

import HomeHeader from '@/components/Header/HomeHeader';
import Sign from '@/components/Sign';
import ImageInput from '@/components/Write/ImageInput';
import MarkdownInput from '@/components/Write/MarkdownInput';
import Textarea from '@/components/Write/Textarea';
import React from 'react';

export default function WritePage() {
  return (
    <>
      <HomeHeader />
       <main className="w-full max-w-2xl mx-auto py-5 px-4">
        <form className="flex flex-col gap-5">
          <Textarea placeholder="Título" className="text-3xl font-bold" />

          <Textarea placeholder="Descrição da sua publicação" rows={3}/>

          <ImageInput />

          <MarkdownInput />

          <Sign.Button type="submit">Publicar</Sign.Button>
        </form>
       </main>
    </>
  );
}
