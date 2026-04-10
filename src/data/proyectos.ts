// Fuente de datos de proyectos. Cuando se conecte un backend, reemplazar el import
// con un fetch a la API — tipos, componentes y rutas no cambian.
// Hoy:   import { proyectos } from '@/data/proyectos'
// Luego: const proyectos = await fetch('/api/proyectos').then(r => r.json())

import { Proyecto } from '@/types/proyecto'

export const proyectos: Proyecto[] = [

  // ── INSTALACIONES ──────────────────────────────────────────────────────────

  {
    slug:      'casino-santa-fe',
    linea:     'instalaciones',
    categoria: 'otro',
    titulo:    'Casino Santa Fe',
    subtitulo: 'Sistema de audio de zonas múltiples para complejo completo',
    descripcion:
      'Diseño e instalación de un sistema de audio de zonas múltiples para el Casino Santa Fe.\n\n' +
      'El proyecto abarcó desde el diagnóstico acústico inicial hasta la puesta en marcha final, ' +
      'incluyendo la selección del equipamiento, el diseño de distribución de zonas y la instalación completa.\n\n' +
      'Live On Group es el proveedor de referencia del Casino Santa Fe desde la instalación original.',
    anio:      2018,
    ubicacion: 'Santa Fe, Argentina',
    imagenPrincipal: {
      url:    'https://res.cloudinary.com/liveongroup/image/upload/v1/instalaciones/casino-sf/principal.jpg',
      alt:    'Sistema de audio instalado en Casino Santa Fe',
      width:  1600,
      height: 900,
    },
    galeria: [
      {
        url:    'https://res.cloudinary.com/liveongroup/image/upload/v1/instalaciones/casino-sf/sala-principal.jpg',
        alt:    'Sala principal del Casino Santa Fe con sistema de audio instalado',
        width:  1600,
        height: 900,
      },
      {
        url:    'https://res.cloudinary.com/liveongroup/image/upload/v1/instalaciones/casino-sf/detalle-rack.jpg',
        alt:    'Rack de procesamiento y amplificación',
        width:  900,
        height: 1200,
      },
    ],
    detalleTecnico: {
      marcas:         ['QSC', 'Shure'],
      tipoSistema:    'Sistema de zonas múltiples con procesamiento centralizado',
      superficieM2:   2400,
      cantidadPuntos: 48,
      notas:          'Sistema de evacuación integrado, compatible con normativa contra incendios.',
    },
    publicado: true,
    orden:     1,
  },

  // ── PRODUCCIÓN ─────────────────────────────────────────────────────────────

  {
    slug:      'festival-guadalupe-2024',
    linea:     'produccion',
    categoria: 'festival',
    titulo:    'Festival de Guadalupe 2024',
    subtitulo: 'Producción técnica y logística completa del festival',
    descripcion:
      'Producción integral del Festival de Guadalupe 2024.\n\n' +
      'Live On Group estuvo a cargo de la técnica de sonido, iluminación, coordinación de artistas, ' +
      'catering y seguridad. El evento convocó a más de [N] personas en el predio de [ubicación].\n\n' +
      'Este fue el tercer año consecutivo en que Live On Group produjo el festival de forma completa.',
    anio:      2024,
    ubicacion: 'Santa Fe, Argentina',
    imagenPrincipal: {
      url:    'https://res.cloudinary.com/liveongroup/image/upload/v1/produccion/guadalupe-2024/principal.jpg',
      alt:    'Festival de Guadalupe 2024 — vista general del escenario',
      width:  1600,
      height: 900,
    },
    galeria: [
      {
        url:    'https://res.cloudinary.com/liveongroup/image/upload/v1/produccion/guadalupe-2024/escenario.jpg',
        alt:    'Escenario principal del Festival de Guadalupe 2024',
        width:  1600,
        height: 900,
      },
      {
        url:    'https://res.cloudinary.com/liveongroup/image/upload/v1/produccion/guadalupe-2024/backstage.jpg',
        alt:    'Backstage del festival — equipo de producción',
        width:  1200,
        height: 900,
      },
      {
        url:    'https://res.cloudinary.com/liveongroup/image/upload/v1/produccion/guadalupe-2024/publico.jpg',
        alt:    'Público del Festival de Guadalupe 2024',
        width:  1600,
        height: 1067,
      },
    ],
    detalleTecnico: undefined,
    publicado: true,
    orden:     1,
  },

]

// ─── HELPERS ──────────────────────────────────────────────────────────────────
//
// IMPORTANTE: estas funciones son `async` desde el día uno aunque hoy lean
// datos estáticos. El motivo es que cuando se conecte un backend (fetch),
// la firma no cambia y NO hay que volver async todos los componentes que las
// llaman. Los componentes ya las consumen con `await`.

/** Todos los proyectos publicados de una línea, ordenados */
export async function getProyectosByLinea(linea: Proyecto['linea']): Promise<Proyecto[]> {
  return proyectos
    .filter(p => p.linea === linea && p.publicado)
    .sort((a, b) => a.orden - b.orden)
}

/** Un proyecto por slug — undefined si no existe o no está publicado */
export async function getProyectoBySlug(slug: string): Promise<Proyecto | undefined> {
  return proyectos.find(p => p.slug === slug && p.publicado)
}

/** Todos los slugs publicados de una línea — usado para generateStaticParams */
export async function getSlugsForLinea(linea: Proyecto['linea']): Promise<string[]> {
  return proyectos
    .filter(p => p.linea === linea && p.publicado)
    .map(p => p.slug)
}
