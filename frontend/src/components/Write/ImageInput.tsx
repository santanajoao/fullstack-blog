import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react'

interface Props {
  value?: string;
}

export default function ImageInput({ value = '' }: Props) {
  const [imageUrl, setImageUrl] = useState(value);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    if (!files[0].type.startsWith('image/')) return console.error("tipo errado");

    URL.revokeObjectURL(imageUrl);
    setImageUrl(URL.createObjectURL(files[0]));
  }

  return (
    <div className="border relative w-full aspect-video bg-primaryGreen">
      <div className="relative w-full h-full z-10">
        <input
          id="image-input"
          type="file"
          className="absolute opacity-0 peer"
          onChange={handleImageChange}
        />

        <label
          htmlFor="image-input"
          className={`
            opacity-0 peer-focus:opacity-100 peer-hover:opacity-100 w-full
            h-full absolute cursor-pointer text-center flex items-center
            justify-center text-white bg-black/80 transition-opacity
          `}
        >
          Escolha uma imagem para sua publicação
        </label>
      </div>

      {imageUrl && (
        <Image
          width={1440}
          height={810}
          src={imageUrl}
          alt="Imagem representativa da publicação"
          className="w-full h-full object-scale-down left-0 top-0 absolute"
        />
      )}
    </div>
  )
}
