import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos a Fundación Mundo Puerto para consultas sobre investigaciones, colaboración institucional o difusión de proyectos portuarios y logísticos.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contacto — Fundación Mundo Puerto" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
