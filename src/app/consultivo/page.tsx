import styles from "./page.module.css";

type Objetivo = {
  verb: string;
  text: string;
};

const mision: Objetivo[] = [
  {
    verb: "Bregar",
    text: "por el cumplimiento de la misión de la Fundación, promoviendo la conjunción de esfuerzos de entidades sociales, empresariales, educativas, científicas, de la administración pública argentina y de los organismos internacionales, mediante un equipo interdisciplinario de profesionales vinculados a las ciencias del mar y a los ecosistemas acuáticos continentales.",
  },
  {
    verb: "Impulsar",
    text: "el desarrollo de la logística y los puertos de la República Argentina, definiendo estándares de calidad y propendiendo a la preservación del medio ambiente necesarios para su funcionamiento, favoreciendo la integración nacional y con los mercados internacionales.",
  },
  {
    verb: "Promover",
    text: "la mejora continua de la logística y los puertos existentes, así como también fomentar mecanismos de cooperación entre los mismos.",
  },
  {
    verb: "Fomentar y proponer",
    text: "acciones a las autoridades nacionales, subnacionales e internacionales tendientes a favorecer el crecimiento, mantenimiento y mejora continua de la logística y los puertos, tanto en su faceta operativa como en el cuidado del medio ambiente.",
  },
  {
    verb: "Desarrollar",
    text: "una comunidad permanente de aprendizaje y cooperación entre los organismos nacionales, subnacionales e internacionales encargados de la formación profesional, para difundir conocimientos, experiencias y buenas prácticas.",
  },
  {
    verb: "Ganar confianza",
    text: "y crear demanda para nuestros puertos en un contexto de competencia internacional, articulando la voz de los actores públicos y privados que integran el sistema portuario argentino.",
  },
];

const funciones: Objetivo[] = [
  {
    verb: "Promover y fortalecer",
    text: "la cooperación para el desarrollo institucional y la modernización de la formación profesional entre los países de América Latina y el Caribe, y entre la región de las Américas y otras regiones del mundo.",
  },
  {
    verb: "Contribuir",
    text: "al diseño y la gestión de políticas públicas de formación profesional acordes con el programa de trabajo de la Fundación.",
  },
  {
    verb: "Desarrollar",
    text: "una comunidad de aprendizaje y gestión del conocimiento en formación profesional, a través de la recuperación crítica, sistematización y diseminación de información, experiencias e innovaciones.",
  },
  {
    verb: "Fomentar",
    text: "la investigación relacionada con las instituciones, atendiendo criterios de eficiencia, competitividad, productividad, calidad y equidad social.",
  },
  {
    verb: "Difundir",
    text: "conocimientos, experiencias y buenas prácticas en materia de capacitación y desarrollo de recursos humanos entre los organismos nacionales, subnacionales e internacionales encargados de la formación profesional.",
  },
];

const pilares = [
  {
    label: "Pilar 01",
    name: "Docencia",
    text: "Definiendo al aprendizaje como un proceso que potencia el pensamiento crítico, la creatividad, la toma de decisiones, la capacidad de diálogo y la construcción de consenso.",
  },
  {
    label: "Pilar 02",
    name: "Extensión",
    text: "Promoviendo la distribución social del conocimiento, coadyuvando a la formación de amplios sectores de la actividad e incentivando la formación continua.",
  },
  {
    label: "Pilar 03",
    name: "Investigación",
    text: "Sosteniendo que los recursos humanos utilizarán la formación científico-tecnológica con una visión productiva, totalizadora e integral.",
  },
];

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

export default function ConsultivoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroKicker}>Órgano de gobernanza</span>
          <h1 className={styles.heroTitle}>Consejo Consultivo</h1>
          <p className={styles.heroSubtitle}>
            Un equipo interdisciplinario que asesora a la Fundación Mundo Puerto en el impulso a la
            logística, los puertos y la formación profesional del sistema portuario argentino.
          </p>
        </div>
      </section>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Misión</span>
        <h2 className={styles.sectionTitle}>El propósito que guía nuestro trabajo</h2>
        <p className={styles.sectionLead}>
          Compromisos que orientan la agenda del Consejo Consultivo y articulan el aporte
          técnico, social e institucional de la Fundación.
        </p>
      </header>

      <section className={styles.grid}>
        {mision.map((item, i) => (
          <article key={item.verb} className={styles.card}>
            <span className={styles.cardNumber}>{pad(i)}</span>
            <p>
              <span className={styles.cardVerb}>{item.verb}</span>
            </p>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </section>

      <header className={styles.sectionHead}>
        <span className={styles.sectionKicker}>Funciones</span>
        <h2 className={styles.sectionTitle}>Cómo llevamos adelante esa misión</h2>
        <p className={styles.sectionLead}>
          Líneas de trabajo específicas para acompañar el desarrollo institucional, la
          cooperación regional y la modernización de la formación profesional.
        </p>
      </header>

      <section className={styles.grid}>
        {funciones.map((item, i) => (
          <article key={item.verb} className={styles.card}>
            <span className={styles.cardNumber}>{pad(i)}</span>
            <p>
              <span className={styles.cardVerb}>{item.verb}</span>
            </p>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.pilares}>
        <div className={styles.pilaresInner}>
          <div className={styles.pilaresHead}>
            <span className={styles.pilaresKicker}>Pilares funcionales</span>
            <h2 className={styles.pilaresTitle}>
              Tres pilares que sostienen la formación y la investigación
            </h2>
          </div>
          <div className={styles.pilaresGrid}>
            {pilares.map((p) => (
              <article key={p.name} className={styles.pilar}>
                <span className={styles.pilarLabel}>{p.label}</span>
                <h3 className={styles.pilarName}>{p.name}</h3>
                <p className={styles.pilarText}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
