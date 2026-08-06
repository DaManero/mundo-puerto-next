import { readdir } from "node:fs/promises";
import path from "node:path";

const INVESTIGACIONES_ALIASES: Record<string, string> = {
  "puerto-seco": "/investigaciones/puerto_seco_post/puertoSecopost.html",
  puertos: "/investigaciones/puerto_post/puertoPost.html",
  ods: "/investigaciones/ods_post/odspost.html",
  // Aliases para desambiguar los tres post01.html (uno por categoría)
  puertos_relevamientos: "/investigaciones/puerto_post/post01.html",
  puerto_seco_informe: "/investigaciones/puerto_seco_post/post01.html",
  ods_introduccion: "/investigaciones/ods_post/post01.html",
};

const NOTICIAS_ALIASES: Record<string, string> = {
  editorial_practicaje: "/noticias/editorial_practicaje.html",
  entrevista_lourido: "/noticias/entrevista_lourido.html",
  entrevista_duran: "/noticias/entrevista_duran.html",
  entrevista_tarraubela: "/noticias/entrevista_tarraubela.html",
  entrevista_ascensio: "/noticias/entrevista_ascensio.html",
  noticia_01: "/noticias/noticia_01.html",
  noticia_02: "/noticias/noticia_02.html",
};

const PERFILES_ALIASES: Record<string, string> = {
  abarezzi: "/perfiles/abarezzi.html",
  adocarmo: "/perfiles/adocarmo.html",
  dcaglieris: "/perfiles/dcaglieris.html",
  kyarochevski: "/perfiles/kyarochevski.html",
  lsalom: "/perfiles/lsalom.html",
  mlambertucci: "/perfiles/mlambertucci.html",
  mmourelle: "/perfiles/mmourelle.html",
  mperez: "/perfiles/mperez.html",
  pgigliotti: "/perfiles/pgigliotti.html",
  vpinero: "/perfiles/vpinero.html",
};

async function findHtmlBySlug(rootDir: string, slug: string): Promise<string | null> {
  const entries = await readdir(rootDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      const nested = await findHtmlBySlug(fullPath, slug);
      if (nested) {
        return nested;
      }
      continue;
    }

    if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".html")) {
      continue;
    }

    const baseName = entry.name.slice(0, -5).toLowerCase();
    if (baseName === slug.toLowerCase()) {
      const relative = path.relative(path.join(process.cwd(), "public"), fullPath).replaceAll("\\", "/");
      return `/${relative}`;
    }
  }

  return null;
}

export async function getLegacyNoticiasUrl(slug: string): Promise<string | null> {
  return NOTICIAS_ALIASES[slug] ?? null;
}

export async function getLegacyPerfilesUrl(slug: string): Promise<string | null> {
  return PERFILES_ALIASES[slug] ?? null;
}

export async function getLegacyInvestigacionesUrl(slug: string): Promise<string | null> {
  if (INVESTIGACIONES_ALIASES[slug]) {
    return INVESTIGACIONES_ALIASES[slug];
  }

  const investigacionesRoot = path.join(process.cwd(), "public", "investigaciones");
  return findHtmlBySlug(investigacionesRoot, slug);
}
