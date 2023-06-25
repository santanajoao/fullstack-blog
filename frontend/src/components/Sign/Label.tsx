import { ReactNode } from "react"

interface Props {
  children: ReactNode;
  htmlFor: string;
}

export default function Label({ children, htmlFor }: Props) {
  return (
    <label htmlFor={htmlFor} className="font-medium">{children}</label>
  );
}
