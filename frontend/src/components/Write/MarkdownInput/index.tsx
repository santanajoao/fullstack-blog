import React, { useState } from 'react';
import Container from '@/components/Container';
import { UseFormRegister } from 'react-hook-form';
import Button from './Button';
import Textarea from '../Textarea';

interface Props {
  register: UseFormRegister<any>;
  name: string;
  value: string;
}

export default function MarkdownInput({
  register, name, value,
}: Props) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <div className="w-full">
        <Button
          onClick={() => setShowPreview(false)}
          selected={!showPreview}
        >
          Editor
        </Button>

        <Button
          onClick={() => setShowPreview(true)}
          selected={showPreview}
        >
          Preview
        </Button>
      </div>

      <div className="h-[70vh] p-2">
        {showPreview ? (
          <Container.Markdown className="h-full">
            {value.trim() || 'Escreva algo utilizando markdown para ver o resultado'}
          </Container.Markdown>
        ) : (
          <Textarea
            placeholder="Texto da publicação"
            className="w-full h-full"
            register={register}
            name={name}
          />
        )}
      </div>
    </div>
  );
}
