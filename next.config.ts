import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/consultivo.html", destination: "/consultivo", permanent: true },
      { source: "/investigacion.html", destination: "/investigaciones", permanent: true },
      { source: "/blog.html", destination: "/noticias", permanent: true },
      { source: "/formSumate.html", destination: "/contact", permanent: true },
      { source: "/pricing.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
