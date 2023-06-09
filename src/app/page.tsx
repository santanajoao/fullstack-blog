import Link from "next/link";
import { Noto_Serif as NotoSerif } from "next/font/google";

const notoSerif = NotoSerif({ weight: ['400'], subsets: ['latin'] });

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
        <section className="bg-[#82f880] py-24 px-3 sm:px-5 relative overflow-hidden">
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
      </main>
    </>
  )
}
