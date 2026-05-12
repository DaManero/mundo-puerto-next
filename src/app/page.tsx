import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span className={styles.badge}>Mundo Puerto</span>
        <div className={styles.logoWrap}>
          <Image
            src="/images/mp_img/logoMP.png"
            alt="Logo Fundacion Mundo Puerto"
            width={320}
            height={88}
            className={styles.logo}
            priority
          />
        </div>
        <div className={styles.intro}>
          <h1>Sitio en mantenimiento</h1>
          <p>
            Estamos trabajando para lanzar una nueva version del sitio.
            Volveremos en breve con mejoras de contenido, rendimiento y una
            mejor experiencia.
          </p>
        </div>
        <div className={styles.meta}>
          <p>Gracias por tu paciencia.</p>
          <p>Contacto: info@mundopuerto.ar</p>
        </div>
      </main>
    </div>
  );
}
