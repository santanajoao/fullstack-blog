import { ChildrenProps } from "@/types/ChildrenProps";

interface Props extends ChildrenProps {
  htmlFor: string;
}

export default function Label({ children, htmlFor }: Props) {
  return (
    <label htmlFor={htmlFor} className="font-medium">{children}</label>
  );
}
