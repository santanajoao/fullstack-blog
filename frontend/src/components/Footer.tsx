import React from 'react';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import BlogLogo from './BlogLogo';

export default function Footer() {
  return (
    <footer className="px-3 sm:px-5 py-4 border-t border-zinc-300 flex justify-between items-center">
      <div>
        <Link href="/" className="pr-2 mr-2 sm:pr-5 sm:mr-5">
          <BlogLogo size="big" />
        </Link>

        <Link href="/cookies" className="text-xs underline hover:text-zinc-700">
          Política de Cookies
        </Link>
      </div>

      <div>
        <div className="flex space-x-3">
          <a
            href="https://github.com/santanajoao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github do desenvolvedor"
            className="text-2xl hover:text-zinc-700"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/joaopedrosantanac/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin do desenvolvedor"
            className="text-2xl hover:text-zinc-700"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
