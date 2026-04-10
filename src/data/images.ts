/**
 * Imágenes placeholder de Unsplash para presentación al cliente.
 * Reemplazar con fotos reales cuando estén disponibles.
 *
 * Formato URL: ?w=WIDTH&q=QUALITY para optimizar carga.
 * Todas las fotos son de uso libre (Unsplash License).
 */

export const images = {
  heroes: {
    // Concierto/evento con luces — multitud y escenario
    home: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80',
    // Producción de evento — stage con luces profesionales
    produccion: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80',
    // Instalación de audio — equipo de sonido profesional en venue
    instalaciones: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80',
  },

  servicios: {
    sonido: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=75',
    contenido: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=75',
    artistas: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=75',
    catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=75',
    seguridad: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=75',
    logistica: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75',
  },

  espacios: {
    restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75',
    teatro: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=75',
    auditorio: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=75',
    boliche: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=75',
    supermercado: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=75',
    acustica: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&q=75',
  },

  clientes: {
    casino: 'https://images.unsplash.com/photo-1596838132731-3301c3ef1987?w=800&q=75',
    festival: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=75',
  },

  equipo: {
    persona1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75',
    persona2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=75',
  },
} as const
