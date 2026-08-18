"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import styles from "./Tarjeta.module.css";

export type Contact = {
  firstName: string;
  lastName: string;
  role: string;
  organization: string;
  email: string;
  phone: string;
  website: string;
};

export const leonardiContact: Contact = {
  firstName: "Juan Ignacio",
  lastName: "Leonardi",
  role: "Presidente",
  organization: "Fundación Mundo Puerto",
  email: "presidencia@mundopuerto.ar",
  phone: "+54 9 11 5848 9999",
  website: "https://mundopuerto.ar",
};

function escapeVCard(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}

function makeVCard(contact: Contact) {
  const firstName = escapeVCard(contact.firstName.trim());
  const lastName = escapeVCard(contact.lastName.trim());
  const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Contacto Mundo Puerto";
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${fullName}`,
  ];

  if (contact.role.trim()) lines.push(`TITLE:${escapeVCard(contact.role.trim())}`);
  if (contact.organization.trim()) lines.push(`ORG:${escapeVCard(contact.organization.trim())}`);
  if (contact.phone.trim()) lines.push(`TEL;TYPE=CELL:${escapeVCard(contact.phone.trim())}`);
  if (contact.email.trim()) lines.push(`EMAIL;TYPE=INTERNET:${escapeVCard(contact.email.trim())}`);
  if (contact.website.trim()) lines.push(`URL:${escapeVCard(contact.website.trim())}`);

  lines.push("END:VCARD");
  return lines.join("\r\n");
}

export function TarjetaPage({ initialContact = leonardiContact }: { initialContact?: Contact }) {
  const [contact, setContact] = useState(initialContact);
  const vCard = makeVCard(contact);
  const displayName = [contact.firstName, contact.lastName].filter(Boolean).join(" ") || "Tu nombre";

  function updateField(field: keyof Contact, value: string) {
    setContact((current) => ({ ...current, [field]: value }));
  }

  function downloadVCard() {
    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${[contact.firstName, contact.lastName].filter(Boolean).join("-") || "contacto-mundo-puerto"}.vcf`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Herramienta para eventos</p>
        <h1>Tu contacto, en un solo escaneo.</h1>
        <p className={styles.lead}>
          Completá tus datos y compartí el QR. La otra persona podrá guardarte directamente en sus contactos.
        </p>
      </section>

      <section className={styles.workspace} aria-label="Generador de tarjeta personal">
        <form className={styles.form}>
          <div className={styles.formHeader}>
            <span className={styles.step}>01</span>
            <div>
              <p className={styles.sectionLabel}>Datos de contacto</p>
              <p className={styles.sectionHint}>Solo se incluyen en el QR los campos que completes.</p>
            </div>
          </div>

          <div className={styles.fields}>
            <label>Nombre<input value={contact.firstName} onChange={(event) => updateField("firstName", event.target.value)} placeholder="Ej. Valeria" /></label>
            <label>Apellido<input value={contact.lastName} onChange={(event) => updateField("lastName", event.target.value)} placeholder="Ej. Piñero" /></label>
            <label className={styles.wide}>Cargo o profesión<input value={contact.role} onChange={(event) => updateField("role", event.target.value)} placeholder="Ej. Directora ejecutiva" /></label>
            <label className={styles.wide}>Organización<input value={contact.organization} onChange={(event) => updateField("organization", event.target.value)} placeholder="Nombre de la organización" /></label>
            <label>Teléfono<input type="tel" value={contact.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+54 9 ..." /></label>
            <label>Email<input type="email" value={contact.email} onChange={(event) => updateField("email", event.target.value)} placeholder="nombre@dominio.com" /></label>
            <label className={styles.wide}>Sitio web<input type="url" value={contact.website} onChange={(event) => updateField("website", event.target.value)} placeholder="https://" /></label>
          </div>
        </form>

        <aside className={styles.card}>
          <div className={styles.cardTop}>
            <span className={styles.cardMark}>MP</span>
            <span className={styles.cardType}>Contacto digital</span>
          </div>
          <div className={styles.cardIdentity}>
            <p className={styles.cardName}>{displayName}</p>
            <p className={styles.cardRole}>{contact.role || "Tu profesión o cargo"}</p>
            <p className={styles.cardOrg}>{contact.organization || "Tu organización"}</p>
          </div>
          <div className={styles.qrBox}>
            <QRCodeSVG value={vCard} size={172} bgColor="#ffffff" fgColor="#10233f" includeMargin />
          </div>
          <p className={styles.scanText}>Escaneá para guardar el contacto</p>
          <button type="button" className={styles.download} onClick={downloadVCard}>
            Descargar vCard (.vcf)
          </button>
        </aside>
      </section>
    </main>
  );
}

export default TarjetaPage;