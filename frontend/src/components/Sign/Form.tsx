import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'form'> {};

export default function Form(props: Props) {
  const { className, ...otherProps } = props;

  return (
    <form
      {...otherProps}
      className={`w-full flex flex-col space-y-3 ${className}`}
    />  
  );
}
