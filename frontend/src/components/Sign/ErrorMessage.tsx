import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ErrorMessage({ children }: Props) {
  if (!children) return null;
  
  return (
    <span className="text-red-500 mt-1 text-sm">{children}</span>
  );
}
