import React, { ComponentProps, HTMLInputTypeAttribute, RefObject } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends ComponentProps<'input'> {
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  name: string;
  _ref?: RefObject<HTMLInputElement>;
}

export default function Input(props: Props) {
  const {
    className, register, name, _ref: ref, ...others
  } = props;

  return (
    <input
      className="px-3 mt-1 h-12 enabled:bg-black/10 rounded-md"
      {...others}
      {...register(name)}
      ref={ref}
    />
  );
}
