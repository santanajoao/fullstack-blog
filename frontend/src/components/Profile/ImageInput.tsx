'use client';

import Image from 'next/image';
import React, { ChangeEvent, RefObject, useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';

interface Props {
  value: string;
  id: string;
  disabled: boolean;
  _ref?: RefObject<HTMLInputElement>;
  onChange: (imageFile: File) => void;
}

export default function ImageInput({
  value: _value, id, disabled, _ref: ref, onChange,
}: Props) {
  const [value, setValue] = useState<string>(_value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) return;

    const file = files[0];
    if (file.type.startsWith('image/')) {
      URL.revokeObjectURL(value);
      const url = URL.createObjectURL(file);
      setValue(url);

      onChange(file);
    }
  };

  return (
    <div className="group relative rounded-xl overflow-hidden h-40 w-40 border-2 border-black">
      <input
        onChange={handleChange}
        ref={ref}
        type="file"
        accept="image/*"
        className="opacity-0 peer absolute"
        id={id}
        disabled={disabled}
      />

      <Image
        width={160}
        height={160}
        src={value}
        alt="Imagem de perfil de username"
        className="h-full w-full bg-primaryGreen object-cover"
      />

      <label
        htmlFor={id}
        className="enabled:cursor-pointer p-1 bg-black/20 opacity-0 flex text-white absolute h-full w-full top-0 flex-col items-center justify-center peer-enabled:hover:opacity-100 peer-enabled:peer-focus:opacity-100"
      >
        <BiImageAdd className="text-4xl" />
        <span className="text-sm text-center font-bold">Editar imagem de perfil</span>
      </label>
    </div>
  );
}
