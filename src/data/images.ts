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
    home: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1779462194/Asoem_pantallas_by7c7j.png',
    // Producción de evento — stage con luces profesionales
    produccion: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1782484910/691ea3a2-ec2e-40c7-90e8-dfb82ba53579.png',
    // Instalación de audio — equipo de sonido profesional en venue
    instalaciones: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1779463338/9bea0e3c-bf6a-4140-b6c0-2f8f0db71d1b.png',
  },

  servicios: {
    sonido: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1779463338/9bea0e3c-bf6a-4140-b6c0-2f8f0db71d1b.png',
    contenido: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1779462194/Asoem_pantallas_by7c7j.png',
    artistas: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1779462873/92c18643-a714-4e16-b271-d440ea6f4238.png',
    catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=75',
    seguridad: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1782485081/d89eb2d9-9260-4ba2-99ae-0d6286daecc2.png',
    logistica: 'https://res.cloudinary.com/dlw9ocu3b/image/upload/v1779463109/82358566-ae16-41b1-94de-8223970ed5d8.png',
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
