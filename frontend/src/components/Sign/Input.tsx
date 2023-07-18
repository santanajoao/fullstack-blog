import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
  register: UseFormRegister<any>
}

export default function Input({
  id, type, name, register,
}: Props) {
  return (
    <input
      id={id}
      type={type}
      className="px-3 mt-1 h-12 bg-black/5 rounded-md"
      {...register(name)}
    />
  );
}
