import Image, { ImageProps } from 'next/image';
import React from 'react';

interface Props extends ImageProps {}

export default function ProfileImage(props: Props) {
  const { className, ...others } = props;
  return (
    <Image
      {...others}
      className={`${className} h-40 w-40 rounded-xl object-cover border-2`}
    />
  );
}
