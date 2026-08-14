import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { NOTICIAS, type NoticiaCategory } from "@/lib/noticias";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Noticias y editoriales portuarias",
  description:
    "Editoriales, entrevistas y novedades sobre el sistema portuario, logístico y fluviomarítimo argentino, con voces del sector.",
  alternates: { canonical: "/noticias" },
  openGraph: { url: "/noticias", title: "Noticias — Fundación Mundo Puerto" },
};

const noticias = NOTICIAS;

const kickerClass: Record<NoticiaCategory, string> = {
  Editorial: styles.cardKickerEditorial,
  Entrevista: styles.cardKickerEntrevista,
  Noticia: styles.cardKickerNoticia,
};

const featuredKickerClass: Record<NoticiaCategory, string> = {
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
    {} as Record<NoticiaCategory, number>,
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
              fill
              sizes="(max-width: 960px) 100vw, 55vw"
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
