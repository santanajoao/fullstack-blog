import Link from 'next/link';
import BlogLogo from './BlogLogo';

export default function Header() {
  return (
    <header className="flex justify-between px-3 items-center py-2 border-b border-zinc-300 sm:px-5 sm:py-3">
      <Link href="/">
        <BlogLogo size="small" />
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
  );
}
