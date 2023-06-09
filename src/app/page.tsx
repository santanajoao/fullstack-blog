import Link from "next/link";
import { Noto_Serif as NotoSerif } from "next/font/google";
import Image from "next/image";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

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

const posts = [
  { image: '/inteligencia-artificial.jpg', author: 'João Pedro', date: '08/06', title: 'A inteligência artificial vai te substituir?', description: 'Entenda o verdadeiro impacto do avanço das inteligências artificiais no seu trabalho e...', link: '' },
  { image: '/esporte.jpg', author: 'Anderson Souza', date: '08/06', title: 'Quantas series fazer para hipertrofia?', description: 'Sempre ficou em dúvida em quantas seríes deve fazer? Sempre ouviu que cada caso é...', link: '' },
  { image: '/progamacao.jpg', author: 'Arnaldo Teves', date: '07/06', title: 'Como eu aprendi javascript', description: 'Você sempre sonhou em ser programador, mas não sabe por onde começar? Nesse post...', link: '' },
  { image: '/musica.jpg', author: 'Carla Lorena', date: '12/05', title: 'Músicas para você que quer explorar o mundo...', description: 'Gosta de rock e cansou de ouvir só as mesmas músicas? Aqui mostrare para você desde a...', link: '' },
  { image: '/moda.jpg', author: 'Marcos Vinicius', date: '23/02', title: 'Combinações simples, mas estilosas para...', description: 'Se você é lowprofile provavelmente já teve dificuldade em variar suas...', link: '' },
];

export default function Home() {
  return (
    <>
      <header className="flex justify-between px-3 items-center py-2 border-b border-zinc-300 sm:px-5 sm:py-3">
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

        <section className="px-3 sm:px-5 py-4 sm:py-6 space-y-5">
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

          <article>
            <h2 className="font-bold text-lg sm:text-2xl">
              Publicações em alta
            </h2>

            <ul className="flex space-x-5 mt-3 overflow-y-auto max-w-full hidden-scroll">
              {posts.map(({ author, date, description, image, title, link }) => (
                <li key={title} className="w-56 flex-shrink-0 overflow-hidden relative">
                  <Link href={link} className="h-full w-full flex flex-col space-y-1">
                    <Image src={image} alt={title} height={500} width={500} className="object-cover rounded-2xl"/>
                    <span className="text-xs">{`${author} - ${date}`}</span>
                    <h3 className="font-bold text-lg leading-5">
                      {title}
                    </h3>
                    <p className="mt-1 text-justify">{description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
      <footer className="px-3 sm:px-5 py-4 border-t border-zinc-300 flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="font-bold text-4xl underline pr-3 mr-3 border-r border-zinc-300 sm:pr-5 sm:mr-5">
              Blog
            </span>
          </Link>
          
          <Link href="/cookies" className="text-xs underline hover:text-zinc-700">
            Política de Cookies
          </Link>
        </div>

        <div>
          <div className="flex space-x-3">
            <a href="https://github.com/santanajoao" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-zinc-700">
              <BsGithub />
            </a>

            <a href="https://www.linkedin.com/in/joaopedrosantanac/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-zinc-700">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
