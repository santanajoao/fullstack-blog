import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

interface Props extends ChildrenProps {
  padding?: boolean;
}

export default function Article({ children, padding = true }: Props) {
  const paddingClass = 'px-3 sm:px-5 py-4 sm:py-6';

  return (
    <article
      className={padding ? paddingClass : undefined}
    >
      {children}
    </article>
  );
}
