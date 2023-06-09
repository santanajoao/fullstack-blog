import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

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
      <Header />
      <main>
        <Hero />
        <section className="px-3 sm:px-5 py-4 sm:py-6 space-y-5">
          <article>
            <h2 className="font-bold text-lg sm:text-2xl">
              Explore os tópicos mais falados
            </h2>

            <ul className="flex space-x-3 mt-3 overflow-y-auto max-w-full hidden-scroll">
              {topics.map(({ name, link, image }) => (
                <li key={name} className="h-28 w-28 flex-shrink-0 rounded-2xl overflow-hidden relative group">
                  <Link href={link} className="h-full w-full flex">
                    <Image src={image} alt={name} height={500} width={500} className="h-full w-full object-cover group-hover:scale-105 transition-transform"/>
                    <h3 className= "bg-black bg-opacity-20 px-1 rounded-lg text-white decoration-double absolute font-bold text-center z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
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

            <ul className="flex space-x-1 mt-3 overflow-y-auto max-w-full hidden-scroll">
              {posts.map(({ author, date, description, image, title, link }) => (
                <li key={title} className="w-60 flex-shrink-0 overflow-hidden relative rounded-2xl hover:brightness-90 bg-white transition-[filter]">
                  <Link href={link} className="h-full w-full flex flex-col space-y-1 p-2">
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
      
      <Footer />
    </>
  )
}
