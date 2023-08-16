import React, { ComponentProps, HTMLInputTypeAttribute } from 'react';
import { RefCallBack, UseFormRegister } from 'react-hook-form';

interface Props extends ComponentProps<'input'> {
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  name: string;
  _ref?: RefCallBack;
}

export default function Input(props: Props) {
  const {
    className, register, name, ...others
  } = props;

  return (
    <input
      className="px-3 mt-1 h-12 enabled:bg-black/10 rounded-md"
      {...others}
      {...register(name)}
    />
  );
}
