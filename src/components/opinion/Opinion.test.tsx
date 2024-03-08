import { render, screen } from '@testing-library/react'
import Opinion from './Opinion'
import '@testing-library/jest-dom';
import { articles } from '../dummyData';

describe('Opinion Componente', () => {

  test('El componente opinion se renderiza correctamente', () => {
    render(<Opinion articles={articles} />);
  });

  test('el componente Opinion contiene las Cards con diferentes layouts', () => {
    render(<Opinion articles={articles} />);

    const layout2Card = screen.getByTitle('layout2');
    const layout3Cards = screen.getByTitle('layout3');
    const layout4Card = screen.getByTitle('layout4');

    expect(layout2Card).toBeInTheDocument();
    expect(layout3Cards).toBeInTheDocument();
    expect(layout4Card).toBeInTheDocument();
  });
});