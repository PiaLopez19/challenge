import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer componente', () => {
    test('El componente footer se encuentra en el documento', () => {
        render(<Footer />)
        expect(true).toBeTruthy()
    })

    test('El componente contiene el texto de CopyRight', () => {
        const component = render(<Footer/>)
        component.getByText('CopyRight 2024 SALA NACION | Todos los derechos reservados')
    })
})