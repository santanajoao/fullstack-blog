'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';

const localStorageKey = 'showLearnMarkdownDialog';

export default function MarkdownTutorialModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const getDialogPreference = (): boolean => {
    const jsonPreference = localStorage.getItem(localStorageKey);
    const preference = JSON.parse(jsonPreference ?? 'null');
    if (preference === null || typeof preference !== 'boolean') {
      return true;
    }

    return preference;
  };

  const showDialog = getDialogPreference();

  useEffect(() => {
    if (showDialog && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [dialogRef]);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const changePreferences = () => {
    localStorage.setItem(localStorageKey, JSON.stringify(false));
    closeDialog();
  };

  return (
    <dialog ref={dialogRef} className="inset-2 py-8 px-4 relative max-w-lg">
      <button
        aria-label="Fechar"
        title="Fechar"
        type="button"
        onClick={closeDialog}
        className="absolute right-3 top-3 text-lg"
      >
        <IoMdClose />
      </button>
      <h1 className="text-2xl text-center font-bold">
        Escrevendo pela primeira vez?
      </h1>

      <p className="mt-4 text-center">
        Aprenda a utilizar markdown e dar estilo e sentido para as
        diferentes partes da sua publicação. Com markdown você pode definir
        títulos, listagens, tabelas, destacar textos e muito mais. Visite o post
        que preparamos para você:
      </p>

      <div className="mt-5 flex gap-3 text-base font-medium flex-wrap justify-center text-center">
        <Link
          href="/post/post-id"
          className="px-2 py-1 bg-primaryGreen rounded-sm w-full sm:w-auto"
        >
          Aprender!
        </Link>

        <button
          onClick={changePreferences}
          className="px-2 py-1 bg-red-300 rounded-sm w-full sm:w-auto"
          type="button"
        >
          Não mostrar novamente
        </button>
      </div>
    </dialog>
  );
}
