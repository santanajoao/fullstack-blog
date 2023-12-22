import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  link: string;
  topic: string;
  image: string;
}

export default function TopicLink({ link, image, topic }: Props) {
  return (
    <Link href={link} className="h-full w-full rounded-2xl block overflow-hidden">
      <Image
        width={320}
        src={image}
        height={320}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform bg-primaryGreen bg-opacity-50"
        alt={topic}
      />

      <h3 className="bg-black text-xs sm:text-sm xl:text-base bg-opacity-20 px-1 rounded-lg text-white absolute font-bold text-center z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {topic}
      </h3>
    </Link>
  );
}
