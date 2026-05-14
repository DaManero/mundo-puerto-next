import { notFound } from "next/navigation";

import { getLegacyInvestigacionesUrl } from "@/lib/legacy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InvestigacionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const legacyUrl = await getLegacyInvestigacionesUrl(slug);

  if (!legacyUrl) {
    notFound();
  }

  return (
    <main className="mp-legacy-main">
      <iframe
        className="mp-legacy-frame"
        src={legacyUrl}
        title={`Investigacion ${slug}`}
        loading="lazy"
      />
    </main>
  );
}
