import { ChildrenProps } from "@/types/ChildrenProps";

export default function HeaderWrapper({ children }: ChildrenProps) {
  return (
    <header className="flex justify-between h-16 items-center py-2 border-b border-zinc-300 sm:px-5 sm:py-3">
      {children}
    </header>
  );
}
