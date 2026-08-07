import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Investigaciones e informes portuarios",
  description:
    "Estudios técnicos, informes y análisis aplicados sobre gestión portuaria, puertos secos, hidrovía y aplicación de los Objetivos de Desarrollo Sostenible al sector portuario argentino.",
  alternates: { canonical: "/investigaciones" },
  openGraph: { url: "/investigaciones", title: "Investigaciones — Fundación Mundo Puerto" },
};

type Categoria = {
  href: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
};

const categorias: Categoria[] = [
  {
    href: "/investigaciones/puertos",
    title: "Puertos",
    kicker: "Categoría",
    description:
      "Estudios sobre gestión portuaria, integración puerto-ciudad, hidrovías y competitividad del sistema fluviomarítimo argentino.",
    image: "/investigaciones/images/mp_img/puerto_seccion.jpg",
  },
  {
    href: "/investigaciones/puerto-seco",
    title: "Puertos Secos",
    kicker: "Categoría",
    description:
      "Investigaciones sobre nodos logísticos interiores, corredores bioceánicos y el rol de los puertos secos en el desarrollo federal.",
    image: "/investigaciones/images/mp_img/ptoseco_seccion.jpg",
  },
  {
    href: "/investigaciones/ods",
    title: "ODS",
    kicker: "Categoría",
    description:
      "Informes sobre la aplicación de los Objetivos de Desarrollo Sostenible al sector portuario, logístico y de la Marina Mercante.",
    image: "/investigaciones/images/mp_img/ods_seccion.jpg",
  },
];

export default function InvestigacionesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroKicker}>Centro de estudios</span>
          <h1 className={styles.heroTitle}>Investigaciones &amp; Informes</h1>
          <p className={styles.heroSubtitle}>
            Producción propia de la Fundación Mundo Puerto: análisis técnicos, informes sectoriales
            y trabajos de investigación aplicada sobre el sistema portuario, logístico y
            fluviomarítimo.
          </p>
        </div>
      </section>

      <header className={styles.sectionHead}>
        <div className={styles.sectionHeadCopy}>
          <span className={styles.sectionKicker}>Explorá por categoría</span>
          <h2 className={styles.sectionTitle}>Áreas de trabajo</h2>
        </div>
        <span className={styles.sectionCount}>{categorias.length} categorías</span>
      </header>

      <section className={styles.grid}>
        {categorias.map((categoria) => (
          <Link key={categoria.href} href={categoria.href} className={styles.card}>
            <div className={styles.cardMedia}>
              <div className={styles.cardKickerWrap}>
                <span className={styles.cardKicker}>{categoria.kicker}</span>
              </div>
              <Image src={categoria.image} alt={categoria.title} width={520} height={390} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{categoria.title}</h3>
              <p className={styles.cardDesc}>{categoria.description}</p>
              <span className={styles.cardCta}>Ver investigaciones</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
