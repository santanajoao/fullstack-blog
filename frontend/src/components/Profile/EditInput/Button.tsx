import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {}

export default function Button(props: Props) {
  const { className, ...defaultProps } = props;

  return (
    <button
      type="button"
      {...defaultProps}
      className={`${className} border-l border-black px-2 text-base`}
    />
  );
}
