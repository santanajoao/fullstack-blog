import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function HeaderWrapper({ children }: Props) {
  return (
    <header className="flex justify-between px-3 items-center py-2 border-b border-zinc-300 sm:px-5 sm:py-3">
      {children}
    </header>
  );
}
