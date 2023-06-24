import { FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onSubmit(event: FormEvent): void;
}

export default function SignFormWrapper({ children, onSubmit }: Props) {
  return (
    <form className="w-full flex flex-col space-y-3 mt-10" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
