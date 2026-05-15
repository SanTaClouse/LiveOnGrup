import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'proyecto',
  type: 'document',
  title: 'Proyectos',
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
      title: 'Título del proyecto',
      validation: r => r.required().min(3).max(80),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug (URL)',
      description: 'Se genera solo a partir del título. Definir antes de publicar.',
      options: { source: 'titulo', maxLength: 80 },
      validation: r => r.required(),
    }),
    defineField({
      name: 'linea',
      type: 'string',
      title: 'Línea de negocio',
      options: {
        list: [
          { title: 'Instalaciones', value: 'instalaciones' },
          { title: 'Producción',    value: 'produccion'    },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'categoria',
      type: 'string',
      title: 'Categoría',
      description: 'Para instalaciones: restaurant, teatro, auditorio, boliche, comercio, acústica, otro. Para producción: festival, corporativo, gala, show, otro.',
      options: {
        list: [
          // Instalaciones
          { title: 'Restaurant',  value: 'restaurant' },
          { title: 'Teatro',      value: 'teatro' },
          { title: 'Auditorio',   value: 'auditorio' },
          { title: 'Boliche',     value: 'boliche' },
          { title: 'Comercio',    value: 'comercio' },
          { title: 'Acústica',    value: 'acustica' },
          // Producción
          { title: 'Festival',    value: 'festival' },
          { title: 'Corporativo', value: 'corporativo' },
          { title: 'Gala',        value: 'gala' },
          { title: 'Show',        value: 'show' },
          // Común
          { title: 'Otro',        value: 'otro' },
        ],
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'subtitulo',
      type: 'string',
      title: 'Subtítulo',
      description: 'Frase corta que aparece en la card del listado.',
      validation: r => r.required().max(140),
    }),
    defineField({
      name: 'descripcion',
      type: 'text',
      title: 'Descripción completa',
      description: 'Texto largo que aparece en la página del proyecto. Usar doble salto de línea para separar párrafos.',
      rows: 8,
      validation: r => r.required(),
    }),
    defineField({
      name: 'anio',
      type: 'number',
      title: 'Año',
      validation: r => r.required().integer().min(1990).max(new Date().getFullYear() + 1),
    }),
    defineField({
      name: 'ubicacion',
      type: 'string',
      title: 'Ubicación',
      description: 'Ciudad o barrio. Ej: "Santa Fe, Argentina".',
      validation: r => r.required(),
    }),
    defineField({
      name: 'imagenPrincipal',
      type: 'image',
      title: 'Imagen principal',
      description: 'Foto destacada — aparece en la card, hero del proyecto, y Open Graph.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Describí brevemente la imagen para accesibilidad y SEO.',
          validation: r => r.required(),
        }),
      ],
      validation: r => r.required(),
    }),
    defineField({
      name: 'galeria',
      type: 'array',
      title: 'Galería de imágenes',
      description: 'Fotos adicionales del proyecto. La imagen principal no se repite acá.',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
              validation: r => r.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'detalleTecnico',
      type: 'object',
      title: 'Detalle técnico',
      description: 'Solo para instalaciones. Dejar vacío en proyectos de producción.',
      hidden: ({ document }) => document?.linea !== 'instalaciones',
      fields: [
        defineField({ name: 'tipoSistema',    type: 'string',                 title: 'Tipo de sistema' }),
        defineField({ name: 'marcas',         type: 'array', of: [{ type: 'string' }], title: 'Marcas', options: { layout: 'tags' } }),
        defineField({ name: 'superficieM2',   type: 'number',                 title: 'Superficie (m²)' }),
        defineField({ name: 'cantidadPuntos', type: 'number',                 title: 'Cantidad de puntos de sonido' }),
        defineField({ name: 'notas',          type: 'text', rows: 3,          title: 'Notas técnicas' }),
      ],
    }),
    defineField({
      name: 'publicado',
      type: 'boolean',
      title: '¿Publicar proyecto?',
      description: 'Si está desactivado, el proyecto no aparece en el sitio público.',
      initialValue: true,
    }),
    defineField({
      name: 'orden',
      type: 'number',
      title: 'Orden de aparición',
      description: 'Menor número = aparece primero en el listado.',
      initialValue: 100,
      validation: r => r.integer().min(0),
    }),
  ],
  preview: {
    select: {
      title:  'titulo',
      linea:  'linea',
      anio:   'anio',
      media:  'imagenPrincipal',
    },
    prepare({ title, linea, anio, media }) {
      return {
        title: title || '(sin título)',
        subtitle: [linea, anio].filter(Boolean).join(' · '),
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Orden manual',
      name: 'ordenAsc',
      by: [{ field: 'orden', direction: 'asc' }],
    },
    {
      title: 'Más recientes',
      name: 'anioDesc',
      by: [{ field: 'anio', direction: 'desc' }],
    },
  ],
})
