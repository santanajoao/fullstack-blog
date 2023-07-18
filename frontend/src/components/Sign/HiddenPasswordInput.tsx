'use client';

import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface Props {
  id: string;
  register: UseFormRegister<any>
  name: string;
}

export default function HiddenPasswordInput({ id, register, name }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityBtnMessage = isVisible ? 'Esconder senha' : 'Mostar senha';
  const EyeIcon = isVisible ? AiOutlineEyeInvisible : AiOutlineEye;

  return (
    <div className="mt-1 h-12 relative bg-black/5 flex items-center rounded-md">
      <input
        type={isVisible ? 'text' : 'password'}
        className="px-3 bg-transparent rounded-md w-full h-full"
        id={id}
        {...register(name)}
      />
      <button
        className="absolute right-0 p-3"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        title={visibilityBtnMessage}
      >
        <span className="sr-only">{visibilityBtnMessage}</span>

        <EyeIcon className="text-xl" />
      </button>
    </div>
  );
}
