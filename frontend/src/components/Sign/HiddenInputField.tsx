'use client';

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ErrorMessage from "./ErrorMessage";

interface Props {
  label: string;
  id: string;
  error?: string;
  inputProps: object;
}

export default function HiddenInputField({ label, id, error, inputProps }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const visibilityBtnMessage = isVisible ? 'Esconder senha' : 'Mostar senha';

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium">{label}</label>
      <div className="mt-1 h-12 relative bg-black/5 flex items-center rounded-md">
        <input
          type={isVisible ? 'text' : 'password'}
          className="px-3 bg-transparent rounded-md w-full h-full"
          id={id}
          {...inputProps}
        />
        <button
          className="absolute right-0 p-3"
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          title={visibilityBtnMessage}
        >
          <span className="sr-only">{visibilityBtnMessage}</span>
          {
            isVisible
              ? <AiOutlineEyeInvisible className="text-xl" />
              : <AiOutlineEye className="text-xl" />
          }
        </button>
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
}
