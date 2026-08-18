import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarjeta personal",
  description: "Generá una tarjeta personal con QR y vCard para compartir tus datos de contacto.",
  alternates: { canonical: "/tarjeta" },
  openGraph: { url: "/tarjeta", title: "Tarjeta personal — Fundación Mundo Puerto" },
};

export default function TarjetaLayout({ children }: { children: React.ReactNode }) {
  return children;
}