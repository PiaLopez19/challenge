import {render, screen} from '@testing-library/react'
import FocalIzquierdo from './FocalIzquierdo'
import '@testing-library/jest-dom';
import { articles } from '../dummyData'

describe('componente FocalIzquierdo', () => {

    test('El componente FocalIzquierdo se renderiza', ()=>{
        render(<FocalIzquierdo articles={articles}/>)
    })

    test('el componente Opinion contiene las Cards con diferentes layouts', () => {
        render(<FocalIzquierdo articles={articles} />);
    
        const layout1Card = screen.getByTitle('layout1');
        const layout2Cards = screen.getByTitle('layout2');
    
        expect(layout1Card).toBeInTheDocument();
        expect(layout2Cards).toBeInTheDocument(); 

      });
})