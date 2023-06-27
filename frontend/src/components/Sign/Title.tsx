import { ChildrenProps } from "@/types/ChildrenProps";

interface Props extends ChildrenProps {};

export default function Title({ children }: Props) {
  return (
    <h1 className="text-2xl font-bold">{children}</h1>
  );
}
