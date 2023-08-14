import React, { ComponentProps } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends ComponentProps<'textarea'> {
  maxLength: number;
  value: string;
  name: string;
  register: UseFormRegister<any>;
}

export default function Textarea(props: Props) {
  const {
    value, maxLength, className, name, register, ...other
  } = props;
  return (
    <div className="relative h-28">
      <textarea
        className="peer rounded-md enabled:bg-black/10 resize-none w-full py-1 px-2 h-full"
        {...other}
        {...register(name)}
      />

      <span className="peer-disabled:hidden absolute bottom-0 right-0 m-1">
        {value.length}
        &nbsp;/&nbsp;
        {maxLength}
      </span>
    </div>
  );
}
