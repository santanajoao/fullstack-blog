import React from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import { ChildrenProps } from '@/types/ChildrenProps';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: '%s | Blog',
  },
  description: 'Um blog comunitário onde todos podem libertar sua criatividade, escrever e compartilhar suas ideias',
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} max-w-[1440px] m-auto min-h-screen flex flex-col`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
