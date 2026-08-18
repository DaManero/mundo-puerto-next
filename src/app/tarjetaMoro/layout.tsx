import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leandro Moro | Tarjeta personal",
  description: "Tarjeta personal de Leandro Moro con contacto vCard y código QR.",
  alternates: { canonical: "/tarjetaMoro" },
  openGraph: { url: "/tarjetaMoro", title: "Leandro Moro — Fundación Mundo Puerto" },
};

export default function TarjetaMoroLayout({ children }: { children: React.ReactNode }) {
  return children;
}