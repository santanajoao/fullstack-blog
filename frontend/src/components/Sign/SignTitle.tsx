interface Props {
  children: string;
}

export default function SignTitle({ children }: Props) {
  return (
    <h1 className="text-2xl font-bold">{children}</h1>
  );
}
