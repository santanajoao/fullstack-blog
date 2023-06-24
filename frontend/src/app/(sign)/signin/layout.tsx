import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const metadata = {
  title: 'Entrar',
}

export default function SignInLayout({ children }: Props) {
  return (
    <>{children}</>
  )
}
