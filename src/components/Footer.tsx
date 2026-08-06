"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./Footer.module.css";

const navLinks = [
  { href: "/about", label: "Nosotros" },
  { href: "/investigaciones", label: "Investigaciones" },
  { href: "/consultivo", label: "Consejo Consultivo" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contact", label: "Contacto" },
];

const investigacionesLinks = [
  { href: "/investigaciones/puertos", label: "Puertos" },
  { href: "/investigaciones/puerto-seco", label: "Puertos Secos" },
  { href: "/investigaciones/ods", label: "ODS" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLogo} aria-label="Ir al inicio">
            <img src="/images/mp_img/logoMP.png" alt="Fundación Mundo Puerto" />
          </Link>
          <p className={styles.brandTagline}>
            Profesionales al servicio de una comunidad portuaria, logística y fluviomarítima
            eficiente, federal y sustentable.
          </p>
          <div className={styles.socials}>
            <a
              href="https://twitter.com/MundoPuerto"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="X / Twitter de Fundación Mundo Puerto"
            >
              <i className="icon-twitter-circled" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Navegación</p>
          <ul className={styles.colList}>
            {navLinks.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Investigaciones</p>
          <ul className={styles.colList}>
            {investigacionesLinks.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Contacto</p>
          <p className={styles.colText}>
            <a href="mailto:info@mundopuerto.ar">info@mundopuerto.ar</a>
          </p>
          <p className={styles.colText}>
            Julio Argentino Roca 710, Piso 10
            <br />
            CABA, Argentina
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {year} Fundación Mundo Puerto. Todos los derechos reservados.
        </p>
        <div className={styles.legal}>
          <Link href="/about">Sobre la Fundación</Link>
          <Link href="/contact">Escribinos</Link>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.backToTop} ${showTop ? styles.backToTopVisible : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver al inicio"
      />
    </footer>
  );
}
