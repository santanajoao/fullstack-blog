import Link from 'next/link';
import { Noto_Serif as NotoSerif } from 'next/font/google';

const notoSerif = NotoSerif({ weight: ['400'], subsets: ['latin'] });

export default function Hero() {
  return (
    <section className="bg-[#7ff57d] py-24 px-3 sm:px-5 relative overflow-hidden">
      <span className={`${notoSerif.className} block text-white uppercase text-5xl sm:text-6xl md:text-7xl text-right absolute right-0 top-1/2 -translate-y-1/2 blur-sm tracking-widest -rotate-1 md:animate-pulse select-none`}>
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
  );
}
