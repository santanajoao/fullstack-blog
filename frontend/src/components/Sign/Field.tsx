import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export default function Field({ children }: Props) {
  return (
    <div className="flex flex-col">{children}</div>
  );
}
