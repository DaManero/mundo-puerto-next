import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegacyIframe from "@/components/LegacyIframe";
import { getLegacyPerfilesUrl } from "@/lib/legacy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `/perfiles/${slug}`;
  const title = `Perfil ${slug}`;
  return {
    title,
    alternates: { canonical },
    openGraph: { url: canonical, title },
  };
}

export default async function PerfilDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const legacyUrl = await getLegacyPerfilesUrl(slug);

  if (!legacyUrl) {
    notFound();
  }

  return (
    <main className="mp-legacy-main">
      <LegacyIframe src={legacyUrl} title={`Perfil ${slug}`} />
    </main>
  );
}
