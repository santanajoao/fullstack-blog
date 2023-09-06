import { test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import About from '@/components/Author/About';
import { Account } from '@/types/Account';

describe('author About component unit tests', () => {
  test('render author prop informations', () => {
    const author: Account = {
      username: 'test username',
      about: 'my beautiful about',
      id: 'id',
      email: 'test@email.com',
      imageUrl: null,
    };

    render(<About author={author} />);

    screen.getByRole('heading', { name: `Sobre ${author.username}` });
    screen.getByText(author.about as string);
  });

  test('render default message when doesn\'t have about', () => {
    const author: Account = {
      username: 'test username',
      about: null,
      id: 'id',
      email: 'test@email.com',
      imageUrl: null,
    };

    render(<About author={author} />);

    screen.getByText('Esse autor ainda não definiu um "sobre"');
  });
});
