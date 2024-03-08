export interface Article {
  id?: number;
  image?: string;
  lead?: string;
  title?: string;
  subtitle?: string;
  author?: string;
  authorImage?: string;
  url?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    image: "https://img.lagaceta.com.ar/fotos/notas/2024/02/22/900x540_ejercicio-tiene-impacto-positivo-salud-fisica-mental-1025036-141951.webp",
    lead: "Descubrimientos científicos",
    title: "Nuevo estudio revela la clave para una vida más larga y saludable",
    subtitle: "Investigadores encuentran vínculo entre la dieta mediterránea y la longevidad",
    author: "Daniel Bilotta",
    authorImage: "https://www.lanacion.com.ar/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-authors%2Flanacionar%2F62c4dc1f-a783-409c-a7e3-f282b9ad4eea.png?auth=e43d151c57e986af8cb31fe6a29f1a2b4af02a7b4054afa06288e5e9c2ff91df&width=80&quality=70&smart=false",
    url: "www.ejemplo.com/articulo1"
  },
  {
    id: 2,
    image: "https://resizer.glanacion.com/resizer/v2/javier-bardem-el-protagonista-de-el-buen-4QXDVUGWBVCBVJ7D4DCWN7CKAY.JPG?auth=0e45ac0d2cee05d993bf36aa59c7ec2b5a971b5c20d4ec5e07cffdc49844f1b9&width=768&height=549&quality=70&smart=true",
    lead: "Cultura y entretenimiento",
    title: "El Renacimiento del Cine Independiente Argentino",
    subtitle: "Directores emergentes desafían las convenciones en el mundo del cine",
    author: "Juan Perez",
    authorImage: "https://www.lanacion.com.ar/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-authors%2Flanacionar%2Fd3b7bf6a-7dc3-489c-9d96-c6bdae67b976.png?auth=dc5b76bcda14d936b8a75114683540713902078daeda5b7712b4df125b9d1636&width=80&quality=70&smart=false",
    url: "url_articulo_2"
  },
  {
    id: 3,
    image: "https://resizer.glanacion.com/resizer/P2q5e24xLMLKyXwLisPgfD86d6c=/300x0/arc-anglerfish-arc2-prod-lanacionar/public/ZTY3FV5DGZDFXOOQWSGRRR7ZG4.jpg",
    lead: "Tecnología y ciencia",
    title: "IA transforma diagnósticos médicos",
    subtitle: "La Transformación Médica: Avances de la Inteligencia Artificial en Diagnósticos Precisos",
    author: "Pia Lopez",
    authorImage: "https://www.lanacion.com.ar/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-authors%2Flanacionar%2F9b0f6613-1717-41ee-a48a-0718ca23d3fa.png?auth=15d4b29962151b1d246f64012220c073015e6b3c4ca91dc0947c717c3803c7d2&width=80&quality=70&smart=false",
    url: "Luciano Roman"
  },
  {
    id: 4,
    image: "https://resizer.glanacion.com/resizer/9v1yKa8ogu3kWyfk5FwckHwWJ0s=/300x0/arc-anglerfish-arc2-prod-lanacionar/public/EU26YRLR3BBGVKVKZOW2P4I2NI.JPG",
    lead: "Deportes",
    title: "El equipo nacional de fútbol se prepara para el campeonato mundial",
    subtitle: "Los jugadores entrenan arduamente para representar al país en el torneo internacional",
    author: "Diego Cabot",
    authorImage: "https://www.lanacion.com.ar/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-authors%2Flanacionar%2Fbf175146-bc1e-43e2-ae3e-c54e977c171f.png?auth=938966623f7c70a4c944464cf29794d80704c539cf656263c144eb24f01ccefe&width=80&quality=70&smart=false",
    url: "url_articulo_4"
  },
  {
    id:5,
    image: "https://resizer.glanacion.com/resizer/v2/la-ministra-de-capital-humano-sandra-DCHLJDQSLNH5XAPHDD634MI3HY.JPG?auth=689f704f24d371d33e670bba05b74c2df3c23aaeff877d4147cc03eec84b47f4&width=302&height=201&quality=70&smart=true",
    lead: "Cambio en la gestión.",
    title: "Tras la polémica, el Gobierno activa dos licitaciones para la compra de alimentos bajo estándares de la ONU",
    subtitle: "Los jugadores entrenan arduamente para representar al país en el torneo internacional",
    author: "Cecilia Devana",
    authorImage: "https://www.lanacion.com.ar/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-authors%2Flanacionar%2Fbf175146-bc1e-43e2-ae3e-c54e977c171f.png?auth=938966623f7c70a4c944464cf29794d80704c539cf656263c144eb24f01ccefe&width=80&quality=70&smart=false",
    url: "url_articulo_4"
  },
  {
    id:6,
    image: "https://buckets3.glanacion.com/lntools/anexos/fotos/34/64034w780q70.jpeg",
    lead: "La trama del escándalo de los seguros.",
    title: "Negocios millonarios en la gestión de Fernández y un viejo club de amigos bajo sospecha",
    subtitle: "Los jugadores entrenan arduamente para representar al país en el torneo internacional",
    author: "Cecilia Devana",
    authorImage: "https://www.lanacion.com.ar/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-authors%2Flanacionar%2Fbf175146-bc1e-43e2-ae3e-c54e977c171f.png?auth=938966623f7c70a4c944464cf29794d80704c539cf656263c144eb24f01ccefe&width=80&quality=70&smart=false",
    url: "url_articulo_4"
  },
];

export interface Publicidad {
  url: string
  title: string
  id: number
  image: string;
}

export const publicidad: Publicidad[] = [
  {
    url: 'url de la publicidad',
    title: 'nombre de publicidad',
    id: 1,
    image: "https://tpc.googlesyndication.com/simgad/2708700751458689288",
  },
  {
    url: 'url de la publicidad',
    title: 'nombre de publicidad',
    id: 2,
    image: "https://tpc.googlesyndication.com/simgad/8384856104968923493",
  },
  {
    url: 'url de la publicidad',
    title: 'nombre de publicidad',
    id: 3,
    image: "https://tpc.googlesyndication.com/simgad/16673754267793498325",
  },
];


