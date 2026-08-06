import { CategoriaPage, type CategoriaPost } from "../CategoriaPage";

const posts: CategoriaPost[] = [
  {
    href: "/investigaciones/columna_leonardi_02",
    title: "Concesiones portuarias en el modelo landlord",
    author: "Ignacio Leonardi",
    image: "/investigaciones/puerto_post/images/leonardi_001.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_pinero",
    title: "El rol de las mujeres en la actividad portuaria",
    author: "Verónica Piñero",
    image: "/investigaciones/puerto_post/images/pinero_001.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_puertolas",
    title: "La Ventanilla Única Marítima: una política de Estado",
    author: "Rodrigo Puértolas",
    image: "/investigaciones/puerto_post/images/puertolas_01.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_cherubini",
    title: "Una planificación para las áreas operativas del Puerto Buenos Aires",
    author: "Ariel Cherubini",
    image: "/investigaciones/puerto_post/images/img_cherubini.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_ferreyra",
    title: "Rol de los puertos en el Plan nacional de mejoramiento del sistema ferroviario argentino",
    author: "Ricardo Ferreyra",
    image: "/investigaciones/puerto_post/images/img_ferreyra_01.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_sposaro",
    title: "Gestión de mejora continua en empresas públicas y puertos",
    author: "Carlos Sposaro",
    image: "/investigaciones/puerto_post/images/img_sposaro_post.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_yarochevski",
    title: "Puertos verdes, sostenibles y respetuosos con el medio ambiente",
    author: "Karina Yarochevski",
    image: "/investigaciones/puerto_post/images/img_post_yarochevski.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_moro",
    title: "La actividad portuaria como eje del crecimiento económico",
    author: "Leandro Moro",
    image: "/investigaciones/puerto_post/images/img_post_moro.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_leonardi",
    title: "Acerca del régimen institucional portuario desregulado",
    author: "Juan Ignacio Leonardi",
    image: "/investigaciones/puerto_post/images/img_post_leonardi.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_goicochea2",
    title: "Desafíos para el sistema portuario argentino — 1ª parte",
    author: "Mario Goicochea",
    image: "/investigaciones/puerto_post/images/img_post_goico.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_peyregne",
    title: "Mantenimiento Santa Fe – Confluencia: inversión y obras que requieren financiamiento",
    author: "Marcelo Peyregne",
    image: "/investigaciones/puerto_post/images/img_post_pey.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/columna_gorgone",
    title: "BPMS como el motor de procesos de negocio de los Port Community Systems",
    author: "Sergio A. Gorgone",
    image: "/investigaciones/puerto_post/images/img_post_bpms.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/opinion_01",
    title: "Turismo de cruceros y cuidado del medio ambiente",
    author: "Dra. Karina Yarochevsky",
    image: "/investigaciones/puerto_post/images/img_post_informe_crucero.jpg",
    kind: "Informe",
  },
  {
    href: "/investigaciones/puertos_relevamientos",
    title: "Relevamientos de puertos en Argentina",
    author: "Equipo Mundo Puerto",
    image: "/investigaciones/puerto_post/images/img_post_puerto.jpg",
    kind: "Informe",
  },
];

export default function PuertosPage() {
  return (
    <CategoriaPage
      title="Puertos"
      subtitle="Análisis técnicos, informes y trabajos de investigación aplicada sobre gestión portuaria, integración puerto-ciudad, hidrovías y competitividad del sistema fluviomarítimo argentino."
      sectionKicker="Publicaciones"
      sectionTitle="Informes"
      posts={posts}
    />
  );
}
