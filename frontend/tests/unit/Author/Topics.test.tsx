import { test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import Topics from '@/components/Author/Topics';
import { Topic } from '@/types/Topic';

describe('author About component unit tests', () => {
  test('render author Topics component list correctly', () => {
    const topics: Topic[] = [
      {
        id: '1',
        imageUrl: '',
        name: 'Tecnologia',
      },
      {
        id: '2',
        imageUrl: '',
        name: 'Esporte',
      },
    ];

    render(<Topics topics={topics} />);

    screen.getByRole('list');

    topics.forEach((topic) => {
      screen.getByText(topic.name);
    });
  });

  test('render a message if no topics', () => {
    const topics: Topic[] = [];

    render(<Topics topics={topics} />);

    screen.getByText('Esse autor ainda não publicou sobre nenhum tópico');
  });
});
