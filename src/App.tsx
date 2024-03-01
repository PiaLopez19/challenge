import './App.css'
import { articles, publicidad } from './components/dummyData'
import NavBar from './components/navBar/NavBar'
/* import Publicidad from './components/publicidad/Publicidad'; */
import PublicidadComponent from "./components/publicidad/PublicidadComponent";
import FocalIzquierdo from './components/focalIzq/FocalIzquierdo';
import FocalPrincipal from './components/focalPrincipal/FocalPrincipal';

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main>
        <FocalPrincipal articles={articles} />
        <section className='md:pr-[5%] md:pl-[5%]'>
          <div className="flex gap-5">
            <div className="w-full lg:w-3/4"> {/* Este div ocupa 3/4 del ancho */}
              <PublicidadComponent publicidad={publicidad[0]} ubicacion="cabezal" />
              <h1 className='main__title border-b border-neutral-300 pb-2 text-2xl text-title'>Focal Izquierdo</h1>
              <FocalIzquierdo articles={articles} />
            </div>
            <div className="hidden lg:block w-1/4 h-screen"> {/* Este div ocupa 1/4 del ancho y solo se muestra en pantallas grandes */}
              <PublicidadComponent publicidad={publicidad[1]} ubicacion="sidebar" />
              {/* <iframe width="300" height="600" src={flyBondi} title="GeeksforGeeks"></iframe> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App