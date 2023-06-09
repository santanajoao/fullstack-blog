import Link from "next/link";
import { Noto_Serif as NotoSerif } from "next/font/google";
import Image from "next/image";

const notoSerif = NotoSerif({ weight: ['400'], subsets: ['latin'] });

type Topics = {
  name: string,
  image: string,
  link: string,
};

const topics: Topics[] = [
  { name: 'Moda', image: '/moda.jpg', link: '' },
  { name: 'Inteligência Artificial', image: '/inteligencia-artificial.jpg', link: '' },
  { name: 'Saúde', image: '/saude.jpg', link: '' },
  { name: 'Carreira', image: '/carreira.jpg', link: '' },
  { name: 'Progamação', image: '/progamacao.jpg', link: '' },
  { name: 'Tecnologia', image: '/tecnologia.jpg', link: '' },
  { name: 'Esporte', image: '/esporte.jpg', link: '' },
  { name: 'Hobbies', image: '/hobbie.jpg', link: '' },
  { name: 'Música', image: '/musica.jpg', link: '' },
  { name: 'Jogos', image: '/jogos.jpg', link: '' },
];

export default function Home() {
  return (
    <>
      <header className="flex justify-between px-3 items-center py-2 border-b sm:px-5 sm:py-3">
        <Link href="/">
          <span className="font-bold text-2xl underline">Blog</span>
        </Link>

        <div className="space-x-3">
          <Link href="/signup" className="px-3 py-1 rounded-md hover:bg-zinc-100 active:bg-zinc-200">
            Cadastrar
          </Link>

          <Link href="/signin" className="bg-black text-white px-3 py-1 rounded-md">
            Login
          </Link>
        </div>
      </header>
      
      <main>
        <section className="bg-[#7ff57d] py-24 px-3 sm:px-5 relative overflow-hidden">
          <span className={`${notoSerif.className} block text-white uppercase text-5xl sm:text-6xl md:text-7xl text-right absolute right-0 top-1/2 -translate-y-1/2 blur-sm tracking-widest`}>
            Escreva. Leia. Crie. Imagine. Compartilhe. Informe. Seja.
          </span>

          <div className="z-10 relative">
            <h1 className={`${notoSerif.className} text-3xl sm:text-4xl max-w-lg mb-7`}>
              Liberte sua criatividade. Compartilhe. Escreva.
            </h1>
            
            <Link href="/write" className="bg-black text-white rounded-full px-3 py-2">
              Começar a escrever
            </Link>
          </div>
        </section>

        <section className="px-3 sm:px-5 py-4 sm:py-6">
          <article>
            <h2 className="font-bold text-lg sm:text-2xl">
              Explore os tópicos mais falados
            </h2>

            <ul className="flex space-x-3 mt-3 overflow-y-auto max-w-full hidden-scroll">
              {topics.map(({ name, link, image }) => (
                <li key={name} className="h-28 w-28 flex-shrink-0 rounded-2xl overflow-hidden relative">
                  <Link href={link} className="h-full w-full flex">
                    <Image src={image} alt={name} height={500} width={500} className="h-full w-full object-cover"/>
                    <h3 className="absolute font-bold text-center z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                      {name}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}
