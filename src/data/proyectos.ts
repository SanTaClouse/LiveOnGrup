// Fuente de datos de proyectos — Sanity CMS.
// El cliente edita los proyectos en /studio. Los cambios aparecen en el sitio
// dentro de los 60s gracias a la revalidación (ISR).

import { client } from '../../sanity/client'
import { Proyecto } from '@/types/proyecto'

// ─── QUERIES GROQ ────────────────────────────────────────────────────────────
//
// Proyectamos `asset->{ url, metadata.dimensions }` para que las imágenes
// vengan con la misma forma que el tipo Proyecto:
// { url, alt, width, height }. Así los componentes no se tocan.

const proyectoProjection = /* groq */ `
  "slug": slug.current,
  linea,
  categoria,
  titulo,
  subtitulo,
  descripcion,
  anio,
  ubicacion,
  imagenPrincipal {
    "url":    asset->url,
    "alt":    coalesce(alt, ""),
    "width":  asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height
  },
  "galeria": coalesce(galeria[]{
    "url":    asset->url,
    "alt":    coalesce(alt, ""),
    "width":  asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height
  }, []),
  detalleTecnico,
  publicado,
  orden
`

const REVALIDATE_SECONDS = 60

// ─── HELPERS ──────────────────────────────────────────────────────────────────

/** Todos los proyectos publicados (ambas líneas), ordenados */
export async function getTodosLosProyectos(): Promise<Proyecto[]> {
  const query = /* groq */ `
    *[_type == "proyecto" && publicado == true]
      | order(orden asc) {
      ${proyectoProjection}
    }
  `
  return client.fetch<Proyecto[]>(
    query,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  )
}

/** Proyectos marcados como destacados en la portada (máx. 3), ordenados */
export async function getProyectosDestacados(): Promise<Proyecto[]> {
  const query = /* groq */ `
    *[_type == "proyecto" && publicado == true && destacadoHome == true]
      | order(orden asc)[0...3] {
      ${proyectoProjection}
    }
  `
  return client.fetch<Proyecto[]>(
    query,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  )
}

/** Todos los proyectos publicados de una línea, ordenados */
export async function getProyectosByLinea(linea: Proyecto['linea']): Promise<Proyecto[]> {
  const query = /* groq */ `
    *[_type == "proyecto" && publicado == true && linea == $linea]
      | order(orden asc) {
      ${proyectoProjection}
    }
  `
  return client.fetch<Proyecto[]>(
    query,
    { linea },
    { next: { revalidate: REVALIDATE_SECONDS } },
  )
}

/** Un proyecto por slug — undefined si no existe o no está publicado */
export async function getProyectoBySlug(slug: string): Promise<Proyecto | undefined> {
  const query = /* groq */ `
    *[_type == "proyecto" && slug.current == $slug && publicado == true][0] {
      ${proyectoProjection}
    }
  `
  const result = await client.fetch<Proyecto | null>(
    query,
    { slug },
    { next: { revalidate: REVALIDATE_SECONDS } },
  )
  return result ?? undefined
}

/** Todos los slugs publicados de una línea — usado para generateStaticParams */
export async function getSlugsForLinea(linea: Proyecto['linea']): Promise<string[]> {
  const query = /* groq */ `
    *[_type == "proyecto" && publicado == true && linea == $linea].slug.current
  `
  return client.fetch<string[]>(
    query,
    { linea },
    { next: { revalidate: REVALIDATE_SECONDS } },
  )
}
