
import { Publicidad } from "../dummyData"

interface PubliProps {
  publicidad: Publicidad;
  ubicacion?: 'header' | 'cabezal' | 'sidebar' | 'banner';
  clases?: 'side__component' | 'cabezal__component' | 'header__component'
}

const PublicidadComponent: React.FC<PubliProps> = ({ publicidad, ubicacion }) => {

  /* SIDEBAR */
  const sideBar = ubicacion === 'sidebar' ? 'w-auto h-[600px]' : '';
  /* CABEZAL */
  const cabezal = ubicacion === 'cabezal' ? 'w-full h-[90px]' : '';
  /* BANNER */
  const banner = ubicacion === 'banner' ? 'h-[90px]' : '';
  /* HEADER */
  const header = ubicacion === 'header' ? 'max-w-[320px] max-h-[50px]' : '';

  return (
    <section>
      <a
        href="#"
        title={publicidad.title}
      >
        <img
          className={`${sideBar} ${cabezal} ${banner} ${header}`}
          src={publicidad.image}
          alt={publicidad.title} />
      </a>
    </section>
  )
}

export default PublicidadComponent;