import { notFound } from "next/navigation";

import { getLegacyNoticiasUrl } from "@/lib/legacy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NoticiaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const legacyUrl = await getLegacyNoticiasUrl(slug);

  if (!legacyUrl) {
    notFound();
  }

  return (
    <main className="mp-legacy-main">
      <iframe
        className="mp-legacy-frame"
        src={legacyUrl}
        title={`Noticia ${slug}`}
        loading="lazy"
      />
    </main>
  );
}
