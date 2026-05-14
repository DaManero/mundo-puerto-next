import { notFound } from "next/navigation";

import { getLegacyPerfilesUrl } from "@/lib/legacy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PerfilDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const legacyUrl = await getLegacyPerfilesUrl(slug);

  if (!legacyUrl) {
    notFound();
  }

  return (
    <main className="mp-legacy-main">
      <iframe
        className="mp-legacy-frame"
        src={legacyUrl}
        title={`Perfil ${slug}`}
        loading="lazy"
      />
    </main>
  );
}
