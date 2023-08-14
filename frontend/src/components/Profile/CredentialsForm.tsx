'use client';

import React, {
  FormEvent, useEffect, useRef, useState,
} from 'react';
import Sign from '@/components/Sign';
import { UseFormRegister } from 'react-hook-form';
import { Account } from '@/types/Account';

interface Props {
  user: Account;
}

export default function CredentialsForm({ user }: Props) {
  const [editing, setEditing] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      firstInputRef.current?.focus();
    }
  }, [editing]);

  const register = (() => {}) as any as UseFormRegister<any>;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Sign.Form onSubmit={handleSubmit}>
      <Sign.FieldsWrapper>
        <Sign.Field>
          <Sign.Label htmlFor="email-input">Email</Sign.Label>
          <Sign.Input
            _ref={firstInputRef}
            value={user.email}
            id="email-input"
            name="email"
            type="email"
            register={register}
            disabled={!editing}
          />
        </Sign.Field>

        <Sign.FieldsWrapper>
          <Sign.Field>
            <Sign.Label htmlFor="current-password-input">Senha atual</Sign.Label>

            <Sign.HiddenPasswordInput
              name="currentPassword"
              id="current-password-input"
              register={register}
              disabled={!editing}
            />

            <Sign.ErrorMessage />
          </Sign.Field>

          <Sign.Field>
            <Sign.Label htmlFor="new-password-input">Nova senha</Sign.Label>

            <Sign.HiddenPasswordInput
              name="newPassword"
              id="new-password-input"
              register={register}
              disabled={!editing}
            />

            <Sign.ErrorMessage />
          </Sign.Field>
        </Sign.FieldsWrapper>
      </Sign.FieldsWrapper>

      <Sign.Button
        type={editing ? 'submit' : 'button'}
        className="w-fit py-2"
        onClick={editing ? undefined : () => setEditing(true)}
      >
        {editing ? 'Salvar' : 'Editar'}
      </Sign.Button>
    </Sign.Form>
  );
}
