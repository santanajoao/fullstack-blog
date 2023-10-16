import React from 'react';
import Image from 'next/image';
import notTopic from '@/assets/not_topic.svg';
import RouteErrorButtons from '../RouteErrorButtons';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <Image width={213} height={213} src={notTopic} alt="Tópico não encontrado" />
      <div className="text-center">
        <h1 className="text-4xl font-bold">Tópico não encontrado &#58; &#40;</h1>
        <p>Infelizmente esse tópico não existe</p>
      </div>
      <RouteErrorButtons />
    </div>
  );
}
