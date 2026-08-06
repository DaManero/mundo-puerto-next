"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import styles from "./QuotesCarousel.module.css";

type Quote = {
  text: string;
  name: string;
  role: string;
  href: string;
};

const quotes: Quote[] = [
  {
    text: "El servicio de practicaje no es un requisito burocrático adosado a la operación portuaria: es un dispositivo de gestión de riesgo operacional en tramos de navegación donde la maniobrabilidad, la restricción de las aguas y el factor humano interactúan de forma crítica.",
    name: "Juan Ignacio Leonardi",
    role: "Presidente · Fundación Mundo Puerto",
    href: "/noticias/editorial_practicaje",
  },
  {
    text: "No perdamos la esencia de los puertos. El servicio portuario es que entren los barcos y que la mercadería pase de manera competitiva para generar riqueza.",
    name: "Laureano Lourido",
    role: "Presidente · Autoridad Portuaria de Gijón",
    href: "/noticias/entrevista_lourido",
  },
  {
    text: "Un puerto verde es un puerto más competitivo. La sostenibilidad debe ser parte central de la gestión estratégica de cada puerto de la región.",
    name: "Jorge Durán",
    role: "Secretario · CIP-OEA",
    href: "/noticias/entrevista_duran",
  },
  {
    text: "Ser sostenible es negocio. No lo es solo porque económicamente se reciba más, sino porque también será un legado para las generaciones venideras: es restaurar parte del planeta.",
    name: "Rodolfo Tarraubella",
    role: "Presidente · CIFAL Argentina",
    href: "/noticias/entrevista_tarraubela",
  },
  {
    text: "El liderazgo de la comunidad logística empieza por la autoridad portuaria local. Si la autoridad portuaria no se involucra, el privado menos va a pujar por conformar sus comunidades.",
    name: "Luis Ascencio",
    role: "Especialista en logística portuaria",
    href: "/noticias/entrevista_ascensio",
  },
];

const AUTO_ADVANCE_MS = 8000;

export default function QuotesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex(((i % quotes.length) + quotes.length) % quotes.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div className={styles.wrap}>
      <div
        className={styles.stage}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Voces del sector"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className={styles.track}>
          {quotes.map((q, i) => {
            const active = i === index;
            return (
              <blockquote
                key={q.name}
                className={`${styles.slide} ${active ? styles.slideActive : ""}`}
                aria-hidden={!active}
              >
                <p className={styles.text}>{q.text}</p>
                <footer className={styles.author}>
                  <p className={styles.authorName}>{q.name}</p>
                  <p className={styles.authorRole}>{q.role}</p>
                  <Link href={q.href} className={styles.readMore}>
                    Leer artículo
                  </Link>
                </footer>
              </blockquote>
            );
          })}
        </div>

        <div className={styles.controls}>
          <div className={styles.dots} role="tablist" aria-label="Seleccionar declaración">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ver declaración ${i + 1} de ${quotes.length}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className={styles.arrows}>
            <button type="button" className={styles.arrow} onClick={prev} aria-label="Declaración anterior">
              ←
            </button>
            <button type="button" className={styles.arrow} onClick={next} aria-label="Siguiente declaración">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
