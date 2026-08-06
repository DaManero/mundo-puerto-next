import Image from "next/image";

import styles from "./page.module.css";

const manifesto = [
  {
    label: "Visión",
    name: "Puertos conectados a su comunidad",
    text: "Surgimos de la necesidad de conectar los puertos con sus comunidades, conciliando el desarrollo portuario y logístico con el compromiso hacia el entorno. Promovemos proyectos sustentables que cuiden nuestra casa común.",
  },
  {
    label: "Misión",
    name: "Desarrollo técnico y formación profesional",
    text: "Promovemos el desarrollo técnico y la formación profesional como herramientas para el progreso del sector portuario y logístico. Fomentamos la interrelación de los actores nacionales e internacionales para alcanzar todo su potencial.",
  },
  {
    label: "Objetivo general",
    name: "Investigar, ejecutar y desarrollar",
    text: "La Fundación tiene por objetivo la promoción, investigación, ejecución y desarrollo de proyectos que potencien la actividad portuaria y logística, priorizando aquellas acciones sustentables que beneficien a la comunidad.",
  },
];

const objetivos = [
  {
    verb: "Promocionar",
    text: "Participar, diseñar y ejecutar estudios, programas y proyectos referidos a temas portuarios y logísticos, nacionales y regionales.",
  },
  {
    verb: "Asesorar y asistir",
    text: "Técnicamente a instituciones nacionales, provinciales e internacionales en temas relacionados con la actividad portuaria y logística.",
  },
  {
    verb: "Promover la coordinación",
    text: "Entre las distintas instituciones —públicas y privadas, nacionales o extranjeras— vinculadas a la planificación y ejecución de políticas portuarias y logísticas.",
  },
  {
    verb: "Articular",
    text: "Acciones intersectoriales mediante la firma de convenios de asistencia técnica y de cooperación, a nivel nacional e internacional.",
  },
  {
    verb: "Diseñar y ejecutar",
    text: "Proyectos de desarrollo y estímulo en las comunidades y en el entorno portuario.",
  },
  {
    verb: "Capacitar",
    text: "A los recursos humanos de las instituciones vinculadas a la actividad portuaria y logística —nacionales, provinciales, públicas o privadas— para potenciar sus capacidades de desarrollo.",
  },
  {
    verb: "Brindar",
    text: "Cursos, seminarios, congresos y otras actividades de capacitación para transferir herramientas de gestión, metodologías y conocimientos en materia portuaria y logística en todo el país y la región.",
  },
];

const directivo = [
  {
    slug: "lsalom",
    name: "Dr. Leonardo Salom",
    role: "Presidente",
    photo: "/about/images/img_perfiles/lsalomP.jpg",
  },
  {
    slug: "mlambertucci",
    name: "Mg. Mauricio Lambertucci",
    role: "Vicepresidente",
    photo: "/about/images/img_perfiles/mlambertucciP.jpg",
  },
  {
    slug: "dcaglieris",
    name: "Lic. Damián Caglieris",
    role: "Secretario",
    photo: "/about/images/img_perfiles/dcaglierisP.jpg",
  },
  {
    slug: "vpinero",
    name: "Cra. Verónica Piñero",
    role: "Tesorera",
    photo: "/about/images/img_perfiles/vpineroP.jpg",
  },
  {
    slug: "kyarochevski",
    name: "Dra. Karina Yarochevski",
    role: "Directora Ejecutiva",
    photo: "/about/images/img_perfiles/kyarochevskiP.jpg",
  },
];

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroKicker}>La Fundación</span>
          <h1 className={styles.heroTitle}>Sobre nosotros</h1>
          <p className={styles.heroSubtitle}>
            Una comunidad interdisciplinaria dedicada al desarrollo técnico, la formación
            profesional y la sustentabilidad del sistema portuario y logístico argentino.
          </p>
        </div>
      </section>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Quiénes somos</span>
        <h2 className={styles.sectionTitle}>Un puente entre los puertos y la comunidad</h2>
        <p className={styles.sectionLead}>
          La visión, la misión y el objetivo general que guían el trabajo diario de la Fundación
          Mundo Puerto.
        </p>
      </header>

      <section className={styles.manifesto}>
        <figure className={styles.manifestoFigure}>
          <Image
            src="/about/images/mp_img/img_about_01.jpg"
            alt="Fundación Mundo Puerto"
            width={640}
            height={800}
            priority
          />
        </figure>
        <div className={styles.manifestoBlocks}>
          {manifesto.map((item) => (
            <article key={item.label} className={styles.manifestoBlock}>
              <span className={styles.manifestoLabel}>{item.label}</span>
              <h3 className={styles.manifestoName}>{item.name}</h3>
              <p className={styles.manifestoText}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Objetivos</span>
        <h2 className={styles.sectionTitle}>Líneas de acción de la Fundación</h2>
        <p className={styles.sectionLead}>
          Compromisos concretos que estructuran nuestro programa de trabajo y articulan la
          cooperación entre los actores del sistema portuario y logístico.
        </p>
      </header>

      <section className={styles.grid}>
        {objetivos.map((item, i) => (
          <article key={item.verb} className={styles.card}>
            <span className={styles.cardNumber}>{pad(i)}</span>
            <p>
              <span className={styles.cardVerb}>{item.verb}</span>
            </p>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </section>

      {/* Sección Consejo Directivo oculta temporalmente. Datos disponibles en `directivo`. */}
    </main>
  );
}
