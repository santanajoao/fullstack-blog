import Textarea from '@/components/Profile/Textarea';
import React from 'react';
import Sign from '@/components/Sign';
import { UseFormRegister } from 'react-hook-form';

export default function CommentForm() {
  const register = function () {} as unknown as UseFormRegister<any>;

  return (
    <form>
      <Textarea placeholder="Que post legal!" register={register} name="" />
      <Sign.Button className="py-2" type="button">Comentar</Sign.Button>
    </form>
  );
}
