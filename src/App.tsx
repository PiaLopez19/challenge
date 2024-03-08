import './App.css'
import { articles, publicidad } from './components/dummyData'
import NavBar from './components/navBar/NavBar'
import FocalIzquierdo from './components/focalIzq/FocalIzquierdo';
import FocalPrincipal from './components/focalPrincipal/FocalPrincipal';
import Opinion from './components/opinion/Opinion';
import Anexo from './components/anexo/Anexo';
import CardGroup from './components/cardGroup/CardGroup';
import Footer from './components/footer/Footer';
import PublicidadComponent from './components/publicidad/PublicidadComponent';

const App = (): JSX.Element => {

  return (
    <>
      <div className='flex justify-center md:hidden sticky top-0 z-50 bg-gray-100'>
        <PublicidadComponent
          publicidad={publicidad[2]}
        />
      </div>

      <header className='w-full'>
        <NavBar />
      </header>

      <main className='w-full'>
        <Anexo
          articles={articles}
        />
        <div className='hidden md:flex md:justify-center items-center m-4 bg-gray-100'>
          <PublicidadComponent
            publicidad={publicidad[0]}
          />
        </div>
        <FocalPrincipal
          articles={articles} />
        <section className='flex md:justify-center md:gap-10 mt-8'>
          <div>
            <aside className='hidden md:flex bg-gray-100 md:justify-center'>
              <PublicidadComponent
                publicidad={publicidad[2]}
              />
            </aside>
            <article className='md:w-[736px] xl:w-[920px] mt-8'>
              <h1 className='border-b pb-4 px-4 md:px-0 main__title text-2xl text-title'>Focal Izquierdo</h1>
              <FocalIzquierdo
                articles={articles}
              />
            </article>
            <article className='md:w-[736px] xl:w-[920px] mt-8'>
              <h2 className='border-b pb-4 px-4 md:px-0 main__title text-title text-2xl'>Opinion</h2>
              <Opinion
                articles={articles}
              />
            </article>
            <article className='md:w-[736px] xl:w-[920px]'>
              <h2 className='border-b pb-4 px-4 md:px-0 main__title text-title text-2xl mt-8'>Card Group x6</h2>
              <CardGroup
                articles={articles}
              />
            </article>
          </div>
          <aside className='hidden lg:flex bg-gray-100'>
            <PublicidadComponent
              publicidad={publicidad[1]}
            />
          </aside>
        </section>
      </main>

      <footer className='mt-8'>
        <Footer />
      </footer>
    </>
  )
}

export default App