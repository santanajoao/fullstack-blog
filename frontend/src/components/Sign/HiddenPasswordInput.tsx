'use client';

import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface Props {
  id: string;
  register: UseFormRegister<any>
  name: string;
  disabled: boolean;
}

export default function HiddenPasswordInput({
  id, register, name, disabled,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityBtnMessage = isVisible ? 'Esconder senha' : 'Mostar senha';
  const EyeIcon = isVisible ? AiOutlineEyeInvisible : AiOutlineEye;

  return (
    <div className="mt-1 relative flex items-center rounded-md h-12 bg-black/10">
      <input
        type={isVisible ? 'text' : 'password'}
        className="px-3 bg-transparent rounded-md w-full h-full"
        id={id}
        {...register(name)}
        disabled={disabled}
      />
      <button
        className="absolute right-0 p-3 disabled:cursor-not-allowed"
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        title={visibilityBtnMessage}
        disabled={disabled}
      >
        <span className="sr-only">{visibilityBtnMessage}</span>

        <EyeIcon className="text-xl" />
      </button>
    </div>
  );
}
