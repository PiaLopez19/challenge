import { Publicidad } from "../dummyData";

interface PubliProps {
  publicidad: Publicidad;
  ubicacion: 'header' | 'cabezal' | 'sidebar';
}

const PublicidadComponent: React.FC<PubliProps> = ({ publicidad, ubicacion }) => {
  return (
    <div className={`h_iframe relative ${ubicacion}`}>
      <svg className='ratio' viewBox="0 0 920 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width={ubicacion === 'cabezal' ? '720' : '300'} height={ubicacion === 'cabezal' ? '90' : '600'}  fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.00869565" height="0.08">
            <use xlinkHref="#image0_2_22540" transform="scale(0.000543478 0.005)" />
          </pattern>
          <image id="image0_2_22540" width="16" height="16" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVQ4EaXTuw2AMAwE0HMmYImkZgUmAyZjBep4CTYwMgUSIh8nucKNT687YuYNwArgEpElhHCiIaTdEeQBRpAX6EU+QA/yA1qRJNCCZAErUgQsSBWoISaghJiBHNIEpBAXY5z1YY33Xse3A5iI6HB6hhBmlt4p64pvI5iJ4rgjR5MAAAAASUVORK5CYII=" />
        </defs>
      </svg>
      <iframe scrolling="no" src={publicidad.image} width={ubicacion === 'sidebar' ? 300 : undefined} height={ubicacion === 'sidebar' ? 600 : undefined} title="GeeksforGeeks" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
    </div>
  );
  
};

export default PublicidadComponent;
