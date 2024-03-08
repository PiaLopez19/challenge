import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Button from './Button'

describe('Button component', () => {
  test('el componente button se encuentra en el documento', () => {
    render(<Button texto='texto' clases='clases de tailwind' />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('py-3 px-4 flex justify-center items-center font-[Arial]')
  })
})
