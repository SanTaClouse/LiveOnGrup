// ─── TIPOS BASE ──────────────────────────────────────────────────────────────

export type LineaDeNegocio = 'produccion' | 'instalaciones'

export type CategoriaProduccion =
  | 'festival'
  | 'corporativo'
  | 'gala'
  | 'show'
  | 'otro'

export type CategoriaInstalacion =
  | 'restaurant'
  | 'teatro'
  | 'auditorio'
  | 'boliche'
  | 'comercio'
  | 'acustica'
  | 'otro'

export type Categoria = CategoriaProduccion | CategoriaInstalacion

// ─── IMAGEN ──────────────────────────────────────────────────────────────────

export interface ImagenProyecto {
  /** URL de Cloudinary — usar transformaciones en la URL si necesitás distintos tamaños */
  url: string
  /** Texto alternativo descriptivo para accesibilidad y SEO */
  alt: string
  /** Ancho original en px — requerido por next/image */
  width: number
  /** Alto original en px — requerido por next/image */
  height: number
}

// ─── DETALLE TÉCNICO (opcional, solo Instalaciones) ──────────────────────────

export interface DetalleTecnico {
  /** Marca/s del equipamiento instalado */
  marcas?: string[]
  /** Tipo de sistema: "Sistema de zonas múltiples", "Línea de arrays", etc. */
  tipoSistema?: string
  /** Superficie aproximada del espacio en m² */
  superficieM2?: number
  /** Cantidad de bocinas/parlantes instalados */
  cantidadPuntos?: number
  /** Descripción técnica libre para detalles adicionales */
  notas?: string
}

// ─── PROYECTO ─────────────────────────────────────────────────────────────────

export interface Proyecto {
  /** ID único — se convierte en la URL: /instalaciones/casino-santa-fe */
  slug: string

  /** Línea de negocio a la que pertenece */
  linea: LineaDeNegocio

  /** Categoría del proyecto */
  categoria: Categoria

  /** Nombre del proyecto o cliente */
  titulo: string

  /** Subtítulo breve — aparece en la card del listado */
  subtitulo: string

  /**
   * Descripción completa — aparece en la página del proyecto.
   * Puede contener saltos de línea (\n) para párrafos.
   */
  descripcion: string

  /** Año de realización */
  anio: number

  /** Ubicación — ciudad o barrio */
  ubicacion: string

  /**
   * Imagen principal del proyecto.
   * Se usa en: card del listado, hero de la página de detalle, Open Graph.
   */
  imagenPrincipal: ImagenProyecto

  /**
   * Galería de imágenes — se muestra en grilla con lightbox.
   * Mínimo 1, sin límite. La imagenPrincipal NO se repite aquí.
   */
  galeria: ImagenProyecto[]

  /**
   * Detalle técnico — solo para línea de instalaciones.
   * Opcional para producción (puede dejarse undefined).
   */
  detalleTecnico?: DetalleTecnico

  /**
   * Si el proyecto puede mostrarse públicamente.
   * false = no aparece en el listado ni tiene ruta accesible.
   */
  publicado: boolean

  /**
   * Orden de aparición en el listado — menor número = antes.
   * Permite controlar manualmente qué proyectos aparecen primero.
   */
  orden: number
}
