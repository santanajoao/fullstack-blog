import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './style.module.css';

interface Props {
  children: string;
  className?: string;
}

export default function Markdown({ children, className }: Props) {
  return (
    <ReactMarkdown
      className={`${styles.markdown} ${className}`}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
}
