import { HTMLInputTypeAttribute } from "react";
import ErrorMessage from "./ErrorMessage";

interface Props {
  label: string;
  type: HTMLInputTypeAttribute;
  id: string;
  error?: string;
  inputProps: object;
}

export default function SignField({ label, type, id, error, inputProps }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium">{label}</label>
      <input
        id={id}
        type={type}
        className="px-3 mt-1 h-12 bg-black/5 rounded-md"
        {...inputProps}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  )
}
