import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {}

export default function Button(props: Props) {
  const { className, ...otherProps } = props;
  return (
    <button
      type="button"
      className={
        `${className}
        bg-primaryGreen font-medium p-3 rounded-md hover:brightness-95`
      }
      {...otherProps}
    />
  );
}
