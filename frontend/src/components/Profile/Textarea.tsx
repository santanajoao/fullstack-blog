import React, { ComponentProps } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends ComponentProps<'textarea'> {
  maxLength: number;
  name: string;
  register: UseFormRegister<any>;
}

export default function Textarea(props: Props) {
  const {
    maxLength, className, name, register, ...other
  } = props;

  return (
    <textarea
      className="rounded-md enabled:bg-black/10 disabled:placeholder:text-black resize-none w-full py-1 px-2 h-28"
      {...other}
      {...register(name)}
    />
  );
}
