import React from 'react';

type Size = 'small' | 'big';

interface Props {
  size: Size;
}

const sizes: Record<Size, string> = {
  small: 'text-2xl',
  big: 'text-3xl',
};

export default function BlogLogo({ size }: Props) {
  const sizeClass = sizes[size];

  return (
    <span className={`font-bold ${sizeClass} underline`}>
      Blog
    </span>
  );
}
