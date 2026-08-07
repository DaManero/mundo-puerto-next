import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegacyIframe from "@/components/LegacyIframe";
import { getLegacyInvestigacionesUrl } from "@/lib/legacy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `/investigaciones/${slug}`;
  const title = `Investigación ${slug}`;
  return {
    title,
    alternates: { canonical },
    openGraph: { url: canonical, title },
  };
}

export default async function InvestigacionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const legacyUrl = await getLegacyInvestigacionesUrl(slug);

  if (!legacyUrl) {
    notFound();
  }

  return (
    <main className="mp-legacy-main">
      <LegacyIframe src={legacyUrl} title={`Investigacion ${slug}`} />
    </main>
  );
}
