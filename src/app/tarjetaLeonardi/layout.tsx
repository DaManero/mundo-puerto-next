import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Ignacio Leonardi | Tarjeta personal",
  description: "Tarjeta personal de Juan Ignacio Leonardi con contacto vCard y código QR.",
  alternates: { canonical: "/tarjetaLeonardi" },
  openGraph: { url: "/tarjetaLeonardi", title: "Juan Ignacio Leonardi — Fundación Mundo Puerto" },
};

export default function TarjetaLeonardiLayout({ children }: { children: React.ReactNode }) {
  return children;
}