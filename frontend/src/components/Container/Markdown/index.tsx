/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import styles from './style.module.css';

interface Props {
  children: string;
  className?: string;
}

export default function Markdown({ children, className }: Props) {
  return (
    <ReactMarkdown
      components={{
        h1: 'h2',
        h2: 'h3',
        h3: 'h4',
        h4: 'h5',
        h5: 'h6',
        h6: 'p',
        a: (args) => (
          <a target="_blank" href={args.href} rel="noreferrer">{args.children}</a>
        ),
        img: (args) => (
          args.src
            ? (
              <Image
                priority={false}
                width={640}
                height={360}
                src={args.src ?? ''}
                alt={args.alt ?? 'Imagem exibida pelo autor através de markdown'}
              />
            ) : null
        ),
      }}
      className={`${styles.markdown} ${className}`}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
}
