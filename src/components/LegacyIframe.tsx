"use client";

import { useEffect, useRef } from "react";

type LegacyIframeProps = {
  src: string;
  title: string;
};

const STATIC_ROUTE_MAP: Record<string, string> = {
  "/index.html": "/",
  "/about.html": "/about",
  "/contact.html": "/contact",
  "/consultivo.html": "/consultivo",
  "/investigacion.html": "/investigaciones",
  "/blog.html": "/noticias",
};

function normalizePath(pathname: string): string {
  return pathname.replace(/\\+/g, "/");
}

function mapLegacyPathToNext(pathname: string): string {
  const normalized = normalizePath(pathname);
  const staticRoute = STATIC_ROUTE_MAP[normalized];
  if (staticRoute) {
    return staticRoute;
  }

  if (normalized.startsWith("/noticias/") && normalized.endsWith(".html")) {
    const slug = normalized.split("/").pop()?.replace(/\.html$/i, "");
    if (slug) {
      return `/noticias/${slug}`;
    }
  }

  if (normalized.startsWith("/perfiles/") && normalized.endsWith(".html")) {
    const slug = normalized.split("/").pop()?.replace(/\.html$/i, "");
    if (slug) {
      return `/perfiles/${slug}`;
    }
  }

  if (normalized.startsWith("/investigaciones/") && normalized.endsWith(".html")) {
    const slug = normalized.split("/").pop()?.replace(/\.html$/i, "");
    if (slug) {
      return `/investigaciones/${slug}`;
    }
  }

  return normalized;
}

function isBypassLink(href: string): boolean {
  return href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:");
}

export default function LegacyIframe({ src, title }: LegacyIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    let cleanupDocListener: (() => void) | null = null;

    const handleLoad = () => {
      if (cleanupDocListener) {
        cleanupDocListener();
        cleanupDocListener = null;
      }

      const doc = iframe.contentDocument;
      if (!doc) {
        return;
      }

      const anchors = Array.from(doc.querySelectorAll<HTMLAnchorElement>("a[href]"));
      for (const anchor of anchors) {
        const rawHref = anchor.getAttribute("href") ?? "";
        if (!rawHref || isBypassLink(rawHref)) {
          continue;
        }

        const absoluteUrl = new URL(rawHref, iframe.contentWindow?.location.href ?? window.location.href);
        if (absoluteUrl.origin !== window.location.origin) {
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
          continue;
        }

        const mappedPath = mapLegacyPathToNext(absoluteUrl.pathname);
        anchor.href = `${mappedPath}${absoluteUrl.search}${absoluteUrl.hash}`;
        anchor.target = "_top";
      }

      const onDocumentClick = (event: MouseEvent) => {
        const target = event.target;
        if (!(target instanceof Element)) {
          return;
        }

        const anchor = target.closest("a[href]");
        if (!(anchor instanceof HTMLAnchorElement)) {
          return;
        }

        const rawHref = anchor.getAttribute("href") ?? "";
        if (!rawHref || isBypassLink(rawHref)) {
          return;
        }

        const absoluteUrl = new URL(rawHref, iframe.contentWindow?.location.href ?? window.location.href);
        if (absoluteUrl.origin !== window.location.origin) {
          return;
        }

        event.preventDefault();
        const mappedPath = mapLegacyPathToNext(absoluteUrl.pathname);
        window.location.assign(`${mappedPath}${absoluteUrl.search}${absoluteUrl.hash}`);
      };

      doc.addEventListener("click", onDocumentClick, true);
      cleanupDocListener = () => {
        doc.removeEventListener("click", onDocumentClick, true);
      };
    };

    iframe.addEventListener("load", handleLoad);
    handleLoad();

    return () => {
      iframe.removeEventListener("load", handleLoad);
      if (cleanupDocListener) {
        cleanupDocListener();
      }
    };
  }, []);

  return <iframe ref={iframeRef} className="mp-legacy-frame" src={src} title={title} loading="lazy" />;
}