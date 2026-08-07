import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mundopuerto.ar";
const SITE_NAME = "Fundación Mundo Puerto";
const SITE_DESCRIPTION =
  "Fundación argentina dedicada a la investigación, formación y desarrollo de proyectos para una comunidad portuaria, logística y fluviomarítima eficiente, federal y sustentable.";
const SITE_OG_IMAGE = "/images/mp_img/logoMP.png";
const GA_ID = "G-ZX21TC7NYS";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Puertos, logística y sustentabilidad`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Fundación Mundo Puerto",
    "puertos Argentina",
    "logística portuaria",
    "puerto seco",
    "hidrovía",
    "gestión portuaria",
    "ODS portuarios",
    "sustentabilidad portuaria",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Puertos, logística y sustentabilidad`,
    description: SITE_DESCRIPTION,
    locale: "es_AR",
    images: [{ url: SITE_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Puertos, logística y sustentabilidad`,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1f45",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Fundación Mundo Puerto",
  url: SITE_URL,
  logo: `${SITE_URL}/images/mp_img/logoMP.png`,
  description: SITE_DESCRIPTION,
  areaServed: "AR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="stylesheet" href="/content/company2/css/structure.css" />
        <link rel="stylesheet" href="/content/company2/css/company2.css" />
        <link rel="stylesheet" href="/content/company2/css/custom.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="button-default layout-full-width no-content-padding header-transparent minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menu-link-color menuo-right menuo-no-borders mobile-tb-hide mobile-side-slide mobile-mini-mr-ll tablet-sticky mobile-sticky">
        <div id="Wrapper">
          <Header />
          <div id="Content">
            <div className="content_wrapper clearfix">
              <div className="sections_group">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
