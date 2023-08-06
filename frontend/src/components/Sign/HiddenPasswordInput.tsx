'use client';

import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface Props {
  id: string;
  register: UseFormRegister<any>
  name: string;
  theme?: 'sign' | 'profile';
}

const themes = {
  sign: {
    container: 'h-12 bg-black/10',
    button: 'p-3',
  },
  profile: {
    container: 'h-10 border-2 border-black',
    button: 'p-2 border-l border-black',
  },
};

export default function HiddenPasswordInput({
  id, register, name, theme = 'sign',
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityBtnMessage = isVisible ? 'Esconder senha' : 'Mostar senha';
  const EyeIcon = isVisible ? AiOutlineEyeInvisible : AiOutlineEye;

  return (
    <div className={`mt-1 relative flex items-center rounded-md ${themes[theme].container}`}>
      <input
        type={isVisible ? 'text' : 'password'}
        className="px-3 bg-transparent rounded-md w-full h-full"
        id={id}
        {...register(name)}
      />
      <button
        className={`absolute right-0 ${themes[theme].button}`}
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
