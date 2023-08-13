import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './style.module.css';

interface Props {
  children: string;
  className?: string;
  contentEditable?: boolean;
}

export default function Markdown({ children, className }: Props) {
  return (
    <ReactMarkdown
      children={children}
      className={`${styles.markdown} ${className}`}
      remarkPlugins={[remarkGfm]}
    />
  );
}
