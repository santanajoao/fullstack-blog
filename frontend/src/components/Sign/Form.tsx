import { ChildrenProps } from "@/types/ChildrenProps";
import { FormEvent } from "react";

interface Props extends ChildrenProps {
  onSubmit(event: FormEvent): void;
}

export default function Form({ children, onSubmit }: Props) {
  return (
    <form className="w-full flex flex-col space-y-3 mt-10" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
