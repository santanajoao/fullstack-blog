import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between px-3 items-center py-2 border-b sm:px-5 sm:py-3">
        <Link href="/">
          <span className="font-bold text-2xl underline">Blog</span>
        </Link>

        <div className="space-x-3">
          <Link href="/signup" className="px-3 py-1 rounded-sm hover:bg-zinc-100 active:bg-zinc-200">
            Cadastrar
          </Link>

          <Link href="/signin" className="bg-black text-white px-3 py-1 rounded-sm">
            Login
          </Link>
        </div>
      </header>
      <main>Home</main>
    </>
  )
}
