import React from 'react';

interface Props {
  status: number;
  message: string;
}

export default function RequestError({ status, message }: Props) {
  return (
    <div>
      <h1>
        {status}
        {' '}
        -
        {' '}
        {message}
      </h1>
    </div>
  );
}
