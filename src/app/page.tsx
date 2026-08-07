import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import QuotesCarousel from "./QuotesCarousel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Fundación Mundo Puerto | Puertos, logística y sustentabilidad",
  description:
    "Fundación argentina que promueve investigaciones, formación y proyectos para una comunidad portuaria, logística y fluviomarítima eficiente, federal y sustentable.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Fundación Mundo Puerto" },
};

type Publicacion = {
  href: string;
  title: string;
  date: string;
  image: string;
  category: "Editorial" | "Entrevista" | "Noticia";
};

const ultimasPublicaciones: Publicacion[] = [
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
];

const badgeClass: Record<Publicacion["category"], string> = {
  Editorial: styles.pubBadgeEditorial,
  Entrevista: styles.pubBadgeEntrevista,
  Noticia: styles.pubBadgeNoticia,
};

const areas = [
  {
    href: "/investigaciones",
    number: "01",
    name: "Investigaciones",
    text: "Estudios técnicos, informes y análisis aplicados sobre gestión portuaria, puertos secos y aplicación de los Objetivos de Desarrollo Sostenible.",
    cta: "Ver publicaciones",
  },
  {
    href: "/consultivo",
    number: "02",
    name: "Consejo Consultivo",
    text: "Equipo interdisciplinario que asesora a la Fundación en el impulso a la logística, los puertos y la formación profesional del sector.",
    cta: "Conocer el Consejo",
  },
  {
    href: "/noticias",
    number: "03",
    name: "Sala de prensa",
    text: "Editoriales, entrevistas y novedades sobre el sistema portuario, logístico y fluviomarítimo argentino, con voces del sector.",
    cta: "Leer noticias",
  },
];

const stats: Array<{ value: string; suffix?: string; label: string }> = [
  { value: "17", suffix: "+", label: "Publicaciones" },
  { value: "5", label: "Entrevistas" },
  { value: "3", label: "Áreas de estudio" },
  { value: "10", suffix: "+", label: "Autores y especialistas" },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroKicker}>Fundación</span>
          <h1 className={styles.heroTitle}>Mundo Puerto</h1>
          <p className={styles.heroTagline}>
            Profesionales, investigación y compromiso al servicio de una comunidad portuaria,
            logística y fluviomarítima más eficiente, federal y sustentable.
          </p>
          <div className={styles.heroActions}>
            <Link href="/about" className={styles.heroPrimary}>
              Conocé la Fundación
            </Link>
            <Link href="/investigaciones" className={styles.heroGhost}>
              Ver investigaciones
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          Descubrí más
        </div>
      </section>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Quiénes somos</span>
        <h2 className={styles.sectionTitle}>¿Qué es Mundo Puerto?</h2>
      </header>

      <section className={styles.intro}>
        <p className={styles.introBody}>
          La <strong>Fundación Mundo Puerto</strong> es una organización no gubernamental
          argentina cuyo objetivo es la promoción, investigación, ejecución y desarrollo de
          proyectos que potencien la actividad portuaria y logística, fundamentalmente aquellas
          acciones sustentables que beneficien a la comunidad.
        </p>

        <div className={styles.introStats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <p className={styles.statNumber}>
                {s.value}
                {s.suffix ? <span>{s.suffix}</span> : null}
              </p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Áreas de trabajo</span>
        <h2 className={styles.sectionTitle}>Explorá el trabajo de la Fundación</h2>
        <p className={styles.sectionLead}>
          Tres frentes que articulan nuestro aporte al sistema portuario, logístico y
          fluviomarítimo argentino.
        </p>
      </header>

      <section className={styles.areas}>
        {areas.map((a) => (
          <Link key={a.href} href={a.href} className={styles.areaCard}>
            <span className={styles.areaNumber}>{a.number}</span>
            <h3 className={styles.areaName}>{a.name}</h3>
            <p className={styles.areaText}>{a.text}</p>
            <span className={styles.areaCta}>{a.cta}</span>
          </Link>
        ))}
      </section>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Sala de prensa</span>
        <h2 className={styles.sectionTitle}>Últimas publicaciones</h2>
        <p className={styles.sectionLead}>
          Editoriales, entrevistas y análisis con voces del sistema portuario, logístico y
          fluviomarítimo.
        </p>
      </header>

      <section className={styles.pubGrid}>
        {ultimasPublicaciones.map((pub) => (
          <Link key={pub.href} href={pub.href} className={styles.pubCard}>
            <div className={styles.pubMedia}>
              <div className={styles.pubBadgeWrap}>
                <span className={badgeClass[pub.category]}>{pub.category}</span>
              </div>
              <Image src={pub.image} alt={pub.title} width={520} height={330} />
            </div>
            <div className={styles.pubBody}>
              <span className={styles.pubDate}>{pub.date}</span>
              <h3 className={styles.pubTitle}>{pub.title}</h3>
            </div>
          </Link>
        ))}
      </section>

      <div className={styles.viewAll}>
        <Link href="/noticias">Ver todas las publicaciones</Link>
      </div>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Voces del sector</span>
        <h2 className={styles.sectionTitle}>Lo que decimos y lo que nos dicen</h2>
      </header>

      <QuotesCarousel />

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Sumate</span>
        <h2 className={styles.sectionTitle}>Trabajemos juntos por un sistema portuario mejor</h2>
      </header>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <div className={styles.finalCtaHead}>
            <span className={styles.finalCtaKicker}>Escribinos</span>
            <h3 className={styles.finalCtaTitle}>
              ¿Tenés una consulta, propuesta o querés colaborar con la Fundación?
            </h3>
            <p className={styles.finalCtaLead}>
              Ponete en contacto con nuestro equipo y contanos cómo podemos aportar valor a tu
              organización, tu puerto o tu proyecto.
            </p>
          </div>
          <Link href="/contact" className={styles.finalCtaButton}>
            Contactanos
          </Link>
        </div>
      </section>
    </main>
  );
}
