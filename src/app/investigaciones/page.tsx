import Image from "next/image";
import Link from "next/link";

const categorias = [
  {
    href: "/investigaciones/puerto-seco",
    title: "Puertos Secos",
    image: "/investigaciones/images/mp_img/ptoseco_seccion.jpg",
  },
  {
    href: "/investigaciones/puertos",
    title: "Puertos",
    image: "/investigaciones/images/mp_img/puerto_seccion.jpg",
  },
  {
    href: "/investigaciones/ods",
    title: "ODS",
    image: "/investigaciones/images/mp_img/ods_seccion.jpg",
  },
];

export default function InvestigacionesPage() {
  return (
    <main>
      <section className="mp-subheader" style={{ backgroundImage: "url('/investigaciones/images/mp_img/slider_investigacion.jpg')" }}>
        <div className="container">
          <h1 className="title">Investigaciones & Informes</h1>
        </div>
      </section>

      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <h5 className="flv_style_4" style={{ color: "#2556cf", marginBottom: "30px" }}>
            Investigaciones e Informes por Categorias
          </h5>
          <div className="mp-categorias-grid">
            {categorias.map((categoria) => (
              <Link key={categoria.title} href={categoria.href} className="mp-card-link">
                <article className="trailer_box">
                  <Image
                    className="scale-with-grid"
                    src={categoria.image}
                    alt={categoria.title}
                    width={370}
                    height={260}
                  />
                  <div className="desc">
                    <div className="subtitle">VER TODAS</div>
                    <h2>{categoria.title}</h2>
                    <div className="line"></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
