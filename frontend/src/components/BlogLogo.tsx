type Size = 'small' | 'big';

interface Props {
  size: Size;
}

const sizes: Record<Size, string> = {
  small: 'text-2xl',
  big: 'text-3xl',
};

export default function BlogLogo(props: Props) {
  const sizeClass = sizes[props.size];

  return (
    <span className={`font-bold ${sizeClass} underline`}>
      Blog
    </span>
  );
}
