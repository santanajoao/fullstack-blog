import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'textarea'> {};

export default function Textarea(props: Props) {
  const { className, ...otherProps } = props;
  return (
    <textarea
      className={`${className} outline-none resize-none border-b-2`}
      {...otherProps}
    />
  )
}
