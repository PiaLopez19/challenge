import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import CardGroup from './CardGroup'
import { articles } from '../dummyData'

describe('CardGroup componente', () => {

  test('el componente card group de renderiza', () => {
    render(<CardGroup articles={articles} />)
  })

  test('el componente cardgroup contiene layout2', () => {
    render(<CardGroup articles={articles} />)

    const layout2Cards = screen.getAllByTitle('layout2');

    expect(layout2Cards.length).toBeGreaterThan(5); 
  })

})