import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {}

export default function Button(props: Props) {
  const { className, ...otherProps } = props;
  return (
    <button
      type="button"
      className={
        `bg-primaryGreen font-medium p-3 rounded-md hover:brightness-95
        disabled:bg-gray-300 disabled:cursor-not-allowed disabled
        ${className}`
      }
      {...otherProps}
    />
  );
}
