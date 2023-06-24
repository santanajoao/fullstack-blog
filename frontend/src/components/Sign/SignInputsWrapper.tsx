import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export default function SignInputsWrapper({ children }: Props) {
  return (
    <div className="flex flex-col space-y-4">{children}</div>
  );
}
