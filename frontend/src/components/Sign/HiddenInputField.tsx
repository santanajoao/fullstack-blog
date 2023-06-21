'use client';

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  label: string;
  id: string;
}

export default function HiddenInputField({ label, id }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium">{label}</label>
      <div className="mt-1 h-12 relative bg-black/5 flex items-center rounded-md">
        <input
          type={isVisible ? 'text' : 'password'}
          className="px-3 bg-transparent rounded-md w-full h-full"
          id={id}
        />
        <button
          className="absolute right-3"
          type="button"
          onClick={() => setIsVisible(!isVisible)}
        >
          {
            isVisible
              ? <AiOutlineEyeInvisible className="text-xl" />
              : <AiOutlineEye className="text-xl" />
          }
        </button>
      </div>
    </div>
  );
}
