'use client';

import Image from 'next/image';
import React, {
  ChangeEvent, RefObject, useState,
} from 'react';
import { UseFormRegister } from 'react-hook-form';
import { BiImageAdd } from 'react-icons/bi';

interface Props {
  value: string;
  id: string;
  name: string;
  register: UseFormRegister<any>;
  disabled: boolean;
  _ref?: RefObject<HTMLInputElement>;
}

export default function ImageInput({
  value: _value, id, register, name, disabled, _ref: ref,
}: Props) {
  const [value, setValue] = useState<string>(_value);

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
        {...register(name)}
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
