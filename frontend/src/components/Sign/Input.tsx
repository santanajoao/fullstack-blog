import { HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  type: HTMLInputTypeAttribute;
}

export default function Input({ id, type }: Props) {
  return (
    <input
      id={id}
      type={type}
      className="px-3 mt-1 h-12 bg-black/5 rounded-md"
    />
  );
}
