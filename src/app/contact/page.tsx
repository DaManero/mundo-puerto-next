"use client";

import { FormEvent, useState } from "react";

import styles from "./page.module.css";

type ContactState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: ContactState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok: boolean;
        error?: string;
        errors?: string[];
      };

      if (!response.ok || !data.ok) {
        setError(data.error ?? data.errors?.join(" ") ?? "No se pudo enviar el mensaje.");
        return;
      }

      setSuccess("Tu mensaje fue enviado correctamente. Gracias por contactarte.");
      setForm(initialState);
    } catch {
      setError("Ocurrió un error de red. Intentá nuevamente en unos minutos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroKicker}>Contacto</span>
          <h1 className={styles.heroTitle}>Escribinos</h1>
          <p className={styles.heroSubtitle}>
            ¿Tenés una consulta, propuesta o querés sumarte al trabajo de la Fundación? Contanos
            en qué te podemos ayudar y respondemos a la brevedad.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <aside className={styles.info}>
          <span className={styles.infoKicker}>Datos institucionales</span>
          <h2 className={styles.infoTitle}>Fundación Mundo Puerto</h2>
          <p className={styles.infoLead}>
            Espacio de encuentro de profesionales del sistema portuario, logístico y
            fluviomarítimo argentino.
          </p>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Correo electrónico</span>
            <p className={styles.infoText}>
              <a href="mailto:info@mundopuerto.ar">info@mundopuerto.ar</a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Oficinas</span>
            <p className={styles.infoText}>
              Julio Argentino Roca 710, Piso 10
              <br />
              CABA, Argentina
            </p>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Seguinos</span>
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
        </aside>

        <section className={styles.formCard}>
          <div className={styles.formHead}>
            <span className={styles.formKicker}>Formulario</span>
            <h2 className={styles.formTitle}>Envianos un mensaje</h2>
            <p className={styles.formLead}>
              Completá los campos y nos pondremos en contacto lo antes posible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                Nombre
              </label>
              <input
                id="contact-name"
                className={styles.input}
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                required
                autoComplete="name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                Correo electrónico
              </label>
              <input
                id="contact-email"
                className={styles.input}
                type="email"
                name="email"
                placeholder="nombre@dominio.com"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.fieldFull}>
              <label htmlFor="contact-subject" className={styles.label}>
                Asunto
              </label>
              <input
                id="contact-subject"
                className={styles.input}
                type="text"
                name="subject"
                placeholder="¿Sobre qué querés escribirnos?"
                value={form.subject}
                onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                required
              />
            </div>

            <div className={styles.fieldFull}>
              <label htmlFor="contact-message" className={styles.label}>
                Mensaje
              </label>
              <textarea
                id="contact-message"
                className={styles.textarea}
                name="message"
                rows={8}
                placeholder="Escribinos tu consulta o propuesta..."
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                required
              />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
              {error ? <p className={styles.error}>{error}</p> : null}
              {success ? <p className={styles.success}>{success}</p> : null}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
