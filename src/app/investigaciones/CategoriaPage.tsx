import Image from "next/image";
import Link from "next/link";

import styles from "./categoria.module.css";

export type CategoriaPost = {
  href: string;
  title: string;
  author?: string;
  image: string;
  kind: "Informe";
};

export type CategoriaPageProps = {
  title: string;
  subtitle: string;
  sectionKicker: string;
  sectionTitle: string;
  posts: CategoriaPost[];
};

export function CategoriaPage({
  title,
  subtitle,
  sectionKicker,
  sectionTitle,
  posts,
}: CategoriaPageProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroKicker}>Centro de estudios</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
          <Link href="/investigaciones" className={styles.backLink}>
            Volver a Investigaciones
          </Link>
        </div>
      </section>

      <header className={styles.sectionHead}>
        <div className={styles.sectionHeadCopy}>
          <span className={styles.sectionKicker}>{sectionKicker}</span>
          <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        </div>
        <span className={styles.sectionCount}>
          {posts.length} {posts.length === 1 ? "publicación" : "publicaciones"}
        </span>
      </header>

      <section className={styles.grid}>
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className={styles.card}>
            <div className={styles.cardMedia}>
              <div className={styles.cardKickerWrap}>
                <span className={styles.cardKickerInforme}>{post.kind}</span>
              </div>
              <Image src={post.image} alt={post.title} width={520} height={330} />
            </div>
            <div className={styles.cardBody}>
              {post.author ? <span className={styles.cardAuthor}>{post.author}</span> : null}
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <span className={styles.cardCta}>Leer publicación</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
