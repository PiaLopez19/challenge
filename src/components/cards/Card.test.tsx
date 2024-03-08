import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Card from './Card'
import { articles } from '../dummyData'

describe('Crad component', () => {

  const layouts = ['anexo', 'layout', 'layout1', 'layout2', 'layout3', 'layout4'];

  test('el componente card se encuentra en el documento', () => {
    render(<Card article={articles[0]} layout='layout' />)
    const card = screen.getByRole('article')
    expect(card).toBeInTheDocument()
  })

  test('el elemento card tiene la clase layout', () => {
    render(<Card article={articles[0]} layout='layout' />)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('card layout')
  })


  layouts.map((layout) => {
    test(`el componente card contiene el layout ${layout}`, () => {
      const { getByRole } = render(<Card article={articles[0]} layout={'layout'} />);
      expect(getByRole('article')).toBeInTheDocument();
    });
  });

  /*   test('el componente card contiene todos los layout', () => {
      const { getByRole } = render(<Card article={articles[0]} layout="layout1" />);
      expect(getByRole('article')).toBeInTheDocument();
      
    }) */

})