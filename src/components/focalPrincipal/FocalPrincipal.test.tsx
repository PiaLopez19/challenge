import { render } from '@testing-library/react'
import FocalPrincipal from './FocalPrincipal';
import { articles } from '../dummyData'
import '@testing-library/jest-dom';

describe('Focal principal Componente', () => {

  test('renders FocalPrincipal component without crashing', () => {
    render(<FocalPrincipal articles={articles} />);
  });

  test('Renderizar el componente con diferentes articulos sin que se rompa', () => {
    const { rerender } = render(<FocalPrincipal articles={articles} />);
    rerender(<FocalPrincipal articles={[articles[1]]} />);
  });
})
