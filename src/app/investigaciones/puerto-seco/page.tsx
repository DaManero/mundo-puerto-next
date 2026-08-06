import { CategoriaPage, type CategoriaPost } from "../CategoriaPage";

const posts: CategoriaPost[] = [
  {
    href: "/investigaciones/puerto_seco_informe",
    title: "Los puertos secos en Argentina: un modelo logístico en desarrollo",
    author: "Equipo Mundo Puerto",
    image: "/investigaciones/puerto_seco_post/images/ptoSecoimg.jpg",
    kind: "Informe",
  },
];

export default function PuertoSecoPage() {
  return (
    <CategoriaPage
      title="Puertos Secos"
      subtitle="Investigaciones sobre nodos logísticos interiores, corredores bioceánicos y el rol de los puertos secos en el desarrollo federal argentino."
      sectionKicker="Publicaciones"
      sectionTitle="Informes disponibles"
      posts={posts}
    />
  );
}
