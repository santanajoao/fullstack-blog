import React, { ComponentProps } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends ComponentProps<'textarea'> {
  register: UseFormRegister<any>,
  name: string;
}

export default function Textarea(props: Props) {
  const {
    className, register, name, ...otherProps
  } = props;
  return (
    <textarea
      className={`${className} outline-none resize-none border-b-2`}
      {...otherProps}
      {...register(name)}
    />
  );
}
