'use client';

import Image from 'next/image';
import React, {
  ChangeEvent, useRef, useState,
} from 'react';
import { BiImageAdd } from 'react-icons/bi';

interface Props {
  value: string;
}

export default function ImageInput({ value: _value }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>(_value);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files || files.length === 0) return;

    URL.revokeObjectURL(value);
    const file = files[0];
    const url = URL.createObjectURL(file);

    setValue(url);
  };

  return (
    <div className="group relative rounded-xl overflow-hidden h-40 w-40 border-2 border-black">
      <input
        onChange={handleChange}
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
      />

      <Image
        width={160}
        height={160}
        src={value}
        alt="Imagem de perfil de username"
        className="h-full w-full bg-primaryGreen object-cover"
      />

      <button
        type="button"
        onClick={handleClick}
        className="p-1 bg-black/20 opacity-0 flex text-white absolute h-full aspect-square top-0 left-0 flex-col items-center justify-center group-hover:opacity-100 focus:opacity-100"
      >
        <BiImageAdd className="text-4xl" />
        <span className="text-sm text-center font-bold">Editar imagem de perfil</span>
      </button>
    </div>
  );
}
