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
    sonido: 'https://images.unsplash.com/photo-1506704888326-3b8834edb40a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    contenido: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=75',
    artistas: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=75',
    catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=75',
    seguridad: 'https://images.unsplash.com/photo-1581568736305-49a04e012c13?q=80&w=647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logistica: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    persona1: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775834281/borrarpablo_tx5qrm.jpg',
    persona2: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1775834281/borrar_mati_f61mik.jpg',
  },
} as const
