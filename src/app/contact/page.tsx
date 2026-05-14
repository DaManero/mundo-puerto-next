"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

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
        headers: {
          "Content-Type": "application/json",
        },
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
      setError("Ocurrio un error de red. Intenta nuevamente en unos minutos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="mp-subheader" style={{ backgroundImage: "url('/contact/images/mp_img/slider_contacto.jpg')" }}>
        <div className="container">
          <h1 className="title">Contacto</h1>
        </div>
      </section>

      <section className="section mcb-section" style={{ paddingTop: "100px", paddingBottom: "60px" }}>
        <div className="section_wrapper mcb-section-inner">
          <div className="wrap mcb-wrap one-second valign-top clearfix" style={{ padding: "0 4% 0 2%" }}>
            <div className="mcb-wrap-inner">
              <div className="column mcb-column one column_column">
                <div className="column_attr clearfix">
                  <h2>Envíanos un mensaje</h2>

                  <form id="contactform" onSubmit={handleSubmit} className="mp-contact-form">
                    <div className="column one-second">
                      <input
                        placeholder="Nombre"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="column one-second">
                      <input
                        placeholder="Correo electrónico"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="column one">
                      <input
                        placeholder="Asunto"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="column one">
                      <textarea
                        placeholder="Mensaje"
                        name="message"
                        rows={10}
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="column one">
                      <button type="submit" disabled={loading} className="button button_size_2 button_theme button_js">
                        <span className="button_label">{loading ? "Enviando..." : "Enviar Mensaje"}</span>
                      </button>
                    </div>
                  </form>

                  {error ? <p className="mp-form-error">{error}</p> : null}
                  {success ? <p className="mp-form-success">{success}</p> : null}
                </div>
              </div>
            </div>
          </div>

          <div className="wrap mcb-wrap one-second valign-top clearfix" style={{ padding: "0 2% 0 4%" }}>
            <div className="mcb-wrap-inner">
              <div className="column mcb-column one column_column">
                <div className="column_attr clearfix">
                  <h2>Contacto</h2>
                  <h6>Correo Electrónico</h6>
                  <p>info@mundopuerto.ar</p>

                  <h6>Oficinas</h6>
                  <p>
                    Viamonte 723, Piso 6, Of 24
                    <br />
                    CABA, Argentina
                  </p>

                  <h6>Seguinos...</h6>
                  <p style={{ fontSize: "28px", lineHeight: "40px" }}>
                    <a href="https://twitter.com/MundoPuerto" target="_blank" rel="noreferrer">
                      <i className="icon-twitter-circled"></i>
                    </a>
                  </p>

                  <p>
                    Si preferis, tambien podes visitar la seccion de <Link href="/about">Nosotros</Link> para conocer
                    mas sobre la Fundacion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
