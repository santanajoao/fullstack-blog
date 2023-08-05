'use client';

import React, { useState } from 'react';
import {
  AiOutlineEdit, AiOutlineCheck, AiOutlineLoading3Quarters, AiOutlineClose,
} from 'react-icons/ai';
import { nameMaxLength, signNameSchema } from '@/lib/schemas/sign.schema';
import CharCountValidation from './CharCountValidation';
import Button from './Button';

interface Props {
  value: string;
}

const getButtonAction = (isLoading: boolean, isEditing: boolean) => {
  if (isLoading) return 'Carregando';
  return isEditing ? 'Salvar' : 'Editar';
};

const getButtonIcon = (isLoading: boolean, isEditing: boolean) => {
  if (isLoading) return <AiOutlineLoading3Quarters className="animate-spin" />;
  return isEditing ? <AiOutlineCheck /> : <AiOutlineEdit />;
};

export default function EditInput({ value: _value }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(_value);

  const handleClick = () => {
    if (isEditing) {
      setIsLoading(true);
      setIsEditing(false);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setIsEditing(true);
    }
  };

  const cancelEditing = () => {
    setValue(_value);
    setIsEditing(false);
  };

  const buttonAction = getButtonAction(isLoading, isEditing);
  const usernameClassname = 'py-1 px-2 w-fit';
  const validName = signNameSchema.safeParse(value).success;

  return (
    <div className="flex items-center gap-2">
      <div className="border-2 border-black rounded-md w-fit flex overflow-hidden">
        {isEditing ? (
          <input
            type="text"
            className={usernameClassname}
            value={value}
            disabled={!isEditing}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
        ) : (
          <span className={usernameClassname}>{value}</span>
        )}

        <Button
          className={`
            ${validName ? '' : 'cursor-not-allowed'}
            ${isEditing ? 'hover:bg-primaryGreen' : ''}
          `}
          type="button"
          onClick={handleClick}
          title={buttonAction}
          disabled={isLoading || !validName}
        >
          <span className="sr-only">{buttonAction}</span>

          {getButtonIcon(isLoading, isEditing)}
        </Button>

        {isEditing && (
          <Button
            onClick={cancelEditing}
            type="button"
            title="Cancelar"
            className="hover:bg-red-400"
          >
            <span className="sr-only">Cancelar</span>
            <AiOutlineClose />
          </Button>
        )}
      </div>

      {isEditing && (
        <CharCountValidation
          value={value}
          maxLength={nameMaxLength}
          schema={signNameSchema}
        />
      )}
    </div>
  );
}
