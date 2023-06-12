import Image from 'next/image';
import Link from 'next/link';

interface Props {
  link: string;
  image: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

export default function   PostItemLink({
  link, image, title, author, date, description,
}: Props) {
  return (
    <Link href={link} className="h-full w-full flex flex-col space-y-1 p-1">
      <Image
        width={232}
        src={image}
        height={144}
        className="object-cover rounded-2xl w-full h-36"
        alt={title}
      />
      <span className="text-xs">{`${author} - ${date}`}</span>
      <h3 className="font-bold text-lg leading-5 line-clamp-3 break-words">
        {title}
      </h3>
      <p className="mt-1 text-justify line-clamp-4 break-words">{description}</p>
    </Link>
  );
}
