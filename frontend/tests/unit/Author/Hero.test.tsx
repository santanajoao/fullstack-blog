import { test, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import Hero from '@/components/Author/Hero';
import { Account } from '@/types/Account';
import defaultPicture from '@/assets/profile.svg';

describe('author Hero component unit tests', () => {
  test('render prop informations', () => {
    const author: Account = {
      username: 'test username',
      about: 'my beautiful about',
      id: 'id',
      email: 'test@email.com',
      imageUrl: '/meulink.com',
    };

    const count = { likes: 42, posts: 17 };

    const { unmount } = render(<Hero author={author} count={count} />);

    screen.getByRole('heading', { name: author.username });

    unmount();
  });

  test('render default profile image', () => {
    const author: Account = {
      username: 'test username',
      about: 'my beautiful about',
      id: 'id',
      email: 'test@email.com',
      imageUrl: null,
    };

    const count = { likes: 42, posts: 17 };

    render(<Hero author={author} count={count} />);

    const image = screen
      .getByRole('img', { name: `Imagem de perfil de ${author.username}` });

    expect(image).toHaveAttribute('src', defaultPicture);
  });
});
