import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perfiles del equipo",
  description:
    "Consejo directivo y equipo interdisciplinario de la Fundación Mundo Puerto: profesionales vinculados a la actividad portuaria, logística y a las ciencias del mar.",
  alternates: { canonical: "/perfiles" },
  openGraph: { url: "/perfiles", title: "Perfiles — Fundación Mundo Puerto" },
};

const perfiles = [
  { slug: "lsalom", nombre: "Dr. Leonardo Salom" },
  { slug: "mlambertucci", nombre: "Lic. Martin Lambertucci" },
  { slug: "mmourelle", nombre: "Mtr. Marcelo Mourelle" },
  { slug: "abarezzi", nombre: "Abel Barezzi" },
  { slug: "adocarmo", nombre: "Ana Do Carmo" },
  { slug: "dcaglieris", nombre: "Diego Caglieris" },
  { slug: "kyarochevski", nombre: "Kevin Yarochevski" },
  { slug: "mperez", nombre: "Maximiliano Perez" },
  { slug: "pgigliotti", nombre: "Pablo Gigliotti" },
  { slug: "vpinero", nombre: "Valeria Pinero" },
];

export default function PerfilesPage() {
  return (
    <main>
      <section className="mp-subheader" style={{ backgroundImage: "url('/perfiles/images/mp_img/slider_about.jpg')" }}>
        <div className="container">
          <h1 className="title">Perfiles</h1>
        </div>
      </section>

      <section className="section" style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="mp-perfiles-grid">
            {perfiles.map((perfil) => (
              <Link key={perfil.slug} href={`/perfiles/${perfil.slug}`} className="mp-perfil-item">
                {perfil.nombre}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
