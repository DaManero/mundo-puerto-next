import Image from "next/image";
import Link from "next/link";

const noticias = [
  {
    href: "/noticias/entrevista_lourido",
    title: "Entrevista a Laureano Lourido",
    date: "11 de Mayo de 2023",
    image: "/noticias/img_noticias/lourido_0101.jpg",
  },
  {
    href: "/noticias/entrevista_duran",
    title: "Entrevista a Jorge Duran",
    date: "18 de Abril de 2023",
    image: "/noticias/img_noticias/duran_0101.jpg",
  },
  {
    href: "/noticias/entrevista_tarraubela",
    title: "Entrevista Rodolfo Tarraubella",
    date: "17 de Marzo de 2023",
    image: "/noticias/img_noticias/taraubella_0101.jpg",
  },
  {
    href: "/noticias/entrevista_ascensio",
    title: "Entrevista al Ing. Luis Ascencio",
    date: "19 de Diciembre de 2022",
    image: "/noticias/img_noticias/ascencio_01.jpg",
  },
  {
    href: "/noticias/noticia_02",
    title: "Fray Jorge Bender: no hay arma mas poderosa que la educacion",
    date: "22 de Noviembre de 2022",
    image: "/noticias/img_noticias/bender_01.jpg",
  },
  {
    href: "/noticias/noticia_01",
    title: "Novedades Mundo Puerto",
    date: "04 de Noviembre de 2022",
    image: "/noticias/img_noticias/not_blog_01.jpg",
  },
];

export default function NoticiasPage() {
  return (
    <main>
      <section className="mp-subheader" style={{ backgroundImage: "url('/noticias/images/mp_img/slider_blog.jpg')" }}>
        <div className="container">
          <h1 className="title">Noticias</h1>
        </div>
      </section>

      <section className="section mp-noticias-section">
        <div className="container mp-noticias-list">
          {noticias.map((item) => (
            <article key={item.href} className="post-item isotope-item clearfix post has-post-thumbnail hentry">
              <div className="image_frame post-photo-wrapper scale-with-grid image">
                <div className="image_wrapper">
                  <Link href={item.href}>
                    <div className="mask"></div>
                    <Image src={item.image} alt={item.title} width={420} height={260} className="scale-with-grid wp-post-image" />
                  </Link>
                </div>
              </div>
              <div className="post-desc-wrapper">
                <div className="post-desc">
                  <div className="post-head">
                    <div className="post-meta clearfix">
                      <div className="author-date">
                        <i className="icon-clock"></i>
                        <span className="post-date updated"> {item.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="post-title">
                    <h2 className="entry-title">
                      <Link href={item.href}>{item.title}</Link>
                    </h2>
                  </div>
                  <div className="post-footer">
                    <div className="post-links">
                      <i className="icon-doc-text"></i>
                      <Link href={item.href} className="post-more">
                        Leer Noticia
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
