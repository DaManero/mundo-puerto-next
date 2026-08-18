export type NoticiaCategory = "Editorial" | "Entrevista" | "Noticia";

export type Noticia = {
  slug: string;
  href: string;
  title: string;
  date: string;
  image: string;
  category: NoticiaCategory;
  description: string;
};

// El primer item es el destacado en la home y en /noticias.
export const NOTICIAS: Noticia[] = [
  {
    slug: "editorial_puertos_argentinos",
    href: "/noticias/editorial_puertos_argentinos",
    title: "Por qué la Argentina necesita pensar sus puertos",
    date: "18 de Agosto de 2026",
    image: "/noticias/img_noticias/editorial_02.jpg",
    category: "Editorial",
    description:
      "Editorial de Fundación Mundo Puerto: por qué el desarrollo portuario federal debe convertirse en política de Estado y causa nacional, con planificación de largo plazo, inversión estratégica y consenso tripartito.",
  },
  {
    slug: "editorial_practicaje",
    href: "/noticias/editorial_practicaje",
    title: "Practicaje, pilotaje, baquía: una reforma que exige revisión técnica antes que ideológica",
    date: "05 de Agosto de 2026",
    image: "/noticias/img_noticias/editorial_practicaje.jpg",
    category: "Editorial",
    description:
      "Editorial de Fundación Mundo Puerto sobre la reforma del practicaje: por qué la discusión debe empezar por lo técnico y lo operativo antes que por lo ideológico.",
  },
  {
    slug: "entrevista_lourido",
    href: "/noticias/entrevista_lourido",
    title: "Lourido: “No perdamos la esencia de los puertos”",
    date: "11 de Mayo de 2023",
    image: "/noticias/img_noticias/lourido_0101.jpg",
    category: "Entrevista",
    description:
      "Entrevista a Laureano Lourido, presidente del Puerto de Gijón, sobre el rol de los puertos, su comunidad y su vínculo con el territorio.",
  },
  {
    slug: "entrevista_duran",
    href: "/noticias/entrevista_duran",
    title: "Durán: “Un puerto verde es un puerto más competitivo”",
    date: "18 de Abril de 2023",
    image: "/noticias/img_noticias/duran_0101.jpg",
    category: "Entrevista",
    description:
      "Jorge Durán, secretario ejecutivo de la Comisión Interamericana de Puertos, habla sobre puertos verdes, sostenibilidad y competitividad en América Latina.",
  },
  {
    slug: "entrevista_tarraubela",
    href: "/noticias/entrevista_tarraubela",
    title: "Tarraubella: “Ser sostenible es negocio”",
    date: "17 de Marzo de 2023",
    image: "/noticias/img_noticias/taraubella_0101.jpg",
    category: "Entrevista",
    description:
      "Entrevista a Rossana Tarraubella sobre sostenibilidad, competitividad portuaria y el valor de negocio de las prácticas responsables.",
  },
  {
    slug: "entrevista_ascensio",
    href: "/noticias/entrevista_ascensio",
    title: "Ascencio: “El liderazgo de la comunidad logística empieza por la autoridad portuaria local”",
    date: "19 de Diciembre de 2022",
    image: "/noticias/img_noticias/ascencio_01.jpg",
    category: "Entrevista",
    description:
      "Luis Ascencio, referente en gestión portuaria, analiza el liderazgo de la autoridad portuaria local y su rol en la comunidad logística.",
  },
  {
    slug: "noticia_02",
    href: "/noticias/noticia_02",
    title: "Fray Jorge Bender: “No hay arma más poderosa que la educación”",
    date: "22 de Noviembre de 2022",
    image: "/noticias/img_noticias/bender_01.jpg",
    category: "Noticia",
    description:
      "El sacerdote franciscano Fray Jorge Bender acompañó el lanzamiento de la Fundación Mundo Puerto y compartió su reflexión sobre la educación como motor del cambio.",
  },
  {
    slug: "noticia_01",
    href: "/noticias/noticia_01",
    title: "Se presentó la Fundación Mundo Puerto",
    date: "04 de Noviembre de 2022",
    image: "/noticias/img_noticias/not_blog_01.jpg",
    category: "Noticia",
    description:
      "Crónica del lanzamiento oficial de la Fundación Mundo Puerto, con referentes del sector portuario, logístico y de la comunidad.",
  },
];

export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return NOTICIAS.find((n) => n.slug === slug);
}
