import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: '%s | Blog'
  },
  description: 'Um blog comunitário onde todos podem libertar sua criatividade, escrever e compartilhar suas ideias',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} max-w-[1920px] m-auto min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
