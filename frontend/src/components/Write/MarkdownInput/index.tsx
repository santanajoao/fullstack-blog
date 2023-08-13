import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Button from "./Button";
import Container from "@/components/Container";
import Textarea from "../Textarea";

interface Props {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function MarkdownInput({ value = '', onChange }: Props) {
  const [markdown, setMarkdown] = useState(value);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);

    onChange && onChange(event);
  }

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
            {markdown.trim() || 'Escreva algo utilizando markdown para ver o resultado'}
          </Container.Markdown>
        ) : (
          <Textarea
            placeholder="Texto da publicação"
            className="w-full h-full"
            value={markdown}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  )
}
