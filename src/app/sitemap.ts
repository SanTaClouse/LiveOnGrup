import { MetadataRoute } from 'next'
import { proyectos } from '@/data/proyectos'

const baseUrl = 'https://liveongroup.com.ar'

// Fechas fijas — el sitemap NO debe cambiar `lastModified` en cada build,
// porque eso confunde a los crawlers (parece que todo se modificó cuando no).
// Actualizar manualmente cuando una página cambie de verdad.
const LAST_MODIFIED = {
  home:          '2026-04-01',
  produccion:    '2026-04-01',
  instalaciones: '2026-04-01',
  quienesSomos:  '2026-04-01',
  clientes:      '2026-04-01',
  contacto:      '2026-04-01',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl,                      lastModified: LAST_MODIFIED.home,          changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/produccion`,      lastModified: LAST_MODIFIED.produccion,    changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/instalaciones`,   lastModified: LAST_MODIFIED.instalaciones, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/quienes-somos`,   lastModified: LAST_MODIFIED.quienesSomos,  changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${baseUrl}/clientes`,        lastModified: LAST_MODIFIED.clientes,      changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contacto`,        lastModified: LAST_MODIFIED.contacto,      changeFrequency: 'yearly',  priority: 0.8 },
  ]

  const proyectoRoutes: MetadataRoute.Sitemap = proyectos
    .filter(p => p.publicado)
    .map(p => ({
      url:             `${baseUrl}/${p.linea}/${p.slug}`,
      lastModified:    `${p.anio}-12-31`,
      changeFrequency: 'yearly' as const,
      priority:        0.7,
    }))

  return [...staticRoutes, ...proyectoRoutes]
}
