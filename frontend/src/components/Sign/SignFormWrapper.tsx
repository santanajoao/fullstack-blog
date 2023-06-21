import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SignFormWrapper({ children }: Props) {
  return (
    <form className="w-full flex flex-col gap-4 mt-10">
      {children}
    </form>
  )
}
