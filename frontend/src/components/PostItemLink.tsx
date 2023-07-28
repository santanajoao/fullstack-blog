import React from 'react';
import { dateToDayMonthString } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  link: string;
  image: string;
  title: string;
  author: string;
  date: Date;
  description: string;
}

export default function PostItemLink({
  link, image, title, author, date, description,
}: Props) {
  const dayMonth = dateToDayMonthString(date);

  return (
    <Link href={link} className="h-full w-full flex flex-col gap-1 pt-2 px-1 pb-3">
      <Image
        width={599}
        src={image}
        height={337}
        className="object-cover rounded-2xl w-full aspect-video bg-primaryGreen bg-opacity-50"
        alt={title}
      />
      <span className="text-xs mt-1">{`${author} - ${dayMonth}`}</span>
      <h3 className="font-bold text-lg leading-6 line-clamp-3 break-words">
        {title}
      </h3>
      <p className="text-justify line-clamp-4 break-words leading-5">{description}</p>
    </Link>
  );
}
