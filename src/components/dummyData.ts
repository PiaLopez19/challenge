export interface Article {
    id: number;
    image: string;
    lead: string;
    title: string;
    subtitle: string;
    author: string;
    authorImage: string;
    url: string;
  }
  
  export const articles: Article[] = [
    {
      id: 1,
      image: "https://img.lagaceta.com.ar/fotos/notas/2024/02/22/900x540_ejercicio-tiene-impacto-positivo-salud-fisica-mental-1025036-141951.webp",
      lead: "Descubrimientos científicos",
      title: "Nuevo estudio revela la clave para una vida más larga y saludable",
      subtitle: "Investigadores encuentran vínculo entre la dieta mediterránea y la longevidad",
      author: "Dr. Santiago García",
      authorImage: "Autor1.jpg",
      url: "www.ejemplo.com/articulo1"
    },
    {
      id: 2,
      image: "https://img.lagaceta.com.ar/fotos/notas/2021/08/17/512x342_906922_202108162114140000001.webp",
      lead: "Cultura y entretenimiento",
      title: "El renacimiento del cine independiente",
      subtitle: "Directores emergentes desafían las convenciones en el mundo del cine",
      author: "María López",
      authorImage: "Autor2.jpg",
      url: "url_articulo_2"
    },
    {
      id: 3,
      image: "https://resizer.glanacion.com/resizer/P2q5e24xLMLKyXwLisPgfD86d6c=/300x0/arc-anglerfish-arc2-prod-lanacionar/public/ZTY3FV5DGZDFXOOQWSGRRR7ZG4.jpg",
      lead: "Tecnología y ciencia",
      title: "IA transforma diagnósticos médicos",      
      subtitle: "La Transformación Médica: Avances de la Inteligencia Artificial en Diagnósticos Precisos",
      author: "Pia Lopez",
      authorImage: "url_imagen_autor_3",
      url: "url_articulo_3"
    },
    {
      id: 4,
      image: "https://resizer.glanacion.com/resizer/9v1yKa8ogu3kWyfk5FwckHwWJ0s=/300x0/arc-anglerfish-arc2-prod-lanacionar/public/EU26YRLR3BBGVKVKZOW2P4I2NI.JPG",
      lead: "Deportes",
      title: "El equipo nacional de fútbol se prepara para el campeonato mundial",
      subtitle: "Los jugadores entrenan arduamente para representar al país en el torneo internacional",
      author: "Juan Pérez",
      authorImage: "url_imagen_autor_4",
      url: "url_articulo_4"
    }
  ];

  export interface Publicidad {
    id: number
    image: string;
  }

  export const publicidad: Publicidad[] = [
    {
      id:1,
      image: "https://tpc.googlesyndication.com/simgad/1129643736231437494",
    },
    {
      id:2,
      image: "https://tpc.googlesyndication.com/simgad/8384856104968923493",
    },
  ];