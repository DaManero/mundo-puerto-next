import { CategoriaPage, type CategoriaPost } from "../CategoriaPage";

const posts: CategoriaPost[] = [
  {
    href: "/investigaciones/ods_introduccion",
    title: "Introducción a los Objetivos de Desarrollo Sostenible",
    author: "Equipo Mundo Puerto",
    image: "/investigaciones/ods_post/images/ods_post01.jpg",
    kind: "Informe",
  },
];

export default function OdsPage() {
  return (
    <CategoriaPage
      title="ODS"
      subtitle="Informes sobre la aplicación de los Objetivos de Desarrollo Sostenible al sector portuario, logístico y de la Marina Mercante argentina."
      sectionKicker="Publicaciones"
      sectionTitle="Informes disponibles"
      posts={posts}
    />
  );
}
