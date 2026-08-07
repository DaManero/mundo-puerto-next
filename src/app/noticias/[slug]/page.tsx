import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegacyIframe from "@/components/LegacyIframe";
import { getLegacyNoticiasUrl } from "@/lib/legacy";
import { getNoticiaBySlug } from "@/lib/noticias";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = getNoticiaBySlug(slug);
  const canonical = `/noticias/${slug}`;

  if (!noticia) {
    return { alternates: { canonical } };
  }

  return {
    title: noticia.title,
    description: noticia.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: noticia.title,
      description: noticia.description,
      images: [{ url: noticia.image, alt: noticia.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: noticia.title,
      description: noticia.description,
      images: [noticia.image],
    },
  };
}

export default async function NoticiaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const legacyUrl = await getLegacyNoticiasUrl(slug);

  if (!legacyUrl) {
    notFound();
  }

  return (
    <main className="mp-legacy-main">
      <LegacyIframe src={legacyUrl} title={`Noticia ${slug}`} />
    </main>
  );
}
