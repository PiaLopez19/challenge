import { render } from '@testing-library/react'
import NavBar from './NavBar'

describe('NavBar component', () => {

  test('Los botones se encuentran en el navBar', () => {
    const navBar = render(<NavBar />)
    navBar.getByText('SECCIONES')
    navBar.getByText('SUSCRIBITE')
    navBar.getByText('INGRESAR')
    navBar.getByText('BUSCAR')
  })

})