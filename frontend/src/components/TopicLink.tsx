import Image from 'next/image';
import Link from 'next/link';

interface Props {
  link: string;
  topic: string;
  image: string;
}

export default function TopicLink({ link, image, topic }: Props) {
  return (
    <Link href={link} className="h-full w-full flex">
      <Image
        width={256}
        src={image}
        height={256}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
        alt={topic}
      />

      <h3 className= "bg-black bg-opacity-20 px-1 rounded-lg text-white decoration-double absolute font-bold text-center z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {topic}
      </h3>
    </Link>
  )
}
