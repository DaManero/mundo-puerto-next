import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Noticias y editoriales portuarias",
  description:
    "Editoriales, entrevistas y novedades sobre el sistema portuario, logístico y fluviomarítimo argentino, con voces del sector.",
  alternates: { canonical: "/noticias" },
  openGraph: { url: "/noticias", title: "Noticias — Fundación Mundo Puerto" },
};

type Category = "Editorial" | "Entrevista" | "Noticia";

type Noticia = {
  href: string;
  title: string;
  date: string;
  image: string;
  category: Category;
};

// El primer item del array es el destacado. Para publicar una nueva noticia, agregala al comienzo.
const noticias: Noticia[] = [
  {
    href: "/noticias/editorial_practicaje",
    title: "Practicaje, pilotaje, baquía: una reforma que exige revisión técnica antes que ideológica",
    date: "05 de Agosto de 2026",
    image: "/noticias/img_noticias/editorial_practicaje.jpg",
    category: "Editorial",
  },
  {
    href: "/noticias/entrevista_lourido",
    title: "Lourido: “No perdamos la esencia de los puertos”",
    date: "11 de Mayo de 2023",
    image: "/noticias/img_noticias/lourido_0101.jpg",
    category: "Entrevista",
  },
  {
    href: "/noticias/entrevista_duran",
    title: "Durán: “Un puerto verde es un puerto más competitivo”",
    date: "18 de Abril de 2023",
    image: "/noticias/img_noticias/duran_0101.jpg",
    category: "Entrevista",
  },
  {
    href: "/noticias/entrevista_tarraubela",
    title: "Tarraubella: “Ser sostenible es negocio”",
    date: "17 de Marzo de 2023",
    image: "/noticias/img_noticias/taraubella_0101.jpg",
    category: "Entrevista",
  },
  {
    href: "/noticias/entrevista_ascensio",
    title: "Ascencio: “El liderazgo de la comunidad logística empieza por la autoridad portuaria local”",
    date: "19 de Diciembre de 2022",
    image: "/noticias/img_noticias/ascencio_01.jpg",
    category: "Entrevista",
  },
  {
    href: "/noticias/noticia_02",
    title: "Fray Jorge Bender: “No hay arma más poderosa que la educación”",
    date: "22 de Noviembre de 2022",
    image: "/noticias/img_noticias/bender_01.jpg",
    category: "Noticia",
  },
  {
    href: "/noticias/noticia_01",
    title: "Se presentó la Fundación Mundo Puerto",
    date: "04 de Noviembre de 2022",
    image: "/noticias/img_noticias/not_blog_01.jpg",
    category: "Noticia",
  },
];

const kickerClass: Record<Category, string> = {
  Editorial: styles.cardKickerEditorial,
  Entrevista: styles.cardKickerEntrevista,
  Noticia: styles.cardKickerNoticia,
};

const featuredKickerClass: Record<Category, string> = {
  Editorial: styles.featuredKickerEditorial,
  Entrevista: styles.featuredKickerEntrevista,
  Noticia: styles.featuredKickerNoticia,
};

export default function NoticiasPage() {
  const [featured, ...rest] = noticias;

  const counts = noticias.reduce(
    (acc, n) => {
      acc[n.category] = (acc[n.category] ?? 0) + 1;
      return acc;
    },
    {} as Record<Category, number>,
  );

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroKicker}>Sala de prensa</span>
          <h1 className={styles.heroTitle}>Noticias &amp; Editoriales</h1>
          <p className={styles.heroSubtitle}>
            Actualidad, análisis técnico y voces del sistema portuario, logístico y fluviomarítimo.
            Un espacio de la Fundación Mundo Puerto para pensar el futuro del sector.
          </p>
        </div>
      </section>

      <div className={styles.filterBar}>
        <span className={styles.filterChipActive}>Todas · {noticias.length}</span>
        <span className={styles.filterChip}>Editoriales · {counts.Editorial ?? 0}</span>
        <span className={styles.filterChip}>Entrevistas · {counts.Entrevista ?? 0}</span>
        <span className={styles.filterChip}>Noticias · {counts.Noticia ?? 0}</span>
      </div>

      <section className={styles.featured}>
        <Link href={featured.href} className={styles.featuredCard}>
          <div className={styles.featuredMedia}>
            <Image
              src={featured.image}
              alt={featured.title}
              width={800}
              height={520}
              priority
            />
          </div>
          <div className={styles.featuredBody}>
            <div className={styles.featuredMeta}>
              <span className={featuredKickerClass[featured.category]}>{featured.category}</span>
              <span className={styles.featuredDot} />
              <span>{featured.date}</span>
            </div>
            <h2 className={styles.featuredTitle}>{featured.title}</h2>
            <span className={styles.featuredCta}>Leer artículo</span>
          </div>
        </Link>
      </section>

      <section className={styles.grid}>
        {rest.map((item) => (
          <Link key={item.href} href={item.href} className={styles.card}>
            <div className={styles.cardMedia}>
              <div className={styles.cardKickerWrap}>
                <span className={kickerClass[item.category]}>{item.category}</span>
              </div>
              <Image src={item.image} alt={item.title} width={520} height={330} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardDate}>{item.date}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <span className={styles.cardCta}>Leer más</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
