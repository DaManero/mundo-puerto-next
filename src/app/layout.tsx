import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Fundación Mundo Puerto",
  description: "Profesionales en busca de una comunidad portuaria y logística eficiente y sustentable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="stylesheet" href="/content/company2/css/structure.css" />
        <link rel="stylesheet" href="/content/company2/css/company2.css" />
        <link rel="stylesheet" href="/content/company2/css/custom.css" />
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
    </html>
  );
}
