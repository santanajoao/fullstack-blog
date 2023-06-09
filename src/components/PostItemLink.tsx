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

export default function PostItemLink({
  link, image, title, author, date, description,
}: Props) {
  return (
    <Link href={link} className="h-full w-full flex flex-col space-y-1 p-2">
      <Image
        width={224}
        src={image}
        height={224}
        className="object-cover rounded-2xl w-full"
        alt={title}
      />
      <span className="text-xs">{`${author} - ${date}`}</span>
      <h3 className="font-bold text-lg leading-5">
        {title}
      </h3>
      <p className="mt-1 text-justify">{description}</p>
    </Link>
  );
}
